import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { audit } from '../common/audit';
import { AuthUser } from '../common/auth';
import { PrismaService } from '../common/prisma.service';
import { PushService } from '../push/push.service';

const userSelect = { id: true, firstName: true, lastName: true, role: true } as const;

/**
 * Messagerie enseignant ↔ élève. On ne peut écrire qu'aux personnes d'une même classe
 * (les administrateurs peuvent écrire à tous). Le client interroge l'API toutes les 15 s :
 * plus économe en données qu'une connexion WebSocket permanente sur les réseaux mobiles.
 */
@Injectable()
export class MessagesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly push: PushService,
  ) {}

  /** Personnes avec qui l'utilisateur peut échanger. */
  async contacts(user: AuthUser) {
    if (user.role === 'STUDENT') {
      const classes = await this.prisma.classroom.findMany({
        where: { members: { some: { userId: user.id } }, archived: false },
        select: { name: true, teacher: { select: userSelect } },
      });
      return classes.map((c) => ({ ...c.teacher, context: c.name }));
    }
    const where = user.role === 'TEACHER' ? { classroom: { teacherId: user.id } } : {};
    const members = await this.prisma.classMember.findMany({
      where,
      select: { user: { select: userSelect }, classroom: { select: { name: true } } },
      take: 500,
    });
    const seen = new Map<string, { id: string; firstName: string; lastName: string; role: string; context: string }>();
    members.forEach((m) => seen.set(m.user.id, { ...m.user, context: m.classroom.name }));
    return [...seen.values()];
  }

  private async canWrite(user: AuthUser, toId: string) {
    if (user.role === 'ADMIN') return true;
    const to = await this.prisma.user.findUnique({ where: { id: toId }, select: { role: true } });
    if (!to) return false;
    if (to.role === 'ADMIN') return true; // tout le monde peut écrire au support
    const [teacherId, studentId] = user.role === 'TEACHER' ? [user.id, toId] : [toId, user.id];
    const shared = await this.prisma.classMember.count({ where: { userId: studentId, classroom: { teacherId } } });
    return shared > 0;
  }

  async send(user: AuthUser, toId: string, body: string) {
    if (toId === user.id) throw new ForbiddenException();
    if (!(await this.canWrite(user, toId))) throw new ForbiddenException('Vous ne partagez aucune classe avec cette personne');
    const m = await this.prisma.message.create({ data: { fromId: user.id, toId, body: body.trim() } });
    const from = await this.prisma.user.findUnique({ where: { id: user.id }, select: { firstName: true, lastName: true } });
    void this.push.notify(toId, { title: `💬 ${from?.firstName} ${from?.lastName}`, body: body.slice(0, 120), url: `/messages/${user.id}` });
    return m;
  }

  async threads(user: AuthUser) {
    const msgs = await this.prisma.message.findMany({
      where: { OR: [{ fromId: user.id }, { toId: user.id }], hiddenAt: null },
      orderBy: { createdAt: 'desc' },
      take: 500,
      include: { from: { select: userSelect }, to: { select: userSelect } },
    });
    const threads = new Map<string, { with: unknown; last: { body: string; createdAt: Date; mine: boolean }; unread: number }>();
    for (const m of msgs) {
      const other = m.fromId === user.id ? m.to : m.from;
      const t = threads.get(other.id) ?? { with: other, last: { body: m.body, createdAt: m.createdAt, mine: m.fromId === user.id }, unread: 0 };
      if (m.toId === user.id && !m.readAt) t.unread++;
      threads.set(other.id, t);
    }
    return [...threads.values()];
  }

  async unreadCount(user: AuthUser) {
    return { unread: await this.prisma.message.count({ where: { toId: user.id, readAt: null, hiddenAt: null } }) };
  }

  async thread(user: AuthUser, otherId: string) {
    const other = await this.prisma.user.findUnique({ where: { id: otherId }, select: userSelect });
    if (!other) throw new NotFoundException('Utilisateur introuvable');
    const messages = await this.prisma.message.findMany({
      where: {
        hiddenAt: null,
        OR: [
          { fromId: user.id, toId: otherId },
          { fromId: otherId, toId: user.id },
        ],
      },
      orderBy: { createdAt: 'asc' },
      take: 200,
      select: { id: true, fromId: true, body: true, createdAt: true, readAt: true, flaggedAt: true },
    });
    await this.prisma.message.updateMany({ where: { fromId: otherId, toId: user.id, readAt: null }, data: { readAt: new Date() } });
    return { with: other, canWrite: await this.canWrite(user, otherId), messages };
  }

  async report(user: AuthUser, id: number, reason: string) {
    const m = await this.prisma.message.findUnique({ where: { id } });
    if (!m || m.toId !== user.id) throw new NotFoundException();
    await this.prisma.message.update({ where: { id }, data: { flaggedAt: new Date(), flagReason: reason } });
    return { ok: true };
  }

  // ── Modération (administrateurs)
  reports() {
    return this.prisma.message.findMany({
      where: { flaggedAt: { not: null } },
      orderBy: { flaggedAt: 'desc' },
      take: 100,
      include: { from: { select: userSelect }, to: { select: userSelect } },
    });
  }

  async moderate(admin: AuthUser, id: number, hide: boolean) {
    const m = await this.prisma.message.update({
      where: { id },
      data: hide ? { hiddenAt: new Date() } : { flaggedAt: null, flagReason: null, hiddenAt: null },
    });
    await audit(this.prisma, admin.id, hide ? 'message.hide' : 'message.restore', 'message', id);
    return m;
  }
}
