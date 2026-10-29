import DOMPurify from 'dompurify';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { marked } from 'marked';
import { useMemo } from 'react';

marked.setOptions({ gfm: true, breaks: false });

/**
 * Markdown + formules KaTeX ($…$ et $$…$$) + SVG intégrés, nettoyés par DOMPurify.
 * Les formules sont extraites avant Markdown pour que « _ » et « * » ne soient pas interprétés.
 */
export function renderMarkdown(src: string, inline = false): string {
  const formulas: string[] = [];
  const hold = (tex: string, display: boolean) => {
    formulas.push(katex.renderToString(tex, { displayMode: display, throwOnError: false, output: 'html' }));
    return `@@F${formulas.length - 1}@@`;
  };
  const prepared = src
    .replace(/\$\$([\s\S]+?)\$\$/g, (_, tex) => hold(tex, true))
    .replace(/\$([^$\n]+?)\$/g, (_, tex) => hold(tex, false));
  const html = (inline ? marked.parseInline(prepared) : marked.parse(prepared)) as string;
  const withMath = html.replace(/@@F(\d+)@@/g, (_, i) => formulas[Number(i)]);
  return DOMPurify.sanitize(withMath, { USE_PROFILES: { html: true, svg: true } });
}

export function Md({ src, inline, className = '' }: { src: string; inline?: boolean; className?: string }) {
  const html = useMemo(() => renderMarkdown(src, inline), [src, inline]);
  if (inline) return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
  return <div className={`prose-ci ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}

/** Texte lisible à voix haute : formules converties en français parlé, balises retirées. */
export function speakableText(src: string): string {
  const tex = (t: string) =>
    t
      .replace(/\\d?frac\{([^}]*)\}\{([^}]*)\}/g, ' $1 sur $2 ')
      .replace(/\\times/g, ' fois ')
      .replace(/\\neq/g, ' différent de ')
      .replace(/\\Rightarrow|\\iff/g, ' donc ')
      .replace(/\\sqrt\{([^}]*)\}/g, ' racine de $1 ')
      .replace(/\\geq/g, ' supérieur ou égal à ')
      .replace(/\\(text|widehat|quad|;|,)\b/g, ' ')
      .replace(/\^2/g, ' au carré ')
      .replace(/[{}\\]/g, ' ')
      .replace(/(\d)\{?,\}?(\d)/g, '$1,$2');
  return src
    .replace(/<figure[\s\S]*?<\/figure>/g, ' (figure) ')
    .replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => tex(t))
    .replace(/\$([^$\n]+?)\$/g, (_, t) => tex(t))
    .replace(/\/\//g, ' parallèle à ')
    .replace(/[#*>|_`]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
