# AI 基础设施日报 2026-11-14

> 生成时间: 2026-11-14 02:39 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-11-14**

---

### **1. 生态概览**

截至2026年末，AI推理与服务领域呈现出高性能引擎、跨平台运行时支持与原生代理编排快速融合的态势。各项目已不再孤立发展——vLLM与SGLang正针对Blackwell（SM120）和ROCm进行硬件级优化，而Ollama与LiteLLM则持续深化与本地代理及云网关的集成。基于Rust的性能层（LiteLLM）、统一量化后端（vLLM的Humming RFC）以及模型导出工具（Unsloth）的出现，标志着该生态正走向成熟：效率、可移植性与开发者体验被同等重视。这不仅关乎速度，更在于构建**可靠、可扩展且安全**的异构硬件推理栈。

---

### **2. 活跃度对比**

| 项目       | 开放问题数 | 近24小时合并的PR数 | 发布状态        |
|---------------|-------------|--------------------------|------------------------|
| **vLLM**      | 187         | 12                       | 无新版本发布         |
| **SGLang**    | 354         | 9                        | v1.0 跟踪中（未发布） |
| **llama.cpp** | 192         | 11                       | **v1.0.0 已发布**（破坏性变更） |
| **Ollama**    | 218         | 7                        | 无新版本发布         |
| **LiteLLM**   | 245         | 10                       | v1.111.0-dev 与 LTS v1.108.8 |
| **Unsloth**   | 162         | 6                        | 无新版本发布         |

> ✅ **关键洞察**：*llama.cpp* 在活跃度上领先，其主版本v1.0.0移除了遗留API，标志着接口成熟。*SGLang* 与 *LiteLLM* 展现出强烈的稳定性关注，推进1.0版本并强化安全机制。

---

### **3. 模型支持竞赛**

| 新模型 / 架构           | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|------------------------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1-Flash**            | ✅ (ROCm/MI355X) | ⚠️ (SM120 性能问题) | ❌ | ✅ (MLX/MXFP4) | ❌ | ❌ |
| **Qwen3.8-2.4T-A95B-Quark-MXFP4**  | ✅ (ROCm) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Kimi-K3/K2.5 (AMD)**             | ⚠️ (ROCm 优化) | ✅ (优化后的 FP8/MXFP4) | ❌ | ❌ | ❌ | ❌ |
| **Zaya1 8B (Zyphra)**              | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Granite4VisionForConditionalGeneration** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **AMD gfx1250 (MI45x)**            | ❌ | ✅ (AITER 固定) | ❌ | ❌ | ❌ | ❌ |
| **Ascend NPU**                     | ❌ | ✅ (2026年Q4路线图) | ❌ | ❌ | ❌ | ❌ |
| **Cambricon MLU**                  | ❌ | ❌ | ❌ | ❌ | ✅ (功能请求) | ❌ |

> 🏆 **胜者：SGLang** — 对新AMD模型（Kimi-K系列）采纳最快，对非NVIDIA硬件的路线图最清晰。  
> 🥈 **亚军：Ollama** — 通过MLX和微调工作流实现本地模型最广泛的**实际支持**。  
> 🥉 **备注**：*llama.cpp* 在小众后端（Hexagon、Vulkan iGPU）的**原生支持**上领先，但在前沿大模型方面滞后。

---

### **4. 性能前沿**

| 关注领域               | vLLM                          | SGLang                         | llama.cpp                   | Ollama                      | LiteLLM                     | Unsloth                    |
|--------------------------|-------------------------------|--------------------------------|-----------------------------|-----------------------------|-----------------------------|----------------------------|
| **KV缓存效率**  | ✅ 前瞻哈希、EAGLE降级 | ⚠️ HiCache 主机层级失败   | ❌                            | ✅ VRAM 计算修复     | ❌                          | ❌                         |
| **批处理与并发**| ✅ DSpark 并发修复      | ✅ `prefill-cache-reserve`     | ❌                            | ✅ 自动上下文大小调整       | ✅ 动态速率限制    | ❌                         |
| **量化**         | ✅ Marlin → Humming RFC        | ✅ MXFP4 + MLA融合          | ✅ IQ2_XXS, NVFP4, MXFP4     | ✅ 混合 MXFP4/MXFP8         | ✅ 图像签名            | ✅ INT8 DiT 内核（实验性） |
| **分布式服务**  | ✅ Engram 池拆分（NVLink/RDMA） | ❌                             | ❌                            | ❌                          | ✅ 原生回调栈    | ❌                         |
| **内核优化**  | ✅ FlyDSL, MXFP8 GEMMs         | ✅ AITER, DSpark MHA草案     | ✅ GCN/RDNA3.5 MMQ, WMMA     | ❌                          | ✅ Rust原生回调     | ✅ GUI 空闲状态吞吐提升 |

> 🔥 **前沿领军者**：  
> - *vLLM*：分布式扩展能力与内核级调优（尤其在ROCm上表现突出）。  
> - *SGLang*：负载下调度器的鲁棒性（预填充缓存预留机制）。  
> - *LiteLLM*：通过Rust原生回调实现可观测性与防护基础设施。

---

### **5. 层级定位**

