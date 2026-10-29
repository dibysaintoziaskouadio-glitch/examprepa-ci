import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Empty, ErrorBox, errorMessage, PageTitle, Spinner } from '../../components/ui';
import { api } from '../../lib/api';
import { useApi } from '../../lib/hooks';
import { Md } from '../../lib/markdown';
import type { AuthoringAssessment, AuthoringItem, ClassSummary, Exam, ItemType, SubjectSummary } from '../../lib/types';
import { fmtDate, fmtScore } from '../../lib/util';

type Kind = 'CLASS_ASSIGNMENT' | 'MOCK_EXAM' | 'PAST_PAPER';
const KIND: Record<string, string> = { CLASS_ASSIGNMENT: 'Devoir de classe', MOCK_EXAM: 'Examen blanc', PAST_PAPER: 'Annale', CHAPTER_EXAM: 'Devoir de chapitre' };

/** Liste des devoirs créés hors chapitres : devoirs de classe, examens blancs, annales. */
export function AssessmentList() {
  const [type, setType] = useState('');
  const { data, error, loading, reload } = useApi<AuthoringAssessment[]>(`/content/assessments${type ? `?type=${type}` : ''}`);
  const { data: exams } = useApi<Exam[]>('/exams');
  const [examId, setExamId] = useState<number | ''>('');
  const { data: subjects } = useApi<SubjectSummary[]>(examId ? `/subjects?examId=${examId}` : null);
  const [subjectId, setSubjectId] = useState<number | ''>('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const navigate = useNavigate();

  const generate = async () => {
    setBusy(true);
    setMsg(null);
    try {
      const a = await api<{ id: number }>('/content/mock-exams', { body: { subjectId, examId } });
      navigate(`/prof/devoirs/${a.id}`);
    } catch (e) {
      setMsg(errorMessage(e));
      setBusy(false);
    }
  };

  return (
    <div className="space-y-4">
      <PageTitle sub="Devoirs de classe, examens blancs et annales.">Devoirs</PageTitle>
      <div className="flex flex-wrap gap-2">
        <Link to="/prof/devoirs/nouveau" className="btn-primary">
          + Nouveau devoir
        </Link>
        <Link to="/prof/stats" className="btn-ghost">
          📊 Statistiques
        </Link>
      </div>

      <details className="card">
        <summary className="cursor-pointer font-bold">✨ Générer un examen blanc automatiquement</summary>
        <p className="mt-2 text-sm text-muted">Assemble 2 à 4 exercices complets de chapitres différents, pour un total de 20 points. Tu pourras le relire et le modifier avant de le publier.</p>
        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          <select className="input" value={examId} onChange={(e) => (setExamId(e.target.value ? Number(e.target.value) : ''), setSubjectId(''))} aria-label="Examen">
            <option value="">Examen…</option>
            {exams?.map((x) => (
              <option key={x.id} value={x.id}>
                {x.name}
              </option>
            ))}
          </select>
          <select className="input" value={subjectId} onChange={(e) => setSubjectId(e.target.value ? Number(e.target.value) : '')} aria-label="Matière" disabled={!subjects}>
            <option value="">Matière…</option>
            {subjects
              ?.filter((s) => s.chapterCount > 0)
              .map((s) => (
                <option key={s.id} value={s.id}>
                  {s.icon} {s.name}
                </option>
              ))}
          </select>
          <button className="btn-primary" disabled={busy || !subjectId} onClick={() => void generate()}>
            Générer
          </button>
        </div>
        {msg && <p className="mt-2 text-sm text-danger">{msg}</p>}
      </details>

      <div className="flex flex-wrap gap-2">
        {['', 'CLASS_ASSIGNMENT', 'MOCK_EXAM', 'PAST_PAPER'].map((k) => (
          <button key={k} className={`chip ${type === k ? 'bg-brand text-white' : 'bg-sunken'}`} aria-pressed={type === k} onClick={() => setType(k)}>
            {k ? KIND[k] : 'Tous'}
          </button>
        ))}
      </div>
      {loading && !data && <Spinner />}
      {error && !data && <ErrorBox error={error} onRetry={reload} />}
      {data && data.length === 0 && <Empty icon="🗂" title="Aucun devoir" />}
      <ul className="space-y-2">
        {data?.map((a) => (
          <li key={a.id}>
            <Link to={`/prof/devoirs/${a.id}`} className="card block">
              <div className="flex items-start justify-between gap-2">
                <p className="font-bold">
                  {a.subject?.icon} {a.title}
                </p>
                <span className={`chip shrink-0 ${a.status === 'PUBLISHED' ? 'bg-ok-soft text-ok' : 'bg-sunken text-muted'}`}>{a.status === 'PUBLISHED' ? 'publié' : 'brouillon'}</span>
              </div>
              <p className="text-sm text-muted">
                {KIND[a.type]} · {a.exam?.code} · {a._count.items} questions · {fmtScore(a.totalPoints)} pts · {a._count.attempts} copie(s)
                {a.classroom && ` · ${a.classroom.name}`}
                {a.dueAt && ` · pour le ${fmtDate(a.dueAt)}`}
                {a.year && ` · session ${a.year}`}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface Full {
  id: number;
  type: Kind;
  title: string;
  subjectId: number | null;
  examId: number | null;
  durationMin: number;
  instructions: string;
  advice: string;
  classroomId: number | null;
  dueAt: string | null;
  year: number | null;
  status: 'DRAFT' | 'PUBLISHED';
  authorId: string | null;
  items: AuthoringItem[];
}

const blankItem = (section = 'Exercice 1'): AuthoringItem => ({ section, prompt: '', type: 'NUMERIC', choices: [], answer: { value: 0 }, points: 1, resultPoints: 1, correction: '' });

export function AssessmentEditor() {
  const { id } = useParams();
  const isNew = id === 'nouveau';
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { data: existing, error, loading } = useApi<Full & { _count?: { attempts: number } }>(isNew ? null : `/content/assessments/${id}`);
  const { data: exams } = useApi<Exam[]>('/exams');
  const { data: classes } = useApi<ClassSummary[]>('/classes');
  const [form, setForm] = useState<Omit<Full, 'id' | 'authorId'>>({
    type: 'CLASS_ASSIGNMENT',
    title: '',
    subjectId: null,
    examId: null,
    durationMin: 60,
    instructions: '',
    advice: '',
    classroomId: null,
    dueAt: null,
    year: null,
    status: 'PUBLISHED',
    items: [blankItem()],
  });
  const { data: subjects } = useApi<SubjectSummary[]>(form.examId ? `/subjects?examId=${form.examId}` : null);
  const [bankOpen, setBankOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    if (existing) {
      const { _count: _c, ...rest } = existing;
      setForm({ ...rest, dueAt: existing.dueAt ? existing.dueAt.slice(0, 10) : null, items: rest.items.map((it) => ({ ...it, choices: it.choices ?? [] })) });
    } else if (isNew && params.get('classe') && classes) {
      const c = classes.find((x) => x.id === Number(params.get('classe')));
      const exam = exams?.find((x) => x.code === c?.exam.code);
      if (c) setForm((f) => ({ ...f, type: 'CLASS_ASSIGNMENT', classroomId: c.id, examId: exam?.id ?? f.examId }));
    }
  }, [existing, isNew, params, classes, exams]);

  const attempts = existing?._count?.attempts ?? 0;
  const locked = attempts > 0;
  const total = useMemo(() => Math.round(form.items.reduce((s, it) => s + (Number(it.points) || 0), 0) * 100) / 100, [form.items]);

  if (!isNew && loading && !existing) return <Spinner />;
  if (!isNew && error && !existing) return <ErrorBox error={error} />;

  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) => setForm((f) => ({ ...f, [k]: v }));
  const setItem = (i: number, patch: Partial<AuthoringItem>) => setForm((f) => ({ ...f, items: f.items.map((it, j) => (j === i ? { ...it, ...patch } : it)) }));
  const move = (i: number, d: -1 | 1) =>
    setForm((f) => {
      const items = [...f.items];
      const j = i + d;
      if (j < 0 || j >= items.length) return f;
      [items[i], items[j]] = [items[j], items[i]];
      return { ...f, items };
    });

  const save = async () => {
    setBusy(true);
    setMsg(null);
    const body = {
      ...form,
      subjectId: form.subjectId,
      examId: form.examId,
      classroomId: form.type === 'CLASS_ASSIGNMENT' ? form.classroomId : undefined,
      dueAt: form.type === 'CLASS_ASSIGNMENT' && form.dueAt ? new Date(`${form.dueAt}T23:59:00`).toISOString() : undefined,
      year: form.type === 'PAST_PAPER' ? form.year : undefined,
      items: form.items.map(({ id: _id, source: _s, ...it }) => ({
        ...it,
        sectionIntro: it.sectionIntro || undefined,
        choices: it.type === 'MCQ' ? it.choices : [],
        points: Number(it.points),
        resultPoints: it.type === 'NUMERIC' ? Number(it.resultPoints ?? it.points) : undefined,
      })),
    };
    try {
      const a = await api<{ id: number }>(isNew ? '/content/assessments' : `/content/assessments/${id}`, { method: isNew ? 'POST' : 'PUT', body });
      if (isNew) navigate(`/prof/devoirs/${a.id}`, { replace: true });
      setMsg('✔ Enregistré');
    } catch (e) {
      setMsg(errorMessage(e));
    } finally {
      setBusy(false);
    }
  };

  const remove = async () => {
    if (!confirm('Supprimer ce devoir ? S’il a déjà des copies, il sera seulement dépublié.')) return;
    try {
      await api(`/content/assessments/${id}`, { method: 'DELETE' });
      navigate('/prof/devoirs', { replace: true });
    } catch (e) {
      setMsg(errorMessage(e));
    }
  };

  const strict = form.type !== 'CLASS_ASSIGNMENT';
  return (
    <div className="space-y-4 pb-24">
      <Link to="/prof/devoirs" className="text-sm text-muted">
        ← Devoirs
      </Link>
      <PageTitle>{isNew ? 'Nouveau devoir' : form.title || 'Devoir'}</PageTitle>
      {locked && <p className="rounded-xl bg-brand-soft px-3 py-2 text-sm text-brand-strong">{attempts} copie(s) déjà rendue(s) : seuls le titre, les consignes, la durée et la date limite sont encore modifiables.</p>}

      <section className="card space-y-3">
        <div className="grid gap-2 sm:grid-cols-3">
          {(['CLASS_ASSIGNMENT', 'MOCK_EXAM', 'PAST_PAPER'] as Kind[]).map((k) => (
            <label key={k} className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2 text-sm font-bold ${form.type === k ? 'border-brand bg-brand-soft' : 'border-line'}`}>
              <input type="radio" name="kind" checked={form.type === k} onChange={() => set('type', k)} disabled={!isNew} /> {KIND[k]}
            </label>
          ))}
        </div>
        <input className="input" value={form.title} onChange={(e) => set('title', e.target.value)} placeholder="Titre (ex. Devoir maison n° 3 — Thalès)" maxLength={160} aria-label="Titre" />
        <div className="grid gap-2 sm:grid-cols-2">
          <select className="input" value={form.examId ?? ''} disabled={locked} onChange={(e) => setForm((f) => ({ ...f, examId: e.target.value ? Number(e.target.value) : null, subjectId: null }))} aria-label="Examen">
            <option value="">Examen…</option>
            {exams?.map((x) => (
              <option key={x.id} value={x.id}>
                {x.name}
              </option>
            ))}
          </select>
          <select className="input" value={form.subjectId ?? ''} disabled={locked || !subjects} onChange={(e) => set('subjectId', e.target.value ? Number(e.target.value) : null)} aria-label="Matière">
            <option value="">Matière…</option>
            {subjects?.map((s) => (
              <option key={s.id} value={s.id}>
                {s.icon} {s.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          <label className="text-sm">
            Durée (min)
            <input className="input" type="number" min={10} max={300} value={form.durationMin} onChange={(e) => set('durationMin', Number(e.target.value))} />
          </label>
          {form.type === 'CLASS_ASSIGNMENT' && (
            <>
              <label className="text-sm">
                Classe
                <select className="input" value={form.classroomId ?? ''} disabled={locked} onChange={(e) => set('classroomId', e.target.value ? Number(e.target.value) : null)}>
                  <option value="">Choisir…</option>
                  {classes
                    ?.filter((c) => !c.archived)
                    .map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                </select>
              </label>
              <label className="text-sm">
                À rendre le
                <input className="input" type="date" value={form.dueAt ?? ''} onChange={(e) => set('dueAt', e.target.value || null)} />
              </label>
            </>
          )}
          {form.type === 'PAST_PAPER' && (
            <label className="text-sm">
              Session (année)
              <input className="input" type="number" min={1990} max={2100} value={form.year ?? ''} onChange={(e) => set('year', e.target.value ? Number(e.target.value) : null)} />
            </label>
          )}
        </div>
        {form.type === 'PAST_PAPER' && <p className="text-xs text-muted">⚠️ Ne publie un sujet officiel que si sa diffusion est autorisée (DECO / MENA).</p>}
        <textarea className="input min-h-[72px] py-2" value={form.instructions} onChange={(e) => set('instructions', e.target.value)} placeholder="Consignes (Markdown, formules entre $…$)" aria-label="Consignes" />
        <textarea className="input min-h-[60px] py-2" value={form.advice} onChange={(e) => set('advice', e.target.value)} placeholder="Conseils de méthode affichés après la remise (facultatif)" aria-label="Conseils" />
        <label className="flex items-center gap-2 text-sm font-bold">
          <input type="checkbox" checked={form.status === 'PUBLISHED'} onChange={(e) => set('status', e.target.checked ? 'PUBLISHED' : 'DRAFT')} /> Publié (visible des élèves)
        </label>
      </section>

      <div className="flex items-center justify-between">
        <h2 className="font-extrabold">Questions ({form.items.length})</h2>
        <span className={`chip ${strict && total !== 20 ? 'bg-danger-soft text-danger' : 'bg-sunken'}`}>
          Total : {fmtScore(total)} pts{strict && total !== 20 ? ' (20 attendus)' : ''}
        </span>
      </div>

      {form.items.map((it, i) => (
        <ItemEditor
          key={i}
          index={i}
          item={it}
          locked={locked}
          onChange={(p) => setItem(i, p)}
          onMove={(d) => move(i, d)}
          onRemove={() => setForm((f) => ({ ...f, items: f.items.filter((_, j) => j !== i) }))}
        />
      ))}

      {!locked && (
        <div className="flex flex-wrap gap-2">
          <button className="btn-ghost" onClick={() => setForm((f) => ({ ...f, items: [...f.items, blankItem(f.items[f.items.length - 1]?.section)] }))}>
            + Question
          </button>
          <button className="btn-ghost" disabled={!form.subjectId} onClick={() => setBankOpen(!bankOpen)} title={form.subjectId ? '' : 'Choisis d’abord la matière'}>
            📚 Banque d’exercices
          </button>
        </div>
      )}
      {bankOpen && form.subjectId && (
        <Bank
          subjectId={form.subjectId}
          examId={form.examId}
          onPick={(picked) => setForm((f) => ({ ...f, items: [...f.items.filter((x) => x.prompt.trim()), ...picked] }))}
        />
      )}

      <div className="fixed inset-x-0 bottom-[60px] z-20 border-t border-line bg-surface px-4 py-3">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-2">
          {!isNew ? (
            <button className="btn-ghost text-danger" onClick={() => void remove()}>
              Supprimer
            </button>
          ) : (
            <span />
          )}
          {msg && <p className={`text-sm ${msg.startsWith('✔') ? 'text-ok' : 'text-danger'}`}>{msg}</p>}
          <button className="btn-ok" disabled={busy || !form.title.trim() || !form.subjectId || !form.examId} onClick={() => void save()}>
            {busy ? 'Enregistrement…' : 'Enregistrer'}
          </button>
        </div>
      </div>
    </div>
  );
}

function ItemEditor({
  index,
  item,
  locked,
  onChange,
  onMove,
  onRemove,
}: {
  index: number;
  item: AuthoringItem;
  locked: boolean;
  onChange: (p: Partial<AuthoringItem>) => void;
  onMove: (d: -1 | 1) => void;
  onRemove: () => void;
}) {
  const [preview, setPreview] = useState(false);
  const setType = (type: ItemType) =>
    onChange({
      type,
      answer: type === 'MCQ' ? { index: 0 } : type === 'NUMERIC' ? { value: 0 } : { model: '', keywords: [] },
      choices: type === 'MCQ' ? (item.choices.length ? item.choices : ['', '']) : [],
    });
  return (
    <fieldset className="card space-y-2" disabled={locked}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="font-extrabold">Q{index + 1}</span>
        <div className="flex gap-1">
          <button type="button" className="chip bg-sunken" onClick={() => onMove(-1)} aria-label="Monter">
            ↑
          </button>
          <button type="button" className="chip bg-sunken" onClick={() => onMove(1)} aria-label="Descendre">
            ↓
          </button>
          <button type="button" className="chip bg-sunken" onClick={() => setPreview(!preview)}>
            {preview ? 'Modifier' : 'Aperçu'}
          </button>
          <button type="button" className="chip bg-danger-soft text-danger" onClick={onRemove}>
            Retirer
          </button>
        </div>
      </div>
      {item.source && <p className="text-xs text-muted">Issu de : {item.source}</p>}
      {preview ? (
        <div className="rounded-xl bg-sunken p-3">
          <p className="text-xs font-bold text-brand-strong">{item.section}</p>
          {item.sectionIntro && <Md src={item.sectionIntro} className="text-sm" />}
          <Md src={item.prompt} className="font-semibold" />
          {item.type === 'MCQ' && (
            <ol className="mt-1 list-inside list-[upper-alpha] text-sm">
              {item.choices.map((c, i) => (
                <li key={i} className={i === item.answer.index ? 'font-bold text-ok' : ''}>
                  <Md src={c} className="inline" />
                </li>
              ))}
            </ol>
          )}
          <p className="mt-2 text-xs font-bold">Corrigé</p>
          <Md src={item.correction} className="text-sm" />
        </div>
      ) : (
        <>
          <div className="grid gap-2 sm:grid-cols-[1fr_auto_auto]">
            <input className="input" value={item.section} onChange={(e) => onChange({ section: e.target.value })} placeholder="Exercice / partie" maxLength={120} aria-label="Exercice" />
            <select className="input" value={item.type} onChange={(e) => setType(e.target.value as ItemType)} aria-label="Type de question">
              <option value="NUMERIC">Résultat numérique</option>
              <option value="MCQ">QCM</option>
              <option value="OPEN">Réponse rédigée</option>
            </select>
            <label className="flex items-center gap-1 text-sm">
              Points
              <input className="input w-20" type="number" min={0.25} max={20} step={0.25} value={item.points} onChange={(e) => onChange({ points: Number(e.target.value) })} />
            </label>
          </div>
          <textarea className="input min-h-[48px] py-2 text-sm" value={item.sectionIntro ?? ''} onChange={(e) => onChange({ sectionIntro: e.target.value })} placeholder="Énoncé commun de l’exercice (facultatif, affiché avant la première question)" aria-label="Énoncé commun" />
          <textarea className="input min-h-[72px] py-2" value={item.prompt} onChange={(e) => onChange({ prompt: e.target.value })} placeholder="Question (Markdown, formules entre $…$)" aria-label="Question" />
          {item.type === 'MCQ' && (
            <div className="space-y-1">
              {item.choices.map((c, ci) => (
                <div key={ci} className="flex items-center gap-2">
                  <input type="radio" name={`good${index}`} checked={item.answer.index === ci} onChange={() => onChange({ answer: { index: ci } })} aria-label={`Bonne réponse : choix ${ci + 1}`} />
                  <input className="input flex-1" value={c} onChange={(e) => onChange({ choices: item.choices.map((x, j) => (j === ci ? e.target.value : x)) })} placeholder={`Choix ${String.fromCharCode(65 + ci)}`} />
                  {item.choices.length > 2 && (
                    <button
                      type="button"
                      className="text-danger"
                      onClick={() => onChange({ choices: item.choices.filter((_, j) => j !== ci), answer: { index: Math.max(0, Math.min(item.answer.index ?? 0, item.choices.length - 2)) } })}
                      aria-label="Supprimer ce choix"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              {item.choices.length < 6 && (
                <button type="button" className="chip bg-sunken" onClick={() => onChange({ choices: [...item.choices, ''] })}>
                  + choix
                </button>
              )}
            </div>
          )}
          {item.type === 'NUMERIC' && (
            <div className="grid gap-2 sm:grid-cols-3">
              <label className="text-sm">
                Valeur attendue
                <input className="input" type="number" step="any" value={item.answer.value ?? ''} onChange={(e) => onChange({ answer: { ...item.answer, value: Number(e.target.value) } })} />
              </label>
              <label className="text-sm">
                Tolérance (±)
                <input className="input" type="number" step="any" min={0} value={item.answer.tolerance ?? ''} onChange={(e) => onChange({ answer: { ...item.answer, tolerance: e.target.value ? Number(e.target.value) : undefined } })} />
              </label>
              <label className="text-sm">
                Points du résultat
                <input className="input" type="number" min={0} max={item.points} step={0.25} value={item.resultPoints ?? item.points} onChange={(e) => onChange({ resultPoints: Number(e.target.value) })} />
              </label>
              <p className="text-xs text-muted sm:col-span-3">Le résultat juste rapporte ses points automatiquement ; le reste (démarche) est noté par l’enseignant.</p>
            </div>
          )}
          {item.type === 'OPEN' && (
            <>
              <textarea className="input min-h-[48px] py-2 text-sm" value={item.answer.model ?? ''} onChange={(e) => onChange({ answer: { ...item.answer, model: e.target.value } })} placeholder="Réponse modèle" aria-label="Réponse modèle" />
              <input
                className="input text-sm"
                value={(item.answer.keywords ?? []).join(', ')}
                onChange={(e) => onChange({ answer: { ...item.answer, keywords: e.target.value.split(',').map((k) => k.trim()).filter(Boolean) } })}
                placeholder="Mots-clés attendus, séparés par des virgules"
                aria-label="Mots-clés"
              />
            </>
          )}
          <textarea className="input min-h-[60px] py-2 text-sm" value={item.correction} onChange={(e) => onChange({ correction: e.target.value })} placeholder="Corrigé et barème détaillé (montré à l’élève après la remise)" aria-label="Corrigé" />
        </>
      )}
    </fieldset>
  );
}

/** Banque : questions des devoirs existants de la matière, à copier dans le devoir. */
function Bank({ subjectId, examId, onPick }: { subjectId: number; examId: number | null; onPick: (items: AuthoringItem[]) => void }) {
  const [q, setQ] = useState('');
  const [query, setQuery] = useState('');
  const { data, error, loading } = useApi<AuthoringItem[]>(`/content/bank?subjectId=${subjectId}${examId ? `&examId=${examId}` : ''}${query ? `&q=${encodeURIComponent(query)}` : ''}`);
  const [picked, setPicked] = useState<Set<number>>(new Set());

  const groups = useMemo(() => {
    const m = new Map<string, AuthoringItem[]>();
    data?.forEach((it) => m.set(`${it.source} — ${it.section}`, [...(m.get(`${it.source} — ${it.section}`) ?? []), it]));
    return [...m.entries()];
  }, [data]);

  return (
    <section className="card space-y-3">
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(q);
        }}
      >
        <input className="input flex-1" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Rechercher (ex. Pythagore, pourcentage…)" aria-label="Rechercher dans la banque" />
        <button className="btn-ghost">Chercher</button>
      </form>
      {loading && !data && <Spinner />}
      {error && <ErrorBox error={error} />}
      <div className="max-h-[50vh] space-y-3 overflow-y-auto">
        {groups.map(([title, items]) => (
          <div key={title}>
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-bold">{title}</p>
              <button
                className="chip shrink-0 bg-sunken"
                onClick={() => setPicked((p) => new Set([...p, ...items.map((i) => i.id!)]))}
              >
                Tout l’exercice ({fmtScore(items.reduce((s, i) => s + i.points, 0))} pts)
              </button>
            </div>
            <ul className="mt-1 space-y-1">
              {items.map((it) => (
                <li key={it.id}>
                  <label className="flex cursor-pointer items-start gap-2 rounded-xl bg-sunken px-3 py-2 text-sm">
                    <input
                      type="checkbox"
                      className="mt-1"
                      checked={picked.has(it.id!)}
                      onChange={(e) => setPicked((p) => {
                        const n = new Set(p);
                        if (e.target.checked) n.add(it.id!);
                        else n.delete(it.id!);
                        return n;
                      })}
                    />
                    <span className="min-w-0 flex-1">
                      <Md src={it.prompt} />
                      <span className="text-xs text-muted">
                        {it.type} · {fmtScore(it.points)} pt
                      </span>
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button
        className="btn-primary w-full"
        disabled={picked.size === 0}
        onClick={() => {
          onPick((data ?? []).filter((it) => picked.has(it.id!)).map(({ id: _id, ...it }) => ({ ...it, choices: it.choices ?? [], correction: it.correction ?? '' })));
          setPicked(new Set());
        }}
      >
        Ajouter {picked.size} question(s)
      </button>
    </section>
  );
}
