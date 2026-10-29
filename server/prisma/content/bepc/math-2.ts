import { SeedChapter } from '../types';

const r = String.raw;
const REF = 'Programme éducatif Mathématiques 3e (DPFC) — progression 2026-2027';

const FIG_INSCRIT = String.raw`<figure class="figure">
<svg viewBox="0 0 240 220" width="240" height="220" role="img" aria-label="Cercle de centre O ; A, B, M points du cercle ; angle inscrit AMB et angle au centre AOB interceptant l'arc AB">
<circle cx="120" cy="115" r="90" fill="none" stroke="currentColor" stroke-width="2"/>
<g stroke="currentColor" stroke-width="2" fill="none">
<line x1="48" y1="169" x2="192" y2="169"/>
</g>
<g stroke="#FF6B00" stroke-width="2.5" fill="none">
<line x1="120" y1="25" x2="48" y2="169"/><line x1="120" y1="25" x2="192" y2="169"/>
</g>
<g stroke="#00A651" stroke-width="2.5" fill="none" stroke-dasharray="5 4">
<line x1="120" y1="115" x2="48" y2="169"/><line x1="120" y1="115" x2="192" y2="169"/>
</g>
<g fill="currentColor" font-size="15" font-family="sans-serif">
<text x="114" y="18">M</text><text x="30" y="182">A</text><text x="196" y="182">B</text><text x="124" y="110">O</text>
</g>
</svg>
<figcaption>En orange l'angle inscrit $\widehat{AMB}$, en vert l'angle au centre $\widehat{AOB}$ : ils interceptent le même arc $\overset\frown{AB}$.</figcaption>
</figure>`;

