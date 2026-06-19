import { createFileRoute } from "@tanstack/react-router";
import { ARTICLES } from "@/lib/mock-data";
import { ArticleRow } from "@/components/site/ArticleCard";
import { useState } from "react";
import { Search } from "lucide-react";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [{ title: "Search — The Ledger Standard" }],
  }),
  component: SearchPage,
});

function SearchPage() {
  const [q, setQ] = useState("");
  const results = q
    ? ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(q.toLowerCase()) ||
          a.excerpt.toLowerCase().includes(q.toLowerCase()) ||
          a.category.toLowerCase().includes(q.toLowerCase())
      )
    : ARTICLES;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <header className="text-center mb-10">
        <div className="eyebrow text-primary">Search</div>
        <h1 className="headline-xl text-5xl md:text-6xl mt-3">Search the archive.</h1>
      </header>
      <div className="relative">
        <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search articles, topics or authors..."
          className="w-full bg-card border border-border pl-12 pr-4 py-4 font-serif text-xl focus:outline-none focus:border-primary"
        />
      </div>
      <div className="mt-4 byline">
        {q ? `${results.length} result${results.length === 1 ? "" : "s"} for "${q}"` : "Showing all stories"}
      </div>
      <div className="mt-6">
        {results.map((a) => (
          <ArticleRow key={a.slug} article={a} />
        ))}
      </div>
    </div>
  );
}
