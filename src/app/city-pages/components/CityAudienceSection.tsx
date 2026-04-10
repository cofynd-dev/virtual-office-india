"use client";

import React, { useMemo, useState } from "react";
import Icon from "@/components/ui/AppIcon";
import type { City } from "@/lib/cities";
import ContactModal from "@/app/homepage/components/ContactModal";

type TabKey = "startups" | "smes" | "freelancers" | "remote" | "international";

export default function CityAudienceSection({ city }: { city: City }) {
  const [active, setActive] = useState<TabKey>("startups");
  const [modalOpen, setModalOpen] = useState(false);

  const tabs = useMemo(
    () =>
      [
        { key: "startups", label: "Startups" },
        { key: "smes", label: "SMEs" },
        { key: "freelancers", label: "Freelancers" },
        { key: "remote", label: "Remote Businesses" },
        { key: "international", label: "Global Businesses" },
      ] as const,
    []
  );

  const content = useMemo(() => {
    const c = city.name;
    const href = "#city-form";

    const byTab: Record<TabKey, { title: string; bullets: string[]; cta: string; href: string }> = {
      startups: {
        title: "Perfect for Startups Who Need:",
        bullets: [
          `Virtual office in ${c} for GST registration without costly office rent`,
          "Professional business address for investor meetings and company branding",
          "Affordable virtual office solution as an alternative to physical office space",
          `Flexible virtual office plans in ${c} to scale your business easily`,
          `MCA-compliant registered office address for company registration in ${c}`,
        ],
        cta: "Get GST-Ready Virtual Office",
        href,
      },
      smes: {
        title: "Ideal for SMEs Looking For:",
        bullets: [
          "Virtual office as a secondary business address to expand regional presence",
          "Professional business address for branding, marketing, and client communication",
          "Cost-effective virtual office solution compared to traditional office space",
          "Access to meeting rooms for client meetings and presentations",
          "Established business address to enhance brand credibility and trust",
        ],
        cta: "Expand Your Presence",
        href,
      },
      freelancers: {
        title: "Great for Freelancers & Consultants:",
        bullets: [
          "Virtual office as a professional business address instead of a home address",
          `Premium business address in ${c} to build credibility with corporate clients`,
          `GST registration in ${c} for freelancers and independent consultants`,
          "Secure and private business address to protect your residential location",
          "Access to meeting rooms for client meetings and discussions",
        ],
        cta: "Get Your Virtual Office Now",
        href,
      },
      remote: {
        title: "Built for Remote & Distributed Teams:",
        bullets: [
          "Virtual office address for remote business operations",
          "Centralized mail management for distributed teams",
          "GST-compliant business address without office space",
          "On-demand meeting rooms for team collaboration",
          `Professional presence in prime locations of ${c}`,
        ],
        cta: "Get Remote-Ready Address",
        href,
      },
      international: {
        title: "Designed for Global Businesses Entering India:",
        bullets: [
          "Establish a strong India presence with a premium business address",
          "Compliant address for seamless company registration and legal requirements",
          "Trusted local presence for clients, partners, and stakeholders",
          "Secure international mail handling and forwarding",
          "Access to premium meeting spaces for visiting leadership teams",
        ],
        cta: "Establish India Presence",
        href,
      },
    };

    return byTab[active];
  }, [active, city.name]);

  return (
    <section className="py-16 sm:py-20 bg-[#FCFBF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative flex flex-col items-center text-center gap-5 mb-7 sm:mb-10">
          <div className="scroll-reveal flex flex-col items-center text-center">
            <h2
              className="font-display font-extrabold text-foreground flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full tracking-tight"
              style={{ fontSize: "clamp(1.35rem, 2.5vw, 2rem)" }}
            >
              <span className="inline-flex items-center justify-center rounded-2xl bg-black/[0.06] border border-black/[0.08] p-2.5 sm:p-3 shrink-0" aria-hidden>
                <Icon name="UsersIcon" size={24} className="text-foreground" />
              </span>
              <span className="leading-tight min-w-0 text-center">Virtual Offices for Your Business Needs</span>
            </h2>
            <p className="mt-3 text-center text-foreground-muted max-w-xl text-sm sm:text-base leading-relaxed mx-auto">
              Pick your business type and see why a virtual office fits.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-6 scroll-reveal scroll-reveal-delay-1">
          {tabs.map((t) => {
            const isActive = t.key === active;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setActive(t.key)}
                className={`px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl text-sm sm:text-[15px] font-semibold border transition-colors ${
                  isActive
                    ? "bg-foreground text-white border-black/[0.14] shadow-[0_10px_22px_rgba(15,23,42,0.16)]"
                    : "bg-white/80 text-foreground-muted border-black/[0.10] hover:border-black/[0.16] hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Content card */}
        <div className="scroll-reveal scroll-reveal-delay-2 rounded-3xl border border-black/[0.08] shadow-[0_18px_55px_rgba(15,23,42,0.08)] p-6 sm:p-7 bg-white">
          <h3 className="font-display font-bold text-lg sm:text-xl text-foreground mb-4">{content.title}</h3>

          <ul className="space-y-3.5 sm:space-y-4 text-base text-foreground-muted">
            {content.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-black/[0.04] border border-black/[0.10] flex items-center justify-center flex-shrink-0 shadow-[0_8px_18px_rgba(15,23,42,0.06)]">
                  <Icon name="CheckIcon" size={13} className="text-foreground" />
                </span>
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[15px] font-semibold bg-foreground text-white hover:bg-foreground/90 transition-colors shadow-[0_14px_40px_rgba(15,23,42,0.18)]"
            >
              {content.cta}
              <Icon name="ArrowRightIcon" size={14} className="text-white" />
            </button>
          </div>
        </div>
      </div>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

