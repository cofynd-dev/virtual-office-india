import React from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";
import { cityUrl } from "@/lib/cities";

const allCities = [
  {
    name: "Gurgaon",
    state: "Haryana",
    locations: 12,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/094c67f31028067e4be4bb7d7a68ef8c09fc193a.webp",
  },
  {
    name: "Delhi",
    state: "Delhi NCR",
    locations: 18,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/84cf21159ba4e6a2a8ef87831bebf7efee6e74e9.webp",
  },
  {
    name: "Noida",
    state: "Uttar Pradesh",
    locations: 8,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/066c525dad00ee86a27e53272d55d299f7afaaec.webp",
  },
  {
    name: "Bangalore",
    state: "Karnataka",
    locations: 15,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/d85cd31c74d7d32d5321a1c89b88014c1f88c648.webp",
  },
  {
    name: "Mumbai",
    state: "Maharashtra",
    locations: 20,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/e182162b472bf72729057cc78babd17a74b48572.webp",
  },
  {
    name: "Hyderabad",
    state: "Telangana",
    locations: 10,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/17b5af5e4e45a4dd09efc53ceee1f3f1a4a5cc09.webp",
  },
  {
    name: "Chennai",
    state: "Tamil Nadu",
    locations: 7,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/813132be51f29e91167307f84532f03e9f4b23a0.webp",
  },
  {
    name: "Pune",
    state: "Maharashtra",
    locations: 9,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/99e8dfd6fb1f6220fbd2297de44ae1ea2601d8a9.webp",
  },
  {
    name: "Ahmedabad",
    state: "Gujarat",
    locations: 5,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/62b28553fde2a39b015af363ca0d27bf49983053.webp",
  },
  {
    name: "Kolkata",
    state: "West Bengal",
    locations: 6,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/83122fbececc97ed792d4918fbbec4be8717a1ab.webp",
  },
  {
    name: "Jaipur",
    state: "Rajasthan",
    locations: 4,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/34540edac3e9e158c30bb61d6672d4d1a6ee9675.webp",
  },
  {
    name: "Chandigarh",
    state: "Punjab",
    locations: 3,
    imageUrl:
      "https://img.cofynd.com/images/original/d5ad55f917d61eaad80c95409cb794a490d2d542.jpg",
  },
];

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
          {allCities?.map((city, i) => (
            <Link
              key={city?.name}
              href={cityUrl(
                city.name.toLowerCase()
              )}
              className={`scroll-reveal scroll-reveal-delay-${(i % 4) + 1} group block rounded-2xl border-2 border-border card-hover text-left overflow-hidden`}
              style={{
                backgroundImage: city?.imageUrl ? `url(${city.imageUrl})` : undefined,
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
                      <div className="font-display font-bold text-sm text-white">{city?.name}</div>
                      <div className="text-[10px] text-white/80">{city?.state}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/80">{city?.locations} locations</span>
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
            href="tel:+918800000000"
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