import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/ui/AppIcon";
import { CITIES, cityUrl } from "@/lib/cities";
import virtualOfficeLogo from "@/assets/virtual-office-logo-white.png";

const services = [
  { label: "GST Registration", href: "/gst-registration" },
  { label: "Company Registration", href: "/company-registration" },
  { label: "Business Address", href: "/" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#FCFBF7] pb-6 sm:pb-10 pt-4 sm:pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-[24px] sm:rounded-[28px] bg-[#0a0a0a] text-white border border-white/[0.06] shadow-[0_24px_80px_rgba(0,0,0,0.35)] overflow-hidden px-6 py-10 sm:px-10 sm:py-14">
          {/* Inner texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/[0.04] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/[0.03] blur-3xl" />

          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
              {/* Brand + contact */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <Image
                    src={virtualOfficeLogo}
                    alt="Virtual Office in India"
                    priority
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <p className="text-sm text-white/55 leading-relaxed max-w-md">
                  India&apos;s trusted virtual office provider. GST-compliant addresses in 50+ cities for startups,
                  freelancers &amp; SMEs.
                </p>

                <ul className="space-y-3.5 pt-1">
                  <li className="flex items-start gap-3">
                    <Icon name="MapPinIcon" size={17} className="text-white/80 mt-0.5 shrink-0" />
                    <span className="text-sm text-white/55 leading-relaxed">Gurgaon, Haryana, India</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="PhoneIcon" size={17} className="text-white/80 mt-0.5 shrink-0" variant="solid" />
                    <a href="tel:+919311328043" className="text-sm text-white/55 hover:text-white transition-colors">
                      +91 93113 28043
                    </a>
                  </li>
                </ul>

                <p className="text-xs text-white/35 pt-2 leading-relaxed">
                  © 2026 Virtual Office India. All rights reserved.
                </p>
              </div>

              {/* Services */}
              <div className="lg:col-span-7 lg:pt-1 lg:justify-self-end lg:w-full lg:max-w-xs">
                <p className="text-sm font-bold text-white mb-4">Services</p>
                <ul className="space-y-3">
                  {services.map((s) => (
                    <li key={s.label}>
                      <Link href={s.href} className="text-sm text-white/55 hover:text-white transition-colors">
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm font-bold text-white mb-5">Cities</p>
              <ul className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2.5">
                {CITIES.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={cityUrl(city.slug)}
                      className="block text-sm text-white/55 hover:text-white transition-colors leading-snug"
                    >
                      Virtual Office in {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom strip */}
            <div className="mt-12 sm:mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-end gap-4">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                <Link href="/about-us" className="text-white/45 hover:text-white/80 transition-colors">
                  About Us
                </Link>
                <Link href="/blog" className="text-white/45 hover:text-white/80 transition-colors">
                  Blog
                </Link>
                <Link
                  href="/refund-cancellation-policy"
                  className="text-white/45 hover:text-white/80 transition-colors"
                >
                  Refund &amp; Cancellation
                </Link>
                <Link href="/privacy-policy" className="text-white/45 hover:text-white/80 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-white/45 hover:text-white/80 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
