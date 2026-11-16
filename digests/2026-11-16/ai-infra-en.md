# AI Infrastructure Digest 2026-11-16

> Generated: 2026-11-16 02:22 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-11-16**

---

### **1. Ecosystem Overview**  
The AI infrastructure landscape in late 2026 is defined by a sharp divergence between **high-performance serving engines**, **multi-modal agent platforms**, and **distributed training accelerators**. Projects like vLLM and SGLang are pushing the boundaries of inference efficiency with speculative decoding, advanced KV cache management, and unified memory systems—targeting large-scale LLM agents. Meanwhile, llama.cpp and Ollama continue to dominate local, low-latency deployments with growing support for TTS, multimodal models, and cross-backend portability. Unsloth is emerging as a key player in fine-tuning and distributed training, particularly for MoE and vision-language models. The trend toward modular, composable stacks is evident: LiteLLM acts as a proxy layer enabling interoperability across providers, while tool-use and reasoning pipelines are becoming first-class concerns.

---

### **2. Activity Comparison**

| Project        | Issues Open | PRs Merged (Last 24h) | Releases | Breaking Changes |
|----------------|-------------|--------------------------|----------|------------------|
| **vLLM**       | 387         | 12                       | None     | None             |
| **SGLang**     | 521         | 9                        | None     | Yes (v1.0 roadmap) |
| **llama.cpp**  | 489         | 8                        | None     | Reverted (Jinja) |
| **Ollama**     | 342         | 6                        | None     | None             |
| **LiteLLM**    | 612         | 10                       | `dev.4`  | Yes (signing)    |
| **Unsloth**    | 314         | 7                        | None     | Yes (API aliasing) |

> ✅ *Insight*: LiteLLM and SGLang show higher signal-to-noise ratios in activity, reflecting mature development cycles focused on stability and API maturity. vLLM leads in PR volume, indicating active optimization momentum.

---

### **3. Model Support Race**

| New Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------------|------|--------|-----------|--------|---------|---------|
| **Raon-1-mini-preview (28.8B)** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Zonos3-mini (TTS)** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Higgs v3 STT / VibeVoice-ASR** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Inkling 1 (text/vision/audio)** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **YuE2-3B (multimodal)** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Mistral-Large-4 (MoE, 1M context)** | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **DeepSeek-V4.1-Flash (MI300X)** | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **Qwen3.8-Flash-Next (GGUF)** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |

> 🏆 **Winner**: **llama.cpp** leads in **multimodal and TTS model integration**, leveraging its `mtmd` pipeline for rapid adoption. **SGLang** is ahead in **cutting-edge MoE and long-context support** (e.g., Mistral-Large-4, YaRN up to 1M tokens). **Unsloth** dominates in **fine-tuned model training** with Qwen3.8-Flash-Next and GatedDeltaNet optimizations.

---

### **4. Performance Frontier**

| Focus Area                | vLLM                          | SGLang                        | llama.cpp                     | Ollama                      | LiteLLM                    | Unsloth                     |
|----------------------------|-------------------------------|-------------------------------|-------------------------------|-----------------------------|----------------------------|-----------------------------|
| **KV Cache Efficiency**    | ✅ High (prefix caching, verified transfers) | ⚠️ Moderate (ongoing scheduler logic) | ❌ Limited (Flash Attention fix only) | ⚠️ Context shift bug fixed | ⚠️ Semantic cache issues | ❌ Not prioritized |
| **Speculative Decoding**   | ✅ Core focus (lookahead hashes) | ⚠️ Regression (SM90 decode latency) | ⚠️ HIP/AMD performance drop | ❌ Tool-call corruption | ⚠️ Stream TTFT timeout | ✅ Block compilation |
| **Batching & Concurrency** | ✅ Advanced (V1 scheduler, prefill limits) | ✅ Unified memory, DFlash graphs | ⚠️ Per-batch buffer growth | ✅ GPU splitting fix | ⚠️ Sticky session broken | ✅ Packed SFT batching |
| **Quantization & Offload** | ✅ ROCm/XPU/MoE fusions | ✅ KT CPU offload (experimental) | ✅ WebGPU/OpenCL kernels | ✅ MMProj headroom config | ✅ ECB exchange rates | ✅ FSDP2 + frozen teacher offload |
| **Distributed Serving**    | ✅ MooncakeConnector debug tools | ✅ Ascend A3, MI355X DP attention | ❌ No distributed support | ❌ No multi-GPU coordination | ✅ Proxy routing (Anthropic/MCP) | ✅ Tensor parallelism (TP fixes) |

