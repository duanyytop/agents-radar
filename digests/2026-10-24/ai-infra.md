# AI 基础设施日报 2026-10-24

> 生成时间: 2026-10-24 01:00 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI推理基础设施生态报告 – 2026-10-24**

---

### **1. 生态概览**

2026年第四季度，AI推理基础设施领域呈现出硬件高度专用化、分布式与异构部署复杂度上升、安全与正确性问题日益紧迫的特征。各项目在性能、可移植性和开发者体验维度上呈现分化趋势：vLLM和SGLang在数据中心规模部署中领先于高吞吐、低延迟引擎优化；llama.cpp和Unsloth则主导消费级硬件上的轻量级本地推理；Ollama和LiteLLM作为开发者与智能体的便捷入口与编排工具。一系列重大安全事件——尤其是被污染的`litellm==1.107.0`版本发布——凸显了开源工具链生态日益扩大的攻击面。

---

### **2. 活跃度对比**

| 项目         | 未解决议题 (Open) | 近期PR数 | 发布状态               |
|--------------|-------------------|----------|------------------------|
| **vLLM**     | 318               | 52       | 无新版本；聚焦夜间构建 |
| **SGLang**   | 421               | 68       | 无新版本；CI不稳定    |
| **llama.cpp**| 397               | 41       | `b11846`, `b11840`, `b11838` |
| **Ollama**   | 267               | 32       | v0.40.11-rc0 + Nemotron模型 |
| **LiteLLM**  | 526               | 29       | 安全补丁；已撤回版本   |
| **Unsloth**  | 215               | 45       | v0.1.910-beta 已发布    |

> 🔍 *观察*：尽管发布频率较低，**SGLang** 和 **LiteLLM** 在议题与PR数量上居首——反映出高强度开发与稳定性挑战。**Unsloth** 推出重大测试版，标志其本地推理工具链走向成熟。

---

### **3. 模型支持竞赛**

| 新模型 / 架构              | 支持项目                     | 备注 |
|----------------------------|------------------------------|------|
| **Qwen3.8-Flash-Next (GB10)** | vLLM, SGLang, llama.cpp      | vLLM 在优化方面领先；SGLang 增加 Engram/MLU 支持 |
| **DeepSeek-V4-Flash / V4.1**  | SGLang（优先），vLLM（进行中） | SGLang 具有更深层次内核调优 |
| **Kimi-K3 (ROCm/Hopper)**     | vLLM（已修复），SGLang（追踪） | vLLM 现已在 ROCm 上稳定运行 |
| **Nemotron 3.5 Bolt E4B (128K)** | **Ollama**（独家）            | Ollama Library 中首个主流多模态模型 |
| **Flint, MOSS-Image, Nemotron Bolt 4B (GGUF)** | **Unsloth**（测试版）       | 唯一提供完整本地 GGUF 支持的项目 |
| **Cambricon MLU, T-Head SAIL, Ascend NPU** | **SGLang**（路线图）        | 领先的多硬件支持计划 |

> 🏆 **领跑者**：**SGLang** 在跨架构模型支持上领先，尤其在新兴国产芯片领域。**Ollama** 则在精选、生产就绪模型可用性方面胜出。

---

### **4. 性能前沿**

| 关注方向                 | 领先项目                          | 关键进展 |
|--------------------------|-----------------------------------|----------|
| **KV缓存管理**           | vLLM, SGLang                      | 可编程策略（vLLM RFC #57103），HiCache 阶段引入（SGLang），批处理无关执行 |
| **推测解码**             | vLLM, SGLang                      | Triton驱动单次启动草案预算（vLLM）；SGLang 存在混合推测解码崩溃风险 |
| **内核优化**             | vLLM, SGLang, llama.cpp           | 融合 KDA conv1d（vLLM），向量化反量化（SGLang），DP4A MMQ 强制执行（llama.cpp） |
| **量化与内存**           | llama.cpp, Unsloth                | JQ2_K 至 JQ6_K 量化类型；QSA 注意力跳过（Qwen4exp）；Mac 上 MoE 动态卸载 |
| **分布式服务**           | SGLang, vLLM                      | Engram 行读取（SGLang），分页 KV，张量并行 allreduce（llama.cpp） |

> ⚙️ **趋势**：前沿正从原始速度转向**可预测性与可组合性**——例如确定性行为、可编程缓存、可复现的智能体输出。

---

### **5. 层级定位**

| 项目         | 主要层级                | 核心差异点 |
|--------------|-------------------------|------------|
| **vLLM**     | 高性能推理引擎          | 优化内核，聚焦 Blackwell/ROCm，可扩展批处理 |
| **SGLang**   | 分布式推理运行时        | 分层调度，多节点支持，异构后端流水线 |
| **llama.cpp**| 本地/边缘运行时         | GPU/CPU/NPU 可移植性，依赖极少，低资源部署 |
| **Ollama**   | 本地网关与用户体验平台  | 开发者优先命令行，模型库，语音/视觉集成 |
| **LiteLLM**  | 多厂商API网关           | 统一路由，成本追踪，兼容 OpenAI 的代理 |
| **Unsloth**  | 本地智能体开发栈        | 桌面安装器，微调API，Flows 编辑器，MLX MoE 卸载 |

