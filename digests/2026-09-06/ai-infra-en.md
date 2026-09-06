# AI Infrastructure Digest 2026-09-06

> Generated: 2026-09-06 00:11 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-06**

---

### **1. Ecosystem Overview**  
The AI inference and serving ecosystem is entering a phase of *architectural specialization*, with projects converging on high-performance execution for next-gen models (e.g., Qwen3.8, DeepSeek-V4-Flash) across heterogeneous hardware—NVIDIA DGX Spark (sm_121), AMD RDNA4 (gfx1201), Intel Arc, and Apple Silicon. Stability remains a critical bottleneck, especially around speculative decoding, prefix caching, and hybrid model support (GDN/Mamba). Meanwhile, the rise of agentic workflows is driving demand for reliable tool calling, structured output, and cost-aware orchestration. This landscape reflects a maturing stack where performance gains are increasingly offset by complex correctness challenges in distributed, low-precision, and dynamic-context environments.

---

### **2. Activity Comparison**  

| Project       | Open Issues | PRs (Last 24h) | Recent Release | Status |
|---------------|-------------|----------------|----------------|--------|
| **vLLM**      | 57          | 12             | None           | Stable |
| **SGLang**    | 62          | 18             | v0.5.19        | Active |
| **llama.cpp** | 48          | 15             | b10819         | Patched |
| **Ollama**    | 45          | 9              | v0.34.0-rc1    | RC |
| **LiteLLM**   | 41          | 11             | None           | Feature-focused |
| **Unsloth**   | 53          | 10             | None           | Iterative |

> 🔍 *Observation*: SGLang leads in activity volume (PRs, issues), signaling aggressive development momentum. Ollama and LiteLLM show strong release cadence despite fewer PRs—indicating focused feature delivery. vLLM and llama.cpp maintain stability with minimal changes but higher issue severity.

---

### **3. Model Support Race**  

| New Model / Architecture       | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------------------|------|--------|-----------|--------|---------|---------|
| **Qwen3.8-Flash-Next (hybrid)** | ✅ (partial) | ✅ (v0.5.19) | ❌ | ✅ (early adopter) | ❌ | ❌ |
| **DeepSeek-V4-Flash / -0731** | ⚠️ (blocked) | ✅ | ❌ | ✅ | ❌ | ❌ |
| **Spark2_5ForCausalLM**       | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **DGX Spark (sm_121)**         | ✅ (GB10 focus) | ✅ (exp.) | ⚠️ (RDNA4/ROCm only) | ✅ (limited) | ❌ | ✅ (fixes in progress) |
| **Intel Arc B580**            | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ (patching) |
| **AMD ROCm gfx1201**           | ✅ (pending) | ✅ (improved) | ✅ (tuning) | ❌ | ❌ | ✅ (conditional memory) |

> 🏆 **Leader**: **SGLang** takes clear lead in *model + hardware* breadth, with early support for Qwen3.8, SM121, and ROCm. **llama.cpp** excels in *low-level hardware access* (RDNA4, WebGPU), while **Unsloth** is gaining traction in *platform-specific fixes* (Intel Arc, ROCm).

---

### **4. Performance Frontier**  

| Focus Area                | vLLM                     | SGLang                   | llama.cpp               | Ollama                 | LiteLLM               | Unsloth               |
|--------------------------|--------------------------|--------------------------|-------------------------|------------------------|-----------------------|------------------------|
| **KV Cache Optimization** | ✅ FP8 QSA path (+2x pool) | ✅ Unified memory (Blackwell) | ✅ RDNA4 FlashAttn tuning | ✅ `OLLAMA_CACHE_RAM` proposal | ❌ | ❌ |
| **Batching & Parallelism** | ✅ Speculative decoding | ✅ Dynamic prefill CP | ✅ MTP multi-ubatch fix | ✅ MLX YaRN context | ❌ | ✅ Async replica routing |
| **Quantization Gains**    | ✅ IQ4_XS kernels (Vulkan) | ✅ NVFP4 + Marlin fallback | ✅ IQ4_XS MMQ/MMV kernels | ❌ | ❌ | ❌ |
| **Distributed Serving**   | ✅ Hybrid GDN/Mamba | ✅ Two-Spark orchestrator | ❌ | ❌ | ❌ | ✅ Experimental |
| **Kernel-Level Tuning**   | ✅ Triton MoE (A100) | ✅ Unified memory DCP | ✅ Vulkan dedicated shaders | ❌ | ❌ | ❌ |

