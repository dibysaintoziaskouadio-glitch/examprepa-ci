/** Couleurs pilotées par des variables CSS (thèmes clair et sombre dans index.css). */
const v = (name) => `var(--${name})`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: v('bg'),
        surface: v('surface'),
        sunken: v('sunken'),
        ink: v('ink'),
        muted: v('muted'),
        line: v('line'),
        brand: v('brand'),
        'brand-strong': v('brand-strong'),
        'brand-soft': v('brand-soft'),
        'on-brand': v('on-brand'),
        ok: v('ok'),
        'ok-soft': v('ok-soft'),
        danger: v('danger'),
        'danger-soft': v('danger-soft'),
      },
      // Polices système : rien à télécharger sur un réseau lent.
      fontFamily: { sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Noto Sans', 'sans-serif'] },
    },
  },
  plugins: [],
};
