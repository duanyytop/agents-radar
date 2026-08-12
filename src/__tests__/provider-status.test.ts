import { describe, expect, it, vi } from "vitest";
import type { RepoConfig } from "../github.ts";
import { buildProviderStatusSection, fetchProviderIncidents } from "../provider-status.ts";

const repositories: RepoConfig[] = [
  { id: "claude-code", repo: "anthropics/claude-code", name: "Claude Code" },
  { id: "codex", repo: "openai/codex", name: "OpenAI Codex" },
];

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

describe("fetchProviderIncidents", () => {
  it("keeps tracked providers and attaches official and attributed links", async () => {
    const fetchImpl = vi.fn<typeof fetch>(async (input) => {
      const url = String(input);
      if (url.includes("/api/v1/incidents?")) {
        return jsonResponse({
          data: {
            incidents: [
              {
                slug: "anthropic-elevated-errors-2026-08-12",
                title: "Elevated errors",
                status: "investigating",
                severity: "minor",
                updatedAt: "2026-08-12T16:10:00Z",
                provider: { slug: "anthropic", name: "Anthropic" },
                links: { html: "/incidents/anthropic-elevated-errors-2026-08-12" },
              },
              {
                slug: "cloudflare-routing-2026-08-12",
                title: "Routing issue",
                status: "identified",
                severity: "major",
                updatedAt: "2026-08-12T16:11:00Z",
                provider: { slug: "cloudflare", name: "Cloudflare" },
                links: { html: "/incidents/cloudflare-routing-2026-08-12" },
              },
            ],
          },
        });
      }
      return jsonResponse({ data: { source: { statusPageUrl: "https://status.claude.com/" } } });
    });

    const incidents = await fetchProviderIncidents(repositories, {
      apiBase: "https://outagedeck.example",
      fetchImpl,
    });

    expect(incidents).toHaveLength(1);
    expect(incidents[0]).toMatchObject({
      providerName: "Anthropic",
      officialUrl: "https://status.claude.com/",
    });
    const timeline = new URL(incidents[0]!.timelineUrl);
    expect(timeline.searchParams.get("utm_source")).toBe("agents_radar");
    expect(timeline.searchParams.get("utm_campaign")).toBe("provider_incident_context");
  });

  it("returns no incidents when no configured repository has a provider mapping", async () => {
    const fetchImpl = vi.fn<typeof fetch>();
    const incidents = await fetchProviderIncidents([{ id: "local", repo: "example/local", name: "Local" }], {
      fetchImpl,
    });

    expect(incidents).toEqual([]);
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  it("keeps the incident when its official source lookup fails", async () => {
    const fetchImpl = vi.fn<typeof fetch>(async (input) => {
      if (String(input).includes("/api/v1/incidents?")) {
        return jsonResponse({
          data: {
            incidents: [
              {
                slug: "openai-api-errors-2026-08-12",
                title: "API errors",
                status: "monitoring",
                severity: "minor",
                updatedAt: "2026-08-12T16:10:00Z",
                provider: { slug: "openai", name: "OpenAI" },
                links: { html: "/incidents/openai-api-errors-2026-08-12" },
              },
            ],
          },
        });
      }
      return jsonResponse({}, 503);
    });

    const incidents = await fetchProviderIncidents(repositories, { fetchImpl });

    expect(incidents).toHaveLength(1);
    expect(incidents[0]!.officialUrl).toBeUndefined();
    expect(incidents[0]!.timelineUrl).toContain("provider_incident_context");
  });
});

describe("buildProviderStatusSection", () => {
  it("renders the official source before the normalized timeline", () => {
    const section = buildProviderStatusSection(
      [
        {
          slug: "anthropic-elevated-errors-2026-08-12",
          title: "Elevated errors",
          status: "investigating",
          severity: "minor",
          updatedAt: "2026-08-12T16:10:00Z",
          providerName: "Anthropic",
          officialUrl: "https://status.claude.com/",
          timelineUrl: "https://outagedeck.com/incidents/example",
        },
      ],
      "en",
    );

    expect(section).toContain("## Upstream Provider Incidents");
    expect(section.indexOf("official status")).toBeLessThan(section.indexOf("normalized timeline"));
    expect(section).toContain("index and second signal");
  });

  it("does not add an empty section", () => {
    expect(buildProviderStatusSection([], "zh")).toBe("");
  });
});
