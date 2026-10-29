import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { errorMessage } from '../components/ui';
import { api } from '../lib/api';
import { useAuth } from '../lib/auth';
import type { Exam, Me } from '../lib/types';

function AuthShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mx-auto flex min-h-dvh max-w-md flex-col justify-center px-4 py-8">
      <div className="mb-6 text-center">
        <img src="/icon.svg" alt="" className="mx-auto h-16 w-16" />
        <p className="mt-2 text-2xl font-extrabold">
          ExamPrepa <span className="text-brand">CI</span>
        </p>
        <p className="text-muted">BEPC · BAC — réviser, s’entraîner, réussir</p>
      </div>
      <div className="card">
        <h1 className="mb-4 text-xl font-extrabold">{title}</h1>
        {children}
      </div>
    </div>
  );
}

function Alert({ text, tone = 'danger' }: { text: string | null; tone?: 'danger' | 'ok' }) {
  if (!text) return null;
  return (
    <p role="alert" className={`mb-3 rounded-xl px-3 py-2 text-sm ${tone === 'ok' ? 'bg-ok-soft text-ok' : 'bg-danger-soft text-danger'}`}>
      {text}
    </p>
  );
}

function PhoneField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="mb-3">
      <label className="label" htmlFor="phone">
        Numéro de téléphone
      </label>
      <div className="flex">
        <span className="flex items-center rounded-l-xl border border-r-0 border-line bg-sunken px-3 text-muted">+225</span>
        <input
          id="phone"
          className="input rounded-l-none"
          inputMode="tel"
          autoComplete="tel-national"
          placeholder="07 01 02 03 04"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
        />
      </div>
    </div>
  );
}

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (o: { client_id: string; callback: (r: { credential: string }) => void; ux_mode?: string }) => void;
          renderButton: (el: HTMLElement, o: Record<string, unknown>) => void;
        };
      };
    };
  }
}

type GoogleResult = { token: string; user: Me } | { needsProfile: true; firstName: string; lastName: string; email: string | null } | { pending: true };

/**
 * Connexion avec Google (Google Identity Services). Le bouton n'apparaît que si le serveur
 * a un GOOGLE_CLIENT_ID. Un nouveau compte doit encore choisir son examen et sa série.
 */
function GoogleSignIn({ onError }: { onError: (m: string | null) => void }) {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const holder = useRef<HTMLDivElement>(null);
  const [clientId, setClientId] = useState<string | null>(null);
  const [profile, setProfile] = useState<{ idToken: string; firstName: string } | null>(null);
  const [pending, setPending] = useState(false);

  const handle = async (idToken: string, extra: Record<string, unknown> = {}) => {
    onError(null);
    try {
      const res = await api<GoogleResult>('/auth/google', { body: { idToken, ...extra } });
      if ('token' in res) {
        signIn(res.token, res.user);
        navigate('/', { replace: true });
      } else if ('needsProfile' in res) setProfile({ idToken, firstName: res.firstName });
      else setPending(true);
    } catch (e) {
      onError(errorMessage(e));
    }
  };

  useEffect(() => {
    api<{ googleClientId: string | null }>('/auth/config')
      .then((c) => setClientId(c.googleClientId))
      .catch(() => undefined);
  }, []);

  useEffect(() => {
    if (!clientId || !holder.current || profile) return;
    const render = () => {
      window.google!.accounts.id.initialize({ client_id: clientId, callback: (r) => void handle(r.credential) });
      window.google!.accounts.id.renderButton(holder.current!, { theme: 'outline', size: 'large', text: 'continue_with', locale: 'fr', width: 280 });
    };
    if (window.google) return render();
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.onload = render;
    document.head.appendChild(script);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientId, profile]);

  if (!clientId) return null;
  if (pending) return <Alert tone="ok" text="Compte enseignant créé : un administrateur doit le valider avant ta première connexion." />;
  if (profile) return <GoogleProfile firstName={profile.firstName} onSubmit={(extra) => handle(profile.idToken, extra)} />;
  return (
    <div className="mt-4 border-t border-line pt-4">
      <p className="mb-2 text-center text-sm text-muted">ou</p>
      <div ref={holder} className="flex justify-center" />
    </div>
  );
}

