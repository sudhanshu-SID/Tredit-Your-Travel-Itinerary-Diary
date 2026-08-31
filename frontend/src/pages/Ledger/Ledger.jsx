import React, { useEffect, useState, useRef } from 'react';
import { Bell, ChevronRight, Activity, TrendingUp, Compass, Award } from 'lucide-react';
import { useStore } from '../../store/useStore';
import gsap from 'gsap';

export default function Ledger() {
  const { user, getPastTrips, getFutureTrips } = useStore();
  const [activeTab, setActiveTab] = useState('past');
  
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  const pastTrips = getPastTrips();
  const futureTrips = getFutureTrips();
  
  let displayTrips = activeTab === 'past' ? pastTrips : futureTrips;

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(headerRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
    );
    tl.fromTo('.stagger-card',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
      "-=0.4"
    );
  }, [activeTab]);

  return (
    <div className="bg-surface text-on-surface font-body min-h-[100dvh] pb-32">
      {/* Background Gradient */}
      <div className="fixed top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none -z-10"></div>

      {/* Header */}
      <header className="sticky top-0 w-full z-50 bg-white/70 backdrop-blur-2xl border-b border-outline-variant/10 px-6 h-20 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-primary p-2 rounded-xl text-white shadow-lg shadow-primary/30">
            <TrendingUp size={20} strokeWidth={2.5} />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tighter text-on-surface">Ledger.</h1>
        </div>
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-outline-variant/20 shadow-sm transition-all hover:bg-surface-container active:scale-95">
          <Bell size={20} className="text-on-surface-variant" />
        </button>
      </header>

      <main className="pt-8 pb-32 space-y-12 max-w-2xl mx-auto px-6">
        {/* Header Section */}
        <section ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2 block bg-primary/10 w-fit px-3 py-1 rounded-full">Impact Overview</span>
            <h2 className="text-4xl font-extrabold font-headline tracking-tight">Trip History</h2>
          </div>
          
          <div className="p-1.5 bg-surface-container-low border border-outline-variant/20 rounded-full flex gap-1 shadow-inner w-fit">
            <button 
              onClick={() => setActiveTab('past')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'past' ? 'bg-white shadow-sm text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              Past
            </button>
            <button 
              onClick={() => setActiveTab('future')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'future' ? 'bg-white shadow-sm text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              Future
            </button>
          </div>
        </section>

        {/* Global Impact Card */}
        <section className="stagger-card">
          <div className="bg-gradient-to-br from-primary to-primary-container text-white rounded-[2.5rem] p-8 shadow-xl shadow-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-20 transform translate-x-4 -translate-y-4">
              <Award size={120} strokeWidth={1} />
            </div>
            
            <div className="relative z-10">
              <p className="text-white/80 text-sm font-bold uppercase tracking-widest mb-1">Lifetime Tredit Score</p>
              <h3 className="text-6xl font-black mb-6">{user.treditScore}</h3>
              
              <div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-6">
                <div>
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-1">Total Trips</p>
                  <p className="text-2xl font-bold">{pastTrips.length}</p>
                </div>
                <div>
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-1">Rank</p>
                  <p className="text-2xl font-bold">Nomad</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* List Section */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold font-headline mb-6 flex items-center gap-2">
            <Activity size={20} className="text-primary" />
            {activeTab === 'past' ? 'Completed Journeys' : 'Upcoming Plans'}
          </h3>
          
          {displayTrips.length > 0 ? (
            <div className="space-y-4">
              {displayTrips.map((trip, idx) => (
                <div key={trip.id} className="stagger-card group bg-white p-4 rounded-[2rem] flex items-center gap-5 hover:shadow-ambient transition-all border border-outline-variant/10 cursor-pointer hover:border-primary/20 hover:-translate-y-1">
                  <div className="w-20 h-20 shrink-0 rounded-2xl overflow-hidden bg-surface-container relative">
                    <img alt={trip.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={trip.coverImage} />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  
                  <div className="flex-grow min-w-0">
                    <h4 className="font-bold text-base text-on-surface truncate pr-4">{trip.title}</h4>
                    <p className="text-xs font-medium text-on-surface-variant mt-1 flex items-center gap-1.5">
                      <Compass size={12} className="text-primary" />
                      {trip.durationDays} Days • {trip.stops} Stops
                    </p>
                  </div>
                  
                  <div className="text-right shrink-0 px-2 flex flex-col justify-center items-end border-l border-outline-variant/20 pl-4">
                    <p className="text-xl font-black text-primary">+{trip.scoreReward}</p>
                    <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest mt-0.5">Score</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-[2rem] border border-dashed border-outline-variant/30 stagger-card">
              <Compass size={48} className="mx-auto text-outline-variant/50 mb-4" />
              <p className="text-on-surface-variant font-medium">No {activeTab} trips found.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
