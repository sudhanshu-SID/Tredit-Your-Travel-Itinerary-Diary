import { NavLink } from 'react-router-dom';
import { Home, Compass, Plus, Wallet, User } from 'lucide-react';

const navItems = [
  { to: '/', Icon: Home, label: 'Home' },
  { to: '/explore', Icon: Compass, label: 'Explore' },
  { to: '/trip', Icon: Plus, label: 'Trip', isSpecial: true },
  { to: '/ledger', Icon: Wallet, label: 'Ledger' },
  { to: '/profile', Icon: User, label: 'Profile' },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-3xl border-t border-outline-variant/10 flex justify-around items-end px-4 pt-3 pb-6 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
      {navItems.map(({ to, Icon, label, isSpecial }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 min-w-[56px] transition-all duration-300 ${
              isSpecial ? '' : isActive ? 'text-primary scale-110' : 'text-on-surface-variant/50 hover:text-on-surface-variant'
            }`
          }
          end={to === '/'}
        >
          {({ isActive }) => (
            <>
              {isSpecial ? (
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center -mt-8 shadow-lg border-[3px] border-white transition-all duration-300 active:scale-90 ${
                    isActive
                      ? 'bg-gradient-to-tr from-primary to-primary-container shadow-primary/40 rotate-90'
                      : 'bg-gradient-primary shadow-primary/30'
                  }`}
                >
                  <Icon size={28} className="text-white" strokeWidth={2.5} />
                </div>
              ) : (
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} className={isActive ? 'drop-shadow-sm' : ''} />
              )}
              <span
                className={`text-[9px] font-bold uppercase tracking-[0.12em] transition-colors duration-300 ${
                  isSpecial
                    ? isActive
                      ? 'text-primary'
                      : 'text-on-surface-variant/50'
                    : ''
                }`}
              >
                {label}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
