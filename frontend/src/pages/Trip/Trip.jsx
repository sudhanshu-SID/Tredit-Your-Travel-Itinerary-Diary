import React, { useState } from 'react';
import { Play, Square, MapPin, List, Map as MapIcon, ChevronLeft, Plus, Pause, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import TripMap from '../../components/map/TripMap';
import AddPinSheet from '../../components/trip/AddPinSheet';

export default function Trip() {
  const { activeTrip, isRecording, startTrip, pauseRecording, resumeRecording, endDay, finishTrip } = useStore();
  const [viewMode, setViewMode] = useState('split'); // 'split', 'map', 'timeline'
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleStartTrip = () => {
    startTrip({
      title: 'Current Adventure',
      destination: 'Unknown',
      startDate: new Date().toISOString()
    });
  };

  const handleFinishTrip = () => {
    if (window.confirm("Are you sure you want to end this trip and save it to your Ledger?")) {
      finishTrip();
    }
  };

  // If no active trip, show the "Start" screen
  if (!activeTrip) {
    return (
      <div className="bg-surface font-body text-on-surface min-h-[100dvh] flex flex-col">
        <nav className="p-6 flex items-center">
          <Link to="/" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
            <ChevronLeft size={20} />
          </Link>
        </nav>
        
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto">
          <div className="w-24 h-24 bg-primary/10 rounded-[2rem] flex items-center justify-center mb-8 rotate-3 shadow-sm border border-primary/20">
            <MapIcon size={40} className="text-primary -rotate-3" />
          </div>
          
          <h1 className="text-4xl font-display font-black tracking-tight mb-4">
            Ready to hit the road?
          </h1>
          <p className="text-on-surface-variant font-serif text-lg leading-relaxed mb-12">
            Start tracking your journey. We'll plot your route and you can drop pins, photos, and notes along the way.
          </p>
          
          <button 
            onClick={handleStartTrip}
            className="w-full py-5 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center gap-3 hover:bg-primary-container active:scale-[0.98] transition-all"
          >
            <Play size={20} fill="currentColor" />
            START TRACKING MY DAY
          </button>
          
          <p className="text-xs text-on-surface-variant/60 mt-6 max-w-xs">
            Location tracking is strictly opt-in and is only active while you are logging a trip.
          </p>
        </div>
      </div>
    );
  }

  // ACTIVE TRIP DASHBOARD
  return (
    <div className="bg-surface font-body text-on-surface min-h-[100dvh] flex flex-col relative overflow-hidden">
      
      {/* Top Nav */}
      <nav className="absolute top-0 w-full z-50 bg-gradient-to-b from-black/50 to-transparent p-6 flex justify-between items-start pointer-events-none">
        <div className="flex flex-col gap-2 pointer-events-auto">
          {isRecording ? (
            <div className="flex items-center gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
               <span className="text-white font-bold text-sm tracking-widest uppercase drop-shadow-md">Recording Day {activeTrip.currentDay}</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
               <div className="w-3 h-3 rounded-full bg-yellow-400" />
               <span className="text-white font-bold text-sm tracking-widest uppercase drop-shadow-md">Paused</span>
            </div>
          )}
          <span className="text-white/80 text-xs font-serif italic drop-shadow-md shadow-black">Trip Duration: {activeTrip.currentDay} Days</span>
        </div>
        
        <div className="flex flex-col gap-2 items-end pointer-events-auto">
          {isRecording ? (
            <button 
              onClick={pauseRecording}
              className="px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-xs font-bold border border-white/30 flex items-center gap-2"
            >
              <Pause size={12} fill="currentColor" />
              PAUSE TRACKING
            </button>
          ) : (
            <button 
              onClick={resumeRecording}
              className="px-4 py-2 bg-primary text-white rounded-full text-xs font-bold shadow-lg flex items-center gap-2"
            >
              <Play size={12} fill="currentColor" />
              RESUME TRACKING
            </button>
          )}
          
          <button 
            onClick={finishTrip}
            className="px-4 py-2 bg-red-500 text-white rounded-full text-xs font-bold shadow-lg flex items-center gap-2 mt-2"
          >
            <CheckCircle size={12} />
            FINISH TRIP
          </button>
        </div>
      </nav>

      {/* Map Section */}
      <div className={`transition-all duration-500 ease-in-out relative ${viewMode === 'map' ? 'h-[100dvh]' : viewMode === 'split' ? 'h-[50dvh]' : 'h-[25dvh]'}`}>
        <TripMap isRecording={isRecording} route={activeTrip?.route} pins={activeTrip?.pins} />
        <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-surface to-transparent z-[400] pointer-events-none" />
      </div>

      {/* FIXED VIEW TOGGLE - Always visible regardless of timeline position */}
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[500] transition-all duration-500" style={{ top: viewMode === 'map' ? 'auto' : viewMode === 'split' ? '50%' : '25%', bottom: viewMode === 'map' ? '24px' : 'auto' }}>
        <div className="bg-surface-container shadow-lg rounded-full p-1 flex gap-1 border border-outline-variant/10">
          <button 
            onClick={() => setViewMode('split')}
            className={`p-2 rounded-full transition-colors ${viewMode === 'split' ? 'bg-surface shadow-sm text-primary' : 'text-on-surface-variant'}`}
          >
            <List size={18} />
          </button>
          <button 
            onClick={() => setViewMode('map')}
            className={`p-2 rounded-full transition-colors ${viewMode === 'map' ? 'bg-surface shadow-sm text-primary' : 'text-on-surface-variant'}`}
          >
            <MapIcon size={18} />
          </button>
        </div>
      </div>

      {/* Timeline Section */}
      <div className={`flex-1 bg-surface relative z-10 transition-all duration-500 ease-in-out flex flex-col ${viewMode === 'map' ? 'translate-y-full absolute' : 'translate-y-0'}`}>
        
        {/* Timeline Content */}
        <div className="flex-1 overflow-y-auto px-6 pt-10 pb-32">
          
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-serif italic font-semibold">Timeline</h2>
            {!isRecording && (
              <button onClick={endDay} className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                END DAY {activeTrip.currentDay} & START NEXT
              </button>
            )}
          </div>
          
          <div className="relative border-l-2 border-primary/20 ml-3 space-y-8 pb-12">
            
            {activeTrip.pins.length === 0 ? (
              <div className="pl-6 text-on-surface-variant italic font-serif opacity-70">
                Your timeline is empty. Tap the button below to add your first memory.
              </div>
            ) : (
              // Group pins chronologically (simplest way is just mapping them for now, but we show the day they were added)
              activeTrip.pins.map((pin, i) => (
                <div key={pin.id || i} className="relative pl-6">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-surface" />
                  
                  {/* Content */}
                  <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-outline-variant/10">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg">{pin.title}</h4>
                      <div className="flex gap-2">
                         {pin.day && <span className="text-[10px] uppercase font-bold text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">Day {pin.day}</span>}
                         <span className="text-[10px] uppercase font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">{pin.type}</span>
                      </div>
                    </div>
                    {pin.note && <p className="text-on-surface-variant text-sm font-serif">{pin.note}</p>}
                    
                    {(pin.lat || pin.locationName) && (
                      <div className="mt-3 flex items-center gap-1 text-xs font-bold text-on-surface-variant/70">
                        <MapPin size={12} className={pin.lat ? "text-primary" : ""} />
                        {pin.locationName ? pin.locationName : 'Exact GPS Location'}
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
            
          </div>
        </div>
      </div>

      {/* Floating Action Button (FAB) */}
      <div className="fixed bottom-24 right-6 z-50">
        <button 
          onClick={() => setIsSheetOpen(true)}
          className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all"
        >
          <Plus size={32} />
        </button>
      </div>

      <AddPinSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} currentDay={activeTrip.currentDay} />
    </div>
  );
}
