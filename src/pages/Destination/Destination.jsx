import React, { useState } from 'react';
import Icon from '../../components/icons/Icon';

export default function Destination() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="bg-surface font-body text-on-surface min-h-[100dvh]">
      {/* Mobile Top Header */}
      <div className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md flex justify-between items-center px-6 h-16 shadow-sm border-b border-surface-container">
        <button>
          <Icon name="arrow_back" className="text-on-surface-variant" />
        </button>
        <span className="text-xl font-headline font-bold text-primary">Manali</span>
        <button>
          <Icon name="share" className="text-on-surface-variant" />
        </button>
      </div>

      {/* Main Content */}
      <main className="pb-32 pt-16">
        {/* Variation 1: The Immersive Header & Tabbed Interface */}
        <div className="relative w-full h-[300px]">
          <img alt="Manali" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7mo9muiBs-0Jv21amAYCLyxj_Imsa-CfZq3fHvEkoY6QSdx0TZLYgOhYVeMlkKxnr-78eVNnjMOyJ8lsYHxS12mQfxHNBHc54zyi9nuR37oYHa95vOTHKGR4t0QnxNZOYjP6JijNP2GqMcZImymmp9lsam5YOWRmg6euE9Z2moUGyakSNozwuabKG4RxBAHXBSHCxsbsgW09n8gm-8-DP9o_ayYVju5VM40Qhc9cMGrSf_c_6J-SvH5tBgztCL5rWOlxa2vQi_aU" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/20"></div>
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-1 flex items-center gap-1.5 text-white text-xs font-bold">
              <Icon name="star" filled className="text-sm" />
              4.8 (2.4k)
            </div>
            <button className="bg-primary text-white p-3 rounded-full shadow-lg active:scale-95 transition-all">
              <Icon name="bookmark" filled />
            </button>
          </div>
        </div>

        {/* Sticky Tab Navigation */}
        <nav className="sticky top-16 z-40 bg-surface border-b border-surface-container-high px-6 flex justify-between border-t-0">
          {['Overview', 'Journeys', 'Inside Map', 'Reviews'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 text-sm font-bold tracking-tight ${
                activeTab === tab
                  ? 'text-primary border-b-[3px] border-primary'
                  : 'text-on-surface-variant'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Tab Content: Overview */}
        {activeTab === 'Overview' && (
          <section className="px-6 mt-8 space-y-8" id="overview">
            <div>
              <h2 className="text-3xl font-headline font-extrabold tracking-tight mb-4 text-on-surface">Mountain Sanctuary</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed font-light">
                Nestled in the Beas River Valley, Manali is a gateway for skiing in the Solang Valley and trekking in Parvati Valley. It's a place where ancient wooden temples stand amidst contemporary cafés.
              </p>
            </div>
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-surface-container-low p-4 rounded-2xl flex flex-col items-center text-center">
                <Icon name="thermostat" className="text-secondary mb-2" />
                <span className="text-[10px] font-bold uppercase text-on-surface-variant opacity-60">Temp</span>
                <span className="text-sm font-bold text-on-surface">18°C</span>
              </div>
              <div className="bg-surface-container-low p-4 rounded-2xl flex flex-col items-center text-center">
                <Icon name="hiking" className="text-secondary mb-2" />
                <span className="text-[10px] font-bold uppercase text-on-surface-variant opacity-60">Level</span>
                <span className="text-sm font-bold text-on-surface">Mid</span>
              </div>
              <div className="bg-surface-container-low p-4 rounded-2xl flex flex-col items-center text-center">
                <Icon name="calendar_month" className="text-secondary mb-2" />
                <span className="text-[10px] font-bold uppercase text-on-surface-variant opacity-60">Season</span>
                <span className="text-sm font-bold text-on-surface">Mar-Jun</span>
              </div>
            </div>
            {/* Ethical Aside (Integrated) */}
            <div className="bg-tertiary/5 border-l-4 border-tertiary rounded-r-2xl p-6">
              <h3 className="text-tertiary font-bold flex items-center gap-2 mb-2">
                <Icon name="verified_user" className="text-xl" />
                Ethical Navigator
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Manali is a plastic-free zone. Please carry reusable water bottles and respect temple dress codes.
              </p>
            </div>

            {/* Community Carousel (Compact) */}
            <section className="mt-12 -mx-6 px-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-headline font-extrabold text-on-surface">Top Journeys</h2>
                <button className="text-primary text-sm font-bold border-none bg-transparent">View All</button>
              </div>
              <div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-6 px-6 pb-4">
                {/* Compact Trip Card */}
                <div className="min-w-[240px] bg-white rounded-2xl overflow-hidden shadow-sm border border-surface-container cursor-pointer hover:shadow-md transition-shadow">
                  <img alt="Trip" className="h-32 w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0J5oZ6H6PKAs6cSFnSUh1xmI4ilX9Byn5sVRLeQTvMmer8BIvcfD5Y4fgPZzbLzje015JCqkJUCAM-5P9T-QHjBYKLLmmnwlLzAXFELEjlF8jd0vACXoGjcLuOYifN-WJ2oUxnelTSkwUaCCtWggR_pl3Qmah9L5-TAS7ZPtd33jBSk5L_C-aaW6rjkwpxrMqJ2hI4k_NZ6TBKpUem1eW4wXbOCZq92ecxGAm-B7ITwNI2K_vBC5OjoKr2TZDY6zdjYGCytmLjrY" />
                  <div className="p-4">
                    <h4 className="font-bold text-sm mb-1 truncate text-on-surface">High Altitude Solitude</h4>
                    <span className="text-[10px] text-on-surface-variant font-semibold">@himalayan_soul • 7 Days</span>
                  </div>
                </div>
                {/* Compact Trip Card 2 */}
                <div className="min-w-[240px] bg-white rounded-2xl overflow-hidden shadow-sm border border-surface-container cursor-pointer hover:shadow-md transition-shadow">
                  <img alt="Trip" className="h-32 w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxF9BRuC0E5H3JcICSLwwEH8MhKvNpEmQTjnKyI2LiyxDKoW4oBz6Twmid16cknSgvAy_9sKOCX3vxiDc2AEMMwuunPIA_pGtobjiZWvIhivy1JKSvB8UjILos8Fo8Ka4ovF0PtzewuA3QJDEb3BwuXw49jx_jz9ZtsagISdKBFNbImIsu2e2FhpLY1hTX5iUenYRAQTcws9fUx-eQnt_HilEbOwUOoMlf2FpK9sk89L1Fsa8cDpCK3y5KyJALptrUrdT2bL3zgHw" />
                  <div className="p-4">
                    <h4 className="font-bold text-sm mb-1 truncate text-on-surface">Old Manali Cafe Crawl</h4>
                    <span className="text-[10px] text-on-surface-variant font-semibold">@foodie_explorer • 3 Days</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Immersive "Pins" Grid (Full Width Alternating) */}
            <section className="mt-12 -mx-2 px-2 pb-12">
              <h2 className="px-4 text-xl font-headline font-extrabold mb-6 text-on-surface">Insider's Hotspots</h2>
              <div className="space-y-4 px-4">
                {/* Pin 1 */}
                <div className="relative h-[240px] rounded-3xl overflow-hidden group cursor-pointer">
                  <img alt="Food" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVPXrxYOJwUWbpQZ7268OzKIIH8GvsGS4mF9XdsYM4qiHlrjbz6uks5vjFcUzBS1QE5cQdTHVyTadpnMuUvs-3xYEpHyzoBMF3ssNx2mM100z2BF8LCCuQ51wLFEXwmVRu6ChQ8601PTya_uwF7oFpRFoFCXgrH4E3hIr0pOWdI7aNokUUNM_1JlPwX0FY1YNF-IiHTkZNNvOKmXtrTAp6kqa4ZeIu3TLtmj1Apt1frAD7edxZU5SLGe0eMY4s-xohEOhTafkuc80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                    <span className="bg-secondary w-fit text-white text-[10px] font-black px-2 py-0.5 rounded-full mb-2 uppercase tracking-widest">Best Food</span>
                    <h3 className="text-white text-2xl font-headline font-bold">The Siddu Den</h3>
                    <p className="text-white/70 text-sm font-medium mt-1">Local handmade dumplings with clarified butter.</p>
                  </div>
                </div>
                {/* Pin 2 Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-[200px] rounded-3xl overflow-hidden group cursor-pointer">
                    <img alt="Waterfall" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOp7ksKPwQu9vgJGuZNRNlKw_xoz3XRYw_26N7hW8zJQk5IVjvWGZzKstjqxWfQdDJp2VfLOIDFMnskpS6TbCmFlL_yDARYWWXBDuYTcR--VFIrT1OwfvcH_5QDp7XnzYbwYZsvukaYo3JHlTjTUvU9l2MAN6cbt2ghSxMFKh_wlVYUyeCHaMrXuT_yoxRZ1dtgQwP1oJQW4O_Os9mBpMo0g9lTl52YX-BecOlN_zWhPbCI0VouKaqohPyx3gFZ9mkuYO_lHDKWSs" />
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                      <h4 className="text-white font-bold text-sm">Jogini Falls</h4>
                    </div>
                  </div>
                  <div className="relative h-[200px] rounded-3xl overflow-hidden group cursor-pointer">
                    <img alt="Temple" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2OIj-HDpMUpF3g--jO9XkcrUcYcE6Jkkt283zONoNORtla-59hs0IZ3zL8MIypzJflkwnxMzrD7NoOV4pJQZQs_ZUNvCPX4IO0Pjb5X3YpU5QwR5upsDBqWRbLyUAezVZu9_xChBaxe-5Psw3a6U8jrN09R5A0tQ0QX2xV1UVtWHNDEyMvTgz_iBTnb5FKhWm_Rz-T6qykEWEthFyfKmFvaeP4ifWAZyI-Y2aUuxcP_VYftE9Rkm40pV94Xjp-IB-FQIfeKpfVCQ" />
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                      <h4 className="text-white font-bold text-sm">Vashisht Springs</h4>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        )}
      </main>
    </div>
  );
}
