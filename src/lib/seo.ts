export interface SeoMeta {
  description: string;
  status: boolean;
  title: string;
  footer_title?: string;
  footer_description?: string;
  keywords?: string;
  page_title?: string;
  script?: string;
  robots?: string;
  faqs?: any[];
}

const SEO_API_BASE = "https://api.cofynd.com/api/user/seo";

function normalizeSeoUrl(url: string) {
  return String(url || "")
    .trim()
    .replace(/^https?:\/\/[^/]+/i, "")
    .replace(/^\//, "")
    .replace(/\/$/, "");
}

export async function fetchSeoMeta(url: string): Promise<SeoMeta | null> {
  const normalized = normalizeSeoUrl(url);
  if (!normalized) return null;

  try {
    const res = await fetch(`${SEO_API_BASE}/${encodeURIComponent(normalized)}`, {
      // SEO can change frequently; avoid caching surprises.
      cache: "no-store",
    });
    if (!res.ok) return null;
    const raw = (await res.json()) as unknown;
    if (!raw || typeof raw !== "object") return null;

    // API shape: { message: string, data: SeoMeta | null }
    const maybeData = (raw as any)?.data ?? raw;
    if (!maybeData || typeof maybeData !== "object") return null;

    const seo = maybeData as SeoMeta;
    if (seo.status !== true) return null;
    return seo;
  } catch {
    return null;
  }
}

export function seoRobotsToNext(robots?: string) {
  const value = (robots ?? "").toLowerCase();
  if (!value) return undefined;
  return {
    index: !value.includes("noindex"),
    follow: !value.includes("nofollow"),
  };
}

export function seoKeywordsToNext(keywords?: string) {
  const raw = (keywords ?? "").trim();
  if (!raw) return undefined;
  return raw
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);
}

export function seoFaqsToJsonLd(faqs?: any[]) {
  if (!Array.isArray(faqs) || faqs.length === 0) return null;

  const mainEntity = faqs
    .map((f) => {
      const q = String((f?.q ?? f?.question ?? f?.title ?? "")).trim();
      const a = String((f?.a ?? f?.answer ?? f?.description ?? "")).trim();
      if (!q || !a) return null;
      return {
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      };
    })
    .filter(Boolean);

  if (mainEntity.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
}

