# AI Infrastructure Digest 2026-11-12

> Generated: 2026-11-12 03:18 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-11-12**

---

### **1. Ecosystem Overview**  
The AI inference infrastructure landscape in late 2026 is marked by intense specialization and hardware convergence. Projects are rapidly diverging into distinct roles: high-performance serving engines (vLLM, SGLang), optimized local runtimes (llama.cpp, Unsloth), and intelligent gateways (LiteLLM). The focus has shifted from generic model support to *hardware-aware optimization*, with AMD ROCm and NVIDIA Blackwell dominating development efforts. A clear trend toward **distributed prefill disaggregation**, **speculative decoding maturity**, and **multi-backend runtime flexibility** is evident—driven by demand for low-latency, cost-efficient agent workloads across edge, cloud, and hybrid environments.

---

### **2. Activity Comparison**

| Project       | Issues Opened (Last 24h) | PRs Merged (Last 24h) | Release Status       |
|---------------|----------------------------|-------------------------|-----------------------|
| **vLLM**      | 8                          | 15                      | No new release        |
| **SGLang**    | 12                         | 10                      | v0.5.23 (critical regression) |
| **llama.cpp** | 7                          | 9                       | No new release        |
| **Ollama**    | 6                          | 5                       | No new release        |
| **LiteLLM**   | 5                          | 8                       | v1.110.0-rc.2 (RC)    |
| **Unsloth**   | 9                          | 6                       | v0.1.917-beta (beta)  |

> 🔍 *Insight*: SGLang shows the highest activity spike due to a critical regression in v0.5.23, while LiteLLM leads in release velocity with an RC focused on stability and cost accuracy. Unsloth’s beta release signals aggressive feature rollout.

---

### **3. Model Support Race**

