# AI 基础设施日报 2026-11-12

> 生成时间: 2026-11-12 03:18 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目 AI 基础设施生态报告 – 2026-11-12**

---

### **1. 生态概览**  
截至2026年末，AI 推理基础设施领域呈现出高度专业化与硬件融合的趋势。各项目正迅速分化为不同角色：高性能服务引擎（vLLM、SGLang）、本地优化运行时（llama.cpp、Unsloth）以及智能网关（LiteLLM）。开发重心已从通用模型支持转向 *硬件感知优化*，其中 AMD ROCm 与 NVIDIA Blackwell 成为主要开发方向。清晰的趋势包括 **分布式预填充拆分**、**推测解码成熟化** 以及 **多后端运行时灵活性** —— 这些均由对边缘、云及混合环境中低延迟、低成本代理工作负载的迫切需求所驱动。

---

### **2. 活动对比**

| 项目       | 最近24小时开启的问题数 | 最近24小时合并的PR数 | 发布状态       |
|---------------|----------------------------|-------------------------|-----------------------|
| **vLLM**      | 8                          | 15                      | 无新版本发布        |
| **SGLang**    | 12                         | 10                      | v0.5.23（严重回归） |
| **llama.cpp** | 7                          | 9                       | 无新版本发布        |
| **Ollama**    | 6                          | 5                       | 无新版本发布        |
| **LiteLLM**   | 5                          | 8                       | v1.110.0-rc.2（RC）    |
| **Unsloth**   | 9                          | 6                       | v0.1.917-beta（测试版）  |

> 🔍 *洞察*：SGLang 因 v0.5.23 版本出现严重回归导致活动量激增，而 LiteLLM 以聚焦稳定性和成本精度的 RC 版本展现出最快的发布节奏。Unsloth 的测试版发布表明其正在加速功能迭代。

---

### **3. 模型支持竞赛**

| 新模型 / 架构                 | 支持方                             | 状态与关键差异点 |
|----------------------------------|-----------------------------------|------------------------------|
| **Qwen3.8-27B (Dynamic v3.1 GGUF)** | ✅ Unsloth（测试版）                 | 首个通过优化后的 GGUF 实现生产级本地推理的项目 |
| **Kimi-K3.1**                   | ✅ SGLang（Day-0），⚠️ Unsloth（通过覆盖启用） | SGLang 在全栈支持上领先（PD、HiCache、DFlash） |
| **DeepSeek-V4-Pro (UMBP)**      | ✅ vLLM（仅支持 ROCm）               | 唯一在 AMD 平台上支持前缀卸载的项目 |
| **NVIDIA B200 (NVFP4 MoE)**     | ✅ vLLM（PR #61511）               | vLLM 在 Blackwell 特定内核调优方面保持领先 |
| **AMD MI355X / gfx950**         | ✅ vLLM，✅ SGLang，✅ llama.cpp    | vLLM 在性能优化上领先；SGLang 在拆分预填充方面领先 |
| **Intel Arc GPU**               | ✅ vLLM（SimpleCPUOffloadConnector） | vLLM 首个实现 Intel XPU 支持的项目 |
| **EXL3 (ExLlamaV3)**            | ✅ Unsloth                        | 仅由 Unsloth 支持；可运行 MoE 及非 Transformer 模型 |

> 🏆 **排行榜**：  
> - **模型敏捷性**：**SGLang**（Kimi-K3.1，L3 卸载）  
> - **硬件专业化**：**vLLM**（Blackwell，ROCm 内核）  
> - **本地运行时创新**：**Unsloth**（动态 GGUF，NPU 后端）

---

### **4. 性能前沿**

| 优化重点           | 领先项目                             | 关键进展 |
|-------------------------------|----------------------------------------------|------------------|
| **KV 缓存效率**       | vLLM（FP8 稀疏 MLA），SGLang（仅缓冲区模式） | vLLM 在 ROCm 上新增 FP8 KV 缓存；SGLang 减少备份写入 |
| **批处理与吞吐量**     | vLLM（`VLLM_BATCH_INVARIANT=1`），Unsloth（模型加载批处理） | vLLM 在 Qwen2.5-0.5B 上实现约 18% 吞吐提升 |
| **内核级优化**     | vLLM（FlashTopK，`ldmatrix.s8.s4`），SGLang（cuTile NVFP4 MoE） | vLLM 采用 PTX 9.4 实现 INT4→INT8 符号扩展 |
| **推测解码**      | vLLM，SGLang，Ollama（指标监控），Unsloth（子代理） | SGLang 存在解码性能下降；vLLM 修复 CUDA 图捕获问题 |
| **分布式预填充**       | SGLang（Mooncake，PD over MoRI），vLLM（卸载） | SGLang 在拆分预填充稳定性上领先 |
| **量化与内存管理**     | llama.cpp（MMQ，FP8），vLLM（MXFP4 融合） | llama.cpp 引入 MMQ 用于推测解码；vLLM 融合 MXFP4 索引器 |

> 🔥 **热点区域**：  
> - **AMD ROCm**：vLLM 与 SGLang 正在竞速 gfx950/MI355X 优化。  
> - **NVIDIA Blackwell**：vLLM 通过 CUTLASS 内核调优占据主导。  
> - **低秩与稀疏内核**：FlashTopK、FP8 与融合索引是关键差异化能力。

