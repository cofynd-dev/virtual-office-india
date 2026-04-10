"use client";
import { useEffect } from "react";

export default function ScrollRevealProvider() {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.08 }
    );

    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return null;
}