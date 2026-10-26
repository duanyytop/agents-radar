# AI 基础设施日报 2026-10-26

> 生成时间: 2026-10-26 00:40 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-10-26**

---

### **1. 生态概览**  
2026年末，AI推理基础设施领域呈现出新一代硬件（Blackwell、SM120、RDNA4、XPU）的快速收敛趋势，对推测解码和KV缓存效率的激进优化，以及模型服务在各平台间稳定性日益加剧的碎片化。尽管vLLM和SGLang在高吞吐、GPU优化推理引擎方面仍处于领先地位，但Ollama和Unsloth则更侧重本地运行时的可靠性与面向代理的用户体验。LiteLLM作为主导的网关层，正经历积极的安全强化，支持实时成本追踪与多提供商路由。生态系统已超越单纯性能追求——焦点转向生产环境的韧性、跨平台一致性以及安全编排。

---

### **2. 活动对比**  

| 项目       | 开启问题（24小时） | 合并PR（24小时） | 发布版本（24小时） | 状态 |
|------------|---------------------|------------------|----------------------|------|
| **vLLM**   | 8                   | 7                | 0                    | 稳定夜间构建；存在关键回归 |
| **SGLang** | 5                   | 6                | 0                    | 活跃修复；聚焦推测解码 |
| **llama.cpp** | 6               | 5                | 3                    | 补丁发布；CUDA/ROCm安全修复 |
| **Ollama** | 9                   | 4                | 0                    | 稳定性推进；macOS/Metal问题 |
| **LiteLLM** | 6                | 5                | 4                    | 安全导向发布；紧急修补 |
| **Unsloth** | 5                 | 5                | 0                    | UI/后端打磨；Windows/macOS bug |

> 🔍 *观察：LiteLLM 因安全关键更新而释放速度领先；vLLM 和 Ollama 由于深度硬件/模型集成挑战，问题数量占优。*

---

### **3. 模型支持竞赛**  

| 新模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------|------|--------|-----------|--------|---------|---------|
| **Qwen4Exp** | ✅   | ❌     | ✅        | ❌     | ❌      | ❌      |
| **Kimi-K3 (SM107)** | ❌ | ✅     | ❌        | ❌     | ❌      | ❌      |
| **MiniCPM-V-4.7-1B-GGUF** | ❌ | ❌     | ✅        | ❌     | ❌      | ✅      |
| **FLUX.3 Klein (图像)** | ❌ | ❌     | ❌        | ❌     | ❌      | ✅      |
| **Sideren (OpenAI API)** | ❌ | ❌     | ❌        | ❌     | ✅      | ❌      |
| **DeepSeek-V4.1** | ⚠️ | ⚠️     | ⚠️        | ⚠️     | ⚠️      | ⚠️      |

> 🏁 **胜出者：Unsloth 与 llama.cpp** — 二者均实现了新模型支持（GGUF视觉 + 图像编辑），而 **LiteLLM** 在提供方多样性上领先，成功集成 Sideren。**vLLM** 在企业级模型覆盖（Qwen3/VL、Kimi K2.5）方面依然最强，但面临回归风险。

---

### **4. 性能前沿**  

| 关注方向 | 领先项目 | 关键进展 |
|----------|----------|----------|
| **KV缓存优化** | vLLM、SGLang、llama.cpp | Blackwell MoE融合（解码提升+48%）、AMD RDNA4块复用、持久化卸载命名空间 |
| **推测解码** | vLLM、SGLang | EAGLE/MTP前缀缓存修复、草稿宽度对齐、崩溃缓解 |
| **量化效率** | llama.cpp、Unsloth | 基于DPAS的flash attention（SYCL）、Intel Arc上的Q4_0/K量化、CPU卸载MoE |
| **分布式服务** | SGLang（HiCache）、vLLM（PP=3） | 后端传输接口抽象、多节点预填充中的PP同步瓶颈 |
| **内核级调优** | vLLM（SM120）、llama.cpp（HIP/SYCL） | 融合MoE内核、减少冗余读取、优化work-group argmax |

> 💡 *vLLM 和 llama.cpp 在内核层面最为活跃；SGLang 在分布式流水线设计上表现卓越；LiteLLM 更关注代理层正确性而非单纯吞吐。*

---

### **5. 层级定位**  

| 项目       | 主要层级 | 角色摘要 |
|------------|----------|----------|
| **vLLM**   | **推理引擎** | 高性能、原生GPU推理引擎，适用于大模型；云规模部署首选 |
| **SGLang** | **推理引擎 + 编排器** | 结合引擎与高级推测解码及分布式流水线；面向代理就绪 |
| **llama.cpp** | **本地运行时 + 跨平台后端** | 支持CPU/GPU/CUDA/ROCm/SYCL/MLX后端；适用于边缘、桌面或混合环境 |
| **Ollama** | **模型服务网关 + CLI运行时** | 开发者优先抽象；通过简单CLI/API实现模型与应用连接；本地体验强 |
| **LiteLLM** | **LLM网关 / 代理层** | 多提供商路由、预算控制、认证、成本监控；管理型推理栈必备 |
| **Unsloth** | **代理平台 + 桌面运行时** | 全栈式AI桌面，含Flows、语音输入、聊天持久化；面向终端用户代理 |

