"use client";

import { useRef, useState } from "react";
import PriceCalculator from "./PriceCalculator";
import LeadForm from "./LeadForm";

export default function WycenaSection() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  function handleRequestQuote() {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  return (
    <section className="py-24 px-6 bg-zinc-900" id="wycena">
      <div className="max-w-3xl mx-auto">

        {/* Step indicator */}
        <div className="flex items-center mb-12">
          <div className="flex items-center gap-3 text-brandCyan">
            <span className="text-xs font-bold border border-brandCyan/40 px-2 py-1 tracking-widest">01</span>
            <span className="text-xs uppercase tracking-widest">Kalkulator</span>
          </div>
          <div className="flex-1 h-px bg-white/10 mx-6" />
          <div className={`flex items-center gap-3 transition-colors duration-300 ${showForm ? "text-brandMagenta" : "text-gray-600"}`}>
            <span className={`text-xs font-bold border px-2 py-1 tracking-widest transition-colors duration-300 ${showForm ? "border-brandMagenta/40" : "border-white/10"}`}>02</span>
            <span className="text-xs uppercase tracking-widest">Zapytanie</span>
          </div>
        </div>

        {/* Container */}
        <div className="border border-white/20">

          {/* Step 01 */}
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold uppercase mb-2 text-center">
              Wycena <span className="text-brandCyan">Online</span>
            </h2>
            <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-10">
              Szacunkowy koszt kampanii
            </p>
            <PriceCalculator onRequestQuote={handleRequestQuote} />
          </div>

          {/* Step 02 — reveals after clicking CTA */}
          {showForm && (
            <div
              ref={formRef}
              className="border-t border-white/20 p-8 md:p-12"
              style={{ animation: "fade-in-up 0.4s ease both" }}
            >
              <div className="mb-10">
                <p className="text-xs uppercase tracking-[0.3em] text-brandMagenta mb-3">Krok 02</p>
                <h2 className="text-2xl font-bold uppercase tracking-tight mb-2">
                  Wyślij <span className="text-brandMagenta">zapytanie</span>
                </h2>
                <div className="w-20 h-1 bg-brandCyan mb-6" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Odezwiemy się w ciągu kilku godzin z ofertą skrojoną dokładnie pod Twoje potrzeby.
                </p>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="mt-4 text-xs text-gray-500 hover:text-gray-300 uppercase tracking-widest transition-colors"
                >
                  ← Wróć do kalkulatora
                </button>
              </div>
              <LeadForm />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
