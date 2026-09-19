"use client";
import React from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";
import { useContactModal } from "@/components/ContactModalProvider";

const CONTACT = {
  email: "",
  phone: "+91 93113 28043",
  phoneHref: "tel:+919311328043",
  address: "Gurgaon, Haryana, India",
};

export default function AboutContactSection() {
  const { open } = useContactModal();

  return (
    <section id="get-in-touch" className="py-16 sm:py-20 bg-[#FCFBF7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Explore CTA band */}
        <div className="scroll-reveal rounded-3xl border border-black/[0.08] bg-white px-6 py-10 sm:px-10 sm:py-12 text-center shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
          <span
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-black/[0.04] border border-black/[0.08]"
            aria-hidden
          >
            <Icon name="MapPinIcon" size={26} className="text-foreground" />
          </span>

          <h2
            className="mt-5 font-display font-extrabold text-foreground tracking-tight"
            style={{ fontSize: "clamp(1.35rem, 2.5vw, 2rem)" }}
          >
            Explore Virtual Office Solutions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-foreground-muted leading-relaxed max-w-xl mx-auto">
            Looking for a virtual office in your city? Explore available locations and find a solution that
            matches your business requirements.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/#cities"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-foreground text-white px-7 py-3.5 text-sm font-semibold hover:bg-foreground/90 transition-colors shadow-[0_14px_40px_rgba(15,23,42,0.22)]"
            >
              Explore Locations
              <Icon name="ArrowRightIcon" size={16} className="text-white" />
            </Link>
            <button
              type="button"
              onClick={() => open({ metadata: { action: "about-contact-cta", page: "about-us" } })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-black/[0.12] bg-white text-foreground px-7 py-3.5 text-sm font-semibold hover:bg-black/[0.03] transition-colors"
            >
              Contact Us
              <Icon name="ArrowRightIcon" size={16} className="text-foreground" />
            </button>
          </div>
        </div>

        {/* Get in Touch */}
        <div className="scroll-reveal scroll-reveal-delay-1 mt-6 sm:mt-7 rounded-3xl border border-black/[0.08] bg-white px-6 py-9 sm:px-10 sm:py-10 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
          <div className="text-center">
            <h3
              className="font-display font-extrabold text-foreground tracking-tight"
              style={{ fontSize: "clamp(1.15rem, 2vw, 1.5rem)" }}
            >
              Get in Touch
            </h3>
            <p className="mt-2 text-sm text-foreground-muted">Virtual Offices India</p>
          </div>

          <div className="mt-7 grid gap-3 sm:gap-4 sm:grid-cols-2">
            {CONTACT.email ? (
              <div className="flex items-start gap-3.5 rounded-2xl border border-black/[0.08] bg-[#FCFBF7] px-5 py-4">
                <span
                  className="w-10 h-10 shrink-0 rounded-xl bg-white border border-black/[0.08] flex items-center justify-center"
                  aria-hidden
                >
                  <Icon name="EnvelopeIcon" size={18} className="text-foreground" />
                </span>
                <div className="min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/50">
                    Email
                  </div>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-sm font-semibold text-foreground hover:text-primary transition-colors break-all"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>
            ) : null}

            <div className="flex items-start gap-3.5 rounded-2xl border border-black/[0.08] bg-[#FCFBF7] px-5 py-4">
              <span
                className="w-10 h-10 shrink-0 rounded-xl bg-white border border-black/[0.08] flex items-center justify-center"
                aria-hidden
              >
                <Icon name="PhoneIcon" size={18} className="text-foreground" variant="solid" />
              </span>
              <div className="min-w-0">
                <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/50">
                  Phone
                </div>
                <a
                  href={CONTACT.phoneHref}
                  className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </div>
            </div>

            <div
              className={`flex items-start gap-3.5 rounded-2xl border border-black/[0.08] bg-[#FCFBF7] px-5 py-4 ${
                CONTACT.email ? "sm:col-span-2" : ""
              }`}
            >
              <span
                className="w-10 h-10 shrink-0 rounded-xl bg-white border border-black/[0.08] flex items-center justify-center"
                aria-hidden
              >
                <Icon name="MapPinIcon" size={18} className="text-foreground" />
              </span>
              <div className="min-w-0">
                <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/50">
                  Address
                </div>
                <div className="text-sm font-semibold text-foreground leading-snug">{CONTACT.address}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
