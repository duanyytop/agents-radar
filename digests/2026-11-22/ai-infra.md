# AI 基础设施日报 2026-11-22

> 生成时间: 2026-11-22 02:37 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-11-22**

---

### **1. 生态概览**  
AI推理与服务生态正进入深度专业化与硬件融合的新阶段，各项目迅速根据目标层级（服务、本地运行时、网关、训练）和平台（NVIDIA Blackwell、AMD MI355X/M300X、Apple M4、Intel XPU）进行分化。性能优化不再仅关乎吞吐量，而是深度关联内核效率、内存布局、推测解码稳定性及跨平台一致性。混合模型（MoE、循环注意力）、量化LoRA以及扩散流水线的兴起正在加速基础设施层面的创新，而安全、成本追踪与结构化输出保真度已成为生产环境中的不可妥协要求。

---

### **2. 活动对比**

| 项目 | 开放问题数 | 近24小时合并的PR数 | 发布状态 |
|--------|-------------|------------------------|----------------|
| **vLLM** | 872 | 9 | 无 |
| **SGLang** | 745 | 12 | v1.0路线图活跃；预计存在破坏性变更 |
| **llama.cpp** | 1,038 | 10 | 无破坏性变更；修复已合并 |
| **Ollama** | 1,114 | 5 | 待`--no-animation`、分拆GGUF支持 |
| **LiteLLM** | 567 | 8 | 开发版（`v1.112.0-dev.2`），含安全验证 |

> 🔍 *洞察*：**Ollama** 在问题数量上领先（反映高用户反馈量），而**SGLang** 展现出最强的开发活跃度。**LiteLLM** 凭借可验证的安全开发版本脱颖而出——这对企业信任至关重要。

---

### **3. 模型支持竞赛**

| 新模型 / 架构 | 支持项目 | 备注 |
|--------------------------|--------------|-------|
| **Inkling-2-Mini (GGUF)** | ✅ **llama.cpp**, **Ollama**, **Unsloth** | 通过`inkling2_loop`和`inkling2v`实现完整GGUF支持；Ollama在Windows上仍因架构识别失败 |
| **MiniCPM5-15B-A2.5B (GQA MoE)** | ✅ **vLLM** | 原生支持，使用FP32 sigmoid MoE路由 |
| **Qwen3.8-2.4T-A95B (MI355X)** | ✅ **vLLM**, **SGLang** | ROCm优化进行中；SGLang新增块缩放LoRA MoE |
| **Hy4-flash-FP8 (Tencent)** | ✅ **vLLM**, **SGLang** | ROCm验证通过；vLLM启用DFly推测解码 |
| **Krea 2 / Wan2.2-T2V** | ✅ **Unsloth** | 完整支持LoRA/QLoRA训练；视频蒸馏功能已启用 |
| **Maxwell-V1 MoE (总计35B)** | ✅ **llama.cpp** | 已添加完整图结构、分词器、转换器支持 |
| **Gemini 4+ 交互式API** | ✅ **LiteLLM**（进行中） | PR #53469 将聊天补全路由至新Google路径——缩小兼容差距 |

> 🏆 **领先者**：**vLLM** 与 **SGLang** 在 **ROCm/AMD** 及 **MoE/LoRA** 模型支持上领先。**Unsloth** 在 **扩散 + 训练** 集成方面占优。**LiteLLM** 在 **多提供商多样性与结构化输出路由** 上表现突出。

---

### **4. 性能前沿**

| 关注领域 | 领先项目 | 关键进展 |
|-----------|------------------|------------------|
| **KV缓存与前缀优化** | vLLM, SGLang, Ollama | vLLM修复前缀缓存损坏；SGLang提升prefill连续性；Ollama出现超过64K token的缓存驱逐现象 |
| **推测解码** | vLLM, SGLang, llama.cpp | vLLM：H200上DSpark失效；SGLang：4×B200下达2355 tok/s；llama.cpp：FA修复后DSpark最高达80 tok/s |
| **量化与内核创新** | vLLM, SGLang, Unsloth | vLLM用**Humming**后端替换Marlin；SGLang支持**完全量化LoRA MoE**（FP8, MXFP4）；Unsloth新增W8A8 int8基础模型 |
| **分布式服务与扩展** | SGLang, vLLM | SGLang引入数据并行LoRA训练；vLLM聚焦多GPU协调 |
| **Flash Attention与内存效率** | llama.cpp, vLLM | llama.cpp：紧凑偏置Flash Attention降低内存开销；vLLM：SM120 CUDA图问题持续存在 |

> 🔥 **热点**：**Blackwell（SM120）** 是当前主要性能战场——所有主流引擎均报告关键回归或调优需求。**ROCm/AMD** 也正成为关键前沿，实时优化工作密集展开。

---

### **5. 层级定位**

| 项目 | 主要层级 | 在栈中的角色 |
|--------|---------------|---------------|
| **vLLM** | **推理引擎** | 高吞吐、低延迟服务；优化内核、推测解码、全GPU卸载 |
| **SGLang** | **推理引擎 + 网关** | 生产级引擎，具备健全配置校验、结构化输出与调度能力 |
| **llama.cpp** | **本地运行时 / 边缘推理** | 聚焦CPU/GPU/MLX/Vulkan；适用于离线、轻量或异构部署 |
| **Ollama** | **本地运行时 + 开发者网关** | 简化命令行/工具链用于本地推理；连接GGUF模型与开发者工作流 |
| **LiteLLM** | **LLM网关 / 聚合器** | 多提供商路由、成本追踪、响应格式化、OAuth处理——核心编排层 |
| **Unsloth** | **微调 / 训练框架** | 专精于LoRA/QLoRA训练、扩散、多GPU数据并行 |

