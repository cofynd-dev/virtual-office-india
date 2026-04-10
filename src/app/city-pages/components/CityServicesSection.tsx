"use client";
import React, { useState } from "react";
import Icon from "@/components/ui/AppIcon";
import type { City } from "@/lib/cities";
import ContactModal from "@/app/homepage/components/ContactModal";

const services = [
  {
    icon: "DocumentCheckIcon",
    title: "GST & MCA Compliance",
    description: "End-to-end GST registration support with NOC, rent agreement, and utility bills. Ensuring a smooth approval process.",
    price: "From ₹999/mo",
    iconBg: "bg-primary",
    cardBg: "bg-primary/5",
  },
  {
    icon: "BuildingOffice2Icon",
    title: "Company Incorporation",
    description: "ROC accepted business address for Pvt Ltd, LLP, and OPC registration. Complete with all MCA-required documents.",
    price: "From ₹1,999/mo",
    iconBg: "bg-accent",
    cardBg: "bg-accent/5",
  },
  {
    icon: "BuildingOfficeIcon",
    title: "Business Address",
    description: "Get a prime business address in your city and never miss important business communication.",
    price: "From ₹1,999/mo",
    iconBg: "bg-amber-500",
    cardBg: "bg-amber-5/10",
  },
  {
    icon: "EnvelopeOpenIcon",
    title: "Mail & Courier Handling",
    description: "Receive, scan, and forward all your business mail and couriers. Digitally and physically, as needed.",
    // Use built-in Tailwind amber (no custom `warning` color in tailwind.config.js)
    iconBg: "bg-amber-500",
    cardBg: "bg-amber-50",
  },
];

export default function CityServicesSection({ city }: { city: City }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 sm:py-20 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative flex flex-col items-center text-center gap-5 mb-10">
          <div className="scroll-reveal flex flex-col items-center text-center">
            <h2
              className="font-display font-extrabold text-foreground flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full tracking-tight"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              <span className="inline-flex items-center justify-center rounded-2xl bg-black/[0.06] border border-black/[0.08] p-2.5 sm:p-3 shrink-0" aria-hidden>
                <Icon name="RectangleStackIcon" size={24} className="text-foreground" />
              </span>
              <span className="leading-tight min-w-0 text-center">Explore Our Virtual Office Services in {city.name}</span>
            </h2>
            <p className="mt-3 text-center text-foreground-muted max-w-xl text-sm sm:text-base leading-relaxed mx-auto">
              Get all documents delivered digitally. Fast, Simple, and Hassle-Free.
            </p>
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 flex gap-4 overflow-x-auto overflow-y-hidden sm:overflow-visible snap-x snap-mandatory sm:snap-none -mx-4 px-4 sm:mx-0 sm:px-0 pb-2 touch-pan-x">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`scroll-reveal scroll-reveal-delay-${i + 1} snap-center shrink-0 w-[88vw] max-w-[380px] sm:w-auto sm:max-w-none ${s.cardBg} rounded-3xl border border-black/[0.08] shadow-[0_18px_55px_rgba(15,23,42,0.08)] overflow-hidden`}
            >
              <div className="p-7 sm:p-8 bg-white/70 backdrop-blur-[2px]">
                <div className="flex items-center justify-center gap-3.5 mb-4">
                  <div className={`w-12 h-12 ${s.iconBg} rounded-2xl flex items-center justify-center border border-black/[0.10] shadow-[0_10px_30px_rgba(15,23,42,0.10)] shrink-0`}>
                    <Icon name={s.icon as "DocumentCheckIcon"} size={22} className="text-white" variant="solid" />
                  </div>
                  <h3 className="font-display font-extrabold text-[19px] sm:text-[20px] text-foreground leading-snug mt-1">
                    {s.title}
                  </h3>
                </div>
                <p className="text-[15px] sm:text-base text-foreground-muted leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Single centered CTA below services */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="scroll-reveal inline-flex items-center justify-center gap-2 rounded-2xl bg-foreground text-white px-7 py-3.5 text-sm font-semibold hover:bg-foreground/90 transition-colors shadow-[0_14px_40px_rgba(15,23,42,0.16)]"
          >
            Get Your Virtual Office Setup Today
          </button>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        prefillCity={city.name}
        prefillRequirement="both"
        metadata={{ city: city.name, action: "services-cta-single" }}
      />
    </section>
  );
}