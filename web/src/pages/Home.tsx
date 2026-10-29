import { Link } from 'react-router-dom';
import { ErrorBox, OfflineNote, ProgressBar, Spinner } from '../components/ui';
import { useAuth } from '../lib/auth';
import { useApi } from '../lib/hooks';
import { useT } from '../lib/i18n';
import type { Announcement, Dashboard } from '../lib/types';
import { fmtDate, fmtScore, scoreTone } from '../lib/util';

const STEP_LABEL: Record<string, string> = { cours: 'Cours', fiche: 'Fiche de révision', quiz: 'Questions de cours', devoir: 'Devoir noté' };
const STEP_TAB: Record<string, string> = { cours: 'cours', fiche: 'fiche', quiz: 'quiz', devoir: 'devoir' };

export function Home() {
  const { user } = useAuth();
  const { data, error, offline, loading, reload } = useApi<Dashboard>('/dashboard');
  const { data: news } = useApi<Announcement[]>('/announcements');
  const { t } = useT();
  const quick = [
    { to: '/plan', icon: '🗓', label: t('quick.plan') },
    { to: '/combat', icon: '⚔️', label: t('quick.combat') },
    { to: '/classes', icon: '👥', label: t('quick.classes') },
    { to: '/abonnement', icon: '⭐', label: t('quick.subscription') },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-extrabold">Bonjour {user?.firstName} 👋</h1>
        <p className="text-muted">
          {user?.student?.exam.code === 'BAC' ? `BAC ${user.student.series.code}` : 'BEPC'} · Session {user?.student?.examYear}
        </p>
      </div>
      <OfflineNote show={offline} />
      {loading && !data && <Spinner />}
      {error && !data && <ErrorBox error={error} onRetry={reload} />}
      {data && (
        <>
          {data.resume ? (
            <Link to={`/chapitres/${data.resume.chapterId}?onglet=${STEP_TAB[data.resume.step]}`} className="card block border-2 border-brand">
              <p className="text-xs font-extrabold uppercase tracking-wide text-brand-strong">▶ Continuer</p>
              <p className="mt-1 font-bold">
                {data.resume.subject} · {data.resume.title}
              </p>
              <p className="mb-2 text-sm text-muted">Prochaine étape : {STEP_LABEL[data.resume.step]}</p>
              <ProgressBar value={data.resume.percent} />
            </Link>
          ) : (
            <Link to="/matieres" className="card block border-2 border-brand">
              <p className="font-bold">📚 Commence ton premier chapitre</p>
              <p className="text-sm text-muted">Choisis une matière pour démarrer.</p>
            </Link>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div className="card">
              <p className="text-sm text-muted">🎯 Objectif</p>
              <p className="text-2xl font-extrabold">{fmtScore(data.targetAverage)}/20</p>
            </div>
            <div className="card">
              <p className="text-sm text-muted">Moyenne actuelle</p>
              <p className={`text-2xl font-extrabold ${scoreTone(data.generalAverage)}`}>{fmtScore(data.generalAverage)}/20</p>
            </div>
          </div>

          <nav className="grid grid-cols-4 gap-2" aria-label="Raccourcis">
            {quick.map((q) => (
              <Link key={q.to} to={q.to} className="card flex flex-col items-center gap-1 px-1 py-3 text-center text-xs font-bold">
                <span className="text-2xl" aria-hidden>
                  {q.icon}
                </span>
                {q.label}
              </Link>
            ))}
          </nav>

          {news && news.length > 0 && (
            <section className="card">
              <h2 className="mb-2 font-extrabold">📢 Annonces de mes classes</h2>
              <ul className="space-y-2">
                {news.slice(0, 3).map((a) => (
                  <li key={a.id}>
                    <Link to={`/classes/${a.classroom?.id}`} className="block rounded-xl bg-sunken px-3 py-2 text-sm">
                      <span className="text-xs font-bold text-brand-strong">
                        {a.classroom?.name} · {fmtDate(a.createdAt)}
                      </span>
                      <span className="block whitespace-pre-wrap">{a.body}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {data.recommendations.length > 0 && (
            <section className="card">
              <h2 className="mb-2 font-extrabold">💡 Recommandé pour toi</h2>
              <ul className="space-y-2">
                {data.recommendations.slice(0, 3).map((r, i) => (
                  <li key={i}>
                    {r.chapterId ? (
                      <Link to={`/chapitres/${r.chapterId}`} className="block rounded-xl bg-sunken px-3 py-2 text-sm">
                        {r.text} →
                      </Link>
                    ) : (
                      <p className="rounded-xl bg-sunken px-3 py-2 text-sm">{r.text}</p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="card">
            <h2 className="mb-2 font-extrabold">🏅 Mes badges</h2>
            <div className="flex gap-3">
              {data.badges.map((b) => (
                <div key={b.code} className={`flex-1 text-center ${b.earnedAt ? '' : 'opacity-30 grayscale'}`} title={b.description}>
                  <p className="text-3xl" aria-hidden>
                    {b.icon}
                  </p>
                  <p className="text-xs font-bold">{b.tier}</p>
                  <span className="sr-only">{b.earnedAt ? 'obtenu' : 'pas encore obtenu'} : {b.description}</span>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
