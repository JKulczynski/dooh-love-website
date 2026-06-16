import HeroSection from "./components/HeroSection";
import StickyBar from "./components/StickyBar";
import NavBar from "./components/NavBar";
import Ticker from "./components/Ticker";
import AnimatedCounter from "./components/AnimatedCounter";
import RevealOnScroll from "./components/RevealOnScroll";
import WycenaSection from "./components/WycenaSection";
import LedGrid from "./components/LedGrid";
import PixelReveal from "./components/PixelReveal";

export default function Home() {
  return (
    <main className="bg-darkBg text-white overflow-x-hidden pb-12">

      <NavBar />

      {/* Hero */}
      <HeroSection />

      {/* Ticker */}
      <Ticker />

      {/* Intro */}
      <section className="py-10 px-6 bg-black border-t border-white/5 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-brandCyan mb-5 font-light">
            Mobilna reklama LED · Warszawa
          </p>
          <h1 className="text-[clamp(1.875rem,5vw+1rem,3.5rem)] font-bold uppercase tracking-tight leading-tight mb-5" style={{ textWrap: "balance" } as React.CSSProperties}>
            <span className="text-white">Całe miasto</span>{" "}
            <span className="text-brandCyan">jest Twoim ekranem.</span>
          </h1>
          <p className="text-muted400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            18m² ekranu LED (jeden samochód) jedzie tam, gdzie jest Twoja grupa docelowa.
            Centrum Warszawy, 15 godzin dziennie, 3 dedykowane trasy.
            Twoja marka tam, gdzie dzieje się miasto.
          </p>
          <a
            href="#wycena"
            className="inline-flex items-center gap-3 bg-brandCyan text-black font-bold py-4 px-8 rounded-lg uppercase tracking-widest hover:bg-white transition-colors text-sm"
          >
            Sprawdź wycenę
          </a>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 text-center">
          <RevealOnScroll>
            <div>
              <div className="text-4xl font-bold text-brandCyan mb-2">
                <AnimatedCounter value={18} suffix=" m²" />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted400">Powierzchnia ekranu (jeden samochód)</div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div>
              <div className="text-4xl font-bold text-brandMagenta mb-2">
                <AnimatedCounter value={15} suffix="h" />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted400">Ekspozycja dziennie</div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div>
              <div className="text-4xl font-bold text-brandCyan mb-2">
                <AnimatedCounter value={3} />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted400">Trasy w Warszawie</div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Video */}
      <section className="hidden py-24 px-6 bg-darkBg" id="video">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">
                Obejrzyj nas <span className="text-brandCyan">w akcji</span>
              </h2>
              <div className="w-20 h-1 bg-brandMagenta mx-auto" />
            </div>
          </RevealOnScroll>
          {/* 16:9 video placeholder */}
          <div
            className="relative w-full border border-white/10 bg-black overflow-hidden group cursor-pointer"
            style={{ paddingBottom: "56.25%" }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full bg-brandCyan/20"
                  style={{ animation: "glowPulse 2s ease-in-out infinite", transform: "scale(1.6)" }}
                />
                <div className="relative z-10 w-20 h-20 rounded-full border-2 border-brandCyan flex items-center justify-center group-hover:bg-brandCyan/10 transition-colors">
                  <svg className="h-8 w-8 text-brandCyan ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <p className="text-xs uppercase tracking-widest text-muted400">Materiał wideo, wkrótce</p>
            </div>
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(0,0,0,0.3) 3px, rgba(0,0,0,0.3) 4px)",
            }} />
          </div>
        </div>
      </section>

      {/* Przyjdź z pomysłem */}
      <PixelReveal>
      <section className="py-24 px-6 bg-darkBg border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="mb-16 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-brandMagenta mb-4">Jak działamy</p>
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
                Przyjdź z pomysłem.<br />
                <span className="text-brandCyan">Wyjdź z kampanią.</span>
              </h2>
              <p className="text-muted400 max-w-2xl mx-auto text-base leading-relaxed mt-6">
                Masz galę, launch albo event? Przynieś nam termin i cel.
                My wyjeżdżamy na miasto z Twoją marką i wracamy z trasą, kreacją
                oraz materiałem do social media gotowym jeszcze tego samego wieczoru.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 overflow-hidden">
            <RevealOnScroll>
              <div className="p-10 bg-brandMagenta/5 border-b md:border-b-0 md:border-r border-white/10">
                <p className="text-xs uppercase tracking-[0.3em] text-brandMagenta mb-8">Potrzeby kampanii</p>
                <ul className="space-y-5">
                  {[
                    "Markę, event lub produkt do promocji",
                    "Grupę docelową i cel kampanii",
                    "Termin i budżet",
                    "Zielone światło do działania",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-brandMagenta font-bold text-lg leading-none mt-0.5">→</span>
                      <span className="text-muted300 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <div className="p-10 bg-brandCyan/5">
                <p className="text-xs uppercase tracking-[0.3em] text-brandCyan mb-8">My dostarczamy</p>
                <ul className="space-y-5">
                  {[
                    "Trasę skrojoną pod Twoją grupę docelową",
                    "Kreację na ekrany LED + wizualizacje",
                    "Drony, foto, Reelsy i TikToki z akcji",
                    "Raport zasięgu i materiał promocyjny gotowy w 24h",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-brandCyan font-bold text-lg leading-none mt-0.5">✓</span>
                      <span className="text-muted300 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>
          <RevealOnScroll delay={200}>
            <div className="mt-10 text-center">
              <a
                href="#wycena"
                className="inline-flex items-center gap-3 bg-brandCyan text-black font-bold py-4 px-10 rounded-lg uppercase tracking-widest hover:bg-white transition-colors text-sm"
              >
                Powiedz nam o swoim pomyśle
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      </PixelReveal>

      {/* Dlaczego to działa */}
      <PixelReveal>
      <section className="relative py-24 px-6 bg-black" id="solutions">
        <LedGrid />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-10" />
        <div className="relative z-20 max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="mb-16">
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">
                Tak <span className="text-brandCyan">to działa</span>
              </h2>
              <div className="w-20 h-1 bg-brandMagenta" />
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: "📍", color: "text-brandCyan", border: "hover:border-brandCyan/50", title: "Mobilność", desc: "Reklama podąża za odbiorcą, a nie czeka, aż odbiorca trafi na nią.", dominant: false },
              { icon: "🔄", color: "text-brandMagenta", border: "hover:border-brandMagenta/50", title: "Elastyczność", desc: "Zmiana trasy, lokalizacji lub kreacji nawet w trakcie kampanii.", dominant: false },
              { icon: "⚡", color: "text-brandAmber", border: "border-brandAmber/40", title: "Szybkość", desc: "Od briefu do startu kampanii w rekordowym czasie.", dominant: true },
              { icon: "👁️", color: "text-brandMagenta", border: "hover:border-brandMagenta/50", title: "Widoczność", desc: "Ekrany LED gwarantują doskonałą ekspozycję zarówno w dzień, jak i po zmroku.", dominant: false },
              { icon: "🎯", color: "text-brandCyan", border: "hover:border-brandCyan/50", title: "Precyzja", desc: "Docieramy dokładnie tam, gdzie znajdują się Twoi klienci.", dominant: false },
            ].map((item, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className={`p-6 border transition-all group h-full ${
                  item.dominant ? `${item.border} bg-brandAmber/5 md:-translate-y-2` : `border-white/10 bg-white/5 ${item.border}`
                }`}>
                  <div className={`text-2xl mb-5 ${item.color} group-hover:scale-110 transition-transform`}>{item.icon}</div>
                  <h3 className="text-lg font-bold mb-3 uppercase">{item.title}</h3>
                  <p className="text-muted400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      </PixelReveal>

      {/* Campaign Planner */}
      <WycenaSection />

      {/* Dla kogo */}
      <section className="py-24 px-6 bg-darkBg" id="dla-kogo">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="mb-16">
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">
                Dla <span className="text-brandMagenta">kogo?</span>
              </h2>
              <div className="w-20 h-1 bg-brandCyan" />
            </div>
          </RevealOnScroll>
          {/* Hero segment - Eventy & Festiwale, dominanta sekcji */}
          <RevealOnScroll>
            <div className="border border-brandAmber/30 bg-brandAmber/5 p-8 md:p-10 mb-6 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:items-start">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-brandAmber mb-3 font-medium">
                  Eventy &amp; Festiwale
                </div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase mb-3 leading-tight">
                  Twoja reklama jest tam, gdzie tłum.
                </h3>
                <p className="text-muted300 text-sm leading-relaxed max-w-xl">
                  Kampania LED przed i podczas eventu. Kiedy tysiące ludzi zbiera się w jednym miejscu, jesteś tam z nimi. Nie na billboardzie przy obwodnicy.
                </p>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-muted400 md:text-right md:max-w-[180px] md:pt-1">
                Festiwale muzyczne · gale sportowe · premiery · konferencje
              </p>
            </div>
          </RevealOnScroll>

          {/* Pozostałe segmenty - mniejsze, w rzędzie */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "FMCG & Retail",
                tagline: "Widoczność tam, gdzie zapada decyzja.",
                examples: "Napoje i marki spożywcze · sieci handlowe · marki premium",
                accent: "brandMagenta",
              },
              {
                label: "Domy Mediowe & Agencje",
                tagline: "Mobilne DOOH do każdego media-mix.",
                examples: "Domy mediowe · agencje reklamowe · sieci agencyjne",
                accent: "brandCyan",
              },
              {
                label: "Korporacje & Marki własne",
                tagline: "Launch, roadshow albo employer branding.",
                examples: "Technologia · finanse · deweloperzy · B2B premium",
                accent: "brandMagenta",
              },
            ].map((item, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className={`flex flex-col border border-white/10 bg-white/5 p-6 hover:border-${item.accent}/40 transition-all h-full group`}>
                  <div className={`text-xs uppercase tracking-[0.25em] text-${item.accent} mb-3 font-medium`}>
                    {item.label}
                  </div>
                  <h3 className="text-base font-bold uppercase mb-4 leading-tight">
                    {item.tagline}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-muted400 border-t border-white/10 pt-3 mt-auto">
                    {item.examples}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Logotypy klientów — ukryte, czeka na realne loga */}
      <section className="hidden py-20 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted400 mb-10">
            Zaufali nam
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border border-white/10 bg-white/5 h-16 flex items-center justify-center">
                <span className="text-[10px] uppercase tracking-widest text-white/20" aria-hidden="true">Logo klienta</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria kampanii */}
      <section className="hidden py-24 px-6 bg-black" id="galeria">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="mb-16 text-right">
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">
                Kampanie <span className="text-brandMagenta">w akcji</span>
              </h2>
              <div className="w-20 h-1 bg-brandCyan ml-auto" />
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { size: "md:col-span-2", aspect: "aspect-[16/9]" },
              { size: "",             aspect: "aspect-square" },
              { size: "",             aspect: "aspect-square" },
              { size: "",             aspect: "aspect-square" },
              { size: "md:col-span-2", aspect: "aspect-[16/9]" },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.size} ${item.aspect} border border-white/10 bg-white/5 relative overflow-hidden group hover:border-brandMagenta/40 transition-all`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <svg className="h-8 w-8 text-white/20 group-hover:text-brandMagenta/40 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                  <span className="text-[10px] uppercase tracking-widest text-white/20" aria-hidden="true">Zdjęcie kampanii</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jak startujemy */}
      <section className="py-16 px-6 bg-black border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <p className="text-xs uppercase tracking-[0.3em] text-muted500 mb-10 text-center">To jest proste</p>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {[
              { n: "01", color: "text-brandCyan", title: "Briefing", desc: "Mówisz nam o celu, evencie i budżecie. Dobieramy trasę i termin." },
              { n: "02", color: "text-brandMagenta", title: "Kreacja i Trasa", desc: "Adaptujemy Twoje materiały lub produkujemy kreację. Planujemy trasę godzina po godzinie." },
              { n: "03", color: "text-brandCyan", title: "Emisja i Raport", desc: "Ciężarówka wyjeżdża. Dostajesz raport zasięgu i materiał wideo do 24h po kampanii." },
            ].map((step, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="bg-black p-8 h-full">
                  <div className={`text-5xl font-bold ${step.color} mb-4`}>{step.n}</div>
                  <h3 className="text-lg font-bold uppercase mb-3">{step.title}</h3>
                  <p className="text-muted400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Przygotowanie projektu - pricing */}
      <section className="py-24 px-6 bg-black border-t border-white/5" id="projekt">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">
                Przygotowanie <span className="text-brandCyan">Projektu</span>
              </h2>
              <div className="w-20 h-1 bg-brandMagenta mx-auto" />
              <p className="text-muted400 text-sm mt-6 max-w-xl mx-auto">
                Nie masz kreacji? Produkujemy grafikę i animacje na ekrany LED. Wybierz pakiet odpowiedni do skali kampanii.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Essential",
                price: "2 500",
                tag: null,
                color: "border-white/10",
                accent: "text-muted300",
                items: [
                  "Statyczna grafika na ekrany LED",
                  "Prosty projekt wizualny",
                  "Gotowe do emisji w 48h",
                  "1 wersja kreacji",
                ],
              },
              {
                name: "Signature",
                price: "6 000",
                originalPrice: "9 000",
                tag: "Promocja",
                color: "border-brandAmber",
                accent: "text-brandAmber",
                items: [
                  "Animowana kreacja na ekrany LED",
                  "Motion graphics i efekty",
                  "Gotowe do emisji w 48h",
                  "2 wersje kreacji",
                  "Adaptacja pod 3 ekrany auta",
                ],
              },
              {
                name: "Flagship",
                price: "12 000",
                tag: null,
                color: "border-brandMagenta/60",
                accent: "text-brandMagenta",
                items: [
                  "Pełna produkcja wideo i animacji",
                  "Cinematic night city efekty",
                  "Gotowe do emisji w 48h",
                  "Nielimitowane wersje kreacji",
                  "Adaptacja pod 3 ekrany auta",
                  "Materiał promocyjny po kampanii",
                ],
              },
            ].map((pkg, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className={`border ${pkg.color} p-8 relative h-full flex flex-col ${pkg.tag ? "bg-brandAmber/5" : "bg-white/5"}`}>
                  {pkg.tag && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brandAmber text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1">
                      {pkg.tag}
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className={`text-lg font-bold uppercase tracking-widest mb-4 ${pkg.accent}`}>{pkg.name}</h3>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-xs text-muted400 uppercase tracking-widest">od</span>
                      {pkg.originalPrice && (
                        <span className="text-lg font-bold text-muted500 line-through">{pkg.originalPrice}</span>
                      )}
                      <span className="text-3xl font-bold text-white">{pkg.price}</span>
                      <span className="text-xs text-muted400 uppercase tracking-widest">PLN netto</span>
                    </div>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {pkg.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted400">
                        <span className={`${pkg.accent} font-bold mt-0.5`}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll>
            <p className="text-center text-xs text-muted400 uppercase tracking-widest mt-8">
              Ceny netto. Kreacja nie jest wymagana - możesz dostarczyć własne materiały.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Content Package */}
      <section className="py-24 px-6 bg-darkBg border-t border-white/5" id="content-package">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="mb-16">
              <p className="text-xs uppercase tracking-[0.3em] text-brandMagenta mb-3">Dodatkowa usługa</p>
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">
                Content <span className="text-brandCyan">Package</span>
              </h2>
              <div className="w-20 h-1 bg-brandMagenta" />
              <p className="text-muted400 text-sm mt-6 max-w-xl">
                Twoja kampania nie kończy się na ekranie. Tworzymy materiały, które żyją dalej w social media.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🎥", label: "Operator na miejscu", desc: "Profesjonalne nagranie kampanii w trakcie emisji" },
              { icon: "🚁", label: "Dron shots", desc: "Ujęcia z lotu ptaka. Truck w tkance miasta nocą." },
              { icon: "📱", label: "Instagram Reels", desc: "Gotowy Reel pod format 9:16, montaż i kolor" },
              { icon: "🎬", label: "TikTok Edits", desc: "Wersja pod TikTok z dynamicznym cięciem" },
              { icon: "🌆", label: "Night City Cinematic", desc: "Materiał kinowy: mokra nawierzchnia, neon, slow motion." },
              { icon: "⚡", label: "Delivery w 24h", desc: "Wszystkie materiały gotowe dobę po emisji" },
            ].map((item, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <div className="border border-white/10 bg-white/5 p-6 hover:border-brandMagenta/40 transition-all group h-full">
                  <div className="text-2xl mb-4">{item.icon}</div>
                  <h3 className="text-sm font-bold uppercase mb-2 group-hover:text-brandCyan transition-colors">{item.label}</h3>
                  <p className="text-muted400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll>
            <div className="mt-10 text-center">
              <a
                href="#wycena"
                className="inline-flex items-center gap-3 border border-brandMagenta text-brandMagenta font-bold py-4 px-10 rounded-lg uppercase tracking-widest hover:bg-brandMagenta hover:text-black transition-all text-sm"
              >
                Zapytaj o Content Package
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Calendly */}
      <section className="py-20 px-6 bg-black border-t border-white/5" id="rozmowa">
        <div className="max-w-3xl mx-auto text-center">
          <RevealOnScroll>
            <p className="text-xs uppercase tracking-[0.3em] text-brandCyan mb-4">Wolisz pogadac?</p>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">
              30 minut. <span className="text-brandCyan">Gotowy plan kampanii.</span>
            </h2>
            <p className="text-muted400 text-sm max-w-xl mx-auto mb-10">
              Powiedz nam o swoim evencie lub produkcie. Wyjdziesz z gotowym planem tras, budzetem i terminami.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="border border-white/10 bg-white/5 overflow-hidden">
              <iframe
                src="https://calendly.com/dooh-love/30min?hide_gdpr_banner=1&primary_color=00ffe5&text_color=ffffff&background_color=0a0a0a"
                width="100%"
                height="650"
                frameBorder="0"
                title="Umow rozmowe"
              />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-muted600 mt-4">
              Link Calendly do ustawienia przez Pawla — dooh-love/30min
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6 max-w-sm">
            <div className="font-bold text-2xl tracking-tighter">
              DOOH<span className="text-brandCyan">-</span>LOVE
            </div>
            <p className="text-muted400 text-sm">
              Rewolucjonizujemy miejską reklamę. Wykorzystujemy najnowocześniejsze ekrany LED mobilne, by Twoja marka zawsze była tam, gdzie dzieje się akcja.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted400">Nawigacja</h3>
              <ul className="text-sm space-y-2 text-muted400">
                <li><a className="hover:text-brandCyan transition-colors" href="#">Start</a></li>
                <li><a className="hover:text-brandCyan transition-colors" href="#solutions">Tak to działa</a></li>
                <li><a className="hover:text-brandCyan transition-colors" href="#dla-kogo">Dla kogo</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted400">Kontakt</h3>
              <ul className="text-sm space-y-3 text-muted400">
                <li>
                  <a href="mailto:hello@dooh-love.pl" className="hover:text-brandCyan transition-colors">
                    hello@dooh-love.pl
                  </a>
                </li>
                <li>
                  <a href="tel:+48500600700" className="hover:text-brandCyan transition-colors">
                    +48 500 600 700
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/48500600700"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-brandCyan transition-colors"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </li>
                <li className="text-muted400">Warszawa, PL</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-[10px] uppercase tracking-widest text-muted400 flex flex-col md:flex-row justify-between gap-3">
          <span>© 2026 DOOH-LOVE</span>
          <div className="flex gap-6">
            <a href="/polityka-prywatnosci" className="hover:text-brandCyan transition-colors">Polityka prywatności</a>
            <a href="/regulamin" className="hover:text-brandCyan transition-colors">Regulamin</a>
          </div>
        </div>
      </footer>

      <StickyBar />

    </main>
  );
}
