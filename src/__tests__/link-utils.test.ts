import { describe, expect, it } from "vitest";
import { acceptUniqueLink, createLinkDedupeState, normalizeTitle, normalizeUrl } from "../link-utils.ts";

describe("normalizeUrl", () => {
  it("normalizes host, ports, fragments, tracking parameters, query order, and trailing slash", () => {
    expect(normalizeUrl("HTTPS://Example.COM:443/path/?utm_source=x&b=2&a=1&ref=hn#section")).toBe(
      "https://example.com/path?a=1&b=2",
    );
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
    expect(acceptUniqueLink({ title: "Alpha", url: "https://example.com/a?utm_source=hn" }, state)).toBe(
      true,
    );
    expect(acceptUniqueLink({ title: "Beta", url: "https://EXAMPLE.com/a" }, state)).toBe(false);
    expect(acceptUniqueLink({ title: "ALPHA!", url: "https://example.com/b" }, state)).toBe(false);
    expect(state.duplicateCount).toBe(2);
  });
});
