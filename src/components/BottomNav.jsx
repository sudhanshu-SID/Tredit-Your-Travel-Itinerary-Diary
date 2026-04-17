import { NavLink } from 'react-router-dom';
import Icon from './icons/Icon';

const navItems = [
  { to: '/', icon: 'home', label: 'Home' },
  { to: '/explore', icon: 'explore', label: 'Explore' },
  { to: '/trip', icon: 'add', label: 'Trip', isSpecial: true },
  { to: '/ledger', icon: 'receipt_long', label: 'Ledger' },
  { to: '/profile', icon: 'person', label: 'Profile' },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-white/90 backdrop-blur-2xl border-t border-outline-variant/10 flex justify-around items-center px-4 pt-4 pb-8">
      {navItems.map(({ to, icon, label, isSpecial }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => `flex flex-col items-center justify-center ${isActive && !isSpecial ? 'text-primary' : 'text-on-surface-variant/40'}`}
          end={to === '/'}
        >
          {({ isActive }) => (
            <>
              {isSpecial ? (
                <div className={`w-14 h-14 rounded-full flex items-center justify-center -mt-10 shadow-xl border-4 border-white transition-transform active:scale-90 ${isActive ? 'bg-primary-container shadow-primary-container/40' : 'bg-primary shadow-primary/40'}`}>
                  <Icon name={icon} className="text-white text-3xl" />
                </div>
              ) : (
                <Icon name={icon} filled={isActive} />
              )}
              <span className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${isSpecial && isActive ? 'text-primary' : ''}`}>{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
