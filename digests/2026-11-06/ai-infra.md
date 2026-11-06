# AI 基础设施日报 2026-11-06

> 生成时间: 2026-11-06 02:47 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-11-06**

---

### **1. 生态概览**  
2026年末，AI基础设施领域呈现出高性能、低层级推理引擎与统一应用层网关之间的显著分化。vLLM 和 SGLang 在内核级优化与推测性解码创新方面处于领先地位，而 Ollama 与 LiteLLM 则聚焦开发者体验和多提供商编排。Unsloth 凭借其深度集成的 UI/UX 与微调工作流脱颖而出，标志着向端到端智能体开发平台的成熟演进。MoE、混合 GDN 以及流式 ASR 模型的兴起，凸显了在异构硬件上对灵活、可扩展且高效的部署栈日益增长的需求。

---

### **2. 活跃度对比**

| 项目       | 开放问题（最近24小时） | 合并的PR（最近24小时） | 发布状态       |
|------------|------------------------|------------------------|----------------|
| **vLLM**   | 8                      | 7                      | 无             |
| **SGLang** | 12                     | 5                      | 无             |
| **llama.cpp** | 5                   | 6                      | 补丁发布（vulkan, llama-server） |
| **Ollama** | 9                      | 3                      | 无             |
| **LiteLLM** | 7                     | 4                      | **v1.108.1**（安全更新 + 破坏性变更） |
| **Unsloth** | 10                   | 6                      | 测试版（`v0.1.915-beta`） |

> ✅ *注：LiteLLM 在发布速度上领先，推出安全导向更新；尽管无新版本，vLLM 与 Unsloth 内部活动依然强劲。*

---

### **3. 模型支持竞赛**

| 新模型 / 架构                     | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------------------|------|--------|-----------|--------|---------|---------|
| **NVIDIA Nemotron 3.5 ASR 流式** | ✅（实验） | ❌     | ❌        | ❌     | ❌      | ❌      |
| **DeepSeek-V4.1（Flash, MoE）**  | ✅（部分） | ✅（支持DFlash草稿） | ❌        | ✅     | ❌      | ✅      |
| **Qwen3.5/3.8-Flash-Next**       | ✅（FP16/BF16, FlashInfer） | ✅（ROCm/Metal/AMD） | ✅（MoE缓存） | ✅（MLX） | ❌      | ✅      |
| **Hindsight `hs-decide-1-flash`** | ❌     | ❌     | ❌        | ✅     | ❌      | ❌      |
| **Lumina-Image-2.0**             | ❌     | ❌     | ❌        | ❌     | ❌      | ✅      |
| **GLM-5.3-Flash（MoE）**         | ❌     | ✅（Ascend, ROCm） | ❌        | ❌     | ❌      | ❌      |

> 🏆 **胜出者**：**SGLang** — 最快支持 DFlash 草稿与跨平台 MoE 支持。  
> 🥈 **亚军**：**vLLM** — 在 GPU 特定优化（FlashInfer, SM120）及大模型流水线分片方面表现最强。

---

### **4. 性能前沿**

| 优化重点              | vLLM                              | SGLang                             | llama.cpp                          | Ollama                         | LiteLLM                            | Unsloth                           |
|------------------------|-----------------------------------|------------------------------------|------------------------------------|-------------------------------|------------------------------------|-----------------------------------|
| **KV 缓存与内存**      | ✅ 就地 FlashInfer 复用，MoE 填充优化 | ✅ TMA 复制，大页预加载 | ✅ 混合 LRFU/MQ 缓存（ClassLRU） | ⚠️ 静默截断问题               | ✅ 提示词缓存亲和性               | ✅ 主机预留感知的分块压缩         |
| **批处理与并行**       | ✅ 流水线并行（零SM拷贝），R3 路由 | ✅ 滑动窗口 KV 保留 | ✅ Flash attention tile 打包 | ✅ 并行请求已恢复           | ✅ 流式开销追踪                   | ✅ CPU 后端修复（PP模式）         |
| **量化与内核**         | ✅ FlashInfer + GDN + TRT-LLM 融合 | ✅ QK-norm+RoPE 融合（ROCm） | ✅ IQ4_NL, bf16 x bf16 内核 | ⚠️ 缺少 q4_K_M 支持       | ✅ 原生结构化输出（Bedrock）       | ✅ FP8 LoRA 测试（早期）          |
| **推测性解码**         | ✅ 支持 DFlash 草稿（通过 PR #65972） | ✅ 完整支持 DFlash/DSpark 草稿服务 | ⚠️ 输出非确定性（Q4_K_M） | ❌ 尚未支持                 | ✅ 视频生成（OpenRouter）         | ✅ 移除扩散训练同步逻辑           |

> 🔥 **顶尖表现者**：  
> - **vLLM** 在 **低延迟批处理与 MoE 效率** 上占据主导。  
> - **SGLang** 在 **推测性解码成熟度与分布式 MoE 支持** 方面领先。  
> - **Unsloth** 在 **集成微调与扩散训练流水线** 方面展现出巨大潜力。

---

### **5. 层级定位**

