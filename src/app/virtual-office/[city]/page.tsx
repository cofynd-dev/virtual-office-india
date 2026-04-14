import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CityHeroSection from "@/app/city-pages/components/CityHeroSection";
import CityServicesSection from "@/app/city-pages/components/CityServicesSection";
import CityLocationsSection from "@/app/city-pages/components/CityLocationsSection";
import CityAudienceSection from "@/app/city-pages/components/CityAudienceSection";
import CityEverythingYouNeedSection from "@/app/city-pages/components/CityEverythingYouNeedSection";
import CitySetupStepsSection from "@/app/city-pages/components/CitySetupStepsSection";
import TestimonialsSection from "@/app/homepage/components/TestimonialsSection";
import FaqSection from "@/app/homepage/components/FaqSection";
import CityCoverageSection from "@/app/homepage/components/CityCoverageSection";
import CityPostCoverageCtaSection from "@/app/city-pages/components/CityPostCoverageCtaSection";
import ScrollRevealProvider from "@/app/homepage/components/ScrollRevealProvider";
import WhatsAppFloat from "@/app/homepage/components/WhatsAppFloat";
import MobileStickyBar from "@/app/homepage/components/MobileStickyBar";
import { findCityBySlug } from "@/lib/cities";
import SeoScripts from "@/components/SeoScripts";
import { fetchSeoMeta, seoKeywordsToNext, seoRobotsToNext } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = findCityBySlug(citySlug);
  if (!city) return {};

  const seo = await fetchSeoMeta(`virtualofficeindia-virtual-office-in-${citySlug}`);

  const fallbackTitle = `Virtual Office in ${city.name} | GST Registration Address | Virtual Office India`;
  const fallbackDescription = `Get a GST-compliant virtual office address in ${city.name}. Prime locations, all documents included. Setup fast with Virtual Office India.`;

  return {
    title: seo?.title?.trim() || fallbackTitle,
    description: seo?.description?.trim() || fallbackDescription,
    alternates: { canonical: `/${citySlug}` },
    keywords: seoKeywordsToNext(seo?.keywords),
    robots: seoRobotsToNext(seo?.robots),
  };
}

export default async function VirtualOfficeCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params;
  const city = findCityBySlug(citySlug);
  if (!city) notFound();

  const seo = await fetchSeoMeta(`virtualofficeindia-virtual-office-in-${citySlug}`);

  return (
    <>
      <ScrollRevealProvider />
      <Header />
      <main>
        <CityHeroSection city={city} />
        <CityServicesSection city={city} />
        <CityLocationsSection city={city} />
        <CityAudienceSection city={city} />
        <CityEverythingYouNeedSection />
        <CitySetupStepsSection city={city} />
        <TestimonialsSection
          headingTitle="What our clients say"
          headingSubtitle={`Real feedback from founders and businesses using virtual offices — including premium addresses in ${city.name}.`}
        />
        <CityCoverageSection />
        <CityPostCoverageCtaSection
          city={city}
          footerTitle={seo?.footer_title}
          footerDescriptionHtml={seo?.footer_description}
        />
        <FaqSection />
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
            "@type": "LocalBusiness",
            name: "Virtual Office in India",
            description: `GST-compliant virtual office addresses in ${city.name}`,
            url: "https://virtualofficeindia.com",
            telephone: "+91-88000-00000",
            address: {
              "@type": "PostalAddress",
              addressLocality: city.name,
              addressRegion: city.state,
              addressCountry: "IN",
            },
            areaServed: city.name,
            priceRange: "₹999 - ₹3499/month",
          }),
        }}
      />
    </>
  );
}

