import React from "react";
import type { SeoMeta } from "@/lib/seo";
import { seoFaqsToJsonLd } from "@/lib/seo";

function parseJsonLdScripts(script: unknown): unknown[] {
  if (!script) return [];

  // If API ever returns an array, accept it.
  if (Array.isArray(script)) return script;

  const raw = String(script).trim();
  if (!raw) return [];

  // If it's JSON-LD (object/array), render as application/ld+json.
  if (raw.startsWith("{") || raw.startsWith("[")) {
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch {
      return [];
    }
  }

  return [];
}

export default function SeoScripts({ seo }: { seo: SeoMeta | null }) {
  if (!seo) return null;

  const faqJsonLd = seoFaqsToJsonLd(seo.faqs);
  const jsonLdScripts = parseJsonLdScripts(seo.script);

  return (
    <>
      {jsonLdScripts.length > 0
        ? jsonLdScripts.map((obj, idx) => (
            <script
              key={`seo-jsonld-${idx}`}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
            />
          ))
        : seo.script
          ? // Fallback: render verbatim (for non-JSON-LD script content).
            (
              <script dangerouslySetInnerHTML={{ __html: String(seo.script) }} />
            )
          : null}

      {faqJsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      ) : null}
    </>
  );
}

