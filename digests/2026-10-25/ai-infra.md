# AI 基础设施日报 2026-10-25

> 生成时间: 2026-10-25 00:30 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目 AI 基础设施生态报告 – 2026-10-25**

---

### **1. 生态概览**  
AI 推理与服务生态正进入 *硬件专业化、分布式鲁棒性增强、以智能体为中心优化* 的阶段。各项目正聚焦于在多样化后端（尤其是 AMD ROCm、Apple Silicon（MLX/Metal）和 Qualcomm Hexagon）上实现高性能、低延迟推理，同时优先保障复杂工作流（如推测解码、MoE 执行、多模型并发）的稳定性。智能体系统的兴起推动了对可组合性（如 KV 缓存策略）、确定性控制流以及实时音视频输出的需求。安全性和成本准确性已成为不可妥协的要求，近期事件凸显了签名发布和精确计费的必要性。

---

### **2. 活动对比**

| 项目       | 今日开放问题数 | 今日合并 PR 数 | 发布状态         |
|------------|----------------|----------------|------------------|
| **vLLM**   | 7              | 8              | 无（稳定版 v0.32.0） |
| **SGLang** | 9              | 6              | 无               |
| **llama.cpp** | 4           | 5              | 无（b11869+ 热修复） |
| **Ollama** | 5              | 4              | **v0.40.11**（新版本） |
| **LiteLLM** | 5           | 6              | **v1.106.3+**（关键安全更新） |
| **Unsloth** | 5            | 4              | 无（β 变更待定） |

> 🔍 *观察*：vLLM 在 PR 速度和问题密度上领先，反映了其作为基础引擎的核心地位。LiteLLM 因紧急安全补丁而表现出显著的发布活跃度。

---

### **3. 模型支持竞赛**

| 新模型 / 架构               | 支持项目                   | 备注 |
|----------------------------|----------------------------|------|
| **Kimi-K3 (gfx942/MI325X)** | vLLM ✅, SGLang 🟡（追踪中） | vLLM 在 ROCm 内核对齐和 NVFP4 支持上领先 |
| **DeepSeek-V4.1-Flash (MRV2)** | vLLM ✅, SGLang ✅, llama.cpp 🟡 | 三者均支持 DBO/推测解码；vLLM 的快速路径最成熟 |
| **Nemotron 3.5 Bolt 74B-A9B** | Ollama ✅（MLX）           | 唯一原生支持 MLX + LiLiCorr 的项目 |
| **Cerebras Llama 3.1**     | LiteLLM ✅                 | 首个超越 OpenAI/Anthropic 的重大集成 |
| **SANA-Sprint 0.6B (diffusion)** | SGLang ✅             | 新兴细分领域：通过高效扩散运行时实现文本到图像生成 |
| **UD-IQ1_S GGUF**          | Unsloth ✅                 | 小众但重要，适用于量化模型流式传输 |

> 🏆 **领先者**：**vLLM** 在 *模型多样性* 和 *硬件覆盖广度* 上占据明显优势，尤其在 ROCm 和推测解码方面。**Ollama** 在 *面向用户的模型交付*（如 Nemotron、语音）上表现卓越。**LiteLLM** 主导 *服务商目录完整性*。

---

### **4. 性能前沿**

| 优化重点                | 领先项目                     | 关键进展 |
|--------------------------|------------------------------|----------|
| **KV 缓存效率**          | vLLM（NVFP4）、Unsloth（preempt-ram） | vLLM 的 `FLASHINFER_MLA` 将 KV 从 576B 降至 352B；Unsloth 实现共享缓存 |
| **推测解码**             | vLLM、SGLang                 | vLLM 增加草稿接受快速路径；SGLang 修复 ngram 损坏问题 |
| **MoE 与分布式服务**     | SGLang、vLLM、Unsloth       | SGLang 聚焦 MoE 图谱捕获；Unsloth 支持分片加载 |
| **内核级调优**           | vLLM、llama.cpp             | Triton 拓扑选择（vLLM）；Hexagon 团队拆分注意力（llama.cpp） |
| **批处理与流式传输**     | LiteLLM、SGLang             | LiteLLM 解析批处理层级成本；SGLang 优化 Engram 的 reduce-scatter |

> ⚙️ **趋势**：底层内核优化（Triton、Flash Attention）对边缘场景性能至关重要，而系统级优化（共享 KV、卸载）则驱动智能体工作负载的可扩展性。

---

### **5. 层级定位**

| 项目       | 主要层级                    | 次要角色                              | 差异化优势 |
|------------|-----------------------------|---------------------------------------|------------|
| **vLLM**   | 推理引擎（GPU）             | 模型服务、推测解码                    | 云规模推理的行业标准后端 |
| **SGLang** | 分布式服务框架              | 多节点编排、扩散运行时                | 专注大规模异构部署中的正确性 |
| **llama.cpp** | 本地运行时（边缘/本地部署） | NPU 支持（Hexagon）、量化            | 高通、Apple Silicon 上的设备端推理最佳实践 |
| **Ollama** | 开发者网关 / CLI 工具       | 智能体后端、语音集成                  | 以终端用户为中心的体验，支持 macOS 原生功能 |
| **LiteLLM** | 通用 API 网关               | 成本追踪、服务商抽象                  | 跨服务商路由与计费的中枢平台 |
| **Unsloth** | UI 优先运行时 + 训练工具     | 并行聊天、张量并行                    | 强调开发者体验与训练可扩展性 |

