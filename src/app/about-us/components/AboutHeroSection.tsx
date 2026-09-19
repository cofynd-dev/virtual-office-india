"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/ui/AppIcon";
import { useContactModal } from "@/components/ContactModalProvider";
import heroPattern from "@/assets/hero_pattern.svg";

export default function AboutHeroSection() {
  const { open } = useContactModal();

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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-18 lg:pb-20 text-center">
        <nav className="flex items-center justify-center gap-2 text-xs text-foreground-muted hero-animate-1">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Icon name="ChevronRightIcon" size={12} className="text-foreground-muted shrink-0" />
          <span className="text-foreground font-medium">About Us</span>
        </nav>

        <p className="hero-animate-1 mt-6 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-foreground/50">
          About Virtual Offices India
        </p>

        <h1
          className="hero-animate-2 mt-3 font-display font-extrabold text-foreground tracking-tight leading-[1.12]"
          style={{ fontSize: "clamp(1.85rem, 4.2vw, 3rem)" }}
        >
          Making Business Addresses <span className="text-[#7B765E]">Simple</span>
        </h1>

        <div className="hero-animate-3 mt-6 space-y-4 text-sm sm:text-base text-foreground-muted leading-relaxed max-w-2xl mx-auto">
          <p>
            Finding the right business address should not require spending weeks searching through office
            listings, comparing providers, and understanding complicated documentation requirements.
          </p>
          <p>
            Virtual Offices India is an independent online platform created to make that process simpler. We
            help entrepreneurs, startups, professionals, and growing businesses discover virtual office and
            business-address solutions across India.
          </p>
          <p>
            Whether you are setting up a new business, expanding into another city, looking for a professional
            business address, or exploring virtual office solutions for applicable GST and
            company-registration requirements, our platform helps you discover relevant options.
          </p>
        </div>

        <div className="hero-animate-4 mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/#cities"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-foreground text-white px-7 py-3.5 text-sm font-semibold hover:bg-foreground/90 transition-colors shadow-[0_14px_40px_rgba(15,23,42,0.22)]"
          >
            Explore Locations
            <Icon name="ArrowRightIcon" size={16} className="text-white" />
          </Link>
          <button
            type="button"
            onClick={() => open({ metadata: { action: "about-hero-cta", page: "about-us" } })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-black/[0.12] bg-white/90 backdrop-blur-sm text-foreground px-7 py-3.5 text-sm font-semibold hover:bg-white transition-colors shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
          >
            Contact Us
            <Icon name="ArrowRightIcon" size={16} className="text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}
