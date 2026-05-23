"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/car-accident-calculator", label: "Car Accident" },
  { href: "/workers-comp-calculator", label: "Workers Comp" },
  { href: "/mesothelioma-eligibility", label: "Mesothelioma" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-shadow duration-200"
      style={{
        background: "var(--navy)",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.25)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center gap-2.5">
          <span
            className="font-display font-bold text-xl tracking-tight"
            style={{ color: "white" }}
          >
            Claim<span style={{ color: "var(--gold)" }}>Advisor</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3.5 py-2 rounded-md text-sm font-medium transition-colors"
              style={{
                color: path === item.href ? "var(--gold)" : "rgba(255,255,255,0.72)",
                background: path === item.href ? "rgba(200,151,58,0.12)" : "transparent",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <Link href="/contact" className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
            Contact
          </Link>
          <Link href="/car-accident-calculator" className="btn-primary text-sm py-2 px-5">
            Check My Claim
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md"
          style={{ color: "white" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            ) : (
              <>
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{ background: "var(--navy-light)", borderColor: "rgba(255,255,255,0.08)" }}
        >
          <nav className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
            {[...nav, { href: "/contact", label: "Contact" }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-md text-sm font-medium"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 mt-1 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <Link href="/car-accident-calculator" className="btn-primary w-full text-sm py-2.5" onClick={() => setOpen(false)}>
                Check My Claim
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
