import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ErrorBox, errorMessage, Spinner, uploadPhoto } from '../components/ui';
import { draftDelete, draftGet, draftPut, type DraftEntry } from '../lib/db';
import { useApi, useOnline } from '../lib/hooks';
import { Md } from '../lib/markdown';
import { sendOrQueue } from '../lib/sync';
import type { AssessmentItem, AssessmentSubject, Response } from '../lib/types';
import { compressImage, fmtDuration, uuid } from '../lib/util';

const ALERTS = [15 * 60, 5 * 60, 60];

/**
 * Devoir chronométré. Le brouillon (réponses + heure de début) est enregistré à chaque frappe :
 * fermer l'application ou perdre le réseau ne fait rien perdre. La copie part au serveur
 * à la remise, ou est mise en file d'attente si le téléphone est hors ligne.
 */
export function Exam() {
  const { id } = useParams();
  const assessmentId = Number(id);
  const navigate = useNavigate();
  const online = useOnline();
  const { data: subject, error, loading, reload } = useApi<AssessmentSubject>(`/assessments/${assessmentId}`);
  const [draft, setDraft] = useState<DraftEntry | null>(null);
  const [draftLoaded, setDraftLoaded] = useState(false);
  const [now, setNow] = useState(Date.now());
  const [sectionIdx, setSectionIdx] = useState(0);
  const [confirming, setConfirming] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [queued, setQueued] = useState(false);
  const alerted = useRef(new Set<number>());
  const submittedRef = useRef(false);

  useEffect(() => {
    void draftGet(assessmentId).then((d) => {
      setDraft(d ?? null);
      setDraftLoaded(true);
    });
  }, [assessmentId]);

  const sections = useMemo(() => {
    const map = new Map<string, AssessmentItem[]>();
    subject?.items.forEach((it) => map.set(it.section, [...(map.get(it.section) ?? []), it]));
    return [...map.entries()];
  }, [subject]);

  const remaining = draft && subject ? Math.max(0, Math.round(subject.durationMin * 60 - (now - new Date(draft.startedAt).getTime()) / 1000)) : null;

  const submit = useCallback(
    async (auto = false) => {
      if (!draft || !subject || submittedRef.current) return;
      submittedRef.current = true;
      setSubmitting(true);
      const body = {
        id: draft.attemptId,
        assessmentId,
        startedAt: draft.startedAt,
        submittedAt: new Date().toISOString(),
        answers: Object.entries(draft.answers).map(([itemId, a]) => ({ itemId: Number(itemId), response: a.response, photoUrl: a.photoUrl })),
      };
      try {
        const res = await sendOrQueue('/attempts', body, `Devoir : ${subject.title}`);
        await draftDelete(assessmentId);
        if (res.sent) navigate(`/resultats/${draft.attemptId}`, { replace: true });
        else setQueued(true);
      } catch (e) {
        submittedRef.current = false;
        setSubmitting(false);
        setToast(`${auto ? 'Temps écoulé. ' : ''}Envoi impossible : ${errorMessage(e)}`);
      }
    },
    [assessmentId, draft, navigate, subject],
  );

  // Chronomètre, alertes de fin et remise automatique
  useEffect(() => {
    if (!draft) return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [draft]);

  useEffect(() => {
    if (remaining === null) return;
    for (const a of ALERTS) {
      if (remaining <= a && remaining > 0 && !alerted.current.has(a)) {
        alerted.current.add(a);
        setToast(`⏰ Plus que ${a >= 60 ? `${a / 60} minute${a > 60 ? 's' : ''}` : `${a} s`} !`);
        navigator.vibrate?.([200, 100, 200]);
      }
    }
    if (remaining === 0) void submit(true);
  }, [remaining, submit]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(t);
  }, [toast]);

  const start = async () => {
    const d: DraftEntry = { assessmentId, attemptId: uuid(), startedAt: new Date().toISOString(), answers: {} };
    await draftPut(d);
    alerted.current.clear();
    setDraft(d);
    setNow(Date.now());
  };

  const setAnswer = (itemId: number, patch: { response?: Response; photoUrl?: string }) => {
    setDraft((d) => {
      if (!d) return d;
      const prev = d.answers[itemId] ?? {};
      const next: DraftEntry = {
        ...d,
        answers: { ...d.answers, [itemId]: { ...prev, ...patch, response: { ...(prev.response ?? {}), ...(patch.response ?? {}) } } },
      };
      void draftPut(next);
      return next;
    });
  };

  if (queued) {
    return (
      <div className="card mt-6 text-center">
        <p className="text-5xl">📤</p>
        <p className="mt-2 text-xl font-extrabold">Copie enregistrée sur ton téléphone</p>
        <p className="text-muted">Tu es hors ligne. Elle sera envoyée automatiquement dès que tu auras du réseau, puis corrigée.</p>
        <Link to="/" className="btn-primary mt-4 w-full">
          Retour à l’accueil
        </Link>
      </div>
    );
  }
  if ((loading && !subject) || !draftLoaded) return <Spinner />;
  if (error && !subject) return <ErrorBox error={error} onRetry={reload} />;
  if (!subject) return null;

  // ── Écran d'accueil du devoir
  if (!draft) {
    return (
      <div className="card">
        <p className="text-sm text-muted">{subject.chapter?.subject.name}</p>
        <h1 className="text-2xl font-extrabold">{subject.title}</h1>
        <Md src={subject.instructions} className="my-3" />
        <ul className="mb-4 space-y-1 text-sm">
          <li>⏱ Durée : {subject.durationMin} min — le chronomètre démarre dès que tu commences.</li>
          <li>💾 Tes réponses sont enregistrées automatiquement, même hors ligne.</li>
          <li>🔔 Alertes à 15 min, 5 min et 1 min de la fin ; remise automatique à la fin du temps.</li>
          {subject.previousAttempts > 0 && <li>🔁 Tu as déjà rendu ce devoir : cette copie sera de l’entraînement.</li>}
        </ul>
        <button className="btn-primary w-full" onClick={start}>
          Commencer maintenant
        </button>
      </div>
    );
  }

  const answeredCount = subject.items.filter((it) => isAnswered(it, draft.answers[it.id])).length;
  const [sectionName, items] = sections[sectionIdx] ?? ['', []];
  const lowTime = remaining !== null && remaining <= 5 * 60;

  return (
    <div>
      <div className={`sticky top-[57px] z-10 -mx-4 mb-4 flex items-center justify-between px-4 py-2 ${lowTime ? 'bg-danger-soft' : 'bg-bg'}`}>
        <span className="font-bold">{subject.title}</span>
        <span className={`font-mono text-lg font-extrabold ${lowTime ? 'text-danger' : ''}`} role="timer" aria-live={lowTime ? 'assertive' : 'off'}>
          ⏱ {fmtDuration(remaining ?? 0)}
        </span>
      </div>

      {toast && (
        <div className="fixed inset-x-4 top-20 z-30 mx-auto max-w-md rounded-xl bg-ink px-4 py-3 text-center font-bold text-bg shadow-lg" role="alert">
          {toast}
        </div>
      )}

      <nav className="mb-4 flex gap-2 overflow-x-auto" aria-label="Exercices">
        {sections.map(([name, its], i) => {
          const done = its.every((it) => isAnswered(it, draft.answers[it.id]));
          return (
            <button
              key={name}
              onClick={() => setSectionIdx(i)}
              aria-current={i === sectionIdx}
              className={`chip shrink-0 px-3 py-2 ${i === sectionIdx ? 'bg-brand-strong text-on-brand' : done ? 'bg-ok-soft text-ok' : 'border border-line bg-surface'}`}
            >
              {done ? '✓ ' : ''}
              {name.replace(/\s*\(.*\)/, '')}
            </button>
          );
        })}
      </nav>

      <section className="space-y-4">
        <h2 className="text-lg font-extrabold">{sectionName}</h2>
        {items[0]?.sectionIntro && (
          <div className="card bg-sunken">
            <Md src={items[0].sectionIntro} />
          </div>
        )}
        {items.map((item) => (
          <ItemInput key={item.id} item={item} value={draft.answers[item.id]} onChange={(p) => setAnswer(item.id, p)} online={online} />
        ))}
      </section>

      <div className="mt-6 grid grid-cols-2 gap-2">
        <button className="btn-ghost" disabled={sectionIdx === 0} onClick={() => (setSectionIdx(sectionIdx - 1), window.scrollTo(0, 0))}>
          ◀ Précédent
        </button>
        {sectionIdx < sections.length - 1 ? (
          <button className="btn-primary" onClick={() => (setSectionIdx(sectionIdx + 1), window.scrollTo(0, 0))}>
            Suivant ▶
          </button>
        ) : (
          <button className="btn-ok" onClick={() => setConfirming(true)}>
            Rendre ma copie
          </button>
        )}
      </div>
      <button className="btn-ghost mt-2 w-full text-sm" onClick={() => setConfirming(true)}>
        Rendre maintenant ({answeredCount}/{subject.items.length} répondues)
      </button>

      {confirming && (
        <div className="fixed inset-0 z-40 flex items-end justify-center bg-black/50 p-4 sm:items-center" role="dialog" aria-modal aria-labelledby="confirm-title">
          <div className="card w-full max-w-md">
            <h2 id="confirm-title" className="text-lg font-extrabold">
              Rendre ta copie ?
            </h2>
            <p className="my-2">
              Tu as répondu à <strong>{answeredCount}</strong> question{answeredCount > 1 ? 's' : ''} sur {subject.items.length}.
            </p>
            {answeredCount < subject.items.length && <p className="text-sm text-danger">⚠️ Les questions sans réponse vaudront 0 point.</p>}
            {!online && <p className="mt-2 text-sm text-muted">📴 Hors ligne : ta copie sera envoyée dès le retour du réseau.</p>}
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button className="btn-ghost" onClick={() => setConfirming(false)} disabled={submitting}>
                Continuer
              </button>
              <button className="btn-ok" onClick={() => void submit()} disabled={submitting}>
                {submitting ? 'Envoi…' : 'Oui, rendre'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function isAnswered(item: AssessmentItem, a?: { response?: Response; photoUrl?: string }) {
  if (!a) return false;
  if (a.photoUrl) return true;
  const r = a.response ?? {};
  if (item.type === 'MCQ') return typeof r.choice === 'number';
  if (item.type === 'NUMERIC') return !!r.value?.trim();
  return !!r.text?.trim();
}

function ItemInput({
  item,
  value,
  onChange,
  online,
}: {
  item: AssessmentItem;
  value?: { response?: Response; photoUrl?: string };
  onChange: (p: { response?: Response; photoUrl?: string }) => void;
  online: boolean;
}) {
  const r = value?.response ?? {};
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const canPhoto = item.type !== 'MCQ' && item.points > item.resultPoints;

  const onPhoto = async (file?: File) => {
    if (!file) return;
    setUploading(true);
    setUploadError(null);
    try {
      onChange({ photoUrl: await uploadPhoto(await compressImage(file)) });
    } catch (e) {
      setUploadError(errorMessage(e));
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="card">
      <div className="mb-2 flex items-start justify-between gap-3">
        <Md src={item.prompt} className="font-semibold" />
        <span className="chip shrink-0 bg-sunken">
          {String(item.points).replace('.', ',')} pt{item.points > 1 ? 's' : ''}
        </span>
      </div>

      {item.type === 'MCQ' && (
        <div className="space-y-2" role="radiogroup">
          {item.choices.map((c, i) => (
            <button
              key={i}
              role="radio"
              aria-checked={r.choice === i}
              onClick={() => onChange({ response: { choice: i } })}
              className={`flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left ${r.choice === i ? 'border-brand bg-brand-soft' : 'border-line'}`}
            >
              <span className="font-extrabold">{String.fromCharCode(97 + i)})</span>
              <Md src={c} inline />
            </button>
          ))}
        </div>
      )}

      {item.type === 'NUMERIC' && (
        <div className="space-y-2">
          <label className="label" htmlFor={`v${item.id}`}>
            Résultat
          </label>
          <input id={`v${item.id}`} className="input" inputMode="decimal" placeholder="Ex. 7,5" value={r.value ?? ''} onChange={(e) => onChange({ response: { value: e.target.value } })} />
          {item.points > item.resultPoints && (
            <>
              <label className="label" htmlFor={`w${item.id}`}>
                Justification
              </label>
              <textarea
                id={`w${item.id}`}
                className="input min-h-[96px] py-2"
                placeholder="Écris ta démarche (propriété utilisée, calcul…)"
                value={r.work ?? ''}
                onChange={(e) => onChange({ response: { work: e.target.value } })}
              />
            </>
          )}
        </div>
      )}

      {item.type === 'OPEN' && (
        <textarea className="input min-h-[140px] py-2" placeholder="Rédige ta réponse…" value={r.text ?? ''} onChange={(e) => onChange({ response: { text: e.target.value } })} aria-label="Ta réponse" />
      )}

      {canPhoto && (
        <div className="mt-2">
          {value?.photoUrl ? (
            <p className="text-sm text-ok">📷 Photo de copie jointe ✓</p>
          ) : online ? (
            <label className="btn-ghost min-h-[40px] cursor-pointer text-sm">
              {uploading ? 'Envoi de la photo…' : '📷 Joindre une photo de ma copie'}
              <input type="file" accept="image/*" capture="environment" className="sr-only" onChange={(e) => void onPhoto(e.target.files?.[0])} disabled={uploading} />
            </label>
          ) : (
            <p className="text-xs text-muted">📷 L’ajout de photo nécessite une connexion.</p>
          )}
          {uploadError && <p className="text-sm text-danger">{uploadError}</p>}
        </div>
      )}
    </div>
  );
}
