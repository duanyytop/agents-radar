# AI 基础设施日报 2026-11-21

> 生成时间: 2026-11-21 03:25 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目 AI 基础设施生态报告 – 2026-11-21**

---

### **1. 生态概览**  
AI 推理与服务生态正迅速成熟为一个多层次、硬件感知的架构，专为智能体工作负载、实时交互和低资源部署优化。主要趋势包括针对下一代 GPU（Blackwell、RDNA4）的激进内核级优化、推测解码与多模态支持的普及，以及在生产网关中对安全、可观测性和成本控制的关注日益提升。各项目正按专业化方向分化：高吞吐引擎聚焦规模化性能，本地运行时强调内存效率，而网关则重视开发者体验与集成能力。

---

### **2. 活动对比**

| 项目       | 问题（开放） | PR（最近 24h） | 发布状态         |
|------------|--------------|----------------|------------------|
| **vLLM**   | 127          | 18             | 稳定版（`v0.30.0+`）；无破坏性变更 |
| **SGLang** | 149          | 15             | 无新发布；关键 SSRF 修复已合并 |
| **llama.cpp** | 172       | 22             | `b12600` 版本发布，含弃用项 |
| **Ollama** | 138          | 14             | 无发布；预览通道已在 PR 中 |
| **LiteLLM** | 114        | 19             | `v1.111.0-rc.3`、`v1.108.14-LTS` 已发布 |
| **Unsloth** | 102        | 12             | `v0.1.922-beta` 发布；存在稳定性担忧 |

> ✅ *观察*：**llama.cpp** 和 **Unsloth** 展现出最高的开发速度，而 **LiteLLM** 在结构化发布节奏上领先，并要求进行安全验证。

---

### **3. 模型支持竞赛**

| 新模型 / 架构              | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------------|------|--------|-----------|--------|---------|---------|
| **Inkling 2 Mini**（循环） | ✅   | ❌     | ✅        | ✅     | ❌      | ✅      |
| **MiniCPM5-15B-A2.5B**     | ✅   | ❌     | ❌        | ❌     | ❌      | ❌      |
| **Kimi-K3 / DeepSeek-V4.1** | ✅   | ✅     | ❌        | ❌     | ❌      | ❌      |
| **FLUX.3 / QVG Diffusion** | ❌   | ✅     | ❌        | ❌     | ❌      | ❌      |
| **Gemini Live Avatar**     | ❌   | ❌     | ❌        | ❌     | ✅      | ❌      |
| **GPT-Live over WebRTC**   | ❌   | ❌     | ❌        | ❌     | ✅      | ❌      |

> 🏆 **优胜者**：**Unsloth** 和 **vLLM** 在 **Inkling 2 Mini** 的早期采用上领先，其中 **Unsloth** 提供了优化的低内存部署方案（16GB RAM）。**LiteLLM** 在 **实时头像与流式传输** 能力上占据主导。

---

### **4. 性能前沿**

| 关注领域               | 领先项目                     | 关键创新 |
|------------------------|------------------------------|----------|
| **KV 缓存优化**        | vLLM, Unsloth                | 2-bit Kitty KV 量化（`--kv-cache-dtype kitty`），张量级视图推导 |
| **批处理与吞吐量**     | vLLM, SGLang                 | MTP 解码内核，FlashInfer MoE 后端（替代 Triton），预填充-解码分离 |
| **量化**               | vLLM, llama.cpp              | DSpark + BF16，`q8_0 K / q8_0 V` FlashAttention，SYCL 向量化 RMS-NORM |
| **内核级加速**         | vLLM, SGLang, llama.cpp      | 专用 CUDA MTP 解码内核，Intel Alchemist 上的 coopmat，`chunk_scan_fwd_kernel` 预编译 |
| **分布式服务**         | SGLang, LiteLLM              | HiCache 统一内存（GB10），混合缓存管理，追踪镜像 |

> 🔥 **趋势**：前沿正在转向 **特定内核调优**（如 Mamba2 Gated DeltaNet、MoE）和 **内存布局重构**，以减少冗余计算与垃圾回收开销。

---

### **5. 层级定位**

| 项目       | 层级定位                     | 核心差异化 |
|------------|------------------------------|------------|
| **vLLM**   | 高性能推理引擎               | GPU 原生，内核优化，适用于云规模的大模型服务 |
| **SGLang** | 智能体推理运行时             | 专为智能体工作流设计：预填充-解码分离、工具调用、HiCache |
| **llama.cpp** | 本地推理运行时             | 跨平台，支持 CPU/GPU/NPU，轻量级，以 GGUF 为优先设计 |
| **Ollama** | 开发者友好型网关/运行器      | 统一 CLI，聚焦 MLX/macOS，模型管理简便 |
| **LiteLLM** | 通用 API 网关                | 多提供商抽象，实时流式传输，成本追踪，安全加固 |
| **Unsloth** | 优化本地运行时 + 体验       | 快速图像/视频生成，MCP 工具修复，Apple Silicon 支持 |

