import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Empty, ErrorBox, PageTitle, Spinner } from '../../components/ui';
import { useApi } from '../../lib/hooks';
import { fmtDate, fmtScore, scoreTone } from '../../lib/util';

interface QueueItem {
  id: string;
  status: string;
  autoScore: number;
  finalScore: number | null;
  submittedAt: string;
  late: boolean;
  isOfficial: boolean;
  user: { firstName: string; lastName: string; student: { schoolName: string | null } | null };
  assessment: { title: string; chapter: { title: string; subject: { name: string } } | null };
}

export function Queue() {
  const [status, setStatus] = useState<'SUBMITTED' | 'GRADED'>('SUBMITTED');
  const { data, error, loading, reload } = useApi<QueueItem[]>(`/grading/queue?status=${status}`);

  return (
    <div>
      <PageTitle sub="Copies rendues par les élèves">Copies à corriger</PageTitle>
      <div className="mb-4 grid grid-cols-2 gap-2" role="tablist">
        {(
          [
            ['SUBMITTED', '⏳ À corriger'],
            ['GRADED', '✅ Corrigées'],
          ] as const
        ).map(([s, label]) => (
          <button key={s} role="tab" aria-selected={status === s} className={`btn border-2 ${status === s ? 'border-brand bg-brand-soft' : 'border-line bg-surface'}`} onClick={() => setStatus(s)}>
            {label}
          </button>
        ))}
      </div>
      {loading && !data && <Spinner />}
      {error && <ErrorBox error={error} onRetry={reload} />}
      {data?.length === 0 && <Empty icon="🎉" title={status === 'SUBMITTED' ? 'Aucune copie en attente' : 'Aucune copie corrigée'} />}
      <ul className="space-y-2">
        {data?.map((a) => (
          <li key={a.id}>
            <Link to={`/prof/correction/${a.id}`} className="card flex items-center justify-between gap-3">
              <span className="min-w-0">
                <span className="block font-bold">
                  {a.user.firstName} {a.user.lastName}
                </span>
                <span className="block truncate text-sm">{a.assessment.title}</span>
                <span className="text-xs text-muted">
                  {a.assessment.chapter?.subject.name} · {fmtDate(a.submittedAt)}
                  {a.user.student?.schoolName && ` · ${a.user.student.schoolName}`}
                  {a.late && ' · ⚠️ en retard'}
                  {!a.isOfficial && ' · entraînement'}
                </span>
              </span>
              <span className={`shrink-0 text-right font-extrabold ${scoreTone(a.finalScore ?? a.autoScore)}`}>
                {fmtScore(a.finalScore ?? a.autoScore)}/20
                {status === 'SUBMITTED' && <span className="block text-xs font-normal text-muted">auto</span>}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
