import {
  BadRequestException,
  Controller,
  ForbiddenException,
  Get,
  NotFoundException,
  Param,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { randomUUID } from 'crypto';
import { Request, Response } from 'express';
import { existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';
import { join } from 'path';
import { UPLOAD_NAME } from '../assessments/assessments.service';
import { AuthUser, CurrentUser, isStaff } from '../common/auth';

const DIR = join(process.cwd(), 'uploads');
const EXT: Record<string, string> = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp' };

/**
 * Photos de copies. Elles ne sont jamais servies publiquement :
 * seuls l'élève (préfixe du nom de fichier) et le personnel enseignant peuvent les lire.
 */
@Controller('uploads')
export class UploadsController {
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      limits: { fileSize: 4 * 1024 * 1024 },
      fileFilter: (_req, file, cb) =>
        EXT[file.mimetype] ? cb(null, true) : cb(new BadRequestException('Image JPEG, PNG ou WebP attendue'), false),
      storage: diskStorage({
        destination: (_req, _file, cb) => {
          mkdirSync(DIR, { recursive: true });
          cb(null, DIR);
        },
        filename: (req: Request, file, cb) => cb(null, `${(req.user as AuthUser).id}_${randomUUID()}.${EXT[file.mimetype]}`),
      }),
    }),
  )
  upload(@UploadedFile() file?: Express.Multer.File) {
    if (!file) throw new BadRequestException('Aucun fichier reçu');
    return { name: file.filename };
  }

  @Get(':name')
  get(@CurrentUser() user: AuthUser, @Param('name') name: string, @Res() res: Response) {
    if (!UPLOAD_NAME.test(name)) throw new NotFoundException();
    if (!name.startsWith(`${user.id}_`) && !isStaff(user)) throw new ForbiddenException();
    const path = join(DIR, name);
    if (!existsSync(path)) throw new NotFoundException();
    res.setHeader('Cache-Control', 'private, max-age=86400');
    res.sendFile(path);
  }
}

declare module 'express' {
  interface Request {
    user?: AuthUser;
  }
}
