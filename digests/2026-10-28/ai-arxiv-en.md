# ArXiv AI Research Digest 2026-10-28

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-10-28 01:38 UTC

---

---

### **Today's Highlights**  
Recent AI research on ArXiv (2026-10-27) reflects a strong momentum in *agent-centric intelligence*, with breakthroughs in scalable, self-improving systems that operate without external memory or fixed tools. Notably, **DCKV** introduces differentiable transform coding for prompt KV caches—enabling efficient reuse of context in hybrid language models—while **Evolving Agent Teams** and **When the Critic Falls Behind** demonstrate how agent teams can co-evolve policies and evaluation rubrics for continual improvement. In multimodal reasoning, **Vision-Language Agents Can Learn in Their Own Latent Worlds** shows VLMs leveraging internal knowledge to refine behavior through interaction. Meanwhile, **RubricAtlas** and **SetGRPO** advance structured evaluation and reward calibration for deep research agents, signaling a shift toward rigorous, audit-ready AI systems.

---

### **Key Papers**

#### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [DCKV: Learned Transform Coding of the Prompt KV Cache in Hybrid Language Models](http://arxiv.org/abs/2610.36950v1) | Maximov et al. | Introduces DCKV, the first differentiable codec for key-value cache in hybrid LMs, enabling compact, reusable state representation across prompts—reducing storage overhead and accelerating inference. |
| [Self-Keyed In-Parameter Memorization for External Memory-Free Dialogue Recall in Frozen Language Models](http://arxiv.org/abs/2610.36948v1) | Piao et al. | Proposes a method for frozen LMs to retain dialogue history via internal parameter tuning without external memory—enabling robust recall in constrained environments. |
| [Can LLMs Reliably Grade Olympiad Proofs? A Study of Mathematical Verification with LLMs](http://arxiv.org/abs/2610.36767v1) | Ospanov et al. | Evaluates LLMs’ ability to verify high-level mathematical proofs, revealing significant challenges in consistency and precision—highlighting critical gaps in automated theorem verification. |
| [An Algebra of Transformers](http://arxiv.org/abs/2610.36795v1) | Wang et al. | Presents a formal algebraic framework for transformers, analyzing their computational expressiveness and limitations under bounded precision—offering new theoretical insights into model capabilities. |

#### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Evolving Agent Teams](http://arxiv.org/abs/2610.36848v1) | Cao et al. | Introduces Evolving Agent Teams that dynamically reconfigure roles and strategies to escape local optima in complex code optimization tasks—demonstrating superior performance over static agents. |
| [Vision-Language Agents Can Learn in Their Own Latent Worlds](http://arxiv.org/abs/2610.36925v1) | Li et al. | Shows that vision-language agents can improve policy by learning from experience within their own latent representations—bypassing reliance on external reward signals. |
| [When All Rollouts Fail: Policy-Compatible Joint Decoding for Hard-Problem Reasoning](http://arxiv.org/abs/2610.36849v1) | Wang et al. | Proposes joint decoding under policy compatibility to overcome RLVR’s “learning cliff” when no rollouts succeed—enabling reasoning on previously intractable problems. |
| [Remembering Is Not Enough: Refining Memories and Learning When to Use Them in Multi-Agent Systems](http://arxiv.org/abs/2610.36652v1) | Hao et al. | Introduces DiscernMem, a training-free framework that evaluates memory relevance and correctness—addressing flawed or misapplied knowledge in team-based agents. |

#### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [AdaGround: Token-Normalized Adaptive Zooming with Verifier-in-the-Loop Refinement for GUI Grounding](http://arxiv.org/abs/2610.36874v1) | Wang et al. | Presents AdaGround, a feedback-driven zooming mechanism that adapts to target size and revisits incorrect predictions—improving accuracy on small GUI elements. |
| [Select-TTT: Query-Conditioned Selective Fast Weight Updates for In-Place Test-Time Training](http://arxiv.org/abs/2610.36794v1) | Wu et al. | Enables efficient in-place test-time training by selectively updating fast weights based on query relevance—reducing computation and memory cost. |
| [Look Only When Needed: Certificate-Guided Visual Routing for Efficient Diffusion VLMs](http://arxiv.org/abs/2610.36671v1) | Cho et al. | Introduces certificate-guided routing to skip redundant visual token processing in diffusion models—cutting compute by up to 50% without accuracy loss. |
| [Balanced State Subspaces for Mamba-2 State Compression](http://arxiv.org/abs/2610.36617v1) | Tingyu & Cao | Proposes energy-balanced compression of Mamba-2 recurrent states—achieving higher fidelity than coordinate-wise pruning while reducing bandwidth. |

#### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Developing a Speech Language Model for Basque](http://arxiv.org/abs/2610.36911v1) | Sudupe et al. | Presents the first open-source speech language model for Basque—a low-latency, end-to-end system built on LLaMA-Omni—supporting minority language digital inclusion. |
| [Noise Steering: Exploiting Wake Steering and Acoustic Directivity for Noise-Constrained Wind Farm Control via Reinforcement Learning](http://arxiv.org/abs/2610.36888v1) | de Frutos et al. | Uses RL to optimize turbine yaw for noise reduction while preserving wake benefits—balancing acoustic constraints and energy yield in wind farms. |
| [TAPESTRY: A Single Backbone for Video Generation and Robot Control](http://arxiv.org/abs/2610.36823v1) | Collins et al. | Unifies video generation and robot control via a shared backbone—leveraging pretrained priors for physical interactions without retraining action heads. |
| [Beyond QASecClaw: Agent Scaling, Verifier Feedback, and Evidence Reliability in Software Assurance](http://arxiv.org/abs/2610.36947v1) | Al Mamun et al. | Demonstrates that adding specialist agents and verifier feedback improves software assurance even with deterministic evidence—advancing reliability in code analysis. |

---

### **Research Trend Signal**  
A clear trend toward *autonomous, self-repairing agent ecosystems* is emerging across today’s submissions. Researchers are moving beyond static models to dynamic systems where agents evolve policies, memories, and evaluation frameworks in tandem—evidenced by works like *Evolving Agent Teams*, *When the Critic Falls Behind*, and *DiscernMem*. These papers emphasize **continual self-improvement**, **robust memory management**, and **adaptive evaluation**—critical for real-world deployment. Concurrently, there’s growing focus on **efficiency at scale**: methods like DCKV, Select-TTT, and Look Only When Needed aim to reduce memory, computation, and latency in LMs and agents. Additionally, domain-specific applications are maturing—particularly in healthcare (spine detection), robotics (wind farm control), and minority language support—showing AI’s expanding role in specialized, high-stakes environments. The rise of structured evaluation (e.g., RubricAtlas, SetGRPO) also signals a push toward accountability and auditability in agentic systems.

---

### **Worth Deep Reading**

1. **[Evolving Agent Teams](http://arxiv.org/abs/2610.36848v1)** – This paper tackles a core limitation of current coding agents: premature convergence. Its framework for dynamic role assignment and team evolution offers a blueprint for building resilient, adaptive AI systems capable of tackling complex, real-world problems—especially valuable for long-horizon tasks like software engineering.

2. **[DCKV: Learned Transform Coding of the Prompt KV Cache in Hybrid Language Models](http://arxiv.org/abs/2610.36950v1)** – As inference costs rise, efficient caching is crucial. DCKV’s differentiable, learnable compression of KV cache represents a foundational advancement in scalable LMs—potentially enabling real-time, low-latency deployments of large models in production settings.

3. **[Vision-Language Agents Can Learn in Their Own Latent Worlds](http://arxiv.org/abs/2610.36925v1)** – This work redefines how agents learn: not just from data, but from *internalized experience*. It opens doors to truly autonomous, lifelong learning systems that don’t rely on human-curated rewards—representing a paradigm shift in agent intelligence.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*