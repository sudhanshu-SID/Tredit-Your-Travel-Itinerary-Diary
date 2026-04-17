import './OnboardingPage.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../store/useStore'
import { MapPin, Shield, Sparkles, ArrowRight } from 'lucide-react'

const slides = [
  {
    icon: MapPin,
    color: 'var(--color-primary)',
    title: 'Your trips, one place.',
    description: 'Plan, record, and revisit every journey. TREDIT keeps your travel life organized.',
  },
  {
    icon: Shield,
    color: 'var(--color-secondary)',
    title: 'Privacy by design.',
    description: 'No background tracking. Recording starts only when you tap "Start Trip" and stops when you say so.',
  },
  {
    icon: Sparkles,
    color: 'var(--color-tertiary)',
    title: 'Learn from real travelers.',
    description: 'Browse authentic itineraries. Import them as your own starting point. Build your Tredit Score.',
  },
]

export default function OnboardingPage() {
  const [current, setCurrent] = useState(0)
  const navigate = useNavigate()
  const completeOnboarding = useStore((s) => s.completeOnboarding)

  const handleNext = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1)
    } else {
      completeOnboarding()
      navigate('/')
    }
  }

  const slide = slides[current]
  const Icon = slide.icon

  return (
    <div className="onboarding">
      <div className="onboarding__skip">
        <button className="onboarding__skip-btn" onClick={() => { completeOnboarding(); navigate('/') }}>
          Skip
        </button>
      </div>

      <div className="onboarding__slide">
        <div className="onboarding__icon-ring" style={{ '--ring-color': slide.color }}>
          <Icon size={48} color={slide.color} />
        </div>
        <h1 className="onboarding__title text-headline-lg">{slide.title}</h1>
        <p className="onboarding__desc text-body-lg">{slide.description}</p>
      </div>

      <div className="onboarding__footer">
        <div className="onboarding__dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`onboarding__dot ${i === current ? 'onboarding__dot--active' : ''}`}
            />
          ))}
        </div>
        <button className="btn btn--primary onboarding__next-btn" onClick={handleNext}>
          {current === slides.length - 1 ? 'Get Started' : 'Next'}
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Login placeholder */}
      {current === slides.length - 1 && (
        <div className="onboarding__login-hint">
          <p className="text-label-md">Already have an account? <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Sign in</span></p>
        </div>
      )}
    </div>
  )
}
