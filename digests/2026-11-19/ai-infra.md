# AI 基础设施日报 2026-11-19

> 生成时间: 2026-11-19 03:48 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-11-19**

---

### **1. 生态概览**

2026年末的AI基础设施格局呈现出**高性能推理引擎**与**开发者导向网关**之间的明显分化，硬件平台上的专业化趋势日益显著，尤其体现在AMD ROCm上。*vLLM*、*SGLang* 和 *Unsloth* 等项目正积极优化多种后端的低延迟、高吞吐推理性能，而 *LiteLLM* 与 *Ollama* 则聚焦于抽象化、易用性及面向代理的路由能力。多模态、实时音频以及推测解码的兴起，标志着向全栈AI代理的转变。与此同时，安全加固（如Cosign签名）和可观测性集成也表明生产就绪成熟度正在提升。

---

### **2. 活跃度对比**

| 项目       | 开放问题 | 开放PR | 最近发布 | 状态 |
|------------|----------|--------|----------|------|
| **vLLM**   | 873      | 421    | 无       | 持续开发；实验特性稳定 |
| **SGLang** | 642      | 315    | 无       | 高度不稳定；存在关键ROCm/CUDA问题 |
| **llama.cpp** | 918   | 456    | 无       | 缺陷密度高；性能提升但稳定性风险大 |
| **Ollama** | 1,045    | 298    | 无       | 以稳定性为核心；存在重大UI/内存退化 |
| **LiteLLM** | 522     | 210    | v1.109.2 | 安全加固版本；持续进行稳定性修复 |

> ✅ **洞察**：*vLLM* 与 *llama.cpp* 在技术深度与创新速度上领先，而 *Ollama* 与 *SGLang* 因复杂集成挑战面临更高不稳定性。*LiteLLM* 在持续可靠性工作的同时，推出了一款安全且经过验证的版本，表现突出。

---

### **3. 模型支持竞赛**

| 新模型 / 架构                 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|-------------------------------|------|--------|-----------|--------|---------|
| Qwen3.8-Flash-Next (AMD)     | ✅ (gfx942/gfx950) | ⚠️ 进行中 | ❌ | ❌ | ❌ |
| Muse Spark Open (PTPC-FP8)   | ✅ (ROCm/FP8) | ❌ | ❌ | ❌ | ✅ (图像支持) |
| DeepSeek-V4.1-Flash (ROCm)   | ✅ (DEP/EP) | ✅ (gfx950) | ❌ | ❌ | ❌ |
| Unlimited-OCR-2              | ✅ (可扩展KV禁用) | ❌ | ❌ | ❌ | ❌ |
| VoxCPM2 / Inflect v3 / Hibiki TTS | ❌ | ❌ | ✅ (`mtmd`) | ❌ | ❌ |
| MiniMax-H3-Image / HunyuanImage 2.1 | ❌ | ❌ | ❌ | ❌ | ✅ (渲染配方) |
| WildEdge 可观测性            | ❌ | ❌ | ❌ | ❌ | ✅ (通过LiteLLM) |

> 🏆 **领先者**：**vLLM** 在**新模型与硬件支持**方面领先，尤其在**Qwen3.8、Muse Spark**以及**ROCm优化的MoE模型**方面表现突出。  
> 🔥 **新兴力量**：**Unsloth** 正加速发展**多模态图像生成**与**微调工具链**，拥有强大的社区驱动模型支持。

---

### **4. 性能前沿**

| 优化重点                   | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------------------------|------|--------|-----------|--------|---------|
| **KV缓存管理**             | ✅✅ (大页分配器，DiffKV分块) | ⚠️ (滑动窗口缺陷) | ⚠️ (长会话下崩溃) | ✅ (显存计账修复) | ✅ (CFG副本卸载) |
| **批处理与并行**           | ✅✅ (TP=1 DP感知路由，DEP/EP) | ✅ (total_tokens负载均衡) | ✅ (融合反量化) | ✅ (整提示批处理) | ✅ (自动GPU调度) |
| **量化与混合精度**         | ✅✅ (MoE上MXFP4/NVFP4，FP8按标记缩放) | ⚠️ (ROCm上FP8问题) | ✅ (q8_0/q4_0/f8_e4m3融合) | ❌ | ✅ (INT8/FP8 GGUF + LoRA) |
| **内核级优化**             | ✅✅ (SM80 DiffKV分块，原生16头GEMM) | ⚠️ (AITER MLA性能下降) | ✅ (融合flash attention) | ❌ | ✅ (FLUX.1 AdaLN预计算) |
| **分布式服务**             | ✅✅ (流水线，专家并行) | ⚠️ (CI不稳定阻碍测试) | ❌ | ❌ | ❌ |

> 📈 **主导方向**：*vLLM* 在**分布式服务与内核级优化**方面占据主导地位，尤其适用于**长上下文、MoE及ROCm原生负载**。*Unsloth* 在**特定模型运行时效率**（如图像渲染）方面表现出色。*llama.cpp* 展现出强大的**底层后端融合能力**（CUDA/WebGPU）。

