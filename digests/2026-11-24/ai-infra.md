# AI 基础设施日报 2026-11-24

> 生成时间: 2026-11-24 06:20 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

### **1. 生态系统概览**  
2026年末，人工智能基础设施领域呈现出高性能推理引擎、轻量级本地运行时与统一网关之间的快速融合趋势——这一趋势由对低延迟、可扩展且成本高效的跨硬件部署需求所驱动。vLLM 和 SGLang 在分布式服务与推测解码方面持续突破边界，而 llama.cpp 与 Ollama 则在边缘计算及 Apple Silicon 优化上占据主导地位。LiteLLM 作为多提供商互操作性的事实标准网关地位日益稳固，Unsloth 则凭借激进的内核级优化，在微调与实时推理方面加速推进。整个生态系统正愈发由跨架构支持、量化技术革新以及对代理原生工作流的关注所定义。

---

### **2. 活动对比**

| 项目       | 开放问题（高/严重） | 最近7天合并的PR | 最近7天发布 | 状态 |
|------------|----------------------|------------------|--------------|------|
| **vLLM**   | 12（4个严重）        | 8                | 无           | 活跃开发，稳定夜间构建 |
| **SGLang** | 13（3个严重）        | 10               | 无           | v1.0前稳定化阶段 |
| **llama.cpp** | 15（7个高）         | 6                | 无           | 旧版GPU上存在高不稳定 |
| **Ollama** | 10（5个高）          | 5                | v0.40.18-rc0 | 近期发布，存在回归风险 |
| **LiteLLM** | 9（3个严重）         | 7                | v1.110.3 / v1.109.4 / v1.108.16 | 安全重点更新 |
| **Unsloth** | 14（4个严重）        | 6                | v0.1.923-beta | 测评版，性能有取舍 |

> ✅ *vLLM 和 SGLang 在PR提交速度上领先；Ollama 与 LiteLLM 更注重发布稳定性与安全加固。*

---

### **3. 模型支持竞赛**

| 新模型 / 架构         | 支持项目                      | 备注 |
|------------------------|-------------------------------|------|
| **Qwen3.8-Flash-Next** | vLLM（ROCm gfx950），SGLang    | vLLM 凭借经验证的 ROCm 性能内核领先 |
| **Hy4 & Hy4-Flash（FP8）** | vLLM（ROCm gfx950）         | 首次在 NVIDIA 以外实现完整支持 |
| **Kimi-K3.1（DFlash）** | SGLang（CUDA + Ascend NPU）   | 唯一支持跨平台推测解码的项目 |
| **SenseNova Loop**     | llama.cpp（PR #32588）         | 官方作者支持，该领域首例 |
| **Inkling 2 Mini（GGUF）** | Ollama（通过 llama.cpp b12651），Unsloth（v0.1.923-beta） | Unsloth 在速度提升上领先（1.9倍）；Ollama 在集成方面占优 |
| **Gemma 4 多模态**     | SGLang（可中断预填充 CUDA 图） | SGLang 实现图像+文本吞吐能力 |
| **FastWan / Qwen-Image-Flash** | Unsloth（GGUF）          | 多模态翻译流水线的早期布局者 |

> 🏆 **胜出者**：**SGLang** —— 整体模型支持覆盖最佳，尤其在推测解码与跨后端兼容性方面表现突出。  
> 🥈 **亚军**：**vLLM** —— 在下一代硬件的 ROCm 与 MoE 优化方面实力最强。

---

### **4. 性能前沿**

| 优化方向              | 领先项目                              | 关键进展 |
|-----------------------|---------------------------------------|----------|
| **KV缓存与内存效率** | Ollama（MLX），SGLang（HiCache），vLLM（paged-MQA） | Ollama 的 KV 缓存缺陷（仅支持16位）是主要瓶颈；SGLang 优化了逐出逻辑 |
| **推测解码**          | vLLM（Humming 内核），SGLang（DFlash） | vLLM 正以 **Humming** 取代 Marlin，以支持更广泛架构 |
| **内核级融合**        | SGLang（RMSNorm 融合 QKV），vLLM（MoE all-reduce 融合），Unsloth（INT8 attention） | SGLang：ROCm 上 RMSNorm 从 8.6μs 降至 1.9μs |
| **量化智能**          | llama.cpp（自动最优类型选择），Unsloth（多量化 GGUF） | llama.cpp 侧重文件大小；Unsloth 支持 A/B 测试 |
| **分布式服务**        | vLLM（TP=8 MoE 融合），SGLang（异步流水线，PD 分离） | vLLM 在张量并行效率上领先 |
| **边缘/本地运行时速度** | Unsloth（Inkling 2 Mini：快1.9倍），Ollama（Metal 内核） | Unsloth 在消费级 GPU 性能上全面领先 |

> 🔥 **顶尖表现者**：**SGLang** —— 具备最先进的异步与分离式流水线设计。  
> ⚡ **速度冠军**：**Unsloth** —— 在主流可用 GPU 上实现最高原始推理提升。

---

### **5. 层级定位**

| 项目       | 主要层级                 | 角色摘要 |
|------------|--------------------------|----------|
| **vLLM**   | **推理引擎（服务器规模）** | 高吞吐、多GPU、MoE 优化服务；面向数据中心集群 |
| **SGLang** | **推理引擎 + 网关**       | 全栈引擎，支持异步流水线、多后端及新兴 API 网关功能 |
| **llama.cpp** | **本地运行时（边缘/设备）** | 轻量、跨平台，适用于移动、嵌入式及 CPU/GPU 混合部署 |
| **Ollama** | **本地运行时 + CLI 网关** | 对开发者友好的 llama.cpp 包装器；强苹果硅与 Windows 支持 |
| **LiteLLM** | **API 网关 + 代理层**     | 多提供商抽象层，支持成本控制、日志记录与身份验证 |
| **Unsloth** | **微调 + 推理加速器**      | 专精于训练（GRPO/AsyncGRPO）与通过优化内核实现推理加速 |

