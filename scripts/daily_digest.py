#!/usr/bin/env python3
"""
Daily digest for anthropics/claude-code GitHub repository.
Fetches recent issues and PRs, summarizes with an LLM,
then creates a GitHub issue with the digest.

Supported LLM providers (via LLM_PROVIDER env var):
  - "kimi"      : Moonshot Kimi API (default if KIMI_API_KEY is set)
  - "anthropic" : Anthropic Claude API
"""

import os
import sys
from datetime import datetime, timedelta, timezone
from typing import Any

import requests

GITHUB_TOKEN = os.environ["GITHUB_TOKEN"]
DIGEST_REPO = os.environ.get("DIGEST_REPO", "")  # owner/repo where digest issues are posted
TARGET_REPO = "anthropics/claude-code"

# LLM provider selection: prefer Kimi if key is present, fall back to Anthropic
_kimi_key = os.environ.get("KIMI_API_KEY", "")
_anthropic_key = os.environ.get("ANTHROPIC_API_KEY", "")
LLM_PROVIDER = os.environ.get("LLM_PROVIDER", "kimi" if _kimi_key else "anthropic")

GITHUB_HEADERS = {
    "Authorization": f"Bearer {GITHUB_TOKEN}",
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
}


def fetch_recent_items(item_type: str, since: datetime) -> list[dict[str, Any]]:
    """Fetch issues or pull_requests updated since the given datetime."""
    url = f"https://api.github.com/repos/{TARGET_REPO}/{item_type}"
    params = {
        "state": "all",
        "sort": "updated",
        "direction": "desc",
        "per_page": 50,
        "since": since.isoformat(),
    }
    resp = requests.get(url, headers=GITHUB_HEADERS, params=params, timeout=30)
    resp.raise_for_status()
    return resp.json()


def fetch_recent_releases(since: datetime) -> list[dict[str, Any]]:
    """Fetch releases published since the given datetime."""
    url = f"https://api.github.com/repos/{TARGET_REPO}/releases"
    params = {"per_page": 10}
    resp = requests.get(url, headers=GITHUB_HEADERS, params=params, timeout=30)
    resp.raise_for_status()
    releases = resp.json()
    return [
        r for r in releases
        if datetime.fromisoformat(r["published_at"].replace("Z", "+00:00")) >= since
    ]


def format_item(item: dict[str, Any], kind: str) -> str:
    """Format a single issue or PR as a compact text block."""
    number = item["number"]
    title = item["title"]
    state = item["state"]
    user = item["user"]["login"]
    labels = ", ".join(l["name"] for l in item.get("labels", []))
    created = item["created_at"][:10]
    updated = item["updated_at"][:10]
    comments = item.get("comments", 0)
    reactions = item.get("reactions", {}).get("+1", 0)
    body = (item.get("body") or "")[:500].replace("\n", " ").strip()
    url = item["html_url"]

    label_str = f" [{labels}]" if labels else ""
    return (
        f"#{number} [{state.upper()}]{label_str} {title}\n"
        f"  作者: @{user} | 创建: {created} | 更新: {updated} | 评论: {comments} | 👍: {reactions}\n"
        f"  链接: {url}\n"
        f"  摘要: {body[:300]}{'...' if len(body) > 300 else ''}\n"
    )


def build_prompt(issues: list, prs: list, releases: list, date_str: str) -> str:
    issues_text = "\n".join(format_item(i, "issue") for i in issues) or "无"
    prs_text = "\n".join(format_item(p, "pr") for p in prs) or "无"
    releases_text = ""
    if releases:
        for r in releases:
            releases_text += f"- {r['tag_name']}: {r['name']}\n  {(r.get('body') or '')[:300]}\n"
    else:
        releases_text = "无"

    return f"""你是一位专注于 AI 开发工具的技术分析师。请根据以下 GitHub 数据，生成 {date_str} 的 Claude Code 社区动态日报。

# 数据来源: github.com/anthropics/claude-code

## 最新 Releases（过去24小时）
{releases_text}

## 最新 Issues（过去24小时内更新，共{len(issues)}条）
{issues_text}

## 最新 Pull Requests（过去24小时内更新，共{len(prs)}条）
{prs_text}

---

请生成一份结构清晰的中文日报，包含以下部分：

1. **今日速览** - 用2-3句话概括今天最重要的动态
2. **版本发布** - 如有新版本，总结更新内容；无则省略
3. **社区热点 Issues** - 挑选3-5个最值得关注的 Issue，说明为什么重要、社区反应如何
4. **重要 PR 进展** - 挑选3-5个重要的 PR，说明功能或修复内容
5. **功能需求趋势** - 从所有 Issues 中提炼出社区最关注的功能方向（如 IDE 集成、性能、新模型支持等）
6. **开发者关注点** - 总结开发者反馈中的痛点或高频需求

语言要求：简洁专业，适合技术开发者阅读。每个条目附上 GitHub 链接。
"""


