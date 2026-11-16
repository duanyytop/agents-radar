# AI 基础设施日报 2026-11-16

> 生成时间: 2026-11-16 02:22 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-11-16**

---

### **1. 生态概览**  
2026年末的AI基础设施格局呈现出**高性能推理引擎**、**多模态智能体平台**与**分布式训练加速器**之间的显著分化。vLLM和SGLang等项目通过推测解码、先进的KV缓存管理以及统一内存系统，持续推动推理效率的边界，目标是大规模大模型智能体的应用。与此同时，llama.cpp和Ollama在本地化、低延迟部署领域继续保持主导地位，并逐步支持TTS、多模态模型及跨后端可移植性。Unsloth正成为微调与分布式训练领域的关键参与者，尤其在MoE和视觉-语言模型方面表现突出。模块化、可组合的架构趋势日益明显：LiteLLM作为代理层实现多厂商间的互操作性，而工具使用与推理流水线也逐渐成为核心关注点。

---

### **2. 活跃度对比**

| 项目        | 开放问题数 | 最近24小时合并的PR | 发布版本 | 破坏性变更 |
|----------------|-------------|--------------------------|----------|------------------|
| **vLLM**       | 387         | 12                       | 无       | 无             |
| **SGLang**     | 521         | 9                        | 无       | 是（v1.0路线图） |
| **llama.cpp**  | 489         | 8                        | 无       | 已回滚（Jinja） |
| **Ollama**     | 342         | 6                        | 无       | 无             |
| **LiteLLM**    | 612         | 10                       | `dev.4`  | 是（签名机制）    |
| **Unsloth**    | 314         | 7                        | 无       | 是（API别名） |

> ✅ *洞察*：LiteLLM和SGLang在活跃度上展现出更高的信号噪声比，反映出其已进入成熟开发周期，聚焦于稳定性与API完善。vLLM在PR数量上领先，表明其仍处于积极优化阶段。

---

### **3. 模型支持竞赛**

| 新模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------------|------|--------|-----------|--------|---------|---------|
| **Raon-1-mini-preview (28.8B)** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Zonos3-mini (TTS)** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Higgs v3 STT / VibeVoice-ASR** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Inkling 1 (text/vision/audio)** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **YuE2-3B (多模态)** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Mistral-Large-4 (MoE, 1M上下文)** | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **DeepSeek-V4.1-Flash (MI300X)** | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **Qwen3.8-Flash-Next (GGUF)** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |

> 🏆 **胜者**：**llama.cpp** 在**多模态与TTS模型集成**方面领先，得益于其`mtmd`流水线实现快速采纳。**SGLang** 在**前沿的MoE与长上下文支持**（如Mistral-Large-4、YaRN支持至100万token）方面占优。**Unsloth** 在**微调模型训练**方面占据主导地位，凭借Qwen3.8-Flash-Next与GatedDeltaNet优化。

---

### **4. 性能前沿**

| 关注领域                | vLLM                          | SGLang                        | llama.cpp                     | Ollama                      | LiteLLM                    | Unsloth                     |
|----------------------------|-------------------------------|-------------------------------|-------------------------------|-----------------------------|----------------------------|-----------------------------|
| **KV缓存效率**    | ✅ 高（前缀缓存、验证传输） | ⚠️ 中等（调度逻辑仍在优化） | ❌ 有限（仅修复Flash Attention） | ⚠️ 上下文偏移错误已修复 | ⚠️ 语义缓存问题 | ❌ 未优先处理 |
| **推测解码**   | ✅ 核心重点（前瞻哈希） | ⚠️ 回退（SM90解码延迟） | ⚠️ HIP/AMD性能下降 | ❌ 工具调用损坏 | ⚠️ 流式TTFT超时 | ✅ 块编译 |
| **批处理与并发** | ✅ 高级（V1调度器、预填充限制） | ✅ 统一内存、DFlash图 | ⚠️ 每批缓冲区增长 | ✅ GPU拆分修复 | ⚠️ 会话粘滞失效 | ✅ 打包SFT批处理 |
| **量化与卸载** | ✅ ROCm/XPU/MoE融合 | ✅ KT CPU卸载（实验性） | ✅ WebGPU/OpenCL内核 | ✅ MMProj预留配置 | ✅ ECB汇率 | ✅ FSDP2 + 冻结教师卸载 |
| **分布式服务**    | ✅ MooncakeConnector调试工具 | ✅ Ascend A3, MI355X DP注意力 | ❌ 无分布式支持 | ❌ 无多GPU协调 | ✅ 代理路由（Anthropic/MCP） | ✅ 张量并行（TP修复） |

> 🔍 **关键洞察**：**vLLM** 仍是**生产级推理优化**的领导者，尤其适用于高吞吐、长上下文工作负载。**Unsloth** 在**训练可扩展性与分布式执行**方面表现出色，而 **LiteLLM** 则专注于**代理层的韧性与负载下的成本监控**。

