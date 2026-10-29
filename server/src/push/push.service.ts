import { Injectable, Logger } from '@nestjs/common';
import webpush from 'web-push';
import { PrismaService } from '../common/prisma.service';

export interface PushPayload {
  title: string;
  body: string;
  url?: string;
}

/**
 * Notifications Web Push (standard VAPID, sans service tiers).
 * Désactivées tant que VAPID_PUBLIC_KEY / VAPID_PRIVATE_KEY ne sont pas configurées
 * (générer une paire avec `npx web-push generate-vapid-keys`).
 */
@Injectable()
export class PushService {
  private readonly logger = new Logger('Push');
  readonly enabled: boolean;

  constructor(private readonly prisma: PrismaService) {
    const pub = process.env.VAPID_PUBLIC_KEY;
    const priv = process.env.VAPID_PRIVATE_KEY;
    this.enabled = !!(pub && priv);
    if (this.enabled) webpush.setVapidDetails(process.env.VAPID_SUBJECT ?? 'mailto:contact@examprepa.ci', pub!, priv!);
  }

  publicKey() {
    return { enabled: this.enabled, publicKey: this.enabled ? process.env.VAPID_PUBLIC_KEY : null };
  }

  async subscribe(userId: string, sub: { endpoint: string; keys: { p256dh: string; auth: string } }) {
    await this.prisma.pushSubscription.upsert({
      where: { endpoint: sub.endpoint },
      create: { userId, endpoint: sub.endpoint, p256dh: sub.keys.p256dh, auth: sub.keys.auth },
      update: { userId, p256dh: sub.keys.p256dh, auth: sub.keys.auth },
    });
    return { ok: true };
  }

  async unsubscribe(userId: string, endpoint: string) {
    await this.prisma.pushSubscription.deleteMany({ where: { userId, endpoint } });
    return { ok: true };
  }

  async notify(userId: string, payload: PushPayload) {
    return this.notifyMany([userId], payload);
  }

  /** Envoi « au mieux » : une erreur de notification ne doit jamais faire échouer l'action principale. */
  async notifyMany(userIds: string[], payload: PushPayload) {
    if (!this.enabled || userIds.length === 0) return;
    const subs = await this.prisma.pushSubscription.findMany({ where: { userId: { in: userIds } } });
    await Promise.all(
      subs.map(async (s) => {
        try {
          await webpush.sendNotification({ endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } }, JSON.stringify(payload), { TTL: 3600 * 24 });
        } catch (e) {
          const status = (e as { statusCode?: number }).statusCode;
          // Abonnement expiré ou révoqué par le navigateur
          if (status === 404 || status === 410) await this.prisma.pushSubscription.delete({ where: { id: s.id } }).catch(() => undefined);
          else this.logger.warn(`Échec d'envoi (${status ?? 'réseau'})`);
        }
      }),
    );
  }
}
