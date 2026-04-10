"use client";
import React, { useState } from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";
import ContactModal from "./ContactModal";

const cities = [
  {
    name: "Gurgaon",
    count: "12 locations",
    popular: true,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/094c67f31028067e4be4bb7d7a68ef8c09fc193a.webp",
  },
  {
    name: "Delhi",
    count: "18 locations",
    popular: true,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/84cf21159ba4e6a2a8ef87831bebf7efee6e74e9.webp",
  },
  {
    name: "Noida",
    count: "8 locations",
    popular: true,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/066c525dad00ee86a27e53272d55d299f7afaaec.webp",
  },
  {
    name: "Bangalore",
    count: "15 locations",
    popular: true,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/d85cd31c74d7d32d5321a1c89b88014c1f88c648.webp",
  },
  {
    name: "Mumbai",
    count: "20 locations",
    popular: true,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/e182162b472bf72729057cc78babd17a74b48572.webp",
  },
  {
    name: "Hyderabad",
    count: "10 locations",
    popular: true,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/17b5af5e4e45a4dd09efc53ceee1f3f1a4a5cc09.webp",
  },
  {
    name: "Chennai",
    count: "7 locations",
    popular: false,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/813132be51f29e91167307f84532f03e9f4b23a0.webp",
  },
  {
    name: "Pune",
    count: "9 locations",
    popular: false,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/62b28553fde2a39b015af363ca0d27bf49983053.webp",
  },
  {
    name: "Ahmedabad",
    count: "5 locations",
    popular: false,
    imageUrl:
      "https://img.cofynd.com/images/original/393cfd9c29a2459a275224c1f40acf2274906935.jpg",
  },
  {
    name: "Kolkata",
    count: "6 locations",
    popular: false,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/83122fbececc97ed792d4918fbbec4be8717a1ab.webp",
  },
  {
    name: "Jaipur",
    count: "4 locations",
    popular: false,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/34540edac3e9e158c30bb61d6672d4d1a6ee9675.webp",
  },
  {
    name: "Chandigarh",
    count: "3 locations",
    popular: false,
    imageUrl:
      "https://img.cofynd.com/images/original/d5ad55f917d61eaad80c95409cb794a490d2d542.jpg",
  },
];

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
            {cities?.map((city, i) => (
              <Link
                key={city?.name}
                href={`/virtual-office-in-${city.name.toLowerCase()}`}
                className={`scroll-reveal scroll-reveal-delay-${(i % 4) + 1} group block rounded-2xl sm:rounded-3xl border border-black/[0.08] bg-bg-page shadow-[0_12px_40px_rgba(15,23,42,0.08)] hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] transition-all duration-300 overflow-hidden text-left hover:-translate-y-0.5`}
              >
                  {/* Image panel */}
                  <div
                    className="relative h-[152px] min-[400px]:h-[168px] sm:h-[220px] lg:h-[240px] bg-bg-page"
                    style={{
                      backgroundImage: city?.imageUrl ? `url(${String(city.imageUrl).trim()})` : undefined,
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
                            {city?.name}
                          </h3>
                          {/* <div className="mt-2 hidden sm:inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 border border-white/15">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            <span className="text-[11px] sm:text-xs font-semibold text-white/90">
                              {city?.count}
                            </span>
                          </div> */}
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