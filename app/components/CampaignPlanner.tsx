"use client";

import { useState } from "react";
import MultiRouteMapWrapper from "./MultiRouteMapWrapper";
import type { RouteData } from "./MultiRouteMap";

type Goal = "event" | "launch" | "brand" | "employer";

const GOALS: { id: Goal; label: string; desc: string }[] = [
  { id: "event",    label: "Event / Gala",     desc: "Impreza, koncert, premiera, konferencja" },
  { id: "launch",   label: "Launch produktu",   desc: "Premiera, nowa kolekcja, otwarcie" },
  { id: "brand",    label: "Brand Awareness",   desc: "Długofalowa widoczność marki w mieście" },
  { id: "employer", label: "Employer Branding", desc: "Rekrutacja, wizerunek pracodawcy" },
];

const ALL_ROUTES: Record<string, RouteData & { reachPerDay: number; time: string; audience: string }> = {
  centrum: {
    name: "Centrum Impact",
    color: "#00FFE5",
    reachPerDay: 35000,
    time: "08:00 - 23:00",
    audience: "Szeroka publiczność, eventy, zakupy, turystyka",
    stops: [
      { pos: [52.2296, 20.9847], label: "Rondo Daszyńskiego" },
      { pos: [52.2317, 21.0067], label: "PKiN" },
      { pos: [52.2237, 21.0252], label: "Pl. Trzech Krzyży" },
      { pos: [52.2328, 21.0418], label: "Elektrownia Powiśle" },
    ],
  },
  business: {
    name: "Business Flow",
    color: "#FF00AA",
    reachPerDay: 28000,
    time: "Peak: 07:00-10:00 / 15:30-19:30",
    audience: "Profesjonaliści, decydenci, B2B",
    stops: [
      { pos: [52.2285, 21.0044], label: "Rondo Dmowskiego" },
      { pos: [52.2353, 20.9841], label: "Rondo ONZ" },
      { pos: [52.2485, 20.9867], label: "Jana Pawła II" },
      { pos: [52.2101, 21.0150], label: "Puławska" },
    ],
  },
  nightlife: {
    name: "Nightlife",
    color: "#ffffff",
    reachPerDay: 18000,
    time: "22:00 - 01:00",
    audience: "Młodzi dorośli, gastronomia, rozrywka",
    stops: [
      { pos: [52.2209, 21.0176], label: "Pl. Zbawiciela" },
      { pos: [52.2221, 21.0152], label: "Hala Koszyki" },
      { pos: [52.2316, 21.0143], label: "Mazowiecka" },
      { pos: [52.2436, 21.0270], label: "Bulwary Wiślane" },
    ],
  },
};

function buildPackage(budget: number, goal: Goal) {
  const vehicles = budget >= 25000 ? 2 : 1;
  const days = Math.min(Math.max(1, Math.floor(budget / 2000)), 20);
  const hasDrony = budget >= 35000;

  let routeKeys: string[] = [];

  if (goal === "event") {
    routeKeys = budget >= 20000 ? ["centrum", "nightlife"] : ["centrum"];
  } else if (goal === "launch") {
    routeKeys = budget >= 15000 ? ["centrum", "business"] : ["centrum"];
  } else if (goal === "employer") {
    routeKeys = budget >= 15000 ? ["business", "centrum"] : ["business"];
  } else {
    routeKeys = budget >= 20000 ? ["centrum", "business", "nightlife"] : ["centrum", "business"];
    if (budget < 12000) routeKeys = ["centrum"];
  }

  const routes = routeKeys.map((k) => ALL_ROUTES[k]);
  const reachPerDay = routes.reduce((s, r) => s + r.reachPerDay, 0) * vehicles;
  const totalReach = reachPerDay * days;

  return { routes, routeKeys, vehicles, days, hasDrony, reachPerDay, totalReach };
}

function formatBudget(n: number) {
  return n.toLocaleString("pl-PL") + " PLN";
}

function formatReach(n: number) {
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(".", ",") + " mln";
  return Math.round(n / 1000) * 1000 > 999
    ? (n / 1000).toFixed(0) + " 000"
    : n.toString();
}

const routeBorderColor: Record<string, string> = {
  centrum:   "border-brandCyan/50 text-brandCyan",
  business:  "border-brandMagenta/50 text-brandMagenta",
  nightlife: "border-white/30 text-white/60",
};

interface Props { onRequestQuote?: () => void }

