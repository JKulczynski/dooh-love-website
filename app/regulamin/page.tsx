import NavBar from "../components/NavBar";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin | DOOH-LOVE",
};

export default function Regulamin() {
  return (
    <main className="bg-darkBg text-white min-h-screen overflow-x-hidden">
      <NavBar />
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-brandCyan mb-4">
            Dokumenty prawne
          </p>
          <h1 className="text-3xl font-bold uppercase mb-2">
            Regulamin
          </h1>
          <div className="w-20 h-1 bg-brandMagenta mb-10" />

          <div className="prose prose-invert prose-sm max-w-none space-y-8 text-gray-400 leading-relaxed">

            <div>
              <h2 className="text-white text-base font-bold uppercase tracking-widest mb-3">
                1. Postanowienia ogólne
              </h2>
              <p>
                Niniejszy regulamin określa zasady świadczenia usług mobilnej reklamy LED
                przez DOOH-LOVE z siedzibą w Warszawie, NIP: [do uzupełnienia],
                e-mail: hello@dooh-love.pl (dalej: Usługodawca).
              </p>
              <p className="mt-3">
                Korzystanie z usług DOOH-LOVE oznacza akceptację niniejszego regulaminu.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-bold uppercase tracking-widest mb-3">
                2. Zakres usług
              </h2>
              <p>
                Usługodawca świadczy usługi mobilnej reklamy LED na terenie Warszawy,
                obejmujące emisję treści reklamowych na ekranach LED zamontowanych
                na pojazdach poruszających się po ustalonych trasach.
              </p>
              <p className="mt-3">
                W zakresie usług mogą znajdować się dodatkowo: produkcja kreacji
                reklamowych, dokumentacja fotograficzna i wideo z kampanii,
                raporty zasięgu oraz usługi content package.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-bold uppercase tracking-widest mb-3">
                3. Zawarcie umowy
              </h2>
              <p>
                Umowa na realizację kampanii reklamowej zawierana jest po uzgodnieniu
                warunków drogą mailową lub telefoniczną. Warunkiem realizacji kampanii
                jest potwierdzenie zamówienia przez obie strony oraz uiszczenie
                wymaganej zaliczki.
              </p>
              <p className="mt-3">
                Formularz kontaktowy na stronie służy wyłącznie do złożenia wstępnego
                zapytania ofertowego i nie stanowi oferty w rozumieniu Kodeksu cywilnego.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-bold uppercase tracking-widest mb-3">
                4. Materiały reklamowe
              </h2>
              <p>
                Klient zobowiązany jest dostarczyć materiały reklamowe w uzgodnionym
                formacie i terminie. Usługodawca zastrzega sobie prawo do odmowy
                emisji treści naruszających przepisy prawa, dobre obyczaje lub
                prawa osób trzecich.
              </p>
              <p className="mt-3">
                Klient ponosi pełną odpowiedzialność za treść emitowanych materiałów
                oraz za posiadanie wszelkich wymaganych praw i zgód.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-bold uppercase tracking-widest mb-3">
                5. Płatności
              </h2>
              <p>
                Wszystkie ceny podawane przez Usługodawcę są cenami netto i nie zawierają
                podatku VAT. Płatność realizowana jest na podstawie faktury VAT wystawionej
                zgodnie z obowiązującymi przepisami.
              </p>
              <p className="mt-3">
                Szczegółowe warunki płatności, w tym wysokość i termin uiszczenia zaliczki,
                ustalane są indywidualnie przy zawieraniu umowy.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-bold uppercase tracking-widest mb-3">
                6. Odpowiedzialność
              </h2>
              <p>
                Usługodawca nie ponosi odpowiedzialności za opóźnienia lub brak realizacji
                usługi wynikający z przyczyn niezależnych, w tym warunków drogowych,
                awarii pojazdu, decyzji administracyjnych lub siły wyższej.
              </p>
              <p className="mt-3">
                W przypadku niemożności realizacji usługi z winy Usługodawcy, Klientowi
                przysługuje zwrot uiszczonej zaliczki lub realizacja kampanii w innym terminie.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-bold uppercase tracking-widest mb-3">
                7. Reklamacje
              </h2>
              <p>
                Reklamacje należy składać drogą mailową na adres hello@dooh-love.pl
                w terminie 7 dni od daty realizacji kampanii. Usługodawca rozpatruje
                reklamacje w terminie 14 dni roboczych.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-bold uppercase tracking-widest mb-3">
                8. Postanowienia końcowe
              </h2>
              <p>
                W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają
                przepisy Kodeksu cywilnego oraz inne powszechnie obowiązujące przepisy
                prawa polskiego.
              </p>
              <p className="mt-3">
                Usługodawca zastrzega sobie prawo do zmiany regulaminu. O zmianach
                Klienci informowani są drogą mailową lub poprzez aktualizację treści
                na stronie internetowej.
              </p>
            </div>

            <p className="text-xs text-gray-400 pt-4 border-t border-white/5">
              Ostatnia aktualizacja: maj 2025
            </p>
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-brandCyan transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
              Wróć na stronę główną
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
