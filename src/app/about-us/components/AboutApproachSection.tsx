import React from "react";
import Icon from "@/components/ui/AppIcon";

const principles = [
  {
    icon: "CursorArrowRaysIcon",
    title: "Simple",
    description:
      "We make it easier to discover business address solutions without unnecessary complexity.",
  },
  {
    icon: "EyeIcon",
    title: "Transparent",
    description: "We aim to clearly communicate available services, plans, requirements, and limitations.",
  },
  {
    icon: "BuildingOffice2Icon",
    title: "Business-Focused",
    description:
      "We focus on practical solutions that help businesses establish and maintain a professional presence.",
  },
  {
    icon: "ShieldCheckIcon",
    title: "Trust-Focused",
    description:
      "We believe customers should receive clear information rather than exaggerated claims about government approvals or registration outcomes.",
  },
];

export default function AboutApproachSection() {
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
                <Icon name="FlagIcon" size={24} className="text-foreground" />
              </span>
              <span className="leading-tight min-w-0 text-center">Our Approach</span>
            </h2>
            <p className="mt-3 text-center text-foreground-muted max-w-xl text-sm sm:text-base leading-relaxed mx-auto">
              Four principles that shape how we present options and information.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {principles.map((p, i) => (
            <div
              key={p.title}
              className={`scroll-reveal scroll-reveal-delay-${(i % 4) + 1} h-full flex flex-col items-center text-center rounded-3xl border border-black/[0.08] bg-white px-6 py-8 shadow-[0_14px_45px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)]`}
            >
              <span
                className="w-12 h-12 rounded-2xl bg-black/[0.04] border border-black/[0.08] flex items-center justify-center shadow-[0_8px_22px_rgba(15,23,42,0.05)]"
                aria-hidden
              >
                <Icon name={p.icon} size={22} className="text-foreground" />
              </span>
              <h3 className="mt-5 font-display font-extrabold text-lg text-foreground leading-snug">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-foreground-muted leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
