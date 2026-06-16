"use client";

import { useState } from "react";

const MATERIALY = [
  "Mam gotowe materiały",
  "Potrzebuję projektu graficznego",
  "Potrzebuję kompleksowej obsługi kreatywnej",
];

const USLUGI = [
  "Produkcja materiałów reklamowych",
  "Organizacja eventu",
  "Mapping 3D",
  "Pokaz dronów",
  "Foto / Video",
  "Inne",
];

export default function LeadForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    email: "",
    telefon: "",
    lokalizacja: "",
    termin: "",
    dni: "",
    pojazdy: "",
    materialy: "",
    uslugi: [] as string[],
    notatka: "",
  });

  function toggleUsluga(u: string) {
    setForm((f) => ({
      ...f,
      uslugi: f.uslugi.includes(u) ? f.uslugi.filter((x) => x !== u) : [...f.uslugi, u],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "lead", ...form }),
      });
      setSent(true);
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="border border-brandCyan/30 p-10 text-center">
        <div className="text-brandCyan text-5xl mb-4">✓</div>
        <p className="text-white font-bold uppercase tracking-widest text-sm mb-2">Zapytanie wysłane.</p>
        <p className="text-muted400 text-xs uppercase tracking-widest">
          Odpowiemy w przeciągu 24h. Jeśli sprawa jest pilna, zachęcamy do kontaktu telefonicznego.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">

      {/* Dane kontaktowe */}
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-brandCyan mb-4">Dane kontaktowe</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="lead-email" className="block text-xs uppercase tracking-widest text-muted400 mb-2">E-mail *</label>
            <input
              id="lead-email"
              type="email"
              required
              placeholder="twoj@email.pl"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              className="w-full bg-black border border-white/20 p-3 text-white placeholder-[#767676] focus:border-brandCyan transition-colors text-sm rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="lead-telefon" className="block text-xs uppercase tracking-widest text-muted400 mb-2">Telefon *</label>
            <input
              id="lead-telefon"
              type="tel"
              required
              placeholder="+48 500 000 000"
              pattern="[\d\s\+\-]{9,15}"
              title="Podaj prawidłowy numer telefonu (min. 9 cyfr)"
              value={form.telefon}
              onChange={e => setForm(f => ({ ...f, telefon: e.target.value }))}
              className="w-full bg-black border border-white/20 p-3 text-white placeholder-[#767676] focus:border-brandCyan transition-colors text-sm rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Szczegóły kampanii */}
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-brandCyan mb-4">Szczegóły kampanii</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="lead-lokalizacja" className="block text-xs uppercase tracking-widest text-muted400 mb-2">Miasto / lokalizacja</label>
            <input
              id="lead-lokalizacja"
              type="text"
              placeholder="np. Warszawa, Centrum"
              value={form.lokalizacja}
              onChange={e => setForm(f => ({ ...f, lokalizacja: e.target.value }))}
              className="w-full bg-black border border-white/20 p-3 text-white placeholder-[#767676] focus:border-brandCyan transition-colors text-sm rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="lead-termin" className="block text-xs uppercase tracking-widest text-muted400 mb-2">Termin kampanii</label>
            <input
              id="lead-termin"
              type="text"
              placeholder="np. lipiec 2026"
              value={form.termin}
              onChange={e => setForm(f => ({ ...f, termin: e.target.value }))}
              className="w-full bg-black border border-white/20 p-3 text-white placeholder-[#767676] focus:border-brandCyan transition-colors text-sm rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="lead-dni" className="block text-xs uppercase tracking-widest text-muted400 mb-2">Liczba dni / godzin</label>
            <input
              id="lead-dni"
              type="text"
              placeholder="np. 5 dni, 8h dziennie"
              value={form.dni}
              onChange={e => setForm(f => ({ ...f, dni: e.target.value }))}
              className="w-full bg-black border border-white/20 p-3 text-white placeholder-[#767676] focus:border-brandCyan transition-colors text-sm rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="lead-pojazdy" className="block text-xs uppercase tracking-widest text-muted400 mb-2">Liczba pojazdów LED</label>
            <input
              id="lead-pojazdy"
              type="text"
              placeholder="np. 1"
              value={form.pojazdy}
              onChange={e => setForm(f => ({ ...f, pojazdy: e.target.value }))}
              className="w-full bg-black border border-white/20 p-3 text-white placeholder-[#767676] focus:border-brandCyan transition-colors text-sm rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Materiały reklamowe */}
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-brandMagenta mb-4">Materiały reklamowe</p>
        <div className="space-y-2">
          {MATERIALY.map((m) => (
            <label key={m} className="flex items-center gap-3 text-sm text-muted300 cursor-pointer">
              <input
                type="radio"
                name="materialy"
                value={m}
                checked={form.materialy === m}
                onChange={() => setForm(f => ({ ...f, materialy: m }))}
                className="accent-brandMagenta w-4 h-4"
              />
              {m}
            </label>
          ))}
        </div>
      </div>

      {/* Dodatkowe usługi */}
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-brandMagenta mb-4">Dodatkowe usługi</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {USLUGI.map((u) => (
            <label key={u} className="flex items-center gap-3 text-sm text-muted300 cursor-pointer">
              <input
                type="checkbox"
                checked={form.uslugi.includes(u)}
                onChange={() => toggleUsluga(u)}
                className="accent-brandMagenta w-4 h-4"
              />
              {u}
            </label>
          ))}
        </div>
      </div>

      {/* Dodatkowe informacje */}
      <div>
        <label htmlFor="lead-notatka" className="block text-xs uppercase tracking-widest text-muted400 mb-2">
          Dodatkowe informacje
        </label>
        <textarea
          id="lead-notatka"
          placeholder="Opisz swoje potrzeby, lokalizację wydarzenia lub zadaj pytanie"
          rows={4}
          value={form.notatka}
          onChange={e => setForm(f => ({ ...f, notatka: e.target.value }))}
          className="w-full bg-black border border-white/20 p-3 text-white placeholder-[#767676] focus:border-brandCyan transition-colors text-sm resize-none rounded-lg"
        />
      </div>

      <p className="text-muted400 text-xs leading-relaxed border-t border-white/10 pt-6">
        Potrzebujesz czegoś więcej? Możemy kompleksowo przygotować i zrealizować całą kampanię — od koncepcji
        i projektów graficznych, przez produkcję materiałów reklamowych, aż po eventy, mapping 3D czy pokazy
        laserowe oraz dronów.
      </p>

      <button
        type="submit"
        disabled={sending}
        className="w-full bg-brandMagenta text-black font-bold py-4 rounded-lg uppercase tracking-widest hover:bg-white transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ boxShadow: "0 0 20px rgba(255,0,170,0.25)" }}
      >
        {sending ? "Wysyłanie..." : "Wyślij zapytanie"}
      </button>
      <p className="text-center text-xs text-muted400 uppercase tracking-widest">
        Odpowiemy w przeciągu 24h. Sprawa pilna? Zachęcamy do kontaktu telefonicznego.
      </p>
    </form>
  );
}
