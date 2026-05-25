export default function PreviewPage() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-end pb-20 overflow-hidden">

      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-b.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
        <div className="absolute top-0 left-0 right-0" style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(2,2,8,1) 0%, rgba(2,2,8,0.7) 50%, transparent 100%)",
        }} />
      </div>

      <div className="absolute inset-0 pointer-events-none z-10" style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(0,0,0,0.10) 3px, rgba(0,0,0,0.10) 4px)",
      }} />

      <div className="relative z-30 w-full flex flex-col items-center gap-6 px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-brandCyan font-light"
          style={{ textShadow: "0 0 12px #00FFE5" }}>
          Mobilna Reklama LED · Warszawa
        </p>
        <a
          href="/"
          className="inline-block bg-brandCyan text-black font-bold py-4 px-10 uppercase tracking-widest hover:bg-white transition-colors duration-300 text-sm rounded-lg w-full max-w-xs sm:w-auto text-center"
          style={{ boxShadow: "0 0 24px rgba(0,255,229,0.4), 0 0 60px rgba(0,255,229,0.15)" }}
        >
          Zarezerwuj w 48h
        </a>
      </div>

    </section>
  );
}
