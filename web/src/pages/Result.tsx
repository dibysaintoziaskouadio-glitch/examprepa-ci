import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthImage, ErrorBox, Spinner } from '../components/ui';
import { OfflineError } from '../lib/api';
import { useApi } from '../lib/hooks';
import { Md } from '../lib/markdown';
import { isQueued } from '../lib/sync';
import type { AttemptAnswer, AttemptDetail } from '../lib/types';
import { fmtDuration, fmtScore, scoreTone } from '../lib/util';

export function Result() {
  const { id } = useParams();
  const { data, error, loading, reload } = useApi<AttemptDetail>(`/attempts/${id}`);
  const [queued, setQueued] = useState(false);
  useEffect(() => {
    void isQueued((e) => (e.body as { id?: string })?.id === id).then(setQueued);
  }, [id, error]);

  if (loading && !data) return <Spinner />;
  if (!data && queued) {
    return (
      <div className="card mt-6 text-center">
        <p className="text-4xl">⏳</p>
        <p className="font-bold">Copie en attente d’envoi</p>
        <p className="text-sm text-muted">Elle partira dès que ton téléphone retrouvera le réseau.</p>
      </div>
    );
  }
  if (error && !data) return <ErrorBox error={error} onRetry={error instanceof OfflineError ? undefined : reload} />;
  if (!data) return null;

  const graded = data.status === 'GRADED';
  const sections = [...new Set(data.answers.map((a) => a.section))];

  return <ResultView data={data} graded={graded} sections={sections} />;
}

export function ResultView({ data, graded, sections }: { data: AttemptDetail; graded: boolean; sections: string[] }) {
  return (
    <div className="space-y-4">
      {data.assessment.chapter && (
        <Link to={`/chapitres/${data.assessment.chapter.id}?onglet=devoir`} className="text-sm text-muted">
          ← {data.assessment.chapter.title}
        </Link>
      )}
      <div className="card text-center">
        <p className="text-sm text-muted">{data.assessment.title}</p>
        <p className={`text-5xl font-extrabold ${scoreTone(data.score, data.assessment.totalPoints)}`}>
          {fmtScore(data.score)}
          <span className="text-2xl text-muted">/{data.assessment.totalPoints}</span>
        </p>
        {graded ? (
          <p className="mt-1 font-bold">{data.appreciation}</p>
        ) : (
          <p className="mt-1 rounded-xl bg-brand-soft px-3 py-2 text-sm">
            ⏳ <strong>Note provisoire</strong> (QCM et résultats corrigés automatiquement). Ton enseignant doit corriger les parties rédigées.
          </p>
        )}
        <p className="mt-2 text-xs text-muted">
          Temps passé : {fmtDuration(data.timeSpentS)}
          {data.late && ' · rendu en retard'} · {data.isOfficial ? 'copie officielle' : 'entraînement'}
        </p>
        {data.gradedBy && (
          <p className="text-xs text-muted">
            Corrigé par {data.gradedBy.firstName} {data.gradedBy.lastName}
          </p>
        )}
      </div>

      {data.teacherComment && (
        <div className="card border-2 border-ok">
          <p className="font-bold">💬 Mot de ton enseignant</p>
          <p>{data.teacherComment}</p>
        </div>
      )}

      {graded && data.assessment.blocksNext && data.nextChapter && (
        <div className={`card ${data.passed ? 'border-2 border-ok' : 'border-2 border-danger'}`}>
          {data.passed ? (
            <Link to={`/chapitres/${data.nextChapter.id}`}>
              🎉 Tu as débloqué <strong>{data.nextChapter.title}</strong> →
            </Link>
          ) : (
            <p>
              🔒 Il faut au moins {data.assessment.passMark}/20 pour débloquer <strong>{data.nextChapter.title}</strong>. Relis la fiche et retente le devoir !
            </p>
          )}
        </div>
      )}

      <h2 className="text-xl font-extrabold">Corrigé détaillé</h2>
      {sections.map((s) => (
        <section key={s} className="space-y-3">
          <h3 className="font-extrabold text-brand-strong">{s}</h3>
          {data.answers
            .filter((a) => a.section === s)
            .map((a) => (
              <AnswerCard key={a.id} a={a} graded={graded} />
            ))}
        </section>
      ))}

      {data.assessment.advice && (
        <div className="card bg-sunken">
          <Md src={data.assessment.advice} />
        </div>
      )}
    </div>
  );
}

export function studentAnswerText(a: AttemptAnswer) {
  const r = a.response ?? {};
  if (a.type === 'MCQ') return typeof r.choice === 'number' ? `${String.fromCharCode(97 + r.choice)}) ${a.choices[r.choice]}` : '— pas de réponse —';
  if (a.type === 'NUMERIC') return r.value ? r.value : '— pas de réponse —';
  return r.text?.trim() ? r.text : '— pas de réponse —';
}

function AnswerCard({ a, graded }: { a: AttemptAnswer; graded: boolean }) {
  const pending = !graded && a.needsManual;
  const full = a.awarded >= a.points;
  return (
    <div className="card">
      <div className="mb-2 flex items-start justify-between gap-3">
        <Md src={a.prompt} className="font-semibold" />
        <span className={`chip shrink-0 ${pending ? 'bg-sunken text-muted' : full ? 'bg-ok-soft text-ok' : a.awarded > 0 ? 'bg-brand-soft text-brand-strong' : 'bg-danger-soft text-danger'}`}>
          {pending ? '⏳' : fmtScore(a.awarded)}/{fmtScore(a.points)}
        </span>
      </div>
      <div className="rounded-xl bg-sunken p-3 text-sm">
        <p className="font-bold">Ta réponse</p>
        <Md src={studentAnswerText(a)} />
        {a.response?.work && <p className="mt-1 whitespace-pre-wrap text-muted">{a.response.work}</p>}
        {a.photoUrl && (
          <div className="mt-2">
            <AuthImage name={a.photoUrl} alt="Photo de ta copie" />
          </div>
        )}
      </div>
      {a.type === 'MCQ' && a.expected.index !== undefined && (
        <p className="mt-2 text-sm">
          ✅ Bonne réponse : <Md src={`${String.fromCharCode(97 + a.expected.index)}) ${a.choices[a.expected.index]}`} inline />
        </p>
      )}
      {a.type === 'NUMERIC' && (
        <p className="mt-2 text-sm">
          {a.isCorrect ? '✅' : '❌'} Résultat attendu : <strong>{String(a.expected.value).replace('.', ',')}</strong>
        </p>
      )}
      {a.comment && <p className="mt-2 rounded-xl bg-ok-soft p-2 text-sm">💬 {a.comment}</p>}
      <details className="mt-2">
        <summary className="cursor-pointer text-sm font-bold text-brand-strong">Voir le corrigé et le barème</summary>
        <Md src={a.correction} className="mt-2 text-sm" />
      </details>
    </div>
  );
}
