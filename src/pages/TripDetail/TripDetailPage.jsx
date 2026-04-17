import './TripDetailPage.css'
import { useParams, Link } from 'react-router-dom'
import { useStore } from '../../store/useStore'
import PinItem from '../../components/PinItem'
import { ArrowLeft, Share2, Globe, Lock, Calendar, MapPin } from 'lucide-react'

export default function TripDetailPage() {
  const { id } = useParams()
  const trip = useStore((s) => s.getTripById(id))
  const publishTrip = useStore((s) => s.publishTrip)
  const user = useStore((s) => s.user)

  if (!trip) {
    return (
      <div className="trip-detail__not-found">
        <h2>Trip not found</h2>
        <Link to="/ledger" className="btn btn--secondary">Back to Ledger</Link>
      </div>
    )
  }

  const isOwner = trip.createdByUserId === user.id

  return (
    <div className="trip-detail">
      {/* Cover */}
      <div className="trip-detail__cover">
        <img src={trip.coverImage} alt={trip.title} className="trip-detail__cover-img" />
        <div className="trip-detail__cover-overlay" />
        <div className="trip-detail__cover-nav">
          <Link to="/ledger" className="trip-detail__back-btn">
            <ArrowLeft size={20} />
          </Link>
          <button className="trip-detail__share-btn">
            <Share2 size={18} />
          </button>
        </div>
        <div className="trip-detail__cover-info">
          <h1 className="trip-detail__title">{trip.title}</h1>
          <div className="trip-detail__cover-meta">
            <span><MapPin size={14} /> {trip.destination}</span>
            {trip.startDate && <span><Calendar size={14} /> {trip.startDate}</span>}
          </div>
        </div>
      </div>

      {/* Actions */}
      {isOwner && (
        <div className="trip-detail__actions">
          {trip.visibility === 'private' ? (
            <button className="btn btn--primary" onClick={() => publishTrip(trip.id)}>
              <Globe size={16} /> Publish Trip
            </button>
          ) : (
            <span className="trip-detail__published-badge"><Globe size={14} /> Published</span>
          )}
        </div>
      )}

      {trip.importedFromTripId && (
        <div className="trip-detail__attribution">
          <p className="text-label-md">Based on a journey by another traveler</p>
        </div>
      )}

      {/* Day Timeline */}
      {trip.days?.length > 0 && (
        <section className="trip-detail__section">
          <h2 className="text-headline-md">Timeline</h2>
          <div className="trip-detail__days">
            {trip.days.map((day, i) => (
              <div key={i} className="trip-detail__day">
                <div className="trip-detail__day-marker">
                  <span className="trip-detail__day-num">D{day.day}</span>
                  {i < trip.days.length - 1 && <div className="trip-detail__day-line" />}
                </div>
                <div className="trip-detail__day-content">
                  <h3 className="trip-detail__day-title">{day.title}</h3>
                  <p className="trip-detail__day-summary">{day.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Pins */}
      {trip.pins?.length > 0 && (
        <section className="trip-detail__section">
          <h2 className="text-headline-md">Pins ({trip.pins.length})</h2>
          <div className="trip-detail__pins">
            {trip.pins.map((pin) => (
              <PinItem key={pin.id} pin={pin} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
