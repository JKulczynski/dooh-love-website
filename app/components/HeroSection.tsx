"use client";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex flex-col"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay top — żeby nav był czytelny */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)" }}
      />

      {/* Dark overlay bottom — żeby tekst był czytelny */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }}
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

      {/* Bottom content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-8 pb-12">
        <div className="max-w-md">
          <p className="text-white/60 text-sm uppercase tracking-widest leading-relaxed mb-6">
            Mobile Digital Out-of-Home Advertising<br />
            Solutions for the Urban Frontier.<br />
            Maximize Visibility. Captivate Audiences.
          </p>
          <a
            href="#kontakt"
            className="inline-block px-8 py-4 font-black text-sm uppercase tracking-widest transition-all hover:brightness-110"
            style={{ background: "#00FFE5", color: "#0a0a0a" }}
          >
            Explore Solutions
          </a>
        </div>
      </div>

      {/* Star decoration bottom right */}
      <div className="absolute bottom-8 right-8 z-10">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" opacity="0.6">
          <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5Z" />
        </svg>
      </div>
    </section>
  );
}
