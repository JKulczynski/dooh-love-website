import NavBar from "../components/NavBar";
import RevealOnScroll from "../components/RevealOnScroll";
import TrailMapWrapper from "../components/TrailMapWrapper";

const TRASY = [
  {
    id: "T1",
    name: "CENTRUM IMPACT",
    color: "#00FFE5",
    accent: "brandCyan" as const,
    desc: "Ścisłe centrum Warszawy. Trasa przez najruchliwsze węzły komunikacyjne i handlowe. Idealna pod kampanie masowe, premiery i duże brandy.",
    tags: ["Śródmieście", "Nowy Świat", "Krakowskie Przedmieście", "Centrum"],
    stops: [
      { pos: [52.2302, 20.9828] as [number, number], label: "Start — Wola" },
      { pos: [52.2320, 20.9935] as [number, number], label: "Al. Solidarności" },
      { pos: [52.2279, 21.0017] as [number, number], label: "Centrum" },
      { pos: [52.2233, 21.0045] as [number, number], label: "Południowe Centrum" },
      { pos: [52.2318, 21.0042] as [number, number], label: "Pl. Zbawiciela" },
      { pos: [52.2400, 21.0275] as [number, number], label: "Meta — Praga" },
    ],
  },
  {
    id: "T2",
    name: "NIGHTLIFE",
    color: "#FF2D9B",
    accent: "brandMagenta" as const,
    desc: "Trasa skrojona pod wieczorne i nocne kampanie. Przebiega przez kluby, restauracje i bary. Maksymalna ekspozycja od 18:00 do 2:00.",
    tags: ["Żoliborz", "Muranów", "Powiśle", "Mokotów"],
    stops: [
      { pos: [52.2295, 21.0118] as [number, number], label: "Start — Centrum" },
      { pos: [52.2275, 21.0059] as [number, number], label: "Powiśle" },
      { pos: [52.2319, 20.9989] as [number, number], label: "Stare Miasto" },
      { pos: [52.2357, 20.9973] as [number, number], label: "Żoliborz" },
      { pos: [52.2387, 20.9962] as [number, number], label: "Muranów" },
      { pos: [52.2456, 20.9905] as [number, number], label: "Meta — Bielany" },
    ],
  },
  {
    id: "T3",
    name: "BUSINESS FLOW",
    color: "#FFB020",
    accent: "brandAmber" as const,
    desc: "Trasa przez dzielnice biznesowe i korporacyjne. Docieramy do decydentów i managerów w miejscach, gdzie zapadają decyzje zakupowe.",
    tags: ["Mokotów", "Ursynów", "Wola", "Służewiec"],
    stops: [
      { pos: [52.2201, 21.0181] as [number, number], label: "Start — Służewiec" },
      { pos: [52.2227, 21.0137] as [number, number], label: "Mokotów Business" },
      { pos: [52.2297, 21.0123] as [number, number], label: "Centrum Mokotowa" },
      { pos: [52.2313, 21.0110] as [number, number], label: "Al. Niepodległości" },
      { pos: [52.2358, 21.0135] as [number, number], label: "Pole Mokotowskie" },
      { pos: [52.2371, 21.0203] as [number, number], label: "Pl. Unii Lubelskiej" },
      { pos: [52.2411, 21.0271] as [number, number], label: "Meta — Śródmieście" },
    ],
  },
];

export const metadata = {
  title: "Nasze trasy – DOOH-LOVE",
  description: "Trzy trasy mobilnej reklamy LED w Warszawie. Wykup czas abonamentowo lub zarezerwuj pojedynczą kampanię.",
};

