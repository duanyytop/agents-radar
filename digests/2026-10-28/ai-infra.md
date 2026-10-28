# AI 基础设施日报 2026-10-28

> 生成时间: 2026-10-28 01:38 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-10-28**

---

### **1. 生态概览**  
2026年第四季度，AI推理基础设施格局呈现出向新一代硬件（Blackwell SM120、AMD MI355X/gfx1250）快速收敛的趋势，对多模态与代理为中心工作负载的激进优化，以及对可复现性、成本控制和跨平台可移植性的日益重视。各项目已不再孤立发展——vLLM、SGLang 和 llama.cpp 正在推动内核级性能突破；Ollama 和 LiteLLM 通过轻量级网关统一模型访问；而 Unsloth 则以集成代理编排重新定义开发者体验。从纯服务转向全栈代理平台的转变正在加速，这背后是实时、低延迟、高可扩展推理在多样化硬件上的强烈需求。

---

### **2. 活动对比**

| 项目       | 24小时内开启的问题数 | 24小时内合并的PR数 | 24小时内发布数 |
|---------------|------------------------|------------------------|----------------------|
| **vLLM**      | 12                     | 5                      | 0                    |
| **SGLang**    | 14                     | 7                      | 0                    |
| **llama.cpp** | 9                      | 6                      | 3 (b11944, b11930, b11940) |
| **Ollama**    | 11                     | 3                      | 0                    |
| **LiteLLM**   | 10                     | 5                      | 4 (v1.106.5, v1.105.6, v1.104.8, v1.103.10) |
| **Unsloth**   | 8                      | 2                      | 0                    |

> ✅ *观察：所有项目均表现出高活跃度，表明其生态已趋于成熟且发展迅速。release速度在 llama.cpp 与 LiteLLM 上达到峰值，主要由于频繁修复稳定性与计费相关问题。*

---

### **3. 模型支持竞赛**

