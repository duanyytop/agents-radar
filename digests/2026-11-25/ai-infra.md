# AI 基础设施日报 2026-11-25

> 生成时间: 2026-11-25 05:36 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-11-25**

---

### **1. 生态概览**  
AI推理与服务领域正迅速成熟为分层、硬件感知的架构体系，各项目间呈现出显著的专业化分工。vLLM与SGLang在面向大规模智能体工作负载的高性能、可扩展推理引擎领域处于领先地位，而llama.cpp和Ollama则主导了轻量级、便携式及边缘友好型部署。LiteLLM作为关键的网关层，实现了多提供商抽象与成本感知路由，Unsloth则在高效微调与模型导出方面崭露头角。量化技术（Humming、GGUF）、分布式服务（推测解码、PD拆分）以及跨架构支持（ROCm、XPU、NPU）的融合，标志着向统一、生产就绪型基础设施的演进，兼顾性能、可移植性与开发者体验。

---

### **2. 活跃度对比**

| 项目       | 开放问题数 | 近24小时合并的PR | 近24小时发布数 | 发布状态 |
|------------|------------|------------------|----------------|----------|
| **vLLM**   | 1,487      | 12               | 0              | 无新发布；Marlin弃用进程进行中 |
| **SGLang** | 1,324      | 9                | 0              | v1.0追踪中；聚焦稳定性 |
| **llama.cpp** | 1,145   | 8                | 0              | 无发布；ARM SVE与Metal优化活跃中 |
| **Ollama** | 1,623      | 5                | 0              | v0.40.17版本存在严重内存退化问题 |
| **LiteLLM** | 943       | 10               | 2（RC + LTS） | `v1.112.0-rc.1` 和 `v1.108.17` 已发布 |
| **Unsloth** | 1,089    | 7                | 1（beta）      | `v0.1.924-beta` 聚焦Inkling 2 Mini |

> ✅ *洞察*：vLLM与Ollama在问题数量上最为活跃，反映出高用户参与度与稳定性挑战。LiteLLM以两次重要更新领先发布速度，凸显其作为关键代理层的战略地位。

---

### **3. 模型支持竞赛**

| 新模型 / 架构             | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------------|------|--------|-----------|--------|---------|---------|
| **Qwen3.8-Flash-Next**    | ✅   | ❌     | ❌        | ❌     | ❌      | ❌      |
| **Qwen4-Max**             | ✅   | ❌     | ❌        | ❌     | ❌      | ❌      |
| **OmniLingual ASR**       | ✅ (exp.) | ❌    | ❌        | ❌     | ❌      | ❌      |
| **Inkling-2-Mini (GGUF)** | ❌   | ❌     | ✅        | ✅ (失败) | ❌     | ✅ (微调) |
| **Tencent Hy4 Flash (220B)** | ❌ | ❌     | ✅        | ❌     | ✅      | ❌      |
| **Ascend NPU (EPLB迁移)**  | ❌   | ✅     | ❌        | ❌     | ❌      | ❌      |
| **AMD ROCm 7.13+ (RX 7900 GRE)** | ✅ (CI/opts) | ✅ | ❌ (OOM) | ❌ (OOM) | ❌ | ⚠️ (部分支持) |
| **Intel Arc Pro B70 (BMG G31)** | ❌ | ❌     | ⚠️ (非确定性) | ❌ | ❌ | ❌ |

> 🏆 **领先者**：**vLLM**与**llama.cpp**在前沿模型与硬件支持方面领先，尤其在Qwen系列与ARM SVE方面表现突出。**Unsloth**在**Inkling 2 Mini**的微调支持上领先，而**LiteLLM**则在云服务商集成（如GMI Cloud、Vertex AI）方面居于首位。

---

### **4. 性能前沿**

| 关注领域              | 主要项目                          | 核心创新                                                                 |
|-----------------------|-----------------------------------|--------------------------------------------------------------------------|
| **KV缓存管理**        | vLLM, SGLang                      | 可编程策略、会话感知提示、可组合保留机制、HiCache修复                   |
| **推测解码**          | vLLM, SGLang, llama.cpp           | DEP2/4/8 融合专家路由、DSpark正确性修复、top-k合并优化                   |
| **量化与内核**        | vLLM（Humming）、llama.cpp（SVE）、Unsloth | Humming统一内核、SVE点积融合、LoRA/QLoRA加速                             |
| **分布式服务**        | vLLM, SGLang                      | 预填充-解码拆分（PD）、TP > 1 推测解码、超节点共享                        |
| **内存效率**          | vLLM, SGLang, llama.cpp, Ollama   | 加载期间GPU暂存、RadixCache跳过、分块GDN重播、MLX内存泄漏修复            |

> 🔥 **热点**：**vLLM**与**SGLang**正趋同于面向智能体系统的高级KV缓存编排，而**llama.cpp**与**Unsloth**则在底层内核优化（SVE、MoE融合）方面持续突破边界。

---

### **5. 层级定位**

| 项目       | 层级定位                          | 核心差异化特性                                               |
|------------|-----------------------------------|--------------------------------------------------------------|
| **vLLM**   | 推理引擎（GPU原生）                | 高吞吐、低延迟服务，支持先进调度                              |
| **SGLang** | 推理引擎 + 智能体编排              | PD拆分、会话感知KV、层级缓存控制                             |
| **llama.cpp** | 本地运行时 / 边缘推理            | 可移植、CPU/GPU/NPU优化、依赖极小                           |
| **Ollama** | 本地运行时 + 开发者体验            | 一键部署、GUI优先，但大规模下稳定性欠佳                     |
| **LiteLLM** | LLM网关 / 代理                   | 多提供商路由、成本追踪、安全护栏、支持MCP工具集               |
| **Unsloth** | 微调框架 + 导出器                | 快速LoRA/QLoRA训练、GGUF导出、多GPU并行能力                  |

