import { Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

export function audit(
  prisma: PrismaService,
  actorId: string | null,
  action: string,
  entity: string,
  entityId: string | number,
  data?: Prisma.InputJsonValue,
) {
  return prisma.auditLog.create({ data: { actorId, action, entity, entityId: String(entityId), data } });
}