> 📈 **Trend**: The frontier is shifting toward **hardware-aware kernel specialization** (Vulkan, Triton, unified memory) and **memory efficiency via FP8/QSA paths**, particularly on NVIDIA Blackwell and AMD RDNA4. Distributed scalability is emerging as a differentiator in SGLang and Unsloth.

---

### **5. Layer Positioning**  

| Project       | Primary Layer              | Secondary Role                         | Key Differentiator |
|---------------|----------------------------|----------------------------------------|--------------------|
| **vLLM**      | Inference Engine           | Model Serving, LLM Gateway             | High-throughput, stable spec-decoding |
| **SGLang**    | Inference Engine + Orchestrator | High-performance local runtime | Unified memory, MoE optimization |
| **llama.cpp** | Local Runtime / CLI Tool   | Embedded inference, Edge deployment    | Cross-platform, Metal/SYCL backends |
| **Ollama**    | Local Runtime + Developer UX | Agent workflow, Desktop integration | Seamless ChatGPT Desktop integration |
| **LiteLLM**   | LLM Gateway / Orchestration | Cost tracking, API proxy               | Enterprise-grade budgeting, guardrails |
| **Unsloth**   | Fine-tuning + Local Runtime | Studio UI, RL training (SAO)          | SAO trainer, async optimization, custom APIs |

> 🧩 **Positioning Insight**:  
> - **vLLM/SGLang** dominate the *high-end inference engine* layer.  
> - **llama.cpp/Ollama** serve as *developer-first local runtimes*.  
> - **LiteLLM** is the *enterprise gateway* of choice.  
> - **Unsloth** uniquely bridges *fine-tuning and inference* with RL training and studio UX.

---

### **6. Trend Signals**  

🔍 **Key Industry Trends Extracted from Today’s Activity**:  
1. **Hybrid Architectures Are the New Challenge**: GDN/Mamba hybrids (Qwen3.8-Flash-Next) expose deep instability in speculative decoding and prefix caching—projects must now treat *architecture complexity* as a first-class concern.  
2. **Speculative Decoding Is Still Risky**: Multiple regressions across vLLM, SGLang, and Ollama highlight that MTP/EAGLE + prefix caching = silent corruption or OOM. Developers should disable it until patches land.  
3. **Memory Efficiency Drives Innovation**: FP8 KV cache optimizations (vLLM, SGLang) and per-rank weight caching (SGLang) signal that *memory footprint* is now a top-tier performance metric—especially for MoE models.  
4. **Agent Workflows Demand Reliability**: Tool call parsing failures (Ollama, LiteLLM), infinite loops (DeepSeek-V4-Flash:cloud), and streaming ID loss (LiteLLM) reveal that agent reliability is still fragile—cost tracking and state management remain weak points.  
5. **Hardware Fragmentation Is Escalating**: Support for Intel Arc, AMD gfx1201, and Apple Silicon is fragmented and error-prone—projects like Unsloth and llama.cpp are actively patching platform-specific bugs, indicating that *cross-hardware compatibility* is no longer optional.

> 🛠️ **Actionable Guidance for Application Developers**:  
> - Avoid `kv_cache_dtype="fp8_e5m2"` on vision models (vLLM).  
> - Disable speculative decoding when using prefix caching with hybrid models.  
> - Use `--enable-unified-memory` on Blackwell GPUs (SGLang).  
> - Validate JSON schema patterns to prevent tool call failures (Ollama/LiteLLM).  
> - Monitor `client_side_timeout` usage—do not pass it in headers (LiteLLM).  
> - For production agents, prefer **v0.24.0 (vLLM)** or **v0.5.18 (SGLang)** until regressions are fixed.

---

> ✅ **Final Note**: The infrastructure stack is no longer about raw speed—it’s about *correctness under complexity*. Choose tools based on their ability to handle hybrid models, speculative decoding, and agent-state integrity—not just peak throughput.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

---

### **vLLM Digest — 2026-09-06**

#### **1. Today's Highlights**  
The vLLM project continues to prioritize stability and correctness for next-gen models on NVIDIA DGX Spark (GB10, sm_121) and hybrid architectures like Qwen3.8-Flash-Next, with critical fixes for speculative decoding, prefix caching, and Mamba/GDN state management. Key attention is focused on resolving silent corruption in FP8 KV cache usage, non-deterministic greedy decoding under sparse attention, and crashes during spec-decode transitions.

#### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new releases or breaking API/config changes observed.

