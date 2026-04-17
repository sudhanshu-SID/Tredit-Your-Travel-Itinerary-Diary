import './ExplorePage.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../../store/useStore'
import TripCard from '../../components/TripCard'
import { Search, TrendingUp, ArrowRight } from 'lucide-react'

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const destinations = useStore((s) => s.destinations)
  const trips = useStore((s) => s.trips)
  const publishedTrips = trips.filter((t) => t.visibility === 'published')

  const filteredDests = searchQuery
    ? destinations.filter((d) =>
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.region.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : destinations

  return (
    <div className="explore">
      {/* Search */}
      <div className="explore__search-section">
        <h1 className="text-headline-lg" style={{ marginBottom: 16 }}>Explore</h1>
        <div className="explore__search-bar ghost-border">
          <Search size={20} color="var(--color-outline)" />
          <input
            type="text"
            placeholder="Search destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="explore__search-input"
          />
        </div>
      </div>

      {/* Destinations Grid */}
      <section className="explore__section">
        <div className="explore__section-header">
          <h2 className="text-headline-md"><TrendingUp size={20} /> Trending Destinations</h2>
        </div>
        <div className="explore__dest-grid">
          {filteredDests.map((dest) => (
            <Link key={dest.slug} to={`/destination/${dest.slug}`} className="explore__dest-card">
              <img src={dest.image} alt={dest.name} className="explore__dest-img" />
              <div className="explore__dest-info">
                <h3>{dest.name}</h3>
                <p>{dest.region} · {dest.tripCount} trips</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Community Trips */}
      <section className="explore__section">
        <div className="explore__section-header">
          <h2 className="text-headline-md">Community Trips</h2>
        </div>
        <div className="explore__trips">
          {publishedTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </section>
    </div>
  )
}
