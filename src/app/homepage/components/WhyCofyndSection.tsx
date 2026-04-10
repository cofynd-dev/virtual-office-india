 "use client";
import React, { useMemo, useState } from "react";
import Icon from "@/components/ui/AppIcon";
import ContactModal from "./ContactModal";

const reasons = [
  {
    icon: "CurrencyRupeeIcon",
    title: "Affordable Pricing",
    description: "Plans starting ₹999/month — 70% cheaper than physical office rent. No deposits, no hidden charges.",
    stat: "₹999/mo",
    statLabel: "Starting from",
    iconColor: "text-[#F59E0B]",
    iconBg: "bg-[#FFF7ED]",
    statColor: "text-[#F59E0B]",
  },
  {
    icon: "MapPinIcon",
    title: "Prime Locations",
    description: "Business addresses in the most prestigious commercial areas — Connaught Place, BKC, Cyber City, and more.",
    stat: "50+",
    statLabel: "Cities",
    iconColor: "text-[#2563EB]",
    iconBg: "bg-[#EFF6FF]",
    statColor: "text-[#2563EB]",
  },
  {
    icon: "BoltIcon",
    title: "Fast Documentation",
    description: "Complete document package delivered digitally within 2-4 hours. Physical copies couriered same day.",
    stat: "24 hours",
    statLabel: "Doc delivery",
    iconColor: "text-[#22C55E]",
    iconBg: "bg-[#ECFDF5]",
    statColor: "text-[#16A34A]",
  },
  {
    icon: "ShieldCheckIcon",
    title: "GST Compliant",
    description: "100% accepted by GST authorities. We've helped 10,000+ businesses successfully complete GST registration.",
    stat: "100%",
    statLabel: "GST accepted",
    iconColor: "text-[#0EA5E9]",
    iconBg: "bg-[#E0F2FE]",
    statColor: "text-[#0EA5E9]",
  },
  {
    icon: "HeadphoneIcon",
    title: "Dedicated Support",
    description: "Assigned relationship manager for every client. Reach us via call, WhatsApp, or email — 6 days a week.",
    stat: "24/7",
    statLabel: "Support available",
    iconColor: "text-[#A855F7]",
    iconBg: "bg-[#F3E8FF]",
    statColor: "text-[#7C3AED]",
  },
  {
    icon: "DocumentDuplicateIcon",
    title: "Verified Documents",
    description: "NOC, rent agreement, utility bills — everything a CA or lawyer needs for GST or company registration.",
    stat: "5+",
    statLabel: "Documents included",
    iconColor: "text-[#F97316]",
    iconBg: "bg-[#FFF7ED]",
    statColor: "text-[#F97316]",
  },
];

