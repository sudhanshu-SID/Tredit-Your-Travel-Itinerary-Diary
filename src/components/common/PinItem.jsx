import { Utensils, MapPin, Hotel, Bus, AlertTriangle } from 'lucide-react'

const PIN_ICONS = {
  food: Utensils,
  spot: MapPin,
  stay: Hotel,
  transport: Bus,
}

const PIN_COLORS = {
  food: '#fd6c00',    // secondary-container
  spot: '#0056d2',    // surface-tint
  stay: '#5400cc',    // tertiary
  transport: '#0040a1', // primary
}

export default function PinItem({ pin }) {
  const Icon = PIN_ICONS[pin.type] || MapPin

  return (
    <div className="flex gap-3.5 p-4 bg-surface-container-low rounded-2xl">
      <div 
        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
        style={{ background: PIN_COLORS[pin.type] || '#737785' }}
      >
        <Icon size={18} color="#fff" />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-between items-start">
          <h4 className="font-bold text-on-surface text-base leading-tight">{pin.title}</h4>
          <span className="text-[10px] uppercase font-bold text-outline tracking-wider">{pin.type}</span>
        </div>
        {pin.note && <p className="text-sm text-on-surface-variant leading-relaxed opacity-80">{pin.note}</p>}
        {pin.ethicalNote && (
          <div className="flex items-center gap-1.5 mt-1.5 text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded-md w-fit">
            <AlertTriangle size={12} className="shrink-0" />
            <span>{pin.ethicalNote}</span>
          </div>
        )}
      </div>
    </div>
  )
}
