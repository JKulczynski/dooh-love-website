import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = "kulczynski.jan.tomasz@gmail.com";
const FROM = "onboarding@resend.dev";

function esc(v: unknown) {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, ...raw } = body;
    const fields: Record<string, string> = Object.fromEntries(
      Object.entries(raw).map(([k, v]) => [k, esc(Array.isArray(v) ? v.join(", ") : v)])
    );

    let subject: string;
    let html: string;

    if (type === "lead") {
      subject = `Zapytanie ofertowe: ${raw.email || "brak maila"}`;
      html = `
        <h2>Nowe zapytanie o wycenę</h2>
        <table cellpadding="6">
          <tr><td><b>E-mail</b></td><td>${fields.email || "-"}</td></tr>
          <tr><td><b>Telefon</b></td><td>${fields.telefon || "-"}</td></tr>
          <tr><td><b>Miasto / lokalizacja</b></td><td>${fields.lokalizacja || "-"}</td></tr>
          <tr><td><b>Termin kampanii</b></td><td>${fields.termin || "-"}</td></tr>
          <tr><td><b>Liczba dni / godzin</b></td><td>${fields.dni || "-"}</td></tr>
          <tr><td><b>Liczba pojazdów LED</b></td><td>${fields.pojazdy || "-"}</td></tr>
          <tr><td><b>Materiały reklamowe</b></td><td>${fields.materialy || "-"}</td></tr>
          <tr><td><b>Dodatkowe usługi</b></td><td>${fields.uslugi || "brak"}</td></tr>
          <tr><td><b>Notatka</b></td><td>${fields.notatka || "brak"}</td></tr>
        </table>
      `;
    } else {
      subject = `Zapytanie o kampanię: ${raw.name || "nowy kontakt"}`;
      html = `
        <h2>Nowe zapytanie przez formularz kontaktowy</h2>
        <table cellpadding="6">
          <tr><td><b>Imię / Firma</b></td><td>${fields.name || "-"}</td></tr>
          <tr><td><b>Kontakt</b></td><td>${fields.contact || "-"}</td></tr>
          <tr><td><b>Wiadomość</b></td><td>${fields.message || "brak"}</td></tr>
        </table>
      `;
    }

    const { error } = await resend.emails.send({ from: FROM, to: TO, subject, html });
    if (error) throw new Error(error.message);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
