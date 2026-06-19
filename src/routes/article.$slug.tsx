import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getArticle, authorOf, ARTICLES } from "@/lib/mock-data";
import { ArticleRow } from "@/components/site/ArticleCard";
import { NewsletterCTA } from "@/components/site/NewsletterCTA";
import { Sidebar } from "@/components/site/Sidebar";
import { useEffect, useState } from "react";
import { Bookmark, Printer, Share2, Headphones, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";

export const Route = createFileRoute("/article/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.article.title} - The Ledger Standard` },
          { name: "description", content: loaderData.article.excerpt },
          { property: "og:title", content: loaderData.article.title },
          { property: "og:description", content: loaderData.article.excerpt },
          { property: "og:image", content: loaderData.article.image },
        ]
      : [],
  }),
  component: ArticlePage,
  notFoundComponent: () => (
    <div className="max-w-2xl mx-auto py-32 text-center px-6">
      <div className="eyebrow text-primary mb-3">Erreur 404</div>
      <h1 className="font-serif text-5xl font-black">Article introuvable.</h1>
      <Link to="/latest" className="mt-6 inline-block text-xs uppercase tracking-widest text-primary link-underline">
        Parcourir les dernières histoires
      </Link>
    </div>
  ),
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const author = authorOf(article);
  const related = ARTICLES.filter((a) => a.category === article.category && a.slug !== article.slug).slice(0, 3);

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <article className="bg-background">
      {/* Reading progress */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-[60] bg-transparent">
        <div className="h-full bg-primary transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Header */}
      <header className="max-w-3xl mx-auto px-6 pt-14 pb-8 text-center">
        <Link to="/category/$slug" params={{ slug: article.category.toLowerCase() }} className="eyebrow text-primary">
          {article.category}
        </Link>
        <h1 className="headline-xl text-4xl md:text-6xl mt-4">{article.title}</h1>
        <p className="mt-5 font-serif italic text-xl md:text-2xl text-muted-foreground leading-snug">
          {article.subtitle}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 byline">
          <Link to="/author/$slug" params={{ slug: author.slug }} className="flex items-center gap-2">
            <img src={author.avatar} alt={author.name} className="w-9 h-9 rounded-full object-cover" />
            <span className="text-foreground font-medium">Par {author.name}</span>
          </Link>
          <span>·</span>
          <span>{article.date}</span>
          <span>·</span>
          <span>Mis à jour il y a 2h</span>
          <span>·</span>
          <span>{article.readingTime} min de lecture</span>
        </div>
      </header>

      {/* Hero image */}
      <figure className="max-w-6xl mx-auto px-6">
        <img src={article.image} alt={article.title} className="w-full max-h-[640px] object-cover" />
        <figcaption className="mt-3 text-xs text-muted-foreground italic text-center">
          Photographie : Archives de The Ledger Standard.
        </figcaption>
      </figure>

      {/* Toolbar */}
      <div className="max-w-3xl mx-auto px-6 mt-10 flex items-center justify-between border-y border-border py-3 text-muted-foreground">
        <div className="flex items-center gap-1">
          {[Twitter, Linkedin, LinkIcon, Share2].map((Icon, i) => (
            <button key={i} className="p-2 hover:text-primary transition-colors" aria-label="Share">
              <Icon className="w-4 h-4" />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <button className="p-2 hover:text-primary transition-colors" aria-label="Bookmark"><Bookmark className="w-4 h-4" /></button>
          <button className="p-2 hover:text-primary transition-colors" aria-label="Audio"><Headphones className="w-4 h-4" /></button>
          <button className="p-2 hover:text-primary transition-colors" aria-label="Print"><Printer className="w-4 h-4" /></button>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-[1400px] mx-auto px-6 mt-12 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 lg:col-start-2">
          <div className="font-serif text-[19px] leading-[1.75] text-foreground">
            {article.body?.map((p: string, i: number) => (
              <p key={i} className={`mb-6 ${i === 0 ? "drop-cap text-[20px]" : ""}`}>
                {p}
              </p>
            ))}

            {article.pullQuote && (
              <blockquote className="pull-quote">"{article.pullQuote}"</blockquote>
            )}

            <h3 className="font-serif text-2xl font-bold mt-12 mb-4">Un marché en transition</h3>
            <p className="mb-6">
              Les chiffres ne racontent qu'une partie de l'histoire. Sous les variations de prix quotidiennes se cache une
              transformation plus lente : une nouvelle génération d'intermédiaires, de dépositaires et de références est en train d'être construite,
              testée et, dans bien des cas, silencieusement intégrée dans les processus des institutions établies.
            </p>

            <ul className="font-sans text-base list-disc pl-6 mb-8 space-y-2 text-foreground/90">
              <li>Les actifs sous gestion des ETF spot ont augmenté pour le sixième mois consécutif.</li>
              <li>Les primes de conservation se sont fortement réduites à mesure que les prestataires réglementés gagnent des parts de marché.</li>
              <li>Les produits du Trésor tokennisés dépassent maintenant 4,2 milliards de dollars en souscriptions cumulatives.</li>
            </ul>

            <figure className="my-10">
              <img src="https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1400&q=80" alt="Chart" className="w-full" />
              <figcaption className="mt-2 text-xs text-muted-foreground italic">
                Figure 1. Flux hebdomadaires nets vers les produits d'actifs numériques cotés aux États-Unis, sur 12 semaines glissantes.
              </figcaption>
            </figure>

            <p className="mb-6">
              Ce qui reste incertain, c'est la longue traîne du marché - les milliers de plateformes, jetons
              et protocoles plus petits dont le rôle dans la prochaine phase d'intégration institutionnelle est loin d'être clair.
            </p>
          </div>

          {/* Author bio */}
          <section className="mt-14 border-t-[3px] border-double border-foreground pt-8 flex gap-5">
            <img src={author.avatar} alt={author.name} className="w-20 h-20 rounded-full object-cover" />
            <div>
              <div className="eyebrow text-primary">À propos de l'auteur</div>
              <Link to="/author/$slug" params={{ slug: author.slug }}>
                <h4 className="font-serif text-2xl font-bold mt-1 hover:text-primary transition-colors">{author.name}</h4>
              </Link>
              <div className="byline">{author.role}</div>
              <p className="mt-2 text-muted-foreground leading-relaxed">{author.bio}</p>
            </div>
          </section>

          {/* Comments */}
          <section className="mt-14">
            <h3 className="eyebrow border-b-2 border-foreground pb-2 mb-5">Commentaires des lecteurs · 24</h3>
            <div className="space-y-6">
              {[
                { name: "M. Halverson", text: "Un article mesuré et rigoureux. L'évolution de la qualité de la conservation est vraiment sous-rapportée." },
                { name: "R. Iyengar", text: "Il vaut la peine de coupler cela avec la note de recherche de la semaine dernière sur les bons du Trésor tokennisés." },
              ].map((c) => (
                <div key={c.name} className="border-l-2 border-primary pl-4">
                  <div className="font-medium text-sm">{c.name}</div>
                  <p className="text-muted-foreground text-sm mt-1">{c.text}</p>
                </div>
              ))}
            </div>
            <button className="mt-6 text-xs uppercase tracking-widest border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors">
              Rejoindre la conversation
            </button>
          </section>
        </div>

        <aside className="lg:col-span-3 lg:col-start-10">
          <Sidebar />
        </aside>
      </div>

      {/* Related */}
      <section className="max-w-[1400px] mx-auto px-6 mt-20">
        <h3 className="eyebrow border-b-2 border-foreground pb-2 mb-6">Histoires similaires</h3>
        <div className="grid md:grid-cols-3 gap-7">
          {related.map((a) => (
            <ArticleRow key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <div className="mt-20">
        <NewsletterCTA />
      </div>
    </article>
  );
}
