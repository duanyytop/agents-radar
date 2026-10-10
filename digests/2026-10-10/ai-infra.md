# AI 基础设施日报 2026-10-10

> 生成时间: 2026-10-10 01:53 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-10-10**

---

### **1. 生态概览**

2026年第四季度的AI基础设施格局呈现出高性能推理引擎、分布式服务框架与就绪代理的运行时系统之间快速融合的趋势。各项目正越来越多地聚焦于下一代硬件（Blackwell SM120、AMD RDNA4/gfx1201、A6x）和模型架构（Flash变体、MoE、多模态）。在确定性、可扩展性和安全性推理方面的竞争已日趋激烈，稳定性与正确性如今与原始吞吐量同等重要。尽管vLLM和SGLang在性能优化和推测解码成熟度方面领先，LiteLLM和Ollama则在开发者易用性上占据主导地位——但其在生产级部署中的可靠性问题日益凸显。

---

### **2. 活动对比**

| 项目       | 开放问题 | 开放PR | 发布状态                     |
|------------|----------|--------|------------------------------|
| **vLLM**   | 38       | 17     | 稳定；无新发布（v0.31.0待定） |
| **SGLang** | 52       | 24     | 无发布；`main`分支对TP8不稳定 |
| **llama.cpp** | 48    | 19     | 仅支持修补版构建（`b11539+`） |
| **Ollama** | 67       | 15     | `0.40.x` 不稳定；自动升级启用 |
| **LiteLLM** | 44     | 28     | 开发版 `v1.106.0-dev.3`（安全修复） |
| **Unsloth** | 42    | 22     | 无新发布；当前版本 `unsloth==2025.11.3` |

> ✅ *vLLM和LiteLLM在发布纪律上表现最强；Ollama和SGLang近期版本存在不稳定性。*

---

### **3. 模型支持竞赛**

| 新模型 / 架构           | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1-Flash** | ✅ (SM120/ROCm) | ✅ (上下文并行) | ⚠️ 部分支持（Qwen3.8-Flash-Next） | ❌ | ❌ | ❌ |
| **GLM-5.3-Flash**       | ✅ (进行中) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Qwen3.8-Flash-Next**  | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ |
| **Qwen-Image-2.1-Turbo**| ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **Prism Bonsai 2 27B**  | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Kolibri 1 (MLX)**     | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |
| **MoE (MegaMoE, DSpark)**| ✅ (DPA+ETP) | ✅ (DP attention) | ⚠️ (进行中) | ❌ | ❌ | ❌ |

> 🏆 **领先者：vLLM 与 SGLang** — 两者在前沿模型支持方面均处于领先地位，尤其在NVIDIA与AMD平台上的Flash及MoE模型支持方面表现突出。  
> 🔍 **显著差距**：Ollama在高级模型支持方面明显滞后，而Unsloth在特定多模态和文件解析场景中表现出色。

---

### **4. 性能前沿**

| 优化重点               | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|------------------------|------|--------|-----------|--------|---------|---------|
| **KV缓存效率**         | ✅ (上下文感知保留) | ⚠️ (推测解码污染) | 🔴 (长对话下崩溃) | ❌ | ⚠️ (预算追踪) | ⚠️ (GRPO下内存溢出) |
| **批处理与重叠**       | ✅ (DBO, DPA+ETP) | ✅ (预填充上下文并行) | ⚠️ (有限) | ❌ | ✅ (路由器效率) | ❌ |
| **量化与FP8**          | ✅ (FP8 + FlashInfer JIT回退) | ✅ (NVFP4自动调优) | ⚠️ (Q4_K_M存在分歧) | ❌ | ❌ | ❌ |
| **分布式服务**          | ✅ (PD, NIXL) | ✅ (TP8, 跨TP规划) | ❌ | ❌ | ✅ (多租户路由) | ❌ |
| **内核级优化**          | ✅ (张量描述符, FlyDSL) | ✅ (混合调度, 内存估算) | ✅ (Vulkan RMSNorm, SYCL) | ❌ | ⚠️ (Rust迁移) | ✅ (RoPE溢出修复) |

> 📈 **vLLM在整体性能工程方面领先**，尤其是在分布式和内核级优化方面。  
> 🔄 **SGLang与llama.cpp** 正在推动AMD专用内核和量化推理稳定性方面的边界。

---

### **5. 层级定位**

| 项目       | 主要层级               | 关键差异化特性 |
|------------|------------------------|----------------|
| **vLLM**   | **高性能服务引擎**     | SM120上业界领先的吞吐量，强大的FP8/FlashInfer集成，代理式KV缓存控制 |
| **SGLang** | **高级推理运行时**     | 推测解码（DSpark）领先，多GPU调度，上下文并行 |
| **llama.cpp** | **本地/边缘运行时**  | 支持CPU/GPU混合，强OpenCL/Vulkan支持，轻量级体积 |
| **Ollama** | **开发者友好网关**     | 简化命令行，广泛的模型目录，支持MLX/Windows——但在大规模下脆弱 |
| **LiteLLM** | **通用LLM网关**       | 多提供方路由，预算控制，遥测，为低延迟采用Rust迁移 |
| **Unsloth** | **微调与工作室运行时** | 强大的文件解析能力，边缘推理，多模态采样——专为训练工作流优化 |

