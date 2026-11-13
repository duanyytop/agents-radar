# AI 基础设施日报 2026-11-13

> 生成时间: 2026-11-13 02:52 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

### **1. 生态系统概览**  
2026年末，人工智能基础设施格局呈现出硬件抽象、模型服务效率与原生代理工具深度融合的态势。项目正日益聚焦跨架构支持——尤其是AMD ROCm和NPU平台——并通过内核级优化与统一量化后端突破性能边界。向基于Rust的核心（LiteLLM）及现代化推理引擎（vLLM、SGLang）的转变，反映了生态系统日趋成熟，更加注重稳定性、安全性和可扩展性。与此同时，本地优先部署工具（Ollama、Unsloth）正在提升开发人员和研究人员的易用性，使模型实验与桌面代理集成变得更加无缝。

---

### **2. 活动对比**

| 项目       | 开放问题 | 开放PR | 最近发布？ | 备注 |
|---------------|-------------|----------|------------------|-------|
| **vLLM**      | 38          | 47       | 否               | 高度关注Blackwell/ROCm稳定性；v0.24.0版本存在关键回归 |
| **SGLang**    | 54          | 39       | 是（v0.5.23）    | v0.5.23版本性能下降引发担忧；正在积极推进NPU/ROCm工作 |
| **llama.cpp** | 42          | 33       | 是（安全补丁） | 安全修复 + Vulkan/CUDA改进；存在高危回归 |
| **Ollama**    | 36          | 28       | 否               | AMD VRAM检测存在严重缺陷；社区集成持续增长 |
| **LiteLLM**   | 28          | 22       | 是（v1.110.0-rc.2） | RC版本，完成Rust核心迁移；中间件存在破坏性变更 |
| **Unsloth**   | 24          | 21       | 否               | 用户体验与内存管理重大改进；支持懒加载模式及RPM打包 |

> *注：问题/PR数量截至2026-11-13。LiteLLM的RC版本表明其即将进入生产环境使用。*

---

### **3. 模型支持竞赛**

| 新模型 / 架构         | 支持方 | 关键进展 |
|----------------------------------|--------------|-----------------|
| **Qwen3.8-Flash-Next (AMD/NPU)** | ✅ SGLang, Unsloth, vLLM | NPU上实现完整图重播与Triton支持；Studio UI提供精度控制 |
| **DeepSeek-V4-Flash (Ampere)**   | ❌ vLLM（功能请求） | A100/RTX 30xx原生支持待实现；阻碍广泛部署 |
| **Nemotron-3.5 ASR 流式传输**   | ✅ vLLM | 支持多语言流式语音识别 |
| **Raon-1-mini-preview (GGUF)**   | ✅ llama.cpp | 实现完整的Hugging Face → GGUF转换 |
| **Zaya1-8B (GGUF)**              | ✅ llama.cpp | SSM_CONV修复使CUDA兼容性成为可能 |
| **MI355X / gfx950 (ROCm)**       | ✅ vLLM, SGLang, Unsloth | 正对Qwen3.8系列进行优化；内核融合开发中 |
| **Fedora RPM (Unsloth)**         | ✅ Unsloth | 首个主流Linux发行版为本地AI运行时打包 |

> 🏆 **领先者**：**Unsloth** 在用户体验与部署灵活性（RPM、嵌套文件夹）方面领先；**vLLM** 在硬件覆盖广度与底层内核调优方面占据主导。

---

### **4. 性能前沿**

