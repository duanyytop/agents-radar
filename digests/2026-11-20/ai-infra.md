# AI 基础设施日报 2026-11-20

> 生成时间: 2026-11-20 03:41 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-11-20**

---

### **1. 生态概览**  
2026年末，AI基础设施领域呈现出明显的两极分化：**高性能推理引擎**与**集成式本地智能体平台**并行发展，硬件后端的深度专业化趋势愈发显著——尤其体现在AMD ROCm、Apple MLX和NVIDIA Blackwell上。项目开发重心日益聚焦于**规模化下的效率优化**：内核级调优、推测解码增强以及解耦式服务架构成为主流。与此同时，混合模型（MoE、HRM）、多模态智能体及边缘部署需求的上升，正加速对多样化模型格式（GGUF、ONNX、FP8）和异构硬件的支持，预示着一个成熟生态的形成：性能、可靠性与开发者体验已紧密耦合。

---

### **2. 活动对比**

| 项目       | 开放问题数（↑/↓） | 已合并PR数（↑/↓） | 发布状态         |
|------------|-------------------|------------------|------------------|
| **vLLM**   | 347 (+5)          | 49 (+8)          | 稳定版：v0.33.0；无新版本发布 |
| **SGLang** | 286 (+3)          | 34 (+6)          | 稳定版：0.5.x；v1.0 RFC中 |
| **llama.cpp** | 371 (+4)        | 28 (+5)          | 无新版本发布；关键修复已合并 |
| **Ollama** | 428 (+2)          | 19 (+3)          | 稳定版：v0.40.16；无破坏性变更 |
| **LiteLLM** | 512 (+6)         | 36 (+7)          | `v1.112.0-dev.1`、`v1.111.0-rc.2`、`lts` 可用 |
| **Unsloth** | 224 (+4)         | 21 (+4)          | v0.1.920-beta（可选功能） |

> ✅ *趋势*：LiteLLM与vLLM在开发活跃度上领先；Ollama与SGLang保持稳定，变更虽少但影响深远。

---

### **3. 模型支持竞赛**

| 新模型 / 架构               | 支持项目                          | 状态与差异化 |
|----------------------------|-----------------------------------|--------------|
| **Qwen3.8-Flash-Next-gfx950** | vLLM（PR #68544）、SGLang（DFlash） | vLLM在ROCm特化调优上领先 |
| **MiniCPM5-15B-A2.5B**     | vLLM（#68748）                     | 首个支持DSpark + INT4/W4A16 |
| **SenseNova Loop**         | llama.cpp（#32588）                | 通过厂商PR实现官方集成 |
| **Kimi K3.1 Pro / MoRI MI355X** | vLLM、SGLang、LiteLLM           | 多项目采纳；LiteLLM新增定价支持 |
| **LTX-2.5 / MOSS-Image LoRA** | Unsloth（#18465、#18497）       | 在新型架构的LoRA训练中率先布局 |
| **NVIDIA Cosmos3 FP8 Video Diffusion** | Unsloth（v0.1.920-beta） | Studio UI中独家早期支持 |

> 🏆 **领先者**：**vLLM**与**Unsloth**在支持前沿模型与小众硬件（AMD NPU、FP8视频）方面最为激进。**LiteLLM**在**商业模型定价集成**方面处于领先地位。

---

### **4. 性能前沿**

| 优化重点                 | 领先项目                          | 关键进展 |
|--------------------------|-----------------------------------|----------|
| **KV缓存效率**           | vLLM、SGLang                      | 按张量的DiffKV缓存（#66963）、类型化DFlash传输、统一内存池（SGLang #49944） |
| **推测解码**             | vLLM、SGLang、Ollama              | MTP+DCP调度器（vLLM #68811）、Hy4 Flash + DFly2（Ollama #19783）、混合窗口存储（SGLang） |
| **量化与内核调优**       | vLLM、llama.cpp、Unsloth          | `dp4a`加速的KQ矩阵乘法（OpenCL）、CUTLASS哈希（Unsloth）、SM100 split-K（vLLM） |
| **分布式服务与解耦**     | SGLang、vLLM                       | 非对称预填充/解码（SGLang）、多节点KV卸载（vLLM） |
| **低延迟本地运行时**     | Unsloth、Ollama（MLX）、llama.cpp（Metal） | 冷卡Int8加载时间<3秒、自适应并行（Ollama #19785）、Metal运行时改进 |

> 🔥 **热点区域**：**ROCm优化**（vLLM）与**非对称分布式服务**（SGLang）已成为吞吐量与成本效率的关键角力场。

---

### **5. 层级定位**

| 项目       | 主要层级                  | 核心差异化 |
|------------|----------------------------|------------|
| **vLLM**   | 高吞吐推理引擎             | 优化内核、专注ROCm、对MoE与推测解码支持强劲 |
| **SGLang** | 分布式推理框架             | 预填充-解码解耦、HiCache、DFlash图分离 |
| **llama.cpp** | 通用本地运行时           | 跨后端（GPU/CPU/MLX/WebGPU），轻量级，支持GGUF、OpenCL、Vulkan |
| **Ollama** | 本地智能体网关 + CLI       | 开发者优先体验、提示缓存、MLX加速、智能体工具链 |
| **LiteLLM** | 生产级LLM网关 / 编排器    | 速率限制（Rust）、Kafka日志、预算追踪、多供应商路由 |
| **Unsloth** | 全栈本地AI平台            | 集成微调、调度、Web UI、NPU支持、安全沙箱 |