> 📊 **战略视角**：生态正分化：**工程师**使用vLLM/SGLang应对规模化需求，**开发者**依赖Ollama/llama.cpp追求简洁，**平台团队**则依靠LiteLLM实现抽象与成本管控。

---

### **6. 趋势信号**

1. **智能体工作负载正在驱动基础设施演进**：  
   - vLLM关于可编程KV缓存的RFC与SGLang的会话感知调度表明，**有状态、长周期的智能体系统**已成为核心设计约束——关注点从单标记吞吐转向上下文保留与复用。

2. **硬件多样性正在加速**：  
   - AMD ROCm、Intel XPU、Ascend NPU与Apple Silicon已不再是小众选择。vLLM、SGLang与llama.cpp等项目正积极优化这些后端，预示着向**跨架构可移植性**的全面迈进。

3. **量化技术正趋向新后端统一**：  
   - vLLM计划弃用Marlin并转向**Humming**，标志着向**统一、后端无关量化**的战略转型——碎片化正在被一致性取代。

4. **稳定性已成为竞争壁垒**：  
   - 尽管功能不断创新，但**Ollama的关键内存泄漏**、**SGLang的不稳定的CI**、**llama.cpp的非确定性输出**表明，可靠性尚未跟上功能迭代步伐。这将迫使团队优先保障鲁棒性而非追逐新颖性。

5. **微调正成为部署流水线的一部分**：  
   - Unsloth支持直接从训练导出模型至GGUF，凸显趋势：**微调不再孤立——它已融入从训练到推理的全生命周期**。

> ✅ **对开发者的可操作建议**：  
> - 对需要动态状态管理的高吞吐智能体系统，优先选择 **vLLM 或 SGLang**。  
> - 在ARM或边缘部署场景中，若可移植性是关键，选用 **llama.cpp**。  
> - 构建多提供商智能体且需严格成本控制时，选择 **LiteLLM**。  
> - 暂避 **Ollama v0.40.17**，尤其在Apple Silicon上，待内存修复落地。  
> - 关注 **vLLM中的Humming迁移** 与 **Unsloth的CUDA运行时缺陷**，评估生产可用性。

---  
*生成时间：2026-11-25 | 供技术决策者与基础设施工程师参考*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

### **vLLM Digest — 2026-11-25**

---

#### **1. 今日亮点**  
vLLM 项目正加速向下一代推理基础设施转型，**基于 Humming 的量化技术**在 NVIDIA Hopper 与 Blackwell 架构上取得重大进展，标志着从旧版 Marlin 内核的战略性退出。在**代理服务（agentic serving）** 方面也展现出强劲势头，新提出的 RFC 引入了可编程的 KV 缓存策略和会话感知提示，以实现多代理工作流中的智能状态管理。硬件层面，通过扩展 CI 测试和针对性优化，**AMD ROCm 支持**得到进一步强化。

---

