import React, { useState, useEffect } from 'react';
import { ArrowLeft, Share2, Star, Bookmark, Thermometer, Mountain, Calendar, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export default function Destination() {
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.fade-in-up',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
    );
  }, [activeTab]);

  return (
    <div className="bg-surface font-body text-on-surface min-h-[100dvh]">
      {/* Mobile Top Header */}
      <div className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-2xl flex justify-between items-center px-6 h-16 border-b border-white/20 transition-all">
        <Link to="/" className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm border border-outline-variant/10 hover:bg-surface-container transition-all active:scale-95">
          <ArrowLeft size={20} className="text-on-surface" />
        </Link>
        <span className="text-xl font-headline font-extrabold text-on-surface tracking-tight">Manali</span>
        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm border border-outline-variant/10 hover:bg-surface-container transition-all active:scale-95">
          <Share2 size={18} className="text-on-surface" />
        </button>
      </div>

      {/* Main Content */}
      <main className="pb-32 pt-16 max-w-4xl mx-auto">
        {/* The Immersive Header & Tabbed Interface */}
        <div className="relative w-full h-[40vh] md:h-[50vh] md:rounded-[2.5rem] md:mt-6 overflow-hidden shadow-ambient group">
          <img alt="Manali" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2000" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div className="text-white">
              <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1.5 flex items-center gap-1.5 text-white text-xs font-bold w-fit mb-3 shadow-sm">
                <Star size={14} className="fill-white text-white" />
                4.8 (2.4k reviews)
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold font-headline leading-tight drop-shadow-md">Valley of the Gods</h1>
            </div>
            <button className="bg-primary text-white p-4 rounded-2xl shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
              <Bookmark size={24} className="fill-white" />
            </button>
          </div>
        </div>

        {/* Sticky Tab Navigation */}
        <nav className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-outline-variant/20 px-6 flex gap-6 overflow-x-auto hide-scrollbar pt-2">
          {['Overview', 'Journeys', 'Inside Map', 'Reviews'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 text-sm font-bold tracking-tight whitespace-nowrap border-b-[3px] transition-all ${
                activeTab === tab
                  ? 'text-primary border-primary'
                  : 'text-on-surface-variant border-transparent hover:text-on-surface'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Tab Content: Overview */}
        {activeTab === 'Overview' && (
          <section className="px-6 mt-10 space-y-12" id="overview">
            <div className="fade-in-up">
              <h2 className="text-3xl font-headline font-extrabold tracking-tight mb-4 text-on-surface">Mountain Sanctuary</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed font-medium md:max-w-2xl">
                Nestled in the Beas River Valley, Manali is a gateway for skiing in the Solang Valley and trekking in Parvati Valley. It's a place where ancient wooden temples stand amidst contemporary cafés.
              </p>
            </div>
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 fade-in-up">
              <div className="bg-surface-container-low border border-outline-variant/10 p-5 rounded-[2rem] flex flex-col items-center text-center shadow-sm">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
                  <Thermometer size={20} className="text-secondary" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Temp</span>
                <span className="text-lg font-black text-on-surface">18°C</span>
              </div>
              <div className="bg-surface-container-low border border-outline-variant/10 p-5 rounded-[2rem] flex flex-col items-center text-center shadow-sm">
                <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center mb-3">
                  <Mountain size={20} className="text-tertiary" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Level</span>
                <span className="text-lg font-black text-on-surface">Mid</span>
              </div>
              <div className="bg-surface-container-low border border-outline-variant/10 p-5 rounded-[2rem] flex flex-col items-center text-center shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Calendar size={20} className="text-primary" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Season</span>
                <span className="text-lg font-black text-on-surface">Mar-Jun</span>
              </div>
            </div>
            
            {/* Ethical Aside (Integrated) */}
            <div className="bg-gradient-to-r from-tertiary/10 to-transparent border-l-[6px] border-tertiary rounded-r-3xl p-6 fade-in-up">
              <h3 className="text-tertiary font-bold flex items-center gap-2 mb-2 text-lg">
                <ShieldCheck size={22} />
                Ethical Navigator
              </h3>
              <p className="text-sm font-medium text-on-surface-variant leading-relaxed">
                Manali is a plastic-free zone. Please carry reusable water bottles, support local artisans, and respect temple dress codes.
              </p>
            </div>

            {/* Immersive "Pins" Grid */}
            <section className="fade-in-up">
              <h2 className="text-2xl font-headline font-extrabold mb-6 text-on-surface">Insider's Hotspots</h2>
              <div className="space-y-4">
                {/* Pin 1 */}
                <div className="relative h-[280px] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-md">
                  <img alt="Food" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=1500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                    <span className="bg-secondary/90 backdrop-blur-sm w-fit text-white text-[10px] font-black px-3 py-1 rounded-full mb-3 uppercase tracking-widest">Best Food</span>
                    <h3 className="text-white text-3xl font-headline font-extrabold mb-2">The Siddu Den</h3>
                    <p className="text-white/80 text-sm font-medium">Local handmade dumplings with clarified butter.</p>
                  </div>
                </div>
                {/* Pin 2 Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-[220px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm">
                    <img alt="Waterfall" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                      <span className="bg-tertiary/90 backdrop-blur-sm w-fit text-white text-[9px] font-black px-2 py-0.5 rounded-full mb-2 uppercase tracking-widest">Nature</span>
                      <h4 className="text-white font-extrabold text-lg">Jogini Falls</h4>
                    </div>
                  </div>
                  <div className="relative h-[220px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm">
                    <img alt="Temple" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                      <span className="bg-primary/90 backdrop-blur-sm w-fit text-white text-[9px] font-black px-2 py-0.5 rounded-full mb-2 uppercase tracking-widest">Culture</span>
                      <h4 className="text-white font-extrabold text-lg">Vashisht Springs</h4>
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