| New Model / Architecture       | Supported By                     | Status & Key Differentiator |
|----------------------------------|-----------------------------------|------------------------------|
| **Qwen3.8-27B (Dynamic v3.1 GGUF)** | ✅ Unsloth (beta)                 | First to ship production-ready local inference via optimized GGUF |
| **Kimi-K3.1**                   | ✅ SGLang (Day-0), ⚠️ Unsloth (via override) | SGLang leads with full-stack support (PD, HiCache, DFlash) |
| **DeepSeek-V4-Pro (UMBP)**      | ✅ vLLM (ROCm-only)               | Only project with prefix offloading support on AMD |
| **NVIDIA B200 (NVFP4 MoE)**     | ✅ vLLM (PR #61511)               | vLLM remains ahead in Blackwell-specific kernel tuning |
| **AMD MI355X / gfx950**         | ✅ vLLM, ✅ SGLang, ✅ llama.cpp    | vLLM leads in performance optimizations; SGLang leads in disaggregated prefill |
| **Intel Arc GPU**               | ✅ vLLM (SimpleCPUOffloadConnector) | vLLM first to enable Intel XPU support |
| **EXL3 (ExLlamaV3)**            | ✅ Unsloth                        | Exclusive to Unsloth; enables MoE + non-transformer models |

> 🏆 **Leaderboard**:  
> - **Model Agility**: **SGLang** (Kimi-K3.1, L3 offload)  
> - **Hardware Specialization**: **vLLM** (Blackwell, ROCm kernels)  
> - **Local Runtime Innovation**: **Unsloth** (Dynamic GGUF, NPU backend)

---

### **4. Performance Frontier**

| Optimization Focus           | Leading Projects                             | Key Developments |
|-------------------------------|----------------------------------------------|------------------|
| **KV Cache Efficiency**       | vLLM (FP8 sparse MLA), SGLang (HiCache buffer-only mode) | vLLM adds FP8 KV cache on ROCm; SGLang reduces backup writes |
| **Batching & Throughput**     | vLLM (`VLLM_BATCH_INVARIANT=1`), Unsloth (model load batching) | vLLM achieves ~18% throughput gain on Qwen2.5-0.5B |
| **Kernel-Level Optimization** | vLLM (FlashTopK, `ldmatrix.s8.s4`), SGLang (cuTile NVFP4 MoE) | vLLM adopts PTX 9.4 for INT4→INT8 sign extension |
| **Speculative Decoding**      | vLLM, SGLang, Ollama (metrics), Unsloth (subagents) | SGLang suffers decode regression; vLLM fixes CUDA graph capture |
| **Distributed Prefill**       | SGLang (Mooncake, PD over MoRI), vLLM (offload) | SGLang leads in disaggregated prefill stability |
| **Quantization & Memory**     | llama.cpp (MMQ, FP8), vLLM (MXFP4 fusion) | llama.cpp introduces MMQ for speculative decoding; vLLM fuses MXFP4 indexer |

> 🔥 **Hot Zones**:  
> - **AMD ROCm**: vLLM and SGLang are racing on gfx950/MI355X optimizations.  
> - **NVIDIA Blackwell**: vLLM dominates with CUTLASS kernel tuning.  
> - **Low-Rank & Sparse Kernels**: FlashTopK, FP8, and fused indexing are key differentiators.

---

### **5. Layer Positioning**

| Project       | Primary Layer                | Core Differentiation |
|---------------|-------------------------------|------------------------|
| **vLLM**      | **High-Performance Serving Engine** | Optimized for scale-out inference, distributed attention, and kernel-level tuning |
| **SGLang**    | **Agentic Inference Framework** | Built for long-context agents with HiCache, PD, and DFlash speculation |
| **llama.cpp** | **Universal Local Runtime** | Lightweight, cross-platform, ideal for edge/mobile with WebGPU/TTS support |
| **Ollama**    | **Unified Local Inference Gateway** | Bridges models, tools, and APIs; strong UX and deployment ease |
| **LiteLLM**   | **AI API Gateway & Orchestration Layer** | Aggregates providers, enforces cost tracking, enables team-wide budgeting |
| **Unsloth**   | **Agent-Centric Local UI Runtime** | Combines inference, coding agents, image gen, and export in one desktop app |

> 💡 **Strategic Insight**: The stack is now clearly layered:
> - **Frontend Agents**: Unsloth (UI), LiteLLM (API layer)
> - **Middle Tier**: SGLang (agentic logic), vLLM (inference engine)
> - **Edge & Edge+**: llama.cpp (local), Ollama (accessible runtime)

---

### **6. Trend Signals**

#### 🔮 **Key Industry Trends Extracted**
1. **Hardware-Specific Optimization Is Now Table Stakes**  
   Projects are no longer "generic" — vLLM and SGLang now have separate ROCm/Blackwell paths. Developers must choose based on target hardware.

2. **Speculative Decoding Is Maturing — But Still Risky**  
   Multiple projects report instability (SGLang v0.5.23 regression, llama.cpp divergence on quantized models). Use only with tested configurations.

3. **Disaggregated Prefill Is the New Benchmark**  
   SGLang leads with Mooncake, HiCache, and PD over MoRI. This will define future agent performance.

4. **Cost Transparency Is Non-Negotiable**  
   LiteLLM’s RC release emphasizes token counting, per-model budgets, and provider error handling — critical for enterprise adoption.

5. **Local Runtimes Are Becoming Full-Stack Platforms**  
   Unsloth bundles inference, agents, exports, and image gen — blurring line between runtime and application.

#### 📌 **What Application Developers Should Watch**
- ✅ **Avoid v0.5.23 (SGLang)** in production — pin to v0.5.22.
- ✅ **Validate speculative decoding** on quantized models (llama.cpp, vLLM).
- ✅ **Use `VLLM_BATCH_INVARIANT=1`** for consistent batch behavior.
- ✅ **Leverage LiteLLM’s cost tracking** and `sglang:num_good_requests_total` metric for SLO monitoring.
- ✅ **Prepare for multi-backend deployments** — Unsloth and vLLM now support diverse backends (NPU, EXL3, ROCm).

> 🛠 **Final Recommendation**: For agent-heavy applications, adopt **SGLang + LiteLLM + Unsloth** as your stack. For scalable cloud serving, **vLLM + LiteLLM** remains the gold standard. Always test against real workload patterns before upgrading.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-11-12**

---

### **1. Today's Highlights**  
The vLLM project continues its aggressive optimization push for AMD ROCm and NVIDIA Blackwell architectures, with multiple high-impact PRs targeting performance bottlenecks in Qwen3.8, DeepSeek-V4, and GLM-5.3 on gfx950/MI355X and B200. Key developments include the introduction of a selectable `FlashTopK` backend for SM90/SM100, new support for FP8 KV cache in sparse MLA on ROCm, and critical bugfixes for speculative decoding and CUDA graph capture stability.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking API/config changes detected in the past 24 hours.*

---

### **3. New Model & Hardware Support**  
- ✅ **AMD ROCm (gfx950 / MI355X)**: Performance optimization tracker now active for `amd/Qwen3.8-2.4T-A95B-Quark-MXFP4` and `amd/Qwen3.8-Flash-Next-Quark-MXFP4`.  
- ✅ **NVIDIA Blackwell (B200)**: NVFP4 MoE CUTLASS kernel optimized via PR #61511.  
- ✅ **Intel XPU**: `SimpleCPUOffloadConnector` now supports Intel Arc GPUs via PR #67143.  
- ✅ **DeepSeek-V4-Pro**: Standalone UMBP mode enabled for prefix offloading on ROCm via PR #63002.  
- ✅ **Qwen3.5/3.6 MoE GPTQ**: Fix for missing `w2_weight` parameter in BF16 fused MTP experts (PR #63598 resolved).  
- ✅ **Speech-to-text**: Support for `use_beam_search` and `max_completion_tokens` passed to STT models via PR #67151.

---

### **4. Performance & Optimization**  
- 🔥 **Kernel-Level**:  
  - `ldmatrix.s8.s4` (PTX 9.4) adopted in W4A8-INT8 paths for faster INT4→INT8 sign extension (Issue #49529).  
  - `FlashTopK` backend added as opt-in for SM90/SM100 (`fused_mqa_topk_prefill`) — improves sparse indexing efficiency (PR #67149).  
- 🚀 **Model-Specific**:  
  - Qwen2.5-0.5B tuned under `VLLM_BATCH_INVARIANT=1` shows up to **~18% higher throughput** on RTX PRO 4500 Blackwell Server Edition (PR #67079).  
  - DeepSeek-V4 MXFP4 indexer K writer fused into single kernel on gfx950 → reduced launch overhead (PR #56834).  
  - GLM-5.3 unquantized BF16 MegaMoE now uses DeepGEMM path (PR #67040), enabling efficient inference without quantization.  
- ⚙️ **Memory Efficiency**:  
  - `ROCM_ATTN` attention backend fixed for head sizes ≥96 on RDNA (PR #62697), eliminating GPU faults.  
  - `FlashAttention` backend no longer re-derives K/V cache views on every call (Issue #64572), reducing CPU overhead.

---

### **5. Stability & Regressions**  
- ⚠️ **Critical**:  
  - **CUDA Graph Capture Crash** on H200 with Qwen3.5 FP8 (`v0.25.0` regression) — illegal memory access due to stale UVA views (Issue #49311). *Fix pending.*  
  - **Silent Garbage Output** in Confidential Computing mode (TDX guest) due to stale UVA views in V2 model runner (Issue #57224). *Fix: disable `VLLM_USE_V2_MODEL_RUNNER` as workaround.*  
- ⚠️ **Moderate**:  
  - **Speculative Decoding Crash** in Gemma 4 MTP during CUDA graph capture (`_suppress_token_ids` not device tensor) — fix merged in PR #66523.  
  - **Incorrect Attention** on RDNA GPUs with head size ≥96 and non-16 KV block size — fixed in PR #62697.  
  - **Malformed UTF-8** causes quadratic detokenization delay, stalling `/health` endpoint (Issue #63667).  

---

### **6. What This Means for Application Developers**  
- **Optimize for ROCm & Blackwell**: If deploying on AMD MI355X or NVIDIA B200, prioritize using latest vLLM builds with ROCm-specific kernels (e.g., `FlashTopK`, fused MXFP4) for maximum throughput.  
- **Avoid Speculative Decoding Pitfalls**: Be cautious with `speculative_decode` + `KV offload` on ROCm; verify compatibility with `ROCM_ATTN` and avoid unsupported head/block sizes.  
- **Use Structured Output Safely**: The `response_format=json_schema` issue in Qwen3.5 is resolved — ensure you're on a recent build.  
- **Enable Lifecycle Hooks Early**: With RFC #65545 (lifecycle hooks for plugins), plan for graceful shutdown and readiness checks in production deployments.  
- **Monitor Memory Profiling**: For large `--max-num-batched-tokens`, be aware that transient buffers (e.g., KDA chunked-scan) are not captured in startup profiling (Issue #54775).  

> 💡 **Pro Tip**: Use `VLLM_BATCH_INVARIANT=1` with batch-invariant models like Qwen2.5-0.5B for consistent results across batching scenarios (see PR #67079).

[GitHub Issues](https://github.com/vllm-project/vllm/issues) | [GitHub PRs](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest – 2026-11-12

---

### **1. Today's Highlights**  
The SGLang ecosystem continues to mature with significant progress in **HiCache and disaggregated prefill stability**, particularly around Kimi-K3.1 support and L3 offload consistency. Critical performance regressions have been identified in v0.5.23 (up to +45% decode latency on Hopper), while CI reliability remains a top concern due to flaky tests and infrastructure instability. A major refactor of the NPU operator interface is now live, improving maintainability for future hardware support.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours.  
⚠️ **Note**: The recent release v0.5.23 has introduced a **serious decode regression** (up to +45% per-step latency at concurrency 12) on SM90 GPUs (`DeepSeek-V4.1-Flash`), affecting production workloads. Users are advised to **pin to v0.5.22** until a fix is issued.  
🔗 [Issue #49336: SM90 decode regression v0.5.22 → v0.5.23](https://github.com/sgl-project/sglang/issues/49336)

---

### **3. New Model & Hardware Support**  
- ✅ **Kimi-K3.1** now has full Day-0 support on `main`, including:  
  - Pipeline parallelism (PP) over DCP  
  - Disaggregated prefill (PD) via Mooncake  
  - DFlash speculative decoding  
  - HiSparse + fused kernels  
  🔗 [PR #48414: Add Kimi-K3.1 support](https://github.com/sgl-project/sglang/pull/48414)  
- 🚀 **RTX 50-series (SM12x)** support is actively being expanded:  
  - FlashInfer cuTile NVFP4 MoE now proposed as default runner for SM12x  
  - Issue #49123 tracks integration  
  🔗 [Issue #49123: moe: FlashInfer cuTile NVFP4 MoE as default on SM12x](https://github.com/sgl-project/sglang/issues/49123)  
- ✅ **AMD ROCm** advances:  
  - MORI EPv2 dispatch/combine now runs on AsyncLL kernels for TBO (two-batch overlap)  
  - Kimi-K3.1 supports PD over MoRI between same-size DCP roles  
  🔗 [PR #48902: AMD kimi-k3.1: PD over MoRI between same-size DCP roles](https://github.com/sgl-project/sglang/pull/48902)

---

### **4. Performance & Optimization**  
- 🔧 **Attention optimization**: FA3/FA4 tree attention now optimized for wide verification trees and short ancestor chains — reduces metadata overhead and simplifies scheduling.  
  🔗 [PR #49477: Optimize FA3/FA4 tree attention](https://github.com/sgl-project/sglang/pull/49477)  
- 💡 **Kernel fusion gain**: For Gemma4, partial sums from `o_proj`/`down_proj` are now written directly into AR-fusion symmetric buffers, eliminating redundant copies.  
  🔗 [PR #50002: Write o_proj/down_proj partials into AR-fusion buffer](https://github.com/sgl-project/sglang/pull/50002)  
- ⚙️ **Memory efficiency**: HiCache buffer-only mode now ends backup chains where insert walks ended, reducing unnecessary storage writes.  
  🔗 [PR #49644: End each buffer-only backup chain where insert walk ended](https://github.com/sgl-project/sglang/pull/49644)  
- 📈 **Metric visibility**: New `sglang:num_good_requests_total` metric counts requests meeting latency SLOs, enabling direct goodput tracking via `/metrics`.  
  🔗 [PR #45643: Count requests that meet latency SLOs](https://github.com/sgl-project/sglang/pull/45643)

---

### **5. Stability & Regressions**  
🔴 **Critical Crashes & Bugs**  
- **Scheduler crash on decode**: `scheduler_0` crashes with exit code -3 (SIGQUIT) during normal operation — likely a C++ layer bug with no Python trace.  
  🔗 [Issue #49494: scheduler_0 crashes with SIGQUIT during decode](https://github.com/sgl-project/sglang/issues/49494)  
- **HiCache hit-rate dip under pressure**: Reproducible drop in prefix cache hit rate (from 87.4% to ~60%) during multi-turn benchmark with HiCache + Mooncake.  
  🔗 [Issue #47481: Reproducible cache hit-rate dip under L2/L3 pressure](https://github.com/sgl-project/sglang/issues/47481)  

🟡 **High-Priority Regressions**  
- **Decode regression in v0.5.23**: +33–45% per-step decode time at concurrency 12 across 8K–64K context lengths on Hopper (H20-3e).  
  🔗 [Issue #49336: SM90 decode regression v0.5.22 → v0.5.23](https://github.com/sgl-project/sglang/issues/49336)  
- **GLM-5.3-Flash corruption**: Engine state corrupted after 1M-token request in v0.5.23; all subsequent requests fail. v0.5.22 is clean.  
  🔗 [Issue #48964: GLM-5.3-Flash engine state corrupted after 1M-token request](https://github.com/sgl-project/sglang/issues/48964)  

🟢 **Other Notable Issues**  
- **Flaky CI infrastructure**: Over 190 comments on #42752 tracking recurring CI failures and test instability.  
  🔗 [Issue #42752: Flaky tests and CI infrastructure failures](https://github.com/sgl-project/sglang/issues/42752)  
- **NPU operator migration**: Legacy imports replaced with unified public entry points.  
  🔗 [PR #49995: Migrate sgl-kernel-npu calls to public operators](https://github.com/sgl-project/sglang/pull/49995)

---

### **6. What This Means for Application Developers**  
- **Avoid v0.5.23** if using high-concurrency or long-context scenarios on Hopper — it introduces severe decode latency spikes. Pin to v0.5.22 until fixed.  
- **Leverage new metrics**: Use `sglang:num_good_requests_total` to monitor real-world SLO compliance and optimize agent throughput.  
- **Prepare for Kimi-K3.1 adoption**: Its full-stack support enables efficient agentic reasoning with PD, HiCache, and DFlash.  
- **Expect CI noise**: Be ready for flaky test results in PR reviews — use `/sglang-pr-babysit` cautiously.  
- **Monitor memory pressure**: HiCache hit rates may degrade under sustained load; consider tuning `--hicache-host-memory-mode` or adjusting batch sizes.  

👉 **Recommendation**: For production deployment, prioritize stable versions and validate against your workload before upgrading. Watch PRs related to HiCache consistency and scheduler fixes.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-11-12**

---

### **1. Today’s Highlights**  
The latest updates focus on critical stability fixes for speculative decoding and MoE routing, with new WebGPU support for TTS models and performance optimizations for low-row matrices on CUDA. Key PRs include a fix for non-deterministic Flash Attention on ROCm/HIP and enhanced kernel support for Adreno/ROCm backends.

---

### **2. Releases & Breaking Changes**  
No new tagged releases were published in the last 24 hours. However, several high-priority PRs are pending merge:
- **#32120**: Disallows direct browser access to child `llama-server` instances (security hardening).
- **#32119 / #32113 / #32115**: Enforce explicit opt-in for tools/MCP via `--allow-unauthenticated-tools`, restrict CORS proxy/media URLs from local addresses — **impacts deployment security configurations**.
- **#32118**: Renames "Web UI" → "Llama Chat" in docs/help text; no behavioral change.

> 🔗 [PR #32120](https://github.com/ggml-org/llama.cpp/pull/32120) | [PR #32119](https://github.com/ggml-org/llama.cpp/pull/32119)

---

### **3. New Model & Hardware Support**  
- ✅ **WebGPU**: Added `COL2IM_1D` support for Qwen3-TTS and PocketTTS waveform decoders ([#31708](https://github.com/ggml-org/llama.cpp/pull/31708)).
- ✅ **Vulkan**: Enabled dequantized KV optimization with CM2 (CoopMat2) based on query tokens × GQA ratio ([#31526](https://github.com/ggml-org/llama.cpp/pull/31526)).
- ✅ **CUDA**: Added FP8 support via W8A16 and intrinsics for small-batch, few-row matrices ([#28413](https://github.com/ggml-org/llama.cpp/pull/28413), [#31959](https://github.com/ggml-org/llama.cpp/pull/31959)).
- ✅ **OpenCL**: Added bin kernel `kernel_gemm_noshuffle_q4_0_f32_32b_trans_ila_a7_bin` for Adreno X1 devices ([#30947](https://github.com/ggml-org/llama.cpp/pull/30947)).

---

### **4. Performance & Optimization**  
- **CUDA**: MMVF-based handling of BF16 matrices with few rows (e.g., Qwen4exp hyper-connections) improves SM utilization at batch sizes 2–24 ([#31959](https://github.com/ggml-org/llama.cpp/pull/31959)).
- **CUDA**: New quantized matmul kernel (`MMQ`) for 2–24 columns improves speculative decoding throughput ([#31533](https://github.com/ggml-org/llama.cpp/pull/31533)).
- **Vulkan**: Optimized `mul_mat_vec` kernel for `iq3_xxs` quantization ([#30904](https://github.com/ggml-org/llama.cpp/pull/30904)).
- **OpenCL**: Fused KQ attention stage per head-size slice with support up to head size 512 ([#30249](https://github.com/ggml-org/llama.cpp/pull/30249)).
- **General**: Reduced host memory overhead by avoiding unused graph metadata page initialization ([#32043](https://github.com/ggml-org/llama.cpp/pull/32043)).

---

### **5. Stability & Regressions**  
High-severity issues reported today:
- **[#25618]**: Speculative decoding (draft-mtp/draft-dspark) produces divergent output from vanilla on **quantized targets** (Q4_K_M), but matches on BF16 — **critical for correctness in production inference**.
- **[#29092]**: HIP/ROCm fused Gated Delta Net carries recurrent state across requests → **verbatim leakage of earlier prompts** in later completions — **high-risk for LLM agents**.
- **[#29774]**: Flash Attention on CPU overflows to `inf`/`NaN` due to F16 accumulator instead of F32 — affects model reliability.
- **[#31734]**: ARM CPU F16 dot product accumulates in F16 (no SVE), causing overflow to `inf` — impacts M4 Max Macs.
- **[#31111]**: MUL_MAT produces wrong results on gfx1200 HIP/ROCm with deterministic F16 — **accuracy regression**.

> 🔗 [Issue #25618](https://github.com/ggml-org/llama.cpp/issues/25618) | [Issue #29092](https://github.com/ggml-org/llama.cpp/issues/29092) | [Issue #29774](https://github.com/ggml-org/llama.cpp/issues/29774)

---

### **6. What This Means for Application Developers**  
- **Use caution with speculative decoding on quantized models** — expect potential divergence; prefer BF16 or test thoroughly.
- **Avoid using `--tools-runtime` without `--allow-unauthenticated-tools`** — recent changes enforce stricter access control.
- **For edge/mobile deployments**, prioritize OpenCL/Adreno kernels and WebGPU TTS support for better latency.
- **Monitor memory usage** — `repeat_last_n` and `dry_penalty_last_n` can cause OOM due to unbounded buffer allocation ([#29494](https://github.com/ggml-org/llama.cpp/issues/29494)).
- **If deploying on AMD ROCm**, avoid `gfx1151` until `SOLVE_TRI` bug is fixed ([#27557](https://github.com/ggml-org/llama.cpp/issues/27557)); consider `gfx1201` only after verifying FA dispatch thresholds ([#28867](https://github.com/ggml-org/llama.cpp/issues/28867)).

> ✅ **Recommendation**: Update to latest master and validate speculative decoding behavior with your target quantization scheme before production use.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-12**

---

### **1. Today's Highlights**  
The Ollama project continues to strengthen its core inference engine with critical fixes for GPU memory accounting, Vulkan backend stability on AMD hardware, and speculative decoding telemetry. Key PRs include a fix for VRAM misreporting across multi-GPU setups (#19632) and enhanced support for batched speculative verification in MLXRunner (#19663). Meanwhile, community integrations expand with new additions like Buddy, Netpals, and RigMatch, reflecting growing ecosystem adoption.

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking changes detected in the past 24 hours.*  
However, ongoing work includes deprecation of legacy `llama.cpp` compatibility patches (#18882), which will eventually require migration of older GGUF models during startup. Developers using custom or outdated model formats should prepare for future runtime behavior shifts.

---

### **3. New Model & Hardware Support**  
- **AMD Radeon 780M / RX 6800 XT Vulkan regression**: Multiple issues reported (#17748, #18557) indicate that larger models fail due to insufficient memory reporting (`ErrorDeviceLost`) or access violations (`0xc0000005`) on specific AMD drivers (v32.0.21045.5002). These are not feature additions but active stability concerns.
- **MLXRunner enhancements**: The `mlxrunner` backend now supports batch speculative verification (#19663), improving throughput for models leveraging MTP/DFlash architectures under concurrent load.
- **Claude Desktop Gateway integration**: A new PR (#19657) enables serving the Claude Desktop gateway via Ollama’s main listener, allowing unified API routing without requiring separate listeners.

---

### **4. Performance & Optimization**  
- **Speculative decoding metrics**: PR #19368 adds per-request tracking of drafted and accepted tokens, enabling more accurate performance analysis beyond acceptance rate alone — crucial for tuning draft depth and cost efficiency.
- **VRAM accounting & GPU splitting**: PR #19632 resolves multiple critical bugs causing incorrect eviction, failed loads, and suboptimal GPU utilization across devices. Fixes impact models >30B and hybrid attention architectures.
- **HTTP connection reuse**: PR #18397 disables `DisableKeepAlives` in `llama-server` HTTP clients, reducing overhead during `/api/embed` operations by reusing idle connections.
- **Windows iGPU memory management**: PR #19636 prevents excessive pinned host memory usage on Windows AMD iGPUs, addressing failures when loading large models (>½ system RAM) on integrated GPUs.

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Fix PR? | Link |
|---------|------|--------|--------|------|
| Critical | Access violation (`0xc0000005`) on AMD RX 6800 XT (Vulkan) | Open | ❌ | [#18557](https://github.com/ollama/ollama/issues/18557) |
| High | `ErrorDeviceLost` on AMD Radeon 780M Vulkan backend (≥0.32.10) | Closed | ✅ | [#17748](https://github.com/ollama/ollama/issues/17748) |
| High | Long replies degrade model quality until unload (`deepseek-r1`, `phi3.5`, etc.) | Open | ❌ | [#19457](https://github.com/ollama/ollama/issues/19457) |
| Medium | `-v` flag shows spurious "warning" messages | Closed | ✅ | [#19613](https://github.com/ollama/ollama/issues/19613) |
| Low | JSON tool calls parsed incorrectly by `qwen3.5` parser | Open | ❌ | [#19650](https://github.com/ollama/ollama/issues/19650) |

> 🔴 *Critical regressions on AMD Vulkan backends remain open and affect production usability on high-end consumer GPUs.*

---

### **6. What This Means for Application Developers**  
- **Use `--verbose` or monitor API responses** for detailed speculative decoding metrics (drafted/accepted tokens) to optimize prompt engineering and draft strategies.
- **Avoid loading large models on AMD iGPUs via Vulkan** if running Windows with current drivers; consider CPU fallback or newer ROCm-enabled systems.
- **Update your deployment scripts** to handle potential `ErrorDeviceLost` or `0xc0000005` crashes on AMD hardware—especially when scaling inference across multiple models.
- **Leverage upcoming Claude Desktop integration** via `/api/claude` endpoint for unified agent workflows across Google’s AI ecosystem.
- **Be cautious with Modelfile glob patterns** containing special characters (e.g., `[Q4]`); use absolute paths or sanitize directories to avoid unintended file resolution errors (#19628).

👉 *For developers building agents: expect improved concurrency and reduced latency from batched speculative verification in MLXRunner, but validate context handling on long conversations due to known drift issues.*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

---

### **LiteLLM Digest — 2026-11-12**

#### **1. Today's Highlights**  
The LiteLLM team released **v1.110.0-rc.2**, the latest in a series of rapid updates focused on stability, cost accuracy, and model translation fidelity. Key improvements include fixes for token counting in Anthropic `/v1/messages`, better handling of tool calling in Ollama and Bedrock integrations, and enhanced support for per-model budgeting within teams—critical for production-grade AI gateways.

#### **2. Releases & Breaking Changes**  
- **v1.110.0-rc.2**, **v1.109.1**, **v1.108.6**, **v1.106.9**, and **v1.106.8** were released with security hardening via **Cosign-signed Docker images** (key: `e82a3c6`). All users should verify image integrity using:
  ```bash
  cosign verify \
    --key https://raw.githubusercontent.com/BerriAI/litellm/e82a3c646908ba0a6ee0beddc4310d7a6cac4065/cosign.pub \
    ghcr.io/berriai/litellm:v1.106.8
  ```
  🔗 [Verify release signatures](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065)

> ⚠️ **Note**: v1.110.0-rc.2 is a release candidate; avoid in production unless tested. The `lts/1.108.x` branch received critical backports (e.g., #51340) for Gemini cost tracking and context window checks.

#### **3. New Model & Hardware Support**  
- ✅ **Fal.ai video endpoints** now support **per-clip pricing by duration/resolution** via `output_cost_per_video_clip` (#51299).  
- ✅ **Magistral reasoning modes** are now natively supported in LiteLLM’s translation layer (#51329), enabling full reasoning_effort and strict validation across providers.  
- ✅ **Fireworks AI routers** (e.g., `glm-5p3-us`) are correctly routed to account-level router paths instead of failing with 404s (#51323).  
- ✅ **Ollama Chat** tool calling schema visibility restored in UI (#36463).

#### **4. Performance & Optimization**  
- **Token counter optimization**: Fixed quadratic complexity in model name path traversal (`#50412`) — reduces latency on long model names.  
- **Usage schema pre-initialization**: Prevents race conditions during high-throughput startup (`#51310`) — improves reliability under burst loads.  
- **CI/CD performance**: Reduced GitHub Actions cache thrashing (`#51343`) — speeds up PR testing cycles by ~40% on average.  
- **Rate limiting efficiency**: Dynamic borrowing of idle capacity between teams (`#51328`) enables higher utilization without over-provisioning.

#### **5. Stability & Regressions**  
| Severity | Issue | Fix Status | Link |
|---------|------|------------|------|
| 🟡 High | `response_cost` null when `custom_llm_provider=anthropic` with mismatched pricing | Open | [#47675](https://github.com/BerriAI/litellm/issues/47675) |
| 🟡 High | Streaming `finish_reason="stop"` even without provider signal | Open | [#46542](https://github.com/BerriAI/litellm/issues/46542) |
| 🟡 High | Per-model tools lost if model not in catalog | Open | [#48145](https://github.com/BerriAI/litellm/issues/48145) |
| 🟢 Medium | Azure responses forward empty namespace descriptions from `additional_tools` | Open | [#36366](https://github.com/BerriAI/litellm/issues/36366) |
| 🟢 Medium | MCP `tools/list` hangs on legacy clients after v1.108.0 upgrade | Open | [#50065](https://github.com/BerriAI/litellm/issues/50065) |

> ✅ **Fixes landed today**:  
> - Token counting now includes server-side tool history (#51334)  
> - Bedrock service tier errors now return 400 instead of silent failures (#50516)  
> - SDK replay and JSON instructions forwarded to main (#51320)

#### **6. What This Means for Application Developers**  
- **Cost tracking is more reliable**: Ensure your `model_prices_and_context_window.json` aligns with actual provider pricing, especially for `custom_llm_provider=anthropic`.  
- **Streaming behavior is improving**: Avoid assuming `finish_reason="stop"` means completion — validate against provider signals.  
- **Tool calling is more robust**: If using non-catalog models (e.g., `nano-gpt/z-ai/glm-5.3-flash`), explicitly define `tools` in config to prevent loss.  
- **Upgrade caution**: v1.110.0-rc.2 introduces changes to rate limiting and cost calculation — test thoroughly before deploying to production.  
- **Use LTS branches for stability**: For production systems, consider sticking to `lts/1.108.x` until v1.110.0 is stable.

🔧 **Recommendation**: Audit your cost tracking and tooling logic using the latest RC, and enable `LITELLM_TPM_TOKEN_RESERVATION_ENABLED=true` only if you’re confident in Redis setup.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-12**

---

### **1. Today's Highlights**  
Unsloth v0.1.917-beta delivers major performance improvements and introduces **Qwen3.8-27B with Dynamic v3.1 GGUFs**, enabling efficient local inference. The release enhances UI fidelity with smoother Glass rendering, revamped code blocks, Thinking UI, and new features including HTML/PDF chat exports, image generation, and coding agents.  

---

### **2. Releases & Breaking Changes**  
- **v0.1.917-beta**:  
  - Introduces **Dynamic v3.1 GGUFs** for Qwen3.8-27B, optimized for local inference with reduced memory footprint and improved token throughput.  
  - Revamped **Thinking UI**, **HTML/PDF export**, **image generation**, and **coding agent** workflows.  
  - Fixes include smoother Glass rendering, enhanced code block styling, and improved stability during model loading.  
  🔗 [GitHub Release v0.1.917-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.917-beta)

---

### **3. New Model & Hardware Support**  
- **Qwen3.8-27B** now fully supported via Dynamic v3.1 GGUFs (local inference).  
- **Kromoss-GGUF** (MOSS-Image derivative) added to Studio support list—now accepted if `family_name` override is provided.  
- **AMD NPU (FastFlowLM via Lemonade)**:  
  - Full feature rollout in progress: power mode, prefill chunk length, image pre-resize, context auto-sizing based on free RAM.  
  - Settings > Storage now tracks and manages NPU models via Lemonade backend.  
  🔗 [PR #17519](https://github.com/unslothai/unsloth/pull/17519), [PR #17510](https://github.com/unslothai/unsloth/pull/17510), [PR #17511](https://github.com/unslothai/unsloth/pull/17511), [PR #17535](https://github.com/unslothai/unsloth/pull/17535)  
- **EXL3 (ExLlamaV3)** backend added: supports 2/3/4/6/8-bit quantization and MoE models (non-transformers-compatible).  
  🔗 [PR #7115](https://github.com/unslothai/unsloth/pull/7115)

---

### **4. Performance & Optimization**  
- **Dynamic v3.1 GGUFs** reduce memory pressure and improve decode latency by ~18% vs. prior versions (internal benchmarks).  
- **NPU context sizing**: Auto-scales context length based on available GPU/RAM (less headroom), improving utilization on 48GB+ systems.  
- **Studiobench CI fixes**: Residual stabilizer padding resolves windowed pin check failures in thread reopens.  
  🔗 [PR #17571](https://github.com/unslothai/unsloth/pull/17571)  
- **Model load batching**: Improvements to background diffusers avoid race conditions during MiniMax-H3-Image startup.  
  🔗 [PR #17569](https://github.com/unslothai/unsloth/pull/17569)

---

### **5. Stability & Regressions**  
- **Critical**: `DiffusionGemma` ignores selected context length and parallelism settings in Studio — runs with `--maxtok 4096` despite UI showing 24,576.  
  🔗 [Issue #17558](https://github.com/unslothai/unsloth/issues/17558) *(Open, no fix PR yet)*  
- **High**: AMD ROCm 7.14 / MI300X fails due to stride assertion in `_scaled_dot_product_flash_attention_backward` — requires MATH fallback.  
  🔗 [Issue #17548](https://github.com/unslothai/unsloth/issues/17548) *(Open, reproducible on gfx942)*  
- **Medium**: Unsloth Desktop returns `404 Not Found` when receiving `X-Forwarded-Host` header, breaking Cloudflare Tunnel + Access auth flows.  
  🔗 [Issue #17420](https://github.com/unslothai/unsloth/issues/17420) *(Closed; workaround exists)*  
- **Low**: Video upload capped at 64MB despite model supporting larger inputs.  
  🔗 [Issue #17062](https://github.com/unslothai/unsloth/issues/17062) *(Open, request for expansion)*

---

### **6. What This Means for Application Developers**  
- **Local LLM deployment** is now significantly more accessible with Qwen3.8-27B and Dynamic v3.1 GGUFs — ideal for private, low-latency inference.  
- **Multi-backend flexibility**: With EXL3 and AMD NPU support maturing, developers can now target diverse hardware (CPU, GPU, NPU) without rewriting pipelines.  
- **Agent builders**: New coding agents and subagent tools (`spawn_subagent`) enable multi-agent workflows over external providers (e.g., OpenRouter), unlocking modular reasoning chains.  
- **UI/UX consistency**: Fixing model setting misalignment (e.g., DiffusionGemma context size) is critical for reliable agent behavior — monitor issue #17558 for production safety.  
- **Custom integrations**: Use `family_name` overrides or `studio/backend/core/coding_traces/session_to_trace.py` to build training data from saved sessions.  
  🔗 [PR #17220](https://github.com/unslothai/unsloth/pull/17220)

> ✅ **Recommendation**: For high-throughput inference, prefer Dynamic v3.1 GGUFs; for cutting-edge NPU acceleration, test the Lemonade-based stack via PR #17519. Avoid `--maxtok` defaults in custom connections — use per-model context limits instead.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*