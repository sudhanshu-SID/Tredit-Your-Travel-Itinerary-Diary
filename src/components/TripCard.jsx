import './TripCard.css'
import { MapPin, Calendar, Eye, EyeOff } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TripCard({ trip, compact = false }) {
  return (
    <Link to={`/trip/${trip.id}`} className={`trip-card ${compact ? 'trip-card--compact' : ''}`}>
      <div className="trip-card__image-wrapper">
        <img src={trip.coverImage} alt={trip.title} className="trip-card__image" />
        <div className="trip-card__status-badge">
          {trip.visibility === 'published' ? (
            <span className="badge badge--published"><Eye size={12} /> Public</span>
          ) : (
            <span className="badge badge--private"><EyeOff size={12} /> Private</span>
          )}
        </div>
      </div>
      <div className="trip-card__content">
        <h3 className="trip-card__title">{trip.title}</h3>
        <div className="trip-card__meta">
          <span className="trip-card__meta-item">
            <MapPin size={14} />
            {trip.destination}
          </span>
          {trip.startDate && (
            <span className="trip-card__meta-item">
              <Calendar size={14} />
              {new Date(trip.startDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
            </span>
          )}
        </div>
        {!compact && trip.pins?.length > 0 && (
          <div className="trip-card__pins">
            {trip.pins.slice(0, 3).map((pin) => (
              <span key={pin.id} className="trip-card__pin-chip">{pin.type}</span>
            ))}
            {trip.pins.length > 3 && <span className="trip-card__pin-chip">+{trip.pins.length - 3}</span>}
          </div>
        )}
      </div>
    </Link>
  )
}
