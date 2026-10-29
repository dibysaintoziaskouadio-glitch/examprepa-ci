import { useEffect, useState } from 'react';
import { ErrorBox, errorMessage, PageTitle, Spinner } from '../../components/ui';
import { api } from '../../lib/api';
import { useApi } from '../../lib/hooks';
import type { Payment, Person, Plan } from '../../lib/types';
import { fmtDate } from '../../lib/util';

interface AdminStats {
  users: Partial<Record<'STUDENT' | 'TEACHER' | 'ADMIN', number>>;
  pendingTeachers: number;
  active7d: number;
  signups7d: number;
  attempts: number;
  toGrade: number;
  quizzes: number;
  chapters: Partial<Record<'DRAFT' | 'REVIEW' | 'PUBLISHED', number>>;
}

interface UserRow {
  id: string;
  role: 'STUDENT' | 'TEACHER' | 'ADMIN';
  status: 'ACTIVE' | 'PENDING' | 'SUSPENDED';
  phone: string | null;
  firstName: string;
  lastName: string;
  createdAt: string;
  lastSeenAt: string | null;
  student: { schoolName: string | null; city: string | null; exam: { code: string }; series: { code: string } } | null;
  teacher: { schoolName: string | null; subjects: string[]; validatedAt: string | null } | null;
}

const ROLE = { STUDENT: '🎒 Élève', TEACHER: '👩🏾‍🏫 Enseignant', ADMIN: '🛠 Admin' };
const STATUS = { ACTIVE: 'Actif', PENDING: 'En attente', SUSPENDED: 'Suspendu' };

type Tab = 'overview' | 'payments' | 'coefficients' | 'moderation';
const TABS: [Tab, string][] = [
  ['overview', 'Vue d’ensemble'],
  ['payments', 'Paiements'],
  ['coefficients', 'Coefficients'],
  ['moderation', 'Modération'],
];

export function Admin() {
  const [tab, setTab] = useState<Tab>('overview');
  return (
    <div className="space-y-4">
      <PageTitle sub="Vue d’ensemble de la plateforme">Administration</PageTitle>
      <div className="flex gap-1 overflow-x-auto rounded-xl bg-sunken p-1" role="tablist">
        {TABS.map(([k, label]) => (
          <button key={k} role="tab" aria-selected={tab === k} className={`shrink-0 rounded-lg px-3 py-2 text-sm font-bold ${tab === k ? 'bg-surface shadow' : 'text-muted'}`} onClick={() => setTab(k)}>
            {label}
          </button>
        ))}
      </div>
      {tab === 'overview' && <Overview />}
      {tab === 'payments' && <Payments />}
      {tab === 'coefficients' && <Coefficients />}
      {tab === 'moderation' && <Moderation />}
    </div>
  );
}

