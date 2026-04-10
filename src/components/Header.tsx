"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/ui/AppIcon";
import ContactModal from "@/app/homepage/components/ContactModal";
import { CITIES, cityUrl } from "@/lib/cities";
import virtualOfficeLogo from "@/assets/virtual-office-logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 14);
      setShrink(y > 120);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-cities-dropdown]")) {
        setCitiesOpen(false);
      }
    };

    if (citiesOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [citiesOpen]);

  const dropdownCities = CITIES.slice(0, 12);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3 sm:pt-4">
        <div
          className={[
            "relative flex items-center justify-between mx-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,background-color,box-shadow,backdrop-filter,width] rounded-2xl sm:rounded-full border",
            scrolled
              ? "bg-white/80 backdrop-blur-xl border-black/[0.10] shadow-[0_18px_60px_rgba(15,23,42,0.16)]"
              : "bg-white/70 backdrop-blur-md border-black/[0.08] shadow-[0_10px_40px_rgba(15,23,42,0.10)]",
            scrolled ? "px-3 sm:px-5 py-2" : "px-3 sm:px-6 py-2.5",
            shrink ? "w-1/2" : "w-full",
          ].join(" ")}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src={virtualOfficeLogo}
              alt="Virtual Office in India"
              priority
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled ? "h-8 sm:h-9" : "h-9 sm:h-10"
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <div className="relative" data-cities-dropdown>
              <button
                type="button"
                onClick={() => setCitiesOpen((prev) => !prev)}
                className="px-4 py-2 rounded-full text-sm font-semibold text-foreground/70 hover:text-foreground hover:bg-black/[0.04] transition-all duration-200"
                aria-expanded={citiesOpen}
                aria-haspopup="menu"
              >
                <span className="inline-flex items-center gap-1.5">
                  Cities
                  <Icon
                    name="ChevronDownIcon"
                    size={14}
                    className={`text-foreground/60 transition-transform ${citiesOpen ? "rotate-180" : ""}`}
                  />
                </span>
              </button>

              {citiesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-[580px] rounded-3xl border border-black/[0.10] bg-[#FCFBF7] shadow-[0_24px_70px_rgba(15,23,42,0.16)] p-2 z-[70]">
                  <div className="grid grid-cols-2">
                    {dropdownCities.map((city, idx) => (
                      <Link
                        key={city.slug}
                        href={cityUrl(city.slug)}
                        onClick={() => setCitiesOpen(false)}
                        className={`flex items-center gap-2.5 px-3 py-3 hover:bg-black/[0.04] rounded-2xl transition-colors ${
                          idx < dropdownCities.length - 1 ? "border-b border-black/[0.06]" : ""
                        }`}
                      >
                        <img
                          src={city.imageUrl}
                          alt={city.name}
                          className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                        />
                        <span className="font-display text-[18px] leading-none text-foreground">
                          {city.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right: Phone + CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className={`hidden sm:inline-flex rounded-full text-sm font-semibold transition-all duration-300 bg-foreground text-white hover:bg-foreground/90 shadow-[0_12px_36px_rgba(15,23,42,0.20)] ${
                scrolled ? "px-4 py-2" : "px-4 sm:px-5 py-2.5"
              }`}
            >
              Contact Us
            </button>
            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-xl hover:bg-black/[0.05] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <Icon name={menuOpen ? "XMarkIcon" : "Bars3Icon"} size={20} className="text-foreground" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 rounded-2xl border border-black/[0.08] bg-white/90 backdrop-blur-xl shadow-[0_18px_60px_rgba(15,23,42,0.14)] py-3 pb-4 px-2 space-y-1">
            {[{ label: "Cities", href: "/#cities" }]?.map((item) => (
              <Link
                key={item?.href}
                href={item?.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-semibold text-foreground/70 hover:text-foreground hover:bg-black/[0.04] transition-all"
              >
                {item?.label}
              </Link>
            ))}
            <a
              href="tel:+918800000000"
              className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-foreground"
            >
              <Icon name="PhoneIcon" size={16} className="text-foreground" variant="solid" />
              +91 88000 00000
            </a>
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                setModalOpen(true);
              }}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-white bg-foreground hover:bg-foreground/90 transition-colors"
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
}