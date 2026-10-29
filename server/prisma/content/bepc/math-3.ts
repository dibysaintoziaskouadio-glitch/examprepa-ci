import { SeedChapter } from '../types';

const r = String.raw;
const REF = 'Programme éducatif Mathématiques 3e (DPFC) — progression 2026-2027';

export const pyramidesCones: SeedChapter = {
  subject: 'MATH',
  order: 9,
  title: 'Pyramides et cônes',
  minutes: 540,
  officialRef: `${REF}, leçon 9`,
  objectives: [
    'Décrire une pyramide régulière et un cône de révolution',
    'Construire leurs patrons (angle de développement du cône)',
    'Calculer aires latérales, aires totales et volumes',
    'Utiliser les propriétés de réduction (sections, troncs)',
  ],
  courseMd: r`
> **Situation.** Le toit d'une case traditionnelle du Nord a la forme d'un cône de révolution de rayon 3 m et de hauteur 4 m. Quelle surface de paille faut-il pour le couvrir ?

## 1. La pyramide régulière
> Une **pyramide régulière** a pour base un **polygone régulier** (triangle équilatéral, carré…) et sa **hauteur** passe par le **centre** de la base.

- Le point au-dessus de la base est le **sommet** S ; les segments qui joignent S aux sommets de la base sont les **arêtes latérales**.
- Les **faces latérales** sont des triangles isocèles superposables.
- L'**apothème** est la hauteur d'une face latérale, issue de S.

> $$\text{Aire latérale} = \dfrac{\text{périmètre de la base} \times \text{apothème}}{2} \qquad V = \dfrac{\text{aire de la base} \times h}{3}$$

**Exemple.** Pyramide régulière à base carrée de côté 6 cm et de hauteur 4 cm.
- L'apothème joint S au milieu d'un côté de la base, situé à 3 cm du centre : $a = \sqrt{4^2 + 3^2} = 5$ cm.
- Aire latérale : $\dfrac{24 \times 5}{2} = 60$ cm². Aire totale : $60 + 36 = 96$ cm².
- Volume : $\dfrac{36 \times 4}{3} = 48$ cm³.

## 2. Le cône de révolution
> Un **cône de révolution** est obtenu en faisant tourner un triangle rectangle autour d'un des côtés de l'angle droit.

- Sa base est un disque de rayon $r$ ; sa hauteur $h$ joint le sommet au centre de la base.
- Une **génératrice** joint le sommet à un point du cercle de base ; sa longueur $g$ vérifie $g^2 = r^2 + h^2$.

> $$\text{Aire latérale} = \pi r g \qquad V = \dfrac{\pi r^2 h}{3}$$

**Patron.** La surface latérale est un **secteur circulaire** de rayon $g$. Son arc a pour longueur le périmètre de la base $2\pi r$, d'où l'**angle de développement** :
> $$\alpha = \dfrac{360 \times r}{g} \text{ (en degrés)}$$

**Exemple (toit de la case).** $r = 3$ m, $h = 4$ m, donc $g = 5$ m.
- Aire latérale : $\pi \times 3 \times 5 = 15\pi \approx 47{,}1$ m² de paille.
- Volume sous le toit : $\dfrac{\pi \times 9 \times 4}{3} = 12\pi \approx 37{,}7$ m³.
- Angle de développement : $\alpha = \dfrac{360 \times 3}{5} = 216°$.

## 3. Réduction : sections et troncs
On coupe une pyramide (ou un cône) par un plan **parallèle à la base**. La petite pyramide (ou le petit cône) obtenue est une **réduction** de la grande, de coefficient $k = \dfrac{h'}{h}$ ($0 < k < 1$).

> Les longueurs sont multipliées par $k$, les **aires** par $k^2$, les **volumes** par $k^3$.

Le **tronc** est la partie restante : $V_{\text{tronc}} = V - V_{\text{petite}}$.

**Exemple.** On coupe la pyramide de l'exemple à mi-hauteur : $k = \dfrac{1}{2}$. Petite pyramide : $48 \times \dfrac{1}{8} = 6$ cm³. Tronc : $48 - 6 = 42$ cm³. Aire de la section : $36 \times \dfrac{1}{4} = 9$ cm².
`,
  summaryMd: r`
| | Pyramide régulière | Cône de révolution |
|---|---|---|
| Aire latérale | $\frac{\text{périmètre base} \times \text{apothème}}{2}$ | $\pi r g$ |
| Volume | $\frac{\text{aire base} \times h}{3}$ | $\frac{\pi r^2 h}{3}$ |
| Relation | apothème$^2$ = $h^2$ + (distance centre–milieu d'un côté)$^2$ | $g^2 = r^2 + h^2$ |

- Angle de développement du cône : $\alpha = \frac{360 r}{g}$.
- Réduction de coefficient $k$ : longueurs × $k$, aires × $k^2$, volumes × $k^3$.
- Tronc = grand solide − petit solide.
`,
  questions: [
    { type: 'MCQ', prompt: r`La base d'une pyramide régulière est :`, choices: ['un polygone quelconque', 'un polygone régulier', 'toujours un triangle'], answer: { index: 1 }, explanation: r`Et la hauteur passe par le centre de la base.` },
    { type: 'NUMERIC', prompt: r`Volume (cm³) d'une pyramide de base 36 cm² et de hauteur 4 cm.`, answer: { value: 48 }, explanation: r`$\frac{36 \times 4}{3}$.` },
    { type: 'NUMERIC', prompt: r`Aire latérale (cm²) d'une pyramide régulière à base carrée de côté 6 cm et d'apothème 5 cm.`, answer: { value: 60 }, explanation: r`$\frac{24 \times 5}{2}$.` },
    { type: 'NUMERIC', prompt: r`Cône : $r = 3$ et $h = 4$. Calcule la génératrice $g$.`, answer: { value: 5 }, explanation: r`$g^2 = 9 + 16$.` },
    { type: 'MCQ', prompt: r`L'aire latérale d'un cône de révolution est :`, choices: [r`$\pi r^2$`, r`$\pi r g$`, r`$2\pi r h$`], answer: { index: 1 }, explanation: r`Formule du cours.` },
    { type: 'MCQ', prompt: r`Le volume d'un cône de révolution est :`, choices: [r`$\pi r^2 h$`, r`$\frac{\pi r^2 h}{3}$`, r`$\frac{\pi r g}{3}$`], answer: { index: 1 }, explanation: r`Un tiers du cylindre de même base et même hauteur.` },
    { type: 'NUMERIC', prompt: r`Angle de développement (en degrés) d'un cône de rayon 3 cm et de génératrice 5 cm.`, answer: { value: 216 }, explanation: r`$\frac{360 \times 3}{5}$.` },
    { type: 'NUMERIC', prompt: r`Une réduction de coefficient $\frac{1}{2}$ multiplie les volumes par… (donne le nombre décimal)`, answer: { value: 0.125 }, explanation: r`$k^3 = \frac{1}{8}$.` },
    { type: 'NUMERIC', prompt: r`Une réduction de coefficient $\frac{1}{3}$ multiplie les aires par… (fraction ou décimal)`, answer: { value: 0.1111, tolerance: 0.001 }, explanation: r`$k^2 = \frac{1}{9}$.` },
    { type: 'NUMERIC', prompt: r`Pyramide de volume 48 cm³ coupée à mi-hauteur parallèlement à la base. Volume du tronc ?`, answer: { value: 42 }, explanation: r`$48 - 48 \times \frac{1}{8} = 42$.` },
    { type: 'MCQ', prompt: r`L'apothème d'une pyramide régulière est :`, choices: ['une arête latérale', 'la hauteur d’une face latérale issue du sommet', 'la hauteur de la pyramide'], answer: { index: 1 }, explanation: r`Définition.` },
    { type: 'MCQ', prompt: r`Le patron de la surface latérale d'un cône est :`, choices: ['un triangle', 'un secteur circulaire', 'un rectangle'], answer: { index: 1 }, explanation: r`De rayon $g$.` },
    { type: 'NUMERIC', prompt: r`Volume d'un cône de rayon 3 et de hauteur 4, arrondi au dixième (π ≈ 3,14159).`, answer: { value: 37.7, tolerance: 0.05 }, explanation: r`$12\pi \approx 37{,}7$.` },
    { type: 'MCQ', prompt: r`Les faces latérales d'une pyramide régulière sont :`, choices: ['des triangles isocèles superposables', 'des carrés', 'des triangles rectangles'], answer: { index: 0 }, explanation: r`Propriété de la pyramide régulière.` },
    { type: 'OPEN', prompt: r`Explique pourquoi l'arc du patron d'un cône a pour longueur $2\pi r$.`, answer: { model: 'Quand on referme le patron, l’arc forme le cercle de base, de périmètre 2πr.', keywords: ['cercle de base', 'périmètre'] }, explanation: r`C'est ce qui donne la formule de l'angle de développement.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Pyramides et cônes',
    durationMin: 120,
    blocksNext: false,
    instructions: r`**Durée : 2 heures · Note sur 20.** On prendra $\pi \approx 3{,}14$.`,
    advice: r`### 🎯 Conseils méthodologiques
1. Fais un **schéma** et repère le triangle rectangle utile (hauteur, apothème ou génératrice).
2. Écris la formule **avant** de remplacer.
3. Pour une réduction, calcule d'abord $k$, puis utilise $k^2$ (aires) ou $k^3$ (volumes).
4. Vérifie les **unités** : cm² pour les aires, cm³ pour les volumes.`,
    items: [
      { section: 'Exercice 1 (4 pts)', prompt: r`1. Le volume d'une pyramide de base $B$ et de hauteur $h$ est :`, type: 'MCQ', choices: [r`$B \times h$`, r`$\frac{B \times h}{3}$`, r`$\frac{B \times h}{2}$`], answer: { index: 1 }, points: 1, correction: r`Formule du cours.` },
      { section: 'Exercice 1 (4 pts)', prompt: r`2. Pour un cône, $g$, $r$ et $h$ vérifient :`, type: 'MCQ', choices: [r`$g = r + h$`, r`$g^2 = r^2 + h^2$`, r`$h^2 = g^2 + r^2$`], answer: { index: 1 }, points: 1, correction: r`Pythagore dans le triangle (sommet, centre, point du cercle).` },
      { section: 'Exercice 1 (4 pts)', prompt: r`3. Une réduction de coefficient $\frac{2}{3}$ multiplie les aires par :`, type: 'MCQ', choices: [r`$\frac{2}{3}$`, r`$\frac{4}{9}$`, r`$\frac{8}{27}$`], answer: { index: 1 }, points: 1, correction: r`$k^2$.` },
      { section: 'Exercice 1 (4 pts)', prompt: r`4. L'aire latérale d'un cône de rayon 2 cm et de génératrice 5 cm est :`, type: 'MCQ', choices: [r`$10\pi$ cm²`, r`$20\pi$ cm²`, r`$4\pi$ cm²`], answer: { index: 0 }, points: 1, correction: r`$\pi \times 2 \times 5$.` },
      { section: 'Exercice 2 (8 pts)', sectionIntro: r`SABCD est une pyramide régulière à base carrée ABCD de côté 6 cm et de hauteur SO = 4 cm (O centre du carré). I est le milieu de [BC].`, prompt: r`1. Calcule l'apothème SI (en cm).`, type: 'NUMERIC', answer: { value: 5 }, points: 2, resultPoints: 1, correction: r`SOI rectangle en O avec OI = 3 cm : $SI^2 = 16 + 9 = 25$, SI = 5 cm.` },
      { section: 'Exercice 2 (8 pts)', prompt: r`2. Calcule l'aire latérale (en cm²).`, type: 'NUMERIC', answer: { value: 60 }, points: 2, resultPoints: 1, correction: r`$\frac{24 \times 5}{2} = 60$ cm².` },
      { section: 'Exercice 2 (8 pts)', prompt: r`3. Calcule le volume (en cm³).`, type: 'NUMERIC', answer: { value: 48 }, points: 2, resultPoints: 1, correction: r`$\frac{36 \times 4}{3} = 48$ cm³.` },
      { section: 'Exercice 2 (8 pts)', prompt: r`4. On coupe la pyramide par un plan parallèle à la base, à 1 cm du sommet. Calcule le volume de la petite pyramide (en cm³).`, type: 'NUMERIC', answer: { value: 0.75 }, points: 2, resultPoints: 1, correction: r`$k = \frac{1}{4}$ *(1 pt)* ; $V' = 48 \times \frac{1}{64} = 0{,}75$ cm³ *(1 pt)*.` },
      { section: 'Problème (8 pts)', sectionIntro: r`Le toit d'une case traditionnelle a la forme d'un cône de révolution de rayon 3 m et de hauteur 4 m. La paille coûte 2 500 FCFA le m².`, prompt: r`1. Calcule la génératrice du toit (en m).`, type: 'NUMERIC', answer: { value: 5 }, points: 2, resultPoints: 1, correction: r`$g^2 = 3^2 + 4^2 = 25$, $g = 5$ m.` },
      { section: 'Problème (8 pts)', prompt: r`2. Calcule l'aire latérale du toit (en m², avec π ≈ 3,14).`, type: 'NUMERIC', answer: { value: 47.1 }, points: 2, resultPoints: 1, correction: r`$\pi \times 3 \times 5 = 15\pi \approx 47{,}1$ m².` },
      { section: 'Problème (8 pts)', prompt: r`3. Quel est le prix de la paille (en FCFA) ?`, type: 'NUMERIC', answer: { value: 117750 }, points: 2, resultPoints: 1, correction: r`$47{,}1 \times 2\,500 = 117\,750$ FCFA.` },
      { section: 'Problème (8 pts)', prompt: r`4. Calcule l'angle de développement du patron du toit (en degrés).`, type: 'NUMERIC', answer: { value: 216 }, points: 2, resultPoints: 1, correction: r`$\alpha = \frac{360 \times 3}{5} = 216°$.` },
    ],
  },
};

