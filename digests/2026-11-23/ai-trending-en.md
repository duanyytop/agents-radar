# AI Open Source Trends 2026-11-23

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-23 03:03 UTC

---

# **AI Open Source Trends Report**  
*Date: 2026-11-23*

---

## **1. Today's Highlights**

The AI open-source ecosystem is witnessing a surge in agent-native tooling and infrastructure, with **Claude-BugHunter**, **FireCrawl**, and **CLI-Anything** leading today’s trending list due to their integration with coding agents and real-time web intelligence. A clear momentum shift toward **agent-centric development** is evident—projects like *affaan-m/ECC*, *firecrawl/firecrawl*, and *mvanhorn/last30days-skill* highlight the growing demand for persistent memory, external data access, and skill orchestration. Notably, **jingyaogong/minimind** has gone viral by enabling users to train a 64M LLM from scratch in just two hours, signaling rising interest in accessible model training. Meanwhile, vector database platforms such as *qdrant/qdrant*, *milvus-io/milvus*, and *vectifyai/pageindex* continue to dominate the RAG landscape, underscoring the foundational role of knowledge infrastructure in next-gen AI systems.

---

## **2. Top Projects by Category**

### 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI)

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 207,118 (+915) | A unified API to search, scrape, and access 550+ data providers—critical for building intelligent agents with real-world context. Rapid adoption signals demand for scalable knowledge ingestion. |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 0 (+1,716) | A comprehensive skill bundle for red-teaming and vulnerability hunting via Claude Code—82 skills, 15 slash commands, and 681 disclosure patterns. Represents a new wave of agent-powered security tooling. |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | 0 (+699) | "Making ALL Software Agent-Native"—a CLI hub that enables any tool to be controlled by AI agents. Positioned at the intersection of developer workflow and agentic automation. |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | 0 (+494) | Standardized agent skills for the Stitch MCP server, promoting interoperability across agents like Antigravity, Gemini CLI, and Claude Code. Signals growing standardization in agent ecosystems. |

### 🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems)

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 309,075 (+?) | The agent harness for performance optimization—skills, instincts, memory, and research-first design. Now a central reference point for Claude Code and other agent environments. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | 0 (+668) | An AI agent skill that researches topics across Reddit, X, YouTube, HN, Polymarket, and the web—then synthesizes grounded summaries. Shows rise in real-time, cross-platform agent intelligence. |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 84,239 (+?) | Open-source AI job search agent that scores jobs, tailors resumes, and prepares applicants—all locally, compatible with Copilot, Codex, and OpenCode. A prime example of vertical agent applications. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Python | 50,275 (+?) | A lightweight personal AI agent that plans tasks, runs tools, and self-evolves. Designed for simplicity and extensibility—ideal for developers seeking minimal yet powerful agent scaffolding. |

### 📦 AI Applications (specific apps, vertical solutions)

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | 0 (+641) | Open-source AI video clipping tool that auto-generates short videos from long-form content (podcasts, lectures), including subtitles, thumbnails, and social copy. High traction in content creation workflows. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 145,106 (+?) | Generates high-quality HD short videos from keywords via automated AI workflows. Popular among creators and marketers looking to scale content production. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 79,325 (+?) | Turns documents or topics into native PowerPoint decks with animations, charts, audio narration, and template support. Demonstrates AI-driven productivity automation in presentation design. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 73,728 (+?) | LLM-powered multi-market stock analysis system with real-time news, decision dashboards, and zero-cost scheduled execution. Reflects growing use of AI in financial monitoring. |

### 🧠 LLMs / Training (model weights, training frameworks, fine-tuning tools)

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 68,788 (+473) | Enables training a 64M LLM from scratch in just two hours—democratizing model creation. Viral attention reflects strong community interest in low-barrier, local training. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,228 (+?) | Modular, scalable LLM application framework in Rust—targeting performance and control. Emerging as a niche but promising stack for high-efficiency AI systems. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,803 (+?) | A guide to building a tiny vLLM + Qwen on Apple Silicon—ideal for systems engineers exploring edge inference and local deployment. |

### 🔍 RAG / Knowledge (vector databases, retrieval-augmented generation, knowledge management)

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 35,666 (+?) | High-performance, cloud-native vector database with massive-scale search capabilities. Now a de facto standard for RAG pipelines. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,720 (+?) | Scalable vector ANN search engine built for enterprise-grade AI agents. Widely adopted in knowledge-intensive applications. |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Python | 40,748 (+?) | PageIndex offers reasoning-based RAG without vectors—promising privacy, speed, and accuracy improvements. A novel alternative to traditional vector DBs. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,551 (+?) | Evolved into an agent-native database: a full RAG engine with context infrastructure. Highly relevant for production-ready AI systems. |

---

## **3. Trend Signal Analysis**

Today’s data reveals a **paradigm shift toward agent-native development**, where AI tools are no longer standalone utilities but integrated components within intelligent workflows. The explosive growth of projects like *affaan-m/ECC*, *firecrawl/firecrawl*, and *elementalsouls/Claude-BugHunter* signals a maturing ecosystem focused on **agent autonomy, persistence, and external intelligence access**. These tools are not just adding features—they’re redefining how developers interact with AI, shifting from prompt engineering to **skill orchestration and memory management**.

A notable emergence is the rise of **standardized agent skill libraries** (e.g., Google’s Stitch Skills, FireCrawl’s knowledge API), indicating early industry consensus on interoperability—similar to how npm packages standardized JavaScript modules. This trend aligns with recent LLM releases (e.g., Claude 3.5, Gemini 2.0) that emphasize reasoning and tool use, pushing developers to build more capable, reliable agents.

Additionally, **local model training** is gaining mainstream traction, exemplified by *minimind*’s viral success. This reflects a broader movement toward **privacy, cost control, and customization**, especially as large models become increasingly expensive and opaque. The convergence of lightweight training, efficient vector databases (like qdrant), and agent frameworks suggests a future where **personalized, self-hosted AI agents** are not just possible—but practical.

---

## **4. Community Hot Spots**

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** – The go-to API for real-time, agent-enriched data access. Essential for building smart, up-to-date agents.
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** – The emerging “Swiss Army knife” of agent performance optimization—worth studying for anyone building or deploying AI agents.
- **[qingyaogong/minimind](https://github.com/jingyaogong/minimind)** – A breakthrough in democratizing LLM training; ideal for developers wanting hands-on experience with model creation.
- **[qdrant/qdrant](https://github.com/qdrant/qdrant)** & **[milvus-io/milvus](https://github.com/milvus-io/milvus)** – The backbone of modern RAG systems. Critical for any project requiring scalable knowledge retrieval.
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** – A novel approach to knowledge graphs using AST parsing instead of vectors—promises faster, deterministic, and explainable AI reasoning.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*