"use client";
import React from "react";
import Icon from "@/components/ui/AppIcon";
import { useContactModal } from "@/components/ContactModalProvider";

const COVERED_SERVICES = [
  "Virtual Office plans",
  "GST Virtual Office plans",
  "Company-registration / registered-office solutions",
  "Business-address services",
  "Mail and courier services",
  "Meeting room or workspace add-ons",
  "Other services purchased through the website",
];

const BEFORE_PAYMENT = [
  "Selected city and location",
  "Service and plan inclusions",
  "Contract or service duration",
  "Documentation requirements",
  "Applicable additional charges",
  "Cancellation conditions",
  "Refund conditions",
];

const NON_REFUNDABLE = [
  "Government or statutory fees",
  "Payment gateway charges",
  "Third-party charges",
  "Documentation charges",
  "Notarisation charges",
  "Courier charges",
  "Services already delivered",
  "Activated add-on services",
  "Other charges specifically identified as non-refundable during purchase",
];

const CUSTOMER_ISSUES = [
  "Incorrect information",
  "False or misleading information",
  "Incomplete KYC",
  "Invalid documents",
  "Failure to provide required information",
  "Failure to complete required verification",
  "Misuse of the service",
  "Violation of applicable laws or service terms",
];

const REFUND_REQUEST_FIELDS = [
  "Full name",
  "Booking/order ID",
  "Registered mobile number",
  "Registered email address",
  "Selected service",
  "City/location",
  "Payment date",
  "Reason for refund",
  "Supporting documents, where applicable",
];

const REVIEW_FACTORS = [
  "The service purchased",
  "The applicable plan terms",
  "The stage of service fulfilment",
  "Documentation/KYC status",
  "The reason for cancellation",
  "Any applicable third-party costs",
];

const KYC_ISSUES = [
  "Incorrect information",
  "Incomplete information",
  "Invalid documents",
  "Mismatched documents",
  "Failure to provide required documents",
  "Failure to complete required verification",
];

