import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/app/homepage/components/ScrollRevealProvider";
import WhatsAppFloat from "@/app/homepage/components/WhatsAppFloat";
import MobileStickyBar from "@/app/homepage/components/MobileStickyBar";
import SeoScripts from "@/components/SeoScripts";
import { fetchSeoMeta, seoKeywordsToNext, seoRobotsToNext } from "@/lib/seo";
import PrivacyHeroSection from "./components/PrivacyHeroSection";
import PrivacyPolicyContent from "./components/PrivacyPolicyContent";

const SEO_SLUG = "virtualofficeindia-privacy-policy";
const PATH = "/privacy-policy";

const FALLBACK_TITLE = "Privacy Policy | Virtual Offices India";
const FALLBACK_DESCRIPTION =
  "Read how Virtual Offices India collects, uses, stores and protects personal information when you visit our website, submit an enquiry or purchase a service.";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await fetchSeoMeta(SEO_SLUG);

  return {
    title: seo?.title?.trim() || FALLBACK_TITLE,
    description: seo?.description?.trim() || FALLBACK_DESCRIPTION,
    alternates: { canonical: PATH },
    keywords: seoKeywordsToNext(seo?.keywords),
    robots: seoRobotsToNext(seo?.robots),
  };
}

export default async function PrivacyPolicyPage() {
  const seo = await fetchSeoMeta(SEO_SLUG);

  return (
    <>
      <ScrollRevealProvider />
      <Header />
      <main>
        <PrivacyHeroSection />
        <PrivacyPolicyContent />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileStickyBar />

      <SeoScripts seo={seo} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            url: "https://virtualofficesindia.com/privacy-policy",
            dateModified: "2026-09-14",
            description: FALLBACK_DESCRIPTION,
            publisher: {
              "@type": "Organization",
              name: "Virtual Offices India",
              url: "https://virtualofficesindia.com",
              telephone: "+91-93113-28043",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Gurgaon",
                addressRegion: "Haryana",
                addressCountry: "IN",
              },
            },
          }),
        }}
      />
    </>
  );
}