---

### **5. 层级定位**

| 项目       | 主要层级                | 核心差异化 |
|---------------|-------------------------------|------------------------|
| **vLLM**      | **高性能服务引擎** | 专为横向扩展推理、分布式注意力与内核级调优设计 |
| **SGLang**    | **代理式推理框架** | 面向长上下文代理，集成 HiCache、PD 与 DFlash 推测机制 |
| **llama.cpp** | **通用本地运行时** | 轻量、跨平台，适合边缘/移动端，支持 WebGPU/TTS |
| **Ollama**    | **统一本地推理网关** | 桥接模型、工具与 API；用户体验与部署便捷性突出 |
| **LiteLLM**   | **AI API 网关与编排层** | 聚合多个提供商，强制成本追踪，支持团队级预算管理 |
| **Unsloth**   | **面向代理的本地 UI 运行时** | 集成推理、代码代理、图像生成与导出功能于单一桌面应用 |

> 💡 **战略洞察**：当前技术栈已形成清晰分层：
> - **前端代理**：Unsloth（UI）、LiteLLM（API 层）
> - **中间层**：SGLang（代理逻辑）、vLLM（推理引擎）
> - **边缘与边缘+**：llama.cpp（本地）、Ollama（易用运行时）

---

### **6. 趋势信号**

#### 🔮 **关键行业趋势提炼**
1. **硬件特定优化已成为基本门槛**  
   项目不再“通用”——vLLM 与 SGLang 已分别建立 ROCm/Blackwell 专属路径。开发者必须根据目标硬件进行选择。

2. **推测解码趋于成熟——但仍具风险**  
   多个项目报告不稳定性（SGLang v0.5.23 回归，llama.cpp 在量化模型上的行为分歧）。仅在经过验证的配置下使用。

3. **拆分预填充成为新基准**  
   SGLang 以 Mooncake、HiCache 与 PD over MoRI 领先，这将定义未来代理性能标准。

4. **成本透明度不可妥协**  
   LiteLLM 的 RC 版本强调令牌计数、按模型预算与供应商错误处理——对企业采纳至关重要。

5. **本地运行时正演变为全栈平台**  
   Unsloth 集成推理、代理、导出与图像生成——模糊了运行时与应用之间的界限。

#### 📌 **应用开发者应关注事项**
- ✅ **避免在生产环境使用 v0.5.23（SGLang）** —— 应锁定至 v0.5.22。
- ✅ **在量化模型上验证推测解码**（llama.cpp、vLLM）。
- ✅ **使用 `VLLM_BATCH_INVARIANT=1`** 以确保批处理行为一致。
- ✅ **利用 LiteLLM 的成本追踪功能** 与 `sglang:num_good_requests_total` 指标进行 SLO 监控。
- ✅ **准备多后端部署** —— Unsloth 与 vLLM 现已支持多样后端（NPU、EXL3、ROCm）。

> 🛠 **最终建议**：对于以代理为核心的场景，推荐采用 **SGLang + LiteLLM + Unsloth** 组合。对于可扩展的云服务部署，**vLLM + LiteLLM** 仍是黄金标准。升级前务必基于真实工作负载模式进行充分测试。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-11-12**

---

### **1. 今日亮点**  
vLLM 项目持续针对 AMD ROCm 与 NVIDIA Blackwell 架构进行激进优化，多个高影响力 PR 集中解决 Qwen3.8、DeepSeek-V4 与 GLM-5.3 在 gfx950/MI355X 与 B200 上的性能瓶颈。关键进展包括：为 SM90/SM100 引入可选的 `FlashTopK` 后端；ROCm 上稀疏 MLA 新增对 FP8 KV 缓存的支持；以及对推测解码和 CUDA Graph 捕获稳定性的重要缺陷修复。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未检测到新版本发布或破坏性 API/配置变更。*

---

### **3. 新模型与硬件支持**  
- ✅ **AMD ROCm (gfx950 / MI355X)**：`amd/Qwen3.8-2.4T-A95B-Quark-MXFP4` 与 `amd/Qwen3.8-Flash-Next-Quark-MXFP4` 的性能优化追踪已启用。  
- ✅ **NVIDIA Blackwell (B200)**：通过 PR #61511 优化了 NVFP4 MoE CUTLASS 内核。  
- ✅ **Intel XPU**：通过 PR #67143，`SimpleCPUOffloadConnector` 现已支持 Intel Arc GPU。  
- ✅ **DeepSeek-V4-Pro**：通过 PR #63002，ROCm 上启用了独立的 UMBP 模式以支持前缀卸载。  
- ✅ **Qwen3.5/3.6 MoE GPTQ**：修复了 BF16 融合 MTP 专家中缺失 `w2_weight` 参数的问题（PR #63598 已解决）。  
- ✅ **语音转文本**：通过 PR #67151，支持将 `use_beam_search` 与 `max_completion_tokens` 传递至 STT 模型。

---

### **4. 性能与优化**  
- 🔥 **内核层**：  
  - 在 W4A8-INT8 路径中采用 PTX 9.4 的 `ldmatrix.s8.s4`，实现更快的 INT4→INT8 符号扩展（问题 #49529）。  
  - 为 SM90/SM100 新增可选的 `FlashTopK` 后端（`fused_mqa_topk_prefill`）——提升稀疏索引效率（PR #67149）。  
