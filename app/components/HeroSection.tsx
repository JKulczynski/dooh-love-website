"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col">

      {/* Layer 1: Truck + city background — Ken Burns zoom */}
      <div
        className="absolute inset-0"
        style={{ animation: "kenBurns 15s ease-in-out infinite alternate" }}
      >
        <div
          className="absolute inset-[-5%]"
          style={{
            backgroundImage: "url('/truck.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Layer 2: Ghost text PNG — transparent overlay */}
      <img
        src="/hero-ghost.png"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10"
        style={{ opacity: 0.85 }}
        alt=""
      />

      {/* Scan lines */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(0,0,0,0.12) 3px, rgba(0,0,0,0.12) 4px)",
          animation: "scanLines 8s linear infinite",
        }}
      />

      {/* Glow pulse — cyan left */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "radial-gradient(ellipse 60% 80% at 15% 50%, rgba(0,255,229,0.08) 0%, transparent 70%)",
          animation: "glowPulse 4s ease-in-out infinite",
        }}
      />

      {/* Glow pulse — magenta right */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "radial-gradient(ellipse 50% 70% at 80% 55%, rgba(255,0,170,0.07) 0%, transparent 70%)",
          animation: "glowPulse 4s ease-in-out infinite 2s",
        }}
      />

      {/* Layer 3: LED screen text — positioned on truck panel */}
      <img
        src="/hero-screen.png"
        className="absolute pointer-events-none z-20"
        style={{
          left: "28%",
          top: "15%",
          width: "32%",
          height: "50%",
          objectFit: "fill",
        }}
        alt=""
      />

      {/* Dark gradient top */}
      <div
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none z-30"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, transparent 100%)" }}
      />

      {/* Dark gradient bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-30"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.93) 0%, transparent 100%)" }}
      />

      {/* Navbar */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6">
        <span className="text-white font-black text-2xl uppercase tracking-wider">
          DOOH<span style={{ color: "#00FFE5" }}>-</span>LOVE
        </span>
        <div className="hidden md:flex items-center gap-10 text-white/70 text-sm uppercase tracking-widest">
          <a href="#" className="text-white border-b border-white pb-0.5">Home</a>
          <a href="#uslugi" className="hover:text-white transition-colors">Services</a>
          <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
          <a href="#kontakt" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Bottom — tagline + CTA */}
      <div className="relative z-50 flex-1 flex flex-col justify-end px-8 pb-12">
        <p className="text-white/70 text-xs uppercase tracking-widest leading-relaxed mb-1 max-w-sm">
          Mobile digital out-of-home advertising<br />
          solutions for the urban frontier.
        </p>
        <p className="text-white/45 text-xs uppercase tracking-widest mb-5 max-w-sm">
          Maximize visibility. Captivate audiences.
        </p>
        <div>
          <a
            href="#kontakt"
            className="inline-block px-8 py-4 font-black text-sm uppercase tracking-widest transition-all hover:brightness-110"
            style={{ background: "#00FFE5", color: "#0a0a0a" }}
          >
            Explore Solutions
          </a>
        </div>
      </div>

      {/* Star */}
      <div className="absolute bottom-8 right-8 z-50">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" opacity="0.4">
          <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5Z" />
        </svg>
      </div>

      <style>{`
        @keyframes kenBurns {
          from { transform: scale(1); }
          to   { transform: scale(1.08); }
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
