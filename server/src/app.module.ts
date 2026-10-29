import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { AdminController, AdminService } from './admin/admin.controller';
import { AssessmentsController } from './assessments/assessments.controller';
import { AssessmentsService } from './assessments/assessments.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './common/auth';
import { PrismaModule } from './common/prisma.service';
import { SmsService } from './common/sms.service';
import { ContentController } from './content/content.controller';
import { ContentService } from './content/content.service';
import { CurriculumController } from './curriculum/curriculum.controller';
import { CurriculumService } from './curriculum/curriculum.service';
import { ProgressController } from './progress/progress.controller';
import { ProgressService } from './progress/progress.service';
import { UploadsController } from './uploads/uploads.controller';
import { ChallengesController } from './challenges/challenges.controller';
import { ChallengesService } from './challenges/challenges.service';
import { ClassesController } from './classes/classes.controller';
import { ClassesService } from './classes/classes.service';
import { AuthoringService } from './content/authoring';
import { MessagesController } from './messages/messages.controller';
import { MessagesService } from './messages/messages.service';
import { PaymentsController } from './payments/payments.controller';
import { PaymentsService } from './payments/payments.service';
import { PushController } from './push/push.controller';
import { PushService } from './push/push.service';
import { AiController } from './ai/ai.controller';
import { AiService } from './ai/ai.service';

@Module({
  imports: [
    PrismaModule,
    ThrottlerModule.forRoot([{ ttl: 60_000, limit: 300 }]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30d' },
    }),
  ],
  controllers: [
    AuthController,
    CurriculumController,
    AssessmentsController,
    ProgressController,
    ContentController,
    AdminController,
    UploadsController,
    ClassesController,
    MessagesController,
    PushController,
    PaymentsController,
    ChallengesController,
    AiController,
  ],
  providers: [
    { provide: APP_GUARD, useClass: ThrottlerGuard },
    { provide: APP_GUARD, useClass: AuthGuard },
    SmsService,
    AuthService,
    CurriculumService,
    AssessmentsService,
    ProgressService,
    ContentService,
    AdminService,
    PushService,
    PaymentsService,
    ClassesService,
    MessagesService,
    ChallengesService,
    AuthoringService,
    AiService,
  ],
})
export class AppModule {}
