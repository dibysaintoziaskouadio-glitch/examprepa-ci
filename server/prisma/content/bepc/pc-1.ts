import { SeedChapter } from '../types';

const r = String.raw;
const REF = 'Programme de Physique-Chimie 3e (DPFC) — progression 2026-2027';

export const massePoids: SeedChapter = {
  subject: 'PC',
  order: 1,
  title: 'Masse et poids d’un corps',
  minutes: 120,
  isFree: true,
  officialRef: `${REF}, Physique — Mécanique`,
  objectives: [
    'Distinguer la masse et le poids d’un corps',
    'Donner les caractéristiques du poids et le représenter',
    'Utiliser la relation P = m × g',
  ],
  courseMd: r`
> **Situation.** Au marché d'Adjamé, un commerçant pèse un sac de riz : la balance indique 25 kg. Un élève affirme : « Le sac pèse 25 kg. » Est-ce exact ?

## 1. La masse
La **masse** $m$ d'un corps caractérise la **quantité de matière** qu'il contient.
- Unité légale : le **kilogramme (kg)** ; on utilise aussi le gramme (g), la tonne (t = 1 000 kg).
- Instrument : la **balance**.
- La masse **ne dépend pas du lieu** : le sac a une masse de 25 kg à Abidjan comme sur la Lune.

## 2. Le poids
Le **poids** $\vec{P}$ d'un corps est la force d'attraction exercée par la Terre sur ce corps. C'est une **force à distance**.

> **Caractéristiques du poids :**
> - **point d'application** : le centre de gravité G du corps ;
> - **direction** : la verticale du lieu ;
> - **sens** : du haut vers le bas ;
> - **intensité** : $P$, en **newtons (N)**, mesurée avec un **dynamomètre**.

## 3. Relation entre poids et masse
> $$P = m \times g$$
> $P$ en N, $m$ en kg, $g$ = intensité de la pesanteur en N/kg.

- Sur Terre, $g \approx 9{,}8$ N/kg ; dans les exercices on prend souvent **$g = 10$ N/kg**.
- $g$ dépend du lieu : sur la Lune, $g \approx 1{,}6$ N/kg.

**Exemples ($g = 10$ N/kg) :**
- Sac de riz de 25 kg : $P = 25 \times 10 = 250$ N.
- Un objet pèse 30 N : $m = \dfrac{P}{g} = 3$ kg.
- Sur la Lune, le sac de riz a toujours une masse de 25 kg mais son poids vaut $25 \times 1{,}6 = 40$ N.

Réponse à la situation : la balance mesure une **masse** (25 kg) ; le **poids** du sac est 250 N.

## 4. Représenter le poids
On le représente par un **vecteur** partant de G, vertical, vers le bas, dont la longueur respecte une **échelle**.
Exemple : échelle 1 cm pour 100 N ; $P = 250$ N → flèche de 2,5 cm.
`,
  summaryMd: r`
| | Masse | Poids |
|---|---|---|
| Symbole | $m$ | $\vec{P}$ (intensité $P$) |
| Unité | kg | N |
| Instrument | balance | dynamomètre |
| Dépend du lieu ? | non | oui |

- $P = m \times g$ ($g \approx 10$ N/kg sur Terre, 1,6 N/kg sur la Lune).
- Poids : point G, verticale, vers le bas.
- ❌ Ne pas dire « pèse 25 kg » : le poids s'exprime en newtons.
- Toujours convertir la masse en **kg** avant de calculer.
`,
  questions: [
    { type: 'MCQ', prompt: r`Le poids s'exprime en :`, choices: ['kilogramme', 'newton', 'litre'], answer: { index: 1 }, explanation: r`C'est une force.` },
    { type: 'MCQ', prompt: r`On mesure la masse avec :`, choices: ['un dynamomètre', 'une balance', 'un thermomètre'], answer: { index: 1 }, explanation: r`La balance mesure la masse.` },
    { type: 'NUMERIC', prompt: r`Poids (N) d'un sac de 50 kg ($g = 10$ N/kg) ?`, answer: { value: 500 }, explanation: r`$50 \times 10$.` },
    { type: 'NUMERIC', prompt: r`Un objet pèse 30 N ($g = 10$ N/kg). Masse en kg ?`, answer: { value: 3 }, explanation: r`$\frac{30}{10}$.` },
    { type: 'MCQ', prompt: r`Sur la Lune, la masse d'un astronaute :`, choices: ['diminue', 'reste la même', 'augmente'], answer: { index: 1 }, explanation: r`La masse ne dépend pas du lieu.` },
    { type: 'MCQ', prompt: r`La direction du poids est :`, choices: ['horizontale', 'verticale', 'oblique'], answer: { index: 1 }, explanation: r`La verticale du lieu.` },
    { type: 'MCQ', prompt: r`Le point d'application du poids est :`, choices: ['le point de contact avec le sol', 'le centre de gravité', 'le sommet du corps'], answer: { index: 1 }, explanation: r`Le centre de gravité G.` },
    { type: 'NUMERIC', prompt: r`Poids (N) d'un pagne de 500 g ($g = 10$ N/kg) ?`, answer: { value: 5 }, explanation: r`$0{,}5 \times 10$.` },
    { type: 'NUMERIC', prompt: r`Poids sur la Lune ($g = 1{,}6$ N/kg) d'un sac de 25 kg ?`, answer: { value: 40 }, explanation: r`$25 \times 1{,}6$.` },
    { type: 'MCQ', prompt: r`L'unité de $g$ est :`, choices: ['N/kg', 'kg/N', 'N'], answer: { index: 0 }, explanation: r`$g = \frac{P}{m}$.` },
    { type: 'MCQ', prompt: r`Le poids est une force :`, choices: ['de contact', 'à distance'], answer: { index: 1 }, explanation: r`La Terre agit sans contact.` },
    { type: 'NUMERIC', prompt: r`Échelle 1 cm pour 100 N. Longueur (cm) du vecteur représentant 250 N ?`, answer: { value: 2.5 }, explanation: r`$\frac{250}{100}$.` },
    { type: 'NUMERIC', prompt: r`Masse (kg) d'un objet de poids 75 N ($g = 10$ N/kg) ?`, answer: { value: 7.5 }, explanation: r`$\frac{75}{10}$.` },
    { type: 'MCQ', prompt: r`Le sens du poids est :`, choices: ['vers le haut', 'vers le bas', 'vers la droite'], answer: { index: 1 }, explanation: r`Vers le centre de la Terre.` },
    { type: 'OPEN', prompt: r`Corrige la phrase : « Mon cartable pèse 4 kg. »`, answer: { model: 'Mon cartable a une masse de 4 kg ; son poids est de 40 N.', keywords: ['masse', '40 N'] }, explanation: r`Le kilogramme est l'unité de masse.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Masse et poids',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.** On prend $g = 10$ N/kg sur Terre et $g = 1{,}6$ N/kg sur la Lune.`,
    advice: r`### 🎯 Conseils méthodologiques
1. Convertis toujours la masse en **kg**.
2. Écris la formule $P = m \times g$, remplace, puis donne le résultat **avec l'unité**.
3. Pour représenter une force, précise l'**échelle**.`,
    items: [
      { section: 'Exercice 1 (8 pts)', prompt: r`1. Le poids est :`, type: 'MCQ', choices: ['une quantité de matière', 'une force', 'un volume'], answer: { index: 1 }, points: 2, correction: r`Force exercée par la Terre.` },
      { section: 'Exercice 1 (8 pts)', prompt: r`2. La direction du poids est :`, type: 'MCQ', choices: ['horizontale', 'verticale', 'quelconque'], answer: { index: 1 }, points: 2, correction: r`Verticale, vers le bas.` },
      { section: 'Exercice 1 (8 pts)', prompt: r`3. Le dynamomètre mesure :`, type: 'MCQ', choices: ['la masse', 'le poids', 'la température'], answer: { index: 1 }, points: 2, correction: r`Il mesure une force.` },
      { section: 'Exercice 1 (8 pts)', prompt: r`4. Un astronaute va sur la Lune. Ce qui change :`, type: 'MCQ', choices: ['sa masse', 'son poids', 'les deux'], answer: { index: 1 }, points: 2, correction: r`$g$ change, donc le poids change.` },
      { section: 'Exercice 2 (12 pts)', prompt: r`1. Calcule le poids d'un régime de bananes de 12 kg (en N).`, type: 'NUMERIC', answer: { value: 120 }, points: 3, resultPoints: 1.5, correction: r`$P = m \times g = 12 \times 10 = 120$ N.` },
      { section: 'Exercice 2 (12 pts)', prompt: r`2. Calcule la masse (en kg) d'un bidon d'huile de poids 75 N.`, type: 'NUMERIC', answer: { value: 7.5 }, points: 3, resultPoints: 1.5, correction: r`$m = \frac{P}{g} = 7{,}5$ kg.` },
      { section: 'Exercice 2 (12 pts)', prompt: r`3. Calcule le poids sur la Lune d'un astronaute de 80 kg (en N).`, type: 'NUMERIC', answer: { value: 128 }, points: 3, resultPoints: 1.5, correction: r`$80 \times 1{,}6 = 128$ N.` },
      { section: 'Exercice 2 (12 pts)', prompt: r`4. Représente le poids du régime de bananes (échelle : 1 cm pour 40 N) et donne ses caractéristiques.`, type: 'OPEN', answer: { model: 'G, verticale, vers le bas, 120 N ; flèche de 3 cm' }, points: 3, correction: r`Point d'application G, direction verticale, sens vers le bas, intensité 120 N *(2 pts)* ; flèche de 3 cm *(1 pt)*.` },
    ],
  },
};

export const forces: SeedChapter = {
  subject: 'PC',
  order: 2,
  title: 'Les forces',
  minutes: 180,
  officialRef: `${REF}, Physique — Mécanique`,
  objectives: [
    'Reconnaître les effets d’une action mécanique',
    'Distinguer forces de contact et forces à distance',
    'Donner les caractéristiques d’une force et la représenter',
  ],
  courseMd: r`
> **Situation.** Un joueur frappe un ballon, un aimant attire un clou, un pêcheur tend sa ligne. Dans chaque cas, un objet agit sur un autre : on parle d'**action mécanique**.

## 1. Effets d'une action mécanique
Une action mécanique peut :
- **mettre en mouvement** un objet (le joueur lance le ballon) ;
- **modifier le mouvement** (le gardien arrête le ballon, dévie sa trajectoire) ;
- **déformer** un objet (on écrase une canette, on étire un ressort).

On modélise une action mécanique par une **force**.

## 2. Types de forces
- **Forces de contact** : l'objet qui agit touche l'objet qui subit l'action (main qui pousse, fil qui tient, table qui supporte). On peut distinguer les actions **localisées** (en un point) et **réparties** (sur une surface).
- **Forces à distance** : pas de contact (poids, force magnétique d'un aimant, force électrique).

## 3. Caractéristiques d'une force
> Une force est caractérisée par :
> 1. son **point d'application** ;
> 2. sa **droite d'action** (direction) ;
> 3. son **sens** ;
> 4. son **intensité**, en **newtons (N)**, mesurée avec un **dynamomètre**.

## 4. Représentation
On représente une force par un **vecteur** :
- origine = point d'application ;
- direction et sens = ceux de la force ;
- longueur proportionnelle à l'intensité, selon une **échelle**.

**Exemple.** Un fil tient une lampe de poids 6 N. La force exercée par le fil sur la lampe, notée $\vec{T}$ (tension), s'applique au point d'attache, est verticale, vers le haut, d'intensité 6 N. Avec l'échelle 1 cm pour 2 N : flèche de 3 cm.

## 5. Quelques forces usuelles
| Force | Notation | Type |
|---|---|---|
| Poids | $\vec{P}$ | à distance |
| Tension d'un fil | $\vec{T}$ | contact localisé |
| Réaction d'un support | $\vec{R}$ | contact réparti |
| Force exercée par un aimant | $\vec{F}$ | à distance |
`,
  summaryMd: r`
- Effets : mettre en mouvement, modifier le mouvement, déformer.
- Contact (fil, main, support) / à distance (poids, aimant).
- 4 caractéristiques : **point d'application, droite d'action, sens, intensité (N)**.
- Représentation : vecteur + **échelle**.
- Instrument : **dynamomètre**.
`,
  questions: [
    { type: 'MCQ', prompt: r`L'unité de l'intensité d'une force est :`, choices: ['le kilogramme', 'le newton', 'le joule'], answer: { index: 1 }, explanation: r`Symbole N.` },
    { type: 'MCQ', prompt: r`L'action d'un aimant sur un clou est une force :`, choices: ['de contact', 'à distance'], answer: { index: 1 }, explanation: r`Il agit sans toucher.` },
    { type: 'MCQ', prompt: r`L'action d'un fil sur une lampe suspendue est une force :`, choices: ['de contact', 'à distance'], answer: { index: 0 }, explanation: r`Le fil touche la lampe.` },
    { type: 'MCQ', prompt: r`Un gardien arrête un ballon : l'effet de la force est de :`, choices: ['déformer', 'modifier le mouvement', 'mettre en mouvement'], answer: { index: 1 }, explanation: r`Le mouvement s'arrête.` },
    { type: 'MCQ', prompt: r`Écraser une canette illustre l'effet :`, choices: ['de déformation', 'de mise en mouvement', 'électrique'], answer: { index: 0 }, explanation: r`La forme change.` },
    { type: 'MCQ', prompt: r`L'intensité d'une force se mesure avec :`, choices: ['une balance', 'un dynamomètre', 'un ampèremètre'], answer: { index: 1 }, explanation: r`Dynamomètre.` },
    { type: 'NUMERIC', prompt: r`Combien de caractéristiques a une force ?`, answer: { value: 4 }, explanation: r`Point, droite d'action, sens, intensité.` },
    { type: 'NUMERIC', prompt: r`Échelle 1 cm pour 2 N. Longueur (cm) du vecteur d'une force de 6 N ?`, answer: { value: 3 }, explanation: r`$\frac{6}{2}$.` },
    { type: 'NUMERIC', prompt: r`Échelle 1 cm pour 50 N : un vecteur mesure 4 cm. Intensité (N) ?`, answer: { value: 200 }, explanation: r`$4 \times 50$.` },
    { type: 'MCQ', prompt: r`La tension d'un fil tenant un objet immobile est dirigée :`, choices: ['vers le bas', 'vers le haut, le long du fil', 'horizontalement'], answer: { index: 1 }, explanation: r`Le fil « tire » l'objet vers le point d'attache.` },
    { type: 'MCQ', prompt: r`La réaction d'une table sur un livre est une force :`, choices: ['de contact répartie', 'à distance', 'de contact localisée en un point unique'], answer: { index: 0 }, explanation: r`Elle s'exerce sur toute la surface de contact.` },
    { type: 'MCQ', prompt: r`Le poids est une force :`, choices: ['de contact', 'à distance'], answer: { index: 1 }, explanation: r`Attraction de la Terre.` },
    { type: 'MCQ', prompt: r`Une action mécanique est modélisée par :`, choices: ['une masse', 'une force', 'une énergie'], answer: { index: 1 }, explanation: r`Notion de force.` },
    { type: 'MCQ', prompt: r`L'origine du vecteur force est :`, choices: ['le point d’application', 'n’importe quel point', 'le centre de la Terre'], answer: { index: 0 }, explanation: r`Convention de représentation.` },
    { type: 'OPEN', prompt: r`Donne les caractéristiques de la force exercée par un fil sur une lampe de 6 N immobile.`, answer: { model: 'Point d’attache ; verticale ; vers le haut ; 6 N.', keywords: ['verticale', 'vers le haut', '6 N'] }, explanation: r`Les 4 caractéristiques doivent apparaître.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Les forces',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.** $g = 10$ N/kg.`,
    advice: r`### 🎯 Conseils méthodologiques
1. Cite toujours les **4 caractéristiques** d'une force.
2. Indique l'**échelle** avant de tracer.
3. Distingue bien force de **contact** et force **à distance**.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Le vent qui pousse une pirogue à voile exerce une force :`, type: 'MCQ', choices: ['à distance', 'de contact répartie'], answer: { index: 1 }, points: 2, correction: r`L'air agit sur toute la voile.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Une force de 15 N représentée à l'échelle 1 cm pour 5 N mesure :`, type: 'MCQ', choices: ['3 cm', '5 cm', '15 cm'], answer: { index: 0 }, points: 2, correction: r`$\frac{15}{5}$.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Étirer un élastique illustre l'effet :`, type: 'MCQ', choices: ['de déformation', 'de mise en mouvement'], answer: { index: 0 }, points: 2, correction: r`La forme change.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`Une lampe de masse 600 g est suspendue au plafond par un fil. Elle est immobile.`, prompt: r`1. Fais l'inventaire des forces qui s'exercent sur la lampe et précise leur type.`, type: 'OPEN', answer: { model: 'Poids (à distance) et tension du fil (contact)' }, points: 4, correction: r`Le poids $\vec{P}$, force à distance *(2 pts)* ; la tension du fil $\vec{T}$, force de contact *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Calcule l'intensité du poids de la lampe (en N).`, type: 'NUMERIC', answer: { value: 6 }, points: 3, resultPoints: 1.5, correction: r`$P = 0{,}6 \times 10 = 6$ N.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Donne les caractéristiques de la tension du fil, sachant qu'elle a la même intensité que le poids.`, type: 'OPEN', answer: { model: 'Point d’attache, verticale, vers le haut, 6 N' }, points: 4, correction: r`Point d'application : point d'attache du fil sur la lampe ; droite d'action : verticale (le fil) ; sens : vers le haut ; intensité : 6 N *(1 pt chacune)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. À l'échelle 1 cm pour 2 N, quelle est la longueur de chaque vecteur (en cm) ?`, type: 'NUMERIC', answer: { value: 3 }, points: 3, resultPoints: 1.5, correction: r`$\frac{6}{2} = 3$ cm pour chacun.` },
    ],
  },
};

export const equilibre: SeedChapter = {
  subject: 'PC',
  order: 3,
  title: 'Équilibre d’un solide soumis à deux forces',
  minutes: 60,
  officialRef: `${REF}, Physique — Mécanique`,
  objectives: [
    'Énoncer les conditions d’équilibre d’un solide soumis à deux forces',
    'Utiliser ces conditions pour déterminer une force inconnue',
  ],
  courseMd: r`
> **Situation.** Une calebasse de 2 kg est posée sur une table ; une lampe pend à un fil. Elles restent immobiles. Que peut-on dire des forces qui s'exercent sur elles ?

## 1. Condition d'équilibre
> **Si un solide soumis à deux forces $\vec{F_1}$ et $\vec{F_2}$ est en équilibre**, alors ces deux forces :
> - ont la **même droite d'action** ;
> - sont de **sens contraires** ;
> - ont la **même intensité** : $F_1 = F_2$.
>
> On écrit : $\vec{F_1} + \vec{F_2} = \vec{0}$.

## 2. Exemples
**Solide suspendu à un fil.** Forces : le poids $\vec{P}$ et la tension $\vec{T}$. À l'équilibre, $\vec{T}$ est verticale, vers le haut et $T = P$.
Lampe de 0,6 kg ($g = 10$ N/kg) : $P = 6$ N donc $T = 6$ N.

**Solide posé sur une table horizontale.** Forces : le poids $\vec{P}$ et la réaction $\vec{R}$ de la table. À l'équilibre, $\vec{R}$ est verticale, vers le haut et $R = P$.
Calebasse de 2 kg : $R = P = 20$ N.

**Solide accroché à un ressort.** La force exercée par le ressort compense le poids : l'allongement du ressort permet de mesurer le poids (principe du dynamomètre).

## 3. Méthode
1. Préciser le **système** étudié.
2. Faire l'**inventaire** des forces.
3. Appliquer les conditions d'équilibre.
4. **Représenter** les forces (même longueur, sens opposés, même droite).

⚠️ Si les deux forces n'ont pas la même droite d'action, le solide **tourne** : il n'est pas en équilibre même si $F_1 = F_2$.
`,
  summaryMd: r`
Solide en équilibre sous deux forces :
- **même droite d'action**, **sens contraires**, **même intensité** ;
- $\vec{F_1} + \vec{F_2} = \vec{0}$.

Cas usuels : fil ⟹ $T = P$ ; table ⟹ $R = P$.

Méthode : système → inventaire → conditions → représentation.
`,
  questions: [
    { type: 'MCQ', prompt: r`À l'équilibre sous deux forces, celles-ci ont :`, choices: ['le même sens', 'des sens contraires', 'des directions perpendiculaires'], answer: { index: 1 }, explanation: r`Sens contraires.` },
    { type: 'MCQ', prompt: r`À l'équilibre sous deux forces, leurs intensités sont :`, choices: ['égales', 'différentes', 'nulles'], answer: { index: 0 }, explanation: r`$F_1 = F_2$.` },
    { type: 'MCQ', prompt: r`Les deux forces ont la même :`, choices: ['droite d’action', 'origine obligatoirement', 'couleur'], answer: { index: 0 }, explanation: r`Sinon le solide tourne.` },
    { type: 'NUMERIC', prompt: r`Lampe de 0,6 kg immobile au bout d'un fil ($g = 10$ N/kg). Tension du fil (N) ?`, answer: { value: 6 }, explanation: r`$T = P$.` },
    { type: 'NUMERIC', prompt: r`Calebasse de 2 kg posée sur une table. Réaction de la table (N) ?`, answer: { value: 20 }, explanation: r`$R = P$.` },
    { type: 'MCQ', prompt: r`La réaction d'une table horizontale sur un objet immobile est dirigée :`, choices: ['vers le haut', 'vers le bas', 'horizontalement'], answer: { index: 0 }, explanation: r`Elle compense le poids.` },
    { type: 'MCQ', prompt: r`$\vec{F_1} + \vec{F_2} = \vec{0}$ signifie que :`, choices: ['les forces se compensent', 'les forces sont nulles', 'le solide accélère'], answer: { index: 0 }, explanation: r`Elles ont même droite, même intensité, sens contraires.` },
    { type: 'MCQ', prompt: r`Deux forces de même intensité, de sens contraires, mais de droites d'action parallèles distinctes :`, choices: ['maintiennent l’équilibre', 'font tourner le solide'], answer: { index: 1 }, explanation: r`Elles forment un couple.` },
    { type: 'NUMERIC', prompt: r`Un dynamomètre indique 15 N quand on y accroche un objet immobile. Poids de l'objet (N) ?`, answer: { value: 15 }, explanation: r`Équilibre : la force du ressort compense le poids.` },
    { type: 'NUMERIC', prompt: r`Avec la question précédente, masse de l'objet en kg ($g = 10$ N/kg) ?`, answer: { value: 1.5 }, explanation: r`$\frac{15}{10}$.` },
    { type: 'MCQ', prompt: r`Première étape de l'étude d'un équilibre :`, choices: ['calculer la masse', 'préciser le système étudié', 'tracer les vecteurs'], answer: { index: 1 }, explanation: r`On choisit le système.` },
    { type: 'MCQ', prompt: r`Pour un solide suspendu à un fil, la droite d'action commune est :`, choices: ['la verticale passant par le fil', 'l’horizontale', 'quelconque'], answer: { index: 0 }, explanation: r`Le fil est vertical.` },
    { type: 'NUMERIC', prompt: r`Échelle 1 cm pour 5 N : $P = 20$ N. Longueur (cm) du vecteur réaction ?`, answer: { value: 4 }, explanation: r`$R = P = 20$ N → 4 cm.` },
    { type: 'MCQ', prompt: r`Un livre posé sur une table est soumis à :`, choices: ['une seule force', 'deux forces : le poids et la réaction', 'aucune force'], answer: { index: 1 }, explanation: r`Inventaire.` },
    { type: 'OPEN', prompt: r`Énonce les conditions d'équilibre d'un solide soumis à deux forces.`, answer: { model: 'Même droite d’action, sens contraires, même intensité.', keywords: ['même droite', 'sens contraires', 'même intensité'] }, explanation: r`Les trois conditions.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Équilibre d’un solide',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.** $g = 10$ N/kg.`,
    advice: r`### 🎯 Conseils méthodologiques
1. Suis toujours la méthode : **système → inventaire → conditions → représentation**.
2. À l'équilibre, les deux vecteurs ont la **même longueur** et des **sens opposés**.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Un solide en équilibre sous deux forces : les forces ont :`, type: 'MCQ', choices: ['même sens', 'même intensité et sens contraires', 'directions perpendiculaires'], answer: { index: 1 }, points: 3, correction: r`Conditions d'équilibre.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Un objet de 3 kg posé sur le sol : la réaction du sol vaut :`, type: 'MCQ', choices: ['3 N', '30 N', '0,3 N'], answer: { index: 1 }, points: 3, correction: r`$R = P = 30$ N.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`Un régime de bananes de 8 kg est suspendu immobile à une corde verticale accrochée à une poutre.`, prompt: r`1. Quel est le système étudié ? Fais l'inventaire des forces.`, type: 'OPEN', answer: { model: 'Le régime ; poids et tension de la corde' }, points: 3, correction: r`Système : le régime *(1 pt)* ; forces : poids $\vec{P}$ *(1 pt)* et tension $\vec{T}$ de la corde *(1 pt)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Calcule le poids du régime (en N).`, type: 'NUMERIC', answer: { value: 80 }, points: 3, resultPoints: 1.5, correction: r`$P = 8 \times 10 = 80$ N.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. En appliquant les conditions d'équilibre, donne les caractéristiques de la tension.`, type: 'OPEN', answer: { model: 'Verticale, vers le haut, 80 N, point d’attache' }, points: 4, correction: r`Le régime est en équilibre sous deux forces *(1 pt)* : $\vec{T}$ a la même droite d'action que $\vec{P}$ (verticale), le sens contraire (vers le haut), la même intensité : $T = 80$ N *(3 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. À l'échelle 1 cm pour 20 N, quelle est la longueur des vecteurs (en cm) ?`, type: 'NUMERIC', answer: { value: 4 }, points: 4, resultPoints: 2, correction: r`$\frac{80}{20} = 4$ cm pour chacun ; sens opposés sur la même droite verticale.` },
    ],
  },
};

export const travailPuissance: SeedChapter = {
  subject: 'PC',
  order: 4,
  title: 'Travail et puissance mécaniques',
  minutes: 120,
  officialRef: `${REF}, Physique — Mécanique`,
  objectives: [
    'Calculer le travail d’une force constante (dont le poids)',
    'Distinguer travail moteur et travail résistant',
    'Calculer une puissance mécanique',
  ],
  courseMd: r`
> **Situation.** Sur un chantier de Yopougon, un maçon monte un sac de ciment de 50 kg à 3 m de hauteur en 10 s. Une poulie électrique fait le même travail en 5 s. Qui est le plus « puissant » ?

## 1. Travail d'une force
Une force **travaille** quand son point d'application se **déplace**.
> Pour une force constante $\vec{F}$ dont le point d'application se déplace de A à B **dans la direction de la force** :
> $$W = F \times AB$$
> $W$ en **joules (J)**, $F$ en N, AB en m.

- Si la force est **dans le sens** du déplacement, le travail est **moteur** ($W > 0$).
- Si elle est **opposée** au déplacement, le travail est **résistant** ($W < 0$) : $W = -F \times AB$.
- Si la force est **perpendiculaire** au déplacement, elle ne travaille pas ($W = 0$).

## 2. Travail du poids
Lorsqu'un objet se déplace d'une hauteur $h$ :
> - à la **descente** : $W(\vec{P}) = + P \times h = m g h$ (travail moteur) ;
> - à la **montée** : $W(\vec{P}) = - m g h$ (travail résistant).

Exemple : sac de 50 kg monté de 3 m ($g = 10$ N/kg) : $W(\vec{P}) = -500 \times 3 = -1\,500$ J. Le maçon doit fournir un travail de $+1\,500$ J.

## 3. Puissance mécanique
> La puissance mesure la **rapidité** avec laquelle un travail est effectué :
> $$\mathscr{P} = \dfrac{W}{t}$$
> $\mathscr{P}$ en **watts (W)**, $W$ en J, $t$ en s.

- Maçon : $\mathscr{P} = \dfrac{1\,500}{10} = 150$ W.
- Poulie électrique : $\mathscr{P} = \dfrac{1\,500}{5} = 300$ W : elle est deux fois plus puissante.

Autre expression : si la force est dans le sens du déplacement à vitesse constante $v$ : $\mathscr{P} = F \times v$.

**Unités utiles :** 1 kW = 1 000 W ; 1 kJ = 1 000 J.
`,
  summaryMd: r`
- $W = F \times AB$ (force parallèle au déplacement), en joules.
- Moteur ($W > 0$) / résistant ($W < 0$) / nul (force ⊥ déplacement).
- Poids : $W = + mgh$ à la descente, $- mgh$ à la montée.
- Puissance : $\mathscr{P} = \frac{W}{t}$ (watts) ; $\mathscr{P} = F \times v$.
`,
  questions: [
    { type: 'MCQ', prompt: r`L'unité du travail est :`, choices: ['le watt', 'le joule', 'le newton'], answer: { index: 1 }, explanation: r`Symbole J.` },
    { type: 'MCQ', prompt: r`L'unité de la puissance est :`, choices: ['le watt', 'le joule', 'le newton'], answer: { index: 0 }, explanation: r`Symbole W.` },
    { type: 'NUMERIC', prompt: r`Une force de 20 N déplace son point d'application de 5 m dans sa direction et son sens. Travail (J) ?`, answer: { value: 100 }, explanation: r`$20 \times 5$.` },
    { type: 'NUMERIC', prompt: r`Travail (J) du poids d'un sac de 50 kg monté de 3 m ($g = 10$) ? (avec le signe)`, answer: { value: -1500 }, explanation: r`Montée : travail résistant $-mgh$.` },
    { type: 'NUMERIC', prompt: r`Travail (J) du poids d'une mangue de 0,2 kg qui tombe de 5 m ?`, answer: { value: 10 }, explanation: r`$0{,}2 \times 10 \times 5$, moteur.` },
    { type: 'NUMERIC', prompt: r`Un travail de 1 500 J est fourni en 10 s. Puissance (W) ?`, answer: { value: 150 }, explanation: r`$\frac{1\,500}{10}$.` },
    { type: 'MCQ', prompt: r`Une force perpendiculaire au déplacement :`, choices: ['travaille positivement', 'ne travaille pas', 'travaille négativement'], answer: { index: 1 }, explanation: r`$W = 0$.` },
    { type: 'MCQ', prompt: r`Le travail des frottements est généralement :`, choices: ['moteur', 'résistant', 'nul'], answer: { index: 1 }, explanation: r`Ils s'opposent au mouvement.` },
    { type: 'NUMERIC', prompt: r`Combien de watts dans 2,5 kW ?`, answer: { value: 2500 }, explanation: r`$\times 1\,000$.` },
    { type: 'NUMERIC', prompt: r`Une force de 200 N tire une charrette à 2 m/s. Puissance (W) ?`, answer: { value: 400 }, explanation: r`$\mathscr{P} = F \times v$.` },
    { type: 'NUMERIC', prompt: r`Un moteur de 300 W fonctionne 20 s. Travail fourni (J) ?`, answer: { value: 6000 }, explanation: r`$W = \mathscr{P} \times t$.` },
    { type: 'MCQ', prompt: r`Le même travail est fait en moins de temps. La puissance est :`, choices: ['plus grande', 'plus petite', 'la même'], answer: { index: 0 }, explanation: r`$\mathscr{P} = \frac{W}{t}$.` },
    { type: 'MCQ', prompt: r`Quand on soulève un objet, le travail de son poids est :`, choices: ['moteur', 'résistant'], answer: { index: 1 }, explanation: r`Le poids s'oppose à la montée.` },
    { type: 'NUMERIC', prompt: r`Temps (s) pour fournir 1 500 J avec une puissance de 300 W ?`, answer: { value: 5 }, explanation: r`$t = \frac{W}{\mathscr{P}}$.` },
    { type: 'OPEN', prompt: r`Pourquoi dit-on que la poulie électrique est plus puissante que le maçon ?`, answer: { model: 'Elle fournit le même travail en moins de temps.', keywords: ['même travail', 'moins de temps'] }, explanation: r`Définition de la puissance.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Travail et puissance',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.** $g = 10$ N/kg.`,
    advice: r`### 🎯 Conseils méthodologiques
1. Indique si le travail est **moteur** ou **résistant** (signe).
2. Convertis : masses en kg, temps en s, puissances en W.
3. Rédige : formule littérale → application numérique → résultat avec unité.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Une force de 50 N déplace son point d'application de 4 m dans son sens. Son travail est :`, type: 'MCQ', choices: ['200 J', '12,5 J', '54 J'], answer: { index: 0 }, points: 2, correction: r`$50 \times 4$.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Le travail du poids d'un objet qui descend est :`, type: 'MCQ', choices: ['moteur', 'résistant', 'nul'], answer: { index: 0 }, points: 2, correction: r`Le poids est dans le sens du déplacement.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. 1 kW vaut :`, type: 'MCQ', choices: ['100 W', '1 000 W', '10 W'], answer: { index: 1 }, points: 2, correction: r`Kilo = 1 000.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`Sur un chantier, un maçon monte un sac de ciment de 50 kg à une hauteur de 3 m en 10 s. Une poulie électrique réalise la même opération en 4 s.`, prompt: r`1. Calcule le poids du sac (en N).`, type: 'NUMERIC', answer: { value: 500 }, points: 2, resultPoints: 1, correction: r`$P = 50 \times 10 = 500$ N.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Calcule le travail du poids pendant la montée (en J, avec le signe).`, type: 'NUMERIC', answer: { value: -1500 }, points: 4, resultPoints: 2, correction: r`Montée : travail résistant *(1 pt)* ; $W = -P \times h = -500 \times 3 = -1\,500$ J *(3 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Le maçon fournit un travail de 1 500 J. Calcule sa puissance (en W).`, type: 'NUMERIC', answer: { value: 150 }, points: 3, resultPoints: 1.5, correction: r`$\mathscr{P} = \frac{1\,500}{10} = 150$ W.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Calcule la puissance de la poulie (en W).`, type: 'NUMERIC', answer: { value: 375 }, points: 3, resultPoints: 1.5, correction: r`$\frac{1\,500}{4} = 375$ W.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`5. Compare les deux puissances et conclus.`, type: 'OPEN', answer: { model: 'La poulie est 2,5 fois plus puissante.' }, points: 2, correction: r`$\frac{375}{150} = 2{,}5$ : la poulie est 2,5 fois plus puissante (même travail en moins de temps).` },
    ],
  },
};

export const energieMecanique: SeedChapter = {
  subject: 'PC',
  order: 5,
  title: 'Énergie mécanique',
  minutes: 60,
  officialRef: `${REF}, Physique — Mécanique`,
  objectives: [
    'Calculer l’énergie cinétique et l’énergie potentielle de pesanteur',
    'Calculer l’énergie mécanique',
    'Décrire les transformations d’énergie lors d’une chute',
  ],
  courseMd: r`
> **Situation.** Une mangue de 200 g se détache d'une branche à 5 m du sol. Avec quelle vitesse arrive-t-elle au sol ?

## 1. Énergie cinétique
Tout corps **en mouvement** possède une énergie cinétique :
> $$E_c = \dfrac{1}{2} m v^2$$
> $E_c$ en joules (J), $m$ en kg, $v$ en m/s.

Exemple : un motocycliste et sa moto (150 kg) à 10 m/s : $E_c = \frac{1}{2} \times 150 \times 100 = 7\,500$ J.
⚠️ Si la vitesse double, l'énergie cinétique est multipliée par **4**.

**Conversion :** $v$ (m/s) $= \dfrac{v \text{ (km/h)}}{3{,}6}$. Ex. 36 km/h = 10 m/s.

## 2. Énergie potentielle de pesanteur
Un corps situé à une **hauteur** $h$ au-dessus d'un niveau de référence (souvent le sol) possède une énergie potentielle de pesanteur :
> $$E_p = m g h$$

Mangue : $E_p = 0{,}2 \times 10 \times 5 = 10$ J.

## 3. Énergie mécanique
> $$E_m = E_c + E_p$$

> En l'absence de frottements, l'énergie mécanique se **conserve** : $E_c$ et $E_p$ se transforment l'une en l'autre.

**Chute de la mangue (frottements négligés) :**
- en haut : $E_c = 0$, $E_p = 10$ J, donc $E_m = 10$ J ;
- au sol : $E_p = 0$, donc $E_c = 10$ J ;
- $\frac{1}{2} \times 0{,}2 \times v^2 = 10$ donne $v^2 = 100$, soit $v = 10$ m/s (36 km/h).

Avec des frottements (air), une partie de l'énergie mécanique est transformée en **chaleur** : $E_m$ diminue.

## 4. Applications
- **Barrages** (Kossou, Taabo, Soubré) : l'eau stockée en hauteur a de l'énergie potentielle ; en tombant, elle acquiert de l'énergie cinétique qui fait tourner les turbines.
- **Sécurité routière** : à vitesse double, l'énergie à dissiper lors d'un choc est quadruplée.
`,
  summaryMd: r`
- $E_c = \frac{1}{2} m v^2$ (v en m/s ; km/h ÷ 3,6).
- $E_p = m g h$ (h par rapport à une référence).
- $E_m = E_c + E_p$ ; conservée sans frottements.
- Chute libre : $E_p$ ⟶ $E_c$. Avec frottements : une partie ⟶ chaleur.
`,
  questions: [
    { type: 'NUMERIC', prompt: r`$E_c$ (J) d'un corps de 2 kg à 3 m/s ?`, answer: { value: 9 }, explanation: r`$\frac{1}{2} \times 2 \times 9$.` },
    { type: 'NUMERIC', prompt: r`$E_p$ (J) d'une mangue de 0,2 kg à 5 m du sol ($g = 10$) ?`, answer: { value: 10 }, explanation: r`$0{,}2 \times 10 \times 5$.` },
    { type: 'NUMERIC', prompt: r`Convertis 36 km/h en m/s.`, answer: { value: 10 }, explanation: r`$\frac{36}{3{,}6}$.` },
    { type: 'MCQ', prompt: r`Si la vitesse double, l'énergie cinétique est multipliée par :`, choices: ['2', '4', '8'], answer: { index: 1 }, explanation: r`$v^2$.` },
    { type: 'MCQ', prompt: r`Un corps immobile au sol (référence) a :`, choices: [r`$E_c = 0$ et $E_p = 0$`, r`$E_c > 0$`, r`$E_p > 0$`], answer: { index: 0 }, explanation: r`Ni vitesse ni hauteur.` },
    { type: 'MCQ', prompt: r`L'énergie mécanique est :`, choices: [r`$E_c - E_p$`, r`$E_c + E_p$`, r`$E_c \times E_p$`], answer: { index: 1 }, explanation: r`Définition.` },
    { type: 'MCQ', prompt: r`Sans frottements, pendant une chute :`, choices: ['E_m augmente', 'E_m se conserve', 'E_m diminue'], answer: { index: 1 }, explanation: r`Conservation.` },
    { type: 'NUMERIC', prompt: r`Vitesse (m/s) au sol de la mangue tombée de 5 m (sans frottements) ?`, answer: { value: 10 }, explanation: r`$\frac{1}{2}mv^2 = mgh$.` },
    { type: 'MCQ', prompt: r`Avec frottements, l'énergie « perdue » se transforme surtout en :`, choices: ['chaleur', 'masse', 'lumière'], answer: { index: 0 }, explanation: r`Échauffement.` },
    { type: 'NUMERIC', prompt: r`$E_c$ (J) d'une moto + pilote de 150 kg à 10 m/s ?`, answer: { value: 7500 }, explanation: r`$\frac{1}{2} \times 150 \times 100$.` },
    { type: 'MCQ', prompt: r`L'eau d'un barrage en hauteur possède surtout de l'énergie :`, choices: ['cinétique', 'potentielle de pesanteur', 'chimique'], answer: { index: 1 }, explanation: r`Elle est en hauteur.` },
    { type: 'NUMERIC', prompt: r`Un objet a $E_c = 20$ J et $E_p = 30$ J. $E_m$ (J) ?`, answer: { value: 50 }, explanation: r`Somme.` },
    { type: 'NUMERIC', prompt: r`Hauteur (m) d'un objet de 2 kg ayant $E_p = 60$ J ($g = 10$) ?`, answer: { value: 3 }, explanation: r`$h = \frac{E_p}{mg}$.` },
    { type: 'MCQ', prompt: r`Au cours de la chute, l'énergie potentielle :`, choices: ['augmente', 'diminue', 'reste constante'], answer: { index: 1 }, explanation: r`La hauteur diminue.` },
    { type: 'OPEN', prompt: r`Explique pourquoi rouler deux fois plus vite est beaucoup plus dangereux.`, answer: { model: 'L’énergie cinétique est multipliée par 4 : le choc est quatre fois plus violent.', keywords: ['4', 'énergie cinétique'] }, explanation: r`$E_c$ proportionnelle à $v^2$.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Énergie mécanique',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.** $g = 10$ N/kg ; frottements négligés sauf mention contraire.`,
    advice: r`### 🎯 Conseils méthodologiques
1. Convertis les vitesses en **m/s** et les masses en **kg**.
2. Précise le **niveau de référence** pour $E_p$.
3. Utilise la conservation de $E_m$ pour trouver une vitesse.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. L'énergie cinétique d'un corps de 4 kg à 2 m/s vaut :`, type: 'MCQ', choices: ['4 J', '8 J', '16 J'], answer: { index: 1 }, points: 2, correction: r`$\frac{1}{2} \times 4 \times 4 = 8$ J.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. 72 km/h correspondent à :`, type: 'MCQ', choices: ['20 m/s', '72 m/s', '259 m/s'], answer: { index: 0 }, points: 2, correction: r`$\frac{72}{3{,}6} = 20$ m/s.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Sans frottements, l'énergie mécanique d'un corps en chute :`, type: 'MCQ', choices: ['se conserve', 'augmente', 'diminue'], answer: { index: 0 }, points: 2, correction: r`Conservation.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`Une noix de coco de masse 1,25 kg se détache d'un cocotier à 7,2 m au-dessus du sol (niveau de référence).`, prompt: r`1. Calcule son énergie potentielle au départ (en J).`, type: 'NUMERIC', answer: { value: 90 }, points: 3, resultPoints: 1.5, correction: r`$E_p = 1{,}25 \times 10 \times 7{,}2 = 90$ J.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Quelle est son énergie mécanique au départ (en J) ? Justifie.`, type: 'NUMERIC', answer: { value: 90 }, points: 3, resultPoints: 1.5, correction: r`Vitesse nulle donc $E_c = 0$ ; $E_m = 90$ J.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Quelle est son énergie cinétique juste avant de toucher le sol (en J) ?`, type: 'NUMERIC', answer: { value: 90 }, points: 3, resultPoints: 1.5, correction: r`$E_m$ conservée et $E_p = 0$ au sol : $E_c = 90$ J.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Calcule sa vitesse à l'arrivée au sol (en m/s).`, type: 'NUMERIC', answer: { value: 12 }, points: 3, resultPoints: 1.5, correction: r`$\frac{1}{2} \times 1{,}25 \times v^2 = 90 \iff v^2 = 144 \iff v = 12$ m/s.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`5. En réalité, la vitesse mesurée est un peu plus faible. Explique pourquoi.`, type: 'OPEN', answer: { model: 'Les frottements de l’air transforment une partie de l’énergie en chaleur.' }, points: 2, correction: r`Les frottements de l'air transforment une partie de l'énergie mécanique en chaleur : $E_m$ diminue.` },
    ],
  },
};
