import './DestinationPage.css'
import { useParams, Link } from 'react-router-dom'
import { useStore } from '../../store/useStore'
import TripCard from '../../components/TripCard'
import PinItem from '../../components/PinItem'
import { ArrowLeft, Users, MapPin, AlertTriangle } from 'lucide-react'

export default function DestinationPage() {
  const { slug } = useParams()
  const destinations = useStore((s) => s.destinations)
  const trips = useStore((s) => s.trips)
  const dest = destinations.find((d) => d.slug === slug)
  const publishedTrips = trips.filter((t) => t.visibility === 'published')
  const importTrip = useStore((s) => s.importTrip)

  if (!dest) {
    return (
      <div className="dest__not-found">
        <h2>Destination not found</h2>
        <Link to="/explore" className="btn btn--secondary">Back to Explore</Link>
      </div>
    )
  }

  // Get trips for this destination
  const destTrips = publishedTrips.filter((t) =>
    t.destination?.toLowerCase().includes(dest.name.toLowerCase())
  )

  // Collect all pins from destination trips
  const allPins = destTrips.flatMap((t) => t.pins || [])
  const ethicalPins = allPins.filter((p) => p.ethicalNote)

  return (
    <div className="dest">
      {/* Hero */}
      <div className="dest__hero">
        <img src={dest.image} alt={dest.name} className="dest__hero-img" />
        <div className="dest__hero-overlay" />
        <Link to="/explore" className="dest__back">
          <ArrowLeft size={20} />
        </Link>
        <div className="dest__hero-info">
          <h1 className="dest__hero-name">{dest.name}</h1>
          <p className="dest__hero-region">{dest.region}</p>
          <div className="dest__hero-stat">
            <Users size={16} /> {dest.tripCount} community trips
          </div>
        </div>
      </div>

      {/* Community Trips */}
      <section className="dest__section">
        <h2 className="text-headline-md">Community Trips</h2>
        {destTrips.length > 0 ? (
          <div className="dest__trips">
            {destTrips.map((trip) => (
              <div key={trip.id} className="dest__trip-row">
                <TripCard trip={trip} compact />
                <button
                  className="dest__import-btn"
                  onClick={() => importTrip(trip.id)}
                >
                  Import
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="dest__empty">
            <p>No published trips for {dest.name} yet. Be the first!</p>
          </div>
        )}
      </section>

      {/* Top Pins */}
      {allPins.length > 0 && (
        <section className="dest__section">
          <h2 className="text-headline-md">Top Pins</h2>
          <div className="dest__pins-scroll">
            {allPins.slice(0, 6).map((pin) => (
              <PinItem key={pin.id} pin={pin} />
            ))}
          </div>
        </section>
      )}

      {/* Ethical Advice */}
      {ethicalPins.length > 0 && (
        <section className="dest__section dest__ethical-section">
          <h2 className="text-headline-md">
            <AlertTriangle size={20} color="var(--color-secondary)" /> Local Etiquette
          </h2>
          <div className="dest__ethical-list">
            {ethicalPins.map((pin) => (
              <div key={pin.id} className="dest__ethical-card">
                <p className="dest__ethical-advice">{pin.ethicalNote}</p>
                <span className="dest__ethical-source">— from "{pin.title}"</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
