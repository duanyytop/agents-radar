# AI Open Source Trends 2026-11-16

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-16 02:22 UTC

---

# **AI Open Source Trends Report – 2026-11-16**

---

## **1. Today's Highlights**

The AI open-source ecosystem is witnessing a surge in agent-centric tooling and workflow orchestration, with projects like *AG-UI*, *plannotator*, and *Chrome DevTools for coding agents* driving new standards for human-agent interaction. Google’s *stitch-skills* and NVIDIA’s *SkillEvaluator* signal a growing emphasis on interoperable, evaluable agent skills—critical for building reliable, production-grade AI workflows. Meanwhile, Alibaba’s *open-code-review* and Tencent’s *LoopForge* highlight enterprise-scale automation in code quality and delivery pipelines. Notably, *GoogleChrome/modern-web-guidance-src* reflects a strategic push to align AI agents with evolving web best practices, ensuring future-proofing of agent behavior.

---

## **2. Top Projects by Category**

### 🔧 **AI Infrastructure**
| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | 0 (+247) | A library of standardized agent skills for coding agents; designed for compatibility with Antigravity, Gemini CLI, Claude Code, and Cursor. Signals the rise of skill-based AI ecosystems. |
| [ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui) | TypeScript | 0 (+355) | Introduces the Agent-User Interaction Protocol, enabling seamless integration of AI agents into frontend apps. A foundational standard emerging from real-world use cases. |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | TypeScript | 0 (+717) | Chrome DevTools adapted for coding agents—bringing debugging, inspection, and interactivity directly into agent workflows. A major step toward developer-first AI tooling. |
| [NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator) | Python | 0 (+122) | Multi-tier framework for evaluating AI agent skills with semantic overlap detection and live behavioral measurement. Critical for trust and reliability at scale. |

### 🤖 **AI Agents / Workflows**
| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 0 (+988) | Univer Office SDK enables developers to embed AI-powered collaboration, editing, and file processing into products. A powerful platform for building AI-native office experiences. |
| [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | TypeScript | 0 (+866) | A workspace for planning, annotating, reviewing, and feeding feedback to AI agents—all within one click. Designed to keep humans in the loop during agent execution. |
| [Tencent/LoopForge](https://github.com/Tencent/LoopForge) | Go | 0 (+423) | Self-hosted workflows for coding agents, orchestrating tools like CodeBuddy and Codex with scripts and human approval gates. Enables secure, auditable AI delivery pipelines. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 303,882 | The agent harness performance optimization system—skills, instincts, memory, security, and research-first design. Viral momentum signals strong community demand for robust agent infra. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 202,091 | Supercharges AI agents with real-time web data. Building the "data layer" for superintelligence—essential for dynamic, up-to-date reasoning. |

### 📦 **AI Applications**
| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills) | Python | 0 (+706) | A curated skill bundle for equity traders—market analysis, technical charting, strategy development. Shows rising interest in vertical-specific agent applications. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 143,835 | Generates HD short videos from keywords via automated AI workflows. Demonstrates the explosive growth of AI-driven content creation in media and marketing. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 72,539 | LLM-powered multi-market stock analysis with real-time news, decision dashboards, and zero-cost scheduled runs. A prime example of AI in fintech automation. |

### 🧠 **LLMs / Training**
| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,155 | Modular, scalable LLM application framework in Rust—ideal for high-performance, low-latency inference systems. Emerging as a go-to stack for systems engineers. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,744 | Builds a tiny vLLM + Qwen on Apple Silicon—perfect for learning LLM inference on edge devices. Educational value meets practical deployment. |
| [EgoAlpha/prompt-in-context-learning](https://github.com/EgoAlpha/prompt-in-context-learning) | Jupyter Notebook | 2,253 | Curated resources for in-context learning and prompt engineering—key to maximizing LLM utility without retraining. A must-have for practitioners. |

### 🔍 **RAG / Knowledge**
| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,205 | An agent-native RAG engine evolved into context infrastructure. Supports persistent, structured knowledge across sessions—critical for long-term agent memory. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 117,397 | Persistent context storage across agent sessions—compresses logs and outputs, injects relevant history back into LLM prompts. Highly sought after for productivity. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 79,760 | Compresses tool outputs, logs, and RAG chunks before LLM input—cuts tokens by 20% (coding) to 95% (JSON), preserving answer quality. Key for cost efficiency. |
| [OpenViking](https://github.com/volcengine/OpenViking) | Python | 42,279 | Self-evolving context database unifying agent memory, RAG, and skills. A next-gen architecture for autonomous agents. |

---

## **3. Trend Signal Analysis**

Today’s data reveals a clear pivot toward **agent-first infrastructure**—not just models or tools, but the *ecosystem around them*. Projects like AG-UI, stitch-skills, and plannotator are signaling the emergence of **standardized, interoperable agent protocols**, crucial for scalability and cross-platform compatibility. This mirrors recent industry moves by Google (MCP), Anthropic (Claude Code), and Microsoft (CopilotKit), indicating a maturing shift from isolated AI assistants to integrated, composable agent workflows.

A new tech stack is crystallizing: **Agent Skills → Agent Hubs (e.g., ECC, CopilotKit) → Context Management (e.g., claude-mem, headroom) → Web & Codebase Retrieval (e.g., firecrawl, zilliztech/claude-context)**. This forms a coherent pipeline for building intelligent, persistent, and accountable agents.

Notably, **enterprise-grade automation** is gaining traction—Alibaba’s *open-code-review* and Tencent’s *LoopForge* reflect growing demand for secure, auditable AI in software delivery. Simultaneously, **vertical-specific applications** (trading, video generation) show that AI is moving beyond general-purpose tools into specialized domains, driven by community-led innovation.

This trend aligns with the release of advanced LLMs like GPT-5, Gemini 2.0, and Qwen3, which emphasize reasoning, memory, and tool use—making robust agent infrastructure not optional, but essential.

---

## **4. Community Hot Spots**

- **[AG-UI Protocol](https://github.com/ag-ui-protocol/ag-ui)** — A foundational standard for embedding agents into UIs. Developers should adopt early to shape the future of agent-user interaction.
- **[stitch-skills](https://github.com/google-labs-code/stitch-skills)** — With Google backing, this is becoming the de facto standard for skill interoperability. Essential for any agent integrator.
- **[headroom](https://github.com/headroomlabs-ai/headroom)** — Token reduction without accuracy loss is a game-changer for cost-sensitive AI workloads. Ideal for scaling agent pipelines.
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** — Moving beyond static RAG to agent-native context management. A key project for long-term memory and stateful agents.
- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** — Real-time web data access is the missing link for agents needing up-to-date intelligence. High potential for integrations with other agent stacks.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*