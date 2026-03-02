# agents-radar

[English](./README.md) | 中文

每天早上 08:00 CST 自动运行的 GitHub Actions 工作流。追踪主流 AI CLI 工具的 GitHub 动态、OpenClaw 及其同赛道项目的生态活动、Anthropic 和 OpenAI 官网最新资讯，并每日监测 GitHub AI 热门仓库趋势，以中文每日简报的形式发布为 GitHub Issues 并提交为 Markdown 文件。

## Web UI

**[https://duanyytop.github.io/agents-radar](https://duanyytop.github.io/agents-radar)**

在线浏览所有历史简报，深色主题，无需登录。报告直接由本仓库的 Markdown 文件通过 GitHub Pages 渲染。

## 追踪来源

### AI CLI 工具（GitHub）

| 工具 | 仓库 |
|------|------|
| Claude Code | [anthropics/claude-code](https://github.com/anthropics/claude-code) |
| OpenAI Codex | [openai/codex](https://github.com/openai/codex) |
| Gemini CLI | [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) |
| Kimi Code CLI | [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) |
| OpenCode | [anomalyco/opencode](https://github.com/anomalyco/opencode) |
| Qwen Code | [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) |

### Claude Code Skills（GitHub）

| 来源 | 仓库 |
|------|------|
| Claude Code Skills | [anthropics/skills](https://github.com/anthropics/skills) |

PR 和 Issue 不设时间过滤，按社区热度（评论数）排序，报告始终反映当前最活跃的 Skills 讨论，而非仅看最新内容。

### OpenClaw + AI Agent 生态（GitHub）

OpenClaw 作为重点追踪项目，同时横向对比 10 个同赛道项目，覆盖个人 AI 助手 / 自主 Agent 方向。

| 项目 | 仓库 | Stars |
|------|------|-------|
| OpenClaw | [openclaw/openclaw](https://github.com/openclaw/openclaw) | 240.5k |
| NanoBot | [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 26.9k |
| Zeroclaw | [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 21.2k |
| PicoClaw | [sipeed/picoclaw](https://github.com/sipeed/picoclaw) | 21.1k |
| NanoClaw | [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) | 16.6k |
| IronClaw | [nearai/ironclaw](https://github.com/nearai/ironclaw) | 3.9k |
| LobsterAI | [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) | 3.0k |
| TinyClaw | [TinyAGI/tinyclaw](https://github.com/TinyAGI/tinyclaw) | 2.8k |
| CoPaw | [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) | 2.2k |
| ZeptoClaw | [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw) | 394 |
| EasyClaw | [gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw) | 102 |

### GitHub AI 趋势热榜

每天并行获取两个数据源：

| 来源 | 说明 |
|------|------|
| [github.com/trending](https://github.com/trending?since=daily) | 今日热榜，HTML 解析，含今日新增 Stars 数 |
| GitHub Search API | 7 天内活跃的 AI 相关仓库，覆盖 6 个主题标签：`llm`、`ai-agent`、`rag`、`vector-database`、`large-language-model`、`machine-learning` |

LLM 负责过滤非 AI 项目，将结果按维度分类（AI 基础工具 / AI 智能体 / AI 应用 / 大模型 / RAG 知识库），并提炼趋势信号。

### Hacker News

通过 [Algolia HN Search API](https://hn.algolia.com/api) 并行执行 6 个查询（`AI`、`LLM`、`Claude`、`OpenAI`、`Anthropic`、`machine learning`），抓取过去 24 小时内的 AI 相关帖子，去重后按分数排序，取 top 30 传入 LLM 进行社区情绪分析。

### 官网内容（基于 Sitemap）

| 组织 | 网站 | 追踪板块 |
|------|------|---------|
| Anthropic | [anthropic.com](https://www.anthropic.com) | `/news/`、`/research/`、`/engineering/`、`/learn/` |
| OpenAI | [openai.com](https://openai.com) | research、publication、release、company、engineering、milestone、learn-guides、safety、product |

通过对比 Sitemap 中的 `lastmod` 时间戳与持久化状态文件（`digests/web-state.json`）来检测新文章。**首次运行**时，每个站点最多抓取 25 篇近期文章并生成全量概览报告；后续运行仅处理新增或更新的 URL，无新内容则跳过网页报告步骤。

## 功能特性

- 抓取所有追踪仓库过去 24 小时内更新的 Issues、PR 和 Releases
- 追踪热门 Claude Code Skills，按社区参与度而非时间排序
- 为每个 CLI 仓库生成单独摘要，并输出跨工具横向对比分析
- 生成 OpenClaw 深度项目报告，并与 10 个同赛道项目进行横向对比
- 通过 Sitemap 抓取 Anthropic 和 OpenAI 官网内容，增量检测新文章
- 每日监测 GitHub Trending + 搜索 6 个 AI 主题标签，按维度分类并提炼趋势信号
- 抓取 Hacker News 过去 24 小时 AI 热门帖子（top 30，按分数排序），生成社区情绪报告
- 以 GitHub Issues 形式发布报告，同时提交 Markdown 文件至 `digests/YYYY-MM-DD/`
- 每日通过 GitHub Actions 定时运行，支持手动触发

## 部署配置

### 1. Fork 本仓库

### 2. 添加 Secrets

进入 **Settings → Secrets and variables → Actions**，添加以下密钥：

| Secret | 说明 |
|--------|------|
| `ANTHROPIC_API_KEY` | API 密钥，兼容 Anthropic 和 Kimi Code |
| `ANTHROPIC_BASE_URL` | API 地址覆盖。使用 Kimi Code 时设置为 `https://api.kimi.com/coding/`，使用 Anthropic 时留空 |

> `GITHUB_TOKEN` 由 GitHub Actions 自动提供，无需手动添加。

### 3. 启用工作流

在 **Actions** 标签页中确认工作流已启用。

如需立即测试，进入 **Actions → Daily Agents Radar → Run workflow** 手动触发。

> **首次运行说明**：网页内容步骤将抓取最多 50 篇文章（每站 25 篇），可能需要额外几分钟。后续运行仅处理新内容，速度更快。

## 本地运行

```bash
pnpm install

export GITHUB_TOKEN=ghp_xxxxx
export ANTHROPIC_BASE_URL=https://api.kimi.com/coding/
export ANTHROPIC_API_KEY=sk-kimi-xxxxxxxx
export DIGEST_REPO=your-username/agents-radar  # 可选，留空则仅写入本地文件

pnpm start
```

## 输出格式

文件写入 `digests/YYYY-MM-DD/`：

| 文件 | 内容 | GitHub Issue 标签 |
|------|------|------------------|
| `ai-cli.md` | CLI 简报 — 跨工具横向对比 + 各工具详细报告 | `digest` |
| `ai-agents.md` | OpenClaw 深度报告 + 横向生态对比 + 10 个同赛道项目详情 | `openclaw` |
| `ai-web.md` | 官网内容报告（仅在有新内容时生成） | `web` |
| `ai-trending.md` | GitHub AI 趋势热榜 — 按维度分类 + 趋势信号分析（仅在有数据时生成） | `trending` |
| `ai-hn.md` | Hacker News AI 社区动态 — 热门帖子分类 + 情绪分析（仅在抓取成功时生成） | `hn` |

`digests/web-state.json` 用于记录已处理的 URL，随每日简报一并提交。

---

`ai-cli.md` 结构：
```
## 横向对比
  生态全景 / 活跃度对比表 / 共同需求 / 差异定位 / 趋势信号

## 各工具详细报告
  <details> Claude Code    — [Claude Code Skills 社区热点]
                             热门 Skills 排行 / 社区需求趋势 / 高潜力待合并 Skills
                             ---
                             今日速览 / 热点 Issues / PR 进展 / 趋势
  <details> OpenAI Codex   — 今日速览 / 热点 Issues / PR 进展 / 趋势
  <details> Gemini CLI     — ...
  <details> Kimi Code CLI  — ...
  <details> OpenCode       — ...
  <details> Qwen Code      — ...
```

`ai-agents.md` 结构：
```
Issues: N | PRs: N | 覆盖项目: 10 个

## OpenClaw 项目深度报告
  今日速览 / 版本发布 / 项目进展 / 社区热点 /
  Bug稳定性 / 功能请求 / 用户反馈 / 待处理积压

## 横向生态对比
  生态全景 / 活跃度对比表 / OpenClaw定位分析 /
  共同技术方向 / 差异化定位 / 社区热度与成熟度 / 趋势信号

## 同赛道项目详细报告
  <details> Zeroclaw   — 今日速览 / 版本发布 / 项目进展 / ...（8节）
  <details> EasyClaw   — ...
  <details> LobsterAI  — ...
  <details> ZeptoClaw  — ...
  <details> NanoBot    — ...
  <details> PicoClaw   — ...
  <details> NanoClaw   — ...
  <details> IronClaw   — ...
  <details> TinyClaw   — ...
  <details> CoPaw      — ...
```

`ai-web.md` 结构：
```
数据来源: anthropic.com (N 篇) + openai.com (N 篇)

今日速览
Anthropic/Claude 内容精选  (news / research / engineering / learn)
OpenAI 内容精选            (research / release / company / safety / ...)
战略信号解读
值得关注的细节
[首次全量时额外包含: 内容格局总览]
```

`ai-trending.md` 结构：
```
数据来源: GitHub Trending + GitHub Search API

今日速览
各维度热门项目
  🔧 AI 基础工具      — 框架 / SDK / 推理引擎 / CLI
  🤖 AI 智能体/工作流 — Agent 框架 / 多智能体 / 自动化
  📦 AI 应用          — 垂直场景产品 / 解决方案
  🧠 大模型/训练      — 模型权重 / 训练框架 / 微调工具
  🔍 RAG/知识库       — 向量数据库 / 检索增强
趋势信号分析
社区关注热点
```

`ai-hn.md` 结构：
```
数据来源: Hacker News（top-30 AI 帖子，过去 24 小时）

今日速览
热门新闻与讨论
  🔬 模型与研究   — 新模型发布 / 论文 / 基准测试
  🛠️ 工具与工程   — 开源项目 / 框架 / 工程实践
  🏢 产业动态     — 公司新闻 / 融资 / 产品发布
  💬 观点与争议   — Ask HN / Show HN / 热议帖子
社区情绪信号
值得深读
```

历史简报存储在 [`digests/`](./digests/)。已发布的 Issues 按类型打标签：[`digest`](../../issues?label=digest) · [`openclaw`](../../issues?label=openclaw) · [`web`](../../issues?label=web) · [`trending`](../../issues?label=trending) · [`hn`](../../issues?label=hn)。

## 定时计划

默认 cron 表达式 `"0 0 * * *"` = **00:00 UTC = 08:00 CST**。

修改时间请编辑 `.github/workflows/daily-digest.yml` 中的 cron 表达式：

| CST   | UTC cron      |
|-------|---------------|
| 08:00 | `0 0 * * *`  |
| 09:00 | `0 1 * * *`  |
| 10:00 | `0 2 * * *`  |
