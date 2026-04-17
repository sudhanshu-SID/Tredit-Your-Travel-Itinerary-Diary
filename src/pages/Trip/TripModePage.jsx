import './TripModePage.css'
import { useState } from 'react'
import { useStore } from '../../store/useStore'
import PinItem from '../../components/PinItem'
import { Play, Square, Plus, Utensils, MapPin, Hotel, Bus, X, ChevronDown } from 'lucide-react'

const PIN_TYPES = [
  { type: 'food', label: 'Food', icon: Utensils, color: '#fd6c00' },
  { type: 'spot', label: 'Spot', icon: MapPin, color: '#0056d2' },
  { type: 'stay', label: 'Stay', icon: Hotel, color: '#5400cc' },
  { type: 'transport', label: 'Transport', icon: Bus, color: '#0040a1' },
]

export default function TripModePage() {
  const { isTripActive, activeTrip, startTrip, stopTrip, addPin } = useStore()
  const [showPinForm, setShowPinForm] = useState(false)
  const [tripForm, setTripForm] = useState({ title: '', destination: '' })
  const [pinForm, setPinForm] = useState({ type: 'food', title: '', note: '', ethicalNote: '' })

  const handleStartTrip = () => {
    if (!tripForm.title.trim()) return
    startTrip({
      title: tripForm.title,
      destination: tripForm.destination,
      startDate: new Date().toISOString().split('T')[0],
    })
  }

  const handleAddPin = () => {
    if (!pinForm.title.trim()) return
    addPin({
      type: pinForm.type,
      title: pinForm.title,
      note: pinForm.note,
      ethicalNote: pinForm.ethicalNote || undefined,
    })
    setPinForm({ type: 'food', title: '', note: '', ethicalNote: '' })
    setShowPinForm(false)
  }

  // ── Idle State ──
  if (!isTripActive) {
    return (
      <div className="trip-mode">
        <div className="trip-mode__idle">
          <div className="trip-mode__idle-orb">
            <Play size={48} color="var(--color-primary)" />
          </div>
          <h1 className="text-headline-lg">Ready to travel?</h1>
          <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', marginBottom: 32 }}>
            Name your trip and hit Start. We'll help you capture every moment.
          </p>

          <div className="trip-mode__form">
            <input
              type="text"
              placeholder="Trip name (e.g. Goa Weekend)"
              className="trip-mode__input"
              value={tripForm.title}
              onChange={(e) => setTripForm({ ...tripForm, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Destination (optional)"
              className="trip-mode__input"
              value={tripForm.destination}
              onChange={(e) => setTripForm({ ...tripForm, destination: e.target.value })}
            />
            <button className="btn btn--primary trip-mode__start-btn" onClick={handleStartTrip}>
              <Play size={18} /> Start Trip
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── Active State ──
  return (
    <div className="trip-mode trip-mode--active">
      <div className="trip-mode__active-header">
        <div className="trip-mode__active-pulse" />
        <div>
          <p className="text-label-md" style={{ color: 'var(--color-secondary)' }}>● RECORDING</p>
          <h1 className="text-headline-lg">{activeTrip.title}</h1>
          {activeTrip.destination && (
            <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>{activeTrip.destination}</p>
          )}
        </div>
        <button className="trip-mode__stop-btn" onClick={stopTrip}>
          <Square size={18} /> Stop
        </button>
      </div>

      {/* Quick pin buttons */}
      <div className="trip-mode__quick-pins">
        {PIN_TYPES.map(({ type, label, icon: Icon, color }) => (
          <button
            key={type}
            className="trip-mode__quick-pin"
            onClick={() => { setPinForm({ ...pinForm, type }); setShowPinForm(true) }}
          >
            <div className="trip-mode__quick-pin-icon" style={{ background: color }}>
              <Icon size={18} color="#fff" />
            </div>
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="trip-mode__timeline">
        <h2 className="text-headline-md" style={{ marginBottom: 16 }}>Pins Today</h2>
        {activeTrip.pins.length === 0 ? (
          <div className="trip-mode__empty">
            <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
              No pins yet. Tap a category above to add your first!
            </p>
          </div>
        ) : (
          <div className="trip-mode__pin-list">
            {activeTrip.pins.map((pin) => (
              <PinItem key={pin.id} pin={pin} />
            ))}
          </div>
        )}
      </div>

      {/* Floating Add */}
      <button className="trip-mode__fab" onClick={() => setShowPinForm(true)}>
        <Plus size={28} color="#fff" />
      </button>

      {/* Pin Form Modal */}
      {showPinForm && (
        <div className="trip-mode__modal-overlay" onClick={() => setShowPinForm(false)}>
          <div className="trip-mode__modal" onClick={(e) => e.stopPropagation()}>
            <div className="trip-mode__modal-header">
              <h2 className="text-headline-md">Add Pin</h2>
              <button className="trip-mode__modal-close" onClick={() => setShowPinForm(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="trip-mode__pin-types">
              {PIN_TYPES.map(({ type, label, icon: Icon, color }) => (
                <button
                  key={type}
                  className={`trip-mode__pin-type-btn ${pinForm.type === type ? 'active' : ''}`}
                  style={pinForm.type === type ? { background: color, color: '#fff' } : {}}
                  onClick={() => setPinForm({ ...pinForm, type })}
                >
                  <Icon size={16} /> {label}
                </button>
              ))}
            </div>

            <input
              type="text"
              placeholder="What's this place called?"
              className="trip-mode__input"
              value={pinForm.title}
              onChange={(e) => setPinForm({ ...pinForm, title: e.target.value })}
            />
            <textarea
              placeholder="Quick note about your experience..."
              className="trip-mode__textarea"
              rows={3}
              value={pinForm.note}
              onChange={(e) => setPinForm({ ...pinForm, note: e.target.value })}
            />
            <textarea
              placeholder="Ethical advice / local etiquette (optional)"
              className="trip-mode__textarea trip-mode__textarea--ethical"
              rows={2}
              value={pinForm.ethicalNote}
              onChange={(e) => setPinForm({ ...pinForm, ethicalNote: e.target.value })}
            />
            <button className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleAddPin}>
              Save Pin
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
