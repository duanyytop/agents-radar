# AI 基础设施日报 2026-11-28

> 生成时间: 2026-11-28 04:11 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-11-28**

---

### **1. 生态概览**  
AI推理与服务生态正进入高度专业化和硬件感知优化的新阶段，由NVIDIA Blackwell（SM120）的发布、下一代NPU/加速器支持，以及对确定性行为有高要求的智能体工作负载共同驱动。各项目在发展方向上逐渐分化：vLLM与SGLang在高吞吐、低延迟推理方面通过深度GPU内核调优持续突破；llama.cpp保持广泛的硬件覆盖，依赖轻量级后端；Ollama注重开发者体验，但在生产级部署中面临稳定性挑战；LiteLLM正逐步成为主流的LLM网关，成本控制与路由精度持续增强；Unsloth则在微调与本地运行时效率方面崭露头角，尤其适用于边缘与异构环境。

---

### **2. 活动对比**

| 项目       | 开放问题数（估算） | 近24小时合并的PR数 | 发布状态         |
|---------------|--------------------|------------------------|-------------------------|
| **vLLM**      | ~3,200             | 5                      | `v0.34.0rc1.dev1129+gc32251b5d`（稳定版） |
| **SGLang**    | ~1,800             | 6                      | 无新版本发布；预1.0稳定化中 |
| **llama.cpp** | ~2,600             | 4                      | `b12823`（已修复），`b12819`，`b12818` |
| **Ollama**    | ~1,700             | 2                      | `0.40.18`中存在严重回归；暂无新版本发布 |
| **LiteLLM**   | ~1,400             | 4                      | `v1.108.20`（LTS）；`v1.110.2`含回归问题 |
| **Unsloth**   | ~1,200             | 6                      | 无新版本发布；功能开发活跃 |

> 🔍 *洞察*：尽管可见活动较低，**SGLang**与**Unsloth**在基础架构层面展现出强劲势头——SGLang聚焦分布式系统，Unsloth则专注于训练与运行时可移植性。

---

### **3. 模型支持竞赛**

| 新模型 / 架构       | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------------------|------|--------|-----------|--------|---------|---------|
| **Inkling 2 Mini**            | ✅（SM120 MXFP8，融合内核） | ✅（Mooncake状态租用） | ✅（MoE支持） | ⚠️（报告`inkling-2-mini`崩溃） | ❌ | ✅（GGUF打包，attn_qkv_gate） |
| **Inkling 2 Loop**            | ❌ | ✅（Mooncake集成） | ✅（新增支持） | ❌ | ❌ | ✅ |
| **Qwen3.8-Flash-Next-Quark-MXFP4** | ⚠️（ROCm追踪中） | ❌ | ❌ | ❌ | ❌ | ❌ |
| **SenseNova Loop**            | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **DeepSeek-V4.1-Flash**       | ⚠️（SM120解码问题） | ✅（CXL支持的Engram表） | ❌ | ⚠️（`0.40.18`中崩溃） | ❌ | ❌ |
| **Claude 5.x (Bedrock Mantle)** | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |

> 🏆 **胜出者**：**SGLang** 在前沿模型与内存架构集成（Mooncake、CXL）方面领先；而**Unsloth** 则在GGUF专属模型支持与LoRA灵活性方面占据主导地位。

---

### **4. 性能前沿**

| 关注领域                 | vLLM                                  | SGLang                                 | llama.cpp                          | Ollama                         | LiteLLM                        | Unsloth                         |
|----------------------------|---------------------------------------|----------------------------------------|------------------------------------|--------------------------------|--------------------------------|---------------------------------|
| **KV缓存优化**  | ✅ 融合大小管理、IPC计账       | ✅ 分布式KVCache、AOT Cartridges | ❌ 内存损坏（Vulkan）     | ❌ 激进淘汰（约64k）  | ✅ 成本感知的token追踪   | ✅ 动态单元加权估计 |
| **批处理与推理**   | ✅ 批次无关、推测解码 | ✅ 张量并行、MoE路由    | ✅ 协作式GDN内核         | ❌ 冗余重分词   | ✅ 流重组修复       | ✅ 混合长度批处理 |
| **量化**           | ✅ MXFP8、NVFP4模拟、MoE支持 | ✅ INT8/FP8 KPool缓存（Ascend）        | ✅ 每张量尺度（FP8/NVFP4）   | ❌ 无显式量化控制    | ✅ token计数准确性        | ✅ 无需bitsandbytes的4位QLoRA |
| **分布式服务**    | ⚠️ 有限（通过TP）                   | ✅ ✅ 分布式KVCache、混合基数 | ❌ 未设计用于大规模          | ❌ 无多节点支持        | ✅ 跨服务商路由            | ⚠️ 未来将支持卸载优化器状态 |
| **内核级调优**    | ✅ SM120 MXFP8、融合上投影    | ✅ SM12x/GB10注意力、共享内存修复 | ✅ Vulkan协作矩阵       | ❌ 无                         | ✅ Prometheus可观测性    | ✅ 压缩GGUF内核（融合）   |

> 📈 **趋势**：性能前沿正转向**硬件感知内核**（SM120、Mooncake、CXL）与**分布式内存管理**，vLLM与SGLang在两者中均处于领先地位。

