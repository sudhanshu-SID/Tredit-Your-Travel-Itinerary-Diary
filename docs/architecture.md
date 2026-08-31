# Technical Architecture

## 1. Tech Stack
- **Frontend Framework:** React (Vite setup)
- **Routing:** React Router v7
- **Styling:** Tailwind CSS (customized with a robust design system)
- **State Management:** Zustand (`src/store/useStore.js`, currently mocked)
- **Animations:** GSAP (GreenSock) for high-end micro-interactions
- **Icons:** `lucide-react`
- **Mapping:** Leaflet (`react-leaflet`)
- **Backend / Database (Upcoming Phase 3):** Express.js + PostgreSQL for persistent relational storage

## 2. Folder and File Structure

We follow a modular monorepo structure to separate frontend presentation from backend logic.

```
Tredit/
├── docs/                # Project memory, planning files, and architecture docs
│   └── prototypes/      # Legacy static HTML UI prototypes for reference
├── backend/             # Node.js + Express backend application
│   ├── package.json     # Backend dependencies and scripts
│   └── src/
│       ├── config/      # Environment variables and database connection config
│       ├── controllers/ # Request handlers (Business logic entry)
│       ├── db/          # PostgreSQL connection, migrations, and raw SQL
│       ├── middleware/  # Custom Express middlewares (Auth, Error Handling)
│       ├── models/      # Relational data models representing DB tables
│       ├── routes/      # Express API route definitions
│       ├── utils/       # Shared backend helper functions
│       └── server.js    # Express application entry point
└── frontend/            # React + Vite frontend application
    ├── index.html       # Vite entry HTML
    ├── package.json     # Frontend dependencies and scripts
    ├── public/          # Static assets served as-is
    └── src/
        ├── assets/      # Global assets processed by Vite
        ├── components/
        │   ├── common/  # Reusable UI components (TripCard, Buttons)
        │   └── layout/  # Structural components (BottomNav, WithNav wrapper)
        ├── pages/       # Route-level React components
        │   ├── Home/
        │   ├── Profile/
        │   ├── Trip/
        │   ├── TripDetail/
        │   ├── Ledger/
        │   ├── Explore/
        │   ├── Destination/
        │   └── Onboarding/
        ├── store/       # Zustand store for global state management
        ├── utils/       # Frontend helper functions
        ├── App.jsx      # Main router configuration
        └── index.css    # Global Tailwind imports and base styles
```

## 3. App Flow & Architecture Diagram
- **Onboarding:** Initial user entry, snap-scroll storytelling, minimal login.
- **Home / Dashboard:** User lands on a bento-grid layout displaying active trips and key stats.
- **Active Trip Flow:** User starts tracking -> `Trip.jsx` handles state -> Map updates -> User adds Pins -> End Day / Finish Trip.
- **Ledger Flow:** Finished trips move to `Ledger.jsx` -> Tredit score calculated and displayed.
- **Explore Flow:** Search & filter destinations -> view immersive overviews and Insider Pins.

## 4. Edge Cases & Considerations
- **Offline Mode:** Map tiles and active tracking should gracefully handle intermittent connectivity.
- **Privacy:** GPS tracking must always require explicit consent ("Start Tracking My Day"). Fallback to manual location entry.
- **Performance:** Extensive GSAP animations and Leaflet maps require optimization on low-end devices.