> 💡 **定位洞察**：  
> - **vLLM/SGLang**：云规模、高吞吐推理。  
> - **llama.cpp/Ollama/Unsloth**：边缘/本地部署，内存效率优先。  
> - **LiteLLM**：集成层——多提供商工作流的“通用适配器”。

---

### **6. 趋势信号**

#### **新兴行业趋势（基于 2026-11-21 活动）：**
1. **以智能体为中心的优化**：项目正优先关注 **工具调用可靠性**、**有状态推理** 和 **长上下文稳定性**（如 Unsloth 的 MCP 修复、Ollama 的 Glimmer 解析器）。
2. **安全成为首要任务**：关键 SSRF 漏洞（SGLang）、未经验证的发布（LiteLLM）、OAuth 配置错误凸显安全审查日益严格。
3. **硬件多样性推动**：AMD ROCm、Intel XPU、MLU、Apple Silicon、NPU 支持已成为基本要求——但 **ROCm 与 AMD NPU 仍不稳定**。
4. **实时交互需求上升**：Gemini Live 头像、GPT-Live WebRTC、结构化输出渲染表明对 **低延迟、交互式智能体** 的强烈需求。
5. **成本与预算控制**：LiteLLM 的预算超支与成本核算问题揭示生产环境中对 **细粒度支出监控** 的迫切需求。

#### **开发者应关注事项：**
- ✅ **在内存受限场景下使用 `--kv-cache-dtype kitty`（vLLM）** 进行大上下文推理。
- ✅ **通过 `OLLAMA_CHANNEL=preview` 获取前沿功能（MLX、Glimmer）** ——但务必严格测试。
- ✅ **所有 LiteLLM 发布版本均需用 `cosign` 验证** ——避免使用不可信构建。
- ⚠️ **在 Blackwell（SM120）上避免使用 `--enforce-eager`，直到 #56892 修复（vLLM）**。
- 📌 **持续监控 vLLM、SGLang、Unsloth 中 ROCm/gfx1200 的稳定性** ——目前尚不适用于生产环境。

---

> **最终建议**：对于 **高吞吐、云规模推理**，推荐使用 **vLLM**。对于 **带工具与状态的智能体工作流**，优先选择 **SGLang** 或 **Unsloth**。对于 **本地、跨平台部署**，**llama.cpp** 或 **Ollama** 提供最佳平衡。对于 **多提供商编排**，**LiteLLM** 仍是最成熟的网关——但必须严格执行安全规范。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

### **vLLM Digest — 2026-11-21**

#### **1. 今日亮点**  
vLLM 项目持续推进下一代大模型的高性能推理，针对 Blackwell GPU 的推测解码稳定性问题推出关键修复，并为 AMD ROCm（gfx942/gfx950）硬件带来新优化。重点更新包括 2 位 *Kitty KV 量化*功能、Mamba2 Gated DeltaNet 解码的内核级改进，以及对多模态和 RL 重载工作流的增强支持。

#### **2. 发布与破坏性变更**  
过去 24 小时内无报告。未发布新版本，亦未观察到破坏性 API/配置变更。生产环境用户应继续使用稳定分支（`v0.30.0` 及以上版本）。