---

### **5. 层定位**

| 项目       | 主要层级                  | 次要角色                             | 核心差异点 |
|---------------|--------------------------------|--------------------------------------------|--------------------|
| **vLLM**      | **推理引擎**           | 服务抽象、批处理              | 高吞吐，原生支持SM120优化 |
| **SGLang**    | **分布式推理引擎** | 智能体编排、内存卸载 | 下一代内存集成（CXL、Mooncake） |
| **llama.cpp** | **本地运行时 / 后端**    | 跨平台推理（GPU/CPU）         | 依赖极小，Vulkan/Metal稳定性佳 |
| **Ollama**    | **LLM网关 + 本地运行时** | 开发者体验、模型仓库                    | 易用性牺牲了稳定性 |
| **LiteLLM**   | **LLM网关 / 编排** | 成本追踪、服务商路由            | 统一API搭配细粒度计费控制 |
| **Unsloth**   | **微调 + 本地运行时** | 训练效率、GGUF支持          | 无需`bitsandbytes`的4位QLoRA，Apple Silicon性能优异 |

> 🧩 **战略洞察**：vLLM/SGLang 正日益成为生产推理的**高性能骨干**；LiteLLM 已成为**多服务商路由的事实标准**；Unsloth 对于**边缘/微调工作流至关重要**。

---

### **6. 趋势信号**

1. **硬件专业化正在加速**  
   - SM120（Blackwell）优化已成为vLLM与SGLang的核心。
   - Mooncake（NPU内存）、CXL及dev-dax支持表明正深入集成**下一代内存架构**。

2. **确定性与可复现性已成为不可妥协的要求**  
   - vLLM的`batch_invariance`（#27433）、Unsloth的`@skill`缓存修复，以及LiteLLM的token计数准确性，均反映出对**可预测、可复现的智能体行为**需求日益增长。

3. **智能体工作负载正驱动系统设计**  
   - SGLang的分布式KVCache、vLLM的推测解码、Unsloth的混合批处理推理，均为**长周期、有状态智能体**量身定制。

4. **网关稳定性是瓶颈**  
   - Ollama在`0.40.18`中的不稳定性凸显出**开发者友好工具可能损害生产可靠性**——对企业级应用构成警示。

5. **开源 ≠ 生产就绪**  
   - 尽管SGLang与vLLM等项目快速成熟，但**关键回归问题（如CUDA图、内存泄漏）依然存在**，表明即使成熟项目也需严格验证。

> 🔮 **给开发者的建议**：  
> - 在Blackwell/GB10上进行高吞吐、确定性推理，请使用**vLLM或SGLang**。  
> - 若需多服务商路由并实现精确成本追踪，选择**LiteLLM**。  
> - 如需在ARM/ROCm上基于GGUF进行4位QLoRA与微调，优先采用**Unsloth**。  
> - **避免在生产环境使用Ollama `0.40.18`**，直至稳定性修复上线。  
> - 关注**llama.cpp从`b12823`起的PR**，以确保大上下文场景下的稳定性。

---  
*生成时间：2026-11-28 | 数据来源：GitHub仓库与问题追踪系统*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-11-28**

---

### **1. 今日亮点**  
vLLM 项目持续加速推进 **批处理无关推理（batch-invariant inference）**，重大功能请求 #27433 正在快速升温，评论数已达 107 条，社区参与度持续提升。针对 **Blackwell GPU（SM120）** 的关键性能与稳定性优化工作正在进行中，涵盖 Inkling 2 Mini 的优化以及 DeepSeek-V4.1-Flash 解码吞吐量问题的修复。值得注意的是，今日落地了两项高影响力 PR：一项实现了 SM120 上预填充专家模块对原生 MXFP8 的支持（#70465），另一项通过扩大验证窗口提升了推测解码效率（#70253）。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告任何内容。*  
无新版本发布或破坏性 API/配置变更。最新稳定版本仍为 `v0.34.0rc1.dev1129+gc32251b5d`。开发者应继续关注 `main` 分支，以获取即将上线的功能，如 Rust 前端默认启用（#68784）和增强的渲染指纹功能（#68940）。

---

### **3. 新模型与硬件支持**  
- **SM120（Blackwell）优化**：在 RTX PRO 6000 Blackwell / RTX 5090 平台取得重大进展，已实现 Inkling 2 Mini 预填充专家模块对原生 MXFP8 的支持（#70465），并完成融合核函数优化（#70466）。  
- **Inkling 2 Mini**：完整优化路线图正在跟踪中；支持 128 行分块（tile）及在 SM120 上的块缩放 E4M3 MMA。  
- **ROCm（gfx950 / MI355X）**：正在对 Qwen3.8-Flash-Next-Quark-MXFP4（`amd/Qwen3.8-Flash-Next-Quark-MXFP4`）进行性能追踪 —— 参见 #59575。  
- **量化格式**：NVFP4 模拟现已通过回退逻辑在 pre-SM89 GPU 上编译成功（#70464）；MXFP4 MoE 支持正由 kimi SIG 推进。

---

