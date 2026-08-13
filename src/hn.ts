/**
 * Hacker News AI stories fetched from the official Firebase API.
 */

import { acceptUniqueLink, createLinkDedupeState } from "./link-utils.ts";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface HnStory {
  id: string;
  hnRank?: number;
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
  scannedCount: number;
  duplicateCount: number;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const HN_TOP_STORIES = 30;
const HN_STORIES_TO_SCAN = 500;
const HN_BATCH_SIZE = 50;

const HN_TOPSTORIES_URL = "https://hacker-news.firebaseio.com/v0/topstories.json";
const HN_ITEM_URL = (id: number) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

// ---------------------------------------------------------------------------
// Firebase API types
// ---------------------------------------------------------------------------

interface HnFirebaseItem {
  id: number;
  deleted?: boolean;
  dead?: boolean;
  type?: string;
  by?: string;
  time?: number;
  title?: string;
  url?: string;
  score?: number;
  descendants?: number;
}

const AI_KEYWORD_PATTERNS = [
  /\bai\b/i,
  /\ba\.i\./i,
  /\bllm(s)?\b/i,
  /\bml\b/i,
  /machine learning/i,
  /deep learning/i,
  /neural/i,
  /transformer/i,
  /language model(s)?\b/i,
  /foundation model(s)?\b/i,
  /\brag\b/i,
  /agent(s)?\b/i,
  /openai/i,
  /anthropic/i,
  /claude/i,
  /chatgpt/i,
  /gemini/i,
  /copilot/i,
];

function isAiRelated(item: HnFirebaseItem): boolean {
  const text = `${item.title ?? ""} ${item.url ?? ""}`;
  return AI_KEYWORD_PATTERNS.some((pattern) => pattern.test(text));
}

function toHnStory(item: HnFirebaseItem, hnRank: number): HnStory {
  const id = String(item.id);
  const hnUrl = `https://news.ycombinator.com/item?id=${id}`;

  return {
    id,
    hnRank,
    title: item.title ?? "(untitled)",
    url: item.url ?? hnUrl,
    hnUrl,
    points: item.score ?? 0,
    comments: item.descendants ?? 0,
    author: item.by ?? "unknown",
    createdAt: item.time ? new Date(item.time * 1000).toISOString() : new Date(0).toISOString(),
  };
}

// ---------------------------------------------------------------------------
// Fetch
// ---------------------------------------------------------------------------

export async function fetchHnData(): Promise<HnData> {
  try {
    const topResp = await fetch(HN_TOPSTORIES_URL, {
      headers: { "User-Agent": "agents-radar/1.0" },
    });
    if (!topResp.ok) {
      console.error(`  [hn] topstories: HTTP ${topResp.status}`);
      return { stories: [], fetchSuccess: false, scannedCount: 0, duplicateCount: 0 };
    }

    const topIds = ((await topResp.json()) as number[]).slice(0, HN_STORIES_TO_SCAN);
    const stories: HnStory[] = [];
    const dedupeState = createLinkDedupeState();
    let scannedCount = 0;

    for (let i = 0; i < topIds.length && stories.length < HN_TOP_STORIES; i += HN_BATCH_SIZE) {
      const batchIds = topIds.slice(i, i + HN_BATCH_SIZE);
      scannedCount += batchIds.length;
      const items = await Promise.all(
        batchIds.map(async (id): Promise<HnFirebaseItem | null> => {
          const resp = await fetch(HN_ITEM_URL(id), {
            headers: { "User-Agent": "agents-radar/1.0" },
          });
          if (!resp.ok) {
            console.error(`  [hn] item ${id}: HTTP ${resp.status}`);
            return null;
          }
          return (await resp.json()) as HnFirebaseItem;
        }),
      );

      for (let j = 0; j < items.length && stories.length < HN_TOP_STORIES; j += 1) {
        const item = items[j];
        if (!item || item.deleted || item.dead || item.type !== "story" || !item.title) continue;
        if (!isAiRelated(item)) continue;
        const story = toHnStory(item, i + j + 1);
        if (acceptUniqueLink(story, dedupeState)) stories.push(story);
      }
    }

    console.log(`  [hn] ${stories.length} AI stories (scanned ${topIds.length} topstories)`);
    return {
      stories,
      fetchSuccess: stories.length > 0,
      scannedCount,
      duplicateCount: dedupeState.duplicateCount,
    };
  } catch (err) {
    console.error(`  [hn] fetch failed: ${err}`);
    return { stories: [], fetchSuccess: false, scannedCount: 0, duplicateCount: 0 };
  }
}
