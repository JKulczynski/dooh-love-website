"use client";

export default function StickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-brandCyan text-black flex items-center justify-between px-6 py-3 md:py-2">
      <span className="text-xs font-bold uppercase tracking-widest hidden sm:block">
        Mobile LED · Warszawa · od 3 500 PLN / dzień
      </span>
      <span className="text-xs font-bold uppercase tracking-widest sm:hidden">
        od 3 500 PLN / dzień
      </span>
      <a
        href="#wycena"
        className="bg-black text-brandCyan font-bold text-xs uppercase tracking-widest py-2 px-5 hover:bg-white hover:text-black transition-colors"
      >
        Sprawdź cenę
      </a>
    </div>
  );
}
