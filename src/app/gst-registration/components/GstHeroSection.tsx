"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/ui/AppIcon";
import ContactModal from "@/app/homepage/components/ContactModal";
import heroPattern from "@/assets/hero_pattern.svg";

const trustItems = [
  { icon: "CheckBadgeIcon" as const, label: "Verified Locations" },
  { icon: "DocumentTextIcon" as const, label: "Documentation Support" },
  { icon: "MapPinIcon" as const, label: "Multiple Cities" },
  { icon: "UserGroupIcon" as const, label: "Expert Assistance" },
];

export default function GstHeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#F5F5F4] text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={heroPattern}
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,0,0,0.06), transparent 55%),
              repeating-linear-gradient(
                105deg,
                transparent,
                transparent 18px,
                rgba(0,0,0,0.02) 18px,
                rgba(0,0,0,0.02) 19px
              )
            `,
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-18 lg:pb-20 text-center">
        <nav className="flex items-center justify-center gap-2 text-xs text-foreground-muted hero-animate-1">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Icon name="ChevronRightIcon" size={12} className="text-foreground-muted shrink-0" />
          <span className="text-foreground font-medium">GST Registration</span>
        </nav>

        <h1
          className="hero-animate-2 mt-6 font-display font-extrabold text-foreground tracking-tight leading-[1.12]"
          style={{ fontSize: "clamp(1.85rem, 4.2vw, 3rem)" }}
        >
          Virtual Office for <span className="text-[#7B765E]">GST Registration</span> in India
        </h1>

        <p className="hero-animate-3 mt-5 text-base sm:text-lg text-foreground-muted leading-relaxed max-w-2xl mx-auto">
          Get a professional business address and supporting documentation for your GST registration —
          without renting a traditional office.
        </p>

        <div className="hero-animate-3 mt-7 flex justify-center">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground text-white px-7 py-3.5 text-sm font-semibold hover:bg-foreground/90 transition-colors shadow-[0_14px_40px_rgba(15,23,42,0.22)]"
          >
            Get GST Virtual Office
            <Icon name="ArrowRightIcon" size={16} className="text-white" />
          </button>
        </div>

        {/* Trust strip */}
        <div className="hero-animate-4 mt-9 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-3xl mx-auto">
          {trustItems.map((t) => (
            <div
              key={t.label}
              className="flex items-center justify-center gap-2 rounded-2xl border border-black/[0.08] bg-white/90 backdrop-blur-sm px-3 py-3 shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
            >
              <Icon name={t.icon} size={16} className="text-foreground shrink-0 opacity-90" />
              <span className="text-[11px] sm:text-xs font-semibold text-foreground leading-snug text-center">
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        prefillRequirement="gst"
        metadata={{ action: "gst-hero-cta", page: "gst-registration" }}
      />
    </section>
  );
}
