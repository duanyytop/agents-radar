import { describe, expect, it } from "vitest";
import type { HnStory } from "../hn.ts";
import { scoreRadarBase } from "../radar.ts";

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
