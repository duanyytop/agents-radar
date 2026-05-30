import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { fetchRedditData } from "../reddit.ts";

describe("fetchRedditData", () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    vi.useFakeTimers();
    // Enforce a stable current time: 2026-03-09T12:00:00Z
    vi.setSystemTime(new Date("2026-03-09T12:00:00Z"));
  });

  afterEach(() => {
    global.fetch = originalFetch;
    vi.useRealTimers();
  });

  it("successfully fetches, filters, and ranks reddit posts", async () => {
    const mockResponse = {
      data: {
        children: [
          {
            data: {
              id: "post1",
              title: "Normal Active Post",
              author: "user1",
              score: 100,
              num_comments: 50,
              subreddit: "LocalLLaMA",
              permalink: "/r/LocalLLaMA/comments/post1",
              is_self: true,
              created_utc: 1773057600, // 2026-03-09T12:00:00Z (0 hours ago)
            },
          },
          {
            data: {
              id: "post2",
              title: "[deleted]", // Deleted title
              author: "user2",
              score: 50,
              num_comments: 10,
              subreddit: "LocalLLaMA",
              permalink: "/r/LocalLLaMA/comments/post2",
              is_self: true,
              created_utc: 1773054000, // 2026-03-09T11:00:00Z (1 hour ago)
            },
          },
          {
            data: {
              id: "post3",
              title: "Deleted Author Post",
              author: "[deleted]", // Deleted author
              score: 150,
              num_comments: 30,
              subreddit: "LocalLLaMA",
              permalink: "/r/LocalLLaMA/comments/post3",
              is_self: true,
              created_utc: 1773050400, // 2026-03-09T10:00:00Z (2 hours ago)
            },
          },
          {
            data: {
              id: "post4",
              title: "Low Engagement Post",
              author: "user4",
              score: 1, // score < 2
              num_comments: 0,
              subreddit: "LocalLLaMA",
              permalink: "/r/LocalLLaMA/comments/post4",
              is_self: true,
              created_utc: 1773057600,
            },
          },
          {
            data: {
              id: "post5",
              title: "Highly Discussed Older Post",
              author: "user5",
              score: 120,
              num_comments: 80,
              subreddit: "LocalLLaMA",
              permalink: "/r/LocalLLaMA/comments/post5",
              is_self: false,
              url: "https://github.com/org/project",
              created_utc: 1773043200, // 2026-03-09T08:00:00Z (4 hours ago)
            },
          },
        ],
      },
    };

    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      } as Response),
    );

    const result = await fetchRedditData(["LocalLLaMA"]);

    expect(result.fetchSuccess).toBe(true);
    expect(result.posts.length).toBe(2); // Only post1 and post5 pass filters

    // Verify properties of mapped posts
    const post1 = result.posts.find((p) => p.id === "post1");
    expect(post1).toBeDefined();
    expect(post1!.title).toBe("Normal Active Post");
    expect(post1!.redditUrl).toBe("https://www.reddit.com/r/LocalLLaMA/comments/post1");
    expect(post1!.url).toBe("https://www.reddit.com/r/LocalLLaMA/comments/post1"); // self post
    expect(post1!.author).toBe("user1");
    expect(post1!.score).toBe(100);
    expect(post1!.comments).toBe(50);
    expect(post1!.subreddit).toBe("LocalLLaMA");
    expect(post1!.createdAt).toBe("2026-03-09T12:00:00.000Z");

    const post5 = result.posts.find((p) => p.id === "post5");
    expect(post5).toBeDefined();
    expect(post5!.title).toBe("Highly Discussed Older Post");
    expect(post5!.redditUrl).toBe("https://www.reddit.com/r/LocalLLaMA/comments/post5");
    expect(post5!.url).toBe("https://github.com/org/project"); // external link
    expect(post5!.externalLink).toBe("https://github.com/org/project");

    // Let's verify ranking order.
    // post1 ageHours = 0.
    // score + comments * 3 = 100 + 50 * 3 = 250
    // rankScore(post1) = 250 / Math.pow(0 + 2, 1.5) = 250 / 2.828 = 88.4
    //
    // post5 ageHours = 4.
    // score + comments * 3 = 120 + 80 * 3 = 360
    // rankScore(post5) = 360 / Math.pow(4 + 2, 1.5) = 360 / 14.697 = 24.5
    //
    // Thus post1 (88.4) should rank before post5 (24.5)
    expect(result.posts[0]!.id).toBe("post1");
    expect(result.posts[1]!.id).toBe("post5");
  });

  it("handles fetch failure gracefully", async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        status: 500,
      } as Response),
    );

    const result = await fetchRedditData(["LocalLLaMA"]);
    expect(result.fetchSuccess).toBe(false);
    expect(result.posts.length).toBe(0);
  });
});
