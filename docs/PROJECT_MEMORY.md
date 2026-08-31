# Tredit - Project Memory & Handover Document

**Last Updated:** July 2026
**Status:** Phase 2 (Active Trip & Map Integration) In Progress.

This document serves as the central brain and handover file for any agent or developer working on the **Tredit** project. It outlines the vision, current state, completed work, and future roadmap.

---

## 🌍 1. Project Vision & Core Concept
**Tredit** is a premium, digital diary and community platform for responsible travelers. 
- **Mission:** To increase responsible traveling, encourage sustainable choices, and provide a clutter-free, premium space for travelers to document and share their trips.
- **Target Audience:** Newcomers to traveling who want to learn, and genuine travelers who want to contribute meaningful experiences.
- **Key Feature ("Tredit Score"):** A gamified metric that rewards ethical, sustainable, and highly-rated travel experiences.

## 🛠️ 2. Technology Stack & Design System
- **Frontend Framework:** React (Vite setup) with React Router v7.
- **Styling:** Tailwind CSS (customized with a robust design system in `tailwind.config.js`).
- **State Management:** Zustand (`src/store/useStore.js`). Currently uses mocked data.
- **Animations:** GSAP (GreenSock) for high-end, smooth micro-interactions and layout transitions.
- **Icons:** `lucide-react` (migrated away from standard material icons/custom SVGs).
- **Aesthetic Guidelines:** The UI MUST feel extremely premium. We rely heavily on glassmorphism (backdrop blurs), staggered GSAP animations, large typography (`font-headline`), bento-box grid layouts, and dynamic gradients. Avoid generic styles.

## 📂 3. Folder Structure
The project has been cleaned up for scalability:
```
Tredit/
├── docs/                # Project memory and planning files
├── public/              # Static assets
└── src/
    ├── assets/          # Global assets
    ├── components/
    │   ├── common/      # Reusable UI components (TripCard, Buttons)
    │   └── layout/      # Structural components (BottomNav, WithNav wrapper)
    ├── pages/           # Route-level components
    │   ├── Home/
    │   ├── Profile/
    │   ├── Trip/        # Trip creation
    │   ├── TripDetail/  # Active trip / specific trip view
    │   ├── Ledger/      # Trip history & impact
    │   ├── Explore/
    │   ├── Destination/
    │   └── Onboarding/
    ├── store/           # Zustand store (useStore.js)
    ├── utils/           # Helper functions
    ├── App.jsx          # Main router configuration
    └── index.css        # Global Tailwind imports and base styles
```

---

## 🔄 4. Current Work (Where We Left Off)

### Phase 1: Premium UI Overhaul (COMPLETED FOR NOW)
We have successfully redesigned all major consumer-facing views to match the premium design guidelines.
- **Home:** Bento-grid layout with GSAP animations.
- **Profile:** Dashboard aesthetic with dynamic stats.
- **Trip & TripDetail:** Magazine/editorial layouts for creating and viewing trips.
- **Ledger:** Impact dashboard showcasing lifetime score and trip history.
- **Explore & Destination:** Immersive search, filtering, and destination overviews with "Insider Pins".
- **Onboarding:** Snap-scroll storytelling view with minimal login.
- **BottomNav:** Updated to `lucide-react` with active state micro-animations.

**Outstanding Phase 1 Requirements (Deferred):**
- **Interactive Feedback:** We need a global toast/snackbar system. Right now, clicking "Bookmark" or "Share" looks great on hover, but we need a satisfying popup that says "Saved to your Ledger!" to confirm the action.
- **Desktop Layout Optimization:** Our BottomNav is fantastic for mobile, but if a user opens this on a large desktop monitor, it would feel much more premium if that navigation automatically transformed into a sleek side-menu or top navigation bar.
- **Loading Skeletons & Empty States:** We need beautifully animated shimmering skeletons for when data is loading, and illustrated "Empty States" for when a user has zero trips in their Ledger.
- **Dark Mode:** Adding a toggle to switch to a sleek dark theme would make travel photos pop beautifully.

---

## 🚀 5. Roadmap & Next Steps (From Where You Start)

We have pivoted from UI polishing directly to building core features.

### Phase 2: Interactive Maps & Active Trip Mode (COMPLETED FOR NOW)
We successfully pivoted to core functionality and built the active tracking dashboard.
- **Map Integration:** Integrated Leaflet (`react-leaflet`) for rendering interactive maps.
- **Active Dashboard (`Trip.jsx`):** Built a dual-view UI (Map & Timeline) with fixed toggles.
- **State Machine (`useStore.js`):** Implemented a robust state machine for trips: Start, Pause Tracking, End Day, and Finish Trip.
- **Opt-In Privacy:** GPS tracking requires explicit consent via a "Start Tracking My Day" button.
- **Flexible Pinning (`AddPinSheet.jsx`):** Users can drop pins with exact GPS coordinates OR opt out of GPS and manually type location names. All pins are chronologically grouped by Day in the timeline.

### Phase 3: The Ledger & Database Integration (NEXT UP)
- **MongoDB:** Replace the mocked Zustand store with a real MongoDB database to permanently store user trips, days, and pins.
- **The Ledger:** Build the summary screen (`Ledger.jsx`) where "Finished" trips are archived and stats (like the Tredit Score) are calculated.
- **Authentication:** Build the login screen so users have secure accounts.
- **Media Uploads:** Connect cloud storage for user-uploaded travel photos on pins.

### Phase 4: Community & Gamification
- Build the logic behind the "Tredit Score" (rewarding users for sustainable travel choices).
- Implement social features: following users, upvoting "Insider Hotspots", and private sharing mechanisms.

---
*Note to future agents: Before generating new code, thoroughly review `tailwind.config.js` and existing pages to ensure your output perfectly aligns with the established premium aesthetic.*
