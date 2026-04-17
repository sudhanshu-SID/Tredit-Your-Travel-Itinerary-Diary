import React from 'react';
import Icon from '../../components/icons/Icon';

export default function Profile() {
  return (
    <div 
      className="bg-surface text-on-surface min-h-[100dvh] pb-32"
      style={{
        background: 'radial-gradient(circle at 20% 20%, rgba(0, 86, 210, 0.05) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(159, 66, 0, 0.05) 0%, transparent 40%)',
        backgroundColor: '#f8f9fa'
      }}
    >
      {/* Top Navigation */}
      <header className="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-md px-6 h-16 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="travel_explore" className="text-primary text-3xl" />
          <span className="text-xl font-extrabold tracking-tight">Tredit</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container transition-colors">
            <Icon name="search" className="text-on-surface-variant" />
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container transition-colors">
            <Icon name="settings" className="text-on-surface-variant" />
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 pt-4">
        {/* VARIATION 1: Integrated Stats Header */}
        <section className="mb-10">
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="w-28 h-28 rounded-full overflow-hidden border-[6px] border-surface-container-lowest shadow-xl">
                <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqmtv-WDgloh_jscTWruQLbgeUyQL-looDGvVK1PKxrv96yha4Wt89mljr2QQBAnQtjLGwKnfgJdDr1jy_PHBVq9WJqjqrad60VDc_dqgm48XcFiFsmh6hfVpLiHqG3SLnSt135fe3foqgQdpEMTC9C4yPwet_-RUTTA4LvJdjD2h-P2hhISBIwFe1CLwmPzPlplttzJ4FEk3cDmmvv5TRD2KYgDJfaKsVWB8TCA5zCbrK59vOPZzKsXkrE4Igxp9WtJkj8t1ET-k" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-primary text-on-primary text-[10px] font-black px-2 py-1 rounded-lg flex items-center gap-1 shadow-md">
                <Icon name="stars" filled className="text-[12px]" />
                1.2k
              </div>
            </div>
            <div className="text-center mb-6">
              <h1 className="text-2xl font-extrabold text-on-surface tracking-tight">Alex Rivero</h1>
              <p className="text-on-surface-variant text-sm mt-1 max-w-xs opacity-70">Seeking the unseen paths of Patagonia. Nomad Guide &amp; Photographer.</p>
            </div>
            
            {/* New Inline Stats Row */}
            <div className="flex items-center gap-8 py-4 px-8 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/10">
              <div className="text-center">
                <p className="text-xl font-extrabold text-on-surface">24</p>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Trips</p>
              </div>
              <div className="w-px h-8 bg-outline-variant/30"></div>
              <div className="text-center">
                <p className="text-xl font-extrabold text-on-surface">158</p>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Pins</p>
              </div>
              <div className="w-px h-8 bg-outline-variant/30"></div>
              <div className="text-center">
                <p className="text-xl font-extrabold text-on-surface">842</p>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Helpful</p>
              </div>
            </div>
          </div>
        </section>

        {/* VARIATION 2: Grid-Based Content View */}
        <section className="mb-10">
          <div className="flex gap-6 border-b border-outline-variant/20 mb-6 overflow-x-auto hide-scrollbar">
            <button className="pb-3 text-sm font-bold border-b-2 border-primary text-primary">Published</button>
            <button className="pb-3 text-sm font-bold text-on-surface-variant opacity-50">Saved</button>
            <button className="pb-3 text-sm font-bold text-on-surface-variant opacity-50">Drafts</button>
          </div>
          
          {/* 2-Column Responsive Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Grid Card 1 (Large) */}
            <div className="col-span-2 group relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
              <img alt="Glacier" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1m3J23Mt399QsFjau9Y9dFJBL8QUBZEz4eBGXqo7Vf37yIVQXfHiPKKAxHG0rqPphXWhTrfA10kBLyPJ6b73136xUMKIWYwXyxdjImU_LPw4Oo5SXAxx4GgZbWgTKe7RcVHdhq7eFMdfF267e8LcsW1c4Ky9oXalI0d7LHorzCYNOQO_PCuxrgnrvNwnDXOqGIDSzBd2sA3st1bzAHUdQLmNX50kVflerx-338P4HmrTdMYc_PTXKNWepPHRPf2L-UgBLZZ347l4" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[9px] font-black uppercase bg-secondary px-2 py-0.5 rounded-md mb-2 inline-block">Featured</span>
                <h3 className="font-bold text-lg leading-tight">Glacier National Park: The Quiet Routes</h3>
              </div>
            </div>
            {/* Grid Card 2 */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10 cursor-pointer">
              <div className="h-32 w-full overflow-hidden">
                <img alt="Cafe" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvIt6dvJmg9kNSVFRzcKWM2ZZ8UyzVwMZtie9A5sxgg4kcc619JK3qDZXLppghAj58ZTZ01VPohYM4rhow08c4WjA2IE07Kea6fenOYMmTsSiP2n0_DTy8FFpu0l9VQ3xuODrWDqFtTaG13V2XVvBxzl5iMKhW3DNAJt4QdGOFwUT4GUiwhP6A9PTonEK-5P30Vc2P8R9LAZkvEtufFnOn-jIZmTWZyiEBqnDHxjkQLCxEtFUyZWUbdVwdUv93jcmdu2bbo4p7Hos" />
              </div>
              <div className="p-3">
                <p className="text-[9px] font-bold text-primary uppercase mb-1">Article</p>
                <h4 className="font-bold text-sm leading-tight line-clamp-2">5 Best Hidden Coffee Spots in Shibuya</h4>
              </div>
            </div>
            {/* Grid Card 3 */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10 cursor-pointer">
              <div className="h-32 w-full overflow-hidden">
                <img alt="Costa Rica" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiFxpghm_mdeW5lkhlrEWTkn-6EYISCcPGXdi0XRRA9yDI8DEstj1YnKguMQ0dCi18bM-Vxc8pwnHSkTXqatIJ-GrMYAlchgH_c59Qubu_e_HdhCx5iF9E36_88LXyoxtDWELPghDGmWy7mVl4zqwtToat4eOIqrcu35RBzwE2TIgqM16g_7BBWdqmsLmIqPNNyOfYjQJLG0VkFrD0zEGFaGDcyqTLIcxZOEQdRJW4RnsvRnkpPPA2aFftLOu2tRzhAQ4gfgAL5EI" />
              </div>
              <div className="p-3">
                <p className="text-[9px] font-bold text-primary uppercase mb-1">Guide</p>
                <h4 className="font-bold text-sm leading-tight line-clamp-2">Sustainable Trekking in Costa Rica</h4>
              </div>
            </div>
          </div>
        </section>

        {/* VARIATION 3: Integrated Privacy Settings */}
        <section className="bg-surface-container-low/50 backdrop-blur-sm rounded-3xl p-6 border border-outline-variant/10 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-extrabold flex items-center gap-2">
              <Icon name="shield_person" className="text-primary text-xl" />
              Account Settings
            </h2>
            <button className="text-xs font-bold text-primary hover:underline border-none bg-transparent">Edit Detailed Privacy</button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {/* Setting Item 1 */}
            <div className="flex items-center justify-between bg-surface-container-lowest p-4 rounded-2xl shadow-sm cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Icon name="lock" />
                </div>
                <div>
                  <p className="text-sm font-bold">Private Account</p>
                  <p className="text-[11px] text-on-surface-variant opacity-70">Follower approval required</p>
                </div>
              </div>
              <div className="w-12 h-6 bg-outline-variant rounded-full relative p-1 cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full transition-all"></div>
              </div>
            </div>
            {/* Setting Item 2 */}
            <div className="flex items-center justify-between bg-surface-container-lowest p-4 rounded-2xl shadow-sm cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <Icon name="bolt" />
                </div>
                <div>
                  <p className="text-sm font-bold">Battery Saver Mode</p>
                  <p className="text-[11px] text-on-surface-variant opacity-70">Reduce motion &amp; transitions</p>
                </div>
              </div>
              <div className="w-12 h-6 bg-primary rounded-full relative p-1 cursor-pointer flex justify-end">
                <div className="w-4 h-4 bg-white rounded-full transition-all"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
