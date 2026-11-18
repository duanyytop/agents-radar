# AI 基础设施日报 2026-11-18

> 生成时间: 2026-11-18 03:49 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目 AI 基础设施生态报告 – 2026-11-18**

---

### **1. 生态概览**  
截至2026年末，AI 推理基础设施格局正迅速向**异构硬件支持**、**以智能体为中心的优化**以及**深度栈级专业化**演进。各项目不再仅以原始吞吐量为竞争核心——而是通过**多后端性能一致性**、**低延迟智能体工作流**和**安全可扩展的模型服务**实现差异化。**MCP（模型控制协议）集成**、**推测解码增强**以及**基于 Rust 的后端迁移**的兴起，标志着该生态系统已走向成熟：可靠性、安全性与开发者体验与速度同等重要。

---

### **2. 活动对比**

| 项目       | 近24小时开启的问题数 | 近24小时合并的PR数 | 发布状态         |
|------------|----------------------|--------------------|------------------|
| **vLLM**   | 9                    | 5                  | 无               |
| **SGLang** | 7                    | 6                  | v0.5.23 已发布（回归问题） |
| **llama.cpp** | 6                 | 6                  | 无发布；仅提交代码 |
| **Ollama** | 5                    | 3                  | 无               |
| **LiteLLM** | 4                   | 2                  | `v1.111.0-rc.1`（安全修复） |
| **Unsloth** | 8                  | 4                  | `v0.1.919-beta`（Beta功能） |

> ✅ *洞察*：SGLang 在开发活跃度上领先，而 LiteLLM 与 Unsloth 通过高影响力 RC 版本和 Beta 功能推动创新。vLLM 保持最高稳定性，未发布新版本或引入破坏性变更。

---

### **3. 模型支持竞赛**

| 新模型 / 架构             | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------------|------|--------|-----------|--------|---------|---------|
| **Qwen3.8-2.4T-A95B (ROCm)** | ✅ (gfx950/MI355X) | — | — | — | — | — |
| **Qwen3.8-Flash-Next (MXFP4)** | ✅ (gfx950) | — | — | — | — | — |
| **Muse Spark Open PTPC-FP8** | ✅ (gfx942/RDNA4) | — | — | — | — | — |
| **Kimi-K3.1 (Ascend/NPU)** | — | ✅ | — | — | — | — |
| **Mistral-Large-4 (1M-context)** | — | ✅ | — | — | — | — |
| **MiniMax-H3-Image (GGUF/FP8)** | — | — | — | — | — | ✅ |
| **Qwen3-TTS ICL/Reference Mode** | — | — | ✅ | — | — | — |
| **NVIDIA Nemotron 3.5 ASR Streaming** | ✅ | — | — | — | — | — |

> 🏆 **领先者**：**SGLang** 在**多架构模型支持**方面领先，尤其在**昇腾 NPU（Kimi-K3.1）** 和 **Mistral-Large-4** 上表现突出。**Unsloth** 在**专用智能体模型**（MiniMax-H3-Image）上处于领先地位，而 **vLLM** 在 Qwen 系列的 **AMD ROCm 优化**方面占据主导。

---

### **4. 性能前沿**

| 优化重点                | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------------|------|--------|-----------|--------|---------|---------|
| **KV 缓存与卸载**        | ✅✅（生命周期指标、请求级晋升） | ✅（MoE 的 CUDA 图） | ❌ | ✅（VRAM 账户修复） | ⚠️（Redis 副本超时） | ❌ |
| **MoE 与量化**           | ✅✅（FlashInfer CuTe-DSL，MXFP4） | ✅（DSPARK，DSA 稀疏注意力） | ✅（V100 的 MMQ） | — | — | ✅（LoRA 训练） |
| **批处理与调度**         | ✅✅（V1 调度器，队首重新入队） | ✅（束搜索加速） | ✅（少量行的 MMQ） | — | — | — |
| **分布式服务**           | ✅（DFlash 接受崩溃修复） | — | — | — | ✅（Rust 数据库迁移） | — |
| **内核级调优**           | ✅✅（Block-FP8 Triton GEMM，DeepGEMM 限幅） | ✅（分组 Triton，CUDA 图） | ✅（Fastdiv，conv2d 路径） | ❌（Vulkan 缺失） | — | — |

> 🔥 **热点**：**vLLM** 与 **SGLang** 在 **MoE 执行**、**KV 缓存生命周期控制**及**分布式调度**方面持续突破边界。**llama.cpp** 继续在**跨平台内核级优化**（CUDA、Vulkan、SYCL）上保持领先地位。**LiteLLM** 向 **基于 Rust 的认证系统**迁移，旨在实现长期可扩展性。

---

### **5. 层级定位**

| 项目       | 主要层级              | 次要角色                         | 核心差异化                                  |
|------------|------------------------|----------------------------------|---------------------------------------------|
| **vLLM**   | **推理引擎**           | 模型服务（通过 API 网关）        | 在 NVIDIA/AMD 上实现高吞吐、低延迟服务的行业标准 |
| **SGLang** | **多后端推理引擎**     | 智能体编排、推测解码             | 对 AMD、昇腾、英特尔 XPU 提供全栈支持；聚焦智能体流水线 |
| **llama.cpp** | **本地运行时 / 嵌入式引擎** | 跨平台推理（CPU/GPU）            | 通用可移植性；针对边缘与异构系统的优化内核 |
| **Ollama** | **本地模型网关 + 运行器** | 开发者 CLI、本地推理服务器       | 本地 AI 的简化用户体验；逐步拓展 NPU/英特尔支持 |
| **LiteLLM** | **LLM 网关 / 聚合器**   | 认证、计费、路由、缓存           | 基于 Rust 迁移的企级代理，兼顾性能与安全 |
| **Unsloth** | **智能体 SDK / 本地应用集成器** | 微调、UI、计算机使用（MCP）      | 首个实现**桌面应用集成**（Unity、Blender、Roblox）；以智能体为核心设计 |

