"use client";
import React from "react";
import Icon from "@/components/ui/AppIcon";
import { useContactModal } from "@/components/ContactModalProvider";

export default function BlogPostCta({ page }: { page: string }) {
  const { open } = useContactModal();

  return (
    <section className="pb-12 sm:pb-16 bg-[#FCFBF7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl border border-black/[0.08] bg-white px-6 py-8 sm:px-10 sm:py-10 text-center shadow-[0_14px_45px_rgba(15,23,42,0.06)]">
          <h2 className="font-display font-extrabold text-foreground text-xl sm:text-2xl tracking-tight">
            Looking for a virtual office in your city?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-foreground-muted leading-relaxed max-w-lg mx-auto">
            Explore locations or talk to the team about GST, company-registration and business-address plans.
          </p>
          <button
            type="button"
            onClick={() => open({ metadata: { action: "blog-article-cta", page } })}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-foreground text-white px-6 py-3.5 text-sm font-semibold hover:bg-foreground/90 transition-colors shadow-[0_14px_40px_rgba(15,23,42,0.18)]"
          >
            Get in touch
            <Icon name="ArrowRightIcon" size={15} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