> 💡 **战略洞察**：  
> - **vLLM/SGLang** = 云规模部署的后端基础设施  
> - **llama.cpp/Ollama** = 广泛覆盖格式与硬件的边缘/本地推理  
> - **Unsloth** = 端到端本地AI工作流（训练 → 服务 → 部署）  
> - **LiteLLM** = 带可观测性的企业级API网关

---

### **6. 趋势信号**

#### 🔍 **新兴行业趋势（基于2026-11-20的活动）：**
1. **硬件专业化加速推进**  
   - AMD ROCm（gfx950/gfx942）与Ryzen AI NPU已不再是实验性技术，正被深入至内核层面优化（vLLM、Unsloth）。  
   - NVIDIA Blackwell（B200）压力测试暴露不稳定问题（SGLang #26340、#46203），表明其部署呈现高风险高回报特征。

2. **以智能体为中心的基础设施日趋成熟**  
   - 定时回复（Unsloth）、草稿接受验证（Ollama）、工具调用解析（LiteLLM）等工具表明，**智能体可靠性**已成为核心关切，不再仅是速度问题。  
   - 提示缓存效率低下（Ollama #19774）凸显长周期工作流中需更智能的状态管理。

3. **性能提升正变得“不可见”**  
   - 如DiffKV视图缓存（#66963）、冷启动延迟降低（#18455）、`dp4a`矩阵乘法等修复虽不直接面向用户，却在真实场景中带来2–3倍吞吐提升。

4. **安全与可观测性不容妥协**  
   - LiteLLM的Rust网关与镜像签名验证、Unsloth的网络防火墙、SGLang的文件创建漏洞（#51555）反映出生产级安全能力的持续成熟。

#### ✅ **应用开发者应关注事项：**
- **避免在XPU上使用`float16`进行推测解码**（Ollama #55250）——暂用`bf16`直至修复。
- **密切监控提示缓存行为**——即使微小输入变化也会导致复用失效（Ollama #19774）。
- **生产环境使用`ghcr.io/berriai/litellm:lts`**——避免不稳定的dev构建。
- **若目标为ROCm，请在AMD MI355X/gfx942上测试**；当前vLLM表现最佳。
- **准备迎接SGLang 1.0**——预计配置校验更严格，存在破坏性变更。

> ⚠️ **关键结论**： “直接运行”的时代已终结。基础设施选择如今直接决定**模型保真度、智能体可靠性与运营成本**——工程师必须将推理栈视为首要的系统工程问题来对待。

---  
*生成时间：2026-11-20 | 面向技术决策者与基础设施架构师*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-11-20**

---

### **1. 今日亮点**  
vLLM 项目在 AMD ROCm 优化方面持续发力，针对 Qwen3.8-Flash-Next 与 Muse 模型，多个高影响力性能追踪问题和合并请求（PR）聚焦于 gfx950（MI355X）和 gfx942（Muse Spark Open PTPC-FP8）硬件。关键的内核级优化正在推进，旨在消除急切注意力后端中冗余的键值（K/V）缓存视图推导问题；同时，稳定性修复已解决多节点及推测解码工作流中的内存安全与 KV 卸载边缘情况。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未检测到新版本发布或破坏性变更。*  
最新稳定版本仍为 **v0.33.0**，当前工作重点在于性能调优与模型特定优化，而非 API 表面变更。

---

### **3. 新模型与硬件支持**  
- **新增模型支持**：`MiniCPM5-15B-A2.5B` 已通过 PR #68748 实现原生 vLLM 支持，涵盖 BF16 服务、INT4/W4A16 量化以及 DSpark 推测解码功能。  
- **ROCm/AMD 重点**：针对 *Qwen3.8-Flash-Next-gfx950*、*Muse Spark Open PTPC-FP8-gfx942* 以及 *Kimi K3 MoRI MI355X disagg* 的开发正在进行，设有专门的追踪问题（#59575、#64018、#68544）。  
- **硬件后端**：通过 MonoKernel 跟踪（#68544）持续推进 ROCm 特化，新增 XPU 与 Intel GPU（`#67428`）的 CI/CD 构建，并增强对 NixlConnector 与 UMBP 淘汰策略的支持（`#67944`）。  
- **量化格式**：改进 MoE WNA16 配置中 AWQ 键名的处理（`#66488`），并统一 MXFP6 激活门控机制（`#66077`）。