> 📌 **战略清晰度**：  
> - **vLLM/SGLang** = 高性能推理引擎  
> - **llama.cpp** = 边缘/异构部署的通用运行时  
> - **Ollama** = 开发者友好的本地推理平台  
> - **LiteLLM** = 具备安全与可扩展性的生产级 LLM 网关  
> - **Unsloth** = 支持真实世界应用交互的原生智能体框架

---

### **6. 趋势信号**

1. **异构化已成为新常态**：所有项目均优先支持 **AMD ROCm**、**昇腾 NPU**、**英特尔 XPU** 和 **Apple MLX**——无单一厂商主导。这反映了企业对**无厂商锁定的 AI 加速**的需求。

2. **智能体工作负载驱动创新**：如 **MCP 集成（Unsloth）**、**DSPARK 推测解码（SGLang）** 以及 **工具调用修复（vLLM）** 等特性表明，**智能体推理**已成为主要用例，而非仅限于聊天机器人。

3. **安全与可观测性不可妥协**：LiteLLM 的 `salt_key_rotations`、vLLM 的 KV 卸载遥测、SGLang 的配置验证策略表明，**生产级稳定性**正在被内置于核心 API 中。

4. **Rust 正成为新的引擎层**：LiteLLM 的数据库迁移与 SGLang 的传输抽象表明，生态系统正从**以 Python 为主的技术栈**转向**高性能、内存安全的后端**——这对规模化至关重要。

5. **从边缘到云端的连续性日趋成熟**：如 **llama.cpp（Vulkan、SYCL）** 与 **Ollama（英特尔 NPU、Metal）** 等项目，实现了从移动设备到数据中心的**一致推理能力**。

> 💡 **开发者建议**：  
> - 高吞吐云部署优先选择 **vLLM**。  
> - 多架构智能体流水线选用 **SGLang**。  
> - 边缘/本地推理且依赖少，使用 **llama.cpp**。  
> - 在受监管环境中需要安全可扩展的 LLM 网关，采用 **LiteLLM**。  
> - 若需直接对接桌面应用（自动化、游戏 AI），利用 **Unsloth**。

---  
*报告数据源自 GitHub 活动（2026-11-18）。如需实时洞察，请关注各项目议题追踪器与发布渠道。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest – 2026-11-18

---

### **1. 今日亮点**  
vLLM 项目持续加速对下一代硬件和先进推理模式的支持，尤其在 **AMD Qwen3.8 与 Muse Spark 模型的 ROCm 后端优化** 方面取得显著进展，涵盖 gfx950/MI355X 与 gfx942/RDNA4 目标。关键 PR 包括修复批量 DeepGEMM 中 MoE SwiGLU 截断问题（解决严重的 logprob 不一致），以及改进 CPU offloading 生命周期指标。与此同时，Rust 前端正稳步推进功能对齐，当前其路线图已在 Issue #44280 中跟踪。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未报告新版本或破坏性变更。未观察到新的发布或 API/config 的破坏性更改。

---

