import { createFileRoute } from "@tanstack/react-router";
import { NewsletterCTA } from "@/components/site/NewsletterCTA";

export const Route = createFileRoute("/newsletter")({
  head: () => ({
    meta: [
      { title: "Le Brief Quotidien - Newsletter | The Ledger Standard" },
      { name: "description", content: "Abonnez-vous au briefing matinal sur la crypto, les marchés et la politique." },
    ],
  }),
  component: () => (
    <div>
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="eyebrow text-primary">Nos newsletters</div>
        <h1 className="headline-xl text-5xl md:text-6xl mt-3">Un briefing matinal pour les lecteurs sérieux.</h1>
        <p className="mt-6 font-serif italic text-xl text-muted-foreground leading-snug">
          Quatre newsletters couvrant les marchés, la politique, la recherche et le résumé éditorial hebdomadaire.
          Rédigées par nos éditeurs. Lecture gratuite.
        </p>
      </section>
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6 mb-16">
        {[
          { name: "Le Brief Quotidien", desc: "Un résumé pré-marché des nouvelles crypto les plus importantes, envoyé à 06h30 ET." , freq: "Quotidien"},
          { name: "Veille Politique", desc: "Renseignements hebdomadaires sur les développements réglementaires dans les principales juridictions." , freq: "Hebdomadaire"},
          { name: "Notes de Recherche", desc: "Analyse approfondie de la structure du marché par notre bureau de recherche.", freq: "Mensuel" },
          { name: "Les Perspectives Hebdomadaires", desc: "Lettre de l'éditeur et aperçu de la semaine à venir dans les actifs numériques.", freq: "Hebdomadaire" },
        ].map((n) => (
          <div key={n.name} className="bg-card border border-border p-7 card-lift">
            <div className="eyebrow text-primary">{n.freq}</div>
            <h3 className="font-serif text-2xl font-bold mt-2">{n.name}</h3>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{n.desc}</p>
            <button className="mt-5 text-xs uppercase tracking-widest border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors">
              S'abonner
            </button>
          </div>
        ))}
      </div>
      <NewsletterCTA />
    </div>
  ),
});
