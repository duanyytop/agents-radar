/**
 * LLM invocation, file I/O, and GitHub issue creation helpers.
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "node:fs";
import path from "node:path";

const MODEL = process.env["ANTHROPIC_MODEL"] ?? "claude-sonnet-4-6";

// ---------------------------------------------------------------------------
// LLM
// ---------------------------------------------------------------------------

export async function callLlm(prompt: string): Promise<string> {
  // Reads ANTHROPIC_API_KEY and ANTHROPIC_BASE_URL from env automatically
  const client = new Anthropic();
  const message = await client.messages.create({
    model: MODEL,
    max_tokens: 4096,
    messages: [{ role: "user", content: prompt }],
  });
  const block = message.content[0];
  if (block?.type !== "text") throw new Error("Unexpected response type from LLM");
  return block.text;
}

// ---------------------------------------------------------------------------
// File output
// ---------------------------------------------------------------------------

export function saveFile(content: string, ...segments: string[]): string {
  const filepath = path.join("digests", ...segments);
  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, content, "utf-8");
  return filepath;
}

export function autoGenFooter(): string {
  const digestRepo = process.env["DIGEST_REPO"] ?? "";
  return digestRepo
    ? `\n\n---\n*本日报由 [agents-radar](https://github.com/${digestRepo}) 自动生成。*`
    : "";
}
