# AI Open Source Trends 2026-11-20

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-20 03:41 UTC

---

# **AI Open Source Trends Report – 2026-11-20**

---

## **1. Today's Highlights**

The AI open-source ecosystem is witnessing a surge in agent-centric tooling and infrastructure, with *Claude-BugHunter* and *firecrawl/firecrawl* leading explosive growth (+1,349 and +825 stars today). A clear trend emerges toward **agent-native development**, where tools are designed to work seamlessly across platforms like Claude Code, Cursor, and Gemini CLI via standardized skills and MCP (Multi-Agent Communication Protocol) frameworks. Notably, *minimind*’s ability to train a 64M LLM from scratch in two hours has ignited interest in accessible model building, while *affaan-m/ECC* and *caveman* signal rising demand for lightweight, efficient agent harnesses that optimize token usage and memory. This momentum reflects a maturing ecosystem focused on deployable, production-grade agentic systems.

---

## **2. Top Projects by Category**

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 0 (+1,349) | A comprehensive skill bundle for red-teaming and vulnerability hunting within Claude Code, featuring 82 skills and attack matrices across 24 vulnerability classes—ideal for enterprise security workflows. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 0 (+825) | Unified knowledge infrastructure enabling AI agents to search, scrape, and access 550+ data providers through a single API—critical for building smarter, up-to-date agents. |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | 0 (+898) | "Making ALL Software Agent-Native" — a CLI hub aiming to standardize interaction between agents and command-line tools, enhancing interoperability across workflows. |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | 0 (+302) | A library of open-standard agent skills compatible with Stitch MCP server, promoting cross-platform compatibility among coding agents like Antigravity, Gemini CLI, and Claude Code. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0 (+2,028) | An agentic skills framework and software development methodology that enables autonomous task execution—emerging as a foundational stack for next-gen developer workflows. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | 0 (+954) | AI agent skill that synthesizes grounded summaries from Reddit, X, YouTube, HN, and web sources—ideal for real-time research and decision-making. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 307,348 | The agent harness performance optimization system, now the most starred AI project in the topic search, focusing on memory, security, and efficiency for Claude Code and Copilot-style agents. |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Go | 121,597 | A minimalist proxy for coding agents that reduces token count by 20–50% without sacrificing output quality—key for cost-effective, high-throughput agent execution. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | 0 (+126) | Open-source AI video clipping tool that auto-generates short-form content (TikTok, Reels, Shorts) from long videos—ideal for creators seeking scalable content repurposing. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 144,732 | Generates HD short videos from keywords using automated AI workflows—demonstrating growing interest in AI-driven content creation pipelines. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 73,498 | LLM-powered stock analysis system with real-time news, decision dashboards, and zero-cost scheduled runs—showcasing vertical AI adoption in finance. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 67,037 | Train your own 64M LLM from scratch in just two hours—democratizing small-model training for developers and hobbyists alike. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,191 | Modular, scalable LLM application framework in Rust—highlighting a shift toward performant, low-level language choices for agent backends. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,792 | Learn LLM inference on Apple Silicon by building a tiny vLLM + Qwen stack—targeting edge deployment and hardware-specific optimization. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 150,706 | Turns codebases, docs, and configs into queryable knowledge graphs with deterministic AST parsing—no vector store needed. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,453 | Agent-native RAG engine evolved into context infrastructure—supports persistent, structured memory for agents. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 118,479 | Persistent session memory for AI agents: compresses context across sessions and injects relevant history—critical for long-term agent coherence. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 69,259 | Drop-in memory layer for AI agents with production-ready persistence—built for scalability and reliability. |

---

## **3. Trend Signal Analysis**

Today’s data reveals a dominant shift toward **agent-native infrastructure** and **knowledge-aware workflows**, signaling maturity beyond simple prompt engineering. The explosive growth of projects like *affaan-m/ECC*, *caveman*, and *firecrawl/firecrawl* indicates rising community focus on **efficiency, security, and context management**—not just capability. These tools aim to reduce token waste, prevent hallucinations, and maintain continuity across sessions, directly addressing key pain points in deploying AI agents at scale.

A notable new direction is the emergence of **open standards for agent skills** (e.g., Stitch MCP, Agent Skills open standard), enabling interoperability across platforms like Claude Code, Cursor, and Gemini CLI. This suggests a move away from vendor lock-in and toward a modular, composable agent ecosystem.

This momentum aligns with recent LLM releases (e.g., GPT-4o, Gemini 1.5 Pro, Qwen3) emphasizing multimodal reasoning and long-context understanding. Developers are now prioritizing not just model access, but **how agents interact with real-world data and state**—making RAG, memory, and retrieval systems central to innovation. The rise of lightweight, self-hosted solutions (e.g., *minimind*, *autoclip*) also reflects a broader push toward **privacy, control, and cost efficiency** in AI development.

---

## **4. Community Hot Spots**

- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)**: A must-have for security researchers and red-teamers using Claude Code—its 82 curated skills and 24 vulnerability classes offer a ready-made toolkit for adversarial testing.
- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)**: The go-to knowledge layer for AI agents—its 550+ integrated data providers make it ideal for building intelligent, up-to-date agents without custom scraping logic.
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)**: The fastest-growing AI project in the ecosystem; essential for anyone building or optimizing agent workflows for performance and safety.
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)**: Offers a unique alternative to vector-based RAG—using logical knowledge graphs for precise, explainable retrieval, especially valuable for technical domains.
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)**: A game-changer for learning and experimentation—training a 64M LLM in under two hours makes model-building accessible to all developers.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*