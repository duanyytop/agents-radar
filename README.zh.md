# agents-radar

[English](./README.md) | 中文

每天早上 08:00 CST 自动运行的 GitHub Actions 工作流。追踪主流 AI CLI 工具的 GitHub 动态、OpenClaw 及其同赛道项目的生态活动、Anthropic 和 OpenAI 官网最新资讯，并每日监测 GitHub AI 热门仓库趋势，以中英双语每日简报的形式发布为 GitHub Issues 并提交为 Markdown 文件。每周和每月自动生成汇总报告。

## Web UI

**[https://duanyytop.github.io/agents-radar](https://duanyytop.github.io/agents-radar)**

在线浏览所有历史简报，深色主题，无需登录。报告直接由本仓库的 Markdown 文件通过 GitHub Pages 渲染。每份报告支持中文 / 英文切换。

## RSS 订阅

**[https://duanyytop.github.io/agents-radar/feed.xml](https://duanyytop.github.io/agents-radar/feed.xml)**

在任意 RSS 阅读器（Feedly、Reeder、NewsBlur 等）中订阅，每日自动推送新简报。Feed 包含最新 30 条报告（覆盖所有报告类型），与 `manifest.json` 同步更新。

## MCP Server

**`https://agents-radar-mcp.duanyytop.workers.dev`**

基于 [Model Context Protocol](https://modelcontextprotocol.io) 的托管服务，将 agents-radar 数据暴露为工具接口。任何支持 MCP 的客户端（Claude Desktop、OpenClaw 等）均可直接查询最新 AI 生态报告。

**可用工具：**

| 工具 | 说明 |
|------|------|
| `list_reports` | 列出最近 N 天的可用日期和报告类型 |
| `get_latest` | 获取某类报告的最新一期 |
| `get_report` | 按日期和类型精确获取报告 |
| `search` | 关键词搜索最近 N 天的报告 |

**Claude Desktop 接入** — 编辑 `~/Library/Application Support/Claude/claude_desktop_config.json`：

```json
{
  "mcpServers": {
    "agents-radar": {
      "url": "https://agents-radar-mcp.duanyytop.workers.dev"
    }
  }
}
```

保存后重启 Claude Desktop，即可直接提问：
- *"最近 AI CLI 工具有什么动态？"* → 调用 `get_latest`
- *"搜索本周提到 Claude Code 的报告"* → 调用 `search`
- *"获取 2026-03-05 的 GitHub 趋势报告"* → 调用 `get_report`

**OpenClaw 接入** — 执行以下命令：

```bash
openclaw mcp add --transport http agents-radar https://agents-radar-mcp.duanyytop.workers.dev
```

或手动编辑 `~/.openclaw/openclaw.json`：

```json
{
  "mcpServers": {
    "agents-radar": {
      "type": "http",
      "url": "https://agents-radar-mcp.duanyytop.workers.dev"
    }
  }
}
```

配置完成后即可在 OpenClaw 中直接提问：
- *"最近 AI CLI 工具有什么动态？"* → 调用 `get_latest`
- *"搜索本周提到 Claude Code 的报告"* → 调用 `search`
- *"获取 2026-03-05 的 GitHub 趋势报告"* → 调用 `get_report`

**自托管** — 从 `mcp/` 目录部署自己的实例：

```bash
cd mcp
pnpm install
wrangler deploy
```

## Telegram 频道 & 飞书群

订阅你常用的平台，每日简报生成后自动推送通知，附带所有报告的直达链接（中文 / 英文）。

<table>
  <tr>
    <td align="center"><b><a href="https://t.me/agents_radar">加入 Telegram 频道</a></b></td>
    <td align="center"><b><a href="https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=a00hcab4-86de-4a3f-b599-e46146a69b98">加入飞书群</a></b></td>
  </tr>
  <tr>
    <td><img src="assets/telegram.jpg" width="300" alt="Telegram 推送"></td>
    <td><img src="assets/feishu.jpg" width="300" alt="飞书推送"></td>
  </tr>
</table>

## 追踪来源

### AI CLI 工具（GitHub）

| 工具 | 仓库 |
|------|------|
| Claude Code | [anthropics/claude-code](https://github.com/anthropics/claude-code) |
| OpenAI Codex | [openai/codex](https://github.com/openai/codex) |
| Gemini CLI | [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) |
| GitHub Copilot CLI | [github/copilot-cli](https://github.com/github/copilot-cli) |
| Kimi Code CLI | [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) |
| OpenCode | [anomalyco/opencode](https://github.com/anomalyco/opencode) |
| Qwen Code | [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) |

### Claude Code Skills（GitHub）

| 来源 | 仓库 |
|------|------|
| Claude Code Skills | [anthropics/skills](https://github.com/anthropics/skills) |

PR 和 Issue 不设时间过滤，按社区热度（评论数）排序，报告始终反映当前最活跃的 Skills 讨论，而非仅看最新内容。

### OpenClaw + AI Agent 生态（GitHub）

OpenClaw 作为重点追踪项目，同时横向对比多个同赛道项目，覆盖个人 AI 助手 / 自主 Agent 方向。

| 项目 | 仓库 | Stars |
|------|------|-------|
| OpenClaw | [openclaw/openclaw](https://github.com/openclaw/openclaw) | 240.5k |
| NanoBot | [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 26.9k |
| Zeroclaw | [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 21.2k |
| PicoClaw | [sipeed/picoclaw](https://github.com/sipeed/picoclaw) | 21.1k |
| NanoClaw | [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) | 16.6k |
| NullClaw | [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw) | 6.1k |
| IronClaw | [nearai/ironclaw](https://github.com/nearai/ironclaw) | 3.9k |
| LobsterAI | [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) | 3.0k |
| TinyClaw | [TinyAGI/tinyclaw](https://github.com/TinyAGI/tinyclaw) | 2.8k |
| CoPaw | [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) | 2.2k |
| Moltis | [moltis-org/moltis](https://github.com/moltis-org/moltis) | 2.1k |
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
- 所有追踪仓库均可通过 `config.yml` 配置，无需修改代码

## 部署配置

### 1. Fork 本仓库

### 2. 自定义 `config.yml`（可选）

编辑仓库根目录的 `config.yml`，可增删或替换追踪的仓库。文件内有详细注释，每次工作流运行时自动读取，无需改代码。若文件不存在则使用内置默认值。

```yaml
# 添加新的 CLI 工具
cli_repos:
  - id: my-tool
    repo: owner/my-ai-cli
    name: My AI Tool

# 添加新的同赛道对比项目
openclaw_peers:
  - id: my-agent
    repo: owner/my-agent
    name: My Agent
```

### 3. 添加 Secrets

进入 **Settings → Secrets and variables → Actions**，添加以下密钥：

| Secret | 必填 | 说明 |
|--------|------|------|
| `LLM_PROVIDER` | 可选 | `anthropic`（默认）、`openai`、`github-copilot` 或 `openrouter` |
| `ANTHROPIC_API_KEY` | Anthropic 时 | API 密钥，兼容 Anthropic 和 Kimi Code |
| `ANTHROPIC_BASE_URL` | 可选 | API 地址覆盖。使用 Kimi Code 时设置为 `https://api.kimi.com/coding/`，使用 Anthropic 时留空 |
| `OPENAI_API_KEY` | OpenAI 时 | OpenAI API 密钥 |
| `OPENAI_BASE_URL` | 可选 | OpenAI 端点覆盖 |
| `OPENROUTER_API_KEY` | OpenRouter 时 | OpenRouter API 密钥 |
| `TELEGRAM_BOT_TOKEN` | 可选 | Telegram bot token，从 [@BotFather](https://t.me/BotFather) 获取。设置后每次 digest 完成自动推送通知 |
| `TELEGRAM_CHAT_ID` | 可选 | 接收通知的 Telegram 频道 / 群组 / 用户 ID |
| `FEISHU_WEBHOOK_URL` | 可选 | 飞书自定义机器人 Webhook URL。设置后每次 digest 完成自动推送卡片通知 |

> `GITHUB_TOKEN` 由 GitHub Actions 自动提供，无需手动添加。使用 `github-copilot` 作为 Provider 时，同一 `GITHUB_TOKEN` 也用于 LLM 调用。

**配置 Telegram 推送**（可选）：
1. 向 [@BotFather](https://t.me/BotFather) 创建 bot，复制 token
2. 将 bot 加入频道 / 群组，或直接与 bot 私聊
3. 通过 [@userinfobot](https://t.me/userinfobot) 获取 chat ID
4. 在仓库 Secrets 中添加 `TELEGRAM_BOT_TOKEN` 和 `TELEGRAM_CHAT_ID`

> 两个 secret 均未设置时，通知步骤静默跳过，不影响正常运行。

### 3. 启用工作流

在 **Actions** 标签页中确认工作流已启用。

如需立即测试，进入 **Actions → Daily Agents Radar → Run workflow** 手动触发。

> **首次运行说明**：网页内容步骤将抓取最多 50 篇文章（每站 25 篇），可能需要额外几分钟。后续运行仅处理新内容，速度更快。

## LLM 模型供应商

通过 `LLM_PROVIDER` 环境变量选择模型后端，默认为 `anthropic`。

| 供应商 | `LLM_PROVIDER` | 所需环境变量 | 默认模型 |
|--------|---------------|------------|----------|
| Anthropic | `anthropic` | `ANTHROPIC_API_KEY` | `claude-sonnet-4-6` |
| OpenAI | `openai` | `OPENAI_API_KEY` | `gpt-4o` |
| GitHub Copilot | `github-copilot` | `GITHUB_TOKEN` | `gpt-4o` |
| OpenRouter | `openrouter` | `OPENROUTER_API_KEY` | `anthropic/claude-sonnet-4` |

可通过 `ANTHROPIC_MODEL`、`OPENAI_MODEL`、`GITHUB_COPILOT_MODEL` 或 `OPENROUTER_MODEL` 分别覆盖默认模型名称。

Provider 抽象层位于 `src/providers/`，每个供应商对应独立文件并实现 `LlmProvider` 接口。新增供应商只需创建新文件并在工厂函数中注册。

## 本地运行

```bash
pnpm install

export GITHUB_TOKEN=ghp_xxxxx

# 方式 A: Anthropic（默认）
export ANTHROPIC_API_KEY=sk-ant-xxxxxxxx

# 方式 B: OpenAI
# export LLM_PROVIDER=openai
# export OPENAI_API_KEY=sk-xxxxxxxx

# 方式 C: GitHub Copilot（使用 GITHUB_TOKEN）
# export LLM_PROVIDER=github-copilot

# 方式 D: OpenRouter
# export LLM_PROVIDER=openrouter
# export OPENROUTER_API_KEY=sk-or-xxxxxxxx

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

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=duanyytop/agents-radar&type=Date)](https://star-history.com/#duanyytop/agents-radar&Date)
