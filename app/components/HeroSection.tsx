"use client";

export default function HeroSection() {
  return (
    <>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2rem 5%",
        position: "relative",
        zIndex: 10,
        background: "#07070a",
      }}>
        <div style={{ fontSize: "1.8rem", fontWeight: 900, letterSpacing: "1px", textTransform: "uppercase", color: "#fff", fontFamily: "'Montserrat', sans-serif" }}>
          DOOH<span style={{ color: "#00E5FF" }}>-</span>LOVE
        </div>
        <nav>
          <ul style={{ display: "flex", listStyle: "none", gap: "2.5rem" }}>
            <li><a href="#" style={{ color: "#ffffff", textDecoration: "none", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", fontFamily: "'Montserrat', sans-serif" }}>HOME</a></li>
            <li><a href="#uslugi" style={{ color: "#888888", textDecoration: "none", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", fontFamily: "'Montserrat', sans-serif" }}>SERVICES</a></li>
            <li><a href="#case-studies" style={{ color: "#888888", textDecoration: "none", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", fontFamily: "'Montserrat', sans-serif" }}>CASE STUDIES</a></li>
            <li><a href="#kontakt" style={{ color: "#888888", textDecoration: "none", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", fontFamily: "'Montserrat', sans-serif" }}>CONTACT</a></li>
          </ul>
        </nav>
      </header>

      <section style={{
        position: "relative",
        minHeight: "88vh",
        display: "flex",
        alignItems: "flex-end",
        padding: "0 5% 5% 5%",
        overflow: "hidden",
        background: "#07070a",
      }}>

        {/* Warstwa 1: Ghost text tło */}
        <div style={{
          position: "absolute",
          top: "5%",
          left: "-5%",
          width: "110%",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          lineHeight: 0.85,
          pointerEvents: "none",
          textAlign: "center",
        }}>
          <span style={{
            fontSize: "18vw",
            fontWeight: 900,
            color: "transparent",
            textTransform: "uppercase",
            letterSpacing: "-2px",
            WebkitTextStroke: "2px rgba(0, 229, 255, 0.4)",
            fontFamily: "'Montserrat', sans-serif",
          }}>DIGITAL</span>
          <span style={{
            fontSize: "18vw",
            fontWeight: 900,
            color: "transparent",
            textTransform: "uppercase",
            letterSpacing: "-2px",
            WebkitTextStroke: "2px rgba(255, 0, 229, 0.4)",
            fontFamily: "'Montserrat', sans-serif",
          }}>URBAN</span>
          <span style={{
            fontSize: "18vw",
            fontWeight: 900,
            color: "transparent",
            textTransform: "uppercase",
            letterSpacing: "-2px",
            WebkitTextStroke: "2px rgba(255, 255, 255, 0.2)",
            fontFamily: "'Montserrat', sans-serif",
          }}>ATTENTION</span>
        </div>

        {/* Hero content */}
        <div style={{
          position: "relative",
          zIndex: 5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "100%",
          maxWidth: "1600px",
          margin: "0 auto",
        }}>

          {/* Tekst + CTA po lewej */}
          <div style={{ maxWidth: "420px", marginBottom: "2rem" }}>
            <p style={{
              fontSize: "0.9rem",
              lineHeight: 1.6,
              color: "#a0a0a0",
              marginBottom: "2rem",
              letterSpacing: "1px",
              fontFamily: "'Montserrat', sans-serif",
            }}>
              MOBILE DIGITAL OUT-OF-HOME ADVERTISING<br />
              SOLUTIONS FOR THE URBAN FRONTIER.<br />
              MAXIMIZE VISIBILITY. CAPTIVATE AUDIENCES.
            </p>
            <a
              href="#kontakt"
              style={{
                background: "#00E5FF",
                color: "#000000",
                padding: "1.2rem 2.5rem",
                fontSize: "0.9rem",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                display: "inline-block",
                textDecoration: "none",
                boxShadow: "0 0 25px rgba(0, 229, 255, 0.3)",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              EXPLORE SOLUTIONS
            </a>
          </div>

          {/* Truck */}
          <div className="truck-reflect" style={{
            position: "absolute",
            right: 0,
            bottom: "-5%",
            width: "65%",
            zIndex: 4,
          }}>
            <img
              src="/hero-truck.png"
              alt="Digital Billboard Van"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                filter: "drop-shadow(0 0 30px rgba(255, 0, 229, 0.2)) drop-shadow(0 0 60px rgba(0, 229, 255, 0.1))",
              }}
            />
            {/* LED screen overlay */}
            <img
              src="/hero-screen.png"
              alt=""
              style={{
                position: "absolute",
                left: "7%",
                top: "18%",
                width: "50%",
                height: "54%",
                objectFit: "fill",
                mixBlendMode: "screen",
              }}
            />
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');

        .truck-reflect {
          -webkit-box-reflect: below -20px linear-gradient(transparent, transparent, rgba(0,0,0,0.45));
        }
      `}</style>
    </>
  );
}
