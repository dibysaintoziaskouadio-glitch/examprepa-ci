import { SeedChapter } from '../types';

const r = String.raw;
const REF = 'Programme éducatif Mathématiques 3e (DPFC) — progression 2026-2027';

export const calculLitteral: SeedChapter = {
  subject: 'MATH',
  order: 1,
  title: 'Calcul littéral',
  minutes: 540,
  isFree: true,
  officialRef: `${REF}, leçon 1`,
  objectives: [
    'Développer, réduire et factoriser une expression littérale',
    'Utiliser les identités remarquables et les puissances d’exposant entier relatif',
    'Utiliser la propriété du produit nul et des nombres de même carré',
    'Déterminer la condition d’existence d’une fraction rationnelle et la simplifier',
  ],
  courseMd: r`
> **Situation.** Le comité de la kermesse du lycée de Daloa dispose d'un terrain carré de côté $x$ mètres. Aux quatre coins, chaque sponsor installe un stand en forme de triangle rectangle isocèle dont les côtés de l'angle droit mesurent 2 m. Quelle est l'aire laissée aux jeux ?
> Aire d'un stand : $\dfrac{2 \times 2}{2} = 2$ m². Aire des jeux : $x^2 - 4 \times 2 = x^2 - 8$ (en m²). C'est une **expression littérale**.

## 1. Vocabulaire
- Un **monôme** est un produit d'un nombre par une puissance de la variable : $5x^2$, $-3x$, $7$.
- Un **polynôme** est une somme de monômes : $P(x) = 2x^2 - 11x + 12$.
- **Réduire**, c'est regrouper les termes semblables : $3x^2 + 5x - x^2 + 2x = 2x^2 + 7x$.
- Calculer la **valeur numérique** d'une expression, c'est remplacer la lettre par un nombre. Pour $x = -2$ : $3x^2 - 2x + 1 = 3 \times 4 + 4 + 1 = 17$.

## 2. Développer
On utilise la distributivité : $k(a + b) = ka + kb$ et $(a + b)(c + d) = ac + ad + bc + bd$.

> **Identités remarquables**
> $$(a + b)^2 = a^2 + 2ab + b^2 \qquad (a - b)^2 = a^2 - 2ab + b^2 \qquad (a + b)(a - b) = a^2 - b^2$$

**Exemples.**
- $(x + 5)^2 = x^2 + 10x + 25$
- $(3x - 2)^2 = 9x^2 - 12x + 4$
- $(2x - 1)(2x + 1) = 4x^2 - 1$

⚠️ Devant une parenthèse précédée du signe « − », on change tous les signes : $-(2x^2 - x - 3) = -2x^2 + x + 3$.

## 3. Factoriser
Factoriser, c'est écrire une expression sous forme de **produit**.
1. **Facteur commun :** $(2x - 3)^2 - (x + 1)(2x - 3) = (2x - 3)\big[(2x - 3) - (x + 1)\big] = (2x - 3)(x - 4)$.
2. **Identités remarquables lues de droite à gauche :** $x^2 - 16 = (x - 4)(x + 4)$ ; $9x^2 - 12x + 4 = (3x - 2)^2$.

💡 On vérifie toujours une factorisation en redéveloppant.

## 4. Puissances d'exposant entier relatif
Pour $a \neq 0$ et $n$ entier naturel : $a^{-n} = \dfrac{1}{a^n}$ et $a^0 = 1$.

> Pour $a \neq 0$, $b \neq 0$, $m$ et $n$ entiers relatifs :
> $a^m \times a^n = a^{m+n}$ · $\dfrac{a^m}{a^n} = a^{m-n}$ · $(a^m)^n = a^{mn}$ · $(ab)^n = a^n b^n$

Exemples : $2^{-3} = \dfrac{1}{8}$ ; $10^{-2} = 0{,}01$ ; $(2^3)^2 = 2^6 = 64$.

## 5. Produit nul, produit non nul, nombres de même carré
> **Produit nul.** Un produit de facteurs est nul si et seulement si l'un au moins des facteurs est nul : $A \times B = 0 \iff A = 0$ ou $B = 0$.

Exemple : $(x - 2)(x + 7) = 0 \iff x = 2$ ou $x = -7$.

> **Produit non nul.** $A \times B \neq 0 \iff A \neq 0$ et $B \neq 0$.

> **Nombres de même carré.** $a^2 = b^2 \iff a = b$ ou $a = -b$. Les nombres dont le carré est 25 sont $5$ et $-5$.

Exemple : $x^2 = 144 \iff x = 12$ ou $x = -12$.

## 6. Égalité de deux quotients, inverses
- Pour $b \neq 0$ et $d \neq 0$ : $\dfrac{a}{b} = \dfrac{c}{d} \iff a \times d = b \times c$.
- Deux nombres sont **inverses** l'un de l'autre si leur produit vaut 1 : l'inverse de $\dfrac{2}{3}$ est $\dfrac{3}{2}$.

## 7. Fractions rationnelles
Une **fraction rationnelle** est un quotient de deux polynômes, par exemple $F(x) = \dfrac{x^2 - 9}{x^2 - 6x + 9}$.

> Elle **existe** si et seulement si son dénominateur est **non nul**.

Méthode pour $F$ :
1. On factorise le dénominateur : $x^2 - 6x + 9 = (x - 3)^2$. Il est nul pour $x = 3$. Donc $F(x)$ existe si et seulement si $x \neq 3$.
2. On factorise le numérateur : $x^2 - 9 = (x - 3)(x + 3)$.
3. On **simplifie** pour $x \neq 3$ : $F(x) = \dfrac{(x - 3)(x + 3)}{(x - 3)^2} = \dfrac{x + 3}{x - 3}$.
`,
  summaryMd: r`
| Outil | Formule |
|---|---|
| Carré d'une somme | $(a+b)^2 = a^2 + 2ab + b^2$ |
| Carré d'une différence | $(a-b)^2 = a^2 - 2ab + b^2$ |
| Différence de deux carrés | $(a+b)(a-b) = a^2 - b^2$ |
| Puissances | $a^{-n} = \frac{1}{a^n}$ ; $a^m a^n = a^{m+n}$ ; $(a^m)^n = a^{mn}$ |
| Produit nul | $AB = 0 \iff A = 0$ ou $B = 0$ |
| Même carré | $a^2 = b^2 \iff a = b$ ou $a = -b$ |
| Égalité de quotients | $\frac{a}{b} = \frac{c}{d} \iff ad = bc$ |
| Fraction rationnelle | existe ⟺ dénominateur ≠ 0 |

### Méthode « factoriser »
1. Chercher un **facteur commun**.
2. Sinon, reconnaître une **identité remarquable**.
3. Vérifier en redéveloppant.

### ❌ Pièges
- $(a + b)^2 \neq a^2 + b^2$ : il ne faut pas oublier le double produit $2ab$.
- Oublier de changer les signes après un « − » devant une parenthèse.
- Simplifier une fraction rationnelle **avant** d'avoir écrit sa condition d'existence.
`,
  questions: [
    { type: 'MCQ', prompt: r`$(a + b)^2$ est égal à :`, choices: [r`$a^2 + b^2$`, r`$a^2 + 2ab + b^2$`, r`$a^2 + ab + b^2$`], answer: { index: 1 }, explanation: r`Il ne faut pas oublier le double produit $2ab$.` },
    { type: 'MCQ', prompt: r`$(2x - 1)(2x + 1)$ est égal à :`, choices: [r`$4x^2 - 1$`, r`$4x^2 + 1$`, r`$2x^2 - 1$`], answer: { index: 0 }, explanation: r`$(a - b)(a + b) = a^2 - b^2$ avec $a = 2x$ et $b = 1$.` },
    { type: 'NUMERIC', prompt: r`On développe $(x + 5)^2 = x^2 + kx + 25$. Donne $k$.`, answer: { value: 10 }, explanation: r`Double produit : $2 \times x \times 5 = 10x$.` },
    { type: 'MCQ', prompt: r`Une factorisation de $x^2 - 16$ est :`, choices: [r`$(x - 4)^2$`, r`$(x - 4)(x + 4)$`, r`$(x - 16)(x + 1)$`], answer: { index: 1 }, explanation: r`$x^2 - 16 = x^2 - 4^2 = (x - 4)(x + 4)$.` },
    { type: 'NUMERIC', prompt: r`Calcule la valeur de $3x^2 - 2x + 1$ pour $x = -2$.`, answer: { value: 17 }, explanation: r`$3 \times 4 - 2 \times (-2) + 1 = 12 + 4 + 1 = 17$.` },
    { type: 'MCQ', prompt: r`$10^{-2}$ est égal à :`, choices: ['−100', '0,01', '−20'], answer: { index: 1 }, explanation: r`$10^{-2} = \frac{1}{10^2} = \frac{1}{100}$.` },
    { type: 'NUMERIC', prompt: r`Calcule $(2^3)^2$.`, answer: { value: 64 }, explanation: r`$(2^3)^2 = 2^6 = 64$.` },
    { type: 'MCQ', prompt: r`Pour $a \neq 0$, $a^5 \times a^{-2}$ est égal à :`, choices: [r`$a^{-10}$`, r`$a^3$`, r`$a^7$`], answer: { index: 1 }, explanation: r`$a^m \times a^n = a^{m+n}$ : $5 + (-2) = 3$.` },
    { type: 'MCQ', prompt: r`Les solutions de $(x - 2)(x + 7) = 0$ sont :`, choices: ['2 et 7', '−2 et 7', '2 et −7'], answer: { index: 2 }, explanation: r`Produit nul : $x - 2 = 0$ ou $x + 7 = 0$.` },
    { type: 'MCQ', prompt: r`Les nombres dont le carré est 25 sont :`, choices: ['5 seulement', '−5 et 5', '12,5'], answer: { index: 1 }, explanation: r`$a^2 = 25 \iff a = 5$ ou $a = -5$.` },
    { type: 'MCQ', prompt: r`La fraction rationnelle $\dfrac{3}{x + 4}$ existe si et seulement si :`, choices: [r`$x \neq 4$`, r`$x \neq -4$`, r`$x \neq 3$`], answer: { index: 1 }, explanation: r`Le dénominateur $x + 4$ s'annule pour $x = -4$.` },
    { type: 'MCQ', prompt: r`L'inverse de $\frac{2}{3}$ est :`, choices: [r`$-\frac{2}{3}$`, r`$\frac{3}{2}$`, r`$-\frac{3}{2}$`], answer: { index: 1 }, explanation: r`$\frac{2}{3} \times \frac{3}{2} = 1$.` },
    { type: 'MCQ', prompt: r`Pour $b \neq 0$ et $d \neq 0$, $\frac{a}{b} = \frac{c}{d}$ équivaut à :`, choices: [r`$ab = cd$`, r`$ad = bc$`, r`$a + d = b + c$`], answer: { index: 1 }, explanation: r`C'est le produit en croix.` },
    { type: 'OPEN', prompt: r`Factorise $9x^2 - 12x + 4$.`, answer: { model: r`$9x^2 - 12x + 4 = (3x)^2 - 2 \times 3x \times 2 + 2^2 = (3x - 2)^2$`, keywords: ['identité remarquable', '(3x − 2)²'] }, explanation: r`On reconnaît $a^2 - 2ab + b^2$ avec $a = 3x$ et $b = 2$.` },
    { type: 'MCQ', prompt: r`Pour $x \neq 1$, $\dfrac{x^2 - 1}{x - 1}$ se simplifie en :`, choices: [r`$x - 1$`, r`$x + 1$`, r`$x$`], answer: { index: 1 }, explanation: r`$x^2 - 1 = (x - 1)(x + 1)$, puis on simplifie par $x - 1$.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Calcul littéral',
    durationMin: 120,
    blocksNext: false,
    instructions: r`**Durée : 2 heures · Note sur 20.** Calculatrice autorisée. Rédige les étapes de tes calculs.`,
    advice: r`### 🎯 Conseils méthodologiques
1. **Développer** : écris chaque étape ; place les parenthèses quand un « − » précède un produit.
2. **Factoriser** : cherche d'abord le facteur commun, puis une identité remarquable. **Vérifie** en redéveloppant.
3. **Équation produit** : n'oublie aucune solution.
4. **Fraction rationnelle** : écris la condition d'existence **avant** de simplifier.
5. Dans un problème, vérifie que la solution trouvée a du sens (une longueur est positive).`,
    items: [
      { section: 'Exercice 1 (4 pts)', sectionIntro: r`Pour chaque question, choisis la bonne réponse.`, prompt: r`1. $(x + 3)^2 = $`, type: 'MCQ', choices: [r`$x^2 + 9$`, r`$x^2 + 6x + 9$`, r`$x^2 + 3x + 9$`], answer: { index: 1 }, points: 1, correction: r`$(a + b)^2 = a^2 + 2ab + b^2$ avec $2ab = 6x$.` },
      { section: 'Exercice 1 (4 pts)', prompt: r`2. $(2x - 1)(2x + 1) = $`, type: 'MCQ', choices: [r`$4x^2 - 1$`, r`$4x^2 + 1$`, r`$2x^2 - 1$`], answer: { index: 0 }, points: 1, correction: r`$(a - b)(a + b) = a^2 - b^2$.` },
      { section: 'Exercice 1 (4 pts)', prompt: r`3. $2^{-3} = $`, type: 'MCQ', choices: ['−8', r`$\frac{1}{8}$`, '−6'], answer: { index: 1 }, points: 1, correction: r`$2^{-3} = \frac{1}{2^3} = \frac{1}{8}$.` },
      { section: 'Exercice 1 (4 pts)', prompt: r`4. La fraction $\dfrac{x + 1}{x - 2}$ existe si et seulement si :`, type: 'MCQ', choices: [r`$x \neq -1$`, r`$x \neq 2$`, r`$x \neq 0$`], answer: { index: 1 }, points: 1, correction: r`Le dénominateur $x - 2$ doit être non nul.` },
      { section: 'Exercice 2 (6 pts)', sectionIntro: r`On donne $E = (2x - 3)^2 - (x + 1)(2x - 3)$.`, prompt: r`1. Développe et réduis $E$.`, type: 'OPEN', answer: { model: r`$E = 2x^2 - 11x + 12$` }, points: 2, correction: r`$(2x - 3)^2 = 4x^2 - 12x + 9$ *(0,5 pt)* ; $(x + 1)(2x - 3) = 2x^2 - x - 3$ *(0,5 pt)*.
$E = 4x^2 - 12x + 9 - 2x^2 + x + 3 = 2x^2 - 11x + 12$ *(1 pt)*.` },
      { section: 'Exercice 2 (6 pts)', prompt: r`2. Factorise $E$.`, type: 'OPEN', answer: { model: r`$E = (2x - 3)(x - 4)$` }, points: 2, correction: r`Facteur commun $(2x - 3)$ *(0,5 pt)* : $E = (2x - 3)\big[(2x - 3) - (x + 1)\big]$ *(0,5 pt)* $= (2x - 3)(x - 4)$ *(1 pt)*.` },
      { section: 'Exercice 2 (6 pts)', prompt: r`3. Calcule $E$ pour $x = 0$.`, type: 'NUMERIC', answer: { value: 12 }, points: 1, resultPoints: 1, correction: r`Avec la forme développée : $E = 12$.` },
      { section: 'Exercice 2 (6 pts)', prompt: r`4. Résous l'équation $E = 0$.`, type: 'OPEN', answer: { model: r`$x = \frac{3}{2}$ ou $x = 4$` }, points: 1, correction: r`$(2x - 3)(x - 4) = 0 \iff 2x - 3 = 0$ ou $x - 4 = 0$, soit $x = \frac{3}{2}$ ou $x = 4$.` },
      { section: 'Exercice 3 (4 pts)', sectionIntro: r`On donne $F(x) = \dfrac{x^2 - 9}{x^2 - 6x + 9}$.`, prompt: r`1. Détermine les valeurs de $x$ pour lesquelles $F(x)$ existe.`, type: 'OPEN', answer: { model: r`$x \neq 3$` }, points: 1.5, correction: r`$x^2 - 6x + 9 = (x - 3)^2$ *(0,5 pt)*, nul pour $x = 3$. $F(x)$ existe si et seulement si $x \neq 3$ *(1 pt)*.` },
      { section: 'Exercice 3 (4 pts)', prompt: r`2. Simplifie $F(x)$.`, type: 'OPEN', answer: { model: r`$F(x) = \frac{x + 3}{x - 3}$` }, points: 1.5, correction: r`$x^2 - 9 = (x - 3)(x + 3)$ *(0,5 pt)* ; pour $x \neq 3$, $F(x) = \dfrac{x + 3}{x - 3}$ *(1 pt)*.` },
      { section: 'Exercice 3 (4 pts)', prompt: r`3. Calcule $F(5)$.`, type: 'NUMERIC', answer: { value: 4 }, points: 1, resultPoints: 1, correction: r`$F(5) = \dfrac{5 + 3}{5 - 3} = \dfrac{8}{2} = 4$.` },
      { section: 'Problème (6 pts)', sectionIntro: r`Le comité de la kermesse d'un lycée de Daloa dispose d'un terrain carré de côté $x$ mètres ($x > 4$). Aux quatre coins, on installe des stands en forme de triangles rectangles isocèles dont les côtés de l'angle droit mesurent 2 m. Le reste du terrain est réservé aux jeux.`, prompt: r`1. Calcule l'aire totale des quatre stands (en m²).`, type: 'NUMERIC', answer: { value: 8 }, points: 1, resultPoints: 1, correction: r`Un stand : $\frac{2 \times 2}{2} = 2$ m² ; quatre stands : $8$ m².` },
      { section: 'Problème (6 pts)', prompt: r`2. Exprime en fonction de $x$ l'aire $A(x)$ de la zone de jeux.`, type: 'OPEN', answer: { model: r`$A(x) = x^2 - 8$` }, points: 1.5, correction: r`Aire du terrain $x^2$ *(0,5 pt)* moins l'aire des stands : $A(x) = x^2 - 8$ *(1 pt)*.` },
      { section: 'Problème (6 pts)', prompt: r`3. Calcule $A(20)$ (en m²).`, type: 'NUMERIC', answer: { value: 392 }, points: 1.5, resultPoints: 0.5, correction: r`$A(20) = 400 - 8 = 392$ m².` },
      { section: 'Problème (6 pts)', prompt: r`4. Le comité veut une zone de jeux de 136 m². Montre que $x^2 - 144 = 0$, puis détermine $x$.`, type: 'OPEN', answer: { model: 'x = 12 m' }, points: 2, correction: r`$x^2 - 8 = 136 \iff x^2 - 144 = 0$ *(0,5 pt)* $\iff (x - 12)(x + 12) = 0$ *(0,5 pt)* $\iff x = 12$ ou $x = -12$ *(0,5 pt)*. Une longueur est positive : $x = 12$ m *(0,5 pt)*.` },
    ],
  },
};

