"use client";
import React, { useState } from "react";
import ContactModal from "./ContactModal";

export default function FinalCtaSection({
  footerTitle,
  footerDescriptionHtml,
}: {
  footerTitle?: string;
  footerDescriptionHtml?: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-20 sm:py-24 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="scroll-reveal relative rounded-[2rem] p-7 sm:p-12 overflow-hidden text-center border border-black/[0.06] shadow-[0_26px_90px_rgba(15,23,42,0.10)] bg-[#e1dcc9]">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Wavy texture */}
            <div
              className="absolute inset-0 opacity-[0.28]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 32 Q16 22 32 32 T64 32' fill='none' stroke='%23FFFFFF' stroke-opacity='0.35' stroke-width='2'/%3E%3C/svg%3E")`,
                backgroundSize: "64px 64px",
              }}
            />
            {/* Soft light blobs */}
            <div className="absolute -top-16 -right-16 w-72 h-72 bg-white/25 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/18 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <h2 className="font-display font-extrabold text-foreground mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
              Ready to scale your business{" "}
              <span className="whitespace-nowrap">with a Virtual Office?</span>
            </h2>
            <p className="text-foreground/70 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Join 10,000+ businesses who registered with Virtual Office India. GST-compliant address, all documents included, zero hassle.
            </p>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground text-white px-8 py-3.5 font-semibold text-sm sm:text-base hover:bg-foreground/90 transition-colors shadow-[0_14px_40px_rgba(15,23,42,0.25)]"
            >
              Book a Demo
            </button>
          </div>
        </div>

        {footerTitle || footerDescriptionHtml ? (
          <div className="scroll-reveal mt-10 sm:mt-12 mx-auto">
            {footerTitle ? (
              <h3
                className="font-display font-extrabold text-foreground mb-5 sm:mb-2 tracking-tight"
                style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)" }}
              >
                {footerTitle}
              </h3>
            ) : null}
            <div
              className="prose prose-sm sm:prose-base max-w-none
                prose-p:my-3 sm:prose-p:my-3.5
                prose-p:text-[14px] sm:prose-p:text-[15px] prose-p:text-foreground/75 prose-p:leading-[1.45]
                prose-li:leading-[1.45]
                prose-strong:text-foreground
                prose-a:text-foreground prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                prose-headings:font-display prose-headings:text-foreground prose-headings:tracking-tight
                prose-h1:text-[1.6rem] sm:prose-h1:text-[2.1rem] prose-h1:mt-7 prose-h1:mb-3
                prose-h2:text-[1.35rem] sm:prose-h2:text-[1.7rem] prose-h2:mt-6 prose-h2:mb-2.5
                prose-h3:text-[1.15rem] sm:prose-h3:text-[1.35rem] prose-h3:mt-5 prose-h3:mb-2
                prose-h4:text-[1.02rem] sm:prose-h4:text-[1.15rem] prose-h4:mt-4 prose-h4:mb-1.5
                prose-ul:my-3 sm:prose-ul:my-3.5 prose-ol:my-3 sm:prose-ol:my-3.5"
              dangerouslySetInnerHTML={{ __html: footerDescriptionHtml ?? "" }}
            />
          </div>
        ) : null}
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}