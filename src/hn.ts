/**
 * Hacker News AI stories fetched via the Algolia HN Search API.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface HnStory {
  id: string;
  title: string;
  url: string; // external URL, or HN discussion link if no external URL
  hnUrl: string; // always the HN discussion link
  points: number;
  comments: number;
  author: string;
  createdAt: string;
}

export interface HnData {
  stories: HnStory[];
  fetchSuccess: boolean;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const HN_TOP_STORIES = 30;

/** Queries run in parallel; results are deduped by story ID. */
const QUERIES = ["AI", "LLM", "Claude", "OpenAI", "Anthropic", "machine learning"];

// ---------------------------------------------------------------------------
// Algolia API types
// ---------------------------------------------------------------------------

interface AlgoliaHit {
  objectID: string;
  title: string;
  url?: string;
  points: number;
  num_comments: number;
  author: string;
  created_at: string;
}

interface AlgoliaResponse {
  hits: AlgoliaHit[];
}

// ---------------------------------------------------------------------------
// Fetch
// ---------------------------------------------------------------------------

export async function fetchHnData(): Promise<HnData> {
  const since = Math.floor((Date.now() - 24 * 60 * 60 * 1000) / 1000);
  const seen = new Map<string, HnStory>();

  try {
    await Promise.all(
      QUERIES.map(async (q) => {
        try {
          const url =
            `https://hn.algolia.com/api/v1/search_by_date` +
            `?tags=story` +
            `&query=${encodeURIComponent(q)}` +
            `&numericFilters=created_at_i>${since}` +
            `&hitsPerPage=30`;
          const resp = await fetch(url, {
            headers: { "User-Agent": "agents-radar/1.0" },
          });
          if (!resp.ok) {
            console.error(`  [hn] "${q}": HTTP ${resp.status}`);
            return;
          }
          const data = (await resp.json()) as AlgoliaResponse;
          for (const hit of data.hits ?? []) {
            if (!seen.has(hit.objectID)) {
              const hnUrl = `https://news.ycombinator.com/item?id=${hit.objectID}`;
              seen.set(hit.objectID, {
                id: hit.objectID,
                title: hit.title,
                url: hit.url ?? hnUrl,
                hnUrl,
                points: hit.points ?? 0,
                comments: hit.num_comments ?? 0,
                author: hit.author,
                createdAt: hit.created_at,
              });
            }
          }
        } catch (err) {
          console.error(`  [hn] "${q}": ${err}`);
        }
      }),
    );

    const stories = [...seen.values()].sort((a, b) => b.points - a.points).slice(0, HN_TOP_STORIES);

    console.log(`  [hn] ${stories.length} stories (from ${seen.size} unique)`);
    return { stories, fetchSuccess: stories.length > 0 };
  } catch (err) {
    console.error(`  [hn] fetch failed: ${err}`);
    return { stories: [], fetchSuccess: false };
  }
}
