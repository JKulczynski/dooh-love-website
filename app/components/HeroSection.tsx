"use client";

import { useEffect, useState } from "react";

const campaigns = [
  { label: "RED BULL", color: "#00FFE5" },
  { label: "NIKE", color: "#FF00AA" },
  { label: "SAMSUNG", color: "#ffffff" },
  { label: "KSW", color: "#FF00AA" },
  { label: "TWOJA MARKA", color: "#00FFE5" },
];

export default function HeroSection() {
  const [campaignIndex, setCampaignIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCampaignIndex((i) => (i + 1) % campaigns.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const current = campaigns[campaignIndex];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">

      {/* Ghost text background */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span
          className="text-[20vw] font-black uppercase leading-none tracking-tighter"
          style={{
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.04)",
            whiteSpace: "nowrap",
          }}
        >
          WE LOVE
        </span>
      </div>

      {/* Truck silhouette placeholder */}
      <div className="relative z-10 w-full max-w-4xl px-8 flex flex-col items-center">

        {/* Truck body */}
        <div className="relative w-full max-w-2xl mb-12">
          <TruckSilhouette campaignLabel={current.label} campaignColor={current.color} />
        </div>

        {/* Tagline */}
        <div className="text-center" style={{ animation: "fade-in-up 1s ease forwards" }}>
          <p className="text-sm uppercase tracking-[0.4em] text-white/40 mb-3">
            Mobile LED Advertising
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-2">
            We love
          </h1>
          <h1
            className="text-5xl md:text-7xl font-black uppercase leading-none mb-8"
            style={{ color: "#00FFE5" }}
          >
            attention.
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-lg mx-auto mb-10">
            Twoja reklama jedzie przez miasto. Ekrany LED. Pełna wyłączność trasy.
            Warszawa widzi Cię — każdego dnia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kontakt"
              className="px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all"
              style={{
                background: "#00FFE5",
                color: "#0a0a0a",
                animation: "pulse-glow 2s ease-in-out infinite",
              }}
            >
              Sprawdź cenę
            </a>
            <a
              href="#jak-to-dziala"
              className="px-8 py-4 font-bold uppercase tracking-widest text-sm border border-white/20 text-white hover:border-white/60 transition-all"
            >
              Jak to działa
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }}
      />
    </section>
  );
}

function TruckSilhouette({
  campaignLabel,
  campaignColor,
}: {
  campaignLabel: string;
  campaignColor: string;
}) {
  return (
    <div className="relative w-full" style={{ aspectRatio: "3/1" }}>
      {/* Truck body */}
      <div className="absolute inset-0 flex items-center">

        {/* Cab */}
        <div
          className="relative flex-shrink-0 h-full"
          style={{ width: "22%", background: "#111" }}
        >
          {/* Windshield */}
          <div
            className="absolute top-[15%] right-[10%] w-[55%] h-[35%]"
            style={{ background: "rgba(0,255,229,0.08)", border: "1px solid rgba(0,255,229,0.2)" }}
          />
          {/* Wheel */}
          <div
            className="absolute bottom-[-8%] left-[15%] w-[30%]"
            style={{ aspectRatio: "1/1", borderRadius: "50%", background: "#222", border: "2px solid #333" }}
          />
        </div>

        {/* LED Screen panels — main surface */}
        <div
          className="relative flex-1 h-[85%] flex items-center justify-center overflow-hidden"
          style={{
            background: "#0d0d0d",
            border: `1px solid ${campaignColor}33`,
            boxShadow: `0 0 30px ${campaignColor}22, inset 0 0 60px rgba(0,0,0,0.8)`,
          }}
        >
          {/* Pixel grid overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, ${campaignColor}22 0px, transparent 1px, transparent 8px),
                repeating-linear-gradient(90deg, ${campaignColor}22 0px, transparent 1px, transparent 8px)`,
            }}
          />

          {/* Campaign name on screen */}
          <div className="relative z-10 text-center transition-all duration-500">
            <p
              className="font-black uppercase tracking-widest"
              style={{
                fontSize: "clamp(1.5rem, 4vw, 3rem)",
                color: campaignColor,
                textShadow: `0 0 20px ${campaignColor}, 0 0 40px ${campaignColor}88`,
                transition: "color 0.5s, text-shadow 0.5s",
              }}
            >
              {campaignLabel}
            </p>
            <p
              className="text-xs uppercase tracking-[0.3em] mt-1"
              style={{ color: `${campaignColor}99` }}
            >
              campaign live
            </p>
          </div>

          {/* Scan line effect */}
          <div
            className="absolute inset-0 pointer-events-none opacity-5"
            style={{
              background: `repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.3) 2px, rgba(255,255,255,0.3) 3px)`,
            }}
          />
        </div>

        {/* Rear panel */}
        <div
          className="flex-shrink-0 h-[60%]"
          style={{
            width: "8%",
            background: "#0d0d0d",
            border: `1px solid ${campaignColor}22`,
            boxShadow: `0 0 15px ${campaignColor}11`,
          }}
        />

        {/* Rear wheel */}
        <div
          className="absolute bottom-[-5%] right-[6%] w-[8%]"
          style={{ aspectRatio: "1/1", borderRadius: "50%", background: "#222", border: "2px solid #333" }}
        />
      </div>

      {/* Ground shadow */}
      <div
        className="absolute bottom-[-15%] left-[5%] right-[5%] h-4 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(0,255,229,0.1) 0%, transparent 70%)" }}
      />
    </div>
  );
}
