# AI Open Source Trends 2026-11-13

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-13 02:52 UTC

---

# **AI Open Source Trends Report – 2026-11-13**

---

## **Step 1: Filtered AI-Relevant Projects**

From the GitHub trending list and topic search, we filtered out non-AI projects (e.g., general tools like `nvm`, `nodejs`, `netdata`, `tesseract`, `siyuan`) and focused exclusively on repositories with clear AI/ML relevance. This includes agent frameworks, LLM inference engines, RAG systems, coding agents, model evaluation platforms, vector databases, and AI application toolkits.

---

## **Step 2: Categorization**

Projects were assigned to primary categories based on their core function:

- **🔧 AI Infrastructure**: SDKs, CLI tools, inference engines, developer tooling  
- **🤖 AI Agents / Workflows**: Agent frameworks, multi-agent systems, automation pipelines  
- **📦 AI Applications**: Vertical-use AI apps (e.g., finance, video generation, job search)  
- **🧠 LLMs / Training**: Model weights, training frameworks, fine-tuning tools  
- **🔍 RAG / Knowledge**: Retrieval-augmented generation, knowledge graphs, vector databases  

---

## **Step 3: Output Report**

### **1. Today's Highlights**

The open-source AI ecosystem is witnessing explosive momentum in **agent-native tooling and local-first intelligence**, driven by demand for autonomous, secure, and customizable AI workflows. Notably, *OpenAI’s Codex Security* CLI and TypeScript SDK have surged in popularity, signaling a growing focus on **AI agent safety and compliance**. Meanwhile, *Meta’s Astryx* and *Qwen Code* are gaining traction as unified, agent-ready design and development environments. The rise of **multi-harness, multi-model agents**—like *free-claude-code* and *ECC*—reflects a shift toward flexible, open ecosystems that bypass vendor lock-in. Together, these developments point to a maturing stack where developers prioritize control, privacy, and performance over convenience.

---

### **2. Top Projects by Category**

#### **🔧 AI Infrastructure**

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [openai/codex-security](https://github.com/openai/codex-security) | TypeScript | 0 (+643) | OpenAI’s new CLI and SDK for detecting, validating, and fixing security flaws in AI-generated code—critical for enterprise adoption. Rapid growth signals rising concern over AI safety. |
| [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) | C++ | 0 (+176) | High-performance LLM inference engine enabling local, GPU-accelerated runs of models like Llama 3. Key enabler for privacy-focused AI deployment. |
| [meta/astryx](https://github.com/meta/astryx) | TypeScript | 0 (+1830) | Meta’s fully customizable, agent-ready design system—combines UI/UX with AI workflow integration, targeting developers building AG-UI applications. |
| [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) | TypeScript | 0 (+298) | Open-source AI coworkers with dedicated browsers, files, and tools—each action pre-decided and recorded. A foundational step toward verifiable, accountable agents. |

#### **🤖 AI Agents / Workflows**

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | TypeScript | 0 (+151) | An open-source AI coding agent that lives in your terminal—designed for seamless, real-time code generation and debugging across multiple models. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 302,058 | The leading agent harness for optimizing performance, memory, security, and research in Claude Code, Codex, and other agents. A de facto standard for advanced agent engineering. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 262,992 | A self-evolving AI agent that grows with user behavior—emphasizing long-term learning, adaptive skills, and context retention. |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 82,238 | Open-source AI job search agent that scans boards, tailors resumes, and tracks applications—runs locally with Codex, OpenCode, or as a plugin. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 76,335 | Turns documents into native PowerPoint decks with animations, charts, and audio narration—ideal for AI-driven content creation workflows. |

#### **🔍 RAG / Knowledge**

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 116,607 | Persistent context across agent sessions—compresses history with AI and injects relevant context back. Works with Claude Code, Copilot, and more. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,097 | Agent-native RAG engine evolving into full context infrastructure—supports structured data, logs, and dynamic knowledge updates. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 79,500 | Compresses tool outputs, logs, and RAG chunks before LLM ingestion—cuts tokens by 20% (coding), up to 95% (JSON)—without losing accuracy. |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | TypeScript | 12,690 | Code search MCP for Claude Code—enables entire codebase as context for agents, reducing hallucination risk. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 52,884 | Document processing platform for AI—used widely in RAG pipelines, now integrated with many agent frameworks. |

#### **📦 AI Applications**

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 142,968 | Generates high-quality short videos from keywords via AI workflows—ideal for content creators and marketers. Viral potential. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 71,101 | LLM-powered stock analysis system with real-time news, decision dashboards, and automated alerts—runs zero-cost, scheduled tasks. |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 38,117 | “Vibe-Trading”: a personal AI trading agent that interprets market sentiment and executes trades based on real-time data. |
| [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | Python | 0 (+415) | Enables free use of Claude Code, Codex, Pi, and others via terminal, IDE, or browser—supports voice input and ToS-friendly access. |

#### **🧠 LLMs / Training**

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,589 | OpenCompass is a comprehensive LLM evaluation platform supporting 100+ datasets across reasoning, coding, safety, and long-context tasks—critical for benchmarking. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,728 | Builds a minimal vLLM + Qwen stack on Apple Silicon—ideal for systems engineers learning LLM inference at scale. |
| [Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents) | Python | 6,328 | Promotes building AI agents "atomically"—modular, composable components for scalable agent architecture. |
| [FonaTech/Project_Chronos](https://github.com/FonaTech/Project_Chronos) | Python | 207 | Zero-stall MoE inference via lookahead prediction and async DMA prefetching—optimized for SSD I/O and low-latency LLM serving. |

> ❌ *No projects fit the "LLM Models" category (weights, base models) in today’s data—most are frameworks or tools built atop existing models.*

---

### **3. Trend Signal Analysis**

Today’s AI open-source landscape reveals a decisive pivot toward **agent-centric, secure, and self-hosted intelligence**. The surge in projects like *Codex Security*, *ECC*, *Headroom*, and *Claude-Mem* indicates a maturing ecosystem where developers are no longer satisfied with black-box AI assistants—they demand transparency, control, and auditability. This aligns with recent industry shifts: OpenAI’s own emphasis on security and Anthropic’s push for responsible AI, combined with growing regulatory scrutiny around AI accountability.

Notably, **multi-harness agent tooling** is emerging as a dominant theme—projects like *free-claude-code* and *ECC* enable users to chain multiple models (Claude, Codex, Gemini) through a single interface, breaking vendor lock-in and empowering hybrid AI workflows. This reflects a broader trend: **the end of monolithic AI platforms** and the rise of modular, composable agent stacks.

Additionally, **local-first inference** is gaining traction—not just for privacy, but for cost efficiency and latency reduction. Tools like *llama.cpp* and *Tiny-LLM* cater to developers who want to run models directly on-device, while *RAGFlow* and *Headroom* optimize how data flows into them. These trends suggest a future where AI agents are not only intelligent but also **resilient, efficient, and developer-owned**.

---

### **4. Community Hot Spots**

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** – The definitive agent harness for performance optimization and security. Essential for any serious agent builder.
- **[openai/codex-security](https://github.com/openai/codex-security)** – Critical for securing AI-generated code; essential for enterprise and production-grade AI workflows.
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** – Solves persistent context loss in agents—key for long-running, evolving AI workflows.
- **[Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code)** – Democratizes access to premium AI tools; ideal for hobbyists and researchers without budget constraints.
- **[CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot)** – Represents the next evolution of AI coworkers: autonomous, auditable, and resource-aware—worth exploring for frontend and full-stack developers.

--- 

**End of Report**

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*