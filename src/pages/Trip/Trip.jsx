import React from 'react';
import { Camera, Paintbrush, Share2, UploadCloud, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Trip() {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-white min-h-[100dvh]">
      {/* Editorial Magazine Layout */}
      <div className="mb-20">
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-outline-variant/10 flex justify-between items-center px-6 h-16">
          <div className="flex items-center gap-4">
            <Link to="/" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors">
              <ChevronLeft size={16} className="text-on-surface" />
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tighter text-primary">Tredit</span>
              <span className="px-2 py-0.5 bg-surface-container text-[10px] font-bold rounded uppercase tracking-wider">Draft</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2 bg-primary hover:bg-primary-container text-white text-xs font-bold rounded-full shadow-lg shadow-primary/20 transition-all active:scale-95">
              PUBLISH
            </button>
          </div>
        </nav>
        
        <main className="pt-24 px-0 max-w-2xl mx-auto overflow-hidden">
          {/* Hero Magazine Header */}
          <header className="px-6 mb-12">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-px bg-outline-variant"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Autumn Chronicles</span>
            </div>
            <h1 className="text-6xl font-serif italic font-semibold leading-none text-on-surface mb-6 drop-shadow-sm">
              Kyoto Autumn <br/>Echoes
            </h1>
            <div className="flex justify-between items-end border-t border-b border-outline-variant/20 py-4">
              <div className="text-xs font-bold uppercase tracking-widest text-on-surface opacity-80">Oct 12 — 20</div>
              <div className="text-sm italic font-serif text-on-surface-variant">A journey through Gion and Arashiyama</div>
            </div>
          </header>

          {/* Day 01 Content */}
          <section className="space-y-16">
            <div className="relative px-6">
              <span className="absolute -left-4 top-0 text-[140px] font-black text-surface-container-highest/40 -z-10 select-none font-serif italic">01</span>
              <div className="pt-12">
                <h2 className="text-3xl font-serif italic mb-6 text-on-surface font-semibold">The Soul of Gion</h2>
                <div className="magazine-dropcap text-on-surface-variant leading-relaxed text-lg mb-10 font-serif">
                  Arrival in Gion was like stepping into a woodblock print. The grilled binchotan skewers at Izakaya Kushi-Kura were incredible. The atmosphere in this converted merchant house felt like stepping back in time.
                </div>
                {/* Offset Gallery Arrangement */}
                <div className="relative mb-12">
                  <div className="w-4/5 ml-auto">
                    <img alt="Interior" className="w-full h-80 object-cover rounded-xl shadow-2xl" src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070" />
                  </div>
                  <div className="absolute -bottom-6 -left-4 w-1/2 p-3 bg-white shadow-xl rounded-lg rotate-[-2deg] border border-outline-variant/10">
                    <p className="text-xs font-serif italic text-on-surface-variant">The local sake flight was a revelation for the palate.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 02 Content */}
            <div className="bg-primary/5 py-16 px-6 rounded-[2.5rem] mx-4 mb-8">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-5xl font-serif font-black text-primary italic">02</span>
                <h2 className="text-2xl font-bold tracking-tight text-on-surface">Temple Trails &amp; Morning Mist</h2>
              </div>
              {/* Split Gallery Layout */}
              <div className="grid grid-cols-12 gap-4 mb-8">
                <div className="col-span-8">
                  <img alt="Kiyomizu" className="w-full h-64 object-cover rounded-2xl shadow-md" src="https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?q=80&w=2070" />
                </div>
                <div className="col-span-4 flex flex-col gap-4">
                  <div className="h-1/2 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-outline-variant/10">
                    <Camera size={24} className="text-on-surface-variant/50" />
                  </div>
                  <div className="h-1/2 bg-secondary/10 rounded-2xl flex items-center justify-center">
                    <Paintbrush size={24} className="text-secondary" />
                  </div>
                </div>
              </div>
              <p className="text-on-surface-variant leading-relaxed text-lg font-serif">
                Woke up at 5 AM to beat the crowds. The mist over the maple trees was purely ethereal. One of those moments where time just stops. Later, I found a handcrafted ceramic tea set on Sannenzaka Slope.
              </p>
            </div>
          </section>
        </main>
      </div>

      {/* Unified Prominent CTA Section */}
      <div className="fixed bottom-0 left-0 w-full z-50 p-6 pt-0 bg-gradient-to-t from-surface via-surface to-transparent pb-8">
        <div className="max-w-md mx-auto flex gap-3">
          <button className="flex-1 py-4 bg-white border border-outline-variant/20 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-sm active:scale-95 transition-all text-on-surface hover:bg-surface-container-lowest">
            <Share2 size={20} className="text-on-surface-variant" />
            Share
          </button>
          <button className="flex-[2] py-4 bg-primary text-white rounded-2xl flex items-center justify-center gap-3 font-bold shadow-xl shadow-primary/40 active:scale-[0.98] transition-all group overflow-hidden relative hover:bg-primary-container">
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <UploadCloud size={22} className="relative z-10" />
            <span className="relative z-10">PUBLISH TO TREDIT</span>
          </button>
        </div>
      </div>
    </div>
  );
}