> 🎯 **定位洞察**：  
> - **vLLM/SGLang** = 生产级系统的核心推理引擎  
> - **llama.cpp** = 设备端/边缘部署的引领者  
> - **Ollama** = 开发者体验层（CLI、语音、智能体）  
> - **LiteLLM** = 跨平台 API 抽象层  
> - **Unsloth** = 交互式开发的混合运行时 + UI 栈

---

### **6. 趋势信号**

#### 🔥 **从今日活动提取的关键趋势**
1. **ROCm 民主化**：AMD RDNA3/4 消费级 GPU 已成为首要目标（SGLang、vLLM），使推理成本更低、更易获取。
2. **智能体驱动优化**：`--preempt-ram`、共享 KV 缓存、`preserve_thinking` 等功能表明，长周期、多轮智能体会话正成为主流。
3. **安全作为第一优先级**：LiteLLM 紧急撤回发布凸显开源基础设施的信任脆弱性——镜像签名、密钥轮换、审计日志已成为强制要求。
4. **量化可组合性**：NVFP4、UD-IQ1_S、MXFP4 —— 多种新格式涌现，标志着向灵活、工作负载定制化量化演进。
5. **混合工作流成常态**：扩散模型、视觉、语音和工具使用不再是附加项，已深度融入核心管线。

#### 🛠️ **应用开发者应关注事项**
- **避免使用 v0.32.0 版本的 Qwen4Exp（vLLM）** —— 请暂用 v0.31.1，直至崩溃修复上线。
- **监控 Kimi-K3/Draft-DCP 场景下的 `NCCL_GRAPH_REGISTER=0`**（SGLang）。
- **验证 llama.cpp 中的 JSON 嵌套深度** —— 存在潜在拒绝服务风险。
- **立即更新 LiteLLM 镜像签名** —— 旧密钥已失效。
- **在 Apple Silicon 上对比 MLX 与非 MLX 性能** —— 性能差异真实存在。
- **为可编程 KV 缓存做准备**（vLLM RFC #59538）—— 未来智能体系统将依赖此功能。

> ✅ **最终结论**：基础设施层正在迅速成熟。选择技术栈应基于 *部署上下文*（云 vs 边缘）、*工作负载类型*（批处理 vs 智能体）和 *安全态势*。"只需跑一个模型"的时代已终结——可靠性、成本控制与可组合性如今已是基本门槛。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-10-25**

---

### **1. 今日亮点**  
vLLM 项目在硬件与模型专用化方面持续保持强劲势头，关键 PR 推进了 Kimi-K3 在 gfx942/gfx950 上的 ROCm 支持，包括 AITER Triton 内核对齐以及 Dense MLA 模型的 NVFP4 KV 缓存优化。两个高影响性修复已合并：一是修复了跨数据并行引擎的 ORCA 指标聚合问题，二是修正了束搜索中 `extra_args` 错误转发的问题——两者均直接影响生产级推理的可靠性。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未报告新版本或破坏性变更。无新发布，亦无 API/配置的破坏性改动。

---

