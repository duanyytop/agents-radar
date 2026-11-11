# AI Open Source Trends 2026-11-11

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-11 02:12 UTC

---

# **AI Open Source Trends Report – 2026-11-11**

---

## **1. Today's Highlights**

The AI open-source ecosystem is witnessing explosive momentum around *agent-native tooling*, particularly in agent workflows, context management, and browser automation. Notably, **anthropics/skills** and **addyosmani/agent-skills** are gaining massive traction as foundational skill libraries for AI coding agents, signaling a shift toward modular, reusable agent capabilities. Meanwhile, **sherlock-project/sherlock**—despite its non-AI core—surged due to viral AI-powered social media reconnaissance use cases, highlighting the growing integration of LLMs into data-gathering pipelines. The rise of **billion-context**, a context-compression plugin enabling month-long sessions with 5x token savings, reflects urgent demand for scalable long-context AI systems. Finally, **homeassistant-ai/ha-mcp** and **career-ops-hq/career-ops** demonstrate the convergence of AI agents into real-world productivity tools, from smart homes to job hunting.

---

## **2. Top Projects by Category**

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [anthropics/claude-quickstarts](https://github.com/anthropics/claude-quickstarts) | Python | 0 (+531) | Official starter projects for building deployable apps with Claude API. Rapid adoption signals developer onboarding momentum post-2026 Claude model launches. |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Rust | 0 (+780) | CLI for AI agent browser automation. Built with performance and security in mind—Rust choice indicates move toward high-efficiency, production-grade agent tooling. |
| [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) | TypeScript | 0 (+375) | Context-compression plugin enabling billion-token session support with 5x fewer tokens. A breakthrough in scalability for long-horizon AI agents. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 186,583 | Local LLM runner supporting Kimi, Qwen, DeepSeek, and more. Key infrastructure for self-hosted AI development; continues to dominate local inference trends. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 300,838 | Agent harness for performance optimization across models like Claude Code and Cursor. “Research-first” development ethos positions it as a leading framework for next-gen agent engineering. |
| [NouesResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 262,473 | Self-evolving agent that grows with user input. Strong community signal via rapid star growth—emerging as a flagship personal agent platform. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 110,925 | Gives AI agents internet-wide vision: reads Twitter, Reddit, YouTube, GitHub, etc., via CLI. Zero API fees make it ideal for cost-sensitive developers. |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 81,765 | Open-source AI job search agent that scans boards, tailors resumes, and tracks applications. Runs locally or as a plugin—high utility for job seekers. |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | Python | 47,873 | Lightweight, multi-model, multi-channel personal assistant with self-evolution. One-line install makes it accessible to non-experts. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 75,663 | Turns topics or documents into native PowerPoint decks with animations, charts, and audio narration. Ideal for creators and presenters using AI. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 69,578 | LLM-driven stock analysis system with real-time news, decision dashboards, and automated alerts. Zero-cost scheduled runs attract quant developers. |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 38,011 | Personal trading agent leveraging LLMs for market sentiment and strategy. Part of a growing trend in AI-driven financial automation. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,583 | Comprehensive LLM evaluation platform covering 100+ datasets and 20+ models. Critical for benchmarking new models post-2026 releases. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,713 | On-device LLM inference system for Apple Silicon. Targets systems engineers—shows rising interest in edge-level model deployment. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 108,206 | Step-by-step guide to implementing ChatGPT-like LLMs in PyTorch. Still one of the most popular learning resources for aspiring AI engineers. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 115,860 | Persistent context engine for agents—compresses session history and injects relevant memory. Works with Claude, Copilot, Gemini, etc. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 93,978 | Agent-native RAG engine evolved into full context infrastructure. Enables dynamic knowledge updates and retrieval at scale. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 68,774 | Drop-in memory layer for AI agents. Designed for production use—supports persistent, structured long-term memory. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 79,321 | Compresses tool outputs, logs, and RAG chunks before LLM ingestion—cuts tokens by 20–95%. High efficiency for coding agents. |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | Python | 41,966 | Self-evolving context database unifying agent memory, RAG, and skills. A novel approach to unified agent cognition. |

---

## **3. Trend Signal Analysis**

Today’s data reveals a clear pivot toward **agent-native, production-ready tooling** rather than standalone models or toy applications. The surge in repositories like **agent-browser**, **billion-context**, and **claude-mem** underscores a growing need for robust, scalable infrastructure that enables long-duration, stateful AI interactions—critical for real-world deployment. This aligns with recent announcements from Anthropic and OpenAI about extended context windows and agent APIs in late 2026.  

A notable emergence is **context compression** as a distinct technical category: **billion-context** and **headroom** represent a new class of middleware designed to optimize token usage without sacrificing performance. This signals a maturing ecosystem where efficiency is no longer an afterthought but a core design principle.  

Additionally, the rise of **multi-agent frameworks** (e.g., CowAgent, Hermes-Agent) and **vertical application agents** (e.g., career-ops, Vibe-Trading) shows developers are moving beyond general-purpose assistants to build domain-specific, autonomous workflows. The dominance of **Rust** and **TypeScript** in top-tier agent tools suggests a preference for performance and web-native integration, respectively.  

Finally, the proliferation of **MCP (Model Control Protocol)**-compatible tools—seen in **ha-mcp**, **openclaude**, and **copilotkit**—indicates standardization efforts are gaining ground, likely driven by the increasing need for interoperability across diverse AI models and platforms.

---

## **4. Community Hot Spots**

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — The most comprehensive agent harness yet; ideal for teams building high-performance, research-driven agents. Its focus on "instincts," "memory," and "security" sets a new benchmark.
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — A must-have for any serious Claude-based agent. Its ability to persist and compress context across sessions addresses a critical pain point in long-running workflows.
- **[billion-context](https://github.com/ranxianglei/billion-context)** — For developers pushing the limits of long-context AI: this plugin enables truly sustained, month-long sessions with minimal overhead—ideal for research and complex reasoning tasks.
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** — Evolving from RAG engine to full context infrastructure, it represents the future of knowledge-aware agents. Perfect for building intelligent, adaptive systems.
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** — A standout example of AI turning ideas into polished, professional content. Highly valuable for educators, marketers, and executives seeking rapid presentation creation.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*