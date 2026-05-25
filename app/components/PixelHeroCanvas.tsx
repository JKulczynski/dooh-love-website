"use client";
import { useEffect, useRef } from "react";

const PW = 480;
const PH = 270;
const TW = 24;
const TH = 12;
const OX = PW * 0.58;
const OY = 22;

const CYAN = "#00FFE5";
const MAG  = "#FF00AA";

function iso(col: number, row: number) {
  return {
    x: OX + (col - row) * (TW / 2),
    y: OY + (col + row) * (TH / 2),
  };
}

function drawTile(
  ctx: CanvasRenderingContext2D,
  col: number, row: number,
  fill: string,
) {
  const o = iso(col, row);
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.moveTo(o.x,           o.y);
  ctx.lineTo(o.x + TW / 2, o.y + TH / 2);
  ctx.lineTo(o.x,           o.y + TH);
  ctx.lineTo(o.x - TW / 2, o.y + TH / 2);
  ctx.closePath();
  ctx.fill();
}

function drawBox(
  ctx: CanvasRenderingContext2D,
  col: number, row: number,
  w: number, d: number, h: number,
  colorTop: string, colorLeft: string, colorRight: string,
) {
  const A = iso(col,     row);
  const B = iso(col + w, row);
  const C = iso(col + w, row + d);
  const D = iso(col,     row + d);
  const up = (p: { x: number; y: number }) => ({ x: p.x, y: p.y - h });

  const poly = (pts: { x: number; y: number }[], color: string) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    pts.slice(1).forEach((p) => ctx.lineTo(p.x, p.y));
    ctx.closePath();
    ctx.fill();
  };

  poly([up(A), up(B), up(C), up(D)], colorTop);
  poly([up(D), up(C), C, D],         colorLeft);
  poly([up(B), up(C), C, B],         colorRight);
}

const BUILDINGS = [
  // back (rows 0-4)
  { col: 1,  row: 0, w: 2, d: 2, h: 52, cyan: true  },
  { col: 4,  row: 0, w: 3, d: 2, h: 68, cyan: false },
  { col: 8,  row: 1, w: 2, d: 2, h: 38, cyan: false },
  { col: 11, row: 0, w: 3, d: 2, h: 60, cyan: true  },
  { col: 15, row: 0, w: 2, d: 2, h: 44, cyan: false },
  { col: 0,  row: 3, w: 2, d: 2, h: 33, cyan: false },
  { col: 6,  row: 2, w: 2, d: 2, h: 55, cyan: true  },
  { col: 13, row: 2, w: 2, d: 2, h: 30, cyan: false },
  // front (rows 11-15)
  { col: 0,  row: 11, w: 3, d: 2, h: 44, cyan: false },
  { col: 4,  row: 11, w: 2, d: 2, h: 58, cyan: true  },
  { col: 7,  row: 12, w: 3, d: 2, h: 36, cyan: false },
  { col: 11, row: 11, w: 2, d: 2, h: 50, cyan: false },
  { col: 14, row: 11, w: 3, d: 2, h: 38, cyan: true  },
];

const DRONES = [
  { col: 4,  row: 2, phase: 0.0 },
  { col: 9,  row: 1, phase: 1.3 },
  { col: 14, row: 4, phase: 2.6 },
  { col: 6,  row: 7, phase: 0.8 },
  { col: 12, row: 2, phase: 1.9 },
];

const LED_MSGS = [
  "MOBILE LED",
  "DRONY",
  "MAPPING",
  "WE LOVE ATTENTION",
  "DOOH-LOVE.PL",
];

