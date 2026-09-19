import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/app/homepage/components/ScrollRevealProvider";
import WhatsAppFloat from "@/app/homepage/components/WhatsAppFloat";
import MobileStickyBar from "@/app/homepage/components/MobileStickyBar";
import { fetchBlogList, fetchBlogPost, fetchRelatedPosts } from "@/lib/blog";
import BlogPostHero from "./components/BlogPostHero";
import BlogPostBody from "./components/BlogPostBody";
import BlogPostCta from "./components/BlogPostCta";
import BlogRelatedPosts from "./components/BlogRelatedPosts";

export async function generateStaticParams() {
  const posts = await fetchBlogList();
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBlogPost(slug);
  if (!post) return {};

  return {
    title: `${post.seoTitle || post.title} | Virtual Offices India`,
    description: post.seoDescription || post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await fetchBlogPost(slug);
  if (!post) notFound();

  const related = await fetchRelatedPosts(post.slug);

  return (
    <>
      <ScrollRevealProvider />
      <Header />
      <main>
        <BlogPostHero post={post} />
        <BlogPostBody post={post} />
        <BlogPostCta page={post.slug} />
        <BlogRelatedPosts posts={related} />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileStickyBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.seoDescription || post.excerpt,
            datePublished: post.dateIso || undefined,
            author: {
              "@type": "Organization",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "Virtual Offices India",
              url: "https://virtualofficesindia.com",
            },
            image: post.imageUrl || undefined,
            url: `https://virtualofficesindia.com/blog/${post.slug}`,
            mainEntityOfPage: `https://virtualofficesindia.com/blog/${post.slug}`,
          }),
        }}
      />
    </>
  );
}