> 📊 *战略定位：vLLM/SGLang = 核心推理；LiteLLM = 控制平面；Ollama/Unsloth = 应用交付层；llama.cpp = 通用后端基底。*

---

### **6. 趋势信号**  

🔍 **从今日活动提取的关键行业趋势：**  
1. **以硬件为中心的优化**：Blackwell（SM120）与ROCm/HIP已成为首要目标——vLLM和llama.cpp在早期采纳中领先。  
2. **推测解码稳定性优先于速度**：vLLM和SGLang中草稿生成器的严重崩溃表明，正确性已超越吞吐量提升成为更高优先级。  
3. **网关层的安全与成本控制**：LiteLLM四次紧急安全发布证实，代理层正成为运营风险中心——认证、支出日志、速率限制已成不可妥协要求。  
4. **本地代理工作流需可靠性保障**：Unsloth与Ollama对长提示稳定性的关注（macOS Metal、VRAM驱逐问题），反映出个人AI代理对稳健本地执行的需求上升。  
5. **通过可配置提供方实现模型无差别接入**：LiteLLM集成Sideren，体现了向JSON可配置后端的转变——降低多模型路由的代码变更成本。

> 🛠️ **开发者建议**：  
> - 在H100/Blackwell上进行高吞吐、可扩展推理时，使用 **vLLM**。  
> - 若用于生产部署，仅在验证 `cosign` 签名后使用 **LiteLLM**。  
> - 请避免在Radeon 890M或Apple Silicon设备上使用 **Ollama 0.40.6–0.40.7**，直至补丁发布。  
> - 优先选择支持HIP/SYCL的 **llama.cpp** 构建版本，用于AMD/Intel GPU。  
> - 利用 **Unsloth Flows** 实现无代码AI代理开发——它是首个真正意义上的桌面代理平台。

> ✅ **总结**：基础设施栈不再仅关乎速度——而是关于**正确性**、**安全性**与**用户信任**。选择工具不仅看性能，更要考量其运营完整性。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# **vLLM Digest – 2026-10-26**

---

### **1. 今日亮点**  
vLLM 项目持续加速对下一代硬件和多模态模型的支持，重点推进 Blackwell（SM120）GPU 优化以及在推测解码模式下 KV 缓存的可靠性。关键 PR 集中于 Blackwell 上融合 MoE 内核的性能调优（解码吞吐提升 +48%）、MTP/EAGLE 草稿生成器中前缀缓存处理的改进，以及持久化 KV 卸载命名空间问题的修复。一项重大 RFC 提出构建可复用的 KV 压缩层，以实现高效模型传输与存储。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告任何内容。*  
未发布新版本或破坏性 API/配置变更。用户应继续谨慎使用 v0.32.x 夜间构建版本，注意 `Qwen3.8-Flash-Next` 与 `DeepSeek-V4.1` 中已知的回归问题。

---

