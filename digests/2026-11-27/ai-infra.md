# AI 基础设施日报 2026-11-27

> 生成时间: 2026-11-27 04:29 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-11-27**

---

### **1. 生态概览**  
截至2026年末，AI推理与服务生态正迅速成熟，呈现出深度硬件定制化、激进的内核级优化趋势，同时高性能低延迟引擎与开发者友好的多模型网关之间的差距日益扩大。各项目在聚焦下一代模型家族（如Inkling-2、Qwen3.8-Flash-Next）的同时，持续推动量化（MXFP4、NVFP4）、推测解码（DFlash、LES）及分布式推理（TP、流水线并行）的技术边界。业界明显转向使用Rust开发性能关键组件，并通过溯源验证增强安全性，反映出对生产级可靠性的高度重视。

---

### **2. 活跃度对比**

| 项目       | 近7日开放问题数 | 近7日合并PR数 | 发布状态       |
|---------------|------------------|----------------|----------------|
| **vLLM**      | 89               | 47             | 无新发布        |
| **SGLang**    | 112              | 52             | v0.5.23（预1.0） |
| **llama.cpp** | 76               | 63             | `v1.1.0`（破坏性更新） |
| **Ollama**    | 94               | 38             | `v0.40.19-rc0`（RC） |
| **LiteLLM**   | 68               | 29             | `v1.113.0-dev.1`（开发版） |
| **Unsloth**   | 57               | 24             | Beta (`0.1.925-beta`) |

> ✅ *洞察*：**llama.cpp** 在开发活跃度上领先（合并PR数），得益于其对底层后端支持的专注和快速功能迭代。**SGLang** 的问题数量最高——表明其在1.0版本前仍面临稳定性挑战。**LiteLLM** 最具安全意识，具备签名发布与身份强制机制。

---

### **3. 模型支持竞赛**

| 新模型 / 架构         | 支持方（优先级排序）                             | 核心差异点 |
|----------------------|--------------------------------------------------|------------|
| **Inkling-2系列**     | **llama.cpp**, **Ollama**, **Unsloth**, **SGLang** | 完全支持DFlash2 + MoE融合；最佳CUDA/HIP/Vulkan支持 |
| **Qwen3.8-Flash-Next (Qwen4Exp)** | **vLLM**, **Ollama**, **llama.cpp**           | vLLM领先，支持DeepGEMM MQA logits与MXFP4 |
| **Kimi-K2.6 工具调用** | **vLLM**, **Ollama**                            | vLLM已修复完整解析器（Issue #42426）；Ollama仍不稳定 |
| **PrismML PQ2_0/PTQ1_0 GGUF** | **Unsloth**（独家）                          | 唯一原生支持该项目 |
| **AMD ROCm gfx950 / MI355X** | **vLLM**, **llama.cpp**, **SGLang**          | vLLM在GatedDeltaNet + QuerySparse Attention调优上领先 |
| **Intel XPU + DSpark采样** | **vLLM**, **SGLang**, **llama.cpp**          | vLLM支持分片采样；SGLang新增前瞻专家调度（LES） |
| **华为昇腾NPU（CANN）** | **Ollama**（新加入）                          | 首个主流网关支持CANN构建 |

> 🏆 **胜出者**：**llama.cpp** —— 在多样后端中对新模型与架构的采纳速度最快。  
> 🔥 **新兴领导者**：**Unsloth** —— 对PrismML新型量化格式实现独家支持。

---

### **4. 性能前沿**

| 优化方向           | 领先项目                                  | 关键进展 |
|--------------------|--------------------------------------------|----------|
| **内核融合与底层优化** | **vLLM**, **llama.cpp**                   | vLLM的CUTLASS FP8融合；llama.cpp的Inkling-2-Mini卷积+SSM融合 |
| **KV缓存与内存效率** | **vLLM**, **Unsloth**, **Ollama**        | `share_replicated_regions`, `offload_layers`, 紧凑Engram缓冲区 |
| **推测解码（DFlash）** | **llama.cpp**, **vLLM**, **SGLang**      | 分拆草稿方法（`draft-dflash2`），LES调度，PD预填充 |
| **分布式服务（TP/PP）** | **vLLM**, **SGLang**                     | 多模态缓存漂移修复，DeepSeek-V4.1流水线并行预填充 |
| **量化创新**         | **vLLM**, **llama.cpp**, **Ollama**       | MXFP4/MXFP6/NVFP4，通过Humming支持INT4/INT8 GPTQ/AWQ（vLLM），Ollama支持int4仿射量化 |
| **流式传输与延迟**   | **SGLang**, **LiteLLM**, **Ollama**       | 避免克隆（SGLang），SSE泄漏修复（LiteLLM），短历史加速（Ollama） |

> ⚙️ **趋势**：内核级融合与内存感知卸载已成为基本要求。前沿正转向**动态资源分配**（统一内存、微批处理）和**硬件特化调优**（ROCm、Intel XPU、Apple Silicon）。

---

### **5. 层级定位**