export const racinesCarrees: SeedChapter = {
  subject: 'MATH',
  order: 3,
  title: 'Racines carrées',
  minutes: 420,
  officialRef: `${REF}, leçon 3`,
  objectives: [
    'Connaître la définition de la racine carrée et de la valeur absolue',
    'Utiliser les propriétés des racines carrées',
    'Écrire un quotient sans radical au dénominateur (expression conjuguée)',
    'Calculer des sommes, produits et quotients contenant des racines carrées',
  ],
  courseMd: r`
> **Situation.** La ferme d'un agriculteur de Foula est un carré d'aire 500 m². Pour acheter le grillage, il doit connaître le côté : c'est le nombre positif dont le carré vaut 500, noté $\sqrt{500}$.
> $\sqrt{500} = \sqrt{100 \times 5} = 10\sqrt{5} \approx 22{,}36$ m, et le périmètre vaut $40\sqrt{5} \approx 89{,}4$ m.

## 1. Nombres réels
Les nombres décimaux, les fractions et des nombres comme $\sqrt{2}$ ou $\pi$ forment l'ensemble des **nombres réels**, noté $\mathbb{R}$.

## 2. Racine carrée d'un nombre positif
> **Définition.** Soit $a$ un nombre **positif**. La racine carrée de $a$ est le nombre **positif** dont le carré est $a$. On la note $\sqrt{a}$.

- $\sqrt{49} = 7$ ; $\sqrt{0{,}25} = 0{,}5$ ; $\sqrt{0} = 0$.
- $\sqrt{-4}$ **n'existe pas** dans $\mathbb{R}$.
- Pour $a \geq 0$ : $(\sqrt{a})^2 = a$.

## 3. Valeur absolue
> **Définition.** La valeur absolue d'un réel $a$, notée $|a|$, est la distance de $a$ à zéro : $|a| = a$ si $a \geq 0$ et $|a| = -a$ si $a < 0$.

Exemples : $|7| = 7$ ; $|-3| = 3$ ; $|1 - \sqrt{2}| = \sqrt{2} - 1$ car $\sqrt{2} > 1$.

> **Propriété.** Pour tout réel $a$ : $\sqrt{a^2} = |a|$. Exemple : $\sqrt{(-3)^2} = |-3| = 3$.

## 4. Propriétés
Pour $a \geq 0$ et $b \geq 0$ :
$$\sqrt{a \times b} = \sqrt{a} \times \sqrt{b} \qquad \sqrt{\dfrac{a}{b}} = \dfrac{\sqrt{a}}{\sqrt{b}} \;(b \neq 0)$$

⚠️ En général $\sqrt{a + b} \neq \sqrt{a} + \sqrt{b}$ : $\sqrt{9 + 16} = 5$ alors que $\sqrt{9} + \sqrt{16} = 7$.

**Racines de puissances.** Pour $a \geq 0$ et $n$ entier naturel : $\sqrt{a^{2n}} = a^n$. Exemple : $\sqrt{10^6} = 10^3 = 1\,000$.

## 5. Simplifier et calculer
On fait apparaître le plus grand **carré parfait** (4, 9, 16, 25, 36, 49, 64, 81, 100…).
- $\sqrt{72} = \sqrt{36 \times 2} = 6\sqrt{2}$
- $A = \sqrt{50} + \sqrt{18} - \sqrt{8} = 5\sqrt{2} + 3\sqrt{2} - 2\sqrt{2} = 6\sqrt{2}$
- $(2\sqrt{3})^2 = 4 \times 3 = 12$
- $(1 + \sqrt{2})^2 = 1 + 2\sqrt{2} + 2 = 3 + 2\sqrt{2}$

## 6. Quotient sans radical au dénominateur
- $\dfrac{1}{\sqrt{5}} = \dfrac{\sqrt{5}}{5}$ (on multiplie en haut et en bas par $\sqrt{5}$).
- **Expression conjuguée.** Pour $a, b \geq 0$ : le conjugué de $\sqrt{a} + \sqrt{b}$ est $\sqrt{a} - \sqrt{b}$, celui de $m + \sqrt{a}$ est $m - \sqrt{a}$. Leur produit ne contient plus de radical : $(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b}) = a - b$.

Exemple : $\dfrac{2}{\sqrt{3} - 1} = \dfrac{2(\sqrt{3} + 1)}{(\sqrt{3} - 1)(\sqrt{3} + 1)} = \dfrac{2(\sqrt{3} + 1)}{3 - 1} = \sqrt{3} + 1$.
`,
  summaryMd: r`
- $\sqrt{a}$ existe si $a \geq 0$ ; c'est un nombre positif et $(\sqrt{a})^2 = a$.
- $\sqrt{a^2} = |a|$ ; $|a| = a$ si $a \geq 0$, $|a| = -a$ si $a < 0$.
- $\sqrt{ab} = \sqrt{a}\sqrt{b}$ ; $\sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}}$ ; $\sqrt{a^{2n}} = a^n$.
- ❌ $\sqrt{a + b} \neq \sqrt{a} + \sqrt{b}$.
- Simplifier : extraire le plus grand carré parfait.
- Dénominateur : $\frac{1}{\sqrt{a}} = \frac{\sqrt{a}}{a}$ ; avec $\sqrt{a} \pm \sqrt{b}$ ou $m \pm \sqrt{a}$, multiplier par l'**expression conjuguée**.
`,
  questions: [
    { type: 'NUMERIC', prompt: r`Calcule $\sqrt{49}$.`, answer: { value: 7 }, explanation: r`$7^2 = 49$ et $7 \geq 0$.` },
    { type: 'MCQ', prompt: r`$\sqrt{-4}$ :`, choices: ['vaut −2', 'vaut 2', 'n’existe pas dans ℝ'], answer: { index: 2 }, explanation: r`Aucun carré n'est négatif.` },
    { type: 'MCQ', prompt: r`$|-3|$ est égal à :`, choices: ['−3', '3', '9'], answer: { index: 1 }, explanation: r`La valeur absolue est une distance : elle est positive.` },
    { type: 'MCQ', prompt: r`$\sqrt{(-5)^2}$ est égal à :`, choices: ['−5', '5', '25'], answer: { index: 1 }, explanation: r`$\sqrt{a^2} = |a| = 5$.` },
    { type: 'MCQ', prompt: r`$\sqrt{12}$ s'écrit aussi :`, choices: [r`$2\sqrt{3}$`, r`$3\sqrt{2}$`, r`$4\sqrt{3}$`], answer: { index: 0 }, explanation: r`$\sqrt{4 \times 3} = 2\sqrt{3}$.` },
    { type: 'MCQ', prompt: r`$\sqrt{\frac{9}{16}}$ est égal à :`, choices: [r`$\frac{3}{4}$`, r`$\frac{9}{4}$`, r`$\frac{3}{16}$`], answer: { index: 0 }, explanation: r`$\frac{\sqrt{9}}{\sqrt{16}} = \frac{3}{4}$.` },
    { type: 'NUMERIC', prompt: r`Calcule $(\sqrt{5})^2$.`, answer: { value: 5 }, explanation: r`Pour $a \geq 0$, $(\sqrt{a})^2 = a$.` },
    { type: 'NUMERIC', prompt: r`$\sqrt{72} = a\sqrt{2}$. Donne $a$.`, answer: { value: 6 }, explanation: r`$\sqrt{36 \times 2} = 6\sqrt{2}$.` },
    { type: 'NUMERIC', prompt: r`$\sqrt{50} + \sqrt{18} = k\sqrt{2}$. Donne $k$.`, answer: { value: 8 }, explanation: r`$5\sqrt{2} + 3\sqrt{2} = 8\sqrt{2}$.` },
    { type: 'NUMERIC', prompt: r`Calcule $\sqrt{10^6}$.`, answer: { value: 1000 }, explanation: r`$\sqrt{10^{6}} = 10^3$.` },
    { type: 'MCQ', prompt: r`$\dfrac{1}{\sqrt{5}}$ s'écrit sans radical au dénominateur :`, choices: [r`$\frac{\sqrt{5}}{5}$`, r`$\frac{5}{\sqrt{5}}$`, r`$\frac{1}{5}$`], answer: { index: 0 }, explanation: r`On multiplie en haut et en bas par $\sqrt{5}$.` },
    { type: 'MCQ', prompt: r`L'expression conjuguée de $3 + \sqrt{2}$ est :`, choices: [r`$-3 - \sqrt{2}$`, r`$3 - \sqrt{2}$`, r`$\sqrt{3} + 2$`], answer: { index: 1 }, explanation: r`Le conjugué de $m + \sqrt{a}$ est $m - \sqrt{a}$.` },
    { type: 'NUMERIC', prompt: r`Calcule $(\sqrt{7} + \sqrt{2})(\sqrt{7} - \sqrt{2})$.`, answer: { value: 5 }, explanation: r`$(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b}) = a - b = 7 - 2$.` },
    { type: 'MCQ', prompt: r`$\sqrt{16 + 9}$ est égal à :`, choices: ['7', '5', '25'], answer: { index: 1 }, explanation: r`$\sqrt{25} = 5$ ; on ne « sépare » pas une somme sous le radical.` },
    { type: 'MCQ', prompt: r`$|1 - \sqrt{2}|$ est égal à :`, choices: [r`$1 - \sqrt{2}$`, r`$\sqrt{2} - 1$`, r`$1 + \sqrt{2}$`], answer: { index: 1 }, explanation: r`$1 - \sqrt{2} < 0$ car $\sqrt{2} \approx 1{,}41$ : on prend l'opposé.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Racines carrées',
    durationMin: 120,
    blocksNext: false,
    instructions: r`**Durée : 2 heures · Note sur 20.** Donne les résultats sous la forme demandée et justifie tes calculs.`,
    advice: r`### 🎯 Conseils méthodologiques
1. Pour simplifier, cherche le **plus grand carré parfait** qui divise le nombre.
2. Avant de calculer une valeur absolue, détermine le **signe** de l'expression.
3. Pour un dénominateur $\sqrt{a} \pm \sqrt{b}$ ou $m \pm \sqrt{a}$, multiplie par l'**expression conjuguée**.
4. Vérifie tes résultats avec la calculatrice (valeurs approchées).`,
    items: [
      { section: 'Exercice 1 (5 pts)', sectionIntro: r`Choisis la bonne réponse.`, prompt: r`1. $\sqrt{16 + 9} = $`, type: 'MCQ', choices: ['7', '5', '25'], answer: { index: 1 }, points: 1, correction: r`$\sqrt{25} = 5$.` },
      { section: 'Exercice 1 (5 pts)', prompt: r`2. $\sqrt{2} \times \sqrt{8} = $`, type: 'MCQ', choices: ['4', '16', r`$\sqrt{10}$`], answer: { index: 0 }, points: 1, correction: r`$\sqrt{16} = 4$.` },
      { section: 'Exercice 1 (5 pts)', prompt: r`3. $\sqrt{(-7)^2} = $`, type: 'MCQ', choices: ['−7', '7', '49'], answer: { index: 1 }, points: 1, correction: r`$\sqrt{a^2} = |a|$.` },
      { section: 'Exercice 1 (5 pts)', prompt: r`4. $|2 - \sqrt{5}| = $`, type: 'MCQ', choices: [r`$2 - \sqrt{5}$`, r`$\sqrt{5} - 2$`, r`$2 + \sqrt{5}$`], answer: { index: 1 }, points: 1, correction: r`$\sqrt{5} \approx 2{,}24 > 2$, donc $2 - \sqrt{5} < 0$.` },
      { section: 'Exercice 1 (5 pts)', prompt: r`5. L'expression conjuguée de $\sqrt{3} - 1$ est :`, type: 'MCQ', choices: [r`$\sqrt{3} + 1$`, r`$1 - \sqrt{3}$`, r`$-\sqrt{3} - 1$`], answer: { index: 0 }, points: 1, correction: r`On change le signe entre les deux termes.` },
      { section: 'Exercice 2 (7 pts)', sectionIntro: r`On donne $A = \sqrt{50} + \sqrt{18} - \sqrt{8}$ et $B = (1 + \sqrt{2})^2$.`, prompt: r`1. Écris $A$ sous la forme $k\sqrt{2}$ ; donne $k$.`, type: 'NUMERIC', answer: { value: 6 }, points: 2, resultPoints: 1, correction: r`$\sqrt{50} = 5\sqrt{2}$, $\sqrt{18} = 3\sqrt{2}$, $\sqrt{8} = 2\sqrt{2}$ *(1 pt)* ; $A = 6\sqrt{2}$ *(1 pt)*.` },
      { section: 'Exercice 2 (7 pts)', prompt: r`2. Développe $B$ et écris-le sous la forme $a + b\sqrt{2}$.`, type: 'OPEN', answer: { model: r`$B = 3 + 2\sqrt{2}$` }, points: 2, correction: r`$(1 + \sqrt{2})^2 = 1 + 2\sqrt{2} + 2$ *(1 pt)* $= 3 + 2\sqrt{2}$ *(1 pt)*.` },
      { section: 'Exercice 2 (7 pts)', prompt: r`3. Écris $C = \dfrac{2}{\sqrt{3} - 1}$ sans radical au dénominateur.`, type: 'OPEN', answer: { model: r`$C = \sqrt{3} + 1$` }, points: 3, correction: r`On multiplie par le conjugué $\sqrt{3} + 1$ *(1 pt)* : $C = \dfrac{2(\sqrt{3} + 1)}{3 - 1}$ *(1 pt)* $= \sqrt{3} + 1$ *(1 pt)*.` },
      { section: 'Problème (8 pts)', sectionIntro: r`La ferme d'un agriculteur de Foula est un carré d'aire 500 m². Il veut la clôturer avec du grillage vendu 1 500 FCFA le mètre.`, prompt: r`1. Montre que le côté de la ferme mesure $10\sqrt{5}$ m.`, type: 'OPEN', answer: { model: r`$c = \sqrt{500} = 10\sqrt{5}$` }, points: 2, correction: r`$c^2 = 500$ et $c > 0$, donc $c = \sqrt{500}$ *(1 pt)* $= \sqrt{100 \times 5} = 10\sqrt{5}$ *(1 pt)*.` },
      { section: 'Problème (8 pts)', prompt: r`2. Donne la valeur arrondie au dixième du côté (en m).`, type: 'NUMERIC', answer: { value: 22.4, tolerance: 0.05 }, points: 2, resultPoints: 2, correction: r`$10\sqrt{5} \approx 22{,}36 \approx 22{,}4$ m.` },
      { section: 'Problème (8 pts)', prompt: r`3. Calcule le périmètre exact puis sa valeur arrondie au mètre (donne l'arrondi, en m).`, type: 'NUMERIC', answer: { value: 89, tolerance: 0.5 }, points: 2, resultPoints: 1, correction: r`$P = 4 \times 10\sqrt{5} = 40\sqrt{5}$ m *(1 pt)* $\approx 89$ m *(1 pt)*.` },
      { section: 'Problème (8 pts)', prompt: r`4. Combien coûte le grillage pour 89 m (en FCFA) ?`, type: 'NUMERIC', answer: { value: 133500 }, points: 2, resultPoints: 1, correction: r`$89 \times 1\,500 = 133\,500$ FCFA.` },
    ],
  },
};

