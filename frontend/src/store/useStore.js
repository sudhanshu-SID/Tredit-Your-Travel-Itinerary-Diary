import { create } from 'zustand'

const MOCK_TRIPS = [
  {
    id: '1',
    title: 'Manali Winter Escape',
    destination: 'Manali, Himachal Pradesh',
    startDate: '2025-12-20',
    endDate: '2025-12-26',
    status: 'archived',
    visibility: 'published',
    coverImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    pins: [
      { id: 'p1', type: 'food', title: 'Lazy Dog Lounge', note: 'Best momos in Old Manali', ethicalNote: 'Carry your own bag — plastic is banned here.' },
      { id: 'p2', type: 'spot', title: 'Solang Valley', note: 'Paragliding at sunrise was unreal' },
      { id: 'p3', type: 'stay', title: 'Hostelier Old Manali', note: 'Cozy dorm, amazing mountain views from rooftop' },
      { id: 'p4', type: 'transport', title: 'Delhi → Manali Volvo', note: 'Book HRTC; private buses are overpriced' },
    ],
    days: [
      { day: 1, title: 'Arrival & Old Manali', summary: 'Reached by evening. Walked the Old Manali streets.' },
      { day: 2, title: 'Solang Valley', summary: 'Full day at Solang. Paragliding, snow tubing.' },
      { day: 3, title: 'Rohtang Attempt', summary: 'Road was closed due to snowfall. Explored Naggar instead.' },
    ],
    treditScore: 42,
    createdByUserId: 'u1',
  },
  {
    id: '2',
    title: 'Goa Monsoon Diary',
    destination: 'South Goa',
    startDate: '2025-07-10',
    endDate: '2025-07-15',
    status: 'archived',
    visibility: 'private',
    coverImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
    pins: [
      { id: 'p5', type: 'food', title: 'Martins Corner', note: 'Prawn curry rice. Peak Goan food.' },
      { id: 'p6', type: 'spot', title: 'Cabo de Rama Fort', note: 'Empty, moody, perfect in monsoon' },
    ],
    days: [
      { day: 1, title: 'Palolem Beach', summary: 'Arrived late. Rain-soaked beach walk.' },
      { day: 2, title: 'Cabo de Rama', summary: 'Drove up to the fort. Stunning cliffs.' },
    ],
    treditScore: 18,
    createdByUserId: 'u1',
  },
  {
    id: '3',
    title: 'Rajasthan Heritage Run',
    destination: 'Jaipur → Jodhpur → Jaisalmer',
    startDate: '2026-02-01',
    endDate: '2026-02-08',
    status: 'draft',
    visibility: 'private',
    coverImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80',
    pins: [],
    days: [],
    treditScore: 0,
    createdByUserId: 'u1',
  },
  {
    id: '4',
    title: 'Kerala Backwaters',
    destination: 'Alleppey, Kerala',
    startDate: '2025-09-05',
    endDate: '2025-09-09',
    status: 'archived',
    visibility: 'published',
    coverImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
    pins: [
      { id: 'p7', type: 'food', title: 'Thaff Toddy Shop', note: 'Fish fry + toddy. The real deal.' },
      { id: 'p8', type: 'stay', title: 'Houseboat Nightstay', note: 'Overnight houseboat on Vembanad Lake' },
      { id: 'p9', type: 'spot', title: 'Marari Beach', note: 'Quiet, no crowd, feels private', ethicalNote: 'Don\'t litter on the beach. No plastic bottles.' },
    ],
    days: [
      { day: 1, title: 'Houseboat Day', summary: 'Boarded the houseboat. Cruised the backwaters.' },
      { day: 2, title: 'Marari Beach', summary: 'Rented a scooter. Beach hopping.' },
    ],
    treditScore: 35,
    createdByUserId: 'u2',
  },
]

const MOCK_USER = {
  id: 'u1',
  name: 'Arjun Mehta',
  avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  treditScore: 847,
  publishedTrips: ['1'],
  savedTrips: ['4'],
}

