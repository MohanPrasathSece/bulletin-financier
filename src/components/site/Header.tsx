import { Search, Menu, Facebook, Twitter, Rss, Youtube, Instagram, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const today = new Date().toLocaleDateString("fr-FR", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const advertorialLink = "/enquiry";

  return (
    <header className="bg-white text-black font-sans border-b-2 border-black">
      {/* Top thin bar */}
      <div className="border-b border-gray-200 text-[10px] sm:text-[11px] py-1.5 px-4 flex justify-between items-center max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 md:gap-4 flex-wrap">
          <span className="flex items-center gap-1 font-semibold">Édition <img src="https://flagcdn.com/w20/fr.png" alt="FR" className="w-3" /> FR</span>
          <span className="hidden sm:inline text-gray-300">|</span>
          <span className="hidden sm:inline">Français</span>
          <span className="hidden sm:inline text-gray-300">|</span>
          <span className="text-gray-500">{today} | Mis à jour 12:30 CET</span>
          <span className="hidden md:inline text-gray-300">|</span>
          <span className="hidden md:flex items-center gap-1"><span className="text-lg leading-none">⛅</span> Météo</span>
        </div>
        
        <div className="flex items-center gap-3 md:gap-4">
          <a href={advertorialLink} target="_blank" rel="noopener noreferrer" className="hidden sm:inline font-bold text-red-600 hover:underline">Lire l'ePaper</a>
          <a href={advertorialLink} target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white font-bold px-2 py-0.5 rounded-sm hover:bg-red-700">S'abonner à BF+</a>
          <a href={advertorialLink} target="_blank" rel="noopener noreferrer" className="hidden sm:inline hover:underline text-gray-600">Se connecter</a>
          
          <div className="hidden lg:flex items-center gap-2 text-blue-600">
            <a href={advertorialLink} target="_blank" rel="noopener noreferrer" className="p-1 rounded-full border border-blue-600 hover:bg-blue-50"><Facebook className="w-3 h-3" /></a>
            <a href={advertorialLink} target="_blank" rel="noopener noreferrer" className="p-1 rounded-full border border-gray-800 text-gray-800 hover:bg-gray-50"><Twitter className="w-3 h-3" /></a>
            <a href={advertorialLink} target="_blank" rel="noopener noreferrer" className="p-1 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-50"><Rss className="w-3 h-3" /></a>
            <a href={advertorialLink} target="_blank" rel="noopener noreferrer" className="p-1 rounded-full border border-red-600 text-red-600 hover:bg-red-50"><Youtube className="w-3 h-3" /></a>
            <a href={advertorialLink} target="_blank" rel="noopener noreferrer" className="p-1 rounded-full border border-pink-600 text-pink-600 hover:bg-pink-50"><Instagram className="w-3 h-3" /></a>
            <a href={advertorialLink} target="_blank" rel="noopener noreferrer" className="p-1 rounded-full border border-blue-700 text-blue-700 hover:bg-blue-50"><Linkedin className="w-3 h-3" /></a>
            <a href={advertorialLink} target="_blank" rel="noopener noreferrer" className="p-1 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-50"><Send className="w-3 h-3" /></a>
          </div>
        </div>
      </div>

      {/* Main Logo Area */}
      <div className="py-4 md:py-6 text-center">
        <a href="/" className="inline-block">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black tracking-tight" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            BULLETIN FINANCIER
          </h1>
        </a>
      </div>

      {/* Main Nav */}
      <div className="border-t border-b border-black">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between">
          <nav className="hidden md:block flex-1 overflow-x-auto no-scrollbar">
            <ul className="flex items-center gap-4 lg:gap-6 py-2.5 text-[13px] font-bold whitespace-nowrap">
              {["Ville", "En direct", "Suisse", "Monde", "Affaires", "Sports", "Marchés", "Divertissement", "Auto", "Tech", "Art de vivre", "BF 2026", "Blogs", "EPAPER"].map((l) => (
                <li key={l}>
                  <a
                    href={advertorialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-600 transition-colors uppercase"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="flex items-center gap-4 py-2 md:py-0">
            <a href={advertorialLink} target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center font-black text-[13px] uppercase">
              BF <span className="text-red-600 ml-0.5">+</span>
            </a>
            <button aria-label="Search" className="hover:text-red-600">
              <Search className="w-4 h-4" />
            </button>
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              <Menu className="w-5 h-5" />
            </button>
            <button className="hidden md:block hover:text-red-600">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Sub Nav */}
      <div className="bg-gray-50 border-b border-gray-200 hidden md:block">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center gap-6 py-1.5 text-[11px] font-bold overflow-x-auto no-scrollbar whitespace-nowrap">
          <span className="text-red-600 uppercase">Dans l'actualité</span>
          {["Formule E: Genève", "Prix des créateurs de richesse 2026", "Demandez à un conseiller financier", "Parentologie", "Nouvelles des accords de l'UE", "Dialogue de la diaspora par BF ™", "Écopreneur"].map((l) => (
            <a key={l} href={advertorialLink} target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-700">
              {l} {l.includes("Demandez") || l.includes("Écopreneur") ? <span className="text-[8px] text-red-600 align-top">Nouveau</span> : null}
            </a>
          ))}
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-b border-gray-200 bg-white">
          <ul className="px-6 py-4 space-y-3 font-bold text-sm">
            {["Ville", "En direct", "Suisse", "Monde", "Affaires", "Sports", "Marchés", "Divertissement", "Auto", "Tech"].map((l) => (
              <li key={l}>
                <a 
                  href={advertorialLink}
                  target="_blank"
                  rel="noopener noreferrer" 
                  onClick={() => setOpen(false)} 
                  className="block uppercase"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