function GoogleProfile({ firstName, onSubmit }: { firstName: string; onSubmit: (extra: Record<string, unknown>) => Promise<void> }) {
  const [exams, setExams] = useState<Exam[]>([]);
  const [role, setRole] = useState<'STUDENT' | 'TEACHER'>('STUDENT');
  const [examId, setExamId] = useState<number | ''>('');
  const [seriesId, setSeriesId] = useState<number | ''>('');
  const [schoolName, setSchoolName] = useState('');
  const [city, setCity] = useState('');
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    api<Exam[]>('/exams').then(setExams).catch(() => undefined);
  }, []);
  const exam = exams.find((x) => x.id === examId);
  const needsSeries = exam && exam.series.length > 1;
  return (
    <form
      className="mt-4 space-y-2 border-t border-line pt-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        await onSubmit({ role, examId: role === 'STUDENT' ? examId : undefined, seriesId: needsSeries ? seriesId : undefined, schoolName: schoolName || undefined, city: city || undefined });
        setBusy(false);
      }}
    >
      <p className="font-bold">Bienvenue {firstName} ! Termine ton inscription :</p>
      <div className="grid grid-cols-2 gap-2">
        {(
          [
            ['STUDENT', '🎒 Élève'],
            ['TEACHER', '👩🏾‍🏫 Enseignant'],
          ] as const
        ).map(([r, l]) => (
          <button type="button" key={r} className={`btn border-2 ${role === r ? 'border-brand bg-brand-soft' : 'border-line bg-surface'}`} aria-pressed={role === r} onClick={() => setRole(r)}>
            {l}
          </button>
        ))}
      </div>
      {role === 'STUDENT' && (
        <select className="input" value={examId} onChange={(e) => (setExamId(e.target.value ? Number(e.target.value) : ''), setSeriesId(''))} required aria-label="Examen">
          <option value="">Je prépare…</option>
          {exams.map((x) => (
            <option key={x.id} value={x.id}>
              {x.name}
            </option>
          ))}
        </select>
      )}
      {role === 'STUDENT' && needsSeries && (
        <select className="input" value={seriesId} onChange={(e) => setSeriesId(e.target.value ? Number(e.target.value) : '')} required aria-label="Série">
          <option value="">Ma série…</option>
          {exam!.series.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      )}
      <input className="input" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} placeholder="Établissement (facultatif)" aria-label="Établissement" />
      {role === 'STUDENT' && <input className="input" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Ville (facultatif)" aria-label="Ville" />}
      <button className="btn-primary w-full" disabled={busy}>
        {busy ? 'Création…' : 'Créer mon compte'}
      </button>
    </form>
  );
}

export function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await api<{ token: string; user: Me }>('/auth/login', { body: { phone, password } });
      signIn(res.token, res.user);
      navigate('/', { replace: true });
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <AuthShell title="Connexion">
      <form onSubmit={submit}>
        <Alert text={error} />
        <PhoneField value={phone} onChange={setPhone} />
        <div className="mb-4">
          <label className="label" htmlFor="pw">
            Mot de passe
          </label>
          <input id="pw" type="password" className="input" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className="btn-primary w-full" disabled={busy}>
          {busy ? 'Connexion…' : 'Se connecter'}
        </button>
      </form>
      <GoogleSignIn onError={setError} />
      <div className="mt-4 flex flex-col gap-2 text-center text-sm">
        <Link to="/mot-de-passe-oublie" className="text-brand-strong underline">
          Mot de passe oublié ?
        </Link>
        <p>
          Pas encore de compte ?{' '}
          <Link to="/inscription" className="font-bold text-brand-strong underline">
            Créer un compte
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}

/** Demande d'un code OTP par SMS ; en développement, le serveur renvoie le code pour faciliter les tests. */
async function requestOtp(phone: string, purpose: 'REGISTER' | 'RESET') {
  return api<{ sent: boolean; devCode?: string }>('/auth/otp', { body: { phone, purpose } });
}