export default function WhyCofyndSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const tiles = useMemo(() => reasons, []);
  const [activeTitle, setActiveTitle] = useState(tiles[0]?.title ?? "Affordable Pricing");

  const cities = useMemo(
    () => ["Delhi", "Gurgaon", "Noida", "Bangalore", "Mumbai", "Hyderabad", "Chennai", "Pune", "Ahmedabad", "Kolkata"],
    []
  );

  return (
    <section id="why-cofynd" className="py-20 sm:py-24 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="scroll-reveal rounded-3xl border border-black/[0.06] bg-white shadow-[0_22px_70px_rgba(15,23,42,0.10)] overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left: tiles */}
            <div className="p-7 sm:p-10 bg-[#FCFBF7] border-b lg:border-b-0 lg:border-r border-black/[0.06] h-full min-h-[280px] flex items-center">
              <div className="grid grid-cols-2 gap-4 sm:gap-5 w-full max-w-md mx-auto">
                {tiles.map((t) => {
                  const active = t.title === activeTitle;
                  return (
                    <button
                      key={t.title}
                      type="button"
                      onClick={() => setActiveTitle(t.title)}
                      className={[
                        "rounded-2xl border bg-white px-4 py-4 sm:px-5 sm:py-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)]",
                        "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_60px_rgba(15,23,42,0.10)]",
                        active ? "border-black/[0.16] ring-2 ring-black/[0.05]" : "border-black/[0.08]",
                      ].join(" ")}
                      aria-pressed={active}
                    >
                      <div className="h-full flex flex-col items-center justify-center text-center gap-3">
                        <span
                          className={`w-11 h-11 ${t.iconBg} rounded-2xl border border-black/[0.06] flex items-center justify-center shadow-[0_10px_26px_rgba(15,23,42,0.06)]`}
                          aria-hidden
                        >
                          <Icon name={t.icon as "CurrencyRupeeIcon"} size={20} className={t.iconColor} />
                        </span>
                        <div className="font-display font-bold text-sm sm:text-base text-foreground leading-snug">
                          {t.title}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: virtual office CTA */}
            <div className="p-7 sm:p-10 flex flex-col justify-center">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-black/[0.04] border border-black/[0.06] px-3 py-1.5 text-[11px] font-semibold text-foreground-subtle">
                    <Icon name="BoltIcon" size={14} className="text-foreground" />
                    Get plans & documents in minutes
                  </div>

                  <h3
                    className="mt-4 font-display font-extrabold text-foreground tracking-tight"
                    style={{ fontSize: "clamp(1.4rem, 2.2vw, 2rem)" }}
                  >
                    Get a <span className="text-foreground">GST‑Ready Virtual Office</span>
                  </h3>
                  <p className="mt-2 text-sm text-foreground-muted max-w-[42ch]">
                    Choose a plan and we’ll share compliant documents (NOC, rent agreement, utility bill) for your registration.
                  </p>
                </div>

                <div className="hidden sm:flex shrink-0">
                  <div className="w-20 h-20 rounded-3xl bg-[#F3F4F6] border border-black/[0.06] shadow-[0_14px_40px_rgba(15,23,42,0.10)] flex items-center justify-center">
                    <Icon name="BuildingOffice2Icon" size={34} className="text-foreground" />
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-black/[0.08] bg-white shadow-[0_16px_60px_rgba(15,23,42,0.10)] p-3 sm:p-3.5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-10 h-10 rounded-2xl bg-black/[0.04] border border-black/[0.06] flex items-center justify-center shrink-0">
                      <Icon name="MapPinIcon" size={18} className="text-foreground" />
                    </div>
                    <div className="relative w-full min-w-0">
                      <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="w-full appearance-none [-webkit-appearance:none] [-moz-appearance:none] [background-image:none] bg-[none]
                          px-4 pr-11 py-3 sm:py-3.5 rounded-xl
                          bg-white border border-black/[0.10]
                          text-sm sm:text-base font-semibold text-foreground
                          shadow-[0_10px_24px_rgba(15,23,42,0.08)]
                          focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/[0.18]
                          hover:border-black/[0.16] transition-colors"
                        aria-label="Select city"
                      >
                        <option value="">Select city</option>
                        {cities.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                        <Icon name="ChevronDownIcon" size={18} className="text-foreground/40" />
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="w-full sm:w-auto justify-center shrink-0 inline-flex items-center gap-2 rounded-xl bg-foreground text-white px-4 py-2.5 text-sm font-semibold shadow-[0_14px_40px_rgba(15,23,42,0.22)] hover:bg-foreground/90 transition-colors"
                  >
                    <Icon name="ArrowRightIcon" size={16} className="text-white" />
                    Get Plans
                  </button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-foreground-subtle">
                <div className="rounded-2xl border border-black/[0.06] bg-black/[0.02] px-3 py-2.5">
                  <div className="font-semibold text-foreground">Fast</div>
                  <div className="mt-0.5">24 hours</div>
                </div>
                <div className="rounded-2xl border border-black/[0.06] bg-black/[0.02] px-3 py-2.5">
                  <div className="font-semibold text-foreground">Verified</div>
                  <div className="mt-0.5">GST-ready</div>
                </div>
                <div className="rounded-2xl border border-black/[0.06] bg-black/[0.02] px-3 py-2.5">
                  <div className="font-semibold text-foreground">Support</div>
                  <div className="mt-0.5">24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} prefillCity={selectedCity} />
    </section>
  );
}