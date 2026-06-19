import { createFileRoute } from "@tanstack/react-router";
import { AUTHORS } from "@/lib/mock-data";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Ledger Standard" },
      { name: "description", content: "Independent journalism on cryptocurrency, capital markets and policy." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="eyebrow text-primary">About Us</div>
        <h1 className="headline-xl text-5xl md:text-6xl mt-3">
          Serious journalism for a serious asset class.
        </h1>
        <p className="mt-6 font-serif italic text-xl text-muted-foreground leading-snug">
          The Ledger Standard is an independent digital publication covering cryptocurrency,
          capital markets and the policy frameworks shaping the digital asset economy.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16 font-serif text-[18px] leading-[1.8]">
        <p className="drop-cap">
          We were founded in 2021 by a small group of journalists who had previously
          reported on global finance for the Financial Times, Bloomberg and Reuters.
          We believed then, and we believe now, that the digital asset economy deserves
          the same standard of reporting that other financial markets have long enjoyed.
        </p>
        <p className="mt-6">
          We publish news, investigations, opinion, research and conversations with the
          people who shape this industry — from regulators and central bankers to the
          builders, traders and allocators who use this market every day.
        </p>
        <p className="mt-6">
          Our editorial standards are deliberately conservative. We do not accept payment
          for coverage. We disclose every conflict of interest. We correct errors openly,
          and quickly. Above all, we try to write for readers who are willing to spend
          ten minutes with a story.
        </p>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 pb-24">
        <h2 className="eyebrow border-b-2 border-foreground pb-2 mb-8">Our Editorial Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {AUTHORS.map((a) => (
            <Link key={a.slug} to="/author/$slug" params={{ slug: a.slug }} className="group">
              <img src={a.avatar} alt={a.name} className="w-full h-72 object-cover" />
              <h3 className="font-serif text-2xl font-bold mt-4 group-hover:text-primary transition-colors">{a.name}</h3>
              <div className="eyebrow text-primary mt-1">{a.role}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.bio}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
