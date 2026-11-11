# AI 基础设施日报 2026-11-11

> 生成时间: 2026-11-11 02:12 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-11-11**

---

### **1. 生态概览**  
2026年末，AI推理基础设施领域呈现出高度专业化、硬件加速迅猛以及对代理原生工作负载日益关注的特征。各项目在架构上逐步分化：高性能服务引擎（vLLM、SGLang）在MoE、FP8/FP4量化及分布式推理等层面持续进行内核级优化；本地运行时（llama.cpp、Ollama）更注重跨平台兼容性与多模态支持；网关类项目（LiteLLM）强调安全性、成本可观测性与工具链集成；而微调平台（Unsloth）则聚焦于模型部署与代理编排的用户体验优化。一个清晰的趋势是——“实时、结构化推理”正在重塑开发者构建代理应用的方式，其表现包括系统一API、视频输入以及动态思维控制等功能。

---

### **2. 活跃度对比**

| 项目        | 近24小时开放问题数 | 近24小时合并PR数 | 发布状态         |
|-------------|--------------------|--------------------|------------------|
| vLLM        | 12                 | 8                  | 无               |
| SGLang      | 15                 | 7                  | 无               |
| llama.cpp   | 13                 | 5                  | 仅内部修复     |
| Ollama      | 9                  | 5                  | `v0.40.17-rc0`（稳定） |
| LiteLLM     | 11                 | 6                  | `v1.110.0-rc.1`、`v1.109.0`、`v1.108.5`（LTS） |
| Unsloth     | 6                  | 4                  | 无               |

> ✅ **关键洞察**：LiteLLM 在发布速度上领先，多个版本标签（含安全关键更新）并行推进；而 vLLM 与 SGLang 问题数量较高，反映出在多节点扩展与后端崩溃方面存在活跃的稳定性挑战。

---

### **3. 模型支持竞赛**

| 新模型 / 架构             | 支持项目                     | 备注 |
|---------------------------|------------------------------|------|
| **Kimi-K3 / Kimi-K3.1 Vision** | vLLM、SGLang、Ollama、Unsloth | vLLM/SGLang 提供完整元数据与图像支持；Ollama 通过 MLX 增加视频输入 |
| **Qwen3.8-Flash-Next (UD 3.1)** | vLLM、SGLang、Unsloth         | Unsloth 报告草案接受率下降约74%（相比旧版本头部），可能存在回归问题 |
| **DeepSeek-V4.1-Flash**       | vLLM、SGLang                 | 两者均启用 ROCm 上的 FP8 KV 缓存；SGLang 新增稀疏 MLA |
| **Mistral-Large-4 (MoE, DSA)** | SGLang                       | 首个实现完整 MoE + DSA + 视觉支持的项目 |
| **ZONOS3-Mini TTS**           | llama.cpp                    | `mtmd` 生态新增功能 |
| **Nemotron 3.5 Bolt 74B-A9B**  | Ollama                       | 全面支持 MLX 与推测解码 |
| **System One 决策模型**       | Ollama                       | 实验性 `/v1/systemone` 格式，用于结构化推理 |

> 🏆 **排行榜**：  
> - **SGLang** 在前沿模型架构支持上领先（MoE、DSA、多模态）。  
> - **Ollama** 在真实世界代理就绪度上胜出，具备视频输入、TTS 及决策 API 实验能力。  
> - **vLLM** 在 AMD/ROCm 优化深度与性能调优方面保持优势。

---

### **4. 性能前沿**

| 优化方向              | 领先项目                          | 关键进展 |
|-----------------------|----------------------------------|----------|
| **KV 缓存效率**       | vLLM、SGLang、llama.cpp          | vLLM 修复冗余视图重推导；SGLang 引入 HiCache 预取；llama.cpp 优化 flash attention |
| **量化与内核调优**    | vLLM、SGLang、llama.cpp          | AITER 的 FlyDSL GEMM（vLLM）；FP4/FP8 ASM（SGLang）；融合 Q8_0/Q4_0 反量化（llama.cpp） |
| **推测解码**          | vLLM、SGLang、Ollama             | vLLM 融合马尔可夫采样；Ollama 暴露指标；SGLang 在 SM120 上出现严重 fa4 崩溃 |
| **分布式服务**        | vLLM、SGLang                     | vLLM 改进 MoE DP 对齐；SGLang 在 TP > 1 时遭遇 `DFlash` 崩溃 |
| **批处理与吞吐量**    | SGLang、vLLM                     | SGLang 使用填充 Q + 分组步进启动；vLLM 优化批处理无关的 GPTQ |

> 🔥 **热点区域**：  
> - **AMD ROCm (gfx950/Mi355X)**：vLLM 与 SGLang 均大力优化 MXFP8、FP8 与稀疏 MLA。  
> - **Blackwell (SM120)**：SGLang 面临严重稳定性问题（`fa4` 崩溃），提示早期采用存在风险。  
> - **多模态推理**：视频、图像、音频支持已成标配——Ollama 与 Unsloth 在集成成熟度上领先。