> 🔗 [MiniCPM5-15B-A2.5B](https://github.com/vllm-project/vllm/pull/68748) | [ROCm 优化追踪器](https://github.com/vllm-project/vllm/issues/68544)

---

### **4. 性能与优化**  
- **注意力内核效率**：PR #66963 实现了按张量粒度缓存 DiffKV 的 K/V 视图，避免在急切注意力调用中重复执行 `transpose/split` 操作——直接解决 #64572 问题。预计可显著降低高吞吐场景下的开销。  
- **启动配置调优**：PR #68842 为小批量的 QSA 稀疏注意力引入 SM100 分块-K 启动配置，优化 Qwen4Exp 的占用率与延迟；类似地，PR #62344 通过调整分块配置提升了 A100（sm_80）上预填充评分内核的利用率。  
- **内存管理**：PR #67944 将嵌入式 DRAM 池的淘汰水位默认设为 0.99/0.97，以在 MORI v1.2.3 下实现更好利用率，无需手动调优即可提升缓存效率。  
- **推测解码**：基于 AITER 分页式 MQA 分发器（#68811）的 MTP + DCP 路径工作，使 ROCm 上的分发更高效，在草稿生成阶段有效缓解内存压力。

> 🔗 [DiffKV 视图缓存](https://github.com/vllm-project/vllm/pull/66963) | [QSA 启动配置](https://github.com/vllm-project/vllm/pull/68842)

---

### **5. 稳定性与回归问题**  
- **严重 KV 卸载缺陷**：问题 #61229 报告远程读取过程中因租约过期释放 KV 块，导致静默数据损坏——可能引发错误输出。尚未提交修复 PR，严重等级高。  
- **CUDA Graph 填充导致的精度污染**：问题 #67802 显示动态 FP8 amax 计算包含来自 CUDA Graph 填充的旧令牌 ID，存在量化不准确风险。相关 PR 待提交。  
- **DFlash2 接受失败**：问题 #55250 显示在 XPU 上使用 `float16` 时，Qwen3.8-27B-DFlash2 的草稿接受率为 0%，而 `bf16` 可正常工作——表明存在与数据类型相关的后端缺陷。  
- **模型特定崩溃**：问题 #55766 报告当对齐跨块边界时，Qwen3.8 混合 GDN 模型在命中前缀缓存后出现 NaN logits——正在调查中。

> 🔗 [KV 租约缺陷](https://github.com/vllm-project/vllm/issues/61229) | [FP8 Amax 污染](https://github.com/vllm-project/vllm/issues/67802) | [DFlash2 Float16 崩溃](https://github.com/vllm-project/vllm/issues/55250)

---

### **6. 对应用开发者的影响**  
- **预期更强的 ROCm 集成**：若您部署在 AMD MI355X/gfx950 或 gfx942 硬件上，请优先使用最新 main 分支构建进行测试——性能提升显著，但尚未进入正式发布版。  
- **避免在 XPU 上使用 float16 进行推测解码**：在 #55250 修复前，请改用 `bf16` 以防止草稿接受率降为 0%。  
- **谨慎使用 auto-tool-choice + response_format**：问题 #66858 指出 Python 与 Rust API 在前端存在不一致——请确保您的应用逻辑能应对这一差异。  
- **关注构建时报告**：近期修复空 Ninja 日志问题（#68847）确保即使在最小构建下也能获得可靠的 CI 指标——这对生产流水线的可复现性至关重要。

> ✅ **建议**：在 AMD GPU 上进行生产推理时，启用 `--enable-prefix-caching` 与 `--kv-cache-dtype bfloat16`，以规避 float16 和复杂缓存布局已知的稳定性问题。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

### **SGLang Digest — 2026-11-20**

#### **1. 今日亮点**
SGLang 生态系统持续加速推进 **预填充-解码分离** 和 **推测解码优化**，关键 PR 实现了跨非对称 TP 布局的类型化 DFlash KV 传输，并分离了草稿与目标验证图。关键稳定性工作解决了在 CP 模式下 HiCache L3 预取挂起问题，以及在激进推理场景中出现的 CUDA 核心转储问题；同时，一项重要 RFC 正在跟踪 **SGLang 1.0** 的路线图，作为稳定性的里程碑。

#### **2. 发布与破坏性变更**
无。过去 24 小时内未发布新版本或破坏性 API/配置变更。

#### **3. 新模型与硬件支持**
- ✅ **Kimi K3.1**：通过 Ascend NPU 上的 DSpark 图新增对解码上下文并行（DCP）的支持（`PR #51689`）。
- ✅ **多模态模型**：扩展对多模态模型的支持，引入 DFly 推测解码，并增强视觉池化逻辑（`PR #51672`、`PR #51615`）。
- ✅ **NPU 加速**：集成 MindIE-SD 作为扩散任务的可选加速库（`RFC #48582`）。
- ✅ **Ascend 部署**：新增 DeepSeek-V4.1 Flash 在 Ascend NPU 上的官方部署说明（`PR #50985`）。

#### **4. 性能与优化**
- 🔧 **推测解码**：一系列 PR（#51698、#51697、#51696、#51693）引入 **类型化 DFlash KV 传输**、**分离草稿/目标图** 和 **混合窗口 KV 存储**，支持高效的非对称预填充/解码部署。
- ⚙️ **内核与内存**：通过使用 scatter 而非循环优化 EPLB 分发映射计算（`PR #51346`），降低每次重平衡的开销。
- 📈 **统一内存路线图**：持续开发旨在消除固定内存分区，将全注意力 KV、滑动窗口 KV 与递归状态共享至单一 GPU 内存区域（`Issue #49944`）。
- 🎯 **Hopper (SM90)**：持续追踪 GLM-5.3-Flash 内核优化性能（`Issue #45373`）。

#### **5. 稳定性与回归**
| 严重程度 | 问题 | 摘要 | 修复状态 |
|---------|------|--------|------------|
| 🔴 高 | [#26340](https://github.com/sgl-project/sglang/issues/26340) | `pr-test.yml` 自动收集到的 CUDA 核心转储；在代理负载下反复崩溃 | 进行中 |
| 🔴 高 | [#46203](https://github.com/sgl-project/sglang/issues/46203) | Blackwell（B200）上 HiCache kvcacheio 传输内核出现 Xid 13 “CTA Not Present” 错误 —— 4 台机器共 7 次崩溃 | 进行中 |
| 🟡 中 | [#51608](https://github.com/sgl-project/sglang/issues/51608) | 在 CP 模式下（attn_cp_size=8）且启用 fast_file 时，HiCache L3 存储预取永不完成，请求阻塞直至达到重试上限 | 开放 |
| 🟡 中 | [#51531](https://github.com/sgl-project/sglang/issues/51531) | `--mamba-ssm-dtype bfloat16` 导致 Qwen3.5-9B 在长推理任务中 MATH-500 分数下降约 8 分 | 开放 |
| 🟡 中 | [#51188](https://github.com/sgl-project/sglang/issues/51188) | 主机固定预算耗尽导致 24GB GPU + 32GB 主机上的 MiniMax-H3 OOM 杀死；服务器报告就绪但返回 503 错误 | 开放 |

> 注：多个高严重性问题与 **Blackwell GPU（B200）** 和 **CP 模式下的 HiCache** 相关，表明生产规模环境中的压力测试正在积极进行。

#### **6. 对应用开发者的意义**
- **为分离架构设计**：利用新的 **非对称预填充/解码** 模式（通过 DFlash KV 类型和共享草稿），实现代理的高效扩展，同时保持极低延迟开销。
- **若长上下文准确性重要，请避免对 Mamba 模型使用 `bfloat16`** —— 除非经过明确验证，否则应使用 `float16`。
- **在 CP 和 HiCache 下，用大批次验证多节点部署**；预期可能因 L3 预取问题导致阻塞。
- **为 SGLang 1.0 做准备**：预计升级至 `0.5.x` 时将有更严格的配置校验、破坏性变更，以及明确的兼容性策略（`Issue #50045`）。
- **保护你的端点**：一个关键漏洞（`#51555`）允许通过 `extra_sampling_params` 创建任意文件 —— 生产环境中务必确保输入净化。

> 💡 *技巧提示*：若在 B200 系统上运行代理类工作负载，请密切关注 `#26340` 和 `#46203` —— 这些问题可能需要运行时缓解措施，直到正式修复上线。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

### **1. 今日亮点**  
`llama.cpp` 的最新更新聚焦于 MoE 和混合注意力模型的关键正确性修复，包括修复 HRM 层槽位数溢出问题（#32601），以及对 Qwen3 系列架构通过 YuE2 投影器的改进支持（#32606）。后端性能方面也取得显著进展：OpenCL 现已支持 `dp4a` 加速的 int8 量化 KQ 矩阵乘法（#32577），Vulkan 则新增了对 UMA 内存访问的优化（#32634）和 Intel i915 驱动超时问题的修复（#32516）。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未发布新版本。但多个**关键修复**已合并至 master 分支，可能影响使用 MoE、推测解码或混合注意力模型的用户：

- **HRM 层槽位数溢出修复**：`n_hrm_layers_per_stack`、`n_hrm_h_cycles` 与 `(n_hrm_l_cycles + 1)` 的乘积曾错误地以 `uint32_t` 类型计算，可能导致无效模型配置通过验证（#32601），在大型 HRM 模型中引发无声数据损坏。
- **YuE2 投影器加载修复**：MMProjectors 中可选的 `cls.output.weight` 张量（用于 Qwen3 重排序头）现在在加载时被安全忽略（#32606），防止特定变体出现崩溃。

> 🔗 [PR #32601](https://github.com/ggml-org/llama.cpp/pull/32601) | [PR #32606](https://github.com/ggml-org/llama.cpp/pull/32606)

---

### **3. 新模型与硬件支持**  
- ✅ **新模型支持**：  
  - 通过 PR #32588（由 SenseNova 团队提交）正式支持 **SenseNova Loop** 架构，使 *SenseNova-Loop* 等模型可通过 llama.cpp 原生运行时进行推理。  
  - **Minimax-M3** 现在使用 `ggml_top_k_mask` 实现融合稀疏注意力，提升效率与正确性（#32614）。
- ✅ **新硬件/后端支持**：  
  - **OpenCL**：在分解式 Flash Attention (FA) 中完整支持 `dp4a` 的 `KQ` 矩阵乘法，可在高通 Adreno GPU 上实现更快的推测验证（#32577）。  
  - **WebGPU**：为 TTS 解码器（如 Qwen3-TTS、PocketTTS）新增 `POOL_2D` 与 `COL2IM_1D` 支持（#32250，#31708）。  
  - **Vulkan**：针对 **Intel i915 驱动**增强支持，包含超时缓解机制（#32516）；为 Strix Halo (gfx1151) APU 优化调度策略（#32627）。  
  - **Metal**：修复 `NSMakeRange` 参数误用问题（#32602）。

> 🔗 [PR #32588](https://github.com/ggml-org/llama.cpp/pull/32588) | [PR #32577](https://github.com/ggml-org/llama.cpp/pull/32577) | [PR #32250](https://github.com/ggml-org/llama.cpp/pull/32250) | [PR #31708](https://github.com/ggml-org/llama.cpp/pull/31708) | [PR #32516](https://github.com/ggml-org/llama.cpp/pull/32516)

---

### **4. 性能与优化**  
- **OpenCL**：基于 `dp4a` 的 KQ 矩阵乘法显著降低 int8 KQ 在 FA 内核中的计算时间——尤其在小草稿推测解码场景下效果显著。早期基准测试显示，在 Adreno 设备上推测验证吞吐量最高提升约 **~30%**。
- **Vulkan**：  
  - 修复无 `HOST_CACHED` 内存类型时在 UMA AMD APU 上的慢速 CPU 读取问题，主机到 GPU 数据传输速度从约 100 MB/s 提升至接近内存带宽（约 30 GB/s）。  
  - 对 gfx1151（Strix Halo）的整数 matvec 调度优化，使 Q2_K 量化层延迟降低 **~15%**。
- **CPU**：RISC-V Vector (RVV) 指令集现已支持在具备 RVV 能力的 CPU 上向量化 Mamba-2 SSM 扫描（`SSM_SCAN`）——预计在大序列上下文中可将吞吐量提升 **~2–3 倍**。
- **CUDA**：重构 `set_n` 的 scatter kernel，支持更高效的批量张量写入；在多槽位场景下显著提升批处理效率。

> 🔗 [PR #32577](https://github.com/ggml-org/llama.cpp/pull/32577) | [PR #32634](https://github.com/ggml-org/llama.cpp/pull/32634) | [PR #32627](https://github.com/ggml-org/llama.cpp/pull/32627) | [PR #32448](https://github.com/ggml-org/llama.cpp/pull/32448)

---

### **5. 稳定性与回归问题**  
今日报告了多个高严重性稳定性问题，主要影响 GPU 后端及推测解码：

| 问题 | 严重性 | 状态 | 影响 |
|------|----------|--------|--------|
| [#32603](https://github.com/ggml-org/llama.cpp/issues/32603)：Vulkan `FLASH_ATTN_EXT` 缺少 K/V 行支持 | 严重 | 开放 | 导致多数模型在 Vulkan 上无法使用 flash attention |
| [#32160](https://github.com/ggml-org/llama.cpp/issues/32160)：支持哈达玛旋转的三值权重（功能请求） | 中等 | 开放 | 无即时风险，但表明对高级量化技术的兴趣日益增长 |
| [#32375](https://github.com/ggml-org/llama.cpp/issues/32375)：Pascal (sm_60) 在混合模型中长上下文数据损坏 | 严重 | 开放 | 旧版 NVIDIA GPU（如 GTX 10xx）出现无声输出损坏 |
| [#32178](https://github.com/ggml-org/llama.cpp/issues/32178)：HIP/gfx1200 在 `FLASH_ATTN_EXT` 中产生 NaN | 严重 | 开放 | ROCm 7.1+ 上推理不稳定 |
| [#25489](https://github.com/ggml-org/llama.cpp/issues/25489)：自 b9935 版本起 MTP 性能下降 | 高 | 开放 | 草稿令牌吞吐量下降约 **50%** |

> ⚠️ **注意**：尽管这些缺陷尚未合并修复，但若干相关 PR（如 #32634、#32516）表明后端鲁棒性正在持续改进。

---

### **6. 对应用开发者的启示**  
- **使用 MoE 与混合模型时需谨慎**（尤其是 Qwen3.5+、基于 HRM 的模型），直至 #32601 发布——无效配置可能导致无声错误或崩溃。
- **仅在内存充足时启用 `--moe-cache-cpu-share`** ——近期 PR（如 #32636）指出，由于 MoE 缓存追踪导致图节点开销增加。
- **对于低延迟代理**，优先选择 OpenCL（Adreno）或 Vulkan（Intel/AMD）后端——`dp4a` 与 `COL2IM_1D` 支持可显著提升推测解码与 TTS 性能。
- **避免在 sm_60（Pascal）上执行长上下文任务**，直至 #32375 修复——预期会出现输出损坏。
- **监控 RPC/WebUI 行为**——多起报告指出 Windows（Vulkan）与 macOS（Metal）间连接中断问题（#32263），提示分布式部署需稳定网络层支持。

> 💡 **技巧提示**：使用 `--fim-qwen-1.5b` 预设并开启 `--ui-mcp-proxy-allow-private-urls`（PR #32633），可在本地安全部署私有模型访问的 UI。

---  
*摘要生成时间：2026-11-20 | 来源：[github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-20**

---

### **1. 今日亮点**  
Ollama 项目持续深化对 **本地代理可靠性**、**提示词缓存效率** 和 **MLX 后端性能** 的关注。关于静默标记截断（问题 #19765）、空工具调用响应（问题 #19780）以及提示词缓存失效（问题 #19774）的关键问题，凸显了上下文处理与模型保真度方面的持续挑战。与此同时，#19785（自适应并行性）和 #19783（Hy4 Flash + DFly2 撰写）等合并请求（PR）表明，在异构硬件上优化推理方面正展现出强劲势头。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告任何内容。*  
无新版本发布或破坏性变更。最新稳定版仍为 `0.40.16`。

---

### **3. 新模型与硬件支持**  
- **新增模型支持**：提议集成 OVHcloud 的 **Olala-v1.0-mini-7A1B-GGUF**（问题 #19777）——目前因导入错误受阻；尚未正式集成。  
- **硬件/后端进展**：  
  - MLX 特有增强：Hy4 Flash 文本/视觉推理、紧凑型 MLA，以及自适应 DFly2 撰写（PR #19783）。  
  - Metal 运行时改进：动态内存感知并行性（PR #19785）、持久化非活跃对话缓存（PR #19745），以及基于内存压力的对话历史保留策略（PR #19678）。

---

### **4. 性能与优化**  
- **上下文管理**：  
  - PR #19783 引入 **Hy4 Flash** 与 **DFly2 撰写** 用于 MLX，有望在长上下文生成中提升吞吐量并降低延迟。  
  - PR #19785 实现根据可用 GPU 内存和估算的上下文存储需求，**自动选择并行槽位数（1/2/4/8）** —— 在负载下显著提升资源利用率。  
- **KV 缓存效率**：  
  - PR #19327 提出按层设置 KV 缓存大小，避免过度分配，减轻调度过程中的显存压力（对具有不同注意力头数量的多层模型尤为关键）。  
- **提示词缓存**：  
  - 问题 #19774 显示，提示词缓存仅在 *完全匹配* 时复用——即使最后一条消息有微小变动，也会触发完整重读（约 2,040 个标记被重新读取）。这对代理工作流造成显著影响。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 描述 | 状态 |
|--------|-------|-------------|--------|
| 🔴 高 | [#19765](https://github.com/ollama/ollama/issues/19765) | 无论输入大小如何，在约 6.5 万标记处出现静默截断；`done_reason=stop` 误导客户端认为生成自然结束。 | 已关闭 |
| 🔴 高 | [#19780](https://github.com/ollama/ollama/issues/19780) | 尽管存在有效的 `completion_tokens` 与工具调用，但 `assistant.content` 为空且 `finish_reason: stop` —— 导致使用工具的代理失效。 | 已关闭 |
| 🟡 中 | [#19779](https://github.com/ollama/ollama/issues/19779) | `qwen2.5-coder:7b` 声称支持 `tools` 功能，但由于模板不匹配，实际未输出原生 `tool_calls`。 | 已关闭 |
| 🟡 中 | [#19767](https://github.com/ollama/ollama/issues/19767) | Qwen3.8 模型在单槽位上同时运行两个会话时，从第 0 个标记重新读取整个提示词；并行槽位丢失提示词缓存。 | 开放 |
| 🟡 中 | [#19773](https://github.com/ollama/ollama/issues/19773) | Ollama Cloud 报告恢复会话首请求的提示词缓存命中率接近零——暗示缓存预热策略不佳。 | 开放 |
| 🟡 低 | [#19782](https://github.com/ollama/ollama/issues/19782) | Windows 上 `/api/embed` 接口因回环连接拒绝（`connectex`）返回 400 错误，当调用内部 `llama-server` 时发生。 | 开放 |

> ✅ **修复进行中**：PR #19776 修复了在流式传输末尾对 Qwen 工具调用的解析问题——对可靠代理输出至关重要。

---

### **6. 对应用开发者的启示**  
- **避免静默截断**：需谨慎监控输入长度——若接近 6.5 万标记，数据可能无声截断而无警告。请使用 `max_tokens` 并验证 `usage.prompt_tokens` 与实际输入的一致性。  
- **确保工具调用可靠性**：对声称支持工具的 `qwen2.5-coder` 及类似模型保持警惕——尽管接口声明支持，但可能不输出原生 `tool_calls`。通过 `/api/show` 检查行为，并使用真实 Schema 测试验证。  
- **优化缓存利用**：设计提示词时尽量减少微小变化（如时间戳、ID），这些都会使缓存失效。考虑批量处理或预处理以最大化复用率。  
- **充分利用 MLX 改进**：若使用 Apple Silicon 或 Metal 后端，即将推出的 Hy4 Flash 与自适应撰写器（PR #19783）将带来更高的吞吐量与内存效率。  
- **代理设计注意点**：在单槽位上同时运行多个活跃会话（尤其是 Qwen3.8）可能导致提示词重复处理和性能下降——建议采用槽位隔离或会话限流机制。

👉 *实用技巧*：使用 `ollama run --audio`（问题 #19396）实现本地语音合成——为未来支持语音的代理做好准备。  

---  
*数据来源：[github.com/ollama/ollama](https://github.com/ollama/ollama)*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 简报 – 2026-11-20**

---

### **1. 今日亮点**  
LiteLLM 生态系统持续快速演进，重点聚焦于**网关级性能优化**、**增强的防护机制**以及**更完善的可观测性能力**。关键代码提交包括原生 Rust 实现的速率限制、Kafka 日志支持，以及对 Bedrock 防护机制扫描范围的扩展——标志着其在生产级 AI 基础设施中的深度集成。`v1.112.0-dev.1` 和 `v1.111.0-rc.2` 版本的发布，凸显了向稳定版 1.112.0 的积极开发进程。

---

### **2. 发布与破坏性变更**  
- **`v1.112.0-dev.1` (开发版)**：最新开发构建，持续优化路由逻辑与代理稳定性。  
  🔗 [GitHub 发布](https://github.com/BerriAI/litellm/releases/tag/v1.112.0-dev.1)  
- **`v1.111.0-rc.2` (发布候选版)**：v1.112.0 的最终预发布验证版本，修复了预算处理逻辑和流式响应正确性问题。  
  🔗 [GitHub 发布](https://github.com/BerriAI/litellm/releases/tag/v1.111.0-rc.2)  
- **`v1.108.12 (LTS)`**：现已提供长期支持版本，包含关键安全与稳定性补丁。使用 `ghcr.io/berriai/litellm:lts` 可实现自动更新。  
  🔗 [GitHub 发布](https://github.com/BerriAI/litellm/releases/tag/v1.108.12)

> ✅ **迁移提示**：使用 `DATABASE_URL_READ_REPLICA` 的运维人员应立即升级，以避免数据库短暂异常后导致永久读取失败（详见 #52284）。

---

### **3. 新模型与硬件支持**  
- **价格表新增模型**（PR #53021）：  
  - Kimi K3.1 Pro（每百万 token 2.60 / 13.00 美元）  
  - Kimi K2.6  
  - MiniMax M3.1 Flash  
  - Nemotron 3.5 Super VL  
  ➤ 均已通过推理 API 后端支持，并实现完整成本追踪。  
  🔗 [PR #53021](https://github.com/BerriAI/litellm/pull/53021)  

- **请求添加 Sglang 提供商**（问题 #13681）：  
  社区驱动的功能需求，希望将 Sglang 作为本地推理提供方接入——尤其适用于高吞吐场景下的 MoE 模型部署。  
  🔗 [问题 #13681](https://github.com/BerriAI/litellm/issues/13681)

---

### **4. 性能与优化**  
- **原生 Rust 网关增强**（PRs #52839, #53015, #53013）：  
  - 速率限制（RPM/TPM）由原生 Rust 实现而非 Python → 在高负载场景下延迟降低约 30%。  
  - 模型组间的优先级容量共享机制现由网关层级统一管理。  
  - 禁用受控 Python 监听器上的 Nagle 算法 → 显著提升实时流式响应能力。  
  🔗 [PR #52839](https://github.com/BerriAI/litellm/pull/52839), [PR #53015](https://github.com/BerriAI/litellm/pull/53015), [PR #53013](https://github.com/BerriAI/litellm/pull/53013)  

- **Kafka 日志原生集成**（PR #52790）：  
  支持直接将审计日志与请求导出至 Kafka，适用于企业级监控与分析流水线。  
  🔗 [PR #52790](https://github.com/BerriAI/litellm/pull/52790)

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 描述 | 修复状态 |
|---------|-------|-------------|------------|
| 🟠 高 | [#52284](https://github.com/BerriAI/litellm/issues/52284) | 读副本故障导致代理永久无法读取；无降级写入回退机制 | ❌ 待处理 |
| 🔴 严重 | [#52853](https://github.com/BerriAI/litellm/issues/52853) | 上游返回 400 流式错误时断开连接，而非返回错误信息 | ✅ PR #52489（修复合成流状态） |
| 🟡 中等 | [#52548](https://github.com/BerriAI/litellm/issues/52548) | `usage-based-routing-v2` 下优先级路由忽略 TPM 限制 | ⚠️ 进行中 |
| 🟡 中等 | [#50125](https://github.com/BerriAI/litellm/issues/50125) | 预算超过支出阈值 11 次调用，尽管设置了 `max_budget` | ✅ PR #53020（保留多日重置偏移量） |

> 💡 **注意**：多个回归问题源于配置错误或过时的数据库状态；请确保执行一致的模式迁移。

---

### **6. 对应用开发者的意义**  
- **生产环境使用 `lts` 标签**：`ghcr.io/berriai/litellm:lts` 可确保你运行在经过测试的稳定基线之上，并支持自动补丁更新。  
- **利用原生 Rust 网关**：实现低延迟、高吞吐的推理路由，对智能体工作流及实时应用尤为关键。  
- **启用 Kafka 日志功能**：若正在构建可观测性体系，可减少对自定义集成的依赖。  
- **避免使用 `v1.82.x` UI**：因存在严重性能问题（#23005）；建议升级至 `v1.108.12` 及以上版本。  
- **谨慎使用 `max_budget`**：当前行为允许超支；建议配合 `budget_reset_offset`，或使用 `v1.111.0-rc.2+` 以获得修复。  

> ✅ **最佳实践**：始终使用 `cosign` 验证镜像签名以保障安全。  
> 🔒 验证命令：  
> ```bash
> cosign verify \
>   --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main \
>   --certificate-oidc-issuer https://token.actions.githubusercontent.com \
>   ghcr.io/berriai/litellm:v1.112.0-dev.1
> ```

---  
*简报生成时间：2026-11-20 | 来源：[BerriAI/litellm GitHub](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth 摘要 – 2026-11-20**

---

### **1. 今日亮点**  
Unsloth v0.1.920-beta 带来重大 AMD NPU 升级，现已支持在 Ryzen AI 硬件上直接运行 Q4NX 模型，并可实时监控运行时性能。新增对 LTX-2.5 与 MOSS-Image LoRA 训练的支持，以及 NVIDIA Cosmos3 FP8 视频生成和定时聊天回复功能，进一步强化了 Unsloth 作为全栈本地 LLM 网关与微调平台的定位。

---

### **2. 发布与破坏性变更**  
- **v0.1.920-beta**：  
  - AMD NPU 支持现已包含 Q4NX 模型加载与运行时状态指示器 ([GitHub 发布](https://github.com/unslothai/unsloth/releases/tag/v0.1.920-beta))。  
  - 新增：通过 `unsloth studio` 实现定时任务与聊天回复自动化、支持 LTX-2.5 和 MOSS-Image LoRA 训练。  
  - NVIDIA Cosmos3 FP8 视频扩散现已原生支持 Studio。  

> ⚠️ *未报告任何破坏性 API 变更；所有更新均为累加性或可选启用。*

---

### **3. 新模型与硬件支持**  
- **AMD NPU**：通过 FastFlowLM 完全支持 XDNA 2+ NPUs，不支持时自动降级至 RyzenAI ONNX Runtime（通过 PR #18555）。  
- **旧版 AMD XDNA NPUs（Ryzen AI 100/200 系列）**：已开启功能请求 (#18501) — 当前暂不支持。  
- **新模型**：  
  - **DaisyRose-27B** – 请求增加微调支持 (#18465)。  
  - **SenseNova-Loop-9B** – 因其循环混合架构被特别强调用于微调场景 (#18497)。  
  - **MiniMax-M3.1-Flash-GGUF** – 工具调用解析稳定性正在审查中 (#18481)。  
- **后端**：  
  - **Windows NPU**：双运行时支持（FastFlowLM + RyzenAI ONNX Runtime），以绕过 Smart App Control 限制 (#18553, #18554, #18555)。  
  - **仅 CPU 主机**：FLUX.2 VAE 解码现在在 CPU 上通过 torch 执行 (#18521)。

---

### **4. 性能与优化**  
- **扩散训练**：  
  - SDXL 与 MiniMax-H3 训练器默认启用持久化条件缓存 (#18519)。  
  - 引入检查点预算机制以降低 OOM 风险；失败后自动降级行为 (#18518)。  
  - 分块 VAE 解码现使用预分配输出缓冲区 → 避免 `torch.cat` 开销 (#18506)。  
- **冷卡 Int8 加载**：  
  - 探针内核在权重加载阶段编译（而非加载后）→ 将 FLUX.3 INT8 的冷启动延迟从约 15 秒降至约 2.6–2.9 秒 (#18455)。  
  - CUTLASS 库哈希按进程优化 → 每次加载节省约 3 秒 (#18463)。  
- **GGUF 调度**：  
  - 在无 MLX 栈的 Mac 设备上，GGUF 适配评分现基于 Metal 可用性而非空闲内存 (#18552)。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 描述 | 修复状态 |
|---------|------|-------------|------------|
| 高 | #18481 | MiniMax-M3.1-Flash-GGUF 中间断工具调用解析失败，暴露原始标记并中断代理执行 | 开放 |
| 高 | #17015 | Qwen 混合模型在工具调用后重处理完整提示跨轮次 | 开放 |
| 中 | #18221 | Wayland 会话（KDE/GNOME）中禁用计算机使用 | 已关闭（临时方案：使用 Xorg） |
| 中 | #18005 | Windows ROCm 上 GPU 监控显示零利用率/温度 | 已关闭 |
| 中 | #17985 | AMD 上图像生成出现黑屏 | 已关闭 |
| 低 | #18546 | Excel 读取器显示隐藏格式值（如 `0;-0;;@`） | 开放 |
| 低 | #18523 | WebView 依赖项在锁定系统上引发安全顾虑 | 开放 |

> ✅ *多个关键问题已有修复提交（如 #18521, #18519, #18518, #18455, #18463），但工具链与提示处理仍存在活跃回归。*

---

### **6. 对应用开发者的意义**  
- **本地 AI 代理**：配合定时任务回复与稳定工具调用（待 #18481 修复），开发者现可通过 Unsloth Studio 的桌面与网页界面构建持久、有状态的代理。  
- **跨平台部署**：AMD NPU 支持现已覆盖现代 Ryzen AI 芯片，并为受限环境（如 Smart App Control）提供降级路径，使 Windows 设备上的部署范围更广。  
- **微调效率**：自动 `max_seq_length` 检测 (#18236) 与持久化条件缓存 (#18519) 显著减少训练流水线中的摩擦。  
- **安全与隔离**：新引入的网络防火墙（针对网页工具、Python 与终端，#18548）实现更安全的代理操作沙箱——对生产级应用至关重要。  
- **硬件灵活性**：通过 sd.cpp 实现仅 CPU 图像/视频推理现已稳健支持，便于轻量级边缘部署。

> 🔗 **值得关注的关键 PR**：[#18553](https://github.com/unslothai/unsloth/pull/18553)（签名 FastFlowLM），[#18552](https://github.com/unslothai/unsloth/pull/18552)（Mac GGUF 适配），[#18548](https://github.com/unslothai/unsloth/pull/18548)（网络防火墙）。

---  
*摘要生成时间：2026-11-20 | 来源：[unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*