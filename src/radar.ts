import type { HnData, HnStory } from "./hn.ts";
import { RADAR_FALLBACK } from "./i18n.ts";
import type { Lang } from "./i18n.ts";

export interface RadarScoreBreakdown {
  points: number;
  comments: number;
  rank: number;
  freshness: number;
}

export interface RadarBaseItem {
  story: HnStory;
  breakdown: RadarScoreBreakdown;
  baseScore: number;
}

export interface RadarEditorialItem {
  id: string;
  relevance: number;
  novelty: number;
  actionability: number;
  summary: Record<Lang, string>;
  reason: Record<Lang, string>;
}

export interface RadarItem extends RadarBaseItem {
  editorialScore: number;
  totalScore: number;
  summary: Record<Lang, string>;
  reason: Record<Lang, string>;
}

export interface RadarData {
  items: RadarItem[];
  top5: RadarItem[];
  mode: "deepseek" | "deterministic";
  scannedCount: number;
  duplicateCount: number;
}

const clamp = (value: number, min: number, max: number): number => Math.min(max, Math.max(min, value));

function logBatchScore(value: number, values: number[], weight: number): number {
  const logs = values.map((entry) => Math.log1p(Math.max(0, entry)));
  const current = Math.log1p(Math.max(0, value));
  const min = Math.min(...logs);
  const max = Math.max(...logs);
  if (max === min) return max === 0 ? 0 : weight;
  return ((current - min) / (max - min)) * weight;
}

export function scoreRadarBase(stories: HnStory[], now: Date): RadarBaseItem[] {
  if (stories.length === 0) return [];
  const points = stories.map((story) => story.points);
  const comments = stories.map((story) => story.comments);
  return stories.map((story) => {
    const rank = clamp(story.hnRank ?? 500, 1, 500);
    const ageHours = Math.max(0, (now.getTime() - new Date(story.createdAt).getTime()) / 3_600_000);
    const breakdown = {
      points: logBatchScore(story.points, points, 25),
      comments: logBatchScore(story.comments, comments, 10),
      rank: 20 * (1 - (rank - 1) / 499),
      freshness: 15 * (1 - clamp(ageHours, 0, 48) / 48),
    };
    return {
      story,
      breakdown,
      baseScore: breakdown.points + breakdown.comments + breakdown.rank + breakdown.freshness,
    };
  });
}

function requireRecord(value: unknown, label: string): Record<string, unknown> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new Error(`${label} must be an object`);
  }
  return value as Record<string, unknown>;
}

function requireScore(value: unknown, label: string): number {
  if (typeof value !== "number" || !Number.isInteger(value) || value < 0 || value > 10) {
    throw new Error(`${label} must be an integer from 0 to 10`);
  }
  return value;
}

function requireText(value: unknown, label: string): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`${label} must be a non-empty string`);
  }
  return value.trim();
}

function requireLocalized(value: unknown, label: string): Record<Lang, string> {
  const record = requireRecord(value, label);
  return {
    zh: requireText(record["zh"], `${label}.zh`),
    en: requireText(record["en"], `${label}.en`),
  };
}

export function validateRadarEditorial(value: unknown, candidateIds: string[]): RadarEditorialItem[] {
  const root = requireRecord(value, "editorial payload");
  if (!Array.isArray(root["items"])) {
    throw new Error("editorial payload.items must be an array");
  }
  if (root["items"].length !== candidateIds.length) {
    throw new Error("editorial payload must contain exactly one item per candidate");
  }

  const expected = new Set(candidateIds);
  const seen = new Set<string>();
  const items = root["items"].map((value, index): RadarEditorialItem => {
    const item = requireRecord(value, `items[${index}]`);
    const id = requireText(item["id"], `items[${index}].id`);
    if (!expected.has(id)) throw new Error(`unknown candidate id: ${id}`);
    if (seen.has(id)) throw new Error(`duplicate candidate id: ${id}`);
    seen.add(id);
    return {
      id,
      relevance: requireScore(item["relevance"], `items[${index}].relevance`),
      novelty: requireScore(item["novelty"], `items[${index}].novelty`),
      actionability: requireScore(item["actionability"], `items[${index}].actionability`),
      summary: requireLocalized(item["summary"], `items[${index}].summary`),
      reason: requireLocalized(item["reason"], `items[${index}].reason`),
    };
  });

  if (seen.size !== expected.size) throw new Error("editorial payload is missing candidate IDs");
  return items;
}

function compareRadarItems(a: RadarItem, b: RadarItem): number {
  return (
    b.totalScore - a.totalScore ||
    (a.story.hnRank ?? Number.POSITIVE_INFINITY) - (b.story.hnRank ?? Number.POSITIVE_INFINITY) ||
    a.story.id.localeCompare(b.story.id, "en", { numeric: true })
  );
}

function fallbackText(story: HnStory): Pick<RadarItem, "summary" | "reason"> {
  return {
    summary: RADAR_FALLBACK.summary(story.title, story.points, story.comments),
    reason: RADAR_FALLBACK.reason,
  };
}

export async function generateRadarData(
  hnData: HnData,
  now: Date,
  loadEditorial: () => Promise<unknown>,
): Promise<RadarData> {
  const baseItems = scoreRadarBase(hnData.stories, now);
  if (baseItems.length === 0) {
    return {
      items: [],
      top5: [],
      mode: "deterministic",
      scannedCount: hnData.scannedCount,
      duplicateCount: hnData.duplicateCount,
    };
  }

  let mode: RadarData["mode"] = "deepseek";
  let editorialById = new Map<string, RadarEditorialItem>();
  try {
    const validated = validateRadarEditorial(
      await loadEditorial(),
      hnData.stories.map((story) => story.id),
    );
    editorialById = new Map(validated.map((item) => [item.id, item]));
  } catch (error) {
    mode = "deterministic";
    console.error("  [radar] Editorial scoring failed; using deterministic fallback:", error);
  }

  const items = baseItems
    .map((base): RadarItem => {
      const editorialItem = editorialById.get(base.story.id);
      if (!editorialItem) {
        return {
          ...base,
          editorialScore: 0,
          totalScore: (base.baseScore / 70) * 100,
          ...fallbackText(base.story),
        };
      }
      const editorialScore = editorialItem.relevance + editorialItem.novelty + editorialItem.actionability;
      return {
        ...base,
        editorialScore,
        totalScore: base.baseScore + editorialScore,
        summary: editorialItem.summary,
        reason: editorialItem.reason,
      };
    })
    .sort(compareRadarItems);

  return {
    items,
    top5: items.slice(0, 5),
    mode,
    scannedCount: hnData.scannedCount,
    duplicateCount: hnData.duplicateCount,
  };
}