| 项目       | 主要层级                  | 核心差异化                                      |
|------------|----------------------------|--------------------------------------------------|
| **vLLM**   | **推理引擎**               | 单卡性能最高；专为大规模、高吞吐部署优化         |
| **SGLang** | **推理引擎 + 网关**        | 统一推测解码 + MoE + 分布式执行；适用于智能体系统 |
| **llama.cpp** | **本地运行时 / 嵌入式**    | 跨平台、轻量级；在 Apple Silicon、Vulkan、WebGPU 上表现优异 |
| **Ollama** | **网关 / 本地运行时**      | 开发者优先的 CLI + 模型库；连接本地与云端推理     |
| **LiteLLM** | **API 网关 / 编排器**      | 多提供商抽象，支持结构化输出与成本控制           |
| **Unsloth** | **智能体平台 / 微调器**    | 端到端 UI/UX + 微调 + 扩散；面向自主智能体         |

> 💡 **战略洞察**：该生态正呈现两极分化——**工程师**选择 **vLLM/SGLang** 追求极致性能；**开发者**采用 **Ollama/LiteLLM** 以求简洁；**智能体构建者**则倾向 **Unsloth** 以获得一体化工作流。

---

### **6. 趋势信号**

#### 🔹 **关键行业趋势提炼**
1. **MoE 已成主流** —— vLLM、SGLang 与 Unsloth 均原生支持，具备高级路由（R3）、专家卸载与滑动窗口保留能力。
2. **推测性解码正在进入生产环境** —— SGLang 在完整 DFlash 草稿支持上领先；vLLM 通过 NVLink 实现零 SM 拷贝。
3. **硬件多样性加速演进** —— AMD ROCm、Intel XPU、Apple MLX，甚至移动 GPU（Pixel 11 Pro）均被纳入支持范围。
4. **安全与完整性日益重要** —— LiteLLM 的 cosign 签名验证表明对可信部署链的需求持续上升。
5. **UI/UX 成为竞争壁垒** —— Unsloth 的玻璃主题、长对话延迟修复与 Studio 稳定性，反映出用户界面可靠性的重要性不断提升。

#### 🔹 **开发者应关注事项**
- **在 Blackwell（SM120）上避免使用 `enable_adaptive_verification`**，直至补丁发布 —— 对 DeepSeek-V4.1 用户至关重要。
- **使用 `VLLM_RELOAD_MODE=direct` 进行 RL 微调** —— 现已安全且支持零填充。
- **监控 CI 健康状况** —— SGLang 的不稳定性测试与 Ollama 的 Vulkan 崩溃可能影响部署进度。
- **采用原生结构化输出（LiteLLM + Bedrock）**，可降低 20–40% 的延迟与成本。
- **提前准备 iGPU 约束** —— Unsloth 的内存映射 GGUF 加载需谨慎规划主机内存。

> ✅ **核心结论**：未来属于**栈无关、安全、智能体就绪**的基础设施。应优先考虑**稳定性而非新颖性**，尽早验证非 NVIDIA 后端。  

*编撰：AI基础设施分析师 | 2026-11-06*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-11-06

---

### **1. 今日亮点**  
vLLM 项目在性能优化与跨平台支持方面持续保持快速进展，重点 PR 聚焦于 GDN 模型的 FlashInfer 集成以及 MoE 和 KV 缓存系统中的内存管理改进。值得注意的是，一个关键缺陷修复解决了在 SM120 GPU 上使用 `enable_adaptive_verification` 时 `DeepSeek-V4.1` 出现崩溃的问题——此问题影响高端 Blackwell 部署场景。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告任何内容。*  
未发布新版本或引入破坏性 API/配置变更。关于 `VLLM_RELOAD_MODE=direct`（跟踪 #54477）的持续工作仍处于实验阶段，但正朝着默认启用方向推进。

---

### **3. 新模型与硬件支持**  
- **模型支持**：  
  - 通过 #47455 新增对 **NVIDIA Nemotron 3.5 ASR 流式处理**（`nemotron-3.5-asr-streaming-0.6b`）的实验性支持。  
  - 扩展 `DeepSeek-V4.1` 的流水线阶段划分（PR #63106），实现大规模推理下的灵活模型并行。
- **硬件与后端**：  
  - **ROCm/Metal/AMD**：针对 gfx950 / MI355X 平台对 `Qwen3.8-Flash-Next` 与 `Qwen3.8-2.4T-A95B` 进行积极优化（问题 #57149, #59575）。  
  - **Intel XPU**：新 PR #64818 切换至 `xccl2` 后端用于分布式通信，为弃用旧版 `xccl` 做准备。  
  - **CPU**：持续改进 V1 调度器与异步 KV 离线（例如 #62532）。

---

### **4. 性能与优化**  
- **FlashInfer 与内核优化**：  
  - PR #64498：在缓存池中启用 **FlashInfer 预填充状态的原地读写**，适用于 Qwen3.5/3.8 及 Qwen3-Next，使纯预填充批次中每层减少 4–5 次内核调用。  
  - PR #65896：引入 **可选的 CUDA 复制引擎传输机制以支持流水线并行**，可在 NVLink 上实现秩间零 SM 复制——降低竞争并提升吞吐量。  
