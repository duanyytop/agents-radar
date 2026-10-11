# AI 基础设施日报 2026-10-11

> 生成时间: 2026-10-11 01:12 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-10-11**

---

### **1. 生态概览**

2026年第四季度，AI推理基础设施领域呈现出高度专业化、硬件支持快速演进以及生产级服务系统日益成熟的特征。各项目在架构上开始分化：高性能引擎如vLLM和SGLang聚焦低延迟、可扩展的推理，并深度优化GPU内核；本地运行时如`llama.cpp`则强调跨平台兼容性和内存效率；网关类项目如LiteLLM推动多提供商抽象与成本感知路由；而微调平台如Unsloth则注重易用性与长上下文响应能力。对**硬件特异性优化**（Blackwell、MI355X、M5 Pro）和**分布式推理模式**（流水线并行、分层卸载）的明显趋势，反映出行业正从单体模型转向弹性、异构的推理架构。

---

### **2. 活动对比**

| 项目         | 今日开放问题数 | 近24小时合并的PR数 | 近24小时发布数 | 备注 |
|--------------|----------------|--------------------|----------------|------|
| **vLLM**     | 12             | 8                  | 0              | 稳定性压力大；急需修复Blackwell/ROCm相关关键问题 |
| **SGLang**   | 9              | 7                  | 0              | 重点修复DSpark正确性及扩散图编译问题 |
| **llama.cpp**| 14             | 5                  | 3 (b11552–b11550) | 正在积极修复并发与后端崩溃问题 |
| **Ollama**   | 10             | 3                  | 0              | `qwen3.*` 和MLX后端存在多个回归问题 |
| **LiteLLM**  | 8              | 6                  | 0              | 回溯修复决策API与遥测相关问题 |
| **Unsloth**  | 7              | 4                  | 0              | UI/性能问题为主；无新版本发布 |

> ✅ **洞察**：vLLM与SGLang在技术深度和主动稳定性修复方面领先；Ollama虽开发活跃，但出现发布疲劳迹象，关键回归问题仍未解决。

---

### **3. 模型支持竞赛**

| 新模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------|------|--------|-----------|--------|---------|---------|
| **Qwen3.8-27B (NVFP4)** | ✅ (v0.29中部分修复) | ❌ (DSpark bug) | ⚠️ (推测解码不稳定) | ❌ (v0.40.x中崩溃) | — | — |
| **DeepSeek-V4.1** | ✅ (长度感知索引器) | ✅ (DSpark + torch.compile) | ✅ (完整支持) | ⚠️ (可用但需`ctx_other`) | — | — |
| **MiniCPM-V 4.7** | ❌ | ❌ | ✅ (b11552+) | ❌ | — | — |
| **Qwen3-TTS** | ❌ | ❌ | ❌ | ❌ | — | ✅ (功能请求) |
| **K2 Horizon (MoE)** | ❌ | ❌ | ❌ | ✅ (已请求) | — | — |
| **Gemma4:12b** | ✅ | ✅ | ✅ | ⚠️ (需`ctx_other`) | — | — |
| **Prism Bonsai 2 27B** | ❌ | ❌ | ✅ | ❌ | — | — |

> 🏆 **排行榜**：  
> - **llama.cpp** 在**模型覆盖面**上领先，原生支持MiniCPM-V 4.7、DeepSeek-V4.1与Prism Bonsai。  
> - **SGLang** 在**专用模型路径**上表现突出，尤其针对启用DSpark的变体。  
> - **Ollama** 尽管有功能请求，但质量控制滞后——关键模型（`qwen3.5:4b`、`qwen3.6:35b-mlx`）仍不稳定。

---

### **4. 性能前沿**

| 优化方向               | vLLM                          | SGLang                        | llama.cpp                    | Ollama                 | LiteLLM                     | Unsloth                   |
|------------------------|-------------------------------|-------------------------------|------------------------------|------------------------|-----------------------------|---------------------------|
| **KV缓存管理**          | ✅ 部分尾部保留（PR #61019） | ✅ HiCache韧性（PR #43550） | ⚠️ Flash Attention崩溃（问题 #29419） | ❌ `qwen3.5:4b`中静默失败 | — | — |
| **批处理与不变性**      | ✅ 批处理无关的MoE修复（PR #61035–61038） | ⚠️ TP>1下推测解码竞争 | ❌ 提示缓存槽竞争（问题 #30295） | ❌ 长会话中上下文丢失 | — | — |
| **量化效率**            | ✅ FA4稀疏MQA（Blackwell） | ✅ W4A16压缩张量退化（问题 #42917） | ✅ Hexagon上的Q1_0，MXFP4 MoE | ⚠️ MLX量化速度下降（问题 #18833） | — | — |
| **分布式服务**          | ✅ 流水线+前缀缓存 | ✅ PD+HiCache，流水线进度 | ❌ 流水线支持有限 | ❌ 无分布式路径 | ✅ 成本驱动路由 | — |
| **内核级优化**          | ✅ 长度感知解码索引器（PR #61039） | ✅ 整体DiT图编译（PR #43631） | ✅ 主机操作减少（PR #61034） | ❌ 性能回归（RDNA1） | — | — |

