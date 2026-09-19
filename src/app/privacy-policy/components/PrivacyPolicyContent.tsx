"use client";
import React from "react";
import Icon from "@/components/ui/AppIcon";
import { useContactModal } from "@/components/ContactModalProvider";

const PROVIDED_INFO = [
  "Full name",
  "Mobile number",
  "Email address",
  "Preferred city or location",
  "Business name",
  "Business type",
  "GST-related requirements",
  "Company-registration requirements",
  "KYC information, where applicable",
  "Booking information",
  "Information submitted through enquiry or contact forms",
  "Payment and transaction information, where applicable",
];

const AUTOMATIC_INFO = [
  "IP address",
  "Browser type",
  "Device information",
  "Operating system",
  "Pages visited",
  "Website interactions",
  "Referral source",
  "Cookies and similar technologies",
  "Approximate location derived from technical information",
];

const USES = [
  "Respond to enquiries",
  "Provide information about our services",
  "Help you identify suitable virtual office locations",
  "Process bookings and payments",
  "Coordinate with relevant service providers",
  "Provide customer support",
  "Process KYC or service-related information where applicable",
  "Provide documentation or service assistance",
  "Improve our website and services",
  "Analyse website and marketing performance",
  "Prevent fraud and misuse",
  "Maintain business records",
  "Comply with applicable legal and regulatory requirements",
  "Send service-related communications",
  "Send promotional communications where permitted and where you have provided the necessary consent",
];

const TECH_PROVIDERS = [
  "Payment processing",
  "Website hosting",
  "CRM",
  "Customer support",
  "Analytics",
  "Communication",
  "Marketing",
  "Security",
];

const COOKIE_USES = [
  "Keep our website functioning properly",
  "Remember user preferences",
  "Understand website usage",
  "Analyse traffic",
  "Measure advertising performance",
  "Improve user experience",
];

const RETENTION_PURPOSES = [
  "Providing services",
  "Maintaining business records",
  "Processing transactions",
  "Resolving disputes",
  "Preventing fraud",
  "Meeting legal and regulatory requirements",
];

