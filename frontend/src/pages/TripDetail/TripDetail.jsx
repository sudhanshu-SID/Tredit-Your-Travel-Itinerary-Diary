import React, { useEffect, useRef } from 'react';
import { Compass, MoreVertical, Map, MapPin, Coffee, Camera, Bed, CreditCard, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { useParams } from 'react-router-dom';
import gsap from 'gsap';

export default function TripDetail() {
  const { id } = useParams();
  const pageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.stagger-item',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className="bg-surface text-on-surface min-h-[100dvh]" ref={pageRef}>
      {/* Premium Header */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-2xl flex justify-between items-center px-6 h-20 border-b border-outline-variant/10">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-primary p-2 rounded-xl text-white shadow-lg shadow-primary/30">
            <Compass size={20} strokeWidth={2.5} />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tighter text-on-surface">Tredit.</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-black text-secondary uppercase tracking-widest bg-secondary/10 px-2 py-0.5 rounded-md mb-0.5">Active Trip</span>
            <span className="text-[10px] font-bold text-on-surface-variant uppercase">Day 4 of 7</span>
          </div>
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-outline-variant/20 shadow-sm hover:bg-surface-container transition-all active:scale-95">
            <MoreVertical size={20} className="text-on-surface" />
          </button>
        </div>
      </header>

      <main className="pt-28 pb-32 max-w-lg mx-auto">
        {/* Context Header */}
        <section className="px-6 mb-10 stagger-item">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-extrabold font-headline text-on-surface leading-tight tracking-tight">Manali<br/>Expedition</h2>
              <p className="text-primary font-bold text-sm mt-2 flex items-center gap-1">
                <MapPin size={14} /> Old Manali District
              </p>
            </div>
            <div className="flex -space-x-3 mb-1">
              <img alt="User" className="w-10 h-10 rounded-full border-[3px] border-surface object-cover shadow-sm relative z-20" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" />
              <img alt="User" className="w-10 h-10 rounded-full border-[3px] border-surface object-cover shadow-sm relative z-10" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200" />
              <div className="w-10 h-10 rounded-full border-[3px] border-surface bg-secondary-container flex items-center justify-center text-[10px] font-black text-on-secondary shadow-sm relative z-0">+2</div>
            </div>
          </div>
        </section>

        {/* Central Action Area (Map & Pins) */}
        <section className="px-6 mb-12 stagger-item">
          <div className="bg-white rounded-[2.5rem] p-8 shadow-ambient border border-outline-variant/10 relative overflow-hidden group">
            <div className="absolute top-4 right-4 text-primary/5 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
              <Map size={160} strokeWidth={1} />
            </div>
            <div className="relative z-10 text-center pt-4">
              <button className="w-24 h-24 rounded-full bg-gradient-primary shadow-xl shadow-primary/40 flex flex-col items-center justify-center mx-auto mb-6 hover:scale-105 active:scale-95 transition-all">
                <MapPin size={32} className="text-white" fill="currentColor" />
              </button>
              <h3 className="font-extrabold text-2xl text-on-surface mb-2">Drop a Pin</h3>
              <p className="text-sm font-medium text-on-surface-variant px-4">Document a spot, meal, or memory to your live timeline.</p>
            </div>
            
            <div className="grid grid-cols-4 gap-3 mt-10">
              <button className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-surface-container-low transition-colors group/btn">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-colors">
                  <Coffee size={20} className="text-primary group-hover/btn:text-white" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Food</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-surface-container-low transition-colors group/btn">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover/btn:bg-tertiary group-hover/btn:text-white transition-colors">
                  <Camera size={20} className="text-tertiary group-hover/btn:text-white" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Spot</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-surface-container-low transition-colors group/btn">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover/btn:bg-secondary group-hover/btn:text-white transition-colors">
                  <Bed size={20} className="text-secondary group-hover/btn:text-white" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Stay</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-surface-container-low transition-colors group/btn">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover/btn:bg-error group-hover/btn:text-white transition-colors">
                  <CreditCard size={20} className="text-error group-hover/btn:text-white" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Split</span>
              </button>
            </div>
          </div>
        </section>

        {/* Timeline Snapshots */}
        <section className="mb-12 stagger-item overflow-hidden">
          <div className="flex justify-between items-center px-6 mb-6">
            <h3 className="text-xl font-extrabold font-headline">Today's Timeline</h3>
            <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
              Full View <ArrowRight size={14} />
            </button>
          </div>
          
          <div className="flex gap-5 overflow-x-auto px-6 hide-scrollbar pb-4 snap-x">
            {/* Memory Card 1 */}
            <div className="min-w-[280px] snap-center bg-white p-4 rounded-[2rem] shadow-sm border border-outline-variant/10">
              <div className="relative h-44 rounded-2xl overflow-hidden mb-4">
                <img className="w-full h-full object-cover" alt="Hadimba Temple" src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2000" />
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <Clock size={12} /> 14:20
                </div>
                <div className="absolute bottom-3 left-3 bg-tertiary text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md">
                  Spot
                </div>
              </div>
              <div className="px-2">
                <h4 className="font-bold text-base mb-1">Hadimba Devi Temple</h4>
                <p className="text-xs text-on-surface-variant font-medium line-clamp-2">Ancient wooden temple surrounded by a misty cedar forest. Very peaceful.</p>
              </div>
            </div>
            
            {/* Memory Card 2 */}
            <div className="min-w-[280px] snap-center bg-white p-4 rounded-[2rem] shadow-sm border border-outline-variant/10">
              <div className="flex items-center gap-3 h-44 bg-surface-container-low rounded-2xl justify-center flex-col relative border border-outline-variant/10">
                <div className="absolute top-3 right-3 bg-white text-on-surface text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Clock size={12} /> 12:45
                </div>
                <div className="absolute bottom-3 left-3 bg-primary text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md">
                  Food
                </div>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mt-2">
                  <Coffee size={24} className="text-primary" />
                </div>
                <div className="text-center px-6 mt-2">
                  <h4 className="font-bold text-base mb-1">Johnson's Cafe</h4>
                  <p className="text-xs text-on-surface-variant font-medium italic leading-relaxed">"Best trout in Manali! Garden seating is so peaceful."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="px-6 grid grid-cols-2 gap-4 mb-12 stagger-item">
          <div className="bg-white p-5 rounded-[2rem] border border-outline-variant/10 shadow-sm flex flex-col justify-between">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2 block">Distance Today</span>
            <div>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-3xl font-black text-on-surface leading-none">12.4</span>
                <span className="text-xs font-bold text-on-surface-variant mb-1">KM</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div className="bg-tertiary h-full rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-[2rem] border border-outline-variant/10 shadow-sm flex flex-col justify-between">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2 block">Daily Budget</span>
            <div>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-3xl font-black text-on-surface leading-none">₹2,450</span>
              </div>
              <div className="inline-block px-2 py-1 bg-error/10 text-error text-[10px] font-bold rounded-md">
                ₹550 over limit
              </div>
            </div>
          </div>
        </section>

        {/* Finish Trip Button */}
        <section className="px-6 flex justify-center stagger-item">
          <button className="w-full bg-surface-container text-on-surface-variant px-8 py-5 rounded-2xl font-bold text-sm flex items-center justify-center gap-3 active:scale-95 transition-all hover:bg-surface-container-high hover:text-on-surface shadow-sm">
            <CheckCircle size={20} />
            Finish &amp; Archive Trip
          </button>
        </section>
      </main>
    </div>
  );
}
