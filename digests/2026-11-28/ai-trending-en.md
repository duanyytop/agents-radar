# AI Open Source Trends 2026-11-28

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-28 04:11 UTC

---

# **AI Open Source Trends Report – 2026-11-28**

---

## **1. Today's Highlights**

The AI open-source ecosystem is witnessing a surge in agent-centric innovation, with projects focused on autonomous workflows, persistent memory, and real-time knowledge access leading the trend. Notably, *firecrawl/firecrawl* and *elementalsouls/Claude-BugHunter* are capturing massive attention for enabling agents to dynamically access and act on external data, signaling a shift toward more intelligent, context-aware systems. The explosive growth of *jingyaogong/minimind*—training a 64M LLM from scratch in two hours—reflects strong community interest in lightweight, accessible model training. Meanwhile, frameworks like *affaan-m/ECC* and *zilliztech/claude-context* are redefining agent performance through optimization, memory, and codebase-awareness, indicating a maturing focus on production-grade agentic infrastructure.

---

## **2. Top Projects by Category**

### 🔧 **AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI)**

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 211,766 (+822) | A unified API to search, scrape, and access 550+ data providers—empowering agents with real-time knowledge without API fees or vendor lock-in. Its rapid adoption signals demand for open knowledge infrastructure. |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | 666 (+666) | "Making ALL Software Agent-Native" — a CLI hub that turns any tool into an agent-compatible interface, enabling seamless integration across workflows. A key enabler for agent-native ecosystems. |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | C++ | 151 (+151) | OpenVINO™ continues to be a go-to toolkit for optimizing and deploying AI inference across edge devices and cloud environments, especially with growing support for LLMs. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 311,943 (+?) | The agent harness performance optimization system for Claude Code, Codex, Opencode, and Cursor. It unifies skills, instincts, memory, and security—setting a new standard for agent engineering maturity. |

### 🤖 **AI Agents / Workflows (agent frameworks, automation, multi-agent systems)**

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 115,408 (+?) | Enables AI agents to read and search Twitter, Reddit, YouTube, GitHub, Bilibili, and XiaoHongShu via a single CLI—zero API costs. A breakthrough in open, decentralized agent intelligence. |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 85,242 (+?) | An open-source AI job search agent that scores jobs, tailors resumes, generates cover letters, and tracks applications—runs locally with full privacy. A prime example of vertical agentization. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 80,816 (+?) | Turns documents into native PowerPoint decks with animations, charts, audio narration, and template support—demonstrating how agents can automate high-fidelity content creation. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 75,038 (+?) | LLM-driven multi-market stock analysis with real-time news, decision dashboards, and automated alerts—showing agent viability in financial domains. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Python | 50,405 (+?) | A lightweight, extensible personal agent for task planning, tool execution, and self-evolution—ideal for local-first, privacy-preserving workflows. |

### 📦 **AI Applications (specific apps, vertical solutions)**

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | 718 (+718) | Open-source OpusClip alternative: auto-generates short videos from long-form content (podcasts, courses), including subtitles, covers, and social posts—perfect for creators using AI video editing. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 146,028 (+?) | Generates HD short videos from keywords or themes using AI workflows—highly relevant for content creators and marketers leveraging AI automation at scale. |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 0 (+1,608) | A skill bundle for Claude Code focused on bug hunting and red-teaming, with 85 skills, 16 slash commands, and 681 disclosure patterns across 24 vulnerability classes—critical for secure AI-assisted development. |

### 🧠 **LLMs / Training (model weights, training frameworks, fine-tuning tools)**

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 72,270 (+660) | Train your own 64M LLM from scratch in just 2 hours—democratizing small-model training and making it accessible for developers, researchers, and hobbyists. A major milestone in low-barrier LLM creation. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 109,164 (+?) | Step-by-step implementation of a ChatGPT-like LLM in PyTorch—ideal for learning and teaching core LLM mechanics. Still a foundational resource for ML education. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,293 (+?) | Modular, scalable LLM application framework in Rust—targeting high-performance, safe, and efficient agent systems, reflecting rising interest in systems-level AI development. |

### 🔍 **RAG / Knowledge (vector databases, retrieval-augmented generation, knowledge management)**

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 154,312 (+?) | Turns codebases, docs, configs, and PDFs into queryable knowledge graphs—no vector store required. Uses deterministic AST parsing and explains every edge—ideal for secure, reproducible RAG. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,840 (+?) | RAGFlow evolved into agent-native context infrastructure—supports complex workflows, document ingestion, and dynamic knowledge updates. A mature, production-ready RAG engine. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 81,015 (+?) | Compresses tool outputs, logs, and RAG chunks before they reach the LLM—cuts tokens by 20% for coding agents and up to 95% for JSON—critical for cost and latency optimization. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 69,563 (+?) | Drop-in memory layer for AI agents with persistent context. Built for production use—key for stateful, evolving agents. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 120,241 (+?) | Persistent context across sessions for Claude Code and other agents—compresses session history with AI and injects only relevant context—enhancing agent continuity. |

---

## **3. Trend Signal Analysis**

Today’s data reveals a clear pivot toward **agent-native, knowledge-aware systems**—not just standalone models. Projects like *firecrawl/firecrawl*, *Panniantong/Agent-Reach*, and *Graphify-Labs/graphify* indicate a growing demand for **real-time, external knowledge access** and **structured, explainable knowledge graphs**, moving beyond simple vector embeddings. This reflects a maturation in agent design: agents are no longer passive responders but proactive, research-capable entities.

A new tech stack is emerging: **local-first, agent-harness frameworks** (*affaan-m/ECC*, *headroom*, *mem0*) paired with **open knowledge APIs** (*firecrawl*, *crawler4ai*) and **agent-native databases** (*ragflow*, *Graphify*). These components form a cohesive pipeline for building reliable, private, and performant AI agents—mirroring trends seen in recent LLM releases like Claude 3.5 and Gemini 1.5 Pro, which emphasize long-context understanding and multimodal reasoning.

Additionally, the explosion of *minimind* and *LLMs-from-scratch* shows sustained community hunger for **accessible, hands-on LLM training**, even as large models dominate headlines. This suggests a dual-track evolution: while giants push model capabilities, the open-source community is deeply invested in **democratizing control, customization, and transparency**—a theme reinforced by the rise of *local-first* tools like *autoclip* and *OpenVINO*.

---

## **4. Community Hot Spots**

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** – The de facto open knowledge infrastructure API; essential for any agent aiming to access live web data without cost or complexity.
- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** – Critical for secure AI development; a must-have skill bundle for teams using Claude Code in red-team or DevSecOps workflows.
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** – A paradigm shift in RAG: deterministic, explainable, and vectorless. Ideal for auditability and compliance-heavy environments.
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** – Empowers developers to train their own LLMs quickly—perfect for experimentation, education, and niche domain specialization.
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** – The emerging gold standard for agent performance optimization—skills, memory, security, and research-first design. A foundational tool for serious agent builders.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*