#### **2. 发布与破坏性变更**  
*过去 24 小时内未发布新版本。*  
然而，[Issue #65560](https://github.com/vllm-project/vllm/issues/65560) 中的持续工作预示着未来可能的破坏性变更：**在所有 NVIDIA 架构（SM80+）上将默认量化内核由 Marlin 替换为 Humming**，涵盖 Hopper 与 Blackwell。这将要求依赖 Marlin 特定行为（如自定义调优或格式假设）的用户调整其部署流程。

---

#### **3. 新模型与硬件支持**  
- **模型支持**：  
  - 通过 [Issue #67922](https://github.com/vllm-project/vllm/issues/67922) 增加对 **Qwen3.8-Flash-Next** 与 **Qwen4-Max** 的支持，包含高达 3280 亿参数的大嵌入表，需通过 PLE 连接器实现分拆式嵌入服务。  
  - 通过 [Issue #28509](https://github.com/vllm-project/vllm/issues/28509) 实验性支持 **OmniLingual ASR**（支持 1600+ 种语言），解决官方推理流水线效率低下的问题。  

- **硬件与后端**：  
  - **ROCm (AMD)**：通过 [Issue #66699](https://github.com/vllm-project/vllm/issues/66699) 增强 CI 测试，引入每周一次的 Kimi 供应商验证器（KVV）回归检查。如 PR [#69581](https://github.com/vllm-project/vllm/pull/69581) 已重新启用 XPU KV 连接器测试。  
  - **Intel GPU (XPU)**：PR [#67891](https://github.com/vllm-project/vllm/pull/67891) 优化了 FP8 线性内核，优先在 Xe3p 上使用 W8A8，其他场景使用 W8A16。  
  - **NVIDIA**：扩展对 **Blackwell (SM120)** 的支持，跨模型家族完成 NVFP4 验证 ([Issue #66101](https://github.com/vllm-project/vllm/issues/66101))，并为 Qwen3 系列提供 B200/B300 专属 GEMM 计划 ([PR #69736](https://github.com/vllm-project/vllm/pull/69736))。

---

#### **4. 性能与优化**  
- **推测解码**：PR [#68366](https://github.com/vllm-project/vllm/pull/68366) 为 **DeepSeek-V4.1-Flash 在 B300** 上引入 DEP2/4/8 优化的融合专家通信，通过直接路由至调度缓冲区降低节点间开销。  
- **内存效率**：PR [#69803](https://github.com/vllm-project/vllm/pull/69803) 实现了**张量并行模型加载期间的 GPU 阶段化加载**，绕过 CPU 内存瓶颈——现已默认启用于 CUDA。  
- **内核级优化**：  
  - PR [#69736](https://github.com/vllm-project/vllm/pull/69736) 为 Qwen3 系列解码投影添加 **SM100/SM103 (B200/B300)** 的 skinny-GEMM 计划，提升低 token  throughput。  
  - PR [#69787](https://github.com/vllm-project/vllm/pull/69787) 将 FlashKDA 升级至 `a32181e`，修剪 132 个变体，提升代码生成效率。  
- **KV 缓存管理**：RFC 如 [Issue #66782](https://github.com/vllm-project/vllm/issues/66782) 与 [Issue #57103](https://github.com/vllm-project/vllm/issues/57103) 为 **请求级别 KV 提升决策** 和 **可组合保留策略** 奠定基础，支持代理系统中动态资源分配。

---

#### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 描述 | 修复状态 |
|---------|-------|-------------|------------|
| 高 | [Issue #66387](https://github.com/vllm-project/vllm/issues/66387) | TP > 1 时 DFlash 接受失败（MiMo-V2.6-Flash-MOPD）；持续负载下崩溃 | 开放 – 影响多节点推测解码 |
| 中 | [Issue #52540](https://github.com/vllm-project/vllm/issues/52540) | ModelOpt NVFP4 在 SM120 上使用 CUDA graphs 时崩溃/卡死 | 开放 – 影响 Blackwell 稳定性 |
| 中 | [Issue #52150](https://github.com/vllm-project/vllm/issues/52150) | GLM-5.2-FP8 在 GPU 空闲后输出垃圾数据；CUDA graph 冷重播损坏预填充 | 开放 – 仅限 ROCm |
| 低 | [Issue #69137](https://github.com/vllm-project/vllm/issues/69137) | KV 传输调度器无条件释放块 → 请求取消后断言崩溃 | 开放 – 影响卸载可靠性 |

---

#### **6. 对应用开发者的启示**  
- **代理类工作负载**：开始设计时采用 **可编程的 KV 缓存策略** ([RFC #57103](https://github.com/vllm-project/vllm/issues/57103), [RFC #52113](https://github.com/vllm-project/vllm/issues/52113)) 与 **会话感知提示**，避免前缀缓存抖动，提升复用率。  
- **多模型服务**：使用 **按模型内核预热** ([PR #69567](https://github.com/vllm-project/vllm/pull/69567)) 与 **GPU 阶段化模型加载** ([PR #69803](https://github.com/vllm-project/vllm/pull/69803))，减少启动延迟，提升共宿模型时的 GPU 利用率。  
- **跨架构可移植性**：预计不久将获得更强的 **ROCm 与 Intel GPU 支持**——请使用开启 AMD CI 的 nightly 构建测试部署 ([Issue #66699](https://github.com/vllm-project/vllm/issues/66699))。  
- **量化迁移**：为 **Marlin 退场** 做准备 ([Issue #65560](https://github.com/vllm-project/vllm/issues/65560))；升级前验证您的量化模型（INT4/FP8/MXFP*）是否兼容 Humming 的统一后端。  

> ✅ *建议*：在生产上线前，密切关注 `vllm` 发布说明与 GitHub 问题，跟踪 **Humming 迁移**、**KV 卸载优化** 以及 **推测解码稳定性** 相关更新。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-11-25**

---

### **1. 今日亮点**  
SGLang 生态系统持续成熟，重点聚焦大规模推理部署的稳定性与可扩展性。关键进展包括：**预填充-解码分离（PD Disaggregation）** 正逐步成为默认生产模式，**KV 缓存编排与会话感知调度** 的工作持续推进，以及对 **CUDA/ROCm 运行时可靠性** 和 **CI 不稳定问题** 的关键修复。值得注意的是，新提交引入了 **在 Ascend NPU 上异步专家迁移**，支持推理过程中更平滑的模型更新。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未发布新版本。但 **SGLang 1.0 已正式进入追踪状态**（#50045），标志着向稳定性与向后兼容性保障的转变。路线图强调：  
- 加强配置验证（例如，将静默配置变更替换为显式错误）  
- 明确 `1.x` 系列的兼容性策略  
- 从 `0.5.x` 升级可能需要代码变更 —— 参见 [升级说明](https://github.com/sgl-project/sglang/issues/50045#upgrade-notes)

---

### **3. 新模型与硬件支持**  
- **Ascend NPU**：通过 HCCL P2P 实现异步 EPLB 权重迁移（`PR #50784`），支持无阻塞推理下的动态专家更新。  
- **AMD ROCm**：持续优化 DSA 索引器处理（`PR #46822`），并通过 PARD2 支持目标对齐的推测解码（`PR #51465`）。  
- **Intel Xeon CPU**：实现 `sglang-cpu` 安装的自动检测（`PR #53029`），并完成 Gemma 4 的注意力/前馈/MoE 内核融合（`PR #53022`），提升 CPU 推理就绪度。  
- **扩散模型**：增强 Wan 流水线中 UMT5 文本编码器的 BF16 加载（`PR #52655`），以及支持可中断 CUDA 图的离线 Hy-Nomas 去噪（`PR #52918`）。

---

### **4. 性能与优化**  
- **内存效率**：当 `page_size > 1` 时，`RadixCache.match_prefix` 现在跳过不必要的页对齐缓冲区拷贝（`PR #53027`），减少冗余内存流量。  
- **启动延迟**：通过懒加载 PyNccl、共享 DiT 拷贝、提前访问对端和保留 NVML，多 GPU 服务器启动时间显著降低（`PR #51966`），加速达到健康状态。  
- **吞吐量**：`DSA DCP top-k 合并` 现支持 `--dcp-size 2` 与 `4`（K3 解码），避免性能下降的回退路径（`PR #53024`）。  
- **推测解码**：修复了分布式环境下 DSpark 中 TP>1 时的 RoPE 头数量不匹配问题（`PR #53025`），确保正确性。

---

### **5. 稳定性与回归问题**  
今日报告高严重性问题：  
1. **CUDA 核心转储追踪 (#26340)** – 388 条评论；来自 CI 运行的自动收集崩溃。影响多个后端及等级。尚未修复；需根因分析。  
2. **不稳定的 CI 基础设施 (#42752)** – 233 条评论；NVIDIA `PR Test Base/Extra` 层反复失败。影响 PR 审查速度。临时解决方案：跳过 HF token（`PR #53028`）。  
3. **HiCache + 混合 SSM/Mamba 崩溃 (#40926)** – 已关闭但关键：`cudaHostRegister` 失败导致整个实例终止，因错误处理不当。`0.5.19` 的修复不完整。  
4. **负值 `max-running-requests` 静默截断为 1 (#52483)** – 该缺陷导致无法正确限流；暂无修复。

---

### **6. 对应用开发者的启示**  
- **谨慎使用 `--enable-hierarchical-cache --hicache-storage-backend dynamic`** —— 已知会导致混合 SSM/Mamba 模型崩溃（参见 #40926）。  
- **预计 SGLang 1.0 将实施更严格的配置校验** —— 避免依赖静默默认值；尽早验证配置。  
- **充分利用新 KV 缓存功能**，如 **会话感知编排**（#45189）和 **超节点级共享**（#43098），适用于需要跨会话保持上下文的智能体系统。  
- **若参与贡献或使用夜间构建版本，请关注 CI 稳定性** —— 不稳定测试正在影响 PR 周转效率。  
- **对于高并发负载**，建议调整 `SGLANG_SCHEDULER_DECREASE_PREFILL_IDLE` 与 `SGLANG_PREFILL_DELAYER_MAX_DELAY_PASSES`（详见 #50447），可在长上下文任务上将 TPOT 降低高达 30%。

---

🔗 *完整问题追踪*：[sgl-project/sglang Issues](https://github.com/sgl-project/sglang/issues) | [Pull Requests](https://github.com/sgl-project/sglang/pulls)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp 每日简报 – 2026-11-25**

---

### **1. 今日亮点**  
`llama.cpp` 最新进展聚焦于多个后端的关键性能与稳定性提升，尤其针对 ARM（SVE）、CUDA、Vulkan 及 Metal。核心更新包括：为 Q5_0/Q5_1 优化的 SVE 向量点积内核、Apple Silicon GPU 上改进的 top-k 选择逻辑，以及对推测解码和 logprobs 中确定性行为的修复——这些对基于 Agent 的推理流水线至关重要。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未发布新的标签版本。但多项 PR 引入了重要变更：
- **`b12711`**：为不支持 dotprod 的 ARMv8.0 CPU 重新打包内核（Q4_0/Q8_0），提升与旧版 ARM 设备的兼容性。
- **`b12709`**：通过 PR #30867 添加 SVE 优化的 `q5_0/q5_1` 点积内核——显著提升在 ARM64 服务器上的高吞吐推理性能。
- **`b12706`**：重构 Metal 的 bitonic top-k 路径，当 `ncols > 128` 时改用基数排序，显著改善 M5/M2 Ultra 芯片上的性能。
- **`b12703`**：在 CUDA 上融合 RMS_NORM + MUL + MROPE/IMROPE 并调优块大小——加速使用 RoPE 扩展模型的预填充阶段。

> 🔗 [PR #30867](https://github.com/ggml-org/llama.cpp/pull/30867) | [PR #32500](https://github.com/ggml-org/llama.cpp/pull/32500)

---

### **3. 新模型与硬件支持**  
- **ARM SVE 支持**：完整添加对 Q5_0/Q5_1 量化点积的 SVE 加速（通过 `ggml_vec_dot_q5_0_q8_0`, `q5_1_q8_1`）——适用于即将推出的服务器级 ARM64 系统（如 AWS Graviton3+）。
- **Intel Arc Pro B70 (BMG G31)**：持续调查 `KHR_coopmat` 协作矩阵问题；现已确认在特定配置下会产生非确定性结果（参见 Issue #31560）。
- **Vulkan**：新增分块 GDN 重放支持（PR #32721），在 AMD RDNA4 硬件上实现长上下文生成时更高效的内存复用。
- **新模型支持**：  
  - 通过 DSA iSWA 缓存新增腾讯 Hy4 Flash（220B，12B 激活）（PR #32960）。  
  - Inkling 2 Mini 现在在 `mix()` 与 `control()` 中使用优化的加权求和（PR #32948）。

> 🔗 [PR #32960](https://github.com/ggml-org/llama.cpp/pull/32960) | [PR #32721](https://github.com/ggml-org/llama.cpp/pull/32721)

---

### **4. 性能与优化**  
- **ARM (SVE)**：由于向量化内核融合，Q5_0/Q5_1 点积操作最高获得 **~35% 加速**（PR #30867）。
- **Metal (Apple Silicon)**：当 `ncols > 128` 时，用基数排序替代 bitonic top-k，使 M5/M2 Ultra 上短行解码吞吐量提升 **~1.8 倍**。
- **CUDA**：  
  - 融合 `RMS_NORM + MUL + MROPE/IMROPE` 并采用最优块大小（`ncols <= 256` 时为 64 线程）——减少内核启动次数，降低预填充延迟。  
  - 通过 PR #32444 改进大批次（>65k token）下的 `ADD_ID` 处理（修复待定）。
- **Vulkan**：分块 GDN 重放减少内存碎片化，在高上下文负载下提升持续解码吞吐量。

> 🔗 [PR #30867](https://github.com/ggml-org/llama.cpp/pull/30867) | [PR #32500](https://github.com/ggml-org/llama.cpp/pull/32500)

---

### **5. 稳定性与回归问题**  
今日报告多个关键稳定性问题：

| 严重性 | 问题 | 概述 | 修复状态 |
|--------|------|--------|------------|
| ⚠️ 高 | [#31560](https://github.com/ggml-org/llama.cpp/issues/31560) | Intel Arc Pro B70（Mesa 26.2.5）启用 `KHR_coopmat` 时输出非确定性 | ❌ 未解决 |
| ⚠️ 高 | [#32918](https://github.com/ggml-org/llama.cpp/issues/32918) | `convert_hf_to_gguf.py` 误计张量数量（Qwen3.8-27B → 770，预期 866） | ❌ 未解决 |
| ⚠️ 中 | [#31206](https://github.com/ggml-org/llama.cpp/issues/31206) | SYCL MoE 模型在 `/v1/completions` 中 `logprobs` 非确定性，尽管设置了种子 | ❌ 未解决 |
| ⚠️ 中 | [#30301](https://github.com/ggml-org/llama.cpp/issues/30301) | Intel Arc Pro B60 上 `rms_norm_f32_sycl` 报错 `UR_RESULT_ERROR_UNSUPPORTED_FEATURE` | ❌ 未解决 |
| ⚠️ 低 | [#32444](https://github.com/ggml-org/llama.cpp/issues/32444) | CUDA/HIP 上 `ADD_ID` 在超过 65535 个 token 时崩溃 | ✅ 修复 PR 已提交 (#32983) |

> 🔗 [Issue #31560](https://github.com/ggml-org/llama.cpp/issues/31560) | [Issue #32918](https://github.com/ggml-org/llama.cpp/issues/32918)

---

### **6. 对应用开发者的意义**  
- **Agent 框架**：新增 `--ui-agent` 标志（PR #33004），支持构建纯浏览器工具型 Agent——非常适合注重隐私与低延迟的 LLM 应用。
- **多标记预测（MTP）**：公共 C API 已公开暴露（PR #27788），可直接集成至 Rust、Python 与 JavaScript 绑定。
- **模型服务**：近期修复（如 PR #32942, #32855）后，推测解码与提示缓存的一致性将得到改善。
- **硬件选型建议**：ARM SVE 优化使 `llama.cpp` 成为 ARM64 边缘/云部署的有力候选。Intel Arc 用户应暂时禁用 `KHR_coopmat`，直至 #31560 解决。
- **未来兼容性**：谨慎使用 `--split-mode tensor`——量化 KV 缓存支持仍被禁用（Issue #23567），目前需依赖全浮点缓存。

> 🔗 [PR #33004](https://github.com/ggml-org/llama.cpp/pull/33004) | [PR #27788](https://github.com/ggml-org/llama.cpp/pull/27788)

---  
*简报生成时间：2026-11-25 | 来源：[github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-25**

---

### **1. 今日亮点**  
在 Apple Silicon（MLX）和 NVIDIA DGX Spark 上，高上下文模型出现了严重的内存与稳定性问题，包括 `inkling-2-mini` 的 OOM 崩溃以及 MLX 运行器的内存无限制增长。在 macOS M4 Pro 上，v0.40.17 版本报告了重大性能下降（针对 Qwen 3.8 27B），同时 VRAM 统计不准确和 goroutine 泄漏问题持续影响系统可靠性。目前正通过多个 PR 修复模型加载、流式处理逻辑及 GPU 内存管理相关问题。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新发布。*  
然而，**v0.40.17** 正受到重点关注，原因包括：
- 在 macOS M4 Pro 上性能严重下降（针对 Qwen 3.8 27B）——[Issue #19866](https://github.com/ollama/ollama/issues/19866)
- MLX 运行器存在无限制内存增长（每条不同提示约增加 0.6 GiB）——[Issue #19891](https://github.com/ollama/ollama/issues/19891)
- 保存的历史记录导致内存溢出，超出物理内存容量——[Issue #19886](https://github.com/ollama/ollama/issues/19886)

> ⚠️ **迁移提醒**：在 macOS M4 Pro 上使用大上下文模型的用户应考虑回滚至 v0.40.16，直至修复落地。

---

### **3. 新模型与硬件支持**  
- **Inkling-2-Mini (GGUF)**：通过 `unsloth/Inkling-2-Mini-GGUF` 添加支持，但因缺少张量维度（`blk.24.attn_q.weight`）导致模型无法加载——[Issue #19888](https://github.com/ollama/ollama/issues/19888)
- **Olmo3 工具调用解析修复**：修正工具参数中 `<` 被错误转义为 `\u003c` 的问题——[PR #19878](https://github.com/ollama/ollama/pull/19878)
- **Intel IGPU Vulkan 支持**：已启用 Intel Ultra Series 1+ GPU（MTL+）的默认 Vulkan 后端，要求内存 ≥16GB——[PR #19568](https://github.com/ollama/ollama/pull/19568)
- **MLX 运行器优化**：采用 Metal split attention kernels 优化短历史处理——[PR #19881](https://github.com/ollama/ollama/pull/19881)

---

### **4. 性能与优化**  
- **MLX 运行器**：  
  - 通过 Metal split attention kernels，短历史（<1K tokens）处理速度显著提升——[PR #19881](https://github.com/ollama/ollama/pull/19881)  
  - 因前缀缓存快照未被驱逐，每条唯一提示导致内存增长约 0.6 GiB——[Issue #19891](https://github.com/ollama/ollama/issues/19891)  
  - 在 64GB Mac 上，历史记录增长超过物理内存（23 GB → 70 GB，13 分钟内）——[Issue #19886](https://github.com/ollama/ollama/issues/19886)  

- **VRAM 统计**：  
  - `ollama ps` 显示的 VRAM 使用量与实际 `rocm-smi` 数据不符——[Issue #17251](https://github.com/ollama/ollama/issues/17251)  
  - 修复进行中：[PR #19632](https://github.com/ollama/ollama/pull/19632) 解决多个影响模型驱逐与 GPU 分割的 VRAM 统计漏洞。

- **流式处理与 goroutine**：  
  - 客户端断开时，流式处理器会泄漏 goroutine 及运行器信号量槽位——[Issue #17131](https://github.com/ollama/ollama/issues/17131)  
  - 修复已合并：[PR #17881](https://github.com/ollama/ollama/pull/17881) 实现断开连接时的正确清理。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 修复 PR |
|---------|------|--------|--------|
| 🔴 严重 | `inkling-2-mini` 在 DGX Spark 上崩溃（OOM + 高 CPU）——[Issue #19879](https://github.com/ollama/ollama/issues/19879) | 打开 | 无 |
| 🔴 严重 | MLX 运行器内存失控增长（约 0.6 GiB/提示）——[Issue #19891](https://github.com/ollama/ollama/issues/19891) | 打开 | [PR #19891](https://github.com/ollama/ollama/pull/19891)（正在审查） |
| 🔴 严重 | MLX 历史记录超出物理内存（23→70 GB，13 分钟内）——[Issue #19886](https://github.com/ollama/ollama/issues/19886) | 打开 | [PR #19886](https://github.com/ollama/ollama/pull/19886)（正在审查） |
| 🟡 高 | VRAM 报告错误（`ollama ps` vs `rocm-smi`）——[Issue #17251](https://github.com/ollama/ollama/issues/17251) | 打开 | [PR #19632](https://github.com/ollama/ollama/pull/19632) |
| 🟡 中等 | 图像标记构建使用 O(N²) 字符串操作——[Issue #19885](https://github.com/ollama/ollama/issues/19885) | 打开 | [PR #19885](https://github.com/ollama/ollama/pull/19885)（正在审查） |

---

### **6. 对应用开发者的启示**  
- **避免在 macOS M4 Pro 上使用 v0.40.17 与大上下文模型**（如 Qwen 3.8 27B）。谨慎使用 `OLLAMA_KEEP_ALIVE=-1` —— 内存泄漏可能导致系统不稳定。
- **在 Apple Silicon（MLX）或高内存系统上部署时，密切监控内存使用情况**；若未启用缓存驱逐机制，使用多样化提示将引发不可控增长。
- **验证工具调用输出**——尤其是 Olmo3 与 Gemma 4——因存在 JSON 转义错误（如 `<` → `\u003c`）。建议使用最新构建版本，或手动应用补丁 [PR #19878](https://github.com/ollama/ollama/pull/19878)。
- **若构建需确定性、低延迟响应的智能体，全局启用 `OLLAMA_NO_THINK=true`**——[PR #17739](https://github.com/ollama/ollama/pull/17739)。
- **使用 `GET /api/status` 接口暴露检测到的硬件信息**（GPU/CPU、内存），以增强可观测性——[Issue #19880](https://github.com/ollama/ollama/issues/19880)，[PR #19880](https://github.com/ollama/ollama/pull/19880)。

> ✅ **最佳实践**：在高端硬件上进行生产推理时，显式使用 `--gpu`，并定期对比 `ollama ps` 输出与 `nvidia-smi` 或 `rocm-smi` 结果。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# **LiteLLM 简报 – 2026-11-25**

---

### **1. 今日亮点**  
LiteLLM 项目持续快速演进，重点聚焦于稳定性、计费准确性以及代理行为的增强——尤其在流式响应、安全护栏处理和预算控制方面。`v1.108.17`（LTS）和 `v1.112.0-rc.1` 版本已合并多项关键修复，包括对被拦截流式响应的正确计费（`PR #54238`）以及 Responses API 中 `previous_response_id` 解析逻辑的改进（`PR #53768`）。这些更新确保了更可靠的支出追踪，并提升了与代理工作流的兼容性。

---

### **2. 发布与破坏性变更**  
- **`v1.112.0-rc.1`**：发布候选版本，显著改进了网关路由与认证逻辑。主要变更包括提前预留预算（`PR #54354`）以及在 `responses` 流程中更严格的输入验证。  
  🔗 [GitHub 发布页面](https://github.com/BerriAI/litellm/releases/tag/v1.112.0-rc.1)  
  ✅ 验证签名：  
  ```bash
  cosign verify \
    --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main \
    --certificate-oidc-issuer https://token.actions.githubusercontent.com \
    ghcr.io/berriai/litellm:v1.112.0-rc.1
  ```

- **`v1.108.17`（LTS）**：补丁版本，修复多个影响生产环境稳定性的回归问题，尤其涉及 MCP 工具集（`#47856`）、模型降级清理（`#37670`）以及 Azure AI Foundry 模型错误的成本报告（`#53787`）。  
  🔗 [GitHub 发布页面](https://github.com/BerriAI/litellm/releases/tag/v1.108.17)  
  📌 使用 `ghcr.io/berriai/litellm:lts` 以确保长期支持版的稳定性。

> ⚠️ **迁移提示**：若使用 `v1.108.x` + `mcp/toolset` 或 `responses` API，建议立即升级至 `v1.108.17`，以避免静默数据丢失和成本计算偏差。

---

### **3. 新模型与硬件支持**  
- **新增 GMI 云模型至成本映射表**：  
  - `gmi/tencent/hy4-flash` — 支持高吞吐推理且延迟极低（输入：$7e-8/token，输出：$2.81e-7/token）。  
  🔗 [PR #53484](https://github.com/BerriAI/litellm/pull/53484)

- **Meta Muse 模型在 Vertex AI（LTS）上的原生支持**：通过 `lts/1.108.x` 分支实现，可通过 Google Cloud 使用 Meta 最新的多模态模型。  
  🔗 [PR #53388](https://github.com/BerriAI/litellm/pull/53388)

- **Prisma v2.5/v3.0 实时语音转录（实验性功能）**：通过 LiteLLM 网关集成 Prisma 模型，支持实时音频转录。  
  🔗 [PR #53828](https://github.com/BerriAI/litellm/pull/53828)

---

### **4. 性能与优化**  
- **流式响应计费修复**：此前被拦截的流式响应要么被忽略，要么被错误计为成功。现在每个被拦截的流仅记录一次失败，并准确反映上游服务的令牌成本。  
  🔗 [PR #54238](https://github.com/BerriAI/litellm/pull/54238)

- **思考过程中的早期 `message_start` 发送**：流式 `/v1/messages` 请求现在在重试期间也会立即发出 `message_start`，在长周期思考场景下可将感知延迟降低高达 ~90%。  
  🔗 [PR #54319](https://github.com/BerriAI/litellm/pull/54319)

- **Redis 连接泄漏修复**：启用 RPM/TPM 限制后，同步 `Router.completion()` 调用不再无限打开新的 Redis 连接。  
  🔗 [PR #48589](https://github.com/BerriAI/litellm/pull/48589)

---

### **5. 稳定性与回归问题**  
| 问题 | 严重性 | 状态 | 修复 PR | 影响 |
|------|----------|--------|--------|--------|
| `tools/list` 在旧协议客户端上阻塞 18–50 秒（`#50065`） | 高 | 开放 | 无 | 影响 Open WebUI 用户；导致代理工作流超时 |
| `azure_ai/Microsoft-Decision-1.1` 缺少美区/欧区定价（`#53787`） | 中 | 开放 | 无 | 区域部署成本报告偏低 |
| `gemini/image_request` 返回空 200 而非错误（`#29125`） | 中 | 开放 | 待定 | 图像生成流水线中存在静默失败风险 |
| `Ollama.get_runtime_model_info` 忽略 `api_base`（`#37041`） | 高 | 已关闭 | 已修复 | 每次调用造成 8 秒连接超时；远程 Ollama 部署关键问题 |

> 💡 **关键修复已合并**：`#54238`（流式响应计费）和 `#54354`（预算预留）现已可在 `v1.112.0-rc.1` 中使用。

---

### **6. 对应用开发者的意义**  
- **若已在生产环境使用，请升级至 `v1.108.17`（LTS）**——尤其是使用 MCP 工具集、`responses` 或 Azure AI 时。该补丁修复了多个静默的数据完整性问题。
- **启用 `strict_stream_completion`**（通过配置）以尽早发现截断的 SSE 流——防止代理链中出现静默数据丢失。
- **使用 `ghcr.io/berriai/litellm:lts`** 以确保跨环境部署的一致性和稳定性。
- **密切监控支出日志**——新修复确保即使请求被拒绝或拦截（如 Presidio 安全护栏），也能准确归因成本。
- **对于自定义 OAuth2 提供商**，请关注 **Issue #12367**——未来版本可能考虑支持。

👉 **最佳实践**：始终使用 `cosign` 验证 Docker 镜像，并除非测试 RC 功能，否则部署应固定在 `lts` 版本。

---  
*简报生成时间：2026-11-25 | 来源：[GitHub – BerriAI/litellm](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# **Unsloth Digest – 2026-11-25**

---

### **1. 今日亮点**  
Unsloth v0.1.924-beta 为 **Inkling 2 Mini (1.8–3.1x)** 的微调带来了显著性能提升，通过 LoRA/QLoRA 实现 **50% 的显存降低** 和最高 **3.1 倍的训练加速**，并支持跨 GPU 的张量、流水线和上下文并行。本次发布还引入了 **原生 GGUF 导出** 与 **合并的 16 位模型导出**，进一步扩展部署灵活性。与此同时，团队正持续优化多 GPU 训练基础设施，新版本正在开发中，将支持 DDP/FSDP2/TP/PP/CP/EP 后端。

---

### **2. 发布与重大变更**  
- **v0.1.924-beta**:  
  - ✅ **Inkling 2 Mini 微调加速**：使用 LoRA/QLoRA 时，速度最高提升 3.1 倍，显存使用减少 50%。  
  - ✅ **多 GPU 并行支持**：训练时支持跨 GPU 的张量、流水线和上下文并行。  
  - ✅ **GGUF 与 16 位模型导出**：微调后的 Inkling 模型现在可导出为 GGUF 格式或合并为 16 位格式。  
  - 📌 *注意：分布式训练配置请使用 `UNSLOTH_PARALLEL` 或 `torchrun`。*  
  [GitHub Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.924-beta)

---

### **3. 新模型与硬件支持**  
- **新增支持模型**:  
  - ✅ **Inkling 2 Mini (1.8–3.1x)**：v0.1.924-beta 版本已全面支持微调与推理。  
  - ✅ **Ling-3.2-air (多模态)**：通过 #19298 提交请求；目前仍在评估中。  
  - ⚠️ **Gemma 4**：报告存在工具参数渲染问题 (#18847)；尚未完全支持。  

- **硬件与后端更新**:  
  - ✅ **ROCm 7.13.99004 (AMD Radeon RX 7900 GRE)**：部分支持已确认，但内存映射错误仍存在 (#12248, #19340)。  
  - ✅ **NVIDIA RTX 4070 / Arc 140V XPU (Vulkan)**：报告出现 OOM 与正则表达式错误 (#19376, #19239)；暂无官方修复。  
  - ❌ **Ryzen 8700G + Radeon 780M**：尽管支持 ROCm，统一内存加载仍失败 (#18001, #19309)。  
  - 🔧 **Strata 及其他引擎**：请求原生集成 (#18895)，当前未实现。

---

### **4. 性能与优化**  
- **微调速度**:  
  - Inkling 2 Mini 训练速度现已提升至 **3.1 倍**，显存占用降低 **50%**，相比旧版本。  
  - 在 Kaggle 免费的 2x T4 实例上可高效训练，且支持完整并行化。  
- **推理优化**:  
  - LTX-2.5 现可在 **6 GiB 显卡** 上渲染 **768x512 视频片段**（此前因显存不足而崩溃），得益于内存优化 PR #19377。  
  - 去噪阶段定价与 VAE 编码器停靠机制使峰值显存使用量降低约 25%。  
- **内存效率**:  
  - PR #19397 优化了 GGUF 查找表处理逻辑，减少模型加载期间冗余的 Hugging Face API 调用。  
  - PR #19395 仅对变更的工具输出进行重渲染，提升了 UI 响应速度。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 描述 | 状态 | PR/链接 |
|---------|------|-------------|--------|--------|
| ⚠️ 高 | **显存溢出：Inkling 2 Mini** (#19275) | 在 AMD RX 7900 GRE 上使用 ROCm 7.13.99004 时崩溃 | 开放 | [Issue #19275](https://github.com/unslothai/unsloth/issues/19275) |
| ⚠️ 高 | **便携版 llama.cpp 缺少 CUDA 运行时** (#19341) | 预编译的 `cuda13-portable` 在 CPU 上静默运行，无 CUDA 回退机制 | 开放 | [Issue #19341](https://github.com/unslothai/unsloth/issues/19341) |
| ⚠️ 中 | **Windows 显存泄漏（驱动器 C 损失）** (#14487) | 每会话泄漏 200–400 MB；无清理机制 | 开放 | [Issue #14487](https://github.com/unslothai/unsloth/issues/14487) |
| ⚠️ 中 | **Inkling-2-Mini 正则表达式处理失败** (#19376) | RTX 4070 上出现 `std::regex error_stack` 错误 | 开放 | [Issue #19376](https://github.com/unslothai/unsloth/issues/19376) |
| ⚠️ 低 | **聊天横幅空白** (#19346) | 桌面应用启动后界面空白 | 开放 | [Issue #19346](https://github.com/unslothai/unsloth/issues/19346) |

> 🔥 **重要提示**：**GPU 显存泄漏** 与 **便携构建中缺失 CUDA 运行时** 对生产环境部署构成高风险。

---

### **6. 对应用开发者的意义**  
- **高效微调**：利用 v0.1.924-beta 中 Inkling 2 Mini 的改进，在极小硬件开销下快速训练小型模型——非常适合边缘或云上智能体。  
- **设计多 GPU 架构**：扩展训练时，请结合 `UNSLOTH_PARALLEL` 与 `torchrun` 使用以支持 DDP/FSDP2/TP/PP/CP/EP（PR #19378）。  
- **谨慎处理模型导出**：导出微调模型至 GGUF 时，需验证量化兼容性及目标 GPU 后端（ROCm/CUDA）。  
- **避免不稳定路径**：若需使用 CUDA，切勿依赖 `cuda13-portable` 构建；应改用官方 PyTorch 发行版。  
- **监控显存泄漏**：如在 Windows 或 AMD 平台使用，预期会出现磁盘占用增加及潜在崩溃，因内存泄漏尚未解决。  
- **规划未来 UI 升级**：聊天文件菜单 (#19140) 将在性能修复后恢复（PR #19416），因此请勿基于当前不稳定的版本进行开发。

> ✅ **最佳实践**：生产工作负载应锁定稳定版本，并尽早于目标硬件上测试。持续关注问题追踪器中关于 AMD/ROCm 与 CUDA 运行时的回归问题。

---  
*摘要生成时间：2026-11-25 | 来源：[unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*