"use client";
import { useEffect } from "react";

function reveal(el: Element) {
  el.classList.add("revealed");
}

export default function ScrollRevealProvider() {
  useEffect(() => {
    const pending = () => document.querySelectorAll(".scroll-reveal:not(.revealed)");

    if (typeof IntersectionObserver === "undefined") {
      pending().forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { root: null, rootMargin: "80px 0px 80px 0px", threshold: 0 }
    );

    const watch = () => {
      pending().forEach((el) => observer.observe(el));
    };

    watch();
    const raf = window.requestAnimationFrame(watch);
    const retry = window.setTimeout(watch, 250);

    const mo = new MutationObserver(watch);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
      window.cancelAnimationFrame(raf);
      window.clearTimeout(retry);
    };
  }, []);

  return null;
}