> 🎯 **战略分化**：  
> - **服务引擎**：vLLM、SGLang  
> - **网关**：LiteLLM、Ollama  
> - **运行时/微调**：llama.cpp、Unsloth

---

### **6. 趋势信号**

**从当前活动提取的关键行业趋势：**

1. **以硬件为中心的优化**  
   → Blackwell SM120、AMD gfx1201和A6x GPU已成为主要目标。vLLM和SGLang正引领利用新架构特性（稀疏-MLA、单解码、预填充上下文并行）的浪潮。

2. **推测解码的成熟化**  
   → 当前已成为vLLM、SGLang和llama.cpp的核心关注点。然而，正确性问题（输出污染、结果偏差）仍未解决——表明这仍属于“第一阶段”功能。

3. **安全与信任基础设施**  
   → LiteLLM的安全事件及加密签名（Cosign）凸显对供应链完整性的日益关注。未来网关预计将强制执行严格验证与审计日志。

4. **确定性推理需求**  
   → 来自代理应用的强烈需求。但SGLang和vLLM等工具仍无法提供可重现的结果——这对生产环境中的代理是重大警示。

5. **基于Rust系统的兴起**  
   → LiteLLM的Rust迁移计划标志着向超低延迟、高吞吐推理路由的转变——这对实时代理编排至关重要。

6. **稳定性与创新的权衡**  
   → Ollama和SGLang体现了快速功能交付的成本：`0.40.x`和`TP8`路径中频繁出现破坏性变更、回归与崩溃。开发者现在必须优先考虑**稳定性**而非新颖性。

---

### **面向应用开发者的建议**

- **对于需要推测解码和分布式服务的高吞吐、代理型负载**，请使用vLLM或SGLang。
- **避免在大型模型或关键任务部署中使用Ollama `0.40.x`** —— 建议暂用`0.35.0`直至回归问题修复。
- **利用LiteLLM的Rust迁移**，为代理系统构建超低延迟网关——预计不久将实现亚毫秒级开销。
- **在量化模型（尤其是`Q4_K_M`）上验证推测解码输出**——非确定性问题依然普遍。
- **监控在Windows和Apple Silicon上的GPU降级情况**——因CUDA/MLX初始化失败导致的静默故障十分常见。
- **通过批量无关执行（vLLM）或避免使用`--enable-deterministic-inference`来优先确保确定性行为**，直到修复落地。

> ✅ **结论**：生态正在快速演进——但可靠性是瓶颈。选择技术栈应基于**稳定性、正确性与硬件适配性**，而非仅仅看功能数量。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest – 2026-10-10

---

### **1. 今日亮点**  
vLLM 持续推进对 Blackwell GPU（SM120）上新一代模型的支持，针对 DeepSeek-V4.1-Flash 与 GLM-5.3-Flash 在 NVIDIA 与 AMD ROCm 平台上的关键性能优化和缺陷修复。已合并一项高优先级修复，解决了因缺失 FlashInfer JIT 回退导致的 `kv_cache_dtype="fp8"` 崩溃问题；当前工作重点仍聚焦于推测解码正确性以及面向智能体工作负载的上下文感知 KV 缓存保留机制。

---

### **2. 发布与破坏性变更**  
过去 24 小时内无报告。未发布新的稳定版或 RC 版本。项目目前专注于为 v0.31.0 版本的发布进行功能稳定性加固，尤其集中在 SM120 兼容性及 FP8/FlashInfer 集成方面。

---

