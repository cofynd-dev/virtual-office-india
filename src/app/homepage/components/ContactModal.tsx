"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Icon from "@/components/ui/AppIcon";

const cities = [
  "Gurgaon", "Delhi", "Noida", "Bangalore", "Mumbai",
  "Hyderabad", "Chennai", "Pune", "Ahmedabad", "Kolkata",
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  requirement: string;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** When opening from the hero pill, last 10 digits are copied into the phone field */
  prefillPhone?: string;
  /** Prefill the city dropdown when opening the modal */
  prefillCity?: string;
  /** Prefill the requirement dropdown when opening the modal */
  prefillRequirement?: string;
  /** Attach extra metadata to the lead payload (e.g. selected location). */
  metadata?: Record<string, unknown>;
}

export default function ContactModal({
  isOpen,
  onClose,
  prefillPhone,
  prefillCity,
  prefillRequirement,
  metadata,
}: ContactModalProps) {
  const [form, setForm] = useState<FormData>({ name: "", phone: "", email: "", city: "", requirement: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const digits = (prefillPhone ?? "").replace(/\D/g, "");
    if (digits.length >= 10) {
      setForm((f) => ({ ...f, phone: digits.slice(-10) }));
    }
  }, [isOpen, prefillPhone]);

  useEffect(() => {
    if (!isOpen) return;
    const city = (prefillCity ?? "").trim();
    if (!city) return;
    setForm((f) => (f.city ? f : { ...f, city }));
  }, [isOpen, prefillCity]);

  useEffect(() => {
    if (!isOpen) return;
    const requirement = (prefillRequirement ?? "").trim();
    if (!requirement) return;
    setForm((f) => (f.requirement ? f : { ...f, requirement }));
  }, [isOpen, prefillRequirement]);

  useEffect(() => {
    if (!isOpen) return;
    // Requirement is required by /api/leads. If caller didn't prefill, default to "both".
    setForm((f) => (f.requirement ? f : { ...f, requirement: "both" }));
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...form,
          requirement: (form.requirement || prefillRequirement || "both").trim(),
          source: "contact-modal",
          pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
          ...(metadata ? { metadata } : {}),
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      // Keep UX simple: stop loader; stay on form.
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset form after close animation
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "", city: "", requirement: "" });
    }, 300);
  };

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Contact Form"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal panel */}
      <div className="relative z-10 w-full max-w-[360px] sm:max-w-md lg:max-w-3xl xl:max-w-3xl bg-white rounded-2xl sm:rounded-3xl shadow-[0_30px_120px_rgba(0,0,0,0.35)] overflow-hidden animate-modal-in">
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 text-foreground border border-black/10 transition-colors"
          aria-label="Close modal"
        >
          <Icon name="XMarkIcon" size={18} className="text-foreground" />
        </button>

        <div className="grid lg:grid-cols-5">
          {/* Left promo panel (Ringg-style) */}
          <div className="relative hidden lg:block lg:col-span-2 bg-[#e1dcc9] text-foreground px-6 py-6">
            <div
              className="absolute inset-0 opacity-[0.22] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(rgba(0,0,0,0.16) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-black/10 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-black/5 blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-black/5 border border-black/10 text-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Free Consultation
              </div>

              <h2 className="mt-3 font-display font-extrabold text-foreground leading-tight" style={{ fontSize: "clamp(1.2rem, 2vw, 1.55rem)" }}>
                Get your Virtual Office
                <span className="block text-foreground/70">Ready for GST & ROC</span>
              </h2>

              <div className="mt-4 grid grid-cols-3 gap-2.5">
                {[
                  { icon: "ShieldCheckIcon", text: "GST\nApproved" },
                  { icon: "CheckBadgeIcon", text: "Verified\nDocs" },
                  { icon: "LockClosedIcon", text: "Safe &\nSecure" },
                ].map((b) => (
                  <div key={b.text} className="rounded-2xl bg-black/5 border border-black/10 px-3 py-2">
                    <Icon name={b.icon as "ShieldCheckIcon"} size={16} className="text-foreground" />
                    <div className="mt-1.5 text-[11px] leading-snug text-foreground/70 font-semibold whitespace-pre-line">
                      {b.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 hidden lg:block">
                <div className="rounded-2xl bg-black/5 border border-black/10 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center">
                      <Icon name="PhoneIcon" size={18} className="text-foreground" variant="solid" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-foreground/60 font-semibold uppercase tracking-widest">Call us</div>
                      <a href="tel:+919311328043" className="text-sm font-bold text-foreground hover:text-foreground/80 transition-colors">
                        +91 93113 28043
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right form panel */}
          <div className="lg:col-span-3 px-4 sm:px-7 py-4 sm:py-6 max-h-[78vh] overflow-auto bg-[radial-gradient(1200px_600px_at_60%_-20%,rgba(225,220,201,0.55),transparent_55%)]">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4 lg:max-w-md lg:mx-auto">
                {/* Mobile compact header */}
                <div className="lg:hidden rounded-2xl bg-[#e1dcc9] text-foreground px-4 py-3 shadow-[0_16px_50px_rgba(0,0,0,0.18)]">
                  {/* <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Free Consultation
                  </div> */}
                  <div className="mt-2 font-display font-extrabold leading-tight" style={{ fontSize: "1.05rem" }}>
                    Get a callback
                  </div>
                  <div className="mt-0.5 text-[12px] text-black/75">
                    Virtual office for GST & ROC
                  </div>
                </div>

                {/* <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-foreground/50">Get a callback</p>
                    <h3 className="font-display font-extrabold text-foreground mt-1" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.35rem)" }}>
                      Tell us what you need
                    </h3>
                  </div>
                </div> */}

                <div className="flex flex-col gap-4">
                  <div className="w-full min-w-0">
                    <label htmlFor="contact-modal-name" className="sr-only">
                      Full name
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                        <Icon name="UserIcon" size={18} className="text-foreground/40 shrink-0" />
                      </div>
                      <input
                        id="contact-modal-name"
                        type="text"
                        required
                        placeholder="Full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full min-w-0 pl-10 pr-4 py-3 rounded-2xl border border-black/[0.10] bg-white text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
                      />
                    </div>
                  </div>

                  <div className="w-full min-w-0">
                    <label htmlFor="contact-modal-phone" className="sr-only">
                      Phone number
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                        <Icon name="PhoneIcon" size={18} className="text-foreground/40 shrink-0" variant="solid" />
                      </div>
                      <input
                        id="contact-modal-phone"
                        type="tel"
                        required
                        placeholder="Phone number"
                        pattern="[0-9]{10}"
                        inputMode="numeric"
                        maxLength={10}
                        aria-describedby="contact-modal-phone-hint"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                        className="w-full min-w-0 pl-10 pr-4 py-3 rounded-2xl border border-black/[0.10] bg-white text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
                      />
                    </div>
                  </div>

                  <div className="w-full min-w-0">
                    <label htmlFor="contact-modal-email" className="sr-only">
                      Email (optional)
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                        <Icon name="EnvelopeIcon" size={18} className="text-foreground/40 shrink-0" />
                      </div>
                      <input
                        id="contact-modal-email"
                        type="email"
                        placeholder="Email (optional)"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full min-w-0 pl-10 pr-4 py-3 rounded-2xl border border-black/[0.10] bg-white text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="w-full min-w-0">
                    <label htmlFor="contact-modal-city" className="sr-only">
                      City
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                        <Icon name="MapPinIcon" size={18} className="text-foreground/40 shrink-0" />
                      </div>
                      <select
                        id="contact-modal-city"
                        required
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        className="w-full min-w-0 appearance-none [-webkit-appearance:none] [-moz-appearance:none] pl-10 pr-10 py-3 rounded-2xl border border-black/[0.10] bg-white text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 shadow-[0_10px_24px_rgba(15,23,42,0.06)] [background-image:none]"
                      >
                        <option value="">Select city</option>
                        {cities.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                        <Icon name="ChevronDownIcon" size={18} className="text-foreground/40 shrink-0" />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2 disabled:opacity-70 bg-foreground text-white hover:bg-foreground/90 transition-colors shadow-[0_16px_50px_rgba(15,23,42,0.18)]"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Icon name="PhoneArrowUpRightIcon" size={16} className="text-white" />
                      Get Instant Callback
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-[#FCFBF7] border border-black/[0.08] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-[0_14px_40px_rgba(15,23,42,0.10)]">
                  <Icon name="CheckCircleIcon" size={34} className="text-foreground" variant="solid" />
                </div>
                <h3 className="font-display font-extrabold text-xl text-foreground mb-2">Request submitted</h3>
                <p className="text-sm text-foreground/60 mb-7">
                  We’ll call you within <strong className="text-foreground">30 minutes</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://wa.me/919311328043"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-extrabold text-sm bg-black text-white hover:bg-black/90 transition-colors shadow-[0_18px_55px_rgba(0,0,0,0.22)]"
                  >
                    <Icon name="ChatBubbleLeftRightIcon" size={16} className="text-white" />
                    Chat on WhatsApp
                  </a>
                  <button
                    onClick={handleClose}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm border border-black/[0.10] text-foreground/70 hover:bg-black/[0.04] transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
