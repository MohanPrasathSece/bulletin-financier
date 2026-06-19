import { createFileRoute } from "@tanstack/react-router";
import { NewsletterCTA } from "@/components/site/NewsletterCTA";

export const Route = createFileRoute("/newsletter")({
  head: () => ({
    meta: [
      { title: "The Daily Brief — Newsletter | The Ledger Standard" },
      { name: "description", content: "Subscribe to the morning briefing on crypto, markets and policy." },
    ],
  }),
  component: () => (
    <div>
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="eyebrow text-primary">Our Newsletters</div>
        <h1 className="headline-xl text-5xl md:text-6xl mt-3">A morning briefing for serious readers.</h1>
        <p className="mt-6 font-serif italic text-xl text-muted-foreground leading-snug">
          Four newsletters covering markets, policy, research and the weekly editorial roundup.
          Written by our editors. Free to read.
        </p>
      </section>
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6 mb-16">
        {[
          { name: "The Daily Brief", desc: "A pre-market summary of the most important crypto news, sent at 06:30 ET." , freq: "Daily"},
          { name: "Policy Watch", desc: "Weekly intelligence on regulatory developments across the major jurisdictions." , freq: "Weekly"},
          { name: "Research Notes", desc: "Long-form market structure analysis from our research desk.", freq: "Monthly" },
          { name: "The Weekly Outlook", desc: "Editor's letter and a look at the week ahead in digital assets.", freq: "Weekly" },
        ].map((n) => (
          <div key={n.name} className="bg-card border border-border p-7 card-lift">
            <div className="eyebrow text-primary">{n.freq}</div>
            <h3 className="font-serif text-2xl font-bold mt-2">{n.name}</h3>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{n.desc}</p>
            <button className="mt-5 text-xs uppercase tracking-widest border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors">
              Subscribe
            </button>
          </div>
        ))}
      </div>
      <NewsletterCTA />
    </div>
  ),
});
