import React, { useEffect, useRef } from 'react';
import { Search, Bell, Map, ArrowRight, ArrowLeft, Star, Compass } from 'lucide-react';
import { useStore } from '../../store/useStore';
import TripCard from '../../components/common/TripCard';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const { destinations, getPublishedTrips } = useStore();
  const publishedTrips = getPublishedTrips();
  
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Premium entrance animation
    const tl = gsap.timeline();
    
    tl.fromTo(heroRef.current, 
      { opacity: 0, scale: 1.05 }, 
      { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }
    );
    
    tl.fromTo('.stagger-fade-in', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
      "-=0.6"
    );
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-2xl border-b border-white/20 flex justify-between items-center px-6 h-20 transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-primary p-2 rounded-xl text-white shadow-lg shadow-primary/30">
            <Compass size={24} strokeWidth={2.5} />
          </div>
          <span className="text-2xl font-extrabold tracking-tighter text-on-surface">Tredit.</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-12 h-12 rounded-full flex items-center justify-center bg-surface hover:bg-surface-container-low border border-outline-variant/20 transition-colors shadow-sm">
            <Bell size={20} className="text-on-surface-variant" />
          </button>
        </div>
      </header>

      <main className="pb-32" ref={contentRef}>
        {/* Immersive Full-Bleed Hero */}
        <section ref={heroRef} className="relative h-[85vh] flex flex-col justify-end overflow-hidden mb-12 rounded-b-[3rem] shadow-ambient">
          <div className="absolute inset-0 -z-10">
            <img 
              alt="Immersive landscape" 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-surface"></div>
          </div>
          
          <div className="px-6 pb-20 w-full max-w-2xl mx-auto text-center stagger-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest mb-6 border border-white/30">
              Responsible Travel Diary
            </span>
            <h1 className="font-headline text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-[1.1] drop-shadow-lg">
              Journey with <br/>
              <span className="text-primary-fixed">Purpose.</span>
            </h1>
            <p className="text-white/90 font-medium mb-10 text-lg leading-relaxed max-w-xl mx-auto drop-shadow-md">
              Discover authentic itineraries from genuine travelers. Document your adventures. Travel responsibly.
            </p>
            
            {/* Prominent Search Interaction */}
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-2 shadow-2xl shadow-primary/20 border border-white/50 flex items-center gap-2 max-w-lg mx-auto">
              <div className="flex-grow flex items-center gap-3 px-4">
                <Search size={20} className="text-primary" />
                <input 
                  className="bg-transparent border-none focus:ring-0 w-full text-on-surface font-medium placeholder:text-on-surface-variant/50 outline-none" 
                  placeholder="Where to next?" 
                  type="text"
                />
              </div>
              <button className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-xl font-bold transition-all active:scale-95 whitespace-nowrap shadow-lg shadow-primary/30">
                Plan Trip
              </button>
            </div>
          </div>
        </section>

        {/* Dynamic Destinations (Bento Grid) */}
        <section className="px-6 py-12 max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-10 stagger-fade-in">
            <div>
              <h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight mb-2">Trending Destinations</h2>
              <p className="text-on-surface-variant text-sm font-medium">Curated guides for responsible travel</p>
            </div>
            <Link to="/explore" className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
              Explore All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 stagger-fade-in">
            {destinations.slice(0, 3).map((dest, i) => (
              <Link 
                key={dest.slug}
                to={`/destination/${dest.slug}`}
                className={`relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-ambient-lg ${i === 0 ? 'col-span-2 md:col-span-2 h-80' : 'col-span-1 h-80'}`}
              >
                <img 
                  alt={dest.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src={dest.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 inline-block border border-white/20">
                    {dest.region}
                  </span>
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-white font-headline text-2xl md:text-3xl font-bold">{dest.name}</h3>
                      <p className="text-white/80 text-sm mt-1 font-medium">{dest.tripCount} itineraries</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Structured Modern Recent Activity */}
        <section className="px-6 mb-20 max-w-6xl mx-auto stagger-fade-in">
          <div className="bg-surface-container-low border border-outline-variant/20 rounded-[2.5rem] p-6 md:p-10 shadow-ambient">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="font-headline text-3xl font-extrabold text-on-surface mb-2">Community Diaries</h2>
                <p className="text-on-surface-variant font-medium text-sm">Real experiences from genuine travelers</p>
              </div>
              <div className="hidden md:flex gap-3">
                <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface-container-high transition-all shadow-sm border border-outline-variant/10 hover:scale-105 active:scale-95">
                  <ArrowLeft size={20} className="text-on-surface" />
                </button>
                <button className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-all shadow-lg shadow-primary/30 hover:scale-105 active:scale-95">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {publishedTrips.map(trip => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <button className="w-full bg-white py-4 rounded-xl font-bold text-primary border border-outline-variant/20 shadow-sm">
                View More Trips
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
