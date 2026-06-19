import { createFileRoute } from "@tanstack/react-router";
import { ARTICLES } from "@/lib/mock-data";
import { ArticleRow } from "@/components/site/ArticleCard";

export const Route = createFileRoute("/archive")({
  head: () => ({
    meta: [
      { title: "Archives - The Ledger Standard" },
      { name: "description", content: "Parcourez nos archives complètes d'actualités et d'analyses crypto." },
    ],
  }),
  component: () => (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <header className="border-b-[3px] border-double border-foreground pb-6 mb-10">
        <div className="eyebrow text-primary">Les archives</div>
        <h1 className="headline-xl text-5xl md:text-6xl mt-2">Toutes les histoires que nous avons publiées.</h1>
      </header>
      <div>
        {ARTICLES.map((a) => (
          <ArticleRow key={a.slug} article={a} />
        ))}
      </div>
    </div>
  ),
});
