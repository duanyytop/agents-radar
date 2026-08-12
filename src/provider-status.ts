import type { RepoConfig } from "./github.ts";
import { type Lang, PROVIDER_STATUS } from "./i18n.ts";

const DEFAULT_API_BASE = "https://outagedeck.com";
const FETCH_TIMEOUT_MS = 10_000;
const MAX_INCIDENTS = 10;

const PROVIDER_BY_REPOSITORY: Record<string, string> = {
  "anthropics/claude-code": "anthropic",
  "openai/codex": "openai",
  "github/copilot-cli": "github",
};

interface IncidentListItem {
  slug: string;
  title: string;
  status: string;
  severity: string;
  updatedAt: string;
  provider: { slug: string; name: string };
  links: { html: string };
}

interface IncidentDetail {
  source?: {
    officialUrl?: string;
    statusPageUrl?: string;
  };
}

export interface ProviderIncident {
  slug: string;
  title: string;
  status: string;
  severity: string;
  updatedAt: string;
  providerName: string;
  officialUrl?: string;
  timelineUrl: string;
}

export interface ProviderStatusOptions {
  apiBase?: string;
  fetchImpl?: typeof fetch;
}

function asRecord(value: unknown): Record<string, unknown> | undefined {
  return value !== null && typeof value === "object" ? (value as Record<string, unknown>) : undefined;
}

function asString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function parseIncident(value: unknown): IncidentListItem | undefined {
  const row = asRecord(value);
  const provider = asRecord(row?.["provider"]);
  const links = asRecord(row?.["links"]);
  const slug = asString(row?.["slug"]);
  const title = asString(row?.["title"]);
  const status = asString(row?.["status"]);
  const severity = asString(row?.["severity"]);
  const updatedAt = asString(row?.["updatedAt"]);
  const providerSlug = asString(provider?.["slug"]);
  const providerName = asString(provider?.["name"]);
  const html = asString(links?.["html"]);

  if (!slug || !title || !status || !severity || !updatedAt || !providerSlug || !providerName || !html) {
    return undefined;
  }

  return {
    slug,
    title,
    status,
    severity,
    updatedAt,
    provider: { slug: providerSlug, name: providerName },
    links: { html },
  };
}

function httpUrl(value: unknown): string | undefined {
  const text = asString(value);
  if (!text) return undefined;
  try {
    const url = new URL(text);
    return url.protocol === "https:" || url.protocol === "http:" ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

function trackedProviderSlugs(repositories: RepoConfig[]): Set<string> {
  return new Set(
    repositories
      .map((repository) => PROVIDER_BY_REPOSITORY[repository.repo])
      .filter((slug): slug is string => Boolean(slug)),
  );
}

async function getJson(fetchImpl: typeof fetch, url: string): Promise<unknown> {
  const response = await fetchImpl(url, {
    cache: "no-store",
    headers: { Accept: "application/json", "Cache-Control": "no-cache" },
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });
  if (!response.ok) throw new Error(`provider status request failed: ${response.status}`);
  return response.json();
}

async function fetchOfficialUrl(
  fetchImpl: typeof fetch,
  apiBase: string,
  incident: IncidentListItem,
): Promise<string | undefined> {
  try {
    const payload = asRecord(
      await getJson(fetchImpl, new URL(`/api/v1/incidents/${incident.slug}`, apiBase).toString()),
    );
    const detail = asRecord(payload?.["data"]) as IncidentDetail | undefined;
    return httpUrl(detail?.source?.officialUrl) ?? httpUrl(detail?.source?.statusPageUrl);
  } catch {
    return undefined;
  }
}

function trackedTimelineUrl(apiBase: string, incident: IncidentListItem): string {
  const url = new URL(incident.links.html, apiBase);
  url.searchParams.set("utm_source", "agents_radar");
  url.searchParams.set("utm_medium", "daily_digest");
  url.searchParams.set("utm_campaign", "provider_incident_context");
  url.searchParams.set("utm_content", incident.slug);
  return url.toString();
}

export async function fetchProviderIncidents(
  repositories: RepoConfig[],
  options: ProviderStatusOptions = {},
): Promise<ProviderIncident[]> {
  const apiBase = options.apiBase ?? DEFAULT_API_BASE;
  const fetchImpl = options.fetchImpl ?? fetch;
  const providerSlugs = trackedProviderSlugs(repositories);
  if (providerSlugs.size === 0) return [];

  const payload = asRecord(
    await getJson(fetchImpl, new URL("/api/v1/incidents?state=active&limit=100", apiBase).toString()),
  );
  const data = asRecord(payload?.["data"]);
  const rows = Array.isArray(data?.["incidents"]) ? data["incidents"] : [];
  const incidents = rows
    .map(parseIncident)
    .filter((incident): incident is IncidentListItem => Boolean(incident))
    .filter((incident) => providerSlugs.has(incident.provider.slug))
    .slice(0, MAX_INCIDENTS);

  return Promise.all(
    incidents.map(async (incident) => ({
      slug: incident.slug,
      title: incident.title,
      status: incident.status,
      severity: incident.severity,
      updatedAt: incident.updatedAt,
      providerName: incident.provider.name,
      officialUrl: await fetchOfficialUrl(fetchImpl, apiBase, incident),
      timelineUrl: trackedTimelineUrl(apiBase, incident),
    })),
  );
}

function markdownText(value: string): string {
  return value
    .replace(/([\\[\]])/g, "\\$1")
    .replace(/\s+/g, " ")
    .trim();
}

function updatedAtLabel(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return `${date.toISOString().slice(0, 16).replace("T", " ")} UTC`;
}

export function buildProviderStatusSection(incidents: ProviderIncident[], lang: Lang): string {
  if (incidents.length === 0) return "";

  const bullets = incidents
    .map((incident) => {
      const official = incident.officialUrl
        ? `[${PROVIDER_STATUS.official[lang]}](${incident.officialUrl}) | `
        : "";
      const timeline = `[${PROVIDER_STATUS.timeline[lang]}](${incident.timelineUrl})`;
      return (
        `- **${markdownText(incident.providerName)}**: ${markdownText(incident.title)} ` +
        `(${markdownText(incident.status)}, ${markdownText(incident.severity)}, ` +
        `${updatedAtLabel(incident.updatedAt)}) - ${official}${timeline}`
      );
    })
    .join("\n");

  return (
    `## ${PROVIDER_STATUS.heading[lang]}\n\n` +
    `${PROVIDER_STATUS.intro[lang]}\n\n` +
    `${bullets}\n\n` +
    `> ${PROVIDER_STATUS.advisory[lang]}\n\n---\n\n`
  );
}
