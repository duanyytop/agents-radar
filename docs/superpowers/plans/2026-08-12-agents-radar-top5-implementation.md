# Agents Radar Top 5 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 先在 Windows 本机按上游入口复现 `agents-radar`，再新增一个每日抓取最多 30 条唯一 Hacker News AI 链接、可解释打分并固定推荐 Top 5 的中英双语 Radar 报告。

**Architecture:** 保留现有 `fetch → summarize → save → publish` 主流程和全部既有报告，先完成零代码改动的上游基线运行。增强部分在 HN 抓取层完成流式去重，在纯函数模块中完成确定性评分、DeepSeek 结果验证、稳定排序和降级，再通过现有报告保存、manifest、RSS、网页和通知边界接入。

**Tech Stack:** Node.js 24（仅在确认版本问题时切换 Node.js 22）、TypeScript 5.7、pnpm 9.15.9、Vitest 4、DeepSeek OpenAI-compatible API、Hacker News Firebase API、GitHub CLI。

## Global Constraints

- 必须先成功运行上游基线；只有账号、依赖、网络、硬件或外部服务限制被实际确认后，才能启用确定性保真降级。
- 本地基线与首轮 Radar 验证均不得设置 `DIGEST_REPO`，不得创建 GitHub Issues 或推送提交。
- 使用 `pnpm@9.15.9` 和 frozen lockfile；先用 Node.js 24，仅在错误可归因于 Node 版本时切换到上游 CI 使用的 Node.js 22。
- LLM Provider 固定为 `deepseek`；`.env` 只保存 `LLM_PROVIDER=deepseek` 和 `DEEPSEEK_API_KEY`，且不得提交。
- `GITHUB_TOKEN` 不写入 `.env`，只从有效的 `gh auth token` 注入当前进程；日志、测试快照、错误和报告不得包含任何密钥内容。
- 第一版只使用 Hacker News Top Stories；不引入数据库、Docker、浏览器自动化、本地模型或新的运行时依赖。
- 数据充足时输出 30 条唯一候选和恰好 5 条唯一推荐；数据不足时报告实际数量，不伪造、不复制补齐。
- 确定性基础分为 0–70：points 0–25、comments 0–10、HN rank 0–20、freshness 0–15；DeepSeek 编辑分为 0–30：relevance、novelty、actionability 各 0–10。
- DeepSeek 请求失败、429 重试耗尽、JSON 无法修复或结构校验失败时，使用 `baseScore / 70 * 100` 的确定性总分，并仍按稳定规则输出 Top 5。
- 排序键固定为总分降序、原始 HN 排名升序、候选 ID 升序；最终展示分四舍五入到一位小数。
- 不改变既有日报文件名、输出结构或发布行为；自动生成的基线日报与首轮验证日报不进入功能提交。

## File Structure

| File | Responsibility |
| --- | --- |
| `src/link-utils.ts` | URL/标题规范化和可复用的流式去重状态。 |
| `src/hn.ts` | 扫描 HN Top Stories，过滤 AI 条目，遇到重复继续扫描直到最多 30 条唯一链接。 |
| `src/radar.ts` | Radar 类型、基础评分、DeepSeek 结构校验、降级、稳定排序和 Top 5。 |
| `src/prompts-data.ts` | 一次性生成全候选双语编辑评分的结构化 Prompt。 |
| `src/report-builders.ts` | 纯函数构建 `ai-radar.md` / `ai-radar-en.md` 内容。 |
| `src/report-savers.ts` | 保存双语 Radar 文件，并在明确配置 `DIGEST_REPO` 时复用现有 Issue 发布流程。 |
| `src/index.ts` | 发起一次 Radar 编辑评分、处理降级、保存双语报告并纳入 highlights。 |
| `src/i18n.ts` | Radar 标题、段落、模式、Issue、manifest 与通知双语文案。 |
| `src/generate-manifest.ts` | 将 `ai-radar` / `ai-radar-en` 注册到 manifest 和 RSS 白名单。 |
| `index.html` | 将 Radar 注册到现有静态站侧栏标签。 |
| `.env.example`, `README.md` | 补齐 DeepSeek 与 Windows 本地运行说明，不包含真实密钥。 |
| `src/__tests__/link-utils.test.ts` | URL、标题和重复判定单元测试。 |
| `src/__tests__/hn.test.ts` | 去重后继续扫描、单条失败继续和统计字段测试。 |
| `src/__tests__/radar.test.ts` | 评分边界、结构校验、降级、稳定排序和 Top 5 测试。 |
| `src/__tests__/prompt-builders.test.ts` | Radar Prompt 的候选覆盖与 JSON 合同测试。 |
| `src/__tests__/report-builders.test.ts` | 双语报告结构、唯一性和候选不足测试。 |
| `src/__tests__/i18n.test.ts`, `src/__tests__/generate-manifest.test.ts` | 发现面与双语注册回归测试。 |

---

### Task 1: Reproduce the Upstream Baseline Safely

**Files:**
- Read: `package.json`
- Read: `.env.example`
- Runtime output only: `digests/2026-08-12/`
- Runtime log only: `C:\Users\胡宇\agents-radar-baseline-2026-08-12.log`

**Interfaces:**
- Consumes: existing `pnpm start` behavior, a valid GitHub CLI session, and a user-entered DeepSeek key.
- Produces: verified upstream reports and a secret-free baseline log; no source commit.

- [ ] **Step 1: Confirm the repository starts from the approved documents and no unrelated changes**

Run:

```powershell
git status --short --branch
git log -2 --oneline
```

Expected: `master` is ahead of `origin/master` only by the approved design/plan documentation commits; no untracked source changes are present.

- [ ] **Step 2: Activate the package-manager version declared by upstream and install the frozen dependency graph**

