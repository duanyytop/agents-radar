import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchHnData } from "../hn.ts";

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

describe("fetchHnData", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("preserves Hacker News rank order after filtering AI stories", async () => {
    vi.spyOn(globalThis, "fetch").mockImplementation(async (input) => {
      const url = String(input);

      if (url.endsWith("/topstories.json")) {
        return jsonResponse([101, 102, 103, 104]);
      }

      const id = Number(url.match(/item\/(\d+)\.json$/)?.[1]);
      const items = new Map<number, unknown>([
        [
          101,
          {
            id: 101,
            type: "story",
            by: "alice",
            time: 1_800_000_000,
            title: "Open hardware router",
            score: 500,
            descendants: 20,
            url: "https://example.com/router",
          },
        ],
        [
          102,
          {
            id: 102,
            type: "story",
            by: "bob",
            time: 1_800_000_100,
            title: "A global workspace in language models",
            score: 100,
            descendants: 10,
            url: "https://example.com/language-models",
          },
        ],
        [
          103,
          {
            id: 103,
            type: "story",
            by: "carol",
            time: 1_800_000_200,
            title: "Office suite for AI agents",
            score: 300,
            descendants: 15,
            url: "https://example.com/ai-agents",
          },
        ],
        [
          104,
          {
            id: 104,
            type: "story",
            by: "dave",
            time: 1_800_000_300,
            title: "Ask HN: Favorite terminals",
            score: 400,
            descendants: 30,
            url: "https://example.com/terminals",
          },
        ],
      ]);

      return jsonResponse(items.get(id) ?? null);
    });

    const result = await fetchHnData();

    expect(result.fetchSuccess).toBe(true);
    expect(result.stories.map((story) => story.id)).toEqual(["102", "103"]);
    expect(result.stories.map((story) => story.hnRank)).toEqual([2, 3]);
    expect(result.stories.map((story) => story.points)).toEqual([100, 300]);
    expect(result.scannedCount).toBe(4);
    expect(result.duplicateCount).toBe(0);
  });

  it("returns an unsuccessful result when the topstories request fails", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(jsonResponse({ error: "failed" }, 500));

    const result = await fetchHnData();

    expect(result).toEqual({ stories: [], fetchSuccess: false, scannedCount: 0, duplicateCount: 0 });
  });

  it("continues scanning until it has 30 unique AI links", async () => {
    const ids = Array.from({ length: 32 }, (_, index) => 101 + index);
    vi.spyOn(globalThis, "fetch").mockImplementation(async (input) => {
      const url = String(input);
      if (url.endsWith("/topstories.json")) return jsonResponse(ids);
      const id = Number(url.match(/item\/(\d+)\.json$/)?.[1]);
      const offset = id - 101;
      return jsonResponse({
        id,
        type: "story",
        by: "author",
        time: 1_800_000_000 + offset,
        title: offset === 1 ? "A different AI headline" : `AI story ${offset}`,
        score: 100 - offset,
        descendants: offset,
        url: offset === 1 ? "https://EXAMPLE.com/ai-0?utm_source=hn" : `https://example.com/ai-${offset}`,
      });
    });

    const result = await fetchHnData();
    expect(result.stories).toHaveLength(30);
    expect(result.stories.at(-1)?.id).toBe("131");
    expect(result.duplicateCount).toBe(1);
    expect(result.scannedCount).toBe(32);
  });

  it("keeps the higher-ranked story when normalized titles collide", async () => {
    vi.spyOn(globalThis, "fetch").mockImplementation(async (input) => {
      const url = String(input);
      if (url.endsWith("/topstories.json")) return jsonResponse([301, 302, 303]);
      const id = Number(url.match(/item\/(\d+)\.json$/)?.[1]);
      const items = {
        301: { id: 301, type: "story", title: "AI Launch!", url: "https://example.com/a" },
        302: { id: 302, type: "story", title: "ai launch", url: "https://example.com/b" },
        303: { id: 303, type: "story", title: "AI compiler", url: "https://example.com/c" },
      };
      return jsonResponse(items[id as keyof typeof items]);
    });

    const result = await fetchHnData();
    expect(result.stories.map((story) => story.id)).toEqual(["301", "303"]);
    expect(result.stories.map((story) => story.hnRank)).toEqual([1, 3]);
    expect(result.duplicateCount).toBe(1);
  });

  it("logs one failed item and continues with the remaining batch", async () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    vi.spyOn(globalThis, "fetch").mockImplementation(async (input) => {
      const url = String(input);
      if (url.endsWith("/topstories.json")) return jsonResponse([201, 202]);
      if (url.endsWith("/item/201.json")) return jsonResponse({ error: "failed" }, 503);
      return jsonResponse({
        id: 202,
        type: "story",
        title: "AI compiler",
        url: "https://example.com/compiler",
        score: 10,
        descendants: 2,
      });
    });

    const result = await fetchHnData();
    expect(result.stories.map((story) => story.id)).toEqual(["202"]);
    expect(console.error).toHaveBeenCalledWith("  [hn] item 201: HTTP 503");
  });

  it("isolates a rejected item fetch and keeps successful items from the same batch", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => undefined);
    vi.spyOn(globalThis, "fetch").mockImplementation(async (input) => {
      const url = String(input);
      if (url.endsWith("/topstories.json")) return jsonResponse([401, 402]);
      if (url.endsWith("/item/401.json")) throw new TypeError("fetch failed: secret-token");
      return jsonResponse({
        id: 402,
        type: "story",
        title: "AI compiler",
        url: "https://example.com/compiler",
      });
    });

    const result = await fetchHnData();

    expect(result.stories.map((story) => story.id)).toEqual(["402"]);
    expect(result.scannedCount).toBe(2);
    expect(errorSpy).toHaveBeenCalledWith("  [hn] item 401: request failed");
    expect(errorSpy.mock.calls.flat().join(" ")).not.toContain("secret-token");
  });

  it("isolates a rejected item JSON body and keeps successful items from the same batch", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => undefined);
    vi.spyOn(globalThis, "fetch").mockImplementation(async (input) => {
      const url = String(input);
      if (url.endsWith("/topstories.json")) return jsonResponse([501, 502]);
      if (url.endsWith("/item/501.json")) {
        return {
          ok: true,
          json: () => Promise.reject(new SyntaxError("invalid JSON: secret-body")),
        } as Response;
      }
      return jsonResponse({
        id: 502,
        type: "story",
        title: "AI inference engine",
        url: "https://example.com/inference",
      });
    });

    const result = await fetchHnData();

    expect(result.stories.map((story) => story.id)).toEqual(["502"]);
    expect(result.scannedCount).toBe(2);
    expect(errorSpy).toHaveBeenCalledWith("  [hn] item 501: request failed");
    expect(errorSpy.mock.calls.flat().join(" ")).not.toContain("secret-body");
  });

  it("logs the number of requested items rather than every available topstory", async () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => undefined);
    const ids = Array.from({ length: 60 }, (_, index) => 601 + index);
    vi.spyOn(globalThis, "fetch").mockImplementation(async (input) => {
      const url = String(input);
      if (url.endsWith("/topstories.json")) return jsonResponse(ids);
      const id = Number(url.match(/item\/(\d+)\.json$/)?.[1]);
      return jsonResponse({
        id,
        type: "story",
        title: `AI story ${id}`,
        url: `https://example.com/${id}`,
      });
    });

    const result = await fetchHnData();

    expect(result.scannedCount).toBe(50);
    expect(logSpy).toHaveBeenCalledWith("  [hn] 30 AI stories (scanned 50 topstories)");
  });
});
