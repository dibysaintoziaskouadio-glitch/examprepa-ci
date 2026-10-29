import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ErrorBox, errorMessage, PageTitle, Spinner } from '../components/ui';
import { api } from '../lib/api';
import { useApi } from '../lib/hooks';
import type { Payment, Plan, SubscriptionStatus } from '../lib/types';
import { fmtDate } from '../lib/util';

const fcfa = (n: number) => `${n.toLocaleString('fr-FR')} FCFA`;

const CHANNELS = [
  { id: 'orange', label: 'Orange Money', icon: '🟠' },
  { id: 'mtn', label: 'MTN MoMo', icon: '🟡' },
  { id: 'moov', label: 'Moov Money', icon: '🔵' },
  { id: 'wave', label: 'Wave', icon: '🌊' },
  { id: 'card', label: 'Carte bancaire', icon: '💳' },
];

export function Subscription() {
  const { data: status, error, loading, reload } = useApi<SubscriptionStatus>('/subscription');
  const { data: plans } = useApi<Plan[]>('/plans');
  const [busy, setBusy] = useState<number | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  const buy = async (plan: Plan) => {
    setBusy(plan.id);
    setMsg(null);
    try {
      const res = await api<{ paymentId: string; redirectUrl: string }>('/payments', { body: { planId: plan.id } });
      // Page de paiement de l'agrégateur (ou page de simulation en développement)
      window.location.assign(res.redirectUrl);
    } catch (e) {
      setMsg(errorMessage(e));
      setBusy(null);
    }
  };

  return (
    <div className="space-y-4">
      <PageTitle sub="Paiement par Mobile Money (Orange, MTN, Moov, Wave) ou carte bancaire.">Abonnement</PageTitle>
      {loading && !status && <Spinner />}
      {error && !status && <ErrorBox error={error} onRetry={reload} />}
      {status && (
        <div className={`card ${status.premium ? 'border-2 border-ok' : ''}`}>
          {status.subscription ? (
            <>
              <p className="font-extrabold text-ok">⭐ Abonné(e) — {status.subscription.plan.name}</p>
              <p className="text-sm text-muted">Accès complet jusqu’au {fmtDate(status.subscription.endsAt)}. Un nouvel achat prolonge ton abonnement.</p>
            </>
          ) : status.premium ? (
            <p className="font-bold">Tout le contenu est accessible sur ce serveur.</p>
          ) : (
            <>
              <p className="font-extrabold">Formule gratuite</p>
              <ul className="mt-1 list-inside list-disc text-sm text-muted">
                <li>Tous les cours, fiches de révision et quiz</li>
                <li>Le premier chapitre de chaque matière en entier, devoir compris</li>
                <li>Les devoirs donnés par ton professeur dans sa classe</li>
              </ul>
            </>
          )}
        </div>
      )}

      {plans && plans.length > 0 && (
        <section className="space-y-2">
          <h2 className="font-extrabold">Offres</h2>
          {plans.map((p) => (
            <div key={p.id} className="card flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="font-bold">{p.name}</p>
                <p className="text-sm text-muted">{p.description}</p>
              </div>
              <button className="btn-primary shrink-0" onClick={() => void buy(p)} disabled={busy !== null}>
                {busy === p.id ? '…' : fcfa(p.priceXof)}
              </button>
            </div>
          ))}
          <p className="text-xs text-muted">Paiement sécurisé : tu seras redirigé(e) vers la page de paiement, puis ramené(e) ici. Aucun prélèvement automatique.</p>
        </section>
      )}
      {msg && <p className="text-sm text-danger">{msg}</p>}
    </div>
  );
}