### **3. 新模型与硬件支持**  
- ✅ **Blackwell (SM120)**：通过 [RFC #38175](https://github.com/vllm-project/vllm/issues/38175) 正在积极开发 ViT 编码器（如 Qwen3-VL、Kimi K2.5）的完整 CUDA graph 支持。  
- ✅ **aarch64 + GB10 (Grace Blackwell Superchip)**：[Issue #36821](https://github.com/vllm-project/vllm/issues/36821) 跟踪 ARM64 上缺少 SM121 支持的问题——目前阻碍 DGX Spark 部署。  
- ✅ **ROCm (gfx1151, gfx950)**：PRs [#62509](https://github.com/vllm-project/vllm/pull/62509) 与 [#63072](https://github.com/vllm-project/vllm/pull/63072) 新增 MiniMax-M3.1-Flash (MXFP8) 和 GLM-5.3-Flash（分块 KDA 预计算）的内核优化。  
- ✅ **Intel GPU (XPU)**：通过 [PR #63531](https://github.com/vllm-project/vllm/pull/63531) 实现 Kimi-Linear 模型调度的初步支持，待 MLA 修复 ([#63530](https://github.com/vllm-project/vllm/pull/63530))。

---

### **4. 性能与优化**  
- 🚀 在 Blackwell 上通过优化批次无关的融合 MoE 配置，实现 **+48% 解码吞吐量** ([PR #63627](https://github.com/vllm-project/vllm/pull/63627))。  
- 🔧 **Top-k 回退缓解**：单体 Triton top-k 内核通过改进早期 logits 的枢纽选择，避免全词表搜索（问题 #61998）。  
- ⚙️ **推测解码效率**：  
  - 为本地前缀缓存添加 EAGLE 前瞻块哈希 ([PR #61589](https://github.com/vllm-project/vllm/pull/61589))。  
  - 将 MTP 验证步骤集成至 MI355X 的单内核解码路径 ([PR #63555](https://github.com/vllm-project/vllm/pull/63555))。  
- 📈 **基准测试改进**：`vllm bench forward` 现默认包含草稿生成器耗时 ([PR #63622](https://github.com/vllm-project/vllm/pull/63622))。

---

### **5. 稳定性与回归**  
| 严重性 | 问题 | 描述 | 修复状态 |
|--------|------|-------------|------------|
| 🔴 严重 | [Issue #63505](https://github.com/vllm-project/vllm/issues/63505) | 在 Qwen3.8-27B（GDN 混合）上使用 PP=3、sm_86 时发生非法内存访问（Xid 31），无前缀缓存时输出乱码。自 v0.28.0 起出现的回归。 | ❌ 尚无修复 |
| 🔴 严重 | [Issue #62776](https://github.com/vllm-project/vllm/issues/62776) | Qwen3.8-Flash-Next 中提示内容超过 `indexer_budget`（约 2048 个 token）后不可见——模型表现如同提示在 2K 处结束。 | ❌ 尚无修复 |
| 🟡 高 | [Issue #63343](https://github.com/vllm-project/vllm/issues/63343) | 尽管设备查询镜头仅对 SM90/SM100 开放，但在 SM120 上仍拒绝 `enable_adaptive_verification`。 | ❌ 尚无修复 |
| 🟡 中 | [Issue #63455](https://github.com/vllm-project/vllm/issues/63455) | AutoAWQ 检查点在 gfx1151 上使用低效的 RDNA W4A16 内核而非优化版本；比 BF16 慢 2.5 倍。 | ❌ 尚无修复 |
| 🟡 中 | [Issue #54919](https://github.com/vllm-project/vllm/issues/54919) | 在 2 节点 DGX Spark TP2 上，长预填充工作负载导致活跃解码饥饿 3–7 分钟。 | ❌ 尚无修复 |

> 注：多个稳定性问题影响 **Qwen3.8-Flash-Next**、**DeepSeek-V4.1** 与 **Kimi K2.7/K3** 在 H100/H200/Blackwell GPU 上的表现。

---

### **6. 对应用开发者的影响**  
- **避免在生产推理中使用 v0.32 夜间版**，直到这些问题解决——预计会出现静默的提示截断与解码饥饿。  
- **在 Blackwell 上启用 `VLLM_BATCH_INVARIANT=1`** 可解锁高达 **48% 更快的 MoE 解码**。  
- **在 SM120 上显式使用 `--kv-cache-dtype fp8_ds_mla`**；`auto` 自动选择会静默失败（[Issue #47174](https://github.com/vllm-project/vllm/issues/47174)）。  
- **使用 MTP/EAGLE 草稿生成器时密切监控 KV 缓存行为**——因哈希对齐错误可能导致前缀缓存命中丢失（已在 [#61589](https://github.com/vllm-project/vllm/pull/61589) 中追踪）。  
- **在多节点部署中规划 ROCm/AMD 支持**：确保 `gfx1151`/`gfx950` 内核已启用并经过验证。  
- **考虑持久化 KV 卸载命名空间**：当前实现缺乏模型版本隔离（[Issue #49261](https://github.com/vllm-project/vllm/issues/49261)）——存在跨模型版本污染缓存的风险。

> 💡 *建议*：每日使用 `collect_env.py` 并验证夜间构建版本；关注 [RFC #59538](https://github.com/vllm-project/vllm/issues/59538)，以在未来大规模部署中获益于 KV 压缩能力。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest – 2026-10-26

---

### **1. 今日亮点**  
SGLang 持续对下一代推理工作负载进行激进优化，重点推进 Hopper（SM90）GPU 上的推测解码稳定性与高吞吐服务。关键修复包括基于 FlashInfer 的 DSpark 崩溃问题和草稿查询宽度不匹配问题，新提交的 PR 引入了 Kimi-K3 在 SM107 上的低延迟路径，并增强了 HiCache 中多节点 GPU 的同步能力。

---

### **2. 发布与破坏性变更**  
过去 24 小时内无报告。未发布新版本或破坏性 API/配置变更。

---

### **3. 新模型与硬件支持**  
- ✅ **Kimi-K3** 现已通过 PR #46473 实现针对 SM107 架构的专用低延迟内核优化，支持更快速的 FP4 路由与融合元数据准备。  
- 🚧 **Apple Silicon（M 系列）** 支持仍处于路线图阶段（Issue #19137），欢迎社区贡献。  
- 🔧 **AMD ROCm 10** 支持扩展：PR #46236 修复了在 ROCm 10 上 V4.1 k-norm-rope store 的构建失败问题。  
- 📦 **分布式推理**：PR #46455 引入后端传输接口，统一 Mooncake、NIXL 与 Mori 后端，为未来跨平台调度奠定基础。

---

### **4. 性能与优化**  
- ⚡ **FlashInfer DSpark 性能**：PR #46478 与 #46477 修复了 FA 后端中草稿前向宽度错误的问题，提升推测解码的正确性并减少延迟漂移。  
- 📈 **HiCache 流水线并行瓶颈**：Issue #45351 指出 PP-sync 在多秩间锁步导致性能瓶颈——对多节点预填充服务器的横向扩展至关重要。  
- 🔼 **Kimi-K3 SM107 路径优化**：PR #46473 通过融合 MoE 层操作（如路由元数据准备、最终 all-reduce）降低启动开销与延迟。  
- 📊 **内存效率提升**：PR #46480 将束搜索中的 token 材料化推迟至最终输出阶段，减轻中间内存压力。  
- 🔄 **统一基数缓存**：PR #45434 新增 `cp_kv_layout` 配置项及填充存储计账机制，提升上下文并行 KV 布局灵活性。

---

### **5. 稳定性与回归问题**  
- ❌ **非贪婪推测解码在非贪婪请求下崩溃**：Issue #43412 报告使用 pip 安装的 CUDA 工具包（`cu13`）而非捆绑的 CCCL 时，因 FlashInfer JIT 失败导致服务器崩溃；修复待定（PR #46478 修复相关逻辑）。  
- ❌ **多节点 GB300 上输出混乱**：Issue #45367 显示使用 Kimi-K3 DCP a2a 时解码输出损坏；临时解决方案：设置 `NCCL_GRAPH_REGISTER=0`。  
- ❌ **GPT-OSS SwiGLU 静默误编译**：Issue #45755 揭露 `flashinfer_mxfp4` 在 SM90 上计算错误激活函数（实际为 SwiGLU 而非 SiTU），影响模型精度。  
- ❌ **FA3/FA4 中草稿查询宽度错误**：Issue #46476 确认 `sample_from_anchor=False` 导致草稿宽度不匹配；已由 PR #46478 修复。  
- ⚠️ **FlashInfer 预填充不变性缺陷**：Issue #46259 显示基数缓存命中或分块预填充会翻转 Qwen3.5 混合 GDN 的贪婪输出——可能严重影响正确性。

---

### **6. 对应用开发者的启示**  
- **若使用 pip 安装的 CUDA 工具链，请避免非贪婪推测解码**——建议改用系统 CUDA toolkit，或等待 PR #46478 的补丁。  
- **监控 Kimi-K3 在多节点系统上的部署情况**——如出现输出混乱，请禁用 `NCCL_GRAPH_REGISTER`。  
- **仅在验证兼容性后启用 `--enable-multi-layer-eagle`**，因其当前在 LlamaForCausalLM 上会崩溃（Issue #36536）。  
- **善用新指标与诊断工具**，如 `SGLDWorkerStatus`（PR #43697），以调试 ComfyUI 工作流与 IPC 瓶颈。  
- **谨慎使用 `--tokenizer-worker`**：issue #43304 呼吁增加指标追踪多分词器流水线延迟——建议升级至最新 main 分支。

> 🔗 [GitHub Issues](https://github.com/sgl-project/sglang/issues) | [Pull Requests](https://github.com/sgl-project/sglang/pulls)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 消息简报 – 2026-10-26**

---

### **1. 今日亮点**  
最新更新聚焦于递归语法解析的关键稳定性修复及 CUDA 内存安全优化，有效防止推理过程中发生栈溢出以及 CPU/内存资源耗尽问题。针对 AMD RDNA4（HIP）和 SYCL 后端实现了显著的内核优化，提升了 KV 缓存效率，并在 Intel Arc GPU 上实现了量化 Flash Attention 支持。

---

### **2. 发布与破坏性变更**  
- **`b11889`**：通过将 `archName` 中的 C 风格可变长度数组（VLAs）替换为 `std::string`，现代化了 CUDA 代码，消除了编译警告并提升了代码安全性 ([PR #30463](https://github.com/ggml-org/llama.cpp/pull/30463))。  
- **`b11888`**：在 GBNF 语法解析器中强制设置硬性递归深度限制，防止栈溢出漏洞 ([PR #31153](https://github.com/ggml-org/llama.cpp/pull/31153))。该检查现已作为所有递归函数的必选项。  
- **`b11887`**：调整 `test-llama-context` 的默认线程数以避免 CI 环境中的资源竞争 ([PR #31157](https://github.com/ggml-org/llama.cpp/pull/31157))。

---

### **3. 新模型与硬件支持**  
- **Qwen4Exp**：合并转换过程中的张量融合支持（`qwen: merge tensors on convert`）——显著提升 Qwen3.5-9B 及类似变体的加载与推理效率 ([PR #31028](https://github.com/ggml-org/llama.cpp/pull/31028))。  
- **AMD RDNA4 (ROCm/HIP)**：通过减少冗余读取，优化了更高效的 KV 缓存解码机制——现在每个流水线可加载完整的 32 个值 K 块，单个查询头的重复访问次数从最高 8 倍降至 1 倍 ([PR #30803](https://github.com/ggml-org/llama.cpp/pull/30803))。  
- **Intel Arc B70 (SYCL)**：新增对设备端 MoE 调度的支持，以及针对 Q4_0/K 量化数据的向量化反量化内核，在 oneAPI 2026.1 上观察到性能提升 ([PRs #30156](https://github.com/ggml-org/llama.cpp/pull/30156), [#30976](https://github.com/ggml-org/llama.cpp/pull/30976))。  
- **WebGPU**：修复并行测试执行期间 `memset` 的竞态条件 ([PR #31162](https://github.com/ggml-org/llama.cpp/pull/31162))。

---

### **4. 性能与优化**  
- **CUDA**：将 FFN 门控/上采样矩阵乘法与 GLU 操作融合为单一 `mul_mat_q` 启动，用于提示处理，降低内核开销，提升如 Qwen3.5-9B 等模型的吞吐量 ([PR #29948](https://github.com/ggml-org/llama.cpp/pull/29948))。  
- **SYCL**：优化短 TOP_K 行的工作组 argmax 及受限的 CONV_TRANSPOSE_1D 输入迭代，使 Intel Arc Pro B70 上的延迟明显下降 ([PRs #31110](https://github.com/ggml-org/llama.cpp/pull/31110), [#31109](https://github.com/ggml-org/llama.cpp/pull/31109))。  
- **量化 Flash Attention (SYCL)**：引入基于 DPAS 的新 Flash Attention 内核，支持 Xe2 平台（B580/B570/B70/Lunar Lake/Panther Lake）上的 q4_0/q8_0 KV 缓存，覆盖解码与小批量（1–31 个 token）场景 ([PR #31125](https://github.com/ggml-org/llama.cpp/pull/31125))。

---

### **5. 稳定性与回归问题**  
- **严重栈溢出风险**：问题 #18988（通过 #29495 报告）已确认：GBNF 语法中的嵌套重复可能导致栈溢出。现通过 `b11888` 中强制递归深度限制予以缓解 ([PR #31153](https://github.com/ggml-org/llama.cpp/pull/31153))。  
- **CUDA 内存耗尽**：已修复漏洞 #31035：干序列断点导致过度占用 CPU/内存；现已正确限制。  
- **回归报告**：  
  - **Vulkan (RDNA1)**：在混合模型中，`b10455` 到 `b11429` 之间提示处理性能下降约 45% —— 正在调查中 ([Issue #30039](https://github.com/ggml-org/llama.cpp/issues/30039))。  
  - **CUDA (Windows)**：RTX 4080 Super 上使用 Flash Attention 出现非法内存访问 —— 在 `b11577` 构建版本中报告 ([Issue #30436](https://github.com/ggml-org/llama.cpp/issues/30436))。  
  - **Q4_1/Q5_1 矩阵-向量内核**：当块偏移乘以 Q8_1 和时发生 FP16 溢出 —— 导致输出为 NaN logits ([Issue #30950](https://github.com/ggml-org/llama.cpp/issues/30950))。暂无修复 PR。  
  - **Metal (M1 Max)**：长上下文解码后出现静默提前结束（EOS）—— 行为具有随机性，与模型量化/键值量化相关 ([Issue #28805](https://github.com/ggml-org/llama.cpp/issues/28805))。

---

### **6. 对应用开发者的启示**  
- **语法解析**：若使用自定义 GBNF 语法（例如 JSON 输出校验），请确保规则不超出强制递归深度限制——此举可防止崩溃，但可能需要重构深层嵌套结构。  
- **多 GPU/CUDA**：避免 4 位 KV 缓存下的静默降级——应启用 `GGML_CUDA_FA_ALL_QUANTS=ON` 或显式开启卸载，以避免高达 30 倍的性能下降 ([Issue #28633](https://github.com/ggml-org/llama.cpp/issues/28633))。  
- **性能调优**：对于在 AMD 或 Intel GPU 上部署高吞吐场景，优先选择启用了 HIP/SYCL 优化的构建版本——尤其适用于 MoE 模型与长上下文任务。  
- **模型兼容性**：在 Metal 与 Vulkan 上使用 Qwen3.5-9B 与 Qwen4Exp 变体时需谨慎——请对照已知回归问题验证输出结果。  
- **CI/测试**：使用 `test-backend-ops` 时务必配合类型/后端检查——近期 PR 已强制对不支持类型触发硬失败 ([PR #30279](https://github.com/ggml-org/llama.cpp/pull/30279))。

> 🔗 [官方 GitHub 仓库](https://github.com/ggml-org/llama.cpp) | [官网：llama.app](https://llama.app)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-26**

---

### **1. 今日亮点**  
Ollama 生态系统持续发展，模型服务的稳定性与基础设施韧性不断增强，尤其在 GPU 内存管理及 macOS Metal 可靠性方面表现突出。针对长时间提示处理期间 macOS Metal 崩溃问题（#19278）的紧急修复正在推进中，同时新提交的 PR 解决了限速下载（#19288）、多 GPU 系统中误触发的显存淘汰（#19284），以及 Gemma4 中工具调用解析失败导致的静默错误（#19274）。这些进展表明项目正聚焦于多样化部署环境下的生产级健壮性。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未检测到新版本发布或破坏性变更。*  
最新稳定版本仍为 **0.40.11**，未报告迁移说明或接口破坏性更新。

---

### **3. 新模型与硬件支持**  
- **Gemma4**：解析逻辑优化已确保嵌套工具调用列表正确闭合（`]`, `}`），解决了结构化输出中的静默数据丢失问题（[#19274](https://github.com/ollama/ollama/pull/19274)）。  
- **ROCm on Radeon 890M (gfx1150)**：用户报告在 v0.40.6–0.40.7 版本中出现严重不稳定现象（垃圾输出、GPU 页面故障），仅在 v0.33.3 版本可正常运行（[#19290](https://github.com/ollama/ollama/issues/19290)）。  
- **Metal (macOS)**：多个报告指出长提示触发 GPU 监控超时与系统崩溃；通过 MLX 运行器中预填充块缩减策略予以修复（[#19280](https://github.com/ollama/ollama/pull/19280)）。  
- **MLX 引擎**：通过对 window_size 处理逻辑的优化，已为 Gemma、Flint 与 Laguna 模型落地性能改进（[#19291](https://github.com/ollama/ollama/pull/19291)）。

---

### **4. 性能与优化**  
- **下载控制**：`ollama pull` 已实现 `--limit-rate` 与 `--limit-streams` 标志，支持带宽限速（[#19288](https://github.com/ollama/ollama/pull/19288)），直接响应 #2006 用户需求。  
- **显存管理**：修复了当 GPU 显存预测失败时误淘汰仅 CPU 运行器的问题，减少多 GPU 主机上的误模型重载（[#19284](https://github.com/ollama/ollama/pull/19284)）。  
- **提示处理**：在配备 16GB RAM 的 M4 Mac 上，Qwen3.5 4B GGUF 的提示吞吐量表现不佳——社区正寻求性能基准测试与优化指导（[#19282](https://github.com/ollama/ollama/issues/19282)）。  
- **内存效率**：将 MoE 权重卸载至 CPU 的支持正处于积极讨论中（[#11772](https://github.com/ollama/ollama/issues/11772)），潜在实现方式为 `OLLAMA_MOE_OFFLOAD=PARTIAL`。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 影响 | 修复状态 |
|---------|------|--------|------------|
| ⚠️ 高 | **长提示下 macOS Metal 崩溃**（[#19278](https://github.com/ollama/ollama/issues/19278)） | XML 分析过程中引发系统崩溃；影响使用 Apple Silicon 的开发者 | ✅ 补丁开发中（[#19280](https://github.com/ollama/ollama/pull/19280)） |
| ⚠️ 高 | **6-GPU 主机上误触发显存淘汰**（[#19279](https://github.com/ollama/ollama/issues/19279)） | 空闲内存刷新超时 → 模型加载失败 | ✅ 修复已合并（[#19284](https://github.com/ollama/ollama/pull/19284)） |
| ⚠️ 中 | **通过 OMP 调用 Beam 模型返回空响应**（[#19270](https://github.com/ollama/ollama/issues/19270)） | 代理工作流中偶发助手响应为空 | 🔍 正在调查 |
| ⚠️ 中 | **Claude Code Cloud 模型连接被拒绝**（[#19281](https://github.com/ollama/ollama/issues/19281)） | Windows 无 GPU 环境下无法连接 | 🔍 需要诊断 |
| ⚠️ 低 | **"未知模型架构: mllama" 错误**（[#16547](https://github.com/ollama/ollama/issues/16547)） | Llama3.2-vision 未被识别 | ❌ 尚未解决 |

---

### **6. 对应用开发者的启示**  
- **避免在 AMD Radeon 890M 系统上使用近期 Ollama 版本（0.40.6–0.40.7）** —— 请暂用 0.33.3，直至 ROCm 兼容性恢复。  
- **在 macOS 平台**，除非使用经修补的构建版本（采用更小的预填充块），否则在长提示推理时可能出现崩溃（[#19280](https://github.com/ollama/ollama/pull/19280)）。  
- **对于使用结构化输出（工具调用）的代理**，在使用 Gemma4:e4b 时需谨慎——若输入字符串过长，可能遭遇静默列表截断；务必验证输出完整性。  
- **在带宽受限网络下拉取大模型时，请使用 `--limit-rate`**。  
- **在 M4 Mac 上运行 Qwen3.5 4B 时，预期延迟波动**——部署前请本地基准测试。  
- **善用社区集成工具**，如 Bidoli LLM Hardware-Rechner（[#19287](https://github.com/ollama/ollama/pull/19287)）和 Kowalski（[#19283](https://github.com/ollama/ollama/pull/19283)），用于硬件规划与代理流水线编排。  

> ✅ *实用提示：关注 PR [#19280](https://github.com/ollama/ollama/pull/19280) 与 [#19284](https://github.com/ollama/ollama/pull/19284)，以获取 macOS 与多 GPU 环境下的即时稳定性提升。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 简报 – 2026-10-26**

---

### **1. 今日重点**  
LiteLLM 生态系统迎来一系列关键的稳定性与安全修复，主要集中在认证处理、预算逻辑和代理路由方面。重要合并请求（PR）解决了非对象型 JSON 请求体导致的 500 错误（`#48304`，`#48329`）、虚拟密钥消耗记录异常（`#48357`）以及 OAuth 流程中的自重定向循环问题（`#34771`）。与此同时，Sideren 作为 OpenAI 兼容提供方的新支持已合并，进一步扩展了可由 JSON 配置的推理后端列表。

---

### **2. 发布与破坏性变更**  
- **v1.106.4**、**v1.105.5**、**v1.104.7**、**v1.103.9** 在过去 24 小时内发布 —— 所有版本均通过 Cosign 进行安全验证，使用相同的公钥：  
  [https://raw.githubusercontent.com/BerriAI/litellm/e82a3c646908ba0a6ee0beddc4310d7a6cac4065/cosign.pub](https://raw.githubusercontent.com/BerriAI/litellm/e82a3c646908ba0a6ee0beddc4310d7a6cac4065/cosign.pub)  
  ✅ 验证方式：  
  ```bash
  cosign verify --key https://raw.githubusercontent.com/BerriAI/litellm/e82a3c646908ba0a6ee0beddc4310d7a6cac4065/cosign.pub ghcr.io/berriai/litellm:v1.106.4
  ```
  所有镜像（`litellm`、`litellm-database`、`litellm-non_root`、`docker.io/litellm/*`）均遵循此模式。

> 🔒 *注意：这些版本包含与认证失败处理、预算告警及消费日志相关的紧急修复。若使用代理或基于数据库的部署，请尽快迁移。*

---

### **3. 新模型与硬件支持**  
- ✅ **Sideren 已新增**为通过 PR [#48356](https://github.com/BerriAI/litellm/pull/48356) 支持的 JSON 配置型 OpenAI 兼容提供方。  
  - 路由格式：`sideren/<model>`  
  - 仅需配置 `SIDEREN_API_KEY` —— 无需修改代码库。  
  - 实现无需维护 Python 模块的动态模型路由。

> 📌 *今日未报告新的硬件（CUDA/ROCm/Metal/CPU）或量化格式支持。*

---

### **4. 性能与优化**  
- 今日无重大吞吐量、延迟或内存优化补丁合并。  
- 但 PR [#48353](https://github.com/BerriAI/litellm/pull/48353) 通过确保向量存储分页排序一致性并拒绝无效页码，提升了分页稳定性——减少了因错误请求带来的后端负载。

> ⚙️ *显著改善大规模向量存储管理的用户体验与操作可预测性。*

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 修复 PR | 影响 |
|---------|------|--------|--------|
| 🔴 高 | 认证失败处理器在非对象型 JSON 请求体（如 `[...]`、`null`）上崩溃 → 导致 500 错误 | [#48329](https://github.com/BerriAI/litellm/pull/48329) | 中断未认证端点；影响 API 网关与 SDK 客户端 |
| 🔴 高 | 代理在夏令时结束时（2026-10-25 CET）启动陷入无限循环 → 内存溢出被终止 | [#48286](https://github.com/BerriAI/litellm/issues/48286) | 对欧洲地区时间敏感部署至关重要 |
| 🔴 高 | 识别未知令牌的虚拟密钥会生成虚假消费记录 | [#48357](https://github.com/BerriAI/litellm/pull/48357) | 扰乱成本追踪与预算管理 |
| 🟡 中 | CP OAuth DCR 继承仍导致自重定向循环，尽管此前已有修复 | [#34771](https://github.com/BerriAI/litellm/issues/34771) | 影响身份联合工作流 |
| 🟡 中 | Vertex AI 流式输出丢失 `reasoning_content`、工具调用与用量详情 | [#48238](https://github.com/BerriAI/litellm/issues/48238) | 影响使用 Vertex Model Garden 的高推理强度智能体 |

> ✅ *高严重性问题的修复均已合并（PRs #48329、#48357、#48355）。*

---

### **6. 对应用开发者的意义**  
- 若使用带有数据库存储、认证或成本监控功能的 LiteLLM 代理，尤其是生产环境，**请立即升级**——尤其在夏令时切换或接收到畸形数据包时可能引发宕机。
- 部署前务必使用 `cosign verify` 验证所有镜像——这已成为安全 CI/CD 流水线的强制要求。
- 可直接将 **Sideren** 作为无需代码变更的 OpenAI 兼容提供方，用于多提供方路由。
- 与 Ollama 或 Vertex AI 集成时，对 `tools`、`metadata` 与 `stop_sequences` 保持谨慎——已知边缘情况仍存在。
- 使用 Presidio 安全策略时，避免在 `metadata` 中依赖 `user_id`——占位符冲突可能导致输出解析损坏（`#48029`）。

> 💡 *最佳实践：审计所有虚拟密钥配置，并启用软预算告警与实时消费检查（`#48355`），以避免意外超支。*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-10-26**

---

### **1. 今日亮点**  
Unsloth 持续快速演进为全栈式 AI 桌面与智能体平台，核心进展涵盖模型编排、用户界面优化及后端稳定性提升。关键修复包括解决长时间聊天归档时的 CPU 停顿问题（#14519）、Windows 上误报端口占用失败问题（#15022），以及 MiniCPM-V-4.7-1B 使用 Vulkan 推理时的崩溃问题（#14987）。新增功能包括跨客户端持久化聊天置顶（#15293）、系统级语音输入（PR #15201），以及 Flows——一个基于节点的 AI 流水线与 2D 世界编辑器（#14730）。

---

### **2. 发布与破坏性变更**  
过去 24 小时内无报告。  
*注：v0.1.910-beta（10月24日）在 Windows 上引入了模型加载行为的破坏性变更（#15142），可能源于更严格的端口处理检查。*

---

### **3. 新模型与硬件支持**  
- ✅ **MiniCPM-V-4.7-1B-GGUF**：通过 PR #15258 添加 Vulkan 后端支持，修复因词表错位导致的推测解码崩溃问题。  
- ✅ **FLUX.3 Klein 图像模型**：现已在编辑工作流中完全支持（PR #15263），实现 Black Forest Labs 设计的图像编辑功能。  
- ✅ **Nanbeige4.3-33B**：已提出功能请求（#15278），未来将优化并集成为密集型代码模型。  
- ✅ **AMD ROCm/HIP**：问题 #13042 指出 `audio.cpp` 中仍需提供完整的 ROCm/HIP 包以避免仅使用 CPU 的音频处理。

---

### **4. 性能与优化**  
- 🚀 **自动压缩与 KV 池化**：PR #15014 确保图像标记被计入上下文窗口估算，防止工具密集型 GGUF 聊天出现溢出（#14968）。  
- 📈 **内存效率**：PR #14465 将每层嵌入向量（如 DeepSeek-V4.1 Engram、Gemma 4 PLE）从显存重新分类至主机/磁盘内存，显著降低有效 GPU 压力。  
- ⚙️ **GPU 利用率**：PR #14446 支持在空闲的 GPU 对间进行张量拆分——提升多 GPU 系统上稠密模型和 MTP MoE 的利用率。  
- 🔍 **API 提示词预估**：PR #15294 在准入前统计已准备的 API 提示词，防止共享 KV 池过度分配。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 状态 | 修复/临时方案 |
|--------|------|------|----------------|
| 🔴 高 | **Windows GGUF 加载失败**，由误报“子进程未监听”引起 | 已关闭（#15022） | 最新版已修复；请验证文件路径与权限 |
| 🔴 高 | **长对话在推理前卡顿**（CPU 嵌入延迟） | 已关闭（#14519） | 已调查；可能需线程优先级调整或异步归档 |
| 🔴 高 | **模型卸载时产生核心转储**，几轮后无响应 | 开放（#14411） | 未提供日志；请提交 `coredumpctl` 详情与 `llama-server` 调试输出 |
| 🔴 高 | **macOS 上使用 FLUX.3 Klein 时图像编辑不可用** | 已关闭（#15241） | 通过 PR #15263 修复 |
| 🟡 中 | **KDE Plasma 环境下启用 AT-SPI 时 WebKitWebProcess 崩溃** | 开放（#15260） | 可能是 Qt/GTK 辅助功能桥接冲突；临时方案：禁用 atk-bridge |
| 🟡 中 | **通过 API 加载 STT 模型时，“加载到”设置被忽略** | 开放（#15280） | 影响运行时配置一致性 |

---

### **6. 对应用开发者的意义**  
- **模型管理**：预计本地 GGUF 处理可靠性将提升，尤其是包含图像标记的视觉模型。谨慎使用 `--fit-target` 与 `--parallel`——Metal OOM 问题可能需要预留 DSpark 侧车资源（PR #14431）。  
- **UI/UX 集成**：新推出的 **Flows** 系统（#14730）支持通过拖拽逻辑构建复杂 AI 智能体、游戏与流水线，非常适合无代码智能体工作流。  
- **跨客户端状态**：持久化聊天置顶（#15293）意味着若连接同一 Unsloth 服务器实例，您的应用可实现跨设备用户状态同步。  
- **音频与语音**：请注意 `audio.cpp` 中尚未支持 ROCm（#13042）；AMD 用户除非打补丁，否则可能面临 CPU 瓶颈。  
- **调试**：遇到核心转储或卡顿问题时，务必收集 `coredumpctl` 日志与 `llama-server` 输出——这对诊断类似 #14411 的回归问题至关重要。

> 🔗 [GitHub Issues](https://github.com/unslothai/unsloth/issues) | [Pull Requests](https://github.com/unslothai/unsloth/pulls)

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*