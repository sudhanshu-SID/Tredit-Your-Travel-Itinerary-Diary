import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useStore } from '../../store/useStore';

// Fix for default marker icons in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Component to handle flying to user location
function LocationTracker({ isRecording }) {
  const map = useMap();
  const addRoutePoint = useStore(state => state.addRoutePoint);
  
  useEffect(() => {
    let watchId;
    if (isRecording && 'geolocation' in navigator) {
      // First get current position to fly there immediately
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        map.flyTo([latitude, longitude], 15);
      });

      // Then watch for movement
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          addRoutePoint([latitude, longitude]);
        },
        (error) => {
          console.error("Error watching position:", error);
        },
        { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
      );
    }
    
    return () => {
      if (watchId) navigator.geolocation.clearWatch(watchId);
    };
  }, [isRecording, map, addRoutePoint]);

  return null;
}

export default function TripMap({ isRecording, route = [], pins = [] }) {
  // Default center (e.g. India)
  const defaultCenter = [20.5937, 78.9629];
  
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden shadow-sm relative z-0">
      <MapContainer 
        center={route.length > 0 ? route[route.length - 1] : defaultCenter} 
        zoom={route.length > 0 ? 15 : 4} 
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {isRecording && <LocationTracker isRecording={isRecording} />}
        
        {/* Render the recorded path */}
        {route.length > 1 && (
          <Polyline positions={route} color="#0055ff" weight={4} opacity={0.7} />
        )}

        {/* Render user pins */}
        {pins.map((pin, idx) => {
          if (pin.lat && pin.lng) {
            return (
              <Marker key={pin.id || idx} position={[pin.lat, pin.lng]}>
                <Popup className="font-body">
                  <div className="p-1">
                    <h4 className="font-bold text-sm text-primary mb-1">{pin.title}</h4>
                    <p className="text-xs text-on-surface-variant m-0">{pin.note}</p>
                    {pin.type && (
                      <span className="inline-block mt-2 px-2 py-0.5 bg-primary/10 text-primary text-[10px] rounded uppercase font-bold tracking-wider">
                        {pin.type}
                      </span>
                    )}
                  </div>
                </Popup>
              </Marker>
            );
          }
          return null;
        })}
      </MapContainer>
    </div>
  );
}
