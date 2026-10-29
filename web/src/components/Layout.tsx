import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { api } from '../lib/api';
import { useAuth } from '../lib/auth';
import { useOnline } from '../lib/hooks';
import { useT, type Key } from '../lib/i18n';
import { flushOutbox, onPendingChange } from '../lib/sync';

const NAV: Record<'STUDENT' | 'TEACHER' | 'ADMIN', { to: string; label: Key; icon: string; end?: boolean }[]> = {
  STUDENT: [
    { to: '/', label: 'nav.home', icon: '🏠', end: true },
    { to: '/matieres', label: 'nav.subjects', icon: '📚' },
    { to: '/revisions', label: 'nav.revisions', icon: '🎯' },
    { to: '/progres', label: 'nav.progress', icon: '📊' },
    { to: '/profil', label: 'nav.profile', icon: '👤' },
  ],
  TEACHER: [
    { to: '/prof', label: 'nav.copies', icon: '📝', end: true },
    { to: '/prof/classes', label: 'nav.classes', icon: '👥' },
    { to: '/prof/devoirs', label: 'nav.assessments', icon: '🗂' },
    { to: '/prof/contenu', label: 'nav.content', icon: '✏️' },
    { to: '/profil', label: 'nav.profile', icon: '👤' },
  ],
  ADMIN: [
    { to: '/admin', label: 'nav.admin', icon: '🛠', end: true },
    { to: '/prof', label: 'nav.copies', icon: '📝', end: true },
    { to: '/prof/devoirs', label: 'nav.assessments', icon: '🗂' },
    { to: '/prof/contenu', label: 'nav.content', icon: '✏️' },
    { to: '/profil', label: 'nav.profile', icon: '👤' },
  ],
};

/** Messages non lus : interrogation toutes les 15 s quand l'appli est visible (économe en données). */
function useUnread(enabled: boolean) {
  const [unread, setUnread] = useState(0);
  const location = useLocation();
  useEffect(() => {
    if (!enabled) return;
    let stop = false;
    const tick = () => {
      if (document.visibilityState !== 'visible' || !navigator.onLine) return;
      api<{ unread: number }>('/messages/unread')
        .then((r) => !stop && setUnread(r.unread))
        .catch(() => undefined);
    };
    tick();
    const t = setInterval(tick, 15_000);
    document.addEventListener('visibilitychange', tick);
    return () => {
      stop = true;
      clearInterval(t);
      document.removeEventListener('visibilitychange', tick);
    };
  }, [enabled, location.pathname]);
  return unread;
}

export function Layout() {
  const { user } = useAuth();
  const { t } = useT();
  const online = useOnline();
  const [pending, setPending] = useState(0);
  const unread = useUnread(!!user);
  useEffect(() => {
    const off = onPendingChange(setPending);
    return () => void off();
  }, []);
  if (!user) return null;

  return (
    <div className="mx-auto flex min-h-dvh max-w-3xl flex-col">
      <header className="sticky top-0 z-20 flex items-center justify-between gap-2 border-b border-line bg-surface/95 px-4 py-2 backdrop-blur">
        <span className="flex min-w-0 items-center gap-2 font-extrabold">
          <img src="/icon.svg" alt="" className="h-8 w-8" />
          <span className="truncate">
            ExamPrepa <span className="text-brand">CI</span>
          </span>
        </span>
        <div className="flex items-center gap-2 text-xs">
          {pending > 0 && (
            <button className="chip bg-brand-soft text-brand-strong" onClick={() => void flushOutbox()} title="Envoyer maintenant">
              ⏳ {pending} {t('header.pending')}
            </button>
          )}
          <span className={`chip ${online ? 'bg-ok-soft text-ok' : 'bg-sunken text-muted'}`}>
            {online ? `● ${t('header.online')}` : `○ ${t('header.offline')}`}
          </span>
          <Link to="/messages" className="relative flex h-10 w-10 items-center justify-center rounded-full text-xl" aria-label={`${t('header.messages')}${unread ? ` (${unread} non lus)` : ''}`}>
            💬
            {unread > 0 && (
              <span className="absolute right-0 top-0 min-w-[18px] rounded-full bg-danger px-1 text-center text-[11px] font-extrabold leading-[18px] text-white">
                {unread > 9 ? '9+' : unread}
              </span>
            )}
          </Link>
        </div>
      </header>

      <main className="flex-1 px-4 pb-28 pt-4">
        <Outlet />
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-surface pb-[env(safe-area-inset-bottom)]" aria-label="Navigation principale">
        <ul className="mx-auto grid max-w-3xl grid-cols-5">
          {NAV[user.role].map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `flex min-h-[60px] flex-col items-center justify-center px-0.5 text-center text-[11px] font-bold leading-tight ${isActive ? 'text-brand-strong' : 'text-muted'}`
                }
              >
                <span className="text-xl" aria-hidden>
                  {item.icon}
                </span>
                {t(item.label)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
