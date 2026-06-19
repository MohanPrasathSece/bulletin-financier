import { createFileRoute } from "@tanstack/react-router";
import { ARTICLES } from "@/lib/mock-data";
import { ArticleRow } from "@/components/site/ArticleCard";

export const Route = createFileRoute("/archive")({
  head: () => ({
    meta: [
      { title: "Archive — The Ledger Standard" },
      { name: "description", content: "Browse our complete archive of crypto news and analysis." },
    ],
  }),
  component: () => (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <header className="border-b-[3px] border-double border-foreground pb-6 mb-10">
        <div className="eyebrow text-primary">The Archive</div>
        <h1 className="headline-xl text-5xl md:text-6xl mt-2">Every story we've published.</h1>
      </header>
      <div>
        {ARTICLES.map((a) => (
          <ArticleRow key={a.slug} article={a} />
        ))}
      </div>
    </div>
  ),
});