| 项目       | 主要层级                 | 核心差异化                                      |
|---------------|-------------------------------|----------------------------------------------------------|
| **vLLM**      | **高性能推理引擎** | GPU优化，低延迟推理；数据中心规模部署中的主导者 |
| **SGLang**    | **以代理为核心的推理运行时** | 专为代理工作负载设计：推测解码、内存感知调度 |
| **llama.cpp** | **跨平台本地运行时** | 单一二进制文件，无依赖；适用于边缘/移动端/嵌入式场景 |
| **Ollama**    | **本地代理网关 + 运行时** | 开发者友好的命令行界面，模型管理器与代理集成（Wirken、Claude Desktop） |
| **LiteLLM**   | **多提供商网关与编排器** | 统一API层，支持混合云/本地推理，成本控制与可观测性 |
| **Unsloth**   | **微调工作室 + 本地运行时** | 训练/微调与模型导出的一体化用户体验；聚焦易用性 |

> 💡 **战略含义**：开发者越来越根据**工作流**而非单纯性能来选择技术栈。vLLM用于规模化，SGLang用于代理，Ollama用于桌面应用，LiteLLM用于多云编排。

---

### **6. 趋势信号**

1. **硬件多样化加速**  
   - AMD ROCm（gfx950/gfx942/gfx1250）及Ascend/NPU支持已不再是实验性质——vLLM、SGLang、Ollama正在积极优化。
   - **关注点**：MI355X与MI45x的性能基准将决定下一代推理经济性。

2. **Rust正成为性能基石**  
   - LiteLLM的原生Rust回调表明系统正向更低延迟、更安全、更可扩展方向演进。
   - **影响**：未来vLLM/SGLang的发布有望采用Rust重构核心逻辑。

3. **代理工作流需要专用工具链**  
   - 如 `--prefill-cache-reserve`、自动上下文大小调整、推测解码早期过滤等特性已成为标配。
   - **行动建议**：避免仅依赖通用推理引擎运行长时间代理任务——应选择专为有状态执行设计的平台。

4. **安全与合规已成为首要关切**  
   - LiteLLM的Cosign镜像签名、JWT卫生警报与密钥清理凸显信任需求日益增长。
   - **建议**：使用生产级代理镜像时，务必验证签名。

5. **API稳定性持续提升**  
   - vLLM的破坏性变更、llama.cpp的v1.0.0、SGLang的1.0跟踪均反映生态成熟。
   - **开发者建议**：尽早迁移至稳定版本——勿等待“完美”稳定性。

---

### **给应用开发者的最终建议**

按工作流选择技术栈：
- **追求规模与速度？** → 使用 **vLLM**，搭配ROCm或SM120。
- **代理与有状态会话？** → 选 **SGLang** 或 **Ollama**，配合自动上下文与缓存控制。
- **边缘/嵌入式？** → 选 **llama.cpp**（Hexagon/Vulkan/iGPU）。
- **多云编排？** → 选 **LiteLLM**，搭配Rust回调与预算控制。
- **微调+图形界面？** → 选 **Unsloth**（但需注意v0.1.917-beta存在mmap bug）。

> ⚠️ **关键提醒**：在补丁落地前，请避免使用 `fp8_e5m2` KV缓存（vLLM）、SM120上的 `--enforce-eager`（vLLM/SGLang），以及AMD 780M上的 v0.32.10+（Ollama）。

此生态已不再碎片化——正围绕**性能、可靠性与开发者体验**趋于统一。是时候规划跨栈互操作性了。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-11-14**

---

### **1. 今日亮点**
vLLM 项目在 **ROCm/AMD 性能优化** 方面进展迅猛，多个 PR 正针对 *DeepSeek-V4.1-Flash* 和 *Qwen3.8-2.4T-A95B* 等高影响力模型在 MI355X（gfx950）上的表现进行优化。关键工作正在推进中，以解决 **Blackwell SM120 解码吞吐问题** 与 **CUDA graph 兼容性**（用于 DSpark），同时一份重要 RFC 提议在 NVIDIA 架构上全面替换 Marlin，采用更具前瞻性的 **Humming 量化后端**。

---

### **2. 发布与破坏性变更**
过去 24 小时内无报告。未观察到新版本发布或破坏性 API/配置变更。

---

### **3. 新模型与硬件支持**
- ✅ **DeepSeek-V4.1-Flash** 现已在 **MI355X（gfx950）** 上获得专用 ROCm 性能追踪，通过 Issue #66587 与 PR #67377 实现。
- ✅ **Qwen3.8-2.4T-A95B-Quark-MXFP4** 与 **Qwen3.8-Flash-Next-Quark-MXFP4** 正处于活跃的 ROCm 优化中（Issue #57149, #59575）。
- 🚀 **SM120（RTX PRO 6000 Blackwell）** 支持正被优先处理，针对 DeepSeek-V4-Flash 的关键修复亟需解决 `--enforce-eager` 与 CUDA graphs 问题（Issue #56892）。
- 🔧 **ROCm/Metal/CPU**：持续聚焦 AMD gfx950/gfx942 支持；正在进行 ROCm 稳定性相关的 CI 修复（PR #67567）。

