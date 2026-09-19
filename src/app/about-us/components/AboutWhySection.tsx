import React from "react";
import Icon from "@/components/ui/AppIcon";

const reasons = [
  {
    icon: "MapPinIcon",
    title: "Discover Multiple Locations",
    description:
      "Explore virtual office solutions across major business and commercial locations in India.",
    iconBg: "bg-[#EFF6FF]",
    iconColor: "text-[#2563EB]",
  },
  {
    icon: "BriefcaseIcon",
    title: "Business-Friendly Solutions",
    description:
      "Virtual offices can help businesses maintain a professional presence without immediately committing to a traditional full-time office.",
    iconBg: "bg-[#ECFDF5]",
    iconColor: "text-[#16A34A]",
  },
  {
    icon: "MagnifyingGlassIcon",
    title: "Simple Discovery",
    description:
      "Instead of searching across multiple providers, users can explore relevant options through one platform.",
    iconBg: "bg-[#FFF7ED]",
    iconColor: "text-[#F59E0B]",
  },
  {
    icon: "DocumentTextIcon",
    title: "Documentation Support",
    description:
      "Depending on the selected service and location, the relevant provider may offer documentation and facilities required for applicable business needs.",
    iconBg: "bg-[#F3E8FF]",
    iconColor: "text-[#7C3AED]",
  },
  {
    icon: "AdjustmentsHorizontalIcon",
    title: "Flexible Options",
    description:
      "Our platform caters to different business requirements, from startups and freelancers to e-commerce companies and growing businesses.",
    iconBg: "bg-[#E0F2FE]",
    iconColor: "text-[#0EA5E9]",
  },
  {
    icon: "ChatBubbleLeftRightIcon",
    title: "Assistance When You Need It",
    description:
      "Our team helps users understand available options and coordinates with relevant service providers where required.",
    iconBg: "bg-[#FEF2F2]",
    iconColor: "text-[#EF4444]",
  },
];

export default function AboutWhySection() {
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
                <Icon name="SparklesIcon" size={24} className="text-foreground" />
              </span>
              <span className="leading-tight min-w-0 text-center">Why Virtual Offices India?</span>
            </h2>
            <p className="mt-3 text-center text-foreground-muted max-w-xl text-sm sm:text-base leading-relaxed mx-auto">
              What you can expect when you use our platform to find a business address.
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
                <Icon name={r.icon} size={22} className={r.iconColor} />
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
      </div>
    </section>
  );
}