> 🔍 **Key Insight**: **vLLM** remains the leader in **production-grade inference optimization**, especially for high-throughput, long-context workloads. **Unsloth** excels in **training scalability and distributed execution**, while **LiteLLM** focuses on **proxy-level resilience and cost tracking** under load.

---

### **5. Layer Positioning**

| Project        | Primary Layer                     | Role Summary |
|----------------|------------------------------------|--------------|
| **vLLM**       | **Inference Engine**               | High-efficiency, low-latency serving with advanced scheduling and kernel optimizations. Targets cloud-scale inference. |
| **SGLang**     | **Inference Engine + Agent Framework** | Combines engine features with agent orchestration (e.g., tool use, planning), positioned for next-gen agentic workflows. |
| **llama.cpp**  | **Local Runtime / Embedded Engine** | Lightweight, cross-platform inference runtime with strong support for GGUF, TTS, and multimodal models—ideal for edge and desktop. |
| **Ollama**     | **Model Gateway + Local CLI**      | Developer-friendly gateway for local model deployment, with growing tool-use and multimodal capabilities. Bridges local inference and agent apps. |
| **LiteLLM**    | **API Gateway / Proxy Layer**      | Enables multi-provider routing, semantic caching, and cost monitoring—critical for production proxy stacks and agent orchestration. |
| **Unsloth**    | **Fine-Tuning & Training Framework** | Specializes in efficient, scalable training (especially MoE, vision models) with tensor parallelism and block compilation. |

> 🧩 **Strategic View**: The stack is now **layered and composable**:  
> - **Training**: Unsloth → **Fine-tune**  
> - **Serving**: vLLM/SGLang → **Serve**  
> - **Proxy/Gateway**: LiteLLM/Ollama → **Route & Monitor**  
> - **Local Runtime**: llama.cpp → **Run Locally**  

---

### **6. Trend Signals**

#### **Emerging Trends from Today’s Activity**
1. **Agent-Centric Optimization**:  
   - Tools like `qwen3.5`/`qwen3-coder` are now central to stability testing — highlighting that **tool use and reasoning fidelity** are no longer edge cases but core reliability requirements.
   - LiteLLM’s `thinking_delta` streaming bug and Ollama’s tool-call corruption underscore the need for robust **streaming protocol alignment** across providers.

2. **Hardware Diversity Driving Innovation**:  
   - AMD ROCm (MI300X, MI355X), Intel Arc (Vulkan/SYCL), and Ascend NPU are seeing targeted optimizations — signaling **vendor-agnostic inference** is maturing beyond NVIDIA.
   - Experimental support for KT CPU offload (SGLang) and SYCL builds (llama.cpp) indicates growing interest in **heterogeneous, non-NVIDIA compute**.

3. **Security & Observability First**:  
   - SSRF fixes in vLLM, OIDC-based release signing in LiteLLM, and MooncakeConnector debug tools reflect a shift toward **secure-by-default deployment practices** and **observability in distributed inference**.

4. **Quantization & Memory Management Are Still Pain Points**:  
   - Persistent issues with JIT compilation (vLLM), GPU splitting (Ollama), and VRAM misreporting (Unsloth/SYCL) reveal that **memory predictability remains a bottleneck** in real-world deployments.

#### **What Developers Should Watch**
- **Avoid using v0.5.23 of SGLang on Hopper GPUs** — revert to v0.5.22 or apply the patch.
- **Do not stream `qwen3.5`/`qwen3-coder` models via Ollama until v0.40.16+** — risk of missing tool arguments.
- **Update verification workflows for LiteLLM** — legacy `cosign verify --key` will fail due to keyless OIDC signing.
- **Monitor AMD/Intel backend regressions** — especially in HIP, Vulkan, and SYCL backends across llama.cpp and Unsloth.
- **Plan for dynamic configuration switching** — Unsloth’s model aliases enable adaptive inference profiles without redeployment.

> ✅ **Final Takeaway**: The ecosystem is transitioning from "can we run it?" to "can we trust it at scale?" — reliability, security, and observability are now as critical as raw speed. Choose your stack based on **your deployment layer** and **application safety requirements**.

---  
*Compiled from GitHub activity (2026-11-16) | Target Audience: Infrastructure Engineers, CTOs, ML Platform Architects*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

---

### **vLLM Digest — 2026-11-16**

#### **1. Today's Highlights**  
The vLLM project continues to deepen its support for AMD ROCm and multi-modal inference, with key PRs improving KV cache management, speculative decoding, and cross-platform stability. Notably, a major refactor removes legacy EAGLE block dropping in favor of lookahead hashes, while new MooncakeConnector debug features enhance reliability in distributed setups.

