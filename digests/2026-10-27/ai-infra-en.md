# AI Infrastructure Digest 2026-10-27

> Generated: 2026-10-27 01:36 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-10-27**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem is entering a phase of *hardware-specific specialization* and *agent-aware optimization*, driven by next-generation GPUs (Blackwell SM120/SM121), NPU acceleration (Ascend 950, XDNA), and the rise of MoE and multimodal models. Projects are increasingly diverging in their focus: vLLM and SGLang lead in high-throughput, distributed inference; llama.cpp and Unsloth dominate edge/local deployment; LiteLLM consolidates as a unified enterprise gateway. The convergence of speculative decoding, structured output control, and programmable KV cache signals a shift toward *composable, agent-native* infrastructure—where session state and output fidelity are first-class concerns.

---

### **2. Activity Comparison**

| Project       | Issues Opened (24h) | PRs Merged (24h) | Release Status       |
|---------------|---------------------|------------------|------------------------|
| vLLM          | 8                   | 6                | No new release         |
| SGLang        | 12                  | 8                | No new release         |
| llama.cpp     | 7                   | 5                | `b11913` (patch-level) |
| Ollama        | 5                   | 4                | `v0.40.12-rc0` (RC)    |
| LiteLLM       | 4                   | 3                | No new release         |
| Unsloth       | 6                   | 5                | `v0.1.911-beta` (beta) |

> 🔍 *Observation*: SGLang leads in issue volume, reflecting intense focus on stability fixes for Blackwell/NPU integration. vLLM shows strong engineering momentum with balanced PR/issue ratio, indicating mature development velocity.

---

### **3. Model Support Race**

