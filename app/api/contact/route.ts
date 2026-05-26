import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = "kulczynski.jan.tomasz@gmail.com";
const FROM = "onboarding@resend.dev";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, ...fields } = body;

    let subject: string;
    let html: string;

    if (type === "lead") {
      subject = `Wycena indywidualna — ${fields.firma || "brak firmy"}`;
      html = `
        <h2>Nowe zapytanie o wycenę</h2>
        <table cellpadding="6">
          <tr><td><b>Firma / Marka</b></td><td>${fields.firma || "-"}</td></tr>
          <tr><td><b>E-mail</b></td><td>${fields.email || "-"}</td></tr>
          <tr><td><b>Telefon</b></td><td>${fields.telefon || "-"}</td></tr>
          <tr><td><b>Trasa / Miejsce</b></td><td>${fields.trasa || "-"}</td></tr>
          <tr><td><b>Termin kampanii</b></td><td>${fields.termin || "-"}</td></tr>
          <tr><td><b>Ilość aut</b></td><td>${fields.ilosc || "1"}</td></tr>
          <tr><td><b>Dodatkowe aktywności</b></td><td>${fields.aktywnosci?.join(", ") || "brak"}</td></tr>
          <tr><td><b>Notatka</b></td><td>${fields.notatka || "brak"}</td></tr>
        </table>
      `;
    } else {
      subject = `Zapytanie o kampanię — ${fields.name || "nowy kontakt"}`;
      html = `
        <h2>Nowe zapytanie przez formularz kontaktowy</h2>
        <table cellpadding="6">
          <tr><td><b>Imię / Firma</b></td><td>${fields.name || "-"}</td></tr>
          <tr><td><b>Kontakt</b></td><td>${fields.contact || "-"}</td></tr>
          <tr><td><b>Wiadomość</b></td><td>${fields.message || "brak"}</td></tr>
        </table>
      `;
    }

    await resend.emails.send({ from: FROM, to: TO, subject, html });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
