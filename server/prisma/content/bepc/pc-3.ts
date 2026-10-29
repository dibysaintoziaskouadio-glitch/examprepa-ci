import { SeedChapter } from '../types';

const r = String.raw;
const REF = 'Programme de Physique-Chimie 3e (DPFC) — progression 2026-2027';

export const oxydation: SeedChapter = {
  subject: 'PC',
  order: 10,
  title: 'Oxydation des corps purs simples',
  minutes: 120,
  officialRef: `${REF}, Chimie — Les réactions chimiques`,
  objectives: [
    'Définir une oxydation et un oxyde',
    'Écrire les équations de combustion du carbone, du soufre, du fer, de l’aluminium et du cuivre',
    'Distinguer oxydation vive et oxydation lente (rouille) ; protéger le fer',
  ],
  courseMd: r`
> **Situation.** Les tôles des toits rouillent après quelques saisons des pluies, alors que les marmites en aluminium restent brillantes. Pourquoi ?

## 1. Définitions
> Une **oxydation** est une réaction chimique au cours de laquelle un corps **se combine avec le dioxygène** (gain d'oxygène). Le produit formé est un **oxyde**.

- **Oxydation vive** (combustion) : rapide, avec flamme ou incandescence, dégagement de chaleur.
- **Oxydation lente** : sans flamme, sur des jours ou des années (rouille du fer).

## 2. Combustions de non-métaux
- **Carbone** : brûle avec incandescence ; le gaz formé trouble l'eau de chaux.
> $$C + O_2 \longrightarrow CO_2$$
- **Soufre** : brûle avec une flamme bleue ; le dioxyde de soufre $SO_2$ est un gaz suffocant et toxique (pluies acides).
> $$S + O_2 \longrightarrow SO_2$$

## 3. Oxydation des métaux
- **Fer** : la laine de fer chauffée brûle en lançant des étincelles et forme de l'**oxyde magnétique** :
> $$3\,Fe + 2\,O_2 \longrightarrow Fe_3O_4$$
  À l'air humide, le fer s'oxyde lentement : la **rouille** (oxyde de fer hydraté, de type $Fe_2O_3$) est **poreuse** ; elle laisse passer l'air et l'eau, donc le fer est rongé en profondeur.
- **Aluminium** :
> $$4\,Al + 3\,O_2 \longrightarrow 2\,Al_2O_3$$
  La couche d'alumine est **imperméable** : elle **protège** le métal. D'où les marmites qui ne « rouillent » pas.
- **Cuivre** : chauffé, il se recouvre d'oxyde de cuivre II noir :
> $$2\,Cu + O_2 \longrightarrow 2\,CuO$$

## 4. Protéger le fer contre la rouille
Peinture, graissage, **galvanisation** (dépôt de zinc : tôles galvanisées), chromage, alliages (acier inoxydable). Le but : empêcher l'air humide d'atteindre le fer.

## 5. Conservation
Au cours d'une oxydation, la **masse totale se conserve** : la masse de l'oxyde est égale à la masse du métal plus celle du dioxygène consommé. C'est pourquoi un clou rouillé est plus lourd qu'un clou neuf.
`,
  summaryMd: r`
- Oxydation = gain d'oxygène ; produit = **oxyde**.
- $C + O_2 \to CO_2$ ; $S + O_2 \to SO_2$.
- $3Fe + 2O_2 \to Fe_3O_4$ ; $4Al + 3O_2 \to 2Al_2O_3$ ; $2Cu + O_2 \to 2CuO$.
- Rouille : poreuse → le fer est rongé ; alumine : couche protectrice.
- Protection du fer : peinture, graisse, galvanisation (zinc).
`,
  questions: [
    { type: 'MCQ', prompt: r`Une oxydation est :`, choices: ['une perte d’oxygène', 'un gain d’oxygène', 'une dissolution'], answer: { index: 1 }, explanation: r`Combinaison avec le dioxygène.` },
    { type: 'MCQ', prompt: r`La combustion du carbone produit :`, choices: [r`$CO_2$`, r`$SO_2$`, r`$H_2O$`], answer: { index: 0 }, explanation: r`$C + O_2 \to CO_2$.` },
    { type: 'MCQ', prompt: r`La combustion du soufre produit :`, choices: [r`$SO_2$`, r`$CO_2$`, r`$S_2O$`], answer: { index: 0 }, explanation: r`Dioxyde de soufre.` },
    { type: 'NUMERIC', prompt: r`Dans $3Fe + x\,O_2 \to Fe_3O_4$, que vaut $x$ ?`, answer: { value: 2 }, explanation: r`4 atomes d'oxygène.` },
    { type: 'NUMERIC', prompt: r`Dans $4Al + 3O_2 \to y\,Al_2O_3$, que vaut $y$ ?`, answer: { value: 2 }, explanation: r`4 atomes Al.` },
    { type: 'MCQ', prompt: r`La rouille est :`, choices: ['imperméable', 'poreuse'], answer: { index: 1 }, explanation: r`Elle laisse passer l'air humide.` },
    { type: 'MCQ', prompt: r`L'aluminium est protégé par :`, choices: ['une couche d’alumine imperméable', 'la rouille', 'rien'], answer: { index: 0 }, explanation: r`$Al_2O_3$.` },
    { type: 'MCQ', prompt: r`La galvanisation consiste à recouvrir le fer de :`, choices: ['zinc', 'cuivre', 'soufre'], answer: { index: 0 }, explanation: r`Tôles galvanisées.` },
    { type: 'MCQ', prompt: r`L'oxyde de cuivre II formé est de couleur :`, choices: ['noire', 'rouge', 'blanche'], answer: { index: 0 }, explanation: r`CuO noir.` },
    { type: 'MCQ', prompt: r`La rouille du fer est une oxydation :`, choices: ['vive', 'lente'], answer: { index: 1 }, explanation: r`Sans flamme.` },
    { type: 'MCQ', prompt: r`Le dioxyde de soufre est :`, choices: ['inoffensif', 'toxique et suffocant'], answer: { index: 1 }, explanation: r`Responsable de pluies acides.` },
    { type: 'NUMERIC', prompt: r`8,4 g de fer réagissent avec 3,2 g de dioxygène. Masse (g) d'oxyde formé ?`, answer: { value: 11.6 }, explanation: r`Conservation de la masse.` },
    { type: 'MCQ', prompt: r`Un clou rouillé, comparé au clou neuf, est :`, choices: ['plus léger', 'plus lourd', 'de même masse'], answer: { index: 1 }, explanation: r`Il a fixé de l'oxygène.` },
    { type: 'MCQ', prompt: r`Le produit de l'oxydation d'un corps s'appelle :`, choices: ['un oxyde', 'un acide', 'un alcane'], answer: { index: 0 }, explanation: r`Définition.` },
    { type: 'OPEN', prompt: r`Donne deux moyens de protéger un portail en fer contre la rouille.`, answer: { model: 'Le peindre ; le galvaniser ; le graisser.', keywords: ['peinture', 'galvanisation', 'graisse'] }, explanation: r`Empêcher l'air humide d'atteindre le fer.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Oxydation des corps purs simples',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Équilibre d'abord le métal, puis l'oxygène.
2. Utilise la **conservation de la masse** pour les calculs.
3. Explique la rouille par le caractère **poreux** de l'oxyde.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. L'équation de la combustion du carbone est :`, type: 'MCQ', choices: [r`$C + O_2 \to CO_2$`, r`$C + O \to CO_2$`, r`$2C + O_2 \to CO_2$`], answer: { index: 0 }, points: 2, correction: r`Équation équilibrée.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Les tôles galvanisées sont recouvertes de :`, type: 'MCQ', choices: ['zinc', 'peinture uniquement', 'aluminium'], answer: { index: 0 }, points: 2, correction: r`Galvanisation.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. L'oxydation lente du fer à l'air humide donne :`, type: 'MCQ', choices: ['la rouille', 'l’alumine', 'le soufre'], answer: { index: 0 }, points: 2, correction: r`Rouille.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`On fait brûler 8,4 g de laine de fer dans un flacon de dioxygène. On obtient de l'oxyde magnétique $Fe_3O_4$.`, prompt: r`1. Écris l'équation-bilan équilibrée de la réaction.`, type: 'OPEN', answer: { model: r`$3Fe + 2O_2 \to Fe_3O_4$` }, points: 4, correction: r`Réactifs/produit *(2 pts)* ; équilibrage *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. La masse d'oxyde obtenue est 11,6 g. Calcule la masse de dioxygène consommée (en g).`, type: 'NUMERIC', answer: { value: 3.2 }, points: 4, resultPoints: 2, correction: r`Conservation de la masse : $11{,}6 - 8{,}4 = 3{,}2$ g.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Pourquoi une marmite en aluminium ne se détruit-elle pas comme une tôle en fer non protégée ?`, type: 'OPEN', answer: { model: 'L’alumine forme une couche imperméable qui protège le métal ; la rouille est poreuse.' }, points: 4, correction: r`L'alumine est une couche **imperméable** qui protège le métal *(2 pts)* ; la rouille est **poreuse** et laisse l'oxydation continuer *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Donne un moyen de protéger la tôle de fer.`, type: 'OPEN', answer: { model: 'peinture / galvanisation' }, points: 2, correction: r`Peinture, galvanisation, graissage…` },
    ],
  },
};

