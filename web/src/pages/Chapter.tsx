import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { SpeakButton } from '../components/Speak';
import { ErrorBox, OfflineNote, ProgressBar, Spinner } from '../components/ui';
import { api, ApiError } from '../lib/api';
import { draftGet, isPinned, pin, unpin } from '../lib/db';
import { useApi } from '../lib/hooks';
import { Md } from '../lib/markdown';
import { sendOrQueue } from '../lib/sync';
import type { ChapterPack, ChapterProgress } from '../lib/types';
import { fmtDate, fmtScore, scoreTone } from '../lib/util';
import { Quiz } from './Quiz';

const TABS = [
  { key: 'cours', label: '📖 Cours' },
  { key: 'fiche', label: '📝 Fiche' },
  { key: 'quiz', label: '❓ Quiz' },
  { key: 'devoir', label: '🧪 Devoir' },
] as const;
type Tab = (typeof TABS)[number]['key'];

interface MyAttempt {
  id: string;
  status: string;
  isOfficial: boolean;
  autoScore: number;
  finalScore: number | null;
  submittedAt: string;
  assessment: { id: number };
}

export function Chapter() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const tab = (params.get('onglet') as Tab) ?? 'cours';
  const path = `/chapters/${id}`;
  const { data, error, offline, loading, reload } = useApi<ChapterPack>(path);
  const [progress, setProgress] = useState<ChapterProgress | null>(null);
  const [pinned, setPinned] = useState(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    if (data) setProgress(data.progress);
    void isPinned(path).then(setPinned);
  }, [data, path]);

  if (loading && !data) return <Spinner />;
  if (error && !data) {
    if (error instanceof ApiError && error.status === 403) {
      return (
        <div className="card mt-6 text-center">
          <p className="text-4xl">🔒</p>
          <p className="font-bold">Chapitre verrouillé</p>
          <p className="text-sm text-muted">{error.message}</p>
          <button className="btn-ghost mt-3" onClick={() => navigate(-1)}>
            Retour
          </button>
        </div>
      );
    }
    return <ErrorBox error={error} onRetry={reload} />;
  }
  if (!data) return null;

  const exam = data.assessments[0];

  const toggleDownload = async () => {
    setDownloading(true);
    try {
      if (pinned) {
        await unpin(path);
        if (exam) await unpin(`/assessments/${exam.id}`);
        setPinned(false);
      } else {
        // Pack du chapitre + sujet du devoir : tout ce qu'il faut pour travailler sans réseau.
        const fresh = await api<ChapterPack>(path);
        await pin(path, fresh, `${fresh.subject.name} · ${fresh.title}`);
        if (exam) await pin(`/assessments/${exam.id}`, await api(`/assessments/${exam.id}`), `Devoir · ${fresh.title}`);
        setPinned(true);
      }
    } catch {
      alert('Téléchargement impossible : vérifie ta connexion.');
    } finally {
      setDownloading(false);
    }
  };

  const markStep = (step: 'courseDone' | 'summaryDone') => {
    setProgress((p) => ({ courseDone: false, summaryDone: false, quizBest: null, examBest: null, ...p, [step]: true }));
    void sendOrQueue(`/progress/chapters/${data.id}`, { [step]: true }, step === 'courseDone' ? 'Cours lu' : 'Fiche lue').catch(() => undefined);
  };

  const steps = [progress?.courseDone, progress?.summaryDone, progress?.quizBest != null, exam ? (progress?.examBest ?? -1) >= exam.passMark : undefined].filter(
    (s) => s !== undefined,
  );
  const percent = Math.round((steps.filter(Boolean).length / steps.length) * 100);

  return (
    <div>
      <Link to={`/matieres/${data.subject.id}`} className="text-sm text-muted">
        ← {data.subject.icon} {data.subject.name}
      </Link>
      <div className="mb-3 mt-1 flex items-start justify-between gap-3">
        <h1 className="text-2xl font-extrabold leading-tight">{data.title}</h1>
        <button className="btn-ghost min-h-[40px] shrink-0 px-3 text-sm" onClick={toggleDownload} disabled={downloading || (offline && !pinned)} aria-pressed={pinned}>
          {downloading ? '…' : pinned ? '✅ Hors ligne' : '📥 Télécharger'}
        </button>
      </div>
      <OfflineNote show={offline} />
      {!data.validatedAt && (
        <p className="mb-3 rounded-xl bg-brand-soft px-3 py-2 text-sm">
          ⚠️ Contenu en attente de relecture par un enseignant. Signale-nous toute erreur à ton professeur.
        </p>
      )}
      {data.officialRef && <p className="mb-2 text-xs text-muted">📚 {data.officialRef}</p>}
      <div className="mb-4">
        <ProgressBar value={percent} label="Progression du chapitre" />
      </div>

      <div className="sticky top-[57px] z-10 -mx-4 mb-4 overflow-x-auto bg-bg px-4 py-2" role="tablist">
        <div className="flex gap-2">
          {TABS.map((t) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={tab === t.key}
              onClick={() => setParams({ onglet: t.key }, { replace: true })}
              className={`chip shrink-0 px-4 py-2 text-sm ${tab === t.key ? 'bg-brand-strong text-on-brand' : 'bg-surface border border-line'}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {tab === 'cours' && (
        <article className="card">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-muted">⏱ ~{data.estimatedMinutes} min</p>
            <SpeakButton markdown={data.courseMd} />
          </div>
          {data.objectives.length > 0 && (
            <div className="mb-4 rounded-xl bg-sunken p-3">
              <p className="font-bold">🎯 Objectifs</p>
              <ul className="list-disc pl-5 text-sm">
                {data.objectives.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>
          )}
          <Md src={data.courseMd} />
          <button className={`mt-6 w-full ${progress?.courseDone ? 'btn-ghost' : 'btn-ok'}`} onClick={() => (markStep('courseDone'), setParams({ onglet: 'fiche' }))}>
            {progress?.courseDone ? 'Cours lu ✓ — aller à la fiche' : 'J’ai lu le cours ✓'}
          </button>
        </article>
      )}

      {tab === 'fiche' && (
        <article className="card">
          <div className="mb-2 flex items-center justify-between gap-2">
            <h2 className="text-lg font-extrabold">Fiche de révision</h2>
            <SpeakButton markdown={data.summaryMd} />
          </div>
          <Md src={data.summaryMd} />
          <button className={`mt-6 w-full ${progress?.summaryDone ? 'btn-ghost' : 'btn-ok'}`} onClick={() => (markStep('summaryDone'), setParams({ onglet: 'quiz' }))}>
            {progress?.summaryDone ? 'Fiche lue ✓ — aux questions' : 'J’ai révisé la fiche ✓'}
          </button>
        </article>
      )}

      {tab === 'quiz' &&
        (data.questions.length ? (
          <Quiz
            chapterId={data.id}
            questions={data.questions}
            onDone={(p) => setProgress((prev) => ({ courseDone: false, summaryDone: false, examBest: null, ...prev, quizBest: Math.max(p, prev?.quizBest ?? 0) }))}
          />
        ) : (
          <p className="card text-muted">Pas encore de questions pour ce chapitre.</p>
        ))}

      {tab === 'devoir' && (exam ? <ExamTab exam={exam} examBest={progress?.examBest ?? null} next={data.next} /> : <p className="card text-muted">Pas de devoir pour ce chapitre.</p>)}
    </div>
  );
}

function ExamTab({ exam, examBest, next }: { exam: ChapterPack['assessments'][number]; examBest: number | null; next: ChapterPack['next'] }) {
  const { data: attempts } = useApi<MyAttempt[]>('/attempts');
  const [hasDraft, setHasDraft] = useState(false);
  useEffect(() => {
    void draftGet(exam.id).then((d) => setHasDraft(!!d));
  }, [exam.id]);
  const mine = attempts?.filter((a) => a.assessment.id === exam.id) ?? [];

  return (
    <div className="space-y-4">
      <div className="card">
        <h2 className="text-lg font-extrabold">{exam.title}</h2>
        <div className="my-3 grid grid-cols-3 gap-2 text-center text-sm">
          <div className="rounded-xl bg-sunken p-2">
            <p className="font-extrabold">{exam.durationMin >= 60 ? `${exam.durationMin / 60} h` : `${exam.durationMin} min`}</p>
            <p className="text-muted">Durée</p>
          </div>
          <div className="rounded-xl bg-sunken p-2">
            <p className="font-extrabold">/{exam.totalPoints}</p>
            <p className="text-muted">Barème</p>
          </div>
          <div className="rounded-xl bg-sunken p-2">
            <p className="font-extrabold">{exam._count.items}</p>
            <p className="text-muted">Questions</p>
          </div>
        </div>
        <Md src={exam.instructions} className="text-sm" />
        {exam.blocksNext && (
          <p className="mt-3 rounded-xl bg-brand-soft px-3 py-2 text-sm">
            🔐 Obtiens au moins <strong>{exam.passMark}/20</strong> pour débloquer {next ? `« ${next.title} »` : 'le chapitre suivant'}.
          </p>
        )}
        {mine.length > 0 && <p className="mt-3 text-sm text-muted">ℹ️ Seule ta première copie compte dans ta moyenne. Les suivantes sont de l’entraînement.</p>}
        <Link to={`/devoir/${exam.id}`} className="btn-primary mt-4 w-full">
          {hasDraft ? '⏱ Reprendre mon devoir en cours' : mine.length ? 'Repasser le devoir (entraînement)' : 'Commencer le devoir'}
        </Link>
      </div>

      {examBest !== null && next && examBest >= exam.passMark && (
        <Link to={`/chapitres/${next.id}`} className="card block border-2 border-ok">
          🎉 Chapitre suivant débloqué : <strong>{next.title}</strong> →
        </Link>
      )}

      {mine.length > 0 && (
        <section className="card">
          <h3 className="mb-2 font-extrabold">Mes copies</h3>
          <ul className="divide-y divide-line">
            {mine.map((a) => (
              <li key={a.id}>
                <Link to={`/resultats/${a.id}`} className="flex items-center justify-between py-3">
                  <span>
                    {fmtDate(a.submittedAt)} <span className="text-xs text-muted">{a.isOfficial ? '· officielle' : '· entraînement'}</span>
                  </span>
                  <span className={`font-extrabold ${scoreTone(a.finalScore ?? a.autoScore)}`}>
                    {a.status === 'GRADED' ? `${fmtScore(a.finalScore)}/20` : `⏳ ${fmtScore(a.autoScore)} provisoire`}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
