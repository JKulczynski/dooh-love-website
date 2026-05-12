"use client";

export default function HeroSection() {
  return (
    <section style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>

      {/* Gemini render jako tło — Ken Burns bardzo subtelny */}
      <div style={{ position: "absolute", inset: 0 }}>
        <div style={{
          position: "absolute",
          inset: "-5%",
          backgroundImage: "url('/hero-bg-right.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "kenBurns 18s ease-in-out infinite alternate",
        }} />
      </div>

      {/* Scan lines */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(0,0,0,0.13) 3px, rgba(0,0,0,0.13) 4px)",
        animation: "scanLines 8s linear infinite",
        pointerEvents: "none",
        zIndex: 10,
      }} />

      {/* Glow pulse — cyan left */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 60% 80% at 15% 50%, rgba(0,229,255,0.09) 0%, transparent 70%)",
        animation: "glowPulse 4s ease-in-out infinite",
        pointerEvents: "none",
        zIndex: 10,
      }} />

      {/* Glow pulse — magenta right */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 50% 70% at 80% 55%, rgba(255,0,229,0.07) 0%, transparent 70%)",
        animation: "glowPulse 4s ease-in-out infinite 2s",
        pointerEvents: "none",
        zIndex: 10,
      }} />

      {/* Gradient top — przykrywa baked-in nav/logo */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "22%",
        background: "linear-gradient(to bottom, rgba(7,7,10,1) 0%, rgba(7,7,10,0.92) 55%, transparent 100%)",
        pointerEvents: "none",
        zIndex: 20,
      }} />

      {/* Gradient bottom — przykrywa baked-in tagline/CTA */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0,
        height: "38%",
        background: "linear-gradient(to top, rgba(7,7,10,1) 0%, rgba(7,7,10,0.95) 45%, transparent 100%)",
        pointerEvents: "none",
        zIndex: 20,
      }} />

      {/* HTML Nav */}
      <nav style={{
        position: "relative",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "2rem 4rem",
      }}>
        <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "2rem", letterSpacing: "2px", textTransform: "uppercase" }}>
          <span style={{ color: "#ffffff" }}>DOOH</span>
          <span style={{ color: "#00E5FF" }}>-</span>
          <span style={{ color: "#555555" }}>LOVE</span>
        </div>
        <div style={{ display: "flex", gap: "3rem" }}>
          {["HOME", "SERVICES", "CASE STUDIES", "CONTACT"].map((item, i) => (
            <a key={item} href={["#", "#uslugi", "#case-studies", "#kontakt"][i]} style={{
              color: i === 0 ? "#ffffff" : "#888888",
              textDecoration: "none",
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontFamily: "'Montserrat', sans-serif",
            }}>{item}</a>
          ))}
        </div>
      </nav>

      {/* HTML CTA bottom */}
      <div style={{
        position: "relative",
        zIndex: 50,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 4rem 4rem",
      }}>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", lineHeight: 1.7, marginBottom: "0.4rem", maxWidth: "380px", fontFamily: "'Montserrat', sans-serif" }}>
          Mobile digital out-of-home advertising<br />
          solutions for the urban frontier.
        </p>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "2rem", fontFamily: "'Montserrat', sans-serif" }}>
          Maximize visibility. Captivate audiences.
        </p>
        <a href="#kontakt" style={{
          display: "inline-block",
          background: "#00E5FF",
          color: "#000000",
          padding: "1.2rem 3rem",
          fontSize: "0.9rem",
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "2px",
          textDecoration: "none",
          boxShadow: "0 0 30px rgba(0, 229, 255, 0.4)",
          fontFamily: "'Montserrat', sans-serif",
          width: "fit-content",
        }}>
          EXPLORE SOLUTIONS
        </a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Montserrat:wght@400;700;900&display=swap');
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
