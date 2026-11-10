# AI 基础设施日报 2026-11-10

> 生成时间: 2026-11-10 04:17 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

### **跨项目AI基础设施生态报告 – 2026-11-10**

---

#### **1. 生态概览**  
截至2026年末，AI推理与服务领域呈现出明显的两极分化：一端是**高性能、硬件优化的引擎**（vLLM、SGLang），另一端是**开发者友好的代理式运行时平台**（Ollama、Unsloth）。尽管vLLM在内核级效率和SM120/Blackwell就绪性方面领先，但Ollama与Unsloth正通过原生模型如Ripple Preview及增强的本地工作流，加速推动设备端代理能力的普及。LiteLLM仍是多供应商编排的事实标准网关，但稳定性问题依然存在。整个生态正在快速成熟——由下一代硬件（Blackwell、gfx1151）、新兴量化格式（MXFP4/MXFP8）以及对结构化输出与实时音频日益增长的需求所驱动。

---

#### **2. 活跃度对比**

| 项目       | 开放问题 | 开放PR | 近24小时发布 | 破坏性变更 |
|---------------|-------------|----------|----------------|------------------|
| **vLLM**      | 147         | 32       | 无           | 无             |
| **SGLang**    | 153         | 41       | 无           | 无             |
| **llama.cpp** | 194         | 57       | `b12238`+      | 无             |
| **Ollama**    | 178         | 49       | v0.40.16       | 无             |
| **LiteLLM**   | 132         | 29       | v1.108.4 (LTS) | 无             |
| **Unsloth**   | 165         | 35       | 无           | 无             |

> ✅ *注：所有项目均保持高活跃度，表明各方正聚焦于稳定性和功能交付，以应对Blackwell及AMD硬件的发布节奏。*

---

#### **3. 模型支持竞赛**

