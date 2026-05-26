"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const PIXEL = 10;
const COLORS = [
  "#00FFE5","#00FFE5","#00FFE5",
  "#FF00AA","#FF00AA",
  "#000000","#000000",
];

export default function PixelReveal({ children }: { children: React.ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [done, setDone] = useState(false);
  const triggeredRef = useRef(false);

  const run = useCallback(() => {
    if (triggeredRef.current) return;
    triggeredRef.current = true;

    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const w = wrap.offsetWidth;
    const h = wrap.offsetHeight;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cols = Math.ceil(w / PIXEL);
    const rows = Math.ceil(h / PIXEL);

    type P = { c: number; r: number; color: string; delay: number };
    const pixels: P[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        pixels.push({
          c, r,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          delay: Math.random() * 1200,
        });
      }
    }

    // Draw full mosaic before first animation frame
    for (const p of pixels) {
      ctx.fillStyle = p.color;
      ctx.fillRect(p.c * PIXEL, p.r * PIXEL, PIXEL - 1, PIXEL - 1);
    }

    let start: number | null = null;
    let animId: number;

    function tick(ts: number) {
      if (!start) start = ts;
      const t = ts - start;

      ctx!.clearRect(0, 0, w, h);
      let any = false;

      for (const p of pixels) {
        const ft = t - p.delay;
        const alpha = ft <= 0 ? 1 : Math.max(0, 1 - ft / 350);
        if (alpha > 0) {
          ctx!.globalAlpha = alpha;
          ctx!.fillStyle = p.color;
          ctx!.fillRect(p.c * PIXEL, p.r * PIXEL, PIXEL - 1, PIXEL - 1);
          any = true;
        }
      }
      ctx!.globalAlpha = 1;

      if (any) {
        animId = requestAnimationFrame(tick);
      } else {
        setDone(true);
      }
    }

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { io.disconnect(); run(); } },
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [run]);

  return (
    <div ref={wrapRef} className="relative">
      {children}
      {!done && (
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 40 }}
        />
      )}
    </div>
  );
}
