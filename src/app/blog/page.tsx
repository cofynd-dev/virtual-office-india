import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/app/homepage/components/ScrollRevealProvider";
import WhatsAppFloat from "@/app/homepage/components/WhatsAppFloat";
import MobileStickyBar from "@/app/homepage/components/MobileStickyBar";
import SeoScripts from "@/components/SeoScripts";
import { fetchSeoMeta, seoKeywordsToNext, seoRobotsToNext } from "@/lib/seo";
import { fetchBlogList } from "@/lib/blog";
import BlogHeroSection from "./components/BlogHeroSection";
import BlogCardGrid from "./components/BlogCardGrid";

const SEO_SLUG = "virtualofficeindia-blog";
const PATH = "/blog";

const FALLBACK_TITLE = "Blog | Virtual Office Guides | Virtual Offices India";
const FALLBACK_DESCRIPTION =
  "Guides on virtual offices in India, GST registration addresses, company incorporation, documents and how to choose the right city.";

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

export default async function BlogPage() {
  const [seo, posts] = await Promise.all([fetchSeoMeta(SEO_SLUG), fetchBlogList()]);

  return (
    <>
      <ScrollRevealProvider />
      <Header />
      <main>
        <BlogHeroSection />
        <BlogCardGrid posts={posts} />
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
            "@type": "Blog",
            name: "Virtual Offices India Blog",
            url: "https://virtualofficesindia.com/blog",
            description: FALLBACK_DESCRIPTION,
            publisher: {
              "@type": "Organization",
              name: "Virtual Offices India",
              url: "https://virtualofficesindia.com",
            },
            blogPost: posts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              url: `https://virtualofficesindia.com/blog/${post.slug}`,
              datePublished: post.dateIso || undefined,
            })),
          }),
        }}
      />
    </>
  );
}
