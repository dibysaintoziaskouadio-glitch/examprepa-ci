import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import { randomUUID } from 'crypto';
import { gradeItem } from '../src/assessments/grading';
import { normalizePhone } from '../src/common/phone';
import { PrismaService } from '../src/common/prisma.service';
import { AuthoringService } from '../src/content/authoring';
import { PushService } from '../src/push/push.service';
import { BEPC_CHAPTERS } from './content/bepc';
import { SeedChapter } from './content/types';

const prisma = new PrismaClient();

/*
 * ⚠️ Coefficients : valeurs provisoires (1). À remplacer par les coefficients officiels
 * de la DECO avant tout calcul de moyenne « réelle ». Même remarque pour la liste des
 * séries et des matières du BAC, à valider auprès du MENA / de la DECO.
 */
const SUBJECTS = [
  { code: 'MATH', name: 'Mathématiques', icon: '📐', color: '#FF6B00' },
  { code: 'FR', name: 'Français', icon: '📖', color: '#2563EB' },
  { code: 'ANG', name: 'Anglais', icon: '💬', color: '#7C3AED' },
  { code: 'PC', name: 'Physique-Chimie', icon: '⚗️', color: '#0891B2' },
  { code: 'SVT', name: 'SVT', icon: '🌱', color: '#00A651' },
  { code: 'HG', name: 'Histoire-Géographie', icon: '🌍', color: '#B45309' },
  { code: 'EDHC', name: 'EDHC', icon: '⚖️', color: '#DB2777' },
  { code: 'ESP', name: 'Espagnol', icon: '🎸', color: '#DC2626' },
  { code: 'ALL', name: 'Allemand', icon: '🏰', color: '#0F766E' },
  { code: 'EPS', name: 'EPS', icon: '⚽', color: '#16A34A' },
  { code: 'PHILO', name: 'Philosophie', icon: '🤔', color: '#4F46E5' },
  { code: 'PA', name: 'Physique appliquée', icon: '🔌', color: '#0E7490' },
  { code: 'TECH', name: 'Technique', icon: '⚙️', color: '#475569' },
  { code: 'ECO', name: 'Économie', icon: '📊', color: '#CA8A04' },
  { code: 'DROIT', name: 'Droit', icon: '🏛️', color: '#9333EA' },
  { code: 'COMPTA', name: 'Comptabilité', icon: '🧾', color: '#059669' },
];

// L'élève suit l'une des deux LV2 (espagnol ou allemand) ; l'EPS est une épreuve pratique, sans cours écrit.
const BEPC_SUBJECTS = ['MATH', 'FR', 'ANG', 'PC', 'SVT', 'HG', 'EDHC', 'ESP', 'ALL', 'EPS'];

const BAC_SERIES: { code: string; name: string; subjects: string[] }[] = [
  { code: 'A1', name: 'Série A1 (Littéraire)', subjects: ['FR', 'PHILO', 'HG', 'ANG', 'MATH', 'SVT', 'ESP', 'ALL'] },
  { code: 'A2', name: 'Série A2 (Littéraire)', subjects: ['FR', 'PHILO', 'HG', 'ANG', 'MATH', 'SVT', 'ESP', 'ALL'] },
  { code: 'C', name: 'Série C (Mathématiques et Sciences physiques)', subjects: ['MATH', 'PC', 'SVT', 'PHILO', 'FR', 'ANG', 'HG'] },
  { code: 'D', name: 'Série D (Sciences de la Nature)', subjects: ['MATH', 'PC', 'SVT', 'PHILO', 'FR', 'ANG', 'HG'] },
  { code: 'E', name: 'Série E (Mathématiques et Technique)', subjects: ['MATH', 'PA', 'TECH', 'PHILO', 'FR', 'ANG'] },
  { code: 'F', name: 'Série F (Techniques industrielles)', subjects: ['MATH', 'PA', 'TECH', 'PHILO', 'FR', 'ANG'] },
  { code: 'G1', name: 'Série G1 (Gestion)', subjects: ['ECO', 'DROIT', 'COMPTA', 'MATH', 'FR', 'ANG', 'PHILO'] },
  { code: 'G2', name: 'Série G2 (Gestion)', subjects: ['ECO', 'DROIT', 'COMPTA', 'MATH', 'FR', 'ANG', 'PHILO'] },
  { code: 'H', name: 'Série H (Techniques administratives)', subjects: ['DROIT', 'ECO', 'COMPTA', 'FR', 'ANG'] },
];

