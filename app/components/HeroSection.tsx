"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0a0a0a] flex flex-col">

      {/* Navbar */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6">
        <span className="text-white font-black text-xl uppercase tracking-widest">
          DOOH<span style={{ color: "#00FFE5" }}>—</span>LOVE
        </span>
        <div className="hidden md:flex items-center gap-8 text-white/50 text-sm uppercase tracking-widest">
          <a href="#jak-to-dziala" className="hover:text-white transition-colors">Jak to działa</a>
          <a href="#trasy" className="hover:text-white transition-colors">Trasy</a>
          <a href="#dla-kogo" className="hover:text-white transition-colors">Dla kogo</a>
          <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
        </div>
        <a
          href="#kontakt"
          className="px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all"
          style={{ background: "#00FFE5", color: "#0a0a0a" }}
        >
          Sprawdź cenę
        </a>
      </nav>

      {/* Hero content */}
      <div className="relative flex-1 flex items-center">

        {/* Ghost text — fills entire background */}
        <div
          aria-hidden
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none"
        >
          <span
            className="block font-black uppercase leading-[0.85] text-center"
            style={{
              fontSize: "clamp(6rem, 22vw, 22vw)",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.08)",
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
            }}
          >
            WE LOVE
          </span>
          <span
            className="block font-black uppercase leading-[0.85] text-center"
            style={{
              fontSize: "clamp(6rem, 22vw, 22vw)",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(0,255,229,0.07)",
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
            }}
          >
            ATTENTION
          </span>
        </div>

        {/* Truck — centered, large, on top of ghost text */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center px-4">
          <TruckHero />
        </div>

        {/* Bottom overlay — copy */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between px-8 pb-10">
          {/* Left */}
          <div className="max-w-xs">
            <p className="text-white/40 text-sm leading-relaxed">
              Twoja reklama jedzie przez miasto.<br />
              Ekrany LED. Pełna wyłączność trasy.
            </p>
            <a
              href="#jak-to-dziala"
              className="inline-block mt-4 text-sm uppercase tracking-widest text-white/50 hover:text-white transition-colors border-b border-white/20 pb-1"
            >
              Jak to działa →
            </a>
          </div>

          {/* Right */}
          <div className="text-right max-w-sm">
            <p
              className="font-black uppercase leading-tight"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              WARSZAWA WIDZI CIĘ<br />
              <span style={{ color: "#00FFE5" }}>KAŻDEGO DNIA.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TruckHero() {
  return (
    <div
      className="relative w-full"
      style={{ maxWidth: "900px", aspectRatio: "2.8/1" }}
    >
      {/* Truck cab */}
      <div
        className="absolute"
        style={{
          left: "0%",
          top: "5%",
          width: "24%",
          height: "80%",
          background: "linear-gradient(135deg, #1a1a1a 0%, #111 100%)",
          borderRadius: "4px 0 0 0",
        }}
      >
        {/* Windshield */}
        <div
          className="absolute"
          style={{
            top: "12%",
            right: "8%",
            width: "52%",
            height: "38%",
            background: "rgba(0,255,229,0.05)",
            border: "1px solid rgba(0,255,229,0.15)",
            borderRadius: "2px",
          }}
        />
        {/* Front grill */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "20%",
            background: "#111",
            borderTop: "1px solid #222",
          }}
        />
        {/* Headlight */}
        <div
          className="absolute"
          style={{
            top: "55%",
            right: "5%",
            width: "15%",
            height: "12%",
            background: "rgba(0,255,229,0.6)",
            boxShadow: "0 0 15px rgba(0,255,229,0.8), 0 0 30px rgba(0,255,229,0.4)",
            borderRadius: "1px",
          }}
        />
      </div>

      {/* Main LED screen body */}
      <div
        className="absolute flex items-center justify-center overflow-hidden"
        style={{
          left: "23%",
          top: "0%",
          width: "70%",
          height: "88%",
          background: "#080808",
          border: "2px solid rgba(0,255,229,0.3)",
          boxShadow: "0 0 60px rgba(0,255,229,0.2), 0 0 120px rgba(0,255,229,0.08), inset 0 0 80px rgba(0,0,0,0.9)",
        }}
      >
        {/* Pixel grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, #00FFE5 0px, transparent 1px, transparent 10px),
              repeating-linear-gradient(90deg, #00FFE5 0px, transparent 1px, transparent 10px)`,
          }}
        />

        {/* Scan lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            background: "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(255,255,255,0.5) 3px, rgba(255,255,255,0.5) 4px)",
          }}
        />

        {/* Screen content */}
        <div className="relative z-10 text-center px-8">
          <p
            className="font-black uppercase leading-none"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 4rem)",
              color: "#00FFE5",
              textShadow: "0 0 30px #00FFE5, 0 0 60px rgba(0,255,229,0.5)",
              letterSpacing: "0.05em",
            }}
          >
            WE LOVE
          </p>
          <p
            className="font-black uppercase leading-none mt-1"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 4rem)",
              color: "#ffffff",
              textShadow: "0 0 20px rgba(255,255,255,0.4)",
              letterSpacing: "0.05em",
            }}
          >
            ATTENTION.
          </p>
        </div>

        {/* Corner accents */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: "#00FFE5" }} />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: "#00FFE5" }} />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: "#00FFE5" }} />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: "#00FFE5" }} />
      </div>

      {/* Rear panel */}
      <div
        className="absolute"
        style={{
          right: "0%",
          top: "15%",
          width: "8%",
          height: "60%",
          background: "#0d0d0d",
          border: "1px solid rgba(0,255,229,0.15)",
          boxShadow: "0 0 20px rgba(0,255,229,0.1)",
        }}
      />

      {/* Front wheel */}
      <div
        className="absolute"
        style={{
          left: "8%",
          bottom: "-8%",
          width: "10%",
          aspectRatio: "1/1",
          borderRadius: "50%",
          background: "radial-gradient(circle, #2a2a2a 30%, #111 70%)",
          border: "3px solid #2a2a2a",
          boxShadow: "0 4px 20px rgba(0,0,0,0.8)",
        }}
      />

      {/* Rear wheel */}
      <div
        className="absolute"
        style={{
          right: "10%",
          bottom: "-8%",
          width: "10%",
          aspectRatio: "1/1",
          borderRadius: "50%",
          background: "radial-gradient(circle, #2a2a2a 30%, #111 70%)",
          border: "3px solid #2a2a2a",
          boxShadow: "0 4px 20px rgba(0,0,0,0.8)",
        }}
      />

      {/* Ground glow */}
      <div
        className="absolute"
        style={{
          bottom: "-20%",
          left: "10%",
          right: "10%",
          height: "30px",
          background: "radial-gradient(ellipse, rgba(0,255,229,0.15) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
    </div>
  );
}
