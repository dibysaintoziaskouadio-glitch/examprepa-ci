import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ErrorBox, errorMessage, PageTitle, Spinner } from '../../components/ui';
import { api } from '../../lib/api';
import { useApi } from '../../lib/hooks';
import type { Exam, SubjectSummary } from '../../lib/types';
import { fmtDate } from '../../lib/util';

interface ChapterRow {
  id: number;
  title: string;
  status: 'DRAFT' | 'REVIEW' | 'PUBLISHED';
  orderIndex: number;
  version: number;
  updatedAt: string;
  validatedAt: string | null;
  subject: { id: number; name: string };
  exam: { code: string };
  _count: { questions: number; assessments: number };
}

export const STATUS_LABEL = { DRAFT: '✏️ Brouillon', REVIEW: '👀 En relecture', PUBLISHED: '✅ Publié' };

export function ContentList() {
  const navigate = useNavigate();
  const { data: exams } = useApi<Exam[]>('/exams');
  const [examId, setExamId] = useState(1);
  const { data: subjects } = useApi<SubjectSummary[]>(`/subjects?examId=${examId}`);
  const { data, error, loading, reload } = useApi<ChapterRow[]>(`/content/chapters?examId=${examId}`);
  const [creating, setCreating] = useState({ subjectId: 0, title: '' });
  const [msg, setMsg] = useState<string | null>(null);

  const create = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const c = await api<{ id: number }>('/content/chapters', { body: { ...creating, examId } });
      navigate(`/prof/contenu/${c.id}`);
    } catch (err) {
      setMsg(errorMessage(err));
    }
  };

  const bySubject = new Map<string, ChapterRow[]>();
  data?.forEach((c) => bySubject.set(c.subject.name, [...(bySubject.get(c.subject.name) ?? []), c]));

  return (
    <div className="space-y-4">
      <PageTitle sub="Cours, fiches et questions de cours">Contenus pédagogiques</PageTitle>
      <div className="flex gap-2">
        {exams?.map((ex) => (
          <button key={ex.id} className={`btn flex-1 border-2 ${examId === ex.id ? 'border-brand bg-brand-soft' : 'border-line bg-surface'}`} onClick={() => setExamId(ex.id)}>
            {ex.code}
          </button>
        ))}
      </div>

      <form onSubmit={create} className="card space-y-2">
        <h2 className="font-extrabold">➕ Nouveau chapitre</h2>
        <select className="input" value={creating.subjectId} onChange={(e) => setCreating({ ...creating, subjectId: Number(e.target.value) })} required aria-label="Matière">
          <option value={0} disabled>
            Matière…
          </option>
          {subjects?.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
        <input className="input" placeholder="Titre du chapitre" value={creating.title} onChange={(e) => setCreating({ ...creating, title: e.target.value })} required minLength={2} aria-label="Titre" />
        <button className="btn-primary w-full" disabled={!creating.subjectId}>
          Créer le brouillon
        </button>
        {msg && <p className="text-sm text-danger">{msg}</p>}
      </form>

      {loading && !data && <Spinner />}
      {error && <ErrorBox error={error} onRetry={reload} />}
      {[...bySubject.entries()].map(([subject, rows]) => (
        <section key={subject} className="card">
          <h2 className="mb-2 font-extrabold">{subject}</h2>
          <ul className="divide-y divide-line">
            {rows.map((c) => (
              <li key={c.id}>
                <Link to={`/prof/contenu/${c.id}`} className="flex items-center justify-between gap-2 py-3">
                  <span className="min-w-0">
                    <span className="block font-semibold">
                      {c.orderIndex}. {c.title}
                    </span>
                    <span className="text-xs text-muted">
                      {c._count.questions} questions · {c._count.assessments} devoir · v{c.version} · modifié le {fmtDate(c.updatedAt)}
                    </span>
                  </span>
                  <span className="flex shrink-0 flex-col items-end gap-1">
                    <span className="chip bg-sunken">{STATUS_LABEL[c.status]}</span>
                    <span className={`chip ${c.validatedAt ? 'bg-ok-soft text-ok' : 'bg-brand-soft text-brand-strong'}`}>{c.validatedAt ? '✔ relu' : '⏳ à relire'}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
