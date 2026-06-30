import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { submitToCRM } from "../lib/crm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - The Ledger Standard" },
      { name: "description", content: "Contactez notre équipe éditoriale, notre service publicitaire ou nos carrières." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const dataObj = Object.fromEntries(formData.entries()) as { [key: string]: string };

    const cleanNum = (dataObj.phone || "").replace(/\s+/g, "");
    if (!cleanNum) {
      setError("Veuillez entrer un numéro de téléphone");
      setLoading(false);
      return;
    } else if (!/^(\+41|0041|0)?[1-9]\d{8}$/.test(cleanNum)) {
      setError("Veuillez entrer un numéro suisse valide (ex: 079 123 45 67)");
      setLoading(false);
      return;
    }

    try {
      await submitToCRM(dataObj);
      setSuccess(true);
    } catch (err: any) {
      setError("L'envoi a échoué. Veuillez réessayer plus tard.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <header className="text-center border-b-[3px] border-double border-foreground pb-8">
        <div className="eyebrow text-primary">Contactez-nous</div>
        <h1 className="headline-xl text-5xl md:text-6xl mt-3">Contactez la rédaction.</h1>
      </header>

      <div className="grid md:grid-cols-2 gap-12 mt-14">
        {success ? (
          <div className="bg-primary/10 border border-primary/30 text-primary p-8 text-center space-y-4">
            <h3 className="text-xl font-bold">Message envoyé</h3>
            <p className="opacity-80">Nous avons bien reçu votre demande.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-500 px-4 py-3 text-sm">
                {error}
              </div>
            )}
            
            <label className="block">
              <span className="eyebrow text-muted-foreground">Votre Nom</span>
              <input name="name" required type="text" className="mt-2 w-full bg-card border border-border px-4 py-3 focus:outline-none focus:border-primary" />
            </label>

            <label className="block">
              <span className="eyebrow text-muted-foreground">Adresse E-mail</span>
              <input name="email" required type="email" className="mt-2 w-full bg-card border border-border px-4 py-3 focus:outline-none focus:border-primary" />
            </label>

            <label className="block">
              <span className="eyebrow text-muted-foreground">Téléphone Mobile</span>
              <input name="phone" required type="tel" className="mt-2 w-full bg-card border border-border px-4 py-3 focus:outline-none focus:border-primary" />
            </label>

            <label className="block">
              <span className="eyebrow text-muted-foreground">Message (Facultatif)</span>
              <textarea name="message" rows={6} className="mt-2 w-full bg-card border border-border px-4 py-3 focus:outline-none focus:border-primary resize-none" />
            </label>

            <button type="submit" disabled={loading} className="text-xs uppercase tracking-widest bg-foreground text-background px-6 py-3 hover:bg-primary transition-colors disabled:opacity-50">
              {loading ? "Envoi..." : "Envoyer le message"}
            </button>
          </form>
        )}
        <div className="space-y-8 font-serif text-lg">
          {[
            { h: "Conseils à la rédaction", v: "tips@ledgerstandard.example", sub: "Confidentiel. Signal disponible sur demande." },
            { h: "Demandes éditoriales", v: "editors@ledgerstandard.example" },
            { h: "Publicité", v: "advertising@ledgerstandard.example" },
            { h: "Carrières", v: "careers@ledgerstandard.example" },
            { h: "Presse", v: "press@ledgerstandard.example" },
          ].map((b) => (
            <div key={b.h} className="border-l-2 border-primary pl-5">
              <div className="eyebrow text-primary">{b.h}</div>
              <div className="mt-1">{b.v}</div>
              {b.sub && <div className="byline mt-1">{b.sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
