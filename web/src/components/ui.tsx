import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { api, apiBase, ApiError, getToken, OfflineError } from '../lib/api';

export function Spinner({ label = 'Chargement…' }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-3 py-12 text-muted" role="status">
      <span className="h-6 w-6 animate-spin rounded-full border-4 border-line border-t-brand" />
      {label}
    </div>
  );
}

/** Encart d'abonnement : affiché quand l'API répond 402 (contenu réservé aux abonnés). */
export function Paywall() {
  return (
    <div className="card my-4 border-2 border-brand text-center">
      <p className="text-3xl" aria-hidden>
        ⭐
      </p>
      <p className="font-extrabold">Réservé aux abonnés</p>
      <p className="mt-1 text-sm text-muted">
        Les cours, fiches et quiz restent gratuits. Abonne-toi pour passer tous les devoirs notés, les examens blancs et les annales.
      </p>
      <Link to="/abonnement" className="btn-primary mt-3 inline-flex">
        Voir les offres
      </Link>
    </div>
  );
}

export function ErrorBox({ error, onRetry }: { error: Error; onRetry?: () => void }) {
  if (error instanceof ApiError && error.status === 402) return <Paywall />;
  const offline = error instanceof OfflineError;
  return (
    <div className="card my-4 border-danger bg-danger-soft text-center">
      <p className="text-2xl" aria-hidden>
        {offline ? '📡' : '⚠️'}
      </p>
      <p className="font-bold">{offline ? 'Pas de connexion' : 'Oups…'}</p>
      <p className="text-sm text-muted">
        {offline ? 'Ce contenu n’a pas encore été téléchargé sur ton téléphone. Reconnecte-toi pour l’ouvrir.' : error.message}
      </p>
      {onRetry && (
        <button className="btn-ghost mt-3" onClick={onRetry}>
          Réessayer
        </button>
      )}
    </div>
  );
}

export function errorMessage(e: unknown) {
  if (e instanceof OfflineError) return 'Pas de connexion internet. Réessaie quand tu as du réseau.';
  if (e instanceof ApiError) return e.message;
  return 'Une erreur est survenue';
}

export function ProgressBar({ value, tone = 'ok', label }: { value: number; tone?: 'ok' | 'brand'; label?: string }) {
  const v = Math.max(0, Math.min(100, value));
  return (
    <div
      className="h-2.5 w-full overflow-hidden rounded-full bg-sunken"
      role="progressbar"
      aria-valuenow={v}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label ?? 'Progression'}
    >
      <div className={`h-full rounded-full ${tone === 'ok' ? 'bg-ok' : 'bg-brand'}`} style={{ width: `${v}%` }} />
    </div>
  );
}

export function Ring({ value, size = 56, children }: { value: number; size?: number; children?: ReactNode }) {
  const r = (size - 8) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--sunken)" strokeWidth="6" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--ok)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - Math.min(100, value) / 100)}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-xs font-extrabold">{children ?? `${value}%`}</div>
    </div>
  );
}

export function Empty({ icon, title, text, children }: { icon: string; title: string; text?: string; children?: ReactNode }) {
  return (
    <div className="card text-center py-10">
      <p className="text-4xl" aria-hidden>
        {icon}
      </p>
      <p className="mt-2 font-bold">{title}</p>
      {text && <p className="mt-1 text-sm text-muted">{text}</p>}
      {children}
    </div>
  );
}

export function PageTitle({ children, sub }: { children: ReactNode; sub?: ReactNode }) {
  return (
    <div className="mb-4">
      <h1 className="text-2xl font-extrabold leading-tight">{children}</h1>
      {sub && <p className="text-muted">{sub}</p>}
    </div>
  );
}

export function OfflineNote({ show }: { show: boolean }) {
  if (!show) return null;
  return <p className="mb-3 rounded-xl bg-sunken px-3 py-2 text-sm text-muted">📴 Hors ligne : tu consultes la dernière version enregistrée.</p>;
}

/** Image protégée (photo de copie) : chargée avec le jeton, jamais servie publiquement. */
export function AuthImage({ name, alt }: { name: string; alt: string }) {
  const [src, setSrc] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    let url: string | null = null;
    const token = getToken();
    fetch(`${apiBase}/uploads/${name}`, { headers: token ? { Authorization: `Bearer ${token}` } : {} })
      .then((r) => (r.ok ? r.blob() : Promise.reject()))
      .then((b) => setSrc((url = URL.createObjectURL(b))))
      .catch(() => setFailed(true));
    return () => {
      if (url) URL.revokeObjectURL(url);
    };
  }, [name]);
  if (failed) return <p className="text-sm text-muted">Photo indisponible hors ligne.</p>;
  if (!src) return <div className="h-40 animate-pulse rounded-xl bg-sunken" />;
  return (
    <a href={src} target="_blank" rel="noreferrer">
      <img src={src} alt={alt} className="max-h-96 rounded-xl border border-line" />
    </a>
  );
}

export async function uploadPhoto(blob: Blob): Promise<string> {
  const form = new FormData();
  form.append('file', blob, 'copie.jpg');
  const res = await api<{ name: string }>('/uploads', { form });
  return res.name;
}