---

### **5. 层级定位**

| 项目       | 主要层级                     | 在栈中的角色                              | 差异化优势 |
|------------|------------------------------|--------------------------------------------|------------|
| **vLLM**   | 推理引擎                     | 高吞吐、低延迟服务                         | 内核级调优、MoE、P/D 解耦 |
| **SGLang** | 推理引擎 + 网关              | 统一引擎，具备丰富调度与工具能力           | HiCache、Mooncake、混合卸载、扩散支持 |
| **llama.cpp** | 本地运行时                 | CPU/GPU/NPU 本地推理                        | 轻量、嵌入式、支持 Vulkan/SYCL |
| **Ollama** | 网关 + 本地运行时           | 开发者友好的 CLI + API 网关                | 视频输入、UI 思维切换、MLX 运行器 |
| **LiteLLM** | LLM 网关 / 路由层           | 多提供商路由、成本追踪                      | 安全加固、流处理、防护机制 |
| **Unsloth** | 微调工作室 + 代理 UX       | 模型部署、代理工作流构建                    | 反向代理安全、PDF 导出、主题美化 |

> 💡 **战略启示**：  
> - **构建可扩展推理集群的工程师**：vLLM 与 SGLang 仍是首选。  
> - **构建本地代理或 RAG 系统的开发者**：Ollama + Unsloth 提供更优用户体验与多模态就绪能力。  
> - **管理多供应商 LLM 栈的企业**：LiteLLM 对成本控制与可靠性至关重要。

---

### **6. 趋势信号**

#### 🔍 **新兴行业趋势**
1. **以代理为中心的基础设施**：  
   - 动态“思考”开关（Ollama）、结构化输出格式（`systemone`）、工具调用防护机制（LiteLLM）表明，系统正从纯文本生成转向“具备推理感知”的智能体。

2. **安全即核心基础设施**：  
   - `litellm==1.107.0` 凭证窃取事件凸显了**包完整性不可妥协**。签名镜像、LTS 标签与即时补丁已成为基本要求。

3. **硬件特异性优化已成为标准**：  
   - AMD ROCm、Intel XPU、Blackwell SM120 与集成显卡（Radeon 780M）不再小众，而是性能主张的核心。项目必须在多样硬件上验证。

4. **多模态已成熟至生产可用**：  
   - 视频输入（Ollama）、图像元数据（vLLM）、TTS（llama.cpp）现已成为稳定功能，非实验性质。这推动了丰富的本地 RAG 与代理工作流落地。

5. **性能权衡日益明显**：  
   - 推测解码中的严重回归（llama.cpp）、KV 缓存正确性问题（SGLang）、草案接受率下降（Qwen3.8-Flash-Next UD 3.1）揭示：**优化常伴随隐性代价**。

#### 📌 **应用开发者应关注事项**
- **避免在 Hopper 上使用 SGLang v0.5.23+**，直至 #49336 修复完成——预计解码延迟上升 33–45%。
- **切勿在 Blackwell (SM120) 上使用 `fa4`** ——建议使用 Triton 后端运行 GLM-5.3-Flash。
- **立即从 `litellm==1.107.0` 升级** ——该包已被污染。
- **谨慎测试推测解码行为**，尤其在量化模型上（llama.cpp、vLLM）。
- **监控 GPU 内存压力** ——HiCache + Mooncake 在高负载下命中率下降；应主动调整缓冲阈值。

---

> ✅ **最终建议**：  
> 根据**工作负载类型**选择技术栈：  
> - **大规模推理**：vLLM 或 SGLang（SM120/ROCm 上需谨慎）。  
> - **本地代理开发**：Ollama + Unsloth（多模态与用户体验俱佳）。  
> - **多供应商路由与安全**：LiteLLM（搭配 `lts` 标签）。  
> - **边缘/仅 CPU 部署**：llama.cpp。  

保持警惕——性能提升越来越依赖于**硬件特异性权衡与安全实践**。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

### **vLLM Digest — 2026-11-11**

#### **1. 今日亮点**  
vLLM 项目持续深化对 AMD ROCm 平台的支持，针对 gfx950/Mi355X 硬件上的 Qwen3.8 与 MiniMax-M3.1 模型开展多项性能优化。新提交的 PR 集中于内核级调优（如 AITER 的 FlyDSL GEMM 支持 MXFP8）、通过 NIXL 重连逻辑提升 P/D 分离架构的容错能力，以及增强 Kimi-K3 图像元数据输入的 EPD 支持。此外，一项重要 RFC 提议将响应解析中的 Rust 正则引擎替换为支持前瞻断言（lookaround）的版本，这对复杂提示处理至关重要。

#### **2. 发布与破坏性变更**  
无。过去 24 小时内未报告新版本发布或破坏性 API/配置变更。

