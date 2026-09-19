"use client";
import React, { useState } from "react";
import Icon from "@/components/ui/AppIcon";
import ContactModal from "@/app/homepage/components/ContactModal";

const entities = [
  {
    icon: "BuildingOffice2Icon",
    badge: "Pvt Ltd",
    title: "Private Limited Company",
    description: "For founders establishing a formal company.",
  },
  {
    icon: "UsersIcon",
    badge: "LLP",
    title: "LLP",
    description: "For businesses operating as a limited liability partnership.",
  },
  {
    icon: "UserIcon",
    badge: "OPC",
    title: "OPC",
    description: "For eligible single-person company structures.",
  },
  {
    icon: "RocketLaunchIcon",
    badge: "Startups",
    title: "Startups",
    description: "For founders who want a professional address without immediately renting a full office.",
  },
  {
    icon: "GlobeAltIcon",
    badge: "Remote",
    title: "Remote Businesses",
    description: "For companies operating primarily online.",
  },
  {
    icon: "ArrowTrendingUpIcon",
    badge: "Growth",
    title: "Growing Businesses",
    description: "For businesses establishing a presence in another city.",
  },
];

export default function CompanyEntityTypesSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-16 sm:py-20 bg-[#F9F8F6]">
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
                <Icon name="IdentificationIcon" size={24} className="text-foreground" />
              </span>
              <span className="leading-tight min-w-0 text-center">
                Who Can Use a Virtual Office for Company Registration?
              </span>
            </h2>
            <p className="mt-3 text-center text-foreground-muted max-w-xl text-sm sm:text-base leading-relaxed mx-auto">
              Suited to different company structures and stages of growth.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {entities.map((e, i) => (
            <div
              key={e.title}
              className={`scroll-reveal scroll-reveal-delay-${(i % 4) + 1} group h-full flex flex-col rounded-3xl border border-black/[0.08] bg-white px-6 py-7 shadow-[0_18px_55px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_75px_rgba(15,23,42,0.11)]`}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className="w-12 h-12 rounded-2xl bg-black/[0.04] border border-black/[0.08] flex items-center justify-center shadow-[0_10px_26px_rgba(15,23,42,0.05)] shrink-0"
                  aria-hidden
                >
                  <Icon name={e.icon as "BuildingOffice2Icon"} size={22} className="text-foreground" />
                </span>
                <span className="inline-flex items-center rounded-full border border-black/[0.10] bg-[#FCFBF7] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-foreground/65">
                  {e.badge}
                </span>
              </div>

              <h3 className="mt-5 font-display font-extrabold text-lg text-foreground leading-snug">
                {e.title}
              </h3>
              <p className="mt-2 text-sm sm:text-[15px] text-foreground-muted leading-relaxed">
                {e.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12 scroll-reveal">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-foreground text-white hover:bg-foreground/90 transition-colors shadow-[0_14px_40px_rgba(15,23,42,0.18)]"
          >
            Find the Right Plan for My Company
            <Icon name="ArrowRightIcon" size={15} className="text-white" />
          </button>
        </div>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        prefillRequirement="company-registration"
        metadata={{ action: "company-entity-cta", page: "company-registration" }}
      />
    </section>
  );
}
