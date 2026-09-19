"use client";
import React from "react";
import Icon from "@/components/ui/AppIcon";
import { useContactModal } from "@/components/ContactModalProvider";

export default function MobileStickyBar() {
  const { open } = useContactModal();

  return (
    <div className="mobile-sticky-bar">
      <a
        href="tel:+919311328043"
        className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl font-bold text-sm shadow-[0_8px_24px_rgba(0,0,0,0.25)] active:scale-[0.98] transition-transform"
      >
        <Icon name="PhoneIcon" size={16} className="text-white" variant="solid" />
        Call Now
      </a>
      <button
        type="button"
        onClick={() => open({ metadata: { action: "sticky-get-quote" } })}
        className="flex-1 flex items-center justify-center gap-2 bg-[#FCFBF7] text-foreground border border-black/[0.12] py-3 rounded-xl font-bold text-sm shadow-[0_4px_16px_rgba(15,23,42,0.08)] active:scale-[0.98] transition-transform"
      >
        <Icon name="DocumentTextIcon" size={16} className="text-foreground" />
        Get Quote
      </button>
    </div>
  );
}
