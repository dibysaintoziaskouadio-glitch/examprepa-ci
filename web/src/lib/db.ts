import Dexie, { type Table } from 'dexie';

/** Réponses d'API mises en cache (et « packs » de chapitres épinglés pour le hors-ligne). */
export interface CacheEntry {
  path: string;
  data: unknown;
  savedAt: number;
  pinned: 0 | 1;
  label?: string;
}

/** Actions en attente d'envoi (rejouées au retour du réseau, idempotentes côté serveur). */
export interface OutboxEntry {
  id?: number;
  path: string;
  body: unknown;
  label: string;
  createdAt: number;
}

/** Devoir en cours : survit à une fermeture de l'application ou à un redémarrage du téléphone. */
export interface DraftEntry {
  assessmentId: number;
  attemptId: string;
  startedAt: string;
  answers: Record<number, { response?: Record<string, unknown>; photoUrl?: string }>;
}

class ExamPrepaDB extends Dexie {
  cache!: Table<CacheEntry, string>;
  outbox!: Table<OutboxEntry, number>;
  drafts!: Table<DraftEntry, number>;

  constructor() {
    super('examprepa');
    this.version(1).stores({
      cache: 'path, pinned, savedAt',
      outbox: '++id, createdAt',
      drafts: 'assessmentId',
    });
  }
}

export const db = new ExamPrepaDB();

const MAX_UNPINNED = 150;

// IndexedDB peut être indisponible (navigation privée, stockage plein) : on ne bloque jamais l'interface.
async function safe<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await fn();
  } catch {
    return fallback;
  }
}

export const cacheGet = <T>(path: string) => safe(async () => (await db.cache.get(path))?.data as T | undefined, undefined);

export const cachePut = (path: string, data: unknown) =>
  safe(async () => {
    const existing = await db.cache.get(path);
    await db.cache.put({ path, data, savedAt: Date.now(), pinned: existing?.pinned ?? 0, label: existing?.label });
    const unpinned = await db.cache.where('pinned').equals(0).sortBy('savedAt');
    if (unpinned.length > MAX_UNPINNED) await db.cache.bulkDelete(unpinned.slice(0, unpinned.length - MAX_UNPINNED).map((e) => e.path));
  }, undefined);

export const pin = (path: string, data: unknown, label: string) =>
  safe(() => db.cache.put({ path, data, savedAt: Date.now(), pinned: 1, label }), '');

export const unpin = (path: string) => safe(() => db.cache.delete(path), undefined);

export const pinnedEntries = () => safe(() => db.cache.where('pinned').equals(1).toArray(), [] as CacheEntry[]);

export const isPinned = (path: string) => safe(async () => (await db.cache.get(path))?.pinned === 1, false);

export const draftGet = (assessmentId: number) => safe(() => db.drafts.get(assessmentId), undefined);
export const draftPut = (d: DraftEntry) => safe(() => db.drafts.put(d), 0);
export const draftDelete = (assessmentId: number) => safe(() => db.drafts.delete(assessmentId), undefined);

export async function clearUserData() {
  await safe(() => Promise.all([db.cache.clear(), db.outbox.clear(), db.drafts.clear()]), undefined);
}