export const reductionOxydes: SeedChapter = {
  subject: 'PC',
  order: 11,
  title: 'Réduction des oxydes',
  minutes: 120,
  officialRef: `${REF}, Chimie — Les réactions chimiques`,
  objectives: [
    'Définir une réduction, un oxydant et un réducteur',
    'Écrire les équations de réduction de l’oxyde de cuivre et de l’oxyde de fer',
    'Expliquer le principe de la métallurgie du fer (haut fourneau)',
  ],
  courseMd: r`
> **Situation.** Dans la nature, les métaux se trouvent le plus souvent sous forme d'**oxydes** (minerais). Comment obtenir le métal pur ? Il faut lui **retirer l'oxygène**.

## 1. Réduction de l'oxyde de cuivre par le carbone
On chauffe un mélange de poudre d'oxyde de cuivre II (noir) et de carbone. On observe :
- l'apparition d'un **dépôt rouge** de cuivre ;
- un gaz qui **trouble l'eau de chaux** : du dioxyde de carbone.
> $$2\,CuO + C \longrightarrow 2\,Cu + CO_2$$

## 2. Définitions
> - Une **réduction** est une perte d'oxygène : l'oxyde de cuivre est **réduit** en cuivre.
> - Le corps qui cède son oxygène est l'**oxydant** (ici $CuO$).
> - Le corps qui capte l'oxygène est le **réducteur** (ici $C$) ; il est **oxydé** en $CO_2$.
> - Réduction et oxydation se produisent **simultanément** : c'est une **oxydoréduction**.

## 3. Autres exemples
- **Aluminothermie** (soudure des rails) : l'aluminium réduit l'oxyde de fer III.
> $$Fe_2O_3 + 2\,Al \longrightarrow 2\,Fe + Al_2O_3$$
- **Réduction par le dihydrogène** : $CuO + H_2 \longrightarrow Cu + H_2O$.

## 4. La sidérurgie : le haut fourneau
Le minerai de fer (oxydes de fer) est réduit par le **monoxyde de carbone** produit par la combustion du coke (carbone) :
> $$Fe_2O_3 + 3\,CO \longrightarrow 2\,Fe + 3\,CO_2$$
On obtient de la **fonte** (fer contenant du carbone), puis de l'**acier** après affinage.

La Côte d'Ivoire possède des gisements de fer (région de Man, mont Klahoyo) ; l'extraction de l'or (Ity, Yaouré…) et du manganèse fait aussi appel à des procédés chimiques.

## 5. Méthode : identifier oxydant et réducteur
Dans l'équation, cherche quel corps **perd** l'oxygène (oxydant, il est réduit) et quel corps **gagne** l'oxygène (réducteur, il est oxydé).
`,
  summaryMd: r`
- Réduction = **perte** d'oxygène ; oxydation = **gain**.
- Oxydant : cède l'oxygène (est réduit) ; réducteur : capte l'oxygène (est oxydé).
- $2CuO + C \to 2Cu + CO_2$ (dépôt rouge, eau de chaux troublée).
- $Fe_2O_3 + 2Al \to 2Fe + Al_2O_3$ (aluminothermie).
- Haut fourneau : $Fe_2O_3 + 3CO \to 2Fe + 3CO_2$.
`,
  questions: [
    { type: 'MCQ', prompt: r`Une réduction est :`, choices: ['un gain d’oxygène', 'une perte d’oxygène'], answer: { index: 1 }, explanation: r`Inverse de l'oxydation.` },
    { type: 'MCQ', prompt: r`Dans $2CuO + C \to 2Cu + CO_2$, le réducteur est :`, choices: [r`$CuO$`, r`$C$`, r`$Cu$`], answer: { index: 1 }, explanation: r`Il capte l'oxygène.` },
    { type: 'MCQ', prompt: r`Dans la même réaction, l'oxydant est :`, choices: [r`$CuO$`, r`$C$`, r`$CO_2$`], answer: { index: 0 }, explanation: r`Il cède l'oxygène.` },
    { type: 'MCQ', prompt: r`Le dépôt rouge obtenu est :`, choices: ['du cuivre', 'du carbone', 'de la rouille'], answer: { index: 0 }, explanation: r`Cuivre métallique.` },
    { type: 'MCQ', prompt: r`Une oxydoréduction associe :`, choices: ['une oxydation et une réduction simultanées', 'deux oxydations', 'une combustion seule'], answer: { index: 0 }, explanation: r`Définition.` },
    { type: 'NUMERIC', prompt: r`Dans $Fe_2O_3 + x\,Al \to 2Fe + Al_2O_3$, que vaut $x$ ?`, answer: { value: 2 }, explanation: r`2 atomes Al à droite.` },
    { type: 'NUMERIC', prompt: r`Dans $Fe_2O_3 + 3CO \to 2Fe + y\,CO_2$, que vaut $y$ ?`, answer: { value: 3 }, explanation: r`3 atomes C.` },
    { type: 'MCQ', prompt: r`Dans le haut fourneau, le réducteur de l'oxyde de fer est :`, choices: ['le monoxyde de carbone', 'le dioxygène', 'l’eau'], answer: { index: 0 }, explanation: r`CO devient $CO_2$.` },
    { type: 'MCQ', prompt: r`L'aluminothermie sert notamment à :`, choices: ['souder des rails', 'purifier l’eau', 'fabriquer du verre'], answer: { index: 0 }, explanation: r`Réaction très exothermique.` },
    { type: 'MCQ', prompt: r`Le réducteur, au cours de la réaction, est :`, choices: ['réduit', 'oxydé'], answer: { index: 1 }, explanation: r`Il gagne de l'oxygène.` },
    { type: 'MCQ', prompt: r`Dans $CuO + H_2 \to Cu + H_2O$, le réducteur est :`, choices: [r`$H_2$`, r`$CuO$`], answer: { index: 0 }, explanation: r`Il devient $H_2O$.` },
    { type: 'MCQ', prompt: r`La fonte est :`, choices: ['du fer contenant du carbone', 'du cuivre pur', 'un oxyde'], answer: { index: 0 }, explanation: r`Produit du haut fourneau.` },
    { type: 'NUMERIC', prompt: r`Dans $2CuO + C \to 2Cu + CO_2$, combien d'atomes d'oxygène de chaque côté ?`, answer: { value: 2 }, explanation: r`Conservation des atomes.` },
    { type: 'MCQ', prompt: r`Les métaux se trouvent souvent dans la nature sous forme :`, choices: ['d’oxydes (minerais)', 'de métaux purs uniquement', 'de gaz'], answer: { index: 0 }, explanation: r`Il faut les réduire.` },
    { type: 'OPEN', prompt: r`Explique pourquoi on dit que l'oxydation et la réduction sont simultanées.`, answer: { model: 'L’oxygène perdu par l’oxydant est gagné par le réducteur au même moment.', keywords: ['perd', 'gagne', 'même temps'] }, explanation: r`Transfert d'oxygène.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Réduction des oxydes',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Suis l'oxygène : qui le **perd** (oxydant, réduit) ? qui le **gagne** (réducteur, oxydé) ?
2. Équilibre l'équation et vérifie atome par atome.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Une réduction est :`, type: 'MCQ', choices: ['une perte d’oxygène', 'un gain d’oxygène'], answer: { index: 0 }, points: 2, correction: r`Définition.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Le corps qui capte l'oxygène est :`, type: 'MCQ', choices: ['l’oxydant', 'le réducteur'], answer: { index: 1 }, points: 2, correction: r`Définition.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Le gaz qui trouble l'eau de chaux dans la réduction de CuO par C est :`, type: 'MCQ', choices: ['CO₂', 'O₂', 'H₂'], answer: { index: 0 }, points: 2, correction: r`Dioxyde de carbone.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`On chauffe un mélange d'oxyde de cuivre II et de carbone. On observe un dépôt rouge et un gaz qui trouble l'eau de chaux.`, prompt: r`1. Nomme les produits formés.`, type: 'OPEN', answer: { model: 'cuivre et dioxyde de carbone' }, points: 3, correction: r`Cuivre (dépôt rouge) *(1,5 pt)* ; dioxyde de carbone *(1,5 pt)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Écris l'équation-bilan équilibrée.`, type: 'OPEN', answer: { model: r`$2CuO + C \to 2Cu + CO_2$` }, points: 4, correction: r`Formules *(2 pts)* ; équilibrage *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Identifie l'oxydant et le réducteur ; précise quel corps est oxydé et quel corps est réduit.`, type: 'OPEN', answer: { model: 'Oxydant CuO (réduit) ; réducteur C (oxydé)' }, points: 4, correction: r`Oxydant : CuO, il est réduit *(2 pts)* ; réducteur : C, il est oxydé *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. On utilise 16 g d'oxyde de cuivre et 1,2 g de carbone ; on obtient 12,8 g de cuivre. Masse (g) de $CO_2$ dégagée ?`, type: 'NUMERIC', answer: { value: 4.4 }, points: 3, resultPoints: 1.5, correction: r`Conservation de la masse : $16 + 1{,}2 - 12{,}8 = 4{,}4$ g.` },
    ],
  },
};

