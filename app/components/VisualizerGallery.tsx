"use client";

import { useState } from "react";
import Image from "next/image";

type Img = { src: string; w: number; h: number };

const STYLES: {
  id: string;
  label: string;
  accent: string;
  heroes?: { img: Img; aspectClass: string }[];
  tiles: Img[];
}[] = [
  {
    id: "neon-night",
    label: "Neon Night",
    accent: "brandCyan",
    heroes: [
      { img: { src: "/wizualizacje/neon-night/skyline.webp", w: 1600, h: 679 }, aspectClass: "aspect-[21/9]" },
      { img: { src: "/wizualizacje/neon-night/swit.webp", w: 1000, h: 558 }, aspectClass: "aspect-[16/9]" },
    ],
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
    heroes: [
      { img: { src: "/wizualizacje/polish-urban/tramwaj.webp", w: 1600, h: 679 }, aspectClass: "aspect-[21/9]" },
    ],
    tiles: [
      { src: "/wizualizacje/polish-urban/targ.webp", w: 1000, h: 1241 },
      { src: "/wizualizacje/polish-urban/kazimierz.webp", w: 1000, h: 1241 },
      { src: "/wizualizacje/polish-urban/bulwary.webp", w: 1000, h: 1241 },
    ],
  },
  {
    id: "hero-campaign",
    label: "Biznes",
    accent: "brandCyan",
    heroes: [
      { img: { src: "/wizualizacje/hero-campaign/financial.webp", w: 1600, h: 893 }, aspectClass: "aspect-[16/9]" },
    ],
    tiles: [
      { src: "/wizualizacje/hero-campaign/dron.webp", w: 1000, h: 1241 },
      { src: "/wizualizacje/hero-campaign/zmierzch.webp", w: 1000, h: 1241 },
      { src: "/wizualizacje/hero-campaign/shopping.webp", w: 1000, h: 1241 },
    ],
  },
  {
    id: "urban-colors",
    label: "Miejski Kolor",
    accent: "brandMagenta",
    // brak zdjecia w formacie szerokim dla tego stylu - same portrety, bez osobnego hero
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
    heroes: [
      { img: { src: "/wizualizacje/moving-times-square/konwoj.webp", w: 1600, h: 679 }, aspectClass: "aspect-[21/9]" },
    ],
    tiles: [
      { src: "/wizualizacje/moving-times-square/gala.webp", w: 1000, h: 1241 },
      { src: "/wizualizacje/moving-times-square/rooftop.webp", w: 1000, h: 1241 },
    ],
  },
];

function GalleryImage({ src, alt, sizes }: { src: string; alt: string; sizes: string }) {
  return (
    <div className="group relative w-full h-full overflow-hidden border border-white/10 bg-white/5">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        sizes={sizes}
      />
    </div>
  );
}

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

      {/* Duze zdjecia u gory, kazde w swoich naturalnych proporcjach - bez wymuszonego kadrowania */}
      {style.heroes?.map((h, i) => (
        <div key={h.img.src} className={`relative w-full ${h.aspectClass} mb-3`}>
          <GalleryImage
            src={h.img.src}
            alt={`Wizualizacja DOOH-LOVE, styl ${style.label} ${i + 1}`}
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      ))}

      {/* Rowna siatka pozostalych zdjec, proporcja 4:5 dopasowana do oryginalow */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {style.tiles.map((tile, i) => (
          <div key={tile.src} className="relative aspect-[4/5]">
            <GalleryImage
              src={tile.src}
              alt={`Wizualizacja DOOH-LOVE, styl ${style.label} ${i + 2}`}
              sizes="(max-width: 640px) 50vw, 400px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
