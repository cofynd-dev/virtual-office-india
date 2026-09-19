"use client";
import React, { useState } from "react";
import Icon from "@/components/ui/AppIcon";
import ContactModal from "@/app/homepage/components/ContactModal";

type Cell = { label: string; positive: boolean };

const rows: { feature: string; traditional: Cell; virtual: Cell }[] = [
  {
    feature: "Monthly rent",
    traditional: { label: "Payable", positive: false },
    virtual: { label: "No rent", positive: true },
  },
  {
    feature: "Security deposit",
    traditional: { label: "Required", positive: false },
    virtual: { label: "Not required", positive: true },
  },
  {
    feature: "Furniture",
    traditional: { label: "You buy", positive: false },
    virtual: { label: "Not required", positive: true },
  },
  {
    feature: "Maintenance",
    traditional: { label: "You manage", positive: false },
    virtual: { label: "Managed", positive: true },
  },
  {
    feature: "Business address",
    traditional: { label: "Yes", positive: true },
    virtual: { label: "Yes", positive: true },
  },
  {
    feature: "Registered office support",
    traditional: { label: "Self-managed", positive: false },
    virtual: { label: "Supported", positive: true },
  },
  {
    feature: "Mail handling",
    traditional: { label: "Own staff", positive: false },
    virtual: { label: "Handled", positive: true },
  },
  {
    feature: "Meeting facilities",
    traditional: { label: "You set up", positive: false },
    virtual: { label: "Where included", positive: true },
  },
  {
    feature: "Flexibility",
    traditional: { label: "Lease locked", positive: false },
    virtual: { label: "Flexible plans", positive: true },
  },
  {
    feature: "Expansion to new cities",
    traditional: { label: "New lease", positive: false },
    virtual: { label: "Add a city", positive: true },
  },
];

function CellValue({ cell, highlight }: { cell: Cell; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-center gap-2 text-center">
      <span
        className={`w-5 h-5 shrink-0 rounded-full flex items-center justify-center ${
          cell.positive
            ? highlight
              ? "bg-accent/15 border border-accent/25"
              : "bg-black/[0.05] border border-black/[0.10]"
            : "bg-black/[0.04] border border-black/[0.08]"
        }`}
        aria-hidden
      >
        <Icon
          name={cell.positive ? "CheckIcon" : "XMarkIcon"}
          size={12}
          className={cell.positive ? (highlight ? "text-accent" : "text-foreground") : "text-foreground/40"}
        />
      </span>
      <span
        className={`text-[12px] sm:text-sm leading-snug ${
          cell.positive ? "font-semibold text-foreground" : "text-foreground-muted"
        }`}
      >
        {cell.label}
      </span>
    </div>
  );
}

export default function CompanyComparisonSection() {
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
                <Icon name="ScaleIcon" size={24} className="text-foreground" />
              </span>
              <span className="leading-tight min-w-0 text-center">
                Why Choose a Virtual Office Instead of Renting an Office?
              </span>
            </h2>
            <p className="mt-3 text-center text-foreground-muted max-w-xl text-sm sm:text-base leading-relaxed mx-auto">
              What each option means for cost, paperwork, and how quickly you can expand.
            </p>
          </div>
        </div>

        <div className="scroll-reveal scroll-reveal-delay-1 rounded-3xl border border-black/[0.08] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] overflow-hidden">
          <div className="grid grid-cols-[1.1fr_1fr_1fr] sm:grid-cols-3 bg-black/[0.03] border-b border-black/[0.06]">
            <div className="px-3 py-4 sm:px-6 sm:py-5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-foreground/60">
              Feature
            </div>
            <div className="px-3 py-4 sm:px-6 sm:py-5 text-center font-display font-extrabold text-[13px] sm:text-base text-foreground-muted">
              Traditional Office
            </div>
            <div className="px-3 py-4 sm:px-6 sm:py-5 text-center font-display font-extrabold text-[13px] sm:text-base text-foreground bg-accent/[0.06]">
              Virtual Office
            </div>
          </div>

          <div className="divide-y divide-black/[0.06]">
            {rows.map((row) => (
              <div key={row.feature} className="grid grid-cols-[1.1fr_1fr_1fr] sm:grid-cols-3 items-center">
                <div className="px-3 py-4 sm:px-6 sm:py-5">
                  <div className="font-semibold text-[13px] sm:text-[15px] text-foreground leading-snug">
                    {row.feature}
                  </div>
                </div>
                <div className="px-2 py-4 sm:px-6 sm:py-5">
                  <CellValue cell={row.traditional} />
                </div>
                <div className="px-2 py-4 sm:px-6 sm:py-5 h-full flex items-center justify-center bg-accent/[0.04]">
                  <CellValue cell={row.virtual} highlight />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-10 scroll-reveal scroll-reveal-delay-2">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-foreground text-white hover:bg-foreground/90 transition-colors shadow-[0_14px_40px_rgba(15,23,42,0.18)]"
          >
            Explore Virtual Office Plans
            <Icon name="ArrowRightIcon" size={15} className="text-white" />
          </button>
        </div>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        prefillRequirement="company-registration"
        metadata={{ action: "company-comparison-cta", page: "company-registration" }}
      />
    </section>
  );
}