| 新模型 / 新硬件 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1-Flash (SM120)** | ✅ (开发中) | ⚠️ FA4崩溃 (问题 #42012) | ❌ | ❌ | ❌ | ❌ |
| **Qwen3.8-2.4T-A95B (ROCm/gfx950)** | ✅ (追踪中) | ✅ (问题开放) | ❌ | ✅ (已修复显存) | ❌ | ❌ |
| **Gemma 4 E2B/E4B (mtmd/audio)** | ❌ | ❌ | ✅ (`mtmd_audio_stream`) | ❌ | ❌ | ❌ |
| **Ripple Preview (65B 代理型)** | ❌ | ❌ | ❌ | ✅ (新增模型) | ❌ | ❌ |
| **MXFP4/MXFP8 量化** | ✅ (已集成) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **AMD gfx1151 (Strix Halo)** | ⚠️ (MLA问题) | ✅ (解码NaN) | ✅ (logits错误) | ✅ (显存修复) | ❌ | ✅ (SDPA修复) |

> 🏆 **领先者**：**vLLM** 在前沿硬件支持（SM120、ROCm）方面领先；**Ollama** 成为新代理模型的首选。**llama.cpp** 在边缘与嵌入式设备支持（Hexagon、SpacemiT、WebGPU）方面表现卓越。

---

#### **4. 性能前沿**

| 关注领域               | vLLM                          | SGLang                        | llama.cpp                     | Ollama                         | LiteLLM                      | Unsloth                     |
|--------------------------|-------------------------------|-------------------------------|-------------------------------|--------------------------------|------------------------------|-----------------------------|
| **KV缓存优化** | ✅ 深度优化（32MiB工作区缩减） | ⚠️ 中等（无重大更新） | ⚠️ 关键缺陷（截断问题） | ✅ 内存节省（Qwen3.8）   | ❌ 无更新                | ✅ 提示缓存修复     |
| **批处理与吞吐** | ✅ MoE动态调优、CUDA图 | ⚠️ 解码延迟 +33–45%（v0.5.23） | ✅ 行忠实FlashAttention | ✅ MLX并发生成（PR #19197） | ✅ 流式复用（PR #50786） | ✅ VRAM感知重试       |
| **量化效率** | ✅ MXFP4/8、Marlin→Humming迁移 | ❌ 支持有限            | ✅ SYCL Q4_0 U4 GEMM（约30%提升） | ❌ 无量化专属优化 | ❌ 成本漂移问题         | ✅ INT8回退逻辑      |
| **分布式服务**   | ✅ 多GPU、Speculative解码    | ✅ PD解耦路线图   | ❌ 仅限本地                 | ❌ 不适用              | ✅ 多供应商路由    | ❌ 无分布式扩展   |
| **内核级优化** | ✅ SM120 MoE、CUTLASS、AITER | ⚠️ Triton/FA4不稳定     | ✅ Metal/Vulkan/CUDA精细调优 | ❌ 极少优化                    | ❌ 无底层控制      | ✅ SDPA防护处理      |

> 🔥 **核心洞察**：vLLM处于**内核与硬件特异性优化**的最前沿；而**Ollama**与**llama.cpp**则在**本地运行时性能与边缘部署**方面占据主导地位。

---

#### **5. 层级定位**

| 项目       | 主要层级                  | 核心差异化                                      |
|---------------|--------------------------------|----------------------------------------------------------|
| **vLLM**      | **推理引擎**           | 超高吞吐量，针对Hopper/Blackwell优化的内核；适用于云规模部署 |
| **SGLang**    | **推理引擎 + 代理框架** | 预填充-解码解耦，高级推测解码，聚焦代理流水线 |
| **llama.cpp** | **本地运行时 / 边缘SDK**   | 跨平台、依赖极少，适合移动/嵌入式系统及实时音频 |
| **Ollama**    | **代理运行时 / 开发者平台** | 设备端代理模型（如Ripple Preview），简洁CLI，内置modelfiles，UI优先设计 |
| **LiteLLM**   | **LLM网关 / 编排层** | 多供应商路由、成本追踪、兼容OpenAI的代理——生产环境网关的关键组件 |
| **Unsloth**   | **性能优化运行时** | 激进的GPU内存管理，扩散加速，轻量级本地推理 |

> 🧩 **战略启示**：vLLM与SGLang作为**云级推理后端**；Ollama与Unsloth是**代理优先平台**；LiteLLM充当**集成层**；llama.cpp则是**边缘赋能者**。

---

#### **6. 趋势信号**

1. **硬件优先优化已成为必然要求**  
   - SM120（Blackwell）与AMD gfx1151已不再是“未来目标”——而是当前开发前线。vLLM与SGLang正竞速稳定CUDA图捕获与Triton内核调度。  
   → *关注*：**MXFP4/MXFP8** 与 **MoE内核调优** 在新架构上的应用。

2. **代理工作负载正推动栈创新**  
   - Ollama的Ripple Preview与Unsloth的图像生成改进表明，**设备端代理**已趋于可行。  
   → *关注*：**结构化输出**、**工具调用**、**实时音频** 在本地运行时中的集成。

3. **稳定性优先于功能成为新焦点**  
   - 多个高危漏洞（无声失败、UAF、内存损坏）出现在vLLM、SGLang与llama.cpp中，表明尽管功能快速迭代，**生产就绪性仍脆弱**。  
   → *关注*：使用LTS版本（LiteLLM v1.108.4）与CI镜像（vLLM deepseekv41-flash-0909）以保障可靠性。

4. **量化统一化即将到来**  
   - vLLM从旧版Marlin转向Humming后端，标志着向**统一、现代的量化路径**迈进，将提升可移植性与性能。  
   → *关注*：这一转变对下游工具与微调框架的影响。

5. **网关复杂性持续上升**  
   - LiteLLM的开放速率限制与成本追踪问题凸显了**多供应商编排的隐性复杂性**。随着越来越多团队采用混合模型，这些网关正成为关键故障点。  
   → *关注*：针对LiteLLM类环境的可观测性与调试工具。

---

### **给应用开发者的最终建议**
- **对于高吞吐、云原生推理**：选择 **vLLM**（但需谨慎，直至 #56892 修复前避免使用SM120）。
- **对于需要实时输入输出的代理应用**：使用 **Ollama**（Ripple Preview）或 **Unsloth**。
- **对于边缘/移动端/本地部署**：**llama.cpp** 无可替代。
- **对于多供应商路由与成本控制**：**LiteLLM**（使用 `lts` 标签）——但需监控速率限制漏洞。
- **始终测试最新CI构建，避免使用不稳定版本**（如 SGLang v0.5.23、pre-b12238 llama.cpp）。

> ✅ *实用提示：生产环境推荐组合：vLLM（引擎） + LiteLLM（网关） + Ollama（代理层），构建稳健、模块化的技术栈。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

### **vLLM Digest — 2026-11-10**

#### **1. 今日亮点**  
vLLM 项目持续聚焦下一代硬件上的性能与正确性，重点推进对 DeepSeek-V4.1-Flash 的 **SM120（Blackwell）** 支持，以及针对 Qwen3.8 模型的 ROCm/AMD GPU 优化。关键工作包括修复 RTX PRO 6000 Blackwell 上的 CUDA graph capture 失败问题（Issue #56892），SM120 上 MoE 内核的持续优化（PR #63533），以及跨架构统一量化后端的积极进展（Issue #65560）。

#### **2. 版本发布与破坏性变更**  
*无* — 过去 24 小时内未报告新版本发布或破坏性 API/配置变更。

#### **3. 新模型与硬件支持**  
- **SM120（RTX PRO 6000 Blackwell）**：正在积极开发以实现对 `DeepSeek-V4.1-Flash` 和 `NVFP4 MoE` 的完整支持，同时持续修复 `cutlass` 后端的内核问题（Issue #51525, PR #63533）。  
- **ROCm / AMD（gfx950 / MI355X）**：针对 `Qwen3.8-2.4T-A95B` 和 `Qwen3.8-Flash-Next` 的性能优化跟踪中（Issues #57149, #59575），包括 AITER 内核更新（PR #66596）和 KV connector 改进（PRs #66514, #66712）。  
- **新量化格式**：`MXFP4` 与 `MXFP8` 现已集成至 CUDA 与 ROCm 后端的 MoE 及密集层中（Issue #37753, Issue #65560）。  

> 🔗 [Issue #56892](https://github.com/vllm-project/vllm/issues/56892) | [Issue #57149](https://github.com/vllm-project/vllm/issues/57149)

#### **4. 性能与优化**  
- **SM120 解码吞吐量**：在 8x Blackwell GPU 上使用 `--enforce-eager` 时观察到极低的解码吞吐量；由于缺少 SM120 的 graph capture 支持，CUDA graphs 完全不可用（Issue #56892）。  
- **MoE 内核效率**：针对 SM120 连续分组 MoE 的动态 `BLOCK_M` 调优提升了占用率并减少填充开销（PR #63533）。  
- **KV Cache 内存节省**：将 FlashInfer 工作区大小从 394 MiB 降低至 32 MiB，使 RTX 4060 上的 KV-cache 容量提升 **21.27%**（Issue #63399）。  
- **推测解码开销**：EAGLE/MTP 前缀缓存最后块丢弃导致前缀复用负载下的批量吞吐量损失达 **30–40%**（Issue #53670）。  
- **量化效率**：提议用 Humming 后端取代所有 NVIDIA 架构的旧版 Marlin（Issue #65560），实现 INT4/INT8 GPTQ/AWQ、FP8、MXFP4 等格式的统一现代化内核路径。

> 🔗 [Issue #53670](https://github.com/vllm-project/vllm/issues/53670) | [Issue #63399](https://github.com/vllm-project/vllm/issues/63399) | [Issue #65560](https://github.com/vllm-project/vllm/issues/65560)

#### **5. 稳定性与回归问题**  
- **严重缺陷（高危）**：在 SM120 上运行 `VLLM_CUTLASS NVFP4 MoE` 时会无声返回空结果（`content: null`），不报错且耗尽全部 `max_tokens` 预算（Issue #51525）。*尚未提交修复 PR。*  
- **ROCm 内核误调度**：`ROCM_AITER_MLA` 在特定条件下选择非持久化内核，导致输出无关（fp8 Q+KV，gqa_ratio=16，decode_qlen=3–4）（Issue #66141）。*修复 PR 待提交。*  
- **推测解码偏差**：MTP 推测解码在高 K/n/L 值下与仅目标解码产生分歧，造成输出不一致（Issue #63593）。  
- **基准测试缺陷**：预热请求被错误缓存，导致测量吞吐量虚高（Issue #66698）；已在 PR #66701 (#66707) 中修复。  

> 🔗 [Issue #51525](https://github.com/vllm-project/vllm/issues/51525) | [Issue #66141](https://github.com/vllm-project/vllm/issues/66141) | [PR #66701](https://github.com/vllm-project/vllm/pull/66701)

#### **6. 对应用开发者的意义**  
- **避免在 Blackwell GPU 上使用 `--enforce-eager`**，直到 SM120 CUDA graph 支持最终确认（Issue #56892）。  
- **在 SM120 上对 MoE 模型输出进行严格验证**，尤其是使用 `VLLM_CUTLASS` + `NVFP4` 时——已知存在无声失败（Issue #51525）。  
- **在基准测试中使用 `cache_salt`** 以避免预热缓存污染（已通过 #66701/#66707 修复）。  
- **监控混合注意力模型（如 Qwen3.8-GDN）上的推测解码行为**——在某些配置下预期吞吐量损失高达 40%（Issue #53670）。  
- **为未来的量化迁移做好准备**：Marlin 将逐步被 Humming 取代（Issue #65560），确保在 Hopper/Blackwell 上具备更优性能与可移植性。  

> 📌 技巧提示：对于 Blackwell 或 AMD MI355X 的生产部署，建议使用最新 CI 镜像（`vllm/vllm-openai:deepseekv41-flash-0909` 与 ROCm 构建版本），并通过 `--response-role` 与 `derender` 接口验证输出一致性（PR #63357）。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest – 2026-11-10

---

### **1. 今日亮点**  
SGLang 生态系统持续成熟，**预填充-解码分离（PD）** 和 **多后端支持** 取得显著进展，尤其在 SM120（Blackwell）和 AMD gfx1151 等新兴硬件上。关键稳定性问题——特别是 **SM120 上的 CUDA 图捕获失败**、**UnifiedRadixCache 中的使用后释放（use-after-free）** 以及 **AMD Triton 注意力模块缺陷**——已成为首要关注点，凸显了在新架构上进行充分验证的必要性。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无报告。*  
未发布新版本或破坏性 API/配置变更。最新稳定版本仍为 `v0.5.23`，该版本引入了明显的性能退化（参见 #49336）。

---

### **3. 新模型与硬件支持**  
- ✅ **SM120（RTX 50 系列 Blackwell）**：全模型支持处于积极开发中；在 CUDA 图捕获期间，FA4 后端仍存在崩溃问题（#42012）。  
- ✅ **AMD gfx1151（Strix Halo）**：新报告解码注意力问题（`MLA-shaped Triton`）及确定性推理启动失败（#48967, #48968）。  
- ✅ **寒武纪 MLU 后端**：已启动集成路线图（#45615），未来将逐步接入。  
- ✅ **Mooncake L3 + HiCache**：实验性支持持续推进，通过 #47859 实现弹性执行策略（EP）扩容。  
- ✅ **Kimi-K3.1-Pro MI35x**：文档已更新以对齐 InferenceX 基准测试结果（#49453）。

> 🔗 [Issue #45615](https://github.com/sgl-project/sglang/issues/45615) | [PR #47859](https://github.com/sgl-project/sglang/pull/47859)

---

### **4. 性能与优化**  
- 📈 **DeepSeek-V4 预填充吞吐量**：在 4× RTX PRO 6000（SM120）上，SGLang 达到约 2–7K tok/s，而 vLLM/Marlin 达到约 12.5K —— 明显差距，亟需调优指导（#33422）。  
- ⚠️ **解码性能退化**：从 v0.5.22 升级至 v0.5.23 导致在 Hopper 平台（8× H20-3e）上，**并发度为 12 时每步解码时间增加 33–45%**，影响长上下文任务（#49336）。  
- 💡 **Qwen3 文本编码器优化**：仅应用一个 FlashInfer 内核于 RoPE 计算，使 GB200 上单请求主机延迟降低约 70–95ms（#49448）。  
- 🔥 **扩散模型性能提升**：现已支持可拆分的 CUDA 图用于 SANA-Video 2.0（#41501），且多 GPU 一致性相关的 CFG 算术问题已修复（#49162）。

> 🔗 [Issue #33422](https://github.com/sgl-project/sglang/issues/33422) | [PR #49448](https://github.com/sgl-project/sglang/pull/49448)

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 摘要 | 修复状态 |
|--------|------|--------|-----------|
| 🔴 高 | [#49336](https://github.com/sgl-project/sglang/issues/49336) | **v0.5.22 之后在 Hopper（8x H20-3e）上出现 33–45% 解码性能退化** | ❌ 待处理 |
| 🔴 高 | [#49173](https://github.com/sgl-project/sglang/issues/49173) | DSV4.1 DeepGEMM 索引器移除对 SM120/SM121 支持 → 在 GB10 上导致 8 倍预填充性能下降 | ❌ 待处理 |
| 🔴 高 | [#49361](https://github.com/sgl-project/sglang/issues/49361) | **UnifiedRadixCache 中的使用后释放（UAF）暴露租户 KV 数据** | ❌ 待处理 |
| 🟡 中等 | [#42012](https://github.com/sgl-project/sglang/issues/42012) | SM120 混合扩展重塑时 FA4 后端崩溃 | ❌ 仅临时方案：改用 Triton |
| 🟡 中等 | [#48967](https://github.com/sgl-project/sglang/issues/48967) | AMD gfx1151 MLA Triton 解码在不规则批处理下返回 NaN | ❌ 尚无修复 |

> 🔗 所列问题均开放中，并在积极讨论。

---

### **6. 对应用开发者的影响**  
- 若涉及长上下文解码或在 Hopper 平台上高并发场景，请避免在生产环境中使用 `v0.5.23`；建议锁定至 `v0.5.22`。  
- 若使用 **SM120 硬件**，请暂勿启用 `--attention-backend fa4`，直到 #42012 解决；推荐回退至 **Triton** 以确保稳定性。  
- 对于需要缓存隔离的 **代理类应用**，请谨慎使用 `UnifiedRadixCache`，因其存在 UAF 风险（#49361）；在共享环境中需警惕数据泄露。  
- 利用 **可拆分的 CUDA 图**（通过 #41501 和 #49162）优化扩散管道，以提升跨 GPU 的可扩展性与一致性。  
- 预期 **AMD gfx1151** 和 **寒武纪 MLU** 目前将持续不稳定，直至专用 CI 与测试基础设施完善。

> 🛠️ 实用提示：在 AMD 上谨慎使用 `--enable-deterministic-inference`，可能因 LDS 限制而失败（#48968）；务必尽早于目标硬件上进行验证。

---  
*数据来源：[github.com/sgl-project/sglang](https://github.com/sgl-project/sglang)*  
*摘要生成时间：2026-11-10*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 消息简报 – 2026-11-10**

---

### **1. 今日亮点**  
最新更新聚焦于提升 OpenAI 兼容 API 的健壮性，尤其在结构化输出格式和音频流支持方面。关键改进包括：`response_format` 中更优的 JSON Schema 处理、通过 `mtmd` 实现 Gemma 4 模型的实时音频处理扩展，以及修复稀疏 MoE 路由中的静默内存损坏问题。

---

### **2. 发布与破坏性变更**  
- **`b12242`**：修复设置 `response_format` 并使用 tools 时的懒惰语法行为 ([#31956](https://github.com/ggml-org/llama.cpp/pull/31956))  
- **`b12240`**：在 Responses API 中新增将 `text.format.json_schema` 转换为补全结果的支持 ([#26145](https://github.com/ggml-org/llama.cpp/pull/26145))  
- **`b12238`**：新增 `/v1/audio/speech` 端点，完全兼容 OpenAI 标准，支持 WAV 输出及 PCM/S16 四舍五入对齐 ([#31763](https://github.com/ggml-org/llama.cpp/pull/31763))  
- **`b12237`**：启用 `mtmd` 对 Gemma 4 输入音频流的支持，步长为 480ms ([#31965](https://github.com/ggml-org/llama.cpp/pull/31965))  

> 💡 *无破坏性变更；所有新功能均保持向后兼容。*

---

### **3. 新模型与硬件支持**  
- **模型**：  
  - 为 **Gemma 4 E2B/E4B** 模型全面增加 `mtmd_audio_stream` 支持 ([#31561](https://github.com/ggml-org/llama.cpp/issues/31561))  
- **硬件与后端**：  
  - **Hexagon**：为 v75/v81/v85 Android 和 WoS 设备新增 SSM_SCAN 操作支持 ([#31921](https://github.com/ggml-org/llama.cpp/pull/31921))  
  - **SpacemiT (RISC-V)**：通过 RVV 内核启用 Q4_1 32x256 重打包及 GATED_DELTA_NET 分发 ([#31929](https://github.com/ggml-org/llama.cpp/pull/31929), [#31897](https://github.com/ggml-org/llama.cpp/pull/31897))  
  - **WebGPU**：为 TTS 语音合成器新增 `PAD_REFLECT_1D` 与 `COL2IM_1D` 操作 ([#31877](https://github.com/ggml-org/llama.cpp/pull/31877), [#31908](https://github.com/ggml-org/llama.cpp/pull/31908))  
- **量化**：  
  - 现可通过 `--ple` 别名支持外部 PLE 文件加载（替代 `--shard`）([#31185](https://github.com/ggml-org/llama.cpp/pull/31185))

---

### **4. 性能与优化**  
- **内核级优化**：  
  - Metal 后端现在可动态适配 AMD eGPU 的波前宽度（64 宽），不再假设为 32 宽 SIMD 组 ([#31994](https://github.com/ggml-org/llama.cpp/pull/31994))  
  - Vulkan：新增针对 N ≤ 32 的窄块配置，提升矩阵乘法性能 ([#31990](https://github.com/ggml-org/llama.cpp/pull/31990))  
  - CUDA：启用按需行忠实 FlashAttention 分发（`GGML_CUDA_FATTN_ROW_FAITHFUL`），在 Ada/Blackwell GPU 上提升解码保真度 ([#31992](https://github.com/ggml-org/llama.cpp/pull/31992))  
- **SYCL**：通过环境变量 `GGML_SYCL_Q4_0_U4_GEMM`，允许 oneDNN gemm 将 `Q4_0` 权重读取为 `u4` —— 在大矩阵上可降低高达约 30% 的 matmul 开销 ([#31993](https://github.com/ggml-org/llama.cpp/pull/31993))  
- **CPU**：Elbrus (E16C) 现已通过 x86 SIMD 路径运行，相比原生代码实现 **9 倍提示速度提升** ([#31989](https://github.com/ggml-org/llama.cpp/pull/31989))

---

### **5. 稳定性与回归问题**  
- **严重**：  
  - `/v1/chat/completions` 中的 KV 缓存截断错误，在高负载下导致输出不正确 ([#11970](https://github.com/ggml-org/llama.cpp/issues/11970)) — *高优先级，持续调查中*  
  - 稀疏 MoE 内存损坏，因身份变更后复用过期分配计划所致 ([#28448](https://github.com/ggml-org/llama.cpp/issues/28448)) — *静默损坏，影响动态拓扑*  
- **高影响**：  
  - **SYCL + MoE**：即使种子固定，相同请求间仍出现非确定性 `logprobs` ([#31206](https://github.com/ggml-org/llama.cpp/issues/31206))  
  - **AMD ROCm (gfx1151)**：当提示长度超过 `n_ubatch` 时触发错误 logits ([#28211](https://github.com/ggml-org/llama.cpp/issues/28211))  
- **正在修复中**：  
  - 正在处理 `ggml_backend_sched_alloc_splits` 重新分配崩溃问题 ([#28753](https://github.com/ggml-org/llama.cpp/issues/28753)) 与 `response_format` schema 嵌套问题 ([#28697](https://github.com/ggml-org/llama.cpp/issues/28697)) 的相关 PR。

---

### **6. 对应用开发者的意义**  
- **构建更可靠的智能体**：得益于改进的结构化输出处理（JSON Schema、工具调用），你的应用可安全依赖来自 LLM 的确定性、模式约束响应。  
- **启用实时音频工作流**：新的 `/v1/audio/speech` 和 `mtmd` 支持解锁低延迟语音助手与语音合成流水线——非常适合 WebUI 及电话集成场景。  
- **优化推理成本**：使用 `GGML_SYCL_Q4_0_U4_GEMM` 或 `GGML_CUDA_FATTN_ROW_FAITHFUL` 可在 GPU/CPU 后端减少延迟与内存压力。  
- **避免静默失败**：注意监控 MoE 相关崩溃与 KV 缓存截断问题——尤其是使用动态批处理或推测解码时。  
- **未来化技术栈**：提前采用 SpacemiT、Hexagon 与 WebGPU 支持，为边缘 AI、移动端与嵌入式部署做好准备。

👉 *生产环境建议锁定至 `b12238` 或更高版本，若未使用 Gemma 4 模型且需实时音频，请避开 `b12237`。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-10**

---

### **1. 今日亮点**  
最新版本 **v0.40.16** 推出 *Ripple Preview* — 由 Ricursive Intelligence 开发的 65B 参数密集型智能体编码模型，标志着本地设备上智能体能力的重大飞跃。已合并关键修复（PR #19632），解决了显存（VRAM）计算错误与 GPU 分割问题，彻底修复了长期存在的模型被错误驱逐或在多 GPU 上无谓分割的问题。这些改进显著提升了稳定性与资源可预测性，尤其适用于多 GPU 及高内存负载场景。

---

### **2. 版本发布与破坏性变更**  
- **v0.40.16** 包含：  
  - 🚀 正式发布 **Ripple Preview**（65B 密集型、智能体编码）：  
    ```sh
    ollama run ripple-preview
    ```  
    [库条目](https://ollama.com/library/ripple-preview) | [GitHub 发布页](https://github.com/ollama/ollama/releases/tag/v0.40.16)  
  - ✅ 内存优化：`Qwen3.8 Flash Next` 在 Apple Silicon 上显存使用量减少约 **27 GiB**，显著提升 M 系列芯片上的性能表现。  
  - 🔧 内部配置更新：`OLLAMA_NUM_PARALLEL=1` 的行为已明确；相关 PR 已确认其能正确遵守并发限制。

> ⚠️ 未报告任何破坏性 API 变更。现有工作流保持兼容。

---

### **3. 新模型与硬件支持**  
- **新模型**：  
  - **Ripple Preview**（65B，密集型，智能体编码）—— Ricursive Intelligence 首个原生 Ollama 模型，适用于复杂代码生成与推理任务。  
    [模型库](https://ollama.com/library/ripple-preview)  

- **硬件与后端改进**：  
  - **ROCm 支持**：持续修复 AMD 系统上的显存报告错误及 GPU 分割问题（参见 Issue #17251，PR #19632）。  
  - **Vulkan（AMD RADV）**：性能下降问题（#19201）仍处于开放状态，正在调查中；目前尚未确认有效临时方案。  
  - **Windows**：更新了更新器中进程枚举的处理逻辑（PR #19625），避免当活跃进程超过 512 个时发生崩溃。

---

### **4. 性能与优化**  
- **内存效率**：  
  - `Qwen3.8 Flash Next` 在 Apple Silicon 上显存占用减少约 **27 GiB**，使配备有限内存的 M 系列 Mac 能更高效利用资源。  
- **并发与延迟**：  
  - PR #19197 引入通过 `OLLAMA_NUM_PARALLEL` 支持 MLX 并发生成，允许多个请求共享投影/前馈层，同时保持注意力隔离，有效降低高负载下的首令牌延迟。  
  - PR #17144 在上游 llama.cpp 修复后（2026 年 3 月），重新启用 `qwen35` 与 `qwen35moe` 的并行请求处理。  
- **提示词处理**：  
  - 问题 #19282 指出在 16GB M4 设备上提示词处理性能不佳，社区正寻求关于 GGUF 量化与上下文窗口使用调优的建议。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 修复 PR | 备注 |
|--------|------|-------|--------|------|
| 🔴 高 | `ollama ps` 报告的 VRAM 使用量与实际 ROCm-SMI 不符 | 开放 | [PR #19632](https://github.com/ollama/ollama/pull/19632) | v0.40.16 中已修复；对监控与资源规划至关重要 |
| 🔴 高 | `OLLAMA_LOAD_TIMEOUT` 与 `OLLAMA_KEEP_ALIVE` 默认值过短（仅 5 分钟） | 开放 | N/A | 用户反映长时间对话中频繁断连；功能请求 (#19624, #19616) |
| 🟡 中 | `ollama pull` 在企业代理后失败（返回 403 Forbidden），尽管 `curl` 可正常工作 | 已关闭 | [Issue #19604](https://github.com/ollama/ollama/issues/19604) | 代理证书/配置未正确传递至 HTTP 客户端 |
| 🟡 中 | Windows 更新器在 >512 个进程运行时崩溃 | 已关闭 | [PR #19625](https://github.com/ollama/ollama/pull/19625) | 已修复：字节计数与 PID 计数不匹配问题 |
| 🟡 中 | `gemma4:26b` 在工具调用后若设置 `think: false` 返回空响应 | 开放 | N/A | 可能影响依赖工具调用但无需思考的智能体流水线 |
| 🟡 中 | Qwen3.5 4B 在长对话中仅返回 `thinking` 字段 | 开放 | N/A | 暗示存在状态或 token 积累错误 |

> ✅ **已在 v0.40.16 中修复**：显存统计、GPU 分割、更新器崩溃及代理 403 问题（通过配置调整解决）。

---

### **6. 对应用开发者的意义**  
- **智能体与工具链工作流**：Ripple Preview 实现低延迟的本地智能体逻辑，适用于本地 IDE 助手、自主编码智能体及 LLM 网关等场景。  
- **多模态应用**：针对 `/api/embeddings` 接口增加图像嵌入支持的功能请求（#4296）对构建包含视觉数据的 RAG 系统至关重要；建议持续关注进展。  
- **资源管理**：得益于改进的显存统计（PR #19632），开发者现在可依赖 `ollama ps` 获取准确的 GPU 显存信息，这对容器化或边缘部署尤为关键。  
- **配置调优**：建议将 `OLLAMA_LOAD_TIMEOUT` 与 `OLLAMA_KEEP_ALIVE` 设置为默认值以上（如 1800 秒），以避免长时间交互中的会话中断。  
- **架构规划**：AMD/ROCm 用户请确保使用 v0.40.16 及以上版本，避免模型被错误驱逐或 GPU 分配异常；在上游修复后确认支持前，避免对 `qwen35`/`qwen35moe` 使用并行处理。  

> 💡 **实用技巧**：使用 `--modelfile` 配合相对通配符时需谨慎——PR #19628 修复了当 Modelfile 目录包含 `[Q4]` 等特殊字符时路径解析错误的问题。

---

*数据来源：github.com/ollama/ollama | 最后更新时间：2026-11-10*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

### **LiteLLM 摘要 — 2026-11-10**

#### **1. 今日亮点**
最新 LTS 版本 `v1.108.4` 稳定了多提供商部署中的关键成本追踪与速率限制行为。主要修复包括 TPM 限额下的令牌计数漂移、JSON-RPC `id` 字段被错误剥离，以及使用自定义提供商时对 Anthropic 模型的支出计算错误。新增对 Vercel AI Gateway 决策支持及 GPT-Image-2 停用日期的记录，提升了兼容性与运维清晰度。

#### **2. 发布与破坏性变更**
- **v1.108.4 (LTS)**：今日发布为最新稳定版本。  
  🔗 [GitHub 发布页](https://github.com/BerriAI/litellm/releases/tag/v1.108.4)  
  📌 使用 `ghcr.io/berriai/litellm:lts` 可始终拉取最新的 LTS 补丁。  
  ⚠️ 未报告破坏性变更；本次更新以稳定性为核心，修复多个影响路由、成本追踪和请求处理的缺陷。

#### **3. 新模型与硬件支持**
- ✅ 通过 PR #50642 新增 **Vercel AI Gateway** 作为 Decisions 提供商。请求现在可正确路由，不再因 400 错误失败。
- ✅ 通过 PR #50830 将 **Glimpse-1.0 (Together AI)** 加入成本映射表。
- ✅ **GPT-Image-2 停用日期**（2026-11-10）已通过 PR #50829 记录于定价目录中。
- ✅ 通过 PR #50809，**AWS Bedrock Converse API** 现支持 `performanceConfig.latency="optimized"`。

#### **4. 性能与优化**
- ✅ **流式传输效率提升**：PR #50786 在流式传输过程中复用上游 choice 对象，减少 DeepSeek、Mistral、Groq 及 Anthropic 等提供商每块数据的 CPU 开销。预计在高吞吐量流式负载下，代理端 CPU 使用率可降低约 15–25%。
- ✅ **令牌计数精度增强**：PR #50734 确保自定义命名部署（如 Azure AI Foundry）使用其基础模型的分词器进行准确的成本估算。
- ✅ **仅提示词的令牌计数准确性**：PR #50783 强制裸提示请求使用提供商侧的令牌计数（而非本地估算），提升一致性——尤其对 Claude 与 Gemini 有显著改善。

#### **5. 稳定性与回归问题**
| 严重程度 | 问题 | 描述 | 修复 PR |
|--------|------|-------------|--------|
| 高 | #23741 | Anthropic 返回 400 错误，因传递了不支持的 `vector_store_ids` | ❌ 已开放 |
| 高 | #49675 | 上游返回 429 时，TPM 限流器超期存在 → 导致误限流 | ❌ 已开放 |
| 中 | #47675 | 当 `custom_llm_provider=anthropic` 但定价信息位于别处时，`response_cost` 为 null | ❌ 已开放 |
| 中 | #49479 | 因内部参数冲突，JSON-RPC 请求体中的 `id` 字段被错误剥离 | ❌ 已开放 |
| 中 | #47340 | 使用内存缓存时，`tpm_limit` 永不重置 —— 资源耗尽后键永久锁定 | ❌ 已开放 |
| 低 | #50434 | 通过 LiteLLM 使用 Gemini 时偶发 503 / APIConnectionError | ❌ 已开放 |

> 💡 *注意：多个高严重性问题仍处于开放状态，尤其集中在速率限制、成本追踪及异常请求转发方面。*

#### **6. 对应用开发者的意义**
- **成本可见性持续提升**：请确保 `model_prices_and_context_window.json` 包含所有相关提供商与模型（如 Glimpse-1.0、GPT-Image-2）。使用 `ghcr.io/berriai/litellm:lts` 以避免回归问题。
- **避免依赖旧版默认值**：PR #50720 提醒启动时废弃空 `models` 列表的警告 —— 建议将团队/密钥配置迁移到显式模型列表。
- **流式应用需谨慎处理元数据**：注意 `id` 字段可能在通过 `pass_through_endpoints` 的 JSON-RPC 中被剥离。使用 `include_fallback_errors` 时需格外小心。
- **监控速率限制行为**：v3 速率限流器可能导致有效 RPM/TPM 限额减半（参见 #34140），升级后务必验证配置。
- **谨慎使用 `cost-based-routing`**：当前同一模型名下存在多个部署时，`compression_savings_spend` 与 `prompt_caching_spend` 会报告为 $0（PR #37117）。

> 🛠️ **行动建议**：审计成本追踪逻辑，审查模型别名与部署配置，并使用新 `lts` 镜像测试流式工作流。

---  
*数据来源：GitHub @ BerriAI/litellm | 更新时间：2026-11-10*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-10**

---

### **1. 今日亮点**  
Unsloth 团队持续推进核心推理与扩散模型性能优化，多个 PR 聚焦于 GPU 内存管理、ROCm/Windows 稳定性以及提示词缓存优化。重点进展包括针对图像生成的显存感知重试逻辑（`PR #17339`）、面向 Blackwell 之前的 GPU 的量化路由改进（`PR #17343`），以及多 GPU 环境下 SDPA 内核处理的修复。与此同时，用户侧功能请求反映出对批量聊天创建、模型标签化和持久化偏好设置的日益增长需求。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未检测到新版本发布或破坏性变更。*

---

### **3. 新模型与硬件支持**  
- **ROCm (gfx1151)**：改进分层处理，正确放置 SDPA 保护机制（`PR #17347`），并在管道卸载后恢复 `TunableOp` 状态（`PR #17340`）。  
- **Windows + RTX 3060**：正在调查尽管存在 GPU 却仍回退至 CPU 进行图像生成的问题（`Issue #16803`）。  
- **Pre-Blackwell GPU**：通过名称识别，为官方 NVFP4 检查点引入智能 INT8 回退机制（`PR #17343`）。  
- **自定义 OpenAI 兼容端点**：使用自定义连接时视频上传被阻塞（`Issue #17295`）。

---

### **4. 性能与优化**  
- **显存管理**：`PR #17339` 实现了因显存不足导致图像渲染失败后的重试逻辑——对 8GB 显存设备（如 RTX 3070）至关重要。  
- **提示词缓存**：通过在 `functools.wraps` 使用中保留 `transparent-wrapper` 标记，防止意外缓存失效（`PR #17348`）。  
- **量化效率**：在 FLUX.3 中，共享联合块间的 int8 ConvRot 量化（`PR #17337`），减少冗余计算。  
- **内存友好加载**：GGUF 重新加载时现在会等待显存完全释放后再初始化（`PR #17345`），在上下文切换时提升稳定性。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 描述 | 修复状态 |
|---------|-------|-------------|------------|
| 高 | `#17339` | Windows RTX 3070 上因显存不足导致图像渲染失败；无恢复机制 | ✅ *修复进行中（PR #17339）* |
| 中 | `#16803` | 尽管可用 GPU，Windows 11 上图像生成仍回退至 CPU | ⚠️ *未解决；环境相关* |
| 中 | `#17295` | 自定义 OpenAI 兼容 API 连接时视频上传被阻塞 | ❌ *尚未修复* |
| 低 | `#17342` | 未经验证的缓存 `.pt` 文件可能覆盖更安全的 safetensors 备份 | ✅ *已合并修复（PR #17342）* |
| 低 | `#17338` | 传输分片导致 SSE 事件碎片化，引发数据丢失 | ✅ *修复进行中（PR #17338）* |

---

### **6. 对应用开发者的影响**  
- **对智能体构建者**：在混合 GPU 环境（尤其是 ROCm 与 Pre-Blackwell）部署 LLM/扩散模型管道时，可靠性将得到提升。建议使用 `UNSLOTH_REUSE_CACHED_PICKLE_WEIGHTS=0` 与 `UNSLOTH_PREQUANT_PREFER_SAFETENSORS=1` 强制安全权重加载。  
- **对前端/工具开发人员**：前端正在优化——预计会采用更严格的 CSS 变量规则（`PR #17008`）并改进选择器用户体验（如 `PR #17164`、`#17344`）。  
- **对部署工程师**：模型切换时需注意显存限制——`PR #17345` 确保更安全的重载时机。同时避免在生产环境中依赖未经验证的 `.pt` 缓存。  
- **未来兼容性**：关注即将推出的批量聊天支持（`#17333`）与增强型模型管理（`#15038`）——对于涉及视频分块或微调流水线的可扩展工作流至关重要。

🔗 [GitHub Issues](https://github.com/unslothai/unsloth/issues) | [Pull Requests](https://github.com/unslothai/unsloth/pulls)

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*