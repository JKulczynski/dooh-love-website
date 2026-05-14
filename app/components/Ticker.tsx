"use client";

const ITEMS = [
  "MOBILNA REKLAMA LED",
  "WARSZAWA",
  "18M² EKRANU",
  "3 TRASY",
  "CENTRUM",
  "MAX ZASIEG",
  "NIGHTLIFE",
  "OD 1 600 PLN / DZIEN",
  "WE LOVE ATTENTION",
];

function TickerRow() {
  return (
    <span className="inline-flex shrink-0">
      {ITEMS.map((item, i) => (
        <span key={i} className="inline-flex items-center">
          <span
            className="text-brandCyan mx-5"
            style={{ textShadow: "0 0 6px #00FFE5" }}
          >
            ·
          </span>
          <span className="text-[10px] uppercase tracking-[0.28em] text-gray-400">
            {item}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function Ticker() {
  return (
    <div className="overflow-hidden bg-black border-t border-b border-white/10 py-3 select-none">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "ticker 35s linear infinite" }}
      >
        <TickerRow />
        <TickerRow />
      </div>
    </div>
  );
}
