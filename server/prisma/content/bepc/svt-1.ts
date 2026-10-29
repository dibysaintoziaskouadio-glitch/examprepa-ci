import { SeedChapter } from '../types';

const r = String.raw;
const REF = 'Programme de SVT 3e (DPFC) — progression 2026-2027, Compétence 1 : la nutrition chez l’Homme';

export const aliments: SeedChapter = {
  subject: 'SVT',
  order: 1,
  title: 'Les aliments et l’Homme',
  minutes: 180,
  isFree: true,
  officialRef: `${REF}, leçon 1`,
  objectives: [
    'Identifier les constituants des aliments (aliments simples) par des tests',
    'Classer les aliments selon leur rôle dans l’organisme',
    'Composer une ration alimentaire équilibrée et connaître les maladies nutritionnelles',
  ],
  courseMd: r`
> **Situation.** Au restaurant scolaire, Adjoua mange tous les jours de l'attiéké sans poisson ni légumes. Elle est souvent fatiguée. Son alimentation est-elle équilibrée ?

## 1. Les constituants des aliments
Nos aliments (attiéké, riz, igname, poisson, haricot, lait…) sont des **aliments composés**. Ils contiennent des **aliments simples** (ou **nutriments** après digestion) :
- **organiques** : glucides (sucres, amidon), lipides (graisses, huiles), protides (protéines), vitamines ;
- **minéraux** : eau, sels minéraux (calcium, fer, iode, sodium…).

## 2. Mise en évidence (tests)
| Constituant | Réactif / test | Résultat positif |
|---|---|---|
| Amidon | eau iodée | coloration **bleu-violet** |
| Sucres réducteurs (glucose) | liqueur de Fehling, à chaud | précipité **rouge brique** |
| Lipides | papier | **tache translucide** qui ne disparaît pas |
| Protides | acide nitrique (+ chauffage) | coloration **jaune** |
| Chlorures | nitrate d'argent | précipité **blanc** qui noircit à la lumière |
| Calcium | oxalate d'ammonium | précipité **blanc** |
| Eau | chauffage dans un tube | **buée** sur les parois |

Exemples : le riz et l'igname sont riches en amidon ; l'huile de palme en lipides ; le poisson, la viande, le haricot et l'arachide en protides ; les fruits et légumes en vitamines et sels minéraux.

## 3. Rôles des aliments
| Groupe | Constituants | Rôle | Exemples |
|---|---|---|---|
| Aliments **énergétiques** | glucides, lipides | fournir l'énergie | riz, attiéké, igname, banane plantain, huile |
| Aliments **bâtisseurs** (de construction) | protides, calcium | construire et réparer le corps (croissance) | poisson, viande, œufs, lait, haricot, arachide |
| Aliments **fonctionnels** (de protection) | vitamines, sels minéraux, eau | bon fonctionnement, défense | fruits, légumes, feuilles (gombo, épinard, feuilles de manioc) |

## 4. La ration alimentaire équilibrée
Une ration est **équilibrée** quand elle apporte, en **quantité suffisante** et en **bonnes proportions**, des aliments des **trois groupes**, ainsi que de l'eau. Les besoins varient selon l'âge, le sexe, l'activité physique et l'état (croissance, grossesse).

Exemple de repas équilibré : riz + sauce graine avec poisson + feuilles + fruit (orange, mangue) + eau.

## 5. Maladies nutritionnelles
**Par carence (manque) :**
- **kwashiorkor** : manque de protides (enfant au ventre gonflé, cheveux décolorés) ;
- **marasme** : manque global d'aliments (maigreur extrême) ;
- **anémie** : manque de fer ; **goitre** : manque d'iode ; **scorbut** : manque de vitamine C ; **rachitisme** : manque de vitamine D et de calcium.

**Par excès :** obésité, diabète de type 2, hypertension artérielle (excès de sel, de sucre, de graisses).

Réponse à la situation : Adjoua mange surtout des aliments **énergétiques** ; elle manque d'aliments **bâtisseurs** et **fonctionnels**. Sa ration n'est pas équilibrée.
`,
  summaryMd: r`
- Aliments simples : glucides, lipides, protides, vitamines, eau, sels minéraux.
- Tests : eau iodée → **bleu-violet** (amidon) ; Fehling à chaud → **rouge brique** (glucose) ; papier → **tache translucide** (lipides) ; acide nitrique → **jaune** (protides).
- Énergétiques (glucides, lipides) · bâtisseurs (protides) · fonctionnels (vitamines, sels minéraux).
- Ration équilibrée : les **3 groupes** + eau, en quantité adaptée.
- Carences : kwashiorkor (protides), anémie (fer), goitre (iode), scorbut (vit. C), rachitisme (vit. D) ; excès : obésité, diabète.
`,
  questions: [
    { type: 'MCQ', prompt: r`L'eau iodée met en évidence :`, choices: ['les lipides', 'l’amidon', 'les protides'], answer: { index: 1 }, explanation: r`Coloration bleu-violet.` },
    { type: 'MCQ', prompt: r`La liqueur de Fehling à chaud donne un précipité rouge brique avec :`, choices: ['le glucose', 'l’huile', 'le sel'], answer: { index: 0 }, explanation: r`Sucres réducteurs.` },
    { type: 'MCQ', prompt: r`Une tache translucide sur le papier indique la présence de :`, choices: ['lipides', 'protides', 'amidon'], answer: { index: 0 }, explanation: r`Test des lipides.` },
    { type: 'MCQ', prompt: r`L'acide nitrique colore en jaune :`, choices: ['les protides', 'les glucides', 'l’eau'], answer: { index: 0 }, explanation: r`Réaction xanthoprotéique.` },
    { type: 'MCQ', prompt: r`Le poisson est surtout un aliment :`, choices: ['énergétique', 'bâtisseur', 'fonctionnel'], answer: { index: 1 }, explanation: r`Riche en protides.` },
    { type: 'MCQ', prompt: r`L'attiéké est surtout un aliment :`, choices: ['énergétique', 'bâtisseur', 'fonctionnel'], answer: { index: 0 }, explanation: r`Riche en amidon.` },
    { type: 'MCQ', prompt: r`Les fruits et légumes sont surtout des aliments :`, choices: ['énergétiques', 'bâtisseurs', 'fonctionnels (de protection)'], answer: { index: 2 }, explanation: r`Vitamines et sels minéraux.` },
    { type: 'MCQ', prompt: r`Le kwashiorkor est dû à un manque de :`, choices: ['protides', 'vitamine C', 'iode'], answer: { index: 0 }, explanation: r`Carence protéique.` },
    { type: 'MCQ', prompt: r`Le goitre est dû à un manque de :`, choices: ['fer', 'iode', 'calcium'], answer: { index: 1 }, explanation: r`D'où le sel iodé.` },
    { type: 'MCQ', prompt: r`L'anémie est souvent due à un manque de :`, choices: ['fer', 'sucre', 'lipides'], answer: { index: 0 }, explanation: r`Le fer sert à fabriquer l'hémoglobine.` },
    { type: 'MCQ', prompt: r`Le scorbut est dû à un manque de :`, choices: ['vitamine C', 'vitamine D', 'protides'], answer: { index: 0 }, explanation: r`Fruits frais.` },
    { type: 'MCQ', prompt: r`Une ration équilibrée contient :`, choices: ['uniquement des aliments énergétiques', 'des aliments des trois groupes et de l’eau', 'beaucoup de sucre'], answer: { index: 1 }, explanation: r`Définition.` },
    { type: 'MCQ', prompt: r`L'obésité est une maladie :`, choices: ['par carence', 'par excès'], answer: { index: 1 }, explanation: r`Excès d'apports énergétiques.` },
    { type: 'MCQ', prompt: r`Le nitrate d'argent met en évidence :`, choices: ['les chlorures', 'le calcium', 'l’amidon'], answer: { index: 0 }, explanation: r`Précipité blanc qui noircit.` },
    { type: 'OPEN', prompt: r`Propose un repas équilibré avec des produits ivoiriens.`, answer: { model: 'Riz (énergétique) + sauce avec poisson (bâtisseur) + légumes/feuilles et un fruit (fonctionnels) + eau.', keywords: ['énergétique', 'bâtisseur', 'fonctionnel'] }, explanation: r`Il faut les trois groupes.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Les aliments et l’Homme',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.** Réponds par des phrases complètes en utilisant le vocabulaire scientifique.`,
    advice: r`### 🎯 Conseils méthodologiques
1. Pour un test, cite toujours : **réactif → observation → conclusion**.
2. Classe chaque aliment selon son constituant **dominant**.
3. Pour juger une ration, vérifie la présence des **trois groupes**.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Un aliment qui donne une coloration bleu-violet avec l'eau iodée contient :`, type: 'MCQ', choices: ['de l’amidon', 'des protides', 'des lipides'], answer: { index: 0 }, points: 2, correction: r`Test de l'amidon.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Les aliments bâtisseurs sont riches en :`, type: 'MCQ', choices: ['protides', 'glucides', 'vitamines'], answer: { index: 0 }, points: 2, correction: r`Croissance et réparation.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Le rachitisme est dû à un manque de :`, type: 'MCQ', choices: ['vitamine D et calcium', 'fer', 'iode'], answer: { index: 0 }, points: 2, correction: r`Os mal calcifiés.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`On réalise des tests sur un aliment broyé :
- eau iodée : coloration bleu-violet ;
- liqueur de Fehling à chaud : pas de changement ;
- papier : pas de tache translucide ;
- acide nitrique : coloration jaune.`, prompt: r`1. Quels constituants cet aliment contient-il ? Justifie.`, type: 'OPEN', answer: { model: 'Amidon (bleu-violet) et protides (jaune)' }, points: 4, correction: r`Amidon : coloration bleu-violet avec l'eau iodée *(2 pts)* ; protides : coloration jaune avec l'acide nitrique *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Quels constituants n'y sont pas ? Justifie.`, type: 'OPEN', answer: { model: 'Pas de sucres réducteurs ni de lipides' }, points: 3, correction: r`Pas de sucres réducteurs (Fehling négatif) *(1,5 pt)* ; pas de lipides (pas de tache) *(1,5 pt)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Le menu quotidien d'un élève est : attiéké + huile + piment, et du pain sucré le soir. Sa ration est-elle équilibrée ? Justifie.`, type: 'OPEN', answer: { model: 'Non : seulement des aliments énergétiques' }, points: 4, correction: r`Non *(1 pt)* : il ne mange que des aliments énergétiques *(1,5 pt)* ; il manque des aliments bâtisseurs et fonctionnels *(1,5 pt)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Propose deux aliments à ajouter et précise leur rôle.`, type: 'OPEN', answer: { model: 'Poisson (bâtisseur) ; légumes/fruits (fonctionnels)' }, points: 3, correction: r`Un aliment bâtisseur (poisson, œuf, haricot…) *(1,5 pt)* et un aliment fonctionnel (légumes, fruits) *(1,5 pt)*.` },
    ],
  },
};

export const digestion: SeedChapter = {
  subject: 'SVT',
  order: 2,
  title: 'La digestion des aliments',
  minutes: 180,
  officialRef: `${REF}, leçon 2`,
  objectives: [
    'Décrire l’appareil digestif (tube digestif et glandes annexes)',
    'Expliquer les transformations mécaniques et chimiques des aliments (enzymes)',
    'Expliquer l’absorption intestinale ; adopter une bonne hygiène digestive',
  ],
  courseMd: r`
> **Situation.** Après un repas de foutou-sauce graine, comment ces aliments deviennent-ils des substances utilisables par nos cellules ?

## 1. L'appareil digestif
- **Tube digestif** : bouche → pharynx → œsophage → estomac → intestin grêle → gros intestin (côlon) → rectum → anus.
- **Glandes annexes** : glandes salivaires (salive), foie (bile, stockée dans la vésicule biliaire), pancréas (suc pancréatique). La paroi de l'estomac produit le suc gastrique et celle de l'intestin le suc intestinal.

## 2. Transformations mécaniques
Mastication par les dents, malaxage par la langue, brassage par les muscles de l'estomac : les aliments sont **fragmentés**, ce qui facilite l'action des sucs.

## 3. Transformations chimiques : les enzymes
Les sucs digestifs contiennent des **enzymes** qui découpent les grosses molécules en petites molécules : les **nutriments**.

**Expérience :** dans deux tubes, on met de l'empois d'amidon ; on ajoute de la salive dans le tube 1 et de l'eau dans le tube 2, à **37 °C**. Après 15 min :
- tube 1 : eau iodée **négative**, Fehling **positif** ⟹ l'amidon a été transformé en sucre (maltose) par l'**amylase salivaire** ;
- tube 2 (témoin) : l'amidon est toujours là.
L'enzyme agit mieux à 37 °C ; elle est détruite par l'ébullition.

| Lieu | Suc | Action |
|---|---|---|
| Bouche | salive (amylase) | amidon → maltose |
| Estomac | suc gastrique (pepsine) | protides → polypeptides |
| Intestin grêle | suc pancréatique, suc intestinal, bile | glucides → **glucose** ; protides → **acides aminés** ; lipides (émulsionnés par la bile) → **acides gras + glycérol** |

L'eau, les sels minéraux et les vitamines ne sont pas transformés.

## 4. L'absorption intestinale
Les nutriments traversent la paroi de l'**intestin grêle** au niveau des **villosités intestinales** (replis très nombreux qui augmentent la surface d'échange) :
- le glucose, les acides aminés, l'eau et les sels passent dans le **sang** ;
- les acides gras et le glycérol passent surtout dans la **lymphe**.
Les résidus non digérés (fibres) forment les **selles** dans le gros intestin, où l'eau est en partie réabsorbée.

## 5. Hygiène de l'appareil digestif
Bien mastiquer, manger à heures régulières, se laver les mains, laver fruits et légumes, boire de l'eau potable, consommer des fibres (fruits, légumes), éviter l'excès d'alcool, d'épices et de médicaments sans ordonnance, se brosser les dents. Maladies : caries, diarrhées (choléra, fièvre typhoïde), constipation, ulcère, verminoses (déparasitage).
`,
  summaryMd: r`
- Tube digestif : bouche, pharynx, œsophage, estomac, intestin grêle, gros intestin, anus ; glandes : salivaires, foie, pancréas.
- Transformations **mécaniques** (dents, estomac) et **chimiques** (enzymes, 37 °C).
- Amylase salivaire : amidon → maltose ; pepsine : protides → polypeptides.
- Nutriments : glucose, acides aminés, acides gras + glycérol.
- Absorption : **villosités** de l'intestin grêle → sang et lymphe.
`,
  questions: [
    { type: 'MCQ', prompt: r`Les nutriments sont absorbés principalement dans :`, choices: ['l’estomac', 'l’intestin grêle', 'le gros intestin'], answer: { index: 1 }, explanation: r`Grâce aux villosités.` },
    { type: 'MCQ', prompt: r`L'amylase salivaire transforme :`, choices: ['les protides', 'l’amidon en maltose', 'les lipides'], answer: { index: 1 }, explanation: r`Expérience des tubes.` },
    { type: 'MCQ', prompt: r`La digestion des protides commence dans :`, choices: ['la bouche', 'l’estomac', 'le gros intestin'], answer: { index: 1 }, explanation: r`Pepsine du suc gastrique.` },
    { type: 'MCQ', prompt: r`La bile est produite par :`, choices: ['le pancréas', 'le foie', 'l’estomac'], answer: { index: 1 }, explanation: r`Stockée dans la vésicule biliaire.` },
    { type: 'MCQ', prompt: r`Le nutriment issu de la digestion des protides est :`, choices: ['le glucose', 'l’acide aminé', 'le glycérol'], answer: { index: 1 }, explanation: r`Acides aminés.` },
    { type: 'MCQ', prompt: r`Le nutriment issu de la digestion complète de l'amidon est :`, choices: ['le glucose', 'l’acide gras', 'l’acide aminé'], answer: { index: 0 }, explanation: r`Glucose.` },
    { type: 'NUMERIC', prompt: r`À quelle température (°C) les enzymes digestives agissent-elles le mieux ?`, answer: { value: 37 }, explanation: r`Température du corps.` },
    { type: 'MCQ', prompt: r`Dans le tube témoin (amidon + eau), l'eau iodée donne :`, choices: ['bleu-violet', 'aucune coloration'], answer: { index: 0 }, explanation: r`L'amidon n'est pas transformé.` },
    { type: 'MCQ', prompt: r`Les villosités intestinales servent à :`, choices: ['augmenter la surface d’absorption', 'broyer les aliments', 'produire la bile'], answer: { index: 0 }, explanation: r`Surface d'échange.` },
    { type: 'MCQ', prompt: r`Les acides gras passent surtout dans :`, choices: ['le sang', 'la lymphe'], answer: { index: 1 }, explanation: r`Voie lymphatique.` },
    { type: 'MCQ', prompt: r`La mastication est une transformation :`, choices: ['mécanique', 'chimique'], answer: { index: 0 }, explanation: r`Fragmentation.` },
    { type: 'MCQ', prompt: r`Une enzyme chauffée à 100 °C :`, choices: ['agit mieux', 'est détruite'], answer: { index: 1 }, explanation: r`Dénaturation.` },
    { type: 'MCQ', prompt: r`Lequel n'est pas transformé lors de la digestion ?`, choices: ['l’eau', 'l’amidon', 'les protides'], answer: { index: 0 }, explanation: r`Eau, sels minéraux et vitamines.` },
    { type: 'MCQ', prompt: r`Une glande annexe du tube digestif est :`, choices: ['le pancréas', 'le cœur', 'le rein'], answer: { index: 0 }, explanation: r`Suc pancréatique.` },
    { type: 'OPEN', prompt: r`Donne deux règles d'hygiène digestive.`, answer: { model: 'Se laver les mains, bien mastiquer, boire de l’eau potable, laver les fruits.', keywords: ['mains', 'mastiquer', 'eau potable'] }, explanation: r`Prévention des maladies.` },
  ],
  assessment: {
    title: 'Devoir BEPC — La digestion',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Pour une expérience : décris le **montage**, le **témoin**, les **résultats**, puis **conclus**.
2. Associe chaque suc à son **lieu** et à son **action**.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Le suc gastrique est produit par :`, type: 'MCQ', choices: ['l’estomac', 'le foie', 'les glandes salivaires'], answer: { index: 0 }, points: 2, correction: r`Paroi de l'estomac.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. La digestion des lipides donne :`, type: 'MCQ', choices: ['acides gras et glycérol', 'glucose', 'acides aminés'], answer: { index: 0 }, points: 2, correction: r`Nutriments lipidiques.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. L'absorption des nutriments se fait dans :`, type: 'MCQ', choices: ['l’intestin grêle', 'l’œsophage', 'le rectum'], answer: { index: 0 }, points: 2, correction: r`Villosités.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`On prépare trois tubes contenant de l'empois d'amidon :
- tube A : + salive, à 37 °C ;
- tube B : + eau, à 37 °C ;
- tube C : + salive bouillie, à 37 °C.
Après 20 min, on teste à l'eau iodée et à la liqueur de Fehling :

| Tube | Eau iodée | Fehling |
|---|---|---|
| A | négatif | rouge brique |
| B | bleu-violet | négatif |
| C | bleu-violet | négatif |`, prompt: r`1. Quel est le rôle du tube B ?`, type: 'OPEN', answer: { model: 'Tube témoin' }, points: 3, correction: r`C'est le **témoin** : il montre que l'amidon ne se transforme pas seul.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Interprète les résultats du tube A.`, type: 'OPEN', answer: { model: 'L’amidon a disparu et un sucre réducteur est apparu : la salive transforme l’amidon.' }, points: 4, correction: r`Eau iodée négative : plus d'amidon *(1,5 pt)* ; Fehling positif : sucre réducteur (maltose) *(1,5 pt)* ; la salive a transformé l'amidon *(1 pt)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Interprète le résultat du tube C.`, type: 'OPEN', answer: { model: 'L’enzyme salivaire est détruite par l’ébullition.' }, points: 4, correction: r`L'amidon n'est pas transformé *(1,5 pt)* car l'enzyme (amylase) de la salive a été **détruite** par l'ébullition *(2,5 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Nomme l'enzyme de la salive responsable de cette transformation.`, type: 'MCQ', choices: ['l’amylase', 'la pepsine', 'la bile'], answer: { index: 0 }, points: 3, correction: r`Amylase salivaire.` },
    ],
  },
};

