# AI Open Source Trends 2026-11-14

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-14 02:39 UTC

---

# **AI Open Source Trends Report**  
*Date: 2026-11-14*

---

## **1. Today's Highlights**

The AI open-source ecosystem is witnessing a surge in agent-centric tooling and RAG infrastructure, driven by demand for intelligent, autonomous workflows. Alibaba’s **open-code-review** has exploded with +215 stars today, showcasing a hybrid LLM-agent code review system tailored for enterprise-scale security and precision. Meanwhile, **affaan-m/ECC**, **f/prompts.chat**, and **firecrawl/firecrawl** reflect a growing community focus on agent performance optimization, prompt engineering, and web data access—key enablers for next-gen AI agents. Notably, **ZhuLinsen/daily_stock_analysis** (71.7K stars) exemplifies the rise of vertical AI applications powered by LLMs, combining real-time market intelligence with automated decision-making.

---

## **2. Top Projects by Category**

### 🔧 AI Infrastructure
| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 0 (+215) | A battle-tested, hybrid architecture code review tool combining deterministic pipelines with LLM agents. Supports multi-language rulesets (NPE, XSS, SQLi) and integrates with OpenAI & Anthropic APIs—ideal for secure, scalable code governance at scale. |
| [openai/codex-security](https://github.com/openai/codex-security) | TypeScript | 0 (+751) | OpenAI’s CLI and SDK for detecting, validating, and fixing security vulnerabilities in code. Built for integration into developer workflows, it enables proactive AI-powered security scanning directly within CI/CD pipelines. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 186,903 | A lightweight local LLM runner supporting Kimi, GLM, DeepSeek, Qwen, Gemma, and more. Enables developers to run models locally with minimal setup—critical for privacy-first AI development and experimentation. |

### 🤖 AI Agents / Workflows
| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 302,498 | The agent harness performance optimization system that enhances skills, memory, instincts, and security for Claude Code, Codex, Opencode, and Cursor. Its viral momentum signals a rising demand for agent efficiency and robustness. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 116,869 | Provides persistent context across AI agent sessions by compressing and injecting relevant history. Works with multiple models—including Claude Code and Gemini—making long-term agent memory accessible and practical. |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 82,415 | An open-source AI job search agent that scores jobs, tailors resumes, generates cover letters, and tracks applications—all running locally or via AI CLIs like Codex and OpenCode. A powerful example of personal AI automation. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 111,587 | Gives AI agents internet-wide visibility by enabling them to read and search Twitter, Reddit, YouTube, GitHub, and Bilibili via a single CLI—zero API fees, full autonomy. |

### 📦 AI Applications
| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 71,676 | An LLM-driven multi-market stock analysis system integrating real-time news, market data, and decision dashboards. Offers zero-cost, scheduled runs—ideal for traders seeking AI-powered insights without cloud dependency. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 143,319 | Automates HD video generation from keywords using AI workflows. Demonstrates the growing trend of generative AI in content creation, especially for social media and marketing teams. |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 38,172 | “Vibe-Trading: Your Personal Trading Agent” — a lightweight, self-hosted AI assistant for equity trading with strategy development, technical charting, and economic calendar integration. |

### 🧠 LLMs / Training
| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,595 | A comprehensive LLM evaluation platform supporting over 100 datasets across knowledge, reasoning, coding, science, and safety. Critical for benchmarking models like GPT, Qwen, and Gemini—essential for research and model selection. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,734 | A hands-on LLM inference system built for Apple Silicon, teaching systems engineers how to build a vLLM + Qwen stack from scratch. Perfect for edge deployment and learning low-level LLM mechanics. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 108,369 | Step-by-step implementation of a ChatGPT-like LLM in PyTorch. One of the most popular educational resources for understanding transformer internals and training dynamics. |

### 🔍 RAG / Knowledge
| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,131 | An agent-native database that evolved into a full context infrastructure. Enables dynamic, persistent RAG pipelines with support for complex document structures and schema-aware retrieval. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 147,317 | Turns codebases, docs, configs, and PDFs into queryable knowledge graphs. Uses deterministic AST parsing—no vector store needed—making it ideal for auditability and reproducibility in enterprise RAG. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 79,613 | Compresses logs, files, and RAG chunks before feeding them to LLMs—reducing token usage by 20% (coding) to 95% (JSON)—while preserving answer quality. Key for cost and latency optimization. |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | TypeScript | 12,691 | A code search MCP for Claude Code that makes entire repositories available as context—removing the need for manual indexing and enabling deeper code understanding. |

---

## **3. Trend Signal Analysis**

Today’s data reveals a clear shift toward **agent-native tooling** and **context-aware intelligence**, signaling maturity beyond basic prompting. The explosive growth of **affaan-m/ECC** and **thedotmack/claude-mem** indicates strong community demand for agent performance, memory, and persistence—features essential for building reliable, long-running AI assistants. Simultaneously, **RAG infrastructure** is evolving from simple retrieval to full-fledged context management systems, as seen in **infiniflow/ragflow** and **Graphify-Labs/graphify**, which prioritize determinism and explainability over black-box vector similarity.

A notable new direction is **agent-to-web connectivity**, exemplified by **Panniantong/Agent-Reach** and **firecrawl/firecrawl**, which empower agents to autonomously explore and act upon public data—mirroring recent advancements in agentic AI like AutoGPT and Claude’s new browser capabilities. This reflects a broader industry move toward *autonomous workflow execution*, where AI doesn’t just respond but proactively gathers, analyzes, and acts.

Moreover, **security-first development** is gaining traction, with **alibaba/open-code-review** and **openai/codex-security** emerging as key tools for embedding AI safety into code pipelines. These projects align with growing regulatory and enterprise concerns around AI-generated code quality and vulnerability exposure.

---

## **4. Community Hot Spots**

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** – The fastest-growing agent optimization framework; critical for improving agent reliability and reducing hallucination risk.
- **[zilliztech/claude-context](https://github.com/zilliztech/claude-context)** – Enables full-codebase awareness for agents—revolutionizing how AI interacts with large repositories.
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** – A game-changer for RAG in code-heavy environments; eliminates reliance on vector databases with deterministic, explainable parsing.
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** – A prime example of how LLMs are being used to build vertical AI applications with real-world impact—ideal for aspiring builders in fintech.
- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** – The de facto standard for evaluating LLMs across dimensions—essential for researchers and product teams alike.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*