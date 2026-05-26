"use client";

import { useState } from "react";

const RATES: Record<string, number> = {
  "1": 2000,
  "2": 4000,
};

function formatPLN(n: number) {
  return n.toLocaleString("pl-PL") + " PLN";
}

interface PriceCalculatorProps {
  onRequestQuote?: () => void;
}

export default function PriceCalculator({ onRequestQuote }: PriceCalculatorProps) {
  const [days, setDays] = useState(3);
  const [vehicles, setVehicles] = useState("1");

  const isFlota = vehicles === "3+";
  const ratePerDay = RATES[vehicles] ?? 0;
  const total = ratePerDay * days;

  return (
    <div className="space-y-8">
      {/* Slider dni */}
      <div>
        <div className="flex justify-between items-baseline mb-2">
          <label htmlFor="calc-days" className="text-xs uppercase tracking-widest text-gray-400">
            Czas trwania kampanii
          </label>
          <span className="text-brandCyan font-bold text-lg" aria-live="polite">{days} {days === 1 ? "dzień" : days < 5 ? "dni" : "dni"}</span>
        </div>
        <input
          id="calc-days"
          type="range"
          min={1}
          max={30}
          value={days}
          aria-valuetext={`${days} ${days === 1 ? "dzień" : "dni"}`}
          onChange={(e) => setDays(Number(e.target.value))}
          className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brandCyan"
        />
        <div className="flex justify-between text-xs mt-2 text-gray-400">
          <span>1 dzień</span>
          <span>30 dni</span>
        </div>
      </div>

      {/* Pojazdy */}
      <div>
        <label className="block text-xs uppercase tracking-widest text-gray-400 mb-3" id="calc-vehicles-label">
          Liczba pojazdów
        </label>
        <div className="grid grid-cols-3 gap-3" role="group" aria-labelledby="calc-vehicles-label">
          {[
            { value: "1", label: "1 pojazd", sub: "2 000 PLN/dzień" },
            { value: "2", label: "2 pojazdy", sub: "4 000 PLN/dzień" },
            { value: "3+", label: "Flota 3+", sub: "Wycena indyw." },
          ].map((opt) => (
            <button
              key={opt.value}
              type="button"
              aria-pressed={vehicles === opt.value}
              onClick={() => setVehicles(opt.value)}
              className={`border rounded-lg p-3 text-left transition-all ${
                vehicles === opt.value
                  ? "border-brandCyan bg-brandCyan/5"
                  : "border-white/10 bg-white/5 hover:border-white/30"
              }`}
            >
              <div className="text-sm font-bold uppercase mb-1">{opt.label}</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-wider">{opt.sub}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Wynik */}
      <div className="pt-6 border-t border-white/10">
        {isFlota ? (
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm uppercase text-gray-400">Szacowany koszt netto:</span>
            <span className="text-2xl font-bold text-brandCyan">Wycena indywidualna</span>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-xs uppercase text-gray-400">Stawka dzienna:</span>
              <span className="text-sm text-gray-300">{formatPLN(ratePerDay)} netto</span>
            </div>
            <div className="flex justify-between items-end mb-6">
              <span className="text-sm uppercase text-gray-400">Szacowany koszt netto:</span>
              <span className="text-3xl font-bold text-brandCyan">{formatPLN(total)}</span>
            </div>
          </>
        )}

        {onRequestQuote ? (
          <button
            type="button"
            onClick={onRequestQuote}
            className="block w-full bg-white text-black font-bold py-4 rounded-lg uppercase tracking-widest hover:bg-brandMagenta hover:text-white transition-all text-center text-sm"
          >
            Chcę tę konfigurację →
          </button>
        ) : (
          <a
            href="#wycena"
            className="block w-full bg-white text-black font-bold py-4 rounded-lg uppercase tracking-widest hover:bg-brandMagenta hover:text-white transition-all text-center text-sm"
          >
            Zapytaj o szczegóły
          </a>
        )}
        <p className="text-center text-xs text-gray-400 uppercase tracking-widest mt-3">
          Dokładna cena po briefingu. Odpowiadamy szybko.
        </p>
      </div>
    </div>
  );
}