- 🚀 **模型特定优化**：  
  - 在 RTX PRO 4500 Blackwell Server Edition 上，使用 `VLLM_BATCH_INVARIANT=1` 调优的 Qwen2.5-0.5B 最高实现 **约 18% 的吞吐量提升**（PR #67079）。  
  - DeepSeek-V4 MXFP4 索引器 K 写入器在 gfx950 上融合为单个内核 → 降低启动开销（PR #56834）。  
  - GLM-5.3 未量化 BF16 MegaMoE 现使用 DeepGEMM 路径（PR #67040），实现无需量化即可高效推理。  
- ⚙️ **内存效率**：  
  - 修复 RDNA 上头尺寸 ≥96 时的 `ROCM_ATTN` 注意力后端问题（PR #62697），消除 GPU 故障。  
  - `FlashAttention` 后端不再每次调用时重新推导 K/V 缓存视图（问题 #64572），降低 CPU 开销。

---

### **5. 稳定性与回归问题**  
- ⚠️ **严重**：  
  - H200 上运行 Qwen3.5 FP8 时发生 CUDA Graph 捕获崩溃（v0.25.0 版本回归）——因过期的 UVA 视图导致非法内存访问（问题 #49311）。*修复待定。*  
  - 在机密计算模式（TDX 客户机）下出现静默垃圾输出，原因是在 V2 模型运行器中存在过期的 UVA 视图（问题 #57224）。*临时解决方案：禁用 `VLLM_USE_V2_MODEL_RUNNER`。*  
- ⚠️ **中等**：  
  - Gemma 4 MTP 在 CUDA Graph 捕获期间发生推测解码崩溃（`_suppress_token_ids` 未转换为设备张量）——修复已合并至 PR #66523。  
  - RDNA GPU 上头尺寸 ≥96 且非 16 块大小的 KV 块时出现错误注意力——已在 PR #62697 修复。  
  - 错误的 UTF-8 字符导致二次方解码延迟，卡住 `/health` 端点（问题 #63667）。

---

### **6. 对应用开发者的启示**  
- **针对 ROCm 与 Blackwell 优化**：若部署于 AMD MI355X 或 NVIDIA B200，建议优先使用最新 vLLM 构建版本，并启用 ROCm 专用内核（如 `FlashTopK`、融合 MXFP4）以获得最大吞吐量。  
- **规避推测解码陷阱**：在 ROCm 上使用 `speculative_decode` + `KV 卸载` 时需谨慎，确认与 `ROCM_ATTN` 兼容，并避免不支持的头/块尺寸。  
- **安全使用结构化输出**：Qwen3.5 中 `response_format=json_schema` 的问题已修复——请确保使用较新版本构建。  
- **尽早启用生命周期钩子**：随着 RFC #65545（插件生命周期钩子）上线，应在生产部署中规划优雅关闭与就绪检查机制。  
- **监控内存分析**：对于大值 `--max-num-batched-tokens`，请注意瞬态缓冲区（如 KDA 分块扫描）不会被包含在启动阶段的性能剖析中（问题 #54775）。  

> 💡 **技巧提示**：对于像 Qwen2.5-0.5B 这类批次不变模型，使用 `VLLM_BATCH_INVARIANT=1` 可在不同批处理场景下获得一致结果（参见 PR #67079）。

