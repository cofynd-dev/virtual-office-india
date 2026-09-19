import React from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";
import { blogUrl, type BlogPost } from "@/lib/blog";

export default function BlogCardGrid({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return (
      <section className="py-12 sm:py-16 bg-[#FCFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-sm sm:text-base text-foreground-muted">
            New articles will appear here as they are published.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={blogUrl(post.slug)}
              className={`scroll-reveal scroll-reveal-delay-${(i % 3) + 1} group flex flex-col rounded-3xl border border-black/[0.08] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.07)] hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] transition-all duration-300 overflow-hidden hover:-translate-y-0.5`}
            >
              <div
                className="relative h-[180px] sm:h-[200px] bg-black/[0.04]"
                style={
                  post.imageUrl
                    ? {
                        backgroundImage: `url(${post.imageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : undefined
                }
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/[0.45] via-black/[0.08] to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/92 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-foreground">
                  {post.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-center gap-2 text-xs text-foreground-muted">
                  {post.date ? <span>{post.date}</span> : null}
                  {post.date && post.readTime ? <span aria-hidden>•</span> : null}
                  {post.readTime ? <span>{post.readTime}</span> : null}
                </div>
                <h2 className="mt-3 font-display font-extrabold text-foreground text-lg leading-snug group-hover:text-foreground/80 transition-colors">
                  {post.title}
                </h2>
                {post.excerpt ? (
                  <p className="mt-2 text-sm text-foreground-muted leading-relaxed line-clamp-3">{post.excerpt}</p>
                ) : null}
                <span className="mt-5 pt-4 border-t border-black/[0.06] inline-flex items-center gap-1.5 text-[13px] sm:text-sm font-semibold text-foreground">
                  Read article
                  <Icon
                    name="ArrowRightIcon"
                    size={14}
                    className="text-foreground transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
