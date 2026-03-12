import { describe, it, expect } from "vitest";
import {
  buildCliPrompt,
  buildPeerPrompt,
  buildComparisonPrompt,
  buildPeersComparisonPrompt,
  buildSkillsPrompt,
} from "../prompts.ts";
import {
  buildTrendingPrompt,
  buildWebReportPrompt,
  buildWeeklyPrompt,
  buildMonthlyPrompt,
  buildHnPrompt,
} from "../prompts-data.ts";
import type { RepoConfig, GitHubItem, GitHubRelease } from "../github.ts";
import type { RepoDigest } from "../prompts.ts";
import type { TrendingData } from "../trending.ts";
import type { HnData } from "../hn.ts";
import type { WebFetchResult } from "../web.ts";

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

const cfg: RepoConfig = { id: "test", repo: "org/test", name: "TestTool" };

function makeItem(overrides: Partial<GitHubItem> = {}): GitHubItem {
  return {
    number: 1,
    title: "Issue",
    state: "open",
    user: { login: "alice" },
    labels: [],
    created_at: "2026-03-09T00:00:00Z",
    updated_at: "2026-03-09T12:00:00Z",
    comments: 5,
    reactions: { "+1": 2 },
    body: "body",
    html_url: "https://github.com/org/test/issues/1",
    ...overrides,
  };
}

const release: GitHubRelease = {
  tag_name: "v1.0.0",
  name: "Release 1.0",
  body: "Release notes",
  published_at: "2026-03-09T00:00:00Z",
};

function makeDigest(overrides: Partial<RepoDigest> = {}): RepoDigest {
  return { config: cfg, issues: [], prs: [], releases: [], summary: "Summary", ...overrides };
}

// ---------------------------------------------------------------------------
// buildCliPrompt
// ---------------------------------------------------------------------------

describe("buildCliPrompt", () => {
  it("generates Chinese prompt by default", () => {
    const result = buildCliPrompt(cfg, [makeItem()], [makeItem()], [release], "2026-03-09");
    expect(result).toContain("技术分析师");
    expect(result).toContain("TestTool");
    expect(result).toContain("2026-03-09");
    expect(result).toContain("org/test");
    expect(result).toContain("v1.0.0");
  });

  it("generates English prompt", () => {
    const result = buildCliPrompt(cfg, [makeItem()], [], [], "2026-03-09", "en");
    expect(result).toContain("technical analyst");
    expect(result).toContain("TestTool");
    expect(result).toContain("Hot Issues");
  });

  it("shows 无 when no data", () => {
    const result = buildCliPrompt(cfg, [], [], [], "2026-03-09");
    expect(result).toContain("无");
  });

  it("includes sample notes when items exceed limit", () => {
    const items = Array.from({ length: 50 }, (_, i) => makeItem({ number: i, comments: i }));
    const result = buildCliPrompt(cfg, items, [], [], "2026-03-09");
    expect(result).toContain("共 50 条");
    expect(result).toContain("30 条");
  });
});

// ---------------------------------------------------------------------------
// buildPeerPrompt
// ---------------------------------------------------------------------------

describe("buildPeerPrompt", () => {
  it("includes data overview section", () => {
    const issues = [makeItem({ state: "open" }), makeItem({ state: "closed" })];
    const result = buildPeerPrompt(cfg, issues, [makeItem()], [release], "2026-03-09");
    expect(result).toContain("数据概览");
    expect(result).toContain("新开/活跃: 1");
    expect(result).toContain("已关闭: 1");
  });

  it("generates English prompt", () => {
    const result = buildPeerPrompt(cfg, [], [], [], "2026-03-09", 30, 20, "en");
    expect(result).toContain("Data Overview");
    expect(result).toContain("None");
  });
});

// ---------------------------------------------------------------------------
// buildComparisonPrompt
// ---------------------------------------------------------------------------