### **4. 性能与优化**  
- **Inkling 2 Mini（SM120）**：  
  - 原生使用 MXFP8 将 RTX 5090 上的预热单请求 TTFT 提升至 **3,325 tokens/sec**（#70465）。  
  - 融合上投影 + 混合操作减少一半 FP32 写入，显著降低内存带宽压力（#70466）。  
- **推测解码**：  
  - 融合 GDN MTP 解码核现在支持 **16 token 验证窗口**，彻底消除对较慢 Triton delta-rule 路径的降级回退（#70253）。  
  - 为上下文感知的稀疏草稿头引入张量并行（#70255），实现跨多设备扩展能力。  
- **通用效率优化**：  
  - 通过 `maybe_pull_model_tokenizer_for_runai` 减少冗余 Hugging Face 下载（#70467）。  
  - 在 KV 缓存大小计算中纳入 IPC 工作区，防止过度分配（#68138）。

---

### **5. 稳定性与回归问题**  
- **严重级别**：  
  - **DeepSeek-V4.1-Flash on SM120**：启用 `--enforce-eager` 后解码吞吐量极低，CUDA Graph 完全不可用 —— 需优先修复（#56892）。  
  - **Inkling 2 Prompt 重复问题**：批量中相同提示在启用前缀缓存时，运行间输出不一致（#70043）。  
- **高严重级别**：  
  - **服务中的 LoRA 非确定性行为**：即使输入完全相同，`lora_shrink/lora_expand` 路径仍导致运行间输出差异，影响模型一致性（#50602）。  
  - **Triton FP8 在 SM89 上的偏移错误**：由于 `e4m3` 转换中双重舍入，导致 FP8 KV 缓存值存储位置错位一步（#69199）。  
- **修复中**：  
  - PR #70462 解决了允许令牌处理过程中的 logit bias 竞态条件（#70415）。  
  - PR #70364 防止调度器在权重更新不完整后恢复（#70364）。

---

### **6. 对应用开发者的启示**  
- **对于智能体与代理类负载**：尽早启用 `batch_invariance` —— 这对强化学习对齐与确定性行为至关重要（#27433）。建议使用 Inferact 提供的零偏差 RL 配方（#66550）以实现端到端可复现性。  
- **对于多模态与工具调用应用**：预期通过 `vllm.Render` 实现更优的预处理卸载，未来还将支持会话感知路由（#65503, #48049）。使用 `chat_template_kwargs["tools"]` 时需谨慎 —— 可能覆盖服务器定义的工具，引发 HTTP 500 错误（#70385）。  
- **对于 Blackwell 平台上的生产部署**：请密切监控 SM120 性能表现 —— 尽管优化持续落地，但 DeepSeek-V4.1-Flash 和 CUDA Graph 捕获仍存在深层问题（#56892）。  
- **对于高吞吐系统**：充分利用融合核（Inkling 2、GDN MTP），并留意 `vllm-rs` 上线时机（#68784），以获得更低延迟渲染与更优控制流。

