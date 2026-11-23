# AI 基础设施日报 2026-11-23

> 生成时间: 2026-11-23 03:03 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

### **跨项目AI基础设施生态报告 – 2026-11-23**

---

#### **1. 生态概览**  
截至2026年末，AI推理与服务领域的格局呈现出明显的两极分化：一端是**高性能、内核优化的引擎**（vLLM、SGLang），另一端是**开发者友好的网关抽象层**（LiteLLM、Ollama）。各项目正迅速向多架构支持靠拢——尤其是NVIDIA Blackwell（SM12x）、AMD ROCm/gfx11和Apple Silicon——同时对多模态处理、推测性解码和高效量化愈发重视。与此同时，本地运行时如 llama.cpp 和 Unsloth 持续在GGUF兼容性和边缘部署方面突破边界，而大模型网关则通过标准化API日益抽象出提供商间的多样性。

---

#### **2. 活跃度对比**

| 项目       | 开放问题数（↑） | 合并的PR数（↑） | 发布状态       | 备注 |
|------------|------------------|------------------|----------------|------|
| **vLLM**   | 348 (+5)         | 79 (+12)         | 无新版本发布   | 重点聚焦内核统一（Humming）、稳定性修复 |
| **SGLang** | 412 (+8)         | 64 (+10)         | 无新版本发布；CI暂停 | v1.0 稳定化；GLM/Mamba2 存在严重回归 |
| **llama.cpp** | 521 (+11)      | 47 (+8)          | `b12646`–`b12635`（修复补丁） | 音频与MoE稳定性；Vulkan/RDNA1 回归警告 |
| **Ollama** | 674 (+6)         | 22 (+5)          | 稳定版：0.40.17 | VRAM计数修复；Jetson/Apple Silicon 优化 |
| **LiteLLM** | 487 (+7)        | 41 (+9)          | 无新版本发布   | 原生提供商新增（BlockRun、Architect）；安全补丁待发布 |

> 🔍 *趋势*：vLLM 和 SGLang 在工程迭代速度上领先，而 Ollama 与 LiteLLM 更侧重可靠性而非创新速度。llama.cpp 的问题数量高，源于其广泛的硬件与模型覆盖。

---

#### **3. 模型支持竞赛**

| 新模型 / 架构               | vLLM ✅ | SGLang ✅ | llama.cpp ✅ | Ollama ✅ | LiteLLM ✅ | 胜者 |
|------------------------------|--------|----------|--------------|-----------|------------|------|
| **DeepSeek-V4.1-Flash (B300)** | ✅     | ✅       | ❌           | ❌        | ❌         | **vLLM/SGLang** |
| **Qwen3.8-Flash-Next (ROCm)**  | ✅     | ❌       | ❌           | ❌        | ❌         | **vLLM** |
| **Kimi K2.5 (多模态)**         | ✅     | ❌       | ❌           | ❌        | ❌         | **vLLM** |
| **Inkling 2 DSpark (GGUF)**   | ❌     | ❌       | ✅（实验性）   | ✅（Metal） | ❌         | **llama.cpp/Ollama** |
| **Qwen3.5-122B-A10B (sm_70)** | ⚠️     | ❌       | ✅（崩溃风险） | ❌        | ❌         | **llama.cpp**（但有风险） |
| **Jetson AGX Orin (JetPack 6)** | ❌     | ❌       | ❌           | ✅        | ❌         | **Ollama** |
| **Apple Silicon (Metal)**      | ❌     | ❌       | ❌           | ✅        | ❌         | **Ollama** |

> 🏆 **胜者**：**vLLM** 在前沿模型与GPU架构支持上领先（Blackwell、B300、ROCm），尤其在MoE与FP8模型方面表现突出。**Ollama** 在边缘与设备级部署（Jetson、Apple Silicon）中占据主导地位。

---

#### **4. 性能前沿**

| 优化方向             | vLLM                     | SGLang                   | llama.cpp              | Ollama               | LiteLLM                |
|----------------------|--------------------------|--------------------------|------------------------|----------------------|------------------------|
| **KV缓存效率**       | ✅ DeepSeek-V4-Flash 内存膨胀（56B/token）已报告 | ❌ GLM-5.3-Flash FP8 问题 | ⚠️ MoE缓存重复（×3） | ✅ 修复了VRAM过度分配 | ❌ 无直接关注 |
| **量化内核**         | ✅ **Humming** 默认启用于SM12x（替代Marlin） | ❌ 仍使用Marlin | ❌ GDN-hybrid 回归 | ❌ 支持有限 | ❌ 仅提供方级别 |
| **推测性解码**       | ✅ 通过插件实现草稿LM-head量化 | ❌ 尚未支持 | ❌ 不可用 | ❌ 不支持 | ✅ 通过提供方启用 |
| **分布式服务**       | ✅ 序列并行（Intel XPU） | ✅ 流水线 + 序列并行（Qwen3.5） | ❌ 仅单设备 | ❌ 仅本地 | ✅ 多提供方路由 |
| **内核级融合**       | ✅ DEP2/4/8，Triton优化的MoE | ✅ gfx942，NPU预填充图 | ✅ SYCL/CUDA 投票操作 | ❌ 无底层融合 | ❌ 抽象层仅 |

