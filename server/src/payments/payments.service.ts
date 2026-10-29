import { BadRequestException, ForbiddenException, HttpException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { randomUUID } from 'crypto';
import { audit } from '../common/audit';
import { AuthUser } from '../common/auth';
import { PrismaService } from '../common/prisma.service';
import { createProvider, PaymentProvider } from './providers';

export class PaymentRequiredException extends HttpException {
  constructor(message = 'Cette fonction est réservée aux abonnés. Abonne-toi pour y accéder.') {
    super({ statusCode: 402, message, error: 'Payment Required' }, 402);
  }
}

@Injectable()
export class PaymentsService {
  private readonly logger = new Logger('Payments');
  private readonly provider: PaymentProvider = createProvider();
  /** PAYWALL_ENABLED=false rend tout gratuit (pilote, établissement partenaire…). */
  readonly paywall = process.env.PAYWALL_ENABLED !== 'false';

  constructor(private readonly prisma: PrismaService) {}

  async activeSubscription(userId: string) {
    return this.prisma.subscription.findFirst({
      where: { userId, endsAt: { gt: new Date() }, startsAt: { lte: new Date() } },
      orderBy: { endsAt: 'desc' },
      include: { plan: { select: { code: true, name: true } } },
    });
  }

  async hasPremium(user: AuthUser) {
    if (!this.paywall || user.role !== 'STUDENT') return true;
    return !!(await this.activeSubscription(user.id));
  }

  async requirePremium(user: AuthUser) {
    if (!(await this.hasPremium(user))) throw new PaymentRequiredException();
  }

  async status(user: AuthUser) {
    const sub = await this.activeSubscription(user.id);
    return { paywall: this.paywall, premium: !this.paywall || user.role !== 'STUDENT' || !!sub, subscription: sub, provider: this.provider.name };
  }

  async plans(user: AuthUser) {
    const profile = await this.prisma.studentProfile.findUnique({ where: { userId: user.id } });
    return this.prisma.plan.findMany({
      where: { active: true, OR: [{ examId: null }, ...(profile ? [{ examId: profile.examId }] : [])] },
      orderBy: { priceXof: 'asc' },
    });
  }

  async start(user: AuthUser, planId: number) {
    const plan = await this.prisma.plan.findUnique({ where: { id: planId } });
    if (!plan || !plan.active) throw new NotFoundException('Offre introuvable');
    if (plan.priceXof % 5 !== 0) throw new BadRequestException('Montant invalide');
    const u = await this.prisma.user.findUniqueOrThrow({ where: { id: user.id } });
    const id = randomUUID().replace(/-/g, '').slice(0, 24); // identifiant court sans caractères spéciaux
    await this.prisma.payment.create({ data: { id, userId: user.id, planId, amountXof: plan.priceXof, provider: this.provider.name } });
    const apiUrl = process.env.API_PUBLIC_URL ?? `http://localhost:${process.env.PORT ?? 4300}`;
    const appUrl = process.env.APP_URL ?? 'http://localhost:5174';
    try {
      const { redirectUrl, providerRef } = await this.provider.init({
        transactionId: id,
        amountXof: plan.priceXof,
        description: `ExamPrepa CI ${plan.name}`,
        customer: { firstName: u.firstName, lastName: u.lastName, phone: u.phone, email: u.email },
        notifyUrl: `${apiUrl}/api/payments/webhook/cinetpay`,
        returnUrl: `${appUrl}/paiement/retour/${id}`,
      });
      if (providerRef) await this.prisma.payment.update({ where: { id }, data: { providerRef } });
      return { paymentId: id, redirectUrl };
    } catch (e) {
      await this.prisma.payment.update({ where: { id }, data: { status: 'FAILED' } });
      throw new BadRequestException((e as Error).message);
    }
  }

  async get(user: AuthUser, id: string) {
    let p = await this.prisma.payment.findUnique({ where: { id }, include: { plan: true } });
    if (!p || (p.userId !== user.id && user.role !== 'ADMIN')) throw new NotFoundException();
    // Au retour de la page de paiement, on revérifie si le webhook n'est pas encore arrivé.
    if (p.status === 'PENDING' && this.provider.name !== 'mock') {
      await this.confirm(id);
      p = await this.prisma.payment.findUnique({ where: { id }, include: { plan: true } });
    }
    return p;
  }

  /** Vérifie un paiement auprès de l'agrégateur et active l'abonnement (idempotent). */
  async confirm(id: string) {
    const p = await this.prisma.payment.findUnique({ where: { id } });
    if (!p || p.status !== 'PENDING') return p;
    const result = await this.provider.check(id);
    if (result.status === 'PENDING') return p;
    return this.finalize(id, result.status, result.channel, result.raw);
  }

  private async finalize(id: string, status: 'SUCCESS' | 'FAILED', channel?: string, raw?: unknown) {
    return this.prisma.$transaction(async (tx) => {
      const p = await tx.payment.findUniqueOrThrow({ where: { id }, include: { plan: true } });
      if (p.status !== 'PENDING') return p;
      const updated = await tx.payment.update({
        where: { id },
        data: { status, channel, raw: (raw ?? Prisma.JsonNull) as Prisma.InputJsonValue },
      });
      if (status === 'SUCCESS') {
        // L'abonnement prolonge un abonnement encore actif plutôt que de le remplacer.
        const current = await tx.subscription.findFirst({ where: { userId: p.userId, endsAt: { gt: new Date() } }, orderBy: { endsAt: 'desc' } });
        const startsAt = current ? current.endsAt : new Date();
        await tx.subscription.create({
          data: { userId: p.userId, planId: p.planId, paymentId: id, startsAt, endsAt: new Date(startsAt.getTime() + p.plan.durationDays * 24 * 3600 * 1000) },
        });
      }
      return updated;
    });
  }

  /** Webhook CinetPay : on ignore le contenu et on revérifie le statut à la source. */
  async webhook(transactionId?: string) {
    if (!transactionId) return { ok: false };
    try {
      await this.confirm(transactionId);
    } catch (e) {
      this.logger.error(`Webhook ${transactionId} : ${(e as Error).message}`);
    }
    return { ok: true };
  }

  /** Simulation (fournisseur « mock » uniquement) : l'élève choisit l'issue sur la page de démonstration. */
  async simulate(user: AuthUser, id: string, outcome: 'SUCCESS' | 'FAILED', channel: string) {
    if (this.provider.name !== 'mock') throw new ForbiddenException('Simulation désactivée');
    const p = await this.prisma.payment.findUnique({ where: { id } });
    if (!p || p.userId !== user.id) throw new NotFoundException();
    return this.finalize(id, outcome, channel, { simulated: true });
  }

  // ── Administration
  async adminOverview() {
    const [payments, revenue, activeSubs, plans] = await Promise.all([
      this.prisma.payment.findMany({
        orderBy: { createdAt: 'desc' },
        take: 100,
        include: { user: { select: { firstName: true, lastName: true, phone: true } }, plan: { select: { name: true } } },
      }),
      this.prisma.payment.aggregate({ where: { status: 'SUCCESS' }, _sum: { amountXof: true }, _count: true }),
      this.prisma.subscription.count({ where: { endsAt: { gt: new Date() } } }),
      this.prisma.plan.findMany({ orderBy: { priceXof: 'asc' }, include: { exam: { select: { code: true } } } }),
    ]);
    return { payments, revenueXof: revenue._sum.amountXof ?? 0, successCount: revenue._count, activeSubs, plans, provider: this.provider.name };
  }

  async updatePlan(admin: AuthUser, id: number, dto: { priceXof?: number; active?: boolean; name?: string }) {
    if (dto.priceXof !== undefined && dto.priceXof % 5 !== 0) throw new BadRequestException('Le prix doit être un multiple de 5 FCFA');
    const plan = await this.prisma.plan.update({ where: { id }, data: dto });
    await audit(this.prisma, admin.id, 'plan.update', 'plan', id, { ...dto });
    return plan;
  }

  /** Abonnement offert (licence établissement, geste commercial, support). */
  async grant(admin: AuthUser, userId: string, planId: number) {
    const plan = await this.prisma.plan.findUnique({ where: { id: planId } });
    if (!plan) throw new NotFoundException('Offre introuvable');
    const current = await this.prisma.subscription.findFirst({ where: { userId, endsAt: { gt: new Date() } }, orderBy: { endsAt: 'desc' } });
    const startsAt = current ? current.endsAt : new Date();
    const sub = await this.prisma.subscription.create({
      data: { userId, planId, startsAt, endsAt: new Date(startsAt.getTime() + plan.durationDays * 24 * 3600 * 1000) },
    });
    await audit(this.prisma, admin.id, 'subscription.grant', 'user', userId, { planId });
    return sub;
  }
}
