import './LedgerPage.css'
import { useState } from 'react'
import { useStore } from '../../store/useStore'
import TripCard from '../../components/TripCard'
import { Clock, Zap, CalendarPlus } from 'lucide-react'

const TABS = [
  { key: 'past', label: 'Past', icon: Clock },
  { key: 'present', label: 'Present', icon: Zap },
  { key: 'future', label: 'Future', icon: CalendarPlus },
]

export default function LedgerPage() {
  const [activeTab, setActiveTab] = useState('past')
  const user = useStore((s) => s.user)
  const trips = useStore((s) => s.trips)
  const pastTrips = trips.filter((t) => t.status === 'archived' && t.createdByUserId === user.id)
  const futureTrips = trips.filter((t) => t.status === 'draft' && t.createdByUserId === user.id)
  const { activeTrip, isTripActive } = useStore()

  const renderContent = () => {
    switch (activeTab) {
      case 'past':
        return pastTrips.length > 0 ? (
          <div className="ledger__list">
            {pastTrips.map((trip) => <TripCard key={trip.id} trip={trip} />)}
          </div>
        ) : (
          <div className="ledger__empty">
            <p>No archived trips yet. Start your first trip!</p>
          </div>
        )

      case 'present':
        return isTripActive && activeTrip ? (
          <div className="ledger__present">
            <div className="ledger__active-badge">
              <span className="ledger__active-dot" />
              Recording
            </div>
            <TripCard trip={activeTrip} />
          </div>
        ) : (
          <div className="ledger__empty">
            <p>No active trip right now. Go to Trip Mode to start one.</p>
          </div>
        )

      case 'future':
        return futureTrips.length > 0 ? (
          <div className="ledger__list">
            {futureTrips.map((trip) => <TripCard key={trip.id} trip={trip} />)}
          </div>
        ) : (
          <div className="ledger__empty">
            <p>No future plans. Import a community itinerary from Explore!</p>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="ledger">
      <div className="ledger__header">
        <h1 className="text-headline-lg">Voyage Ledger</h1>
        <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>Your personal travel archive</p>
      </div>

      <div className="ledger__tabs">
        {TABS.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            className={`ledger__tab ${activeTab === key ? 'ledger__tab--active' : ''}`}
            onClick={() => setActiveTab(key)}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>

      <div className="ledger__content">
        {renderContent()}
      </div>
    </div>
  )
}
