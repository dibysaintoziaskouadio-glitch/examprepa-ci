import { useEffect, useState } from 'react';
import { speakableText } from '../lib/markdown';

/** Lecture audio du cours avec la synthèse vocale du téléphone (gratuite, fonctionne hors ligne). */
export function SpeakButton({ markdown }: { markdown: string }) {
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => () => void (supported && window.speechSynthesis.cancel()), [supported]);
  if (!supported) return null;

  const toggle = () => {
    const synth = window.speechSynthesis;
    if (speaking) {
      synth.cancel();
      setSpeaking(false);
      return;
    }
    const text = speakableText(markdown);
    // Les moteurs vocaux coupent les textes trop longs : on lit phrase par phrase.
    const chunks = text.match(/[^.!?]+[.!?]*/g) ?? [text];
    const voice = synth.getVoices().find((v) => v.lang.startsWith('fr'));
    chunks.forEach((chunk, i) => {
      const u = new SpeechSynthesisUtterance(chunk);
      u.lang = 'fr-FR';
      if (voice) u.voice = voice;
      u.rate = 0.95;
      if (i === chunks.length - 1) u.onend = () => setSpeaking(false);
      synth.speak(u);
    });
    setSpeaking(true);
  };

  return (
    <button className="btn-ghost min-h-[40px] px-3 text-sm" onClick={toggle} aria-pressed={speaking}>
      {speaking ? '⏹ Arrêter' : '🔊 Écouter'}
    </button>
  );
}