- **MoE 与专家并行**：  
  - PR #65972：将 DP 填充行排除在 TRT-LLM 单体 MoE 专家之外，减少解码过程中的非必要内存压力。  
  - PR #61897：在 Model Runner V2 中新增对 **路由专家捕获（R3）与流水线并行结合** 的支持——对大型 MoE 模型中的高效专家级追踪至关重要。  
- **分词器与内存**：  
  - PR #65674：仅浅拷贝分词器后端——消除线程池中的冗余深拷贝，降低启动开销。

---

### **5. 稳定性与回归问题**  
- **严重崩溃**：  
  - **漏洞 #62383**：单个预填充请求超过 262,144 个 token 时，在 `Qwen4Exp`（v0.32.0+nightly）上引发 `CUDA illegal memory access` 错误导致引擎崩溃。已在 v0.31.1 修复；确认为近期版本的回归问题。[GitHub](https://github.com/vllm-project/vllm/issues/62383)  
  - **漏洞 #63343**：`enable_adaptive_verification` 在 SM120（Blackwell）上被拒绝，因设备查询镜头限制仅支持 SM90/SM100。影响最新硬件上的 DeepSeek-V4.1 用户。[GitHub](https://github.com/vllm-project/vllm/issues/63343)  
- **正确性问题**：  
  - **漏洞 #52568**：在 H20 上运行 `Gemma-4 hybrid-GDN + dynamic LoRA` 时输出包含 NaN（"!" 令牌），由 punica Triton 内核缺陷引起。[GitHub](https://github.com/vllm-project/vllm/issues/52568)  
  - **漏洞 #32588**：长音频（>30 秒）转录结果中，每块段落的时间戳偏移约 0.5 秒。[GitHub](https://github.com/vllm-project/vllm/issues/32588)  
- **正在修复中**：  
  - PR #66010 解决了 DeepSeek-V4.1-Flash 中的 MoE 排列索引损坏问题，该问题会导致权重无声错位。[GitHub](https://github.com/vllm-project/vllm/pull/66010)

---

### **6. 对应用开发者的启示**  
- **在大模型上谨慎使用 v0.32.0+ 版本**——特别是 `Qwen4Exp` 与 `DeepSeek-V4.1`，因其在长预填充条件下存在已知崩溃风险。若稳定性为首要考虑，请锁定至 v0.31.1。  
- **在强化学习微调工作流中采用直接权重重载（`VLLM_RELOAD_MODE=direct`）**：现已可安全启用（#66002），支持零填充重置（#64352）和静默路径拒绝。  
- **针对 AMD/ROCm 优化**：如目标为 MI355X/gfx950 平台，请关注 PR #57149 与 #59575——后续补丁中预计会有显著性能提升。  
- **在适用场景下启用 FlashInfer 预填充状态复用**（如 Qwen3.5/3.8），以减少高吞吐场景下的内核开销。  
- **在修复前避免在 SM120 上使用 `enable_adaptive_verification`**——尽管新驱动中已可用，但当前仍被阻断。