> 🔗 [查看问题](https://github.com/vllm-project/vllm/issues) | [查看 PR](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 消息简报 – 2026-11-28

---

### **1. 今日重点**

SGLang 继续积极推进 SGLang 1.0 的稳定性，修复了不稳定的 CI 流水线、多模态与分布式负载中的持续崩溃问题，并对 NVIDIA SM12x/GB10 硬件上的 MoE 与注意力核函数进行了显著性能优化。针对代理工作负载的分布式 KV 缓存系统已取得重大进展，同时新增对基于 Mooncake 的 Mamba 状态租赁以及 CXL 支持的 Engram 表的支持，标志着与下一代内存架构的深度集成。

---

### **2. 发布与破坏性变更**

- **无**  
  过去 24 小时内未发布新版本或破坏性变更。项目仍聚焦于预 1.0 特性的稳定化。

> 🔗 *SGLang 1.0 发布追踪*：[#50045](https://github.com/sgl-project/sglang/issues/50045) — 从 0.5.x 升级可能需要变更；请参阅 [升级说明](#upgrade-notes)。

---

### **3. 新模型与硬件支持**

- **Mooncake 内存集成**：PR #53586 在 Mooncake 查找过程中引入仅租用的深层 Mamba 状态获取机制，提升了 Inkling-2-Mini 等模型的缓存效率。
- **CXL/dev-dax 支持的 Engram 表**：PR #53686 实现了 DeepSeek-V4.1 的 188.8 GiB 静态 FP8 Engram 表通过文件或 CXL（dev-dax）进行后备，有效缓解了 GPU 内存压力。
- **Ascend NPU 量化支持**：PR #53662 为 Ascend（C8 量化）上的 GLM-5.3-Flash 添加了 INT8 与 FP8 KPool 索引缓存支持，实现 NPUs 上的高效推理。
- **Hunyuan V4 Flash Attention**：PR #53685 利用集群 CUDA 核函数优化了 SM90 架构上小批量 iHC 后/前/RMSNorm 操作。

> 🔗 [PR #53586](https://github.com/sgl-project/sglang/pull/53586), [PR #53686](https://github.com/sgl-project/sglang/pull/53686), [PR #53662](https://github.com/sgl-project/sglang/pull/53662), [PR #53685](https://github.com/sgl-project/sglang/pull/53685)

---

### **4. 性能与优化**

- **SM12x/GB10 注意力优化**：PR #53439 发现 `inkling2` 在高路由负载（>2,750 个 ID）下存在共享内存溢出问题；修复待定。此问题影响 DGX Spark 集群的吞吐量。
- **MoE 核函数效率**：PR #48072 将 TP-MoE gather 中的填充行路由至“无专家”状态 —— 减少解码阶段的无效计算。
- **FlashInfer 升级**：PR #51964 将 FlashInfer 升级至 `0.7.5.post1`，包含批处理 GEMM 修复，显著提升 trtllm-gen 性能。
- **KV-Cartridge AOT 缓存**：PR #53151 提出在 RadixAttention 中通过 KV-Cartridges 实现提前编译（AOT）固定前缀缓存 —— 支持重复前缀的确定性、低延迟复用。
- **解码过程中的轨迹回放**：PR #52435 增加了正常解码期间的轨迹回放支持 —— 对调试模型偏差与评分极具价值。

> 🔗 [PR #53439](https://github.com/sgl-project/sglang/pull/53439), [PR #48072](https://github.com/sgl-project/sglang/pull/48072), [PR #51964](https://github.com/sgl-project/sglang/pull/51964), [PR #53151](https://github.com/sgl-project/sglang/pull/53151), [PR #52435](https://github.com/sgl-project/sglang/pull/52435)

---

### **5. 稳定性与回归问题**

| 严重性 | 问题 | 摘要 | 修复状态 |
|--------|------|--------|-----------|
| 严重 | [#26340](https://github.com/sgl-project/sglang/issues/26340) | CI 自动收集的 CUDA 核心转储；多个测试运行中出现广泛崩溃 | 进行中（390 条评论） |
| 高 | [#42752](https://github.com/sgl-project/sglang/issues/42752) | `PR Test Base/Extra` 中测试不稳定及 CI 基础设施故障 —— 阻碍 PR 验证 | 正在跟踪 |
| 高 | [#52090](https://github.com/sgl-project/sglang/issues/52090) | `/parse_function_call` 触发工具检测器中的灾难性正则回溯 —— 可阻塞事件循环 | 已开放 |
| 中等 | [#53439](https://github.com/sgl-project/sglang/issues/53439) | SM12x 上的 `inkling2`：高路由负载下 `route_metadata` 超出共享内存限制 | 已开放 |
| 中等 | [#53149](https://github.com/sgl-project/sglang/issues/53149) | 混合 SWA + 状态基数缓存因窗口错配导致多轮工作负载中全前缀缺失 | 已开放 |
| 低 | [#53447](https://github.com/sgl-project/sglang/issues/53447) | 错误格式的 `response_format.schema` 返回 HTTP 500 而非 400 | 已开放 |

> 🔗 上述所有问题均处于开放状态并积极讨论；部分问题已有相关 PR 在审查中。

---

### **6. 对应用开发者的影响**

- **预期更严格的错误处理**：SGLang 1.0 将通过显式错误强制配置验证（而非静默变更）。请尽早验证您的配置。
- **避免格式错误的输入**：在 `response_format.schema` 与工具调用检测模式上需谨慎 —— 错误输入可能导致拒绝服务或无限循环（参见 #52090）。
- **利用 AOT 缓存**：对于具有重复提示的代理（如聊天机器人、代码助手），使用 KV-Cartridges（#53151）固定常见前缀，降低延迟。
- **规划分布式扩展**：分布式 KVCache（#21846）与混合缓存调度（#43098）路线图表明，即将支持具备共享状态的大规模代理系统。
- **监控 CI 健康状况**：CI 不稳定（#42752）可能导致合并延迟 —— 建议贡献测试稳定性，或在生产部署中使用稳定分支。

> ✅ 小贴士：谨慎使用 `--enable-prefill-delayer` —— 最近修复（#52466）解决了空闲延迟器挂起问题，但行为仍取决于 DP/TP 配置。

> ✅ 生成时间：2026-11-28 | 来源：[github.com/sgl-project/sglang](https://github.com/sgl-project/sglang)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 消息简报 – 2026-11-28**

---

### **1. 今日重点**  
针对 CUDA 与 HIP 后端的关键修复解决了 `ADD_ID` 启动网格在超过 65,535 个 token 时的长期问题——此前该情况会在 NVIDIA 和 AMD GPU 上引发无效配置错误。Vulkan 性能获得显著提升，重点优化了协作矩阵（GDN）内核；Metal 现在无论批量大小如何，均保持一致的图融合行为。这些更新共同提升了高上下文推理负载下的稳定性与效率。

---

### **2. 发布与破坏性变更**  
- **b12823**：修复了当 token 数量超过 65,535 时，影响 CUDA 与 HIP 后端的 `ADD_ID` 启动网格维度溢出问题 ([#33162](https://github.com/ggml-org/llama.cpp/pull/33162))。  
- **b12819**：在初始化阶段缓存设备类型，消除重复调用 `cudaGetDeviceProperties()` 的开销（每次约 0.7–1 毫秒），降低多 GPU 张量覆盖场景下的额外负担 ([#33142](https://github.com/ggml-org/llama.cpp/pull/33142))。  
- **b12818**：新增对 FP8 与 NVFP4 类型的每张量/通道/专家量化尺度的支持，实现更精确的模型校准 ([#28898](https://github.com/ggml-org/llama.cpp/pull/28898))。

> ✅ *迁移提示*：在多 GPU 上运行大上下文模型的用户应升级至 `b12819+`，以避免因冗余设备查询导致的 CPU 限速调度延迟。

---

### **3. 新模型与硬件支持**  
- **模型**：通过 PR [#32588](https://github.com/ggml-org/llama.cpp/pull/32588) 正式支持 **SenseNova Loop**，一种基于 MoE 架构的新模型，专为高效推理优化。  
- **硬件**：  
  - 增强的 **Vulkan** 后端现可处理空 conv3d 内核，并支持 `pool1d` 的子组着色器，显著提升 Intel Arc B 系列及 Xe2 GPU 上的吞吐量 ([#32860](https://github.com/ggml-org/llama.cpp/pull/32860), [#33221](https://github.com/ggml-org/llama.cpp/pull/33221))。  
  - **Metal**：保持 ADD 链融合与批量大小无关，防止在启用 `GGML_SCHED_DEBUG_REA` 时出现图分配失败 ([#33217](https://github.com/ggml-org/llama.cpp/pull/33217))。  
- **量化**：通过功能请求 [#29058](https://github.com/ggml-org/llama.cpp/issues/29058) 新增对 **Prism PQ2_0（类型 142）** 与 **PTQ1_0（类型 143）** 的实验性支持。

---

### **4. 性能与优化**  
- **Vulkan**：重构 `coopmat2 GDN` 存储回调，启用向量化存储，提升内存带宽利用率 ([#32860](https://github.com/ggml-org/llama.cpp/pull/32860))。  
- **CUDA**：优化 `ADD_ID` 内核启动配置，防止 gridDim.y 溢出，确保大规模执行的稳定性。  
- **Metal**：移除 ADD 融合中依赖批量大小的节点重排序，稳定图调度并降低分配器压力。  
- **SYCL**：引入对不支持的 flash attention 配置（如 f16 K + f8_e4m3 V）的早期拒绝机制，避免静默崩溃，增强可调试性 ([#33213](https://github.com/ggml-org/llama.cpp/pull/33213))。  

> ⚡ *影响*：高上下文 MoE 模型（如 Inkling-2-Mini、Qwen3.6-27B）在各后端上均受益于更低延迟和更高 GPU 利用率。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 修复/临时方案 |
|--------|------|-------|----------------|
| 🔴 高 | `ADD_ID` 在 >65,535 个 token 时失败（CUDA/HIP） | 打开（报告于 #32444） | b12823 中已修复 |
| 🔴 高 | CUDA 图在 RTX 5090 笔记本版（sm_120）上挂起 GPU 通道 | 打开 (#27330) | 使用 `GGML_CUDA_DISABLE_GRAPHS=1` 可缓解 |
| 🟡 中 | 尽管启用 `GGML_VK_DISABLE_COOPMAT`，Intel Arc B 系列仍出现 Vulkan 输出损坏 | 打开 (#31828) | 尚无修复；临时方案有限 |
| 🟡 中 | `--split-mode tensor` 在第二次请求时崩溃（Tesla P100，CUDA） | 打开 (#29466) | v0.4.0-dev 中可复现 |
| 🟡 中 | `logprobs` 在相同请求间结果非确定性（SYCL iGPU + MoE） | 打开 (#31206) | 种子无法锁定结果 |

> 💡 *备注*：多个回归报告涉及复杂的多 GPU 或 MoE 配置——这在生产级代理与 RAG 流水线中常见。

---

### **6. 对应用开发者的意义**  
- **使用 `b12819+`**：若部署含张量覆盖的多 GPU 系统，以避免不必要的 `cudaGetDeviceProperties()` 开销，防止生成速度下降。  
- **避免 `ADD_ID` 网格溢出**：升级至 `b12823`；这对使用深上下文或推测解码的模型至关重要。  
- **谨慎使用 `GGML_VK_DISABLE_COOPMAT`**：尽管可缓解 Intel Arc B 系列的 Vulkan 损坏问题，但可能降低性能；请监控其对实际工作负载的影响。  
- **在 Xe3（Panther Lake）平台启用 `GGML_SYCL_USE_ASYNC_MEM_OP=0`**，直至 #31547 修复完成，以防解码挂起。  
- **监控 SYCL/MoE 环境中的 `logprobs` 确定性**：基于种子的可复现性仍不可靠。  

> 📌 *建议*：对于依赖确定性输出的代理框架（如工具调用、推理链），优先采用 `b12823` 及以后版本构建，并启用 `--seed` 与 `--logprobs` 进行测试。

---  
*本简报数据源自 [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) — 截至 2026-11-28*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-28**

---

### **1. 今日亮点**  
最新发布的 `0.40.18` 版本引发了大量关键的稳定性与正确性问题，尤其影响高端 GPU 系统（如 DGX Spark 及 Apple M5 Pro Mac）。已报告多个回归缺陷，包括内存耗尽、系统冻结、格式错误的 JSON 响应以及错误的令牌处理，目前已有若干 PR 正在修复。最紧迫的问题集中在 MLX 运行器的内存管理、解析器边界情况，以及对无效请求类型的错误处理不当。

---

### **2. 发布与破坏性变更**  
- 近 24 小时内**无新版本发布**。  
- **`0.40.18` 存在严重回归**：多名用户反映从 `0.34.4` 升级至 `0.40.18` 后出现系统级不稳定，包括在 DGX Spark 上崩溃（问题 #19927）以及运行 `inkling-2-mini` 时机器无响应（问题 #19879）。  
- **API 行为变更**：无效请求参数现在返回 HTTP 500 而非 HTTP 400（问题 #19945），破坏了客户端的输入验证逻辑（PR #19954 提出修复方案）。

> 🔗 [问题 #19945](https://github.com/ollama/ollama/issues/19945) | 🔗 [PR #19954](https://github.com/ollama/ollama/pull/19954)

---

### **3. 新模型与硬件支持**  
- 今日**未新增模型**。  
- **DeepSeek 模型请求持续活跃**：用户仍在请求 `deepseek-v4-flash:0731`（问题 #17510）和 `deepseek-v4.1-flash`（问题 #18379）的可下载版本，表明对本地部署灵活性的需求强烈。  
- **硬件相关问题**：  
  - RTX 5090 在双 GPU 系统中无法在 `CUDA_VISIBLE_DEVICES` 下正常初始化（问题 #19921）。  
  - macOS MLX 运行器在 64GB M5 Pro 系统上表现出激进的缓存驱逐行为（问题 #19962）。  
  - RX 5700 XT 上的 Vulkan 性能比上游 `llama.cpp` 低 13 倍（问题 #19747）。

> 🔗 [问题 #19921](https://github.com/ollama/ollama/issues/19921) | 🔗 [问题 #19747](https://github.com/ollama/ollama/issues/19747)

---

### **4. 性能与优化**  
- **MLX 运行器效率低下**：`snapshotWorkspace` 中存在重复计数，导致持久化缓存增长超出可用内存（PR #19964）。  
- **字符串操作效率低下**：图像标记构建使用 O(N²) 的字符串操作，即使小请求也会引发 CPU 高峰（问题 #19885）。  
- **冗余重分词**：`/api/chat` 的截断机制每丢弃一条消息都会重新渲染并重分词完整历史（问题 #19942）。  
- **混合模型效率问题**：MLX 运行器在聊天后续中需重新读取最多 8k 个令牌（问题 #19952）。  
- **解析器优化进行中**：PR #19956 与 #19590 旨在修复 `cogito` 与 `deepseek3` 解析器中 `</think>` 后的空白字符截断问题，提升流式输出的准确性。

> 🔗 [PR #19964](https://github.com/ollama/ollama/pull/19964) | 🔗 [问题 #19885](https://github.com/ollama/ollama/issues/19885) | 🔗 [PR #19956](https://github.com/ollama/ollama/pull/19956)

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 影响 | 修复状态 |
|--------|------|--------|------------|
| 🚨 严重 | `inkling-2-mini` 导致 DGX Spark 崩溃（内存溢出 + CPU 突增） | 系统无响应，需强制重启 | [已关闭](https://github.com/ollama/ollama/issues/19879) |
| 🚨 严重 | 升级至 `0.40.18` 导致多个模型系统冻结 | 完全系统锁定，不限于单一模型 | [开放中](https://github.com/ollama/ollama/issues/19927) |
| 🟡 高 | MLX 前缀缓存在约 64k 令牌时被驱逐（问题 #19819） | 须重新填充整个对话，显著增加延迟 | [开放中](https://github.com/ollama/ollama/issues/19819) |
| 🟡 高 | `max_tokens: 0` 返回 10 个令牌而非空响应 | 破坏下游逻辑，预期为空输出 | [开放中](https://github.com/ollama/ollama/issues/19965) |
| 🟡 中 | 无效 `options` 返回 HTTP 500 而非 400 | 客户端无法验证输入，导致静默失败 | [评审中](https://github.com/ollama/ollama/pull/19954) |

> 🔗 [问题 #19819](https://github.com/ollama/ollama/issues/19819) | 🔗 [问题 #19965](https://github.com/ollama/ollama/issues/19965)

---

### **6. 对应用开发者的启示**  
- **在补丁发布前避免使用 `0.40.18`**：若使用高内存或多 GPU 环境（尤其是 DGX Spark 或 RTX 5090），请回退至 `0.40.17` 或更早版本，以防止系统崩溃。  
- **严格校验输入类型**：由于无效 `options` 会触发 HTTP 500 错误，请在客户端加入健壮的类型检查，不要依赖 Ollama 的错误码。  
- **预期流式行为不一致**：`</think>` 空白处理问题及推理索引错位可能破坏依赖精确令牌级控制的智能体工作流。  
- **密切监控缓存与内存使用**：鉴于 MLX 运行器在超过 64k 令牌后激进地驱逐历史记录，长时间运行的智能体可能意外丢失上下文。  
- **准备应对解析修复**：若构建解析 `cogito`、`deepseek3` 或 `FunctionGemma` 输出的工具，需预期未来版本中流式处理的变更（例如 `</think>` 空白处理）。

> ✅ **可操作建议**：生产环境请将 Ollama 版本固定在 `0.40.17` 或更早版本以确保稳定。关注 PR #19964、#19954、#19956 与 #19961 以获取即将发布的修复。

---  
*摘要生成时间：2026-11-28 | 来源：[github.com/ollama/ollama](https://github.com/ollama/ollama)*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 简报 – 2026-11-28**

---

### **1. 今日重点**  
最新 LTS 版本 `v1.108.20` 在主流服务商中稳定了关键的路由与成本追踪逻辑。关键修复解决了 Gemini 与 Anthropic 集成中的令牌计数不准确问题，而新提交的 PR 提升了 MCP OAuth 的可靠性，并增强了路由部署的 Prometheus 可观测性。一个影响 Gemini 图像使用的严重回归问题已在 `v1.110.2` 中被识别，目前正积极调查。

---

### **2. 发布与破坏性变更**  
- **`v1.108.20` (LTS)**：作为最新稳定版本发布。始终使用 `ghcr.io/berriai/litellm:lts` 以保持更新。  
  🔗 [发布说明](https://github.com/BerriAI/litellm/releases/tag/v1.108.20)  
- **注意**：`lts` 标签现已指向此版本；补丁更新中预计无破坏性变更。

---

### **3. 新模型与硬件支持**  
- **Bedrock Mantle 上的 Claude 5.x**：PR #54946 引入了通过 Rust 实现的 `bedrock_mantle` 提供商对 Claude 模型的原生支持，实现定价与服务功能。该功能可实现更低延迟的路由，并与完整成本追踪能力保持一致。  
  🔗 [PR #54946](https://github.com/BerriAI/litellm/pull/54946)  
- **ElevenLabs 说话人分离**：PR #31324 增加了通过 LiteLLM 支持 `diarize=true` 和多通道说话人分离的语音转文本功能，可准确转录多人对话。  
  🔗 [PR #31324](https://github.com/BerriAI/litellm/pull/31324)

---

### **4. 性能与优化**  
- **流式数据重组修复**：PR #31277 确保 `stream_chunk_builder` 正确使用 *首个* 数据块的元数据，防止流式传输过程中提示令牌计数错误。  
  🔗 [PR #31277](https://github.com/BerriAI/litellm/pull/31277)  
- **令牌计数准确性**：PR #31280 修正了 `token_counter`，使其包含工具函数名称在提示令牌中——此前遗漏但具有实际意义的部分。  
  🔗 [PR #31280](https://github.com/BerriAI/litellm/pull/31280)  
- **成本追踪精度**：PR #31304 确保自定义定价规则在 Vertex AI 透传成本计算中被正确应用，避免因追踪错位导致的超额计费。  
  🔗 [PR #31304](https://github.com/BerriAI/litellm/pull/31304)

---

### **5. 稳定性与回归问题**  
- **严重回归**：`v1.110.2` 重现了一个问题，即 `Gemini 图像模型` 在 `candidatesTokenCount` 外错误报告 `thoughtsTokenCount`，导致账单差异。此问题回退了 `v1.108.10` 中的修复。  
  🔗 [问题 #54804](https://github.com/BerriAI/litellm/issues/54804)  
- **OAuth 竞态条件**：多个 PR (#54812, #54815, #54816) 解决了 MCP 中并发的 OAuth 凭证撤销与重新认证问题，防止过期会话和 UI 不同步。  
  🔗 [PR #54812](https://github.com/BerriAI/litellm/pull/54812), [PR #54815](https://github.com/BerriAI/litellm/pull/54815), [PR #54816](https://github.com/BerriAI/litellm/pull/54816)  
- **UI 性能**：用户报告 LiteLLM UI（`v1.82.x`）存在极端卡顿——此为已知问题，正在 #23005 中跟踪，目前尚无修复计划。

---

### **6. 对应用开发者的启示**  
- **使用 `lts` 镜像**：为避免不稳定，始终拉取 `ghcr.io/berriai/litellm:lts`——这是通往生产环境稳定性的最安全路径。  
- **监控成本准确性**：若使用 Gemini 图像模型或自定义定价，请验证 `prompt_tokens` 与 `usageMetadata.thoughtsTokenCount` 是否与上游账单一致。  
- **安全启用结构化输出**：对于 Anthropic 模型，确保使用 `output_config.format`（GA API）而非旧版 `output_format`。  
- **留意 UI 延迟**：若使用较旧版本（`v1.82.x`+），预计管理仪表板将出现迟滞——建议升级至 `v1.108.20` 或更高版本。  
- **构建健壮防护机制**：随着 MCP OAuth 的改进，开发者现在可通过本地策略检查对工具调用实施更严格的控制（参见 #37929）。  

👉 **可操作建议**：如运行 LTS 版本，请立即升级至 `v1.108.20`；在 Gemini 回归问题修复前，避免使用 `v1.110.2`。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

### **Unsloth Digest — 2026-11-28**

#### **1. 今日亮点**  
Unsloth 团队在 GPU 内存管理与模型加载可靠性方面取得显著进展，尤其针对 Windows 与 Apple Silicon 用户。关键 PR 包括修复集成显卡（如 RTX Spark N1X）上的 CUDA 内存高估问题，改进 BF16 精度下 GGUF 张量的处理逻辑，并通过替代包实现无需 `bitsandbytes` 即可启用 4 位 QLoRA。这些改动提升了跨多种硬件配置下的稳定性与兼容性。

#### **2. 发布与破坏性变更**  
*无*  
过去 24 小时内未发布新版本。但当前正在进行的 PR 显示，未来版本可能引入与模型量化行为相关的破坏性变更（例如 `load_in_8bit="int8"` 现在将选择旋转后的 LoRA 基础模型），以及 GGUF 加载器默认值的调整。

#### **3. 新模型与硬件支持**  
- ✅ **RTX Spark N1X（Windows）**：内存估算现受实际可分配上限限制，防止因操作系统提交记账错误导致崩溃 ([PR #20086](https://github.com/unslothai/unsloth/pull/20086))。  
- ✅ **Apple Silicon（M5 Max）**：Studio 安装默认使用 `torch==2.14.1`，相较 2.13 实现最高 **1.45 倍的 MPS 推理加速** ([PR #20066](https://github.com/unslothai/unsloth/pull/20066))。  
- ✅ **GGUF 架构**：完整支持 `inkling2`、`inkling2_loop` 与 `qwen3.5`，并以打包格式提供融合注意力张量（`attn_qkv_gate`、`ssm_beta_alpha`）支持 ([PRs #20080, #20070](https://github.com/unslothai/unsloth/pull/20080), [20070](https://github.com/unslothai/unsloth/pull/20070))。  
- ✅ **不支持平台上的 4 位 QLoRA**：通过替代 `bitsandbytes` 包，可在原生 `bitsandbytes` 不可用的系统上进行训练（如 ROCm、Windows ARM、缺少 CUDA 轮子的情况）([PR #20096](https://github.com/unslothai/unsloth/pull/20096))。

#### **4. 性能与优化**  
- ⚡ **LoRA 训练速度提升**：`gguf_packed=True` 现在采用常量类型编译、重新计算复用及优化内核，带来 **更快的打包 GGUF LoRA 训练性能** ([PR #20091](https://github.com/unslothai/unsloth/pull/20091))。  
- 📈 **批量推理效率提升**：Qwen-Image-2.1 批处理现已支持单次前向传播中混合提示长度，实现在 A100 上 **2.12 倍的流式吞吐提升** ([PR #20072](https://github.com/unslothai/unsloth/pull/20072))。  
- 🔁 **内存估算精度增强**：GGUF KV 缓存分配现按实际缓存单元数量加权（尤其是 SWA 层），在动态上下文中显著提升预测准确性 ([PR #20082](https://github.com/unslothai/unsloth/pull/20082))。  
- 💾 **实时去噪预览优化**：当无标签页激活时，预览不再消耗任何 CPU/GPU 资源——对后台渲染效率至关重要 ([PR #20081](https://github.com/unslothai/unsloth/pull/20081))。

#### **5. 稳定性与回归问题**  
- 🔥 **严重**：Windows 11 上 AMD GPU 检测失败（RX 6700）——已在 #17874 中报告，目前尚未解决。  
- 🔥 **高危**：DSpark 自动选择错误地在 CUDA 构建中优先启用更慢的解码路径 ([PR #20087](https://github.com/unslothai/unsloth/pull/20087) 提出修复方案)。  
- 🐞 **中等**：语音识别/转录模型虽已加载但在 API/日志中不可见 ([#19387](https://github.com/unslothai/unsloth/issues/19387))——影响调试。  
- 🐞 **中等**：`@skill` 内容因系统提示重新处理导致提示缓存缺失 ([#19212](https://github.com/unslothai/unsloth/issues/19212))——影响多轮代理工作流。  
- 🐞 **低**：翻译功能将以 CR 分隔的 WebVTT 错误分类为纯文本 ([#19472](https://github.com/unslothai/unsloth/issues/19472))——已通过 PR [#19473](https://github.com/unslothai/unsloth/pull/19473) 修复。

#### **6. 对应用开发者的意义**  
- **构建具备动态工具链的健壮代理**：`@skill` 缓存缺失问题 (#19212) 表明依赖持久状态的工具需谨慎设计，避免冗余处理。建议在应用层实现缓存逻辑。  
- **充分利用新增的 4 位 QLoRA 支持**：您的微调流水线现在可在 ARM 或 ROCm 平台上运行，无需依赖 `bitsandbytes`——非常适合边缘部署或轮子资源受限的云环境。  
- **针对异构硬件优化**：使用 `UNSLOTH_OFFLOAD_OPTIMIZER_STATE=1` 及可移植恢复机制，降低分布式训练中的主机-设备传输开销 ([PR #20092](https://github.com/unslothai/unsloth/pull/20092))。  
- **谨慎处理 GGUF 元数据**：导入或导出模型时，请确保正确解析 `BF16` 张量——加载器现直接返回 `torch.bfloat16` 视图 ([PR #20097](https://github.com/unslothai/unsloth/pull/20097))。  
- **规划 SSO 与多用户扩展**：关于中央枢纽与网格计算节点的功能请求 (#19842) 预示未来企业级部署路径——建议尽早设计支持共享状态与跨设备同步的应用架构。

---  
*本摘要基于 GitHub 活动生成（2026-11-28）。如需实时更新，请关注 [unslothai/unsloth](https://github.com/unslothai/unsloth)。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*