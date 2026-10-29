import { SeedChapter } from './types';

const r = String.raw;

const FIG_EMBOITES = `<figure class="figure">
<svg viewBox="0 0 300 220" role="img" aria-label="Configuration de Thalès : triangles emboîtés ABC et AMN avec (MN) parallèle à (BC)" width="300" height="220">
<g fill="none" stroke="currentColor" stroke-width="2">
<line x1="150" y1="20" x2="30" y2="200"/><line x1="150" y1="20" x2="270" y2="200"/>
<line x1="30" y1="200" x2="270" y2="200"/>
</g>
<line x1="90" y1="110" x2="210" y2="110" stroke="#FF6B00" stroke-width="3"/>
<g fill="currentColor" font-size="16" font-family="sans-serif">
<text x="144" y="14">A</text><text x="14" y="212">B</text><text x="274" y="212">C</text>
<text x="70" y="112">M</text><text x="216" y="112">N</text>
</g>
</svg>
<figcaption>Triangles emboîtés : M ∈ [AB], N ∈ [AC] et (MN) // (BC).</figcaption>
</figure>`;

const FIG_PAPILLON = `<figure class="figure">
<svg viewBox="0 0 300 230" role="img" aria-label="Configuration papillon : les droites (MB) et (NC) se coupent en A, (MN) parallèle à (BC)" width="300" height="230">
<g fill="none" stroke="currentColor" stroke-width="2">
<line x1="90" y1="40" x2="234" y2="208"/><line x1="210" y1="40" x2="66" y2="208"/>
<line x1="66" y1="208" x2="234" y2="208"/>
</g>
<line x1="90" y1="40" x2="210" y2="40" stroke="#FF6B00" stroke-width="3"/>
<g fill="currentColor" font-size="16" font-family="sans-serif">
<text x="74" y="36">M</text><text x="214" y="36">N</text><text x="160" y="116">A</text>
<text x="238" y="222">B</text><text x="48" y="222">C</text>
</g>
</svg>
<figcaption>Papillon : A est entre M et B, et entre N et C ; (MN) // (BC).</figcaption>
</figure>`;

