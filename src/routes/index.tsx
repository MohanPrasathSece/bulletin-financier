import { createFileRoute } from "@tanstack/react-router";
import { Clock, ChevronRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rapport spécial : Comment une icône suisse a découvert l'avenir de la finance" },
      {
        name: "description",
        content: "Un éminent influenceur suisse rompt le silence sur le nouveau système financier qui a tout changé.",
      },
    ],
  }),
  component: AdvertorialHome,
});

function AdvertorialHome() {
  const ctaLink = "/enquiry";

  return (
    <div className="bg-[#fcfaf8] text-black min-h-screen font-serif flex flex-col">
      <Header />
      <main className="flex-1 max-w-[1400px] mx-auto px-4 pt-6 pb-20">
        
        {/* Main Newspaper Grid */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* LEFT SIDEBAR (Congestion) */}
          <div className="w-full lg:w-[200px] xl:w-[250px] shrink-0 space-y-6 lg:border-r border-black pr-6">
            <div className="border-t-4 border-black pt-2">
              <h4 className="font-bold text-sm uppercase tracking-widest mb-3 border-b-2 border-black pb-1">Liens rapides</h4>
              <ul className="space-y-3 text-[13px] font-sans font-medium">
                {["Données de marché en direct", "Calculatrice crypto", "Top 10 des secrets", "Newsletter d'initiés", "Rejoindre le groupe VIP", "Derniers témoignages", "Taux de réussite de 98%", "Créer un compte", "Preuves de retrait", "Recommandations de célébrités"].map(item => (
                  <li key={item}>
                    <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-red-600 transition-colors">
                      <ChevronRight className="w-3 h-3 mr-1 text-red-600" /> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="block relative group overflow-hidden border border-black p-1 bg-white">
              <img src="https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&q=80&w=300&h=600" alt="Ad" className="w-full h-[300px] object-cover grayscale group-hover:grayscale-0 transition-all" />
              <div className="p-2 text-center border-t border-black mt-1">
                <span className="font-bold text-sm leading-tight block">Multipliez votre richesse aujourd'hui</span>
                <span className="text-red-600 text-[10px] font-bold mt-1 uppercase block">Cliquez ici</span>
              </div>
            </a>
          </div>

          {/* MAIN ARTICLE */}
          <article className="flex-1 min-w-0">
            <div className="border-b-4 border-black pb-4 mb-6">
              <h1 className="font-black text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
                RAPPORT SPÉCIAL : Le dernier investissement de Lukas Weber laisse les experts sans voix
              </h1>
              <h2 className="mt-4 text-xl md:text-2xl italic text-gray-700 leading-snug">
                L'éminent influenceur et entrepreneur suisse a été surpris lors d'une émission en direct révélant accidentellement le système exact qu'il utilise pour générer des revenus passifs.
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-300 pb-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden grayscale border border-gray-400">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150" alt="Markus Becker" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-sm uppercase tracking-wider">Par Markus Becker</div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 font-sans">
                    <span>Publié : Aujourd'hui</span>
                    <span>|</span>
                    <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" /> 12 min de lecture</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 font-sans">
                 <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase bg-blue-600 text-white px-2 py-1 font-bold rounded-sm hover:bg-blue-700">Facebook</a>
                 <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase bg-sky-500 text-white px-2 py-1 font-bold rounded-sm hover:bg-sky-600">Twitter</a>
              </div>
            </div>

            <div className="space-y-6 text-[17px] leading-relaxed text-gray-900 columns-1 md:columns-2 gap-8">
              <div className="relative mb-6 break-inside-avoid">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=1200&h=600" 
                  alt="Swiss Influencer" 
                  className="w-full h-[250px] object-cover border border-gray-300 sepia-[.3]"
                />
                <div className="text-[11px] text-gray-500 mt-1 font-sans border-b border-gray-200 pb-2">
                  Ci-dessus : Lukas Weber discute de ses stratégies financières lors d'une récente apparition télévisée.
                </div>
              </div>
              
              <p className="first-letter:text-6xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                L'influenceur suisse Lukas Weber s'est fait un nom en partageant son style de vie luxueux et ses entreprises. Mais lors d'une récente interview en direct à la télévision nationale, il a dévié du scénario et a partagé une "faille de richesse" qui, selon lui, peut transformer la situation financière de quiconque en quelques mois.
              </p>

              <p>
                L'émission devait se concentrer sur ses récents efforts philanthropiques. Cependant, lorsque l'animateur l'a pressé de dire comment il continuait à financer ses projets malgré les ralentissements économiques mondiaux, Weber a lâché une bombe. Il a admis que sa récente richesse massive ne provenait pas d'accords de marque ou de ses startups technologiques, mais d'un système automatisé très secret.
              </p>

              <div className="text-center my-8 border-t-2 border-b-2 border-red-600 py-6 break-inside-avoid bg-red-50">
                <a 
                  href={ctaLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-3/4 bg-red-600 text-white font-sans font-black uppercase tracking-widest px-6 py-4 text-sm hover:bg-red-700 transition-colors shadow-md animate-pulse"
                >
                  Regardez le clip vidéo supprimé maintenant ➔
                </a>
                <p className="text-[11px] font-sans text-red-800 mt-2 font-bold">Avertissement : Vidéo disponible uniquement pour les utilisateurs inscrits.</p>
              </div>

              <blockquote className="border-l-4 border-black pl-4 py-2 my-6 italic text-xl font-medium bg-gray-100 p-4 break-inside-avoid">
                "Je ne compte plus sur les banques traditionnelles ou les portefeuilles d'actions standards. C'est un jeu truqué contre la personne moyenne. J'utilise un nouveau système automatisé d'actifs numériques, et il fait tout le gros du travail."
              </blockquote>

              <p>
                L'animateur, visiblement choqué, a essayé de changer de sujet, mais le mal était fait. En quelques minutes, le clip est devenu viral sur les réseaux sociaux, des milliers de résidents suisses se précipitant pour trouver la plateforme mentionnée par Weber.
              </p>

              <h3 className="font-black text-2xl mt-8 mb-3 uppercase tracking-wide break-inside-avoid">Le pouvoir de l'automatisation</h3>

              <p>
                Ce à quoi Weber faisait référence est un protocole avancé, piloté par l'IA, qui scanne les marchés mondiaux en quelques millisecondes. Contrairement aux traders humains, qui ont besoin de sommeil et sont sujets à des décisions émotionnelles, ce système fonctionne froidement et efficacement 24 heures sur 24, 7 jours sur 7.
              </p>
              
              <p>
                "Il ne s'agit pas seulement de gagner de l'argent quand le marché est en hausse", a expliqué Weber hors caméra à nos producteurs plus tard. "La vraie magie de ce logiciel est qu'il peut profiter des tendances à la baisse tout aussi efficacement. Il vend à découvert le marché automatiquement, ce qui signifie qu'il génère des rendements indépendamment des conditions économiques."
              </p>

              <div className="grid grid-cols-2 gap-4 my-8 font-sans break-inside-avoid">
                <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-black p-4 text-center hover:bg-black hover:text-white transition-colors">
                  <h5 className="font-bold text-sm mb-1 uppercase tracking-wider">Vérifier l'éligibilité</h5>
                  <p className="text-[10px] text-gray-500 uppercase">Prend 30 secondes</p>
                </a>
                <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-black p-4 text-center hover:bg-black hover:text-white transition-colors">
                  <h5 className="font-bold text-sm mb-1 uppercase tracking-wider">Calculatrice de profits</h5>
                  <p className="text-[10px] text-gray-500 uppercase">Estimer les gains</p>
                </a>
              </div>

              <h3 className="font-black text-2xl mt-8 mb-3 uppercase tracking-wide break-inside-avoid">Nous avons enquêté sur la plateforme</h3>
              
              <p>
                Notre équipe éditoriale ne pouvait pas ignorer le buzz, nous avons donc décidé de tester cette soi-disant "faille" par nous-mêmes. Ce que nous avons trouvé est un protocole de trading avancé conçu pour analyser les tendances du marché et exécuter des transactions rentables de manière autonome.
              </p>

              <div className="flex flex-col gap-4 my-6 p-4 bg-gray-100 border border-gray-300 break-inside-avoid">
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=300&h=200" 
                  alt="Crypto growth chart" 
                  className="w-full h-[150px] object-cover border border-gray-400 grayscale"
                />
                <div>
                  <h4 className="font-bold text-base mb-2 uppercase">Résultats vérifiés</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Notre rédacteur technique en chef a déposé le montant minimum et a laissé le système fonctionner pendant 7 jours. Les résultats ont été vérifiés par des tiers indépendants et ont montré des rendements quotidiens constants.
                  </p>
                  <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-red-600 hover:underline font-sans">
                    Lire la décomposition technique complète ➔
                  </a>
                </div>
              </div>

              <p>
                "J'étais sceptique au début", admet notre rédacteur en chef, Julian. "J'ai examiné des centaines de plateformes financières. Mais quand j'ai vérifié mon solde le troisième jour et que j'ai vu une augmentation de 34 % sans rien faire, j'ai réalisé que c'était complètement différent de tout ce qui est actuellement disponible pour les investisseurs particuliers."
              </p>

              <div className="bg-black text-white p-6 mt-10 text-center break-inside-avoid">
                <div className="text-red-500 font-sans font-bold text-xs uppercase tracking-widest mb-2 border-b border-red-500 pb-1 inline-block">Mise à jour urgente</div>
                <h3 className="text-2xl font-black mb-3">Les inscriptions ferment bientôt</h3>
                <p className="mb-5 text-sm text-gray-300">
                  En raison de la forte attention médiatique, nous ne pouvons garantir l'accès que pour les prochaines heures.
                </p>
                <a 
                  href={ctaLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-red-600 text-white font-sans font-black uppercase tracking-widest py-4 text-sm hover:bg-red-700 transition-colors"
                >
                  Créez votre compte maintenant
                </a>
              </div>
            </div>
          </article>

          {/* RIGHT SIDEBAR (Congestion) - FIXED OVERLAP */}
          <div className="w-full lg:w-[250px] xl:w-[300px] shrink-0 space-y-8 lg:border-l border-black pl-6">
             {/* Extra Sidebar Ad */}
             <div className="bg-gray-100 border border-gray-300 p-4 text-center font-sans border-t-4 border-t-red-600">
               <span className="text-[10px] font-bold uppercase text-red-600 tracking-widest mb-2 block">Contenu sponsorisé</span>
               <h4 className="font-black text-lg mb-2 text-black">L'actif n°1 de 2026 ?</h4>
               <img src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=300&h=200" alt="Asset" className="w-full h-[120px] object-cover my-3 grayscale border border-gray-400" />
               <p className="text-xs text-gray-600 mb-4">Les experts prédisent une hausse massive. Ne manquez pas la prochaine grande vague.</p>
               <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="block bg-black text-white text-[11px] font-bold uppercase py-3 hover:bg-red-600 transition-colors">
                 Obtenez le rapport gratuit
               </a>
             </div>

             <div className="border-t-4 border-black pt-2">
                <h4 className="font-bold text-sm uppercase tracking-widest mb-3 border-b-2 border-black pb-1">Actualités en tendance</h4>
                <div className="space-y-4 font-sans">
                  {[
                    { title: "Le PDG d'une banque démissionne après la sortie de ce système", img: "https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80&w=150&h=150" },
                    { title: "Comment prendre sa retraite à 40 ans avec cette stratégie", img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=150&h=150" },
                    { title: "La vérité sur la crise financière actuelle", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=150&h=150" },
                    { title: "Pourquoi les milliardaires accumulent cet actif", img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=150&h=150" },
                    { title: "La vérité choquante derrière les taux d'inflation", img: "https://images.unsplash.com/photo-1590283603385-18ff38540843?auto=format&fit=crop&q=80&w=150&h=150" }
                  ].map((article, i) => (
                    <a key={i} href={ctaLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group border-b border-gray-200 pb-3 last:border-0">
                      <img src={article.img} alt={article.title} className="w-16 h-16 object-cover grayscale group-hover:grayscale-0 transition-all border border-gray-300 shrink-0" />
                      <div>
                        <h5 className="text-[13px] font-bold leading-snug group-hover:text-red-600 transition-colors text-black">{article.title}</h5>
                        <span className="text-[10px] text-gray-500 mt-1 block uppercase">Temps de lecture : {Math.floor(Math.random() * 5) + 3} min</span>
                      </div>
                    </a>
                  ))}
                </div>
             </div>
          </div>

        </div>

        {/* BOTTOM RECOMMENDED ARTICLES - Newspaper style */}
        <section className="mt-12 border-t-4 border-black pt-6">
          <div className="flex items-center justify-between mb-6 border-b border-black pb-2">
            <h3 className="font-black text-2xl uppercase tracking-widest">Recommandé pour vous</h3>
            <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="text-[11px] font-sans font-bold uppercase tracking-widest text-red-600 hover:underline">Voir toutes les histoires</a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 font-sans">
            {[
              { img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=300&h=200", title: "5 cryptos à acheter avant le prochain Bull Run", tag: "Investissement" },
              { img: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=300&h=200", title: "Comment un jeune de 22 ans a gagné des millions en 6 mois", tag: "Histoires de réussite" },
              { img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=300&h=200", title: "Le système bancaire secret que les élites vous cachent", tag: "Révélé" },
              { img: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80&w=300&h=200", title: "Le Bitcoin est-il mort ? Pourquoi ce nouveau jeton prend le relais", tag: "Marchés" },
              { img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=300&h=200", title: "Top 10 des sources de revenus passifs pour 2026", tag: "Finance" },
              { img: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=300&h=200", title: "Un ex-banquier révèle ce qu'ils cachent", tag: "Initié" },
              { img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=300&h=200", title: "Dettes de carte de crédit ? Utilisez cette astuce maintenant", tag: "Conseils" },
              { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=300&h=200", title: "Le prochain Apple ? Cette startup change tout", tag: "Tech" }
            ].map((article, idx) => (
              <a href={ctaLink} target="_blank" rel="noopener noreferrer" key={idx} className="group block">
                <img src={article.img} alt={article.title} className="w-full h-32 object-cover grayscale group-hover:grayscale-0 transition-all border border-black mb-2" />
                <span className="text-[10px] font-bold uppercase text-red-600 mb-1 block tracking-wider">{article.tag}</span>
                <h4 className="font-serif font-bold text-base leading-tight group-hover:text-red-600 transition-colors text-black">{article.title}</h4>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
