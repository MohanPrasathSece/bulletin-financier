import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ARTICLES, articlesByCategory, CATEGORIES, type Article } from "@/lib/mock-data";
import { ArticleCard } from "@/components/site/ArticleCard";
import { Sidebar } from "@/components/site/Sidebar";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const articles = articlesByCategory(params.slug);
    const name =
      CATEGORIES.find((c) => c.toLowerCase() === params.slug.toLowerCase()) ??
      params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
    if (articles.length === 0 && !CATEGORIES.map((c) => c.toLowerCase()).includes(params.slug.toLowerCase())) {
      throw notFound();
    }
    return { articles, name };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — The Ledger Standard` },
          { name: "description", content: `${loaderData.name} news and analysis from The Ledger Standard.` },
        ]
      : [],
  }),
  component: CategoryPage,
});

function CategoryPage() {
  const { articles, name } = Route.useLoaderData();
  const list = articles.length ? articles : ARTICLES.slice(0, 6); // fallback if no articles for valid category

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">
      <header className="border-b-[3px] border-double border-foreground pb-6 mb-10">
        <div className="eyebrow text-primary">Section</div>
        <h1 className="headline-xl text-5xl md:text-7xl mt-2">{name}</h1>
        <p className="mt-4 max-w-2xl font-serif italic text-lg text-muted-foreground">
          News, analysis and commentary on {name.toLowerCase()} from our editorial desk.
        </p>
      </header>

      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 grid md:grid-cols-2 gap-7">
          {list.map((a: Article) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
        <div className="lg:col-span-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
