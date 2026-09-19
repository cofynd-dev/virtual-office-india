import React from "react";
import Icon from "@/components/ui/AppIcon";

const useCases = [
  {
    icon: "RocketLaunchIcon",
    title: "Launching a Startup",
    description: "Get registered and running before committing to an office lease.",
  },
  {
    icon: "BuildingOffice2Icon",
    title: "Registering a Pvt Ltd Company",
    description: "Use a commercial address as the registered office for incorporation.",
  },
  {
    icon: "UsersIcon",
    title: "Setting Up an LLP",
    description: "A professional address for partners operating without a shared office.",
  },
  {
    icon: "MapIcon",
    title: "Expanding Into a New City",
    description: "Establish a presence in a new location without a second lease.",
  },
  {
    icon: "GlobeAltIcon",
    title: "Running a Remote Business",
    description: "Keep a fixed business address while your team works from anywhere.",
  },
  {
    icon: "SparklesIcon",
    title: "Establishing a Professional Business Presence",
    description: "Present a commercial address instead of a residential one.",
  },
  {
    icon: "ShoppingCartIcon",
    title: "E-commerce Businesses",
    description: "Support registrations and correspondence for online operations.",
  },
  {
    icon: "BriefcaseIcon",
    title: "Consultants & Agencies",
    description: "Build client confidence with a credible business address.",
  },
];

export default function CompanyUseCasesSection() {
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
                <Icon name="LightBulbIcon" size={24} className="text-foreground" />
              </span>
              <span className="leading-tight min-w-0 text-center">
                Why Businesses Choose a Virtual Registered Office
              </span>
            </h2>
            <p className="mt-3 text-center text-foreground-muted max-w-xl text-sm sm:text-base leading-relaxed mx-auto">
              Common situations where a virtual registered office makes practical sense.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {useCases.map((u, i) => (
            <div
              key={u.title}
              className={`scroll-reveal scroll-reveal-delay-${(i % 4) + 1} h-full flex flex-col items-center text-center rounded-3xl border border-black/[0.08] bg-white px-5 py-6 shadow-[0_14px_45px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)]`}
            >
              <span
                className="w-11 h-11 rounded-2xl bg-black/[0.04] border border-black/[0.08] flex items-center justify-center shadow-[0_8px_20px_rgba(15,23,42,0.05)]"
                aria-hidden
              >
                <Icon name={u.icon as "RocketLaunchIcon"} size={20} className="text-foreground" />
              </span>
              <h3 className="mt-4 font-display font-extrabold text-[15px] sm:text-base text-foreground leading-snug">
                {u.title}
              </h3>
              <p className="mt-2 text-sm text-foreground-muted leading-relaxed">{u.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
