import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Empty, ErrorBox, OfflineNote, PageTitle, Spinner } from '../components/ui';
import { useApi } from '../lib/hooks';
import type { Dashboard, RevisionItem } from '../lib/types';
import { fmtScore, scoreTone } from '../lib/util';

/** Mention indicative à partir de la moyenne sur 20 (barème usuel ; seul le jury fait foi). */
export function mention(avg: number | null) {
  if (avg === null) return null;
  if (avg >= 16) return { label: 'Très bien', tone: 'text-ok' };
  if (avg >= 14) return { label: 'Bien', tone: 'text-ok' };
  if (avg >= 12) return { label: 'Assez bien', tone: 'text-brand-strong' };
  if (avg >= 10) return { label: 'Passable — admis(e)', tone: 'text-brand-strong' };
  return { label: 'En dessous de la moyenne', tone: 'text-danger' };
}

export function weightedAverage(rows: { coefficient: number; grade: number | null }[]) {
  const rated = rows.filter((r) => r.grade !== null && Number.isFinite(r.grade));
  const coef = rated.reduce((s, r) => s + r.coefficient, 0);
  return coef ? Math.round((rated.reduce((s, r) => s + r.grade! * r.coefficient, 0) / coef) * 100) / 100 : null;
}

export function Revisions() {
  const { data, error, offline, loading, reload } = useApi<{ premium: boolean; items: RevisionItem[] }>('/revisions');
  const [tab, setTab] = useState<'MOCK_EXAM' | 'PAST_PAPER' | 'SIM'>('MOCK_EXAM');

  const groups = useMemo(() => {
    const m = new Map<string, RevisionItem[]>();
    data?.items.filter((i) => i.type === tab).forEach((i) => m.set(i.subject?.name ?? 'Autres', [...(m.get(i.subject?.name ?? 'Autres') ?? []), i]));
    return [...m.entries()];
  }, [data, tab]);

  return (
    <div className="space-y-4">
      <PageTitle sub="Entraîne-toi dans les conditions de l’examen.">Révisions</PageTitle>
      <div className="grid grid-cols-3 gap-1 rounded-xl bg-sunken p-1" role="tablist">
        {(
          [
            ['MOCK_EXAM', 'Examens blancs'],
            ['PAST_PAPER', 'Annales'],
            ['SIM', 'Ma moyenne'],
          ] as const
        ).map(([k, label]) => (
          <button key={k} role="tab" aria-selected={tab === k} className={`rounded-lg px-2 py-2 text-sm font-bold ${tab === k ? 'bg-surface shadow' : 'text-muted'}`} onClick={() => setTab(k)}>
            {label}
          </button>
        ))}
      </div>

      {tab === 'SIM' ? (
        <Simulator />
      ) : (
        <>
          <OfflineNote show={offline} />
          {loading && !data && <Spinner />}
          {error && !data && <ErrorBox error={error} onRetry={reload} />}
          {data && !data.premium && (
            <Link to="/abonnement" className="card block border-2 border-brand">
              <p className="font-bold">⭐ Examens blancs et annales réservés aux abonnés</p>
              <p className="text-sm text-muted">Découvre les offres à partir de 1 000 FCFA par mois.</p>
            </Link>
          )}
          {data && groups.length === 0 && (
            <Empty
              icon={tab === 'PAST_PAPER' ? '📜' : '📝'}
              title={tab === 'PAST_PAPER' ? 'Pas encore d’annales' : 'Pas encore d’examen blanc'}
              text={tab === 'PAST_PAPER' ? 'Les sujets officiels seront ajoutés dès que leur diffusion est autorisée.' : 'Tes professeurs peuvent en créer depuis leur espace.'}
            />
          )}
          {groups.map(([subject, items]) => (
            <section key={subject}>
              <h2 className="mb-2 font-extrabold">
                {items[0].subject?.icon} {subject}
              </h2>
              <ul className="space-y-2">
                {items.map((a) => (
                  <li key={a.id}>
                    <Link to={`/devoir/${a.id}`} className="card flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="font-bold">{a.title}</p>
                        <p className="text-sm text-muted">
                          {a.year ? `Session ${a.year} · ` : ''}
                          {a.durationMin} min · {a._count.items} questions{a.attempts ? ` · ${a.attempts} essai(s)` : ''}
                        </p>
                      </div>
                      <span className={`shrink-0 text-lg font-extrabold ${scoreTone(a.best)}`}>{a.best === null ? (data?.premium ? '▶' : '🔒') : fmtScore(a.best)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </>
      )}
    </div>
  );
}

/** Simulateur : l'élève ajuste ses notes par matière et voit sa moyenne pondérée et sa mention. */
function Simulator() {
  const { data, error, loading, reload } = useApi<Dashboard>('/dashboard');
  const [grades, setGrades] = useState<Record<number, string>>({});

  useEffect(() => {
    if (!data) return;
    setGrades(Object.fromEntries(data.subjects.map((s) => [s.id, s.average === null ? '' : String(s.average).replace('.', ',')])));
  }, [data]);

  if (loading && !data) return <Spinner />;
  if (error && !data) return <ErrorBox error={error} onRetry={reload} />;
  if (!data) return null;

  const parse = (v: string) => {
    if (!v.trim()) return null;
    const n = Number(v.replace(',', '.'));
    return Number.isFinite(n) ? Math.max(0, Math.min(20, n)) : null;
  };
  const rows = data.subjects.map((s) => ({ ...s, grade: parse(grades[s.id] ?? '') }));
  const avg = weightedAverage(rows);
  const m = mention(avg);
  const totalCoef = rows.filter((r) => r.grade !== null).reduce((s, r) => s + r.coefficient, 0);

  return (
    <div className="space-y-3">
      <div className="card text-center">
        <p className="text-sm text-muted">Moyenne simulée</p>
        <p className={`text-4xl font-extrabold ${scoreTone(avg)}`}>{fmtScore(avg)}/20</p>
        {m && <p className={`font-bold ${m.tone}`}>{m.label}</p>}
        <p className="mt-1 text-xs text-muted">
          Somme des coefficients : {totalCoef} · objectif {fmtScore(data.targetAverage)}/20
        </p>
      </div>
      <div className="card">
        <p className="mb-2 text-sm text-muted">Pré-rempli avec tes moyennes réelles. Modifie une note pour voir l’effet sur ta moyenne.</p>
        <ul className="divide-y divide-line">
          {rows.map((s) => (
            <li key={s.id} className="flex items-center justify-between gap-2 py-2">
              <label htmlFor={`g${s.id}`} className="min-w-0 flex-1">
                <span className="font-bold">
                  {s.icon} {s.name}
                </span>
                <span className="block text-xs text-muted">coef. {s.coefficient}</span>
              </label>
              <input
                id={`g${s.id}`}
                className="input w-24 text-right"
                inputMode="decimal"
                placeholder="—"
                value={grades[s.id] ?? ''}
                onChange={(e) => setGrades({ ...grades, [s.id]: e.target.value })}
              />
            </li>
          ))}
        </ul>
      </div>
      <p className="text-xs text-muted">Mentions indicatives (10, 12, 14, 16). Les coefficients affichés sont ceux configurés par l’administration ; seules les règles officielles de la DECO font foi.</p>
    </div>
  );
}
