import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/app/homepage/components/ScrollRevealProvider";
import WhatsAppFloat from "@/app/homepage/components/WhatsAppFloat";
import MobileStickyBar from "@/app/homepage/components/MobileStickyBar";
import SeoScripts from "@/components/SeoScripts";
import { fetchSeoMeta, seoKeywordsToNext, seoRobotsToNext } from "@/lib/seo";
import CompanyHeroSection from "./components/CompanyHeroSection";
import CompanyRegisteredOfficeSection from "./components/CompanyRegisteredOfficeSection";
import CompanyStepsSection from "./components/CompanyStepsSection";
import CompanyDocumentsSection from "./components/CompanyDocumentsSection";
import CompanyEntityTypesSection from "./components/CompanyEntityTypesSection";
import CompanyComparisonSection from "./components/CompanyComparisonSection";
import CompanyCitiesSection from "./components/CompanyCitiesSection";
import CompanyUseCasesSection from "./components/CompanyUseCasesSection";
import CompanyWhyUsSection from "./components/CompanyWhyUsSection";
import CompanyFaqSection from "./components/CompanyFaqSection";
import { COMPANY_FAQS } from "./faqs";

const SEO_SLUG = "virtualofficeindia-company-registration";

const FALLBACK_TITLE = "Virtual Office for Company Registration in India | Virtual Offices India";
const FALLBACK_DESCRIPTION =
  "Get a professional registered-office address for your business without renting a traditional office. Documentation support and flexible plans across multiple Indian cities.";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await fetchSeoMeta(SEO_SLUG);

  return {
    title: seo?.title?.trim() || FALLBACK_TITLE,
    description: seo?.description?.trim() || FALLBACK_DESCRIPTION,
    alternates: { canonical: "/company-registration" },
    keywords: seoKeywordsToNext(seo?.keywords),
    robots: seoRobotsToNext(seo?.robots),
  };
}

export default async function CompanyRegistrationPage() {
  const seo = await fetchSeoMeta(SEO_SLUG);

  return (
    <>
      <ScrollRevealProvider />
      <Header />
      <main>
        <CompanyHeroSection />
        <CompanyRegisteredOfficeSection />
        <CompanyStepsSection />
        <CompanyDocumentsSection />
        <CompanyEntityTypesSection />
        <CompanyComparisonSection />
        <CompanyCitiesSection />
        <CompanyUseCasesSection />
        <CompanyWhyUsSection />
        <CompanyFaqSection />
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
            mainEntity: COMPANY_FAQS.map((faq) => ({
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