| New Model / Architecture      | Supported By                     | Notes |
|-------------------------------|----------------------------------|-------|
| **DeepSeek-V4.1-Flash**       | vLLM, SGLang, llama.cpp          | All three have active optimizations; vLLM leads in stability tracking |
| **Qwen3.8-Flash-Next**        | vLLM, llama.cpp                  | vLLM adds FP8 KV support on ROCm; llama.cpp enables CPU backend |
| **Kimi-K3/K2.5**              | vLLM, SGLang, Unsloth            | SGLang has production integration via MoonEP; vLLM tracks ViT CUDA graph support |
| **GLM-5.3-Flash**             | vLLM, SGLang, llama.cpp          | vLLM expands CI coverage for PD disaggregation; SGLang has loading crash |
| **GigaChat 3.5-432B-A28B (MoE)** | llama.cpp (via PR #25342)       | Only project to support this massive MoE model publicly |
| **MiniMax-M3.1-Flash (GGUF)** | Unsloth (new)                    | First public support; requires updated chat templates |
| **FLUX-3 (image edit)**       | Unsloth (new)                    | Unique to Unsloth; enables fine-grained image editing |
| **DFlash2 Draft Models**      | Ollama (MLX), SGLang, vLLM       | Ollama integrates DFlash2 natively; SGLang uses FlashInfer JIT |

> 🏆 **Winner**: **vLLM** — most comprehensive and stable support across cutting-edge models, especially in MoE, Flash variants, and multi-GPU setups.

---

### **4. Performance Frontier**

| Optimization Focus           | Leading Projects                 | Key Developments |
|------------------------------|----------------------------------|------------------|
| **KV Cache & State Management** | vLLM, SGLang, Unsloth         | vLLM’s programmable KV policies (`#57103`); SGLang’s HiCache layer-first transfers; Unsloth’s background cache write reclamation |
| **Speculative Decoding**     | SGLang, Ollama, vLLM             | SGLang’s FlashInfer JIT issues vs Ollama’s DFlash2 integration; vLLM aligning with structured outputs |
| **Quantization & Memory**    | llama.cpp, vLLM, Ollama          | llama.cpp’s IQ4_NL/XS precomputed rescaling; vLLM’s FP8 KV on ROCm; Ollama’s MLX prompt speedups |
| **Kernel Fusion & Low-Level Tuning** | SGLang, vLLM, llama.cpp       | SGLang fused NaN validation; vLLM’s DiffKV tiling (3x speedup); llama.cpp’s Vulkan fast-path dequant |
| **Distributed Serving**      | vLLM, SGLang                     | vLLM’s connector-agnostic checksums; SGLang’s P/D disaggregation memory budgeting |

> ⚙️ **Trend**: The frontier is shifting from raw throughput to *state integrity*, *memory predictability*, and *agent compatibility*—especially in speculative and multi-stage pipelines.

---

### **5. Layer Positioning**

| Project       | Primary Layer               | Role in Stack                                  |
|---------------|-----------------------------|------------------------------------------------|
| **vLLM**      | Inference Engine            | High-performance, scalable engine for cloud/multi-node |
| **SGLang**    | Inference Engine + Gateway  | Agent-friendly runtime with native spec decoding and MoE support |
| **llama.cpp** | Local Runtime / Edge Engine | CPU/GPU/NPU-optimized local execution; ideal for edge devices |
| **Ollama**    | Developer-Facing Gateway    | Unified CLI/toolbox with MLX/DFlash2 integration; user-centric |
| **LiteLLM**   | LLM Gateway / Proxy         | Enterprise-grade routing, cost logging, guardrails, MCP support |
| **Unsloth**   | Desktop Agent Runtime       | End-user-facing tool for agents, image editing, automation |

> 🧩 **Strategic Insight**: vLLM and SGLang occupy the *high-performance inference core*; LiteLLM and Ollama serve as *application gateways*; llama.cpp and Unsloth enable *edge-localized agent execution*.

---

### **6. Trend Signals**

| Trend                          | Evidence from Digest                                                                 | What Developers Should Watch |
|--------------------------------|--------------------------------------------------------------------------------------|------------------------------|
| **Agent-Native Infrastructure** | Programmable KV cache (vLLM), structured output + speculative decoding alignment (vLLM/SGLang), scheduled tasks (Unsloth) | Build workflows with session state control and deterministic output; avoid silent context corruption |
| **Hardware-Specific Optimization** | SM120 GPU fixes (vLLM), ROCm gfx1151/gfx1201 regressions (vLLM/SGLang), AMD Vulkan slowdowns (Ollama) | Test on target hardware early; expect vendor-specific tuning needs |
| **MoE & Large Model Readiness** | GigaChat 3.5-432B-A28B support (llama.cpp), MoE amax rescaling (llama.cpp), explicit row layouts (SGLang) | Validate activation overflow handling; monitor `is_layer_excluded` behavior |
| **Gateway Abstraction & Security** | LiteLLM’s `context_window` cost field, guardrail metadata, OpenCode v2 config changes (Ollama) | Audit cost modeling; use proper auth and config isolation |
| **Edge/Local Agent Rise**      | Unsloth’s FLUX-3 edits, browser tab access, Mac CPU fallbacks | Design for partial GPU failure; test on Apple Silicon and Vulkan |

> ✅ **Actionable Takeaway**: For production agents, prioritize **vLLM + LiteLLM** for scalability and cost control, **SGLang** for advanced speculative decoding, and **Unsloth** for desktop-local agent workflows. Always validate model-specific behaviors (e.g., prompt reuse, KV cache) on your target hardware.

---  
*Compiled from GitHub activity (2026-10-27). Data-driven insights for technical decision-makers in AI infrastructure.*

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

---

### **vLLM Digest — 2026-10-27**

#### **1. Today's Highlights**  
The vLLM project continues to advance its support for next-generation hardware and models, with critical work on **SM120 (Blackwell) GPU compatibility**, especially for DeepSeek-V4.1-Flash and Qwen3-VL. A major focus is on **distributed inference stability**, including P/D disaggregation integrity via connector-agnostic checksums and improved KV cache resilience in multi-stage pipelines. New RFCs introduce **programmable KV cache policies** and **reusable KV compression layers**, signaling a shift toward composable, agent-aware serving infrastructure.

#### **2. Releases & Breaking Changes**  
None. No new releases or breaking API/config changes were published in the last 24 hours.

#### **3. New Model & Hardware Support**  
- **SM120 (RTX PRO 6000 Blackwell)**: Active development to fix low decode throughput and CUDA graph capture issues (`#56892`, `#60762`). Workarounds include forcing `--block-size 64` and avoiding `--enforce-eager`.  
- **AMD ROCm gfx1151/gfx1201**: Critical fixes ongoing for `ROCM_ATTN` correctness and performance regression (`#62697`, `#63455`).  
- **Qwen3.8-Flash-Next**: Added native CPU backend (`#57294`) and support for FP8 KV/indexer caches on ROCm (`#61529`).  
- **GLM-5.3-Flash**: CI test coverage expanded for layer-pruned checkpoints and PD disaggregation (`#57537`).  
- **Kimi K3/K2.5**: Performance optimization tracking (`#50587`, `#57406`) and ViT encoder CUDA graph support (`#38175`).  
- **Decision 3.0 (d3-turbo)**: Support added for prefix_bidir attention (`#62584`).

#### **4. Performance & Optimization**  
- **SM120 DiffKV tiling**: `BLOCK_M=128 + KV tile 64` yields **3.0x speedup** on 200K-context chunks (`#61095`).  
- **GDN hybrid (Qwen3.8-27B, fp8 KV)**: Aggregate throughput drops **24%** when KV pool < ~190k tokens (`#55580`).  
- **Top-k kernel optimization**: Monolithic Triton top-k fallback causes **6–10% of rows** to miss optimal pivot due to limited histogram sampling (`#61998`).  
- **MoE routing**: PRs enable explicit row layouts for routed-expert capture (`#62441`), improving flexibility in MoE kernel fusion.  
- **Rust frontend**: Skip detokenization for gRPC requests without text output (`#63789`), reducing latency for structured outputs.

#### **5. Stability & Regressions**  
- **Critical**: Cross-request context contamination via shared-prefix KV reuse in PD disaggregation (`#61160`) — reproducible with DeepSeek-V4.1-Flash; fix pending.  
- **Severe**: `IndexError` in logprobs generation causing 500 errors (`#63751`) — affects `/v1/chat/completions` and `/v1/completions`.  
- **High**: `ROCM_ATTN` returns wrong attention results and can fault GPU on RDNA with head size ≥96 (`#62697`).  
- **Moderate**: P2P KV offload tier does not fail fast on peer faults (`#63602`).  
- **Fixes in progress**: PRs addressing SM120 block-size negotiation (`#60762`), GLM-5.3 conv fusion (`#60991`), and KV checksum validation (`#62211`).

#### **6. What This Means for Application Developers**  
- **For agents/agentic systems**: The upcoming **Programmable KV Cache** (`#57103`) and **structured-output + speculative decoding** alignment (`#62818`) will enable fine-grained control over session state and grammar fidelity.  
- **For high-throughput deployments**: Avoid `--enforce-eager` on SM120 GPUs; use `--block-size 64` and monitor KV pool pressure to prevent 24% throughput drops (`#55580`).  
- **For multi-GPU/Multi-node setups**: Enable `--no-enable-prefix-caching` if experiencing cross-request crosstalk (`#61160`). Use connector-agnostic checksums (`#62211`) to ensure reliability in P/D disaggregation.  
- **For model-specific optimizations**: Monitor `#50587`, `#57406`, and `#61529` for Kimi and GLM performance gains. Use `--kv-cache-dtype fp8` with caution on ROCm until `#63455` is resolved.  

👉 **Key links**:  
- [Issue #61160](https://github.com/vllm-project/vllm/issues/61160) – Context contamination  
- [PR #62211](https://github.com/vllm-project/vllm/pull/62211) – Connector-agnostic KV checksums  
- [RFC #57103](https://github.com/vllm-project/vllm/issues/57103) – Programmable KV Cache  
- [PR #63751](https://github.com/vllm-project/vllm/pull/63751) – Logprobs IndexError fix  

---  
*Digest compiled from vLLM GitHub activity (2026-10-27).*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-10-27**

---

### **1. Today's Highlights**  
The SGLang ecosystem continues to accelerate its Blackwell (SM120/SM121) and NPU (Ascend 950, GB10) optimization momentum, with critical performance and stability fixes for DeepSeek-V4.1 and Kimi-K3 across speculative decoding, MoE, and KV cache paths. Notably, a high-severity crash in FlashInfer JIT during speculative sampling has been identified—impacting non-greedy requests on pip-installed CUDA bundles—and new PRs are addressing memory budgeting, kernel fusion, and cross-backend compatibility.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes detected in the last 24 hours.*

---

### **3. New Model & Hardware Support**  
- ✅ **DeepSeek-V4.1**: Active optimization roadmap (#42170), including mHC SP + engram fusion and `q_rope_store` folding.  
- ✅ **Kimi-K3**: Production integration progress under MoonEP (#35783), with support for DSPARK speculative decoding and static-shape dispatch.  
- ✅ **NPU (Ascend 950)**: DSpark support added via PR #39947; HiCache layer-first transfers enabled (#46604).  
- ✅ **Apple Silicon (M-series)**: Roadmap underway (#19137), though no implementation yet.  
- ✅ **ROCm 7.2.0**: Kernel compilation fixes ongoing (#29864), targeting gfx942/gfx950.  

> 🔗 [Issue #19137](https://github.com/sgl-project/sglang/issues/19137) | [PR #39947](https://github.com/sgl-project/sglang/pull/39947)

---

### **4. Performance & Optimization**  
- 🚀 **Engine Recovery**: Weight cache daemon now reduces Qwen3-235B FP8 load time from ~306–327s to **<1s** via per-rank CUDA IPC (#33522).  
- ⚙️ **Prefill Throughput**: DeepSeek-V4 prefill on SM120 (4× RTX PRO 6000, TP=4) still lags at **~2–7K tok/s**, vs vLLM/marlin’s 12.5K — tuning guidance needed (#33422).  
- 💡 **Kernel Fusion**:  
  - Async NaN validation fused into single Triton kernel (#43720).  
  - QSA decode: Removed D2D copy in prefill KV gather (#45753).  
  - Muse Spark: Fused RMSNorm enabled for FP32 residuals (#46622).  
- 📦 **Memory Efficiency**:  
  - NPU KV/indexer budgeting corrected for sparse offload (#45302).  
  - HiCache host transfers now support `layer_first_kv_split` layout (#46604).  

> 🔗 [PR #43720](https://github.com/sgl-project/sglang/pull/43720) | [PR #45753](https://github.com/sgl-project/sglang/pull/45753) | [PR #45302](https://github.com/sgl-project/sglang/pull/45302)

---

### **5. Stability & Regressions**  
- ❌ **Critical Crash**: Speculative decoding crashes server on first non-greedy request due to FlashInfer JIT failure when using bundled CUDA (`pip` install) vs system toolkit (#43412). *No fix PR yet.*  
- ❌ **NaN Contamination**: Kimi-K3 DSPARK spec decoding triggers NaN logits due to unpatched write-side bug (#32968); kimi-k3 image predates fix #32477.  
- ❌ **Model Loading Failures**:  
  - GLM-5.3-Flash NVFP4 crashes due to `is_layer_excluded` missing fused/module names (#36596).  
  - DeepSeek NextN drafts fail with `quant_config=None` override (#36599).  
- ❌ **Incorrect Output**: Kimi-K3 on SM90 silently computes SwiGLU instead of SiTU due to FlashInfer mismatch (#45755).  
- ❌ **KV Cache Corruption**: Concurrent requests cause state corruption in DFlash2 (#36548).  

> 🔗 [Issue #43412](https://github.com/sgl-project/sglang/issues/43412) | [Issue #32968](https://github.com/sgl-project/sglang/issues/32968) | [PR #36596](https://github.com/sgl-project/sglang/pull/36596)

---

### **6. What This Means for Application Developers**  
- **Avoid speculative decoding on pip-CUDA setups** until #43412 is resolved—non-greedy requests will crash. Use system CUDA toolkit if possible.  
- **Expect higher latency on DeepSeek-V4.1 prefill** until optimizations land; benchmark against vLLM/marlin for baseline.  
- **Leverage weight cache daemon** for rapid engine recovery with large models (Qwen3-235B FP8 now sub-second startup).  
- **Be cautious with mixed-precision NVFP4/MoE models**—validate `is_layer_excluded` behavior and avoid `modelopt_fp4` unless patched.  
- **Monitor NPU deployment readiness**: While Ascend 950 support is progressing, ensure your configs align with updated memory budgeting (#45302).  

> ✅ **Actionable Tip**: Use `--tokenizer-worker-num=1` temporarily if using Dynamic LoRA (#31084), as multi-worker sync is broken.  

---  
*Digest compiled from GitHub activity (2026-10-27). For real-time updates, follow [sgl-project/sglang](https://github.com/sgl-project/sglang).*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

---

### **1. Today's Highlights**  
The latest updates to `llama.cpp` focus on critical performance and stability improvements across multiple backends, particularly for MoE models and Vulkan/Metal acceleration. Key changes include enabling MoE amax rescaling for Laguna models (fixing overflow issues), optimizing Hexagon VTCM configuration for better memory management, and enhancing Vulkan’s flash attention path with fast-path dequantization and row-major P storage.

---

### **2. Releases & Breaking Changes**  
- **`b11913`**: Added `GGML_HEXAGON_VTCM_SIZE` config knob to control VTCM allocation on Hexagon hardware; renamed `NTHREADS` cap to improve clarity.  
  🔗 [PR #31221](https://github.com/ggml-org/llama.cpp/pull/31221)  
- **`b11912`**: Enabled `moe amax rescaling` for Laguna models via `LLM_ARCH_LAGUNA`, preventing f16 overflow in large prefill batches (>32 tokens).  
  🔗 [PR #31147](https://github.com/ggml-org/llama.cpp/pull/31147)  
- **`b11908`**: Moved `no_alloc` out of `llama_hparams`, simplifying model initialization logic.  
  🔗 [PR #31141](https://github.com/ggml-org/llama.cpp/pull/31141)  
- **`b11907`**: Replaced `ggml_tensor**` output params with structured returns in model graph builders (improves type safety and maintainability).  
  🔗 [PR #31142](https://github.com/ggml-org/llama.cpp/pull/31142)

> ⚠️ **Migration Note**: Code relying on `no_alloc` inside `llama_hparams` must be updated to pass it as a separate flag.

---

### **3. New Model & Hardware Support**  
- **Model Support**:  
  - Added support for **GigaChat 3.5-432B-A28B (MoE)** via PR #25342 — one of the largest publicly available MoE models.  
    🔗 [PR #25342](https://github.com/ggml-org/llama.cpp/pull/25342)  
  - Experimental support for **DeepSeek-V4.1-Flash** (`deepseek41` branch), with ongoing work to fix prompt reuse corruption.  
    🔗 [Issue #30944](https://github.com/ggml-org/llama.cpp/issues/30944)  

- **Hardware Backend Additions**:  
  - **XDNA Backend Requested**: Feature request (#21725) for XDNA AI accelerators (e.g., Huawei Kirin chips), indicating growing interest in edge/NPU targets.  
    🔗 [Issue #21725](https://github.com/ggml-org/llama.cpp/issues/21725)  
  - **Hexagon VTCM Tuning**: New `GGML_HEXAGON_VTCM_SIZE` allows fine-grained control over shared memory on Qualcomm Hexagon DSPs.  
    🔗 [PR #31221](https://github.com/ggml-org/llama.cpp/pull/31221)  

- **Quantization**:  
  - Performance optimizations for **IQ4_NL / IQ4_XS** quant creation via precomputed halfway points (zero-cost speedup).  
    🔗 [PR #31201](https://github.com/ggml-org/llama.cpp/pull/31201)

---

### **4. Performance & Optimization**  
- **Vulkan**:  
  - Added **dequant + transpose fast path for Q4_0 KV cache** in flash attention — crucial for D700 (GCN1) performance.  
    🔗 [PR #30738](https://github.com/ggml-org/llama.cpp/pull/30738)  
  - Storing CM1 softmax result **P in row-major format** and reusing fragments improves bandwidth efficiency across devices.  
    🔗 [PR #31197](https://github.com/ggml-org/llama.cpp/pull/31197)  
  - Clamp A prefetch to `end_k` in `coopmat1 int8 matmul` fixes incorrect reads beyond sequence bounds.  
    🔗 [PR #30283](https://github.com/ggml-org/llama.cpp/pull/30283)  

- **SYCL**:  
  - **+19% improvement in `-sm tensor` prompt eval throughput** on Intel Arc Pro B70s via optimized `comm_exchange`.  
    🔗 [PR #30956](https://github.com/ggml-org/llama.cpp/pull/30956)  
  - Bound temp memory to **32 MiB** to prevent OOM on constrained systems.  
    🔗 [PR #31062](https://github.com/ggml-org/llama.cpp/pull/31062)  

- **CPU**:  
  - Introduced **dynamic splitting for large single-row ops** to avoid stack overflow and improve scalability.  
    🔗 [PR #31218](https://github.com/ggml-org/llama.cpp/pull/31218)  

- **Hexagon**:  
  - Optimized `MUL_MAT_ID` kernels with vectorized row zeroing and skipped row handling.  
    🔗 [PR #31169](https://github.com/ggml-org/llama.cpp/pull/31169)  

---

### **5. Stability & Regressions**  
- **Critical Crashes/Regresions**:  
  1. **Vulkan: Device loss on AMD 680M with `--load-mode auto`** — regression from 2.39 → 2.41. Workaround: use `--load-mode mmap`.  
     🔗 [Issue #27360](https://github.com/ggml-org/llama.cpp/issues/27360)  
  2. **SYCL: GPU TDR reset on dual Arc Pro B70** when loading DFlash2 draft models.  
     🔗 [Issue #28778](https://github.com/ggml-org/llama.cpp/issues/28778)  
  3. **Qwen3.8-Flash-Next: `--split-mode tensor` aborts with `SPLIT_AXIS_UNKNOWN` on CUDA (2x RTX 5090)**.  
     🔗 [Issue #27964](https://github.com/ggml-org/llama.cpp/issues/27964)  
  4. **DeltaNet SYCL kernel produces “token soup” on long prompts** (Qwen3.6/3.8, Nemotron).  
     🔗 [Issue #29183](https://github.com/ggml-org/llama.cpp/issues/29183)  
  5. **Engram n-gram history corrupts output when reusing cached prefixes** (DeepSeek-V4.1-Flash).  
     🔗 [Issue #30944](https://github.com/ggml-org/llama.cpp/issues/30944)  

> ✅ **Fixes in Progress**: Several PRs address these (e.g., #30956 for SYCL perf, #31197 for Vulkan), but no direct fixes yet for device loss or token corruption.

---

### **6. What This Means for Application Developers**  
- **For LLM Serving Platforms**: Use `--n-cpu-ffn` with `--n-cpu-mode` to offload FFN layers efficiently on CPU-only systems. Consider `--kv-unified` carefully — known performance drops after second long request due to unified-KV limitations.  
- **For Edge/AI Accelerator Deployment**: Hexagon and XDNA backend support is emerging — expect early-stage APIs and tuning knobs (e.g., `GGML_HEXAGON_VTCM_SIZE`).  
- **For High-Throughput Systems**: Prioritize Vulkan + `--load-mode mmap` on AMD GPUs to avoid device loss. On Intel, enable `--sm tensor` + `--n-cpu-mode` for best latency.  
- **For Tool Integration**: The server now supports pluggable tool registry (#20673), enabling native MCP/tool usage in `llama-cli` — reduce UI duplication and improve consistency.  
- **Security**: Avoid exposing `/api/v1/chat` endpoints without auth — recent issue #25790 highlights injection risk via query parameters (`?q=`).

> 📌 **Actionable Tip**: Always test MoE models with `--moe-amax-rescale` enabled (if supported) to prevent activation overflow on Metal/Vulkan backends.  

🔗 [Official Website](https://llama.app) | 🔗 [GitHub Repository](https://github.com/ggml-org/llama.cpp)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-27**

---

### **1. Today's Highlights**  
Ollama’s latest release, `v0.40.12-rc0`, introduces critical performance improvements for MLX-backed models—particularly for *Gemma 4*, *Flint*, and *Laguna*—via a prompt speedup and enhanced DFlash2 support. Concurrently, the team is actively addressing high-severity Vulkan/AMD GPU regressions (e.g., ~30× slowdown) and fixing OpenCode v2 launch compatibility issues, signaling strong momentum in both inference optimization and ecosystem integration.

---

### **2. Releases & Breaking Changes**  
- **v0.40.12-rc0**: Final RC before v0.40.12; includes MLX prompt optimizations and DFlash2 support.  
  🔗 [Release Notes](https://github.com/ollama/ollama/releases/tag/v0.40.12-rc0)  
- **Breaking Change (OpenCode v2)**: The `--model` flag is no longer accepted on the bare `opencode` command. Launchers must now use `--standalone` or inline config (`OPENCODE_CONFIG_CONTENT`).  
  🔗 [PR #19310](https://github.com/ollama/ollama/pull/19310), [PR #19298](https://github.com/ollama/ollama/pull/19298)

---

### **3. New Model & Hardware Support**  
- **DFlash2 Support Added**: MLX now supports DFlash2, enabling block-local dynamic convolutions and improved draft token selection for faster speculative decoding.  
  🔗 [PR #19149](https://github.com/ollama/ollama/pull/19149)  
- **MLX-C & MLX Version Bump**: Upgraded to latest versions with optimized prompt processing for Gemma, Flint, and Laguna models.  
  🔗 [PR #19291](https://github.com/ollama/ollama/pull/19291)  
- **Hardware**: AMD Radeon Pro 5700 XT (Vulkan) and RX 6600 XT (RADV) under active scrutiny; multiple bugs reported but no new driver-level support added yet.

---

### **4. Performance & Optimization**  
- **Prompt Speedup**: MLX backend sees measurable improvement in prompt processing latency for Gemma, Flint, and Laguna via window_size optimizations.  
  🔗 [PR #19291](https://github.com/ollama/ollama/pull/19291)  
- **DFlash2 Efficiency**: Enables more efficient speculative execution with adaptive candidate selection across draft rows.  
  🔗 [PR #19149](https://github.com/ollama/ollama/pull/19149)  
- **Memory Optimization**: PRs #19309 and #19304 introduce smarter compaction body recovery, preserving retained images and tool states during retries—reducing data loss risk during long sessions.

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR | Link |
|--------|------|--------|-------|------|
| ⚠️ High | AMD Vulkan/RADV: ~30× generation slowdown after first request with prompt cache enabled | Open | In progress | [#19201](https://github.com/ollama/ollama/issues/19201) |
| ⚠️ High | GPT-OSS 20B returns empty response on AMD Radeon Pro 5700 XT (Vulkan) | Open | None | [#19060](https://github.com/ollama/ollama/issues/19060) |
| ⚠️ Medium | macOS Metal crashes on XML analysis | Open | None | [#19278](https://github.com/ollama/ollama/issues/19278) |
| ⚠️ Medium | `/api/chat` intermittently fails with "broken pipe" after long replies | Open | None | [#19301](https://github.com/ollama/ollama/issues/19301) |
| ⚠️ Low | `shieldgemma` template misleads users by asking about "AI response" | Open | None | [#19313](https://github.com/ollama/ollama/issues/19313) |

> ✅ **Fixed**: OpenCode v2 config parsing and `--model` handling via PRs [#19310](https://github.com/ollama/ollama/pull/19310), [#19298](https://github.com/ollama/ollama/pull/19298), and [#19307](https://github.com/ollama/ollama/pull/19307).

---

### **6. What This Means for Application Developers**  
- **Optimize for MLX + DFlash2**: If using Gemma, Flint, or Laguna models, prioritize MLX backend with `v0.40.12+` for better prompt throughput and speculative decoding.  
- **Avoid Prompt Cache on AMD Vulkan**: Until [#19201](https://github.com/ollama/ollama/issues/19201) is resolved, disable `prompt_cache` on AMD RADV/Vulkan setups to prevent catastrophic slowdowns.  
- **Update OpenCode Integrations**: Ensure your launcher uses `--standalone` or inline config (`OPENCODE_CONFIG_CONTENT`) when invoking `ollama launch opencode`.  
- **Handle Long-Running Sessions Carefully**: Be aware of the `broken pipe` issue in `/api/chat` after large responses—implement retry logic with backoff.  
- **Consider CPU Fallback Control**: With feature request [#10707](https://github.com/ollama/ollama/issues/10707) gaining traction, expect future options to disable automatic CPU fallback when GPU memory is insufficient—critical for deterministic deployment environments.

---  
*Digest generated from GitHub data (2026-10-27).*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-10-27**

---

### **1. Today's Highlights**  
The LiteLLM project continues to mature its enterprise-grade proxy and cost management capabilities, with key improvements in model routing accuracy, media handling, and spend logging integrity. Critical fixes address long-standing issues in timeout handling, guardrail metadata reporting, and response streaming behavior—particularly for vLLM and Gemini backends—while several PRs signal a shift toward GA readiness for previously experimental features like MCP and Admin UI.

---

### **2. Releases & Breaking Changes**  
*No new releases were published in the last 24 hours.*  
However, notable changes are underway:
- **`context_window` field added to cost map** ([PR #48516](https://github.com/BerriAI/litellm/pull/48516)) — introduces a standardized `context_window` field per provider (seeded from Claude, Gemini, OpenAI), enabling more accurate cost modeling across models with divergent window behaviors.
- **MCP server and client paths moved out of `_experimental`** ([PR #48513](https://github.com/BerriAI/litellm/pull/48513)) — signals GA status; old paths remain as deprecated shims for backward compatibility.
- **Admin UI bundle and example post-call rules restructured** ([PR #48512](https://github.com/BerriAI/litellm/pull/48512)) — improves maintainability and clarity of configuration assets.

> ✅ *Migration note:* Update imports from `litellm/proxy/_experimental/mcp_server` → `litellm/proxy/mcp_server`.

---

### **3. New Model & Hardware Support**  
- **DashScope Realtime WebSocket Support Added** ([PR #40579](https://github.com/BerriAI/litellm/pull/40579)) — enables LiteLLM to serve DashScope’s real-time audio and vision models via custom wire format handling, expanding support beyond standard OpenAI-compatible endpoints.
- **Vertex AI Image Generation Now Preserves Aspect Ratios** ([PR #48463](https://github.com/BerriAI/litellm/pull/48463)) — fixes silent square image output by mapping requested dimensions to supported aspect ratios (e.g., 16:9, 4:3) while preserving original intent.

---

### **4. Performance & Optimization**  
- **Rate Limiter Optimized to Reduce Redis Writes** ([PR #47521](https://github.com/BerriAI/litellm/pull/47521)) — now only writes token counters for scopes that have active rate limits, reducing up to 5 unnecessary Redis writes per request (especially impactful in high-RPM environments).
- **Cold Spend Counter Lifted to Cached Spend** ([PR #47676](https://github.com/BerriAI/litellm/pull/47676)) — resolves race condition where concurrent requests after a budget “cold” state could trigger false 422 errors due to repeated counter resets.
- **Shared Multimodal Quota Estimation** ([PR #48099](https://github.com/BerriAI/litellm/pull/48099)) — unifies text and media counting logic across `/chat` and `/responses`, preventing overcounting of encoded media as text during TPM admission.

---

### **5. Stability & Regressions**  
**High Severity:**  
- **Streaming Response Headers Delayed Until First Chunk** ([Issue #46659](https://github.com/BerriAI/litellm/issues/46659)) — GZipBufferedResponseMiddleware in v1.105.0 delays sending HTTP headers until first SSE chunk, breaking tools/call streams on MCP endpoints that rely on early header availability (e.g., 15s keep-alive pings). *Fix PR pending.*
- **Timeout Error Shows "None seconds"** ([Issue #14635](https://github.com/BerriAI/litellm/issues/14635)) — SDK bug in version 1.77.1 causes malformed timeout error messages (`Connection timed out after None seconds`). *Status: Closed, fix likely in later release.*

**Medium Severity:**  
- **Guardrail Header Lists All Policies, Not Just Ran Ones** ([PR #48472](https://github.com/BerriAI/litellm/pull/48472)) — misleading `x-litellm-applied-guardrails` header includes skipped policies; fix ensures only executed steps are reported.
- **Gemini Context Caching Fails with Custom `api_base`** ([Issue #34872](https://github.com/BerriAI/litellm/issues/34872)) — invalid cache URL and malformed auth header when using custom endpoints; workaround requires manual config adjustments.

---

### **6. What This Means for Application Developers**  
- **Use `context_window` in cost calculations** — if you’re building budget-aware agents or routing systems, ensure your logic accounts for the new `context_window` field in cost maps (available in latest builds).
- **Avoid v1.105.0 for MCP tool streams** — delay in streaming headers may break real-time agent workflows; consider pinning to v1.104.x or patching via [PR #46659](https://github.com/BerriAI/litellm/pull/46659).
- **Update legacy MCP and Admin UI imports** — migrate from `_experimental` paths to stable ones ([PR #48513](https://github.com/BerriAI/litellm/pull/48513), [PR #48512](https://github.com/BerriAI/litellm/pull/48512)) to future-proof your deployments.
- **Handle guardrail metadata carefully** — if auditing policy execution, expect updated `x-litellm-applied-guardrails` to reflect only executed steps, not the full pipeline.

> 🔗 *Recommended action*: Review recent PRs in [proxy](https://github.com/BerriAI/litellm/pulls?q=is%3Aopen+label%3Aproxy) and [llms](https://github.com/BerriAI/litellm/pulls?q=is%3Aopen+label%3Allm+translation) for stability updates before production rollouts.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-10-27**

---

### **1. Today's Highlights**  
The v0.1.911-beta release introduces scheduled tasks and FLUX-3 edit support, significantly enhancing automation and image generation workflows. Performance gains across Mac and Vulkan backends improve responsiveness, while new MiniMax-M3.1-Flash model integration expands real-time inference capabilities.

> 🔗 [v0.1.911-beta Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.911-beta)

---

### **2. Releases & Breaking Changes**  
- **v0.1.911-beta**: Adds scheduled task execution (local models & APIs), FLUX-3 image editing, and performance improvements.  
- **Breaking Change**: `MiniMax-M3.1-Flash` now requires updated chat templates; legacy prompt formats may fail silently. Users should verify prompt compatibility via [issue #15285](https://github.com/unslothai/unsloth/issues/15285).  
- **Note**: The desktop app now defaults to native CPU fallback on Apple Silicon when GPU offload fails — see [issue #15409](https://github.com/unslothai/unsloth/issues/15409).

---

### **3. New Model & Hardware Support**  
- ✅ **New Models**:  
  - `MiniMax-M3.1-Flash` (GGUF) — optimized for low-latency, high-throughput inference.  
  - `FLUX-3` (image editing) — supports face touch-ups and fine-grained edits.  
- ✅ **Hardware & Backend Support**:  
  - **AMD ROCm**: Partial support confirmed on mixed Nvidia-AMD systems ([#15444](https://github.com/unslothai/unsloth/issues/15444)), though GPU visibility remains inconsistent.  
  - **Vulkan**: Full support for `MiniCPM-V-4.7-1B` with performance improvements ([#14987](https://github.com/unslothai/unsloth/issues/14987)).  
  - **Apple Silicon (MLX)**: Improved offload behavior, though NVFP4 fallback persists despite full layer offload ([#15409](https://github.com/unslothai/unsloth/issues/15409)).

---

### **4. Performance & Optimization**  
- **Memory & VRAM**:  
  - Background cache writes now read live module weights at write time, enabling earlier VRAM reclaim during offload (`_NativeCacheWrites._run`) — see [PR #15461](https://github.com/unslothai/unsloth/pull/15461).  
  - W8A8 linear kernels now respect `force-eager` mode and avoid exceeding eager peak memory usage ([PR #15456](https://github.com/unslothai/unsloth/pull/15456)).  
- **Throughput & Latency**:  
  - Image diffusion stability improved via pinned reduction config for Qwen-Image-2.1, ensuring consistent output across processes ([PR #15455](https://github.com/unslothai/unsloth/pull/15455)).  
  - Video VAE decode route is now preserved across loads, reducing variability in generated frames ([PR #15462](https://github.com/unslothai/unsloth/pull/15462)).  
- **Build Time**: Node.js upgraded to 24.22.1 in Studio setup, improving dependency resolution speed ([PR #15423](https://github.com/unslothai/unsloth/pull/15423)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|---------|-------|-------------|------------|
| ⚠️ High | [#15409](https://github.com/unslothai/unsloth/issues/15409) | MiniMax-M3.1 GGUF falls back to CPU NVFP4 even with 61/61 layers offloaded on Apple Silicon | Open |
| ⚠️ High | [#15444](https://github.com/unslothai/unsloth/issues/15444) | AMD GPUs not detected in mixed Nvidia-AMD Linux setups | Open |
| ⚠️ Medium | [#15221](https://github.com/unslothai/unsloth/issues/15221) | Extremely slow typing in instructions box during image generation | Open |
| ⚠️ Medium | [#15412](https://github.com/unslothai/unsloth/issues/15412) | Unable to load any DeepSeek V4.1 1017 uncensored GGUF from Model Hub | Open |
| 🛠️ Low | [#15447](https://github.com/unslothai/unsloth/issues/15447) | Browser agents can't access manually opened tabs | Open |

> Note: Several PRs address underlying causes (e.g., [PR #15458](https://github.com/unslothai/unsloth/pull/15458) improves ROCm attention routing), but no fixes are yet merged.

---

### **6. What This Means for Application Developers**  
- **Automation**: Scheduled tasks enable automated prompt pipelines—ideal for monitoring, reporting, or batch inference jobs. Use the `unsloth schedule` CLI or API endpoints to trigger local model runs on a cron-like basis.  
- **Agent Development**: Full-page screenshots ([#15448](https://github.com/unslothai/unsloth/issues/15448)) and agent access to user-opened browser tabs ([#15447](https://github.com/unslothai/unsloth/issues/15447)) will soon allow more robust web agents with context-aware navigation.  
- **Model Management**: Consider tagging models using custom labels (via [issue #15038](https://github.com/unslothai/unsloth/issues/15038)) as built-in metadata support is pending.  
- **API Integration**: Custom headers for remote providers ([#14811](https://github.com/unslothai/unsloth/issues/14811)) are now actionable—useful for telemetry or provider-specific routing in LiteLLM or similar stacks.  
- **Deployment**: On macOS, expect CPU fallbacks under heavy load unless you enforce GPU-only execution via environment flags. Monitor VRAM usage closely when running multiple models simultaneously.

> 💡 Pro Tip: For production use with `MiniMax-M3.1-Flash`, validate your prompt templates against the latest chat template patch ([#15285](https://github.com/unslothai/unsloth/issues/15285)) to avoid conversation history corruption.

---  
*Digest compiled from GitHub activity (2026-10-26–2026-10-27).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*