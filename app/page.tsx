import HeroSection from "./components/HeroSection";
import StickyBar from "./components/StickyBar";
import ContactForm from "./components/ContactForm";
import LeadForm from "./components/LeadForm";
import NavBar from "./components/NavBar";
import PriceCalculator from "./components/PriceCalculator";
import Ticker from "./components/Ticker";
import AnimatedCounter from "./components/AnimatedCounter";
import RevealOnScroll from "./components/RevealOnScroll";
import TrailMapWrapper from "./components/TrailMapWrapper";

export default function Home() {
  return (
    <main className="bg-darkBg text-white overflow-x-hidden pb-12">

      <NavBar />

      {/* Hero */}
      <HeroSection />

      {/* Ticker */}
      <Ticker />

      {/* Intro */}
      <section className="py-16 px-6 bg-black border-t border-white/5 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-brandCyan mb-5 font-light">
            Mobilna reklama LED · Warszawa
          </p>
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight mb-5">
            <span className="text-white">18m² ekranu.</span>{" "}
            <span className="text-brandCyan">15 godzin.</span>{" "}
            <span className="text-white">Centrum Warszawy.</span>
          </h1>
          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Nie czekaj aż klienci trafią na Twój billboard. Jedź do nich.
            Twoja marka tam, gdzie tłum. Każdego dnia.
          </p>
          <a
            href="#wycena"
            className="inline-flex items-center gap-3 bg-brandCyan text-black font-bold py-4 px-8 uppercase tracking-widest hover:bg-white transition-colors text-sm"
          >
            Sprawdź wycenę
          </a>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          <RevealOnScroll>
            <div>
              <div className="text-4xl font-bold text-brandCyan mb-2">
                <AnimatedCounter value={18} suffix=" m²" />
              </div>
              <div className="text-xs uppercase tracking-widest text-gray-500">Powierzchnia ekranów</div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div>
              <div className="text-4xl font-bold text-brandMagenta mb-2">
                <AnimatedCounter value={15} suffix="h" />
              </div>
              <div className="text-xs uppercase tracking-widest text-gray-500">Ekspozycja dziennie</div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div>
              <div className="text-4xl font-bold text-brandCyan mb-2">
                <AnimatedCounter value={3} />
              </div>
              <div className="text-xs uppercase tracking-widest text-gray-500">Trasy w Warszawie</div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={300}>
            <div>
              <div className="text-4xl font-bold text-brandMagenta mb-2">
                <AnimatedCounter value={20} />
              </div>
              <div className="text-xs uppercase tracking-widest text-gray-500">Dni kampanijnych / mies.</div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={400}>
            <div className="border border-brandCyan/20 py-4 px-2">
              <div className="text-3xl font-bold text-brandCyan mb-2">
                od <AnimatedCounter value={2000} suffix=" PLN" duration={1000} />
              </div>
              <div className="text-xs uppercase tracking-widest text-gray-500">Cena netto / dzień</div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Video */}
      <section className="py-24 px-6 bg-darkBg" id="video">
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
              <p className="text-xs uppercase tracking-widest text-gray-500">Materiał wideo, wkrótce</p>
            </div>
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(0,0,0,0.3) 3px, rgba(0,0,0,0.3) 4px)",
            }} />
          </div>
        </div>
      </section>

      {/* Przyjdź z pomysłem */}
      <section className="py-24 px-6 bg-darkBg border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="mb-16 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-brandMagenta mb-4">Jak działamy</p>
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
                Przyjdź z pomysłem.<br />
                <span className="text-brandCyan">Wyjdź z kampanią.</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed mt-6">
                Nie ograniczamy się do aut LED. Masz galę MMA, launch produktu, event firmowy? Przynieś nam problem. My obudujemy go kompletną kampanią uliczną - od trasy przez kreację, drony i relacje, aż po raport i materiały promocyjne.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 overflow-hidden">
            <RevealOnScroll>
              <div className="p-10 bg-white/5 border-b md:border-b-0 md:border-r border-white/10">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-8">Ty przynosisz</p>
                <ul className="space-y-5">
                  {[
                    "Markę, event lub produkt do promocji",
                    "Grupę docelową i cel kampanii",
                    "Termin i budżet",
                    "Zaufanie że to ogarniemy",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-brandMagenta font-bold text-lg leading-none mt-0.5">→</span>
                      <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
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
                      <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
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
                className="inline-flex items-center gap-3 bg-brandCyan text-black font-bold py-4 px-10 uppercase tracking-widest hover:bg-white transition-colors text-sm"
              >
                Powiedz nam o swoim pomyśle
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Dlaczego to działa */}
      <section className="py-24 px-6 bg-black" id="solutions">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="mb-16">
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">
                Dlaczego <span className="text-brandCyan">to działa?</span>
              </h2>
              <div className="w-20 h-1 bg-brandMagenta" />
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RevealOnScroll>
              <div className="p-8 border border-white/10 bg-white/5 hover:border-brandCyan/50 transition-all group h-full">
                <div className="text-brandCyan mb-6 group-hover:scale-110 transition-transform">
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase">Maksymalny Zasięg</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Billboard stoi. My jedziemy. Twoja marka jest tam, gdzie tłum. Nie czeka aż tłum do niej trafi.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <div className="p-8 border border-white/10 bg-white/5 hover:border-brandMagenta/50 transition-all group h-full">
                <div className="text-brandMagenta mb-6 group-hover:scale-110 transition-transform">
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase">Efekt &ldquo;Wow&rdquo;</h3>
                <p className="text-gray-400 text-sm leading-relaxed">18m² świecącego ekranu w środku miasta. Ludzie się odwracają. Robią zdjęcia. Wrzucają na Stories. Twoja marka żyje poza kampanią.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={300}>
              <div className="p-8 border border-white/10 bg-white/5 hover:border-brandCyan/50 transition-all group h-full">
                <div className="text-brandCyan mb-6 group-hover:scale-110 transition-transform">
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase">Mierzalne Wyniki</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Raport tras i szacowany zasięg. Wiesz dokładnie gdzie była Twoja reklama i kiedy. Bez zgadywania.</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Dla kogo */}
      <section className="py-24 px-6 bg-darkBg" id="dla-kogo">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="mb-16 text-right">
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">
                Dla <span className="text-brandMagenta">kogo?</span>
              </h2>
              <div className="w-20 h-1 bg-brandCyan ml-auto" />
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Eventy & Festiwale", desc: "Open'er, Orange Warsaw, gale MMA, koncerty" },
              { label: "FMCG & Retail", desc: "Red Bull, Coca-Cola, kampanie produktowe" },
              { label: "Domy Mediowe", desc: "GroupM, Publicis, Dentsu, kampanie klientów" },
              { label: "Korporacje", desc: "Launche produktów, eventy employer brandingowe" },
            ].map((item, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="border border-white/10 bg-white/5 p-6 hover:border-brandMagenta/30 transition-all h-full">
                  <h3 className="text-sm font-bold uppercase mb-2">{item.label}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Porównanie */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">
                Dlaczego nie <span className="text-brandMagenta">zwykły billboard?</span>
              </h2>
              <div className="w-20 h-1 bg-brandCyan mx-auto" />
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={150}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-xs uppercase tracking-widest text-gray-500 w-1/3" />
                    <th className="text-center p-4 text-xs uppercase tracking-widest text-gray-400 w-1/3">
                      Billboard statyczny
                    </th>
                    <th
                      className="text-center p-4 text-xs uppercase tracking-widest text-brandCyan w-1/3"
                      style={{ textShadow: "0 0 8px rgba(0,255,229,0.5)" }}
                    >
                      DOOH-LOVE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Mobilność", "Jeden punkt w mieście", "Jedziemy do Twoich klientów"],
                    ["Zasięg", "Pasywni widzowie", "Tłum tam, gdzie jest akcja"],
                    ["Elastyczność", "Kontrakt 1-3 miesiące", "Od 1 dnia kampanii"],
                    ["Format", "Druk statyczny", "18m² LED, content w ruchu"],
                    ["Trasy", "1 adres", "3 dedykowane trasy Warszawa"],
                    ["Efekt viralowy", "Rzadki", "Zdjęcia, Stories, organiczne zasięgi"],
                  ].map(([feature, billboard, dooh], i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4 text-xs uppercase tracking-widest text-gray-500">{feature}</td>
                      <td className="p-4 text-center text-gray-500">{billboard}</td>
                      <td className="p-4 text-center text-brandCyan font-medium">{dooh}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Trasy */}
      <section className="py-24 px-6 bg-darkBg" id="trasy">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="mb-16">
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">
                Nasze <span className="text-brandCyan">Trasy</span>
              </h2>
              <div className="w-20 h-1 bg-brandMagenta" />
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RevealOnScroll>
              <div className="border border-white/10 bg-white/5 hover:border-brandCyan/50 transition-all overflow-hidden">
                <TrailMapWrapper
                  stops={[
                    { pos: [52.2296, 20.9847], label: "Rondo Daszyńskiego" },
                    { pos: [52.2317, 21.0067], label: "PKiN" },
                    { pos: [52.2237, 21.0252], label: "Pl. Trzech Krzyży" },
                    { pos: [52.2296, 21.0399], label: "Elektrownia Powiśle" },
                  ]}
                  color="#00FFE5"
                />
                <div className="p-6">
                  <div className="text-brandCyan text-xs uppercase tracking-widest mb-3">Trasa 01</div>
                  <h3 className="text-xl font-bold uppercase mb-3">Centrum Impact</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">Rondo Daszyńskiego, PKiN, Marszałkowska, Plac Trzech Krzyży, Elektrownia Powiśle</p>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">08:00 – 23:00</div>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <div className="border border-white/10 bg-white/5 hover:border-brandMagenta/50 transition-all overflow-hidden">
                <TrailMapWrapper
                  stops={[
                    { pos: [52.2285, 21.0044], label: "Rondo Dmowskiego" },
                    { pos: [52.2353, 20.9841], label: "Rondo ONZ" },
                    { pos: [52.2485, 20.9867], label: "Jana Pawła II" },
                    { pos: [52.2101, 21.0150], label: "Puławska" },
                  ]}
                  color="#FF00AA"
                />
                <div className="p-6">
                  <div className="text-brandMagenta text-xs uppercase tracking-widest mb-3">Trasa 02</div>
                  <h3 className="text-xl font-bold uppercase mb-3">Business Flow</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">Rondo Dmowskiego, Al. Jerozolimskie, Marszałkowska, Rondo ONZ, Jana Pawła II, Puławska</p>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Peak: 07:00–10:00 / 15:30–19:30</div>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={300}>
              <div className="border border-white/10 bg-white/5 hover:border-brandCyan/50 transition-all overflow-hidden">
                <TrailMapWrapper
                  stops={[
                    { pos: [52.2209, 21.0176], label: "Pl. Zbawiciela" },
                    { pos: [52.2221, 21.0152], label: "Hala Koszyki" },
                    { pos: [52.2316, 21.0143], label: "Mazowiecka" },
                    { pos: [52.2436, 21.0270], label: "Bulwary Wiślane" },
                  ]}
                  color="#00FFE5"
                />
                <div className="p-6">
                  <div className="text-brandCyan text-xs uppercase tracking-widest mb-3">Trasa 03</div>
                  <h3 className="text-xl font-bold uppercase mb-3">Nightlife</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">Plac Zbawiciela, Hala Koszyki, Mazowiecka, Bulwary Wiślane</p>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Peak: 22:00 – 01:00</div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Logotypy klientów */}
      <section className="py-20 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <p className="text-center text-xs uppercase tracking-[0.3em] text-gray-500 mb-10">
              Zaufali nam
            </p>
          </RevealOnScroll>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <div className="border border-white/10 bg-white/5 h-16 flex items-center justify-center hover:border-brandCyan/30 transition-all">
                  <span className="text-[10px] uppercase tracking-widest text-white/20" aria-hidden="true">Logo klienta</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-16 border-t border-white/5 pt-16">
              {[
                { value: "50+", label: "Kampanii zrealizowanych" },
                { value: "3M+", label: "Kontaktów dziennie" },
                { value: "100%", label: "Klientów wraca" },
                { value: "24h", label: "Czas odpowiedzi" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className={`text-3xl font-bold mb-2 ${i % 2 === 0 ? "text-brandCyan" : "text-brandMagenta"}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Galeria kampanii */}
      <section className="py-24 px-6 bg-black" id="galeria">
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

      {/* Testimoniale */}
      <section className="py-24 px-6 bg-darkBg" id="opinie">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="mb-16">
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">
                Co mówią <span className="text-brandCyan">klienci?</span>
              </h2>
              <div className="w-20 h-1 bg-brandMagenta" />
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Anna K.", role: "Event Manager", company: "Agencja Eventowa" },
              { name: "Marek W.", role: "Brand Manager", company: "FMCG" },
              { name: "Tomasz B.", role: "Media Buyer", company: "Dom Mediowy" },
            ].map((t, i) => (
              <RevealOnScroll key={i} delay={i * 150}>
                <div className="border border-white/10 bg-white/5 p-8 relative">
                  <div
                    className="absolute top-6 left-8 text-5xl leading-none font-serif"
                    style={{ color: i % 2 === 0 ? "rgba(0,255,229,0.15)" : "rgba(255,0,170,0.15)" }}
                  >
                    &ldquo;
                  </div>
                  <div className="pt-8">
                    <p className="text-gray-400 text-sm leading-relaxed italic mb-6">
                      Opinia klienta. Pojawi się wkrótce.
                    </p>
                    <div className="flex items-center gap-3 border-t border-white/10 pt-6">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs text-gray-400 font-bold">
                        {t.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <div className="text-sm font-bold">{t.name}</div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-500">{t.role} · {t.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Jak startujemy */}
      <section className="py-24 px-6 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-16 text-right">
              Jak <span className="text-brandMagenta">startujemy?</span>
            </h2>
          </RevealOnScroll>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
            <RevealOnScroll className="relative mb-12 md:mb-24 flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-[45%] order-2 md:order-1 mt-6 md:mt-0">
                <h3 className="text-xl font-bold mb-2 text-brandCyan uppercase">01. Briefing</h3>
                <p className="text-gray-400">Określamy cel kampanii, docelową grupę odbiorców oraz kluczowe lokalizacje w mieście.</p>
              </div>
              <div className="z-10 bg-brandCyan text-black w-10 h-10 rounded-full flex items-center justify-center font-bold order-1 md:order-2">1</div>
              <div className="w-full md:w-[45%] order-3" />
            </RevealOnScroll>
            <RevealOnScroll delay={150} className="relative mb-12 md:mb-24 flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-[45%] order-3 md:order-1" />
              <div className="z-10 bg-brandMagenta text-black w-10 h-10 rounded-full flex items-center justify-center font-bold order-1 md:order-2">2</div>
              <div className="w-full md:w-[45%] order-2 md:order-3 mt-6 md:mt-0">
                <h3 className="text-xl font-bold mb-2 text-brandMagenta uppercase">02. Kreacja i Trasa</h3>
                <p className="text-gray-400">Dostosowujemy Twoje materiały wideo pod ekrany LED i planujemy optymalną trasę przejazdu ciężarówki.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={300} className="relative flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-[45%] order-2 md:order-1 mt-6 md:mt-0">
                <h3 className="text-xl font-bold mb-2 text-brandCyan uppercase">03. Emisja</h3>
                <p className="text-gray-400">Ciężarówka wyjeżdża na ulice. Otrzymasz raport trasy i szacowany zasięg po kampanii.</p>
              </div>
              <div className="z-10 bg-brandCyan text-black w-10 h-10 rounded-full flex items-center justify-center font-bold order-1 md:order-2">3</div>
              <div className="w-full md:w-[45%] order-3" />
            </RevealOnScroll>
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
              <p className="text-gray-400 text-sm mt-6 max-w-xl mx-auto">
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
                accent: "text-gray-300",
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
                tag: "Rekomendowany",
                color: "border-brandCyan",
                accent: "text-brandCyan",
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
                <div className={`border ${pkg.color} p-8 relative h-full flex flex-col ${pkg.tag ? "bg-brandCyan/5" : "bg-white/5"}`}>
                  {pkg.tag && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brandCyan text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1">
                      {pkg.tag}
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className={`text-lg font-bold uppercase tracking-widest mb-4 ${pkg.accent}`}>{pkg.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-white">{pkg.price}</span>
                      <span className="text-xs text-gray-500 uppercase tracking-widest">PLN brutto</span>
                    </div>
                  </div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {pkg.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-gray-400">
                        <span className={`${pkg.accent} font-bold mt-0.5`}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#wycena-indywidualna"
                    className={`block text-center py-3 text-xs font-bold uppercase tracking-widest transition-all border ${
                      pkg.tag
                        ? "bg-brandCyan text-black border-brandCyan hover:bg-white hover:border-white"
                        : "border-white/20 text-gray-300 hover:border-white/50"
                    }`}
                  >
                    Wybierz pakiet
                  </a>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll>
            <p className="text-center text-xs text-gray-500 uppercase tracking-widest mt-8">
              Ceny brutto. Kreacja nie jest wymagana - możesz dostarczyć własne materiały.
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
              <p className="text-gray-400 text-sm mt-6 max-w-xl">
                Twoja kampania nie kończy się na ekranie. Tworzymy materiały, które żyją dalej w social media.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🎥", label: "Operator na miejscu", desc: "Profesjonalne nagranie kampanii w trakcie emisji" },
              { icon: "🚁", label: "Dron shots", desc: "Ujęcia z lotu ptaka — truck w tkance miasta nocą" },
              { icon: "📱", label: "Instagram Reels", desc: "Gotowy Reel pod format 9:16, montaż i kolor" },
              { icon: "🎬", label: "TikTok Edits", desc: "Wersja pod TikTok z dynamicznym cięciem" },
              { icon: "🌆", label: "Night City Cinematic", desc: "Materiał kinowy — mokra nawierzchnia, neon, slow motion" },
              { icon: "⚡", label: "Delivery w 24h", desc: "Wszystkie materiały gotowe dobę po emisji" },
            ].map((item, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <div className="border border-white/10 bg-white/5 p-6 hover:border-brandMagenta/40 transition-all group h-full">
                  <div className="text-2xl mb-4">{item.icon}</div>
                  <h3 className="text-sm font-bold uppercase mb-2 group-hover:text-brandCyan transition-colors">{item.label}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll>
            <div className="mt-10 text-center">
              <a
                href="#wycena"
                className="inline-flex items-center gap-3 border border-brandMagenta text-brandMagenta font-bold py-4 px-10 uppercase tracking-widest hover:bg-brandMagenta hover:text-black transition-all text-sm"
              >
                Zapytaj o Content Package
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Wycena Online */}
      <section className="py-24 px-6 bg-zinc-900" id="wycena">
        <div className="max-w-3xl mx-auto border border-white/20 p-8 md:p-12">
          <RevealOnScroll>
            <h2 className="text-2xl font-bold uppercase mb-2 text-center">
              Wycena <span className="text-brandCyan">Online</span>
            </h2>
            <p className="text-center text-xs text-gray-500 uppercase tracking-widest mb-10">
              Szacunkowy koszt kampanii
            </p>
          </RevealOnScroll>
          <PriceCalculator />
        </div>
      </section>

      {/* Wycena Indywidualna */}
      <section className="py-24 px-6 bg-black border-t border-white/5" id="wycena-indywidualna">
        <div className="max-w-3xl mx-auto">
          <RevealOnScroll>
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-brandMagenta mb-3">Duże marki, eventy, launche</p>
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">
                Wycena <span className="text-brandMagenta">Indywidualna</span>
              </h2>
              <div className="w-20 h-1 bg-brandCyan" />
              <p className="text-gray-400 text-sm mt-6 leading-relaxed">
                Planujesz galę, launch produktu lub kampanię wymagającą ekstra uwagi? Napisz do nas. Odezwiemy się w ciągu kilku godzin z ofertą skrojoną dokładnie pod Twoje potrzeby.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <LeadForm />
          </RevealOnScroll>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-darkBg text-center">
        <div className="max-w-3xl mx-auto">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 border border-brandMagenta/40 px-4 py-2 mb-8 text-xs uppercase tracking-widest text-brandMagenta">
              <span className="w-2 h-2 rounded-full bg-brandMagenta animate-pulse inline-block" />
              Dostępność: kampanie realizujemy szybko od briefingu
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
              Zarezerwuj termin<br />
              <span className="text-brandCyan">zanim zrobi to</span>{" "}
              <span className="text-brandMagenta">konkurencja.</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <p className="text-gray-400 uppercase tracking-widest text-sm mb-10">Jeden klient = jedna trasa. Terminy znikają.</p>
            <ContactForm />
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
            <p className="text-gray-500 text-sm">
              Rewolucjonizujemy miejską reklamę. Wykorzystujemy najnowocześniejsze ekrany LED mobilne, by Twoja marka zawsze była tam, gdzie dzieje się akcja.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Nawigacja</h3>
              <ul className="text-sm space-y-2 text-gray-500">
                <li><a className="hover:text-brandCyan transition-colors" href="#">Start</a></li>
                <li><a className="hover:text-brandCyan transition-colors" href="#solutions">Dlaczego to działa</a></li>
                <li><a className="hover:text-brandCyan transition-colors" href="#trasy">Trasy</a></li>
                <li><a className="hover:text-brandCyan transition-colors" href="#dla-kogo">Dla kogo</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Kontakt</h3>
              <ul className="text-sm space-y-3 text-gray-500">
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
                <li className="text-gray-500">Warszawa, PL</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-[10px] uppercase tracking-widest text-gray-500 flex justify-between">
          <span>© 2025 DOOH-LOVE</span>
          <span>Created for Urban Frontier</span>
        </div>
      </footer>

      <StickyBar />

    </main>
  );
}
