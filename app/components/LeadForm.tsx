"use client";

import { useState } from "react";

const TRASY = [
  { value: "01 - Centrum Impact", label: "01 - Centrum Impact" },
  { value: "02 - Business Flow", label: "02 - Business Flow" },
  { value: "03 - Nightlife", label: "03 - Nightlife" },
  { value: "Własna lokalizacja", label: "Własna lokalizacja / Inne miasto" },
];

const AKTYWNOSCI = [
  "Mapping 3D na budynku",
  "Pokaz dronów",
  "Content Package (Reels, TikTok, foto)",
  "Night City Cinematic Video",
];

export default function LeadForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    email: "",
    telefon: "",
    trasa: "",
    termin: "",
    ilosc: "1",
    aktywnosci: [] as string[],
    firma: "",
    notatka: "",
  });

  function toggleAktywnosc(item: string) {
    setForm(f => ({
      ...f,
      aktywnosci: f.aktywnosci.includes(item)
        ? f.aktywnosci.filter(a => a !== item)
        : [...f.aktywnosci, item],
    }));
  }

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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lead-firma" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Firma / Marka *</label>
          <input
            id="lead-firma"
            type="text"
            required
            placeholder="np. KSW, Red Bull, marka własna"
            value={form.firma}
            onChange={e => setForm(f => ({ ...f, firma: e.target.value }))}
            className="w-full bg-black border border-white/20 p-3 text-white placeholder-gray-600 focus:border-brandCyan outline-none transition-colors text-sm"
          />
        </div>
        <div>
          <label htmlFor="lead-email" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">E-mail *</label>
          <input
            id="lead-email"
            type="email"
            required
            placeholder="twoj@email.pl"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className="w-full bg-black border border-white/20 p-3 text-white placeholder-gray-600 focus:border-brandCyan outline-none transition-colors text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="lead-telefon" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Telefon *</label>
        <input
          id="lead-telefon"
          type="tel"
          required
          placeholder="+48 500 000 000"
          pattern="[\d\s\+\-]{9,15}"
          title="Podaj prawidłowy numer telefonu (min. 9 cyfr)"
          value={form.telefon}
          onChange={e => setForm(f => ({ ...f, telefon: e.target.value }))}
          className="w-full bg-black border border-white/20 p-3 text-white placeholder-gray-600 focus:border-brandCyan outline-none transition-colors text-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lead-trasa" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Trasa / Miejsce *</label>
          <select
            id="lead-trasa"
            required
            value={form.trasa}
            onChange={e => setForm(f => ({ ...f, trasa: e.target.value }))}
            className="w-full bg-black border border-white/20 p-3 text-white focus:border-brandCyan outline-none transition-colors text-sm appearance-none cursor-pointer"
          >
            <option value="" disabled>Wybierz trasę</option>
            {TRASY.map(t => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="lead-termin" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Start kampanii *</label>
          <input
            id="lead-termin"
            type="date"
            required
            min={new Date().toISOString().split("T")[0]}
            value={form.termin}
            onChange={e => setForm(f => ({ ...f, termin: e.target.value }))}
            className="w-full bg-black border border-white/20 p-3 text-white focus:border-brandCyan outline-none transition-colors text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-3" id="ilosc-label">Ilość aut</label>
        <div className="grid grid-cols-3 gap-3" role="group" aria-labelledby="ilosc-label">
          {["1", "2", "3+"].map(v => (
            <button
              key={v}
              type="button"
              onClick={() => setForm(f => ({ ...f, ilosc: v }))}
              aria-pressed={form.ilosc === v}
              className={`border p-3 text-sm font-bold uppercase tracking-widest transition-all ${
                form.ilosc === v
                  ? "border-brandCyan bg-brandCyan/5 text-brandCyan"
                  : "border-white/10 text-gray-400 hover:border-white/30"
              }`}
            >
              {v} {v === "1" ? "auto" : v === "3+" ? "auta+" : "auta"}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-3" id="aktywnosci-label">Dodatkowe aktywności (opcjonalnie)</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3" role="group" aria-labelledby="aktywnosci-label">
          {AKTYWNOSCI.map(item => (
            <button
              key={item}
              type="button"
              aria-pressed={form.aktywnosci.includes(item)}
              onClick={() => toggleAktywnosc(item)}
              className={`border p-3 text-left text-xs uppercase tracking-wider transition-all ${
                form.aktywnosci.includes(item)
                  ? "border-brandMagenta bg-brandMagenta/5 text-brandMagenta"
                  : "border-white/10 text-gray-500 hover:border-white/30"
              }`}
            >
              {form.aktywnosci.includes(item) ? "✓ " : ""}{item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="lead-notatka" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Notatka (opcjonalnie)</label>
        <textarea
          id="lead-notatka"
          placeholder="np. potrzebuję hostessy, dodatkowego oświetlenia, konkretnej lokalizacji..."
          rows={3}
          value={form.notatka}
          onChange={e => setForm(f => ({ ...f, notatka: e.target.value }))}
          className="w-full bg-black border border-white/20 p-3 text-white placeholder-gray-600 focus:border-brandCyan outline-none transition-colors text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-brandMagenta text-black font-bold py-4 rounded-lg uppercase tracking-widest hover:bg-white transition-colors text-sm"
        style={{ boxShadow: "0 0 20px rgba(255,0,170,0.25)" }}
      >
        Wyślij zapytanie o wycenę
      </button>
      <p className="text-center text-xs text-gray-500 uppercase tracking-widest">
        Odpowiadamy w ciągu kilku godzin z ofertą skrojoną pod Ciebie.
      </p>
    </form>
  );
}
