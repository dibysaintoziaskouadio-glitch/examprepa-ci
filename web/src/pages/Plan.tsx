import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ErrorBox, errorMessage, PageTitle, Spinner } from '../components/ui';
import { api } from '../lib/api';
import { useApi } from '../lib/hooks';
import type { Day, StudyPlan } from '../lib/types';
import { fmtDate } from '../lib/util';

const DAYS: Day[] = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
const ACTIVITY: Record<string, { label: string; tab: string; icon: string }> = {
  cours: { label: 'Cours', tab: 'cours', icon: '📖' },
  fiche: { label: 'Fiche', tab: 'fiche', icon: '🗒' },
  quiz: { label: 'Quiz', tab: 'quiz', icon: '❓' },
  devoir: { label: 'Devoir noté', tab: 'devoir', icon: '📝' },
  revision: { label: 'Révision', tab: 'fiche', icon: '🔁' },
};

interface PlanResponse {
  plan: StudyPlan | null;
  aiEnabled: boolean;
  nextAiAt: string | null;
}

export function PlanPage() {
  const { data, error, loading, reload, setData } = useApi<PlanResponse>('/ai/plan');
  const [hours, setHours] = useState(5);
  const [days, setDays] = useState<Day[]>(['lundi', 'mercredi', 'samedi', 'dimanche']);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const generate = async () => {
    setBusy(true);
    setMsg(null);
    try {
      setData(await api<PlanResponse>('/ai/plan', { body: { minutesPerWeek: hours * 60, weeks: 4, studyDays: days } }));
    } catch (e) {
      setMsg(errorMessage(e));
    } finally {
      setBusy(false);
    }
  };

  const plan = data?.plan;
  return (
    <div className="space-y-4">
      <PageTitle sub="Un programme semaine par semaine, construit à partir de tes résultats.">Mon plan de révision</PageTitle>
      {loading && !data && <Spinner />}
      {error && !data && <ErrorBox error={error} onRetry={reload} />}

      <form
        className="card space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          void generate();
        }}
      >
        <div>
          <label className="label" htmlFor="hours">
            Temps de révision par semaine : <strong>{hours} h</strong>
          </label>
          <input id="hours" type="range" min={1} max={20} value={hours} onChange={(e) => setHours(Number(e.target.value))} className="w-full accent-[var(--brand)]" />
        </div>
        <fieldset>
          <legend className="label">Mes jours de révision</legend>
          <div className="flex flex-wrap gap-1">
            {DAYS.map((d) => (
              <button
                type="button"
                key={d}
                aria-pressed={days.includes(d)}
                onClick={() => setDays(days.includes(d) ? days.filter((x) => x !== d) : [...days, d])}
                className={`chip ${days.includes(d) ? 'bg-brand text-white' : 'bg-sunken'}`}
              >
                {d.slice(0, 3)}
              </button>
            ))}
          </div>
        </fieldset>
        <button className="btn-primary w-full" disabled={busy || days.length === 0}>
          {busy ? 'Préparation du plan…' : plan ? 'Refaire mon plan' : 'Créer mon plan'}
        </button>
        {data && !data.aiEnabled && <p className="text-xs text-muted">Plan calculé à partir de tes scores (assistant IA non activé sur ce serveur).</p>}
        {data?.nextAiAt && <p className="text-xs text-muted">Nouveau plan IA possible à partir du {new Date(data.nextAiAt).toLocaleString('fr-FR')} ; d’ici là, le plan est recalculé à partir de tes scores.</p>}
        {msg && <p className="text-sm text-danger">{msg}</p>}
      </form>

      {plan && (
        <>
          <div className="card">
            <p className="text-xs font-bold uppercase text-muted">
              {plan.source === 'ai' ? '✨ Conseils de l’assistant' : '📊 Analyse de tes résultats'} · {fmtDate(plan.generatedAt)}
            </p>
            <p className="mt-1">{plan.summary}</p>
          </div>
          {plan.weeks.map((w) => (
            <section key={w.week} className="card">
              <h2 className="font-extrabold">
                Semaine {w.week}
                {w.theme && <span className="font-normal text-muted"> · {w.theme}</span>}
              </h2>
              <ul className="mt-2 space-y-2">
                {DAYS.flatMap((d) => w.sessions.filter((s) => s.day === d)).map((s, i) => (
                  <li key={i}>
                    <Link to={`/chapitres/${s.chapterId}?onglet=${ACTIVITY[s.activity].tab}`} className="flex items-start gap-3 rounded-xl bg-sunken px-3 py-2">
                      <span className="w-12 shrink-0 text-xs font-extrabold uppercase text-brand-strong">{s.day.slice(0, 3)}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-bold">
                          {ACTIVITY[s.activity].icon} {ACTIVITY[s.activity].label} · {s.title ?? `Chapitre ${s.chapterId}`}
                        </span>
                        <span className="block text-xs text-muted">
                          {s.subject ? `${s.subject} · ` : ''}
                          {s.minutes} min — {s.why}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          {plan.tips.length > 0 && (
            <section className="card">
              <h2 className="mb-1 font-extrabold">💡 Conseils de méthode</h2>
              <ul className="list-inside list-disc space-y-1 text-sm">
                {plan.tips.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </section>
          )}
        </>
      )}
    </div>
  );
}