> 🔥 **核心关注点**：  
> - **vLLM** 在**批处理级确定性**与**内核级调优**方面占据主导。  
> - **SGLang** 在**扩散图编译**与**HiCache韧性**方面持续突破边界。  
> - **llama.cpp** 在**底层内存管理与CPU/GPU可移植性**方面依然强劲。

---

### **5. 层级定位**

| 项目         | 主要层级                     | 核心差异化优势 |
|--------------|-------------------------------|----------------|
| **vLLM**     | **高性能推理引擎**           | 优化的CUDA内核，支持MoE/MQA，推测解码，流水线并行 |
| **SGLang**   | **生产级推理引擎**           | DSpark正确性，扩散支持，完整torch.compile，HiCache |
| **llama.cpp**| **本地运行时与跨平台引擎**   | 原生支持GGUF，RAM-backed缓存，依赖极少，广泛后端支持 |
| **Ollama**   | **开发者网关与本地CLI**      | 简洁用户体验，模型生命周期管理，MLX集成，工具调用 |
| **LiteLLM**  | **多提供商推理网关**         | 统一API，成本追踪，防护机制，决策模型，OpenTelemetry |
| **Unsloth**  | **微调与长上下文用户体验平台** | 张量拆分模式，注释裁剪，UI响应性，Studio筛选器 |

> 🧩 **定位洞察**：生态正分裂为**引擎中心型**（vLLM/SGLang）、**运行时中心型**（llama.cpp）与**网关中心型**（LiteLLM/Ollama）三层结构——Unsloth则在**面向代理的训练体验**领域开辟了独特定位。

---

### **6. 趋势信号**

1. **硬件特异性优化加速推进**：  
   - NVIDIA Blackwell（SM120/121）、AMD MI355X（GFX950）和Intel Arc B70已成为关键目标。  
   - vLLM与SGLang正竞相优化**FA4稀疏MQA**、**MXFP4**与**DFlash2/DSpark**——表明行业正向**大规模内存高效生成**转型。

2. **稳定性优先于功能迭代速度**：  
   - Ollama与SGLang在`qwen3.*`与DSpark工作流中面临严重回归问题——凸显**生产就绪性已超越上市速度成为首要考量**。

3. **网关正演变为安全与合规枢纽**：  
   - LiteLLM聚焦**决策模型防护机制**、**预算管控**与**OTel完整性**，预示推理网关正进化为**合规层平台**。

4. **代理工作负载驱动架构需求**：  
   - 前缀缓存未命中归因（#60044）、分块预填充挂起（#36344）与长对话延迟（#12552）表明，对**确定性、状态化代理推理**的需求正在上升。

5. **模型质量不再默认可信**：  
   - 压缩张量退化（SGLang）、静默输出失败（Ollama）、上下文损坏（llama.cpp）等问题显示，**模型保真度必须在各引擎间验证**——不再是黑盒。

---

### **对开发者与架构师的可执行建议**

- ✅ **用于生产推理**：在#60174修复前，使用**vLLM v0.29.0或更早版本**处理Blackwell上的Qwen3.8-27B。
- ✅ **用于代理系统**：在`llama.cpp`与SGLang补丁落地前，避免对`qwen3.8-Flash/Next`使用推测解码。
- ✅ **用于多提供商应用**：升级至**LiteLLM v1.104.3+**以获得准确计费与安全决策模型防护。
- ✅ **用于本地部署**：将**llama.cpp固定在b11552+**以确保提示缓存稳定；避免在RDNA1/gfx1151上使用推测解码。
- ⚠️ **避免使用Ollama v0.40.x**处理`qwen3.5:4b`或`qwen3.6:35b-mlx`——请使用**v0.35.0**以保障稳定性。

> 🔮 **关注清单**：  
> - vLLM的`VLLM_BATCH_INVARIANT=1`在MoE下的稳定性  
> - SGLang的流水线并行（问题 #11857）  
> - LiteLLM的异步回调修复（问题 #8842）  
> - Unsloth的张量拆分性能退化（问题 #12468）

---  
*生成时间：2026-10-11 | 数据来源：各项目GitHub议题与活动日志*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

### **vLLM Digest — 2026-10-11**

#### **1. 今日亮点**  
vLLM 项目持续聚焦于新兴硬件上的稳定性和性能优化，针对 Blackwell（SM120/121）和 AMD MI355X/GFX950 平台进行了关键修复。重要 PR 解决了流水线并行下的推测性解码正确性问题、DFlash2/DSpark + Qwen3.8-27B 中的前缀缓存损坏问题，以及影响 MoE 和融合内核的批处理不变性缺陷。这些更新对依赖高吞吐推理与确定性行为的生产负载至关重要。

#### **2. 发布与破坏性变更**  
*过去 24 小时内无新发布。*  
然而，`torch.compile` 配置哈希机制的持续改动（参见 #39479）可能影响依赖自定义编译行为的用户——尤其是使用 `--use-torch-compile` 的场景。目前“禁用”模式已成为默认选项，因此因遗漏字段导致的意外缓存缺失概率已降低，但仍存在配置键管理不当引发的问题。

