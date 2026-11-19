# ArXiv AI Research Digest 2026-11-19

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-19 03:48 UTC

---

---

### **Today's Highlights**  
Recent AI research on ArXiv (2026-11-18) reflects a strong momentum toward **agent-centric intelligence**, with breakthroughs in scalable, efficient, and secure reasoning systems. Key advances include *MoE-Context*, which mimics human memory by selectively retrieving context blocks to reduce inference cost; *LoopCache*, enabling fast self-speculative decoding in looped Transformers; and *AutoPI*, a taxonomy-guided red teaming framework that improves robustness against adaptive prompt injection attacks. The integration of **uncertainty quantification**—seen in *Tell Me How Sure You Are* and *Adaptive Action Horizon Selection*—signals growing maturity in safety-aware agent design. Meanwhile, *RSIBench-Infra* challenges the frontier of recursive self-improvement by testing whether agents can optimize their own training infrastructure at production scale.

---

### **Key Papers**

#### 🧠 Large Language Models (architecture, training, alignment, evaluation)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [LLM-Assisted Multi-Fidelity Bayesian Optimization: Fusing Expert Knowledge with Numerical Data](http://arxiv.org/abs/2611.24377v1) | Han, Lee, Lee et al. | Integrates LLMs with multi-fidelity Bayesian optimization to guide engineering design with minimal high-fidelity evaluations. This enables expert-level decision-making even with scarce data, reducing real-world R&D costs. |
| [How to Turn an Attention Neural Network into an Interpretable Hard-Logic Predicate Circuit](http://arxiv.org/abs/2611.24381v1) | Li, Fan, Li et al. | Converts trained attention models into interpretable logic circuits via truth-table extraction and state-machine merging. Enables formal verification and transparency in high-stakes AI decisions. |
| [Benchmarking LLM abilities on postdoc-level natural science problems](http://arxiv.org/abs/2611.24321v1) | Avanesyan, Boldyrev, Deng et al. | Proposes a rigorous benchmark for evaluating LLMs on open-ended scientific reasoning tasks without answer keys. Sets a new standard for assessing true comprehension beyond retrieval. |

#### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [MoE-Context: Show the Model Only What It Needs](http://arxiv.org/abs/2611.24379v1) | Navale | Introduces a dynamic context selection mechanism using a fast "yes/no" gate to retain only relevant historical blocks. Reduces inference cost and memory usage while preserving long-horizon reasoning. |
| [Semantic Context Handoff with On-Demand Evidence for Long-Horizon Agents](http://arxiv.org/abs/2611.24357v1) | Zheng, Hou, Yang et al. | Proposes a selective evidence retrieval system where agents fetch context only when needed, avoiding full-history accumulation. Improves scalability and accuracy in extended reasoning tasks. |
| [OpenKAGE: Open-Ended Lifelong Learning in the Open World via Knowledge-Sharing Agent-Group Evolution](http://arxiv.org/abs/2611.24302v1) | Yuan, Yuan, Jia et al. | Presents a multi-agent system that evolves knowledge through collaborative exploration and knowledge sharing. Enables continuous learning in unstructured, real-world environments without predefined objectives. |
| [Learning to Coordinate: LLM-Guided Workflow Evolution for Token-Efficient Red Teaming](http://arxiv.org/abs/2611.24221v1) | Xing, Dai, Gong et al. | Uses LLMs to dynamically evolve red teaming workflows, minimizing redundant planning and communication. Achieves higher attack success with fewer tokens, enhancing scalability of safety testing. |

#### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [RSIBench-Infra: Can Agents Optimize Their Own Training and Inference Infrastructure?](http://arxiv.org/abs/2611.24395v1) | Wu, Wang, Cai et al. | Introduces RSIBench-Infra to evaluate agent-driven optimization across hardware, software, and network layers. Tests whether agents can autonomously improve performance at scale—pushing toward recursive self-improvement. |
| [Reducing Inference Cost of Coding Agents with Timeout Cascades](http://arxiv.org/abs/2611.24324v1) | Zhou, Sviridov, Ustiugov et al. | Proposes timeout cascades to terminate slow or unproductive coding steps early. Dramatically cuts GPU cost while maintaining output quality—critical for profitable agentic code generation. |
| [TRESS: A Fixed-Size History Representation for Irregular Time Series Forecasting](http://arxiv.org/abs/2611.24257v1) | Ma, Xie, Zuo et al. | Designs TRESS to handle variable-frequency time series with fixed-size representations. Retains statistical summaries and timestamps, enabling accurate forecasting despite irregular sampling. |
| [Supervised Hebbian Class Networks: Learning Without Backpropagation](http://arxiv.org/abs/2611.24314v1) | Loverich | Introduces a backprop-free training method based on Hebbian learning and class-specific neuron assignment. Offers a biologically plausible alternative to gradient-based training with lower computational overhead. |

#### 📊 Applications (domain-specific, multimodal, code generation)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [OCTR2A: Real-Time RGB-to-BEV Trajectory Projection and Forecasting](http://arxiv.org/abs/2611.24352v1) | Iacobelli, Teglia, Pro et al. | Enables real-time trajectory forecasting at urban intersections using only RGB cameras, bypassing the need for LiDAR or HD maps. A major step toward affordable autonomous driving perception. |
| [CounselTraj: Synthesizing Process-Aware Psychological Counseling Dialogues](http://arxiv.org/abs/2611.24168v1) | Qi, Inaba | Develops a dialogue-act trajectory planner to generate psychologically coherent counseling conversations. Addresses privacy barriers by synthesizing realistic, ethical dialogues without real patient data. |
| [RespCCT and FreqCCT: Compact, Explainable and Cost-Aware Convolutional Transformers](http://arxiv.org/abs/2611.24323v1) | Chakma, Akter, Ahmad Mufti et al. | Proposes lightweight, explainable CNN-transformer hybrids for respiratory disease classification from lung sounds. Balances high accuracy with low inference cost—ideal for resource-limited clinics. |
| [VideoACE: Benchmarking Agentic Video Understanding through High-Frame-Rate Actions](http://arxiv.org/abs/2611.24184v1) | Zhang, Zheng, Long et al. | Introduces VideoACE, a benchmark that evaluates video understanding agents via active interaction with high-frame-rate video. Measures how well models leverage temporal dynamics to improve comprehension. |

---

### **Research Trend Signal**  
The 50 papers from November 2026 reveal a maturing focus on **practical, agent-driven intelligence** that prioritizes efficiency, safety, and real-world deployment. A clear shift is underway from model-centric improvements to **system-level autonomy**: agents are no longer just reasoning—they are optimizing their own infrastructure (*RSIBench-Infra*), managing memory (*MoE-Context*), and evolving collaboratively (*OpenKAGE*). There’s also a growing emphasis on **interpretability and trust**: converting neural networks into logic circuits (*How to Turn an Attention Network...*) and explicitly communicating uncertainty (*Tell Me How Sure You Are*, *Adaptive Action Horizon Selection*). Security is increasingly addressed through adaptive red teaming frameworks (*AutoPI*, *PIPETTE*) that simulate intelligent adversaries. Meanwhile, domain-specific applications—from medical diagnostics (*RespCCT*) to psychological support (*CounselTraj*)—are leveraging LLMs not just as tools but as process-aware collaborators. Together, these trends point toward a future where AI agents operate sustainably, transparently, and responsibly in complex, open-ended environments.

---

### **Worth Deep Reading**
1. **[RSIBench-Infra: Can Agents Optimize Their Own Training and Inference Infrastructure at Production Scale?](http://arxiv.org/abs/2611.24395v1)**  
   *Why*: This paper tackles one of the most ambitious goals in AI: recursive self-improvement at scale. If agents can autonomously optimize their runtime environment—including hardware scheduling, model partitioning, and cache management—it could redefine the economics of large-scale AI deployment.

2. **[AutoPI: Taxonomy-Guided Adaptive Red Teaming for Prompt Injection in LLM Agents](http://arxiv.org/abs/2611.24313v1)**  
   *Why*: As prompt injection remains the top security threat, this work introduces a structured, adaptive red teaming framework that evolves alongside attackers. Its taxonomy-driven approach offers a blueprint for building resilient LLM agents capable of defending themselves in adversarial settings.

3. **[VideoACE: Benchmarking Agentic Video Understanding through High-Frame-Rate Actions](http://arxiv.org/abs/2611.24184v1)**  
   *Why*: Most video benchmarks rely on passive observation. VideoACE changes the game by requiring agents to *interact* with video content—just like humans do. This paradigm shift will shape the next generation of embodied AI systems in robotics, surveillance, and education.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*