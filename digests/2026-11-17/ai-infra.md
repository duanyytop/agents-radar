# AI 基础设施日报 2026-11-17

> 生成时间: 2026-11-17 04:44 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-11-17**

---

### **1. 生态概览**  
2026年末，AI基础设施领域正经历推理引擎、本地运行时与大模型网关的快速融合——这一趋势由对高吞吐推理、多模态支持以及原生代理执行的需求所驱动。各项目日益聚焦于硬件专用化（AMD ROCm/CDNA4、Intel NPU、华为CANN）、分布式优化（MoE卸载、可扩展KV缓存）以及通过MCP集成和推测解码实现端到端代理支持。一个清晰的分叉正在形成：以`llama.cpp`和`Unsloth`为代表的低延迟、边缘优化型运行时致力于本地自主性，而`vLLM`、`SGLang`和`Ollama`等可扩展、云对齐系统则更关注吞吐量、稳定性及多GPU编排。

---

### **2. 活跃度对比**

| 项目       | 开放问题（最近7天） | 合并的PR（最近7天） | 发布状态      |
|------------|---------------------|---------------------|---------------|
| **vLLM**   | 89                  | 132                 | v0.34.0（稳定版） |
| **SGLang** | 67                  | 58                  | 无新版本发布     |
| **llama.cpp** | 53               | 71                  | 构建 b12453–b12441 |
| **Ollama** | 42                  | 29                  | 无新版本发布     |
| **LiteLLM** | 38                | 41                  | v1.108.10（补丁版） |
| **Unsloth** | 35                | 48                  | v0.1.918-beta（测试版） |

> ✅ *vLLM 在速度与成熟度上均领先；SGLang 尽管不稳定，仍展现出强劲工程势头；Unsloth 和 llama.cpp 正通过活跃的测试版与构建发布推动前沿能力边界。*

---

### **3. 模型支持竞赛**

| 新模型 / 架构           | 支持项目                        | 备注 |
|------------------------|----------------------------------|------|
| **Mistral Large 4**    | vLLM, Ollama（通过代理）         | vLLM 添加原生支持；Ollama 依赖 LiteLLM 网关 |
| **Kimi K2.5 / K3 Flash** | vLLM, Unsloth                   | vLLM 优先支持 AMD 特定变体；Unsloth 实现 GGUF + LoRA |
| **DeepSeek-V4.1-Flash (SM120)** | vLLM（已修复）, SGLang（崩溃） | vLLM 通过 CUDA Graph 修复稳定 SM120；SGLang 仍不稳定 |
| **Qwen3.8-2.4T-A95B / Flash-Next** | vLLM, llama.cpp（AMD特化） | vLLM 全面优化 ROCm；llama.cpp 针对 gfx950 |
| **MiniMax-M3.1-Flash** | vLLM                            | 首个支持该模型的项目 |
| **Nemotron-3.5-Transcribe** | vLLM                          | 新增专用语音转录模型 |
| **Ascend A3/A5（NPU）** | SGLang, Ollama                  | 均通过 CANN/OpenVINO 支持 GLM-5.3-Flash |
| **AMD RDNA3_5 / gfx1013** | llama.cpp                     | 独家早期访问；vLLM 与 SGLang 正在跟踪 |
| **Intel Core Ultra NPU** | Ollama（功能请求）             | 尚未实现；与 AMD/Huawei 存在显著差距 |
| **Strata（MoE 流式传输，AMD 原生）** | Unsloth（实验性）         | 新兴细分后端；尚未主流化 |

> 🏆 **胜出者：vLLM** —— 在模型覆盖广度上领先，尤其在多模态、长上下文及前沿专有模型方面表现突出。  
> 🔥 **新兴竞争者**：`llama.cpp`（硬件多样性）、`Unsloth`（代理集成）、`Ollama`（生态扩展）。

---

### **4. 性能前沿**

| 优化方向               | 领先项目                     | 关键进展 |
|-----------------------|-------------------------------|----------|
| **可扩展 KV 缓存**     | vLLM（默认）                 | 热启动后基于空闲内存动态调整大小；减少长提示中的资源浪费 |
| **MoE 专家卸载**       | vLLM（RFC #38256），SGLang（调优） | vLLM 实现异步流水线 + GPU 缓存；SGLang 面临回归风险 |
| **多GPU / 分布式服务** | vLLM, SGLang, Unsloth         | vLLM：张量并行；SGLang：负载下使用 HiCache；Unsloth：DDP/FSDP2 自动选择 |
| **内核级优化**         | vLLM, llama.cpp, Unsloth      | vLLM：MXFP4 反量化；llama.cpp：GDN MMA、split_k；Unsloth：基于 CPU 的嵌入服务 |
| **量化效率**           | llama.cpp（PTQ1_0/STQ1_0），vLLM（W4A16 非确定性） | llama.cpp 引入三元量化格式；vLLM 警告 W4A16 不利于可复现性 |
| **推测解码**           | vLLM, SGLang, Ollama          | 均在批处理与验证方面持续改进；Ollama 的自适应历史重用尤为突出 |

> ⚙️ **vLLM 在核心推理优化上占据主导地位**，尤其是在内存效率与 MoE 可扩展性方面。`llama.cpp` 在多样化后端的底层内核调优上表现出色。

---

### **5. 层级定位**