[GitHub Issues](https://github.com/vllm-project/vllm/issues) | [GitHub PRs](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest – 2026-11-12

---

### **1. 今日亮点**  
SGLang 生态系统持续成熟，**HiCache 与解耦预填充稳定性**取得显著进展，尤其在支持 Kimi-K3.1 及 L3 卸载一致性方面。v0.5.23 版本中识别出关键性能下降（在 Hopper 架构上每步解码延迟最高增加 45%），同时由于测试不稳定和基础设施问题，CI 可靠性仍是首要关切。目前 NPU 操作符接口的重大重构已上线，为未来硬件支持提供了更好的可维护性。

---

### **2. 发布与破坏性变更**  
过去 24 小时内无新发布或破坏性变更报告。  
⚠️ **注意**：近期发布的 v0.5.23 版本在 SM90 GPU（`DeepSeek-V4.1-Flash`）上引入了**严重解码性能退化**（并发 12 时每步延迟增加高达 45%），影响生产负载。建议用户**暂定为 v0.5.22**，直至修复版本发布。  
🔗 [Issue #49336: SM90 解码性能退化（v0.5.22 → v0.5.23）](https://github.com/sgl-project/sglang/issues/49336)

---

### **3. 新模型与硬件支持**  
- ✅ **Kimi-K3.1** 已在 `main` 分支实现完整首日支持，包括：  
  - 跨 DCP 的流水线并行（PP）  
  - 通过 Mooncake 实现的解耦预填充（PD）  
  - DFlash 规划解码  
  - HiSparse + 融合内核  
  🔗 [PR #48414: 添加 Kimi-K3.1 支持](https://github.com/sgl-project/sglang/pull/48414)  
- 🚀 **RTX 50 系列（SM12x）** 支持正在积极扩展：  
  - FlashInfer cuTile NVFP4 MoE 现已提议作为 SM12x 的默认运行器  
  - 集成进度由 Issue #49123 跟踪  
  🔗 [Issue #49123: moe: FlashInfer cuTile NVFP4 MoE 作为 SM12x 默认运行器](https://github.com/sgl-project/sglang/issues/49123)  
- ✅ **AMD ROCm** 进展：  
  - MORI EPv2 分派/合并现在在 AsyncLL 内核上运行以支持 TBO（双批重叠）  
  - Kimi-K3.1 支持同大小 DCP 角色间通过 MoRI 实现 PD  
  🔗 [PR #48902: AMD kimi-k3.1: 同大小 DCP 角色间通过 MoRI 实现 PD](https://github.com/sgl-project/sglang/pull/48902)

---

### **4. 性能与优化**  
- 🔧 **注意力优化**：FA3/FA4 树形注意力现已针对宽验证树和短祖先链进行优化 —— 减少元数据开销并简化调度逻辑。  
  🔗 [PR #49477: 优化 FA3/FA4 树形注意力](https://github.com/sgl-project/sglang/pull/49477)  
- 💡 **内核融合收益**：对于 Gemma4，`o_proj`/`down_proj` 的部分求和结果现在直接写入 AR 融合对称缓冲区，消除冗余拷贝。  
  🔗 [PR #50002: 将 o_proj/down_proj 部分结果写入 AR 融合缓冲区](https://github.com/sgl-project/sglang/pull/50002)  
- ⚙️ **内存效率**：HiCache 仅缓冲模式现在在插入遍历结束处终止备份链，减少不必要的存储写入。  
  🔗 [PR #49644: 在插入遍历结束处终止每个仅缓冲备份链](https://github.com/sgl-project/sglang/pull/49644)  
- 📈 **指标可见性**：新增 `sglang:num_good_requests_total` 指标，用于统计满足延迟 SLO 的请求，可通过 `/metrics` 接口直接追踪有效吞吐量。  
  🔗 [PR #45643: 统计满足延迟 SLO 的请求](https://github.com/sgl-project/sglang/pull/45643)

---

### **5. 稳定性与回归问题**  
🔴 **严重崩溃与缺陷**  
- **解码阶段调度器崩溃**：`scheduler_0` 在正常操作中崩溃，退出码为 -3（SIGQUIT）—— 很可能是底层 C++ 层的缺陷，无 Python 堆栈信息。  
  🔗 [Issue #49494: scheduler_0 在解码过程中因 SIGQUIT 崩溃](https://github.com/sgl-project/sglang/issues/49494)  
- **高负载下 HiCache 命中率下降**：在启用 HiCache + Mooncake 的多轮基准测试中，前缀缓存命中率从 87.4% 明显下降至约 60%，可复现。  
  🔗 [Issue #47481: L2/L3 高压下可复现的缓存命中率下降](https://github.com/sgl-project/sglang/issues/47481)  

🟡 **高优先级回归**  
- **v0.5.23 解码性能下降**：在 Hopper（H20-3e）架构上，8K–64K 上下文长度下，并发 12 时每步解码时间增加 33–45%。  
  🔗 [Issue #49336: SM90 解码性能退化（v0.5.22 → v0.5.23）](https://github.com/sgl-project/sglang/issues/49336)  
- **GLM-5.3-Flash 数据损坏**：v0.5.23 中，处理完 100 万 token 请求后引擎状态被破坏；后续所有请求均失败。v0.5.22 版本无此问题。  
  🔗 [Issue #48964: GLM-5.3-Flash 引擎状态在 100 万 token 请求后被破坏](https://github.com/sgl-project/sglang/issues/48964)  

🟢 **其他值得关注的问题**  
- **不稳定的 CI 基础设施**：#42752 问题下已有超过 190 条评论，记录反复出现的 CI 失败与测试不稳定性。  
  🔗 [Issue #42752: 不稳定测试与 CI 基础设施故障](https://github.com/sgl-project/sglang/issues/42752)  
- **NPU 操作符迁移**：旧版导入已替换为统一公开入口。  
  🔗 [PR #49995: 将 sgl-kernel-npu 调用迁移到公开操作符](https://github.com/sgl-project/sglang/pull/49995)

---

### **6. 对应用开发者的影响**  
- 若在 Hopper 平台使用高并发或长上下文场景，请**避免使用 v0.5.23** —— 该版本引入严重的解码延迟峰值。请暂时锁定至 v0.5.22，等待修复。  
- **利用新指标**：使用 `sglang:num_good_requests_total` 监控实际工作负载中的 SLO 达成情况，并据此优化代理吞吐量。  
- **准备接入 Kimi-K3.1**：其全栈支持使能高效智能体推理，结合 PD、HiCache 与 DFlash 技术。  
- **预期 CI 波动**：在 PR 审查中可能遇到不稳定的测试结果 —— 请谨慎使用 `/sglang-pr-babysit`。  
- **监控内存压力**：在持续负载下，HiCache 命中率可能下降；可考虑调整 `--hicache-host-memory-mode` 或批量大小。  

👉 **建议**：生产部署时，优先选择稳定版本，并在升级前针对自身工作负载进行验证。关注与 HiCache 一致性及调度器修复相关的 PR 动态。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 摘要 – 2026-11-12**

---

### **1. 今日重点**  
最新更新聚焦于推测解码和 MoE 路由的关键稳定性修复，新增对 TTS 模型的 WebGPU 支持，并优化了 CUDA 平台小行数矩阵的性能。关键 PR 包括修复 ROCm/HIP 上非确定性 Flash Attention 问题，以及增强 Adreno/ROCm 后端的内核支持。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未发布新的标记版本。但多个高优先级 PR 正在等待合并：
- **#32120**：禁止直接通过浏览器访问子 `llama-server` 实例（安全加固）。
- **#32119 / #32113 / #32115**：强制通过 `--allow-unauthenticated-tools` 显式启用工具/MCP 功能，限制 CORS 代理/媒体 URL 来自本地地址 — **影响部署安全配置**。
- **#32118**：文档和帮助文本中将“Web UI”重命名为“Llama Chat”；无行为变更。

> 🔗 [PR #32120](https://github.com/ggml-org/llama.cpp/pull/32120) | [PR #32119](https://github.com/ggml-org/llama.cpp/pull/32119)

---

### **3. 新模型与硬件支持**  
- ✅ **WebGPU**：为 Qwen3-TTS 和 PocketTTS 波形解码器新增 `COL2IM_1D` 支持 ([#31708](https://github.com/ggml-org/llama.cpp/pull/31708))。
- ✅ **Vulkan**：基于查询令牌数 × GQA 比率，启用基于 CM2（CoopMat2）的去量化 KV 优化 ([#31526](https://github.com/ggml-org/llama.cpp/pull/31526))。
- ✅ **CUDA**：通过 W8A16 和内建函数支持 FP8，适用于小批量、少行矩阵 ([#28413](https://github.com/ggml-org/llama.cpp/pull/28413), [#31959](https://github.com/ggml-org/llama.cpp/pull/31959))。
- ✅ **OpenCL**：为 Adreno X1 设备新增二进制内核 `kernel_gemm_noshuffle_q4_0_f32_32b_trans_ila_a7_bin` ([#30947](https://github.com/ggml-org/llama.cpp/pull/30947))。

---

### **4. 性能与优化**  
- **CUDA**：采用 MMVF 处理行数较少的 BF16 矩阵（如 Qwen4exp 超连接），在批量大小 2–24 时提升 SM 利用率 ([#31959](https://github.com/ggml-org/llama.cpp/pull/31959))。
- **CUDA**：新增针对 2–24 列的量化矩阵乘法内核（`MMQ`），提升推测解码吞吐量 ([#31533](https://github.com/ggml-org/llama.cpp/pull/31533))。
- **Vulkan**：优化 `iq3_xxs` 量化下的 `mul_mat_vec` 内核 ([#30904](https://github.com/ggml-org/llama.cpp/pull/30904))。
- **OpenCL**：按头尺寸分片融合 KQ 注意力阶段，支持最大头尺寸 512 ([#30249](https://github.com/ggml-org/llama.cpp/pull/30249))。
- **通用**：通过避免未使用图元数据页的初始化，降低主机内存开销 ([#32043](https://github.com/ggml-org/llama.cpp/pull/32043))。

---

### **5. 稳定性与回归问题**  
今日报告高严重性问题：
- **[#25618]**：推测解码（draft-mtp/draft-dspark）在**量化目标**（Q4_K_M）上产生与原生结果不同的输出，但在 BF16 上一致 — **对生产推理正确性至关重要**。
- **[#29092]**：HIP/ROCm 上融合门控 Delta Net 在请求间传递递归状态 → **后续生成中出现早期提示的原文泄露** — **对 LLM 代理构成高风险**。
- **[#29774]**：CPU 上的 Flash Attention 因 F16 累加器而非 F32 导致溢出至 `inf`/`NaN` — 影响模型可靠性。
- **[#31734]**：ARM CPU 上的 F16 点积在无 SVE 时以 F16 累加，导致溢出至 `inf` — 影响 M4 Max Macs。
- **[#31111]**：gfx1200 HIP/ROCm 平台上，确定性 F16 下 `MUL_MAT` 产生错误结果 — **精度回归**。

> 🔗 [Issue #25618](https://github.com/ggml-org/llama.cpp/issues/25618) | [Issue #29092](https://github.com/ggml-org/llama.cpp/issues/29092) | [Issue #29774](https://github.com/ggml-org/llama.cpp/issues/29774)

---

### **6. 对应用开发者的启示**  
- **在量化模型上使用推测解码需谨慎** — 可能出现结果偏差；建议优先使用 BF16 或进行充分测试。
- **避免在未启用 `--allow-unauthenticated-tools` 的情况下使用 `--tools-runtime`** — 近期变更强化了访问控制。
- **面向边缘/移动端部署时**，优先选用 OpenCL/Adreno 内核及 WebGPU TTS 支持以获得更低延迟。
- **监控内存使用情况** — `repeat_last_n` 与 `dry_penalty_last_n` 可因无界缓冲区分配导致 OOM 问题 ([#29494](https://github.com/ggml-org/llama.cpp/issues/29494))。
- **若在 AMD ROCm 上部署**，请避开 `gfx1151` 直至 `SOLVE_TRI` 问题修复 ([#27557](https://github.com/ggml-org/llama.cpp/issues/27557))；`gfx1201` 仅在验证 FA 分发阈值后方可使用 ([#28867](https://github.com/ggml-org/llama.cpp/issues/28867))。

> ✅ **建议**：在生产使用前，升级至最新 master 并针对目标量化方案验证推测解码行为。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama 消息简报 – 2026-11-12**

---

### **1. 今日重点**  
Ollama 项目持续强化核心推理引擎，修复了关键的 GPU 内存计数问题、AMD 硬件上 Vulkan 后端的稳定性问题，以及推测解码的遥测功能。主要的合并请求包括解决多 GPU 环境下显存报告错误的问题（#19632），以及在 MLXRunner 中增强对批量推测验证的支持（#19663）。与此同时，社区集成范围进一步扩大，新增 Buddy、Netpals 和 RigMatch 等工具，反映出生态系统采用率的持续增长。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未检测到新版本发布或破坏性变更。*  
不过，正在进行的工作包括弃用旧版 `llama.cpp` 兼容补丁（#18882），未来在启动时将要求迁移较老的 GGUF 模型。使用自定义或过时模型格式的开发者应为未来的运行时行为变化做好准备。

---

### **3. 新模型与硬件支持**  
- **AMD Radeon 780M / RX 6800 XT Vulkan 回归问题**：多个问题报告（#17748, #18557）表明，由于特定 AMD 驱动程序（v32.0.21045.5002）存在内存报告不足或访问违规（`0xc0000005`）导致大模型无法正常运行，出现 `ErrorDeviceLost` 错误。这些问题并非功能新增，而是当前存在的稳定性风险。
- **MLXRunner 增强**：`mlxrunner` 后端现已支持批量推测验证（#19663），在并发负载下显著提升采用 MTP/DFlash 架构的模型吞吐量。
- **Claude Desktop 网关集成**：新提交的 PR（#19657）实现了通过 Ollama 主监听器提供 Claude Desktop 网关服务，无需额外监听器即可实现统一的 API 路由。

---

### **4. 性能与优化**  
- **推测解码指标**：PR #19368 增加了对每请求生成和接受令牌的追踪，使性能分析不再仅依赖接受率，对调优草稿深度和成本效率至关重要。
- **显存计数与 GPU 分割**：PR #19632 修复了多个导致错误驱逐、加载失败及设备利用率低下的严重缺陷，影响 >30B 的模型及混合注意力架构。
- **HTTP 连接复用**：PR #18397 在 `llama-server` HTTP 客户端中禁用了 `DisableKeepAlives`，通过复用空闲连接降低了 `/api/embed` 操作的开销。
- **Windows iGPU 内存管理**：PR #19636 防止在 Windows 上使用 AMD iGPU 时出现过度占用固定主机内存的问题，解决了在集成显卡上加载大型模型（>½ 系统内存）时的失败情况。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 修复合并请求？ | 链接 |
|---------|------|--------|--------|------|
| 严重 | AMD RX 6800 XT（Vulkan）上发生访问违规（`0xc0000005`） | 已打开 | ❌ | [#18557](https://github.com/ollama/ollama/issues/18557) |
| 高 | AMD Radeon 780M Vulkan 后端（≥0.32.10）出现 `ErrorDeviceLost` | 已关闭 | ✅ | [#17748](https://github.com/ollama/ollama/issues/17748) |
| 高 | 长回复导致模型质量下降，直至卸载后恢复（如 `deepseek-r1`、`phi3.5` 等） | 已打开 | ❌ | [#19457](https://github.com/ollama/ollama/issues/19457) |
| 中 | `-v` 标志显示冗余“警告”信息 | 已关闭 | ✅ | [#19613](https://github.com/ollama/ollama/issues/19613) |
| 低 | `qwen3.5` 解析器错误解析 JSON 工具调用 | 已打开 | ❌ | [#19650](https://github.com/ollama/ollama/issues/19650) |

> 🔴 *AMD Vulkan 后端的严重回归问题仍处于开放状态，影响高端消费级 GPU 的生产可用性。*

---

### **6. 对应用开发者的启示**  
- **使用 `--verbose` 或监控 API 响应**以获取详细的推测解码指标（草稿/接受令牌数），从而优化提示工程与草稿策略。
- **若在 Windows 上使用当前驱动程序，请避免通过 Vulkan 在 AMD iGPU 上加载大型模型**；可考虑切换至 CPU 回退或升级至支持 ROCm 的系统。
- **更新部署脚本**以应对在 AMD 硬件上可能出现的 `ErrorDeviceLost` 或 `0xc0000005` 崩溃——尤其是在跨多模型扩展推理时。
- **利用即将上线的 Claude Desktop 集成**，通过 `/api/claude` 端点实现谷歌 AI 生态系统中的统一代理工作流。
- **谨慎使用包含特殊字符的 Modelfile glob 模式**（例如 `[Q4]`）；建议使用绝对路径或清理目录名，以避免意外文件解析错误（#19628）。

👉 *对于构建代理的开发者：预计从 MLXRunner 的批量推测验证中获得更高的并发性和更低延迟，但需注意长对话中的上下文处理可能存在已知漂移问题，务必进行验证。*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

### **LiteLLM 摘要 — 2026-11-12**

#### **1. 今日亮点**  
LiteLLM 团队发布了 **v1.110.0-rc.2**，这是系列快速更新中的最新版本，重点提升稳定性、成本计算准确性以及模型翻译保真度。主要改进包括修复 Anthropic `/v1/messages` 中的令牌计数问题，优化 Ollama 与 Bedrock 集成中的工具调用处理，以及增强团队内按模型预算管理的支持——这对生产级 AI 网关至关重要。

#### **2. 发布与破坏性变更**  
- **v1.110.0-rc.2**、**v1.109.1**、**v1.108.6**、**v1.106.9** 和 **v1.106.8** 已发布，通过 **Cosign 签名的 Docker 镜像**（密钥：`e82a3c6`）加强安全防护。所有用户应使用以下命令验证镜像完整性：
  ```bash
  cosign verify \
    --key https://raw.githubusercontent.com/BerriAI/litellm/e82a3c646908ba0a6ee0beddc4310d7a6cac4065/cosign.pub \
    ghcr.io/berriai/litellm:v1.106.8
  ```
  🔗 [验证发布签名](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065)

> ⚠️ **注意**：v1.110.0-rc.2 为发布候选版；除非已测试，否则请勿用于生产环境。`lts/1.108.x` 分支已合并关键补丁（如 #51340），支持 Gemini 成本追踪与上下文窗口检查。

#### **3. 新模型与硬件支持**  
- ✅ **Fal.ai 视频端点** 现在可通过 `output_cost_per_video_clip` 实现 **按视频片段时长/分辨率的分段计价**（#51299）。  
- ✅ **Magistral 推理模式** 已在 LiteLLM 的翻译层中实现原生支持（#51329），可在各提供商间完整启用 `reasoning_effort` 与严格校验。  
- ✅ **Fireworks AI 路由器**（如 `glm-5p3-us`）现在能正确路由至账户级路由路径，避免因 404 错误失败（#51323）。  
- ✅ **Ollama Chat** 工具调用的 schema 可见性已在 UI 中恢复（#36463）。

#### **4. 性能与优化**  
- **令牌计数优化**：修复模型名称路径遍历中的二次复杂度问题（`#50412`）——降低长模型名称下的延迟。  
- **使用模式预初始化**：防止高吞吐启动时出现竞争条件（`#51310`）——提升突发负载下的可靠性。  
- **CI/CD 性能**：减少 GitHub Actions 缓存抖动（`#51343`）——平均将 PR 测试周期提速约 40%。  
- **速率限制效率**：支持跨团队动态借用闲置容量（`#51328`）——在不过度配置的前提下提升资源利用率。

#### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 修复状态 | 链接 |
|--------|------|----------|------|
| 🟡 高 | 当 `custom_llm_provider=anthropic` 且定价不匹配时，`response_cost` 为 null | 待处理 | [#47675](https://github.com/BerriAI/litellm/issues/47675) |
| 🟡 高 | 流式输出中即使无提供方信号也返回 `finish_reason="stop"` | 待处理 | [#46542](https://github.com/BerriAI/litellm/issues/46542) |
| 🟡 高 | 若模型不在目录中，则丢失按模型配置的工具 | 待处理 | [#48145](https://github.com/BerriAI/litellm/issues/48145) |
| 🟢 中 | Azure 响应会从前置 `additional_tools` 中转发空命名空间描述 | 待处理 | [#36366](https://github.com/BerriAI/litellm/issues/36366) |
| 🟢 中 | v1.108.0 升级后，旧客户端在 MCP `tools/list` 上卡死 | 待处理 | [#50065](https://github.com/BerriAI/litellm/issues/50065) |

> ✅ **今日已合并修复**：  
> - 令牌计数现在包含服务端工具历史记录（#51334）  
> - Bedrock 服务层级错误现在返回 400 而非静默失败（#50516）  
> - SDK 重放与 JSON 指令已转发至主分支（#51320）

#### **6. 对应用开发者的意义**  
- **成本追踪更可靠**：请确保你的 `model_prices_and_context_window.json` 与实际提供方定价一致，尤其是 `custom_llm_provider=anthropic` 场景。  
- **流式行为持续改善**：不要假设 `finish_reason="stop"` 就代表完成——需根据提供方信号进行验证。  
- **工具调用更健壮**：若使用非目录内模型（如 `nano-gpt/z-ai/glm-5.3-flash`），请在配置中显式定义 `tools` 以防止丢失。  
- **升级需谨慎**：v1.110.0-rc.2 引入了速率限制与成本计算的变更——部署至生产前务必充分测试。  
- **推荐使用 LTS 分支保障稳定**：对于生产系统，建议暂留 `lts/1.108.x`，待 v1.110.0 稳定后再迁移。

🔧 **建议**：使用最新 RC 版本审计你的成本追踪与工具逻辑，并仅在确认 Redis 配置可靠的情况下启用 `LITELLM_TPM_TOKEN_RESERVATION_ENABLED=true`。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-12**

---

### **1. 今日亮点**  
Unsloth v0.1.917-beta 带来显著性能提升，并引入 **Qwen3.8-27B 动态 v3.1 GGUF 模型**，支持高效本地推理。本次更新通过更流畅的玻璃化渲染、重构代码块、思维界面（Thinking UI）以及新增功能（如 HTML/PDF 聊天导出、图像生成、编程代理），大幅增强 UI 精确度。

---

### **2. 发布与破坏性变更**  
- **v0.1.917-beta**：  
  - 为 Qwen3.8-27B 引入 **动态 v3.1 GGUF**，专为本地推理优化，内存占用更低，吞吐量更高。  
  - 重构 **思维界面（Thinking UI）**、**HTML/PDF 导出**、**图像生成** 及 **编程代理** 工作流。  
  - 修复内容包括更流畅的玻璃化渲染、增强的代码块样式，以及模型加载期间的稳定性改进。  
  🔗 [GitHub Release v0.1.917-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.917-beta)

---

### **3. 新模型与硬件支持**  
- **Qwen3.8-27B** 现已通过动态 v3.1 GGUF 完全支持本地推理。  
- **Kromoss-GGUF**（MOSS-Image 衍生品）加入 Studio 支持列表——若提供 `family_name` 覆盖，则可被接受。  
- **AMD NPU（FastFlowLM 通过 Lemonade）**：  
  - 全功能逐步上线：电源模式、预填充分块长度、图像预缩放、基于可用内存自动调整上下文长度。  
  - 设置 > 存储 现可追踪并管理通过 Lemonade 后端的 NPU 模型。  
  🔗 [PR #17519](https://github.com/unslothai/unsloth/pull/17519), [PR #17510](https://github.com/unslothai/unsloth/pull/17510), [PR #17511](https://github.com/unslothai/unsloth/pull/17511), [PR #17535](https://github.com/unslothai/unsloth/pull/17535)  
- **EXL3（ExLlamaV3）后端** 已添加：支持 2/3/4/6/8 位量化及 MoE 模型（非 Transformer 兼容）。  
  🔗 [PR #7115](https://github.com/unslothai/unsloth/pull/7115)

---

### **4. 性能与优化**  
- **动态 v3.1 GGUF** 相较于旧版本，在内部基准测试中降低内存压力并减少解码延迟约 18%。  
- **NPU 上下文尺寸自适应**：根据可用 GPU/RAM 自动调整上下文长度（预留空间更少），在 48GB+ 系统上提升利用率。  
- **Studiobench CI 修复**：残差稳定器填充解决了线程重新打开时的窗口式 pin 检查失败问题。  
  🔗 [PR #17571](https://github.com/unslothai/unsloth/pull/17571)  
- **模型加载批处理优化**：改进后台 diffusers 避免 MiniMax-H3-Image 启动期间的竞争条件。  
  🔗 [PR #17569](https://github.com/unslothai/unsloth/pull/17569)

---

### **5. 稳定性与回归问题**  
- **严重**：`DiffusionGemma` 在 Studio 中忽略所选上下文长度与并行设置，尽管界面显示为 24,576，仍以 `--maxtok 4096` 运行。  
  🔗 [Issue #17558](https://github.com/unslothai/unsloth/issues/17558) *(开放中，暂无修复 PR)*  
- **高**：AMD ROCm 7.14 / MI300X 因 `_scaled_dot_product_flash_attention_backward` 中的步长断言失败而无法运行——需启用 MATH 回退。  
  🔗 [Issue #17548](https://github.com/unslothai/unsloth/issues/17548) *(开放中，可在 gfx942 上复现)*  
- **中等**：Unsloth Desktop 在收到 `X-Forwarded-Host` 头部时返回 `404 Not Found`，导致 Cloudflare Tunnel + Access 认证流程中断。  
  🔗 [Issue #17420](https://github.com/unslothai/unsloth/issues/17420) *(已关闭；存在临时解决方案)*  
- **低**：视频上传上限为 64MB，尽管模型支持更大输入。  
  🔗 [Issue #17062](https://github.com/unslothai/unsloth/issues/17062) *(开放中，请求扩展)*

---

### **6. 对应用开发者的意义**  
- **本地 LLM 部署** 因 Qwen3.8-27B 与动态 v3.1 GGUF 的引入而显著降低门槛——非常适合私有化、低延迟推理场景。  
- **多后端灵活性**：随着 EXL3 与 AMD NPU 支持日趋成熟，开发者现在可轻松适配多样硬件（CPU/GPU/NPU），无需重写推理流水线。  
- **代理构建者**：新增编程代理与子代理工具（`spawn_subagent`），支持跨外部服务（如 OpenRouter）构建多代理工作流，实现模块化推理链。  
- **UI/UX 一致性**：修复模型设置错位（如 DiffusionGemma 上下文大小）对可靠代理行为至关重要——请关注 issue #17558 以确保生产环境安全。  
- **自定义集成**：可通过 `family_name` 覆盖或使用 `studio/backend/core/coding_traces/session_to_trace.py` 从保存会话中构建训练数据。  
  🔗 [PR #17220](https://github.com/unslothai/unsloth/pull/17220)

> ✅ **建议**：对于高吞吐推理，优先选择动态 v3.1 GGUF；追求前沿 NPU 加速，可通过 PR #17519 测试 Lemonade 堆栈。在自定义连接中避免使用 `--maxtok` 默认值，应改用按模型设定的上下文限制。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*