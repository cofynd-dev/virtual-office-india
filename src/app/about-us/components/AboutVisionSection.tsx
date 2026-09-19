import React from "react";
import Icon from "@/components/ui/AppIcon";

export default function AboutVisionSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#F9F8F6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="scroll-reveal relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-[#0a0a0a] text-white px-6 py-12 sm:px-12 sm:py-14 text-center shadow-[0_24px_80px_rgba(0,0,0,0.30)]">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/[0.05] blur-3xl"
            aria-hidden
          />

          <div className="relative z-10">
            <span
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.07] border border-white/[0.10]"
              aria-hidden
            >
              <Icon name="EyeIcon" size={26} className="text-white" />
            </span>

            <h2
              className="mt-6 font-display font-extrabold tracking-tight"
              style={{ fontSize: "clamp(1.35rem, 2.5vw, 2rem)" }}
            >
              Our Vision
            </h2>

            <p className="mt-3 text-sm sm:text-base text-white/55 leading-relaxed">
              Our vision is simple:
            </p>

            <p className="mt-4 font-display font-extrabold text-white text-lg sm:text-2xl leading-snug max-w-2xl mx-auto">
              To become a trusted platform for discovering virtual office and business-address solutions
              across India.
            </p>

            <p className="mt-5 text-sm sm:text-base text-white/55 leading-relaxed max-w-xl mx-auto">
              We want entrepreneurs to spend less time searching for an address and more time building their
              businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
