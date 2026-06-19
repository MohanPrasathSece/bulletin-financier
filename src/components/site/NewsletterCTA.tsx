export function NewsletterCTA({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={`bg-foreground text-background ${compact ? "p-8" : "px-6 py-16 md:py-20"}`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="eyebrow opacity-70" style={{ color: "var(--gold)" }}>
          The Daily Brief
        </div>
        <h2
          className={`font-serif font-black tracking-tight mt-3 ${
            compact ? "text-3xl" : "text-4xl md:text-5xl"
          }`}
        >
          Stay Ahead of the Crypto Markets
        </h2>
        <p className="mt-4 text-background/70 max-w-xl mx-auto leading-relaxed">
          A morning briefing on the markets, policy and technology shaping the
          digital asset economy. Delivered to your inbox before the open.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-transparent border border-background/40 px-4 py-3 text-sm placeholder:text-background/40 focus:outline-none focus:border-background"
          />
          <button
            type="submit"
            className="bg-background text-foreground px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-xs text-background/50">
          Free. Unsubscribe in a single click. We never share your email.
        </p>
      </div>
    </section>
  );
}
