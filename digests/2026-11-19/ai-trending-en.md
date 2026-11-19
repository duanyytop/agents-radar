# AI Open Source Trends 2026-11-19

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-19 03:48 UTC

---

# **AI Open Source Trends Report – 2026-11-19**

---

## **1. Today's Highlights**

The AI open-source ecosystem is witnessing explosive momentum in **agent-native tooling and infrastructure**, with projects enabling autonomous workflows, skill-based agent execution, and local-first AI experiences gaining massive traction. Notably, *affaan-m/ECC* and *NVIDIA/SkillEvaluator* are leading the charge in optimizing agent performance and evaluating AI skills at scale. Meanwhile, *google-research/paper-orchestra* demonstrates how multi-agent systems can now autonomously write research papers — a milestone in AI-driven scientific output. The rise of **MCP (Model Control Protocol)** servers and agent skill standards signals a maturing ecosystem where interoperability and composability are becoming central design principles.

---

## **2. Top Projects by Category**

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [cursor/plugins](https://github.com/cursor/plugins) | TypeScript | 0 (+314) | Official plugin system for Cursor IDE; enables modular AI capabilities, reflecting growing demand for extensible agent environments. |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | 0 (+365) | A library of standardized Agent Skills built for the Stitch MCP server, promoting cross-platform compatibility across agents like Cursor, Claude Code, and Gemini CLI. |
| [nvidia/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator) | Python | 0 (+312) | Multi-tier framework to evaluate AI agent skills with semantic overlap detection and synthetic dataset generation — critical for quality control in agentic workflows. |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | 0 (+389) | "CLI-Anything" aims to make all software agent-native via a unified CLI hub; a bold move toward universal agent integration. |

> 💡 *Note: Despite low total stars, these projects are trending rapidly due to alignment with emerging agent standards and developer demand for plug-and-play AI tooling.*

---

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 306,639 [topic:llm] | Agent harness for optimizing performance across Claude Code, Opencode, and Cursor — one of the most popular agent optimization tools in the ecosystem. |
| [NouResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 264,532 [topic:llm] | An evolving, self-improving agent that grows with its user — exemplifies the shift toward personal, adaptive AI assistants. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 188,097 [topic:llm] | Pioneering vision of accessible, self-directed AI agents; still a cornerstone of the agentic workflow movement. |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 83,585 [topic:ai-agent] | Open-source job search agent that automates CV tailoring, application tracking, and interview prep — a real-world vertical use case for agents. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Python | 50,192 [topic:ai-agent] | Lightweight personal agent focused on privacy and simplicity — ideal for users seeking minimal, local-first AI companions. |

---

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 144,532 [topic:llm] | AI-powered video generator that turns topics into HD short videos with automated workflows — shows strong market appetite for content creation tools. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 73,390 [topic:ai-agent] | LLM-driven stock analysis system with real-time news, decision dashboards, and zero-cost scheduling — a compelling example of AI in finance. |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 38,500 [topic:ai-agent] | Personal trading agent that learns from user behavior — illustrates the trend toward personalized, adaptive financial agents. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 78,348 [topic:ai-agent] | Turns documents or topics into fully animated PowerPoint decks with data-backed charts and narration — a powerful productivity automation tool. |

---

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 66,521 [topic:llm-model] | Enables training a 64M LLM from scratch in just 2 hours — democratizing small-scale model development for engineers. |
| [OpenSPG/KAG](https://github.com/OpenSPG/KAG) | Python | 9,178 [topic:llm-model] | Logical form-guided reasoning framework using LLMs and OpenSPG engine — improves factual QA accuracy beyond vector similarity. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,777 [topic:llm-model] | Hands-on guide to building a tiny vLLM + Qwen stack on Apple Silicon — ideal for edge inference and learning LLM internals. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,180 [topic:llm-model] | Modular, scalable LLM app framework in Rust — highlights growing interest in high-performance, systems-level AI tooling. |

---

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,406 [topic:rag] | Agent-native database that evolved into full context infrastructure — supports persistent memory, retrieval, and skill orchestration. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 118,277 [topic:rag] | Persistent context across sessions via AI compression — works with multiple agents, a key enabler for long-term agent memory. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 69,214 [topic:rag] | Drop-in memory layer for agents with production-grade persistence — crucial for stateful, evolving AI systems. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 80,116 [topic:rag] | Compresses tool outputs and logs before LLM input — reduces tokens by 20–95% without sacrificing answer quality. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 52,948 [topic:rag] | Document processing platform powering many RAG pipelines — remains a foundational tool in knowledge management. |

---

## **3. Trend Signal Analysis**

Today’s data reveals a **paradigm shift toward agent-native, composable AI systems**. The most explosive growth is in **agent infrastructure and skill frameworks**, particularly those centered around the **MCP (Model Control Protocol)** standard. Projects like `cursor/plugins`, `google-labs-code/stitch-skills`, and `NVIDIA/SkillEvaluator` signal a clear industry move toward modular, evaluable, and interoperable agent components — a direct response to the complexity of building reliable, autonomous AI workflows.

A new tech stack is emerging: **Rust-based agent backends** (`rig`, `trycua/cua`, `codewhale-hq/Codewhale`) combined with **TypeScript frontend agents** (`openclaude`, `CopilotKit`) and **Go-based context engines** (`ragflow`, `headroom`). This suggests a division of labor where performance-critical components are in systems languages, while UX and orchestration remain in web-friendly stacks.

This momentum aligns with recent LLM releases like **Gemini 2.0** and **Claude 3.5**, which emphasize multimodal reasoning and agent capabilities. The surge in agent-focused tools reflects developers’ desire to move beyond prompt engineering into **autonomous, self-managing workflows** — especially in domains like job hunting, finance, and content creation.

---

## **4. Community Hot Spots**

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — The most active agent harness for optimizing performance across major AI coding tools; essential for developers aiming to maximize efficiency.
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** — A full-stack RAG platform evolving into an agent-native context engine; represents the future of persistent, intelligent knowledge systems.
- **[google-research/paper-orchestra](https://github.com/google-research/paper-orchestra)** — Demonstrates AI's ability to autonomously generate peer-reviewed research — a landmark in AI-driven science.
- **[hkuds/cli-anything](https://github.com/HKUDS/CLI-Anything)** — A bold initiative to unify all software under an agent-native CLI; could become the foundation of next-gen developer tooling.
- **[nvidia/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator)** — Critical for ensuring reliability in AI agents; sets a new benchmark for evaluating agent skills and plugins at scale.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*