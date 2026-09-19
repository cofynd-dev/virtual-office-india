import React from "react";
import type { BlogPost } from "@/lib/blog";

export default function BlogPostBody({ post }: { post: BlogPost }) {
  return (
    <article className="py-10 sm:py-14 bg-[#FCFBF7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {post.imageUrl ? (
          <div
            className="rounded-3xl overflow-hidden border border-black/[0.08] shadow-[0_14px_45px_rgba(15,23,42,0.08)] h-[220px] sm:h-[320px]"
            style={{
              backgroundImage: `url(${post.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            role="img"
            aria-label={post.title}
          />
        ) : null}

        {post.contentHtml ? (
          <div
            className={`prose prose-sm sm:prose-base max-w-none
              prose-p:text-foreground-muted prose-p:leading-relaxed
              prose-headings:font-display prose-headings:font-extrabold prose-headings:text-foreground
              prose-h2:text-lg sm:prose-h2:text-xl prose-h2:pt-3
              prose-h3:text-base sm:prose-h3:text-lg
              prose-li:text-foreground-muted
              prose-strong:text-foreground
              prose-a:text-foreground prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-2xl
              ${post.imageUrl ? "mt-8 sm:mt-10" : ""}`}
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        ) : null}
      </div>
    </article>
  );
}
