import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/ui/AppIcon";
import { cityUrl } from "@/lib/cities";
import virtualOfficeLogo from "@/assets/virtual-office-logo-white.png";

const cities = [
  { name: "Gurgaon", slug: "gurgaon" },
  { name: "Delhi", slug: "delhi" },
  { name: "Noida", slug: "noida" },
  { name: "Bangalore", slug: "bangalore" },
  { name: "Mumbai", slug: "mumbai" },
  { name: "Hyderabad", slug: "hyderabad" },
  { name: "Chennai", slug: "chennai" },
  { name: "Pune", slug: "pune" },
];

const services = [
  "GST Registration Address",
  "Company Incorporation",
  "Business Address",
  "Mail Handling",
  "Meeting Rooms",
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

                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href="#"
                    aria-label="Website"
                    className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center hover:bg-white/[0.12] transition-colors"
                  >
                    <Icon name="GlobeAltIcon" size={17} className="text-white" />
                  </a>
                  <a
                    href="https://wa.me/919311328043"
                    aria-label="WhatsApp"
                    className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center hover:bg-white/[0.12] transition-colors"
                  >
                    <Icon name="ChatBubbleLeftRightIcon" size={17} className="text-white" />
                  </a>
                </div>

                <ul className="space-y-3.5 pt-1">
                  <li className="flex items-start gap-3">
                    <Icon name="MapPinIcon" size={17} className="text-white/80 mt-0.5 shrink-0" />
                    <span className="text-sm text-white/55 leading-relaxed">Gurgaon, Haryana, India</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="EnvelopeIcon" size={17} className="text-white/80 mt-0.5 shrink-0" />
                    <a
                      href="mailto:hello@cofynd.com"
                      className="text-sm text-white/55 hover:text-white transition-colors break-all"
                    >
                      hello@cofynd.com
                    </a>
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
              <div className="lg:col-span-3 lg:pt-1">
                <p className="text-sm font-bold text-white mb-4">Services</p>
                <ul className="space-y-3">
                  {services.map((s) => (
                    <li key={s}>
                      <Link href="/" className="text-sm text-white/55 hover:text-white transition-colors">
                        {s}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Top cities */}
              <div className="lg:col-span-4 lg:pt-1">
                <p className="text-sm font-bold text-white mb-4 text-left lg:text-right">Top Cities</p>
                <ul className="space-y-3 flex flex-col lg:items-end">
                  {cities.map((city) => (
                    <li key={city.slug} className="text-left lg:text-right">
                      <Link
                        href={cityUrl(city.slug)}
                        className="text-sm text-white/55 hover:text-white transition-colors"
                      >
                        Virtual Office in {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom strip */}
            <div className="mt-12 sm:mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0a0a0a]" />
                </span>
                <span className="text-sm text-white/80 font-medium">All services are online</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                <Link href="#" className="text-white/45 hover:text-white/80 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-white/45 hover:text-white/80 transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-white/45 hover:text-white/80 transition-colors">
                  GST Disclosures
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
