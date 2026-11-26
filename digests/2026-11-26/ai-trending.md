# AI 开源趋势日报 2026-11-26

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-26 04:19 UTC

---

# **AI Open Source Trends Report – 2026-11-26**

---

## **1. Today's Highlights**

The AI open-source ecosystem is witnessing a surge in agent-centric tooling and infrastructure, with *Claude-BugHunter*, *FireCrawl*, and *CLI-Anything* leading explosive growth—each gaining over 1,000 new stars today. A clear trend emerges: developers are building highly specialized, agentic workflows that integrate real-time data access (via FireCrawl), codebase-aware context (via zilliztech/claude-context), and skill-based automation (via superpowers and stitch-skills). The rise of lightweight, local-first LLMs like *minimind* and *TinyLLM* signals growing demand for accessible, self-hosted model training and deployment. Meanwhile, RAG and knowledge infrastructure remain dominant, with *OpenWebUI*, *RAGFlow*, and *LangChain* maintaining massive community engagement.

---

## **2. Top Projects by Category**

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 210,196 (+1,135) | A unified API to search, scrape, and access 550+ data sources—turning the web into an agent-native knowledge layer. Rapid adoption signals rising demand for scalable, low-friction data pipelines. |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | 14,782 (+1,106) | "Making ALL Software Agent-Native" — a CLI hub enabling any tool to become an AI agent interface. Emerging as a foundational layer for agent-driven development workflows. |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | TypeScript | 12,729 (+243) | Code search MCP for Claude Code, making entire codebases available as context. Critical for improving coding agent accuracy and reducing hallucination. |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | C++ | 12,533 (+191) | OpenVINO™ toolkit for optimizing and deploying AI inference across diverse hardware. Key enabler for edge and on-device AI performance. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 1,852 (+1,652) | A curated skill bundle for bug hunting and red-teaming with 85 skills and 681 disclosure patterns. Represents a new wave of specialized, security-focused agent capabilities. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 2,783 (+903) | An agentic skills framework and software development methodology. Enables modular, reusable agent behaviors—emerging as a meta-framework for AI workflow design. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | 2,148 (+945) | Researches topics across Reddit, X, YouTube, HN, and Polymarket, then synthesizes grounded summaries. Demonstrates rising interest in real-time, multi-source agent intelligence. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 114,774 (+452) | Gives AI agents "eyes" to browse Twitter, GitHub, Bilibili, XiaoHongShu—zero API fees. A major step toward autonomous, internet-scale agent reasoning. |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 84,901 (+1,213) | Open-source job search agent that scores jobs, tailors resumes, and manages applications—runs locally in Copilot, Codex, or as a plugin. Real-world agent utility at scale. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | 12,853 (+880) | AI video clipper that auto-generates TikTok/Reels content from long-form videos—including subtitles, covers, and social-ready copy. A prime example of AI-powered content repurposing. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 80,257 (+1,032) | Turns documents into native PowerPoint decks with animations, charts, audio narration, and template support. Democratizing professional presentation creation via LLMs. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 74,599 (+924) | LLM-driven stock analysis system with real-time news, decision dashboards, and automated alerts—zero-cost scheduling. Shows strong momentum in vertical AI finance tools. |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 38,941 (+312) | Personal trading agent that learns market sentiment and executes trades based on user preferences. Reflects growing interest in personalized, agentic financial assistants. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 71,125 (+826) | Train your own 64M LLM from scratch in just 2 hours. Low-barrier entry point for developers wanting full control over model training and fine-tuning. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,813 (+314) | Learn LLM inference on Apple Silicon by building a tiny vLLM + Qwen stack. Targets systems engineers and edge ML developers. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,268 (+213) | Modular, scalable LLM apps in Rust—ideal for high-performance, secure, and embedded AI systems. Signals rising interest in systems-level AI tooling. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 150,007 (+2,154) | The de facto agent engineering platform—now evolving into a full-stack RAG orchestration engine. Still the backbone of most agentic workflows. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,730 (+1,872) | Agent-native database that evolved into context infrastructure. Supports complex, persistent knowledge graphs without vector stores. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 153,450 (+1,920) | Turns codebases and docs into queryable knowledge graphs using AST parsing—no vector store needed. High-fidelity, deterministic retrieval. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 119,809 (+1,223) | Persistent context across sessions—compresses agent activity and injects relevant memory back. Critical for long-term agent coherence. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 69,484 (+987) | Drop-in memory layer for agents—built for production use. Enables stateful, evolving agent behavior with minimal overhead. |

---

## **3. Trend Signal Analysis**

Today’s data reveals a decisive shift toward **agent-native infrastructure** and **specialized, real-time knowledge access**. The explosive growth of *Claude-BugHunter*, *FireCrawl*, and *CLI-Anything* signals a maturing ecosystem where developers are no longer just building models—they’re building **agents that act**, with precise, domain-specific skills. This reflects a broader industry move toward **agentic workflows** post-GPT-4o and the rise of multimodal agents in enterprise settings.

A new tech stack is emerging: **skills + context + memory + external data access**. Frameworks like *Stitch Skills* and *Superpowers* standardize how agents interact with tools, while platforms like *FireCrawl* and *Graphify* solve the critical bottleneck of **knowledge grounding**. These are not just APIs—they're **agent operating systems**.

Notably, the dominance of RAG and memory layers (e.g., *Mem0*, *Claude-Mem*) underscores the ongoing challenge of **context length and state management**. As agents take on more complex tasks, persistent, compressed, and meaningful memory becomes non-negotiable.

Finally, the rise of *minimind* and *tiny-llm* highlights a grassroots movement toward **local, reproducible, and auditable AI**—a direct response to concerns around vendor lock-in, privacy, and model opacity. This aligns with recent EU AI Act enforcement and growing demand for transparent, self-hosted LLMs.

---

## **4. Community Hot Spots**

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** – The go-to knowledge infrastructure for agents. Its 550+ data provider integration makes it the central nervous system for real-time agent intelligence.
- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** – A must-have skill pack for red-teamers and security researchers. Its 85 skills and 681 disclosure patterns set a new standard for agent-specific tooling.
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** – Offers deterministic, AST-based knowledge graphs without relying on vector databases. Ideal for safety-critical and audit-ready AI systems.
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** – Makes LLM training accessible to hobbyists and educators. A powerful catalyst for democratizing model ownership.
- **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** – One of the first truly open, zero-cost agents with full internet reach. A blueprint for the next generation of autonomous AI assistants.

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*