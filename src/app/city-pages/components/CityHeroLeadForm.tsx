"use client";
import React, { useState } from "react";
import Icon from "@/components/ui/AppIcon";
import type { City } from "@/lib/cities";

interface FormData {
  name: string;
  phone: string;
  email: string;
}

export default function CityHeroLeadForm({ city }: { city: City }) {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...form,
          city: city.name,
          requirement: "both",
          source: "city-hero-form",
          pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      // stay on form
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-black/[0.10] bg-[#FCFBF7] text-sm text-foreground placeholder:text-foreground-muted/70 focus:outline-none focus:ring-2 focus:ring-black/[0.12] focus:border-black/[0.18] transition-shadow";

  return (
    <div
      id="city-form"
      className="rounded-[1.75rem] border border-black/[0.08] bg-white shadow-[0_22px_70px_rgba(15,23,42,0.08)] overflow-hidden"
    >
      <div className="px-6 py-6 sm:px-8 sm:py-8">
        {!submitted ? (
          <>
            <div className="mb-6">
              <h2 className="font-display font-extrabold text-foreground text-xl sm:text-2xl tracking-tight leading-snug">
              Talk to a Virtual Office Expert
              </h2>
              <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
              Get personalized guidance and find the best business address in {city.name}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1.5">Full name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  autoComplete="name"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1.5">Phone *</label>
                <div className="flex gap-2">
                  <span className="flex items-center shrink-0 px-3 py-3 rounded-xl border border-black/[0.10] bg-black/[0.03] text-xs font-semibold text-foreground-muted">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={`${inputClass} flex-1 min-w-0`}
                    autoComplete="tel"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  autoComplete="email"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-foreground text-white py-3.5 text-sm font-semibold hover:bg-foreground/90 transition-colors disabled:opacity-60 shadow-[0_14px_40px_rgba(15,23,42,0.2)]"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24" aria-hidden>
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <Icon name="PhoneArrowUpRightIcon" size={16} className="text-white" />
                    Get Quote Now
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="py-2 sm:py-3">
            <div className="rounded-2xl border border-black/[0.10] bg-[#FCFBF7] shadow-[0_18px_55px_rgba(15,23,42,0.10)] overflow-hidden">
              <div className="relative p-6 sm:p-7 text-center">
                {/* soft highlight */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.65]"
                  style={{
                    backgroundImage:
                      "radial-gradient(700px 260px at 50% 0%, rgba(225,220,201,0.85), transparent 55%)",
                  }}
                />
                <div className="relative">
                  <div className="mx-auto w-14 h-14 rounded-2xl bg-white border border-black/[0.08] flex items-center justify-center shadow-[0_14px_40px_rgba(15,23,42,0.10)]">
                    <Icon name="CheckCircleIcon" size={30} className="text-foreground" variant="solid" />
                  </div>
                  <h3 className="mt-4 font-display font-extrabold text-xl sm:text-[22px] text-foreground">
                    Request received
                  </h3>
                  <p className="mt-2 text-sm sm:text-[15px] text-foreground-muted leading-relaxed max-w-xs sm:max-w-sm mx-auto">
                    Thanks! Our team will call you within{" "}
                    <strong className="text-foreground">30 minutes</strong> with the best options in {city.name}.
                  </p>

                  <div className="mt-5 flex flex-col gap-3">
                    <a
                      href="https://wa.me/919311328043"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-black/[0.10] px-5 py-3.5 text-sm font-semibold text-foreground hover:bg-black/[0.03] transition-colors min-h-[52px] w-full"
                    >
                      <Icon name="ChatBubbleLeftRightIcon" size={16} className="text-foreground" />
                      WhatsApp us
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", phone: "", email: "" });
                      }}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground text-white px-5 py-3.5 text-sm font-semibold hover:bg-foreground/90 transition-colors shadow-[0_14px_40px_rgba(15,23,42,0.18)] min-h-[52px] w-full"
                    >
                      Submit another request
                      <Icon name="ArrowRightIcon" size={16} className="text-white shrink-0" />
                    </button>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2.5 text-[11px] text-foreground/60 font-semibold">
                    {[
                      { icon: "ShieldCheckIcon", text: "No spam" },
                      { icon: "LockClosedIcon", text: "Secure" },
                      { icon: "CheckBadgeIcon", text: "Verified" },
                    ].map((b) => (
                      <div
                        key={b.text}
                        className="rounded-xl border border-black/[0.08] bg-white/90 backdrop-blur px-3 py-2 flex items-center justify-center gap-2"
                      >
                        <Icon name={b.icon} size={14} className="text-foreground/70" />
                        <span>{b.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