---

### **5. 层位定位**

| 项目        | 主要层级                     | 角色摘要 |
|----------------|------------------------------------|--------------|
| **vLLM**       | **推理引擎**               | 高效、低延迟的服务能力，具备先进调度与内核优化，面向云规模推理。 |
| **SGLang**     | **推理引擎 + 智能体框架** | 结合引擎功能与智能体编排（如工具使用、规划），定位下一代智能体工作流。 |
| **llama.cpp**  | **本地运行时 / 嵌入式引擎** | 轻量级、跨平台推理运行时，对GGUF、TTS、多模态模型支持良好——适合边缘与桌面端。 |
| **Ollama**     | **模型网关 + 本地CLI**      | 面向开发者的本地模型部署网关，工具使用与多模态能力不断增强，连接本地推理与智能体应用。 |
| **LiteLLM**    | **API网关 / 代理层**      | 支持多提供商路由、语义缓存与成本监控——对生产级代理栈与智能体编排至关重要。 |
| **Unsloth**    | **微调与训练框架** | 专注于高效、可扩展的训练（尤其MoE、视觉模型），结合张量并行与块编译。 |

> 🧩 **战略视角**：当前堆栈已形成**分层且可组合**的结构：  
> - **训练**：Unsloth → **微调**  
> - **服务**：vLLM/SGLang → **部署**  
> - **代理/网关**：LiteLLM/Ollama → **路由与监控**  
> - **本地运行**：llama.cpp → **本地执行**  

---

### **6. 趋势信号**

#### **从今日活跃度中浮现的新兴趋势**
1. **以智能体为中心的优化**：  
   - `qwen3.5`/`qwen3-coder`等工具已成为稳定性测试的核心——表明**工具使用与推理保真度**不再只是边缘需求，而是核心可靠性要求。  
   - LiteLLM的`thinking_delta`流式漏洞与Ollama的工具调用损坏凸显了跨厂商间**流式协议对齐**的重要性。

2. **硬件多样性驱动创新**：  
   - AMD ROCm（MI300X、MI355X）、Intel Arc（Vulkan/SYCL）以及Ascend NPU正迎来针对性优化——表明**厂商无关的推理**已超越NVIDIA，步入成熟阶段。  
   - SGLang的KT CPU卸载实验支持与llama.cpp的SYCL构建，反映出对**异构、非NVIDIA计算**的兴趣持续上升。

3. **安全与可观测性优先**：  
   - vLLM的SSRF修复、LiteLLM基于OIDC的发布签名、MooncakeConnector调试工具，反映了向**默认安全部署**和**分布式推理可观测性**的转变。

4. **量化与内存管理仍是痛点**：  
   - JIT编译（vLLM）、GPU拆分（Ollama）、VRAM误报（Unsloth/SYCL）等问题持续存在，揭示**内存可预测性**仍是真实部署中的瓶颈。

#### **开发者应密切关注事项**
- **避免在Hopper GPU上使用SGLang v0.5.23** —— 回退至v0.5.22或应用补丁。
- **在v0.40.16+之前不要通过Ollama流式传输`qwen3.5`/`qwen3-coder`模型** —— 存在遗漏工具参数的风险。
- **更新LiteLLM的验证流程** —— 旧版`cosign verify --key`将因无密钥OIDC签名而失败。
- **监控AMD/Intel后端回归** —— 尤其关注llama.cpp与Unsloth中HIP、Vulkan与SYCL后端的表现。
- **规划动态配置切换** —— Unsloth的模型别名支持无需重新部署即可实现自适应推理配置。

> ✅ **最终结论**：生态系统正从“我们能否运行它？”转向“我们能否在规模化下信任它？”——可靠性、安全性与可观测性如今与原始速度同等重要。请根据**你的部署层级**与**应用安全需求**选择合适的堆栈。  

---  
*数据来源：GitHub活动记录（2026-11-16） | 目标读者：基础设施工程师、CTO、机器学习平台架构师*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

### **vLLM Digest — 2026-11-16**

#### **1. 今日亮点**  
vLLM 项目持续深化对 AMD ROCm 和多模态推理的支持，关键 PR 在 KV 缓存管理、推测解码以及跨平台稳定性方面取得进展。值得注意的是，一项重大重构已移除遗留的 EAGLE 块丢弃机制，转而采用前瞻哈希（lookahead hashes），同时新增的 MooncakeConnector 调试功能显著提升了分布式部署下的可靠性。

#### **2. 发布与破坏性变更**  
无。过去 24 小时内未发布新版本或破坏性变更。

