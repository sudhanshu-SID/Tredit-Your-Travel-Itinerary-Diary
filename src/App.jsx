import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BottomNav from './components/layout/BottomNav'
import HomePage from './pages/Home/HomePage'
import Onboarding from './pages/Onboarding/Onboarding'
import TripMode from './pages/TripDetail/TripDetail'
import Ledger from './pages/Ledger/Ledger'
import TripDetail from './pages/Trip/Trip'
import Explore from './pages/Explore/Explore'
import Destination from './pages/Destination/Destination'
import Profile from './pages/Profile/Profile'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/" element={<WithNav><HomePage /></WithNav>} />
        <Route path="/trip" element={<WithNav><TripDetail /></WithNav>} />
        <Route path="/trip/:id" element={<WithNav><TripMode /></WithNav>} />
        <Route path="/ledger" element={<WithNav><Ledger /></WithNav>} />
        <Route path="/explore" element={<WithNav><Explore /></WithNav>} />
        <Route path="/destination/:slug" element={<WithNav><Destination /></WithNav>} />
        <Route path="/profile" element={<WithNav><Profile /></WithNav>} />
      </Routes>
    </BrowserRouter>
  )
}

function WithNav({ children }) {
  return (
    <>
      {children}
      <BottomNav />
    </>
  )
}