const MOCK_DESTINATIONS = [
  { slug: 'manali', name: 'Manali', region: 'Himachal Pradesh', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80', tripCount: 234 },
  { slug: 'goa', name: 'Goa', region: 'India', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80', tripCount: 892 },
  { slug: 'jaipur', name: 'Jaipur', region: 'Rajasthan', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80', tripCount: 445 },
  { slug: 'kerala', name: 'Kerala', region: 'India', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80', tripCount: 678 },
  { slug: 'rishikesh', name: 'Rishikesh', region: 'Uttarakhand', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80', tripCount: 321 },
  { slug: 'ladakh', name: 'Ladakh', region: 'Jammu & Kashmir', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80', tripCount: 156 },
]

export const useStore = create((set, get) => ({
  // User
  user: MOCK_USER,
  
  // Trips
  trips: MOCK_TRIPS,
  
  // Destinations
  destinations: MOCK_DESTINATIONS,

  // Active trip state
  activeTrip: null,
  isRecording: false,

  // UI state
  performanceMode: false,
  onboardingCompleted: false,

  // Actions
  startTrip: (tripData) => {
    const newTrip = {
      id: Date.now().toString(),
      status: 'active',
      visibility: 'private',
      pins: [],
      days: [],
      route: [], // Track GPS coordinates
      currentDay: 1,
      treditScore: 0,
      createdByUserId: get().user.id,
      coverImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
      ...tripData,
    }
    set((state) => ({
      activeTrip: newTrip,
      isRecording: true,
      trips: [newTrip, ...state.trips],
    }))
    return newTrip.id
  },

  pauseRecording: () => set({ isRecording: false }),
  
  resumeRecording: () => set({ isRecording: true }),
  
  endDay: () => {
    set((state) => {
      if (!state.activeTrip) return state;
      return {
        isRecording: false,
        activeTrip: { ...state.activeTrip, currentDay: state.activeTrip.currentDay + 1 }
      };
    });
  },

  finishTrip: () => {
    set((state) => {
      const updated = state.trips.map((t) =>
        t.id === state.activeTrip?.id ? { ...t, status: 'archived' } : t
      )
      return { activeTrip: null, isRecording: false, trips: updated }
    })
  },

  addRoutePoint: (point) => {
    set((state) => {
      if (!state.activeTrip) return state;
      const updatedTrip = { ...state.activeTrip, route: [...(state.activeTrip.route || []), point] };
      const updatedTrips = state.trips.map((t) =>
        t.id === state.activeTrip.id ? updatedTrip : t
      );
      return { activeTrip: updatedTrip, trips: updatedTrips };
    });
  },

  addPin: (pin) => {
    set((state) => {
      const newPin = { id: 'p' + Date.now(), ...pin }
      const updatedTrips = state.trips.map((t) =>
        t.id === state.activeTrip?.id ? { ...t, pins: [...t.pins, newPin] } : t
      )
      return {
        activeTrip: { ...state.activeTrip, pins: [...state.activeTrip.pins, newPin] },
        trips: updatedTrips,
      }
    })
  },

  publishTrip: (tripId) => {
    set((state) => ({
      trips: state.trips.map((t) =>
        t.id === tripId ? { ...t, visibility: 'published' } : t
      ),
    }))
  },

  importTrip: (tripId) => {
    const trip = get().trips.find((t) => t.id === tripId)
    if (!trip) return
    const imported = {
      ...trip,
      id: 'imp-' + Date.now(),
      status: 'draft',
      visibility: 'private',
      importedFromTripId: trip.id,
      attributionUserId: trip.createdByUserId,
      createdByUserId: get().user.id,
    }
    set((state) => ({ trips: [imported, ...state.trips] }))
  },

  getTripById: (id) => get().trips.find((t) => t.id === id),
  getDestination: (slug) => get().destinations.find((d) => d.slug === slug),
  
  getPastTrips: () => get().trips.filter((t) => t.status === 'archived' && t.createdByUserId === get().user.id),
  getFutureTrips: () => get().trips.filter((t) => t.status === 'draft' && t.createdByUserId === get().user.id),
  getPublishedTrips: () => get().trips.filter((t) => t.visibility === 'published'),
  
  setPerformanceMode: (mode) => set({ performanceMode: mode }),
  completeOnboarding: () => set({ onboardingCompleted: true }),
}))
