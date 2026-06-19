export function NewsletterCTA({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={`bg-foreground text-background ${compact ? "p-8" : "px-6 py-16 md:py-20"}`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="eyebrow opacity-70" style={{ color: "var(--gold)" }}>
          Le Brief Quotidien
        </div>
        <h2
          className={`font-serif font-black tracking-tight mt-3 ${
            compact ? "text-3xl" : "text-4xl md:text-5xl"
          }`}
        >
          Gardez une longueur d'avance sur les marchés crypto
        </h2>
        <p className="mt-4 text-background/70 max-w-xl mx-auto leading-relaxed">
          Un briefing matinal sur les marchés, la politique et la technologie qui façonnent
          l'économie des actifs numériques. Livré dans votre boîte de réception avant l'ouverture.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="votre@email.com"
            className="flex-1 bg-transparent border border-background/40 px-4 py-3 text-sm placeholder:text-background/40 focus:outline-none focus:border-background"
          />
          <button
            type="submit"
            className="bg-background text-foreground px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            S'abonner
          </button>
        </form>
        <p className="mt-4 text-xs text-background/50">
          Gratuit. Désabonnez-vous en un seul clic. Nous ne partageons jamais votre e-mail.
        </p>
      </div>
    </section>
  );
}
