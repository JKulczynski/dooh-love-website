import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "./components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://dooh-love.pl";

export const metadata: Metadata = {
  title: "DOOH-LOVE | Mobilna Reklama LED Warszawa",
  description: "18m² ekranu LED jedzie przez centrum Warszawy. 3 dedykowane trasy, 15h ekspozycji dziennie. Kampania LED gotowa w 48h od briefingu. Od 3 500 PLN netto/dzień.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "DOOH-LOVE | Mobilna Reklama LED Warszawa",
    description: "18m² ekranu LED jedzie przez centrum Warszawy. Kampania gotowa w 48h. Od 3 500 PLN netto/dzień.",
    url: siteUrl,
    siteName: "DOOH-LOVE",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DOOH-LOVE | Mobilna Reklama LED Warszawa",
    description: "18m² ekranu LED jedzie przez centrum Warszawy. Kampania gotowa w 48h. Od 3 500 PLN netto/dzień.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: "DOOH-LOVE",
      description: "Mobilna reklama LED w Warszawie. 18m² ekranu LED na ciężarówce jeździ przez centrum miasta 15 godzin dziennie po 3 dedykowanych trasach.",
      url: siteUrl,
      telephone: "+48500600700",
      email: "hello@dooh-love.pl",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Warszawa",
        addressCountry: "PL",
      },
      areaServed: {
        "@type": "City",
        name: "Warszawa",
      },
      priceRange: "od 3 500 PLN netto/dzień",
      openingHours: "Mo-Fr 08:00-23:00",
      sameAs: [siteUrl],
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "Mobilna reklama LED DOOH",
      provider: { "@id": `${siteUrl}/#business` },
      description: "Emisja reklam na ekranach LED zamontowanych na ciężarówce poruszającej się po centrum Warszawy. Dostępne trasy: Centrum Impact, Business Flow, Nightlife. Kampania gotowa w 48h od briefingu.",
      areaServed: {
        "@type": "City",
        name: "Warszawa",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "PLN",
        price: "3500",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "3500",
          priceCurrency: "PLN",
          unitText: "dzień",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Czym jest DOOH-LOVE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DOOH-LOVE to mobilna reklama LED w Warszawie. 18m² ekranu LED zamontowany na ciężarówce jedzie przez centrum miasta po 3 dedykowanych trasach, 15 godzin dziennie.",
          },
        },
        {
          "@type": "Question",
          name: "Ile kosztuje kampania reklamowa LED?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kampania mobilnej reklamy LED zaczyna się od 3 500 PLN netto za dzień emisji. Dokładna wycena zależy od wybranej trasy, liczby pojazdów i czasu trwania kampanii.",
          },
        },
        {
          "@type": "Question",
          name: "Jak szybko można uruchomić kampanię LED?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kampanię można uruchomić w 48 godzin od briefingu. Możemy adaptować dostarczone materiały lub wyprodukować kreację od zera.",
          },
        },
        {
          "@type": "Question",
          name: "Jakie trasy są dostępne w Warszawie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dostępne są 3 trasy: Centrum Impact (Rondo Daszyńskiego, PKiN, Marszałkowska, Plac Trzech Krzyży), Business Flow (Al. Jerozolimskie, Rondo ONZ, Jana Pawła II) oraz Nightlife (Plac Zbawiciela, Hala Koszyki, Bulwary Wiślane).",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
