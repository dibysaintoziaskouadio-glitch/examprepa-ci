import { api } from './api';

/** Notifications push (Web Push, clés VAPID). Disponibles seulement si le serveur est configuré. */
export const pushSupported = () => 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;

function keyBytes(base64: string) {
  const pad = '='.repeat((4 - (base64.length % 4)) % 4);
  const raw = atob((base64 + pad).replace(/-/g, '+').replace(/_/g, '/'));
  return Uint8Array.from(raw, (c) => c.charCodeAt(0));
}

export async function pushState(): Promise<'unsupported' | 'disabled' | 'denied' | 'on' | 'off'> {
  if (!pushSupported()) return 'unsupported';
  const { enabled } = await api<{ enabled: boolean }>('/push/key');
  if (!enabled) return 'disabled';
  if (Notification.permission === 'denied') return 'denied';
  const reg = await navigator.serviceWorker.ready;
  return (await reg.pushManager.getSubscription()) ? 'on' : 'off';
}

export async function enablePush() {
  const { publicKey } = await api<{ enabled: boolean; publicKey: string | null }>('/push/key');
  if (!publicKey) throw new Error('Notifications non configurées sur le serveur');
  if ((await Notification.requestPermission()) !== 'granted') throw new Error('Autorise les notifications dans les réglages du navigateur');
  const reg = await navigator.serviceWorker.ready;
  const sub = (await reg.pushManager.getSubscription()) ?? (await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: keyBytes(publicKey) }));
  const json = sub.toJSON();
  await api('/push/subscribe', { body: { endpoint: json.endpoint, keys: json.keys } });
}

export async function disablePush() {
  const reg = await navigator.serviceWorker.ready;
  const sub = await reg.pushManager.getSubscription();
  if (!sub) return;
  await api('/push/subscribe', { method: 'DELETE', body: { endpoint: sub.endpoint } }).catch(() => undefined);
  await sub.unsubscribe();
}
