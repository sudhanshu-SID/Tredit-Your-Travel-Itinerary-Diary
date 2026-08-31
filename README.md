# Tredit - Your Travel Itinerary Diary

Tredit is a comprehensive travel tracking and itinerary planning application designed to document your journeys seamlessly. It features a modern frontend built with React and Vite, paired with a scalable Express.js and PostgreSQL backend.

## 🏗️ Project Architecture

This project uses a modular **monorepo** structure, cleanly separating the frontend presentation layer from the backend business logic and database management.

```
Tredit/
├── frontend/             # React + Vite application
│   ├── src/              # UI components, pages, store, and styles
│   └── public/           # Static frontend assets
├── backend/              # Express.js + PostgreSQL application
│   └── src/
│       ├── controllers/  # Request handlers and business logic
│       ├── routes/       # API endpoints definitions
│       ├── models/       # Database models and relations
│       └── db/           # Database connections and scripts
└── docs/                 # Project documentation and legacy UI prototypes
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [PostgreSQL](https://www.postgresql.org/) (For backend data storage)

### Running the Frontend
The frontend is a React application powered by Vite.

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Running the Backend
The backend is an Express server preparing for PostgreSQL integration.

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server (uses nodemon):
   ```bash
   npm run dev
   ```

## 📚 Documentation
For detailed architecture decisions, component roles, and database planning, please refer to the `docs/` directory.

- [Technical Architecture](docs/architecture.md)
- [Project Overview](docs/PROJECT_MEMORY.md)
- [Legacy UI Prototypes](docs/prototypes/)

## 🎨 Tech Stack
**Frontend:** React, Vite, Tailwind CSS, Zustand, GSAP, React Leaflet  
**Backend:** Node.js, Express.js, PostgreSQL (Upcoming)