| 项目       | 主要层级                  | 角色摘要 |
|------------|----------------------------|----------|
| **vLLM**   | **推理引擎**              | 高性能、可扩展的服务引擎；专为云/数据中心部署优化 |
| **SGLang** | **推理引擎 + 网关**        | 混合运行时，聚焦代理流水线、控制API及多GPU/NPU支持 |
| **llama.cpp** | **本地运行时 / 嵌入式**   | 跨平台、轻量、自包含推理；适用于边缘、移动端及隐私优先应用 |
| **Ollama** | **模型网关 / 本地CLI**     | 开发友好接口层；抽象后端复杂性；正拓展至NPU/CANN |
| **LiteLLM** | **大模型网关 / 代理层**   | 多提供方路由、成本控制、流清理；对代理框架与可观测性至关重要 |
| **Unsloth** | **微调 + 代理运行时**     | 融合训练（LoRA）、本地服务与计算机使用（MCP），面向自主桌面代理 |

> 🎯 **vLLM 与 SGLang** 是高规模生产环境下的主导**推理引擎**。  
> 🧩 **Unsloth 与 Ollama** 正演变为**原生代理平台**。  
> 🔗 **LiteLLM** 仍是多云工作流中不可或缺的**集成层**。

---

### **6. 趋势信号**

#### 🔍 **从当前活动提炼的关键行业趋势：**
1. **硬件专用化加速推进**：AMD CDNA4/gfx950、Intel NPU、华为CANN及苹果硅芯片已不再是实验性技术，所有主要项目均在积极优化。
2. **代理中心设计已成为主流**：`Unsloth` 的计算机使用（测试版）与 `SGLang` 的 HiCache/MoE 调优反映出向实时、交互式代理执行的转变。
3. **内存效率已成为刚性要求**：可扩展KV缓存（vLLM）、异步输入拷贝（llama.cpp）、CPU服务嵌入（Unsloth）表明，长上下文推理需要更智能的资源管理。
4. **稳定性成为新差异化指标**：尽管功能迭代迅速，但**关键回归问题**（如 SGLang CUDA 核心转储、Ollama Vulkan 崩溃）凸显可靠性已成竞争壁垒，不再仅是性能问题。
5. **安全与可观测性已内置**：LiteLLM 的 cosign 验证、Ollama 的每请求指标日志、SGLang 的配置校验，标志着企业就绪程度不断提升。

#### 📌 **应用开发者应重点关注：**
- **采用 vLLM 的可扩展 KV 缓存** 用于长上下文代理——无需手动调优。
- 若开发桌面自动化或游戏AI代理，请**测试 Unsloth v0.1.918-beta**。
- 使用 **Ollama + LiteLLM** 构建安全、可观测、多提供商的代理管道。
- 在 vLLM 中**避免使用 W4A16 量化**，直到确定性内核稳定。
- **监控 CI 稳定性**——SGLang 与 Ollama 存在不稳定的测试环境；建议优先本地验证。
- **准备支持 Unix 域套接字**（Ollama issue #19464）——低延迟进程间通信将成为下一代本地代理的关键。

> 💡 **结论**：未来AI基础设施不仅追求更快，更需更智能、更可靠、更适配代理。根据你的目标选择栈：追求规模化选 **vLLM**，边缘自主性选 **llama.cpp**，人机协同选 **Unsloth**。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest – 2026-11-17

---

### **1. 今日亮点**  
vLLM v0.34.0 版本包含来自 412 名贡献者的 1,061 次提交，新增 **10 个模型支持**，包括 Mistral Large 4 和 Kimi K2.5 变体。最显著的更新是 **可扩展的 KV 缓存现已默认启用**，可根据预热后的可用内存动态调整缓存大小，显著提升长上下文任务的效率。与此同时，AMD ROCm 优化、Rust 前端功能对齐以及 MoE 专家卸载等方向的开发正加速推进。

---

