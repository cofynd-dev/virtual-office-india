"use client";
import React, { useState } from "react";
import Icon from "@/components/ui/AppIcon";
import ContactModal from "@/app/homepage/components/ContactModal";

const reasons = [
  {
    icon: "CheckBadgeIcon",
    title: "Verified Business Locations",
    description: "Every address we offer is a verified commercial location.",
    iconBg: "bg-[#ECFDF5]",
    iconColor: "text-[#16A34A]",
  },
  {
    icon: "MapPinIcon",
    title: "Multiple Cities Across India",
    description: "Choose an address in the city or state where you need to register.",
    iconBg: "bg-[#EFF6FF]",
    iconColor: "text-[#2563EB]",
  },
  {
    icon: "DocumentTextIcon",
    title: "Documentation Support",
    description: "We help you gather the address-related paperwork for your application.",
    iconBg: "bg-[#FFF7ED]",
    iconColor: "text-[#F59E0B]",
  },
  {
    icon: "AdjustmentsHorizontalIcon",
    title: "Flexible Virtual Office Plans",
    description: "Pick a plan that matches what your registration actually needs.",
    iconBg: "bg-[#F3E8FF]",
    iconColor: "text-[#7C3AED]",
  },
  {
    icon: "ChatBubbleLeftRightIcon",
    title: "Dedicated Assistance",
    description: "Talk to a real person who can answer questions about your case.",
    iconBg: "bg-[#E0F2FE]",
    iconColor: "text-[#0EA5E9]",
  },
  {
    icon: "BuildingOffice2Icon",
    title: "Business Address Solutions",
    description: "Use the address for correspondence, branding, and registrations.",
    iconBg: "bg-[#FEF2F2]",
    iconColor: "text-[#EF4444]",
  },
];

export default function GstWhyUsSection() {
  const [modalOpen, setModalOpen] = useState(false);

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
                <Icon name="ShieldCheckIcon" size={24} className="text-foreground" />
              </span>
              <span className="leading-tight min-w-0 text-center">Why Choose Virtual Offices India?</span>
            </h2>
            <p className="mt-3 text-center text-foreground-muted max-w-xl text-sm sm:text-base leading-relaxed mx-auto">
              Verified addresses, clear documentation support, and help from people who do this every day.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`scroll-reveal scroll-reveal-delay-${(i % 4) + 1} h-full flex flex-col rounded-3xl border border-black/[0.08] bg-white px-6 py-7 shadow-[0_18px_55px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_75px_rgba(15,23,42,0.11)]`}
            >
              <span
                className={`w-12 h-12 ${r.iconBg} rounded-2xl border border-black/[0.06] flex items-center justify-center shadow-[0_10px_26px_rgba(15,23,42,0.06)]`}
                aria-hidden
              >
                <Icon name={r.icon as "CheckBadgeIcon"} size={22} className={r.iconColor} />
              </span>
              <h3 className="mt-5 font-display font-extrabold text-lg text-foreground leading-snug">
                {r.title}
              </h3>
              <p className="mt-2 text-sm sm:text-[15px] text-foreground-muted leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12 scroll-reveal">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-foreground text-white hover:bg-foreground/90 transition-colors shadow-[0_14px_40px_rgba(15,23,42,0.22)]"
          >
            Get GST Virtual Office
            <Icon name="ArrowRightIcon" size={16} className="text-white" />
          </button>
        </div>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        prefillRequirement="gst"
        metadata={{ action: "gst-why-us-cta", page: "gst-registration" }}
      />
    </section>
  );
}