> 🔗 [问题 #39479 – torch.compile 配置哈希重构后续](https://github.com/vllm-project/vllm/issues/39479)

#### **3. 新模型与硬件支持**  
- **AMD ROCm**：针对 `amd/Qwen3.8-2.4T-A95B-Quark-MXFP4`（GFX950 / MI355X）和 `Qwen3.8-Flash-Next-Quark-MXFP4`（PRs #57149, #59575）正在进行活跃优化追踪。预计通过内核调优和布局优化带来性能提升。
- **NVIDIA Blackwell（SM120/121）**：通过 PR #55866 实验性启用 FA4 稀疏 MQA 解码，旨在提升长上下文生成过程中的内存效率。
- **Intel Arc B70（Battlemage）**：仍在调查并发负载下引擎卡死问题（问题 #54698），但尚未提供官方支持。

> 🔗 [ROCm 优化追踪 – Qwen3.8-2.4T-A95B](https://github.com/vllm-project/vllm/issues/57149)  
> 🔗 [Blackwell FA4 稀疏 MQA 启用](https://github.com/vllm-project/vllm/pull/55866)

#### **4. 性能与优化**  
- **DeepSeek-V4.1**：PR #61039 在解码索引器中引入基于长度的候选块选择策略，减少对完整缓冲区宽度的无效计算——这对大 `max_model_len` 下的 CUDA graph 效率尤为关键。
- **GDN 层**：PR #61034 剪除了混合步数中急切预填充路径的冗余主机侧 PyTorch 操作调用，在不改变数值精度的前提下提升吞吐量。
- **KV 缓存管理**：PR #61019 在使用 EAGLE/MTP 草稿组进行卸载时，确保部分尾部数据得以保留——防止重新计算，改善真实场景延迟。
- **批处理不变性**：多个 PR（#61035, #61036, #61037, #61038）修复了在 `VLLM_BATCH_INVARIANT=1` 下的失败问题，尤其针对 MiniMax-M2.5 与 DeepSeek 模型，恢复了确定性行为。

> 🔗 [PR #61039 – 基于长度的解码索引器](https://github.com/vllm-project/vllm/pull/61039)  
> 🔗 [PR #61034 – 剪除 GDN 预填充路径的主机操作](https://github.com/vllm-project/vllm/pull/61034)

#### **5. 稳定性与回归问题**  
今日报告的高严重性问题：

1. **前缀缓存损坏（DFlash2/DSpark + Qwen3.8-27B NVFP4）**  
   - **影响**：在 RTX PRO 5000 Blackwell（sm_120）上缓存命中后输出异常。可在 v0.30/0.31 中复现；已在 v0.29 修复。  
   - **修复状态**：正在调查中。尚未提交 PR。  
   > 🔗 [问题 #60174](https://github.com/vllm-project/vllm/issues/60174)

2. **推测性解码 + 前缀缓存失效（混合 GDN 模型）**  
   - **影响**：在 nightly 构建中，使用 MTP 或 DFlash 与混合 GDN 模型时，前缀缓存命中被静默禁用。v0.24.0 版本运行正常。  
   - **修复状态**：已提交 PR #54360，但尚未合并。  
   > 🔗 [问题 #54360](https://github.com/vllm-project/vllm/issues/54360)

3. **DeepSeek-V4.1 在 CUDA Graph 下产生 NaN 输出**  
   - **影响**：由于虚拟捕获批次污染空 KV 块，导致模型输出为 NaN。影响 SM120/121。  
   - **修复状态**：已提交问题 #57156；尚未有 PR。  
   > 🔗 [问题 #57156](https://github.com/vllm-project/vllm/issues/57156)

4. **分层卸载行为异常**  
   - **影响**：内存分配或驱逐逻辑错误，导致内存溢出或性能下降。  
   > 🔗 [问题 #58804](https://github.com/vllm-project/vllm/issues/58804)

#### **6. 对应用开发者的影响**  
- 在解决 #60174 之前，若需在 Blackwell GPU 上稳定使用 Qwen3.8-27B 的前缀缓存与推测性解码，请使用 v0.29.0 或更早版本。
- 若使用 `mamba_cache_mode="all"`，请避免设置 `--mamba-block-size`——该标志在移除该模式后已无实际作用（参见 #60838）。
- **仅在充分测试后启用 `VLLM_BATCH_INVARIANT=1`**——该选项会暴露 MoE 与融合内核中的潜在底层问题（如 MiniMax-M2.5、DeepSeek-V4.1）；生产环境使用需谨慎。
- 对于 RAG/代理类工作负载，需关注前缀缓存未命中归因问题（#60044）及请求池化行为（#60947）——未来版本将支持在嵌入提取阶段对缓存重用进行细粒度控制。

> ✅ **可操作建议**：若部署如 Qwen3-VL 等多模态模型，请确保重复请求间 `fps` 与 `num_frames` 设置保持一致（已在 #55203 修复）。

---  
*数据来源：[vllm-project/vllm GitHub](https://github.com/vllm-project/vllm)*  
*摘要生成时间：2026-10-11*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 消息简报 – 2026-10-11**

---

### **1. 今日重点**  
SGLang 生态系统持续围绕高性能、生产级推理能力发展，重点关注 DSpark 正确性与扩散模型服务的稳定性。关键进展包括修复 `DeepSeek-V4-Pro-DSpark` 中 CUDA Graph 的竞争条件问题（PRs #31023, #33356），以及新增支持 `torch.compile` 的 PR，使 Qwen-Image-2.1 和 Cosmos3 等扩散模型实现完整编译，以缩小与急切模式之间的性能差距。此外，对流水线并行和 HiCache 弹性能力的前瞻性工作，彰显了长期可扩展性的战略意图。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新版本发布。*  
然而，针对 **DSpark 的紧凑稀疏目标验证 CUDA Graph 路径**（参见 Issue #31023）的持续修复，可能要求在升级至未来版本 v0.5.17+ 时重新验证推测解码工作流。使用 TP>1 且搭载 `DeepSeek-V4-Pro-DSpark` 的用户应持续关注回归问题，直至补丁版本中修复完成。

---

### **3. 新模型与硬件支持**  
- ✅ **AMD ROCm 支持**：现可通过 `SGLANG_ROCM_MONO_DECODE=1` 启用 **DeepSeek-V4.1-Flash on gfx950 (MI355X)** 的新可选解码路径。要求 TP=2/4，不支持 DP/EP。[PR #43497](https://github.com/sgl-project/sglang/pull/43497)
- ✅ **摩尔线程（MUSA）**：一等 MUSA GPU 支持的开发路线图持续推进中 ([Issue #16565](https://github.com/sgl-project/sglang/issues/16565))，但目前尚未有实现。
- ✅ **扩散模型**：通过 PR #41501 正在启用对 **SANA-Video 2.0 可拆分 CUDA Graph** 的完整支持，提升灵活性与内存复用能力。

---

### **4. 性能与优化**  
- 🔧 **`torch.compile` 改进**：多个 PR（如 #43631、#43586、#43577）致力于在编译过程中保留完整的 DiT 图结构，解决在 `Qwen-Image-2.1`、`Ulysses` 与 `Cosmos3` 中观察到的显著性能下降问题——在 2xGB300 上，编译时间高达 1.43 秒，而急切模式仅需 0.93 秒。目标是消除来自注意力层的图断裂。
- 📈 **HiCache 与预取机制**：PR #43550 确保存储工作进程在后端异常时仍能存活，防止无声线程死亡；PR #43512 通过基于前向次数而非墙钟时间来限速前缀刷新，改善基数树 LRU 一致性。
- ⚙️ **内存效率**：PR #43562 将解码恢复结果合并至最小值减少的 KV 轮询中，降低 PD+HiCache 部署中的冗余通信开销。

---

### **5. 稳定性与回归问题**  
今日报告的关键正确性与稳定性问题：
1. **CUDA Graph 内存访问错误**（Issue #31023, #33356）：`DeepSeek-V4-Pro-DSpark` 在 TP8 上的紧凑稀疏目标验证路径存在时序敏感的非法内存访问。*修复 PR 已存在但尚未合并*。  
   - [Issue #31023](https://github.com/sgl-project/sglang/issues/31023) | [PR #31195](https://github.com/sgl-project/sglang/pull/31195)
2. **确定性推理阻塞**（Issue #36344）：小于对齐大小的分块预填充导致阻塞。*已在 H200 上复现；修复待定。*
3. **VMM 传输切片泄漏**（Issue #43402）：在 `--mm-feature-transport cuda_vmm` 下，被中止的多模态请求未能释放 VMM 切片，导致内存渐进耗尽。*影响：对长时间运行的服务为高风险。*
4. **压缩张量质量下降**（Issue #42917）：Qwen3.8-27B W4A16 服务质量下降（PPL 9.98 对比 vLLM 的 6.05）。可能源于 `CompressedTensorsConfig` 路径中处理不当。*已在 v0.5.19–0.5.21 版本确认。*

---

### **6. 对应用开发者的影响**  
- 若您使用 **在 TP≥2 上的 DeepSeek-V4-Pro-DSpark 进行推测解码**，请避免使用未打补丁的版本（v0.5.16+），因存在时序敏感崩溃风险。请持续关注 PR #31023 与 #33356 的修复进度。
- 对于 **扩散工作负载**，启用 `--enable-torch-compile` 后预期性能与可靠性将提升，因新 PR 实现了全图编译锁定。若遇到阻塞（如 Z-Image），可临时禁用该选项。
- **多模态应用** 必须考虑 `cuda_vmm` 传输泄漏问题：建议使用更短超时或实现客户端请求取消逻辑。
- **模型开发者** 在部署压缩张量（如 W4A16 等）时，应对照 vLLM 基准验证输出质量——当前结果显示存在可观测的质量下降。
- 若您的工作负载符合限制条件，可考虑启用 `SGLANG_ROCM_MONO_DECODE=1` 以在 **MI355X 上运行 DeepSeek-V4.1-Flash**。

👉 *敬请关注：流水线并行（Issue #11857）与 PD 分离（Issue #21703）正朝着超长上下文推理的生产就绪状态稳步推进。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

### **1. 今日亮点**  
`llama.cpp` 项目在推测解码稳定性与模型支持方面取得显著进展，尤其新增了 **MiniCPM-V 4.7** 支持，并改进了 `llama-server` 中对繁忙推理槽位的处理。关键修复解决了基于内存的提示缓存中的竞争条件，以及 Vulkan、SYCL 和 HIP 后端的 GPU 内核崩溃问题——这对生产环境的可靠性至关重要。

---

### **2. 发布与破坏性变更**  
- **`b11552`**：修复了一个竞争条件，即在提示缓存查找前，繁忙槽位被错误地更新（#30295，[PR #30295](https://github.com/ggml-org/llama.cpp/pull/30295)）。该修复防止了高并发场景下多个请求同时命中同一槽位时的数据损坏。
- **`b11551`**：全面增加对 **MiniCPM-V 4.7** 的运行时支持，包括 MoE 架构和 MROPE 时间嵌入处理（#29416，[PR #29416](https://github.com/ggml-org/llama.cpp/pull/29416)）。
- **`b11550`**：为 s390x 平台禁用 z17 目标以避免不支持的编译器导致构建失败（#30297）。

> ⚠️ **迁移提示**：从 b11552 之前版本升级的用户，在高并发场景中可能遇到意外行为，因槽位状态不一致所致。请立即应用补丁或升级。

---

### **3. 新增模型与硬件支持**  
- ✅ **MiniCPM-V 4.7** – 通过 `mini-cpm-v` 架构实现完整支持（MoE，MROPE 时间）
- ✅ **DeepSeek V4.1** – 新增 `deepseek41` 模型类型，包含转换脚本、图结构及聊天模板（#28696，[PR #28696](https://github.com/ggml-org/llama.cpp/pull/28696)）
- ✅ **Prism Bonsai 2 27B** – 现已支持运行时使用（#29600，[PR #29600](https://github.com/ggml-org/llama.cpp/pull/29600)）
- ✅ **Q1_0 量化** – 在 Hexagon 后端新增原生支持（#30122，[PR #30122](https://github.com/ggml-org/llama.cpp/pull/30122)）

> 🔧 **后端更新**：OpenCL 新增 Q4_K/Q6_K 的二进制内核；SYCL 通过算术解码和权重重排加速 MXFP4 MoE（#29809，[PR #29809](https://github.com/ggml-org/llama.cpp/pull/29809)）

---

### **4. 性能与优化**  
- **OpenCL**：通过支持 `dk=512` 提升 Flash Attention 性能，适用于 Gemma-4（GQA=4/8），避免回落至 CPU 计算（#30266，[PR #30266](https://github.com/ggml-org/llama.cpp/pull/30266)）
- **内存效率**：PR #24156（`--reclaim-mmap-source`）可在大型模型如 Qwen3-30B-A3B 上将 RSS 降低高达 **37%**（节省约 13 GiB）——仅限 Linux，启用 `--mlock` 时禁用
- **流水线并行**：现在 MoE 专家可驻留在主机内存中，同时仍支持流水线并行（#29963，[PR #29963](https://github.com/ggml-org/llama.cpp/pull/29963)），使受限显存系统也能运行更大规模 MoE 模型

---

### **5. 稳定性与回归问题**  
| 问题 | 严重程度 | 描述 | 修复状态 |
|------|----------|-------------|------------|
| [#30295](https://github.com/ggml-org/llama.cpp/issues/30295) | 高 | 忙碌槽位上的提示缓存更新竞争 → 数据损坏 | ✅ 补丁已合并（`b11552`） |
| [#30039](https://github.com/ggml-org/llama.cpp/issues/30039) | 高 | RDNA1（gfx1010）上从 `b10455` 到 `b11429` 的提示处理性能下降约 45% | ❌ 正在处理 |
| [#29419](https://github.com/ggml-org/llama.cpp/issues/29419) | 高 | Gemma4-Assistant 中 Flash-Attention 因查询头维度不匹配而崩溃 | ❌ 尚无修复 |
| [#30175](https://github.com/ggml-org/llama.cpp/issues/30175) | 中 | 自 `b10905` 起，ROCm/HIP 上的 FA 预填充结果非确定性 | ❌ 未解决 |
| [#27556](https://github.com/ggml-org/llama.cpp/issues/27556) | 高 | HIP 静默损坏 Qwen3.5-27B 上下文（最旧部分丢失） | ❌ gfx1151 上已知问题 |

> 🛠️ **注意**：多个 Vulkan/SYCL/ROCm 崩溃问题仍未解决。使用 RDNA1（RX 5700 XT）、gfx1151（Strix Halo）或在 Qwen3.8/Flash 模型上启用推测解码的用户，应避免使用近期构建版本，直到补丁发布。

---

### **6. 对应用开发者的意义**  
- ✅ **生产服务器请使用 `b11552+`**：槽位绑定修复确保基于内存提示缓存的并发推理稳定。
- 📈 **充分利用新模型**：MiniCPM-V 4.7 与 DeepSeek V4.1 现已支持本地部署，具备完整的推测解码能力。
- ⚠️ **在 #29419 与 #30175 修复前，请避免对 Qwen3.8-Flash/Next 使用推测解码** —— 存在崩溃或输出错误的风险。
- 💡 **优化内存使用**：对于大模型，启用 `--reclaim-mmap-source`（仅限 Linux）可将 RSS 最多降低 37%。
- 🔍 **监控 CI 回归**：若部署于 RDNA1 或 gfx1151，建议测试 `b11429` 及更早版本；新构建可能导致性能显著下降。

> 👉 **最佳实践**：为保证稳定性，尤其是在多用户或代理类部署场景中，建议将 `llama.cpp` 版本固定在 `b11552` 或更高版本。持续关注 [GitHub Issues](https://github.com/ggml-org/llama.cpp/issues) 中关于推测解码与 GPU 后端的修复进展。

---  
*摘要生成时间：2026-10-11 | 来源：[ggml-org/llama.cpp GitHub](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-11**

---

### **1. 今日亮点**  
Ollama 生态系统正处于关键的稳定性与架构优化阶段，多个高严重性问题在 `qwen3.*` 模型（尤其是 `qwen3.5:4b`、`qwen3.6:35b-mlx`）中被报告，导致推理过程中出现无声失败或崩溃。MLX 后端性能回归以及模型加载、工具调用和设备检测等方面的持续问题，凸显了 0.40.x 版本周期中的挑战。与此同时，多个活跃的 PR 正在修复核心渲染逻辑与流式传输兼容性。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新版本发布。*  
然而，**Ollama v0.40.2** 当前正因多项回归问题受到关注：
- 在 Windows 上，当模型路径为 NTFS 挂载点时，`ollama list` 返回空结果 ([#18921](https://github.com/ollama/ollama/issues/18921))
- 本地兼容 GGUF 迁移后出现重复模型条目及无效的 `llamacpp:<sha>` 标签 ([#18830](https://github.com/ollama/ollama/issues/18830))
- `qwen3.5:4b` 在长对话中仅返回 `thinking` 字段，无实际内容 ([#18916](https://github.com/ollama/ollama/issues/18916))

> ⚠️ **迁移提示**：v0.40.0 中引入的“本地兼容 GGUF 迁移”可能导致状态不一致——用户应留意重复或缺失模型的情况。

---

### **3. 新模型与硬件支持**  
- 请求支持 **K2 Horizon 模型**（架构 `"k2-horizon"`）：MBZUAI IFM 提供的 0.9B–36B MoE 变体 ([#18698](https://github.com/ollama/ollama/issues/18698))
- 提议为 `llama.cpp` 兼容层增加 **KailA 架构** 支持；当前加载器在 `general.architecture = kail` 时失败 ([#18922](https://github.com/ollama/ollama/issues/18922))
- **Gemma4:12b** 需显式设置 `ctx_other` —— 这是相对于 `gemma4:latest` 行为的破坏性变更 ([#18898](https://github.com/ollama/ollama/issues/18898))
- **决策模型** 现可通过 `/v1/systemone` 接口使用，得益于上游 `llama.cpp` 在 PR [#18917](https://github.com/ollama/ollama/pull/18917) 中的更新

---

### **4. 性能与优化**  
- **MLX 后端性能下降**：在 M5 Pro Mac 上，量化后的 K2 模型（如 `mxfp8`）在预填充阶段比 `bf16` 更慢 ([#18833](https://github.com/ollama/ollama/issues/18833))
- **流式传输效率**：PRs [#18914](https://github.com/ollama/ollama/pull/18914) 与 [#18911](https://github.com/ollama/ollama/pull/18911) 将 OpenAI 兼容的 `/v1/completions` 与历史工具调用解析对齐至符合规范的线上传输格式，提升了客户端互操作性。
- **设备探测降级机制**：PR [#18923](https://github.com/ollama/ollama/pull/18923) 在 `llama-server --list-devices` 无输出时，启用原生 GGML 探测作为降级方案——缓解了 GPU 检测失败的边缘情况。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 受影响模型/后端 | 修复 PR？ |
|--------|------|------------------|----------|
| 严重 | `qwen3.6:35b-mlx` 在 v0.40.x 的 MLX 运行器中崩溃（v0.35.0 中正常工作） | MLX, `qwen3.6:35b-mlx` | ❌ 尚无修复 ([#18856](https://github.com/ollama/ollama/issues/18856)) |
| 高 | `qwen3.5:4b` 在长会话中仅返回 `thinking` 字段，无输出 | `qwen3.5:4b`, `options.num_ctx:65536` | ❌ 尚无修复 ([#18916](https://github.com/ollama/ollama/issues/18916)) |
| 高 | `rnj-1` 报错 `GGML_ASSERT(hparams.is_swa_any()) failed` | GGUF, `rnj-1` | ❌ 尚无修复 ([#18924](https://github.com/ollama/ollama/issues/18924)) |
| 中 | `gemma4:12b` 必须显式设置 `ctx_other`（否则失败） | `gemma4:12b` | ✅ 部分修复在 PR [#18918](https://github.com/ollama/ollama/pull/18918)（渲染器） |
| 中 | `clef-flash` 在 Windows 上报错 `llama-server process has terminated` | Windows, `clef-flash` | ❌ 尚无修复 ([#18858](https://github.com/ollama/ollama/issues/18858)) |

> 🔥 **重点关注**：`qwen3.*` 与 MLX 后端的多重回归表明最新发布链存在不稳定性。

---

### **6. 对应用开发者的影响**  
- **避免在生产环境使用 `qwen3.5:4b` 与 `qwen3.6:35b-mlx`**，直至 [#18916](https://github.com/ollama/ollama/issues/18916) 与 [#18856](https://github.com/ollama/ollama/issues/18856) 修复完成——预计会出现无声或不完整响应。
- **谨慎使用 `:latest` 标签**——该标签现已从显示中移除（`ollama list`、`/api/tags`），但仍可作为有效输入 ([#18915](https://github.com/ollama/ollama/pull/18915))。
- **在 Windows 上验证模型路径**——若使用 NTFS 挂载点，`ollama list` 可能返回空结果 ([#18921](https://github.com/ollama/ollama/issues/18921))。
- **工具调用工作流** 必须处理部分标签与空 `arguments`——PRs [#18913](https://github.com/ollama/ollama/pull/18913) 与 [#18759](https://github.com/ollama/ollama/pull/18759) 已提升健壮性。
- **对 MLX 用户**，在 [#18833](https://github.com/ollama/ollama/issues/18833) 修复前，建议优先使用 `bf16` 而非量化格式进行决策模型部署。

> 📌 **可操作建议**：若稳定性至关重要，请锁定至 **v0.35.0**；密切关注 PR 与议题线程以追踪 v0.40.x 的修复进展。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Digest — 2026-10-11

---

### **1. 今日亮点**

LiteLLM 持续扩展对下一代 AI 推理模式的支持，主要更新集中在 **Decisions API 计费**、**安全护栏增强** 和 **多提供商 Messages API 集成**。关键修复解决了长期存在的 OpenTelemetry 日志记录问题、异步完成回调执行问题，以及基于成本策略的模型路由问题——确保在大规模场景下具备更可靠的遥测数据和稳定的代理行为。

---

### **2. 发布与破坏性变更**

过去 24 小时内未发布新版本。但有三项回滚合并请求（backport PR）正在进行中，以稳定生产可用版本：

- **PR #45906**（回滚至 `stable/1.104.x`）确保即将发布的 1.104.3 补丁中包含决策功能和 Jev 后续支持。
- **PR #45905**（回滚至 `rc/1.105.0`）为发布候选版准备，实现完整决策提供方覆盖。
- **PR #45900** 将决策模型安全护栏功能回滚至 `stable/1.104.x`，使高级模型如 Jev 能够启用安全强制机制。

> 🔗 [PR #45906](https://github.com/BerriAI/litellm/pull/45906) | [PR #45905](https://github.com/BerriAI/litellm/pull/45905) | [PR #45900](https://github.com/BerriAI/litellm/pull/45900)

---

### **3. 新模型与硬件支持**

新的原生 API 集成现已直接合并至主干分支：

- **MiniMax Messages API**：通过 `PR #45896` 实现完整支持，包括工具载荷、缓存提示和认证信息保留。
- **腾讯 Messages API**：在 `PR #45899` 中新增支持，涵盖令牌限制验证、凭证覆盖处理及结构化推理翻译。
- **Microsoft Decision 1**：功能请求 `#45807` 提议增加对这一托管于 Azure 的 Foundry 模型的支持。

> 🔗 [PR #45896](https://github.com/BerriAI/litellm/pull/45896) | [PR #45899](https://github.com/BerriAI/litellm/pull/45899) | [Issue #45807](https://github.com/BerriAI/litellm/issues/45807)

---

### **4. 性能与优化**

性能优化聚焦于 **路由效率** 和 **遥测准确性**：

- **基于成本的路由稳定性**：修复使用 `cost-based-routing` 时同步方法（`completion()`、`embedding()`）中的 `RouterRateLimitError` 问题——对高吞吐量代理系统至关重要。
- **令牌用量聚合**：解决响应缓存命中时支出报告不一致的问题（`#39057`），确保重复查询下的成本核算准确无误。
- **批量处理可靠性**：修复 Vertex AI 批量创建失败问题（`#45671`）及 xAI 批量结果文件命名问题（`#45559`），提升大规模推理任务的吞吐一致性。

> 🔗 [Issue #45718](https://github.com/BerriAI/litellm/issues/45718) | [Issue #39057](https://github.com/BerriAI/litellm/issues/39057) | [PR #45559](https://github.com/BerriAI/litellm/pull/45559)

---

### **5. 稳定性与回归问题**

今日报告的关键稳定性问题包括：

1. **异步完成回调失败** (`#8842`)  
   - 异步 `.acompletion()` 调用不会触发 `CustomLogger` 钩子，导致审计日志和可观测性中断。  
   > 🔗 [Issue #8842](https://github.com/BerriAI/litellm/issues/8842) – *尚未提交修复 PR*

2. **OpenTelemetry Span 不完整** (`#45736`)  
   - 流式调用若客户端提前停止读取，则不会生成任何 span，造成追踪数据缺失。  
   > 🔗 [Issue #45736](https://github.com/BerriAI/litellm/issues/45736) – *尚未提交修复 PR*

3. **虚假预算超限错误** (`#36926`)  
   - 持续负载下会触发 `429 budget_exceeded` 错误，尽管资金充足，原因在于成本跟踪中的竞态条件。约 2 分钟后可自愈。  
   > 🔗 [Issue #36926](https://github.com/BerriAI/litellm/issues/36926)

4. **OTel 日志中工具调用数据丢失** (`#45796`)  
   - 工具调用响应显示为空消息，且 `"finish_reason": "tool_calls"`，导致函数名、ID 及参数全部丢失。  
   > 🔗 [Issue #45796](https://github.com/BerriAI/litellm/issues/45796)

---

### **6. 对应用开发者的影响**

- **谨慎使用 `cost-based-routing`** — 即使部署健康也可能破坏同步接口。建议采用备用策略，或等待 `#45718` 修复后再行采纳。
- **确保 OpenTelemetry 客户端读取所有流式数据块**，避免遗漏 span — 可通过显式流消费或中间件强制保证完整性。
- **一旦发布，立即升级至 v1.104.3+**，以获得决策模型的安全护栏强制机制和更精准的 Decisions API 计费。
- **除非锁定特定分叉版本，否则避免使用 `openai>=3.0.0` 依赖**：LiteLLM 仍限制 `openai<3.0.0`（参见 `#40317`, `#37907`）。请规划在 1.105 之后进行依赖更新窗口。
- **使用透传端点时，务必验证模型路由逻辑** — `#45787` 显示，包含 `predict` 的 URL 可能被错误路由至 Vertex AI 处理器。

> 📌 技巧提示：启用缓存时，请密切监控 `spend_logs` — 缓存命中时花费为零是正常现象，但需确保下游分析工具不会将其误认为实际成本漏报。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-10-11**

---

### **1. 今日亮点**  
Unsloth 持续强化多 GPU 与长上下文推理能力，修复了 tensor-split 模式下的性能退化问题（最严重达 2.9 倍变慢），并改进了注意力机制对左填充序列的处理。Unsloth Studio 新增的 `Recommended` 模型筛选器通过精选高质量 GGUF 与 FP8 模型提升了用户体验，同时多个 PR 优化了长对话中的内存使用与 UI 响应速度。

---

### **2. 发布与破坏性变更**  
过去 24 小时内无报告。未发布新版本或破坏性 API 变更。

---

### **3. 新模型与硬件支持**  
- ✅ **Qwen3-TTS**：功能请求 (#3951) 显示用户对音频能力 Qwen 模型的微调支持需求日益增长。  
- ✅ **AMD ROCm 7.14/7.2**：持续工作解决双 R9700 系统训练失败问题 (#10657)，表明 ROCm 后端改进正在积极进行中。  
- ✅ **Intel GPU 内存绑定**：文档请求 (#12836) 表明 Unsloth Studio 安装流程中亟需更好的 Intel GPU 支持。  
- ⚠️ **Qwen3.8-Flash-Next-GGUF**：因桌面应用中识别不到架构 (`qwen4exp`) 仍不支持 (#10015)。

---

### **4. 性能与优化**  
- 🔥 **Tensor Split 解码性能退化**：自 `b10715-mix-86bd2d3` 起，用户报告在双 RTX 5070 Ti 设备上使用 `--split-mode tensor` 时解码速度最慢可达 **2.9 倍下降** (#12468)。  
- 📈 **长对话响应速度**：PR #13255 针对大响应内容下长对话的滚动与悬停卡顿问题，该问题可能导致界面实际不可用 (#12552)。  
- 💡 **内存效率**：PR #13256（尊重填充掩码）与 #13254（DoRA 中跳过融合 LoRA 核函数）旨在防止隐式精度损失并提升训练正确性。  
- 🧱 **注释精简**：多个 PR (#12966–#12969) 将代码库注释密度降低超过 60%，在不影响功能的前提下显著提升可维护性。

---

### **5. 稳定性与回归问题**  
| 问题 | 严重程度 | 修复状态 | 链接 |
|------|----------|------------|------|
| 在 RTX PRO 6000（96GB）上出现 `RuntimeError: illegal memory access` | 严重 | 已关闭 | [Issue #3921](https://github.com/unslothai/unsloth/issues/3921) |
| v0.1.903-beta（Windows + AMD R9700）空闲时 CPU 使用率飙升至约 95% | 高 | 已关闭 | [Issue #12942](https://github.com/unslothai/unsloth/issues/12942) |
| 长 GGUF 对话中，即使有空闲槽位仍阻塞生成任务 | 中等 | 开放 | [Issue #10671](https://github.com/unslothai/unsloth/issues/10671) |
| 模型权重加载至系统内存而非显存（AMD Strix Halo） | 中等 | 已关闭 | [Issue #7449](https://github.com/unslothai/unsloth/issues/7449) |
| GPT-OSS-120B（183GB 显存，B200）仍发生 OOM，尽管文档声称可容纳 | 严重 | 已关闭 | [Issue #3411](https://github.com/unslothai/unsloth/issues/3411) |

> 注：多个稳定性问题已通过关闭的 PR 修复，但回归问题追踪依然较高——尤其集中在多 GPU 与 AMD/ROCm 工作流上。

---

### **6. 对应用开发者的启示**  
- **若在双 GPU 上使用 tensor-split 模式，请避免近期构建版本** —— 性能退化严重；建议锁定至 `b10687-mix-67dfc8b` 或更早版本，直至修复上线。  
- **在 AMD 系统上验证模型加载行为** —— 确保显存利用未被系统内存回退所干扰（参见 #7449）。  
- **手动进行 GPU 分配时，明确使用 `--split-mode layer`**（参见 #10770），以避免默认值模糊带来的歧义。  
- **监控长上下文对话状态** —— 界面卡顿与队列阻塞是真实风险；高吞吐代理应实现客户端缓冲或分页机制。  
- **即使使用外部模型，也需确保工具调用配置正确** —— 当前通过 PR #13251 已暴露相关设置，开发者可据此强制执行预算策略，无论模型来源如何。

> 🔗 *生产环境建议：审计模型加载路径，禁用长时间会话的自动卸载，并通过 PR #13223 验证上下文长度处理逻辑。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*