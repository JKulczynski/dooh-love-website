import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
