import { SeedChapter } from '../types';

const r = String.raw;
const REF = 'Programme éducatif Mathématiques 3e (DPFC) — progression 2026-2027';

export const applicationsAffines: SeedChapter = {
  subject: 'MATH',
  order: 13,
  title: 'Applications affines',
  minutes: 300,
  officialRef: `${REF}, leçon 13`,
  objectives: [
    'Reconnaître une application affine, une application linéaire',
    'Calculer une image, un antécédent ; déterminer une application affine connaissant deux images',
    'Représenter graphiquement une application affine et lire son sens de variation',
    'Comparer des tarifs à l’aide d’applications affines',
  ],
  courseMd: r`
> **Situation.** Pour la kermesse d'un lycée de Korhogo, il faut louer une sono :
> - fournisseur 1, tarif A : 10 000 FCFA de caution + 5 000 FCFA par heure ;
> - fournisseur 1, tarif B : 50 000 FCFA forfaitaires ;
> - fournisseur 2 : 7 000 FCFA par heure.
> Selon la durée $x$ (en heures), quel tarif choisir ?

## 1. Définitions
> Une **application affine** est une application $f$ de $\mathbb{R}$ dans $\mathbb{R}$ de la forme $f(x) = ax + b$ ($a$ et $b$ réels).
> - Si $b = 0$ : $f(x) = ax$ est une **application linéaire** (situation de **proportionnalité**).
> - Si $a = 0$ : $f(x) = b$ est une application **constante**.

Situation : $A(x) = 5\,000x + 10\,000$ (affine), $B(x) = 50\,000$ (constante), $C(x) = 7\,000x$ (linéaire).

## 2. Image et antécédent
- L'**image** de 3 par $f(x) = 2x - 1$ est $f(3) = 5$.
- Un **antécédent** de 9 est le nombre $a$ tel que $f(a) = 9$ : $2a - 1 = 9 \iff a = 5$.

## 3. Déterminer une application affine
> Si $f(x_1) = y_1$ et $f(x_2) = y_2$ avec $x_1 \neq x_2$, alors $a = \dfrac{y_2 - y_1}{x_2 - x_1}$, puis on calcule $b$.

Exemple : $f(1) = 3$ et $f(4) = 9$ : $a = \frac{6}{3} = 2$ ; $3 = 2 + b$ donc $b = 1$ ; $f(x) = 2x + 1$.

Pour une application **linéaire**, une seule image suffit : si $g(5) = 15$, alors $g(x) = 3x$.

**Propriétés de linéarité** ($g$ linéaire) : $g(x + y) = g(x) + g(y)$ et $g(kx) = k\,g(x)$. Exemple : $g(2) = 6$ et $g(3) = 9$ donnent $g(5) = 15$ et $g(10) = 30$.

## 4. Représentation graphique
> - La représentation graphique d'une application affine est une **droite** d'équation $y = ax + b$.
> - Celle d'une application linéaire est une droite qui **passe par l'origine**.

On place deux points, par exemple $(0\,;\,b)$ et un autre.

## 5. Sens de variation
> - Si $a > 0$, $f$ est **croissante** ; si $a < 0$, $f$ est **décroissante** ; si $a = 0$, $f$ est **constante**.

Justification ($a > 0$) : si $x_1 < x_2$, alors $ax_1 < ax_2$ et $f(x_1) < f(x_2)$.
Usage : $f(x) = -2x + 5$ est décroissante, donc $f(\sqrt{2}) > f(\sqrt{3})$ sans calcul.

## 6. Retour à la situation
- $C(x) < A(x) \iff 7\,000x < 5\,000x + 10\,000 \iff x < 5$.
- $A(x) < B(x) \iff 5\,000x + 10\,000 < 50\,000 \iff x < 8$.
Conclusion : moins de 5 h → fournisseur 2 ; entre 5 h et 8 h → tarif A ; plus de 8 h → forfait B. On le voit aussi sur le graphique : la droite la plus **basse** donne le tarif le plus avantageux.
`,
  summaryMd: r`
- Affine : $f(x) = ax + b$ ; linéaire : $f(x) = ax$ (proportionnalité) ; constante : $f(x) = b$.
- $a = \frac{f(x_2) - f(x_1)}{x_2 - x_1}$.
- Graphique : droite ; linéaire ⟹ passe par O.
- $a > 0$ croissante ; $a < 0$ décroissante.
- Linéarité : $g(x + y) = g(x) + g(y)$ ; $g(kx) = k\,g(x)$.
- Comparer des tarifs : résoudre une inéquation ou lire la droite la plus basse.
`,
  questions: [
    { type: 'MCQ', prompt: r`$f(x) = 3x$ est une application :`, choices: ['linéaire', 'affine non linéaire', 'constante'], answer: { index: 0 }, explanation: r`$b = 0$.` },
    { type: 'MCQ', prompt: r`$f(x) = -2x + 5$ est :`, choices: ['croissante', 'décroissante', 'constante'], answer: { index: 1 }, explanation: r`$a = -2 < 0$.` },
    { type: 'NUMERIC', prompt: r`Image de 3 par $f(x) = 2x - 1$ ?`, answer: { value: 5 }, explanation: r`$6 - 1$.` },
    { type: 'NUMERIC', prompt: r`Antécédent de 9 par $f(x) = 2x - 1$ ?`, answer: { value: 5 }, explanation: r`$2a - 1 = 9$.` },
    { type: 'NUMERIC', prompt: r`$f$ affine avec $f(1) = 3$ et $f(4) = 9$. Calcule $a$.`, answer: { value: 2 }, explanation: r`$\frac{9 - 3}{4 - 1}$.` },
    { type: 'NUMERIC', prompt: r`Avec la question précédente, calcule $b$.`, answer: { value: 1 }, explanation: r`$3 = 2 + b$.` },
    { type: 'NUMERIC', prompt: r`$g$ linéaire et $g(5) = 15$. Calcule $g(7)$.`, answer: { value: 21 }, explanation: r`$g(x) = 3x$.` },
    { type: 'MCQ', prompt: r`La représentation graphique d'une application linéaire :`, choices: ['passe par l’origine', 'est parallèle à l’axe des abscisses', 'est une courbe'], answer: { index: 0 }, explanation: r`$f(0) = 0$.` },
    { type: 'NUMERIC', prompt: r`$g$ linéaire, $g(2) = 6$ et $g(3) = 9$. Calcule $g(5)$ par linéarité.`, answer: { value: 15 }, explanation: r`$g(2 + 3) = g(2) + g(3)$.` },
    { type: 'NUMERIC', prompt: r`Tarif $A(x) = 5\,000x + 10\,000$. Prix pour 6 heures ?`, answer: { value: 40000 }, explanation: r`$30\,000 + 10\,000$.` },
    { type: 'NUMERIC', prompt: r`Pour quelle durée $x$ (h) a-t-on $5\,000x + 10\,000 = 7\,000x$ ?`, answer: { value: 5 }, explanation: r`$10\,000 = 2\,000x$.` },
    { type: 'MCQ', prompt: r`$f(x) = 4$ est une application :`, choices: ['linéaire', 'constante', 'décroissante'], answer: { index: 1 }, explanation: r`$a = 0$.` },
    { type: 'MCQ', prompt: r`$f$ est croissante. Si $2 < 3$ alors :`, choices: [r`$f(2) < f(3)$`, r`$f(2) > f(3)$`, r`$f(2) = f(3)$`], answer: { index: 0 }, explanation: r`Une fonction croissante conserve l'ordre.` },
    { type: 'MCQ', prompt: r`La droite d'équation $y = 2x + 1$ coupe l'axe des ordonnées au point :`, choices: [r`$(0\,;\,1)$`, r`$(1\,;\,0)$`, r`$(0\,;\,2)$`], answer: { index: 0 }, explanation: r`Pour $x = 0$, $y = 1$.` },
    { type: 'OPEN', prompt: r`Le prix de l'attiéké est proportionnel à la quantité : 3 kg coûtent 1 500 FCFA. Traduis par une application linéaire.`, answer: { model: r`$p(x) = 500x$`, keywords: ['500x'] }, explanation: r`Coefficient $\frac{1\,500}{3} = 500$.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Applications affines',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.** Le plan est muni d'un repère orthonormé.`,
    advice: r`### 🎯 Conseils méthodologiques
1. Pour déterminer $f$, calcule d'abord $a$, puis $b$ ; **vérifie** avec la deuxième valeur.
2. Le sens de variation se lit sur le **signe de $a$**.
3. Pour comparer des tarifs, écris l'**inéquation** et conclus par une phrase.`,
    items: [
      { section: 'Exercice 1 (6 pts)', sectionIntro: r`$f$ est une application affine telle que $f(-1) = -5$ et $f(2) = 4$.`, prompt: r`1. Détermine $a$.`, type: 'NUMERIC', answer: { value: 3 }, points: 2, resultPoints: 1, correction: r`$a = \frac{4 - (-5)}{2 - (-1)} = \frac{9}{3} = 3$.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Détermine $b$.`, type: 'NUMERIC', answer: { value: -2 }, points: 2, resultPoints: 1, correction: r`$4 = 6 + b$, $b = -2$ ; $f(x) = 3x - 2$.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. $f$ est :`, type: 'MCQ', choices: ['croissante', 'décroissante', 'constante'], answer: { index: 0 }, points: 2, correction: r`$a = 3 > 0$.` },
      { section: 'Problème (14 pts)', sectionIntro: r`Pour une kermesse, des élèves louent une sono :
- tarif A : 10 000 FCFA de caution + 5 000 FCFA par heure ;
- tarif B : 50 000 FCFA forfaitaires ;
- tarif C : 7 000 FCFA par heure.
On note $x$ la durée en heures.`, prompt: r`1. Exprime $A(x)$, $B(x)$ et $C(x)$. Laquelle de ces applications est linéaire ?`, type: 'OPEN', answer: { model: r`$A(x) = 5\,000x + 10\,000$ ; $B(x) = 50\,000$ ; $C(x) = 7\,000x$ (linéaire)` }, points: 3, correction: r`Une expression juste : 0,5 pt chacune (1,5 pt) ; $C$ est linéaire *(1,5 pt)*.` },
      { section: 'Problème (14 pts)', prompt: r`2. Calcule le prix du tarif A pour 4 heures (en FCFA).`, type: 'NUMERIC', answer: { value: 30000 }, points: 2, resultPoints: 2, correction: r`$20\,000 + 10\,000$.` },
      { section: 'Problème (14 pts)', prompt: r`3. Résous $C(x) < A(x)$ (donne la valeur limite de $x$).`, type: 'NUMERIC', answer: { value: 5 }, points: 3, resultPoints: 1, correction: r`$7\,000x < 5\,000x + 10\,000 \iff 2\,000x < 10\,000 \iff x < 5$.` },
      { section: 'Problème (14 pts)', prompt: r`4. Résous $A(x) < B(x)$ (donne la valeur limite de $x$).`, type: 'NUMERIC', answer: { value: 8 }, points: 3, resultPoints: 1, correction: r`$5\,000x + 10\,000 < 50\,000 \iff x < 8$.` },
      { section: 'Problème (14 pts)', prompt: r`5. La kermesse dure 6 heures. Quel tarif choisir ? Justifie.`, type: 'OPEN', answer: { model: 'Tarif A (40 000 FCFA)' }, points: 3, correction: r`$A(6) = 40\,000$, $B(6) = 50\,000$, $C(6) = 42\,000$ *(2 pts)* : le tarif A est le plus avantageux *(1 pt)*.` },
    ],
  },
};

export const equationsR2: SeedChapter = {
  subject: 'MATH',
  order: 14,
  title: 'Équations et inéquations du premier degré dans ℝ × ℝ',
  minutes: 300,
  officialRef: `${REF}, leçon 14`,
  objectives: [
    'Vérifier qu’un couple est solution d’une équation ou d’une inéquation dans ℝ × ℝ',
    'Résoudre un système de deux équations par substitution, par combinaison et graphiquement',
    'Représenter graphiquement l’ensemble des solutions d’une inéquation ou d’un système d’inéquations',
    'Traduire un problème par un système',
  ],
  courseMd: r`
> **Situation.** Pour la fête de fin d'année d'un collège d'Abengourou, les organisateurs ont commandé 20 litres de jus pour 9 200 FCFA : du **bissap** à 400 FCFA le litre et du **gnamankoudji** à 500 FCFA le litre. Combien de litres de chaque jus ?
> Avec $x$ litres de bissap et $y$ litres de gnamankoudji : $\begin{cases} x + y = 20 \\ 400x + 500y = 9\,200 \end{cases}$

## 1. Équation du premier degré dans ℝ × ℝ
Une équation du type $ax + by = c$ ($a$, $b$ non tous deux nuls) a pour solutions des **couples** $(x\,;\,y)$.
Exemple : $(8\,;\,12)$ est solution de $x + y = 20$ car $8 + 12 = 20$ ; $(5\,;\,10)$ ne l'est pas.
L'ensemble des solutions est représenté par une **droite**.

## 2. Systèmes de deux équations
### Par substitution
On exprime une inconnue en fonction de l'autre dans une équation, puis on remplace dans l'autre.
$y = 20 - x$, donc $400x + 500(20 - x) = 9\,200 \iff -100x = -800 \iff x = 8$, puis $y = 12$.

### Par combinaison
On multiplie les équations pour éliminer une inconnue en les additionnant.
$\begin{cases} 2x + 3y = 13 \\ 5x - 3y = 1 \end{cases}$ : en additionnant, $7x = 14$, donc $x = 2$, puis $3y = 9$, $y = 3$. $S = \{(2\,;\,3)\}$.

### Graphiquement
Chaque équation est une droite ; la solution est le **point d'intersection**. Deux droites parallèles distinctes : pas de solution.

✅ **Toujours vérifier** : $8 + 12 = 20$ et $400 \times 8 + 500 \times 12 = 3\,200 + 6\,000 = 9\,200$.

Réponse : 8 litres de bissap et 12 litres de gnamankoudji.

## 3. Inéquations dans ℝ × ℝ
L'ensemble des solutions de $ax + by + c > 0$ est un **demi-plan** limité par la droite $ax + by + c = 0$.

**Méthode :**
1. Tracer la droite (en **pointillés** si l'inégalité est stricte, en trait plein sinon).
2. Choisir un point test non situé sur la droite (souvent $O(0\,;\,0)$).
3. Si ses coordonnées vérifient l'inéquation, le demi-plan solution est celui qui contient ce point ; sinon c'est l'autre.
4. **Hachurer la partie qui n'est pas solution** (convention usuelle).

Exemple : $x + y - 4 < 0$. Pour O : $0 + 0 - 4 = -4 < 0$ ✔. Le demi-plan solution contient O.

## 4. Système de deux inéquations
On représente chaque demi-plan ; l'ensemble des solutions est leur **intersection** (la zone non hachurée).
Exemple : $\begin{cases} x + y \leq 20 \\ x \geq 0,\; y \geq 0 \end{cases}$ décrit les quantités possibles de jus quand on ne dépasse pas 20 litres.
`,
  summaryMd: r`
- Solution d'une équation dans ℝ × ℝ : un **couple** $(x\,;\,y)$.
- **Substitution** : isoler une inconnue puis remplacer.
- **Combinaison** : multiplier puis additionner pour éliminer une inconnue.
- **Graphique** : intersection de deux droites.
- Inéquation : demi-plan ; point test ; pointillés si inégalité stricte.
- Toujours **vérifier** la solution dans les deux équations.
`,
  questions: [
    { type: 'MCQ', prompt: r`$(8\,;\,12)$ est-il solution de $x + y = 20$ ?`, choices: ['Oui', 'Non'], answer: { index: 0 }, explanation: r`$8 + 12 = 20$.` },
    { type: 'MCQ', prompt: r`$(5\,;\,10)$ est-il solution de $x + y = 20$ ?`, choices: ['Oui', 'Non'], answer: { index: 1 }, explanation: r`$15 \neq 20$.` },
    { type: 'NUMERIC', prompt: r`Système $x + y = 20$ et $400x + 500y = 9\,200$ : valeur de $x$ ?`, answer: { value: 8 }, explanation: r`Substitution : $-100x = -800$.` },
    { type: 'NUMERIC', prompt: r`Système $2x + 3y = 13$ et $5x - 3y = 1$ : valeur de $x$ ?`, answer: { value: 2 }, explanation: r`Combinaison : $7x = 14$.` },
    { type: 'NUMERIC', prompt: r`Même système : valeur de $y$ ?`, answer: { value: 3 }, explanation: r`$4 + 3y = 13$.` },
    { type: 'MCQ', prompt: r`Graphiquement, la solution d'un système de deux équations est :`, choices: ['le point d’intersection des deux droites', 'un demi-plan', 'l’origine du repère'], answer: { index: 0 }, explanation: r`Un point commun aux deux droites.` },
    { type: 'MCQ', prompt: r`Si les deux droites sont parallèles et distinctes, le système :`, choices: ['a une solution', 'n’a pas de solution', 'a une infinité de solutions'], answer: { index: 1 }, explanation: r`Aucun point commun.` },
    { type: 'MCQ', prompt: r`$O(0\,;\,0)$ vérifie-t-il $x + y - 4 < 0$ ?`, choices: ['Oui', 'Non'], answer: { index: 0 }, explanation: r`$-4 < 0$.` },
    { type: 'MCQ', prompt: r`L'ensemble des solutions d'une inéquation $ax + by + c > 0$ est :`, choices: ['une droite', 'un demi-plan', 'un point'], answer: { index: 1 }, explanation: r`Limité par la droite $ax + by + c = 0$.` },
    { type: 'MCQ', prompt: r`Pour une inégalité stricte, la droite frontière est tracée :`, choices: ['en trait plein', 'en pointillés'], answer: { index: 1 }, explanation: r`Ses points ne sont pas solutions.` },
    { type: 'NUMERIC', prompt: r`Système $x - y = 1$ et $x + y = 7$ : valeur de $x$ ?`, answer: { value: 4 }, explanation: r`En additionnant : $2x = 8$.` },
    { type: 'NUMERIC', prompt: r`Système $y = 2x$ et $x + y = 9$ : valeur de $y$ ?`, answer: { value: 6 }, explanation: r`$3x = 9$, $x = 3$.` },
    { type: 'MCQ', prompt: r`Le couple $(1\,;\,2)$ vérifie-t-il $3x - y \geq 2$ ?`, choices: ['Oui', 'Non'], answer: { index: 1 }, explanation: r`$3 - 2 = 1 < 2$.` },
    { type: 'NUMERIC', prompt: r`Un cahier et deux stylos coûtent 700 F ; deux cahiers et un stylo coûtent 800 F. Prix d'un cahier ?`, answer: { value: 300 }, explanation: r`$c + 2s = 700$ et $2c + s = 800$ : $c = 300$, $s = 200$.` },
    { type: 'OPEN', prompt: r`Explique la méthode du point test.`, answer: { model: 'On choisit un point hors de la droite ; s’il vérifie l’inéquation, son demi-plan est solution, sinon c’est l’autre.', keywords: ['point', 'demi-plan', 'vérifie'] }, explanation: r`On prend souvent O.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Équations et inéquations dans ℝ × ℝ',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.** Le plan est muni d'un repère orthonormé. Les représentations graphiques peuvent être photographiées.`,
    advice: r`### 🎯 Conseils méthodologiques
1. Choisis la méthode la plus simple : **substitution** si une inconnue est facile à isoler, sinon **combinaison**.
2. **Vérifie** toujours le couple trouvé dans les deux équations.
3. Pour une inéquation : trace la droite, utilise un **point test**, hachure la partie non solution.`,
    items: [
      { section: 'Exercice 1 (4 pts)', prompt: r`1. Le couple $(2\,;\,-1)$ est solution de :`, type: 'MCQ', choices: [r`$x + y = 1$`, r`$x - y = 1$`, r`$2x + y = 5$`], answer: { index: 0 }, points: 2, correction: r`$2 - 1 = 1$.` },
      { section: 'Exercice 1 (4 pts)', prompt: r`2. L'ensemble des solutions de $2x - y + 3 \geq 0$ est :`, type: 'MCQ', choices: ['une droite', 'un demi-plan', 'un segment'], answer: { index: 1 }, points: 2, correction: r`Demi-plan limité par la droite $2x - y + 3 = 0$.` },
      { section: 'Exercice 2 (6 pts)', sectionIntro: r`Résous par combinaison le système $\begin{cases} 3x + 2y = 16 \\ x - 2y = 0 \end{cases}$`, prompt: r`1. Calcule $x$.`, type: 'NUMERIC', answer: { value: 4 }, points: 3, resultPoints: 1, correction: r`En additionnant : $4x = 16$, $x = 4$.` },
      { section: 'Exercice 2 (6 pts)', prompt: r`2. Calcule $y$.`, type: 'NUMERIC', answer: { value: 2 }, points: 3, resultPoints: 1, correction: r`$4 - 2y = 0$, $y = 2$. Vérification : $12 + 4 = 16$ ✔.` },
      { section: 'Problème (10 pts)', sectionIntro: r`Pour la fête de fin d'année, les organisateurs commandent 20 litres de jus pour 9 200 FCFA : du bissap à 400 FCFA le litre et du gnamankoudji à 500 FCFA le litre. On note $x$ le nombre de litres de bissap et $y$ celui de gnamankoudji.`, prompt: r`1. Traduis la situation par un système de deux équations.`, type: 'OPEN', answer: { model: r`$x + y = 20$ ; $400x + 500y = 9\,200$` }, points: 3, correction: r`$x + y = 20$ *(1,5 pt)* ; $400x + 500y = 9\,200$ *(1,5 pt)*.` },
      { section: 'Problème (10 pts)', prompt: r`2. Résous le système par substitution : nombre de litres de bissap ?`, type: 'NUMERIC', answer: { value: 8 }, points: 3, resultPoints: 1, correction: r`$y = 20 - x$ ; $400x + 10\,000 - 500x = 9\,200$ ; $x = 8$.` },
      { section: 'Problème (10 pts)', prompt: r`3. Nombre de litres de gnamankoudji ?`, type: 'NUMERIC', answer: { value: 12 }, points: 2, resultPoints: 1, correction: r`$y = 20 - 8 = 12$.` },
      { section: 'Problème (10 pts)', prompt: r`4. Vérifie ta solution et réponds au problème par une phrase.`, type: 'OPEN', answer: { model: '8 L de bissap et 12 L de gnamankoudji' }, points: 2, correction: r`$8 + 12 = 20$ et $3\,200 + 6\,000 = 9\,200$ *(1 pt)* ; phrase de conclusion *(1 pt)*.` },
    ],
  },
};
