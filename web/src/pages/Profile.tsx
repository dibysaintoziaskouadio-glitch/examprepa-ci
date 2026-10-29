import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { errorMessage, PageTitle } from '../components/ui';
import { api } from '../lib/api';
import { useAuth } from '../lib/auth';
import { pinnedEntries, unpin, type CacheEntry } from '../lib/db';
import { LOCALES, useT, type Locale } from '../lib/i18n';
import { FONT_PX, getFontSize, getTheme, setFontSize, setTheme, type FontSize, type Theme } from '../lib/prefs';
import { disablePush, enablePush, pushState } from '../lib/push';
import type { Me } from '../lib/types';

export function Profile() {
  const { user, setUser, signOut } = useAuth();
  const [theme, setThemeState] = useState<Theme>(getTheme());
  const [font, setFontState] = useState<FontSize>(getFontSize());
  const [downloads, setDownloads] = useState<CacheEntry[]>([]);
  const [form, setForm] = useState({
    firstName: user?.firstName ?? '',
    lastName: user?.lastName ?? '',
    schoolName: user?.student?.schoolName ?? user?.teacher?.schoolName ?? '',
    city: user?.student?.city ?? '',
    targetAverage: user?.student?.targetAverage ?? 12,
  });
  const [msg, setMsg] = useState<string | null>(null);
  const { locale, setLocale } = useT();
  const [push, setPush] = useState<Awaited<ReturnType<typeof pushState>> | null>(null);
  const [pushMsg, setPushMsg] = useState<string | null>(null);

  useEffect(() => {
    void pinnedEntries().then(setDownloads);
    pushState().then(setPush).catch(() => setPush('unsupported'));
  }, []);
  if (!user) return null;

  const save = async () => {
    setMsg(null);
    try {
      const body = user.student ? form : { firstName: form.firstName, lastName: form.lastName, schoolName: form.schoolName };
      setUser(await api<Me>('/auth/me', { method: 'PATCH', body }));
      setMsg('✅ Profil enregistré');
    } catch (e) {
      setMsg(errorMessage(e));
    }
  };

  const chooseLocale = (l: Locale) => {
    setLocale(l);
    void api<Me>('/auth/me', { method: 'PATCH', body: { locale: l } }).then(setUser).catch(() => undefined);
  };

  const togglePush = async () => {
    setPushMsg(null);
    try {
      if (push === 'on') await disablePush();
      else await enablePush();
      setPush(await pushState());
    } catch (e) {
      setPushMsg(e instanceof Error ? e.message : errorMessage(e));
    }
  };

  const exportData = async () => {
    try {
      const data = await api('/auth/me/export');
      const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
      const a = document.createElement('a');
      a.href = url;
      a.download = 'mes-donnees-examprepa.json';
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      alert(errorMessage(e));
    }
  };

  const deleteAccount = async () => {
    if (!confirm('Supprimer définitivement ton compte ? Tes informations personnelles seront effacées.')) return;
    try {
      await api('/auth/me', { method: 'DELETE' });
      await signOut();
    } catch (e) {
      alert(errorMessage(e));
    }
  };

  const sizeKb = (e: CacheEntry) => Math.round(JSON.stringify(e.data).length / 1024);

  return (
    <div className="space-y-4">
      <PageTitle sub={user.phone ? user.phone.replace('+225', '+225 ') : (user.email ?? '')}>
        {user.firstName} {user.lastName}
      </PageTitle>

      <section className="card space-y-3">
        <h2 className="font-extrabold">Mon profil</h2>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="label" htmlFor="pf">
              Prénom
            </label>
            <input id="pf" className="input" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
          </div>
          <div>
            <label className="label" htmlFor="pl">
              Nom
            </label>
            <input id="pl" className="input" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
          </div>
        </div>
        <div>
          <label className="label" htmlFor="ps">
            Établissement
          </label>
          <input id="ps" className="input" value={form.schoolName} onChange={(e) => setForm({ ...form, schoolName: e.target.value })} />
        </div>
        {user.student && (
          <>
            <div>
              <label className="label" htmlFor="pc">
                Ville
              </label>
              <input id="pc" className="input" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
            </div>
            <div>
              <label className="label" htmlFor="pt">
                🎯 Moyenne visée à l’examen : <strong>{form.targetAverage}/20</strong>
              </label>
              <input
                id="pt"
                type="range"
                min={10}
                max={20}
                step={0.5}
                className="w-full accent-[var(--brand-strong)]"
                value={form.targetAverage}
                onChange={(e) => setForm({ ...form, targetAverage: Number(e.target.value) })}
              />
            </div>
          </>
        )}
        <button className="btn-primary w-full" onClick={save}>
          Enregistrer
        </button>
        {msg && <p className="text-sm">{msg}</p>}
      </section>

      <nav className="grid grid-cols-2 gap-2" aria-label="Raccourcis">
        {user.role === 'STUDENT' && (
          <>
            <Link to="/abonnement" className="btn-ghost">⭐ Abonnement</Link>
            <Link to="/classes" className="btn-ghost">👥 Mes classes</Link>
            <Link to="/plan" className="btn-ghost">🗓 Plan de révision</Link>
            <Link to="/combat" className="btn-ghost">⚔️ Combat</Link>
          </>
        )}
        <Link to="/messages" className="btn-ghost">💬 Messages</Link>
        {user.role !== 'STUDENT' && <Link to="/prof/stats" className="btn-ghost">📊 Statistiques</Link>}
      </nav>

      <section className="card space-y-3">
        <h2 className="font-extrabold">🔔 Notifications</h2>
        {push === null && <p className="text-sm text-muted">…</p>}
        {push === 'unsupported' && <p className="text-sm text-muted">Ce navigateur ne gère pas les notifications. Installe l’application sur ton écran d’accueil pour les recevoir.</p>}
        {push === 'disabled' && <p className="text-sm text-muted">Les notifications ne sont pas encore activées sur ce serveur.</p>}
        {push === 'denied' && <p className="text-sm text-muted">Notifications bloquées : autorise-les dans les réglages du navigateur.</p>}
        {(push === 'on' || push === 'off') && (
          <>
            <p className="text-sm text-muted">Nouveaux devoirs, copies corrigées, annonces, messages et défis.</p>
            <button className={push === 'on' ? 'btn-ghost w-full' : 'btn-primary w-full'} onClick={() => void togglePush()}>
              {push === 'on' ? 'Désactiver les notifications' : 'Activer les notifications'}
            </button>
          </>
        )}
        {pushMsg && <p className="text-sm text-danger">{pushMsg}</p>}
      </section>

      <section className="card space-y-3">
        <h2 className="font-extrabold">Affichage</h2>
        <fieldset>
          <legend className="label">Langue de l’interface</legend>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {LOCALES.map((l) => (
              <button key={l.code} className={`btn border-2 text-sm ${locale === l.code ? 'border-brand bg-brand-soft' : 'border-line bg-surface'}`} aria-pressed={locale === l.code} onClick={() => chooseLocale(l.code)}>
                {l.label}
              </button>
            ))}
          </div>
          {!LOCALES.find((l) => l.code === locale)?.ready && (
            <p className="mt-1 text-xs text-muted">Traduction en préparation avec des locuteurs natifs : les textes non traduits restent en français.</p>
          )}
          <p className="mt-1 text-xs text-muted">Les cours restent en français, langue de l’examen.</p>
        </fieldset>
        <fieldset>
          <legend className="label">Thème</legend>
          <div className="grid grid-cols-3 gap-2">
            {(
              [
                ['system', '📱 Auto'],
                ['light', '☀️ Clair'],
                ['dark', '🌙 Sombre'],
              ] as [Theme, string][]
            ).map(([t, label]) => (
              <button key={t} className={`btn border-2 text-sm ${theme === t ? 'border-brand bg-brand-soft' : 'border-line bg-surface'}`} aria-pressed={theme === t} onClick={() => (setTheme(t), setThemeState(t))}>
                {label}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="label">Taille du texte</legend>
          <div className="grid grid-cols-4 gap-2">
            {(Object.keys(FONT_PX) as FontSize[]).map((f) => (
              <button
                key={f}
                className={`btn border-2 ${font === f ? 'border-brand bg-brand-soft' : 'border-line bg-surface'}`}
                style={{ fontSize: FONT_PX[f] }}
                aria-pressed={font === f}
                onClick={() => (setFontSize(f), setFontState(f))}
              >
                A
              </button>
            ))}
          </div>
        </fieldset>
      </section>

      {user.role === 'STUDENT' && (
        <section className="card">
          <h2 className="mb-2 font-extrabold">📥 Téléchargements hors ligne</h2>
          {downloads.length === 0 ? (
            <p className="text-sm text-muted">Aucun chapitre téléchargé. Utilise le bouton « 📥 Télécharger » sur un chapitre.</p>
          ) : (
            <ul className="divide-y divide-line text-sm">
              {downloads.map((d) => (
                <li key={d.path} className="flex items-center justify-between gap-2 py-2">
                  <span>
                    {d.label} <span className="text-muted">· {sizeKb(d)} Ko</span>
                  </span>
                  <button className="text-danger underline" onClick={() => void unpin(d.path).then(() => setDownloads(downloads.filter((x) => x.path !== d.path)))}>
                    Retirer
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      <section className="card space-y-2">
        <h2 className="font-extrabold">🔒 Mes données</h2>
        <p className="text-sm text-muted">Conformément à la loi n° 2013-450, tu peux récupérer ou supprimer tes données à tout moment.</p>
        <button className="btn-ghost w-full" onClick={exportData}>
          Télécharger mes données
        </button>
        <button className="btn-ghost w-full text-danger" onClick={deleteAccount}>
          Supprimer mon compte
        </button>
      </section>

      <button className="btn-ghost w-full" onClick={() => void signOut()}>
        Se déconnecter
      </button>
    </div>
  );
}
