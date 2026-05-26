"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "dooh-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-white/10 px-6 py-5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-xs text-gray-400 leading-relaxed max-w-2xl">
          Używamy plików cookie do analizy ruchu i poprawy działania strony.
          Więcej informacji w{" "}
          <a href="/polityka-prywatnosci" className="text-brandCyan underline hover:text-white transition-colors">
            Polityce prywatności
          </a>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="px-5 py-2 text-xs font-bold uppercase tracking-widest border border-white/20 text-gray-400 hover:border-white/50 hover:text-white transition-colors"
          >
            Odrzuc
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-xs font-bold uppercase tracking-widest bg-brandCyan text-black hover:bg-white transition-colors"
          >
            Akceptuj
          </button>
        </div>
      </div>
    </div>
  );
}
