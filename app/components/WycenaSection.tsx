"use client";

import LeadForm from "./LeadForm";

export default function WycenaSection() {
  return (
    <section className="py-24 px-6 bg-zinc-900" id="wycena">
      <div className="max-w-3xl mx-auto">

        <div className="border border-white/20 p-8 md:p-12">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-brandMagenta mb-3">Zapytanie ofertowe</p>
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-2">
              Wyślij <span className="text-brandMagenta">zapytanie</span>
            </h2>
            <div className="w-20 h-1 bg-brandCyan mb-6" />
            <p className="text-muted400 text-sm leading-relaxed">
              Opisz swoją kampanię — odpowiemy w przeciągu 24h z ofertą skrojoną dokładnie pod Twoje potrzeby.
            </p>
          </div>
          <LeadForm />
        </div>

      </div>
    </section>
  );
}
