"use client";
import React, { useState } from "react";
import Icon from "@/components/ui/AppIcon";

const faqs = [
  {
    q: "What is a virtual office?",
    a: "A virtual office provides a prestigious business address without requiring you to rent physical office space. You get a professional address for GST registration, company incorporation, mail handling, and official correspondence — at a fraction of the cost.",
  },
  {
    q: "Is a virtual office address valid for GST registration?",
    a: "Yes, absolutely. Our virtual office addresses are 100% accepted by GST authorities across India. We provide all required documents: NOC (No Objection Certificate), rent agreement, and utility bills. Our clients have a 99% GST approval rate on the first attempt.",
  },
  {
    q: "What documents do I need to submit?",
    a: "You need to submit: Aadhaar card (front and back), PAN card, a recent passport-size photo, and company incorporation documents (if applicable). All documents can be submitted digitally through our portal.",
  },
  {
    q: "How long does it take to get the virtual office documents?",
    a: "Digital documents are delivered within 2-4 hours of document submission and payment. Physical copies (courier) are dispatched the same day and arrive within 2-3 business days.",
  },
  {
    q: "How much does a virtual office cost in India?",
    a: "Our plans start from ₹999/month for the Basic plan (GST registration address only). The Standard plan is ₹1,999/month (includes company registration support and call answering), and the Premium plan is ₹3,499/month with full services.",
  },
  {
    q: "Can I use a virtual office for company (Pvt Ltd / LLP) registration?",
    a: "Yes. Our Standard and Premium plans include addresses accepted by the Ministry of Corporate Affairs (MCA) for company incorporation — whether Pvt Ltd, LLP, OPC, or any other structure.",
  },
  {
    q: "Do you provide virtual offices in Tier-2 cities?",
    a: "We currently cover 50+ cities including all major metros and Tier-2 cities like Jaipur, Chandigarh, Indore, Nagpur, Lucknow, and more. We're expanding rapidly — contact us if your city isn't listed.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-24 bg-[#F9F8F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 lg:items-start">
          {/* Left: title + intro */}
          <div className="lg:col-span-4 scroll-reveal text-center lg:text-left">
            <h2
              className="font-display font-extrabold text-foreground tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
            >
              FAQs
            </h2>
            <p className="mt-4 text-foreground-muted text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Still wondering how it works? Here&apos;s everything you need to know about virtual offices in India.
            </p>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-8 space-y-4 scroll-reveal">
            {faqs.map((faq, i) => {
              const open = openIndex === i;
              return (
                <div
                  key={i}
                  className={[
                    "bg-white rounded-xl sm:rounded-2xl border transition-shadow duration-300 overflow-hidden",
                    open
                      ? "border-black/[0.10] shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
                      : "border-black/[0.08] shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:border-black/[0.12] hover:shadow-[0_8px_28px_rgba(15,23,42,0.07)]",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                  >
                    <span className="font-display font-bold text-foreground text-sm sm:text-base leading-snug pr-2">
                      {faq.q}
                    </span>
                    <span
                      className="shrink-0 w-9 h-9 flex items-center justify-center text-foreground"
                      aria-hidden
                    >
                      {open ? (
                        <Icon name="MinusIcon" size={22} className="text-foreground" />
                      ) : (
                        <Icon name="PlusIcon" size={22} className="text-foreground/70" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t border-black/[0.08]">
                        <p className="pt-4 text-sm sm:text-[15px] text-foreground-muted leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