| 优化重点             | 领先项目 | 关键进展 |
|-------------------------------|------------------|------------------|
| **内核级效率**   | vLLM, llama.cpp | vLLM优先处理NVFP4；llama.cpp实现MMA中的融合KV反量化 |
| **批处理无关矩阵乘法**   | vLLM             | 并发度为1时吞吐量提升1.76倍（Gemma 4 E2B/E4B） |
| **推测解码**      | SGLang, llama.cpp | SGLang报告解码延迟降低33–45%（v0.5.22）；llama.cpp存在草稿解码崩溃问题 |
| **KV缓存与卸载**     | vLLM, SGLang     | vLLM RFC #61886实现无TP依赖卸载；SGLang HiCache数据平面 |
| **内存管理**         | Ollama, llama.cpp | lazy VRAM分配（Vulkan）；Ollama Metal前缀复用 |
| **量化统一化**  | vLLM (RFC #65560) | 推动以Humming后端替代Marlin，支持INT4/INT8/F8/MXFP4/MoE |

> 🔥 **趋势**：优化重心正从单模型收益转向**系统性效率**——内核融合、批处理无关执行与动态内存管理已成为核心。

---

### **5. 层级定位**

| 项目       | 主要层级             | 差异化优势 |
|---------------|----------------------------|----------------|
| **vLLM**      | 推理引擎           | 高吞吐GPU优化服务的行业标准；对Blackwell/ROCm支持强劲 |
| **SGLang**    | 推理引擎 + 代理运行时 | 混合引擎，具备HiCache、Mamba状态管理；专为代理工作流优化 |
| **llama.cpp** | 本地运行时 / 边缘推理 | 跨平台、轻量级；在移动设备（Hexagon）、Vulkan和Apple Silicon上表现卓越 |
| **Ollama**    | 本地运行时 + 网关    | 开发者友好的CLI，支持桌面代理集成；生态持续扩展但存在API短板 |
| **LiteLLM**   | LLM网关 / 编排    | 多提供商路由、成本监控、安全加固（cosign签名镜像） |
| **Unsloth**   | 训练 + 本地运行时   | 全流程Studio体验，支持微调、量化控制及音视频处理管线 |

> 📊 **定位洞察**：vLLM与SGLang主导**推理引擎层**；LiteLLM掌控**网关编排层**；Ollama与Unsloth在**本地开发者体验**领域领先；llama.cpp仍是**边缘/低资源场景的王者**。

---

### **6. 趋势信号**

1. **跨架构抽象已成为基本要求**  
   AMD ROCm、NPU与Intel OpenVINO已不再是实验性技术——所有主要项目都在积极优化。**vLLM**、**SGLang**与**Unsloth**正引领这一趋势，表明未来可维护部署必须支持异构硬件。

2. **量化正向统一后端集中**  
   用**Humming（vLLM）** 或**原生MoE感知内核**替代旧有系统（如Marlin），表明行业正迈向**单一、可维护的量化栈**——减少技术债务并扩大模型覆盖范围。

3. **代理工作负载正驱动基础设施创新**  
   如**多轮前缀复用（SGLang）**、**工具模式增强（Ollama）** 和**流式工具调用可靠性（LiteLLM）** 等特性显示，代理应用已重塑核心基础设施优先级，不再仅关注推理速度。

4. **安全与稳定性不再是事后补丁**  
   cosign签名Docker镜像（LiteLLM）、SSRF修复（llama.cpp）、推测解码严格测试（SGLang）等举措反映出行业成熟度提升：**生产级防护机制已成为不可妥协的标准**。

5. **核心架构迁移带来升级风险上升**  
   LiteLLM的Rust核心迁移与vLLM中Humming替换将破坏现有中间件。开发者应**尽早审计依赖项**，并在可用时采用LTS版本。

---

### ✅ **应用开发者建议**
- **优先考虑稳定性而非前沿功能**：避免使用v0.5.23（SGLang）、v0.24.0（vLLM）以及未打补丁的AMD Strix Halo上的Ollama 0.30+。
- **早期采用统一量化方案（如Humming）**，以适配NVIDIA Hopper+及未来Blackwell GPU。
- **长上下文、内存受限任务**中，请使用 `lazy VRAM`（llama.cpp）与 **HiCache数据平面**（SGLang）。
- **密切关注LiteLLM的成本日志漏洞（#48398）**——绝不能盲目信任供应商报告的成本数据，务必验证。
- **利用Ollama的新集成（Bluebird Harness、Valo）** 快速搭建本地代理原型。

> *基础设施演进迅猛——唯有坚韧、敏锐且主动者，方能在变革中立足。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-11-13**

---

### **1. 今日亮点**  
vLLM 项目正持续推进更广泛的硬件与模型支持，其中在 gfx950（MI355X）上对 Qwen3.8 系列模型的 ROCm/AMD 优化进展显著，并大力推动在所有 NVIDIA 架构上用更现代的 Humming 量化后端替代 Marlin。针对 SM120（Blackwell）的关键性能改进正在落地，包括 NVFP4 内核优先级提升以及 Gemma 4 E2B/E4B 的批处理无关矩阵乘法调优。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未检测到新版本发布或破坏性变更。*

---

### **3. 新模型与硬件支持**  
- **AMD ROCm 支持**：针对 `amd/Qwen3.8-2.4T-A95B-Quark-MXFP4` 与 `amd/Qwen3.8-Flash-Next-Quark-MXFP4` 在 **gfx950 / MI355X** 上的性能优化正在进行中，计划通过一系列合并请求（PR）实现专用内核的充分使用。  
- **NVIDIA Blackwell (SM120)**：通过优先级 FlashInfer b12x 路径及与最新计算能力的对齐，增强对 FP8/NVFP4 内核的支持。  
- **DeepSeek-V4-Flash (SM8x)**：功能请求 #50576 希望在 Ampere GPU（A100/A800、RTX 30xx）上原生支持，这对 DeepSeek 最新闪存变体的广泛部署至关重要。  
- **NVIDIA Nemotron 3.5 ASR 流式传输**：RFC #47455 跟踪 `nemotron-3.5-asr-streaming-0.6b` 的支持，使生产流水线中实现多语言流式语音识别成为可能。

> 🔗 [Issue #50576](https://github.com/vllm-project/vllm/issues/50576) | 🔗 [Issue #57149](https://github.com/vllm-project/vllm/issues/57149) | 🔗 [Issue #59575](https://github.com/vllm-project/vllm/issues/59575)

---

### **4. 性能与优化**  
- **内核级提升**：  
  - ✅ **NVFP4**：在 SM120 上，`FlashInferB12xNvFp4LinearKernel` 已被优先采用，相比 CUTLASS 在测试形状下执行速度提升 1.5–2 倍 (#67202)。  
  - ✅ **批处理无关矩阵乘法**：在启用 `VLLM_BATCH_INVARIANT=1` 的情况下，针对 Gemma 4 E2B/E4B 进行调优，实现 **并发度为 1 时吞吐量提升 1.76×**，**并发度为 128 时提升 1.21×** (#67351)。  
- **模型特定优化**：  
  - **Qwen3.8 系列**：在 gfx942（ROCm）上持续融合 mHC 接缝，以减少 Triton 启动次数和 AITER 开销 (#60153)。  
  - **GLM-5.3**：基于已有的 `glm_moe_dsa` 架构优势进行后续优化 (#57406)。  
- **量化后端迁移**：  
  - **Humming vs Marlin**：RFC #65560 主张在所有 NVIDIA 架构上用 Humming 替代 Marlin——提供统一的 INT4/INT8 GPTQ/AWQ、FP8、MXFP4/6/8 及 MoE 层支持，无需遗留的 SM80 特定代码。

> 🔗 [PR #67202](https://github.com/vllm-project/vllm/pull/67202) | 🔗 [PR #67351](https://github.com/vllm-project/vllm/pull/67351) | 🔗 [RFC #65560](https://github.com/vllm-project/vllm/issues/65560)

---

### **5. 稳定性与回归问题**  
- **严重回归**：vLLM `0.24.0` 在 **Blackwell (sm_120)** 上无法启动 FP8 模型，因触发 `DeepGEMM Unknown recipe` 断言——确认为从 `0.23.0` 回退引入的问题 (#47130)。*修复待定。*  
- **高负载崩溃**：异步 KV 传输过程中处理被中止请求时引擎崩溃（`Scheduler._update_from_kv_xfer_finished` 在过期 `req_id` 上断言）——已在 #43226 报告；修复 PR 正在审查中。  
- **ROCm 崩溃**：在 MI325X 上，当序列长度超过 2048 个 token 并启用 DeepSeek-V4 Flash + sparse_attn_indexer + FP8 KV 缓存时发生 GPU 内存访问错误 (#48266)。  
- **机密计算问题**：在 TDX/CC 模式下，V2 模型运行器因旧的 UVA 视图导致静默垃圾输出——可通过设置 `VLLM_USE_V2_MODEL_RUNNER=0` 临时规避 (#57224)。

> 🔗 [Issue #47130](https://github.com/vllm-project/vllm/issues/47130) | 🔗 [Issue #43226](https://github.com/vllm-project/vllm/issues/43226) | 🔗 [Issue #48266](https://github.com/vllm-project/vllm/issues/48266) | 🔗 [Issue #57224](https://github.com/vllm-project/vllm/issues/57224)

---

### **6. 对应用开发者的影响**  
- **预期更低的多模型服务延迟**：CUDA 检查点/恢复 RFC (#34303) 与无 TP 依赖的 KV 卸载工作 (#61886) 将很快实现近乎零冷启动，并在动态环境中实现更平滑的模型切换。  
- **尽早采用 Humming**：对于 NVIDIA Hopper+ 或未来 Blackwell 上的新部署，建议从 Marlin 迁移到 Humming，以获得统一、架构感知的量化支持，并避开旧内核的限制。  
- **启用批处理无关模式以保证一致性**：结合 #27433 与近期调优，启用 `VLLM_BATCH_INVARIANT=1` 可提升确定性与性能稳定性——尤其在高并发场景中。  
- **避免在 Blackwell 上使用 v0.24.0**：在 #47130 修复前，请继续使用 v0.23.0 或更早版本进行 sm_120 GPU 上的 FP8 推理。

> 🔗 [RFC #34303](https://github.com/vllm-project/vllm/issues/34303) | 🔗 [RFC #65560](https://github.com/vllm-project/vllm/issues/65560) | 🔗 [Issue #27433](https://github.com/vllm-project/vllm/issues/27433)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest – 2026-11-13

---

### **1. 今日亮点**  
SGLang 项目持续推进多硬件平台与性能优化，已在 AMD ROCm 支持、Qwen3.8-Flash-Next 的 NPU 集成，以及 HiCache 和 Mamba 状态管理的关键稳定性改进方面取得显著进展。在 Hopper GPU 上，v0.5.22 到 v0.5.23 版本间出现严重解码性能退化（下降 33–45%），引发对近期推测性解码改动的担忧。

---

### **2. 发布与破坏性变更**  
*无*。过去 24 小时内未发布新版本。然而，**v0.5.23** 因严重性能退化（参见 #49336）正受到审查，可能需要回滚或热修复。即将推出的 **SGLang 1.0 发布追踪器 (#50045)** 强调 API 稳定性、配置加固及破坏性变更文档——预计将成为生产环境使用的重要里程碑。

---

### **3. 新模型与硬件支持**  
- **NPU 支持**：通过 PR #37570 实现对 **Qwen3.8-Flash-Next** 在 NPU 上的完整支持，包含图重放、MTP 与 Triton 内核。  
- **AMD ROCm**：通过融合内核优化 DeepSeek-V4 与 Qwen3 前填充（PR #47052），利用 MORI EPv2 提升 MoE 调度效率（PR #48097），并减少主机开销（PR #48093）。  
- **统一内存路线图**：进展跟踪于 #49944，实现跨 GPU 内存池的动态 KV/循环状态共享——对长上下文与代理型工作负载至关重要。

---

### **4. 性能与优化**  
- **Hopper (SM90)**：在 `DeepSeek-V4.1-Flash` 与 DSPARK 推测性解码场景下，从 v0.5.22 升级至 v0.5.23 后，每步解码延迟增加 **33–45%**（参见 #49336）。此为高优先级回归问题，影响大规模吞吐性能。  
- **AMD ROCm**：通过统一元数据与优化 gather/index 复用，在 gfx1250 上显著降低前填充与验证阶段开销（PR #48093）。  
- **HiCache + Mooncake**：在 L2/L3 压力下出现可复现的缓存命中率下降；根本原因正在调查中（#47481）。  
- **内存效率**：PR #49473 引入 **HiCache 后端数据平面**，提升 L2/L3 层间卸载协调效率。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 描述 | 修复状态 |
|---------|-------|-------------|------------|
| 🔴 高 | #49336 | SM90 上 v0.5.23 版本解码延迟上升 33–45% | 待处理 |
| 🔴 高 | #49881 | 在填充导致 CUDA Graph 重调整后（batch=9 → bs=10），NaN logits 被锁存 | 正在调查 |
| 🟡 中 | #50030 | `--enable-hisparse` 在 GLM-5.3-Flash 上因缺失 `register_mapping` 失败 | 审查中 |
| 🟡 中 | #49327 | MI355X (gfx950) 上运行 DeepSeek-V4.1-Flash 存在性能问题 | 通过 PR 追踪 |
| 🟡 中 | #50130 | Mooncake 短零拷贝读取被错误计为完整缓存命中 | 已报告 |

> **注意**：不稳定的 CI 基础设施仍是首要关切（#42752, #17050），影响开发效率与发布信心。

---

### **6. 对应用开发者的影响**  
- 若在 Hopper GPU 上运行高并发、低延迟推理，请避免使用 v0.5.23——预期吞吐量将显著下降。  
- 当前混合状态检查点机制正持续优化（PR #49886），建议更积极地利用 **多轮前缀复用**；同时确保状态池大小考虑空闲会话保留需求（PR #50033）。  
- 对于 **多硬件部署**，SGLang 的插件系统（跟踪于 #49968）可在 NVIDIA、AMD 与 NPU 后端间实现一致编排——适用于异构集群。  
- 使用 **流式工具调用** 与 **长度截断** 时需谨慎；参数处理中的缺陷（#50131, #49897）可能导致输出无声损坏。  
- 关注 **SGLang 1.0 路线图 (#50045)**，未来将提供更稳定的 API——预期具备更严格的配置校验与向后兼容保证。

> 💡 *建议*：在解码性能回归问题解决前，建议锁定至 v0.5.22；并使用最新 PR（如 #47052, #37570）在 AMD/ROCm 与 NPU 平台测试你的流水线，以提前适配跨架构支持。

🔗 [查看所有开放问题](https://github.com/sgl-project/sglang/issues) | 🔗 [SGLang 1.0 追踪器](https://github.com/sgl-project/sglang/issues/50045)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp 消息简报 – 2026-11-13**

---

### **1. 今日亮点**  
最新开发周期为 CUDA 与 Vulkan 后端带来了显著的性能提升，特别是在推测解码和预填充阶段。关键修复解决了服务器层的安全漏洞（SSRF）和内存安全问题，同时新增对 Raon-1-mini-preview 的支持，并扩展了 OpenVINO/NPU 能力，进一步丰富了模型多样性并拓展了硬件覆盖范围。

---

### **2. 发布与破坏性变更**  
- **安全修复**：修复了 CORS 代理和媒体 URL 处理中的 SSRF 漏洞（`server: fix SSRF for CORS proxy and media URLs`）([#32115](https://github.com/ggml-org/llama.cpp/pull/32115))。  
- **内存安全**：避免对未使用的图元数据页进行不必要的初始化（`llama: avoid touching unused graph metadata pages`, [#32043](https://github.com/ggml-org/llama.cpp/pull/32043)) — 改善长时运行会话的内存占用。  
- **迁移提示**：现已提供 `llama_batch` → `llama_batch_ext` 的新迁移指南 ([#32163](https://github.com/ggml-org/llama.cpp/pull/32163))，对从旧版 API 升级的用户至关重要。

---

### **3. 新增模型与硬件支持**  
- **新增模型支持**：  
  - [Raon-1-mini-preview](https://huggingface.co/KRAFTON/Raon-1-mini-preview-gguf) 现已支持，完整实现 Hugging Face 到 GGUF 的转换 ([#32173](https://github.com/ggml-org/llama.cpp/pull/32173))。  
  - [Zaya1 8B (Zyphra)](https://huggingface.co/varun10221/Zaya1-8B-GGUF) 已加入，修复 SSM_CONV 以兼容 CUDA ([#32071](https://github.com/ggml-org/llama.cpp/pull/32071))。  
- **后端与硬件扩展**：  
  - Hexagon 后端新增 `SSM_SCAN` 操作支持（f32，已在 v75/v81/v85 Android 及 WoS 设备上测试）([#31921](https://github.com/ggml-org/llama.cpp/pull/31921))。  
  - OpenVINO 后端现支持 Qwen3.5 GDN 分解、MTP 多序列推理，以及 gemma-4 模型的优化，显著提升 NPU/GPU 和内存效率 ([#32172](https://github.com/ggml-org/llama.cpp/pull/32172))。  
  - Vulkan 现在支持 `d_state=96` 的 `SSM_SCAN`，使 Nemotron-3-Puzzle 完全在 GPU 上运行，不再回退至 CPU ([#32162](https://github.com/ggml-org/llama.cpp/pull/32162))。

---

### **4. 性能与优化**  
- **CUDA**：将 KV 解量化融合进 MMA flash-attention 内核（适用于 q8_0/q4_0/f8_e4m3），消除独立的临时内存传递 — 降低延迟并减轻 PCIe 带宽压力 ([#31802](https://github.com/ggml-org/llama.cpp/pull/31802))。  
- **CUDA/Vulkan**：通过融合 epilogue MMQ 中的 `w_s scale` 优化预填充 — 提升高端模型的吞吐量 ([#26048](https://github.com/ggml-org/llama.cpp/pull/26048))。  
- **Vulkan**：引入惰性 VRAM 分配（`VRAM memory grows dynamically with context`）—— 避免预先预留大量显存（如 1M token 上下文），模拟虚拟磁盘行为 ([#32170](https://github.com/ggml-org/llama.cpp/pull/32170))。  
- **Apple Silicon**：SpacemiT Q4_1 32x256 现在在 M1/M2 芯片上使用 HP 内核，与 Q4_0 路径一致，提升加载效率 ([#31929](https://github.com/ggml-org/llama.cpp/pull/31929))。

---

### **5. 稳定性与回归问题**  
- **高严重性**：  
  - 在混合型 Qwen3.8-27B 使用 `--parallel 8` 时，`--spec-type draft-dflash` 在后解码阶段崩溃，由缓存不一致引起 ([#31656](https://github.com/ggml-org/llama.cpp/issues/31656))。  
  - Gemma 4 使用 MTP 时，Flash Attention 因查询头维度不匹配（`neq0 != HSK`）而崩溃 — 影响 Vulkan 与 SYCL 后端 ([#29419](https://github.com/ggml-org/llama.cpp/issues/29419), [#29418](https://github.com/ggml-org/llama.cpp/issues/29418))。  
- **中等严重性**：  
  - 在 SYCL + MoE 配置下，即使输入相同种子，`llama-server` 仍报告非确定性的 `logprobs`（[#31206](https://github.com/ggml-org/llama.cpp/issues/31206))。  
  - 在双 Intel Arc Pro B70 GPU 上加载 DFlash2 草稿模型时，Vulkan 驱动触发 TDR 重置 ([#28778](https://github.com/ggml-org/llama.cpp/issues/28778))。  
- **注意**：目前尚未有针对这些关键回归问题的 PR；开发者应密切监控问题追踪器。

---

### **6. 对应用开发者的启示**  
- **使用场景**：利用 `lazy VRAM allocation` ([#32170](https://github.com/ggml-org/llama.cpp/pull/32170)) 部署长上下文模型，无需过度分配显存 — 适用于文档问答或代码生成流水线。  
- **部署建议**：仅在可接受回归风险的前提下启用 `draft-dflash` — 当前稳定性问题表明生产环境需谨慎使用。  
- **优化策略**：对于 CUDA 部署，优先选择融合 KV 解量化（`f8_e4m3`, `q4_0`, `q8_0`）的模型，在推测解码场景中可降低高达约 30% 的延迟。  
- **跨平台方案**：在 Intel NPU 与移动 SoC（Android/WoS）上，使用 OpenVINO 与 Hexagon 后端以获得优化推理性能。  
- **工具链升级**：立即升级至 `llama_batch_ext`，避免未来接口断裂 — 迁移指南现已上线 ([#32163](https://github.com/ggml-org/llama.cpp/pull/32163))。  

> ✅ **行动项**：审查您的部署栈是否受近期回归影响 — 尤其是使用 MTP、草稿解码或 SYCL/SYCL+MoE 组合的情况。密切关注 [#31656](https://github.com/ggml-org/llama.cpp/issues/31656) 与 [#29419](https://github.com/ggml-org/llama.cpp/issues/29419) 以获取紧急修复。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-13**

---

### **1. 今日亮点**  
在 Ollama 0.30+ 版本中，AMD ROCm 支持出现严重回归问题：Strix Halo 系统因固件区域划分误读，错误报告仅 2GB VRAM——此问题影响容器化部署，目前正在积极修复。与此同时，社区持续拓展与新桌面代理的集成，例如 *Bluebird Harness* 和 *Valo*；开发者也正推动通过 PR `stop --all` 及改进工具模式处理等方式，提升 CLI 控制力和模型管理能力。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未报告任何发布或破坏性变更。无新版本发布，亦无 API/配置的破坏性更改。

---

### **3. 新模型与硬件支持**  
- **硬件**：正在修复 iGPU 内存分配逻辑（PR #19670），确保正确尊重系统内存上限，避免不必要地限制可用内存——对 AMD 集成显卡至关重要。  
- **模型集成**：  
  - 新增 **Bluebird Harness**（PR #19687）至社区集成：一款以本地优先为设计原则的桌面 AI 应用，利用 Ollama 原生 API 并具备操作系统可访问性。  
  - 新增 **Valo**（PR #19685）：一款跨平台 AI 工作空间，可同时运行 Ollama 模型、Claude Code 与 Codex。  
- **工具链**：增强对非标准工具模式关键字的支持（PR #19686），包括 JSON Schema 中的 `default`、`minimum`、`maximum` 字段，显著提升代理工作流中的语义保真度。

---

### **4. 性能与优化**  
- **内存管理**：两项关键 PR 优化了 Metal (`mlxrunner`) 的内存使用：  
  - PR #19677 允许在请求槽之间复用已保存的前缀，减少重复提示处理。  
  - PR #19678 根据可用内存压力动态调整已保存历史的保留策略，避免不必要的丢弃。  
- **内核级修复**：  
  - PR #19680 修复了 RoPE 嵌入中的上下文偏移放大漂移问题（修复 #19457），确保长上下文推理期间注意力模式的一致性。  
- **下载效率**：PR #19676 改进了错误报告机制，不再对 blob host 返回的 EOF 重试，而是尊重 HTTP 状态码——减少误重试，在代理环境下显著提升拉取可靠性。

---

### **5. 稳定性与回归问题**  
- **严重（高危）**：  
  - **AMD Strix Halo VRAM 检测回归** (#16462)：在容器化部署中，尽管系统内存充足，Ollama 0.30+ 仍错误报告仅 2GB VRAM。修复 PR 已存在：[#19670](https://github.com/ollama/ollama/pull/19670) —— 当前开放并处于评审中。  
- **中等严重度**：  
  - **云模型崩溃**：`minimax-m3.1-flash` 间歇性崩溃（问题 #19671）。根本原因尚不明确，可能与后端状态或分词有关。  
  - **工具调用泛滥**：`mimo-v2.6-pro:cloud` 在代理会话中发出数百条重复工具调用（问题 #19672），很可能是上游模型行为或会话状态损坏所致。  
- **CLI/用户体验**：  
  - `/save` 操作对 `nemotron-3.5-lightning` 报错“文件不存在”，尽管清单有效（问题 #17735）。  
  - `ollama stop all` 缺失（功能请求 #6987）；已在 PR #18665 实现但尚未合并。

---

### **6. 对应用开发者的启示**  
- **在容器中使用 AMD Strix Halo 时，请避免 Ollama 0.30+**，直至 PR #19670 上线——否则预期会出现严重性能下降或内存溢出错误。  
- **构建健壮的代理工作流**：工具模式现已支持更丰富的参数元数据（通过 PR #19686），但需警惕 `NaN`/`Infinity` 值（PR #19679 修复了 JSON 编码问题）。  
- **利用新集成**如 Bluebird Harness 与 Valo，实现低配置开销的本地优先代理体验。  
- **一旦合并，立即使用 `stop --all`（PR #18665）**，以简化 CI/CD 流水线或多模型编排中的生命周期管理。  
- **密切监控云模型表现**：`mimo-v2.6-pro:cloud` 与 `minimax-m3.1-flash` 存在不稳定性——建议考虑备用策略或版本锁定。

> 🔗 [GitHub 问题与 PR 摘要](https://github.com/ollama/ollama/issues)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

### **1. 今日亮点**  
LiteLLM v1.110.0-rc.2 版本引入了通过 cosign 签名的 Docker 镜像以强化安全，并推进基于 Rust 的认证与路由核心迁移，显著提升性能与可维护性。关键修复解决了预算强制执行绕过、OpenTelemetry 指标准确性以及 Gemini/Vertex AI 中提示缓存失败等问题——这些均对生产环境可靠性至关重要。

---

### **2. 发布与破坏性变更**  
- **v1.110.0-rc.2**：新 Rust 核心时代的首个候选版本；包含使用 [cosign](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065) 签名的 Docker 镜像。验证方式如下：  
  ```bash
  cosign verify --key https://raw.githubusercontent.com/BerriAI/litellm/e82a3c646908ba0a6ee0beddc4310d7a6cac4065/cosign.pub ghcr.io/berriai/litellm:v1.110.0-rc.2
  ```
- **v1.108.7 (LTS)**：推荐用于稳定部署。使用 `ghcr.io/berriai/litellm:lts` 可确保始终运行最新的 LTS 补丁。  
  → [GitHub Release v1.108.7](https://github.com/BerriAI/litellm/releases/tag/v1.108.7)

> ⚠️ **迁移提醒**：向原生 Rust 认证/核心的迁移将破坏依赖于 Python 层请求处理的自定义中间件。详见 PR #51374–#51531 了解完整栈变更。

---

### **3. 新模型与硬件支持**  
- **新增模型**：  
  - `fal_ai/google/gemini-omni-flash/v1.2/upscale`（视频处理，按秒计费） – PR [#51500](https://github.com/BerriAI/litellm/pull/51500)  
  - `together_ai/thinkingmachines/Inkling-2-Small` – PR [#51501](https://github.com/BerriAI/litellm/pull/51501)  
- **硬件/后端**：未宣布新的硬件支持。当前重点仍在于通过原生 Rust 路由与缓存层优化现有 GPU/CPU 推理路径。

---

### **4. 性能与优化**  
- **路由与认证核心**：全面转向基于 Rust 的认证与路由逻辑。关键优化包括：  
  - 移除冗余的 Python 认证层：PR [#51374](https://github.com/BerriAI/litellm/pull/51374)  
  - 将路由匹配、密钥验证及会话钉存储移至原生 Rust：PRs [#51531](https://github.com/BerriAI/litellm/pull/51531), [#50870](https://github.com/BerriAI/litellm/pull/50870)  
- **内存与缓存**：内存缓存现在可在过期后正确重建：PR [#51388](https://github.com/BerriAI/litellm/pull/51388)  
- **Redis 效率**：Redis 键构造已移出核心逻辑：PR [#50356](https://github.com/BerriAI/litellm/pull/50356)；降低延迟并提升可扩展性。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 影响 | 修复状态 |
|--------|------|------|----------|
| 🔴 高 | [Bug #50065](https://github.com/BerriAI/litellm/issues/50065)：MCP `tools/list` 在旧客户端上卡死 | 旧 SDK（如 Open WebUI）延迟约 18–50 秒 | 开放 |
| 🔴 高 | [Bug #48398](https://github.com/BerriAI/litellm/issues/48398)：信任提供方报告的成本为美元 → 导致 100 万倍超额计费 | 金融风险 | 开放 |
| 🟡 中 | [Bug #51456](https://github.com/BerriAI/litellm/issues/51456)：Bedrock Llama 流式输出丢失提供方使用数据且令牌计数不足 | 计费不准确，可观测性差 | 开放 |
| 🟡 中 | [Bug #42104](https://github.com/BerriAI/litellm/issues/42104)：对话中途的 `system` 消息导致 Gemini/Vertex 提示缓存失效 | 效率下降 | 开放 |
| 🟢 低 | [Bug #51396](https://github.com/BerriAI/litellm/issues/51396)：无效的 `fallbacks` 类型导致路由器核心崩溃（HTTP 500） | 路由失败 | 已在 PR [#51396](https://github.com/BerriAI/litellm/pull/51396) 中修复 |

---

### **6. 对应用开发者的意义**  
- **升级至 v1.108.7 (LTS) 或 v1.110.0-rc.2** 以获得稳定性和安全性。在 RC 版本稳定前，请避免使用非 LTS 版本。
- **预期减少 Python 性能瓶颈**：代理正逐步转向 Rust 实现认证、路由与缓存管理——预计延迟更低，并发能力更高。
- **审查您的工具模式与模型路由逻辑**，尤其是使用 `anthropic/`、`vertex_ai/` 或 `gemini-*` 模型时。诸如缺少 `function.strict` 或提示缓存中断等问题可能无声地降低性能。
- **严格监控成本日志**：已知缺陷 (#48398) 允许未经验证的提供方报告成本——在修复前请实施手动校验。
- **使用 `ghcr.io/berriai/litellm:lts`** 以避免升级过程中的意外中断。

👉 *下一步行动*：查阅 [Rust 迁移文档](https://github.com/BerriAI/litellm/pull/51374)，并在升级前使用 `lts` 镜像测试您的代理流水线。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-11-13**

---

### **1. 今日亮点**  
Unsloth 团队在优化 Studio 的模型运行时性能与用户界面体验方面取得显著进展，关键的 PR 实现了对量化精度更精细的控制（PR #17641），通过懒加载张量模式处理提升了内存效率（PR #17607），并通过正确分配 `max_tokens` 预算修复了长期运行的音频转录问题（PR #17599, #17603）。新增对 Fedora RPM 打包的支持（PR #17611）以及嵌套项目文件夹功能（PR #17612），进一步增强了部署灵活性与组织工作流支持。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未发布新版本。但多项破坏性变更即将上线：  
- **`loraplus_lr_ratio` 现在将与 `q_galore_config` 冲突**，若两者同时使用将抛出明确错误（PR #17604），防止训练过程中出现静默配置错误。  
- **懒加载张量模式（`--lazy-mode on-direct`）现在可在 Studio 的内存统计中被正确识别**，避免在显式禁用 mmap 时造成过度占用 RAM（PR #17607）。

> 🔗 [PR #17604](https://github.com/unslothai/unsloth/pull/17604) | [PR #17607](https://github.com/unslothai/unsloth/pull/17607)

---

### **3. 新模型与硬件支持**  
- **Qwen3.8-Flash-Next 与 DeepSeek-V4.1 GGUF**：用户现在可直接在 Studio 中选择 Engram 表精度（PR #17641），无需手动替换文件。  
- **ROCm 7.14 / MI300X (gfx942)**：合并了关键的步长断言修复，防止 `_scaled_dot_product_flash_attention_backward` 中出现 MATH 回退（问题 #17548）。  
- **AMD NPU 模型**：现在将以其 Hugging Face 仓库名称显示（如 `Qwen3.6-35B-A3B-NPU2`），而非晦涩的 Lemonade ID（PR #17610）。  
- **Fedora RPM 包**：新增对原生 `.rpm` 包的支持，便于在 Linux 桌面环境部署（PR #17611）。

> 🔗 [PR #17641](https://github.com/unslothai/unsloth/pull/17641) | [PR #17610](https://github.com/unslothai/unsloth/pull/17610) | [PR #17611](https://github.com/unslothai/unsloth/pull/17611)

---

### **4. 性能与优化**  
- **FLUX.3 klein**：通过在主机上以 float16 读取 bf16 权重，成功在 12 GB Colab T4 VM 上加载，避免因内存压力导致的 SIGKILL（PR #17642）。  
- **MiniMax-H3/H3-Image VAE 解码**：采用分块解码、批量处理分块、CUDA 图和 fp16 线性层，将 2048px 下的解码时间从 **2.82 秒降至 1.43 秒**（PR #17595）。  
- **H3-Image 融合内核**：所有层级均启用位级精确的 `q/k RMSNorm + RoPE` 融合，确保一致性且无漂移（PR #17593）。  
- **Qwen3.8-Flash-Next UD 3.1**：当前 MTP 头导致草稿接受率下降（约 74% → 56–66%）；用户反馈需使用匹配的 3.1 版本草稿头（问题 #17402）。

> 🔗 [PR #17642](https://github.com/unslothai/unsloth/pull/17642) | [PR #17595](https://github.com/unslothai/unsloth/pull/17595) | [PR #17593](https://github.com/unslothai/unsloth/pull/17593)

---

### **5. 稳定性与回归问题**  
| 问题 | 严重程度 | 状态 | 修复 PR |  
|------|----------|--------|--------|  
| `--load-mode none` 在 v0.1.917 中被忽略（强制 mmap） | 严重 | 开放 | [PR #17607](https://github.com/unslothai/unsloth/pull/17607) |  
| DiffusionGemma 在 Studio 中忽略上下文/并行设置 | 高 | 已关闭 | [PR #17558](https://github.com/unslothai/unsloth/pull/17558) |  
| MOSS-Transcribe-Diarize 在长音频上失败（无 `max_tokens`） | 高 | 已关闭 | [PR #17599](https://github.com/unslothai/unsloth/pull/17599) |  
| Qwen3.8-Flash-Next UD 3.1 草稿接受率下降 | 中等 | 开放 | — |  
| Docker 中 Audio.cpp 更新失败，提示“无效跨设备链接” | 中等 | 开放 | [PR #17638](https://github.com/unslothai/unsloth/pull/17638) |  

> ⚠️ **v0.1.917 严重回归**：尽管指定 `--load-mode none`，仍强制启用 mmap。已在 PR #17607 中修复。

---

### **6. 对应用开发者的意义**  
- **使用 `--lazy-mode on-direct`** 降低低内存系统上的内存压力——请确保运行环境正确响应此标志。  
- **避免同时使用 `loraplus_lr_ratio` 与 `q_galore_config`**——该组合即将被明确阻止并抛出错误。  
- **对于长上下文音频任务**，请依赖已修复的 MOSS-Transcribe-Diarize 中更新的 `max_tokens` 预算机制。  
- **在 AMD ROCm 或 Fedora 系统上部署时**，使用新的 RPM 包，并验证 NPU 模型名称与 HF 仓库一致。  
- **对于推理密集型负载**，预期性能提升来自分块 VAE 解码与融合注意力内核——尤其在图像生成流水线中效果显著。

> 📌 **可操作建议**：升级至最新 Studio 构建版本，并在受限硬件上运行大模型时测试 `--lazy-mode` 行为。

---  
*摘要源自 GitHub 数据：[unslothai/unsloth](https://github.com/unslothai/unsloth)*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*