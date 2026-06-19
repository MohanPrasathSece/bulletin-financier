import { createFileRoute } from "@tanstack/react-router";
import { AUTHORS } from "@/lib/mock-data";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos - The Ledger Standard" },
      { name: "description", content: "Journalisme indépendant sur la crypto-monnaie, les marchés des capitaux et la politique." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="eyebrow text-primary">À propos de nous</div>
        <h1 className="headline-xl text-5xl md:text-6xl mt-3">
          Un journalisme sérieux pour une classe d'actifs sérieuse.
        </h1>
        <p className="mt-6 font-serif italic text-xl text-muted-foreground leading-snug">
          The Ledger Standard est une publication numérique indépendante couvrant la crypto-monnaie,
          les marchés des capitaux et les cadres politiques qui façonnent l'économie des actifs numériques.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16 font-serif text-[18px] leading-[1.8]">
        <p className="drop-cap">
          Nous avons été fondés en 2021 par un petit groupe de journalistes qui avaient auparavant
          couvert la finance mondiale pour le Financial Times, Bloomberg et Reuters.
          Nous pensions alors, et nous pensons toujours, que l'économie des actifs numériques mérite
          la même norme de reportage que les autres marchés financiers connaissent depuis longtemps.
        </p>
        <p className="mt-6">
          Nous publions des actualités, des enquêtes, des opinions, des recherches et des conversations avec les
          personnes qui façonnent cette industrie - des régulateurs et banquiers centraux aux
          constructeurs, traders et répartiteurs qui utilisent ce marché tous les jours.
        </p>
        <p className="mt-6">
          Nos normes éditoriales sont délibérément conservatrices. Nous n'acceptons aucun paiement
          pour la couverture. Nous divulguons tout conflit d'intérêts. Nous corrigeons les erreurs ouvertement,
          et rapidement. Avant tout, nous essayons d'écrire pour les lecteurs prêts à passer
          dix minutes sur une histoire.
        </p>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 pb-24">
        <h2 className="eyebrow border-b-2 border-foreground pb-2 mb-8">Notre équipe éditoriale</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {AUTHORS.map((a) => (
            <Link key={a.slug} to="/author/$slug" params={{ slug: a.slug }} className="group">
              <img src={a.avatar} alt={a.name} className="w-full h-72 object-cover" />
              <h3 className="font-serif text-2xl font-bold mt-4 group-hover:text-primary transition-colors">{a.name}</h3>
              <div className="eyebrow text-primary mt-1">{a.role}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.bio}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
