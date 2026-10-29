import { api, ApiError, OfflineError } from './api';
import { db, type OutboxEntry } from './db';

type Listener = (pending: number) => void;
const listeners = new Set<Listener>();
let flushing = false;

async function count() {
  try {
    return await db.outbox.count();
  } catch {
    return 0;
  }
}

async function notify() {
  const n = await count();
  listeners.forEach((l) => l(n));
}

export function onPendingChange(l: Listener) {
  listeners.add(l);
  void count().then(l);
  return () => listeners.delete(l);
}

/**
 * Envoie une action au serveur, ou la met en file si le téléphone est hors ligne.
 * Les identifiants (UUID) générés côté client rendent le rejeu sans danger.
 */
export async function sendOrQueue<T>(path: string, body: unknown, label: string): Promise<{ sent: true; data: T } | { sent: false }> {
  try {
    const data = await api<T>(path, { body });
    return { sent: true, data };
  } catch (e) {
    if (!(e instanceof OfflineError)) throw e;
    await db.outbox.add({ path, body, label, createdAt: Date.now() } satisfies OutboxEntry);
    await notify();
    return { sent: false };
  }
}

/** Rejoue la file d'attente dans l'ordre ; s'arrête au premier échec réseau. */
export async function flushOutbox() {
  if (flushing) return;
  flushing = true;
  try {
    const entries = await db.outbox.orderBy('createdAt').toArray();
    for (const entry of entries) {
      try {
        await api(entry.path, { body: entry.body });
        await db.outbox.delete(entry.id!);
      } catch (e) {
        if (e instanceof OfflineError) break;
        // Refus définitif du serveur (ex. chapitre dépublié) : on retire l'action pour ne pas bloquer la file.
        if (e instanceof ApiError && e.status < 500) await db.outbox.delete(entry.id!);
        else break;
      }
    }
  } catch {
    /* IndexedDB indisponible */
  } finally {
    flushing = false;
    await notify();
  }
}

export async function isQueued(predicate: (e: OutboxEntry) => boolean) {
  try {
    return (await db.outbox.toArray()).some(predicate);
  } catch {
    return false;
  }
}

export function startSync() {
  window.addEventListener('online', () => void flushOutbox());
  void flushOutbox();
  setInterval(() => navigator.onLine && void flushOutbox(), 60_000);
}
