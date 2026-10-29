import { ForbiddenException } from '@nestjs/common';
import { AuthUser } from './auth';
import { PrismaService } from './prisma.service';

/**
 * Élèves visibles par un enseignant : les membres de ses classes.
 * Renvoie null pour un administrateur (accès à tous les élèves).
 */
export async function visibleStudentIds(prisma: PrismaService, user: AuthUser): Promise<string[] | null> {
  if (user.role === 'ADMIN') return null;
  if (user.role !== 'TEACHER') return [user.id];
  const members = await prisma.classMember.findMany({
    where: { classroom: { teacherId: user.id } },
    select: { userId: true },
  });
  return [...new Set(members.map((m) => m.userId))];
}

export async function assertCanSeeStudent(prisma: PrismaService, user: AuthUser, studentId: string) {
  if (user.role === 'STUDENT' && user.id !== studentId) throw new ForbiddenException();
  const ids = await visibleStudentIds(prisma, user);
  if (ids && !ids.includes(studentId)) throw new ForbiddenException('Cet élève ne fait pas partie de vos classes');
}
