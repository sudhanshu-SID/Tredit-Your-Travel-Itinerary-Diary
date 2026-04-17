import React from 'react';
import Icon from '../../components/icons/Icon';

export default function TripDetail() {
  return (
    <div className="bg-background font-body text-on-background min-h-screen">
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-3">
          <Icon name="travel_explore" className="text-primary" />
          <h1 className="text-2xl font-extrabold tracking-tighter text-primary">Tredit</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end mr-2">
            <span className="text-[10px] font-bold text-secondary uppercase tracking-tighter">Manali Trip</span>
            <span className="text-[10px] text-outline">Day 4 of 7</span>
          </div>
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-low transition-colors">
            <Icon name="more_vert" className="text-on-surface-variant text-xl" />
          </button>
        </div>
      </header>

      <main className="pt-20 pb-32">
        {/* Variant Header: Compact & Action Oriented */}
        <section className="px-6 mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-extrabold font-headline text-on-surface leading-tight">Current Stop</h2>
              <p className="text-on-surface-variant text-sm font-medium mt-1">Old Manali District</p>
            </div>
            <div className="flex -space-x-3">
              <img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHxFJrhsSd6JlN4wrZS7mk2nZqcll-CRVc14PwkCBeKAmZjmV361uKAfyUR6NiZtAh3kmB9eSVbbqA-P9CetXStImnblbz8wQx0Zf2LiiMjWWAp6zseft6GybUuwuhA_Z9LaEDENxKT5b0WLUwChhe0ebpidcuvLVPUnpvyu4som4GpmsHqaFThkvlJ1S3YxHeIwTKmZiaDxngYB3qjK2L97eUdndYAtHH-FYijqvf9gxtXI1dbDR-0tl1siroQlS3FlivSDgsLCc" />
              <img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIRn3FNomcT0euVk4NKBoMR8vkKKqhLHCUnddA5w5DA0kwsYFys2duIVqK0MS572FzDrUc6hu4VVjOKLbvAq9uorBztxGCunrPXX7JWJ0Fa6uDb-LTckHozt6mTv1_94AG1U_4Jub-YxVrckIsNe79gQQNMmBwNJkWUt7qepOUbwBHt2C_OV_U4mC5FZIZ8pHyUnfEDver8hm4p3f1Pa2a1bmOXVFwTUKUGg9RCL1TC-yoILf4Z75TN8Rc0lxoNjpv0nfg-35bZVA" />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-[10px] font-bold text-white">+2</div>
            </div>
          </div>
        </section>

        {/* Central Action Area */}
        <section className="px-6 mb-10">
          <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-outline-variant/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <Icon name="map" filled className="text-primary/10 text-8xl" />
            </div>
            <div className="relative z-10 text-center">
              <button className="w-24 h-24 rounded-full bg-primary shadow-lg shadow-primary/30 flex flex-col items-center justify-center mx-auto mb-6 active:scale-95 transition-all">
                <Icon name="add_location_alt" filled className="text-on-primary text-4xl" />
              </button>
              <h3 className="font-bold text-lg">Pin your location</h3>
              <p className="text-sm text-outline px-8 mt-1">Add a photo, note, or expense to your live trip timeline</p>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-8">
              <button className="flex flex-col items-center gap-1.5 p-2 rounded-2xl hover:bg-surface-container transition-colors">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                  <Icon name="restaurant" className="text-secondary text-lg" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant font-label">Food</span>
              </button>
              <button className="flex flex-col items-center gap-1.5 p-2 rounded-2xl hover:bg-surface-container transition-colors">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                  <Icon name="photo_camera" className="text-secondary text-lg" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant font-label">Spot</span>
              </button>
              <button className="flex flex-col items-center gap-1.5 p-2 rounded-2xl hover:bg-surface-container transition-colors">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                  <Icon name="bed" className="text-secondary text-lg" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant font-label">Stay</span>
              </button>
              <button className="flex flex-col items-center gap-1.5 p-2 rounded-2xl hover:bg-surface-container transition-colors">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                  <Icon name="payments" className="text-secondary text-lg" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant font-label">Split</span>
              </button>
            </div>
          </div>
        </section>

        {/* Horizontal Compact Timeline */}
        <section className="mb-10">
          <div className="flex justify-between items-center px-6 mb-4">
            <h3 className="text-lg font-bold font-headline">Recent Memories</h3>
            <button className="text-xs font-bold text-primary flex items-center gap-1 border-none bg-transparent">
              Full View <Icon name="arrow_forward" className="text-xs" />
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto px-6 hide-scrollbar pb-4">
            {/* Memory Card 1 */}
            <div className="min-w-[280px] bg-white p-3 rounded-2xl shadow-sm border border-outline-variant/10">
              <div className="relative h-40 rounded-xl overflow-hidden mb-3">
                <img className="w-full h-full object-cover" alt="ancient wooden temple in a misty cedar forest" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuYZY_UJ1KWyGe4m9Bar9_pCaneGFY4z6DQEb3P47KhjBomgEuTribwYVbw_tnklgEzsIUWa2gm-UxEO8lYp0HU4Eawg-FUSFi_6tLhcyWiXIk1mnyVAqzszVltZwysJY3vPNUz6LlZJBMEG4m67GTUWd-VxTSFzqZhTQgyUdqqF2atNUIsl89bjz-2tdWSIUZJu-tVUOPX9RmC6MwK3_qtLkkom647hguFmnhy8om0GHPi_ODpqFM05LiiNrFOfKiIsuOct-sTZ8" />
                <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                  <Icon name="schedule" className="text-[12px]" /> 14:20
                </div>
              </div>
              <div className="px-1">
                <h4 className="font-bold text-sm">Hadimba Devi Temple</h4>
                <p className="text-[11px] text-on-surface-variant line-clamp-1 mt-0.5">Stunning wooden temple in forest...</p>
              </div>
            </div>
            {/* Memory Card 2 */}
            <div className="min-w-[280px] bg-white p-3 rounded-2xl shadow-sm border border-outline-variant/10">
              <div className="flex items-center gap-3 h-40 bg-surface-container-low rounded-xl justify-center flex-col">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Icon name="restaurant" className="text-secondary" />
                </div>
                <div className="text-center px-4">
                  <h4 className="font-bold text-sm">Johnson's Cafe</h4>
                  <p className="text-[11px] text-on-surface-variant mt-1 italic">"Best trout in Manali! Garden seating is so peaceful."</p>
                </div>
                <div className="mt-2 text-[10px] font-bold text-outline">12:45 PM</div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="px-6 grid grid-cols-2 gap-4 mb-10">
          <div className="bg-surface-container-lowest p-4 rounded-3xl border border-outline-variant/10">
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest font-label">Distance Today</span>
            <div className="flex items-end gap-1 mt-1">
              <span className="text-2xl font-black text-on-surface">12.4</span>
              <span className="text-xs font-bold text-on-surface-variant mb-1">KM</span>
            </div>
            <div className="mt-2 w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
              <div className="bg-secondary h-full text-transparent" style={{ width: '65%' }}></div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-4 rounded-3xl border border-outline-variant/10">
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest font-label">Daily Budget</span>
            <div className="flex items-end gap-1 mt-1">
              <span className="text-2xl font-black text-on-surface">₹2,450</span>
            </div>
            <div className="mt-2 text-[10px] font-medium text-error">₹550 over limit</div>
          </div>
        </section>

        <section className="px-6 flex justify-center">
          <button className="w-full bg-surface-container-highest/50 text-on-surface-variant px-8 py-4 rounded-2xl font-bold text-sm font-label flex items-center justify-center gap-3 active:scale-95 transition-all border border-outline-variant/20 hover:bg-surface-container-highest/70">
            <Icon name="stop_circle" className="text-error" />
            Finish &amp; Archive Trip
          </button>
        </section>
      </main>
    </div>
  );
}
