import './ProfilePage.css'
import { useState } from 'react'
import { useStore } from '../../store/useStore'
import TripCard from '../../components/TripCard'
import { Award, Globe, Lock, Download, Eye, Settings, ChevronRight } from 'lucide-react'

const TABS = [
  { key: 'published', label: 'Published', icon: Globe },
  { key: 'imported', label: 'Imported', icon: Download },
  { key: 'private', label: 'Private', icon: Lock },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('published')
  const user = useStore((s) => s.user)
  const trips = useStore((s) => s.trips)
  const performanceMode = useStore((s) => s.performanceMode)
  const setPerformanceMode = useStore((s) => s.setPerformanceMode)

  const myTrips = trips.filter((t) => t.createdByUserId === user.id)
  const published = myTrips.filter((t) => t.visibility === 'published')
  const imported = myTrips.filter((t) => t.importedFromTripId)
  const privateDiary = myTrips.filter((t) => t.visibility === 'private' && !t.importedFromTripId)

  const tabTrips = activeTab === 'published' ? published
    : activeTab === 'imported' ? imported
    : privateDiary

  return (
    <div className="profile">
      {/* Header */}
      <div className="profile__header">
        <div className="profile__avatar-wrapper">
          <img src={user.avatarUrl} alt={user.name} className="profile__avatar" />
          <div className="profile__aura" />
        </div>
        <h1 className="profile__name text-headline-lg">{user.name}</h1>
        <div className="profile__score">
          <Award size={20} color="var(--color-tertiary)" />
          <span className="profile__score-value">{user.treditScore}</span>
          <span className="profile__score-label">Tredit Score</span>
        </div>

        <div className="profile__stats">
          <div className="profile__stat">
            <span className="profile__stat-num">{myTrips.length}</span>
            <span className="profile__stat-label">Trips</span>
          </div>
          <div className="profile__stat-divider" />
          <div className="profile__stat">
            <span className="profile__stat-num">{published.length}</span>
            <span className="profile__stat-label">Published</span>
          </div>
          <div className="profile__stat-divider" />
          <div className="profile__stat">
            <span className="profile__stat-num">{myTrips.reduce((sum, t) => sum + (t.pins?.length || 0), 0)}</span>
            <span className="profile__stat-label">Pins</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="profile__tabs">
        {TABS.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            className={`profile__tab ${activeTab === key ? 'profile__tab--active' : ''}`}
            onClick={() => setActiveTab(key)}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="profile__content">
        {tabTrips.length > 0 ? (
          <div className="profile__trip-list">
            {tabTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} compact />
            ))}
          </div>
        ) : (
          <div className="profile__empty">
            <p>Nothing here yet.</p>
          </div>
        )}
      </div>

      {/* Settings */}
      <div className="profile__settings">
        <h2 className="text-headline-md" style={{ marginBottom: 16 }}>Settings</h2>
        <div className="profile__setting-item" onClick={() => setPerformanceMode(!performanceMode)}>
          <div className="profile__setting-info">
            <Settings size={18} />
            <span>Performance Mode</span>
          </div>
          <div className={`profile__toggle ${performanceMode ? 'profile__toggle--on' : ''}`}>
            <div className="profile__toggle-thumb" />
          </div>
        </div>
        <div className="profile__setting-item">
          <div className="profile__setting-info">
            <Lock size={18} />
            <span>Default Privacy: Private</span>
          </div>
          <ChevronRight size={18} color="var(--color-outline)" />
        </div>
        <div className="profile__setting-item">
          <div className="profile__setting-info">
            <Download size={18} />
            <span>Export My Data</span>
          </div>
          <ChevronRight size={18} color="var(--color-outline)" />
        </div>
      </div>
    </div>
  )
}