def call_llm(prompt: str) -> str:
    if LLM_PROVIDER == "kimi":
        return _call_kimi(prompt)
    return _call_anthropic(prompt)


def _call_kimi(prompt: str) -> str:
    """Call Moonshot Kimi API (OpenAI-compatible)."""
    resp = requests.post(
        "https://api.moonshot.cn/v1/chat/completions",
        headers={"Authorization": f"Bearer {_kimi_key}", "Content-Type": "application/json"},
        json={
            "model": "moonshot-v1-128k",
            "messages": [{"role": "user", "content": prompt}],
            "max_tokens": 4096,
            "temperature": 0.3,
        },
        timeout=120,
    )
    resp.raise_for_status()
    return resp.json()["choices"][0]["message"]["content"]


def _call_anthropic(prompt: str) -> str:
    """Call Anthropic Claude API."""
    import anthropic as _anthropic
    client = _anthropic.Anthropic(api_key=_anthropic_key)
    message = client.messages.create(
        model="claude-opus-4-6",
        max_tokens=4096,
        messages=[{"role": "user", "content": prompt}],
    )
    return message.content[0].text


def create_github_issue(title: str, body: str) -> str:
    """Create a GitHub issue in DIGEST_REPO and return the issue URL."""
    url = f"https://api.github.com/repos/{DIGEST_REPO}/issues"
    payload = {
        "title": title,
        "body": body,
        "labels": ["digest"],
    }
    resp = requests.post(url, headers=GITHUB_HEADERS, json=payload, timeout=30)
    resp.raise_for_status()
    return resp.json()["html_url"]


def save_digest_file(content: str, date_str: str) -> str:
    """Save digest as a markdown file in the digests/ directory."""
    filename = f"digests/{date_str}.md"
    os.makedirs("digests", exist_ok=True)
    with open(filename, "w", encoding="utf-8") as f:
        f.write(content)
    return filename


def main():
    now = datetime.now(timezone.utc)
    since = now - timedelta(hours=24)
    date_str = (now + timedelta(hours=8)).strftime("%Y-%m-%d")  # CST date

    print(f"[{now.isoformat()}] 开始抓取 {TARGET_REPO} 的动态 (since {since.isoformat()})")

    # Fetch data
    issues_raw = fetch_recent_items("issues", since)
    # GitHub issues endpoint returns both issues and PRs; separate them
    issues = [i for i in issues_raw if "pull_request" not in i]
    prs_raw = fetch_recent_items("pulls", since)
    prs = prs_raw  # pulls endpoint returns only PRs
    releases = fetch_recent_releases(since)

    print(f"  Issues: {len(issues)}, PRs: {len(prs)}, Releases: {len(releases)}")

    if not issues and not prs and not releases:
        print("过去24小时无新动态，跳过生成。")
        sys.exit(0)

    # Build prompt and call LLM
    prompt = build_prompt(issues, prs, releases, date_str)
    print(f"  调用 {LLM_PROVIDER} API 生成摘要...")
    summary = call_llm(prompt)

    # Build full digest document
    digest_header = f"# Claude Code 社区日报 {date_str}\n\n> 数据来源: [{TARGET_REPO}](https://github.com/{TARGET_REPO}) | 生成时间: {now.strftime('%Y-%m-%d %H:%M')} UTC\n\n"
    digest_footer = f"\n\n---\n*本日报由 [claude-code-digest](https://github.com/{DIGEST_REPO}) 自动生成，使用 {LLM_PROVIDER} API 分析。*"
    full_digest = digest_header + summary + digest_footer

    # Save to file
    filepath = save_digest_file(full_digest, date_str)
    print(f"  已保存到 {filepath}")

    # Create GitHub issue if DIGEST_REPO is configured
    if DIGEST_REPO:
        issue_title = f"📋 Claude Code 社区日报 {date_str}"
        issue_url = create_github_issue(issue_title, full_digest)
        print(f"  已创建 Issue: {issue_url}")

    print("完成!")


if __name__ == "__main__":
    main()
