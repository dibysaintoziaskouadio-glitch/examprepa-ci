import { SeedChapter } from '../types';

const r = String.raw;
const REF = 'Programme d’Allemand 3e (DPFC) — progression nationale 2026-2027 (manuel « Vorwärts »)';

const devoirALL = (title: string, items: SeedChapter['assessment']['items'], advice: string) => ({
  title: `Devoir BEPC — ${title}`,
  durationMin: 60,
  blocksNext: false,
  instructions: r`**Dauer: 1 Stunde · Note: /20.** Lies den Text genau und beantworte die Fragen.`,
  advice,
  items,
});

export const ersterKontakt: SeedChapter = {
  subject: 'ALL',
  order: 1,
  title: 'Erster Kontakt — der Dativ',
  minutes: 360,
  isFree: true,
  officialRef: `${REF}, Thema 1 : Erstes Treffen, Lektion 1`,
  objectives: [
    'Se présenter et présenter quelqu’un lors d’une première rencontre',
    'Décliner l’article et le nom au datif',
    'Employer les prépositions suivies du datif',
  ],
  courseMd: r`
> **Situation.** Am ersten Schultag spricht Koffi **mit dem** neuen Schüler: „Hallo! Ich heiße Koffi. Ich komme **aus der** Elfenbeinküste. Und du?“

## 1. Sich vorstellen (se présenter)
- *Wie heißt du? — Ich heiße… / Mein Name ist…*
- *Woher kommst du? — Ich komme aus Abidjan / aus der Elfenbeinküste.*
- *Wie alt bist du? — Ich bin fünfzehn Jahre alt.*
- *Wo wohnst du? — Ich wohne in Bouaké.*
- *Das ist mein Freund Yao. — Freut mich!*

## 2. Der Dativ (le datif)
Le datif est le cas du **complément d'objet indirect** (à qui ?) et des compléments après certaines **prépositions**.
| | masculin | féminin | neutre | pluriel |
|---|---|---|---|---|
| article défini | **dem** Lehrer | **der** Lehrerin | **dem** Kind | **den** Kinder**n** |
| article indéfini | **einem** Freund | **einer** Freundin | **einem** Heft | — |
| possessif | **meinem** Vater | **meiner** Mutter | **meinem** Buch | **meinen** Eltern |
- Au **pluriel**, le nom prend un **-n** au datif (sauf s'il finit déjà par -n ou par -s) : *mit den Freunde**n***.
- Pronoms : *mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen* : „Ich gebe **dir** mein Heft.“

## 3. Les prépositions suivies du datif
**aus, bei, mit, nach, seit, von, zu** (+ *gegenüber*)
- „Ich komme **aus der** Schule.“ — „Ich wohne **bei meinem** Onkel.“
- „Ich fahre **mit dem** Bus.“ — „Nach **dem** Unterricht spiele ich Fußball.“
- Contractions : *zu dem → **zum***, *zu der → **zur***, *von dem → **vom***, *bei dem → **beim***.

## 4. Verbes suivis du datif
*helfen, danken, gehören, gefallen, antworten* : „Ich **helfe meiner** Mutter.“ — „Das Buch **gehört dem** Lehrer.“
`,
  summaryMd: r`
- Se présenter : Ich heiße… Ich komme aus… Ich bin … Jahre alt. Ich wohne in…
- Datif : **dem** (m/n), **der** (f), **den** + -n (pl) ; einem / einer / einem ; meinem / meiner.
- Prépositions + datif : **aus, bei, mit, nach, seit, von, zu** ; zum, zur, vom, beim.
- Verbes + datif : helfen, danken, gehören, gefallen.
- Pronoms au datif : mir, dir, ihm, ihr, uns, euch, ihnen.
`,
  questions: [
    { type: 'MCQ', prompt: r`Ich spreche mit … Lehrer (m).`, choices: ['dem', 'den', 'der'], answer: { index: 0 }, explanation: r`Datif masculin.` },
    { type: 'MCQ', prompt: r`Ich komme aus … Schule (f).`, choices: ['der', 'dem', 'die'], answer: { index: 0 }, explanation: r`Datif féminin.` },
    { type: 'MCQ', prompt: r`Ich spiele mit … Kind (n).`, choices: ['dem', 'der', 'das'], answer: { index: 0 }, explanation: r`Datif neutre.` },
    { type: 'MCQ', prompt: r`Ich spiele mit den …`, choices: ['Kindern', 'Kinder', 'Kinds'], answer: { index: 0 }, explanation: r`Pluriel datif : -n.` },
    { type: 'MCQ', prompt: r`Ich wohne bei … Onkel.`, choices: ['meinem', 'meinen', 'meiner'], answer: { index: 0 }, explanation: r`Datif masculin.` },
    { type: 'MCQ', prompt: r`Ich helfe … Mutter.`, choices: ['meiner', 'meine', 'meinem'], answer: { index: 0 }, explanation: r`helfen + datif, féminin.` },
    { type: 'MCQ', prompt: r`„zu dem“ devient :`, choices: ['zum', 'zur', 'zu'], answer: { index: 0 }, explanation: r`Contraction.` },
    { type: 'MCQ', prompt: r`„zu der“ devient :`, choices: ['zur', 'zum'], answer: { index: 0 }, explanation: r`Contraction.` },
    { type: 'MCQ', prompt: r`Le pronom datif de „du“ est :`, choices: ['dir', 'dich', 'du'], answer: { index: 0 }, explanation: r`Datif.` },
    { type: 'MCQ', prompt: r`Le pronom datif de „ich“ est :`, choices: ['mir', 'mich'], answer: { index: 0 }, explanation: r`Datif.` },
    { type: 'MCQ', prompt: r`Woher kommst du? — Ich komme … Abidjan.`, choices: ['aus', 'nach', 'zu'], answer: { index: 0 }, explanation: r`Origine : aus.` },
    { type: 'MCQ', prompt: r`Ich fahre … dem Bus.`, choices: ['mit', 'aus'], answer: { index: 0 }, explanation: r`mit + datif.` },
    { type: 'MCQ', prompt: r`Das Buch gehört … Lehrerin.`, choices: ['der', 'die'], answer: { index: 0 }, explanation: r`gehören + datif.` },
    { type: 'MCQ', prompt: r`„Freut mich!“ signifie :`, choices: ['Enchanté !', 'Au revoir !'], answer: { index: 0 }, explanation: r`Présentation.` },
    { type: 'OPEN', prompt: r`Stell dich in drei Sätzen vor (Name, Alter, Wohnort).`, answer: { model: 'Ich heiße Aya. Ich bin fünfzehn Jahre alt. Ich wohne in Daloa.', keywords: ['Ich heiße', 'Jahre alt', 'Ich wohne'] }, explanation: r`Se présenter.` },
  ],
  assessment: devoirALL(
    'Erster Kontakt',
    [
      { section: 'Leseverstehen (6 Punkte)', sectionIntro: r`**Text.** „Hallo, ich heiße Mamadou. Ich bin sechzehn Jahre alt und komme aus Korhogo. Jetzt wohne ich bei meinem Onkel in Abidjan, weil meine Schule dort ist. Jeden Morgen fahre ich mit dem Bus zur Schule. Nach dem Unterricht helfe ich meiner Tante im Laden.“`, prompt: r`1. Woher kommt Mamadou?`, type: 'MCQ', choices: ['Aus Korhogo', 'Aus Abidjan'], answer: { index: 0 }, points: 2, correction: r`Text.` },
      { section: 'Leseverstehen (6 Punkte)', prompt: r`2. Bei wem wohnt er?`, type: 'MCQ', choices: ['Bei seinem Onkel', 'Bei seinen Eltern'], answer: { index: 0 }, points: 2, correction: r`Text.` },
      { section: 'Leseverstehen (6 Punkte)', prompt: r`3. Wie fährt er zur Schule?`, type: 'MCQ', choices: ['Mit dem Bus', 'Mit dem Fahrrad'], answer: { index: 0 }, points: 2, correction: r`Text.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`1. Ich schreibe … Freund (m) einen Brief.`, type: 'MCQ', choices: ['meinem', 'meinen'], answer: { index: 0 }, points: 2, correction: r`Datif.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`2. Wir gehen … Arzt (zu + dem).`, type: 'MCQ', choices: ['zum', 'zur'], answer: { index: 0 }, points: 2, correction: r`Contraction.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`3. Er dankt … Lehrern.`, type: 'MCQ', choices: ['den', 'die'], answer: { index: 0 }, points: 2, correction: r`Datif pluriel.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`4. Kannst du … helfen? (ich)`, type: 'MCQ', choices: ['mir', 'mich'], answer: { index: 0 }, points: 2, correction: r`helfen + datif.` },
      { section: 'Schreiben (6 Punkte)', prompt: r`Schreib 5 Sätze: Stell dich einem neuen Brieffreund vor (Name, Alter, Wohnort, Familie, Schule).`, type: 'OPEN', answer: { model: 'Vorstellung mit Datif' }, points: 6, correction: r`Inhalt *(2 Punkte)* ; grammaire, datif correct *(3 Punkte)* ; orthographe *(1 Punkt)*.` },
    ],
    r`### 🎯 Tipps
1. Après **aus, bei, mit, nach, seit, von, zu** : toujours le **datif**.
2. Au pluriel datif, n'oublie pas le **-n** du nom.`,
  ),
};