Run:

```powershell
corepack pnpm --version
corepack pnpm install --frozen-lockfile
```

Expected: the first command prints `9.15.9`, and installation exits 0 without changing `pnpm-lock.yaml`.

- [ ] **Step 3: Run the upstream quality gates before using credentials**

Run:

```powershell
corepack pnpm format:check
corepack pnpm lint
corepack pnpm typecheck
corepack pnpm test
```

Expected: all four commands exit 0. If any command fails, invoke `superpowers:systematic-debugging`, identify whether the failure is upstream, environment, or Node-version-specific, and do not install arbitrary replacements.

- [ ] **Step 4: Repair GitHub CLI authentication without printing the token**

Run:

```powershell
gh auth status --hostname github.com
```

If the session remains invalid, run:

```powershell
gh auth login --hostname github.com --git-protocol https --web
gh auth status --hostname github.com
```

Expected: GitHub CLI reports an authenticated account. Never run `gh auth token` as a standalone display command.

- [ ] **Step 5: Let the user enter the DeepSeek key in the ignored local file**

Create `C:\Users\胡宇\agents-radar\.env` with exactly these two assignments, entering the real value locally in the editor rather than chat or shell history:

```dotenv
LLM_PROVIDER=deepseek
DEEPSEEK_API_KEY=<the value entered locally by the user>
```

Run:

```powershell
git check-ignore .env
node --env-file=.env -e "if (process.env.LLM_PROVIDER !== 'deepseek' || !process.env.DEEPSEEK_API_KEY) process.exit(1); console.log('DeepSeek environment is present')"
```

Expected: `.env` is ignored and the second command prints only `DeepSeek environment is present`, never the key.

- [ ] **Step 6: Run the exact upstream entry with local-only publishing behavior**

In one PowerShell process, run these lines:

```powershell
$env:GITHUB_TOKEN = gh auth token
Remove-Item Env:DIGEST_REPO -ErrorAction SilentlyContinue
node --env-file=.env --import=tsx src/index.ts 2>&1 | Tee-Object -FilePath 'C:\Users\胡宇\agents-radar-baseline-2026-08-12.log'
```

Expected: exit code 0, final log line `Done!`, provider log `deepseek`, and no `Created ... issue` lines.

- [ ] **Step 7: Verify baseline artifacts and scan the log for credential-shaped strings**

Run:

```powershell
Get-ChildItem 'digests\2026-08-12' -Name
Select-String -Path 'C:\Users\胡宇\agents-radar-baseline-2026-08-12.log' -Pattern 'sk-[A-Za-z0-9_-]{12,}|github_pat_[A-Za-z0-9_]{12,}|gh[pousr]_[A-Za-z0-9]{12,}'
git status --short
git diff --stat
```

Expected: at least `ai-cli.md`, `ai-agents.md`, `ai-infra.md`, `ai-hn.md` and their English variants exist; the secret scan returns no match; changes are limited to expected generated digest/state files. Do not stage or commit these generated files.

### Task 2: Add Canonical Link Identity and Streaming Deduplication

**Files:**
- Create: `src/link-utils.ts`
- Create: `src/__tests__/link-utils.test.ts`

**Interfaces:**
- Consumes: `{ title: string; url: string }` link-like values.
- Produces: `normalizeUrl(rawUrl: string): string`, `normalizeTitle(title: string): string`, `createLinkDedupeState(): LinkDedupeState`, and `acceptUniqueLink(link: LinkLike, state: LinkDedupeState): boolean`.

- [ ] **Step 1: Write failing normalization and duplicate tests**

Create `src/__tests__/link-utils.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import {
  acceptUniqueLink,
  createLinkDedupeState,
  normalizeTitle,
  normalizeUrl,
} from "../link-utils.ts";

describe("normalizeUrl", () => {
  it("normalizes host, ports, fragments, tracking parameters, query order, and trailing slash", () => {
    expect(
      normalizeUrl("HTTPS://Example.COM:443/path/?utm_source=x&b=2&a=1&ref=hn#section"),
    ).toBe("https://example.com/path?a=1&b=2");
  });

  it("keeps the root slash and removes click identifiers", () => {
    expect(normalizeUrl("https://Example.com/?gclid=abc&fbclid=def")).toBe("https://example.com/");
  });
});

describe("normalizeTitle", () => {
  it("folds case, punctuation, unicode width, and whitespace", () => {
    expect(normalizeTitle("  ＡI—Agents:  A New Era! ")).toBe("ai agents a new era");
  });
});

describe("acceptUniqueLink", () => {
  it("rejects either a canonical URL duplicate or a normalized-title duplicate", () => {
    const state = createLinkDedupeState();
    expect(acceptUniqueLink({ title: "Alpha", url: "https://example.com/a?utm_source=hn" }, state)).toBe(true);
    expect(acceptUniqueLink({ title: "Beta", url: "https://EXAMPLE.com/a" }, state)).toBe(false);
    expect(acceptUniqueLink({ title: "ALPHA!", url: "https://example.com/b" }, state)).toBe(false);
    expect(state.duplicateCount).toBe(2);
  });
});
```

- [ ] **Step 2: Run the focused test and verify the missing-module failure**

Run:

```powershell
corepack pnpm vitest run src/__tests__/link-utils.test.ts
```

Expected: FAIL because `../link-utils.ts` does not exist.

- [ ] **Step 3: Implement URL/title normalization and stateful duplicate admission**

Create `src/link-utils.ts`:

