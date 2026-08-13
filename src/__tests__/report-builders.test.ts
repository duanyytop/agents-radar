import { marked } from "marked";
import { describe, it, expect } from "vitest";
import {
  buildCliReportContent,
  buildOpenclawReportContent,
  buildInfraReportContent,
  buildRadarReportContent,
} from "../report-builders.ts";
import type { RepoDigest } from "../prompts.ts";
import type { GitHubItem, GitHubRelease } from "../github.ts";
import type { RadarData } from "../radar.ts";

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

function makeDigest(overrides: Partial<RepoDigest> = {}): RepoDigest {
  return {
    config: { id: "test-tool", repo: "org/test-tool", name: "TestTool" },
    issues: [],
    prs: [],
    releases: [],
    summary: "Test summary content",
    ...overrides,
  };
}

function makeRadarData(count: number, mode: RadarData["mode"]): RadarData {
  const items: RadarData["items"] = Array.from({ length: count }, (_, index) => ({
    story: {
      id: String(index + 1),
      hnRank: index + 1,
      title: `AI story ${index + 1}`,
      url: `https://example.com/${index + 1}`,
      hnUrl: `https://news.ycombinator.com/item?id=${index + 1}`,
      points: 100 - index,
      comments: 20 - index,
      author: "author",
      createdAt: "2026-08-11T00:00:00.000Z",
    },
    breakdown: { points: 20, comments: 8, rank: 19, freshness: 10 },
    baseScore: 57,
    editorialScore: mode === "deepseek" ? 25 : 0,
    totalScore: 95 - index,
    summary: { zh: `摘要 ${index + 1}`, en: `Summary ${index + 1}` },
    reason: { zh: `理由 ${index + 1}`, en: `Reason ${index + 1}` },
  }));
  return {
    items,
    top5: items.slice(0, 5),
    mode,
    scannedCount: count + 2,
    duplicateCount: 2,
  };
}

// ---------------------------------------------------------------------------
// buildCliReportContent
// ---------------------------------------------------------------------------

describe("buildCliReportContent", () => {
  it("includes title, meta, and all sections (zh)", () => {
    const digests = [
      makeDigest({ config: { id: "claude-code", repo: "anthropics/claude-code", name: "Claude Code" } }),
      makeDigest({ config: { id: "codex", repo: "openai/codex", name: "OpenAI Codex" } }),
    ];
    const result = buildCliReportContent(
      digests,
      "Skills summary",
      "Comparison content",
      "2026-03-09 00:00",
      "2026-03-09",
      "\n---\nfooter",
      "anthropics/skills",
      "zh",
    );

    expect(result).toContain("# AI CLI 工具社区动态日报 2026-03-09");
    expect(result).toContain("覆盖工具: 2 个");
    expect(result).toContain("[Claude Code](https://github.com/anthropics/claude-code)");
    expect(result).toContain("[Claude Code Skills](https://github.com/anthropics/skills)");
    expect(result).toContain("横向对比");
    expect(result).toContain("Comparison content");
    expect(result).toContain("Skills summary");
    expect(result).toContain("footer");
  });

  it("includes title and meta in English", () => {
    const digests = [makeDigest()];
    const result = buildCliReportContent(
      digests,
      "Skills",
      "Comparison",
      "2026-03-09 00:00",
      "2026-03-09",
      "",
      "anthropics/skills",
      "en",
    );
    expect(result).toContain("# AI CLI Tools Community Digest 2026-03-09");
    expect(result).toContain("Cross-Tool Comparison");
  });

  it("nests skills section inside claude-code details only", () => {
    const digests = [
      makeDigest({ config: { id: "claude-code", repo: "anthropics/claude-code", name: "Claude Code" } }),
      makeDigest({ config: { id: "codex", repo: "openai/codex", name: "Codex" } }),
    ];
    const result = buildCliReportContent(
      digests,
      "SKILLS_CONTENT",
      "comparison",
      "",
      "",
      "",
      "anthropics/skills",
      "zh",
    );

    // Skills should appear inside claude-code details
    const claudeIdx = result.indexOf("Claude Code");
    const skillsIdx = result.indexOf("SKILLS_CONTENT");
    expect(skillsIdx).toBeGreaterThan(claudeIdx);
    // Skills should not appear after codex section
    expect(result.split("SKILLS_CONTENT")).toHaveLength(2); // appears exactly once
  });
});

// ---------------------------------------------------------------------------
// buildOpenclawReportContent
// ---------------------------------------------------------------------------

