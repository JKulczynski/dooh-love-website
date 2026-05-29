"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

// LED panel position as % of image — mapped from bus-mockup.jpg (2720x1456)
const PANEL = { left: "49%", top: "7%", width: "45%", height: "68%" };

export default function AdVisualizer() {
  const [uploaded, setUploaded] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    const url = URL.createObjectURL(file);
    setUploaded(url);
  }, []);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <div className="relative w-full select-none">
      {/* Bus mockup */}
      <div className="relative w-full">
        <Image
          src="/bus-mockup.jpg"
          alt="DOOH LOVE bus LED mockup"
          width={2720}
          height={1456}
          className="w-full h-auto"
          priority
        />

        {/* LED panel overlay — slight perspective to match truck angle */}
        <div
          className="absolute"
          style={{ left: PANEL.left, top: PANEL.top, width: PANEL.width, height: PANEL.height }}
        >
          {uploaded ? (
            <div className="relative w-full h-full">
              {/* User image */}
              <img
                src={uploaded}
                alt="Twoja reklama"
                className="w-full h-full object-cover"
                style={{ mixBlendMode: "normal" }}
              />
              {/* LED glow overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(0,255,229,0.08) 0%, rgba(255,0,170,0.06) 100%)",
                  boxShadow: "inset 0 0 40px rgba(0,255,229,0.15), 0 0 60px rgba(0,255,229,0.2)",
                }}
              />
              {/* Scanline effect */}
              <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                  backgroundImage: "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(0,0,0,0.4) 3px, rgba(0,0,0,0.4) 4px)",
                }}
              />
              {/* Reset button */}
              <button
                onClick={() => setUploaded(null)}
                className="absolute top-2 right-2 bg-black/70 text-white text-[10px] uppercase tracking-widest px-2 py-1 hover:bg-brandCyan hover:text-black transition-colors"
              >
                Zmien
              </button>
            </div>
          ) : (
            /* Upload drop zone — transparent by default, shows on hover/drag */
            <div
              className={`w-full h-full flex flex-col items-end justify-end cursor-pointer transition-all duration-300 ${
                dragging ? "bg-brandCyan/25 border-2 border-brandCyan" : "bg-transparent hover:bg-black/20"
              }`}
              onClick={() => inputRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={onDrop}
            >
              <div className="m-3 bg-black/70 backdrop-blur-sm px-3 py-2 flex items-center gap-2 hover:bg-brandCyan hover:text-black transition-colors group">
                <svg className="w-4 h-4 text-brandCyan group-hover:text-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <span className="text-[10px] uppercase tracking-widest text-white group-hover:text-black whitespace-nowrap">
                  Wgraj swoje logo
                </span>
              </div>
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onInputChange}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
