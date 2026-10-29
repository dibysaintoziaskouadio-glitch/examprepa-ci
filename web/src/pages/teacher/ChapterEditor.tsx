import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ErrorBox, errorMessage, Spinner } from '../../components/ui';
import { api } from '../../lib/api';
import { useApi } from '../../lib/hooks';
import { Md } from '../../lib/markdown';
import type { ItemType, Question } from '../../lib/types';
import { parseNumber } from '../../lib/util';
import { STATUS_LABEL } from './Content';

interface EditorChapter {
  id: number;
  title: string;
  status: keyof typeof STATUS_LABEL;
  objectives: string[];
  estimatedMinutes: number;
  courseMd: string;
  summaryMd: string;
  version: number;
  validatedAt: string | null;
  subject: { name: string };
  questions: Question[];
  assessments: { id: number; title: string; blocksNext: boolean; passMark: number; items: unknown[] }[];
}

const HELP = 'Markdown : **gras**, ## Titre, - liste, > encadré. Formules : $\\dfrac{AM}{AB}$ ou $$…$$ pour une formule centrée.';

export function ChapterEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, loading, reload } = useApi<EditorChapter>(`/content/chapters/${id}`);
  const [form, setForm] = useState<Pick<EditorChapter, 'title' | 'status' | 'courseMd' | 'summaryMd' | 'estimatedMinutes'> & { objectives: string } | null>(null);
  const [preview, setPreview] = useState<'courseMd' | 'summaryMd' | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (data)
      setForm({
        title: data.title,
        status: data.status,
        courseMd: data.courseMd,
        summaryMd: data.summaryMd,
        estimatedMinutes: data.estimatedMinutes,
        objectives: data.objectives.join('\n'),
      });
  }, [data]);

  if (loading && !data) return <Spinner />;
  if (error && !data) return <ErrorBox error={error} onRetry={reload} />;
  if (!data || !form) return null;

  const save = async () => {
    setSaving(true);
    setMsg(null);
    try {
      await api(`/content/chapters/${data.id}`, {
        method: 'PATCH',
        body: { ...form, objectives: form.objectives.split('\n').map((o) => o.trim()).filter(Boolean) },
      });
      setMsg('✅ Enregistré. Les élèves qui ont téléchargé ce chapitre verront « mise à jour disponible ».');
      void reload();
    } catch (e) {
      setMsg(errorMessage(e));
    } finally {
      setSaving(false);
    }
  };

  const remove = async () => {
    if (!confirm('Supprimer ce chapitre et toutes ses questions ?')) return;
    try {
      await api(`/content/chapters/${data.id}`, { method: 'DELETE' });
      navigate('/prof/contenu', { replace: true });
    } catch (e) {
      setMsg(errorMessage(e));
    }
  };

  return (
    <div className="space-y-4">
      <Link to="/prof/contenu" className="text-sm text-muted">
        ← Contenus
      </Link>
      <div className="card space-y-3">
        <p className="text-sm text-muted">
          {data.subject.name} · version {data.version}
        </p>
        <div>
          <label className="label" htmlFor="t">
            Titre
          </label>
          <input id="t" className="input" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="label" htmlFor="st">
              Statut
            </label>
            <select id="st" className="input" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as EditorChapter['status'] })}>
              {Object.entries(STATUS_LABEL).map(([k, v]) => (
                <option key={k} value={k}>
                  {v}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label" htmlFor="min">
              Durée (min)
            </label>
            <input id="min" type="number" min={5} className="input" value={form.estimatedMinutes} onChange={(e) => setForm({ ...form, estimatedMinutes: Number(e.target.value) })} />
          </div>
        </div>
        <div>
          <label className="label" htmlFor="obj">
            Objectifs (un par ligne)
          </label>
          <textarea id="obj" className="input min-h-[80px] py-2" value={form.objectives} onChange={(e) => setForm({ ...form, objectives: e.target.value })} />
        </div>
        {(['courseMd', 'summaryMd'] as const).map((field) => (
          <div key={field}>
            <div className="mb-1 flex items-center justify-between">
              <label className="label mb-0" htmlFor={field}>
                {field === 'courseMd' ? '📖 Cours' : '📝 Fiche de révision'}
              </label>
              <button className="text-sm font-bold text-brand-strong underline" onClick={() => setPreview(preview === field ? null : field)}>
                {preview === field ? 'Modifier' : 'Aperçu'}
              </button>
            </div>
            {preview === field ? (
              <div className="rounded-xl border border-line p-3">
                <Md src={form[field]} />
              </div>
            ) : (
              <textarea
                id={field}
                className="input min-h-[240px] py-2 font-mono text-sm"
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              />
            )}
          </div>
        ))}
        <p className="text-xs text-muted">{HELP}</p>
        <button className="btn-primary w-full" onClick={save} disabled={saving}>
          {saving ? 'Enregistrement…' : 'Enregistrer le chapitre'}
        </button>
        {msg && <p className="text-sm">{msg}</p>}
      </div>

      <QuestionsEditor chapterId={data.id} questions={data.questions} onChange={reload} />

      <ReviewCard chapterId={data.id} validatedAt={data.validatedAt} onChange={reload} />

      {data.assessments.map((a) => (
        <AssessmentSettings key={a.id} assessment={a} onChange={reload} />
      ))}

      <button className="btn-ghost w-full text-danger" onClick={remove}>
        Supprimer le chapitre
      </button>
    </div>
  );
}

interface QForm {
  id?: number;
  type: ItemType;
  prompt: string;
  choices: string;
  index: number;
  value: string;
  tolerance: string;
  model: string;
  keywords: string;
  explanation: string;
}

const EMPTY: QForm = { type: 'MCQ', prompt: '', choices: '', index: 0, value: '', tolerance: '0,01', model: '', keywords: '', explanation: '' };

function toForm(q: Question): QForm {
  return {
    id: q.id,
    type: q.type,
    prompt: q.prompt,
    choices: q.choices.join('\n'),
    index: q.answer.index ?? 0,
    value: q.answer.value !== undefined ? String(q.answer.value).replace('.', ',') : '',
    tolerance: String(q.answer.tolerance ?? 0.01).replace('.', ','),
    model: q.answer.model ?? '',
    keywords: (q.answer.keywords ?? []).join(', '),
    explanation: q.explanation,
  };
}

function QuestionsEditor({ chapterId, questions, onChange }: { chapterId: number; questions: Question[]; onChange: () => void }) {
  const [editing, setEditing] = useState<QForm | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  const save = async () => {
    if (!editing) return;
    setMsg(null);
    const choices = editing.choices.split('\n').map((c) => c.trim()).filter(Boolean);
    const answer =
      editing.type === 'MCQ'
        ? { index: editing.index }
        : editing.type === 'NUMERIC'
          ? { value: parseNumber(editing.value), tolerance: parseNumber(editing.tolerance) ?? 0.01 }
          : { model: editing.model, keywords: editing.keywords.split(',').map((k) => k.trim()).filter(Boolean) };
    const body = { type: editing.type, prompt: editing.prompt, choices, answer, explanation: editing.explanation };
    try {
      if (editing.id) await api(`/content/questions/${editing.id}`, { method: 'PUT', body });
      else await api(`/content/chapters/${chapterId}/questions`, { body });
      setEditing(null);
      onChange();
    } catch (e) {
      setMsg(errorMessage(e));
    }
  };

  const remove = async (id: number) => {
    if (!confirm('Supprimer cette question ?')) return;
    await api(`/content/questions/${id}`, { method: 'DELETE' }).catch((e) => setMsg(errorMessage(e)));
    onChange();
  };

  return (
    <section className="card">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="font-extrabold">❓ Questions de cours ({questions.length})</h2>
        <button className="btn-ghost min-h-[40px] text-sm" onClick={() => setEditing({ ...EMPTY })}>
          ➕ Ajouter
        </button>
      </div>
      <ol className="divide-y divide-line">
        {questions.map((q, i) => (
          <li key={q.id} className="flex items-start justify-between gap-2 py-2 text-sm">
            <span className="min-w-0">
              <span className="chip mr-1 bg-sunken">{q.type}</span>
              {i + 1}. <Md src={q.prompt} inline />
            </span>
            <span className="flex shrink-0 gap-2">
              <button className="font-bold text-brand-strong underline" onClick={() => setEditing(toForm(q))}>
                Modifier
              </button>
              <button className="text-danger underline" onClick={() => void remove(q.id)}>
                Suppr.
              </button>
            </span>
          </li>
        ))}
      </ol>

      {editing && (
        <div className="mt-3 space-y-2 rounded-xl border-2 border-brand p-3">
          <select className="input" value={editing.type} onChange={(e) => setEditing({ ...editing, type: e.target.value as ItemType })} aria-label="Type">
            <option value="MCQ">QCM</option>
            <option value="NUMERIC">Réponse numérique</option>
            <option value="OPEN">Question ouverte (auto-évaluée)</option>
          </select>
          <textarea className="input min-h-[80px] py-2" placeholder="Énoncé (Markdown + formules)" value={editing.prompt} onChange={(e) => setEditing({ ...editing, prompt: e.target.value })} aria-label="Énoncé" />
          {editing.type === 'MCQ' && (
            <>
              <textarea className="input min-h-[80px] py-2" placeholder="Un choix par ligne" value={editing.choices} onChange={(e) => setEditing({ ...editing, choices: e.target.value })} aria-label="Choix" />
              <label className="label" htmlFor="good">
                Bonne réponse
              </label>
              <select id="good" className="input" value={editing.index} onChange={(e) => setEditing({ ...editing, index: Number(e.target.value) })}>
                {editing.choices
                  .split('\n')
                  .filter((c) => c.trim())
                  .map((c, i) => (
                    <option key={i} value={i}>
                      {String.fromCharCode(97 + i)}) {c}
                    </option>
                  ))}
              </select>
            </>
          )}
          {editing.type === 'NUMERIC' && (
            <div className="grid grid-cols-2 gap-2">
              <input className="input" placeholder="Valeur attendue" value={editing.value} onChange={(e) => setEditing({ ...editing, value: e.target.value })} aria-label="Valeur attendue" />
              <input className="input" placeholder="Tolérance" value={editing.tolerance} onChange={(e) => setEditing({ ...editing, tolerance: e.target.value })} aria-label="Tolérance" />
            </div>
          )}
          {editing.type === 'OPEN' && (
            <>
              <textarea className="input min-h-[80px] py-2" placeholder="Corrigé type" value={editing.model} onChange={(e) => setEditing({ ...editing, model: e.target.value })} aria-label="Corrigé type" />
              <input className="input" placeholder="Mots-clés attendus (séparés par des virgules)" value={editing.keywords} onChange={(e) => setEditing({ ...editing, keywords: e.target.value })} aria-label="Mots-clés" />
            </>
          )}
          <textarea className="input min-h-[60px] py-2" placeholder="Explication affichée après la réponse" value={editing.explanation} onChange={(e) => setEditing({ ...editing, explanation: e.target.value })} aria-label="Explication" />
          <div className="grid grid-cols-2 gap-2">
            <button className="btn-ghost" onClick={() => setEditing(null)}>
              Annuler
            </button>
            <button className="btn-primary" onClick={save}>
              Enregistrer
            </button>
          </div>
        </div>
      )}
      {msg && <p className="mt-2 text-sm text-danger">{msg}</p>}
    </section>
  );
}