> 🔗 [Issue #56892](https://github.com/vllm-project/vllm/issues/56892) | [PR #67377](https://github.com/vllm-project/vllm/pull/67377)

---

### **4. 性能与优化**
- ⚡ **MI355X 上的 DeepSeek-V4.1-Flash**：PR #67377 引入了经过调优的 FlyDSL 内核与更快的 MXFP8 激活量化，提升了密集 GEMM 与 MoE 线性层性能（MXFP8 峰值利用率：约 21–31% 对比基线）。
- ⚙️ **DFlash/DSpark 并发修复**：PR #64364 改进了 GB300 上并发数为 1 时的 TP4 特化解码性能。
- 📈 **推测解码优化**：PR #66534 在目标 logits 加载阶段启用早期 top-k/top-p 截断 —— 减少冗余计算。
- 🔄 **KV 缓存效率提升**：PR #66234 移除了旧版 EAGLE 块丢弃逻辑，改为默认使用前瞻哈希，以提升前缀缓存复用率。
- 🌐 **多节点扩展能力**：PR #67539 引入基于 NVLink/RDMA 的 engram 池拆分机制，实现查找表的可扩展分发。

> 🔗 [PR #67377](https://github.com/vllm-project/vllm/pull/67377) | [PR #66234](https://github.com/vllm-project/vllm/pull/66234) | [PR #67539](https://github.com/vllm-project/vllm/pull/67539)

---

### **5. 稳定性与回归问题**
- ❌ **严重回归**：在 Qwen-VL 模型（Qwen2-VL、Qwen2.5-VL）上，使用默认缩放比例时，`--kv_cache_dtype="fp8_e5m2"` 会无声地导致输出损坏（**Issue #41343**）。
- ❌ **高优先级漏洞**：在 **SM120（Blackwell）** GPU 上启用 `--enforce-eager` 时解码吞吐极低，且 CUDA graphs 完全不可用（**Issue #56892**）。
- ❌ **内存损坏风险**：CPU expand_kernel 代理会丢弃输出 —— 导致非贪婪推测解码中出现未初始化内存使用（**Issue #55005**）。
- ⚠️ **负载均衡失败**：持续运行 48–72 小时后，负载均衡器无法在数据并行轴上正确分发请求（**Issue #40279**）。
- ✅ **修复中**：
  - PR #66488 修复了 MoE 配置中 AWQ 键名不匹配问题。
  - PR #63874 修复了 FlashInfer 在析构阶段的工作区泄漏。

> 🔗 [Issue #41343](https://github.com/vllm-project/vllm/issues/41343) | [Issue #56892](https://github.com/vllm-project/vllm/issues/56892) | [PR #66488](https://github.com/vllm-project/vllm/pull/66488)

---

### **6. 对应用开发者的启示**
- **对 AMD 用户**：预计在 MI355X 上使用 Qwen3.8 与 DeepSeek-V4.1-Flash 时性能将显著提升 —— 但请暂避 `fp8_e5m2` KV 缓存，直至 #41343 修复。
- **对 Blackwell（SM120）用户**：请避免使用 `--enforce-eager` 并临时禁用 CUDA graphs；等待 Issue #56892 的修复。
- **对推测解码工作流**：通过 PR #66534 启用 `--top_k/--top_p` 早期过滤，有效降低计算开销。
- **对大规模推理场景**：建议采用 engram pooling（PR #67539）与 KV 连接器优化，以获得更佳的多节点扩展能力。
- **对 RL 微调场景**：现已通过 PR #67576 支持直接权重重载（`VLLM_RELOAD_MODE=direct`）—— 可启用高效在线量化更新。

> 🔗 [PR #67576](https://github.com/vllm-project/vllm/pull/67576) | [PR #67539](https://github.com/vllm-project/vllm/pull/67539)

---  
*本摘要基于 GitHub 活动整理（2026-11-14）。*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-11-14

---

### **1. 今日亮点**  
SGLang 持续推进对下一代硬件的稳定性与性能优化，重点修复了 Blackwell（SM120）兼容性问题及 HiCache 内存管理缺陷。关键进展包括新增 `--prefill-cache-reserve` 调度器功能，防止高并发场景下前缀缓存崩溃，以及针对 Kimi-K 系列模型的 AMD ROCm 后端持续优化。

---

### **2. 发布与破坏性变更**  
过去 24 小时内无新版本发布。但 **SGLang 1.0 已正式进入追踪状态**，通过 [Issue #50045](https://github.com/sgl-project/sglang/issues/50045)，标志着向 API 稳定性和破坏性变更强制执行的转变。从 0.5.x 升级可能需要调整配置；详见追踪器中的 [升级说明](#upgrade-notes)。

---

### **3. 新模型与硬件支持**  
- **AMD gfx1250 (MI45x)**：PR [#47562](https://github.com/sgl-project/sglang/pull/47562) 跟踪 AITER 引脚绑定就绪状态，尽管 CI 验证仍为手动。
- **Ascend NPU**：[路线图问题 #43519](https://github.com/sgl-project/sglang/issues/43519) 确认 2026 年第四季度将聚焦多模态模型支持与服务功能。
- **寒武纪 MLU**：[功能请求 #45615](https://github.com/sgl-project/sglang/issues/45615) 正式开启后端开发。
- **多模态视频支持**：PR [#50407](https://github.com/sgl-project/sglang/pull/50407) 实现在 `/generate` 中向视频处理器传递帧数和令牌数上限。

---

### **4. 性能与优化**  
- **AMD ROCm**：多项优化已合并：
  - 将 MLA 值投影与 MXFP4 输出量化融合 ([PR #33873](https://github.com/sgl-project/sglang/pull/33873))。
  - 在非因果统一注意力（unified_attention）上启用 DSpark MHA 草稿生成 ([PR #47437](https://github.com/sgl-project/sglang/pull/47437))。
  - 优化 Kimi-K3 的 fp8-Q asm 验证启动流程 ([PR #48878](https://github.com/sgl-project/sglang/pull/48878))。
- **NVIDIA SM120 (Blackwell)**：
  - DeepSeek-V4 预填充吞吐量（约 2–7K tok/s，对比 vLLM/Marlin 的 ~12.5K）正在调查中 ([Issue #33422](https://github.com/sgl-project/sglang/issues/33422))。
  - 修复 RTX 50 系列消费级显卡上 CUDA 13 wheel 安装失败问题 ([Issue #49209](https://github.com/sgl-project/sglang/issues/49209))。
- **调度器**：PR [#50213](https://github.com/sgl-project/sglang/pull/50213) 引入 `--prefill-cache-reserve`，在多轮代理负载下保留 KV/状态槽位以维持缓存前缀。

---

### **5. 稳定性与回归问题**  
今日报告的关键问题包括：  
1. **CUDA 核心转储追踪器** ([Issue #26340](https://github.com/sgl-project/sglang/issues/26340)) – 361 条评论记录了来自 CI 的自动收集核心转储，影响多个 GPU 配置。  
2. **HiCache 主机层级命中率归零** ([Issue #45400](https://github.com/sgl-project/sglang/issues/45400)) – 当主机 Mamba 池耗尽时发生，尽管主机上仍保留了 KV。  
3. **B200 上出现 Xid 13 “CTA Not Present” 崩溃** ([Issue #46203](https://github.com/sgl-project/sglang/issues/46203)) – 在 4 台机器上共发生 7 次崩溃，均出现在代理工作负载下。  
4. **填充后出现 NaN logits 锁定** ([Issue #49881](https://github.com/sgl-project/sglang/issues/49881)) – 影响 GLM-5.3-Flash 的推测解码；跨请求持续存在。  
*注：上述高严重性问题目前尚未关联任何修复 PR。*

---

### **6. 对应用开发者的影响**  
- 在核心转储与吞吐量回归问题解决前，**避免部署 SM120/Blackwell**，尤其是 DeepSeek-V4 等高吞吐模型。  
- 使用 `--prefill-cache-reserve` 稳定长期运行的代理会话，防止前缀缓存抖动。  
- 对于 AMD 用户：近期合并的 PR 将带来 Kimi-K2.5/K3 模型性能提升，但使用 `--attention-backend aiter` 时需谨慎，因存在已知回退机制。  
- 监控 [CI 失败追踪器 #17050](https://github.com/sgl-project/sglang/issues/17050) 以应对影响 CI 可靠性的不稳定的测试。  
- 为 **SGLang 1.0** 做准备——审计配置文件：预计将实施更严格的校验，并弃用静默设置。  

> 🔗 *所有链接均指向 GitHub 问题或 PR，便于深入排查。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 消息简报 – 2026-11-14**

---

### **1. 今日亮点**  
**v1.0.0** 版本的发布标志着一个重要里程碑，移除了已弃用的公共 API 并稳定了核心推理栈。关键进展包括针对大批次输出的 Metal 后端修复、Hexagon SSM_SCAN 支持的改进，以及 Vulkan 设备管理的增强。这些更新进一步巩固了 llama.cpp 作为生产级、跨平台 LLM 推理引擎的地位。

---

### **2. 发布与破坏性变更**  
- **`v1.0.0` 发布**：这是一个**破坏性版本**，移除了旧版公共 API（如 `llama_eval`、`llama_load_model`）。开发者必须迁移至新的基于 `llama_infer` 和 `llama_context` 的 API。  
  🔗 [发布说明](https://github.com/ggml-org/llama.cpp/releases/tag/v1.0.0) | 📝 [博客文章](https://huggingface.co/blog/ggml-org/llama-cpp-v1)

---

### **3. 新模型与硬件支持**  
- **Hexagon**：新增对 `SSM_SCAN` 操作的支持，并优化了高通设备（包括 Android）上的缓冲区堆叠。  
  🔗 [PR #31921](https://github.com/ggml-org/llama.cpp/pull/31921), [PR #32144](https://github.com/ggml-org/llama.cpp/pull/32144)  
- **AMD ROCm**：在 HIP 后端中新增对 `gfx1013`（RDNA1）的支持，适用于 BC250 系列 GPU。  
  🔗 [PR #32236](https://github.com/ggml-org/llama.cpp/pull/32236)  
- **新模型**：通过 GGUF 转换新增对 **Zaya1 8B (Zyphra)** 与 **Granite4VisionForConditionalGeneration** 的支持。  
  🔗 [PR #32071](https://github.com/ggml-org/llama.cpp/pull/32071), [PR #32237](https://github.com/ggml-org/llama.cpp/pull/32237)  
- **量化**：扩展 Hexagon 支持，新增 `IQ2_XXS` 与 `NVFP4` 量化类型。  
  🔗 [PR #31954](https://github.com/ggml-org/llama.cpp/pull/31954)

---

### **4. 性能与优化**  
- **CUDA/HIP**：针对 GCN 与 RDNA3.5 调整了 MMQ 配置；为 RDNA3.5 新增“少行 MMQ 与 WMMA”支持。  
  🔗 [PR #30021](https://github.com/ggml-org/llama.cpp/pull/30021), [PR #32224](https://github.com/ggml-org/llama.cpp/pull/32224)  
- **Vulkan**：优化 `TOP_K_MASK` 同步屏障与内核复用；引入可选的设备保活机制。  
  🔗 [PR #31544](https://github.com/ggml-org/llama.cpp/pull/31544), [PR #29267](https://github.com/ggml-org/llama.cpp/pull/29267)  
- **CPU**：在 `RMS_NORM`（CPU/CUDA）中加入 BF16 支持；AMX 优化现已正确处理广播权重。  
  🔗 [PR #32135](https://github.com/ggml-org/llama.cpp/pull/32135), [PR #29670](https://github.com/ggml-org/llama.cpp/pull/29670)  
- **SYCL**：新增脚本用于 oneAPI 升级后检查 DLL 依赖项。  
  🔗 [PR #32134](https://github.com/ggml-org/llama.cpp/pull/32134)

---

### **5. 稳定性与回归问题**  
- **严重**：`Vulkan: GLM-OCR 视觉编码器在 Intel Arc A380 上产生垃圾数据`（问题 #31836）——影响 iGPU 上的视觉模型。暂无修复方案。  
- **高严重性**：`Metal: mul_mv 目标偏移溢出` 导致大批次输出中无声数据损坏（已在 PR #32221 中修复）。  
  🔗 [修复 PR #32221](https://github.com/ggml-org/llama.cpp/pull/32221)  
- **中等**：`Vulkan: GPU 故障后设备丢失` 导致 `ggml_vk_wait_for_fence` 无限自旋（问题 #29926）。  
- **重复出现**：双 GPU 环境下使用 `-sm tensor` 时频繁发生 CUDA/SYCL 崩溃，以及大预填充 + 前缀重用场景下（问题 #27845, #29255, #29549）。  
- **已知问题**：`HIP/gfx1151: SOLVE_TRI 在 rocBLAS 中因 'hipErrorInvalidImage' 报错终止`（问题 #27557）——阻塞 Qwen3.5/Kimi-linear 模型。

---

### **6. 对应用开发者的意义**  
- **立即升级至 v1.0.0**：新 API 更健壮且面向未来。请将旧的 `llama_eval` 调用迁移到 `llama_infer` 及基于上下文的工作流。  
- **使用 `--cache-type-k-swa`** 以优化不同注意力类型下的内存占用，适用于 SWA 模型。  
- **在多 GPU 系统中避免使用 `-sm tensor`**，直至问题 #27845 和 #29255 解决。  
- **充分利用新硬件支持**：Hexagon（移动端）、AMD gfx1013（BC250）、Vulkan 保活机制（适用于长时间运行的服务）。  
- **监控 Vulkan/iGPU 稳定性**——特别是 Intel Arc A380 与 Radeon 680M（问题 #31509：全为 NaN 的 logits）。  
- **仅在确定性草稿采样时启用 `--spec-draft-p-min`** ——概率性草稿可能忽略 p_min 截断（问题 #31294）。

👉 **推荐操作**：升级至 `v1.0.0`，并针对您的模型栈进行验证，尤其是使用视觉模型、多 GPU 或移动端后端的场景。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-14**

---

### **1. 今日亮点**  
Ollama 生态系统持续扩展其代理与云集成能力，新增的 PR 支持 Claude Desktop CLI 启动器以及 Wirken、SelectTranslate 等工具。关键稳定性修复正在进行中，包括显存（VRAM）计数改进和 Qwen 与 DeepSeek 模型流解析修正。在 v0.32.10+ 版本中报告了 AMD Radeon 780M Vulkan 支持的重大回归问题，影响消费级 GPU 上大模型推理性能。

---

### **2. 发布与破坏性变更**  
*无*  
过去 24 小时内未发布新版本。当前无破坏性变更或迁移说明适用。

---

### **3. 新模型与硬件支持**  
- **新集成**：通过 [PR #19695](https://github.com/ollama/ollama/pull/19695)、[PR #18989](https://github.com/ollama/ollama/pull/18989) 将 `SelectTranslate`（使用本地 Ollama 模型的 AI 浏览器扩展）和 **Wirken**（代理网关）加入社区集成。  
- **CLI 启动支持**：引入 `ollama launch claude-desktop` 命令，支持 macOS 平台，可通过 Ollama 应用网关实现命令行驱动的配置与模型路由 ([PR #19691](https://github.com/ollama/ollama/pull/19691))。  
- **MLX 后端增强**：新增对 **DeepSeek V4.1 Flash** 的支持，包含混合 MXFP4/MXFP8 量化、主机托管张量生命周期管理、压缩稀疏注意力机制以及视觉/音频支持 ([PR #19667](https://github.com/ollama/ollama/pull/19667))。  
- **硬件兼容性**：PR 已解决 MLX-C/XGrammar 二进制包在打包系统中的兼容性问题 ([PR #19688](https://github.com/ollama/ollama/pull/19688))。

---

### **4. 性能与优化**  
- **自动上下文大小调整**：长期存在的 PR [#13619](https://github.com/ollama/ollama/pull/13619) 引入基于可用显存自动计算 `num_ctx` 大小的功能——这是迈向消除手动调参、减少因过度分配导致 CPU 回退的重要一步。  
- **显存计数修复**：PR [#19632](https://github.com/ollama/ollama/pull/19632) 修复了多处关键的 GPU 内存追踪问题，此前这些问题导致模型错误驱逐、加载失败以及跨设备显存分配效率低下。  
- **流式传输效率提升**：PR [#19689](https://github.com/ollama/ollama/pull/19689) 与 [#19694](https://github.com/ollama/ollama/pull/19694) 改进了流块中的空白字符处理，并修复了 Qwen3.5/Coder 解析器中工具调用参数损坏的问题——这对结构化输出的代理工作流至关重要。

---

### **5. 稳定性与回归问题**  
- **严重**：v0.32.10+ 中 AMD Radeon 780M Vulkan 出现回归，运行大模型时触发 `ErrorDeviceLost` 错误（`radv/amdgpu: Not enough memory for command submission`），因命令提交内存不足。受影响用户应降级至 v0.32.9 或更早版本，直至修复发布 ([Issue #17748](https://github.com/ollama/ollama/issues/17748))。  
- **高严重性**：在多轮代理会话中，`mimo-v2.6-pro:cloud` 出现工具调用泛滥，导致会话质量下降且输出不可用 ([Issue #19672](https://github.com/ollama/ollama/issues/19672))。疑似上游检查点问题。  
- **中等**：在 Windows 上，长提示（>70k 字符）运行约 19 秒后偶发 `500 "chat prompt error"`（`wsarecv reset`）——可在代理场景中复现。通常立即重试可成功。  
- **低严重性**：聊天上下文中将 `ornith-1.5:35b` 错误识别为 "Claude" ([Issue #17904](https://github.com/ollama/ollama/issues/17904)) —— 可能是元数据或系统提示配置错误。

---

### **6. 对应用开发者的启示**  
- **代理工作流**：在长时间运行的代理中使用 `mimo-v2.6-pro:cloud` 与 `qwen3.5/coder` 时需谨慎——可能因解析器缺陷导致工具调用重复或数据丢失。建议明确指定工具模式，并验证流式行为。  
- **云定价困惑**：$0.30/M 输入成本与“零数据保留”承诺之间存在矛盾，引发对缓存输入计费的担忧 ([Issue #17489](https://github.com/ollama/ollama/issues/17489))；开发者应审计使用模式，并考虑在隐私敏感场景中采用纯本地部署。  
- **本地部署**：利用自动上下文大小调整功能 ([PR #13619](https://github.com/ollama/ollama/pull/13619)) 避免手动调节 `num_ctx` 的试错过程。对于 AMD 用户，建议避免使用 v0.32.10+，直至 Vulkan 显存管理修复。  
- **集成生态**：越来越多的 CLI 支持集成（如 Claude Desktop、Wirken、Recordist）正推动更丰富、统一的 AI 应用架构——非常适合构建桌面原生代理，且设置开销极低。

---  
*摘要源自 2026-11-14 GitHub 活动 | 来源：[github.com/ollama/ollama](https://github.com/ollama/ollama)*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 消息简报 – 2026-11-14**

---

### **1. 今日亮点**  
LiteLLM 生态系统持续推动高性能、安全且可扩展的推理编排。关键进展包括基于原生 Rust 的回调功能在预算管理、Prometheus 指标和速率限制方面的基础建设，为未来的性能与可观测性提升奠定基础。重要修复解决了流式传输可靠性（如 Azure 流式中断）、模型映射错误以及日志中敏感数据的安全加固问题。

---

### **2. 发布与破坏性变更**  
- **v1.111.0-dev.2**、**v1.111.0-dev.1** 及 **v1.108.8 (LTS)** 已发布，通过 [commit `e82a3c6`](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065) 中的密钥实现增强的镜像签名，使用 Cosign 工具。  
  - **验证签名**：  
    ```bash
    cosign verify --key https://raw.githubusercontent.com/BerriAI/litellm/e82a3c646908ba0a6ee0beddc4310d7a6cac4065/cosign.pub ghcr.io/berriai/litellm:v1.108.8
    ```
  - 使用 `ghcr.io/berriai/litellm:lts` 以保持在最新稳定版本。
- 本周期无 API 或配置结构的破坏性变更；重点仍聚焦于稳定性和安全性。

---

### **3. 新模型与硬件支持**  
- 通过 PR [#41192](https://github.com/BerriAI/litellm/pull/41192) 新增 **Vispark Vision 模型**：`vispark/vision-small`、`medium`、`large`。支持视觉任务，计费按 600 token 起步。  
- 通过 PR [#50934](https://github.com/BerriAI/litellm/pull/50934) 新增对 **Soniox STT v6 模型**（`stt-async-v6`、`stt-rt-v6`）的支持；v5 模型将于 2026 年 12 月 15 日停用。  
- 对 **Ollama 文本生成图像支持** 的请求已在问题 [#28026](https://github.com/BerriAI/litellm/issues/28026) 中提出，目前返回空响应——尚未实现。

---

### **4. 性能与优化**  
- **原生 Rust 回调栈** 正式上线：  
  - 预算预留 (#51535)、Prometheus 日志 (#51541)、动态速率限制 (#51540)、S3 日志 (#51539) 和并行请求限流 (#51537) 等功能正通过 `CustomLoggerV2` 协议向 Rust 迁移。  
  - 通过环境变量标志启用（如 `LITELLM_NATIVE_BUDGETS=true` 等），默认关闭。  
  - 预期收益：降低延迟、减少 Python 开销、在高负载下具备更好可扩展性。  
  - [PR #51526](https://github.com/BerriAI/litellm/pull/51526) 建立了基础架构。
- **Azure Foundry 集成改进**：  
  - 修复 `/openai/v1` 端点问题：移除冗余的 `api-version` 参数 (#51767)，恢复项目/资源基路径 (#51769)，提升兼容性并减少 404 错误。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 描述 | 修复状态 |
|--------|-------|-------------|------------|
| 🔴 高 | [#50434](https://github.com/BerriAI/litellm/issues/50434) | Gemini 调用时偶发 503 / `APIConnectionError` | 待处理 – 影响生产网关的可靠性 |
| 🔴 高 | [#51723](https://github.com/BerriAI/litellm/issues/51723) | 无法强制将 `/chat/completions` 端点用于 OpenAI 兼容服务 | 已关闭 – 通过 `openai/` 前缀绕过现已生效 |
| 🟡 中 | [#51456](https://github.com/BerriAI/litellm/issues/51456) | Bedrock Llama 原生流式传输丢失 `prompt_token_count`，且使用量统计偏低 | 已在 PR #51747（通过 `reasoning_effort`）修复 |
| 🟡 中 | [#51389](https://github.com/BerriAI/litellm/issues/51389) | 共享 YAML `model_info` 导致元数据污染及错误的支出追踪 | 待处理 – 影响多模型部署中的成本准确性 |
| 🟢 低 | [#36997](https://github.com/BerriAI/litellm/issues/36997) | 管理员 UI 在 cookie 中使用非 HttpOnly JWT 与代理密钥 | 待处理 – 若会话被劫持存在安全风险 |

> ✅ **已合并修复的 PR**：  
> - [#51747](https://github.com/BerriAI/litellm/pull/51747)：向 Foundry Kimi K3 发送 `reasoning_effort`，修复令牌计数问题  
> - [#51767](https://github.com/BerriAI/litellm/pull/51767)：从 Foundry `/openai/v1` 路径中移除 `api-version`  
> - [#51769](https://github.com/BerriAI/litellm/pull/51769)：将 Azure Foundry 修复回滚至 LTS 分支

---

### **6. 对应用开发者的影响**  
- **优先将生产系统迁移至 LTS（`lts` 标签）**：`v1.108.8` 稳定且接收关键补丁。除非测试新功能，否则避免使用 `dev` 版本。  
- **在高吞吐场景中启用原生 Rust 回调**（如 `LITELLM_NATIVE_BUDGETS=true`），以提升延迟表现与资源效率——尤其适用于使用实时护栏或自定义日志的智能体。  
- **谨慎使用 YAML 配置中的共享 `model_info` 锚点**：跨模型元数据泄露可能导致成本报告不准确。尽可能采用独立的每模型定义。  
- **路由至非标准 OpenAI 兼容接口（如 Reflection.AI）时，使用 `openai/chat/completions` 前缀**，避免端点错配。  
- **监控上游 API 的异常行为**：Gemini 的间歇性失败和 Ollama 的静默超时（问题 #37041）提示应在客户端代码中加入重试逻辑与熔断机制。

> 💡 **实用建议**：审计代理的 `spend_logs` 与 `guardrail` 配置——PR #50214 确保被拦截的请求不会将密钥泄露至日志中。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-14**

---

### **1. 今日亮点**  
Unsloth 项目在 Studio 与桌面客户端上持续快速迭代，重点聚焦于用户体验打磨、GPU 推理稳定性修复（尤其是 ROCm/Metal 平台），以及模型加载与导出工作流的关键优化。主要进展包括修复微调后 Hugging Face 模型加载时 `config.json` 缺失问题、解决 Docker 环境中 `audio.cpp` 符号链接错误，以及提升发布说明和文件导入/导出功能的可靠性。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未发布新版本。*  
但已有若干 **关键缺陷修复与功能合并请求（PR）正在处理或已合并**，包括：  
- 修复在加载 Hugging Face 模型时出现的 `config.json` 缺失错误 ([#368](https://github.com/unslothai/unsloth/issues/368)) — *已确认关闭，但仍需用户侧验证。*  
- 修复 Docker 中更新 `audio.cpp` 时出现的 `invalid cross-device link` 错误 ([#17638](https://github.com/unslothai/unsloth/issues/17638) → [PR #17647](https://github.com/unslothai/unsloth/pull/17647))。  
- 增加对 TLS 证书环境变量的支持（`UNSLOTH_STUDIO_SSL_CERTFILE`、`UNSLOTH_STUDIO_SSL_KEYFILE`），以避免 CLI 参数冗余膨胀 ([#17640](https://github.com/unslothai/unsloth/issues/17640) → [PR #17648](https://github.com/unslothai/unsloth/pull/17648))。

> 🔧 **迁移提示**：从 v0.1.916 升级至 v0.1.917-beta 的用户请注意，强制 mmap 行为存在回归问题 ([#17605](https://github.com/unslothai/unsloth/issues/17605)) — 请显式设置 `--load-mode none` 以避免过度占用内存与 SSD 空间。

---

### **3. 新模型与硬件支持**  
- **ROCm 7.14 / MI300X (gfx942)**：在 `_scaled_dot_product_flash_attention_backward` 中报告数学回退断言错误 — 表明对新型 AMD 架构的内核支持尚未完整。([#17548](https://github.com/unslothai/unsloth/issues/17548))  
- **NVIDIA sm75 至 sm120 与 AMD gfx1151 (Strix Halo)**：针对扩散模型 DiTs（如 FLUX.3 klein、MiniMax-H3）的实验性 INT8 注意力内核正在开发中 ([PR #17718](https://github.com/unslothai/unsloth/pull/17718)) — 对图像生成类任务有望带来显著加速。  
- **自定义文件夹模型发现**：改进了对非默认缓存路径中 Hugging Face 快照的检测能力，现已可在“选择模型”界面中可见 ([PR #17673](https://github.com/unslothai/unsloth/pull/17673))。

---

### **4. 性能与优化**  
- **推理吞吐量提升**：在 LinuxMint + Intel B70 系统上，用户报告最小化 GUI 窗口后，每秒令牌数最高提升达 **300%** — 暗示空闲状态下后台线程调度或 GPU 上下文管理机制得到优化 ([#17722](https://github.com/unslothai/unsloth/issues/17722))。  
- **内存效率**：v0.1.917-beta 中强制 mmap 的修复解决了模型加载时过度占用内存与 SSD 的问题 ([#17605](https://github.com/unslothai/unsloth/issues/17605))，此前该问题导致高内存系统性能下降。  
- **GPU 利用率**：引擎更新后，部分 Windows 用户报告仅执行 CPU 模式，直到触发“修复安装”操作 — 与捆绑应用包中缺失 CUDA 运行时 DLL 有关 ([PR #17675](https://github.com/unslothai/unsloth/pull/17675))。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 修复 PR |
|---------|------|--------|--------|
| ⚠️ 高 | v0.1.917-beta 中强制 mmap 导致即使使用 `--load-mode none` 仍过度占用内存/SSD | 打开 | [PR #17605](https://github.com/unslothai/unsloth/issues/17605) |
| ⚠️ 高 | 微调后上传至 HF 时 `config.json` 丢失 | 已关闭 | [Issue #368](https://github.com/unslothai/unsloth/issues/368) |
| ⚠️ 中 | 在慢速网络下“显示发布说明”按钮失效 | 打开 | [PR #17670](https://github.com/unslothai/unsloth/pull/17670) |
| ⚠️ 中 | 合并导出 CSV 时多个聊天记录被合并成一条 | 打开 | [PR #17656](https://github.com/unslothai/unsloth/pull/17656) |
| ⚠️ 低 | 文件选择器在 Web UI 中隐藏 `.md` 导出文件 | 打开 | [PR #17652](https://github.com/unslothai/unsloth/pull/17652) |

> ✅ **注意**：多项回归问题源于近期引擎更新（llama.cpp、whisper.cpp、audio.cpp）—— 特别影响 Docker 与 Windows 部署。

---

### **6. 对应用开发者的意义**  
- **模型服务与微调工作流**：上传微调后的模型至 Hugging Face 时，请确保包含 `config.json` — Unsloth 当前在加载阶段强制执行严格模式校验。建议使用 `unsloth save_model` 工具验证元数据完整性。  
- **Docker 部署**：若因跨设备链接问题导致 `audio.cpp` 更新失败，请避免使用 `podman` 或 `docker` 绑定挂载 `/opt` 目录 — 可应用 [PR #17647](https://github.com/unslothai/unsloth/pull/17647) 补丁，或重新设计卷结构。  
- **跨平台可靠性**：对于使用 MI300X 的 HIP/ROCm 用户，预计在 INT8 内核落地前性能下降或崩溃 — 请关注 [PR #17718](https://github.com/unslothai/unsloth/pull/17718) 获取早期访问。  
- **UI 自动化与集成**：若基于 Unsloth Studio 构建智能体，可利用新的 `UNSLOTH_STUDIO_SSL_*` 环境变量实现安全 HTTPS 部署，无需额外命令行参数 — 非常适合 CI/CD 流水线场景。

> 📌 **实用提示**：对于生产推理栈，建议在 mmap 回归问题修复前避免使用 v0.1.917-beta；推荐使用 v0.1.916 或更早版本以保证内存使用稳定。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*