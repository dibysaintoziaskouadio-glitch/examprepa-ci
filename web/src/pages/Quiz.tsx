import confetti from 'canvas-confetti';
import { useMemo, useState } from 'react';
import { Md } from '../lib/markdown';
import { sendOrQueue } from '../lib/sync';
import type { Question } from '../lib/types';
import { parseNumber, uuid } from '../lib/util';

type Verdict = boolean | null;

function check(q: Question, choice: number | null, value: string): Verdict {
  if (q.type === 'MCQ') return choice === q.answer.index;
  if (q.type === 'NUMERIC') {
    const v = parseNumber(value);
    return v !== null && Math.abs(v - (q.answer.value ?? NaN)) <= (q.answer.tolerance ?? 0.01);
  }
  return null; // question ouverte : l'élève s'auto-évalue
}

/**
 * Questions de cours : correction immédiate, entièrement sur le téléphone (fonctionne hors ligne).
 * Le score est ensuite envoyé au serveur, ou mis en file d'attente.
 */
export function Quiz({ chapterId, questions, onDone }: { chapterId: number; questions: Question[]; onDone: (percent: number) => void }) {
  const [order, setOrder] = useState(() => questions.map((_, i) => i));
  const [pos, setPos] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [value, setValue] = useState('');
  const [text, setText] = useState('');
  const [verdict, setVerdict] = useState<Verdict | 'pending'>('pending');
  const [results, setResults] = useState<Record<number, boolean>>({});
  const [finished, setFinished] = useState(false);
  const [saved, setSaved] = useState<'sent' | 'queued' | null>(null);

  const qIndex = order[pos];
  const q = questions[qIndex];
  const correctCount = useMemo(() => Object.values(results).filter(Boolean).length, [results]);

  const reset = () => {
    setChoice(null);
    setValue('');
    setText('');
    setVerdict('pending');
  };

  const validate = () => setVerdict(check(q, choice, value));

  const record = (ok: boolean) => {
    const next = { ...results, [qIndex]: ok };
    setResults(next);
    if (pos + 1 < order.length) {
      setPos(pos + 1);
      reset();
      return;
    }
    void finish(next);
  };

  const finish = async (final: Record<number, boolean>) => {
    setFinished(true);
    const score = Object.values(final).filter(Boolean).length;
    const total = questions.length;
    const percent = Math.round((score / total) * 100);
    if (percent >= 80 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      void confetti({ particleCount: 120, spread: 70, origin: { y: 0.7 }, colors: ['#FF6B00', '#FFFFFF', '#00A651'] });
    }
    // Seul un passage complet (toutes les questions) est enregistré comme score du quiz.
    if (order.length === questions.length) {
      try {
        const res = await sendOrQueue('/progress/quiz', { id: uuid(), chapterId, score, total }, 'Résultat du quiz');
        setSaved(res.sent ? 'sent' : 'queued');
      } catch {
        setSaved(null);
      }
      onDone(percent);
    }
  };

  const retryMistakes = () => {
    const wrong = order.filter((i) => !results[i]);
    setOrder(wrong);
    setPos(0);
    setFinished(false);
    setSaved(null);
    reset();
  };

  const restart = () => {
    setOrder(questions.map((_, i) => i));
    setResults({});
    setPos(0);
    setFinished(false);
    setSaved(null);
    reset();
  };

  if (finished) {
    const score = order.length === questions.length ? correctCount : order.filter((i) => results[i]).length;
    const total = order.length;
    const percent = Math.round((score / total) * 100);
    return (
      <div className="card text-center">
        <p className="text-5xl" aria-hidden>
          {percent >= 80 ? '🎉' : percent >= 50 ? '👍' : '💪'}
        </p>
        <p className="mt-2 text-3xl font-extrabold">
          {score} / {total}
        </p>
        <p className="text-muted">
          {percent >= 80 ? 'Excellent ! Tu peux passer au devoir.' : percent >= 50 ? 'Bien ! Revois les erreurs avant le devoir.' : 'Relis la fiche de révision et réessaie.'}
        </p>
        {saved === 'queued' && <p className="mt-2 text-sm text-brand-strong">⏳ Résultat enregistré, il sera envoyé au retour du réseau.</p>}
        <div className="mt-4 flex flex-col gap-2">
          {score < total && (
            <button className="btn-primary" onClick={retryMistakes}>
              Refaire mes erreurs ({total - score})
            </button>
          )}
          <button className="btn-ghost" onClick={restart}>
            Recommencer tout le quiz
          </button>
        </div>
      </div>
    );
  }

  const answered = verdict !== 'pending';
  return (
    <div className="card">
      <div className="mb-3 flex items-center justify-between text-sm text-muted">
        <span>
          Question {pos + 1} / {order.length}
        </span>
        <span>✅ {correctCount}</span>
      </div>
      <div className="mb-3 h-1.5 rounded-full bg-sunken">
        <div className="h-full rounded-full bg-brand" style={{ width: `${(pos / order.length) * 100}%` }} />
      </div>
      <Md src={q.prompt} className="mb-4 text-lg font-semibold" />

      {q.type === 'MCQ' && (
        <div className="space-y-2" role="radiogroup">
          {q.choices.map((c, i) => {
            const isKey = answered && i === q.answer.index;
            const isWrongPick = answered && i === choice && i !== q.answer.index;
            return (
              <button
                key={i}
                role="radio"
                aria-checked={choice === i}
                disabled={answered}
                onClick={() => setChoice(i)}
                className={`flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left ${
                  isKey ? 'border-ok bg-ok-soft' : isWrongPick ? 'border-danger bg-danger-soft' : choice === i ? 'border-brand bg-brand-soft' : 'border-line'
                }`}
              >
                <span className="font-extrabold">{String.fromCharCode(97 + i)})</span>
                <Md src={c} inline />
              </button>
            );
          })}
        </div>
      )}

      {q.type === 'NUMERIC' && (
        <input
          className="input"
          inputMode="decimal"
          placeholder="Ta réponse (ex. 7,5)"
          value={value}
          disabled={answered}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && value && validate()}
          aria-label="Ta réponse"
        />
      )}

      {q.type === 'OPEN' && (
        <textarea className="input min-h-[120px] py-2" placeholder="Rédige ta réponse…" value={text} disabled={answered} onChange={(e) => setText(e.target.value)} aria-label="Ta réponse" />
      )}

      {!answered ? (
        <button
          className="btn-primary mt-4 w-full"
          onClick={() => (q.type === 'OPEN' ? setVerdict(null) : validate())}
          disabled={q.type === 'MCQ' ? choice === null : q.type === 'NUMERIC' ? !value.trim() : false}
        >
          {q.type === 'OPEN' ? 'Voir le corrigé' : 'Valider'}
        </button>
      ) : (
        <div className="mt-4" aria-live="polite">
          {verdict === true && <p className="font-extrabold text-ok">✅ Bonne réponse !</p>}
          {verdict === false && (
            <p className="font-extrabold text-danger">
              ❌ Pas tout à fait.{' '}
              {q.type === 'NUMERIC' && (
                <span>
                  Réponse attendue : <strong>{String(q.answer.value).replace('.', ',')}</strong>
                </span>
              )}
            </p>
          )}
          {verdict === null && q.answer.model && (
            <div className="rounded-xl bg-ok-soft p-3">
              <p className="text-sm font-bold">Corrigé type</p>
              <Md src={q.answer.model} />
              {q.answer.keywords && q.answer.keywords.length > 0 && (
                <p className="mt-1 text-sm">
                  Mots-clés attendus : <strong>{q.answer.keywords.join(' · ')}</strong>
                </p>
              )}
            </div>
          )}
          <div className="mt-2 rounded-xl bg-sunken p-3 text-sm">
            <Md src={q.explanation} />
          </div>
          {verdict === null ? (
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button className="btn-ghost" onClick={() => record(false)}>
                Pas encore 😕
              </button>
              <button className="btn-ok" onClick={() => record(true)}>
                J’avais juste 👍
              </button>
            </div>
          ) : (
            <button className="btn-primary mt-3 w-full" onClick={() => record(verdict === true)}>
              {pos + 1 < order.length ? 'Question suivante →' : 'Voir mon score'}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
