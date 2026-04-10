"use client";
import React, { useMemo, useState } from "react";
import Icon from "@/components/ui/AppIcon";
import type { City } from "@/lib/cities";
import { AVAILABLE_CITY_VIRTUAL_OFFICE } from "@/lib/cities";
import ContactModal from "@/app/homepage/components/ContactModal";

function getCityLocations(city: City) {
  const normalizedSlug = city.slug.trim().toLowerCase();
  const normalizedAliases = (city.aliases ?? []).map((a) => a.toLowerCase());

  const entry =
    AVAILABLE_CITY_VIRTUAL_OFFICE.find((c) => c.name?.toLowerCase() === normalizedSlug) ||
    AVAILABLE_CITY_VIRTUAL_OFFICE.find((c) => normalizedAliases.includes(c.name?.toLowerCase()));

  const locations = entry?.locations ?? [];
  if (locations.length === 0) return [];

  return locations.slice(0, 8).map((l) => ({
    area: l.locality,
    price: l.starting_price,
  }));
}

export default function CityLocationsSection({ city }: { city: City }) {
  const locations = useMemo(() => getCityLocations(city), [city]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState<string>("");

  return (
    <section className="py-16 sm:py-20 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative flex flex-col items-center text-center gap-5 mb-10">
          <div className="scroll-reveal flex flex-col items-center text-center">
            <h2
              className="font-display font-extrabold text-foreground flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full tracking-tight"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              <span className="inline-flex items-center justify-center rounded-2xl bg-black/[0.06] border border-black/[0.08] p-2.5 sm:p-3 shrink-0" aria-hidden>
                <Icon name="MapPinIcon" size={24} className="text-foreground" />
              </span>
              <span className="leading-tight min-w-0 text-center">Available Locations</span>
            </h2>
            <p className="mt-3 text-center text-foreground-muted max-w-xl text-sm sm:text-base leading-relaxed mx-auto">
              Top commercial locations. 100% GST-compliant.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Edge fades for horizontal scroll */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#FCFBF7] to-transparent z-10 sm:hidden" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#FCFBF7] to-transparent z-10 sm:hidden" />

          <div className="flex gap-4 overflow-x-auto overflow-y-hidden snap-x snap-mandatory -mx-4 px-4 pb-2 sm:mx-0 sm:px-0 sm:pb-0 sm:gap-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar-thumb]:bg-transparent touch-pan-x">
            {locations.map((loc, i) => (
              <div
                key={`${loc.area}-${i}`}
                className={`scroll-reveal scroll-reveal-delay-${i + 1} snap-center shrink-0 w-[82vw] max-w-[340px] sm:w-[340px] md:w-[360px] sm:max-w-none bg-white rounded-3xl border border-black/[0.08] shadow-[0_12px_40px_rgba(15,23,42,0.06)] overflow-hidden transition-transform duration-300 hover:-translate-y-1`}
              >
                <div className="p-6">
                  <h3 className="font-display font-extrabold text-[16px] sm:text-[17px] text-foreground leading-snug mb-3">
                    {loc.area}
                  </h3>

                  <div className="space-y-2.5 text-[12px] text-foreground-muted">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-[0_10px_26px_rgba(15,23,42,0.10)]">
                        <Icon name="BuildingOfficeIcon" size={14} className="text-white" variant="solid" />
                      </span>
                      <span>Business Address</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-xl bg-accent flex items-center justify-center shrink-0 shadow-[0_10px_26px_rgba(15,23,42,0.10)]">
                        <Icon name="DocumentCheckIcon" size={14} className="text-white" variant="solid" />
                      </span>
                      <span>GST Registration</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-xl bg-amber-500 flex items-center justify-center shrink-0 shadow-[0_10px_26px_rgba(15,23,42,0.10)]">
                        <Icon name="BriefcaseIcon" size={14} className="text-white" variant="solid" />
                      </span>
                      <span>Company Registration</span>
                    </div>
                  </div>

                  <div className="mt-4 text-[12px] text-foreground-muted">
                    {(() => {
                      const raw = (loc.price ?? "").trim();
                      const value = raw
                        .replace(/^Starting\s*/i, "")
                        .replace(/\s*(\/\s*month|per\s*month|monthly)\s*$/i, "")
                        .trim();
                      if (!value) return null;
                      return (
                        <>
                          <span className="font-semibold text-foreground">Starting </span>
                          <span className="font-semibold text-foreground">{value}</span>
                          <span className="text-foreground-muted">/month</span>
                        </>
                      );
                    })()}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedArea(loc.area);
                      setIsModalOpen(true);
                    }}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-black/[0.14] bg-foreground px-4 py-3 text-sm font-semibold text-white hover:bg-foreground/90 transition-colors w-full"
                  >
                    Get Address Details
                    <Icon name="ArrowRightIcon" size={16} className="text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        prefillCity={city.name}
        prefillRequirement="address"
        metadata={{ city: city.name, locationArea: selectedArea, action: "get-address-details" }}
      />
    </section>);

}