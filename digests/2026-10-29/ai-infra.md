# AI 基础设施日报 2026-10-29

> 生成时间: 2026-10-29 04:07 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

### **跨项目AI基础设施生态报告 – 2026-10-29**

---

#### **1. 生态概览**  
2026年末，AI推理与服务领域正呈现出硬件、模型架构和部署模式的快速专业化趋势。各项目逐步分化为不同角色：高性能引擎（vLLM、SGLang）、轻量级本地运行时（llama.cpp）、统一网关（LiteLLM）以及全栈微调平台（Unsloth）。清晰的趋势包括**异构硬件支持**、**多模态扩展**和**分布式推理优化**。然而关键稳定性问题依然存在——特别是推测解码、MoE缓存和后端内存管理方面——表明性能提升仍以操作复杂度为代价。

---

#### **2. 活跃度对比**

| 项目       | 近7日开放的问题数 | 近7日合并的PR数 | 发布状态     |
|---------------|------------------|------------------|--------------|
| vLLM          | 34               | 87               | 无           |
| SGLang        | 28               | 52               | 无           |
| llama.cpp     | 41               | 68               | ✅ v0.8.0（今日） |
| Ollama        | 37               | 33               | ✅ v0.40.13（今日）|
| LiteLLM       | 26               | 45               | ✅ RC版本已发布    |
| Unsloth       | 43               | 39               | ✅ v0.1.912-beta   |

> **洞察**：*llama.cpp* 和 *Ollama* 今日在发布活动上领先，主要受多模态模型上线驱动。*vLLM* 在PR数量上占据主导，反映出其在内核级优化上的强劲势头。

---

#### **3. 模型支持竞赛**

| 新模型 / 架构             | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------------|------|--------|-----------|--------|---------|---------|
| **Kimi-K3 (DSpark)**       | ✅   | ⚠️（工具调用缺陷） | ❌        | ❌     | ❌      | ❌      |
| **DeepSeek-V4-Flash / V4.1-Flash** | ✅（ROCm/TP） | ⚠️（OOM崩溃） | ✅（deepseek41分支） | ⚠️（OOM崩溃） | ❌      | ❌      |
| **Qwen3.8-Flash-Next**     | ✅（ROCm） | ❌     | ❌        | ❌     | ❌      | ❌      |
| **LiquidAI LFM3（文本/音频/全能）** | ❌   | ❌     | ✅（v0.8.0） | ✅（仅MLX） | ❌      | ✅（MLX） |
| **混合Mamba/SWA模型**      | ❌   | ✅（PD分离 + L3卸载） | ❌        | ❌     | ❌      | ❌      |
| **Moore Threads（MUSA）**  | ❌   | ⚠️（追踪中） | ❌        | ❌     | ❌      | ❌      |

> **胜出者**：*SGLang* 在**架构创新**（PD分离、HiCache写回）方面领先；*llama.cpp* 和 *Ollama* 在**模型可用性**（LFM3）上领先；*vLLM* 在**前沿模型的ROCm/AMD性能**上保持优势。

---

#### **4. 性能前沿**

| 关注领域                | vLLM                            | SGLang                         | llama.cpp                      | Ollama                     | LiteLLM                   | Unsloth                    |
|---------------------------|----------------------------------|--------------------------------|--------------------------------|----------------------------|---------------------------|----------------------------|
| **KV缓存效率**           | ✅ MooncakeConnector，混合MoE    | ✅ HiCache写回（0.6ms）         | ✅ ClassLRU缓存（+6–7%）       | ⚠️ Vulkan回归问题           | ❌                        | ✅ 上下文压缩              |
| **推测解码**              | ✅ ROCm优化                       | ❌（严重回归）                 | ✅ Spark2.6 DSpark支持         | ⚠️ 工具调用污染             | ✅ 草案/已接受指标        | ✅ 多层L微调               |
| **批处理与预填充**        | ✅ 混合批跳过，XCD运行            | ✅ PD分离                       | ❌                             | ⚠️ 提示缓存变慢             | ✅ 路由可扩展性            | ✅ 流水线并行              |
| **量化与内核**            | ✅ NVFP4，Marlin降级方案          | ✅ SM120 Qwen图像内核           | ✅ 融合MoE，IM2COL HVX          | ⚠️ MXFP4元数据缺陷         | ✅ 成本精度修复            | ✅ 张量并行                |
| **分布式服务**            | ✅ 弹性TP共享                    | ✅ L3卸载，混合MoE              | ❌                             | ❌                         | ✅ 基于Redis的路由         | ✅ 交错/BFS调度            |

> **趋势**：性能前沿已从原始吞吐转向**弹性共享资源管理**——尤其是KV缓存复用和分布式解码卸载——这主要由长上下文智能体和大型MoE模型的兴起所驱动。

---

#### **5. 层级定位**

