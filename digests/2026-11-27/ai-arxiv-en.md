# ArXiv AI Research Digest 2026-11-27

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-27 04:29 UTC

---

---

### **Today's Highlights**  
Recent AI research on ArXiv (2026-11-27) highlights a growing focus on *trustworthy, efficient, and interpretable* AI systems. Breakthroughs in **LLM alignment and safety** emerge through novel benchmarks like *VulnSafe* and *BioScore*, which evaluate model behavior beyond accuracy—assessing emotional sensitivity and biological plausibility. In **reasoning and agent systems**, papers such as *Solve Vision with Code* challenge the dominance of video models by showing that coding agents outperform them in visual reasoning, suggesting a paradigm shift toward symbolic execution. Meanwhile, **efficiency innovations** like *DFly2* and *Focus Only on What's Important* demonstrate how sparsity and selective attention can drastically reduce computational cost without sacrificing performance. Finally, new frameworks like *μ-Bench* and *DRBench Pro* emphasize real-world usability in multi-user and professional research settings, signaling maturity in evaluation methodology.

---

### **Key Papers**

#### 🧠 Large Language Models (architecture, training, alignment, evaluation)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Tokenisation is not in APX](http://arxiv.org/abs/2611.34938v1) | Kastreva et al. | Proves tokenization cannot be approximated within any constant factor in polynomial time unless P=NP, establishing a fundamental complexity barrier for lossless text compression. This challenges assumptions behind many NLP pretraining pipelines. |
| [Repairing the Trustworthiness of Distilled Language Models](http://arxiv.org/abs/2611.34831v1) | Shubham et al. | Reveals that knowledge distillation can degrade trustworthiness even when downstream accuracy is preserved; proposes a repair framework to restore factual consistency without retraining. |
| [One Model, Many Modes: Evolving System Prompt Ensembles for Creative Generation](http://arxiv.org/abs/2611.34760v1) | Chen et al. | Introduces dynamic system prompt ensembles to combat mode collapse in LLMs, enabling diverse, high-quality creative outputs while maintaining alignment with user intent. |
| [The Linguistic Knowledge Benchmark: Do Language Models Know the Foundations of Early-Grade Literacy?](http://arxiv.org/abs/2611.34823v1) | Lelièvre et al. | Evaluates LM proficiency in foundational literacy skills across low-resource languages, revealing critical gaps in linguistic representation relevant to global education equity. |

#### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Diverse Alternative Reasoning Traces for Hard Math Problems](http://arxiv.org/abs/2611.34928v1) | Aichberger et al. | Proposes a method to generate multiple valid reasoning paths for hard math problems, improving verifiable success rates by overcoming rare correct traces under standard sampling. |
| [Solve Vision with Code: Coding Agents Are Stronger Visual Reasoners Than Video Models](http://arxiv.org/abs/2611.34813v1) | Luo et al. | Demonstrates that coding agents surpass video generation models in visual reasoning tasks by executing logical steps rather than simulating motion, challenging the assumption that vision must be continuous. |
| [When Every Rollout Fails: Splicing Learner-Conditioned Options into Long-Horizon Agent RL](http://arxiv.org/abs/2611.34777v1) | Hou et al. | Introduces a strategy to inject expert solutions into failing long-horizon RL episodes, enabling gradient-based learning even when all rollouts yield zero reward. |
| [PersonaFactory: Stylistic User Prompt Augmentation with Synthetic Persona Bank](http://arxiv.org/abs/2611.34785v1) | Doan et al. | Creates a synthetic persona bank to enrich user prompts with stylistic diversity, enhancing LLM training data realism and reducing monotonous outputs in dialogue systems. |

#### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [DFly2: Turbocharging Long-Context Speculative Decoding by Sharing the Target's Sparsity](http://arxiv.org/abs/2611.34776v1) | Liu et al. | Reduces speculative decoding overhead in long-context models by sharing sparsity patterns between draft and target models, cutting latency without compromising accuracy. |
| [Focus Only on What's Important: Training-Free Focus Maps for Frozen Vision Transformers](http://arxiv.org/abs/2611.34863v1) | Karipineni & Chintha | Enables efficient long-video object segmentation by applying training-free focus maps to frozen ViTs, directing computation only where it matters most. |
| [Routeability Before Routing: Routeability Audit Protocol (RAP) and RouteabilityBench](http://arxiv.org/abs/2611.34825v1) | Lu et al. | Introduces a protocol to audit whether LLM portfolios have sufficient prompt-specific variation for effective routing, addressing the "all-models-same" problem in ensemble selection. |
| [Split-RL: Local Conflict Resolution in Reinforcement Learning](http://arxiv.org/abs/2611.34799v1) | Fuhrer et al. | Presents a GBT-based algorithm that resolves conflicting local feedback in RL policies, enabling robust decision-making in environments with spatial-temporal trade-offs. |

#### 📊 Applications (domain-specific, multimodal, code generation)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [A gene informed benchmark for BioScoring of pathology foundation models](http://arxiv.org/abs/2611.34930v1) | Vilars et al. | Proposes *BioScore*, a benchmark assessing how well pathology models reflect biological mechanisms via gene-level analysis—moving beyond task accuracy to interpretability. |
| [Enhancing Maritime Domain Awareness using Latent Space Representations](http://arxiv.org/abs/2611.34899v1) | Vinge et al. | Uses compressed latent-space embeddings from TerraMind to improve maritime surveillance, enabling faster and more scalable detection of vessel activity from Sentinel-1 data. |
| [Can image generation help visual reasoning? An empirical study](http://arxiv.org/abs/2611.34935v1) | Yu et al. | Shows that generating helper images based on model-desired cues improves visual question answering accuracy across 13 multimodal models, suggesting a new hybrid reasoning pathway. |
| [Deep Reinforcement Learning for Multi-UAV Data Harvesting Under Variable Team Sizes and Agent Loss](http://arxiv.org/abs/2611.34818v1) | Lamenza et al. | Develops an adaptive DRL policy for UAV swarms that maintains data collection efficiency despite variable team sizes and agent failures, crucial for resilient IoT networks. |

---

### **Research Trend Signal**  
A clear trend toward **evaluation rigor, real-world validity, and operational robustness** dominates today’s submissions. Researchers are moving beyond simple accuracy metrics to assess *trustworthiness* (e.g., *VulnSafe*, *CALD*), *biological fidelity* (*BioScore*), and *practical deployment viability* (*μ-Bench*, *RouteabilityBench*). There is also a growing emphasis on **efficient inference**: methods like *DFly2* and *Focus Maps* exploit sparsity and selectivity to reduce compute costs without performance loss. Notably, the rise of *agent-centric reasoning*—where coding agents outperform vision models in reasoning tasks—suggests a shift from pure perception to executable logic. Furthermore, the emergence of *dynamic prompting* (*One Model, Many Modes*) and *synthetic personas* signals deeper integration of identity and style in LLM interaction design. These developments collectively point to a maturing field focused on deployable, accountable, and human-aligned AI systems.

---

### **Worth Deep Reading**
1. **[Solve Vision with Code: Coding Agents Are Stronger Visual Reasoners Than Video Models](http://arxiv.org/abs/2611.34813v1)**  
   This paper fundamentally challenges the assumption that visual reasoning must be embodied in continuous video generation. By demonstrating that coding agents achieve superior results through symbolic execution, it opens a new path for building reliable, auditable visual reasoning systems—especially valuable in safety-critical domains.

2. **[Tokenisation is not in APX](http://arxiv.org/abs/2611.34938v1)**  
   Though theoretical, this result has profound implications for NLP infrastructure. It establishes that optimal tokenization is computationally intractable, forcing a re-evaluation of core preprocessing pipelines. Understanding this limit is essential for future work in compression, model efficiency, and language modeling.

3. **[A gene informed benchmark for BioScoring of pathology foundation models](http://arxiv.org/abs/2611.34930v1)**  
   This work sets a new gold standard for evaluating medical AI—not just by performance but by biological plausibility. As AI enters clinical workflows, such benchmarks will be vital to ensure models represent real disease mechanisms, not just statistical correlations.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*