> 💡 **战略差异化**：  
> - **vLLM/SGLang**：构建大规模推理的未来。  
> - **llama.cpp/Ollama**：赋能边缘与开发者优先场景。  
> - **LiteLLM**：实现企业级编排能力。  
> - **Unsloth**：弥合训练与推理性能鸿沟。

---

### **6. 趋势信号**

#### **新兴行业趋势（基于2026-11-24活动）：**
1. **硬件多样化已成为主流**  
   ROCm、AMD NPU、Intel XPU、Apple MLX 与 TPU 已不再是实验性技术——项目现已提供经验证的支持，常配备专用内核。**ROCm gfx950（MI355X）** 与 **AMD NPU（Lemonade）** 成为关键竞争战场。

2. **推测解码正超越 NVIDIA 限制**  
   SGLang 与 vLLM 已在 CUDA 与 Ascend 后端实现 DFlash。从 Marlin 转向 **Humming**（vLLM）标志着向架构感知、可移植的推测解码演进。

3. **代理工作流要求深度集成**  
   **前缀缓存**、**结构化输出保留**、**工具模式保真度** 与 **KV缓存感知** 等特性已成核心要素——非可选项。此类功能的回归（如 Ollama 的 16 位 KV 缓存）可能导致代理流水线崩溃。

4. **安全与可信性不可妥协**  
   LiteLLM 采用 GitHub OIDC 实现 **免密共签验证**，反映行业向可验证、可复现发布转变的趋势——对生产环境代理尤为重要。

5. **量化不再只是压缩**  
   从 llama.cpp 的自动最优类型选择，到 Unsloth 的多量化 GGUF 支持，量化正演变为动态、上下文感知的优化策略。

---

### **应用开发者可行动建议**
- ✅ **优先选择 SGLang 或 vLLM** 用于大规模、多GPU 推理与推测解码场景。
- ✅ **使用 Unsloth** 在消费级 GPU 上构建实时代理——其对 Inkling 2 Mini 的 1.9 倍提速具有颠覆性意义。
- ✅ **借助 LiteLLM** 实现安全、可审计、多提供商的 API，具备成本控制能力。
- ⚠️ **避免在 Apple Silicon 上使用 Ollama v0.40.18+**，直至 KV 缓存问题修复。
- ⚠️ **不要在 V100/MI300X 上部署 llama.cpp v1.0-dev**——推荐使用 v0.9.0-dev 以确保稳定。
- 🔍 **密切监控回归问题**：多个项目仍存在影响生产负载的关键开放问题——尤其在老旧硬件与混合 GPU 系统上。

> 🎯 **结论**：基础设施栈正在迅速成熟——但可靠性仍取决于谨慎的版本选择与主动监控。请根据您的 **硬件目标**、**延迟 SLA** 与 **代理复杂度** 进行选型。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-11-24**

---