#### **2. Releases & Breaking Changes**  
None. No new releases or breaking changes were published in the last 24 hours.

#### **3. New Model & Hardware Support**  
- ✅ **ROCm Support**: Added MI300X AgentX preset for `DeepSeek-V4.1-Flash` ([PR #67586](https://github.com/vllm-project/vllm/pull/67586)) and ongoing optimizations for gfx950 / MI355X ([Issue #57149](https://github.com/vllm-project/vllm/issues/57149)).  
- ✅ **New Models**: Added support for `Raon-1-mini-preview` (28.8B) via DFlash spec-decoding fix ([PR #64672](https://github.com/vllm-project/vllm/pull/64672)).  
- ✅ **Intel GPU (XPU)**: Ongoing work to port Qwen3.5 models to eager execution and fuse MoE decode paths ([PR #64687](https://github.com/vllm-project/vllm/pull/64687)), with CI test fixes for LoRA workflows ([PR #67824](https://github.com/vllm-project/vllm/pull/67824)).  
- 🔐 **Security Fix**: Blocked SSRF vulnerabilities in media connector by restricting access to private/link-local IPs ([PR #67826](https://github.com/vllm-project/vllm/pull/67826)).

#### **4. Performance & Optimization**  
- 🚀 **KV Cache Efficiency**: PRs #66234 and #67825 optimize prefix caching and reduce redundant transfers via verified-transfer debug mode ([PR #66566](https://github.com/vllm-project/vllm/pull/66566)) and improved scheduler admission logic ([PR #66725](https://github.com/vllm-project/vllm/pull/66725)).  
- ⚡ **Speculative Decoding**: Refactor to default to lookahead hashes improves reuse and reduces unnecessary block drops ([PR #66234](https://github.com/vllm-project/vllm/pull/66234)).  
- 💾 **Memory Optimization**: Addressing silent JIT kernel compilation during production loads ([Issue #64824](https://github.com/vllm-project/vllm/issues/64824)) and fixing excessive CPU RAM usage in ModelOpt NVFP4 checkpoints ([Issue #46268](https://github.com/vllm-project/vllm/issues/46268)).  
- 📈 **Long-Prefill Workloads**: Ongoing investigation into long-prefill decode starvation on 2× GB10 systems ([Issue #62574](https://github.com/vllm-project/vllm/issues/62574)) and concurrent partial prefill limits in V1 scheduler ([Issue #57413](https://github.com/vllm-project/vllm/issues/57413)).

#### **5. Stability & Regressions**  
- 🔥 **Critical Crashes**:  
  - `Qwen2.5-0.5B` crashes with CUDA illegal memory access during warmup ([Issue #66244](https://github.com/vllm-project/vllm/issues/66244)) — no fix yet.  
  - `Kimi-K3` degenerates to repeated tokens after long-context prefill due to NaN logits ([Issue #51039](https://github.com/vllm-project/vllm/issues/51039)) — active investigation.  
- 🛠 **Regression Fixes in Progress**:  
  - `GLM-5.3-Flash` tool parser silently drops unknown function calls ([Issue #67684](https://github.com/vllm-project/vllm/issues/67684)).  
  - `DelegatingParser.parse()` ignores `model_output_token_ids`, causing misparse in non-streaming mode ([Issue #64326](https://github.com/vllm-project/vllm/issues/64326)).  
- ❌ **CI Failures**: Persistent failures in NVIDIA nightly builds related to quantization and modelopt checkpoints ([Issue #67307](https://github.com/vllm-project/vllm/issues/67307), [Issue #67664](https://github.com/vllm-project/vllm/issues/67664)).

#### **6. What This Means for Application Developers**  
Developers serving high-throughput, long-context agents should monitor `Kimi-K3` and `GLM-5.3-Flash` stability issues—especially around token repetition and tool parsing. For production deployments on AMD hardware, ensure you're using up-to-date ROCm configurations (e.g., MI355X/gfx950). The new MooncakeConnector debug tools enable better observability in distributed inference stacks. If using speculative decoding or MoE models, expect ongoing improvements in KV cache efficiency and reduced runtime surprises from JIT compilation. Finally, avoid untrusted media URLs until the SSRF patch is deployed.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# **SGLang Digest – 2026-11-16**

---

### **1. Today's Highlights**  
The SGLang project continues to advance its stability and performance focus ahead of the **SGLang 1.0 release**, with key work on unified memory, speculative decoding optimizations, and robust CI/CD tracking. Critical regressions in Hopper (SM90) decode performance have been identified and addressed via targeted PRs, while new support for Mistral-Large-4 and enhanced NPU workflows strengthens cross-platform capabilities.

---

### **2. Releases & Breaking Changes**  
No new releases were published in the last 24 hours. However, **SGLang 1.0** is now actively tracked in [#50045](https://github.com/sgl-project/sglang/issues/50045), signaling a shift toward API stability and breaking change transparency. Upgrades from `0.5.x` may require configuration adjustments due to stricter validation of settings.

---

### **3. New Model & Hardware Support**  
- **Mistral-Large-4** (`mistralai/Mistral-Large-4-1T-A52B`) added via [PR #47271](https://github.com/sgl-project/sglang/pull/47271), supporting MoE, cross-layer KV sharing, and YaRN up to 1M tokens.
- **Ascend A3** deployment scenarios expanded for **DeepSeek-v3.2** ([PR #49167](https://github.com/sgl-project/sglang/pull/49167)) and **GLM-5.1** ([PR #45655](https://github.com/sgl-project/sglang/pull/45655)).
- Experimental **KT CPU expert offload** on Ascend NPU introduced with TP=2 opt-in ([PR #50675](https://github.com/sgl-project/sglang/pull/50675)).
- **AMD MI355X DP attention recipes** extended to concurrency 128/256 ([PR #50677](https://github.com/sgl-project/sglang/pull/50677)).

---

### **4. Performance & Optimization**  
- **Hopper (SM90) decode regression**: v0.5.23 shows **+33–45% per-step decode latency** at concurrency 12 vs v0.5.22 ([Issue #49336](https://github.com/sgl-project/sglang/issues/49336)). Fixed by disabling DeepSelect decode path and reverting to top-k v2 via [PR #49978](https://github.com/sgl-project/sglang/pull/49978).
- **DFlash auxiliary CUDA graphs**: Memory growth due to per-batch-size buffer retention mitigated via [PR #50577](https://github.com/sgl-project/sglang/pull/50577), which introduces shared buffer pooling.
- **Mega-MoE optimization**: Enabled DeepGEMM weight localization on SM 10.0/10.3 via [PR #50608](https://github.com/sgl-project/sglang/pull/50608).
- **Anima diffusion**: Request size alignment to 16-pixel grid fixes HTTP 500 errors ([PR #50599](https://github.com/sgl-project/sglang/pull/50599)).

---

### **5. Stability & Regressions**  
- **Critical crash**: `CUDA coredump` tracker ([Issue #26340](https://github.com/sgl-project/sglang/issues/26340)) now has **368 comments** — indicates widespread instability during CI testing; root cause under investigation.
- **Speculative decoding failure**: `glm5` + EAGLE crashes due to illegal memory access in FlashInfer TRTLLM BF16 GEMM ([Issue #30209](https://github.com/sgl-project/sglang/issues/30209)), confirmed on B200/B300.
- **Health check failure**: `glm5` on H100 fails health checks after 20 seconds (no detokenizer response) — closed but unresolved ([Issue #22511](https://github.com/sgl-project/sglang/issues/22511)).
- **Tokenizer hang**: Cold `TokenizerWorker` can hang on pause/continue due to uninitialized receive loop ([Issue #39689](https://github.com/sgl-project/sglang/issues/39689)).

> ✅ *Fixes in progress*: [PR #49978](https://github.com/sgl-project/sglang/pull/49978) addresses SM90 regression; others remain open.

---

### **6. What This Means for Application Developers**  
- **Expect breaking changes**: As SGLang 1.0 nears, expect stricter config validation and potential deprecations — audit configs early.
- **Avoid v0.5.23 on Hopper (SM90)**: If using speculative decoding or high-concurrency inference, revert to v0.5.22 or apply [PR #49978](https://github.com/sgl-project/sglang/pull/49978) as a workaround.
- **Leverage unified memory**: The ongoing [Unified Memory roadmap](https://github.com/sgl-project/sglang/issues/49944) enables dynamic state management — ideal for variable-length or long-context workloads.
- **Use experimental NPU features cautiously**: KT CPU offload and A3 deployments are marked experimental — validate behavior under load before production use.
- **Monitor CI health**: Use [CI Test Failures Tracker](https://github.com/sgl-project/sglang/issues/17050) to stay informed about test reliability and infrastructure issues affecting builds.

---  
*Digest compiled from GitHub activity on 2026-11-16 | Source: [sgl-project/sglang](https://github.com/sgl-project/sglang)*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-11-16**

---

### **1. Today’s Highlights**  
The latest development cycle centers on expanded TTS and multimodal model support, with key updates to the `mtmd` (multimodal) pipeline enabling new models like *Zonos3-mini*, *Higgs v3 STT*, *VibeVoice-ASR*, and *YuE2-3B*. Critical fixes were merged for Jinja template parsing (supporting `//` floor division and `sort_keys=true`) and a long-standing issue in Flash Attention that caused GPU crashes under certain conditions.

---

### **2. Releases & Breaking Changes**  
No new releases were published today. However, two PRs related to Jinja templating were merged and then reverted due to instability:
- [PR #32352](https://github.com/ggml-org/llama.cpp/pull/32352): Added 4 missing Jinja features (e.g., `//` floor division) for Kokoro TTS — **reverted** ([PR #32335](https://github.com/ggml-org/llama.cpp/pull/32335)).
- The revert highlights ongoing work to stabilize advanced template features used in production-grade TTS pipelines.

---

### **3. New Model & Hardware Support**  
- **TTS Models**: Added support for:
  - *Higgs v3 STT* and *VibeVoice-ASR* via `mtmd` (#32329).
  - *Zonos3-mini* TTS with voice cloning, delivery params, and text normalization (#32020).
- **Multimodal Models**: 
  - Added support for *Inkling 1* (text, vision, audio) via `llama_model_init_from_user` integration (#32354).
  - Added *YuE2-3B* as an all-in-one mmproj model (#32369).
- **Hardware Backends**: 
  - WebGPU now supports `POOL_2D` operations with contiguous F32 input (#32250).
  - OpenCL added `FLASH_ATTN_EXT GMEM` kernel for optimized FastWan workflows (#32302).

---

### **4. Performance & Optimization**  
- **Flash Attention Fix**: A critical bug in SYCL backend was resolved: incorrect mask broadcasting over heads/batches caused GPU device loss or NaN outputs. Fixed in [#31536](https://github.com/ggml-org/llama.cpp/pull/31536), with unit tests added.
- **Kernel Optimizations**:
  - SpacemiT RVV kernels fixed for null mask handling and ALiBi/softcap issues on A100 cores with VLEN=1024 (#32182).
  - Improved offload scheduling logic to prevent unnecessary CPU-GPU transfers when weights are 1-D (#32368).
- **Speculative Decoding**: CI now triggers spec-dec testing automatically after relevant PRs (#32281), improving stability tracking.

---

### **5. Stability & Regressions**  
Critical stability issues reported today include:
- **Vulkan**: Garbage output from GLM-OCR vision encoder on Intel Arc A380 (full-page images) — confirmed in `b12169` (#31836).
- **HIP**: ~80% drop in prefill throughput with `--spec-type draft-mtp` on Qwen3.8-27B GGUF — regression not seen in Vulkan (#31495).
- **Metal**: macOS M5 Max OOM and Compute Error (-3) with Gemma 4 31B using default `n_ctx` (#29521).
- **SYCL**: `--split-mode tensor` hangs with quantized KV cache and is 3x slower than single GPU (#26409).
- **CUDA**: High CPU usage regression introduced in `b10423`, persisting through recent builds (#29858).

> ✅ **Fixes in progress**: Several PRs address underlying causes (e.g., memory management in `mtmd`, flash attention edge cases). No patch yet for the HIP performance regression.

---

### **6. What This Means for Application Developers**  
- **TTS/Agent Builders**: You can now integrate *Zonos3-mini*, *Higgs v3*, and *YuE2-3B* directly into your apps via `mtmd` without external orchestration. Use `--voice-clone` and `--delivery-params` for fine-grained control.
- **Template Engine Users**: Jinja improvements enable more complex text generation (e.g., number formatting), but avoid using unmerged versions until stability is confirmed.
- **Deployment Teams**: Expect potential regressions on AMD (RADV), Intel Arc (Vulkan/SYCL), and HIP backends — especially with speculative decoding (`draft-mtp`, `dflash`). Test with `--no-speculative` if needed.
- **Quantization & Memory**: Be cautious with large `n_ctx` values on Apple Silicon; consider lowering context size or using `--cache-prompt` to mitigate OOM risks.

> 🔗 [GitHub Issues](https://github.com/ggml-org/llama.cpp/issues) | [PRs](https://github.com/ggml-org/llama.cpp/pulls) | [Official Site](https://llama.app)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-16**

---

### **1. Today's Highlights**  
The Ollama project continues to strengthen its multimodal and tool-use capabilities, with critical fixes for `qwen3.5`/`qwen3-coder` parser bugs that were corrupting or dropping tool call arguments during streaming. A new PR introduces support for configurable `mmproj` headroom (Issue #19407), addressing memory constraints in multimodal models. Additionally, a major fix lands for VRAM accounting and GPU splitting (#19632), resolving model eviction and misallocation issues across multi-GPU setups.

---

### **2. Releases & Breaking Changes**  
*No new releases in the last 24 hours.*  
However, **API documentation has been updated** to include `logprobs` and `top_logprobs` parameters in the API reference ([PR #19710](https://github.com/ollama/ollama/pull/19710)), improving clarity for developers using advanced inference features. No breaking changes reported today.

---

### **3. New Model & Hardware Support**  
- **Reranking models**: High demand from users (Issue #3368) for support of BAAI/bge-reranker-large and mixedbread-ai/mxbai-rerank-large-v1 — currently not supported but under active discussion.
- **MLX-C + XGrammar integration**: PR #19688 enables independent packaging and linking of MLX-C and XGrammar binaries, improving compatibility with package managers like Homebrew and enabling future optimizations on Apple Silicon.
- **Talos & Kunji integrations added**: New `ollama launch` integrations announced via PRs #18093 and #19709, expanding ecosystem reach for local AI workflows.

---

### **4. Performance & Optimization**  
- **VRAM accounting & GPU splitting**: PR #19632 resolves multiple underlying issues (#19463, #18679, #18349, #16599) causing incorrect model loading, premature eviction, and inefficient GPU utilization. This improves performance and stability on multi-GPU systems.
- **Context shift neutrality**: PR #19680 fixes a bug where `--context-shift` multiplied RoPE amplitude factors repeatedly, potentially degrading long-context accuracy. Fixes #19457.
- **Build-time optimization**: GCC 15 build failure due to missing `<cstdint>` in `llama-mmap.h` now addressed in PR #19714, ensuring cross-platform compatibility with newer compilers.

---

### **5. Stability & Regressions**  
- **Critical tool-call corruption (high severity)**: Multiple issues (#19694, #19711, #19650) affect `qwen3.5`, `qwen3-coder`, and `mimo-v2.6:9b` models, where tool call arguments are dropped or returned as `{}`. Fixed by PR #19705, which preserves literal text in streamed tool calls.
- **Windows image processing failure**: Issue #16532 reports `gemma4` fails to process images on Windows — likely tied to backend driver or path handling; no fix yet.
- **Socket binding conflicts**: Two duplicate reports (#3575, #19712) highlight port 11434 already in use. While common, they indicate potential startup reliability issues.
- **Goroutine leaks**: Issue #17131 confirms streaming handlers leak goroutines and runner semaphore slots on client disconnect — requires architectural fix.

---

### **6. What This Means for Application Developers**  
- **Tool-use applications must avoid `qwen3.5`/`qwen3-coder` until v0.40.16+** — current versions risk losing or corrupting function arguments during streaming. Use PR #19705 workaround or wait for patch release.
- **Multimodal apps should monitor `mmproj` memory usage** — fixed headroom is now configurable (PR #19407), allowing better control over large vision models on constrained devices.
- **Use `logprobs` and `top_logprobs` safely** — now properly documented in API reference (PR #19710), enabling probabilistic reasoning pipelines.
- **Avoid `--context-shift` with high-amplitude RoPE models** until PR #19680 merges — otherwise, context quality may degrade over time.
- **Ensure no other service uses port 11434** before launching Ollama, especially in CI/CD environments or shared dev machines.

> ✅ *Recommendation*: Monitor [PR #19632](https://github.com/ollama/ollama/pull/19632) and [PR #19705](https://github.com/ollama/ollama/pull/19705) for upcoming stable patches affecting core functionality.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

---

### **LiteLLM Digest — 2026-11-16**

#### **1. Today's Highlights**
The latest development release, `v1.111.0-dev.4`, introduces a critical shift in release signing: **keyless cosign via GitHub OIDC** replaces the legacy `cosign.pub` key. This change impacts verification workflows and requires updating CLI commands for validation. Simultaneously, multiple high-severity issues around streaming behavior, cache correctness, and budget accounting have been reported, particularly affecting Anthropic `/v1/messages`, semantic caching, and cost tracking — indicating active stress testing in production proxy environments.

#### **2. Releases & Breaking Changes**
- **`v1.111.0-dev.4` (latest)**:  
  🔥 **Breaking Change**: Release signing now uses **Sigstore keyless cosign with GitHub OIDC**, rendering `cosign verify --key ...` obsolete. Use `cosign verify --signature <sig> --certificate-oidc <cert>` instead.  
  📌 [Release Notes](https://github.com/BerriAI/litellm/releases/tag/v1.111.0-dev.4) | [Verification Guide](https://docs.sigstore.dev/keyless/)  
- **`v1.111.0-dev.3`**: Partially published; **do not use** — upgrade to `dev.4`.

#### **3. New Model & Hardware Support**
No new models or hardware backends were added today. However:
- **Anthropic MCP tool use** is now properly surfaced in `/chat/completions` responses via PR [#50977](https://github.com/BerriAI/litellm/pull/50977).
- **DeepSeek Fetch tool** support was merged in PR [#50618](https://github.com/BerriAI/litellm/pull/50618), enabling native proxy routing for external data fetching.
- **Qoder Cloud Agents** integration landed in PR [#50041](https://github.com/BerriAI/litellm/pull/50041), expanding agent deployment options via proxy.

#### **4. Performance & Optimization**
- **Stream TTFT Timeout**: PR [#51974](https://github.com/BerriAI/litellm/pull/51974) adds `stream_ttft_timeout` to prevent hanging requests when upstreams fail to emit first tokens — crucial for fallback resilience.
- **Cache Key Efficiency**: Issue [#51935](https://github.com/BerriAI/litellm/issues/51935) highlights a performance bottleneck where large base64 payloads (e.g., images) cause O(n²) stringification during cache key computation. Fix pending.
- **Cost Tracking**: PR [#51934](https://github.com/BerriAI/litellm/pull/51934) enables automatic ECB exchange rate lookup for custom currency pricing — reducing manual config overhead.

#### **5. Stability & Regressions**
| Severity | Issue | Description | Fix Status |
|--------|------|-------------|-----------|
| ⚠️ High | [#32357](https://github.com/BerriAI/litellm/issues/32357) | Streaming `thinking_delta` from reasoning models mis-encoded into `text` block → empty content in Claude SDK | ✅ PR #50977 (fix in progress) |
| ⚠️ High | [#51900](https://github.com/BerriAI/litellm/issues/51900) | Semantic cache returns cross-request tool call arguments due to high cosine similarity (0.9749) | ❌ No fix yet |
| ⚠️ High | [#51954](https://github.com/BerriAI/litellm/issues/51954) | Anthropic rejects concatenated JSON tool args split by Bedrock | ❌ No fix yet |
| ⚠️ Medium | [#48401](https://github.com/BerriAI/litellm/issues/48401) | OpenRouter drops pure `reasoning_details` chunks (e.g., signature-only) in streaming | ❌ No fix yet |
| ⚠️ Medium | [#50029](https://github.com/BerriAI/litellm/issues/50029) | Sticky session broken — router sends requests to different endpoints | ❌ No fix yet |
| ⚠️ Low | [#51452](https://github.com/BerriAI/litellm/issues/51452) | `ModelNotMappedError` on startup with no context | ❌ No fix yet |

#### **6. What This Means for Application Developers**
- **Update your verification pipelines**: If you rely on `cosign verify --key`, migrate immediately to keyless verification using GitHub OIDC. Legacy methods will fail.
- **Be cautious with reasoning models**: Streaming output from models like GLM/DeepSeek-R1 may break in Anthropic-compatible clients unless using updated proxy versions. Monitor for empty content.
- **Avoid semantic cache for parameterized tools**: Until [#51900](https://github.com/BerriAI/litellm/issues/51900) is resolved, disable `redis-semantic` caching if your app uses dynamic `tool_calls`.
- **Use `stream_ttft_timeout`**: Add this to your deployments to prevent client timeouts during slow upstream inference — essential for robust fallback chains.
- **Monitor cost/budget logic**: Multiple issues in budget resets (`#36941`, `#40940`) suggest potential spend inaccuracies under load — validate your billing setup carefully.

> 💡 **Pro Tip**: Enable `--detailed_debug` only in dev — it exposes raw request bodies and can lead to log bloat and privacy risks. Use `turn_off_message_logging` + PR [#50622](https://github.com/BerriAI/litellm/pull/50622) to redact sensitive content in logs.

---  
*Data sourced from GitHub: [BerriAI/litellm](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

---

### **Unsloth Digest — 2026-11-16**

---

#### **1. Today's Highlights**  
The Unsloth team continues to accelerate distributed training and model serving infrastructure with critical fixes for tensor parallelism, block compilation, and multi-GPU compatibility. Key PRs include a resolution to the `DPOTrainer` crash under TP due to DTensor/LoRA sharding mismatches, and improvements in vision model training stability via reduced mid-run recompilation delays. Additionally, support for API-level configuration aliasing enables users to switch between model launch profiles (e.g., context size, KV cache) without redeploying.

---

#### **2. Releases & Breaking Changes**  
*No new releases were published in the last 24 hours.*  
However, **PR #17885** introduces a significant behavioral change: Studio now allows clients to select distinct GGUF launch configurations (via model aliases) through the OpenAI-compatible API—addressing [Issue #17820](https://github.com/unslothai/unsloth/issues/17820). This enables dynamic switching between high-context and low-latency setups for the same model file, improving flexibility for production inference workloads.

---

#### **3. New Model & Hardware Support**  
- **Qwen3.8-Flash-Next**: Continued optimization with packed SFT support and offload-layer handling fixed in [PR #17827](https://github.com/unslothai/unsloth/pull/17827).  
- **GatedDeltaNet (fla >= 0.6)**: Fixes for GDN ops now active across all models using the newer `fla` library ([PR #17827](https://github.com/unslothai/unsloth/pull/17827)).  
- **Multi-GPU Systems (NVIDIA + Intel Arc)**: Resolved VRAM misreporting in [Issue #17787](https://github.com/unslothai/unsloth/issues/17787), where SYCL builds incorrectly queried `nvidia-smi`.  
- **AMD ROCm (gfx1151)**: Fix for fallback to MIOpen instead of Triton kernel in GDN causal conv1d ([PR #17734](https://github.com/unslothai/unsloth/issues/17734)).

---

#### **4. Performance & Optimization**  
- **Block Compilation**:  
  - Packed and padding-free rows now remain compiled in the graph, eliminating uncompiled forward drops ([PR #17883](https://github.com/unslothai/unsloth/pull/17883)).  
  - Mid-run recompilation delays in vision training reduced from 40–140 seconds to near-zero by ensuring consistent micro-batch graphs ([PR #17880](https://github.com/unslothai/unsloth/pull/17880)).  
- **Training Efficiency**:  
  - **SFT** now packs text datasets by default in epoch-based runs ([PR #17884](https://github.com/unslothai/unsloth/pull/17884)), improving throughput on large-scale fine-tuning jobs.  
  - **DeepSeek-V4.1** compiled training no longer hangs in Inductor due to `allow_unspec_...` guard fix ([PR #17881](https://github.com/unslothai/unsloth/pull/17881)).  
- **Memory Footprint**:  
  - `FSDP2` now initializes root unit before generate runs, preventing crashes during loss computation ([PR #17875](https://github.com/unslothai/unsloth/pull/17875)).  
  - GKD now keeps frozen teacher off-train GPU, avoiding memory contention on 2x T4 setups ([PR #17876](https://github.com/unslothai/unsloth/pull/17876)).

---

#### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR | Notes |
|------|----------|--------|--------|-------|
| [Issue #17874](https://github.com/unslothai/unsloth/issues/17874) – AMD GPU not detected (RX 6700s) | High | Open | ❌ | No known workaround; likely driver/ROCm detection issue. |
| [Issue #17402](https://github.com/unslothai/unsloth/issues/17402) – Draft acceptance drop (~74%) with UD 3.1 GGUFs | Critical | Open | ❌ | Production impact on Qwen3.8-Flash-Next; requires matching MTP heads. |
| [Issue #17605](https://github.com/unslothai/unsloth/issues/17605) – `--load-mode none` ignored, causing RAM/SSD bloat | High | Closed | ✅ [PR #17605](https://github.com/unslothai/unsloth/pull/17605) | Regression in v0.1.917-beta; resolved. |
| [Issue #14487](https://github.com/unslothai/unsloth/issues/14487) – Persistent memory leak (200–400 MB per run) | Medium | Open | ❌ | Affects desktop app; may require GC or process isolation. |

---

#### **6. What This Means for Application Developers**  
- **Dynamic Configuration Switching**: Use API model aliases (via [PR #17885](https://github.com/unslothai/unsloth/pull/17885)) to seamlessly toggle between high-context and speculative decoding modes—ideal for agent workflows requiring adaptive context management.  
- **Multi-GPU & Heterogeneous Environments**: Expect improved reliability when using mixed NVIDIA + Intel Arc systems, thanks to corrected VRAM reporting in SYCL builds.  
- **High-Fidelity Training Workflows**: Leverage the updated block compilation and packed dataset defaults to reduce training overhead and avoid recompilation stalls—especially valuable for vision-language models.  
- **Avoid Regressions**: If using AMD GPUs or custom `llama.cpp` builds, monitor for detection issues (see [Issue #17874](https://github.com/unslothai/unsloth/issues/17874)) and consider downgrading until stable drivers are released.  

> 🔗 *All PRs and issues linked above are live in the main branch or open for review.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*