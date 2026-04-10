"use client";

import React, { useState } from "react";
import Icon from "@/components/ui/AppIcon";
import type { City } from "@/lib/cities";
import ContactModal from "@/app/homepage/components/ContactModal";

export default function CityPostCoverageCtaSection({
  city,
  footerTitle,
  footerDescriptionHtml,
}: {
  city: City;
  footerTitle?: string;
  footerDescriptionHtml?: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-14 sm:py-16 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="scroll-reveal rounded-[28px] bg-white/80 border border-black/[0.08] shadow-[0_22px_70px_rgba(15,23,42,0.08)] overflow-hidden">
          <div className="p-7 sm:p-9">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.10] bg-[#FCFBF7] px-3.5 py-2 justify-center">
                  <span className="w-2 h-2 rounded-full bg-accent" aria-hidden />
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-foreground/70">
                    Need help choosing?
                  </span>
                </div>
                <h3
                  className="mt-3 font-display font-extrabold text-foreground tracking-tight leading-tight"
                  style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.6rem)" }}
                >
                  Get the best virtual office plan in {city.name}
                </h3>
                <p className="mt-2 text-center text-sm sm:text-base text-foreground-muted leading-relaxed max-w-2xl mx-auto">
                  Share your details and we’ll recommend the right plan for GST/ROC—pricing, documents, and setup timeline included.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-foreground text-white px-6 py-3.5 text-sm font-semibold hover:bg-foreground/90 transition-colors shadow-[0_14px_40px_rgba(15,23,42,0.16)]"
                >
                  <Icon name="PhoneArrowUpRightIcon" size={16} className="text-white" />
                  Get Instant Callback
                </button>
                <a
                  href="tel:+918800000000"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/[0.12] bg-[#FCFBF7] px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-black/[0.04] transition-colors"
                >
                  <Icon name="PhoneIcon" size={16} className="text-foreground" variant="solid" />
                  Call now
                </a>
              </div>
            </div>
          </div>
        </div>

        {footerTitle || footerDescriptionHtml ? (
          <div className="scroll-reveal mt-10 sm:mt-12 mx-auto">
            {footerTitle ? (
              <h3
                className="font-display font-extrabold text-foreground mb-5 sm:mb-2 tracking-tight"
                style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)" }}
              >
                {footerTitle}
              </h3>
            ) : null}
            <div
              className="prose prose-sm sm:prose-base max-w-none
                prose-p:my-3 sm:prose-p:my-3.5
                prose-p:text-[14px] sm:prose-p:text-[15px] prose-p:text-foreground/75 prose-p:leading-[1.45]
                prose-li:leading-[1.45]
                prose-strong:text-foreground
                prose-a:text-foreground prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                prose-headings:font-display prose-headings:text-foreground prose-headings:tracking-tight
                prose-h1:text-[1.6rem] sm:prose-h1:text-[2.1rem] prose-h1:mt-7 prose-h1:mb-3
                prose-h2:text-[1.35rem] sm:prose-h2:text-[1.7rem] prose-h2:mt-6 prose-h2:mb-2.5
                prose-h3:text-[1.15rem] sm:prose-h3:text-[1.35rem] prose-h3:mt-5 prose-h3:mb-2
                prose-h4:text-[1.02rem] sm:prose-h4:text-[1.15rem] prose-h4:mt-4 prose-h4:mb-1.5
                prose-ul:my-3 sm:prose-ul:my-3.5 prose-ol:my-3 sm:prose-ol:my-3.5"
              dangerouslySetInnerHTML={{ __html: footerDescriptionHtml ?? "" }}
            />
          </div>
        ) : null}
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        prefillCity={city.name}
        prefillRequirement="both"
        metadata={{ city: city.name, action: "post-coverage-cta" }}
      />
    </section>
  );
}

