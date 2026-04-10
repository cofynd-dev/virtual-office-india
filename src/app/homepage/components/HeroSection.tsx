"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Icon from "@/components/ui/AppIcon";
import ContactModal from "./ContactModal";
import { CITIES, cityUrl } from "@/lib/cities";
import heroPattern from "@/assets/hero_pattern.svg";

const ROTATING_SERVICES = [
  "GST Registration",
  "Business Address",
  "Company Registration",
  "MCA Compliance",
];

export default function HeroSection() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [rotateIndex, setRotateIndex] = useState(0);
  const [quickCity, setQuickCity] = useState("");
  const [typedService, setTypedService] = useState("");
  const [isTypingService, setIsTypingService] = useState(false);
  const typingTimerRef = React.useRef<number | null>(null);

  useEffect(() => {
    const id = window.setInterval(() => {
      setRotateIndex((i) => (i + 1) % ROTATING_SERVICES.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const full = ROTATING_SERVICES[rotateIndex] ?? "";

    if (typingTimerRef.current) {
      window.clearTimeout(typingTimerRef.current);
      typingTimerRef.current = null;
    }

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (reduceMotion) {
      setTypedService(full);
      setIsTypingService(false);
      return;
    }

    setTypedService("");
    setIsTypingService(true);
    let i = 0;

    const tick = () => {
      i += 1;
      setTypedService(full.slice(0, i));
      if (i < full.length) {
        typingTimerRef.current = window.setTimeout(tick, 45);
      } else {
        typingTimerRef.current = null;
        setIsTypingService(false);
      }
    };

    typingTimerRef.current = window.setTimeout(tick, 180);

    return () => {
      if (typingTimerRef.current) {
        window.clearTimeout(typingTimerRef.current);
        typingTimerRef.current = null;
      }
    };
  }, [rotateIndex]);

  return (
    <section className="relative overflow-hidden bg-[#F5F5F4] text-foreground min-h-[90svh] flex items-center">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={heroPattern}
          alt=""
          aria-hidden="true"
          fill
          priority={false}
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

      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 pt-32 sm:pt-36 pb-24 sm:pb-28 text-center">
        <h1
          className="font-display font-extrabold text-foreground tracking-tight leading-[1.15]"
          style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
        >
          Virtual Office That Helps You Scale{" "}
          {/* <span className="whitespace-nowrap"></span> */}
        </h1>

        {/* Animated rotating service line — min-height matches clamp(…,3rem)×line-height so glyphs aren’t clipped */}
        <div className="mt-4 flex items-center justify-center min-h-[2.75rem] sm:min-h-[3.75rem] lg:min-h-[4rem] px-1 sm:px-2">
          <p
            className="font-display font-bold text-foreground-muted tracking-tight leading-[1.2] sm:leading-[1.15]"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
            aria-label={ROTATING_SERVICES[rotateIndex]}
          >
            <span aria-hidden="true">{typedService}</span>
            <span className="sr-only">{ROTATING_SERVICES[rotateIndex]}</span>
            {isTypingService && (
              <span
                aria-hidden="true"
                className="inline-block w-[1ch] align-[0.08em] ml-0.5 text-foreground/60 motion-reduce:hidden"
                style={{ animation: "heroCaretBlink 0.9s steps(1,end) infinite" }}
              >
                |
              </span>
            )}
          </p>
        </div>

        <style jsx global>{`
          @keyframes heroCaretBlink {
            0%,
            49% {
              opacity: 1;
            }
            50%,
            100% {
              opacity: 0;
            }
          }
        `}</style>

        {/* City selector */}
        <p className="mt-10 text-xs sm:text-sm text-foreground-subtle font-medium">
          Choose your city
        </p>
        <div className="mt-3 mx-auto max-w-xl rounded-2xl bg-white shadow-[0_10px_34px_rgba(15,23,42,0.10)] border border-black/[0.08]">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#FCFBF7] border border-black/[0.06]">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white border border-black/[0.10] shadow-sm flex items-center justify-center">
              <span className="text-lg leading-none" aria-hidden>
                🇮🇳
              </span>
            </div>

            <div className="relative flex-1 min-w-0">
              <select
                value={quickCity}
                onChange={(e) => {
                  const slug = e.target.value;
                  setQuickCity(slug);
                  if (slug) router.push(cityUrl(slug));
                }}
                className="w-full appearance-none [-webkit-appearance:none] [-moz-appearance:none] [background-image:none] bg-[none] pr-12 pl-4 py-3.5 sm:py-4 rounded-xl bg-white border border-black/[0.10] text-base sm:text-lg font-semibold text-foreground shadow-[0_14px_40px_rgba(15,23,42,0.08)] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/[0.18]"
                aria-label="Select city"
              >
                <option value="">Select a city</option>
                {CITIES.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                <Icon name="ChevronDownIcon" size={18} className="text-foreground/50" />
              </span>
            </div>
          </div>
        </div>

        {/* Stats row — mobile: 3-column Ringg-style (value over label, centered); sm+: icon + row */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto px-1">
          <div className="grid grid-cols-3 sm:gap-x-10 sm:gap-y-0">
            {[
              { icon: "ShieldCheckIcon" as const, value: "Govt-compliant", label: "address" },
              { icon: "CheckBadgeIcon" as const, value: "GST & MCA", label: "accepted" },
              { icon: "UsersIcon" as const, value: "10,000+", label: "businesses served" },
            ].map((s) => (
              <div
                key={`${s.value}-${s.label}`}
                className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:justify-start sm:text-left sm:gap-3 min-w-0"
              >
                <div className="hidden sm:flex w-9 h-9 sm:w-10 sm:h-10 items-center justify-center shrink-0">
                  <Icon name={s.icon} size={28} className="text-foreground" />
                </div>
                <div className="min-w-0 w-full px-0.5">
                  <div className="font-display font-extrabold text-foreground leading-[1.12] text-[0.9375rem] min-[400px]:text-base min-[440px]:text-lg sm:text-2xl sm:leading-none">
                    {s.value}
                  </div>
                  <div className="mt-1.5 sm:mt-1 text-[12px] min-[400px]:text-xs sm:text-sm text-foreground/55 font-medium leading-snug">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
