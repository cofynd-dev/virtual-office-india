"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/ui/AppIcon";
import type { City } from "@/lib/cities";
import heroPattern from "@/assets/hero_pattern.svg";
import CityHeroLeadForm from "./CityHeroLeadForm";

export default function CityHeroSection({ city }: { city: City }) {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F4] text-foreground min-h-[85svh] lg:min-h-0">
      {/* Match homepage hero: pattern + soft overlay */}
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 lg:py-24 w-full">
        <div className="grid lg:grid-cols-[1fr_min(26rem,100%)] xl:grid-cols-[1.05fr_420px] gap-10 lg:gap-12 xl:gap-16 items-start lg:items-center">
          {/* Left — Ringg-like typography + stat chips */}
          <div className="space-y-8 sm:space-y-5 lg:space-y-7 min-w-0">
            <nav className="flex items-center gap-2 text-xs text-foreground-muted hero-animate-1">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <Icon name="ChevronRightIcon" size={12} className="text-foreground-muted shrink-0" />
              <span className="text-foreground font-medium truncate">Virtual Office in {city.name}</span>
            </nav>

            <h1
              className="hero-animate-2 font-display font-extrabold text-foreground tracking-tight leading-[1.12]"
              style={{ fontSize: "clamp(1.85rem, 4.2vw, 3rem)" }}
            >
              Virtual Office in <span className="text-[#7B765E]">{city.name}</span>
              <span className="text-foreground"> for GST &amp; Company Registration</span>
            </h1>

            <p className="hero-animate-3 text-base sm:text-lg text-foreground-muted leading-relaxed max-w-xl">
              Upgrade your business presence with a premium {city.name} address in prime locations. GST & company registration documents included for instant setup.
            </p>

            <div className="hero-animate-3 grid grid-cols-3 gap-2 sm:gap-3 max-w-lg pt-1">
              {[
                { value: "10,000+", label: "Businesses Served", icon: "UsersIcon" as const },
                { value: "₹999", label: "From / month", icon: "CurrencyRupeeIcon" as const },
                { value: "24 hrs", label: "Setup", icon: "ClockIcon" as const },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-black/[0.08] bg-white/90 backdrop-blur-sm px-2.5 py-3 sm:px-3 sm:py-4 text-center shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
                >
                  <Icon name={s.icon} size={17} className="text-foreground mx-auto mb-1 opacity-90" />
                  <div className="font-display font-bold text-sm sm:text-base text-foreground leading-tight">{s.value}</div>
                  <div className="text-[10px] sm:text-xs text-foreground-muted font-medium mt-0.5 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — lead form (lg+ only; hidden on mobile) */}
          <div className="hero-animate-4 hidden lg:block w-full lg:max-w-none shrink-0">
            <CityHeroLeadForm city={city} />
          </div>
        </div>
      </div>
    </section>
  );
}
