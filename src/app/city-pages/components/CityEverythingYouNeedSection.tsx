"use client";

import React, { useState } from "react";
import ContactModal from "@/app/homepage/components/ContactModal";
import Icon from "@/components/ui/AppIcon";

const items = [
  { label: "Business Address", value: "Build a credible brand presence with a premium, professional business address" },
  { label: "Mail Handling", value: "Stay updated with secure and timely handling of all business correspondence" },
  { label: "Call Answering", value: "Enhance your local presence with dedicated, professional call support" },
  { label: "Compliance Support", value: "Ensure smooth operations with fully compliant, government-approved addresses" },
  { label: "Meeting Rooms", value: "Access professional meeting spaces for client discussions and presentations" },
  { label: "24/7 Access", value: "Run your business anytime with flexible, round-the-clock accessibility" },
];

export default function CityEverythingYouNeedSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-16 sm:py-20 bg-[#FCFBF7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative flex flex-col items-center text-center gap-5 mb-8 sm:mb-10">
          <div className="scroll-reveal flex flex-col items-center text-center">
            <h2
              className="font-display font-extrabold text-foreground flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full tracking-tight"
              style={{ fontSize: "clamp(1.35rem, 2.5vw, 2rem)" }}
            >
              <span className="inline-flex items-center justify-center rounded-2xl bg-black/[0.06] border border-black/[0.08] p-2.5 sm:p-3 shrink-0" aria-hidden>
                <Icon name="CheckBadgeIcon" size={24} className="text-foreground" />
              </span>
              <span className="leading-tight min-w-0 text-center">Everything Your Business Needs</span>
            </h2>
            <p className="mt-3 text-center text-foreground-muted max-w-xl text-sm sm:text-base leading-relaxed mx-auto">
            One simple plan with all essentials for registration, mail handling, and compliance.
            </p>
          </div>
        </div>

        <div className="scroll-reveal scroll-reveal-delay-1 bg-white rounded-3xl border border-black/[0.08] shadow-[0_18px_55px_rgba(15,23,42,0.08)] overflow-hidden">
          <div className="divide-y divide-black/[0.06]">
            {items.map((row) => (
              <div key={row.label} className="grid grid-cols-1 sm:grid-cols-2">
                <div className="bg-black/[0.03] px-6 py-5 sm:px-7 sm:py-6 flex items-center justify-center text-center">
                  <div className="font-display font-extrabold text-sm text-foreground">{row.label}</div>
                </div>
                <div className="px-6 py-5 sm:px-7 sm:py-6">
                  <div className="text-sm text-foreground-muted leading-relaxed">{row.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-10 scroll-reveal scroll-reveal-delay-2">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-foreground text-white hover:bg-foreground/90 transition-colors shadow-[0_14px_40px_rgba(15,23,42,0.18)]"
          >
            Talk to Our Virtual Office Expert →
          </button>
        </div>
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