export const calculNumerique: SeedChapter = {
  subject: 'MATH',
  order: 5,
  title: 'Calcul numérique',
  minutes: 660,
  officialRef: `${REF}, leçon 5`,
  objectives: [
    'Noter, lire et représenter un intervalle ; déterminer son amplitude et son centre',
    'Déterminer l’intersection et la réunion de deux intervalles',
    'Comparer deux nombres et utiliser les propriétés des inégalités',
    'Encadrer une somme, une différence, un produit, un quotient ; arrondir',
  ],
  courseMd: r`
> **Situation.** Un commerçant cherche à Angré un terrain d'aire comprise entre 230 m² et 300 m². Le propriétaire sait seulement que la longueur est comprise entre 17 m et 18 m et la largeur entre 14 m et 15 m. Le terrain convient-il ?
> $17 \times 14 < L \times \ell < 18 \times 15$, soit $238 < \text{Aire} < 270$ : **oui**, l'aire est forcément entre 230 et 300 m².

## 1. Intervalles
| Inégalité | Intervalle | Représentation |
|---|---|---|
| $a \leq x \leq b$ | $[a\,;\,b]$ (fermé) | crochets tournés vers l'intérieur |
| $a < x < b$ | $]a\,;\,b[$ (ouvert) | crochets tournés vers l'extérieur |
| $a \leq x < b$ | $[a\,;\,b[$ | semi-ouvert |
| $x \geq a$ | $[a\,;\,+\infty[$ | |
| $x < b$ | $]-\infty\,;\,b[$ | $\infty$ : toujours crochet ouvert |

- **Amplitude** de $[a\,;\,b]$ : $b - a$. **Centre** : $\dfrac{a + b}{2}$.
- Exemple : $I = [-2\,;\,5[$ a pour amplitude 7 et pour centre 1,5.
- **Intersection** $I \cap J$ : nombres qui sont dans $I$ **et** dans $J$. **Réunion** $I \cup J$ : nombres qui sont dans $I$ **ou** dans $J$.
- Avec $I = [-2\,;\,5[$ et $J = ]1\,;\,7]$ : $I \cap J = ]1\,;\,5[$ et $I \cup J = [-2\,;\,7]$. On les lit sur une droite graduée.

## 2. Inégalités et opérations
> - Ajouter (ou soustraire) un même nombre aux deux membres **conserve** l'ordre.
> - Multiplier (ou diviser) par un nombre **strictement positif conserve** l'ordre.
> - Multiplier (ou diviser) par un nombre **strictement négatif change** l'ordre.

Exemple : $-3x < 6 \iff x > -2$.

## 3. Comparer deux nombres
- **Signe de la différence :** $a < b \iff a - b < 0$.
- **Nombres positifs :** $a$ et $b$ positifs sont rangés comme leurs carrés. Comparer $3\sqrt{2}$ et $2\sqrt{5}$ : $(3\sqrt{2})^2 = 18$ et $(2\sqrt{5})^2 = 20$, donc $3\sqrt{2} < 2\sqrt{5}$.
- **Inverses :** si $0 < a < b$ alors $\dfrac{1}{a} > \dfrac{1}{b}$.

## 4. Encadrer
Si $a < x < b$ et $c < y < d$ :
- **opposé :** $-b < -x < -a$ ;
- **somme :** $a + c < x + y < b + d$ ;
- **différence :** $a - d < x - y < b - c$ (on ajoute l'encadrement de $-y$) ;
- **produit** (nombres positifs) : $ac < xy < bd$ ;
- **inverse** ($a > 0$) : $\dfrac{1}{b} < \dfrac{1}{x} < \dfrac{1}{a}$ ;
- **quotient** (positifs) : $\dfrac{a}{d} < \dfrac{x}{y} < \dfrac{b}{c}$.

**Encadrer un réel.** Par deux entiers consécutifs : $2 < \sqrt{5} < 3$. Par deux décimaux d'ordre 2 : $2{,}23 < \sqrt{5} < 2{,}24$.

**Exemple :** $2{,}23 < \sqrt{5} < 2{,}24$ donne $5{,}23 < 3 + \sqrt{5} < 5{,}24$ et $4{,}46 < 2\sqrt{5} < 4{,}48$.

## 5. Arrondi
L'**arrondi d'ordre 2** de $\sqrt{5} \approx 2{,}2360$ est $2{,}24$ (on regarde le 3ᵉ chiffre après la virgule : 6 ≥ 5, on arrondit au-dessus). L'arrondi d'ordre 1 est $2{,}2$.
`,
  summaryMd: r`
- $[a\,;\,b]$ : $a \leq x \leq b$ ; $]a\,;\,b[$ : $a < x < b$ ; l'infini est toujours « ouvert ».
- Amplitude $b - a$ ; centre $\frac{a+b}{2}$.
- $\cap$ = **et** ; $\cup$ = **ou** (lire sur une droite graduée).
- × ou ÷ par un **négatif** ⟹ on **change le sens** de l'inégalité.
- Positifs : rangés comme leurs carrés ; inverses : ordre inversé.
- Différence : $a - d < x - y < b - c$ (on **croise** les bornes).
`,
  questions: [
    { type: 'MCQ', prompt: r`L'ensemble des réels $x$ tels que $-1 < x \leq 4$ est :`, choices: [r`$[-1\,;\,4]$`, r`$]-1\,;\,4]$`, r`$]-1\,;\,4[$`], answer: { index: 1 }, explanation: r`$-1$ exclu, $4$ inclus.` },
    { type: 'NUMERIC', prompt: r`Amplitude de l'intervalle $[-2\,;\,5]$ ?`, answer: { value: 7 }, explanation: r`$5 - (-2) = 7$.` },
    { type: 'NUMERIC', prompt: r`Centre de l'intervalle $[-2\,;\,5]$ ?`, answer: { value: 1.5 }, explanation: r`$\frac{-2 + 5}{2} = 1{,}5$.` },
    { type: 'MCQ', prompt: r`$[-2\,;\,5[ \;\cap\; ]1\,;\,7] = $`, choices: [r`$]1\,;\,5[$`, r`$[-2\,;\,7]$`, r`$[1\,;\,5]$`], answer: { index: 0 }, explanation: r`Nombres à la fois dans les deux intervalles.` },
    { type: 'MCQ', prompt: r`$[-2\,;\,5[ \;\cup\; ]1\,;\,7] = $`, choices: [r`$]1\,;\,5[$`, r`$[-2\,;\,7]$`, r`$[-2\,;\,7[$`], answer: { index: 1 }, explanation: r`Nombres dans l'un ou l'autre.` },
    { type: 'MCQ', prompt: r`$-3x < 6$ équivaut à :`, choices: [r`$x < -2$`, r`$x > -2$`, r`$x > 2$`], answer: { index: 1 }, explanation: r`On divise par $-3$ : le sens change.` },
    { type: 'MCQ', prompt: r`Compare $3\sqrt{2}$ et $2\sqrt{5}$ :`, choices: [r`$3\sqrt{2} < 2\sqrt{5}$`, r`$3\sqrt{2} > 2\sqrt{5}$`, 'ils sont égaux'], answer: { index: 0 }, explanation: r`Carrés : 18 et 20.` },
    { type: 'MCQ', prompt: r`Si $0 < a < b$, alors :`, choices: [r`$\frac{1}{a} < \frac{1}{b}$`, r`$\frac{1}{a} > \frac{1}{b}$`, r`$\frac{1}{a} = \frac{1}{b}$`], answer: { index: 1 }, explanation: r`Le passage à l'inverse change l'ordre pour des positifs.` },
    { type: 'MCQ', prompt: r`Si $2 < x < 3$, alors $-x$ vérifie :`, choices: [r`$-2 < -x < -3$`, r`$-3 < -x < -2$`, r`$2 < -x < 3$`], answer: { index: 1 }, explanation: r`On multiplie par $-1$ et on remet dans l'ordre.` },
    { type: 'MCQ', prompt: r`Encadrement de $\sqrt{5}$ par deux entiers consécutifs :`, choices: [r`$1 < \sqrt{5} < 2$`, r`$2 < \sqrt{5} < 3$`, r`$4 < \sqrt{5} < 5$`], answer: { index: 1 }, explanation: r`$4 < 5 < 9$.` },
    { type: 'NUMERIC', prompt: r`Arrondi d'ordre 2 de $\sqrt{5}$ ?`, answer: { value: 2.24 }, explanation: r`$\sqrt{5} \approx 2{,}236$.` },
    { type: 'MCQ', prompt: r`Si $1 < x < 2$ et $3 < y < 5$, alors $x - y$ vérifie :`, choices: [r`$-2 < x - y < -3$`, r`$-4 < x - y < -1$`, r`$-2 < x - y < -1$`], answer: { index: 1 }, explanation: r`$a - d < x - y < b - c$ : $1 - 5 < x - y < 2 - 3$.` },
    { type: 'NUMERIC', prompt: r`$17 < L < 18$ et $14 < \ell < 15$. Donne la borne inférieure de l'encadrement de $L \times \ell$.`, answer: { value: 238 }, explanation: r`$17 \times 14 = 238$.` },
    { type: 'MCQ', prompt: r`$x \geq 3$ s'écrit :`, choices: [r`$[3\,;\,+\infty]$`, r`$[3\,;\,+\infty[$`, r`$]3\,;\,+\infty[$`], answer: { index: 1 }, explanation: r`3 inclus ; l'infini toujours ouvert.` },
    { type: 'OPEN', prompt: r`Sachant que $2{,}23 < \sqrt{5} < 2{,}24$, encadre $3 + \sqrt{5}$.`, answer: { model: r`$5{,}23 < 3 + \sqrt{5} < 5{,}24$`, keywords: ['5,23', '5,24'] }, explanation: r`On ajoute 3 à chaque membre.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Calcul numérique',
    durationMin: 120,
    blocksNext: false,
    instructions: r`**Durée : 2 heures · Note sur 20.** Justifie chaque encadrement.`,
    advice: r`### 🎯 Conseils méthodologiques
1. Fais toujours un **dessin sur une droite graduée** pour l'intersection et la réunion.
2. Pour une **différence**, encadre d'abord l'opposé, puis additionne.
3. Pour un **produit** ou un **quotient**, vérifie que les nombres sont **positifs**.
4. Relis le sens des inégalités après une multiplication par un négatif.`,
    items: [
      { section: 'Exercice 1 (4 pts)', prompt: r`1. $x < 5$ s'écrit :`, type: 'MCQ', choices: [r`$]-\infty\,;\,5[$`, r`$]-\infty\,;\,5]$`, r`$]5\,;\,+\infty[$`], answer: { index: 0 }, points: 1, correction: r`5 exclu.` },
      { section: 'Exercice 1 (4 pts)', prompt: r`2. L'amplitude de $[1{,}5\,;\,4]$ est :`, type: 'MCQ', choices: ['2,5', '5,5', '2,75'], answer: { index: 0 }, points: 1, correction: r`$4 - 1{,}5 = 2{,}5$.` },
      { section: 'Exercice 1 (4 pts)', prompt: r`3. $-2x \geq 8$ équivaut à :`, type: 'MCQ', choices: [r`$x \geq -4$`, r`$x \leq -4$`, r`$x \leq 4$`], answer: { index: 1 }, points: 1, correction: r`Division par $-2$ : le sens change.` },
      { section: 'Exercice 1 (4 pts)', prompt: r`4. Si $0 < a < b$ :`, type: 'MCQ', choices: [r`$a^2 < b^2$`, r`$a^2 > b^2$`], answer: { index: 0 }, points: 1, correction: r`Pour des positifs, les carrés sont rangés dans le même ordre.` },
      { section: 'Exercice 2 (6 pts)', sectionIntro: r`On donne $I = [-3\,;\,4[$ et $J = ]0\,;\,6]$.`, prompt: r`1. Représente $I$ et $J$ sur une droite graduée, puis détermine $I \cap J$.`, type: 'OPEN', answer: { model: r`$I \cap J = ]0\,;\,4[$` }, points: 2, correction: r`Représentation correcte *(1 pt)* ; $I \cap J = ]0\,;\,4[$ *(1 pt)*.` },
      { section: 'Exercice 2 (6 pts)', prompt: r`2. Détermine $I \cup J$.`, type: 'OPEN', answer: { model: r`$I \cup J = [-3\,;\,6]$` }, points: 1.5, correction: r`$I \cup J = [-3\,;\,6]$.` },
      { section: 'Exercice 2 (6 pts)', prompt: r`3. Calcule le centre de $I$.`, type: 'NUMERIC', answer: { value: 0.5 }, points: 1.5, resultPoints: 1.5, correction: r`$\frac{-3 + 4}{2} = 0{,}5$.` },
      { section: 'Exercice 2 (6 pts)', prompt: r`4. Calcule l'amplitude de $J$.`, type: 'NUMERIC', answer: { value: 6 }, points: 1, resultPoints: 1, correction: r`$6 - 0 = 6$.` },
      { section: 'Exercice 3 (5 pts)', sectionIntro: r`On sait que $2{,}23 < \sqrt{5} < 2{,}24$ et $1{,}41 < \sqrt{2} < 1{,}42$.`, prompt: r`1. Encadre $\sqrt{5} + \sqrt{2}$.`, type: 'OPEN', answer: { model: r`$3{,}64 < \sqrt{5} + \sqrt{2} < 3{,}66$` }, points: 1.5, correction: r`On additionne membre à membre : $3{,}64 < \sqrt{5} + \sqrt{2} < 3{,}66$.` },
      { section: 'Exercice 3 (5 pts)', prompt: r`2. Encadre $\sqrt{5} - \sqrt{2}$.`, type: 'OPEN', answer: { model: r`$0{,}81 < \sqrt{5} - \sqrt{2} < 0{,}83$` }, points: 2, correction: r`$-1{,}42 < -\sqrt{2} < -1{,}41$ *(1 pt)*, donc $0{,}81 < \sqrt{5} - \sqrt{2} < 0{,}83$ *(1 pt)*.` },
      { section: 'Exercice 3 (5 pts)', prompt: r`3. Encadre $\sqrt{5} \times \sqrt{2}$ (borne inférieure au centième ; donne la borne inférieure).`, type: 'NUMERIC', answer: { value: 3.14, tolerance: 0.006 }, points: 1.5, resultPoints: 1, correction: r`Nombres positifs : $2{,}23 \times 1{,}41 = 3{,}1443 < \sqrt{10} < 2{,}24 \times 1{,}42 = 3{,}1808$. Borne inférieure ≈ 3,14.` },
      { section: 'Problème (5 pts)', sectionIntro: r`Un propriétaire d'Angré sait que la longueur de son terrain est comprise entre 17 m et 18 m et la largeur entre 14 m et 15 m. Un commerçant cherche un terrain d'aire comprise entre 230 m² et 300 m².`, prompt: r`1. Encadre l'aire du terrain (donne la borne supérieure, en m²).`, type: 'NUMERIC', answer: { value: 270 }, points: 2, resultPoints: 1, correction: r`Nombres positifs : $17 \times 14 < A < 18 \times 15$, soit $238 < A < 270$.` },
      { section: 'Problème (5 pts)', prompt: r`2. Le terrain convient-il au commerçant ? Justifie.`, type: 'OPEN', answer: { model: 'Oui : 230 < 238 < A < 270 < 300.' }, points: 1.5, correction: r`$230 < 238 < A < 270 < 300$ : l'aire est dans l'intervalle voulu, le terrain convient.` },
      { section: 'Problème (5 pts)', prompt: r`3. Encadre le périmètre du terrain (donne la borne inférieure, en m).`, type: 'NUMERIC', answer: { value: 62 }, points: 1.5, resultPoints: 1, correction: r`$2(17 + 14) < P < 2(18 + 15)$, soit $62 < P < 66$.` },
    ],
  },
};

