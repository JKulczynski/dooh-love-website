"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Dlaczego to działa", href: "#solutions" },
  { label: "Trasy", href: "#trasy" },
  { label: "Dla kogo", href: "#dla-kogo" },
  { label: "Galeria", href: "#galeria" },
  { label: "Wycena", href: "#wycena" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/95 border-b border-white/10" : "bg-black/80 border-b border-white/5"} backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-xl tracking-tighter">
          DOOH<span className="text-brandCyan">-</span>LOVE
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-widest text-gray-400 hover:text-brandCyan transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#wycena"
            className="bg-brandCyan text-black text-xs font-bold uppercase tracking-widest py-2 px-5 hover:bg-white transition-colors"
          >
            Zarezerwuj
          </a>
        </div>

        {/* Hamburger */}
        <button
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          className="md:hidden p-2 text-white"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-4 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-brandCyan transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#wycena"
            onClick={() => setOpen(false)}
            className="mt-2 bg-brandCyan text-black text-sm font-bold uppercase tracking-widest py-3 px-5 text-center hover:bg-white transition-colors"
          >
            Zarezerwuj
          </a>
        </div>
      )}
    </nav>
  );
}
