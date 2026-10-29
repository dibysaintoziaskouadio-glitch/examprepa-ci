import { Empty, ErrorBox, PageTitle, ProgressBar, Spinner } from '../../components/ui';
import { useApi } from '../../lib/hooks';
import { fmtScore, scoreTone } from '../../lib/util';

interface Stats {
  pending: number;
  graded: number;
  assessments: { id: number; title: string; subject: string; count: number; average: number; passRate: number; items: { id: number; label: string; successRate: number | null }[] }[];
  atRisk: { id: string; name: string; count: number; average: number }[];
}

export function Stats() {
  const { data, error, loading, reload } = useApi<Stats>('/teacher/stats');
  if (loading && !data) return <Spinner />;
  if (error && !data) return <ErrorBox error={error} onRetry={reload} />;
  if (!data) return null;
  return (
    <div className="space-y-4">
      <PageTitle sub="Copies officielles corrigées">Statistiques</PageTitle>
      <div className="grid grid-cols-2 gap-3">
        <div className="card">
          <p className="text-sm text-muted">À corriger</p>
          <p className="text-3xl font-extrabold text-brand-strong">{data.pending}</p>
        </div>
        <div className="card">
          <p className="text-sm text-muted">Copies corrigées</p>
          <p className="text-3xl font-extrabold">{data.graded}</p>
        </div>
      </div>

      {data.assessments.length === 0 && <Empty icon="📊" title="Pas encore de données" text="Les statistiques apparaissent après les premières corrections." />}
      {data.assessments.map((a) => (
        <section key={a.id} className="card">
          <p className="text-xs text-muted">{a.subject}</p>
          <h2 className="font-extrabold">{a.title}</h2>
          <div className="my-3 grid grid-cols-3 gap-2 text-center text-sm">
            <div className="rounded-xl bg-sunken p-2">
              <p className={`text-lg font-extrabold ${scoreTone(a.average)}`}>{fmtScore(a.average)}</p>
              <p className="text-muted">moyenne</p>
            </div>
            <div className="rounded-xl bg-sunken p-2">
              <p className="text-lg font-extrabold">{a.passRate} %</p>
              <p className="text-muted">≥ 10/20</p>
            </div>
            <div className="rounded-xl bg-sunken p-2">
              <p className="text-lg font-extrabold">{a.count}</p>
              <p className="text-muted">copies</p>
            </div>
          </div>
          <details>
            <summary className="cursor-pointer text-sm font-bold text-brand-strong">Réussite par question</summary>
            <ul className="mt-2 space-y-2 text-sm">
              {a.items.map((it) => (
                <li key={it.id}>
                  <div className="flex justify-between gap-2">
                    <span className="truncate">{it.label}</span>
                    <span className="font-bold">{it.successRate ?? '—'} %</span>
                  </div>
                  <ProgressBar value={it.successRate ?? 0} tone={(it.successRate ?? 0) < 50 ? 'brand' : 'ok'} label={it.label} />
                </li>
              ))}
            </ul>
          </details>
        </section>
      ))}

      {data.atRisk.length > 0 && (
        <section className="card">
          <h2 className="mb-2 font-extrabold">⚠️ Élèves en difficulté (moyenne &lt; 10)</h2>
          <ul className="divide-y divide-line text-sm">
            {data.atRisk.map((s) => (
              <li key={s.id} className="flex justify-between py-2">
                <span>{s.name}</span>
                <span className="font-bold text-danger">
                  {fmtScore(s.average)}/20 <span className="font-normal text-muted">({s.count} devoir{s.count > 1 ? 's' : ''})</span>
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
