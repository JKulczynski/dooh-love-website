import NavBar from "../components/NavBar";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności | DOOH-LOVE",
};

export default function PolitykaPrywatnosci() {
  return (
    <main className="bg-darkBg text-white min-h-screen overflow-x-hidden">
      <NavBar />
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-brandCyan mb-4">
            Dokumenty prawne
          </p>
          <h1 className="text-3xl font-bold uppercase mb-2">
            Polityka Prywatności
          </h1>
          <div className="w-20 h-1 bg-brandMagenta mb-10" />

          <div className="prose prose-invert prose-sm max-w-none space-y-8 text-gray-400 leading-relaxed">

            <div>
              <h2 className="text-white text-base font-bold uppercase tracking-widest mb-3">
                1. Administrator danych
              </h2>
              <p>
                Administratorem Twoich danych osobowych jest DOOH-LOVE,
                z siedzibą w Warszawie (adres do uzupełnienia), NIP: [do uzupełnienia],
                e-mail: hello@dooh-love.pl, tel.: +48 500 600 700.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-bold uppercase tracking-widest mb-3">
                2. Jakie dane zbieramy
              </h2>
              <p>
                Zbieramy dane, które podajesz dobrowolnie za pośrednictwem formularza
                kontaktowego na stronie: adres e-mail, numer telefonu, preferowaną trasę
                lub lokalizację oraz ewentualne dodatkowe informacje podane w polu notatki.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-bold uppercase tracking-widest mb-3">
                3. Cel przetwarzania
              </h2>
              <p>
                Twoje dane przetwarzamy wyłącznie w celu odpowiedzi na zapytanie ofertowe
                i nawiązania kontaktu handlowego (art. 6 ust. 1 lit. b RODO).
                Nie przetwarzamy danych w celach marketingowych bez Twojej zgody.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-bold uppercase tracking-widest mb-3">
                4. Czas przechowywania
              </h2>
              <p>
                Dane przechowujemy przez czas niezbędny do realizacji zapytania,
                a po jego zakończeniu przez okres wynikający z przepisów prawa
                (do 5 lat dla celów rachunkowych i podatkowych).
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-bold uppercase tracking-widest mb-3">
                5. Twoje prawa
              </h2>
              <p>
                Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia,
                ograniczenia przetwarzania, przenoszenia oraz wniesienia sprzeciwu.
                Możesz w każdej chwili wycofać zgodę, kontaktując się z nami
                pod adresem hello@dooh-love.pl.
              </p>
              <p className="mt-3">
                Przysługuje Ci również prawo wniesienia skargi do Prezesa Urzędu
                Ochrony Danych Osobowych (uodo.gov.pl).
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-bold uppercase tracking-widest mb-3">
                6. Pliki cookies
              </h2>
              <p>
                Strona może używać plików cookies w celach technicznych i analitycznych.
                Możesz wyłączyć cookies w ustawieniach swojej przeglądarki,
                jednak może to ograniczyć funkcjonalność strony.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base font-bold uppercase tracking-widest mb-3">
                7. Kontakt
              </h2>
              <p>
                W sprawach związanych z ochroną danych osobowych skontaktuj się
                pod adresem: hello@dooh-love.pl lub telefonicznie: +48 500 600 700.
              </p>
            </div>

            <p className="text-xs text-gray-600 pt-4 border-t border-white/5">
              Ostatnia aktualizacja: maj 2025
            </p>
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 hover:text-brandCyan transition-colors"
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
