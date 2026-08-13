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
  return title
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
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
