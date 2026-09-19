import React from "react";
import Icon from "@/components/ui/AppIcon";

const providerResponsibilities = [
  { icon: "BuildingOffice2Icon", label: "Providing the physical premises" },
  { icon: "DocumentTextIcon", label: "Providing applicable documentation" },
  { icon: "Cog6ToothIcon", label: "Managing the virtual office" },
  { icon: "EnvelopeOpenIcon", label: "Handling mail and courier services" },
  { icon: "UserGroupIcon", label: "Providing meeting or workspace facilities" },
  { icon: "ClipboardDocumentCheckIcon", label: "Supporting applicable registration requirements" },
];

const notes = [
  "Government registrations, licences and approvals are issued by the relevant authorities.",
  "Availability and eligibility of any virtual office address or service depend on applicable requirements, the selected location, and the terms of the relevant service.",
];

export default function AboutRoleSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#FCFBF7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
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
              <span className="leading-tight min-w-0 text-center">Our Role</span>
            </h2>
            <p className="mt-3 text-center text-foreground-muted max-w-2xl text-sm sm:text-base leading-relaxed mx-auto">
              Virtual Offices India operates as an independent platform that helps users discover and connect
              with virtual office and business-address service providers.
            </p>
          </div>
        </div>

        <div className="scroll-reveal scroll-reveal-delay-1 rounded-3xl border border-black/[0.08] bg-white px-5 py-7 sm:px-9 sm:py-10 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
          <p className="text-sm sm:text-[15px] font-semibold text-foreground text-center leading-relaxed">
            Depending on the service selected, the relevant service provider may be responsible for:
          </p>

          <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {providerResponsibilities.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <span
                  className="mt-0.5 w-8 h-8 shrink-0 rounded-xl bg-black/[0.04] border border-black/[0.08] flex items-center justify-center"
                  aria-hidden
                >
                  <Icon name={item.icon} size={16} className="text-foreground" />
                </span>
                <span className="text-sm sm:text-[15px] text-foreground-muted leading-relaxed pt-1">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="scroll-reveal scroll-reveal-delay-2 mt-5 space-y-3">
          {notes.map((note) => (
            <p
              key={note}
              className="flex items-start gap-2.5 rounded-2xl border border-black/[0.08] bg-white px-5 py-3.5 text-xs sm:text-sm text-foreground-muted leading-relaxed shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
            >
              <Icon
                name="ExclamationCircleIcon"
                size={17}
                className="text-foreground/60 shrink-0 mt-0.5"
              />
              <span>{note}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
