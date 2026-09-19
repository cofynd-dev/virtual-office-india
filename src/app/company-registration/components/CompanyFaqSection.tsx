"use client";
import React, { useState } from "react";
import Icon from "@/components/ui/AppIcon";
import { COMPANY_FAQS } from "../faqs";

export default function CompanyFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="company-faq" className="py-20 sm:py-24 bg-[#FCFBF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 lg:items-start">
          <div className="lg:col-span-4 scroll-reveal text-center lg:text-left">
            <h2
              className="font-display font-extrabold text-foreground tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
            >
              FAQs
            </h2>
            <p className="mt-4 text-foreground-muted text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Common questions about using a virtual office as your registered office for company
              registration.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4 scroll-reveal">
            {COMPANY_FAQS.map((faq, i) => {
              const open = openIndex === i;
              return (
                <div
                  key={faq.q}
                  className={[
                    "bg-white rounded-xl sm:rounded-2xl border transition-shadow duration-300 overflow-hidden",
                    open
                      ? "border-black/[0.10] shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
                      : "border-black/[0.08] shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:border-black/[0.12] hover:shadow-[0_8px_28px_rgba(15,23,42,0.07)]",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                  >
                    <span className="font-display font-bold text-foreground text-sm sm:text-base leading-snug pr-2">
                      {faq.q}
                    </span>
                    <span className="shrink-0 w-9 h-9 flex items-center justify-center text-foreground" aria-hidden>
                      {open ? (
                        <Icon name="MinusIcon" size={22} className="text-foreground" />
                      ) : (
                        <Icon name="PlusIcon" size={22} className="text-foreground/70" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t border-black/[0.08]">
                        <p className="pt-4 text-sm sm:text-[15px] text-foreground-muted leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
