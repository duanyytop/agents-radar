# ArXiv AI Research Digest 2026-11-24

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-24 06:20 UTC

---

# ArXiv AI Research Digest — 2026-11-24

---

## **Today's Highlights**

Recent submissions reveal a strong momentum in *trustworthy, efficient, and domain-adaptive AI systems*. Key advances include novel privacy-preserving fine-tuning methods like AutoClip-DPZO, which optimizes clipping thresholds for differentially private LLM training with practical memory efficiency. There is growing focus on *evaluating and improving agent behavior*—especially in long-term interaction, safety-critical environments (e.g., lunar robotics), and real-world applications such as legal and financial domains via VADE and PseuDRAGON. Meanwhile, foundational work in model interpretability (e.g., Bayesian attention analysis) and robustness (e.g., temporal leakage audits) underscores the community’s push toward verifiable, accountable AI. Notably, several papers address *multi-modal reasoning*, *compositional skill learning*, and *efficient inference* through innovations in neural operators, diffusion policies, and self-speculative decoding.

---

## **Key Papers**

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [**AutoClip-DPZO: Practical Private Clipping Selection for Differentially Private Zeroth-Order LLM Fine-Tuning**](http://arxiv.org/abs/2611.30352v1) | Xinghe Chen et al. | Proposes a practical method for selecting optimal clipping thresholds in DPZO, crucial for balancing privacy and utility. This enables memory-efficient, privacy-preserving LLM fine-tuning without sacrificing performance. |
| [**Learning Teacher Output Preferences from Final Responses for Reasoning Distillation**](http://arxiv.org/abs/2611.30338v1) | Hongli Shen et al. | Introduces a method to distill reasoning preferences directly from final outputs, bypassing the need for visible chain-of-thought traces. Enables more effective and scalable knowledge transfer from teacher models. |
| [**Verifiable On-Policy Distillation**](http://arxiv.org/abs/2611.30325v1) | Juntong Shi et al. | Develops a framework for verifiable reward-based distillation in reinforcement learning, addressing sparsity in supervision by enabling post-hoc verification of policy trajectories. Enhances trust in language-model reasoning. |
| [**PCC: Pivotal Channel Compensation for Layer Pruning of Large Language Models**](http://arxiv.org/abs/2611.30183v1) | Xiangqian Wang et al. | Introduces a compensation mechanism to preserve model accuracy after layer pruning by identifying pivotal channels. Enables high-compression LLMs without significant performance loss. |

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [**RepoClean: Evaluating Coding Agents on Repository-Level Obsolete Code Cleanup**](http://arxiv.org/abs/2611.30350v1) | Hongyixuan Yuan et al. | Presents a benchmark for evaluating LLM agents on real-world code maintenance tasks, emphasizing long-term repository hygiene. Advances the assessment of agent capabilities beyond single-task fixes. |
| [**MMMem: Self-Improving Agents with Task-Aware Multimodal Experience Consolidation**](http://arxiv.org/abs/2611.30287v1) | Yuxuan Chen et al. | Proposes a framework where agents consolidate multimodal user interactions into reusable, context-aware memory. Reduces repetition errors and improves long-term consistency across conversations. |
| [**ReVAgent: Multi-Agent Reasoning-Intensive Video Generation**](http://arxiv.org/abs/2611.30163v1) | Yehui Yang et al. | Introduces a multi-agent system that generates instructional videos by coordinating reasoning and visual execution. Ensures state transitions align with explanations, improving educational fidelity. |
| [**Trustworthy agentic lunar robotics: safety-constrained contingent planning with a foundation-model planner**](http://arxiv.org/abs/2611.30179v1) | Bingqi Huang et al. | Combines foundation models with safety constraints for autonomous lunar operations. Enables adaptive, safe planning in unstructured environments where pre-validation is impossible. |

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [**MH-RAG-DIVE: Dynamic and Cost-Efficient Multi-Hop RAG Evaluation via Tree-Cached Dialogue Simulation**](http://arxiv.org/abs/2611.30335v1) | Lorenz Brehme et al. | Introduces a simulation-based evaluation framework for multi-hop RAG systems using tree-cached dialogues. Offers scalable, cost-effective assessment of complex retrieval chains. |
| [**PackLoop: Row-Packed Self-Speculative Decoding for Looped Language Models under Concurrency**](http://arxiv.org/abs/2611.30205v1) | Runguo Li et al. | Proposes a row-packed speculative decoding scheme for looped models, significantly reducing latency under concurrent requests. Improves throughput in production-scale inference. |
| [**AdaptRouter: Adaptive Routing across Evolving Tasks and Models**](http://arxiv.org/abs/2611.30162v1) | Jingpu Yang et al. | Develops a policy-learning-based router that adapts to dynamic task and model pools. Maintains performance across evolving configurations without retraining. |
| [**Toward a Theoretical Understanding of Transformer Attention: Bayesian Estimation and Predictive Sufficiency**](http://arxiv.org/abs/2611.30349v1) | Fouad B. Chedid | Provides a Bayesian foundation for transformer attention, linking it to posterior estimation and predictive sufficiency. Offers deeper insight into how attention enables accurate next-token prediction. |

### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [**PseuDRAGON: Knowledge-Guided Local LLMs for Financial-Data Pseudonymization in Closed Networks**](http://arxiv.org/abs/2611.30353v1) | Gwangui Hong et al. | Uses local LLMs with knowledge-guided feedback to standardize pseudonymization decisions in closed financial networks. Reduces inconsistency and enhances compliance in sensitive data handling. |
| [**VADE: A Verifiable Agent Data Engine from Professional Sources**](http://arxiv.org/abs/2611.30202v1) | Xiangchao Chen et al. | Builds a high-quality, verifiable dataset for professional domains (law, finance) using expert-sourced content. Enables reliable training of agents where public data is scarce. |
| [**StutterStigma-TR: A Novel Turkish Dataset and Target-Aware BERT Framework for Stuttering-Related Stigma Detection**](http://arxiv.org/abs/2611.30252v1) | Muhsin Dölek et al. | Introduces a large-scale, culturally grounded dataset for detecting stuttering-related stigma in Turkish social media. Advances computational disability research in low-resource languages. |
| [**Ontology-Compiled 2D Clinical State Fields with Bidirectional Diffusion Encoders for Zero-Training Cross-Ontology Medical Coding**](http://arxiv.org/abs/2611.30218v1) | Zeqiang Wang | Enables zero-training medical coding across evolving clinical ontologies using bidirectional diffusion encoders. Eliminates retraining cycles during taxonomy updates. |

---

## **Research Trend Signal**

A clear shift is emerging toward *practical, verifiable, and trustworthy AI deployment*, particularly in high-stakes domains. The proliferation of papers focused on privacy (DPZO), safety (SGPC, RoboAda), auditability (Temporal Leakage Audit, VeriWorld), and real-world evaluation (RepoClean, MH-RAG-DIVE) signals maturity beyond pure performance gains. There is also a rising emphasis on *efficiency and adaptability*: lightweight architectures (PCC, PackLoop), dynamic routing (AdaptRouter), and cross-domain generalization (Laya-IsoToken, Ontology-Compiled). Crucially, researchers are moving beyond isolated metrics—toward holistic frameworks that assess not just accuracy but *consistency, explainability, and long-term reliability*. This reflects a broader industry demand for AI systems that can be audited, maintained, and trusted in live operational settings, especially in healthcare, law, and robotics.

---

## **Worth Deep Reading**

1. **[AutoClip-DPZO](http://arxiv.org/abs/2611.30352v1)** – For practitioners aiming to deploy privacy-preserving LLMs at scale, this paper offers a rare combination of theoretical rigor and practical implementation insights into differential privacy tuning. Its contribution to zeroth-order optimization makes it essential reading for anyone working on secure model adaptation.

2. **[MH-RAG-DIVE](http://arxiv.org/abs/2611.30335v1)** – As RAG systems become central to enterprise AI, this paper introduces a scalable, simulation-driven evaluation method that captures the complexity of real user interactions. It sets a new standard for assessing multi-hop reasoning and will influence future benchmark design.

3. **[PseuDRAGON](http://arxiv.org/abs/2611.30353v1)** – In an era of increasing regulatory scrutiny around data privacy, this work provides a compelling blueprint for deploying local, knowledge-augmented LLMs in closed financial systems. Its approach to consensus-building among agents addresses a critical gap in compliant AI deployment.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*