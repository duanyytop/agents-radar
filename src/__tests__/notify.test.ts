import { describe, it, expect, afterEach } from "vitest";
import { buildMessage, type Highlights } from "../notify.ts";

const BASE_URL = "https://example.com/radar";

describe("buildMessage", () => {
  const origPagesUrl = process.env["PAGES_URL"];

  afterEach(() => {
    if (origPagesUrl !== undefined) {
      process.env["PAGES_URL"] = origPagesUrl;
    } else {
      delete process.env["PAGES_URL"];
    }
  });

  it("builds a daily message with zh + en reports", () => {
    const msg = buildMessage("2026-03-09", ["ai-cli", "ai-cli-en", "ai-agents", "ai-agents-en"], BASE_URL);
    expect(msg).toContain("agents-radar");
    expect(msg).toContain("2026-03-09");
    expect(msg).toContain("📡");
    // zh links
    expect(msg).toContain(`${BASE_URL}/#2026-03-09/ai-cli`);
    expect(msg).toContain("AI CLI 工具");
    // en links
    expect(msg).toContain(`${BASE_URL}/#2026-03-09/ai-cli-en`);
    expect(msg).toContain("AI CLI Tools");
  });

  it("renders zh-only reports without en link", () => {
    const msg = buildMessage("2026-03-09", ["ai-hn"], BASE_URL);
    expect(msg).toContain("HN 社区动态");
    expect(msg).not.toContain("HN Community");
  });

  it("renders Radar bilingual links", () => {
    const msg = buildMessage("2026-08-12", ["ai-radar", "ai-radar-en"], BASE_URL);
    expect(msg).toContain("Top 5 信息雷达");
    expect(msg).toContain("#2026-08-12/ai-radar-en");
  });

  it("includes Web UI and RSS links", () => {
    const msg = buildMessage("2026-03-09", ["ai-cli"], BASE_URL);
    expect(msg).toContain("🌐 Web UI");
    expect(msg).toContain("RSS");
    expect(msg).toContain(`${BASE_URL}/feed.xml`);
  });

  it("strips trailing slash from pagesUrl", () => {
    const msg = buildMessage("2026-03-09", ["ai-cli"], BASE_URL + "/");
    expect(msg).not.toContain("//feed.xml");
    expect(msg).toContain(`${BASE_URL}/feed.xml`);
  });

  it("includes highlights when provided", () => {
    const highlights: Highlights = {
      zh: {
        "ai-cli": ["Claude Code 发布 v1.2.0", "Gemini CLI 修复 streaming"],
        "ai-agents": ["OpenClaw 新增 MCP 支持"],
      },
      en: {
        "ai-cli": ["Claude Code releases v1.2.0"],
      },
    };
    const msg = buildMessage(
      "2026-03-09",
      ["ai-cli", "ai-cli-en", "ai-agents", "ai-agents-en"],
      BASE_URL,
      highlights,
    );
    expect(msg).toContain("◦ Claude Code 发布 v1.2.0");
    expect(msg).toContain("◦ Gemini CLI 修复 streaming");
    expect(msg).toContain("◦ OpenClaw 新增 MCP 支持");
  });

  it("falls back to en highlights when a report's zh is missing", () => {
    // Mirrors the 2026-07-13 incident: zh generation failed, leaving zh empty
    // while en was populated. The message must still render bullets.
    const highlights: Highlights = {
      zh: {},
      en: {
        "ai-cli": ["Claude Code releases v1.2.0"],
        "ai-agents": ["OpenClaw adds MCP support"],
      },
    };
    const msg = buildMessage(
      "2026-03-09",
      ["ai-cli", "ai-cli-en", "ai-agents", "ai-agents-en"],
      BASE_URL,
      highlights,
    );
    expect(msg).toContain("◦ Claude Code releases v1.2.0");
    expect(msg).toContain("◦ OpenClaw adds MCP support");
  });

  it("prefers zh highlights over en when both present", () => {
    const highlights: Highlights = {
      zh: { "ai-cli": ["Claude Code 发布 v1.2.0"] },
      en: { "ai-cli": ["Claude Code releases v1.2.0"] },
    };
    const msg = buildMessage("2026-03-09", ["ai-cli", "ai-cli-en"], BASE_URL, highlights);
    expect(msg).toContain("◦ Claude Code 发布 v1.2.0");
    expect(msg).not.toContain("◦ Claude Code releases v1.2.0");
  });

  it("works without highlights (null)", () => {
    const msg = buildMessage("2026-03-09", ["ai-cli", "ai-cli-en"], BASE_URL, null);
    expect(msg).toContain("AI CLI 工具");
    expect(msg).not.toContain("◦");
  });

  it("works without highlights (undefined)", () => {
    const msg = buildMessage("2026-03-09", ["ai-cli", "ai-cli-en"], BASE_URL);
    expect(msg).toContain("AI CLI 工具");
    expect(msg).not.toContain("◦");
  });
});