```ts
export interface LinkLike {
  title: string;
  url: string;
}

export interface LinkDedupeState {
  seenUrls: Set<string>;
  seenTitles: Set<string>;
  duplicateCount: number;
}

const TRACKING_PARAMS = new Set(["ref", "source", "fbclid", "gclid"]);

export function normalizeUrl(rawUrl: string): string {
  const url = new URL(rawUrl);
  url.hostname = url.hostname.toLowerCase();
  if ((url.protocol === "https:" && url.port === "443") || (url.protocol === "http:" && url.port === "80")) {
    url.port = "";
  }
  url.hash = "";
  for (const key of [...url.searchParams.keys()]) {
    const lower = key.toLowerCase();
    if (lower.startsWith("utm_") || TRACKING_PARAMS.has(lower)) url.searchParams.delete(key);
  }
  url.searchParams.sort();
  if (url.pathname !== "/") url.pathname = url.pathname.replace(/\/+$/, "");
  return url.toString();
}

export function normalizeTitle(title: string): string {
  return title.normalize("NFKC").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}

export function createLinkDedupeState(): LinkDedupeState {
  return { seenUrls: new Set(), seenTitles: new Set(), duplicateCount: 0 };
}

export function acceptUniqueLink(link: LinkLike, state: LinkDedupeState): boolean {
  const urlKey = normalizeUrl(link.url);
  const titleKey = normalizeTitle(link.title);
  if (state.seenUrls.has(urlKey) || state.seenTitles.has(titleKey)) {
    state.duplicateCount += 1;
    return false;
  }
  state.seenUrls.add(urlKey);
  state.seenTitles.add(titleKey);
  return true;
}
```

- [ ] **Step 4: Run the focused test and the type checker**

Run:

```powershell
corepack pnpm vitest run src/__tests__/link-utils.test.ts
corepack pnpm typecheck
```

Expected: both commands exit 0.

- [ ] **Step 5: Commit the independently verified link identity layer**

```powershell
git add src/link-utils.ts src/__tests__/link-utils.test.ts
git commit -m "feat: add canonical link deduplication"
```

### Task 3: Make Hacker News Fill Up to 30 Unique Candidates

**Files:**
- Modify: `src/hn.ts`
- Modify: `src/__tests__/hn.test.ts`
- Modify: `src/index.ts` only for the existing empty `HnData` fallback shape
- Modify: `src/__tests__/prompt-builders.test.ts` only for existing `HnData` fixture shapes

**Interfaces:**
- Consumes: `acceptUniqueLink()` from Task 2 and HN Top Stories in original rank order.
- Produces: `HnData { stories, fetchSuccess, scannedCount, duplicateCount }`, with `stories.length <= 30` and unique canonical URL/title keys.

- [ ] **Step 1: Extend HN tests with statistics, duplicate replacement, and item failure behavior**

Update the existing assertions so every expected `HnData` includes `scannedCount` and `duplicateCount`. Use a 32-item mock where ID 102 duplicates ID 101 after URL normalization, and add these tests:

```ts
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
```

- [ ] **Step 2: Run the HN test and verify it fails on the missing statistics/continued scan**

Run:

```powershell
corepack pnpm vitest run src/__tests__/hn.test.ts
```

Expected: FAIL because `HnData` lacks `scannedCount`/`duplicateCount` and the existing loop stops based on raw accepted AI story count.

- [ ] **Step 3: Add required statistics and stream deduplication to `fetchHnData`**

In `src/hn.ts`, import Task 2 helpers and change the data contract:

```ts
import { acceptUniqueLink, createLinkDedupeState } from "./link-utils.ts";

export interface HnData {
  stories: HnStory[];
  fetchSuccess: boolean;
  scannedCount: number;
  duplicateCount: number;
}
```

Initialize `scannedCount` and `dedupeState`, increment `scannedCount` by each requested batch size, and admit a story only through `acceptUniqueLink`:

```ts
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

return {
  stories,
  fetchSuccess: stories.length > 0,
  scannedCount,
  duplicateCount: dedupeState.duplicateCount,
};
```

Use `{ stories: [], fetchSuccess: false, scannedCount: 0, duplicateCount: 0 }` for top-level failures. Preserve the current per-item error log and HN discussion fallback URL.

- [ ] **Step 4: Update every existing `HnData` fallback/fixture to the new required shape**

In `src/index.ts` change the HN catch fallback to:

```ts
fetchHnData().catch(
  (): HnData => ({ stories: [], fetchSuccess: false, scannedCount: 0, duplicateCount: 0 }),
),
```

In `src/__tests__/prompt-builders.test.ts`, add `scannedCount` and `duplicateCount` to both existing `HnData` fixtures.

- [ ] **Step 5: Run focused tests, type checking, and the full suite**

Run:

```powershell
corepack pnpm vitest run src/__tests__/hn.test.ts src/__tests__/prompt-builders.test.ts
corepack pnpm typecheck
corepack pnpm test
```

Expected: all commands exit 0; the 30-link test proves scanning continues after a duplicate.

- [ ] **Step 6: Commit the HN data-contract and collection change**

```powershell
git add src/hn.ts src/index.ts src/__tests__/hn.test.ts src/__tests__/prompt-builders.test.ts
git commit -m "feat: collect thirty unique HN links"
```

### Task 4: Implement Deterministic Scoring and Stable Top 5

**Files:**
- Create: `src/radar.ts`
- Create: `src/__tests__/radar.test.ts`

**Interfaces:**
- Consumes: `HnStory[]` and a fixed `Date`.
- Produces: the Radar type contracts and `scoreRadarBase(stories: HnStory[], now: Date): RadarBaseItem[]` for Task 5.

- [ ] **Step 1: Write failing tests for base-score boundaries and equal-value batches**

Create `src/__tests__/radar.test.ts` with a `story()` fixture and these assertions:

```ts
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
```

- [ ] **Step 2: Run the focused test and verify the missing-module failure**

Run:

```powershell
corepack pnpm vitest run src/__tests__/radar.test.ts
```

