"use client";

import { useRef, useState, useEffect, useCallback } from "react";

// Panel region as fraction of image size — calibrated on bus-mockup.jpg
const P = { left: 0.475, top: 0.05, w: 0.48, h: 0.72 };

export default function AdVisualizer() {
  const [uploaded, setUploaded] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const getPanelPx = (W: number, H: number) => ({
    x: P.left * W,
    y: P.top * H,
    w: P.w * W,
    h: P.h * H,
  });

  const drawDefault = useCallback((canvas: HTMLCanvasElement) => {
    const W = canvas.width, H = canvas.height;
    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, W, H);
    const { x, y, w, h } = getPanelPx(W, H);

    // Subtle dark tint on panel
    ctx.fillStyle = "rgba(0,0,0,0.35)";
    ctx.fillRect(x, y, w, h);

    // DOOH text — cyan glow
    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const cx = x + w / 2;
    const fontSize = Math.round(w * 0.22);

    ctx.font = `900 ${fontSize}px 'Arial Black', Arial, sans-serif`;
    ctx.shadowColor = "#00FFE5";
    ctx.shadowBlur = 40;
    ctx.fillStyle = "#00FFE5";
    ctx.fillText("DOOH", cx, y + h * 0.35);

    // LOVE text — magenta glow
    ctx.shadowColor = "#FF00AA";
    ctx.shadowBlur = 40;
    ctx.fillStyle = "#FF00AA";
    ctx.fillText("LOVE", cx, y + h * 0.63);

    // Scanlines
    ctx.globalAlpha = 0.08;
    ctx.fillStyle = "#000";
    for (let row = y; row < y + h; row += 4) {
      ctx.fillRect(x, row, w, 2);
    }
    ctx.restore();
  }, []);

  const drawUploaded = useCallback((canvas: HTMLCanvasElement, src: string) => {
    const W = canvas.width, H = canvas.height;
    const ctx = canvas.getContext("2d")!;
    const { x, y, w, h } = getPanelPx(W, H);
    const img = new window.Image();
    img.onload = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.drawImage(img, x, y, w, h);
      // LED glow
      ctx.globalAlpha = 0.1;
      ctx.globalCompositeOperation = "screen";
      const g = ctx.createLinearGradient(x, y, x + w, y + h);
      g.addColorStop(0, "#00FFE5");
      g.addColorStop(1, "#FF00AA");
      ctx.fillStyle = g;
      ctx.fillRect(x, y, w, h);
      // Scanlines
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.07;
      ctx.fillStyle = "#000";
      for (let row = y; row < y + h; row += 4) ctx.fillRect(x, row, w, 2);
      ctx.globalAlpha = 1;
    };
    img.src = src;
  }, []);

  const sync = useCallback(() => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img || img.offsetWidth === 0) return;
    canvas.width = img.offsetWidth;
    canvas.height = img.offsetHeight;
    if (uploaded) drawUploaded(canvas, uploaded);
    else drawDefault(canvas);
  }, [uploaded, drawDefault, drawUploaded]);

  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync]);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    setUploaded(URL.createObjectURL(file));
  };

  return (
    <div className="relative w-full">
      {/* Bus image */}
      <img
        ref={imgRef}
        src="/bus-mockup.jpg"
        alt="DOOH LOVE LED bus Warszawa"
        className="w-full h-auto block"
        onLoad={sync}
      />

      {/* Canvas overlay */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full cursor-pointer transition-opacity duration-200 ${dragging ? "opacity-60" : "opacity-100"}`}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => { e.preventDefault(); setDragging(false); const f = e.dataTransfer.files?.[0]; if (f) handleFile(f); }}
      />

      {/* Upload hint */}
      <button
        onClick={() => inputRef.current?.click()}
        className="absolute bottom-4 right-4 bg-black/75 hover:bg-brandCyan hover:text-black transition-colors flex items-center gap-2 px-3 py-2 group"
      >
        <svg className="w-4 h-4 text-brandCyan group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
        <span className="text-[10px] uppercase tracking-widest text-white group-hover:text-black">
          {uploaded ? "Zmien logo" : "Wgraj swoje logo"}
        </span>
      </button>

      {uploaded && (
        <button
          onClick={() => setUploaded(null)}
          className="absolute top-3 right-3 bg-black/75 text-white text-[10px] uppercase tracking-widest px-3 py-1.5 hover:bg-white hover:text-black transition-colors"
        >
          Reset
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
      />
    </div>
  );
}