describe("buildComparisonPrompt", () => {
  it("includes all digest summaries when they have data", () => {
    const digests = [
      makeDigest({ config: { ...cfg, name: "Tool A" }, summary: "Summary A", issues: [makeItem()] }),
      makeDigest({ config: { ...cfg, name: "Tool B" }, summary: "Summary B", prs: [makeItem()] }),
    ];
    const result = buildComparisonPrompt(digests, "2026-03-09");
    expect(result).toContain("Tool A");
    expect(result).toContain("Summary A");
    expect(result).toContain("Tool B");
    expect(result).toContain("Summary B");
  });

  it("shows no-activity for empty digests", () => {
    const digests = [makeDigest({ summary: "Summary" })]; // no issues/prs/releases
    const result = buildComparisonPrompt(digests, "2026-03-09");
    expect(result).toContain("过去24小时无活动");
  });
});

// ---------------------------------------------------------------------------
// buildPeersComparisonPrompt
// ---------------------------------------------------------------------------

describe("buildPeersComparisonPrompt", () => {
  it("includes openclaw and peer sections", () => {
    const openclawDigest = makeDigest({
      config: { id: "openclaw", repo: "openclaw/openclaw", name: "OpenClaw" },
      summary: "OC summary",
    });
    const peerDigests = [
      makeDigest({ config: { ...cfg, name: "Peer" }, summary: "Peer summary", issues: [makeItem()] }),
    ];
    const result = buildPeersComparisonPrompt(openclawDigest, peerDigests, "2026-03-09");
    expect(result).toContain("OpenClaw（核心参照");
    expect(result).toContain("OC summary");
    expect(result).toContain("Peer summary");
  });
});

// ---------------------------------------------------------------------------
// buildSkillsPrompt
// ---------------------------------------------------------------------------

describe("buildSkillsPrompt", () => {
  it("includes skills repository context", () => {
    const result = buildSkillsPrompt([makeItem()], [makeItem()], "2026-03-09");
    expect(result).toContain("anthropics/skills");
    expect(result).toContain("Claude Code Skills");
  });

  it("generates English variant", () => {
    const result = buildSkillsPrompt([], [], "2026-03-09", "en");
    expect(result).toContain("Claude Code ecosystem");
    expect(result).toContain("None");
  });
});

// ---------------------------------------------------------------------------
// buildTrendingPrompt
// ---------------------------------------------------------------------------

describe("buildTrendingPrompt", () => {
  it("includes trending repos", () => {
    const data: TrendingData = {
      trendingRepos: [
        {
          fullName: "org/repo",
          description: "desc",
          language: "Python",
          todayStars: 100,
          totalStars: 5000,
          forks: 200,
          url: "https://github.com/org/repo",
        },
      ],
      searchRepos: [],
      trendingFetchSuccess: true,
    };
    const result = buildTrendingPrompt(data, "2026-03-09");
    expect(result).toContain("org/repo");
    expect(result).toContain("Python");
    expect(result).toContain("5,000");
    expect(result).toContain("+100 today");
  });

  it("shows fetch failure message when trending fails", () => {
    const data: TrendingData = { trendingRepos: [], searchRepos: [], trendingFetchSuccess: false };
    const result = buildTrendingPrompt(data, "2026-03-09");
    expect(result).toContain("未能抓取");
  });

  it("includes search repos with topic tag", () => {
    const data: TrendingData = {
      trendingRepos: [],
      searchRepos: [
        {
          fullName: "ai/agent",
          description: "An AI agent",
          language: "TypeScript",
          stargazersCount: 1000,
          pushedAt: "2026-03-08",
          url: "https://github.com/ai/agent",
          searchQuery: "ai-agent",
        },
      ],
      trendingFetchSuccess: false,
    };
    const result = buildTrendingPrompt(data, "2026-03-09");
    expect(result).toContain("[topic:ai-agent]");
    expect(result).toContain("1,000");
  });
});