### **2. 发布与破坏性变更**  
- **v0.34.0**：今日发布，无破坏性 API 变更，但引入关键行为调整：`extensible_kv_cache` **默认开启**。该特性在高吞吐场景下提升内存利用率，但在涉及严格内存预算的边缘情况下可能影响行为。  
  🔗 [GitHub Release v0.34.0](https://github.com/vllm-project/vllm/releases/tag/v0.34.0)

---

### **3. 新模型与硬件支持**  
#### ✅ **新增模型**  
- Mistral Large 4 (`mistralai/Mistral-Large-4`)  
- MiniMax-M3.1-Flash (`minimax/MiniMax-M3.1-Flash`)  
- Nemotron-3.5-Transcribe (`nvidia/Nemotron-3.5-Transcribe`)  
- Qwen3.8-2.4T-A95B（AMD 专属）  
- Qwen3.8-Flash-Next（AMD 专属）  
- DeepSeek-V4.1-Flash（支持 SM120）  
- Pixtral（HF 格式，通过 `LlavaForConditionalGeneration`）  
- LFM3-VL-2B（LiquidAI）  
- Ling VL（多模态视觉语言模型）  
- Muse Spark Open PTPC-FP8（AMD）  

#### ✅ **硬件与后端进展**  
- **ROCm / AMD CDNA4 (gfx950)**：针对 Qwen3.8 系列、DeepSeek-V4.1-Flash 与 Muse Spark 模型的性能优化正在进行中。  
- **CUDA SM120 (Blackwell RTX PRO 6000)**：已修复 DeepSeek-V4.1-Flash 的问题，支持 CUDA graph capture 并解决解码吞吐量过低的问题。  
- **Rust 前端**：仍为实验性功能（`VLLM_USE_RUST_FRONTEND=1`），但功能对齐路线图（#44280）已逐步落地。  
- **多模态支持**：已为 LFM3-VL 添加编码器 CUDA graph 支持；Qwen3-VL、GLM-V、Kimi K2.5 的 ViT 完全 CUDA graph 支持正在跟踪（#38175）。

---

### **4. 性能与优化**  
#### 🚀 **关键优化**  
- **可扩展 KV 缓存（默认启用）**：预热后基于实际空闲内存动态调整缓存大小，减少长上下文推理中的内存浪费。  
- **MoE 专家卸载（RFC #38256）**：通过 GPU 缓存 + 异步流水线实现增量卸载，使大型 MoE 模型可在超出显存限制的情况下运行。  
- **ROCm MXFP4 反量化**：PR #68086 仅对被路由的“不同专家”进行反量化，消除主机同步开销，显著降低 MoE 反量化负担。  
- **Kimi-K3 FlashKDA**：AITER 后端现在在 gluon 预填充路径中使用 `FlashKDA`，在 CDNA4 GPU 上实现更快的解码速度。  
- **Qwen3.8-Flash-Next (gfx950)**：专用性能追踪器（#59575）包含内核融合与内存布局优化。

#### ⚙️ **待办事项**  
- **Octave KV（3-bit）**：RFC #59773 提出为 AMD GPU 原生支持 3 位 KV 缓存，以进一步压缩内存占用。  
- **专用解码（RFC #60904）**：标准化针对特定模型的硬件加速单核（mono-kernels）。  
- **CI 流水线提速**：PR #66411 通过构建通道优化，目标将 PR 耗时从约 73 分钟降至约 30 分钟。

---

### **5. 稳定性与回归问题**  
#### 🔴 **严重问题（高优先级）**  
- **DeepSeek-V4.1-Flash 在 SM120（RTX PRO 6000 Blackwell）上**：当使用 `--enforce-eager` 时解码吞吐量极低，且无法使用 CUDA graphs。已在 PR #65527 修复（将 SM120 纳入扁平化设备查询路径）。  
  🔗 [Issue #56892](https://github.com/vllm-project/vllm/issues/56892) | [PR #65527](https://github.com/vllm-project/vllm/pull/65527)  
- **ROCM Attention Bug（RDNA4）**：`ROCM_ATTN` 在头尺寸 ≥96 且非默认块大小时返回错误注意力结果或导致 GPU 故障。  
  🔗 [Issue #62697](https://github.com/vllm-project/vllm/issues/62697)  
- **LoRA 下前缀缓存损坏**：同名但不同 ID 导致缓存损坏。  
  🔗 [Issue #30931](https://github.com/vllm-project/vllm/issues/30931)  

#### 🟡 **其他重要问题**  
- **W4A16 HummingLinearKernel 非确定性**：即使输入相同，不同进程间结果仍存在差异；在 H100 上比 Machete 更快。  
  🔗 [Issue #66232](https://github.com/vllm-project/vllm/issues/66232)  
- **FlexAttention 页式与连续 BF16 输出不一致**：在 gfx950 上观察到 1 个 ULP 差异。  
  🔗 [Issue #66460](https://github.com/vllm-project/vllm/issues/66460)  

---

### **6. 对应用开发者的意义**  
- **默认启用可扩展 KV 缓存**：无需再手动调优 `max_num_seqs` 或 `max_model_len` 以应对长提示——vLLM 现已能在预热后自动适应内存使用。  
- **谨慎启用 Rust 前端**：尽管可通过 `VLLM_USE_RUST_FRONTEND=1` 使用，但尚缺乏功能对齐（如工具调用、结构化输出）；在 #44280 成熟前，预计 Python 与 Rust API 将出现差异。  
- **为多模态代理优化**：随着 LFM3-VL 的编码器 CUDA graph 已上线，且 Qwen3-VL/Kimi 的相关工作持续推进，建议在模型配置中启用 `supports_encoder_cuda_graph`。  
- **避免使用 W4A16 量化以保证可复现性**：由于 `HummingLinearKernel` 存在非确定性问题，若需确定性输出，请改用其他内核（如 Machete）。  
- **关注 AMD ROCm 性能**：若部署于 MI355X/gfx950 平台，请持续跟踪 Qwen3.8 与 DeepSeek-V4.1 优化进展——未来数周内预期性能将有明显提升。

> 💡 **实用技巧**：使用 `--max-tokenize-tokens`（v0.34.0 新增）可限制处理大输入的代理流水线的分词内存。默认值：`max(max_model_len * 2, 131072)`。

---  
*Digest 来自 GitHub 数据：[vllm-project/vllm](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 消息简报 – 2026-11-17**

---

### **1. 今日重点**  
SGLang 生态系统正持续推动向 SGLang 1.0 前进，Rust 服务端迁移取得显著进展，包括控制 API 路由的最终部分已成功移植。针对多 GPU 与 NPU 平台的关键稳定性工作正在推进，尤其聚焦于 CUDA 核心转储问题（#26340）以及不稳定的 CI 基础设施（#42752）；性能优化方面则集中于 L2/L3 压力下的 HiCache 表现，以及 MoE 调参鲁棒性提升。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告任何发布或破坏性变更。*  
然而，**SGLang 1.0 发布追踪器（Issue #50045）** 正在活跃中：该版本将聚焦稳定性，强调配置验证、对静默变更报错，并为 1.x 系列定义兼容性策略。从 `0.5.x` 升级可能需要代码修改——请参考该问题中的 [升级说明](#upgrade-notes)。

---

### **3. 新模型与硬件支持**  
- ✅ **Ascend A3/A5（NPU）**：PR #43305 为 Ascend 平台添加了对 `GLM-5.3-Flash` 的完整支持，实现 DSA/KDA/NEXTN 草稿注意力与 MLA 预处理功能，无需 RoPE。  
- ✅ **AMD RDNA3/RDNA4（gfx1100/gfx1201）**：Issue #46900 跟踪 SGLang 在 AMD GPU 上的 CI 支持及上游合并计划；相关 PR 正逐步实现功能对齐。  
- ✅ **Intel XPU**：PR #50249 报告了 GDN 分块预填充速度出现严重退化（慢 2.6 倍），且当 `K != V` 时 `recompute_w_u` 输出错误，表明支持尚不完整。  
- ✅ **多模态**：PR #50933 优化了 NVIDIA 平台的扩散测试套件命名与阶段逻辑，提升了跨 CI 流水线的可复现性。

---

### **4. 性能与优化**  
- 🔥 **HiCache + Mooncake**：Issue #47481 记录了在 L2/L3 容量压力下可复现的缓存命中率下降——对大规模长上下文推理至关重要。  
- 🚀 **MoE 调参**：PR #50761 发现融合式 MoE 调参配置在中等批大小时可能出现性能退化，需采用更智能的调参策略。  
- ⚙️ **内核融合**：  
  - PR #41860 将 FP8 行填充零填充操作融合进组量化，减少了小批量推理中的内核启动次数。  
  - PR #44446 通过在单次全层启动中预加载 PD 解码设备缓冲区，优化了 `hisparse`，提升了大序列任务的延迟表现。  
- 💡 **流式处理与卸载**：PR #49413 消除了多项目评分任务中标签概率读回的主机同步，显著提升了点对点是/否类任务的吞吐量。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 摘要 | 修复状态 |
|--------|------|------|----------|
| 🔴 高 | [#26340](https://github.com/sgl-project/sglang/issues/26340) | `pr-test.yml` 自动收集到的 CUDA 核心转储；各构建间广泛崩溃 | 进行中 — 尚无修复 |
| 🔴 高 | [#42752](https://github.com/sgl-project/sglang/issues/42752) | `PR Test Base/Extra` 中测试不稳定且重复失败 — 阻碍 PR 验证 | 持续跟踪；尚未合并修复 |
| 🟡 中 | [#42012](https://github.com/sgl-project/sglang/issues/42012) | `fa4` 注意力后端在 SM120（RTX PRO 6000）上混合扩展重塑时崩溃 | 仅 `triton` 后端可用；已有临时解决方案确认 |
| 🟡 中 | [#50521](https://github.com/sgl-project/sglang/issues/50521) | FP16 Stream-K GEMM 对精确零结果产生 NaN | 已在 main 上复现；已提供上游依赖链接 |
| 🟢 低 | [#44501](https://github.com/sgl-project/sglang/issues/44501) | `WeightChecker.reset_tensors` 将随机值填入 `MRotaryEmbedding.axis_map` | 问题在 #34446 之后被确认；尚无修复 |

---

### **6. 对应用开发者的启示**  
- **预期 CI/CD 流水线存在不稳定性**：频繁的不稳测试与 CUDA 崩溃（如 #26340）意味着应优先依赖本地测试，而非仅依赖 CI 状态。  
- **在 `fa4` 修复前（#42012），请使用 `triton` 后端运行 GLM-5.3-Flash on SM120**。  
- **监控负载下的缓存行为**：若使用 HiCache + Mooncake，需预料高并发时可能出现瞬时命中率下降（#47481）；建议调整 L3 淘汰策略。  
- **为 SGLang 1.0 升级路径做好准备**：静默配置变更将变为错误——请立即审查部署脚本。  
- **Rust 服务端即将完成**：最后一批控制 API 路由正在迁移（PRs #49742–#49748）；生产环境将获得更好的可观测性与更低的 Python 开销。

> 🔗 *保持更新请关注：* [SGLang GitHub Issues](https://github.com/sgl-project/sglang/issues), [发布追踪器 #50045](https://github.com/sgl-project/sglang/issues/50045), 和 [CI 失败追踪器 #17050](https://github.com/sgl-project/sglang/issues/17050)。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp 消息简报 – 2026-11-17**

---

### **1. 今日亮点**  
最新开发周期在**多后端优化**方面取得显著进展，尤其针对**Vulkan、HIP/CUDA 和 WebGPU**，新增对 RDNA3_5、AMD 的 gfx1013 以及按头 flash attention 支持。关键改进包括对 **SYCL/Metal 上 MoE 模型的更好处理**、**推测解码稳定性增强**，以及修复了此前导致硬中断的 **VMM 内存池分配失败问题**。

---

### **2. 发布与破坏性变更**  
- **新构建版本**：过去 24 小时内发布了 `b12453` 至 `b12441`，未记录任何破坏性 API 变更。  
- **UI 重构**：Web UI 已迁移至 `/ui/apps/chat`，标志着向模块化架构（`ui/lib` + `ui/apps`）迈出第一步 —— 参见 [PR #32032](https://github.com/ggml-org/llama.cpp/pull/32032)。  
- **配置灵活性提升**：`--tensor-split` 与 `--fit-target` 现在支持最多 `llama_max_devices()` 个设备配置 ([#13293](https://github.com/ggml-org/llama.cpp/issues/13293))。

---

### **3. 新模型与硬件支持**  
- **硬件后端**：  
  - 通过 `ne11 Gate` 为 AMD GPU 添加 **RDNA3_5** 调优支持 ([#32308](https://github.com/ggml-org/llama.cpp/pull/32308))。  
  - 扩展 **HIP 支持** 至 `gfx1013`（Radeon RX 6700 XT）([#32236](https://github.com/ggml-org/llama.cpp/pull/32236))。  
  - **WebGPU** 现已支持 **按头 flash attention mask** ([#32394](https://github.com/ggml-org/llama.cpp/pull/32394))。  
  - 支持 **Termux 与原生 Android Vulkan** 驱动程序 ([#32261](https://github.com/ggml-org/llama.cpp/pull/32261))。  

- **模型支持**：  
  - 新增 **MiniCPM5 MoE** 推理支持，含门控 GQA 与专家路由 ([#32386](https://github.com/ggml-org/llama.cpp/pull/32386))。  
  - 新增 **RAON-1-mini-preview** GGUF 格式支持 ([#32176](https://github.com/ggml-org/llama.cpp/pull/32176))。  
  - 通过 MTMD 新增 **Kokoro TTS** 与 **tiny-voca** 语音模型支持 ([#32413](https://github.com/ggml-org/llama.cpp/pull/32413), [#32427](https://github.com/ggml-org/llama.cpp/pull/32427))。  

- **量化格式**：  
  - 实验性添加 **PTQ1_0（分组 128 的三值量化）** ([#29672](https://github.com/ggml-org/llama.cpp/pull/29672))。  
  - 针对 ARM NEON 引入 **STQ1_0（稀疏三值量化）** ([#22836](https://github.com/ggml-org/llama.cpp/pull/22836))。

---

### **4. 性能与优化**  
- **内核优化**：  
  - 在 Vulkan 上启用 `conv3d` 的 `split_k`，显著提升 RDNA3+ GPU 性能 ([#29929](https://github.com/ggml-org/llama.cpp/pull/29929))。  
  - 在 CDNA 架构（AMD Instinct）上启用 **GDN MMA 内核**，适用于 CUDA/HIP ([#31327](https://github.com/ggml-org/llama.cpp/pull/31327))。  
  - 在 RISC-V CPU 上对 Mamba-2 SSM scan 应用 **RVV 向量化** ([#32448](https://github.com/ggml-org/llama.cpp/pull/32448))。  

- **内存与流水线效率**：  
  - 通过 `ggml_backend_dev_caps.async_host_input` 在各后端支持 **异步主机输入拷贝** ([#30685](https://github.com/ggml-org/llama.cpp/pull/30685))。  
  - 在 macOS 上通过 **双缓冲机制** 提升量化阶段的 I/O 重叠效率 ([#21507](https://github.com/ggml-org/llama.cpp/pull/21507))。  

- **推测解码**：  
  - 修复 CUDA 路径中 `FFN_MOE_DOWN` 回退至 CPU 的问题 ([#30704](https://github.com/ggml-org/llama.cpp/issues/30704))，该问题被报告为重大性能回归；相关修复 PR 正在审核中。

---

### **5. 稳定性与回归问题**  
- **严重崩溃**：  
  - **Windows/RDNA3 平台上的 Vulkan FA 预填充崩溃**，由 fp32 共享内存溢出引起 ([#32353](https://github.com/ggml-org/llama.cpp/issues/32353))。已在 `b12443` 中修复。  
  - **CUDA VMM 内存池 OOM** 导致进程直接中断而非优雅失败 ([#31974](https://github.com/ggml-org/llama.cpp/issues/31974))。已在 [`#32440`](https://github.com/ggml-org/llama.cpp/pull/32440) 中打补丁。  

- **性能回归**：  
  - 自 `#29948` 起，**HIP/gfx906 上 MoE 提示词处理速度下降约 15–50%** ([#31599](https://github.com/ggml-org/llama.cpp/issues/31599))。  
  - **V100 (sm_70)** 上从 v0.8.0 到 v1.0.0 出现显著预填充性能下降 ([#32245](https://github.com/ggml-org/llama.cpp/issues/32245))。  

- **其他问题**：  
  - **Apple Silicon 平台上大上下文处理（262k token）时出现 Metal 停滞** ([#30726](https://github.com/ggml-org/llama.cpp/issues/30726))。  
  - **IMROPE/Qwen3.5 模型即使提示相同也禁用了缓存复用** ([#32316](https://github.com/ggml-org/llama.cpp/issues/32316))。

---

### **6. 对应用开发者的意义**  
- **部署于 AMD/Apple 平台**：期待在 RDNA3_5 与 Metal 支持下获得更优性能与稳定性，尤其对 MoE 与长上下文模型。  
- **TTS 与语音应用**：借助 Kokoro/Tiny-Voca 支持，开发者现在可通过 `mtmd` 流水线构建本地语音代理。  
- **生产环境鲁棒性**：建议使用 `b12443+` 避免 Vulkan 崩溃，`b12440+` 防止因内存不足引发的服务中断。  
- **未来兼容性**：开始向新的 `/ui/apps/chat` 结构迁移，并利用异步输入拷贝提升多线程服务器吞吐量。  
- **量化策略**：在边缘部署场景中评估 **PTQ1_0/STQ1_0**，以三值权重降低内存占用，同时保持精度不下降。

> 🔗 [最新发布版](https://github.com/ggml-org/llama.cpp/releases) | [GitHub 问题追踪器](https://github.com/ggml-org/llama.cpp/issues)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# **Ollama Digest – 2026-11-17**

---

### **1. 今日亮点**  
Ollama 项目持续扩展其硬件与后端支持，Intel NPU（OpenVINO）、华为 CANN 正在积极开发中，并针对 Metal 与 CUDA 的 MLX 运行时进行了优化。针对 AMD 集成显卡上 Vulkan 后端崩溃问题以及影响模型加载和 GPU 分割的显存（VRAM）计数错误，已合并关键稳定性修复。一项关于 Unix 域套接字（IPC）的新功能请求凸显了高性能 AI 工作流对低延迟、安全本地通信日益增长的需求。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未检测到新版本发布或破坏性变更。*  
然而，`ollama run` 多行输入处理（PR #19731）和 `OLLAMA_LOG_METRICS` 日志记录（PR #19723）的持续开发可能在未来版本中影响用户体验与可观测性。目前无需迁移说明。

---

### **3. 新模型与硬件支持**  
- ✅ **Intel NPU 后端（OpenVINO）**：功能请求 #19535 呼吁原生支持 Core Ultra NPU（如 MSI Stealth 16），以充分发挥“AI PC”硬件潜力。  
- ✅ **华为 Ascend CANN 后端**：PR #19732 添加了 `ggml-cann` 的构建选项与设备发现功能，使 Ollama 可通过 llama.cpp 集成利用 Ascend NPU。  
- ✅ **PPLX Decider v1.3 支持**：PR #19734 引入对 PPLX Flash 与 27B 检查点的支持，采用分块决策协议，拓展了代理工具链能力。  
- ✅ **腾讯 Hy4 Flash 模型**：问题 #19722 请求将 Hy4 Flash 加入云模型目录，因其相较于 DeepSeek V4.1 Flash 具有更具竞争力的价格与性能表现。

> 🔗 [Intel NPU 请求](https://github.com/ollama/ollama/issues/19535) | [CANN 后端 PR](https://github.com/ollama/ollama/pull/19732) | [PPLX Decider 支持](https://github.com/ollama/ollama/pull/19734)

---

### **4. 性能与优化**  
- 🚀 **MLX 运行时优化**：多个 PR 提升推测解码与内存感知的历史重用：  
  - PR #19678 / #19730：基于内存压力自适应保留历史记录（适用于 Linux/Windows）。  
  - PR #19677 / #19730：跨请求槽复用已保存前缀，避免冗余预填充处理。  
  - PR #19663：批量执行推测验证，确保并发请求下的加速效果维持稳定。  
- ⚙️ **GPU 分割与显存计数修复**：PR #19632 修复了导致模型错误驱逐与 GPU 利用率低下的关键显存追踪缺陷（#19463, #18679, #18349）。  
- 📊 **按请求粒度指标日志**：PR #19723 支持启用 JSONL 格式日志记录令牌级推理指标（`OLLAMA_LOG_METRICS=1`），用于可观测性分析与基准测试。

> 🔗 [MLX 内存压力修复](https://github.com/ollama/ollama/pull/19678) | [显存修复](https://github.com/ollama/ollama/pull/19632) | [指标日志](https://github.com/ollama/ollama/pull/19723)

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 状态 | 影响 | 修复 PR |
|--------|------|--------|--------|--------|
| 高 | AMD Renoir 集成显卡（Ryzen 4700U）上 Vulkan 崩溃 | 已关闭 | 模型加载失败 | — |
| 高 | AMD RX 5500（Navi 14/gfx1010）上出现 SIGBUS 错误 | 开放 | GPU 无法识别 | #19589 |
| 中 | Qwen2.5-Coder / Qwen3 原生工具调用失败 | 已关闭 | 代理工作流中断 | — |
| 中 | GCC 15 编译时报 `uint32_t` 错误 | 开放 | 源码编译失败 | #19714 |
| 低 | `tensor blk.0.ssm_beta.weight not found` | 开放 | 模型加载失败 | #19733 |
| 低 | Windows 套接字绑定错误（端口占用） | 开放 | 服务启动失败 | #19712 |

> 🔗 [AMD Vulkan 崩溃](https://github.com/ollama/ollama/issues/19558) | [GCC 15 编译错误](https://github.com/ollama/ollama/issues/19714) | [Qwen 工具调用](https://github.com/ollama/ollama/issues/19524)

---

### **6. 对应用开发者的影响**  
- **期待更广泛的跨硬件兼容性**：随着 Intel NPU 与华为 CANN 支持即将上线，开发者现在可面向更多边缘与嵌入式设备——特别适合现代“AI PC”及专用推理平台上的私有 AI 部署。  
- **提升代理系统可靠性**：MLX 运行时内存管理与推测解码的改进将减少延迟波动，在多用户或高并发代理系统中显著提升吞吐量。  
- **增强可观测性**：启用 `OLLAMA_LOG_METRICS=1` 可捕获每请求的令牌级统计数据——这对成本建模、速率限制与代理效率调优至关重要。  
- **规避平台特定陷阱**：部署于 AMD 集成显卡（Vulkan 后端不稳定）或使用 GCC 15 时需谨慎；请关注已知构建问题，直至修复合入。  
- **为 IPC 设计架构**：对 Unix 域套接字的开放请求（#19464）表明向安全、零延迟进程间通信演进的趋势——若在 Linux/macOS 上运行本地代理，建议考虑从 TCP/IP 迁移。

> 💡 *实用提示*：在 PR #19731 发布前，使用 `ollama run` 时搭配 `--no-stream` 与 `--keep-alive` 可缓解多行输入缺陷。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

### **LiteLLM 摘要 — 2026-11-17**

#### **1. 今日重点**  
LiteLLM 团队针对 Anthropic、Gemini 及 Bedrock 等主要服务商的核心推理路由与稳定性问题，完成了关键修复。近期的合并请求（PR）解决了 `/v1/messages` 中推理块处理的历史遗留问题、工具调用签名保留，以及流式响应中止清理——这些对代理框架和实时系统至关重要。

#### **2. 版本发布与破坏性变更**  
- 今日发布 **v1.108.10**，通过 [cosign 验证](https://github.com/BerriAI/litellm/releases/tag/v1.108.10) 增强了安全性。  
- 未报告破坏性 API 变更；保持向后兼容性。  
- 建议用户在生产部署中使用提供的 `cosign` 命令验证 Docker 镜像签名。

#### **3. 新模型与硬件支持**  
本次更新未新增模型或硬件后端。但正在进行的工作包括：  
- **Databricks Claude Opus 5.5**：针对对话中系统消息的显式支持正在正式化成本映射中（[PR #52214](https://github.com/BerriAI/litellm/pull/52214)）。  
- **Cursor CLI 集成**：新增代理支持，使 Cursor CLI 可原生实现代理流式传输，扩展了开发者工作流集成（[PR #52205](https://github.com/BerriAI/litellm/pull/52205)）。

#### **4. 性能与优化**  
- **Bedrock 流式清理**：修复客户端中止后连接延迟关闭的问题（`#52210`），每放弃一次 Sonnet 4.5 调用可减少约 1,500 个无效令牌，提升资源效率。  
- **限流效率优化**：对未配置速率限制的键跳过 Redis 写入操作（[PR #31880](https://github.com/BerriAI/litellm/pull/31880)），减少不必要的 I/O，提升高负载下的吞吐量。  
- **Rust 回调支持**：并行请求限速器 v3 已迁移至 Rust，作为 `CustomLoggerV2` 实现（[PR #51537](https://github.com/BerriAI/litellm/pull/51537)），实现更低延迟、更高吞吐的并发控制。

#### **5. 稳定性与回归问题**  
| 问题 | 严重性 | 修复状态 | GitHub 链接 |  
|------|----------|------------|-------------|  
| 模型解析期间出现 `ModelNotMappedError` | 高 | 待处理 | [#51452](https://github.com/BerriAI/litellm/issues/51452) |  
| Gemini 间歇性出现 503/连接错误 | 高 | 待处理 | [#50434](https://github.com/BerriAI/litellm/issues/50434) |  
| Groq 401 错误被误标为 `BadRequestError` | 中 | 已关闭 | [#51994](https://github.com/BerriAI/litellm/issues/51994) |  
| 超出支出上限后免费模型被阻断 | 高 | 待处理 | [#52071](https://github.com/BerriAI/litellm/issues/52071) |  
| 在 `response.function_call_arguments.done` 上丢失工具调用参数 | 高 | 已关闭 | [#27144](https://github.com/BerriAI/litellm/issues/27144) |  

> ⚠️ 重要：多个未解决的缺陷影响模型可用性、计费追踪与响应完整性，尤其涉及推理模型及各服务商特定边缘情况。

#### **6. 对应用开发者的启示**  
- **代理开发者**：建议升级至 v1.108.10，以获得更好的推理块完整性与更低的流式延迟。使用 `gemini-*` 和 `gpt-5.*` 模型时需谨慎，因存在未解决的流式与缓存问题。  
- **代理运维者**：使用 `cosign verify` 确保构建可信；启用基于 Rust 的新认证存储（[PR #52173](https://github.com/BerriAI/litellm/pull/52173)）以提升可扩展性与性能。  
- **成本控制**：留意全局 Vertex AI 部署定价被错误归类为 `us-central1` 导致的账单差异（[Issue #52043](https://github.com/BerriAI/litellm/issues/52043)）；除非显式传参，否则避免依赖 `COHERE_API_BASE` 进行嵌入计算。  
- **未来准备**：关注即将推出的 `litellm.agent_eval()` 功能（[Issue #52143](https://github.com/BerriAI/litellm/issues/52143)），用于在流水线中自动化模型基准测试。

> 🔗 **关键资源**：  
> - [GitHub 发布页 v1.108.10](https://github.com/BerriAI/litellm/releases/tag/v1.108.10)  
> - [Cosign 验证指南](https://github.com/BerriAI/litellm/blob/main/docs/security.md)  
> - [Rust 后端路线图（内部）](https://app.devin.ai/sessions/d853803359854d30b79ebddf396653dc)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

### **Unsloth Digest — 2026-11-17**

#### **1. 今日亮点**  
v0.1.918-beta 版本引入了 **计算机使用（测试版）** 功能，使本地 LLM 可通过 MCP 集成与 Unity、Unreal Engine、Blender 和 Roblox 等应用交互——标志着向代理驱动的桌面自动化迈出关键一步。同时，性能改进和缺陷修复解决了跨 macOS、Windows 及 AMD/NVIDIA 平台的严重 UI 卡顿、模型加载问题以及 GPU 监控回归问题。

#### **2. 发布与重大变更**  
- **v0.1.918-beta**：今日发布，增强计算机使用能力，支持 MiniMax-H3-Image 的 GGUF/FP8/INT8 量化及 LoRA 训练，并重新设计了模型选择器。  
  🔗 [GitHub Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.918-beta)  
- **重大变更**：`UNSLOTH_PARALLEL=auto` 现在默认在模型可容纳于所有 GPU 时使用 DDP；否则使用原生 FSDP2——减少手动配置开销。  
  🔗 [PR #18061](https://github.com/unslothai/unsloth/pull/18061)

#### **3. 新模型与硬件支持**  
- **模型**：  
  - MiniMax-H3-Image 现已支持 GGUF、FP8、INT8 量化及 LoRA 微调。  
  - 由 Modelfiles 创建的 Ollama 模型现在可在聊天会话中保留 `SYSTEM` 提示文本。  
    🔗 [PR #18045](https://github.com/unslothai/unsloth/pull/18045)  
- **硬件后端**：  
  - 在深度研究工作流中全面支持 **AMD NPU（FastFlowLM 通过 Lemonade）**，若 `response_format: json_object` 失败则自动回退至仅提示的 JSON 模式。  
    🔗 [PR #18042](https://github.com/unslothai/unsloth/pull/18042)  
  - 改进 **ROCm（Windows）** GPU 监控：修复 `gpu_utilization_pct = 0.0` 与 `temperature_c = null` 显示异常问题。  
    🔗 [Issue #18005](https://github.com/unslothai/unsloth/issues/18005)  
- **架构**：通过 Studio 添加对 **Strata 推理引擎**（MoE 流式传输，AMD 原生）的可选集成。  
  🔗 [Feature Request #16626](https://github.com/unslothai/unsloth/issues/16626)

#### **4. 性能与优化**  
- **张量并行**：通过将大型冻结输入嵌入（如 Qwen3.8-27B 4-bit）从 CPU 服务而非在各计算节点间复制，优化内存使用。在 2x T4 配置下，每 GPU 内存负载降低约 40%。  
  🔗 [PR #18068](https://github.com/unslothai/unsloth/pull/18068)  
- **模型加载**：修复错误的 GGUF 量化选择问题（例如选择 `Q6_K` 时加载缓存的 `UD-Q6_K_XL`）——现尊重用户选择，避免冗余下载。  
  🔗 [PR #18006](https://github.com/unslothai/unsloth/pull/18006)  
- **UI 响应性**：Composer 和模型选择器现在可随窗口大小与缩放级别动态调整。  
  🔗 [PR #18074](https://github.com/unslothai/unsloth/pull/18074)

#### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 修复 PR |  
|---------|------|--------|--------|  
| 严重 | Unsloth Desktop 在 `lama.cpp` 更新后崩溃 | 开放 | [PR #17981](https://github.com/unslothai/unsloth/pull/17981) |  
| 高 | 更新后出现 UI 卡顿 + 模型加载失败（如 Gemma-4-26B-A4B 未恢复） | 开放 | [Issue #18002](https://github.com/unslothai/unsloth/issues/18002) |  
| 中等 | “无法同步固定聊天” + Linux 上界面卡顿 | 开放 | [Issue #18063](https://github.com/unslothai/unsloth/issues/18063) |  
| 低 | 浏览器菜单渲染在网站内容之后 | 开放 | [Issue #18013](https://github.com/unslothai/unsloth/issues/18013) |  
| 低 | 清洁关闭时记录 `backend process stdout closed unexpectedly` 作为崩溃 | 已修复 | [PR #18073](https://github.com/unslothai/unsloth/pull/18073) |

#### **6. 对应用开发者的影响**  
- **代理构建者**：新推出的 **计算机使用（测试版）** 与 **MCP 集成** 实现了与应用的直接交互——非常适合用于游戏开发（Unity/Unreal）、3D 建模（Blender）或仿真环境中的自主代理构建。  
- **微调与部署**：使用 `UNSLOTH_PARALLEL=auto` 让系统自动在 DDP/FSDP2 之间选择——无需手动为多 GPU 配置调优。  
- **边缘情况**：在深度研究中使用 AMD NPU 模型时需谨慎——确保通过仅提示的 JSON 模式处理回退逻辑。  
- **UI/UX**：利用动态缩放（PR #18074）与模型选择器搜索持久化（PR #17477）打造更流畅的用户体验。  
- **API 客户端**：更新 `enabled_tools` 中的工具名称：使用 `terminal` 而非 `bash`。  
  🔗 [Issue #18056](https://github.com/unslothai/unsloth/issues/18056)  

> ✅ **可操作建议**：若您正在部署具有复杂工作流的本地模型（如网络搜索 + 文件 I/O + UI 生成），请尽早测试 v0.1.918-beta 并启用 `computer_use` 与 `mcp` 功能。注意监控 ROCm 上的 GPU 监控不准确问题，并确保后端退出处理日志干净无误。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*