#### **3. 新模型与硬件支持**  
- **AMD ROCm**：针对 `amd/Qwen3.8-2.4T-A95B-Quark-MXFP4` 与 `Qwen3.8-Flash-Next-Quark-MXFP4` 在 gfx950 / MI355X 上的活跃优化（#57149, #59575）。  
- **Intel XPU**：启用 `v1/engine` 套件的 CI 测试（#66926）；当未安装 `lmcache` 时跳过 `LMCacheMPConnector` 测试（#66924）。  
- **Kimi-K3**：EPD 中支持仅元数据图像输入（#66925），与 InferenceX 预设保持一致（#66433）。  
- **DeepSeek V4/V4.1**：通过 ROCm 上的稀疏 MLA 实现 FP8 KV 缓存支持（#66036）。  

#### **4. 性能与优化**  
- **ROCm GEMM 调优**：AITER 优化后的 FlyDSL GEMM 已优先用于 gfx950 上的 MXFP8 线性内核（#65479），显著提升 MoE 模型吞吐量。  
- **FlashInfer 优化**：向 SM107 低延迟表中新增 warp split-K BF16 GEMM 与 `ll_bf16` 支持，适用于 GLM-5.3（#65706）。  
- **推测解码**：在 NVIDIA SM100 上融合 DSpark 草稿归一化与马尔可夫采样，使 TPOT 延迟降低约 4.4%（#66764）。  
- **批处理无关模式**：批处理无关的 GPTQ 线性层现在通过 Humming 后端路由，避免重复解包（#66838）。  
- **KV 缓存效率**：PR 解决了注意力后端中冗余的 K/V 视图重新推导问题（#64572）及首次启动时 KV 缓存大小不一致问题（#54383）。  

#### **5. 稳定性与回归问题**  
- **严重**：MiMo-V2.6-Flash-MOPD 在 TP > 1 时 `DFlash` 接受率崩溃（#66387），阻碍多节点推理。  
- **高严重性**：`Qwen3.5-122B-A10B-FP8` 在提交 `0fae39a` 后出现精度下降（#65906），可能源于分词器或后处理变更。  
- **中等**：`MooncakeConnector` 在缓存重置后无法重新获取编码器嵌入（#66846）；通过本地缓存清除已修复。  
- **其他**：`NIXL` 连接器在持续负载下因对端连接丢失而卡死（#66795）；已通过重握手逻辑修复。  

#### **6. 对应用开发者的启示**  
- **AMD 用户**：预计在 MI355X 上使用 Qwen3.8 与 MiniMax-M3.1 模型时获得更高吞吐；请关注 `#57149`、`#59575` 与 `#65479` 获取稳定构建版本。  
- **多节点部署**：使用 `--prefill-schedule-policy delayer`（#65655）以改善 MoE DP 对齐并减少预填充竞争。  
- **代理/工具类工作负载**：若使用 Kimi-K3 或结构化输出，请更新至最新 vLLM 版本；`#66925` 实现了更清晰的图像元数据处理。  
- **生产稳定性**：在 `#66387` 修复前，避免在 TP > 1 场景下使用 `DFlash`；若精度至关重要，建议锁定至回归前的提交版本（#65906）。  
- **Rust 解析**：留意 `#65959`——未来更新可能开启响应解析中的高级正则功能。  