> 📈 **前沿领导者**：  
> - **vLLM**：内核级优化（Humming、融合MoE、草稿LM-head）  
> - **SGLang**：硬件特定图捕获（AMD/NPU）  
> - **llama.cpp**：低延迟音频与内存安全（WebGPU/Vulkan）

---

#### **5. 层级定位**

| 项目       | 层级定位                         | 主要角色                                  | 核心差异化 |
|------------|----------------------------------|--------------------------------------------|------------|
| **vLLM**   | **服务引擎**                     | 高吞吐、低延迟推理引擎                     | 内核融合、Humming量化、SM12x优化 |
| **SGLang** | **服务引擎**                     | 针对异构硬件优化                           | 预填充CUDA图、NPU/AMD支持、Mamba2 |
| **llama.cpp** | **本地运行时 / 边缘推理**       | CPU/GPU加速的本地执行                      | GGUF灵活性、Vulkan/WebGPU、跨平台 |
| **Ollama** | **本地网关 / CLI运行时**         | 以开发者为中心的本地模型运行器             | 简化用户体验、设备特化调优（Jetson, Metal） |
| **LiteLLM** | **LLM网关 / 编排层**            | 跨提供方的统一API抽象                    | 原生BlockRun/Architect支持、流式保真度 |

> 💡 **战略洞察**：生态正演变为**分层架构**：  
> - **引擎**（vLLM/SGLang）→ **运行时**（llama.cpp）→ **网关**（Ollama/LiteLLM）  
> - 开发者越来越多地**编排多个层级**（如 LiteLLM → vLLM → llama.cpp）以实现最优性能。

---

#### **6. 趋势信号**

| 趋势                          | 消息摘要中的证据                                                                 | 开发者行动 |
|--------------------------------|--------------------------------------------------------------------------------------|------------------|
| **内核统一**                 | vLLM 在 SM12x 上用 **Humming** 取代 Marlin；SGLang 存在 Triton 依赖问题             | 优先采用 Humming 部署；监控内核弃用情况 |
| **边缘与异构化推进**         | Ollama（Jetson、Apple Silicon）、SGLang（NPU、gfx942）、llama.cpp（Vulkan、WebGPU） | 在目标设备验证模型加载；避免使用 sm_70/72 GPU |
| **安全设计兴起**             | LiteLLM 中的 ReDoS（`secret_redaction`）、SGLang 中 `/parse_function_call` DoS 风险     | 立即打补丁；输入净化；使用异步包装器 |
| **提供方抽象增长**           | LiteLLM 新增 **BlockRun**、**Architect**、**Vertex AI 透传**                         | 利用原生提供方；避免手动配置 `api_base` |
| **模型中心稳定性**           | Qwen3 工具调用循环、Mistral 表情符号损坏、GLM-ROCm 权重错误                            | 临时应用变通方案直至补丁上线；使用真实输入测试 |

> 🔮 **开发者关注清单**：  
> - **vLLM 的 Humming 迁移** → 提前更新配置。  
> - **SGLang v1.0** → 为配置校验的破坏性变更做好准备。  
> - **LiteLLM 的 ReDoS 修复** → 若使用敏感信息脱敏功能，请立即打补丁。  
> - **Ollama 的多GGUF导入** → 关注未来版本（预计即将发布）。

---

**最终结论**：AI基础设施栈正在快速成熟——**vLLM 与 SGLang 在性能前沿领先**，**Ollama 在易用性上表现卓越**，**LiteLLM 实现了多提供方的敏捷性**。应用开发者如今必须**战略性组合这些工具**，而非依赖单一栈解决方案，应优先考虑**硬件适配性、安全规范性以及稳定模型加载**。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-11-23**

---

### **1. 今日亮点**  
vLLM 项目正加速向 **Humming** 作为 NVIDIA 架构上的默认量化内核转型，积极推进在 Hopper 与 Blackwell（SM12x）上替换旧版 Marlin 内核。关键进展包括针对 B300 GPU 上 DeepSeek-V4.1-Flash 的性能优化，以及通过改进 ViT CUDA 图支持和共享渲染 API 来统一并稳定多模态处理流程。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告新发布或破坏性变更。*  
无新版本或破坏性 API/配置变更发布。但正在进行的 RFC（#65560、#66101）表明，即将弃用 Marlin 内核，并扩展对草稿 LM-head 量化的支持。

---

### **3. 新模型与硬件支持**  
- **新 GPU 架构**：通过 PR #69081（修复 `reshape_and_cache_flash` 缺失内核问题），已启用 **RTX PRO 6000 Blackwell (SM120)**；在 CUDA 13.4 下持续支持 **Rubin (sm_107)**（跟踪于 #49735）。  
- **新模型**：在 ROCm 上全面支持 **Qwen3.8-Flash-Next**（PR #64662）、在 B300 上支持 **DeepSeek-V4.1-Flash**（PR #68366），并通过多模态追踪支持 **Kimi K2.5**（Issue #38175）。  
- **后端与平台**：  
  - AMD ROCm：为 RDNA3/RDNA3.5（gfx11）新增 W4A8 MoE 解码内核（PR #62480）。  
  - Intel XPU：Qwen3.5 现已支持序列并行与流水线并行结合（PR #69314）。  
  - CPU 离线：现已支持联合 GPU/CPU 前缀缓存查找（PR #57325）。