| 新模型 / 架构         | 支持项目                          | 状态与说明 |
|----------------------------------|---------------------------------------|----------------|
| **DeepSeek-V4-Flash/4.1-Flash**  | vLLM (#50576), SGLang (#44304)         | 在 SM120 上部分支持；vLLM 存在严重回归问题 |
| **Qwen3.8-Flash-Next (NVFP4)**   | SGLang (✅), vLLM (⚠️), llama.cpp (✅) | SGLang 领先，支持 ROCm/NVIDIA |
| **Qwen3.8-2.4T-A95B-MXFP4**     | vLLM (✅), SGLang (✅)                 | 正在进行 AMD 特定优化 |
| **GLM-5.3-Flash**                | vLLM (✅), SGLang (✅)                 | MXFP4 + MonoKernel 支持正在进行中 |
| **LFM3 系列 (音频/视觉/决策)** | llama.cpp (✅), Ollama (✅), Unsloth (📌 请求中) | llama.cpp 与 Ollama 领先；Unsloth 进度滞后 |
| **AMD RDNA3/RDNA4 (gfx1100–1201)** | SGLang (📌 计划 #30599), vLLM (⚠️)     | SGLang 积极拓展消费级显卡支持范围 |
| **RTX PRO 6000 Blackwell (SM120)** | vLLM (⚠️), SGLang (✅), Ollama (❌)     | vLLM 存在重大回归；SGLang 稳定 |

> 🏆 **胜出者**：**SGLang** —— 对新模型（Qwen3.8-Flash-Next、LFM3）实现最全面的早期支持，并积极推进 ROCm 和消费级显卡启用。  
> ⚠️ **显著短板**：Unsloth 缺乏 LFM3 支持；尽管已集成 GGUF，Ollama 仍难以正确识别 LFM3 架构。

---

### **4. 性能前沿**

| 优化方向             | 领先项目                                | 关键进展 |
|-------------------------------|------------------------------------------------|------------------|
| **KV缓存压缩**       | vLLM (SpectralQuant RFC)，SGLang (HiCache)     | vLLM 的 SpectralQuant 通过信号集中实现约 2 倍压缩 |
| **推测性解码**       | vLLM，SGLang，llama.cpp                         | vLLM 减少冗余投影；SGLang 修复 JIT 崩溃 |
| **硬件特定内核**     | SGLang (gfx1250)，vLLM (SM120)，llama.cpp (Hexagon) | SGLang 融合 RoPE+concat+KV 写入；llama.cpp 优化 TOP_K 采样 |
| **分布式服务**       | SGLang (PD 分离)，vLLM (PDL 标志)     | SGLang 实现异步传输追踪；vLLM 探索自动启用机制 |
| **量化与卸载**       | vLLM (MXFP4)，llama.cpp (ClassLRU 缓存)，SGLang (GatedDeltaNet) | ClassLRU 提升吞吐量 +6%–7% |
| **内存效率**          | llama.cpp (`--models-memory-max`)，Ollama (恢复功能) | 动态卸载与部分拉取恢复已成为标准 |

> 🔥 **前沿焦点**：内核融合（SGLang）、结构化压缩（vLLM）与动态内存管理（llama.cpp/Ollama）主导当前创新。

---

### **5. 层级定位**

| 项目       | 主要层级                  | 角色摘要 |
|---------------|-------------------------------|--------------|
| **vLLM**      | **推理引擎**           | 高性能 GPU 推理核心；针对 Hopper/Blackwell、MoE、推测性解码优化 |
| **SGLang**    | **推理引擎 + 网关** | 全栈引擎，支持 PD 分离、HiCache 与协议灵活性；连接模型与应用 |
| **llama.cpp** | **本地运行时 / 边缘推理** | 轻量级，多后端（Vulkan/SYCL/MLX），适用于设备端及 CPU/GPU 混合场景 |
| **Ollama**    | **模型网关 / CLI 运行时** | 开发者友好的接口层；抽象后端复杂性，支持本地模型部署 |
| **LiteLLM**   | **API 网关 / 成本代理**   | 通用 API 层，具备成本核算、工具调用路由与云服务商抽象能力 |
| **Unsloth**   | **代理平台 / 训练 UI** | 向全栈代理工作流演进，集成 MCP、可视化工具与基准测试 |

> 📊 **战略分化**：  
> - **vLLM/SGLang**：聚焦大规模下的原始性能突破。  
> - **llama.cpp/Ollama**：优先考虑可访问性与边缘部署。  
> - **LiteLLM**：实现推理流的商业化与治理。  
> - **Unsloth**：构建自主代理的未来。

---

### **6. 趋势信号**

1. **硬件优先，软件次之**  
   各项目正竞相支持 **SM120 (Blackwell)** 与 **AMD gfx1250**，表明下一代GPU已开始塑造软件开发优先级。vLLM 在 Blackwell 上的高优先级回归问题凸显了过早采用的风险。

2. **代理为中心的设计已成为标准**  
   所有项目均已包含支持代理工作流的功能：SGLang 的代理缓存调度、Unsloth 的 MCP 集成、Ollama 的 `tool_reference` 以及 LiteLLM 的改进工具调用处理。这反映出从静态 LLM 服务向动态、多步骤推理系统的明确转型。

3. **可复现性与可信度至关重要**  
   vLLM 关于 **可复现 BYOG 基准测试** 的 RFC，以及 LiteLLM 修复 **预算不一致问题 (Issue #27735)**，显示出对推理流水线中信任与可审计性的日益关注——这对生产系统至关重要。

4. **多模态工作流已进入实战阶段**  
   随着 LFM3 音频/视觉支持在 **llama.cpp** 与 **Ollama** 中落地，以及 **LiteLLM** 即将上线 Cloudflare Workers AI，实时多模态代理已不再是实验性概念——而是可部署的现实。

5. **安全与稳定性比功能更重要**  
   尽管功能持续迭代，但 **关键回归问题**（如 vLLM 在 SM120 上崩溃、Ollama 无限循环）表明稳定性仍是瓶颈。开发者必须在目标硬件上充分测试后再投入生产。

---

### **面向应用开发者的建议**
- **用于生产推理**：在 Blackwell/ROCm 上使用 **SGLang** 或 **vLLM** 的最新构建版本；避免使用 `--enforce-eager`，直到修复落地。
- **用于边缘/设备端**：优先选择 **llama.cpp**，搭配 `--models-memory-max` 及 Hexagon/MLX 后端。
- **用于代理工作流**：利用 **Unsloth Studio** 实现多代理编排，但需关注 Windows/AMD 显卡的漏洞。
- **用于成本敏感应用**：使用 **LiteLLM** 并配合已验证的发布版本，避免在 #48481 修复前使用流式 `tool_choice`。
- **用于企业级 RAG/多模态场景**：组合使用 **Ollama (OCI 支持)** + **llama.cpp (LFM3)** + **LiteLLM (成本追踪)**。

> ✅ **最终提示**：生态正快速成熟——但稳定性、可复现性与硬件一致性仍是关键风险。请密切监控问题追踪器，尤其是针对新显卡架构的更新。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-10-28**

---

### **1. 今日亮点**  
vLLM 项目正在积极推进对下一代硬件的关键支持，重点聚焦于 **Blackwell (SM120)** 与 **ROCm/Mi355X** 的性能优化。核心进展包括在 SM8x 与 SM120 GPU 上启用 DeepSeek-V4-Flash / DeepSeek-V4.1，修复推测解码的回归问题，并针对 AMD ROCm 平台优化 Qwen3.8-2.4T-A95B 与 GLM-5.3-Flash。一项新的 RFC 提议引入可复现的 BYOG 基准测试，以提升代码审查质量。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告任何内容。*

---

### **3. 新模型与硬件支持**  
- **SM120 (RTX PRO 6000 Blackwell, Hopper/Blackwell 时代 GPU)**：  
  - 问题 [#50576](https://github.com/vllm-project/vllm/issues/50576) 跟踪 `DeepSeek-V4-Flash` 与 `DeepSeek-V4.1-Flash` 在 SM120（计算能力 12.0）上的支持情况。这对 RTX 5090 及未来工作站至关重要。  
  - 问题 [#40802](https://github.com/vllm-project/vllm/issues/40802) 再次强调对完整 SM120 支持的需求。  
- **ROCm / AMD MI355X**：  
  - 多个性能优化问题 ([#57149](https://github.com/vllm-project/vllm/issues/57149), [#59575](https://github.com/vllm-project/vllm/issues/59575)) 针对 `Qwen3.8-2.4T-A95B-Quark-MXFP4` 与 `Qwen3.8-Flash-Next-Quark-MXFP4`，利用 MXFP4 MoE 与稀疏注意力技术。  
  - PR [#64121](https://github.com/vllm-project/vllm/pull/64121) 为 ROCm 上的 GLM-5.3-Flash 启用 `--kv-cache-dtype mxfp4_mla`，显著提升内存效率。  
- **Rust 前端（RFC）**：  
  - 问题 [#40846](https://github.com/vllm-project/vllm/issues/40846) 持续讨论基于 Rust 的前端方案，旨在降低 Python 开销并提升性能可移植性。

---

### **4. 性能与优化**  
- **推测解码效率**：  
  - PR [#63710](https://github.com/vllm-project/vllm/pull/63710) 在 DeepSeek-V4.1 DSpark 的长前缀填充阶段减少冗余计算，通过跳过不必要的上下文投影，显著提升大输入场景下的吞吐量。  
- **KV 缓存压缩与卸载**：  
  - RFC [#43475](https://github.com/vllm-project/vllm/issues/43475) 提出 **SpectralQuant**，一种基于 TurboQuant (#38479) 的先进 KV 缓存压缩方法，通过结构化信号集中实现最高达 2 倍的压缩率提升。  
  - PR [#40545](https://github.com/vllm-project/vllm/pull/40545) 为 Kimi-VL-A3B 添加融合 MoE 调优支持，提升模型特定内核性能。  
- **PDL 与低延迟优化**：  
  - 问题 [#40543](https://github.com/vllm-project/vllm/issues/40543) 记录了未公开的 `TRTLLM_ENABLE_PDL` 与 `TORCHINDUCTOR_ENABLE_PDL` 标志，可在 Hopper/Blackwell GPU 上显著提升低延迟性能——目前正通过 RFC 探讨自动启用的可能性。

---

### **5. 稳定性与回归问题**  
- **关键推测解码回归**：  
  - 问题 [#56892](https://github.com/vllm-project/vllm/issues/56892)：在使用 `--enforce-eager` 时，**8x RTX PRO 6000 Blackwell (SM120)** 上解码吞吐量极低；CUDA Graph 完全不可用，此为高优先级修复项。  
- **系统消息验证错误**：  
  - 问题 [#41114](https://github.com/vllm-project/vllm/issues/41114)：使用 `qwen3.6-27B` 时出现错误提示 `"System message must be at the beginning."`，但该提示阻断了合法的提示输入。  
- **ROCm 上精度崩溃**：  
  - 问题 [#60160](https://github.com/vllm-project/vllm/issues/60160)：在 MI355X 上高并发推理 `Qwen3.8-27B-FP8` 时，当启用 `VLLM_ROCM_USE_AITER=1` 会导致精度严重下降——关闭 AITER 时则正常。  
- **OpenShift 环境崩溃**：  
  - 问题 [#44548](https://github.com/vllm-project/vllm/issues/44548)：`gemma4-unified-cu129` 镜像在容器环境中因 `KeyError` 立即崩溃。

---

### **6. 对应用开发者的启示**  
- **部署在 Blackwell GPU？** 除非 SM120 支持落地，否则使用 DeepSeek-V4.1/Flash 可能遭遇性能不佳或失败——请持续关注 [#50576](https://github.com/vllm-project/vllm/issues/50576) 与 [#56892](https://github.com/vllm-project/vllm/issues/56892) 的修复进展。在 SM120 上谨慎使用 `--enforce-eager`。  
- **使用 AMD ROCm？** 确保使用最新构建版本；Qwen3.8 与 GLM-5.3 存在性能差距。请跟踪 [#57149](https://github.com/vllm-project/vllm/issues/57149) 与 [#64121](https://github.com/vllm-project/vllm/pull/64121)，获取针对 MXFP4 与 MonoKernel 的优化支持。  
- **构建基于推测解码的智能体？** 避免对长提示使用 `DFlash`——采用 PR [#63710](https://github.com/vllm-project/vllm/pull/63710) 中的优化方案。同时关注 Eagle/Eagle3 草稿中接受长度回归问题 ([#41838](https://github.com/vllm-project/vllm/issues/41838))。  
- **需要可复现的基准测试？** 加入 [#61698](https://github.com/vllm-project/vllm/issues/61698) 的讨论——正式的 BYOG 基准框架正在提案中，用于跨 PR 验证性能与准确率声明。

---  
*来源: [vLLM GitHub 仓库](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 消息简报 – 2026-10-28

---

### **1. 今日亮点**  
SGLang 项目在扩展推理基础设施方面持续发力，重点推进 **Prefill-Decode（PD）解耦** 与 **消费级 GPU 的 AMD ROCm 支持**。关键稳定性修复解决了推测解码崩溃及 HiCache 竞态问题，新性能优化针对 AMD gfx1250 和 Hopper（SM90）架构——尤其面向 Qwen3.8-Flash-Next 与 GLM-5.3-Flash 模型。

---

### **2. 发布与破坏性变更**  
无。过去 24 小时内未发布新版本或破坏性 API/配置变更。

---

### **3. 新模型与硬件支持**  
- ✅ **AMD RDNA3/RDNA4（gfx1100/gfx1101/gfx1200/gfx1201）**：跟踪议题 #30599 列出了一项战略启用计划，旨在将官方 ROCm 支持从数据中心 Instinct GPU 扩展至消费级 Radeon 显卡。
- ✅ **Qwen3.8-Flash-Next（NVFP4）**：现已通过 PRs #44304 与 #44291 在 **AMD MI355X（gfx950）** 与 **RTX PRO 6000（sm_120）** 上获得支持；包含 FP8 MoE、GatedDeltaNet 与 QuerySparse Attention。
- ✅ **Nemotron-3-Embed-1B-BF16/NVFP4**：通过 PR #45885 增加原生支持，适用于 NVIDIA 的检索导向嵌入模型。
- 🔧 **Apple Silicon（MLX/Torch 互操作性）**：重构路线图 #32321 提出由 Torch 主导的 SRT 路径，并导出 MLX 模型区域——为未来 Metal 加速服务奠定基础。

---

### **4. 性能与优化**  
- ⚡ **AMD gfx1250**：多项内核级优化已合并：
  - 合并 RoPE + concat + KV 缓存写入（#44459）
  - 使用分页 Gluon MLA 解码后端（#44458）
  - 当 `k_scale=1.0` 时跳过不必要的 K 缩放（#44457）
  - 用 aiter 实现批量 BF16 GEMM 替代 `torch.bmm`（#44456）
- ⚡ **NVIDIA SM90（Hopper）**：
  - 为 GLM-5.2 block-FP8 解码投影新增 W8A16 小 M GEMM（#45862）：每标记延迟降低最高达 **6.8%**，且不增加权重内存占用。
- ⚡ **HiCache 与解耦**：
  - 通过切片删除替代 `list.pop(0)` 优化确认队列清空（#46903）：减少异步传输追踪中的 O(k*N) 开销。
  - 在解码传输阶段首次拒绝即停止设备准入（#46898）：提升高负载下的可扩展性。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 描述 | 修复状态 |
|--------|------|-------------|------------|
| 🚨 高 | [#43412](https://github.com/sgl-project/sglang/issues/43412) | 由于 pip 安装的 CUDA 包中 FlashInfer JIT 失败，首个非贪婪请求导致推测解码崩溃服务器 | ❌ 开放 — 根因：捆绑 cccl 与 pip cu13 工具链不匹配 |
| 🟡 中 | [#44070](https://github.com/sgl-project/sglang/issues/44070) | PD prefill：提前发送缓存前缀的传输在 HiCache 加载完成前已发送旧 KV | ❌ 开放 — 静默正确性缺陷，影响前缀复用 |
| 🟡 中 | [#45755](https://github.com/sgl-project/sglang/issues/45755) | `flashinfer_mxfp4` 在 Kimi-K3（SM90）上计算 GPT-OSS SwiGLU 而非 SiTU | ❌ 开放 — 依赖上游 flashinfer-ai/flashinfer#4209 |
| 🟡 中 | [#44291](https://github.com/sgl-project/sglang/issues/44291) | EP2（tp=2 + ep=2）在 Qwen3.8-Flash-Next-NVFP4（sm_120）上触发非法内存访问崩溃 | ❌ 开放 — 内核级内存访问违规 |

> 💡 *注：不稳定的 CI 基础设施问题 #42752（134 条评论）仍未解决，影响多个团队的 PR 验证。*

---

### **6. 对应用开发者的启示**  
- **对于大规模部署**：优先使用 PR #46904 文档中新增的标志配置 PD 解耦方案。确保谨慎使用 `SGLANG_DISAGG_PREFILL_EARLY_SEND_CACHED_PREFIX=1` —— 避免旧 KV 问题需精心设计请求调度。
- **对于 AMD 用户**：若目标为消费级 RDNA3/RDNA4 显卡，请使用最新 ROCm 构建版本，并关注 #30599 获取官方支持更新。PR #46757 中的新配置已验证适用于 MI355X 上的 Qwen3.5。
- **对于智能体与代理工作流**：Agentic Cache Scheduling Roadmap (#43098) 引入超节点范围内的 L1/L2 缓存共享——对减少并行智能体间的冗余计算至关重要。
- **对于稳定性要求高的应用**：在 #43412 修复前，避免使用 pip 安装的 CUDA 工具包进行推测解码。建议采用系统级 CUDA 或工具链一致的容器化环境。
- **对于边缘/AI on-device 场景**：通过 MLX 集成（PR #36164）实现 Apple Silicon 支持，开启低延迟、本地推理的可能性——非常适合移动或嵌入式智能体。

> 🔗 [查看完整问题追踪列表](https://github.com/sgl-project/sglang/issues?q=is%3Aopen+sort%3Aupdated-desc) | [最新 PR 列表](https://github.com/sgl-project/sglang/pulls?q=is%3Aopen+sort%3Aupdated-desc)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 消息简报 – 2026-10-28**

---

### **1. 今日亮点**  
最新更新聚焦于扩展对 LiquidAI LFM3 系列多模态模型的支持，包括音频、视觉及决策类变体（LFM3-Audio-2B、LFM3-Omni-2B、LFM3-1.7B、LFM3-VL-2B），并已通过 `/v1/realtime` 接口与工具调用支持完整集成至服务器端和 CLI 工具中。新增功能包括在聊天模板中暴露推理努力等级（从最小到最大），通过 `--models-memory-max` 实现动态模型卸载，以及对推测解码性能和 MoE 缓存的优化。

---

### **2. 发布与破坏性变更**  
- **`b11944`**：通过服务端能力探测，在聊天模板中新增推理努力等级（最小 → 最大）的暴露功能 ([#31271](https://github.com/ggml-org/llama.cpp/pull/31271))。该功能可实现对实时推理中智能体行为的细粒度控制。  
- **`b11930`**：引入 `--models-memory-max` 参数，用于动态卸载超出内存阈值的模型，提升在资源受限设备上的多模型服务器稳定性 ([#21231](https://github.com/ggml-org/llama.cpp/issues/21231))。  
- **`b11940`**：在通用模式中新增对延迟工具（deferred tools）和 `tool_reference` 内容部分的支持 ([#31256](https://github.com/ggml-org/llama.cpp/pull/31256))。

> 🔗 *所有发布版本：[GitHub Releases](https://github.com/ggml-org/llama.cpp/releases)*

---

### **3. 新模型与硬件支持**  
- **新模型**：  
  - 新增 `LiquidAI/LFM3-Audio-2B` 与 `LiquidAI/LFM3-Omni-2B`，全面支持音频输入/输出及工具使用 ([#31257](https://github.com/ggml-org/llama.cpp/pull/31257))。  
  - 作为 LFM3 系列的一部分，新增 `LiquidAI/LFM3-1.7B` 与 `LiquidAI/LFM3-VL-2B` ([#31252](https://github.com/ggml-org/llama.cpp/pull/31252))。  
  - 新增支持 `LiquidAI/d1-2B` 与 `LiquidAI/d1-omni-2B`（决策类模型）([#31275](https://github.com/ggml-org/llama.cpp/pull/31275))。

- **后端与量化格式**：  
  - Vulkan：修复 `MUL_MAT` 中维度 3 的广播处理问题，以兼容性增强 ([#31239](https://github.com/ggml-org/llama.cpp/pull/31239))。  
  - SYCL：新增显存容量限制强制机制，防止资源超额分配 ([#31285](https://github.com/ggml-org/llama.cpp/pull/31285))。  
  - Hexagon：新增 `DSV4_HC_PRE` 与 `DSV4_HC_POST` 操作，支持高级量化推理 ([#30953](https://github.com/ggml-org/llama.cpp/pull/30953))。

---

### **4. 性能与优化**  
- **MoE 缓存**：PR [#31233](https://github.com/ggml-org/llama.cpp/pull/31233) 引入 **ClassLRU**，一种融合 LRFU 与 MQ 思想的混合缓存策略，在暖缓存条件下，将解码吞吐量提升 **+6% (QFN)** 与 **+7% (GLM)**，同时减少 **8% 的 GPU 数据上传**。  
- **推测解码**：  
  - PR [#31278](https://github.com/ggml-org/llama.cpp/pull/31278) 在计算 GPU 层分布时排除已卸载的 MTP 层，使在显存受限设备（如 RTX 4070 Super）上实现更优的 CPU/GPU 层级分配。  
  - PR [#31284](https://github.com/ggml-org/llama.cpp/pull/31284) 在核簇维度变化时重新实例化 CUDA 图形（对 Hopper sm_120 极其关键），有效减少卡顿并提升长上下文稳定性。  
- **内核优化**：  
  - Hexagon 后端：通过优化内核实现更快的 TOP_K 采样，在 DFlash 配置下将草稿处理开销降低最高达 **42%** ([#31279](https://github.com/ggml-org/llama.cpp/pull/31279))。

---

### **5. 稳定性与回归问题**  
- **严重崩溃**：  
  - `llama-server` 在 Windows + Vulkan 环境下因不当的上下文检查点处理导致 `0xC0000005` 错误崩溃（报告于 AMD Ryzen AI 9 HX 370 平台）。  
  - Intel Gen9.5 iGPU（UHD 630）上使用 Vulkan 时，`q8_0` KV 缓存会导致确定性死锁 + `SIGABRT` 错误 ([#29054](https://github.com/ggml-org/llama.cpp/issues/29054))。  
- **正确性缺陷**：  
  - 推测解码（`draft-mtp`）在量化目标（如 Q4_K_M）上与原生输出出现偏差，但在 `bf16` 上保持一致——这对智能体的一致性至关重要 ([#25618](https://github.com/ggml-org/llama.cpp/issues/25618))。  
  - 混合型 LFM2 模型在共批处理序列时因递归状态污染产生损坏输出 ([#29002](https://github.com/ggml-org/llama.cpp/issues/29002))。  
- **内存问题**：  
  - `repeat_last_n` / `dry_penalty_last_n` 可能分配数 GB 的零填充缓冲区，导致服务器内存溢出 ([#29494](https://github.com/ggml-org/llama.cpp/issues/29494))。

> ⚠️ *修复正在进行或待审；暂无稳定补丁发布。*

---

### **6. 对应用开发者的影响**  
- **构建健壮的智能体**：使用 `--models-memory-max` 与 `--slot-attach` 管理高内存消耗的多模型部署。利用暴露的推理努力等级，按需触发深度推理步骤。  
- **集成多模态工作流**：新增的 LFM3 支持使 `mtmd-cli` 与 `/v1/realtime` 实现音频 + 视频的实时输入。结合 `--tools` 与 `tool_reference` 实现结构化智能体交互。  
- **优化推测解码**：在旧款 GPU 上避免使用 `draft-mtp`，直至修复上线；关注量化模型上的输出偏差。优先使用 `d2t` 剪枝词汇表（如可用）。  
- **警惕回归问题**：勿在 Intel Gen9.5 iGPU 上使用 `q8_0` KV 缓存，或在 ROCm 上使用 `--split-mode layer`。若使用 `repeat_last_n` 或 `dry_penalty_last_n`，请限制批大小。

> ✅ *建议：生产环境锁定至 `b11944` 或更高版本；若在低端 Intel GPU 上使用 Vulkan，避免 `b11930` 版本。*  
> 🔗 *完整变更日志：[GitHub Release Notes](https://github.com/ggml-org/llama.cpp/releases/tag/b11944)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-28**

---

### **1. 今日亮点**  
Ollama 生态系统持续扩展对新模型和硬件的支持，修复了 LFM3 GGUF 兼容性问题以及近期显卡上 CUDA/MLX 的稳定性。关键 PR 解决了流式传输可靠性、服务器重启后模型拉取的恢复机制，以及多模态嵌入处理的改进——这些对于代理（agent）和 RAG 应用至关重要。

---

### **2. 发布与破坏性变更**  
*无* — 过去 24 小时内未发布新版本。

---

### **3. 新模型与硬件支持**  
- ✅ **LFM3 GGUF**：PR [#19344](https://github.com/ollama/ollama/pull/19344) 为 LiquidAI 的 LFM3 系列（包括 `lfm3-audio:latest`）添加基础支持，修复了 BOS token 处理问题，并通过更新的 `llama.cpp` 实现文本转语音功能。  
- ✅ **MLX 后端**：PR [#18780](https://github.com/ollama/ollama/pull/18780) 添加 Kolibri 1 支持；PR [#19197](https://github.com/ollama/ollama/pull/19197) 通过 `OLLAMA_NUM_PARALLEL` 实现 MLX 模型的并发生成。  
- ✅ **AMD Radeon RX 6750 GRE 10GB**：Issue [#19329](https://github.com/ollama/ollama/issues/19329) 请求原生支持 Navi23 架构（ROCm），表明对 AMD GPU 平等支持的需求日益增长。  
- ✅ **OCI 注册表集成**：PRs [#4204](https://github.com/ollama/ollama/pull/4204) 和 [#9215](https://github.com/ollama/ollama/pull/9215) 推进 OCI 注册表支持，加入认证与代理模式，实现企业级模型分发。

---

### **4. 性能与优化**  
- 🔧 **流式传输效率**：PR [#19331](https://github.com/ollama/ollama/pull/19331) 引入空闲流（>15秒）的心跳检测机制，提升长提示评估时的用户体验。  
- 🚀 **GPU 内存利用率**：PR [#19197](https://github.com/ollama/ollama/pull/19197) 允许在 MLX 后端进行并发生成，通过共享投影层/前馈网络（FFN）降低首个 token 延迟，同时保持注意力计算隔离。  
- ⚙️ **模型拉取恢复**：PR [#19339](https://github.com/ollama/ollama/pull/19339) 修复了在 `ollama serve` 中断拉取（如超过 1 小时）后无法继续的问题，确保部分下载可安全恢复。  
- 📊 **多模态嵌入准确性**：PR [#19334](https://github.com/ollama/ollama/pull/19334) 修正了 Gemma 4 嵌入负载中的媒体顺序问题，解决因错误的 token 交错引发的断言失败。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 影响 | 修复状态 |
|---------|------|--------|------------|
| 🔴 高 | `qwen3.8`: `no user query found in messages` (500 错误) | 大上下文提示下流式聊天中断 | [Issue #17778](https://github.com/ollama/ollama/issues/17778) – *尚未修复* |
| 🔴 高 | `deepseek-v4-flash:0731`: 无 `</think>` 时陷入无限思考循环 | 代理任务因无界推理而失败 | [Issue #17892](https://github.com/ollama/ollama/issues/17892) – *尚未修复* |
| 🔴 高 | Windows：大提示下约 15 秒后连接重置 | 阻碍 Windows 上高上下文推理 | [Issue #19139](https://github.com/ollama/ollama/issues/19139) – *尚未修复* |
| 🟡 中 | `clef-flash:latest`: RTX 5060 Ti（Blackwell）上 CUDA 共享对象初始化失败 | 在新型 NVIDIA 硬件上崩溃 | [Issue #19122](https://github.com/ollama/ollama/issues/19122) – *PR 待审* |
| 🟡 中 | macOS Metal / Mac Mini M6 上 `mlx runner panic` | 导致无法使用如 `gemma4:e2b-mlx` 等小型模型 | [Issue #18885](https://github.com/ollama/ollama/issues/18885) – *尚未修复* |
| 🟡 中 | `lfm3` 模型架构无法识别 | 尽管版本为 0.40.12，仍无法使用新音频模型 | [Issue #19347](https://github.com/ollama/ollama/issues/19347) – *已有修复 PR* |

---

### **6. 对应用开发者的启示**  
- **代理开发者**：当前避免使用 `deepseek-v4-flash` 进行复杂代理流程——可能触发无限循环。建议暂用 `qwen3:8b` 或 `claude` 作为替代，直至问题 #17892 解决。  
- **企业部署**：利用 OCI 注册表支持（PRs #4204, #9215）在防火墙后实现安全、私有的模型分发。  
- **RAG 与多模态应用**：确保提示结构符合 token 顺序要求——使用 `llama-server` v0.40.12+ 可避免 Gemma 4 嵌入崩溃（参见 PR #19334）。  
- **内存受限环境**：谨慎设置 `OLLAMA_NUM_PARALLEL=1`——问题 #19262 确认若未正确隔离，该设置可能无法强制串行执行。  
- **边缘情况**：在多行输入（`ollama run`）中按 `Ctrl+C` 时需注意，防止会话损坏（问题 #19340）；可通过 `/clear` 恢复系统状态。  

> 💡 **实用提示**：在 Windows 上运行高上下文应用时，考虑使用 `--keep_alive=0` 或拆分提示以规避 15 秒连接重置问题（问题 #19139）。

---  
*数据来源：GitHub: ollama/ollama (2026-10-28)*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

### **1. 今日亮点**  
LiteLLM 最新更新聚焦于关键的成本会计修复、流式传输与工具调用工作流的错误处理优化，以及对 Cloudflare Workers AI 的增强支持。值得注意的是，虚拟密钥中长期存在的预算不一致问题已被标记（问题 #27735），而新的 PR 修复了自定义工具的令牌计数问题（#48698）并修正了 Databricks OpenJev 模型的计费问题（#48694）。代理现在能更好地处理格式错误的 `tool_choice` 输入，返回 400 错误而非崩溃。

---

### **2. 发布与破坏性变更**  
- 过去 24 小时内发布了 **v1.106.5**、**v1.105.6**、**v1.104.8** 和 **v1.103.10**。  
- 所有版本均通过 [cosign](https://github.com/BerriAI/litellm#verify-this-release) 进行安全验证，使用相同的公钥：  
  ```bash
  cosign verify --key https://raw.githubusercontent.com/BerriAI/litellm/e82a3c646908ba0a6ee0beddc4310d7a6cac4065/cosign.pub ghcr.io/berriai/litellm:v1.106.5
  ```
- 今日未报告重大 API 破坏性变更，但用户应针对 `/v1/responses` 调用中的 `max_tool_calls`、`partial_images` 与 `prompt_cache_options` 行为进行验证，因待处理的 PR (#48655) 可能影响其行为。

---

### **3. 新模型与硬件支持**  
- **Cloudflare Workers AI**：多个功能请求（#21115、#35055、#35056）及活跃的 PR 显示，通过 Workers AI 扩展的 API 即将支持图像与音频生成。这包括对文本转图像、语音转文本和文本转语音模型的原生支持。  
- **Databricks OpenJev 决策模型**：现已正确计费，为 **每百万输入令牌 0.6 DBUs**（#48694），提升了决策类工作负载的成本透明度。  
- **SAP Conversational AI**：正在修复回放过程中工具调用参数丢失的问题（#48696），以实现更健壮的代理流程。

---

### **4. 性能与优化**  
- **令牌计数改进**：  
  - 自定义工具调用现可正确计数，不再因“不支持的工具调用”而失败（#48698）。  
  - 批量缓存令牌在无缓存读取价格时按输入费率计费（#48697），防止计费不足。  
- **超时处理**：  
  - Gemini 与 Vertex AI 嵌入现在在同步与异步调用中均尊重用户提供的 `timeout` 值（#47305、#48690），解决了长期存在的 300 秒默认超时问题。  
- **流式传输效率**：  
  - 网络搜索拦截不再在流式场景中泄漏 `max_parallel_requests` 通道（#46093），降低了资源耗尽风险。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 影响 | 修复状态 |
|---------|-------|--------|------------|
| 高 | [#27735](https://github.com/BerriAI/litellm/issues/27735) – 虚拟密钥 `BudgetExceededError` 使用过期支出 | 尽管实际支出正常，仍出现虚假超预算拒绝 | 开放 — 影响多租户环境下的成本控制 |
| 高 | [#48481](https://github.com/BerriAI/litellm/issues/48481) – `message_start` 在流式 `/v1/messages` 中报告 `input_tokens: 0` | 实时成本追踪不准确 | 开放 — 影响分析与监控 |
| 中 | [#47396](https://github.com/BerriAI/litellm/issues/47396) – Anthropic `tool_choice` 触发 `max_input_tokens` 预留 | 工具调用请求过度预留预算 | 开放 — 存在提前耗尽预算的风险 |
| 中 | [#47904](https://github.com/BerriAI/litellm/issues/47904) – v1.106.x 镜像仍信任 eMudhra 根 CA | 受损 CA 链带来的安全风险 | 已请求回滚；主分支修复中（#47670）——需回滚至 `stable/1.106.x` |

---

### **6. 对应用开发者的启示**  
- **成本控制**：密切关注虚拟密钥的支出日志，避免因 #27735 未修复导致的虚假预算拒绝，可能需要临时绕行方案。  
- **流式工作流**：在流式 `/v1/messages` 中使用 `tool_choice` 与 `web_search` 时需谨慎——它们可能无限占用并行槽位（#46093）。建议使用非流式或在客户端设置限流。  
- **模型准确性**：确保应用不依赖 `message_start` 事件中的 `input_tokens`——应使用最终的 `message_delta` 获取准确计数（#48481）。  
- **安全性**：若使用 v1.106.x 镜像，一旦修复回滚至该分支，请尽快升级至 v1.106.3+ 以修补 eMudhra CA 信任问题（#47904）。  
- **前瞻性准备**：为即将到来的 Cloudflare Workers AI 支持做好准备——关注如 #21115 与 #35055 等 PR，以便将图像/音频能力集成至代理中。

> 🔗 *查看完整详情：[LiteLLM GitHub Issues](https://github.com/BerriAI/litellm/issues)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-10-28**

---

### **1. 今日亮点**  
Unsloth 持续拓展以代理为中心的愿景，关键改进了 UI/UX 并通过 MCP（多代理控制平面）实现了本地工具链的深度集成。针对 Studio 训练工作流和文件处理中长期存在的问题，实施了关键稳定性修复；同时，新提交的 PR 推进了原生多代理编排、视觉计算机使用以及基准测试能力的发展。项目正明显向统一的、开发者优先的 AI 工作流平台演进。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告任何内容。*  
未发布新版本或破坏性 API/配置变更。所有近期活动集中于功能开发与缺陷修复。

---

### **3. 新模型与硬件支持**  
- **新模型支持：**  
  - 请求支持 **LFM3-1.7B** ([#15588](https://github.com/unslothai/unsloth/issues/15588)) — LiquidAI 最新发布的表达性强骨干模型。  
  - 正在调查 **Qwen3.8-Flash-Next-FP8** 的 FP8 n-gram 表加载问题 ([#15632](https://github.com/unslothai/unsloth/pull/15632))。  
- **硬件与后端覆盖：**  
  - 请求支持 Intel Arc B580 (XPU) GPU ([#15583](https://github.com/unslothai/unsloth/issues/15583))。  
  - 混合 Nvidia-AMD Linux 系统下使用 `llama.cpp` 时，AMD GPU 可见性问题依然存在 ([#15444](https://github.com/unslothai/unsloth/issues/15444))。  
  - Apple MLX 后端持续被使用，尤其在 Gemma 4 26B 等视觉模型中 ([#15473](https://github.com/unslothai/unsloth/issues/15473))。

---

### **4. 性能与优化**  
- **基准测试增强：**  
  - 在基准测试页面新增 `llama-bench` 选项卡，支持实时吞吐量测试 ([#12522](https://github.com/unslothai/unsloth/pull/12522))。  
  - Eval 选项卡现已支持 `lm-eval-harness` 在 MMLU、GSM8K、TruthfulQA 等多项指标上的评分 ([#12521](https://github.com/unslothai/unsloth/pull/12521))。  
  - 配置扫描能力扩展至推测解码、KV 缓存类型及内存卸载设置 ([#11808](https://github.com/unslothai/unsloth/pull/11808))。  
- **推理引擎进展：**  
  - 正在推进对 **exllamav3** 的支持 ([#15527](https://github.com/unslothai/unsloth/issues/15527))，包括 exl3 量化数据的潜在排序优化。  
  - 针对 Qwen3.8-Flash-Next 因 CPU 保留 n-gram 表导致的 Block Swap 问题正在修复 ([#15633](https://github.com/unslothai/unsloth/pull/15633))。

---

### **5. 稳定性与回归问题**  
- **严重回归：**  
  - 在 Windows 上训练期间，Studio 每秒向回收站疯狂写入 SQLite WAL/SHM 文件 ([#15552](https://github.com/unslothai/unsloth/issues/15552)) — 严重影响用户体验；暂无解决方案。  
  - Gemma-4-26B-A4B 激活 Deep Research 模式后仍被忽略 — 模型仅依赖内部权重 ([#15581](https://github.com/unslothai/unsloth/issues/15581))。  
  - 即使启用，Anthropic 透传仍因上下文溢出失败，而非自动压缩 ([#15417](https://github.com/unslothai/unsloth/issues/15417))。  
- **UI/UX 问题：**  
  - macOS 上 `unsloth/flux-3-image-klein-GGUF` 无法使用图像编辑功能 ([#15241](https://github.com/unslothai/unsloth/issues/15241))。  
  - 下载提示始终显示原始文件名，无视用户重命名操作 ([#15621](https://github.com/unslothai/unsloth/issues/15621))。  
  - 桌面应用中的浏览器标签页点击区域过窄 ([#14314](https://github.com/unslothai/unsloth/issues/14314))。  
- **正在进行修复：**  
  - 训练过程中堆栈跟踪问题已在 PR [#15538](https://github.com/unslothai/unsloth/issues/15538) 中解决。  
  - 转录进度百分比缺失 — 已提出修复方案 [#15573](https://github.com/unslothai/unsloth/issues/15573)。

---

### **6. 对应用开发者的影响**  
开发者应预期 Unsloth Studio 将逐步支持日益复杂的代理工作流，包括原生多代理编排 ([#10776](https://github.com/unslothai/unsloth/issues/10776))、浏览器自动化 ([#10800](https://github.com/unslothai/unsloth/issues/10800)) 以及视觉计算机使用 ([#15532](https://github.com/unslothai/unsloth/issues/15532))。  
新增的 **MCP 服务器集成** ([#14348](https://github.com/unslothai/unsloth/pull/14348), [#15629](https://github.com/unslothai/unsloth/pull/15629)) 支持直接操控本地工具，这对构建自主代理至关重要。  
对于性能敏感的应用，即将推出的基准测试套件（`llama-bench`, `lm-eval-harness`）将支持精准的量化与配置选择。  
但需注意：**Windows 部署** 受限于持续存在的 SQLite 临时文件问题 ([#15552](https://github.com/unslothai/unsloth/issues/15552))，且 **AMD GPU 检测问题** 仍未解决 ([#15444](https://github.com/unslothai/unsloth/issues/15444))。  

👉 *实用提示：* 若使用 Qwen3.8-Flash-Next，建议关注 PR #15633 与 #15632，以获取 FP8 兼容性修复进展。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*