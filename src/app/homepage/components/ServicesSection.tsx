"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Icon from "@/components/ui/AppIcon";
import ContactModal from "./ContactModal";
import milestonesImage from "@/assets/milestones.svg";
import theProcessIllustration from "@/assets/the-process.svg";
import consultationFormIllustration from "@/assets/consultation-form.svg";

const services = [
  {
    icon: "DocumentCheckIcon",
    title: "GST Registration Virtual Office",
    description:
      "Get a GST-compliant business address with all required documents: NOC, rent agreement, and utility bills accepted by GST authorities.",
    features: ["GST-approved address", "NOC provided", "Rent agreement included", "Utility bills"],
    badge: "Most Popular",
    badgeColor: "bg-primary text-white",
    href: "/#lead-form",
    color: "border-primary/20 bg-gradient-to-br from-primary-light to-white",
    span: "lg:col-span-1",
    imageUrl: theProcessIllustration,
    imageAlt: "Illustration of the GST registration and documentation process",
    leftVisual: "illustration-only" as const,
  },
  {
    icon: "BuildingOfficeIcon",
    title: "Company Registration Address",
    description:
      "Use our prime address for MCA company incorporation. Accepted by ROC offices across all major cities.",
    features: ["ROC-approved address", "MOA & AOA compatible", "Valid for address proof & verification", "Secure courier handling"],
    badge: "ROC Approved",
    badgeColor: "bg-accent text-white",
    href: "/#lead-form",
    color: "border-accent/20 bg-gradient-to-br from-accent-light to-white",
    span: "lg:col-span-1",
    imageUrl: milestonesImage,
    imageAlt: "Illustration of company registration milestones from setup to compliance",
    leftVisual: "illustration-only" as const,
  },
  {
    icon: "EnvelopeOpenIcon",
    title: "Business Address Plan",
    description:
      "Professional business address for correspondence, mail handling, and brand credibility without the cost of physical office space.",
    features: ["Mail handling", "Courier forwarding", "Call answering", "Meeting rooms"],
    badge: "Best Value",
    badgeColor: "bg-warning text-white",
    href: "/#lead-form",
    color: "border-warning/20 bg-gradient-to-br from-warning/5 to-white",
    span: "lg:col-span-1",
    imageUrl: consultationFormIllustration,
    imageAlt: "Illustration of consultation and business address signup",
    leftVisual: "illustration-only" as const,
    /** Portrait SVG (438×500): size by height so it fills the left panel cleanly */
    illustrationLayout: "tall" as const,
  },
];

/** Min gap between wheel-driven slide steps (only counted when a step actually happens). */
const WHEEL_STEP_GAP_MS = 420;