---

### **4. 性能与优化**  
- **融合内核优化**：  
  - 针对 **B300 上的 DeepSeek-V4.1-Flash**，优化 DEP2/4/8 解码路径，实现直接调度缓冲区路由并减少内存流量（PR #68366）。  
  - 为 **MI325X 上的 Qwen3.8-Flash-Next-FP8 且 TP4 场景** 提供 Triton 优化的融合 MoE 配置（PR #64662）。  
- **量化改进**：  
  - 在 SM12x 上，对 INT4 G128、MXFP8 及 NVFP4 推荐使用 **Humming 而非 Marlin**（PR #65676、#63777）。  
  - 通过插件实验性支持 **平台提供的 draft_lm_head_quantization 格式**（PR #67908）。  
- **内存效率**：  
  - KV 缓存缩减工作持续推进；问题 #51041 指出 *DeepSeek-V4-Flash-0731* 存在每 token 使用高达 56B 内存的情况（相较前代约 7B/token），暗示状态管理可能存在潜在低效。

---

### **5. 稳定性与回归问题**  
- **严重缺陷**：  
  - 当归一化失败时，`apply_top_k_top_p_triton` 会无声下溢（PR #68411）。  
  - `decode_attention_fwd` 在 GQA 组数 >16 且不被 16 整除时读取错误的 KV 头（PR #68413）。  
  - `HF3FSKVConnector` 可能在保存抢占请求状态前重用已释放块（PR #69271）。  
- **模型相关问题**：  
  - Qwen3 模型在严格模式下遇到空 tool call 时进入无限循环（Issue #50989）。  
  - Mistral tokenizer 会损坏表情符号/多字节字符（Issue #68003）。  
  - GLM-5.3 在 ROCm 上当 `index_topk_freq > 1` 时崩溃，因缺少权重键（Issue #68919）。  
- **正在修复中**：  
  - PR #68411、#68413、#69271 正在解决核心正确性问题。  
  - PR #66087 修复了在多个流水线阶段包含 MoE 层时的 EPLB 启动失败问题。

---

### **6. 对应用开发者的启示**  
- **预期在 Blackwell 与 B300 GPU 上获得更快推理速度**，因 Humming 内核将取代 Marlin —— 尤其对 MoE 及 FP8/NVFP4 模型效果显著。请优先更新部署配置以适配此转变。  
- **多模态应用应关注 ViT CUDA 图支持情况**（Issue #38175），确保生产稳定性；长会话下流式输入延迟呈二次增长（Issue #52471），建议采用分块策略。  
- **使用 `vllm.Render`（通过 gRPC 或 HTTP）** 实现一致的提示词分词，并将预处理任务从网关卸载（Issues #65503、#65502）。  
- **避免模型特有陷阱**：Qwen3 工具调用严格模式、Mistral 表情符号损坏、GLM-ROCm 权重加载错误等问题需临时绕行，待补丁发布。  
- **通过平台特定格式启用推测解码与草稿 LM-head 量化**（PR #67908），实现更低延迟生成。

