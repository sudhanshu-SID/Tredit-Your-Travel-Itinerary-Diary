import { MapPin, Calendar, Eye, EyeOff } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TripCard({ trip, compact = false }) {
  return (
    <Link 
      to={`/trip/${trip.id}`} 
      className={`group flex bg-white rounded-3xl overflow-hidden border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow ${compact ? 'flex-row h-24' : 'flex-col'}`}
    >
      <div className={`relative overflow-hidden ${compact ? 'w-24 shrink-0' : 'h-48 w-full'}`}>
        <img 
          src={trip.coverImage} 
          alt={trip.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute top-3 right-3">
          {trip.visibility === 'published' ? (
            <span className="flex items-center gap-1 bg-surface/90 backdrop-blur text-primary px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
              <Eye size={12} /> Public
            </span>
          ) : (
            <span className="flex items-center gap-1 bg-surface-variant/90 backdrop-blur text-on-surface-variant px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
              <EyeOff size={12} /> Private
            </span>
          )}
        </div>
      </div>
      <div className={`flex flex-col justify-center ${compact ? 'p-3 flex-1' : 'p-5'}`}>
        <h3 className={`font-bold font-headline text-on-surface line-clamp-1 ${compact ? 'text-sm' : 'text-xl mb-2'}`}>
          {trip.title}
        </h3>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-on-surface-variant text-xs mb-3">
          <span className="flex items-center gap-1">
            <MapPin size={12} className="text-primary" />
            <span className="opacity-80">{trip.destination}</span>
          </span>
          {trip.startDate && (
            <span className="flex items-center gap-1">
              <Calendar size={12} className="text-secondary" />
              <span className="opacity-80">
                {new Date(trip.startDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
              </span>
            </span>
          )}
        </div>
        {!compact && trip.pins?.length > 0 && (
          <div className="flex items-center gap-2 mt-auto">
            {trip.pins.slice(0, 3).map((pin) => (
              <span key={pin.id} className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant bg-surface-container-high px-2 py-1 rounded-md">
                {pin.type}
              </span>
            ))}
            {trip.pins.length > 3 && (
              <span className="text-[10px] font-bold text-outline bg-surface-container px-2 py-1 rounded-md">
                +{trip.pins.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  )
}
