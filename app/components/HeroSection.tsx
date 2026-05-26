"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-end pb-20 overflow-hidden">

      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
          <track kind="captions" srcLang="pl" label="Polski" default />
        </video>
        {/* Fallback: static image if video fails */}
        <div
          className="absolute inset-0 hero-bg -z-10"
          style={{
            backgroundImage: "url('/hero-pixel.jpg')",
            backgroundSize: "cover",
          }}
        />
        {/* Gradient: bottom fade to black */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
        {/* Gradient: top fade to black (nav area) */}
        <div className="absolute top-0 left-0 right-0" style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(2,2,8,1) 0%, rgba(2,2,8,0.7) 50%, transparent 100%)",
        }} />
      </div>

      {/* Scan lines */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(0,0,0,0.10) 3px, rgba(0,0,0,0.10) 4px)",
        animation: "scanLines 10s linear infinite",
      }} />

      {/* Cyan glow pulse */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{
        background: "radial-gradient(ellipse 55% 70% at 20% 55%, rgba(0,255,229,0.07) 0%, transparent 70%)",
        animation: "glowPulse 5s ease-in-out infinite",
      }} />

      {/* Magenta glow pulse */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{
        background: "radial-gradient(ellipse 45% 60% at 75% 60%, rgba(255,0,170,0.06) 0%, transparent 70%)",
        animation: "glowPulse 5s ease-in-out infinite 2.5s",
      }} />

      {/* Content */}
      <div className="relative z-30 w-full flex flex-col items-center gap-6 px-6">
        {/* Tagline */}
        <p className="text-xs uppercase tracking-[0.3em] text-brandCyan font-light"
          style={{ textShadow: "0 0 12px #00FFE5" }}>
          Mobilna Reklama LED · Warszawa
        </p>

        {/* CTA */}
        <a
          href="#wycena"
          className="inline-block bg-brandCyan text-black font-bold py-4 px-10 uppercase tracking-widest hover:bg-white transition-colors duration-300 text-sm rounded-lg w-full max-w-xs sm:w-auto text-center"
          style={{ boxShadow: "0 0 24px rgba(0,255,229,0.4), 0 0 60px rgba(0,255,229,0.15)" }}
        >
          Zarezerwuj w 48h
        </a>
      </div>

      <style>{`
        @keyframes scanLines {
          from { background-position: 0 0; }
          to   { background-position: 0 100px; }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
