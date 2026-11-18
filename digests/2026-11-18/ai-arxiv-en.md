# ArXiv AI Research Digest 2026-11-18

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-18 03:49 UTC

---

---

### **Today's Highlights**  
Recent AI research on ArXiv (2026-11-17) reveals a growing focus on *real-world reliability*, *interpretability*, and *efficiency* in deployed AI systems. Key advances include frameworks for auditing clinical and autonomous decision-making trajectories, ensuring that correct outcomes aren’t achieved through harmful or opaque paths. There’s also strong momentum in building *evidence-grounded*, *provenance-aware*, and *behaviorally consistent* models—especially in safety-critical domains like healthcare, robotics, and smart homes. Notably, new benchmarks such as SciWorkBench and RehearsalBench are pushing agents toward real scientific and organizational reasoning, while efficient world modeling and low-resource language adaptation highlight the need for scalable, inclusive AI.

---

### **Key Papers**

#### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Worldviews in Large Language Models](http://arxiv.org/abs/2611.22670v1) | Lopez-Sola et al. | This paper reframes LLM alignment beyond personas by identifying "worldviews"—core beliefs about reality—as a deeper level of agent cognition. Understanding these enables more robust, value-aligned AI behavior. |
| [Right Labels, Wrong Reasons: Signed Feature Attribution for Multi-Label Explainability](http://arxiv.org/abs/2611.22515v1) | Kenton White | Proposes FLEX, a global surrogate model to explain multi-label predictions by attributing features with sign and magnitude. Addresses cases where models get labels right but for incorrect reasons. |
| [PACD: Provenance-Aware Consensus Decoding for Mitigating Cross-Modal Hallucinations in Omnimodal Large Language Models](http://arxiv.org/abs/2611.22456v1) | Sun et al. | Introduces PACD, a decoding method that tracks modality provenance to reduce cross-modal hallucinations in Omni-LLMs. Enhances trustworthiness in multimodal reasoning tasks. |

#### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [The Between-Round Decision in Autonomous Research: An LLM Controller That Reads the Whole Trajectory](http://arxiv.org/abs/2611.22661v1) | Wang et al. | Presents a controller that evaluates entire experimental trajectories before deciding whether to refine or pivot, enabling adaptive, evidence-driven research workflows. |
| [JET: Just-Enough Exploration Tuning for Efficient Tool-Calling Agents in Repository-Level Question Answering](http://arxiv.org/abs/2611.22539v1) | Choi et al. | Identifies over-exploration in code QA agents and proposes JET to stop tool calls once sufficient information is gathered—boosting efficiency without sacrificing accuracy. |
| [EvoSkill-S1: Evolving Reusable Skills with Genetic-Inspired Operators](http://arxiv.org/abs/2611.22610v1) | Wang et al. | Introduces genetic operators to evolve high-quality, reusable skills in language-model agents—enabling structured, scalable experience accumulation. |
| [RICoT: Recurrent Interleaved Chain-of-Thought for Page Stream Segmentation](http://arxiv.org/abs/2611.22382v1) | Khatri et al. | Applies recurrent CoT to segment multi-page documents by modeling dependencies across pages—improving coherence in document splitting tasks. |

#### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [EDA: Observe, Verify, and Assess for Evidence-Grounded Multimodal Depression Analysis](http://arxiv.org/abs/2611.22648v1) | Fu et al. | Proposes EDA, a framework that grounds depression assessment in verifiable, time-stamped observations—enhancing transparency and clinical trust. |
| [AlignedHPO: Efficient Surrogate-Guided Loss Hyperparameter Optimization](http://arxiv.org/abs/2611.22658v1) | Karpukhin & Savchenko | Introduces AlignedHPO, a surrogate-based method for differentiable loss hyperparameter tuning—reducing cost and accelerating model calibration. |
| [DAQ: Decision-Aligned Post-Training Quantization for Spiking Transformers](http://arxiv.org/abs/2611.22611v1) | Chen et al. | DAQ aligns quantization with downstream decision quality, preserving performance in spiking transformers despite reduced memory and computation. |
| [Manufacturing Differential Sparsity: Planner-Hardware Co-Design for Efficient World Model Planning](http://arxiv.org/abs/2611.22483v1) | Zhu et al. | Proposes co-design of planning algorithms and hardware to exploit differential sparsity in latent world models—cutting MPC planning time by orders of magnitude. |
| [RehearsalBench: Can AI Predict What Happens When You Change a Company?](http://arxiv.org/abs/2611.22480v1) | Siddiqui & Perera | Introduces RehearsalBench—a benchmark for evaluating AI’s ability to simulate organizational change impacts, bridging AI and business strategy. |
| [SciWorkBench: A Benchmark for Real Scientific Workflows](http://arxiv.org/abs/2611.22490v1) | Zhang et al. | Presents SciWorkBench, a realistic benchmark testing whether LLM agents can execute full scientific projects—including iteration, hypothesis refinement, and reporting. |

#### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [MillBill: A Machining Agent with Geometric Feedback](http://arxiv.org/abs/2611.22565v1) | Savrasov et al. | MillBill integrates geometric feedback into a CAD-to-machining workflow, enabling accurate, self-correcting CNC programming via vision-guided validation. |
| [CADMAGEDDON: High-Fidelity CAD Reconstruction with Local Inference](http://arxiv.org/abs/2611.22563v1) | Pavlov et al. | Offers an open-source agent that reconstructs editable CAD models from images using local inference—empowering small firms to bring design in-house without costly tools. |
| [MAVE: Reconstructing Editable 3D Blockouts from Film Shots](http://arxiv.org/abs/2611.22464v1) | Chang et al. | MAVE creates editable 3D blockouts from film footage, enabling faster previsualization and expanding training data for video generation. |
| [From Perception to Simulation: Unveiling and Empowering Mental Spatial Dynamics in MLLMs](http://arxiv.org/abs/2611.22541v1) | Li et al. | Reveals MLLMs’ ability to simulate dynamic spatial reasoning, opening new avenues for virtual environments and embodied AI planning. |
| [CULypso: A Clustered Federated Unlearning paradigm for Vehicular Ad-Hoc Networks](http://arxiv.org/abs/2611.22682v1) | Chini et al. | CULypso enables privacy-preserving unlearning in mobile vehicular networks—critical for GDPR compliance in edge AI systems. |

---

### **Research Trend Signal**  
A clear shift is emerging toward *trustworthy, accountable, and context-aware AI systems*. Researchers are moving beyond raw performance metrics to audit *how* decisions are made—especially in high-stakes domains like medicine, autonomous driving, and organizational strategy. The rise of benchmarks like RehearsalBench and SciWorkBench signals a demand for evaluating AI not just on outcomes, but on process fidelity and real-world applicability. Simultaneously, there's a strong emphasis on *efficiency* and *real-time operation*, evident in works on lightweight world models, decision-aligned quantization, and pruning strategies. Meanwhile, the integration of *provenance tracking*, *memory integrity*, and *cross-modal consistency* suggests a maturing focus on system-level robustness. These trends collectively point toward AI that is not only intelligent but *responsible*, *interpretable*, and *adaptable*—a prerequisite for deployment in complex, evolving environments.

---

### **Worth Deep Reading**

1. **[EDA: Observe, Verify, and Assess for Evidence-Grounded Multimodal Depression Analysis](http://arxiv.org/abs/2611.22648v1)**  
   *Why*: It directly addresses the interpretability crisis in mental health AI by anchoring every judgment to traceable, timestamped evidence. This framework could become a gold standard for clinical AI audits.

2. **[SciWorkBench: A Benchmark for Real Scientific Workflows](http://arxiv.org/abs/2611.22490v1)**  
   *Why*: If LLM agents are to replace human researchers, they must replicate real science—not just answer questions. This benchmark tests autonomy, iteration, and error recovery in full workflows, making it foundational for future agent research.

3. **[PACD: Provenance-Aware Consensus Decoding for Mitigating Cross-Modal Hallucinations](http://arxiv.org/abs/2611.22456v1)**  
   *Why*: As multimodal models grow more prevalent, hallucinations across modalities remain a major risk. PACD’s provenance-tracking decoding offers a practical, training-free solution—critical for safe deployment in education, journalism, and legal AI.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*