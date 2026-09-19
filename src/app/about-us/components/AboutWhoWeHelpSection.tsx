import React from "react";
import Icon from "@/components/ui/AppIcon";

const audiences = [
  { icon: "LightBulbIcon", label: "Entrepreneurs" },
  { icon: "RocketLaunchIcon", label: "Startups" },
  { icon: "UserIcon", label: "Freelancers" },
  { icon: "ChatBubbleLeftRightIcon", label: "Consultants" },
  { icon: "ShoppingCartIcon", label: "E-commerce sellers" },
  { icon: "TagIcon", label: "D2C brands" },
  { icon: "MegaphoneIcon", label: "Digital agencies" },
  { icon: "GlobeAltIcon", label: "Remote businesses" },
  { icon: "BuildingStorefrontIcon", label: "Small businesses" },
  { icon: "BriefcaseIcon", label: "Professional service providers" },
  { icon: "MapIcon", label: "Companies expanding into new cities" },
];

export default function AboutWhoWeHelpSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#FCFBF7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
              <span className="leading-tight min-w-0 text-center">Who We Help</span>
            </h2>
            <p className="mt-3 text-center text-foreground-muted max-w-xl text-sm sm:text-base leading-relaxed mx-auto">
              Virtual Offices India is designed for:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {audiences.map((a, i) => (
            <div
              key={a.label}
              className={`scroll-reveal scroll-reveal-delay-${(i % 4) + 1} flex items-center gap-3.5 rounded-2xl border border-black/[0.08] bg-white px-5 py-4 shadow-[0_10px_34px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(15,23,42,0.09)]`}
            >
              <span
                className="w-10 h-10 shrink-0 rounded-xl bg-black/[0.04] border border-black/[0.08] flex items-center justify-center"
                aria-hidden
              >
                <Icon name={a.icon} size={19} className="text-foreground" />
              </span>
              <span className="text-sm sm:text-[15px] font-semibold text-foreground leading-snug">
                {a.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