| 项目       | 主要层级                  | 核心差异化特征                                  |
|---------------|-----------------------------|-----------------------------------------------------|
| **vLLM**      | 高性能推理引擎               | 针对GPU内核、ROCm、推测解码和混合MoE进行了深度优化 |
| **SGLang**    | 分离式推理平台               | 支持PD分离、HiCache、L3卸载——适用于可扩展集群推理 |
| **llama.cpp** | 本地运行时 / 边缘执行        | 轻量级，跨后端支持（Hexagon、Vulkan、SYCL），现支持多模态 |
| **Ollama**    | 统一网关与CLI运行器         | 用户友好，模型为中心；但对MLX的不透明依赖带来摩擦 |
| **LiteLLM**   | API抽象与路由层              | 整合多个提供方，强制成本防护，支持工具搜索桥接 |
| **Unsloth**   | 微调与训练框架               | 专注高效QLoRA、多GPU流水线/张量并行、上下文压缩 |

> **战略洞察**：该生态正日益呈现**分层与组合化**特征——开发者越来越多地组合使用工具（例如：*vLLM*用于服务，*LiteLLM*用于路由，*Unsloth*用于训练）。

---

#### **6. 趋势信号**

- **硬件碎片化加速**：AMD ROCm、Intel XPU、Moore Threads、Snapdragon Hexagon、Blackwell SM120均拥有活跃且非平凡的支持工作。*vLLM* 和 *SGLang* 在AMD/ROCm成熟度上领先。
- **多模态已成标配**：*llama.cpp* 与 *Ollama* 现已通过LFM3集成音频与视觉支持，标志着推理从纯文本向多模态的转变。
- **推测解码稳定性脆弱**：尽管性能表现优异，多个项目报告结构化输出、工具调用和内存泄漏方面的回归问题——表明该功能在生产环境中仍属高风险。
- **MLX正成为准入门槛**：*Ollama* 与 *Unsloth* 现在要求新模型依赖MLX，若跨平台支持（PR #19366）未成熟，则对Apple Silicon用户构成**平台锁定风险**。
- **Rust迁移渐成主流**：*LiteLLM* 的Rust测试版预示着向亚毫秒级开销演进——未来基准测试很可能更青睐原生Rust基础设施。

> **给开发者的实用建议**：
> - 在AMD/Blackwell上进行高吞吐、长上下文推理时，选用 **vLLM** 或 **SGLang**。
> - 用于边缘或本地部署且含多模态任务时，选择 **llama.cpp**。
> - 将 **LiteLLM** 作为稳定、可审计的网关层，具备成本追踪能力。
> - 在Apple Silicon外环境避免使用 `lfm3-*` 模型，直至MLX依赖被明确文档化。
> - 关注 *Unsloth* 的张量/流水线并行能力，以构建可扩展的微调流水线。
> - 在负载下测试推测解码流程——预期在工具调用和结构化输出中出现无声失败。

---  
*数据来源：GitHub活动统计（2026-10-29）。目标读者：基础设施工程师、平台架构师及AI产品团队中的技术决策者。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-10-29

---

### **1. 今日亮点**  
vLLM 持续对下一代硬件和模型进行激进优化，多个高影响力 PR 集中提升 ROCm（AMD）平台在 Kimi-K3 与 DeepSeek-V4-Flash 上的性能表现，包括更快的推测解码速度和更低的内存压力。在 KV 缓存卸载、混合专家（Hybrid MoE）支持方面也取得关键进展，并引入模块化 `MooncakeConnector` 后端接口，实现异构张量并行（TP）配置下的弹性共享缓存复用。

---

### **2. 发布与破坏性变更**  
*无*。过去 24 小时内未发布新版本或破坏性 API/配置变更。

---

### **3. 新模型与硬件支持**  
- ✅ **ROCm (gfx1151 / MI355X)**：通过 #64098 完全支持 `DeepSeek-V4-Flash-0731`，在长时间 DSpark 服务过程中限制稳定状态内存使用，防止因内存溢出（OOM）被终止。  
- ✅ **Kimi-K3 (DSpark Markov 采样)**：现可在 ROCm 上跨 TP 分片实现词汇表采样（#64031），支持大规模高效推测解码。  
- 🔧 **SM120 (Blackwell RTX 6000/5000)**：原生 NVFP4 MoE 内核支持正在追踪中（#31085）；当前因缺少计算能力检测而回退至 Marlin。  
- 📌 **SM8x (Ampere A100/A800/RTX 30xx)**：请求支持 `DeepSeek-V4-Flash` 模型（#50576），目前受限于缺乏 SM8x 兼容内核。  

