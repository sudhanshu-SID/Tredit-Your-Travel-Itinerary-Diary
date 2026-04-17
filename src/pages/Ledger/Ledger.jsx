import React from 'react';
import Icon from '../../components/icons/Icon';

export default function Ledger() {
  return (
    <div className="bg-background text-on-background font-body min-h-[100dvh] selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-outline-variant/10 px-6 h-16 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Icon name="travel_explore" className="text-primary" />
          <h1 className="text-2xl font-extrabold tracking-tighter text-on-surface">Tredit</h1>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low transition-colors hover:bg-surface-container-high">
          <Icon name="notifications" className="text-on-surface-variant text-xl" />
        </button>
      </header>

      <main className="pt-24 pb-32 space-y-16">
        {/* VARIANT 1: STATS-CENTRIC & SEGMENTED CONTROL */}
        <section className="px-6 max-w-4xl mx-auto" id="v1">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-1 block">Overview</span>
              <h2 className="text-3xl font-extrabold font-headline">My Ledger</h2>
            </div>
            <div className="p-1 bg-surface-container-high rounded-full flex gap-1">
              <button className="px-5 py-1.5 bg-white shadow-sm rounded-full text-xs font-bold text-on-surface">Past</button>
              <button className="px-5 py-1.5 rounded-full text-xs font-semibold text-on-surface-variant hover:text-on-surface">Future</button>
              <button className="px-5 py-1.5 rounded-full text-xs font-semibold text-on-surface-variant hover:text-on-surface">Drafts</button>
            </div>
          </div>

          {/* Enhanced Ongoing Card with Mini Stats */}
          <div className="bg-surface-container-lowest rounded-[2.5rem] p-6 shadow-xl shadow-surface-tint/5 border border-outline-variant/10 mb-10 overflow-hidden relative">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg ring-2 ring-white">
                    <img alt="Tokyo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDARBV7ha0l0PS4xuQXejE_-xU1FSXowuT6BYMmGsvnuRzNfnLygw9H_IaC8OoLSqrgcOQ7vPoeKWTsS2w2EWTlMJQTzKzdmVV0Sh84IOl9Aw8lO7pvvBuptyrRZkAvoovvTjJbLVsMDBwrSLcLCXRGhPQAUXLVy-1lvpzJcr_JtK8riIY9dxg_bVxBeglkYO3DWfeoJW9K8WWamTyWcvg-8ZNO-eHVYF9iLdGZz7wyjANI-_9WF8dmUazLu0EthSNQbUBdaK8PD58" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-headline">Tokyo: Neon Days</h3>
                    <p className="text-sm text-on-surface-variant">Ongoing • Day 4 of 12</p>
                  </div>
                </div>
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Live</div>
              </div>

              <div className="grid grid-cols-3 gap-4 py-6 border-y border-outline-variant/20">
                <div className="text-center">
                  <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Score</p>
                  <p className="text-lg font-extrabold text-primary">+450</p>
                </div>
                <div className="text-center border-x border-outline-variant/20">
                  <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Steps</p>
                  <p className="text-lg font-extrabold">12.4k</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Stops</p>
                  <p className="text-lg font-extrabold">3/8</p>
                </div>
              </div>

              <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
                <span>Open Dashboard</span>
                <Icon name="arrow_forward" className="text-sm" />
              </button>
            </div>
          </div>

          {/* Visual Vertical List */}
          <div className="space-y-4">
            <div className="group bg-white p-4 rounded-2xl flex items-center gap-4 hover:shadow-md transition-shadow border border-outline-variant/5 cursor-pointer">
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-surface-container">
                <img alt="Maldives" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7r4_lL3bVDEuDMUSIVTJPWlVIxAg3JgWQZ1EB1ZoBJWBKqf08OUT5sClNM4NEoZHwrsLpmtXs2_nAIoXuilPzsZA0VMaoFddEKNEAHcTAtaFOf8q849zR_-lDNVbKwYzl0fQ8I610uO61EyklCAYKPQRgusqozFrHU7SUdIf2B7oxnB1D7E7dXMhR3xhCt_5ExdbPnxpvs_2t7YMLuXeaS1IrSSN0QX0J2Cfwihs7PyFv1CBIi4IH288jZVFs4EZnQJw_mnVSGYE" />
              </div>
              <div className="flex-grow">
                <h4 className="font-bold">Maldives Serenity</h4>
                <p className="text-xs text-on-surface-variant">June 2023 • 8 days</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-black text-on-surface">+1,240</p>
                <p className="text-[8px] font-bold text-tertiary uppercase tracking-tighter">Points Earned</p>
              </div>
            </div>
            <div className="group bg-white p-4 rounded-2xl flex items-center gap-4 hover:shadow-md transition-shadow border border-outline-variant/5 cursor-pointer">
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-surface-container">
                <img alt="London" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAALqOCEE-uAMbS5PCLJnEFahUnRX17yaoOg1wytmH7TLbns7lFhSYlofEOqQnjHYEqVEVV72FZUeL9NYo2cdyXpu-a-nva-XVBI_OBQJ_wDhp66qV-OTDHT5AaVKNrTFuBe66aY-ww9tBUqt949E2J4oGrCYaeirfjzGU1EfYzycMrgz0zfQO9B7AuhHCAZo-z0v0yI3ZKtkZkcUUbxydi_0YPKfiBihIdNev6ngUsSWtPVXQCCaH7SC3bMOk6xjb5TKFs2KfnnyU" />
              </div>
              <div className="flex-grow">
                <h4 className="font-bold">London Cultural</h4>
                <p className="text-xs text-on-surface-variant">March 2023 • 7 days</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-black text-on-surface">+890</p>
                <p className="text-[8px] font-bold text-tertiary uppercase tracking-tighter">Points Earned</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
