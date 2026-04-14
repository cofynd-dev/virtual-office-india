import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/app/homepage/components/HeroSection";
import HowItWorksSection from "@/app/homepage/components/HowItWorksSection";
import ServicesSection from "@/app/homepage/components/ServicesSection";
import CityCoverageSection from "@/app/homepage/components/CityCoverageSection";
import TestimonialsSection from "@/app/homepage/components/TestimonialsSection";
import WhyCofyndSection from "@/app/homepage/components/WhyCofyndSection";
import FaqSection from "@/app/homepage/components/FaqSection";
import FinalCtaSection from "@/app/homepage/components/FinalCtaSection";
import WhatsAppFloat from "@/app/homepage/components/WhatsAppFloat";
import MobileStickyBar from "@/app/homepage/components/MobileStickyBar";
import ScrollRevealProvider from "@/app/homepage/components/ScrollRevealProvider";
import SeoScripts from "@/components/SeoScripts";
import { fetchSeoMeta, seoKeywordsToNext, seoRobotsToNext } from "@/lib/seo";

export async function generateHomepageMetadata(): Promise<Metadata> {
  const seo = await fetchSeoMeta("virtualofficeindia");
  const fallbackTitle = "Virtual Office in India | GST & Company Registration Address | Cofynd";
  const fallbackDescription =
    "Get a GST-compliant virtual office address in 50+ Indian cities. Affordable plans starting ₹999/month. Trusted by 10,000+ startups, freelancers & SMEs.";

  const title = seo?.title?.trim() || fallbackTitle;
  const description = seo?.description?.trim() || fallbackDescription;

  return {
    title,
    description,
    alternates: { canonical: "/" },
    keywords: seoKeywordsToNext(seo?.keywords),
    robots: seoRobotsToNext(seo?.robots),
    openGraph: {
      title,
      description,
      images: [{ url: "/assets/images/app_logo.png", width: 1200, height: 630 }],
    },
  };
}

export default async function HomepageRoot() {
  const seo = await fetchSeoMeta("virtualofficeindia");

  return (
    <>
      <ScrollRevealProvider />
      <Header />
      <main>
        <HeroSection />
        <CityCoverageSection />
        <HowItWorksSection />
        <ServicesSection />
        <WhyCofyndSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection footerTitle={seo?.footer_title} footerDescriptionHtml={seo?.footer_description} />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileStickyBar />

      <SeoScripts seo={seo} />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Virtual Office in India",
            url: "https://virtualofficesindia.com",
            logo: "/assets/images/app_logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-93113-28043",
              contactType: "customer service",
              availableLanguage: ["English", "Hindi"],
            },
          }),
        }}
      />
    </>
  );
}