export default function TrasyPage() {
  return (
    <main className="bg-darkBg text-white overflow-x-hidden pb-20">
      <NavBar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-black border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <p className="text-xs uppercase tracking-[0.3em] text-brandCyan mb-4">3 trasy</p>
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
              Nasze <span className="text-brandCyan">trasy</span>
            </h1>
            <div className="w-20 h-1 bg-brandMagenta mb-8" />
            <p className="text-muted400 text-base leading-relaxed max-w-2xl">
              Wykup czas na naszych trasach w formie abonamentu miesięcznego lub zarezerwuj pojedynczą kampanię.
              18m² ekranu LED, do 15 godzin dziennie, w samym centrum wydarzeń.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Abonament banner */}
      <section className="py-10 px-6 bg-brandCyan/5 border-b border-brandCyan/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brandCyan mb-2">Abonament miesięczny</p>
            <h2 className="text-xl font-bold uppercase tracking-tight">
              Zarezerwuj stały slot na wybranej trasie
            </h2>
            <p className="text-muted400 text-sm mt-2 max-w-xl">
              Stała obecność marki przez cały miesiąc w wybranej strefie Warszawy.
              Zapytaj o szczegóły i dostępność terminów.
            </p>
          </div>
          <a
            href="https://wa.me/48668046599?text=Interesuje%20mnie%20abonament%20miesi%C4%99czny%20na%20trasie%20DOOH-LOVE"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-3 bg-brandCyan text-black font-bold py-3 px-7 rounded-lg uppercase tracking-widest hover:bg-white transition-colors text-sm"
          >
            Zapytaj o abonament
          </a>
        </div>
      </section>

      {/* Cennik */}
      <section className="py-16 px-6 bg-black border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <p className="text-xs uppercase tracking-[0.3em] text-brandCyan mb-4">Pakiety</p>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-10">
              Wybierz zasięg <span className="text-brandCyan">kampanii</span>
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "START",
                price: "od 10 000 zł",
                unit: "/ tydzień",
                features: ["Spot do 15 sekund", "ok. 1 godziny emisji dziennie", "ok. 5 godzin emisji tygodniowo"],
                accent: "#00FFE5",
              },
              {
                name: "BUSINESS",
                price: "od 50 000 zł",
                unit: "/ miesiąc",
                features: ["Spot do 15 sekund", "ok. 20 godzin emisji miesięcznie", "stała obecność na trasie"],
                accent: "#FF2D9B",
              },
              {
                name: "FLAGSHIP",
                price: "od 100 000 zł",
                unit: "/ 3 miesiące",
                features: ["Spot do 15 sekund", "ok. 60 godzin emisji", "długoterminowa obecność marki", "najlepszy koszt pojedynczej emisji"],
                accent: "#FFB020",
              },
            ].map((pkg, i) => (
              <RevealOnScroll key={pkg.name} delay={i * 100}>
                <div className="h-full border border-white/10 p-8 flex flex-col">
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 self-start mb-6"
                    style={{ background: pkg.accent + "22", color: pkg.accent, border: `1px solid ${pkg.accent}44` }}
                  >
                    {pkg.name}
                  </span>
                  <p className="text-2xl font-bold tracking-tight mb-1">
                    {pkg.price} <span className="text-sm font-normal text-muted400">{pkg.unit}</span>
                  </p>
                  <ul className="mt-6 space-y-3 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="text-sm text-muted400 flex items-start gap-2">
                        <span style={{ color: pkg.accent }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/48668046599?text=Interesuje%20mnie%20pakiet%20${pkg.name}%20DOOH-LOVE`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-lg uppercase tracking-widest text-xs transition-all text-black hover:brightness-110"
                    style={{ background: pkg.accent }}
                  >
                    Zapytaj o pakiet
                  </a>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <p className="text-[11px] text-muted400/70 leading-relaxed mt-8 max-w-3xl">
            Podane czasy emisji są wartościami orientacyjnymi i odnoszą się do standardowego dnia pracy pojazdu (8 godzin).
            Rzeczywista liczba emisji zależy od długości pętli reklamowej oraz liczby aktywnych kampanii na danej trasie.
          </p>
        </div>
      </section>

      {/* Trasy */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {TRASY.map((trasa, i) => (
            <RevealOnScroll key={trasa.id} delay={i * 100}>
              <div className="border border-white/10 overflow-hidden">
                {/* Mapa */}
                <div className="border-b border-white/10">
                  <TrailMapWrapper stops={trasa.stops} color={trasa.color} />
                </div>

                {/* Info */}
                <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-2 py-1"
                        style={{ background: trasa.color + "22", color: trasa.color, border: `1px solid ${trasa.color}44` }}
                      >
                        {trasa.id}
                      </span>
                      <h2 className="text-2xl font-bold uppercase tracking-tight" style={{ color: trasa.color }}>
                        {trasa.name}
                      </h2>
                    </div>
                    <p className="text-muted400 text-sm leading-relaxed max-w-xl mb-6">
                      {trasa.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {trasa.tags.map((tag) => (
                        <span key={tag} className="text-[10px] uppercase tracking-widest border border-white/10 text-muted400 px-3 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 md:items-end">
                    <a
                      href={`https://wa.me/48668046599?text=Interesuje%20mnie%20trasa%20${encodeURIComponent(trasa.name)}%20DOOH-LOVE`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-bold py-3 px-6 rounded-lg uppercase tracking-widest text-xs transition-all text-black hover:brightness-110"
                      style={{ background: trasa.color }}
                    >
                      Zarezerwuj tę trasę
                    </a>
                    <a
                      href="/#wycena"
                      className="inline-flex items-center gap-2 border border-white/20 text-muted400 font-bold py-3 px-6 rounded-lg uppercase tracking-widest text-xs hover:border-white/40 hover:text-white transition-all"
                    >
                      Wyślij zapytanie
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-black border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <RevealOnScroll>
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">
              Nie wiesz która trasa pasuje do Twojej kampanii?
            </h2>
            <p className="text-muted400 text-sm mb-8">
              Napisz do nas. Dobierzemy trasę i termin pod Twój cel i budżet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/48668046599?text=Chc%C4%99%20zapyta%C4%87%20o%20trasy%20DOOH-LOVE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-brandCyan text-black font-bold py-4 px-8 rounded-lg uppercase tracking-widest hover:bg-white transition-colors text-sm"
              >
                WhatsApp
              </a>
              <a
                href="tel:+48668046599"
                className="inline-flex items-center justify-center gap-3 border border-brandCyan text-brandCyan font-bold py-4 px-8 rounded-lg uppercase tracking-widest hover:bg-brandCyan hover:text-black transition-all text-sm"
              >
                +48 668 046 599
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="px-6 py-10 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <a href="/" className="font-bold text-xl tracking-tighter">
            DOOH<span className="text-brandCyan">-</span>LOVE
          </a>
          <p className="text-[10px] uppercase tracking-widest text-muted400">© 2026 DOOH-LOVE</p>
          <a href="/" className="text-xs text-muted400 hover:text-brandCyan transition-colors uppercase tracking-widest">
            Wróć na stronę główną
          </a>
        </div>
      </footer>
    </main>
  );
}
