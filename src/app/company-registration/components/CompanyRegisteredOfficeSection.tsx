import React from "react";
import Icon from "@/components/ui/AppIcon";

const columns = [
  {
    eyebrow: "The requirement",
    title: "Registered Office",
    icon: "BuildingLibraryIcon",
    iconBg: "bg-[#EFF6FF]",
    iconColor: "text-[#2563EB]",
    description:
      "The official address associated with your company for statutory and official communication.",
    points: [
      "Recorded against the company in official filings",
      "Used for notices and correspondence from authorities",
      "Needs supporting documentation for the premises",
      "Must be kept up to date if the address changes",
    ],
  },
  {
    eyebrow: "The solution",
    title: "Virtual Office",
    icon: "BuildingOffice2Icon",
    iconBg: "bg-[#ECFDF5]",
    iconColor: "text-[#16A34A]",
    description:
      "A professional business address with selected facilities and documentation, without a conventional full-time office setup.",
    points: [
      "Commercial address you can use for your business",
      "Applicable address documentation provided",
      "Mail and courier handling as per your plan",
      "Meeting facilities where included",
    ],
  },
];

export default function CompanyRegisteredOfficeSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <div className="scroll-reveal flex flex-col items-center text-center">
            <h2
              className="font-display font-extrabold text-foreground flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full tracking-tight"
              style={{ fontSize: "clamp(1.35rem, 2.5vw, 2rem)" }}
            >
              <span
                className="inline-flex items-center justify-center rounded-2xl bg-black/[0.06] border border-black/[0.08] p-2.5 sm:p-3 shrink-0"
                aria-hidden
              >
                <Icon name="InformationCircleIcon" size={24} className="text-foreground" />
              </span>
              <span className="leading-tight min-w-0 text-center">What Is a Registered Office Address?</span>
            </h2>
            <p className="mt-3 text-center text-foreground-muted max-w-xl text-sm sm:text-base leading-relaxed mx-auto">
              Two related ideas, side by side — what a registered office is, and how a virtual office can
              support it.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-5 lg:gap-4 items-stretch">
          {columns.map((col, idx) => (
            <React.Fragment key={col.title}>
              <div
                className={`scroll-reveal scroll-reveal-delay-${idx + 1} h-full flex flex-col rounded-3xl border border-black/[0.08] bg-white px-6 py-7 sm:px-8 sm:py-9 shadow-[0_18px_55px_rgba(15,23,42,0.08)]`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-12 h-12 ${col.iconBg} rounded-2xl border border-black/[0.06] flex items-center justify-center shadow-[0_10px_26px_rgba(15,23,42,0.06)] shrink-0`}
                    aria-hidden
                  >
                    <Icon name={col.icon as "BuildingLibraryIcon"} size={22} className={col.iconColor} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/50">
                      {col.eyebrow}
                    </div>
                    <h3 className="font-display font-extrabold text-xl text-foreground leading-snug">
                      {col.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm sm:text-[15px] text-foreground-muted leading-relaxed">
                  {col.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {col.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-black/[0.04] border border-black/[0.10] flex items-center justify-center"
                        aria-hidden
                      >
                        <Icon name="CheckIcon" size={11} className="text-foreground" />
                      </span>
                      <span className="text-sm text-foreground-muted leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {idx === 0 && (
                <div className="flex lg:flex-col items-center justify-center gap-3 py-1 lg:py-0 lg:px-1">
                  <span className="h-px flex-1 lg:h-full lg:w-px lg:flex-none bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-black/[0.14] to-transparent" />
                  <span
                    className="shrink-0 w-10 h-10 rounded-full border border-black/[0.08] bg-white shadow-[0_10px_28px_rgba(15,23,42,0.10)] flex items-center justify-center ring-4 ring-[#FCFBF7]"
                    aria-hidden
                  >
                    <Icon name="ArrowRightIcon" size={16} className="text-primary lg:hidden" />
                    <Icon name="ArrowDownIcon" size={16} className="text-primary hidden lg:block" />
                  </span>
                  <span className="h-px flex-1 lg:h-full lg:w-px lg:flex-none bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-black/[0.14] to-transparent" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="scroll-reveal scroll-reveal-delay-3 mt-6 sm:mt-7 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2.5 rounded-full border border-black/[0.10] bg-white px-5 py-3 shadow-[0_12px_36px_rgba(15,23,42,0.08)]">
            <span className="font-display font-extrabold text-sm text-foreground">Virtual Office</span>
            <Icon name="ArrowRightIcon" size={15} className="text-primary shrink-0" />
            <span className="font-display font-extrabold text-sm text-foreground">
              Registered Office Solution
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