export default function CampaignPlanner({ onRequestQuote }: Props) {
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [budget, setBudget] = useState(15000);
  const [goal, setGoal] = useState<Goal | null>(null);

  const pkg = goal ? buildPackage(budget, goal) : null;

  const STEPS = ["Budżet", "Cel", "Pakiet"];

  return (
    <div className="space-y-10">

      {/* Step indicator */}
      <div className="flex items-center gap-0">
        {STEPS.map((label, i) => (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-[11px] font-bold transition-all duration-300 ${
                i < step  ? "border-brandCyan bg-brandCyan text-black" :
                i === step ? "border-brandCyan text-brandCyan" :
                "border-white/20 text-gray-600"
              }`}>
                {i < step ? "✓" : i + 1}
              </div>
              <span className={`text-[9px] uppercase tracking-widest transition-colors duration-300 ${
                i <= step ? "text-gray-300" : "text-gray-600"
              }`}>{label}</span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`flex-1 h-px mx-2 mb-5 transition-colors duration-300 ${i < step ? "bg-brandCyan/50" : "bg-white/10"}`} />
            )}
          </div>
        ))}
      </div>

      {/* STEP 0 — Budżet */}
      {step === 0 && (
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-baseline mb-3">
              <span className="text-xs uppercase tracking-widest text-gray-400">Budżet kampanii</span>
              <span className="text-2xl font-bold text-brandCyan">{formatBudget(budget)}</span>
            </div>
            <input
              type="range" min={5000} max={100000} step={1000} value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brandCyan"
            />
            <div className="flex justify-between text-xs mt-2 text-gray-600">
              <span>5 000 PLN</span><span>100 000 PLN</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { label: "Start",    desc: "1 pojazd, 2-5 dni",       active: budget < 10000 },
              { label: "Standard", desc: "1-2 pojazdy, 5-15 dni",   active: budget >= 10000 && budget < 30000 },
              { label: "Premium",  desc: "Flota + drony",           active: budget >= 30000 },
            ].map((tier, i) => (
              <div key={i} className={`border p-3 transition-all ${tier.active ? "border-brandCyan/50 bg-brandCyan/5" : "border-white/10 bg-white/5"}`}>
                <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${tier.active ? "text-brandCyan" : "text-gray-500"}`}>{tier.label}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">{tier.desc}</div>
              </div>
            ))}
          </div>

          <button onClick={() => setStep(1)} className="w-full bg-brandCyan text-black font-bold py-4 uppercase tracking-widest hover:bg-white transition-colors text-sm">
            Dalej
          </button>
        </div>
      )}

      {/* STEP 1 — Cel */}
      {step === 1 && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {GOALS.map((g) => (
              <button key={g.id} type="button" onClick={() => setGoal(g.id)}
                className={`border p-5 text-left transition-all ${
                  goal === g.id ? "border-brandCyan bg-brandCyan/5" : "border-white/10 bg-white/5 hover:border-white/30"
                }`}
              >
                <div className="text-sm font-bold uppercase tracking-wide mb-1">{g.label}</div>
                <div className="text-[11px] text-gray-400">{g.desc}</div>
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            <button onClick={() => setStep(0)} className="border border-white/20 text-gray-400 font-bold py-3 px-6 uppercase tracking-widest hover:border-white/40 transition-colors text-xs">
              Wstecz
            </button>
            <button onClick={() => goal && setStep(2)} disabled={!goal}
              className="flex-1 bg-brandCyan text-black font-bold py-3 uppercase tracking-widest hover:bg-white transition-colors text-sm disabled:opacity-30 disabled:cursor-not-allowed">
              Zobacz pakiet
            </button>
          </div>
        </div>
      )}

      {/* STEP 2 — Output z mapą */}
      {step === 2 && pkg && (
        <div className="space-y-6" style={{ animation: "fade-in-up 0.4s ease both" }}>

          {/* Reach number + mapa */}
          <div className="relative overflow-hidden border border-brandCyan/20">
            <div className="absolute inset-x-0 top-0 z-10 text-center pt-5 pb-3 bg-gradient-to-b from-black/90 to-transparent pointer-events-none">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-1">Ile osób zobaczy Twoją reklamę</p>
              <div className="text-4xl md:text-5xl font-bold text-brandCyan leading-none">
                {formatReach(pkg.totalReach)}
              </div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                ekspozycji przez {pkg.days} {pkg.days === 1 ? "dzień" : pkg.days < 5 ? "dni" : "dni"}
              </p>
            </div>
            <MultiRouteMapWrapper routes={pkg.routes} height={320} />
          </div>

          {/* Pakiet */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              { val: pkg.vehicles, label: pkg.vehicles === 1 ? "pojazd" : "pojazdy", accent: "text-brandCyan" },
              { val: pkg.days,     label: pkg.days === 1 ? "dzień" : "dni",          accent: "text-brandMagenta" },
              { val: pkg.routes.length, label: pkg.routes.length === 1 ? "trasa" : "trasy", accent: "text-brandCyan" },
              { val: pkg.hasDrony ? "TAK" : "---", label: "drony",                  accent: pkg.hasDrony ? "text-brandMagenta" : "text-gray-600" },
            ].map((item, i) => (
              <div key={i} className="border border-white/10 bg-white/5 p-3 text-center">
                <div className={`text-xl font-bold ${item.accent}`}>{item.val}</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Trasy */}
          <div className="space-y-2">
            {pkg.routeKeys.map((key, i) => {
              const r = ALL_ROUTES[key];
              return (
                <div key={i} className={`border p-4 ${routeBorderColor[key]}`}>
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs font-bold uppercase tracking-wide">{r.name}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider">{r.time}</span>
                  </div>
                  <p className="text-[10px] text-gray-500">{r.audience}</p>
                </div>
              );
            })}
          </div>

          <p className="text-[10px] uppercase tracking-widest text-gray-600">
            Budżet: {formatBudget(budget)} netto &middot; ~{formatReach(pkg.reachPerDay)} ekspozycji / dzień
          </p>

          {/* CTAs */}
          <div className="space-y-3">
            <button type="button" onClick={onRequestQuote}
              className="w-full bg-brandCyan text-black font-bold py-4 uppercase tracking-widest hover:bg-white transition-colors text-sm">
              Zarezerwuj ten pakiet
            </button>
            <button type="button" onClick={() => { setStep(0); setGoal(null); }}
              className="w-full border border-white/20 text-gray-400 font-bold py-3 uppercase tracking-widest hover:border-white/40 transition-colors text-xs">
              Zmien parametry
            </button>
          </div>

          <p className="text-center text-xs text-gray-500 uppercase tracking-widest">
            Zasieg szacunkowy. Dokladna oferta po briefingu — odpowiadamy w ciagu kilku godzin.
          </p>
        </div>
      )}

    </div>
  );
}
