import { NavLink } from 'react-router-dom';
import Icon from './icons/Icon';

const navItems = [
  { to: '/', icon: 'home', label: 'Home' },
  { to: '/explore', icon: 'explore', label: 'Explore' },
  { to: '/trip', icon: 'add', label: 'Trip', isSpecial: true },
  { to: '/ledger', icon: 'account_balance_wallet', label: 'Ledger' },
  { to: '/profile', icon: 'person', label: 'Profile' },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur-2xl border-t border-outline-variant/10 flex justify-around items-end px-4 pt-3 pb-6">
      {navItems.map(({ to, icon, label, isSpecial }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex flex-col items-center gap-0.5 min-w-[56px] ${
              isSpecial ? '' : isActive ? 'text-primary' : 'text-on-surface-variant/50'
            }`
          }
          end={to === '/'}
        >
          {({ isActive }) => (
            <>
              {isSpecial ? (
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center -mt-8 shadow-lg border-4 border-white transition-all active:scale-90 ${
                    isActive
                      ? 'bg-primary-container shadow-primary-container/40'
                      : 'bg-primary shadow-primary/30'
                  }`}
                >
                  <Icon name={icon} className="text-white text-[28px]" />
                </div>
              ) : (
                <Icon name={icon} filled={isActive} className="text-[24px]" />
              )}
              <span
                className={`text-[9px] font-bold uppercase tracking-[0.12em] ${
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

