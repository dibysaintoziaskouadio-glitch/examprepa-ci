export type Theme = 'system' | 'light' | 'dark';
export type FontSize = 'S' | 'M' | 'L' | 'XL';

export const FONT_PX: Record<FontSize, number> = { S: 14, M: 16, L: 18, XL: 21 };

function read<T extends string>(key: string, fallback: T): T {
  try {
    return (localStorage.getItem(key) as T) ?? fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* stockage indisponible */
  }
}

export const getTheme = () => read<Theme>('theme', 'system');
export const getFontSize = () => read<FontSize>('fontSize', 'M');

export function applyPrefs() {
  const theme = getTheme();
  const root = document.documentElement;
  if (theme === 'system') root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', theme);
  root.style.setProperty('--font-size', `${FONT_PX[getFontSize()] ?? 16}px`);
}

export function setTheme(t: Theme) {
  write('theme', t);
  applyPrefs();
}

export function setFontSize(f: FontSize) {
  write('fontSize', f);
  applyPrefs();
}
