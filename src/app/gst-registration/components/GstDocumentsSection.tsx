"use client";
import React, { useState } from "react";
import Icon from "@/components/ui/AppIcon";
import ContactModal from "@/app/homepage/components/ContactModal";

const documents = [
  {
    icon: "DocumentCheckIcon",
    title: "NOC / Consent Documentation",
    description: "Consent from the property owner permitting use of the premises as your business address.",
  },
  {
    icon: "DocumentTextIcon",
    title: "Rent / Lease Documentation",
    description: "Rent or lease paperwork for the address, where applicable to your plan and location.",
  },
  {
    icon: "BoltIcon",
    title: "Utility / Address Proof",
    description: "Utility or address proof for the premises, where applicable.",
  },
  {
    icon: "BuildingOffice2Icon",
    title: "Business Address",
    description: "The commercial address you will use on your GST application.",
  },
  {
    icon: "ClipboardDocumentListIcon",
    title: "Premises-Related Documentation",
    description: "Additional premises-related documents, where applicable to the location.",
  },
  {
    icon: "IdentificationIcon",
    title: "Business / KYC Documents",
    description: "Your own business and KYC documents as required for the registration.",
  },
];

export default function GstDocumentsSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-16 sm:py-20 bg-[#FCFBF7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center mb-9 sm:mb-11">
          <div className="scroll-reveal flex flex-col items-center text-center">
            <h2
              className="font-display font-extrabold text-foreground flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full tracking-tight"
              style={{ fontSize: "clamp(1.35rem, 2.5vw, 2rem)" }}
            >
              <span
                className="inline-flex items-center justify-center rounded-2xl bg-black/[0.06] border border-black/[0.08] p-2.5 sm:p-3 shrink-0"
                aria-hidden
              >
                <Icon name="ClipboardDocumentCheckIcon" size={24} className="text-foreground" />
              </span>
              <span className="leading-tight min-w-0 text-center">
                Documents You May Need for GST Registration
              </span>
            </h2>
            <p className="mt-3 text-center text-foreground-muted max-w-xl text-sm sm:text-base leading-relaxed mx-auto">
              Requirements vary by state and premises. Here is a checklist of what is commonly asked for.
            </p>
          </div>
        </div>

        <div className="scroll-reveal scroll-reveal-delay-1 rounded-3xl border border-black/[0.08] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] overflow-hidden">
          <ul className="divide-y divide-black/[0.06]">
            {documents.map((doc) => (
              <li key={doc.title} className="flex items-start gap-4 px-5 py-5 sm:px-7 sm:py-6">
                <span
                  className="mt-0.5 w-10 h-10 shrink-0 rounded-2xl bg-black/[0.04] border border-black/[0.08] flex items-center justify-center shadow-[0_8px_20px_rgba(15,23,42,0.05)]"
                  aria-hidden
                >
                  <Icon name={doc.icon as "DocumentCheckIcon"} size={19} className="text-foreground" />
                </span>
                <div className="min-w-0">
                  <div className="font-display font-extrabold text-[15px] sm:text-base text-foreground leading-snug">
                    {doc.title}
                  </div>
                  <p className="mt-1 text-sm text-foreground-muted leading-relaxed">{doc.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-5 text-center text-xs sm:text-sm text-foreground-subtle leading-relaxed max-w-2xl mx-auto">
          Applicable documentation depends on your selected city, location, and plan. Our team will confirm
          what is available for your case.
        </p>

        <div className="text-center mt-8 sm:mt-9 scroll-reveal scroll-reveal-delay-2">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-foreground text-white hover:bg-foreground/90 transition-colors shadow-[0_14px_40px_rgba(15,23,42,0.18)]"
          >
            Check Documents for My City
            <Icon name="ArrowRightIcon" size={15} className="text-white" />
          </button>
        </div>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        prefillRequirement="gst"
        metadata={{ action: "gst-documents-cta", page: "gst-registration" }}
      />
    </section>
  );
}
