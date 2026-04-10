"use client";
import React, { useState } from "react";
import Icon from "@/components/ui/AppIcon";
import ContactModal from "./ContactModal";

const STEPS = [
  {
    step: "Step 01",
    icon: "MapPinIcon" as const,
    iconWrapper: "bg-gradient-to-br from-primary-light to-white border border-primary/20 shadow-[0_10px_28px_rgba(31,111,255,0.12)]",
    iconClass: "text-primary",
    title: "Choose City & Plan",
    description:
      "Select your preferred city and choose a plan that fits your business needs. Enjoy a hassle-free setup.",
  },
  {
    step: "Step 02",
    icon: "DocumentTextIcon" as const,
    iconWrapper: "bg-[#FCFBF7] border border-black/[0.10] shadow-[0_8px_24px_rgba(15,23,42,0.05)]",
    iconClass: "text-foreground",
    title: "Submit Documents",
    description:
      "Upload your Aadhaar, PAN card, and business documents. Our team verifies everything in under 24 hours.",
  },
  {
    step: "Step 03",
    icon: "ShieldCheckIcon" as const,
    iconWrapper: "bg-gradient-to-br from-accent-light to-white border border-accent/25 shadow-[0_10px_28px_rgba(34,197,94,0.14)]",
    iconClass: "text-accent",
    title: "Get Your Address",
    description:
      "Secure a verified virtual office address with complete documentation and GST registration.",
  },
];

function StepConnector() {
  return (
    <div
      className="hidden lg:flex flex-1 items-center justify-center min-w-[2.75rem] max-w-[4rem] self-stretch pt-16"
      aria-hidden
    >
      <div className="flex items-center w-full">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-black/[0.12] to-black/[0.18] min-w-[6px]" />
        <span className="mx-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-white shadow-[0_10px_28px_rgba(15,23,42,0.10)] ring-4 ring-[#FCFBF7]/80">
          <Icon name="ArrowRightIcon" size={17} className="text-primary" />
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-black/[0.12] to-black/[0.18] min-w-[6px]" />
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="how-it-works" className="relative py-20 sm:py-24 bg-[#FCFBF7] overflow-hidden">
      {/* Ringg-like ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -right-20 h-[min(480px,55vw)] w-[min(480px,55vw)] rounded-full bg-primary/[0.07] blur-3xl" />
        <div className="absolute -bottom-32 -left-16 h-[min(420px,50vw)] w-[min(420px,50vw)] rounded-full bg-black/[0.04] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(15,23,42,0.09) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 scroll-reveal">
          <h2
            className="font-display font-extrabold text-foreground mb-4 tracking-tight flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            <span
              className="inline-flex items-center justify-center rounded-2xl bg-black/[0.06] border border-black/[0.08] p-2.5 sm:p-2 shrink-0"
              aria-hidden
            >
              <Icon name="QueueListIcon" size={28} className="text-foreground" />
            </span>
            <span className="text-center leading-tight max-w-[min(100%,20rem)] sm:max-w-none">
            Get Your Virtual Office in Three Simple Steps
            </span>
          </h2>
          <p className="text-foreground-muted max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            Skip the paperwork stress. Choose your city, pick a plan, and get compliant virtual office documents delivered quickly and easily.
          </p>
        </div>

        {/* Steps rail inside soft panel */}
        <div className="rounded-3xl border border-black/[0.08] bg-white/70 backdrop-blur-sm shadow-[0_22px_70px_rgba(15,23,42,0.10)] px-4 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-center gap-10 lg:gap-0">
            {STEPS.map((item, idx) => (
              <React.Fragment key={item.step}>
                <div className="relative flex-1 min-w-0 max-w-md mx-auto lg:max-w-none">
                  <span className="absolute -top-3 left-7 z-10 inline-flex items-center rounded-full bg-foreground px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_rgba(15,23,42,0.22)] ring-4 ring-white/90">
                    {item.step}
                  </span>
                  <div className="group relative h-full rounded-3xl border border-black/[0.08] bg-white pt-9 px-7 pb-8 sm:px-9 sm:pb-9 shadow-[0_14px_48px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(15,23,42,0.12)]">
                    <div
                      className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden
                    />
                    <div
                      className={`inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-2xl ${item.iconWrapper}`}
                    >
                      <Icon name={item.icon} size={30} className={item.iconClass} />
                    </div>
                    <h3 className="mt-6 font-display font-extrabold text-foreground text-xl sm:text-2xl leading-tight tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-foreground-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                {idx < STEPS.length - 1 && (
                  <>
                    <StepConnector />
                    <div className="lg:hidden flex justify-center py-0.5" aria-hidden>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.08] bg-white shadow-[0_10px_28px_rgba(15,23,42,0.10)] ring-4 ring-[#FCFBF7]">
                        <Icon name="ArrowDownIcon" size={18} className="text-primary" />
                      </span>
                    </div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 sm:mt-14 scroll-reveal">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm bg-foreground text-white hover:bg-foreground/90 transition-all duration-300 shadow-[0_14px_40px_rgba(15,23,42,0.22)] hover:shadow-[0_18px_50px_rgba(15,23,42,0.28)]"
          >
            Start Your Application
            <Icon name="ArrowRightIcon" size={16} className="text-white" />
          </button>
        </div>
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
