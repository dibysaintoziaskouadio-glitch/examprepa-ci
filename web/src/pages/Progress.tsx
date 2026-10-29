import { Link } from 'react-router-dom';
import { LineChart } from '../components/LineChart';
import { ErrorBox, OfflineNote, PageTitle, ProgressBar, Spinner } from '../components/ui';
import { useApi } from '../lib/hooks';
import type { Dashboard } from '../lib/types';
import { fmtDate, fmtScore, scoreTone } from '../lib/util';

export function Progress() {
  const { data, error, offline, loading, reload } = useApi<Dashboard>('/dashboard');
  if (loading && !data) return <Spinner />;
  if (error && !data) return <ErrorBox error={error} onRetry={reload} />;
  if (!data) return null;

  const gap = data.generalAverage !== null ? data.targetAverage - data.generalAverage : null;

  return (
    <div className="space-y-4">
      <PageTitle sub={`${data.exam}${data.series !== 'UNIQUE' ? ` ${data.series}` : ''} · session ${data.examYear}`}>Ma progression</PageTitle>
      <OfflineNote show={offline} />

      <div className="card">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm text-muted">Moyenne générale (pondérée)</p>
            <p className={`text-4xl font-extrabold ${scoreTone(data.generalAverage)}`}>{fmtScore(data.generalAverage)}/20</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted">🎯 Objectif</p>
            <p className="text-2xl font-extrabold">{fmtScore(data.targetAverage)}/20</p>
          </div>
        </div>
        <div className="mt-3">
          <ProgressBar value={data.generalAverage !== null ? (data.generalAverage / data.targetAverage) * 100 : 0} tone="brand" label="Avancée vers l’objectif" />
          <p className="mt-1 text-xs text-muted">
            {gap === null ? 'Rends un devoir pour calculer ta moyenne.' : gap <= 0 ? 'Objectif atteint, bravo ! 🎉' : `Encore ${fmtScore(gap)} point(s) pour atteindre ton objectif.`}
          </p>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-sm">
          <div className="rounded-xl bg-sunken p-2">
            <p className="text-lg font-extrabold">{data.stats.chaptersStarted}</p>
            <p className="text-muted">chapitres</p>
          </div>
          <div className="rounded-xl bg-sunken p-2">
            <p className="text-lg font-extrabold">{data.stats.quizzesDone}</p>
            <p className="text-muted">quiz</p>
          </div>
          <div className="rounded-xl bg-sunken p-2">
            <p className="text-lg font-extrabold">{data.stats.examsSubmitted}</p>
            <p className="text-muted">devoirs</p>
          </div>
        </div>
      </div>

      <section className="card">
        <h2 className="mb-2 font-extrabold">📈 Évolution de mes notes</h2>
        <LineChart points={data.curve} />
      </section>

      <section className="card">
        <h2 className="mb-3 font-extrabold">Moyennes par matière</h2>
        <ul className="space-y-3">
          {data.subjects.map((s) => (
            <li key={s.id}>
              <Link to={`/matieres/${s.id}`} className="block">
                <div className="mb-1 flex justify-between text-sm">
                  <span>
                    {s.icon} {s.name} <span className="text-xs text-muted">coef. {s.coefficient}</span>
                  </span>
                  <span className={`font-extrabold ${scoreTone(s.average)}`}>{s.average === null ? '—' : `${fmtScore(s.average)}/20`}</span>
                </div>
                <ProgressBar value={s.average === null ? 0 : (s.average / 20) * 100} tone={s.average !== null && s.average < 10 ? 'brand' : 'ok'} label={s.name} />
              </Link>
            </li>
          ))}
        </ul>
        {(data.strengths.length > 0 || data.weaknesses.length > 0) && (
          <div className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
            {data.strengths.length > 0 && <p className="rounded-xl bg-ok-soft p-2">💪 Points forts : {data.strengths.join(', ')}</p>}
            {data.weaknesses.length > 0 && <p className="rounded-xl bg-danger-soft p-2">🎯 À renforcer : {data.weaknesses.join(', ')}</p>}
          </div>
        )}
      </section>

      {data.recommendations.length > 0 && (
        <section className="card">
          <h2 className="mb-2 font-extrabold">💡 Mes recommandations</h2>
          <ul className="space-y-2 text-sm">
            {data.recommendations.map((r, i) => (
              <li key={i} className="rounded-xl bg-sunken px-3 py-2">
                {r.chapterId ? <Link to={`/chapitres/${r.chapterId}`}>{r.text} →</Link> : r.text}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="card">
        <h2 className="mb-3 font-extrabold">🏅 Badges</h2>
        <ul className="grid grid-cols-2 gap-3">
          {data.badges.map((b) => (
            <li key={b.code} className={`rounded-xl border border-line p-3 text-center ${b.earnedAt ? 'bg-brand-soft' : 'opacity-50'}`}>
              <p className="text-3xl" aria-hidden>
                {b.earnedAt ? b.icon : '🔒'}
              </p>
              <p className="font-bold">
                {b.tier} · {b.title}
              </p>
              <p className="text-xs text-muted">{b.description}</p>
              {b.earnedAt && <p className="text-xs">obtenu le {fmtDate(b.earnedAt)}</p>}
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2 className="mb-2 font-extrabold">🗂 Historique des devoirs</h2>
        {data.history.length === 0 ? (
          <p className="text-sm text-muted">Aucun devoir rendu pour l’instant.</p>
        ) : (
          <ul className="divide-y divide-line">
            {data.history.map((h) => (
              <li key={h.id}>
                <Link to={`/resultats/${h.id}`} className="flex items-center justify-between gap-2 py-3">
                  <span className="min-w-0">
                    <span className="block truncate font-semibold">{h.title}</span>
                    <span className="text-xs text-muted">
                      {h.subject} · {fmtDate(h.submittedAt)} · {h.official ? 'officielle' : 'entraînement'}
                    </span>
                  </span>
                  <span className={`shrink-0 font-extrabold ${scoreTone(h.score)}`}>{h.status === 'GRADED' ? `${fmtScore(h.score)}/20` : '⏳'}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