---

### **5. 层级定位**

| 项目       | 主要层级               | 核心差异化 |
|------------|------------------------|------------|
| **vLLM**   | **推理引擎**           | 最高吞吐；ROCm优先；先进调度与量化 |
| **SGLang** | **多后端运行时**       | 积极支持ROCm；轻量但不稳定；聚焦AITER/MLA |
| **llama.cpp** | **本地运行时 / 嵌入式** | 跨平台；WebGPU/WASM/SYCL；支持实时音频/TTS |
| **Ollama** | **开发者网关**         | 用户体验；本地模型编排；以UI为先设计 |
| **LiteLLM** | **API网关 / 路由器**   | 统一API表面；降级/重试逻辑；可观测性集成 |
| **Unsloth** | **微调与代理运行时**   | 训练加速；GUI自动化；代理工作流支持 |

> 🧩 **战略洞察**：  
> - **vLLM** = 生产级推理引擎  
> - **LiteLLM** = 企业级API网关  
> - **Ollama** = 本地开发与原型设计  
> - **Unsloth** = 代理 + 微调栈  
> - **llama.cpp** = 边缘/嵌入式推理  

---

### **6. 趋势信号**

#### 🔍 **从当前活跃度看行业关键趋势**
1. **AMD ROCm已成为新战场** —— *vLLM*、*SGLang* 与 *Unsloth* 正大力投入 gfx942/gfx950/gfx1151/gfx1200 的优化。这表明 **AMD在大模型推理中的角色日益重要**，尤其是在MoE与长上下文模型方面。
2. **实时多模态代理日趋成熟** —— *llama.cpp* 支持TTS、*Unsloth* 实现图像渲染、*LiteLLM* 修复结构化输出，共同推动迈向 **全双工、音视频协同的代理工作流**。
3. **安全与可观测性不容妥协** —— *LiteLLM* 的Cosign签名Docker镜像与WildEdge追踪，反映了对**信任与可见性的生产级要求**。
4. **稳定性 > 速度，开发者工具亦然** —— 尽管性能提升，*SGLang* 与 *Ollama* 仍遭遇严重退化（核心转储、静默截断），说明在采纳过程中，**用户体验与正确性已超越原始速度**。
5. **Rust正成为新标准** —— *vLLM* 的Rust前端路线图与 *LiteLLM* 的原生Rust网关，预示着 **内存安全、高性能系统** 在推理与路由领域正逐步普及。

#### 🛠️ **应用开发者应关注的重点**
- **采用vLLM实现高吞吐、ROCm优化的推理** —— 尤其适用于Qwen3.8/Muse Spark系列变体。
- **将LiteLLM作为你的网关层** —— 其安全机制、可观测性与重试逻辑，使其成为代理流水线的理想选择。
- **谨慎测试Ollama** —— 在 #19765 与 #19757 修复前，避免在Apple Silicon或AMD GPU上使用 `qwen3.8:27b`。
- **监控Unsloth的ROCm QLoRA崩溃问题** —— 在 gfx1151/gfx1200 上训练时，请使用 `fp16` + 损失缩放。
- **利用llama.cpp的 `mtmd` TTS框架** 实现基于浏览器的语音代理。

> ✅ **最终结论**：生态系统已不再围绕“哪个引擎最快”展开——而是聚焦于**栈的协同性、可靠性与代理就绪程度**。请根据部署层级做出选择：*vLLM* 用于推理，*LiteLLM* 用于路由，*Unsloth* 用于微调，*Ollama* 用于本地实验。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-11-19**

---

### **1. 今日亮点**  
vLLM 项目持续加速对 **ROCm/AMD GPU 性能优化** 的投入，多个高优先级问题与合并请求（PR）正针对 gfx942/gfx950 硬件优化，涵盖 Qwen3.8-Flash-Next 与 Muse Spark Open 等模型。一项重大的架构演进正在进行中，**Rust 前端的功能对齐路线图**（Issue #44280）已开始获得关注，标志着向语言无关、高性能推理服务的战略转型。此外，在 **KV 缓存生命周期管理** 和 **多模态支持** 方面也取得显著进展，包括对 OCR 模型的修复以及改进的 CPU 卸载指标。

---

### **2. 发布与破坏性变更**  
*无*  
过去 24 小时内未发布新版本或破坏性 API/配置变更。`VLLM_USE_RUST_FRONTEND=1` 标志仍处于实验阶段，但已足够稳定，可用于生产测试环境。

---

