import React from 'react';
import Icon from '../../components/icons/Icon';

export default function Trip() {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-white min-h-[100dvh]">
      {/* Variant 1: Editorial Magazine Layout */}
      <div className="mb-20" id="variation-1">
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-outline-variant/10 flex justify-between items-center px-6 h-16">
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tighter text-primary">Tredit</span>
            <span className="px-2 py-0.5 bg-surface-container text-[10px] font-bold rounded uppercase tracking-wider">Draft</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-full shadow-lg shadow-primary/20">PUBLISH</button>
          </div>
        </nav>
        
        <main className="pt-24 px-0 max-w-2xl mx-auto overflow-hidden">
          {/* Hero Magazine Header */}
          <header className="px-6 mb-12">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-px bg-outline-variant"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Autumn Chronicles</span>
            </div>
            <h1 className="text-6xl font-serif italic font-semibold leading-none text-on-surface mb-6">Kyoto Autumn <br/>Echoes</h1>
            <div className="flex justify-between items-end border-t border-b border-outline-variant/20 py-4">
              <div className="text-xs font-medium uppercase tracking-widest text-on-surface text-opacity-80">Oct 12 — 20</div>
              <div className="text-xs italic font-serif text-on-surface-variant">A journey through Gion and Arashiyama</div>
            </div>
          </header>

          {/* Day 01 Content */}
          <section className="space-y-16">
            <div className="relative px-6">
              <span className="absolute -left-2 top-0 text-[120px] font-bold text-surface-container-highest/50 -z-10 select-none">01</span>
              <div className="pt-12">
                <h2 className="text-3xl font-serif italic mb-6 text-on-surface">The Soul of Gion</h2>
                <div className="magazine-dropcap text-on-surface-variant leading-relaxed text-lg mb-8">
                  Arrival in Gion was like stepping into a woodblock print. The grilled binchotan skewers at Izakaya Kushi-Kura were incredible. The atmosphere in this converted merchant house felt like stepping back in time.
                </div>
                {/* Offset Gallery Arrangement */}
                <div className="relative mb-12">
                  <div className="w-4/5 ml-auto">
                    <img alt="Interior" className="w-full h-80 object-cover rounded-sm shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSK5_QYhj53YFgNv4jmUP7WeDUwhD6KjzyJRQhQk-pgLS9qV9yRzkQop4q-vvLafoqTBlkncuzWlAKhNPLQu7n8o-MfJhW9X_3J5tvmFykDD0wwDACUcXGTRtZke0Am8yPa6tsAcJ0DiSJSmQqNH8TmSlV1ta6mmlhZvaOaaLfK-rHUrej7RNiBy49YApQmxB1PxoUXOiv1wQprD0RMuwSAGLjfRar4dsDkwrb0G-oFfKx5EE3MTrBX5ygnniO23zN38ZYk-VDvD4" />
                  </div>
                  <div className="absolute -bottom-6 -left-4 w-1/2 p-2 bg-white shadow-xl rotate-[-2deg]">
                    <p className="text-[10px] font-serif italic text-on-surface-variant">The local sake flight was a revelation for the palate.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 02 Content */}
            <div className="bg-primary-container/10 py-16 px-6">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl font-serif font-bold text-primary">02</span>
                <h2 className="text-2xl font-bold tracking-tight text-on-surface">Temple Trails &amp; Morning Mist</h2>
              </div>
              {/* Split Gallery Layout */}
              <div className="grid grid-cols-12 gap-4 mb-6">
                <div className="col-span-8">
                  <img alt="Kiyomizu" className="w-full h-64 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQLwaSXPoQJpSTYWW5lT97ERQ7Hn47mLCyzYf7E__tZWoE3SjX2OPVGVrb9d6fK0jbuXoI4kSVqw3R99DhutHrDp1uxn1zA9gDhWpEJPL8j9v8eLFa9ceb-f1QpbtG0TZV3sH0keUdx3OxboLHC7ZTa3bQuP2yzwBa8fnw1zxmeG3ngN_8bwL3WFtXFLrIFqJmsX5Wf54dQeVNp5Jony9a9qJ5wnNMViEvibVQtNTyHgsvMFI7unA86J6LJXqQgfDeYZlxU0wNy-0" />
                </div>
                <div className="col-span-4 flex flex-col gap-4">
                  <div className="h-1/2 bg-surface-container-highest rounded-lg flex items-center justify-center">
                    <Icon name="camera" className="text-outline-variant" />
                  </div>
                  <div className="h-1/2 bg-secondary-container/20 rounded-lg flex items-center justify-center">
                    <Icon name="brush" className="text-secondary" />
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
      <div className="fixed bottom-0 left-0 w-full z-50 p-6 pt-0 bg-gradient-to-t from-surface via-surface to-transparent mb-16">
        <div className="max-w-md mx-auto flex gap-3">
          <button className="flex-1 py-4 bg-surface border border-outline-variant rounded-2xl flex items-center justify-center gap-2 font-bold shadow-sm active:scale-95 transition-all text-on-surface">
            <Icon name="share" className="text-[20px]" />
            Share
          </button>
          <button className="flex-[2] py-4 bg-primary text-white rounded-2xl flex items-center justify-center gap-3 font-bold shadow-xl shadow-primary/40 active:scale-[0.98] transition-all group overflow-hidden relative">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <Icon name="publish" filled className="text-[24px] relative z-10" />
            <span className="relative z-10">PUBLISH TO TREDIT</span>
          </button>
        </div>
      </div>
    </div>
  );
}
