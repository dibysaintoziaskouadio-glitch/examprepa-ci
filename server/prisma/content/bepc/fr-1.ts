import { SeedChapter } from '../types';

const r = String.raw;
const REF = 'Programme de Français 3e (DPFC) — progression 2026-2027, Grammaire / Orthographe';

export const causeConsequenceBut: SeedChapter = {
  subject: 'FR',
  order: 1,
  title: 'L’expression de la cause, de la conséquence et du but',
  minutes: 240,
  isFree: true,
  officialRef: `${REF}, leçon 1 (séances 1 à 4)`,
  objectives: [
    'Identifier les moyens d’exprimer la cause, la conséquence et le but dans la phrase simple et complexe',
    'Distinguer ces trois rapports logiques',
    'Employer le mode correct dans les subordonnées',
  ],
  courseMd: r`
> **Situation.** « Les élèves ont planté des arbres **parce que** la cour était trop chaude ; **si bien que** l'ombre est revenue, **afin que** chacun puisse se reposer. » Trois rapports logiques s'enchaînent dans cette phrase : lesquels ?

## 1. La cause (pourquoi ?)
La cause indique **l'origine** d'un fait.
**Dans la phrase simple :**
- groupe nominal prépositionnel : *à cause de, en raison de, grâce à* (cause positive), *faute de, par, pour* : « Le match est reporté **à cause de la pluie**. »
- gérondif ou participe : « **Étant malade**, Awa est restée chez elle. »
- adjectif apposé : « **Fatigué**, il s'endormit. »
**Dans la phrase complexe :** subordonnée conjonctive introduite par *parce que, puisque, comme, étant donné que, vu que, sous prétexte que, du moment que* → verbe à l'**indicatif**.
- « **Comme** il pleuvait, nous sommes restés en classe. »
- *Non que* + **subjonctif** (cause rejetée) : « Il a échoué, **non qu'il soit** paresseux, mais il était malade. »
**Par coordination / juxtaposition :** *car, en effet* ; deux-points.

## 2. La conséquence (quel résultat ?)
La conséquence indique **le résultat** d'un fait.
- Phrase simple : *au point de, assez… pour* + infinitif : « Il a couru **au point de** s'épuiser. »
- Subordonnée : *si bien que, de sorte que* (+ indicatif quand le résultat est réel), *si… que, tellement… que, tant… que, à tel point que* → **indicatif** : « Il a **tellement** plu **que** la route est coupée. »
- Coordination : *donc, c'est pourquoi, alors, par conséquent, ainsi*.

## 3. Le but (dans quelle intention ?)
Le but indique **l'objectif** visé.
- Phrase simple : *pour, afin de, en vue de, de peur de* + infinitif ou GN : « Il révise **pour réussir**. »
- Subordonnée : *pour que, afin que, de sorte que, de peur que, de crainte que* → **subjonctif** : « Le professeur parle fort **afin que** tous l'**entendent**. »

## 4. Ne pas confondre
| | Question | Mode dans la subordonnée |
|---|---|---|
| Cause | pourquoi ? (origine) | indicatif (sauf *non que* : subjonctif) |
| Conséquence | avec quel résultat ? | indicatif |
| But | dans quelle intention ? | **subjonctif** |

⚠️ *De sorte que* exprime la **conséquence** avec l'indicatif (résultat réel) et le **but** avec le subjonctif (objectif visé).
`,
  summaryMd: r`
- **Cause** : *parce que, puisque, comme, vu que* + indicatif ; *à cause de, grâce à, faute de* ; *car*.
- **Conséquence** : *si bien que, si… que, tellement… que, de sorte que* + indicatif ; *donc, c'est pourquoi, par conséquent*.
- **But** : *pour que, afin que, de peur que* + **subjonctif** ; *pour, afin de* + infinitif.
- *De sorte que* : conséquence (indicatif) ou but (subjonctif).
`,
  questions: [
    { type: 'MCQ', prompt: r`« Il est resté à la maison **parce qu'**il était malade. » La subordonnée exprime :`, choices: ['la cause', 'la conséquence', 'le but'], answer: { index: 0 }, explanation: r`Origine du fait.` },
    { type: 'MCQ', prompt: r`« Il a tellement plu **que** la route est coupée. » Rapport exprimé :`, choices: ['cause', 'conséquence', 'but'], answer: { index: 1 }, explanation: r`Résultat.` },
    { type: 'MCQ', prompt: r`« Il révise **afin de** réussir. » Rapport exprimé :`, choices: ['cause', 'conséquence', 'but'], answer: { index: 2 }, explanation: r`Objectif.` },
    { type: 'MCQ', prompt: r`Après « afin que », le verbe est au :`, choices: ['subjonctif', 'indicatif', 'conditionnel'], answer: { index: 0 }, explanation: r`But → subjonctif.` },
    { type: 'MCQ', prompt: r`Après « parce que », le verbe est au :`, choices: ['subjonctif', 'indicatif'], answer: { index: 1 }, explanation: r`Cause réelle.` },
    { type: 'MCQ', prompt: r`Choisis la forme correcte : « Parle fort pour que tous t'… »`, choices: ['entendent', 'entendront', 'entendaient'], answer: { index: 0 }, explanation: r`Subjonctif présent.` },
    { type: 'MCQ', prompt: r`« **Grâce à** ses efforts, il a réussi. » Le GN exprime :`, choices: ['une cause', 'un but'], answer: { index: 0 }, explanation: r`Cause positive.` },
    { type: 'MCQ', prompt: r`« **Faute de** moyens, le projet est abandonné. » Rapport :`, choices: ['cause', 'but'], answer: { index: 0 }, explanation: r`Cause (manque).` },
    { type: 'MCQ', prompt: r`Le connecteur « donc » exprime :`, choices: ['la conséquence', 'la cause'], answer: { index: 0 }, explanation: r`Coordination de conséquence.` },
    { type: 'MCQ', prompt: r`Le connecteur « car » exprime :`, choices: ['la cause', 'le but'], answer: { index: 0 }, explanation: r`Coordination de cause.` },
    { type: 'MCQ', prompt: r`« Il travaille de sorte qu'il **réussisse**. » Ici « de sorte que » exprime :`, choices: ['le but', 'la conséquence'], answer: { index: 0 }, explanation: r`Subjonctif → but.` },
    { type: 'MCQ', prompt: r`« Il a travaillé de sorte qu'il **a réussi**. » Ici « de sorte que » exprime :`, choices: ['la conséquence', 'le but'], answer: { index: 0 }, explanation: r`Indicatif → résultat réel.` },
    { type: 'MCQ', prompt: r`« **Comme** il pleuvait, nous sommes restés. » « Comme » exprime ici :`, choices: ['la cause', 'la comparaison'], answer: { index: 0 }, explanation: r`En tête de phrase, souvent causal.` },
    { type: 'MCQ', prompt: r`« De peur que » est suivi :`, choices: ['du subjonctif', 'de l’indicatif'], answer: { index: 0 }, explanation: r`But (crainte).` },
    { type: 'OPEN', prompt: r`Transforme en une phrase complexe exprimant la conséquence : « Il a beaucoup révisé. Il a obtenu le BEPC. »`, answer: { model: 'Il a tellement révisé qu’il a obtenu le BEPC. / Il a beaucoup révisé si bien qu’il a obtenu le BEPC.', keywords: ['si bien que', 'tellement… que'] }, explanation: r`Subordonnée de conséquence à l'indicatif.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Cause, conséquence et but',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Pose la question : **pourquoi ?** (cause), **avec quel résultat ?** (conséquence), **dans quel but ?** (but).
2. Vérifie le **mode** : le but appelle le **subjonctif**.`,
    items: [
      { section: 'Exercice 1 (8 pts)', sectionIntro: r`Indique le rapport logique exprimé par les mots en gras.`, prompt: r`1. « Les cours sont suspendus **en raison de** la grève. »`, type: 'MCQ', choices: ['cause', 'conséquence', 'but'], answer: { index: 0 }, points: 2, correction: r`Cause.` },
      { section: 'Exercice 1 (8 pts)', prompt: r`2. « Elle économise **pour** acheter un vélo. »`, type: 'MCQ', choices: ['cause', 'conséquence', 'but'], answer: { index: 2 }, points: 2, correction: r`But.` },
      { section: 'Exercice 1 (8 pts)', prompt: r`3. « Le bruit était si fort **qu'**on n'entendait plus rien. »`, type: 'MCQ', choices: ['cause', 'conséquence', 'but'], answer: { index: 1 }, points: 2, correction: r`Conséquence (si… que).` },
      { section: 'Exercice 1 (8 pts)', prompt: r`4. « **Puisque** tu es là, aide-moi. »`, type: 'MCQ', choices: ['cause', 'conséquence', 'but'], answer: { index: 0 }, points: 2, correction: r`Cause.` },
      { section: 'Exercice 2 (6 pts)', sectionIntro: r`Conjugue le verbe entre parenthèses au mode et au temps qui conviennent.`, prompt: r`1. « Le maître explique encore afin que tous (comprendre). »`, type: 'MCQ', choices: ['comprennent', 'comprendront', 'comprenaient'], answer: { index: 0 }, points: 2, correction: r`But → subjonctif présent.` },
      { section: 'Exercice 2 (6 pts)', prompt: r`2. « Nous sommes partis tôt parce que la route (être) longue. »`, type: 'MCQ', choices: ['était', 'soit', 'fût'], answer: { index: 0 }, points: 2, correction: r`Cause → indicatif.` },
      { section: 'Exercice 2 (6 pts)', prompt: r`3. « Il s'est caché de peur qu'on le (voir). »`, type: 'MCQ', choices: ['voie', 'voit', 'verra'], answer: { index: 0 }, points: 2, correction: r`Subjonctif présent.` },
      { section: 'Exercice 3 (6 pts)', prompt: r`Rédige trois phrases sur le thème de la salubrité de l'école : la première exprimant la cause, la deuxième la conséquence, la troisième le but. Souligne l'outil utilisé.`, type: 'OPEN', answer: { model: 'Trois phrases correctes avec les bons outils et le bon mode' }, points: 6, correction: r`2 pts par phrase : rapport juste *(1 pt)*, correction grammaticale et mode *(1 pt)*.` },
    ],
  },
};

export const tempsComparaison: SeedChapter = {
  subject: 'FR',
  order: 2,
  title: 'L’expression du temps et de la comparaison',
  minutes: 240,
  officialRef: `${REF}, leçon 1 (séances 5 à 7)`,
  objectives: [
    'Exprimer l’antériorité, la simultanéité et la postériorité',
    'Employer le mode correct dans les subordonnées de temps',
    'Exprimer la comparaison dans la phrase simple et complexe',
  ],
  courseMd: r`
> **Situation.** « **Dès que** la cloche a sonné, les élèves sont sortis **comme** une volée d'oiseaux. » Une subordonnée situe l'action dans le temps, l'autre établit une comparaison.

## 1. L'expression du temps
**Dans la phrase simple :** GN ou adverbe (*le matin, pendant la récréation, avant l'examen, hier*), gérondif (« **En sortant**, il a salué »), participe (« **Le devoir terminé**, il est sorti »), infinitif (*avant de, après* + infinitif passé : « **Après avoir mangé**, il a dormi »).

**Dans la phrase complexe**, la subordonnée exprime un rapport chronologique avec l'action principale :
| Rapport | Conjonctions | Mode |
|---|---|---|
| **Simultanéité** (en même temps) | *quand, lorsque, pendant que, tandis que, alors que, chaque fois que, au moment où, tant que* | indicatif |
| **Antériorité** (le fait subordonné se passe **avant**) | *après que, dès que, aussitôt que, depuis que, une fois que* | **indicatif** |
| **Postériorité** (le fait subordonné se passe **après**) | *avant que, jusqu'à ce que, en attendant que* | **subjonctif** |

- « Nous partirons **après que** tu **auras fini**. » (indicatif)
- « Rentre **avant qu'**il ne **pleuve**. » (subjonctif)

⚠️ *Après que* est suivi de l'**indicatif** ; *avant que* du **subjonctif**.

**Par coordination :** *puis, ensuite, alors, enfin*.

## 2. L'expression de la comparaison
**Dans la phrase simple :**
- comparatif : *plus… que, aussi… que, moins… que* (« Il est **plus grand que** son frère ») ;
- superlatif : *le plus, le moins* ;
- *comme, tel, pareil à, semblable à, ainsi que* + GN : « Elle chante **comme un rossignol**. »
**Dans la phrase complexe :** subordonnée introduite par *comme, de même que, ainsi que, autant que, plus que, moins que, mieux que, tel que, comme si* → indicatif :
- « Il travaille **comme** son père travaillait. »
- « Il parle **comme s'**il était le directeur. » (*comme si* + imparfait ou plus-que-parfait)

On distingue la comparaison d'**égalité**, de **supériorité** et d'**infériorité**.
`,
  summaryMd: r`
**Temps**
- Simultanéité : *quand, lorsque, pendant que, tandis que* + indicatif.
- Antériorité : *après que, dès que, aussitôt que* + **indicatif**.
- Postériorité : *avant que, jusqu'à ce que, en attendant que* + **subjonctif**.

**Comparaison**
- *plus/aussi/moins… que* ; *comme, tel, pareil à* ; *comme si* + imparfait/plus-que-parfait.
- Égalité, supériorité, infériorité.
`,
  questions: [
    { type: 'MCQ', prompt: r`« **Pendant que** je travaille, tu ranges. » Rapport temporel :`, choices: ['simultanéité', 'antériorité', 'postériorité'], answer: { index: 0 }, explanation: r`En même temps.` },
    { type: 'MCQ', prompt: r`« Avant que » est suivi du :`, choices: ['subjonctif', 'indicatif'], answer: { index: 0 }, explanation: r`Postériorité.` },
    { type: 'MCQ', prompt: r`« Après que » est suivi de :`, choices: ['l’indicatif', 'du subjonctif'], answer: { index: 0 }, explanation: r`Fait accompli.` },
    { type: 'MCQ', prompt: r`Forme correcte : « Attends jusqu'à ce qu'il … »`, choices: ['vienne', 'vient', 'viendra'], answer: { index: 0 }, explanation: r`Subjonctif.` },
    { type: 'MCQ', prompt: r`Forme correcte : « Nous sortirons après que tu … »`, choices: ['auras terminé', 'aies terminé'], answer: { index: 0 }, explanation: r`Indicatif (futur antérieur).` },
    { type: 'MCQ', prompt: r`« **Dès que** le soleil se lève, il part aux champs. » Le fait subordonné est :`, choices: ['antérieur', 'postérieur'], answer: { index: 0 }, explanation: r`Il se produit d'abord.` },
    { type: 'MCQ', prompt: r`« **En arrivant**, il a salué. » Le gérondif exprime :`, choices: ['le temps', 'le but'], answer: { index: 0 }, explanation: r`Simultanéité.` },
    { type: 'MCQ', prompt: r`« Il est **aussi** grand **que** son frère. » Comparaison de :`, choices: ['égalité', 'supériorité', 'infériorité'], answer: { index: 0 }, explanation: r`aussi… que.` },
    { type: 'MCQ', prompt: r`« Elle court **moins** vite **que** moi. » Comparaison de :`, choices: ['infériorité', 'supériorité'], answer: { index: 0 }, explanation: r`moins… que.` },
    { type: 'MCQ', prompt: r`« Il parle comme s'il … le chef. »`, choices: ['était', 'soit', 'sera'], answer: { index: 0 }, explanation: r`Comme si + imparfait.` },
    { type: 'MCQ', prompt: r`« Elle chante **comme un rossignol**. » Le GN exprime :`, choices: ['une comparaison', 'une cause'], answer: { index: 0 }, explanation: r`Outil : comme.` },
    { type: 'MCQ', prompt: r`« Après avoir révisé, il a dormi. » L'infinitif passé exprime :`, choices: ['l’antériorité', 'la simultanéité'], answer: { index: 0 }, explanation: r`Action accomplie avant.` },
    { type: 'MCQ', prompt: r`« **Tandis que** » peut exprimer :`, choices: ['la simultanéité', 'le but'], answer: { index: 0 }, explanation: r`Et parfois l'opposition.` },
    { type: 'MCQ', prompt: r`« Il est **le plus** rapide de la classe. » C'est :`, choices: ['un superlatif', 'un comparatif d’égalité'], answer: { index: 0 }, explanation: r`Superlatif relatif.` },
    { type: 'OPEN', prompt: r`Remplace le GN par une subordonnée de temps : « **Avant le coucher du soleil**, rentre à la maison. »`, answer: { model: 'Avant que le soleil (ne) se couche, rentre à la maison.', keywords: ['avant que', 'se couche'] }, explanation: r`Avant que + subjonctif.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Temps et comparaison',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Situe les deux actions sur une **ligne du temps** pour trouver le rapport.
2. Retiens : **après que + indicatif**, **avant que + subjonctif**.`,
    items: [
      { section: 'Exercice 1 (8 pts)', prompt: r`1. « Lorsqu'il pleut, la route est impraticable. » Rapport :`, type: 'MCQ', choices: ['simultanéité', 'postériorité'], answer: { index: 0 }, points: 2, correction: r`En même temps.` },
      { section: 'Exercice 1 (8 pts)', prompt: r`2. « Je resterai jusqu'à ce que tu (revenir). »`, type: 'MCQ', choices: ['reviennes', 'reviens', 'reviendras'], answer: { index: 0 }, points: 2, correction: r`Subjonctif.` },
      { section: 'Exercice 1 (8 pts)', prompt: r`3. « Après qu'il (partir), nous avons fermé la porte. »`, type: 'MCQ', choices: ['fut parti', 'soit parti'], answer: { index: 0 }, points: 2, correction: r`Indicatif (passé antérieur).` },
      { section: 'Exercice 1 (8 pts)', prompt: r`4. « Il est plus courageux que son frère. » Comparaison de :`, type: 'MCQ', choices: ['supériorité', 'égalité'], answer: { index: 0 }, points: 2, correction: r`plus… que.` },
      { section: 'Exercice 2 (6 pts)', prompt: r`Transforme chaque GN en gras en subordonnée de temps : a) « **À l'arrivée du directeur**, les élèves se levèrent. » b) « **Avant ton départ**, range ta chambre. »`, type: 'OPEN', answer: { model: 'a) Quand le directeur arriva… b) Avant que tu (ne) partes…' }, points: 6, correction: r`a) Quand/Lorsque le directeur arriva *(3 pts)* ; b) Avant que tu (ne) partes, au subjonctif *(3 pts)*.` },
      { section: 'Exercice 3 (6 pts)', prompt: r`Rédige un court paragraphe (5 à 6 lignes) décrivant le marché de ton quartier en employant au moins deux comparaisons et deux subordonnées de temps (souligne-les).`, type: 'OPEN', answer: { model: 'Paragraphe avec comparaisons et subordonnées de temps correctes' }, points: 6, correction: r`Deux comparaisons correctes *(2 pts)* ; deux subordonnées de temps correctes *(2 pts)* ; cohérence et orthographe *(2 pts)*.` },
    ],
  },
};

export const conditionOpposition: SeedChapter = {
  subject: 'FR',
  order: 3,
  title: 'L’expression de la condition et de l’opposition',
  minutes: 240,
  officialRef: `${REF}, leçon 1 (séances 8 à 10)`,
  objectives: [
    'Exprimer la condition et l’hypothèse avec la concordance des temps après « si »',
    'Exprimer l’opposition et la concession',
    'Choisir le mode correct dans les subordonnées',
  ],
  courseMd: r`
> **Situation.** « **Si** tu révises chaque jour, tu réussiras. — **Bien que** je révise, j'ai encore des difficultés. » La première phrase pose une condition, la seconde une opposition.

## 1. La condition et l'hypothèse
**Dans la phrase simple :** *en cas de, avec, sans, à condition de* + infinitif ; gérondif (« **En travaillant**, tu réussiras »).

**Avec « si »** (concordance des temps) :
| Valeur | Subordonnée (si…) | Principale |
|---|---|---|
| Condition **réalisable** (potentiel) | présent | futur (ou présent, impératif) |
| Hypothèse **irréalisable dans le présent** | imparfait | conditionnel présent |
| Hypothèse **non réalisée dans le passé** | plus-que-parfait | conditionnel passé |
- « Si tu **révises**, tu **réussiras**. »
- « Si j'**étais** ministre, je **construirais** des écoles. »
- « Si tu **avais révisé**, tu **aurais réussi**. »

⚠️ Jamais de **futur** ni de **conditionnel** après *si* : ~~si j'aurais~~ → *si j'avais*.

**Autres conjonctions :** *à condition que, pourvu que, à moins que, en admettant que, pour peu que* → **subjonctif** ; *au cas où* → **conditionnel** ; *même si* → indicatif.

## 2. L'opposition et la concession
- **L'opposition** met en parallèle deux faits contraires : *alors que, tandis que* + indicatif ; *au lieu de, contrairement à* ; *mais, cependant, pourtant, en revanche*.
  « Awa aime les maths, **alors que** son frère préfère le français. »
- **La concession** présente un fait qui aurait dû empêcher l'autre, mais ne l'a pas empêché : *bien que, quoique, même si, malgré que* (déconseillé)…
  - *bien que, quoique, encore que* → **subjonctif** : « **Bien qu'il soit** malade, il est venu. »
  - *même si* → **indicatif** : « **Même s'il pleut**, nous irons. »
  - *quel que soit, quoi que, qui que* → subjonctif.
  - Phrase simple : *malgré, en dépit de* + GN ; *avoir beau* + infinitif (« Il **a beau** crier, personne ne l'entend »).
  - Coordination : *mais, pourtant, cependant, toutefois, néanmoins*.
`,
  summaryMd: r`
**Condition avec « si »**
- si + présent → futur ;
- si + imparfait → conditionnel présent ;
- si + plus-que-parfait → conditionnel passé ;
- ❌ jamais de conditionnel après « si ».
- *à condition que, pourvu que, à moins que* + subjonctif ; *au cas où* + conditionnel.

**Opposition / concession**
- *alors que, tandis que* + indicatif ; *bien que, quoique* + **subjonctif** ; *même si* + indicatif ; *malgré* + GN ; *avoir beau* + infinitif.
`,
  questions: [
    { type: 'MCQ', prompt: r`« Si tu travailles, tu … »`, choices: ['réussiras', 'réussirais', 'aurais réussi'], answer: { index: 0 }, explanation: r`Si + présent → futur.` },
    { type: 'MCQ', prompt: r`« Si j'étais riche, je … une école. »`, choices: ['construirais', 'construirai', 'construis'], answer: { index: 0 }, explanation: r`Si + imparfait → conditionnel présent.` },
    { type: 'MCQ', prompt: r`« Si tu avais révisé, tu … »`, choices: ['aurais réussi', 'réussiras', 'réussissais'], answer: { index: 0 }, explanation: r`Si + plus-que-parfait → conditionnel passé.` },
    { type: 'MCQ', prompt: r`Quelle phrase est correcte ?`, choices: ['Si j’avais de l’argent, je partirais.', 'Si j’aurais de l’argent, je partirais.'], answer: { index: 0 }, explanation: r`Pas de conditionnel après si.` },
    { type: 'MCQ', prompt: r`« Bien que » est suivi du :`, choices: ['subjonctif', 'indicatif'], answer: { index: 0 }, explanation: r`Concession.` },
    { type: 'MCQ', prompt: r`« Même si » est suivi de :`, choices: ['l’indicatif', 'du subjonctif'], answer: { index: 0 }, explanation: r`Même si il pleut → même s'il pleut.` },
    { type: 'MCQ', prompt: r`« Bien qu'il … malade, il est venu. »`, choices: ['soit', 'est', 'sera'], answer: { index: 0 }, explanation: r`Subjonctif.` },
    { type: 'MCQ', prompt: r`« Il a beau crier, personne ne l'entend. » Rapport :`, choices: ['concession', 'cause'], answer: { index: 0 }, explanation: r`Avoir beau + infinitif.` },
    { type: 'MCQ', prompt: r`« **Malgré** la pluie, le match a eu lieu. » Rapport :`, choices: ['concession', 'condition'], answer: { index: 0 }, explanation: r`Malgré + GN.` },
    { type: 'MCQ', prompt: r`« À condition que » est suivi du :`, choices: ['subjonctif', 'futur'], answer: { index: 0 }, explanation: r`Condition.` },
    { type: 'MCQ', prompt: r`« Au cas où » est suivi du :`, choices: ['conditionnel', 'subjonctif'], answer: { index: 0 }, explanation: r`Au cas où il pleuvrait.` },
    { type: 'MCQ', prompt: r`« Awa aime lire, **alors que** son frère préfère le sport. » Rapport :`, choices: ['opposition', 'temps'], answer: { index: 0 }, explanation: r`Mise en parallèle de faits contraires.` },
    { type: 'MCQ', prompt: r`« **En travaillant**, tu réussiras. » Le gérondif exprime :`, choices: ['la condition', 'le but'], answer: { index: 0 }, explanation: r`= si tu travailles.` },
    { type: 'MCQ', prompt: r`« Quoique » (en un mot) signifie :`, choices: ['bien que', 'quelle que soit la chose que'], answer: { index: 0 }, explanation: r`Ne pas confondre avec « quoi que ».` },
    { type: 'OPEN', prompt: r`Transforme avec « bien que » : « Il fait chaud. Les élèves jouent au football. »`, answer: { model: 'Bien qu’il fasse chaud, les élèves jouent au football.', keywords: ['bien qu’il fasse'] }, explanation: r`Subjonctif.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Condition et opposition',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Après **si** : jamais de futur ni de conditionnel.
2. **Bien que / quoique** → subjonctif ; **même si** → indicatif.`,
    items: [
      { section: 'Exercice 1 (10 pts)', prompt: r`1. « Si nous (planter) des arbres, la cour serait plus fraîche. »`, type: 'MCQ', choices: ['plantions', 'planterions', 'plantons'], answer: { index: 0 }, points: 2, correction: r`Si + imparfait.` },
      { section: 'Exercice 1 (10 pts)', prompt: r`2. « Si tu m'avais prévenu, je (venir). »`, type: 'MCQ', choices: ['serais venu', 'viendrai', 'venais'], answer: { index: 0 }, points: 2, correction: r`Conditionnel passé.` },
      { section: 'Exercice 1 (10 pts)', prompt: r`3. « Bien que la route (être) longue, il marche. »`, type: 'MCQ', choices: ['soit', 'est'], answer: { index: 0 }, points: 2, correction: r`Subjonctif.` },
      { section: 'Exercice 1 (10 pts)', prompt: r`4. « Même s'il (pleuvoir), nous irons au stade. »`, type: 'MCQ', choices: ['pleut', 'pleuve'], answer: { index: 0 }, points: 2, correction: r`Indicatif.` },
      { section: 'Exercice 1 (10 pts)', prompt: r`5. « Tu réussiras à condition que tu (travailler). »`, type: 'MCQ', choices: ['travailles', 'travailleras'], answer: { index: 0 }, points: 2, correction: r`Subjonctif.` },
      { section: 'Exercice 2 (10 pts)', prompt: r`Rédige un paragraphe (8 lignes environ) sur le thème : « Si j'étais maire de ma commune… ». Emploie correctement au moins trois subordonnées de condition et deux expressions de l'opposition ou de la concession.`, type: 'OPEN', answer: { model: 'Paragraphe cohérent avec si + imparfait / conditionnel et outils d’opposition' }, points: 10, correction: r`Trois subordonnées de condition correctes *(4 pts)* ; deux expressions d'opposition/concession correctes *(2 pts)* ; cohérence des idées *(2 pts)* ; orthographe et syntaxe *(2 pts)*.` },
    ],
  },
};

export const orthographeLexicale: SeedChapter = {
  subject: 'FR',
  order: 4,
  title: 'Orthographe lexicale : participe présent, adjectif verbal, homophones et paronymes',
  minutes: 180,
  officialRef: `${REF}, leçon « Orthographe lexicale » (séances 1 à 3)`,
  objectives: [
    'Distinguer le participe présent et l’adjectif verbal et les orthographier',
    'Distinguer des homophones non homographes (quoique / quoi que, quelque / quel que…)',
    'Employer correctement des paronymes',
  ],
  courseMd: r`
> **Situation.** « Un discours **convainquant** ses auditeurs » ou « un discours **convaincant** » ? Les deux existent, mais pas dans les mêmes emplois.

## 1. Participe présent ou adjectif verbal ?
| | Participe présent | Adjectif verbal |
|---|---|---|
| Nature | forme **verbale** | **adjectif** |
| Accord | **invariable** | **s'accorde** avec le nom |
| Indices | exprime une **action** ; souvent suivi d'un complément ou précédé de *ne… pas* ; peut être remplacé par « qui + verbe » | exprime une **qualité** durable ; peut être remplacé par un autre adjectif |
- « Des élèves **obéissant** à leur maître. » (participe présent : action, complément)
- « Des élèves **obéissants**. » (adjectif verbal : qualité)

**Orthographes différentes à retenir :**
| Participe présent | Adjectif verbal |
|---|---|
| convainquant | convaincant |
| fatiguant | fatigant |
| provoquant | provocant |
| suffoquant | suffocant |
| communiquant | communicant |
| naviguant | navigant |
| intriguant | intrigant |
| adhérant | adhérent |
| différant | différent |
| précédant | précédent |
| excellant | excellent |
| négligeant | négligent |
| équivalant | équivalent |

« Les nageurs, **fatiguant** leurs bras, avancent. » / « Une course **fatigante**. »

## 2. Homophones non homographes
- **Quoique** (en un mot) = *bien que* : « **Quoiqu'il** soit tard, il travaille. »
  **Quoi que** (en deux mots) = *quelle que soit la chose que* : « **Quoi que** tu dises, je te crois. »
- **Quel(le)(s) que** + verbe *être* au subjonctif ; *quel* s'accorde avec le sujet : « **Quelles que** soient tes difficultés… »
  **Quelque(s)** + nom = *un certain nombre de* : « **Quelques** élèves » ; **quelque** + adjectif + *que* = *si*, invariable : « **Quelque** intelligents **qu'**ils soient… »
- **Plutôt** (= de préférence) / **plus tôt** (≠ plus tard).
- **Quelquefois** (= parfois) / **quelques fois** (= quelques occasions).
- **Davantage** (= plus) / **d'avantage(s)**.
- **Sans** / **s'en** / **c'en** : « Il est parti **sans** dire au revoir. — Il **s'en** va. — **C'en** est trop. »

## 3. Les paronymes
Ce sont des mots de **forme proche** mais de **sens différent** :
| Paronyme | Sens |
|---|---|
| **éminent** / **imminent** | remarquable / sur le point d'arriver |
| **éruption** / **irruption** | sortie soudaine (volcan, boutons) / entrée brusque |
| **conjecture** / **conjoncture** | supposition / situation, circonstances |
| **effraction** / **infraction** | bris pour entrer / violation d'une loi |
| **allusion** / **illusion** | évocation indirecte / apparence trompeuse |
| **collision** / **collusion** | choc / entente secrète |
| **acception** / **acceptation** | sens d'un mot / fait d'accepter |
| **perpétrer** / **perpétuer** | commettre (un crime) / faire durer |
`,
  summaryMd: r`
- **Participe présent** : action, **invariable** (souvent + complément). **Adjectif verbal** : qualité, **variable**.
- convainquant/convaincant, fatiguant/fatigant, provoquant/provocant, précédant/précédent, différant/différent, négligeant/négligent, excellant/excellent.
- quoique (= bien que) / quoi que (= quelle que soit la chose que) ; quel que + être ; quelque(s) + nom.
- plutôt / plus tôt ; quelquefois / quelques fois.
- Paronymes : éminent/imminent, éruption/irruption, conjecture/conjoncture, effraction/infraction.
`,
  questions: [
    { type: 'MCQ', prompt: r`« C'est un argument très … »`, choices: ['convaincant', 'convainquant'], answer: { index: 0 }, explanation: r`Adjectif verbal.` },
    { type: 'MCQ', prompt: r`« Les orateurs, … le public, furent applaudis. »`, choices: ['convainquant', 'convaincants'], answer: { index: 0 }, explanation: r`Participe présent + complément.` },
    { type: 'MCQ', prompt: r`« Une marche … »`, choices: ['fatigante', 'fatiguante'], answer: { index: 0 }, explanation: r`Adjectif verbal : fatigant.` },
    { type: 'MCQ', prompt: r`« Le jour … la fête, nous avons tout préparé. »`, choices: ['précédant', 'précédent'], answer: { index: 0 }, explanation: r`Participe présent + complément.` },
    { type: 'MCQ', prompt: r`« Le jour … »`, choices: ['précédent', 'précédant'], answer: { index: 0 }, explanation: r`Adjectif.` },
    { type: 'MCQ', prompt: r`Le participe présent est :`, choices: ['invariable', 'variable'], answer: { index: 0 }, explanation: r`Forme verbale.` },
    { type: 'MCQ', prompt: r`« … tu fasses, fais-le bien. »`, choices: ['Quoi que', 'Quoique'], answer: { index: 0 }, explanation: r`= quelle que soit la chose que.` },
    { type: 'MCQ', prompt: r`« … il soit fatigué, il continue. »`, choices: ['Quoiqu’', 'Quoi qu’'], answer: { index: 0 }, explanation: r`= bien que.` },
    { type: 'MCQ', prompt: r`« … que soient tes problèmes, parle-moi. »`, choices: ['Quels', 'Quelques'], answer: { index: 0 }, explanation: r`Quel que + être, accord avec « problèmes ».` },
    { type: 'MCQ', prompt: r`« Viens … demain matin. »`, choices: ['plus tôt', 'plutôt'], answer: { index: 0 }, explanation: r`Opposé de plus tard.` },
    { type: 'MCQ', prompt: r`« L'… du volcan a surpris les habitants. »`, choices: ['éruption', 'irruption'], answer: { index: 0 }, explanation: r`Sortie soudaine.` },
    { type: 'MCQ', prompt: r`« Les voleurs ont fait … dans la boutique. »`, choices: ['irruption', 'éruption'], answer: { index: 0 }, explanation: r`Entrée brusque.` },
    { type: 'MCQ', prompt: r`« Le départ du car est … »`, choices: ['imminent', 'éminent'], answer: { index: 0 }, explanation: r`Sur le point d'arriver.` },
    { type: 'MCQ', prompt: r`« Un … professeur de médecine. »`, choices: ['éminent', 'imminent'], answer: { index: 0 }, explanation: r`Remarquable.` },
    { type: 'OPEN', prompt: r`Emploie « négligeant » et « négligent » dans deux phrases.`, answer: { model: 'Un élève négligeant ses leçons échoue. / Un élève négligent.', keywords: ['négligeant', 'négligent'] }, explanation: r`Participe présent / adjectif verbal.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Orthographe lexicale',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Pour participe présent / adjectif verbal : cherche un **complément** ou remplace par **« qui + verbe »**.
2. Pour quoique / quoi que : remplace par **« bien que »**.`,
    items: [
      { section: 'Exercice 1 (10 pts)', prompt: r`1. « Des propos … »`, type: 'MCQ', choices: ['provocants', 'provoquants'], answer: { index: 0 }, points: 2, correction: r`Adjectif verbal.` },
      { section: 'Exercice 1 (10 pts)', prompt: r`2. « Des marins … sur la lagune. »`, type: 'MCQ', choices: ['naviguant', 'navigants'], answer: { index: 0 }, points: 2, correction: r`Participe présent + complément.` },
      { section: 'Exercice 1 (10 pts)', prompt: r`3. « Ces deux résultats sont … »`, type: 'MCQ', choices: ['différents', 'différant'], answer: { index: 0 }, points: 2, correction: r`Adjectif.` },
      { section: 'Exercice 1 (10 pts)', prompt: r`4. « … tu en penses, je partirai. »`, type: 'MCQ', choices: ['Quoi que', 'Quoique'], answer: { index: 0 }, points: 2, correction: r`= quelle que soit la chose que.` },
      { section: 'Exercice 1 (10 pts)', prompt: r`5. « Le gendarme a constaté une … au code de la route. »`, type: 'MCQ', choices: ['infraction', 'effraction'], answer: { index: 0 }, points: 2, correction: r`Violation d'une loi.` },
      { section: 'Exercice 2 (10 pts)', prompt: r`Rédige cinq phrases sur la vie au collège en employant correctement : « fatiguant », « fatigant », « quelques », « quel que », « plutôt ».`, type: 'OPEN', answer: { model: 'Cinq phrases correctes' }, points: 10, correction: r`2 pts par phrase correcte (sens et orthographe).` },
    ],
  },
};

export const coordination: SeedChapter = {
  subject: 'FR',
  order: 5,
  title: 'La coordination',
  minutes: 60,
  officialRef: `${REF}, leçon 2`,
  objectives: [
    'Identifier les conjonctions de coordination et les adverbes de liaison',
    'Distinguer juxtaposition, coordination et subordination',
    'Employer le coordonnant adapté au rapport logique',
  ],
  courseMd: r`
> **Situation.** « Il pleuvait. Nous sommes restés en classe. » Comment relier ces deux phrases sans changer leur indépendance ? Avec un **coordonnant** : « Il pleuvait, **donc** nous sommes restés en classe. »

## 1. Trois façons de relier des propositions
- **Juxtaposition** : propositions séparées par une **virgule**, un **point-virgule** ou des **deux-points**, sans mot de liaison : « Il pleuvait ; nous sommes restés en classe. »
- **Coordination** : propositions de **même niveau**, reliées par un **coordonnant** : « Il pleuvait, **donc** nous sommes restés. »
- **Subordination** : une proposition **dépend** d'une autre grâce à un **subordonnant** : « **Comme** il pleuvait, nous sommes restés. »

## 2. Les coordonnants
**Les conjonctions de coordination** (*mais, ou, et, donc, or, ni, car*) :
| Conjonction | Rapport |
|---|---|
| **et** | addition |
| **ou** | alternative, choix |
| **ni** | addition négative |
| **mais** | opposition |
| **or** | transition, objection (introduit un fait nouveau) |
| **donc** | conséquence |
| **car** | cause |

**Les adverbes de liaison** (ou de coordination) : *puis, ensuite, enfin* (temps) ; *cependant, pourtant, toutefois, néanmoins* (opposition) ; *en effet* (cause, explication) ; *ainsi, alors, c'est pourquoi, par conséquent* (conséquence) ; *de plus, en outre* (addition) ; *d'ailleurs* ; *c'est-à-dire* (explication).
À la différence des conjonctions, ils peuvent souvent **se déplacer** dans la phrase : « Il était fatigué ; il a **cependant** continué. »

## 3. Ce que l'on peut coordonner
Des mots ou groupes de **même fonction** : « Awa **et** Koffi » (sujets), « grand **mais** maigre » (attributs), des propositions de même nature.

## 4. Ponctuation
- On met une **virgule** avant *mais, car, donc* (sauf phrases très courtes) ; généralement pas de virgule avant *et* et *ou* simples.
- *Ni* se répète : « Il **n'**aime **ni** le riz **ni** l'attiéké. »
`,
  summaryMd: r`
- Juxtaposition (ponctuation) / coordination (coordonnant) / subordination (subordonnant).
- Conjonctions : **mais, ou, et, donc, or, ni, car**.
- Adverbes de liaison : puis, ensuite, cependant, pourtant, en effet, ainsi, par conséquent, de plus…
- Rapports : addition (et), choix (ou), opposition (mais), conséquence (donc), cause (car), transition (or).
- On coordonne des éléments de **même fonction**.
`,
  questions: [
    { type: 'MCQ', prompt: r`Laquelle est une conjonction de coordination ?`, choices: ['car', 'parce que', 'lorsque'], answer: { index: 0 }, explanation: r`mais, ou, et, donc, or, ni, car.` },
    { type: 'MCQ', prompt: r`« donc » exprime :`, choices: ['la conséquence', 'la cause'], answer: { index: 0 }, explanation: r`Résultat.` },
    { type: 'MCQ', prompt: r`« mais » exprime :`, choices: ['l’opposition', 'l’addition'], answer: { index: 0 }, explanation: r`Contraste.` },
    { type: 'MCQ', prompt: r`« Il pleuvait ; nous sommes restés. » Les propositions sont :`, choices: ['juxtaposées', 'coordonnées', 'subordonnées'], answer: { index: 0 }, explanation: r`Point-virgule.` },
    { type: 'MCQ', prompt: r`« Il pleuvait, donc nous sommes restés. » Les propositions sont :`, choices: ['coordonnées', 'juxtaposées'], answer: { index: 0 }, explanation: r`Coordonnant « donc ».` },
    { type: 'MCQ', prompt: r`« Comme il pleuvait, nous sommes restés. » La première proposition est :`, choices: ['subordonnée', 'coordonnée'], answer: { index: 0 }, explanation: r`Subordonnant « comme ».` },
    { type: 'MCQ', prompt: r`« cependant » est :`, choices: ['un adverbe de liaison', 'une conjonction de subordination'], answer: { index: 0 }, explanation: r`Opposition.` },
    { type: 'MCQ', prompt: r`« Il n'aime … le riz … l'attiéké. »`, choices: ['ni… ni', 'et… et'], answer: { index: 0 }, explanation: r`Addition négative.` },
    { type: 'MCQ', prompt: r`« en effet » exprime :`, choices: ['la cause / l’explication', 'le but'], answer: { index: 0 }, explanation: r`Justification.` },
    { type: 'MCQ', prompt: r`« ou » exprime :`, choices: ['l’alternative', 'la conséquence'], answer: { index: 0 }, explanation: r`Choix.` },
    { type: 'MCQ', prompt: r`« Tous les élèves doivent venir. Or Koffi est absent. » « or » introduit :`, choices: ['un fait nouveau qui fait avancer le raisonnement', 'un but'], answer: { index: 0 }, explanation: r`Transition.` },
    { type: 'NUMERIC', prompt: r`Combien y a-t-il de conjonctions de coordination ?`, answer: { value: 7 }, explanation: r`mais, ou, et, donc, or, ni, car.` },
    { type: 'MCQ', prompt: r`Les adverbes de liaison, contrairement aux conjonctions :`, choices: ['peuvent souvent se déplacer dans la phrase', 'sont toujours en tête'], answer: { index: 0 }, explanation: r`Mobilité.` },
    { type: 'MCQ', prompt: r`« par conséquent » exprime :`, choices: ['la conséquence', 'l’opposition'], answer: { index: 0 }, explanation: r`Résultat.` },
    { type: 'OPEN', prompt: r`Relie par un coordonnant de cause : « Il a été félicité. Il a sauvé un enfant de la noyade. »`, answer: { model: 'Il a été félicité, car il a sauvé un enfant de la noyade.', keywords: ['car'] }, explanation: r`« car » ou « en effet ».` },
  ],
  assessment: {
    title: 'Devoir BEPC — La coordination',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Identifie d'abord le **rapport logique** entre les deux idées, puis choisis le coordonnant.
2. Soigne la **ponctuation** (virgule avant mais, car, donc).`,
    items: [
      { section: 'Exercice 1 (10 pts)', sectionIntro: r`Choisis le coordonnant qui convient.`, prompt: r`1. « Il a étudié tard, … il est fatigué. »`, type: 'MCQ', choices: ['donc', 'car', 'or'], answer: { index: 0 }, points: 2, correction: r`Conséquence.` },
      { section: 'Exercice 1 (10 pts)', prompt: r`2. « Il est resté, … il était malade. »`, type: 'MCQ', choices: ['car', 'donc', 'ni'], answer: { index: 0 }, points: 2, correction: r`Cause.` },
      { section: 'Exercice 1 (10 pts)', prompt: r`3. « Elle est pauvre, … elle est généreuse. »`, type: 'MCQ', choices: ['mais', 'donc', 'car'], answer: { index: 0 }, points: 2, correction: r`Opposition.` },
      { section: 'Exercice 1 (10 pts)', prompt: r`4. « Veux-tu du jus … de l'eau ? »`, type: 'MCQ', choices: ['ou', 'ni', 'or'], answer: { index: 0 }, points: 2, correction: r`Alternative.` },
      { section: 'Exercice 1 (10 pts)', prompt: r`5. « Il n'a … mangé … bu. »`, type: 'MCQ', choices: ['ni… ni', 'et… et'], answer: { index: 0 }, points: 2, correction: r`Négation.` },
      { section: 'Exercice 2 (10 pts)', prompt: r`Rédige un paragraphe (8 lignes) sur les avantages et les inconvénients du téléphone portable chez les élèves. Emploie au moins cinq coordonnants différents (conjonctions ou adverbes de liaison) que tu souligneras.`, type: 'OPEN', answer: { model: 'Paragraphe argumenté avec cinq coordonnants corrects' }, points: 10, correction: r`Cinq coordonnants corrects et adaptés *(5 pts)* ; cohérence de l'argumentation *(3 pts)* ; orthographe *(2 pts)*.` },
    ],
  },
};

export const pronominalisation: SeedChapter = {
  subject: 'FR',
  order: 6,
  title: 'Le groupe nominal : la pronominalisation',
  minutes: 60,
  officialRef: `${REF}, leçon 3`,
  objectives: [
    'Remplacer un groupe nominal par le pronom adéquat selon sa fonction',
    'Placer correctement les pronoms compléments',
    'Éviter les répétitions dans un texte',
  ],
  courseMd: r`
> **Situation.** « Koffi a vu **Awa**. Koffi a donné **à Awa** **le livre**. **Le livre** était neuf. » Ce texte est lourd. Avec des pronoms : « Koffi a vu Awa. **Il le lui** a donné. **Il** était neuf. »

## 1. Définition
**Pronominaliser**, c'est **remplacer** un groupe nominal (GN) par un **pronom** pour éviter les répétitions. Le pronom reprend un mot déjà cité : son **antécédent** (ou son référent).

## 2. Choisir le pronom selon la fonction du GN
| Fonction du GN | Pronom personnel | Exemple |
|---|---|---|
| Sujet | il, elle, ils, elles | **Le directeur** parle → **Il** parle. |
| COD (personne ou chose déterminée) | le, la, l', les | Je vois **le car** → Je **le** vois. |
| COD (quantité, partitif) | en | Il achète **des mangues** → Il **en** achète. |
| COI introduit par « à » (personne) | lui, leur | Je parle **à Awa** → Je **lui** parle. |
| COI / complément introduit par « de » (chose) | en | Il parle **de son voyage** → Il **en** parle. |
| Complément introduit par « à » (chose) | y | Il pense **à l'examen** → Il **y** pense. |
| Complément de lieu | y (où l'on va / est), en (d'où l'on vient) | Il va **à Bouaké** → Il **y** va. Il revient **de Man** → Il **en** revient. |

Autres pronoms : **possessifs** (*le mien, la tienne, les leurs*), **démonstratifs** (*celui-ci, celle-là, ceux*), **relatifs** (*qui, que, dont, où*), **indéfinis** (*chacun, plusieurs, personne*).

## 3. La place des pronoms compléments
- Ils se placent **avant le verbe** conjugué (ou avant l'auxiliaire) : « Je **le lui** ai donné. »
- Ordre : *me, te, se, nous, vous* → *le, la, les* → *lui, leur* → *y* → *en* : « Il **me l'**a dit », « Il **leur en** donne. »
- À l'**impératif affirmatif**, ils se placent **après** le verbe avec un trait d'union : « Donne-**le-lui**. » ; « Donnes-**en** » (avec *s* euphonique).

## 4. Attention à l'ambiguïté
Le pronom doit renvoyer clairement à un seul antécédent : « Koffi a rencontré Yao ; **il** était content » → qui ? On précise : « **ce dernier** était content ».
`,
  summaryMd: r`
- Pronominaliser = remplacer un GN par un pronom (antécédent).
- Sujet : il/elle/ils/elles ; COD : le/la/les ou **en** (quantité) ; COI personne : **lui/leur** ; « de » + chose : **en** ; « à » + chose ou lieu : **y**.
- Place : avant le verbe ; ordre me/te… → le/la/les → lui/leur → y → en.
- Impératif affirmatif : après le verbe avec trait d'union (donne-le-lui).
- Éviter l'ambiguïté.
`,
  questions: [
    { type: 'MCQ', prompt: r`« Je vois **le car**. » →`, choices: ['Je le vois.', 'Je lui vois.', 'J’en vois.'], answer: { index: 0 }, explanation: r`COD déterminé.` },
    { type: 'MCQ', prompt: r`« Je parle **à Awa**. » →`, choices: ['Je lui parle.', 'Je la parle.', 'J’y parle.'], answer: { index: 0 }, explanation: r`COI personne.` },
    { type: 'MCQ', prompt: r`« Il achète **des mangues**. » →`, choices: ['Il en achète.', 'Il les achète.', 'Il y achète.'], answer: { index: 0 }, explanation: r`Quantité indéterminée.` },
    { type: 'MCQ', prompt: r`« Il pense **à l'examen**. » →`, choices: ['Il y pense.', 'Il lui pense.', 'Il en pense.'], answer: { index: 0 }, explanation: r`« à » + chose.` },
    { type: 'MCQ', prompt: r`« Il parle **de son voyage**. » →`, choices: ['Il en parle.', 'Il y parle.', 'Il le parle.'], answer: { index: 0 }, explanation: r`« de » + chose.` },
    { type: 'MCQ', prompt: r`« Je parle **à mes parents**. » →`, choices: ['Je leur parle.', 'Je les parle.', 'Je leurs parle.'], answer: { index: 0 }, explanation: r`« leur » pronom invariable.` },
    { type: 'MCQ', prompt: r`« Il va **à Bouaké**. » →`, choices: ['Il y va.', 'Il en va.', 'Il lui va.'], answer: { index: 0 }, explanation: r`Lieu où l'on va.` },
    { type: 'MCQ', prompt: r`« Il revient **de Man**. » →`, choices: ['Il en revient.', 'Il y revient.'], answer: { index: 0 }, explanation: r`Lieu d'où l'on vient.` },
    { type: 'MCQ', prompt: r`« Koffi a donné le livre à Awa. » →`, choices: ['Il le lui a donné.', 'Il lui l’a donné.', 'Il la lui a donné.'], answer: { index: 0 }, explanation: r`Ordre le + lui.` },
    { type: 'MCQ', prompt: r`Impératif : « Donne le livre à Awa. » →`, choices: ['Donne-le-lui.', 'Lui le donne.', 'Donne-lui-le.'], answer: { index: 0 }, explanation: r`Verbe-COD-COI.` },
    { type: 'MCQ', prompt: r`« Prends des fruits. » →`, choices: ['Prends-en.', 'Prends-les.', 'Prend-en.'], answer: { index: 0 }, explanation: r`Impératif + en.` },
    { type: 'MCQ', prompt: r`L'antécédent d'un pronom est :`, choices: ['le mot qu’il remplace', 'le verbe'], answer: { index: 0 }, explanation: r`Définition.` },
    { type: 'MCQ', prompt: r`« Ce cahier est **mon cahier**. » →`, choices: ['C’est le mien.', 'C’est le sien.', 'C’est mien.'], answer: { index: 0 }, explanation: r`Pronom possessif.` },
    { type: 'MCQ', prompt: r`« Va **au marché**. » (impératif) →`, choices: ['Vas-y.', 'Va-y.', 'Y va.'], answer: { index: 0 }, explanation: r`S euphonique devant y.` },
    { type: 'OPEN', prompt: r`Réécris en évitant les répétitions : « Le maître a corrigé les copies. Le maître a rendu les copies aux élèves. »`, answer: { model: 'Le maître a corrigé les copies ; il les leur a rendues.', keywords: ['il', 'les', 'leur'] }, explanation: r`Accord du participe avec « les » placé avant.` },
  ],
  assessment: {
    title: 'Devoir BEPC — La pronominalisation',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Trouve la **fonction** du GN avant de choisir le pronom.
2. Attention à l'**accord du participe passé** quand le COD (le, la, les) est placé avant l'auxiliaire avoir.`,
    items: [
      { section: 'Exercice 1 (10 pts)', sectionIntro: r`Remplace le groupe en gras par le pronom qui convient.`, prompt: r`1. « Elle offre un cadeau **à ses amies**. »`, type: 'MCQ', choices: ['Elle leur offre un cadeau.', 'Elle les offre un cadeau.'], answer: { index: 0 }, points: 2, correction: r`COI personne pluriel.` },
      { section: 'Exercice 1 (10 pts)', prompt: r`2. « Nous mangeons **de l'attiéké**. »`, type: 'MCQ', choices: ['Nous en mangeons.', 'Nous le mangeons.'], answer: { index: 0 }, points: 2, correction: r`Partitif.` },
      { section: 'Exercice 1 (10 pts)', prompt: r`3. « Il habite **à Daloa**. »`, type: 'MCQ', choices: ['Il y habite.', 'Il en habite.'], answer: { index: 0 }, points: 2, correction: r`Lieu.` },
      { section: 'Exercice 1 (10 pts)', prompt: r`4. « J'ai rangé **les cahiers**. »`, type: 'MCQ', choices: ['Je les ai rangés.', 'Je les ai rangé.'], answer: { index: 0 }, points: 2, correction: r`COD placé avant : accord.` },
      { section: 'Exercice 1 (10 pts)', prompt: r`5. « Rends **le stylo** **à Koffi**. »`, type: 'MCQ', choices: ['Rends-le-lui.', 'Rends-lui-le.'], answer: { index: 0 }, points: 2, correction: r`Impératif.` },
      { section: 'Exercice 2 (10 pts)', sectionIntro: r`« Le jeune vendeur a pris les oranges. Le jeune vendeur a lavé les oranges. Le jeune vendeur a proposé les oranges aux passants. Les passants ont acheté les oranges. Les passants ont remercié le jeune vendeur. »`, prompt: r`Réécris ce texte en remplaçant les répétitions par des pronoms (et des substituts nominaux si nécessaire).`, type: 'OPEN', answer: { model: 'Le jeune vendeur a pris les oranges ; il les a lavées, puis il les a proposées aux passants. Ceux-ci les ont achetées et l’ont remercié.' }, points: 10, correction: r`Pronoms corrects (il, les, leur/ceux-ci, l') *(6 pts)* ; accords des participes passés *(2 pts)* ; fluidité *(2 pts)*.` },
    ],
  },
};

export const infinitifParticipe: SeedChapter = {
  subject: 'FR',
  order: 7,
  title: 'Le verbe : l’infinitif et le participe',
  minutes: 240,
  officialRef: `${REF}, leçon 4`,
  objectives: [
    'Identifier les emplois de l’infinitif (verbe, nom, proposition infinitive)',
    'Accorder le participe passé (avec être, avec avoir, verbes pronominaux)',
    'Employer le participe présent et le gérondif',
  ],
  courseMd: r`
> **Situation.** « **Lire** est un plaisir. — Les mangues que j'ai **cueillies** sont mûres. — **En arrivant**, il a souri. » Trois formes du verbe qui ne se conjuguent pas avec un sujet : l'**infinitif**, le **participe** et le **gérondif**.

## 1. L'infinitif
L'infinitif est un **mode impersonnel** : il ne varie pas en personne. Il a un temps **présent** (*chanter*) et un temps **passé** (*avoir chanté, être parti*).

**Emplois comme verbe (noyau d'une proposition) :**
- infinitif **délibératif** : « Que **faire** ? »
- infinitif **injonctif** (consigne) : « **Agiter** avant emploi. »
- infinitif de **narration** : « Et les élèves **de rire**. »
- **proposition infinitive** (sujet propre, après un verbe de perception ou *laisser, faire*) : « J'entends **les oiseaux chanter**. »

**Emplois comme nom :**
- sujet : « **Fumer** nuit à la santé. »
- COD : « J'aime **danser**. »
- complément : « Il a pris sa machette pour **couper** du bois. »

## 2. Le participe passé
**Employé seul** : il s'accorde comme un adjectif : « Des mangues **cueillies** ce matin. »
**Avec l'auxiliaire être** : il s'accorde avec le **sujet** : « Elles sont **arrivées**. »
**Avec l'auxiliaire avoir** : il ne s'accorde **jamais avec le sujet** ; il s'accorde avec le **COD** si celui-ci est placé **avant** le verbe :
- « Elle a **cueilli** des mangues. » (COD après → pas d'accord)
- « Les mangues **qu'**elle a **cueillies**. » (COD *que* = mangues, placé avant → accord)
- « Ces mangues, je **les** ai **cueillies**. »
**Verbes pronominaux** : en général, accord avec le **sujet** (« Elles se sont **levées** »), sauf quand le pronom est COI et que le COD est après (« Elles se sont **lavé** les mains »).

## 3. Le participe présent et le gérondif
- Le **participe présent** (*-ant*) est **invariable** : « Les élèves, **craignant** la pluie, sont rentrés. »
- La **proposition participiale** a son propre sujet : « **Le soleil se levant**, les paysans partirent aux champs. »
- Le **gérondif** = *en* + participe présent ; il se rapporte au **sujet** du verbe principal et exprime le temps, la manière, la cause ou la condition : « Il s'est blessé **en tombant**. »
`,
  summaryMd: r`
- **Infinitif** : mode impersonnel ; emplois verbaux (délibératif, injonctif, narration, proposition infinitive) et nominaux (sujet, COD, complément).
- **Participe passé** : seul → comme un adjectif ; avec **être** → accord avec le sujet ; avec **avoir** → accord avec le **COD placé avant**.
- Pronominaux : en général accord avec le sujet.
- **Participe présent** : invariable ; **gérondif** = en + participe présent.
`,
  questions: [
    { type: 'MCQ', prompt: r`« **Fumer** nuit à la santé. » L'infinitif est :`, choices: ['sujet', 'COD'], answer: { index: 0 }, explanation: r`Emploi nominal.` },
    { type: 'MCQ', prompt: r`« Que **faire** ? » C'est un infinitif :`, choices: ['délibératif', 'de narration'], answer: { index: 0 }, explanation: r`Interrogation sur l'action.` },
    { type: 'MCQ', prompt: r`« J'entends les oiseaux chanter. » « les oiseaux chanter » est :`, choices: ['une proposition infinitive', 'une subordonnée relative'], answer: { index: 0 }, explanation: r`Sujet propre : les oiseaux.` },
    { type: 'MCQ', prompt: r`« Elles sont … tôt. »`, choices: ['arrivées', 'arrivé', 'arrivés'], answer: { index: 0 }, explanation: r`Avec être : accord avec le sujet.` },
    { type: 'MCQ', prompt: r`« Elle a … des mangues. »`, choices: ['cueilli', 'cueillies'], answer: { index: 0 }, explanation: r`COD après.` },
    { type: 'MCQ', prompt: r`« Les mangues qu'elle a … »`, choices: ['cueillies', 'cueilli'], answer: { index: 0 }, explanation: r`COD « que » avant.` },
    { type: 'MCQ', prompt: r`« Ces lettres, je les ai … »`, choices: ['écrites', 'écrit'], answer: { index: 0 }, explanation: r`COD « les » avant.` },
    { type: 'MCQ', prompt: r`« Elles se sont … de bonne heure. »`, choices: ['levées', 'levé'], answer: { index: 0 }, explanation: r`Pronominal : accord avec le sujet.` },
    { type: 'MCQ', prompt: r`« Elles se sont … les mains. »`, choices: ['lavé', 'lavées'], answer: { index: 0 }, explanation: r`COD « les mains » après.` },
    { type: 'MCQ', prompt: r`Le participe présent est :`, choices: ['invariable', 'variable'], answer: { index: 0 }, explanation: r`Forme verbale.` },
    { type: 'MCQ', prompt: r`« Il s'est blessé **en tombant**. » « en tombant » est :`, choices: ['un gérondif', 'un infinitif'], answer: { index: 0 }, explanation: r`en + participe présent.` },
    { type: 'MCQ', prompt: r`« **Le soleil se levant**, les paysans partirent. » C'est :`, choices: ['une proposition participiale', 'une proposition relative'], answer: { index: 0 }, explanation: r`Sujet propre.` },
    { type: 'MCQ', prompt: r`L'infinitif passé de « partir » est :`, choices: ['être parti', 'avoir parti'], answer: { index: 0 }, explanation: r`Auxiliaire être.` },
    { type: 'MCQ', prompt: r`« **Agiter** avant emploi. » C'est un infinitif :`, choices: ['injonctif', 'délibératif'], answer: { index: 0 }, explanation: r`Consigne.` },
    { type: 'OPEN', prompt: r`Accorde les participes : « Les robes qu'elle a (coudre) sont (vendre). »`, answer: { model: 'Les robes qu’elle a cousues sont vendues.', keywords: ['cousues', 'vendues'] }, explanation: r`COD avant / être.` },
  ],
  assessment: {
    title: 'Devoir BEPC — L’infinitif et le participe',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Avec **avoir** : cherche le **COD** et sa **place** (pose la question « quoi ? » après le verbe).
2. Avec **être** : accorde avec le **sujet**.`,
    items: [
      { section: 'Exercice 1 (10 pts)', sectionIntro: r`Choisis la forme correcte du participe passé.`, prompt: r`1. « Les élèves sont (rentrer) à la maison. »`, type: 'MCQ', choices: ['rentrés', 'rentré'], answer: { index: 0 }, points: 2, correction: r`Être → accord.` },
      { section: 'Exercice 1 (10 pts)', prompt: r`2. « Les leçons que nous avons (apprendre). »`, type: 'MCQ', choices: ['apprises', 'appris'], answer: { index: 0 }, points: 2, correction: r`COD avant.` },
      { section: 'Exercice 1 (10 pts)', prompt: r`3. « Ma sœur a (acheter) des pagnes. »`, type: 'MCQ', choices: ['acheté', 'achetés'], answer: { index: 0 }, points: 2, correction: r`COD après.` },
      { section: 'Exercice 1 (10 pts)', prompt: r`4. « Elles se sont (téléphoner). »`, type: 'MCQ', choices: ['téléphoné', 'téléphonées'], answer: { index: 0 }, points: 2, correction: r`Se = COI (téléphoner à) : invariable.` },
      { section: 'Exercice 1 (10 pts)', prompt: r`5. « La lettre ? Je l'ai (écrire). »`, type: 'MCQ', choices: ['écrite', 'écrit'], answer: { index: 0 }, points: 2, correction: r`COD « l' » = la lettre, avant.` },
      { section: 'Exercice 2 (4 pts)', prompt: r`Indique la fonction de l'infinitif dans : « J'aime **lire** » et « **Mentir** est mal ».`, type: 'OPEN', answer: { model: 'lire : COD ; mentir : sujet' }, points: 4, correction: r`« lire » : COD *(2 pts)* ; « mentir » : sujet *(2 pts)*.` },
      { section: 'Exercice 3 (6 pts)', prompt: r`Raconte en 6 lignes une journée de marché au passé composé, en employant au moins un gérondif, une proposition participiale et trois participes passés accordés avec avoir (COD placé avant).`, type: 'OPEN', answer: { model: 'Récit correct avec gérondif, participiale et accords' }, points: 6, correction: r`Gérondif *(1 pt)* ; participiale *(1 pt)* ; trois accords corrects *(3 pts)* ; cohérence *(1 pt)*.` },
    ],
  },
};