#### **3. New Model & Hardware Support**  
- ✅ **DeepSeek-V4-Flash / DeepSeek-V4-Flash-0731**: Issue #50576 (105 comments) calls for SM8x (Ampere: A100/A800, RTX 30xx) support — currently blocked due to missing backend dispatch logic.
- ✅ **Qwen3.8-Flash-Next (hybrid GDN/Mamba)**: Multiple issues (#54521, #54173, #53912, #54491) highlight ongoing challenges with prefix caching, speculative decoding, and FP8 KV cache on GB10 (sm_121).
- ✅ **Intel GPU (XPU)**: OffloadingConnector issue #52735 reports a bug where MTP/EAGLE speculative decoding fails to serve cached results when enabled.
- ✅ **ROCm / AMD RDNA4 (gfx1201)**: PR #54706 addresses W4A16 split-K nondeterminism; upstreaming of gfx1201 FP8 patch remains pending (Issue #28649).

#### **4. Performance & Optimization**  
- 🔧 **FP8 Optimization for QSA Path**: PR #54426 demonstrates that enabling `fp8_e4m3` on the QSA path of `Qwen3.8-Flash-Next` nearly doubles the effective KV pool size on GB10 — a major memory efficiency win.
- ⚙️ **Fused MoE Kernel Tuning**: PR #55511 adds a new tuned Triton config for **A100 80GB PCIe** (E=256, N=512), targeting Qwen3.5-122B-A10B at TP=2 — expected to improve throughput for large MoE models.
- 📈 **Latency Consistency**: PR #55508 fixes inconsistent TTFT/E2E latency accounting across endpoints by aligning `latency - ttft` with sum of inter-token latencies — improves benchmark reliability.

#### **5. Stability & Regressions**  
| Severity | Issue | Summary | Fix Status |
|--------|------|--------|-----------|
| 🔴 High | #54521 | Greedy decoding non-deterministic when prompt nears `indexer_budget` (Qwen3.8-Flash-Next) | ❌ Pending |
| 🔴 High | #54173 | CUBLAS_STATUS_INTERNAL_ERROR / illegal memory access in GDN path with prefix caching on GB10 | ❌ Pending |
| 🔴 High | #54360 | MTP speculative decoding silently disables prefix-cache hits on hybrid GDN models (nightly build) | ❌ Pending |
| 🟡 Medium | #53142 | Illegal memory access on prefix-cache resume with explicit `--block-size` in hybrid Mamba/GDN | ✅ Fixed via PR #55507 |
| 🟡 Medium | #55506 | MTP + PP + prefix caching causes constant-token loops in hybrid models | ✅ Fixed via PR #55506 |
| 🟡 Medium | #53912 | Prefix caching + MTP corrupts output in hybrid models (v0.28.0) | ❌ Closed but unfixed |

> Note: Several regressions are tied to **speculative decoding (MTP/EAGLE)** and **prefix caching interactions**, particularly on **GB10 (sm_121)** and **hybrid GDN/Mamba models**.

#### **6. What This Means for Application Developers**  
- **Avoid `kv_cache_dtype="fp8_e5m2"`** on Qwen-VL models (Issue #41343); use `bf16` until fixed.
- **Disable speculative decoding (`num_speculative_tokens=0`)** if using prefix caching with hybrid models (e.g., Qwen3.8-Flash-Next) — current nightly builds exhibit silent cache misses and output corruption.
- **Use `--no-async-scheduling` as workaround** for some GB10 crashes (e.g., #54173), though not a permanent fix.
- **Monitor `persistent_topk` behavior** in sparse attention models: near `indexer_budget`, greedy decoding may become non-deterministic (Issue #54521).
- **Prefer `v0.24.0` or earlier** for stable performance with MTP speculative decoding on hybrid models until fixes land in release.

> 🔗 [GitHub Issues & PRs](https://github.com/vllm-project/vllm/issues) — follow key issues like #50576, #54521, #54173, and #54360 for real-time updates.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

---

### **SGLang Digest — 2026-09-06**

#### **1. Today's Highlights**  
The latest release, **v0.5.19**, introduces support for **Qwen3.8 (2.4T-A95B)** and continues the momentum in high-performance inference optimizations. Critical stability fixes address CUDA coredumps (Issue #26340), memory leaks in MoE NVFP4 fallback paths (Issue #38074), and a persistent scheduler OOM on DGX Spark (Issue #37931). Performance work accelerates decode on Blackwell via unified memory improvements (PR #37926).

#### **2. Releases & Breaking Changes**  
- **v0.5.19**: Released with 786 PRs from 214 contributors. No breaking API changes noted, but deprecation of legacy prefill CP v1 runtime is underway (PR #36228).  
  🔗 [GitHub Release v0.5.19](https://github.com/sgl-project/sglang/releases/tag/v0.5.19)

#### **3. New Model & Hardware Support**  
- ✅ **New Model**: `Qwen3.8 (2.4T-A95B)` added to the model catalog.  
  🔗 [Cookbook: Qwen3.8 Support](https://docs.sglang.io/cookbook)  
- ✅ **Hardware/Backend**:  
  - Added experimental **SM121 (DGX Spark)** support for MiniMax-M3 W4A16 sparse attention (PR #38143).  
  - **AMD ROCm 7.0** improvements: FP8 hardware conversion fix for gfx950 (PR #37140).  
- ✅ **Quantization**: Support for **NVFP4 MoE layers** with Marlin fallback path (Issue #38074).  

#### **4. Performance & Optimization**  
- 🚀 **Decode Speedup on Blackwell**: Unified memory (`--enable-unified-memory`) now closes the DCP decode gap — performance loss reduced from **1.96% behind static pool** to negligible (PR #37926).  
- ⚙️ **Weight Load Time**: Per-rank weight cache daemon cuts load time from **~306–327s to <1s** on Qwen3-235B FP8 (Phase 1 landed in #27139).  
- 🔍 **Scheduler Overhead**: Multiple avoidable overheads identified in sampling/streaming (Issue #36226); under review for optimization.  
- 📊 **Prefill Parallelism**: Dynamic prefill context parallelism proposed (Issue #37944) to better adapt to workload variation.

#### **5. Stability & Regressions**  
| Severity | Issue | Summary | Fix Status |
|---------|------|--------|------------|
| 🔴 High | [#26340](https://github.com/sgl-project/sglang/issues/26340) | Auto-collected CUDA coredumps across CI runs; frequent crashes during test jobs. | ❌ Open — tracking tooling issue |
| 🔴 High | [#38074](https://github.com/sgl-project/sglang/issues/38074) | ~0.66 GiB/layer memory leak in `prepare_moe_nvfp4_layer_for_marlin` → OOM on 48GB cards | ❌ Open — critical for MoE deployment |
| 🔴 High | [#37931](https://github.com/sgl-project/sglang/issues/37931) | Scheduler OOM-killed during FP8→FP4 MoE conversion on 2x DGX Spark | ❌ Open — prevents DeepSeek-V4-Flash-Vision-Exp launch |
| 🟡 Medium | [#38019](https://github.com/sgl-project/sglang/issues/38019) | Test livelocks due to KV-pool-full retractions in HiCache + prefill CP | ❌ Open — affects regression testing |
| 🟡 Medium | [#38156](https://github.com/sgl-project/sglang/issues/38156) | HiCache host-memory budget overcharged, rejecting valid pools | ❌ Open — impacts memory planning |

#### **6. What This Means for Application Developers**  
- **Deploying large MoE models (e.g., Qwen3.8, DeepSeek-V4-Flash-Vision)** requires careful memory planning — monitor for leaks in NVFP4/Marlin paths and consider using `--enable-unified-memory` for Blackwell GPUs.  
- **Use `--enable-prefill-cp` with caution**: Dynamic CP tuning (Issue #37944) may soon improve efficiency, but current setups risk OOM or livelocks under high contention.  
- **Avoid speculative decoding on mixed workloads** if draft acceptance rates vary widely — per-request opt-out (RFC #30263) is coming.  
- **Ensure your GPU backend (ROCm, SM121, etc.) matches the model’s requirements** — recent regressions highlight compatibility risks in newer architectures.  
- **Monitor CI failures** via Issue #17050 — 1 broken, 8 flaky tests reported as of today; use `lmsysorg/sglang:dev-v4f-2dgx-v2` image with care.

> 💡 **Pro Tip**: For production deployments, pin to `v0.5.18` until #38074 and #37931 are resolved. Use `--disable-speculative-decoding` or `skip_cache_insert` (PR #38069) for fine-grained control over caching behavior.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-09-06**

---

### **1. Today's Highlights**  
The latest updates focus on critical stability fixes for Apple Metal and SYCL backends, resolving a memory leak in Metal and improving device memory tracking in SYCL. Performance optimization continues with targeted Vulkan kernel improvements for IQ4_XS quantization and RDNA4-specific tuning, while new support for the Spark2_5 model expands the ecosystem of compatible LLMs.

---

### **2. Releases & Breaking Changes**  
- **`b10819` (Metal)**: Fixed a memory leak in early return paths (`#28399`) — critical for long-running inference jobs on macOS Apple Silicon.  
- **`b10818` (SYCL)**: Restored Kronecker product FWHT support and fixed CI breakage (`#28254`).  
- **`b10817` (SYCL)**: Added `GGML_SYCL_MEMTRACE` to attribute device allocations by site — invaluable for debugging memory usage in large-scale offloading (`#27631`).  
> 🔗 [GitHub Release b10819](https://github.com/ggml-org/llama.cpp/releases/tag/b10819)

---

### **3. New Model & Hardware Support**  
- **Model**: Added full end-to-end support for **Spark2_5ForCausalLM** via GGUF conversion, tokenizer pre-tokenizer, architecture registration, and tensor mapping (`#27868`).  
- **Hardware**: Continued refinement for **RDNA4 (gfx1201)** with optimized Vulkan kernels and FlashAttention tuning (`#28459`, `#28457`).  
- **Backend**: Experimental WebGPU support extended with backward kernels (`#28269`) — enabling browser-based fine-tuning.  

> 🔗 [PR #27868: Spark2_5 Support](https://github.com/ggml-org/llama.cpp/pull/27868)  
> 🔗 [PR #28269: WebGPU Backward Kernels](https://github.com/ggml-org/llama.cpp/pull/28269)

---

### **4. Performance & Optimization**  
- **Vulkan (RDNA4)**: Dedicated `mul_mat_vec_iq4_xs` shader yields **+6–17% token generation speedup** depending on model (`#28426`).  
- **IQ4_XS MMQ/MMV Kernels**: Specialized kernels eliminate float conversion overhead — significant gains for low-precision inference (`#28415`).  
- **FlashAttention Tuning (gfx1201)**: PR `#28102` includes context-specific optimizations and fixes for HS=256 bugs affecting Qwen3.8-27B performance.  
- **MTP Speculative Decoding**: PR `#26827` addresses multi-ubatch serialization issues causing host-wide lockups during prefill.  

> 🔗 [PR #28426: Dedicated IQ4_XS Vulkan Shader](https://github.com/ggml-org/llama.cpp/pull/28426)  
> 🔗 [PR #28415: IQ4_XS MMQ/MMV Kernels](https://github.com/ggml-org/llama.cpp/pull/28415)

---

### **5. Stability & Regressions**  
- **Critical**: **Native MMA FA kernel regression** on RDNA4 (`gfx1201`) causes up to **2x slower prompt processing** after rocWMMA removal (`#26220`).  
- **Crash**: CUDA graphs cause GPU hang (RC watchdog + Xid 8) on RTX 5090 Laptop (sm_1201); workaround: `GGML_CUDA_DISABLE_GRAPHS=1` (`#27330`).  
- **Memory Leak**: Metal backend had early-return memory leak — now fixed in `b10819`.  
- **ROCm RPC Crash**: TOP_K crashes during distributed Qwen3.8-Flash-Next inference due to invalid config argument (`#27865`).  
- **Windows OpenVINO**: Builds fail due to missing OpenSSL and TBB dependencies (`#24729`).  

> 🔗 [Issue #26220: RDNA4 FA Regression](https://github.com/ggml-org/llama.cpp/issues/26220)  
> 🔗 [Issue #27330: CUDA Graph Hang on RTX 5090](https://github.com/ggml-org/llama.cpp/issues/27330)

---

### **6. What This Means for Application Developers**  
- Use `GGML_SYCL_MEMTRACE` to debug memory allocation patterns in complex offload workflows — especially useful for MoE models with dynamic expert routing.  
- For RDNA4 users, prefer `--gpu-ctx-size` and avoid `--flash-attn` if using non-f16/q4_0/q8_0 KV cache types; use `GGML_CUDA_DISABLE_GRAPHS=1` as a temporary fix for RTX 5090.  
- The new **Spark2_5 support** enables integration with emerging Chinese LLMs; validate tool calling via `json-schema-to-grammar` due to known GBNF parsing issues (`#25746`, `#25923`).  
- Consider using `--log-jsonl` (`#28437`) for structured logging in production servers — essential for observability in agent pipelines.  

> 🔗 [PR #28437: Add --log-jsonl](https://github.com/ggml-org/llama.cpp/pull/28437)  
> 🔗 [Issue #25746: Nested maxLength → Unparseable GBNF](https://github.com/ggml-org/llama.cpp/issues/25746)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-06**

---

### **1. Today's Highlights**  
The latest release, **v0.34.0-rc1**, introduces native integration with **ChatGPT Desktop on macOS**, enabling users to run Ollama models directly within the app while preserving their existing workflow. This marks a major step toward seamless agent and desktop application interoperability. Concurrently, multiple PRs address critical context management and tool call parsing issues—particularly for Qwen and DeepSeek models—improving reliability in agentic workflows.

---

### **2. Releases & Breaking Changes**  
- **v0.34.0-rc1**: Released with enhanced support for **ChatGPT Desktop on macOS**, allowing direct use of Ollama models without switching environments.  
  🔗 [GitHub Release](https://github.com/ollama/ollama/releases/tag/v0.34.0-rc1)  
- **Note**: No breaking API changes reported; forward compatibility preserved across stable releases.

---

### **3. New Model & Hardware Support**  
- **Qwen3.8-27B (MTP + speculative decoding)**: Now supported via official Hugging Face tags, though early adopters report `POST /v1/chat/completions` hanging (#17790).  
- **DeepSeek-V4-Flash:cloud**: Cloud-hosted variant now under active scrutiny due to self-sustaining tool-call loops (#17617), indicating potential need for stricter parser controls.  
- **MLX Runner (Apple Silicon)**: Continued improvements for dynamic YaRN context extension support (#18263), enabling larger effective context windows on M-series chips.  
- **Legacy macOS Support**: Requested but not yet implemented (#17842); current version requires macOS 14.0+.

---

### **4. Performance & Optimization**  
- **Context Enforcement**: PR #18261 implements strict enforcement of `num_ctx` in MLX runner, preventing silent overruns that lead to Metal watchdog panics (#18125).  
- **Prompt Cache Management**: PR #18265 proposes bounding `llama-server`’s prompt cache via `OLLAMA_CACHE_RAM`, addressing 8 GiB RAM bloat per runner (#18264).  
- **Cold Start Overhead**: PR #18267 identifies a 17–27 second re-prefill tax due to prefix-cache truncation at 8192-token boundaries—an optimization target for agent workloads.  
- **Tool Schema Parsing**: PR #18248 fixes escaped `/` and `-` in JSON schema patterns, resolving `failed to parse grammar` errors in Claude Code’s interactive mode (#18226).

---

### **5. Stability & Regressions**  
| Issue | Severity | Status | Fix PR |
|------|----------|--------|--------|
| `digest mismatch` on download (`ollama pull`) | High | Open (#941) | None |
| GPU reset leaves runner in broken Metal state (Apple Silicon) | Critical | Open (#18213) | None |
| `gemma3:12b` structured output truncated on double-quoted input | Medium | Open (#18094) | None |
| `qwen3.8:27b-mtp-q4_K_M` fails in chat mode due to malformed system message | Medium | Open (#17768) | None |
| `kimi-k2.6:cloud` exhibits 10+ minute latency & stream failures | High | Open (#16845) | None |
| `qwen2.5-coder:3b-instruct` low-bit quantizations (q2_K/q3_K) fail all code tasks | Critical | Open (#18252) | None |

> ⚠️ **Critical Note**: Multiple regressions affect **Qwen series** and **MLX runner** stability, particularly around context handling, tool calling, and memory safety.

---

### **6. What This Means for Application Developers**  
- **Agent Builders**: Be cautious with `qwen3.8`, `deepseek-v4-flash:cloud`, and `qwen2.5-coder` models—expect unreliable tool calls or infinite loops unless patched. Use `/api/chat` instead of `/v1/chat/completions` if possible.  
- **Context Management**: Do **not rely on `num_ctx` from Modelfile alone**—it may be silently overridden by client requests. Use `log:num_ctx_source` (PR #18249) to audit behavior.  
- **Local Deployment**: If using Apple Silicon, avoid long prefill sequences until PR #18267 lands—expect up to 27 seconds of cold start delay.  
- **Tool Call Reliability**: Validate JSON schema patterns in tools; avoid `\/` or `\` inside arrays. Patch via PR #18248 if building custom tooling.  
- **Future-Proofing**: Monitor `v0.34.0` release for ChatGPT Desktop integration—this could unlock new local-first agent UX patterns.

🔗 [Full GitHub Dashboard](https://github.com/ollama/ollama)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-09-06**

---

### **1. Today's Highlights**  
LiteLLM continues to evolve as a robust LLM gateway and inference orchestrator, with key improvements in cost tracking accuracy, proxy reliability, and UI usability. Critical fixes address streaming behavior (e.g., tool_call ID loss), budget management inconsistencies, and model routing logic. New support for Azure AI’s `gpt-6-astra` Foundry pricing and enhanced guardrail resilience signal growing enterprise readiness.

---

### **2. Releases & Breaking Changes**  
*No new releases in the past 24 hours.*  
However, several PRs address breaking behaviors:  
- **PR #39983**: Adds official pricing for `azure_ai/gpt-6-astra`, critical for accurate cost tracking in hybrid deployments. [Link](https://github.com/BerriAI/litellm/pull/39983)  
- **PR #39974**: Fixes incorrect headroom retrieval triggers from text content (e.g., Git SHAs), preventing false billing. [Link](https://github.com/BerriAI/litellm/pull/39974)  
- **PR #39977**: Ensures PDF data URIs are correctly parsed as document blocks — previously rejected by Anthropic/Bedrock/Claude. [Link](https://github.com/BerriAI/litellm/pull/39977)

---

### **3. New Model & Hardware Support**  
- **Azure AI GPT-6 Astra Foundry**: Added to cost map (`azure_ai/gpt-6-astra`) with proper flex/priority pricing and context window support. [PR #39983](https://github.com/BerriAI/litellm/pull/39983)  
- **Cohere Tool Calling (OCI)**: Fixed streaming behavior to avoid duplicate assistant text output. [PR #39965](https://github.com/BerriAI/litellm/pull/39965)  
- **Milvus gRPC Search**: Now supported via vector stores, enabling direct integration with gRPC-only Milvus clusters. [PR #39039](https://github.com/BerriAI/litellm/pull/39039)  
- **Claude Gateway**: Feature request (#34924) signals intent to support Anthropic’s new Apps Gateway API.

---

### **4. Performance & Optimization**  
- **Streaming Efficiency**: PR #39965 reduces redundant text emissions during tool-calling streams, improving client-side rendering performance.  
- **Guardrail Resilience**: PR #39982 introduces retry logic for failed guardrail package imports, reducing silent failures during high-throughput operation. [Link](https://github.com/BerriAI/litellm/pull/39982)  
- **Vector Store Scoping**: PR #39972 ensures emulated file_search queries only run against explicitly requested vector stores, avoiding unnecessary compute. [Link](https://github.com/BerriAI/litellm/pull/39972)  

No latency or throughput benchmarks reported today.

---

### **5. Stability & Regressions**  
High-severity issues detected:  
1. **Streaming tool_call.id loss** (`#39796`): When upstream sends full `tool_calls` in one delta, LiteLLM drops `tool_calls[].id` and `function.name`. This breaks agent statefulness. *Fix PR pending.* [Issue](https://github.com/BerriAI/litellm/issues/39796)  
2. **Budget reset failure** (`#39370`): `budget_duration=null` rows with stale `budget_reset_at` cause spend to be silently zeroed on every tick. *Critical for cost monitoring.* [Issue](https://github.com/BerriAI/litellm/issues/39370)  
3. **Client-side timeout leak** (`#39899`): `client_side_timeout` field leaks into provider requests, causing 400 errors on Anthropic/Bedrock/Azure. *Blocks deployment of time-sensitive applications.* [Issue](https://github.com/BerriAI/litellm/issues/39899)  
4. **Cost calculation crashes** (`#39618`, `#39615`): `cost_per_token` and `projected_cost` crash on `None` or non-string content (vision blocks, `content=None`). *Impacts all spending analytics pipelines.* [Issue #39618](https://github.com/BerriAI/litellm/issues/39618), [Issue #39615](https://github.com/BerriAI/litellm/issues/39615)  

---

### **6. What This Means for Application Developers**  
- **Avoid `client_side_timeout` in headers/body** — it will now fail upstream providers. Use `timeout` in the request body instead.  
- **Validate input content types** when using vision models or function calls; `None`, lists, or malformed `content` can crash cost tracking.  
- **Upgrade to latest versions** to benefit from improved streaming correctness and budget integrity — especially if relying on cost control or agent workflows.  
- **Expect better debugging** with upcoming UI enhancements: image rendering in logs (`#29877`) and timezone-aware date filters (`#39979`).  
- **Monitor community PR review status** — several high-value contributions (e.g., Lyria music generation on Vertex) remain unreviewed months after submission. [Issue #39911](https://github.com/BerriAI/litellm/issues/39911)  

> 💡 **Pro Tip**: Use `model_info` API over static maps for dynamic context window detection (`#39529`) to avoid misconfiguration in custom OpenAI-compatible backends.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-06**

---

### **1. Today's Highlights**  
The Unsloth project continues rapid iteration on its inference stack, with a strong focus on stability and usability improvements across desktop, web, and CLI workflows. Key developments include fixes for critical GPU compatibility issues (Intel Arc, AMD ROCm), enhanced context management, and new support for custom search providers and API dialects in Studio. A major PR introduces asynchronous optimization (SAO) training support, signaling deeper investment in RL-based fine-tuning pipelines.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new releases or breaking changes were published.

---

### **3. New Model & Hardware Support**  
- ✅ **Intel Arc B580**: Critical fix underway for `torch.xpu.memory.mem_get_info()` crash in `unsloth_zoo/temporary_patches/gpt_oss.py` (#3533). This enables import on Intel Arc GPUs, though full runtime support may require downstream adjustments.
- ✅ **AMD ROCm (W7900/W7500)**: Improved memory management via conditional `GGML_CUDA_ENABLE_UNIFIED_MEMORY` activation only when needed (#10351), reducing correctness risks on Linux/ROCm systems.
- ✅ **ARM64 Linux (aarch64)**: Requested for Unsloth Desktop build (#10332); currently missing but under investigation—packaging limitations identified.
- ✅ **Voxtral model**: Feature request raised for native integration (#3013)—multilingual/multimodal support sought by community.
- ✅ **Custom API Providers**: Added need for endpoint/type selection beyond `/v1/chat/completions` to support non-OpenAI APIs (#10347).

---

### **4. Performance & Optimization**  
- 🔧 **Parallel Search MCP Integration**: Opt-in support for Parallel’s free, authless Search MCP added to Studio (#10286), enabling faster, scalable web search without rate-limiting.
- 🚀 **Two-Spark Serving Orchestrator**: Experimental async replica routing now supports DGX Spark clusters (#10323), improving throughput and resilience in multi-node setups.
- ⚙️ **KV Preemption Improvements**: Two PRs refine KV cache sharing between parallel chats to prevent contention and improve resource utilization (#10301, #10358).
- 🎯 **SAO RL Trainer**: New `SAOTrainer` implementation shipped (#9309) based on arXiv:2607.07508, enabling single-rollout asynchronous optimization for models like GLM-5.2.

---

### **5. Stability & Regressions**  
High-severity bugs reported today:

| Issue | Severity | Status | Fix PR |
|------|----------|--------|--------|
| `unsloth chat` loads wrong GGUF from directory (#10352) | Critical | Open | [PR #10357](https://github.com/unslothai/unsloth/pull/10357) – resolves path resolution logic |
| Torch Dynamo circular import on Windows (#10350) | High | Open | [PR #10360](https://github.com/unslothai/unsloth/pull/10360) – gates `torch._dynamo` import safely |
| Model fails to unload despite "No RAM Offload" checkbox (#10339, #10341) | High | Open | — |
| Tool responses truncated at 16k chars (#10349) | Medium | Open | [Feature request](https://github.com/unslothai/unsloth/issues/10349) – user-set truncation threshold proposed |
| Model remains in RAM after unloading (#10339, #10341) | High | Open | — |

> Note: Multiple regressions tied to AMD ROCm and Intel Arc hardware suggest ongoing platform-specific instability that requires targeted patching.

---

### **6. What This Means for Application Developers**  
- **Use caution with local GGUF loading**: Avoid placing multiple unrelated GGUF files in the same directory until #10357 lands—`unsloth chat` may load unintended models.
- **Leverage SAO for RL fine-tuning**: The new `SAOTrainer` enables efficient, low-latency reinforcement learning training—ideal for agent alignment tasks.
- **Build custom tool integrations**: Use `--custom-search-api-key` and `--custom-tool-provider` options (pending #8871) to integrate private APIs like Brave Search.
- **Ensure offline deployment readiness**: For air-gapped environments, consider standalone packages (as seen in KoboldCpp) while waiting for official offline install support (#10356).
- **Monitor for context fragmentation**: The current sliding window is AI-optimized; users report poor human readability (#10345). Consider implementing custom compaction logic if conversation coherence is critical.

> 👉 *Pro Tip*: Use `unsloth chat --model-path <path>` explicitly to avoid ambiguous file resolution during development.

---  
*Digest generated from GitHub data: [unslothai/unsloth](https://github.com/unslothai/unsloth)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*