async function createChapter(c: SeedChapter, examId: number, subjectIds: Map<string, number>) {
  return prisma.chapter.create({
    data: {
      subjectId: subjectIds.get(c.subject)!,
      examId,
      orderIndex: c.order,
      title: c.title,
      objectives: c.objectives,
      estimatedMinutes: c.minutes,
      // Le premier chapitre de chaque matière est gratuit (cours, quiz et devoir) pour découvrir l'appli.
      isFree: c.isFree ?? c.order === 1,
      officialRef: c.officialRef,
      seriesCodes: c.series ?? [],
      status: 'PUBLISHED',
      courseMd: c.courseMd.trim(),
      summaryMd: c.summaryMd.trim(),
      questions: {
        create: c.questions.map((q, i) => ({
          orderIndex: i + 1,
          type: q.type,
          prompt: q.prompt,
          choices: q.choices ?? [],
          answer: q.answer as object,
          explanation: q.explanation,
        })),
      },
      assessments: {
        create: {
          title: c.assessment.title,
          instructions: c.assessment.instructions.trim(),
          advice: c.assessment.advice.trim(),
          durationMin: c.assessment.durationMin,
          passMark: c.assessment.passMark ?? 10,
          // Verrouillage désactivé par défaut : chaque enseignant peut l'activer depuis l'éditeur.
          blocksNext: false,
          items: {
            create: c.assessment.items.map((it, i) => ({
              orderIndex: i + 1,
              section: it.section,
              sectionIntro: it.sectionIntro,
              prompt: it.prompt,
              type: it.type,
              choices: it.choices ?? [],
              answer: it.answer as object,
              points: it.points,
              resultPoints: it.resultPoints ?? 0,
              correction: it.correction,
            })),
          },
        },
      },
    },
    include: { assessments: { include: { items: true } } },
  });
}

