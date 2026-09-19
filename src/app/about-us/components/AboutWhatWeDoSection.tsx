import React from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";

const capabilities: { label: string; href?: string }[] = [
  { label: "Explore virtual office locations", href: "/#cities" },
  { label: "Discover business address solutions" },
  { label: "Compare available plans and services" },
  { label: "Explore GST-related virtual office solutions", href: "/gst-registration" },
  {
    label: "Explore company-registration and registered-office solutions",
    href: "/company-registration",
  },
  { label: "Find options across different Indian cities", href: "/#cities" },
  { label: "Submit enquiries" },
  { label: "Connect with relevant service providers" },
  { label: "Get assistance during the enquiry or booking process where available" },
];

export default function AboutWhatWeDoSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#FCFBF7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
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
                <Icon name="Squares2X2Icon" size={24} className="text-foreground" />
              </span>
              <span className="leading-tight min-w-0 text-center">What We Do</span>
            </h2>
            <p className="mt-3 text-center text-foreground-muted max-w-xl text-sm sm:text-base leading-relaxed mx-auto">
              Virtual Offices India brings virtual office solutions together in one easy-to-use platform.
              Through our website, users can:
            </p>
          </div>
        </div>

        <div className="scroll-reveal scroll-reveal-delay-1 rounded-3xl border border-black/[0.08] bg-white px-5 py-7 sm:px-9 sm:py-10 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {capabilities.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <span
                  className="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center"
                  aria-hidden
                >
                  <Icon name="CheckIcon" size={13} className="text-accent" />
                </span>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-sm sm:text-[15px] text-foreground-muted leading-relaxed hover:text-foreground transition-colors underline-offset-2 hover:underline"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-sm sm:text-[15px] text-foreground-muted leading-relaxed">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <p className="scroll-reveal scroll-reveal-delay-2 mt-6 text-center text-sm sm:text-[15px] text-foreground-muted leading-relaxed max-w-2xl mx-auto">
          Our goal is to make business-address discovery simple, transparent, and convenient.
        </p>
      </div>
    </section>
  );
}
