import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Ledger Standard" },
      { name: "description", content: "Get in touch with our editorial team, advertising, or careers." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <header className="text-center border-b-[3px] border-double border-foreground pb-8">
        <div className="eyebrow text-primary">Get in Touch</div>
        <h1 className="headline-xl text-5xl md:text-6xl mt-3">Contact the newsroom.</h1>
      </header>

      <div className="grid md:grid-cols-2 gap-12 mt-14">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          {[
            { label: "Your Name", type: "text" },
            { label: "Email Address", type: "email" },
            { label: "Subject", type: "text" },
          ].map((f) => (
            <label key={f.label} className="block">
              <span className="eyebrow text-muted-foreground">{f.label}</span>
              <input type={f.type} className="mt-2 w-full bg-card border border-border px-4 py-3 focus:outline-none focus:border-primary" />
            </label>
          ))}
          <label className="block">
            <span className="eyebrow text-muted-foreground">Message</span>
            <textarea rows={6} className="mt-2 w-full bg-card border border-border px-4 py-3 focus:outline-none focus:border-primary resize-none" />
          </label>
          <button className="text-xs uppercase tracking-widest bg-foreground text-background px-6 py-3 hover:bg-primary transition-colors">
            Send Message
          </button>
        </form>
        <div className="space-y-8 font-serif text-lg">
          {[
            { h: "Newsroom Tips", v: "tips@ledgerstandard.example", sub: "Confidential. Signal available on request." },
            { h: "Editorial Inquiries", v: "editors@ledgerstandard.example" },
            { h: "Advertising", v: "advertising@ledgerstandard.example" },
            { h: "Careers", v: "careers@ledgerstandard.example" },
            { h: "Press", v: "press@ledgerstandard.example" },
          ].map((b) => (
            <div key={b.h} className="border-l-2 border-primary pl-5">
              <div className="eyebrow text-primary">{b.h}</div>
              <div className="mt-1">{b.v}</div>
              {b.sub && <div className="byline mt-1">{b.sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