export const sang: SeedChapter = {
  subject: 'SVT',
  order: 3,
  title: 'Le sang',
  minutes: 120,
  officialRef: `${REF}, leçon 3`,
  objectives: [
    'Décrire la composition du sang (plasma, éléments figurés)',
    'Indiquer le rôle de chaque constituant',
    'Interpréter une analyse de sang simple',
  ],
  courseMd: r`
> **Situation.** Après une crise de paludisme, le médecin demande à Yao une **numération formule sanguine (NFS)**. Que révèle cette analyse ?

## 1. Composition du sang
Un adulte possède environ **5 litres** de sang. Après centrifugation d'un tube de sang (rendu incoagulable), on observe :
- en haut, un liquide jaunâtre : le **plasma** (environ **55 %**) ;
- en bas, les **éléments figurés** (environ **45 %**).

**Le plasma** contient surtout de l'**eau** (90 %), des sels minéraux, des nutriments (glucose, acides aminés…), des protéines (dont le fibrinogène, les anticorps), des hormones et des déchets (urée, $CO_2$).

**Les éléments figurés** (observés au microscope sur un **frottis sanguin** coloré) :
| Élément | Description | Nombre (par mm³) | Rôle |
|---|---|---|---|
| **Globules rouges** (hématies) | cellules sans noyau, en forme de disque biconcave, contenant l'**hémoglobine** | 4 à 5,5 millions | transport du **dioxygène** (et d'une partie du $CO_2$) |
| **Globules blancs** (leucocytes) | cellules à noyau | 4 000 à 10 000 | **défense** de l'organisme (phagocytose, anticorps) |
| **Plaquettes** | fragments de cellules | 150 000 à 400 000 | **coagulation** du sang |

## 2. Rôles du sang
- **Transport** : dioxygène des poumons vers les organes, nutriments de l'intestin vers les cellules, déchets vers les poumons et les reins, hormones.
- **Défense** contre les microbes (globules blancs).
- **Coagulation** : arrêt des saignements (plaquettes + fibrinogène → caillot).
- **Régulation** de la température du corps.

## 3. Interpréter une analyse
On compare les résultats aux **valeurs normales** :
- globules rouges ou hémoglobine trop bas : **anémie** (fatigue, essoufflement) — causes : paludisme (le parasite détruit les globules rouges), manque de fer, hémorragie, drépanocytose ;
- globules blancs trop nombreux : souvent une **infection** ;
- plaquettes trop basses : risque de **saignements**.

**La drépanocytose** est une maladie héréditaire fréquente en Afrique : les globules rouges prennent une forme de faucille et circulent mal (crises douloureuses, anémie).

Réponse à la situation : la NFS permet de vérifier si le paludisme a provoqué une **anémie** (baisse des globules rouges).
`,
  summaryMd: r`
- Sang : **plasma** (55 %) + **éléments figurés** (45 %).
- Globules rouges : hémoglobine, transport de $O_2$ (4 à 5,5 millions/mm³).
- Globules blancs : défense (4 000 à 10 000/mm³).
- Plaquettes : coagulation (150 000 à 400 000/mm³).
- Rôles : transport, défense, coagulation, régulation thermique.
- Anémie : baisse des globules rouges (paludisme, manque de fer, drépanocytose).
`,
  questions: [
    { type: 'MCQ', prompt: r`Le transport du dioxygène est assuré par :`, choices: ['les globules blancs', 'les globules rouges', 'les plaquettes'], answer: { index: 1 }, explanation: r`Grâce à l'hémoglobine.` },
    { type: 'MCQ', prompt: r`La coagulation est assurée par :`, choices: ['les plaquettes', 'les globules rouges', 'le glucose'], answer: { index: 0 }, explanation: r`Avec le fibrinogène.` },
    { type: 'MCQ', prompt: r`La défense de l'organisme est assurée par :`, choices: ['les globules blancs', 'les plaquettes', 'l’eau du plasma'], answer: { index: 0 }, explanation: r`Leucocytes.` },
    { type: 'NUMERIC', prompt: r`Pourcentage approximatif de plasma dans le sang ?`, answer: { value: 55 }, explanation: r`Environ 55 %.` },
    { type: 'MCQ', prompt: r`Les globules rouges humains :`, choices: ['ont un noyau', 'n’ont pas de noyau'], answer: { index: 1 }, explanation: r`Cellules anucléées.` },
    { type: 'MCQ', prompt: r`Le constituant majoritaire du plasma est :`, choices: ['l’eau', 'le glucose', 'les protéines'], answer: { index: 0 }, explanation: r`Environ 90 %.` },
    { type: 'MCQ', prompt: r`L'hémoglobine se trouve dans :`, choices: ['les globules rouges', 'les plaquettes', 'le plasma'], answer: { index: 0 }, explanation: r`Pigment respiratoire.` },
    { type: 'MCQ', prompt: r`Un nombre de globules blancs très élevé indique souvent :`, choices: ['une infection', 'une anémie', 'une bonne santé'], answer: { index: 0 }, explanation: r`Réaction de défense.` },
    { type: 'MCQ', prompt: r`Le paludisme peut provoquer :`, choices: ['une anémie', 'un excès de globules rouges'], answer: { index: 0 }, explanation: r`Le parasite détruit les hématies.` },
    { type: 'NUMERIC', prompt: r`Volume approximatif (en litres) de sang chez un adulte ?`, answer: { value: 5 }, explanation: r`Environ 5 L.` },
    { type: 'MCQ', prompt: r`L'observation des cellules du sang se fait sur :`, choices: ['un frottis sanguin au microscope', 'une radiographie', 'un électrocardiogramme'], answer: { index: 0 }, explanation: r`Frottis coloré.` },
    { type: 'MCQ', prompt: r`La drépanocytose est une maladie :`, choices: ['héréditaire des globules rouges', 'contagieuse', 'due à un manque de vitamine'], answer: { index: 0 }, explanation: r`Globules en faucille.` },
    { type: 'MCQ', prompt: r`Les déchets comme l'urée sont transportés par :`, choices: ['le plasma', 'les plaquettes'], answer: { index: 0 }, explanation: r`Dissous dans le plasma.` },
    { type: 'MCQ', prompt: r`Une personne anémiée se sent surtout :`, choices: ['fatiguée et essoufflée', 'en pleine forme'], answer: { index: 0 }, explanation: r`Manque d'oxygène aux organes.` },
    { type: 'OPEN', prompt: r`Cite les trois éléments figurés du sang et leur rôle.`, answer: { model: 'Globules rouges : transport O₂ ; globules blancs : défense ; plaquettes : coagulation.', keywords: ['globules rouges', 'globules blancs', 'plaquettes'] }, explanation: r`Tableau du cours.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Le sang',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Pour une analyse, compare **chaque valeur** à la valeur normale et conclus (normal / trop bas / trop élevé).
2. Relie chaque anomalie au **rôle** de l'élément concerné.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Les plaquettes interviennent dans :`, type: 'MCQ', choices: ['la coagulation', 'la respiration', 'la digestion'], answer: { index: 0 }, points: 2, correction: r`Formation du caillot.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Après centrifugation, le plasma se trouve :`, type: 'MCQ', choices: ['en haut du tube', 'en bas du tube'], answer: { index: 0 }, points: 2, correction: r`Il est moins dense.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. L'hémoglobine fixe :`, type: 'MCQ', choices: ['le dioxygène', 'le glucose', 'l’urée'], answer: { index: 0 }, points: 2, correction: r`Transport de $O_2$.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`Résultats de l'analyse de sang de Yao, après une crise de paludisme :

| Élément | Résultat de Yao | Valeurs normales |
|---|---|---|
| Globules rouges (/mm³) | 2 800 000 | 4 000 000 à 5 500 000 |
| Globules blancs (/mm³) | 7 000 | 4 000 à 10 000 |
| Plaquettes (/mm³) | 250 000 | 150 000 à 400 000 |`, prompt: r`1. Compare chaque résultat de Yao aux valeurs normales.`, type: 'OPEN', answer: { model: 'GR trop bas ; GB et plaquettes normaux' }, points: 4, correction: r`Globules rouges inférieurs à la normale *(2 pts)* ; globules blancs et plaquettes normaux *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. De quelle anomalie souffre Yao ?`, type: 'MCQ', choices: ['anémie', 'infection grave', 'trouble de la coagulation'], answer: { index: 0 }, points: 3, correction: r`Baisse des globules rouges : anémie.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Explique le lien entre le paludisme et cette anomalie.`, type: 'OPEN', answer: { model: 'Le parasite du paludisme détruit les globules rouges.' }, points: 4, correction: r`Le parasite (Plasmodium) se multiplie dans les globules rouges et les **détruit** *(4 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Quels symptômes Yao peut-il ressentir ? Justifie.`, type: 'OPEN', answer: { model: 'Fatigue, essoufflement : moins d’O₂ transporté' }, points: 3, correction: r`Fatigue, essoufflement *(1,5 pt)* car ses organes reçoivent moins de dioxygène *(1,5 pt)*.` },
    ],
  },
};

export const transfusion: SeedChapter = {
  subject: 'SVT',
  order: 4,
  title: 'La transfusion sanguine',
  minutes: 120,
  officialRef: `${REF}, leçon 4`,
  objectives: [
    'Déterminer un groupe sanguin (système ABO et facteur Rhésus)',
    'Appliquer les règles de compatibilité de la transfusion',
    'Connaître le rôle du don de sang',
  ],
  courseMd: r`
> **Situation.** Après un accident sur l'autoroute du Nord, un blessé a perdu beaucoup de sang. Les médecins doivent le transfuser rapidement. Peut-on lui donner le sang de n'importe qui ?

## 1. Les groupes sanguins du système ABO
Les globules rouges portent (ou non) à leur surface des marqueurs appelés **antigènes** (A et/ou B). Le plasma contient des **anticorps** (anti-A et/ou anti-B) dirigés contre les antigènes **absents** des globules rouges.

| Groupe | Antigènes sur les globules rouges | Anticorps dans le plasma |
|---|---|---|
| A | A | anti-B |
| B | B | anti-A |
| AB | A et B | aucun |
| O | aucun | anti-A et anti-B |

Quand un anticorps rencontre l'antigène correspondant, les globules rouges s'**agglutinent** (ils forment des amas) : c'est dangereux (accident transfusionnel).

## 2. Le facteur Rhésus
Les personnes dont les globules rouges portent l'antigène **D** sont **Rhésus positif (Rh+)** ; les autres sont **Rhésus négatif (Rh−)**. Un groupe complet s'écrit par exemple **A+**, **O−**.

## 3. Déterminer un groupe sanguin
On mélange des gouttes de sang avec des sérums-tests anti-A, anti-B et anti-D :
- agglutination avec anti-A seul → groupe **A** ;
- avec anti-B seul → groupe **B** ;
- avec les deux → groupe **AB** ;
- aucune → groupe **O** ;
- agglutination avec anti-D → **Rh+**.

## 4. Règle de la transfusion
> Le sang transfusé ne doit pas apporter des **globules rouges** portant un antigène contre lequel le **receveur** possède des anticorps.

- **O−** : **donneur universel** (globules rouges sans antigènes A, B, D).
- **AB+** : **receveur universel** (pas d'anticorps anti-A ni anti-B).
- Un sujet Rh− ne doit recevoir que du sang Rh−.

| Receveur | Peut recevoir de |
|---|---|
| O | O |
| A | A, O |
| B | B, O |
| AB | AB, A, B, O |

En pratique, les hôpitaux transfusent de préférence du sang **du même groupe** et vérifient toujours la compatibilité.

## 5. Le don de sang
Le sang ne se fabrique pas en usine : seul le **don** permet de sauver des vies (accidents, accouchements, anémies graves, drépanocytose). En Côte d'Ivoire, le **CNTS** (Centre National de Transfusion Sanguine) collecte et contrôle le sang. Le donneur doit être majeur, en bonne santé et peser au moins 50 kg ; le sang est testé (VIH, hépatites…) avant toute transfusion.
`,
  summaryMd: r`
- Groupe A : antigène A, anti-B ; B : antigène B, anti-A ; AB : A et B, aucun anticorps ; O : aucun antigène, anti-A et anti-B.
- Rh+ : antigène D présent ; Rh− : absent.
- Règle : pas d'antigène du donneur reconnu par les anticorps du receveur.
- **O−** donneur universel ; **AB+** receveur universel.
- Don de sang : CNTS ; sang testé avant transfusion.
`,
  questions: [
    { type: 'MCQ', prompt: r`Les globules rouges d'une personne du groupe A portent :`, choices: ['l’antigène A', 'l’antigène B', 'aucun antigène'], answer: { index: 0 }, explanation: r`Définition.` },
    { type: 'MCQ', prompt: r`Le plasma d'une personne du groupe B contient :`, choices: ['des anti-A', 'des anti-B', 'aucun anticorps'], answer: { index: 0 }, explanation: r`Contre l'antigène absent.` },
    { type: 'MCQ', prompt: r`Le donneur universel est :`, choices: ['O−', 'AB+', 'A+'], answer: { index: 0 }, explanation: r`Aucun antigène A, B, D.` },
    { type: 'MCQ', prompt: r`Le receveur universel est :`, choices: ['O−', 'AB+', 'B−'], answer: { index: 1 }, explanation: r`Aucun anticorps anti-A ou anti-B.` },
    { type: 'MCQ', prompt: r`Un sang qui agglutine avec anti-A et anti-B est du groupe :`, choices: ['A', 'B', 'AB', 'O'], answer: { index: 2 }, explanation: r`Porte A et B.` },
    { type: 'MCQ', prompt: r`Un sang qui n'agglutine avec aucun sérum-test (anti-A, anti-B) est du groupe :`, choices: ['A', 'O', 'AB'], answer: { index: 1 }, explanation: r`Aucun antigène.` },
    { type: 'MCQ', prompt: r`Une personne du groupe A peut recevoir du sang :`, choices: ['A ou O', 'B ou O', 'AB'], answer: { index: 0 }, explanation: r`Ses anti-B attaqueraient B et AB.` },
    { type: 'MCQ', prompt: r`Une personne du groupe O peut recevoir du sang :`, choices: ['O seulement', 'de tous les groupes', 'A et B'], answer: { index: 0 }, explanation: r`Elle a des anti-A et anti-B.` },
    { type: 'MCQ', prompt: r`Une personne Rh− peut recevoir du sang :`, choices: ['Rh− seulement', 'Rh+ ou Rh−'], answer: { index: 0 }, explanation: r`Règle Rhésus.` },
    { type: 'MCQ', prompt: r`L'agglutination est :`, choices: ['la formation d’amas de globules rouges', 'la coagulation normale', 'la digestion du sang'], answer: { index: 0 }, explanation: r`Réaction antigène-anticorps.` },
    { type: 'MCQ', prompt: r`En Côte d'Ivoire, la collecte du sang est organisée par :`, choices: ['le CNTS', 'la CIE', 'la SODECI'], answer: { index: 0 }, explanation: r`Centre National de Transfusion Sanguine.` },
    { type: 'MCQ', prompt: r`Le sang agglutine avec anti-D. La personne est :`, choices: ['Rh+', 'Rh−'], answer: { index: 0 }, explanation: r`Antigène D présent.` },
    { type: 'MCQ', prompt: r`Une personne AB a dans son plasma :`, choices: ['anti-A et anti-B', 'aucun anticorps anti-A ni anti-B', 'anti-A seulement'], answer: { index: 1 }, explanation: r`Elle porte A et B.` },
    { type: 'MCQ', prompt: r`Avant une transfusion, le sang du donneur est :`, choices: ['testé (VIH, hépatites…)', 'utilisé directement sans contrôle'], answer: { index: 0 }, explanation: r`Sécurité transfusionnelle.` },
    { type: 'OPEN', prompt: r`Explique pourquoi on ne peut pas transfuser du sang A à une personne du groupe B.`, answer: { model: 'Les anticorps anti-A du receveur agglutineraient les globules rouges A du donneur.', keywords: ['anti-A', 'agglutination'] }, explanation: r`Réaction antigène-anticorps.` },
  ],
  assessment: {
    title: 'Devoir BEPC — La transfusion sanguine',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Raisonne toujours avec : **antigènes du donneur** face aux **anticorps du receveur**.
2. N'oublie pas le **Rhésus**.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Le groupe O possède dans son plasma :`, type: 'MCQ', choices: ['anti-A et anti-B', 'aucun anticorps', 'anti-A seulement'], answer: { index: 0 }, points: 2, correction: r`Aucun antigène sur ses globules rouges.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Le donneur universel est :`, type: 'MCQ', choices: ['O−', 'AB+'], answer: { index: 0 }, points: 2, correction: r`Pas d'antigène A, B, D.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Un sujet AB+ peut recevoir du sang :`, type: 'MCQ', choices: ['de tous les groupes', 'AB uniquement'], answer: { index: 0 }, points: 2, correction: r`Receveur universel.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`On teste le sang de quatre élèves avec des sérums anti-A, anti-B et anti-D (+ : agglutination ; − : pas d'agglutination).

| Élève | anti-A | anti-B | anti-D |
|---|---|---|---|
| Koffi | + | − | + |
| Awa | − | − | − |
| Moussa | + | + | + |
| Aya | − | + | + |`, prompt: r`1. Détermine le groupe sanguin complet de chaque élève.`, type: 'OPEN', answer: { model: 'Koffi A+ ; Awa O− ; Moussa AB+ ; Aya B+' }, points: 4, correction: r`Koffi A+, Awa O−, Moussa AB+, Aya B+ *(1 pt chacun)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Lequel de ces élèves est donneur universel ?`, type: 'MCQ', choices: ['Koffi', 'Awa', 'Moussa', 'Aya'], answer: { index: 1 }, points: 3, correction: r`Awa est O−.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Moussa a besoin d'une transfusion. Qui peut lui donner son sang ? Justifie.`, type: 'OPEN', answer: { model: 'Tous : il est AB+, receveur universel.' }, points: 4, correction: r`Tous les quatre *(2 pts)* : Moussa est AB+, il n'a ni anti-A, ni anti-B, et il est Rh+ *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Koffi peut-il donner son sang à Aya ? Justifie.`, type: 'OPEN', answer: { model: 'Non : Aya (B) possède des anti-A qui agglutineraient les globules rouges A de Koffi.' }, points: 3, correction: r`Non *(1 pt)* : Aya, du groupe B, possède des anticorps **anti-A** qui agglutineraient les globules rouges A de Koffi *(2 pts)*.` },
    ],
  },
};

export const circulation: SeedChapter = {
  subject: 'SVT',
  order: 5,
  title: 'La circulation sanguine',
  minutes: 120,
  officialRef: `${REF}, leçon 5`,
  objectives: [
    'Décrire le cœur et les vaisseaux sanguins',
    'Décrire la double circulation (petite et grande circulation)',
    'Connaître les règles d’hygiène de l’appareil circulatoire',
  ],
  courseMd: r`
> **Situation.** Après une course pendant le cours d'EPS, Kouamé sent son cœur battre très vite. À quoi sert ce « moteur » et quel chemin le sang parcourt-il ?

## 1. Le cœur
Le cœur est un **muscle creux**, de la taille d'un poing, situé dans la cage thoracique. Il est divisé en **cœur droit** et **cœur gauche**, séparés par une cloison étanche. Chaque moitié comprend :
- une **oreillette** (en haut), qui reçoit le sang ;
- un **ventricule** (en bas), qui expulse le sang.

Des **valvules** obligent le sang à circuler dans **un seul sens** : oreillette → ventricule → artère.
- Le cœur **droit** contient du sang **pauvre en dioxygène** (riche en $CO_2$).
- Le cœur **gauche** contient du sang **riche en dioxygène**.

## 2. Les vaisseaux sanguins
| Vaisseau | Rôle | Paroi |
|---|---|---|
| **Artère** | conduit le sang **du cœur vers les organes** | épaisse, élastique |
| **Veine** | ramène le sang **des organes vers le cœur** | mince, avec valvules |
| **Capillaire** | très fin ; lieu des **échanges** entre le sang et les cellules | une seule couche de cellules |

## 3. La double circulation
**Petite circulation (pulmonaire) :** ventricule droit → **artère pulmonaire** → poumons (le sang se charge en $O_2$ et rejette le $CO_2$) → **veines pulmonaires** → oreillette gauche.

**Grande circulation (générale) :** ventricule gauche → **aorte** → artères → capillaires des organes (le sang cède $O_2$ et nutriments, reçoit $CO_2$ et déchets) → veines → **veines caves** → oreillette droite.

Le sang passe donc **deux fois** par le cœur à chaque tour.

## 4. Le fonctionnement du cœur
Le cœur se contracte et se relâche en permanence : c'est la **révolution cardiaque**. Au repos, le cœur bat environ **70 fois par minute** chez l'adulte ; on le mesure en prenant le **pouls** (au poignet ou au cou). Pendant l'effort, le rythme cardiaque augmente pour apporter plus de dioxygène aux muscles.

## 5. Hygiène et maladies
Maladies : **hypertension artérielle** (fréquente), infarctus, accident vasculaire cérébral (AVC).
Prévention : activité physique régulière, alimentation peu salée et peu grasse, pas de tabac, limiter l'alcool, contrôle de la tension.
`,
  summaryMd: r`
- Cœur : 2 oreillettes, 2 ventricules ; cœur droit = sang pauvre en $O_2$, cœur gauche = sang riche en $O_2$ ; valvules = sens unique.
- Artère : cœur → organes ; veine : organes → cœur ; capillaires : échanges.
- Petite circulation : VD → artère pulmonaire → poumons → veines pulmonaires → OG.
- Grande circulation : VG → aorte → organes → veines caves → OD.
- Pouls ≈ 70/min au repos ; augmente à l'effort.
`,
  questions: [
    { type: 'NUMERIC', prompt: r`Combien de cavités possède le cœur ?`, answer: { value: 4 }, explanation: r`2 oreillettes, 2 ventricules.` },
    { type: 'MCQ', prompt: r`Une artère conduit le sang :`, choices: ['du cœur vers les organes', 'des organes vers le cœur'], answer: { index: 0 }, explanation: r`Définition.` },
    { type: 'MCQ', prompt: r`Une veine conduit le sang :`, choices: ['du cœur vers les organes', 'des organes vers le cœur'], answer: { index: 1 }, explanation: r`Définition.` },
    { type: 'MCQ', prompt: r`Les échanges entre le sang et les cellules se font au niveau :`, choices: ['des capillaires', 'de l’aorte', 'des oreillettes'], answer: { index: 0 }, explanation: r`Paroi très fine.` },
    { type: 'MCQ', prompt: r`Le cœur gauche contient du sang :`, choices: ['riche en dioxygène', 'pauvre en dioxygène'], answer: { index: 0 }, explanation: r`Il revient des poumons.` },
    { type: 'MCQ', prompt: r`Le sang quitte le ventricule gauche par :`, choices: ['l’aorte', 'l’artère pulmonaire', 'les veines caves'], answer: { index: 0 }, explanation: r`Grande circulation.` },
    { type: 'MCQ', prompt: r`Le sang quitte le ventricule droit par :`, choices: ['l’aorte', 'l’artère pulmonaire'], answer: { index: 1 }, explanation: r`Vers les poumons.` },
    { type: 'MCQ', prompt: r`Le sang revenant des poumons arrive dans :`, choices: ['l’oreillette gauche', 'l’oreillette droite'], answer: { index: 0 }, explanation: r`Par les veines pulmonaires.` },
    { type: 'MCQ', prompt: r`Les veines caves débouchent dans :`, choices: ['l’oreillette droite', 'le ventricule gauche'], answer: { index: 0 }, explanation: r`Retour de la grande circulation.` },
    { type: 'MCQ', prompt: r`Les valvules servent à :`, choices: ['imposer un sens unique au sang', 'produire le sang', 'filtrer le sang'], answer: { index: 0 }, explanation: r`Elles empêchent le reflux.` },
    { type: 'NUMERIC', prompt: r`Fréquence cardiaque approximative au repos d'un adulte (battements/min) ?`, answer: { value: 70 }, explanation: r`Environ 70.` },
    { type: 'MCQ', prompt: r`Pendant un effort, la fréquence cardiaque :`, choices: ['augmente', 'diminue', 'reste identique'], answer: { index: 0 }, explanation: r`Plus d'$O_2$ pour les muscles.` },
    { type: 'NUMERIC', prompt: r`Pouls compté : 18 battements en 15 secondes. Fréquence (battements/min) ?`, answer: { value: 72 }, explanation: r`$18 \times 4$.` },
    { type: 'MCQ', prompt: r`Un facteur de risque de l'hypertension est :`, choices: ['l’excès de sel', 'la marche quotidienne', 'les fruits'], answer: { index: 0 }, explanation: r`Hygiène alimentaire.` },
    { type: 'OPEN', prompt: r`Décris le trajet du sang dans la petite circulation.`, answer: { model: 'Ventricule droit → artère pulmonaire → poumons → veines pulmonaires → oreillette gauche.', keywords: ['ventricule droit', 'artère pulmonaire', 'poumons', 'oreillette gauche'] }, explanation: r`Circulation pulmonaire.` },
  ],
  assessment: {
    title: 'Devoir BEPC — La circulation sanguine',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Mémorise le trajet en partant d'un ventricule et en revenant à une oreillette.
2. Retiens : **artère = part du cœur** ; **veine = revient au cœur** (quel que soit le sang qu'elles contiennent).`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. L'aorte part :`, type: 'MCQ', choices: ['du ventricule gauche', 'du ventricule droit', 'de l’oreillette droite'], answer: { index: 0 }, points: 2, correction: r`Grande circulation.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. L'artère pulmonaire transporte du sang :`, type: 'MCQ', choices: ['pauvre en dioxygène', 'riche en dioxygène'], answer: { index: 0 }, points: 2, correction: r`Elle part du cœur droit.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Les capillaires sont le lieu :`, type: 'MCQ', choices: ['des échanges', 'de la contraction'], answer: { index: 0 }, points: 2, correction: r`Paroi très fine.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`Kouamé mesure son pouls : au repos, il compte 18 battements en 15 secondes ; juste après une course, il compte 35 battements en 15 secondes.`, prompt: r`1. Calcule sa fréquence cardiaque au repos (battements/min).`, type: 'NUMERIC', answer: { value: 72 }, points: 2, resultPoints: 1, correction: r`$18 \times 4 = 72$ battements/min.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Calcule sa fréquence cardiaque après la course (battements/min).`, type: 'NUMERIC', answer: { value: 140 }, points: 2, resultPoints: 1, correction: r`$35 \times 4 = 140$ battements/min.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Explique pourquoi le cœur bat plus vite pendant l'effort.`, type: 'OPEN', answer: { model: 'Les muscles ont besoin de plus de dioxygène et de nutriments.' }, points: 4, correction: r`Les muscles consomment plus de dioxygène et de nutriments *(2 pts)* ; le cœur accélère pour augmenter le débit sanguin *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Décris le trajet du sang de l'oreillette gauche jusqu'aux muscles des jambes, puis son retour au cœur.`, type: 'OPEN', answer: { model: 'OG → VG → aorte → artères → capillaires des muscles → veines → veine cave → OD' }, points: 6, correction: r`Oreillette gauche → ventricule gauche → aorte → artères → capillaires des muscles *(3 pts)* → veines → veine cave inférieure → oreillette droite *(3 pts)*.` },
    ],
  },
};