function ReviewCard({ chapterId, validatedAt, onChange }: { chapterId: number; validatedAt: string | null; onChange: () => void }) {
  const [busy, setBusy] = useState(false);
  const toggle = async () => {
    setBusy(true);
    try {
      await api(`/content/chapters/${chapterId}/validate`, { body: { validated: !validatedAt } });
      onChange();
    } finally {
      setBusy(false);
    }
  };
  return (
    <section className={`card ${validatedAt ? 'border-2 border-ok' : 'border-2 border-brand'}`}>
      <h2 className="font-extrabold">🔎 Relecture pédagogique</h2>
      <p className="my-2 text-sm">
        {validatedAt
          ? `Contenu validé le ${new Date(validatedAt).toLocaleDateString('fr-FR')}. Les élèves ne voient plus l’avertissement.`
          : 'Ce chapitre n’a pas encore été relu. Vérifie le cours, les questions et le corrigé du devoir, puis valide-le.'}
      </p>
      <button className={validatedAt ? 'btn-ghost w-full' : 'btn-ok w-full'} onClick={toggle} disabled={busy}>
        {validatedAt ? 'Retirer la validation' : '✔ J’ai relu ce chapitre : le valider'}
      </button>
    </section>
  );
}

function AssessmentSettings({
  assessment,
  onChange,
}: {
  assessment: { id: number; title: string; blocksNext: boolean; passMark: number; items: unknown[] };
  onChange: () => void;
}) {
  const [msg, setMsg] = useState<string | null>(null);
  const save = async (body: { blocksNext?: boolean; passMark?: number }) => {
    setMsg(null);
    try {
      await api(`/content/assessments/${assessment.id}`, { method: 'PATCH', body });
      onChange();
    } catch (e) {
      setMsg(errorMessage(e));
    }
  };
  return (
    <section className="card space-y-2">
      <h2 className="font-extrabold">🧪 {assessment.title}</h2>
      <p className="text-sm text-muted">{assessment.items.length} questions · barème sur 20</p>
      <label className="flex items-start gap-2 text-sm">
        <input
          type="checkbox"
          className="mt-1 h-5 w-5 accent-[var(--brand-strong)]"
          checked={assessment.blocksNext}
          onChange={(e) => void save({ blocksNext: e.target.checked })}
        />
        <span>Bloquer le chapitre suivant tant que l’élève n’a pas obtenu la note minimale à ce devoir.</span>
      </label>
      <label className="flex items-center gap-2 text-sm">
        Note minimale :
        <input
          type="number"
          min={0}
          max={20}
          step={0.5}
          className="input w-24"
          defaultValue={assessment.passMark}
          onBlur={(e) => Number(e.target.value) !== assessment.passMark && void save({ passMark: Number(e.target.value) })}
        />
        / 20
      </label>
      {msg && <p className="text-sm text-danger">{msg}</p>}
    </section>
  );
}