function Overview() {
  const stats = useApi<AdminStats>('/admin/stats');
  const pending = useApi<UserRow[]>('/admin/users?role=TEACHER&status=PENDING');
  const [q, setQ] = useState('');
  const [role, setRole] = useState('');
  const users = useApi<UserRow[]>(`/admin/users?q=${encodeURIComponent(q)}&role=${role}`);
  const [msg, setMsg] = useState<string | null>(null);
  const plans = useApi<{ plans: (Plan & { exam: { code: string } | null })[] }>('/admin/payments');

  const grant = async (u: UserRow, planId: number) => {
    setMsg(null);
    try {
      await api(`/admin/users/${u.id}/subscription`, { body: { planId } });
      setMsg(`✔ Abonnement offert à ${u.firstName} ${u.lastName}`);
    } catch (e) {
      setMsg(errorMessage(e));
    }
  };

  const update = async (id: string, body: Partial<Pick<UserRow, 'role' | 'status'>>) => {
    setMsg(null);
    try {
      await api(`/admin/users/${id}`, { method: 'PATCH', body });
      void Promise.all([stats.reload(), pending.reload(), users.reload()]);
    } catch (e) {
      setMsg(errorMessage(e));
    }
  };

  const s = stats.data;
  return (
    <div className="space-y-4">
      {stats.error && <ErrorBox error={stats.error} onRetry={stats.reload} />}
      {!s && stats.loading && <Spinner />}
      {s && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ['Élèves', s.users.STUDENT ?? 0],
            ['Enseignants', s.users.TEACHER ?? 0],
            ['Actifs (7 j)', s.active7d],
            ['Inscrits (7 j)', s.signups7d],
            ['Devoirs rendus', s.attempts],
            ['À corriger', s.toGrade],
            ['Quiz faits', s.quizzes],
            ['Chapitres publiés', s.chapters.PUBLISHED ?? 0],
          ].map(([label, value]) => (
            <div key={label} className="card">
              <p className="text-xs text-muted">{label}</p>
              <p className="text-2xl font-extrabold">{value}</p>
            </div>
          ))}
        </div>
      )}

      <section className="card">
        <h2 className="mb-2 font-extrabold">👩🏾‍🏫 Enseignants à valider ({pending.data?.length ?? 0})</h2>
        {pending.data?.length === 0 && <p className="text-sm text-muted">Aucune demande en attente.</p>}
        <ul className="divide-y divide-line">
          {pending.data?.map((u) => (
            <li key={u.id} className="flex flex-wrap items-center justify-between gap-2 py-3">
              <span>
                <span className="block font-bold">
                  {u.firstName} {u.lastName}
                </span>
                <span className="text-xs text-muted">
                  {u.phone} · {u.teacher?.schoolName ?? 'établissement non renseigné'} · {u.teacher?.subjects.join(', ') || '—'} · demande du {fmtDate(u.createdAt)}
                </span>
              </span>
              <span className="flex gap-2">
                <button className="btn-ok min-h-[40px] text-sm" onClick={() => void update(u.id, { status: 'ACTIVE' })}>
                  Valider
                </button>
                <button className="btn-ghost min-h-[40px] text-sm" onClick={() => void update(u.id, { status: 'SUSPENDED' })}>
                  Refuser
                </button>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2 className="mb-2 font-extrabold">Utilisateurs</h2>
        <div className="mb-3 grid grid-cols-1 gap-2 sm:grid-cols-[1fr_auto]">
          <input className="input" placeholder="Nom ou téléphone…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Rechercher" />
          <select className="input" value={role} onChange={(e) => setRole(e.target.value)} aria-label="Rôle">
            <option value="">Tous les rôles</option>
            {Object.entries(ROLE).map(([k, v]) => (
              <option key={k} value={k}>
                {v}
              </option>
            ))}
          </select>
        </div>
        {msg && <p className={`mb-2 text-sm ${msg.startsWith('✔') ? 'text-ok' : 'text-danger'}`}>{msg}</p>}
        <ul className="divide-y divide-line">
          {users.data?.map((u) => (
            <li key={u.id} className="py-3">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <span className="min-w-0">
                  <span className="block font-bold">
                    {u.firstName} {u.lastName}
                  </span>
                  <span className="text-xs text-muted">
                    {u.phone}
                    {u.student && ` · ${u.student.exam.code}${u.student.series.code !== 'UNIQUE' ? ` ${u.student.series.code}` : ''} · ${u.student.schoolName ?? ''} ${u.student.city ?? ''}`}
                    {u.lastSeenAt && ` · vu le ${fmtDate(u.lastSeenAt)}`}
                  </span>
                </span>
                <span className="flex flex-wrap gap-2">
                  {u.role === 'STUDENT' && plans.data && (
                    <select
                      className="input min-h-[40px] w-auto py-1 text-sm"
                      value=""
                      onChange={(e) => e.target.value && confirm(`Offrir cet abonnement à ${u.firstName} ?`) && void grant(u, Number(e.target.value))}
                      aria-label={`Offrir un abonnement à ${u.firstName}`}
                    >
                      <option value="">⭐ Offrir…</option>
                      {plans.data.plans.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  )}
                  <select className="input min-h-[40px] w-auto py-1 text-sm" value={u.role} onChange={(e) => void update(u.id, { role: e.target.value as UserRow['role'] })} aria-label={`Rôle de ${u.firstName}`}>
                    {Object.entries(ROLE).map(([k, v]) => (
                      <option key={k} value={k}>
                        {v}
                      </option>
                    ))}
                  </select>
                  <select className="input min-h-[40px] w-auto py-1 text-sm" value={u.status} onChange={(e) => void update(u.id, { status: e.target.value as UserRow['status'] })} aria-label={`Statut de ${u.firstName}`}>
                    {Object.entries(STATUS).map(([k, v]) => (
                      <option key={k} value={k}>
                        {v}
                      </option>
                    ))}
                  </select>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

const fcfa = (n: number) => `${n.toLocaleString('fr-FR')} FCFA`;
const PAY_STATUS = { PENDING: '⏳ en attente', SUCCESS: '✅ payé', FAILED: '❌ échoué' };

function Payments() {
  const { data, error, loading, reload } = useApi<{
    payments: (Payment & { user: { firstName: string; lastName: string; phone: string | null }; plan: { name: string } })[];
    revenueXof: number;
    successCount: number;
    activeSubs: number;
    plans: (Plan & { exam: { code: string } | null })[];
    provider: string;
  }>('/admin/payments');
  const [prices, setPrices] = useState<Record<number, string>>({});
  const [msg, setMsg] = useState<string | null>(null);
  useEffect(() => {
    if (data) setPrices(Object.fromEntries(data.plans.map((p) => [p.id, String(p.priceXof)])));
  }, [data]);

  if (loading && !data) return <Spinner />;
  if (error && !data) return <ErrorBox error={error} onRetry={reload} />;
  if (!data) return null;

  const savePlan = async (id: number, body: { priceXof?: number; active?: boolean }) => {
    setMsg(null);
    try {
      await api(`/admin/plans/${id}`, { method: 'PATCH', body });
      setMsg('✔ Offre mise à jour');
      await reload();
    } catch (e) {
      setMsg(errorMessage(e));
    }
  };

  return (
    <div className="space-y-4">
      {data.provider === 'mock' && (
        <p className="rounded-xl border-2 border-dashed border-brand bg-brand-soft px-3 py-2 text-sm text-brand-strong">
          🧪 Paiements en mode simulation. Pour encaisser réellement, renseigne PAYMENT_PROVIDER=cinetpay, CINETPAY_API_KEY et CINETPAY_SITE_ID.
        </p>
      )}
      <div className="grid grid-cols-3 gap-3">
        <div className="card">
          <p className="text-xs text-muted">Encaissé</p>
          <p className="text-xl font-extrabold">{fcfa(data.revenueXof)}</p>
        </div>
        <div className="card">
          <p className="text-xs text-muted">Paiements réussis</p>
          <p className="text-xl font-extrabold">{data.successCount}</p>
        </div>
        <div className="card">
          <p className="text-xs text-muted">Abonnés actifs</p>
          <p className="text-xl font-extrabold">{data.activeSubs}</p>
        </div>
      </div>

      <section className="card">
        <h2 className="mb-2 font-extrabold">Offres</h2>
        <ul className="divide-y divide-line">
          {data.plans.map((p) => (
            <li key={p.id} className="space-y-2 py-3">
              <span className={`block ${p.active ? '' : 'opacity-50'}`}>
                <span className="block font-bold">{p.name}</span>
                <span className="text-xs text-muted">
                  {p.exam?.code ?? 'Tous examens'} · {p.durationDays} jours
                </span>
              </span>
              <span className="flex items-center gap-2">
                <input className="input min-w-0 flex-1 text-right" inputMode="numeric" value={prices[p.id] ?? ''} onChange={(e) => setPrices({ ...prices, [p.id]: e.target.value })} aria-label={`Prix de ${p.name}`} />
                <button className="btn-ghost min-h-[40px] whitespace-nowrap text-sm" onClick={() => void savePlan(p.id, { priceXof: Number(prices[p.id]) })} disabled={Number(prices[p.id]) === p.priceXof}>
                  Enregistrer
                </button>
                <button className="btn-ghost min-h-[40px] whitespace-nowrap text-sm" onClick={() => void savePlan(p.id, { active: !p.active })}>
                  {p.active ? 'Désactiver' : 'Activer'}
                </button>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-1 text-xs text-muted">Prix en FCFA, multiple de 5 (exigence CinetPay).</p>
        {msg && <p className={`mt-1 text-sm ${msg.startsWith('✔') ? 'text-ok' : 'text-danger'}`}>{msg}</p>}
      </section>

      <section className="card">
        <h2 className="mb-2 font-extrabold">Derniers paiements</h2>
        {data.payments.length === 0 && <p className="text-sm text-muted">Aucun paiement.</p>}
        <ul className="divide-y divide-line">
          {data.payments.map((p) => (
            <li key={p.id} className="flex flex-wrap items-center justify-between gap-2 py-2 text-sm">
              <span>
                <span className="block font-bold">
                  {p.user.firstName} {p.user.lastName} · {p.plan.name}
                </span>
                <span className="text-xs text-muted">
                  {fmtDate(p.createdAt)} · {p.channel ?? '—'} · réf. {p.id}
                </span>
              </span>
              <span className="text-right">
                <span className="block font-extrabold">{fcfa(p.amountXof)}</span>
                <span className="text-xs">{PAY_STATUS[p.status]}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

interface SeriesRow {
  id: number;
  code: string;
  name: string;
  series: { id: number; code: string; name: string; subjects: { coefficient: number; examDurationMin: number; subject: { id: number; code: string; name: string; icon: string } }[] }[];
}

function Coefficients() {
  const { data, error, loading, reload } = useApi<SeriesRow[]>('/admin/series');
  const [seriesId, setSeriesId] = useState<number | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  if (loading && !data) return <Spinner />;
  if (error && !data) return <ErrorBox error={error} onRetry={reload} />;
  if (!data) return null;
  const all = data.flatMap((e) => e.series.map((s) => ({ ...s, exam: e.code })));
  const current = all.find((s) => s.id === seriesId) ?? all[0];

  const save = async (subjectId: number, body: { coefficient?: number; examDurationMin?: number }) => {
    setMsg(null);
    try {
      await api(`/admin/series/${current.id}/subjects/${subjectId}`, { method: 'PATCH', body });
      setMsg('✔ Enregistré');
      await reload();
    } catch (e) {
      setMsg(errorMessage(e));
    }
  };

  return (
    <div className="space-y-3">
      <p className="rounded-xl bg-brand-soft px-3 py-2 text-sm text-brand-strong">
        ⚠️ Les coefficients livrés valent 1 (provisoires). Saisis les coefficients officiels de la DECO : ils servent au calcul des moyennes et du simulateur.
      </p>
      <select className="input" value={current?.id} onChange={(e) => setSeriesId(Number(e.target.value))} aria-label="Série">
        {all.map((s) => (
          <option key={s.id} value={s.id}>
            {s.exam} · {s.code === 'UNIQUE' ? 'série unique' : s.name}
          </option>
        ))}
      </select>
      <ul className="card divide-y divide-line">
        {current?.subjects.map((x) => (
          <li key={x.subject.id} className="flex flex-wrap items-center justify-between gap-2 py-2">
            <span className="font-bold">
              {x.subject.icon} {x.subject.name}
            </span>
            <span className="flex items-center gap-3 text-sm">
              <label className="flex items-center gap-1">
                coef.
                <input
                  className="input w-16 text-center"
                  type="number"
                  min={1}
                  max={10}
                  defaultValue={x.coefficient}
                  key={`c${current.id}-${x.coefficient}`}
                  onBlur={(e) => Number(e.target.value) !== x.coefficient && void save(x.subject.id, { coefficient: Number(e.target.value) })}
                />
              </label>
              <label className="flex items-center gap-1">
                durée
                <input
                  className="input w-20 text-center"
                  type="number"
                  min={30}
                  max={480}
                  step={30}
                  defaultValue={x.examDurationMin}
                  key={`d${current.id}-${x.examDurationMin}`}
                  onBlur={(e) => Number(e.target.value) !== x.examDurationMin && void save(x.subject.id, { examDurationMin: Number(e.target.value) })}
                />
                min
              </label>
            </span>
          </li>
        ))}
      </ul>
      {msg && <p className={`text-sm ${msg.startsWith('✔') ? 'text-ok' : 'text-danger'}`}>{msg}</p>}
    </div>
  );
}

function Moderation() {
  const { data, error, loading, reload } = useApi<{ id: number; body: string; createdAt: string; flaggedAt: string; flagReason: string | null; hiddenAt: string | null; from: Person; to: Person }[]>('/admin/reports');
  const [msg, setMsg] = useState<string | null>(null);
  if (loading && !data) return <Spinner />;
  if (error && !data) return <ErrorBox error={error} onRetry={reload} />;
  if (!data) return null;
  const act = async (id: number, hide: boolean) => {
    setMsg(null);
    try {
      await api(`/admin/messages/${id}`, { method: 'PATCH', body: { hide } });
      await reload();
    } catch (e) {
      setMsg(errorMessage(e));
    }
  };
  return (
    <div className="space-y-2">
      {data.length === 0 && <p className="card text-sm text-muted">Aucun message signalé.</p>}
      {data.map((m) => (
        <div key={m.id} className={`card ${m.hiddenAt ? 'opacity-60' : ''}`}>
          <p className="text-xs text-muted">
            De {m.from.firstName} {m.from.lastName} ({m.from.role}) à {m.to.firstName} {m.to.lastName} · {fmtDate(m.createdAt)}
          </p>
          <p className="my-1 whitespace-pre-wrap rounded-xl bg-sunken px-3 py-2">{m.body}</p>
          <p className="text-sm">
            🚩 Motif : <strong>{m.flagReason}</strong>
            {m.hiddenAt && ' · masqué'}
          </p>
          <div className="mt-2 flex gap-2">
            {!m.hiddenAt && (
              <button className="btn-ghost min-h-[40px] text-sm text-danger" onClick={() => void act(m.id, true)}>
                Masquer le message
              </button>
            )}
            <button className="btn-ghost min-h-[40px] text-sm" onClick={() => void act(m.id, false)}>
              {m.hiddenAt ? 'Rétablir' : 'Classer sans suite'}
            </button>
          </div>
        </div>
      ))}
      {msg && <p className="text-sm text-danger">{msg}</p>}
    </div>
  );
}
