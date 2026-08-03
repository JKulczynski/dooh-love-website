"use client";

import { useState } from "react";
import Image from "next/image";

type Img = { src: string; w: number; h: number };

const STYLES: {
  id: string;
  label: string;
  accent: string;
  wide?: { img: Img; aspectClass: string };
  tiles: Img[];
}[] = [
  {
    id: "neon-night",
    label: "Neon Night",
    accent: "brandCyan",
    wide: {
      img: { src: "/wizualizacje/neon-night/skyline.webp", w: 1600, h: 679 },
      aspectClass: "aspect-[21/9]",
    },
    tiles: [
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
    wide: {
      img: { src: "/wizualizacje/polish-urban/tramwaj.webp", w: 1600, h: 679 },
      aspectClass: "aspect-[21/9]",
    },
    tiles: [
      { src: "/wizualizacje/polish-urban/targ.webp", w: 1000, h: 1241 },
      { src: "/wizualizacje/polish-urban/kazimierz.webp", w: 1000, h: 1241 },
    ],
  },
  {
    id: "hero-campaign",
    label: "Biznes",
    accent: "brandCyan",
    wide: {
      img: { src: "/wizualizacje/hero-campaign/financial.webp", w: 1600, h: 893 },
      aspectClass: "aspect-[16/9]",
    },
    tiles: [
      { src: "/wizualizacje/hero-campaign/dron.webp", w: 1000, h: 1241 },
      { src: "/wizualizacje/hero-campaign/zmierzch.webp", w: 1000, h: 1241 },
    ],
  },
  {
    id: "urban-colors",
    label: "Miejski Kolor",
    accent: "brandMagenta",
    // brak zdjecia w formacie szerokim dla tego stylu w assetach - same portrety
    tiles: [
      { src: "/wizualizacje/urban-colors/graffiti.webp", w: 1000, h: 1241 },
      { src: "/wizualizacje/urban-colors/street-food.webp", w: 1000, h: 1241 },
      { src: "/wizualizacje/urban-colors/noc.webp", w: 1000, h: 1241 },
    ],
  },
  {
    id: "moving-times-square",
    label: "Wielka Kampania",
    accent: "brandCyan",
    wide: {
      img: { src: "/wizualizacje/moving-times-square/konwoj.webp", w: 1600, h: 679 },
      aspectClass: "aspect-[21/9]",
    },
    tiles: [
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

      {/* Selected style images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {style.wide && (
          <div className={`col-span-2 sm:col-span-3 relative ${style.wide.aspectClass} overflow-hidden border border-white/10 bg-white/5`}>
            <Image
              src={style.wide.img.src}
              alt={`Wizualizacja DOOH-LOVE, styl ${style.label}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        )}
        {style.tiles.map((tile, i) => (
          <div
            key={tile.src}
            className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-white/5"
          >
            <Image
              src={tile.src}
              alt={`Wizualizacja DOOH-LOVE, styl ${style.label} ${i + 2}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 400px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
