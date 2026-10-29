import { fmtDate } from '../lib/util';

/** Courbe des notes sur 20, en SVG pur (aucune bibliothèque à télécharger). */
export function LineChart({ points }: { points: { date: string; score: number; label: string }[] }) {
  if (points.length === 0) return <p className="text-sm text-muted">Ta courbe apparaîtra après ton premier devoir corrigé.</p>;
  const W = 320;
  const H = 160;
  const pad = { l: 28, r: 12, t: 12, b: 24 };
  const x = (i: number) => pad.l + (points.length === 1 ? (W - pad.l - pad.r) / 2 : (i * (W - pad.l - pad.r)) / (points.length - 1));
  const y = (s: number) => pad.t + (1 - s / 20) * (H - pad.t - pad.b);
  const path = points.map((p, i) => `${i ? 'L' : 'M'}${x(i)},${y(p.score)}`).join(' ');
  return (
    <figure>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={`Évolution des notes : ${points.map((p) => `${p.label} ${p.score}/20`).join(', ')}`}>
        {[0, 10, 20].map((g) => (
          <g key={g}>
            <line x1={pad.l} x2={W - pad.r} y1={y(g)} y2={y(g)} stroke="var(--line)" strokeDasharray={g === 10 ? '4 4' : undefined} />
            <text x={pad.l - 6} y={y(g) + 4} textAnchor="end" fontSize="10" fill="var(--muted)">
              {g}
            </text>
          </g>
        ))}
        <path d={path} fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinejoin="round" />
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={x(i)} cy={y(p.score)} r="4.5" fill={p.score >= 10 ? 'var(--ok)' : 'var(--danger)'} stroke="var(--surface)" strokeWidth="2">
              <title>{`${p.label} — ${p.score}/20 (${fmtDate(p.date)})`}</title>
            </circle>
          </g>
        ))}
      </svg>
      <figcaption className="text-xs text-muted">Pointillés : la moyenne (10/20).</figcaption>
    </figure>
  );
}