| 项目       | 主要层级                     | 角色摘要 |
|---------------|-------------------------------|----------|
| **vLLM**      | **高性能推理引擎**             | 专为大规模、低延迟服务设计，运行于NVIDIA GPU；核心聚焦：内核效率、TP/PP扩展 |
| **SGLang**    | **分布式推理框架**             | 支持复杂流水线并行与多阶段推理；在智能体工作负载与动态状态管理方面表现强劲 |
| **llama.cpp** | **本地运行时与跨后端引擎**     | 通用轻量级运行时，适用于边缘设备与异构后端（CUDA、HIP、Vulkan、Metal等） |
| **Ollama**    | **开发者网关与本地智能体平台** | 桥接模型与应用；聚焦易用性、本地执行与智能体工具链（如JSON Schema、工具调用） |
| **LiteLLM**   | **通用LLM网关与路由层**         | 聚合多个提供方，强制成本控制，支持多提供方路由，集成MCP栈用于智能体 |
| **Unsloth**   | **智能体优化运行时与训练加速器** | 专注于图像生成、扩散模型、LoRA折叠与Studio用户体验；面向创意与多模态智能体 |

> 🔄 **层级趋同**：LiteLLM与Ollama在智能体工作流上日益重叠，但LiteLLM在多提供方编排上更优，而Ollama在本地模型访问与UI集成上领先。

---

### **6. 趋势信号**

#### **从当前活动提炼的关键行业趋势**：
1. **Rust正成为性能关键组件的事实标准**（vLLM的Rust前端、SGLang的流式优化）。
2. **硬件特化加速推进**：AMD ROCm、Intel XPU、Apple Silicon与华为昇腾不再被忽视——它们已成为设计中的第一类公民。
3. **安全与合规不可妥协**：LiteLLM的Cosign签名、Unsloth的沙箱警告、vLLM的`auto_round`崩溃防护，反映出生态系统正迈向可审计的成熟阶段。
4. **量化正超越INT4/FP8**：MXFP4、NVFP4与三元GGUF格式（PQ2_0）表明向更高精度低成本演进——特别适合安全敏感或推理密集型任务。
5. **稳定性是新的创新指标**：严重漏洞（内存溢出、卡死、静默失败）占据问题列表主导地位——表明**生产就绪性**如今比原始速度更重要。

#### **应用开发者应关注的重点**：
- **新项目采用vLLM的Rust前端**——预计2027年初将成为默认选择。
- **生产环境使用LiteLLM LTS镜像**；除非测试新功能，否则避免使用`dev`标签。
- **密切关注Ollama的`0.40.18`与`0.40.19-rc0`**——RTX 5090与DGX Spark上的关键缺陷使其不适合生产。
- **规划模型特定异常**：例如`qwen3.8-flash-next`在MLX上出现前缀缓存膨胀，建议使用`OLLAMA_KEEP_ALIVE=-1`。
- **优先保障溯源与安全**——尤其在使用公开模型或部署于受监管环境时。

> ✅ **最终建议**：构建企业级可扩展智能体系统，推荐组合使用 **vLLM + LiteLLM + Unsloth**——利用vLLM实现高性能，LiteLLM完成路由，Unsloth掌控训练与推理流水线的细粒度控制。

---  
*本报告基于截至2026-11-27的GitHub活动数据整理。如需实时更新，请关注各项目仓库与议题追踪器。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

### **vLLM Digest — 2026-11-27**

#### **1. 今日亮点**  
vLLM 项目持续深化对下一代模型与硬件的支持，关键进展包括 **AMD ROCm 性能优化**、**多模态渲染稳定性提升** 和 **Rust 前端成熟度增强**。重点任务涵盖修复横向扩展部署中的多模态缓存漂移问题，实现在 Intel XPU 上的 DFlash 分片采样功能，并持续推进在 NVIDIA 架构上从 Marlin 向 Humming 量化内核的迁移。

#### **2. 发布与破坏性变更**  
*过去 24 小时内未报告新版本发布或破坏性变更。*  
然而，**Rust 前端采用速度正在加快**：PR #68784 跟踪其作为 `vllm serve` 默认选项的进展——预计将于 2027 年初实现这一重大转变。开发者应尽早开始测试基于 Rust 的工作流。

#### **3. 新模型与硬件支持**  
- **AMD ROCm (gfx950 / MI355X)**：针对 `amd/Qwen3.8-Flash-Next-Quark-MXFP4` 正在进行活跃的性能调优（Issue #59575）；包含 GatedDeltaNet、QuerySparse Attention 与 MXFP4 MoE。
- **Intel XPU**：PR #68598 实现了在 Intel GPU 上的 **DSpark 批量分片顺序采样**，显著提升推测解码中的并行能力。
- **新模型**：新增对 **Muse Spark 压缩注意力投影**（PR #70094）、**DeepSeek-V4.1 特殊标记处理**（PRs #70271, #70270）以及 **Kimi-K2.6 工具调用解析**（Issue #42426）的支持。
- **量化**：通过 Humming 实现对 **MXFP4、MXFP6、NVFP4、FP8 以及 INT4/INT8 GPTQ/AWQ** 的完整支持（Issue #65503）；同时正在进行 `shared_expert_gate` 兼容性开发（Issue #68336）。