Expected: FAIL because `../radar.ts` does not exist.

- [ ] **Step 3: Define Radar contracts and implement deterministic base scoring**

Create `src/radar.ts` with these public types:

```ts
import type { HnData, HnStory } from "./hn.ts";
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
```

Implement these exact formulas, retaining full floating-point precision:

```ts
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
```

- [ ] **Step 4: Run base-scoring tests and type checking**

Run:

```powershell
corepack pnpm vitest run src/__tests__/radar.test.ts
corepack pnpm typecheck
```

Expected: the two base-score tests pass and TypeScript exits 0.

- [ ] **Step 5: Commit the independently verified deterministic base scorer**

```powershell
git add src/radar.ts src/__tests__/radar.test.ts
git commit -m "feat: add deterministic radar scoring"
```

### Task 5: Validate DeepSeek Editorial Scores and Guarantee Deterministic Fallback

**Files:**
- Modify: `src/radar.ts`
- Modify: `src/__tests__/radar.test.ts`
- Modify: `src/prompts-data.ts`
- Modify: `src/__tests__/prompt-builders.test.ts`

**Interfaces:**
- Consumes: Task 4 base scores and an unknown parsed JSON value produced from one LLM request.
- Produces: `validateRadarEditorial(value: unknown, candidateIds: string[]): RadarEditorialItem[]` and `generateRadarData(hnData: HnData, now: Date, loadEditorial: () => Promise<unknown>): Promise<RadarData>` in either `deepseek` or `deterministic` mode.

- [ ] **Step 1: Add failing tests for valid editorial merging, invalid structures, fallback, and ties**

Add `generateRadarData` to the existing import, then append to `src/__tests__/radar.test.ts`:

```ts
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
        items: validTwo.items.map((item, index) =>
          index === 0 ? { ...item, relevance: 11 } : item,
        ),
      },
    },
    {
      name: "unknown ID",
      payload: {
        items: validTwo.items.map((item, index) =>
          index === 0 ? { ...item, id: "unknown" } : item,
        ),
      },
    },
    {
      name: "missing ID",
      payload: { items: validTwo.items.slice(0, 1) },
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
});
```

- [ ] **Step 2: Add a failing bilingual Radar Prompt contract test**

In `src/__tests__/prompt-builders.test.ts`, import `buildRadarPrompt` and add:

```ts
describe("buildRadarPrompt", () => {
  it("includes every stable candidate ID and the exact bilingual JSON fields", () => {
    const stories = [
      {
        id: "123",
        hnRank: 4,
        title: "AI News",
        url: "https://example.com/ai",
        hnUrl: "https://news.ycombinator.com/item?id=123",
        points: 200,
        comments: 50,
        author: "bob",
        createdAt: "2026-08-11T10:00:00.000Z",
      },
    ];
    const prompt = buildRadarPrompt(stories, "2026-08-12");
    expect(prompt).toContain('"id": "123"');
    expect(prompt).toContain('"relevance"');
    expect(prompt).toContain('"novelty"');
    expect(prompt).toContain('"actionability"');
    expect(prompt).toContain('"summary": { "zh"');
    expect(prompt).toContain('"reason": { "zh"');
    expect(prompt).toContain("Do not change IDs, URLs, points, or comments");
  });
});
```

- [ ] **Step 3: Run both focused tests and verify validation/prompt failures**

Run:

```powershell
corepack pnpm vitest run src/__tests__/radar.test.ts src/__tests__/prompt-builders.test.ts
```

Expected: FAIL because editorial validation, fallback, stable ranking, and `buildRadarPrompt` are not implemented.

- [ ] **Step 4: Implement strict all-candidate validation and stable ranking in `src/radar.ts`**

Implement the complete validator first, then stable ranking and fallback:

```ts
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

export function validateRadarEditorial(
  value: unknown,
  candidateIds: string[],
): RadarEditorialItem[] {
  const root = requireRecord(value, "editorial payload");
  if (!Array.isArray(root["items"])) throw new Error("editorial payload.items must be an array");
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

function fallbackText(story: HnStory): { summary: Record<Lang, string>; reason: Record<Lang, string> } {
  return {
    summary: {
      zh: `HN 热门条目：${story.title}（${story.points} 分，${story.comments} 条评论）。`,
      en: `HN item: ${story.title} (${story.points} points, ${story.comments} comments).`,
    },
    reason: {
      zh: "基于 HN 排名、热度、讨论度与时效性的确定性推荐。",
      en: "Deterministic recommendation based on HN rank, popularity, discussion, and freshness.",
    },
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
    console.error(`  [radar] Editorial scoring failed; using deterministic fallback: ${error}`);
  }

  const items = baseItems
    .map((base): RadarItem => {
      const editorialItem = editorialById.get(base.story.id);
      if (!editorialItem) {
        const text = fallbackText(base.story);
        return {
          ...base,
          editorialScore: 0,
          totalScore: (base.baseScore / 70) * 100,
          ...text,
        };
      }
      const editorialScore =
        editorialItem.relevance + editorialItem.novelty + editorialItem.actionability;
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
```

Expected: the validator rejects the complete payload if even one expected ID is missing, duplicated, unknown, out of range, non-integer, or lacks any bilingual text field.

- [ ] **Step 5: Implement the one-request bilingual Radar Prompt**

In `src/prompts-data.ts`, import `HnStory` and export:

```ts
export function buildRadarPrompt(stories: HnStory[], dateStr: string): string {
  const candidates = stories.map((story) => ({
    id: story.id,
    hnRank: story.hnRank,
    title: story.title,
    url: story.url,
    hnUrl: story.hnUrl,
    points: story.points,
    comments: story.comments,
    createdAt: story.createdAt,
  }));
  return `You are the bilingual editor for an AI information radar dated ${dateStr}.