> 🔗 [GitHub Issues](https://github.com/vllm-project/vllm/issues) | [Pull Requests](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 消息简报 – 2026-11-23**

---

### **1. 今日重点**  
SGLang 项目持续推进 **SGLang 1.0 稳定性目标**，在 CI 可靠性与模型正确性方面取得关键改进，尤其针对 GLM-5.3-Flash 和 Mamba2 推理服务。针对 AMD（gfx942）和 NPU（Ascend A5）的性能优化已落地，同时修复了采样过程中的 NaN 传播问题及不稳定的测试基础设施。

---

### **2. 发布与破坏性变更**  
*暂无新版本发布。*  
- **SGLang 1.0 路线图 (#50045)**：正式跟踪稳定性强化、更严格的配置校验（以显式错误替代静默变更），以及 1.x 系列的明确兼容性策略。从 `0.5.x` 升级可能需要代码调整——[参见升级说明](https://github.com/sgl-project/sglang/issues/50045)。  
- **CI 维护模式 (#21065)**：因持续不稳定而启用；待问题解决前，所有 PR 暂停合并。[上次自动更新：2026-11-23](https://github.com/sgl-project/sglang/issues/21065)。

---

### **3. 新模型与硬件支持**  
- **AMD gfx942**：DeepSeek-V4.1 现支持通过 BF16 权重扩展实现 FP8 密集线性推理 ([PR #51001](https://github.com/sgl-project/sglang/pull/51001))。  
- **NPU (Ascend A5)**：为 DeepSeek-V4.1 添加预填充图捕获，并为 GLM-5.3-Flash 实现交错预填充计算（CP）([PRs #51185](https://github.com/sgl-project/sglang/pull/51185), [#52427](https://github.com/sgl-project/sglang/pull/52427))。  
- **MUSA (华为)**：通过 `mcc` 编译器新增 JIT 内核后端支持 ([PR #51491](https://github.com/sgl-project/sglang/pull/51491))。  
- **Qwen4-Exp**：通过 Mooncake EngramStore 支持本地与远程 Engram 存储 ([PR #47673](https://github.com/sgl-project/sglang/pull/47673))。

---

### **4. 性能与优化**  
- **AMD gfx942 (DeepSeek-V4.1, 8x MI300X)**：  
  - P50 端到端交互性提升 +41.0%  
  - P90 交互性提升 +37.2%  
  - 单 GPU 输出吞吐量提升 +18.8%  
  *(通过 BF16 权重扩展实现 FP8 推理)* → [PR #51001](https://github.com/sgl-project/sglang/pull/51001)  
- **NVIDIA SM120 (Blackwell)**：  
  - GDN 解码默认被 Triton 阻塞；待修复以启用 flashinfer 融合内核 ([Issue #51208](https://github.com/sgl-project/sglang/issues/51208))。  
- **Mamba2**：通过隔离非有限输入，解决了服务过程中因内核重新编译导致的预填充编译阻塞问题 ([PR #51342](https://github.com/sgl-project/sglang/pull/51342))。  
- **多模态 Gemma 4**：可中断的预填充 CUDA 图现已默认启用 ([PR #52404](https://github.com/sgl-project/sglang/pull/52404))。

---

### **5. 稳定性与回归问题**  
- **严重**：GLM-5.3-Flash 在 H20（SM90）上使用 `--kv-cache-dtype fp8_e4m3` 时失败，原因在于 `index_kpool: 4` 冲突 ([Issue #36830](https://github.com/sgl-project/sglang/issues/36830))。*修复待定。*  
- **严重**：GLM-5.3-Flash NVFP4 在 TP4 上于 B200/B300 上无限循环且无最终回答 ([Issue #41939](https://github.com/sgl-project/sglang/issues/41939))。*已确认为回归问题。*  
- **高风险**：`/parse_function_call` 在恶意构造输入下触发灾难性正则回溯，阻塞事件循环 ([Issue #52090](https://github.com/sgl-project/sglang/issues/52090))。*对代理系统构成即时威胁。*  
- **内存耗尽**：`/vertex_generate` 中 `instances` 列表无界增长，导致 ZMQ 套接字耗尽（`Too many open files`）([Issue #52345](https://github.com/sgl-project/sglang/issues/52345))。*修复 PR 待提交。*  
- **NaN 传播**：采样逻辑缺乏一致的 NaN 检测 —— 修复正在进行中 ([PR #52428](https://github.com/sgl-project/sglang/pull/52428))。

---

### **6. 对应用开发者的启示**  
- **预期 v1.0 存在破坏性变更**：若从 0.5.x 升级，请务必查阅 [升级说明](https://github.com/sgl-project/sglang/issues/50045)。以往静默的配置变更将改为抛出显式错误。  
- **避免在工具调用中使用不可信输入**：`/parse_function_call` 接口易受恶意文本攻击导致拒绝服务——请对输入进行清洗或使用异步包装器。  
- **启用 `--enable-unified-cache-external-linker-config`**：对于基于 Mooncake 的 Qwen 模型，确保链接器配置正确，防止启动失败 ([PR #52373](https://github.com/sgl-project/sglang/pull/52373))。  
- **监控 CI 健康状态**：维护模式下，所有 PR 合并延迟，预计合并周期延长。  
- **针对硬件优化内核**：充分利用 AMD gfx942 与 NPU 的预填充图以提升吞吐；考虑使用 `--schedule-low-priority-values-first` 实现优先级感知调度。

> 🔗 **追踪关键问题**：[SGLang 1.0 追踪器](https://github.com/sgl-project/sglang/issues/50045)，[CI 失败追踪器](https://github.com/sgl-project/sglang/issues/17050)，[GLM-5.3-Flash 问题追踪器](https://github.com/sgl-project/sglang/issues/37524)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 消息简报 – 2026-11-23**

---

### **1. 今日亮点**  
最新发布周期（b12646–b12635）聚焦于 `mtmd` 中音频处理的关键稳定性修复、MoE 模型处理的鲁棒性提升，以及针对 LLM 工具调用的改进令牌感知解析。值得注意的是，长期存在的 RDNA1 GPU 上 Vulkan 后端性能退化问题已被突出显示（#30039），同时通过 PR #32218 引入了对 Inkling 2 DSpark 规划器的新支持。

---

### **2. 发布与破坏性变更**  
- **最新构建**：过去 24 小时内发布了 `b12646` 至 `b12635`。未报告破坏性 API 变更；所有更新均为缺陷修复或功能增强。
- **关键修复**：`b12643` 通过移除多余的零填充令牌，解决了 Qwen3a 音频尾部损坏问题 ([#32697](https://github.com/ggml-org/llama.cpp/issues/32697))。
- **解析器增强**：`b12642` 实现了令牌感知解析，以提升结构化输出的一致性 ([#29307](https://github.com/ggml-org/llama.cpp/issues/29307))。

> 🔗 [GitHub 发布说明](https://github.com/ggml-org/llama.cpp/releases)

---

### **3. 新模型与硬件支持**  
- **模型支持**：
  - 增加对 **Inkling 2 DSpark 规划器** 的实验性支持（PR #32218）。
  - 扩展了对 **LFM2.5-VL** 模型的模板检测能力 ([#32843](https://github.com/ggml-org/llama.cpp/pull/32843))。
  - 集成 **SenseNova Loop** 架构（PR #32588）。
- **后端与硬件**：
  - 增强 WebGPU softmax 索引安全性 ([#32691](https://github.com/ggml-org/llama.cpp/pull/32691))。
  - 持续优化 SYCL 与 ROCm 后端，但在 iGPU 与 Volta 设备上仍存在部分问题。

> 🔗 [PR #32218: Inkling 2 DSpark](https://github.com/ggml-org/llama.cpp/pull/32218) | [PR #32588: SenseNova Loop](https://github.com/ggml-org/llama.cpp/pull/32588)

---

### **4. 性能与优化**  
- **音频处理**：`mtmd` 现在通过迭代式基 2 分裂和批处理奇数大小 DFT，加速共享音频 FFT，降低实时语音流水线中的开销 ([#32815](https://github.com/ggml-org/llama.cpp/pull/32815))。
- **CUDA/SYCL**：基于 AMDGCN `mbcnt` 的投票操作减少了车道级归约延迟 ([#32841](https://github.com/ggml-org/llama.cpp/pull/32841), [#32840](https://github.com/ggml-org/llama.cpp/pull/32840))。
- **内存效率**：Inkling 2 中基于分块的掩码构造降低了预填充阶段的 GPU 内存占用 ([#32752](https://github.com/ggml-org/llama.cpp/pull/32752))。

> ⚠️ **回归警告**：在 **RDNA1 (gfx1010)** 上，使用 GDN 混合模型时，从 `b10455` 到 `b11429` 之间提示处理速度下降约 45% —— 通过二分排查确认 ([#30039](https://github.com/ggml-org/llama.cpp/issues/30039))。

---

### **5. 稳定性与回归**  
| 严重程度 | 问题 | 影响 | 状态 |
|--------|------|--------|--------|
| 高 | **设备丢失时 Vulkan 死锁**（`ggml_vk_wait_for_fence` 无限循环） | GPU 崩溃导致永久挂起 | 开放 ([#29926](https://github.com/ggml-org/llama.cpp/issues/29926)) |
| 高 | **Qwen3.5-122B-A10B 在 sm_70 上首次请求即崩溃** | 立即拒绝内核启动 | 开放 ([#29783](https://github.com/ggml-org/llama.cpp/issues/29783)) |
| 中 | **循环模型中 MoE 缓存重复存储共享专家 ×3** | 内存膨胀，潜在正确性风险 | 开放 ([#32744](https://github.com/ggml-org/llama.cpp/issues/32744)) |
| 中 | **长提示后 RPC 工作线程损坏（DeepSeek V4）** | 输出退化为重复令牌 | 开放 ([#30794](https://github.com/ggml-org/llama.cpp/issues/30794)) |
| 低 | **Windows 工作集在加载后持续保留** | 即使已卸载仍造成内存压力 | 开放 ([#32373](https://github.com/ggml-org/llama.cpp/issues/32373)) |

> ✅ **已合并修复**：  
> - 音频尾部修复：[#32697](https://github.com/ggml-org/llama.cpp/pull/32697)  
> - LFM2.5-VL 模板检测：[#32843](https://github.com/ggml-org/llama.cpp/pull/32843)  
> - SVE gemv 内核：[#29256](https://github.com/ggml-org/llama.cpp/pull/29256), [#31736](https://github.com/ggml-org/llama.cpp/pull/31736)

---

### **6. 对应用开发者的启示**  
- **在旧版 CUDA 显卡（sm_70/72）上使用 Qwen3.5 与 DeepSeek V4 模型时需谨慎** —— 高负载下可能崩溃。尽可能优先选择 `sm_80+` 目标。
- **若在 CPU MoE 层出现垃圾输出，请启用 `--override-tensor offloading` 用于 Inkling 2 Mini 模型** ([#32755](https://github.com/ggml-org/llama.cpp/issues/32755))。
- **监控 RDNA1 GPU 上的 Vulkan 性能** —— 近期构建存在显著回归；如需稳定推理，建议锁定至 `b10455` 或更早版本。
- **对于高吞吐量代理系统**，可利用新的 **Inkling 2 DSpark 支持** 和 **令牌感知解析**，实现更可靠的工具调用并减少幻觉。
- **在 Windows 平台**，应用 PR #31709（`unmap_fragment()` 修复）以避免模型加载后的内存膨胀。

> 📌 **最佳实践**：始终使用 `--n-gpu-layers max` 测试量化模型，并监控 GPU 内存使用情况 —— 尤其是 Qwen3.5 等混合 MoE/GDN 模型。

---  
*简报生成自 [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) —— 数据截至 2026-11-23。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# **Ollama Digest – 2026-11-23**

---

### **1. 今日亮点**  
已合并针对显存（VRAM）计数和GPU内存管理的关键修复，解决了长期存在的问题——该问题曾导致高内存系统上模型被驱逐甚至崩溃，尤其影响混合模型如 Qwen3.5/3.8 以及 Jetson AGX Orin 设备。同时，多项 PR 已落地，提升了分布式 blob 下载（通过 `checkedDialer`）的可靠性，并修复了清单路径中的编码不一致问题，增强了边缘情况下的稳定性。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告任何内容。*  
无新版本发布，也无破坏性 API/配置变更。最新稳定版本仍为 **0.40.17**，当前改进重点在于内部正确性和性能优化，而非面向用户的变更。

---

### **3. 新模型与硬件支持**  
- ✅ **Jetson AGX Orin（JetPack 6）**：已合并修复 ([PR #19847](https://github.com/ollama/ollama/pull/19847))，默认禁用 CUDA 的 VMM 池（`GGML_CUDA_NO_VMM=ON`），解决图像推理过程中因 `cuMemAddressReserve` 出现致命 OOM 崩溃的问题。  
- ✅ **Metal 上的 Inkling 2 Mini（26B）**：[PR #19843](https://github.com/ollama/ollama/pull/19843) 引入了优化后的 Metal 内核，显著提升解码、预填充及草稿阶段的性能，特别针对 Apple Silicon 架构进行调优。  
- 🔧 **多文件 GGUF 模型**：虽尚未发布，但重大功能请求 (#5245) 正在积极处理中；对拆分 GGUF 文件（如 `model-00001-of-00003.gguf`）的导入支持正在开发，预计即将上线。

---

### **4. 性能与优化**  
- 📈 **VRAM 计数修复**：[PR #19632](https://github.com/ollama/ollama/pull/19632) 解决了混合模型（如 Qwen3.5/3.8）KV 缓存严重过度分配（膨胀 4–8 倍）的问题，防止过早驱逐，使 `keep_alive=-1` 能正常生效。这提升了 GPU 实际利用率，并降低上下文切换开销。  
- ⚙️ **内存准入控制准确性**：[PR #19848](https://github.com/ollama/ollama/pull/19848) 通过实际主机内存限制 cgroup 内存分配，防止无符号下溢，确保本地推理准入控制准确可靠。  
- 🔄 **Blob 下载容错增强**：[PR #19846](https://github.com/ollama/ollama/pull/19846) 改进了 `transfer.checkedDialer`，不再仅尝试首个验证过的 CDN 地址，而是连接所有有效地址，当 IPv6 路由失败或主机存在混合网络连接时，显著提升下载可靠性。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 修复 PR |
|--------|------|-------|-------|
| 🔴 高 | Jetson AGX Orin 在图像请求时因 CUDA OOM 导致 `cuMemAddressReserve` 崩溃 | 开放 | [PR #19847](https://github.com/ollama/ollama/pull/19847) ✅ |
| 🔴 高 | Apple Silicon（Metal）上首次请求图像时，Qwen3-VL-8B + mmproj 崩溃 | 开放 | [PR #16264](https://github.com/ollama/ollama/issues/16264)（待处理） |
| 🔴 高 | Windows 自动更新失败，报错 `0xc0000142`，遗留死进程 | 开放 | [PR #19840](https://github.com/ollama/ollama/issues/19840)（待处理） |
| 🟡 中 | VRAM 预测值过高估算 KV 缓存 → 尽管内存充足仍触发模型驱逐 | 开放 | [PR #19632](https://github.com/ollama/ollama/pull/19632) ✅ |
| 🟡 中 | 清单主机编码不可逆（因 `%` 解码导致） | 已关闭 | [PR #19835](https://github.com/ollama/ollama/pull/19835) ✅ |

> 注：多个回归问题（如 `qwen3.8:27b-mtp_q8` 使用 127GB VRAM 而非预期的 51GB）可能指向升级后配置漂移或构建时问题——用户应检查构建产物，必要时考虑回滚。

---

### **6. 对应用开发者的影响**  
- **对于智能体与工具集成者**：在 Apple Silicon 与 Jetson 硬件上使用具备视觉能力的模型（如 Qwen3-VL 或 Inkling 2）时，将获得更可靠的运行表现，尤其适用于长周期或批处理工作流。  
- **对于 LLM 网关构建者**：即将到来的多 GGUF 文件导入支持将实现大型拆分模型（如来自 Hugging Face）的无缝部署，减少对单文件格式的依赖。  
- **对于生产环境部署者**：已合并的 VRAM 计数修复意味着现在可更准确地信任 `keep_alive=-1` 与 `OLLAMA_NUM_PARALLEL` 设置——非常适合高吞吐推理服务场景。  
- **对于 Windows 用户**：请谨慎对待静默更新——可能导致重启失败。建议监控日志中是否存在 `taskkill.exe` / `cmd.exe` 错误，并在 [PR #19840](https://github.com/ollama/ollama/issues/19840) 发布前考虑手动重启。

👉 **建议**：升级至 **0.40.17+** 并验证模型加载情况，特别是 Apple Silicon 与 Jetson 平台。关注后续发布说明中关于多 GGUF 支持及 CLI 图像路径处理的增强功能。

---  
*数据来源：[github.com/ollama/ollama](https://github.com/ollama/ollama)*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

### **1. 今日亮点**  
LiteLLM 继续扩展其提供商生态系统，原生支持新的推理平台如 **BlockRun** 和 **Architect**，通过标准化的 OpenAI 兼容 API 实现无缝集成。关键修复解决了流式输出正确性问题（例如 `n>1` 的聊天响应）、Gemini 流中的护栏可靠性，以及 Vertex AI 透传调用的路由行为改进——显著提升了生产负载下的稳定性。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未发布新版本。但多个 **破坏性变更正在活跃的 PR 中进行**：  
- **PR #53693** 引入 `blockrun/<provider>/<model>` 作为第一类 OpenAI 兼容提供商，无需手动配置 `api_base`。[链接](https://github.com/BerriAI/litellm/pull/53693)  
- **PR #53683** 增加 **Architect** 为原生提供商，允许用户通过单一 API 密钥经由基于拍卖的推理交易所路由请求。[链接](https://github.com/BerriAI/litellm/pull/53683)  
- **PR #53678** 修复了批量取消、微调列表、OCR 及缓存预测端点中管理员 OIDC 引用处理问题——确保令牌解析正确。[链接](https://github.com/BerriAI/litellm/pull/53678)

> ⚠️ 依赖自定义 `api_base` 配置使用 BlockRun 或 Architect 的开发者应尽快迁移到新原生提供商，以避免未来被弃用的风险。

---

### **3. 新模型与硬件支持**  
- **BlockRun** 现已作为 JSON 配置的 OpenAI 兼容提供商原生支持（PR #53693）。  
- **Architect**（推理市场）作为第一类提供商加入（PR #53683），支持对模型推理进行动态竞价。  
- **Vertex Gemini 图像模型** 现在正确响应 `imageConfig`、`aspect_ratio` 和 `resolution` 控制参数——此前会静默忽略或返回正方形图像（PR #53581）。[链接](https://github.com/BerriAI/litellm/pull/53581)  
- **Gnani** 新增 REST 转录支持（PR #52520），填补音频处理链路中的空白。

---

### **4. 性能与优化**  
- **PR #53588** 通过在并发透传调用中优先选择负载最低的 Vertex AI 部署，改善负载分配——减少热点，提升高并发场景下的吞吐量。  
- **PR #53592** 确保 `n>1` 流式聊天响应中每个选择均以 `assistant` 角色开头，修复客户端解析多响应时可能产生的问题。[链接](https://github.com/BerriAI/litellm/pull/53592)  
- **PR #53600** 通过在 Google 的 `streamGenerateContent` 响应中正确解析工具调用（在工具权限护栏下），提升流性能，避免不必要的 400 错误。[链接](https://github.com/BerriAI/litellm/pull/53600)  
- **PR #53333** 为虚拟密钥启用原生模型列表强制机制，减少 Python 网关往返次数，降低延迟。[链接](https://github.com/BerriAI/litellm/pull/53333)

> ✅ 这些变更共同提升了路由效率，降低后端开销，并增强实时流式传输的准确性。

---

### **5. 稳定性与回归问题**  
今日报告的主要稳定性问题：

| 问题 | 严重性 | 状态 | 修复 PR |  
|------|----------|--------|--------|  
| `utils.py` 中的 `ModelNotMappedError`（Issue #51452） | 高 | 开放 | ❌ 尚无修复 |  
| `secret_redaction.redact_string()` 中因正则回溯导致的 `ReDoS`（Issue #32353） | 严重 | 开放 | ✅ **修复 PR 待合并** ([#53539](https://github.com/BerriAI/litellm/pull/53539)) |  
| Anthropic `/v1/messages` 流中 `tool_use` 参数丢失（Issue #45348） | 高 | 已关闭 | ✅ 已在 v1.108.0+ 修复 |  
| `watsonx` 使用未被记录 —— 代理报告自身估算值（Issue #46059） | 中等 | 开放 | ❌ 尚无修复 |  
| `Gemini generateContent → Anthropic` 丢弃并行函数调用且重复 ID（Issue #53345） | 高 | 开放 | ❌ 尚无修复 |  

> 🔴 **严重警报：** `ReDoS` 漏洞（Issue #32353）可利用恶意输入导致代理崩溃——若部署于生产环境，请立即修补。

---

### **6. 对应用开发者的意义**  
- **采用 BlockRun 与 Architect 的原生提供商支持**，简化部署流程，避免手动 `api_base` 覆盖。  
- **确保对 `n>1` 流式响应的健壮错误处理**：在 PR #53592 合并前，客户端需自行检查 `assistant` 角色。  
- **验证 Gemini/GCP 路由上的护栏策略**：工具调用权限现在在流中正常工作（PR #53600）。  
- **避免 `ReDoS` 风险**：升级至已应用 PR #53539 的版本——尤其在处理用户生成日志或敏感信息时更需注意。  
- **监控 WatsonX 与 Vertex AI 的成本追踪**：用量数据可能存在偏差；建议使用上游计费 API 保证审计准确性。  

> 💡 **实用提示：** 使用 `enable_pre_call_checks: true` 时需谨慎——除非合并 PR #53039，否则仍会部分请求路由至 Python。请相应监控延迟波动。

---  
*摘要生成时间：2026-11-23 | 来源：[BerriAI/litellm GitHub](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-23**

---

### **1. 今日亮点**  
Unsloth 继续在 ROCm、MPS 和 MLX 后端推进低级别内核修复与稳定性优化。重点解决模型加载失败问题（如 Inkling-2-Mini-GGUF、Qwen-Image-Edit），并增强 Translate 模块对新语言的支持。团队还完成了针对 FP8 精度处理和扩散训练工作流中内存管理的关键修复。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未发布新版本。*  
然而，正在进行的变更表明，聊天设置的本地数据库持久化策略将趋于严格（问题 #5862），可能影响从旧版本升级的用户。此外，`transformers==5.13.1` 在部分安全扫描器中触发了误报（问题 #18699），可能影响 CI/CD 流水线。

> 🔗 [Issue #5862](https://github.com/unslothai/unsloth/issues/5862) | 🔗 [Issue #18699](https://github.com/unslothai/unsloth/issues/18699)

---

### **3. 新模型与硬件支持**  
- **新增语言支持**：Amharic (`am`)、Swahili (`sw`)、Hausa (`ha`)、Yoruba (`yo`)、Igbo (`ig`)、Zulu (`zu`) 已加入 Unsloth Translate（PR #18738）。  
- **ROCm/Windows 稳定性**：修复通过 Studio 启动 `llama-server` 时因系统 libamdhip64 冲突导致的崩溃问题（问题 #18948）。  
- **MLX/Mac 支持**：Z-Image 基础渲染现已正确支持 M1/M2 Mac（PR #18964）。  
- **GGUF 模型兼容性**：报告 Inkling-2-Mini-GGUF（问题 #18757）和 Qwen-Image-Edit GGUF（问题 #18759）存在加载问题——可能由近期后端或内核变更引起。

> 🔗 [PR #18738](https://github.com/unslothai/unsloth/pull/18738) | 🔗 [Issue #18757](https://github.com/unslothai/unsloth/issues/18757) | 🔗 [Issue #18759](https://github.com/unslothai/unsloth/issues/18759)

---

### **4. 性能与优化**  
- **FP8 精度**：在扩散训练中通过在启用 Auto-FP8 前检查主机内存，仅当可用显存超过 1.15 倍时才开启，从而提升显存效率（PR #18967）。  
- **内核融合**：仅在启用时才会对常量 LoRA 集合进行组卸载下的折叠（PR #18983），减少不必要的计算。  
- **块编译**：在批量分组解码中，避免在 `torch.compile` 下每次调用都重新编译（PR #18985），提升推理吞吐量。  
- **注意力优化**：在 ROCm 上保存注意力数据时，全图编译期间保持在检查点帧内，降低内存开销（PR #18990）。

> 🔗 [PR #18967](https://github.com/unslothai/unsloth/pull/18967) | 🔗 [PR #18983](https://github.com/unslothai/unsloth/pull/18983) | 🔗 [PR #18985](https://github.com/unslothai/unsloth/pull/18985)

---

### **5. 稳定性与回归**  
| 严重程度 | 问题 | 摘要 | 修复 PR？ |
|--------|------|--------|--------|
| ⚠️ 高 | #18757 | 最新版 Docker 中 Inkling-2-Mini-GGUF 无法加载 | ❌ 尚无修复 |
| ⚠️ 高 | #18759 | Qwen-Image-Edit GGUF 在 `_adaln_continuous_forward` 中因设备不匹配失败 | ❌ 尚无修复 |
| ⚠️ 中 | #18805 | Windows Strix Halo：`host-shortfall` 检查仍会在切出修复后强制 mmap | ✅ 正在跟进 |
| ⚠️ 中 | #18763 | AMD NPU：列出模型时出现“额外数据”错误（FastFlowLM 1.0.13） | ❌ 可能为回归 |
| 🟡 低 | #18666 | 翻译模式缺少图像/音频/视频支持 | ✅ 通过 PR #18992 部分解决 |

> 🔗 [Issue #18757](https://github.com/unslothai/unsloth/issues/18757) | 🔗 [Issue #18759](https://github.com/unslothai/unsloth/issues/18759) | 🔗 [PR #18992](https://github.com/unslothai/unsloth/pull/18992)

---

### **6. 对应用开发者的影响**  
- **预计模型加载会出现破坏性变更**——尤其在 AMD/NPU 与 Windows ROCm 上使用 GGUF 模型时。若部署生产负载，请关注 #18757 和 #18759 等问题。  
- **利用新翻译能力**——非洲语言支持及通过 PR #18992 实现的字幕文件（SRT/VTT）翻译，可构建更丰富的多语言代理用户体验。  
- **优化 FP8 与内核融合**——建议使用 `UNSLOTH_GC_SAVE_ATTENTION=1`、`offload_policy=group`，并仅在明确需要时才启用 LoRA 融合。  
- **在 CI/CD 中避免使用 `transformers==5.13.1`**，若安全扫描器将其标记为恶意（问题 #18699）。  
- **在 Windows ROCm 上使用 `--lazy-mode on-direct`** 以规避 mmap 相关崩溃（继 #17605 之后的后续方案）。

> 🔗 [PR #18992](https://github.com/unslothai/unsloth/pull/18992) | 🔗 [Issue #18699](https://github.com/unslothai/unsloth/issues/18699)

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*