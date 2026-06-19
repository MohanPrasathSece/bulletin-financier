import { createFileRoute } from "@tanstack/react-router";
import { Clock, ChevronRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Special Report: How a Swiss Icon Discovered the Future of Finance" },
      {
        name: "description",
        content: "A prominent Swiss influencer breaks his silence on the new financial system that changed everything.",
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
              <h4 className="font-bold text-sm uppercase tracking-widest mb-3 border-b-2 border-black pb-1">Quick Links</h4>
              <ul className="space-y-3 text-[13px] font-sans font-medium">
                {["Live Market Data", "Crypto Calculator", "Top 10 Secrets", "Insider Newsletter", "Join VIP Group", "Latest Testimonials", "Success Rate 98%", "Create Account", "Withdrawal Proofs", "Celebrity Endorsements"].map(item => (
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
                <span className="font-bold text-sm leading-tight block">Multiply Your Wealth Today</span>
                <span className="text-red-600 text-[10px] font-bold mt-1 uppercase block">Click Here</span>
              </div>
            </a>
          </div>

          {/* MAIN ARTICLE */}
          <article className="flex-1 min-w-0">
            <div className="border-b-4 border-black pb-4 mb-6">
              <h1 className="font-black text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
                SPECIAL REPORT: Lukas Weber's Latest Investment Leaves Experts Speechless
              </h1>
              <h2 className="mt-4 text-xl md:text-2xl italic text-gray-700 leading-snug">
                The prominent Swiss influencer and entrepreneur was caught on a live broadcast accidentally revealing the exact system he uses to generate passive income.
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-300 pb-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden grayscale border border-gray-400">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150" alt="Markus Becker" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-sm uppercase tracking-wider">By Markus Becker</div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 font-sans">
                    <span>Published: Today</span>
                    <span>|</span>
                    <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" /> 12 min read</span>
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
                  Above: Lukas Weber discusses his financial strategies during a recent televised appearance.
                </div>
              </div>
              
              <p className="first-letter:text-6xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                Swiss influencer Lukas Weber has made a name for himself by sharing his luxurious lifestyle and business ventures. But during a recent live interview on national television, he went off-script and shared a "wealth loophole" he claims can transform anyone's financial situation within months.
              </p>

              <p>
                The broadcast was supposed to focus on his recent philanthropic efforts. However, when the host pressed him on how he continues to fund his projects despite global economic downturns, Weber dropped a bombshell. He admitted that his massive recent wealth didn't come from brand deals or his tech startups, but from a highly secretive automated system.
              </p>

              <div className="text-center my-8 border-t-2 border-b-2 border-red-600 py-6 break-inside-avoid bg-red-50">
                <a 
                  href={ctaLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-3/4 bg-red-600 text-white font-sans font-black uppercase tracking-widest px-6 py-4 text-sm hover:bg-red-700 transition-colors shadow-md animate-pulse"
                >
                  Watch The Deleted Interview Clip Now ➔
                </a>
                <p className="text-[11px] font-sans text-red-800 mt-2 font-bold">Warning: Video available only for registered users.</p>
              </div>

              <blockquote className="border-l-4 border-black pl-4 py-2 my-6 italic text-xl font-medium bg-gray-100 p-4 break-inside-avoid">
                "I don't rely on traditional banks or standard stock portfolios anymore. That's a game rigged against the average person. I've been using a new automated digital asset system, and it's doing all the heavy lifting."
              </blockquote>

              <p>
                The host, visibly shocked, tried to change the subject, but the damage was done. Within minutes, the clip went viral across social media, with thousands of Swiss residents scrambling to find the platform Weber mentioned.
              </p>

              <h3 className="font-black text-2xl mt-8 mb-3 uppercase tracking-wide break-inside-avoid">The Power of Automation</h3>

              <p>
                What Weber was referring to is an advanced, AI-driven protocol that scans global markets in milliseconds. Unlike human traders, who need sleep and are prone to emotional decisions, this system operates coldly and efficiently 24 hours a day, 7 days a week.
              </p>
              
              <p>
                "It’s not just about making money when the market is up," Weber explained off-camera to our producers later. "The real magic of this software is that it can profit from downward trends just as effectively. It shorts the market automatically, meaning it generates returns regardless of economic conditions."
              </p>

              <div className="grid grid-cols-2 gap-4 my-8 font-sans break-inside-avoid">
                <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-black p-4 text-center hover:bg-black hover:text-white transition-colors">
                  <h5 className="font-bold text-sm mb-1 uppercase tracking-wider">Verify Eligibility</h5>
                  <p className="text-[10px] text-gray-500 uppercase">Takes 30 seconds</p>
                </a>
                <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-black p-4 text-center hover:bg-black hover:text-white transition-colors">
                  <h5 className="font-bold text-sm mb-1 uppercase tracking-wider">Profit Calculator</h5>
                  <p className="text-[10px] text-gray-500 uppercase">Estimate earnings</p>
                </a>
              </div>

              <h3 className="font-black text-2xl mt-8 mb-3 uppercase tracking-wide break-inside-avoid">We Investigated The Platform</h3>
              
              <p>
                Our editorial team couldn't ignore the buzz, so we decided to test this so-called "loophole" ourselves. What we found was an advanced trading protocol designed to analyze market trends and execute profitable trades autonomously.
              </p>

              <div className="flex flex-col gap-4 my-6 p-4 bg-gray-100 border border-gray-300 break-inside-avoid">
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=300&h=200" 
                  alt="Crypto growth chart" 
                  className="w-full h-[150px] object-cover border border-gray-400 grayscale"
                />
                <div>
                  <h4 className="font-bold text-base mb-2 uppercase">Verified Results</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Our lead tech editor deposited the minimum amount and let the system run for 7 days. The results were verified by independent third parties and showed consistent daily returns.
                  </p>
                  <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-red-600 hover:underline font-sans">
                    Read the full technical breakdown ➔
                  </a>
                </div>
              </div>

              <p>
                "I was skeptical at first," admits our senior editor, Julian. "I've reviewed hundreds of financial platforms. But when I checked my balance on the third day and saw a 34% increase without doing anything, I realized this was completely different from anything currently available to retail investors."
              </p>

              <div className="bg-black text-white p-6 mt-10 text-center break-inside-avoid">
                <div className="text-red-500 font-sans font-bold text-xs uppercase tracking-widest mb-2 border-b border-red-500 pb-1 inline-block">Urgent Update</div>
                <h3 className="text-2xl font-black mb-3">Registration Closes Soon</h3>
                <p className="mb-5 text-sm text-gray-300">
                  Because of high media attention, we can only guarantee access for the next few hours.
                </p>
                <a 
                  href={ctaLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-red-600 text-white font-sans font-black uppercase tracking-widest py-4 text-sm hover:bg-red-700 transition-colors"
                >
                  Register Your Account Now
                </a>
              </div>
            </div>
          </article>

          {/* RIGHT SIDEBAR (Congestion) - FIXED OVERLAP */}
          <div className="w-full lg:w-[250px] xl:w-[300px] shrink-0 space-y-8 lg:border-l border-black pl-6">
             {/* Extra Sidebar Ad */}
             <div className="bg-gray-100 border border-gray-300 p-4 text-center font-sans border-t-4 border-t-red-600">
               <span className="text-[10px] font-bold uppercase text-red-600 tracking-widest mb-2 block">Sponsored Content</span>
               <h4 className="font-black text-lg mb-2 text-black">The #1 Asset of 2026?</h4>
               <img src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=300&h=200" alt="Asset" className="w-full h-[120px] object-cover my-3 grayscale border border-gray-400" />
               <p className="text-xs text-gray-600 mb-4">Experts predict massive surge. Don't miss out on the next big wave.</p>
               <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="block bg-black text-white text-[11px] font-bold uppercase py-3 hover:bg-red-600 transition-colors">
                 Get The Free Report
               </a>
             </div>

             <div className="border-t-4 border-black pt-2">
                <h4 className="font-bold text-sm uppercase tracking-widest mb-3 border-b-2 border-black pb-1">Trending News</h4>
                <div className="space-y-4 font-sans">
                  {[
                    { title: "Bank CEO Resigns After This System Released", img: "https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80&w=150&h=150" },
                    { title: "How To Retire By 40 Using This Strategy", img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=150&h=150" },
                    { title: "The Truth About The Current Financial Crisis", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=150&h=150" },
                    { title: "Why Billionaires Are Hoarding This Asset", img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=150&h=150" },
                    { title: "Shocking Truth Behind Inflation Rates", img: "https://images.unsplash.com/photo-1590283603385-18ff38540843?auto=format&fit=crop&q=80&w=150&h=150" }
                  ].map((article, i) => (
                    <a key={i} href={ctaLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group border-b border-gray-200 pb-3 last:border-0">
                      <img src={article.img} alt={article.title} className="w-16 h-16 object-cover grayscale group-hover:grayscale-0 transition-all border border-gray-300 shrink-0" />
                      <div>
                        <h5 className="text-[13px] font-bold leading-snug group-hover:text-red-600 transition-colors text-black">{article.title}</h5>
                        <span className="text-[10px] text-gray-500 mt-1 block uppercase">Read time: {Math.floor(Math.random() * 5) + 3} mins</span>
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
            <h3 className="font-black text-2xl uppercase tracking-widest">Recommended For You</h3>
            <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="text-[11px] font-sans font-bold uppercase tracking-widest text-red-600 hover:underline">View All Stories</a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 font-sans">
            {[
              { img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=300&h=200", title: "5 Cryptos To Buy Before The Next Bull Run", tag: "Investing" },
              { img: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=300&h=200", title: "How A 22-Year-Old Made Millions In 6 Months", tag: "Success Stories" },
              { img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=300&h=200", title: "The Secret Banking System Elites Don't Want You To Know", tag: "Exposed" },
              { img: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80&w=300&h=200", title: "Is Bitcoin Dead? Why This New Token Is Taking Over", tag: "Markets" },
              { img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=300&h=200", title: "Top 10 Passive Income Streams For 2026", tag: "Finance" },
              { img: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=300&h=200", title: "Ex-Banker Reveals What They Are Hiding", tag: "Insider" },
              { img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=300&h=200", title: "Credit Card Debt? Use This Trick Now", tag: "Tips" },
              { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=300&h=200", title: "The Next Apple? This Startup Is Changing Everything", tag: "Tech" }
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
