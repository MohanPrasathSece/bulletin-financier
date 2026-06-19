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
              Subscribe to Newsletter
            </a>
            <a href="/enquiry" target="_blank" rel="noopener noreferrer" className="border-2 border-black px-6 py-3 font-bold uppercase text-xs hover:bg-black hover:text-white transition-colors">
              Download App
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-[13px]">
          {[
            {
              h: "Top Sections",
              items: ["Latest News", "Top Stories", "Trending", "Business", "Markets", "Economy", "Politics", "World News", "Tech News"]
            },
            {
              h: "Wealth & Finance",
              items: ["Crypto Secrets", "Stock Market", "Investment Guides", "Passive Income", "Real Estate", "Personal Finance", "Retirement", "Taxes"]
            },
            {
              h: "Opinion & Editorials",
              items: ["Expert Columns", "Guest Writers", "Editorial Board", "Letters to Editor", "Market Analysis", "Political Commentary", "Interviews"]
            },
            {
              h: "Lifestyle & Culture",
              items: ["Health & Fitness", "Travel", "Food & Dining", "Arts & Entertainment", "Books", "Fashion", "Automotive", "Luxury"]
            },
            {
              h: "Digital Services",
              items: ["ePaper Access", "Mobile Apps", "Newsletters", "RSS Feeds", "Podcasts", "Video Channel", "Live TV", "Alerts"]
            },
            {
              h: "Corporate Info",
              items: ["About Us", "Contact Us", "Careers", "Advertise with Us", "Terms of Use", "Privacy Policy", "Cookie Policy", "Sitemap"]
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
          <p>Copyright © {new Date().getFullYear()} Bulletin Financier Media Ltd. All rights reserved.</p>
          <p className="text-center md:text-right max-w-2xl">
            Reproduction of news articles, photos, videos or any other content in whole or in part in any form or medium without express written permission of Bulletin Financier is prohibited.
          </p>
        </div>
      </div>
    </footer>
  );
}
