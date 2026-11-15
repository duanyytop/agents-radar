# AI 基础设施日报 2026-11-15

> 生成时间: 2026-11-15 02:05 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-11-15**

---

### **1. 生态概览**  
2026年末，AI推理基础设施领域呈现出硬件特化加速、服务端与本地执行融合、以及对代理原生能力日益重视的格局。各项目正沿着特定芯片路径不断分化——尤其围绕NVIDIA Blackwell（SM120）、AMD MI355X/MI300X和Intel NPU展开——同时也在共享工作负载（如推测解码、工具调用、语音驱动代理）上趋于统一。基于Rust的后端（vLLM、SGLang、LiteLLM）逐渐成为主流，标志着行业进入以性能、内存安全和生产级可靠性为核心的发展成熟期。与此同时，模型格式（FP8、MXFP4、NVFP4）与量化后端（Humming vs Marlin）正演变为关键的战略差异化因素。

---

### **2. 活动对比**

| 项目       | 开放问题数（↑） | 合并的PR数（↑） | 发布状态         |
|---------------|------------------|------------------|------------------------|
| **vLLM**      | 127 (+5)         | 24 (+8)          | 无新版本发布；重大变更即将来临 |
| **SGLang**    | 98 (+3)          | 14 (+4)          | 无新版本发布；v1.0路线图已启动 |
| **llama.cpp** | 142 (+6)         | 12 (+5)          | 4次增量补丁（b12387–b12383）；弃用警告 |
| **Ollama**    | 161 (+4)         | 4 (+2)           | 无新版本发布；社区集成占主导 |
| **LiteLLM**   | 118 (+3)         | 8 (+3)           | `v1.110.0-rc.3` 已签名；聚焦安全 |
| **Unsloth**   | 134 (+7)         | 6 (+2)           | Beta桌面更新；无核心版本发布 |

> 🔍 *趋势*：**vLLM** 和 **Unsloth** 展现最高工程迭代速度，vLLM推动内核级创新，Unsloth则推进以代理为中心的功能。Ollama在社区驱动集成活动中领先。

---

### **3. 模型支持竞赛**

| 新模型 / 架构               | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------------------|------|--------|-----------|--------|---------|---------|
| **Blackwell SM120** (RTX PRO 6000) | ✅ | ✅ (可选启用) | ❌ | ⚠️ (WSL2限制) | ⚠️ | ⚠️ |
| **Qwen3.6-27B-FP8**            | ✅ | ⚠️ (崩溃风险) | ⚠️ (工具调用损坏) | ⚠️ (数据损坏) | ⚠️ | ⚠️ |
| **DeepSeek-V4.1-Flash**        | ✅ | ✅ (可选启用) | ✅ (提示复用缺陷) | ⚠️ (崩溃) | ⚠️ | ✅ (原生支持) |
| **GLM-5.3-Flash FP4-Local**    | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| **MiniMax-M3.1 MoE**           | ✅ (cuTile NVFP4) | ✅ | ✅ | ⚠️ | ⚠️ | ✅ (原生支持) |
| **ZAOERIS AXIOM MoE (79.43B)** | ✅ (请求中) | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| **Intel NPU (Core Ultra)**     | ⚠️ | ⚠️ | ⚠️ | ✅ (请求中) | ⚠️ | ⚠️ |

> 🏆 **领先者**：**Unsloth** 在支持DeepSeek-V4.1、MiniMax-M3.1等前沿模型方面占据原生支持领先地位。  
> 📈 **新兴领先者**：**vLLM** 在硬件优先集成（Blackwell、ROCm）方面表现突出，尤其适用于高端推理场景。

---

### **4. 性能前沿**

| 关注领域                | vLLM                              | SGLang                            | llama.cpp                         | Ollama                          | LiteLLM                           | Unsloth                          |
|--------------------------|------------------------------------|------------------------------------|------------------------------------|----------------------------------|------------------------------------|-----------------------------------|
| **KV缓存优化** | ✅ 批量无关、编码器缓存配置 | ✅ HiCache调优、L2/L3压力处理 | ✅ 每序列统一KV（Qwen4Exp） | ✅ VRAM计账修复（关键） | ⚠️ 预算错配（高风险） | ⚠️ 草稿接受率下降（UD 3.1 GGUF） |
| **批处理与吞吐** | ✅ 推测解码（加载时top-k） | ✅ SPF分块预留逻辑 | ✅ DFlash重构 | ✅ 推测批处理（mlxrunner） | ✅ 拥塞感知队列 | ⚠️ MTP草稿头不匹配 |
| **量化后端**  | ✅ 逐步淘汰Marlin → **Humming**（FP8、MXFP4、NVFP4） | ✅ cuTile NVFP4 W4A4 | ⚠️ Hexagon HMX inf缺陷 | ⚠️ FP8 Metal中止 | ⚠️ 旧式计账 | ⚠️ 实验性混合打包 |
| **分布式服务**   | ✅ 多GPU + 数据并行（重大问题） | ✅ FSDP2/TP/PP（Qwen3.8-Flash-Next） | ⚠️ 有限分布式训练 | ⚠️ 多GPU拆分（VRAM修复） | ✅ 基于Redis的协调机制 | ✅ FSDP2/TP/PP（完整支持） |
| **内核级优化** | ✅ Humming、稀疏MLA、FlyDSL（MI355X） | ✅ Stream-K GEMM（修复NaN） | ✅ Flash Attention（OpenCL） | ✅ — | ✅ Rust-based指标与限流器 | ✅ 混合线性注意力（ROCm） |

