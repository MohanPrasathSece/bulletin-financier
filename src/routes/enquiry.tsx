import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, FormEvent } from "react";

// Server function for CRM submission
const submitToCRM = async (data: { [key: string]: string }) => {
  const CRM_API_URL = import.meta.env.VITE_CRM_API_URL;
  const CRM_API_TOKEN = import.meta.env.VITE_CRM_API_TOKEN;

  if (!CRM_API_URL || !CRM_API_TOKEN) {
    throw new Error("CRM configuration missing");
  }

  const fullName = (data.name || "").trim();
  const nameParts = fullName.split(" ");
  const firstName = nameParts[0] || "Unknown";
  const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "Unknown";

  const payload = {
    first_name: firstName,
    last_name: lastName,
    email: data.email,
    phone: data.phone,
    country_name: "US", // Default or extract if needed
    description: data.message || "No message provided",
    custom_fields: {
      Source_ID: "Crypto Platform Enquiries"
    }
  };

  const response = await fetch(CRM_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "authorization": CRM_API_TOKEN
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const text = await response.text();
    console.error("CRM Error:", text);
    throw new Error("Failed to submit to CRM");
  }

  return { success: true };
};

export const Route = createFileRoute("/enquiry")({
  head: () => ({
    meta: [
      { title: "Plateforme de trading quantique | S'inscrire maintenant" },
      { name: "description", content: "Rejoignez l'avenir du trading algorithmique décentralisé." },
    ]
  }),
  component: EnquiryPage,
});

// Helper component for scroll animations
function FadeInSection({ children, delay = "0ms", className = "" }: { children: React.ReactNode, delay?: string, className?: string }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(domRef.current!);
      }
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
}

function EnquiryPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const dataObj = Object.fromEntries(formData.entries()) as { [key: string]: string };
    
    try {
      await submitToCRM(dataObj);
      setSuccess(true);
    } catch (err: any) {
      setError("L'inscription a échoué. Veuillez réessayer plus tard.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden relative selection:bg-cyan-500/30 flex flex-col">
      
      {/* Animated Background Elements */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-600/10 blur-[120px] animate-pulse pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-600/10 blur-[150px] animate-pulse pointer-events-none" style={{ animationDelay: "2s" }} />
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none mix-blend-overlay"></div>

      {/* Custom Crypto Header */}
      <header className="relative z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center font-black text-black">Q</div>
            <span className="font-bold tracking-widest uppercase text-sm">Protocole Quantique</span>
          </div>
          <nav className="hidden md:flex gap-6 text-xs uppercase tracking-widest font-bold text-gray-400">
            <a href="#platform" className="hover:text-cyan-400 transition-colors">Plateforme</a>
            <a href="#algorithm" className="hover:text-cyan-400 transition-colors">Algorithme</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Hero & Form Section */}
      <main className="flex-1 relative">
        <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Crypto Value Prop */}
          <div className="space-y-8 relative">
            <FadeInSection>
              <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest backdrop-blur-sm relative z-10">
                Accéder au réseau quantique
              </div>
            </FadeInSection>
            
            <FadeInSection delay="100ms">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tighter relative z-10">
                Tradez le <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 animate-gradient-x">
                  Futur Aujourd'hui.
                </span>
              </h1>
            </FadeInSection>
            
            <FadeInSection delay="200ms">
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg relative z-10">
                Rejoignez plus de 14 000 traders d'élite utilisant nos algorithmes d'IA propriétaires pour exécuter des transactions crypto à haute fréquence avec une précision de 98%.
              </p>
            </FadeInSection>

            {/* Fake Live Stats Grid */}
            <FadeInSection delay="300ms">
              <div className="grid grid-cols-2 gap-6 pt-6 relative z-10">
                <div className="border border-white/10 bg-white/5 p-4 rounded-2xl backdrop-blur-md hover:scale-105 hover:bg-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300 animate-[float_4s_ease-in-out_infinite]">
                  <div className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-1">Volume sur 24h</div>
                  <div className="text-3xl font-black font-mono tracking-tighter">$2.4B+</div>
                  <div className="text-green-400 text-xs mt-2 font-mono">▲ 14,2% depuis hier</div>
                </div>
                <div className="border border-white/10 bg-white/5 p-4 rounded-2xl backdrop-blur-md hover:scale-105 hover:bg-white/10 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300 animate-[float_5s_ease-in-out_infinite_reverse]">
                  <div className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-1">Nœuds d'IA actifs</div>
                  <div className="text-3xl font-black font-mono tracking-tighter">1 024</div>
                  <div className="text-cyan-400 text-xs mt-2 font-mono">�-� Tous les systèmes sont opérationnels</div>
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* Right Side: Contact Form */}
          <FadeInSection delay="400ms">
            <div className="relative hover:scale-[1.01] transition-transform duration-500" id="contact">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-cyan-500 via-purple-500 to-transparent rounded-3xl opacity-50 blur-sm animate-pulse"></div>
              
              <div className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_0_50px_rgba(34,211,238,0.1)] backdrop-blur-xl">
                <h2 className="text-3xl font-black mb-2">Contactez-nous</h2>
                <p className="text-gray-400 text-sm mb-8">Contactez notre équipe de trading d'élite.</p>

                {success ? (
                  <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-6 rounded-xl text-center space-y-4 animate-in zoom-in duration-500">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto animate-bounce">
                      <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Message envoyé</h3>
                    <p className="text-sm opacity-80">Nous avons bien reçu votre demande. Un conseiller vous contactera sous peu.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 group">
                    {error && (
                      <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm animate-in slide-in-from-top-2">
                        {error}
                      </div>
                    )}
                    
                    <div className="group-hover:translate-x-1 transition-transform">
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Nom complet</label>
                      <input 
                        name="name" 
                        required 
                        placeholder="Satoshi Nakamoto"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent focus:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all" 
                      />
                    </div>
                    
                    <div className="group-hover:translate-x-1 transition-transform" style={{ transitionDelay: "50ms" }}>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">E-mail sécurisé</label>
                      <input 
                        name="email" 
                        type="email" 
                        required 
                        placeholder="satoshi@bitcoin.org"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent focus:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all" 
                      />
                    </div>
                    
                    <div className="group-hover:translate-x-1 transition-transform" style={{ transitionDelay: "100ms" }}>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Numéro de mobile</label>
                      <input 
                        name="phone" 
                        type="tel" 
                        required 
                        placeholder="+41 79 123 45 67"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent focus:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all" 
                      />
                    </div>
                    
                    <div className="group-hover:translate-x-1 transition-transform" style={{ transitionDelay: "150ms" }}>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Comment pouvons-nous vous aider ? (Facultatif)</label>
                      <textarea 
                        name="message" 
                        rows={2} 
                        placeholder="Ex. : À la recherche de stratégies d'investissement..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent focus:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all resize-none" 
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={loading}
                      className="w-full relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 p-[1px] disabled:opacity-50 hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-50 hover:opacity-100 transition-opacity blur-md animate-pulse"></div>
                      <div className="relative bg-[#0a0a0a] hover:bg-transparent transition-colors rounded-xl px-6 py-4 flex items-center justify-center">
                        <span className="font-bold text-white uppercase tracking-widest">
                          {loading ? "Envoi en cours..." : "Envoyer le message"}
                        </span>
                      </div>
                    </button>
                    <p className="text-center text-[10px] text-gray-500 uppercase tracking-wider mt-4">
                      En soumettant, vous acceptez nos conditions et notre politique de confidentialité
                    </p>
                  </form>
                )}
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* 3D Bitcoin Section */}
        <section className="relative z-10 py-24 bg-gradient-to-b from-[#050505] to-[#0a0a0a] border-t border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <FadeInSection className="order-2 md:order-1 flex justify-center">
              <div className="w-64 h-64 md:w-96 md:h-96 relative animate-[float_6s_ease-in-out_infinite]" style={{ perspective: '1200px' }}>
                <div className="w-full h-full relative animate-spin-y drop-shadow-[0_0_80px_rgba(247,147,26,0.6)]">
                  <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=032" alt="Bitcoin" className="w-full h-full object-contain absolute inset-0" />
                  <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=032" alt="Bitcoin Back" className="w-full h-full object-contain absolute inset-0 filter brightness-50" style={{ transform: 'translateZ(-1px) rotateY(180deg)' }} />
                </div>
              </div>
            </FadeInSection>
            <div className="space-y-6 order-1 md:order-2">
              <FadeInSection delay="100ms">
                <h2 className="text-4xl md:text-5xl font-black">L'étalon-or <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">numérique.</span></h2>
              </FadeInSection>
              <FadeInSection delay="200ms">
                <p className="text-gray-400 text-lg leading-relaxed">
                  Le Bitcoin est plus qu'une simple monnaie ; c'est le fondement de la nouvelle économie décentralisée. Nos algorithmes quantiques sont spécifiquement optimisés pour le trading de paires BTC sur les marchés mondiaux avec une précision inégalée et un glissement minimal.
                </p>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Trading Terminal Section */}
        <section id="platform" className="relative z-10 py-24 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <FadeInSection delay="100ms">
                <h2 className="text-4xl md:text-5xl font-black">Exécution en <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">direct.</span></h2>
              </FadeInSection>
              <FadeInSection delay="200ms">
                <p className="text-gray-400 text-lg leading-relaxed">
                  Regardez notre terminal quantique exclusif identifier les opportunités d'arbitrage et exécuter des micro-transactions en temps réel. Ce que vous voyez, c'est notre moteur d'apprentissage profond qui scrute en permanence les pools de liquidité décentralisés.
                </p>
              </FadeInSection>
            </div>
            <FadeInSection className="flex justify-center md:justify-end" delay="300ms">
              <div className="w-full max-w-[500px] h-[350px] bg-[#050505] border border-cyan-500/50 rounded-xl shadow-[0_0_80px_rgba(34,211,238,0.2)] backdrop-blur-xl overflow-hidden transform perspective-1000 rotateY-[-10deg] rotateX-[5deg] hover:rotateY-0 hover:rotateX-0 transition-transform duration-700">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs uppercase font-mono text-gray-500 ml-2 tracking-widest">Quantum_Terminal_v4.2</span>
                </div>
                <div className="p-6 font-mono text-xs md:text-sm space-y-4 overflow-hidden h-full relative text-gray-300">
                  <div className="flex justify-between text-green-400 animate-pulse">
                    <span>&gt; INITIALIZING_QUANTUM_CORE...</span>
                    <span>[OK]</span>
                  </div>
                  <div className="flex justify-between text-cyan-400 opacity-80" style={{ animation: 'fade-up 2s infinite' }}>
                    <span>&gt; BUY_BTC 12.5 @ 64,210.00</span>
                    <span>EXECUTING...</span>
                  </div>
                  <div className="flex justify-between text-purple-400 opacity-60" style={{ animation: 'fade-up 3s infinite' }}>
                    <span>&gt; SELL_ETH 150 @ 3,450.20</span>
                    <span>EXECUTING...</span>
                  </div>
                  <div className="flex justify-between text-yellow-400 opacity-90" style={{ animation: 'fade-up 4s infinite' }}>
                    <span>&gt; ARBITRAGE_DETECTED [DEX/CEX]</span>
                    <span>PROFIT: +1.8%</span>
                  </div>
                  <div className="flex justify-between text-green-500" style={{ animation: 'fade-up 5s infinite' }}>
                    <span>&gt; AUTO_COMPOUND_ENGAGED</span>
                    <span>[ACTIVE]</span>
                  </div>
                  
                  {/* Simulated Chart Bars */}
                  <div className="absolute bottom-6 left-6 right-6 h-24 flex items-end gap-2 opacity-60">
                    {[40, 70, 45, 90, 60, 85, 50, 100, 75, 65, 80, 55].map((h, i) => (
                      <div key={i} className={`flex-1 rounded-t-sm ${i % 2 === 0 ? 'bg-green-500' : 'bg-red-500'}`} style={{ 
                        height: `${h}%`, 
                        animation: `pulse ${1 + i * 0.2}s infinite alternate` 
                      }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Informational Crypto Sections */}
        <section id="algorithm" className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm py-20">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black mb-4">Propulsé par le <span className="text-cyan-400">Deep Learning</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Nos réseaux de neurones analysent des téraoctets de données de marché par seconde pour identifier des opportunités d'arbitrage rentables sur les échanges décentralisés.</p>
              </div>
            </FadeInSection>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Exécution sans latence", desc: "Des serveurs colocalisés garantissent que vos transactions sont exécutées des fractions de milliseconde avant que le marché ne réagisse.", delay: "0ms" },
                { title: "Chiffrement de niveau militaire", desc: "Vos actifs sont protégés par la cryptographie SHA-256 et des coffres de stockage à froid multi-signatures.", delay: "200ms" },
                { title: "Composition automatisée", desc: "Les contrats intelligents réinvestissent automatiquement vos profits pour maximiser la croissance exponentielle de votre portefeuille.", delay: "400ms" }
              ].map((feature, i) => (
                <FadeInSection key={i} delay={feature.delay}>
                  <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(34,211,238,0.15)] hover:border-cyan-500/30 transition-all duration-300 group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/30 group-hover:scale-110 group-hover:bg-cyan-500/30 transition-transform duration-500">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full group-hover:animate-ping"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{feature.desc}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Custom Crypto Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#050505] py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center font-black text-black text-xs">Q</div>
            <span className="font-bold tracking-widest uppercase text-xs text-gray-500">Protocole Quantique © 2026</span>
          </div>
          
          <div className="flex gap-6 text-[10px] uppercase tracking-widest font-bold text-gray-500">
            <a href="#" className="hover:text-cyan-400 transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Conditions d'utilisation</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Divulgation des risques</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