export const begruessen: SeedChapter = {
  subject: 'ALL',
  order: 2,
  title: 'Begrüßen — Perfekt (schwache Verben) und Präteritum der Modalverben',
  minutes: 600,
  officialRef: `${REF}, Thema 1 : Erstes Treffen, Lektion 2`,
  objectives: [
    'Saluer, prendre congé et répondre',
    'Former le parfait des verbes faibles et le prétérit des verbes de modalité',
    'Répondre « doch » à une question négative',
  ],
  courseMd: r`
> **Situation.** „Guten Tag, Frau Kouassi! Wie geht es Ihnen? — Danke, gut. **Hast** du gestern deine Hausaufgaben **gemacht**? — Nein, ich **konnte** nicht, ich **musste** meiner Mutter helfen.“

## 1. Begrüßen und sich verabschieden
- Grüßen : *Guten Morgen! Guten Tag! Guten Abend! Hallo!*
- Fragen : *Wie geht es dir / Ihnen? — Gut, danke. Und dir? / Es geht. / Nicht so gut.*
- Verabschieden : *Auf Wiedersehen! Tschüss! Bis morgen! Bis bald! Gute Nacht!*
- *du* (tutoiement) ; *Sie* (vouvoiement, avec majuscule).

## 2. Das Perfekt der schwachen Verben
**haben** (au présent) + **participe passé** (à la fin de la phrase) : **ge** + radical + **t**
- *machen → hat gemacht*, *spielen → gespielt*, *lernen → gelernt*, *kaufen → gekauft*, *arbeiten → gearbeitet*.
- Verbes en **-ieren** : pas de *ge-* : *telefonieren → hat telefoniert*, *studieren → studiert*.
- Verbes à particule séparable : *einkaufen → eingekauft*.
„Ich **habe** gestern Fußball **gespielt**.“ — „**Hast** du deine Oma **besucht**?“

## 3. Präteritum (prétérit) : verbes de modalité et verbes faibles irréguliers
| | können | müssen | wollen | dürfen | sollen | mögen |
|---|---|---|---|---|---|---|
| ich / er | konnte | musste | wollte | durfte | sollte | mochte |
| du | konntest | musstest | wolltest | durftest | solltest | mochtest |
| wir / sie | konnten | mussten | wollten | durften | sollten | mochten |
| ihr | konntet | musstet | wolltet | durftet | solltet | mochtet |
„Gestern **wollte** ich kommen, aber ich **musste** arbeiten.“

Verbes faibles **irréguliers** : *denken → dachte → gedacht*, *bringen → brachte → gebracht*, *kennen → kannte → gekannt*, *wissen → wusste → gewusst*, *nennen → nannte → genannt*.

## 4. Répondre à une question négative : „doch“
Pour répondre **oui** à une question **négative**, on dit **doch** :
„Kommst du **nicht**? — **Doch**, ich komme!“ ; „Hast du **keinen** Hunger? — **Doch**!“
Pour répondre non : „**Nein**, ich komme nicht.“
`,
  summaryMd: r`
- Saluer : Guten Tag, Hallo ; Wie geht es dir / Ihnen? ; prendre congé : Auf Wiedersehen, Tschüss, Bis morgen.
- Parfait des verbes faibles : **haben + ge…t** (gemacht, gespielt) ; -ieren sans ge- (telefoniert).
- Prétérit des modaux : konnte, musste, wollte, durfte, sollte, mochte.
- Verbes faibles irréguliers : dachte, brachte, kannte, wusste.
- **Doch** = oui à une question négative.
`,
  questions: [
    { type: 'MCQ', prompt: r`Ich habe Fußball …`, choices: ['gespielt', 'spielt', 'gespielen'], answer: { index: 0 }, explanation: r`ge…t.` },
    { type: 'MCQ', prompt: r`Er hat gestern …`, choices: ['telefoniert', 'getelefoniert'], answer: { index: 0 }, explanation: r`-ieren sans ge-.` },
    { type: 'MCQ', prompt: r`Wir … Deutsch gelernt.`, choices: ['haben', 'sind', 'hat'], answer: { index: 0 }, explanation: r`haben, wir.` },
    { type: 'MCQ', prompt: r`Gestern … ich nicht kommen (können).`, choices: ['konnte', 'kann', 'könnte'], answer: { index: 0 }, explanation: r`Prétérit.` },
    { type: 'MCQ', prompt: r`Du … arbeiten (müssen, prétérit).`, choices: ['musstest', 'musst', 'musste'], answer: { index: 0 }, explanation: r`du → -test.` },
    { type: 'MCQ', prompt: r`Kommst du nicht? — …, ich komme!`, choices: ['Doch', 'Ja', 'Nein'], answer: { index: 0 }, explanation: r`Oui à une question négative.` },
    { type: 'MCQ', prompt: r`Le prétérit de „denken“ est :`, choices: ['dachte', 'denkte'], answer: { index: 0 }, explanation: r`Verbe faible irrégulier.` },
    { type: 'MCQ', prompt: r`Le prétérit de „wissen“ est :`, choices: ['wusste', 'wisste'], answer: { index: 0 }, explanation: r`Verbe faible irrégulier.` },
    { type: 'MCQ', prompt: r`„Au revoir“ :`, choices: ['Auf Wiedersehen', 'Guten Tag'], answer: { index: 0 }, explanation: r`Prendre congé.` },
    { type: 'MCQ', prompt: r`„Wie geht es Ihnen?“ s'adresse à :`, choices: ['une personne vouvoyée', 'un ami'], answer: { index: 0 }, explanation: r`Sie / Ihnen.` },
    { type: 'MCQ', prompt: r`Le participe passé de „kaufen“ est :`, choices: ['gekauft', 'gekaufen'], answer: { index: 0 }, explanation: r`ge…t.` },
    { type: 'MCQ', prompt: r`Le participe passé de „arbeiten“ est :`, choices: ['gearbeitet', 'gearbeit'], answer: { index: 0 }, explanation: r`-et après -t.` },
    { type: 'MCQ', prompt: r`Ihr … nicht spielen (dürfen, prétérit).`, choices: ['durftet', 'durften'], answer: { index: 0 }, explanation: r`ihr → -tet.` },
    { type: 'MCQ', prompt: r`Le participe passé est placé :`, choices: ['à la fin de la phrase', 'en première position'], answer: { index: 0 }, explanation: r`Construction en « parenthèse ».` },
    { type: 'OPEN', prompt: r`Schreib zwei Sätze im Perfekt über dein Wochenende.`, answer: { model: 'Ich habe meine Oma besucht. Wir haben zusammen gekocht.', keywords: ['habe', 'ge'] }, explanation: r`haben + participe en fin de phrase.` },
  ],
  assessment: devoirALL(
    'Begrüßen',
    [
      { section: 'Leseverstehen (6 Punkte)', sectionIntro: r`**Text.** „Guten Morgen, Herr Bamba!“, sagt Awa. „Guten Morgen, Awa! Wie geht's?“ — „Danke, gut. Gestern konnte ich nicht zur Schule kommen. Ich musste meine kleine Schwester zum Arzt bringen.“ — „Hast du die Lektion schon gelernt?“ — „Ja, ich habe sie am Abend gelernt.“`, prompt: r`1. Warum konnte Awa gestern nicht zur Schule kommen?`, type: 'MCQ', choices: ['Sie musste ihre Schwester zum Arzt bringen', 'Sie war krank'], answer: { index: 0 }, points: 2, correction: r`Text.` },
      { section: 'Leseverstehen (6 Punkte)', prompt: r`2. Wann hat sie die Lektion gelernt?`, type: 'MCQ', choices: ['Am Abend', 'Am Morgen'], answer: { index: 0 }, points: 2, correction: r`Text.` },
      { section: 'Leseverstehen (6 Punkte)', prompt: r`3. Wie geht es Awa?`, type: 'MCQ', choices: ['Gut', 'Schlecht'], answer: { index: 0 }, points: 2, correction: r`„Danke, gut.“` },
      { section: 'Grammatik (8 Punkte)', prompt: r`1. Wir haben am Samstag …  (tanzen)`, type: 'MCQ', choices: ['getanzt', 'tanzt'], answer: { index: 0 }, points: 2, correction: r`Parfait.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`2. Er … nicht schwimmen (können, Präteritum).`, type: 'MCQ', choices: ['konnte', 'kann'], answer: { index: 0 }, points: 2, correction: r`Prétérit.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`3. Ich … an dich (denken, Präteritum).`, type: 'MCQ', choices: ['dachte', 'denkte'], answer: { index: 0 }, points: 2, correction: r`Irrégulier.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`4. Hast du keine Zeit? — …, ich habe Zeit!`, type: 'MCQ', choices: ['Doch', 'Ja'], answer: { index: 0 }, points: 2, correction: r`doch.` },
      { section: 'Schreiben (6 Punkte)', prompt: r`Schreib einen kurzen Dialog (6 Repliken): Du triffst deinen Lehrer im Supermarkt und erzählst, was du am Wochenende gemacht hast.`, type: 'OPEN', answer: { model: 'Dialogue avec salutations et parfait' }, points: 6, correction: r`Salutations et prise de congé *(2 Punkte)* ; parfait correct *(3 Punkte)* ; orthographe *(1 Punkt)*.` },
    ],
    r`### 🎯 Tipps
1. Parfait : **haben** en 2ᵉ position, **participe** à la fin.
2. **Doch** pour dire « si » à une question négative.`,
  ),
};

export const aufDemMarkt: SeedChapter = {
  subject: 'ALL',
  order: 3,
  title: 'Auf dem Markt — Zahlen, Preise und die Negation',
  minutes: 480,
  officialRef: `${REF}, Thema 2 : Ich kann zählen, Lektion 1`,
  objectives: [
    'Compter, demander et dire un prix, faire des achats',
    'Employer la négation « nicht » et « kein »',
    'Employer le parfait des verbes de modalité',
  ],
  courseMd: r`
> **Situation.** Auf dem Markt in Treichville: „Was **kostet** ein Kilo Tomaten? — **Fünfhundert Franc**. — Das ist zu teuer! Ich habe **kein** Geld mehr. — Na gut, vierhundert!“

## 1. Die Zahlen (les nombres)
0 null, 1 eins, 2 zwei, 3 drei, 4 vier, 5 fünf, 6 sechs, 7 sieben, 8 acht, 9 neun, 10 zehn, 11 elf, 12 zwölf, 13 dreizehn, 16 sechzehn, 17 siebzehn, 20 zwanzig, 21 **einundzwanzig**, 30 dreißig, 40 vierzig, 50 fünfzig, 60 sechzig, 70 siebzig, 80 achtzig, 90 neunzig, 100 hundert, 500 fünfhundert, 1 000 tausend.
⚠️ On dit l'unité **avant** la dizaine : 45 = **fünfundvierzig**.

## 2. Einkaufen (faire les courses)
- *Was kostet…? / Wie viel kostet…? — Das kostet… Franc.*
- *Ich möchte ein Kilo Bananen. / Ich nehme zwei Ananas.*
- *Das ist billig / teuer / zu teuer.* — *Haben Sie…?* — *Sonst noch etwas? — Nein, danke. Das ist alles.*
Vocabulaire : der Markt, der Verkäufer / die Verkäuferin, das Kilo, die Tomate, die Banane, die Ananas, die Mango, der Reis, das Geld, bezahlen.

## 3. La négation : nicht ou kein ?
- **kein** (décliné comme *ein*) nie un **nom** précédé de *ein* ou **sans article** :
  „Ich habe **ein** Heft.“ → „Ich habe **kein** Heft.“ ; „Ich habe Geld.“ → „Ich habe **kein** Geld.“
  Accusatif : *keinen* (m), *keine* (f), *kein* (n), *keine* (pl) : „Ich kaufe **keinen** Reis.“
- **nicht** nie le **verbe**, un **adjectif**, un nom avec **article défini** ou un **nom propre** :
  „Ich kaufe **nicht**.“ — „Das ist **nicht** teuer.“ — „Ich kaufe **die** Mango **nicht**.“
- Place de *nicht* : en général **à la fin** de la phrase, mais **devant** l'adjectif, la préposition ou l'infinitif / participe.

## 4. Le parfait des verbes de modalité
Employé comme verbe principal : **haben + ge…t** : *können → gekonnt*, *müssen → gemusst*, *wollen → gewollt*, *dürfen → gedurft*.
„Ich **habe** das nicht **gewollt**.“ — „Er **hat** die Lektion **gekonnt**.“
(À l'oral, on préfère souvent le prétérit : *ich konnte, ich wollte*.)
`,
  summaryMd: r`
- Nombres : 21 = einundzwanzig ; 45 = fünfundvierzig (unité avant dizaine) ; 100 hundert ; 1 000 tausend.
- Acheter : Was kostet…? Das kostet… Ich möchte… Das ist zu teuer.
- **kein** : nom avec *ein* ou sans article (keinen, keine, kein) ; **nicht** : verbe, adjectif, nom avec article défini.
- Parfait des modaux : hat gekonnt, gemusst, gewollt, gedurft.
`,
  questions: [
    { type: 'MCQ', prompt: r`45 se dit :`, choices: ['fünfundvierzig', 'vierzigfünf'], answer: { index: 0 }, explanation: r`Unité avant dizaine.` },
    { type: 'MCQ', prompt: r`21 se dit :`, choices: ['einundzwanzig', 'zwanzigeins'], answer: { index: 0 }, explanation: r`ein-und-zwanzig.` },
    { type: 'MCQ', prompt: r`„Was kostet das?“ signifie :`, choices: ['Combien ça coûte ?', 'Qu’est-ce que c’est ?'], answer: { index: 0 }, explanation: r`Prix.` },
    { type: 'MCQ', prompt: r`Ich habe … Geld.`, choices: ['kein', 'nicht'], answer: { index: 0 }, explanation: r`Nom sans article → kein.` },
    { type: 'MCQ', prompt: r`Das ist … teuer.`, choices: ['nicht', 'kein'], answer: { index: 0 }, explanation: r`Adjectif → nicht.` },
    { type: 'MCQ', prompt: r`Ich kaufe … Reis (m, accusatif).`, choices: ['keinen', 'kein', 'keine'], answer: { index: 0 }, explanation: r`Accusatif masculin.` },
    { type: 'MCQ', prompt: r`Ich habe … Banane (f).`, choices: ['keine', 'keinen'], answer: { index: 0 }, explanation: r`Féminin.` },
    { type: 'MCQ', prompt: r`Ich kaufe die Mango …`, choices: ['nicht', 'kein'], answer: { index: 0 }, explanation: r`Article défini → nicht.` },
    { type: 'MCQ', prompt: r`Le parfait de „können“ (verbe principal) :`, choices: ['hat gekonnt', 'hat gekannt'], answer: { index: 0 }, explanation: r`gekonnt.` },
    { type: 'MCQ', prompt: r`„C’est trop cher“ :`, choices: ['Das ist zu teuer', 'Das ist zu billig'], answer: { index: 0 }, explanation: r`zu = trop.` },
    { type: 'NUMERIC', prompt: r`„dreihundertfünfzig“ = ?`, answer: { value: 350 }, explanation: r`drei-hundert-fünfzig.` },
    { type: 'NUMERIC', prompt: r`„siebenundsechzig“ = ?`, answer: { value: 67 }, explanation: r`sieben-und-sechzig.` },
    { type: 'MCQ', prompt: r`„Le vendeur“ :`, choices: ['der Verkäufer', 'der Käufer'], answer: { index: 0 }, explanation: r`Vocabulaire.` },
    { type: 'MCQ', prompt: r`„Das ist alles“ signifie :`, choices: ['C’est tout', 'C’est cher'], answer: { index: 0 }, explanation: r`Fin de l'achat.` },
    { type: 'OPEN', prompt: r`Schreib einen kurzen Dialog (4 Repliken) auf dem Markt.`, answer: { model: '— Was kostet ein Kilo Bananen? — 600 Franc. — Ich nehme zwei Kilo. — Das macht 1 200 Franc.', keywords: ['kostet', 'Franc'] }, explanation: r`Acheter.` },
  ],
  assessment: devoirALL(
    'Auf dem Markt',
    [
      { section: 'Leseverstehen (6 Punkte)', sectionIntro: r`**Text.** „Frau Konan geht auf den Markt in Adjamé. Sie möchte Reis, Tomaten und Mangos kaufen. Ein Kilo Reis kostet fünfhundert Franc, ein Kilo Tomaten siebenhundert Franc. Die Mangos sind heute sehr teuer, deshalb kauft sie keine Mangos. Sie bezahlt zwölfhundert Franc und geht nach Hause.“`, prompt: r`1. Was kostet ein Kilo Reis?`, type: 'MCQ', choices: ['500 Franc', '700 Franc'], answer: { index: 0 }, points: 2, correction: r`fünfhundert.` },
      { section: 'Leseverstehen (6 Punkte)', prompt: r`2. Warum kauft sie keine Mangos?`, type: 'MCQ', choices: ['Sie sind zu teuer', 'Sie sind nicht reif'], answer: { index: 0 }, points: 2, correction: r`„sehr teuer“.` },
      { section: 'Leseverstehen (6 Punkte)', prompt: r`3. Wie viel bezahlt sie?`, type: 'NUMERIC', answer: { value: 1200 }, points: 2, resultPoints: 2, correction: r`zwölfhundert = 1 200.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`1. Ich habe … Bruder.`, type: 'MCQ', choices: ['keinen', 'nicht'], answer: { index: 0 }, points: 2, correction: r`kein, accusatif masculin.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`2. Er kommt heute …`, type: 'MCQ', choices: ['nicht', 'kein'], answer: { index: 0 }, points: 2, correction: r`Verbe → nicht.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`3. 98 se dit :`, type: 'MCQ', choices: ['achtundneunzig', 'neunundachtzig'], answer: { index: 0 }, points: 2, correction: r`acht-und-neunzig.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`4. Sie hat das nicht … (wollen, Perfekt).`, type: 'MCQ', choices: ['gewollt', 'gewolt'], answer: { index: 0 }, points: 2, correction: r`Parfait du modal.` },
      { section: 'Schreiben (6 Punkte)', prompt: r`Du bist auf dem Markt. Schreib einen Dialog (6 Repliken) mit einer Verkäuferin: Fragen nach Preisen, Handeln, Bezahlen.`, type: 'OPEN', answer: { model: 'Dialogue avec prix et négation' }, points: 6, correction: r`Situation et répliques *(2 Punkte)* ; nombres et négation corrects *(3 Punkte)* ; orthographe *(1 Punkt)*.` },
    ],
    r`### 🎯 Tipps
1. **kein** devant un nom sans article défini ; **nicht** pour le reste.
2. Nombres : l'unité **avant** la dizaine (vierundzwanzig).`,
  ),
};

export const reiseNachMan: SeedChapter = {
  subject: 'ALL',
  order: 4,
  title: 'Eine Reise nach Man — Nebensätze und Adjektivdeklination',
  minutes: 540,
  officialRef: `${REF}, Thema 2 : Ich kann zählen, Lektion 2`,
  objectives: [
    'Raconter un voyage et décrire un lieu',
    'Construire une subordonnée (weil, dass, wenn, ob) avec le verbe à la fin',
    'Décliner l’adjectif épithète (nominatif et accusatif)',
  ],
  courseMd: r`
> **Situation.** „Wir fahren nach Man, **weil** wir die **schönen** Berge und die **berühmte** Lianenbrücke sehen **wollen**.“

## 1. Man, la ville des montagnes
Man, dans l'Ouest de la Côte d'Ivoire, est entourée de **montagnes** (la « Dent de Man ») ; on y visite des **cascades** et des **ponts de lianes**. Vocabulaire : *der Berg (-e), der Wasserfall (-¨e), die Brücke (-n), die Reise (-n), reisen, fahren, der Bus, die Fahrkarte, der Tourist, besichtigen (visiter).*

## 2. Les conjonctions de subordination
Avec **weil** (parce que), **dass** (que), **wenn** (si, quand), **ob** (si — interrogation indirecte), **als** (quand — passé unique), le **verbe conjugué** va **à la fin** de la subordonnée :
- „Ich bleibe zu Hause, **weil** ich krank **bin**.“
- „Ich weiß, **dass** Man schön **ist**.“
- „**Wenn** es regnet, **bleiben** wir im Hotel.“ (si la subordonnée est en tête, la principale commence par le **verbe**)
- „Er fragt, **ob** der Bus pünktlich **kommt**.“
Avec un verbe à particule séparable, elle se recolle : „…, weil der Bus um 6 Uhr **abfährt**.“
Avec un modal : „…, weil wir die Berge sehen **wollen**.“

## 3. La déclinaison de l'adjectif épithète
**Après l'article défini** (der, die, das) — terminaisons **-e** / **-en** :
| | masculin | féminin | neutre | pluriel |
|---|---|---|---|---|
| Nominatif | der schön**e** Berg | die schön**e** Stadt | das schön**e** Dorf | die schön**en** Berge |
| Accusatif | den schön**en** Berg | die schön**e** Stadt | das schön**e** Dorf | die schön**en** Berge |

**Après l'article indéfini** (ein, eine, ein) — l'adjectif porte la marque du genre :
| | masculin | féminin | neutre |
|---|---|---|---|
| Nominatif | ein schön**er** Berg | eine schön**e** Stadt | ein schön**es** Dorf |
| Accusatif | einen schön**en** Berg | eine schön**e** Stadt | ein schön**es** Dorf |

„Man ist **eine schöne** Stadt.“ — „Wir sehen **einen hohen** Berg.“
`,
  summaryMd: r`
- weil, dass, wenn, ob, als → **verbe conjugué à la fin** ; subordonnée en tête → principale commence par le verbe.
- Adjectif après der/die/das : nominatif **-e** (sauf pluriel -en) ; accusatif masculin **-en**.
- Après ein/eine : ein schön**er** (m), eine schön**e** (f), ein schön**es** (n) ; accusatif einen schön**en**.
- Vocabulaire : der Berg, der Wasserfall, die Brücke, die Reise, besichtigen.
`,
  questions: [
    { type: 'MCQ', prompt: r`Ich bleibe zu Hause, weil ich krank …`, choices: ['bin', 'bin ich'], answer: { index: 0 }, explanation: r`Verbe à la fin.` },
    { type: 'MCQ', prompt: r`Ich weiß, dass Man schön …`, choices: ['ist', 'ist es'], answer: { index: 0 }, explanation: r`Verbe à la fin.` },
    { type: 'MCQ', prompt: r`Wenn es regnet, … wir zu Hause.`, choices: ['bleiben', 'wir bleiben'], answer: { index: 0 }, explanation: r`Principale commence par le verbe.` },
    { type: 'MCQ', prompt: r`Er fragt, … der Bus kommt.`, choices: ['ob', 'dass', 'weil'], answer: { index: 0 }, explanation: r`Interrogation indirecte.` },
    { type: 'MCQ', prompt: r`„weil“ signifie :`, choices: ['parce que', 'si', 'que'], answer: { index: 0 }, explanation: r`Cause.` },
    { type: 'MCQ', prompt: r`Der … Berg (schön, nominatif).`, choices: ['schöne', 'schönen', 'schöner'], answer: { index: 0 }, explanation: r`Après der : -e.` },
    { type: 'MCQ', prompt: r`Ich sehe den … Berg (hoch → hohe-).`, choices: ['hohen', 'hohe'], answer: { index: 0 }, explanation: r`Accusatif masculin : -en.` },
    { type: 'MCQ', prompt: r`Man ist eine … Stadt.`, choices: ['schöne', 'schöner'], answer: { index: 0 }, explanation: r`eine + -e.` },
    { type: 'MCQ', prompt: r`Das ist ein … Dorf (klein).`, choices: ['kleines', 'kleine'], answer: { index: 0 }, explanation: r`ein + neutre : -es.` },
    { type: 'MCQ', prompt: r`Das ist ein … Wasserfall (groß).`, choices: ['großer', 'große'], answer: { index: 0 }, explanation: r`ein + masculin : -er.` },
    { type: 'MCQ', prompt: r`Die … Berge (schön, pluriel).`, choices: ['schönen', 'schöne'], answer: { index: 0 }, explanation: r`Pluriel après die : -en.` },
    { type: 'MCQ', prompt: r`…, weil der Bus um 6 Uhr … (abfahren)`, choices: ['abfährt', 'fährt ab'], answer: { index: 0 }, explanation: r`Particule recollée.` },
    { type: 'MCQ', prompt: r`„La cascade“ :`, choices: ['der Wasserfall', 'der Berg'], answer: { index: 0 }, explanation: r`Vocabulaire.` },
    { type: 'MCQ', prompt: r`„Besichtigen“ signifie :`, choices: ['visiter', 'voyager'], answer: { index: 0 }, explanation: r`Vocabulaire.` },
    { type: 'OPEN', prompt: r`Verbinde mit „weil“: „Ich fahre nach Man. Ich möchte die Berge sehen.“`, answer: { model: 'Ich fahre nach Man, weil ich die Berge sehen möchte.', keywords: ['weil', 'möchte'] }, explanation: r`Verbe conjugué à la fin.` },
  ],
  assessment: devoirALL(
    'Eine Reise nach Man',
    [
      { section: 'Leseverstehen (6 Punkte)', sectionIntro: r`**Text.** „In den Ferien ist die Klasse von Kouamé nach Man gefahren. Die Schüler sind mit einem großen Bus gefahren, weil der Weg lang ist. In Man haben sie einen hohen Berg und einen schönen Wasserfall besichtigt. Kouamé sagt, dass die Lianenbrücke das beste Erlebnis war. Er fragt seinen Lehrer, ob sie nächstes Jahr wieder nach Man fahren.“`, prompt: r`1. Wie sind die Schüler nach Man gefahren?`, type: 'MCQ', choices: ['Mit einem großen Bus', 'Mit dem Zug'], answer: { index: 0 }, points: 2, correction: r`Text.` },
      { section: 'Leseverstehen (6 Punkte)', prompt: r`2. Was war für Kouamé das beste Erlebnis?`, type: 'MCQ', choices: ['Die Lianenbrücke', 'Der Bus'], answer: { index: 0 }, points: 2, correction: r`Text.` },
      { section: 'Leseverstehen (6 Punkte)', prompt: r`3. Was fragt Kouamé seinen Lehrer?`, type: 'MCQ', choices: ['Ob sie nächstes Jahr wieder nach Man fahren', 'Wann der Bus kommt'], answer: { index: 0 }, points: 2, correction: r`Text.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`1. Ich lerne Deutsch, weil ich nach Deutschland reisen …`, type: 'MCQ', choices: ['will', 'will ich'], answer: { index: 0 }, points: 2, correction: r`Verbe à la fin.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`2. Wir besuchen den … Markt (groß).`, type: 'MCQ', choices: ['großen', 'große'], answer: { index: 0 }, points: 2, correction: r`Accusatif masculin.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`3. Das ist ein … Hotel (neu).`, type: 'MCQ', choices: ['neues', 'neue'], answer: { index: 0 }, points: 2, correction: r`ein + neutre.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`4. Wenn ich Zeit habe, … ich dich.`, type: 'MCQ', choices: ['besuche', 'ich besuche'], answer: { index: 0 }, points: 2, correction: r`Inversion.` },
      { section: 'Schreiben (6 Punkte)', prompt: r`Schreib 5 bis 6 Sätze über eine Reise in eine Stadt der Elfenbeinküste. Benutze „weil“ oder „dass“ und zwei Adjektive.`, type: 'OPEN', answer: { model: 'Récit avec subordonnées et adjectifs' }, points: 6, correction: r`Contenu *(2 Punkte)* ; subordonnée correcte *(2 Punkte)* ; adjectifs déclinés *(1 Punkt)* ; orthographe *(1 Punkt)*.` },
    ],
    r`### 🎯 Tipps
1. Dans la subordonnée, le **verbe conjugué** va **à la fin**.
2. Après **einen** (accusatif masculin), l'adjectif prend **-en**.`,
  ),
};

export const lieblingsfach: SeedChapter = {
  subject: 'ALL',
  order: 5,
  title: 'Mein Lieblingsfach — die Schule und die Komposita',
  minutes: 360,
  officialRef: `${REF}, Thema 3 : In der Schule, Lektion 1`,
  objectives: [
    'Parler des matières scolaires et de sa matière préférée',
    'Former et comprendre les mots composés (Komposita)',
    'Exprimer ses goûts avec « gern », « lieber », « am liebsten »',
  ],
  courseMd: r`
> **Situation.** „Was ist dein **Lieblingsfach**? — Mein Lieblingsfach ist Mathe. Ich rechne **gern**, aber am **liebsten** mache ich Sport.“

## 1. Die Schulfächer (les matières)
*Mathe(matik), Deutsch, Französisch, Englisch, Spanisch, Physik, Chemie, Biologie, Geschichte, Erdkunde (Geographie), Sport, Kunst, Musik, Informatik.*
Vocabulaire : *der Stundenplan, die Pause, der Schulhof, das Klassenzimmer, die Hausaufgabe, die Note, der Lehrer / die Lehrerin, der Schüler / die Schülerin.*

## 2. Les mots composés (Komposita)
L'allemand forme beaucoup de mots en **juxtaposant** deux noms (ou plus). Le **dernier** élément donne le **sens principal** et le **genre** ; le premier le précise :
- *die Schule + der Hof → **der** Schulhof* (la cour de l'école)
- *die Klasse + das Zimmer → **das** Klassenzimmer*
- *die Stunde + der Plan → **der** Stundenplan*
- *der Liebling + das Fach → **das** Lieblingsfach*
- *das Haus + die Aufgabe → **die** Hausaufgabe*
Parfois un élément de liaison s'ajoute : **-s-** (Lieblings-), **-n-** (Klassen-).
Un composé peut aussi commencer par un adjectif ou un verbe : *der Schreibtisch* (schreiben + der Tisch).

## 3. Exprimer ses goûts : gern, lieber, am liebsten
- verbe + **gern** : „Ich lese **gern**.“ (j'aime lire)
- **lieber** (préférer) : „Ich spiele **lieber** Fußball.“
- **am liebsten** (préférer par-dessus tout) : „**Am liebsten** mache ich Sport.“
- **nicht gern** : „Ich rechne **nicht gern**.“
- avec un nom : *Ich mag Mathe. Mathe gefällt mir.*
`,
  summaryMd: r`
- Matières : Mathe, Deutsch, Englisch, Physik, Biologie, Geschichte, Erdkunde, Sport…
- **Komposita** : le **dernier** mot donne le **genre** et le sens (der Schulhof, das Klassenzimmer, der Stundenplan) ; liaison -s-, -n-.
- Goûts : gern → lieber → am liebsten ; nicht gern ; ich mag… ; … gefällt mir.
`,
  questions: [
    { type: 'MCQ', prompt: r`„die Schule“ + „der Hof“ :`, choices: ['der Schulhof', 'die Schulhof', 'das Schulhof'], answer: { index: 0 }, explanation: r`Genre du dernier mot.` },
    { type: 'MCQ', prompt: r`„die Klasse“ + „das Zimmer“ :`, choices: ['das Klassenzimmer', 'die Klassenzimmer'], answer: { index: 0 }, explanation: r`Neutre.` },
    { type: 'MCQ', prompt: r`„das Haus“ + „die Aufgabe“ :`, choices: ['die Hausaufgabe', 'das Hausaufgabe'], answer: { index: 0 }, explanation: r`Féminin.` },
    { type: 'MCQ', prompt: r`Le genre d'un mot composé est donné par :`, choices: ['le dernier élément', 'le premier élément'], answer: { index: 0 }, explanation: r`Règle des Komposita.` },
    { type: 'MCQ', prompt: r`„der Stundenplan“ signifie :`, choices: ['l’emploi du temps', 'la récréation'], answer: { index: 0 }, explanation: r`Stunde + Plan.` },
    { type: 'MCQ', prompt: r`„Erdkunde“ est :`, choices: ['la géographie', 'la physique'], answer: { index: 0 }, explanation: r`Matière.` },
    { type: 'MCQ', prompt: r`„J’aime lire“ :`, choices: ['Ich lese gern', 'Ich gern lese'], answer: { index: 0 }, explanation: r`verbe + gern.` },
    { type: 'MCQ', prompt: r`„Je préfère jouer au football“ :`, choices: ['Ich spiele lieber Fußball', 'Ich spiele gern Fußball'], answer: { index: 0 }, explanation: r`lieber.` },
    { type: 'MCQ', prompt: r`„Ce que je préfère par-dessus tout“ :`, choices: ['am liebsten', 'gern'], answer: { index: 0 }, explanation: r`Superlatif de gern.` },
    { type: 'MCQ', prompt: r`„Die Pause“ signifie :`, choices: ['la récréation', 'la note'], answer: { index: 0 }, explanation: r`Vocabulaire.` },
    { type: 'MCQ', prompt: r`„der Schreibtisch“ vient de :`, choices: ['schreiben + der Tisch', 'die Schrift + das Tier'], answer: { index: 0 }, explanation: r`Verbe + nom.` },
    { type: 'MCQ', prompt: r`Mathe … mir (plaire).`, choices: ['gefällt', 'mag'], answer: { index: 0 }, explanation: r`gefallen + datif.` },
    { type: 'MCQ', prompt: r`„die Note“ signifie :`, choices: ['la note', 'la notice'], answer: { index: 0 }, explanation: r`Vocabulaire scolaire.` },
    { type: 'MCQ', prompt: r`„das Lieblingsfach“ contient la liaison :`, choices: ['-s-', '-n-'], answer: { index: 0 }, explanation: r`Liebling-s-Fach.` },
    { type: 'OPEN', prompt: r`Was ist dein Lieblingsfach? Antworte in zwei Sätzen mit „gern“ und „am liebsten“.`, answer: { model: 'Mein Lieblingsfach ist Biologie. Ich lerne gern, aber am liebsten mache ich Sport.', keywords: ['Lieblingsfach', 'gern', 'am liebsten'] }, explanation: r`Goûts.` },
  ],
  assessment: devoirALL(
    'Mein Lieblingsfach',
    [
      { section: 'Leseverstehen (6 Punkte)', sectionIntro: r`**Text.** „Ich heiße Adjoua und gehe in die dritte Klasse. Mein Stundenplan ist voll: Mathe, Französisch, Englisch, Deutsch, Physik… Ich lerne gern Sprachen, aber mein Lieblingsfach ist Biologie, weil ich Ärztin werden möchte. In der Pause spiele ich auf dem Schulhof mit meinen Freundinnen. Mathe mag ich nicht so gern.“`, prompt: r`1. Was ist Adjouas Lieblingsfach?`, type: 'MCQ', choices: ['Biologie', 'Mathe'], answer: { index: 0 }, points: 2, correction: r`Text.` },
      { section: 'Leseverstehen (6 Punkte)', prompt: r`2. Warum?`, type: 'MCQ', choices: ['Sie möchte Ärztin werden', 'Der Lehrer ist nett'], answer: { index: 0 }, points: 2, correction: r`Text.` },
      { section: 'Leseverstehen (6 Punkte)', prompt: r`3. Wo spielt sie in der Pause?`, type: 'MCQ', choices: ['Auf dem Schulhof', 'Im Klassenzimmer'], answer: { index: 0 }, points: 2, correction: r`Text.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`1. die Hand + die Tasche →`, type: 'MCQ', choices: ['die Handtasche', 'der Handtasche'], answer: { index: 0 }, points: 2, correction: r`Féminin.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`2. der Sport + der Lehrer →`, type: 'MCQ', choices: ['der Sportlehrer', 'das Sportlehrer'], answer: { index: 0 }, points: 2, correction: r`Masculin.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`3. Ich schwimme gern, aber ich laufe …`, type: 'MCQ', choices: ['lieber', 'gerner'], answer: { index: 0 }, points: 2, correction: r`Comparatif de gern.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`4. … spiele ich Basketball (par-dessus tout).`, type: 'MCQ', choices: ['Am liebsten', 'Gern'], answer: { index: 0 }, points: 2, correction: r`Superlatif.` },
      { section: 'Schreiben (6 Punkte)', prompt: r`Schreib 5 bis 6 Sätze über deine Schule: Fächer, Lieblingsfach, was du gern / nicht gern machst.`, type: 'OPEN', answer: { model: 'Texte sur l’école avec gern/lieber' }, points: 6, correction: r`Contenu *(2 Punkte)* ; gern / lieber / am liebsten *(2 Punkte)* ; un mot composé correct *(1 Punkt)* ; orthographe *(1 Punkt)*.` },
    ],
    r`### 🎯 Tipps
1. Dans un mot composé, regarde le **dernier mot** pour le genre.
2. gern → **lieber** → **am liebsten**.`,
  ),
};

export const juliana: SeedChapter = {
  subject: 'ALL',
  order: 6,
  title: 'Juliana — die weibliche Form des Nomens und das Futur',
  minutes: 480,
  officialRef: `${REF}, Thema 3 : In der Schule, Lektion 2`,
  objectives: [
    'Parler des métiers et des projets d’avenir',
    'Former le féminin des noms de personnes (-in)',
    'Employer le futur (werden + infinitif)',
  ],
  courseMd: r`
> **Situation.** Juliana erzählt: „Später **werde** ich **Ingenieurin werden**. Meine Schwester **wird Lehrerin**, und mein Bruder möchte Koch werden.“

## 1. Les métiers (die Berufe)
*der Arzt / die Ärztin, der Lehrer / die Lehrerin, der Ingenieur / die Ingenieurin, der Koch / die Köchin, der Bauer / die Bäuerin, der Polizist / die Polizistin, der Journalist / die Journalistin, der Verkäufer / die Verkäuferin, der Anwalt / die Anwältin (avocat), der Krankenpfleger / die Krankenpflegerin (infirmier).*
⚠️ En allemand, on dit **sans article** : „Ich bin **Schüler**.“ — „Sie wird **Ärztin**.“

## 2. Le féminin des noms de personnes
On ajoute **-in** au masculin ; souvent avec **Umlaut** sur a, o, u :
- *der Lehrer → die Lehrer**in***, *der Schüler → die Schüler**in***
- *der Arzt → die **Ä**rzt**in***, *der Koch → die K**ö**ch**in***, *der Bauer → die B**ä**uer**in***
- Pluriel : **-innen** : *die Lehrer**innen***, *die Ärzt**innen***.
- Exceptions : *der Kollege → die Kollegin* (-e disparaît).

## 3. Le futur : werden + infinitif
| | werden |
|---|---|
| ich | werde |
| du | wirst |
| er / sie / es | wird |
| wir | werden |
| ihr | werdet |
| sie / Sie | werden |
L'**infinitif** se place **à la fin** de la phrase :
„Ich **werde** morgen nach Bouaké **fahren**.“ — „**Wirst** du Medizin **studieren**?“
⚠️ *werden* seul signifie aussi **devenir** : „Ich **werde** Ärztin.“ (je deviens / je deviendrai médecin) ; au futur : „Ich **werde** Ärztin **werden**.“
Souvent, on exprime le futur avec le **présent** + un marqueur de temps : „**Morgen** fahre ich nach Bouaké.“
`,
  summaryMd: r`
- Féminin : **-in** (Lehrerin) ; Umlaut fréquent (Ärztin, Köchin) ; pluriel **-innen**.
- Métier sans article : Ich bin Schüler. Sie wird Ärztin.
- Futur : **werden** (werde, wirst, wird, werden, werdet, werden) + **infinitif à la fin**.
- werden seul = devenir.
`,
  questions: [
    { type: 'MCQ', prompt: r`Le féminin de „der Lehrer“ :`, choices: ['die Lehrerin', 'die Lehrere'], answer: { index: 0 }, explanation: r`-in.` },
    { type: 'MCQ', prompt: r`Le féminin de „der Arzt“ :`, choices: ['die Ärztin', 'die Arztin'], answer: { index: 0 }, explanation: r`Umlaut.` },
    { type: 'MCQ', prompt: r`Le féminin de „der Koch“ :`, choices: ['die Köchin', 'die Kochin'], answer: { index: 0 }, explanation: r`Umlaut.` },
    { type: 'MCQ', prompt: r`Le pluriel de „die Lehrerin“ :`, choices: ['die Lehrerinnen', 'die Lehrerins'], answer: { index: 0 }, explanation: r`-innen.` },
    { type: 'MCQ', prompt: r`Ich … morgen kommen (futur).`, choices: ['werde', 'wird', 'werden'], answer: { index: 0 }, explanation: r`ich werde.` },
    { type: 'MCQ', prompt: r`Du … Medizin studieren.`, choices: ['wirst', 'werdest', 'wird'], answer: { index: 0 }, explanation: r`du wirst.` },
    { type: 'MCQ', prompt: r`Sie (elle) … Ingenieurin werden.`, choices: ['wird', 'werdet'], answer: { index: 0 }, explanation: r`sie wird.` },
    { type: 'MCQ', prompt: r`Ihr … nach Man fahren.`, choices: ['werdet', 'werden'], answer: { index: 0 }, explanation: r`ihr werdet.` },
    { type: 'MCQ', prompt: r`Au futur, l'infinitif est placé :`, choices: ['à la fin', 'après le sujet'], answer: { index: 0 }, explanation: r`Construction.` },
    { type: 'MCQ', prompt: r`„Je suis élève“ :`, choices: ['Ich bin Schüler', 'Ich bin ein der Schüler'], answer: { index: 0 }, explanation: r`Sans article.` },
    { type: 'MCQ', prompt: r`„werden“ seul signifie aussi :`, choices: ['devenir', 'vouloir'], answer: { index: 0 }, explanation: r`Ich werde Arzt.` },
    { type: 'MCQ', prompt: r`„die Bäuerin“ est :`, choices: ['la paysanne', 'la boulangère'], answer: { index: 0 }, explanation: r`der Bauer.` },
    { type: 'MCQ', prompt: r`„die Polizistin“ est :`, choices: ['la policière', 'la politicienne'], answer: { index: 0 }, explanation: r`Vocabulaire.` },
    { type: 'MCQ', prompt: r`„die Anwältin“ est :`, choices: ['l’avocate', 'l’infirmière'], answer: { index: 0 }, explanation: r`der Anwalt.` },
    { type: 'OPEN', prompt: r`Was wirst du später werden? (deux phrases au futur)`, answer: { model: 'Ich werde Journalistin werden. Ich werde in Abidjan arbeiten.', keywords: ['werde', 'werden'] }, explanation: r`werden + infinitif à la fin.` },
  ],
  assessment: devoirALL(
    'Juliana',
    [
      { section: 'Leseverstehen (6 Punkte)', sectionIntro: r`**Text.** „Juliana ist fünfzehn und wohnt in Yamoussoukro. Ihre Mutter ist Krankenpflegerin, ihr Vater ist Bauer. Juliana ist eine sehr gute Schülerin. Nach dem Abitur wird sie in Abidjan studieren, denn sie wird Ingenieurin werden. Sie sagt: ‚Ich werde Brücken und Straßen für mein Land bauen.‘“`, prompt: r`1. Was ist Julianas Mutter von Beruf?`, type: 'MCQ', choices: ['Krankenpflegerin', 'Lehrerin'], answer: { index: 0 }, points: 2, correction: r`Text.` },
      { section: 'Leseverstehen (6 Punkte)', prompt: r`2. Was wird Juliana werden?`, type: 'MCQ', choices: ['Ingenieurin', 'Ärztin'], answer: { index: 0 }, points: 2, correction: r`Text.` },
      { section: 'Leseverstehen (6 Punkte)', prompt: r`3. Was wird sie bauen?`, type: 'MCQ', choices: ['Brücken und Straßen', 'Häuser'], answer: { index: 0 }, points: 2, correction: r`Text.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`1. der Journalist → die …`, type: 'MCQ', choices: ['Journalistin', 'Journalistine'], answer: { index: 0 }, points: 2, correction: r`-in.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`2. Wir … morgen einen Test schreiben.`, type: 'MCQ', choices: ['werden', 'wird'], answer: { index: 0 }, points: 2, correction: r`wir werden.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`3. … du mir helfen?`, type: 'MCQ', choices: ['Wirst', 'Wird'], answer: { index: 0 }, points: 2, correction: r`du wirst.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`4. Er wird nächstes Jahr nach Deutschland …`, type: 'MCQ', choices: ['fliegen', 'fliegt'], answer: { index: 0 }, points: 2, correction: r`Infinitif à la fin.` },
      { section: 'Schreiben (6 Punkte)', prompt: r`Schreib 5 bis 6 Sätze über deine Zukunft: Beruf, Stadt, Familie. Benutze das Futur.`, type: 'OPEN', answer: { model: 'Projet d’avenir au futur' }, points: 6, correction: r`Contenu *(2 Punkte)* ; futur correct *(3 Punkte)* ; orthographe *(1 Punkt)*.` },
    ],
    r`### 🎯 Tipps
1. Féminin : **-in**, et pense à l'**Umlaut** (Ärztin, Köchin).
2. Futur : **werden** conjugué + **infinitif à la fin**.`,
  ),
};

export const ichLadeDichEin: SeedChapter = {
  subject: 'ALL',
  order: 7,
  title: 'Ich lade dich ein — der Genitiv und die Wechselpräpositionen',
  minutes: 420,
  officialRef: `${REF}, Thema 4 : Zu Hause, Lektion 1`,
  objectives: [
    'Inviter quelqu’un, accepter ou refuser une invitation, décrire sa maison',
    'Employer le génitif (possession)',
    'Employer les prépositions mixtes : datif (Wo?) ou accusatif (Wohin?)',
  ],
  courseMd: r`
> **Situation.** „Ich **lade dich** zu meinem Geburtstag **ein**! Die Party ist im Haus **meines Onkels**. Leg dein Geschenk **auf den** Tisch: es liegt dann **auf dem** Tisch.“

## 1. Einladen (inviter)
- Inviter : *Ich lade dich zu meinem Geburtstag ein. Kommst du zu meiner Party? Hast du am Samstag Zeit?*
- Accepter : *Gern! Ja, ich komme gern. Super, danke!*
- Refuser : *Leider kann ich nicht. Es tut mir leid, ich habe keine Zeit.*
- Vocabulaire de la maison : *das Haus, die Wohnung, das Wohnzimmer, das Schlafzimmer, die Küche, das Bad, der Garten, der Tisch, der Stuhl, das Bett, der Schrank, das Sofa.*

## 2. Le génitif (la possession)
| | masculin | féminin | neutre | pluriel |
|---|---|---|---|---|
| article défini | **des** Vater**s** | **der** Mutter | **des** Kind**es** | **der** Kinder |
| possessif | **meines** Onkel**s** | **meiner** Tante | **meines** Hauses | **meiner** Eltern |
- Au masculin et au neutre, le nom prend **-s** (ou **-es** pour les mots d'une syllabe).
- „das Haus **meines Onkels**“ (la maison de mon oncle) ; „das Auto **der Lehrerin**“.
- Avec un nom propre : **-s** collé : „**Kofis** Haus“, „**Ayas** Zimmer“.
- À l'oral, on utilise souvent *von* + datif : „das Haus **von meinem** Onkel“.

## 3. Les prépositions mixtes (Wechselpräpositionen)
**an, auf, hinter, in, neben, über, unter, vor, zwischen**
- **Wo?** (lieu où l'on est, sans déplacement) → **datif** : „Das Buch liegt **auf dem** Tisch.“ — „Ich bin **im** (in dem) Garten.“
- **Wohin?** (direction, déplacement) → **accusatif** : „Ich lege das Buch **auf den** Tisch.“ — „Ich gehe **in den** Garten.“
Verbes de position (datif) : *liegen, stehen, sitzen, hängen* ; verbes de mouvement (accusatif) : *legen, stellen, setzen, hängen, gehen*.
Contractions : *in dem → **im***, *in das → **ins***, *an dem → **am***, *an das → **ans***.
`,
  summaryMd: r`
- Inviter : Ich lade dich ein… ; accepter : Gern! ; refuser : Leider kann ich nicht.
- Génitif : **des** Vater**s**, **der** Mutter, **des** Kind**es**, **der** Kinder ; Kofis Haus.
- Prépositions mixtes : an, auf, hinter, in, neben, über, unter, vor, zwischen.
- **Wo?** → **datif** (liegen, stehen) ; **Wohin?** → **accusatif** (legen, stellen, gehen).
- im, ins, am, ans.
`,
  questions: [
    { type: 'MCQ', prompt: r`Das Haus … Onkels.`, choices: ['meines', 'meinem', 'meiner'], answer: { index: 0 }, explanation: r`Génitif masculin.` },
    { type: 'MCQ', prompt: r`Das Auto … Lehrerin.`, choices: ['der', 'des', 'die'], answer: { index: 0 }, explanation: r`Génitif féminin.` },
    { type: 'MCQ', prompt: r`Le génitif de „der Vater“ :`, choices: ['des Vaters', 'dem Vater'], answer: { index: 0 }, explanation: r`des + -s.` },
    { type: 'MCQ', prompt: r`„La maison de Kofi“ :`, choices: ['Kofis Haus', 'Kofi’s Haus'], answer: { index: 0 }, explanation: r`-s collé sans apostrophe.` },
    { type: 'MCQ', prompt: r`Das Buch liegt auf … Tisch. (Wo?)`, choices: ['dem', 'den'], answer: { index: 0 }, explanation: r`Datif.` },
    { type: 'MCQ', prompt: r`Ich lege das Buch auf … Tisch. (Wohin?)`, choices: ['den', 'dem'], answer: { index: 0 }, explanation: r`Accusatif.` },
    { type: 'MCQ', prompt: r`Ich gehe … Garten.`, choices: ['in den', 'im'], answer: { index: 0 }, explanation: r`Direction → accusatif.` },
    { type: 'MCQ', prompt: r`Ich bin … Garten.`, choices: ['im', 'in den'], answer: { index: 0 }, explanation: r`Lieu → datif (in dem = im).` },
    { type: 'MCQ', prompt: r`„in das“ devient :`, choices: ['ins', 'im'], answer: { index: 0 }, explanation: r`Contraction.` },
    { type: 'MCQ', prompt: r`Pour accepter une invitation :`, choices: ['Gern!', 'Leider nicht.'], answer: { index: 0 }, explanation: r`Accepter.` },
    { type: 'MCQ', prompt: r`„Leider kann ich nicht“ signifie :`, choices: ['Malheureusement, je ne peux pas', 'Je viens volontiers'], answer: { index: 0 }, explanation: r`Refuser.` },
    { type: 'MCQ', prompt: r`Das Bild hängt … der Wand (an + datif).`, choices: ['an', 'auf'], answer: { index: 0 }, explanation: r`an der Wand.` },
    { type: 'MCQ', prompt: r`„die Küche“ est :`, choices: ['la cuisine', 'la chambre'], answer: { index: 0 }, explanation: r`Vocabulaire.` },
    { type: 'MCQ', prompt: r`Avec „stellen“ (mouvement), on emploie :`, choices: ['l’accusatif', 'le datif'], answer: { index: 0 }, explanation: r`Wohin?` },
    { type: 'OPEN', prompt: r`Lade einen Freund zu deinem Geburtstag ein (deux phrases).`, answer: { model: 'Ich lade dich zu meinem Geburtstag ein. Die Party ist am Samstag um 16 Uhr bei mir.', keywords: ['lade', 'ein'] }, explanation: r`Verbe séparable einladen.` },
  ],
  assessment: devoirALL(
    'Ich lade dich ein',
    [
      { section: 'Leseverstehen (6 Punkte)', sectionIntro: r`**Text.** „Liebe Fatou, am Samstag ist mein Geburtstag. Ich lade dich zu meiner Party ein! Sie ist im Garten meines Onkels in Cocody, um 15 Uhr. Wir essen Attiéké mit Fisch und tanzen. Bringst du deine Musik mit? Bitte antworte bis Donnerstag. Dein Yao.“`, prompt: r`1. Wo ist die Party?`, type: 'MCQ', choices: ['Im Garten seines Onkels', 'In der Schule'], answer: { index: 0 }, points: 2, correction: r`Text.` },
      { section: 'Leseverstehen (6 Punkte)', prompt: r`2. Um wie viel Uhr beginnt sie?`, type: 'NUMERIC', answer: { value: 15 }, points: 2, resultPoints: 2, correction: r`um 15 Uhr.` },
      { section: 'Leseverstehen (6 Punkte)', prompt: r`3. Was soll Fatou mitbringen?`, type: 'MCQ', choices: ['Ihre Musik', 'Einen Kuchen'], answer: { index: 0 }, points: 2, correction: r`Text.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`1. Das ist das Zimmer … Schwester.`, type: 'MCQ', choices: ['meiner', 'meines'], answer: { index: 0 }, points: 2, correction: r`Génitif féminin.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`2. Die Katze schläft unter … Bett. (Wo?)`, type: 'MCQ', choices: ['dem', 'das'], answer: { index: 0 }, points: 2, correction: r`Datif.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`3. Ich stelle die Flasche in … Kühlschrank. (Wohin?)`, type: 'MCQ', choices: ['den', 'dem'], answer: { index: 0 }, points: 2, correction: r`Accusatif.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`4. Wir gehen … Kino (in + das).`, type: 'MCQ', choices: ['ins', 'im'], answer: { index: 0 }, points: 2, correction: r`Contraction.` },
      { section: 'Schreiben (6 Punkte)', prompt: r`Antworte Yao (5 bis 6 Sätze): Du nimmst die Einladung an (oder lehnst sie ab) und beschreibst, was du mitbringst.`, type: 'OPEN', answer: { model: 'Réponse à l’invitation' }, points: 6, correction: r`Forme de lettre *(1 Punkt)* ; acceptation/refus justifié *(2 Punkte)* ; grammaire *(2 Punkte)* ; orthographe *(1 Punkt)*.` },
    ],
    r`### 🎯 Tipps
1. Pose la question **Wo?** (datif) ou **Wohin?** (accusatif).
2. Génitif masculin/neutre : **des … -s**.`,
  ),
};

export const tageslauf: SeedChapter = {
  subject: 'ALL',
  order: 8,
  title: 'Mein Tageslauf — Komparativ, Superlativ und Perfekt (starke Verben)',
  minutes: 480,
  officialRef: `${REF}, Thema 4 : Zu Hause, Lektion 2`,
  objectives: [
    'Décrire sa journée et dire l’heure',
    'Employer les verbes à particule séparable',
    'Employer le comparatif et le superlatif ; le parfait des verbes forts',
  ],
  courseMd: r`
> **Situation.** „Ich **stehe** um sechs Uhr **auf**. Mein Bruder steht **später** auf, aber meine Mutter steht **am frühesten** auf. Gestern **bin** ich zu Fuß zur Schule **gegangen**.“

## 1. Die Uhrzeit und der Tagesablauf
- *Wie spät ist es? / Wie viel Uhr ist es? — Es ist sieben Uhr. Es ist halb acht (7h30). Es ist Viertel nach acht (8h15). Es ist Viertel vor neun (8h45).*
- ⚠️ **halb acht** = 7h30 (la moitié **vers** huit).
- Verbes à **particule séparable** : *aufstehen, anziehen, frühstücken, abfahren, ankommen, fernsehen, einkaufen* : „Ich **stehe** um 6 Uhr **auf**.“ — „Der Bus **fährt** um 7 Uhr **ab**.“

## 2. Komparativ und Superlativ
| Adjectif | Comparatif (+ **als**) | Superlatif |
|---|---|---|
| schnell | schnell**er** | am schnell**sten** |
| früh | früh**er** | am früh**esten** |
| alt | **ä**lt**er** | am **ä**lt**esten** |
| groß | gr**ö**ß**er** | am gr**ö**ß**ten** |
| gut | **besser** | am **besten** |
| viel | **mehr** | am **meisten** |
| gern | **lieber** | am **liebsten** |
- Comparaison de supériorité : „Yao ist **größer als** Koffi.“
- Égalité : **so … wie** : „Aya ist **so** alt **wie** ich.“

## 3. Das Perfekt der starken (unregelmäßigen) Verben
Participe passé en **ge- … -en**, souvent avec changement de voyelle :
| Infinitif | Parfait |
|---|---|
| essen | hat **gegessen** |
| trinken | hat **getrunken** |
| schreiben | hat **geschrieben** |
| sehen | hat **gesehen** |
| schlafen | hat **geschlafen** |
| gehen | **ist** gegangen |
| fahren | **ist** gefahren |
| kommen | **ist** gekommen |
| aufstehen | **ist** aufgestanden |
- Auxiliaire **sein** pour les verbes de **déplacement** ou de **changement d'état** (gehen, fahren, kommen, aufstehen, bleiben) ; **haben** pour les autres.
- „Gestern **bin** ich um 6 Uhr **aufgestanden** und **habe** Brot **gegessen**.“
`,
  summaryMd: r`
- Heure : Es ist halb acht (7h30), Viertel nach (et quart), Viertel vor (moins le quart).
- Verbes séparables : Ich stehe um 6 Uhr **auf**.
- Comparatif **-er + als** ; superlatif **am -sten** ; so … wie ; gut → besser → am besten ; alt → älter.
- Parfait des verbes forts : **ge…en** (gegessen, getrunken, geschrieben) ; **sein** avec les verbes de mouvement (ist gegangen, gefahren, aufgestanden).
`,
  questions: [
    { type: 'MCQ', prompt: r`„halb acht“ =`, choices: ['7h30', '8h30'], answer: { index: 0 }, explanation: r`La moitié vers huit.` },
    { type: 'MCQ', prompt: r`„Viertel nach acht“ =`, choices: ['8h15', '7h45'], answer: { index: 0 }, explanation: r`et quart.` },
    { type: 'MCQ', prompt: r`Ich … um 6 Uhr … (aufstehen).`, choices: ['stehe / auf', 'aufstehe / —'], answer: { index: 0 }, explanation: r`Particule séparée.` },
    { type: 'MCQ', prompt: r`Yao ist größer … Koffi.`, choices: ['als', 'wie'], answer: { index: 0 }, explanation: r`Comparatif + als.` },
    { type: 'MCQ', prompt: r`Aya ist so alt … ich.`, choices: ['wie', 'als'], answer: { index: 0 }, explanation: r`Égalité so … wie.` },
    { type: 'MCQ', prompt: r`Le comparatif de „gut“ :`, choices: ['besser', 'guter'], answer: { index: 0 }, explanation: r`Irrégulier.` },
    { type: 'MCQ', prompt: r`Le superlatif de „schnell“ :`, choices: ['am schnellsten', 'am schneller'], answer: { index: 0 }, explanation: r`am -sten.` },
    { type: 'MCQ', prompt: r`Le comparatif de „alt“ :`, choices: ['älter', 'alter'], answer: { index: 0 }, explanation: r`Umlaut.` },
    { type: 'MCQ', prompt: r`Ich … nach Hause gegangen.`, choices: ['bin', 'habe'], answer: { index: 0 }, explanation: r`Mouvement → sein.` },
    { type: 'MCQ', prompt: r`Wir … Reis gegessen.`, choices: ['haben', 'sind'], answer: { index: 0 }, explanation: r`haben.` },
    { type: 'MCQ', prompt: r`Le participe passé de „schreiben“ :`, choices: ['geschrieben', 'geschreibt'], answer: { index: 0 }, explanation: r`Verbe fort.` },
    { type: 'MCQ', prompt: r`Le participe passé de „trinken“ :`, choices: ['getrunken', 'getrinkt'], answer: { index: 0 }, explanation: r`Verbe fort.` },
    { type: 'MCQ', prompt: r`Er ist um 5 Uhr … (aufstehen).`, choices: ['aufgestanden', 'aufgesteht'], answer: { index: 0 }, explanation: r`ge entre particule et radical.` },
    { type: 'MCQ', prompt: r`Le superlatif de „viel“ :`, choices: ['am meisten', 'am vielsten'], answer: { index: 0 }, explanation: r`Irrégulier.` },
    { type: 'OPEN', prompt: r`Beschreib deinen Morgen in drei Sätzen (avec deux verbes séparables).`, answer: { model: 'Ich stehe um sechs Uhr auf. Ich ziehe mich an und frühstücke. Um sieben Uhr fahre ich ab.', keywords: ['auf', 'an'] }, explanation: r`Particules en fin de proposition.` },
  ],
  assessment: devoirALL(
    'Mein Tageslauf',
    [
      { section: 'Leseverstehen (6 Punkte)', sectionIntro: r`**Text.** „Gestern war ein langer Tag für Ibrahim. Er ist um halb sechs aufgestanden, weil er früh zur Schule gehen musste. Er hat schnell gefrühstückt und ist mit dem Fahrrad gefahren. Sein Freund Moussa wohnt weiter weg, aber er fährt schneller als Ibrahim. Am Abend hat Ibrahim seine Hausaufgaben geschrieben und ist um neun Uhr ins Bett gegangen.“`, prompt: r`1. Um wie viel Uhr ist Ibrahim aufgestanden?`, type: 'MCQ', choices: ['Um 5h30', 'Um 6h30'], answer: { index: 0 }, points: 2, correction: r`halb sechs = 5h30.` },
      { section: 'Leseverstehen (6 Punkte)', prompt: r`2. Wer fährt schneller?`, type: 'MCQ', choices: ['Moussa', 'Ibrahim'], answer: { index: 0 }, points: 2, correction: r`Text.` },
      { section: 'Leseverstehen (6 Punkte)', prompt: r`3. Wann ist Ibrahim ins Bett gegangen?`, type: 'MCQ', choices: ['Um neun Uhr', 'Um halb zehn'], answer: { index: 0 }, points: 2, correction: r`Text.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`1. Mein Vater ist … als meine Mutter (alt).`, type: 'MCQ', choices: ['älter', 'alter'], answer: { index: 0 }, points: 2, correction: r`Umlaut.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`2. Aya singt … (superlatif de gut).`, type: 'MCQ', choices: ['am besten', 'am gutesten'], answer: { index: 0 }, points: 2, correction: r`Irrégulier.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`3. Wir … mit dem Bus nach Bouaké gefahren.`, type: 'MCQ', choices: ['sind', 'haben'], answer: { index: 0 }, points: 2, correction: r`Déplacement → sein.` },
      { section: 'Grammatik (8 Punkte)', prompt: r`4. Ich habe einen Brief … (schreiben).`, type: 'MCQ', choices: ['geschrieben', 'geschreibt'], answer: { index: 0 }, points: 2, correction: r`Verbe fort.` },
      { section: 'Schreiben (6 Punkte)', prompt: r`Erzähl deinen gestrigen Tag (5 bis 6 Sätze) im Perfekt. Benutze mindestens zwei Uhrzeiten und einen Komparativ.`, type: 'OPEN', answer: { model: 'Récit au parfait avec heures et comparatif' }, points: 6, correction: r`Contenu et heures *(2 Punkte)* ; parfait correct (haben/sein) *(2 Punkte)* ; comparatif *(1 Punkt)* ; orthographe *(1 Punkt)*.` },
    ],
    r`### 🎯 Tipps
1. **sein** avec les verbes de **déplacement** (gehen, fahren, kommen, aufstehen).
2. Comparatif : **-er + als** ; superlatif : **am -sten**.`,
  ),
};
