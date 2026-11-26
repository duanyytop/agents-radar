# AI 基础设施日报 2026-11-26

> 生成时间: 2026-11-26 04:19 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

⚠️ 横向对比生成失败。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

---

### **1. Today's Highlights**  
The vLLM project continues to deepen its focus on **batch-invariant inference** and **ROCm/AMD GPU optimization**, with high-impact work in the `Qwen3.8` and `Muse Spark` families. A key RFC on request-level KV cache promotions aims to resolve long-standing issues in multi-tier offloading, while the Rust frontend moves closer to default adoption.  

---

### **2. Releases & Breaking Changes**  
*No new releases or breaking API/config changes were published in the last 24 hours.*  
However, ongoing efforts toward **Rust frontend as default** (tracked in #68784) signal a major architectural shift expected in early 2027.

---

### **3. New Model & Hardware Support**  
- **New model support**:  
  - `amd/Qwen3.8-Flash-Next-Quark-MXFP4` and `amd/Muse-Spark-Open-816B-A42B-Quark-PTPC-FP8` now have dedicated ROCm performance optimization tracks (#59575, #64018).  
  - `Inkling2LoopForConditionalGeneration` is being enabled for Intel XPU (Arc B60/B70, Battlemage) via shared implementation (#69712).  
- **Hardware backends**:  
  - **ROCm/gfx950 (MI355X)**: Active optimization for Qwen3.8 and Muse Spark models.  
  - **Intel XPU**: Initial integration for Inkling 2 models underway.  
- **Quantization formats**:  
  - MXFP4 and MXFP8 MoE activations are being refined for Quark-based models (#65918, #66564).  
  - Octave KV (3-bit native KV cache) proposed for AMD GPUs (#59773).

---

### **4. Performance & Optimization**  
- **Batch Invariance**: High-priority feature (#27433) progressing toward full stabilization; enables deterministic behavior across batch sizes.  
- **ROCm Optimization**: Multiple PRs targeting gfx950 and gfx942 platforms:  
  - `AWQ` decode path preserved under `torch.compile` (#67494), preventing unnecessary dequantization.  
  - Prefetching of CPU-offloaded DeepSeek V4.1 Engram rows improves eager prefill efficiency (#64500).  
- **KV Cache & Offloading**:  
  - Request-level KV promotion logic under review to prevent stale budgets and over-commit (#66782).  
  - Mooncake connector now groups pipeline stages per chunk for co-eviction (#68696).  
- **Build Time Reduction**: CI time reduced from ~73 min to ~54 min P50 (#66411), improving contributor velocity.

---

### **5. Stability & Regressions**  
- **Critical correctness bugs**:  
  - **Silent garbage output** on ROCm/gfx950 when running Kimi-K3 SiTU MoE with AITER a8w4 flag (#52442). *Fix pending.*  
  - **NaN logits after prefix-cache hit** in Qwen3.5/3.8 hybrid GDN models due to block boundary misalignment (#55766). *PRs in progress.*  
- **Performance regressions**:  
  - Long prefill workloads on Qwen3.8-Flash-Next periodically starve active decode for 3–7 minutes (#54919). *Root cause under investigation.*  
- **Security/robustness**:  
  - Scoring text now bounded before tokenization to prevent out-of-context attacks (#69939).

---

### **6. What This Means for Application Developers**  
- **Expect more deterministic inference**: Batch-invariant support (in progress) will reduce non-determinism in agent workflows and testing.  
- **Optimize for ROCm/AMD**: If deploying on MI355X or similar, monitor for updates around Qwen3.8 and Muse Spark optimizations—these are critical for throughput.  
- **Prepare for Rust frontend migration**: The `vllm serve` command may default to Rust soon (#68784); verify tooling compatibility with gRPC and async rendering.  
- **Watch for KV cache tuning**: New request-level promotion logic will improve offload reliability—consider adjusting `--max-num-batched-tokens` and `--kv-cache-dtype` accordingly.  
- **Avoid silent failures**: When using MoE models on ROCm, ensure `AITER_SITUV2_A8W4` is explicitly set to avoid garbage outputs (#52442).  

> 🔗 [GitHub Issues](https://github.com/vllm-project/vllm/issues) | [Pull Requests](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# **SGLang Digest – 2026-11-26**

---

### **1. 今日亮点**  
SGLang 项目持续推进生产级基础设施建设，关键改进包括 **Prefill-Decode (PD) 分离架构**、**SM120（Blackwell）多GPU扩展能力** 以及 **基于 Rust 的服务端栈性能优化**。主要工作重点集中在稳定 CI/CD 流水线——尤其是针对不稳定的测试用例（#42752）——并解决长期存在的问题：**Mamba 分块 Prefill 对齐**、**FP8 量化正确性** 以及 **扩散模型服务可靠性**。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未检测到新版本发布。*  
不过，**SGLang 1.0 发布追踪器 (#50045)** 正在积极推进以稳定性为核心的里程碑。预期关键变更包括：  
- 静默配置变更将被显式错误替代  
- `1.x` 系列正式兼容性策略  
- 从 `0.5.x` 升级可能需要代码调整（[升级说明](https://github.com/sgl-project/sglang/issues/50045)）  

> 🔗 [SGLang 1.0 追踪 #50045](https://github.com/sgl-project/sglang/issues/50045)

---

### **3. 新模型与硬件支持**  
- ✅ **SM120（RTX PRO Blackwell）**：通过 PR #53242 引入可选支持 **Hy4-flash 稀疏 MLA**，实现对 L40（SM89）及未来 Ada/Blackwell 显卡的高效推理。  
- ✅ **AMD ROCm**：持续优化 Hicache 内存管理（#47584），并在 `run-ci-amd-extra` 与 `run-ci-nv-extra` 中开展积极测试。  
- ✅ **扩散模型**：扩展对 **HunyuanVideo**（按 16 像素网格对齐，PR #53243）和 **Qwen-Image**（批处理 CFG 分支，PR #52121）的支持。  
- ✅ **量化**：现在 **MXFP4** 模型已正确填充 CUTLASS 缓冲区以完整处理 MoE 模块（#52877），解决了加载时的崩溃问题。  

> 🔗 [Ada 上的 Hy4-flash #53242](https://github.com/sgl-project/sglang/pull/53242)  
> 🔗 [HunyuanVideo 尺寸对齐 #53243](https://github.com/sgl-project/sglang/pull/53243)

---

### **4. 性能与优化**  
- 🚀 **PD 分离（SM120）**：PR #53245 通过仅扫描相关页块来优化分页消费解码中的候选评分，减少密集上下文下的无效计算。  
- ⚙️ **FP8 量化**：多项内核融合降低开销：  
  - SiLU + mul 与逐 token FP8 量化融合（#52029, #51842）→ 消除中间 BF16 张量写入  
  - 小规模 GEMM 在 SM120 上路由至 PyTorch（#51610）→ 避免低效的 CUTLASS 内核使用  
- 📈 **MoE 效率**：在 AMD 平台上，PR #51266 移除了 DP gather/sort 中的填充行 → 减少 MoE 层中 masked_fill 及拷贝开销。  
- 🔍 **分词器优化**：在 `_anchor_counts_per_item` 中采用二分查找，将 O(n²) 扫描降为 O(n log n)（#46697）。  

> 🔗 [候选评分优化 #53245](https://github.com/sgl-project/sglang/pull/53245)  
> 🔗 [SiLU+mul + FP8 融合 #52029](https://github.com/sgl-project/sglang/pull/52029)

---

### **5. 稳定性与回归问题**  
| 问题 | 严重性 | 状态 | 修复 PR？ | 备注 |
|------|----------|--------|--------|-------|
| [#51980](https://github.com/sgl-project/sglang/issues/51980) | 严重 | 开放 | ❌ | PD 分离错误重用 `bootstrap_room` → 返回错误输出但返回 HTTP 200 |
| [#53215](https://github.com/sgl-project/sglang/issues/53215) | 高 | 开放 | ❌ | FA3 导入在 `nvidia-cutlass-dsl>=4.8` 下失败，因错误保护过弱 |
| [#50887](https://github.com/sgl-project/sglang/issues/50887) | 高 | 开放 | ❌ | JIT 内核在 `torch==2.14.1+cu130` 下启动失败，报 `invalid resource handle`（cu126 下正常） |
| [#51944](https://github.com/sgl-project/sglang/pull/51944) | 中等 | 开放 | ✅ | Mamba 分块 Prefill 对齐修复（跟进 #51902） |
| [#51842](https://github.com/sgl-project/sglang/pull/51842) | 中等 | 开放 | ✅ | 添加融合 SiLU+mul FP8 内核 |
| [#52877](https://github.com/sgl-project/sglang/pull/52877) | 中等 | 开放 | ✅ | MXFP4 缓冲区填充修复加载崩溃 |

> ⚠️ **严重 CI 不稳定性**：#42752 报告在 `PR Test Base/Extra` 中反复出现的 CI 失败，累计达 **271 条评论**，严重影响 PR 验证速度。

---

### **6. 对应用开发者的意义**  
- ✅ **生产就绪**：随着 PD 分离在 TP/PP/CP/DCP 及推测解码中现已稳定，您可高效扩展大型模型（如 Qwen4Exp、DeepSeek-V4.1）。  
- ⚠️ **规避陷阱**：在 SM120 上使用 `--kv-cache-dtype nvfp4` 会导致解码吞吐下降约 29%（相比 fp8_e4m3，#36797）；除非必须，否则请使用 `fp8_e4m3`。  
- 🛠 **优化工作流**：若使用 **流式工具调用或推理解析器**，请注意在分块边界处的状态机缺陷（#31915, #35083）；确保缓冲区正确刷新。  
- 🧩 **新功能可用**：可利用 **推理努力提示**（#42915）实现更智能的 DP 路由，以及计划中的 **每请求计量轨道**（通过 #41332 实现）用于自托管计费。  
- 🔌 **硬件特定调优**：对于 **Blackwell（SM120）**，启用 `--dsa-prefill-backend hy4_flash`，并在 AMD 上设置 `SGLANG_HIP_DP_FUSED_PAD_GATHER=1` 以最大化效率。

> 📌 **实用建议**：通过 #42752 和 #17050 监控 CI 健康状况——解决不稳定的测试是保障可靠 CI/CD 流水线的关键。

---  
*生成时间：2026-11-26 | 来源：[sgl-project/sglang GitHub](https://github.com/sgl-project/sglang)*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-11-26**

---

### **1. Today's Highlights**  
The latest release, `b12752` (v1.1.0), marks a major milestone with enhanced support for Tencent Hy4 Flash models via the new `hy_v4_flash` DSA iSWA cache integration. This enables efficient inference on hybrid MoE architectures with sparse, sliding-window attention and routed experts. Concurrently, critical stability fixes were merged for Windows clean shutdown handling, SYCL backend correctness, and Metal graph compilation—improving reliability across platforms.

---

### **2. Releases & Breaking Changes**  
- **Version 1.1.0 released** (`b12752`) — Official bump to v1.1.0 with updated authors and internal refactoring. [GitHub Release](https://github.com/ggml-org/llama.cpp/releases/tag/v1.1.0)  
- **Breaking Change**: `llama-server` now enforces stricter validation for Hadamard-folded models when using `-sm tensor`, rejecting unsupported split modes to prevent runtime crashes. See: [#33080](https://github.com/ggml-org/llama.cpp/pull/33080).

---

### **3. New Model & Hardware Support**  
- **Tencent Hy4 Flash Models**: Full support added for `hy_v4_flash` variants (e.g., DeepSeek-V4.1-Flash) via DSA iSWA cache with sparse and sliding-window MLA layers. [PR #32960](https://github.com/ggml-org/llama.cpp/pull/32960)  
- **Youtu-Parsing-Omni**: Added support for multimodal input types (image, audio, interleaved video/audio) in `mtmd`. [PR #33078](https://github.com/ggml-org/llama.cpp/pull/33078)  
- **Inkling-2-Mini-DFlash2**: Draft model support added for speculative decoding with DFlash2. [PR #33073](https://github.com/ggml-org/llama.cpp/pull/33073)  
- **SYCL Backend**: Expanded MMQ support for Q4_0/Q4_1/Q5_0/Q5_1/Q8_0 quantizations after fixing scratch buffer zeroing. [PR #32961](https://github.com/ggml-org/llama.cpp/pull/32961)  
- **Intel Arc Pro B60/B70**: Vulkan performance improvements via tile clamping to avoid compute engine timeouts. [PR #33076](https://github.com/ggml-org/llama.cpp/pull/33076)

---

### **4. Performance & Optimization**  
- **Flash Attention + Indexed Bias (CUDA/HIP)**: PR #33063 introduces indexed bias support in Flash Attention, enabling better alignment with advanced prompting patterns.  
- **RDNA3.5 MMQ Optimization**: HIP kernel `mul_mat_q_few_wmma` improves few-row MMQ throughput on RDNA3.5 GPUs. [PR #32224](https://github.com/ggml-org/llama.cpp/pull/32224)  
- **Metal Graph Chunking**: Committing graphs in chunks via one command buffer thread reduces CPU overhead during large-scale inference. [PR #32947](https://github.com/ggml-org/llama.cpp/pull/32947)  
- **Vectorized `exp` for GDN**: `ggml_vec_exp_f32` vectorization improves KDA path performance by up to 1.3x. [PR #33077](https://github.com/ggml-org/llama.cpp/pull/33077)  
- **Vulkan MMQ Optimization**: Accumulate folding reduces performance gap between AMD shader compilers. [PR #32528](https://github.com/ggml-org/llama.cpp/pull/32528)

---

### **5. Stability & Regressions**  
- **Critical OOM on Gemma 4 (Checkpoint+MMProj)**: High RAM consumption leading to server OOM on Windows/Linux with CUDA/Vulkan. [Issue #21690](https://github.com/ggml-org/llama.cpp/issues/21690) *(Open, high severity)*  
- **Nondeterministic logprobs on SYCL MoE**: Identical requests yield different `logprobs` despite identical seeds. Request-level seeding does not fix this. [Issue #31206](https://github.com/ggml-org/llama.cpp/issues/31206) *(Open)*  
- **Intel Arc Pro B70 Vulkan Nondeterminism**: `KHR_coopmat` produces wrong results on every call due to feature mismatch. [Issue #31560](https://github.com/ggml-org/llama.cpp/issues/31560) *(Closed, fix pending)*  
- **Draft Decoding Slowness on Qwen3.5 Hybrid (CUDA)**: ~2.2–2.4× slowdown vs non-hybrid control. [Issue #32776](https://github.com/ggml-org/llama.cpp/issues/32776) *(Open)*  
- **V100 Prefill Regression**: Hybrid (GDN) model prefill throughput halved in v1.0 vs 0.4.1. [Issue #32810](https://github.com/ggml-org/llama.cpp/issues/32810) *(Open)*

---

### **6. What This Means for Application Developers**  
- **Deploying hybrid MoEs?** Use `hy_v4_flash` with `DSA iSWA cache` for optimal performance on Tencent’s DeepSeek-V4.1-Flash and similar models. Ensure you’re on v1.1.0 or later.  
- **Running on Intel Arc?** Avoid `KHR_coopmat` on B60/B70 unless patched; consider disabling it temporarily or use `--no-coopmat`.  
- **Using SYCL?** Enable `--seed` for deterministic outputs—note that current `logprobs` are still nondeterministic. Monitor PRs #32961 and #31206.  
- **Multi-GPU Inference?** The `inkling2_loop` proposal (#32718) hints at future optimizations for co-locating KV and recurrent state—watch for upcoming multi-GPU layer-splitting work.  
- **Building Agents?** Be cautious with `--load-mode auto` on large models (e.g., Gemma) under Vulkan—use `mmap` to avoid device loss/OOM. [Issue #27360](https://github.com/ggml-org/llama.cpp/issues/27360)  

> ✅ **Action Item**: Upgrade to v1.1.0 and test all critical paths with your model stack—especially MoE, hybrid attention, and SYCL backends.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-11-26**

---

### **1. Today's Highlights**  
The LiteLLM ecosystem continues to evolve with critical fixes for cost accounting, streaming reliability, and model compatibility—especially around Azure AI, Vertex AI Gemini, and OpenRouter. Key PRs today include a fix for `finish_reason: null` in streamed responses (PR #54623), removal of invalid Together model entries from the cost map (PR #54618), and enhanced budget enforcement in the Rust gateway (PR #54622). These changes improve accuracy in billing, stability during long-running streams, and security in multi-provider routing.

---

### **2. Releases & Breaking Changes**  
No new releases were published in the last 24 hours. However, two significant breaking changes are in flight:  
- **Cost Map Cleanup**: Invalid Together model entries (only served on dedicated endpoints) have been removed from the cost map via [PR #54618](https://github.com/BerriAI/litellm/pull/54618) and backported to LTS ([#54624](https://github.com/BerriAI/litellm/pull/54624)). Calls to these models will now fail gracefully instead of returning 400 errors due to missing pricing.  
- **Rust Gateway Budgeting**: The Rust gateway now checks budgets *before* rate limiting ([PR #54622](https://github.com/BerriAI/litellm/pull/54622)), preventing silent overuse when native calls bypass Python-side spend tracking.

---

### **3. New Model & Hardware Support**  
- **Fireworks Kimi K3.1 Pro Ultra-fast**: Added to the cost map in [PR #54627](https://github.com/BerriAI/litellm/pull/54627) following its public preview launch on Nov 26, 2026. This enables real-time cost tracking for high-throughput inference workloads.  
- **VolcEngine Ark Seedream**: Image generation and editing models added in [PR #54076](https://github.com/BerriAI/litellm/pull/54076), expanding support for Chinese cloud providers' multimodal capabilities.

---

### **4. Performance & Optimization**  
- **Lazy Loading of Cost Modules**: [PR #54344](https://github.com/BerriAI/litellm/pull/54344) introduces lazy loading of realtime and provider cost modules, reducing import time and memory footprint on startup—critical for serverless and edge deployments.  
- **Improved Streaming Chunk Consistency**: [PR #54623](https://github.com/BerriAI/litellm/pull/54623) ensures every streamed chat chunk includes `finish_reason: null`, fixing SDK-level parsing issues in Mistral’s Vibe and other clients that previously errored on missing fields.  
- **Reduced Guardrail Overhead**: [Issue #54435](https://github.com/BerriAI/litellm/issues/54435) highlights O(N³) performance degradation in guardrail logging; while not yet fixed, it signals a need for optimization in metadata-heavy request pipelines.

---

### **5. Stability & Regressions**  
Top stability concerns reported today:  
1. **Azure AI Context Window Exceeded Errors** ([#53716](https://github.com/BerriAI/litellm/issues/53716)): Despite correct model parameters, requests exceed context limits when routed through OpenWebUI. Likely due to incorrect prompt preprocessing or misconfigured `max_tokens`.  
2. **Gemini Cache Control Reordering** ([#47046](https://github.com/BerriAI/litellm/issues/47046)): Non-prefix `cache_control` blocks cause conversation reordering and system instruction loss—reported as closed but may recur under specific workflows.  
3. **Streamed Usage Loss in Watsonx** ([#46059](https://github.com/BerriAI/litellm/issues/46059)): Proxy reports incorrect token counts due to missed usage payloads; actual billed tokens far exceed proxy estimates. A fix is pending.  
4. **Import Crash on Cost Map Fetch Failure** ([#54369](https://github.com/BerriAI/litellm/issues/54369)): `import litellm` fails if the cost map fetch fails at import time (e.g., DNS error)—blocks startup in flaky environments.

---

### **6. What This Means for Application Developers**  
- **Upgrade to LTS 1.108.x** if using VolcEngine, Together, or custom video providers—[PR #54374](https://github.com/BerriAI/litellm/pull/54374) ensures proper key routing.  
- **Validate your streaming logic**: Ensure downstream clients handle `finish_reason: null` in intermediate chunks—this is now required for Mistral and similar models.  
- **Monitor budgeting in Rust gateway**: Native calls won’t trigger budget limits until [PR #54622](https://github.com/BerriAI/litellm/pull/54622) lands fully—until then, rely on Python-side enforcement.  
- **Avoid deprecated models**: Admin UI still lists retired models ([#29012](https://github.com/BerriAI/litellm/issues/29012)); use CLI or API to verify active model availability.  
- **Watch for guardrail bottlenecks**: If using complex Presidio or custom guardrails, expect latency spikes under heavy load due to inefficient metadata handling ([#54435](https://github.com/BerriAI/litellm/issues/54435)).

> 🔗 *For real-time updates, follow the [LiteLLM GitHub repo](https://github.com/BerriAI/litellm).*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-26**

---

### **1. Today's Highlights**  
Unsloth v0.1.925-beta introduces major performance improvements for **Inkling 2 Mini fine-tuning**, enabling up to **3.1x faster training** and **50% VRAM reduction** via LoRA/QLoRA, with support for tensor/pipeline/context parallelism across GPUs. The release also resolves critical stability issues in Studio’s model loading and GPU offloading workflows, while ongoing optimizations focus on kernel compilation efficiency and multi-GPU resource utilization.

---

### **2. Releases & Breaking Changes**  
- **v0.1.925-beta**: Released today with key fixes for Inkling 2 Mini fine-tuning performance and VRAM usage.  
  - Includes support for **tensor, pipeline, and context parallel training** across multiple GPUs (Kaggle T4x2).  
  - New: exportable GGUF and merged 16-bit models from QLoRA fine-tunes.  
  - [GitHub Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.925-beta)

---

### **3. New Model & Hardware Support**  
- **Inkling 2 Mini (1.8–3.1)**: Full support added for fine-tuning with LoRA/QLoRA; optimized for training on **Kaggle’s free 2x T4**.  
- **ROCm (AMD)**: Fixes for `gfx1200` (RX 9060 XT, RDNA4) now address `HIP error: illegal memory access` during QLoRA training ([#18403](https://github.com/unslothai/unsloth/issues/18403)).  
- **Windows x64 (FP8)**: Adds fallback to tensorwise FP8 when row-wise GEMM is missing in torch wheels ([#19665](https://github.com/unslothai/unsloth/pull/19665)).  
- **Apple Silicon (Metal)**: Issue persists for DiffusionGemma (`#6336`) — GPU offloading fails with garbled output.

---

### **4. Performance & Optimization**  
- **Inkling 2 Mini Training**: Up to **3.1x speedup** and **50% less VRAM** vs prior versions using LoRA/QLoRA.  
- **Kernel Launch Optimization**: On sm80+ GPUs, compiled blocks now launch kernels once per long run, reducing idle time by **11–14%** (Qwen3-4B QLoRA on L4 Colab) ([#19623](https://github.com/unslothai/unsloth/pull/19623)).  
- **Multi-GPU Efficiency**:  
  - FLUX.2 Klein steps now split across two cards by tokens ([#19691](https://github.com/unslothai/unsloth/pull/19691)).  
  - Krea 2 tensor parallelization now leverages second card when streaming capacity is available ([#19689](https://github.com/unslothai/unsloth/pull/19689)).  
- **FP8 Auto-Quant Priority**: On sm_103 (B300/GB300), FP8 is now prioritized over INT8 in auto-quant pipeline ([#19688](https://github.com/unslothai/unsloth/pull/19688)).

---

### **5. Stability & Regressions**  
| Severity | Issue | Status | Link |
|---------|------|--------|------|
| Critical | **Studio crashes after v0.1.923-beta**: Inkling 2 Mini inference drops from 40 → 12 tokens/s | Closed | [#19137](https://github.com/unslothai/unsloth/issues/19137) |
| High | **VRAM OOM on RX 7900 GRE (ROCm)**: QLoRA training fails due to memory exhaustion | Open | [#19275](https://github.com/unslothai/unsloth/issues/19275) |
| Medium | **Inkling-2-Mini: "Failed to process regex" (std::regex error_stack)** | Open | [#19376](https://github.com/unslothai/unsloth/issues/19376) |
| Low | **torch/pyarrow import segfaults in Studio virtual env (Linux)** | Open | [#19660](https://github.com/unslothai/unsloth/issues/19660) |

> ✅ *Fix PRs exist for regression in inkling inference and FP8 fallback.*

---

### **6. What This Means for Application Developers**  
- **Fine-tuning Workflows**: Use **v0.1.925-beta** to train Inkling 2 Mini models **faster and more efficiently**, especially on low-resource setups like Kaggle T4x2. Export directly to GGUF or merged 16-bit models.  
- **Multi-GPU Deployments**: Leverage **tensor/pipeline/context parallelism** for larger models — ensure your infrastructure has consistent GPU layout for checkpoint resumption ([#19685](https://github.com/unslothai/unsloth/pull/19685)).  
- **Model Export Caution**: Be aware that **FP8/FP4 exports may lose up to 93% of LoRA update norm** ([#19676](https://github.com/unslothai/unsloth/pull/19676)); use diagnostic logs to verify fidelity.  
- **Stability in Production**: Avoid v0.1.923-beta for Inkling inference; upgrade to **v0.1.925-beta** for stable performance. Monitor for ROCm-specific OOMs on newer AMD cards.  

> 📌 *For agent developers: Expect better tooling integration (e.g., RAG, voice isolation) as UI features evolve — watch for dedicated tabs and API enhancements.*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*