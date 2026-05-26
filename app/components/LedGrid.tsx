"use client";

import { useEffect, useRef } from "react";

const SPACING = 40;
const BASE_OP = 0.06;
const R = 0; const G = 255; const B = 229; // brandCyan #00FFE5

type Dot = { x: number; y: number; op: number; target: number };

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
          dots.push({ x, y, op: BASE_OP, target: BASE_OP });
        }
      }
    }

    function trigger() {
      if (cancelled) return;
      const n = 3 + Math.floor(Math.random() * 4);
      for (let i = 0; i < n; i++) {
        const d = dots[Math.floor(Math.random() * dots.length)];
        if (d && d.target <= BASE_OP * 1.2) {
          d.target = 0.45 + Math.random() * 0.4;
        }
      }
      setTimeout(trigger, 300 + Math.random() * 800);
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      for (const d of dots) {
        if (d.target > BASE_OP) {
          // Rising phase: fast lerp towards peak
          d.op += (d.target - d.op) * 0.12;
          // Near peak: switch to falling
          if (d.target - d.op < 0.01) d.target = BASE_OP;
        } else {
          // Falling/idle: slow lerp back to base
          d.op += (BASE_OP - d.op) * 0.025;
        }
        ctx!.fillStyle = `rgba(${R},${G},${B},${d.op})`;
        ctx!.fillRect(d.x - 1.5, d.y - 1.5, 3, 3);
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