export default function PixelHeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    ctx.imageSmoothingEnabled = false;

    let tick   = 0;
    let truckC = -6;
    let ledX   = 55;
    let ledIdx = 0;
    let raf: number;

    // Stars pre-computed (avoid SSR randomness issues via lazy init)
    const stars = Array.from({ length: 70 }, () => ({
      x: Math.floor(Math.random() * PW),
      y: Math.floor(Math.random() * (PH * 0.40)),
      r: Math.random() > 0.82 ? 2 : 1,
      p: Math.random() * Math.PI * 2,
    }));

    // Windows per building
    const wins = BUILDINGS.map((b) =>
      Array.from({ length: Math.ceil(b.w * b.d * 2.5) }, () => ({
        u: 0.1 + Math.random() * 0.8,
        fy: 5 + Math.random() * (b.h - 12),
        col: Math.random() > 0.5 ? CYAN : "#ffc860",
        on: Math.random() > 0.30,
      }))
    );

    function drawSky() {
      const g = ctx.createLinearGradient(0, 0, 0, PH * 0.50);
      g.addColorStop(0, "#020208");
      g.addColorStop(1, "#07071a");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, PW, PH * 0.50);
    }

    function drawStars() {
      stars.forEach((s) => {
        const a = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(tick * 0.035 + s.p));
        ctx.fillStyle = `rgba(255,255,255,${a.toFixed(2)})`;
        ctx.fillRect(s.x, s.y, s.r, s.r);
      });
    }

    function drawGround() {
      for (let r = 0; r < 17; r++) {
        for (let c = -1; c < 19; c++) {
          let col: string;
          if (r >= 6 && r <= 9)        col = (c + r) % 5 === 0 ? "#151520" : "#111118";
          else if (r === 5 || r === 10) col = "#191922";
          else                          col = "#0d0d14";
          drawTile(ctx, c, r, col);
        }
      }
      // Road center stripe (dashed)
      for (let c = -1; c < 19; c++) {
        if (c % 4 < 3) {
          const o = iso(c, 8);
          ctx.fillStyle = "#252500";
          ctx.fillRect(Math.round(o.x) - 1, Math.round(o.y + TH / 2) - 1, 2, 1);
        }
      }
    }

    function drawBuilding(bi: number, front: boolean) {
      const b = BUILDINGS[bi];
      if (front !== (b.row >= 11)) return;

      const top = b.cyan ? "#181830" : "#131320";
      drawBox(ctx, b.col, b.row, b.w, b.d, b.h, top, "#0c0c1a", "#101022");

      // Windows on visible left face (D-C side)
      const D = iso(b.col,       b.row + b.d);
      const C = iso(b.col + b.w, b.row + b.d);
      wins[bi].forEach((w) => {
        if (!w.on) return;
        const wx = D.x + (C.x - D.x) * w.u;
        const wy = D.y + (C.y - D.y) * w.u - w.fy;
        ctx.fillStyle = w.col === CYAN
          ? "rgba(0,255,229,0.38)"
          : "rgba(255,200,96,0.32)";
        ctx.fillRect(Math.round(wx), Math.round(wy), 2, 2);
      });

      // Cyan roof accent
      if (b.cyan) {
        const Ar = iso(b.col,       b.row);
        const Br = iso(b.col + b.w, b.row);
        ctx.strokeStyle = CYAN;
        ctx.shadowColor  = CYAN;
        ctx.shadowBlur   = 4;
        ctx.lineWidth    = 0.5;
        ctx.beginPath();
        ctx.moveTo(Ar.x, Ar.y - b.h);
        ctx.lineTo(Br.x, Br.y - b.h);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    }

    function drawTruck() {
      const TR = 7;     // road row
      const TL = 4;     // truck length (col dir)
      const TD = 2;     // truck depth  (row dir)
      const BH = 16;    // body height px
      const CH = 20;    // cab height px

      if (truckC < -7 || truckC > 21) return;

      // Cab
      drawBox(ctx, truckC, TR, 1, TD, CH, "#cacad8", "#8888a8", "#aaaacc");
      // Body
      drawBox(ctx, truckC + 1, TR, TL - 1, TD, BH, "#d2d2e0", "#8888a8", "#aaaacc");

      // LED panel — left face (D-C side, faces viewer)
      const D = iso(truckC + 1, TR + TD);
      const C = iso(truckC + TL, TR + TD);

      // Panel BG
      ctx.fillStyle = "#030312";
      ctx.beginPath();
      ctx.moveTo(D.x, D.y - BH);
      ctx.lineTo(C.x, C.y - BH);
      ctx.lineTo(C.x, C.y);
      ctx.lineTo(D.x, D.y);
      ctx.closePath();
      ctx.fill();

      // Neon border
      ctx.strokeStyle = CYAN;
      ctx.shadowColor  = CYAN;
      ctx.shadowBlur   = 5;
      ctx.lineWidth    = 0.5;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Scrolling text (clipped)
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(D.x, D.y - BH);
      ctx.lineTo(C.x, C.y - BH);
      ctx.lineTo(C.x, C.y);
      ctx.lineTo(D.x, D.y);
      ctx.closePath();
      ctx.clip();

      const tx = D.x + (C.x - D.x) * 0.5 + ledX;
      const ty = D.y + (C.y - D.y) * 0.5 - BH / 2 + 2;
      const textColor = tick % 55 < 51 ? CYAN : MAG;
      ctx.font        = "bold 4px monospace";
      ctx.fillStyle   = textColor;
      ctx.shadowColor = textColor;
      ctx.shadowBlur  = 4;
      ctx.fillText(LED_MSGS[ledIdx], tx, ty);
      ctx.shadowBlur = 0;
      ctx.restore();

      // Headlight
      ctx.fillStyle   = "rgba(255,255,180,0.95)";
      ctx.shadowColor = "rgba(255,255,180,1)";
      ctx.shadowBlur  = 6;
      const hd = iso(truckC, TR);
      ctx.fillRect(Math.round(hd.x) - 2, Math.round(hd.y) - 10, 2, 2);
      ctx.shadowBlur = 0;
    }

    function drawDrone(d: typeof DRONES[0]) {
      const base = iso(d.col, d.row);
      const fy   = Math.sin(tick * 0.04 + d.phase) * 4;
      const cx   = Math.round(base.x);
      const cy   = Math.round(base.y - 52 + fy);

      ctx.fillStyle = "#252535";
      ctx.fillRect(cx - 5, cy,     10, 1); // horizontal arm
      ctx.fillRect(cx,     cy - 4,  1, 9); // vertical arm

      // Motor dots
      [ [cx - 5, cy - 1], [cx + 4, cy - 1], [cx - 1, cy - 4], [cx - 1, cy + 4] ]
        .forEach(([mx, my]) => {
          ctx.fillStyle = "#333348";
          ctx.fillRect(mx, my, 2, 2);
        });

      // Blink
      if (Math.sin(tick * 0.18 + d.phase) > 0.2) {
        ctx.fillStyle   = "#ff2200";
        ctx.shadowColor = "#ff4400";
        ctx.shadowBlur  = 3;
        ctx.fillRect(cx, cy, 1, 1);
        ctx.shadowBlur = 0;
      }
    }

    function drawNeonSign() {
      const flicker = tick % 95 > 91 ? 0.65 : 1.0;
      const sx = PW * 0.26;
      const sy = PH * 0.28;

      ctx.save();
      ctx.textAlign    = "center";
      ctx.textBaseline = "middle";
      ctx.font = "bold 13px 'Courier New', monospace";

      ctx.fillStyle   = `rgba(0,255,229,${flicker})`;
      ctx.shadowColor = CYAN;
      ctx.shadowBlur  = 8;
      ctx.fillText("DOOH", sx, sy);

      ctx.fillStyle   = `rgba(255,0,170,${flicker})`;
      ctx.shadowColor = MAG;
      ctx.shadowBlur  = 8;
      ctx.fillText("LOVE", sx, sy + 15);

      ctx.shadowBlur = 0;
      ctx.restore();
    }

    function frame() {
      tick++;
      truckC += 0.06;
      if (truckC > 21) truckC = -6;

      ledX -= 0.6;
      if (ledX < -55) {
        ledX   = 55;
        ledIdx = (ledIdx + 1) % LED_MSGS.length;
      }

      ctx.clearRect(0, 0, PW, PH);

      drawSky();
      drawStars();
      drawGround();

      BUILDINGS.forEach((_, i) => drawBuilding(i, false));
      drawTruck();
      BUILDINGS.forEach((_, i) => drawBuilding(i, true));
      DRONES.forEach(drawDrone);
      drawNeonSign();

      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={ref}
      width={PW}
      height={PH}
      style={{
        width: "100%",
        height: "100%",
        imageRendering: "pixelated",
        display: "block",
      }}
    />
  );
}
