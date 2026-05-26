"use client";

import { useState } from "react";

export default function LeadForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    firma: "",
    email: "",
    telefon: "",
    trasa: "",
    notatka: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "lead", ...form }),
    });
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-brandCyan/30 p-10 text-center">
        <div className="text-brandCyan text-5xl mb-4">✓</div>
        <p className="text-white font-bold uppercase tracking-widest text-sm mb-2">Zapytanie wysłane.</p>
        <p className="text-gray-400 text-xs uppercase tracking-widest">Odezwiemy się w ciągu kilku godzin.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lead-firma" className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Firma / Marka *</label>
          <input
            id="lead-firma"
            type="text"
            required
            placeholder="np. KSW, Red Bull, marka własna"
            value={form.firma}
            onChange={e => setForm(f => ({ ...f, firma: e.target.value }))}
            className="w-full bg-black border border-white/20 p-3 text-white placeholder-[#767676] focus:border-brandCyan outline-none transition-colors text-sm rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="lead-email" className="block text-xs uppercase tracking-widest text-gray-400 mb-2">E-mail *</label>
          <input
            id="lead-email"
            type="email"
            required
            placeholder="twoj@email.pl"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className="w-full bg-black border border-white/20 p-3 text-white placeholder-[#767676] focus:border-brandCyan outline-none transition-colors text-sm rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lead-telefon" className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Telefon *</label>
          <input
            id="lead-telefon"
            type="tel"
            required
            placeholder="+48 500 000 000"
            pattern="[\d\s\+\-]{9,15}"
            title="Podaj prawidłowy numer telefonu (min. 9 cyfr)"
            value={form.telefon}
            onChange={e => setForm(f => ({ ...f, telefon: e.target.value }))}
            className="w-full bg-black border border-white/20 p-3 text-white placeholder-[#767676] focus:border-brandCyan outline-none transition-colors text-sm rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="lead-trasa" className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Trasa / Miejsce *</label>
          <input
            id="lead-trasa"
            type="text"
            required
            placeholder="np. Centrum Impact, własna lokalizacja..."
            value={form.trasa}
            onChange={e => setForm(f => ({ ...f, trasa: e.target.value }))}
            className="w-full bg-black border border-white/20 p-3 text-white placeholder-[#767676] focus:border-brandCyan outline-none transition-colors text-sm rounded-lg"
          />
        </div>
      </div>

      <div>
        <label htmlFor="lead-notatka" className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Wiadomość (opcjonalnie)</label>
        <textarea
          id="lead-notatka"
          placeholder="Opisz swoją kampanię: termin, liczba aut, dodatkowe usługi, lokalizacje..."
          rows={4}
          value={form.notatka}
          onChange={e => setForm(f => ({ ...f, notatka: e.target.value }))}
          className="w-full bg-black border border-white/20 p-3 text-white placeholder-[#767676] focus:border-brandCyan outline-none transition-colors text-sm resize-none rounded-lg"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-brandMagenta text-black font-bold py-4 rounded-lg uppercase tracking-widest hover:bg-white transition-colors text-sm"
        style={{ boxShadow: "0 0 20px rgba(255,0,170,0.25)" }}
      >
        Wyślij zapytanie o wycenę
      </button>
      <p className="text-center text-xs text-gray-400 uppercase tracking-widest">
        Odpowiadamy w ciągu kilku godzin z ofertą skrojoną pod Ciebie.
      </p>
    </form>
  );
}