export const thales: SeedChapter = {
  subject: 'MATH',
  order: 2,
  title: 'Propriété de Thalès',
  minutes: 180,
  isFree: true,
  officialRef: 'Mathématiques 3ème — Géométrie du plan : propriété de Thalès et sa réciproque',
  objectives: [
    'Reconnaître une configuration de Thalès',
    'Calculer une longueur avec la propriété de Thalès',
    'Démontrer que deux droites sont parallèles (ou non) avec la réciproque',
    'Partager un segment dans un rapport donné',
  ],
  courseMd: r`
**Prérequis :** proportionnalité, produit en croix, droites parallèles.

## 1. Les configurations de Thalès

Soit deux droites **(d)** et **(d')** sécantes en un point **A**. On place les points **B** et **M** sur (d), et les points **C** et **N** sur (d'), tous distincts de A, de sorte que **(MN) // (BC)**.

Il existe deux configurations :

${FIG_EMBOITES}

${FIG_PAPILLON}

## 2. La propriété de Thalès

> **Propriété.** Si les points A, M, B d'une part et A, N, C d'autre part sont alignés, et si les droites **(MN) et (BC) sont parallèles**, alors :
> $$\dfrac{AM}{AB} = \dfrac{AN}{AC} = \dfrac{MN}{BC}$$

🔑 **Astuce :** on écrit les côtés du « petit » triangle AMN au numérateur et ceux du « grand » triangle ABC au dénominateur, **sommet par sommet** (M ↔ B, N ↔ C).

### Exemple 1 — calculer des longueurs

M ∈ [AB], N ∈ [AC] et (MN) // (BC). On donne AM = 3 cm, AB = 5 cm, AN = 4,2 cm et BC = 6 cm. Calculons AC et MN.

Les points A, M, B et A, N, C sont alignés et (MN) // (BC). D'après la propriété de Thalès :
$$\dfrac{AM}{AB} = \dfrac{AN}{AC} = \dfrac{MN}{BC} \quad\text{soit}\quad \dfrac{3}{5} = \dfrac{4{,}2}{AC} = \dfrac{MN}{6}$$

- $AC = \dfrac{4{,}2 \times 5}{3} = 7$ cm
- $MN = \dfrac{3 \times 6}{5} = 3{,}6$ cm

### Exemple 2 — le cocotier de Grand-Bassam 🌴

À 16 h, Koffi plante verticalement un bâton de **1,5 m** : son ombre mesure **2 m**. Au même moment, l'ombre d'un cocotier mesure **12 m**. Les rayons du soleil sont parallèles : on a une configuration de Thalès.
$$\dfrac{h}{1{,}5} = \dfrac{12}{2} \;\Rightarrow\; h = \dfrac{1{,}5 \times 12}{2} = 9 \text{ m}$$

Le cocotier mesure **9 m**.

## 3. La réciproque de la propriété de Thalès

> **Réciproque.** Si les points A, M, B d'une part et A, N, C d'autre part sont alignés **dans le même ordre**, et si $\dfrac{AM}{AB} = \dfrac{AN}{AC}$, alors les droites **(MN) et (BC) sont parallèles**.

⚠️ La condition « **dans le même ordre** » est indispensable : M doit être placé par rapport à A comme B, et N par rapport à A comme C.

### Exemple 3

A, M, B et A, N, C sont alignés dans le même ordre ; AM = 2, AB = 5, AN = 2,4 et AC = 6.

$\dfrac{AM}{AB} = \dfrac{2}{5} = 0{,}4$ et $\dfrac{AN}{AC} = \dfrac{2{,}4}{6} = 0{,}4$.

Les rapports sont égaux et les points sont dans le même ordre : d'après la réciproque de la propriété de Thalès, **(MN) // (BC)**.

## 4. Démontrer que deux droites ne sont pas parallèles

> Si $\dfrac{AM}{AB} \neq \dfrac{AN}{AC}$, alors les droites (MN) et (BC) **ne sont pas parallèles** (conséquence de la propriété de Thalès).

**Exemple 4 :** même figure mais AN = 2,5. $\dfrac{2{,}5}{6} \approx 0{,}417 \neq 0{,}4$ : (MN) et (BC) ne sont pas parallèles.

💡 **Produit en croix** (pas d'arrondi) : on compare $AM \times AC$ et $AN \times AB$.
Exemple 3 : $2 \times 6 = 12$ et $2{,}4 \times 5 = 12$ → égaux. Exemple 4 : $2 \times 6 = 12$ et $2{,}5 \times 5 = 12{,}5$ → différents.

## 5. Application : partager un segment

**Construire le point M de [AB] tel que $AM = \dfrac{3}{5} AB$ :**

1. Tracer une demi-droite [Ax) d'origine A, qui ne porte pas [AB].
2. Au compas, reporter sur [Ax) cinq longueurs égales : points A₁, A₂, A₃, A₄, A₅.
3. Tracer la droite (A₅B).
4. Tracer la parallèle à (A₅B) passant par A₃ : elle coupe [AB] en **M**.

*Justification :* (A₃M) // (A₅B), donc d'après la propriété de Thalès $\dfrac{AM}{AB} = \dfrac{AA_3}{AA_5} = \dfrac{3}{5}$.

## 6. Rédaction attendue au BEPC

> *Les points A, M, B d'une part et A, N, C d'autre part sont alignés, et les droites (MN) et (BC) sont parallèles. D'après la propriété de Thalès, on a :* $\dfrac{AM}{AB} = \dfrac{AN}{AC} = \dfrac{MN}{BC}$.

Ensuite : remplacer par les valeurs, faire le produit en croix, donner le résultat **avec l'unité**.
`,
  summaryMd: r`
| | |
|---|---|
| **Configuration** | 2 droites sécantes en A, coupées par 2 droites **parallèles** |
| **Propriété (calculer)** | (MN) // (BC) ⟹ $\frac{AM}{AB} = \frac{AN}{AC} = \frac{MN}{BC}$ |
| **Réciproque (démontrer //)** | $\frac{AM}{AB} = \frac{AN}{AC}$ **et** points dans le même ordre ⟹ (MN) // (BC) |
| **Non-parallélisme** | $\frac{AM}{AB} \neq \frac{AN}{AC}$ ⟹ (MN) et (BC) ne sont pas parallèles |
| **Outil** | Produit en croix : $\frac{a}{b} = \frac{c}{d} \iff a \times d = b \times c$ |

### ❌ Pièges classiques
- Mélanger les sommets correspondants.
- Oublier « dans le même ordre » dans la réciproque.
- Utiliser MB à la place de AB.
- Oublier l'unité dans la réponse.

### 🧭 Quelle propriété utiliser ?
- « **Calculer** une longueur » avec des parallèles → **propriété de Thalès**.
- « **Démontrer** que … sont parallèles » → **réciproque**.
- « Les droites sont-elles parallèles ? » avec des rapports différents → **conséquence** (non parallèles).

**Moyen mnémotechnique :** « *Petit sur Grand, sommet par sommet.* »
`,
  questions: [
    {
      type: 'MCQ',
      prompt: r`M ∈ [AB], N ∈ [AC] et (MN) // (BC). Quelle égalité est vraie ?`,
      choices: [r`$\frac{AM}{AB} = \frac{AC}{AN}$`, r`$\frac{AM}{AB} = \frac{AN}{AC}$`, r`$\frac{AM}{MB} = \frac{MN}{BC}$`],
      answer: { index: 1 },
      explanation: r`Petit triangle sur grand triangle, sommet par sommet. MB n'est pas un côté du triangle ABC.`,
    },
    {
      type: 'NUMERIC',
      prompt: r`M ∈ [AB], N ∈ [AC], (MN) // (BC). AM = 4, AB = 6 et AC = 9. Calcule AN.`,
      answer: { value: 6 },
      explanation: r`$AN = \dfrac{AC \times AM}{AB} = \dfrac{9 \times 4}{6} = 6$.`,
    },
    {
      type: 'MCQ',
      prompt: r`Pour appliquer la propriété de Thalès, il faut que :`,
      choices: ['(MN) ⊥ (BC)', '(MN) // (BC)', 'AM = AN'],
      answer: { index: 1 },
      explanation: r`Le parallélisme est l'hypothèse indispensable de la propriété de Thalès.`,
    },
    {
      type: 'MCQ',
      prompt: r`La réciproque exige, en plus de l'égalité des rapports :`,
      choices: ['que les points soient alignés dans le même ordre', 'que le triangle soit rectangle', 'rien de plus'],
      answer: { index: 0 },
      explanation: r`Sans la condition « même ordre », la conclusion peut être fausse.`,
    },
    {
      type: 'NUMERIC',
      prompt: r`$\frac{AM}{AB} = 0{,}5$ et BC = 8 cm. Calcule MN (en cm).`,
      answer: { value: 4 },
      explanation: r`$MN = 0{,}5 \times 8 = 4$ cm.`,
    },
    {
      type: 'NUMERIC',
      prompt: r`Les droites (AC) et (BD) sont sécantes en O, avec (AB) // (CD). OA = 3, OC = 6 et OB = 4. Calcule OD.`,
      answer: { value: 8 },
      explanation: r`$\dfrac{OA}{OC} = \dfrac{OB}{OD}$, soit $\dfrac{3}{6} = \dfrac{4}{OD}$, donc $OD = 8$.`,
    },
    {
      type: 'MCQ',
      prompt: r`A, M, B et A, N, C sont alignés dans le même ordre ; AM = 3, AB = 7, AN = 6, AC = 14. Les droites (MN) et (BC) sont-elles parallèles ?`,
      choices: ['Oui', 'Non'],
      answer: { index: 0 },
      explanation: r`$3 \times 14 = 42$ et $7 \times 6 = 42$ : les rapports sont égaux, donc (MN) // (BC) d'après la réciproque.`,
    },
    {
      type: 'MCQ',
      prompt: r`AM = 2, AB = 5, AN = 3, AC = 8 (même ordre). Les droites (MN) et (BC) sont-elles parallèles ?`,
      choices: ['Oui', 'Non'],
      answer: { index: 1 },
      explanation: r`$2 \times 8 = 16$ et $5 \times 3 = 15$ : les rapports sont différents, donc les droites ne sont pas parallèles.`,
    },
    {
      type: 'NUMERIC',
      prompt: r`Le triangle AMN est une réduction du triangle ABC de rapport $\frac{2}{3}$. BC = 9 cm. Calcule MN (en cm).`,
      answer: { value: 6 },
      explanation: r`$MN = 9 \times \dfrac{2}{3} = 6$ cm.`,
    },
    {
      type: 'NUMERIC',
      prompt: r`Un bâton de 2 m a une ombre de 1,6 m. Au même moment, l'ombre d'un fromager mesure 8 m. Quelle est la hauteur du fromager (en m) ?`,
      answer: { value: 10 },
      explanation: r`$\dfrac{h}{2} = \dfrac{8}{1{,}6}$, donc $h = \dfrac{2 \times 8}{1{,}6} = 10$ m.`,
    },
    {
      type: 'OPEN',
      prompt: r`Énonce la propriété de Thalès.`,
      answer: {
        model: r`Soit deux droites (d) et (d') sécantes en A. B et M sont sur (d), C et N sur (d'). Si (MN) // (BC), alors $\frac{AM}{AB} = \frac{AN}{AC} = \frac{MN}{BC}$.`,
        keywords: ['sécantes', 'alignés', 'parallèles', 'rapports égaux'],
      },
      explanation: r`Il faut citer les deux alignements, le parallélisme, puis l'égalité des trois rapports.`,
    },
    {
      type: 'OPEN',
      prompt: r`Énonce la réciproque de la propriété de Thalès.`,
      answer: {
        model: r`Si A, M, B et A, N, C sont alignés dans le même ordre et si $\frac{AM}{AB} = \frac{AN}{AC}$, alors (MN) // (BC).`,
        keywords: ['même ordre', 'rapports égaux', 'parallèles'],
      },
      explanation: r`N'oublie jamais la condition « dans le même ordre ».`,
    },
    {
      type: 'MCQ',
      prompt: r`AM = 2,5 cm et AB = 7,5 cm. Le rapport $\frac{AM}{AB}$ est égal à :`,
      choices: [r`$\frac{1}{3}$`, r`$\frac{1}{2}$`, '3'],
      answer: { index: 0 },
      explanation: r`$\dfrac{2{,}5}{7{,}5} = \dfrac{25}{75} = \dfrac{1}{3}$.`,
    },
    {
      type: 'OPEN',
      prompt: r`Explique comment placer le point M sur [AB] tel que $AM = \frac{2}{5} AB$.`,
      answer: {
        model: r`Tracer une demi-droite [Ax), y reporter 5 graduations égales A₁…A₅, joindre A₅ à B, puis tracer la parallèle à (A₅B) passant par A₂ : elle coupe [AB] en M.`,
        keywords: ['demi-droite', '5 graduations', 'parallèle', 'A₂'],
      },
      explanation: r`C'est une application directe de la propriété de Thalès : $\frac{AM}{AB} = \frac{AA_2}{AA_5} = \frac{2}{5}$.`,
    },
    {
      type: 'NUMERIC',
      prompt: r`Les droites (AC) et (BD) sont sécantes en O, avec (AB) // (CD). OA = 2, OC = 5 et CD = 7,5. Calcule AB.`,
      answer: { value: 3 },
      explanation: r`$\dfrac{OA}{OC} = \dfrac{AB}{CD}$, donc $AB = \dfrac{7{,}5 \times 2}{5} = 3$.`,
    },
  ],
  assessment: {
    title: 'Devoir BEPC — Propriété de Thalès',
    durationMin: 120,
    blocksNext: true,
    instructions: r`**Durée : 2 heures · Note sur 20.** Calculatrice autorisée. La qualité de la rédaction et le soin des figures sont pris en compte.

Pour les questions de calcul, donne le **résultat** dans la case prévue et ta **justification** en dessous. Tu peux aussi photographier ta copie (figures, schémas).`,
    advice: r`### 🎯 Conseils méthodologiques
1. **Lis le verbe de la question** : « calculer » → *propriété* ; « démontrer que … sont parallèles » → *réciproque* ; « ne sont pas parallèles » → *conséquence*.
2. **Écris toujours les hypothèses** (deux alignements + parallélisme, ou rapports égaux + même ordre). Au BEPC, la justification rapporte souvent la moitié des points.
3. **Repère les sommets correspondants** sur la figure avant d'écrire les rapports.
4. **Préfère le produit en croix** aux valeurs arrondies pour comparer deux rapports.
5. **Vérifie la vraisemblance** : un côté du petit triangle est plus court que le côté correspondant du grand.
6. **Unité + phrase de conclusion** pour chaque résultat.
7. **Gère ton temps** : ~20 min pour l'exercice 1, 25 pour le 2, 20 pour le 3, 45 pour le problème, 10 pour relire.`,
    items: [
      // ── Exercice 1 : QCM (4 pts)
      {
        section: 'Exercice 1 (4 pts)',
        sectionIntro: r`Pour chaque question, choisis la bonne réponse. Dans les questions 1 et 2 : ABC est un triangle, E ∈ [AB], F ∈ [AC], (EF) // (BC), AE = 2 cm et AB = 6 cm.`,
        prompt: r`1. Le rapport $\frac{AE}{AB}$ est égal à :`,
        type: 'MCQ',
        choices: ['3', r`$\frac{1}{3}$`, r`$\frac{1}{2}$`],
        answer: { index: 1 },
        points: 1,
        correction: r`$\dfrac{AE}{AB} = \dfrac{2}{6} = \dfrac{1}{3}$.`,
      },
      {
        section: 'Exercice 1 (4 pts)',
        prompt: r`2. Si BC = 9 cm, alors EF = :`,
        type: 'MCQ',
        choices: ['3 cm', '4,5 cm', '27 cm'],
        answer: { index: 0 },
        points: 1,
        correction: r`$EF = BC \times \dfrac{AE}{AB} = 9 \times \dfrac{1}{3} = 3$ cm.`,
      },
      {
        section: 'Exercice 1 (4 pts)',
        prompt: r`3. Pour démontrer que deux droites sont parallèles, on utilise :`,
        type: 'MCQ',
        choices: ['la propriété de Thalès', 'la réciproque de la propriété de Thalès', 'la propriété de Pythagore'],
        answer: { index: 1 },
        points: 1,
        correction: r`La réciproque sert à démontrer un parallélisme ; la propriété directe sert à calculer.`,
      },
      {
        section: 'Exercice 1 (4 pts)',
        prompt: r`4. Les droites (AC) et (BD) sont sécantes en O, avec (AB) // (CD). OA = 4, OC = 10 et OB = 6. Alors OD = :`,
        type: 'MCQ',
        choices: ['2,4', '12', '15'],
        answer: { index: 2 },
        points: 1,
        correction: r`$\dfrac{OA}{OC} = \dfrac{OB}{OD}$, soit $\dfrac{4}{10} = \dfrac{6}{OD}$, donc $OD = \dfrac{6 \times 10}{4} = 15$.`,
      },
      // ── Exercice 2 (5 pts)
      {
        section: 'Exercice 2 (5 pts)',
        sectionIntro: r`RST est un triangle tel que RS = 8 cm, RT = 10 cm et ST = 12 cm. M est le point de [RS] tel que RM = 6 cm. La parallèle à (ST) passant par M coupe [RT] en N.`,
        prompt: r`1. Construis la figure en vraie grandeur (photographie ta figure ou décris ta construction).`,
        type: 'OPEN',
        answer: { model: 'Triangle construit au compas, M placé sur [RS] à 6 cm de R, parallèle à (ST) tracée, N codé sur [RT].' },
        points: 1,
        correction: r`Triangle tracé au compas avec les bonnes longueurs (0,5 pt) ; M placé, parallèle tracée correctement, N codé (0,5 pt).`,
      },
      {
        section: 'Exercice 2 (5 pts)',
        prompt: r`2. Calcule RN (en cm).`,
        type: 'NUMERIC',
        answer: { value: 7.5 },
        points: 1.5,
        resultPoints: 0.5,
        correction: r`Les points R, M, S et R, N, T sont alignés et (MN) // (ST). D'après la propriété de Thalès : $\dfrac{RM}{RS} = \dfrac{RN}{RT} = \dfrac{MN}{ST}$ *(0,5 pt)*.
$\dfrac{6}{8} = \dfrac{RN}{10}$ donc $RN = \dfrac{10 \times 6}{8}$ *(0,5 pt)* $= 7{,}5$ cm *(0,5 pt)*.`,
      },
      {
        section: 'Exercice 2 (5 pts)',
        prompt: r`3. Calcule MN (en cm).`,
        type: 'NUMERIC',
        answer: { value: 9 },
        points: 1.5,
        resultPoints: 0.5,
        correction: r`$\dfrac{6}{8} = \dfrac{MN}{12}$ *(0,5 pt)* donc $MN = \dfrac{12 \times 6}{8}$ *(0,5 pt)* $= 9$ cm *(0,5 pt)*.`,
      },
      {
        section: 'Exercice 2 (5 pts)',
        prompt: r`4. Déduis-en la longueur NT (en cm).`,
        type: 'NUMERIC',
        answer: { value: 2.5 },
        points: 1,
        resultPoints: 0.5,
        correction: r`N ∈ [RT] donc $NT = RT - RN = 10 - 7{,}5 = 2{,}5$ cm.`,
      },
      // ── Exercice 3 (4 pts)
      {
        section: 'Exercice 3 (4 pts)',
        sectionIntro: r`Les points A, B, D sont alignés, et les points A, C, E sont alignés dans le même ordre. On donne AB = 4 cm, AD = 10 cm, AC = 3 cm et AE = 7,5 cm.`,
        prompt: r`1. Démontre que les droites (BC) et (DE) sont parallèles.`,
        type: 'OPEN',
        answer: { model: 'AB/AD = 0,4 = AC/AE et même ordre ⇒ (BC) // (DE) par la réciproque.' },
        points: 2,
        correction: r`$\dfrac{AB}{AD} = \dfrac{4}{10} = 0{,}4$ et $\dfrac{AC}{AE} = \dfrac{3}{7{,}5} = 0{,}4$ *(1 pt)*.
Les rapports sont égaux et A, B, D et A, C, E sont alignés dans le même ordre : d'après la **réciproque de la propriété de Thalès**, (BC) // (DE) *(1 pt — citer la réciproque et le même ordre)*.`,
      },
      {
        section: 'Exercice 3 (4 pts)',
        prompt: r`2. F est le point de [AE] tel que AF = 3,2 cm. Les droites (BF) et (DE) sont-elles parallèles ? Justifie.`,
        type: 'OPEN',
        answer: { model: '4 × 7,5 = 30 ≠ 10 × 3,2 = 32 : non parallèles.' },
        points: 2,
        correction: r`$\dfrac{AB}{AD} = 0{,}4$ et $\dfrac{AF}{AE} = \dfrac{3{,}2}{7{,}5} \approx 0{,}427$. Produit en croix : $4 \times 7{,}5 = 30$ et $10 \times 3{,}2 = 32$, donc $30 \neq 32$ *(1 pt)*.
Les rapports ne sont pas égaux : (BF) et (DE) **ne sont pas parallèles** *(1 pt)*.
*Autre argument accepté : par B ne passe qu'une seule parallèle à (DE), c'est (BC), et F ≠ C.*`,
      },
      // ── Problème (7 pts)
      {
        section: 'Problème (7 pts)',
        sectionIntro: r`**La passerelle sur la rivière.** Awa habite un village près de Bouaflé. Elle veut connaître la largeur d'une rivière sans la traverser. Sur l'autre rive se trouve un fromager **T**. Sur sa rive, elle place un piquet **A** juste en face de T, puis :
- elle marche le long de la rive jusqu'à un point **O**, avec **OA = 30 m** ;
- elle continue dans la même direction jusqu'à un point **C**, avec **OC = 6 m** ;
- depuis C, elle s'éloigne de la rivière parallèlement à (AT) jusqu'au point **D** d'où elle voit le fromager T **aligné** avec O. Elle mesure **CD = 5 m**.

Les points A, O, C sont alignés, les points T, O, D sont alignés et (CD) // (AT).`,
        prompt: r`1. Fais un schéma de la situation (photo ou description).`,
        type: 'OPEN',
        answer: { model: 'Configuration papillon de centre O : T et A d’un côté, C et D de l’autre, (AT) // (CD).' },
        points: 1,
        correction: r`Schéma en papillon : T et A sur les deux rives, O et C sur la rive d'Awa, D du côté opposé à T par rapport à O, (CD) et (AT) parallèles, longueurs indiquées.`,
      },
      {
        section: 'Problème (7 pts)',
        prompt: r`2. Justifie que l'on peut appliquer la propriété de Thalès et écris l'égalité des rapports.`,
        type: 'OPEN',
        answer: { model: 'OC/OA = OD/OT = CD/AT' },
        points: 1.5,
        correction: r`Les droites (AC) et (TD) sont sécantes en O ; A, O, C sont alignés, T, O, D sont alignés et (AT) // (CD) *(1 pt)*.
D'après la propriété de Thalès : $\dfrac{OC}{OA} = \dfrac{OD}{OT} = \dfrac{CD}{AT}$ *(0,5 pt)*.`,
      },
      {
        section: 'Problème (7 pts)',
        prompt: r`3. Calcule la largeur AT de la rivière (en m).`,
        type: 'NUMERIC',
        answer: { value: 25 },
        points: 1.5,
        resultPoints: 0.5,
        correction: r`$\dfrac{6}{30} = \dfrac{5}{AT}$ *(0,5 pt)* donc $AT = \dfrac{5 \times 30}{6}$ *(0,5 pt)* $= 25$ m *(0,5 pt)*.`,
      },
      {
        section: 'Problème (7 pts)',
        prompt: r`4. La mairie veut construire une passerelle de longueur AT. Le coût est de 150 000 FCFA par mètre. Calcule le coût total (en FCFA).`,
        type: 'NUMERIC',
        answer: { value: 3750000 },
        points: 1,
        resultPoints: 0.5,
        correction: r`$25 \times 150\,000 = 3\,750\,000$ FCFA.`,
      },
      {
        section: 'Problème (7 pts)',
        prompt: r`5. Sur un plan à l'échelle 1/500, quelle longueur (en cm) représente AT ?`,
        type: 'NUMERIC',
        answer: { value: 5 },
        points: 1,
        resultPoints: 0.5,
        correction: r`25 m = 2 500 cm, et $2\,500 \div 500 = 5$ cm.`,
      },
      {
        section: 'Problème (7 pts)',
        prompt: r`6. Si Awa avait choisi OC = 7,5 m (toujours avec OA = 30 m), quelle longueur CD aurait-elle mesurée (en m) ?`,
        type: 'NUMERIC',
        answer: { value: 6.25 },
        points: 1,
        resultPoints: 0.5,
        correction: r`$\dfrac{CD}{AT} = \dfrac{OC}{OA}$ donc $CD = \dfrac{25 \times 7{,}5}{30} = 6{,}25$ m.`,
      },
    ],
  },
};
