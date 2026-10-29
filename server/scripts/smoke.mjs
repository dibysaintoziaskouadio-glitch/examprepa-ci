// Test de bout en bout de l'API (rejouable : chaque exécution crée ses propres comptes).
// Usage : node scripts/smoke.mjs [http://localhost:4300/api]
import { randomUUID } from 'node:crypto';
import assert from 'node:assert/strict';

const API = process.argv[2] ?? 'http://localhost:4300/api';
let step = 0;

async function call(path, { token, method, body } = {}) {
  const res = await fetch(API + path, {
    method: method ?? (body ? 'POST' : 'GET'),
    headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => null);
  return { status: res.status, data };
}
const ok = (label) => console.log(`✔ ${++step}. ${label}`);

// 1. Inscription d'un élève avec OTP
const phone = `07${String(Date.now()).slice(-8)}`;
const otp = await call('/auth/otp', { body: { phone, purpose: 'REGISTER' } });
assert.equal(otp.status, 200);
assert.match(otp.data.devCode, /^\d{6}$/);
const wrong = await call('/auth/register', { body: { phone, code: '000000', password: 'motdepasse', firstName: 'Koffi', lastName: 'Yao', role: 'STUDENT', examId: 1 } });
assert.equal(wrong.status, 400);
const reg = await call('/auth/register', {
  body: { phone, code: otp.data.devCode, password: 'motdepasse', firstName: 'Koffi', lastName: 'Yao', role: 'STUDENT', examId: 1, city: 'Yamoussoukro' },
});
assert.equal(reg.status, 201, JSON.stringify(reg.data));
const student = reg.data.token;
ok('inscription élève par OTP (un code faux est refusé)');

// 2. Matières et chapitres ; l'enseignante active le verrou du devoir de Thalès
const teacher = (await call('/auth/login', { body: { phone: '0700000002', password: 'Prof2026!' } })).data.token;
const subjects = await call('/subjects', { token: student });
const math = subjects.data.find((s) => s.code === 'MATH');
assert.equal(subjects.data.length, 10);
let chapters = (await call(`/subjects/${math.id}/chapters`, { token: student })).data.chapters;
assert.equal(chapters.length, 14);
// Si un run précédent s'est arrêté en cours de route, on retire le verrou qu'il a pu laisser.
await call(`/content/assessments/${chapters[1].assessments[0].id}`, { token: teacher, method: 'PATCH', body: { blocksNext: false } });
chapters = (await call(`/subjects/${math.id}/chapters`, { token: student })).data.chapters;
assert.ok(chapters.every((c) => !c.locked), 'aucun verrou par défaut');
const thales = chapters[1];
const thalesExamId = thales.assessments[0].id;
const lockRes = await call(`/content/assessments/${thalesExamId}`, { token: teacher, method: 'PATCH', body: { blocksNext: true } });
assert.equal(lockRes.data.blocksNext, true);
chapters = (await call(`/subjects/${math.id}/chapters`, { token: student })).data.chapters;
assert.deepEqual(chapters.slice(0, 3).map((c) => c.locked), [false, false, true]);
const nextDenied = await call(`/chapters/${chapters[2].id}`, { token: student });
assert.equal(nextDenied.status, 403);
ok('10 matières BEPC, 14 chapitres de maths ; verrou activé par l’enseignante → le chapitre suivant se ferme');

// 3. Chapitre Thalès : pack hors ligne + quiz
const pack = (await call(`/chapters/${thales.id}`, { token: student })).data;
assert.equal(pack.questions.length, 15);
assert.ok(pack.courseMd.includes('Propriété de Thalès') || pack.courseMd.includes('propriété de Thalès'));
await call(`/progress/chapters/${thales.id}`, { token: student, body: { courseDone: true, summaryDone: true } });
const quizId = randomUUID();
await call('/progress/quiz', { token: student, body: { id: quizId, chapterId: thales.id, score: 12, total: 15 } });
const replay = await call('/progress/quiz', { token: student, body: { id: quizId, chapterId: thales.id, score: 12, total: 15 } });
assert.equal(replay.data.duplicate, true);
ok('pack du chapitre (15 questions) ; résultat du quiz idempotent');

// 4. Paywall : un devoir de chapitre payant demande un abonnement ; paiement Mobile Money simulé
const examId = pack.assessments[0].id;
const pc = subjects.data.find((s) => s.code === 'PC');
const pcChapters = (await call(`/subjects/${pc.id}/chapters`, { token: student })).data.chapters;
const pcFree = (await call(`/chapters/${pcChapters[0].id}`, { token: student })).data;
const pcPaid = (await call(`/chapters/${pcChapters[1].id}`, { token: student })).data;
assert.equal(pcFree.isFree, true, 'le premier chapitre est gratuit');
assert.equal(pcPaid.isFree, false);
assert.equal(pcPaid.questions.length, 15, 'cours et quiz restent gratuits');
assert.equal((await call(`/assessments/${pcFree.assessments[0].id}`, { token: student })).status, 200);
const paywalled = await call(`/assessments/${pcPaid.assessments[0].id}`, { token: student });
assert.equal(paywalled.status, 402);
const plans = (await call('/plans', { token: student })).data;
const monthly = plans.find((p) => p.code === 'BEPC_MONTH');
assert.equal(monthly.priceXof, 1000);
assert.ok(!plans.some((p) => p.code.startsWith('BAC')), 'seules les offres du BEPC sont proposées');
const pay = (await call('/payments', { token: student, body: { planId: monthly.id } })).data;
assert.match(pay.redirectUrl, /\/paiement\/simulation\//);
const refused = (await call(`/payments/${pay.paymentId}/simulate`, { token: student, body: { outcome: 'FAILED', channel: 'orange' } })).data;
assert.equal(refused.status, 'FAILED');
const pay2 = (await call('/payments', { token: student, body: { planId: monthly.id } })).data;
const paid = (await call(`/payments/${pay2.paymentId}/simulate`, { token: student, body: { outcome: 'SUCCESS', channel: 'wave' } })).data;
assert.equal(paid.status, 'SUCCESS');
const sub0 = (await call('/subscription', { token: student })).data;
assert.equal(sub0.premium, true);
assert.equal((await call(`/assessments/${pcPaid.assessments[0].id}`, { token: student })).status, 200);
const hook = await call('/payments/webhook/cinetpay', { body: { cpm_trans_id: 'inconnu' } });
assert.ok(hook.status < 500, 'le webhook ne plante pas sur une transaction inconnue');
ok('1er chapitre gratuit ; devoir payant → 402 ; paiement refusé puis accepté (simulation) → abonné');

// 5. Devoir : le sujet ne contient pas les réponses
const subject = (await call(`/assessments/${examId}`, { token: student })).data;
assert.equal(subject.items.length, 16);
assert.ok(subject.items.every((i) => !('answer' in i) && !('correction' in i)));
ok('sujet du devoir servi sans corrigé (16 items)');

// 6. Remise : QCM justes, résultats numériques justes avec justification, réponses ouvertes
const answers = subject.items.map((item) => {
  if (item.type === 'MCQ') return { itemId: item.id, response: { choice: [1, 0, 1, 2][subject.items.indexOf(item)] } };
  if (item.type === 'NUMERIC') {
    const values = { 'coût': '3 750 000 FCFA', '1/500': '5', '7,5 m': '6,25', 'RN': '7,5 cm', 'MN': '9', 'NT': '2,5', 'AT': '25 m' };
    const v = Object.entries(values).find(([k]) => item.prompt.includes(k))?.[1] ?? '0';
    return { itemId: item.id, response: { value: v, work: 'D’après la propriété de Thalès…' } };
  }
  return { itemId: item.id, response: { text: 'Les rapports sont égaux et les points sont dans le même ordre.' } };
});
const attemptId = randomUUID();
const startedAt = new Date(Date.now() - 90 * 60 * 1000).toISOString();
const sub = await call('/attempts', { token: student, body: { id: attemptId, assessmentId: examId, startedAt, answers } });
assert.equal(sub.status, 201, JSON.stringify(sub.data));
assert.equal(sub.data.status, 'SUBMITTED');
const again = await call('/attempts', { token: student, body: { id: attemptId, assessmentId: examId, startedAt, answers } });
assert.equal(again.data.duplicate, true);
const provisional = (await call(`/attempts/${attemptId}`, { token: student })).data;
assert.equal(provisional.autoScore, 4 + 7 * 0.5);
ok(`copie rendue (idempotente) ; note provisoire automatique ${provisional.autoScore}/20`);

// 7. Correction par l'enseignante : elle ne voit la copie qu'une fois l'élève dans sa classe
const forbidden = await call('/grading/queue', { token: student });
assert.equal(forbidden.status, 403);
assert.equal((await call(`/attempts/${attemptId}`, { token: teacher })).status, 403);
assert.ok(!(await call('/grading/queue', { token: teacher })).data.some((a) => a.id === attemptId));
const joined = await call('/classes/join', { token: student, body: { code: 'math3a' } });
assert.ok(joined.status < 300, JSON.stringify(joined.data));
const queue = (await call('/grading/queue', { token: teacher })).data;
assert.ok(queue.some((a) => a.id === attemptId));
const aiGrade = await call(`/ai/grade/${attemptId}`, { token: teacher, method: 'POST' });
const aiOn = (await call('/ai/status', { token: teacher })).data.enabled;
assert.equal(aiGrade.status, aiOn ? 200 : 503, JSON.stringify(aiGrade.data));
const detail = (await call(`/attempts/${attemptId}`, { token: teacher })).data;
const grades = detail.answers.filter((a) => a.needsManual).map((a) => ({ answerId: a.id, points: a.points, comment: 'Bien rédigé' }));
const tooMuch = await call(`/grading/attempts/${attemptId}`, { token: teacher, body: { answers: [{ ...grades[0], points: 99 }] } });
assert.equal(tooMuch.status, 400);
const graded = (await call(`/grading/attempts/${attemptId}`, { token: teacher, body: { answers: grades, comment: 'Très bon devoir, continue !' } })).data;
assert.equal(graded.status, 'GRADED');
assert.equal(graded.finalScore, 20);
ok(`classe rejointe par code ; correction enseignante : ${graded.finalScore}/20 (dépassement du barème refusé)`);

// 8. Le chapitre suivant est débloqué ; tableau de bord ; validation pédagogique du chapitre
const after = (await call(`/subjects/${math.id}/chapters`, { token: student })).data.chapters;
assert.equal(after[2].locked, false);
const dash = (await call('/dashboard', { token: student })).data;
assert.equal(dash.subjects.find((s) => s.name === 'Mathématiques').average, 20);
assert.ok(dash.badges.find((b) => b.code === 'DIAMANT').earnedAt);
assert.equal(pack.validatedAt, null);
await call(`/content/chapters/${thales.id}/validate`, { token: teacher, body: { validated: true } });
const validated = (await call(`/chapters/${thales.id}`, { token: student })).data;
assert.ok(validated.validatedAt, 'chapitre validé');
// On remet la base dans son état initial (verrou désactivé, chapitre non validé).
await call(`/content/chapters/${thales.id}/validate`, { token: teacher, body: { validated: false } });
await call(`/content/assessments/${thalesExamId}`, { token: teacher, method: 'PATCH', body: { blocksNext: false } });
ok('chapitre suivant débloqué ; moyenne 20/20 ; badge Diamant ; validation pédagogique du chapitre');

// 9. Administration : validation d'un enseignant
const admin = (await call('/auth/login', { body: { phone: '0700000001', password: 'Admin2026!' } })).data.token;
const tPhone = `05${String(Date.now() + 1).slice(-8)}`;
const tOtp = (await call('/auth/otp', { body: { phone: tPhone, purpose: 'REGISTER' } })).data.devCode;
const tReg = await call('/auth/register', {
  body: { phone: tPhone, code: tOtp, password: 'Prof2026!', firstName: 'Awa', lastName: 'Bamba', role: 'TEACHER', subjects: ['SVT'] },
});
assert.equal(tReg.data.pending, true);
const pendingLogin = await call('/auth/login', { body: { phone: tPhone, password: 'Prof2026!' } });
assert.equal(pendingLogin.status, 403);
const pending = (await call(`/admin/users?status=PENDING&q=${tPhone.slice(1)}`, { token: admin })).data;
assert.equal(pending.length, 1);
await call(`/admin/users/${pending[0].id}`, { token: admin, method: 'PATCH', body: { status: 'ACTIVE' } });
const nowOk = await call('/auth/login', { body: { phone: tPhone, password: 'Prof2026!' } });
assert.equal(nowOk.status, 200);
const stats = (await call('/admin/stats', { token: admin })).data;
assert.ok(stats.users.STUDENT >= 2);
ok('enseignant en attente bloqué, puis validé par l’admin ; statistiques globales');

// 10. Mot de passe oublié
const reset = await call('/auth/otp', { body: { phone, purpose: 'RESET' } });
assert.equal(reset.status, 200, `demande de code : ${JSON.stringify(reset.data)} (limite de 5 codes par minute : attends une minute entre deux runs)`);
await call('/auth/reset-password', { body: { phone, code: reset.data.devCode, password: 'nouveaumdp' } });
assert.equal((await call('/auth/login', { body: { phone, password: 'nouveaumdp' } })).status, 200);
ok('réinitialisation du mot de passe par OTP');

// 11. Classe : annonce, devoir de classe créé par l'enseignante, réservé aux membres
const classes = (await call('/classes', { token: teacher })).data;
const klass = classes.find((c) => c.code === 'MATH3A');
await call(`/classes/${klass.id}/announcements`, { token: teacher, body: { body: 'Contrôle surprise lundi !' } });
const feed = (await call('/announcements', { token: student })).data;
assert.ok(feed.some((a) => a.body === 'Contrôle surprise lundi !'));
const bank = (await call(`/content/bank?subjectId=${math.id}`, { token: teacher })).data;
assert.ok(Array.isArray(bank.items ?? bank) && (bank.items ?? bank).length > 0, 'banque d’exercices');
const hw = await call('/content/assessments', {
  token: teacher,
  body: {
    type: 'CLASS_ASSIGNMENT', title: 'Devoir maison : Thalès', subjectId: math.id, examId: 1, durationMin: 30, classroomId: klass.id,
    dueAt: new Date(Date.now() + 3 * 864e5).toISOString(),
    items: [
      { section: 'Exercice 1', prompt: 'Combien font 3 × 4 ?', type: 'NUMERIC', answer: { value: 12 }, points: 10, resultPoints: 10, correction: '12' },
      { section: 'Exercice 1', prompt: 'Le triangle 3-4-5 est-il rectangle ?', type: 'MCQ', choices: ['Oui', 'Non'], answer: { index: 0 }, points: 10, correction: 'Oui (réciproque de Pythagore)' },
    ],
  },
});
assert.equal(hw.status, 201, JSON.stringify(hw.data));
const bad = await call('/content/assessments', { token: teacher, body: { ...JSON.parse(JSON.stringify({ type: 'MOCK_EXAM', title: 'Mauvais barème', subjectId: math.id, examId: 1, durationMin: 30 })), items: [{ section: 'A', prompt: 'x', type: 'OPEN', answer: {}, points: 5 }] } });
assert.equal(bad.status, 400, 'un devoir doit totaliser 20 points');
const hwSubject = await call(`/assessments/${hw.data.id}`, { token: student });
assert.equal(hwSubject.status, 200);
const hwAttempt = await call('/attempts', { token: student, body: { id: randomUUID(), assessmentId: hw.data.id, startedAt: new Date().toISOString(), answers: [
  { itemId: hwSubject.data.items[0].id, response: { value: '12' } }, { itemId: hwSubject.data.items[1].id, response: { choice: 0 } },
] } });
assert.equal(hwAttempt.data.status, 'GRADED', 'copie entièrement corrigée automatiquement');
assert.equal((await call(`/attempts/${hwAttempt.data.id}`, { token: student })).data.finalScore, 20);
const outsider = (await call('/auth/login', { body: { phone: '0700000003', password: 'Eleve2026!' } })).data.token;
await call(`/classes/${klass.id}/leave`, { token: outsider, method: 'POST' });
assert.equal((await call(`/assessments/${hw.data.id}`, { token: outsider })).status, 403, 'réservé aux membres de la classe');
await call('/classes/join', { token: outsider, body: { code: 'MATH3A' } });
ok('annonce de classe ; devoir de classe (barème contrôlé) noté 20/20 ; refusé hors de la classe');

// 12. Messagerie élève ↔ enseignante, signalement et modération
const contacts = (await call('/messages/contacts', { token: student })).data;
const mariam = contacts.find((c) => c.firstName === 'Mariam');
assert.ok(mariam, 'l’enseignante de la classe est un contact');
const msg = (await call('/messages', { token: student, body: { toId: mariam.id, body: 'Bonjour Madame, merci pour la correction !' } })).data;
assert.equal((await call('/messages/unread', { token: teacher })).data.unread >= 1, true);
const thread = (await call(`/messages/with/${reg.data.user.id}`, { token: teacher })).data;
assert.ok((thread.messages ?? thread).some((m) => m.id === msg.id));
assert.equal((await call('/messages/unread', { token: teacher })).data.unread, 0);
await call(`/messages/${msg.id}/report`, { token: teacher, body: { reason: 'test de signalement' } });
const reports = (await call('/admin/reports', { token: admin })).data;
assert.ok(reports.some((r) => r.id === msg.id));
await call(`/admin/messages/${msg.id}`, { token: admin, method: 'PATCH', body: { hide: true } });
ok('message élève → enseignante, lu, signalé puis masqué par l’admin');

// 13. Révisions : examens blancs ; mode Combat ; classement
const rev = (await call('/revisions', { token: student })).data;
const mock = rev.items.find((a) => a.type === 'MOCK_EXAM' && a.subject.id === math.id);
assert.ok(mock && mock._count.items > 0, 'examen blanc de maths disponible');
const mockSubject = (await call(`/assessments/${mock.id}`, { token: student })).data;
assert.ok(mockSubject.items.every((i) => !('answer' in i)));
const duel = await call('/challenges', { token: student, body: { subjectId: math.id, opponentPhone: '0700000003' } });
assert.equal(duel.status, 201, JSON.stringify(duel.data));
const play = async (token) => {
  const c = (await call(`/challenges/${duel.data.id}`, { token })).data;
  assert.equal(c.questions.length, 10);
  assert.ok(c.questions.every((q) => !('answer' in q)), 'pas de solution avant de jouer');
  return (await call(`/challenges/${duel.data.id}/submit`, { token, body: { timeS: 60, answers: c.questions.map((q) => ({ questionId: q.id, choice: 0, value: '0' })) } })).data;
};
await play(student);
const end = await play(outsider);
assert.equal(end.status, 'DONE');
assert.ok(end.questions.every((q) => 'answer' in q), 'solutions après avoir joué');
const board = (await call('/leaderboard?scope=national&period=all', { token: student })).data;
assert.ok(board.top.length > 0 && board.me);
ok(`examen blanc servi sans corrigé ; défi joué par les deux élèves ; classement national (mon rang : ${board.me.rank})`);

// 14. Plan de révision (règles sans clé IA) ; coefficients modifiables par l'admin ; Google non configuré
const plan = (await call('/ai/plan', { token: student, body: { minutesPerWeek: 240, weeks: 2, studyDays: ['mercredi', 'samedi'] } })).data;
assert.ok(plan.plan.weeks.length >= 1);
assert.ok(plan.plan.weeks.every((w) => w.sessions.every((s) => ['mercredi', 'samedi'].includes(s.day) && s.title)));
assert.equal((await call('/ai/plan', { token: student })).data.plan.source, plan.plan.source);
const series = (await call('/admin/series', { token: admin })).data;
const bepcMath = series.find((e) => e.code === 'BEPC').series[0].subjects.find((x) => x.subject.code === 'MATH');
const sid = series.find((e) => e.code === 'BEPC').series[0].id;
const coef = await call(`/admin/series/${sid}/subjects/${bepcMath.subject.id}`, { token: admin, method: 'PATCH', body: { coefficient: 4 } });
assert.equal(coef.data.coefficient, 4);
assert.equal((await call(`/admin/series/${sid}/subjects/${bepcMath.subject.id}`, { token: admin, method: 'PATCH', body: { coefficient: 99 } })).status, 400);
await call(`/admin/series/${sid}/subjects/${bepcMath.subject.id}`, { token: admin, method: 'PATCH', body: { coefficient: bepcMath.coefficient } });
const gcfg = (await call('/auth/config')).data;
const g = await call('/auth/google', { body: { idToken: 'faux' } });
assert.equal(g.status, gcfg.googleClientId ? 401 : 503);
ok(`plan de révision (${plan.plan.source}) sur 2 jours/semaine ; coefficient modifié puis restauré ; connexion Google ${gcfg.googleClientId ? 'refuse un faux jeton' : 'non configurée (503)'}`);

console.log(`\nTous les tests de bout en bout passent (${step}/14).`);
