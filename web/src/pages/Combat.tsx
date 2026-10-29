import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Empty, ErrorBox, errorMessage, PageTitle, Spinner } from '../components/ui';
import { api } from '../lib/api';
import { useAuth } from '../lib/auth';
import { useApi } from '../lib/hooks';
import { Md } from '../lib/markdown';
import type { ChallengeDetail, ChallengeSummary, Leaderboard, SubjectSummary } from '../lib/types';
import { fmtDuration } from '../lib/util';

const STATUS: Record<string, string> = { PENDING: 'En cours', DONE: 'Terminé', EXPIRED: 'Expiré', DECLINED: 'Refusé' };

function outcome(c: ChallengeSummary, myId: string) {
  if (c.status !== 'DONE') return null;
  const me = c.challengerId === myId ? c.challengerScore! : c.opponentScore!;
  const other = c.challengerId === myId ? c.opponentScore! : c.challengerScore!;
  return me > other ? { label: 'Victoire', icon: '🏆', tone: 'text-ok' } : me < other ? { label: 'Défaite', icon: '😤', tone: 'text-danger' } : { label: 'Égalité', icon: '🤝', tone: 'text-muted' };
}

export function Combat() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState<'duels' | 'board'>('duels');
  const { data, error, loading, reload } = useApi<ChallengeSummary[]>('/challenges');
  const { data: subjects } = useApi<SubjectSummary[]>('/subjects');
  const [subjectId, setSubjectId] = useState<number | ''>('');
  const [phone, setPhone] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const create = async () => {
    setBusy(true);
    setMsg(null);
    try {
      const c = await api<{ id: string }>('/challenges', { body: { subjectId: Number(subjectId), opponentPhone: phone } });
      navigate(`/combat/${c.id}`);
    } catch (e) {
      setMsg(errorMessage(e));
      setBusy(false);
    }
  };

  return (
    <div className="space-y-4">
      <PageTitle sub="Défie un camarade sur 10 questions : le meilleur score gagne, le plus rapide départage.">⚔️ Combat</PageTitle>
      <div className="grid grid-cols-2 gap-1 rounded-xl bg-sunken p-1" role="tablist">
        <button role="tab" aria-selected={tab === 'duels'} className={`rounded-lg py-2 text-sm font-bold ${tab === 'duels' ? 'bg-surface shadow' : 'text-muted'}`} onClick={() => setTab('duels')}>
          Mes défis
        </button>
        <button role="tab" aria-selected={tab === 'board'} className={`rounded-lg py-2 text-sm font-bold ${tab === 'board' ? 'bg-surface shadow' : 'text-muted'}`} onClick={() => setTab('board')}>
          Classement
        </button>
      </div>

      {tab === 'board' ? (
        <Board />
      ) : (
        <>
          <form
            className="card space-y-2"
            onSubmit={(e) => {
              e.preventDefault();
              void create();
            }}
          >
            <p className="font-bold">Lancer un défi</p>
            <select className="input" value={subjectId} onChange={(e) => setSubjectId(e.target.value ? Number(e.target.value) : '')} aria-label="Matière">
              <option value="">Matière…</option>
              {subjects
                ?.filter((s) => s.chapterCount > 0)
                .map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.icon} {s.name}
                  </option>
                ))}
            </select>
            <input className="input" type="tel" inputMode="tel" placeholder="Numéro de ton adversaire (07 …)" value={phone} onChange={(e) => setPhone(e.target.value)} aria-label="Numéro de l’adversaire" />
            <button className="btn-primary w-full" disabled={busy || !subjectId || phone.replace(/\D/g, '').length < 8}>
              Défier
            </button>
            <p className="text-xs text-muted">Ton adversaire doit préparer le même examen que toi. Il a 48 h pour répondre.</p>
            {msg && <p className="text-sm text-danger">{msg}</p>}
          </form>

          {loading && !data && <Spinner />}
          {error && !data && <ErrorBox error={error} onRetry={reload} />}
          {data && data.length === 0 && <Empty icon="⚔️" title="Aucun défi pour l’instant" text="Lance ton premier défi ci-dessus." />}
          <ul className="space-y-2">
            {data?.map((c) => {
              const other = c.challengerId === user?.id ? c.opponent : c.challenger;
              const myScore = c.challengerId === user?.id ? c.challengerScore : c.opponentScore;
              const otherScore = c.challengerId === user?.id ? c.opponentScore : c.challengerScore;
              const o = user && outcome(c, user.id);
              return (
                <li key={c.id}>
                  <Link to={`/combat/${c.id}`} className="card flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-bold">
                        {c.subject.icon} contre {other.firstName} {other.lastName}
                      </p>
                      <p className="text-sm text-muted">
                        {c.subject.name} · {STATUS[c.status]}
                        {c.status === 'PENDING' && myScore === null && ' · à toi de jouer !'}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="font-extrabold">
                        {myScore ?? '–'} : {c.status === 'DONE' ? otherScore : '?'}
                      </p>
                      {o && (
                        <p className={`text-xs font-bold ${o.tone}`}>
                          {o.icon} {o.label}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}

function Board() {
  const [scope, setScope] = useState<'school' | 'city' | 'national'>('national');
  const [period, setPeriod] = useState<'week' | 'all'>('week');
  const { data, error, loading, reload } = useApi<Leaderboard>(`/leaderboard?scope=${scope}&period=${period}`);
  const { user } = useAuth();
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {(
          [
            ['school', 'Mon école'],
            ['city', 'Ma ville'],
            ['national', 'National'],
          ] as const
        ).map(([k, l]) => (
          <button key={k} className={`chip ${scope === k ? 'bg-brand text-white' : 'bg-sunken'}`} aria-pressed={scope === k} onClick={() => setScope(k)}>
            {l}
          </button>
        ))}
        <span className="mx-1 text-muted">|</span>
        {(
          [
            ['week', '7 jours'],
            ['all', 'Depuis le début'],
          ] as const
        ).map(([k, l]) => (
          <button key={k} className={`chip ${period === k ? 'bg-brand text-white' : 'bg-sunken'}`} aria-pressed={period === k} onClick={() => setPeriod(k)}>
            {l}
          </button>
        ))}
      </div>
      {loading && !data && <Spinner />}
      {error && !data && <ErrorBox error={error} onRetry={reload} />}
      {data && (
        <div className="card">
          <p className="text-sm text-muted">
            {data.label ?? 'Renseigne ton école et ta ville dans ton profil'} · {data.total} élève(s)
            {data.me && ` · ton rang : ${data.me.rank} (${data.me.xp} XP)`}
          </p>
          <ol className="mt-2 divide-y divide-line">
            {data.top.map((r) => (
              <li key={r.userId} className={`flex items-center justify-between gap-2 py-2 ${r.userId === user?.id ? 'font-extrabold text-brand-strong' : ''}`}>
                <span className="flex min-w-0 items-center gap-2">
                  <span className="w-8 shrink-0 text-center">{r.rank <= 3 ? ['🥇', '🥈', '🥉'][r.rank - 1] : r.rank}</span>
                  <span className="min-w-0">
                    <span className="block truncate">{r.name}</span>
                    {scope === 'national' && r.city && <span className="block truncate text-xs font-normal text-muted">{r.city}</span>}
                  </span>
                </span>
                <span className="shrink-0">{r.xp} XP</span>
              </li>
            ))}
          </ol>
          <p className="mt-2 text-xs text-muted">XP : 10 par bonne réponse aux quiz, 5 par point obtenu aux devoirs officiels, 20 par défi gagné.</p>
        </div>
      )}
    </div>
  );
}

export function ChallengePlay() {
  const { id } = useParams();
  const { user } = useAuth();
  const { data, error, loading, reload, setData } = useApi<ChallengeDetail>(`/challenges/${id}`);
  const [playing, setPlaying] = useState(false);
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, { choice?: number; value?: string }>>({});
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const started = useRef(0);
  const [, tick] = useState(0);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => tick((n) => n + 1), 1000);
    return () => clearInterval(t);
  }, [playing]);

  if (loading && !data) return <Spinner />;
  if (error && !data) return <ErrorBox error={error} onRetry={reload} />;
  if (!data || !user) return null;

  const other = data.me === 'challenger' ? data.opponent : data.challenger;
  const submit = async () => {
    setBusy(true);
    try {
      const res = await api<ChallengeDetail>(`/challenges/${id}/submit`, {
        body: {
          timeS: Math.round((Date.now() - started.current) / 1000),
          answers: data.questions.map((q) => ({ questionId: q.id, ...answers[q.id] })),
        },
      });
      setPlaying(false);
      setData(res);
    } catch (e) {
      setMsg(errorMessage(e));
    } finally {
      setBusy(false);
    }
  };

  if (playing) {
    const q = data.questions[idx];
    const a = answers[q.id] ?? {};
    const last = idx === data.questions.length - 1;
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm font-bold">
          <span>
            Question {idx + 1}/{data.questions.length}
          </span>
          <span className="chip bg-sunken">⏱ {fmtDuration(Math.round((Date.now() - started.current) / 1000))}</span>
        </div>
        <div className="card">
          <Md src={q.prompt} className="font-semibold" />
          {q.type === 'MCQ' ? (
            <div className="mt-3 space-y-2">
              {q.choices.map((c, i) => (
                <button key={i} className={`w-full rounded-xl border px-3 py-3 text-left ${a.choice === i ? 'border-brand bg-brand-soft' : 'border-line'}`} onClick={() => setAnswers({ ...answers, [q.id]: { choice: i } })}>
                  <Md src={c} />
                </button>
              ))}
            </div>
          ) : (
            <input
              className="input mt-3"
              inputMode="decimal"
              placeholder="Ta réponse"
              value={a.value ?? ''}
              onChange={(e) => setAnswers({ ...answers, [q.id]: { value: e.target.value } })}
              aria-label="Réponse"
            />
          )}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button className="btn-ghost" disabled={idx === 0} onClick={() => setIdx(idx - 1)}>
            ← Précédente
          </button>
          {last ? (
            <button className="btn-ok" disabled={busy} onClick={() => void submit()}>
              {busy ? 'Envoi…' : 'Terminer'}
            </button>
          ) : (
            <button className="btn-primary" onClick={() => setIdx(idx + 1)}>
              Suivante →
            </button>
          )}
        </div>
        {msg && <p className="text-sm text-danger">{msg}</p>}
      </div>
    );
  }

  const o = outcome(data, user.id);
  const myScore = data.me === 'challenger' ? data.challengerScore : data.opponentScore;
  const otherScore = data.me === 'challenger' ? data.opponentScore : data.challengerScore;
  const myTime = data.me === 'challenger' ? data.challengerTimeS : data.opponentTimeS;
  const otherTime = data.me === 'challenger' ? data.opponentTimeS : data.challengerTimeS;

  return (
    <div className="space-y-4">
      <Link to="/combat" className="text-sm text-muted">
        ← Combat
      </Link>
      <div className="card text-center">
        <p className="text-sm text-muted">
          {data.subject.icon} {data.subject.name} · {STATUS[data.status]}
        </p>
        <div className="mt-2 grid grid-cols-3 items-center">
          <div>
            <p className="font-bold">Toi</p>
            <p className="text-3xl font-extrabold">{myScore ?? '–'}</p>
            {myTime !== null && <p className="text-xs text-muted">{fmtDuration(myTime)}</p>}
          </div>
          <p className="text-2xl" aria-hidden>
            ⚔️
          </p>
          <div>
            <p className="truncate font-bold">{other.firstName}</p>
            <p className="text-3xl font-extrabold">{data.status === 'DONE' ? otherScore : otherScore !== null ? '✓' : '…'}</p>
            {data.status === 'DONE' && otherTime !== null && <p className="text-xs text-muted">{fmtDuration(otherTime)}</p>}
          </div>
        </div>
        {o && (
          <p className={`mt-2 text-xl font-extrabold ${o.tone}`}>
            {o.icon} {o.label}
          </p>
        )}
        {data.canPlay && (
          <button
            className="btn-primary mt-3"
            onClick={() => {
              started.current = Date.now();
              setPlaying(true);
            }}
          >
            ▶ Jouer (10 questions)
          </button>
        )}
        {data.canPlay && data.me === 'opponent' && (
          <button className="btn-ghost ml-2 mt-3" onClick={() => api(`/challenges/${id}/decline`, { method: 'POST' }).then(reload)}>
            Refuser
          </button>
        )}
        {data.played && data.status === 'PENDING' && <p className="mt-2 text-sm text-muted">En attente de ton adversaire (48 h max).</p>}
      </div>

      {data.played && (
        <section className="space-y-2">
          <h2 className="font-extrabold">Corrigé</h2>
          {data.questions.map((q, i) => (
            <div key={q.id} className="card">
              <p className="text-xs font-bold text-muted">Question {i + 1}</p>
              <Md src={q.prompt} className="font-semibold" />
              <p className="mt-1 text-sm">
                <span className="font-bold text-ok">Réponse : </span>
                {q.type === 'MCQ' ? <Md src={q.choices[q.answer?.index ?? 0] ?? ''} className="inline" /> : String(q.answer?.value ?? q.answer?.model ?? '')}
              </p>
              {q.explanation && <Md src={q.explanation} className="mt-1 text-sm text-muted" />}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
