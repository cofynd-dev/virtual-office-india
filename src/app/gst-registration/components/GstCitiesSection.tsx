import React from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";
import { CITIES, cityUrl } from "@/lib/cities";

export default function GstCitiesSection() {
  return (
    <section id="gst-cities" className="py-16 sm:py-20 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <div className="scroll-reveal flex flex-col items-center text-center">
            <h2
              className="font-display font-extrabold text-foreground flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full tracking-tight"
              style={{ fontSize: "clamp(1.35rem, 2.5vw, 2rem)" }}
            >
              <span
                className="inline-flex items-center justify-center rounded-2xl bg-black/[0.06] border border-black/[0.08] p-2.5 sm:p-3 shrink-0"
                aria-hidden
              >
                <Icon name="GlobeAsiaAustraliaIcon" size={24} className="text-foreground" />
              </span>
              <span className="leading-tight min-w-0 text-center">GST Virtual Office in Your City</span>
            </h2>
            <p className="mt-3 text-center text-foreground-muted max-w-xl text-sm sm:text-base leading-relaxed mx-auto">
              Pick your city to see available locations, plans, and the documentation offered there.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {CITIES.map((city, i) => (
            <Link
              key={city.slug}
              href={cityUrl(city.slug)}
              className={`scroll-reveal scroll-reveal-delay-${(i % 4) + 1} group flex flex-col rounded-3xl border border-black/[0.08] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.07)] hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] transition-all duration-300 overflow-hidden hover:-translate-y-0.5`}
            >
              <div
                className="relative h-[132px] sm:h-[150px]"
                style={{
                  backgroundImage: city.imageUrl ? `url(${String(city.imageUrl).trim()})` : undefined,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/[0.65] via-black/[0.15] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="font-display font-extrabold text-white text-base sm:text-lg leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.45)]">
                    Virtual Office in {city.name}
                  </h3>
                  <div className="mt-0.5 text-[11px] text-white/80 font-medium">{city.state}</div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <ul className="space-y-2">
                  {["GST Registration", "Company Registration"].map((tag) => (
                    <li key={tag} className="flex items-center gap-2">
                      <span
                        className="w-5 h-5 shrink-0 rounded-full bg-black/[0.04] border border-black/[0.10] flex items-center justify-center"
                        aria-hidden
                      >
                        <Icon name="CheckIcon" size={11} className="text-foreground" />
                      </span>
                      <span className="text-[13px] sm:text-sm text-foreground-muted">{tag}</span>
                    </li>
                  ))}
                </ul>

                <span className="mt-4 pt-3 border-t border-black/[0.06] inline-flex items-center gap-1.5 text-[13px] sm:text-sm font-semibold text-foreground">
                  View Locations
                  <Icon
                    name="ArrowRightIcon"
                    size={14}
                    className="text-foreground transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