> 🧩 **定位洞察**：  
> - **工程师**：vLLM/SGLang 用于大规模系统扩展  
> - **开发者**：Ollama/LiteLLM 用于快速原型开发  
> - **研究者/高级用户**：llama.cpp/Unsloth 用于边缘/本地实验

---

### **6. 趋势信号**

#### ✅ **提取的关键行业趋势**
1. **硬件专用化加速**：AMD（ROCm）、NVIDIA（GB10）、Apple（Hexagon）、寒武纪、平头哥等——项目不再“一招通用”。vLLM 和 SGLang 正大力投入厂商专属内核。
2. **安全已成为核心基础设施关切**：`litellm==1.107.0` 的妥协事件表明，供应链完整性必须嵌入 CI/CD 流水线——预计未来将出现更多审计工具与签名发布。
3. **以智能体为中心的设计推动创新**：`/render`/`/derender`、结构化输出控制、会话感知路由（`x-opencode-session`）、Flows 节点编辑器等功能，标志着从提示工程转向**智能体编排**。
4. **内存效率不可妥协**：面对超过128K上下文和MoE架构，如 QSA 注意力（llama.cpp）、VRAM预算保护（Unsloth）、动态卸载（MLX）等优化成为必需。
5. **本地推理日趋成熟**：Unsloth 的桌面安装包、Ollama 的 Apple Foundation Models、llama.cpp 对 Hexagon 的支持，表明**本地、安全、高速推理**已不再是小众选择。