#### **4. 性能与优化**  
- **Qwen3.8-Flash-Next (Qwen4Exp)**：在 SM100 系列 GPU 上使用 DeepGEMM 的连续 MQA logits 内核，使 **预填充评分提升 1.9×**，**选择阶段（评分 + gvr_2 top-k）提升 1.07–1.42×**（512+ 查询行场景）（PR #67740）。
- **内核融合**：PR #69778 将 SiLU 与乘法操作融合至 CUTLASS block-FP8 线性层中，输入为分组 128 的 FP8——这对高吞吐量 FP8 模型推理至关重要。
- **延迟降低**：PR #65359 提议将 FlashInfer 的 `PcieIpcAllGatherWorkspace` 集成进 `CudaCommunicator.all_gather`，旨在缓解 DeepSeek-V4.1 等模型中受延迟限制的 TP all-gather 场景。
- **内存效率**：PR #69920 引入 `share_replicated_regions` 至 `SimpleCPUOffloadConnector`，通过仅存储一次 TP 复制的 KV 区域，有效降低主机内存占用。

#### **5. 稳定性与回归问题**  
- **严重（P0）**：[Bug] Kimi-K2.6 在推理字段中偶尔仅输出 `"!!!!!!!!!!"`（内容为空）（Issue #42426，93 条评论）。*修复待完成*。
- **高优先级**：[Bug] GLM-5.2 MTP 在 8x MI300X 上因词汇并行 logits all-gather 过程中的 RCCL 死锁而卡死（Issue #48568，9 条评论）。*复现确认，修复中*。
- **崩溃风险**：在 Blackwell（SM120）上使用 **NVFP4 + DFlash + torch.compile** 时，`torch::jit::invokeOperatorFromPython` 出现 SIGSEGV（Issue #48234，已关闭但对后续构建仍具参考价值）。
- **稳定性修复**：PR #69392 解决了多模态缓存状态漂移导致的 scale-out 渲染流水线中 `MultiModalCacheMissError` 问题。

#### **6. 对应用开发者的启示**  
- **尽可能使用 Rust 前端（`vllm serve`）**——它正逐步成为默认方案，具备更优的类型安全性和性能表现（PR #68784）。
- **对于多模态应用**，请确保使用最新渲染器——PRs #70270 与 #69769 修复了视频/图像标记的令牌不匹配问题。
- **若部署于 AMD 平台**，请关注 Kimi 模型的 CI/测试结果（Issue #66699）：每周自动化验证机制即将上线，以尽早发现回归问题。
- **对于生产环境的 LLM 代理**，建议采用 **会话感知的 KV 提示**（Issue #52113）和 **SRPF 调度策略**（PR #58420），以减少混合负载下的队头阻塞。
- **避免在量化 `lm_head` 上使用 `auto_round`**——此为已知崩溃源（Issue #49137），需等待补丁发布。

