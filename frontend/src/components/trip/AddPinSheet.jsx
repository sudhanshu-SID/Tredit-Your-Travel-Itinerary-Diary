import React, { useState } from 'react';
import { Camera, MapPin, X, Navigation } from 'lucide-react';
import { useStore } from '../../store/useStore';

export default function AddPinSheet({ isOpen, onClose, currentDay }) {
  const addPin = useStore(state => state.addPin);
  
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [locationName, setLocationName] = useState(''); // Manual location entry
  const [type, setType] = useState('note'); // 'note', 'food', 'spot'
  const [isLocating, setIsLocating] = useState(false);
  const [location, setLocation] = useState(null);

  if (!isOpen) return null;

  const handleGetLocation = () => {
    setIsLocating(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
          setIsLocating(false);
        },
        (err) => {
          console.error(err);
          setIsLocating(false);
          alert('Could not get location. Please ensure permissions are granted.');
        },
        { enableHighAccuracy: true, timeout: 5000 }
      );
    } else {
      setIsLocating(false);
      alert('Geolocation is not supported by your browser.');
    }
  };

  const handleSave = () => {
    if (!title) {
      alert("Please enter a title");
      return;
    }
    
    addPin({
      title,
      note,
      locationName, // Save manual name
      type,
      day: currentDay,
      lat: location?.lat,
      lng: location?.lng,
      timestamp: new Date().toISOString()
    });
    
    // Reset and close
    setTitle('');
    setNote('');
    setLocationName('');
    setLocation(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Sheet Content */}
      <div className="relative w-full max-w-md bg-surface rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-slideUp sm:animate-scaleIn">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-outline-variant/20">
          <h3 className="font-bold text-lg text-on-surface">Add to Timeline</h3>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-surface-container transition-colors">
            <X size={20} className="text-on-surface-variant" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto">
          {/* Type Selector */}
          <div className="flex gap-2 mb-6">
            {['note', 'food', 'spot'].map(t => (
              <button 
                key={t}
                onClick={() => setType(t)}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                  type === t 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <input 
            type="text" 
            placeholder="What happened here?"
            className="w-full text-xl font-bold bg-transparent border-none focus:outline-none placeholder-on-surface-variant/40 mb-4 text-on-surface"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          
          <textarea 
            placeholder="Add some details or recommendations..."
            className="w-full text-sm font-serif bg-transparent border-none focus:outline-none resize-none placeholder-on-surface-variant/40 mb-4 text-on-surface-variant h-20"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <div className="flex flex-col gap-3">
            
            {/* Manual Location Name (Optional) */}
            <div className="flex items-center gap-3 p-3 rounded-xl border border-outline-variant/30 bg-surface-container-lowest">
              <MapPin size={18} className="text-on-surface-variant/50" />
              <input 
                type="text"
                placeholder="Name of place (e.g. Lazy Dog Cafe)"
                className="bg-transparent border-none focus:outline-none text-sm w-full text-on-surface"
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
              />
            </div>

            {/* GPS Location (Strictly Optional) */}
            <button 
              className={`flex items-center gap-3 p-3 rounded-xl border transition-colors ${location ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant/30 text-on-surface-variant bg-surface-container-lowest hover:bg-surface-container-low'}`}
              onClick={handleGetLocation}
              disabled={isLocating}
            >
              <Navigation size={18} className={isLocating ? 'animate-pulse' : ''} />
              <span className="text-sm font-semibold flex-1 text-left">
                {isLocating ? 'Finding you...' : location ? 'GPS Attached' : 'Attach Exact GPS (Optional)'}
              </span>
            </button>
            
            <button className="flex items-center gap-3 p-3 rounded-xl border border-outline-variant/30 text-on-surface-variant bg-surface-container-lowest opacity-60 cursor-not-allowed">
              <Camera size={18} />
              <span className="text-sm font-semibold flex-1 text-left">Add Photo (Coming soon)</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-outline-variant/20 bg-surface-container-lowest">
          <button 
            className="w-full py-4 bg-primary hover:bg-primary-container text-white font-bold rounded-2xl shadow-lg shadow-primary/30 transition-all active:scale-[0.98]"
            onClick={handleSave}
          >
            ADD TO TIMELINE
          </button>
        </div>
      </div>
    </div>
  );
}
