"use client";
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import ContactModal from "@/app/homepage/components/ContactModal";

type OpenOptions = {
  prefillPhone?: string;
  prefillCity?: string;
  prefillRequirement?: string;
  metadata?: Record<string, unknown>;
};

type ContactModalContextValue = {
  open: (options?: OpenOptions) => void;
  close: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<OpenOptions>({});

  const open = useCallback((next?: OpenOptions) => {
    setOptions(next ?? {});
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <ContactModal
        isOpen={isOpen}
        onClose={close}
        prefillPhone={options.prefillPhone}
        prefillCity={options.prefillCity}
        prefillRequirement={options.prefillRequirement}
        metadata={options.metadata}
      />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return ctx;
}
