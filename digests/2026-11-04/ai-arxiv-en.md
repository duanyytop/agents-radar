# ArXiv AI Research Digest 2026-11-04

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-04 02:39 UTC

---

---

### **Today's Highlights**  
Recent submissions on ArXiv (2026-11-04) highlight a growing focus on *efficiency*, *alignment*, and *real-world applicability* in large language models. Key breakthroughs include novel methods for reasoning compression, scalable agent architectures, and robust evaluation frameworks that account for subtle linguistic and contextual biases. Notably, research into *inoculation prompting*, *KV cache optimization*, and *zero-shot robotic reward modeling* signals a maturation of LLM systems beyond raw performance toward safe, cost-effective deployment. The emergence of neuro-symbolic integration and multi-agent deception studies further reflects deeper interest in trustworthy, interactive AI.

---

### **Key Papers**

#### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Neologism Inoculation Prompting](http://arxiv.org/abs/2611.04260v1) | Africa et al. | Introduces inoculation prompting to reduce reward hacking by training models on harmful examples under explicit negative prompts. This improves robustness without retraining the base model. |
| [COMPREHEND: Ultra-Fine-Grained Benchmark Understanding by Entailment Hierarchy](http://arxiv.org/abs/2611.04249v1) | Balakrishnan et al. | Proposes a taxonomy method using entailment hierarchies to classify user prompts with high granularity, enabling precise benchmarking and model behavior analysis. |
| [Say Less, Mean Better: Training-Free Verbosity Control for Language Models](http://arxiv.org/abs/2611.04107v1) | Alyosify et al. | Presents a method to control output length without retraining, using early stopping guided by semantic completeness metrics—critical for low-latency applications. |
| [Evaluation Contracts and Evaluation Leverage: Sliced-Gap Readings in Structured Prediction Can Move Without Model Change](http://arxiv.org/abs/2611.04099v1) | Lu et al. | Demonstrates that common evaluation gaps (e.g., intra-inter) are artifacts of evaluation contracts, not model capability—calls for standardized evaluation protocols. |

#### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [AlgoPilot: Cross-Paradigm Reasoning in Language Models via Strategy Selection and Guidance](http://arxiv.org/abs/2611.04079v1) | Hao et al. | Enables LLMs to switch between reasoning paradigms (e.g., symbolic, programmatic) based on problem type, improving solution diversity and accuracy across domains. |
| [WASP-Mem: Let Agent Organize Procedural Memory. Human Spend Effort on Diagnosis](http://arxiv.org/abs/2611.04003v1) | Niu et al. | Introduces a self-organizing memory system for agents that captures dynamic, state-dependent procedures without pre-defined rules—ideal for enterprise automation. |
| [EvoGroup: A Self-Evolving Harness for Group Agents in Shared Contexts](http://arxiv.org/abs/2611.03868v1) | Xu et al. | Designs an adaptive group agent framework that evolves its collaboration strategy over time in shared contexts, enabling long-term team-like coordination. |
| [Strategist: Evolving Reasoning with Agents](http://arxiv.org/abs/2611.03618v1) | Lu et al. | Introduces a meta-agent that learns and evolves inference strategies, breaking the "hand-coded" bottleneck and enabling reusable reasoning patterns across tasks. |

#### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [LoopKV: Loop-Aware KV Cache Compression for Serving Looped Transformers](http://arxiv.org/abs/2611.04137v1) | Zhou et al. | Proposes LoopKV, a method that compresses KV caches in looped transformers using context-aware quantization, significantly improving batch size and serving throughput. |
| [FlagRot: Selective Rotation for Low-Bit KV Caches](http://arxiv.org/abs/2611.03992v1) | Shao et al. | Challenges the assumption that key rotation always helps in low-bit quantization; shows selective rotation can preserve more information and reduce error in long-context inference. |
| [EpiLoRA: Fusing Many LoRA Adapters into Low-Precision GEMMs for Serving and RL](http://arxiv.org/abs/2611.03899v1) | Tran & Yu | Enables efficient batching of thousands of LoRA adapters using low-precision matrix multiplication, drastically reducing inference cost in multi-tenant LLM systems. |
| [Dory1.0-4B: A Looped Normalized-GPT](http://arxiv.org/abs/2611.03998v1) | Fishman et al. | Introduces Dory1.0-4B, a 4B-parameter looped language model with elastic depth—capable of adjusting compute budget per inference without retraining. |

#### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [SLATE: A Large-Scale Benchmark for Long-Horizon API Selection in E-commerce Tool Use](http://arxiv.org/abs/2611.03982v1) | Wei et al. | Creates SLATE, a benchmark for evaluating LLM agents in selecting correct APIs from thousands in complex e-commerce workflows—key for enterprise automation. |
| [Pixel-UMI: Learning Environment-Aware Whole-Body Manipulation from Sensorized Human Demonstrations](http://arxiv.org/abs/2611.03647v1) | Liu et al. | Develops Pixel-UMI, a pipeline for learning robot manipulation policies from human sensor data, adapting to environment dynamics without full simulation. |
| [DiabAgent: Toward Agentic Physiological Control](http://arxiv.org/abs/2611.03601v1) | Li et al. | Builds DiabAgent—a medical agent that autonomously manages insulin dosing in Type 1 diabetes via sustained interaction, advancing real-time physiological AI. |
| [From Natural Language to Exact Cover: A Neuro-Symbolic Approach to Zebra Puzzles](http://arxiv.org/abs/2611.03641v1) | Skaisgiris et al. | Combines neural generation with symbolic constraint solving to solve logic puzzles reliably—demonstrating hybrid reasoning superiority over pure LLMs. |

---

### **Research Trend Signal**  
A clear shift is emerging toward *practical, deployable AI systems* that prioritize efficiency, adaptability, and trustworthiness. Recent work emphasizes **reasoning compression**, **dynamic memory management**, and **context-aware caching**—all aimed at reducing latency and cost in real-time deployments. There’s also growing attention to **evaluation integrity**: papers like *Evaluation Contracts* and *Swapping the Judge Changes the Ranking* reveal deep concern about bias in benchmarking, signaling a move toward more rigorous, reproducible assessment. Meanwhile, **multi-agent systems** are evolving beyond static roles into self-adaptive, collaborative entities (e.g., EvoGroup, Strategist), while **neuro-symbolic fusion** (e.g., AlgoPilot, From Natural Language to Exact Cover) addresses LLMs’ logical fragility. These trends suggest that the frontier is no longer just “more powerful models,” but **smarter, leaner, and more responsible systems** that operate effectively in complex, dynamic environments.

---

### **Worth Deep Reading**

1. **[AlgoPilot: Cross-Paradigm Reasoning in Language Models via Strategy Selection and Guidance](http://arxiv.org/abs/2611.04079v1)**  
   This paper redefines how LLMs approach problem-solving by dynamically selecting reasoning strategies—symbolic, programmatic, or planning-based—based on task structure. It offers a blueprint for building general-purpose reasoning engines that go beyond Chain-of-Thought, making it essential reading for researchers aiming to build adaptable AI systems.

2. **[LoopKV: Loop-Aware KV Cache Compression for Serving Looped Transformers](http://arxiv.org/abs/2611.04137v1)**  
   With looped transformers gaining traction for accuracy without parameter growth, this paper tackles their core bottleneck: memory overhead. LoopKV introduces a smart, context-sensitive compression method that enables high batch sizes—crucial for production-scale inference. Its insights into KV cache dynamics will inform future model design.

3. **[Dory1.0-4B: A Looped Normalized-GPT](http://arxiv.org/abs/2611.03998v1)**  
   As a 4B-parameter model with elastic depth and normalized attention, Dory1.0-4B exemplifies the next generation of efficient, scalable LLMs. Its ability to serve varying compute budgets from one checkpoint makes it ideal for edge and mobile deployment—highly relevant for developers seeking balance between performance and resource usage.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*