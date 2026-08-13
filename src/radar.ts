import type { HnStory } from "./hn.ts";
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
