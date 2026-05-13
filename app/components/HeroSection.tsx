"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">

      {/* Gemini render jako tło */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-[-5%]"
          style={{
            backgroundImage: "url('/hero-bg-right.png')",
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

      {/* Glow pulse — cyan left */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{
        background: "radial-gradient(ellipse 60% 80% at 15% 50%, rgba(0,255,229,0.08) 0%, transparent 70%)",
        animation: "glowPulse 4s ease-in-out infinite",
      }} />

      {/* Glow pulse — magenta right */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{
        background: "radial-gradient(ellipse 50% 70% at 80% 55%, rgba(255,0,170,0.07) 0%, transparent 70%)",
        animation: "glowPulse 4s ease-in-out infinite 2s",
      }} />

      {/* Gradient top — przykrywa baked-in nav */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-20" style={{
        height: "22%",
        background: "linear-gradient(to bottom, rgba(5,5,5,1) 0%, rgba(5,5,5,0.9) 55%, transparent 100%)",
      }} />

      {/* Gradient bottom — przykrywa baked-in tagline/CTA */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-20" style={{
        height: "38%",
        background: "linear-gradient(to top, rgba(5,5,5,1) 0%, rgba(5,5,5,0.95) 45%, transparent 100%)",
      }} />

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter uppercase mb-6">
            <span className="text-brandCyan">WE</span> <span className="text-brandMagenta">LOVE</span><br />
            ATTENTION.
          </h1>
          <div className="space-y-4 mb-10 max-w-md">
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed uppercase tracking-widest">
              Mobile digital out-of-home advertising solutions for the urban frontier.
            </p>
            <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed uppercase tracking-widest">
              Maximize visibility. Captivate audiences.
            </p>
          </div>
          <a
            href="#solutions"
            className="inline-block bg-brandCyan text-black font-bold py-4 px-8 uppercase tracking-widest hover:bg-white transition-colors duration-300"
            style={{ boxShadow: "0 0 20px rgba(0,255,229,0.3)" }}
          >
            Explore Solutions
          </a>
        </div>
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
      `}</style>
    </section>
  );
}
