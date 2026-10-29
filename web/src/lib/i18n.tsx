import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';

/**
 * Traductions de l'interface (navigation et libellés communs).
 * Le contenu pédagogique reste en français : c'est la langue de l'examen.
 *
 * Baoulé (bci) et dioula (dyu) : les dictionnaires sont prêts mais vides.
 * Ils doivent être remplis par des traducteurs locuteurs natifs ; en attendant,
 * chaque clé manquante s'affiche en français.
 */
export type Locale = 'fr' | 'en' | 'bci' | 'dyu';

export const LOCALES: { code: Locale; label: string; ready: boolean }[] = [
  { code: 'fr', label: 'Français', ready: true },
  { code: 'en', label: 'English', ready: true },
  { code: 'bci', label: 'Baoulé', ready: false },
  { code: 'dyu', label: 'Dioula', ready: false },
];

const fr = {
  'nav.home': 'Accueil',
  'nav.subjects': 'Matières',
  'nav.revisions': 'Révisions',
  'nav.progress': 'Progrès',
  'nav.profile': 'Profil',
  'nav.copies': 'Copies',
  'nav.classes': 'Classes',
  'nav.assessments': 'Devoirs',
  'nav.content': 'Contenus',
  'nav.admin': 'Admin',
  'header.online': 'En ligne',
  'header.offline': 'Hors ligne',
  'header.pending': 'en attente',
  'header.messages': 'Messages',
  'quick.plan': 'Mon plan de révision',
  'quick.combat': 'Combat',
  'quick.classes': 'Mes classes',
  'quick.messages': 'Messages',
  'quick.subscription': 'Abonnement',
  'common.retry': 'Réessayer',
  'common.loading': 'Chargement…',
  'paywall.title': 'Réservé aux abonnés',
  'paywall.text': 'Les cours, fiches et quiz restent gratuits. Abonne-toi pour passer tous les devoirs notés, les examens blancs et les annales.',
  'paywall.cta': 'Voir les offres',
} as const;

export type Key = keyof typeof fr;

const en: Partial<Record<Key, string>> = {
  'nav.home': 'Home',
  'nav.subjects': 'Subjects',
  'nav.revisions': 'Revision',
  'nav.progress': 'Progress',
  'nav.profile': 'Profile',
  'nav.copies': 'Papers',
  'nav.classes': 'Classes',
  'nav.assessments': 'Tests',
  'nav.content': 'Content',
  'nav.admin': 'Admin',
  'header.online': 'Online',
  'header.offline': 'Offline',
  'header.pending': 'pending',
  'header.messages': 'Messages',
  'quick.plan': 'My study plan',
  'quick.combat': 'Battle',
  'quick.classes': 'My classes',
  'quick.messages': 'Messages',
  'quick.subscription': 'Subscription',
  'common.retry': 'Try again',
  'common.loading': 'Loading…',
  'paywall.title': 'Subscribers only',
  'paywall.text': 'Lessons, summaries and quizzes stay free. Subscribe to take every graded test, mock exam and past paper.',
  'paywall.cta': 'See plans',
};

// À compléter par des traducteurs : ne pas remplir par traduction automatique.
const bci: Partial<Record<Key, string>> = {};
const dyu: Partial<Record<Key, string>> = {};

const DICTS: Record<Locale, Partial<Record<Key, string>>> = { fr, en, bci, dyu };

function readLocale(): Locale {
  try {
    const v = localStorage.getItem('locale');
    return v && v in DICTS ? (v as Locale) : 'fr';
  } catch {
    return 'fr';
  }
}

interface I18n {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (k: Key) => string;
}

const Ctx = createContext<I18n | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setState] = useState<Locale>(readLocale);
  const setLocale = useCallback((l: Locale) => {
    try {
      localStorage.setItem('locale', l);
    } catch {
      /* stockage indisponible */
    }
    document.documentElement.lang = l;
    setState(l);
  }, []);
  const t = useCallback((k: Key) => DICTS[locale][k] ?? fr[k], [locale]);
  return <Ctx.Provider value={{ locale, setLocale, t }}>{children}</Ctx.Provider>;
}

export function useT() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useT hors I18nProvider');
  return ctx;
}