#### **3. 新模型与硬件支持**  
- ✅ **ROCm 支持**：为 `DeepSeek-V4.1-Flash` 添加 MI300X AgentX 预设 ([PR #67586](https://github.com/vllm-project/vllm/pull/67586))，并持续优化 gfx950 / MI355X 平台 ([Issue #57149](https://github.com/vllm-project/vllm/issues/57149))。  
- ✅ **新模型**：通过 DFlash 规范解码修复，新增对 `Raon-1-mini-preview`（28.8B）的支持 ([PR #64672](https://github.com/vllm-project/vllm/pull/64672))。  
- ✅ **Intel GPU (XPU)**：正在进行 Qwen3.5 模型向急切执行模式迁移，并融合 MoE 解码路径的工作 ([PR #64687](https://github.com/vllm-project/vllm/pull/64687))，同时修复了 LoRA 工作流的 CI 测试问题 ([PR #67824](https://github.com/vllm-project/vllm/pull/67824))。  
- 🔐 **安全修复**：通过限制对私有/链路本地 IP 的访问，阻止了媒体连接器中的 SSRF 漏洞 ([PR #67826](https://github.com/vllm-project/vllm/pull/67826))。

#### **4. 性能与优化**  
- 🚀 **KV 缓存效率**：PR #66234 与 #67825 优化了前缀缓存并减少冗余传输，通过验证传输调试模式 ([PR #66566](https://github.com/vllm-project/vllm/pull/66566)) 和改进调度器准入逻辑 ([PR #66725](https://github.com/vllm-project/vllm/pull/66725)) 实现。  
- ⚡ **推测解码**：重构默认启用前瞻哈希，提升缓存复用率并减少不必要的块丢弃 ([PR #66234](https://github.com/vllm-project/vllm/pull/66234))。  
- 💾 **内存优化**：解决生产负载下静默的 JIT 内核编译问题 ([Issue #64824](https://github.com/vllm-project/vllm/issues/64824))，并修复 ModelOpt NVFP4 检查点中过度占用 CPU RAM 的问题 ([Issue #46268](https://github.com/vllm-project/vllm/issues/46268))。  
- 📈 **长前缀工作负载**：正在调查 2× GB10 系统上长前缀解码饥饿问题 ([Issue #62574](https://github.com/vllm-project/vllm/issues/62574))，以及 V1 调度器中并发部分预填充限制问题 ([Issue #57413](https://github.com/vllm-project/vllm/issues/57413))。

#### **5. 稳定性与回归问题**  
- 🔥 **严重崩溃**：  
  - `Qwen2.5-0.5B` 在预热阶段因 CUDA 非法内存访问而崩溃 ([Issue #66244](https://github.com/vllm-project/vllm/issues/66244)) —— 目前尚无修复方案。  
  - `Kimi-K3` 因长上下文预填充后出现 NaN logits，导致解码退化为重复标记 ([Issue #51039](https://github.com/vllm-project/vllm/issues/51039)) —— 正在积极排查。  
- 🛠 **回归修复进行中**：  
  - `GLM-5.3-Flash` 工具解析器会静默丢弃未知函数调用 ([Issue #67684](https://github.com/vllm-project/vllm/issues/67684))。  
  - `DelegatingParser.parse()` 忽略 `model_output_token_ids`，导致非流式模式下解析错误 ([Issue #64326](https://github.com/vllm-project/vllm/issues/64326))。  
- ❌ **CI 失败**：与量化和 ModelOpt 检查点相关的 NVIDIA 夜间构建持续失败 ([Issue #67307](https://github.com/vllm-project/vllm/issues/67307), [Issue #67664](https://github.com/vllm-project/vllm/issues/67664))。

#### **6. 对应用开发者的启示**  
面向高吞吐、长上下文代理服务的应用开发者应关注 `Kimi-K3` 与 `GLM-5.3-Flash` 的稳定性问题，特别是标记重复与工具解析异常。在 AMD 硬件上部署生产环境时，请确保使用最新版 ROCm 配置（如 MI355X/gfx950）。新的 MooncakeConnector 调试工具可显著提升分布式推理栈的可观测性。若使用推测解码或 MoE 模型，预计将在 KV 缓存效率方面持续优化，并减少由 JIT 编译带来的运行时意外。最后，请避免使用不受信任的媒体链接，直至 SSRF 补丁正式上线。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# **SGLang 消息简报 – 2026-11-16**

---

### **1. 今日重点**  
SGLang 项目正持续推进稳定性与性能优化，为即将到来的 **SGLang 1.0 发布版** 做准备，重点包括统一内存、推测解码优化以及稳健的 CI/CD 跟踪机制。针对 Hopper（SM90）解码性能的关键回归问题已通过针对性 PR 定位并修复，同时新增对 Mistral-Large-4 的支持及增强的 NPU 工作流，进一步强化了跨平台能力。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未发布新版本。然而，**SGLang 1.0** 已在 [#50045](https://github.com/sgl-project/sglang/issues/50045) 中正式追踪，标志着向 API 稳定性和破坏性变更透明化迈进。从 `0.5.x` 升级可能需要调整配置，因设置校验已变得更加严格。

---

### **3. 新模型与硬件支持**  
- **Mistral-Large-4** (`mistralai/Mistral-Large-4-1T-A52B`) 通过 [PR #47271](https://github.com/sgl-project/sglang/pull/47271) 加入，支持 MoE、跨层 KV 共享及 YaRN 最高达 100 万 token。
- **Ascend A3** 部署场景扩展至 **DeepSeek-v3.2** ([PR #49167](https://github.com/sgl-project/sglang/pull/49167)) 和 **GLM-5.1** ([PR #45655](https://github.com/sgl-project/sglang/pull/45655))。
- 实验性 **KT CPU 专家卸载** 功能在 Ascend NPU 上引入，支持 TP=2 可选开启 ([PR #50675](https://github.com/sgl-project/sglang/pull/50675))。
- **AMD MI355X DP 注意力配方** 扩展至并发度 128/256 ([PR #50677](https://github.com/sgl-project/sglang/pull/50677))。

---

### **4. 性能与优化**  
- **Hopper (SM90) 解码性能回归**：v0.5.23 在并发度 12 下相比 v0.5.22 出现 **每步解码延迟增加 33–45%** ([Issue #49336](https://github.com/sgl-project/sglang/issues/49336))。通过禁用 DeepSelect 解码路径并回退至 top-k v2 修复，相关变更见 [PR #49978](https://github.com/sgl-project/sglang/pull/49978)。
- **DFlash 辅助 CUDA Graphs**：因每批次缓冲区保留导致的内存增长问题，通过 [PR #50577](https://github.com/sgl-project/sglang/pull/50577) 引入共享缓冲池机制得以缓解。
- **Mega-MoE 优化**：通过 [PR #50608](https://github.com/sgl-project/sglang/pull/50608) 在 SM 10.0/10.3 上启用 DeepGEMM 权重本地化。
- **Anima diffusion**：请求尺寸对齐至 16 像素网格，修复了 HTTP 500 错误 ([PR #50599](https://github.com/sgl-project/sglang/pull/50599))。

---

### **5. 稳定性与回归问题**  
- **严重崩溃**：`CUDA coredump` 跟踪器 ([Issue #26340](https://github.com/sgl-project/sglang/issues/26340)) 当前已有 **368 条评论** —— 表明在 CI 测试中存在广泛不稳定性；根本原因正在调查中。
- **推测解码失败**：`glm5` + EAGLE 在 FlashInfer TRTLLM BF16 GEMM 中因非法内存访问而崩溃 ([Issue #30209](https://github.com/sgl-project/sglang/issues/30209))，已在 B200/B300 上确认。
- **健康检查失败**：`glm5` 在 H100 上运行 20 秒后健康检查失败（无 detokenizer 响应）—— 已关闭但尚未解决 ([Issue #22511](https://github.com/sgl-project/sglang/issues/22511))。
- **分词器挂起**：冷启动的 `TokenizerWorker` 在暂停/恢复时可能因接收循环未初始化而挂起 ([Issue #39689](https://github.com/sgl-project/sglang/issues/39689))。

> ✅ *修复进行中*：[PR #49978](https://github.com/sgl-project/sglang/pull/49978) 解决 SM90 回归问题；其余仍开放。

---

### **6. 对应用开发者的意义**  
- **预期破坏性变更**：随着 SGLang 1.0 接近，将面临更严格的配置校验和潜在弃用——请尽早审计配置文件。
- **避免在 Hopper (SM90) 上使用 v0.5.23**：若使用推测解码或高并发推理，请回退至 v0.5.22，或应用 [PR #49978](https://github.com/sgl-project/sglang/pull/49978) 作为临时解决方案。
- **利用统一内存**：正在进行的 [统一内存路线图](https://github.com/sgl-project/sglang/issues/49944) 支持动态状态管理——特别适合变长或长上下文任务。
- **谨慎使用实验性 NPU 功能**：KT CPU 卸载与 A3 部署均标记为实验性——生产环境使用前务必在负载下验证行为。
- **监控 CI 健康状态**：使用 [CI 测试失败跟踪器](https://github.com/sgl-project/sglang/issues/17050) 关注测试可靠性及影响构建的基础设施问题。

---  
*简报基于 2026-11-16 的 GitHub 活动整理 | 来源: [sgl-project/sglang](https://github.com/sgl-project/sglang)*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 消息简报 – 2026-11-16**

---

### **1. 今日亮点**  
最新开发周期聚焦于扩展 TTS 与多模态模型支持，`mtmd`（多模态）管道的关键更新带来了对 *Zonos3-mini*、*Higgs v3 STT*、*VibeVoice-ASR* 以及 *YuE2-3B* 等新模型的支持。关键修复已合并：Jinja 模板解析支持 `//` 整除运算和 `sort_keys=true`，同时解决了长期存在的 Flash Attention 问题——该问题在特定条件下会导致 GPU 崩溃。

---

### **2. 发布与破坏性变更**  
今日未发布新版本。但有两项与 Jinja 模板相关的 PR 被合并后又因不稳定性被回滚：
- [PR #32352](https://github.com/ggml-org/llama.cpp/pull/32352)：为 Kokoro TTS 添加了 4 个缺失的 Jinja 功能（如 `//` 整除）——**已回滚**（[PR #32335](https://github.com/ggml-org/llama.cpp/pull/32335)）。  
- 回滚操作凸显了当前对生产级 TTS 管道中高级模板功能稳定性的持续优化工作。

---

### **3. 新模型与硬件支持**  
- **TTS 模型**：新增支持：
  - 通过 `mtmd` 支持 *Higgs v3 STT* 与 *VibeVoice-ASR*（#32329）。
  - *Zonos3-mini* TTS 支持语音克隆、交付参数及文本归一化（#32020）。
- **多模态模型**：
  - 通过 `llama_model_init_from_user` 集成，新增对 *Inkling 1*（文本、视觉、音频）的支持（#32354）。
  - 将 *YuE2-3B* 作为全功能 mmproj 模型加入支持（#32369）。
- **硬件后端**：
  - WebGPU 现已支持 `POOL_2D` 操作，并兼容连续的 F32 输入（#32250）。
  - OpenCL 新增 `FLASH_ATTN_EXT GMEM` 内核，用于优化 FastWan 工作流（#32302）。

---

### **4. 性能与优化**  
- **Flash Attention 修复**：已解决 SYCL 后端中的严重缺陷：错误的 mask 广播导致头/批次维度异常，引发 GPU 设备丢失或输出 NaN。修复提交于 [#31536](https://github.com/ggml-org/llama.cpp/pull/31536)，并新增单元测试。
- **内核优化**：
  - SpacemiT RVV 内核已修复空 mask 处理及 A100 核心上 VLEN=1024 时的 ALiBi/softcap 问题（#32182）。
  - 优化了卸载调度逻辑，避免权重为 1 维时不必要的 CPU-GPU 数据传输（#32368）。
- **推测解码**：CI 现可在相关 PR 合并后自动触发 spec-dec 测试（#32281），显著提升稳定性追踪能力。

---

### **5. 稳定性与回归问题**  
今日报告的严重稳定性问题包括：
- **Vulkan**：Intel Arc A380 上 GLM-OCR 视觉编码器对全页图像产生垃圾输出 —— 在 `b12169` 版本中已确认（#31836）。
- **HIP**：Qwen3.8-27B GGUF 使用 `--spec-type draft-mtp` 时预填充吞吐量下降约 80% —— 此问题在 Vulkan 中未复现（#31495）。
- **Metal**：macOS M5 Max 在使用默认 `n_ctx` 运行 Gemma 4 31B 时发生内存溢出（OOM）与计算错误（-3）（#29521）。
- **SYCL**：`--split-mode tensor` 在量化 KV 缓存下出现挂起，且性能比单卡慢 3 倍（#26409）。
- **CUDA**：自 `b10423` 引入的高 CPU 占用问题，持续存在于近期构建版本中（#29858）。

> ✅ **修复进行中**：多个 PR 正在处理根本原因（如 `mtmd` 内存管理、Flash Attention 边界情况）。目前尚未提供针对 HIP 性能下降问题的补丁。

---

### **6. 对应用开发者的影响**  
- **TTS/智能体构建者**：现在可通过 `mtmd` 直接将 *Zonos3-mini*、*Higgs v3* 与 *YuE2-3B* 集成至应用中，无需外部编排。使用 `--voice-clone` 与 `--delivery-params` 实现精细控制。
- **模板引擎用户**：Jinja 改进支持更复杂的文本生成（如数字格式化），但请避免使用未合并版本，直至稳定性确认。
- **部署团队**：预计在 AMD（RADV）、Intel Arc（Vulkan/SYCL）及 HIP 后端可能出现回归问题——尤其在使用推测解码（`draft-mtp`、`dflash`）时。如需，可使用 `--no-speculative` 进行测试。
- **量化与内存**：在 Apple Silicon 平台上使用大 `n_ctx` 值需谨慎；建议降低上下文长度或启用 `--cache-prompt` 以规避内存溢出风险。

> 🔗 [GitHub 问题](https://github.com/ggml-org/llama.cpp/issues) | [PR 列表](https://github.com/ggml-org/llama.cpp/pulls) | [官网](https://llama.app)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-16**

---

### **1. 今日亮点**  
Ollama 项目持续强化其多模态与工具使用能力，修复了 `qwen3.5`/`qwen3-coder` 解析器中的关键缺陷，该缺陷曾导致流式传输过程中工具调用参数被损坏或丢失。一项新 PR 引入了可配置的 `mmproj` 头部预留空间（问题 #19407），解决了多模态模型中的内存限制问题。此外，针对显存统计与 GPU 分割的重大修复（#19632）已落地，解决了多 GPU 环境下的模型驱逐与错误分配问题。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新版本发布。*  
然而，**API 文档已更新**，在 API 参考中加入了 `logprobs` 与 `top_logprobs` 参数（[PR #19710](https://github.com/ollama/ollama/pull/19710)），提升了开发者使用高级推理功能时的清晰度。今日未报告任何破坏性变更。

---

### **3. 新模型与硬件支持**  
- **重排序模型**：用户强烈需求（问题 #3368）支持 BAAI/bge-reranker-large 与 mixedbread-ai/mxbai-rerank-large-v1 — 当前尚未支持，但正在积极讨论中。  
- **MLX-C + XGrammar 集成**：PR #19688 实现了 MLX-C 与 XGrammar 二进制文件的独立打包与链接，提升与 Homebrew 等包管理器的兼容性，并为 Apple Silicon 平台未来的优化铺路。  
- **Talos 与 Kunji 集成上线**：通过 PR #18093 与 #19709 宣布新增 `ollama launch` 集成，进一步拓展本地 AI 工作流的生态系统覆盖范围。

---

### **4. 性能与优化**  
- **显存统计与 GPU 分割**：PR #19632 修复了多个底层问题（#19463、#18679、#18349、#16599），这些问题曾导致模型加载错误、提前驱逐及 GPU 利用率低下。显著提升了多 GPU 系统上的性能与稳定性。  
- **上下文偏移中立性**：PR #19680 修复了一个漏洞，即 `--context-shift` 会重复乘以 RoPE 幅值因子，可能损害长上下文准确性。修复了 #19457。  
- **编译时优化**：因 `llama-mmap.h` 中缺失 `<cstdint>` 导致 GCC 15 编译失败的问题，已在 PR #19714 中解决，确保与新版编译器的跨平台兼容性。

---

### **5. 稳定性与回归问题**  
- **严重工具调用数据损坏（高危）**：多个问题（#19694、#19711、#19650）影响 `qwen3.5`、`qwen3-coder` 与 `mimo-v2.6:9b` 模型，导致工具调用参数丢失或返回 `{}`。已由 PR #19705 修复，该修复确保流式工具调用中保留原始文本。  
- **Windows 图像处理失败**：问题 #16532 报告 `gemma4` 在 Windows 上无法处理图像——可能与后端驱动或路径处理有关；暂无修复方案。  
- **套接字绑定冲突**：两个重复报告（#3575、#19712）指出端口 11434 已被占用。虽常见，但仍提示启动可靠性潜在问题。  
- **协程泄漏**：问题 #17131 确认流式处理器在客户端断开连接时会泄漏协程与运行器信号量槽位——需架构级修复。

---

### **6. 对应用开发者的启示**  
- **使用工具调用的应用必须避免使用 `qwen3.5`/`qwen3-coder` 直至 v0.40.16+ 版本** —— 当前版本在流式传输中存在丢失或破坏函数参数的风险。可临时采用 PR #19705 的变通方案，或等待补丁发布。  
- **多模态应用应监控 `mmproj` 内存使用情况** —— 固定头部预留空间现已可配置（PR #19407），有助于在资源受限设备上更好地控制大型视觉模型。  
- **安全使用 `logprobs` 与 `top_logprobs`** —— 现已在 API 参考中正确文档化（PR #19710），支持构建概率推理流水线。  
- **在 PR #19680 合并前，避免对高幅值 RoPE 模型使用 `--context-shift`** —— 否则上下文质量可能随时间退化。  
- **启动 Ollama 前请确保无其他服务占用端口 11434**，尤其是在 CI/CD 环境或共享开发机中。

> ✅ *建议*：关注 [PR #19632](https://github.com/ollama/ollama/pull/19632) 与 [PR #19705](https://github.com/ollama/ollama/pull/19705)，它们将带来影响核心功能的稳定补丁。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

### **LiteLLM Digest — 2026-11-16**

#### **1. 今日亮点**
最新开发版本 `v1.111.0-dev.4` 引入了发布签名机制的关键变更：**基于 GitHub OIDC 的无密签发（keyless cosign）** 取代了旧有的 `cosign.pub` 密钥。此更改影响验证流程，需更新 CLI 命令以进行有效性校验。同时，多个关于流式处理行为、缓存正确性及预算计费的高严重性问题已被报告，尤其影响 Anthropic `/v1/messages`、语义缓存和成本追踪功能——表明生产代理环境正经历高强度压力测试。

#### **2. 版本与破坏性变更**
- **`v1.111.0-dev.4`（最新）**：  
  🔥 **破坏性变更**：发布签名现采用 **Sigstore 无密签发 + GitHub OIDC**，`cosign verify --key ...` 已不再适用。请改用 `cosign verify --signature <sig> --certificate-oidc <cert>`。  
  📌 [发布说明](https://github.com/BerriAI/litellm/releases/tag/v1.111.0-dev.4) | [验证指南](https://docs.sigstore.dev/keyless/)  
- **`v1.111.0-dev.3`**：部分发布；**请勿使用** —— 请升级至 `dev.4`。

#### **3. 新模型与硬件支持**
今日未新增模型或硬件后端。但：
- **Anthropic MCP 工具调用** 现已通过 PR [#50977](https://github.com/BerriAI/litellm/pull/50977) 正确体现在 `/chat/completions` 响应中。
- **DeepSeek Fetch 工具** 支持已在 PR [#50618](https://github.com/BerriAI/litellm/pull/50618) 合并，支持原生代理路由以获取外部数据。
- **Qoder Cloud Agents** 集成已通过 PR [#50041](https://github.com/BerriAI/litellm/pull/50041) 上线，扩展了通过代理部署智能体的选项。

#### **4. 性能与优化**
- **流式 TTFT 超时控制**：PR [#51974](https://github.com/BerriAI/litellm/pull/51974) 新增 `stream_ttft_timeout`，防止上游无法发出首个 token 时请求挂起——对降级容错至关重要。
- **缓存键效率优化**：问题 [#51935](https://github.com/BerriAI/litellm/issues/51935) 指出，大尺寸 base64 数据（如图像）在缓存键计算中引发 O(n²) 字符串化性能瓶颈，修复待定。
- **成本追踪增强**：PR [#51934](https://github.com/BerriAI/litellm/pull/51934) 支持自动获取 ECB 汇率以实现自定义货币定价，减少手动配置负担。

#### **5. 稳定性与回归问题**
| 严重程度 | 问题 | 描述 | 修复状态 |
|--------|------|-------------|-----------|
| ⚠️ 高 | [#32357](https://github.com/BerriAI/litellm/issues/32357) | 推理模型的 `thinking_delta` 流式输出被错误编码为 `text` 块 → Claude SDK 中内容为空 | ✅ PR #50977（修复进行中） |
| ⚠️ 高 | [#51900](https://github.com/BerriAI/litellm/issues/51900) | 语义缓存因高余弦相似度（0.9749）返回跨请求的工具调用参数 | ❌ 尚无修复 |
| ⚠️ 高 | [#51954](https://github.com/BerriAI/litellm/issues/51954) | Anthropic 拒绝由 Bedrock 拆分的拼接 JSON 工具参数 | ❌ 尚无修复 |
| ⚠️ 中 | [#48401](https://github.com/BerriAI/litellm/issues/48401) | OpenRouter 在流式传输中丢弃纯 `reasoning_details` 块（如仅含签名） | ❌ 尚无修复 |
| ⚠️ 中 | [#50029](https://github.com/BerriAI/litellm/issues/50029) | 会话粘性失效 —— 路由器将请求发送至不同端点 | ❌ 尚无修复 |
| ⚠️ 低 | [#51452](https://github.com/BerriAI/litellm/issues/51452) | 启动时无上下文导致 `ModelNotMappedError` | ❌ 尚无修复 |

#### **6. 对应用开发者的影响**
- **更新您的验证流水线**：若依赖 `cosign verify --key`，请立即迁移到基于 GitHub OIDC 的无密验证。旧方法将失效。
- **谨慎使用推理模型**：如 GLM / DeepSeek-R1 等模型的流式输出可能在 Anthropic 兼容客户端中出现异常，除非使用更新后的代理版本。请留意空内容问题。
- **避免对参数化工具启用语义缓存**：在 [#51900](https://github.com/BerriAI/litellm/issues/51900) 修复前，若应用使用动态 `tool_calls`，请禁用 `redis-semantic` 缓存。
- **启用 `stream_ttft_timeout`**：在部署中添加该参数，防止上游推理缓慢导致客户端超时——对构建健壮的降级链至关重要。
- **监控成本/预算逻辑**：多个预算重置问题（`#36941`, `#40940`）提示在高负载下可能存在支出不准确情况——请仔细验证您的计费配置。

> 💡 **实用技巧**：仅在开发环境启用 `--detailed_debug` —— 它会暴露原始请求体，可能导致日志膨胀与隐私风险。结合 `turn_off_message_logging` 与 PR [#50622](https://github.com/BerriAI/litellm/pull/50622) 可在日志中脱敏敏感内容。

---  
*数据来源：GitHub: [BerriAI/litellm](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

### **Unsloth Digest — 2026-11-16**

---

#### **1. 今日亮点**  
Unsloth 团队持续加速分布式训练与模型服务基础设施，针对张量并行、块编译及多 GPU 兼容性等关键问题推出修复。主要贡献包括解决在 TP 环境下 `DPOTrainer` 因 DTensor/LoRA 分片不匹配导致的崩溃问题，以及通过减少运行中重新编译延迟，提升视觉模型训练稳定性。此外，新增支持 API 级别配置别名，使用户无需重新部署即可在不同模型启动配置（如上下文长度、KV 缓存）间灵活切换。

---

#### **2. 发布与破坏性变更**  
*过去 24 小时内未发布新版本。*  
但 **PR #17885** 引入了重要行为变更：Studio 现可通过兼容 OpenAI 的 API 选择不同的 GGUF 启动配置（通过模型别名）——解决了 [Issue #17820](https://github.com/unslothai/unsloth/issues/17820)。该功能使同一模型文件可动态切换高上下文与低延迟模式，显著提升生产推理负载下的灵活性。

---

#### **3. 新模型与硬件支持**  
- **Qwen3.8-Flash-Next**：持续优化，已支持压缩 SFT 并修复 [PR #17827](https://github.com/unslothai/unsloth/pull/17827) 中的卸载层处理问题。  
- **GatedDeltaNet (fla >= 0.6)**：使用新版 `fla` 库的所有模型现已启用 GDN 操作修复 ([PR #17827](https://github.com/unslothai/unsloth/pull/17827))。  
- **多 GPU 系统（NVIDIA + Intel Arc）**：修复 [Issue #17787](https://github.com/unslothai/unsloth/issues/17787) 中的显存误报问题，此前 SYCL 构建错误调用 `nvidia-smi` 查询显存。  
- **AMD ROCm (gfx1151)**：修复 GDN 因果卷积 1d 在降级至 MIOpen 而非 Triton 内核的问题 ([PR #17734](https://github.com/unslothai/unsloth/issues/17734))。

---

#### **4. 性能与优化**  
- **块编译**：  
  - 压缩且无填充的行现在可在图中保持编译状态，消除未编译前向计算丢包问题 ([PR #17883](https://github.com/unslothai/unsloth/pull/17883))。  
  - 视觉训练中运行时重新编译延迟从 40–140 秒降至接近零，通过确保微批次图一致性实现 ([PR #17880](https://github.com/unslothai/unsloth/pull/17880))。  
- **训练效率**：  
  - **SFT** 现在在基于周期的运行中默认对文本数据集进行打包 ([PR #17884](https://github.com/unslothai/unsloth/pull/17884))，显著提升大规模微调任务的吞吐量。  
  - **DeepSeek-V4.1** 编译训练不再因 `allow_unspec_...` 保护机制缺陷导致 Inductor 卡死 ([PR #17881](https://github.com/unslothai/unsloth/pull/17881))。  
- **内存占用**：  
  - `FSDP2` 现在在生成运行前初始化根单元，防止损失计算期间崩溃 ([PR #17875](https://github.com/unslothai/unsloth/pull/17875))。  
  - GKD 现在将冻结教师模型保留在非训练 GPU 上，避免双 T4 配置下的内存竞争 ([PR #17876](https://github.com/unslothai/unsloth/pull/17876))。

---

#### **5. 稳定性与回归问题**  
| 问题 | 严重性 | 状态 | 修复 PR | 备注 |
|------|----------|--------|--------|-------|
| [Issue #17874](https://github.com/unslothai/unsloth/issues/17874) – AMD GPU 未被识别（RX 6700s） | 高 | 开放 | ❌ | 无已知绕行方案；极可能为驱动或 ROCm 检测问题。 |
| [Issue #17402](https://github.com/unslothai/unsloth/issues/17402) – 使用 UD 3.1 GGUF 时草稿接受率下降约 74% | 严重 | 开放 | ❌ | 对 Qwen3.8-Flash-Next 生产环境造成影响；需匹配 MTP 头部。 |
| [Issue #17605](https://github.com/unslothai/unsloth/issues/17605) – `--load-mode none` 被忽略，导致内存/SSD 膨胀 | 高 | 已关闭 | ✅ [PR #17605](https://github.com/unslothai/unsloth/pull/17605) | v0.1.917-beta 版本引入的回归；已修复。 |
| [Issue #14487](https://github.com/unslothai/unsloth/issues/14487) – 持续内存泄漏（每轮 200–400 MB） | 中等 | 开放 | ❌ | 影响桌面应用；可能需要垃圾回收或进程隔离。 |

---

#### **6. 对应用开发者意味着什么**  
- **动态配置切换**：使用 API 模型别名（通过 [PR #17885](https://github.com/unslothai/unsloth/pull/17885)）可无缝切换高上下文与推测解码模式——适用于需自适应上下文管理的智能体工作流。  
- **多 GPU 与异构环境**：在混合 NVIDIA + Intel Arc 系统上使用时，预期可靠性提升，得益于 SYCL 构建中显存报告的修正。  
- **高保真训练流程**：利用更新后的块编译机制与打包数据集默认值，降低训练开销，避免重新编译卡顿——尤其对视觉语言模型至关重要。  
- **规避回归问题**：若使用 AMD GPU 或自定义 `llama.cpp` 构建，请留意检测问题（参见 [Issue #17874](https://github.com/unslothai/unsloth/issues/17874)），建议暂时降级直至稳定驱动发布。  

> 🔗 *上述所有 PR 与问题均已存在于主分支或处于评审中。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*