### **3. 新模型与硬件支持**  
- **ROCm 支持扩展**：针对 **gfx942（MI355X）** 与 **gfx950（MI355X）** 进行 AMD 特定优化，覆盖：
  - `amd/Qwen3.8-2.4T-A95B-Quark-MXFP4` (#57149)
  - `amd/Qwen3.8-Flash-Next-Quark-MXFP4` (#59575)
  - `amd/Muse-Spark-Open-816B-A42B-Quark-PTPC-FP8` (#64018)
- **新增模型支持**：
  - `Unlimited-OCR-2`：因输入要求严格，禁用可扩展 KV 缓存；相关修复已合并至 PR #68254。
  - **DeepSeek-V4.1-Flash**：为 B300 部署设计专用解码路径，采用数据并行（DEP）与专家并行（EP），PR #68366 引入 TP=1、DP 友好路由。
- **量化格式**：
  - 通过 PR #64552 的在线量化，将 MXFP4 与 NVFP4 支持扩展至 MoE 模型（如 Muse Spark）。
  - ROCm 平台结合 Triton 后端，现已支持每标记（per-token）FP8 缩放（#61091）。

---

### **4. 性能与优化**  
- **ROCm 性能提升**：
  - gfx950 上运行 Qwen3.8-Flash-Next：通过一系列堆叠式 PR 优化，长上下文输入吞吐量有望提升最高 **~3.2倍**。
  - gfx942 上运行 Muse Spark Open PTPC-FP8：通过专项调优实现性能目标（#64018）。
- **内核与内存优化**：
  - SM80 上启用 **DiffKV 预填充分块**：BLOCK_M=128 + KV 块大小=64，在 200K 上下文块上实现 **3.0倍加速**（#61095）。
  - 在 `VLLM_BATCH_INVARIANT=1` 下为 MXFP4 模型启用 **可中断 CUDA Graph**，避免运行时分块查找冻结（#68467）。
  - 对 HY4 Flash 模型使用 **原生 16 头 DeepGEMM MQA logits**，提升解码效率（#68364）。
- **KV 缓存与卸载**：
  - **大页 KV 分配器** 提案（#64401）：每个 spec 单独分配一个 KV 缓存组，提升内存对齐度并减少碎片。
  - **新增 CPU 卸载指标**：引入直方图指标 `vllm:kv_offload_cpu_chunk_idle_before_evict_seconds`，用于追踪淘汰压力（#67909）。
- **调度器与流水线**：
  - 流水线并行下长预填充分块现在即使仅单个请求也强制启用（#68560），防止阶段级饥饿。

---

### **5. 稳定性与回归问题**  
- **严重缺陷（高危）**：  
  - `动态每张量 FP8 Amax` 包含来自 CUDA Graph 填充的过期 token ID → 导致输出错误。已在 #67802 报告。*修复待处理。*
- **高影响回归**：  
  - `GDN Triton/FLA 预填充` 在 Hopper（H20）GPU 上当 `BK < K` 且 `num_warps >= 4` 时产生非确定性结果。已在 PR #65385 修复（已关闭）。
- **次要但重要问题**：
  - 机密计算模式（TDX/H100）下出现静默垃圾输出，源于过期的 UVA 视图 —— 已在 #57224 修复（已关闭）。
  - `max_output_tokens` 导致工具调用截断，引发响应格式错误 —— 已提交 PR #68547 予以解决。
  - 结构化输出语法验证在 `tool_choice="auto"` 时失败，且 Python 与 Rust 前端行为不一致（#66858）。

---

### **6. 对应用开发者的启示**  
- **谨慎采用 Rust 前端**：尽管 Rust 前端现已可用（`VLLM_USE_RUST_FRONTEND=1`），但其功能尚未与 Python API 完全对齐。预计将持续推进工具调用、结构化输出及插件生命周期钩子的完善（#44280, #66858, #65545）。
- **利用 ROCm 优化提升 AMD 工作负载性能**：若部署于 MI355X 或 MI355X 系统，请优先使用 `--linear-backend triton` 构建，并监控 Qwen3.8 与 Muse Spark 变体的性能提升。
- **对批处理无关工作负载启用可中断 CUDA Graph**：对 MXFP4 模型使用 `VLLM_BATCH_INVARIANT=1`，避免动态推理过程中的卡顿。
- **谨慎处理多模态输入**：确保 `--mm-processor-kwargs` 正确传递至处理器（修复见 #68317）；对 Unlimited-OCR-2 等模型禁用可扩展 KV 缓存。
- **关注 OOM 错误提示清晰度**：PR #68317 改进了模型加载期间的错误信息 —— 未来将提供更清晰的诊断，而非原始 PyTorch OOM 提示。

> 🔗 [GitHub 仓库](https://github.com/vllm-project/vllm) | [最新合并请求](https://github.com/vllm-project/vllm/pulls?q=is%3Aopen+sort%3Aupdated-desc) | [热门问题](https://github.com/vllm-project/vllm/issues?q=is%3Aopen+sort%3Acomments-desc)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 消息简报 – 2026-11-19**

---

### **1. 今日重点**  
SGLang 项目持续加速推进**多后端稳定性**，在 GLM-5.3-Flash 与 DeepSeek-V4.1-Flash 的 AMD ROCm 支持方面取得显著进展，涵盖内核优化和内存管理修复。**CUDA 核心转储问题（问题 #26340）** 和 **不稳定的 CI 基础设施（问题 #42752）** 仍处于活跃状态，表明测试可靠性与底层调试仍面临挑战。

---

### **2. 发布与破坏性变更**  
*无*。过去 24 小时内未发布新版本。即将推出的 **SGLang 1.0 版本（问题 #50045）** 将进入以稳定性为核心的强化阶段，对配置变更实施更严格的验证，并为 1.x 系列正式定义兼容性策略——从 0.5.x 升级可能需要代码调整。

---

### **3. 新模型与硬件支持**  
- **AMD MI355X (gfx950)**：针对 `DeepSeek-V4.1-Flash`（问题 #49327）和 `GLM-5.3-Flash`（PR #51126、#48875）的优化工作正在进行中，包括 FlyDSL 内核及 KDA 回放改进。  
- **NPU（华为 DSV4-Flash）**：通过 PR #51004 添加每日模型数据采集，提升生产级推理的回归追踪能力。  
- **多模态**：PR #51425 已正确映射 `Wan2.1 I2V` LoRA；PR #50639 修复了 `Krea-2-Turbo` 在非 16 像素对齐输入下的图像生成问题。  
- **CPU（Xeon）**：新增每日大模型测试，用于准确性与性能验证（PR #37333）。

---

### **4. 性能与优化**  
- **ROCm/AMD**：  
  - PR #51408 恢复了 fp8 v-absorb 功能，并在 gfx942 上启用融合 RoPE/KV 写入，弥补与 gfx950 的性能差距。  
  - PR #47309 实现了 DCP 索引器的行分片，并使用 aiter ASM 内核处理拥有稀疏 MLA——对 ROCm 上 DSA 模型的扩展至关重要。  
- **扩散模型**：  
  - PR #51383 提出将扩散模型（MiniMax-H3）的冷启动时间降至约 20 秒，显著改善用户体验。  
  - PR #50639 将请求尺寸对齐至 16 像素网格，防止 `EinopsError` 崩溃。  
- **调度器与内存**：  
  - PR #50088 修复了 `total_tokens` 负载均衡中的总令牌计数错误，提升了分块请求的公平性。  
  - PR #51422 重新启用每次基准测试请求使用全新 HTTP 连接，降低高并发下的间歇性连接错误。

---

### **5. 稳定性与回归问题**  
- **严重级别**：  
  - **CUDA 核心转储追踪（问题 #26340）**：382 条评论；由 `pr-test.yml` 自动收集。高严重性不稳定，很可能影响 GPU 推理流水线。*尚未提交修复 PR。*  
  - **macOS CPU 设备失败（问题 #50915）**：`--device cpu` 因 `lscpu` 错误（`get_cpu_ids_by_node`）而失败，阻塞 macOS 上纯 CPU 部署。*修复待处理。*  
- **高优先级**：  
  - **AMD 上 AITER MLA 解码退化（问题 #51278）**：在 MI355X 上使用 FP8 KV 缓存且 `SGLANG_AITER_MLA_PERSIST=0` 时，输出退化为垃圾数据。*PR #51425 修复相关 LoRA 键映射，但未解决此核心问题。*  
  - **滑动窗口 Tree-Mask Bug（问题 #51096）**：`extend_attention_fwd_unified` 读取了错误位——可能导致长上下文推理中出现无声正确性错误。

---

### **6. 对应用开发者的启示**  
- **在 PR #51408 与 #47309 合并前，请预期 AMD ROCm 上存在不稳定性**，尤其是使用 `GLM-5.3-Flash`、`DeepSeek-V4.1-Flash` 或 `aiter` 后端时。  
- **在 #51278 修复前，请避免在 AMD 上使用 `SGLANG_AITER_MLA_PERSIST=0`**；请使用 `persist=1` 以确保输出稳定。  
- **谨慎使用 `--load-balance-method total_tokens`**：PR #50088 修复了分块预填充请求的令牌计数疏漏——请确保负载均衡行为符合预期语义。  
- **对于多模态应用**：确认图像输入分辨率与 16 像素网格对齐，以避免崩溃（参见 PR #50639）。  
- **CI 不稳定（问题 #42752）** 表明测试结果可能不可靠——合并关键 PR 前请手动验证。

> 🔗 [SGLang GitHub Issues](https://github.com/sgl-project/sglang/issues) | 🔗 [PR #51424: 重新启用 NPU PR 触发](https://github.com/sgl-project/sglang/pull/51424)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 消息简报 – 2026-11-19**

---

### **1. 今日亮点**  
最新更新聚焦于扩展实时音频与多模态支持，通过 `mtmd` 框架新增了 TTS 模型集成（VoxCPM2、Inflect v3、Hibiki）。CUDA 和 WebGPU 后端实现关键性能提升，包括 Flash Attention 中的融合 KV 反量化以及 WASM 的宽松 SIMD 优化——显著提升了各类硬件上的推理效率。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未标记新版本。但多个 PR 引入了行为或配置层面的破坏性变更：  
- **PR #32583** ([#32583](https://github.com/ggml-org/llama.cpp/pull/32583)) 更新了 SYCL 构建文档，以反映当前要求。  
- **PR #32115** ([#32115](https://github.com/ggml-org/llama.cpp/pull/32115)) 通过阻止媒体 URL 与代理端点访问本地地址，强化 CORS 策略——对安全加固部署至关重要。  

> ⚠️ 使用 `llama-server` 在本地环境的开发者应在合并后审查其 CORS 与媒体处理配置。

---

### **3. 新模型与硬件支持**  
- **多模态 TTS 模型**：新增支持：  
  - [**VoxCPM2**](https://huggingface.co/openbmb/VoxCPM2) 通过 `mtmd` (#32443)。  
  - [**Inflect v3 系列**](https://huggingface.co/owensong/Inflect-Mini-v3)（Mini、Micro、Atom）——全文本转语音支持 (#32581)。  
  - [**Hibiki 1B/2B**](https://huggingface.co/kyutai/hibiki-1b-pytorch-bf16) —— 全双工语音输入/输出流式传输 (#32443)。  
- **硬件后端**：  
  - **WebGPU**：修复复制核函数中的 2D 索引问题 (#32576)，改善复杂 GPU 布局下的稳定性。  
  - **OpenCL**：在 Windows Snapdragon 设备上，配置阶段自动获取 Adreno 二进制核函数 (#31759)。  
  - **Hexagon**：新增对 `int-hmx`（w8a8/w8a16）的支持及自动 f32 → f16 降低功能 (#32582)。

---

### **4. 性能与优化**  
- **CUDA**：将 `q8_0/q4_0/f8_e4m3` KV 反量化融合进 MMA Flash Attention 内核 (#31802)，移除独立的临时内存遍历，降低解码时的延迟与内存压力。  
- **WASM**：放宽的 SIMD 优化使浏览器推理中的点积吞吐量提升约 15–20% (#19590)。  
- **WebGPU**：修复复制核函数中的 2D 索引问题，提升分块对齐效果，减少大型张量传输中的越界错误 (#32576)。  
- **Vulkan**：RFC 提议引入 RT Core 辅助的 KV 过滤机制用于 FlashAttention (#32558)，有望在现代 GPU 上实现高达 30% 的解码速度提升，通过提前剪枝无关的 KV 页面。

---

### **5. 稳定性与回归问题**  
今日报告的高严重性问题包括：  
- **Vulkan A770 运行 7–8 小时后崩溃** (#29526)：因 GPU fence 损坏导致空 EOS 回复；影响长时间运行的服务器。*尚未修复。*  
- **使用 Qwen3.6-35B MoE + 部分卸载时 CUDA 中 Flash-Attn 路径非法内存访问** (#26609)：第二次请求出现确定性崩溃。*修复待定。*  
- **客户端连接 `/v1/realtime` 时服务器在休眠状态崩溃** (#32541)：休眠状态管理中存在竞态条件。*已有 PR 但未合并。*  
- **循环状态中持续出现 NaN 导致后续请求损坏** (#29830)：引发输出混乱；已在 CPU 后端确认。*临时方案：重置会话。*  

> 🔴 **紧急提醒**：使用 CUDA 或 Vulkan 上 MoE 模型的用户应监控崩溃情况，并在修复合并前避免长时间运行任务。

---

### **6. 对应用开发者的意义**  
- **构建实时多模态应用**：借助新支持的 TTS 模型（`mtmd`），你现在可直接在 `llama-server` 中部署全双工语音代理，适用于具备音频反馈的助手与聊天机器人。  
- **优化 GPU 内存使用**：在 CUDA 中使用融合 KV 反量化（`#31802`）可降低内存开销并提升解码吞吐量——对高上下文长度的 MoE 模型尤为关键。  
- **加固服务器安全**：若公开暴露 `llama-server`，请更新 CORS 规则——近期变更已禁止从媒体与代理端点访问本地地址。  
- **避免长时间工作负载**：在已知回归修复前，请谨慎使用 Vulkan（Intel Arc A770）或 CUDA MoE 模型。  
- **跨后端测试**：OpenCL、Hexagon 与 WebGPU 支持日益多样化，支持跨平台部署——但需验证目标硬件兼容性。  

👉 **推荐操作**：升级至最新 master 版本，特别是使用 `llama-server` 搭配 TTS 或 MoE 模型的场景。关注问题追踪器中 #29526、#26609 与 #32541 的修复进展。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-11-19**

---

### **1. 今日亮点**  
在 macOS 和 AMD GPU 上，高上下文模型报告了关键的内存与上下文处理问题，包括在 65K token 处发生无声截断，以及在卸载过程中出现过度内存压力。两个关键 PR 已合并，修复了因 `shift` 不匹配导致的模型重新加载问题，以及重复的 GGUF 元数据冲突——两者均影响多请求和模型加载工作流的稳定性。

---

### **2. 发布与破坏性变更**  
无。过去 24 小时内未发布新版本或破坏性变更。

---

### **3. 新模型与硬件支持**  
- **新增社区集成**：  
  - [Meta-Capp](https://github.com/ollama/ollama/pull/19766)（通过 Ollama 实现本地推理的 AI PDF 伴侣）  
  - [Coati](https://github.com/ollama/ollama/pull/19763)（基于浏览器侧的网页分析面板，使用本地 LLM）  
- **Vulkan 支持改进**：  
  - 报告 RX 5700 XT（RDNA1）性能问题（与上游 `llama.cpp` 相比，提示处理速度慢约 13 倍）；正在调查中。  
- **ROCm/AMD GPU**：问题 #18950 显示在上下文 shift 不匹配时发生模型重载；已通过 PR #19748 修复（跨 `shift` 设置共享运行器）。

---

### **4. 性能与优化**  
- **VRAM 计算与 GPU 分割**：PR #19632 修复多个关键的 VRAM 误报错误，避免了错误的模型驱逐和次优的 GPU 利用率。  
- **推测解码指标**：PR #19368 添加了每请求的草稿与采纳 token 统计，提升了对推测解码效率的可观测性。  
- **决策类模型的批处理大小**：PRs #19743 与 #19760 为非因果模型（如 `d1-2B`）引入整提示批处理，防止误导性的“上下文长度”错误，并提升吞吐量。  
- **MLX 运行器优化**：PR #19769 支持批量 DFlash2 提议重播与递归状态重建，降低长草稿的开销。

---

### **5. 稳定性与回归**  
| 严重性 | 问题 | 影响 | 修复状态 |  
|--------|------|------|----------|  
| 🔴 高 | 尽管上下文窗口为 147K，仍出现 65,536 token 的无声截断 (#19765) | 模型在输入中途静默停止，未返回 `done_reason: length` | 未修复 — 仍在处理中 |  
| 🔴 高 | 在配备 24GB M6 内存的 Mac 上，使用 `qwen3.8:27b` 并部分卸载时出现内存压力 (#19757) | 系统触发临界内存压力；实际占用比预期高出约 3GiB | 未修复 — 紧急 |  
| 🟡 中 | 实时思考界面中编号列表渲染截断 (#19751, #19755) | 当列出超过 9 项时，UI 出现视觉错乱 | 通过 PR #19755 修复（已合并） |  
| 🟡 中 | 重复的 GGUF 元数据键导致行为不一致 (#19768) | 读取器之间存在“首个胜出”与“最后一个胜出”的冲突 | 通过 PR #19770 修复（已合并） |  
| 🟡 中 | 当缺少 `<tool_call>` 开头符时工具调用解析失败 (#18530) | 在 `qwen3-coder` 中无声丢失工具调用 | 通过 PR #19764 修复（已合并） |  
| 🟡 低 | 即使用户明确意图，仍因 CPU 投影器卸载而重试模型加载 (#19759) | 阻碍可复现的 GPU 内存预算测试 | 未修复 — 功能请求 |  

---

### **6. 对应用开发者的启示**  
- **避免无声截断**：不要假设 `done_reason: stop` 表示已完成——需将输入长度与实际 token 数量进行校验。显式使用 `--max-tokens` 或 `max_tokens` 以避免意外。  
- **GPU 内存约束至关重要**：在 Apple Silicon 与 AMD 系统上，必须密切监控实际内存使用情况——部分卸载可能超出预期。谨慎使用 `OLLAMA_CONTEXT_LENGTH` 与 `OLLAMA_KEEP_ALIVE`。  
- **启用确定性模型加载**：用于基准测试时，可通过 `OLLAMA_FAIL_ON_CPU_OFFLOAD` 显式设置失败于意外卸载（提案见 #19759）。  
- **使用现代运行器**：确保部署使用最新的 `llama-server` 构建版本，以获得改进的 VRAM 计算与批处理调度优势。  
- **增强工具调用鲁棒性**：使用 `qwen3-coder` 时，应接受一定程度的工具调用格式灵活性——但若依赖严格 JSON 解析，需验证输出结构。  

> 🔗 完整详情：[GitHub Issues](https://github.com/ollama/ollama/issues) | [Pull Requests](https://github.com/ollama/ollama/pulls)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 摘要 – 2026-11-19**

---

### **1. 今日亮点**  
最新版本 **v1.109.2** 引入了通过 Cosign 对 Docker 镜像进行完整性验证的严格安全机制，进一步增强生产环境部署的信任度。重大稳定性改进聚焦于数据库韧性（`DATABASE_URL_READ_REPLICA` 恢复）、流式工具调用正确性（Anthropic `/v1/messages`）以及 `usage-based-routing-v2` 下的路由逻辑修复。基于 Rust 的原生网关持续迁移，已完成显著重构以支持降级、重试和模型重标记功能。

---

### **2. 版本发布与破坏性变更**  
- **v1.109.2** 已发布：[GitHub 发布页](https://github.com/BerriAI/litellm/releases/tag/v1.109.2)  
  - ✅ **安全**：使用 Cosign 签名镜像，并通过 GitHub Actions OIDC 身份验证：  
    ```bash
    cosign verify \
      --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main \
      --certificate-oidc-issuer https://token.actions.githubusercontent.com \
      ghcr.io/berriai/litellm:v1.109.2
    ```
  - 未报告破坏性 API 变更；向后兼容性已保留。

---

### **3. 新模型与硬件支持**  
- 新增 **WildEdge Observability 集成** 作为 OpenTelemetry v2 预设 ([#52290](https://github.com/BerriAI/litellm/issues/52290)) — 支持从 LiteLLM 代理到 WildEdge.dev 的端到端追踪，实现 AI 监控。
- **Sambanova Vision 支持**：修复因内容扁平化导致图像 URL 丢失的问题 ([#37609](https://github.com/BerriAI/litellm/issues/37609)) — 现已正确转发多模态输入。
- **Vertex Claude / Gemini**：修正 `/v1/messages` 中的消息顺序，确保提示缓存行为一致性 ([#50070](https://github.com/BerriAI/litellm/issues/50070))。

---

### **4. 性能与优化**  
- **流式传输效率**：PR [#52544](https://github.com/BerriAI/litellm/pull/52544) 确保在 SSE 中继过程中 *不会丢弃任何字节* — 包括注释、BOM 和心跳包 — 显著提升实时代理工作流中的数据保真度。
- **路由器核心重构**：PRs [#52509](https://github.com/BerriAI/litellm/pull/52509) 与 [#52274](https://github.com/BerriAI/litellm/pull/52274) 重构原生路由器中的主机处理逻辑，支持按请求绑定主机，并在模型组间实现更优的负载均衡。
- **延迟降低**：PR [#51533](https://github.com/BerriAI/litellm/pull/51533) 恢复原生 Llama 流中准确的 token 统计与 `stop_reason` — 对成本追踪和代理循环控制至关重要。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 描述 | 修复状态 |
|---------|-------|-------------|------------|
| 🔴 高 | [#52284](https://github.com/BerriAI/litellm/issues/52284) | 读副本数据库连接超时导致代理永久无法读取；无自愈能力 | ❌ 待修复 |
| 🔴 高 | [#52548](https://github.com/BerriAI/litellm/issues/52548) | 优先级路由组忽略 TPM 限制，在 `usage-based-routing-v2` 下过早故障转移 | ❌ 待修复 |
| 🟡 中 | [#52456](https://github.com/BerriAI/litellm/issues/52456) | OpenAI 决策顺序错乱被静默重标 — 破坏推理轨迹完整性 | ✅ 已在 v1.110.0 修复 |
| 🟡 中 | [#45348](https://github.com/BerriAI/litellm/issues/45348) | 多个工具在单轮中输出时，流式工具调用参数被丢弃（Anthropic） | ❌ 待修复 |
| 🟢 低 | [#49680](https://github.com/BerriAI/litellm/issues/49680) | `prisma_migration --skip_server_startup` 在 `psycopg` 加载 `libpq` 失败时崩溃 | ✅ 修复 PR 已提交 |

---

### **6. 对应用开发者的影响**  
- **避免服务中断**：若使用 `DATABASE_URL_READ_REPLICA`，请监控短暂中断后的永久读取失败情况 — 当前临时方案需手动重启或添加重试逻辑。
- **确保预算准确**：使用 `usage-based-routing-v2` 时需谨慎 — `priority` 路由可能绕过 TPM 限制；建议在预发环境验证路由配置。
- **构建健壮代理**：利用 Rust 网关新增的 `model_restamping` 与 `stream_hold` 功能 ([#52428](https://github.com/BerriAI/litellm/pull/52428)) 安全覆盖响应模型并处理部分流。
- **监控可观测性**：启用新推出的 **WildEdge 预设** ([#52290](https://github.com/BerriAI/litellm/issues/52290))，实现对代理循环与成本异常的全栈追踪。
- **使用最新版本**：升级至 **v1.109.2+** 以获得经验证的镜像签名及高并发场景下的更优稳定性。

> 💡 技巧提示：本地使用 Ollama + 工具调用时，请显式设置 `supports_function_calling: true` — UI Schema 问题 ([#36463](https://github.com/BerriAI/litellm/issues/36463)) 可能导致工具发现延迟。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth 消息简报 – 2026-11-19**

---

### **1. 今日亮点**  
Unsloth 持续推进多 GPU 与推理优化能力，关键 PR 引入了跨 GPU 的自动模型部署（包括 CFG 复制卸载），并改进了注意力后端的报告机制。针对 AMD ROCm（gfx1151/gfx1200）的 GPU 内存管理错误进行了关键修复，包括在 QLoRA 训练期间融合内核中出现的 `HIP error: illegal memory access`。UI 也通过新增模型选择器选项和统一音频接口得到优化。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告任何内容。*

---

### **3. 新模型与硬件支持**  
- **AMD ROCm 支持**：扩展对 RDNA4（gfx1200）和 gfx1151 的支持，启用实验性混合线性注意力打包（`UNSLOTH_EXPERIMENTAL_HYBRID_PACKING=1`）——但目前在 gfx1151 上尚未观察到性能提升。  
- **新模型**：MiniMax-H3-Image、HunyuanImage 2.1 精炼版、Anima-Turbo、Chroma1-Flash 现在尊重发布方特定的渲染配方（PR #18280）。  
- **量化**：INT8/FP8 GGUF 构建现在可正确加载 LoRAs（PR #18420）；支持在非 bf16 GPU（如 T4 sm75）上以 fp16 和损失缩放训练 DiT LoRAs（PR #18355）。  
- **硬件**：多 GPU 自动部署现已考虑引导扩散效率——当单卡 + CFG 复制比分层更优时，优先选择该方案（PR #18421）。

---

### **4. 性能与优化**  
- **内存效率**：在 gfx1151 上，`--fit on` 现在能正确估算设备内存使用量（避免系统内存从约 43GB 溢出至 57GB）（Issue #18316）。  
- **速度提升**：  
  - MiniMax-H3-Image 在 8GB 显卡上渲染时间由 **82.7 秒降至 36.7 秒**，通过固定文本编码器层实现（PR #18417）。  
  - FLUX.1 流式处理：AdaLN 调制每请求仅预计算一次，降低每步开销约 **28%**（PR #18342）。  
- **内核优化**：  
  - Flash attention 后端现在报告实际使用的运行时后端（PR #18418）。  
  - 启用打包后，训练将处理长原始文本行中的每一个 token（PR #18408）。  
- **延迟优化**：为内置 TTS 语音添加音频预览样本（PR #18251）；解决滚动延迟问题（Issue #18259）。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 影响 | 修复状态 |
|---------|------|--------|------------|
| 高 | [Bug] 驱动升级后（620.70.06-1）GPU 不再被使用 | 无法加载模型；显存不可用 | 已关闭（等待合并 PR） |
| 高 | [Bug] gfx1200 上的 QLoRA 因 `HIP error: illegal memory access` 中止 | RDNA4 上训练失败 | 开放（PR #18403） |
| 中 | [Bug] 经过 8 次 computer-use 调用后 KV 缓存失效（`MAX_TOTAL_MODEL_IMAGES = 8`） | 限制自动化使用场景 | 已关闭（修复已合并） |
| 中 | [Bug] API/提供者连接因工具结果过大而断开 → 无限重试循环 | 打断代理工作流 | 已关闭（PR #18185） |
| 低 | [UI Bug] v0.1.919-beta 中模型选择器感觉拥挤 | 用户体验下降 | 开放（PR #18321） |

> 🔗 [Issue #18403](https://github.com/unslothai/unsloth/issues/18403) — *QLoRA 训练期间关键 ROCm 内核崩溃*  
> 🔗 [Issue #18189](https://github.com/unslothai/unsloth/issues/18189) — *API 提供者压缩策略与本地模型不匹配*

---

### **6. 对应用开发者的影响**  
- **多 GPU 部署**：使用 `--fit on` 并通过 Studio 的状态报告监控实际注意力后端（`flash`、`cuDNN` 等）（PR #18418），以优化推理布局。  
- **代理可靠性**：通过验证 API 连接中的输出大小限制（PR #18185），避免 `tool-result` 截断循环。直接在 `/v1/chat/completions` 中使用 `json_schema` 与 `grammar` 字段（PR #18385）。  
- **模型微调**：利用 `--fit on` 实现准确的内存估算（Issue #18316），并启用自动 `max_seq_length` 检测（功能请求 #18236），简化训练准备流程。  
- **跨平台开发**：对 ROCm 硬件（尤其是 gfx1151/gfx1200）保持谨慎——除非使用 `fp16` + 损失缩放（PR #18355），否则预期在 QLoRA 中发生内核级崩溃。  
- **UI 自动化**：仅在 X11 环境下使用 `computer-use` 功能（非 Wayland）（Issue #18221）；若会话基于 Wayland，建议在 Linux 上禁用该功能。

👉 *实用提示*：关注像 #18421 和 #18417 这样的 PR，以获取大规模图像与推理流水线未来的优化方向。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*