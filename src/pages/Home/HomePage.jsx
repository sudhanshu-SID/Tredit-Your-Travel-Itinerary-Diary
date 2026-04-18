import React from 'react';
import Icon from '../../components/icons/Icon';

export default function HomePage() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-2">
          <Icon name="travel_explore" className="text-primary text-2xl" />
          <span className="text-2xl font-extrabold tracking-tighter text-on-surface">Tredit</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors">
            <Icon name="notifications" className="text-on-surface-variant" />
          </button>
        </div>
      </header>

      <main className="pb-32">
        {/* Immersive Full-Bleed Hero */}
        <section className="relative h-[90vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img 
              alt="Immersive landscape" 
              className="w-full h-full object-cover scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn8UNJq9OZuL9V9subtlFmEq1g9_mNQzb9X-2r9EICjNX2Pv2-e46VmIokW9D9NPmdIl5CfOwyegrlp83Me-Fo87Unuy9HsAdN9lJZ3F1bHIrhKJ1Uw4AKzccl08PnB61glwgesm5SCTiD-KGerN2kBKPZNmQFbSl48niZ8Sa-II_KMqQJEsLgEeP4zjA8v10-lw4OzZznAFTCsnmHEkccyAz1qH-0vWdEiFo_QArpmSk_Zg7SrgxuDw_gNKQUBz5Jsp0oIWrloJ8"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
          </div>
          <div className="px-6 pb-12 w-full max-w-xl">
            <h1 className="font-headline text-5xl font-extrabold tracking-tight text-on-surface mb-4 leading-[1.1]">
              Every Journey <br/>
              <span className="text-primary">Starts with a Story</span>
            </h1>
            <p className="text-on-surface-variant font-medium mb-8 leading-relaxed opacity-90">
              Craft the perfect itinerary with our community of world travelers and local experts.
            </p>
            {/* Prominent Search Interaction */}
            <div className="bg-white rounded-2xl p-2 shadow-2xl shadow-primary/10 border border-outline-variant/10 flex items-center gap-2">
              <div className="flex-grow flex items-center gap-3 px-4">
                <Icon name="search" className="text-primary" />
                <input className="bg-transparent border-none focus:ring-0 w-full text-on-surface font-medium placeholder:text-outline/40" placeholder="Discover your next adventure..." type="text"/>
              </div>
              <button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold transition-transform active:scale-95 whitespace-nowrap">Plan Trip</button>
            </div>
          </div>
        </section>

        {/* Grid-Based Destinations */}
        <section className="px-6 py-12 max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Trending Destinations</h2>
              <p className="text-on-surface-variant text-sm font-medium">Curated by our top 1% of contributors</p>
            </div>
            <button className="text-primary font-bold text-sm hover:underline">See all</button>
          </div>
          {/* Bento-style Grid Layout */}
          <div className="grid grid-cols-2 gap-4">
            {/* Large Card */}
            <div className="col-span-2 relative h-72 rounded-3xl overflow-hidden group cursor-pointer lg:col-span-1">
              <img alt="Tokyo skyline" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXCj2OI8cGu_HBb1AgubkGKxGjcW7VYbWOFca6HAzGzMuKc4zzSadCdm7sSZs6hGCDZvcZrQit5isfq1uOqoN36swC3_H4RZolXrssfDwNzdMSmx_0fb_iBpkUOzTqnEVtiiEmcAi-lKrfCoKW3ybVFPdU5thhUt54sktUNHCHC61iYjrWWT4lpKlY3FN_AcRPigl-ikJ-7mo6gPE_fFrkK2nhZ2I7LIsM03Os3LjwKfVzTlJ18S7a9n5ehsqXPFGOrfEdtZGBpJc"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2 inline-block">Urban Jungle</span>
                <h3 className="text-white font-headline text-2xl font-bold">Tokyo, Japan</h3>
                <p className="text-white/70 text-sm mt-1">4.2k active itineraries</p>
              </div>
            </div>
            {/* Small Card 1 */}
            <div className="relative h-64 rounded-3xl overflow-hidden group cursor-pointer lg:col-span-1">
              <img alt="Manali peaks" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaE3j9JPwaNwK9dSD7X9sxJ2MFEKpG-woYcHMwolIheFjNf2fC0LNXiupWbsGYDsk8E7A8TAcgwrM4zx612Pme7QrKRje1-BrwERJm73G-kPXrJb4yXaG86MT_KqsKOROLj6wrQF_s4mVOAcDqgyv7ZMvMqYNPmxfr0S1j6bw_VRVMJEhKXGnwjriDkbpEgKRye3_6kYWXUIP9M_NDAJND6TkZIvgIXXeY4UL-zweT-zxxCXnl3LunqZfhh4PQTJkNFrQbYeWOZT4"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-5">
                <h4 className="text-white font-headline text-lg font-bold">Manali</h4>
                <div className="flex items-center gap-1 text-white/80 text-xs mt-1">
                  <Icon name="star" filled className="text-[14px]" />
                  <span>4.9</span>
                </div>
              </div>
            </div>
            {/* Small Card 2 */}
            <div className="relative h-64 rounded-3xl overflow-hidden group cursor-pointer lg:col-span-2">
              <img alt="Bali terraces" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD43SuW2SsuKOBKTBzeNMROOZocvSiP1wjTgG6hn-bOszguqUkG3jlF-xMhTBmoyDHLy_cxviOqaHECSpgwiDSN49u11UKekbztj_8BNmzQbXIWcAAJL2hMw7S_gNx8Eu1VJFsPNbS3a75NPa_hwA9pxvvbZR8BJJt1iqB4gYsP-8cOZzg7Z0yLok6YSyiRYIB5pkJOcO5xOD2YTTDb6c-ao44pWEh6RkELAgQMG8dAo5u91Ewo2X9s_oe_JSVDz0HEoqQ-_GEKumU"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-5">
                <h4 className="text-white font-headline text-lg font-bold">Bali</h4>
                <div className="flex items-center gap-1 text-white/80 text-xs mt-1">
                  <Icon name="star" filled className="text-[14px]" />
                  <span>4.8</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Structured Modern Recent Activity */}
        <section className="px-6 mb-20 max-w-6xl mx-auto">
          <div className="bg-surface-container rounded-[2.5rem] p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-headline text-2xl font-extrabold text-on-surface">Recent Community Trips</h2>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors">
                  <Icon name="arrow_back" className="text-sm" />
                </button>
                <button className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors shadow-lg shadow-primary/20">
                  <Icon name="arrow_forward" className="text-sm" />
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              {/* Activity Item 1 */}
              <div className="bg-surface-container-lowest p-5 rounded-2xl flex gap-5 items-center hover:scale-[1.02] transition-all cursor-pointer shadow-sm">
                <div className="w-20 h-20 rounded-xl overflow-hidden shadow-sm shrink-0">
                  <img alt="Swiss lake" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaERRZ_CYL2bhWtCja955wDvoZ3InR_-Gpf3AG6G5D3lKf8XKdb_azSzv3tr7LXebkiDbY4Bhbappgtv3BXiT3dXh2QBBeI_ls6AaOgu68Qd7-OSWSLj0T3hgn9OFeXUC0V34orpa7jjd9A9kgFbiG_HwLef4CZ48qhXFM6BuG4QqHLHT-O5KQ8RUqQZcQ8Wrri0EBpliqVOL_zKgNg_swCFNP6RT-MVkFE6tVySHBz2PZWgo6unz9ktLFF6XtoK7oqqFR1wux8NI"/>
                </div>
                <div className="flex-grow">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block">Adventure</span>
                  <h4 className="font-bold text-on-surface text-lg">7 Days in Swiss Alps</h4>
                  <div className="flex items-center gap-2 mt-2">
                    <img alt="User" className="w-6 h-6 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaROtfXfMJ6BP0f-Ym-TnypdQYO2zvX-l4RHTqYI2lBVNHunXyq7b-7f0lL8WzwL6Lorooqc_z8RtZm6pJ5300Kl08wY_OGjK76VM0y4GKB_k9mdeEn4-ZkwU7QGb1vEkJG9oiuKhPVExflGer9qmW2gXfNaJQ8EQ_80gvj7pm2Are50CviMnne1rqFHoLX9SvGpGa9guKjIfVzu_XamFq9XZ5X33XB-1YcjbjgVPQe8G8u0gOsVRwWt1T4K80NDvZPMh1q1HDJog"/>
                    <span className="text-xs text-on-surface-variant">Marcus V.</span>
                  </div>
                </div>
                <div className="bg-primary/5 px-4 py-2 rounded-xl text-center shrink-0">
                  <div className="text-xl font-black text-primary">98</div>
                  <div className="text-[8px] font-bold text-primary uppercase">Score</div>
                </div>
              </div>

              {/* Activity Item 2 */}
              <div className="bg-surface-container-lowest p-5 rounded-2xl flex gap-5 items-center hover:scale-[1.02] transition-all cursor-pointer shadow-sm">
                <div className="w-20 h-20 rounded-xl overflow-hidden shadow-sm shrink-0">
                  <img alt="Croatia coast" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3t_m7iCVBq938Y_k9F1x2AisTq9vvGOyOtJLnh1jc3IDmiSgnPZKWI7M8LFAlFSl274xHe981Q_pLrtjTwG8H2iwp9btozE_isu3nYtZAgGAhIo0f6K5o4Exd23tEWCoqviJOFT7nrMTPM5KddFDt4z7Eu8GH7XoE0x8IIXoQ_wcpzbHqzbe7XtQh8yR1xLLxN12k5vjxcL71d8_LCZye25FOUtKNvQEa9HV6jv9Xye79m0wKXajlvnvhVkRDqbFGkP_DM0JEAJE"/>
                </div>
                <div className="flex-grow">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1 block">Relaxation</span>
                  <h4 className="font-bold text-on-surface text-lg">Coastal hopping in Croatia</h4>
                  <div className="flex items-center gap-2 mt-2">
                    <img alt="User" className="w-6 h-6 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNnJORDYbP_pYJbXcR57pTzP_HjqskBz_cEq1CxoCy_GTY2v_uUOjaSMgwEZdfnrGbW8GKegbJFybEhKiz8mGtqRmrr0YEu7KcBRL5dOZjoM0Gk1ew1lYnoz1WnnpGncaPMs6Xr2B1vcEmUME4sdtyh1JfnsMnW6qHtnwMf2c-ouR4UBw6_XiGdvWY-6kSietO8zh8N1KW2xIKVtPmL4OzJHL_Ky_XaBnbu6sJ1enEjkgFcKMGRGB5YoZa0TZtroPCVpXj2saq1c0"/>
                    <span className="text-xs text-on-surface-variant">Elena R.</span>
                  </div>
                </div>
                <div className="bg-secondary/5 px-4 py-2 rounded-xl text-center shrink-0">
                  <div className="text-xl font-black text-secondary">94</div>
                  <div className="text-[8px] font-bold text-secondary uppercase">Score</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
