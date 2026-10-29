import { Link } from 'react-router-dom';
import { Empty, ErrorBox, OfflineNote, PageTitle, Ring, Spinner } from '../components/ui';
import { useApi } from '../lib/hooks';
import type { SubjectSummary } from '../lib/types';

export function Subjects() {
  const { data, error, offline, loading, reload } = useApi<SubjectSummary[]>('/subjects');
  return (
    <div>
      <PageTitle sub="Choisis une matière">Mes matières</PageTitle>
      <OfflineNote show={offline} />
      {loading && !data && <Spinner />}
      {error && !data && <ErrorBox error={error} onRetry={reload} />}
      {data?.length === 0 && <Empty icon="📭" title="Aucune matière" />}
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {data?.map((s) => (
          <li key={s.id}>
            <Link to={`/matieres/${s.id}`} className="card flex items-center gap-3" style={{ borderLeft: `6px solid ${s.color}` }}>
              <span className="text-3xl" aria-hidden>
                {s.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-bold">{s.name}</span>
                <span className="text-sm text-muted">{s.chapterCount ? `${s.chapterCount} chapitre${s.chapterCount > 1 ? 's' : ''}` : 'Bientôt disponible'}</span>
              </span>
              <Ring value={s.progress} size={48} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