> 💡 **架构洞察**：清晰的分层正在形成：
- **引擎层**：vLLM、SGLang
- **运行时层**：llama.cpp、Ollama
- **网关层**：LiteLLM
- **训练层**：Unsloth

这反映了生态日趋成熟，各项目在其专属领域不断深化。

---

### **6. 趋势信号**

1. **硬件分化正在加速**  
   - NVIDIA Blackwell（SM120）与AMD MI355X现已成为**首要优化目标**——不再是事后考虑。  
   - 如vLLM与SGLang等项目正大力投入**针对这些平台的内核级调优**，表明硬件特定性能将成为竞争壁垒。

2. **MoE + LoRA + 量化已成为新标准**  
   - 所有项目现已支持**量化LoRA MoE**（SGLang、vLLM、Unsloth）。  
   - 从传统内核（Marlin）转向现代后端（Humming）的趋势，显示向**统一、可扩展的量化方案**演进。

3. **结构化输出与成本控制已成为刚性要求**  
   - LiteLLM对Gemini 4+的路由与成本导出修复，反映出对**精确计费与结构化响应**的强烈需求。  
   - 开发者必须围绕**响应格式保真度**、**令牌计数准确性**与**安全策略**进行设计——而不仅是追求速度。

4. **稳定性优先于新颖性**  
   - 尽管功能快速迭代，但**关键稳定性问题仍占主导地位**（如崩溃、无声数据损坏、内存溢出）。  
   - 这表明行业正从“能否运行”转向“能否在大规模下可靠运行”。

5. **开发者体验至关重要**  
   - `--no-animation`、`vllm.Render`、`metadata-only media items`、`UNSLOTH_MEMORY_REPORT`等功能，显示出对**可观测性、调试与CI/CD集成**的日益关注。

---

### ✅ **面向应用开发者的可操作建议**
- **用于生产推理**：在NVIDIA/AMD平台上优先选用**vLLM**或**SGLang**以获得最佳性能与稳定性——避免在Blackwell上使用`--enforce-eager`。
- **用于边缘/本地代理**：推荐使用**llama.cpp**或**Ollama**搭配GGUF模型——确保在非UMA设备上测试Vulkan/Metal构建。
- **用于多提供商应用**：**LiteLLM** 是最成熟的网关——充分利用其成本追踪与结构化输出功能。
- **用于微调与训练**：**Unsloth** 提供最先进的LoRA/扩散工具链——尤其适合多GPU场景。
- **需关注**：**SGLang v1.0** 的破坏性变更、**vLLM的Humming迁移**，以及**Ollama的分拆GGUF支持**——及时更新你的CI/代理流水线。

> 📌 **最终提示**：AI基础设施栈已不再单一。请根据**你的硬件、部署模式与运维需求**进行选择——“一刀切”的时代已经结束。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

### **vLLM Digest — 2026-11-22**

---

#### **1. 今日亮点**  
vLLM 项目持续推进全 Rust 前端功能对齐及 ROCm/AMD 硬件优化，重点针对 Blackwell（SM120）和 MI355X 平台开展关键性能调优。核心工作包括：稳定 H200/DGX Spark 上的推测解码、修复 HF3FS KV 连接器加载失败问题，并在 NVIDIA 各架构上加速将旧版 Marlin 内核替换为更现代的 Humming 量化后端。

---

#### **2. 发布与破坏性变更**  
*无*  
过去 24 小时内未发布新版本或破坏性 API/配置变更。

---

