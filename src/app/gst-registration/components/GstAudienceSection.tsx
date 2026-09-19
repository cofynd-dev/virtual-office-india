"use client";
import React, { useState } from "react";
import Icon from "@/components/ui/AppIcon";
import ContactModal from "@/app/homepage/components/ContactModal";

const audiences = [
  {
    icon: "RocketLaunchIcon",
    title: "Startups",
    description: "Register your business without committing to an office lease on day one.",
  },
  {
    icon: "ShoppingCartIcon",
    title: "E-commerce Sellers",
    description: "Get a business address to support GST registration for online selling.",
  },
  {
    icon: "ShoppingBagIcon",
    title: "Amazon / Marketplace Sellers",
    description: "Meet marketplace onboarding needs with a commercial business address.",
  },
  {
    icon: "SparklesIcon",
    title: "D2C Brands",
    description: "Set up registrations in the states where your customers and warehouses are.",
  },
  {
    icon: "UserIcon",
    title: "Freelancers",
    description: "Keep your home address private while using a professional business address.",
  },
  {
    icon: "BriefcaseIcon",
    title: "Consultants",
    description: "Present a credible business address to corporate clients and partners.",
  },
  {
    icon: "MegaphoneIcon",
    title: "Digital Agencies",
    description: "Operate lean with a business address and meeting space only when needed.",
  },
  {
    icon: "GlobeAltIcon",
    title: "Remote Businesses",
    description: "Maintain a registered business address while your team works from anywhere.",
  },
  {
    icon: "MapIcon",
    title: "Businesses Expanding to New States",
    description: "Add an address in a new state to support state-wise GST registration.",
  },
  {
    icon: "BuildingStorefrontIcon",
    title: "Small Business",
    description: "Keep overheads low while staying registered and reachable.",
  },
];

export default function GstAudienceSection() {
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
                <Icon name="UserGroupIcon" size={24} className="text-foreground" />
              </span>
              <span className="leading-tight min-w-0 text-center">
                Who Can Benefit From a GST Virtual Office?
              </span>
            </h2>
            <p className="mt-3 text-center text-foreground-muted max-w-xl text-sm sm:text-base leading-relaxed mx-auto">
              Built for businesses that need a registered address without a full-time office.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {audiences.map((a, i) => (
            <div
              key={a.title}
              className={`scroll-reveal scroll-reveal-delay-${(i % 4) + 1} h-full flex flex-col items-center text-center rounded-3xl border border-black/[0.08] bg-white px-5 py-6 shadow-[0_14px_45px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)]`}
            >
              <span
                className="w-11 h-11 rounded-2xl bg-black/[0.04] border border-black/[0.08] flex items-center justify-center shadow-[0_8px_20px_rgba(15,23,42,0.05)]"
                aria-hidden
              >
                <Icon name={a.icon as "RocketLaunchIcon"} size={20} className="text-foreground" />
              </span>
              <h3 className="mt-4 font-display font-extrabold text-[15px] sm:text-base text-foreground leading-snug">
                {a.title}
              </h3>
              <p className="mt-2 text-sm text-foreground-muted leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12 scroll-reveal">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-foreground text-white hover:bg-foreground/90 transition-colors shadow-[0_14px_40px_rgba(15,23,42,0.18)]"
          >
            Find the Right Plan for My Business
            <Icon name="ArrowRightIcon" size={15} className="text-white" />
          </button>
        </div>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        prefillRequirement="gst"
        metadata={{ action: "gst-audience-cta", page: "gst-registration" }}
      />
    </section>
  );
}
