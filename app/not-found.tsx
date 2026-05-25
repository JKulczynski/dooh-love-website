import NavBar from "./components/NavBar";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-darkBg text-white min-h-screen overflow-x-hidden">
      <NavBar />
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div
          className="text-[120px] md:text-[200px] font-bold leading-none select-none"
          style={{
            color: "transparent",
            WebkitTextStroke: "2px #00FFE5",
            textShadow: "0 0 60px rgba(0,255,229,0.15)",
          }}
        >
          404
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-brandCyan mb-4 -mt-4">
          Strona nie istnieje
        </p>
        <h1 className="text-2xl md:text-3xl font-bold uppercase mb-4">
          Ten ekran pojechał inną trasą.
        </h1>
        <p className="text-gray-400 text-sm max-w-sm mb-10">
          Strona, której szukasz, nie istnieje lub została przeniesiona.
          Wróć na stronę główną i znajdź to, czego potrzebujesz.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-brandCyan text-black font-bold py-4 px-8 rounded-lg uppercase tracking-widest hover:bg-white transition-colors text-sm"
        >
          Wróć na stronę główną
        </Link>
      </section>
    </main>
  );
}
