"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Icon from "@/components/ui/AppIcon";

const testimonials = [
  {
    chips: [
      { icon: "DocumentCheckIcon", label: "GST Registration" },
      { icon: "MapPinIcon", label: "Gurgaon" },
    ],
    text:
      "We needed a Gurgaon address for GST registration urgently. Cofynd delivered all documents within 3 hours. Our GST was approved on the first attempt — no rejections.",
    highlight: "GST approved on the first attempt",
    author: "Rohit Agarwal · Founder & CEO, TechSprint",
    logoText: "TechSprint",
  },
  {
    chips: [
      { icon: "ShoppingBagIcon", label: "E-commerce" },
      { icon: "MapPinIcon", label: "Bangalore" },
    ],
    text:
      "As an Amazon seller, I needed a Bangalore address fast. Cofynd's Basic plan was exactly what I needed. The process was completely online and took less than a day.",
    highlight: "Fully online in under a day",
    author: "Priya Menon · E-commerce Seller, Artisan Kreations",
    logoText: "Artisan Kreations",
  },
  {
    chips: [
      { icon: "AcademicCapIcon", label: "CA Recommended" },
      { icon: "ShieldCheckIcon", label: "100% compliant docs" },
    ],
    text:
      "I recommend Cofynd to all my clients for GST and company registration. The documents are 100% compliant. Out of 40+ clients I've sent, zero rejections.",
    highlight: "40+ clients, zero rejections",
    author: "Vikram Nair · CA & Business Consultant",
    logoText: "FinGrowth",
  },
];

export type TestimonialsSectionProps = {
  /** When set, shows the Ringg-style section heading above the slider (e.g. city pages). */
  headingTitle?: string;
  headingSubtitle?: string;
};

export default function TestimonialsSection({
  headingTitle,
  headingSubtitle,
}: TestimonialsSectionProps = {}) {
  const items = useMemo(() => testimonials, []);
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);
  const [inView, setInView] = useState(true);
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => setInView(Boolean(entries?.[0]?.isIntersecting)),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      if (!inView) return;
      setActive((i) => (i + 1) % items.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, [items.length, inView]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  const prev = () => setActive((i) => (i - 1 + items.length) % items.length);
  const next = () => setActive((i) => (i + 1) % items.length);

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
      }}
      id="testimonials"
      className="py-20 sm:py-24 bg-[#FCFBF7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {headingTitle ? (
          <div className="relative flex flex-col items-center text-center gap-5 mb-10 sm:mb-12">
            <div className="scroll-reveal flex flex-col items-center text-center">
              <h2
                className="font-display font-extrabold text-foreground flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full tracking-tight"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
              >
                <span
                  className="inline-flex items-center justify-center rounded-2xl bg-black/[0.06] border border-black/[0.08] p-2.5 sm:p-3 shrink-0"
                  aria-hidden
                >
                  <Icon name="ChatBubbleLeftRightIcon" size={24} className="text-foreground" />
                </span>
                <span className="leading-tight min-w-0 text-center">{headingTitle}</span>
              </h2>
              {headingSubtitle ? (
                <p className="mt-3 text-center text-foreground-muted max-w-xl text-sm sm:text-base leading-relaxed mx-auto">
                  {headingSubtitle}
                </p>
              ) : null}
            </div>
          </div>
        ) : null}
        <div
          className="scroll-reveal"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
          onTouchStart={() => (pausedRef.current = true)}
          onTouchEnd={() => (pausedRef.current = false)}
        >
          {/* Smooth slider */}
          <div className="rounded-[28px] bg-[#f7f7f3] shadow-[0_26px_90px_rgba(15,23,42,0.10)] overflow-hidden">
            <div className="relative overflow-hidden">
              <div
                ref={trackRef}
                className="flex will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: `translateX(-${active * 100}%)` }}
              >
                {items.map((it, idx) => (
                  <div key={`${it.author}-${idx}`} className="w-full shrink-0">
                    <div className="grid lg:grid-cols-[1.2fr_0.9fr]">
                      {/* Left content */}
                      <div className="p-7 sm:p-10 lg:p-12">
                        <div className="flex flex-wrap items-center gap-3">
                          {it.chips?.slice(0, 2).map((c) => (
                            <span
                              key={c.label}
                              className="inline-flex items-center gap-2 rounded-full border border-black/[0.22] px-4 py-2 text-[12px] font-semibold text-foreground"
                            >
                              <Icon name={c.icon as "PhoneIcon"} size={14} className="text-foreground" />
                              {c.label}
                            </span>
                          ))}
                        </div>

                        <p className="mt-6 text-base sm:text-lg lg:text-xl text-foreground leading-relaxed max-w-2xl">
                          {it.text}
                        </p>

                        <div className="mt-6 rounded-xl border border-black/[0.18] bg-[#E6DFCC] px-4 py-3 inline-flex items-center gap-2">
                          <Icon name="ArrowTrendingUpIcon" size={16} className="text-foreground" />
                          <span className="text-[13px] font-semibold text-foreground">{it.highlight}</span>
                        </div>

                        <div className="mt-5 flex items-center gap-3 text-foreground">
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-black/[0.22] bg-[#f7f7f3]">
                            <Icon name="WaveformIcon" size={16} className="text-foreground" />
                          </span>
                          <span className="text-[13px] font-semibold">{it.author}</span>
                        </div>
                      </div>

                      {/* Right logo panel */}
                      <div className="relative p-7 sm:p-10 lg:p-12 flex items-center justify-center">
                        <div className="w-full max-w-[420px] aspect-[4/3] rounded-[26px] bg-[#e1dcc9] flex items-center justify-center">
                          <div
                            className="font-display font-extrabold tracking-tight text-[#7B765E]"
                            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                          >
                            {it.logoText}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom controls */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={[
                    "w-2 h-2 rounded-full transition-colors",
                    i === active ? "bg-foreground" : "bg-foreground/20 hover:bg-foreground/35",
                  ].join(" ")}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={prev}
                className="w-10 h-10 rounded-full border border-black/[0.18] bg-[#F7F3E8] shadow-[0_14px_40px_rgba(15,23,42,0.10)] hover:bg-[#F1ECDE] transition-colors flex items-center justify-center"
              >
                <Icon name="ArrowLeftIcon" size={18} className="text-foreground" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={next}
                className="w-10 h-10 rounded-full border border-black/[0.18] bg-[#0B0B0B] shadow-[0_14px_40px_rgba(15,23,42,0.12)] hover:bg-black/90 transition-colors flex items-center justify-center"
              >
                <Icon name="ArrowRightIcon" size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}