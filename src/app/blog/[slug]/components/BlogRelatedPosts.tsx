import React from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";
import { blogUrl, type BlogPost } from "@/lib/blog";

export default function BlogRelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="pb-14 sm:pb-20 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="font-display font-extrabold text-foreground text-xl sm:text-2xl tracking-tight mb-6">
          Related articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={blogUrl(post.slug)}
              className="group flex flex-col rounded-3xl border border-black/[0.08] bg-white overflow-hidden shadow-[0_12px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)] transition-all hover:-translate-y-0.5"
            >
              <div
                className="h-[140px]"
                style={{
                  backgroundImage: `url(${post.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="p-5 flex-1 flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-wider text-foreground-muted">
                  {post.category}
                </span>
                <h3 className="mt-2 font-display font-extrabold text-foreground text-[15px] leading-snug">
                  {post.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
                  Read article
                  <Icon
                    name="ArrowRightIcon"
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1"
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