describe("buildOpenclawReportContent", () => {
  it("includes all sections (zh)", () => {
    const openclaw = { id: "openclaw", repo: "openclaw/openclaw", name: "OpenClaw" };
    const peers = [{ id: "peer1", repo: "org/peer1", name: "Peer1" }];
    const peerDigests = [makeDigest({ config: peers[0] })];
    const fetchedOpenclaw = {
      cfg: openclaw,
      issues: [{ number: 1 } as unknown as GitHubItem],
      prs: [] as GitHubItem[],
      releases: [] as GitHubRelease[],
    };

    const result = buildOpenclawReportContent(
      fetchedOpenclaw,
      peerDigests,
      "OpenClaw summary",
      "Peers comparison",
      "2026-03-09 00:00",
      "2026-03-09",
      "\nfooter",
      openclaw,
      peers,
      "zh",
    );

    expect(result).toContain("# OpenClaw 生态日报 2026-03-09");
    expect(result).toContain("Issues: 1");
    expect(result).toContain("覆盖项目: 2 个");
    expect(result).toContain("[OpenClaw](https://github.com/openclaw/openclaw)");
    expect(result).toContain("[Peer1](https://github.com/org/peer1)");
    expect(result).toContain("OpenClaw 项目深度报告");
    expect(result).toContain("横向生态对比");
    expect(result).toContain("同赛道项目详细报告");
    expect(result).toContain("footer");
  });

  it("renders in English", () => {
    const openclaw = { id: "openclaw", repo: "openclaw/openclaw", name: "OpenClaw" };
    const result = buildOpenclawReportContent(
      { cfg: openclaw, issues: [], prs: [], releases: [] },
      [],
      "summary",
      "comparison",
      "",
      "2026-03-09",
      "",
      openclaw,
      [],
      "en",
    );
    expect(result).toContain("# OpenClaw Ecosystem Digest 2026-03-09");
    expect(result).toContain("OpenClaw Deep Dive");
    expect(result).toContain("Cross-Ecosystem Comparison");
  });
});

// ---------------------------------------------------------------------------
// buildInfraReportContent
// ---------------------------------------------------------------------------

describe("buildInfraReportContent", () => {
  it("includes title, meta, and all sections (zh)", () => {
    const digests = [
      makeDigest({ config: { id: "vllm", repo: "vllm-project/vllm", name: "vLLM" }, summary: "vLLM 摘要" }),
      makeDigest({ config: { id: "ollama", repo: "ollama/ollama", name: "Ollama" }, summary: "Ollama 摘要" }),
    ];
    const result = buildInfraReportContent(
      digests,
      "Comparison content",
      "2026-03-09 00:00",
      "2026-03-09",
      "\n---\nfooter",
      "zh",
    );

    expect(result).toContain("# AI 基础设施日报 2026-03-09");
    expect(result).toContain("覆盖项目: 2 个");
    expect(result).toContain("[vLLM](https://github.com/vllm-project/vllm)");
    expect(result).toContain("[Ollama](https://github.com/ollama/ollama)");
    expect(result).toContain("横向对比");
    expect(result).toContain("Comparison content");
    expect(result).toContain("vLLM 摘要");
    expect(result).toContain("各项目详细报告");
    expect(result).toContain("footer");
  });

  it("renders in English", () => {
    const result = buildInfraReportContent([makeDigest()], "comparison", "", "2026-03-09", "", "en");
    expect(result).toContain("# AI Infrastructure Digest 2026-03-09");
    expect(result).toContain("Projects covered: 1");
    expect(result).toContain("Cross-Project Comparison");
    expect(result).toContain("Per-Project Reports");
  });
});