> 🔗 *探索完整路线图：[vLLM Q4 2026 路线图](https://github.com/vllm-project/vllm/issues/61024)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 消息简报 – 2026-11-06**

---

### **1. 今日重点**  
SGLang 项目持续推进 MoE 与推测解码能力的演进，关键 PR 已支持 DFlash 家族草稿服务（#48763）以及 DFLASH 草稿的滑动窗口 KV 保留（#48785）。在 CI 稳定性与内存管理等核心基础设施方面的工作也在进行中，包括对 `common.py` 的重大重构（#48781），以及针对 Xeon 与 H20 平台的不稳定性测试和 OOM 问题的持续修复。

---

### **2. 发布与破坏性变更**  
*无*  
过去 24 小时内未发布新版本或破坏性变更。

---

### **3. 新模型与硬件支持**  
- **DFlash/DSpark 草稿**：PR #48763 增加对 DFlash 与 DSpark 家族中 MoE FFN 草稿的服务支持，实现这些模型的完整推测执行。  
- **Intel XPU（分页专家）**：RFC #46520 提出通过前瞻专家调度（LES）及 SSD 层卸载支持 iGPU MoE，目标是实现单 GPU 可扩展性。  
- **Ascend A3/A5**：PR #43305 实现了 GLM-5.3-Flash 在 Ascend A3/A5 硬件上的支持，进一步拓展了 NPU 后端覆盖范围。  
- **AMD ROCm**：PRs #47052（Qwen3 QK-norm+RoPE 融合）、#46486（GLM-5.3 解码 MLA 作为 Gluon 内核运行于 gfx950）、#48505（DSA DCP 路由按线缆字节）提升了 AMD 平台的性能与兼容性。

---

### **4. 性能与优化**  
- **DeepSeek-V4 预填充**：问题 #33422 指出在 SM120（4× RTX PRO 6000 Blackwell）上与 vLLM/Marlin 相比吞吐量存在约 5–6 倍差距；调优指导待发布。  
- **GLM-5.3-Flash**：追踪问题 #45373 及 PRs #47052 / #46486 聚焦于 Hopper（SM90）与 MI355X（gfx950）的内核优化，旨在缩小性能差距。  
- **HiCache 与内存**：PR #48786 引入统一布局的 TMA 复制内核；PR #27267 为主机内存池增加大页预加载模式。  
- **扩散模型**：PRs #48122 与 #48656 优化 MiniMax-H3/Ref2VA 缓存与 ComfyUI 检查点加载，减少冗余计算与依赖加载。

---

### **5. 稳定性与回归问题**  
- **CI 不稳定**：问题 #42752 报告 `PR Test Base/Extra` 中反复出现的 CI 失败，阻碍了 PR 验证；已触发 177 条评论，目前正积极调查。  
- **Xeon OOM**：问题 #48411 显示在 SPR socket0 服务器（`sglang-spr08/18/19`）上进行 KV 分配时持续出现 OOM 杀进程。  
- **Mooncake 失败**：问题 #48206 与 #45849 报告在 8×H20 运行器上进行 PD 分离测试时出现“内存区域未注册”错误及与 RDMA 相关的崩溃。  
- **模型崩溃**：  
  - 问题 #37524 跟踪多个 GLM-5.3-Flash 的问题，包括因 `'residual' KeyError` 导致的启动崩溃（#36653）与 DPC 崩溃（#38207）。  
  - 问题 #37892 报告在长上下文预填充期间，DSA 索引器 top-k 内核出现非法内存访问。  
- **输出错误**：问题 #38143 确认 MiniMax-M3 W4A16 在 Triton 稀疏路径下输出全为 NUL —— 已确认可复现且持续存在。

> ✅ *部分回归问题已有修复 PR*：  
> - #48446 修复 sampling_params 共享缺陷  
> - #48492 改进 Rust-server DP 关闭同步  
> - #46830 移除发散急切路径中的主机同步  

---

### **6. 对应用开发者的启示**  
- **推测解码**：随着 DFlash 草稿支持正式落地，开发者可启用基于草稿的推理以降低延迟，适用于 Muse-Spark-Open 等模型。使用 `--speculative-algorithm DFLASH` 时需谨慎——请确保草稿模型兼容性。  
- **硬件多样性**：SGLang 正迅速突破 NVIDIA 限制——未来版本将提供更稳定的 Intel XPU、AMD ROCm 与 Ascend 支持。建议尽早验证部署在非 CUDA 后端的表现。  
- **稳定性风险**：若使用 EAGLE/MTP + 混合 GDN 模型（问题 #29857）或 MiniMax-M3（问题 #38143），请避免在生产环境使用 `v0.5.14`/`v0.5.18` 版本，推荐使用 `main` 或最新 nightly 构建。  
- **内存管理**：若在大规模系统（如 SPR 服务器）上部署，请监控 KV 分配阶段的 OOM 情况——考虑调整 `max_num_batched_tokens` 或启用大页内存池（PR #27267）。  
- **CI 健康状态**：由于 CI 不稳定，预计 PR 合并将出现延迟——提交关键变更前，请先检查 #42752 的状态。

👉 [GitHub: SGLang 问题列表](https://github.com/sgl-project/sglang/issues) | [PR 列表](https://github.com/sgl-project/sglang/pulls)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 摘要 – 2026-11-06**

---

### **1. 今日亮点**  
最新更新聚焦于推测解码的稳定性修复以及 GPU 后端正确性，尤其针对 Vulkan（Intel Arc）和 Metal（Apple Silicon）。显著改进包括在 `truncate=false` 时对 `YaRN` 实现确定性行为、通过引用计数增强检查点管理，以及在 Vulkan 上扩展对 `IQ4_NL` 量化格式的支持。

---

### **2. 发布与破坏性变更**  
- **vulkan**: 修复使用 `combined K+V f16` 时 FA 反量化路径中临时内存大小计算错误的问题（#30487）——解决推理过程中潜在的越界访问问题。  
  🔗 [PR #30487](https://github.com/ggml-org/llama.cpp/pull/30487)  
- **llama-server**: 将深度复制的检查点替换为基于 `shared_ptr` 的引用计数机制（#30137）——降低开销，改善并发请求下的会话状态管理。  
  🔗 [PR #30137](https://github.com/ggml-org/llama.cpp/pull/30137)  
- **ggml**: 为 YaRN 插值逻辑新增 `truncate=false` 支持（#30206）——在长上下文模型中实现更精确的频率切换，无需将区间边界四舍五入为整数。  
  🔗 [PR #30206](https://github.com/ggml-org/llama.cpp/pull/30206)

> ✅ *今日未报告任何破坏性 API 变更。*

---

### **3. 新模型与硬件支持**  
- **Vulkan**: 增加 `IQ4_NL` 标量 MMQ 矩阵乘法支持（#31764）——扩展了 Intel Arc GPU 上的量化矩阵乘法选项。  
  🔗 [PR #31764](https://github.com/ggml-org/llama.cpp/pull/31764)  
- **Metal**: 启用 `mul_mm` 内核支持 `32 <= K < 64`，并新增 `bf16 x bf16` 乘法矩阵内核（#30982）。  
  🔗 [PR #30982](https://github.com/ggml-org/llama.cpp/pull/30982)  
- **WebGPU**: 新增 `MEAN` 操作支持（#31591）——提升对需要张量缩减操作的模型的兼容性。  
  🔗 [PR #31591](https://github.com/ggml-org/llama.cpp/pull/31591)  
- **模型架构**: 通过 #31589 完全支持 `xing4_0` 模型（含 MTP、MoE、MLA、mHC）。  
  🔗 [PR #31589](https://github.com/ggml-org/llama.cpp/pull/31589)

---

### **4. 性能与优化**  
- **MoE 缓存**: PR #31233 引入混合 LRFU/MQ 风格缓存（`ClassLRU`），在暖缓存条件下相比 SLRU 实现：**QFN 解码速度提升 +6%**，**GLM 提升 +7%**，且专家上传次数减少 **8%**。  
  🔗 [PR #31233](https://github.com/ggml-org/llama.cpp/pull/31233)  
- **CUDA**: 优化 `Top-K` 基数排序以确保并列选择的确定性（#31084）——对生产环境中的可复现采样至关重要。  
  🔗 [PR #31084](https://github.com/ggml-org/llama.cpp/pull/31084)  
- **WebGPU / Vulkan**: 重构闪注意力块打包逻辑（#30190），支持多个查询令牌和 GQA 头共享 K/V 读取——旨在高并发场景下提升吞吐量。  
  🔗 [PR #30190](https://github.com/ggml-org/llama.cpp/pull/30190)

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 影响 | 状态 |
|---------|-------|--------|--------|
| ⚠️ 高 | **Vulkan：Intel Arc B70 上结果非确定性**（#31560） | 相同输入产生不同输出，源于 `KHR_coopmat` 使用不当；影响无 `GGML_ASSERT` 的推理路径。 | 开放 |
| ⚠️ 高 | **CPU F16 点积在 ARM（M4 Max）上溢出为 inf**（#31734） | F16 算术中累加导致溢出；仅在无 SVE 支持的 Apple Silicon 上观察到。 | 开放 |
| ⚠️ 中 | **量化模型上的推测解码偏差（draft-mtp/draft-dspark）**（#25618） | 贪心输出与普通运行在 Q4_K_M 目标上不一致；在 bf16 上表现正常。 | 开放（38 条评论） |
| ⚠️ 中 | **CUDA 在 KV 缓存回滚后发生非法内存访问**（#31077） | 当 MTP 草稿紧随检查点恢复后触发；禁用 MTP 时不崩溃。 | 开放（5 条评论） |
| ❌ 关键 | **Vulkan 在 Imagination PowerVR C 系列（Pixel 11 Pro）上固件崩溃**（#28214） | 提示处理期间 GPU 固件崩溃；阻碍移动端部署。 | 已关闭 |

> 💡 *部分回归问题已有修复：*
> - `#30487` 解决了 Vulkan 临时内存大小问题。
> - `#30982` 提升了 Metal 的性能与稳定性。

---

### **6. 对应用开发者的启示**  
- **在量化模型（如 Q4_K_M）上谨慎使用推测解码** —— 在 `#25618` 修复前，预期输出非确定性。生产环境中建议优先选用 `bf16` 目标以保证一致性。  
- **充分利用新的 MoE 缓存机制（`ClassLRU`）**，以提升大型 MoE 模型（如 GLM/QFN）的吞吐量——特别适用于多轮对话代理工作流。  
- **若在 Intel Arc（B70）或 Qualcomm Adreno 上部署，请确保 Vulkan 后端已更新** —— 已知 `unpack8()`/`pack32()` 与 `subgroupAdd()` 存在误编译问题，可能导致静默错误。  
- **为语音生成做好准备** —— `#31763` 添加 `/v1/audio/speech` 接口；未来将集成至 TTS 流水线。  
- **除非需要整数边界对齐，否则避免在 YaRN 设置中使用 `truncate=true`** —— 长文本推理任务中请使用 `truncate=false` 以获得更平滑的上下文插值效果。

🔗 [GitHub 仓库](https://github.com/ggml-org/llama.cpp)  
🔗 [最新发布说明](https://github.com/ggml-org/llama.cpp/releases/tag/b12142)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-06**

---

### **1. 今日亮点**  
Ollama 生态系统持续扩展对高级大模型架构和智能体工作流的支持，关键贡献包括通过 MLX 原生集成 Hindsight 的 `hs-decide-1-flash` 决策模型，以及修复 MLX 运行器中关键的停止序列处理问题。近期合并的 PR 显现出对稳定性的日益重视，例如修复了在 AMD Renoir 集成显卡上 Vulkan 后端崩溃的问题，以及大型上下文模型中的静默截断问题。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未报告发布或破坏性变更。  
但以下重要变更正在推进：  
- ✅ **PR #19539**：通过在未安装模型时返回空数组（`[]`）而非 `null`，修复 OpenAI 兼容性问题，这对期望接收列表格式的 SDK 至关重要（详见 [issue #19381](https://github.com/ollama/ollama/issues/19381)）。  
- ✅ **PR #19501**：确保在响应请求中正确传递 `Truncation` 选项，防止显式禁用截断时出现静默输入截断（[issue #19492](https://github.com/ollama/ollama/issues/19492)）。

---

### **3. 新模型与硬件支持**  
- 🚀 **新模型**：通过 PR [#19555](https://github.com/ollama/ollama/pull/19555) 添加对 **Hindsight 的 `hs-decide-1-flash`** 决策模型的支持，使其可用于 Vectorize 等内存增强型智能体系统。  
- 🖥️ **硬件/后端**：  
  - **AMD Renoir iGPU（Ryzen 7 4700U）**：Vulkan 后端崩溃问题正在修复中（[issue #19558](https://github.com/ollama/ollama/issues/19558)）。  
  - **Intel Arc GPU**：仍待官方支持（[功能请求 #1590](https://github.com/ollama/ollama/issues/1590)，共 76 条评论）。  
  - **Apple M4 Max（MLX）**：优化工作正在进行中，包括 Qwen3.8 Flash Next 的内存效率提升（[PR #18078](https://github.com/ollama/ollama/pull/18078)）。  
- 🔢 **量化**：请求为 `qwen3.5:0.8b` 提供 `q4_K_M` 量化版本（[issue #19436](https://github.com/ollama/ollama/issues/19436)）。

---

### **4. 性能与优化**  
- ⚡ **Qwen3.8 Flash Next**：采用更高效的内存设计，大部分权重使用 MXFP8，同时在关键路径（如 QSA 投影）保留 BF16 精度，有效降低显存压力，且不影响长文本生成质量（[PR #18078](https://github.com/ollama/ollama/pull/18078)）。  
- 📉 **性能回归警告**：自 v0.40.1 版本以来，用户报告所有模型的每秒生成词元数下降约 25–30%（[issue #18968](https://github.com/ollama/ollama/issues/18968)）。目前尚未有修复 PR，怀疑源于调度器或内核层的回归。  
- 🔄 **并行处理**：在上游 llama.cpp 崩溃问题解决后，PR [#17144](https://github.com/ollama/ollama/pull/17144) 已重新启用 `qwen35`/`qwen35moe` 的并行请求支持——预计在多 GPU 环境下带来性能提升。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 修复 PR |
|--------|------|-------|-------|
| 🔴 高 | **AMD Renoir iGPU 上的 Vulkan 崩溃**（`NTSTATUS 0xe06d7363`）出现在模型加载阶段 | 开放 | ❌ 尚无 |
| 🔴 高 | **`OLLAMA_NUM_PARALLEL` + 多模态模型 → `failed processing images`** | 开放 | ❌ 尚无 |
| 🟡 中等 | **Gemma4 工具调用解析会丢弃不完整的参数**（缺少起始 `<|"|>`） | 开放 | ✅ [PR #19556](https://github.com/ollama/ollama/pull/19556) 正在进行中 |
| 🟡 中等 | **MLX 运行器忽略 `stop` 序列**，导致生成失控 | 开放 | ✅ [PR #19552](https://github.com/ollama/ollama/pull/19552) 已合并 |
| 🟡 中等 | **Windows 休眠模式导致 Ollama 推理中断** | 开放 | ❌ 尚无修复（[issue #4072](https://github.com/ollama/ollama/issues/4072)） |

---

### **6. 对应用开发者的意义**  
- **智能体构建者**：可通过 MLX 使用 `hs-decide-1-flash`，为自主智能体提供低延迟、内存感知的决策逻辑（[PR #19555](https://github.com/ollama/ollama/pull/19555)）。  
- **工具调用类应用**：使用 `qwen2.5-coder` 和 `qwen3.8` 时需谨慎——若助手先输出自由文本，原生工具调用可能失败（[issue #19353](https://github.com/ollama/ollama/issues/19353)）。临时方案包括预提示或强制使用结构化 JSON 输出。  
- **API 消费者**：更新对 `/v1/models` 的预期——应期待 `[]` 而非 `null`（[PR #19539](https://github.com/ollama/ollama/pull/19539)），并确保请求中 `truncation=false` 被正确识别（[PR #19501](https://github.com/ollama/ollama/pull/19501)）。  
- **多模态应用**：在 [issue #4165](https://github.com/ollama/ollama/issues/4165) 解决前，请避免对 `llava`、`moondream` 等模型设置 `OLLAMA_NUM_PARALLEL > 1`。  
- **跨平台开发**：务必在 AMD/Intel GPU 平台进行测试——Vulkan 不稳定性仍是风险，尤其在旧款 APU 上。  

👉 *建议*：密切关注 PR #19552、#19556 及 #19558，以获取即时稳定性提升。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 摘要 – 2026-11-06**

---

### **1. 今日亮点**  
最新版本 **v1.108.1** 为所有 Docker 镜像引入了 **cosign 签名验证**，通过提交 `e82a3c6` 中的密钥验证镜像完整性，显著提升安全性。同时修复了 OpenRouter 与 Anthropic 的流式处理问题，包括修正 Claude 模型中 `reasoning_effort="none"` 的错误处理，并改进了流式响应中的错误传播机制。新增功能支持 Bedrock 的 Opus 5.5 与 Sonnet 5 模型原生结构化输出，有效降低延迟和成本。

---

### **2. 发布与破坏性变更**  
- **v1.108.1**：所有 Docker 镜像现已使用 [cosign](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065) 签名。请使用该提交中的公钥通过 `cosign verify` 进行验证。  
- **破坏性变更（PR #47496）**：客户端不再可随意指定 Bedrock 批量任务的 S3 存储桶，除非在代理配置中显式允许。管理员必须白名单目标存储桶以防止未授权访问。  
- **破坏性变更（PR #47601）**：SDK 现在使用文件调用中传入的存储桶，而非依赖代理层级的默认值——此行为仅在 #47496 合并后才安全生效。

---

### **3. 新模型与硬件支持**  
- **Bedrock 原生结构化输出**：Opus 5.5、Fable 5.1、Sonnet 5 与 Haiku 5.5 现在使用 AWS 原生 JSON Schema 输出（`output_config.format`），不再依赖 LiteLLM 的回退工具方法。  
- **OpenRouter 视频支持**：通过 PR [#50319](https://github.com/BerriAI/litellm/pull/50319) 新增对视频生成字段（如 `first_frame`、`last_frame`、`seed`、`audio` 等）的一等支持。  
- **ModelScope 图像生成**：现支持异步任务轮询（PR [#48558](https://github.com/BerriAI/litellm/pull/48558)），实现端到端的图像编辑与生成工作流。

---

### **4. 性能与优化**  
- **延迟降低**：Bedrock 结构化输出现使用原生 JSON Schema 输出，使成本降低 **20–40%**，并因减少翻译开销而提升速度。  
- **路由效率提升**：PR [#50321](https://github.com/BerriAI/litellm/pull/50321) 确保 `/v1/responses` 请求在重复调用间保持提示词缓存亲和性，避免缓存未命中。  
- **流式开销追踪**：PR [#49920](https://github.com/BerriAI/litellm/pull/49920) 新增对流式请求网关开销的精准测量，包括每块数据的处理时间，记录于 `litellm_overhead_latency_metric`。

---

### **5. 稳定性与回归问题**  
| 问题 | 严重性 | 状态 | 修复 PR | 说明 |
|------|----------|--------|--------|-------|
| `temperature` 被错误报告为支持 Claude Opus 4.7 | 高 | 待处理 | N/A | 模型拒绝该参数；LiteLLM 不应暴露。 |
| `reasoning_effort="none"` 在默认开启的 Claude 模型上被静默忽略 | 高 | 待处理 | PR [#47924](https://github.com/BerriAI/litellm/issues/47924) | 当前模型仍处于“思考”状态，违背用户意图。 |
| OpenRouter 流式输出在完成前发出空的 post-finish choice | 中 | 待处理 | PR [#50156](https://github.com/BerriAI/litellm/issues/50156) | 破坏下游解析逻辑；重复空选择造成混淆。 |
| Vertex AI Gemini 忽略除最后一个系统消息外的所有内容 | 高 | 待处理 | PR [#48813](https://github.com/BerriAI/litellm/issues/48813) | 破坏依赖多系统提示的代理工作流。 |
| `/v1/images/edits` 缺失图像时返回 500 而非 400 | 中 | 待处理 | PR [#50173](https://github.com/BerriAI/litellm/issues/50173) | 应对缺失必要输入返回 400。 |

---

### **6. 对应用开发者的影响**  
- **安全优先**：生产部署时务必使用 `cosign` 验证 Docker 镜像签名。  
- **避免高成本绕行**：在 Bedrock 模型（Opus 5.5+）上使用原生结构化输出，降低延迟，避免不必要的工具调用开销。  
- **谨慎处理流式输出**：注意 OpenRouter 与 Anthropic 流式处理中的已知问题，特别是最终数据块与错误传播。  
- **S3 存储桶现受限制**：若应用使用 Bedrock 批量任务，请确保目标 S3 存储桶已在代理配置中白名单，或采用 SDK 新增的存储桶传递机制。  
- **更新你的工具链**：确保使用 `v1.108.0+` 以享受令牌计数、音频流与防护规则重写等方面的改进。

> 🔗 完整问题列表：[GitHub Issues](https://github.com/BerriAI/litellm/issues?q=is%3Aopen+sort%3Aupdated-desc)  
> 🔗 最新 PR 列表：[GitHub Pull Requests](https://github.com/BerriAI/litellm/pulls?q=is%3Aopen+sort%3Aupdated-desc)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

### **Unsloth Digest — 2026-11-06**

#### **1. 今日亮点**  
Unsloth 生态系统持续深化对 **UI/UX 精细度与稳定性** 的关注，报告了多个高优先级问题，涉及玻璃主题、长对话延迟以及桌面和网页界面间背景渲染不一致。在基础设施方面，关键 PR 已落地于 **扩散训练优化**、**FP8 LoRA 测试** 和 **集成显卡内存管理**，标志着向稳健的多设备推理与微调工作流迈进的重要进展。

#### **2. 发布与破坏性变更**  
*无*。过去 24 小时内未发布新版本。最新稳定版仍为 `v0.1.915-beta`，UI 优化与后端改进的测试仍在进行中。

#### **3. 新模型与硬件支持**  
- **Lumina-Image-2.0**：已加入内存规划的测量激活配置（`_MEASURED_IMAGE_ACTIVATION_MIB`），防止在 16–24 GB 显卡上推理时出现 OOM。  
- **集成显卡（iGPU）支持**：新增 PR (#16857, #16849) 通过内存映射分页与主机预留感知的分块压缩，解决加载大型 GGUF 模型（如 DeepSeek-V4.1-Flash-1017-GGUF UD-IQ1_S，大小达 216.97 GiB）时的内存溢出问题。  
- **MLX（macOS）**：工具调用格式修复 (#16824) 确保模型原生工具响应的进程内正确解析，提升代理工作流的准确性。

#### **4. 性能与优化**  
- **扩散训练**：  
  - PR #16763 移除了每微步的主机同步，优化 int8 基础加载，并实现缓存图像一次解码 → **降低延迟并提升 GPU 利用率**。  
  - PR #16808 为 Lumina-Image-2.0 引入测量激活（约每帧 3% 开销），支持更精准的驻留预测。  
- **流水线并行**：  
  - PR #16846 修复了 CPU 后端在 `UNSLOTH_PP_SIZE` 模式下，分块交叉熵被静默跳过的问题。  
  - PR #16822 阻止 MoE 路由辅助损失在多个微批次间累积，避免错误梯度累积。  
- **内存管理**：  
  - PR #16854 通过将屏幕外内容暂存至占位符，优化了 Linux 上长对话面板的渲染 → **减少滚动时 WebKitGTK 的卡顿**。  
  - PR #16805 调整视频内存规划，预留前向运行头寸后再卸载模块 → 防止早期前向传播阶段发生 OOM。

#### **5. 稳定性与回归问题**  
- **严重 UI 延迟 / 崩溃**：  
  - 问题 #16603：长时间对话导致 UI 延迟（网页 + 桌面）——确认为影响大规模用户体验的回归问题。  
  - 问题 #16816：Windows 11 上搭载 RTX 4060 Ti 的设备崩溃；在 v0.1.915-beta 中可复现。  
- **主题与渲染缺陷**：  
  - 问题 #16770：玻璃主题在桌面 UI 中应用不一致。  
  - 问题 #16820：玻璃主题导致整个背景模糊——视觉回归，影响美观。  
  - 问题 #16736：活跃聊天中壁纸被隐藏，因 CSS 优先级冲突——影响桌面端与 Studio。  
- **模型服务问题**：  
  - 问题 #16803：尽管存在 GPU，Windows 上图像生成仍回退至 CPU/RAM——对实时生成应用至关重要。  
  - 问题 #16605：AppImage 在 Slackware64 上无法启动，因 GLib/AppIndicator 符号查找失败——平台相关回归。  
- **微调稳定性**：  
  - 问题 #16632：当新任务启动时，微调任务列表会丢失已取消的排队任务——生产流水线中存在数据丢失风险。  
  - 问题 #16720 / #16719：多 LoRA 批次顺序错乱时，分页可能跳过或失效任务——影响监控与调试。

> ✅ *多数回归问题已有修复 PR*：  
> - PR #16854（长对话延迟）  
> - PR #16824（MLX 工具调用）  
> - PR #16805（内存计划预留空间）  
> - PR #16763（扩散训练同步）

#### **6. 对应用开发者的影响**  
在 Unsloth 上构建 AI 代理、RAG 系统或微调流水线的应用开发者应：
- **预期长期运行会话中的 UI 不稳定**——在 #16603 解决前，避免依赖持久化的聊天状态。
- **在混合负载下验证模型行为**——多 LoRA 批次问题（#16720, #16719）可能导致 Studio API 驱动工作流中任务可见性异常。
- **规划 iGPU 的资源限制**——仅在可控主机内存预算下使用内存映射的 GGUF 加载；否则建议采用量化后的纯 CPU 变体。
- **谨慎采用 FP8 LoRA 与上下文并行**——近期检查点机制变更（PR #16667）意味着旧配置在 `transformers>=5.23` 下可能表现异常。
- **利用即将推出的原生功能**——提议功能如 **人格记忆** (#16769)、**智能 UI 组件** (#16850) 和 **上下文窗口增强** (#16860) 表明，更深层的代理个性化与动态资源自适应即将到来。

> 🔗 [GitHub 问题与 PR](https://github.com/unslothai/unsloth) —— 关注 `#16603`、`#16816`、`#16803` 和 `#16854` 的更新。

---  
*由人工智能基础设施分析师整理 | 2026-11-06*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*