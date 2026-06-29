import React, { useState, useEffect } from 'react';
import { Search, Bell, Compass, MapPin } from 'lucide-react';
import { useStore } from '../../store/useStore';
import TripCard from '../../components/common/TripCard';
import gsap from 'gsap';

export default function Explore() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const { user, getPublishedTrips, users } = useStore();
  const allPublishedTrips = getPublishedTrips();
  
  // Filter trips based on activeFilter and searchQuery
  const filteredTrips = allPublishedTrips.filter(trip => {
    const matchesFilter = activeFilter === 'All' || trip.tags.includes(activeFilter.toLowerCase());
    const matchesSearch = trip.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          trip.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.stagger-item',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: 'power2.out' }
    );
  }, [activeFilter, searchQuery]);

  return (
    <div className="bg-surface text-on-surface min-h-[100dvh] pb-32 font-body selection:bg-primary-container selection:text-on-surface">
      {/* Dynamic Background Blur */}
      <div className="fixed top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 via-secondary/5 to-transparent pointer-events-none -z-10"></div>

      {/* TopAppBar */}
      <header className="sticky top-0 w-full z-50 bg-white/70 backdrop-blur-2xl flex justify-between items-center px-6 h-20 border-b border-outline-variant/10">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-primary p-2 rounded-xl text-white shadow-lg shadow-primary/30">
            <Compass size={20} strokeWidth={2.5} />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tighter text-on-surface">Explore.</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-12 h-12 rounded-full bg-white border border-outline-variant/20 shadow-sm flex items-center justify-center hover:bg-surface-container transition-all active:scale-95">
            <Bell size={20} className="text-on-surface-variant" />
          </button>
          <img alt="User Profile" className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover" src={user.avatarUrl} />
        </div>
      </header>

      <main className="pt-8 pb-32 max-w-7xl mx-auto px-6 space-y-10">
        <div className="space-y-8 stagger-item">
          <div className="flex flex-col gap-2 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight leading-tight">Find your next<br/><span className="text-primary italic font-serif">adventure.</span></h2>
            <p className="text-on-surface-variant text-base font-medium mt-2">Discover genuine journeys and raw experiences from travelers worldwide.</p>
          </div>
          
          <div className="flex items-center gap-3 bg-white rounded-[2rem] p-3 shadow-ambient border border-outline-variant/20 flex-nowrap focus-within:border-primary/50 focus-within:ring-4 focus-within:ring-primary/10 transition-all">
            <div className="flex-1 flex items-center gap-3 pl-5">
              <Search size={22} className="text-outline shrink-0" />
              <input 
                className="bg-transparent border-none focus:ring-0 w-full text-base font-medium placeholder:text-outline/80 outline-none" 
                placeholder="Search destinations, creators, or vibes..." 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-[1.5rem] font-bold text-sm shrink-0 transition-colors shadow-md shadow-primary/20">
              Search
            </button>
          </div>
          
          <div className="flex gap-3 overflow-x-auto hide-scrollbar -mx-6 px-6 pb-2">
            {['All', 'Nature', 'Culture', 'Food', 'Adventure', 'Relaxation'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all active:scale-95 ${
                  activeFilter === filter
                    ? 'bg-secondary text-white shadow-lg shadow-secondary/30 scale-105'
                    : 'bg-white border border-outline-variant/20 text-on-surface-variant hover:border-outline-variant/40 hover:text-on-surface hover:shadow-sm'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrips.length > 0 ? (
            filteredTrips.map(trip => (
              <div key={trip.id} className="stagger-item h-full">
                <TripCard trip={trip} />
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-white rounded-[2.5rem] border border-dashed border-outline-variant/40 stagger-item">
              <Compass size={48} className="mx-auto text-outline-variant/40 mb-4 animate-pulse" />
              <h3 className="text-xl font-bold text-on-surface mb-2">No trips found</h3>
              <p className="text-on-surface-variant">Try adjusting your filters or search query.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
