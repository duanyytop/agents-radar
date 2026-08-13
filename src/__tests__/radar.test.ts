import { describe, expect, it } from "vitest";
import type { HnStory } from "../hn.ts";
import { generateRadarData, scoreRadarBase } from "../radar.ts";

const NOW = new Date("2026-08-12T00:00:00.000Z");

function story(id: string, overrides: Partial<HnStory> = {}): HnStory {
  return {
    id,
    hnRank: Number(id),
    title: `AI story ${id}`,
    url: `https://example.com/${id}`,
    hnUrl: `https://news.ycombinator.com/item?id=${id}`,
    points: 0,
    comments: 0,
    author: "author",
    createdAt: NOW.toISOString(),
    ...overrides,
  };
}

describe("scoreRadarBase", () => {
  it("keeps every component inside its declared range", () => {
    const scored = scoreRadarBase(
      [
        story("1", { points: 0, comments: 0, hnRank: 1, createdAt: NOW.toISOString() }),
        story("2", { points: 10_000, comments: 5_000, hnRank: 500, createdAt: "2026-08-09T00:00:00.000Z" }),
      ],
      NOW,
    );
    for (const item of scored) {
      expect(item.breakdown.points).toBeGreaterThanOrEqual(0);
      expect(item.breakdown.points).toBeLessThanOrEqual(25);
      expect(item.breakdown.comments).toBeGreaterThanOrEqual(0);
      expect(item.breakdown.comments).toBeLessThanOrEqual(10);
      expect(item.breakdown.rank).toBeGreaterThanOrEqual(0);
      expect(item.breakdown.rank).toBeLessThanOrEqual(20);
      expect(item.breakdown.freshness).toBeGreaterThanOrEqual(0);
      expect(item.breakdown.freshness).toBeLessThanOrEqual(15);
      expect(item.baseScore).toBeGreaterThanOrEqual(0);
      expect(item.baseScore).toBeLessThanOrEqual(70);
    }
  });

  it("gives equal non-zero batch values equal full popularity components", () => {
    const scored = scoreRadarBase(
      [story("1", { points: 100, comments: 20 }), story("2", { points: 100, comments: 20 })],
      NOW,
    );
    expect(scored.map((item) => item.breakdown.points)).toEqual([25, 25]);
    expect(scored.map((item) => item.breakdown.comments)).toEqual([10, 10]);
  });
});

const editorial = (ids: string[]) => ({
  items: ids.map((id) => ({
    id,
    relevance: 10,
    novelty: 8,
    actionability: 7,
    summary: { zh: `摘要 ${id}`, en: `Summary ${id}` },
    reason: { zh: `理由 ${id}`, en: `Reason ${id}` },
  })),
});

