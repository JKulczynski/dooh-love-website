"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end pt-16 pb-16 overflow-hidden">

      {/* Gemini render jako tło */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-[-5%]"
          style={{
            backgroundImage: "url('/hero-bg-right2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: "kenBurns 18s ease-in-out infinite alternate",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* Scan lines */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(0,0,0,0.13) 3px, rgba(0,0,0,0.13) 4px)",
        animation: "scanLines 8s linear infinite",
      }} />

      {/* Glow pulse:cyan left */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{
        background: "radial-gradient(ellipse 60% 80% at 15% 50%, rgba(0,255,229,0.08) 0%, transparent 70%)",
        animation: "glowPulse 4s ease-in-out infinite",
      }} />

      {/* Glow pulse:magenta right */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{
        background: "radial-gradient(ellipse 50% 70% at 80% 55%, rgba(255,0,170,0.07) 0%, transparent 70%)",
        animation: "glowPulse 4s ease-in-out infinite 2s",
      }} />

      {/* Gradient top:przykrywa baked-in nav */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-20" style={{
        height: "22%",
        background: "linear-gradient(to bottom, rgba(5,5,5,1) 0%, rgba(5,5,5,0.9) 55%, transparent 100%)",
      }} />

      {/* Gradient bottom:cienki, tylko pod przycisk */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-20" style={{
        height: "18%",
        background: "linear-gradient(to top, rgba(5,5,5,0.85) 0%, transparent 100%)",
      }} />

      {/* LED flicker:delikatne migotanie ekranu trucka */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{
        animation: "ledFlicker 6s linear infinite",
      }} />

      {/* CTA only:truck speaks for itself */}
      <div className="relative z-30 w-full flex justify-center">
        <a
          href="#wycena"
          className="inline-block bg-brandCyan text-black font-bold py-4 px-10 uppercase tracking-widest hover:bg-white transition-colors duration-300"
          style={{ boxShadow: "0 0 24px rgba(0,255,229,0.35)" }}
        >
          Zarezerwuj w 48h
        </a>
      </div>

      <style>{`
        @keyframes kenBurns {
          from { transform: scale(1); }
          to   { transform: scale(1.06); }
        }
        @keyframes scanLines {
          from { background-position: 0 0; }
          to   { background-position: 0 100px; }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 1; }
        }
        @keyframes ledFlicker {
          0%, 17%, 19%, 21%, 52%, 56%, 100% { opacity: 0; }
          18%  { opacity: 0.04; }
          20%  { opacity: 0.02; }
          53%  { opacity: 0.05; }
          54%  { opacity: 0.01; }
          55%  { opacity: 0.04; }
        }
      `}</style>
    </section>
  );
}
