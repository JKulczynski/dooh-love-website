"use client";

import { useEffect, useRef } from "react";

const SPACING = 48;
const BASE_OP = 0.022;
const R = 0; const G = 255; const B = 229; // brandCyan #00FFE5

type Dot = { x: number; y: number; op: number };

export default function LedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dots: Dot[] = [];
    let animId: number;
    let cancelled = false;

    function build() {
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      canvas!.width = w;
      canvas!.height = h;
      dots = [];
      for (let y = SPACING / 2; y < h + SPACING; y += SPACING) {
        for (let x = SPACING / 2; x < w + SPACING; x += SPACING) {
          dots.push({ x, y, op: BASE_OP });
        }
      }
    }

    function trigger() {
      if (cancelled) return;
      const n = 1 + Math.floor(Math.random() * 2);
      for (let i = 0; i < n; i++) {
        const d = dots[Math.floor(Math.random() * dots.length)];
        if (d) d.op = 0.07 + Math.random() * 0.07;
      }
      setTimeout(trigger, 700 + Math.random() * 1600);
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      for (const d of dots) {
        d.op += (BASE_OP - d.op) * 0.028;
        ctx!.fillStyle = `rgba(${R},${G},${B},${d.op})`;
        ctx!.fillRect(d.x - 1, d.y - 1, 2, 2);
      }
      animId = requestAnimationFrame(animate);
    }

    build();
    setTimeout(trigger, 200);
    animate();

    const ro = new ResizeObserver(build);
    ro.observe(canvas);

    return () => {
      cancelled = true;
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