> [Issue #50576](https://github.com/vllm-project/vllm/issues/50576) | [PR #64098](https://github.com/vllm-project/vllm/pull/64098)

---

### **4. 性能与优化**  
- ⚡ **推测解码（ROCm）**：  
  - 使用 Triton + `aiter topk_plain` 实现更快的词表 top-k 回退（#61429）。  
  - 延迟 GDN 状态写入至下一步，降低每个草稿令牌的开销（#61434）。  
  - 在推测解码/混合模式下，统一注意力优先于 `ROCM_ATTN`（#61433）。  
- 🚀 **预填充优化**：  
  - 混合批处理现在跳过空查询块，并在所有 XCD 上运行（#62605），显著提升分块预填充场景下的吞吐量。  
- 🔥 **内核级改进**：  
  - 通过未初始化 `core_attn_out` 分配，减少 FlashInfer GDN 预填充中的每层开销（#64419）。  
  - Split-K 分段现已尊重滑动窗口剪枝逻辑（#61760），提升内存局部性。  
- 💾 **KV 缓存效率**：  
  - 引入模块化 `MooncakeConnectorWorker`（#64363），通过统一后端接口路由 KV 数据传输，为未来弹性共享铺路。  
  - 异构 TP 共享扩展至混合 KV 缓存场景（#54307）。  

> [PR #64419](https://github.com/vllm-project/vllm/pull/64419) | [PR #61434](https://github.com/vllm-project/vllm/pull/61434) | [PR #62605](https://github.com/vllm-project/vllm/pull/62605)

---

### **5. 稳定性与回归问题**  
- ❌ **严重回归（推测解码 + 结构化输出）**：  
  在 PP + 推测解码结合结构化输出场景下发现性能下降；已在 #63219 中回滚，此前导致显著延迟恶化。  
  > [PR #63219](https://github.com/vllm-project/vllm/pull/63219) | [Issue #54437](https://github.com/vllm-project/vllm/issues/54437)  
- ⚠️ **内存泄漏 / OOM 风险**：  
  在 gfx1151 平台长期运行 `DeepSeek-V4-Flash-DSpark` 任务可能耗尽 Linux 页表内存，除非加以限制（已在 #64098 中修复）。  
- ⚠️ **GPU 内存飙升**：  
  `cuda.graph` 使用导致 Qwen3.5 模型出现过度内存占用（#38486），影响部署密度。  
- ⚠️ **混合 MoE + TurboQuant 导致崩溃**：  
  `TurboQuant` 与混合 MoE（如 Qwen3.6-35B-A3B-FP8）在 Ampere GPU（SM 80–86）上失败，源于对 Hopper+ 的假设依赖（#40124）。  
- ⚠️ **构建不稳定**：  
  `torch.compile` 生成物在非 UTF-8 本地环境下无法加载，因源文件编码问题（#64365）。  

> [PR #64365](https://github.com/vllm-project/vllm/pull/64365) | [Issue #40124](https://github.com/vllm-project/vllm/issues/40124)

---

### **6. 对应用开发者的启示**  
- 若您在 **AMD GPU（MI355X/gfx1151）** 上部署 **Kimi-K3**、**DeepSeek-V4-Flash** 或 **Qwen3.8-Flash-Next**，近期 ROCm 优化将带来显著性能提升——尤其在推测解码与长上下文推理场景。  
- 可通过新连接器接口（#64363）使用 `mooncake.engine.TransferEngine` 构建跨多节点集群的可扩展、共享式 KV 缓存系统。  
- 在 #40124 修复前，请避免在 Ampere GPU 上对混合 MoE 模型使用 `TurboQuant`。  
- 运行大型 Qwen3.5 实例时，请监控 `cuda.graph` 内存使用情况；若出现内存压力，可临时禁用该功能。  
- 对需要结构化输出与推测解码的智能体应用，务必确认未使用 #63219 所修复问题的受影响版本。  

> **实用提示**：通过 #63896 在 `/v1/responses` 中启用 `thinking_token_budget`，以更好控制智能体工作流中的推理成本。  

---  
*本摘要基于 GitHub 数据生成：[vllm-project/vllm](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

### **SGLang 消息简报 — 2026-10-29**

---

#### **1. 今日亮点**  
SGLang 生态系统在多 GPU、解耦推理能力方面持续推进，**预填充-解码解耦（PD）** 和 **HiCache 优化** 取得显著进展，包括写回淘汰机制改进以及对混合 Mamba/SWA 模型的 L3 离线支持。关键稳定性修复已合并至 **DeepSeek-V4.1-Flash + DSPARK**（OOM 崩溃问题）和 **Kimi-K3 工具调用处理**，同时 **GLM-5.3-Flash** 与 **Qwen-image** 核心在 SM120 Blackwell GPU 上的性能优化工作加速进行。

---

#### **2. 发布与破坏性变更**  
*无* — 过去 24 小时内未报告新版本发布或破坏性 API/配置变更。

---

#### **3. 新模型与硬件支持**  
- **AMD RDNA3/RDNA4 支持（gfx1100/gfx1201）**：追踪主任务 #30599 强调了对消费级 Radeon 显卡的战略启用努力，将 ROCm 支持范围从数据中心 Instinct GPU 扩展至主流显卡。  
- **摩尔线程（MUSA）**：功能请求 #16565 仍处于开放状态，旨在为摩尔线程新兴生态提供原生 GPU 支持。  
- **Intel XPU**：PR #40763 实现了在 Intel XPU 上对 MoE 模型的 **DWDP（分布式权重数据并行）** 支持，并已在 Arc Pro B60 上验证。  
- **混合模型**：通过解码阶段 KV 缓存离线（PR #46940），PD 解耦现已支持 **Mamba 与 SWA 混合模型**。

> 🔗 [AMD RDNA3/RDNA4 支持](https://github.com/sgl-project/sglang/issues/30599) | [摩尔线程 MUSA](https://github.com/sgl-project/sglang/issues/16565) | [Intel XPU DWDP](https://github.com/sgl-project/sglang/pull/40763)

---

#### **4. 性能与优化**  
- **Qwen-Image 2.1**：在 SM120 上对 BF16 门控/上投影进行打包，使 RTX PRO 6000 Blackwell 的端到端延迟降低 **3.16%（512² 图像生成）** 与 **2.63%（512² 编辑）**（PR #47090）。  
- **Joy Image Edit**：融合图像 MLP GELU 激活函数，在 SM120 上提升高质量生成吞吐量（PR #47022）。  
- **GLM-5.3-Flash**：核心优化持续进行中（PR #45373），针对 Hopper（SM90）的原型验证工作正在推进。  
- **HiCache 写回机制**：每次调用的淘汰耗时从约 600ms 降至平均约 0.6ms（PR #46952），在稳定负载下显著提升前缀缓存命中率。  
- **多 LoRA 服务**：PR #45951 在多 LoRA 推理过程中提升了流水线（PP）效率，兼顾吞吐量与 GPU 内存使用。

> 🔗 [Qwen-Image 2.1 优化](https://github.com/sgl-project/sglang/pull/47090) | [HiCache 写回优化](https://github.com/sgl-project/sglang/issues/46952) | [多 LoRA PP 优化](https://github.com/sgl-project/sglang/pull/45951)

---

#### **5. 稳定性与回归问题**  
- **严重 OOM 崩溃**：`DeepSeek-V4.1-Flash + DSPARK` 导致 `SparsePrefillWorkspace` 无限分配，引发整个 TP 组崩溃（#41076）。*修复待定。*  
- **工具调用损坏**：Kimi-K3 返回 400 错误；glm47/deepseek 因 JSON-schema 与 tools 组合缺陷而静默丢弃工具调用（#47167）。*修复待定。*  
- **KV 缓存阻塞**：在持续负载下，当 KV 缓存满时，GLM-5.3 FP8 推理在 TP8、EAGLE、H200 环境中发生挂起（#45781）。*可复现，暂无修复方案。*  
- **HiCache 调度器锁死**：`buffer_only` + Mooncake L3 配置下，当被逐出的工作集超过主机 Mamba 池容量时，调度器崩溃（#45989）。*高危，暂无修复。*

> 🔗 [DeepSeek-V4.1 OOM 崩溃](https://github.com/sgl-project/sglang/issues/41076) | [工具调用缺陷](https://github.com/sgl-project/sglang/issues/47167) | [HiCache 调度器崩溃](https://github.com/sgl-project/sglang/issues/45989)

---

#### **6. 对应用开发者的启示**  
- **生产环境谨慎使用 HiCache**：若对低延迟调度要求极高，避免启用 `write_back`——淘汰操作可能导致单请求停滞超过 500ms。除非内存约束严格，否则建议优先使用 `write_through`。  
- **在 PR #41076 修复前，避免使用 DeepSeek-V4.1-Flash + DSPARK**——TP 环境中存在集群级 OOM 风险。  
- **务必验证 Kimi-K3、glm47 与 deepseek 模型的工具调用集成**：当前行为会静默丢弃工具调用，输出结果可能不一致。  
- **利用 PD 解耦能力部署大规模系统**：近期关于混合 Mamba/SWA 模型支持及 L3 离线（PR #46940）的进展，实现了高效的解码重用。  
- **密切监控 AMD/ROCm CI**：不稳定的测试（#42752）以及测试迁移（如 Kimi-K2.5 MXFP4 BCG 已移至夜间构建）可能影响 CI 可靠性。

> ✅ **建议**：生产推理场景中，优先采用 `write_through` HiCache，避免在 DeepSeek-V4.1 中使用 DSPARK，部署前务必验证工具 schema 兼容性。

--- 

*本简报由 GitHub 数据生成：sgl-project/sglang | 2026-10-29*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 消息简报 – 2026-10-29**

---

### **1. 今日亮点**  
最新开发周期聚焦于**硬件特定优化**，特别是针对 Hexagon（高通骁龙）、Vulkan 及 SYCL 后端，显著提升了 IM2COL 并行化效率与 MoE 缓存管理能力。重大发布引入了 **LiquidAI LFM3 系列**（文本、视觉、音频、全模态），并实验性支持通过 `/v1/realtime` 与 `/tts` 实现流式音频处理，标志着 llama.cpp 多模态能力的显著扩展。

---

### **2. 版本发布与破坏性变更**  
- **v0.8.0**：今日发布，新增功能包括：
  - 通过 `--model` 支持 **LiquidAI LFM3 系列**（文本、视觉、音频、全模态）。
  - 在 `mtmd` 中引入全新的**实验性流式音频 API**，通过 `/v1/realtime` 与 `/tts` 端点实现实时输入/输出。
  - 新增 **DeepSee** 架构支持。
  - 修复控制向量层边界及 M-RoPE 位置循环问题（`#31336`）。
  - [GitHub 发布页](https://github.com/ggml-org/llama.cpp/releases/tag/v0.8.0)

> 🔔 *迁移提示*：新的 `/v1/realtime` 与 `/tts` 端点仍为实验性功能；预计在稳定前会有 API 变更。

---

### **3. 新模型与硬件支持**  
- **模型**：
  - LiquidAI LFM3 系列（文本、视觉、音频、全模态）——通过 `--model` 添加。
  - Spark2.6 DSpark 草稿支持 —— 已在 PR #31168 中加入。
  - DeepSeek-V4.1-Flash（位于 `deepseek41` 分支）——持续集成中；详见问题 #30817。

- **硬件与后端**：
  - **Hexagon（骁龙）**：IM2COL 现在采用基于块的 HVX 并行化（`#31050`）；通过 PocketTTS 优化提升 TTS 性能。
  - **Vulkan**：新增 `count_experts.comp` 优化，减少冗余工作组循环（`#31163`）。
  - **SYCL**：改进 oneDNN FA 缓存线程安全性和运行时失败记忆化（`#31138`）。
  - **OpenVINO**：新增对 SCALE 操作的 slice view 支持（`#31334`）。
  - **WebGPU**：更新 `get_max_size` 以返回 `maxBufferSize`，避免整缓冲区绑定（`#31348`）。
  - **CI 扩展**：新增在骁龙 SC8480XP 上的 Windows 构建及后端操作测试（`#31349`）。

---

### **4. 性能与优化**  
- **Hexagon IM2COL**：基于块的 HVX 并行化显著提升 TTS 工作负载吞吐量（如 PocketTTS）；循环展开与多线程输出列块进一步提高效率（`#31050`）。
- **SYCL**：使用 angelX 优化工作组 argmax，适用于短 TOP_K 行，降低协调开销（`#31110`）。
- **CUDA**：在 MMQ 中融合 MoE gate/up 与 GLU 操作（`#31188`）；批量张量读取现使用映射主机内存以实现更快访问（`#30986`）。
- **MoE 缓存**：新引入的 `ClassLRU` 混合缓存替代 SLRU，在 QFN 上实现 **+6% 解码速度**，在 GLM 上实现 **+7%**，且上传次数减少 8%（`#31233`）。
- **量化**：通过预计算中点加速 IQ4 量化创建（`#31201`）。

---

### **5. 稳定性与回归问题**  
今日报告的关键问题如下：

| 严重程度 | 问题 | 摘要 | 修复状态 |
|--------|-------|---------|------------|
| ⚠️ 高 | [#27330](https://github.com/ggml-org/llama.cpp/issues/27330) | CUDA graphs 导致 GPU 假死（RTX 5090 笔记本版，sm_120） | ✅ 临时方案：`GGML_CUDA_DISABLE_GRAPHS=1` |
| ⚠️ 高 | [#29092](https://github.com/ggml-org/llama.cpp/issues/29092) | HIP/ROCm：融合门控 Delta Net 在请求间携带递归状态 | ❌ 尚无修复 |
| ⚠️ 中 | [#30869](https://github.com/ggml-org/llama.cpp/issues/30869) | AMD MI210（gfx9a CDNA2）上使用 HIP 编译失败 | ❌ 尚无修复 |
| ⚠️ 中 | [#31262](https://github.com/ggml-org/llama.cpp/issues/31262) | SYCL 在 CPU offloaded MoE 场景下，性能较 b11804 到 b11046 下降约 35% | ❌ 怀疑回归 |
| ⚠️ 低 | [#31140](https://github.com/ggml-org/llama.cpp/issues/31140) | SYCL CPY 对 q2_0/q4_0/q5_0 存在舍入不一致 | ✅ 补丁 PR #31120 待审核 |

> 📌 *备注*：多个稳定性问题涉及推测解码、MoE 缓存及后端特定内存处理——均为高性能推理系统中的常见痛点。

---

### **6. 对应用开发者的意义**  
- **多模态应用**：使用 `v0.8.0` 的 `/v1/realtime` 与 `/tts` 端点构建低延迟音频代理或实时语音助手。
- **硬件感知部署**：针对骁龙（Hexagon）设备，利用 `b11976` 的 IM2COL 优化；通过 `ClassLRU` 缓存提升 MoE 性能。
- **规避回归**：若使用 SYCL + MoE offloading，建议锁定至 `b11046` 或更早版本，直至 #31262 修复。
- **内存管理**：使用 `/metrics` 和 `GET /memory`（PR #26130）监控各设备内存使用情况，尽早发现泄漏。
- **模型转换**：更新 `convert_hf_to_gguf.py` 以正确处理 `extra_special_tokens` 作为列表形式（PR #31343），防止崩溃。

> ✅ *最佳实践*：始终在负载下测试模型加载与提示复用——如 KV 缓存空洞问题（#27408）可能在推测解码过程中无声导致输出损坏。

---  
*来源: [ggml-org/llama.cpp GitHub](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-29**

---

### **1. 今日亮点**  
最新版本 v0.40.13 扩展了对 Liquid AI 的 LFM3 系列模型（包括音频和多模态变体）在 Linux、Windows 及 Apple Silicon 平台的原生支持。然而，非 Apple 平台用户面临一个关键的运行时依赖：这些模型现在必须使用 MLX 后端，但模型库中未提供明确文档或过滤选项。这已引发多个高优先级问题，涉及 MLX 检测缺失及模型拉取失败。

---

### **2. 发布与破坏性变更**  
- **v0.40.13**：今日发布，此版本在 Linux 和 Windows 上启用了 **LFM3 模型（lfm3-audio, lfm3-omni）**。  
  🔗 [GitHub Release](https://github.com/ollama/ollama/releases/tag/v0.40.13)  
- **破坏性变更**：`lfm3-*` 模型现在需要 **MLX 运行时**，但该要求未在模型页面、CLI 错误输出或 README 中体现。  
  🔗 Issue #19369 – *文档未提及 MLX 依赖*  
  🔗 Issue #19343 – *无 MLX 时拉取操作静默失败*

---

### **3. 新模型与硬件支持**  
- ✅ **LFM3 系列（文本转语音、多模态）**：现已通过 MLX 支持 **Linux、Windows 及 Apple Silicon（M 系列）**。  
  🔗 [模型库 – lfm3](https://ollama.com/library/lfm3)  
- 🚀 **MLX 后端扩展**：PR #19366 添加了 **Windows 支持与 CPU 后端**，使 MLX 运行器可在非 Metal 系统上实现完整推理。  
  🔗 [PR #19366 – MLX: 增加 Windows 与 CPU 支持](https://github.com/ollama/ollama/pull/19366)  
- 💡 **GGUF 支持**：继续推进大型 MoE 模型（如 `gpt-oss:120b`）的 MXFP4 格式支持，但元数据解析仍不稳定。  
  🔗 Issue #19375 – *MXFP4 MoE 模型读取 GGUF 元数据出错*

---

### **4. 性能与优化**  
- ⚠️ **Vulkan/AMD RADV 回归问题**：用户报告，在启用提示缓存的 AMD GPU（Radeon RX 6600 XT）上，首次请求后生成吞吐量下降约 **30 倍**。  
  🔗 Issue #19201 – *缓存命中后 Vulkan 性能崩溃*  
- ⚠️ **Gemma 4 E 系列显存估算过高**：调度器将显存使用量高估 **3–4 倍**，导致不必要的模型驱逐。  
  🔗 Issue #19357 – *因 CPU 映射嵌入向量导致内存估算膨胀*  
- ✅ **推测解码指标**：PR #19368 增加了每请求粒度的指标（草案/接受的 token），提升对推测解码行为的可观测性。  
  🔗 [PR #19368 – 报告推测解码指标](https://github.com/ollama/ollama/pull/19368)

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 链接 |
|--------|------|--------|------|
| 严重 | `lfm3-audio:latest` 在非 MLX 系统上无法拉取 | 已关闭 | [#19343](https://github.com/ollama/ollama/issues/19343) |
| 高 | MLX 依赖未在任何地方记录 | 已关闭 | [#19369](https://github.com/ollama/ollama/issues/19369) |
| 高 | `qwen3.8:27b-mlx` 若助手先生成自由文本，则无法发出 `tool_calls` | 待处理 | [#19353](https://github.com/ollama/ollama/issues/19353) |
| 高 | 服务器重启后拉取恢复失败（进度超过 1 小时） | 待处理 | [#19337](https://github.com/ollama/ollama/issues/19337) |
| 中等 | `gpt-oss:120b` 因元数据溢出在 MXFP4 格式下失败 | 待处理 | [#19375](https://github.com/ollama/ollama/issues/19375) |
| 中等 | 使用 Vulkan 时 `qwen2.5-coder` 输出乱码 | 待处理 | [#16281](https://github.com/ollama/ollama/issues/16281) |
| 中等 | 即使禁用自动启动，Ollama 仍会自动启动 | 待处理 | [#19067](https://github.com/ollama/ollama/issues/19067) |

> 注：目前尚未有修复 PR 针对主要回归问题（如 `qwen3.8` 工具调用、`gpt-oss` MXFP4），表明稳定性挑战仍在持续。

---

### **6. 对应用开发者的启示**  
- **除非在 Apple Silicon 或已启用 MLX 的系统上，否则避免使用 `lfm3-*` 模型**——其他平台将静默失败。请使用模型库筛选功能（如已添加）或显式检查 `OLLAMA_RUNNER=mlx`。  
- **预期 `qwen3.8:27b-mlx` 存在不一致的工具调用行为**——避免混合内容（文本 + 工具调用）；仅使用空 `content` 模式以确保可靠结果。  
- **在 #19201 修复前，禁用 AMD 系统上的 Vulkan**——生产环境将面临严重的延迟退化。  
- **使用 `--verbose` 与 `ollama run` 配合**，以监控推测解码性能并检测低效的草案接受率。  
- **做好模型拉取恢复失败的准备**——不要在大模型（>1 小时）拉取过程中重启 `ollama serve`。  

🔧 **建议**：若未使用 Apple Silicon 或 MLX，建议锁定至 v0.40.12。关注 PR #19366 获取跨平台 MLX 支持进展，并留意未来关于模型筛选功能的更新（Issue #19355）。

---  
*本摘要基于 GitHub 活动生成（2026-10-29）。*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-10-29**

---

### **1. 今日亮点**  
LiteLLM 生态系统正加速迈向高性能、基于 Rust 的未来，当前正在进行的 Rust 迁移（#31263）已进入早期测试阶段。关键修复提升了 Anthropic 与 Nebius 提供商的成本计算准确性（#48937, #41782），而新提交的 PR 改进了流式响应的可靠性、防护机制的鲁棒性，并支持通过 Responses API 在 Claude 上使用 Codex 工具搜索功能。安全方面持续强化，Docker 镜像已通过 Cosign 签名并验证。

---

### **2. 发布与破坏性变更**  
- 今日发布 **v1.108.0-rc.1**、**v1.106.6** 与 **v1.105.7**，所有版本均使用 [commit `e82a3c6`](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065) 中的密钥进行 Cosign 签名。  
- **Rust 迁移进展**：主任务 #31263 跟踪向 Rust 的迁移进程——预计实现亚毫秒级开销。早期测试版报名通道已开放：[Google 表单](https://docs.google.com/forms/d/e/1FAIpQLSecWdOjkzjEson2UiZpD...)。

---

### **3. 新模型与硬件支持**  
- **Anthropic 上的 Codex 工具搜索**：PR #48972 实现了通过 Responses API 桥接，在 Anthropic 模型上启用 Codex 客户端的 tool_search 功能。  
- **DashScope 新增功能**：PR #48998 增加对 DashScope 的 **图像编辑** 与 **文本转语音** 支持，进一步扩展 QwenCloud 集成功能。  
- **Bedrock 区域前缀嵌入**：PR #47751 现已将区域特定嵌入模型（如 `bedrock/us-west-2/amazon.titan-embed-text-v2:0`）正确路由至对应 AWS 区域并按实际区域计费。

---

### **4. 性能与优化**  
- **流式处理效率**：PR #49002 修复了 `n > 1` 响应中流重建错误的问题，通过独立重建每个选择项，防止在调用后处理中丢失工具调用数据。  
- **路由器可扩展性**：PR #49000 通过在 Redis 排序集合中追踪每项调用的进行中请求数，优化了最少繁忙路由策略——有效避免长时运行请求导致的“空闲”状态滞留问题。  
- **令牌计数鲁棒性**：PR #48916 确保即使后台下载失败，已加载的 Hugging Face 令牌化器仍能持久保留，避免令牌计数期间出现延迟突增。

---

### **5. 稳定性与回归问题**  
- **成本追踪缺陷**：  
  - #48937：流式补全结果记录为 $0，尽管上游报告了 `usage.cost`。  
  - #47533：非流式 OpenAI 兼容调用忽略 `usage.cost`，记录为 $0。  
  - #41782：Nebius 提供商成本计算偏差 ×10。  
  *修复中：PR #48937、#47533、#41782 均已在审核中。*  
- **流式数据损坏**：  
  - #48773：在流式模式下，响应桥接重复传递工具调用参数。已在 PR #48773 中修复。  
- **配置与认证问题**：  
  - #48815：单模型预算上限未强制执行——现已通过共享认证检查实现强制约束。  
  - #36917：在 Anthropic `/v1/messages` 中，系统角色消息被静默丢弃。

---

### **6. 对应用开发者的意义**  
- **使用最新 RC 版本（`v1.108.0-rc.1`）** 以获得更稳定的性能和准确的成本追踪——尤其对 Anthropic、Nebius 与 Azure AI Foundry 的生产计费场景至关重要。  
- **准备 Rust 迁移**：通过 [报名表单](https://docs.google.com/forms/d/e/1FAIpQLSecWdOjkzjEson2UiZpD...) 开始测试早期版本构建——预期延迟更低、吞吐更高。  
- **利用新增功能**：通过 Codex 桥接在 Claude 上使用 `tool_search`，并在 DashScope 上无需直接调用 API 即可启用 TTS 与图像编辑功能。  
- **确保部署安全**：使用 Cosign 验证 Docker 镜像签名；强制启用 `claude_code_marketplace_auth_required`（PR #48980），限制对敏感市场内容的公共访问。

> 🔗 详细信息：[GitHub – BerriAI/litellm](https://github.com/BerriAI/litellm)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

### **Unsloth Digest — 2026-10-29**

#### **1. 今日亮点**  
v0.1.912-beta 版本引入了万圣节主题的用户体验优化与关键性能改进，包括更快的首次启动速度、优化的 Linux 工具调用，以及对多 L 微调工作流更好的支持。关键稳定性修复解决了 QLoRA 训练中的显存过度使用问题（尤其在双 A100 上）、大型模型（如 Qwen3-Coder-Next-Base）的 OOM 问题，以及长时间运行的 GGUF 对话中上下文压缩失败的情况。

#### **2. 发布与破坏性变更**  
- **v0.1.912-beta**（发布于 2026-10-28）：  
  - 引入“不给糖就捣蛋”万圣节界面主题，包含互动元素（蜘蛛、蝙蝠）。  
  - 优化启动延迟、模型加载速度及 Linux 系统调用处理。  
  - 新增支持在多个 L 上并行训练兼容微调任务（多 L）。  
  🔗 [GitHub Release v0.1.912-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.912-beta)

#### **3. 新模型与硬件支持**  
- ✅ **LFM3 系列支持**：PR #15889 实现 `LFM3-Audio` 与 `LFM3-Omni` 的完整 MLX 基础推理，支持通过 Apple MLX 进行语音输入输出。  
  🔗 [PR #15889 – MLX: LFM3-Audio / LFM3-Omni on MLX](https://github.com/unslothai/unsloth/pull/15889)  
- ✅ **Intel Arc B580 GPU (XPU)**：Issue #15583 反映对 Intel XPU 支持的需求；当前暂不支持，但已在讨论中。  
  🔗 [Issue #15583 – Intel Arc B580 GPU support](https://github.com/unslothai/unsloth/issues/15583)  
- ✅ **Qwen-Image-2.1-Turbo Safetensors**：在 v0.1.911-beta 修复后，现已可在“本地设备”列表中显示。  
  🔗 [Issue #15735 – Safetensors missing from On Device](https://github.com/unslothai/unsloth/issues/15735)

#### **4. 性能与优化**  
- **显存效率**：多项 PR 针对微调过程中的内存泄漏与过量显存占用问题：  
  - PR #15899 通过正确识别格式，解决单列 `text` JSONL 数据集训练失败的问题。  
  - PR #15893 实现长 GGUF 对话的正确上下文压缩，防止出现“消息过长”错误。  
  - PR #15857 添加 UTF-8 字节计数检查，防止因负载过大导致 `/apply-template` 超时。  
  🔗 [PR #15893 – Compact long chats](https://github.com/unslothai/unsloth/pull/15893) | [PR #15857 – Guard against oversized payloads](https://github.com/unslothai/unsloth/pull/15857)  
- **张量与流水线并行**：分布式训练取得重大进展：  
  - PR #15722 解除了张量并行的限制（支持少量 KV 头、完整微调、MoE、Dropout）。  
  - PR #15656 与 #15655 实现按阶段分片加载模型与完整的流水线调度支持（Interleaved1F1B、LoopedBFS、ZBV、DualPipeV）。  
  🔗 [PR #15722 – Tensor parallel: lift refusals](https://github.com/unslothai/unsloth/pull/15722) | [PR #15656 – Pipeline parallel: sharded loading](https://github.com/unslothai/unsloth/pull/15656)

#### **5. 稳定性与回归问题**  
- ⚠️ **严重显存占用（OOM）**：用户报告在 QLoRA 微调过程中出现严重的显存飙升（例如在双 A100 80GB 上运行 Qwen3-Coder-Next-Base），导致崩溃。  
  🔗 [Issue #4504 – Fine-tuning uses more VRAM than advertised](https://github.com/unslothai/unsloth/issues/4504)  
- ⚠️ **GPU 检测失败**：在混合 NVIDIA-AMD Linux 系统上，RTX 2060 Super 与 AMD GPU 无法被检测到。  
  🔗 [Issue #1760 – No NVIDIA GPU found](https://github.com/unslothai/unsloth/issues/1760) | [Issue #15444 – AMD GPUs not showing up](https://github.com/unslothai/unsloth/issues/15444)  
- ⚠️ **Studio 回收站泛滥**：Windows Studio 在训练过程中每秒生成数千个 SQLite WAL/SHM 文件。  
  🔗 [Issue #15552 – Recycle Bin flooded with temp files](https://github.com/unslothai/unsloth/issues/15552)  
- ⚠️ **pyarrow JSON 读取器中的 SIGSEGV**：在 Studio 中预览 81.7MB ChatML JSONL 数据集时崩溃。  
  🔗 [Issue #15681 – SIGSEGV in pyarrow JSON reader](https://github.com/unslothai/unsloth/issues/15681)

#### **6. 对应用开发者的意义**  
- **构建健壮的微调管道**：使用 `v0.1.912-beta` 可避免常见的 OOM 陷阱；确保数据集格式正确（`instruction`+`output`、`text` 或对话格式），以防止静默失败。  
- **利用分布式训练能力**：新推出的张量/流水线并行 PR 使跨多 GPU 集群的可扩展训练成为可能——特别适用于 Qwen3 或 LFM3 等大模型。  
- **设计长上下文工作流**：上下文压缩现已可靠运行（PR #15893），支持无需手动截断的持久化聊天代理。  
- **为未来硬件做好准备**：尽管 Intel Arc 与 AMD 支持仍有限，但仍需关注如 #15583 与 #15444 等 PR 以追踪潜在兼容性进展。  
- **规避 UI 潜在陷阱**：对文件密集型操作（如大型 JSONL 预览）保持警惕；在 #15552 修复前，建议使用 `--disable-wal` 或外部工具。

> 💡 *技巧提示*：对于生产级微调，始终使用 `nvidia-smi` 验证显存使用情况，并配合 `UNSLOTH_TP_SIZE=2` + `UNSLOTH_FSDP2=1` 实现最佳扩展效果。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*