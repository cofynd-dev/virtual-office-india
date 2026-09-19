import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/ui/AppIcon";
import type { BlogPost } from "@/lib/blog";
import heroPattern from "@/assets/hero_pattern.svg";

export default function BlogPostHero({ post }: { post: BlogPost }) {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F4] text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={heroPattern}
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,0,0,0.06), transparent 55%),
              repeating-linear-gradient(
                105deg,
                transparent,
                transparent 18px,
                rgba(0,0,0,0.02) 18px,
                rgba(0,0,0,0.02) 19px
              )
            `,
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 text-center">
        <nav className="flex items-center justify-center gap-2 text-xs text-foreground-muted flex-wrap">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Icon name="ChevronRightIcon" size={12} className="text-foreground-muted shrink-0" />
          <Link href="/blog" className="hover:text-foreground transition-colors">
            Blog
          </Link>
          <Icon name="ChevronRightIcon" size={12} className="text-foreground-muted shrink-0" />
          <span className="text-foreground font-medium line-clamp-1 max-w-[220px] sm:max-w-none">{post.category}</span>
        </nav>

        <span className="mt-6 inline-flex items-center rounded-full bg-black/[0.05] border border-black/[0.08] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-foreground">
          {post.category}
        </span>

        <h1
          className="mt-4 font-display font-extrabold text-foreground tracking-tight leading-[1.15]"
          style={{ fontSize: "clamp(1.55rem, 3.6vw, 2.45rem)" }}
        >
          {post.title}
        </h1>

        <p className="mt-4 text-sm text-foreground-muted">
          {[post.date, post.readTime, post.author].filter(Boolean).join(" · ")}
        </p>
      </div>
    </section>
  );
}
