import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  SetMetadata,
  UnauthorizedException,
  createParamDecorator,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Role } from '@prisma/client';
import { PrismaService } from './prisma.service';

export interface AuthUser {
  id: string;
  role: Role;
}

const IS_PUBLIC = 'isPublic';
const ROLES = 'roles';

/** Route accessible sans connexion. */
export const Public = () => SetMetadata(IS_PUBLIC, true);
/** Restreint la route aux rôles listés. */
export const Roles = (...roles: Role[]) => SetMetadata(ROLES, roles);

export const CurrentUser = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): AuthUser => ctx.switchToHttp().getRequest().user,
);

export const isStaff = (u: AuthUser) => u.role === 'TEACHER' || u.role === 'ADMIN';

/**
 * Garde globale : vérifie le JWT, puis relit le statut et le rôle en base
 * pour qu'une suspension ou un changement de rôle prenne effet immédiatement.
 */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwt: JwtService,
    private readonly reflector: Reflector,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const targets = [ctx.getHandler(), ctx.getClass()];
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC, targets);
    if (isPublic) return true;

    const req = ctx.switchToHttp().getRequest();
    const header: string | undefined = req.headers.authorization;
    const token = header?.startsWith('Bearer ') ? header.slice(7) : undefined;
    if (!token) throw new UnauthorizedException('Connexion requise');

    let payload: { sub: string };
    try {
      payload = await this.jwt.verifyAsync(token);
    } catch {
      throw new UnauthorizedException('Session expirée, reconnecte-toi');
    }
    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
      select: { id: true, role: true, status: true },
    });
    if (!user) throw new UnauthorizedException();
    if (user.status !== 'ACTIVE') throw new ForbiddenException('Compte inactif ou en attente de validation');

    const roles = this.reflector.getAllAndOverride<Role[]>(ROLES, targets);
    if (roles?.length && !roles.includes(user.role)) throw new ForbiddenException('Accès réservé');
    req.user = { id: user.id, role: user.role } satisfies AuthUser;
    return true;
  }
}