export const anglesInscrits: SeedChapter = {
  subject: 'MATH',
  order: 6,
  title: 'Angles inscrits',
  minutes: 300,
  officialRef: `${REF}, leçon 6`,
  objectives: [
    'Identifier un angle inscrit et l’arc qu’il intercepte',
    'Reconnaître un angle inscrit et l’angle au centre associé',
    'Utiliser les propriétés des angles inscrits pour calculer et justifier',
  ],
  courseMd: r`
> **Situation.** Au collège municipal de Man, une élève trace un cercle de centre O et place trois points dessus. Un camarade affirme que deux angles de la figure ont la même mesure. Comment le justifier ?

## 1. Définitions
Soit un cercle $(\mathscr{C})$ de centre O.
- Un **angle au centre** a pour sommet le centre O : $\widehat{AOB}$.
- Un **angle inscrit** a son sommet **sur le cercle** et ses côtés coupent le cercle : $\widehat{AMB}$ avec A, B, M sur $(\mathscr{C})$.
- L'angle inscrit $\widehat{AMB}$ **intercepte** l'arc $\overset\frown{AB}$ qui ne contient pas M.
- L'angle au centre **associé** à $\widehat{AMB}$ est $\widehat{AOB}$ : il intercepte le même arc.

${FIG_INSCRIT}

## 2. Propriétés
> **Propriété 1.** La mesure d'un angle inscrit est égale à la **moitié** de celle de l'angle au centre associé : $\widehat{AMB} = \dfrac{1}{2}\widehat{AOB}$.

> **Propriété 2.** Deux angles inscrits qui interceptent le **même arc** ont la **même mesure**.

> **Cas particulier.** Un angle inscrit qui intercepte un demi-cercle est droit : si [AB] est un diamètre, $\widehat{AMB} = 90°$.

## 3. Exemples
1. $\widehat{AOB} = 80°$ : tout angle inscrit $\widehat{AMB}$ interceptant $\overset\frown{AB}$ mesure $40°$.
2. M et N sont sur le même arc du cercle par rapport à [AB] : $\widehat{AMB} = \widehat{ANB}$.
3. $\widehat{ACB} = 35°$ : l'angle au centre associé mesure $\widehat{AOB} = 70°$.

## 4. Rédaction type
> *Les angles $\widehat{AMB}$ et $\widehat{ANB}$ sont des angles inscrits dans le cercle $(\mathscr{C})$ qui interceptent le même arc $\overset\frown{AB}$. Ils ont donc la même mesure.*
`,
  summaryMd: r`
- **Angle inscrit** : sommet sur le cercle. **Angle au centre** : sommet au centre.
- Angle inscrit $= \frac{1}{2}$ angle au centre associé (même arc).
- Deux angles inscrits interceptant le même arc sont **égaux**.
- Diamètre ⟹ angle inscrit **droit**.
- ❌ Piège : vérifier que les deux angles interceptent bien **le même arc**.
`,
  questions: [
    { type: 'MCQ', prompt: r`Un angle inscrit dans un cercle a son sommet :`, choices: ['au centre du cercle', 'sur le cercle', 'à l’extérieur du cercle'], answer: { index: 1 }, explanation: r`Par définition.` },
    { type: 'NUMERIC', prompt: r`$\widehat{AOB} = 80°$ (angle au centre). Mesure de l'angle inscrit $\widehat{AMB}$ associé (en degrés) ?`, answer: { value: 40 }, explanation: r`La moitié de l'angle au centre.` },
    { type: 'NUMERIC', prompt: r`$\widehat{ACB} = 35°$ (angle inscrit). Mesure de l'angle au centre associé ?`, answer: { value: 70 }, explanation: r`Le double de l'angle inscrit.` },
    { type: 'MCQ', prompt: r`Deux angles inscrits qui interceptent le même arc :`, choices: ['sont supplémentaires', 'ont la même mesure', 'sont complémentaires'], answer: { index: 1 }, explanation: r`Propriété du cours.` },
    { type: 'NUMERIC', prompt: r`[AB] est un diamètre et M un point du cercle (M ≠ A, B). Mesure de $\widehat{AMB}$ ?`, answer: { value: 90 }, explanation: r`Il intercepte un demi-cercle.` },
    { type: 'MCQ', prompt: r`L'angle au centre associé à l'angle inscrit $\widehat{AMB}$ est :`, choices: [r`$\widehat{AOM}$`, r`$\widehat{AOB}$`, r`$\widehat{MOB}$`], answer: { index: 1 }, explanation: r`Il intercepte le même arc $\overset\frown{AB}$.` },
    { type: 'NUMERIC', prompt: r`$\widehat{AMB} = 52°$ et N est sur le même arc que M. Mesure de $\widehat{ANB}$ ?`, answer: { value: 52 }, explanation: r`Même arc intercepté.` },
    { type: 'NUMERIC', prompt: r`Un angle au centre mesure 150°. Mesure d'un angle inscrit associé ?`, answer: { value: 75 }, explanation: r`$150 \div 2$.` },
    { type: 'MCQ', prompt: r`L'arc intercepté par l'angle inscrit $\widehat{AMB}$ est :`, choices: [r`l'arc $\overset\frown{AB}$ qui ne contient pas M`, r`l'arc $\overset\frown{AB}$ qui contient M`, 'le cercle entier'], answer: { index: 0 }, explanation: r`Il se trouve « en face » du sommet.` },
    { type: 'MCQ', prompt: r`Un triangle ABC est inscrit dans un cercle de diamètre [BC]. Il est :`, choices: ['rectangle en A', 'isocèle en A', 'équilatéral'], answer: { index: 0 }, explanation: r`$\widehat{BAC}$ intercepte un demi-cercle.` },
    { type: 'NUMERIC', prompt: r`Triangle OAB isocèle en O avec $\widehat{OAB} = 30°$. Calcule $\widehat{AOB}$.`, answer: { value: 120 }, explanation: r`$180 - 2 \times 30 = 120$.` },
    { type: 'NUMERIC', prompt: r`Avec la question précédente, M est un point du grand arc $\overset\frown{AB}$. Mesure de $\widehat{AMB}$ ?`, answer: { value: 60 }, explanation: r`$120 \div 2$.` },
    { type: 'MCQ', prompt: r`Un angle au centre est toujours :`, choices: ['la moitié de l’angle inscrit associé', 'le double de l’angle inscrit associé', 'égal à l’angle inscrit associé'], answer: { index: 1 }, explanation: r`Propriété 1 « à l'envers ».` },
    { type: 'OPEN', prompt: r`Rédige la justification de l'égalité $\widehat{AMB} = \widehat{ANB}$.`, answer: { model: r`Les angles inscrits $\widehat{AMB}$ et $\widehat{ANB}$ interceptent le même arc $\overset\frown{AB}$, donc ils ont la même mesure.`, keywords: ['angles inscrits', 'même arc'] }, explanation: r`Il faut citer « angles inscrits » et « même arc ».` },
    { type: 'NUMERIC', prompt: r`Dans un cercle, $\widehat{AOB} = 100°$. Mesure d'un angle inscrit interceptant l'arc $\overset\frown{AB}$ correspondant ?`, answer: { value: 50 }, explanation: r`$100 \div 2$.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Angles inscrits',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.** Justifie chaque mesure en citant la propriété utilisée.`,
    advice: r`### 🎯 Conseils méthodologiques
1. Repère l'**arc intercepté** par chaque angle (colorie-le).
2. Cite toujours la propriété : « angle inscrit / angle au centre associé » ou « interceptent le même arc ».
3. Pense au **diamètre** : il donne un angle droit.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Un angle au centre mesure 64°. L'angle inscrit associé mesure :`, type: 'MCQ', choices: ['32°', '64°', '128°'], answer: { index: 0 }, points: 2, correction: r`La moitié.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Si [AB] est un diamètre et M un point du cercle, $\widehat{AMB}$ mesure :`, type: 'MCQ', choices: ['45°', '90°', '180°'], answer: { index: 1 }, points: 2, correction: r`Demi-cercle intercepté.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Deux angles inscrits interceptant le même arc sont :`, type: 'MCQ', choices: ['égaux', 'complémentaires', 'supplémentaires'], answer: { index: 0 }, points: 2, correction: r`Propriété du cours.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`$(\mathscr{C})$ est un cercle de centre O. A, B, C et D sont des points de $(\mathscr{C})$ ; C et D sont sur le même arc par rapport à [AB]. On donne $\widehat{OAB} = 25°$.`, prompt: r`1. Justifie que le triangle OAB est isocèle en O.`, type: 'OPEN', answer: { model: 'OA = OB = rayon' }, points: 2, correction: r`OA et OB sont des rayons de $(\mathscr{C})$, donc OA = OB.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Calcule $\widehat{AOB}$ (en degrés).`, type: 'NUMERIC', answer: { value: 130 }, points: 3, resultPoints: 1, correction: r`$\widehat{OBA} = \widehat{OAB} = 25°$ *(1 pt)* ; $\widehat{AOB} = 180 - 50 = 130°$ *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Déduis-en $\widehat{ACB}$ (en degrés).`, type: 'NUMERIC', answer: { value: 65 }, points: 3, resultPoints: 1, correction: r`$\widehat{ACB}$ est un angle inscrit qui intercepte le même arc que l'angle au centre $\widehat{AOB}$ *(1 pt)* : $\widehat{ACB} = \frac{130}{2} = 65°$ *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Quelle est la mesure de $\widehat{ADB}$ ? Justifie.`, type: 'OPEN', answer: { model: '65°, même arc que ACB' }, points: 3, correction: r`$\widehat{ACB}$ et $\widehat{ADB}$ sont des angles inscrits qui interceptent le même arc $\overset\frown{AB}$ *(2 pts)* : $\widehat{ADB} = 65°$ *(1 pt)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`5. E est le point de $(\mathscr{C})$ diamétralement opposé à A. Quelle est la mesure de $\widehat{ABE}$ ? Justifie.`, type: 'OPEN', answer: { model: '90°, [AE] diamètre' }, points: 3, correction: r`[AE] est un diamètre et B un point du cercle : $\widehat{ABE}$ intercepte un demi-cercle, donc $\widehat{ABE} = 90°$.` },
    ],
  },
};

