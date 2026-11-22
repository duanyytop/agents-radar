# AI Open Source Trends 2026-11-22

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-22 02:37 UTC

---

# **AI Open Source Trends Report – 2026-11-22**

---

## **1. Today's Highlights**

The AI open-source ecosystem is witnessing a surge in agent-centric tooling and infrastructure, with *Claude-BugHunter* leading the charge by offering a comprehensive skill bundle for red-teaming and vulnerability discovery—gaining **+1,803 stars today**. Simultaneously, *firecrawl/firecrawl* and *affaan-m/ECC* are gaining momentum as foundational knowledge infrastructures enabling smarter, more autonomous agents. A strong trend toward **local-first, agent-native development** is emerging, evidenced by the rapid rise of lightweight agents like *nanobot*, *QwenPaw*, and *Codewhale*, alongside growing interest in memory layers (*mem0*, *claude-mem*) and RAG optimization. The convergence of agentic workflows, retrieval systems, and developer tooling reflects a maturing stack where AI agents are no longer prototypes but production-grade collaborators.

---

## **2. Top Projects by Category**

### 🔧 **AI Infrastructure (frameworks, SDKs, dev tools, CLI)**

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 0 (+1,803) | A highly curated skill bundle for Claude Code focused on bug hunting and enterprise red-teaming—features 82 skills across 24 vulnerability classes, making it a go-to toolkit for AI-powered security testing. |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | 0 (+769) | "Making ALL Software Agent-Native" — a CLI framework that enables any command-line tool to be agent-compatible, pushing for universal interoperability in agent-driven workflows. |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | 0 (+326) | A standardized library of agent skills designed for compatibility with Stitch MCP servers, promoting modular, reusable, and cross-platform agent components. |
| [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | Shell | 0 (+720) | An open playbook for avoiding App Store and Google Play rejections, now enhanced with AI agent-ready checks—critical for developers deploying AI-powered apps at scale. |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | HTML | 0 (+583) | A self-contained, high-quality diagram library for AI coding tools (Claude, Copilot, Cursor), enabling visual reasoning and documentation without external dependencies. |

### 🤖 **AI Agents / Workflows (agent frameworks, automation, multi-agent systems)**

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0 (+883) | An agentic skills framework and software development methodology built around autonomous task execution—emerging as a meta-framework for building self-sustaining AI workflows. |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 68,187 (+488) | Enables training a 64M LLM from scratch in just 2 hours—democratizing small-scale model training and empowering developers to build custom, privacy-preserving models locally. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | 0 (+560) | An AI agent skill that synthesizes grounded summaries from Reddit, X, YouTube, HN, and Polymarket—ideal for real-time research and insight aggregation. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Python | 50,255 | A lightweight, extensible personal AI agent capable of task planning, tool use, and self-evolution—designed for local deployment and seamless integration into daily workflows. |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | Python | 48,034 | A multi-model, multi-channel personal assistant that plans tasks, runs tools, and evolves over time—positioned as a full-stack agent harness for end users. |

### 📦 **AI Applications (specific apps, vertical solutions)**

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | 0 (+683) | Open-source AI video clipping tool that auto-generates short-form content (TikTok, Reels, YouTube Shorts) from long videos—including subtitles, covers, and social copy. |
| [XiaoYouChR/Ghost-Downloader-3](https://github.com/XiaoYouChR/Ghost-Downloader-3) | Python | 0 (+779) | A universal downloader that consolidates multiple streaming services—now being integrated with AI agents for intelligent content harvesting and metadata tagging. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 79,089 | Turns documents or topics into native PowerPoint decks with animations, charts, audio narration, and template support—bridging AI content creation with professional presentation delivery. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 73,641 | An LLM-driven stock analysis system that aggregates real-time news, market data, and decision dashboards—running zero-cost, scheduled tasks for retail investors. |

### 🧠 **LLMs / Training (model weights, training frameworks, fine-tuning tools)**

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 68,187 (+488) | A breakthrough in accessible LLM training—builds a 64M model from scratch in under 2 hours, ideal for edge deployment and experimentation. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 108,780 | Step-by-step implementation of a ChatGPT-like LLM in PyTorch—widely used for education and hands-on learning in LLM internals. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,803 | A minimalist vLLM + Qwen setup for Apple Silicon—targeting systems engineers who want low-level control over inference performance. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,214 | A modular, scalable LLM application framework in Rust—reflecting rising interest in high-performance, memory-safe agent backends. |

### 🔍 **RAG / Knowledge (vector databases, retrieval-augmented generation, knowledge management)**

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 206,268 (+1,006) | A unified API to search, scrape, and access 550+ data providers—acts as a knowledge backbone for AI agents, enabling real-time context enrichment. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 118,866 | Persistent context storage across agent sessions—compresses logs and outputs using AI, then injects relevant context back, reducing token costs. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 94,513 | Evolved from a RAG engine into an agent-native database—supports dynamic context management and is designed for scalability in production environments. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 80,266 | Compresses tool outputs, logs, and RAG chunks before LLM input—reduces tokens by 20% for coding agents, up to 95% for JSON, without sacrificing accuracy. |
| [Cognee](https://github.com/topoteretes/cognee) | Python | 33,450 | An open-source AI memory platform for agents—enables persistent, long-term memory with small models, ideal for continuous learning and stateful agents. |

---

## **3. Trend Signal Analysis**

Today’s trends reveal a clear pivot toward **agent-native infrastructure** and **knowledge-aware autonomy**. The explosive growth of *Claude-BugHunter* and *firecrawl/firecrawl* signals rising demand for **specialized, domain-specific agent skills**—particularly in security, research, and data ingestion. These projects aren’t just tools; they’re *skills ecosystems* that extend the capabilities of core LLMs through structured, reusable logic.  

A new pattern is emerging: **modular, composable agent stacks**. Frameworks like *Stitch Skills*, *ECC*, and *Superpowers* suggest a shift from monolithic agent platforms to plug-and-play skill libraries, enabling interoperability across tools like Claude Code, Cursor, and Gemini CLI. This aligns with the broader move toward **open standards** (e.g., MCP, Agent Skills spec), indicating industry maturation beyond proprietary walled gardens.  

Notably, *minimind*’s popularity underscores a growing appetite for **accessible, small-scale LLM training**—a counterbalance to the resource-heavy model hype. Developers are prioritizing control, privacy, and customization over raw size. Meanwhile, the rise of *headroom*, *claude-mem*, and *Cognee* highlights a critical pain point: **context bloat**. Optimizing memory and reducing token overhead is now a top-tier engineering priority, signaling that efficient, sustainable agent operation is becoming a key differentiator.

---

## **4. Community Hot Spots**

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** — As the de facto knowledge layer for agents, its 550+ integrated data sources make it indispensable for real-time, accurate agent behavior.
- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** — The most active new project today (+1,803 stars); essential for AI-driven security testing and red teaming.
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** — Empowers developers to train their own 64M models in 2 hours—ideal for local, private, and customizable AI applications.
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** — Solves the token economy problem for agents; reduces input cost dramatically while preserving output quality.
- **[hkuds/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** — Pushing the vision of “agent-native” CLI tools—critical for integrating AI into developer workflows seamlessly.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*