export default function ServicesSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const lastScrollAtRef = useRef<number>(0);
  const touchStartXRef = useRef<number | null>(null);
  const swipeDragRef = useRef<{
    startX: number;
    startY: number;
    deltaX: number;
    mode: null | "h" | "v";
  } | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [instantMove, setInstantMove] = useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  const slides = useMemo(() => services, []);
  const len = slides.length;

  /** Top = clone of last, middle = real slides, bottom = clone of first — keeps wrap motion continuous. */
  const extendedSlides = useMemo(() => {
    if (len === 0) return [];
    if (len === 1) return [slides[0], slides[0], slides[0]];
    return [slides[len - 1], ...slides, slides[0]];
  }, [slides, len]);

  const [trackIndex, setTrackIndex] = useState(1);
  const trackIndexRef = useRef(trackIndex);
  trackIndexRef.current = trackIndex;

  const logicalIndex =
    len === 0
      ? 0
      : trackIndex === 0
        ? len - 1
        : trackIndex === len + 1
          ? 0
          : trackIndex - 1;

  const go = (dir: 1 | -1) => {
    if (len === 0) return;
    setTrackIndex((i) => {
      const next = i + dir;
      if (next < 0 || next > len + 1) return i;
      return next;
    });
  };

  const onTrackTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName !== "transform") return;
    if (len <= 0) return;
    const ti = trackIndexRef.current;
    if (len === 1) {
      if (ti === 0 || ti === 2) {
        setInstantMove(true);
        setTrackIndex(1);
        lastScrollAtRef.current = 0;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setInstantMove(false));
        });
      }
      return;
    }
    if (ti === 0) {
      setInstantMove(true);
      setTrackIndex(len);
      lastScrollAtRef.current = 0;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setInstantMove(false));
      });
    } else if (ti === len + 1) {
      setInstantMove(true);
      setTrackIndex(1);
      lastScrollAtRef.current = 0;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setInstantMove(false));
      });
    }
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      setSliderWidth(el.clientWidth || 0);
    });
    ro.observe(el);
    setSliderWidth(el.clientWidth || 0);

    return () => ro.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 sm:py-24 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="relative flex flex-col items-center text-center gap-5 mb-10">
          <div className="scroll-reveal flex flex-col items-center text-center">
            <h2
              className="font-display font-extrabold text-foreground flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              <span
                className="inline-flex items-center justify-center rounded-2xl bg-black/[0.06] border border-black/[0.08] p-2.5 sm:p-3 shrink-0"
                aria-hidden
              >
                <Icon name="RectangleStackIcon" size={28} className="text-foreground" />
              </span>
              <span className="leading-tight min-w-0 text-center">
                Everything Your Business{" "}
                <span className="text-foreground">Needs to Register</span>
              </span>
            </h2>
            <p className="mt-3 text-foreground-muted max-w-xl text-sm sm:text-base leading-relaxed mx-auto">
            Choose the service that fits your business. Explore all options with a quick swipe. Every plan comes with complete compliance support and documentation.
            </p>
          </div>
        </div>

        {/* Split slider — horizontal track; wheel/touch only capture when actually advancing slides */}
        <div
          ref={sliderRef}
          className="scroll-reveal relative rounded-3xl border border-black/[0.08] shadow-[0_22px_70px_rgba(15,23,42,0.10)] overflow-hidden h-auto lg:h-[520px] bg-white"
          style={{ touchAction: "pan-y" }}
          onWheel={(e) => {
            if (len === 0) return;
            const absX = Math.abs(e.deltaX);
            const absY = Math.abs(e.deltaY);
            if (absX < 2 && absY < 2) return;

            const now = Date.now();
            if (now - lastScrollAtRef.current < WHEEL_STEP_GAP_MS) return;

            const ti = trackIndexRef.current;
            const useHorizontal = absX >= absY;
            const delta = useHorizontal ? e.deltaX : -e.deltaY;
            if (Math.abs(delta) < 8) return;

            const dir: 1 | -1 = delta < 0 ? 1 : -1;
            const next = ti + dir;
            if (next < 0 || next > len + 1) return;

            e.preventDefault();
            lastScrollAtRef.current = now;
            go(dir);
          }}
          onTouchStart={(e) => {
            const t = e.touches?.[0];
            if (!t) return;
            touchStartXRef.current = t.clientX;
            swipeDragRef.current = {
              startX: t.clientX,
              startY: t.clientY,
              deltaX: 0,
              mode: null,
            };
            setDragOffset(0);
            setIsDragging(true);
          }}
          onTouchMove={(e) => {
            const start = swipeDragRef.current;
            const t = e.touches?.[0];
            if (!start || !t) return;
            const dx = t.clientX - start.startX;
            const dy = t.clientY - start.startY;
            if (start.mode === null && (Math.abs(dx) > 10 || Math.abs(dy) > 10)) {
              start.mode = Math.abs(dx) >= Math.abs(dy) ? "h" : "v";
            }
            if (start.mode === "v") return;
            if (start.mode === "h") {
              e.preventDefault();
              start.deltaX = dx;
              setDragOffset(dx);
            }
          }}
          onTouchEnd={() => {
            const startX = touchStartXRef.current;
            const drag = swipeDragRef.current;
            touchStartXRef.current = null;
            swipeDragRef.current = null;
            const dx = drag?.deltaX ?? 0;
            const mode = drag?.mode;
            setDragOffset(0);
            setIsDragging(false);
            if (startX == null) return;
            if (mode !== "h") return;
            if (Math.abs(dx) < 28) return;
            if (dx < 0) go(1);
            else go(-1);
          }}
        >
          {/* Horizontal controls */}
          <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex flex-col items-center">
            <button
              type="button"
              onClick={() => go(-1)}
              className="w-11 h-11 rounded-full border border-black/[0.10] bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm"
              aria-label="Previous service"
            >
              <Icon name="ChevronLeftIcon" size={18} className="text-foreground" />
            </button>
          </div>
          <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex flex-col items-center">
            <button
              type="button"
              onClick={() => go(1)}
              className="w-11 h-11 rounded-full border border-black/[0.10] bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm"
              aria-label="Next service"
            >
              <Icon name="ChevronRightIcon" size={18} className="text-foreground" />
            </button>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-black/[0.08] shadow-sm backdrop-blur-sm">
            <div className="h-[3px] w-20 sm:w-24 rounded-full bg-black/[0.10] overflow-hidden">
              <div
                className="h-full bg-foreground/70 rounded-full transition-all duration-300 ease-out"
                style={{
                  width: `${Math.max(12, (100 * (logicalIndex + 1)) / Math.max(1, len))}%`,
                }}
              />
            </div>
          </div>

          {/* Track */}
          <div
            className={`flex flex-row h-auto lg:h-full items-stretch will-change-transform ${
              isDragging || instantMove
                ? "transition-none"
                : "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            }`}
            style={{
              transform: `translateX(${-(trackIndex * sliderWidth) + dragOffset}px)`,
            }}
            onTransitionEnd={onTrackTransitionEnd}
          >
            {extendedSlides.map((s, idx) => (
              <div
                key={`svc-slide-${idx}-${s.title}`}
                className="h-auto lg:h-[520px] shrink-0 grid min-h-0 grid-cols-1 grid-rows-[auto_max-content] content-start lg:content-normal lg:grid-cols-2 lg:grid-rows-1"
                style={{ width: sliderWidth > 0 ? sliderWidth : "100%" }}
              >
                {/* Left visual panel (unique per slide) */}
                <div className="relative bg-[#FCFBF7] h-[280px] sm:h-[360px] lg:h-full lg:min-h-0 shrink-0 flex items-center justify-center p-6 sm:p-8 lg:p-10">
                  <div
                    className="absolute inset-0 opacity-[0.28] pointer-events-none"
                    style={{
                      backgroundImage: "radial-gradient(rgba(15,23,42,0.10) 1px, transparent 1px)",
                      backgroundSize: "18px 18px",
                    }}
                  />
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-20 -left-24 w-72 h-72 bg-black/[0.04] rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -right-28 w-80 h-80 bg-black/[0.03] rounded-full blur-3xl" />
                  </div>

                  <div
                    className={
                      "leftVisual" in s && s.leftVisual === "illustration-only" && s.imageUrl
                        ? "relative w-full max-w-[520px] h-full min-h-0 flex items-center justify-center"
                        : "relative w-full max-w-[520px]"
                    }
                  >
                    {"leftVisual" in s && s.leftVisual === "illustration-only" && s.imageUrl ? (
                      <div className="relative w-full flex items-center justify-center min-h-0 max-h-full px-1">
                        <Image
                          src={s.imageUrl}
                          alt={s.imageAlt || s.title}
                          width={"illustrationLayout" in s && s.illustrationLayout === "tall" ? 438 : 720}
                          height={"illustrationLayout" in s && s.illustrationLayout === "tall" ? 500 : 540}
                          className={
                            "illustrationLayout" in s && s.illustrationLayout === "tall"
                              ? "w-auto max-w-[min(100%,19rem)] sm:max-w-[min(100%,21rem)] lg:max-w-[min(100%,23rem)] max-h-[260px] sm:max-h-[320px] lg:max-h-[min(440px,90%)] h-auto object-contain object-center drop-shadow-[0_24px_60px_rgba(15,23,42,0.14)]"
                              : "w-full max-w-[min(100%,22rem)] sm:max-w-[min(100%,26rem)] lg:max-w-[min(100%,28rem)] h-auto object-contain drop-shadow-[0_24px_60px_rgba(15,23,42,0.14)]"
                          }
                          priority={false}
                        />
                      </div>
                    ) : s.imageUrl ? (
                      <div className="rounded-2xl overflow-hidden border border-black/[0.08] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
                        <Image
                          src={s.imageUrl}
                          alt={s.imageAlt || s.title}
                          width={900}
                          height={520}
                          className="w-full h-[220px] sm:h-[280px] object-cover"
                        />
                        <div className="px-4 py-3 text-xs sm:text-sm text-foreground-muted bg-white">
                          {s.badge}
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-2xl bg-white/92 border border-black/[0.08] shadow-[0_18px_60px_rgba(15,23,42,0.12)] overflow-hidden">
                        <div className="grid grid-cols-5 text-[10px] sm:text-xs font-semibold text-foreground/60 px-4 py-3 border-b border-black/5">
                          <div>Phone</div>
                          <div>City</div>
                          <div>Plan</div>
                          <div>Status</div>
                          <div className="text-right">Action</div>
                        </div>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div
                            key={i}
                            className="grid grid-cols-5 items-center px-4 py-3 border-b border-black/5 last:border-b-0 text-[11px] sm:text-sm"
                          >
                            <div className="text-foreground-muted">98{7 + i}65-43{i}1</div>
                            <div className="text-foreground-muted">India</div>
                            <div className="text-foreground-muted">Virtual</div>
                            <div className="text-foreground-muted">Active</div>
                            <div className="text-right text-foreground font-semibold">View</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right content panel — extra bottom padding clears the progress pill + mobile sticky bar (no inner scroll) */}
                <div className="bg-white min-h-0 overflow-hidden px-5 py-6 sm:px-7 sm:py-8 lg:p-10 lg:h-full pb-14 sm:pb-16 lg:pb-10">
                  <div className="inline-flex items-center gap-2 bg-black/[0.04] text-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 border border-black/[0.06]">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                    {s.badge}
                  </div>

                  <h3 className="font-display font-extrabold text-foreground leading-tight mb-3" style={{ fontSize: "clamp(1.3rem, 2.4vw, 2rem)" }}>
                    {s.title}
                  </h3>

                  <p className="text-sm sm:text-base text-foreground-muted leading-relaxed mb-6">
                    {s.description}
                  </p>

                  <ul className="space-y-2.5 text-sm sm:text-base text-foreground-muted mb-7">
                    {s.features?.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <span className="mt-0.5 w-6 h-6 rounded-full bg-black/[0.06] flex items-center justify-center flex-shrink-0 border border-black/[0.06]">
                          <Icon name="CheckCircleIcon" size={16} className="text-foreground" variant="solid" />
                        </span>
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-2 bg-foreground text-white px-6 py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-foreground/90 transition-colors"
                  >
                    Get Details
                    <Icon name="ArrowRightIcon" size={16} className="text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>);

}