# Claude Code 社区日报

每天早上 9:00 (CST) 自动抓取 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的最新动态，用 Claude API 生成中文摘要，发布为 GitHub Issue 并存档到 `digests/` 目录。

## 功能

- **自动抓取** 过去 24 小时的 Issues、Pull Requests、Releases
- **AI 摘要** 使用 Claude Opus 分析社区热点、功能趋势、开发者痛点
- **双输出** 创建 GitHub Issue + 提交 Markdown 文件到仓库
- **每日定时** 通过 GitHub Actions 定时运行，支持手动触发

## 快速开始

### 1. Fork 本仓库

### 2. 配置 Secrets

在仓库 **Settings → Secrets and variables → Actions** 中添加：

| Secret | 说明 |
|--------|------|
| `KIMI_API_KEY` | Kimi API Key，从 [platform.moonshot.cn](https://platform.moonshot.cn) 获取（推荐） |
| `ANTHROPIC_API_KEY` | 或者使用 Anthropic API Key |

两者都填写时，默认优先使用 Kimi；可通过 `LLM_PROVIDER=anthropic` 环境变量切换。

> `GITHUB_TOKEN` 由 GitHub Actions 自动提供，无需手动配置。

### 3. 启用 Workflow

确认 **Actions** 标签页中 workflow 已启用。

首次可在 **Actions → Daily Claude Code Digest → Run workflow** 手动触发测试。

## 本地运行

```bash
pip install -r requirements.txt

export GITHUB_TOKEN=ghp_xxxxx
export KIMI_API_KEY=sk-xxxxx           # 使用 Kimi
# export ANTHROPIC_API_KEY=sk-ant-xxx  # 或使用 Anthropic
export DIGEST_REPO=your-username/claude-code-digest  # 可选，不设置则只生成文件

python scripts/daily_digest.py
```

## 输出示例

每日报告结构：

```
# Claude Code 社区日报 2025-XX-XX

## 今日速览
...

## 版本发布
...

## 社区热点 Issues
...

## 重要 PR 进展
...

## 功能需求趋势
...

## 开发者关注点
...
```

历史存档见 [digests/](./digests/) 目录，GitHub Issues 见 [Issues 列表](../../issues?label=digest)。

## 定时设置

默认 `cron: "0 1 * * *"` = UTC 01:00 = **北京时间 09:00**。

如需修改时区，编辑 `.github/workflows/daily-digest.yml` 中的 cron 表达式：

| 时间 (CST) | cron (UTC) |
|-----------|------------|
| 08:00 | `0 0 * * *` |
| 09:00 | `0 1 * * *` |
| 10:00 | `0 2 * * *` |
