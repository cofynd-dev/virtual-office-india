"use client";
import React, { useState } from "react";
import Icon from "@/components/ui/AppIcon";
import ContactModal from "@/app/homepage/components/ContactModal";

const STEPS = [
  {
    step: "01",
    icon: "MapPinIcon" as const,
    title: "Choose Your City",
    description: "Select the city where you want your registered-office address.",
  },
  {
    step: "02",
    icon: "RectangleStackIcon" as const,
    title: "Select a Company Registration Plan",
    description: "Pick the plan that covers what your incorporation needs.",
  },
  {
    step: "03",
    icon: "PencilSquareIcon" as const,
    title: "Submit Required Details",
    description: "Share your KYC and company details for verification.",
  },
  {
    step: "04",
    icon: "DocumentTextIcon" as const,
    title: "Receive Address & Supporting Documents",
    description: "Get your business address along with the applicable documentation.",
  },
  {
    step: "05",
    icon: "CheckBadgeIcon" as const,
    title: "Complete Your Incorporation Process",
    description: "Use the address and documents to proceed with your filing.",
  },
];

export default function CompanyStepsSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative py-16 sm:py-20 bg-[#F9F8F6] overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -right-20 h-[min(480px,55vw)] w-[min(480px,55vw)] rounded-full bg-primary/[0.07] blur-3xl" />
        <div className="absolute -bottom-32 -left-16 h-[min(420px,50vw)] w-[min(420px,50vw)] rounded-full bg-black/[0.04] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14 scroll-reveal">
          <h2
            className="font-display font-extrabold text-foreground mb-4 tracking-tight flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full"
            style={{ fontSize: "clamp(1.35rem, 2.5vw, 2rem)" }}
          >
            <span
              className="inline-flex items-center justify-center rounded-2xl bg-black/[0.06] border border-black/[0.08] p-2.5 sm:p-3 shrink-0"
              aria-hidden
            >
              <Icon name="QueueListIcon" size={24} className="text-foreground" />
            </span>
            <span className="text-center leading-tight">
              How Company Registration With a Virtual Office Works
            </span>
          </h2>
          <p className="text-center text-foreground-muted max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            Five steps from choosing a city to completing your incorporation filing.
          </p>
        </div>

        <div className="relative rounded-3xl border border-black/[0.08] bg-white/70 backdrop-blur-sm shadow-[0_22px_70px_rgba(15,23,42,0.10)] px-4 py-10 sm:px-7 sm:py-12">
          {/* Desktop connector rail */}
          <div
            className="hidden lg:block absolute left-12 right-12 top-[7.75rem] h-px bg-gradient-to-r from-transparent via-black/[0.12] to-transparent"
            aria-hidden
          />

          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {STEPS.map((item, idx) => (
              <div
                key={item.step}
                className={`scroll-reveal scroll-reveal-delay-${(idx % 4) + 1} relative h-full`}
              >
                <div className="group h-full rounded-3xl border border-black/[0.08] bg-white px-5 py-7 text-center shadow-[0_14px_48px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(15,23,42,0.12)]">
                  <span className="inline-flex items-center rounded-full bg-foreground px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_rgba(15,23,42,0.22)]">
                    {item.step}
                  </span>

                  <div className="mt-4 mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FCFBF7] border border-black/[0.10] shadow-[0_8px_24px_rgba(15,23,42,0.05)] ring-4 ring-white">
                    <Icon name={item.icon} size={24} className="text-foreground" />
                  </div>

                  <h3 className="mt-4 font-display font-extrabold text-foreground text-base sm:text-[17px] leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance note */}
        <div className="scroll-reveal mt-6 sm:mt-7 flex justify-center">
          <p className="inline-flex items-start gap-2.5 rounded-2xl border border-black/[0.08] bg-white px-5 py-3.5 text-xs sm:text-sm text-foreground-muted leading-relaxed max-w-3xl shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
            <Icon name="InformationCircleIcon" size={17} className="text-foreground/60 shrink-0 mt-0.5" />
            <span>
              Exact documentation requirements can vary depending on company type, location and applicable
              regulations.
            </span>
          </p>
        </div>

        <div className="text-center mt-8 sm:mt-10 scroll-reveal">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-foreground text-white hover:bg-foreground/90 transition-colors shadow-[0_14px_40px_rgba(15,23,42,0.22)]"
          >
            Start My Company Registration
            <Icon name="ArrowRightIcon" size={16} className="text-white" />
          </button>
        </div>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        prefillRequirement="company-registration"
        metadata={{ action: "company-steps-cta", page: "company-registration" }}
      />
    </section>
  );
}
