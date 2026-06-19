import { createFileRoute } from "@tanstack/react-router";
import { ARTICLES } from "@/lib/mock-data";
import { ArticleCard } from "@/components/site/ArticleCard";
import { Sidebar } from "@/components/site/Sidebar";

export const Route = createFileRoute("/latest")({
  head: () => ({
    meta: [
      { title: "Latest News — The Ledger Standard" },
      { name: "description", content: "The latest cryptocurrency news, market analysis, and editorial reporting." },
    ],
  }),
  component: Latest,
});

function Latest() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">
      <header className="border-b-[3px] border-double border-foreground pb-6 mb-10">
        <div className="eyebrow text-primary">Newsroom</div>
        <h1 className="headline-xl text-5xl md:text-7xl mt-2">Latest News</h1>
        <p className="mt-4 max-w-2xl font-serif italic text-lg text-muted-foreground">
          Every story we have published, in chronological order. Updated continuously.
        </p>
      </header>
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 grid md:grid-cols-2 gap-7">
          {ARTICLES.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
        <div className="lg:col-span-4"><Sidebar /></div>
      </div>
    </div>
  );
}