> 🔗 [完整问题列表](https://github.com/vllm-project/vllm/issues) | [最新 PR 列表](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-11-27**

---

### **1. 今日亮点**  
SGLang 项目在迈向 **1.0 版本** 的过程中，持续优先保障稳定性与可扩展性，重点解决长期存在的 CI 不稳定和基础设施故障问题（问题 #42752, #17050）。关键进展包括：启用 **DeepSeek-V4.1 的流水线并行 PD 预填充**（PR #53409），推进 **统一内存（Unified Memory）** 以实现动态状态管理（问题 #49944），以及优化 **Rust 服务器流式序列化** 以降低内存开销（PR #53482）。

---

### **2. 版本发布与破坏性变更**  
*过去 24 小时内无新版本发布。*  
- **SGLang 1.0 路线图（问题 #50045）**：聚焦于强化现有功能，将隐式配置变更替换为显式错误提示，并建立 1.x 系列的兼容性策略。从 0.5.x 升级可能需要调整配置 —— 参见 [升级说明](https://github.com/sgl-project/sglang/issues/50045#upgrade-notes)。

---

### **3. 新模型与硬件支持**  
- ✅ **DeepSeek-V4.1 流水线并行 PD 预填充**：PR #53409 实现了 DeepSeek-V4.1 在各流水线阶段的完整流水线并行预填充支持，包含不均匀层划分。
- ✅ **Intel XPU + 前瞻专家调度（LES）**：RFC #46520 提出对 Intel XPU 的可选支持，结合 SSD 层卸载与 LES 调度，适用于 MoE 模型。
- ✅ **NVIDIA GB10 / SM12x 支持**：问题 #53439 报告在 SM12x 上 `inkling2` 路由超过约 2,750 个专家 ID 时出现共享内存溢出 —— 正在积极排查。

---

### **4. 性能与优化**  
- 🚀 **Rust 服务器流式优化**：PR #53482 避免在序列化前克隆流式聊天响应，降低内存压力，提升高频流式场景下的吞吐量。
- ⚡ **FlashInfer 批量不变 GEMM**：PR #51618 利用 FlashInfer 0.7.4 的批量不变 BF16 内核，在 NVIDIA GPU（Hopper+）上实现确定性推理。
- 🔥 **CUDA JPEG 输入修复**：PR #51822 确保标准 CUDA JPEG 输入被解码为 RGB 格式，修复 Gemma 4 中图像分块处理错误（参考 #26751）。
- 💾 **统一内存进展**：问题 #49944 跟踪统一 GPU 内存池的工作，用于 KV 缓存、滑动窗口状态和循环状态 —— 支持动态容量分配。

---

### **5. 稳定性与回归问题**  
- **严重**：当 Pod 共享 `/dev/shm` 时，TP 启动会挂起（问题 #53309）—— 于 v0.5.23 报告；修复待定。
- **高严重性**：**不稳定的 CI 测试** 严重影响 PR 验证流程（问题 #42752，更新于 2026-11-26）；278 条评论指出 `PR Test Base/Extra` 中反复出现的基础设施故障。
- **正确性缺陷**：若解码器状态在请求中途被逐出，**流式输出最多丢失 5 个 token**（问题 #41236，已关闭但对长会话仍相关）。
- **回归问题**：**Gumbel 水印在多模态填充 ID 上溢出 int32**（问题 #53154）—— 影响多模态流水线中的安全/隐私功能。
- **进行中的修复**：  
  - PR #53484：在 LLaDAImageAttention 中融合 QK 归一化 + RoPE → 减少内核启动次数。  
  - PR #51778：修复 Gemma 4 中图像掩码泄露至全注意力层的问题（导致非因果注意力）。

---

### **6. 对应用开发者的意义**  
- **预期即将到来的 1.0 版本将具备更高稳定性** —— 请为配置处理和 API 合约的潜在破坏性变更做好准备。
- **使用正在开发中的统一内存** 以避免固定大小分区，更好地应对变长会话负载（如多轮对话代理）。
- **在 Kubernetes 部署中避免 `/dev/shm` 竞争**；确保每个 Pod 拥有独立的共享内存，防止 TP 启动挂起。
- **利用 Rust 服务器优化**（如 PR #53482）实现低延迟、高吞吐的代理流式传输 —— 尤其适用于工具调用或 logprobs 场景。
- **监控多模态与推测解码路径中的回归风险**；在负载下验证自定义分词器与水印逻辑。

> 🔗 [SGLang GitHub Issues](https://github.com/sgl-project/sglang/issues) | [PRs](https://github.com/sgl-project/sglang/pulls)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp 摘要 – 2026-11-27**

---

### **1. 今日亮点**  
`v1.1.0` 版本正式引入对 **Inkling 2 系列** 的全面支持，包括将 **DFlash 伪解码** 拆分为独立的草稿方法，并新增 **Zaya1 8B**、**RAON-1-mini** 以及 **Hy4 flash** 模型。针对 CUDA、HIP、Vulkan 和 Metal 后端的重大性能优化正在推进，尤其聚焦于 Flash Attention、MoE 融合以及 Inkling-2-Mini 的内核级融合。

---

### **2. 发布与破坏性变更**  
- **`v1.1.0`**（GitHub：[发布 v1.1.0](https://github.com/ggml-org/llama.cpp/releases/tag/v1.1.0))  
  - 废弃旧版 `llama_batch` API，推荐使用 `llama_batch_ext` — 所有新代码必须迁移至新接口。  
  - 将 DFlash 伪解码拆分为独立草稿方法（`--spec-type draft-dflash`、`--spec-type draft-dflash2`），以实现更精细的控制与性能调优。  
  - 新增通过全新推理管线支持的广泛 TTS（文本转语音）功能。

---

### **3. 新模型与硬件支持**  
#### **新增模型**：  
- **Inkling 2 系列**（基础版、Mini、DSpark）：完整支持，配备优化内核及 DFlash2 伪解码。  
- **Domyn Edge 4B**、**Zaya1 8B**、**RAON-1-mini**、**Hy4 flash**：现原生支持量化 GGUF 变体。  
- **Qwen3.5-4B**、**Qwen3.8-27B**：检测到张量数量不匹配问题（如 #33099、#32918），但修复后已可正常加载。

#### **硬件与后端增强**：  
- **CUDA**：改进大头维度处理（通过 PR #33161），修复 >65535 令牌限制问题（PR #33162）。  
- **HIP（ROCm）**：为未调优的 RDNA3 芯片新增 split-K F32 GEMM 路径（PR #33167）。  
- **Vulkan**：新增 FP8 与缩放矩阵乘支持（PR #29791），为 Inkling-2-Mini 添加紧凑偏置 FA（PR #32898），并修复 RDNA1 错误分类问题（PR #33123）。  
- **Apple Metal**：修复 mul_mat 中 f32 累加错误及四段视觉 RoPE 问题（PR #33093）。  
- **OpenCL / Adreno A850**：新增 int8 bin 内核主机侧变更（PR #33069）。  
- **Hexagon**：修复 INT HMX 正确性问题（PR #33166）。  
- **Haiku OS**：新增构建支持（PR #33168）。

---

### **4. 性能与优化**  
- **内核融合**：CUDA 现在可融合 Inkling-2-Mini 的短卷积、深度混合、循环控制器、L2 截断及情境链（PR #33060），降低内核启动开销。  
- **MoE 优化**：bailingmoe3 融合 ssm_conv + silu 并消除冗余拷贝（PR #33081）；MoE 缓存现在避免重复存储共享专家权重三次（PR #32744）。  
- **Flash Attention**：CUDA 与 Vulkan 增加索引偏置支持（PR #33063、#32898）；对填充的 GQA 头添加注意力汇点读取保护（PR #33160）。  
- **内存效率**：`unicode_byte_encoding_process` 优化减少 UTF-8 转换开销（PR #33164）。  
- **分词速度**：Unicode 处理现在避免冗余字符串拷贝与转换（PR #33164）。

---

### **5. 稳定性与回归问题**  
| 问题 | 严重性 | 状态 | 说明 |
|------|----------|--------|-------|
| [#33101](https://github.com/ggml-org/llama.cpp/issues/33101) | 严重 | 开放 | 使用 `--moe-cache-mib` 时 Inkling-2-Mini 会崩溃。可能由 MoE 缓存管理不当引起。 |
| [#33099](https://github.com/ggml-org/llama.cpp/issues/33099) | 高 | 开放 | Raon-1-mini 模型报告张量数量错误（731 vs 预期 736）。可能导致加载失败。 |
| [#32776](https://github.com/ggml-org/llama.cpp/issues/32776) | 高 | 开放 | 在 CUDA 上，Qwen3.5（Gated DeltaNet 混合型）的草稿模型伪解码速度慢约 2.2–2.4 倍。非混合基线仅损失 10–18%。 |
| [#32918](https://github.com/ggml-org/llama.cpp/issues/32918) | 中等 | 开放 | `convert_hf_to_gguf.py` 无法正确检测 Qwen3.8-27B 的张量数量。 |
| [#33132](https://github.com/ggml-org/llama.cpp/issues/33132) | 中等 | 开放 | 多 GPU 跨设备输入拷贝触发重复 `cudaGetDeviceProperties` 调用（约 8 倍性能下降）。 |
| [#31547](https://github.com/ggml-org/llama.cpp/issues/31547) | 中等 | 开放 | SYCL 解码在 Xe3（Panther Lake）上除非设置 `GGML_SYCL_USE_ASYNC_MEM_OP=0`，否则会卡死。 |

> ✅ **近期合并的修复**：  
> - CDNA MFMA bf16 向量类型修复（PR #33086）  
> - Vulkan RDNA1 错误分类修复（PR #33123）  
> - CPU argsort NaN 排序修复（PR #32408）

---

### **6. 对应用开发者的意义**  
- **立即升级至 `v1.1.0`**，并将代码从 `llama_batch` 迁移到 `llama_batch_ext` —— 此为破坏性变更。  
- 利用 **DFlash2** 加速 Inkling-2-Mini 及类似模型的伪解码，明确使用 `--spec-type draft-dflash2`。  
- **多 GPU 部署** 时，若可能请避免使用 `-ot` 覆盖，直到 PR #33132 修复——否则将引发严重的 CPU 性能瓶颈。  
- 使用 `--moe-cache-mib` 时谨慎对待 **Inkling-2-Mini** —— 已知在某些条件下存在不稳定问题（#33101）。  
- 在支持硬件上考虑启用 **FP8 与 NVFP4 量化**（通过 PRs #28898、#29791），以降低内存占用并提升推理速度。  
- 若部署于 **Intel Arc B 系列或 Haiku** 系统，请预期部分或实验性支持——生产环境前务必验证稳定性。

> 🔗 **关键资源**：  
> - [GitHub 发布 v1.1.0](https://github.com/ggml-org/llama.cpp/releases/tag/v1.1.0)  
> - [AGENTS.md 重写指南](https://github.com/ggml-org/llama.cpp/pull/33157)  
> - [模型转换故障排查](https://github.com/ggml-org/llama.cpp/issues/32918)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-27**

---

### **1. 今日亮点**  
最新发布的 `v0.40.19-rc0` 在 Inkling-2 的短上下文推理中带来了关键性能提升，并减少了 MLX 的 Engram 历史缓冲区内存开销。然而，多个高严重性稳定性问题浮现——特别是针对 DGX Spark 上的 GPU 内存管理（OOM）、CUDA 环境下 RTX 5090 初始化失败，以及 JSON 模式解析崩溃——凸显出在新硬件和模型扩展方面仍面临持续挑战。

---

### **2. 发布与破坏性变更**  
- **`v0.40.19-rc0`**：发布包含关键优化：  
  - ✅ 通过 `inkling2` 改进，加速短历史记录、草稿提议和对话快照生成 ([#19881](https://github.com/ollama/ollama/pull/19881))  
  - ✅ MLX 运行器中压缩 Engram 历史缓冲区 ([#19913](https://github.com/ollama/ollama/pull/19913))  
  - ✅ 升级 `llama-server` 至 `b12701`，修复长对话中的 `GGML_ASSERT(s2 <= uint32_t::max())` 错误 ([#19916](https://github.com/ollama/ollama/pull/19916))  

> ⚠️ **迁移提示**：从 `0.40.17` 升级至 `0.40.18` 的用户可能会遇到 JSON 模式处理退化问题（`Unexpected empty grammar stack`），以及 Metal/OOM 错误被静默抑制为 HTTP 200 响应 ([#19918](https://github.com/ollama/ollama/issues/19918), [#19934](https://github.com/ollama/ollama/issues/19934))。这些问题已在 PR [#19936](https://github.com/ollama/ollama/pull/19936) 及相关修复中解决。

---

### **3. 新模型与硬件支持**  
- **Inkling-2-Mini 的 CUDA 后端**：新增对 NVIDIA GPU 上的 NVFP4 激活和张量核心优化专家的支持 ([#19909](https://github.com/ollama/ollama/pull/19909))。  
- **MLX 运行器增强**：  
  - 支持 `mlx-community/Inkling-2-Mini-4bit` 中 `embed_tokens` 和 `lm_head` 的 `int4 affine` 量化 ([#19928](https://github.com/ollama/ollama/pull/19928))  
  - 通过分块决策协议新增 PPLX Decider v1.3 支持 ([#19734](https://github.com/ollama/ollama/pull/19734))  
- **Ascend NPU（CANN）**：新增华为 Ascend NPU 的构建选项与设备发现功能 ([#19732](https://github.com/ollama/ollama/pull/19732))，为未来在 CANN 平台上的 GGUF 推理铺路。  
- **新模型请求**：提议引入腾讯 WePocketModel（WePM），一款支持文本/图像输入、嵌入向量及结构化推理的多模态 2B/4B 模型 ([#19920](https://github.com/ollama/ollama/issues/19920))。

---

### **4. 性能与优化**  
- **Inkling-2**：通过优化内部状态处理，实现短历史记录与草稿提案生成的速度提升 ([#19881](https://github.com/ollama/ollama/pull/19881))。  
- **MLX 内存效率**：通过压缩数据结构，减少 Engram 历史缓冲区的内存占用 ([#19913](https://github.com/ollama/ollama/pull/19913))。  
- **VRAM 资源统计**：改进 MoE/草稿模型跨设备内存使用情况的追踪能力 ([#19632](https://github.com/ollama/ollama/pull/19632))。  
- **Token 指标日志**：支持按请求开启推断指标（每秒 token 数、延迟）的日志记录，输出至 `metrics.jsonl` 以提升可观测性 ([#19869](https://github.com/ollama/ollama/pull/19869))。

---

### **5. 稳定性与回归问题**  
| 问题 | 严重性 | 影响 | 修复状态 |
|------|----------|--------|------------|
| [#19439](https://github.com/ollama/ollama/issues/19439) | 严重 | Windows + RTX 5090：工具调用时运行器断连 → HTTP 500/tokenize | 待处理 |
| [#19879](https://github.com/ollama/ollama/issues/19879) | 严重 | DGX Spark：`inkling-2-mini` 导致 OOM 与系统冻结 | 已关闭（上游修复待定） |
| [#19934](https://github.com/ollama/ollama/issues/19934) | 高 | Metal OOM → 返回空体的 HTTP 200 | 已修复于 [#19936](https://github.com/ollama/ollama/pull/19936) |
| [#19918](https://github.com/ollama/ollama/issues/19918) | 高 | JSON 模式加载中途失败 → 返回空体的 HTTP 200 | 已修复于 [#19936](https://github.com/ollama/ollama/pull/19936) |
| [#19921](https://github.com/ollama/ollama/issues/19921) | 高 | `CUDA_VISIBLE_DEVICES` 错误路由 RTX 5090 → 仅 CPU 推理 | 待处理 |
| [#19915](https://github.com/ollama/ollama/issues/19915) | 中等 | 长对话中出现 `GGML_ASSERT(s2 <= uint32_t::max())` | 通过升级 llama.cpp 修复 ([#19916](https://github.com/ollama/ollama/pull/19916)) |

> 🔴 **严重警告**：多名用户报告从 `0.34.4` 升级至 `0.40.18` 后，DGX Spark 出现不稳定现象，甚至影响稳定模型 —— **请勿在生产环境使用，直至问题解决** ([#19927](https://github.com/ollama/ollama/issues/19927))。

---

### **6. 对应用开发者的启示**  
- **启用 `OLLAMA_LOG_METRICS=1`** 以采集每请求的 token 吞吐量与延迟数据——这对代理系统的基准测试与成本建模至关重要。  
- **避免在 macOS/Metal 或 Windows/RTX 5090 上使用 `0.40.18`**，因其存在静默失败模式与 OOM 问题；建议使用 `0.40.17` 或等待 `v0.40.19` 发布。  
- **谨慎处理返回空体的 `HTTP 200` 响应**——这可能表示流式解码失败（如 GPU OOM），而非成功；建议使用 `--stream` 并监控 SSE 错误。  
- **注意文档块更严格的验证规则**：`/v1/messages` 现在会拒绝不支持的 `document` 类型并返回 `400`，因此请勿在 `document` 块中发送原始文本——应使用 `text` 替代 ([#19926](https://github.com/ollama/ollama/pull/19926))。  
- **预留模型特有异常处理逻辑**：`qwen3.8-flash-next` 在 MLX 上表现出无限制的前缀缓存增长（每提示约 0.6 GiB），建议设置 `OLLAMA_KEEP_ALIVE=-1` 或限制上下文长度。  

> 📌 **实用技巧**：对于视觉模型如 `qwen3-vl`，避免在提示中包含 `[img-` 字符串，除非正确转义——否则会触发误判的图像占位符检测 ([#19912](https://github.com/ollama/ollama/pull/19912))。

---  
*数据来源：[github.com/ollama/ollama](https://github.com/ollama/ollama)*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

### **LiteLLM 简报 — 2026-11-27**

#### **1. 今日亮点**
LiteLLM 生态系统持续快速演进，最新发布 `v1.113.0-dev.1` 版本聚焦安全与供应链完整性，通过 Cosign 对 GitHub Actions 进行验证。关键进展包括修复 `/v1/messages` 流式回退行为的缺陷、优化路由部署的 Prometheus 指标，并持续推进 MCP（模型控制平面）堆栈的稳定性改进——尤其关注冷启动延迟和有状态会话限制问题。在可审计性和合规性方面也日益重视，提议默认强制使用不可变用户标识符。

#### **2. 发布与破坏性变更**
- **`v1.113.0-dev.1`**（最新开发版）：  
  - 引入基于 Cosign 的 Docker 镜像签名验证增强功能。  
  - 安全优先：需显式验证发布来源，命令如下：  
    ```bash
    cosign verify \
      --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main \
      --certificate-oidc-issuer https://token.actions.githubusercontent.com \
      ghcr.io/berriai/litellm:v1.113.0-dev.1
    ```
  - [GitHub 发布页](https://github.com/BerriAI/litellm/releases/tag/v1.113.0-dev.1)

- **LTS 更新**：`v1.108.19`（LTS）已发布，包含稳定性补丁。  
  - 使用 `ghcr.io/berriai/litellm:lts` 以保持最新稳定补丁版本。  
  - 验证命令如下：  
    ```bash
    cosign verify \
      --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main \
      --certificate-oidc-issuer https://token.actions.githubusercontent.com \
      ghcr.io/berriai/litellm:lts
    ```

> ⚠️ **迁移提示**：依赖 `lts` 标签的用户应确保其 CI/CD 流水线从 `ghcr.io/berriai/litellm:lts` 拉取镜像，而非硬编码版本。

#### **3. 新模型与硬件支持**
- **新增 Inference.net 提供商** (#54787)：  
  - 原生集成 Inference.net 作为新的 LLM 提供商。  
  - 包含计费映射条目以支持定价追踪。  
  - *注意*：函数调用支持由文档推断；尚未通过 `/v1/models` 暴露。  
  - [PR #54787](https://github.com/BerriAI/litellm/pull/54787)

- **Bedrock Converse 工具模式修复** (#54561)：  
  - 修复工具模式重写问题，避免 Bedrock 与 Vertex AI 间跨提供方对话中断。  
  - 解决工具缺少 `required` 参数时触发 400 错误的问题。  
  - [问题 #54561](https://github.com/BerriAI/litellm/issues/54561)

#### **4. 性能与优化**
- **流式响应效率**：  
  - PR #54789 与 #54790 修复取消背景流导致的内存泄漏，防止客户端断开后读取流无限滞留。  
  - 显著提升高并发下长周期代理服务的性能表现。  
  - [PR #54789](https://github.com/BerriAI/litellm/pull/54789)，[PR #54790](https://github.com/BerriAI/litellm/pull/54790)

- **冷启动延迟降低**：  
  - PR #54497 改进 MCP 服务器重载逻辑，即使 `updated_at` 为 `NULL` 也复用未变更的服务器实例，显著缩短冷缓存构建时间。  
  - 解决初始语义搜索（`/mcp/proxy/search_tools`）期间出现的 504 网关超时问题。  
  - [PR #54497](https://github.com/BerriAI/litellm/pull/54497)

#### **5. 稳定性与回归问题**
| 严重程度 | 问题 | 状态 | 影响 |
|--------|------|--------|--------|
| 🔴 关键 | `/v1/messages` 流式返回 200 + 错误块，若回退失败于内容前（#38610） | 开放 | 流式客户端接收畸形 SSE 数据包 |
| 🔴 关键 | `validate_environment()` 触发 `chatgpt/` 与 `github_copilot/` 模型的 OAuth 设备登录（#54763） | 开放 | 在无头环境中运行脚本时中断 |
| 🟡 高 | `trim_messages()` 破坏工具调用关系（#54442） | 开放 | 代理工作流中上下文完整性丢失 |
| 🟡 中等 | Bedrock 守卫钩子复用 `api_key` 作为承载令牌，与 BYOK 路由冲突（#37872） | 已关闭 | 存在安全配置风险 |
| 🟡 中等 | Presidio 守卫持有全局锁跨越多个 HTTP 请求（#47579） | 开放 | 高负载下存在线程竞争风险 |

> ✅ **修复进行中**：PR #54789 与 #54790 已解决流式资源泄漏问题。目前尚无针对 OAuth 触发问题的已知修复。

#### **6. 对应用开发者的意义**
- **安全与合规性**：通过设置 `LITELLM_ENFORCE_SAFETY_IDENTIFIER=TRUE`（Issue #14505）强制不可变 `user_id` 归属——对审计就绪系统至关重要。
- **代理可靠性**：升级至修复 `trim_messages()` 保留工具调用/响应链的版本（Issue #54442），避免工具调用链断裂。
- **生产就绪**：生产环境优先使用 `lts` 镜像；除非测试新功能，否则避免使用 `dev` 标签。
- **可观测性**：利用新增的 Prometheus 指标监控部署路由结果（Issue #53040）及成员团队预算（Issue #45578），实现细粒度成本追踪。
- **规避陷阱**：若使用 `chatgpt/` 或 `github_copilot/` 模型，在非交互式上下文中勿调用 `validate_environment()` 或 `supports_response_schema()`——这些操作现会意外触发 OAuth 流程。

> 💡 **实用建议**：对于代理框架，仅在通过存储令牌或环境变量完成认证后，再使用 `litellm.supports_response_schema()` 验证模型路由配置。

---  
*简报数据截至 2026-11-27，来自 GitHub。实时更新请关注 [LiteLLM Issues](https://github.com/BerriAI/litellm/issues) 与 [PRs](https://github.com/BerriAI/litellm/pulls)。*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-27**

---

### **1. 今日亮点**  
Unsloth 持续推进激进的优化工作，针对 Apple Silicon 上的 MLX 修复了关键问题（LFM3 崩溃、启动竞争条件），并显著提升了 Studio 的内存估算与模型加载逻辑的稳定性。通过 `offload_layers` 实现逐层微批处理的 GPU 卸载效率提升，新增对 PrismML 的 PQ2_0/PTQ1_0 GGUF 量化格式的支持，使多样化的推理负载能够更深度地利用硬件资源。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告任何内容。*  
无新版本发布，亦无破坏性 API/配置变更。当前测试版仍为 `0.1.925-beta`。

---

### **3. 新模型与硬件支持**  
- ✅ **PrismML GGUF 量化支持**：新增对 `PQ2_0`（GGML 类型 142）和 `PTQ1_0`（GGML 类型 143）的实验性支持，对于通过 Studio 内置的 `llama.cpp` 高效运行 Ternary-Bonsai-2.5-27B 变体至关重要。  
  🔗 [PR #19750](https://github.com/unslothai/unsloth/pull/19750)  
- ✅ **AMD XDNA NPU 支持扩展**：已确认对旧款 Ryzen AI 100/200 系列 NPU 的功能请求（#18092）——表明未来路线图将拓展至 XDNA 2+ 平台之外。  
  🔗 [Issue #18092](https://github.com/unslothai/unsloth/issues/18092)  
- ✅ **ModelScope 镜像映射扩展**：将 Hugging Face → ModelScope 别名映射覆盖范围扩展至完整厂商组织（如 `zai-org/GLM-5.3` → `ZhipuAI/GLM-5.3`），提升对区域优化模型的访问能力。  
  🔗 [PR #19883](https://github.com/unslothai/unsloth/pull/19883)

---

### **4. 性能与优化**  
- 🚀 **逐层卸载（`offload_layers`）**：新 PR 引入按微批次的逐层切换机制，在梯度累积步骤中最多减少 **2× 每步冗余内存拷贝**，显著提升高批量下的吞吐量。  
  🔗 [PR #19808](https://github.com/unslothai/unsloth/pull/19808)  
- ⚡ **扩散模型加速的 LoRA 折叠**：支持按加载合并 LoRA 选项，实现 **约 18% 更快的渲染速度**（在 DGX Spark 上中位数从 3.145 秒降至 2.559 秒），可通过 `UNSLOTH_H3_IMAGE_BATCHED=1` 选择启用。  
  🔗 [PR #19868](https://github.com/unslothai/unsloth/pull/19868)  
- 📈 **图像批量调度重构**：引入并发感知的批量策略，基于实时负载与形状分析共享流水线，而非采用统一家族规则，有效提升混合尺寸图像请求下的 GPU 利用率。  
  🔗 [PR #19837](https://github.com/unslothai/unsloth/pull/19837)

---

### **5. 稳定性与回归问题**  
- ❌ **Apple Silicon MLX 崩溃（LFM3）**：在 tier 510 Mac 上因后台 Hub 读取与 MLX 硬件检查之间的竞争条件，偶发 `huggingface_hub _ModuleLock 死锁` 与 `LanguageModelOutput TypeError`。通过预解析 `model_info` 已修复。  
  🔗 [Issue #19749](https://github.com/unslothai/unsloth/issues/19749) | [PR #19770](https://github.com/unslothai/unsloth/pull/19770)  
- ❌ **Windows 集成显卡内存误估**：RTX Spark N1X（ARM64）因系统提交值读取错误，错误显示约 109 GiB 可用内存。现已根据实际 Windows 提交费用进行限制。  
  🔗 [PR #19881](https://github.com/unslothai/unsloth/pull/19881)  
- ❌ **Studio 内存估算器误导性警告**：`estimate-memory` 忽略 `-ot` / `n_cpu_moe` MoE 专家卸载设置，导致触发虚假的“超出 GPU 内存”警告。  
  🔗 [Issue #19795](https://github.com/unslothai/unsloth/issues/19795)  
- ❌ **CUDA 13.0 ptxas Blackwell 冲突**：Triton 的 `ptxas-blackwell` 覆盖项在导入 `flashinfer` 时可能与系统 PATH 冲突。现若存在则予以保留。  
  🔗 [PR #19882](https://github.com/unslothai/unsloth/pull/19882)

---

### **6. 对应用开发者的启示**  
在 Unsloth 上构建代理系统的开发者，现在可期待在 Apple Silicon 与 AMD APU 平台上获得更好的稳定性，尤其是在使用 PQ2_0/PTQ1_0 等自定义量化模型时。新的 `offload_layers` 微批处理策略可支持更大规模的高效训练。对于生产部署，**请在 Ada GPU 上启用 `UNSLOTH_DIFFUSION_INT8_CUTLASS=0` 以避免性能下降，直至补丁发布**。仅当延迟敏感时才启用 `UNSLOTH_H3_IMAGE_BATCHED=1`。同时需注意沙箱工具链风险——近期问题凸显了通过 MCP 引擎意外访问主机的风险；部署 LLM 代理前务必验证安全上下文。  

> 💡 *实用技巧*：关注 `UNSLOTH_DIFFUSION_ROCM_W8A8_TRAIN=1`，可提前体验 ROCm 上的 int8 LoRA 训练——对低内存环境极具价值。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*