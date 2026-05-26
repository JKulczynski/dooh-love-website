"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "contact", ...form }),
    });
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-brandCyan/30 p-8 text-center">
        <div className="text-brandCyan text-4xl mb-4">✓</div>
        <p className="text-white font-bold uppercase tracking-widest text-sm mb-2">Dziękujemy!</p>
        <p className="text-gray-400 text-xs uppercase tracking-widest">Odezwiemy się w ciągu 48h.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-md mx-auto">
      <div>
        <input
          id="contact-name"
          type="text"
          required
          placeholder="Imię / Firma"
          aria-label="Imię lub firma"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          className="w-full bg-black border border-white/20 p-3 text-white placeholder-gray-600 focus:border-brandCyan outline-none transition-colors text-sm"
        />
      </div>
      <div>
        <input
          id="contact-contact"
          type="text"
          required
          placeholder="Telefon lub e-mail"
          aria-label="Telefon lub e-mail"
          value={form.contact}
          onChange={e => setForm(f => ({ ...f, contact: e.target.value }))}
          className="w-full bg-black border border-white/20 p-3 text-white placeholder-gray-600 focus:border-brandCyan outline-none transition-colors text-sm"
        />
      </div>
      <div>
        <textarea
          id="contact-message"
          placeholder="Krótki brief (opcjonalnie)"
          aria-label="Krótki brief"
          rows={3}
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          className="w-full bg-black border border-white/20 p-3 text-white placeholder-gray-600 focus:border-brandCyan outline-none transition-colors text-sm resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-brandCyan text-black font-bold py-4 uppercase tracking-widest hover:bg-white transition-colors text-sm"
        style={{ boxShadow: "0 0 20px rgba(0,255,229,0.25)" }}
      >
        Zarezerwuj w 48h
      </button>
      <p className="text-center text-xs text-gray-400 uppercase tracking-widest">
        Briefing → kampania w 48 godzin
      </p>
    </form>
  );
}
