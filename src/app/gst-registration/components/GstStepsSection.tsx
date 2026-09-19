"use client";
import React, { useState } from "react";
import Icon from "@/components/ui/AppIcon";
import ContactModal from "@/app/homepage/components/ContactModal";

const STEPS = [
  {
    step: "01",
    icon: "MapPinIcon" as const,
    iconWrapper:
      "bg-gradient-to-br from-primary-light to-white border border-primary/20 shadow-[0_10px_28px_rgba(31,111,255,0.12)]",
    iconClass: "text-primary",
    title: "Choose Your City",
    description: "Select the city where you need a business address.",
  },
  {
    step: "02",
    icon: "RectangleStackIcon" as const,
    iconWrapper: "bg-[#FCFBF7] border border-black/[0.10] shadow-[0_8px_24px_rgba(15,23,42,0.05)]",
    iconClass: "text-foreground",
    title: "Select Your Plan",
    description: "Choose a GST-focused virtual office plan.",
  },
  {
    step: "03",
    icon: "DocumentTextIcon" as const,
    iconWrapper:
      "bg-gradient-to-br from-accent-light to-white border border-accent/25 shadow-[0_10px_28px_rgba(34,197,94,0.14)]",
    iconClass: "text-accent",
    title: "Submit Your Details",
    description: "Provide required KYC/business information.",
  },
  {
    step: "04",
    icon: "CheckBadgeIcon" as const,
    iconWrapper: "bg-[#FFF7ED] border border-amber-500/20 shadow-[0_10px_28px_rgba(245,158,11,0.14)]",
    iconClass: "text-amber-500",
    title: "Get Your Address & Documents",
    description:
      "Receive the applicable virtual office documentation and proceed with your GST registration.",
  },
];

function StepConnector() {
  return (
    <div
      className="hidden lg:flex items-center justify-center w-8 xl:w-10 shrink-0 self-stretch pt-16"
      aria-hidden
    >
      <div className="flex items-center w-full">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-black/[0.12] to-black/[0.18]" />
        <span className="mx-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-white shadow-[0_10px_28px_rgba(15,23,42,0.10)] ring-4 ring-[#FCFBF7]/80">
          <Icon name="ArrowRightIcon" size={14} className="text-primary" />
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-black/[0.12] to-black/[0.18]" />
      </div>
    </div>
  );
}

export default function GstStepsSection() {
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
              Get Your GST Virtual Office in 4 Simple Steps
            </span>
          </h2>
          <p className="text-center text-foreground-muted max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            A straightforward process — pick your city, choose a plan, share your details, and receive your
            documentation.
          </p>
        </div>

        <div className="rounded-3xl border border-black/[0.08] bg-white/70 backdrop-blur-sm shadow-[0_22px_70px_rgba(15,23,42,0.10)] px-4 py-10 sm:px-7 sm:py-12">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-0">
            {STEPS.map((item, idx) => (
              <React.Fragment key={item.step}>
                <div className="relative flex-1 min-w-0 max-w-md mx-auto lg:max-w-none">
                  <span className="absolute -top-3 left-6 z-10 inline-flex items-center rounded-full bg-foreground px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_rgba(15,23,42,0.22)] ring-4 ring-white/90">
                    {item.step}
                  </span>
                  <div className="group relative h-full rounded-3xl border border-black/[0.08] bg-white pt-9 px-6 pb-7 shadow-[0_14px_48px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(15,23,42,0.12)]">
                    <div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconWrapper}`}
                    >
                      <Icon name={item.icon} size={26} className={item.iconClass} />
                    </div>
                    <h3 className="mt-5 font-display font-extrabold text-foreground text-lg sm:text-xl leading-tight tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-[15px] text-foreground-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {idx < STEPS.length - 1 && (
                  <>
                    <StepConnector />
                    <div className="lg:hidden flex justify-center" aria-hidden>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.08] bg-white shadow-[0_10px_28px_rgba(15,23,42,0.10)] ring-4 ring-[#F9F8F6]">
                        <Icon name="ArrowDownIcon" size={16} className="text-primary" />
                      </span>
                    </div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="text-center mt-10 sm:mt-12 scroll-reveal">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-foreground text-white hover:bg-foreground/90 transition-colors shadow-[0_14px_40px_rgba(15,23,42,0.22)]"
          >
            Start My GST Application
            <Icon name="ArrowRightIcon" size={16} className="text-white" />
          </button>
        </div>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        prefillRequirement="gst"
        metadata={{ action: "gst-steps-cta", page: "gst-registration" }}
      />
    </section>
  );
}