const RIGHTS = [
  "Request access to your personal information",
  "Request correction of inaccurate information",
  "Request deletion where legally permitted",
  "Withdraw consent where processing is based on consent",
  "Opt out of promotional communications",
  "Raise a privacy-related complaint or grievance",
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

function SubBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/[0.08] bg-[#FCFBF7] px-4 py-5 sm:px-5">
      <h3 className="font-display font-extrabold text-foreground text-[15px] sm:text-base leading-snug">
        {title}
      </h3>
      <div className="mt-3 space-y-3 text-sm sm:text-[15px] text-foreground-muted leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPolicyContent() {
  const { open } = useContactModal();

  return (
    <section className="py-12 sm:py-16 bg-[#FCFBF7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-5 sm:space-y-6">
        <div className="rounded-3xl border border-black/[0.08] bg-white px-5 py-7 sm:px-8 sm:py-8 shadow-[0_14px_45px_rgba(15,23,42,0.06)]">
          <p className="text-sm sm:text-[15px] text-foreground-muted leading-relaxed">
            Virtual Offices India (“Virtual Offices India”, “we”, “us” or “our”) respects your privacy and is
            committed to protecting your personal information.
          </p>
          <p className="mt-4 text-sm sm:text-[15px] text-foreground-muted leading-relaxed">
            This Privacy Policy explains how we collect, use, store, disclose and protect information when you
            visit virtualofficesindia.com, submit an enquiry, purchase a service, or otherwise interact with our
            website and services.
          </p>
          <p className="mt-4 text-sm sm:text-[15px] text-foreground-muted leading-relaxed">
            By using our website or services, you acknowledge and agree to the practices described in this
            Privacy Policy. Where required under applicable law, we will obtain your consent before collecting
            or processing personal information for purposes that require consent.
          </p>
        </div>

        <SectionCard number="1" title="About Virtual Offices India">
          <p>
            Virtual Offices India is an independent online platform that helps businesses, entrepreneurs and
            professionals discover virtual office, business address and related business solutions across India.
          </p>
          <div className="rounded-2xl border border-black/[0.08] bg-[#FCFBF7] px-4 py-5 sm:px-5 space-y-3.5">
            <div className="flex items-start gap-3">
              <Icon name="GlobeAltIcon" size={17} className="text-foreground mt-0.5 shrink-0" />
              <a
                href="https://virtualofficesindia.com/"
                className="text-foreground font-semibold hover:text-primary transition-colors break-all"
              >
                https://virtualofficesindia.com/
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="PhoneIcon" size={17} className="text-foreground mt-0.5 shrink-0" variant="solid" />
              <a
                href="tel:+919311328043"
                className="text-foreground font-semibold hover:text-primary transition-colors"
              >
                +91 93113 28043
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="MapPinIcon" size={17} className="text-foreground mt-0.5 shrink-0" />
              <span>Gurgaon, Haryana, India</span>
            </div>
          </div>
        </SectionCard>

        <SectionCard number="2" title="Information We Collect">
          <p>Depending on how you interact with our website, we may collect the following information.</p>
          <SubBlock title="Information You Provide">
            <p>This may include:</p>
            <BulletList items={PROVIDED_INFO} />
          </SubBlock>
          <SubBlock title="Information Collected Automatically">
            <p>When you use our website, we may automatically collect:</p>
            <BulletList items={AUTOMATIC_INFO} />
          </SubBlock>
        </SectionCard>

        <SectionCard number="3" title="How We Use Your Information">
          <p>We may use your information to:</p>
          <BulletList items={USES} />
        </SectionCard>

        <SectionCard number="4" title="Sharing of Information">
          <p>We may share relevant information with third parties where necessary to provide our services.</p>
          <SubBlock title="Service Providers and Virtual Office Partners">
            <p>
              If you enquire about or purchase a service, we may share relevant information with the applicable
              virtual office, workspace or service provider so that they can process your request.
            </p>
          </SubBlock>
          <SubBlock title="Technology and Service Providers">
            <p>We may use third-party providers for:</p>
            <BulletList items={TECH_PROVIDERS} />
            <p>
              These providers may process information on our behalf for the purposes for which they have been
              engaged.
            </p>
          </SubBlock>
          <SubBlock title="Legal and Regulatory Authorities">
            <p>
              We may disclose information where required by applicable law, court order, legal process or a
              valid government request.
            </p>
          </SubBlock>
          <SubBlock title="Business Transfers">
            <p>
              If Virtual Offices India undergoes a merger, acquisition, restructuring, sale or transfer of
              business assets, relevant information may be transferred as part of that transaction, subject to
              applicable law.
            </p>
          </SubBlock>
          <p>We do not sell your personal information as a standalone product.</p>
        </SectionCard>

        <SectionCard number="5" title="Cookies and Similar Technologies">
          <p>We may use cookies and similar technologies to:</p>
          <BulletList items={COOKIE_USES} />
          <p>
            You may control cookies through your browser settings. Disabling certain cookies may affect some
            website functionality.
          </p>
        </SectionCard>

        <SectionCard number="6" title="Data Retention">
          <p>
            We retain personal information only for as long as reasonably necessary for the purposes described
            in this Policy, including:
          </p>
          <BulletList items={RETENTION_PURPOSES} />
          <p>
            When information is no longer required, we may delete, anonymise or securely dispose of it, subject
            to applicable retention requirements.
          </p>
        </SectionCard>

        <SectionCard number="7" title="Data Security">
          <p>
            We take reasonable technical and organisational measures to protect personal information from
            unauthorised access, loss, misuse, alteration or disclosure.
          </p>
          <p>
            However, no method of transmitting or storing information over the internet can be guaranteed to be
            completely secure.
          </p>
        </SectionCard>

        <SectionCard number="8" title="Your Rights and Choices">
          <p>Subject to applicable law, you may have rights to:</p>
          <BulletList items={RIGHTS} />
          <p>
            To exercise these rights, contact us using the details on this page. We may need to verify your
            identity before processing certain requests.
          </p>
        </SectionCard>

        <SectionCard number="9" title="Third-Party Websites">
          <p>
            Our website may contain links to third-party websites, including virtual office providers, payment
            providers, and other service partners.
          </p>
          <p>We are not responsible for the privacy practices, content or security of third-party websites.</p>
          <p>
            We recommend reviewing the privacy policy of any third-party website before providing personal
            information.
          </p>
        </SectionCard>

        <SectionCard number="10" title="Children's Privacy">
          <p>Our services are intended primarily for businesses, entrepreneurs and professionals.</p>
          <p>We do not knowingly collect personal information from children in violation of applicable law.</p>
        </SectionCard>

        <SectionCard number="11" title="Changes to This Privacy Policy">
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our services, technology,
            legal requirements or business practices.
          </p>
          <p>
            The latest version will always be published on this page with an updated &ldquo;Last Updated&rdquo; date.
          </p>
        </SectionCard>

        <SectionCard number="12" title="Contact Us">
          <p>If you have questions about this Privacy Policy or how we handle personal information, please contact:</p>
          <div className="rounded-2xl border border-black/[0.08] bg-[#FCFBF7] px-4 py-5 sm:px-5 space-y-3.5">
            <p className="font-display font-extrabold text-foreground">Virtual Offices India</p>
            <div className="flex items-start gap-3">
              <Icon name="PhoneIcon" size={17} className="text-foreground mt-0.5 shrink-0" variant="solid" />
              <a
                href="tel:+919311328043"
                className="text-foreground font-semibold hover:text-primary transition-colors"
              >
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
            onClick={() => open({ metadata: { action: "privacy-policy-contact", page: "privacy-policy" } })}
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
