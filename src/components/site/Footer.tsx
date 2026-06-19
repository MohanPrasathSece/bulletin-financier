export function Footer() {
  return (
    <footer className="mt-12 border-t-[8px] border-black bg-white text-black font-sans pb-12 pt-10">
      <div className="max-w-[1400px] mx-auto px-4">
        
        {/* Top Footer Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b-2 border-black pb-8 mb-8 gap-6">
          <h2 className="font-serif text-3xl lg:text-4xl font-black tracking-tight uppercase">
            Bulletin Financier
          </h2>
          <div className="flex gap-4">
            <a href="/enquiry" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-3 font-bold uppercase text-xs hover:bg-gray-800 transition-colors">
              S'abonner à la newsletter
            </a>
            <a href="/enquiry" target="_blank" rel="noopener noreferrer" className="border-2 border-black px-6 py-3 font-bold uppercase text-xs hover:bg-black hover:text-white transition-colors">
              Télécharger l'application
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-[13px]">
          {[
            {
              h: "Sections principales",
              items: ["Dernières nouvelles", "À la une", "Tendances", "Affaires", "Marchés", "Économie", "Politique", "Actualités mondiales", "Actualités Tech"]
            },
            {
              h: "Patrimoine et finances",
              items: ["Secrets crypto", "Bourse", "Guides d'investissement", "Revenu passif", "Immobilier", "Finances personnelles", "Retraite", "Impôts"]
            },
            {
              h: "Opinion et éditoriaux",
              items: ["Chroniques d'experts", "Auteurs invités", "Comité de rédaction", "Courrier des lecteurs", "Analyse du marché", "Commentaire politique", "Interviews"]
            },
            {
              h: "Style de vie et culture",
              items: ["Santé et forme physique", "Voyage", "Restauration et gastronomie", "Arts et divertissement", "Livres", "Mode", "Automobile", "Luxe"]
            },
            {
              h: "Services numériques",
              items: ["Accès ePaper", "Applications mobiles", "Newsletters", "Flux RSS", "Podcasts", "Chaîne vidéo", "Direct TV", "Alertes"]
            },
            {
              h: "Infos d'entreprise",
              items: ["À propos de nous", "Nous contacter", "Carrières", "Annoncez avec nous", "Conditions d'utilisation", "Politique de confidentialité", "Politique des cookies", "Plan du site"]
            }
          ].map((col) => (
            <div key={col.h}>
              <h4 className="font-bold uppercase tracking-wider mb-4 border-b border-gray-300 pb-2">{col.h}</h4>
              <ul className="space-y-2.5">
                {col.items.map((label) => (
                  <li key={label}>
                    <a href="/enquiry" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors text-gray-700 hover:underline">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-300 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>Copyright © {new Date().getFullYear()} Bulletin Financier Media Ltd. Tous droits réservés.</p>
          <p className="text-center md:text-right max-w-2xl">
            La reproduction d'articles d'actualité, de photos, de vidéos ou de tout autre contenu, en tout ou en partie, sous quelque forme ou sur quelque support que ce soit, sans l'autorisation écrite expresse de Bulletin Financier est interdite.
          </p>
        </div>
      </div>
    </footer>
  );
}
