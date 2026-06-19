import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { articlesByAuthor, getAuthor, type Article } from "@/lib/mock-data";
import { ArticleCard } from "@/components/site/ArticleCard";

export const Route = createFileRoute("/author/$slug")({
  loader: ({ params }) => {
    const author = getAuthor(params.slug);
    if (!author) throw notFound();
    return { author, articles: articlesByAuthor(params.slug) };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.author.name} — The Ledger Standard` },
          { name: "description", content: loaderData.author.bio },
        ]
      : [],
  }),
  component: AuthorPage,
});

function AuthorPage() {
  const { author, articles } = Route.useLoaderData();
  return (
    <div className="max-w-[1100px] mx-auto px-6 py-16">
      <header className="text-center border-b-[3px] border-double border-foreground pb-10">
        <img src={author.avatar} alt={author.name} className="w-32 h-32 rounded-full object-cover mx-auto" />
        <div className="eyebrow text-primary mt-5">{author.role}</div>
        <h1 className="headline-xl text-5xl md:text-6xl mt-2">{author.name}</h1>
        <p className="mt-5 max-w-2xl mx-auto font-serif italic text-lg text-muted-foreground leading-snug">
          {author.bio}
        </p>
        <div className="mt-6 flex justify-center gap-4 text-xs uppercase tracking-widest">
          <a href="#" className="link-underline">Twitter</a>
          <a href="#" className="link-underline">LinkedIn</a>
          <Link to="/contact" className="link-underline">Contact</Link>
        </div>
      </header>

      <h2 className="eyebrow border-b-2 border-foreground pb-2 mt-14 mb-6">
        Recent Stories by {author.name}
      </h2>
      <div className="grid md:grid-cols-2 gap-7">
        {articles.map((a: Article) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
        {articles.length === 0 && (
          <p className="text-muted-foreground">No published stories yet.</p>
        )}
      </div>
    </div>
  );
}
