import { Link } from "@tanstack/react-router";
import { Article, authorOf } from "@/lib/mock-data";

export function ArticleCard({
  article,
  size = "md",
}: {
  article: Article;
  size?: "sm" | "md" | "lg";
}) {
  const author = authorOf(article);
  const isLg = size === "lg";
  const isSm = size === "sm";

  return (
    <article className="group card-lift bg-card border border-border">
      <Link
        to="/article/$slug"
        params={{ slug: article.slug }}
        className="block img-zoom"
      >
        <img
          src={article.image}
          alt={article.title}
          className={`w-full object-cover ${isLg ? "h-[420px]" : isSm ? "h-40" : "h-56"}`}
          loading="lazy"
        />
      </Link>
      <div className={`${isLg ? "p-7" : "p-5"}`}>
        <Link
          to="/category/$slug"
          params={{ slug: article.category.toLowerCase() }}
          className="eyebrow text-primary hover:underline"
        >
          {article.category}
        </Link>
        <Link
          to="/article/$slug"
          params={{ slug: article.slug }}
          className="block mt-2"
        >
          <h3
            className={`headline-lg ${
              isLg ? "text-3xl md:text-4xl" : isSm ? "text-lg" : "text-2xl"
            } text-foreground group-hover:text-primary transition-colors`}
          >
            {article.title}
          </h3>
        </Link>
        {!isSm && (
          <p className="mt-3 text-muted-foreground leading-relaxed text-[15px]">
            {article.excerpt}
          </p>
        )}
        <div className="mt-4 byline flex items-center gap-2">
          <Link to="/author/$slug" params={{ slug: author.slug }} className="hover:text-foreground">
            Par {author.name}
          </Link>
          <span>·</span>
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readingTime} min de lecture</span>
        </div>
      </div>
    </article>
  );
}

export function ArticleRow({ article }: { article: Article }) {
  const author = authorOf(article);
  return (
    <article className="flex gap-5 py-5 border-b border-border last:border-0 group">
      <Link
        to="/article/$slug"
        params={{ slug: article.slug }}
        className="shrink-0 img-zoom"
      >
        <img src={article.image} alt={article.title} className="w-32 h-24 object-cover" />
      </Link>
      <div className="flex-1 min-w-0">
        <Link
          to="/category/$slug"
          params={{ slug: article.category.toLowerCase() }}
          className="eyebrow text-primary"
        >
          {article.category}
        </Link>
        <Link to="/article/$slug" params={{ slug: article.slug }}>
          <h4 className="font-serif font-bold text-lg leading-snug mt-1 group-hover:text-primary transition-colors">
            {article.title}
          </h4>
        </Link>
        <div className="mt-2 byline">
          {author.name} · {article.date}
        </div>
      </div>
    </article>
  );
}