describe("buildRadarReportContent", () => {
  it("renders metadata, exactly five recommendations, and every candidate in Chinese", () => {
    const data = makeRadarData(6, "deepseek");
    const result = buildRadarReportContent(data, "2026-08-12 00:00", "2026-08-12", "\nfooter", "zh");
    expect(result).toContain("# AI 信息雷达 2026-08-12");
    expect(result).toContain("扫描 8 条");
    expect(result).toContain("候选 6 条");
    expect(result).toContain("去重 2 条");
    expect(result).toContain("DeepSeek 编辑评分");
    expect(result.match(/^### \d+\./gm) ?? []).toHaveLength(5);
    expect(result.match(/^\| \d+ \|/gm) ?? []).toHaveLength(6);
    expect(new Set(data.top5.map((item) => item.story.url)).size).toBe(5);
    for (const item of data.top5) {
      expect(result.split(item.story.url)).toHaveLength(3);
    }
  });

  it("marks deterministic mode and renders all available items when fewer than five exist", () => {
    const data = makeRadarData(3, "deterministic");
    const result = buildRadarReportContent(data, "2026-08-12 00:00", "2026-08-12", "", "en");
    expect(result).toContain("# AI Information Radar 2026-08-12");
    expect(result).toContain("Deterministic fallback");
    expect(result).toContain("Only 3 candidates were available");
    expect(result.match(/^### \d+\./gm) ?? []).toHaveLength(3);
  });

  it("preserves external story titles and distinct article and HN discussion anchors", () => {
    const data = makeRadarData(1, "deepseek");
    data.items[0]!.story.title = "A ] B";
    const markdown = buildRadarReportContent(data, "2026-08-12 00:00", "2026-08-12", "", "en");
    const html = marked.parse(markdown, { async: false });

    expect(html.match(/<a href="https:\/\/example\.com\/1">A \] B<\/a>/g) ?? []).toHaveLength(2);
    expect(html).toContain('<a href="https://news.ycombinator.com/item?id=1">HN discussion</a>');
  });

  it.each([
    ["closing parenthesis", "https://example.com/a)tail", "https://example.com/a)tail"],
    ["less-than sign", "https://example.com/a<tail", "https://example.com/a%3Ctail"],
    ["greater-than sign", "https://example.com/a>tail", "https://example.com/a%3Etail"],
    ["whitespace", "https://example.com/a tail", "https://example.com/a%20tail"],
    ["backslash", "https://example.com/a\\tail", "https://example.com/a%5Ctail"],
    ["C1 control", "https://example.com/a\u0085tail", "https://example.com/a%C2%85tail"],
    ["lone surrogate", "https://example.com/a\uD800tail", "https://example.com/a%EF%BF%BDtail"],
  ])("preserves %s in parsed Top 5 and table article links", (_case, inputUrl, expectedHref) => {
    const data = makeRadarData(1, "deepseek");
    data.items[0]!.story.url = inputUrl;

    const markdown = buildRadarReportContent(data, "2026-08-12 00:00", "2026-08-12", "", "en");
    const html = marked.parse(markdown, { async: false });
    expect(markdown).toContain(`(<${expectedHref}>)`);
    const articleHrefs = Array.from(html.matchAll(/<a href="([^"]+)">AI story 1<\/a>/g), (match) => match[1]);

    expect(articleHrefs).toEqual([expectedHref, expectedHref]);
    expect(html).toContain('<a href="https://news.ycombinator.com/item?id=1">HN discussion</a>');
  });

  it("preserves a backslash followed by a pipe in a parsed table link label", () => {
    const data = makeRadarData(1, "deepseek");
    data.items[0]!.story.title = String.raw`alpha \| beta`;

    const markdown = buildRadarReportContent(data, "2026-08-12 00:00", "2026-08-12", "", "en");
    const html = marked.parse(markdown, { async: false });
    const cells = Array.from(html.matchAll(/<td[^>]*>(.*?)<\/td>/g), (match) => match[1]);

    expect(cells).toContain(String.raw`<a href="https://example.com/1">alpha \| beta</a>`);
  });

  it("preserves a backslash followed by a pipe in the parsed summary cell", () => {
    const data = makeRadarData(1, "deepseek");
    data.items[0]!.summary.en = String.raw`alpha \| beta`;

    const markdown = buildRadarReportContent(data, "2026-08-12 00:00", "2026-08-12", "", "en");
    const html = marked.parse(markdown, { async: false });
    const cells = Array.from(html.matchAll(/<td[^>]*>(.*?)<\/td>/g), (match) => match[1]);

    expect(cells).toHaveLength(7);
    expect(cells[5]).toBe("2026-08-11T00:00:00.000Z");
    expect(cells[6]).toBe(String.raw`alpha \| beta`);
  });
  it("caps recommendations at the first five items even when top5 is oversized", () => {
    const data = makeRadarData(6, "deepseek");
    data.top5 = data.items;
    const result = buildRadarReportContent(data, "2026-08-12 00:00", "2026-08-12", "", "en");

    expect(result.match(/^### \d+\. \[AI story \d+\]/gm) ?? []).toEqual([
      "### 1. [AI story 1]",
      "### 2. [AI story 2]",
      "### 3. [AI story 3]",
      "### 4. [AI story 4]",
      "### 5. [AI story 5]",
    ]);
  });
});