Score every candidate exactly once. Relevance, novelty, and actionability must each be integers from 0 to 10.
Write one concise Chinese and English summary and recommendation reason per item.
Do not change IDs, URLs, points, or comments. Do not add or omit candidates.

Candidates:
${JSON.stringify(candidates, null, 2)}

Return JSON only with this exact shape:
{
  "items": [
    {
      "id": "123",
      "relevance": 0,
      "novelty": 0,
      "actionability": 0,
      "summary": { "zh": "中文摘要", "en": "English summary" },
      "reason": { "zh": "中文推荐理由", "en": "English recommendation reason" }
    }
  ]
}`;
}
```

- [ ] **Step 6: Run focused tests, type checking, and full regression tests**

Run:

```powershell
corepack pnpm vitest run src/__tests__/radar.test.ts src/__tests__/prompt-builders.test.ts
corepack pnpm typecheck
corepack pnpm test
```

Expected: all commands exit 0, including invalid payload and rejected-loader fallback cases.

- [ ] **Step 7: Commit scoring, editorial validation, and prompt generation together**

```powershell
git add src/radar.ts src/prompts-data.ts src/__tests__/radar.test.ts src/__tests__/prompt-builders.test.ts
git commit -m "feat: score and rank radar candidates"
```

### Task 6: Build and Save Bilingual Radar Reports

**Files:**
- Modify: `src/i18n.ts`
- Modify: `src/report-builders.ts`
- Modify: `src/report-savers.ts`
- Modify: `src/__tests__/report-builders.test.ts`
- Modify: `src/__tests__/i18n.test.ts`

**Interfaces:**
- Consumes: `RadarData`, `utcStr`, `dateStr`, footer, and `Lang`.
- Produces: `buildRadarReportContent(data, utcStr, dateStr, footer, lang): string` and `saveRadarReport(data, utcStr, dateStr, digestRepo, footer, lang): Promise<void>`.

- [ ] **Step 1: Write failing report-builder tests for the full contract**

Add `buildRadarReportContent` to the existing import from `../report-builders.ts`, add `import type { RadarData } from "../radar.ts";`, then insert this fixture and test block:

```ts
function makeRadarData(count: number, mode: RadarData["mode"]): RadarData {
  const items: RadarData["items"] = Array.from({ length: count }, (_, index) => ({
    story: {
      id: String(index + 1),
      hnRank: index + 1,
      title: `AI story ${index + 1}`,
      url: `https://example.com/${index + 1}`,
      hnUrl: `https://news.ycombinator.com/item?id=${index + 1}`,
      points: 100 - index,
      comments: 20 - index,
      author: "author",
      createdAt: "2026-08-11T00:00:00.000Z",
    },
    breakdown: { points: 20, comments: 8, rank: 19, freshness: 10 },
    baseScore: 57,
    editorialScore: mode === "deepseek" ? 25 : 0,
    totalScore: 95 - index,
    summary: { zh: `摘要 ${index + 1}`, en: `Summary ${index + 1}` },
    reason: { zh: `理由 ${index + 1}`, en: `Reason ${index + 1}` },
  }));
  return {
    items,
    top5: items.slice(0, 5),
    mode,
    scannedCount: count + 2,
    duplicateCount: 2,
  };
}