// ---------------------------------------------------------------------------
// buildWebReportPrompt
// ---------------------------------------------------------------------------

describe("buildWebReportPrompt", () => {
  it("includes site sections for first run", () => {
    const results: WebFetchResult[] = [
      {
        site: "anthropic",
        siteName: "Anthropic",
        isFirstRun: true,
        newItems: [
          {
            url: "https://anthropic.com/news/test",
            title: "Test",
            lastmod: "2026-03-09",
            content: "Content",
            site: "anthropic",
            category: "news",
          },
        ],
        totalDiscovered: 50,
      },
    ];
    const result = buildWebReportPrompt(results, "2026-03-09");
    expect(result).toContain("首次全量抓取");
    expect(result).toContain("Anthropic");
    expect(result).toContain("内容格局总览"); // first-run-only section
  });

  it("shows incremental mode for non-first-run", () => {
    const results: WebFetchResult[] = [
      { site: "openai", siteName: "OpenAI", isFirstRun: false, newItems: [], totalDiscovered: 100 },
    ];
    const result = buildWebReportPrompt(results, "2026-03-09");
    expect(result).toContain("增量更新");
    expect(result).not.toContain("内容格局总览");
  });
});

// ---------------------------------------------------------------------------
// buildWeeklyPrompt
// ---------------------------------------------------------------------------

describe("buildWeeklyPrompt", () => {
  it("includes daily digest entries", () => {
    const digests = { "2026-03-03": "Day 1 content", "2026-03-04": "Day 2 content" };
    const result = buildWeeklyPrompt(digests, "2026-W10");
    expect(result).toContain("2026-03-03");
    expect(result).toContain("Day 1 content");
    expect(result).toContain("2026-W10");
    expect(result).toContain("周报");
  });

  it("generates English variant", () => {
    const result = buildWeeklyPrompt({ "2026-03-03": "content" }, "2026-W10", "en");
    expect(result).toContain("weekly recap");
  });
});

// ---------------------------------------------------------------------------
// buildMonthlyPrompt
// ---------------------------------------------------------------------------

describe("buildMonthlyPrompt", () => {
  it("includes source digests and month", () => {
    const digests = { "2026-02-01": "Week 1", "2026-02-08": "Week 2" };
    const result = buildMonthlyPrompt(digests, "2026-02");
    expect(result).toContain("2026-02");
    expect(result).toContain("2 份报告");
    expect(result).toContain("月报");
  });

  it("generates English variant", () => {
    const result = buildMonthlyPrompt({ "2026-02-01": "w1" }, "2026-02", "en");
    expect(result).toContain("monthly review");
  });
});

// ---------------------------------------------------------------------------
// buildHnPrompt
// ---------------------------------------------------------------------------

describe("buildHnPrompt", () => {
  it("includes stories with metadata", () => {
    const data: HnData = {
      stories: [
        {
          id: "123",
          title: "AI News",
          url: "https://example.com/ai",
          hnUrl: "https://news.ycombinator.com/item?id=123",
          points: 200,
          comments: 50,
          author: "bob",
          createdAt: "2026-03-09T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildHnPrompt(data, "2026-03-09");
    expect(result).toContain("AI News");
    expect(result).toContain("分数: 200");
    expect(result).toContain("评论: 50");
    expect(result).toContain("@bob");
    expect(result).toContain("共 1 条");
  });

  it("generates English variant", () => {
    const data: HnData = {
      stories: [
        {
          id: "1",
          title: "Test",
          url: "https://test.com",
          hnUrl: "https://news.ycombinator.com/item?id=1",
          points: 10,
          comments: 2,
          author: "a",
          createdAt: "2026-03-09T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildHnPrompt(data, "2026-03-09", "en");
    expect(result).toContain("Score: 10");
    expect(result).toContain("Comments: 2");
    expect(result).toContain("Hacker News");
  });
});
