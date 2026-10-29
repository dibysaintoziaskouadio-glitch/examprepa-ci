import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Empty, ErrorBox, errorMessage, PageTitle, Spinner } from '../components/ui';
import { api } from '../lib/api';
import { useAuth } from '../lib/auth';
import { useApi } from '../lib/hooks';
import type { ChatMessage, Person, Thread } from '../lib/types';

const ROLE: Record<string, string> = { TEACHER: 'Enseignant', STUDENT: 'Élève', ADMIN: 'Support' };

const fmtTime = (d: string) => {
  const date = new Date(d);
  const today = new Date().toDateString() === date.toDateString();
  return today ? date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) : date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
};

/** Conversations et nouveaux contacts (personnes d'une même classe). */
export function Messages() {
  const { data, error, loading, reload } = useApi<Thread[]>('/messages');
  const { data: contacts } = useApi<(Person & { context: string })[]>('/messages/contacts');
  useEffect(() => {
    const t = setInterval(() => document.visibilityState === 'visible' && void reload(), 15_000);
    return () => clearInterval(t);
  }, [reload]);

  const fresh = contacts?.filter((c) => !data?.some((t) => t.with.id === c.id)) ?? [];

  return (
    <div className="space-y-4">
      <PageTitle sub="Échange avec tes professeurs et les élèves de tes classes.">Messages</PageTitle>
      {loading && !data && <Spinner />}
      {error && !data && <ErrorBox error={error} onRetry={reload} />}
      {data && data.length === 0 && fresh.length === 0 && (
        <Empty icon="💬" title="Aucune conversation" text="Rejoins une classe pour pouvoir écrire à ton professeur.">
          <Link to="/classes" className="btn-ghost mt-3 inline-flex">
            Mes classes
          </Link>
        </Empty>
      )}
      <ul className="space-y-2">
        {data?.map((t) => (
          <li key={t.with.id}>
            <Link to={`/messages/${t.with.id}`} className="card flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="font-bold">
                  {t.with.firstName} {t.with.lastName} <span className="text-xs font-normal text-muted">· {ROLE[t.with.role]}</span>
                </p>
                <p className={`truncate text-sm ${t.unread ? 'font-bold' : 'text-muted'}`}>
                  {t.last.mine && 'Toi : '}
                  {t.last.body}
                </p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-xs text-muted">{fmtTime(t.last.createdAt)}</p>
                {t.unread > 0 && <span className="chip bg-danger text-white">{t.unread}</span>}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {fresh.length > 0 && (
        <section>
          <h2 className="mb-2 font-extrabold">Nouvelle conversation</h2>
          <ul className="space-y-2">
            {fresh.slice(0, 50).map((c) => (
              <li key={c.id}>
                <Link to={`/messages/${c.id}`} className="card flex items-center justify-between">
                  <span>
                    <span className="font-bold">
                      {c.firstName} {c.lastName}
                    </span>
                    <span className="block text-xs text-muted">{c.context}</span>
                  </span>
                  <span aria-hidden>✏️</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

export function Conversation() {
  const { userId } = useParams();
  const { user } = useAuth();
  const { data, error, loading, reload } = useApi<{ with: Person; canWrite: boolean; messages: ChatMessage[] }>(`/messages/with/${userId}`);
  const [text, setText] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const end = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(() => document.visibilityState === 'visible' && void reload(), 15_000);
    return () => clearInterval(t);
  }, [reload]);
  useEffect(() => {
    end.current?.scrollIntoView({ block: 'end' });
  }, [data?.messages.length]);

  if (loading && !data) return <Spinner />;
  if (error && !data) return <ErrorBox error={error} onRetry={reload} />;
  if (!data) return null;

  const send = async () => {
    if (!text.trim()) return;
    setBusy(true);
    setMsg(null);
    try {
      await api('/messages', { body: { toId: userId, body: text } });
      setText('');
      await reload();
    } catch (e) {
      setMsg(errorMessage(e));
    } finally {
      setBusy(false);
    }
  };

  const report = async (m: ChatMessage) => {
    const reason = prompt('Pourquoi signales-tu ce message ? (insulte, harcèlement, contenu choquant…)');
    if (!reason || reason.trim().length < 2) return;
    try {
      await api(`/messages/${m.id}/report`, { body: { reason: reason.trim() } });
      setMsg('Merci : le message a été signalé à l’équipe de modération.');
      await reload();
    } catch (e) {
      setMsg(errorMessage(e));
    }
  };

  return (
    <div className="flex min-h-[70dvh] flex-col">
      <Link to="/messages" className="text-sm text-muted">
        ← Messages
      </Link>
      <p className="mb-3 mt-1 text-xl font-extrabold">
        {data.with.firstName} {data.with.lastName} <span className="text-sm font-normal text-muted">· {ROLE[data.with.role]}</span>
      </p>
      <ul className="flex-1 space-y-2" aria-live="polite">
        {data.messages.length === 0 && <li className="text-center text-sm text-muted">Écris le premier message.</li>}
        {data.messages.map((m) => {
          const mine = m.fromId === user?.id;
          return (
            <li key={m.id} className={`flex ${mine ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl px-3 py-2 ${mine ? 'bg-brand text-white' : 'bg-sunken'}`}>
                <p className="whitespace-pre-wrap break-words">{m.body}</p>
                <p className={`mt-0.5 flex items-center gap-2 text-[11px] ${mine ? 'text-white/80' : 'text-muted'}`}>
                  {fmtTime(m.createdAt)}
                  {mine && m.readAt && ' · lu'}
                  {!mine && !m.flaggedAt && (
                    <button className="underline" onClick={() => void report(m)}>
                      Signaler
                    </button>
                  )}
                  {m.flaggedAt && ' · signalé'}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <div ref={end} />
      {msg && <p className="mt-2 text-sm text-muted">{msg}</p>}
      {data.canWrite ? (
        <form
          className="sticky bottom-[64px] mt-3 flex gap-2 bg-surface py-2"
          onSubmit={(e) => {
            e.preventDefault();
            void send();
          }}
        >
          <textarea
            className="input min-h-[48px] flex-1 py-2"
            rows={1}
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={2000}
            placeholder="Ton message…"
            aria-label="Message"
          />
          <button className="btn-primary" disabled={busy || !text.trim()}>
            Envoyer
          </button>
        </form>
      ) : (
        <p className="mt-3 rounded-xl bg-sunken px-3 py-2 text-sm text-muted">Vous ne partagez plus de classe : la conversation est en lecture seule.</p>
      )}
    </div>
  );
}