#### 📌 **应用开发者应关注事项**
- **关注 vLLM 的 `indexer_budget` 修复 (#62776)** —— 影响 GB10 上的提示保真度，可能破坏下游智能体。
- **绝对避免使用 `litellm==1.107.0`** —— 请改用 `main-latest` 或 `main-stable`。
- **为可编程 KV 缓存做好准备**（vLLM RFC #57103）：未来 API 将允许按请求定义保留规则。
- **利用 Ollama 的 Nemotron 3.5 Bolt E4B** 实现本地高速大上下文多模态任务。
- **使用 Unsloth 的 Flows 编辑器** 构建可视化智能体工作流，无需外部工具。

---

> ✅ **最终建议**：生产环境智能体请**锁定 vLLM 0.31.0**，待回归问题修复后再升级。本地开发推荐 **Ollama + Unsloth**，云路由使用 **LiteLLM**。部署前务必对照**安全通告**进行验证。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest – 2026-10-24

---

### **1. 今日亮点**

vLLM 继续在高性能、硬件特定推理领域积极拓展，针对 ROCm（AMD）和 Blackwell（SM12x）平台完成了关键修复。主要进展包括修复 ROCm 上 Kimi-K3 的精度下降问题，对 GB10（DGX Spark）上的 Qwen3.8-Flash-Next 实施性能优化，并推进可编程 KV 缓存与批处理无关执行的基础工作，以实现更可预测、可扩展的服务能力。PR 流水线显示出底层内核调优与跨平台稳定性的强劲势头。

---

### **2. 发布与破坏性变更**

过去 24 小时内未发布新版本。  
**注意**：vLLM 0.32 夜间构建正在积极测试中；使用 GB10（DGX Spark）的用户应关注已知问题，例如提示词截断超过 `indexer_budget`（参见 #62776）。

---

### **3. 新模型与硬件支持**

- ✅ **DeepSeek-V4-Flash / DeepSeek-V4-Flash-0731** 正在通过 [Issue #50576](https://github.com/vllm-project/vllm/issues/50576) 推进 SM8x（Ampere: A100/A800/RTX 30xx）支持 —— 对于广泛部署至关重要。
- 🚀 **Qwen3.8-Flash-Next** 通过 [Issue #59575](https://github.com/vllm-project/vllm/issues/59575) 在 **gfx950 / MI355X（ROCm）** 上获得针对性性能优化。
- 🔧 **Dory1.0-4B-BF16** 已作为受支持模型加入 ([PR #60149](https://github.com/vllm-project/vllm/pull/60149))，该模型由 NVIDIA-Nemotron-Labs 开发，属于潜在递归型 LLM。
- 🎯 **Kimi-K3** 获得专用 ROCm 性能与正确性修复 ([PR #63409](https://github.com/vllm-project/vllm/pull/63409))，现对 Hopper 设备支持更佳。

---

### **4. 性能与优化**

- ⚡ **GB10（DGX Spark）上的 Qwen3.8-Flash-Next**：通过 [Issue #57149](https://github.com/vllm-project/vllm/issues/57149) 与 [PR #63342](https://github.com/vllm-project/vllm/pull/63342) 实现显著性能提升，优化了融合 KDA 预填充 conv1d 中的 `block_m=128`，修复了 `block_m=8` 时 >2 倍的性能下降。
- 📈 **推测解码**：[PR #63421](https://github.com/vllm-project/vllm/pull/63421) 将基于 `torch.compile` 的草稿预算选择替换为单次启动的 Triton 内核，消除服务过程中的编译停顿，主机开销降低约 6 倍。
- 🛠️ **MoE 与专用内核**：AMD 主导的 [专用 MonoKernels](https://github.com/vllm-project/vllm/issues/60904) 进展顺利，针对 ROCm 平台上的 Qwen 与 Kimi 模型进行优化，[PR #61482](https://github.com/vllm-project/vllm/pull/61482) 为 MI355X 上的 DeepSeek-V4-Pro 提供独立的 mono-decode 层。
- 🔄 **批处理无关执行**：[Issue #27433](https://github.com/vllm-project/vllm/issues/27433) 取得进展，实现跨批次确定性行为——对可复现的代理输出至关重要。

---

### **5. 稳定性与回归问题**

| 严重性 | 问题 | 摘要 | 修复状态 |
|--------|------|------|----------|
| 🔴 严重 | [#62776](https://github.com/vllm-project/vllm/issues/62776) | Qwen3.8-Flash-Next（GB10）上，超出 `indexer_budget`（约 2048 个 token）的提示内容不可见，模型表现如同提示提前结束。 | ❌ 尚无修复 |
| 🔴 严重 | [#60007](https://github.com/vllm-project/vllm/issues/60007) | TRITON_MLA 注意力后端在启用 `VLLM_BATCH_INVARIANT=1` 的分块预填充下无法保持批处理无关性。 | ❌ 尚无修复 |
| 🟡 高 | [#61229](https://github.com/vllm-project/vllm/issues/61229) | NixlConnector 在远程读取时释放 KV 块 → 解码阶段消费了被覆盖的数据。 | ❌ 尚无修复 |
| 🟡 中 | [#60160](https://github.com/vllm-project/vllm/issues/60160) | ROCm 上高并发场景下，当 `VLLM_ROCM_USE_AITER=1` 时，Qwen3.8-27B-FP8 出现精度崩溃。 | ❌ 尚无修复 |

> **注意**：多个影响生产级推理的高严重性漏洞（尤其在 AMD 及新型 NVIDIA 架构上）仍未解决。用户应避免在不稳定配置中使用 `--decode-context-parallel-size`、`VLLM_ROCM_USE_AITER=1` 或 `VLLM_BATCH_INVARIANT=1`。

---

### **6. 对应用开发者的启示**

- **谨慎使用实验性功能**：在稳定修复落地前，请避免使用 `VLLM_BATCH_INVARIANT=1`、`VLLM_ROCM_USE_AITER=1` 以及 `--decode-context-parallel-size`，这些可能引发无声的正确性问题。
- **预期硬件间性能差异**：ROCm（MI355X）与 GB10（DGX Spark）性能正在快速提升但仍不一致；请对模型进行端到端测试。
- **利用去中心化服务架构**：随着 `/render` 与 `/derender` 端点趋于稳定，您可构建自定义代理流水线，支持结构化输出、工具调用与流式推理。
- **准备应对可编程 KV 缓存**：[RFC #57103](https://github.com/vllm-project/vllm/issues/57103) 引入可组合策略——未来 API 将允许您按请求控制缓存保留、迁移与配额。
- **关注夜间构建**：vLLM 0.32 夜间版正积极优化 Qwen 与 Kimi 模型，适合测试前沿性能，但尚未达到生产就绪状态。

> ✅ **推荐操作**：在重大回归问题修复前，建议锁定至 vLLM 0.31.0 以确保推理稳定性。请跟踪 [Issue #62776](https://github.com/vllm-project/vllm/issues/62776) 与 [PR #63432](https://github.com/vllm-project/vllm/pull/63432) 以获取 GB10 上提示截断问题的修复进展。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 简报 – 2026-10-24**

---

### **1. 今日重点**  
SGLang 生态系统持续深化对高级推理模式的支持，针对 NVIDIA 与 AMD 硬件上的 DeepSeek-V4/V4.1 以及 Qwen3.8-Flash-Next 实现了关键性能优化。推测解码适应性与分层 KV 缓存调度方面取得重大进展，但因 PR 测试流水线持续不稳定，CI 稳定性仍是首要关注点。

---

### **2. 发布与破坏性变更**  
*过去 24 小时未报告新版本或破坏性变更。*  
未发布新版本或破坏性 API/配置变更。项目在生产环境中保持稳定，但多个 PR 正在处理依赖项健康问题（如避免预发布依赖；#14930）和 CI 可靠性问题（#42752）。

---

### **3. 新模型与硬件支持**  
- **寒武纪 MLU**：通过 PR #45149 添加初始平台支持，包含设备管理、CNCL 通信、RMSNorm 内核及 CI 集成。
- **平头哥 SAIL（真武 810/810E/M890P）**：已制定首流支持路线图（#37519），上游化工作正在进行中。
- **昇腾 NPU**：Worker rank 的拓扑感知 CPU/NUMA 亲和性现已追踪（#39348），MXFP8/MXFP4 能力验证仍在进行中（#34559）。
- **SenseNova-U1/U1.5**：基于官方 OpenSenseNova 仓库启动功能与性能跟踪（#37742）。

---

### **4. 性能与优化**  
- **DeepSeek-V4/V4.1**：多项优化已合并：
  - 从对端设备读取 Engram 行，减少跨节点通信流量（#46180）。
  - MegaMoE 输入写入在 MegaGate 下优化，消除冗余遍历，提升吞吐量（#46163）。
  - 分页 KV 解量化向量化，每程序处理 4 个 token，提升内存复用效率（#42929）。
- **Qwen3.8-Flash-Next（ROCm）**：已开启 gfx950 / MI355X 优化性能追踪（#44304）。
- **通用内核改进**：
  - 引入融合残差加法 + RMSNorm 内核用于确定性模式，将内核启动次数从约 10 次降至 1 次（#46159）。
  - 空间并行因果卷积输入现可一次性构建，降低解码开销（#46174）。
  - HiCache 阶段分配器将 `list.pop(0)` 替换为 `deque`，消除热路径中的 O(N) 开销（#46178）。

---

### **5. 稳定性与回归问题**  
今日报告高严重性问题：
- **EP2（tp=2 + ep=2）崩溃**：在 Qwen3.8-Flash-Next-NVFP4 服务期间，RTX PRO 6000（sm_120）出现非法内存访问（#44291）。*修复待定。*
- **HiCache + Mooncake L3 崩溃**：调度器承认无法完成预填充，导致所有 radix 节点被锁定时出现“预填充内存不足”错误（#45989）。*已在 8×H200 上复现。*
- **推测解码 + NVFP4 KV 缓存**：因 dequant 工作空间路径中 `extend_prefix_lens_cpu` 为 `None` 导致崩溃（#36010）。*阻塞混合推测解码工作流的部署。*
- **流式工具调用损坏**：Anthropic 流式输出若参数间存在空格，会丢失结尾 `}`，影响多工具输出（#42260）。

> 🔴 **严重**：不稳定的 CI 基础设施（#42752）持续干扰 PR 验证，影响开发效率。

---

### **6. 对应用开发者的意义**  
- **使用推测解码 + NVFP4 时需谨慎**——这些功能在 #36010 修复前仍不兼容。
- **利用新融合内核与 Engram/MLU 优化，针对高吞吐批处理推理进行优化**，尤其适用于 DeepSeek-V4 模型。
- **充分利用 HiCache 改进**，如基于 deque 的分配器与阶段缓冲区优化，以提升大规模代理任务的可扩展性。
- **合并 PR 前监控 CI 稳定性**——即使本地测试通过，不稳定的测试也可能延迟发布周期。
- **规划异构部署方案**：随着对平头哥、昇腾、寒武纪后端支持不断增强，应用应具备处理多样化硬件拓扑与 NUMA 亲和调度的能力。

👉 [GitHub Issue #42752](https://github.com/sgl-project/sglang/issues/42752) | [PR #46178](https://github.com/sgl-project/sglang/pull/46178)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp 消息简报 – 2026-10-24**

---

### **1. 今日亮点**  
`b11846` 版本通过静态断言强制要求 CUDA DP4A MMQ 内核的 tile 高度必须为 warp 对齐，显著增强了对 Blackwell 时代 GPU 的鲁棒性。在 macOS/iOS 平台，Hexagon 后端新增 `CEIL` 操作（f32/f16），扩展了对 Apple Silicon 上边缘推理的支持。与此同时，针对特定模型的优化工作持续推进——Qwen4exp 现在通过 QSA 注意力跳过 `kq_mask` 的内存分配，在超长上下文长度下最多可节省 4 GB 内存。

---

### **2. 发布与破坏性变更**  
- **`b11846` (CUDA):** 通过静态断言强制要求 DP4A MMQ tile 高度必须是 warp 大小的整数倍（#30837）。该措施可防止 SM 12.0+ GPU 上出现无声失败，但若使用自定义内核则可能需要重新编译。  
  🔗 [PR #30837](https://github.com/ggml-org/llama.cpp/pull/30837)  
- **`b11840` (Hexagon):** 为 Apple Hexagon NPU 新增 `CEIL(f32)` 与 `CEIL(f16)` 指令；更新操作列表及文档。  
  🔗 [PR #31006](https://github.com/ggml-org/llama.cpp/pull/31006)  
- **`b11838` (核心):** 通过将 `ggml_time_us` 从 `int64_t` 改为 `double` 来修复溢出问题。此变更影响长时间推理会话中的高精度计时。  
  🔗 [PR #30969](https://github.com/ggml-org/llama.cpp/pull/30969)

> ✅ *今日未报告任何破坏性 API 变更。*

---

### **3. 新模型与硬件支持**  
- **模型:** `qwen4exp` 现在支持无需 `kq_mask` 的 QSA 注意力机制，在 4K–8K 上下文长度下可减少 2–4 GB 内存开销。  
  🔗 [PR #30965](https://github.com/ggml-org/llama.cpp/pull/30965)  
- **硬件:**  
  - **Hexagon:** 为 Apple Silicon（arm64）设备新增 `CEIL` 操作支持。  
    🔗 [PR #31006](https://github.com/ggml-org/llama.cpp/pull/31006)  
  - **Vulkan:** PR #25051 引入张量并行 allreduce 以实现多 GPU 扩展（开发中）。  
    🔗 [PR #25051](https://github.com/ggml-org/llama.cpp/pull/25051)  
- **量化:** 新增五种 CPU/Metal/CUDA/Vulkan 量化类型（`JQ2_K` 至 `JQ6_K`）——基于 ikawrakow 的 IQ*_K 设计，提供更精细的精度与速度权衡。  
  🔗 [PR #30715](https://github.com/ggml-org/llama.cpp/pull/30715)  

---

### **4. 性能与优化**  
- **内存节省:** Qwen4exp 移除 `kq_mask` 后，在超长上下文（UB 4096–8192）下可降低约 2–4 GB 的 GPU/主机内存占用，释放资源用于专家缓存或更大上下文。  
  🔗 [PR #30965](https://github.com/ggml-org/llama.cpp/pull/30965)  
- **内核级优化:** Hexagon Flash Attention 现在在 `n_kv_heads` 无法整除核心数量时采用团队化 KV-head 分割策略，避免低效的 token 分区回退。  
  🔗 [PR #31055](https://github.com/ggml-org/llama.cpp/pull/31055)  
- **CI 优化:** 修复了共享模型缓存目录的 CI 运行器数据竞争问题，提升了测试可靠性和构建稳定性。  
  🔗 [PR #31046](https://github.com/ggml-org/llama.cpp/pull/31046)

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题描述 | 受影响后端 | 状态 | 修复 PR？ |
|--------|------|------------------|--------|---------|
| 关键 | `Q4_1/Q5_1` 矩阵-向量内核在块偏移乘法过程中发生 FP16 溢出 → 出现 NaN logits | CUDA | 已打开 | ❌ |
| 高 | Metal MUL_MAT 在 BF16 src1 且 K ≥ 64、batch > 8 时崩溃 | Metal | 已打开 | ❌ |
| 高 | SYCL F16：自 #29107（IQ3 重排）起，Qwen3.8-27B Q4_K_M 输出为 NaN | SYCL | 已打开 | ❌ |
| 中等 | Vulkan：模型从显存被驱逐后无法重新加载 | Vulkan | 已关闭 | ⚠️ 部分修复（尚未实现自动重载逻辑） |
| 中等 | 混合/递归模型的上下文检查点失效 | 混合 | 已打开 | ❌ |

> 📌 **最高优先级：修复 `Q4_1/Q5_1` 溢出漏洞（问题 #30950）——当前已导致模型输出完整性受损。**

---

### **6. 对应用开发者的影响**  
- **使用 `--spec-type draft-mtp-adaptive`**（新功能，来自 PR #27210）可在推测解码中动态控制草稿深度，提升吞吐量而无需手动调参。
- **在 #28185 修复前，避免对 MoE 模型使用 `--tensor-split`** ——负载下可能出现间歇性输出退化。
- **对于 Apple Silicon 用户：** 通过 Hexagon 后端启用 `CEIL` 指令，可提升边缘推理任务（如实时音视频处理）的精度。
- **在 CUDA 系统上：** 在 #30950 修复前，避免对大模型使用 `Q4_1/Q5_1` 量化——预期会出现损坏的 logits。
- **对于服务器部署：** 监控 `/tools` 端点安全（PR #29834），防止跨域攻击利用系统工具（如 `exec_shell_command`）。

> 💡 **实用技巧：** 使用 `--cache-disk`（问题 #20697，21 条评论）将上下文卸载至磁盘——非常适合在低内存硬件上运行长上下文智能体。

---  
*简报源自 [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) – 2026年10月24日*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-24**

---

### **1. 今日亮点**  
Ollama v0.40.11-rc0 修复了 `qwen3coder` 和 OpenCode 上下文处理的关键问题，同时 **NVIDIA Nemotron 3.5 Bolt E4B** 的发布——一款基于 Gemma 4、支持 128K token、专为本地部署优化的视觉语言模型——标志着轻量级高上下文 AI 推理迈出了重要一步。新提交的 PR 主要聚焦于工具调用准确性、压缩机制鲁棒性以及通过 Phonon 实现的语音处理改进。

---

### **2. 发布与破坏性变更**  
- **v0.40.11-rc0**:  
  - 修复 `qwen3coder` 在参数中保留字面量函数闭合标签的问题 ([#19228](https://github.com/ollama/ollama/pull/19228))。  
  - 确保 OpenCode 启动时使用分配的（而非声明的）上下文大小 ([#19193](https://github.com/ollama/ollama/pull/19193))。  
  - 为 `vllm-d3` 决策模型启用空状态支持 ([#19173](https://github.com/ollama/ollama/pull/19173), [#19226](https://github.com/ollama/ollama/pull/19226))。  
- **v0.40.10**: 引入 **Nemotron 3.5 Bolt E4B**，一款紧凑、快速、支持 128K 上下文的视觉语言模型，特别适合本地推理与工具调用 ([Ollama Library](https://ollama.com/library/nemotron-3.5-bolt))。

---

### **3. 新模型与硬件支持**  
- **新模型**:  
  - **Nemotron 3.5 Bolt E4B**（基于 Gemma 4，128K 上下文，支持 DFlash d）——现已可通过 `ollama run nemotron-3.5-bolt:latest` 使用。  
- **硬件与后端更新**:  
  - 为 macOS 27+ 添加对 **Apple Foundation Models** (`apple-foundation-model`) 的实验性运行器支持 ([#19184](https://github.com/ollama/ollama/pull/19184))。  
  - 继续推进 Apple Silicon（M3/M5）上的 MLX 优化，但性能差距仍存在（例如 `flint:40b-a2b-gguf-nvfp4` 在 M3 Pro 上比 QAT-int4 变体更慢）([#19254](https://github.com/ollama/ollama/issues/19254))。  
  - **Windows/Snapdragon X Elite NPU/GPU** 支持尚未实现；功能请求 (#5360) 已获 68 个赞，正在积极跟踪。  
  - Intel Mac 上的 AMD GPU 支持仍受阻于问题 #1016（174 条评论）。

---

### **4. 性能与优化**  
- **工具调用准确性**: 通过 PR [#19252](https://github.com/ollama/ollama/pull/19252) 修复工具调用中整数转浮点参数的转换问题（如 `30000` → `"30000.0"`），防止模式校验失败。  
- **压缩与流式传输**:  
  - 通过提醒提示改进压缩修复逻辑 ([#19230](https://github.com/ollama/ollama/pull/19230))。  
  - OpenAI 兼容端点中的流式输出刷新现已正确处理 ([#17027](https://github.com/ollama/ollama/pull/17027))。  
- **视觉处理**: 通过动态网格舍入增强紧凑型 Gemma 4 模型对小图像细节的保留能力 ([#19247](https://github.com/ollama/ollama/pull/19247))。  
- **语音合成**: Phonon 现在支持完整文本归一化（展开符号、数字、链接），并集成语音目录 ([#19242](https://github.com/ollama/ollama/pull/19242), [#19234](https://github.com/ollama/ollama/pull/19234))。

---

### **5. 稳定性与回归问题**  
- **严重回归**:  
  - 自 10 月 12 日（德国时间）起，`glm-5.3-flash:cloud` 出现大规模生成失败：约 5–8% 的请求产生退化的输出（"the = the = the..."），与集群 829 数据损坏相关 ([#18980](https://github.com/ollama/ollama/issues/18980))。  
  - **云模型可靠性**：Ollama Cloud 使用中频繁报告 503 错误 ([#15419](https://github.com/ollama/ollama/issues/15419))，影响生产级代理。  
  - **JSON 模式违规**：尽管客户端配置正确，云模型仍忽略回复模式 ([#12362](https://github.com/ollama/ollama/issues/12362))。  
- **高影响缺陷**:  
  - `OLLAMA_CONTEXT_LENGTH` 在 `/api/tags` 与 `/api/show` 响应中未被尊重 ([#18995](https://github.com/ollama/ollama/issues/18995))。  
  - Windows 上大提示词触发约 15 秒后连接重置 ([#19139](https://github.com/ollama/ollama/issues/19139))。  
  - 当驱逐操作与活跃的 `keep_alive` 请求冲突时，调度器会卡死 ([#19245](https://github.com/ollama/ollama/issues/19245))。  
- **进行中的修复**:  
  - 修复工具调用渲染、压缩流程和上下文长度报告的 PR 已提交，但尚未合并。

---

### **6. 对应用开发者的意义**  
- **对智能体与工具使用**：预期结构化输出与工具调用完整性将得到改善——尤其在 Flint 与 Qwen3 变体上。但建议在回归问题解决前避免使用 `glm-5.3-flash:cloud`。  
- **对云部署**：需准备应对间歇性 503 错误与模式不匹配；建议设置备用方案或本地模型缓存。  
- **对本地推理**：可利用 Nemotron 3.5 Bolt E4B 实现快速、高上下文的图文对话。在 Apple Silicon 平台上，请关注不同量化格式之间的 MLX 性能差异。  
- **对 API 集成**：谨慎使用 `OLLAMA_CONTEXT_LENGTH`——其值不会反映在 API 元数据中。确保客户端正确处理流式刷新。  
- **安全提示**：本地部署无内置认证（参见 [#19238](https://github.com/ollama/ollama/issues/19238)）；生产环境请通过反向代理或中间件实现访问控制。  

> 🔗 *保持更新：[GitHub Issues](https://github.com/ollama/ollama/issues) | [模型库](https://ollama.com/library)*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

### **LiteLLM Digest — 2026-10-24**

#### **1. 今日亮点**  
一起涉及 `litellm==1.107.0` 版本被篡改的严重安全事件已解决：PyPI 和 Docker 镜像（`latest`、`main-latest`、`main-stable`）已被移除，原因是存在凭据窃取后门（`cook.pth` + `sitecustomize` RCE 加载器）。社区应立即验证自身部署是否仍在使用该版本。与此同时，多个高优先级修复已合并，包括改进支出日志可靠性、增强工具清除时的上下文管理，以及支持 OpenCode Go 的 `x-opencode-session` 头字段。

#### **2. 发布与破坏性变更**  
- **安全警报**：`litellm==1.107.0`（发布于 2026-10-21）被植入恶意载荷，**已遭入侵**。所有相关 PyPI 包及 Docker 镜像（`ghcr.io/berriai/litellm*`、`docker.io/litellm/litellm`）均已**被移除**。用户必须完全避免使用此版本。  
  🔗 [Issue #47826](https://github.com/BerriAI/litellm/issues/47826) | 🔗 [PR #48131](https://github.com/BerriAI/litellm/pull/48131)（修复支出日志一致性）

#### **3. 新模型与硬件支持**  
- 通过 PR #46744 新增 **Engy** 作为 OpenAI 兼容提供方：通过 `https://api.engy.ai/v1` 支持 8 个模型，使用 `ENGY_API_KEY` 进行认证。  
- **OpenCode Zen 与 Go** 提供方现已在 LiteLLM 代理中受支持（PR #39549），可实现自动注入 `x-opencode-session`，确保会话路由稳定。  
- 请求支持 **Gemini Live Avatar**（Issue #43166）：待集成 `avatar_config`，通过 `bidiGenerateContent` 实现实时对话头像视频。

#### **4. 性能与优化**  
- **成本归属修复**：PR #48088 确保 OpenAI 的 12 小时提示缓存写入按正确的 2.5 倍费率计费，而非默认的 1.25 倍，提升 GPT-5.6+ 用户的成本准确性。  
- **路由器效率**：PR #48134 引入对健康部署上固定会话的重试逻辑，避免在冷却前不必要的降级延迟。  
- **支出日志可靠性**：PR #48131 确保每个请求的支出汇总等待完成，并报告其失败情况，解决了 `spend_logs` 与每日汇总之间的差异问题。

#### **5. 稳定性与回归问题**  
- **严重安全漏洞**：`1.107.0` 包含后门（RCE + 凭据窃取）；所有实例必须立即升级或回滚。  
- **令牌计数错误**：Issue #47327 报告 `token_counter` 拒绝 `"original"` 图像细节值——该值由 OpenAI 新增。导致预调用验证错误并跳过上下文窗口检查。  
- **响应流损坏**：Issue #26387 显示 BedrockGuardrail 流式钩子在收到 200 OK 后丢弃 HTTPException，造成 SSE 流断裂。  
- **缺失元数据**：Issue #47841 确认 `/v1beta/interactions` 的 `spend_logs_metadata` 永远不会记录，导致 Gemini Interactions 审计链断裂。  
- **密钥预算绕过漏洞**：PR #47681 修复了通过 `budget_duration` 操纵实现预算重置绕过的漏洞；现与 `max_budget` 一样受控。

#### **6. 对应用开发者的意义**  
- **必须立即行动**：审计所有部署中是否使用 `litellm==1.107.0`。从生产环境彻底移除该版本。  
- **可观测性增强**：通过 PRs #48131 与 #48135，支出日志和请求指标现在更可靠，且与 PostHog 更好集成。使用 `x-litellm-call-id` 关联日志。  
- **新提供方集成**：利用 Engy 与 OpenCode Go 提供方实现多样化推理路由与稳定对话追踪。  
- **智能体开发注意**：关注 `context_management` 行为——近期修复（#47857、#47861）确保系统提示与工具清除在各模型间行为一致。  
- **未来兼容性准备**：关注 `avatar_config` 支持（Gemini Live）与 `x-opencode-session` 传播——对高级智能体 UI 与会话感知服务至关重要。

> ✅ **建议**：升级至最新稳定版（截至 2026-10-24 的 `main-latest` 或 `main-stable`），并验证自定义提供方与中间件是否符合新的安全加固要求。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

### **Unsloth Digest — 2026-10-24**

#### **1. 今日亮点**  
v0.1.910-beta 版本为 Recursive 的 Flint、MOSS-Image 以及 NVIDIA 的 Nemotron Bolt 4B 提供了完整的本地推理支持（通过 GGUF 格式），使消费级硬件也能实现高性能大语言模型服务。可用性迎来重大提升：MLX MoE 模型现在即使超出系统内存，也能在 Mac 上运行，得益于先进的动态卸载技术。此外，新增 OpenAI 兼容微调 API 及仅聊天功能的桌面安装包，进一步拓展了 Unsloth 对开发者和高级用户的覆盖范围。

> 🔗 [v0.1.910-beta 发布](https://github.com/unslothai/unsloth/releases/tag/v0.1.910-beta)

---

#### **2. 发布与破坏性变更**  
- **v0.1.910-beta**：引入 **OpenAI 兼容微调 API**、**仅聊天功能的桌面安装程序**，以及面向多用户环境的增强型模型加载机制。  
- **破坏性变更**：`llama-server` 的端口所有权检查已重构（修复 #15022），可能影响依赖旧行为的遗留脚本。请确保使用更新后的配置。  
- **注意**：模型仓库默认设置和持久化配置仍为非持久化状态（#10631），需每会话手动配置。

> 🔗 [v0.1.910-beta 更新日志](https://github.com/unslothai/unsloth/releases/tag/v0.1.910-beta)  
> 🔗 [问题 #15022 – 端口所有权修复](https://github.com/unslothai/unsloth/issues/15022)

---

#### **3. 新模型与硬件支持**  
- ✅ **Recursive Flint**（Flint-1.2，7B–13B 变体）  
- ✅ **MOSS-Image**（支持多模态输入的视觉-语言模型）  
- ✅ **NVIDIA Nemotron Bolt 4B**（专为低延迟推理优化）  
- 🖥️ **Apple Silicon 上的 MLX MoE 模型**：通过动态 CPU/GPU 卸载，全面支持超过 Mac 内存限制的 MoE 模型。  
- 📦 **请求 Flatpak 支持**（#4380）：社区对 Linux 原生打包的需求日益增长。  
- ⚙️ **MIG GPU 实例枚举**（#14981）：现可检测并暴露 R570+ CUDA 驱动下的所有 MIG 实例。

> 🔗 [问题 #4380 – Flatpak 支持](https://github.com/unslothai/unsloth/issues/4380)  
> 🔗 [PR #14981 – MIG GPU 实例暴露](https://github.com/unslothai/unsloth/pull/14981)

---

#### **4. 性能与优化**  
- **仅对 Q8_0 模型启用 BF16 cuBLAS**（#15054）：当所有加载的 GGUF 模型均为 Q8_0 时，仅在此条件下使用 BF16 cuBLAS 优化大型 Q8_0 矩阵乘法，避免不必要的开销。  
- **CFG-Batch 决策基于量化类型**（#15047）：防止因权重量化类型不同（如 INT8 与 FP8）导致的批处理模式与普通模式误用。  
- **保留显存预算预留**（#15048）：在卸载释放期间确保解码阶段的显存预算被正确尊重，防止内存溢出崩溃。  
- **提示进度可视化界面**（#14909）：实时反馈提示处理百分比、预计剩余时间及模型卸载状态——对长提示调试至关重要。

> 🔗 [PR #15054 – Q8_0 cuBLAS 优化](https://github.com/unslothai/unsloth/pull/15054)  
> 🔗 [PR #15047 – CFG-Batch 量化键控](https://github.com/unslothai/unsloth/pull/15047)  
> 🔗 [PR #14909 – 提示进度可视化界面](https://github.com/unslothai/unsloth/pull/14909)

---

#### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 摘要 | 状态 | 修复 PR |
|--------|------|--------|--------|--------|
| 高 | #15022 | Studio 因错误的“子进程未监听”端口检查而终止合法 `llama-server` | 已关闭 | ✅ 已在 #15022 中修复 |
| 高 | #14519 | 长对话因推理前基于 CPU 的会话归档嵌入而卡死 | 已关闭 | ✅ 已在 #14519 中修复 |
| 高 | #14411 | 几轮后出现核心转储；弹出后模型停止响应 | 开放 | ❌ 尚无修复 |
| 中 | #14987 | MiniCPM-V-4.7-1B 在 Vulkan 后端失败 | 开放 | ❌ 尚无修复 |
| 中 | #14695 | DeepSeek-V4.1-Flash 无法加载（`deepseek41-dspark` 架构不支持） | 已关闭 | ✅ 建议更新 llama.cpp |
| 中 | #14906 | 因 `/opt/rocm/lib` 前缀导致 AMD RDNA3 上静默降级至 CPU | 已关闭 | ✅ 由 #7208 修复引发的回归 |
| 低 | #14708 | 自动压缩后附件变为不可读 | 已关闭 | ✅ 已应用修复 |

> 🔗 [问题 #14411 – 推理后核心转储](https://github.com/unslothai/unsloth/issues/14411)  
> 🔗 [问题 #14987 – MiniCPM-V-4.7-1B Vulkan 崩溃](https://github.com/unslothai/unsloth/issues/14987)  
> 🔗 [问题 #14906 – AMD CPU 降级回归](https://github.com/unslothai/unsloth/issues/14906)

---

#### **6. 对应用开发者的意义**  
- **本地构建代理流水线**：借助新推出的 **Flows 节点编辑器**（#14730），开发者可在 Studio 内直接设计 AI 工作流、故事情节或 2D 世界，无需外部工具。  
- **启用健壮的微调能力**：使用新的 **OpenAI 兼容微调 API**，可无缝集成 unsloth 到现有训练流程中，无需重写客户端代码。  
- **安全处理大型 MoE 模型**：利用 Mac 上的 MLX MoE 卸载功能——特别适合以最少硬件投入原型化多模态智能体。  
- **规避回归问题**：立即升级至 v0.1.910-beta 以解决关键端口检查与 CPU 嵌入卡顿问题。关注问题 #14411 获取核心转储修复进展。  
- **未来兼容性保障**：在图像/视频加载中使用 `load_token`（#14827）以安全管理并发资源。留意未来版本中的定时任务（#13871）与提示进度 UI（#14909）。

> 🔗 [PR #14730 – Flows 节点编辑器](https://github.com/unslothai/unsloth/pull/14730)  
> 🔗 [PR #13871 – 定时任务](https://github.com/unslothai/unsloth/pull/13871)  

---  
*摘要生成时间：2026-10-24 | 来源：GitHub @ unslothai/unsloth*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*