### **3. 新模型与硬件支持**  
- ✅ **Kimi-K3 (gfx942 / MI325X)**：新增 ROCm 特定优化与配方对齐 ([PR #63520](https://github.com/vllm-project/vllm/pull/63520))，显著提升 AMD RDNA4 GPU 上的推理稳定性与性能。  
- ✅ **DeepSeek-V4.1-Flash (MRV2)**：新增对 DBO + 预测解码和 DCP 的支持 ([PR #61464](https://github.com/vllm-project/vllm/pull/61464))，实现更高效的草稿-接受工作流。  
- ✅ **NVFP4 KV 缓存**：通过 `FLASHINFER_MLA` 实验性支持 Dense MLA 模型（如 DeepSeek-V3.1 与 Kimi-K3），将每标记的 KV 缓存内存从 576B（FP8）降至 352B ([PR #63203](https://github.com/vllm-project/vllm/pull/63203))。  
- ⚠️ **ROCm Attention Backend (`ROCM_ATTN`)**：在 RDNA4 GPU 上发现头大小 ≥96 与 MHA 配置下的缺陷 ([Issue #62697](https://github.com/vllm-project/vllm/issues/62697)) — 可能影响部分 AMD GPU 的稳定性。

---

### **4. 性能与优化**  
- 📈 **Triton 内核优化**：单体 top-k 内核通过改进初始 logits 中的枢纽选择，避免回落至全词汇表搜索，解决了 MiMo-V2.6 上的异常 gather 丢失问题（约 6–10% 行受影响）([Issue #61998](https://github.com/vllm-project/vllm/issues/61998))。  
- 🔥 **快速路径改进（DRAFT-Prepare）**：针对 gfx950 上的 DeepSeek-V4.1 Flash 服务引入草稿路径快速路径优化：共享输出去重、并行尾部填充修复、仅 KV 上下文插入 ([PR #63182](https://github.com/vllm-project/vllm/pull/63182))。  
- 💡 **元数据融合**：正在将主机端元数据计算从 torch 分发中卸载，以降低急切解码路径中的延迟 ([PR #63523](https://github.com/vllm-project/vllm/pull/63523))。  
- 🧩 **KV 压缩 RFC**：提出可复用、可插拔的 KV 压缩层，用于提升传输与存储效率 ([RFC #59538](https://github.com/vllm-project/vllm/issues/59538)) — 可为未来基于存储感知的缓存策略奠定基础。

---

### **5. 稳定性与回归问题**  
今日报告高严重性问题：  
1. **CUDA 非法内存访问崩溃**：  
   - Qwen4Exp（Qwen3.8-Flash-Next）单次预填充 >262k 标记，在 v0.32.0 上因原生边界越界导致引擎崩溃 ([Issue #63383](https://github.com/vllm-project/vllm/issues/63383))。*修复待处理。*  
   - Qwen3.8-27B（GDN 混合）在 sm_86 上使用 PP=3 时，启用前缀缓存引发非法内存访问（Xid 31）([Issue #63505](https://github.com/vllm-project/vllm/issues/63505))。*自 v0.28.0 起出现回归。*  
2. **预测解码缺陷**：  
   - Ngram 预测解码在混合 GDN Qwen3.5 模型上产生损坏输出 ([Issue #39273](https://github.com/vllm-project/vllm/issues/39273))。  
   - V1 思考预算在预测解码下会破坏多标记推理结束标志（reasoning_end_str）([Issue #58485](https://github.com/vllm-project/vllm/issues/58485))。  
3. **ROCm 运行时故障**：  
   - `ROCM_ATTN` 返回错误注意力结果，且在特定头大小下可能触发 GPU 故障，尤其在 RDNA4 架构上 ([Issue #62697](https://github.com/vllm-project/vllm/issues/62697))。

---

### **6. 对应用开发者的启示**  
- **谨慎使用 `--kv-cache-dtype nvfp4`**：虽显著减少 KV 缓存占用，但属实验性功能，可能存在边缘场景正确性问题——请结合自身负载进行验证。  
- **大型上下文 Qwen4Exp 模型暂勿使用 v0.32.0**：建议使用 v0.31.1 直至 #63383 修复完成；此问题影响长输入序列的代理系统。  
- **在 DP 部署中启用正确的 ORCA 指标**：#63445 修复确保负载均衡网关可获取准确的端点级指标——对动态路由至关重要。  
- **关注 Kimi-K3 的 ROCm 支持状态**：若在 AMD gfx942/Mi325X 上部署，请使用更新后的配方 (#63520)，当头大小 ≥96 时避免使用 `ROCM_ATTN`。  
- **规划可编程 KV 缓存（RFC #57103）**：未来代理系统将受益于可组合的会话保留、迁移与配额策略——早期采用者应持续跟踪进展。

---  
*本摘要由 GitHub 活动生成：[vllm-project/vllm](https://github.com/vllm-project/vllm) | 2026年10月25日*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 消息简报 – 2026-10-25

---

### **1. 今日重点**  
SGLang 项目持续聚焦在多种硬件上的稳定性与性能，针对不稳定的 CI 基础设施（#42752）以及 MoE 和扩散模型流水线中的多个崩溃问题进行了关键修复。显著进展包括 Engram 预填充分片的新型内核优化和更高效的 KV 缓存管理，同时对 AMD 支持仍为重点，相关启用工作正在持续推进。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告任何内容。*  
未发布新版本，也无破坏性 API/配置变更。`main` 分支保持稳定，但仍在积极优化边缘情况正确性和 CI 可靠性。

---

### **3. 新模型与硬件支持**  
- **AMD 消费级 GPU（RDNA3/RDNA4）**：通过 #30599 正在积极跟踪并推进启用，目标支持 `gfx1100`、`gfx1101`、`gfx1200` 与 `gfx1201`。这将使 ROCm 支持从数据中心 Instinct 芯片扩展至消费级硬件。
- **扩散模型**：正通过 #43671 添加对 **SANA-Sprint 0.6B** 的原生支持，实现高效文本到图像推理，仅需极少步骤即可生成高分辨率（1024px）输出。
- **NPU 集成**：部分支持 **PD_Disaggregation** 与 Mooncake 传输后端的 PR 已提交（#46223），标志着异构 NPU 部署场景的早期进展。

> 🔗 [AMD RDNA3/4 支持](https://github.com/sgl-project/sglang/issues/30599) | [SANA-Sprint 0.6B](https://github.com/sgl-project/sglang/issues/43671)

---

### **4. 性能与优化**  
- **Engram 预填充优化**：PR #46338 引入大范围均匀预填充分片的 reduce-scatter 机制，减少不必要的 all-reduce 通信，提升分布式推理的可扩展性。
- **DSA 交错重叠**：PR #46179 在交错预填充期间将 CP KV 拾取与索引器计算重叠，最小化空闲时间，显著提升 SM90+ 架构下的吞吐量。
- **扩散运行时收益**：多个 PR（#46246、#46337）聚焦于交叉注意力复用与增量批处理接纳追踪，降低冗余计算与内存压力。
- **LoRA 测试简化**：PR #45981 简化了 LoRA 测试流程，减少 CI 运行时间，同时不牺牲验证严格性的情况下提升测试覆盖率。

> 🔗 [Engram 的 Reduce-Scatter](https://github.com/sgl-project/sglang/pull/46338) | [DSA KV-Gather 重叠](https://github.com/sgl-project/sglang/pull/46179)

---

### **5. 稳定性与回归问题**  
今日报告的严重问题凸显复杂配置下的不稳定性：

| 严重程度 | 问题 | 描述 | 修复状态 |
|--------|------|-------------|------------|
| 🚨 高 | #45367 | Kimi-K3 DCP a2a 在双节点 GB300 上启用 NCCL 图注册时产生乱码解码输出；临时方案：`NCCL_GRAPH_REGISTER=0` | ❌ 尚无修复 |
| 🚨 高 | #46316 | DeepSeek-V4-Flash NVFP4 + `flashinfer_megamoe` + dp-attention 在解码阶段进行 CUDA 图捕获时失败，因未声明 sum group | ❌ 尚无修复 |
| 🟡 中 | #46314 | 扩散量化层（MXFP4、FP8、ROCm）存在 11 个正确性缺陷，影响模型精度 | ✅ 审查中（PR #46302） |
| 🟡 中 | #46312 | AWQ 检查点因缺少 `sglang.kernel_api_logging` 模块，在 CUDA 上无法加载 | ❌ 尚无修复 |
| ⚠️ 低 | #42752 | `PR Test Base/Extra` 中频繁出现不稳定的 CI 测试与基础设施故障，影响 PR 验证 | ❌ 正在调查 |

> 🔗 [Kimi-K3 DCP 崩溃](https://github.com/sgl-project/sglang/issues/45367) | [DeepSeek-MegaMoE 图失败](https://github.com/sgl-project/sglang/issues/46316)

---

### **6. 对应用开发者的启示**  
- 在 #36669 修复前，请避免在 GLM-5.3-Flash 上使用复杂的 MoE + 多工具代理提示——预计会出现退化输出（如 `!` 重复）。
- 部署 Kimi-K3 或 DeepSeek-V4-Flash 且跨节点使用 DCP 时，直到 #45367 修复前，请使用 `NCCL_GRAPH_REGISTER=0`。
- 直到 #46314 与 #46302 合并前，预期扩散工作流存在不稳定现象——请手动验证量化正确性。
- 可利用新优化的 PR（如 #46338 和 #46179）在大规模、多节点部署中获得更好的吞吐表现。
- 注意监控 CI 健康状况——频繁的不稳定性可能延迟合并；必要时可临时使用 `--skip-ci`。

> 💡 实用提示：谨慎使用 `--enable-deterministic-inference` ——在混合 Mamba 或 W4A4 检查点上可能无法按预期工作（#36291）。

---  
*本简报基于 GitHub 活动生成（2026-10-25）。获取实时更新，请关注 [SGLang GitHub](https://github.com/sgl-project/sglang).*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-10-25**

---

### **1. 今日亮点**  
最新更新聚焦于 MoE 模型的关键稳定性修复、Hexagon/HMX 上的 Flash Attention 优化，以及 Jinja 模板和 JSON 解析的健壮性提升。主要改进包括修复因量化缩放传播导致的 MoE 专家缓存损坏问题，以及解决多核 HMX Flash Attention 中的头拆分逻辑错误，显著提升了高通骁龙平台上的性能表现。

---

### **2. 发布与破坏性变更**  
今日未发布新版本。但以下合并请求引入了重要行为变更：  
- **`hexagon: KV-head team split for multicore HMX flash attention`** ([#31055](https://github.com/ggml-org/llama.cpp/pull/31055)) 通过基于 `gcd(n_kv_heads, N)` 将核心分组为团队，重构了 Hexagon NPU 上的 Flash Attention 执行流程，改善负载均衡并避免 KV 头间的冗余计算。此变更可能影响在 HTP v75 及更高版本设备上运行大型 MoE 模型时的性能调优。  
- **`server: refactor server entrypoint`** ([#31113](https://github.com/ggml-org/llama.cpp/pull/31113)) 引入模块化 `server_role` 抽象，清晰分离路由、单机与下载模式，提升可维护性，但需仔细审查使用 `llama-server` 的自定义部署脚本。

---

### **3. 新模型与硬件支持**  
- **Hexagon（骁龙）**：对 **多核 HMX Flash Attention** 实现增强支持，引入动态核心分组机制，进一步提升 HTP v75 及更新设备的资源利用率。  
- **新模型**：**DSV4.1 Flash** 模型现已进入积极转换阶段 ([#31086](https://github.com/ggml-org/llama.cpp/pull/31086))，目标是实现高吞吐推理，并采用优化的注意力模式。  
- **后端优化**：持续完善 **SYCL**（Intel Arc B70）与 **Metal**（Apple Silicon）后端，包括对 BF16 矩阵乘法更佳的处理能力及 MoE 缓存的内存锁定支持。

---

### **4. 性能与优化**  
- **Flash Attention（Hexagon）**：团队拆分策略在非整除 `n_kv_heads` 配置下，将冗余的 KV 头遍历减少高达 **~40%**，显著提升多核 HMX 环境下的吞吐量。  
- **Moe 缓存优化**：PR [#31122](https://github.com/ggml-org/llama.cpp/pull/31122) 支持可选的主机专家页锁定，使解码阶段 MoE 上传过程中 `cudaMemcpyAsync` 从可分页内存带来的开销降低 **~25–30%**。  
- **CUDA 内核调优**：  
  - PR [#30788](https://github.com/ggml-org/llama.cpp/pull/30788) 通过行打包车道分配，优化小 K 值、单列输出的 NVFP4 MMVQ 性能——对低延迟词元生成至关重要。  
  - PR [#30727](https://github.com/ggml-org/llama.cpp/pull/30727) 为 cuBLAS GEMM 添加对旧版 Kepler GPU 的兼容性支持，恢复老旧硬件的可用性。

---

### **5. 稳定性与回归问题**  
今日报告的关键问题包括：  
1. **Metal 后端崩溃**：当使用 `BF16 src1` 且 `K >= 64`、`batch > 8` 时，因缺少内核降级方案导致崩溃 ([#30973](https://github.com/ggml-org/llama.cpp/issues/30973))。*修复待定。*  
2. **Hexagon 上视觉编码器输出损坏**：特定图像尺寸（如 CLIP mmproj）下出现乱码转录循环 ([#31104](https://github.com/ggml-org/llama.cpp/issues/31104))。*已在官方 Android ARM64 构建中复现。*  
3. **CUDA 非法内存访问**：在 MTP 草稿生成过程中，当 KV 缓存回滚时触发 ([#31077](https://github.com/ggml-org/llama.cpp/issues/31077))。影响 Gemma 4 31B + draft-MTP 工作流在 RTX 4060 Ti 与 RTX 5090 上的表现。  
4. **Jinja 栈溢出**：在处理深度嵌套的 `chat_template_kwargs` 或 `tools` 参数时触发 `from_json` 函数 ([#31032](https://github.com/ggml-org/llama.cpp/pull/31032), [#31099](https://github.com/ggml-org/llama.cpp/pull/31099)) —— 若暴露未认证端点，存在潜在拒绝服务风险。*已通过限制嵌套深度修复。*

---

### **6. 对应用开发者的影响**  
- **使用 `--moe-cache-mib` 与 `--models-memory-margin`**（通过合并请求新增），管理多模型服务器部署中的内存压力，尤其适用于混合嵌入/文本工作负载。  
- **在 Apple Silicon 上的 Metal 仍避免使用 `BF16`**，直到 [#30973](https://github.com/ggml-org/llama.cpp/issues/30973) 修复；高 K 值矩阵乘法请改用 `F16` 或 `FP32`。  
- **启用 MoE 专家页锁定**（`--moe-pinned-host`），以降低高批量场景下的 GPU-CPU 传输延迟。  
- **验证 `/v1/chat/completions` 端点的输入 JSON 嵌套深度**——建议使用 `--max-nested-depth=128`（或类似值）防止栈溢出。  
- **在 Hexagon 上谨慎测试视觉模型**；某些图像尺寸暂不可用，直至 [#31104](https://github.com/ggml-org/llama.cpp/issues/31104) 修复。  
- **密切监控 MTP 与 MoE 的交互行为**，特别是检查点恢复场景——[#31077](https://github.com/ggml-org/llama.cpp/issues/31077) 表明长上下文会话中存在 GPU 崩溃风险。

> ✅ **建议**：升级至 `b11869` 或更高版本，并审计所有用户提供的 JSON 输入的嵌套深度。对 Vulkan 用户，若遭遇上下文窗口瓶颈，请启用 `GGML_VK_SUBALLOCATION_BLOCK_SIZE=4GiB`。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-25**

---

### **1. 今日亮点**  
Ollama 已通过 `ollama run` 和兼容 OpenAI 的 `/v1/audio/speech` 接口，在 macOS 上原生支持语音生成，实现模型响应的实时音频播放。与此同时，针对 MLX 引擎的关键稳定性修复已合并，涵盖 `stop` 序列处理和内存计数问题；新提交的 PR 正在致力于提升分词准确性，并增强对 Nemotron 3.5 Bolt 等先进模型的支持。

---

### **2. 发布与破坏性变更**  
- **v0.40.11**：今日发布，通过 `ollama run` 和 `/v1/audio/speech` 接口全面支持 macOS 语音功能。  
  🔗 [GitHub Release v0.40.11](https://github.com/ollama/ollama/releases/tag/v0.40.11)  
  *注：本次发布未报告破坏性变更；向后兼容性已保留。*

---

### **3. 新模型与硬件支持**  
- **MLX 引擎**：新增对 **Nemotron 3.5 Bolt 74B-A9B** 的支持，包含逐层专家配置、LiLiCorr 预测解码以及混合精度专家堆叠。  
  🔗 [PR #19229](https://github.com/ollama/ollama/pull/19229)  
- **视觉模型**：通过动态网格舍入优化了紧凑型 Gemma 4 视觉塔对小图像细节的保留能力。  
  🔗 [PR #19247](https://github.com/ollama/ollama/pull/19247)  
- **社区集成**：新增 **Pixeltable**、**Knovum**、**ShibaClaw** 与 **Golem** 到社区集成（数据库/嵌入、桌面代理、框架）。  
  🔗 [PR #19269](https://github.com/ollama/ollama/pull/19269), [PR #19261](https://github.com/ollama/ollama/pull/19261), [PR #19259](https://github.com/ollama/ollama/pull/19259), [PR #18816](https://github.com/ollama/ollama/pull/18816)

---

### **4. 性能与优化**  
- **MLX vs. llama.cpp**：观察到回归问题，即 `flint:40b-a2b-gguf-nvfp4`（MLX）在 Apple Silicon（M3，36GB）上显著慢于 `flint:40b-a2b-qat-int4`。基准数据显示，在相同提示下吞吐量差异约达 2 倍。  
  🔗 [Issue #19254](https://github.com/ollama/ollama/issues/19254)  
- **分词准确性**：PR #19265 将基于启发式的分词计数替换为精确的 Anthropic Tokenization API + 本地缓存，降低了多模态提示中的上下文溢出风险。  
  🔗 [PR #19265](https://github.com/ollama/ollama/pull/19265)  
- **内存计数**：对 `ollama ps` 与调度器显存报告的修复，确保多模型与混合注意力负载下的内存使用统计准确。  
  🔗 [PR #17857](https://github.com/ollama/ollama/pull/17857), [PR #19263](https://github.com/ollama/ollama/pull/19263)

---

### **5. 稳定性与回归问题**  
| 问题 | 严重性 | 状态 | 修复 PR？ | 说明 |
|------|----------|--------|---------|-------|
| `OLLAMA_NUM_PARALLEL=1` 被忽略（两个会话同时运行） | 严重 | OPEN | ❌ | 内存受限用户无法强制顺序执行。 |
| `stop` 序列在 MLX 引擎中被忽略 | 高 | OPEN | ✅ [PR #19267](https://github.com/ollama/ollama/pull/19267) | 破坏确定性控制流；修复待合并。 |
| 逐层量化覆盖无法加载（MLX safetensors） | 高 | OPEN | ❌ | 形状不匹配导致模型导入失败。 |
| Beam 模型在 OMP 中返回空响应 | 中等 | OPEN | ❌ | 尽管通过 OpenCode Go 可正常工作，仍间歇性失败。 |
| `max_completion_tokens` 静默丢弃 | 中等 | CLOSED | ✅ [PR #18608](https://github.com/ollama/ollama/pull/18608) | 已修复：现正确映射至 `num_predict`。 |

---

### **6. 对应用开发者的意义**  
- **语音输出已就绪**：应用现在可直接通过标准 OpenAI 兼容端点从 macOS 上的 Ollama 流式传输合成语音——适用于语音驱动的智能体或交互式界面。  
- **MLX 用户需警惕回归问题**：使用 `stop` 序列或混合精度模型时务必谨慎；当前行为可能导致无限生成或加载失败。建议等待 PR #19267 合并后再投入生产环境。  
- **分词计数更精确**：请停止依赖粗略启发式估算，您的提示工程将更具可预测性，尤其在多模态输入场景下。  
- **智能体框架集成更完善**：随着 ShibaClaw、Golem 与 Knovum 等新增集成，开发者可基于 Ollama 作为后端构建自托管、持久化的智能体，无需外部 API。  
- **部署最佳实践**：仅在严格管理内存时使用 `OLLAMA_NUM_PARALLEL=1`——当前行为存在不一致。请持续关注后续修复。

> 💡 **实用提示**：在 Apple Silicon 上进行高吞吐推理时，由于近期性能分化，请对大型模型（如 Flint 40B）的 MLX 与非 MLX 版本均进行基准测试。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

### **LiteLLM 简报 — 2026-10-25**

---

#### **1. 今日重点**  
LiteLLM 持续快速迭代，聚焦安全、成本准确性与稳定性。此前涉及 `v1.107.0` 版本被泄露的严重安全事件已解决：PyPI 和 Docker 镜像已被移除，用户需立即使用来自提交 [`e82a3c6`](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065) 的新 cosign 密钥验证镜像签名。同时，多个与预算控制、流式调用统计及工具保留相关的高危缺陷已在针对核心推理可靠性的合并请求中修复。

---

#### **2. 发布与破坏性变更**  
- **v1.106.3, v1.105.4, v1.104.6, v1.103.8**：均包含一项**关键破坏性变更**——镜像签名密钥已轮换。  
  - ✅ **必须操作**：用户需更新验证流程，使用来自提交 [`e82a3c6`](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065) 的新 cosign 密钥。  
  - ❌ 旧密钥将不再能验证镜像或 Helm Chart。  
  - [GitHub 发布说明](https://github.com/BerriAI/litellm/releases/tag/v1.106.3) | [安全通告 #47826](https://github.com/BerriAI/litellm/issues/47826)

---

#### **3. 新模型与硬件支持**  
- **Cerebras Llama 3.1 模型**：新增连字符别名（`cerebras/llama-3.1-8b`, `cerebras/llama-3.1-70b`），并提供官方定价与上下文窗口数据。  
  - ✅ 已支持于 `model_prices_and_context_window.json` 及其备份文件中。  
  - [PR #48178](https://github.com/BerriAI/litellm/pull/48178) | [PR #48158](https://github.com/BerriAI/litellm/pull/48158)  
- **NVIDIA Nemotron 3.5 Super VL**：通过 Weights & Biases (W&B) 无服务器推理费率更新定价。  
  - [PR #48264](https://github.com/BerriAI/litellm/pull/48264)  
- **Azure 转录会话**：现通过 GA client_secrets 端点路由；修复此前 404 错误问题。  
  - [PR #48067](https://github.com/BerriAI/litellm/pull/48067)  

---

#### **4. 性能与优化**  
- **批量与超快层级定价**：LiteLLM 现在可解析 OpenAI 最新层级的 12 小时提示缓存写入成本。  
  - 支持对批量推理工作负载进行精准成本建模。  
  - [PR #48259](https://github.com/BerriAI/litellm/pull/48259)  
- **流式传输效率**：修复 `tools` 丢失及客户端早期断开导致 `usage` 信息丢失的问题，提升计费准确性。  
  - [PR #48267](https://github.com/BerriAI/litellm/pull/48267) | [PR #48220](https://github.com/BerriAI/litellm/pull/48220)  

---

#### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 修复 PR |
|--------|------|--------|--------|
| 🔴 关键 | 在 `v1.82.3` 中，尽管支出超过 `max_budget`，预算控制仍被绕过 | OPEN | [Issue #26672](https://github.com/BerriAI/litellm/issues/26672) |
| 🔴 高 | 客户端断开时流式调用的用量丢失（造成计费缺口） | OPEN | [Issue #14457](https://github.com/BerriAI/litellm/issues/14457) |
| 🔴 高 | `end_user` 字段错误地绑定至共享虚拟密钥的首次请求 | OPEN | [Issue #31441](https://github.com/BerriAI/litellm/issues/31441) |
| 🟡 中等 | 在持续负载下因 Redis 同步延迟导致误报 `BudgetExceededError` | OPEN | [Issue #36926](https://github.com/BerriAI/litellm/issues/36926) |
| 🟡 中等 | 非目录化模型在 JSON 提供商中工具被剥离 | CLOSED | [PR #48267](https://github.com/BerriAI/litellm/pull/48267) |

> ⚠️ **注意**：多项回归问题源于近期模型路由与成本计算逻辑的变更。团队正通过针对性合并请求积极修复。

---

#### **6. 对应用开发者的意义**  
- **立即行动**：若您在生产环境中使用 LiteLLM，**请立即使用来自 [`e82a3c6`](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065) 的新 cosign 密钥验证镜像签名**。  
- **计费完整性**：使用流式请求或长时间会话时务必谨慎——不完整的 `usage` 跟踪可能导致严重计费偏差。请监控日志中缓存或中断调用的 `spend = 0` 情况。  
- **自定义提供商**：使用非目录化模型时，请确保工具被保留。可在您的 fork 中使用 `fix(openai_like): preserve tools for uncatalogued models` ([PR #48267](https://github.com/BerriAI/litellm/pull/48267))，或等待 v1.107+ 版本发布。  
- **成本建模**：利用 Cerebras 与 NVIDIA 模型的最新定价，并启用新批次层级成本解析功能以实现更精确的预测。  

> 💡 **实用提示**：审计您的 `max_budget` 与 `budget_reset_period` 配置——部分用户报告因数据库写入问题导致预算重置未持久化 ([#25386](https://github.com/BerriAI/litellm/issues/25386))。请使用最新补丁版本，避免无声超支。

---  
*简报生成时间：2026-10-25 | 来源：GitHub @ BerriAI/litellm*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-10-25**

---

### **1. 今日亮点**  
Unsloth 生态系统持续推进核心推理与 UI 稳定性优化，针对 Windows 与 macOS 平台的 GPU 内存管理及模型加载问题修复了关键缺陷。主要进展包括在 `llama-server` 中引入基于 `--preempt-ram` 的 KV 缓存共享机制，实现高效并行聊天处理；同时对 UI 进行了显著优化，重点提升存储可见性与用户体验一致性。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未发布新版本。*  
但多个破坏性变更正在活跃的 PR 中待合并：  
- **PR #10301**：为 `llama-server` 引入 `--preempt-ram` 支持，使 Studio 能够在并行聊天间共享 KV 缓存。若依赖每会话独立缓存隔离，客户端逻辑需相应更新。[链接](https://github.com/unslothai/unsloth/pull/10301)  
- **PR #15175 & #15174**：新增流水线并行与张量并行 API（`apply_pipeline_parallel`、`sharded_loading`），支持密集解码器（如 GPipe、1F1B）的多 GPU 训练与推理，但需通过显式调用 `apply_tensor_parallel()` 启用。[链接](https://github.com/unslothai/unsloth/pull/15175)  

> ⚠️ 升级至 v0.1.910-beta 的用户应预期可能遇到模型加载相关的回归问题（参见 Issue #15142）。

---

### **3. 新模型与硬件支持**  
- **硬件**：AMD gfx1201（Radeon 8060S）用户报告在 `llama.cpp` b11696 版本更新后出现 ROCm 启动失败——当前正调查中（Issue #14085）。  
- **后端**：PR #14431 已落地 Metal 内存不足恢复改进，现在在 Mac 上执行 `--fit-target` 操作时会预留 DSpark/DFlash 侧车内存。  
- **量化**：通过 PR #15166，UD-IQ1_S 量化格式（用于 DeepSeek-V4.1-Flash-1017-GGUF）获得更优的内存统计与流式支持。  

> ✅ 今日未新增模型架构或量化格式。

---

### **4. 性能与优化**  
- **并行推理**：PR #10301 通过 `llama-server` 所拥有的停车机制，实现了并行聊天间真正的 KV 缓存共享，在高并发场景下内存开销可降低约 40%（估算值）。  
- **模型卸载**：PR #15173 将 Wan 视频编码流扩展至模型/顺序卸载路径，改善生成过程中的延迟表现。  
- **高效编码**：PR #15166 在 Wan 工作流中引入负向提示编码缓存，使 fp16 专用 GPU（如 T4）上冗余的 UMT5 文本编码器调用减少约 50%。  
- **训练速度**：张量并行（PR #15174）现支持跨两块 16GB GPU 分片加载 16 位 8B LoRA 模型，训练启动时间减少约 30%。  

> 📈 这些优化旨在提升中端硬件上的推理吞吐量与训练可扩展性。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 摘要 | 修复状态 |
|--------|------|--------|------------|
| 🔴 高 | [#15142](https://github.com/unslothai/unsloth/issues/15142) | Windows 11 Insider Preview 上所有模型在升级至 v0.1.910-beta 后均无法加载 | ❌ 开放 |
| 🔴 高 | [#15022](https://github.com/unslothai/unsloth/issues/15022) | Windows 上每次 GGUF 加载都会触发错误的“子进程未监听”提示而崩溃 | ❌ 开放 |
| 🟡 中 | [#14519](https://github.com/unslothai/unsloth/issues/14519) | 基于 CPU 的对话归档嵌入在长工具密集型对话中出现卡顿 | ❌ 已关闭（暂无修复） |
| 🟡 中 | [#15115](https://github.com/unslothai/unsloth/issues/15115) | `preserve_thinking=true` 在启动时被强制启用，覆盖自定义模板设置 | ❌ 开放 |
| 🟡 中 | [#15172](https://github.com/unslothai/unsloth/issues/15172) | Studio 在图像生成时崩溃（核心转储） | ❌ 开放 |

> 💡 注意：多个问题源于近期的 UI 与后端重构——尤其涉及端口管理、模型生命周期与元数据持久化。

---

### **6. 对应用开发者的启示**  
- **推理负载**：利用 `--preempt-ram` 与 `parallel=4` 可在不产生过多内存冗余的前提下提升并发能力。注意监控长时间运行聊天中的边缘情况（参见 Issue #14519）。  
- **多主机训练**：使用 `apply_tensor_parallel()` 与 `apply_pipeline_parallel()`（PRs #15174, #15175）实现跨多 GPU 扩展训练；确保 `random_seed` 验证已强制启用（PR #15176）。  
- **UI 集成**：使用自定义聊天模板时需谨慎——`preserve_thinking=true` 现已在服务器启动时硬编码（参见 Issue #15115）。仅在完全掌控 `llama-server` 命令行时才考虑使用 `--no-reasoning-preserve`。  
- **安全与可靠性**：避免使用未经验证的 `random_seed` 值（PR #15176）；在发送至 Studio API 前验证输入。  
- **未来兼容性**：预计模型加载复杂度将上升（尤其在 Windows/macOS 上），建议为 `llama-server` 启动失败实现健壮的错误处理（参见 Issue #15022）。

> ✅ 推荐：针对 v0.1.910-beta+ 行为审计所有模型加载流程，特别是在集成远程服务（参见 Issue #14811）或自定义文件夹（参见 Issue #15043）时。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*