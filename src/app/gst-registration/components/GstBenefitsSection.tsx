"use client";
import React from "react";
import Icon from "@/components/ui/AppIcon";

const benefits = [
  {
    icon: "BuildingOffice2Icon",
    title: "Professional Business Address",
    description:
      "Use a commercial business address for your GST application instead of a residential one.",
    iconBg: "bg-[#EFF6FF]",
    iconColor: "text-[#2563EB]",
  },
  {
    icon: "DocumentTextIcon",
    title: "GST Documentation Support",
    description:
      "Get help assembling the address-related paperwork your GST registration may require.",
    iconBg: "bg-[#ECFDF5]",
    iconColor: "text-[#16A34A]",
  },
  {
    icon: "CurrencyRupeeIcon",
    title: "Lower Office Overhead",
    description:
      "Skip rent, deposits, and fit-out costs that come with a traditional office space.",
    iconBg: "bg-[#FFF7ED]",
    iconColor: "text-[#F59E0B]",
  },
  {
    icon: "MapPinIcon",
    title: "Flexible Location Options",
    description:
      "Choose a business address in the city or state where you need to register.",
    iconBg: "bg-[#F3E8FF]",
    iconColor: "text-[#7C3AED]",
  },
  {
    icon: "EnvelopeOpenIcon",
    title: "Mail & Courier Handling",
    description:
      "Business mail and couriers are received at your address and handled as per your plan.",
    iconBg: "bg-[#E0F2FE]",
    iconColor: "text-[#0EA5E9]",
  },
  {
    icon: "UsersIcon",
    title: "Workspace Access Where Included",
    description:
      "Selected plans include access to meeting rooms or day workspace at the location.",
    iconBg: "bg-[#FEF2F2]",
    iconColor: "text-[#EF4444]",
  },
];

export default function GstBenefitsSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <div className="scroll-reveal flex flex-col items-center text-center">
            <h2
              className="font-display font-extrabold text-foreground flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full tracking-tight"
              style={{ fontSize: "clamp(1.35rem, 2.5vw, 2rem)" }}
            >
              <span
                className="inline-flex items-center justify-center rounded-2xl bg-black/[0.06] border border-black/[0.08] p-2.5 sm:p-3 shrink-0"
                aria-hidden
              >
                <Icon name="SparklesIcon" size={24} className="text-foreground" />
              </span>
              <span className="leading-tight min-w-0 text-center">
                Why Use a Virtual Office for GST Registration?
              </span>
            </h2>
            <p className="mt-3 text-center text-foreground-muted max-w-xl text-sm sm:text-base leading-relaxed mx-auto">
              A business address, the supporting paperwork, and location flexibility — without the cost of
              a full-time office.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`scroll-reveal scroll-reveal-delay-${(i % 4) + 1} h-full flex flex-col rounded-3xl border border-black/[0.08] bg-white px-6 py-7 shadow-[0_18px_55px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_75px_rgba(15,23,42,0.11)]`}
            >
              <span
                className={`w-12 h-12 ${b.iconBg} rounded-2xl border border-black/[0.06] flex items-center justify-center shadow-[0_10px_26px_rgba(15,23,42,0.06)]`}
                aria-hidden
              >
                <Icon name={b.icon as "BuildingOffice2Icon"} size={22} className={b.iconColor} />
              </span>
              <h3 className="mt-5 font-display font-extrabold text-lg text-foreground leading-snug">
                {b.title}
              </h3>
              <p className="mt-2 text-sm sm:text-[15px] text-foreground-muted leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
