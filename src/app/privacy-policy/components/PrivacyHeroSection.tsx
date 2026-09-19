import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/ui/AppIcon";
import heroPattern from "@/assets/hero_pattern.svg";

export default function PrivacyHeroSection() {
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

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-14 text-center">
        <nav className="flex items-center justify-center gap-2 text-xs text-foreground-muted hero-animate-1">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Icon name="ChevronRightIcon" size={12} className="text-foreground-muted shrink-0" />
          <span className="text-foreground font-medium">Privacy Policy</span>
        </nav>

        <h1
          className="hero-animate-2 mt-6 font-display font-extrabold text-foreground tracking-tight leading-[1.12]"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
        >
          Privacy <span className="text-[#7B765E]">Policy</span>
        </h1>

        <p className="hero-animate-3 mt-4 text-sm sm:text-base text-foreground-muted">
          Last Updated: 14 September 2026
        </p>
      </div>
    </section>
  );
}
