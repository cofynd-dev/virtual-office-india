import React from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";
import { CITIES, cityUrl } from "@/lib/cities";

export default function CitySelectorSection() {
  return (
    <section className="py-16 sm:py-20 bg-bg-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 scroll-reveal">
          <span className="inline-flex items-center gap-2 bg-primary-light text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Icon name="GlobeAltIcon" size={14} className="text-primary" />
            All Cities
          </span>
          <h2 className="font-display font-extrabold text-foreground mb-3" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
            Virtual Office Available in{" "}
            <span className="gradient-text">50+ Cities</span>
          </h2>
          <p className="text-foreground-muted text-sm">
            Click any city to see available plans and prime locations.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {CITIES.map((city, i) => (
            <Link
              key={city.slug}
              href={cityUrl(city.slug)}
              className={`scroll-reveal scroll-reveal-delay-${(i % 4) + 1} group block rounded-2xl border-2 border-border card-hover text-left overflow-hidden`}
              style={{
                backgroundImage: city.imageUrl ? `url(${city.imageUrl})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="relative p-5">
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/40" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/15 group-hover:bg-white/20 transition-colors flex-shrink-0">
                      <Icon name="MapPinIcon" size={16} className="text-white transition-colors" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-white">{city.name}</div>
                      <div className="text-[10px] text-white/80">{city.state}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/80">{city.locationsCount} locations</span>
                    <Icon
                      name="ArrowRightIcon"
                      size={12}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 scroll-reveal">
          <p className="text-sm text-foreground-muted mb-3">
            Need a virtual office in a city not listed above?
          </p>
          <a
            href="tel:+919311328043"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm"
          >
            <Icon name="PhoneIcon" size={15} className="text-white" variant="solid" />
            Call Us — We&apos;ll Help
          </a>
        </div>
      </div>
    </section>
  );
}
