# ArXiv AI Research Digest 2026-11-20

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-20 03:41 UTC

---

---

### **Today's Highlights**  
The latest ArXiv submissions (2026-11-20) reflect a growing emphasis on *trustworthy, accountable, and deployable AI systems*, particularly in high-stakes domains like law, medicine, engineering, and autonomous agents. A recurring theme is the need for verifiable reasoning, auditability, and robust evaluation—evident in papers on safety rationales, explainable forecasting, and policy-driven model editing. Significant advances are also emerging in agent autonomy, with frameworks enabling dynamic tool orchestration, adaptive decision-making, and self-replicating behavior. Meanwhile, architectural innovations in diffusion models, latent world modeling, and memory systems aim to improve efficiency, reliability, and lifelong learning.

---

### **Key Papers**

#### 🧠 Large Language Models (architecture, training, alignment, evaluation)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Verifiable Logic in Medical LLMs: A Critical Review of Agentic Clinical Reasoning Optimization and Neuro-Symbolic Grounding](http://arxiv.org/abs/2611.25898v1) | ElNahas et al. | This paper critiques medical LLMs' tendency to produce plausible but invalid reasoning, advocating for neuro-symbolic grounding to enforce logical correctness. It matters because clinical decisions demand accountability beyond accuracy. |
| [Many Solutions, One Answer: Search Order Shapes the Default Solutions of Language Models](http://arxiv.org/abs/2611.25916v1) | Hou & Tang | Shows that language models consistently converge on one default solution among many valid answers due to search order bias. This reveals a hidden systematic flaw in LLM output diversity and fairness. |
| [Anchor and Check: Deterministic Cross-Prompt, Cross-Model Reconciliation for Auditable LLM Decisions](http://arxiv.org/abs/2611.25818v1) | Chejarla | Introduces a deterministic reconciliation protocol using greedy anchors and cross-model checks to ensure auditable, reproducible LLM decisions. Crucial for enterprise deployment where traceability is non-negotiable. |

#### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [ForeSeek: Foresight-Driven Reasoning for Long-Form Video Understanding](http://arxiv.org/abs/2611.26024v1) | Sun et al. | Proposes a foresight-driven planning framework that proactively retrieves relevant video segments before they’re needed, reducing latency in long-form video understanding. Enables more proactive, less reactive multimodal agents. |
| [System-One RSI: Building Muscle Memory for Interactive Agents through Guided Practice](http://arxiv.org/abs/2611.26007v1) | Fu et al. | Develops a method to train fast, low-latency decision-making in agents via guided practice, mimicking "muscle memory." Solves the sub-second control bottleneck in real-time interactive systems. |
| [Generalist Meets Specialists: An Evolving Multimodal Agent with Persistent Tool Orchestration for Traffic Scenario Understanding](http://arxiv.org/abs/2611.25868v1) | Kang et al. | Presents an evolving agent that dynamically selects and sequences perception tools for traffic scenarios, overcoming terminal reward limitations. Advances goal-directed tool use in complex environments. |
| [Duopra: From Full-Duplex Conversation to Full-Duplex Agency](http://arxiv.org/abs/2611.25773v1) | Chen et al. | Extends full-duplex interaction into full-duplex agency by enabling agents to autonomously revise actions and invoke tools mid-conversation. Bridges natural dialogue with task execution. |

#### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Fast-JEPA: Advancing the Success-Latency Frontier for Latent World Models](http://arxiv.org/abs/2611.25927v1) | Zhang et al. | Introduces Fast-JEPA, a latent world model that accelerates predictive planning by reordering inference steps. Improves the success-latency trade-off for real-time robotic and agent planning. |
| [ROAM-GRPO: Enforcing Reasoning Diversity in GRPO via Routed Off-mode Approach Mining](http://arxiv.org/abs/2611.25926v1) | Duan & Thomson | Addresses the collapse of reasoning diversity in post-training LLMs by mining off-mode reasoning paths. Prevents repetitive outputs and improves robustness in complex tasks. |
| [One Schedule Does Not Fit All: Adaptive Inference Schedules for Diffusion Language Models](http://arxiv.org/abs/2611.25895v1) | Karanjai et al. | Proposes TCDA, a task-calibrated denoising schedule that adapts inference speed to workload demands while guaranteeing error bounds. Enables efficient, context-aware generation. |
| [Decoupled Knowledge Retrieval and Compact Memory Enable Reliable Lifelong Model Editing](http://arxiv.org/abs/2611.25861v1) | Che et al. | Introduces a decoupled memory system that separates knowledge retrieval from compact storage, enabling safe, scalable edits without retraining. Key for maintaining up-to-date, trustworthy models. |

#### 📊 Applications (domain-specific, multimodal, code generation)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [AI agents can redesign engineering parts with more than a thousand CAD parameters and nonlinear simulations](http://arxiv.org/abs/2611.26003v1) | Starostina et al. | Demonstrates AI agents capable of optimizing engineering designs under extreme complexity, using few expensive simulations. Opens new pathways for automated, high-fidelity product design. |
| [From AI Surrogate to Engineering Tool: Toward Production Use of Fiber-Orientation Prediction in Crash CAE](http://arxiv.org/abs/2611.25991v1) | Ito et al. | Transforms a neural surrogate into a production-grade tool for crash simulation, cutting 25-hour workflows down to minutes. A major step toward industrial adoption of AI in CAE. |
| [Harnessing Medical Visual-Language Models with Agentic Evidence Management](http://arxiv.org/abs/2611.25840v1) | Huang et al. | Builds a benchmark to evaluate how well medical VLMs actually *use* segmentation evidence—not just generate it. Critical for ensuring diagnostic agents reason correctly. |
| [An LLM-Driven Traffic-Control xApp for Dynamic 5G RAN Intents](http://arxiv.org/abs/2611.25736v1) | Triolo et al. | Uses LLMs to dynamically configure 5G radio access networks based on real-time service needs. Combines AI flexibility with telecom infrastructure control at scale. |

---

### **Research Trend Signal**  
A clear shift toward *production-ready, accountable AI* is evident across today’s submissions. Researchers are moving beyond pure performance metrics to focus on **auditability, verifiability, and operational robustness**—especially in critical domains like healthcare, engineering, and legal systems. The rise of agentic architectures that combine persistent memory, tool orchestration, and adaptive decision-making signals maturation in AI systems capable of sustained, autonomous operation. Simultaneously, there’s growing attention to **systemic risks**: hallucinated rationales, overreliance in companionship, and opaque decision trails. Benchmarking efforts like *LINEAGE* and *PosteriorBench* suggest a nascent culture of empirical rigor in AI research. Moreover, efficiency remains central—whether through adaptive inference schedules, lightweight routing, or memory decoupling—indicating that scalability and cost-effectiveness are now as crucial as capability.

---

### **Worth Deep Reading**

1. **[Self-Replicating Language Models](http://arxiv.org/abs/2611.25839v1)** – Hintze explores whether LLMs meet Darwinian criteria for life through self-replication and evolution. While speculative, this paper provocatively challenges our definitions of agency and intelligence, offering a philosophical lens for understanding emergent behavior in large-scale models.

2. **[When Safety Rationales Hallucinate: Diagnosing and Grounding Multimodal Safety Guards](http://arxiv.org/abs/2611.25793v1)** – This paper exposes a critical vulnerability: safety guards may produce convincing but false justifications. It introduces a rigorous diagnostic framework and calls for grounded, evidence-based rationales—a must-read for anyone building safety-critical AI.

3. **[Auto-Alpha: A Framework for Autonomous Factor Research](http://arxiv.org/abs/2611.25732v1)** – For researchers interested in AI-driven discovery, this paper presents a closed-loop system where hypotheses are generated, tested, and refined autonomously. It exemplifies the future of scientific AI: not just analysis, but active, self-directed research.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*