export const statistique: SeedChapter = {
  subject: 'MATH',
  order: 10,
  title: 'Statistique',
  minutes: 540,
  officialRef: `${REF}, leçon 10`,
  objectives: [
    'Regrouper des données en classes de même amplitude',
    'Dresser les tableaux des effectifs et fréquences cumulés croissants',
    'Calculer la moyenne et la médiane ; déterminer la classe modale',
    'Construire un diagramme circulaire et un polygone des effectifs cumulés',
  ],
  courseMd: r`
> **Situation.** Pour un exposé sur le niveau de vie dans un quartier de San-Pédro, les élèves de 3ᵉ disposent des revenus annuels de 100 habitants. Pour les exploiter, ils doivent les **regrouper en classes** et calculer des **indicateurs** (moyenne, médiane).

## 1. Vocabulaire
- La **population** est l'ensemble étudié ; un **individu** en est un élément ; le **caractère** est ce qu'on observe (quantitatif discret, quantitatif continu, qualitatif).
- L'**effectif** d'une modalité est le nombre d'individus correspondants ; la **fréquence** est $f = \dfrac{\text{effectif}}{\text{effectif total}}$ (souvent en %).
- Pour un caractère continu, on regroupe en **classes de même amplitude** : $[150\,;\,155[$, $[155\,;\,160[$…

## 2. Exemple guidé
Tailles (en cm) de 40 élèves :

| Classe | [150;155[ | [155;160[ | [160;165[ | [165;170[ | [170;175[ |
|---|---|---|---|---|---|
| Effectif | 4 | 10 | 14 | 8 | 4 |
| Centre | 152,5 | 157,5 | 162,5 | 167,5 | 172,5 |
| E.C.C. | 4 | 14 | 28 | 36 | 40 |
| F.C.C. (%) | 10 | 35 | 70 | 90 | 100 |

- **E.C.C.** (effectif cumulé croissant) : nombre d'individus dont la valeur est **inférieure** à la borne supérieure de la classe.
- **Classe modale** : classe de plus grand effectif, ici $[160\,;\,165[$.

## 3. Moyenne
Pour un caractère continu, on remplace chaque classe par son **centre** :
$$\bar{x} = \dfrac{4 \times 152{,}5 + 10 \times 157{,}5 + 14 \times 162{,}5 + 8 \times 167{,}5 + 4 \times 172{,}5}{40} = \dfrac{6\,490}{40} = 162{,}25 \text{ cm}$$

## 4. Médiane
> La **médiane** partage la population en deux groupes de **même effectif**.

- **Série discrète** rangée : 3 ; 5 ; **7** ; 8 ; 12 → médiane 7. Effectif pair : 2 ; 4 ; 6 ; 8 → médiane $\dfrac{4 + 6}{2} = 5$.
- **Série continue :** on cherche la classe où l'E.C.C. atteint $\dfrac{N}{2} = 20$ : c'est $[160\,;\,165[$ (E.C.C. passe de 14 à 28). Par interpolation linéaire :
$$Me = 160 + 5 \times \dfrac{20 - 14}{28 - 14} \approx 162{,}1 \text{ cm}$$
- **Graphiquement :** on trace le **polygone des E.C.C.** (points (155 ; 4), (160 ; 14)… reliés, en partant de (150 ; 0)) ; la médiane est l'abscisse du point d'ordonnée $\frac{N}{2}$.

## 5. Diagramme circulaire
L'angle d'un secteur est proportionnel à l'effectif : $\alpha = \dfrac{\text{effectif}}{N} \times 360°$.
Pour la classe $[160\,;\,165[$ : $\dfrac{14}{40} \times 360 = 126°$.

## 6. Interpréter
Moyenne et médiane sont proches ici (162,25 et ≈ 162,1) : la série est plutôt **équilibrée**. Si la moyenne est bien plus grande que la médiane, quelques valeurs très élevées « tirent » la moyenne vers le haut (cas fréquent des revenus).
`,
  summaryMd: r`
- Fréquence $= \frac{\text{effectif}}{N}$ ; angle $= \frac{\text{effectif}}{N} \times 360°$.
- **E.C.C.** : on additionne les effectifs de proche en proche.
- **Classe modale** : plus grand effectif.
- **Moyenne** (continu) : avec les **centres** des classes.
- **Médiane** : valeur qui coupe la population en deux ; continu → classe où l'E.C.C. atteint $\frac{N}{2}$, puis interpolation ou lecture sur le polygone des E.C.C.
`,
  questions: [
    { type: 'NUMERIC', prompt: r`Centre de la classe $[150\,;\,155[$ ?`, answer: { value: 152.5 }, explanation: r`$\frac{150 + 155}{2}$.` },
    { type: 'MCQ', prompt: r`La classe modale est la classe :`, choices: ['du milieu', 'de plus grand effectif', 'de plus grande amplitude'], answer: { index: 1 }, explanation: r`Définition.` },
    { type: 'NUMERIC', prompt: r`Médiane de la série 3 ; 5 ; 7 ; 8 ; 12 ?`, answer: { value: 7 }, explanation: r`Valeur du milieu (3ᵉ sur 5).` },
    { type: 'NUMERIC', prompt: r`Médiane de la série 2 ; 4 ; 6 ; 8 ?`, answer: { value: 5 }, explanation: r`$\frac{4 + 6}{2}$.` },
    { type: 'NUMERIC', prompt: r`Effectifs 4, 10, 14, 8, 4. Quel est l'E.C.C. de la 3ᵉ classe ?`, answer: { value: 28 }, explanation: r`$4 + 10 + 14$.` },
    { type: 'NUMERIC', prompt: r`Effectif 14 sur un total de 40 : angle du secteur (en degrés) ?`, answer: { value: 126 }, explanation: r`$\frac{14}{40} \times 360$.` },
    { type: 'NUMERIC', prompt: r`Effectif 14 sur 40 : fréquence en % ?`, answer: { value: 35 }, explanation: r`$\frac{14}{40} = 0{,}35$.` },
    { type: 'NUMERIC', prompt: r`Moyenne des notes 8, 12, 10, 14 ?`, answer: { value: 11 }, explanation: r`$\frac{44}{4}$.` },
    { type: 'MCQ', prompt: r`Pour calculer la moyenne d'une série continue, on utilise :`, choices: ['les bornes inférieures', 'les centres des classes', 'les E.C.C.'], answer: { index: 1 }, explanation: r`Chaque classe est représentée par son centre.` },
    { type: 'MCQ', prompt: r`Sur le polygone des E.C.C., la médiane est l'abscisse du point d'ordonnée :`, choices: [r`$N$`, r`$\frac{N}{2}$`, r`$\frac{N}{4}$`], answer: { index: 1 }, explanation: r`La moitié de l'effectif total.` },
    { type: 'NUMERIC', prompt: r`Amplitude de la classe $[160\,;\,165[$ ?`, answer: { value: 5 }, explanation: r`$165 - 160$.` },
    { type: 'NUMERIC', prompt: r`Total des angles d'un diagramme circulaire (en degrés) ?`, answer: { value: 360 }, explanation: r`Tour complet.` },
    { type: 'MCQ', prompt: r`La dernière F.C.C. (en %) vaut toujours :`, choices: ['50', '100', '360'], answer: { index: 1 }, explanation: r`Tous les individus sont comptés.` },
    { type: 'NUMERIC', prompt: r`Moyenne pondérée : 2 élèves ont 10, 3 élèves ont 15. Moyenne ?`, answer: { value: 13 }, explanation: r`$\frac{20 + 45}{5}$.` },
    { type: 'OPEN', prompt: r`Explique la différence entre moyenne et médiane.`, answer: { model: 'La moyenne est la somme des valeurs divisée par l’effectif ; la médiane partage la population en deux moitiés de même effectif.', keywords: ['somme', 'moitié', 'même effectif'] }, explanation: r`La médiane est moins sensible aux valeurs extrêmes.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Statistique',
    durationMin: 120,
    blocksNext: false,
    instructions: r`**Durée : 2 heures · Note sur 20.** Arrondis au centième si nécessaire.`,
    advice: r`### 🎯 Conseils méthodologiques
1. Complète **tout le tableau** (centres, E.C.C., fréquences) avant de calculer.
2. Vérifie que le dernier E.C.C. est égal à l'effectif total.
3. Pour la médiane d'une série continue, repère la classe où l'E.C.C. dépasse $\frac{N}{2}$.
4. Diagramme circulaire : vérifie que la somme des angles fait 360°.`,
    items: [
      { section: 'Exercice 1 (4 pts)', prompt: r`1. Médiane de 5 ; 9 ; 2 ; 7 ; 4 :`, type: 'MCQ', choices: ['2', '5', '7'], answer: { index: 1 }, points: 2, correction: r`Rangée : 2 ; 4 ; **5** ; 7 ; 9.` },
      { section: 'Exercice 1 (4 pts)', prompt: r`2. Effectif 9 sur 36 : angle du secteur :`, type: 'MCQ', choices: ['90°', '36°', '45°'], answer: { index: 0 }, points: 2, correction: r`$\frac{9}{36} \times 360 = 90°$.` },
      { section: 'Exercice 2 (16 pts)', sectionIntro: r`Une enquête dans un quartier de San-Pédro donne les revenus annuels (en milliers de FCFA) de 50 personnes :

| Revenu | [100;120[ | [120;140[ | [140;160[ | [160;180[ | [180;200[ |
|---|---|---|---|---|---|
| Effectif | 6 | 12 | 15 | 10 | 7 |`, prompt: r`1. Quelle est la classe modale ?`, type: 'MCQ', choices: ['[120;140[', '[140;160[', '[160;180['], answer: { index: 1 }, points: 2, correction: r`Effectif maximal : 15.` },
      { section: 'Exercice 2 (16 pts)', prompt: r`2. Dresse le tableau des effectifs cumulés croissants. Quel est l'E.C.C. de la classe [140;160[ ?`, type: 'NUMERIC', answer: { value: 33 }, points: 3, resultPoints: 1, correction: r`E.C.C. : 6 ; 18 ; 33 ; 43 ; 50.` },
      { section: 'Exercice 2 (16 pts)', prompt: r`3. Calcule le revenu moyen (en milliers de FCFA).`, type: 'NUMERIC', answer: { value: 150 }, points: 4, resultPoints: 2, correction: r`Centres 110, 130, 150, 170, 190. $\bar{x} = \frac{660 + 1560 + 2250 + 1700 + 1330}{50} = \frac{7\,500}{50} = 150$.` },
      { section: 'Exercice 2 (16 pts)', prompt: r`4. Détermine la médiane par interpolation (au centième, en milliers de FCFA).`, type: 'NUMERIC', answer: { value: 149.33, tolerance: 0.01 }, points: 4, resultPoints: 2, correction: r`$\frac{N}{2} = 25$ : classe [140;160[ (E.C.C. de 18 à 33). $Me = 140 + 20 \times \frac{25 - 18}{15} \approx 149{,}33$.` },
      { section: 'Exercice 2 (16 pts)', prompt: r`5. Une population est dite pauvre si le revenu moyen est inférieur à 180 000 FCFA. Cette population est-elle pauvre ? Justifie.`, type: 'OPEN', answer: { model: 'Oui : 150 000 < 180 000.' }, points: 3, correction: r`Le revenu moyen est de 150 000 FCFA *(1 pt)*, inférieur à 180 000 FCFA : la population est pauvre *(2 pts)*.` },
    ],
  },
};

export const coordonneesVecteurs: SeedChapter = {
  subject: 'MATH',
  order: 11,
  title: 'Coordonnées d’un vecteur',
  minutes: 420,
  officialRef: `${REF}, leçon 11`,
  objectives: [
    'Lire et calculer les coordonnées d’un vecteur',
    'Calculer les coordonnées du milieu d’un segment et une distance',
    'Utiliser les conditions de colinéarité et d’orthogonalité',
    'Démontrer un alignement, un parallélisme ou une perpendicularité',
  ],
  courseMd: r`
> **Situation.** Au collège de Man, un élève assis au fond ne voit pas le tableau. Un camarade lui dicte : « Place I sur un nœud, compte 3 pas vers la droite, puis 2 pas vers le haut : tu obtiens J. » Il vient de donner les **coordonnées** du vecteur $\overrightarrow{IJ}$ : $(3\,;\,2)$.

## 1. Repères
Un repère $(O, I, J)$ est **orthonormé** si $(OI) \perp (OJ)$ et $OI = OJ = 1$. Chaque point M a des coordonnées $(x\,;\,y)$.

## 2. Coordonnées d'un vecteur
> Si $A(x_A\,;\,y_A)$ et $B(x_B\,;\,y_B)$, alors $\overrightarrow{AB}\,(x_B - x_A\,;\,y_B - y_A)$.

Exemple : $A(1\,;\,2)$ et $B(4\,;\,6)$ : $\overrightarrow{AB}\,(3\,;\,4)$.

> - Deux vecteurs sont **égaux** si et seulement s'ils ont les mêmes coordonnées.
> - Si $\vec{u}\,(x\,;\,y)$ et $\vec{v}\,(x'\,;\,y')$ : $\vec{u} + \vec{v}\,(x + x'\,;\,y + y')$ et $k\vec{u}\,(kx\,;\,ky)$.

## 3. Milieu et distance
> **Milieu** de [AB] : $I\left(\dfrac{x_A + x_B}{2}\,;\,\dfrac{y_A + y_B}{2}\right)$.

> **Distance** (repère orthonormé) : $AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$.

Exemple : milieu de [AB] : $I(2{,}5\,;\,4)$ ; $AB = \sqrt{9 + 16} = 5$.

## 4. Colinéarité et orthogonalité
> $\vec{u}\,(x\,;\,y)$ et $\vec{v}\,(x'\,;\,y')$ sont **colinéaires** ⟺ $xy' - x'y = 0$.

> Dans un repère **orthonormé**, $\vec{u}$ et $\vec{v}$ sont **orthogonaux** ⟺ $xx' + yy' = 0$.

**Applications.**
- **Alignement :** avec $C(7\,;\,10)$, $\overrightarrow{AC}\,(6\,;\,8)$ et $3 \times 8 - 6 \times 4 = 0$ : $\overrightarrow{AB}$ et $\overrightarrow{AC}$ sont colinéaires, donc A, B, C sont alignés.
- **Parallélisme :** (AB) // (CD) ⟺ $\overrightarrow{AB}$ et $\overrightarrow{CD}$ colinéaires.
- **Perpendicularité :** avec $\vec{w}\,(-4\,;\,3)$ : $3 \times (-4) + 4 \times 3 = 0$, donc $\overrightarrow{AB} \perp \vec{w}$.

## 5. Démontrer la nature d'un quadrilatère
ABCD est un parallélogramme ⟺ $\overrightarrow{AB} = \overrightarrow{DC}$ (mêmes coordonnées). On complète avec les distances (losange, rectangle) ou l'orthogonalité.
`,
  summaryMd: r`
- $\overrightarrow{AB}\,(x_B - x_A\,;\,y_B - y_A)$ — « arrivée moins départ ».
- Milieu : moyenne des coordonnées. Distance : $\sqrt{(\Delta x)^2 + (\Delta y)^2}$.
- Colinéaires ⟺ $xy' - x'y = 0$ ⟹ alignement / parallélisme.
- Orthogonaux (repère orthonormé) ⟺ $xx' + yy' = 0$ ⟹ perpendicularité.
- Parallélogramme ⟺ $\overrightarrow{AB} = \overrightarrow{DC}$.
`,
  questions: [
    { type: 'MCQ', prompt: r`$A(1\,;\,2)$, $B(4\,;\,6)$. Les coordonnées de $\overrightarrow{AB}$ sont :`, choices: [r`$(3\,;\,4)$`, r`$(5\,;\,8)$`, r`$(-3\,;\,-4)$`], answer: { index: 0 }, explanation: r`Arrivée moins départ.` },
    { type: 'NUMERIC', prompt: r`Avec $A(1\,;\,2)$ et $B(4\,;\,6)$ dans un repère orthonormé, calcule AB.`, answer: { value: 5 }, explanation: r`$\sqrt{9 + 16}$.` },
    { type: 'MCQ', prompt: r`Milieu de [AB] avec $A(1\,;\,2)$ et $B(4\,;\,6)$ :`, choices: [r`$(2{,}5\,;\,4)$`, r`$(3\,;\,4)$`, r`$(5\,;\,8)$`], answer: { index: 0 }, explanation: r`Moyennes des coordonnées.` },
    { type: 'MCQ', prompt: r`$\vec{u}\,(2\,;\,3)$ et $\vec{v}\,(4\,;\,6)$ sont :`, choices: ['colinéaires', 'orthogonaux', 'ni l’un ni l’autre'], answer: { index: 0 }, explanation: r`$2 \times 6 - 4 \times 3 = 0$.` },
    { type: 'MCQ', prompt: r`$\vec{u}\,(3\,;\,4)$ et $\vec{v}\,(-4\,;\,3)$ (repère orthonormé) sont :`, choices: ['colinéaires', 'orthogonaux', 'égaux'], answer: { index: 1 }, explanation: r`$-12 + 12 = 0$.` },
    { type: 'MCQ', prompt: r`Si $\vec{u}\,(1\,;\,-2)$, alors $3\vec{u}$ a pour coordonnées :`, choices: [r`$(3\,;\,-6)$`, r`$(3\,;\,-2)$`, r`$(4\,;\,1)$`], answer: { index: 0 }, explanation: r`On multiplie chaque coordonnée.` },
    { type: 'MCQ', prompt: r`$\vec{u}\,(1\,;\,2) + \vec{v}\,(3\,;\,-5) = $`, choices: [r`$(4\,;\,-3)$`, r`$(3\,;\,-10)$`, r`$(-2\,;\,7)$`], answer: { index: 0 }, explanation: r`On additionne coordonnée par coordonnée.` },
    { type: 'NUMERIC', prompt: r`$\vec{u}\,(2\,;\,m)$ et $\vec{v}\,(4\,;\,10)$ sont colinéaires. Calcule $m$.`, answer: { value: 5 }, explanation: r`$2 \times 10 - 4m = 0$.` },
    { type: 'NUMERIC', prompt: r`$\vec{u}\,(2\,;\,m)$ et $\vec{v}\,(3\,;\,-6)$ sont orthogonaux. Calcule $m$.`, answer: { value: 1 }, explanation: r`$6 - 6m = 0$.` },
    { type: 'MCQ', prompt: r`ABCD est un parallélogramme si et seulement si :`, choices: [r`$\overrightarrow{AB} = \overrightarrow{DC}$`, r`$\overrightarrow{AB} = \overrightarrow{CD}$`, r`$\overrightarrow{AC} = \overrightarrow{BD}$`], answer: { index: 0 }, explanation: r`Attention à l'ordre des lettres.` },
    { type: 'NUMERIC', prompt: r`$A(-1\,;\,3)$ et $B(2\,;\,-1)$ : calcule AB (repère orthonormé).`, answer: { value: 5 }, explanation: r`$\sqrt{3^2 + (-4)^2}$.` },
    { type: 'MCQ', prompt: r`Pour démontrer que A, B, C sont alignés, on montre que :`, choices: [r`$\overrightarrow{AB}$ et $\overrightarrow{AC}$ sont colinéaires`, r`$\overrightarrow{AB}$ et $\overrightarrow{AC}$ sont orthogonaux`, 'AB = AC'], answer: { index: 0 }, explanation: r`Propriété du cours.` },
    { type: 'MCQ', prompt: r`Un repère orthonormé a ses axes :`, choices: ['perpendiculaires avec la même unité', 'parallèles', 'quelconques'], answer: { index: 0 }, explanation: r`Définition.` },
    { type: 'NUMERIC', prompt: r`$A(2\,;\,5)$ ; I(4 ; 1) est le milieu de [AB]. Abscisse de B ?`, answer: { value: 6 }, explanation: r`$\frac{2 + x_B}{2} = 4$.` },
    { type: 'OPEN', prompt: r`$A(1\,;\,2)$, $B(4\,;\,6)$, $C(7\,;\,10)$. Démontre que A, B, C sont alignés.`, answer: { model: r`$\overrightarrow{AB}(3;4)$, $\overrightarrow{AC}(6;8)$, $3 \times 8 - 6 \times 4 = 0$ : colinéaires donc alignés.`, keywords: ['colinéaires', '3 × 8 − 6 × 4 = 0'] }, explanation: r`Condition de colinéarité.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Coordonnées d’un vecteur',
    durationMin: 120,
    blocksNext: false,
    instructions: r`**Durée : 2 heures · Note sur 20.** Le plan est muni d'un repère orthonormé $(O, I, J)$.`,
    advice: r`### 🎯 Conseils méthodologiques
1. « **Arrivée moins départ** » pour les coordonnées d'un vecteur.
2. Écris la condition ($xy' - x'y$ ou $xx' + yy'$) avant de calculer.
3. Fais un **graphique** pour vérifier tes résultats.`,
    items: [
      { section: 'Exercice 1 (4 pts)', prompt: r`1. $A(3\,;\,-1)$, $B(5\,;\,2)$ : $\overrightarrow{AB} = $`, type: 'MCQ', choices: [r`$(2\,;\,3)$`, r`$(8\,;\,1)$`, r`$(-2\,;\,-3)$`], answer: { index: 0 }, points: 1, correction: r`$(5 - 3\,;\,2 + 1)$.` },
      { section: 'Exercice 1 (4 pts)', prompt: r`2. Le milieu de [AB] est :`, type: 'MCQ', choices: [r`$(4\,;\,0{,}5)$`, r`$(1\,;\,1{,}5)$`, r`$(8\,;\,1)$`], answer: { index: 0 }, points: 1, correction: r`$\left(\frac{8}{2}\,;\,\frac{1}{2}\right)$.` },
      { section: 'Exercice 1 (4 pts)', prompt: r`3. $\vec{u}\,(6\,;\,-4)$ et $\vec{v}\,(-3\,;\,2)$ sont :`, type: 'MCQ', choices: ['colinéaires', 'orthogonaux', 'ni l’un ni l’autre'], answer: { index: 0 }, points: 1, correction: r`$6 \times 2 - (-3)(-4) = 0$.` },
      { section: 'Exercice 1 (4 pts)', prompt: r`4. $\vec{u}\,(2\,;\,5)$ et $\vec{v}\,(5\,;\,-2)$ sont :`, type: 'MCQ', choices: ['colinéaires', 'orthogonaux', 'égaux'], answer: { index: 1 }, points: 1, correction: r`$10 - 10 = 0$.` },
      { section: 'Exercice 2 (16 pts)', sectionIntro: r`On donne $A(-2\,;\,1)$, $B(2\,;\,4)$, $C(5\,;\,0)$ et $D(1\,;\,-3)$.`, prompt: r`1. Calcule les coordonnées de $\overrightarrow{AB}$ et de $\overrightarrow{DC}$. Que peux-tu en déduire ?`, type: 'OPEN', answer: { model: r`$\overrightarrow{AB}(4;3) = \overrightarrow{DC}(4;3)$ : ABCD parallélogramme` }, points: 4, correction: r`$\overrightarrow{AB}\,(4\,;\,3)$ *(1 pt)* ; $\overrightarrow{DC}\,(4\,;\,3)$ *(1 pt)* ; égaux, donc ABCD est un parallélogramme *(2 pts)*.` },
      { section: 'Exercice 2 (16 pts)', prompt: r`2. Calcule AB.`, type: 'NUMERIC', answer: { value: 5 }, points: 2, resultPoints: 1, correction: r`$\sqrt{16 + 9} = 5$.` },
      { section: 'Exercice 2 (16 pts)', prompt: r`3. Calcule BC.`, type: 'NUMERIC', answer: { value: 5 }, points: 2, resultPoints: 1, correction: r`$\overrightarrow{BC}\,(3\,;\,-4)$ ; $BC = \sqrt{9 + 16} = 5$.` },
      { section: 'Exercice 2 (16 pts)', prompt: r`4. Démontre que $\overrightarrow{AB}$ et $\overrightarrow{BC}$ sont orthogonaux.`, type: 'OPEN', answer: { model: r`$4 \times 3 + 3 \times (-4) = 0$` }, points: 3, correction: r`$4 \times 3 + 3 \times (-4) = 12 - 12 = 0$ : orthogonaux.` },
      { section: 'Exercice 2 (16 pts)', prompt: r`5. Déduis-en la nature précise de ABCD. Justifie.`, type: 'OPEN', answer: { model: 'carré' }, points: 3, correction: r`Parallélogramme avec deux côtés consécutifs de même longueur (losange) et perpendiculaires (rectangle) : ABCD est un **carré**.` },
      { section: 'Exercice 2 (16 pts)', prompt: r`6. Calcule les coordonnées du centre K de ABCD. Donne l'abscisse de K.`, type: 'NUMERIC', answer: { value: 1.5 }, points: 2, resultPoints: 1, correction: r`K est le milieu de [AC] : $K\left(\frac{-2 + 5}{2}\,;\,\frac{1 + 0}{2}\right) = (1{,}5\,;\,0{,}5)$.` },
    ],
  },
};

export const equationsDroites: SeedChapter = {
  subject: 'MATH',
  order: 12,
  title: 'Équations de droites',
  minutes: 540,
  officialRef: `${REF}, leçon 12`,
  objectives: [
    'Identifier une équation de droite et son coefficient directeur',
    'Déterminer une équation de droite (deux points, point + vecteur directeur, parallèle, perpendiculaire)',
    'Vérifier l’appartenance d’un point et construire une droite',
    'Justifier le parallélisme ou la perpendicularité de deux droites',
  ],
  courseMd: r`
> **Situation.** Ozoua veut acheter du mil (300 FCFA le kg) et du soja (500 FCFA le kg) avec exactement 50 000 FCFA. Si $x$ est la quantité de mil et $y$ celle de soja : $300x + 500y = 50\,000$, soit $y = -0{,}6x + 100$. Tous les couples possibles sont les points d'une **droite**.

## 1. Équations de droites
Dans un repère, toute droite a une équation de la forme :
- $y = ax + b$ (droite **non parallèle** à l'axe des ordonnées) ; $a$ est le **coefficient directeur**, $b$ l'**ordonnée à l'origine** ;
- $x = c$ (droite **parallèle** à l'axe des ordonnées).

Plus généralement, une équation $\alpha x + \beta y + \gamma = 0$ (avec $\alpha, \beta$ non tous deux nuls) est une équation de droite.

> **Appartenance.** Un point $M(x_0\,;\,y_0)$ appartient à la droite d'équation $y = ax + b$ ⟺ $y_0 = ax_0 + b$.

Exemple : $(D) : y = 2x - 1$. $A(3\,;\,5)$ : $2 \times 3 - 1 = 5$ ✔ donc $A \in (D)$. $B(1\,;\,4)$ : $2 - 1 = 1 \neq 4$ donc $B \notin (D)$.

## 2. Coefficient directeur
> Si A et B sont deux points d'une droite non parallèle à l'axe des ordonnées : $a = \dfrac{y_B - y_A}{x_B - x_A}$.

**Lecture sur quadrillage :** quand on avance de 1 vers la droite, on monte de $a$ (ou on descend si $a < 0$).

## 3. Déterminer une équation
- **Deux points** $A(1\,;\,3)$ et $B(3\,;\,7)$ : $a = \frac{7 - 3}{3 - 1} = 2$ ; $3 = 2 \times 1 + b$ donne $b = 1$ ; $(AB) : y = 2x + 1$.
- **Point et vecteur directeur** $\vec{u}\,(\alpha\,;\,\beta)$ : $M(x\,;\,y) \in (D) \iff \overrightarrow{AM}$ et $\vec{u}$ colinéaires ⟺ $\beta(x - x_A) - \alpha(y - y_A) = 0$.
  Exemple : $A(2\,;\,1)$, $\vec{u}\,(1\,;\,3)$ : $3(x - 2) - (y - 1) = 0 \iff y = 3x - 5$.

## 4. Parallélisme et perpendicularité
> Soit $(D) : y = ax + b$ et $(D') : y = a'x + b'$.
> - $(D) \parallel (D') \iff a = a'$.
> - Dans un repère **orthonormé** : $(D) \perp (D') \iff a \times a' = -1$.

Exemples :
- Droite passant par $C(0\,;\,4)$ parallèle à $y = 2x + 1$ : $y = 2x + 4$.
- Droite passant par $O$ perpendiculaire à $y = 2x + 1$ : $a' = -\frac{1}{2}$, donc $y = -\frac{1}{2}x$.

## 5. Construire une droite
On calcule deux points (par exemple pour $x = 0$ et $x = 2$) et on les relie. Pour $y = -0{,}6x + 100$ : $(0\,;\,100)$ et $(50\,;\,70)$.
`,
  summaryMd: r`
- Droite : $y = ax + b$ ou $x = c$.
- $a = \frac{y_B - y_A}{x_B - x_A}$ ; $b$ = ordonnée à l'origine.
- $M \in (D) \iff$ ses coordonnées vérifient l'équation.
- Parallèles ⟺ même $a$ ; perpendiculaires (orthonormé) ⟺ $aa' = -1$.
- Vecteur directeur de $y = ax + b$ : $\vec{u}\,(1\,;\,a)$.
`,
  questions: [
    { type: 'MCQ', prompt: r`Le coefficient directeur de $y = -3x + 5$ est :`, choices: ['5', '−3', '3'], answer: { index: 1 }, explanation: r`C'est le coefficient de $x$.` },
    { type: 'MCQ', prompt: r`$A(3\,;\,5)$ appartient-il à $y = 2x - 1$ ?`, choices: ['Oui', 'Non'], answer: { index: 0 }, explanation: r`$2 \times 3 - 1 = 5$.` },
    { type: 'MCQ', prompt: r`$B(1\,;\,4)$ appartient-il à $y = 2x - 1$ ?`, choices: ['Oui', 'Non'], answer: { index: 1 }, explanation: r`$2 - 1 = 1 \neq 4$.` },
    { type: 'NUMERIC', prompt: r`Coefficient directeur de (AB) avec $A(1\,;\,3)$ et $B(3\,;\,7)$ ?`, answer: { value: 2 }, explanation: r`$\frac{4}{2}$.` },
    { type: 'MCQ', prompt: r`Une équation de (AB) avec $A(1\,;\,3)$ et $B(3\,;\,7)$ :`, choices: [r`$y = 2x + 1$`, r`$y = 2x + 3$`, r`$y = x + 2$`], answer: { index: 0 }, explanation: r`$a = 2$ puis $b = 1$.` },
    { type: 'MCQ', prompt: r`Les droites $y = 2x + 1$ et $y = 2x - 5$ sont :`, choices: ['parallèles', 'perpendiculaires', 'confondues'], answer: { index: 0 }, explanation: r`Même coefficient directeur, ordonnées différentes.` },
    { type: 'MCQ', prompt: r`Les droites $y = 2x + 1$ et $y = -\frac{1}{2}x$ (repère orthonormé) sont :`, choices: ['parallèles', 'perpendiculaires', 'ni l’un ni l’autre'], answer: { index: 1 }, explanation: r`$2 \times \left(-\frac{1}{2}\right) = -1$.` },
    { type: 'NUMERIC', prompt: r`Ordonnée à l'origine de $y = -0{,}6x + 100$ ?`, answer: { value: 100 }, explanation: r`Valeur de $y$ pour $x = 0$.` },
    { type: 'MCQ', prompt: r`Une droite parallèle à l'axe des ordonnées a une équation de la forme :`, choices: [r`$y = c$`, r`$x = c$`, r`$y = ax$`], answer: { index: 1 }, explanation: r`Tous ses points ont la même abscisse.` },
    { type: 'NUMERIC', prompt: r`Pente d'une droite perpendiculaire à $y = 4x$ (repère orthonormé) ?`, answer: { value: -0.25 }, explanation: r`$a' = -\frac{1}{4}$.` },
    { type: 'MCQ', prompt: r`Un vecteur directeur de $y = 3x - 2$ est :`, choices: [r`$(1\,;\,3)$`, r`$(3\,;\,1)$`, r`$(1\,;\,-2)$`], answer: { index: 0 }, explanation: r`$(1\,;\,a)$.` },
    { type: 'NUMERIC', prompt: r`Pour $300x + 500y = 50\,000$, combien de kg de soja $y$ si $x = 20$ kg de mil ?`, answer: { value: 88 }, explanation: r`$y = -0{,}6 \times 20 + 100$.` },
    { type: 'MCQ', prompt: r`La droite passant par $C(0\,;\,4)$ parallèle à $y = 2x + 1$ :`, choices: [r`$y = 2x + 4$`, r`$y = 4x + 2$`, r`$y = -\frac{1}{2}x + 4$`], answer: { index: 0 }, explanation: r`Même $a$, et $b = 4$.` },
    { type: 'NUMERIC', prompt: r`Droite passant par $A(2\,;\,1)$ de vecteur directeur $(1\,;\,3)$ : $y = 3x + b$. Donne $b$.`, answer: { value: -5 }, explanation: r`$1 = 6 + b$.` },
    { type: 'OPEN', prompt: r`Explique comment construire la droite $y = -x + 3$.`, answer: { model: 'Calculer deux points, par exemple (0 ; 3) et (3 ; 0), et les relier.', keywords: ['deux points', '(0 ; 3)'] }, explanation: r`Deux points suffisent.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Équations de droites',
    durationMin: 120,
    blocksNext: false,
    instructions: r`**Durée : 2 heures · Note sur 20.** Le plan est muni d'un repère orthonormé.`,
    advice: r`### 🎯 Conseils méthodologiques
1. Calcule d'abord le **coefficient directeur**, puis $b$ avec un point connu.
2. **Vérifie** ton équation avec le deuxième point.
3. Parallèles : même $a$ ; perpendiculaires : $aa' = -1$.`,
    items: [
      { section: 'Exercice 1 (4 pts)', prompt: r`1. Le point $(2\,;\,3)$ appartient à :`, type: 'MCQ', choices: [r`$y = x + 1$`, r`$y = 2x + 1$`, r`$y = -x + 4$`], answer: { index: 0 }, points: 1, correction: r`$2 + 1 = 3$.` },
      { section: 'Exercice 1 (4 pts)', prompt: r`2. Coefficient directeur de la droite passant par $(0\,;\,1)$ et $(2\,;\,5)$ :`, type: 'MCQ', choices: ['2', '3', '0,5'], answer: { index: 0 }, points: 1, correction: r`$\frac{4}{2}$.` },
      { section: 'Exercice 1 (4 pts)', prompt: r`3. $y = -3x + 1$ et $y = \frac{1}{3}x$ sont :`, type: 'MCQ', choices: ['parallèles', 'perpendiculaires', 'confondues'], answer: { index: 1 }, points: 1, correction: r`$-3 \times \frac{1}{3} = -1$.` },
      { section: 'Exercice 1 (4 pts)', prompt: r`4. La droite d'équation $x = 2$ est :`, type: 'MCQ', choices: ['parallèle à l’axe des abscisses', 'parallèle à l’axe des ordonnées', 'passe par l’origine'], answer: { index: 1 }, points: 1, correction: r`Abscisse constante.` },
      { section: 'Exercice 2 (9 pts)', sectionIntro: r`On donne $A(-1\,;\,-1)$, $B(2\,;\,5)$ et $C(4\,;\,0)$.`, prompt: r`1. Détermine une équation de la droite (AB).`, type: 'OPEN', answer: { model: r`$y = 2x + 1$` }, points: 3, correction: r`$a = \frac{5 + 1}{2 + 1} = 2$ *(1 pt)* ; $-1 = -2 + b$, $b = 1$ *(1 pt)* ; $(AB) : y = 2x + 1$ *(1 pt)*.` },
      { section: 'Exercice 2 (9 pts)', prompt: r`2. Détermine une équation de la droite $(\Delta)$ passant par C et parallèle à (AB). Donne l'ordonnée à l'origine.`, type: 'NUMERIC', answer: { value: -8 }, points: 3, resultPoints: 1, correction: r`$a = 2$ ; $0 = 8 + b$, $b = -8$ ; $(\Delta) : y = 2x - 8$.` },
      { section: 'Exercice 2 (9 pts)', prompt: r`3. Détermine une équation de la droite $(\Delta')$ passant par C et perpendiculaire à (AB). Donne l'ordonnée à l'origine.`, type: 'NUMERIC', answer: { value: 2 }, points: 3, resultPoints: 1, correction: r`$a' = -\frac{1}{2}$ ; $0 = -2 + b$, $b = 2$ ; $(\Delta') : y = -\frac{1}{2}x + 2$.` },
      { section: 'Problème (7 pts)', sectionIntro: r`Ozoua dispose de 50 000 FCFA pour acheter $x$ kg de mil à 300 FCFA le kg et $y$ kg de soja à 500 FCFA le kg. Elle dépense tout son argent.`, prompt: r`1. Montre que $y = -0{,}6x + 100$.`, type: 'OPEN', answer: { model: r`$300x + 500y = 50\,000$` }, points: 2, correction: r`$300x + 500y = 50\,000$ *(1 pt)* $\iff y = \frac{50\,000 - 300x}{500} = -0{,}6x + 100$ *(1 pt)*.` },
      { section: 'Problème (7 pts)', prompt: r`2. Si elle achète 45 kg de mil, combien de kg de soja peut-elle acheter ?`, type: 'NUMERIC', answer: { value: 73 }, points: 2, resultPoints: 1, correction: r`$y = -27 + 100 = 73$ kg.` },
      { section: 'Problème (7 pts)', prompt: r`3. Combien de kg de mil au maximum peut-elle acheter (sans soja) ? Donne la valeur arrondie au kg inférieur.`, type: 'NUMERIC', answer: { value: 166 }, points: 3, resultPoints: 1, correction: r`$y = 0 \iff x = \frac{100}{0{,}6} \approx 166{,}7$ : au plus 166 kg (en kg entiers).` },
    ],
  },
};
