import { Link } from "@tanstack/react-router";
import { ARTICLES, EVENTS, FEAR_GREED, PRICES } from "@/lib/mock-data";

function Sparkline({ up }: { up: boolean }) {
  const points = up
    ? "0,18 10,14 20,16 30,10 40,12 50,6 60,8 70,3"
    : "0,4 10,8 20,6 30,12 40,10 50,16 60,14 70,18";
  return (
    <svg viewBox="0 0 70 22" className="w-16 h-5">
      <polyline
        fill="none"
        stroke={up ? "var(--color-primary)" : "var(--color-destructive)"}
        strokeWidth="1.5"
        points={points}
      />
    </svg>
  );
}

export function Sidebar() {
  const trending = ARTICLES.slice(0, 5);
  return (
    <aside className="space-y-10 sticky top-44">
      {/* Prices */}
      <section>
        <h3 className="eyebrow border-b-2 border-foreground pb-2 mb-3">Crypto Prices</h3>
        <ul className="text-sm font-mono">
          {PRICES.slice(0, 6).map((p) => (
            <li key={p.sym} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <span className="font-semibold">{p.sym}</span>
              <Sparkline up={p.d1 >= 0} />
              <span>${p.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
              <span className={`w-16 text-right ${p.d1 >= 0 ? "text-primary" : "text-destructive"}`}>
                {p.d1 >= 0 ? "+" : ""}{p.d1.toFixed(2)}%
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Fear & Greed */}
      <section>
        <h3 className="eyebrow border-b-2 border-foreground pb-2 mb-3">Fear & Greed Index</h3>
        <div className="bg-card border border-border p-5 text-center">
          <div className="text-5xl font-serif font-black text-primary">{FEAR_GREED.value}</div>
          <div className="eyebrow mt-1" style={{ color: "var(--gold)" }}>{FEAR_GREED.label}</div>
          <div className="mt-4 h-2 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-primary" style={{ width: `${FEAR_GREED.value}%` }} />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Updated daily. Source: composite of seven market indicators.
          </p>
        </div>
      </section>

      {/* Trending */}
      <section>
        <h3 className="eyebrow border-b-2 border-foreground pb-2 mb-3">Trending</h3>
        <ol className="space-y-4">
          {trending.map((a, i) => (
            <li key={a.slug} className="flex gap-3">
              <span className="font-serif text-3xl font-black text-muted-foreground/40 leading-none w-7">
                {String(i + 1).padStart(2, "0")}
              </span>
              <a
                href="/enquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif font-semibold text-[15px] leading-snug hover:text-primary transition-colors"
              >
                {a.title}
              </a>
            </li>
          ))}
        </ol>
      </section>

      {/* Events */}
      <section>
        <h3 className="eyebrow border-b-2 border-foreground pb-2 mb-3">Upcoming Events</h3>
        <ul className="space-y-3">
          {EVENTS.map((e) => (
            <li key={e.title} className="flex gap-3 items-start">
              <div className="font-mono text-xs text-primary w-12 shrink-0 pt-0.5">{e.date}</div>
              <div className="text-sm">{e.title}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Ad / Editor's pick */}
      <section className="bg-foreground text-background p-6 text-center">
        <div className="eyebrow opacity-70">Editor's Pick</div>
        <p className="font-serif text-xl mt-2 leading-snug">
          "The boring revolution: how tokenisation became inevitable."
        </p>
        <a
          href="/enquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-xs uppercase tracking-widest border border-background/40 px-4 py-2 hover:bg-background hover:text-foreground transition-colors"
        >
          Read the Essay
        </a>
      </section>
    </aside>
  );
}