describe("buildRadarReportContent", () => {
  it("renders metadata, exactly five recommendations, and every candidate in Chinese", () => {
    const data = makeRadarData(6, "deepseek");
    const result = buildRadarReportContent(data, "2026-08-12 00:00", "2026-08-12", "\nfooter", "zh");
    expect(result).toContain("# AI 信息雷达 2026-08-12");
    expect(result).toContain("扫描 8 条");
    expect(result).toContain("候选 6 条");
    expect(result).toContain("去重 2 条");
    expect(result).toContain("DeepSeek 编辑评分");
    expect((result.match(/^### \d+\./gm) ?? [])).toHaveLength(5);
    expect((result.match(/^\| \d+ \|/gm) ?? [])).toHaveLength(6);
    expect(new Set(data.top5.map((item) => item.story.url)).size).toBe(5);
    for (const item of data.top5) {
      expect(result.split(item.story.url)).toHaveLength(3);
    }
  });

  it("marks deterministic mode and renders all available items when fewer than five exist", () => {
    const data = makeRadarData(3, "deterministic");
    const result = buildRadarReportContent(data, "2026-08-12 00:00", "2026-08-12", "", "en");
    expect(result).toContain("# AI Information Radar 2026-08-12");
    expect(result).toContain("Deterministic fallback");
    expect(result).toContain("Only 3 candidates were available");
    expect((result.match(/^### \d+\./gm) ?? [])).toHaveLength(3);
  });
});
```

- [ ] **Step 2: Add failing i18n assertions for titles, Issue labels, manifest labels, and notifications**

Import `RADAR_REPORT` and assert:

```ts
expect(RADAR_REPORT.title.zh).toBe("AI 信息雷达");
expect(RADAR_REPORT.title.en).toBe("AI Information Radar");
expect(ISSUE_LABELS.radar.zh).toBe("radar");
expect(ISSUE_LABELS.radar.en).toBe("radar-en");
expect(REPORT_LABELS["ai-radar"]).toBe("AI 信息雷达");
expect(REPORT_LABELS["ai-radar-en"]).toBe("AI Information Radar");
expect(NOTIFY_LABELS["ai-radar"]?.zh).toBe("Top 5 信息雷达");
```

- [ ] **Step 3: Run focused tests and verify missing exports/labels**

Run:

```powershell
corepack pnpm vitest run src/__tests__/report-builders.test.ts src/__tests__/i18n.test.ts
```

Expected: FAIL because Radar i18n and report builder are absent.

- [ ] **Step 4: Add centralized Radar strings and discovery labels**

In `src/i18n.ts`, add the complete Radar copy object next to `HN_REPORT`:

```ts
export const RADAR_REPORT = {
  title: t("AI 信息雷达", "AI Information Radar"),
  source: t("数据来源: Hacker News Top Stories", "Source: Hacker News Top Stories"),
  mode: {
    deepseek: t("DeepSeek 编辑评分", "DeepSeek editorial scoring"),
    deterministic: t("确定性降级模式", "Deterministic fallback"),
  },
  meta: (
    scanned: number,
    candidates: number,
    duplicates: number,
    mode: string,
    utcStr: string,
    lang: Lang,
  ) =>
    lang === "en"
      ? `> Source: Hacker News Top Stories | Scanned ${scanned} | Candidates ${candidates} | Duplicates ${duplicates} | Scoring: ${mode} | Generated: ${utcStr} UTC`
      : `> 数据来源: Hacker News Top Stories | 扫描 ${scanned} 条 | 候选 ${candidates} 条 | 去重 ${duplicates} 条 | 评分模式: ${mode} | 生成时间: ${utcStr} UTC`,
  top5: t("今日 Top 5", "Today's Top 5"),
  allCandidates: t("全部候选", "All Candidates"),
  reason: t("推荐理由", "Why it is recommended"),
  discussion: t("HN 讨论", "HN discussion"),
  tableHeader: t(
    "| 排名 | 标题 | 总分 | Points | Comments | 发布时间 | 摘要 |",
    "| Rank | Title | Score | Points | Comments | Published | Summary |",
  ),
  tableAlign: "| ---: | :--- | ---: | ---: | ---: | :--- | :--- |",
  insufficient: (count: number, lang: Lang) =>
    lang === "en"
      ? `Only ${count} candidates were available; no duplicate items were added.`
      : `当前仅有 ${count} 条候选，未使用重复条目补齐。`,
  issueTitle: (dateStr: string, lang: Lang) =>
    lang === "en" ? `📡 AI Information Radar ${dateStr}` : `📡 AI 信息雷达 ${dateStr}`,
} as const;
```

Add:

```ts
radar: t("radar", "radar-en"),
```

to `ISSUE_LABELS`, add `ai-radar`/`ai-radar-en` to `REPORT_LABELS`, and add:

```ts
"ai-radar": t("Top 5 信息雷达", "Top 5 Radar"),
```

to `NOTIFY_LABELS`.

- [ ] **Step 5: Implement pure Markdown rendering with stable row numbers and one-decimal scores**

In `src/report-builders.ts`, import `RadarData` and `RADAR_REPORT`, then add:

```ts
function escapeRadarTable(value: string): string {
  return value.replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();
}

export function buildRadarReportContent(
  data: RadarData,
  utcStr: string,
  dateStr: string,
  footer: string,
  lang: Lang = "zh",
): string {
  const mode = RADAR_REPORT.mode[data.mode][lang];
  const recommendations = data.top5
    .map(
      (item, index) =>
        `### ${index + 1}. [${item.story.title}](${item.story.url}) — ${item.totalScore.toFixed(1)}\n\n` +
        `**${RADAR_REPORT.reason[lang]}:** ${item.reason[lang]}\n\n` +
        `[${RADAR_REPORT.discussion[lang]}](${item.story.hnUrl})`,
    )
    .join("\n\n");

  const rows = data.items
    .map(
      (item, index) =>
        `| ${index + 1} | [${escapeRadarTable(item.story.title)}](${item.story.url}) | ` +
        `${item.totalScore.toFixed(1)} | ${item.story.points} | ${item.story.comments} | ` +
        `${escapeRadarTable(item.story.createdAt)} | ${escapeRadarTable(item.summary[lang])} |`,
    )
    .join("\n");

  const insufficient =
    data.items.length < 5 ? `${RADAR_REPORT.insufficient(data.items.length, lang)}\n\n` : "";

  return (
    `# ${RADAR_REPORT.title[lang]} ${dateStr}\n\n` +
    RADAR_REPORT.meta(
      data.scannedCount,
      data.items.length,
      data.duplicateCount,
      mode,
      utcStr,
      lang,
    ) +
    `\n\n---\n\n## ${RADAR_REPORT.top5[lang]}\n\n` +
    insufficient +
    recommendations +
    `\n\n---\n\n## ${RADAR_REPORT.allCandidates[lang]}\n\n` +
    RADAR_REPORT.tableHeader[lang] +
    "\n" +
    RADAR_REPORT.tableAlign +
    "\n" +
    rows +
    footer
  );
}
```

This uses original article links in titles, HN discussion links in Top 5, one-decimal display scores, every sorted candidate exactly once, and the existing footer unchanged.

- [ ] **Step 6: Add the saver wrapper without another LLM request**

In `src/report-savers.ts`, import `RadarData`, `buildRadarReportContent`, and `RADAR_REPORT`. Export:

```ts
export async function saveRadarReport(
  data: RadarData,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
  lang: Lang = "zh",
): Promise<void> {
  if (data.items.length === 0) {
    console.log(`  [radar/${lang}] No data available, skipping report.`);
    return;
  }
  const fileName = lang === "en" ? "ai-radar-en.md" : "ai-radar.md";
  const content = buildRadarReportContent(data, utcStr, dateStr, footer, lang);
  console.log(`  Saved ${saveFile(content, dateStr, fileName)}`);
  if (digestRepo) {
    const url = await createGitHubIssue(
      RADAR_REPORT.issueTitle(dateStr, lang),
      content,
      ISSUE_LABELS.radar[lang],
    );
    console.log(`  Created Radar issue (${lang}): ${url}`);
  }
}
```

- [ ] **Step 7: Run focused tests, type checking, and the full suite**

Run:

```powershell
corepack pnpm vitest run src/__tests__/report-builders.test.ts src/__tests__/i18n.test.ts
corepack pnpm typecheck
corepack pnpm test
```

Expected: all commands exit 0 and both languages render the same ranked candidate IDs.

- [ ] **Step 8: Commit report rendering and saving**

```powershell
git add src/i18n.ts src/report-builders.ts src/report-savers.ts src/__tests__/report-builders.test.ts src/__tests__/i18n.test.ts
git commit -m "feat: render bilingual radar reports"
```

### Task 7: Integrate One Radar Editorial Call into the Existing Main Flow

**Files:**
- Modify: `src/index.ts`
- Modify: `src/__tests__/radar.test.ts`

**Interfaces:**
- Consumes: `buildRadarPrompt`, `callLlm`, `parseLlmJson`, `generateRadarData`, and `saveRadarReport`.
- Produces: exactly one bilingual Radar editorial request per run, two local files, and `ai-radar` highlights input; failures stay isolated to deterministic Radar mode.

- [ ] **Step 1: Add an orchestration-focused test proving the editorial loader runs once**

In `src/__tests__/radar.test.ts`, add:

```ts
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
```

- [ ] **Step 2: Run the focused test to lock the one-call contract**

Run:

```powershell
corepack pnpm vitest run src/__tests__/radar.test.ts
```

Expected: PASS before integration, establishing the function contract that `index.ts` must use once rather than once per language.

- [ ] **Step 3: Import the Radar pipeline and create one shared promise after fetch**

In `src/index.ts`, add imports for `buildRadarPrompt`, `generateRadarData`, and `saveRadarReport`. Immediately after `fetchAllData` resolves, create:

```ts
const radarDataPromise = generateRadarData(hnData, now, async () => {
  console.log("  [radar] Calling LLM for bilingual editorial scoring...");
  const raw = await callLlm(buildRadarPrompt(hnData.stories, dateStr), LLM_TOKENS_LISTING);
  return parseLlmJson<unknown>(raw);
});
```

Also import `LLM_TOKENS_LISTING` from `report.ts`. `generateRadarData` must be called even when the LLM fails so deterministic output remains available.

- [ ] **Step 4: Await Radar once and save both languages with the existing report batch**

Before the report-saving `Promise.all`, await `radarDataPromise` once:

```ts
const radarData = await radarDataPromise;
```

Add both saver calls to the existing save batch:

```ts
saveRadarReport(radarData, utcStr, dateStr, digestRepo, autoGenFooter("zh"), "zh"),
saveRadarReport(radarData, utcStr, dateStr, digestRepo, autoGenFooter("en"), "en"),
```

This preserves all current save calls and does not replace `ai-hn`.

- [ ] **Step 5: Include Radar files in both highlights input maps**

Add this tuple to the existing `readReport` loop:

```ts
["ai-radar", "ai-radar.md", "ai-radar-en.md"],
```

Expected: notification highlights can include Radar without changing the highlights JSON schema.

- [ ] **Step 6: Run type checking and the full regression suite**

Run:

```powershell
corepack pnpm typecheck
corepack pnpm test
```

Expected: both exit 0; existing report tests remain unchanged in behavior.

- [ ] **Step 7: Commit main-flow integration**

```powershell
git add src/index.ts src/__tests__/radar.test.ts
git commit -m "feat: integrate radar into daily digest"
```

### Task 8: Register Radar in Manifest, RSS, Static Web UI, and Notifications

**Files:**
- Modify: `src/generate-manifest.ts`
- Modify: `src/__tests__/generate-manifest.test.ts`
- Modify: `index.html`
- Modify: `src/__tests__/notify.test.ts`
- Modify: `src/__tests__/feishu.test.ts`

**Interfaces:**
- Consumes: generated `ai-radar.md` / `ai-radar-en.md` and `NOTIFY_LABELS["ai-radar"]` from Task 6.
- Produces: sidebar labels, manifest/RSS discovery, Telegram links, and Feishu links.

- [ ] **Step 1: Export the report whitelist and add a failing registration test**

Change the declaration to `export const REPORT_FILES: readonly string[] = [`; then in `src/__tests__/generate-manifest.test.ts` import it and add:

```ts
it("registers both Radar language files in manifest order", () => {
  const zhIndex = REPORT_FILES.indexOf("ai-radar");
  expect(zhIndex).toBeGreaterThan(-1);
  expect(REPORT_FILES[zhIndex + 1]).toBe("ai-radar-en");
});
```

Run:

```powershell
corepack pnpm vitest run src/__tests__/generate-manifest.test.ts
```

Expected: FAIL until the two Radar IDs are added to `REPORT_FILES`.

- [ ] **Step 2: Register both report IDs after the existing HN pair**

In `src/generate-manifest.ts`, place:

```ts
"ai-radar",
"ai-radar-en",
```

immediately after `"ai-hn-en"`. This causes both manifest and RSS generation to pick them up without a parallel discovery path.

- [ ] **Step 3: Register visible static-site labels**

In the `LABELS` object in `index.html`, place:

```js
'ai-radar':       'Top 5 信息雷达',
'ai-radar-en':    'Top 5 Radar',
```

immediately after the HN labels. No route or rendering code change is needed because the site already loads IDs from `manifest.json`.

- [ ] **Step 4: Add Telegram and Feishu link assertions**

In `src/__tests__/notify.test.ts`, add:

```ts
it("renders Radar bilingual links", () => {
  const msg = buildMessage("2026-08-12", ["ai-radar", "ai-radar-en"], BASE_URL);
  expect(msg).toContain("Top 5 信息雷达");
  expect(msg).toContain("#2026-08-12/ai-radar-en");
});
```

In `src/__tests__/feishu.test.ts`, add the equivalent test using `buildFeishuMessage` and the same two assertions.

- [ ] **Step 5: Run discovery and notification regression tests**

Run:

```powershell
corepack pnpm vitest run src/__tests__/generate-manifest.test.ts src/__tests__/notify.test.ts src/__tests__/feishu.test.ts src/__tests__/i18n.test.ts
corepack pnpm typecheck
```

Expected: all commands exit 0.

- [ ] **Step 6: Commit all discovery surfaces together**

```powershell
git add src/generate-manifest.ts src/__tests__/generate-manifest.test.ts index.html src/__tests__/notify.test.ts src/__tests__/feishu.test.ts
git commit -m "feat: publish radar across discovery surfaces"
```

### Task 9: Document DeepSeek Local Use and Perform Final Verification

**Files:**
- Modify: `.env.example`
- Modify: `README.md`
- Verify: all source and test files changed in Tasks 2–8
- Runtime output only: `digests/2026-08-12/ai-radar.md`
- Runtime output only: `digests/2026-08-12/ai-radar-en.md`

**Interfaces:**
- Consumes: complete Radar pipeline and the valid local credentials established in Task 1.
- Produces: newcomer-safe setup documentation and fresh proof of 30 unique candidates / 5 unique recommendations in both normal and simulated-failure paths.

- [ ] **Step 1: Update the environment example without a live secret**

Replace `.env.example` with:

```dotenv
# Choose one LLM provider and set only its required key.
LLM_PROVIDER=deepseek
DEEPSEEK_API_KEY=sk-xxxxx

# Alternative providers:
# LLM_PROVIDER=anthropic
# ANTHROPIC_API_KEY=sk-ant-xxxxx
# LLM_PROVIDER=openai
# OPENAI_API_KEY=sk-xxxxx
```

- [ ] **Step 2: Add DeepSeek and safe Windows local-run instructions to README**

Update the provider tables to include `deepseek`, `DEEPSEEK_API_KEY`, and default model `deepseek-v4-flash`. In “Running locally”, add a PowerShell example using:

```powershell
corepack pnpm install --frozen-lockfile
$env:GITHUB_TOKEN = gh auth token
Remove-Item Env:DIGEST_REPO -ErrorAction SilentlyContinue
node --env-file=.env --import=tsx src/index.ts
```

Document that `.env` contains the DeepSeek provider/key only, `GITHUB_TOKEN` stays process-local, omitting `DIGEST_REPO` prevents Issue creation, and the new outputs are `ai-radar.md` / `ai-radar-en.md` with up to 30 unique candidates and Top 5 recommendations.

- [ ] **Step 3: Run formatting, lint, type checking, and all tests from a fresh command prompt**

Run:

```powershell
corepack pnpm format
corepack pnpm format:check
corepack pnpm lint
corepack pnpm typecheck
corepack pnpm test
```

Expected: every command exits 0. Review `git diff` after formatting so only intended files changed.

- [ ] **Step 4: Run the full application once with DeepSeek and publishing disabled**

Run in one PowerShell process:

```powershell
$env:GITHUB_TOKEN = gh auth token
Remove-Item Env:DIGEST_REPO -ErrorAction SilentlyContinue
node --env-file=.env --import=tsx src/index.ts
```

Expected: exit code 0; `digests/2026-08-12/ai-radar.md` and `ai-radar-en.md` exist; mode is DeepSeek unless the external service actually fails; no Issue creation log appears.

- [ ] **Step 5: Verify real report invariants without relying on visual inspection alone**

Run:

```powershell
Select-String -Path 'digests\2026-08-12\ai-radar.md' -Pattern '^### [1-5]\.'
Select-String -Path 'digests\2026-08-12\ai-radar.md' -Pattern '^\| [0-9]+ \|'
Select-String -Path 'digests\2026-08-12\ai-radar-en.md' -Pattern '^### [1-5]\.'
```

Expected when HN supplies enough AI stories: five Top headings and thirty candidate table rows in Chinese, five Top headings in English. Manually compare the linked URLs in Top 5 against the candidate table and confirm all five are unique. If HN supplies fewer than 30, accept the actual unique count only when the metadata reports the same count.

- [ ] **Step 6: Prove the deterministic fallback with the automated failure-path test**

Run:

```powershell
corepack pnpm vitest run src/__tests__/radar.test.ts -t "falls back when JSON parsing is represented by a rejected loader"
```

Expected: PASS with stable IDs `1` through `5` and no network call.

- [ ] **Step 7: Audit secrets, generated artifacts, and source diff before committing docs**

Run:

```powershell
git status --short
git diff --check
git diff --stat
git grep -n -E 'sk-[A-Za-z0-9_-]{12,}|github_pat_[A-Za-z0-9_]{12,}|gh[pousr]_[A-Za-z0-9]{12,}' -- ':!pnpm-lock.yaml'
```

Expected: `git diff --check` exits 0; secret scan returns no live credential; generated digest/state files remain unstaged and are excluded from the feature commit.

- [ ] **Step 8: Commit documentation only after all verification evidence is fresh**

```powershell
git add .env.example README.md
git commit -m "docs: explain DeepSeek radar setup"
```

- [ ] **Step 9: Perform final branch verification and request code review**

Run:

```powershell
corepack pnpm format:check
corepack pnpm lint
corepack pnpm typecheck
corepack pnpm test
git status --short --branch
```

Expected: all quality gates exit 0. Generated local reports may remain unstaged for user inspection; source, test, and documentation changes are committed. Invoke `superpowers:requesting-code-review`, fix only evidence-backed findings, rerun this verification, then invoke `superpowers:finishing-a-development-branch` for the handoff decision.
