import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Empty, ErrorBox, OfflineNote, ProgressBar, Spinner } from '../components/ui';
import { pinnedEntries } from '../lib/db';
import { useApi } from '../lib/hooks';
import type { ChapterPack, ChapterSummary } from '../lib/types';
import { fmtScore, scoreTone } from '../lib/util';

export function Chapters() {
  const { id } = useParams();
  const { data, error, offline, loading, reload } = useApi<{ subject: { code: string; name: string; icon: string }; chapters: ChapterSummary[] }>(`/subjects/${id}/chapters`);
  const [downloaded, setDownloaded] = useState<Map<number, number>>(new Map());

  useEffect(() => {
    void pinnedEntries().then((entries) =>
      setDownloaded(
        new Map(
          entries
            .filter((e) => e.path.startsWith('/chapters/'))
            .map((e) => [(e.data as ChapterPack).id, (e.data as ChapterPack).version] as [number, number]),
        ),
      ),
    );
  }, [data]);

  return (
    <div>
      <Link to="/matieres" className="text-sm text-muted">
        ← Matières
      </Link>
      {data && (
        <h1 className="mb-3 mt-1 text-2xl font-extrabold">
          {data.subject.icon} {data.subject.name}
        </h1>
      )}
      <OfflineNote show={offline} />
      {loading && !data && <Spinner />}
      {error && !data && <ErrorBox error={error} onRetry={reload} />}
      {data?.chapters.length === 0 &&
        (data.subject.code === 'EPS' ? (
          <Empty icon="⚽" title="Épreuve pratique" text="L’EPS est évaluée sur le terrain (courses, sauts, sports collectifs…). Entraîne-toi régulièrement avec ton professeur d’EPS." />
        ) : (
          <Empty icon="🛠" title="Contenus en préparation" text="Les chapitres de cette matière arrivent bientôt." />
        ))}
      <ol className="space-y-3">
        {data?.chapters.map((c, i) => {
          const exam = c.assessments[0];
          const dl = downloaded.get(c.id);
          const inner = (
            <>
              <div className="flex items-start gap-3">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-extrabold ${
                    c.locked ? 'bg-sunken text-muted' : c.percent === 100 ? 'bg-ok text-on-brand' : 'bg-brand-soft text-brand-strong'
                  }`}
                  aria-hidden
                >
                  {c.locked ? '🔒' : c.percent === 100 ? '✓' : i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-bold">{c.title}</p>
                  <p className="text-xs text-muted">
                    ⏱ {Math.round(c.estimatedMinutes / 60) || 1} h environ
                    {dl !== undefined && (dl === c.version ? ' · 📥 hors ligne' : ' · 🔄 mise à jour disponible')}
                  </p>
                </div>
                {c.examBest !== null && <span className={`font-extrabold ${scoreTone(c.examBest)}`}>{fmtScore(c.examBest)}/20</span>}
              </div>
              {c.locked ? (
                <p className="mt-2 text-sm text-muted">Obtiens au moins la moyenne au devoir du chapitre précédent pour débloquer ce chapitre.</p>
              ) : (
                <div className="mt-3">
                  <ProgressBar value={c.percent} label={`Progression : ${c.title}`} />
                  {exam?.blocksNext && <p className="mt-1 text-xs text-muted">Devoir obligatoire (≥ {exam.passMark}/20) pour passer à la suite</p>}
                </div>
              )}
            </>
          );
          return (
            <li key={c.id}>
              {c.locked ? (
                <div className="card opacity-70" aria-disabled>
                  {inner}
                </div>
              ) : (
                <Link to={`/chapitres/${c.id}`} className="card block">
                  {inner}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