describe("generateRadarData", () => {
  it("calls the bilingual editorial loader exactly once", async () => {
    const stories = [story("1"), story("2")];
    let calls = 0;
    await generateRadarData(
      { stories, fetchSuccess: true, scannedCount: 2, duplicateCount: 0 },
      NOW,
      async () => {
        calls += 1;
        return editorial(["1", "2"]);
      },
    );
    expect(calls).toBe(1);
  });

  it("merges one valid editorial record per candidate and selects five unique items", async () => {
    const stories = Array.from({ length: 6 }, (_, index) => story(String(index + 1), { points: 60 - index }));
    const result = await generateRadarData(
      { stories, fetchSuccess: true, scannedCount: 8, duplicateCount: 2 },
      NOW,
      async () => editorial(stories.map((item) => item.id)),
    );
    expect(result.mode).toBe("deepseek");
    expect(result.top5).toHaveLength(5);
    expect(new Set(result.top5.map((item) => item.story.id)).size).toBe(5);
    expect(result.items.every((item) => item.editorialScore === 25)).toBe(true);
  });

  const validTwo = editorial(["1", "2"]);
  const invalidEditorialPayloads = [
    {
      name: "out-of-range score",
      payload: {
        items: validTwo.items.map((item, index) => (index === 0 ? { ...item, relevance: 11 } : item)),
      },
    },
    {
      name: "non-integer score",
      payload: {
        items: validTwo.items.map((item, index) => (index === 0 ? { ...item, novelty: 7.5 } : item)),
      },
    },
    {
      name: "unknown ID",
      payload: {
        items: validTwo.items.map((item, index) => (index === 0 ? { ...item, id: "unknown" } : item)),
      },
    },
    {
      name: "duplicate ID",
      payload: {
        items: validTwo.items.map((item, index) => (index === 1 ? { ...item, id: "1" } : item)),
      },
    },
    { name: "missing ID", payload: { items: validTwo.items.slice(0, 1) } },
    {
      name: "blank Chinese summary",
      payload: {
        items: validTwo.items.map((item, index) =>
          index === 0 ? { ...item, summary: { ...item.summary, zh: "  " } } : item,
        ),
      },
    },
    {
      name: "missing English summary",
      payload: {
        items: validTwo.items.map((item, index) =>
          index === 0 ? { ...item, summary: { zh: item.summary.zh } } : item,
        ),
      },
    },
    {
      name: "blank Chinese reason",
      payload: {
        items: validTwo.items.map((item, index) =>
          index === 0 ? { ...item, reason: { ...item.reason, zh: "\t" } } : item,
        ),
      },
    },
    {
      name: "missing English reason",
      payload: {
        items: validTwo.items.map((item, index) =>
          index === 0 ? { ...item, reason: { zh: item.reason.zh } } : item,
        ),
      },
    },
  ];

  it.each(invalidEditorialPayloads)("falls back for $name", async ({ payload }) => {
    const stories = [story("1"), story("2")];
    const result = await generateRadarData(
      { stories, fetchSuccess: true, scannedCount: 2, duplicateCount: 0 },
      NOW,
      async () => payload,
    );
    expect(result.mode).toBe("deterministic");
    expect(result.items.every((item) => item.editorialScore === 0)).toBe(true);
    expect(result.items.every((item) => item.totalScore === (item.baseScore / 70) * 100)).toBe(true);
  });

  it("falls back when JSON parsing is represented by a rejected loader", async () => {
    const stories = Array.from({ length: 6 }, (_, index) => story(String(index + 1), { hnRank: 5 }));
    const result = await generateRadarData(
      { stories, fetchSuccess: true, scannedCount: 6, duplicateCount: 0 },
      NOW,
      async () => Promise.reject(new SyntaxError("invalid JSON")),
    );
    expect(result.mode).toBe("deterministic");
    expect(result.top5.map((item) => item.story.id)).toEqual(["1", "2", "3", "4", "5"]);
  });

  it("falls back when a rejection reason cannot be coerced to a string", async () => {
    const result = await generateRadarData(
      {
        stories: [story("1")],
        fetchSuccess: true,
        scannedCount: 1,
        duplicateCount: 0,
      },
      NOW,
      async () => Promise.reject(Object.create(null)),
    );
    expect(result.mode).toBe("deterministic");
    expect(result.items[0]?.editorialScore).toBe(0);
  });

  it("uses exact bilingual deterministic fallback summary and reason copy", async () => {
    const stories = [story("1", { title: "Agent launch", points: 42, comments: 7 })];
    const result = await generateRadarData(
      { stories, fetchSuccess: true, scannedCount: 1, duplicateCount: 0 },
      NOW,
      async () => Promise.reject(new Error("offline")),
    );
    expect(result.items[0]?.summary).toEqual({
      zh: "HN 热门条目：Agent launch（42 分，7 条评论）。",
      en: "HN item: Agent launch (42 points, 7 comments).",
    });
    expect(result.items[0]?.reason).toEqual({
      zh: "基于 HN 排名、热度、讨论度与时效性的确定性推荐。",
      en: "Deterministic recommendation based on HN rank, popularity, discussion, and freshness.",
    });
  });

  it("uses HN rank before a numeric-aware candidate ID tie-breaker", async () => {
    const stories = [
      story("10", { hnRank: 5 }),
      story("2", { hnRank: 5 }),
      story("1", { hnRank: 5 }),
      story("3", { hnRank: 4 }),
    ];
    const result = await generateRadarData(
      { stories, fetchSuccess: true, scannedCount: 4, duplicateCount: 0 },
      NOW,
      async () => Promise.reject(new Error("offline")),
    );
    expect(result.items.map((item) => item.story.id)).toEqual(["3", "1", "2", "10"]);
  });

  it("does not load editorial data when there are no candidates", async () => {
    let loadCount = 0;
    const result = await generateRadarData(
      { stories: [], fetchSuccess: true, scannedCount: 0, duplicateCount: 0 },
      NOW,
      async () => {
        loadCount += 1;
        return editorial([]);
      },
    );
    expect(loadCount).toBe(0);
    expect(result).toEqual({
      items: [],
      top5: [],
      mode: "deterministic",
      scannedCount: 0,
      duplicateCount: 0,
    });
  });
});
