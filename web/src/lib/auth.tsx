import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { api, ApiError, getToken, setToken } from './api';
import { clearUserData } from './db';
import type { Me } from './types';

interface AuthState {
  user: Me | null;
  ready: boolean;
  signIn: (token: string, user: Me) => void;
  signOut: () => Promise<void>;
  refresh: () => Promise<void>;
  setUser: (u: Me) => void;
}

const AuthContext = createContext<AuthState | null>(null);

function readStoredUser(): Me | null {
  try {
    const raw = localStorage.getItem('user');
    return raw ? (JSON.parse(raw) as Me) : null;
  } catch {
    return null;
  }
}

function storeUser(u: Me | null) {
  try {
    if (u) localStorage.setItem('user', JSON.stringify(u));
    else localStorage.removeItem('user');
  } catch {
    /* stockage indisponible */
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  // Le profil est gardé localement pour ouvrir l'application même sans réseau.
  const [user, setUserState] = useState<Me | null>(() => (getToken() ? readStoredUser() : null));
  const [ready, setReady] = useState(false);

  const setUser = useCallback((u: Me) => {
    storeUser(u);
    setUserState(u);
  }, []);

  const signOut = useCallback(async () => {
    setToken(null);
    storeUser(null);
    setUserState(null);
    await clearUserData();
  }, []);

  const refresh = useCallback(async () => {
    if (!getToken()) return;
    try {
      setUser(await api<Me>('/auth/me'));
    } catch (e) {
      if (e instanceof ApiError && (e.status === 401 || e.status === 403)) await signOut();
    }
  }, [setUser, signOut]);

  useEffect(() => {
    void refresh().finally(() => setReady(true));
    const onExpired = () => void signOut();
    window.addEventListener('auth:expired', onExpired);
    return () => window.removeEventListener('auth:expired', onExpired);
  }, [refresh, signOut]);

  const signIn = useCallback(
    (token: string, u: Me) => {
      setToken(token);
      setUser(u);
    },
    [setUser],
  );

  return <AuthContext.Provider value={{ user, ready, signIn, signOut, refresh, setUser }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth hors AuthProvider');
  return ctx;
}