async function main() {
  if (await prisma.country.findUnique({ where: { code: 'CI' } })) {
    console.log('Base déjà initialisée. Pour repartir de zéro : npm run db:reset');
    return;
  }

  const ci = await prisma.country.create({ data: { code: 'CI', name: "Côte d'Ivoire", currency: 'XOF' } });

  const subjectIds = new Map<string, number>();
  for (const s of SUBJECTS) {
    const created = await prisma.subject.create({ data: { ...s, countryId: ci.id } });
    subjectIds.set(s.code, created.id);
  }

  const bepc = await prisma.exam.create({
    data: { countryId: ci.id, code: 'BEPC', name: 'BEPC', gradeLevel: '3ème', series: { create: { code: 'UNIQUE', name: 'BEPC' } } },
    include: { series: true },
  });
  const bepcSeries = bepc.series[0];
  await prisma.seriesSubject.createMany({
    data: BEPC_SUBJECTS.map((code) => ({ seriesId: bepcSeries.id, subjectId: subjectIds.get(code)!, coefficient: 1 })),
  });

  const bac = await prisma.exam.create({ data: { countryId: ci.id, code: 'BAC', name: 'Baccalauréat', gradeLevel: 'Terminale' } });
  for (const s of BAC_SERIES) {
    const series = await prisma.series.create({ data: { examId: bac.id, code: s.code, name: s.name } });
    await prisma.seriesSubject.createMany({
      data: s.subjects.map((code) => ({ seriesId: series.id, subjectId: subjectIds.get(code)!, coefficient: 1, examDurationMin: 240 })),
    });
  }

  const chapters = new Map<string, Awaited<ReturnType<typeof createChapter>>>();
  for (const c of BEPC_CHAPTERS) {
    chapters.set(`${c.subject}-${c.order}`, await createChapter(c, bepc.id, subjectIds));
  }

  // ── Offres d'abonnement (prix indicatifs, modifiables dans l'espace admin)
  await prisma.plan.createMany({
    data: [
      { code: 'BEPC_MONTH', name: 'BEPC — 1 mois', description: 'Tous les devoirs, examens blancs et annales du BEPC pendant 30 jours.', priceXof: 1000, durationDays: 30, examId: bepc.id },
      { code: 'BEPC_YEAR', name: 'BEPC — jusqu’à l’examen', description: 'Accès complet jusqu’au BEPC (10 mois).', priceXof: 5000, durationDays: 300, examId: bepc.id },
      { code: 'BAC_MONTH', name: 'BAC — 1 mois', description: 'Tous les devoirs, examens blancs et annales du BAC pendant 30 jours.', priceXof: 1500, durationDays: 30, examId: bac.id },
      { code: 'BAC_YEAR', name: 'BAC — jusqu’à l’examen', description: 'Accès complet jusqu’au BAC (10 mois).', priceXof: 7500, durationDays: 300, examId: bac.id },
    ],
  });

  // ── Un examen blanc par matière écrite du BEPC, composé d'exercices de chapitres différents
  const authoring = new AuthoringService(prisma as unknown as PrismaService, {} as PushService);
  let mocks = 0;
  for (const code of BEPC_SUBJECTS.filter((c) => c !== 'EPS')) {
    try {
      await authoring.generateMock(null, subjectIds.get(code)!, bepc.id);
      mocks++;
    } catch (e) {
      console.warn(`  (pas d'examen blanc pour ${code} : ${(e as Error).message})`);
    }
  }

  // ── Production : pas de comptes de démonstration (mots de passe publics), seulement l'administrateur initial
  if (process.env.SEED_DEMO === 'false') {
    const phone = process.env.ADMIN_PHONE;
    const password = process.env.ADMIN_PASSWORD;
    if (!phone || !password || password.length < 12) throw new Error('SEED_DEMO=false : ADMIN_PHONE et ADMIN_PASSWORD (12 caractères min.) sont requis');
    await prisma.user.create({
      data: { phone: normalizePhone(phone), firstName: 'Admin', lastName: 'ExamPrepa', role: 'ADMIN', passwordHash: await bcrypt.hash(password, 10) },
    });
    console.log(`✔ Base initialisée : ${chapters.size} chapitres BEPC, ${mocks} examens blancs. Administrateur : ${phone}`);
    return;
  }

  // ── Comptes de démonstration
  const hash = (pw: string) => bcrypt.hash(pw, 10);
  await prisma.user.create({
    data: { phone: '+2250700000001', firstName: 'Admin', lastName: 'ExamPrepa', role: 'ADMIN', passwordHash: await hash('Admin2026!') },
  });
  const teacher = await prisma.user.create({
    data: {
      phone: '+2250700000002',
      firstName: 'Mariam',
      lastName: 'Traoré',
      role: 'TEACHER',
      passwordHash: await hash('Prof2026!'),
      teacher: { create: { schoolName: 'Lycée moderne de Cocody', subjects: ['MATH'], validatedAt: new Date() } },
    },
  });
  await prisma.user.create({
    data: {
      phone: '+2250500000004',
      firstName: 'Ibrahim',
      lastName: 'Koné',
      role: 'TEACHER',
      status: 'PENDING',
      passwordHash: await hash('Prof2026!'),
      teacher: { create: { schoolName: 'Collège moderne de Bouaké', subjects: ['PC', 'SVT'] } },
    },
  });
  const year = new Date().getMonth() >= 8 ? new Date().getFullYear() + 1 : new Date().getFullYear();
  const student = await prisma.user.create({
    data: {
      phone: '+2250700000003',
      firstName: 'Aya',
      lastName: 'Kouassi',
      role: 'STUDENT',
      passwordHash: await hash('Eleve2026!'),
      student: { create: { examId: bepc.id, seriesId: bepcSeries.id, schoolName: 'Collège moderne du Plateau', city: 'Abidjan', examYear: year, targetAverage: 14 } },
    },
  });

  // ── Classe de démonstration : Mariam et son élève Aya
  await prisma.classroom.create({
    data: {
      name: '3ème 2 — Mathématiques',
      code: 'MATH3A',
      schoolName: 'Collège moderne du Plateau',
      teacherId: teacher.id,
      examId: bepc.id,
      members: { create: { userId: student.id } },
      announcements: { create: { authorId: teacher.id, body: 'Bienvenue dans la classe ! Le devoir sur le calcul littéral est à rendre avant vendredi.' } },
    },
  });

  // ── Historique de démonstration pour Aya : « Calcul littéral » terminé et corrigé
  const cl = chapters.get('MATH-1')!;
  const exam = cl.assessments[0];
  const correct = new Set([0, 1, 2, 4, 5, 6, 8, 9, 11, 12, 14]);
  const started = new Date(Date.now() - 3 * 24 * 3600 * 1000);
  const answers = exam.items
    .sort((a, b) => a.orderIndex - b.orderIndex)
    .map((item, i) => {
      const key = item.answer as { index?: number; value?: number };
      const ok = correct.has(i);
      const response =
        item.type === 'MCQ'
          ? { choice: ok ? key.index! : (key.index! + 1) % item.choices.length }
          : item.type === 'NUMERIC'
            ? { value: String(ok ? key.value : 0), work: 'Démarche rédigée.' }
            : { text: 'Réponse rédigée par l’élève.' };
      const g = gradeItem(item, response);
      // Correction enseignante simulée : points complets si juste, moitié sinon, pour les parties rédigées.
      const manualPoints = g.needsManual ? (ok ? item.points : Math.round(item.points * 2) / 4) : null;
      return { itemId: item.id, response, ...g, manualPoints };
    });
  const score = Math.round(answers.reduce((sum, a) => sum + (a.manualPoints ?? a.autoPoints), 0) * 100) / 100;
  const submittedAt = new Date(started.getTime() + 95 * 60 * 1000);
  await prisma.attempt.create({
    data: {
      id: randomUUID(),
      userId: student.id,
      assessmentId: exam.id,
      startedAt: started,
      submittedAt,
      timeSpentS: 95 * 60,
      status: 'GRADED',
      autoScore: answers.reduce((sum, a) => sum + a.autoPoints, 0),
      finalScore: score,
      teacherComment: 'Bon travail ! Revois les identités remarquables.',
      gradedById: teacher.id,
      gradedAt: new Date(submittedAt.getTime() + 24 * 3600 * 1000),
      answers: { create: answers },
    },
  });
  await prisma.chapterProgress.create({
    data: { userId: student.id, chapterId: cl.id, courseDone: true, summaryDone: true, quizBest: 80, examBest: score },
  });
  await prisma.quizResult.create({ data: { id: randomUUID(), userId: student.id, chapterId: cl.id, score: 12, total: 15 } });
  await prisma.chapterProgress.create({ data: { userId: student.id, chapterId: chapters.get('MATH-2')!.id, courseDone: true } });
  await prisma.userBadge.create({ data: { userId: student.id, code: 'BRONZE' } });

  console.log(`✔ Base initialisée : ${chapters.size} chapitres BEPC, ${mocks} examens blancs, ${BAC_SERIES.length} séries de BAC. Note de démo d’Aya : ${score}/20.`);
  console.log('  Comptes de démonstration (téléphone / mot de passe) :');
  console.log('  • Élève       07 00 00 00 03 / Eleve2026!');
  console.log('  • Enseignant  07 00 00 00 02 / Prof2026!');
  console.log('  • Admin       07 00 00 00 01 / Admin2026!');
  console.log('  • Enseignant en attente : 05 00 00 00 04 (à valider dans l’espace admin)');
  console.log('  Classe de démonstration : code MATH3A (Mariam Traoré, avec Aya).');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