> 🎯 **性能领导力**：**vLLM** 在内核层面凭借Humming和跨架构优化占据主导地位。**LiteLLM** 在系统级可观测性与拥塞控制方面领先。**Unsloth** 在端到端代理工作流中表现出色，尤其在语音与草稿调优方面。

---

### **5. 层级定位**

| 项目       | 主要层级                     | 次要角色                             | 核心差异点                                  |
|---------------|------------------------------------|---------------------------------------------|-----------------------------------------------------|
| **vLLM**      | **推理引擎**               | 模型服务（类网关API）      | 高性能CUDA内核，聚焦Blackwell      |
| **SGLang**    | **推理引擎 + 网关**     | 代理编排（Rust服务器后端）   | 原生兼容Ollama/Anthropic，控制API迁移 |
| **llama.cpp** | **本地运行时 / 嵌入式推理** | 跨平台CPU/GPU执行           | 极致可移植性（Hexagon、Vulkan、Metal），低开销 |
| **Ollama**    | **LLM网关 + 开发者平台** | 社区集成（PipesHub、SynapCores）| 通过第三方连接器扩展生态        |
| **LiteLLM**   | **API网关 / 代理层**      | 成本监控、请求路由            | 供应链完整性（Cosign），拥塞感知队列 |
| **Unsloth**   | **代理运行时 + 训练工具**  | 桌面UI、语音模式、微调         | 原生模型支持，语音驱动聊天界面  |

> 🧩 **战略洞察**：清晰的层级结构正在形成：  
> - **引擎**（vLLM、SGLang、llama.cpp）负责计算效率。  
> - **网关**（Ollama、LiteLLM）管理路由、成本与集成。  
> - **代理**（Unsloth、SGLang）构建下一代应用栈。

---

### **6. 趋势信号与战略观察清单**

#### **从活动提取的行业趋势**
1. **硬件特化已成为核心**：项目正全力优化**NVIDIA Blackwell（SM120）**、**AMD MI355X/gfx942** 和 **Intel NPU**——不再仅限通用GPU支持。这要求独立开发与早期采纳。
2. **Rust已成为事实标准**：vLLM、SGLang、LiteLLM均大力投入Rust以提升性能与安全性，表明向生产就绪、低延迟系统转型的趋势。
3. **代理工作负载驱动创新**：语音模式（Unsloth）、推测解码（全部）、工具调用鲁棒性（Ollama、LiteLLM）、持久缓存（llama.cpp）均针对长时、多轮代理使用场景进行优化。
4. **量化迁移正在进行**：Marlin正被**Humming**（vLLM）取代，预示未来推理管道需具备前瞻性。
5. **安全与可观测性不可妥协**：已签名发布（LiteLLM）、支出日志（LiteLLM）、详细指标（SGLang、LiteLLM）反映出对审计能力和成本控制的强烈需求。

#### **应用开发者应关注事项**
- ✅ **立即从Marlin迁移到Humming**——为你的推理栈未来做好准备。
- ✅ **避免在Unsloth中使用 `--load-mode none`**——会导致严重内存压力。
- ✅ **长期运行代理请使用 `--hicache-mamba-size-gb` 或 `--cache-disk`**。
- ✅ **在负载下测试推测解码**——特别是结合统一KV缓存与大上下文窗口时。
- ✅ **为异构部署做准备**——设计应用时采用后端无差别路径（如Intel NPU使用OpenVINO）。
- ✅ **升级前审计配置**——排查废弃设置（如 `accounting_capture`）。

> 🔮 **前瞻展望**：到2027年第一季度，**代理原生栈**将全面主导——不仅限于模型服务。赢家将是那些将推理引擎、网关与运行时工具整合为单一、安全、可观测、可扩展平台的项目。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

### **vLLM Digest — 2026-11-15**

#### **1. 今日亮点**  
vLLM 项目持续加速对下一代硬件的支持，针对 Blackwell（SM120）GPU 的性能与稳定性推出了关键修复和优化。主要进展包括：全面推动用更高效的 **Humming** 量化后端替代旧版 Marlin 内核，覆盖所有 NVIDIA 架构；同时持续推进在高端多 GPU 部署场景下推测解码与 KV 缓存卸载的稳定性优化。Rust 前端快速成熟，现已接近与 Python 版本的功能对齐。

#### **2. 发布与破坏性变更**  
*过去 24 小时内无新发布。*  
但多项 PR 显示即将出现破坏性变更：  
- `VLLM_USE_RUST_FRONTEND=1` 已具备生产可用性，但仍属实验性质；未来可能与 Python API 出现差异。  
- **Marlin 已弃用**：问题 #65560 提议在所有 NVIDIA 架构（Hopper、Blackwell）上以 Humming 取代 Marlin，可能需要重新量化模型或更新推理配置。  
- 新增 `--encoder-cache-size` 标志（PR #65534）支持可配置的多模态编码器缓存——非破坏性变更，但会影响视觉语言模型的内存规划。