export const vecteurs: SeedChapter = {
  subject: 'MATH',
  order: 7,
  title: 'Vecteurs',
  minutes: 420,
  officialRef: `${REF}, leçon 7`,
  objectives: [
    'Représenter des vecteurs égaux, une somme et une différence de vecteurs',
    'Construire le point M tel que AM = k AB',
    'Utiliser la colinéarité pour démontrer un alignement ou un parallélisme',
  ],
  courseMd: r`
> **Situation.** Au lycée moderne de Grand-Bassam, deux élèves jouent : l'un décrit, à l'aide des seuls vecteurs $\overrightarrow{AB}$ et $\overrightarrow{AC}$, la position de points P et Q ; l'autre doit les placer sur sa figure.

## 1. Rappels
Un vecteur $\overrightarrow{AB}$ est défini par une **direction** (celle de la droite (AB)), un **sens** (de A vers B) et une **longueur** AB.
- $\overrightarrow{AB} = \overrightarrow{CD}$ ⟺ ABDC est un **parallélogramme** (éventuellement aplati).
- Le **vecteur nul** $\vec{0} = \overrightarrow{AA}$. L'**opposé** de $\overrightarrow{AB}$ est $\overrightarrow{BA} = -\overrightarrow{AB}$.

## 2. Somme et différence
> **Relation de Chasles.** $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$.

> **Règle du parallélogramme.** $\overrightarrow{AB} + \overrightarrow{AC} = \overrightarrow{AD}$ où ABDC est un parallélogramme.

- **Différence :** $\vec{u} - \vec{v} = \vec{u} + (-\vec{v})$. Par exemple $\overrightarrow{AB} - \overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{CA} = \overrightarrow{CB}$.
- **Réduire une somme :** $\overrightarrow{MA} + \overrightarrow{AB} + \overrightarrow{BN} = \overrightarrow{MN}$.

## 3. Produit d'un vecteur par un réel
Soit $k$ un réel non nul. Le vecteur $k\vec{u}$ a la même direction que $\vec{u}$ ; il a le même sens si $k > 0$ et le sens contraire si $k < 0$ ; sa longueur est $|k|$ fois celle de $\vec{u}$.

> **Propriétés.** $k(\vec{u} + \vec{v}) = k\vec{u} + k\vec{v}$ ; $(k + k')\vec{u} = k\vec{u} + k'\vec{u}$ ; $k(k'\vec{u}) = (kk')\vec{u}$.

**Construire M tel que $\overrightarrow{AM} = \frac{3}{2}\overrightarrow{AB}$ :** M est sur la demi-droite [AB), à une distance $1{,}5 \times AB$ de A.

## 4. Colinéarité, alignement, parallélisme
> **Définition.** Deux vecteurs non nuls $\vec{u}$ et $\vec{v}$ sont **colinéaires** s'il existe un réel $k$ tel que $\vec{v} = k\vec{u}$ (ils ont la même direction).

> - A, B, C sont **alignés** ⟺ $\overrightarrow{AB}$ et $\overrightarrow{AC}$ sont colinéaires.
> - (AB) // (CD) ⟺ $\overrightarrow{AB}$ et $\overrightarrow{CD}$ sont colinéaires.

- Un **vecteur directeur** de la droite (AB) est $\overrightarrow{AB}$ (ou tout vecteur colinéaire non nul).
- Deux vecteurs sont **orthogonaux** si leurs directions sont perpendiculaires.

**Méthode.** On exprime les deux vecteurs en fonction des mêmes vecteurs de référence, puis on cherche $k$.
Exemple : si $\overrightarrow{AD} = 3\overrightarrow{AB}$, alors $\overrightarrow{AD}$ et $\overrightarrow{AB}$ sont colinéaires et A, B, D sont alignés.

## 5. Traduire
- « I est le milieu de [AB] » ⟺ $\overrightarrow{AI} = \overrightarrow{IB}$ ⟺ $\overrightarrow{AI} = \frac{1}{2}\overrightarrow{AB}$.
- « ABCD est un parallélogramme » ⟺ $\overrightarrow{AB} = \overrightarrow{DC}$.
`,
  summaryMd: r`
- $\overrightarrow{AB} = \overrightarrow{CD}$ ⟺ ABDC parallélogramme.
- **Chasles** : $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$.
- $\overrightarrow{AB} - \overrightarrow{AC} = \overrightarrow{CB}$.
- $k\vec{u}$ : même direction ; même sens si $k > 0$ ; longueur $|k| \times \|\vec{u}\|$.
- Colinéaires ⟺ $\vec{v} = k\vec{u}$.
- **Alignement** : $\overrightarrow{AB}$ et $\overrightarrow{AC}$ colinéaires. **Parallélisme** : $\overrightarrow{AB}$ et $\overrightarrow{CD}$ colinéaires.
- Milieu : $\overrightarrow{AI} = \frac{1}{2}\overrightarrow{AB}$.
`,
  questions: [
    { type: 'MCQ', prompt: r`$\overrightarrow{AB} + \overrightarrow{BC} = $`, choices: [r`$\overrightarrow{AC}$`, r`$\overrightarrow{CA}$`, r`$\overrightarrow{BB}$`], answer: { index: 0 }, explanation: r`Relation de Chasles.` },
    { type: 'MCQ', prompt: r`$\overrightarrow{AB} = \overrightarrow{DC}$ signifie que :`, choices: ['ABCD est un parallélogramme', 'ABDC est un parallélogramme', 'A, B, C sont alignés'], answer: { index: 0 }, explanation: r`$\overrightarrow{AB} = \overrightarrow{DC}$ ⟺ ABCD parallélogramme.` },
    { type: 'MCQ', prompt: r`L'opposé de $\overrightarrow{AB}$ est :`, choices: [r`$\overrightarrow{BA}$`, r`$\overrightarrow{AA}$`, r`$2\overrightarrow{AB}$`], answer: { index: 0 }, explanation: r`Même direction, même longueur, sens contraire.` },
    { type: 'MCQ', prompt: r`$\overrightarrow{AB} - \overrightarrow{AC} = $`, choices: [r`$\overrightarrow{BC}$`, r`$\overrightarrow{CB}$`, r`$\overrightarrow{AC}$`], answer: { index: 1 }, explanation: r`$\overrightarrow{AB} + \overrightarrow{CA} = \overrightarrow{CA} + \overrightarrow{AB} = \overrightarrow{CB}$.` },
    { type: 'MCQ', prompt: r`$\overrightarrow{MA} + \overrightarrow{AB} + \overrightarrow{BN} = $`, choices: [r`$\overrightarrow{MN}$`, r`$\overrightarrow{NM}$`, r`$\overrightarrow{AB}$`], answer: { index: 0 }, explanation: r`Chasles deux fois.` },
    { type: 'MCQ', prompt: r`Si $\overrightarrow{AD} = 3\overrightarrow{AB}$, alors :`, choices: ['A, B, D sont alignés', '(AB) ⊥ (AD)', 'ABD est rectangle'], answer: { index: 0 }, explanation: r`Vecteurs colinéaires de même origine.` },
    { type: 'MCQ', prompt: r`I est le milieu de [AB] équivaut à :`, choices: [r`$\overrightarrow{AI} = \overrightarrow{IB}$`, r`$\overrightarrow{AI} = \overrightarrow{BI}$`, r`$\overrightarrow{IA} = \overrightarrow{IB}$`], answer: { index: 0 }, explanation: r`Même direction, même sens, même longueur.` },
    { type: 'NUMERIC', prompt: r`AB = 4 cm et $\overrightarrow{AM} = \frac{3}{2}\overrightarrow{AB}$. Calcule AM (en cm).`, answer: { value: 6 }, explanation: r`$1{,}5 \times 4 = 6$.` },
    { type: 'MCQ', prompt: r`Le vecteur $-2\vec{u}$ a :`, choices: [r`le même sens que $\vec{u}$`, r`le sens contraire de $\vec{u}$`, r`une direction perpendiculaire à $\vec{u}$`], answer: { index: 1 }, explanation: r`$k < 0$ : sens contraire.` },
    { type: 'MCQ', prompt: r`(AB) // (CD) équivaut à :`, choices: [r`$\overrightarrow{AB}$ et $\overrightarrow{CD}$ colinéaires`, r`$\overrightarrow{AB} = \overrightarrow{CD}$ obligatoirement`, r`$\overrightarrow{AC}$ et $\overrightarrow{BD}$ orthogonaux`], answer: { index: 0 }, explanation: r`Même direction.` },
    { type: 'MCQ', prompt: r`$2(\vec{u} + \vec{v}) = $`, choices: [r`$2\vec{u} + \vec{v}$`, r`$2\vec{u} + 2\vec{v}$`, r`$\vec{u} + 2\vec{v}$`], answer: { index: 1 }, explanation: r`Distributivité.` },
    { type: 'MCQ', prompt: r`$3\vec{u} - 5\vec{u} = $`, choices: [r`$-2\vec{u}$`, r`$8\vec{u}$`, r`$2\vec{u}$`], answer: { index: 0 }, explanation: r`$(3 - 5)\vec{u}$.` },
    { type: 'MCQ', prompt: r`Un vecteur directeur de la droite (AB) est :`, choices: [r`$\overrightarrow{AB}$`, r`$\vec{0}$`, r`un vecteur orthogonal à $\overrightarrow{AB}$`], answer: { index: 0 }, explanation: r`Il a la direction de la droite.` },
    { type: 'OPEN', prompt: r`ABC est un triangle. Construis le point D tel que $\overrightarrow{AD} = \overrightarrow{AB} + \overrightarrow{AC}$ et dis quelle est la nature de ABDC.`, answer: { model: 'ABDC est un parallélogramme (règle du parallélogramme).', keywords: ['parallélogramme'] }, explanation: r`Règle du parallélogramme.` },
    { type: 'MCQ', prompt: r`Deux vecteurs non nuls de directions perpendiculaires sont :`, choices: ['colinéaires', 'orthogonaux', 'égaux'], answer: { index: 1 }, explanation: r`Définition.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Vecteurs',
    durationMin: 120,
    blocksNext: false,
    instructions: r`**Durée : 2 heures · Note sur 20.** Les constructions peuvent être photographiées.`,
    advice: r`### 🎯 Conseils méthodologiques
1. Pour réduire une somme, cherche la **relation de Chasles** (l'extrémité de l'un = l'origine du suivant).
2. Pour démontrer un **alignement**, exprime $\overrightarrow{AB}$ et $\overrightarrow{AC}$ avec les mêmes vecteurs et trouve $k$.
3. Fais une **figure soignée** : elle t'aide à deviner le résultat.`,
    items: [
      { section: 'Exercice 1 (5 pts)', prompt: r`1. $\overrightarrow{AC} + \overrightarrow{CB} = $`, type: 'MCQ', choices: [r`$\overrightarrow{AB}$`, r`$\overrightarrow{BA}$`, r`$\overrightarrow{CC}$`], answer: { index: 0 }, points: 1, correction: r`Chasles.` },
      { section: 'Exercice 1 (5 pts)', prompt: r`2. $\overrightarrow{AB} + \overrightarrow{BA} = $`, type: 'MCQ', choices: [r`$2\overrightarrow{AB}$`, r`$\vec{0}$`, r`$\overrightarrow{AB}$`], answer: { index: 1 }, points: 1, correction: r`$\overrightarrow{AA} = \vec{0}$.` },
      { section: 'Exercice 1 (5 pts)', prompt: r`3. Si $\overrightarrow{CD} = -\frac{1}{2}\overrightarrow{AB}$, alors (AB) et (CD) sont :`, type: 'MCQ', choices: ['parallèles', 'perpendiculaires', 'sécantes non perpendiculaires'], answer: { index: 0 }, points: 1.5, correction: r`Vecteurs colinéaires.` },
      { section: 'Exercice 1 (5 pts)', prompt: r`4. Si $\overrightarrow{AM} = -\overrightarrow{AB}$, alors A est :`, type: 'MCQ', choices: ['le milieu de [MB]', 'confondu avec B', 'à l’extérieur du segment [MB]'], answer: { index: 0 }, points: 1.5, correction: r`$\overrightarrow{AM} = \overrightarrow{BA}$ : A est le milieu de [MB].` },
      { section: 'Exercice 2 (7 pts)', sectionIntro: r`ABC est un triangle. On définit les points M et N par $\overrightarrow{AM} = 2\overrightarrow{AB}$ et $\overrightarrow{AN} = 2\overrightarrow{AC}$.`, prompt: r`1. Fais une figure et place M et N.`, type: 'OPEN', answer: { model: 'M symétrique de A par rapport à B ; N symétrique de A par rapport à C' }, points: 2, correction: r`M sur [AB) avec AM = 2AB (B milieu de [AM]) ; N sur [AC) avec AN = 2AC *(1 pt chacun)*.` },
      { section: 'Exercice 2 (7 pts)', prompt: r`2. Exprime $\overrightarrow{MN}$ en fonction de $\overrightarrow{BC}$.`, type: 'OPEN', answer: { model: r`$\overrightarrow{MN} = 2\overrightarrow{BC}$` }, points: 3, correction: r`$\overrightarrow{MN} = \overrightarrow{MA} + \overrightarrow{AN} = -2\overrightarrow{AB} + 2\overrightarrow{AC}$ *(1 pt)* $= 2(\overrightarrow{BA} + \overrightarrow{AC})$ *(1 pt)* $= 2\overrightarrow{BC}$ *(1 pt)*.` },
      { section: 'Exercice 2 (7 pts)', prompt: r`3. Déduis-en la position relative des droites (MN) et (BC).`, type: 'OPEN', answer: { model: 'parallèles' }, points: 2, correction: r`$\overrightarrow{MN}$ et $\overrightarrow{BC}$ sont colinéaires, donc (MN) // (BC).` },
      { section: 'Exercice 3 (8 pts)', sectionIntro: r`ABCD est un parallélogramme. E est le point tel que $\overrightarrow{BE} = \overrightarrow{AB}$.`, prompt: r`1. Justifie que $\overrightarrow{DC} = \overrightarrow{BE}$.`, type: 'OPEN', answer: { model: r`$\overrightarrow{DC} = \overrightarrow{AB} = \overrightarrow{BE}$` }, points: 2, correction: r`ABCD parallélogramme donc $\overrightarrow{DC} = \overrightarrow{AB}$ *(1 pt)*, et $\overrightarrow{AB} = \overrightarrow{BE}$ *(1 pt)*.` },
      { section: 'Exercice 3 (8 pts)', prompt: r`2. Quelle est la nature du quadrilatère DCEB ? Justifie.`, type: 'OPEN', answer: { model: 'parallélogramme' }, points: 3, correction: r`$\overrightarrow{DC} = \overrightarrow{BE}$ donc DCEB est un parallélogramme *(3 pts)*.` },
      { section: 'Exercice 3 (8 pts)', prompt: r`3. Démontre que les points A, B, E sont alignés.`, type: 'OPEN', answer: { model: r`$\overrightarrow{AE} = 2\overrightarrow{AB}$` }, points: 3, correction: r`$\overrightarrow{AE} = \overrightarrow{AB} + \overrightarrow{BE} = 2\overrightarrow{AB}$ *(2 pts)* : $\overrightarrow{AE}$ et $\overrightarrow{AB}$ sont colinéaires, donc A, B, E sont alignés *(1 pt)*.` },
    ],
  },
};

export const equationsR: SeedChapter = {
  subject: 'MATH',
  order: 8,
  title: 'Équations et inéquations du premier degré dans ℝ',
  minutes: 300,
  officialRef: `${REF}, leçon 8`,
  objectives: [
    'Résoudre des équations du type ax + b = 0, ax + b = cx + d, (ax + b)(cx + d) = 0',
    'Résoudre des inéquations du premier degré et des systèmes de deux inéquations',
    'Donner l’ensemble des solutions sous forme d’intervalle',
    'Traduire un problème par une équation ou une inéquation',
  ],
  courseMd: r`
> **Situation.** Pour une sortie, les élèves de 3ᵉ d'un lycée d'Attécoubé comparent deux loueurs de cars :
> - entreprise 1 : 10 000 FCFA de caution + 70 FCFA par km ;
> - entreprise 2 : 7 000 FCFA de caution + 90 FCFA par km.
> Pour $x$ km, les prix sont $P_1 = 10\,000 + 70x$ et $P_2 = 7\,000 + 90x$. L'entreprise 1 est moins chère quand $10\,000 + 70x < 7\,000 + 90x$, soit $3\,000 < 20x$, c'est-à-dire $x > 150$ km.

## 1. Équations du premier degré
- $ax + b = 0$ avec $a \neq 0$ : $x = -\dfrac{b}{a}$. Exemple : $3x - 12 = 0 \iff x = 4$.
- $ax + b = cx + d$ : on regroupe les $x$ d'un côté. Exemple : $5x + 2 = 2x + 11 \iff 3x = 9 \iff x = 3$.
- **Équation produit** $(ax + b)(cx + d) = 0$ : produit nul ⟺ un facteur nul. Exemple : $(2x - 3)(x + 5) = 0 \iff x = \dfrac{3}{2}$ ou $x = -5$. $S = \left\{-5\,;\,\dfrac{3}{2}\right\}$.

## 2. Inéquations du premier degré
On résout comme une équation **mais** :
> Quand on multiplie ou divise par un nombre **négatif**, on **change le sens** de l'inégalité.

- $2x - 6 \geq 0 \iff x \geq 3$ ; $S = [3\,;\,+\infty[$.
- $-4x + 8 > 0 \iff -4x > -8 \iff x < 2$ ; $S = ]-\infty\,;\,2[$.
- $3x + 1 < x + 7 \iff 2x < 6 \iff x < 3$ ; $S = ]-\infty\,;\,3[$.

## 3. Système de deux inéquations
On résout chaque inéquation, puis on prend l'**intersection** des ensembles de solutions.

Exemple : $\begin{cases} 2x - 4 \geq 0 \\ x - 7 < 0 \end{cases} \iff \begin{cases} x \geq 2 \\ x < 7 \end{cases}$ ; $S = [2\,;\,7[$.

## 4. Méthode pour un problème
1. Choisir l'inconnue et préciser son unité.
2. Traduire l'énoncé par une équation ou une inéquation.
3. Résoudre.
4. Vérifier et **répondre par une phrase**.

Exemple (situation) : les deux tarifs sont égaux pour $x = 150$ km. Pour un trajet aller-retour de 460 km (Yamoussoukro), l'entreprise 1 coûte $10\,000 + 70 \times 460 = 42\,200$ FCFA et l'entreprise 2 coûte $48\,400$ FCFA.
`,
  summaryMd: r`
- $ax + b = 0 \iff x = -\frac{b}{a}$ ($a \neq 0$).
- Produit nul : $(ax + b)(cx + d) = 0 \iff ax + b = 0$ ou $cx + d = 0$.
- Inéquation : × ou ÷ par un **négatif** ⟹ **on change le sens**.
- Solutions d'une inéquation : un **intervalle**.
- Système : **intersection** des solutions.
- Toujours répondre au problème par une phrase.
`,
  questions: [
    { type: 'NUMERIC', prompt: r`Résous $3x - 12 = 0$.`, answer: { value: 4 }, explanation: r`$3x = 12$.` },
    { type: 'NUMERIC', prompt: r`Résous $5x + 2 = 2x + 11$.`, answer: { value: 3 }, explanation: r`$3x = 9$.` },
    { type: 'MCQ', prompt: r`Les solutions de $(2x - 3)(x + 5) = 0$ sont :`, choices: [r`$\frac{3}{2}$ et $-5$`, r`$-\frac{3}{2}$ et $5$`, r`$3$ et $5$`], answer: { index: 0 }, explanation: r`Produit nul.` },
    { type: 'MCQ', prompt: r`L'ensemble des solutions de $2x - 6 \geq 0$ est :`, choices: [r`$[3\,;\,+\infty[$`, r`$]-\infty\,;\,3]$`, r`$]3\,;\,+\infty[$`], answer: { index: 0 }, explanation: r`$x \geq 3$.` },
    { type: 'MCQ', prompt: r`L'ensemble des solutions de $-4x + 8 > 0$ est :`, choices: [r`$]2\,;\,+\infty[$`, r`$]-\infty\,;\,2[$`, r`$]-\infty\,;\,-2[$`], answer: { index: 1 }, explanation: r`Division par $-4$ : on change le sens.` },
    { type: 'MCQ', prompt: r`$3x + 1 < x + 7$ équivaut à :`, choices: [r`$x < 3$`, r`$x > 3$`, r`$x < 4$`], answer: { index: 0 }, explanation: r`$2x < 6$.` },
    { type: 'MCQ', prompt: r`Système $x \geq 2$ et $x < 7$ : solutions ?`, choices: [r`$[2\,;\,7[$`, r`$]2\,;\,7]$`, r`$[2\,;\,7]$`], answer: { index: 0 }, explanation: r`Intersection.` },
    { type: 'NUMERIC', prompt: r`Pour quelle distance (en km) les tarifs $10\,000 + 70x$ et $7\,000 + 90x$ sont-ils égaux ?`, answer: { value: 150 }, explanation: r`$3\,000 = 20x$.` },
    { type: 'NUMERIC', prompt: r`Résous $\frac{x}{4} = 3$.`, answer: { value: 12 }, explanation: r`$x = 12$.` },
    { type: 'MCQ', prompt: r`L'équation $0x = 5$ :`, choices: ['a une solution', 'n’a pas de solution', 'a une infinité de solutions'], answer: { index: 1 }, explanation: r`$0 \neq 5$ quel que soit $x$.` },
    { type: 'NUMERIC', prompt: r`Résous $7 - 2x = 1$.`, answer: { value: 3 }, explanation: r`$-2x = -6$.` },
    { type: 'MCQ', prompt: r`$-x \leq 4$ équivaut à :`, choices: [r`$x \leq -4$`, r`$x \geq -4$`, r`$x \geq 4$`], answer: { index: 1 }, explanation: r`On multiplie par $-1$.` },
    { type: 'NUMERIC', prompt: r`Un nombre augmenté de son double vaut 45. Quel est ce nombre ?`, answer: { value: 15 }, explanation: r`$x + 2x = 45$.` },
    { type: 'MCQ', prompt: r`Le système $x > 5$ et $x < 1$ :`, choices: [r`a pour solutions $]1\,;\,5[$`, 'n’a pas de solution', r`a pour solutions $\mathbb{R}$`], answer: { index: 1 }, explanation: r`Intersection vide.` },
    { type: 'OPEN', prompt: r`Résous $x^2 - 9 = 0$ en factorisant.`, answer: { model: r`$(x - 3)(x + 3) = 0$ donc $x = 3$ ou $x = -3$`, keywords: ['(x − 3)(x + 3)', '3', '−3'] }, explanation: r`Différence de deux carrés puis produit nul.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Équations et inéquations dans ℝ',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.** Donne les solutions des inéquations sous forme d'intervalles.`,
    advice: r`### 🎯 Conseils méthodologiques
1. Avant de diviser, regarde le **signe** du nombre : s'il est négatif, change le sens de l'inégalité.
2. Écris l'ensemble des solutions avec les bons crochets.
3. Dans un problème, réponds par une **phrase** avec l'unité.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Résous $4x + 3 = x - 9$.`, type: 'NUMERIC', answer: { value: -4 }, points: 2, resultPoints: 1, correction: r`$3x = -12$, donc $x = -4$.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Résous $(x - 2)(3x + 6) = 0$ (donne la plus petite solution).`, type: 'NUMERIC', answer: { value: -2 }, points: 2, resultPoints: 1, correction: r`$x = 2$ ou $x = -2$ ; $S = \{-2\,;\,2\}$.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. L'ensemble des solutions de $-3x + 9 \leq 0$ est :`, type: 'MCQ', choices: [r`$[3\,;\,+\infty[$`, r`$]-\infty\,;\,3]$`, r`$]-\infty\,;\,-3]$`], answer: { index: 0 }, points: 2, correction: r`$-3x \leq -9 \iff x \geq 3$.` },
      { section: 'Exercice 2 (5 pts)', sectionIntro: r`On considère le système $\begin{cases} 2x + 1 > 3 \\ 5 - x \geq 0 \end{cases}$`, prompt: r`1. Résous chaque inéquation.`, type: 'OPEN', answer: { model: r`$x > 1$ et $x \leq 5$` }, points: 3, correction: r`$2x > 2 \iff x > 1$ *(1,5 pt)* ; $-x \geq -5 \iff x \leq 5$ *(1,5 pt)*.` },
      { section: 'Exercice 2 (5 pts)', prompt: r`2. Donne l'ensemble des solutions du système.`, type: 'MCQ', choices: [r`$]1\,;\,5]$`, r`$[1\,;\,5[$`, r`$]1\,;\,5[$`], answer: { index: 0 }, points: 2, correction: r`Intersection : $]1\,;\,5]$.` },
      { section: 'Problème (9 pts)', sectionIntro: r`Pour une sortie, une classe compare deux loueurs de cars : l'entreprise A demande 10 000 FCFA plus 70 FCFA par km ; l'entreprise B demande 7 000 FCFA plus 90 FCFA par km. On note $x$ la distance parcourue en km.`, prompt: r`1. Exprime les prix $P_A$ et $P_B$ en fonction de $x$.`, type: 'OPEN', answer: { model: r`$P_A = 10\,000 + 70x$ ; $P_B = 7\,000 + 90x$` }, points: 2, correction: r`1 pt par expression.` },
      { section: 'Problème (9 pts)', prompt: r`2. Pour quelle distance les deux prix sont-ils égaux (en km) ?`, type: 'NUMERIC', answer: { value: 150 }, points: 2, resultPoints: 1, correction: r`$10\,000 + 70x = 7\,000 + 90x \iff 3\,000 = 20x \iff x = 150$ km.` },
      { section: 'Problème (9 pts)', prompt: r`3. Résous $P_A < P_B$ et interprète.`, type: 'OPEN', answer: { model: 'x > 150 : A est moins chère au-delà de 150 km' }, points: 3, correction: r`$10\,000 + 70x < 7\,000 + 90x \iff 3\,000 < 20x \iff x > 150$ *(2 pts)*. L'entreprise A est moins chère pour plus de 150 km *(1 pt)*.` },
      { section: 'Problème (9 pts)', prompt: r`4. La classe part pour un aller-retour de 460 km. Quel est le prix le plus bas (en FCFA) ?`, type: 'NUMERIC', answer: { value: 42200 }, points: 2, resultPoints: 1, correction: r`460 > 150 : on choisit A ; $10\,000 + 70 \times 460 = 42\,200$ FCFA.` },
    ],
  },
};
