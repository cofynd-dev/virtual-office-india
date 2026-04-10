"use client";

import React, { useState } from "react";
import Icon from "@/components/ui/AppIcon";
import ContactModal from "@/app/homepage/components/ContactModal";
import type { City } from "@/lib/cities";

const steps = [
  {
    number: 1,
    title: "Choose Location",
    description:
      "Select your ideal Gurugram location from our premium business addresses.",
  },
  {
    number: 2,
    title: "Submit Documents",
    description:
      "Upload your documents, and we’ll verify and process them within 24–72 hours.",
  },
  {
    number: 3,
    title: "Get Address & Start Business",
    description:
      "Receive instant confirmation and start using your premium business address right away.",
  },
];

export default function CitySetupStepsSection({ city }: { city: City }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-16 sm:py-20 bg-[#FCFBF7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative flex flex-col items-center text-center gap-5 mb-10">
          <div className="scroll-reveal flex flex-col items-center text-center">
            <h2
              className="font-display font-extrabold text-foreground flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full tracking-tight"
              style={{ fontSize: "clamp(1.35rem, 2.5vw, 2rem)" }}
            >
              <span className="inline-flex items-center justify-center rounded-2xl bg-black/[0.06] border border-black/[0.08] p-2.5 sm:p-3 shrink-0" aria-hidden>
                <Icon name="SparklesIcon" size={24} className="text-foreground" />
              </span>
              <span className="leading-tight min-w-0 text-center">Virtual Office Setup in 3 Easy Steps</span>
            </h2>
            <p className="mt-3 text-center text-foreground-muted max-w-xl text-sm sm:text-base leading-relaxed mx-auto">
            Pick your location, submit your documents, and get started instantly.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((s, idx) => (
            <div
              key={s.number}
              className={`scroll-reveal scroll-reveal-delay-${idx + 1} rounded-3xl bg-white px-6 py-7 border border-black/[0.08] shadow-[0_18px_55px_rgba(15,23,42,0.08)]`}
            >
              <div className="w-12 h-12 rounded-2xl bg-black/[0.04] border border-black/[0.08] flex items-center justify-center mb-4">
                <span className="font-display font-extrabold text-foreground text-lg">{s.number}</span>
              </div>
              <div className="font-display font-extrabold text-lg text-foreground mb-2">{s.title}</div>
              <p className="text-sm text-foreground-muted leading-relaxed">
                {idx === 0 ? s.description.replace("city", city.name) : s.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 scroll-reveal scroll-reveal-delay-4">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-foreground text-white hover:bg-foreground/90 transition-colors shadow-[0_14px_40px_rgba(15,23,42,0.18)]"
          >
            Start Setup Today →
            <Icon name="ArrowRightIcon" size={14} className="text-white" />
          </button>
        </div>
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

