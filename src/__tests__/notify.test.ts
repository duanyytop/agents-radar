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

  it("shows weekly icon and suffix for weekly reports", () => {
    const msg = buildMessage("2026-03-09", ["ai-weekly", "ai-weekly-en"], BASE_URL);
    expect(msg).toContain("📅");
    expect(msg).toContain("周报");
  });

  it("shows monthly icon and suffix for monthly reports", () => {
    const msg = buildMessage("2026-03-09", ["ai-monthly", "ai-monthly-en"], BASE_URL);
    expect(msg).toContain("📆");
    expect(msg).toContain("月报");
  });

  it("monthly takes priority over weekly", () => {
    const msg = buildMessage("2026-03-09", ["ai-weekly", "ai-monthly"], BASE_URL);
    expect(msg).toContain("📆");
    expect(msg).toContain("月报");
  });

  it("renders zh-only reports without en link", () => {
    const msg = buildMessage("2026-03-09", ["ai-hn"], BASE_URL);
    expect(msg).toContain("HN 社区动态");
    expect(msg).not.toContain("HN Community");
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
