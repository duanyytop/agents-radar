# AI 基础设施日报 2026-11-04

> 生成时间: 2026-11-04 02:39 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-11-04**

---

### **1. 生态概览**  
AI推理与服务生态正迅速成熟为一个多层级、硬件感知的栈式架构，性能、可扩展性与开发者体验紧密交织。vLLM、SGLang和llama.cpp等关键参与者通过内核级优化与解耦架构，不断推动低延迟推理的边界；而Ollama和LiteLLM则借助原生代理工具与代理抽象，重新定义开发者工作流。MoE模型、FP8/FP4量化以及跨架构支持（AMD ROCm、Intel XPU、Apple MLX）的兴起，标志着向异构化、生产级部署环境的转变。与此同时，Unsloth对用户界面/用户体验及实时推理加速的关注，凸显了对无缝本地代理体验日益增长的需求。

---

### **2. 活动对比**

| 项目       | 开放问题数 | 近7天合并的PR数 | 发布状态         |
|------------|-------------|------------------|------------------|
| **vLLM**   | 342         | 87               | 无新版本发布；候选版待定 |
| **SGLang** | 298         | 65               | 无新版本发布；开发活跃 |
| **llama.cpp** | 411      | 52               | `b12091+` 稳定构建 |
| **Ollama** | 315         | 49               | v0.40.15-rc0 已发布 |
| **LiteLLM** | 276       | 41               | v1.109.0-rc.1 已发布 |
| **Unsloth** | 257       | 38               | v0.1.914-beta（测试版） |

> *注：问题数量统计截至2026-11-04；PR数据基于最近7天的GitHub活动。*

---

### **3. 模型支持竞赛**

