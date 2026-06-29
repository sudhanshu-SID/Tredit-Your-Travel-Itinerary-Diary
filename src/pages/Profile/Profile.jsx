import React, { useEffect, useRef, useState } from 'react';
import { Settings, Search, MapPin, Navigation, Star, Shield, Battery, LogOut, ChevronRight, Bookmark, PenTool } from 'lucide-react';
import { useStore } from '../../store/useStore';
import TripCard from '../../components/common/TripCard';
import gsap from 'gsap';

export default function Profile() {
  const { user, getPastTrips, getFutureTrips, getPublishedTrips, trips } = useStore();
  const [activeTab, setActiveTab] = useState('published');
  
  const headerRef = useRef(null);
  const statsRef = useRef(null);
  
  const pastTrips = getPastTrips();
  const publishedTrips = getPublishedTrips().filter(t => t.createdByUserId === user.id);
  const savedTrips = trips.filter(t => user.savedTrips.includes(t.id));

  // Determine which trips to show based on tab
  let displayTrips = [];
  if (activeTab === 'published') displayTrips = publishedTrips;
  if (activeTab === 'saved') displayTrips = savedTrips;
  if (activeTab === 'drafts') displayTrips = getFutureTrips();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(headerRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
    );
    tl.fromTo(statsRef.current,
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.5)' },
      "-=0.3"
    );
    tl.fromTo('.stagger-card',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
      "-=0.2"
    );
  }, []);

  return (
    <div className="bg-surface text-on-surface min-h-[100dvh] pb-32">
      {/* Dynamic Background Blur */}
      <div className="fixed top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none -z-10"></div>

      {/* Top Navigation */}
      <header ref={headerRef} className="sticky top-0 w-full z-50 bg-white/70 backdrop-blur-2xl px-6 h-20 flex justify-between items-center border-b border-white/20">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight text-on-surface">Profile.</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-sm border border-outline-variant/10 hover:bg-surface-container transition-all hover:scale-105 active:scale-95">
            <Search size={20} className="text-on-surface" />
          </button>
          <button className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-sm border border-outline-variant/10 hover:bg-surface-container transition-all hover:scale-105 active:scale-95">
            <Settings size={20} className="text-on-surface" />
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-8">
        {/* Profile Header & Stats */}
        <section ref={statsRef} className="mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white p-8 rounded-[2.5rem] shadow-ambient border border-outline-variant/10">
            <div className="relative shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden border-[4px] border-white shadow-xl bg-surface-container">
                <img alt={user.name} className="w-full h-full object-cover" src={user.avatarUrl} />
              </div>
              <div className="absolute -bottom-2 right-0 bg-gradient-primary text-white text-xs font-black px-3 py-1.5 rounded-xl flex items-center gap-1 shadow-lg shadow-primary/30">
                <Star size={14} fill="currentColor" />
                {user.treditScore}
              </div>
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <h1 className="text-3xl font-black text-on-surface tracking-tight mb-2">{user.name}</h1>
              <p className="text-on-surface-variant font-medium mb-6 text-sm max-w-md mx-auto md:mx-0">
                Seeking the unseen paths. Documenting genuine travel experiences and leaving no trace behind.
              </p>
              
              {/* Stats Row */}
              <div className="flex items-center justify-center md:justify-start gap-8 bg-surface-container-low px-6 py-4 rounded-2xl w-fit mx-auto md:mx-0">
                <div className="text-center">
                  <p className="text-2xl font-black text-primary">{pastTrips.length + publishedTrips.length}</p>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">Trips</p>
                </div>
                <div className="w-px h-10 bg-outline-variant/30"></div>
                <div className="text-center">
                  <p className="text-2xl font-black text-secondary">{savedTrips.length}</p>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">Saved</p>
                </div>
                <div className="w-px h-10 bg-outline-variant/30"></div>
                <div className="text-center">
                  <p className="text-2xl font-black text-tertiary">{user.treditScore}</p>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">Impact</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabbed Content View */}
        <section className="mb-14">
          <div className="flex gap-8 border-b border-outline-variant/20 mb-8 px-2 overflow-x-auto hide-scrollbar">
            {[
              { id: 'published', label: 'Published', icon: Navigation },
              { id: 'saved', label: 'Saved', icon: Bookmark },
              { id: 'drafts', label: 'Drafts', icon: PenTool }
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 text-sm font-bold flex items-center gap-2 border-b-2 transition-all ${
                  activeTab === tab.id 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>
          
          {displayTrips.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {displayTrips.map((trip) => (
                <div key={trip.id} className="stagger-card">
                  <TripCard trip={trip} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-outline-variant/30">
              <Navigation size={48} className="mx-auto text-outline-variant/50 mb-4" />
              <p className="text-on-surface-variant font-medium">No trips found here yet.</p>
            </div>
          )}
        </section>

        {/* Integrated Settings Menu */}
        <section className="bg-white rounded-[2.5rem] p-8 border border-outline-variant/10 shadow-ambient">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-extrabold flex items-center gap-3">
              <Shield className="text-primary" size={24} />
              Account Settings
            </h2>
          </div>
          
          <div className="space-y-3">
            {/* Setting Item 1 */}
            <div className="flex items-center justify-between bg-surface-container-low hover:bg-surface-container-high transition-colors p-5 rounded-2xl cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Shield size={20} />
                </div>
                <div>
                  <p className="text-base font-bold text-on-surface">Privacy & Security</p>
                  <p className="text-xs font-medium text-on-surface-variant mt-0.5">Manage visibility and data</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-outline-variant" />
            </div>
            
            {/* Setting Item 2 */}
            <div className="flex items-center justify-between bg-surface-container-low hover:bg-surface-container-high transition-colors p-5 rounded-2xl cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Battery size={20} />
                </div>
                <div>
                  <p className="text-base font-bold text-on-surface">Performance Mode</p>
                  <p className="text-xs font-medium text-on-surface-variant mt-0.5">Reduce motion to save battery</p>
                </div>
              </div>
              <div className="w-12 h-6 bg-outline-variant rounded-full relative p-1 cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full transition-all"></div>
              </div>
            </div>

            {/* Logout */}
            <div className="flex items-center justify-between bg-error/5 hover:bg-error/10 transition-colors p-5 rounded-2xl cursor-pointer group mt-4 border border-error/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-error/10 flex items-center justify-center text-error">
                  <LogOut size={20} />
                </div>
                <div>
                  <p className="text-base font-bold text-error">Log Out</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
