# AI Open Source Trends 2026-11-10

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-10 04:17 UTC

---

# **AI Open Source Trends Report – 2026-11-10**

---

## **1. Today's Highlights**

The AI open-source ecosystem is witnessing explosive momentum in **agent-native infrastructure**, with projects like *firecrawl*, *thedotmack/claude-mem*, and *mem0ai/mem0* leading a surge in demand for persistent, context-aware agent memory and web data access. Notably, *anthropics/skills* and *anthropics/claude-quickstarts* have seen massive new interest, signaling strong developer engagement with Claude’s agent ecosystem. The rise of lightweight, self-hosted agents—such as *Codewhale*, *nanobot*, and *CowAgent*—indicates a growing preference for privacy-first, local-first AI workflows. Meanwhile, RAG and knowledge management tools continue to mature rapidly, with *ragflow*, *PageIndex*, and *Cognee* emerging as key players in building intelligent, long-term memory systems.

---

## **2. Top Projects by Category**

### 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI)

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 186,467 | A popular local LLM runtime supporting Kimi, GLM, Qwen, Gemma, and more. Its rapid adoption reflects the shift toward self-hosted model deployment. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 200,222 | Powers web data ingestion for AI agents with zero API fees. Its viral growth signals rising demand for scalable, open web data pipelines. |
| [graphify](https://github.com/Graphify-Labs/graphify) | Python | 145,109 | Turns codebases into queryable knowledge graphs using deterministic AST parsing—ideal for agent reasoning and debugging. |
| [caveman](https://github.com/JuliusBrussee/caveman) | Go | 118,694 | A token-optimization tool that reduces LLM input by 65% via “caveman”-style simplification—viral among coding agents. |
| [f/prompts.chat](https://github.com/f/prompts.chat) | MDX | 176,767 | A community-driven prompt hub replacing proprietary collections; enables private, self-hosted prompt sharing at scale. |

### 🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems)

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 187,975 | The foundational agent framework enabling autonomous task execution. Still a top choice for developers building agentic workflows. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 262,129 | A self-evolving agent that grows with user interaction—emerging as a flagship example of personal AI assistants. |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 81,518 | An open-source job search agent that automates CV tailoring, application tracking, and interview prep—highly practical for developers. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 110,669 | Enables agents to browse the entire internet across Twitter, Reddit, GitHub, and YouTube—zero API costs, one CLI. |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | Python | 47,855 | Lightweight, extensible personal agent with multi-model support and self-evolution—ideal for hobbyist and pro developers alike. |

### 📦 AI Applications (specific apps, vertical solutions)

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 69,090 (+506) | A fully automated, zero-cost LLM-powered stock analysis system with real-time news, dashboards, and push alerts—gaining traction in finance communities. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 75,332 | Converts documents or topics into native PowerPoint decks with animations, charts, and narration—revolutionizing AI content creation. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 121,672 | A multi-agent financial trading framework leveraging LLMs for strategy generation—representing the convergence of AI and quantitative finance. |
| [Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 37,979 | “Your Personal Trading Agent”—a lightweight, intuitive system for automated, sentiment-aware trading decisions. |

### 🧠 LLMs / Training (model weights, training frameworks, fine-tuning tools)

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,579 | A comprehensive LLM evaluation platform supporting over 100 models and datasets—critical for benchmarking next-gen AI performance. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,701 | Builds a minimal vLLM + Qwen stack on Apple Silicon—ideal for developers learning LLM inference on edge devices. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 108,122 | Step-by-step implementation of a ChatGPT-like LLM in PyTorch—essential for education and research in foundational LLM design. |
| [EgoAlpha/prompt-in-context-learning](https://github.com/EgoAlpha/prompt-in-context-learning) | Jupyter Notebook | 2,251 | Curated resources for in-context learning and prompt engineering—now a must-have for effective LLM use. |

### 🔍 RAG / Knowledge (vector databases, retrieval-augmented generation, knowledge management)

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 93,921 | An agent-native RAG engine evolving into full context infrastructure—supports document processing, chunking, and retrieval at scale. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 68,720 | A drop-in memory layer for agents with persistent context—key for long-term task execution and personalization. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 115,464 | Captures and compresses agent session history for reuse across future interactions—critical for continuity in Claude-based agents. |
| [Cognee](https://github.com/topoteretes/cognee) | Python | 33,192 | Open-source AI memory platform using small models for free—democratizes long-term memory for agents. |
| [PageIndex](https://github.com/VectifyAI/PageIndex) | Python | 40,323 | A vectorless, reasoning-based RAG system that prioritizes logical inference over embedding similarity—new paradigm in knowledge retrieval. |

---

## **3. Trend Signal Analysis**

Today’s data reveals a **paradigm shift toward agent-centric development**, where the focus has moved from standalone models to **intelligent, persistent, and interconnected agents**. The explosive growth of *firecrawl*, *claude-mem*, and *ragflow* signals a critical need for **persistent context and real-world data access**—not just raw model power. This aligns with recent announcements from Anthropic and OpenAI about agent capabilities, suggesting developers are now building on these foundations rather than waiting for them.

A new **tech stack is emerging**: **local LLMs + agent frameworks + RAG/memory layers + web data pipelines**. Tools like *ollama*, *AutoGPT*, *mem0*, and *firecrawl* form a cohesive, self-hosted agent ecosystem—driven by privacy, cost control, and autonomy. Notably, **token efficiency** is becoming a core metric (*caveman*’s 65% reduction), reflecting pressure to optimize compute in production agents.

The rise of **RAG without vectors** (*PageIndex*) and **self-evolving memory** (*Volcengine/OpenViking*, *Cognee*) indicates a maturing understanding of knowledge management beyond simple embeddings. These trends suggest we’re entering an era of **agentic intelligence**, not just generative AI—where agents learn, remember, reason, and act autonomously.

---

## **4. Community Hot Spots**

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** — The go-to open web data pipeline for AI agents; essential for any project needing live internet access.
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — The de facto standard for agent memory; must-integrate for any persistent, evolving workflow.
- **[thepowerofdata/ragflow](https://github.com/infiniflow/ragflow)** — Evolving into a full-stack context engine—ideal for enterprise-grade RAG applications.
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** — A killer app for content creators and marketers; turns ideas into polished presentations instantly.
- **[zchoi/Awesome-Embodied-Robotics-and-Agent](https://github.com/zchoi/Awesome-Embodied-Robotics-and-Agent)** — A curated list highlighting the convergence of LLMs with physical agents—future-facing and high-impact.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*