/**
 * Contrôle qualité des contenus pédagogiques avant import :
 * barème total, cohérence des QCM, formules KaTeX valides, ordre et doublons.
 * Usage : npx ts-node --transpile-only scripts/check-content.ts
 */
import katex from 'katex';
import { BEPC_CHAPTERS } from '../prisma/content/bepc';
import { SeedChapter } from '../prisma/content/types';

const errors: string[] = [];
const warn: string[] = [];

function checkMath(where: string, md: string) {
  // Une chaîne non « String.raw » transforme \f, \b, \v… en caractères de contrôle.
  if (/[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(md)) errors.push(`${where} : caractère de contrôle (oubli de String.raw ?)`);
  const re = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(md))) {
    const tex = m[1] ?? m[2];
    try {
      katex.renderToString(tex, { throwOnError: true, displayMode: !!m[1] });
    } catch (e) {
      errors.push(`${where} : formule invalide « ${tex.slice(0, 60)} » → ${(e as Error).message.split('\n')[0]}`);
    }
  }
  const dollars = (md.replace(/\$\$/g, '').match(/\$/g) ?? []).length;
  if (dollars % 2) errors.push(`${where} : nombre impair de « $ »`);
}

function checkChapter(c: SeedChapter) {
  const id = `[${c.subject} ${c.order}] ${c.title}`;
  if (!c.courseMd.trim() || !c.summaryMd.trim()) errors.push(`${id} : cours ou fiche vide`);
  checkMath(`${id} cours`, c.courseMd);
  checkMath(`${id} fiche`, c.summaryMd);
  if (c.questions.length < 10) errors.push(`${id} : seulement ${c.questions.length} questions de cours`);
  c.questions.forEach((q, i) => {
    const w = `${id} Q${i + 1}`;
    checkMath(w, q.prompt + ' ' + q.explanation + ' ' + (q.choices ?? []).join(' ') + ' ' + JSON.stringify(q.answer.model ?? ''));
    if (q.type === 'MCQ') {
      const idx = q.answer.index as number;
      if (!q.choices || q.choices.length < 2 || !(idx >= 0 && idx < q.choices.length)) errors.push(`${w} : QCM incohérent`);
    }
    if (q.type === 'NUMERIC' && typeof q.answer.value !== 'number') errors.push(`${w} : valeur numérique manquante`);
  });
  const a = c.assessment;
  const total = a.items.reduce((s, it) => s + it.points, 0);
  if (Math.abs(total - 20) > 1e-9) errors.push(`${id} : barème du devoir = ${total} (au lieu de 20)`);
  a.items.forEach((it, i) => {
    const w = `${id} devoir item ${i + 1}`;
    checkMath(w, [it.prompt, it.sectionIntro ?? '', it.correction, ...(it.choices ?? [])].join(' '));
    if (it.type === 'MCQ') {
      const idx = it.answer.index as number;
      if (!it.choices || !(idx >= 0 && idx < it.choices.length)) errors.push(`${w} : QCM incohérent`);
    }
    if (it.type === 'NUMERIC') {
      if (typeof it.answer.value !== 'number') errors.push(`${w} : valeur manquante`);
      if ((it.resultPoints ?? 0) <= 0 || (it.resultPoints ?? 0) > it.points) errors.push(`${w} : resultPoints invalide`);
    }
    if (!it.correction.trim()) errors.push(`${w} : corrigé vide`);
  });
  checkMath(`${id} consignes`, a.instructions + a.advice);
}

const seen = new Set<string>();
for (const c of BEPC_CHAPTERS) {
  const key = `${c.subject}-${c.order}`;
  if (seen.has(key)) errors.push(`Ordre en double : ${key}`);
  seen.add(key);
  checkChapter(c);
}

const bySubject = new Map<string, number>();
BEPC_CHAPTERS.forEach((c) => bySubject.set(c.subject, (bySubject.get(c.subject) ?? 0) + 1));
console.log(`${BEPC_CHAPTERS.length} chapitres : ${[...bySubject].map(([s, n]) => `${s} ${n}`).join(' · ')}`);
console.log(`${BEPC_CHAPTERS.reduce((s, c) => s + c.questions.length, 0)} questions de cours, ${BEPC_CHAPTERS.reduce((s, c) => s + c.assessment.items.length, 0)} items de devoirs`);
warn.forEach((w) => console.log(`⚠ ${w}`));
if (errors.length) {
  console.error(`\n✖ ${errors.length} erreur(s) :\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
console.log('✔ Contenu valide');
