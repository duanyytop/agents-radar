/**
 * Reddit AI community posts fetched via public JSON endpoints (e.g., r/LocalLLaMA/hot.json).
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface RedditPost {
  id: string;
  title: string;
  url: string; // external URL, or Reddit discussion link if self-post
  redditUrl: string; // always the Reddit discussion link (permalink)
  author: string;
  score: number;
  comments: number;
  subreddit: string;
  createdAt: string;
  postText?: string;
  externalLink?: string;
}

export interface RedditData {
  posts: RedditPost[];
  fetchSuccess: boolean;
}

interface RedditApiResponse {
  data?: {
    children?: Array<{
      data?: {
        id?: string;
        title?: string;
        author?: string;
        selftext?: string;
        removed?: boolean;
        score?: number;
        num_comments?: number;
        permalink?: string;
        is_self?: boolean;
        url?: string;
        created_utc?: number;
        stickied?: boolean;
        subreddit?: string;
      };
    }>;
  };
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const REDDIT_TOP_POSTS = 30;

// ---------------------------------------------------------------------------
// Fetch & Process
// ---------------------------------------------------------------------------

/**
 * Fetches hot posts from specified subreddits, filters, ranks, and returns the top results.
 * @param subreddits List of subreddits to fetch from (defaults to ["LocalLLaMA"])
 */
export async function fetchRedditData(subreddits: string[] = ["LocalLLaMA"]): Promise<RedditData> {
  const targetSubreddits = subreddits.length > 0 ? subreddits : ["LocalLLaMA"];
  const seen = new Map<string, RedditPost & { rankScore: number }>();

  try {
    await Promise.all(
      targetSubreddits.map(async (sub) => {
        try {
          const url = `https://www.reddit.com/r/${sub}/hot.json?limit=50`;
          const resp = await fetch(url, {
            headers: {
              // Use a compliant, unique User-Agent per Reddit API rules to bypass Cloudflare anti-bot block
              "User-Agent": "node:agents-radar:v1.0.0 (by /u/bharatvarma6222)",
            },
          });

          if (!resp.ok) {
            console.error(`  [reddit] r/${sub}: HTTP ${resp.status}`);
            return;
          }

          const raw = (await resp.json()) as RedditApiResponse;
          const children = raw?.data?.children ?? [];

          for (const child of children) {
            const p = child?.data;
            if (!p || !p.id) continue;

            // 1. Filter out deleted or removed posts
            const isDeleted =
              p.author === "[deleted]" || p.selftext === "[deleted]" || p.title === "[deleted]";
            const isRemoved = p.selftext === "[removed]" || p.title === "[removed]" || p.removed === true;
            if (isDeleted || isRemoved) continue;

            // 2. Filter out extremely low-engagement posts (e.g. score < 2)
            const score = p.score ?? 0;
            if (score < 2) continue;

            // 3. Extract properties
            const redditUrl = `https://www.reddit.com${p.permalink}`;
            const externalLink = !p.is_self && p.url && !p.url.includes("reddit.com") ? p.url : undefined;
            const finalUrl = externalLink || redditUrl;
            const comments = p.num_comments ?? 0;
            const createdAt = new Date((p.created_utc ?? Date.now() / 1000) * 1000).toISOString();

            // 4. Calculate ranking score:
            // R = (Upvotes + Comments * 3) / (AgeInHours + 2)^1.5
            // This prioritizes recent highly-discussed posts over old viral posts.
            const ageHours = Math.max(0, (Date.now() - new Date(createdAt).getTime()) / (1000 * 60 * 60));
            const rankScore = (score + comments * 3) / Math.pow(ageHours + 2, 1.5);

            if (!seen.has(p.id)) {
              seen.set(p.id, {
                id: p.id,
                title: p.title || "",
                url: finalUrl,
                redditUrl,
                author: p.author || "",
                score,
                comments,
                subreddit: p.subreddit || sub,
                createdAt,
                postText: p.selftext || undefined,
                externalLink,
                rankScore,
              });
            }
          }
        } catch (err) {
          console.error(`  [reddit] r/${sub} fetch failed: ${err}`);
        }
      }),
    );

    // Sort by rankScore descending and slice top posts
    const sortedPosts = [...seen.values()]
      .sort((a, b) => b.rankScore - a.rankScore)
      .slice(0, REDDIT_TOP_POSTS);

    // Remove the rankScore property for the public interface
    const posts: RedditPost[] = sortedPosts.map(({ rankScore: _rankScore, ...post }) => post);

    console.log(`  [reddit] ${posts.length} posts (from ${seen.size} unique)`);
    return { posts, fetchSuccess: posts.length > 0 };
  } catch (err) {
    console.error(`  [reddit] general fetch failed: ${err}`);
    return { posts: [], fetchSuccess: false };
  }
}