export function Register() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState<'phone' | 'details' | 'pending'>('phone');
  const [exams, setExams] = useState<Exam[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [f, setF] = useState({
    phone: '',
    code: '',
    role: 'STUDENT' as 'STUDENT' | 'TEACHER',
    firstName: '',
    lastName: '',
    examId: 0,
    seriesId: 0,
    schoolName: '',
    city: '',
    parentPhone: '',
    subjects: '',
    password: '',
    consent: false,
  });
  const set = (patch: Partial<typeof f>) => setF((prev) => ({ ...prev, ...patch }));

  useEffect(() => {
    api<Exam[]>('/exams')
      .then(setExams)
      .catch(() => setError('Impossible de charger les examens. Vérifie ta connexion.'));
  }, []);
  const exam = exams.find((e) => e.id === f.examId);

  const sendCode = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await requestOtp(f.phone, 'REGISTER');
      setInfo(res.devCode ? `Code envoyé par SMS. (Mode test : ${res.devCode})` : 'Code envoyé par SMS.');
      setStep('details');
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setBusy(false);
    }
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await api<{ token?: string; user?: Me; pending?: boolean }>('/auth/register', {
        body: {
          phone: f.phone,
          code: f.code,
          password: f.password,
          firstName: f.firstName,
          lastName: f.lastName,
          role: f.role,
          examId: f.role === 'STUDENT' ? f.examId : undefined,
          seriesId: f.role === 'STUDENT' && exam && exam.series.length > 1 ? f.seriesId : undefined,
          schoolName: f.schoolName || undefined,
          city: f.city || undefined,
          parentPhone: f.parentPhone || undefined,
          subjects: f.role === 'TEACHER' ? f.subjects.split(',').map((s) => s.trim()).filter(Boolean) : undefined,
        },
      });
      if (res.pending) setStep('pending');
      else {
        signIn(res.token!, res.user!);
        navigate('/', { replace: true });
      }
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setBusy(false);
    }
  };

  if (step === 'pending') {
    return (
      <AuthShell title="Demande envoyée ✅">
        <p>Ton compte enseignant a été créé. Un administrateur doit le valider avant ta première connexion.</p>
        <Link to="/connexion" className="btn-primary mt-4 w-full">
          Retour à la connexion
        </Link>
      </AuthShell>
    );
  }

  return (
    <AuthShell title="Créer un compte">
      <Alert text={error} />
      <Alert text={info} tone="ok" />
      {step === 'phone' ? (
        <form onSubmit={sendCode}>
          <fieldset className="mb-4">
            <legend className="label">Je suis</legend>
            <div className="grid grid-cols-2 gap-2">
              {(['STUDENT', 'TEACHER'] as const).map((r) => (
                <button
                  type="button"
                  key={r}
                  onClick={() => set({ role: r })}
                  aria-pressed={f.role === r}
                  className={`btn border-2 ${f.role === r ? 'border-brand bg-brand-soft' : 'border-line bg-surface'}`}
                >
                  {r === 'STUDENT' ? '🎒 Élève' : '👩🏾‍🏫 Enseignant'}
                </button>
              ))}
            </div>
          </fieldset>
          <PhoneField value={f.phone} onChange={(phone) => set({ phone })} />
          <button className="btn-primary w-full" disabled={busy}>
            {busy ? 'Envoi…' : 'Recevoir le code par SMS'}
          </button>
          <p className="mt-4 text-center text-sm">
            Déjà inscrit ?{' '}
            <Link to="/connexion" className="font-bold text-brand-strong underline">
              Se connecter
            </Link>
          </p>
        </form>
      ) : (
        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="label" htmlFor="code">
              Code reçu par SMS
            </label>
            <input id="code" className="input tracking-[.5em]" inputMode="numeric" maxLength={6} value={f.code} onChange={(e) => set({ code: e.target.value.replace(/\D/g, '') })} required />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="label" htmlFor="fn">
                Prénom
              </label>
              <input id="fn" className="input" autoComplete="given-name" value={f.firstName} onChange={(e) => set({ firstName: e.target.value })} required />
            </div>
            <div>
              <label className="label" htmlFor="ln">
                Nom
              </label>
              <input id="ln" className="input" autoComplete="family-name" value={f.lastName} onChange={(e) => set({ lastName: e.target.value })} required />
            </div>
          </div>
          {f.role === 'STUDENT' && (
            <>
              <fieldset>
                <legend className="label">Je prépare</legend>
                <div className="grid grid-cols-2 gap-2">
                  {exams.map((ex) => (
                    <button
                      type="button"
                      key={ex.id}
                      onClick={() => set({ examId: ex.id, seriesId: 0 })}
                      aria-pressed={f.examId === ex.id}
                      className={`btn border-2 ${f.examId === ex.id ? 'border-brand bg-brand-soft' : 'border-line bg-surface'}`}
                    >
                      {ex.code} <span className="text-xs font-normal">({ex.gradeLevel})</span>
                    </button>
                  ))}
                </div>
              </fieldset>
              {exam && exam.series.length > 1 && (
                <div>
                  <label className="label" htmlFor="series">
                    Ma série
                  </label>
                  <select id="series" className="input" value={f.seriesId} onChange={(e) => set({ seriesId: Number(e.target.value) })} required>
                    <option value={0} disabled>
                      Choisir…
                    </option>
                    {exam.series.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </>
          )}
          <div>
            <label className="label" htmlFor="school">
              Établissement
            </label>
            <input id="school" className="input" placeholder="Ex. Lycée moderne de Cocody" value={f.schoolName} onChange={(e) => set({ schoolName: e.target.value })} />
          </div>
          {f.role === 'STUDENT' ? (
            <>
              <div>
                <label className="label" htmlFor="city">
                  Ville
                </label>
                <input id="city" className="input" placeholder="Ex. Bouaké" value={f.city} onChange={(e) => set({ city: e.target.value })} />
              </div>
              <div>
                <label className="label" htmlFor="parent">
                  Téléphone d’un parent <span className="font-normal text-muted">(si tu as moins de 18 ans)</span>
                </label>
                <input id="parent" className="input" inputMode="tel" value={f.parentPhone} onChange={(e) => set({ parentPhone: e.target.value })} />
              </div>
            </>
          ) : (
            <div>
              <label className="label" htmlFor="subjects">
                Matières enseignées <span className="font-normal text-muted">(séparées par des virgules)</span>
              </label>
              <input id="subjects" className="input" placeholder="Mathématiques, Physique-Chimie" value={f.subjects} onChange={(e) => set({ subjects: e.target.value })} />
            </div>
          )}
          <div>
            <label className="label" htmlFor="newpw">
              Mot de passe <span className="font-normal text-muted">(8 caractères minimum)</span>
            </label>
            <input id="newpw" type="password" className="input" autoComplete="new-password" minLength={8} value={f.password} onChange={(e) => set({ password: e.target.value })} required />
          </div>
          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" className="mt-1 h-5 w-5 accent-[var(--brand-strong)]" checked={f.consent} onChange={(e) => set({ consent: e.target.checked })} required />
            <span>
              J’accepte que mes données (nom, classe, notes) soient utilisées pour suivre ma progression, conformément à la loi ivoirienne n° 2013-450. Je peux les
              exporter ou les supprimer à tout moment.
            </span>
          </label>
          <button className="btn-primary w-full" disabled={busy || (f.role === 'STUDENT' && !f.examId)}>
            {busy ? 'Création…' : 'Créer mon compte'}
          </button>
          <button type="button" className="w-full text-sm text-muted underline" onClick={() => setStep('phone')}>
            Changer de numéro
          </button>
        </form>
      )}
    </AuthShell>
  );
}

export function ForgotPassword() {
  const navigate = useNavigate();
  const [step, setStep] = useState<'phone' | 'reset'>('phone');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const run = (fn: () => Promise<void>) => async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      await fn();
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <AuthShell title="Mot de passe oublié">
      <Alert text={error} />
      <Alert text={info} tone="ok" />
      {step === 'phone' ? (
        <form
          onSubmit={run(async () => {
            const res = await requestOtp(phone, 'RESET');
            setInfo(`Si ce numéro a un compte, un code a été envoyé par SMS.${res.devCode ? ` (Mode test : ${res.devCode})` : ''}`);
            setStep('reset');
          })}
        >
          <PhoneField value={phone} onChange={setPhone} />
          <button className="btn-primary w-full" disabled={busy}>
            Recevoir un code
          </button>
        </form>
      ) : (
        <form
          className="space-y-3"
          onSubmit={run(async () => {
            await api('/auth/reset-password', { body: { phone, code, password } });
            navigate('/connexion', { replace: true });
          })}
        >
          <div>
            <label className="label" htmlFor="rcode">
              Code reçu
            </label>
            <input id="rcode" className="input tracking-[.5em]" inputMode="numeric" maxLength={6} value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))} required />
          </div>
          <div>
            <label className="label" htmlFor="rpw">
              Nouveau mot de passe
            </label>
            <input id="rpw" type="password" className="input" minLength={8} autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button className="btn-primary w-full" disabled={busy}>
            Changer mon mot de passe
          </button>
        </form>
      )}
      <Link to="/connexion" className="mt-4 block text-center text-sm text-brand-strong underline">
        Retour à la connexion
      </Link>
    </AuthShell>
  );
}