export const triangleRectangle: SeedChapter = {
  subject: 'MATH',
  order: 4,
  title: 'Triangle rectangle',
  minutes: 660,
  officialRef: `${REF}, leçon 4`,
  objectives: [
    'Utiliser la propriété de Pythagore et sa réciproque',
    'Utiliser la relation métrique déduite de l’aire',
    'Calculer le cosinus, le sinus et la tangente d’un angle aigu',
    'Utiliser cos² + sin² = 1 et les angles complémentaires',
  ],
  courseMd: r`
> **Situation.** Pour la kermesse du lycée d'Angré, des élèves fabriquent un cerf-volant. Pour couper les baguettes et les tissus, ils doivent calculer des longueurs et des angles dans des triangles rectangles.

Dans tout le chapitre, **ABC est un triangle rectangle en A** : $[BC]$ est l'**hypoténuse** (le côté opposé à l'angle droit).

## 1. Propriété de Pythagore et réciproque
> **Propriété.** Si ABC est rectangle en A, alors $BC^2 = AB^2 + AC^2$.

> **Réciproque.** Si $BC^2 = AB^2 + AC^2$, alors le triangle ABC est rectangle en A.

Exemples :
- AB = 6 cm et AC = 8 cm : $BC^2 = 36 + 64 = 100$, donc BC = 10 cm.
- Triangle de côtés 5, 12, 13 : $13^2 = 169$ et $5^2 + 12^2 = 25 + 144 = 169$. Il est rectangle.
- Triangle de côtés 4, 5, 6 : $36 \neq 16 + 25 = 41$. Il n'est pas rectangle.

**Construire un segment de longueur $\sqrt{a}$.** Pour $\sqrt{13}$ : on construit un triangle rectangle de côtés 2 et 3 ; son hypoténuse mesure $\sqrt{4 + 9} = \sqrt{13}$.

## 2. Relation métrique déduite de l'aire
Soit H le pied de la hauteur issue de A. L'aire du triangle vaut $\dfrac{AB \times AC}{2} = \dfrac{BC \times AH}{2}$, donc :
> $$AB \times AC = BC \times AH$$

Exemple : $AH = \dfrac{6 \times 8}{10} = 4{,}8$ cm.

## 3. Cosinus, sinus et tangente d'un angle aigu
Pour l'angle aigu $\widehat{B}$ :
$$\cos \widehat{B} = \dfrac{\text{côté adjacent}}{\text{hypoténuse}} = \dfrac{AB}{BC} \qquad \sin \widehat{B} = \dfrac{\text{côté opposé}}{\text{hypoténuse}} = \dfrac{AC}{BC} \qquad \tan \widehat{B} = \dfrac{\text{côté opposé}}{\text{côté adjacent}} = \dfrac{AC}{AB}$$

🔑 Moyen mnémotechnique : **CAH – SOH – TOA**.

Exemple (AB = 6, AC = 8, BC = 10) : $\cos \widehat{B} = 0{,}6$ ; $\sin \widehat{B} = 0{,}8$ ; $\tan \widehat{B} = \dfrac{4}{3}$.

## 4. Propriétés
> Pour tout angle aigu $x$ : $0 < \cos x < 1$, $0 < \sin x < 1$, $\;\cos^2 x + \sin^2 x = 1\;$ et $\;\tan x = \dfrac{\sin x}{\cos x}$.

> **Angles complémentaires.** Dans un triangle rectangle en A, $\widehat{B} + \widehat{C} = 90°$ et $\cos \widehat{B} = \sin \widehat{C}$, $\sin \widehat{B} = \cos \widehat{C}$.

Exemple : si $\cos x = 0{,}6$ (x aigu), alors $\sin^2 x = 1 - 0{,}36 = 0{,}64$ et $\sin x = 0{,}8$.

## 5. Calculer une longueur ou un angle
- **Longueur :** $\cos \widehat{B} = \dfrac{AB}{BC}$ donne $AB = BC \times \cos \widehat{B}$. Si $BC = 10$ et $\widehat{B} = 30°$ : $AB = 10 \cos 30° \approx 8{,}66$.
- **Angle :** si $\cos \widehat{B} = 0{,}6$, la calculatrice (touche $\cos^{-1}$, mode **degrés**) donne $\widehat{B} \approx 53{,}13°$.

**Valeurs remarquables :** $\cos 60° = \sin 30° = 0{,}5$ ; $\cos 45° = \sin 45° = \dfrac{\sqrt{2}}{2}$ ; $\cos 30° = \sin 60° = \dfrac{\sqrt{3}}{2}$.
`,
  summaryMd: r`
| Outil | Formule (ABC rectangle en A) |
|---|---|
| Pythagore | $BC^2 = AB^2 + AC^2$ |
| Réciproque | $BC^2 = AB^2 + AC^2$ ⟹ rectangle en A |
| Aire | $AB \times AC = BC \times AH$ |
| CAH – SOH – TOA | $\cos = \frac{adj}{hyp}$, $\sin = \frac{opp}{hyp}$, $\tan = \frac{opp}{adj}$ |
| Relations | $\cos^2 x + \sin^2 x = 1$ ; $\tan x = \frac{\sin x}{\cos x}$ |
| Complémentaires | $\cos \widehat{B} = \sin \widehat{C}$ |

### ❌ Pièges
- L'hypoténuse est toujours en face de l'angle droit.
- Calculatrice en mode **degrés**.
- Pour la réciproque, on compare le carré du **plus grand** côté à la somme des deux autres.
`,
  questions: [
    { type: 'NUMERIC', prompt: r`ABC rectangle en A, AB = 6 et AC = 8. Calcule BC.`, answer: { value: 10 }, explanation: r`$BC^2 = 36 + 64 = 100$.` },
    { type: 'MCQ', prompt: r`Un triangle de côtés 5, 12 et 13 est-il rectangle ?`, choices: ['Oui', 'Non'], answer: { index: 0 }, explanation: r`$13^2 = 169 = 25 + 144$.` },
    { type: 'MCQ', prompt: r`Un triangle de côtés 4, 5 et 6 est-il rectangle ?`, choices: ['Oui', 'Non'], answer: { index: 1 }, explanation: r`$6^2 = 36 \neq 4^2 + 5^2 = 41$.` },
    { type: 'NUMERIC', prompt: r`ABC rectangle en A : AB = 6, AC = 8, BC = 10. H est le pied de la hauteur issue de A. Calcule AH.`, answer: { value: 4.8 }, explanation: r`$AH = \frac{AB \times AC}{BC} = \frac{48}{10}$.` },
    { type: 'MCQ', prompt: r`Dans ABC rectangle en A, $\cos \widehat{B} = $`, choices: [r`$\frac{AB}{BC}$`, r`$\frac{AC}{BC}$`, r`$\frac{AC}{AB}$`], answer: { index: 0 }, explanation: r`Côté adjacent sur hypoténuse.` },
    { type: 'MCQ', prompt: r`$\tan \widehat{B} = $`, choices: [r`$\frac{AC}{AB}$`, r`$\frac{AB}{AC}$`, r`$\frac{BC}{AB}$`], answer: { index: 0 }, explanation: r`Côté opposé sur côté adjacent.` },
    { type: 'NUMERIC', prompt: r`AB = 3 et BC = 5. Calcule $\cos \widehat{B}$.`, answer: { value: 0.6 }, explanation: r`$\frac{3}{5} = 0{,}6$.` },
    { type: 'NUMERIC', prompt: r`Si $\cos x = 0{,}6$ ($x$ aigu), combien vaut $\sin x$ ?`, answer: { value: 0.8 }, explanation: r`$\sin^2 x = 1 - 0{,}36 = 0{,}64$.` },
    { type: 'MCQ', prompt: r`Pour tout angle aigu $x$ :`, choices: [r`$\cos x + \sin x = 1$`, r`$\cos^2 x + \sin^2 x = 1$`, r`$\tan x = \cos x \times \sin x$`], answer: { index: 1 }, explanation: r`Relation fondamentale.` },
    { type: 'MCQ', prompt: r`Dans ABC rectangle en A, $\sin \widehat{C}$ est égal à :`, choices: [r`$\cos \widehat{B}$`, r`$\sin \widehat{B}$`, r`$\tan \widehat{B}$`], answer: { index: 0 }, explanation: r`$\widehat{B}$ et $\widehat{C}$ sont complémentaires.` },
    { type: 'NUMERIC', prompt: r`Mesure (en degrés) de l'angle aigu dont le cosinus vaut 0,5.`, answer: { value: 60 }, explanation: r`$\cos 60° = 0{,}5$.` },
    { type: 'NUMERIC', prompt: r`BC = 10 et $\widehat{B} = 30°$. Calcule AB arrondi au centième.`, answer: { value: 8.66, tolerance: 0.01 }, explanation: r`$AB = 10 \cos 30° \approx 8{,}66$.` },
    { type: 'MCQ', prompt: r`L'hypoténuse d'un triangle rectangle est :`, choices: ['le plus petit côté', 'le côté opposé à l’angle droit', 'la hauteur'], answer: { index: 1 }, explanation: r`C'est aussi le plus grand côté.` },
    { type: 'OPEN', prompt: r`Explique comment construire un segment de longueur $\sqrt{13}$ cm.`, answer: { model: r`Construire un triangle rectangle de côtés 2 cm et 3 cm : son hypoténuse mesure $\sqrt{4 + 9} = \sqrt{13}$ cm.`, keywords: ['triangle rectangle', '2 et 3', 'hypoténuse'] }, explanation: r`On cherche deux carrés dont la somme vaut 13 : $4 + 9$.` },
    { type: 'MCQ', prompt: r`$\cos 45°$ est égal à :`, choices: [r`$\frac{1}{2}$`, r`$\frac{\sqrt{2}}{2}$`, r`$\frac{\sqrt{3}}{2}$`], answer: { index: 1 }, explanation: r`Valeur remarquable.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Triangle rectangle',
    durationMin: 120,
    blocksNext: false,
    instructions: r`**Durée : 2 heures · Note sur 20.** Calculatrice autorisée (mode degrés). Arrondis au centième sauf indication contraire.`,
    advice: r`### 🎯 Conseils méthodologiques
1. **Repère l'hypoténuse** avant toute formule.
2. Pour Pythagore, écris l'égalité littérale avant de remplacer.
3. Pour la réciproque, calcule séparément $BC^2$ et $AB^2 + AC^2$, puis conclus.
4. En trigonométrie, écris d'abord le rapport (CAH-SOH-TOA), puis isole l'inconnue.`,
    items: [
      { section: 'Exercice 1 (4 pts)', prompt: r`1. ABC rectangle en A, AB = 5, AC = 12. Alors BC = :`, type: 'MCQ', choices: ['13', '17', '√119'], answer: { index: 0 }, points: 1, correction: r`$25 + 144 = 169 = 13^2$.` },
      { section: 'Exercice 1 (4 pts)', prompt: r`2. Le triangle de côtés 7, 24, 25 est :`, type: 'MCQ', choices: ['rectangle', 'non rectangle'], answer: { index: 0 }, points: 1, correction: r`$49 + 576 = 625 = 25^2$.` },
      { section: 'Exercice 1 (4 pts)', prompt: r`3. Si $\sin x = 0{,}8$ ($x$ aigu), alors $\cos x = $`, type: 'MCQ', choices: ['0,2', '0,6', '0,36'], answer: { index: 1 }, points: 1, correction: r`$\cos^2 x = 1 - 0{,}64 = 0{,}36$.` },
      { section: 'Exercice 1 (4 pts)', prompt: r`4. $\sin 30° = $`, type: 'MCQ', choices: ['0,5', r`$\frac{\sqrt{3}}{2}$`, '1'], answer: { index: 0 }, points: 1, correction: r`Valeur remarquable.` },
      { section: 'Exercice 2 (8 pts)', sectionIntro: r`ABC est un triangle rectangle en A tel que AB = 6 cm et AC = 8 cm. H est le pied de la hauteur issue de A.`, prompt: r`1. Calcule BC (en cm).`, type: 'NUMERIC', answer: { value: 10 }, points: 2, resultPoints: 0.5, correction: r`ABC rectangle en A, d'après la propriété de Pythagore $BC^2 = AB^2 + AC^2$ *(1 pt)* $= 100$, donc $BC = 10$ cm *(1 pt)*.` },
      { section: 'Exercice 2 (8 pts)', prompt: r`2. Calcule AH (en cm).`, type: 'NUMERIC', answer: { value: 4.8 }, points: 2, resultPoints: 0.5, correction: r`$AB \times AC = BC \times AH$ *(1 pt)*, donc $AH = \frac{48}{10} = 4{,}8$ cm *(1 pt)*.` },
      { section: 'Exercice 2 (8 pts)', prompt: r`3. Calcule $\cos \widehat{ABC}$.`, type: 'NUMERIC', answer: { value: 0.6 }, points: 2, resultPoints: 1, correction: r`$\cos \widehat{ABC} = \frac{AB}{BC} = \frac{6}{10} = 0{,}6$.` },
      { section: 'Exercice 2 (8 pts)', prompt: r`4. Donne une mesure de $\widehat{ABC}$ arrondie au degré.`, type: 'NUMERIC', answer: { value: 53, tolerance: 0.5 }, points: 2, resultPoints: 1, correction: r`$\widehat{ABC} = \cos^{-1}(0{,}6) \approx 53°$.` },
      { section: 'Problème (8 pts)', sectionIntro: r`Un peintre pose une échelle de 5 m contre le mur vertical d'une maison à Korhogo. Le pied de l'échelle est à 1,4 m du mur, sur un sol horizontal.`, prompt: r`1. Justifie que le triangle formé par le mur, le sol et l'échelle est rectangle.`, type: 'OPEN', answer: { model: 'Le mur est vertical et le sol horizontal : ils sont perpendiculaires.' }, points: 1.5, correction: r`Le mur est vertical et le sol horizontal, donc ils sont perpendiculaires : le triangle est rectangle au pied du mur.` },
      { section: 'Problème (8 pts)', prompt: r`2. Calcule la hauteur atteinte par le haut de l'échelle (en m).`, type: 'NUMERIC', answer: { value: 4.8 }, points: 2.5, resultPoints: 1, correction: r`$h^2 = 5^2 - 1{,}4^2 = 25 - 1{,}96 = 23{,}04$ *(1 pt)*, donc $h = 4{,}8$ m *(1,5 pt)*.` },
      { section: 'Problème (8 pts)', prompt: r`3. Calcule le cosinus de l'angle formé par l'échelle et le sol.`, type: 'NUMERIC', answer: { value: 0.28 }, points: 2, resultPoints: 1, correction: r`$\cos \alpha = \frac{1{,}4}{5} = 0{,}28$.` },
      { section: 'Problème (8 pts)', prompt: r`4. Pour être stable, l'angle avec le sol doit être compris entre 65° et 75°. L'échelle est-elle stable ? (donne la mesure arrondie au degré)`, type: 'NUMERIC', answer: { value: 74, tolerance: 0.5 }, points: 2, resultPoints: 1, correction: r`$\alpha = \cos^{-1}(0{,}28) \approx 74°$ *(1 pt)*, compris entre 65° et 75° : l'échelle est stable *(1 pt)*.` },
    ],
  },
};