/** Page de paiement simulée (mode développement : aucun argent ne circule). */
export function PaySimulation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, loading } = useApi<Payment>(`/payments/${id}`);
  const [channel, setChannel] = useState('orange');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  if (loading && !data) return <Spinner />;
  if (error && !data) return <ErrorBox error={error} />;
  if (!data) return null;

  const simulate = async (outcome: 'SUCCESS' | 'FAILED') => {
    setBusy(true);
    setMsg(null);
    try {
      await api(`/payments/${id}/simulate`, { body: { outcome, channel } });
      navigate(`/paiement/retour/${id}`, { replace: true });
    } catch (e) {
      setMsg(errorMessage(e));
      setBusy(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="rounded-xl border-2 border-dashed border-brand bg-brand-soft px-3 py-2 text-sm font-bold text-brand-strong">
        🧪 Simulation : aucun paiement réel. En production, cette étape se fait sur la page sécurisée de CinetPay.
      </div>
      <div className="card">
        <p className="text-sm text-muted">Paiement</p>
        <p className="text-xl font-extrabold">{data.plan.name}</p>
        <p className="text-2xl font-extrabold text-brand-strong">{fcfa(data.amountXof)}</p>
      </div>
      <fieldset className="card space-y-2">
        <legend className="label">Moyen de paiement</legend>
        {CHANNELS.map((c) => (
          <label key={c.id} className={`flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-2 ${channel === c.id ? 'border-brand bg-brand-soft' : 'border-line'}`}>
            <input type="radio" name="channel" value={c.id} checked={channel === c.id} onChange={() => setChannel(c.id)} />
            <span aria-hidden>{c.icon}</span> {c.label}
          </label>
        ))}
      </fieldset>
      <div className="grid grid-cols-2 gap-2">
        <button className="btn-ghost" disabled={busy || data.status !== 'PENDING'} onClick={() => void simulate('FAILED')}>
          Simuler un échec
        </button>
        <button className="btn-ok" disabled={busy || data.status !== 'PENDING'} onClick={() => void simulate('SUCCESS')}>
          Payer
        </button>
      </div>
      {data.status !== 'PENDING' && <p className="text-sm text-muted">Ce paiement est déjà terminé.</p>}
      {msg && <p className="text-sm text-danger">{msg}</p>}
    </div>
  );
}

/** Retour de la page de paiement : on attend la confirmation (webhook ou vérification). */
export function PayReturn() {
  const { id } = useParams();
  const { data, error, reload } = useApi<Payment>(`/payments/${id}`);
  const [tries, setTries] = useState(0);

  useEffect(() => {
    if (data?.status !== 'PENDING' || tries >= 20) return;
    const t = setTimeout(() => {
      setTries((n) => n + 1);
      void reload();
    }, 3000);
    return () => clearTimeout(t);
  }, [data, tries, reload]);

  if (error && !data) return <ErrorBox error={error} onRetry={reload} />;
  if (!data) return <Spinner label="Vérification du paiement…" />;

  return (
    <div className="card mt-6 space-y-3 text-center">
      {data.status === 'SUCCESS' && (
        <>
          <p className="text-5xl" aria-hidden>
            🎉
          </p>
          <p className="text-xl font-extrabold">Paiement réussi !</p>
          <p className="text-muted">Ton abonnement « {data.plan.name} » est actif. Bon courage pour tes révisions !</p>
          <Link to="/revisions" className="btn-primary inline-flex">
            Commencer un examen blanc
          </Link>
        </>
      )}
      {data.status === 'FAILED' && (
        <>
          <p className="text-5xl" aria-hidden>
            ❌
          </p>
          <p className="text-xl font-extrabold">Paiement non abouti</p>
          <p className="text-muted">Aucun montant n’a été débité. Vérifie ton solde ou essaie un autre moyen de paiement.</p>
          <Link to="/abonnement" className="btn-primary inline-flex">
            Réessayer
          </Link>
        </>
      )}
      {data.status === 'PENDING' && (
        <>
          <Spinner label="En attente de confirmation…" />
          <p className="text-sm text-muted">
            {tries >= 20 ? 'La confirmation prend du temps. Tu peux fermer cette page : l’abonnement s’activera automatiquement dès réception.' : 'Valide le paiement sur ton téléphone si on te le demande.'}
          </p>
        </>
      )}
    </div>
  );
}
