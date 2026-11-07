# AI Open Source Trends 2026-11-07

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-07 02:19 UTC

---

# **AI Open Source Trends Report – 2026-11-07**

---

## **1. Today's Highlights**

The AI open-source ecosystem is witnessing a surge in agent-centric innovation, with frameworks and tools enabling autonomous, multi-step workflows gaining massive traction. Notably, **NVIDIA’s Auto Ontology** and **Google’s Agent Skills** have exploded in visibility, signaling a strategic shift toward structured, explainable reasoning layers for LLMs. The rise of **local-first AI agents**—powered by self-hosted models and lightweight infra—underscores growing demand for privacy, control, and cost efficiency. Meanwhile, **RAG and memory systems** are maturing rapidly, with projects like *mem0*, *Cognee*, and *thedotmack/claude-mem* offering persistent context that enables true long-term agent intelligence.

---

## **2. Top Projects by Category**

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) | Python | 0 (+2,015) | A graph-based semantic reasoning framework that enables deterministic query generation and explainable AI in agent workflows. Its rapid growth signals strong industry interest in structured knowledge integration. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 186,153 [topic:llm] | A local LLM runner supporting Kimi, GLM, DeepSeek, Qwen, Gemma, and more. Its ease of deployment makes it a go-to tool for developers building agent backends on-device. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 143,580 [topic:llm] | Turns codebases into queryable knowledge graphs via deterministic AST parsing—no vector store needed. Enables precise, explainable retrieval for agents. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 298,619 [topic:llm] | An agent harness performance system focused on security, memory, and research-first development for platforms like Claude Code and Cursor. Its massive star count reflects developer hunger for robust agent infrastructure. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 261,224 [topic:ai-agent] | A personal AI agent that evolves with users. Its popularity highlights the market demand for customizable, self-improving digital assistants. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 109,705 [topic:ai-agent] | Gives AI agents web-scraping capabilities across Twitter, Reddit, YouTube, GitHub, and more—zero API fees. Represents a major leap in agent autonomy. |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 80,736 [topic:ai-agent] | An end-to-end AI job search agent that scans boards, tailors resumes, prepares interviews, and tracks applications—runs locally or as a plugin. |
| [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) | Rust | 41,158 [topic:ai-agent] | A terminal-native agent written in Rust, supporting any model provider. Fast, extensible, and ideal for DevOps and CLI-heavy workflows. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 74,278 [topic:ai-agent] | Converts documents or topics into native PowerPoint decks with animations, charts, and audio narration. A breakthrough in AI-powered presentation automation. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 67,650 [topic:ai-agent] | An LLM-driven stock analysis system with real-time news, decision dashboards, and zero-cost scheduling. Shows rising interest in vertical AI for finance. |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 37,798 [topic:ai-agent] | “Your Personal Trading Agent” — uses LLMs to analyze markets and execute strategies autonomously. Reflects growing momentum in agentic finance. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,570 [topic:llm-model] | A comprehensive LLM evaluation platform supporting 100+ datasets across knowledge, coding, reasoning, and safety. Critical for benchmarking new models. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,680 [topic:llm-model] | Builds a minimal vLLM + Qwen stack optimized for Apple Silicon. Enables edge inference for systems engineers and hobbyists. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 107,934 [topic:ml] | Step-by-step implementation of a ChatGPT-like LLM in PyTorch. Still one of the most popular educational resources for aspiring LLM builders. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 93,699 [topic:rag] | An agent-native RAG engine that evolved into full context infrastructure. Supports document ingestion, querying, and auto-updating—ideal for production agents. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 79,031 [topic:rag] | Compresses logs, tool outputs, and RAG chunks before sending to LLMs—cuts token usage by up to 95%. A critical optimization for cost-sensitive agents. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 68,531 [topic:rag] | A drop-in memory layer for agents that persists context across sessions. Built for production use with low overhead. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 114,050 [topic:rag] | Provides persistent session context for agents across platforms including Claude Code and Copilot. One of the fastest-growing RAG-related tools today. |

---

## **3. Trend Signal Analysis**

Today’s data reveals a clear pivot toward **agent-native, self-sustaining AI systems**—not just chatbots or single-task tools. The explosive growth of repositories like *affaan-m/ECC*, *thedotmack/claude-mem*, and *mem0ai/mem0* indicates a community-wide focus on **persistent memory, context retention, and workflow orchestration**. These aren’t incremental improvements—they represent foundational shifts in how agents operate, moving from ephemeral interactions to long-term cognitive continuity.

A new tech stack is emerging: **local-first, self-hosted agents powered by lightweight RAG engines and efficient inference tools like Ollama and Tiny-LLM**, all wrapped in agent harnesses like ECC or Graphify. This stack prioritizes privacy, cost control, and autonomy—direct responses to concerns around API costs, data leakage, and vendor lock-in.

Notably, **NVIDIA’s Auto Ontology** and **Google’s Agent Skills** reflect institutional investment in structured reasoning and skill-based agent design. These projects signal that enterprise-grade AI is no longer just about model size but about **semantic clarity, auditability, and composability**—a direct response to recent LLM hallucination scandals and regulatory scrutiny.

Finally, the dominance of **Python and Rust** in top-tier agent and infrastructure projects underscores a trend: high-performance, safe, and modular systems are being built for AI workloads—especially where reliability and speed matter. The rise of **Rust-based agents (Codewhale, Graphify)** suggests a maturing ecosystem where performance and safety are non-negotiable.

---

## **4. Community Hot Spots**

- **[NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology)** – A must-watch for developers building explainable, deterministic AI workflows. Its rapid adoption signals a move beyond black-box LLMs.
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** – The de facto standard for agent performance optimization. Essential for anyone serious about deploying agents at scale.
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** – Emerging as the leading agent-native RAG platform. Ideal for teams building complex, persistent knowledge systems.
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** – Critical for reducing token costs in agent pipelines. A game-changer for sustainable AI workflows.
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** – A prime example of vertical AI application growth. Shows how LLMs are becoming core to financial decision-making.

---  
*Data sources: GitHub Trending (2026-11-07), GitHub Search API (topic:ai-agent, llm, rag, vector-db, llm-model, ml)*

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*