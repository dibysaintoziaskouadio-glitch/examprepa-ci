import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthImage, ErrorBox, errorMessage, Spinner } from '../../components/ui';
import { api } from '../../lib/api';
import { useApi } from '../../lib/hooks';
import { Md } from '../../lib/markdown';
import type { AiGradeSuggestion, AttemptDetail } from '../../lib/types';
import { fmtDuration, fmtScore } from '../../lib/util';
import { studentAnswerText } from '../Result';

const QUICK_COMMENTS = ['Bonne démarche 👍', 'Justification incomplète', 'Cite la propriété utilisée', 'Attention aux unités', 'Erreur de calcul', 'Hypothèses manquantes'];

/** Correction d'une copie : grille de barème item par item, points pré-remplis par la correction automatique. */
export function Grade() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, loading, reload } = useApi<AttemptDetail>(`/attempts/${id}`);
  const [points, setPoints] = useState<Record<number, number>>({});
  const [comments, setComments] = useState<Record<number, string>>({});
  const [general, setGeneral] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const { data: ai } = useApi<{ enabled: boolean }>('/ai/status');
  const [suggestion, setSuggestion] = useState<AiGradeSuggestion | null>(null);
  const [aiBusy, setAiBusy] = useState(false);
  const [aiMsg, setAiMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!data) return;
    setPoints(Object.fromEntries(data.answers.map((a) => [a.id, a.awarded])));
    setComments(Object.fromEntries(data.answers.map((a) => [a.id, a.comment ?? ''])));
    setGeneral(data.teacherComment ?? '');
  }, [data]);

  const total = useMemo(() => Object.values(points).reduce((s, p) => s + (Number.isFinite(p) ? p : 0), 0), [points]);

  if (loading && !data) return <Spinner />;
  if (error && !data) return <ErrorBox error={error} onRetry={reload} />;
  if (!data) return null;

  const askAi = async () => {
    setAiBusy(true);
    setAiMsg(null);
    try {
      setSuggestion(await api<AiGradeSuggestion>(`/ai/grade/${data.id}`, { method: 'POST' }));
    } catch (e) {
      setAiMsg(errorMessage(e));
    } finally {
      setAiBusy(false);
    }
  };
  const byItem = new Map(suggestion?.items.map((s) => [s.itemId, s]));
  const applyAll = () => {
    const p = { ...points };
    const c = { ...comments };
    for (const a of data.answers) {
      const s = byItem.get(a.itemId);
      if (!s) continue;
      p[a.id] = s.suggestedPoints;
      if (!c[a.id]) c[a.id] = s.feedback;
    }
    setPoints(p);
    setComments(c);
    if (!general && suggestion?.generalComment) setGeneral(suggestion.generalComment);
  };

  const save = async () => {
    setBusy(true);
    setMsg(null);
    try {
      await api(`/grading/attempts/${data.id}`, {
        body: {
          answers: data.answers.map((a) => ({ answerId: a.id, points: points[a.id] ?? 0, comment: comments[a.id] || undefined })),
          comment: general || undefined,
        },
      });
      navigate('/prof', { replace: true });
    } catch (e) {
      setMsg(errorMessage(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-4 pb-24">
      <Link to="/prof" className="text-sm text-muted">
        ← Copies
      </Link>
      <div className="card">
        <p className="text-sm text-muted">{data.assessment.title}</p>
        <p className="text-xl font-extrabold">
          {data.user.firstName} {data.user.lastName}
        </p>
        <p className="text-xs text-muted">
          Temps : {fmtDuration(data.timeSpentS)}
          {data.late && ' · ⚠️ rendu en retard'} · note automatique {fmtScore(data.autoScore)}/20 · {data.isOfficial ? 'copie officielle' : 'entraînement'}
        </p>
      </div>

      {ai?.enabled && data.answers.some((a) => a.needsManual || a.photoUrl) && (
        <div className="card space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="font-bold">✨ Aide à la correction</p>
            <button className="btn-ghost" onClick={() => void askAi()} disabled={aiBusy}>
              {aiBusy ? 'Analyse de la copie…' : suggestion ? 'Relancer l’analyse' : 'Proposer une notation'}
            </button>
          </div>
          <p className="text-xs text-muted">L’assistant lit la copie (photos comprises) et propose des points avec une justification. Rien n’est enregistré : c’est toi qui décides.</p>
          {aiMsg && <p className="text-sm text-danger">{aiMsg}</p>}
          {suggestion && (
            <>
              {suggestion.transcription && (
                <details>
                  <summary className="cursor-pointer text-sm font-bold">Transcription de la copie manuscrite</summary>
                  <Md src={suggestion.transcription} className="mt-1 rounded-xl bg-sunken p-3 text-sm" />
                </details>
              )}
              {suggestion.generalComment && <p className="text-sm">💬 {suggestion.generalComment}</p>}
              <button className="btn-primary" onClick={applyAll}>
                Appliquer toutes les suggestions
              </button>
            </>
          )}
        </div>
      )}

      {data.answers.map((a) => (
        <div key={a.id} className={`card ${a.needsManual ? 'border-2 border-brand' : ''}`}>
          <div className="mb-1 flex items-start justify-between gap-2">
            <div>
              <p className="text-xs font-bold text-brand-strong">{a.section}</p>
              <Md src={a.prompt} className="font-semibold" />
            </div>
            {a.needsManual && <span className="chip shrink-0 bg-brand-soft text-brand-strong">à corriger</span>}
          </div>
          <div className="rounded-xl bg-sunken p-3 text-sm">
            <Md src={studentAnswerText(a)} />
            {a.response?.work && <p className="mt-1 whitespace-pre-wrap">{a.response.work}</p>}
            {a.photoUrl && (
              <div className="mt-2">
                <AuthImage name={a.photoUrl} alt={`Copie de ${data.user.firstName}`} />
              </div>
            )}
            {a.type !== 'OPEN' && (
              <p className="mt-2 text-xs">
                {a.isCorrect ? '✅ Résultat juste' : '❌ Résultat faux'} (auto : {fmtScore(a.autoPoints)} pt)
              </p>
            )}
          </div>
          <details className="mt-2">
            <summary className="cursor-pointer text-sm font-bold">Barème et corrigé</summary>
            <Md src={a.correction} className="mt-1 text-sm" />
          </details>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <label className="text-sm font-bold" htmlFor={`p${a.id}`}>
              Points
            </label>
            <input
              id={`p${a.id}`}
              type="number"
              min={0}
              max={a.points}
              step={0.25}
              className="input w-24"
              value={points[a.id] ?? 0}
              onChange={(e) => setPoints({ ...points, [a.id]: Math.min(a.points, Math.max(0, Number(e.target.value))) })}
            />
            <span className="text-sm text-muted">/ {fmtScore(a.points)}</span>
            <button className="chip bg-ok-soft text-ok" onClick={() => setPoints({ ...points, [a.id]: a.points })}>
              Tout
            </button>
            <button className="chip bg-sunken" onClick={() => setPoints({ ...points, [a.id]: 0 })}>
              0
            </button>
          </div>
          {byItem.get(a.itemId) && (
            <div className="mt-2 rounded-xl border border-dashed border-brand px-3 py-2 text-sm">
              <p>
                ✨ Suggestion : <strong>{fmtScore(byItem.get(a.itemId)!.suggestedPoints)}</strong> / {fmtScore(a.points)}
                <span className="text-xs text-muted"> · confiance {({ low: 'faible', medium: 'moyenne', high: 'élevée' } as const)[byItem.get(a.itemId)!.confidence]}</span>
              </p>
              <p className="text-muted">{byItem.get(a.itemId)!.rationale}</p>
              <button
                className="chip mt-1 bg-brand-soft text-brand-strong"
                onClick={() => {
                  const sug = byItem.get(a.itemId)!;
                  setPoints({ ...points, [a.id]: sug.suggestedPoints });
                  if (!comments[a.id]) setComments({ ...comments, [a.id]: sug.feedback });
                }}
              >
                Appliquer
              </button>
            </div>
          )}
          <input
            className="input mt-2"
            placeholder="Commentaire pour l’élève (facultatif)"
            value={comments[a.id] ?? ''}
            onChange={(e) => setComments({ ...comments, [a.id]: e.target.value })}
            list="quick-comments"
            aria-label="Commentaire"
          />
        </div>
      ))}
      <datalist id="quick-comments">
        {QUICK_COMMENTS.map((c) => (
          <option key={c} value={c} />
        ))}
      </datalist>

      <div className="card">
        <label className="label" htmlFor="general">
          Appréciation générale
        </label>
        <textarea id="general" className="input min-h-[96px] py-2" value={general} onChange={(e) => setGeneral(e.target.value)} placeholder="Ex. Bon travail, soigne la rédaction des hypothèses." />
      </div>

      <div className="fixed inset-x-0 bottom-[60px] z-20 border-t border-line bg-surface px-4 py-3">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">
          <p className="text-xl font-extrabold">
            {fmtScore(Math.round(total * 100) / 100)}
            <span className="text-muted">/20</span>
          </p>
          {msg && <p className="text-sm text-danger">{msg}</p>}
          <button className="btn-ok" onClick={save} disabled={busy}>
            {busy ? 'Enregistrement…' : data.status === 'GRADED' ? 'Mettre à jour la note' : 'Valider la correction'}
          </button>
        </div>
      </div>
    </div>
  );
}
