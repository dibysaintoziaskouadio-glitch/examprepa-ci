import { SeedChapter } from '../types';

const r = String.raw;
const REF = 'Programme de Français 3e (DPFC) — progression 2026-2027';

export const adverbe: SeedChapter = {
  subject: 'FR',
  order: 8,
  title: 'L’adverbe et le groupe adverbial',
  minutes: 120,
  officialRef: `${REF}, Grammaire, leçon 5`,
  objectives: [
    'Identifier l’adverbe, ses catégories et ses fonctions',
    'Former correctement les adverbes en -ment',
    'Employer le comparatif et le superlatif de l’adverbe',
  ],
  courseMd: r`
> **Situation.** « Le car roulait **très lentement** ; **heureusement**, nous sommes arrivés **à temps**. » Les mots en gras modifient le sens d'un verbe, d'un adjectif ou de toute la phrase : ce sont des **adverbes** et des **groupes adverbiaux**.

## 1. Définition
L'**adverbe** est un mot **invariable** qui modifie ou précise le sens d'un **verbe** (« il court **vite** »), d'un **adjectif** (« **très** grand »), d'un autre **adverbe** (« **trop** lentement ») ou d'une **phrase** (« **Heureusement**, il est venu »).
Une **locution adverbiale** est un groupe de mots qui joue le rôle d'un adverbe : *tout à coup, à peu près, peut-être, à temps, tout de suite*.
Le **groupe adverbial** est formé d'un adverbe et de ses modificateurs : « **très lentement** ».

## 2. Les catégories d'adverbes
| Catégorie | Exemples |
|---|---|
| Manière | bien, mal, vite, ainsi, lentement, courageusement |
| Temps | hier, aujourd'hui, demain, toujours, déjà, bientôt, souvent |
| Lieu | ici, là, ailleurs, partout, dehors, loin |
| Quantité / intensité | très, trop, beaucoup, peu, assez, si, tellement |
| Affirmation | oui, certes, assurément, vraiment |
| Négation | ne… pas, ne… jamais, ne… plus, non |
| Doute | peut-être, sans doute, probablement |
| Interrogation | où, quand, comment, pourquoi, combien |

## 3. La formation des adverbes en -ment
- En général : adjectif **féminin** + *-ment* : *lent → lente → lentement* ; *heureux → heureuse → heureusement*.
- Adjectif terminé par une **voyelle** au masculin : masculin + *-ment* : *vrai → vraiment*, *poli → poliment* (exceptions : *gai → gaiement*, *gentil → gentiment*).
- Adjectif en **-ant** → **-amment** : *constant → constamment*, *courant → couramment*.
- Adjectif en **-ent** → **-emment** (prononcé « -amment ») : *prudent → prudemment*, *évident → évidemment*. Exception : *lent → lentement*, *présent → présentement*.
- Quelques adverbes en **-ément** : *précis → précisément*, *énorme → énormément*, *profond → profondément*.

## 4. Comparatif et superlatif de l'adverbe
- Comparatif : **plus** vite **que**, **aussi** vite **que**, **moins** vite **que**.
- Superlatif : **le plus** vite, **le moins** vite (« le » invariable).
- Formes irrégulières : *bien → mieux → le mieux* ; *beaucoup → plus → le plus* ; *peu → moins → le moins* ; *mal → plus mal (pis) → le plus mal*.
« Awa court **plus vite que** Koffi ; c'est elle qui court **le plus vite**. »

## 5. Fonction
L'adverbe est le plus souvent **complément circonstanciel** (de manière, de temps, de lieu) ou **modificateur** d'un adjectif ou d'un autre adverbe.
`,
  summaryMd: r`
- Adverbe : **invariable**, modifie un verbe, un adjectif, un adverbe ou une phrase.
- Catégories : manière, temps, lieu, quantité, affirmation, négation, doute, interrogation.
- -ment : féminin + ment (lentement) ; -ant → **-amment** (constamment) ; -ent → **-emment** (prudemment, évidemment).
- Comparatif : plus/aussi/moins… que ; superlatif : le plus, le moins ; bien → mieux → le mieux.
`,
  questions: [
    { type: 'MCQ', prompt: r`L'adverbe est :`, choices: ['invariable', 'variable'], answer: { index: 0 }, explanation: r`Il ne s'accorde pas.` },
    { type: 'MCQ', prompt: r`L'adverbe formé sur « prudent » est :`, choices: ['prudemment', 'prudamment', 'prudentement'], answer: { index: 0 }, explanation: r`-ent → -emment.` },
    { type: 'MCQ', prompt: r`L'adverbe formé sur « constant » est :`, choices: ['constamment', 'constemment'], answer: { index: 0 }, explanation: r`-ant → -amment.` },
    { type: 'MCQ', prompt: r`L'adverbe formé sur « heureux » est :`, choices: ['heureusement', 'heureuxment'], answer: { index: 0 }, explanation: r`Féminin + ment.` },
    { type: 'MCQ', prompt: r`L'adverbe formé sur « gentil » est :`, choices: ['gentiment', 'gentillement'], answer: { index: 0 }, explanation: r`Exception.` },
    { type: 'MCQ', prompt: r`L'adverbe formé sur « évident » est :`, choices: ['évidemment', 'évidamment'], answer: { index: 0 }, explanation: r`-ent → -emment.` },
    { type: 'MCQ', prompt: r`« **Demain**, nous irons à Bassam. » « Demain » est un adverbe de :`, choices: ['temps', 'lieu'], answer: { index: 0 }, explanation: r`Indique le moment.` },
    { type: 'MCQ', prompt: r`« **Peut-être** viendra-t-il. » est un adverbe de :`, choices: ['doute', 'négation'], answer: { index: 0 }, explanation: r`Incertitude.` },
    { type: 'MCQ', prompt: r`Le comparatif de supériorité de « bien » est :`, choices: ['mieux', 'plus bien'], answer: { index: 0 }, explanation: r`Forme irrégulière.` },
    { type: 'MCQ', prompt: r`« C'est elle qui chante … »`, choices: ['le mieux', 'la mieux'], answer: { index: 0 }, explanation: r`« le » invariable devant un adverbe.` },
    { type: 'MCQ', prompt: r`« Il est **très** grand. » « très » modifie :`, choices: ['un adjectif', 'un verbe'], answer: { index: 0 }, explanation: r`Intensité.` },
    { type: 'MCQ', prompt: r`« tout à coup » est :`, choices: ['une locution adverbiale', 'une conjonction'], answer: { index: 0 }, explanation: r`Groupe de mots adverbial.` },
    { type: 'MCQ', prompt: r`L'adverbe formé sur « précis » est :`, choices: ['précisément', 'précisement'], answer: { index: 0 }, explanation: r`-ément.` },
    { type: 'MCQ', prompt: r`L'adverbe formé sur « vrai » est :`, choices: ['vraiment', 'vraiement'], answer: { index: 0 }, explanation: r`Voyelle : masculin + ment.` },
    { type: 'OPEN', prompt: r`Écris une phrase avec un comparatif d'égalité d'adverbe et une autre avec un superlatif.`, answer: { model: 'Il court aussi vite que moi. / C’est lui qui court le plus vite.', keywords: ['aussi… que', 'le plus'] }, explanation: r`Comparatif et superlatif.` },
  ],
  assessment: {
    title: 'Devoir BEPC — L’adverbe',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Pour former un adverbe, pars de l'adjectif **féminin**, puis vérifie les cas -ant / -ent.
2. L'adverbe ne s'accorde **jamais**.`,
    items: [
      { section: 'Exercice 1 (10 pts)', sectionIntro: r`Forme l'adverbe en -ment correspondant à l'adjectif.`, prompt: r`1. courant →`, type: 'MCQ', choices: ['couramment', 'couremment'], answer: { index: 0 }, points: 2, correction: r`-ant → -amment.` },
      { section: 'Exercice 1 (10 pts)', prompt: r`2. récent →`, type: 'MCQ', choices: ['récemment', 'récamment'], answer: { index: 0 }, points: 2, correction: r`-ent → -emment.` },
      { section: 'Exercice 1 (10 pts)', prompt: r`3. sérieux →`, type: 'MCQ', choices: ['sérieusement', 'sérieuxment'], answer: { index: 0 }, points: 2, correction: r`Féminin + ment.` },
      { section: 'Exercice 1 (10 pts)', prompt: r`4. profond →`, type: 'MCQ', choices: ['profondément', 'profondement'], answer: { index: 0 }, points: 2, correction: r`-ément.` },
      { section: 'Exercice 1 (10 pts)', prompt: r`5. « De toute la classe, Aya travaille … »`, type: 'MCQ', choices: ['le mieux', 'la mieux', 'le plus bien'], answer: { index: 0 }, points: 2, correction: r`Superlatif irrégulier invariable.` },
      { section: 'Exercice 2 (10 pts)', prompt: r`Rédige un paragraphe (6 à 8 lignes) racontant une course pendant la fête de l'école. Emploie au moins six adverbes de catégories différentes (souligne-les) et un comparatif d'adverbe.`, type: 'OPEN', answer: { model: 'Récit avec six adverbes variés et un comparatif' }, points: 10, correction: r`Six adverbes corrects de catégories variées *(6 pts)* ; comparatif correct *(2 pts)* ; cohérence et orthographe *(2 pts)*.` },
    ],
  },
};

export const orthographeGrammaticale: SeedChapter = {
  subject: 'FR',
  order: 9,
  title: 'Orthographe grammaticale : accords de « même, tout, tel », de l’adjectif et du participe',
  minutes: 180,
  officialRef: `${REF}, Orthographe, leçon 2`,
  objectives: [
    'Accorder correctement « même », « tout » et « tel »',
    'Accorder l’adjectif qualificatif qui se rapporte à plusieurs noms',
    'Accorder le participe passé employé avec avoir précédé de « en »',
  ],
  courseMd: r`
> **Situation.** « **Tous** les élèves sont **tout** contents ; les filles sont **toutes** heureuses ; elles-**mêmes** l'ont dit. » Pourquoi « tout » s'écrit-il de trois façons ?

## 1. L'accord de « même »
- **Adjectif** (= identique, ou après un pronom pour insister) : il **s'accorde**. « Les **mêmes** livres » ; « eux-**mêmes** », « elles-**mêmes** ».
- **Adverbe** (= aussi, y compris ; placé devant le nom ou après plusieurs noms) : **invariable**. « **Même** les enfants ont compris. » ; « Les élèves, les professeurs **même** étaient là. »

## 2. L'accord de « tout »
- **Adjectif** (devant un nom ou un déterminant) : il s'accorde. « **Tout** le village, **toute** la ville, **tous** les jours, **toutes** les filles. »
- **Pronom** : il s'accorde avec ce qu'il remplace. « Les élèves ? **Tous** sont venus. » (on prononce le *s*).
- **Adverbe** (= tout à fait, entièrement, devant un adjectif) : **invariable** — « Ils sont **tout** contents » ; « elles sont **tout** heureuses » (h muet) —
  **sauf** devant un adjectif **féminin** commençant par une **consonne** ou un **h aspiré**, où il s'accorde pour l'oreille : « Elle est **toute** petite » ; « elles sont **toutes** honteuses ».

## 3. L'accord de « tel »
- *Tel* s'accorde avec le nom auquel il se rapporte : « De **tels** résultats, une **telle** joie. »
- *Tel que* : accord avec le nom qui **précède** : « Des fruits **tels que** la mangue. »
- *Tel* (comparaison, sans *que*) : accord avec le nom qui **suit** : « Elle courait **tel** un éclair. » / « **telle** une gazelle. »
- *Tel quel* : accord avec le nom : « Je te rends tes cahiers **tels quels**. »

## 4. L'adjectif qui se rapporte à plusieurs noms
- Il se met au **pluriel** : « Un pagne et un foulard **neufs**. »
- Si les noms sont de **genres différents**, il se met au **masculin pluriel** : « Une robe et un pagne **neufs**. » (On place de préférence le nom masculin près de l'adjectif.)
- Avec *ou*, *ni* : accord selon le sens.

## 5. Le participe passé employé avec avoir précédé de « en »
Quand le COD est le pronom **en**, le participe passé reste en général **invariable** :
« Des mangues ? J'**en** ai **mangé**. » ; « Des lettres, il **en** a **écrit** beaucoup. »
(*en* n'est ni masculin ni féminin, ni singulier ni pluriel.)
`,
  summaryMd: r`
- **Même** : adjectif (variable : les mêmes, eux-mêmes) / adverbe (= aussi, invariable : même les enfants).
- **Tout** : adjectif et pronom variables (tous les jours, tous sont venus) ; adverbe invariable (tout contents) **sauf** devant adjectif féminin à consonne ou h aspiré (toute petite).
- **Tel** : s'accorde avec le nom (tel que → nom précédent ; tel → nom suivant).
- Adjectif pour plusieurs noms : **pluriel** ; genres différents → **masculin pluriel**.
- PP avec avoir + **en** : **invariable** (j'en ai mangé).
`,
  questions: [
    { type: 'MCQ', prompt: r`« Ils portent les … uniformes. »`, choices: ['mêmes', 'même'], answer: { index: 0 }, explanation: r`Adjectif = identiques.` },
    { type: 'MCQ', prompt: r`« … les plus petits ont compris. »`, choices: ['Même', 'Mêmes'], answer: { index: 0 }, explanation: r`Adverbe = aussi.` },
    { type: 'MCQ', prompt: r`« Elles l'ont fait elles-… »`, choices: ['mêmes', 'même'], answer: { index: 0 }, explanation: r`Après un pronom pluriel.` },
    { type: 'MCQ', prompt: r`« … les filles sont venues. »`, choices: ['Toutes', 'Tout'], answer: { index: 0 }, explanation: r`Adjectif devant déterminant.` },
    { type: 'MCQ', prompt: r`« Ils sont … contents. »`, choices: ['tout', 'tous'], answer: { index: 0 }, explanation: r`Adverbe = tout à fait.` },
    { type: 'MCQ', prompt: r`« Elle est … petite. »`, choices: ['toute', 'tout'], answer: { index: 0 }, explanation: r`Féminin + consonne.` },
    { type: 'MCQ', prompt: r`« Elles sont … heureuses. »`, choices: ['tout', 'toutes'], answer: { index: 0 }, explanation: r`h muet : invariable.` },
    { type: 'MCQ', prompt: r`« Les élèves ? … sont présents. »`, choices: ['Tous', 'Tout'], answer: { index: 0 }, explanation: r`Pronom pluriel.` },
    { type: 'MCQ', prompt: r`« Des fruits … que la mangue et la papaye. »`, choices: ['tels', 'telles'], answer: { index: 0 }, explanation: r`Accord avec « fruits ».` },
    { type: 'MCQ', prompt: r`« Elle court … une gazelle. »`, choices: ['telle', 'tel'], answer: { index: 0 }, explanation: r`Accord avec le nom qui suit.` },
    { type: 'MCQ', prompt: r`« Une robe et un pagne … »`, choices: ['neufs', 'neuves', 'neuf'], answer: { index: 0 }, explanation: r`Masculin pluriel.` },
    { type: 'MCQ', prompt: r`« Des mangues ? J'en ai … »`, choices: ['mangé', 'mangées'], answer: { index: 0 }, explanation: r`PP avec en : invariable.` },
    { type: 'MCQ', prompt: r`« Une … joie l'envahit. »`, choices: ['telle', 'tel'], answer: { index: 0 }, explanation: r`Accord avec « joie ».` },
    { type: 'MCQ', prompt: r`« Elles sont … honteuses. » (h aspiré)`, choices: ['toutes', 'tout'], answer: { index: 0 }, explanation: r`h aspiré : accord.` },
    { type: 'OPEN', prompt: r`Corrige : « Tout les élèves, même les plus timide, étaient tous heureux. »`, answer: { model: 'Tous les élèves, même les plus timides, étaient tout heureux.', keywords: ['Tous les', 'timides', 'tout heureux'] }, explanation: r`Tous (adjectif), même (adverbe), timides (pluriel), tout (adverbe).` },
  ],
  assessment: {
    title: 'Devoir BEPC — Orthographe grammaticale',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Pour **tout** : remplace par « tout à fait » ; si c'est possible, c'est un adverbe (invariable sauf féminin + consonne).
2. Pour **même** : remplace par « aussi » ; si c'est possible, il est invariable.`,
    items: [
      { section: 'Exercice 1 (12 pts)', sectionIntro: r`Choisis la forme correcte.`, prompt: r`1. « … les jours, elle va au marché. »`, type: 'MCQ', choices: ['Tous', 'Tout'], answer: { index: 0 }, points: 2, correction: r`Adjectif.` },
      { section: 'Exercice 1 (12 pts)', prompt: r`2. « Les enfants sont … étonnés. »`, type: 'MCQ', choices: ['tout', 'tous'], answer: { index: 0 }, points: 2, correction: r`Adverbe.` },
      { section: 'Exercice 1 (12 pts)', prompt: r`3. « La pirogue était … neuve. »`, type: 'MCQ', choices: ['toute', 'tout'], answer: { index: 0 }, points: 2, correction: r`Féminin + consonne.` },
      { section: 'Exercice 1 (12 pts)', prompt: r`4. « Les candidats … ont été surpris. »`, type: 'MCQ', choices: ['eux-mêmes', 'eux-même'], answer: { index: 0 }, points: 2, correction: r`Adjectif après pronom pluriel.` },
      { section: 'Exercice 1 (12 pts)', prompt: r`5. « Des ignames et des bananes … »`, type: 'MCQ', choices: ['mûres', 'mûrs'], answer: { index: 0 }, points: 2, correction: r`Deux noms féminins.` },
      { section: 'Exercice 1 (12 pts)', prompt: r`6. « Des poèmes, il en a … beaucoup. »`, type: 'MCQ', choices: ['écrit', 'écrits'], answer: { index: 0 }, points: 2, correction: r`En : invariable.` },
      { section: 'Exercice 2 (8 pts)', sectionIntro: r`Recopie et corrige le texte : « Tout les femmes du village, même les plus agées, étaient venus. Elles étaient toutes heureuses et tout fières. De tel fêtes sont rare. Des pagnes, elles en ont achetées beaucoup. »`, prompt: r`Réécris le texte corrigé.`, type: 'OPEN', answer: { model: 'Toutes les femmes du village, même les plus âgées, étaient venues. Elles étaient tout heureuses et toutes fières. De telles fêtes sont rares. Des pagnes, elles en ont acheté beaucoup.' }, points: 8, correction: r`1 pt par correction : Toutes, âgées, venues, tout heureuses, toutes fières, telles, rares, acheté.` },
    ],
  },
};

export const communication: SeedChapter = {
  subject: 'FR',
  order: 10,
  title: 'La communication : marques de l’oral et de l’écrit, registres de langue, modalités du discours',
  minutes: 240,
  officialRef: `${REF}, Grammaire, leçon 6`,
  objectives: [
    'Identifier les éléments de la situation de communication',
    'Distinguer les marques de l’oral et de l’écrit et les registres de langue',
    'Reconnaître les modalités (types de phrases) et les marques du jugement',
  ],
  courseMd: r`
> **Situation.** Au téléphone, Koffi dit à son ami : « Eh, on part au maquis ? » ; dans une lettre au proviseur, il écrit : « Je sollicite respectueusement l'autorisation de… ». Le même élève s'exprime différemment selon la situation.

## 1. La situation de communication
Toute communication comporte :
- un **émetteur** (celui qui parle ou écrit) ;
- un **récepteur** ou destinataire ;
- un **message** ;
- un **code** (la langue, des signes) ;
- un **canal** (la voix, le papier, le téléphone, Internet) ;
- un **référent** (ce dont on parle) et une **situation** (lieu, moment).

## 2. Les marques de l'oral et de l'écrit
| Oral | Écrit |
|---|---|
| intonation, gestes, mimiques | ponctuation, mise en page |
| interjections (*eh, bon, ben*), hésitations, répétitions | phrases complètes et construites |
| phrases inachevées, ellipses (« Pas venu, lui ? ») | négation complète (*ne… pas*) |
| négation souvent incomplète (« J'sais pas ») | vocabulaire plus précis et varié |
| présence des interlocuteurs | absence du destinataire (il faut tout expliquer) |

## 3. Les registres (niveaux) de langue
| Registre | Caractéristiques | Exemple |
|---|---|---|
| **Familier** | entre amis ; mots familiers, négation incomplète | « Ce gars-là, il est pas venu. » |
| **Courant** | langue correcte de tous les jours | « Ce garçon n'est pas venu. » |
| **Soutenu** | langue recherchée (littérature, discours officiels) | « Ce jeune homme ne s'est point présenté. » |

On adapte le registre à la situation et au destinataire.

## 4. Les modalités du discours (types de phrases)
- **Déclarative** (ou assertive) : elle affirme ou nie un fait ; se termine par un point. « Le marché est ouvert. »
- **Interrogative** : elle pose une question ; point d'interrogation. Interrogation **totale** (réponse oui/non : « Viens-tu ? ») ou **partielle** (« Où vas-tu ? »).
- **Injonctive** (impérative) : elle donne un ordre, un conseil, une interdiction. « Fermez la porte. »
- **Exclamative** : elle exprime un sentiment fort ; point d'exclamation. « Quelle belle fête ! »
Chaque phrase peut être **affirmative** ou **négative**.

## 5. Les modalisateurs (le jugement de l'émetteur)
L'émetteur montre son degré de **certitude** ou son **opinion** :
- certitude : *certainement, sans aucun doute, il est évident que* ;
- doute : *peut-être, sans doute, il semble que*, le **conditionnel** (« Le ministre **viendrait** demain ») ;
- jugement : vocabulaire mélioratif (*magnifique, courageux*) ou péjoratif (*minable, lâche*).
`,
  summaryMd: r`
- Communication : émetteur, récepteur, message, code, canal, référent.
- Oral : intonation, interjections, répétitions, négation incomplète ; écrit : ponctuation, phrases complètes.
- Registres : **familier**, **courant**, **soutenu**.
- Modalités : **déclarative**, **interrogative** (totale/partielle), **injonctive**, **exclamative**.
- Modalisateurs : certitude, doute (conditionnel), vocabulaire mélioratif/péjoratif.
`,
  questions: [
    { type: 'MCQ', prompt: r`Celui qui envoie le message est :`, choices: ['l’émetteur', 'le récepteur'], answer: { index: 0 }, explanation: r`Situation de communication.` },
    { type: 'MCQ', prompt: r`Le téléphone est, dans une communication :`, choices: ['un canal', 'un code'], answer: { index: 0 }, explanation: r`Moyen de transmission.` },
    { type: 'MCQ', prompt: r`« J'sais pas, moi ! » appartient au registre :`, choices: ['familier', 'soutenu'], answer: { index: 0 }, explanation: r`Négation incomplète, élision.` },
    { type: 'MCQ', prompt: r`« Je ne saurais vous dire. » appartient au registre :`, choices: ['soutenu', 'familier'], answer: { index: 0 }, explanation: r`Langue recherchée.` },
    { type: 'MCQ', prompt: r`« Fermez la porte. » est une phrase :`, choices: ['injonctive', 'déclarative'], answer: { index: 0 }, explanation: r`Ordre.` },
    { type: 'MCQ', prompt: r`« Quelle chaleur ! » est une phrase :`, choices: ['exclamative', 'interrogative'], answer: { index: 0 }, explanation: r`Sentiment fort.` },
    { type: 'MCQ', prompt: r`« Viens-tu au stade ? » est une interrogation :`, choices: ['totale', 'partielle'], answer: { index: 0 }, explanation: r`Réponse oui / non.` },
    { type: 'MCQ', prompt: r`« Où habites-tu ? » est une interrogation :`, choices: ['partielle', 'totale'], answer: { index: 0 }, explanation: r`Mot interrogatif.` },
    { type: 'MCQ', prompt: r`Une marque de l'oral est :`, choices: ['l’interjection « ben »', 'la mise en page'], answer: { index: 0 }, explanation: r`Spontanéité.` },
    { type: 'MCQ', prompt: r`« Le ministre viendrait demain. » Le conditionnel exprime :`, choices: ['une information incertaine', 'un ordre'], answer: { index: 0 }, explanation: r`Modalisation du doute.` },
    { type: 'MCQ', prompt: r`« Un spectacle minable » : le mot « minable » est :`, choices: ['péjoratif', 'mélioratif'], answer: { index: 0 }, explanation: r`Jugement négatif.` },
    { type: 'MCQ', prompt: r`Dans une lettre au proviseur, on utilise le registre :`, choices: ['courant ou soutenu', 'familier'], answer: { index: 0 }, explanation: r`Adapté au destinataire.` },
    { type: 'MCQ', prompt: r`« Le marché est ouvert. » est une phrase :`, choices: ['déclarative', 'injonctive'], answer: { index: 0 }, explanation: r`Constat.` },
    { type: 'MCQ', prompt: r`La langue utilisée dans une communication est :`, choices: ['le code', 'le référent'], answer: { index: 0 }, explanation: r`Système de signes.` },
    { type: 'OPEN', prompt: r`Réécris en registre courant : « Ce gars-là, il a pas fait ses devoirs, quoi ! »`, answer: { model: 'Ce garçon n’a pas fait ses devoirs.', keywords: ['garçon', 'n’a pas'] }, explanation: r`Négation complète, vocabulaire neutre.` },
  ],
  assessment: {
    title: 'Devoir BEPC — La communication',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Pour identifier un registre, observe le **vocabulaire** et la **syntaxe** (négation, structure).
2. Pour une modalité, regarde la **ponctuation** et l'**intention** de l'émetteur.`,
    items: [
      { section: 'Exercice 1 (8 pts)', sectionIntro: r`Indique la modalité de chaque phrase.`, prompt: r`1. « Ne jetez pas vos ordures dans la rue. »`, type: 'MCQ', choices: ['injonctive', 'déclarative', 'exclamative'], answer: { index: 0 }, points: 2, correction: r`Interdiction.` },
      { section: 'Exercice 1 (8 pts)', prompt: r`2. « Comme ce quartier est propre ! »`, type: 'MCQ', choices: ['exclamative', 'interrogative'], answer: { index: 0 }, points: 2, correction: r`Sentiment.` },
      { section: 'Exercice 1 (8 pts)', prompt: r`3. « Pourquoi les caniveaux sont-ils bouchés ? »`, type: 'MCQ', choices: ['interrogative partielle', 'interrogative totale'], answer: { index: 0 }, points: 2, correction: r`Mot interrogatif « pourquoi ».` },
      { section: 'Exercice 1 (8 pts)', prompt: r`4. « Eh, t'as vu ça ? » appartient au registre :`, type: 'MCQ', choices: ['familier', 'soutenu'], answer: { index: 0 }, points: 2, correction: r`Interjection, élision.` },
      { section: 'Exercice 2 (12 pts)', sectionIntro: r`**Dialogue** entre deux élèves :
— Eh, Kader, t'étais où hier ?
— Bon… j'étais malade, quoi. J'pouvais pas venir.`, prompt: r`1. Relève trois marques de l'oral et identifie le registre de langue. 2. Transpose ce dialogue en un court récit écrit, au registre courant, au passé.`, type: 'OPEN', answer: { model: 'Marques : eh, bon, quoi, j’pouvais pas ; registre familier. Récit : La veille, Kader était absent ; il expliqua qu’il était malade et ne pouvait pas venir.' }, points: 12, correction: r`Trois marques de l'oral *(3 pts)* ; registre familier *(1 pt)* ; récit au registre courant *(4 pts)* ; discours indirect et concordance des temps *(2 pts)* ; orthographe *(2 pts)*.` },
    ],
  },
};

export const texteArgumentatif: SeedChapter = {
  subject: 'FR',
  order: 11,
  title: 'Le texte argumentatif : lire et rédiger (étayer, réfuter)',
  minutes: 600,
  officialRef: `${REF}, Lecture méthodique et Expression écrite, leçon 1`,
  objectives: [
    'Identifier la thèse, les arguments, les exemples et les connecteurs d’un texte argumentatif',
    'Rédiger un texte argumentatif pour étayer un point de vue',
    'Rédiger un texte argumentatif pour réfuter un point de vue',
  ],
  courseMd: r`
> **Situation.** Le club environnement veut convaincre le conseil d'établissement d'interdire les sachets plastiques au collège. Pour réussir, il faut **argumenter**.

## 1. Qu'est-ce qu'un texte argumentatif ?
C'est un texte qui cherche à **convaincre** ou à **persuader** un destinataire d'adopter un point de vue. Il comporte :
- un **thème** (le sujet dont on parle : les sachets plastiques) ;
- une **thèse** (l'opinion défendue : « il faut les interdire ») ;
- des **arguments** (les raisons qui justifient la thèse) ;
- des **exemples** (faits concrets qui illustrent les arguments) ;
- des **connecteurs logiques** qui organisent le raisonnement : *d'abord, ensuite, de plus, en outre* (addition) ; *car, en effet* (cause) ; *donc, ainsi, par conséquent* (conséquence) ; *mais, cependant, pourtant, en revanche* (opposition) ; *certes… mais* (concession) ; *enfin, en somme, en conclusion*.
Souvent, l'auteur évoque aussi la **thèse adverse** (opinion contraire) pour la combattre.

## 2. Lire un texte argumentatif (lecture méthodique)
1. Identifier le **thème** et la **thèse** de l'auteur.
2. Repérer les **arguments** et les **exemples**, les **connecteurs**.
3. Relever les **marques de la présence de l'auteur** (« je », modalisateurs, vocabulaire mélioratif ou péjoratif).
4. Dégager le **plan** du texte et apprécier la force de l'argumentation.

## 3. Rédiger pour étayer (défendre) un point de vue
**Plan :**
- **Introduction** : présenter le thème (amorce), annoncer la thèse défendue.
- **Développement** : 2 ou 3 **paragraphes**, un argument par paragraphe, chacun illustré par un **exemple** ; enchaîner avec des connecteurs, du moins fort au plus fort.
- **Conclusion** : rappeler la thèse, éventuellement ouvrir sur une question ou un appel.

**Exemple d'argument développé :**
« **D'abord**, les sachets plastiques polluent durablement notre environnement. **En effet**, ils mettent des centaines d'années à se dégrader. **Ainsi**, dans notre quartier, les caniveaux bouchés par les sachets provoquent des inondations à chaque saison des pluies. »

## 4. Rédiger pour réfuter un point de vue
**Réfuter**, c'est montrer qu'une thèse est **fausse** ou **insuffisante**.
- Présenter la **thèse adverse** honnêtement.
- La **contester** par des **contre-arguments** et des exemples.
- Possibilité de **concession** : reconnaître une part de vérité avant de la dépasser (« **Certes**, les sachets sont pratiques, **mais** ils coûtent cher à la collectivité »).
- Conclure en affirmant sa propre thèse.

## 5. Conseils
Rester **poli** et **objectif**, éviter les généralisations (« tout le monde »), utiliser des exemples **précis** et **proches** (école, quartier, Côte d'Ivoire), relire pour corriger l'orthographe.
`,
  summaryMd: r`
- Texte argumentatif : **thème**, **thèse**, **arguments**, **exemples**, **connecteurs**, parfois thèse adverse.
- Lecture : thème → thèse → arguments/exemples → connecteurs → présence de l'auteur → plan.
- **Étayer** : introduction (thème + thèse) ; un argument + un exemple par paragraphe ; conclusion.
- **Réfuter** : thèse adverse → contre-arguments → (concession *certes… mais*) → sa propre thèse.
- Connecteurs : d'abord, ensuite, de plus, en effet, donc, ainsi, cependant, certes… mais, enfin.
`,
  questions: [
    { type: 'MCQ', prompt: r`La thèse d'un texte argumentatif est :`, choices: ['l’opinion défendue par l’auteur', 'le titre du texte'], answer: { index: 0 }, explanation: r`Point de vue.` },
    { type: 'MCQ', prompt: r`Un argument est :`, choices: ['une raison qui justifie la thèse', 'un fait divers'], answer: { index: 0 }, explanation: r`Justification.` },
    { type: 'MCQ', prompt: r`Un exemple sert à :`, choices: ['illustrer un argument par un fait concret', 'remplacer la thèse'], answer: { index: 0 }, explanation: r`Illustration.` },
    { type: 'MCQ', prompt: r`« En effet » introduit :`, choices: ['une explication / cause', 'une conséquence'], answer: { index: 0 }, explanation: r`Connecteur de cause.` },
    { type: 'MCQ', prompt: r`« Par conséquent » introduit :`, choices: ['une conséquence', 'une opposition'], answer: { index: 0 }, explanation: r`Connecteur.` },
    { type: 'MCQ', prompt: r`« Certes… mais » exprime :`, choices: ['la concession', 'le but'], answer: { index: 0 }, explanation: r`On reconnaît puis on dépasse.` },
    { type: 'MCQ', prompt: r`Réfuter une thèse, c'est :`, choices: ['montrer qu’elle est fausse ou insuffisante', 'la répéter'], answer: { index: 0 }, explanation: r`Contre-argumenter.` },
    { type: 'MCQ', prompt: r`Étayer un point de vue, c'est :`, choices: ['le soutenir par des arguments', 'le critiquer'], answer: { index: 0 }, explanation: r`Défendre.` },
    { type: 'MCQ', prompt: r`L'introduction d'un texte argumentatif doit :`, choices: ['présenter le thème et la thèse', 'donner tous les exemples'], answer: { index: 0 }, explanation: r`Annonce.` },
    { type: 'MCQ', prompt: r`Dans le développement, il faut :`, choices: ['un argument par paragraphe', 'tous les arguments dans une seule phrase'], answer: { index: 0 }, explanation: r`Clarté.` },
    { type: 'MCQ', prompt: r`La thèse adverse est :`, choices: ['l’opinion contraire à celle de l’auteur', 'la thèse de l’auteur'], answer: { index: 0 }, explanation: r`Point de vue opposé.` },
    { type: 'MCQ', prompt: r`Un vocabulaire péjoratif révèle :`, choices: ['un jugement négatif de l’auteur', 'l’objectivité'], answer: { index: 0 }, explanation: r`Présence de l'auteur.` },
    { type: 'MCQ', prompt: r`« Tout le monde pense que… » est :`, choices: ['une généralisation à éviter', 'un argument solide'], answer: { index: 0 }, explanation: r`Manque de précision.` },
    { type: 'MCQ', prompt: r`On organise les arguments de préférence :`, choices: ['du moins fort au plus fort', 'au hasard'], answer: { index: 0 }, explanation: r`Gradation.` },
    { type: 'OPEN', prompt: r`Rédige un argument (avec un exemple et un connecteur) pour défendre la thèse : « Le sport est bénéfique aux élèves. »`, answer: { model: 'D’abord, le sport entretient la santé. En effet, il renforce le cœur et les muscles ; par exemple, les élèves qui pratiquent le football sont moins essoufflés.', keywords: ['connecteur', 'exemple'] }, explanation: r`Argument + explication + exemple.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Le texte argumentatif',
    durationMin: 120,
    blocksNext: false,
    instructions: r`**Durée : 2 heures · Note sur 20.** Rédige proprement ; respecte le plan (introduction, développement, conclusion).`,
    advice: r`### 🎯 Conseils méthodologiques
1. Fais un **brouillon** : thèse, 3 arguments, 3 exemples, connecteurs.
2. Un **paragraphe** par argument, avec un **alinéa**.
3. Relis-toi : accords, conjugaison, ponctuation.`,
    items: [
      { section: 'Exercice 1 (8 pts)', sectionIntro: r`**Texte.** « Certains affirment que le téléphone portable distrait les élèves. Pourtant, bien utilisé, il est un formidable outil d'apprentissage. D'abord, il donne accès à des cours et à des dictionnaires en ligne. Ensuite, il permet aux élèves de travailler en groupe à distance. Enfin, il rassure les parents, qui peuvent joindre leurs enfants. Il faut donc apprendre aux jeunes à s'en servir intelligemment plutôt que de l'interdire. »`, prompt: r`1. Quel est le thème du texte ?`, type: 'MCQ', choices: ['le téléphone portable et les élèves', 'les parents d’élèves', 'les dictionnaires'], answer: { index: 0 }, points: 2, correction: r`Thème.` },
      { section: 'Exercice 1 (8 pts)', prompt: r`2. Quelle est la thèse adverse évoquée ?`, type: 'MCQ', choices: ['le téléphone distrait les élèves', 'le téléphone est un outil d’apprentissage'], answer: { index: 0 }, points: 2, correction: r`« Certains affirment que… ».` },
      { section: 'Exercice 1 (8 pts)', prompt: r`3. Formule la thèse de l'auteur et relève ses trois arguments avec leurs connecteurs.`, type: 'OPEN', answer: { model: 'Thèse : bien utilisé, le téléphone est un outil d’apprentissage ; arguments : d’abord accès aux cours ; ensuite travail en groupe ; enfin rassure les parents.' }, points: 4, correction: r`Thèse *(1 pt)* ; trois arguments avec connecteurs *(3 pts)*.` },
      { section: 'Exercice 2 (12 pts)', prompt: r`**Sujet.** « Les élèves ne devraient pas participer aux tâches ménagères, car cela les empêche d'étudier. » Rédige un texte argumentatif d'une vingtaine de lignes pour **réfuter** ce point de vue.`, type: 'OPEN', answer: { model: 'Introduction (thème, thèse adverse) ; concession éventuelle ; 2-3 contre-arguments avec exemples ; conclusion' }, points: 12, correction: r`Introduction (thème, thèse adverse) *(2 pts)* ; contre-arguments pertinents *(4 pts)* ; exemples *(2 pts)* ; connecteurs et organisation *(2 pts)* ; expression et orthographe *(2 pts)*.` },
    ],
  },
};

export const resume: SeedChapter = {
  subject: 'FR',
  order: 12,
  title: 'Le résumé du texte argumentatif',
  minutes: 480,
  officialRef: `${REF}, Expression écrite, leçon 2`,
  objectives: [
    'Comprendre les règles du résumé (réduction, fidélité, reformulation)',
    'Appliquer la méthode : lecture, repérage, reformulation, rédaction',
    'Rédiger un résumé au quart avec le bon nombre de mots',
  ],
  courseMd: r`
> **Situation.** Le texte proposé à l'examen fait 240 mots. On te demande de le résumer **au quart**, soit environ **60 mots**. Comment garder l'essentiel sans trahir l'auteur ?

## 1. Définition et règles
Le **résumé** est la **contraction** d'un texte : on le **réduit** (généralement au **quart**) en conservant :
- les **idées essentielles** et l'**ordre** du texte ;
- le **système d'énonciation** : on écrit **à la place de l'auteur** (si l'auteur dit « je », le résumé dit « je » ; on n'écrit jamais « l'auteur dit que… ») ;
- la **logique** de l'argumentation (connecteurs).

On **supprime** : exemples, anecdotes, répétitions, citations, détails.
On **reformule** avec ses propres mots (on ne recopie pas des phrases du texte) ; on ne donne **aucun avis personnel**.

**Nombre de mots** : une **marge de ± 10 %** est généralement tolérée. Pour 60 mots : entre 54 et 66 mots. On indique le nombre de mots à la fin du résumé.
**Comptage :** un mot = ce qui est séparé par un espace ou une apostrophe (« l'école » = 2 mots ; « c'est-à-dire » compte selon la convention donnée par le professeur, souvent 4).

## 2. La méthode
1. **Lire** le texte plusieurs fois ; identifier le **thème**, la **thèse**, la situation d'énonciation.
2. **Délimiter** les paragraphes ou les **mouvements** du texte.
3. **Repérer** dans chacun l'idée essentielle ; souligner les **connecteurs** ; barrer exemples et répétitions.
4. **Reformuler** chaque idée en une phrase brève (au brouillon).
5. **Rédiger** un texte **suivi**, avec des connecteurs, en un ou plusieurs paragraphes.
6. **Compter** les mots et ajuster ; **relire** l'orthographe.

## 3. Exemple
**Texte (extrait, 64 mots) :** « Le sport est indispensable à l'école. En effet, il permet aux élèves de rester en bonne santé : ceux qui courent régulièrement sont moins souvent malades. De plus, il apprend le respect des règles et l'esprit d'équipe, comme on le voit lors des tournois inter-classes. C'est pourquoi les cours d'EPS ne devraient jamais être supprimés au profit d'autres matières. »

**Résumé (environ 25 mots) :** « Le sport est indispensable à l'école, car il préserve la santé des élèves et leur enseigne la discipline et l'esprit d'équipe. Il faut donc maintenir l'EPS. »
On a supprimé les exemples (coureurs, tournois) et gardé les connecteurs logiques (*car, donc*).

## 4. Erreurs à éviter
Recopier des phrases, garder les exemples, changer l'ordre des idées, ajouter son opinion, écrire « l'auteur pense que », dépasser la marge de mots.
`,
  summaryMd: r`
- Résumé = réduction (souvent au **quart**) ; marge **± 10 %** ; indiquer le nombre de mots.
- Garder : idées essentielles, **ordre**, **énonciation** (écrire à la place de l'auteur), logique (connecteurs).
- Supprimer : exemples, anecdotes, répétitions ; **reformuler** ; **aucun avis personnel**.
- Méthode : lire → découper → repérer → reformuler → rédiger → compter → relire.
`,
  questions: [
    { type: 'NUMERIC', prompt: r`Un texte de 240 mots à résumer au quart : nombre de mots visé ?`, answer: { value: 60 }, explanation: r`$240 \div 4$.` },
    { type: 'NUMERIC', prompt: r`Avec une marge de ± 10 % pour 60 mots, nombre minimum de mots ?`, answer: { value: 54 }, explanation: r`$60 - 6$.` },
    { type: 'NUMERIC', prompt: r`Avec la même marge, nombre maximum de mots ?`, answer: { value: 66 }, explanation: r`$60 + 6$.` },
    { type: 'MCQ', prompt: r`Dans un résumé, on garde :`, choices: ['les idées essentielles', 'les exemples'], answer: { index: 0 }, explanation: r`Règle.` },
    { type: 'MCQ', prompt: r`Dans un résumé, on écrit :`, choices: ['à la place de l’auteur', '« l’auteur dit que… »'], answer: { index: 0 }, explanation: r`Système d'énonciation.` },
    { type: 'MCQ', prompt: r`L'ordre des idées dans le résumé doit être :`, choices: ['celui du texte', 'libre'], answer: { index: 0 }, explanation: r`Fidélité.` },
    { type: 'MCQ', prompt: r`Peut-on donner son avis dans un résumé ?`, choices: ['Non', 'Oui'], answer: { index: 0 }, explanation: r`Aucun avis personnel.` },
    { type: 'MCQ', prompt: r`Recopier des phrases entières du texte est :`, choices: ['une erreur', 'recommandé'], answer: { index: 0 }, explanation: r`Il faut reformuler.` },
    { type: 'MCQ', prompt: r`Les connecteurs logiques dans un résumé :`, choices: ['doivent être conservés ou reformulés', 'doivent tous être supprimés'], answer: { index: 0 }, explanation: r`Ils montrent la logique.` },
    { type: 'NUMERIC', prompt: r`Combien de mots compte « l'école » selon la règle usuelle ?`, answer: { value: 2 }, explanation: r`L'apostrophe sépare deux mots.` },
    { type: 'MCQ', prompt: r`Les exemples et anecdotes :`, choices: ['sont supprimés', 'sont développés'], answer: { index: 0 }, explanation: r`Seulement l'essentiel.` },
    { type: 'MCQ', prompt: r`Si le texte est écrit avec « nous », le résumé utilise :`, choices: ['« nous »', '« l’auteur »'], answer: { index: 0 }, explanation: r`Même énonciation.` },
    { type: 'MCQ', prompt: r`La première étape de la méthode est :`, choices: ['lire attentivement le texte', 'compter les mots'], answer: { index: 0 }, explanation: r`Compréhension.` },
    { type: 'MCQ', prompt: r`À la fin du résumé, on indique :`, choices: ['le nombre de mots', 'son nom'], answer: { index: 0 }, explanation: r`Consigne d'examen.` },
    { type: 'OPEN', prompt: r`Résume en une phrase (15 mots maximum) : « Les arbres sont précieux : ils nous donnent de l'ombre, purifient l'air et retiennent le sol. Par exemple, sans arbres, nos champs seraient emportés par la pluie. Il faut donc les protéger. »`, answer: { model: 'Il faut protéger les arbres, car ils apportent ombre, air pur et retiennent le sol.', keywords: ['protéger', 'car'] }, explanation: r`Exemple supprimé, logique conservée.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Le résumé de texte argumentatif',
    durationMin: 120,
    blocksNext: false,
    instructions: r`**Durée : 2 heures · Note sur 20.** Résume le texte au quart de sa longueur (marge de ± 10 %). Indique le nombre de mots à la fin.`,
    advice: r`### 🎯 Conseils méthodologiques
1. Travaille au **brouillon** : une idée essentielle par paragraphe du texte.
2. Garde les **connecteurs** qui montrent la logique.
3. **Compte** tes mots et ajuste avant de recopier.`,
    items: [
      { section: 'Compréhension (6 pts)', sectionIntro: r`**Texte (environ 200 mots).** « L'orpaillage clandestin se répand dans nos campagnes, et beaucoup y voient une chance de s'enrichir rapidement. Pourtant, cette activité fait plus de mal que de bien. D'abord, elle détruit les terres agricoles : là où l'on cultivait le cacao, l'igname ou le riz, il ne reste que des trous béants et une terre stérile. Ainsi, dans plusieurs villages du Centre-Ouest, les jeunes ont abandonné les champs, et les récoltes ont chuté. Ensuite, l'orpaillage empoisonne l'environnement. En effet, les orpailleurs utilisent du mercure et d'autres produits toxiques qui polluent les rivières où les femmes puisent l'eau et où l'on pêche. Des maladies graves apparaissent alors chez les riverains. Enfin, ces sites sont des lieux d'insécurité : les éboulements y font régulièrement des victimes, et des enfants y travaillent au lieu d'aller à l'école. Certes, l'or rapporte de l'argent à quelques-uns ; mais ce gain est éphémère et se fait au détriment de toute la communauté. Il est donc urgent que les autorités, les chefs traditionnels et les populations s'unissent pour lutter contre ce fléau et proposer aux jeunes d'autres sources de revenus. »`, prompt: r`1. Quelle est la thèse de l'auteur ?`, type: 'MCQ', choices: ['L’orpaillage clandestin fait plus de mal que de bien', 'L’orpaillage enrichit toute la communauté'], answer: { index: 0 }, points: 2, correction: r`« Pourtant, cette activité fait plus de mal que de bien. »` },
      { section: 'Compréhension (6 pts)', prompt: r`2. Relève les trois arguments de l'auteur.`, type: 'OPEN', answer: { model: 'Destruction des terres agricoles ; pollution de l’environnement ; insécurité et travail des enfants' }, points: 4, correction: r`Trois arguments : destruction des terres, pollution, insécurité/travail des enfants (1 pt chacun) ; connecteurs d'abord / ensuite / enfin *(1 pt)*.` },
      { section: 'Résumé (14 pts)', prompt: r`Résume ce texte au quart de sa longueur (environ 50 mots, marge ± 10 %).`, type: 'OPEN', answer: { model: 'L’orpaillage clandestin, présenté comme une source de richesse, est néfaste. Il ruine les terres agricoles, empoisonne les rivières et provoque des maladies. Il expose au danger et prive les enfants d’école. Son profit, réservé à quelques-uns, nuit à tous : il faut donc le combattre et offrir d’autres revenus aux jeunes.' }, points: 14, correction: r`Fidélité aux idées essentielles et à l'ordre *(5 pts)* ; reformulation sans exemples ni avis *(3 pts)* ; énonciation et connecteurs *(2 pts)* ; respect du nombre de mots *(2 pts)* ; orthographe et syntaxe *(2 pts)*.` },
    ],
  },
};

export const articleJournal: SeedChapter = {
  subject: 'FR',
  order: 13,
  title: 'L’article de journal',
  minutes: 480,
  officialRef: `${REF}, Lecture méthodique et Expression écrite, leçons 2 et 3`,
  objectives: [
    'Identifier la structure et les caractéristiques d’un article de presse',
    'Distinguer le fait rapporté et le fait dont on a été témoin',
    'Rédiger un article de journal sur un fait dont on a été témoin',
  ],
  courseMd: r`
> **Situation.** Le club journal du collège prépare son numéro spécial sur la journée de salubrité. Tu dois écrire l'article qui raconte l'événement.

## 1. Les genres journalistiques
- **Le fait divers** : événement de la vie quotidienne (accident, vol, sauvetage).
- **Le compte rendu** : récit d'un événement (match, cérémonie, réunion).
- **Le reportage** : le journaliste raconte ce qu'il a vu sur le terrain.
- **L'interview**, l'**éditorial** (article d'opinion), la **brève**.

Un article peut porter sur un **fait rapporté** (le journaliste raconte ce que d'autres lui ont dit : il cite ses sources, utilise le conditionnel pour ce qui n'est pas vérifié) ou sur un **fait dont il a été témoin** (il raconte ce qu'il a vu lui-même).

## 2. La structure d'un article
1. **Le titre** : court, accrocheur, il résume l'information (« Collège de Bonoua : 500 élèves nettoient leur quartier »).
2. **Le chapeau** (ou chapô) : quelques lignes en caractères gras qui donnent l'**essentiel** de l'information.
3. **L'attaque** : la première phrase du corps, qui doit capter l'attention.
4. **Le corps** de l'article : il développe l'information en répondant aux questions **Qui ? Quoi ? Où ? Quand ? Comment ? Pourquoi ?** (QQOQCP), du plus important au moins important (« pyramide inversée »). On peut y insérer des **citations** (témoignages entre guillemets).
5. **La chute** : la dernière phrase, qui conclut ou ouvre une perspective.
6. La **signature** de l'auteur, éventuellement une **photo** et sa **légende**.

## 3. Les caractéristiques de l'écriture journalistique
- **Objectivité** dans le compte rendu des faits (on distingue faits et opinions).
- **Précision** : dates, lieux, chiffres, noms.
- **Clarté** : phrases courtes, vocabulaire courant, paragraphes brefs.
- Temps : **passé composé** et présent pour l'actualité ; **conditionnel** pour une information non confirmée (« L'incendie **serait** dû à un court-circuit »).
- Discours rapporté : **direct** (« J'ai eu peur », confie la directrice) ou **indirect** (la directrice a confié qu'elle avait eu peur).

## 4. Rédiger un article sur un fait dont on a été témoin
1. Choisir l'information et répondre aux questions QQOQCP au brouillon.
2. Trouver un **titre** et rédiger le **chapeau**.
3. Rédiger le corps en paragraphes, avec une ou deux **citations** de témoins.
4. Soigner l'**attaque** et la **chute**.
5. Relire : précision, objectivité, orthographe.
`,
  summaryMd: r`
- Genres : fait divers, compte rendu, reportage, interview, éditorial, brève.
- Fait **rapporté** (sources, conditionnel) / fait dont on a été **témoin**.
- Structure : **titre**, **chapeau**, **attaque**, **corps** (QQOQCP, pyramide inversée, citations), **chute**, signature.
- Écriture : objective, précise, claire ; passé composé/présent ; conditionnel pour l'information non vérifiée.
`,
  questions: [
    { type: 'MCQ', prompt: r`Le chapeau d'un article :`, choices: ['résume l’essentiel de l’information', 'est la dernière phrase'], answer: { index: 0 }, explanation: r`Texte en gras sous le titre.` },
    { type: 'MCQ', prompt: r`La chute est :`, choices: ['la dernière phrase de l’article', 'le titre'], answer: { index: 0 }, explanation: r`Conclusion.` },
    { type: 'MCQ', prompt: r`L'attaque est :`, choices: ['la première phrase du corps', 'une critique'], answer: { index: 0 }, explanation: r`Capter l'attention.` },
    { type: 'MCQ', prompt: r`Les questions QQOQCP sont :`, choices: ['Qui, Quoi, Où, Quand, Comment, Pourquoi', 'Quel, Quelle, Où, Quand'], answer: { index: 0 }, explanation: r`Informations essentielles.` },
    { type: 'MCQ', prompt: r`« L'incendie serait dû à un court-circuit. » Le conditionnel indique :`, choices: ['une information non confirmée', 'un ordre'], answer: { index: 0 }, explanation: r`Prudence journalistique.` },
    { type: 'MCQ', prompt: r`Un accident sur la route de Yamoussoukro relève du :`, choices: ['fait divers', 'éditorial'], answer: { index: 0 }, explanation: r`Vie quotidienne.` },
    { type: 'MCQ', prompt: r`L'éditorial est :`, choices: ['un article d’opinion', 'un fait divers'], answer: { index: 0 }, explanation: r`Point de vue du journal.` },
    { type: 'MCQ', prompt: r`La « pyramide inversée » consiste à :`, choices: ['donner les informations les plus importantes d’abord', 'garder la conclusion pour le début'], answer: { index: 0 }, explanation: r`Ordre décroissant d'importance.` },
    { type: 'MCQ', prompt: r`Un témoignage cité entre guillemets est au discours :`, choices: ['direct', 'indirect'], answer: { index: 0 }, explanation: r`Paroles rapportées telles quelles.` },
    { type: 'MCQ', prompt: r`Un fait rapporté est :`, choices: ['un fait raconté par d’autres au journaliste', 'un fait vu par le journaliste'], answer: { index: 0 }, explanation: r`Sources.` },
    { type: 'MCQ', prompt: r`Une qualité essentielle de l'article d'information est :`, choices: ['l’objectivité', 'l’exagération'], answer: { index: 0 }, explanation: r`Distinguer faits et opinions.` },
    { type: 'MCQ', prompt: r`Le compte rendu d'un match est :`, choices: ['un récit d’événement', 'une publicité'], answer: { index: 0 }, explanation: r`Genre journalistique.` },
    { type: 'MCQ', prompt: r`Les phrases d'un article doivent être de préférence :`, choices: ['courtes et claires', 'très longues'], answer: { index: 0 }, explanation: r`Lisibilité.` },
    { type: 'MCQ', prompt: r`Un bon titre est :`, choices: ['court et informatif', 'long et vague'], answer: { index: 0 }, explanation: r`Accroche.` },
    { type: 'OPEN', prompt: r`Propose un titre et un chapeau pour un article sur la victoire de ton collège au tournoi inter-établissements.`, answer: { model: 'Titre : « Tournoi inter-collèges : le Collège moderne de X sacré champion ». Chapeau : Samedi 12 mars, au stade municipal, l’équipe de 3ᵉ a battu le lycée Y (2-1) en finale devant 800 supporters.', keywords: ['titre', 'qui', 'quand', 'où'] }, explanation: r`Le chapeau répond aux questions essentielles.` },
  ],
  assessment: {
    title: 'Devoir BEPC — L’article de journal',
    durationMin: 120,
    blocksNext: false,
    instructions: r`**Durée : 2 heures · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Au brouillon, réponds aux questions **QQOQCP**.
2. Respecte la **structure** : titre, chapeau, corps, chute.
3. Reste **objectif** et **précis** ; insère au moins une **citation**.`,
    items: [
      { section: 'Exercice 1 (6 pts)', sectionIntro: r`**Article.** « INONDATIONS À ABIDJAN : UNE NUIT DE PANIQUE À ATTÉCOUBÉ
Des pluies diluviennes se sont abattues sur la capitale économique dans la nuit de mardi à mercredi. À Attécoubé, plusieurs familles ont dû quitter leur maison en pleine nuit.
Il était 2 heures du matin quand l'eau a envahi les habitations… "Nous avons tout perdu", témoigne une mère de famille. Selon les secours, les caniveaux obstrués par les ordures auraient aggravé la situation. Les autorités appellent les populations à quitter les zones à risque. »`, prompt: r`1. Relève le titre et le chapeau de cet article.`, type: 'OPEN', answer: { model: 'Titre : « Inondations à Abidjan : une nuit de panique à Attécoubé » ; chapeau : les deux phrases suivantes' }, points: 2, correction: r`Titre *(1 pt)* ; chapeau *(1 pt)*.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Pourquoi le journaliste emploie-t-il le conditionnel « auraient aggravé » ?`, type: 'MCQ', choices: ['parce que l’information n’est pas confirmée', 'pour donner un ordre'], answer: { index: 0 }, points: 2, correction: r`Prudence : information rapportée.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Relève une citation au discours direct.`, type: 'OPEN', answer: { model: '« Nous avons tout perdu »' }, points: 2, correction: r`« Nous avons tout perdu ».` },
      { section: 'Exercice 2 (14 pts)', prompt: r`**Sujet.** Ton collège a organisé une journée de salubrité dans le quartier. Tu y as participé. Rédige, pour le journal de l'établissement, un article d'une vingtaine de lignes relatant cet événement.`, type: 'OPEN', answer: { model: 'Article structuré : titre, chapeau, attaque, corps (QQOQCP), citation, chute' }, points: 14, correction: r`Titre et chapeau *(3 pts)* ; réponses aux questions QQOQCP *(4 pts)* ; au moins une citation correctement ponctuée *(2 pts)* ; chute *(1 pt)* ; objectivité et clarté *(2 pts)* ; orthographe *(2 pts)*.` },
    ],
  },
};