### **3. 新模型与硬件支持**  
- ✅ **AMD ROCm 支持**：  
  - **Qwen3.8-2.4T-A95B** (`amd/Qwen3.8-2.4T-A95B-Quark-MXFP4`) — 针对 gfx950 / MI355X 的性能优化正在进行中，追踪议题 [#57149](https://github.com/vllm-project/vllm/issues/57149)。  
  - **Qwen3.8-Flash-Next** (`amd/Qwen3.8-Flash-Next-Quark-MXFP4`) — 针对 gfx950 上的 MXFP4 MoE + QuerySparse Attention 进行优化，议题 [#59575](https://github.com/vllm-project/vllm/issues/59575)。  
  - **Muse Spark Open PTPC-FP8** — gfx942/RDNA4 性能优化正在进行中，议题 [#64018](https://github.com/vllm-project/vllm/issues/64018)。  
- ✅ **新模型特性**：  
  - **NVIDIA Nemotron 3.5 ASR 流式传输** (`nemotron-3.5-asr-streaming-0.6b`) — 请求添加流式 ASR 支持，议题 [#47455](https://github.com/vllm-project/vllm/issues/47455)。  
  - **Exaone4 与 DeciLM** — 现已支持 EAGLE-3 辅助隐藏状态，用于推测解码，合并请求 PR #68289。  
- ✅ **后端扩展**：  
  - **Octave KV 缓存** 已通过原生 HIP 内核扩展至 RDNA4 GPU，合并请求 PR #67844。

---

### **4. 性能与优化**  
- 🔧 **MoE 与量化**：  
  - 修复批量 DeepGEMM 中缺失的 `SwiGLU clamp`（DeepSeek-V4-Flash），解决了 `deepep_low_latency` 模式下每 16K token 出现 **9 个严重 token log-probability 不一致** 的问题，合并请求 PR #68084。  
  - 新增 **FlashInfer CuTe-DSL 无量化 MoE 后端**，适用于 Hopper (SM90)，可通过 `--moe-backend flashinfer_cutedsl` 实现更快的非量化 MoE 执行，合并请求 PR #66749。  
- 📈 **内核与内存**：  
  - **Block-FP8 Triton GEMM** 现在使用 64 位行偏移，防止大规模场景下的越界内存访问，合并请求 PR #66200。  
  - **KV Offload 生命周期指标** 扩展：新增直方图指标 `vllm:kv_offload_cpu_chunk_idle_before_evict_seconds`，用于暴露缓存淘汰前的空闲时间，议题 #67909。  
- ⚙️ **调度器与流水线**：  
  - **请求级 KV 提升机制** 正在重构，旨在早期决定提升时机，减少过度承诺和生命周期禁用，议题 #66782。  
  - **V1 调度器**：提议通过队首重新接纳机制消除异步 KV 拉取后的 1.0–1.8 秒重排队延迟，议题 #62532。

---

### **5. 稳定性与回归问题**  
- ❌ **严重问题**：  
  - **DeepSeek-V4.1 Flash 在 SM120（Blackwell）上**：启用 `--enforce-eager` 时解码吞吐量极低；CUDA graphs 完全不可用 —— 需紧急修复，议题 [#56892](https://github.com/vllm-project/vllm/issues/56892)。  
  - **DFlash 接受率崩溃**，当张量并行 > 1 时（MiMo-V2.6-Flash-MOPD），阻碍高 TP 部署，议题 [#66387](https://github.com/vllm-project/vllm/issues/66387)。  
- ❌ **正确性缺陷**：  
  - **混合 Mamba/注意力前缀缓存** 在对齐模式检查点落在请求独占 token 时，会无声丢弃命中，议题 [#45238](https://github.com/vllm-project/vllm/issues/45238)。  
  - **工具调用使用特殊标记名称** 导致 gpt-oss 中出现 500 错误，因头部编码不当，议题 [#65770](https://github.com/vllm-project/vllm/issues/65770)，已在 PR #65771 修复。  
- ⚠️ **性能下降**：  
  - `--prefix-match-unit` 在 Triton/FLA 后端的混合模型（Qwen3.5-GDN）上，每请求增加约 30ms TTFT，议题 [#67674](https://github.com/vllm-project/vllm/issues/67674)。

---

### **6. 对应用开发者的启示**  
- **对于高吞吐量 AI 代理**：请密切关注 Blackwell（SM120）GPU 上 `--enforce-eager` 的行为——在 [#56892](https://github.com/vllm-project/vllm/issues/56892) 修复前，预计解码性能将下降。仅在必要时使用急切模式；可考虑使用 `--disable-cuda-graphs` 作为临时规避方案。  
- **对于使用 AMD ROCm 的开发者**：预计 Qwen3.8 与 Muse Spark 模型在 MI355X 与 RDNA4 GPU 上性能将更好——请关注 [#57149](https://github.com/vllm-project/vllm/issues/57149)、[#59575](https://github.com/vllm-project/vllm/issues/59575) 与 [#64018](https://github.com/vllm-project/vllm/issues/64018) 获取更新。  
- **对于工具调用密集型应用**：避免在基于 `gpt-oss` 的工作流中使用含特殊标记（如 `<|end|>`）的工具名——虽已修复，但旧版本仍可能受影响。  
- **对于生产部署**：在 Hopper GPU 上启用 `--moe-backend flashinfer_cutedsl` 可获得更快的 MoE 推理；监控如 `vllm:kv_offload_cpu_chunk_idle_before_evict_seconds` 等 KV offload 指标，以优化 CPU 分层策略。  

> ✅ *建议*：升级至最新 nightly 构建版本，以获取 MoE 修复、CUDA graph 稳定性提升及更优的 offload 诊断信息。在大规模扩展前，务必在多 TP 配置下测试核心工作流。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-11-18

---

### **今日亮点**  
SGLang 在多架构支持方面持续推进，重点在 AMD ROCm（MI355X）和 NPU（Ascend/Mooncake）集成上取得重大进展，尤其针对 Kimi-K3.1 与 Mistral-Large-4。关键稳定性修复解决了 CUDA 核心转储、FP16 解码中的 NaN 问题以及 macOS CPU 设备故障。SGLang 1.0 的路线图逐渐清晰，强调 API 稳定性与向后兼容性。

---

### **发布与破坏性变更**  
无。过去 24 小时内未报告新版本发布。然而，**SGLang 1.0** 已在 [#50045](https://github.com/sgl-project/sglang/issues/50045) 中正式追踪，标志着项目进入稳定阶段：静默配置变更将被显式错误替代，并将制定 1.x 系列的正式兼容性策略。从 v0.5.x 升级可能需要调整配置。

---

### **新模型与硬件支持**  
- ✅ **AMD ROCm (gfx950)**：为 MI355X 上的 `Qwen3.8-27B-Quark-AWQ-MXFP4` 与 `DeepSeek-V4.1-Flash` 提供全栈优化 ([#49324](https://github.com/sgl-project/sglang/issues/49324), [#49327](https://github.com/sgl-project/sglang/issues/49327))。  
- ✅ **NPU / Ascend**：新增对 **Kimi-K3.1** 的完整支持，包含 DSA 稀疏注意力路径 ([#48420](https://github.com/sgl-project/sglang/pull/48420))，涵盖混合 KDA 线性注意力与 MXFP4 MoE。  
- ✅ **Mooncake (Ascend/NPU)**：通过 PR [#46460](https://github.com/sgl-project/sglang/pull/46460) 完成传输层抽象，为未来引擎集成铺平道路。  
- ✅ **Intel XPU**：EPD 多模态编码路径现已支持 Intel XPU ([#47961](https://github.com/sgl-project/sglang/pull/47961))。  
- ✅ **Mistral-Large-4**：新增模型支持，原生支持 1M 上下文 YaRN、MLA+DSA 稀疏注意力，以及内置 DSPARK 草稿头 ([#47271](https://github.com/sgl-project/sglang/pull/47271))。

---

### **性能与优化**  
- 🚀 **AMD ROCm**：在 MI355X 上通过分组 Triton 内核优化 QSA 分数核，显著提升高并发下的解码吞吐量 ([#50702](https://github.com/sgl-project/sglang/pull/50702))。  
- ⚙️ **CUDA Graphs**：在 Blackwell 上为 FlashInfer CuTe DSL MoE 与 MegaMoE 模型启用预填充 CUDA Graph，降低端到端延迟 ([#50684](https://github.com/sgl-project/sglang/pull/50684))。  
- 🔥 **束搜索**：通过内核重构，在 SM120（RTX PRO 6000）上实现基于字典树约束的束搜索加速 ([#49429](https://github.com/sgl-project/sglang/pull/49429))。  
- 💡 **权重缓存**：新增 `vmm_fd` 传输方式作为基于 IPC 的权重共享占位符 ([#46953](https://github.com/sgl-project/sglang/pull/46953))，支持未来跨节点权重服务。

---

### **稳定性与回归问题**  
- 🔴 **严重崩溃**：当 `q*k` 乘积超过 65504 时，FP16 下 `decode_attention_fwd` 返回 `NaN` —— 影响 SM90（Hopper）上的 MHA 模型。已在 [#51095](https://github.com/sgl-project/sglang/issues/51095) 报告，修复待处理。  
- 🔴 **CUDA 核心转储风暴**：CI（`pr-test.yml`）自动收集的核心转储显示广泛不稳定性；[#26340](https://github.com/sgl-project/sglang/issues/26340) 中已有 380 条评论——根本原因可能存在于底层内核或内存管理。  
- 🔴 **解码回归**：从 v0.5.22 升级至 v0.5.23 后，H20-3e（SM90）上并发度为 12 时，**每步解码延迟增加 33–45%**，影响 DSPARK 试探性解码 ([#49336](https://github.com/sgl-project/sglang/issues/49336))。  
- 🟡 **macOS CPU 失败**：`--device cpu` 因 macOS 上 `lscpu` 运行时错误而失败 ([#50915](https://github.com/sgl-project/sglang/issues/50915))；本地开发需临时绕过。  
- 🟡 **试探性解码混淆**：非侵入式日志无法区分草稿模型与目标模型（两者均标记为 `TARGET_VERIFY`）——影响调试 ([#50087](https://github.com/sgl-project/sglang/issues/50087))。

---

### **对应用开发者的意义**  
- **预期多后端部署复杂性上升**：随着对 ROCm、NPU、Intel XPU 支持不断增强，请确保推理管道能处理后端特定行为（如内存布局、量化方式）。使用 `--dp-rank-policy least_tokens` ([#51147](https://github.com/sgl-project/sglang/pull/51147)) 可改善各 rank 间 KV 平衡。  
- **若在 Hopper 上使用 DSPARK，避免 v0.5.23**：33–45% 的延迟回归可能严重影响吞吐量——建议暂时锁定至 v0.5.22 直至修复。  
- **监控 FP16 中的 NaN 输出**：若在 Hopper 上运行 MHA 模型，请验证输入数据以避免 `q*k` 溢出。  
- **准备迎接 SGLang 1.0**：预计配置校验更严格，可能出现破坏性变更。立即审计代码库中已弃用的标志位——许多将在 [#51074](https://github.com/sgl-project/sglang/pull/51074) 中移除。  
- **利用新模型与硬件**：尝试在 AMD/NPU 上运行 `Mistral-Large-4` 与 `Kimi-K3.1`，适用于高吞吐、低延迟的代理工作负载，结合试探性解码实现高效推理。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 消息简报 – 2026-11-18**

---

### **1. 今日亮点**  
最新更新聚焦于 AMD GPU 性能调优，特别是 GCN 与 RDNA3 架构，包括对 HIP 中 `stream_k` 的改进以及 Vulkan 上 Flash Attention 的优化。新增对 Qwen3-TTS ICL/reference 模式的支持和 Kokoro TTS 集成，带来更先进的语音合成能力，同时在内核层面修复了 MoE 及量化推理路径中的关键正确性问题。

---

### **2. 发布与破坏性变更**  
今日未发布新版本。但以下变更值得关注：
- **`b12496` (HIP/GCN)**：经测试确认 CDNA 上启用 `stream_k` 无性能提升后，已在 AMD GCN GPU 上启用该功能——移除待办事项并清理代码。
- **`b12493`**：将 F32 CUDA 内核切换至使用隐式 GEMM conv2d 路径，显著提升大通道卷积性能（此前退化为缓慢的朴素直接卷积）。
- **`b12489`**：在服务器模式下，当同时启用 `grammar` 与 `ignore_eos` 时强制返回 HTTP 400 错误——防止采样过程中出现未定义行为。
- **`b12488`**：由于不稳定性，已禁用 Pascal GPU 上的量化 matvec 融合；可能影响旧版 NVIDIA 硬件性能。

🔗 [GitHub Commit b12496](https://github.com/ggml-org/llama.cpp/commit/b12496) | [Commit b12493](https://github.com/ggml-org/llama.cpp/commit/b12493) | [Commit b12489](https://github.com/ggml-org/llama.cpp/commit/b12489)

---

### **3. 新模型与硬件支持**  
- ✅ **Qwen3-TTS ICL/Reference Mode**：通过 `mtmd` 后端（PR #32438）实现完整支持，可生成上下文感知的文本转语音内容。
- ✅ **Kokoro TTS 集成**：新增 G2P 模板支持与 `tts_dict`，提升音素映射精度（PR #32413）。
- ✅ **OpenCL A7 DP4A 二进制内核**：为 Apple A7 GPU 新增针对 Q4_0、Q4_K、Q5_K、Q6_K 与 Q8_0 的优化二进制 GEMM 内核（PR #32510）。
- ✅ **AMD RDNA3 Vulkan 修复**：通过驱动兼容性绕过方案，在 Windows 上禁用 flip-direct Flash Attention 路径（PR #32415）。

🔗 [PR #32438](https://github.com/ggml-org/llama.cpp/pull/32438) | [PR #32413](https://github.com/ggml-org/llama.cpp/pull/32413) | [PR #32510](https://github.com/ggml-org/llama.cpp/pull/32510) | [PR #32415](https://github.com/ggml-org/llama.cpp/pull/32415)

---

### **4. 性能与优化**  
- **CUDA**：  
  - `few-row MMQ` 现支持 MUL_MAT_ID 分发（PR #32065），显著提升 DGX Spark 平台的小令牌吞吐量。  
  - 整行 pool_1d 中使用的 `block reductions` 提升内存聚合效率（PR #31855）。  
  - 对 conv2d patch 索引应用 fastdiv，使长还原性能最高提升 **1.6x**（PR #32492）。  
- **Vulkan**：  
  - 通过着色器调优，缩小 AMDVLK 与 RADV 驱动间 INT8 MMQ 性能差距（约 15% 提升）（PR #32395）。  
- **SYCL**：  
  - 优化分组 XMX GEMM，避免使用 SLM 缓存（PR #31428）——减少内存流量并提升带宽利用率。  
- **MoE**：  
  - PR #32504 在 V100 上引入 MMQ 使用，解决因张量核心仅支持 FP16 且不支持 int8 导致的已知性能下降问题。

🔗 [PR #32065](https://github.com/ggml-org/llama.cpp/pull/32065) | [PR #31855](https://github.com/ggml-org/llama.cpp/pull/31855) | [PR #32492](https://github.com/ggml-org/llama.cpp/pull/32492) | [PR #32395](https://github.com/ggml-org/llama.cpp/pull/32395) | [PR #31428](https://github.com/ggml-org/llama.cpp/pull/31428) | [PR #32504](https://github.com/ggml-org/llama.cpp/pull/32504)

---

### **5. 稳定性与回归问题**  
- 🔴 **严重**：`server: grammar + ignore_eos` 触发 400 错误（问题 #32377）——此前导致崩溃；现已在请求阶段正确拒绝。  
- 🔴 **GPU 崩溃**：Vulkan FA 预填充在 RDNA3/Windows 上因驱动着色器编译器缺陷引发崩溃（问题 #32353）；通过 PR #32415 修复。  
- 🔴 **内存泄漏**：双 Intel B70 SYCL 后端配合 `-sm tensor` 时报告（问题 #27845，29 条评论）；尚未确认。  
- 🟡 **非确定性 logprobs**：在 SYCL iGPU + MoE 模型上，即使设置了 seed 仍存在（问题 #31206）；正在调查中。  
- 🟡 **全部为 NaN logits**：在 Radeon 680M 上使用 Vulkan 时出现（问题 #31509）；临时通过禁用整数点积解决。  
- 🟡 **模型下载损坏**：HF 下载器缺乏路由感知，多配置文件同时更新同一模型时引发竞态条件（问题 #32104）。

🔗 [问题 #32377](https://github.com/ggml-org/llama.cpp/issues/32377) | [问题 #32353](https://github.com/ggml-org/llama.cpp/issues/32353) | [问题 #27845](https://github.com/ggml-org/llama.cpp/issues/27845) | [问题 #31206](https://github.com/ggml-org/llama.cpp/issues/31206) | [问题 #31509](https://github.com/ggml-org/llama.cpp/issues/31509) | [问题 #32104](https://github.com/ggml-org/llama.cpp/issues/32104)

---

### **6. 对应用开发者的启示**  
- **面向边缘/TTS 应用**：利用新增的 Qwen3-TTS 与 Kokoro 集成，构建低延迟、高保真语音代理——特别适用于实时转录或交互式助手场景。  
- **面向多 GPU 部署**：结合 `--n-cpu-moe` 与 CPU 卸载（PR #20596）及混合张量/层模式原型（PR #32508），高效扩展 MoE 推理能力。  
- **面向生产稳定性**：除非显式处理错误，否则避免同时启用 `grammar` 与 `ignore_eos` —— 服务端现强制返回 400 响应。  
- **面向 AMD 用户**：在 GCN GPU（通过 HIP）启用 `stream_k`，并在近期 Vulkan 补丁后预期获得更稳定的 RDNA3 系统表现。  
- **面向自定义工具开发者**：使用 `namespace` 与 `web_search` 工具类型需谨慎——它们在 Responses API 中会被静默丢弃（问题 #24295）。

> ✅ **建议**：若使用 AMD ROCm/HIP 或 Vulkan，尤其是 RDNA3 系统，请升级至 `b12496+`。关注 PR #32504 以获取未来 V100 MoE 性能改进。

🔗 [llama.app](https://llama.app) | [GitHub Attestations](https://github.com/ggml-org/llama.cpp/attestations)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-18**

---

### **1. 今日亮点**  
Ollama 项目持续强化其底层推理引擎，在内存管理、GPU 后端稳定性以及模型服务效率方面取得关键改进。主要进展包括修复了导致模型被错误驱逐及 GPU 不当拆分的 VRAM 账户错误问题（#19632），并增强了对 Metal（MLX）运行器的支持，实现优雅关闭与持久化对话缓存（#19744，#19745）。新社区集成凸显生态系统的日益普及，尤其在 RuneTranslate 和 AITerm 等生产力工具中的应用。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告新版本发布或破坏性变更。*

---

### **3. 新模型与硬件支持**  
- **Intel NPU（通过 OpenVINO）**：功能请求（#19535）强调用户对 AI PC 上 Intel Core Ultra NPU 支持的需求，指出当前即便存在 NPU 仍会回退至 CPU 运行。
- **Ascend NPU（CANN 后端）**：已提交提案（#19735），旨在启用 CANN 构建与设备发现，复用现有的 llama.cpp 支持。
- **AMD Radeon RX 6750 XT**：仍不支持；用户报告即使设置 `HSA_OVERRIDE_GFX_VERSION=gfx1031` 也出现初始化失败（#6003）。
- **Intel IGPUs 上的 Vulkan**：PR #19568 为符合条件的 Intel Ultra 系列 GPU（MTL+）默认启用 Vulkan，需满足驱动与内存要求。
- **新模型集成**：通过 #19734 将 PPLX Decider v1.3 加入 MLX 运行器，支持分块决策协议与基于图像的查询。

---

### **4. 性能与优化**  
- **VRAM 账户与 GPU 拆分**：#19632 中的关键修复解决了因内存跟踪不准确导致模型被错误驱逐或跨 GPU 拆分的问题，直接提升系统稳定性和吞吐量。
- **决策类模型的批处理大小**：PR #19743 调整了非因果模型（如 `d1-2B`）的批处理大小，避免误导性的“上下文长度”错误，使其与实际上下文限制对齐，而非固定 512 标记批次。
- **流式响应缓冲区增长**：PR #19736 引入按需扩展的流式缓冲机制，将初始内存分配从 8MB 降至仅满足小流所需，同时保留上限。
- **提示词处理速度**：问题 #19747 报告在使用 Vulkan 的 RX 5700 XT（RDNA1）上，提示词处理速度比上游 llama.cpp 慢约 13 倍——表明 Ollama 的 Vulkan 内核路径可能存在优化缺口。

---

### **5. 稳定性与回归问题**  
- **高严重性**：  
  - 使用 llama.cpp（v0.9.0-dev）加载自定义模型时出现 `tensor blk.0.ssm_beta.weight not found` 错误——完全阻塞推理过程（#19733）。  
  - `glm-ocr` 模型在到达 EOS 后无法终止生成——可能引发无限循环（#19738）。  
- **中等严重性**：  
  - `qwen 工具调用解析失败` 因 XML 语法错误（意外的文件末尾）——影响代理工作流（#14834）。  
  - `listen tcp 127.0.0.1:11434: bind: address already in use` ——常见端口冲突问题，需用户手动干预（#19712）。  
- **构建失败**：  
  - GCC 15 编译失败，原因是 `llama-mmap.h` 中缺少 `<cstdint>` ——严格标准合规性问题（#19714）。  
- **正在修复中**：  
  - #19743 解决 `d1-2B` 批处理大小回归问题。  
  - #19744 与 #19745 实现 MLX 运行器的优雅关闭与状态持久化。

---

### **6. 对应用开发者的意义**  
- **避免运行时崩溃**：在相关修复上线前，请谨慎使用 `glm-ocr` 与 `qwen` 工具调用；验证输出处理逻辑，确保 XML/JSON 结构一致性。
- **优化本地推理**：仅在经过测试的硬件（如 RDNA2+ AMD）上启用 `OLLAMA_VULKAN=1`；预计在旧版 RDNA1 显卡（如 RX 5700 XT）上性能下降。
- **内存感知设计**：利用改进的 MLX 运行器功能（#19744–#19745，#19677），减少重复提示处理，提升内存压力下的状态保留能力。
- **未来兼容性集成**：关注 Intel NPU 与 Ascend CANN 支持请求——这些代表了超越 NVIDIA/AMD 的异构 AI 加速战略转型。
- **CI 可靠性**：若参与贡献，请注意 GitHub Actions 工作流正在持续加固（#19741），以防止不稳定的构建。

> 🔗 [查看问题](https://github.com/ollama/ollama/issues) | [查看 PR](https://github.com/ollama/ollama/pulls)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

### **1. 今日亮点**  
LiteLLM 最新发布周期（v1.111.0-rc.1）引入了关键的安全性和稳定性改进，包括支持盐密钥轮换以防止调试日志泄露——解决了问题 #12448 中提出的高优先级生产环境问题。与此同时，基于 Rust 的数据库后端开发工作（PRs #52170, #52173）标志着架构的重大转变，旨在提升认证性能与可扩展性。

---

### **2. 发布与破坏性变更**  
- **`v1.111.0-rc.1`（发布候选版）**：新增实验性 `salt_key_rotations` 支持（对标现有的 `master_key_rotations`），防止凭据通过调试日志泄露。验证方式如下：  
  ```bash
  cosign verify \
    --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main \
    --certificate-oidc-issuer https://token.actions.githubusercontent.com \
    ghcr.io/berriai/litellm:v1.111.0-rc.1
  ```  
  [GitHub 发布页](https://github.com/BerriAI/litellm/releases/tag/v1.111.0-rc.1)

- **`v1.110.0`**：稳定性补丁；未发现破坏性变更。  
  [GitHub 发布页](https://github.com/BerriAI/litellm/releases/tag/v1.110.0)

- **LTS 更新**：`v1.108.11`（LTS）现已可用。使用 `ghcr.io/berriai/litellm:lts` 可自动升级至最新稳定补丁。  
  [GitHub 发布页](https://github.com/BerriAI/litellm/releases/tag/v1.108.11)

> ✅ **迁移提示**：依赖 OpenAPI 文档中 `config.yaml` 的用户请注意，该文件在近期版本中已移除（问题 #16623）；请改用 `/config` 接口。

---

### **3. 新模型与硬件支持**  
今日未宣布新的模型或硬件后端。但相关 PR 显示，正积极推进原生 **基于 Rust 的 Vertex AI / Anthropic `/v1/messages` 路由**（PR #52314），将通过卸载 Python 逻辑，显著提升 Google Cloud 和 Claude 模型用户的运行效率。

---

### **4. 性能与优化**  
- **Rust 数据库迁移（进行中）**：核心认证流程（用户、终端用户、预算）正从 Prisma 迁移至基于 SQLx 的 Rust 实现（PRs #52170, #52173）。预期收益：
  - 消除配置重载时的 O(n²) 同步开销（修复问题 #43922）。
  - 通过将重型认证检查移出 Python，减少事件循环阻塞。
- **流式处理效率**：对 `stream_chunk_builder`（问题 #50893）和 `fallback_stream_wrapper`（问题 #51936）的修复，降低了长时间流式请求中的内存膨胀与垃圾回收压力。
- **缓存键优化**：避免在缓存键计算中对大体积负载（如 base64 图像）执行昂贵的字符串化操作（问题 #51935）。

---

### **5. 稳定性与回归问题**  
今日报告的关键问题：

| 严重程度 | 问题 | 摘要 | 修复状态 |
|--------|------|--------|-----------|
| 🔴 高 | [#52284](https://github.com/BerriAI/litellm/issues/52284) | Redis 读副本超时导致数据库永久不可用；代理未能降级至写入节点 | ❌ 待处理 |
| 🔴 高 | [#52247](https://github.com/BerriAI/litellm/issues/52247) | 若数据库使用 `SQL_ASCII` 编码，代理启动时会崩溃 | ❌ 待处理 |
| 🟡 中 | [#50905](https://github.com/BerriAI/litellm/issues/50905) | 审计日志因 v1.108.0 后 `before_value` 被 JSON 字符串化而返回 500 错误 | ⚠️ PR #52425 中部分修复 |
| 🟡 中 | [#52362](https://github.com/BerriAI/litellm/issues/52362) | 流式请求被放弃后预算预留未释放 → 导致误报 `budget_exceeded` | ⚠️ 正在评审 |

> ⚠️ **需采取行动**：避免使用 `SQL_ASCII` 数据库；立即升级至 `UTF8`。

---

### **6. 对应用开发者的影响**  
- **安全性**：在 v1.111.0-rc.1 中启用 `salt_key_rotations`，防止主密钥/盐密钥在调试日志中泄露——对生产部署至关重要。
- **可靠性**：若使用带有 `SQL_ASCII` 的 PostgreSQL，应立即迁移至 `UTF8`，以避免启动崩溃。
- **可扩展性**：关注即将推出的基于 Rust 的认证变更——预计在高负载下实现更快的密钥验证与更低延迟。
- **流式处理**：对长时间运行的流式调用需保持警惕；确保客户端能优雅处理断连，避免预算漂移（问题 #52362）。
- **企业用户**：`enable_projects_ui` 开关已移除（PR #49391），意味着项目功能在管理界面中默认开启——请相应调整访问策略。

> 💡 **实用建议**：生产环境推荐使用 `ghcr.io/berriai/litellm:lts` 以保障稳定性，并自动更新至最新 LTS 补丁。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

### **Unsloth Digest — 2026-11-18**

#### **1. 今日亮点**  
最新发布的 `v0.1.919-beta` 版本引入了 **计算机使用（测试版）** 功能，通过 MCP 集成支持 Unity、Unreal Engine、Blender 和 Roblox——使本地模型可直接与桌面应用程序交互。本次更新还新增对 **MiniMax-H3-Image** 模型在 GGUF、FP8 与 INT8 格式下的支持，并提供完整的 LoRA 训练能力，同时对模型选择器进行了重新设计，优化了用户界面。与此同时，Studio 团队持续改进用户体验，新增了更完善的模型别名管理、上下文管理及聊天调度功能。

> 🔗 [GitHub v0.1.919-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.919-beta)

---

#### **2. 发布与破坏性变更**  
- **`v0.1.919-beta`**：通过 MCP 集成引入 **计算机使用（测试版）**（支持 Unity、Unreal、Blender、Roblox）。  
- **模型选择器重构**：全新界面，布局更清晰，视觉表现更优。  
- **API 提供商压缩策略丢失**：#18189 中报告的回归问题表明，API/提供者连接不再保留与本地模型相同的压缩策略（如整轮剔除 + 可搜索归档），可能影响长上下文处理性能。

> 🔗 [Issue #18189](https://github.com/unslothai/unsloth/issues/18189) | 🔗 [发布说明](https://github.com/unslothai/unsloth/releases/tag/v0.1.919-beta)

---

#### **3. 新模型与硬件支持**  
- **MiniMax-H3-Image**：现已支持 **GGUF**、**FP8** 与 **INT8** 量化格式，并具备完整的 **LoRA 微调** 能力。  
- **AMD ROCm（Linux/Windows）**：持续优化中；但用户反馈即使工作负载活跃，GPU 监控仍显示 `0.0% 利用率`（#18005）。  
- **Apple MLX（macOS 27.1）**：Gemma 4 26B MLX 等视觉模型在处理 `<unused6226>` token 时出现异常（#15473）。  
- **Wayland（Linux）**：由于窗口访问限制，计算机使用功能在 Wayland 会话中仍处于禁用状态（#18221）。

> 🔗 [Issue #15473](https://github.com/unslothai/unsloth/issues/15473) | 🔗 [Issue #18221](https://github.com/unslothai/unsloth/issues/18221) | 🔗 [PR #18245](https://github.com/unslothai/unsloth/pull/18245)

---

#### **4. 性能与优化**  
- **FLUX.3 Klein Base**：在 L4 上每步速度提升 **3.3%**，在 A100 上提升 **1.9%**，跨进程渲染结果现为比特级一致。  
- **KV 缓存管理**：PR #18231 指出 `mcp_images.py` 中存在硬性限制 `MAX_TOTAL_MODEL_IMAGES = 8`，导致约 8 次计算机使用调用后缓存失效——暗示潜在的可扩展性瓶颈。  
- **上下文滑块用户体验优化**：上下文滑块现已被移至独立行（#18235），以避免界面杂乱，并提升窄屏下的可用性。

> 🔗 [PR #18245](https://github.com/unslothai/unsloth/pull/18245) | 🔗 [Issue #18231](https://github.com/unslothai/unsloth/issues/18231) | 🔗 [PR #18235](https://github.com/unslothai/unsloth/pull/18235)

---

#### **5. 稳定性与回归问题**  
- **严重回归（UI 延迟）**：`v0.1.918-beta` 与 `v0.1.919-beta` 更新后，用户报告严重的延迟和模型加载失败（#18002、#18063）。有用户被迫切换至较小的 Gemma E2B 模型，而非其上次使用的 Gemma-4-26B-A4B。  
- **macOS 更新后崩溃**：模型加载失败，界面无响应（#18002）。  
- **OAuth 同意循环**：即使刷新令牌，重新连接 MCP 服务器时仍反复提示同意请求（#18164，已在 #18203 中修复）。  
- **GPU 监控错误报告**：在 Windows ROCm 平台上，尽管负载明显，GPU 利用率和温度仍显示为 `0.0` 和 `null`（#18005）。  
- **ROCm 上 VAE 解码出现 NaN**：在默认半精度数学模式下，图像生成因最终 VAE 解码阶段出现 NaN 值而失败（#18016）。

> 🔗 [Issue #18002](https://github.com/unslothai/unsloth/issues/18002) | 🔗 [Issue #18063](https://github.com/unslothai/unsloth/issues/18063) | 🔗 [PR #18203](https://github.com/unslothai/unsloth/pull/18203) | 🔗 [Issue #18005](https://github.com/unslothai/unsloth/issues/18005)

---

#### **6. 对应用开发者的启示**  
- **计算机使用现已进入测试版**：若构建涉及应用交互的智能体工作流（如游戏脚本、自动化任务），应集成新 MCP 框架——但需注意稳定性风险及平台限制（如 Wayland 不支持）。  
- **模型别名与启动配置**：利用 `model aliases` 为单个 GGUF 模型暴露多种启动配置（上下文长度、KV 缓存类型、推测解码等）（#17885、#18217）——适用于 A/B 测试或多模式推理场景。  
- **MCP OAuth 状态管理**：通过正确配置并缓存服务器的 OAuth 元数据端点，避免重复同意提示（#18203）。  
- **微调工作流优化**：建议申请 **自动设置 `max_seq_length`** 功能（#18236），以简化数据集预处理，降低人工负担。  
- **插件生态建设**：社区正推动建立一个 **原生插件/集成商店**（#10801），反映出对可扩展智能体工具的强烈需求——早期采用者应为未来的插件化架构做好准备。

> 🔗 [功能请求 #10801](https://github.com/unslothai/unsloth/issues/10801) | 🔗 [功能请求 #18236](https://github.com/unslothai/unsloth/issues/18236) | 🔗 [PR #18217](https://github.com/unslothai/unsloth/pull/18217)

--- 

*本摘要基于 GitHub 活动整理（2026-11-18）。获取实时更新，请关注 [unslothai/unsloth](https://github.com/unslothai/unsloth)。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*