export const solutionsPH: SeedChapter = {
  subject: 'PC',
  order: 12,
  title: 'Solutions acides, basiques et neutres',
  minutes: 120,
  officialRef: `${REF}, Chimie — Les réactions chimiques`,
  objectives: [
    'Mesurer le pH d’une solution (papier pH, pH-mètre, indicateurs colorés)',
    'Classer une solution en acide, basique ou neutre',
    'Connaître l’effet de la dilution et les règles de sécurité',
  ],
  courseMd: r`
> **Situation.** Le jus de citron « pique », l'eau savonneuse est glissante, l'eau de pluie semble neutre. Comment le vérifier ?

## 1. Le pH
Le **pH** est un nombre (de 0 à 14) qui indique si une solution aqueuse est acide, neutre ou basique (à 25 °C) :
> - **pH < 7** : solution **acide** ;
> - **pH = 7** : solution **neutre** ;
> - **pH > 7** : solution **basique**.

Plus le pH est **petit**, plus la solution est **acide** ; plus il est **grand**, plus elle est **basique**.

| Solution | pH approximatif | Nature |
|---|---|---|
| Jus de citron | 2 | acide |
| Vinaigre | 3 | acide |
| Eau pure | 7 | neutre |
| Eau savonneuse | 9 à 10 | basique |
| Eau de javel | 11 à 12 | basique |
| Soude (déboucheur) | 13 à 14 | basique |

## 2. Mesurer le pH
- **Papier pH** : on dépose une goutte de solution avec un agitateur ; on compare la couleur à l'échelle de teintes.
- **pH-mètre** : mesure précise.
- **Indicateurs colorés** : le **bleu de bromothymol (BBT)** est **jaune** en milieu acide, **vert** en milieu neutre et **bleu** en milieu basique.

## 3. Ions responsables
- Une solution acide contient plus d'**ions hydrogène** $H^+$ (ou ions oxonium $H_3O^+$) que d'**ions hydroxyde** $OH^-$.
- Une solution basique contient plus d'ions $OH^-$ que d'ions $H^+$.
- Une solution neutre en contient autant.

Exemples : l'acide chlorhydrique ($H^+ + Cl^-$), la soude ou hydroxyde de sodium ($Na^+ + OH^-$).

## 4. Dilution
Quand on ajoute de l'eau :
> - à une solution **acide**, son pH **augmente** et se rapproche de 7 ;
> - à une solution **basique**, son pH **diminue** et se rapproche de 7.
La dilution ne permet jamais de « traverser » 7.

## 5. Sécurité
Les acides et les bases concentrés sont **corrosifs** (pictogramme de danger) : porter **lunettes et gants** ; toujours **verser l'acide dans l'eau**, jamais l'inverse ; ne jamais goûter un produit chimique. En cas de projection, rincer abondamment à l'eau.
`,
  summaryMd: r`
- pH < 7 acide ; = 7 neutre ; > 7 basique.
- BBT : **jaune** (acide), **vert** (neutre), **bleu** (basique).
- Acide : $H^+$ majoritaires ; basique : $OH^-$ majoritaires.
- Dilution : le pH se rapproche de 7.
- Sécurité : lunettes, gants ; **l'acide dans l'eau**.
`,
  questions: [
    { type: 'MCQ', prompt: r`Une solution de pH = 3 est :`, choices: ['acide', 'neutre', 'basique'], answer: { index: 0 }, explanation: r`pH < 7.` },
    { type: 'MCQ', prompt: r`Une solution de pH = 11 est :`, choices: ['acide', 'neutre', 'basique'], answer: { index: 2 }, explanation: r`pH > 7.` },
    { type: 'NUMERIC', prompt: r`pH de l'eau pure à 25 °C ?`, answer: { value: 7 }, explanation: r`Neutre.` },
    { type: 'MCQ', prompt: r`En milieu acide, le BBT est :`, choices: ['jaune', 'vert', 'bleu'], answer: { index: 0 }, explanation: r`Indicateur coloré.` },
    { type: 'MCQ', prompt: r`En milieu basique, le BBT est :`, choices: ['jaune', 'vert', 'bleu'], answer: { index: 2 }, explanation: r`Indicateur coloré.` },
    { type: 'MCQ', prompt: r`Quelle solution est la plus acide ?`, choices: ['pH = 2', 'pH = 5', 'pH = 6'], answer: { index: 0 }, explanation: r`Plus petit pH.` },
    { type: 'MCQ', prompt: r`On dilue une solution acide de pH 3. Son pH :`, choices: ['diminue', 'augmente vers 7', 'dépasse 7'], answer: { index: 1 }, explanation: r`Il se rapproche de 7.` },
    { type: 'MCQ', prompt: r`On dilue une solution basique de pH 12. Son pH :`, choices: ['augmente', 'diminue vers 7', 'devient 0'], answer: { index: 1 }, explanation: r`Il se rapproche de 7.` },
    { type: 'MCQ', prompt: r`Une solution basique contient majoritairement des ions :`, choices: [r`$H^+$`, r`$OH^-$`, r`$Cl^-$`], answer: { index: 1 }, explanation: r`Ions hydroxyde.` },
    { type: 'MCQ', prompt: r`Le jus de citron est :`, choices: ['acide', 'basique', 'neutre'], answer: { index: 0 }, explanation: r`pH ≈ 2.` },
    { type: 'MCQ', prompt: r`L'eau savonneuse est :`, choices: ['acide', 'basique', 'neutre'], answer: { index: 1 }, explanation: r`pH ≈ 9-10.` },
    { type: 'MCQ', prompt: r`Pour diluer un acide concentré, on verse :`, choices: ['l’eau dans l’acide', 'l’acide dans l’eau'], answer: { index: 1 }, explanation: r`Règle de sécurité.` },
    { type: 'MCQ', prompt: r`L'appareil qui mesure précisément le pH est :`, choices: ['le pH-mètre', 'le voltmètre', 'le thermomètre'], answer: { index: 0 }, explanation: r`pH-mètre.` },
    { type: 'MCQ', prompt: r`La soude a pour ions :`, choices: [r`$Na^+$ et $OH^-$`, r`$H^+$ et $Cl^-$`, r`$Na^+$ et $Cl^-$`], answer: { index: 0 }, explanation: r`Hydroxyde de sodium.` },
    { type: 'OPEN', prompt: r`Donne deux précautions à prendre en manipulant de l'acide chlorhydrique concentré.`, answer: { model: 'Porter des lunettes et des gants ; verser l’acide dans l’eau ; ne pas goûter.', keywords: ['lunettes', 'gants', 'acide dans l’eau'] }, explanation: r`Produit corrosif.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Solutions acides, basiques et neutres',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Compare toujours le pH à **7**.
2. Pour la dilution, retiens : « le pH se rapproche de 7 ».
3. Pense aux règles de **sécurité** : elles rapportent des points.`,
    items: [
      { section: 'Exercice 1 (8 pts)', sectionIntro: r`On mesure le pH de quatre solutions : A (pH 2), B (pH 7), C (pH 9), D (pH 13).`, prompt: r`1. La solution acide est :`, type: 'MCQ', choices: ['A', 'B', 'C'], answer: { index: 0 }, points: 2, correction: r`pH < 7.` },
      { section: 'Exercice 1 (8 pts)', prompt: r`2. La solution neutre est :`, type: 'MCQ', choices: ['A', 'B', 'D'], answer: { index: 1 }, points: 2, correction: r`pH = 7.` },
      { section: 'Exercice 1 (8 pts)', prompt: r`3. La solution la plus basique est :`, type: 'MCQ', choices: ['B', 'C', 'D'], answer: { index: 2 }, points: 2, correction: r`Plus grand pH.` },
      { section: 'Exercice 1 (8 pts)', prompt: r`4. Couleur du BBT dans la solution C :`, type: 'MCQ', choices: ['jaune', 'vert', 'bleu'], answer: { index: 2 }, points: 2, correction: r`Milieu basique.` },
      { section: 'Exercice 2 (12 pts)', sectionIntro: r`Awa prépare une boisson au citron. Elle mesure le pH du jus pur : pH = 2,4. Elle ajoute ensuite beaucoup d'eau.`, prompt: r`1. Le jus pur est-il acide, neutre ou basique ? Justifie.`, type: 'OPEN', answer: { model: 'acide car pH < 7' }, points: 3, correction: r`Acide *(1,5 pt)* car $2{,}4 < 7$ *(1,5 pt)*.` },
      { section: 'Exercice 2 (12 pts)', prompt: r`2. Après dilution, le pH peut-il valoir : `, type: 'MCQ', choices: ['1,5', '3,8', '8'], answer: { index: 1 }, points: 3, correction: r`Il augmente en restant inférieur à 7.` },
      { section: 'Exercice 2 (12 pts)', prompt: r`3. Quels ions sont majoritaires dans le jus de citron ?`, type: 'OPEN', answer: { model: 'ions H⁺ (oxonium)' }, points: 3, correction: r`Les ions hydrogène $H^+$ (ou oxonium $H_3O^+$).` },
      { section: 'Exercice 2 (12 pts)', prompt: r`4. Au laboratoire, quelle précaution prendre pour diluer un acide concentré ?`, type: 'OPEN', answer: { model: 'Verser l’acide dans l’eau, avec lunettes et gants.' }, points: 3, correction: r`Verser l'acide dans l'eau (et non l'inverse) *(2 pts)*, porter lunettes et gants *(1 pt)*.` },
    ],
  },
};

export const puissanceElectrique: SeedChapter = {
  subject: 'PC',
  order: 13,
  title: 'Puissance et énergie électriques',
  minutes: 120,
  officialRef: `${REF}, Physique — Électricité`,
  objectives: [
    'Connaître la puissance nominale d’un appareil et la relation P = U × I',
    'Calculer l’énergie électrique consommée E = P × t (J, Wh, kWh)',
    'Calculer le coût d’une consommation ; connaître le rôle du fusible et du disjoncteur',
  ],
  courseMd: r`
> **Situation.** La facture d'électricité d'une famille de Bouaké a augmenté depuis l'achat d'un congélateur et d'un fer à repasser. Comment calculer ce que consomme chaque appareil ?

## 1. Puissance nominale
Sur chaque appareil figurent des **indications nominales** : par exemple « 220 V – 1 000 W ».
- La **tension nominale** (220 V) est la tension sous laquelle l'appareil fonctionne normalement.
- La **puissance nominale** (1 000 W) est la puissance qu'il reçoit dans ces conditions.

> Pour un appareil de chauffage (ou en courant continu) : $$P = U \times I$$
> $P$ en watts (W), $U$ en volts (V), $I$ en ampères (A).

Exemple : fer à repasser 220 V – 1 100 W : $I = \dfrac{P}{U} = \dfrac{1\,100}{220} = 5$ A.

## 2. Énergie électrique
> $$E = P \times t$$
> - $E$ en **joules (J)** si $P$ en W et $t$ en **secondes** ;
> - $E$ en **wattheures (Wh)** si $P$ en W et $t$ en **heures** ;
> - 1 kWh = 1 000 Wh = 3 600 000 J.

Exemples :
- Fer de 1 000 W utilisé 2 h : $E = 2\,000$ Wh $= 2$ kWh.
- Lampe de 60 W allumée 5 h par jour pendant 30 jours : $E = 60 \times 150 = 9\,000$ Wh $= 9$ kWh.

## 3. Le compteur et le coût
Le **compteur électrique** mesure l'énergie consommée en **kWh**.
> Coût = énergie (kWh) × prix du kWh.

Exemple (prix supposé : 80 FCFA le kWh) : 9 kWh coûtent $9 \times 80 = 720$ FCFA.

## 4. Sécurité de l'installation
- Quand plusieurs appareils fonctionnent en même temps, les intensités s'**additionnent** dans le fil principal.
- Le **fusible** fond et le **disjoncteur** coupe le courant si l'intensité dépasse la valeur maximale : ils protègent contre les **surintensités** (court-circuit, trop d'appareils sur une même prise).

## 5. Économiser l'énergie
Éteindre les lampes inutiles, utiliser des lampes LED (moins puissantes pour le même éclairage), débrancher les chargeurs, ne pas laisser la porte du réfrigérateur ouverte.
`,
  summaryMd: r`
- Indications nominales : tension (V) et puissance (W).
- $P = U \times I$.
- $E = P \times t$ : J (W × s) ou Wh (W × h) ; 1 kWh = 3 600 000 J.
- Coût = kWh × prix du kWh.
- Fusible / disjoncteur : protection contre les surintensités.
`,
  questions: [
    { type: 'MCQ', prompt: r`L'unité de la puissance électrique est :`, choices: ['le volt', 'le watt', 'l’ampère'], answer: { index: 1 }, explanation: r`W.` },
    { type: 'NUMERIC', prompt: r`Intensité (A) d'un fer 220 V – 1 100 W ?`, answer: { value: 5 }, explanation: r`$I = \frac{P}{U}$.` },
    { type: 'NUMERIC', prompt: r`Énergie (kWh) consommée par un appareil de 1 000 W pendant 2 h ?`, answer: { value: 2 }, explanation: r`2 000 Wh.` },
    { type: 'NUMERIC', prompt: r`Énergie (J) consommée par une lampe de 60 W pendant 10 s ?`, answer: { value: 600 }, explanation: r`$60 \times 10$.` },
    { type: 'NUMERIC', prompt: r`Combien de joules dans 1 kWh ?`, answer: { value: 3600000 }, explanation: r`$1\,000 \times 3\,600$.` },
    { type: 'NUMERIC', prompt: r`Puissance (W) d'un appareil traversé par 2 A sous 220 V ?`, answer: { value: 440 }, explanation: r`$220 \times 2$.` },
    { type: 'NUMERIC', prompt: r`Coût (FCFA) de 9 kWh à 80 FCFA le kWh ?`, answer: { value: 720 }, explanation: r`$9 \times 80$.` },
    { type: 'MCQ', prompt: r`Le compteur électrique mesure :`, choices: ['la tension', 'l’énergie consommée', 'la résistance'], answer: { index: 1 }, explanation: r`En kWh.` },
    { type: 'MCQ', prompt: r`Le rôle du fusible est de protéger contre :`, choices: ['les surintensités', 'la pluie', 'les baisses de tension'], answer: { index: 0 }, explanation: r`Il fond si $I$ est trop grande.` },
    { type: 'NUMERIC', prompt: r`Une lampe de 60 W fonctionne 5 h par jour pendant 30 jours. Énergie (kWh) ?`, answer: { value: 9 }, explanation: r`$60 \times 150 = 9\,000$ Wh.` },
    { type: 'MCQ', prompt: r`Plusieurs appareils fonctionnent ensemble : dans le fil principal, les intensités :`, choices: ['s’additionnent', 's’annulent', 'sont égales'], answer: { index: 0 }, explanation: r`Branchements en dérivation.` },
    { type: 'MCQ', prompt: r`Sur un appareil, « 220 V » est :`, choices: ['sa tension nominale', 'sa puissance', 'son intensité'], answer: { index: 0 }, explanation: r`Indication nominale.` },
    { type: 'NUMERIC', prompt: r`Durée (h) pour qu'un climatiseur de 1 500 W consomme 6 kWh ?`, answer: { value: 4 }, explanation: r`$t = \frac{6\,000}{1\,500}$.` },
    { type: 'MCQ', prompt: r`Pour économiser l'énergie, on préfère les lampes :`, choices: ['LED', 'à incandescence'], answer: { index: 0 }, explanation: r`Moins puissantes pour le même éclairage.` },
    { type: 'OPEN', prompt: r`Pourquoi ne faut-il pas brancher trop d'appareils sur une même multiprise ?`, answer: { model: 'Les intensités s’additionnent : surintensité, échauffement des fils, risque d’incendie.', keywords: ['intensités', 'surintensité', 'incendie'] }, explanation: r`Sécurité électrique.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Puissance et énergie électriques',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.** Prix du kWh (valeur fixée pour l'exercice) : 80 FCFA.`,
    advice: r`### 🎯 Conseils méthodologiques
1. Attention aux unités : **W × h → Wh**, **W × s → J** ; divise par 1 000 pour les kWh.
2. Calcule l'énergie de chaque appareil, puis additionne.
3. Rédige la réponse au problème avec l'unité (FCFA).`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Un appareil 220 V – 880 W est traversé par un courant de :`, type: 'MCQ', choices: ['4 A', '0,25 A', '1 100 A'], answer: { index: 0 }, points: 2, correction: r`$\frac{880}{220} = 4$ A.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. 1 kWh vaut :`, type: 'MCQ', choices: ['1 000 J', '3 600 000 J', '3 600 J'], answer: { index: 1 }, points: 2, correction: r`$1\,000 \text{ W} \times 3\,600 \text{ s}$.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Le disjoncteur protège contre :`, type: 'MCQ', choices: ['les surintensités', 'la foudre uniquement'], answer: { index: 0 }, points: 2, correction: r`Il coupe le courant.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`Dans une maison, on utilise chaque jour : 4 lampes de 60 W pendant 5 h, un téléviseur de 100 W pendant 4 h et un fer à repasser de 1 000 W pendant 30 min.`, prompt: r`1. Calcule l'énergie consommée par jour par les 4 lampes (en Wh).`, type: 'NUMERIC', answer: { value: 1200 }, points: 3, resultPoints: 1.5, correction: r`$4 \times 60 \times 5 = 1\,200$ Wh.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Calcule l'énergie consommée par jour par le téléviseur et le fer (en Wh, total des deux).`, type: 'NUMERIC', answer: { value: 900 }, points: 3, resultPoints: 1.5, correction: r`Téléviseur : 400 Wh ; fer : $1\,000 \times 0{,}5 = 500$ Wh ; total 900 Wh.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Calcule l'énergie totale consommée en 30 jours (en kWh).`, type: 'NUMERIC', answer: { value: 63 }, points: 3, resultPoints: 1.5, correction: r`$(1\,200 + 900) \times 30 = 63\,000$ Wh $= 63$ kWh.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Calcule le coût de cette consommation (en FCFA).`, type: 'NUMERIC', answer: { value: 5040 }, points: 3, resultPoints: 1.5, correction: r`$63 \times 80 = 5\,040$ FCFA.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`5. Propose deux gestes pour réduire cette facture.`, type: 'OPEN', answer: { model: 'Lampes LED, éteindre les lampes inutiles, réduire le temps de télévision.' }, points: 2, correction: r`Deux gestes pertinents (1 pt chacun).` },
    ],
  },
};

export const conducteurOhmique: SeedChapter = {
  subject: 'PC',
  order: 14,
  title: 'Le conducteur ohmique',
  minutes: 120,
  officialRef: `${REF}, Physique — Électricité`,
  objectives: [
    'Connaître la résistance d’un conducteur ohmique et son unité',
    'Tracer et exploiter la caractéristique U = f(I) ; utiliser la loi d’Ohm',
    'Calculer la résistance équivalente d’une association série ou parallèle',
  ],
  courseMd: r`
> **Situation.** Dans un poste radio, de petits composants à anneaux colorés limitent le courant pour protéger les autres éléments. Ce sont des **conducteurs ohmiques** (ou « résistances »).

## 1. Résistance
Un conducteur ohmique s'oppose plus ou moins au passage du courant : on le caractérise par sa **résistance** $R$, en **ohms (Ω)**. On la mesure avec un **ohmmètre** (multimètre), le composant étant **hors circuit**.
1 kΩ = 1 000 Ω.

## 2. Caractéristique et loi d'Ohm
On mesure la tension $U$ aux bornes du conducteur (voltmètre en dérivation) pour différentes intensités $I$ (ampèremètre en série) :

| $I$ (A) | 0 | 0,02 | 0,04 | 0,06 |
|---|---|---|---|---|
| $U$ (V) | 0 | 2 | 4 | 6 |

La caractéristique $U = f(I)$ est une **droite passant par l'origine** : $U$ est **proportionnelle** à $I$. Le coefficient de proportionnalité est la résistance.
> **Loi d'Ohm :** $$U = R \times I$$
> $U$ en V, $R$ en Ω, $I$ en A.

Ici : $R = \dfrac{6}{0{,}06} = 100$ Ω.

## 3. Applications
- $R = 220$ Ω, $I = 0{,}05$ A : $U = 11$ V.
- $U = 12$ V, $R = 400$ Ω : $I = 0{,}03$ A $= 30$ mA.

## 4. Associations
> - **En série :** $R_{eq} = R_1 + R_2$ (la résistance équivalente est plus grande).
> - **En dérivation (parallèle) :** $\dfrac{1}{R_{eq}} = \dfrac{1}{R_1} + \dfrac{1}{R_2}$ (elle est plus petite que chacune).

Exemples : 100 Ω et 200 Ω en série : 300 Ω. 100 Ω et 100 Ω en parallèle : 50 Ω.

## 5. Effet Joule
Un conducteur ohmique parcouru par un courant **s'échauffe** : c'est l'**effet Joule**. Puissance dissipée : $P = U \times I = R \times I^2$.
Applications : fer à repasser, chauffe-eau, fusible. Inconvénient : pertes d'énergie dans les fils.
`,
  summaryMd: r`
- Résistance $R$ en ohms (Ω) ; ohmmètre, composant hors circuit.
- Caractéristique : droite par l'origine ⟹ **loi d'Ohm** $U = R \times I$.
- Série : $R_{eq} = R_1 + R_2$ ; parallèle : $\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2}$.
- Effet Joule : $P = RI^2$.
- Convertir mA → A avant de calculer.
`,
  questions: [
    { type: 'MCQ', prompt: r`L'unité de la résistance est :`, choices: ['le volt', 'l’ohm', 'le watt'], answer: { index: 1 }, explanation: r`Symbole Ω.` },
    { type: 'MCQ', prompt: r`La loi d'Ohm s'écrit :`, choices: [r`$U = R \times I$`, r`$U = \frac{R}{I}$`, r`$I = R \times U$`], answer: { index: 0 }, explanation: r`Loi d'Ohm.` },
    { type: 'NUMERIC', prompt: r`$R = 220$ Ω et $I = 0{,}05$ A. Calcule $U$ (V).`, answer: { value: 11 }, explanation: r`$220 \times 0{,}05$.` },
    { type: 'NUMERIC', prompt: r`$U = 6$ V et $I = 0{,}06$ A. Calcule $R$ (Ω).`, answer: { value: 100 }, explanation: r`$\frac{6}{0{,}06}$.` },
    { type: 'NUMERIC', prompt: r`$U = 12$ V et $R = 400$ Ω. Calcule $I$ (A).`, answer: { value: 0.03 }, explanation: r`$\frac{12}{400}$.` },
    { type: 'MCQ', prompt: r`La caractéristique d'un conducteur ohmique est :`, choices: ['une droite passant par l’origine', 'une courbe', 'une droite horizontale'], answer: { index: 0 }, explanation: r`Proportionnalité.` },
    { type: 'NUMERIC', prompt: r`100 Ω et 200 Ω en série : résistance équivalente (Ω) ?`, answer: { value: 300 }, explanation: r`Somme.` },
    { type: 'NUMERIC', prompt: r`100 Ω et 100 Ω en parallèle : résistance équivalente (Ω) ?`, answer: { value: 50 }, explanation: r`$\frac{1}{R} = \frac{2}{100}$.` },
    { type: 'MCQ', prompt: r`Pour mesurer une résistance avec un ohmmètre, le composant doit être :`, choices: ['dans le circuit alimenté', 'hors circuit'], answer: { index: 1 }, explanation: r`Sinon la mesure est fausse.` },
    { type: 'NUMERIC', prompt: r`Combien d'ohms dans 2,2 kΩ ?`, answer: { value: 2200 }, explanation: r`$\times 1\,000$.` },
    { type: 'NUMERIC', prompt: r`Convertis 30 mA en A.`, answer: { value: 0.03 }, explanation: r`$\div 1\,000$.` },
    { type: 'MCQ', prompt: r`L'échauffement d'un conducteur parcouru par un courant s'appelle :`, choices: ['effet Joule', 'effet de serre', 'loi d’Ohm'], answer: { index: 0 }, explanation: r`Effet Joule.` },
    { type: 'NUMERIC', prompt: r`Puissance (W) dissipée par $R = 10$ Ω parcourue par 2 A ?`, answer: { value: 40 }, explanation: r`$RI^2 = 10 \times 4$.` },
    { type: 'MCQ', prompt: r`En parallèle, la résistance équivalente est :`, choices: ['plus grande que chacune', 'plus petite que chacune'], answer: { index: 1 }, explanation: r`On ouvre un « chemin » de plus au courant.` },
    { type: 'OPEN', prompt: r`Explique comment tracer la caractéristique d'un conducteur ohmique.`, answer: { model: 'On mesure U (voltmètre en dérivation) pour plusieurs valeurs de I (ampèremètre en série), puis on trace U en fonction de I.', keywords: ['voltmètre', 'ampèremètre', 'U en fonction de I'] }, explanation: r`Montage et tableau de mesures.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Le conducteur ohmique',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Convertis les **mA en A** et les **kΩ en Ω**.
2. Vérifie qu'une caractéristique est une droite **passant par l'origine** avant d'appliquer la loi d'Ohm.
3. Série : on **additionne** ; parallèle : on additionne les **inverses**.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Pour $R = 50$ Ω et $I = 0{,}2$ A, la tension est :`, type: 'MCQ', choices: ['10 V', '250 V', '0,004 V'], answer: { index: 0 }, points: 2, correction: r`$50 \times 0{,}2$.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Deux conducteurs de 30 Ω et 60 Ω en série équivalent à :`, type: 'MCQ', choices: ['90 Ω', '20 Ω', '1 800 Ω'], answer: { index: 0 }, points: 2, correction: r`Somme.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Les mêmes en parallèle équivalent à :`, type: 'MCQ', choices: ['90 Ω', '20 Ω', '45 Ω'], answer: { index: 1 }, points: 2, correction: r`$\frac{1}{30} + \frac{1}{60} = \frac{3}{60}$, $R = 20$ Ω.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`On mesure la tension $U$ aux bornes d'un conducteur ohmique pour différentes intensités :

| $I$ (mA) | 0 | 10 | 20 | 30 | 40 |
|---|---|---|---|---|---|
| $U$ (V) | 0 | 1,5 | 3 | 4,5 | 6 |`, prompt: r`1. Décris le montage utilisé (position de l'ampèremètre et du voltmètre).`, type: 'OPEN', answer: { model: 'Ampèremètre en série, voltmètre en dérivation' }, points: 3, correction: r`Ampèremètre en série *(1,5 pt)* ; voltmètre en dérivation aux bornes du conducteur *(1,5 pt)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Trace la caractéristique U = f(I). Quelle est sa forme ?`, type: 'OPEN', answer: { model: 'Droite passant par l’origine' }, points: 3, correction: r`Points placés *(1,5 pt)* ; droite passant par l'origine *(1,5 pt)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Calcule la résistance $R$ (en Ω).`, type: 'NUMERIC', answer: { value: 150 }, points: 4, resultPoints: 2, correction: r`$R = \frac{U}{I} = \frac{6}{0{,}04} = 150$ Ω.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Quelle tension (V) faut-il appliquer pour obtenir 60 mA ?`, type: 'NUMERIC', answer: { value: 9 }, points: 4, resultPoints: 2, correction: r`$U = 150 \times 0{,}06 = 9$ V.` },
    ],
  },
};