> 🔗 [Marlin → Humming RFC](https://github.com/vllm-project/vllm/issues/65560) | [可配置编码器缓存](https://github.com/vllm-project/vllm/pull/65534)

#### **3. 新模型与硬件支持**  
- ✅ **Blackwell SM120 支持**：多个议题展示了与 RTX PRO 6000 Blackwell（8x TP）深度集成的进展，包括：  
  - 修复 `DeepSeek-V4.1-Flash`、`Qwen3.6-27B-FP8`、`GLM-5.3-Flash` 在 SM120 上的运行问题。  
  - 持续修复 CUDA graph capture 失败（`#67488`）与低解码吞吐量（`#56892`）问题。  
- ✅ **ROCm / AMD 支持**：  
  - 通过 `tl.dot_scaled` 实现 gfx942 上原生 NVFP4 MoE 支持（PR #67723）。  
  - Flint 模型已加入 ROCm 支持（PR #66216）。  
  - 通过 monokernel 启动合并 DSpark draft 层（PR #65985），提升 MI355X 上的效率。  
- ✅ **新模型格式支持**：  
  - ZAQERIS AXIOM MoE 模型（79.43B 稀疏 MoE）提议原生支持（问题 #67412）。  
  - GLM-5.3-Flash FP4-Local 正在社区中积极采用（问题 #66218）。

> 🔗 [AXIOM MoE 请求](https://github.com/vllm-project/vllm/issues/67412) | [Flint on ROCm](https://github.com/vllm-project/vllm/pull/66216)

#### **4. 性能与优化**  
- 🚀 **推测解码优化**：  
  - PR #66534 提出在验证阶段目标 logits 加载过程中应用 top-k/top-p 截断——在高 top-k 场景下，有望减少高达 ~15% 的冗余计算。  
  - PR #67724 启用设备无关的流/事件支持用于 D2H 路径，使推测解码可在非 CUDA 后端（如 ROCm、Intel GPU）上运行。  
- ⚙️ **内核级优化**：  
  - PR #67338 消除稀疏 MLA 预填充元数据构建中的冗余路由决策——每请求减少约 10–15% CPU 开销。  
  - PR #67377 在 MI355X 上使用调优后的 FlyDSL 内核，实现 **21–31% 的 MXFP8 理论峰值性能**，较未优化基线显著提升。  
- 🔁 **批处理不变性**：  
  - 问题 #27433 跟踪批处理不变推理的剩余工作；用户可参考 [Inferact/zero-mismatch-rl](https://github.com/Inferact/zero-mismatch-rl) 获取端到端解决方案。

> 🔗 [加载时应用 top-k top-p](https://github.com/vllm-project/vllm/pull/66534) | [稀疏 MLA 路由决策修复](https://github.com/vllm-project/vllm/pull/67338)

#### **5. 稳定性与回归问题**  
今日报告若干严重稳定性问题，主要影响 **Blackwell SM120** 和 **多 GPU 部署**：

| 严重程度 | 问题 | 描述 | 状态 |
|--------|------|-------------|--------|
| ⚠️ 高 | [#67488](https://github.com/vllm-project/vllm/issues/67488) | 在启用 CUDA MPS 时，于 RTX PRO 6000 Blackwell（SM120）上对 `Qwen3.6-27B-FP8 + LoRA` 执行 CUDA graph capture 期间出现非法内存访问 | 开放 |
| ⚠️ 高 | [#56892](https://github.com/vllm-project/vllm/issues/56892) | 使用 `--enforce-eager` 时，`DeepSeek-V4.1-Flash` 在 SM120 上解码吞吐量极低；CUDA graphs 无法使用 | 开放 |
| ⚠️ 高 | [#67575](https://github.com/vllm-project/vllm/issues/67575) | 使用 `--data-parallel-size 2`（EP16）启动时，`flashinfer_cutlass MoE` 在启动阶段崩溃 | 开放 |
| ⚠️ 中 | [#67684](https://github.com/vllm-project/vllm/issues/67684) | GLM-4.7 工具解析器静默丢弃未知函数调用，导致重试循环 | 开放 |
| ⚠️ 中 | [#67631](https://github.com/vllm-project/vllm/issues/67631) | 因 `block_size_bytes = 0` 静默导致 `kv_cache_planning` 中发生 ZeroDivisionError | 开放 |

> ✅ **正在修复中**：  
> - PR #67724（设备无关流）旨在解决异步调度竞争条件（参见 #61239）。  
> - PR #67723 增加 ROCm 上的 NVFP4 MoE 支持，修复内核兼容性问题。

#### **6. 对应用开发者的影响**  
- **部署在 Blackwell 平台？** 请避免使用 `--enforce-eager`，直到 #56892 修复——该选项会严重降低吞吐量。如需临时规避，可使用 `--disable-elastic-draft-tokens`。  
- **使用 LoRA 或 MoE 模型？** 在 Blackwell 上慎用 `--data-parallel-size > 1`——已报告多次崩溃（#67575, #67631）。建议保持 `dp=1`，或使用 `--moe-backend auto`。  
- **使用 Rust 前端？** 现已可用于生产环境（`VLLM_USE_RUST_FRONTEND=1`）。请确保应用正确处理 `EngineCoreRequest` 验证（PR #67623 修复了缺失检查）。  
- **量化方案选择？** Marlin 将逐步淘汰——建议迁移至 **Humming**（支持格式：INT4/INT8 GPTQ/AWQ、FP8、MXFP4/6/8、NVFP4），以获得更好的 Blackwell/Hopper 性能。  
- **工具调用？** 请修补 `tool_call_parser` 逻辑以避免静默丢弃（问题 #67684）；建议添加回退机制。

> 📌 **实用提示**：在 Blackwell 上进行高并发代理工作负载测试时，使用 `vllm-bench` 并启用共享流一致性（问题 #66782），以确保 Python/Rust 工具间延迟指标的一致性。

---  
*摘要生成时间：2026-11-15 | 来源：[vLLM GitHub](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 消息简报 – 2026-11-15**

---

### **1. 今日亮点**  
SGLang 项目在稳定基于 Rust 的服务器后端方面持续推进，共合并 14 个 PR，重点完成控制 API 向 `rust-server` 的迁移，全面支持 Ollama、Anthropic 及 Vertex 兼容接口。关键稳定性修复已合并至 `sgl-router`（处理内联系统消息）和 `FP16 Stream-K GEMM`（修复 NaN 输出问题），当前工作聚焦于在容量压力下优化 HiCache 行为，并增强跨平台 NPU 兼容性。

---

### **2. 发布与破坏性变更**  
无。过去 24 小时内未发布新版本或宣布破坏性变更。**SGLang 1.0** 路线图仍处于活跃状态 ([#50045](https://github.com/sgl-project/sglang/issues/50045))，强调稳定性、明确的配置错误提示及向后兼容性策略。

---

### **3. 新模型与硬件支持**  
- **NPU 支持**：通过 `--mamba-ssm-dtype bfloat16` 临时方案，实验性支持 **Ascend 910B** 上的 Qwen3.8-27B GDN 混合模型 ([#50487](https://github.com/sgl-project/sglang/issues/50487))。  
- **Blackwell GPU**：通过 PR [#49795](https://github.com/sgl-project/sglang/pull/49795) 开启可选的 **cuTile NVFP4 W4A4** 运行器，用于 SM12x（RTX 50 系列 Blackwell）上的 MiniMax-M3.1 MoE 专家。  
- **AMD ROCm**：新增对 ROCm 运行路径的探测测试覆盖 ([#50567](https://github.com/sgl-project/sglang/pull/50567))。

---

### **4. 性能与优化**  
- **推测解码**：通过融合注意力门控残差与 norm2 调制，优化 MiniMax-H3 T2VA 推理，降低内核开销 ([#50391](https://github.com/sgl-project/sglang/pull/50391))。  
- **HiCache 效率**：针对 Mooncake 卸载场景下 L2/L3 容量压力导致的缓存命中率下降问题，已修复重复出现的问题 ([#47481](https://github.com/sgl-project/sglang/issues/47481))；新增 `--hicache-mamba-size-gb` 标志，实现主机池更精细控制 ([#47867](https://github.com/sgl-project/sglang/pull/47867))。  
- **调度器**：改进分块预留逻辑，防止在 SPF 策略下编码器重播行资源枯竭 ([#50170](https://github.com/sgl-project/sglang/pull/50170))。  
- **指标监控**：引入可配置的 Prometheus 指标命名风格（`sglang_...`），避免冒号相关收集器问题 ([#45551](https://github.com/sgl-project/sglang/pull/45551))。

---

### **5. 稳定性与回归问题**  
- **严重崩溃**：`FP16 Stream-K GEMM` 在输出为精确零时产生错误的 `NaN` 值——影响数值稳定性的正确性缺陷 ([#50521](https://github.com/sgl-project/sglang/issues/50521))。  
- **模型崩溃**：Qwen-VL 图像预处理因 `torch.cat()` 释放内存失败导致 OOM ([#49796](https://github.com/sgl-project/sglang/issues/49796))。  
- **路由器缺陷**：`/v1/messages` 对内联 `role="system"` 返回 400 错误，因聊天模板处理不当所致 ([#50348](https://github.com/sgl-project/sglang/issues/50348)) —— 已在 PR [#50435](https://github.com/sgl-project/sglang/pull/50435) 中修复。  
- **CUDA 13 兼容性**：使用 CUDA 13 轮子安装后，RTX 50 系列（sm_120）无法直接运行任何模型 ([#49209](https://github.com/sgl-project/sglang/issues/49209)) —— 目前尚无解决方案。

---

### **6. 对应用开发者的启示**  
- **采用 Rust 服务端**：若构建高吞吐代理或集成 Ollama/Anthropic API，建议立即迁移到 `SGLANG_RUST_SERVER=1` —— 核心控制 API 正逐步迁移中。  
- **暂避 `FP16 Stream-K`**，直至 #50521 修复；需使用其他内核以保证数值确定性。  
- **运行混合 Mamba/KDA 模型时**，请使用 `--hicache-mamba-size-gb` 避免主机 KV 缓存缺失。  
- **部署 NPU 时**，在 Ascend 910B 上强制启用 `--mamba-ssm-dtype bfloat16` 以防止运行时崩溃。  
- **期待 v1.0 的配置严谨性**：静默配置变更将被明确错误提示取代——请尽早审计部署脚本。

> 🔗 *完整问题追踪列表：[github.com/sgl-project/sglang/issues](https://github.com/sgl-project/sglang/issues)*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 消息简报 – 2026-11-15**

---

### **1. 今日亮点**  
最新发布系列（b12387–b12376）聚焦于 **Qwen2VL**、**Hexagon（Snapdragon）** 和 **Metal/Vulkan 后端** 的关键稳定性修复，解决了导致垃圾输出或崩溃的严重正确性问题。**推测解码（DFlash）** 和 **持久化磁盘缓存** 方面持续取得进展，新提交（PR）进一步推动了这两项功能的完善。

---

### **2. 发布与破坏性变更**  
- **b12387**：修复 32 位系统上的 `ctz64` 问题 ([#32273](https://github.com/ggml-org/llama.cpp/pull/32273))  
- **b12386**：修复 Hexagon FA 无掩码尾部问题 ([#32243](https://github.com/ggml-org/llama.cpp/pull/32243))  
- **b12385**：为 Qwen2VL 模型应用 FFN 权重缩放——确保推理正确的关键修复 ([#32241](https://github.com/ggml-org/llama.cpp/pull/32241))  
- **b12383**：改进不兼容权重加载时的后端拆分处理 ([#31775](https://github.com/ggml-org/llama.cpp/pull/31775))  

> ⚠️ **迁移提示**：旧批次 API（`llama_batch`）即将弃用，现已正式在 [#32306](https://github.com/ggml-org/llama.cpp/pull/32306) 中追踪。开发者必须在年底前迁移到 `llama_batch_ext`。

---

### **3. 新模型与硬件支持**  
- ✅ **新增模型支持**：  
  - 通过 [#32301](https://github.com/ggml-org/llama.cpp/pull/32301) 添加对 **MiniMax-M3.1** 的支持，包含视觉验证功能。  
  - 添加 **ZONOS3-Mini TTS 模型** 支持 ([#32020](https://github.com/ggml-org/llama.cpp/pull/32020))。  
  - 为 **Recursive Ripple-65B-Preview** 实验性添加 DFlash2 支持 ([#31904](https://github.com/ggml-org/llama.cpp/pull/31904))。  

- ✅ **硬件与后端增强**：  
  - **Hexagon（Snapdragon 7 Gen 4）**：新增 IQ2_XXS 与 NVFP4 支持 ([#31954](https://github.com/ggml-org/llama.cpp/pull/31954))，但早期测试显示当 `n >= 5` 时 HMX MUL_MAT 返回 `inf` ([#29473](https://github.com/ggml-org/llama.cpp/issues/29473))。  
  - **Vulkan**：已合并对初始 PowerVR GPU 的支持 ([#29315](https://github.com/ggml-org/llama.cpp/pull/29315))。  
  - **Metal**：为 `NORM`/`L2_NORM` 操作新增非连续行支持 ([#30778](https://github.com/ggml-org/llama.cpp/pull/30778))。  

---

### **4. 性能与优化**  
- **推测解码（DFlash）**：  
  - 重构基于 DFlash 的推测解码方法，提升模块化与可扩展性 ([#32016](https://github.com/ggml-org/llama.cpp/pull/32016))。  
  - 图级 top-k 排序修复提升了各后端间的一致性 ([#32299](https://github.com/ggml-org/llama.cpp/pull/32299))。  

- **内存与吞吐量**：  
  - **Qwen4Exp**：统一 KV 缓存现在可独立解码每个序列，避免因空闲对话导致的性能下降（此前观察到 -37% 延迟）([#32247](https://github.com/ggml-org/llama.cpp/pull/32247))。  
  - **MTMD**：减少视频像素长宽比与旋转错误；提升解码灵活性 ([#32267](https://github.com/ggml-org/llama.cpp/pull/32267), [#32188](https://github.com/ggml-org/llama.cpp/pull/32188))。  
  - **Jinja 模板引擎**：降低值分配与查找开销 ([#32023](https://github.com/ggml-org/llama.cpp/pull/32023))。  

- **内核优化**：  
  - **OpenCL**：新增基于 GMEM 的专用 Flash Attention 内核 ([#32302](https://github.com/ggml-org/llama.cpp/pull/32302))。  
  - **CUDA**：更新 top-k 内核以保持索引顺序，确保注意力求和一致 ([#32297](https://github.com/ggml-org/llama.cpp/pull/32297))。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 受影响后端 | 影响 | 修复状态 |
|---------|------|------------------|--------|------------|
| 🔴 高 | **启用思考模式时，Qwen3.5 9B 工具调用数据损坏** ([#20837](https://github.com/ggml-org/llama.cpp/issues/20837)) | CPU/CUDA | 频繁出现 XML 工具调用泄露，推理中断 | ❌ 尚无修复 |
| 🔴 高 | **Engram n-gram 历史下，DeepSeek-V4.1-Flash 提示复用损坏** ([#30944](https://github.com/ggml-org/llama.cpp/issues/30944)) | CUDA/Vulkan | 单 token 输出损坏 | ❌ 正在草稿中 |
| 🔴 高 | **Hexagon HMX MUL_MAT 在 `n ≥ 5` 时返回 `inf`** ([#29473](https://github.com/ggml-org/llama.cpp/issues/29473)) | Hexagon/HMVX | 输出混乱，推理不稳定 | ❌ 尚无修复 |
| 🟡 中 | **统一 KV + 并发请求下，CPU→GPU 提示缓存恢复阻塞推理** ([#32280](https://github.com/ggml-org/llama.cpp/issues/32280)) | Vulkan/CUDA | 多用户场景下延迟飙升 | ❌ 尚无修复 |
| 🟡 中 | **Metal 上加载时 FP8 KV 缓存失败（`SET_ROWS` 失败）** ([#32270](https://github.com/ggml-org/llama.cpp/issues/32270)) | Metal | 阻止 Apple Silicon 上使用 FP8 量化 | ❌ 尚无修复 |

> 💡 **注意**：多个高严重性问题仍存在于 **Vulkan**、**Hexagon** 与 **Metal** 后端——尤其集中在推测解码、统一 KV 缓存与量化内存布局方面。

---

### **6. 对应用开发者的意义**  
- **尽早迁移**：立即开始从 `llama_batch` 迁移到 `llama_batch_ext`——弃用已迫在眉睫 ([#32306](https://github.com/ggml-org/llama.cpp/pull/32306))。  
- **避免高风险后端**：在修复落地前，请勿将 **Hexagon** 或 **Qwen3.5/Qwen4Exp** 模型用于生产环境——存在关键正确性缺陷。  
- **启用磁盘缓存**：使用 `--cache-disk`（正在通过 [#32303](https://github.com/ggml-org/llama.cpp/pull/32303) 推进）以避免长时间运行的代理重复预填充提示。  
- **监控推测解码**：基于 DFlash 的系统仍属实验阶段——务必在负载下充分测试，尤其是统一 KV 与大上下文窗口场景。  
- **优先稳定模型**：优先选择经过验证的稳定推理模型（如 Gemma、Llama、Qwen2），而非实验分支如 `deepseek41`。  

> 📌 **实用建议**：对于需要低延迟推理的代理，优先考虑 **Metal（Apple Silicon）** 或 **CUDA** 构建——目前应避开 Vulkan 与 Hexagon，因其存在未解决的回归问题。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-15**

---

### **1. 今日亮点**  
Ollama 生态系统持续扩展其社区集成与基础设施健壮性，关键贡献聚焦于提升可观测性、增强 Qwen 模型解析器的容错能力，并实现更广泛的硬件兼容性。值得注意的是，社区正积极推动通过 OpenVINO 支持 Intel NPU，凸显了对跨多样化硅基平台原生 AI 加速的日益增长的需求。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未检测到新版本发布或破坏性变更。*

---

### **3. 新模型与硬件支持**  
- **Intel NPU 后端（请求）**：一项高优先级功能请求（#19535）呼吁原生集成 OpenVINO，以使 Ollama 能够利用 AI PC 上的 Intel Core Ultra NPU（如 MSI Stealth 16）。目前这些 NPU 在推理过程中仍处于低效使用状态。  
  🔗 [Issue #19535](https://github.com/ollama/ollama/issues/19535)  

- **模型托管请求**：社区成员请求在 Ollama Cloud 上公开托管 `prometech_corp/prettybird_bce_basic_14b_coder` 的 FP16 版本（#13503），反映出对云环境中可访问、高质量开源模型的强烈需求。  
  🔗 [Issue #13503](https://github.com/ollama/ollama/issues/13503)

- **新增社区集成**：  
  - **PipesHub** 已加入 RAG 与知识库功能 ([PR #19703](https://github.com/ollama/ollama/pull/19703)) — 支持在 Slack、Google Drive、Jira 及 Microsoft 365 上实现企业级搜索。  
  - **SynapCores** 已加入数据库与嵌入功能 ([PR #19702](https://github.com/ollama/ollama/pull/19702)) — 自托管的 SQL/向量数据库，提供与 Ollama 兼容的 API。  
  - **ForgeMind** 已加入移动端聊天界面 ([PR #19700](https://github.com/ollama/ollama/pull/19700)) — 支持本地网络与 Tailscale 发现的 Android 应用。  
  - **inference-vitals** 已加入可观测性与监控功能 ([PR #19697](https://github.com/ollama/ollama/pull/19697)) — 本地仪表板，用于追踪每秒令牌数、延迟和系统负载。

---

### **4. 性能与优化**  
- **显存计账修复**：PR #19632 修复了导致模型错误驱逐、加载失败及多 GPU 分割不合理的显存计账严重缺陷，解决了多个问题（#19463、#18679、#18349、#16599）。该修复提升了内存效率，增强了多 GPU 利用率。  
  🔗 [PR #19632](https://github.com/ollama/ollama/pull/19632)  

- **推测解码优化**：PR #19663 优化了 `mlxrunner` 中的推测验证批处理机制，允许在重叠请求期间持续生成草稿——这对使用 MTP/DFlash/DFlash2 的模型至关重要，有助于在并发工作负载中维持速度优势。  
  🔗 [PR #19663](https://github.com/ollama/ollama/pull/19663)  

- **工具调用解析器容错性增强**：PR #16398 为 Qwen3.6 与 Qwen3-coder 的工具调用引入格式漂移容忍机制，防止因模型输出微小变化而导致解析失败。  
  🔗 [PR #16398](https://github.com/ollama/ollama/pull/16398)

---

### **5. 稳定性与回归问题**  
- **Windows 长提示崩溃**：问题 #19696 报告，在处理超长提示（>70k 字符）时，Windows 系统约 19 秒后出现间歇性 HTTP 500 错误（`chat prompt error`、`wsarecv reset`）。在代理工作流中可复现，通常重试即可成功。目前尚未有修复 PR。  
  🔗 [Issue #19696](https://github.com/ollama/ollama/issues/19696)  

- **WSL2 GPU 内存限制**：问题 #19519 显示，尽管 NVIDIA RTX Spark N1X 笔记本电脑具备 80GB 统一 GPU 内存，但在 WSL2 中仅能卸载模型的一小部分，原因在于宿主操作系统内存限制。  
  🔗 [Issue #19519](https://github.com/ollama/ollama/issues/19519)  

- **Qwen 工具调用数据损坏**：问题 #19694 记录了根据内容与流式分块方式，工具调用参数丢失或损坏的情况，尤其影响 `qwen3.5` 与 `qwen3-coder` 解析器。  
  🔗 [Issue #19694](https://github.com/ollama/ollama/issues/19694)  

- **CLI 在短摘要时崩溃**：PR #14251 修复了当模型摘要长度小于 12 个字符时，`ollama list` 命令触发运行时恐慌的问题。  
  🔗 [PR #14251](https://github.com/ollama/ollama/pull/14251)  

---

### **6. 对应用开发者的启示**  
- **构建容错代理**：预计在 Windows 环境下处理长提示时可能出现间歇性崩溃——应实现重试逻辑并监控 `wsarecv reset` 错误。  
- **善用社区集成**：使用 PipesHub 实现企业级知识检索，使用 SynapCores 搭建本地向量数据库，使用 ForgeMind 实现移动端接入——均与 Ollama 兼容。  
- **准备异构部署**：随着 Intel NPU 支持成为重点，建议设计具备后端无关推理路径的应用程序（通过 OpenVINO 等技术实现）。  
- **期待模型稳定性提升**：显存修复与解析器容错性改进意味着模型加载与工具调用过程中的静默失败将减少——对生产环境中的 LLM 协调尤为关键。  
- **密切监控性能表现**：推测解码优化现已启用，请确保客户端能够受益于批处理草稿机制——这正是高吞吐量代理系统的理想配置。

---  
*数据来源：github.com/ollama/ollama | 更新时间：2026-11-15*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-11-15**

---

### **1. 今日亮点**  
LiteLLM 生态系统持续推动高性能、安全且可扩展的推理服务，发布了 `v1.110.0-rc.3` 和 `v1.108.9` 版本，两者均已通过 Cosign 签名以保障供应链完整性。关键进展包括路由器中针对拥塞感知的请求队列基础工作（PR #51892, #51883），以及将 Prometheus 指标系统重构为 Rust 以降低开销并提升吞吐量（PR #51541）。这些变更奠定了高负载下更高可靠性的基础。

---

### **2. 发布与破坏性变更**  
- **`v1.110.0-rc.3` 与 `v1.108.9` 已发布**：两个版本均使用 Cosign 签名，密钥来自 [commit `e82a3c6`](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065)。  
  🔐 *验证签名*：请使用 `cosign verify` 并配合引用提交中的公钥进行校验。  
  📌 **注意**：未报告破坏性 API 变更；当前重点仍为稳定性和安全性加固。

- **弃用警告**：`fix(config): warn about removed accounting settings` ([PR #51869](https://github.com/BerriAI/litellm/pull/51869)) 在运行时对已废弃的 `accounting_capture` 或 `accounting_sync_ack` 设置添加警告——这些配置已不再生效。

---

### **3. 新模型与硬件支持**  
本周期未新增模型或硬件后端。但：
- 已集成 Z.AI 的 `glm-5.1` 模型定价信息 ([PR #27782](https://github.com/BerriAI/litellm/pull/27782))，使通过 Z.AI 的 Anthropic 兼容端点路由的用户能够实现精准成本追踪。
- 代理现已支持 **基于 MCP 的 OpenAI 风格 Skills 路由**（开发中）——详见 [Issue #37074](https://github.com/BerriAI/litellm/issues/37074) 与 [PR #51877](https://github.com/BerriAI/litellm/pull/51877)，未来将提供支持。

---

### **4. 性能与优化**  
- **基于 Rust 的性能改进**正在核心组件中逐步部署：  
  - Prometheus 指标日志已替换为 Rust 回调函数（PR #51541），显著降低 CPU 开销并提升可扩展性。  
  - 并行请求限流器与动态速率限制 v3 已迁移到 Rust（PR #51537, #51540）——预计在高峰负载下可减少延迟尖峰。  
  - S3 日志后端已重构为仅使用 `s3_v2`（PR #51893），简化了 I/O 路径并减少内存碎片。

- **引入拥塞感知请求队列**：  
  - `PR #51892` 与 `#51883` 实现了对 429/529 错误的优先级队列机制，在服务提供商过载时保留 P0 请求。  
  - 基于 Redis 的协调机制确保各代理实例间行为一致。

---

### **5. 稳定性与回归问题**  
今日报告的主要问题：

| 严重程度 | 问题 | 状态 | 影响 | 修复 PR |
|---------|------|--------|--------|--------|
| ⚠️ 高 | `/v1/responses` 预算预留因缺少 `max_output_tokens` 转发而错位 | 开放 | 多用户环境下可能导致超额计费 | [`#51445`](https://github.com/BerriAI/litellm/issues/51445) |
| ⚠️ 高 | 流式请求在客户端断开前首个数据块发送前未被取消（`v1.107.0` 中引入的回归） | 开放 | 浪费计算资源并推高成本 | [`#51393`](https://github.com/BerriAI/litellm/issues/51393) |
| ⚠️ 高 | `Gemini 图像请求` 返回 200 OK 但跳过 SpendLogs（静默失败） | 开放 | 破坏成本监控与审计追踪 | [`#49567`](https://github.com/BerriAI/litellm/issues/49567) |
| ⚠️ 中 | `MCP tools/list` 在升级至 v1.108.0 后，旧客户端出现卡死 | 开放 | 阻碍代理工具发现 | [`#50065`](https://github.com/BerriAI/litellm/issues/50065) |
| ⚠️ 中 | `utils.py` 中对未知模型映射抛出 `ModelNotMappedError` | 开放 | 影响集成测试 | [`#51452`](https://github.com/BerriAI/litellm/issues/51452) |

> ✅ **注意**：多个修复正在进行中（如 `PR #51894` 回滚支出日志修复），但尚未合并。

---

### **6. 对应用开发者的影响**  
- 若你重视安全与稳定性，建议在生产环境中使用 `v1.110.0-rc.3` 作为代理版本——签名已验证，关键缺陷正在修复中。  
- 在 [`#51445`](https://github.com/BerriAI/litellm/issues/51445) 修复前，请避免仅依赖 `max_tokens` 进行 `/v1/responses` 的预算控制；应显式指定 `max_output_tokens`。  
- **监控流式请求取消行为**：若你的应用依赖早期客户端断开处理，请在 `v1.107.0+` 上测试，并预期首次数据块前存在延迟；可考虑回退版本直至修复上线。  
- **准备使用即将推出的功能**：关注 `disallowed_models` 按密钥粒度控制（PR #50333）和可配置的 `banned_request_body_params`（#51765），以加强访问控制。  
- **预期指标采集更快、延迟更低**：随着 Rust 组件逐步上线，尤其对高吞吐量代理系统将带来显著收益。

➡️ **可操作建议**：检查配置中是否存在已弃用的会计设置，并更新任何对 `COHERE_API_BASE` 的嵌入使用（参见 [`#50248`](https://github.com/BerriAI/litellm/issues/50248)）。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth 消息简报 – 2026-11-15**

---

### **1. 今日亮点**  
Unsloth 团队正在推进核心推理能力，桌面版在 **语音模式集成** 方面取得重大进展，支持通过 audio.cpp 实现免提聊天，具备实时语音合成与发言轮次检测功能。在基础设施方面，已开始实现对 **原生 DeepSeek-V4.1** 的支持，以及针对 Qwen3.8-Flash-Next 的 **FSDP2/TP/PP 优化**，标志着更强的多 GPU 扩展能力。同时，关键的 ROCm 兼容性修复工作也在进行中，尤其聚焦于 GDN 因果卷积 conv1d 的回退机制和混合线性注意力性能问题。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新发布。*  
但 **Unsloth Desktop v0.1.917-beta**（包版本 2026.11.4）引入了破坏性变更：  
- `--load-mode none` 现在 **强制使用 mmap**，导致内存与固态硬盘消耗过高（参见 [Issue #17605](https://github.com/unslothai/unsloth/issues/17605)）。用户应在修复上线前避免使用此标志。  
- **“显示发布说明”按钮无法加载变更日志**，表明存在 UI 或后端配置问题（[Issue #17661](https://github.com/unslothai/unsloth/issues/17661)）。

---

### **3. 新模型与硬件支持**  
- ✅ **原生 DeepSeek-V4.1**：通过 `unsloth/models/deepseek_v41` 实现一流模型支持，包含稀疏注意力、fp8/MXFP4 版本释放加载及 engram 表 —— 彻底摆脱对社区 Hugging Face 版本的依赖（[PR #17778](https://github.com/unslothai/unsloth/pull/17778)）。  
- ✅ **Qwen3.8-Flash-Next FSDP2/TP/PP**：完整分布式训练支持，冻结的 n-gram 表在分片间保持一致（[PR #17785](https://github.com/unslothai/unsloth/pull/17785)）。  
- 🔧 **ROCm 7.14 / MI300X (gfx942)**：`_scaled_dot_product_flash_attention_backward` 中存在已知的步长断言问题，需启用 MATH 回退；已有确认的临时方案但尚未解决（[Issue #17548](https://github.com/unslothai/unsloth/issues/17548)）。  
- 📱 **iOS 主屏幕图标修复**：PR #17776 添加 `apple-touch-icon.png` 以解决占位文本图标问题（[Issue #17773](https://github.com/unslothai/unsloth/issues/17773)）。

---

### **4. 性能与优化**  
- ⚠️ **Qwen3.8-Flash-Next UD 3.1 GGUF**：在生产温度下使用当前 MTP 头部时，草稿接受率从约 74% 下降至 56–66%，表明新权重与现有草稿逻辑之间可能存在不匹配（[Issue #17402](https://github.com/unslothai/unsloth/issues/17402)）。修复可能需要更新 MTP 头部。  
- 💥 **ROCm 混合线性注意力**：尽管通过精确性探测，但在 gfx1151 上未带来净提速 —— 步数减半但每步耗时翻倍（约 3.1 倍开销），表明内核效率低下（[Issue #17738](https://github.com/unslothai/unsloth/issues/17738)）。  
- 🚀 **语音模式优化**：桌面版免提语音模式正重构为将音频模型与聊天模型常驻内存，降低延迟并提升响应速度（[PR #12384](https://github.com/unslothai/unsloth/pull/12384)、[#14084](https://github.com/unslothai/unsloth/pull/14084)、[#17069](https://github.com/unslothai/unsloth/pull/17069)）。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 链接 |
|---------|------|--------|------|
| 高 | llama.cpp CUDA 升级后（b12340-mix-6186f42）`mtp 停止工作` | 开放 | [Issue #17733](https://github.com/unslothai/unsloth/issues/17733) |
| 高 | `--load-mode none` 强制 mmap → 高内存/固态硬盘占用 | 开放 | [Issue #17605](https://github.com/unslothai/unsloth/issues/17605) |
| 中 | ROCm GDN 因果卷积 conv1d 在 gfx1151 上回退至 MIOpen（步开销增加 3.1 倍） | 开放 | [Issue #17734](https://github.com/unslothai/unsloth/issues/17734) |
| 中 | Docker 环境中 audio.cpp 更新因“无效跨设备链接”失败 | 已关闭 | [Issue #17638](https://github.com/unslothai/unsloth/issues/17638) |
| 低 | Studio 转录长时间音频时因缺少 `max_tokens` 失败 | 已关闭 | [Issue #17598](https://github.com/unslothai/unsloth/issues/17598) |

> ✅ **已有修复合并的 PR 包括：**  
> - iOS 图标：[PR #17776](https://github.com/unslothai/unsloth/pull/17776)  
> - 默认模型设置：[PR #17777](https://github.com/unslothai/unsloth/pull/17777)  
> - 项目文件夹嵌套：[PR #17779](https://github.com/unslothai/unsloth/pull/17779)

---

### **6. 对应用开发者的启示**  
- **立即采用原生 DeepSeek-V4.1** 进行训练与推理，无需依赖不稳定的社区版本。使用 `UNSLOTH_FSDP2=1` 实现可扩展的多 GPU 训练。  
- **在生产环境中避免使用 `--load-mode none`**，直到 mmap 回归问题修复 —— 否则可能导致大模型严重内存压力。  
- **监控 UD 3.1 GGUF 的草稿头部兼容性** —— 若未发布匹配的头部，预计草稿接受率将下降。  
- **基于新语音模式栈（audio.cpp + 实时发言轮次检测）构建语音代理**；以 PR #12384、#14084、#17069 为基础进行开发。  
- **确保 ROSA/ROCm 用户在 gfx1151/gfx942 上进行测试** —— 混合线性注意力无提速效果，且 GDN 回退会显著降低性能。  

> 💡 *技巧提示：* 谨慎使用 `UNSLOTH_EXPERIMENTAL_HYBRID_PACKING=1` —— 它通过精确性检查，但在部分 AMD 显卡上无实际收益。部署前请务必监控性能基准。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*