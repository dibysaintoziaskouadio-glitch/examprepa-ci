import { cacheGet, cachePut } from './db';

const BASE = import.meta.env.VITE_API_URL ?? '/api';

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}

/** Erreur réseau (pas de connexion) : distincte d'une erreur renvoyée par le serveur. */
export class OfflineError extends Error {
  constructor() {
    super('Pas de connexion internet');
  }
}

export function getToken(): string | null {
  try {
    return localStorage.getItem('token');
  } catch {
    return null;
  }
}

export function setToken(token: string | null) {
  try {
    if (token) localStorage.setItem('token', token);
    else localStorage.removeItem('token');
  } catch {
    /* stockage indisponible (navigation privée) */
  }
}

interface Options {
  method?: string;
  body?: unknown;
  form?: FormData;
}

export async function api<T>(path: string, opts: Options = {}): Promise<T> {
  const headers: Record<string, string> = {};
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  let body: BodyInit | undefined;
  if (opts.form) body = opts.form;
  else if (opts.body !== undefined) {
    headers['Content-Type'] = 'application/json';
    body = JSON.stringify(opts.body);
  }

  let res: Response;
  try {
    res = await fetch(BASE + path, { method: opts.method ?? (body ? 'POST' : 'GET'), headers, body });
  } catch {
    throw new OfflineError();
  }
  if (res.status === 401 && token) window.dispatchEvent(new Event('auth:expired'));
  if (!res.ok) {
    let message = `Erreur ${res.status}`;
    try {
      const j = await res.json();
      message = Array.isArray(j.message) ? j.message.join(' · ') : (j.message ?? message);
    } catch {
      /* corps non JSON */
    }
    throw new ApiError(res.status, message);
  }
  return (res.status === 204 ? undefined : await res.json()) as T;
}

/**
 * GET avec repli hors ligne : chaque réponse réussie est gardée dans IndexedDB
 * et resservie quand le réseau ne répond pas.
 */
export async function apiCached<T>(path: string): Promise<{ data: T; offline: boolean }> {
  try {
    const data = await api<T>(path);
    void cachePut(path, data);
    return { data, offline: false };
  } catch (e) {
    if (e instanceof OfflineError) {
      const cached = await cacheGet<T>(path);
      if (cached !== undefined) return { data: cached, offline: true };
    }
    throw e;
  }
}

export const apiBase = BASE;