#### **3. 新模型与硬件支持**  
- ✅ **新增模型支持**：  
  - 通过 PR [#69127](https://github.com/vllm-project/vllm/pull/69127) 添加对 `MiniCPM5-15B-A2.5B` 的原生支持，包含受控 GQA 和 FP32 sigmoid MoE 路由。  
  - 通过 PR [#68839](https://github.com/vllm-project/vllm/pull/68839) 在 ROCm（MI355X）上启用 `tencent/Hy4-flash-FP8` 与 `tencent/Hy4-flash`，并支持 DFly 推测解码。

- ✅ **硬件与后端扩展**：  
  - AMD ROCm：通过 PR [#69179](https://github.com/vllm-project/vllm/pull/69179)，在 gfx942（MI300X/M325X）的 AITER Triton W4A16 后端中添加对 `MiniMax-M3.1-Flash-Quark-MXFP4` 与 `MiniMax-M3-MXFP4` 检查点的支持。  
  - Intel GPU：通过 PR [#68858](https://github.com/vllm-project/vllm/pull/68858) 引入 XPU 的 `modelopt_mxfp8` 量化格式。

---

#### **4. 性能与优化**  
- 🔥 **Blackwell（SM120）重点**：  
  - 针对 RTX PRO 6000 Blackwell（SM120）上的 `DeepSeek-V4.1-Flash` 持续进行性能调优，因 `--enforce-eager` 下解码吞吐量极低且 CUDA Graph 无法使用——已在 issue [#56892](https://github.com/vllm-project/vllm/issues/56892) 中请求优先修复。  
  - 修复自 v0.31.0 起破坏短请求保护机制的 `--long-prefill-token-threshold` 回退问题 ([#60476](https://github.com/vllm-project/vllm/issues/60476))。

- 📈 **ROCm/AMD 优化**：  
  - 通过 issue [#57149](https://github.com/vllm-project/vllm/issues/57149) 跟踪 `Qwen3.8-2.4T-A95B`（gfx950 / MI355X）的性能优化计划。  
  - 通过 PR [#64018](https://github.com/vllm-project/vllm/issues/64018) 对 `Muse Spark Open PTPC-FP8`（gfx942）实施逐层内核优化。  
  - 多个并行提交改进了 gfx1151 上 W4A16 的注意力片段启动与延迟缩放内核（[#67388](https://github.com/vllm-project/vllm/pull/67388), [#68516](https://github.com/vllm-project/vllm/pull/68516)）。

- ⚙️ **量化与内核改进**：  
  - 计划在所有 NVIDIA 架构上用 **Humming** 替代旧版 Marlin 内核（[#65560](https://github.com/vllm-project/vllm/issues/65560)），其支持 INT4/INT8 GPTQ/AWQ、FP8、MXFP8、MXFP4、NVFP4、MXFP6 以及 INT8/FP8 激活。  
  - 通过 PR [#66675](https://github.com/vllm-project/vllm/pull/66675) 调整 Marlin 以适配 SM120/SM121 上的 Mamba2 NVFP4 投影。

---

#### **5. 稳定性与回归问题**  
- ⚠️ **严重崩溃与故障**：  
  - **HF3FS KV 连接器加载失败**：报告加载“已完成”但未返回块 ID，导致错误的前缀缓存命中并引发无声数据损坏（[#69058](https://github.com/vllm-project/vllm/issues/69058)）。已在 PR [#69095](https://github.com/vllm-project/vllm/pull/69095) 中修复。  
  - **主机内存崩溃**：在 DGX Spark（GB10）上启动引擎时因 `NV_ERR_NO_MEMORY` 崩溃，尽管主机内存剩余 22 GiB（[#56824](https://github.com/vllm-project/vllm/issues/56824)）。  
  - **DSpark 推测解码中断**：由于 DSpark 与 DFlash 共享代码路径假设，导致在 H200 夜间构建中失败（[#50851](https://github.com/vllm-project/vllm/issues/50851)）。

- ⚠️ **性能下降**：  
  - 使用 `ROCM_ATTN` 草稿后端时，DFlash2 在批量请求下接受长度急剧下降（[#53323](https://github.com/vllm-project/vllm/issues/53323)）。  
  - 在启用 `--enforce-eager` 的 SM120 GPU 上解码吞吐量偏低——CUDA Graph 捕获不可用（[#56892](https://github.com/vllm-project/vllm/issues/56892)）。

---

#### **6. 对应用开发者的影响**  
- **谨慎使用 Blackwell（SM120）**：避免使用 `--enforce-eager`，并预期吞吐量低于预期，直到 CUDA Graph 修复落地。持续关注 `DeepSeek-V4.1-Flash` 与 `Qwen3.8` 系列的回归问题。  
- **优先选用 ROCm 进行 AMD 推理**：若部署于 MI355X/M300X，建议优先采用 `Qwen3.8`、`Hy4-Flash` 与 `MiniMax-M3` 模型——这些模型已验证并正在进行性能优化。  
- **避免不稳定推测解码路径**：在修复合并前，不要依赖 H200 上的 `DSpark` 或 `ROCM_ATTN` 草稿后端下的 `DFlash2`。  
- **为未来量化迁移做准备**：从 Marlin 切换至 Humming 将最终移除旧版内核；请确保部署流程可应对此过渡（追踪于 [#65560](https://github.com/vllm-project/vllm/issues/65560)）。  
- **利用新渲染功能**：`vllm.Render` 服务（PRs [#65993](https://github.com/vllm-project/vllm/pull/65993), [#65994](https://github.com/vllm-project/vllm/pull/65994)）支持本地渲染并附带 JSON/SSE 包装——非常适合网关侧令牌处理与结构化输出工作流。

---  
*本摘要基于 GitHub 活动生成：[vllm-project/vllm](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 消息简报 – 2026-11-22

---

### **1. 今日亮点**

SGLang 项目持续推进 **SGLang 1.0** 的开发，重点聚焦于稳定性、配置验证的强化以及生产环境部署所需的健壮性。关键进展包括：跨多个后端（FP8、MXFP4、NVFP4）的**量化 LoRA MoE 支持**持续开发中；针对 **Blackwell 架构 GPU（sm_120）** 和 **AMD MI300X** 的新优化；以及对 **PD 分离式调度竞争条件** 和 **推测解码内存溢出** 的关键修复。

---

### **2. 发布与重大变更**

- **SGLang 1.0 发布追踪 (#50045)**：路线图已启动并聚焦于现有功能的加固。从 `0.5.x` 升级可能需要调整，因为配置校验更加严格，并引入了对无效设置的显式错误提示。详见 [升级说明](https://github.com/sgl-project/sglang/issues/50045#upgrade-notes)。
- **安全通告**：此前通过 [GHSA-74p5-rgj8-w57v](https://github.com/sgl-project/sglang/security/advisories/GHSA-74p5-rgj8-w57v) 报告了一个高危问题——`max_new_tokens` 和 `n` 无边界可导致调度器被独占。该问题已在内部版本中修复；用户应尽快升级。

---

### **3. 新模型与硬件支持**

- **RTX 50 系列（sm_120 / Blackwell）**：多个问题指出与 CUDA 13 轮子（wheel）存在兼容性问题（`#49209`, `#51628`）。社区正在积极解决 Triton 内核编译卡顿及开箱即用模型执行失败的问题。
- **AMD MI300X（gfx942/gfx95）**：PR #51746 与 #51921 引入基于 CK 的 bpreshuffle 内核优化的 FP8 GEMM 以及块缩放的 LoRA MoE 提供者，旨在提升 ROCm 平台性能。
- **NPU（Ascend A2，华为）**：持续支持混合模型如 `Qwen3.8-27B` 在 A2 32GB 系统上的运行，但存在一个缺陷：当 KV 缓存池大小小于输入长度时，输出会被静默截断（`#50443`）。
- **扩散模型**：RFC #51383 针对扩散模型（如 MiniMax-H3）的冷启动优化，目标是实现启动时间低于 20 秒。

---

### **4. 性能与优化**

- **推测解码效率**：  
  - PR #50032 降低了单步批处理为 1 的推测解码循环中的主机开销，对低延迟架构（如 DeepSeek-V4.1-Flash）至关重要。  
  - PR #51636 通过重叠解码路径投影并减少 CUDA graph 内存使用，在 4×B200 上提升了吞吐量——在 8K/1K 提示/响应场景下达到 **约 2355 tokens/sec** 的稳定状态。
- **MoE 与 LoRA 优化栈**：  
  - 八部分合并请求系列（#48319, #51917–#51924）实现了 **全量化 LoRA MoE**（FP8、MXFP4、NVFP4），采用融合内核和优化执行计划。在 SM100 上，通用预填充计划现在可重叠基础 GEMM 与 gate/up-A 计算。
- **GDN 预填充优化**：PR #51815 在 SM90 上预填充图捕获期间启用基于 Triton 的 GDN 内核，避免不必要的中断，提升连续性。
- **内核编译**：PR #51628 解决了因 `Mamba2 _chunk_scan_fwd_kernel` 运行时编译导致的长预填充阻塞问题——修复方案是在引擎初始化阶段预先编译。

---

### **5. 稳定性与回归问题**

| 严重性 | 问题 | 描述 | 状态 |
|--------|------|-------------|--------|
| 严重 | [#51980](https://github.com/sgl-project/sglang/issues/51980) | PD 分离式解码请求错误复用 `bootstrap_room`，返回另一请求的输出，HTTP 状态码为 200 | 开放 |
| 高 | [#51188](https://github.com/sgl-project/sglang/issues/51188) | 主机固定预算耗尽导致 24GB GPU + 32GB 主机上 MiniMax-H3 OOM；服务报告就绪但返回 503 | 开放 |
| 高 | [#51175](https://github.com/sgl-project/sglang/issues/51175) | 混合型 GDN 上的推测状态预留随草稿长度增长而增加——16 块草稿在 72GB GPU 上失败 | 开放 |
| 中等 | [#49209](https://github.com/sgl-project/sglang/issues/49209) | sm_120（Blackwell）无法使用 CUDA 13 轮子安装运行任何模型 | 开放 |
| 中等 | [#51531](https://github.com/sgl-project/sglang/issues/51531) | `--mamba-ssm-dtype bfloat16` 导致 MATH-500 得分相比 float16 下降约 8 分 | 开放 |

> ✅ **今日合并的修复**：  
> - #52189：为自托管 GPU 运行器添加 CI 诊断工作流（仅读取元数据探针）。  
> - #52171：防止请求日志缓冲区在高负载下导致工作线程停滞。  
> - #52180：修复 `llguidance` 语法 EOS 处理的边缘情况。

---

### **6. 对应用开发者的意义**

- **预计 v1.0 将有破坏性变更**：尽早验证所有 `sampling_params` 与 `generation_config` 输入——静默配置漂移将被显式错误取代。
- **若使用自定义分词或需底层控制**，请使用 `--skip-tokenize` 与 `--skip-detokenize`（需求来自 #51188）。
- **避免无边界 `max_new_tokens`/`n`**：这些可能导致其他请求饥饿——应在客户端设置限制，或使用服务器端强制的 `--max-new-tokens`。
- **多模态应用**：使用 `metadata-only media items`（RFC #51316），在 P/D 分离推理中减小数据载荷。
- **高安全敏感应用**：在 `/generate` 接口强制执行渲染指纹检查（RFC #51315），防止伪造客户端越权访问。
- **若部署于 Blackwell 或 AMD 平台**：关注 `sm_120` 与 `gfx942` 相关未解决问题——预计在内核修复落地前会存在临时不稳定性。

> 🔗 **可操作链接**：  
> - [SGLang 1.0 路线图](https://github.com/sgl-project/sglang/issues/50045)  
> - [量化 LoRA MoE 栈](https://github.com/sgl-project/sglang/pull/48319)  
> - [CI 诊断工作流](https://github.com/sgl-project/sglang/pull/52189)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp 摘要 – 2026-11-22**

---

### **1. 今日亮点**  
最新一轮更新聚焦于 **Flash Attention (FA) 稳定性提升**、**Inkling 2 DSpark 推测解码优化**，以及 **非 UMA 设备上 Metal/Vulkan 内存处理的关键修复**。值得注意的是，针对 Vulkan 中未对齐 `memset` 的修复已合并，可防止独立显卡上的崩溃问题；同时新提交的 PR 实现了在显存受限环境下对 Inkling 2 模型的张量拆分和自适应暂停功能。

---

### **2. 发布与破坏性变更**  
- **vulkan**: 通过 [PR #32725](https://github.com/ggml-org/llama.cpp/pull/32725) 修复了非 UMA 设备上未对齐内存范围的 `memset` 问题，对独立显卡上的稳定推理至关重要。  
- **model**: 自动应用 `.scale` 张量现已默认启用 ([PR #32669](https://github.com/ggml-org/llama.cpp/pull/32669))，提升了模型正确性并减少了手动调参需求。  
- **chat**: 当支持时，`reasoning_effort = none` 已被正确传递 ([PR #32763](https://github.com/ggml-org/llama.cpp/pull/32763))。

> ⚠️ 未报告任何破坏性 API 变更；所有更新均为新增或修正性质。

---

### **3. 新模型与硬件支持**  
- **新增模型**:  
  - 支持 **Inkling-2-Mini-GGUF**，包含 IQ4_NL / IQ3_XXS 量化格式 ([PR #32778](https://github.com/ggml-org/llama.cpp/issues/32778), #32718)。  
  - 通过 [PR #32766](https://github.com/ggml-org/llama.cpp/pull/32766) 增加 **Nemotron 3.6 Academia** 架构支持（循环混合：GDP + 密集注意力 + MLP）。  
  - 增加 **Maxwell-V1 MoE**（总参数 35B / 活跃 3B）的完整图结构、分词器及转换器支持 ([PR #32643](https://github.com/ggml-org/llama.cpp/pull/32643))。  
  - 新增 **MiniCPM5 MoE** 支持，包括门控 GQA 和路由专家机制 ([PR #32644](https://github.com/ggml-org/llama.cpp/pull/32644))。  

- **后端与硬件**:  
  - **SYCL**: 增加 IQ4_NL 与 IQ4_XS 权重重新排序支持 ([PR #31998](https://github.com/ggml-org/llama.cpp/pull/31998))。  
  - **Metal**: 为 Kyutai/Hibiki 提供完整的实时双工支持 ([PR #32491](https://github.com/ggml-org/llama.cpp/pull/32491))。  
  - **WebGPU**: 升级 Dawn SDK 以修复编译问题 ([PR #32779](https://github.com/ggml-org/llama.cpp/pull/32779))。

---

### **4. 性能与优化**  
- **Flash Attention**:  
  - 紧凑偏置实现现已支持 Inkling 2 模型的完整 FA 功能 ([PR #32740](https://github.com/ggml-org/llama.cpp/pull/32740))，消除了中间张量的生成，此前该操作曾导致巨大的内存开销。  
  - 在 RTX 4070 SUPER 上，修复 q4 草稿 KV 与图重建成本后，**长上下文场景下 DSpark 推测解码速度从约 47.6 tok/s 提升至 80 tok/s** ([PR #32773](https://github.com/ggml-org/llama.cpp/pull/32773))。  

- **CPU 优化**:  
  - 为 `iq3_s`、`iq2_s`、`q6_K` 与 `iq3_xxs` 的点积操作添加了 AVX-512 内核 ([PRs #32774](https://github.com/ggml-org/llama.cpp/pull/32774), #32775, #32027)。  
  - 在 AVX2 上融合了门控 delta net 状态传递 ([PR #32028](https://github.com/ggml-org/llama.cpp/pull/32028))，每 token 减少内核调用次数。

- **内存效率**:  
  - **mtmd**: 合并 Parakeet 相对位置视图以避免越界访问 ([PR #32722](https://github.com/ggml-org/llama.cpp/pull/32722))。  
  - **fit**: 优先将循环 MoE 层加载至设备内存，减轻显存压力 ([PR #32777](https://github.com/ggml-org/llama.cpp/pull/32777))。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 影响 | 修复状态 |
|---------|------|--------|------------|
| 关键 | `inkling2_loop`: 提示 >96 tokens → 全部输出 '?' 并服务器冻结 ([#32778](https://github.com/ggml-org/llama.cpp/issues/32778)) | 推理中断；影响 CUDA 上的 GGUF 模型 | 进行中（PR #32773 提供部分修复） |
| 高 | Qwen3.8-27B: >80K 上下文时解码吞吐量下降约 25 倍 ([#27623](https://github.com/ggml-org/llama.cpp/issues/27623)) | 长上下文性能严重退化 | 开放 |
| 高 | Vulkan: AMD gfx1150 上越界标记 ID = n_vocab (248320) ([#28158](https://github.com/ggml-org/llama.cpp/issues/28158)) | 推理崩溃；模型无法初始化 | 开放 |
| 中等 | SYCL XMX-ESIMD 路径在 Arc Pro B70 上使 MoE 提示处理速度降低约 35% ([#31068](https://github.com/ggml-org/llama.cpp/issues/31068)) | 英特尔 GPU 性能回归 | 开放 |
| 低 | Chrome 字体大小 ≥24 时 Web UI 无响应 ([#32361](https://github.com/ggml-org/llama.cpp/issues/32361)) | 仅用户体验问题 | 开放 |

> ✅ **已合并修复**: Vulkan `memset` 对齐 ([#32725](https://github.com/ggml-org/llama.cpp/pull/32725))，模型 `.scale` 自动应用 ([#32669](https://github.com/ggml-org/llama.cpp/pull/32669))。

---

### **6. 对应用开发者的影响**  
- **使用推测解码的智能体**：在 12–16 GB 显存的 GPU 上，推荐使用 `--speculative-draft-model inkling2_loop` 并配合 `-sm tensor`（通过 [PR #32751](https://github.com/ggml-org/llama.cpp/pull/32751)）以获得更好的内存效率。请关注 [PR #32773](https://github.com/ggml-org/llama.cpp/pull/32773) 获取真实场景下的 DSpark 速度提升信息。  
- **长上下文应用**：在 [#27623](https://github.com/ggml-org/llama.cpp/issues/27623) 修复前，请避免使用 `Qwen3.8-27B` 处理超过 80K 上下文的内容——否则将遭遇严重性能下降。  
- **高性能 CPU 推理**：对于 `iq3_s`、`iq2_s` 与 `q6_K` 模型，启用 AVX-512 内核（`-march=native`）——基准测试显示现代 Xeon 系统上点积运算速度最高可提升 **约 2 倍**。  
- **跨平台部署**：由于近期 `memset` 修复，务必在非 UMA 设备（如桌面级 AMD/NVIDIA）上验证 Vulkan/Metal 构建版本——旧版本可能无声崩溃。  

> 🔗 **关键资源**:  
> - [Inkling 2 DSpark 使用指南](https://github.com/ggml-org/llama.cpp/pull/32218)  
> - [Flash Attention 紧凑偏置说明](https://github.com/ggml-org/llama.cpp/pull/32740)  
> - [AVX-512 优化文档](https://github.com/ggml-org/llama.cpp/wiki/Performance-Tuning)

---  
*摘要生成时间：2026-11-22 | 来源：[github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-22**

---

### **1. 今日亮点**  
Ollama 生态系统持续扩展对多文件 GGUF 模型及复杂本地推理工作流的支持，`inkling2` GGUF 在 MLX 与 CUDA 后端的兼容性取得关键进展。针对 Windows 和 Jetson 平台的重大稳定性改进正在推进中，尤其聚焦于 GPU 内存管理与模型加载失败问题——这对边缘计算和高性能部署至关重要。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新版本发布。*  
然而，由于若干修复核心基础设施的合并请求（PR），数项**破坏性变更即将生效**：  
- **PR #19825** 使 `ollama create` 支持通过单个分片引用导入拆分的 GGUF 模型（修复 #5245）。这将要求更新使用 `FROM model-*.gguf` 或基于目录导入的 Modelfiles。  
- **PR #19830** 引入 `--no-animation` CLI 标志（修复 #19828），可在 CI/代理流水线中禁用旋转动画——适合干净日志输出，但尚未发布。

> 🔗 [PR #19825](https://github.com/ollama/ollama/pull/19825) | [PR #19830](https://github.com/ollama/ollama/pull/19830)

---

### **3. 新模型与硬件支持**  
- **Inkling 2 Mini (26B)**：上游 `llama.cpp` master 分支已正式支持（11 月 21 日合并）。  
  - ✅ 通过更新的 `LLAMA_CPP_VERSION` 识别 `inkling2_loop`、`inkling2v` 架构（PR #19826）。  
  - ❌ 在 Windows 上仍因未知架构 (`inkling2_loop`) 加载失败——需进一步运行时处理（问题 #19817）。  
- **Apple M4 Max**：尽管与 M4 Pro 共享 `applegpu_g16s`，MLX 后端仍不支持相对注意力核函数（问题 #19820）。  
- **Jetson AGX Orin (JetPack 6)**：图像请求因 `cuMemAddressReserve` 中的 CUDA OOM 而崩溃。修复需以 `GGML_CUDA_NO_VMM=ON` 编译 runner（问题 #19815）。

> 🔗 [问题 #19817](https://github.com/ollama/ollama/issues/19817) | [PR #19826](https://github.com/ollama/ollama/pull/19826)

---

### **4. 性能与优化**  
- **Inkling 2 前缀缓存问题**：  
  - 由于 `relative_attention_prefill` 的峰值增长，前缀缓存在超过约 64k token 时被完全清除（问题 #19819）。  
  - 恢复过程中批次分割错位导致每轮需重新计算最多 2k token（问题 #19818）。  
- **Windows GPU 内存溢出**：在 RTX 3050（6GB VRAM）上，即使启用 `Prefer No Sysmem Fallback`，超出 VRAM 的模型仍会溢出约 13.9GB 至共享内存（问题 #19824）。  
- **MLX 内核优化**：M4 Max 上已禁用相对注意力核函数；启用后或可提升长上下文效率。

> 🔗 [问题 #19819](https://github.com/ollama/ollama/issues/19819) | [问题 #19818](https://github.com/ollama/ollama/issues/19818) | [问题 #19824](https://github.com/ollama/ollama/issues/19824)

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 描述 | 修复状态 |
|--------|------|-------------|------------|
| 🚨 严重 | #19815 | Jetson AGX Orin 在图像输入时因 `cuMemAddressReserve` 中的 CUDA OOM 崩溃 | 待定（需修改构建标志） |
| 🚨 严重 | #19817 | Inkling 2 Mini 在 Windows 上因无法识别 `inkling2_loop` 架构而加载失败 | 待定（需 `llama.cpp` 更新 + Ollama 补丁） |
| ⚠️ 高 | #19782 | Windows `/api/embed` 返回 400 错误，因捆绑服务器内部回环连接拒绝 | 开放（网络层问题） |
| ⚠️ 中 | #19829 | Qwen3.5 解析器在闭合标签以纯文本形式出现时过早结束解析 | 进行中（PR #18624） |
| ⚠️ 中 | #19823 | 安全隐患：尽管承诺“零数据保留”，Ollama Cloud 的第三方服务仍可能暴露数据 | 开放（需澄清文档） |

> 🔗 [问题 #19815](https://github.com/ollama/ollama/issues/19815) | [问题 #19817](https://github.com/ollama/ollama/issues/19817) | [问题 #19782](https://github.com/ollama/ollama/issues/19782)

---

### **6. 对应用开发者的启示**  
- **对于智能体与 CI 流水线**：待 `--no-animation` 合并后使用，可消除日志中的旋转动画噪声。若启用了动画，请勿依赖 `stderr` 获取结构化信息。  
- **对于本地推理应用**：在 MLX/M4 硬件上使用大模型（>64k 上下文）时需谨慎——预计会出现重复前缀重计算，性能下降。建议通过 `OLLAMA_DEBUG=1` 日志监控缓存行为。  
- **对于生产部署**：在 #17969 修复前，避免通过 OpenAI 兼容接口启用思考功能的 `qwen3` 模型（`/no_think` 参数目前被忽略）。  
- **对于边缘/云工作负载**：Jetson 用户必须以 `GGML_CUDA_NO_VMM=ON` 构建 runner；Windows 用户即便禁用回退策略，仍面临内存溢出问题。

> 🔗 [PR #19830](https://github.com/ollama/ollama/pull/19830) | [问题 #17969](https://github.com/ollama/ollama/issues/17969) | [问题 #19815](https://github.com/ollama/ollama/issues/19815)

---  
*本摘要源自 GitHub 活动（2026-11-22）*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

### **LiteLLM 摘要 — 2026-11-22**

---

#### **1. 今日亮点**
LiteLLM 项目持续快速演进，关键改进包括成本追踪精度提升和用户界面一致性增强，特别是在 Gemini 4+ 路由与使用仪表盘对齐方面。一项重大 PR (#53469) 引入了通过 Interactions API 原生路由 Gemini 4+ 对话补全功能，填补了与 Google 上游行为的关键一致性差距。与此同时，多项高影响修复解决了令牌计数、流式传输可靠性及 OAuth 处理问题——这些对生产环境推理系统至关重要。

---

#### **2. 发布与破坏性变更**
- **v1.112.0-dev.2**（最新开发版）：  
  包含通过 GitHub Actions OIDC 身份进行的 Cosign 安全验证：  
  ```bash
  cosign verify \
    --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main \
    --certificate-oidc-issuer https://token.actions.githubusercontent.com \
    ghcr.io/berriai/litellm:v1.112.0-dev.2
  ```
  > [GitHub Release v1.112.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.112.0-dev.2)

- **v1.108.15 (LTS)**：  
  推荐用于生产环境。`lts` Docker 标签现已指向此版本。  
  > [GitHub Release v1.108.15](https://github.com/BerriAI/litellm/releases/tag/v1.108.15)

> ⚠️ **破坏性变更**：PR #53497 引入了 Lens 网关导出逻辑的变更——成本记录现在仅在账本提交后才导出。若当前未启用支出日志账本即进行导出，请在升级前确保已开启该功能。  
> [PR #53497 – 账本提交后导出成本](https://github.com/BerriAI/litellm/pull/53497)

---

#### **3. 新模型与硬件支持**
- **Gemini 4+ Interactions API 路由**（进行中）：  
  PR #53469 实现了将 Gemini 4+ 对话补全通过新的 Interactions API 路径进行路由，提升了与 Google 最新模型行为的一致性。目前仍有 131 个测试用例未对齐——工作仍在进行中。  
  > [PR #53469 – 通过 Interactions API 路由 Gemini 4+](https://github.com/BerriAI/litellm/pull/53469)

- **GMI 云模型加入成本映射表**：  
  新增一个模型（`gmi/tencent/hy4-flash`），包含完整定价元数据：  
  - 输入：$7e-08/token | 输出：$2.81e-07/token  
  - 最大输入：1,000,000 个令牌  
  > [PR #53484 – 将 GMI 云模型加入成本映射](https://github.com/BerriAI/litellm/pull/53484)

- **讯飞星火聊天服务提供商**（新增）：  
  PR #31690 通过 LiteLLM 服务提供商接口添加对讯飞 Spark 系列的支持。  
  > [PR #31690 – 添加讯飞星火服务提供商](https://github.com/BerriAI/litellm/pull/31690)

---

#### **4. 性能与优化**
- **流式传输可靠性提升**：  
  修复了因格式错误的数据块导致的流式崩溃问题（PR #43487）、`finish_reason` 报告错误（PR #46542）以及 `amazon_nova` 流式处理中的解码器重复使用问题（PR #35589）。这些改进确保了更稳定、准确的流式输出。

- **令牌计数精度提升**：  
  PR #31280 修复了工具调用名称计数不足的问题，而 PR #31282 解决了 Anthropic 缓存令牌的重复计数问题——这对精确的成本估算和预算控制至关重要。

- **Vertex AI 效率优化**：  
  PR #53338 发现每次 Vertex Gemini 图像请求都会因实例级缓存而重新构建凭证，造成不必要的开销。该问题将在后续重构中解决，以降低延迟和认证开销。

---

#### **5. 稳定性与回归问题**
| 问题 | 严重程度 | 状态 | 修复 PR | 说明 |
|------|----------|--------|--------|-------|
| [#18058] ElevenLabs 成本计算失败 | 高 | 已关闭 | N/A | 成本追踪回归问题；社区确认已修复 |
| [#35589] `amazon_nova` 流式传输 100% 失败 | 严重 | 已关闭 | N/A | 由 zstd 解压器重复使用引起；通过上游补丁解决 |
| [#53478] Vertex Claude Haiku 5.5 忽略 `response_format` | 高 | 待处理 | N/A | 缺失 `supports_native_structured_output` 标志导致回退至 JSON 工具 |
| [#53263] 支出日志虽启用了提示存储却仍遗漏负载 | 中 | 已关闭 | N/A | v1.110.2 版本引入的回归；已记录但尚未修复 |
| [#53477] UI 布局不一致 | 中 | 待处理 | N/A | 正在重构，通过布局框架统一页面内边距 |

> ✅ **正在修复**：多个与成本、流式传输及认证相关的高优先级问题已在开放 PR 中积极处理。

---

#### **6. 对应用开发者的影响**
- **生产系统**：建议升级至 `v1.108.15-lts`，或等待稳定版 `v1.112.0`，以获得增强的成本追踪、流式稳定性及安全验证。
- **成本敏感型应用**：可在成本敏感工作流中使用 `gmi/tencent/hy4-flash` 及其他新增模型——定价信息现已完全集成。
- **Gemini 4+ 用户**：若依赖结构化输出或实时头像功能，请关注 PR #53469 的完整集成进度。在标志被正确识别前，避免 `response_format` 不匹配。
- **OAuth 与 MCP 集成**：注意 `pass-through` 路由和 `GET` 查询（参见 #53185）；建议在升级后重新测试基于浏览器的流程。
- **自定义工具链**：对于未提供上游凭据时工具缺失的问题（#52849），请通过显式设置授权头或更新配置来解决。

> 🔗 **待办事项**：  
> - 使用 Cosign 验证 Docker 镜像签名（[文档](https://docs.litellm.ai/docs/security)）。  
> - 审查支出日志及响应负载可见性（修复 PR #53516 修正了 UI 日期处理）。  
> - 对使用自定义定价的多模型部署，审计成本计算逻辑。

---  
*摘要生成时间：2026-11-22 | 来源：[BerriAI/litellm GitHub](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth 消息简报 – 2026-11-22**

---

### **1. 今日亮点**  
Unsloth 团队在多 GPU 和扩散模型训练优化方面取得显著进展，关键的 PR 实现了跨 GPU 的数据并行 LoRA 训练，并修复了 Qwen-Image 2.1 与 Krea 2 推理中的关键问题。一项重大修复解决了 Studio 中原始 LFM 工具调用标记暴露的问题（PR #18820），提升了输出整洁度。与此同时，AMD NPU 支持以及 Windows ROCm/Strix Halo 系统上的内存管理仍存在稳定性隐患。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未发布新版本。*  
但若干破坏性变更已在 `v0.1.920-beta` 与 `v0.1.922-beta` 中生效：  
- `--load-mode none` 标志现在被 Windows 上强制启用的 `mmap` 行为覆盖（追踪于 [#17605](https://github.com/unslothai/unsloth/issues/17605)，已修复于 #17607）——此回归影响高内存 GGUF 模型。  
- `--diffusion-fa` 在 `sd.cpp` 构建中已被弃用，建议改用 `--flash-attn off,diffusion=on`（[#18787](https://github.com/unslothai/unsloth/pull/18787)）。  
- `UNSLOTH_DIFFUSION_INT8_TRAIN=w8a8` 现已启用可选的冻结 W8A8 int8 基础模型，可在非 fp8 显卡上实现更快训练（[#18782](https://github.com/unslothai/unsloth/pull/18782)）。

---

### **3. 新模型与硬件支持**  
- **模型支持**：  
  - 完全支持 **Inkling-2-Mini 与 Inkling-2-Small** 的 LoRA/QLoRA 训练（PR #18812）。  
  - Wan2.2-T2V-A14B 现在支持 4 步蒸馏 LoRA 对（[#18778](https://github.com/unslothai/unsloth/pull/18778)）。  
- **硬件与后端**：  
  - **ROCm**：修复 AMD GPU 崩溃问题（如双 RX 6700 XT、gfx1200 RDNA4），并改进 nf4 反量化缓存支持（[#18825](https://github.com/unslothai/unsloth/pull/18825)）。  
  - **Apple Silicon**：将大尺寸注意力调用拆分为查询块，以规避 macOS 15 上 MPSGraph 的精度缺陷（[#18783](https://github.com/unslothai/unsloth/pull/18783)）。  
  - **CPU 后端**：通过设置 `UNSLOTH_MEMORY_REPORT=1`，内存报告现在包含进程 RSS 与可用 RAM 信息（[#18807](https://github.com/unslothai/unsloth/pull/18807)）。

---

### **4. 性能与优化**  
- **多 GPU 训练**：  
  - 通过 `num_gpus` 设置，现已支持数据并行 DiT LoRA 训练（[#18771](https://github.com/unslothai/unsloth/pull/18771)），消除第二张显卡空闲问题。  
  - 视频渲染现在按令牌分步跨两张卡处理（[#18789](https://github.com/unslothai/unsloth/pull/18789)），实现完全利用率。  
- **内核与内存优化**：  
  - Krea 2 推理与训练现在仅处理有效文本行（而非填充的 512 行块），减少计算浪费（[#18813](https://github.com/unslothai/unsloth/pull/18813)，[#18788](https://github.com/unslothai/unsloth/pull/18788)）。  
  - 为 MiniMax-H3-Image 的流式 int8 GEMM 路径安装了融合 SwiGLU（[#18798](https://github.com/unslothai/unsloth/pull/18798)）。  
  - 预算梯度检查点与 nf4 反量化缓存现已在 ROCm 上正常工作（[#18825](https://github.com/unslothai/unsloth/pull/18825)）。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 链接 |
|---------|------|--------|------|
| 严重 | AMD NPU：FastFlowLM 更新后出现 `Extra data: line 2025 column 1` 错误 | 开放 | [#18763](https://github.com/unslothai/unsloth/issues/18763) |
| 高 | Windows Strix Halo：尽管设置了 `--load-mode none`，`mmap` 仍被强制启用 | 开放 | [#18805](https://github.com/unslothai/unsloth/issues/18805) |
| 高 | 双 RX 6700 XT：ROCm 推理期间崩溃 | 开放 | [#18622](https://github.com/unslothai/unsloth/issues/18622) |
| 中等 | gfx1200 上的 QLoRA：融合内核中出现 `HIP error: illegal memory access` | 开放 | [#18403](https://github.com/unslothai/unsloth/issues/18403) |
| 中等 | Qwen-Image-Edit GGUF：`_adaln_continuous_forward` 中设备不匹配 | 开放 | [#18759](https://github.com/unslothai/unsloth/issues/18759) |
| 低 | 可复制的提示令牌数据现在不可复制 | 开放 | [#18755](https://github.com/unslothai/unsloth/issues/18755) |

> ✅ **正在修复中**：多个 PR 正在解决根本原因（如内存报告、扩散层拆分、工具调用剥离）。

---

### **6. 对应用开发者的启示**  
- **构建健壮的智能体**：在多 GPU 环境中使用 `num_gpus` 实现可扩展的数据并行 LoRA 训练。  
- **优化推理流程**：采用 `--flash-attn off,diffusion=on` 并禁用 `--diffusion-fa` 以确保稳定扩散管道。  
- **避免回归问题**：在 #18805 修复前，避免在 Windows ROCm 上使用 `--load-mode none`；否则预期内存占用将上升。  
- **谨慎处理工具输出**：原始 LFM 工具调用语法现已从最终答案中剥离（PR #18820），因此你的应用逻辑不应依赖该格式。  
- **关注硬件特定问题**：AMD 用户应预期在 NPU 与旧版 RDNA4 显卡上存在不稳定性，直至修复上线。  
- **规划未来支持**：预计后续版本将扩展语言覆盖范围（如阿姆哈拉语、非洲语言）并引入目标模式功能（PR #18819）。

---  
*简报生成时间：2026-11-22 | 来源：[unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*