#### **3. 新模型与硬件支持**  
- **新增模型**：  
  - 通过 [PR #69028](https://github.com/vllm-project/vllm/pull/69028) 新增对 **Inkling 2 Mini** (`thinkingmachines/Inkling-2-Mini`) 的支持，实现 BF16 服务化及 DSpark 推测解码。  
  - 新增 **MiniCPM5-15B-A2.5B**，支持 INT4 W4A16 压缩、BF16 推理及原生 DSpark 支持 ([PR #68748](https://github.com/vllm-project/vllm/pull/68748))。  
- **硬件与后端**：  
  - **ROCm (AMD)**：持续跟踪并优化 `gfx942`（MI355X）和 `gfx950`（MI355X）性能，目标模型为 Qwen3.8-Flash-Next 与 Muse Spark Open ([Issue #59575](https://github.com/vllm-project/vllm/issues/59575), [Issue #64018](https://github.com/vllm-project/vllm/issues/64018))。  
  - **Intel GPU (XPU)**：通过 XpuFusedMoe 钩子新增 MXFP4 MoE LoRA 支持 ([PR #62631](https://github.com/vllm-project/vllm/pull/62631))，并修复块大小强制策略问题 ([PR #68108](https://github.com/vllm-project/vllm/pull/68108))。  
- **量化**：  
  - 引入 **2 位 Kitty KV 量化**，支持通过 `--kv-cache-dtype kitty` 动态提升精度 ([PR #68945](https://github.com/vllm-project/vllm/pull/68945))。

#### **4. 性能与优化**  
- **内核级改进**：  
  - 针对 16 位递归状态（BF16/FP16）的融合 CUDA MTP 解码，通过专用内核实现更快速度 ([PR #69065](https://github.com/vllm-project/vllm/pull/69065))。  
  - 优化 ReplaySSM 缓存机制用于 Gated DeltaNet 标准解码，减少冗余计算 ([PR #62004](https://github.com/vllm-project/vllm/pull/62004))。  
- **内存与吞吐量**：  
  - 按张量粒度推导缓存 K/V 视图，避免在急切注意力调用中重复计算 ([PR #66963](https://github.com/vllm-project/vllm/pull/66963)；解决 #64572)。  
  - 多模态引擎现在通过将接收器缓存项移出 Python 循环垃圾回收机制，避免 GC 暂停 ([PR #68826](https://github.com/vllm-project/vllm/pull/68826))。  
- **基准测试与验证**：  
  - 提出 RFC，支持用户自带 GPU 实现可复现的评估，以提升 PR 审查信心 ([Issue #61698](https://github.com/vllm-project/vllm/issues/61698))。

#### **5. 稳定性与回归问题**  
- **严重崩溃 / Bug**：  
  - **MTP 推测解码崩溃**：在长序列下使用 FP8 量化版 Qwen3.6-27B（v0.19.1）时触发非法内存访问，导致段错误 ([Issue #40756](https://github.com/vllm-project/vllm/issues/40756)，46 条评论，修复待定)。  
  - **DeepSeek-V4.1 Flash 在 SM120（Blackwell）上**：启用 `--enforce-eager` 后解码吞吐极低，CUDA Graph 不可用——亟需修复 ([Issue #56892](https://github.com/vllm-project/vllm/issues/56892)，35 条评论)。  
  - **所有模式下 Kimi-K3 在 batch=1 时发生 CUDA Graph 损坏** ([Issue #52531](https://github.com/vllm-project/vllm/issues/52531)，8 条评论)。  
- **其他重要问题**：  
  - Qwen3 解析器错误将模型引号解释为工具调用 ([Issue #58147](https://github.com/vllm-project/vllm/issues/58147))。  
  - Qwen3.6 MoE CT INT4 检查点因 `shared_expert_gate` 与 `weight` 命名不匹配而加载失败 ([Issue #68336](https://github.com/vllm-project/vllm/issues/68336))。

#### **6. 对应用开发者的影响**  
- **使用场景建议**：  
  - 在 Blackwell GPU（SM120）上，除非 #56892 修复，否则避免使用 `--enforce-eager`，建议改用 CUDA Graph 或 `--no-fast-prompt`。  
  - 进行高吞吐推测解码时，务必验证你的模型 + 量化组合是否可能触发 MTP 崩溃（例如 Qwen3.6-27B-FP8）。  
- **模型服务**：  
  - 在大上下文推理（如 100 万+ token）场景下，考虑使用 **Kitty KV 量化**（`--kv-cache-dtype kitty`）以实现激进的内存节省。  
  - 使用 `vllm.Render` 服务进行结构化输出渲染（聊天、工具、推理）——现已支持带 JSON/SSE 包装的反渲染完成内容 ([Issue #67652](https://github.com/vllm-project/vllm/issues/67652))。  
- **开发最佳实践**：  
  - 关注 `envvars` 使用：RFC #25700 建议弃用全局 envvars，转而采用配置驱动设置。  
  - 在测试中启用 MyPy 检查（RFC #49569），尽早发现类型错误。  
  - 确保嵌入负载有效；畸形输入现在返回 HTTP 400 而非泄露内部错误 ([PR #69073](https://github.com/vllm-project/vllm/pull/69073))。

> ✅ **建议**：在 Blackwell 或 AMD ROCm 上部署生产负载时，请使用最新 `main` 或 `v0.31.0-dev` 构建版本进行测试。在部署至大规模推理流水线前，请关注问题追踪器中的回归修复进展。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-11-21**

---

### **1. 今日亮点**  
SGLang 项目持续聚焦智能体工作负载的稳定性与可扩展性，针对多模态端点中的 SSRF 漏洞完成关键修复，并持续推进解决不稳定的 CI 基础设施故障问题。在 Hopper 和 ROCm 平台上，MoE 与 Mamba 内核的关键性能提升正在显现，团队也在推进预填充-解码分离架构及混合缓存管理，以支持高吞吐推理。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告新发布或破坏性变更。*

---

### **3. 新模型与硬件支持**  
- **AMD ROCm 支持**：通过新增 73 个基于 CUDA 的测试用例在 AMD 平台运行（PR #51523），扩大了 CI 覆盖范围，提升了 NVIDIA 与 ROCm 流水线之间的对齐度。  
- **MLU 后端**：通过共享接口添加 GQA 与 MLA 注意力支持（PR #49214）。  
- **多模态模型**：增强 FLUX.3 基础/蒸馏模型的扩散管道支持，以及在 Triton 3.9 下的 QVG 量化支持（PR #51982）。  
- **HiCache 统一内存**：针对 GB10/DGX Spark 系统提出 RFC，支持 GPU/CPU 共享内存池（Issue #51733）。

---

### **4. 性能与优化**  
- **Mamba2 内核编译**：首次大规模预填充突发请求因 `chunk_scan_fwd_kernel` 编译耗时（每进程约 1.45 秒）而出现停滞；建议方案：在引擎初始化阶段提前编译（Issue #51628）。  
- **Triton vs FlashInfer MoE**：在 H100 TP8 场景下，Triton MoE 后端相较 `flashinfer_cutlass` 在 Nemotron 3 Nano FP8 上慢 **5–8 倍**（批大小 16 时步长耗时从 3.1 → 19.8 毫秒）（Issue #51626）。  
- **Kimi K3 共享专家**：优化流顺序，减少共享专家阶段的 GPU 空闲时间（PR #51900）。  
- **DeepSeek-V4 Identity 预填充**：通过批量写入身份预填充操作降低启动开销（PR #48866）。  
- **LTX-2.3 引导阶段**：在 STG 阶段复用 cond 阶段的前缀块，减少冗余计算（PR #51999）。

---

### **5. 稳定性与回归问题**  
- **严重 SSRF 风险**：`/v1/videos` 端点中未验证的 URL 可通过恶意媒体路径触发远程代码执行（Issue #51701）。*已合并修复*：PR #51738。  
- **CUDA 核心转储**：持续存在的核心转储追踪问题（#26340），包含 **387 条评论**，表明夜间测试运行存在系统性不稳定。  
- **HiCache L3 预取失败**：在 CP 模式下启用 `fast_file` 时，预取始终无法完成；尽管写入累积，但 `storage_hit` 仍为 0（Issue #51608）。  
- **FlashInfer on Blackwell**：B200 GPU 不支持该后端（Issue #35080）。  
- **H200/MI300 对齐**：MI300/MI325 缺少 DeepSeek-v4 Pro 支持（Issue #27890）。  

> ⚠️ *高危问题包括未修复的 SSRF、持续的核心转储以及下一代硬件的后端兼容性缺口。*

---

### **6. 对应用开发者的启示**  
- **安全**：在升级至包含 PR #51738 的版本前，请避免在 `/v1/videos` 中直接使用用户提供的原始 URL。  
- **性能**：对于 Mamba 与 MoE 模型，除非你在优化特定自定义内核，否则应优先选择 `--moe-runner-backend flashinfer_cutlass` 而非 Triton。  
- **可扩展性**：针对大规模智能体工作负载，可利用预填充-解码分离架构（Q4 路线图），但需留意空闲-突发延迟尖峰问题（Issue #50920）。  
- **硬件选型**：若目标为 AMD ROCm 或 MLU，确保模型配置与最新后端一致（PRs #49214, #51523）。  
- **CI 可靠性**：集成到自动化流程时，请注意不稳定的测试（Issue #42752）和间歇性核心转储（Issue #26340）。

🔗 [查看完整 GitHub 活动](https://github.com/sgl-project/sglang)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 消息简报 – 2026-11-21**

---

### **1. 今日亮点**  
最新版本（`b12600`）通过 PR #32694 与 #32695 完全支持 **Inkling 2 Mini**，一种循环架构模型，标志着在处理复杂、迭代式模型设计方面迈出了重要一步。与此同时，各后端性能优化持续推进：**Vulkan 现已在 Intel Alchemist GPU 上启用协作矩阵（coopmat）**，而 **SYCL 实现了融合 RMS 归一化与向量化**，使 Qwen3.8-27B 的推理吞吐量最高提升 +3.4%。

---

### **2. 发布与破坏性变更**  
- `b12600` 引入重大内部变更：  
  - **弃用 `ggml_ftype`**，改用新的 `model_type` 字段（#32647）。  
  - 采用 PR #32588 提出的更新命名规范，以统一元数据处理逻辑。  
  - *迁移提示：* 使用已弃用 `ftype` 字段的现有 GGUF 文件可能需在加载时重新转换或手动修补。  
  - [GitHub 发布页](https://github.com/ggml-org/llama.cpp/releases/tag/b12600)

---

### **3. 新模型与硬件支持**  
- ✅ **Inkling 2 Mini** 通过 PR #32694 完全支持（循环架构），并包含 #32218 中的 DSpark 规划器支持。  
- ✅ **Intel Alchemist (Xe1) dGPU** 现可通过 PR #32706 在 Vulkan 上支持 **KHR 协作矩阵（coopmat）** —— 此前因性能问题被禁用。  
- ✅ **RDNA1 HIP 后端** 现已包含显式的 MMVQ 参数表（每块 1 warp，ncols=1），提升对旧款 AMD 显卡的兼容性（#32389）。  
- ✅ **Apple Metal**：融合的 MUL/ADD 操作现在可接受任一操作数中的归一化链（#32300）。

---

### **4. 性能与优化**  
- **SYCL**：融合 ADD + RMS_NORM + MUL 向量化使 Qwen3.8-27B Q3_K_P 在 `tg128` 下吞吐量提升 **+3.4%**（13.53 t/s 对比 13.09 t/s）（#31753）。  
- **CUDA**：FlashAttention tile kernel 中原生支持 `q8_0 KV` 与 `f16 K / q8_0 V`，减少回退到低效路径的情况（#30792）。  
- **Vulkan**：Intel Alchemist GPU 上启用 coopmat，解决了此前由寄存器溢出和 SLM 阶段化导致的性能瓶颈（#32706）。  
- **Gemma4**：通过 PR #32342 优化多序列查询的提示处理流程。

---

### **5. 稳定性与回归问题**  
- ⚠️ **严重崩溃**：`Inkling-2-Mini-GGUF:IQ4_NL` 在 RTX 5090 上表现出极差的预填充性能并发生崩溃（#32707）。暂无修复方案；可能与循环图执行或内存布局相关。  
- ⚠️ **OpenVINO 上的 SIGSEGV**：Qwen3.5 模型因 **掩码形状不匹配（CPU）** 与 **SIGSEGV（GPU）** 而失败 —— #32291 报告严重回归。  
- ⚠️ **ROCm/RDNA4 FlashAttention**：头大小为 512 时（Gemma 4 全局层）效率约为头大小 256 的 **1/4**（#30838）。  
- ⚠️ **Power10**：当启用 `GGML_LLAMAFILE=ON` 时，`llamafile sgemm (MMA)` 会导致 Flint MoE 输出损坏（#31680）。  
- ✅ **正在修复中**：  
  - PR #32704 修复 Inkling 2 循环架构中的比例张量误应用问题。  
  - PR #32697 修复 Qwen3A ASR 中的音频尾部问题。

---

### **6. 对应用开发者意味着什么**  
- **模型开发者** 应更新转换管道以处理新字段 `model_type`，避免使用旧版 `ggml_ftype`。  
- **智能体构建者** 若依赖推测解码（如 MTP/DSpark），必须验证 Inkling 2 Mini 的行为——早期报告表明其在高负载下存在不稳定性。  
- **部署工程师** 若使用 Intel Arc Alchemist GPU，应通过 Vulkan 启用 `coopmat` 以获得更高吞吐。  
- **对性能敏感的应用** 可立即受益于 SYCL 向量化与 CUDA FlashAttention 优化。  
- **若使用会丢弃历史推理的模板（如 Nemotron 3.5 Bolt）**，请勿默认启用 `--reasoning-preserve`；该选项会覆盖模型默认设置（#32688）。

> 🔗 完整上下文：[github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-21**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to mature with critical fixes to VRAM accounting, GPU resource management, and streaming reliability—especially for MLX and native macOS backends. New PRs are stabilizing model runners, improving tool call parsing (notably Glimmer/ATEM), and enhancing error propagation in OpenAI-compatible endpoints. A growing number of issues highlight persistent challenges around GPU utilization on M4 Pro systems and Alpine Linux compatibility.

---

### **2. Releases & Breaking Changes**  
*None reported in the last 24 hours.*  
However, **PR #19801** introduces support for a `preview` channel via `OLLAMA_CHANNEL=preview`, allowing users to opt into early builds. This is not yet released but will be available in an upcoming RC. See: [PR #19801](https://github.com/ollama/ollama/pull/19801).

---

### **3. New Model & Hardware Support**  
- **Inkling 2 Mini**: Added via PR #19799 ([#19799](https://github.com/ollama/ollama/pull/19799)), expanding MLX runner support for smaller, efficient models.
- **Pi Integration**: PR #19798 enables direct `ollama launch pi` with automatic plugin checks and versioning, streamlining local deployment workflows. See: [PR #19798](https://github.com/ollama/ollama/pull/19798).
- **Control Plane Cloud Template**: Added to documentation; supports Ollama 0.32.15 on NVIDIA GPUs with persistent volumes. See: [PR #19793](https://github.com/ollama/ollama/pull/19793).
- **Intel Mac Support (macOS 12/13)**: Community build available for v0.40.11 (Issue #19308). Not officially supported yet but shows demand for legacy Apple Silicon compatibility.

---

### **4. Performance & Optimization**  
- **VRAM Accounting Fix**: PR #19632 addresses multiple root causes of incorrect VRAM tracking, preventing premature model eviction and enabling proper GPU splitting across devices. Fixes: [#19463](https://github.com/ollama/ollama/issues/19463), [#18679](https://github.com/ollama/ollama/issues/18679), [#18349](https://github.com/ollama/ollama/issues/18349), [#16599](https://github.com/ollama/ollama/issues/16599).
- **MLX Runner Parallelism**: PR #19785 auto-scales default parallelism (1–8 slots) based on available memory and context size, improving throughput without manual tuning. See: [PR #19785](https://github.com/ollama/ollama/pull/19785).
- **GPU Memory Reclamation**: PR #19745 adds async checkpointing of inactive conversations, reducing cold-start latency after memory pressure events. See: [PR #19745](https://github.com/ollama/ollama/pull/19745).

---

### **5. Stability & Regressions**  
- **Critical**: **MLX runner not using full GPU** (M4 Pro, 48GB RAM) — Issue #18754 reports only partial GPU utilization despite ample VRAM. No fix PR yet.  
- **High Severity**: **Glimmer parser raises mid-generation**, causing silent stream termination without `finish_reason` or `[DONE]`. Fixed by PR #19797 ([#19797](https://github.com/ollama/ollama/pull/19797)) and PR #19795 ([#19795](https://github.com/ollama/ollama/pull/19795)).
- **Regression**: **Cloud `beam` model returns empty tool_calls** since Nov 20. Issue #19804 indicates a possible regression tied to recent changes. No fix yet.
- **Minor**: **Alpine Linux fails due to `fcntl64` symbol not found** — Issue #19800 highlights missing dynamic linking support. PR #19787 proposes SHA256 verification for Linux installers, improving security but not resolving runtime errors.

---

### **6. What This Means for Application Developers**  
- **Streaming Reliability**: Use `fix(openai): emit SSE error frame and [DONE] on mid-stream errors` (PR #19795) to avoid silent failures in agent workflows. Ensure clients handle `error` frames and `[DONE]` markers explicitly.
- **Tool Call Robustness**: Be cautious with `glimmer-glimmer` and `inkling-2-mini` models—parser crashes can terminate streams unexpectedly. Validate tool output schemas and implement retry logic.
- **Memory Management**: With improved VRAM accounting (PR #19632), developers can now better predict load behavior. Use `num_ctx`, quantization, and `keep_alive` settings with confidence.
- **Deployment Flexibility**: Leverage `OLLAMA_CHANNEL=preview` for early access to new features. For production, monitor cloud regressions like `beam` tool-call issues (#19804).
- **Security & Integrity**: The proposed installer SHA256 check (PR #19787) underscores the need to verify downloads in CI/CD pipelines until implemented.

> *Recommendation: Upgrade to latest preview builds if testing MLX, Glimmer, or tooling-heavy flows. Monitor `ollama serve` logs closely for `parse` errors during long-running inference sessions.*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

### **LiteLLM Digest — 2026-11-21**

#### **1. 今日亮点**  
LiteLLM 项目持续快速演进，重点聚焦于 **实时 AI 能力**、**安全强化** 和 **可观测性增强**。关键进展包括支持 Vertex AI 中的 **Gemini Live Avatar**，改进基于 **WebRTC 的 GPT-Live 流式传输**，以及修复 **成本核算**、**OAuth 透传** 和 **追踪完整性** 等关键问题。对消息处理管道的重大重构提升了各服务商间的一致性。

#### **2. 发布与破坏性变更**  
- 今日发布 **v1.111.0-rc.3**、**v1.110.2**、**v1.109.3** 及 **v1.108.14 (LTS)**。  
- **重要提示**：`lts` 标签现已指向 `v1.108.14`。依赖长期稳定性的团队请相应更新。  
- **安全验证要求**：所有发布版本必须使用 `cosign` 验证，采用 GitHub Actions OIDC 发行者及证书身份：  
  ```bash
  cosign verify \
    --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main \
    --certificate-oidc-issuer https://token.actions.githubusercontent.com \
    ghcr.io/berriai/litellm:v1.111.0-rc.3
  ```
  [GitHub 发布验证指南](https://github.com/BerriAI/litellm#verify-releases)

#### **3. 新模型与硬件支持**  
- ✅ **Gemini Live Avatar (avatar_config)** 现通过 Vertex AI 集成获得支持 ([PR #53270](https://github.com/BerriAI/litellm/pull/53270))，可在实时会话中实现唇形同步的视频虚拟形象。  
- ✅ **支持通过 WebRTC 的 GPT-Live 及侧信道附加** 功能上线 ([PR #53282](https://github.com/BerriAI/litellm/pull/53282))，实现精准计费与低延迟音视频交互。  
- ✅ **OpenRouter reasoning_details-only chunk** 在流式传输过程中现可被保留 ([Issue #48401](https://github.com/BerriAI/litellm/issues/48401))——对 Anthropic 模型工具链至关重要。

#### **4. 性能与优化**  
- 🔧 **重构消息处理管道**：一系列合并请求 ([#53199](https://github.com/BerriAI/litellm/pull/53199), [#53203](https://github.com/BerriAI/litellm/pull/53203), [#53204](https://github.com/BerriAI/litellm/pull/53204)) 统一了各服务商的消息配置布局，提升可维护性并减少偏差。  
- ⚡ **更快的 Rust Bridge HTTPS 客户端**：FIPS 构建中现在使用 OpenSSL 替代 ring + rustls，改善受限环境下的合规性与性能 ([PR #53104](https://github.com/BerriAI/litellm/pull/53104))。  
- 📊 **提升追踪准确性**：网关追踪现在与代理原生追踪结构一致 ([PR #53285](https://github.com/BerriAI/litellm/pull/53285))，显著增强 Lens 中的调试能力。

#### **5. 稳定性与回归问题**  
- **严重**：`/v1/responses` 预算预留错误地使用 `max_tokens` 而非 `max_output_tokens`，导致 **预算超支** ([Issue #51445](https://github.com/BerriAI/litellm/issues/51445)) — *修复待发布*。  
- **高严重性**：任何异常后 `litellm.num_retries` 永久设为 `None`，全局禁用重试机制 ([Issue #33272](https://github.com/BerriAI/litellm/issues/33272)) — *修复待发布*。  
- **高严重性**：携带 `client_id` 查询参数的 POST/OAuth GET 请求因上游认证配置错误被拒绝 ([Issue #53185](https://github.com/BerriAI/litellm/issues/53185)) — *修复进行中*。  
- **中等**：ElevenLabs 模型的成本计算失败 ([Issue #18058](https://github.com/BerriAI/litellm/issues/18058)) — *已在 v1.110.2 合并修复*。  
- **低**：管理界面 JWT Cookie 未标记为 `HttpOnly` — 存在安全风险 ([Issue #36997](https://github.com/BerriAI/litellm/issues/36997)) — *已修复*。

#### **6. 对应用开发者的意义**  
- **实时代理**：使用 `gemini/live` 搭配 `avatar_config` 与 `gpt-live/web-rtc`，打造丰富互动的虚拟形象与语音交互——适用于面向客户的应用场景。  
- **预算安全**：在 `responses` 调用中避免使用 `max_tokens`；应显式使用 `max_output_tokens` 以防止超额支出。当启用 `store_prompts_in_spend_logs: true` 时，请密切关注支出日志。  
- **安全**：切勿依赖未经验证的 Docker 镜像。始终使用 `cosign` 验证发布版本。谨慎处理查询字符串中的 OAuth `client_id` — 确保代理配置允许其通过。  
- **可观测性**：利用新推出的 Lens 追踪功能（`#53285`）实现从头到尾的代理行为调试。确保 OpenTelemetry 配置一致，避免缓存缺失问题（[Issue #49311](https://github.com/BerriAI/litellm/issues/49311)）。  
- **未来兼容**：为即将到来的 `team_budget_schedules` 做准备（[Issue #52251](https://github.com/BerriAI/litellm/issues/52251)）——预计不久将推出更精细的时间维度支出控制。

---  
*本摘要由 GitHub 数据生成：[BerriAI/litellm](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-21**

---

### **1. 今日亮点**  
Unsloth 发布 **v0.1.922-beta**，引入 *Inkling 2 Mini* — 这是目前在 16GB 内存上运行效率最高的 26.4B 模型，图像生成速度显著提升，且 GPU 显存占用降低。关键修复包括移除 MCP 启用对话中的完整提示重新处理问题，以及支持 Apple Silicon Mac 上的视频重风格化，进一步优化了代理工作流与本地推理体验。

---

### **2. 发布与破坏性变更**  
- **v0.1.922-beta**（GitHub：[发布](https://github.com/unslothai/unsloth/releases/tag/v0.1.922-beta)）  
  - 新增 `Inkling 2 Mini`（UD_Q4_K_M）作为 16GB RAM 系统的默认高性能选项。  
  - 修复 MCP 工具链中重复进行完整提示处理的问题 ([#17015](https://github.com/unslothai/unsloth/issues/17015)，已关闭）。  
  - 通过 Metal 后端支持在搭载 Apple Silicon 的 Mac 上进行视频重风格化。

> ⚠️ **迁移提醒**：依赖 Qwen 混合模型配合 MCP 工具的用户应尽快更新，以避免冗余上下文重新处理。

---

### **3. 新模型与硬件支持**  
- ✅ **新模型**：  
  - *Inkling 2 Mini*（26.4B）—— 针对低内存推理优化（16GB RAM），支持 GGUF 量化（Q4_K_M）。  
  - 用户请求支持 *DaisyRose-27B* ([#18465](https://github.com/unslothai/unsloth/issues/18465)) — 尚未实现但正在评估中。

- ✅ **硬件与后端**：  
  - 增强 AMD Strix Halo NPU/GPU 检测逻辑 ([PR #17538](https://github.com/unslothai/unsloth/pull/17538)) — 可自动识别更快的 GPU 执行路径。  
  - 改进 gfx1200（RDNA4）GPU 的 ROCm 兼容性，尽管内核崩溃问题仍未解决 ([#18403](https://github.com/unslothai/unsloth/issues/18403))。  
  - 通过设备感知检查，实现非 CUDA 设备（Intel XPU、Ascend NPU）上的完整 BF16 支持 ([PR #18712](https://github.com/unslothai/unsloth/pull/18712))。

---

### **4. 性能与优化**  
- 🚀 **图像生成**：由于轻量级内核和改进的内存布局，在小型 GPU 上提速高达 **40%**（基于 v0.1.921-beta）([v0.1.921-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.921-beta))。  
- 🔁 **MCP 工具效率**：消除每条消息均需重新处理整段对话的问题——对长时运行的代理工作流至关重要 ([#17015](https://github.com/unslothai/unsloth/issues/17015))。  
- 💾 **内存使用**：通过 `--load-mode none` 选项减少 mmap 强制加载带来的 SSD/RAM 压力 ([#17605](https://github.com/unslothai/unsloth/issues/17605))。  
- ⚙️ **微调用户体验**：提议自动检测 `max_seq_length` ([#18236](https://github.com/unslothai/unsloth/issues/18236)) — 取消手动统计 token 步骤。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 是否有修复 PR？ |
|--------|------|--------|--------|
| 严重 | 在特定硬件上加载模型时崩溃（v0.1.920-beta）([#18563](https://github.com/unslothai/unsloth/issues/18563)) | 开放 | ❌ 尚无 PR |
| 高 | Inkling 2 Mini 在 32GB RAM 笔记本上无法加载 ([#18690](https://github.com/unslothai/unsloth/issues/18690)) | 开放 | ❌ 等待调查 |
| 高 | 双 RX 6700 XT ROCm 崩溃 ([#18622](https://github.com/unslothai/unsloth/issues/18622)) | 开放 | ❌ 尚无修复 |
| 中 | 管理账户无法加载子文件夹仓库 ([#18647](https://github.com/unslothai/unsloth/issues/18647)) | 开放 | ❌ 尚未解决 |
| 低 | macOS 更新期间出现安全警告 ([#18699](https://github.com/unslothai/unsloth/issues/18699)) | 开放 | ❌ 很可能是误报 |

> ⚠️ 多个稳定性问题仍存在于 ROCm、AMD NPU 及多 GPU 配置环境中。

---

### **6. 对应用开发者的意义**  
- **构建高效代理**：利用 `Inkling 2 Mini` 和修复后的 MCP 工具链，在消费级硬件（16GB RAM）上实现低延迟、状态保持的推理能力。  
- **优化微调流程**：使用即将推出的自动 `max_seq_length` 检测功能 ([#18236](https://github.com/unslothai/unsloth/issues/18236))，降低预处理开销。  
- **为多模态应用未来布局**：Apple Silicon 上新增视频重风格化功能，以及计划中的音频预览支持 ([#18251](https://github.com/unslothai/unsloth/issues/18251))，将推动更丰富的代理交互界面。  
- **规避回归风险**：请勿在 ROCm/gfx1200 系统上部署 v0.1.920-beta 及更早版本；请关注 [#18403](https://github.com/unslothai/unsloth/issues/18403) 获取补丁更新。

> 🔗 **关键资源**：  
> - [模型选择器 UI 反馈](https://github.com/unslothai/unsloth/issues/18321)  
> - [主题市场提案](https://github.com/unslothai/unsloth/issues/18706)  
> - [翻译模式增强](https://github.com/unslothai/unsloth/issues/18666)

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*