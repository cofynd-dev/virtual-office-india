import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/app/homepage/components/ScrollRevealProvider";
import WhatsAppFloat from "@/app/homepage/components/WhatsAppFloat";
import MobileStickyBar from "@/app/homepage/components/MobileStickyBar";
import SeoScripts from "@/components/SeoScripts";
import { fetchSeoMeta, seoKeywordsToNext, seoRobotsToNext } from "@/lib/seo";
import AboutHeroSection from "./components/AboutHeroSection";
import AboutWhatWeDoSection from "./components/AboutWhatWeDoSection";
import AboutWhySection from "./components/AboutWhySection";
import AboutWhoWeHelpSection from "./components/AboutWhoWeHelpSection";
import AboutApproachSection from "./components/AboutApproachSection";
import AboutRoleSection from "./components/AboutRoleSection";
import AboutVisionSection from "./components/AboutVisionSection";
import AboutContactSection from "./components/AboutContactSection";

const SEO_SLUG = "virtualofficeindia-about-us";

const FALLBACK_TITLE = "About Us | Virtual Offices India";
const FALLBACK_DESCRIPTION =
  "Virtual Offices India is an independent platform that helps entrepreneurs, startups and growing businesses discover virtual office and business-address solutions across India.";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await fetchSeoMeta(SEO_SLUG);

  return {
    title: seo?.title?.trim() || FALLBACK_TITLE,
    description: seo?.description?.trim() || FALLBACK_DESCRIPTION,
    alternates: { canonical: "/about-us" },
    keywords: seoKeywordsToNext(seo?.keywords),
    robots: seoRobotsToNext(seo?.robots),
  };
}

export default async function AboutUsPage() {
  const seo = await fetchSeoMeta(SEO_SLUG);

  return (
    <>
      <ScrollRevealProvider />
      <Header />
      <main>
        <AboutHeroSection />
        <AboutWhatWeDoSection />
        <AboutWhySection />
        <AboutWhoWeHelpSection />
        <AboutApproachSection />
        <AboutRoleSection />
        <AboutVisionSection />
        <AboutContactSection />
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
            "@type": "AboutPage",
            name: "About Virtual Offices India",
            url: "https://virtualofficesindia.com/about-us",
            description: FALLBACK_DESCRIPTION,
            mainEntity: {
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
