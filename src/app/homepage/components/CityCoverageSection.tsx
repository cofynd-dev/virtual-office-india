"use client";
import React, { useState } from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";
import ContactModal from "./ContactModal";
import { CITIES, cityUrl } from "@/lib/cities";

export default function CityCoverageSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="cities" className="py-20 sm:py-24 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 scroll-reveal">
          <h2
            className="font-display font-extrabold text-foreground mb-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            <span
              className="inline-flex items-center justify-center rounded-2xl bg-black/[0.06] border border-black/[0.08] p-2.5 sm:p-2 shrink-0"
              aria-hidden
            >
              <Icon name="GlobeAsiaAustraliaIcon" size={28} className="text-foreground" />
            </span>
            <span className="text-left sm:text-center leading-tight">
              Virtual Office{" "}
              <span className="text-foreground">Across India</span>
            </span>
          </h2>
          <p className="text-foreground-muted max-w-lg mx-auto">
            Prime business addresses in all major Indian cities. Click a city to see available plans and locations.
          </p>
        </div>

        {/* City grid: 2 cols on mobile (name on image only); sm+ keeps location pill + hover arrow */}
        <div className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {CITIES.map((city, i) => (
              <Link
                key={city.slug}
                href={cityUrl(city.slug)}
                className={`scroll-reveal scroll-reveal-delay-${(i % 4) + 1} group block rounded-2xl sm:rounded-3xl border border-black/[0.08] bg-bg-page shadow-[0_12px_40px_rgba(15,23,42,0.08)] hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] transition-all duration-300 overflow-hidden text-left hover:-translate-y-0.5`}
              >
                  {/* Image panel */}
                  <div
                    className="relative h-[152px] min-[400px]:h-[168px] sm:h-[220px] lg:h-[240px] bg-bg-page"
                    style={{
                      backgroundImage: city.imageUrl ? `url(${String(city.imageUrl).trim()})` : undefined,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-black/[0.05]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/[0.62] via-black/[0.12] to-transparent sm:from-black/[0.55] sm:via-black/[0.08] sm:to-white/[0.10]" />

                    {/* Mobile: city name only on image; sm+: name + locations + arrow */}
                    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5 sm:pb-6">
                      <div className="flex items-end justify-between gap-2 sm:gap-3">
                        <div className="min-w-0 flex-1">
                          <h3 className="font-display font-extrabold text-white text-[0.9375rem] min-[400px]:text-base sm:text-lg lg:text-xl leading-tight drop-shadow-md [text-shadow:0_1px_2px_rgba(0,0,0,0.45)] line-clamp-2 sm:truncate">
                            {city.name}
                          </h3>
                        </div>

                        <span className="hidden sm:flex shrink-0 w-10 h-10 rounded-2xl bg-white/12 backdrop-blur border border-white/15 items-center justify-center transition-all duration-300 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-[1.04]">
                          <Icon name="ArrowUpRightIcon" size={18} className="text-white" />
                        </span>
                      </div>
                    </div>
                  </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center scroll-reveal">
          <p className="text-foreground-muted text-sm mb-4">
           Get Perfect GST & Company Registration Address in your city
          </p>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-foreground text-white hover:bg-foreground/90 transition-colors shadow-[0_14px_40px_rgba(15,23,42,0.22)]"
          >
            Get GST-Ready Virtual Office →
          </button>
        </div>
      </div>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
