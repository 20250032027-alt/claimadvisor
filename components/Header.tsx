"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  const nav = [
    { href: "/car-accident-calculator", label: "Car Accident" },
    { href: "/workers-comp-calculator", label: "Workers Comp" },
    { href: "/mesothelioma-eligibility", label: "Mesothelioma" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header style={{ background: "var(--navy)" }} className="sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display font-bold text-xl text-white tracking-wide">
            Claim<span style={{ color: "var(--gold)" }}>Advisor</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors"
              style={{ color: path === item.href ? "var(--gold)" : "rgba(255,255,255,0.8)" }}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/car-accident-calculator" className="btn-primary text-sm">
            Check My Claim
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`block h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "var(--navy-light)" }} className="md:hidden border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/80 py-1"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/car-accident-calculator" className="btn-primary text-sm text-center mt-2" onClick={() => setOpen(false)}>
              Check My Claim
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