| 新模型 / 架构                | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1**             | ✅ (ROCm + MI350X/P) | ⚠️ (进行中) | ❌ | ❌ | ❌ | ❌ |
| **GLM-5.3-Flash**             | ✅ (ROCm优化) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Muse Spark (AMD)**          | ✅ (MI350P/X) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Nemotron 3.5 ASR 流式传输** | ✅ (FR #47455) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Nemotron 3.5 Transcribe**   | ❌ | ❌ | ✅ (`b12087`) | ❌ | ❌ | ❌ |
| **Metis-1.6**                 | ❌ | ❌ | ✅ (`b12089`) | ❌ | ❌ | ❌ |
| **xing4_0**                   | ❌ | ❌ | ✅ (`b12089`) | ❌ | ❌ | ❌ |
| **MiMo V2.6**                 | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |
| **Qwen3.8-Flash-Next**        | ✅ (ROCm, SM120) | ✅ (SM120, gfx950) | ✅ (SM120) | ❌ | ❌ | ✅ (CUDA图) |
| **FP8 LoRA**                  | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ (`v0.1.914-beta`) |

> **领先者**：**Unsloth** 在特定模型的CUDA图优化与MoE支持方面处于领先地位。  
> **多样性领跑者**：**llama.cpp** 在GGUF、CPU及移动端后端上展现出最广泛的原生模型覆盖能力。  
> **以代理为核心**：**Ollama** 在采用多模态代理（MiMo V2.6）、视频输入与工具调用可靠性方面最快。

---

### **4. 性能前沿**

| 优化重点              | vLLM                          | SGLang                        | llama.cpp                     | Ollama                         | LiteLLM                       | Unsloth                        |
|-----------------------|-------------------------------|-------------------------------|-------------------------------|--------------------------------|-------------------------------|--------------------------------|
| **KV缓存与内存**       | ✅ 循环GC减少，缓存感知准入机制 | ✅ HiCache死锁修复 | ✅ 延迟主机内存分配 | ⚠️ MLX交换问题 (#18131)     | ✅ Redis电路断路器修复  | ✅ 减少数据库连接 |
| **批处理与推理模式**   | ✅ 批量无关模式（进展中） | ✅ PD解耦（关键修复） | ✅ MTP推测解码（修复） | ✅ 通过 `OLLAMA_NUM_PARALLEL` 实现并发生成 | ✅ 虚拟键 + 回调钩子 | ✅ CUDA图（所有FastModels） |
| **量化**               | ✅ NVFP4、Q4_K_M、上下文感知稀疏LM头 | ✅ NVFP4草稿专家、MoE量化 | ✅ NVFP4 LFM3、Q8_1修正 | ✅ 仅支持BF16/NVFP4（无混合） | ✅ 软预算告警、成本治理 | ✅ FP8 LoRA 优于16位基模型 |
| **内核与硬件**         | ✅ SM89 BF16融合、ROCm深度优化 | ✅ SM120 block32 DeepGEMM、Gluon内核 | ✅ SYCL张量模式（+19%）、HIP快速数学 | ✅ 实时SHA256校验 | ✅ 预构建UI资源 | ✅ 所有FastModel CUDA图（T4：3–7倍加速） |
| **分布式服务**         | ✅ `/token-in/token-out` API路线图 | ✅ DFLASH在PD下崩溃修复 | ❌ | ❌ | ✅ 多租户路由 | ❌ |

> **关键趋势**：**所有FastModel应用CUDA图**（Unsloth）与**解耦服务**（vLLM/SGLang）是当前最激进的性能突破方向。

---

### **5. 层级定位**

| 项目       | 主要层级               | 次要角色                                | 核心差异点 |
|------------|------------------------|------------------------------------------|------------|
| **vLLM**   | **推理引擎**           | 模型服务、网关（通过 `/token-in/out`） | 高吞吐、批处理感知推理的行业标准 |
| **SGLang** | **推理引擎 + 框架**    | PD解耦、强化学习工作流 | 分布式推理架构的前沿领导者 |
| **llama.cpp** | **本地运行时 / CLI工具** | 跨平台、嵌入式推理 | 无与伦比的可移植性与后端多样性（SYCL、Hexagon、WebGPU） |
| **Ollama** | **代理网关 / 本地运行时** | 全栈代理引擎、RAG、工具链 | 开发者导向；代理用户体验与多模态支持最佳 |
| **LiteLLM** | **API网关 / 代理**     | 成本控制、多提供商路由 | 企业级可观测性、软预算控制、安全性 |
| **Unsloth** | **代理工作室 / 训练工具包** | 实时推理、UI定制 | 将训练、微调与推理整合于统一的UI驱动平台 |

> **战略洞察**：**基础设施引擎**（vLLM、SGLang）与**开发者平台**（Ollama、LiteLLM、Unsloth）之间的界限已清晰划分——各自在不同层级上各展所长。

---

### **6. 趋势信号**

1. **解耦是未来扩展的关键**：vLLM与SGLang均大力投入**预填充-解码解耦（PD）**，表明高吞吐、低延迟推理将越来越多依赖于拆分流水线架构。

2. **MoE与混合模型需要专用工具链**：随着Qwen3-MoE、xing4_0与Metis-1.6现已支持，生态已超越单一模型服务——预计更多项目将加入MoE感知调度、专家卸载与部分权重更新功能。

3. **FP8与NVFP4已成为主流**：多个项目（vLLM、SGLang、Unsloth）现已支持FP8或NVFP4量化，表明高效低精度推理已不再是实验性技术，而是可投入生产的成熟方案。

4. **代理工作流正驱动用户体验创新**：Ollama的视频输入、MiMo V2.6与并发生成功能表明，**本地代理开发**正从学术原型转向完整应用——这要求强大的工具链与稳定性保障。

5. **安全与可观测性不可妥协**：LiteLLM的cosign签名镜像与每请求回调机制反映出对安全、可审计、可治理推理管线的迫切需求——尤其在SaaS与受监管环境中。

> **给开发者的行动建议**：  
> - 大规模、批量无关推理优先选择 **vLLM**。  
> - 构建本地、视觉增强型代理系统使用 **Ollama**。  
> - 快速原型设计结合GPU加速推理与LoRA推荐使用 **Unsloth**。  
> - 多提供商编排并需严格成本控制时采用 **LiteLLM**。  
> - 密切关注 **SGLang**，以获取未来基于PD的代理框架进展。

---  
*数据来源：截至2026-11-04的GitHub数据 | 面向AI基础设施领域的技术决策者*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# **vLLM Digest – 2026-11-04**

---

### **1. 今日亮点**  
vLLM 项目持续深化对 **批处理无关推理（batch-invariant inference）** 的支持，经过社区广泛讨论与设计工作，高影响力的功能请求 #27433 已接近完成。在硬件方面，**ROCm/AMD 进展加速**，多个 PR 针对 DeepSeek-V4.1、GLM-5.3 以及 Muse Spark 在 MI350X/MI350P 上进行优化。与此同时，**Rust 前端成熟度提升**，通过改进基准测试和稳定性修复，表明其已具备生产环境部署的准备。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未报告新版本或破坏性变更。未观察到新的发布或 API/config 的破坏性更改。

---

### **3. 新模型与硬件支持**  
- **DeepSeek-V4.1**：通过 PR #65555 扩展 ROCm 支持（跨 TP rank 分片稀疏索引预填充行），并通过 PR #62812 加强分词器（拒绝保留的特殊标记）。  
- **GLM-5.3-Flash**：通过 PR #63070 实现 ROCm 特定性能优化（默认启用可拆分 CUDA 图），并在问题 #57406 中跟踪内核级优化进展。  
- **Muse Spark（AMD）**：专用解码路径现已支持 MI350P（#63712），并解决 MI350X 上长上下文解码卡顿问题（#65190）。  
- **NVIDIA Nemotron 3.5 ASR 流式传输**：功能请求 #47455 跟踪支持此 600M 参数多语言流式语音识别模型。  
- **Intel GPU（XPU）**：PR #65416 修复了 CI 测试，确保稳定的 P2P 生命周期及多模态前缀-LM 测试。  

> 🔗 [PR #65555](https://github.com/vllm-project/vllm/pull/65555) | [PR #63070](https://github.com/vllm-project/vllm/pull/63070) | [PR #65416](https://github.com/vllm-project/vllm/pull/65416)

---

### **4. 性能与优化**  
- **推测性解码**：PR #59740 报告在 Qwen3.8-Flash-Next-NVFP4 上使用上下文感知稀疏 LM 头，实现 c=1 时解码吞吐量提升 **+13.8%**（c=4 时 +7.7%），且与量化组合后进一步提升（NVFP4 下 +23.3%）。  
- **内核融合**：PR #65344 为 SM89（RTX 4090）上的 Qwen2MoeMLP 预填充引入可选的 BF16 门控投影融合，提升密集 MLP 效率。  
- **Rust 基准测试**：PR #64308 在结果 JSON 及文件名中新增启动阶段运行追踪；PR #64946 确保 `--output-len` 正确映射至 ShareGPT/HF 数据集。  
- **内存效率**：PR #65300 移除了循环垃圾回收中的每请求 token/block ID 列表，降低长上下文场景下的内存压力。  
- **预填充优化**：PR #54625 实现缓存感知的准入排序，优先处理具有缓存前缀的请求，减少冷启动延迟。  

> 🔗 [PR #59740](https://github.com/vllm-project/vllm/pull/59740) | [PR #65344](https://github.com/vllm-project/vllm/pull/65344) | [PR #65300](https://github.com/vllm-project/vllm/pull/65300)

---

### **5. 稳定性与回归问题**  
- **严重 ROCm 启动崩溃**：PR #65554 修复了 DeepSeek-V3.2（TP2+PP2）在扩展 KV 缓存下启动时的非法内存访问问题，由未对齐的 KV 段引起。  
- **跨请求缓存污染**：问题 #61160 报告在 PD 分离部署中，因启用自动前缀缓存导致共享前缀重用，造成间歇性请求内容泄露。  
- **机密计算环境下静默垃圾输出**：问题 #57224 显示当 `VLLM_USE_V2_MODEL_RUNNER=1` 时，钉住主机内存的旧 UVA 视图会导致静默垃圾输出。  
- **v0.32.0 中块大小失败**：问题 #59203 报告在 Blackwell RTX PRO 6000 服务器上无法使用任何块大小（64/128 均失败），已在 #60762 中跟踪。  

> 🔗 [PR #65554](https://github.com/vllm-project/vllm/pull/65554) | [Issue #61160](https://github.com/vllm-project/vllm/issues/61160) | [Issue #57224](https://github.com/vllm-project/vllm/issues/57224)

---

### **6. 对应用开发者的启示**  
- **在生产环境中使用批处理无关模式**以实现确定性推理——进度请关注 #27433。  
- **启用 Rust 前端**（`VLLM_USE_RUST_FRONTEND=1`）以获得低延迟、高吞吐服务；预计近期将推出更完善的工具链与基准测试。  
- **利用缓存感知准入机制**与**优先抢占策略**（问题 #40004），实现对代理系统中请求调度的细粒度控制。  
- **避免 ROCm 崩溃**，建议升级至最新 nightly 构建，或应用如 #65554 和 #63712 等修复补丁。  
- **为分离式服务做好准备**——`/token-in/token-out` API 路线图（#22817, #34407）将支持自定义前端、多模态输入处理及强化学习工作流。  

> 📌 实用提示：若遇到跨请求污染问题（#61160），可临时使用 `--no-enable-prefix-caching`；后续更新将安全解决该问题。

---  
*数据来源：[vllm-project/vllm GitHub](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 消息简报 – 2026-11-04**

---

### **1. 今日重点**  
SGLang 项目持续加速推进 **预填充-解码分离（PD）** 与 **多架构性能优化**，核心工作包括 AMD ROCm 支持、Blackwell SM120 内核调优，以及 PD 模式下推测解码的稳定性修复。关键 CI 基础设施问题和不稳定的测试追踪仍是重点关注项，同时多个 PR 推进了 MoE 量化、缓存管理及工具调用处理。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告任何内容。*

---

### **3. 新模型与硬件支持**  
- **AMD ROCm (gfx950 / MI355X):** 针对 `Qwen3.8-Flash-Next` 的性能优化正在进行，通过 Gluon 内核（`PR #46486`）实现，并新增 DCP-size 崩溃修复（`PR #38709`）。  
- **Intel XPU:** 引入 RFC，支持分页专家（paged-experts）与前瞻专家调度（LES）及 SSD 层卸载功能（`PR #46520`）。  
- **Mooncake Engram 存储:** 为 Qwen4-Exp PLE N-gram 表添加节点分片存储（`PR #47673`）。  
- **NVIDIA Blackwell (SM120):** DeepSeek-V4.1 FP8 已原生启用 block32 DeepGEMM（`PR #47210`）。  
- **新模型:** 新增对 `nvidia/Nemotron-3-Embed-1B-BF16` 嵌入模型的原生支持（`PR #45885`）。  

---

### **4. 性能与优化**  
- **DeepSeek-V4.1 (SM120):** `--fp8-gemm-backend deep_gemm` 现已明确使用原生 block32 GEMM，提升吞吐量（`PR #47210`）。  
- **Qwen3.8-Flash-Next (SM120):** FP8 KV 的 Split-K 稀疏解码内核提升 MTP 目标验证效率（`PR #48296`）。  
- **MoE 优化:** 在 MIXED_PRECISION 检查点中对草稿专家进行 NVFP4 量化（`PR #48295`），并在部分权重更新过程中保持专家完整性（`PR #48299`）。  
- **内存效率:** 通过一个 Triton 内核优化索引器页表扩展，降低 CPU 开销（`PR #48229`）。  
- **内核调优:** 为 BF16 线性层启用位级完全一致的 cuBLASLt 算法表，提升占用率与利用率（`PR #48294`）。  

---

### **5. 稳定性与回归问题**  
- **严重崩溃:** `DFLASH` 推测解码在 PD 分离模式下因缺少拆分连线导致崩溃（`Issue #36140`，已关闭）。  
- **CUDA 核心转储:** 自动收集的核心转储追踪显示反复出现硬件级故障（`Issue #26340`，354 条评论）。  
- **ROCm 崩溃:** `--dcp-size > 1` 导致运行时崩溃，源于错误返回值解包（`Issue #38709`）。  
- **不稳定的 CI:** PR 测试与基础设施频繁失败，持续追踪中（`#42752`）。  
- **缓存死锁:** TP=4 且无 PP 时 HiCache 预取死锁（`Issue #30760`，已关闭）。  
- **工具调用问题:** 错误格式的多模态请求引发引擎级崩溃（`Issue #38022`，已关闭）；错误格式的 Harmony 头部现在可恢复（`PR #48297`）。  

---

### **6. 对应用开发者的启示**  
- **谨慎使用 PD 分离:** 若使用 PD 模式，请避免 `DFLASH` 推测解码 —— 建议暂用 DSPARK/EAGLE，直至 `#36140` 完全修复。  
- **预期在 SM120 上获得更高吞吐:** 利用 `--fp8-gemm-backend deep_gemm` 与 `block32` 内核，在 RTX PRO 6000 Blackwell 上实现高吞吐推理。  
- **稳健处理工具调用:** 使用更新后的 Harmony 渲染逻辑（`PR #48297`），防止错误输入导致静默函数调用丢失。  
- **关注 CI 健康状态:** 预期测试结果不稳定，提交 PR 时需准备频繁重试。  
- **规划多架构部署:** ROCm 与 XPU 支持正在成熟 —— 请尽早于 gfx950/MI355X 与 Intel XPU 上验证性能。  

> 🔗 [查看完整问题列表](https://github.com/sgl-project/sglang/issues) | [浏览最近的 PR](https://github.com/sgl-project/sglang/pulls)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp 每日简报 – 2026-11-04**

---

### **1. 今日亮点**  
最新开发周期聚焦于稳定推测解码（MTP）功能，修复了隐藏状态管理及 GPU 内核正确性等关键问题。显著进展包括：通过 `--sm tensor` 优化提升 Intel SYCL 性能（提示词评估速度提升 +19%），增强对 Nemotron 3.5 Transcribe 的支持，新增 Metis-1.6 与 xing4_0 的模型级支持。重大 CUDA 修复解决了 Q8_1 修正和的问题，同时持续推进内存安全及后端特定回归问题的修复。

---

### **2. 发布与破坏性变更**  
- **`b12091`**：修复 MTP 隐藏状态保存/恢复逻辑 —— 对量化模型上的稳定推测解码至关重要 ([#30141](https://github.com/ggml-org/llama.cpp/pull/30141))。  
- **`b12090`**：解决 `ggml-zdnn` 后端中 fattn 测试失败问题 ([#31583](https://github.com/ggml-org/llama.cpp/pull/31583))。  
- **`b12089`**：完整支持 **Metis-1.6** 模型，包含架构注册与 GGUF 转换 ([#31134](https://github.com/ggml-org/llama.cpp/pull/31134))。  
- **`b12088`**：启用 **NVFP4 LFM3** GGUF 格式支持 —— 为特定 LFM3 变体提供高效推理能力 ([#31608](https://github.com/ggml-org/llama.cpp/pull/31608))。  
- **`b12087`**：引入 **Nemotron 3.5 Transcribe** 支持，具备草稿模型兼容性及 BF16 检查点验证 ([#31471](https://github.com/ggml-org/llama.cpp/pull/31471))。

> ✅ *迁移提示*：依赖量化目标进行推测解码的用户应升级至 `b12091+`，以避免贪婪采样输出偏差。

---

### **3. 新模型与硬件支持**  
- **模型**：  
  - ✅ **Metis-1.6**（完整支持：架构、超参数、转换、推理图）。  
  - ✅ **xing4_0**（架构注册，支持 MoE/MTP/MHC/MLA，GGUF 转换）。  
  - ✅ **Nemotron 3.5 Transcribe**（草稿模型集成，词汇表对齐，强制仅支持 BF16）。  
- **后端与硬件**：  
  - ✅ **Hexagon（Snapdragon 7 Gen 4）**：通过 PR [#31289](https://github.com/ggml-org/llama.cpp/pull/31289) 添加 `LIGHTNING_INDEXER` 支持。  
  - ✅ **WebGPU**：现已支持批量张量 API（`get_tensor_n`，`set_tensor_n`）([#31473](https://github.com/ggml-org/llama.cpp/pull/31473))。  
  - ✅ **SYCL（Intel）**：优化 `comm_exchange` 内核，使 `-sm tensor` 在 B70s 上吞吐量提升 +19% ([#30956](https://github.com/ggml-org/llama.cpp/pull/30956))。

---

### **4. 性能与优化**  
- **Intel SYCL**：`--sm tensor` 提示词评估速度提升 **+19%**（均值），性能接近 `--sm layer` 且无 PPL 下降 ([#30956](https://github.com/ggml-org/llama.cpp/pull/30956))。  
- **CUDA**：Q8_1 修正和错误的潜在修复提升了数值稳定性 ([#31247](https://github.com/ggml-org/llama.cpp/pull/31247))。  
- **OpenCL（Adreno）**：通过每线程更高行输出（4–8 行）优化 `q2_0 GEMV` 内核，在移动 GPU 上提升效率 ([#31577](https://github.com/ggml-org/llama.cpp/pull/31577))。  
- **HIP**：启用 fast-math 无回归问题 —— 向 ROCm 性能对齐迈出最后一步 ([#31625](https://github.com/ggml-org/llama.cpp/pull/31625))。  
- **主机内存**：调度器上下文与图元数据中的延迟分配降低了主机内存占用 ([#31274](https://github.com/ggml-org/llama.cpp/pull/31274))。

---

### **5. 稳定性与回归问题**  
- **严重**：  
  - 🚨 **推测解码偏差**（`--spec-type draft-mtp`）：在量化目标（如 Q4_K_M）上，贪婪采样输出与原生版本不一致；已在 `b12091` 上确认但尚未修复 ([#25618](https://github.com/ggml-org/llama.cpp/issues/25618)，37 条评论)。  
  - 🚨 **CUDA 非法内存访问**：当 MTP 草稿模型在 KV 缓存回滚/清空后运行时发生崩溃；影响 Gemma 4 31B ([#31077](https://github.com/ggml-org/llama.cpp/issues/31077))。  
- **高优先级**：  
  - ⚠️ **SYCL 段错误**：在 oneAPI 2026.2.0 上报告；可能与内存布局或缓冲区处理有关 ([#31064](https://github.com/ggml-org/llama.cpp/issues/31064))。  
  - ⚠️ **Qwen4exp + MTP 崩溃**：因输入配置不当导致服务器启动时触发 `GGML_ASSERT(buffer)` ([#30860](https://github.com/ggml-org/llama.cpp/issues/30860))。  
- **持续问题**：  
  - ❌ **AMD CDNA2 编译失败**（gfx90a，MI210）：因 HIP 代码生成问题导致构建失败 ([#30869](https://github.com/ggml-org/llama.cpp/issues/30869))。  
  - ❌ **Hexagon HMX MUL_MAT 对 `n >= 5` 返回 inf** —— 阻碍 Snapdragon 7 Gen 4 上使用 ([#29473](https://github.com/ggml-org/llama.cpp/issues/29473))。

> 🔧 *修复进行中*：PR [#31634](https://github.com/ggml-org/llama.cpp/pull/31634) 旨在稳定 CUDA 的 GDN 内核顺序；PR [#31630](https://github.com/ggml-org/llama.cpp/pull/31630) 已合并，用于解决相关问题。

---

### **6. 对应用开发者的意义**  
- **生产环境使用 `b12091+` 进行推测解码** —— 旧版本在量化模型上可能导致输出不一致。  
- **在 Intel SYCL 中使用 `--sm tensor`** 可实现接近层级性能；预期提示词评估速度提升约 +19%。  
- **立即集成 Nemotron 3.5 Transcribe 与 xing4_0**，通过 `b12087+` 与 `b12089+`；请确保使用 BF16/NVFP4 量化格式。  
- **在 [#28777](https://github.com/ggml-org/llama.cpp/issues/28777) 修复前，避免在 DFlash2 + `--split-mode tensor` 组合下使用 `--model-draft`** —— 预期会崩溃。  
- **密切监控 SYCL 与 CUDA 后端** —— 最近的回归可能影响实时代理或高负载服务器。  
- **为未来的 MoE/MTT 工作负载做准备**：新支持的 `xing4_0` 与 `Metis-1.6` 表明混合架构生态系统日趋成熟。

> 📌 *实用提示*：对于 CPU 密集型 FFN，可使用 `--n-cpu-mode` 与 `--n-cpu-ffn` —— 功能请求 [#27987](https://github.com/ggml-org/llama.cpp/issues/27987) 仍开放，但需求广泛。

---  
*本简报由 GitHub 数据生成于 2026-11-04 | 来源：[github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-04**

---

### **1. 今日亮点**  
Ollama v0.40.15-rc0 在 Linux 上原生集成 MLX CUDA 库，并新增对全新 **MiMo V2.6** 模型的支持，显著增强多模态与代理能力工作流。关键改进包括：MLX 上的视频输入支持（PR #19348）、分词 API（`/api/tokenize`），以及修复流式响应中的授权错误和工具调用截断问题（PRs #19494, #19491）。这些升级进一步巩固了 Ollama 作为本地 LLM 代理全栈推理引擎的地位。

---

### **2. 发布与破坏性变更**  
- **v0.40.15-rc0**：发布包含关键稳定性与性能更新。未报告破坏性 API 变更，但用户应验证自定义工具链在 `num_return_sequences`、`truncation` 或流式响应中 `AuthorizationError` 处理方面的兼容性。
- **API 修复**：流式 `401 Unauthorized` 响应现在即使响应体格式错误也能正确传播 `AuthorizationError`（PR #19491）。
- **Bug 修复**：生成过程中被截断的工具调用不再导致 HTTP 500 错误；现可安全丢弃（PR #19494）。

> 🔗 [完整更新日志](https://github.com/ollama/ollama/compare/v0)

---

### **3. 新模型与硬件支持**  
- ✅ **MiMo V2.6**（MLX & GGUF）：通过 PR #19400 添加 — 支持高级推理与多代理编排。
- 🎥 **视频输入支持（MLX）**：MLX 模型现已可通过 `/api/chat` 与 `/api/generate` 接口的 `images` 字段接收 MP4/MOV 视频片段。macOS 上已可用（PR #19348）；Linux/Windows 支持待定（Issue #19503）。
- 🧠 **AutoTrust 决策模型（MLX）**：实验性支持具备信任感知能力的视觉+文本模型（PR #19399）。
- 💻 **Kimi Code CLI 集成**：`ollama launch kimi` 现支持现代配置驱动的模型选择（PR #19506）。

> 🔗 [测试 MiMo V2.6](https://github.com/ollama/ollama/pull/19400) | 🔗 [视频输入 PR](https://github.com/ollama/ollama/pull/19348)

---

### **4. 性能与优化**  
- ⚡ **模型拉取加速**：PR #19505 引入**并行下载期间实时进行 SHA256 校验**，消除冗余的拉取后哈希检查。对于大型 GGUF 模型（如 100GB+），延迟降低高达约 30%。
- 🔄 **并发生成（MLX）**：PR #19197 通过 `OLLAMA_NUM_PARALLEL` 实现每个 MLX 模型支持多个并发生成（默认值：1）。在不增加每请求内存开销的前提下，提升代理流水线吞吐量。
- 🔤 **分词 API**：PR #19498 新增 `/api/tokenize` 与 `/api/detokenize` 接口 — 支持无需加载模型即可预分词，加快提示工程与成本估算速度。

> 🔗 [并发生成 PR](https://github.com/ollama/ollama/pull/19197) | 🔗 [分词功能 PR](https://github.com/ollama/ollama/pull/19498)

---

### **5. 稳定性与回归问题**  
| 问题 | 严重性 | 状态 | 修复/临时方案 |
|------|----------|--------|----------------|
| #18131: MLX 前缀缓存导致 32GB Apple Silicon 设备严重交换 | 高 | 开放 | 手动减小 `prefix_cache_size` 直至修复上线 |
| #17408: 模型驱逐时调度器死锁 | 严重 | 开放 | 阻止所有新模型加载；可在 0.31.1 与 main 分支复现 |
| #19489: 非 JSON 格式的 401 流中丢失 `AuthorizationError` | 中等 | 开放 | 已在 PR #19491 修复（待合并） |
| #19493 / #19494: 工具调用截断 → HTTP 500 | 高 | 开放 | 已在 PR #19494 修复（待合并） |
| #19492: 响应静默截断过大的输入 | 高 | 开放 | 在 Windows 上已复现；影响准确性 |
| #19485: v0.40.13 中 NVIDIA Pascal GPU CUDA 错误 | 高 | 已关闭 | 可能由旧版驱动或 CUDA 版本引起 |

> 🔗 [调度器死锁](https://github.com/ollama/ollama/issues/17408) | 🔗 [MLX 交换问题](https://github.com/ollama/ollama/issues/18131)

---

### **6. 对应用开发者的意义**  
- **代理工作流**：使用 `OLLAMA_NUM_PARALLEL` 与 `miMo-v2.6` 构建低延迟、多步骤的视觉与决策代理。
- **流式可靠性**：在 PR #19491 合并后，预期 `Client.stream()` 能稳定传播 `AuthorizationError` — 对构建安全、有状态的应用至关重要。
- **工具链与自动化**：利用新 `/api/tokenize` 接口及 `list`/`ps` 命令中的 `--json` 标志（PR #17349），将 Ollama 集成至 CI/CD、监控与 RAG 流水线。
- **规避陷阱**：不要仅依赖 `num_return_sequences` 或 `temperature=0` 实现确定性输出 — 应使用固定 `seed` + `top_p=1` + `repetition_penalty=1.0`（Issue #5738）。
- **构建系统**：在 Windows 上，若从源码构建，请仅使用 `cmake -G Ninja` — 避免 `CMakeLists.txt` 问题（PR #19496）。

> 🔗 [开发者指南](https://docs.ollama.ai) | 🔗 [API 参考](https://github.com/ollama/ollama/blob/main/docs/api.md)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 摘要 – 2026-11-04**

---

### **1. 今日亮点**  
最新发布的候选版本 `v1.109.0-rc.1` 通过 cosign 签名的 Docker 镜像增强了安全性，并在代理稳定性方面带来关键改进，包括修复 Redis 断路器行为以及启动时对 `Asia/Calcutta` 时区的处理问题。值得注意的是，新增的 PR 支持按请求配置回调函数，并为内部用户引入软预算告警功能——这对多租户成本治理至关重要。

---

### **2. 发布与破坏性变更**  
- **v1.109.0-rc.1**：首个支持完整 cosign 签名验证的候选版本；镜像完整性已通过 [提交 `e82a3c6`](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065) 确认。  
- **破坏性变更（待定）**：将移除旧版 `AccountingDelivery` 表，改用新的 `SpendLogsDelivery` 系统 ([PR #49856](https://github.com/BerriAI/litellm/pull/49856))，依赖历史会计数据的用户需进行数据库迁移。  
- **新功能**：虚拟密钥现在可通过环境密钥解析运行时的 `callback_settings` 定义 ([PR #49995](https://github.com/BerriAI/litellm/pull/49995))。

---

### **3. 新模型与硬件支持**  
- **Cloudflare Workers AI**：通过 Cloudflare Workers AI 接口实验性支持 **图像与音频生成**，相关功能正在封闭议题中追踪（#35055, #35056），但尚未合并。  
- **Bedrock Converse Claude**：在 `/v1/messages` 调用中优化了 `output_config.effort` 的处理，避免因思考阻塞导致的问题 ([PR #49990](https://github.com/BerriAI/litellm/pull/49990))。  
- **Google GenAI**：代理客户端头信息现已正确转发至 `generate_content` 与 `streamGenerateContent` 路由 ([PR #49972](https://github.com/BerriAI/litellm/pull/49972))。

---

### **4. 性能与优化**  
- **文本转语音流式传输**：现已支持来自 ElevenLabs 等服务商的实时音频流式播放——长片段可在约 0.65 秒后开始播放，无需等待完整生成 ([PR #46222](https://github.com/BerriAI/litellm/pull/46222))。  
- **代理效率提升**：将 UI 文本提取至 i18n 文件 ([PRs #49991, #49994, #49992](https://github.com/BerriAI/litellm/pulls?utf8=%E2%9C%93&q=is%3Aopen+author%3Ayuneng-berri)) 减少了前端包体积，并提升了未来本地化速度。  
- **构建优化**：Docker 构建中复用预构建的 UI 资产，使 CI 流水线时间最多缩短 40% ([PR #29092](https://github.com/BerriAI/litellm/pull/29092))。

---

### **5. 稳定性与回归问题**  
- **严重**：若探测失败且错误非连接类（如 `READONLY`），Redis 断路器在故障转移后将无限期保持在 `HALF_OPEN` 状态——影响高可用部署 ([Issue #49884](https://github.com/BerriAI/litellm/issues/49884))。  
- **高危**：时区配置错误（`Asia/Calcutta`）导致代理启动失败，原因是缺少 `tzdata-legacy` 包——在 Ubuntu 24.04/26.04 上常见 ([Issue #49813](https://github.com/BerriAI/litellm/issues/49813))。  
- **中等**：OpenAI 返回 `403` 响应时抛出 `APIError` 而非预期的 `PermissionDeniedError`，破坏了 SDK 错误层级结构 ([Issue #49936](https://github.com/BerriAI/litellm/issues/49936))。  
- **修复中**：多个针对特定模型的缺陷修复正在进行审查（例如 Mistral 忽略 `tool_choice`、Gemini 忽略早期系统消息）([Issues #39736](https://github.com/BerriAI/litellm/issues/39736), [#48813](https://github.com/BerriAI/litellm/issues/48813))。

---

### **6. 对应用开发者的意义**  
- **增强可观测性与治理能力**：利用 `soft_budget` 与按请求回调功能，可在团队或用户层面实现细粒度的成本告警与日志记录——适用于 SaaS 或智能体平台。  
- **面向未来的 API 设计**：预计将加强类型校验与错误处理机制——例如 `PermissionDeniedError` 与 OpenAI SDK 对齐，将提升错误一致性。  
- **规避陷阱**：生产环境中请避免使用 `Asia/Calcutta`，直至安装 `tzdata-legacy` 包；建议改用 `UTC` 或 `Asia/Kolkata`。  
- **智能体工作流**：即将到来的 `complexity_router` 改进及 `fusion_model` 功能请求 ([#35781](https://github.com/BerriAI/litellm/issues/35781)) 表明路由层对高级混合专家（Mixture-of-Experts）模式的支持正逐步增强。

---  
*如需实时更新，请关注 [LiteLLM GitHub Issues](https://github.com/BerriAI/litellm/issues) 与 [PRs](https://github.com/BerriAI/litellm/pulls)。*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

### **Unsloth Digest — 2026-11-04**

---

#### **1. 今日亮点**  
v0.1.914-beta 版本引入了备受期待的 *Glass Theme* 以及对 UI 背景、欢迎语和聊天界面的增强自定义功能，同时在生成速度上实现显著提升，并扩展了多 GPU 训练支持——包括实验性的 CPU 训练。与此同时，核心开发加速推进，多个高影响力 PR 聚焦于 CUDA 图优化、FP8 LoRA 支持以及 Studio 中实时推理可见性。

---

#### **2. 发布与破坏性变更**  
- **v0.1.914-beta**（GitHub：[发布](https://github.com/unslothai/unsloth/releases/tag/v0.1.914-beta)）  
  - 新增：Glass 主题，个性化 UI 元素（背景、欢迎语），更快的生成流水线。  
  - 扩展：多 GPU 训练支持，通过 `unsloth` CLI 初步支持 CPU 训练。  
  - 注意：报告更新问题（如 #16573、#16561）表明可能存在 AppImage 或桌面安装程序处理不完整的情况——用户应手动验证更新是否成功。

---

#### **3. 新模型与硬件支持**  
- **新后端**：通过 `unsloth` CLI 实验性支持 **CPU 训练**（已在 v0.1.914-beta 中报告）。  
- **GPU 支持**：  
  - AMD ROCm 现在通过 #16609（NVIDIA 主机伪装修复）获得测试一致性改进。  
  - Vulkan 支持仍受限——#16395 报告在 Windows 10 22H2 上 RX 5700 XT 出现失败；暂无解决方案。  
- **模型格式**：  
  - 冻结的 16 位基础模型已启用 FP8 LoRA 支持（#16423）。  
  - Qwen3-MoE、Mistral 3、Granite、Cohere 2、GLM-4、OLMo 2 已加入 CUDA 图解码范围（#16587）。

---

#### **4. 性能与优化**  
- **CUDA 图**：解码现已应用于 *所有 FastModel 变体*（Gemma 3、Qwen3-VL、Llama 4、Mistral 3、Phi-4 等），在 T4 上实现 **3–7 倍加速**，且结果与急切模式完全一致（#16587）。  
- **LoRA 优化**：  
  - 支持 16 位基础层上的 LoRA 的 FP8 前向 + 输入梯度（#16423）。  
  - 在长生成调用期间将 16 位 LoRA 折叠进基础权重，解码速度提升 **1.3–1.4 倍**（#16576）。  
- **内存与 I/O**：  
  - RAG 同步中减少冗余数据库连接：每个线程仅保留一个 `rag.db`（#16607）。  
  - `adapter_config.json` 每次推理工作加载时仅读取一次（#16604），降低开销。

---

#### **5. 稳定性与回归问题**  
- **严重 UI 卡顿**：长时间对话导致明显 UI 卡顿（桌面端 + Web 端）；已在 #16603 确认为回归问题；尚未有修复 PR。  
- **静默失败**：  
  - 模型加载会静默取消正在运行的聊天而无警告（#16479）。  
  - `search_conversation` 工具消失（第二次出现；#16602）。  
- **更新与启动问题**：  
  - Slackware64-current 上因 GLib/AppIndicator 符号查找错误导致 AppImage 无法启动（#16605）。  
  - macOS（Apple MLX）和 Windows（AppImage）的桌面更新失败，原因可能是下载或解包不完整（#16573、#16561）。  
- **正在进行中的修复**：  
  - #16587（CUDA 图）和 #16576（LoRA 折叠）已稳定合并——未报告回归问题。  
  - #16609（ROCm 测试修复）仅为测试用途；非运行时回归。

---

#### **6. 对应用开发者的意义**  
- **构建更快速的智能体**：利用所有主流模型（Llama 4、Qwen3、Mistral 3）的 CUDA 图，实现最高 **7 倍推理加速**——适用于低延迟智能体工作流。  
- **优化 LoRA 工作负载**：使用 FP8 LoRA 以减小内存占用并加快前向传播；在运行时折叠 LoRA 权重以支持更长的生成任务。  
- **谨慎处理状态**：注意聊天过程中可能静默卸载模型——切换模型前务必检查 `force_cancel_active`。  
- **未来兼容配置**：构建自定义智能体时，请关注 `chat_template_kwargs` 过滤变化（仅保留 `enable_thinking`、`reasoning_effort`、`preserve_thinking`；#16545）。  
- **UI/UX 注意事项**：若在生产环境中使用 unsloth-studio，避免长时间运行的对话；直到 #16603 解决前，预期会出现 UI 卡顿。

> 🔗 **关键链接**：  
> - [v0.1.914-beta 发布](https://github.com/unslothai/unsloth/releases/tag/v0.1.914-beta)  
> - [CUDA 图 PR #16587](https://github.com/unslothai/unsloth/pull/16587)  
> - [FP8 LoRA PR #16423](https://github.com/unslothai/unsloth/pull/16423)  
> - [LoRA 折叠 PR #16576](https://github.com/unslothai/unsloth/pull/16576)  
> - [UI 卡顿问题 #16603](https://github.com/unslothai/unsloth/issues/16603)

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*