import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/app/homepage/components/ScrollRevealProvider";
import WhatsAppFloat from "@/app/homepage/components/WhatsAppFloat";
import MobileStickyBar from "@/app/homepage/components/MobileStickyBar";
import SeoScripts from "@/components/SeoScripts";
import { fetchSeoMeta, seoKeywordsToNext, seoRobotsToNext } from "@/lib/seo";
import GstHeroSection from "./components/GstHeroSection";
import GstBenefitsSection from "./components/GstBenefitsSection";
import GstStepsSection from "./components/GstStepsSection";
import GstDocumentsSection from "./components/GstDocumentsSection";
import GstComparisonSection from "./components/GstComparisonSection";
import GstAudienceSection from "./components/GstAudienceSection";
import GstCitiesSection from "./components/GstCitiesSection";
import GstWhyUsSection from "./components/GstWhyUsSection";
import GstFaqSection from "./components/GstFaqSection";
import { GST_FAQS } from "./faqs";

const SEO_SLUG = "virtualofficeindia-gst-registration";

const FALLBACK_TITLE = "Virtual Office for GST Registration in India | Virtual Offices India";
const FALLBACK_DESCRIPTION =
  "Get a professional business address and supporting documentation for your GST registration — without renting a traditional office. Verified locations across multiple Indian cities.";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await fetchSeoMeta(SEO_SLUG);

  return {
    title: seo?.title?.trim() || FALLBACK_TITLE,
    description: seo?.description?.trim() || FALLBACK_DESCRIPTION,
    alternates: { canonical: "/gst-registration" },
    keywords: seoKeywordsToNext(seo?.keywords),
    robots: seoRobotsToNext(seo?.robots),
  };
}

export default async function GstRegistrationPage() {
  const seo = await fetchSeoMeta(SEO_SLUG);

  return (
    <>
      <ScrollRevealProvider />
      <Header />
      <main>
        <GstHeroSection />
        <GstBenefitsSection />
        <GstStepsSection />
        <GstDocumentsSection />
        <GstComparisonSection />
        <GstAudienceSection />
        <GstCitiesSection />
        <GstWhyUsSection />
        <GstFaqSection />
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
            "@type": "FAQPage",
            mainEntity: GST_FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </>
  );
}
