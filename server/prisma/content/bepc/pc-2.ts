import { SeedChapter } from '../types';

const r = String.raw;
const REF = 'Programme de Physique-Chimie 3e (DPFC) — progression 2026-2027';

export const electrolyseEau: SeedChapter = {
  subject: 'PC',
  order: 6,
  title: 'Électrolyse et synthèse de l’eau',
  minutes: 120,
  officialRef: `${REF}, Chimie — Les réactions chimiques`,
  objectives: [
    'Décrire l’électrolyse de l’eau et identifier les gaz formés',
    'Décrire la synthèse de l’eau',
    'Écrire et équilibrer les équations-bilans ; exploiter les volumes',
  ],
  courseMd: r`
> **Situation.** L'eau a longtemps été considérée comme un « élément ». En faisant passer un courant électrique dans de l'eau, on montre qu'elle est en fait formée de deux corps simples.

## 1. L'électrolyse de l'eau
**Dispositif :** un électrolyseur (cuve et deux électrodes) contient de l'eau additionnée d'un peu de **soude** (ou d'acide) pour qu'elle conduise le courant. On relie les électrodes à un générateur de courant continu.
- l'électrode reliée au pôle **+** est l'**anode** ;
- l'électrode reliée au pôle **−** est la **cathode**.

**Observations :** des bulles de gaz se forment aux deux électrodes. Le volume de gaz recueilli à la cathode est le **double** de celui recueilli à l'anode.

**Identification des gaz :**
- à la **cathode** : le gaz produit une légère **détonation** à l'approche d'une flamme : c'est le **dihydrogène** $H_2$ ;
- à l'**anode** : le gaz **rallume une bûchette incandescente** : c'est le **dioxygène** $O_2$.

> $$2\,H_2O \longrightarrow 2\,H_2 + O_2$$
> $V(H_2) = 2 \times V(O_2)$

## 2. La synthèse de l'eau
Dans un **eudiomètre**, on introduit un mélange de dihydrogène et de dioxygène, puis on provoque une étincelle : il se produit une **explosion** et des gouttelettes d'eau apparaissent (elles bleuissent le sulfate de cuivre anhydre).
> $$2\,H_2 + O_2 \longrightarrow 2\,H_2O$$

Le mélange est entièrement consommé si les volumes sont dans les proportions **2 volumes de $H_2$ pour 1 volume de $O_2$**. Sinon, il reste le gaz en excès.

**Exemple :** 30 mL de $H_2$ et 20 mL de $O_2$ : 30 mL de $H_2$ réagissent avec 15 mL de $O_2$ ; il reste **5 mL de dioxygène**.

## 3. Conclusion
- L'eau est un **corps composé** formé des éléments hydrogène et oxygène : formule $H_2O$.
- Électrolyse (décomposition) et synthèse sont deux réactions **inverses**.
- Lors d'une réaction chimique, les atomes se conservent et la **masse totale se conserve**.

⚠️ **Sécurité :** le mélange dihydrogène-dioxygène est **explosif** ; ces expériences se font en petites quantités, sous la surveillance du professeur.
`,
  summaryMd: r`
- Électrolyse : $2H_2O \to 2H_2 + O_2$ ; cathode (−) : $H_2$ ; anode (+) : $O_2$.
- Volumes : $V(H_2) = 2 \times V(O_2)$.
- Tests : $H_2$ → détonation ; $O_2$ → rallume une bûchette incandescente ; eau → bleuit le sulfate de cuivre anhydre.
- Synthèse : $2H_2 + O_2 \to 2H_2O$ (eudiomètre, étincelle).
- Conservation des atomes et de la masse.
`,
  questions: [
    { type: 'MCQ', prompt: r`À la cathode de l'électrolyseur, on recueille :`, choices: ['du dioxygène', 'du dihydrogène', 'de la vapeur d’eau'], answer: { index: 1 }, explanation: r`Cathode = pôle −.` },
    { type: 'MCQ', prompt: r`Le gaz qui rallume une bûchette incandescente est :`, choices: [r`$H_2$`, r`$O_2$`, r`$CO_2$`], answer: { index: 1 }, explanation: r`Test du dioxygène.` },
    { type: 'MCQ', prompt: r`Le gaz qui produit une détonation près d'une flamme est :`, choices: [r`$H_2$`, r`$O_2$`, r`$N_2$`], answer: { index: 0 }, explanation: r`Test du dihydrogène.` },
    { type: 'NUMERIC', prompt: r`On recueille 12 mL de $O_2$ à l'anode. Volume (mL) de $H_2$ à la cathode ?`, answer: { value: 24 }, explanation: r`Volume double.` },
    { type: 'MCQ', prompt: r`L'équation-bilan de l'électrolyse de l'eau est :`, choices: [r`$H_2O \to H_2 + O$`, r`$2H_2O \to 2H_2 + O_2$`, r`$H_2O \to H + O_2$`], answer: { index: 1 }, explanation: r`Équation équilibrée.` },
    { type: 'MCQ', prompt: r`On ajoute de la soude à l'eau de l'électrolyseur pour :`, choices: ['la colorer', 'qu’elle conduise le courant', 'qu’elle bouille'], answer: { index: 1 }, explanation: r`L'eau pure conduit très mal.` },
    { type: 'MCQ', prompt: r`L'appareil utilisé pour la synthèse de l'eau est :`, choices: ['un eudiomètre', 'un électrolyseur', 'un dynamomètre'], answer: { index: 0 }, explanation: r`Tube avec électrodes pour l'étincelle.` },
    { type: 'NUMERIC', prompt: r`Volume (mL) de $O_2$ nécessaire pour faire réagir 40 mL de $H_2$ ?`, answer: { value: 20 }, explanation: r`Proportions 2 pour 1.` },
    { type: 'NUMERIC', prompt: r`30 mL de $H_2$ et 20 mL de $O_2$ : volume (mL) du gaz restant ?`, answer: { value: 5 }, explanation: r`15 mL de $O_2$ réagissent.` },
    { type: 'MCQ', prompt: r`L'eau est :`, choices: ['un corps simple', 'un corps composé', 'un mélange de gaz'], answer: { index: 1 }, explanation: r`Formée de deux éléments.` },
    { type: 'MCQ', prompt: r`Le sulfate de cuivre anhydre blanc devient bleu en présence :`, choices: ['de dioxygène', 'd’eau', 'de dihydrogène'], answer: { index: 1 }, explanation: r`Test de l'eau.` },
    { type: 'MCQ', prompt: r`L'anode est l'électrode reliée :`, choices: ['au pôle +', 'au pôle −'], answer: { index: 0 }, explanation: r`Définition.` },
    { type: 'MCQ', prompt: r`Lors d'une réaction chimique, la masse totale :`, choices: ['augmente', 'se conserve', 'diminue'], answer: { index: 1 }, explanation: r`Loi de conservation.` },
    { type: 'MCQ', prompt: r`L'équation de la synthèse de l'eau est :`, choices: [r`$2H_2 + O_2 \to 2H_2O$`, r`$H_2 + O_2 \to H_2O$`, r`$2H_2O \to 2H_2 + O_2$`], answer: { index: 0 }, explanation: r`Équilibrée.` },
    { type: 'OPEN', prompt: r`Pourquoi ces expériences sont-elles dangereuses ?`, answer: { model: 'Le mélange dihydrogène-dioxygène est explosif.', keywords: ['explosif'] }, explanation: r`On travaille avec de petites quantités.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Électrolyse et synthèse de l’eau',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Retiens : **cathode (−) → $H_2$**, **anode (+) → $O_2$**, volume de $H_2$ double.
2. Vérifie qu'une équation est **équilibrée** (même nombre d'atomes de chaque côté).
3. Pour un mélange gazeux, cherche le **réactif en excès** avec la proportion 2 pour 1.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Le gaz recueilli à l'anode est :`, type: 'MCQ', choices: ['le dihydrogène', 'le dioxygène'], answer: { index: 1 }, points: 2, correction: r`Anode (+) : $O_2$.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Le test du dioxygène :`, type: 'MCQ', choices: ['détonation', 'bûchette incandescente qui se rallume', 'eau de chaux troublée'], answer: { index: 1 }, points: 2, correction: r`Test du dioxygène.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Le volume de dihydrogène produit est :`, type: 'MCQ', choices: ['égal', 'double', 'moitié'], answer: { index: 1 }, points: 2, correction: r`De celui du dioxygène.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`Lors d'une électrolyse de l'eau, on recueille 18 mL de gaz à la cathode.`, prompt: r`1. Nomme ce gaz et donne son test d'identification.`, type: 'OPEN', answer: { model: 'Dihydrogène ; détonation près d’une flamme' }, points: 3, correction: r`Dihydrogène $H_2$ *(1,5 pt)* ; détonation à l'approche d'une flamme *(1,5 pt)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Quel volume de gaz (en mL) a-t-on recueilli à l'anode ?`, type: 'NUMERIC', answer: { value: 9 }, points: 3, resultPoints: 1.5, correction: r`Volume moitié : 9 mL de $O_2$.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Écris l'équation-bilan équilibrée de l'électrolyse.`, type: 'OPEN', answer: { model: r`$2H_2O \to 2H_2 + O_2$` }, points: 3, correction: r`$2H_2O \to 2H_2 + O_2$ (réactif, produits *(1,5 pt)* ; équilibrage *(1,5 pt)*).` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. On introduit dans un eudiomètre 50 mL de $H_2$ et 30 mL de $O_2$ et on fait jaillir une étincelle. Quel volume (mL) de gaz reste-t-il ?`, type: 'NUMERIC', answer: { value: 5 }, points: 3, resultPoints: 1.5, correction: r`50 mL de $H_2$ réagissent avec 25 mL de $O_2$ : il reste 5 mL de $O_2$.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`5. Quel est ce gaz restant ?`, type: 'MCQ', choices: ['dihydrogène', 'dioxygène'], answer: { index: 1 }, points: 2, correction: r`Le dioxygène est en excès.` },
    ],
  },
};

export const alcanes: SeedChapter = {
  subject: 'PC',
  order: 7,
  title: 'Les alcanes',
  minutes: 120,
  officialRef: `${REF}, Chimie — Les réactions chimiques`,
  objectives: [
    'Connaître la formule générale et le nom des premiers alcanes',
    'Écrire les formules développées et semi-développées',
    'Écrire les équations de combustion complète ; connaître les dangers de la combustion incomplète',
  ],
  courseMd: r`
> **Situation.** Dans de nombreuses cuisines ivoiriennes, on cuisine au **gaz butane**. Quand la flamme est bleue, tout va bien ; quand elle devient jaune et que les marmites noircissent, il y a un danger. Pourquoi ?

## 1. Les hydrocarbures et les alcanes
Un **hydrocarbure** est un composé formé uniquement de **carbone** (C) et d'**hydrogène** (H).
> Les **alcanes** sont des hydrocarbures saturés (liaisons simples) de formule générale $C_nH_{2n+2}$.

| $n$ | Nom | Formule brute | Formule semi-développée |
|---|---|---|---|
| 1 | méthane | $CH_4$ | $CH_4$ |
| 2 | éthane | $C_2H_6$ | $CH_3 - CH_3$ |
| 3 | propane | $C_3H_8$ | $CH_3 - CH_2 - CH_3$ |
| 4 | butane | $C_4H_{10}$ | $CH_3 - CH_2 - CH_2 - CH_3$ |

- Dans une formule développée, on représente **toutes** les liaisons ; le carbone forme **4 liaisons**, l'hydrogène **1**.
- Le butane a deux **isomères** (même formule brute, formules développées différentes) : le butane linéaire et le méthylpropane $CH_3 - CH(CH_3) - CH_3$.

Sources : gaz naturel (méthane), pétrole, gaz en bouteille (butane, propane).

## 2. Combustion complète
Avec suffisamment de dioxygène, un alcane brûle avec une **flamme bleue** et produit du **dioxyde de carbone** et de l'**eau**.
> $$CH_4 + 2\,O_2 \longrightarrow CO_2 + 2\,H_2O$$
> $$2\,C_4H_{10} + 13\,O_2 \longrightarrow 8\,CO_2 + 10\,H_2O$$

**Tests :** le $CO_2$ **trouble l'eau de chaux** ; l'eau **bleuit le sulfate de cuivre anhydre**.

## 3. Combustion incomplète et dangers
Avec un manque de dioxygène, la flamme est **jaune** et éclairante ; il se forme du **carbone** (suie noire) et du **monoxyde de carbone** $CO$.
⚠️ Le **monoxyde de carbone** est un gaz **incolore, inodore et mortel**. Il ne faut jamais utiliser un réchaud ou un groupe électrogène dans une pièce fermée ; il faut **aérer** et régler les brûleurs.

Autres règles : vérifier l'état du tuyau et du détendeur de la bouteille, fermer le robinet après usage.

Réponse à la situation : la flamme jaune et la suie signalent une **combustion incomplète** qui produit du monoxyde de carbone.
`,
  summaryMd: r`
- Alcanes : $C_nH_{2n+2}$ — méthane, éthane, propane, butane.
- C : 4 liaisons ; H : 1 liaison.
- Combustion complète (flamme bleue) : alcane + $O_2$ → $CO_2$ + $H_2O$.
- $CH_4 + 2O_2 \to CO_2 + 2H_2O$ ; $2C_4H_{10} + 13O_2 \to 8CO_2 + 10H_2O$.
- Combustion incomplète (flamme jaune) : C (suie) + CO **mortel** → aérer.
- Tests : $CO_2$ trouble l'eau de chaux ; eau bleuit $CuSO_4$ anhydre.
`,
  questions: [
    { type: 'MCQ', prompt: r`La formule générale des alcanes est :`, choices: [r`$C_nH_{2n}$`, r`$C_nH_{2n+2}$`, r`$C_nH_{n+2}$`], answer: { index: 1 }, explanation: r`Hydrocarbures saturés.` },
    { type: 'MCQ', prompt: r`La formule brute du butane est :`, choices: [r`$C_4H_8$`, r`$C_4H_{10}$`, r`$C_3H_8$`], answer: { index: 1 }, explanation: r`$n = 4$ : $2 \times 4 + 2 = 10$.` },
    { type: 'NUMERIC', prompt: r`Nombre d'atomes d'hydrogène dans l'alcane à 5 atomes de carbone ?`, answer: { value: 12 }, explanation: r`$2 \times 5 + 2$.` },
    { type: 'MCQ', prompt: r`Le méthane a pour formule :`, choices: [r`$CH_4$`, r`$C_2H_6$`, r`$CH_2$`], answer: { index: 0 }, explanation: r`$n = 1$.` },
    { type: 'MCQ', prompt: r`La combustion complète d'un alcane produit :`, choices: ['du CO et de la suie', r`du $CO_2$ et de l'eau`, 'du dihydrogène'], answer: { index: 1 }, explanation: r`Avec assez de dioxygène.` },
    { type: 'MCQ', prompt: r`Le dioxyde de carbone :`, choices: ['trouble l’eau de chaux', 'rallume une bûchette', 'bleuit le sulfate de cuivre'], answer: { index: 0 }, explanation: r`Test du $CO_2$.` },
    { type: 'MCQ', prompt: r`Une flamme jaune qui noircit les marmites indique :`, choices: ['une combustion complète', 'une combustion incomplète'], answer: { index: 1 }, explanation: r`Manque de dioxygène.` },
    { type: 'MCQ', prompt: r`Le monoxyde de carbone est :`, choices: ['sans danger', 'incolore, inodore et mortel', 'de couleur jaune'], answer: { index: 1 }, explanation: r`Danger majeur.` },
    { type: 'NUMERIC', prompt: r`Dans $CH_4 + x\,O_2 \to CO_2 + 2H_2O$, que vaut $x$ ?`, answer: { value: 2 }, explanation: r`4 atomes d'oxygène à droite.` },
    { type: 'NUMERIC', prompt: r`Dans $2C_4H_{10} + 13O_2 \to 8CO_2 + y\,H_2O$, que vaut $y$ ?`, answer: { value: 10 }, explanation: r`20 atomes H à gauche.` },
    { type: 'NUMERIC', prompt: r`Nombre de liaisons formées par un atome de carbone ?`, answer: { value: 4 }, explanation: r`Tétravalent.` },
    { type: 'MCQ', prompt: r`Des isomères ont :`, choices: ['la même formule brute et des formules développées différentes', 'des formules brutes différentes', 'les mêmes propriétés toujours'], answer: { index: 0 }, explanation: r`Définition.` },
    { type: 'MCQ', prompt: r`La formule semi-développée du propane est :`, choices: [r`$CH_3 - CH_2 - CH_3$`, r`$CH_3 - CH_3$`, r`$CH_2 = CH - CH_3$`], answer: { index: 0 }, explanation: r`3 carbones, liaisons simples.` },
    { type: 'MCQ', prompt: r`Pour éviter l'intoxication au CO, il faut :`, choices: ['fermer portes et fenêtres', 'aérer la pièce', 'utiliser le groupe électrogène à l’intérieur'], answer: { index: 1 }, explanation: r`Apport de dioxygène et évacuation des gaz.` },
    { type: 'OPEN', prompt: r`Écris l'équation de la combustion complète du propane $C_3H_8$.`, answer: { model: r`$C_3H_8 + 5O_2 \to 3CO_2 + 4H_2O$`, keywords: ['5O₂', '3CO₂', '4H₂O'] }, explanation: r`3 C → 3 $CO_2$ ; 8 H → 4 $H_2O$ ; 10 O → 5 $O_2$.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Les alcanes',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Pour équilibrer une combustion : équilibre d'abord C, puis H, et enfin O.
2. Vérifie chaque formule avec $C_nH_{2n+2}$.
3. Associe toujours flamme jaune ⟹ CO ⟹ danger ⟹ aérer.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. L'alcane de formule $C_2H_6$ est :`, type: 'MCQ', choices: ['le méthane', 'l’éthane', 'le propane'], answer: { index: 1 }, points: 2, correction: r`$n = 2$.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. La combustion incomplète du butane produit notamment :`, type: 'MCQ', choices: ['du monoxyde de carbone', 'du dihydrogène', 'du dioxygène'], answer: { index: 0 }, points: 2, correction: r`CO et carbone.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. L'eau de chaux se trouble en présence de :`, type: 'MCQ', choices: ['CO₂', 'H₂O', 'O₂'], answer: { index: 0 }, points: 2, correction: r`Test du dioxyde de carbone.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`Une bouteille de gaz domestique contient du butane.`, prompt: r`1. Donne la formule brute et la formule semi-développée du butane linéaire.`, type: 'OPEN', answer: { model: r`$C_4H_{10}$ ; $CH_3-CH_2-CH_2-CH_3$` }, points: 3, correction: r`$C_4H_{10}$ *(1 pt)* ; $CH_3 - CH_2 - CH_2 - CH_3$ *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Écris l'équation-bilan équilibrée de sa combustion complète.`, type: 'OPEN', answer: { model: r`$2C_4H_{10} + 13O_2 \to 8CO_2 + 10H_2O$` }, points: 4, correction: r`Réactifs et produits *(2 pts)* ; équilibrage *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Combien de molécules de $CO_2$ sont produites par la combustion de 2 molécules de butane ?`, type: 'NUMERIC', answer: { value: 8 }, points: 2, resultPoints: 2, correction: r`Coefficient 8.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. La flamme du réchaud est jaune et les marmites noircissent. Explique ce qui se passe et donne deux consignes de sécurité.`, type: 'OPEN', answer: { model: 'Combustion incomplète ; CO mortel ; aérer, régler l’arrivée d’air' }, points: 5, correction: r`Combustion incomplète par manque de dioxygène *(2 pts)* ; production de monoxyde de carbone mortel *(1 pt)* ; consignes : aérer la pièce, régler le brûleur / ne pas utiliser de réchaud dans une pièce fermée *(2 pts)*.` },
    ],
  },
};

const FIG_LENTILLE = String.raw`<figure class="figure">
<svg viewBox="0 0 320 170" width="320" height="170" role="img" aria-label="Lentille convergente, axe optique, foyers F et F', rayon parallèle à l'axe qui passe par F' et rayon passant par O non dévié">
<line x1="10" y1="90" x2="310" y2="90" stroke="currentColor" stroke-width="1.5"/>
<line x1="160" y1="20" x2="160" y2="160" stroke="currentColor" stroke-width="2.5"/>
<polygon points="160,14 154,26 166,26" fill="currentColor"/><polygon points="160,166 154,154 166,154" fill="currentColor"/>
<g fill="currentColor" font-size="13" font-family="sans-serif">
<circle cx="100" cy="90" r="3"/><text x="94" y="108">F</text>
<circle cx="220" cy="90" r="3"/><text x="214" y="108">F'</text>
<text x="164" y="106">O</text>
</g>
<polyline points="20,50 160,50 300,143" fill="none" stroke="#FF6B00" stroke-width="2"/>
<polyline points="20,50 300,130" fill="none" stroke="#00A651" stroke-width="2" stroke-dasharray="5 4"/>
</svg>
<figcaption>Rayon parallèle à l'axe (orange) : il ressort en passant par F'. Rayon passant par O (vert) : non dévié.</figcaption>
</figure>`;

export const lentilles: SeedChapter = {
  subject: 'PC',
  order: 8,
  title: 'Les lentilles',
  minutes: 120,
  officialRef: `${REF}, Physique — Optique`,
  objectives: [
    'Distinguer lentilles convergentes et divergentes',
    'Connaître le centre optique, les foyers, la distance focale et la vergence',
    'Construire l’image d’un objet donnée par une lentille convergente',
  ],
  courseMd: r`
> **Situation.** Une loupe permet de lire les petites écritures sur une boîte de médicament ; avec la même loupe, on peut concentrer la lumière du soleil en un point brûlant. Comment est-ce possible ?

## 1. Deux types de lentilles
- **Lentilles convergentes** : bords **minces**, centre épais. Un faisceau de lumière parallèle converge en un point.
- **Lentilles divergentes** : bords **épais**, centre mince. Un faisceau parallèle diverge.

Test simple : regardée de près, une lentille convergente **grossit** un texte ; une lentille divergente le **rapetisse**.

## 2. Éléments d'une lentille convergente
- **Axe optique** : droite perpendiculaire à la lentille passant par son centre.
- **Centre optique O** : centre de la lentille.
- **Foyer image F'** : point de l'axe où convergent les rayons arrivant parallèlement à l'axe.
- **Foyer objet F** : symétrique de F' par rapport à O.
- **Distance focale** $f = OF'$ (en m).
- **Vergence** :
> $$C = \dfrac{1}{f}$$
> $C$ en **dioptries** (δ), $f$ en **mètres**. Lentille convergente : $C > 0$.

Exemple : $f = 20$ cm $= 0{,}2$ m donne $C = 5$ δ. Plus la vergence est grande, plus la lentille est convergente.

## 3. Rayons particuliers (lentille convergente)
${FIG_LENTILLE}

> 1. Un rayon passant par le **centre optique O** n'est **pas dévié**.
> 2. Un rayon **parallèle à l'axe** ressort en passant par le **foyer image F'**.
> 3. Un rayon passant par le **foyer objet F** ressort **parallèle à l'axe**.

## 4. Image d'un objet AB
On utilise deux des trois rayons issus de B ; leur point de rencontre est l'image B'. A' est sur l'axe (A sur l'axe).
- Objet **au-delà de F** : l'image est **réelle** (on peut l'obtenir sur un écran) et **renversée**.
- Objet **entre F et O** : l'image est **virtuelle**, **droite** et **agrandie** : c'est le principe de la **loupe**.

**Grandissement :** $\gamma = \dfrac{A'B'}{AB}$.

## 5. Applications
Loupe, appareil photo, projecteur, microscope, lunettes. Réponse à la situation : la loupe est une lentille **convergente** ; le point brûlant est le **foyer** où se concentrent les rayons du soleil (ne jamais laisser une loupe au soleil près d'herbes sèches).
`,
  summaryMd: r`
- Convergente : bords minces ; divergente : bords épais.
- $C = \frac{1}{f}$ (δ, f en m).
- Rayons : par O → non dévié ; parallèle à l'axe → passe par F' ; par F → ressort parallèle.
- Objet au-delà de F → image réelle renversée ; entre F et O → image virtuelle droite agrandie (loupe).
`,
  questions: [
    { type: 'MCQ', prompt: r`Une lentille à bords minces est :`, choices: ['convergente', 'divergente'], answer: { index: 0 }, explanation: r`Centre plus épais que les bords.` },
    { type: 'MCQ', prompt: r`Un rayon passant par le centre optique :`, choices: ['est dévié vers F', 'n’est pas dévié', 'est réfléchi'], answer: { index: 1 }, explanation: r`Rayon particulier.` },
    { type: 'MCQ', prompt: r`Un rayon parallèle à l'axe optique ressort en passant par :`, choices: ['F', 'O', 'F’'], answer: { index: 2 }, explanation: r`Foyer image.` },
    { type: 'NUMERIC', prompt: r`Vergence (δ) d'une lentille de distance focale 20 cm ?`, answer: { value: 5 }, explanation: r`$\frac{1}{0{,}2}$.` },
    { type: 'NUMERIC', prompt: r`Distance focale (cm) d'une lentille de vergence 4 δ ?`, answer: { value: 25 }, explanation: r`$f = 0{,}25$ m.` },
    { type: 'MCQ', prompt: r`L'unité de vergence est :`, choices: ['le mètre', 'la dioptrie', 'le watt'], answer: { index: 1 }, explanation: r`Symbole δ.` },
    { type: 'MCQ', prompt: r`Un rayon passant par le foyer objet F ressort :`, choices: ['parallèle à l’axe', 'par O', 'par F'], answer: { index: 0 }, explanation: r`Rayon particulier.` },
    { type: 'MCQ', prompt: r`Une loupe donne d'un objet placé entre F et O une image :`, choices: ['réelle et renversée', 'virtuelle, droite et agrandie', 'réelle et plus petite'], answer: { index: 1 }, explanation: r`Principe de la loupe.` },
    { type: 'MCQ', prompt: r`Une image réelle :`, choices: ['peut être recueillie sur un écran', 'ne peut pas être recueillie sur un écran'], answer: { index: 0 }, explanation: r`Définition.` },
    { type: 'MCQ', prompt: r`Le foyer objet F est :`, choices: ['confondu avec O', 'le symétrique de F’ par rapport à O', 'à l’infini'], answer: { index: 1 }, explanation: r`$OF = OF'$.` },
    { type: 'MCQ', prompt: r`Une lentille divergente rend un texte vu à travers elle :`, choices: ['plus grand', 'plus petit'], answer: { index: 1 }, explanation: r`Test des lentilles.` },
    { type: 'NUMERIC', prompt: r`Une image mesure 6 cm pour un objet de 2 cm. Grandissement ?`, answer: { value: 3 }, explanation: r`$\frac{6}{2}$.` },
    { type: 'MCQ', prompt: r`Quelle lentille est la plus convergente ?`, choices: ['C = 2 δ', 'C = 10 δ', 'C = 5 δ'], answer: { index: 1 }, explanation: r`Plus grande vergence.` },
    { type: 'MCQ', prompt: r`Objet placé au-delà de F : l'image est :`, choices: ['réelle et renversée', 'virtuelle et droite'], answer: { index: 0 }, explanation: r`Cas du projecteur.` },
    { type: 'OPEN', prompt: r`Pourquoi ne faut-il pas laisser une loupe au soleil près d'herbes sèches ?`, answer: { model: 'Elle concentre les rayons au foyer, ce qui peut enflammer les herbes.', keywords: ['foyer', 'concentre'] }, explanation: r`Risque d'incendie.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Les lentilles',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.** Les constructions peuvent être photographiées.`,
    advice: r`### 🎯 Conseils méthodologiques
1. Convertis la distance focale en **mètres** avant de calculer la vergence.
2. Pour construire une image, trace **au moins deux** rayons particuliers issus de B.
3. Indique la nature de l'image : réelle/virtuelle, droite/renversée, agrandie/réduite.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Une lentille de vergence 8 δ a une distance focale de :`, type: 'MCQ', choices: ['8 cm', '12,5 cm', '0,8 m'], answer: { index: 1 }, points: 2, correction: r`$f = \frac{1}{8} = 0{,}125$ m.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Un rayon parallèle à l'axe d'une lentille convergente passe, après la lentille, par :`, type: 'MCQ', choices: ['le foyer objet', 'le foyer image', 'le centre optique'], answer: { index: 1 }, points: 2, correction: r`Foyer image F'.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Une loupe est une lentille :`, type: 'MCQ', choices: ['convergente', 'divergente'], answer: { index: 0 }, points: 2, correction: r`Elle grossit.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`Une lentille convergente a une distance focale de 4 cm. Un objet AB de 2 cm de haut est placé perpendiculairement à l'axe, A sur l'axe, à 12 cm de la lentille.`, prompt: r`1. Calcule la vergence de la lentille (en δ).`, type: 'NUMERIC', answer: { value: 25 }, points: 3, resultPoints: 1.5, correction: r`$C = \frac{1}{0{,}04} = 25$ δ.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Construis l'image A'B' à l'échelle 1 (photo ou description des rayons utilisés).`, type: 'OPEN', answer: { model: 'Rayon par O non dévié + rayon parallèle à l’axe passant par F’' }, points: 5, correction: r`Axe, lentille, F et F' placés *(1 pt)* ; rayon par O *(1,5 pt)* ; rayon parallèle passant par F' *(1,5 pt)* ; image A'B' *(1 pt)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. La construction donne OA' = 6 cm et A'B' = 1 cm. Calcule le grandissement.`, type: 'NUMERIC', answer: { value: 0.5 }, points: 3, resultPoints: 1.5, correction: r`$\gamma = \frac{1}{2} = 0{,}5$.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Donne la nature de l'image.`, type: 'OPEN', answer: { model: 'réelle, renversée, plus petite' }, points: 3, correction: r`Réelle *(1 pt)*, renversée *(1 pt)*, deux fois plus petite que l'objet *(1 pt)*.` },
    ],
  },
};

export const defautsOeil: SeedChapter = {
  subject: 'PC',
  order: 9,
  title: 'Les défauts de l’œil et leurs corrections',
  minutes: 60,
  officialRef: `${REF}, Physique — Optique`,
  objectives: [
    'Modéliser l’œil par une lentille convergente et un écran',
    'Expliquer l’accommodation',
    'Décrire la myopie, l’hypermétropie, la presbytie et leurs corrections',
  ],
  courseMd: r`
> **Situation.** Koffi voit flou le tableau depuis le fond de la classe mais lit bien son cahier. Sa grand-mère lit difficilement son journal mais voit bien au loin. Ont-ils le même défaut ?

## 1. L'œil réduit
On modélise l'œil par :
- une **lentille convergente** (le **cristallin**, aidé de la cornée) ;
- un **écran** (la **rétine**) sur lequel doit se former l'image ;
- un **diaphragme** (l'**iris**, dont l'ouverture est la **pupille**).

Pour voir **net**, l'image doit se former **sur la rétine**.

## 2. L'accommodation
L'œil normal (**emmétrope**) voit net de loin sans effort. Pour voir de près, le cristallin se **bombe** : sa vergence augmente. C'est l'**accommodation**.
- **Punctum remotum (PR)** : point le plus éloigné vu net (à l'infini pour l'œil normal).
- **Punctum proximum (PP)** : point le plus proche vu net (environ 25 cm pour un jeune adulte).

## 3. Les défauts et leurs corrections
| Défaut | Ce qui se passe | Symptôme | Correction |
|---|---|---|---|
| **Myopie** | œil trop convergent (ou trop long) : l'image d'un objet lointain se forme **en avant** de la rétine | voit mal **de loin** | lentille **divergente** |
| **Hypermétropie** | œil pas assez convergent (ou trop court) : l'image se forme **en arrière** de la rétine | voit mal **de près** (et se fatigue) | lentille **convergente** |
| **Presbytie** | avec l'âge, le cristallin perd sa souplesse : l'accommodation diminue, le PP s'éloigne | voit mal **de près** après 40-45 ans | lentille **convergente** pour lire |

Réponse à la situation : Koffi est **myope** (lunettes à verres divergents) ; sa grand-mère est **presbyte** (lunettes de lecture à verres convergents).

## 4. Prévention et santé
- Faire contrôler sa vue (dépistage à l'école, ophtalmologiste).
- Bien s'éclairer pour lire ; faire des pauses avec les écrans.
- Ne jamais regarder le soleil directement.
`,
  summaryMd: r`
- Œil réduit : cristallin = lentille convergente ; rétine = écran.
- Accommodation : le cristallin se bombe pour voir de près.
- **Myope** : voit mal de loin ; image en avant de la rétine ; verres **divergents**.
- **Hypermétrope** : voit mal de près ; image en arrière ; verres **convergents**.
- **Presbyte** (âge) : accommodation réduite ; verres **convergents** pour lire.
`,
  questions: [
    { type: 'MCQ', prompt: r`Dans l'œil réduit, le cristallin est modélisé par :`, choices: ['un écran', 'une lentille convergente', 'une lentille divergente'], answer: { index: 1 }, explanation: r`Modèle de l'œil.` },
    { type: 'MCQ', prompt: r`La rétine joue le rôle :`, choices: ['de lentille', 'd’écran', 'de diaphragme'], answer: { index: 1 }, explanation: r`L'image s'y forme.` },
    { type: 'MCQ', prompt: r`Pour voir de près, le cristallin :`, choices: ['s’aplatit', 'se bombe', 'ne change pas'], answer: { index: 1 }, explanation: r`Accommodation.` },
    { type: 'MCQ', prompt: r`Un myope voit mal :`, choices: ['de loin', 'de près'], answer: { index: 0 }, explanation: r`Image en avant de la rétine.` },
    { type: 'MCQ', prompt: r`La myopie se corrige avec des verres :`, choices: ['convergents', 'divergents'], answer: { index: 1 }, explanation: r`On diminue la convergence.` },
    { type: 'MCQ', prompt: r`L'hypermétropie se corrige avec des verres :`, choices: ['convergents', 'divergents'], answer: { index: 0 }, explanation: r`On augmente la convergence.` },
    { type: 'MCQ', prompt: r`La presbytie est due :`, choices: ['à l’âge (perte de souplesse du cristallin)', 'à un œil trop long', 'à un manque de lumière'], answer: { index: 0 }, explanation: r`Après 40-45 ans.` },
    { type: 'MCQ', prompt: r`Chez un myope, l'image d'un objet lointain se forme :`, choices: ['sur la rétine', 'en avant de la rétine', 'en arrière de la rétine'], answer: { index: 1 }, explanation: r`Œil trop convergent.` },
    { type: 'MCQ', prompt: r`Chez un hypermétrope, l'image se forme :`, choices: ['en avant de la rétine', 'en arrière de la rétine'], answer: { index: 1 }, explanation: r`Œil pas assez convergent.` },
    { type: 'NUMERIC', prompt: r`Distance (cm) approximative du punctum proximum d'un jeune œil normal ?`, answer: { value: 25 }, explanation: r`Environ 25 cm.` },
    { type: 'MCQ', prompt: r`L'iris joue le rôle :`, choices: ['de diaphragme', 'd’écran', 'de lentille'], answer: { index: 0 }, explanation: r`Il règle la quantité de lumière.` },
    { type: 'MCQ', prompt: r`Le punctum remotum d'un œil normal est :`, choices: ['à 25 cm', 'à l’infini', 'à 1 m'], answer: { index: 1 }, explanation: r`Il voit net de loin sans effort.` },
    { type: 'MCQ', prompt: r`Une grand-mère qui lit son journal en l'éloignant est probablement :`, choices: ['myope', 'presbyte'], answer: { index: 1 }, explanation: r`Son PP s'est éloigné.` },
    { type: 'MCQ', prompt: r`Un élève voit flou le tableau mais lit bien son cahier : il est :`, choices: ['myope', 'hypermétrope'], answer: { index: 0 }, explanation: r`Il voit mal de loin.` },
    { type: 'OPEN', prompt: r`Donne deux conseils pour protéger sa vue.`, answer: { model: 'Contrôler sa vue régulièrement ; bien s’éclairer ; pauses avec les écrans ; ne pas regarder le soleil.', keywords: ['contrôle', 'éclairage', 'écrans', 'soleil'] }, explanation: r`Prévention.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Défauts de l’œil',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Retiens : **myope → divergent** ; **hypermétrope et presbyte → convergent**.
2. Relie toujours le symptôme (loin/près) à la position de l'image (avant/arrière de la rétine).`,
    items: [
      { section: 'Exercice 1 (8 pts)', prompt: r`1. L'œil normal qui regarde un objet proche :`, type: 'MCQ', choices: ['accommode', 'n’accommode pas'], answer: { index: 0 }, points: 2, correction: r`Le cristallin se bombe.` },
      { section: 'Exercice 1 (8 pts)', prompt: r`2. Un œil trop convergent est :`, type: 'MCQ', choices: ['myope', 'hypermétrope'], answer: { index: 0 }, points: 2, correction: r`Image en avant de la rétine.` },
      { section: 'Exercice 1 (8 pts)', prompt: r`3. Des lunettes de vergence −2 δ corrigent :`, type: 'MCQ', choices: ['la myopie', 'la presbytie', 'l’hypermétropie'], answer: { index: 0 }, points: 2, correction: r`Vergence négative : lentille divergente.` },
      { section: 'Exercice 1 (8 pts)', prompt: r`4. La presbytie apparaît surtout :`, type: 'MCQ', choices: ['chez l’enfant', 'après 40-45 ans'], answer: { index: 1 }, points: 2, correction: r`Perte de souplesse du cristallin.` },
      { section: 'Exercice 2 (12 pts)', sectionIntro: r`Aya, élève de 3ᵉ, voit flou les écritures au tableau depuis le fond de la classe mais lit bien son livre. Son grand-père, 62 ans, voit bien au loin mais doit éloigner son journal pour lire.`, prompt: r`1. Quel est le défaut d'Aya ? Justifie.`, type: 'OPEN', answer: { model: 'Myopie : elle voit mal de loin.' }, points: 3, correction: r`Myopie *(1,5 pt)* : elle voit mal de loin, l'image se forme en avant de la rétine *(1,5 pt)*.` },
      { section: 'Exercice 2 (12 pts)', prompt: r`2. Quel type de verres doit-elle porter ?`, type: 'MCQ', choices: ['convergents', 'divergents'], answer: { index: 1 }, points: 3, correction: r`Verres divergents.` },
      { section: 'Exercice 2 (12 pts)', prompt: r`3. Quel est le défaut du grand-père ? Explique sa cause.`, type: 'OPEN', answer: { model: 'Presbytie due à l’âge' }, points: 3, correction: r`Presbytie *(1,5 pt)* : avec l'âge, le cristallin perd sa souplesse et accommode moins *(1,5 pt)*.` },
      { section: 'Exercice 2 (12 pts)', prompt: r`4. Quel type de verres corrige son défaut pour la lecture ?`, type: 'MCQ', choices: ['convergents', 'divergents'], answer: { index: 0 }, points: 3, correction: r`Verres convergents (lunettes de lecture).` },
    ],
  },
};
