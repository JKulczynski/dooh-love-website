"use client";

export default function HeroSection() {
  return (
    <>
      <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#07070a", position: "relative" }}>

        {/* Header — absolute, floating */}
        <header style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2rem 4rem",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
        }}>
          <div style={{ fontSize: "2rem", fontFamily: "'Archivo Black', sans-serif", letterSpacing: "2px", textTransform: "uppercase" }}>
            <span style={{ color: "#ffffff" }}>DOOH</span>
            <span style={{ color: "#00E5FF" }}>-</span>
            <span style={{ color: "#555555" }}>LOVE</span>
          </div>
          <nav>
            <ul style={{ display: "flex", listStyle: "none", gap: "3rem" }}>
              <li><a href="#" style={{ color: "#ffffff", textDecoration: "none", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", fontFamily: "'Montserrat', sans-serif" }}>HOME</a></li>
              <li><a href="#uslugi" style={{ color: "#888", textDecoration: "none", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", fontFamily: "'Montserrat', sans-serif" }}>SERVICES</a></li>
              <li><a href="#case-studies" style={{ color: "#888", textDecoration: "none", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", fontFamily: "'Montserrat', sans-serif" }}>CASE STUDIES</a></li>
              <li><a href="#kontakt" style={{ color: "#888", textDecoration: "none", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", fontFamily: "'Montserrat', sans-serif" }}>CONTACT</a></li>
            </ul>
          </nav>
        </header>

        {/* Hero */}
        <section style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>

          {/* Ghost text — monumentalna typografia */}
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "110vw",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            zIndex: 1,
            pointerEvents: "none",
          }}>
            <span style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "26vw",
              lineHeight: 0.72,
              letterSpacing: "-1vw",
              color: "transparent",
              textTransform: "uppercase",
              WebkitTextStroke: "2px rgba(0, 229, 255, 0.4)",
            }}>DIGITAL</span>
            <span style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "26vw",
              lineHeight: 0.72,
              letterSpacing: "-1vw",
              color: "transparent",
              textTransform: "uppercase",
              WebkitTextStroke: "2px rgba(255, 0, 229, 0.3)",
            }}>URBAN</span>
            <span style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "26vw",
              lineHeight: 0.72,
              letterSpacing: "-1vw",
              color: "transparent",
              textTransform: "uppercase",
              WebkitTextStroke: "2px rgba(255, 255, 255, 0.15)",
            }}>ATTENTION</span>
          </div>

          {/* Copy + CTA — bottom left */}
          <div style={{
            position: "absolute",
            bottom: "10%",
            left: 0,
            width: "100%",
            padding: "0 4rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            zIndex: 10,
          }}>
            <div style={{ width: "35%", marginBottom: "2rem", position: "relative", zIndex: 20 }}>
              <p style={{
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "#b0b0b0",
                marginBottom: "2.5rem",
                letterSpacing: "1px",
                fontWeight: 400,
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
                  color: "#000",
                  padding: "1.2rem 3rem",
                  fontSize: "1rem",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  display: "inline-block",
                  textDecoration: "none",
                  boxShadow: "0 0 30px rgba(0, 229, 255, 0.4)",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                EXPLORE SOLUTIONS
              </a>
            </div>
          </div>

          {/* Truck — gigantyczne, wychodzi poza kadr */}
          <div style={{
            position: "absolute",
            right: "-5%",
            bottom: "-5%",
            width: "65vw",
            zIndex: 15,
            pointerEvents: "none",
          }}>
            <img
              src="/truck2.png"
              alt="Digital Billboard Van"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                filter: "drop-shadow(-20px 20px 50px rgba(0,0,0,0.8))",
              }}
            />
          </div>

        </section>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Montserrat:wght@400;700;900&display=swap');
      `}</style>
    </>
  );
}
