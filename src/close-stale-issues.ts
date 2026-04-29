import { closeStaleIssues } from "./github.ts";

const STALE_DAYS = 7;

async function main(): Promise<void> {
  const closed = await closeStaleIssues(STALE_DAYS);
  console.log(`[close-stale] Closed ${closed} issue(s) older than ${STALE_DAYS} days.`);
}

main().catch((e: unknown) => {
  console.error("[close-stale]", e instanceof Error ? e.message : e);
  process.exit(1);
});