### **1. 今日亮点**  
vLLM 项目持续加速推进对下一代硬件及先进推理模式的全面支持。关键进展包括：大力推动用更灵活、更具架构感知能力的 **Humming 量化内核** 替代 Marlin，覆盖所有 NVIDIA GPU；以及针对 Qwen3.8-Flash-Next 的 **ROCm gfx950/MI355X 性能优化** 正在积极进行中。此外，Rust 前端已接近默认启用，关键修复已解决构建稳定性与缓存失效问题。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新版本发布。*  
然而，**PR #69383** 引入了一项关键变更：将前端和安装时环境变量从 `compile_factors` 中排除，防止在切换 Python 与 Rust 前端时导致 `torch.compile` 缓存不必要的失效，显著提升了开发工作流效率。  
🔗 [PR #69383](https://github.com/vllm-project/vllm/pull/69383)

---

### **3. 新模型与硬件支持**  
- **ROCm gfx950 (MI355X)**：已完整启用 **Hy4 与 Hy4-Flash 模型**（`tencent/Hy4-FP8`, `tencent/Hy4-flash-FP8`），支持 DFly 推测解码，并通过配方验证。  
  🔗 [PR #68839](https://github.com/vllm-project/vllm/pull/68839)  
- **Intel GPU (XPU)**：通过单适配器预填充批次的密集 GEMM 回退机制，显著提升 LoRA 性能；FP8 线性内核现已正确处理 N-D 输入展平。  
  🔗 [PR #66752](https://github.com/vllm-project/vllm/pull/66752), [PR #68308](https://github.com/vllm-project/vllm/pull/68308)  
- **TPU**：初步支持 **Gemma4 抑制令牌缓存**，并提升稳定性。  
  🔗 [PR #66525](https://github.com/vllm-project/vllm/pull/66525)  

---

### **4. 性能与优化**  
- **MoE 优化**：使用 `reduce_commutative` 融合 LatentMoE TP all-reduce，可在 8×H200（TP8）上实现最高 **+5.74% 输出标记吞吐量** 和 **–3.42% TPOT**。  
  🔗 [PR #68469](https://github.com/vllm-project/vllm/pull/68469)  
- **Whisper 解码器**：在音频接入时重放 CUDA 图，避免冗余图捕获，降低解码延迟。  
  🔗 [PR #69552](https://github.com/vllm-project/vllm/pull/69552)  
- **Qwen4Exp**：新增 SM100 TP=2 与 TP=8 的瘦型 GEMM 计划，消除 B200 上 BF16 投影对 cuBLAS 的依赖。  
  🔗 [PR #69529](https://github.com/vllm-project/vllm/pull/69529)  
- **ROCm**：为 gfx950 新增分页 MQA logits 内核，支持 DSA 索引器 MTP 验证行——专为推测解码性能提升而设计。  
  🔗 [PR #68596](https://github.com/vllm-project/vllm/pull/68596)  

---

### **5. 稳定性与回归问题**  
- **严重崩溃（CUDA MPS + Blackwell）**：在 RTX PRO 6000 Blackwell 上，使用 Qwen3.6-27B-FP8 + LoRA 时，于 CUDA MPS 下执行图捕获期间出现非法内存访问（Xid 31）。  
  🔗 [Issue #67488](https://github.com/vllm-project/vllm/issues/67488)  
- **CPU KV 卸载崩溃**：因 `cuMemcpyBatchAsync` 失败，即使仅有一个有效描述符，仍导致 NVIDIA vGPU 出现 Xid 31 故障。  
  🔗 [Issue #61052](https://github.com/vllm-project/vllm/issues/61052)  
- **权重内存飙升**：DeepSeek-V4.1 模型在两次夜间构建之间（H100 上），每卡权重内存增加约 12.5 GiB，可能由内部状态或加载变化引起。  
  🔗 [Issue #68647](https://github.com/vllm-project/vllm/issues/68647)  
- **模型启动失败**：OmniASR 启动失败，原因在于 `padding_mask` 保留在 CPU，却错误转发至 `get_audio_features`。  
  🔗 [Issue #69320](https://github.com/vllm-project/vllm/issues/69320)  

> ✅ *部分问题已有修复 PR（如 #66752, #66327），但上述回归问题尚未有直接修复的 PR。*

---

### **6. 对应用开发者的意义**  
- **放心使用 Rust 前端**：得益于 #69383 修复后 `torch.compile` 缓存稳定性提升，开发者可自由在 Python 与 Rust 前端间切换，无需担心缓存污染——非常适合 CI/CD 及快速迭代场景。  
- **针对 Hopper/Blackwell 优化**：充分利用新推出的 MoE 融合方案（#68469）与 GEMM 计划（#69529），最大化 B200 与 H200 集群的吞吐表现。  
- **规避回归陷阱**：密切监控夜间构建，尤其是 DeepSeek-V4.1 等大模型，警惕未解释的权重内存增长。  
- **尽早启用 ROCm**：若目标为 MI355X 并使用 Qwen3.8-Flash-Next 或 Hy4 模型，ROCm 支持正快速成熟，配备专用性能内核与验证流程。  
- **关注推测解码演进**：从 Marlin 迁移到 Humming（#65560）的进程将持续扩展支持格式，并提升跨架构一致性——请为未来配置变更做好准备。  

➡️ **可操作建议**：若使用推测解码、多 GPU 配置或新架构上的混合精度，请在近期夜间构建上测试你的模型。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 消息简报 – 2026-11-24**

---

### **1. 今日亮点**  
SGLang 项目持续巩固其作为高性能、多后端推理引擎的地位，当前开发重点包括 **prefill-decode 分离架构**、**MoE 与 Mamba2 优化**，以及 **对 NPU（Ascend）和 AMD ROCm 的跨平台支持**。关键 PR 实现了在 CUDA 与 Ascend 后端上对 Kimi-K3.1 的推测性解码功能，同时通过内核融合与异步流水线设计，显著提升对低延迟敏感工作负载的性能表现。

---

### **2. 发布与破坏性变更**  
*今日未发布新版本或破坏性变更。*  
然而，**SGLang 1.0 版本发布追踪器 (#50045)** 正在积极讨论中，表明项目正迈向稳定性和 API 兼容性保障。从 `0.5.x` 升级可能需要配置更新——请参阅 [升级说明](https://github.com/sgl-project/sglang/issues/50045)。

---

### **3. 新模型与硬件支持**  
- ✅ **Kimi-K3.1**：已在 **Ascend NPU** ([PR #52518](https://github.com/sgl-project/sglang/pull/52518)) 和 **CUDA** ([PR #51689](https://github.com/sgl-project/sglang/pull/51689)) 上完整支持 DFlash 推测性解码。  
- ✅ **Mamba2**：在 NemotronH 上服务时，针对 `_chunk_scan_fwd_kernel` 编译进行了性能优化（[Issue #51628](https://github.com/sgl-project/sglang/issues/51628)）——建议预编译以避免首次请求延迟。  
- ✅ **AMD ROCm**：CI 覆盖范围扩展，新增 111 个 CUDA 内核单元测试在 AMD 平台运行（[PR #51524](https://github.com/sgl-project/sglang/pull/51524)），有效提升回归问题检测能力。  
- ✅ **Gemma 4 多模态**：默认启用可拆分的 prefill CUDA 图（[PR #52404](https://github.com/sgl-project/sglang/pull/52404)），显著提升图像+文本输入的吞吐量。

---

### **4. 性能与优化**  
- 🚀 **AMD ROCm**：  
  - gfx1250 RMSNorm 与 QKV 读取融合，每层归一化时间由 **8.6μs 降至 1.9μs**（[PR #49347](https://github.com/sgl-project/sglang/pull/49347)）。  
  - DP prefill 延迟器采用合并模式，改善负载均衡，减少微批次间差距（[PR #51265](https://github.com/sgl-project/sglang/pull/51265)）。  
- 🔥 **NVIDIA (FP8)**：  
  - GDN RMSNormGated + attention sigmoid_mul 与块级 FP8 量化融合，专为 Qwen3.5 优化——适用于混合 MoE 模型（[PR #52047](https://github.com/sgl-project/sglang/pull/52047)）。  
- ⚙️ **异步流水线**：  
  - AsyncPP prefill 阶段现在在序列化前复制 logprob 行（[PR #52196](https://github.com/sgl-project/sglang/pull/52196)），实现完全异步流水线执行。  
- 📈 **HiCache 与分离架构**：  
  - 每路径 Mamba 状态上限现已考虑主机副本开销，防止因淘汰导致命中率下降（[PR #50954](https://github.com/sgl-project/sglang/pull/50954)）。  
  - PP prefill 阶段在前向计算完成后立即发送最后一块 KV，降低 PD 分离架构下的延迟（[PR #50958](https://github.com/sgl-project/sglang/pull/50958)）。

---

### **5. 稳定性与回归问题**  
- ❌ **严重**：  
  - **主机固定内存预算耗尽导致 MiniMax-H3 OOM 杀死进程**，尽管服务器仍报告“就绪”，但返回 503 错误（[Issue #51188](https://github.com/sgl-project/sglang/issues/51188)）。  
  - **Radix 淘汰策略忽略优先级标志**，反而优先淘汰最高优先级前缀（[Issue #52423](https://github.com/sgl-project/sglang/issues/52423)）。  
- ⚠️ **高严重性**：  
  - 新服务器首次大批次 prefill 请求因 **Triton 内核编译**（`_chunk_scan_fwd_kernel`）而卡住（[Issue #51628](https://github.com/sgl-project/sglang/issues/51628)）——修复方案：在引擎初始化阶段预编译。  
  - `--max-running-requests 0` 被静默限制为 1，引发意外行为（[Issue #52483](https://github.com/sgl-project/sglang/issues/52483)）。  
- 🛠️ *修复中*：正在评审的 PR 包括解决 DFlash 草稿布局假设问题（[#40144](https://github.com/sgl-project/sglang/issues/40144)）与推理解析器标记处理问题（[#52612](https://github.com/sgl-project/sglang/issues/52612)）。

---

### **6. 对应用开发者的意义**  
- **对 Mamba2 与 MoE 模型使用预编译内核**（尤其在新实例上），避免初始请求延迟。  
- **充分利用异步流水线与 PD 分离架构**，实现低延迟、可扩展的推理部署——确保使用启用了 AsyncPP 与合并模式的最新 SGLang 构建版本。  
- **使用 HiCache 或扩散模型时密切监控内存使用情况**；主机固定内存预算过低可能导致无声失败。  
- **预计 v1.0 将引入更严格的配置校验**：静默默认值将被显式错误取代；请尽早准备迁移脚本。  
- **针对 AMD/ROCm 进行优化**：利用近期内核融合成果与扩展的 CI 测试覆盖——非常适合成本敏感、异构部署场景。

---  
*数据来源: [github.com/sgl-project/sglang](https://github.com/sgl-project/sglang)*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 消息简报 – 2026-11-24**

---

### **1. 今日亮点**  
最新更新聚焦于后端特定的性能与正确性优化，尤其针对 CUDA、ROCm/HIP、Metal 以及 Vulkan。关键进展包括优化 `FLASH_ATTN_EXT` 偏置处理，提升 Metal 与 CUDA 对 `MUL_MAT` 的 BF16 支持，修复 iPhone（Bonsai）上的 GPU 超时问题及 HIP 环境中的段错误。一项重大量化改进实现了根据目标文件大小自动选择最优量化类型，在最小化误差的同时实现最佳压缩效果。

---

### **2. 发布与破坏性变更**  
今日未发布新的标记版本。但多个 PR 引入了行为变更：  
- **`server: ask exec_shell_command for a short description`** (#32894)：Shell 工具模式现在要求包含 `description` 字段（纯文本摘要），客户端可显示该摘要而非原始命令字符串。这对预期无模式变更的自定义工具集成构成破坏性变更。[PR #32894](https://github.com/ggml-org/llama.cpp/pull/32894)  
- **`gguf-py : do not write metaspace prepend_scheme "always" for BPE vocabs`** (#32917)：修复 BPE 模型（如 mmBERT）的元数据错误输出，防止模型加载时被误解析。[PR #32917](https://github.com/ggml-org/llama.cpp/pull/32917)

---

### **3. 新模型与硬件支持**  
- ✅ **SenseNova Loop**：通过 PR #32588 实现官方支持 —— 可用于 SenseNova Loop 模型系列的推理。由模型作者维护。[PR #32588](https://github.com/ggml-org/llama.cpp/pull/32588)  
- ✅ **Android Termux 上的 Vulkan**：通过 Termux 添加原生 Android Vulkan 驱动的构建与文档支持。支持在 ARM 设备上进行移动端部署。[PR #32261](https://github.com/ggml-org/llama.cpp/pull/32261)  
- ✅ **WebGPU ROLL 支持**：新增 `ROLL` 操作支持，提升跨后端兼容性。[PR #31887](https://github.com/ggml-org/llama.cpp/pull/31887)  

---

### **4. 性能与优化**  
- 🔥 **CUDA：NVFP4 反量化速度提升** (#32875)：显著提升 NVFP4 内核的反量化速度，直接解决 V100 GPU 上 Inkling 2 Mini 推理性能差的问题。对长上下文代理工作负载至关重要。[PR #32875](https://github.com/ggml-org/llama.cpp/pull/32875)  
- ⚡ **CUDA：MMQ 流-k 列块遍历顺序优化为最外层** (#32921)：优化 MMQ 量化中的内存访问模式，减少缓存抖动，在高负载下提升吞吐量。[PR #32921](https://github.com/ggml-org/llama.cpp/pull/32921)  
- 📈 **Vulkan：缩小 cm1 int8 MMQ 性能差距** (#32395 系列)：第 3 部分引入仅加载 A 的预取优化，缩小了不同 AMD shader 编译器间的性能差异。[PR #32395](https://github.com/ggml-org/llama.cpp/pull/32395)  
- 🎯 **量化：自动最优类型选择** (#15550)：重构帕累托优化逻辑，可自动选择量化类型以满足特定文件大小目标（如 10 MB），同时最小化精度损失。适用于资源受限部署场景。[PR #15550](https://github.com/ggml-org/llama.cpp/pull/15550)  

---

### **5. 稳定性与回归问题**  
| 问题 | 严重程度 | 摘要 | 修复状态 |
|------|----------|--------|------------|
| [#32630](https://github.com/ggml-org/llama.cpp/issues/32630) | 高 | 升级 `hip-runtime-amd` 至 10.1-2.1 后出现段错误 | 开放 |
| [#32810](https://github.com/ggml-org/llama.cpp/issues/32810) | 高 | v1.0 版本中混合 GDN 模型在 V100（sm_70）上预填充性能下降 | 开放 |
| [#32776](https://github.com/ggml-org/llama.cpp/issues/32776) | 高 | Qwen3.5（GDN 混合）在 CUDA 上草稿模型推测解码速度慢 2.2–2.4 倍 | 开放 |
| [#32858](https://github.com/ggml-org/llama.cpp/issues/32858) | 中 | `q6_K` token_embd 被 Vulkan_Host 缓冲区拒绝 → 回退至 CPU，导致 GPU 性能下降 | 开放 |
| [#30892](https://github.com/ggml-org/llama.cpp/issues/30892) | 高 | SYCL F16：自 #29107 起，Qwen3.8-27B Q4_K_M 输出为 NaN | 开放 |
| [#30973](https://github.com/ggml-org/llama.cpp/issues/30973) | 中 | Metal 在 MUL_MAT 操作中，当 BF16 src1 的 K ≥ 64 且 batch > 8 时触发中止 | 开放 |

> **注意**：多个回归问题影响旧型号 GPU（如 V100、MI300X）及新型硬件（iPhone Bonsai、Intel Arc）上的生产级推理。目前尚无可用修复 PR。

---

### **6. 对应用开发者的意义**  
- **使用 `--quantize-auto`**（通过 PR #15550）可在边缘或低存储环境部署模型时，自动实现压缩与精度之间的最佳平衡。  
- **避免在 Vulkan 上使用 `q6_K`**，否则会无声回退至 CPU（参见 #32858）。若需 GPU 加速，请改用 `q4_K_M` 或 `q8_0` 以获得更好的 GPU 利用率。  
- **在 V100 与 MI300X 上运行混合（GDN）模型时预计性能下降**——建议暂时锁定至 `v0.8.0` 或更早版本，待修复上线后再升级。  
- **更新工具链集成**，在 `exec_shell_command` 数据包中加入 `description` 字段（参见 PR #32894），以提升代理工作流中的用户体验。  
- **升级后注意监控 HIP/CUDA 环境中的崩溃问题**；确保运行时版本与当前 `llama.cpp` master 兼容。  

👉 **建议**：对于使用草稿模型或推测解码的生产级代理，建议在 #32776 和 #32810 修复前避免使用 `v1.0.0-dev` 构建版本。推荐使用 `v0.9.0-dev` 或更早版本以保障老旧 GPU 上的稳定性。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-24**

---

### **1. 今日亮点**  
最新发布的 **v0.40.18** 版本为 Apple Silicon（MLX）及基于 `inkling2` 的模型带来了显著的性能与稳定性提升，包括 Metal 内核优化和更新的 `llama.cpp` 支持。针对 M 系列 Mac 上的显存耗尽问题以及 Jetson AGX Orin 上的 CUDA OOM 崩溃，已明确标记出持续存在的硬件特定调优需求。

---

### **2. 发布与破坏性变更**  
- **v0.40.18-rc0** 已发布，包含：  
  - ✅ MLX：通过 [PR #19808](https://github.com/ollama/ollama/pull/19808) 在 Metal 上实现融合的 Inkling 残差混合  
  - ✅ MLXRunner：跨架构共享张量辅助工具与模型设置 ([#19805](https://github.com/ollama/ollama/pull/19805))  
  - 🔧 `llama.cpp`：版本升级至 `b12651`，移除对 JetPack 5 的支持 ([#19865](https://github.com/ollama/ollama/pull/19865))  

> ⚠️ **迁移提示**：从 v0.40.17 升级的用户可能会遇到回归问题（参见 #19866）。建议在确认稳定性前回滚或等待补丁版本。

---

### **3. 新模型与硬件支持**  
- ✅ **Inkling 2 Mini GGUF** 现可通过 `llama.cpp` master (`b12651`) 支持 — 实现 `inkling2_loop` 与 `inkling2v` 投影器加载 ([#19826](https://github.com/ollama/ollama/issues/19826), [#19861](https://github.com/ollama/ollama/pull/19861))  
- ✅ **Jetson AGX Orin (JetPack 6)**：可通过 `GGML_CUDA_NO_VMM=ON` 构建标志修复 ([#19815](https://github.com/ollama/ollama/issues/19815))  
- ✅ **AMD RX 5500 (gfx1010)**：在 `llama-server --list-devices` 中修复后，Vulkan 后端现已可用 ([#19589](https://github.com/ollama/ollama/issues/19589))  
- ✅ **Windows ARM64**：Gemma3 视觉模型可成功加载（尽管在 CPU 图像处理时仍存在超时问题；详见 [#19444](https://github.com/ollama/ollama/issues/19444))

---

### **4. 性能与优化**  
- 🚀 **MLX Metal 内核**：通过专用 Metal 内核优化了 Inkling 2 的解码、预填充及草稿轮次 ([#19843](https://github.com/ollama/ollama/pull/19843))  
- 📈 **KV 缓存量化**：尚未在 MLX Runner 中实现 — 当前忽略 `OLLAMA_KV_CACHE_TYPE`，导致 24GB Mac 上 16K 上下文时出现 OOM ([#19857](https://github.com/ollama/ollama/issues/19857))  
- 📊 **指标日志**：通过 `OLLAMA_LOG_METRICS=1` 可选择性启用按请求的推理指标（延迟、每秒词元数）记录 ([#19869](https://github.com/ollama/ollama/pull/19869))  
- ⏱️ **加载时长追踪**：即使在仅加载请求（`/api/generate` 无提示）中也已报告 ([#19868](https://github.com/ollama/ollama/pull/19868))

---

### **5. 稳定性与回归问题**  
| 问题 | 严重性 | 状态 | 备注 |
|------|----------|--------|-------|
| [#19866](https://github.com/ollama/ollama/issues/19866)：v0.40.17 性能回归（M4 Pro MLX Qwen 3.8 27b） | 🔴 高 | 开放 | 报告重大性能下降；尚未提交修复 PR |
| [#19857](https://github.com/ollama/ollama/issues/19857)：MLX KV 缓存始终为 16 位 → 24GB Mac 上出现 OOM | 🔴 高 | 开放 | 关键内存问题；临时解决方案：降低上下文长度 |
| [#18131](https://github.com/ollama/ollama/issues/18131)：MLX 前缀缓存导致 32GB Apple Silicon 系统大量交换 | 🟡 中等 | 开放 | 预期增长，非内存泄漏 — 影响代理类工作负载 |
| [#19815](https://github.com/ollama/ollama/issues/19815)：Jetson AGX Orin CUDA OOM 出现在 `cuMemAddressReserve` | 🔴 高 | 开放 | 每次图像请求均崩溃；需通过构建标志修复 |
| [#19854](https://github.com/ollama/ollama/issues/19854)：内置解析器在未声明工具时丢失输出 | 🟡 中等 | 开放 | 非流式模式下响应内容丢失 |

> ✅ **已修复的 PR**：  
> - [#19860](https://github.com/ollama/ollama/pull/19860)：修复 `if...else` 块中的旧模板恐慌问题 (#19859)  
> - [#19855](https://github.com/ollama/ollama/pull/19855)：当未声明工具时保留工具标记 (#19854)  
> - [#19853](https://github.com/ollama/ollama/pull/19853)：在 `ToolFunction` 中保留如 `strict` 等未建模字段 (#19852)

---

### **6. 对应用开发者的影响**  
- 🛠️ **对于代理与长期运行的工作流**：由于未受控的 KV 缓存与前缀缓存膨胀，请避免在 24–32GB Apple Silicon 系统上使用 `qwen3.8:27b-mlx` ([#18131](https://github.com/ollama/ollama/issues/18131), [#19857](https://github.com/ollama/ollama/issues/19857))。若控制运行环境，可使用 `OLLAMA_KV_CACHE_TYPE=fp16`。  
- 💻 **对于 Windows 部署**：在多用户或无头服务中运行时，建议使用 `OLLAMA_RUNNER=llama.cpp` 而非 MLX — 避免因登录会话依赖引发的问题，参见 [issue #19862](https://github.com/ollama/ollama/issues/19862)。  
- 🔄 **对于 API 集成**：除非使用带 `Extra` 字段的 `ToolFunction`，否则可能静默丢失 `strict`、`tool_choice` 等函数级参数（已在 [#19853](https://github.com/ollama/ollama/pull/19853) 中修复）。  
- 📦 **对于本地 AI 工具开发**：可利用新集成如 **RocketRide** ([#19867](https://github.com/ollama/ollama/pull/19867))、**TealKit** ([#19863](https://github.com/ollama/ollama/pull/19863)) 与 **Hushavyr** ([#19858](https://github.com/ollama/ollama/pull/19858)) 来增强代理与代码审查流水线。

> ✅ **建议**：密切监控 v0.40.18+ 的稳定性；在 #19866 解决前，避免升级至 v0.40.17。在生产推理流程中启用 `OLLAMA_LOG_METRICS=1` 以获得可观测性。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 消息简报 – 2026-11-24**

---

### **1. 今日重点**  
LiteLLM 项目发布了 **v1.110.3**、**v1.109.4** 和 **v1.108.16**，关键更新为通过 `cosign` 实现 Docker 镜像的 *无密验证* —— 现在验证发布版本需依赖来自 GitHub Actions 的 OIDC 身份。在代理稳定性与成本控制方面取得重大进展，包括修复基于 Kafka 的请求日志复制问题、实时会话期间的 TPM 强制执行，以及跨团队模型预算的稳健处理。

---

### **2. 发布与破坏性变更**  
- **v1.110.3 / v1.109.4 / v1.108.16**（今日发布）：  
  - **无密镜像签名**：从 v1.108.10 开始，所有新镜像均使用基于 GitHub OIDC 身份的无密 `cosign` 签名（`https://token.actions.githubusercontent.com`）。验证现需满足以下条件：  
    ```bash
    cosign verify \
      --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main \
      --certificate-oidc-issuer https://token.actions.githubusercontent.com \
      ghcr.io/berriai/litellm:v1.110.3
    ```
    [问题 #52837](https://github.com/BerriAI/litellm/issues/52837) | [文档](https://docs.litellm.ai/docs/deployment/security#verifying-image-signatures)

- **破坏性变更（代理）**：  
  - `chatgpt/` 部署现在若底层凭证（如 ChatGPT 订阅登录信息）不存在，则返回 `401` 错误。此前行为为静默失败或提示登录。  
    [PR #53744](https://github.com/BerriAI/litellm/pull/53744)

---

### **3. 新模型与硬件支持**  
- **NVIDIA NIM**：全面支持原生提供 `logprobs` 与 `top_logprobs` 的模型（如 Llama 3、Mistral），现已正确通过 LiteLLM 转发，无需再设置 `allowed_openai_params`。  
  [PR #54008](https://github.com/BerriAI/litellm/pull/54008) | [PR #54043（回滚）](https://github.com/BerriAI/litellm/pull/54043)

- **Databricks**：新增按部署配置的 OAuth M2M 凭证（client_id/client_secret），实现每个工作区的服务主体隔离。  
  [PR #50675](https://github.com/BerriAI/litellm/pull/50675)

- **Vertex AI / Gemini**：改进工具模式架构处理（保留 `$defs`，修复布尔子模式崩溃问题），并增强对新模型的结构化输出支持。  
  [PR #53478](https://github.com/BerriAI/litellm/issues/53478) | [PR #51137](https://github.com/BerriAI/litellm/pull/51137)

---

### **4. 性能与优化**  
- **实时会话**：每轮会话强制执行 TPM 限制，防止长时运行会话中的滥用（如语音代理）。  
  [PR #53689](https://github.com/BerriAI/litellm/pull/53689)

- **Kafka 复制**：区域代理工作节点现在通过 Kafka 复制请求日志与支出元数据，支持跨区域审计与一致的成本报告。  
  [PR #54061](https://github.com/BerriAI/litellm/pull/54061)

- **图像编辑**：修复基于 JSON 的图像编辑（OpenAI/Azure）中错误的表单编码问题，降低上游拒绝风险。  
  [PR #53864](https://github.com/BerriAI/litellm/pull/53864)

---

### **5. 稳定性与回归问题**  
- **严重崩溃（代理）**：在使用 `SQL_ASCII` 编码的 PostgreSQL 数据库时，代理启动失败，抛出 `ValueError: invalid literal for int() with base 10`。  
  [问题 #52247](https://github.com/BerriAI/litellm/issues/52247) — 修复待定；临时方案：改用 UTF8 编码。

- **成本控制回归**：多窗口预算重置时，若数据库提交成功但缓存更新失败，可能导致缓存中残留过期支出。  
  [问题 #36941](https://github.com/BerriAI/litellm/issues/36941) — PR 正在审查中。

- **结构化输出失败**：当 `response_format` 设置时，`vertex_ai/claude-haiku-5-5` 会静默降级为 JSON 工具，而非使用原生结构化输出。  
  [问题 #53478](https://github.com/BerriAI/litellm/issues/53478) — 补丁正在开发中。

- **流式传输损坏风险**：截断的 SSE 流无法被检测到。已提出可选启用的 `strict_stream_completion` 功能。  
  [问题 #42085](https://github.com/BerriAI/litellm/issues/42085) — PR #42085

---

### **6. 对应用开发者的影响**  
- **安全**：请更新镜像验证脚本，使用 **基于 OIDC 的无密 `cosign`**。旧版基于密钥的验证将不再有效。  
- **成本控制**：建议使用 **基于主体的预算**（团队/用户/密钥），以管理不同模型族的支出。[功能请求 #53946](https://github.com/BerriAI/litellm/issues/53946) — 当前开放但已被广泛使用。
- **可靠性**：生产环境代理中避免使用 `SQL_ASCII` 数据库。改用 UTF8 以防止启动崩溃。
- **准确性**：在 Vertex AI/Gemini 上使用结构化输出时，请确保版本不低于 v1.110，并在模型映射中显式检查 `supports_native_structured_output`。
- **流式应用**：若可用，考虑启用 `strict_stream_completion` 以尽早发现丢失响应。

> ✅ **行动项**：  
> - 审计镜像验证流程。  
> - 升级至 v1.110.3+ 以获得更好的 NIM 支持与成本控制功能。  
> - 升级后测试 `chatgpt/` 部署——凭证必须有效。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-24**

---

### **1. 今日亮点**  
Unsloth v0.1.923-beta 实现重大性能飞跃，**Inkling 2 Mini 在所有 GPU 上推理速度最高提升 1.9 倍**，包含 RTX Spark 优化及更快的 GRPO/AsyncGRPO 训练。新版本还引入了对音频、字幕和图像翻译的多格式支持，并在 Studio 中新增知识管理功能。

---

### **2. 发布与破坏性变更**  
- **v0.1.923-beta**：  
  - Inkling 2 Mini 在所有 GPU 后端（CUDA、ROCm、Metal）上实现 **最高达 1.9 倍的推理加速**。  
  - 新增：**更高效的 GRPO 与 AsyncGRPO 训练流水线**，支持更优的微调工作流。  
  - 通过 GGUF 新增对 **Qwen-Image-Flash 与 FastWan** 模型的支持。  
  - 在设置中新增 **知识页面**，用于上下文感知的代理记忆管理。  
  - 支持在 Unsloth Translate 中进行 **音频、字幕与图像翻译**。  
  🔗 [GitHub Release v0.1.923-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.923-beta)

> ⚠️ **注意**：部分用户报告更新后 Inkling-2-Mini GPU 逐层卸载速度下降（从 40 → 12 tokens/s），问题已记录于 [#19137](https://github.com/unslothai/unsloth/issues/19137)。

---

### **3. 新模型与硬件支持**  
- **模型**：  
  - `Qwen-Image-Flash`（GGUF）现已支持。  
  - `FastWan`（多模态）作为实验性模型新增。  
- **后端与加速器**：  
  - **AMD NPU（Lemonade/FastflowLM）**：仍在调查中，因 JSON 解析崩溃问题 ([#18763](https://github.com/unslothai/unsloth/issues/18763))。  
  - **ROCm**：部分支持已确认；有用户报告在 Studio 中启动时出现 system libamdhip64 加载问题 ([#18948](https://github.com/unslothai/unsloth/issues/18948))。  
  - **Apple Silicon M1 Pro**：确认可运行，但 `inkling2_loop` 模型类型未被识别 ([#18972](https://github.com/unslothai/unsloth/issues/18972))。  
- **量化格式**：  
  - 通过 PR #19169 完全支持 **GGUF**（包括同一模型仓库的多量化变体）。

---

### **4. 性能与优化**  
- **推理速度**：  
  - **Inkling 2 Mini** 在所有 GPU（RTX、AMD、Apple Silicon）上的解码阶段实现 **1.9 倍加速**。  
  - **Krea 2 Turbo** 在 L4 上提速 **5.1%**，在 RTX PRO 6000（G4）上提速 **8.1%**，使用 INT8 注意力且无掩码时表现更佳 ([PR #19208](https://github.com/unslothai/unsloth/pull/19208))。  
- **内存与内核效率**：  
  - **CFG 复制激活计数** 现在包含同伴卡的激活状态后再决定是否接纳 ([PR #19209](https://github.com/unslothai/unsloth/pull/19209))。  
  - **GGUF 上下文适配中的提示词计数复用** 避免重复分词操作 ([PR #19159](https://github.com/unslothai/unsloth/pull/19159))。  
- **CI/构建优化**：  
  - 后端 CI 现在使用 `uv pip install --system` 实现更快的依赖解析 ([PR #19207](https://github.com/unslothai/unsloth/pull/19207))。  
  - Windows 烟囱测试已合并为单一安装阶段 ([PR #19204](https://github.com/unslothai/unsloth/pull/19204))。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 状态 | 修复 PR / 说明 |
|--------|------|--------|----------------|
| 🟡 高 | **Inkling-2-Mini GGUF 在 Tesla V100S (sm_70) 上输出 NaN ("!!!!")** | 打开 | [Issue #19013](https://github.com/unslothai/unsloth/issues/19013) – 表面为 CUDA 12.x + llama.cpp 特定问题。 |
| 🟡 中 | **Inkling-2-Mini GPU 卸载性能回归（40 → 12 tokens/s）** | 打开 | [Issue #19137](https://github.com/unslothai/unsloth/issues/19137) – 可能由近期内核变更引起。 |
| 🟡 中 | **Studio 中启动时，llama-server 在 ROCm 上崩溃** | 打开 | [Issue #18948](https://github.com/unslothai/unsloth/issues/18948) – system libamdhip64 冲突；从 shell 启动正常。 |
| 🔴 严重 | **AMD 混合 GPU 系统忽略 AMD 显卡，无法同时使用双卡** | 打开 | [Issue #12248](https://github.com/unslothai/unsloth/issues/12248) – 已知 venv/GPU 驱动隔离问题。暂无修复方案。 |
| 🟡 中 | **使用 transformers==5.13.1 时出现 "A script was blocked" 错误** | 打开 | [Issue #18699](https://github.com/unslothai/unsloth/issues/18699) – 扫描器误报；无即时影响。 |

---

### **6. 对应用开发者的意义**  
- ✅ **充分利用 Inkling 2 Mini 的 1.9 倍加速**，在消费级 GPU（8–12 GB VRAM）上实现实时推理。适用于边缘部署与低延迟代理场景。  
- 🔧 **借助 PR #19169 并行使用同一模型的不同量化版本** —— 支持 A/B 测试或降级策略。  
- 🛠️ **在旧硬件（V100S、AMD NPU）上预期存在稳定性问题** —— 生产环境请等待补丁发布。  
- 🔄 **准备应对模型级配置漂移**：UI 中已移除 `engram table` 设置 ([#19043](https://github.com/unslothai/unsloth/issues/19043))，表明深层配置重构正在进行中。  
- 💬 **构建多模态应用**：得益于图像/音频翻译及 Qwen-Image-Flash 支持，现在可设计具备丰富输入输出处理能力的全栈 AI 助手。  
- 🌐 **为远程编排未来化布局**：如 **Telegram 机器人集成** ([#18991](https://github.com/unslothai/unsloth/issues/18991)) 与 **远程 Studio 服务器连接** ([#19173](https://github.com/unslothai/unsloth/issues/19173)) 等需求，预示向分布式代理生态系统的演进。

> 👉 **建议**：使用 v0.1.923-beta 进行基准测试，但务必在目标硬件上验证性能——尤其是 ROCm 或较老的 NVIDIA 显卡。关注问题追踪列表以获取关键修复进展。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*