### **3. 新模型与硬件支持**  
- **DeepSeek-V4.1-Flash**：已在 **NVIDIA SM120（RTX PRO 6000/5000 Blackwell）** 上启动全面支持，通过优化的稀疏-MLA 内核与单解码路径实现（ROCm 平台使用 `VLLM_ROCM_MONO_DECODE=1`）。  
  🔗 [PR #60397](https://github.com/vllm-project/vllm/pull/60397)  
- **GLM-5.3-Flash**：正在进行优化，重点解决长期推理下解码稳定性与性能下降问题。  
  🔗 [Issue #56868](https://github.com/vllm-project/vllm/issues/56868)  
- **ROCm（AMD）**：新增对 **MI355X（gfx950）** 与 **RDNA4（gfx1201）** 的支持，并针对 Qwen3.8-2.4T-A95B 与 Qwen3.8-Flash-Next 进行了定向性能调优。  
  🔗 [Issue #57149](https://github.com/vllm-project/vllm/issues/57149), [Issue #59575](https://github.com/vllm-project/vllm/issues/59575)

---

### **4. 性能与优化**  
- **SM120 解码吞吐量**：通过单解码层启动策略（持久 FlyDSL），DeepSeek-V4.1-Flash 解码性能取得显著提升，有效降低内核启动开销。  
  🔗 [PR #60397](https://github.com/vllm-project/vllm/pull/60397)  
- **预填充重叠**：在 ROCm 上为 DeepSeek-V4 启用 DPA+ETP 双批重叠（DBO），提升了数据并行场景下的预填充效率。  
  🔗 [PR #57773](https://github.com/vllm-project/vllm/pull/57773)  
- **内核优化**：正在推进 Triton 内核中采用 **张量描述符（TD）**，以增强内存安全性并为未来代码库演进提供保障。  
  🔗 [Issue #42545](https://github.com/vllm-project/vllm/issues/42545)  
- **批次无关优化**：正追踪通过批次无关执行实现确定性推理的进展，这对可复现的智能体行为至关重要。  
  🔗 [Issue #27433](https://github.com/vllm-project/vllm/issues/27433)

---

### **5. 稳定性与回归问题**  
- **严重崩溃**：当 FlashInfer JIT 缺失时，`kv_cache_dtype="fp8"` 无法回退至 TRITON_ATTN，导致硬崩溃。  
  🔗 [Issue #60262](https://github.com/vllm-project/vllm/issues/60262) → *修复 PR 待合并*  
- **推测解码数据损坏**：Qwen3.8-27B NVFP4 在 MTP + 前缀缓存模式下，缓存命中后输出出现损坏（v0.30/v0.31 版本）。  
  🔗 [Issue #60174](https://github.com/vllm-project/vllm/issues/60174) → *确认为回归；修复中*  
- **CUDA 非法内存访问**：在 4xB200 环境下，多个内核（KDA 线性注意力、MHC TileLang、TRT-LLM MoE）反复出现崩溃，影响 GLM-5.3-Flash。  
  🔗 [Issue #54317](https://github.com/vllm-project/vllm/issues/54317) → *高严重性；正在调查*  
- **结构化输出无效**：MTP 推测解码导致 Qwen3.8-Flash-Next 的 `response_format={"type": "json_schema"}` 输出被破坏。  
  🔗 [Issue #60830](https://github.com/vllm-project/vllm/issues/60830) → *已在 PR #60870 中修复*

---

### **6. 对应用开发者的启示**  
- **谨慎使用 `--kv-cache-dtype fp8`**：确保已安装 FlashInfer JIT，否则可能引发崩溃。生产环境建议显式指定后端（如 `--attention-backend triton`）。  
- **避免 `max_tokens > max_model_len`**：vLLM 当前会直接拒绝此类请求而非自动截断，请在应用层验证输入范围。  
- **智能体工作负载**：可利用即将推出的 **上下文感知 KV 缓存保留** 功能 ([Issue #37003](https://github.com/vllm-project/vllm/issues/37003))，防止并发负载下的前缀缓存抖动。  
- **多 GPU 部署**：关注 **非集中式服务（PD）** 中可能出现的回归问题——尤其是使用 NIXL 连接器与旁道配置时。  
- **性能调优**：对于 SM120 与 ROCm 平台，若适用请启用 `VLLM_ROCM_MONO_DECODE=1` 与 `--enable-dbo` 以释放最大吞吐潜力。  

> 💡 **实用提示**：使用 `bench serve --metrics-url` 可在路由器后方实现精准的 PD 基准测试。  
> 🔗 [PR #59587](https://github.com/vllm-project/vllm/pull/59587)

---  
*数据来源：[vllm-project/vllm GitHub](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 消息简报 – 2026-10-10

---

### **1. 今日重点**

SGLang 项目持续推进对 DeepSeek-V4.1 与 DSpark 规划解码的支持，关键 PR 实现了在 AMD 平台上预填充上下文并行化，并提升了高吞吐场景下的内存安全性。针对大型解码工作负载下 CUDA graph 崩溃的严重稳定性修复已上线（TP8），同时新工作聚焦于确定性推理正确性及对被中止请求的健壮处理。

---

### **2. 发布与破坏性变更**

过去 24 小时内未发布新版本。  
然而，当前问题提示可能存在行为上的破坏性变更：
- `--enable-deterministic-inference` 当前无法为 `gpt-oss-20b` 生成一致输出，详见 [#43055](https://github.com/sgl-project/sglang/issues/43055)。
- 请求取消逻辑出现回归，可能导致已取消的语法约束请求仍产生可见输出 ([#34111](https://github.com/sgl-project/sglang/issues/34111))。

> ⚠️ 使用确定性推理或严格控制请求生命周期的开发者应测试 `main` 分支，或在相关修复合并前避免使用 `--enable-deterministic-inference`。

---

### **3. 新模型与硬件支持**

- **DeepSeek-V4.1**：活跃的优化路线图 ([#42170](https://github.com/sgl-project/sglang/issues/42170)) 包含 MegaMoE 模型的 DP attention 支持，以及通过 PR [#43465](https://github.com/sgl-project/sglang/pull/43465) 实现的 AMD GPU 上的上下文并行预填充。
- **AMD GPU**：DeepSeek-V4.1 已全面支持预填充上下文并行；相关 PR 包括内核级优化和内存布局修复。
- **摩尔线程 (MUSA)**：功能请求仍开放 ([#16565](https://github.com/sgl-project/sglang/issues/16565))，社区关注度高但尚未实现。
- **MLX 后端**：在重复调用聊天接口后，原生 MLX 生成表现出行为不一致问题 ([#42415](https://github.com/sgl-project/sglang/issues/42415))；在有状态工作流中使用需谨慎。

---

### **4. 性能与优化**

- **规划解码重叠**：高优先级功能请求 [#11762](https://github.com/sgl-project/sglang/issues/11762) 正在积极开发中，旨在通过重叠调度提升吞吐量。
- **内存效率**：PR [#43435](https://github.com/sgl-project/sglang/pull/43435) 在受限全预填充角色中跳过急切激活预留分配，降低分布式部署中的静态内存开销。
- **FlashInfer 自动调优**：PR [#43464](https://github.com/sgl-project/sglang/pull/43464) 启用 NVFP4 压缩检查点的 FP4 GEMM 自动调优，释放低精度推理性能潜力。
- **内核级优化**：
  - PR [#42333](https://github.com/sgl-project/sglang/pull/42333)：通过正确路由全注意力层修复 FA 后端中的混合模型分发问题。
  - PR [#42296](https://github.com/sgl-project/sglang/pull/42296)：修正跨 TP 组的规划解码内存估算，防止过度分配。

---

### **5. 稳定性与回归问题**

| 严重性 | 问题 | 概述 | 修复状态 |
|--------|------|--------|-----------|
| 🔴 严重 | [#31023](https://github.com/sgl-project/sglang/issues/31023) | DSpark 紧凑稀疏目标验证 CUDA Graph 中跨 TP 计划不一致 → TP8 上非法内存访问 | ✅ 已在 #31195 修复 |
| 🔴 严重 | [#33356](https://github.com/sgl-project/sglang/issues/33356) | 在 TP8 上运行 DeepSeek-V4-Pro-DSpark 时，服务器启动期间出现非确定性 CUDA 非法内存错误 | ✅ 已在 #31195 修补 |
| 🟡 高 | [#43061](https://github.com/sgl-project/sglang/issues/43061) | `--enable-deterministic-inference` + `repetition_penalty` 导致 granite-4.0-h 上 `torch.compile` 崩溃 | ❌ 尚无修复 |
| 🟡 高 | [#43055](https://github.com/sgl-project/sglang/issues/43055) | 即使启用标志，确定性推理仍产生不可复现输出 | ❌ 尚无修复 |
| 🟡 中 | [#43402](https://github.com/sgl-project/sglang/issues/43402) | 请求中止时 CUDA VMM 多模态传输切片泄漏 | ❌ 尚无修复 |
| 🟡 中 | [#43204](https://github.com/sgl-project/sglang/issues/43204) | `AssertionError: Can not alloc mamba cache` 在所有槽位被锁定时导致调度器崩溃 | ❌ 尚无修复 |

> ⚠️ 在 TP8 上运行大规模解码工作负载的 DSpark 用户应立即升级至 `main` 分支，或应用 #31195 的补丁。

---

### **6. 对应用开发者的启示**

- 若可复现性至关重要，请暂时避免使用 `--enable-deterministic-inference` —— 即使配合 `repetition_penalty` 也仍不可靠。
- **严格监控请求生命周期**：被中止的请求可能遗留僵尸状态或内存泄漏（例如 [#36333](https://github.com/sgl-project/sglang/issues/36333), [#43402](https://github.com/sgl-project/sglang/issues/43402)）。建议在客户端实现超时与重试逻辑。
- **在 TP8 上谨慎使用 DSpark**：尽管近期修复已稳定路径，但仍存在边缘情况。请使用生产规模提示进行测试，并验证内存行为。
- **利用新兴优化**：启用 `--chunked-prefill-size` 和上下文并行（通过 AMD/ROCm PR）以提升高吞吐服务的可扩展性。
- **多模态与工具调用应用**：注意工具调用前可能出现空 SSE 块（[#29441](https://github.com/sgl-project/sglang/issues/29441)）以及可空字符串处理缺陷（[#43389](https://github.com/sgl-project/sglang/pull/43389)）——务必仔细验证 SDK 集成。

> ✅ **实用技巧**：使用 `main` 分支获取最新功能与稳定性修复；由于已知 CUDA graph 问题，避免在 TP8 部署中使用 v0.5.16 版本。

---  
*数据来源：GitHub sgl-project/sglang — 2026-10-10*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 摘要 – 2026-10-10**

---

### **1. 本周亮点**  
最新更新聚焦于推测解码的正确性修复以及 GPU 内核稳定性，尤其针对量化模型和 A6x 等新架构。显著改进包括修复 CUDA 下 CPU/GPU 往返一致性问题，以及通过驻留 GPU 的 LRU 机制增强 MoE 专家缓存支持（正在进行中）。发布周期持续稳定多个后端的核心推理路径。

---

### **2. 发布与破坏性变更**  
- **`b11539`**：应用上游深层嵌套 JSON 补丁（`nlohmann/json`），防止模型配置中潜在的解析问题。[PR #30253](https://github.com/ggml-org/llama.cpp/pull/30253)  
- **`b11538`**：修复在 MSVC 下 CUDA 往返精度问题，此前导致 CPU 与 GPU 结果不一致。[PR #30229](https://github.com/ggml-org/llama.cpp/pull/30229)  
- **`b11537`**：重新排序 `get_rows` 逻辑以优化嵌入处理，改进 Gemma4 输入构造；为 LoRA 添加 TODOs。[PR #30160](https://github.com/ggml-org/llama.cpp/pull/30160)  

> ✅ *本周无破坏性 API 变更。所有更新均向后兼容。*

---

### **3. 新模型与硬件支持**  
- **Gemma4**：改进嵌入路径处理并修复 PLE 类型转换问题。[PR #30160](https://github.com/ggml-org/llama.cpp/pull/30160)  
- **A6x GPU（物联网设备）**：OpenCL 内核编译跳过受着色器编译器限制影响的 `kernel_cpy_f32_f32_pack`。[PR #30176](https://github.com/ggml-org/llama.cpp/pull/30176)  
- **Qwen3.8-Flash-Next / Qwen4exp**：持续集成 MTP/草稿推测支持；回归测试仍在进行中。[PR #30257](https://github.com/ggml-org/llama.cpp/pull/30257), [Issue #27763](https://github.com/ggml-org/llama.cpp/issues/27763)  
- **Prism Bonsai 2 27B**：通过 PR 添加运行时支持。[PR #29600](https://github.com/ggml-org/llama.cpp/pull/29600)

---

### **4. 性能与优化**  
- **CUDA**：减少 `SSM_SCAN` 后的冗余内存拷贝，将状态快照融合进循环缓存。[PR #29807](https://github.com/ggml-org/llama.cpp/pull/29807)  
- **SYCL**：针对 Intel XMX（ESIMD）优化多列矩阵引擎，服务于推测解码。[PR #29864](https://github.com/ggml-org/llama.cpp/pull/29864)  
- **Vulkan**：使用子组归约优化 RMSNorm —— 在 B70 Arc Pro 上报告约 15% 性能提升。[PR #29882](https://github.com/ggml-org/llama.cpp/pull/29882)  
- **MoE 缓存（功能请求）**：提议在计算图内实现驻留 GPU 的 LRU 专家缓存。[Issue #29949](https://github.com/ggml-org/llama.cpp/issues/29949)  
- **嵌入模型**：当图生成无 logits 时（如重排序模型），避免不必要的 logits 缓冲区分配。[PR #30255](https://github.com/ggml-org/llama.cpp/pull/30255)

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 修复/临时方案 |
|--------|------|--------|----------------|
| 🔴 高 | 量化目标（`Q4_K_M`）上使用贪婪采样时推测解码结果发散 | 开放 (#25618) | 尚未修复；影响 draft-mtp/draft-dspark |
| 🔴 高 | `llama-server` 中长对话触发崩溃（`bad allocation`） | 开放 (#30091) | 可能是 KV 缓存管理中的内存泄漏 |
| 🔴 高 | gfx1151（Ryzen AI Max+）GPU 出现图像损坏：最旧上下文无声丢失 | 已关闭 (#27556) | 已知问题；同一提交下 Vulkan 后端正常 |
| 🟡 中 | **RTX 5060Ti 15GB** 在 `IQ3_S` 模式下产生垃圾输出 | 开放 (#28581) | 可能为驱动或内核版本不匹配 |
| 🟡 中 | **DSpark + DeepSeek V4 Flash** 存在 VRAM 泄漏：每轮约 10MB，直至 OOM | 开放 (#27155) | 回归问题，可能与推测式 KV 缓存相关 |

> ⚠️ 推测解码与内存安全方面仍存在关键稳定性风险——尤其在新硬件（Blackwell、A6x）上。

---

### **6. 对应用开发者的启示**  
- **在量化模型（`Q4_K_M`、`IQ3_S`）上谨慎使用推测解码**；在 #25618 解决前，预期输出非确定性。  
- **利用最近的 PR (#30254)**，通过 `--models-max=0` 与启动时加载结合，实现无需模型数量限制的动态路由配置。  
- **优化内存使用**：在仅编码器模型（如 `bge-m3`、`EmbeddingGemma`）中避免分配 logits 缓冲区——此功能已在 `b11537`+ 版本启用。  
- **注意新显卡上的回归问题**（RTX 50xx、A6x、Blackwell）：升级后务必验证模型行为，尤其是混合精度内核场景。  
- **关注 CI/夜间构建**，以获取即将到来的 MoE 专家缓存支持及更好的 SYCL/Vulkan 性能——这些对可扩展代理系统至关重要。

👉 *建议：使用 `b11539` 及以上版本进行稳定推理，除非另有通知，否则避免在量化模型上启用推测解码。*  
🔗 [GitHub Release b11539](https://github.com/ggml-org/llama.cpp/releases/tag/b11539) | [Issue #25618](https://github.com/ggml-org/llama.cpp/issues/25618)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-10**

---

### **1. 今日亮点**  
Ollama 最新版本中暴露出多个关键稳定性问题，尤其集中在 Apple Silicon 及 Windows 系统的 MLX 与 CUDA 后端。值得注意的是，`qwen3.6:35b-mlx` 在 `0.40.x` 版本中因从 `0.35.0` 回退导致崩溃，而用户报告在自动更新后，Windows 系统仍存在持续的 GPU 回退问题，源于未完成的 DLL 更新。这些问题正影响高内存模型如 `mistral-medium-3.5:128b` 与 `gemma4:12b`，造成显著性能下降及内存压力。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未发布新版本。然而，`v0.40.x` 中正在进行的变更包括：  
- **自动模型升级**现已默认启用（参见 [#18909](https://github.com/ollama/ollama/issues/18909)），在存储空间受限环境中引发存储担忧。  
- **本地模型兼容性迁移**因高吞吐场景下的垃圾回收开销和请求延迟问题，暂时通过 PR [#18908](https://github.com/ollama/ollama/pull/18908) 禁用（例如嵌入模型使用场景）。

---

### **3. 新模型与硬件支持**  
- **MLX 后端扩展**：PR [#18780](https://github.com/ollama/ollama/pull/18780) 为 MLX 运行器新增 Kolibri 1 支持，使 Apple Silicon 设备可进行推理。  
- **多模态嵌入**：PR [#18820](https://github.com/ollama/ollama/pull/18820) 引入通过 `EmbeddingGemma2Model` 在 MLX 上支持多模态嵌入，可通过 `/api/embed` 接口处理图像/音频输入。  
- **社区集成新增**：Vessel ([#18912](https://github.com/ollama/ollama/pull/18912))、Creatos ([#18910](https://github.com/ollama/ollama/pull/18910))、AI Character Engine ([#18904](https://github.com/ollama/ollama/pull/18904)) 已加入社区集成列表。

---

### **4. 性能与优化**  
- **内存效率**：用户报告在配备 128GB RAM 的 M4 Mac 上加载 `mistral-medium-3.5:128b` 时出现极端内存占用（>127GB）且 >100GB 被锁定内存，远超预期模型大小（约 80GB）。  
- **CUDA 延迟**：暖机阶段间歇性出现 `CUDA error: shared object initialization failed`，与从 `CUDA_Host` 静默回退至 CPU 锁定缓冲区相关（参见 [#17380](https://github.com/ollama/ollama/issues/17380)）。  
- **吞吐量影响**：由于每请求开销及高负载场景下的 GC 压力，背景模型迁移（PR [#18908](https://github.com/ollama/ollama/pull/18908)）已被移除。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 描述 | 修复状态 |
|--------|------|-------------|------------|
| 🔴 关键 | [#18856](https://github.com/ollama/ollama/issues/18856) | `0.40.x` 中 `qwen3.6:35b-mlx` 的 MLX 运行器崩溃（从 `0.35.0` 回退） | 开放 |
| 🔴 关键 | [#18770](https://github.com/ollama/ollama/issues/18770) | `mistral-medium-3.5:128b` 在 M4 Mac 上消耗过多内存（>127GB），运行速度仅约 1 字/分钟 | 开放 |
| 🟡 高 | [#18885](https://github.com/ollama/ollama/issues/18885) | MLX 运行器在 `gemma4:e2b-mlx` 上报错 `panic: mlx`（Mac mini M6，16GB RAM） | 开放 |
| 🟡 高 | [#18898](https://github.com/ollama/ollama/issues/18898) | `gemma4:12b` 抛出 `"Gemma4Assistant requires ctx_other to be set"` 错误 | 开放 |
| 🟡 中 | [#18858](https://github.com/ollama/ollama/issues/18858) | `clef-flash` 因未知编码错误失败（`"unsupported decision encoding \"lfm2-d1\""`) | 开放 |

> **注意**：多个回归问题影响新型硬件（RTX 5070 Ti、AMD Radeon 780M Vulkan）及 macOS MLX 工作流——很可能与近期 CUDA/MLX 集成变更有关。

---

### **6. 对应用开发者的启示**  
- **避免在生产环境使用 `0.40.x`**，尤其是涉及大模型（`128b`、`35b`）或 Apple Silicon 上的 MLX，直到 [#18856](https://github.com/ollama/ollama/issues/18856) 与 [#18885](https://github.com/ollama/ollama/issues/18885) 修复。  
- **若磁盘空间紧张，请禁用自动升级** —— 使用 `OLLAMA_AUTO_UPGRADE=false` 或通过配置关闭（#18909）。  
- **预期 Windows GPU 上行为不稳定** —— 升级后检查 `cuda_v12\` 目录是否存在 `.tmp` 文件（参见 [#18712](https://github.com/ollama/ollama/issues/18712)）。  
- **部署前验证模型兼容性**：`d1-3B`、`d1-omni-600M` 与 `clef-flash` 当前因不支持编码或缺少工具链而失败。  
- **监控静默回退现象** —— 尤其在 Windows 与 AMD 系统上，因 CUDA/Vulkan 初始化错误导致 GPU 检测失败但无提示。

> 💡 **实用提示**：使用 `ollama serve --log-level debug` 可尽早追踪 GPU 缓冲区回退与模型加载失败问题。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 摘要 – 2026-10-10**

---

### **1. 今日重点**  
LiteLLM 项目持续推进高性能、安全的 AI 基础设施建设，修复了关键稳定性问题，并在基于 Rust 的性能优化方面取得重大进展。最紧急的更新包括解决严重安全事件（问题 #24518），以及持续改进高负载下的预算控制与支出追踪功能——这对生产环境部署至关重要。与此同时，Rust 迁移计划（问题 #31263）正逐步推进，新增的 PR 重点关注 Bedrock 集成和 SSE 头部规范化。

---

### **2. 发布与破坏性变更**  
- 今日发布 **v1.106.0-dev.3**，通过 Cosign 签名增强了安全验证。所有 Docker 镜像现已使用与 [提交 `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) 相同的密钥进行加密签名。  
- **安全提示**：此前 v1.82.7/v1.82.8 PyPI 包被入侵的情况已完全控制；所有受影响版本均已下架。建议用户升级至当前稳定版本。详情请见：[安全通报会](https://docs.litellm.ai/blog/security-townhall-updates)  
- **破坏性变更提醒**：`/metrics` 端点现在默认为未认证状态，在生产环境中可能暴露多租户敏感信息（PII），除非显式配置 `require_auth_for_metrics_endpoint: true`。该问题已在问题 [#24530](https://github.com/BerriAI/litellm/issues/24530) 中报告为安全风险。

---

### **3. 新模型与硬件支持**  
- **新增 ScaleDown 模型**：五个新 ScaleDown 模型（`scaledown/*`）现作为聊天提供方支持（PR #44168），输入定价为每百万 token 0.05 美元，无输出费用。  
- **Bedrock 原生集成**：PR #45696 与 #45609 实现 GPT-5.6+ 函数工具（含推理能力）的原生 `/responses` 桥接，避免回退到 Converse，同时保留提示缓存。  
- **Databricks 模式修复**：多个 PR（#45631, #45632, #45658, #45659）确保 Databricks 请求中对嵌套 JSON 模式 `$ref` 指针（`#/$defs/...`）的正确处理，修复了此前在非 Claude 模型上的失败问题。  
- **Vertex AI Claude 批量处理修复**：PR #45715 修正了 Vertex AI 上 Anthropic 模型的批量上传路径与行格式，解决了批量创建时的 404 错误。

---

### **4. 性能与优化**  
- **Rust 迁移进展**：将 LiteLLM 迁移至 Rust 的核心计划（问题 #31263）正在积极推进中。初步结果表明，实现亚毫秒级开销是可行的，目标为超低延迟的推理路由。  
- **响应缓存持久化**：PR #45693 确保当 `store_model_in_db=True` 时，响应缓存状态在数据库路由器重建后仍能保持，防止不必要的上游调用。  
- **支出追踪效率提升**：PR #31866 引入 `disable_entity_spend_updates` 标志，可在保留支出日志的同时抑制昂贵的数据库 `UPDATE` 操作——对高吞吐系统至关重要。  
- **遥测数据持久化**：PR #45490 支持本地存储遥测数据并保留持久实例 ID，使离线部署可保留诊断信息，并支持管理员导出。

---

### **5. 稳定性与回归问题**  
- **关键预算控制问题**：  
  - [#27735](https://github.com/BerriAI/litellm/issues/27735)：虚拟密钥报告 `BudgetExceededError`，但实际支出低于预算。  
  - [#36926](https://github.com/BerriAI/litellm/issues/36926)：在持续负载下因过期成本计算导致虚假 `BudgetExceededError`（约 2 分钟后自动恢复）。  
  - [#26672](https://github.com/BerriAI/litellm/issues/26672)：v1.82.3 版本中 `max_budget` 被绕过，尽管支出已超限。  
  *以上问题均未关闭，但已在当前稳定性冲刺（问题 #30484）中优先处理。*  
- **并发缺陷**：  
  - [#43491](https://github.com/BerriAI/litellm/issues/43491)：用户/团队支出缓存在并发增量时丢失，导致计数不足。  
  - [#31441](https://github.com/BerriAI/litellm/issues/31441)：使用共享虚拟密钥时，`end_user` 字段被固定为首次请求的 `user` 值。  
- **流式传输失败**：  
  - [#45457](https://github.com/BerriAI/litellm/issues/45457)：首个分块前的流中断不会重试，即使设置了 `num_retries`。  
  - [#45406](https://github.com/BerriAI/litellm/issues/45406)：流传输过程中发出非响应错误帧，而非干净的错误提示。

---

### **6. 对应用开发者的启示**  
- **立即升级**：若您仍在使用 v1.82.7 或 v1.82.8 版本，请立即升级至当前稳定版，以应对已确认的供应链攻击。  
- **保护您的代理服务**：显式设置 `require_auth_for_metrics_endpoint: true`，防止 Prometheus 端点暴露多租户敏感信息。  
- **使用稳定预算逻辑**：在修复落地前，避免使用 `virtual_key` + `max_budget` 组合——当前在高负载下行为不一致。建议考虑使用基于 token 的配额（问题 #44555）实现月度上限。  
- **为 Rust 迁移做准备**：尽管迁移仍在进行中，未来版本预计将显著降低延迟并提升吞吐量——非常适合代理编排与实时 LLM 网关场景。  
- **充分利用新功能**：在高负载场景中使用 `disable_entity_spend_updates` 以减轻数据库压力。启用新的遥测 UI（PR #45494），监控使用模式与代理健康状态。  

> 🔗 [GitHub 问题](https://github.com/BerriAI/litellm/issues) | [PR 列表](https://github.com/BerriAI/litellm/pulls) | [安全通报会](https://docs.litellm.ai/blog/security-townhall-updates)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth 消息简报 – 2026-10-10**

---

### **1. 今日亮点**  
Unsloth 继续拓展对多模态与边缘推理的支持，关键 PR 实现了 Qwen-Image-2.1-Turbo 的采样调度功能，并优化了 Unsloth Studio 中的文件解析。关键稳定性修复解决了 AMD GPU 内存泄漏、Intel XPU 上 PyTorch 安装问题，以及 Windows 安装程序的安全加固——对于在异构或资源受限环境中部署的开发者尤为重要。

---

### **2. 发布与破坏性变更**  
*无*。过去 24 小时内未发布新版本。用户应继续使用 `unsloth==2025.11.3` 或更高版本，但需注意大型模型存在已知的 OOM 问题（例如 #4504, #3603）。

---

### **3. 新模型与硬件支持**  
- ✅ 通过 PR [#13159](https://github.com/unslothai/unsloth/pull/13159) 新增 **Qwen-Image-2.1-Turbo** 支持，可实现 8 步采样，并完整集成至 `qwen-image-2.1` 系列。  
- ✅ 通过 PR [#13193](https://github.com/unslothai/unsloth/pull/13193)，**Intel Arc / Data Center GPU** 现可通过 `install.sh` 自动检测，修复此前回退至仅 CPU PyTorch 的问题。  
- ✅ **AMD ROCm + APU 系统** 获得更智能的 GPU 选择逻辑：PR [#13196](https://github.com/unslothai/unsloth/pull/13196) 确保当独立 dGPU 可用时优先使用，而非默认选择 APU。  
- 📄 **文件格式扩展**：PRs [#13081](https://github.com/unslothai/unsloth/pull/13081), [#13186](https://github.com/unslothai/unsloth/pull/13186), 和 [#13183](https://github.com/unslothai/unsloth/pull/13183) 新增对 `.docx`, `.xlsx`, `.odt`, `.rtf`, HTML 表格及网页抓取中的指数标记的支持。

---

### **4. 性能与优化**  
- 🔧 **内核级改进**：PR [#13121](https://github.com/unslothai/unsloth/pull/13121) 在 RoPE 与归一化内核中将 `tl.program_id` 强制转换为 `int64`，解决一个可能导致崩溃的关键溢出问题——该问题在序列长度超过 2³¹ 元素（约需 5.5 GiB VRAM）时触发。  
- ⚙️ **嵌入层学习率修复**：PR [#13171](https://github.com/unslothai/unsloth/pull/13171) 确保 `embedding_learning_rate` 在全量微调中被正确应用——此前该参数被静默忽略。  
- 💡 **上下文估算优化**：PR [#12599](https://github.com/unslothai/unsloth/pull/12599) 通过锚定实际测量限制值，改进 `/v1/models` 接口的 VRAM 适配上下文估算，减少误报警告。

---

### **5. 稳定性与回归问题**  
- ⚠️ **AMD GPU 内存泄漏**：问题 [#7449](https://github.com/unslothai/unsloth/issues/7449) 报告在 Strix Halo（Windows）上，尽管有 GPU 计算负载，Unsloth Studio 仍会将模型权重加载至系统内存而非显存。*暂无修复 PR*。  
- ⚠️ **AMD 上 Qwen3.8-27B V3 GGUF 崩溃**：问题 [#9792](https://github.com/unslothai/unsloth/issues/9792) 确认在 R9700（Vulkan）上，预填充阶段后 V3 GGUF 版本会崩溃；回滚至 V2（`408fcc1807ab`）可解决问题。*已确认临时解决方案*。  
- ⚠️ **Windows 安装程序被阻止执行**：问题 [#8490](https://github.com/unslothai/unsloth/issues/8490) 显示应用程序控制策略会阻止 `unsloth.exe` 执行——需手动绕过策略。*安全修复已合并*：[#13192](https://github.com/unslothai/unsloth/pull/13192), [#13189](https://github.com/unslothai/unsloth/pull/13189)。  
- ❌ **GRPO/QLoRA 下出现 OOM**：多个高严重性 OOM 报告（#4504, #3603, #3411）即使在 H100 80GB 与 B200 183GB 上也发生——暗示存在 KV 缓存膨胀或内存计数错误。*尚未发布补丁*。

---

### **6. 对应用开发者的启示**  
- **在 Intel 或 AMD 系统上使用 `install.sh` 时务必谨慎**：确保未回退至仅 CPU 的 PyTorch；如需，请验证是否设置了 `UNSLOTH_TORCH_INDEX_FAMILY=xpu`。  
- **在 AMD 平台避免使用 Qwen3.8-27B V3 GGUF**，直至 Vulkan 问题修复完成——可临时使用 V2 版本作为替代方案。  
- **训练大模型（尤其是 GRPO/QLoRA）时密切监控 VRAM 使用情况**：即使显存充足，意外的 OOM 仍可能暴露内部内存管理缺陷。  
- **充分利用 Studio 新增的文件解析功能**，以实现更丰富的知识库导入（PDF、电子表格、邮件、网页）——但请预期在表格与 HTML 处理中仍有轻微格式瑕疵，待相关 PR 合并后改善。  
- **在全量微调中不要依赖 `embedding_learning_rate`**，除非手动应用 PR [#13171](https://github.com/unslothai/unsloth/pull/13171)。

> 🔗 [Unsloth GitHub Issues](https://github.com/unslothai/unsloth/issues) | [Unsloth PRs](https://github.com/unslothai/unsloth/pulls)

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*