> 🔗 [GitHub Issues](https://github.com/vllm-project/vllm/issues) | [PRs](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 消息简报 – 2026-11-11**

---

### **1. 今日重点**  
SGLang 生态系统持续深化对下一代硬件的支持，关键性能与稳定性工作在 **Blackwell (SM120)** 和 **ROCm (gfx950)** 平台上稳步推进。主要聚焦于修复不稳定的 CI 基础设施 (#42752)，解决 SM120 上 `fa4` 注意力模块的高严重性崩溃问题 (#42012)，以及优化内存压力下的 KV 缓存行为 (#47481)。新增的 PR 还扩展了 AMD ROCm 对 Qwen4-Exp 与 DeepSeek-V4.1-Flash 的支持。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新发布或破坏性变更报告。*

---

### **3. 新模型与硬件支持**  
- **新增模型支持**：新增 `Mistral-Large-4` (`mistralai/Mistral-Large-4-1T-A52B`)，支持 MoE、MLA、DSA 稀疏注意力及通过 Pixtral 实现的多模态视觉功能。[PR #47271](https://github.com/sgl-project/sglang/pull/47271)  
- **AMD ROCm 支持扩展**：  
  - 在 gfx950（MI355X）上通过 DSA 后端默认启用 `--kv-cache-dtype auto`，自动设置为 `fp8_e4m3`。[PR #48996](https://github.com/sgl-project/sglang/pull/48996)  
  - 新增 `--hicache-mamba-size-gb` 参数，用于控制混合模型中 Mamba 主机池大小。[PR #47867](https://github.com/sgl-project/sglang/pull/47867)  
  - 在 ROCm 上启用 FP4 GEMM 后端选择（`aiter`、`triton`）。[PR #43360](https://github.com/sgl-project/sglang/pull/43360)  
- **Intel CPU**：所有 PR 测试套件已迁移至 SPR 运行器，以提升 CPU 绑定精度与测试覆盖率。[PR #49488](https://github.com/sgl-project/sglang/pull/49488)

---

### **4. 性能与优化**  
- **DeepSeek-V4.1-Flash (SM120)**：优化 mHC 混合模式，使其在解码批次中以 BF16x3 运行，降低侧流开销。[PR #48456](https://github.com/sgl-project/sglang/pull/48456)  
- **AMD ROCm (gfx950)**：  
  - 通过填充 Q + 分组步进启动，加速 MQA 解码日志计算。[PR #48649](https://github.com/sgl-project/sglang/pull/48649)  
  - 12 头 MLA 解码与 8 token 验证现在使用 FP8-Q ASM。[PR #45320](https://github.com/sgl-project/sglang/pull/45320)  
- **HiCache 与 Mooncake**：引入预取机制，在队列等待期间将驻留在 SSD 上的 KV 缓存提前加载至 DRAM，以降低延迟。[PR #49696](https://github.com/sgl-project/sglang/pull/49696)  
- **扩散模型**：使条件缓存淘汰操作变为 O(1) 且可配置。[PR #49576](https://github.com/sgl-project/sglang/pull/49576)  
- **内核级优化**：针对 SM100 上小头稀疏 MLA 预填充进行了优化。[PR #48891](https://github.com/sgl-project/sglang/pull/48891)

---

### **5. 稳定性与回归问题**  
- **严重崩溃**：`fa4` 注意力后端在 SM120（RTX PRO 6000）上进行 CUDA 图捕获时崩溃，涉及 GLM-5.3-Flash 模型。目前仅 Triton 后端稳定。[Issue #42012](https://github.com/sgl-project/sglang/issues/42012)  
- **高严重性回归**：从 v0.5.22 升级至 v0.5.23 导致在 Hopper（H20-3e）上并发度为 12 时，**每步解码时间增加 33–45%**。[Issue #49336](https://github.com/sgl-project/sglang/issues/49336)  
- **缓存正确性问题**：在 L2/L3 压力下，HiCache + Mooncake 出现可复现的前缀缓存命中率下降。[Issue #47481](https://github.com/sgl-project/sglang/issues/47481)  
- **模型特定问题**：  
  - GLM-4.7-Flash W4A16 压缩张量因缺少 `kv_b_proj.weight` 而失败。[Issue #49369](https://github.com/sgl-project/sglang/issues/49369)  
  - Qwen4-Exp PLE 嵌入层错误地强制转为 FP8，尽管配置指定为 BF16。[Issue #49493](https://github.com/sgl-project/sglang/issues/49493)  
  - `/v1/responses` 流式响应在上下文长度超限时返回 HTTP 200 而非 400。[Issue #48557](https://github.com/sgl-project/sglang/issues/48557)  

*注：以上问题暂无已合并的修复 PR。*

---

### **6. 对应用开发者的影响**  
- **谨慎使用 v0.5.23+ 在 Hopper 平台**：若依赖推测解码或高并发推理，预计将遭遇显著延迟恶化——建议暂时锁定在 v0.5.22，直至 #49336 修复。  
- **避免在 Blackwell (SM120) 上使用 `fa4` 后端**：对于使用 GLM-5.3-Flash 的生产负载，应继续使用 Triton，直到 #42012 修复。  
- **充分利用新的 AMD 优化**：在 MI355X 上运行多模态代理时，启用 `--kv-cache-dtype fp8_e4m3` 与 `--hicache-mamba-size-gb` 可提升缓存利用率并降低延迟。  
- **监控缓存命中率**：在高负载场景下使用 HiCache + Mooncake 时，预计命中率会出现短暂下降；建议调整缓冲区大小或优化卸载阈值。  
- **注意工具调用解析**：更新后的 `minicpm5` 检测器修复了 XML 解析问题，但可能影响使用旧版工具调用格式的代理工作流。[PR #49222](https://github.com/sgl-project/sglang/pull/49222)  

请持续关注 CI 与问题追踪器获取修复进展。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 消息简报 – 2026-11-11**

---

### **1. 今日重点**  
最新更新聚焦于 CUDA 与 SYCL 后端的关键稳定性修复，包括针对具备统一内存的 GPU（如 RTX 5090）降低内存预留以防止 OOM 错误。在推测解码正确性方面也取得显著进展——尤其针对量化模型；同时新增对 Kimi K3.1 视觉模型和 ZONOS3-Mini TTS 的支持，进一步拓展了多模态与语音能力。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未发布新的标记版本。但有以下重要变更：  
- **CUDA**：在混合内存 GPU 上将 VMM 池预留减半至 8 GB，避免 `cuMemAddressReserve` 失败 ([#30542](https://github.com/ggml-org/llama.cpp/pull/30542))。  
- **CUDA**：重用图时跳过图兼容性检查，减少冗余重建 ([#32004](https://github.com/ggml-org/llama.cpp/pull/32004))。  
- **CUDA**：将图/流状态移出 `common.cuh`，避免任何改动引发全量重建 ([#32001](https://github.com/ggml-org/llama.cpp/pull/32001))。  

> 🔧 *注：以上均为内部优化；无需迁移任何 API 或配置。*

---

### **3. 新模型与硬件支持**  
- ✅ **Kimi K3.1 Vision**：通过 `mtmd` 后端新增支持 ([#31980](https://github.com/ggml-org/llama.cpp/pull/31980))。  
- ✅ **ZONOS3-Mini TTS**：作为新模型加入 `mtmd` 生态系统 ([#32020](https://github.com/ggml-org/llama.cpp/pull/32020))。  
- 🚧 **XDNA 后端**：已开放功能请求，寻求硬件专用后端支持 ([#21725](https://github.com/ggml-org/llama.cpp/issues/21725))。  
- 🚧 **GLM5.3 (flash)**：请求未来集成 ([#27922](https://github.com/ggml-org/llama.cpp/issues/27922))。  
- 🚧 **Prism PQ2_0 (type 142) 与 PTQ1_0 (type 143)**：请求支持 Ternary-Bonsai-2 量化格式 ([#29058](https://github.com/ggml-org/llama.cpp/issues/29058))。

---

### **4. 性能与优化**  
- **CUDA**：将 Q8_0/Q4_0 KV 反量化融合进 MMA flash-attention 内核，降低临时内存占用并提升带宽效率 ([#31802](https://github.com/ggml-org/llama.cpp/pull/31802))。  
- **HIP/ROCm**：通过引入固定 32 MB 工作区修复动态 BLAS 工作区分配问题，消除每次调用的分配开销，提升可靠性 ([#31838](https://github.com/ggml-org/llama.cpp/pull/31838))。  
- **SYCL**：优化 `set_main_device` 中设备 ID 缓存，避免重复互斥锁操作 ([#32013](https://github.com/ggml-org/llama.cpp/pull/32013))。  
- **Vulkan**：将令牌验证与 GQA 头处理合并为单个 flash-attention 行瓦片，改善内存聚合度 ([#30190](https://github.com/ggml-org/llama.cpp/pull/30190)) —— 正在开发中，但有望显著提升吞吐量。

---

### **5. 稳定性与回归问题**  
今日报告的关键问题包括：  
1. **推测解码偏差**（`temperature=0`，量化目标）：在 Q4_K_M 模型上，贪婪输出与普通运行结果不一致 ([#25618](https://github.com/ggml-org/llama.cpp/issues/25618)，40 条评论)。  
2. **推测解码段错误**：在 CPU/GPU 混合环境下使用 Llama-3.1-405B-Instruct + 草稿模型时触发 ([#9949](https://github.com/ggml-org/llama.cpp/issues/9949)，严重级别)。  
3. **双 Intel Arc Pro B70 使用 SYCL + DFlash2 草稿模型时 GPU 驱动 TDR 重启** ([#28778](https://github.com/ggml-org/llama.cpp/issues/28778))。  
4. **双 Intel B70 SYCL 后端在长时间对话中使用 `-sm tensor` 出现内存泄漏** ([#27845](https://github.com/ggml-org/llama.cpp/issues/27845)，24 条评论)。  
5. **Adreno 840 平台 Vulkan 崩溃**：因全量卸载 TQ1_0 模型时 `vkGetDeviceFaultInfoEXT` 失败导致 ([#30649](https://github.com/ggml-org/llama.cpp/issues/30649))。  

> ⚠️ *目前尚无 PR 解决这些高严重性问题。依赖推测解码或 Vulkan/SYCL 后端的开发者应谨慎使用。*

---

### **6. 对应用开发者的影响**  
- **在量化模型上使用推测解码需谨慎** —— 结果可能与非推测运行不一致，直至 [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) 修复。  
- **在 SYCL 上运行大型 MoE 模型时**，若使用 `--cpu-moe -sm layer` 在多 GPU 环境下，预期性能严重下降 ([#31510](https://github.com/ggml-org/llama.cpp/issues/31510))；建议改用其他分片模式或仅使用 GPU 卸载。  
- **充分利用新推出的 TTS 与视觉模型**，如 Kimi K3.1 与 ZONOS3-Mini，适用于需要多模态输入输出的智能体应用。  
- **启用 `GGML_CUDA_POOL_DEBUG=1`** 可在调试时获取详细的内存追踪信息 ([#31919](https://github.com/ggml-org/llama.cpp/pull/31919))。  
- **在 Adreno 840 上避免全量 Vulkan 卸载**，直到驱动层修复确认。  

👉 *敬请关注即将发布的 v0.9.0-dev 版本，其中将包含这些补丁。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama 摘要 – 2026-11-11**

---

### **1. 今日亮点**  
最新发布的 `v0.40.17-rc0` 在基于 Vulkan 的 GPU 上显著提升了模型运行器的稳定性，并增强了 CLI 在重启过程中的容错能力。关键进展包括通过 `/api/chat` 和 `/api/generate` 完全支持 MLX 模型的视频输入，拓展了多模态功能。一项新提交通过利用 `/api/show` 返回的 `capabilities` 实现了 UI 中动态思考控制功能，使 UI 行为与 API 层级模型特性保持一致。

---

### **2. 发布与破坏性变更**  
- **v0.40.17-rc0**：发布多个稳定性修复：  
  - 改进 ChatGPT CLI 恢复逻辑与优雅重启机制 ([#19583](https://github.com/ollama/ollama/pull/19583))  
  - Vulkan 后端现在对集成显卡使用内存映射文件（`mmap`），以降低延迟并提升资源共享效率 ([#19409](https://github.com/ollama/ollama/pull/19409))  
  - MLX 运行器现在更可靠地报告加载进度并检测卡顿情况 ([#17834](https://github.com/ollama/ollama/pull/17834))  

> ⚠️ 本次发布无破坏性变更；向后兼容性已保留。

---

### **3. 新模型与硬件支持**  
- ✅ **视频输入支持（MLX）**：通过现有 API 调用中的 `images` 字段，为 LFM3-VL、LFM3-Omni 以及 Qwen3.5/3.6 模型原生支持 MP4/MOV 片段 ([#19348](https://github.com/ollama/ollama/pull/19348))。  
- ✅ **Nemotron 3.5 Bolt 74B-A9B**：新增完整 MLX 支持，包含逐层专家配置、LiLiCorr 预测解码及混合精度堆叠 ([#19229](https://github.com/ollama/ollama/pull/19229))。  
- ✅ **System One 决策模型**：通过决策模型（如 Liquid d1、Laya、Kev）实验性支持 `/v1/systemone` 格式——迈向结构化推理 API 的第一步 ([#19639](https://github.com/ollama/ollama/issues/19639))。  
- ✅ **AMD Radeon 780M Vulkan**：旧版本（pre-0.32.10）的回归问题已确认，但新构建中仍存在持续问题——建议暂用临时方案直至补丁发布 ([#17748](https://github.com/ollama/ollama/issues/17748))。

---

### **4. 性能与优化**  
- 🔧 **预测解码指标**：现已通过 API 及 `--verbose` 输出按请求暴露，包括草稿/接受的 token 信息——可精准评估加速效果与成本权衡 ([#19368](https://github.com/ollama/ollama/pull/19368))。  
- 📈 **草稿控制**：`draft_num_predict=0` 现在完全禁用预测解码，同时保留草稿缓存以供后续复用——适用于受控性能测试场景 ([#19391](https://github.com/ollama/ollama/pull/19391))。  
- 🔄 **并发生成（MLX）**：通过 `OLLAMA_NUM_PARALLEL` 启用——允许多个请求共享投影/前馈计算，降低首个 token 延迟 ([#19197](https://github.com/ollama/ollama/pull/19197))。  
- ⏱️ **模型加载时间**：MLX 运行器现在在加载前绑定监听器，防止长时间加载期间出现提前超时 ([#17834](https://github.com/ollama/ollama/pull/17834))。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 修复/临时方案 |
|--------|------|-------|----------------|
| 严重 | Windows RTX 5090：工具调用时运行器断连 → HTTP 500 /tokenize | [OPEN](https://github.com/ollama/ollama/issues/19439) | 未解决；高负载下间歇性发生 |
| 高 | AMD Radeon 780M Vulkan：因内存不足导致 `ErrorDeviceLost` | [OPEN](https://github.com/ollama/ollama/issues/17748) | v0.32.10 已修复；v0.32.10+ 出现回归 |
| 中等 | MLX KV-cache 在请求间累积内存（响应后未释放） | [CLOSED](https://github.com/ollama/ollama/issues/17875) | 已在 v0.40.17-rc0 修复 |
| 中等 | Intel Iris Xe iGPU：v0.32.6 后 qwen2.5:14b 出现 `ErrorOutOfDeviceMemory` | [CLOSED](https://github.com/ollama/ollama/issues/18531) | v0.32.6 修复回归问题；后续版本不稳定 |
| 低 | `ollama -v` 即使无实例运行也显示误导性“警告”信息 | [CLOSED](https://github.com/ollama/ollama/issues/19613) | 已在 v0.40.17-rc0 修复 |

> 💡 注意：多个 GPU 特定回归问题表明，底层 Vulkan 驱动交互存在更深层次问题，需跨平台验证。

---

### **6. 对应用开发者的启示**  
- **构建具备实时推理能力的健壮智能体**：通过 `capabilities.thinking` 新增的 UI 开关，可无需硬编码模型名称即可精细控制推理层级——非常适合需要条件内省的智能体工作流 ([#19648](https://github.com/ollama/ollama/pull/19648))。  
- **支持丰富的多模态输入**：随着 MLX 模型支持视频输入，开发者可构建本地 RAG 系统并融入视觉上下文（如视频摘要、帧分析）。  
- **精确调控推理性能**：使用 `draft_num_predict=0` 与 `OLLAMA_NUM_PARALLEL` 可隔离预测解码影响或扩展并发量——对低延迟敏感应用至关重要。  
- **避免静默失败**：注意 `/api/chat` 中未公开的载荷限制（例如约 32 MiB 限制导致 400 错误）——应在客户端实现分块处理或降级策略 ([#19597](https://github.com/ollama/ollama/issues/19597))。  
- **为系统级决策做好准备**：随着 `/v1/systemone` 日益普及，预计生产级智能体对轻量、校准良好的决策模型需求将持续增长。

> 🔗 **实用提示**：关注 `OLLAMA_KEEP_ALIVE`（默认值：5 分钟）——用户反馈其对深度思考工作流而言过短 ([#19624](https://github.com/ollama/ollama/issues/19624))；长期运行会话中建议适当调高该值。

---  
*数据来源：github.com/ollama/ollama | 最后更新：2026-11-11*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

### **LiteLLM Digest — 2026-11-11**

#### **1. 今日亮点**  
针对 PyPI 和 Docker Hub 上恶意 `litellm==1.107.0` 包的严重安全事件已解决：受影响版本已被撤回，所有相关镜像（`latest`、`main-stable`、`main-latest`）均已删除。与此同时，当前工作重点包括提升成本追踪精度、修复 Anthropic 兼容端点的流处理问题，以及增强对 MCP 工具和正则表达式标志的防护机制支持。

#### **2. 发布与破坏性变更**  
- 发布 **v1.110.0-rc.1**、**v1.109.0**、**v1.108.5 (LTS)**。  
- 所有 Docker 镜像现已使用 [cosign](https://docs.sigstore.dev/cosign/overview/) 签名，密钥来自提交 [`e82a3c6`](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065)。  
- **迁移提示**：使用 `v1.107.0` 的用户必须立即升级，因已确认存在凭据窃取漏洞（[Issue #47826](https://github.com/BerriAI/litellm/issues/47826)）。生产环境推荐使用 `ghcr.io/berriai/litellm:lts` 获取稳定 LTS 版本。

#### **3. 新模型与硬件支持**  
- **Bedrock 知识库搜索增强**：通过多模态嵌入支持图像向量搜索（PR [#51063](https://github.com/BerriAI/litellm/pull/51063)），不再静默失败，而是返回图像结果。  
- **Mistral 原生词元计数**：新增通过 Mistral 官方 `/responses/input_tokens` 接口实现上游词元计数支持（PR [#50653](https://github.com/BerriAI/litellm/pull/50653)）。  
- **Vertex AI 标记功能**：代理现在可将调用方身份（密钥、团队、组织、项目）注入 Vertex 请求中，以实现细粒度云账单追踪（PR [#50732](https://github.com/BerriAI/litellm/pull/50732)）。

#### **4. 性能与优化**  
- **流处理改进**：  
  - 流现在在终端事件处结束，而非等待上游关闭（PR [#51033](https://github.com/BerriAI/litellm/pull/51033)），降低客户端延迟。  
  - SSE 心跳保活 ping 不再阻塞错误传播；失败信息现可在流体中正确传递（PR [#49711](https://github.com/BerriAI/litellm/pull/49711)）。  
- **成本准确性**：修复确保即使上游返回 `usage.cost: 0` 时，支出日志仍反映实际成本（PR [#48937](https://github.com/BerriAI/litellm/pull/48937)），且基础模型定价始终正确应用，不受 `custom_llm_provider` 影响（PR [#47908](https://github.com/BerriAI/litellm/pull/47908)）。

#### **5. 稳定性与回归问题**  
- **高严重性**：  
  - Vertex AI 上未重试 `MidStreamFallbackError`（PR [#29808](https://github.com/BerriAI/litellm/pull/29808)）——已在 v1.108.5 及以上版本修复。  
  - 无效请求导致无限循环（PR [#18060](https://github.com/BerriAI/litellm/pull/18060)）——已在近期版本中解决。  
- **中等严重性**：  
  - `tpm_limit` 在内存缓存中未滚动（PR [#47340](https://github.com/BerriAI/litellm/pull/47340)）——临时方案：使用 Redis 或手动重置键值。  
  - 默认开启的 Claude 模型忽略 `reasoning_effort="none"`（PR [#47924](https://github.com/BerriAI/litellm/pull/47924)）——修复待发布。  
  - Ollama 后端丢弃 `tool_calls`（PR [#24091](https://github.com/BerriAI/litellm/pull/24091)）——补丁可用。

#### **6. 对应用开发者的意义**  
- **安全优先**：立即从 `v1.107.0` 升级，防止凭据泄露。生产环境建议使用 `lts` 标签以保障稳定性。  
- **成本追踪可靠性**：即使在流式传输和复杂路由场景下（如 `base_model` + `custom_llm_provider`），也能获得准确的支出日志。  
- **工具与防护机制**：对 MCP 工具处理及自定义代码防护机制（正则标志、敏感数据路由）的增强，提升了代理安全性与可观测性。  
- **多模型路由**：可安全使用 `vertex_ai/gemini-*` 配合 `cache_control` —— 修复解决了对话重排和系统提示丢失问题（PR [#47046](https://github.com/BerriAI/litellm/pull/47046)）。  
- **流式用户体验**：客户端（尤其是 Claude Code）将更及时收到错误通知，并实现更快的流终止，显著提升响应速度。

> ✅ **推荐操作**：审计代理配置中的 `tpm_limit`、`rpm_limit` 及 `cost_breakdown` 逻辑。升级至 `v1.108.5` 或更高版本。监控 OpenTelemetry 跨度：`gen_ai.response.model` 现已反映实际使用的模型（PR [#51029](https://github.com/BerriAI/litellm/pull/51029)）。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-11**

---

### **1. 今日亮点**  
Unsloth 团队在稳定核心推理工作流及改善本地模型部署的用户体验方面取得显著进展。关键 PR 修复了 Studio 中多项关键的 UI/UX 问题（如模型选择器可见性、PDF 导出换行），并解决了反向代理支持和 GGUF 权重位置追踪等长期存在的缺陷。一项重大修复已合并，防止桌面应用通过代理请求暴露种子管理员凭据。

---

### **2. 发布与破坏性变更**  
*无*  
过去 24 小时内未发布新版本。当前无破坏性变更或迁移说明。

---

### **3. 新模型与硬件支持**  
- ✅ **MiniMax-H3-Image** 已加入 Studio 的图像生成流水线（PR #17453），支持文本到图像生成及基于参考图的编辑，最高支持 16 张图像。  
- ✅ **Yandex** 已作为主要网页搜索引擎的备用层级集成（PR #17447），在 DuckDuckGo 遭遇反机器人限流时提升可靠性。  
- ✅ **RPM 包请求** 已正式确认（Issue #17445），表明对 Linux 发行版打包的需求持续增长。  
- ⚠️ **Qwen3.8-Flash-Next UD 3.1 GGUF** 的草稿接受率相比旧版 MTP 头下降约 74%（Issue #17402）；需确认是否计划推出匹配 3.1 版本的头部模型。

---

### **4. 性能与优化**  
- 🔧 **上下文窗口处理**：Studio 现在可正确将 `max_tokens` 与 vLLM 及 SGLang 工具请求中的可用上下文对齐（PR #17426），避免提示词 + max_tokens 超出容量时触发 `context_length_exceeded` 错误。  
- 📦 **按需加载 PDF 依赖**：PyMuPDF 与 pymupdf4llm 仅在首次使用时安装（PR #17206），有效降低初始启动开销。  
- 🧠 **CPU 上的流水线并行**：正在调查梯度累积 >1 时 MoE 路由器辅助损失发散问题（Issue #17054），提示分布式 CPU 训练可能存在潜在不稳定性。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 影响 | 修复状态 | GitHub 链接 |
|--------|------|--------|------------|-------------|
| 高 | 使用自定义域名并携带 `X-Forwarded-Host` 时出现 `404 Not Found`（Cloudflare Tunnel） | 破坏安全反向代理配置 | ✅ 已在 PR #17435 修复 | [PR #17435](https://github.com/unslothai/unsloth/pull/17435) |
| 高 | 通过代理引用页面泄露管理员密码 | 安全风险：凭据暴露 | ✅ 已在 PR #17454 修复 | [PR #17454](https://github.com/unslothai/unsloth/pull/17454) |
| 中 | 点击模型卡片时玻璃主题导致 UI 损坏 | Studio 中出现视觉错乱 | ✅ 已关闭 | [Issue #17417](https://github.com/unslothai/unsloth/issues/17417) |
| 中 | Qwen 混合模型在使用工具后重复处理完整提示 | 推理效率低下，上下文膨胀 | 开放 | [Issue #17015](https://github.com/unslothai/unsloth/issues/17015) |
| 低 | OpenAI 工具调用后渲染多余的 `</think>` | 错误的标记泄漏 | ✅ 已在 PR #17455 修复 | [PR #17455](https://github.com/unslothai/unsloth/pull/17455) |

---

### **6. 对应用开发者的意义**  
- **安全部署**：使用 `--api-only` 模式并配合白名单反向代理（如 Cloudflare Tunnel）——确保配置中包含主机验证（PR #17435）。避免暴露内部端点。  
- **模型选择清晰化**：预计“加载模型至”上方将更清晰地展示 TTS/音频模型选项（PR #17443），并通过能力标签提升搜索可发现性（PR #17452）。  
- **工具集成健壮性**：工具调用处理现已更加一致——避免手动闭合 `<think>`；交由 Studio 自动管理（PR #17455）。  
- **量化使用谨慎**：若使用 Qwen3.8-Flash-Next UD 3.1 GGUF，需注意其草稿接受率较旧版本显著下降（约 56–66%）（Issue #17402）；生产环境中应监控性能退化。  
- **未来兼容性**：关注即将推出的 RPM 包（Issue #17445），并考虑参与语言覆盖扩展（如 imatrix 校准中的乌克兰语，Issue #17371）。

> *对于构建智能体或微调应用的开发者：优先测试自定义连接与反向代理集成，尤其是在引入外部工具或音频模型时。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*