function SectionCard({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-3xl border border-black/[0.08] bg-white px-5 py-7 sm:px-8 sm:py-9 shadow-[0_14px_45px_rgba(15,23,42,0.06)]">
      <div className="flex items-start gap-3 sm:gap-4">
        <span className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-xl bg-black/[0.05] border border-black/[0.08] font-display font-extrabold text-sm text-foreground">
          {number}
        </span>
        <h2 className="font-display font-extrabold text-lg sm:text-xl text-foreground leading-snug pt-1">
          {title}
        </h2>
      </div>
      <div className="mt-5 space-y-4 text-sm sm:text-[15px] text-foreground-muted leading-relaxed">
        {children}
      </div>
    </article>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span
            className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-black/[0.04] border border-black/[0.10] flex items-center justify-center"
            aria-hidden
          >
            <Icon name="CheckIcon" size={11} className="text-foreground" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SubBlock({ letter, title, children }: { letter: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/[0.08] bg-[#FCFBF7] px-4 py-5 sm:px-5">
      <h3 className="font-display font-extrabold text-foreground text-[15px] sm:text-base leading-snug">
        {letter}. {title}
      </h3>
      <div className="mt-3 space-y-3 text-sm sm:text-[15px] text-foreground-muted leading-relaxed">{children}</div>
    </div>
  );
}

export default function RefundPolicyContent() {
  const { open } = useContactModal();

  return (
    <section className="py-12 sm:py-16 bg-[#FCFBF7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-5 sm:space-y-6">
        <div className="rounded-3xl border border-black/[0.08] bg-white px-5 py-7 sm:px-8 sm:py-8 shadow-[0_14px_45px_rgba(15,23,42,0.06)]">
          <p className="text-sm sm:text-[15px] text-foreground-muted leading-relaxed">
            At Virtual Offices India, we aim to provide clear information about our services, pricing, booking
            process, and applicable cancellation and refund conditions.
          </p>
          <p className="mt-4 text-sm sm:text-[15px] text-foreground-muted leading-relaxed">
            This Refund &amp; Cancellation Policy applies to services purchased through virtualofficesindia.com,
            unless specific terms are provided for an individual service, plan, or booking.
          </p>
        </div>

        <SectionCard number="1" title="Services Covered">
          <p>This policy may apply to:</p>
          <BulletList items={COVERED_SERVICES} />
          <p>
            Refund conditions may vary depending on the service, location, plan, and stage of service
            fulfilment.
          </p>
        </SectionCard>

        <SectionCard number="2" title="Before Making a Payment">
          <p>Customers are encouraged to review the following before making a payment:</p>
          <BulletList items={BEFORE_PAYMENT} />
          <p>
            If you require clarification regarding a service or plan, please contact our team before making
            payment.
          </p>
        </SectionCard>

        <SectionCard number="3" title="Cancellation and Refund Eligibility">
          <div className="space-y-4">
            <SubBlock letter="A" title="Cancellation Before Service Processing">
              <p>
                If you request cancellation before service fulfilment, documentation preparation or processing
                has started, your eligibility for a refund will be determined according to the applicable
                service or plan terms.
              </p>
              <p>Any applicable payment-processing or third-party charges may be deducted where permitted.</p>
            </SubBlock>

            <SubBlock letter="B" title="Cancellation After Processing Begins">
              <p>
                Once KYC verification, documentation preparation, agreement preparation, address allocation, or
                other service fulfilment has started, the booking may become non-refundable or may be subject
                to applicable deductions.
              </p>
              <p>The exact terms applicable to your booking will depend on the service and plan selected.</p>
            </SubBlock>

            <SubBlock letter="C" title="KYC or Verification Issues">
              <p>
                If a service cannot be activated because the information or documents provided by the customer
                do not meet the applicable requirements, refund eligibility will depend on the relevant service
                terms.
              </p>
              <p>Refunds may not be available where the issue results from:</p>
              <BulletList items={KYC_ISSUES} />
            </SubBlock>

            <SubBlock letter="D" title="Government Registration or Approval">
              <p>
                Virtual Offices India may provide access to a business address and/or supporting documentation
                for applicable registration requirements.
              </p>
              <p>
                However, GST registration, company incorporation, and other government approvals are determined
                by the relevant government authority.
              </p>
              <p>
                Virtual Offices India does not guarantee approval unless a specific service explicitly states
                otherwise in writing.
              </p>
              <p>
                Government rejection alone does not automatically create a refund entitlement unless the
                applicable service or plan specifically provides for one.
              </p>
            </SubBlock>

            <SubBlock letter="E" title="Service Provider Rejection">
              <p>
                Where a virtual office service is fulfilled by an independent service provider or partner, the
                provider may conduct its own KYC, compliance and eligibility review.
              </p>
              <p>
                If a provider declines a booking, the applicable refund will be determined according to the
                service terms and the reason for rejection.
              </p>
            </SubBlock>
          </div>
        </SectionCard>

        <SectionCard number="4" title="Charges That May Not Be Refundable">
          <p>
            Depending on the service and circumstances, the following may be non-refundable once incurred:
          </p>
          <BulletList items={NON_REFUNDABLE} />
          <p>
            Any applicable non-refundable charges should be communicated as part of the relevant service terms.
          </p>
        </SectionCard>

        <SectionCard number="5" title="Customer Responsibility">
          <p>Customers are responsible for providing accurate and complete information.</p>
          <p>A refund may not be available where the service cannot be provided because of:</p>
          <BulletList items={CUSTOMER_ISSUES} />
        </SectionCard>

        <SectionCard number="6" title="How to Request a Refund">
          <p>To request a refund, contact our team using the details on this page. Please provide:</p>
          <BulletList items={REFUND_REQUEST_FIELDS} />
        </SectionCard>

        <SectionCard number="7" title="Refund Review">
          <p>Each refund request will be reviewed according to:</p>
          <BulletList items={REVIEW_FACTORS} />
          <p>We will communicate the decision to the customer after reviewing the request.</p>
        </SectionCard>

        <SectionCard number="8" title="Refund Processing">
          <p>Where a refund is approved, it will generally be processed to the original payment method.</p>
          <p>
            The time taken for the amount to appear in the customer&apos;s account may depend on the payment
            gateway, bank or financial institution.
          </p>
        </SectionCard>

        <SectionCard number="9" title="Service-Specific Terms">
          <p>
            Certain virtual office locations, plans or services may have additional refund or cancellation
            conditions.
          </p>
          <p>
            Where specific terms are provided at the time of purchase, those terms will apply to the relevant
            service.
          </p>
        </SectionCard>

        <SectionCard number="10" title="Changes to This Policy">
          <p>Virtual Offices India may update this Refund &amp; Cancellation Policy from time to time.</p>
          <p>
            The latest version will be published on this page with the revised &ldquo;Last Updated&rdquo; date.
          </p>
        </SectionCard>

        <SectionCard number="11" title="Contact Us">
          <p>For questions regarding cancellations or refunds:</p>
          <div className="rounded-2xl border border-black/[0.08] bg-[#FCFBF7] px-4 py-5 sm:px-5 space-y-3.5">
            <p className="font-display font-extrabold text-foreground">Virtual Offices India</p>
            <div className="flex items-start gap-3">
              <Icon name="PhoneIcon" size={17} className="text-foreground mt-0.5 shrink-0" variant="solid" />
              <a href="tel:+919311328043" className="text-foreground font-semibold hover:text-primary transition-colors">
                +91 93113 28043
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="MapPinIcon" size={17} className="text-foreground mt-0.5 shrink-0" />
              <span>Gurgaon, Haryana, India</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() =>
              open({ metadata: { action: "refund-policy-contact", page: "refund-cancellation-policy" } })
            }
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground text-white px-6 py-3.5 text-sm font-semibold hover:bg-foreground/90 transition-colors shadow-[0_14px_40px_rgba(15,23,42,0.18)]"
          >
            Contact Us
            <Icon name="ArrowRightIcon" size={15} className="text-white" />
          </button>
        </SectionCard>
      </div>
    </section>
  );
}
