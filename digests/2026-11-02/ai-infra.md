# AI 基础设施日报 2026-11-02

> 生成时间: 2026-11-02 01:46 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-11-02**

---

### **1. 生态概览**  
截至2026年末，AI推理基础设施格局由硬件加速（尤其是NVIDIA Blackwell SM120和AMD MI355X）、分布式服务需求以及以代理为中心的工作负载兴起所主导。各项目正聚焦于大规模性能表现——受推测解码、多节点协同和低延迟流式传输驱动——同时也在应对新后端与复杂模型架构带来的稳定性问题。向基于Rust的路由和内核级优化转变，标志着行业进入成熟阶段，可靠性与可观测性已与原始吞吐量同等重要。

---

### **2. 活动对比**

| 项目       | 开放问题（高/严重） | PR（最近24小时） | 发布 | 关键稳定性风险 |
|---------------|--------------------------|----------------|----------|--------------------|
| **vLLM**      | 4 (2 高，2 中)     | 8              | 无     | SM120解码回归 (#56892)，KV缓存损坏 |
| **SGLang**    | 5 (3 严重，2 高)   | 7              | 无     | CUDA核心转储 (#26340)，fa4注意力崩溃 (#42012) |
| **llama.cpp** | 4 (2 高，2 中)     | 5              | Build b12032 | MoE越界读取 (#27792)，SYCL多GPU降速 |
| **Ollama**    | 5 (2 高，3 中)     | 4              | 无     | Qwen3.8 GGUF加载失败 (#19459)，结构化输出错误 |
| **LiteLLM**   | 5 (2 严重，2 高，1 中) | 6       | 无     | 成本超额计费 (#48398)，JSON-RPC ID剥离 (#49479) |
| **Unsloth**   | 6 (1 高，5 中/低) | 5              | 无     | GPU内存未释放 (#16436)，模型加载超时 |

> *注：SGLang和LiteLLM在严重稳定性风险上领先；vLLM展现出强劲工程速度，通过针对性内核修复快速响应。*

---

### **3. 模型支持竞赛**

| 新模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1-Flash** | ✅ (SM120验证通过) | ⚠️ 正在调优 | ❌ 无支持 | ❌ 加载失败 | ❌ 未列出 | ❌ 未列出 |
| **MiniMax-M3.1-Flash** | ✅ (ROCm + SM120) | ✅ (AMD gfx950，完整支持) | ❌ 无支持 | ❌ 未列出 | ❌ 未列出 | ❌ 未列出 |
| **GLM-5.3-Flash** | ✅ (ROCm优化) | ✅ (SM120/AMD) | ✅ (测试套件) | ❌ 未列出 | ❌ 未列出 | ❌ 未列出 |
| **DiffusionGemma-26B-A4B** | ⚠️ 并发解码崩溃 | ❌ 不支持 | ❌ 不支持 | ❌ 不支持 | ❌ 不支持 | ❌ 不支持 |
| **Qwen3.8-27B (GGUF)** | ❌ 未报告 | ❌ 未报告 | ❌ 未报告 | 🔴 加载失败 | ❌ 未列出 | ❌ 未列出 |
| **Gemini API模型** | ❌ 未列出 | ❌ 未列出 | ❌ 未列出 | ❌ 未列出 | ❌ 未列出 | ✅ 通过 `nextPageToken` 完全发现 |

> **胜出者**：**SGLang** 在跨平台模型覆盖方面领先，尤其在 MiniMax-M3.1 与 GLM-5.3 等先进模型上，对 SM120 和 ROCm 均有良好支持。**Unsloth** 在生态集成方面表现突出（支持 Gemini API），而 **vLLM** 在 Blackwell 平台旗舰模型的性能验证上占据主导地位。

---

### **4. 性能前沿**

| 优化重点             | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------------------|------|--------|-----------|--------|---------|---------|
| **KV缓存与卸载**       | ✅✅ (作用域失效，存储发布) | ⚠️ (高负载下调度器压力) | ❌ | ⚠️ (提示缓存预算) | ❌ | ❌ |
| **批处理与并行**       | ✅ (P/D分离，mHC重叠调优) | ✅ (DSA路径，行拆分DCP) | ✅ (dflash，设备拷贝) | ⚠️ (动态提示缓存) | ❌ | ✅ (UNSLOTH_PARALLEL 环境变量) |
| **量化与FP8 GEMMs**     | ✅ (MXFP8 → cuBLASLt，NVFP4偏置融合) | ✅ (RMSNorm JIT，融合QK+RoPE) | ✅ (IQ3_S，LRFU/MQ MoE缓存) | ❌ | ❌ | ✅ (FP8 LoRA训练) |
| **分布式服务与路由**| ✅ (NixlPushMode，MoRI-IO) | ✅ (多节点HTTP，X-Data-Parallel-Rank) | ❌ | ❌ | ✅ (Rust路由器核心，Redis后端状态) | ❌ |
| **内核级调优**         | ✅ (结尾融合，cuBLASLt路由) | ✅ (JIT模板，融合内核) | ✅ (SWIGLU_CLAMP，Maple TQ) | ❌ | ✅ (Rust Redis客户端) | ❌ |

> **前沿领导者**：  
> - **vLLM**：内核级优化深度（NVFP4/MXFP8）。  
> - **SGLang**：分布式推理就绪度（DSA，IPC）。  
> - **Unsloth**：微调效率新兴优势（FP8 LoRA）。  
> - **LiteLLM**：架构跃迁——基于Rust的路由器与Redis状态层。

---

### **5. 层级定位**

| 项目       | 主要层级                          | 次要角色                             | 核心差异化 |
|---------------|----------------------------------------|--------------------------------------------|--------------------|
| **vLLM**      | **推理引擎**（GPU加速） | 模型服务，P/D分离          | Blackwell基准领先；深度内核控制 |
| **SGLang**    | **代理优先推理运行时**      | dLLM，HiCache，多节点HTTP前端   | 专为长上下文代理设计；积极推进分离架构路线图 |
| **llama.cpp** | **本地运行时 / 跨后端**      | 边缘推理，GGUF执行             | 最广硬件支持（Vulkan, SYCL, Intel Arc, Adreno） |
| **Ollama**    | **本地LLM网关与CLI**            | 多模型服务器，RAG工具集成 | 开发者友好界面；模型文件生态持续扩展 |
| **LiteLLM**   | **LLM网关与代理**                | 成本追踪，提供商路由，可观测性 | Rust/Python双核心过渡；成本完整性聚焦 |
| **Unsloth**   | **微调与工作室环境**   | 多模态UI，模型管理            | 丰富文本编辑，MLX预览，虚拟环境隔离 |

> **战略聚类**：  
> - **引擎层**：vLLM，SGLang  
> - **运行时层**：llama.cpp  
> - **网关/代理层**：LiteLLM，Ollama  
> - **工作室/微调层**：Unsloth

---

### **6. 趋势信号**

#### 🔍 **从今日活动提取的关键行业趋势**：
1. **硬件驱动的融合**：SM120（Blackwell）和MI355X已成为主要目标——项目正在优化内核路径（如 MXFP8 → cuBLASLt）、注意力后端及卸载策略。
2. **以代理为中心的基础设施崛起**：SGLang 和 vLLM 正积极构建 **解耦推理**（P/D分离，MoRI-IO）、**推测解码** 和 **长上下文流式传输**——这对智能体系统至关重要。
3. **Rust迁移加速**：LiteLLM 的 **Rust路由器核心**、vLLM 的实验性Rust前端，以及 Unsloth 的并行性改进，均指向行业更广泛转向 **性能隔离、内存安全组件**。
4. **成本与可观测性成为首要关注点**：LiteLLM 的严重成本超额计费问题 (#48398) 与 Ollama 新增的按模型提示缓存预算，表明 **推理经济学** 已不再是事后考虑。
5. **稳定性优先于新颖性**：尽管创新活跃，但 **高严重性回归** 仍占据新闻头条——尤其集中在 CUDA、ROCm 与推测解码方面——说明 **生产就绪性** 已成为瓶颈，而非仅性能。

#### 📌 **应用开发者应重点关注**：
- 在 SGLang (`fa4`) 或 vLLM 的 `--enforce-eager` 上使用 SM120 时，**避免投入生产部署**，直至稳定性修复上线。
- 扩展至 100 RPM 以上时，**优先采用基于Rust的部署方案**——LiteLLM 与 vLLM 正在铺路。
- **实施防御性成本控制**——绝不可轻信提供商返回的 `cost` 字段，必须自行验证。
- **准备处理富媒体数据负载**——Unsloth 的文本/视频/音频增强功能，以及 SGLang 的 dLLM 路线图，预示未来应用将原生支持复杂输入/输出。
- **利用模型特定调优**——在 vLLM 中使用 `--kernel-config`，在 Ollama 中使用 `prompt_cache`，在 Unsloth 中启用 `UNSLOTH_PARALLEL`，以实现最大效率。

---

> ✅ **最终结论**：AI基础设施栈正从“原始速度”演进为“稳健、可观测、代理就绪”的系统。下一波创新将不再聚焦峰值吞吐量，而是更强调 **信任、可扩展性与可组合性**。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# **vLLM Digest – 2026-11-02**

---

### **1. 今日亮点**  
vLLM 项目持续加速对 NVIDIA Blackwell (SM120) 与 ROCm 平台的支持，针对 DeepSeek-V4.1-Flash 与 MiniMax-M3.1 的关键性能修复与新优化已落地。当前重点在于稳定分布式推理工作流——特别是通过 NixlPushMode 与 MoRI-IO 实现的 P/D 分离架构，同时解决多个后端中存在的持久性内存损坏及内核兼容性问题。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告任何内容。*  
无新版本发布或破坏性 API/配置变更。`VLLM_USE_RUST_FRONTEND=1` 实验性标志保持不变，但持续进行中的工作（问题 #44280）旨在缩小 Rust 与 Python 前端之间的功能差距。

> 🔗 [Rust 前端路线图](https://github.com/vllm-project/vllm/issues/44280)

---

### **3. 新模型与硬件支持**  
- **DeepSeek-V4.1-Flash**：在 **8x RTX PRO 6000 Blackwell (SM120)** 上完成全链路验证，详细现场报告（问题 #56700）与针对性性能调优（PRs #63837, #64815）已提交。  
- **MiniMax-M3.1-Flash**：已落地 ROCm 特定优化（PR #65032, #62509），包括并行 top-k 解码及 MI355X 上的 MXFP8 tile 调优。  
- **GLM-5.3-Flash**：通过减少分块索引中的 CPU-GPU 同步（PR #63072）和优化稀疏索引器（PR #63910），显著提升 ROCm 支持能力。  
- **DiffusionGemma-26B-A4B**：现已支持并发解码（尽管仍存在因张量形状不匹配导致的崩溃问题；问题 #58035）。

> 🔗 [DeepSeek-V4.1 SM120 现场报告](https://github.com/vllm-project/vllm/issues/56700)  
> 🔗 [MiniMax-M3.1 ROCm 性能优化 PR 列表](https://github.com/vllm-project/vllm/pulls?query=ROCm+MiniMax-M3.1)

---

### **4. 性能与优化**  
- **SM120 NVFP4 GEMM**：偏置加法现已融合至尾部（PR #61821），消除独立内核开销——对 Qwen2 风格模型的大规模预填充至关重要。  
- **MXFP8 GEMMs**：大输入（>8192 行）已路由至 cuBLASLt 而非 FlashInfer CuTe-DSL（PR #64815），在 Blackwell 上带来可测量的性能提升。  
- **融合 All-Reduce + mHC Token Cap**：现可通过 `--kernel-config '{"mhc_overlap_max_tokens": N}'` 配置，实现对 DSV4.1 工作负载的细粒度调优（PR #63837）。  
- **KV Cache 异步卸载**：通过作用域化失效事件（PR #62394）与成功存储发布（PR #64444）提升可靠性，降低多节点部署中过期状态的风险。

> 🔗 [NVFP4 偏置融合](https://github.com/vllm-project/vllm/pull/61821)  
> 🔗 [MXFP8 使用 cuBLASLt](https://github.com/vllm-project/vllm/pull/64815)

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 描述 | 修复状态 |
|---------|-------|-------------|------------|
| ⚠️ 高 | [#65034](https://github.com/vllm-project/vllm/issues/65034) | Quark `exclude` 条目在 MTP 伪解码中被静默忽略 | ✅ *开放* — 阻碍正确伪解码行为 |
| ⚠️ 高 | [#58035](https://github.com/vllm-project/vllm/issues/58035) | DiffusionGemma 在并发解码中因形状不匹配导致崩溃 | ✅ *开放* — 影响所有使用 NVFP4/bf16 检查点的版本 |
| ⚠️ 中 | [#44280](https://github.com/vllm-project/vllm/issues/44280) | Rust 前端缺乏与 Python API 的功能对齐 | ✅ *开放* — 影响生产环境采用 |
| ⚠️ 中 | [#56892](https://github.com/vllm-project/vllm/issues/56892) | SM120 上启用 `--enforce-eager` 时解码吞吐极低；CUDA graphs 不可用 | ✅ *开放* — 对 Blackwell 用户为高优先级 |

> 🔗 [关键 SM120 解码吞吐量缺陷](https://github.com/vllm-project/vllm/issues/56892)

---

### **6. 对应用开发者的启示**  
- **针对智能体与 RLHF 工作负载**：使用 `--kernel-config` 调整 mHC 重叠上限（PR #63837），并监控快速 LoRA 切换下的 KV Cache 损坏风险（问题 #38606）。  
- **针对分离式部署**：优先测试 `NixlPushModeConnector`（问题 #48633）与 MoRI-IO（问题 #59116）；确保 PCP 各 rank 间引擎 ID 同步（PR #62916）。  
- **针对实时流式传输**：避免 `num_output_placeholders` 下溢问题，建议升级至最新 vLLM（问题 #35755）。可选择开启请求日志记录（问题 #64654），以实现跨组件追踪而不暴露有效载荷。  
- **针对多后端用户**：预期在 ROCm（MiniMax-M3.1、GLM-5.3）与 Blackwell（DSV4.1）上稳定性提升，但在投入生产前仍需验证特定模型行为（如 DiffusionGemma）。

> 🔗 [开发者指南：请求日志](https://github.com/vllm-project/vllm/issues/64654)  
> 🔗 [分离部署最佳实践](https://github.com/vllm-project/vllm/issues/59116)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 简报 – 2026-11-02**

---

### **1. 今日重点**  
SGLang 生态系统持续成熟，重点聚焦于**下一代硬件上的稳定性与性能表现**，特别是 SM120（Blackwell）GPU。针对 CUDA 核心转储、注意力后端崩溃（fa4）以及推测解码正确性等关键问题正在积极修复。与此同时，**dLLM 服务路线图**、**HiCache IPC 数据平面**及**多节点 HTTP 前端支持**方面取得显著进展，表明底层基础设施已为生产级智能体工作负载做好更深层次的准备。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无报告。*  
未发布新版本或破坏性 API/配置变更。最新稳定版本仍为 `v0.5.20`（`lmsysorg/sglang:v0.5.20`），开发工作主要集中在 `main` 分支。

---

### **3. 新模型与硬件支持**  
- **SM120（RTX PRO 6000 Blackwell）**：对 GLM-5.3-Flash 与 DeepSeek-V4.1-Flash 模型进行主动支持与调试；多个 PR 集中于内核优化与后端兼容性改进。  
- **AMD MI350X / MI355X**：PR #46693 通过 AMD 后端（`gfx950`）实现了 MiniMax-M3.1-Flash 的完整支持，已合并注意力机制、MoE 及快速 all-reduce 内核。  
- **Intel XPU**：RFC #46520 提出基于前瞻专家调度（LES）与 SSD 分层的分页专家方案，用于单卡 MoE 卸载——为未来 XPU 集成奠定基础。  
- **Ascend NPU**：PR #36090 改进文档说明，PR #47611 增加精度测试用例，提升部署清晰度与验证覆盖率。

---

### **4. 性能与优化**  
- **DeepSeek-V4-Flash 预填充**：在 4× RTX PRO 6000（SM120，TP=4）上报告吞吐量约为 2–7K tok/s，落后于 vLLM/Marlin 的 ~12.5K tok/s（Issue #33422）。关于调优差距与内核优化的调查仍在进行中。  
- **内核级优化**：  
  - PR #47785：将 QK 归一化 + RoPE 与连续 Q 融合，适用于 Qwen3 → 减少内核启动开销。  
  - PR #47503：引入一个针对 SM100 优化的 JIT 模板，覆盖普通/融合加法/FP8 量化路径的 RMSNorm → 提升一致性与性能。  
  - PR #47309：对 AMD 实现行拆分的 DCP 索引器并流水线化 a2a 操作 → 针对 DSA 路径降低解码延迟。  
- **内存效率**：  
  - PR #47680：当槽位耗尽时跳过 Mamba 检查点捐赠 → 防止高负载下调度器终止（修复 #43204）。  
  - PR #47813：强制解码 DCP 在非 fp8 KV 缓存路径下使用 Gluon 而非 asm 内核 → 避免类型不匹配错误。

---

### **5. 稳定性与回归问题**  
近期活动以高严重性稳定性问题为主：

| 问题 | 严重性 | 状态 | 修复 PR？ | 链接 |
|------|----------|--------|---------|------|
| [CUDA 核心转储追踪](https://github.com/sgl-project/sglang/issues/26340) | 关键 | 开放 | 否 | [#26340](https://github.com/sgl-project/sglang/issues/26340) |
| [SM120 上 fa4 注意力崩溃（混合扩展模式）](https://github.com/sgl-project/sglang/issues/42012) | 关键 | 开放 | 否 | [#42012](https://github.com/sgl-project/sglang/issues/42012) |
| [None 多模态偏移量导致调度器崩溃](https://github.com/sgl-project/sglang/issues/47218) | 高 | 开放 | 否 | [#47218](https://github.com/sgl-project/sglang/issues/47218) |
| [DSV4.1 Flash + DSPARK：CUDA 分配器 OOM](https://github.com/sgl-project/sglang/issues/43486) | 高 | 开放 | 否 | [#43486](https://github.com/sgl-project/sglang/issues/43486) |
| [C1/C2 解码中 FullTopK 索引顺序不稳定](https://github.com/sgl-project/sglang/issues/46798) | 中等 | 开放 | 否 | [#46798](https://github.com/sgl-project/sglang/issues/46798) |

> ⚠️ 这些问题构成在 Blackwell 平台及高级推理模式（推测解码、多模态、高并发）下的**生产部署关键障碍**。

---

### **6. 对应用开发者的影响**  
- **当前避免在 SM120 上使用 `fa4` 后端** —— 请使用 `triton` 作为唯一稳定路径，直至问题 #42012 解决。  
- **在并发流与多模态模型上需谨慎** —— 若 `items_offset_list` 变为 `None`，可能出现意外调度器崩溃。  
- **即使 KV 池使用率较低，持续解码负载下仍可能遭遇内存压力**（如 #43486）；建议谨慎减少批大小或启用 `--mem-fraction-static`。  
- **利用即将推出的 dLLM 服务功能**（RFC #39499）实现可扩展、高效的块扩散推理 —— 长上下文智能体的吞吐量与稳定性将得到提升。  
- **为多节点部署做好准备** —— 全局 `X-Data-Parallel-Rank` 头支持（#47657）将使外部路由工具（如 `llm-d`）能够正确跨集群路由请求。

👉 *建议*：密切跟踪上述链接中的 PR，尤其是标记为 `[Fix]` 或 `[Perf]` 者；在 fa4 与复杂流式工作流修复落地前，避免在 SM120 上部署。

---  
*简报数据来源：GitHub 项目 sgl-project/sglang • 2026-11-02*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 消息简报 – 2026-11-02**

---

### **1. 今日重点**  
最新开发重点聚焦于**多后端性能优化**，特别是 Vulkan、SYCL 和 CUDA 后端，关键优化包括推测解码和 Flash Attention。重要修复解决了内存安全问题（例如 MoE 内核中的越界读取）以及在 Intel Arc B70/B60 和 Adreno GPU 上的稳定性问题。值得注意的是，一项新的 `dflash` 预填充优化利用设备间拷贝，有望带来显著提速。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未发布新版本。然而，**构建 `b12032`** 引入了通过 PkgConfig 修复 LevelZero/SYCL 后端链接的关键补丁 (#31076)，可能影响依赖外部 LevelZero 安装的构建。未报告任何 API 破坏性变更。

> 🔗 [GitHub PR #31076](https://github.com/ggml-org/llama.cpp/pull/31076)

---

### **3. 新模型与硬件支持**  
- 在测试套件 (`test-llama-archs`) 中启用了 **Gemma 4** 支持，配置为 GQA (#31401)。  
- **NVIDIA Nemotron 3.5 Transcribe** 模型已加入 MTMD 转换流水线 (#31471) —— 支持多语言离线语音转录并具备说话人识别功能。  
- **Intel Arc B60/B70** 和 **Adreno 830** GPU 后端持续进行针对性稳定性优化，尤其关注 Vulkan/Metal 驱动兼容性。  
- **OpenCL**：初步支持 IQ3_S 量化格式，包含 AOS/SOA MV 与分块 GEMM 变体，适用于 Adreno (#31338)。

> 🔗 [PR #31401](https://github.com/ggml-org/llama.cpp/pull/31401) | [PR #31338](https://github.com/ggml-org/llama.cpp/pull/31338) | [PR #31471](https://github.com/ggml-org/llama.cpp/pull/31471)

---

### **4. 性能与优化**  
- **DFlash 预填充加速**：新增 `dflash: copy hidden features via device copies` PR (#31506)，通过避免主机-设备往返显著降低预填充延迟；解码吞吐量也略有提升。  
- **MoE 缓存混合 LRFU/MQ**：PR #31233 引入更智能的专家缓存策略，使上传量减少 8%，在 QFN/GLM 模型上解码速度提升 +6–7%。  
- **CUDA Flash Attention**：PR #29510 启用 `flash_attn_ext_rows`，实现跨序列的统一 KV 缓存优化，提升多序列推理效率。  
- **内核级改进**：  
  - CUDA SWIGLU_CLAMP 内核已实现并完成测试 (#31517)  
  - 为预览支持新增 Maple TQ1_0/TQ2_0 CUDA 内核 (#31512)  
  - 修复 Volta 平台 FA 测试崩溃问题 (#31518)

> 🔗 [PR #31506](https://github.com/ggml-org/llama.cpp/pull/31506) | [PR #31233](https://github.com/ggml-org/llama.cpp/pull/31233) | [PR #29510](https://github.com/ggml-org/llama.cpp/pull/29510) | [PR #31517](https://github.com/ggml-org/llama.cpp/pull/31517)

---

### **5. 稳定性与回归问题**  
今日报告的高严重性问题包括：  
- **SYCL 多 GPU 回归**：在 Intel Arc B60/B70 上，`--cpu-moe` + `--split-mode layer` 导致预填充阶段出现 100–1000× 的性能下降 (#31510)。*暂无修复方案。*  
- **Vulkan 内存泄漏 / 设备丢失**：在 AMD RADV/Vulkan 上使用 `--spec-type draft-mtp` 时反复崩溃，原因是提示处理后队列提交不当 (#27306)。  
- **CUDA PTX 工具链不兼容**：构建 `11176`、`11243`、`12030` 在 Tesla T4 (sm_75) 上失败；仅 `12004` 可靠运行 (#31503)。  
- **MoE 内核越界读取**：`ggml_cuda_mmq_get_J_max` 对 MoE 路径返回 0，导致非法内存访问 (#27792)。*修复待定。*

> 🔗 [Issue #31510](https://github.com/ggml-org/llama.cpp/issues/31510) | [Issue #27306](https://github.com/ggml-org/llama.cpp/issues/27306) | [Issue #31503](https://github.com/ggml-org/llama.cpp/issues/31503) | [Issue #27792](https://github.com/ggml-org/llama.cpp/issues/27792)

---

### **6. 对应用开发者的影响**  
- **谨慎使用 `dflash`**：尽管可加快预填充，但请确保后端（尤其是 HIP/Vulkan）正确处理设备间传输。注意监控提示吞吐量是否出现回归。  
- **在多 GPU SYCL 环境中避免使用 `--cpu-moe`**，直到 #31510 修复——否则性能将无法使用。  
- **在 Intel Arc 上部署生产环境**：若目标为 sm_75/Tesla T4，建议优先使用构建 `b12004` 或更早版本；避免近期的 `server-cuda13` 镜像。  
- **启用 MoE 缓存 `moe-cache`**：新的 LRFU/MQ 混合缓存机制可在极低开销下提升解码性能最高达 7%。  
- **验证 GGUF 元数据输出**：避免通过 `gguf-dump` 引入终端转义注入攻击，建议对输入文件做清洗或使用安全渲染工具。

> 📌 技巧提示：对于已知的 Vulkan/FA 回归问题，可临时使用 `--flash-attn off` 作为绕过方案，直至 #31505 和 #29039 得到修复。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

### **1. 今日亮点**  
Ollama 持续强化对高级推理与多模态工作流的支持，修复了 Qwen3.8-27B GGUF 加载失败问题以及 LLM-jp-4 的和谐分词机制异常。值得注意的是，`api: add per-model prompt cache budgets` PR 引入了对缓存的细粒度控制——这对多模型服务器环境至关重要。与此同时，一项关于可选开启的令牌指标日志记录的新提案，反映出对推理流水线可观测性的日益重视。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未发布新版本或破坏性变更。*  
不过，多项重要 PR 即将合并：  
- **[PR #19450](https://github.com/ollama/ollama/pull/19450)**：引入 `prompt_cache` 作为每请求运行器选项（支持 `0`、`-1` 和 MiB 值），实现共享服务器上多个模型间的动态内存分配。这将允许对提示缓存行为进行精细化调优。  
- **[PR #19445](https://github.com/ollama/ollama/pull/19445)**：在 API 文档中明确 `keep_alive` 持续时间语法——现在明确支持 `"10m"`、整数（秒）和 `-1`（无限加载）。提升了长时间运行模型会话的清晰度。

---

### **3. 新模型与硬件支持**  
- **Qwen3.8-27B hybrid-attention GGUFs**：因第 64 层缺失 `attn_qkv/attn_gate` 投影而无法加载（[Issue #19459](https://github.com/ollama/ollama/issues/19459)）。表明 Ollama 当前解析器与新型 MTP（多令牌预测）架构之间可能存在不兼容。  
- **LLM-jp-4.1 (8b/32b/33b)**：需显式处理特殊标记后跟空格的解析；当前因 GPT-OSS 和谐格式不匹配导致输出格式断裂（[Issue #18728](https://github.com/ollama/ollama/issues/18728)）。  
- **Alysis Code 与 Cognito**：已加入社区工具列表（[PR #19454](https://github.com/ollama/ollama/pull/19454)，[PR #19448](https://github.com/ollama/ollama/pull/19448)），扩展了本地 RAG 与代码代理的应用场景。

---

### **4. 性能与优化**  
- **提示缓存粒度**：即将推出的 `prompt_cache` 每模型配额功能（[PR #19450](https://github.com/ollama/ollama/pull/19450)）可在多模型部署中实现高效资源共享，对于减少冗余计算、提升高并发下的吞吐量至关重要。  
- **重复令牌预防**：通过 [PR #19422](https://github.com/ollama/ollama/pull/19422) 在 MLX 运行器中新增，生成过程中若出现 101 次重复令牌即终止，防止无限循环并释放 GPU/CPU 资源。  
- **调度器驱逐优化**：[PR #19449](https://github.com/ollama/ollama/pull/19449) 通过使用预测内存占用与 GPU 位置选择运行器，改进调度逻辑，提升适配精度，降低驱逐抖动。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 影响 | 修复状态 |
|--------|------|------|----------|
| 🔴 高 | [Qwen3.8-27B GGUF 无法加载](https://github.com/ollama/ollama/issues/19459) | 模型初始化阶段崩溃；阻塞大型 hybrid-attention Qwen 变体的使用 | ❌ 尚无修复 —— 怀疑架构不匹配 |
| 🔴 高 | [Gemma3:4b 返回空 JSON](https://github.com/ollama/ollama/issues/19427) | 长提示下结构化输出静默失败；破坏代理流水线 | ✅ 已关闭 —— 修复补丁预计即将发布 |
| 🟡 中 | [Qwen 模型在 `</thinking>` 处终止对话](https://github.com/ollama/ollama/issues/19424) | 推理步骤中提前结束会话 | ✅ 在 PR #19456 中修复 |
| 🟡 中 | [长回复导致 deepseek-r1/phi3.5 性能持续下降](https://github.com/ollama/ollama/issues/19457) | 上下文切换引发持久性能退化，直至模型重新加载 | ⚠️ 已报告；尚未提交修复 PR |
| 🟡 中 | [Windows ARM64 Gemma3 视觉模块超时](https://github.com/ollama/ollama/issues/19444) | 基于 CPU 的图像处理无限挂起 | ⚠️ 未解决；可能与线程阻塞有关 |

---

### **6. 对应用开发者的启示**  
- 一旦合并（[PR #19450](https://github.com/ollama/ollama/pull/19450)），请启用每模型提示缓存，以在共享硬件上运行多个模型时优化延迟与内存使用。  
- 在确认修复前，请避免依赖 Gemma3:4b 的结构化输出——建议准备回退策略或添加模式验证层。  
- 使用 Qwen3.8-27B GGUF 时务必谨慎；部署前验证兼容性，尤其在生产推理服务器中。必要时使用 `--modelfile` 覆盖。  
- 通过 [提案 #19455](https://github.com/ollama/ollama/issues/19455) 实现令牌指标追踪，以监控实时推理效率——对成本建模与 SLA 合规至关重要。  
- 更新工具解析器以处理参数中畸形的函数名（[Issue #19425](https://github.com/ollama/ollama/issues/19425)）；考虑在上游验证输入模式。

> 💡 *技巧提示：仅在定义自定义 Modelfile 后，方可使用 `ollama run --think` 与 LLM-jp-4，以避免解析错误（[PR #19440](https://github.com/ollama/ollama/pull/19440)）*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

### **1. 今日亮点**  
LiteLLM 项目在双核架构迁移方面取得显著进展，多个 PR 已合并，稳定了基于 Rust 的路由器和网关组件。关键修复包括：解决 JSON-RPC 2.0 兼容性问题（Issue #49479）、因未验证提供方报告的费用而导致的超额计费风险（Issue #48398），以及一个高危漏洞——`pass_through_endpoints` 在透传时会剥离 JSON-RPC 请求中的 `id` 字段，导致下游客户端中断。这些更新表明 LiteLLM 的代理与路由层正日趋成熟。

---

### **2. 版本发布与破坏性变更**  
*过去 24 小时内无版本发布或破坏性变更报告。*  
然而，两个关键问题提示潜在的破坏性变更：  
- **Issue #49479**：`pass_through_endpoints` 功能现在会静默移除 JSON-RPC 2.0 请求体中的 `id`，可能破坏依赖正确 RPC 语义的客户端应用。修复待定。[GitHub Issue](https://github.com/BerriAI/litellm/issues/49479)  
- **Issue #48398**：系统信任提供方报告的 `usage.cost` 值为美元金额而未做校验，可能导致灾难性超额计费（最高达 1,000,000×）。此问题对生产环境部署需立即关注。[GitHub Issue](https://github.com/BerriAI/litellm/issues/48398)

---

### **3. 新模型与硬件支持**  
*今日未宣布新增模型或硬件后端。*  
但跨提供方的模型映射一致性工作仍在推进：  
- **Issue #35645**：DeepSeek 的 `output_config.effort` 和自适应思考功能被错误地映射到 `budget_tokens`，而该字段实际被忽略，影响成本建模与行为表现。[GitHub Issue](https://github.com/BerriAI/litellm/issues/35645)  
- **Issue #35663**：Ollama 流式工具调用以 `finish_reason: stop` 结束，而非符合 OpenAI 规范的 `tool_calls`，违反标准。[GitHub Issue](https://github.com/BerriAI/litellm/issues/35663)  

> ✅ *注意：FAL.ai 提供方仍使用硬编码模型列表，尽管已有 200+ 可用模型；这限制了灵活性。* [GitHub Issue #34619](https://github.com/BerriAI/litellm/issues/34619)

---

### **4. 性能与优化**  
*性能与可扩展性方面取得重大架构进展：*  
- **PR #49513**：引入 **Rust 路由核心**，仅通过 Python 主机作为边界，彻底消除原生执行路径，实现完全隔离。这是未来性能提升的基础。[GitHub PR](https://github.com/BerriAI/litellm/pull/49513)  
- **PR #49525 与 #49592**：路由冷却与使用统计现运行于 **基于 Rust 的 Redis 存储** 上，行为与现有 Python 实现一致，但延迟更低、内存占用更少。支持在滚动部署期间，Python 与 Rust Pod 间共享状态。[GitHub PRs](https://github.com/BerriAI/litellm/pulls?query=is%3Aopen+author%3Ayujonglee-berri)  
- **PR #49606 与 #49607**：可选的 **Rust 转发服务器** 现已支持代理与容器化部署。可在保留 Python 认证、指标采集与优雅关闭能力的同时，将面向公众的流量卸载至 Rust 层。[GitHub PRs](https://github.com/BerriAI/litellm/pull/49606)  
- **PR #49510 与 #49589**：Rust Redis 客户端现已与 `redis-py` 5.3.1 在命令行为、错误分类及凭证轮换（AWS/GCP/Azure）上保持一致，减少偏差并提升可靠性。[GitHub PRs](https://github.com/BerriAI/litellm/pull/49510)

---

### **5. 稳定性与回归问题**  
今日主要稳定性关切：  
1. **严重 - 超额计费风险 (#48398)**：未验证的 `provider.usage.cost` 值可能导致 100 万倍计费错误。尚未提交修复 PR。[GitHub Issue](https://github.com/BerriAI/litellm/issues/48398)  
2. **高 - JSON-RPC 2.0 中断 (#49479)**：透传过程中请求体的 `id` 字段被剥离，破坏 JSON-RPC 2.0 语义。修复 PR 预计即将提交。[GitHub Issue](https://github.com/BerriAI/litellm/issues/49479)  
3. **高 - 预算上限绕过 (#46874)**：回退预算检查忽略团队成员限额，允许零成本模型通过付费回退机制突破预算。[GitHub Issue](https://github.com/BerriAI/litellm/issues/46874)  
4. **中等 - 缓存不一致 (#49313)**：精确匹配缓存未按虚拟键/团队作用域划分，导致跨用户响应泄露。已在 v1.106+ 中修复。[GitHub Issue](https://github.com/BerriAI/litellm/issues/49313)  
5. **中等 - 图像令牌计价缺陷 (#48422)**：当 `detail=auto` 时，图像一律按 85 个令牌计价，与尺寸无关。[GitHub Issue](https://github.com/BerriAI/litellm/issues/48422)

---

### **6. 对应用开发者的影响**  
- **谨慎处理成本追踪**：在 #48398 修复前，切勿信任提供方报告的 `cost` 字段。建议实施手动成本校验，或使用 LitLLM 的 `cost_per_token` 并设置安全默认值。  
- **避免在 JSON-RPC 应用中使用 `pass_through_endpoints`**：在 #49479 修复前，预计会导致 RPC 调用失败。请改用直接路由或替代中间件。  
- **准备迎接 Rust 迁移**：新推出的 Rust 路由器与转发服务器（PRs #49513–#49607）带来更高性能与可扩展性。对于高吞吐量部署，建议启用 Rust 模式。  
- **采用声明式配置管理**：借助 #28168，可将代理状态导出为 YAML，实现可复现环境——对 CI/CD 与多环境运维至关重要。[GitHub Issue](https://github.com/BerriAI/litellm/issues/28168)  
- **警惕工具链回归问题**：流式工具调用（Ollama、Fireworks）可能错误报告 `finish_reason`，若客户端附加后缀，MCP 工具可能失败。在智能体中需仔细验证工具输出。

---  
*摘要生成时间：2026-11-02 | 来源：GitHub @ BerriAI/litellm*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-02**

---

### **1. 今日亮点**  
Unsloth 生态系统持续扩展对多模态与分布式推理工作流的支持，关键改进包括模型加载的可靠性（特别是 GGUF MoE 模型）以及 UI 响应速度。针对孤立安装和 GPU 内存处理中的严重回归问题已得到修复，而全富文本编辑与从右到左语言支持等新功能则表明团队在用户体验与国际化方面投入更深层次的资源。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未发布新版本。*  
然而，两个高严重性回归问题已解决：  
- **#16186 / #16185**：修复了通过 `UNSLOTH_STUDIO_HOME` 进行 `--local` 安装时对基线虚拟环境的静默覆盖问题。这是一个影响多环境隔离的关键级故障（[PR #16426](https://github.com/unslothai/unsloth/pull/16426)，[PR #16430](https://github.com/unslothai/unsloth/pull/16430)）。  
- **#16429**：当 GPU 层设置为零时，隐藏的“MoE 层在 CPU 上”滑块现已被禁用，防止出现误导性的配置选项（[PR #16429](https://github.com/unslothai/unsloth/pull/16429)）。

---

### **3. 新模型与硬件支持**  
- **Gemini API 扩展**：PR #16433 支持通过 `nextPageToken` 发现所有 Gemini 对话模型，包括新系列如 `gemini-4-argon` 与 `gemini-3.8-flash`（[Issue #16432](https://github.com/unslothai/unsloth/issues/16432)）。  
- **AMD RX 5700 XT 上的 Vulkan**：长期存在的硬件兼容性问题正在积极调查中（[Issue #16395](https://github.com/unslothai/unsloth/issues/16395)），PR #16421 在 GPU 资源不足时增加重试逻辑，以提升边缘情况下的稳定性。  
- **MLX 后端预览版**：PR #16441 引入实验性 MLX 工具链支持，涵盖推测解码、视频处理、语法约束、KV 量化及 LoRA 回复——标志着向 Apple Silicon 原生推理加速迈出早期步伐。

---

### **4. 性能与优化**  
- **LoRA 的 FP8 训练**：PR #16423 实现了在冻结的 16 位基础模型上启用 `float8_training=True`，允许以 FP8 进行梯度计算，同时保持基础模型为 16 位精度——这是在有限硬件上实现高效微调的重要一步（[PR #16423](https://github.com/unslothai/unsloth/pull/16423)）。  
- **内存效率改进**：PR #16438 修正了 macOS 上错误的 RSS 报告问题，将 `ru_maxrss` 从字节单位转换为 MiB 单位，提升了 LTX 工作者的监控准确性（[PR #16438](https://github.com/unslothai/unsloth/pull/16438)）。  
- **流水线并行**：PR #16407 通过 `UNSLOTH_PARALLEL` 实现基于环境的统一并行控制，支持跨多个后端动态组合 DP/TP/PP/CP——为大规模训练编排奠定基础（[PR #16407](https://github.com/unslothai/unsloth/pull/16407)）。

---

### **5. 稳定性与回归**  
| 严重性 | 问题 | 状态 | 修复 PR |  
|--------|------|--------|-------|  
| 严重 | 孤立安装（`--local`）静默覆盖虚拟环境 | 已解决 | [#16426](https://github.com/unslothai/unsloth/pull/16426), [#16430](https://github.com/unslothai/unsloth/pull/16430) |  
| 高 | 并发模型加载期间 GPU 内存未释放 | 开放 | [#16436](https://github.com/unslothai/unsloth/issues/16436) |  
| 中 | Linux 上闪烁问题（X11 + LXQt） | 已解决 | [#16186](https://github.com/unslothai/unsloth/issues/16186) |  
| 中 | Linux 桌面拼写检查失效 | 已解决 | [#16184](https://github.com/unslothai/unsloth/issues/16184) |  
| 低 | 当 GPU=0 时，“MoE 层在 CPU 上”仍可见 | 已解决 | [#16429](https://github.com/unslothai/unsloth/pull/16429) |  

> *注：仍有若干问题处于开放状态，涉及模型加载超时（如 #16267）、流中断（如 #16317）以及音视频附件处理（如 #16248），表明运行时稳定性方面仍在持续优化。*

---

### **6. 对应用开发者的意义**  
- **构建健壮的多环境工具**：可安全使用 `UNSLOTH_STUDIO_HOME`——修复确保了真正的环境隔离，使开发者能够管理多个模型配置而互不干扰。  
- **利用新兴的 FP8 + LoRA 工作流**：借助 PR #16423，现在可在 16 位基础模型上高效使用 FP8 梯度训练 LoRA——非常适合低内存微调管道。  
- **准备处理更丰富的输入输出**：全富文本编辑器（#16396）的推出及音视频支持增强意味着未来应用需预期更丰富的媒体数据包与更高的格式保真度。  
- **为分布式推理设计架构**：`UNSLOTH_PARALLEL` 环境变量（PR #16407）支持声明式控制流水线、张量与数据并行——对可扩展代理系统至关重要。  
- **谨慎监控内存使用**：注意模型切换期间的 GPU 内存释放错误；在 #16436 修复前，避免在生成过程中加载新模型。

> 🔗 *追踪开发进展：[GitHub Issues](https://github.com/unslothai/unsloth/issues), [Pull Requests](https://github.com/unslothai/unsloth/pulls)

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*