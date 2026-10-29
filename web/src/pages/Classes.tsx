import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Empty, ErrorBox, errorMessage, OfflineNote, PageTitle, Spinner } from '../components/ui';
import { api } from '../lib/api';
import { useAuth } from '../lib/auth';
import { useApi } from '../lib/hooks';
import type { ClassDetail, ClassSummary, Exam } from '../lib/types';
import { fmtDate, fmtScore, scoreTone } from '../lib/util';

/** Liste des classes : l'élève rejoint une classe avec un code, l'enseignant en crée. */
export function Classes() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { data, error, offline, loading, reload } = useApi<ClassSummary[]>('/classes');
  const { data: exams } = useApi<Exam[]>(user?.role === 'STUDENT' ? null : '/exams');
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [examId, setExamId] = useState<number | ''>('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const student = user?.role === 'STUDENT';

  const join = async () => {
    setBusy(true);
    setMsg(null);
    try {
      const c = await api<{ id: number }>('/classes/join', { body: { code } });
      navigate(`/classes/${c.id}`);
    } catch (e) {
      setMsg(errorMessage(e));
    } finally {
      setBusy(false);
    }
  };

  const create = async () => {
    setBusy(true);
    setMsg(null);
    try {
      const c = await api<{ id: number }>('/classes', { body: { name, examId: Number(examId), schoolName: user?.teacher?.schoolName ?? undefined } });
      navigate(`/classes/${c.id}`);
    } catch (e) {
      setMsg(errorMessage(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-4">
      <PageTitle sub={student ? 'Rejoins la classe de ton professeur pour recevoir ses devoirs et ses annonces.' : 'Partage le code de la classe à tes élèves.'}>
        {student ? 'Mes classes' : 'Mes classes'}
      </PageTitle>
      <OfflineNote show={offline} />

      <form
        className="card space-y-2"
        onSubmit={(e) => {
          e.preventDefault();
          void (student ? join() : create());
        }}
      >
        {student ? (
          <>
            <label className="label" htmlFor="code">
              Code de la classe (6 caractères)
            </label>
            <div className="flex gap-2">
              <input
                id="code"
                className="input flex-1 font-mono uppercase tracking-widest"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                maxLength={8}
                autoComplete="off"
                placeholder="EX. MATH3A"
              />
              <button className="btn-primary" disabled={busy || code.trim().length < 4}>
                Rejoindre
              </button>
            </div>
          </>
        ) : (
          <>
            <label className="label" htmlFor="cname">
              Nouvelle classe
            </label>
            <input id="cname" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ex. 3ème 2 — Mathématiques" maxLength={80} />
            <select className="input" value={examId} onChange={(e) => setExamId(e.target.value ? Number(e.target.value) : '')} aria-label="Examen préparé">
              <option value="">Examen préparé…</option>
              {exams?.map((x) => (
                <option key={x.id} value={x.id}>
                  {x.name}
                </option>
              ))}
            </select>
            <button className="btn-primary w-full" disabled={busy || name.trim().length < 2 || !examId}>
              Créer la classe
            </button>
          </>
        )}
        {msg && <p className="text-sm text-danger">{msg}</p>}
      </form>

      {loading && !data && <Spinner />}
      {error && !data && <ErrorBox error={error} onRetry={reload} />}
      {data && data.length === 0 && <Empty icon="👥" title="Aucune classe pour l’instant" />}
      <ul className="space-y-2">
        {data?.map((c) => (
          <li key={c.id}>
            <Link to={`/classes/${c.id}`} className={`card flex items-center justify-between gap-3 ${c.archived ? 'opacity-60' : ''}`}>
              <div className="min-w-0">
                <p className="font-bold">{c.name}</p>
                <p className="text-sm text-muted">
                  {c.exam.code} · {student ? `${c.teacher.firstName} ${c.teacher.lastName}` : `${c._count.members} élève(s)`}
                  {c.archived && ' · archivée'}
                </p>
              </div>
              {!student && <span className="chip shrink-0 bg-sunken font-mono">{c.code}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ClassView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, offline, loading, reload } = useApi<ClassDetail>(`/classes/${id}`);
  const [news, setNews] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  if (loading && !data) return <Spinner />;
  if (error && !data) return <ErrorBox error={error} onRetry={reload} />;
  if (!data) return null;

  const run = async (fn: () => Promise<unknown>, after?: () => void) => {
    setBusy(true);
    setMsg(null);
    try {
      await fn();
      after?.();
      await reload();
    } catch (e) {
      setMsg(errorMessage(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-4">
      <Link to={data.isOwner ? '/prof/classes' : '/classes'} className="text-sm text-muted">
        ← Classes
      </Link>
      <OfflineNote show={offline} />
      <div className="card">
        <p className="text-xl font-extrabold">{data.name}</p>
        <p className="text-sm text-muted">
          {data.exam.code} · {data.teacher.firstName} {data.teacher.lastName} · {data.membersCount} élève(s)
        </p>
        {data.isOwner && data.code && (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-sm">Code à donner aux élèves :</span>
            <span className="chip bg-brand-soft font-mono text-lg tracking-widest text-brand-strong">{data.code}</span>
            <button className="btn-ghost" disabled={busy} onClick={() => run(() => api(`/classes/${data.id}/code`, { method: 'POST' }))}>
              Nouveau code
            </button>
            <button className="btn-ghost" disabled={busy} onClick={() => run(() => api(`/classes/${data.id}`, { method: 'PATCH', body: { archived: !data.archived } }))}>
              {data.archived ? 'Réactiver' : 'Archiver'}
            </button>
          </div>
        )}
        {!data.isOwner && (
          <div className="mt-3 flex flex-wrap gap-2">
            <Link to={`/messages/${data.teacher.id}`} className="btn-ghost">
              💬 Écrire au professeur
            </Link>
            <button
              className="btn-ghost text-danger"
              disabled={busy}
              onClick={() => confirm('Quitter cette classe ?') && run(() => api(`/classes/${data.id}/leave`, { method: 'POST' }), () => navigate('/classes'))}
            >
              Quitter la classe
            </button>
          </div>
        )}
        {msg && <p className="mt-2 text-sm text-danger">{msg}</p>}
      </div>

      <section className="card">
        <h2 className="mb-2 font-extrabold">📝 Devoirs de la classe</h2>
        {data.assignments.length === 0 && <p className="text-sm text-muted">Aucun devoir pour l’instant.</p>}
        <ul className="space-y-2">
          {data.assignments.map((a) => {
            const late = a.dueAt && new Date(a.dueAt) < new Date();
            const to = data.isOwner ? `/prof/devoirs/${a.id}` : a.myAttempt ? `/resultats/${a.myAttempt.id}` : `/devoir/${a.id}`;
            return (
              <li key={a.id}>
                <Link to={to} className="flex items-center justify-between gap-2 rounded-xl bg-sunken px-3 py-2">
                  <div className="min-w-0">
                    <p className="font-bold">
                      {a.subject?.icon} {a.title}
                    </p>
                    <p className={`text-xs ${late && !a.myAttempt ? 'text-danger' : 'text-muted'}`}>
                      {a.dueAt ? `À rendre le ${fmtDate(a.dueAt)}` : 'Sans date limite'} · {a.durationMin} min
                    </p>
                  </div>
                  {a.myAttempt ? (
                    <span className={`shrink-0 font-extrabold ${scoreTone(a.myAttempt.finalScore ?? a.myAttempt.autoScore)}`}>
                      {a.myAttempt.status === 'GRADED' ? `${fmtScore(a.myAttempt.finalScore)}` : '⏳'}
                    </span>
                  ) : (
                    !data.isOwner && <span className="chip shrink-0 bg-brand-soft text-brand-strong">À faire</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        {data.isOwner && (
          <Link to={`/prof/devoirs/nouveau?classe=${data.id}`} className="btn-primary mt-3 inline-flex">
            + Donner un devoir
          </Link>
        )}
      </section>

      <section className="card">
        <h2 className="mb-2 font-extrabold">📢 Annonces</h2>
        {data.isOwner && (
          <form
            className="mb-3 space-y-2"
            onSubmit={(e) => {
              e.preventDefault();
              void run(() => api(`/classes/${data.id}/announcements`, { body: { body: news } }), () => setNews(''));
            }}
          >
            <textarea className="input min-h-[72px] py-2" value={news} onChange={(e) => setNews(e.target.value)} placeholder="Ex. Le devoir est reporté à lundi." maxLength={2000} aria-label="Nouvelle annonce" />
            <button className="btn-primary" disabled={busy || !news.trim()}>
              Publier (notification aux élèves)
            </button>
          </form>
        )}
        {data.announcements.length === 0 && <p className="text-sm text-muted">Aucune annonce.</p>}
        <ul className="space-y-2">
          {data.announcements.map((a) => (
            <li key={a.id} className="rounded-xl bg-sunken px-3 py-2 text-sm">
              <div className="flex items-start justify-between gap-2">
                <span className="text-xs font-bold text-muted">{fmtDate(a.createdAt)}</span>
                {data.isOwner && (
                  <button className="text-xs text-danger" onClick={() => run(() => api(`/classes/${data.id}/announcements/${a.id}`, { method: 'DELETE' }))}>
                    Supprimer
                  </button>
                )}
              </div>
              <p className="whitespace-pre-wrap">{a.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {data.isOwner && data.members && (
        <section className="card">
          <h2 className="mb-2 font-extrabold">👥 Élèves</h2>
          {data.members.length === 0 && <p className="text-sm text-muted">Aucun élève : donne-leur le code {data.code}.</p>}
          <ul className="divide-y divide-line">
            {data.members.map((m) => (
              <li key={m.id} className="flex items-center justify-between gap-2 py-2">
                <div className="min-w-0">
                  <p className="font-bold">
                    {m.firstName} {m.lastName}
                  </p>
                  <p className="text-xs text-muted">
                    {m.examsCount} devoir(s) noté(s){m.lastSeenAt ? ` · vu le ${fmtDate(m.lastSeenAt)}` : ''}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <span className={`font-extrabold ${scoreTone(m.average)}`}>{fmtScore(m.average)}</span>
                  <Link to={`/messages/${m.id}`} className="text-xl" aria-label={`Écrire à ${m.firstName}`}>
                    💬
                  </Link>
                  <button
                    className="text-xs text-danger"
                    onClick={() => confirm(`Retirer ${m.firstName} de la classe ?`) && run(() => api(`/classes/${data.id}/members/${m.id}`, { method: 'DELETE' }))}
                  >
                    Retirer
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
