import HeroSection from "./components/HeroSection";
import StickyBar from "./components/StickyBar";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="bg-darkBg text-white overflow-x-hidden pb-12">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter">
            DOOH<span className="text-brandCyan">-</span>LOVE
          </div>
          <button aria-label="Menu" className="p-2 text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <HeroSection />

      {/* Social Proof — tuż po hero, buduje wiarygodność */}
      <section className="py-20 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-brandCyan mb-2">18 m²</div>
            <div className="text-xs uppercase tracking-widest text-gray-500">Powierzchnia ekranów</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-brandMagenta mb-2">10h</div>
            <div className="text-xs uppercase tracking-widest text-gray-500">Ekspozycja dziennie</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-brandCyan mb-2">3</div>
            <div className="text-xs uppercase tracking-widest text-gray-500">Trasy w Warszawie</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-brandMagenta mb-2">GPS</div>
            <div className="text-xs uppercase tracking-widest text-gray-500">Monitoring w czasie rzeczywistym</div>
          </div>
          <div className="border border-brandCyan/20 py-4 px-2">
            <div className="text-3xl font-bold text-brandCyan mb-2">od 1 600 zł</div>
            <div className="text-xs uppercase tracking-widest text-gray-500">Cena netto / dzień</div>
          </div>
        </div>
      </section>

      {/* Video — placeholder czeka na materiał od Pawła */}
      <section className="py-24 px-6 bg-darkBg" id="video">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">
              Obejrzyj nas <span className="text-brandCyan">w akcji</span>
            </h2>
            <div className="w-20 h-1 bg-brandMagenta mx-auto" />
          </div>
          {/* 16:9 video placeholder */}
          <div
            className="relative w-full border border-white/10 bg-black overflow-hidden group cursor-pointer"
            style={{ paddingBottom: "56.25%" }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
              {/* Pulsing play button */}
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
              <p className="text-xs uppercase tracking-widest text-gray-500">Materiał wideo — wkrótce</p>
            </div>
            {/* Scan lines overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(0,0,0,0.3) 3px, rgba(0,0,0,0.3) 4px)",
            }} />
          </div>
        </div>
      </section>

      {/* Dlaczego to działa */}
      <section className="py-24 px-6 bg-black" id="solutions">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">
              Dlaczego <span className="text-brandCyan">to działa?</span>
            </h2>
            <div className="w-20 h-1 bg-brandMagenta" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 bg-white/5 hover:border-brandCyan/50 transition-all group">
              <div className="text-brandCyan mb-6 group-hover:scale-110 transition-transform">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Maksymalny Zasięg</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Docieramy tam, gdzie stacjonarne billboardy nie mają wstępu. Twoja reklama krąży w samym sercu miasta.</p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 hover:border-brandMagenta/50 transition-all group">
              <div className="text-brandMagenta mb-6 group-hover:scale-110 transition-transform">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Efekt &ldquo;Wow&rdquo;</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Ekrany LED o wysokiej jasności i dynamiczne treści przyciągają wzrok przechodniów i kierowców skuteczniej niż statyczna grafika.</p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 hover:border-brandCyan/50 transition-all group">
              <div className="text-brandCyan mb-6 group-hover:scale-110 transition-transform">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Mierzalne Wyniki</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Dostarczamy raporty z tras oraz szacowaną liczbę kontaktów z Twoją marką w oparciu o dane o ruchu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dla kogo */}
      <section className="py-24 px-6 bg-darkBg" id="dla-kogo">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-right">
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">
              Dla <span className="text-brandMagenta">kogo?</span>
            </h2>
            <div className="w-20 h-1 bg-brandCyan ml-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Eventy & Festiwale", desc: "Open'er, Orange Warsaw, gale MMA, koncerty" },
              { label: "FMCG & Retail", desc: "Red Bull, Coca-Cola, kampanie produktowe" },
              { label: "Domy Mediowe", desc: "GroupM, Publicis, Dentsu — kampanie klientów" },
              { label: "Korporacje", desc: "Launche produktów, eventy employer brandingowe" },
            ].map((item, i) => (
              <div key={i} className="border border-white/10 bg-white/5 p-6 hover:border-brandMagenta/30 transition-all">
                <h4 className="text-sm font-bold uppercase mb-2">{item.label}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trasy */}
      <section className="py-24 px-6 bg-black" id="trasy">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">
              Nasze <span className="text-brandCyan">Trasy</span>
            </h2>
            <div className="w-20 h-1 bg-brandMagenta" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-white/10 bg-white/5 p-8 hover:border-brandCyan/50 transition-all">
              <div className="text-brandCyan text-xs uppercase tracking-widest mb-4">Trasa 01</div>
              <h3 className="text-xl font-bold uppercase mb-3">Premium / Centrum</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">Rondo Daszyńskiego → PKiN → Marszałkowska → Plac Trzech Krzyży → Elektrownia Powiśle</p>
              <div className="text-xs text-gray-500 uppercase tracking-wider">08:00 – 23:00</div>
            </div>
            <div className="border border-white/10 bg-white/5 p-8 hover:border-brandMagenta/50 transition-all">
              <div className="text-brandMagenta text-xs uppercase tracking-widest mb-4">Trasa 02</div>
              <h3 className="text-xl font-bold uppercase mb-3">Max Zasięg</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">Rondo Dmowskiego → Al. Jerozolimskie → Marszałkowska → Rondo ONZ → Jana Pawła II → Puławska</p>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Peak: 07:00–10:00 / 15:30–19:30</div>
            </div>
            <div className="border border-white/10 bg-white/5 p-8 hover:border-brandCyan/50 transition-all">
              <div className="text-brandCyan text-xs uppercase tracking-widest mb-4">Trasa 03</div>
              <h3 className="text-xl font-bold uppercase mb-3">Noc / Nightlife</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">Plac Zbawiciela → Hala Koszyki → Mazowiecka → Bulwary Wiślane</p>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Peak: 22:00 – 01:00</div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria kampanii — placeholder czeka na zdjęcia od Pawła */}
      <section className="py-24 px-6 bg-black" id="galeria">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-right">
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">
              Kampanie <span className="text-brandMagenta">w akcji</span>
            </h2>
            <div className="w-20 h-1 bg-brandCyan ml-auto" />
          </div>
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
                  <span className="text-[10px] uppercase tracking-widest text-white/20">Zdjęcie kampanii</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoniale — placeholder czeka na opinie od klientów Pawła */}
      <section className="py-24 px-6 bg-darkBg" id="opinie">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">
              Co mówią <span className="text-brandCyan">klienci?</span>
            </h2>
            <div className="w-20 h-1 bg-brandMagenta" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Anna K.", role: "Event Manager", company: "Agencja Eventowa" },
              { name: "Marek W.", role: "Brand Manager", company: "FMCG" },
              { name: "Tomasz B.", role: "Media Buyer", company: "Dom Mediowy" },
            ].map((t, i) => (
              <div key={i} className="border border-white/10 bg-white/5 p-8 relative">
                <div
                  className="absolute top-6 left-8 text-5xl leading-none font-serif"
                  style={{ color: i % 2 === 0 ? "rgba(0,255,229,0.15)" : "rgba(255,0,170,0.15)" }}
                >
                  &ldquo;
                </div>
                <div className="pt-8">
                  <p className="text-gray-400 text-sm leading-relaxed italic mb-6">
                    Opinia klienta — pojawi się wkrótce.
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
            ))}
          </div>
        </div>
      </section>

      {/* Jak startujemy */}
      <section className="py-24 px-6 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold uppercase tracking-tight mb-16 text-right">
            Jak <span className="text-brandMagenta">startujemy?</span>
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
            <div className="relative mb-12 md:mb-24 flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-[45%] order-2 md:order-1 mt-6 md:mt-0">
                <h4 className="text-xl font-bold mb-2 text-brandCyan uppercase">01. Briefing</h4>
                <p className="text-gray-400">Określamy cel kampanii, docelową grupę odbiorców oraz kluczowe lokalizacje w mieście.</p>
              </div>
              <div className="z-10 bg-brandCyan text-black w-10 h-10 rounded-full flex items-center justify-center font-bold order-1 md:order-2">1</div>
              <div className="w-full md:w-[45%] order-3" />
            </div>
            <div className="relative mb-12 md:mb-24 flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-[45%] order-3 md:order-1" />
              <div className="z-10 bg-brandMagenta text-black w-10 h-10 rounded-full flex items-center justify-center font-bold order-1 md:order-2">2</div>
              <div className="w-full md:w-[45%] order-2 md:order-3 mt-6 md:mt-0">
                <h4 className="text-xl font-bold mb-2 text-brandMagenta uppercase">02. Kreacja i Trasa</h4>
                <p className="text-gray-400">Dostosowujemy Twoje materiały wideo pod ekrany LED i planujemy optymalną trasę przejazdu ciężarówki.</p>
              </div>
            </div>
            <div className="relative flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-[45%] order-2 md:order-1 mt-6 md:mt-0">
                <h4 className="text-xl font-bold mb-2 text-brandCyan uppercase">03. Emisja</h4>
                <p className="text-gray-400">Ciężarówka wyjeżdża na ulice. Monitorujesz kampanię w czasie rzeczywistym dzięki naszym systemom GPS.</p>
              </div>
              <div className="z-10 bg-brandCyan text-black w-10 h-10 rounded-full flex items-center justify-center font-bold order-1 md:order-2">3</div>
              <div className="w-full md:w-[45%] order-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Wycena Online */}
      <section className="py-24 px-6 bg-zinc-900" id="wycena">
        <div className="max-w-3xl mx-auto border border-white/20 p-8 md:p-12">
          <h2 className="text-2xl font-bold uppercase mb-8 text-center">
            Wycena <span className="text-brandCyan">Online</span>
          </h2>
          <div className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Czas trwania kampanii (dni)</label>
              <input className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brandCyan" max="30" min="1" type="range" defaultValue="7" />
              <div className="flex justify-between text-xs mt-2 text-gray-500">
                <span>1 dzień</span>
                <span>30 dni</span>
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Liczba ciężarówek</label>
              <select className="w-full bg-black border border-white/20 p-3 focus:border-brandCyan outline-none transition-colors">
                <option>1 Pojazd</option>
                <option>2 Pojazdy</option>
                <option>Flota (3+)</option>
              </select>
            </div>
            <div className="pt-6 border-t border-white/10">
              <div className="flex justify-between items-end mb-6">
                <span className="text-sm uppercase text-gray-400">Szacowany koszt netto:</span>
                <span className="text-3xl font-bold text-brandCyan">od 1 600 PLN</span>
              </div>
              <button
                className="w-full bg-white text-black font-bold py-4 uppercase tracking-widest hover:bg-brandMagenta hover:text-white transition-all"
                type="button"
              >
                Zapytaj o szczegóły
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-darkBg text-center">
        <div className="max-w-3xl mx-auto">
          {/* Urgency bar */}
          <div className="inline-flex items-center gap-2 border border-brandMagenta/40 px-4 py-2 mb-8 text-xs uppercase tracking-widest text-brandMagenta">
            <span className="w-2 h-2 rounded-full bg-brandMagenta animate-pulse inline-block" />
            Dostępność: kampanie realizujemy w 48h od briefingu
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
            Zarezerwuj termin<br />
            <span className="text-brandCyan">zanim zrobi to</span>{" "}
            <span className="text-brandMagenta">konkurencja.</span>
          </h2>
          <p className="text-gray-400 uppercase tracking-widest text-sm mb-10">Jeden klient = jedna trasa. Terminy znikają.</p>
          <ContactForm />
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
              <h5 className="text-xs font-bold uppercase tracking-widest text-gray-400">Nawigacja</h5>
              <ul className="text-sm space-y-2 text-gray-500">
                <li><a className="hover:text-brandCyan transition-colors" href="#">Start</a></li>
                <li><a className="hover:text-brandCyan transition-colors" href="#solutions">Dlaczego to działa</a></li>
                <li><a className="hover:text-brandCyan transition-colors" href="#trasy">Trasy</a></li>
                <li><a className="hover:text-brandCyan transition-colors" href="#dla-kogo">Dla kogo</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-widest text-gray-400">Kontakt</h5>
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
                <li className="text-gray-600">Warszawa, PL</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-[10px] uppercase tracking-widest text-gray-600 flex justify-between">
          <span>© 2025 DOOH-LOVE</span>
          <span>Created for Urban Frontier</span>
        </div>
      </footer>

      <StickyBar />

    </main>
  );
}
