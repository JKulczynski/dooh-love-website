"use client";

import { useState } from "react";
import Image from "next/image";

type Img = { src: string; w: number; h: number };

const STYLES: { id: string; label: string; accent: string; images: Img[] }[] = [
  {
    id: "neon-night",
    label: "Neon Night",
    accent: "brandCyan",
    images: [
      { src: "/wizualizacje/neon-night/skyline.webp", w: 1600, h: 679 },
      { src: "/wizualizacje/neon-night/deszcz.webp", w: 1000, h: 1241 },
      { src: "/wizualizacje/neon-night/rynek.webp", w: 1000, h: 1241 },
      { src: "/wizualizacje/neon-night/event.webp", w: 1000, h: 1241 },
      { src: "/wizualizacje/neon-night/event-vert.webp", w: 1000, h: 1792 },
      { src: "/wizualizacje/neon-night/most.webp", w: 1000, h: 1241 },
    ],
  },
  {
    id: "polish-urban",
    label: "Polska Ulica",
    accent: "brandMagenta",
    images: [
      { src: "/wizualizacje/polish-urban/tramwaj.webp", w: 1600, h: 679 },
      { src: "/wizualizacje/polish-urban/targ.webp", w: 1000, h: 1241 },
      { src: "/wizualizacje/polish-urban/kazimierz.webp", w: 1000, h: 1241 },
      { src: "/wizualizacje/polish-urban/bulwary.webp", w: 1000, h: 1241 },
    ],
  },
  {
    id: "hero-campaign",
    label: "Biznes",
    accent: "brandCyan",
    images: [
      { src: "/wizualizacje/hero-campaign/financial.webp", w: 1600, h: 893 },
      { src: "/wizualizacje/hero-campaign/dron.webp", w: 1000, h: 1241 },
      { src: "/wizualizacje/hero-campaign/zmierzch.webp", w: 1000, h: 1241 },
      { src: "/wizualizacje/hero-campaign/shopping.webp", w: 1000, h: 1241 },
    ],
  },
  {
    id: "urban-colors",
    label: "Miejski Kolor",
    accent: "brandMagenta",
    images: [
      { src: "/wizualizacje/urban-colors/graffiti.webp", w: 1000, h: 1241 },
      { src: "/wizualizacje/urban-colors/street-food.webp", w: 1000, h: 1241 },
      { src: "/wizualizacje/urban-colors/noc.webp", w: 1000, h: 1241 },
    ],
  },
  {
    id: "moving-times-square",
    label: "Wielka Kampania",
    accent: "brandCyan",
    images: [
      { src: "/wizualizacje/moving-times-square/konwoj.webp", w: 1600, h: 679 },
      { src: "/wizualizacje/moving-times-square/gala.webp", w: 1000, h: 1241 },
      { src: "/wizualizacje/moving-times-square/rooftop.webp", w: 1000, h: 1241 },
    ],
  },
];

export default function VisualizerGallery() {
  const [active, setActive] = useState(STYLES[0].id);
  const style = STYLES.find((s) => s.id === active)!;

  return (
    <div>
      {/* Style buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {STYLES.map((s) => {
          const isActive = s.id === active;
          return (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`px-5 py-3 text-xs font-bold uppercase tracking-widest border transition-all ${
                isActive
                  ? `bg-${s.accent} text-black border-${s.accent}`
                  : "border-white/15 text-muted400 hover:border-white/40 hover:text-white"
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[150px] sm:auto-rows-[170px] gap-3">
        {style.images.map((img, i) => (
          <div
            key={img.src}
            className={`group relative overflow-hidden border border-white/10 bg-white/5 ${
              i === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
            }`}
          >
            <Image
              src={img.src}
              alt={`Wizualizacja DOOH-LOVE, styl ${style.label} ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              sizes={i === 0 ? "(max-width: 640px) 100vw, 700px" : "(max-width: 640px) 50vw, 350px"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
