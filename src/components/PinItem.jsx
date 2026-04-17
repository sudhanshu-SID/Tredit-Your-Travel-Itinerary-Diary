import './PinItem.css'
import { Utensils, MapPin, Hotel, Bus, AlertTriangle } from 'lucide-react'

const PIN_ICONS = {
  food: Utensils,
  spot: MapPin,
  stay: Hotel,
  transport: Bus,
}

const PIN_COLORS = {
  food: '#fd6c00',
  spot: '#0056d2',
  stay: '#5400cc',
  transport: '#0040a1',
}

export default function PinItem({ pin }) {
  const Icon = PIN_ICONS[pin.type] || MapPin

  return (
    <div className="pin-item">
      <div className="pin-item__icon" style={{ background: PIN_COLORS[pin.type] || '#737785' }}>
        <Icon size={18} color="#fff" />
      </div>
      <div className="pin-item__content">
        <div className="pin-item__header">
          <h4 className="pin-item__title">{pin.title}</h4>
          <span className="pin-item__type">{pin.type}</span>
        </div>
        {pin.note && <p className="pin-item__note">{pin.note}</p>}
        {pin.ethicalNote && (
          <div className="pin-item__ethical">
            <AlertTriangle size={14} />
            <span>{pin.ethicalNote}</span>
          </div>
        )}
      </div>
    </div>
  )
}
