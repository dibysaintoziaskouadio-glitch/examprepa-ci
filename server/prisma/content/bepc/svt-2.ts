import { SeedChapter } from '../types';

const r = String.raw;
const REF = 'Programme de SVT 3e (DPFC) — progression 2026-2027';

export const grossessesPrecoces: SeedChapter = {
  subject: 'SVT',
  order: 6,
  title: 'Les grossesses précoces et les moyens de prévention',
  minutes: 120,
  officialRef: `${REF}, Compétence 2 : la reproduction humaine, leçon 1`,
  objectives: [
    'Expliquer comment survient une grossesse (cycle, fécondation, nidation)',
    'Identifier les conséquences d’une grossesse précoce',
    'Connaître les moyens de prévention et les personnes ressources',
  ],
  courseMd: r`
> **Situation.** Dans un collège, plusieurs élèves de 4ᵉ et de 3ᵉ ont abandonné les cours à cause d'une grossesse. Le club santé de l'établissement organise une causerie pour comprendre et prévenir ce problème.

## 1. La puberté
Entre 10 et 16 ans environ, le corps change : c'est la **puberté**. Les organes reproducteurs deviennent fonctionnels :
- chez la fille, les **ovaires** libèrent un **ovule** chaque mois environ et les **règles** apparaissent ;
- chez le garçon, les **testicules** produisent des **spermatozoïdes** en continu.
Dès lors, un **rapport sexuel** peut entraîner une grossesse, **même lors du premier rapport**.

## 2. Comment survient une grossesse
- **Cycle menstruel** : environ 28 jours (variable). L'**ovulation** a lieu vers le milieu du cycle (environ 14 jours avant les règles suivantes) ; pendant ce temps la paroi de l'utérus s'épaissit.
- **Fécondation** : dans la trompe, un spermatozoïde s'unit à l'ovule pour former une **cellule-œuf**.
- **Nidation** : l'œuf se divise, descend dans l'utérus et s'implante dans sa paroi. La grossesse commence ; les règles s'arrêtent.
Signes possibles : arrêt des règles, nausées, seins sensibles. Seul un **test** ou une consultation confirme la grossesse.

## 3. Grossesse précoce : définition et conséquences
Une **grossesse précoce** survient chez une adolescente dont le corps et la situation sociale ne sont pas prêts (avant 18 ans).
- **Santé** : complications lors de l'accouchement (bassin pas encore formé), anémie, fistules obstétricales, naissance prématurée ; un **avortement clandestin** peut entraîner des infections graves, la stérilité ou la mort.
- **Scolarité et avenir** : abandon de l'école, difficultés à poursuivre ses projets.
- **Social et économique** : rejet, conflits familiaux, difficultés à s'occuper de l'enfant.

## 4. Les moyens de prévention
- **L'abstinence** : ne pas avoir de rapports sexuels ; c'est le moyen le plus sûr.
- **Le préservatif** (masculin ou féminin) : il protège à la fois des grossesses et des **IST/VIH** s'il est bien utilisé à chaque rapport.
- **Les méthodes contraceptives médicales** (pilule, implant…) : sur **prescription** et suivi d'un agent de santé.
- **Savoir dire non**, éviter les situations à risque, refuser les cadeaux en échange de relations.
- **Parler** à une personne de confiance : parents, professeur, infirmier scolaire, éducateur du club santé, centre de santé.

⚠️ Les relations sexuelles imposées à un ou une mineur(e) sont des **violences** punies par la loi : il faut les signaler (parents, éducateur, services sociaux, police).
`,
  summaryMd: r`
- Puberté : ovulation (fille), spermatozoïdes (garçon) → une grossesse est possible dès le premier rapport.
- Fécondation (trompe) → cellule-œuf → **nidation** (utérus).
- Grossesse précoce : risques pour la santé (accouchement difficile, avortement clandestin dangereux), abandon scolaire, difficultés sociales.
- Prévention : **abstinence**, **préservatif** (protège aussi des IST/VIH), contraception sur prescription, dialogue avec des personnes de confiance.
`,
  questions: [
    { type: 'MCQ', prompt: r`La fécondation a lieu dans :`, choices: ['l’utérus', 'la trompe', 'le vagin'], answer: { index: 1 }, explanation: r`Rencontre ovule-spermatozoïde.` },
    { type: 'MCQ', prompt: r`La nidation est :`, choices: ['l’implantation de l’œuf dans l’utérus', 'la libération de l’ovule', 'la fabrication des spermatozoïdes'], answer: { index: 0 }, explanation: r`Début de la grossesse.` },
    { type: 'NUMERIC', prompt: r`Durée moyenne (en jours) d'un cycle menstruel ?`, answer: { value: 28 }, explanation: r`Environ 28 jours.` },
    { type: 'MCQ', prompt: r`Une grossesse est-elle possible dès le premier rapport sexuel ?`, choices: ['Oui', 'Non'], answer: { index: 0 }, explanation: r`Idée fausse très répandue.` },
    { type: 'MCQ', prompt: r`Le moyen de prévention le plus sûr est :`, choices: ['l’abstinence', 'le calcul des jours', 'les plantes'], answer: { index: 0 }, explanation: r`Aucun rapport, aucun risque.` },
    { type: 'MCQ', prompt: r`Le moyen qui protège à la fois de la grossesse et des IST est :`, choices: ['le préservatif', 'la pilule', 'l’implant'], answer: { index: 0 }, explanation: r`Barrière.` },
    { type: 'MCQ', prompt: r`La pilule contraceptive s'utilise :`, choices: ['sur prescription médicale', 'sans aucun avis'], answer: { index: 0 }, explanation: r`Suivi par un agent de santé.` },
    { type: 'MCQ', prompt: r`Un avortement clandestin peut entraîner :`, choices: ['des infections graves et la mort', 'aucun risque'], answer: { index: 0 }, explanation: r`Danger majeur.` },
    { type: 'MCQ', prompt: r`L'ovulation a lieu chez la femme :`, choices: ['dans l’ovaire', 'dans l’utérus'], answer: { index: 0 }, explanation: r`Libération de l'ovule.` },
    { type: 'MCQ', prompt: r`Les spermatozoïdes sont produits par :`, choices: ['les testicules', 'la prostate', 'la vessie'], answer: { index: 0 }, explanation: r`Glandes sexuelles masculines.` },
    { type: 'MCQ', prompt: r`Un signe possible de grossesse est :`, choices: ['l’arrêt des règles', 'la fièvre', 'la toux'], answer: { index: 0 }, explanation: r`À confirmer par un test.` },
    { type: 'MCQ', prompt: r`Une conséquence scolaire fréquente d'une grossesse précoce :`, choices: ['l’abandon des études', 'de meilleures notes'], answer: { index: 0 }, explanation: r`Conséquence sociale.` },
    { type: 'MCQ', prompt: r`La cellule-œuf résulte de :`, choices: ['la fécondation', 'la nidation', 'la menstruation'], answer: { index: 0 }, explanation: r`Union des gamètes.` },
    { type: 'MCQ', prompt: r`À qui une élève peut-elle demander conseil ?`, choices: ['infirmier scolaire ou parent de confiance', 'personne'], answer: { index: 0 }, explanation: r`Personnes ressources.` },
    { type: 'OPEN', prompt: r`Cite deux conséquences d'une grossesse précoce sur la santé de l'adolescente.`, answer: { model: 'Accouchement difficile, fistule, anémie, complications d’un avortement clandestin.', keywords: ['accouchement', 'fistule', 'avortement'] }, explanation: r`Le corps n'est pas prêt.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Grossesses précoces',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Utilise le vocabulaire exact : fécondation, nidation, ovulation.
2. Classe les conséquences : **santé**, **scolarité**, **vie sociale**.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. La fécondation est :`, type: 'MCQ', choices: ['l’union d’un ovule et d’un spermatozoïde', 'l’implantation de l’œuf'], answer: { index: 0 }, points: 2, correction: r`Définition.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Le préservatif protège :`, type: 'MCQ', choices: ['des grossesses et des IST', 'seulement des grossesses'], answer: { index: 0 }, points: 2, correction: r`Double protection.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. L'ovulation a lieu environ :`, type: 'MCQ', choices: ['14 jours avant les règles suivantes', 'le premier jour des règles'], answer: { index: 0 }, points: 2, correction: r`Milieu d'un cycle de 28 jours.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`Fanta, 15 ans, élève de 3ᵉ, n'a pas eu ses règles depuis deux mois. Elle a des nausées le matin. Elle pense qu'elle ne peut pas être enceinte car « c'était la première fois ».`, prompt: r`1. Quelle hypothèse peut-on faire ? Comment la vérifier ?`, type: 'OPEN', answer: { model: 'Grossesse ; test de grossesse ou consultation' }, points: 4, correction: r`Une grossesse *(2 pts)* ; à vérifier par un test ou une consultation dans un centre de santé *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Fanta a-t-elle raison de penser qu'on ne peut pas être enceinte au premier rapport ? Justifie.`, type: 'OPEN', answer: { model: 'Non : dès la puberté, l’ovulation rend la fécondation possible à chaque rapport.' }, points: 3, correction: r`Non *(1 pt)* : depuis la puberté, ses ovaires libèrent des ovules ; la fécondation est possible dès le premier rapport *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Cite trois conséquences possibles de cette grossesse pour Fanta.`, type: 'OPEN', answer: { model: 'Risques à l’accouchement ; abandon scolaire ; difficultés familiales et financières' }, points: 4, correction: r`Trois conséquences pertinentes (santé, scolarité, vie sociale) : 4 pts (1,5 + 1,5 + 1).` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Propose deux moyens qui auraient permis d'éviter cette situation.`, type: 'OPEN', answer: { model: 'Abstinence ; préservatif ; dialogue avec une personne de confiance' }, points: 3, correction: r`Deux moyens pertinents (abstinence, préservatif, information auprès d'une personne ressource) : 1,5 pt chacun.` },
    ],
  },
};

export const vih: SeedChapter = {
  subject: 'SVT',
  order: 7,
  title: 'L’infection au VIH',
  minutes: 180,
  officialRef: `${REF}, Compétence 2 : la reproduction humaine et l’infection au VIH, leçon 2`,
  objectives: [
    'Expliquer comment le VIH agit sur le système immunitaire',
    'Connaître les modes de transmission et de non-transmission',
    'Connaître le dépistage, le traitement et les moyens de prévention ; lutter contre la stigmatisation',
  ],
  courseMd: r`
> **Situation.** Un élève refuse de partager le banc d'un camarade dont la mère vit avec le VIH. A-t-il raison d'avoir peur ?

## 1. Le VIH et le sida
- Le **VIH** (virus de l'immunodéficience humaine) est un virus qui s'attaque à certains **globules blancs**, les **lymphocytes T4** (ou CD4), chefs d'orchestre de la défense de l'organisme.
- En détruisant progressivement ces cellules, il affaiblit le **système immunitaire**.
- Le **sida** (syndrome d'immunodéficience acquise) est le stade avancé de l'infection : l'organisme ne se défend plus contre des maladies dites **opportunistes** (tuberculose, diarrhées persistantes, infections de la peau…).

## 2. Évolution de l'infection (sans traitement)
1. **Primo-infection** : quelques semaines après la contamination, parfois des signes ressemblant à une grippe.
2. **Phase sans symptômes** (asymptomatique) : plusieurs années ; la personne paraît en bonne santé mais **peut transmettre** le virus. Le nombre de lymphocytes T4 baisse lentement.
3. **Stade sida** : les T4 sont très peu nombreux ; apparition des maladies opportunistes.

On ne peut donc **pas savoir à l'œil nu** si une personne est infectée : seul le **test de dépistage** le révèle.

## 3. Modes de transmission
Le virus se trouve en quantité suffisante dans le **sang**, le **sperme**, les **sécrétions vaginales** et le **lait maternel**.
- **Voie sexuelle** : rapports sexuels non protégés (principal mode).
- **Voie sanguine** : objets tranchants ou piquants souillés (lames, aiguilles, instruments de scarification, de tatouage), transfusion de sang non contrôlé.
- **De la mère à l'enfant** : pendant la grossesse, l'accouchement ou l'allaitement.

**Le VIH ne se transmet PAS** par : la poignée de main, les accolades, le partage du repas ou des toilettes, la salive, les larmes, la sueur, les piqûres de moustiques, l'eau de la piscine.

## 4. Dépistage et traitement
- Le **test de dépistage** est simple, confidentiel et souvent gratuit (centres de santé, centres de dépistage volontaire).
- Les **antirétroviraux (ARV)** ne guérissent pas, mais ils **bloquent la multiplication du virus** : une personne bien traitée vit longtemps et, lorsque sa charge virale devient indétectable, elle ne transmet plus le virus par voie sexuelle.
- La **PTME** (prévention de la transmission mère-enfant) permet à une femme séropositive suivie d'avoir un enfant non infecté.

## 5. Prévention et attitudes
- Abstinence, fidélité mutuelle après dépistage, **préservatif** à chaque rapport.
- Ne jamais partager lames, aiguilles ou objets tranchants ; exiger du matériel stérile.
- Faire son test et suivre le traitement si besoin.
- **Lutter contre la stigmatisation** : une personne vivant avec le VIH a les mêmes droits ; on peut étudier, jouer et manger avec elle.

Réponse à la situation : **non**, le VIH ne se transmet pas en partageant un banc ; il faut soutenir ce camarade.
`,
  summaryMd: r`
- VIH : détruit les **lymphocytes T4** → affaiblit l'immunité → **sida** (maladies opportunistes).
- Phase sans symptômes : la personne paraît saine mais peut transmettre ⟹ **dépistage**.
- Transmission : **sexuelle**, **sanguine**, **mère-enfant** (grossesse, accouchement, allaitement).
- Pas de transmission : poignée de main, repas, moustiques, salive, toilettes.
- ARV : contrôlent le virus (pas de guérison) ; PTME.
- Prévention : abstinence, fidélité, préservatif, matériel stérile ; non à la stigmatisation.
`,
  questions: [
    { type: 'MCQ', prompt: r`Le VIH détruit surtout :`, choices: ['les globules rouges', 'les lymphocytes T4', 'les plaquettes'], answer: { index: 1 }, explanation: r`Globules blancs chefs de la défense.` },
    { type: 'MCQ', prompt: r`Le sida est :`, choices: ['le stade avancé de l’infection au VIH', 'un autre virus', 'une maladie héréditaire'], answer: { index: 0 }, explanation: r`Immunodéficience.` },
    { type: 'MCQ', prompt: r`Le VIH se transmet par :`, choices: ['une poignée de main', 'un rapport sexuel non protégé', 'une piqûre de moustique'], answer: { index: 1 }, explanation: r`Voie sexuelle.` },
    { type: 'MCQ', prompt: r`Le VIH se transmet-il en partageant un repas ?`, choices: ['Oui', 'Non'], answer: { index: 1 }, explanation: r`Pas de transmission par la salive ou les aliments.` },
    { type: 'MCQ', prompt: r`Le moustique transmet-il le VIH ?`, choices: ['Oui', 'Non'], answer: { index: 1 }, explanation: r`Le virus ne survit pas chez le moustique.` },
    { type: 'MCQ', prompt: r`On peut savoir qu'une personne est séropositive :`, choices: ['en la regardant', 'par un test de dépistage'], answer: { index: 1 }, explanation: r`Phase sans symptômes.` },
    { type: 'MCQ', prompt: r`Les antirétroviraux :`, choices: ['guérissent définitivement', 'bloquent la multiplication du virus', 'sont inutiles'], answer: { index: 1 }, explanation: r`Traitement à vie.` },
    { type: 'MCQ', prompt: r`La PTME sert à :`, choices: ['prévenir la transmission mère-enfant', 'dépister le paludisme'], answer: { index: 0 }, explanation: r`Prévention de la transmission mère-enfant.` },
    { type: 'MCQ', prompt: r`Les maladies opportunistes apparaissent parce que :`, choices: ['le système immunitaire est affaibli', 'le cœur est malade'], answer: { index: 0 }, explanation: r`Baisse des T4.` },
    { type: 'MCQ', prompt: r`Partager une lame de rasoir peut transmettre le VIH par voie :`, choices: ['sanguine', 'aérienne'], answer: { index: 0 }, explanation: r`Sang contaminé.` },
    { type: 'MCQ', prompt: r`Le lait maternel peut transmettre le VIH :`, choices: ['oui', 'non'], answer: { index: 0 }, explanation: r`D'où le suivi PTME.` },
    { type: 'MCQ', prompt: r`Le test de dépistage est :`, choices: ['confidentiel', 'public'], answer: { index: 0 }, explanation: r`Le résultat est secret.` },
    { type: 'MCQ', prompt: r`Stigmatiser une personne vivant avec le VIH, c'est :`, choices: ['la rejeter ou la discriminer', 'l’aider'], answer: { index: 0 }, explanation: r`Attitude à combattre.` },
    { type: 'MCQ', prompt: r`Pendant la phase asymptomatique, la personne :`, choices: ['peut transmettre le virus', 'ne peut pas transmettre le virus'], answer: { index: 0 }, explanation: r`D'où l'importance du dépistage.` },
    { type: 'OPEN', prompt: r`Cite trois moyens de prévention du VIH.`, answer: { model: 'Abstinence, fidélité après dépistage, préservatif, matériel stérile.', keywords: ['abstinence', 'fidélité', 'préservatif', 'stérile'] }, explanation: r`Prévention combinée.` },
  ],
  assessment: {
    title: 'Devoir BEPC — L’infection au VIH',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Distingue bien **VIH** (le virus) et **sida** (le stade de la maladie).
2. Pour un graphique, décris l'évolution par étapes, puis **explique** avec le rôle des lymphocytes T4.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Le VIH s'attaque :`, type: 'MCQ', choices: ['au système immunitaire', 'au système digestif'], answer: { index: 0 }, points: 2, correction: r`Lymphocytes T4.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Lequel ne transmet pas le VIH ?`, type: 'MCQ', choices: ['le partage d’une seringue', 'le partage d’un repas', 'un rapport non protégé'], answer: { index: 1 }, points: 2, correction: r`Pas de transmission par les aliments.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Les ARV :`, type: 'MCQ', choices: ['contrôlent le virus', 'détruisent le virus définitivement'], answer: { index: 0 }, points: 2, correction: r`Pas de guérison.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`Le tableau suivant donne l'évolution du nombre de lymphocytes T4 (par mm³ de sang) chez une personne infectée, non traitée :

| Temps après contamination | 0 | 6 mois | 3 ans | 6 ans | 9 ans |
|---|---|---|---|---|---|
| Lymphocytes T4 (/mm³) | 1 000 | 750 | 550 | 300 | 100 |

Les maladies opportunistes apparaissent quand les T4 descendent sous 200/mm³.`, prompt: r`1. Décris l'évolution du nombre de lymphocytes T4.`, type: 'OPEN', answer: { model: 'Diminution progressive de 1 000 à 100 en 9 ans' }, points: 3, correction: r`Le nombre de T4 **diminue** progressivement, de 1 000 à 100/mm³ en 9 ans.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Explique cette évolution.`, type: 'OPEN', answer: { model: 'Le VIH détruit les lymphocytes T4.' }, points: 3, correction: r`Le VIH infecte et **détruit** les lymphocytes T4.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. À partir de quelle durée environ (en années) la personne risque-t-elle des maladies opportunistes ? (entre 6 et 9 ans ; donne une valeur entière plausible)`, type: 'NUMERIC', answer: { value: 8, tolerance: 1 }, points: 3, resultPoints: 3, correction: r`Les T4 passent sous 200/mm³ entre 6 ans (300) et 9 ans (100), vers 7 à 8 ans.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Pendant les premières années, cette personne paraît en bonne santé. Peut-elle transmettre le virus ? Quel conseil lui donner ?`, type: 'OPEN', answer: { model: 'Oui ; se faire dépister et suivre un traitement ARV, se protéger.' }, points: 5, correction: r`Oui, elle peut transmettre le virus pendant la phase sans symptômes *(2 pts)* ; conseils : se faire dépister, suivre le traitement ARV, utiliser le préservatif *(3 pts)*.` },
    ],
  },
};

export const caracteristiquesSol: SeedChapter = {
  subject: 'SVT',
  order: 8,
  title: 'Les caractéristiques d’un sol',
  minutes: 120,
  officialRef: `${REF}, Compétence 3 : les relations sols-plantes, leçon 1`,
  objectives: [
    'Identifier les constituants d’un sol',
    'Déterminer la texture et décrire le profil d’un sol',
    'Mesurer et comparer la perméabilité et la capacité de rétention en eau',
  ],
  courseMd: r`
> **Situation.** Un planteur de Soubré veut créer une nouvelle parcelle de cacao. Deux terrains s'offrent à lui : l'un sableux, près de la rivière, l'autre argilo-humifère en forêt. Lequel choisir ?

## 1. Les constituants du sol
Le sol est la couche superficielle **meuble** de l'écorce terrestre, issue de l'altération des roches et de la décomposition de la matière organique. Il contient :
- des **éléments minéraux** : cailloux, graviers, **sable**, **limon**, **argile** ;
- de la **matière organique** : débris végétaux et animaux, **humus** (matière organique décomposée, de couleur sombre) ;
- de l'**eau** et de l'**air** (dans les espaces entre les particules) ;
- des **êtres vivants** : vers de terre, termites, fourmis, champignons, bactéries…

**Expériences :**
- **Chauffage** dans un tube : de la buée se forme → le sol contient de l'**eau**.
- **Sol versé dans l'eau** : des bulles s'échappent → le sol contient de l'**air**.
- **Calcination** (chauffage fort) : la masse diminue et une odeur de brûlé se dégage → présence de **matière organique**.

## 2. La texture du sol
La texture est la proportion des particules minérales selon leur taille :
| Particule | Diamètre |
|---|---|
| Sable | 2 mm à 0,05 mm |
| Limon | 0,05 mm à 0,002 mm |
| Argile | moins de 0,002 mm |
On la détermine par **tamisage** (gros éléments) et par **sédimentation** : dans une éprouvette d'eau agitée, les particules se déposent par couches, les plus grosses en bas (sable), puis le limon ; l'argile reste longtemps en suspension ; l'humus flotte.

## 3. Le profil du sol
Une coupe verticale montre des couches, les **horizons** :
- **horizon A** (en surface) : riche en **humus**, sombre, beaucoup d'êtres vivants ;
- **horizon B** : pauvre en humus, enrichi en éléments venus d'en haut (argile, oxydes de fer : couleur rouge ou ocre des sols **ferrallitiques** de Côte d'Ivoire) ;
- **horizon C** : la **roche mère** en cours d'altération.

## 4. Perméabilité et rétention en eau
On verse le même volume d'eau sur des masses égales de sols différents placés dans des entonnoirs :
- le **sol sableux** laisse passer l'eau **rapidement** : il est **très perméable** mais retient peu d'eau ;
- le **sol argileux** laisse passer l'eau **lentement** : il est **peu perméable** et retient beaucoup d'eau (risque d'asphyxie des racines s'il est gorgé d'eau) ;
- le **sol humifère** (riche en humus) a une perméabilité moyenne et une **bonne capacité de rétention**.

**Volume d'eau retenu** = volume versé − volume recueilli.

Réponse à la situation : le sol **argilo-humifère** de forêt retient mieux l'eau et les sels minéraux : il convient mieux au cacaoyer.
`,
  summaryMd: r`
- Constituants : minéraux (sable, limon, argile), matière organique (humus), eau, air, êtres vivants.
- Texture : sable (2–0,05 mm), limon (0,05–0,002 mm), argile (< 0,002 mm) ; sédimentation.
- Profil : horizon A (humifère), B, C (roche mère).
- Sableux : très perméable, retient peu ; argileux : peu perméable, retient beaucoup ; humifère : bon équilibre.
- Eau retenue = eau versée − eau recueillie.
`,
  questions: [
    { type: 'MCQ', prompt: r`L'humus est :`, choices: ['de la matière organique décomposée', 'un type de roche', 'du sable fin'], answer: { index: 0 }, explanation: r`Définition.` },
    { type: 'MCQ', prompt: r`La particule minérale la plus fine est :`, choices: ['le sable', 'le limon', 'l’argile'], answer: { index: 2 }, explanation: r`Moins de 0,002 mm.` },
    { type: 'MCQ', prompt: r`L'horizon le plus riche en humus est :`, choices: ['A', 'B', 'C'], answer: { index: 0 }, explanation: r`En surface.` },
    { type: 'MCQ', prompt: r`L'horizon C correspond à :`, choices: ['la roche mère', 'la litière', 'l’humus'], answer: { index: 0 }, explanation: r`Roche en altération.` },
    { type: 'MCQ', prompt: r`Le sol le plus perméable est :`, choices: ['le sol sableux', 'le sol argileux'], answer: { index: 0 }, explanation: r`Grosses particules, grands espaces.` },
    { type: 'MCQ', prompt: r`Le sol qui retient le plus d'eau est :`, choices: ['le sol sableux', 'le sol argileux'], answer: { index: 1 }, explanation: r`Particules fines.` },
    { type: 'NUMERIC', prompt: r`On verse 200 mL d'eau sur un sol et on en recueille 140 mL. Volume retenu (mL) ?`, answer: { value: 60 }, explanation: r`$200 - 140$.` },
    { type: 'MCQ', prompt: r`Des bulles s'échappent d'une motte de sol plongée dans l'eau : le sol contient :`, choices: ['de l’air', 'de l’argile'], answer: { index: 0 }, explanation: r`L'air est chassé par l'eau.` },
    { type: 'MCQ', prompt: r`La calcination d'un sol fait diminuer sa masse car :`, choices: ['la matière organique brûle', 'le sable fond'], answer: { index: 0 }, explanation: r`Mise en évidence de la matière organique.` },
    { type: 'MCQ', prompt: r`Lors de la sédimentation, la couche du fond est formée :`, choices: ['de sable', 'd’argile', 'd’humus'], answer: { index: 0 }, explanation: r`Particules les plus lourdes.` },
    { type: 'MCQ', prompt: r`L'humus, lors de la sédimentation :`, choices: ['flotte', 'se dépose en premier'], answer: { index: 0 }, explanation: r`Il est léger.` },
    { type: 'MCQ', prompt: r`La couleur rouge de nombreux sols ivoiriens est due :`, choices: ['aux oxydes de fer', 'au sable blanc', 'à l’humus'], answer: { index: 0 }, explanation: r`Sols ferrallitiques.` },
    { type: 'MCQ', prompt: r`Les vers de terre et les termites sont :`, choices: ['des êtres vivants du sol', 'des constituants minéraux'], answer: { index: 0 }, explanation: r`Faune du sol.` },
    { type: 'NUMERIC', prompt: r`On verse 250 mL d'eau ; 50 mL sont retenus. Volume recueilli (mL) ?`, answer: { value: 200 }, explanation: r`$250 - 50$.` },
    { type: 'OPEN', prompt: r`Pourquoi un sol trop argileux et gorgé d'eau est-il défavorable aux racines ?`, answer: { model: 'L’eau remplace l’air : les racines manquent de dioxygène (asphyxie).', keywords: ['air', 'asphyxie'] }, explanation: r`Mauvaise aération.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Les caractéristiques d’un sol',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Pour une expérience de perméabilité, compare des **volumes égaux** et des **temps** d'écoulement.
2. Calcule toujours l'**eau retenue** avant de conclure.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Le sol sableux est :`, type: 'MCQ', choices: ['très perméable', 'imperméable'], answer: { index: 0 }, points: 2, correction: r`Grosses particules.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. L'horizon B est situé :`, type: 'MCQ', choices: ['entre A et C', 'au-dessus de A'], answer: { index: 0 }, points: 2, correction: r`Profil A, B, C.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. La calcination met en évidence :`, type: 'MCQ', choices: ['la matière organique', 'l’air'], answer: { index: 0 }, points: 2, correction: r`Perte de masse.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`On verse 200 mL d'eau sur 100 g de trois sols placés dans des entonnoirs. Après 10 minutes :

| Sol | Volume recueilli (mL) | Temps d'écoulement des premières gouttes |
|---|---|---|
| A (sableux) | 170 | 15 s |
| B (argileux) | 60 | 4 min |
| C (humifère) | 110 | 1 min |`, prompt: r`1. Calcule le volume d'eau retenu par le sol B (en mL).`, type: 'NUMERIC', answer: { value: 140 }, points: 3, resultPoints: 1.5, correction: r`$200 - 60 = 140$ mL.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Classe les sols du plus perméable au moins perméable. Justifie.`, type: 'OPEN', answer: { model: 'A > C > B (temps d’écoulement)' }, points: 4, correction: r`A, puis C, puis B *(2 pts)* : l'eau traverse A le plus vite et B le plus lentement *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Quel sol retient le plus d'eau ?`, type: 'MCQ', choices: ['A', 'B', 'C'], answer: { index: 1 }, points: 3, correction: r`B retient 140 mL.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Quel sol conseilles-tu pour une culture de cacao ? Justifie.`, type: 'OPEN', answer: { model: 'Le sol humifère C : bonne rétention, perméabilité moyenne, riche en matière organique.' }, points: 4, correction: r`Le sol C *(1 pt)* : il retient bien l'eau sans s'asphyxier et il est riche en humus *(3 pts)*.` },
    ],
  },
};

export const solsPlantes: SeedChapter = {
  subject: 'SVT',
  order: 9,
  title: 'Les relations sols-plantes',
  minutes: 120,
  officialRef: `${REF}, Compétence 3 : les relations sols-plantes, leçon 2`,
  objectives: [
    'Montrer que la plante prélève dans le sol l’eau et les sels minéraux',
    'Identifier les éléments minéraux indispensables (N, P, K…)',
    'Expliquer le rôle des plantes dans la formation et la protection du sol',
  ],
  courseMd: r`
> **Situation.** Dans un jardin scolaire, les plants de tomate d'une planche restent petits et jaunissent, alors que ceux de la planche voisine, qui a reçu du compost, sont vigoureux. Que prélèvent les plantes dans le sol ?

## 1. Le sol, support et réservoir
Le sol **ancre** la plante grâce aux racines. Il lui fournit l'**eau** et les **sels minéraux** dissous : c'est la **solution du sol**.

## 2. L'absorption par les racines
- L'eau et les sels minéraux sont absorbés au niveau des **poils absorbants**, situés près de l'extrémité des racines ; ils augmentent la surface d'absorption.
- La **sève brute** (eau + sels minéraux) monte ensuite des racines vers les feuilles par des vaisseaux.

**Expérience :** une plante dont les racines baignent dans de l'eau colorée (ou dont on suit le niveau d'eau, sous une couche d'huile qui empêche l'évaporation) : le niveau baisse, la tige se colore → la plante absorbe l'eau par ses racines.

## 3. Les besoins en sels minéraux
On cultive des plantes sur des **milieux de culture** contenant tous les sels minéraux (milieu complet) ou privés d'un élément :
- sans **azote (N)** : croissance faible, feuilles **jaunes** ;
- sans **phosphore (P)** : racines peu développées, mauvaise floraison ;
- sans **potassium (K)** : fruits et graines de mauvaise qualité, bord des feuilles qui jaunit.
Ces éléments (N, P, K, mais aussi calcium, magnésium, soufre, fer…) sont **indispensables**. C'est pourquoi on apporte des **engrais** (par exemple « NPK »).

## 4. Le sol influence la végétation
Selon le sol (humide ou sec, acide ou non, riche ou pauvre), on trouve des plantes différentes : forêt dense sur sols profonds du Sud, savane sur sols plus pauvres du Centre et du Nord. Certaines plantes sont **indicatrices** d'un type de sol.

## 5. Les plantes forment et protègent le sol
- Les feuilles mortes forment la **litière** ; les **décomposeurs** (champignons, bactéries, vers de terre, termites) la transforment en **humus**, puis en **sels minéraux** réutilisables par les plantes : c'est le **cycle de la matière**.
- Les **racines** retiennent la terre et limitent l'érosion ; le feuillage protège le sol de la pluie battante.
- Certaines plantes, les **légumineuses** (haricot, arachide, soja), enrichissent le sol en **azote** grâce aux bactéries de leurs racines (nodosités).

Réponse à la situation : les tomates de la première planche manquent de **sels minéraux**, notamment d'**azote** ; le compost en apporte.
`,
  summaryMd: r`
- La plante absorbe l'**eau** et les **sels minéraux** par les **poils absorbants** ; sève brute vers les feuilles.
- Éléments indispensables : **N** (croissance, feuilles vertes), **P** (racines, floraison), **K** (fruits, graines)…
- Engrais NPK, compost.
- Litière → décomposeurs → humus → sels minéraux : **cycle de la matière**.
- Racines et feuillage protègent le sol ; légumineuses enrichissent en azote.
`,
  questions: [
    { type: 'MCQ', prompt: r`La plante absorbe l'eau du sol grâce :`, choices: ['aux poils absorbants', 'aux feuilles', 'aux fleurs'], answer: { index: 0 }, explanation: r`Près de l'extrémité des racines.` },
    { type: 'MCQ', prompt: r`La sève brute contient :`, choices: ['de l’eau et des sels minéraux', 'du sucre uniquement'], answer: { index: 0 }, explanation: r`Solution absorbée.` },
    { type: 'MCQ', prompt: r`Une plante cultivée sans azote présente :`, choices: ['des feuilles jaunes et une faible croissance', 'des fruits énormes'], answer: { index: 0 }, explanation: r`Carence azotée.` },
    { type: 'MCQ', prompt: r`Les lettres NPK désignent :`, choices: ['azote, phosphore, potassium', 'néon, plomb, krypton'], answer: { index: 0 }, explanation: r`Éléments majeurs des engrais.` },
    { type: 'MCQ', prompt: r`Les décomposeurs transforment la litière en :`, choices: ['humus puis sels minéraux', 'roche'], answer: { index: 0 }, explanation: r`Cycle de la matière.` },
    { type: 'MCQ', prompt: r`Un exemple de décomposeur est :`, choices: ['le champignon', 'le cacaoyer', 'le sable'], answer: { index: 0 }, explanation: r`Avec bactéries, vers, termites.` },
    { type: 'MCQ', prompt: r`Les légumineuses enrichissent le sol en :`, choices: ['azote', 'sable', 'calcaire'], answer: { index: 0 }, explanation: r`Bactéries des nodosités.` },
    { type: 'MCQ', prompt: r`Un exemple de légumineuse est :`, choices: ['l’arachide', 'le maïs', 'le manioc'], answer: { index: 0 }, explanation: r`Famille des Fabacées.` },
    { type: 'MCQ', prompt: r`Les racines protègent le sol contre :`, choices: ['l’érosion', 'la lumière'], answer: { index: 0 }, explanation: r`Elles retiennent la terre.` },
    { type: 'MCQ', prompt: r`Le phosphore favorise surtout :`, choices: ['le développement des racines et la floraison', 'la couleur bleue des feuilles'], answer: { index: 0 }, explanation: r`Rôle de P.` },
    { type: 'MCQ', prompt: r`L'huile versée sur l'eau dans l'expérience d'absorption sert à :`, choices: ['empêcher l’évaporation', 'nourrir la plante'], answer: { index: 0 }, explanation: r`Seule la plante fait baisser le niveau.` },
    { type: 'MCQ', prompt: r`Le sol joue pour la plante un rôle de :`, choices: ['support et de réservoir', 'source de lumière'], answer: { index: 0 }, explanation: r`Ancrage, eau, sels.` },
    { type: 'MCQ', prompt: r`La litière est formée :`, choices: ['de débris végétaux à la surface du sol', 'de roche mère'], answer: { index: 0 }, explanation: r`Feuilles mortes, branches.` },
    { type: 'MCQ', prompt: r`Le compost apporte au sol :`, choices: ['de la matière organique et des sels minéraux', 'uniquement du sable'], answer: { index: 0 }, explanation: r`Engrais organique.` },
    { type: 'OPEN', prompt: r`Explique le cycle de la matière dans une forêt.`, answer: { model: 'Les feuilles tombent (litière), les décomposeurs les transforment en humus puis en sels minéraux absorbés par les arbres.', keywords: ['litière', 'décomposeurs', 'sels minéraux'] }, explanation: r`La matière circule entre le sol et les plantes.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Les relations sols-plantes',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Compare toujours un milieu **carencé** au milieu **complet** (témoin).
2. Conclus en nommant l'élément et son rôle.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Les poils absorbants se trouvent :`, type: 'MCQ', choices: ['près de l’extrémité des racines', 'sur les feuilles'], answer: { index: 0 }, points: 2, correction: r`Zone pilifère.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Le potassium est surtout utile :`, type: 'MCQ', choices: ['aux fruits et graines', 'à l’ancrage'], answer: { index: 0 }, points: 2, correction: r`Qualité des fruits.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Les décomposeurs fabriquent :`, type: 'MCQ', choices: ['l’humus', 'la roche mère'], answer: { index: 0 }, points: 2, correction: r`Transformation de la litière.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`On cultive des plants de maïs identiques sur quatre milieux pendant un mois :
- milieu 1 : tous les sels minéraux → plants hauts, feuilles vertes ;
- milieu 2 : sans azote → plants petits, feuilles jaunes ;
- milieu 3 : sans phosphore → racines peu développées ;
- milieu 4 : eau distillée seule → plants très chétifs.`, prompt: r`1. Quel est le rôle du milieu 1 ?`, type: 'OPEN', answer: { model: 'Témoin' }, points: 3, correction: r`C'est le **témoin**, qui sert de comparaison.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Que montre la comparaison des milieux 1 et 2 ?`, type: 'OPEN', answer: { model: 'L’azote est indispensable à la croissance et à la couleur verte des feuilles.' }, points: 4, correction: r`Seul l'azote manque dans le milieu 2 *(1 pt)* : l'azote est indispensable à la croissance et à la couleur verte des feuilles *(3 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Que montre le milieu 4 ?`, type: 'OPEN', answer: { model: 'L’eau seule ne suffit pas : la plante a besoin de sels minéraux.' }, points: 3, correction: r`L'eau seule ne suffit pas : la plante a besoin de sels minéraux.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Un paysan constate que son maïs jaunit. Que lui conseilles-tu ?`, type: 'OPEN', answer: { model: 'Apporter un engrais azoté ou du compost ; cultiver des légumineuses.' }, points: 4, correction: r`Apporter de l'azote : engrais (NPK, urée) ou compost/fumier *(2 pts)* ; associer ou faire alterner des légumineuses *(2 pts)*.` },
    ],
  },
};

export const degradationSols: SeedChapter = {
  subject: 'SVT',
  order: 10,
  title: 'La dégradation des sols',
  minutes: 120,
  officialRef: `${REF}, Compétence 4 : dégradation, protection et amélioration des sols, leçon 1`,
  objectives: [
    'Identifier les formes de dégradation des sols (érosion, appauvrissement, pollution)',
    'Expliquer les causes naturelles et humaines de la dégradation',
    'Décrire les conséquences pour l’agriculture et l’environnement',
  ],
  courseMd: r`
> **Situation.** Dans une région du Centre-Ouest, après la destruction de la forêt et des années d'orpaillage clandestin, les champs produisent de moins en moins et les cours d'eau sont boueux. Que s'est-il passé ?

## 1. Formes de dégradation
- **L'érosion** : enlèvement et transport des particules du sol.
  - **hydrique** (par l'eau) : la pluie battante détache les particules, le **ruissellement** les emporte ; on observe des rigoles puis des **ravines** ;
  - **éolienne** (par le vent) : surtout dans les zones sèches du Nord (harmattan).
- **L'appauvrissement** : le sol perd son humus et ses sels minéraux.
- **La pollution** : déchets plastiques, pesticides et engrais en excès, huiles de vidange, produits toxiques (mercure, cyanure) utilisés dans l'orpaillage.
- **Le tassement** et la **salinisation** dans certains cas.

## 2. Causes
**Naturelles :** fortes pluies sur des pentes, vents violents, sécheresse.

**Humaines (les plus importantes) :**
- **déforestation** (exploitation du bois, extension des plantations) : le sol n'est plus protégé ;
- **feux de brousse** : destruction de la couverture végétale et de l'humus ;
- **agriculture sur brûlis**, **monoculture** et absence de jachère : épuisement du sol ;
- **surpâturage** : piétinement et disparition de l'herbe ;
- **orpaillage clandestin** : excavations, destruction des terres agricoles, pollution au mercure ;
- **urbanisation** et **déchets plastiques** qui empêchent l'infiltration de l'eau.

## 3. Conséquences
- **Baisse des rendements** agricoles, insécurité alimentaire.
- **Perte de terres cultivables**, avancée de la savane et, au Nord, risque de **désertification**.
- **Envasement** et **ensablement** des cours d'eau et des barrages, inondations.
- **Pollution** des eaux et des aliments (métaux lourds), risques pour la santé.
- Exode rural et pauvreté.

## 4. Mettre en évidence l'érosion
**Expérience :** deux bacs inclinés remplis de terre, l'un nu, l'autre couvert d'herbe ; on les arrose de la même façon. L'eau recueillie sous le bac nu est **boueuse** et abondante ; celle du bac couvert est plus claire. Conclusion : la **couverture végétale protège** le sol de l'érosion.

Réponse à la situation : la **déforestation** et l'**orpaillage** ont provoqué l'**érosion**, l'**appauvrissement** et la **pollution** des sols.
`,
  summaryMd: r`
- Formes : **érosion** (hydrique, éolienne), **appauvrissement**, **pollution**.
- Causes humaines : déforestation, feux de brousse, brûlis, monoculture, surpâturage, **orpaillage clandestin**, déchets plastiques.
- Conséquences : baisse des rendements, désertification, envasement des cours d'eau, pollution, pauvreté.
- Expérience : sol nu → eau boueuse ; sol couvert → eau claire.
`,
  questions: [
    { type: 'MCQ', prompt: r`L'érosion hydrique est due :`, choices: ['à l’eau', 'au vent', 'aux animaux'], answer: { index: 0 }, explanation: r`Pluie et ruissellement.` },
    { type: 'MCQ', prompt: r`L'érosion éolienne est due :`, choices: ['au vent', 'aux vers de terre'], answer: { index: 0 }, explanation: r`Harmattan au Nord.` },
    { type: 'MCQ', prompt: r`Une cause humaine de dégradation des sols est :`, choices: ['les feux de brousse', 'le reboisement', 'la jachère'], answer: { index: 0 }, explanation: r`Destruction de la végétation et de l'humus.` },
    { type: 'MCQ', prompt: r`L'orpaillage clandestin pollue les sols avec :`, choices: ['du mercure', 'de l’humus', 'de l’eau potable'], answer: { index: 0 }, explanation: r`Métal toxique.` },
    { type: 'MCQ', prompt: r`Un sol nu soumis à la pluie :`, choices: ['est plus érodé', 'est mieux protégé'], answer: { index: 0 }, explanation: r`Pas de couverture.` },
    { type: 'MCQ', prompt: r`Dans l'expérience des bacs, l'eau du bac nu est :`, choices: ['boueuse', 'claire'], answer: { index: 0 }, explanation: r`Particules emportées.` },
    { type: 'MCQ', prompt: r`Le surpâturage, c'est :`, choices: ['trop d’animaux sur un même pâturage', 'la culture du riz'], answer: { index: 0 }, explanation: r`Piétinement, disparition de l'herbe.` },
    { type: 'MCQ', prompt: r`La monoculture sans jachère entraîne :`, choices: ['l’appauvrissement du sol', 'l’enrichissement du sol'], answer: { index: 0 }, explanation: r`Épuisement des sels minéraux.` },
    { type: 'MCQ', prompt: r`L'envasement des barrages est une conséquence :`, choices: ['de l’érosion', 'du reboisement'], answer: { index: 0 }, explanation: r`Particules transportées.` },
    { type: 'MCQ', prompt: r`Les sachets plastiques dans le sol :`, choices: ['empêchent l’infiltration de l’eau', 'fertilisent le sol'], answer: { index: 0 }, explanation: r`Ils ne se décomposent pas.` },
    { type: 'MCQ', prompt: r`La désertification menace surtout :`, choices: ['les régions sèches du Nord', 'la forêt dense du Sud'], answer: { index: 0 }, explanation: r`Climat sec.` },
    { type: 'MCQ', prompt: r`Les ravines sont :`, choices: ['des entailles creusées par le ruissellement', 'des racines'], answer: { index: 0 }, explanation: r`Érosion hydrique avancée.` },
    { type: 'MCQ', prompt: r`La déforestation favorise l'érosion car :`, choices: ['le sol n’est plus protégé', 'les arbres attirent la pluie'], answer: { index: 0 }, explanation: r`Plus de feuillage ni de racines.` },
    { type: 'MCQ', prompt: r`Une conséquence de la dégradation des sols pour les paysans :`, choices: ['la baisse des récoltes', 'la hausse des récoltes'], answer: { index: 0 }, explanation: r`Sols appauvris.` },
    { type: 'OPEN', prompt: r`Cite trois causes humaines de la dégradation des sols en Côte d'Ivoire.`, answer: { model: 'Déforestation, feux de brousse, orpaillage clandestin, surpâturage, monoculture.', keywords: ['déforestation', 'feux de brousse', 'orpaillage'] }, explanation: r`Activités humaines.` },
  ],
  assessment: {
    title: 'Devoir BEPC — La dégradation des sols',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Distingue les **causes** (ce qui provoque) et les **conséquences** (ce qui en résulte).
2. Appuie-toi sur des exemples ivoiriens.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Le ruissellement provoque :`, type: 'MCQ', choices: ['l’érosion hydrique', 'l’érosion éolienne'], answer: { index: 0 }, points: 2, correction: r`Eau qui coule en surface.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Une couverture végétale :`, type: 'MCQ', choices: ['protège le sol', 'accélère l’érosion'], answer: { index: 0 }, points: 2, correction: r`Feuillage et racines.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. L'orpaillage clandestin est une cause :`, type: 'MCQ', choices: ['humaine', 'naturelle'], answer: { index: 0 }, points: 2, correction: r`Activité humaine.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`On arrose de la même façon deux bacs inclinés de terre : le bac 1 est nu, le bac 2 est couvert d'herbe. On recueille l'eau qui s'écoule pendant 5 minutes :

| Bac | Volume d'eau recueilli | Masse de terre emportée |
|---|---|---|
| 1 (nu) | 800 mL | 120 g |
| 2 (couvert) | 300 mL | 10 g |`, prompt: r`1. Combien de fois plus de terre le bac nu a-t-il perdu ?`, type: 'NUMERIC', answer: { value: 12 }, points: 3, resultPoints: 3, correction: r`$\frac{120}{10} = 12$ fois plus.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Explique pourquoi le bac 2 perd moins d'eau et de terre.`, type: 'OPEN', answer: { model: 'L’herbe freine l’eau, favorise l’infiltration et ses racines retiennent la terre.' }, points: 4, correction: r`Le feuillage freine la pluie et le ruissellement *(2 pts)* ; les racines retiennent la terre et favorisent l'infiltration *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Quel phénomène cette expérience met-elle en évidence ?`, type: 'MCQ', choices: ['l’érosion hydrique', 'la photosynthèse'], answer: { index: 0 }, points: 3, correction: r`Érosion par l'eau.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Cite deux conséquences de ce phénomène pour un village agricole.`, type: 'OPEN', answer: { model: 'Baisse des récoltes ; envasement des cours d’eau' }, points: 4, correction: r`Deux conséquences pertinentes (baisse des rendements, perte de terres, envasement, ravines…) : 2 pts chacune.` },
    ],
  },
};

export const protectionSols: SeedChapter = {
  subject: 'SVT',
  order: 11,
  title: 'La protection et l’amélioration des sols',
  minutes: 120,
  officialRef: `${REF}, Compétence 4 : dégradation, protection et amélioration des sols, leçon 2`,
  objectives: [
    'Proposer des techniques de protection des sols contre l’érosion',
    'Proposer des techniques d’amélioration de la fertilité (engrais, amendements)',
    'Fabriquer et utiliser du compost',
  ],
  courseMd: r`
> **Situation.** Le club environnement d'un collège de Daloa veut aider les parents d'élèves à retrouver des sols fertiles et à lutter contre l'érosion de leurs champs en pente.

## 1. Protéger le sol contre l'érosion
- **Reboisement** et **agroforesterie** (associer arbres et cultures, par exemple cacao sous ombrage).
- **Cultures en courbes de niveau** et **terrasses** sur les pentes : on cultive perpendiculairement à la pente pour freiner le ruissellement.
- **Haies vives** et **brise-vent** ; bandes enherbées.
- **Paillage** (mulch) : couvrir le sol de résidus végétaux.
- **Plantes de couverture** (par exemple le mucuna, une légumineuse).
- **Lutte contre les feux de brousse** : pare-feu, sensibilisation.
- Réhabilitation des sites d'orpaillage (remblai, replantation) et refus des produits toxiques.

## 2. Améliorer la fertilité
- **Jachère** : laisser la terre se reposer pour qu'elle reconstitue son humus.
- **Rotation (assolement) des cultures** : alterner des cultures aux besoins différents, et des légumineuses (arachide, soja, niébé) qui enrichissent le sol en azote.
- **Engrais organiques** : **compost**, **fumier**, déchets de cuisine décomposés ; ils apportent de l'humus et des sels minéraux, et améliorent la structure du sol.
- **Engrais minéraux** (NPK, urée) : efficaces mais à utiliser à la **bonne dose**, sinon ils polluent les eaux et acidifient le sol.
- **Amendements** : la **chaux** corrige les sols trop **acides**.
- **Irrigation** (zones sèches) et **drainage** (sols gorgés d'eau).

## 3. Fabriquer du compost
1. Creuser une fosse (ou faire un tas) à l'ombre.
2. Alterner des couches de déchets verts (feuilles, épluchures), de déchets secs (paille), de fumier et un peu de terre.
3. **Arroser** régulièrement et **retourner** le tas toutes les deux à trois semaines (aération).
4. Après deux à trois mois, on obtient un terreau sombre, sans odeur : le compost.
Les **décomposeurs** (bactéries, champignons, vers) transforment la matière organique.
⚠️ Ne pas y mettre de plastiques, de verre ou de piles.

## 4. Agir ensemble
Respecter les forêts classées et les parcs, planter des arbres lors des journées de reboisement, trier les déchets, sensibiliser la communauté.
`,
  summaryMd: r`
- Protéger : reboisement, agroforesterie, **courbes de niveau**, terrasses, haies, paillage, plantes de couverture, pare-feu.
- Améliorer : **jachère**, **rotation** avec légumineuses, **compost/fumier**, engrais NPK à bonne dose, **chaux** (sols acides).
- Compost : couches vertes/sèches + arrosage + retournement → 2-3 mois.
- Pas de plastique dans le compost.
`,
  questions: [
    { type: 'MCQ', prompt: r`Les cultures en courbes de niveau servent à :`, choices: ['freiner le ruissellement', 'accélérer l’érosion'], answer: { index: 0 }, explanation: r`Perpendiculaires à la pente.` },
    { type: 'MCQ', prompt: r`La jachère consiste à :`, choices: ['laisser la terre se reposer', 'brûler la parcelle'], answer: { index: 0 }, explanation: r`Reconstitution de l'humus.` },
    { type: 'MCQ', prompt: r`Un engrais organique est :`, choices: ['le compost', 'l’urée', 'le NPK'], answer: { index: 0 }, explanation: r`Matière organique décomposée.` },
    { type: 'MCQ', prompt: r`Pour corriger un sol trop acide, on apporte :`, choices: ['de la chaux', 'du sel', 'du sucre'], answer: { index: 0 }, explanation: r`Amendement calcaire.` },
    { type: 'MCQ', prompt: r`La rotation des cultures avec des légumineuses :`, choices: ['enrichit le sol en azote', 'appauvrit le sol'], answer: { index: 0 }, explanation: r`Nodosités.` },
    { type: 'MCQ', prompt: r`Le paillage consiste à :`, choices: ['couvrir le sol de résidus végétaux', 'labourer profondément'], answer: { index: 0 }, explanation: r`Protection et humidité.` },
    { type: 'MCQ', prompt: r`Un excès d'engrais minéraux peut :`, choices: ['polluer les eaux', 'améliorer indéfiniment les récoltes'], answer: { index: 0 }, explanation: r`Il faut la bonne dose.` },
    { type: 'MCQ', prompt: r`Les êtres vivants qui fabriquent le compost sont :`, choices: ['les décomposeurs', 'les oiseaux'], answer: { index: 0 }, explanation: r`Bactéries, champignons, vers.` },
    { type: 'MCQ', prompt: r`On retourne le tas de compost pour :`, choices: ['l’aérer', 'le refroidir définitivement'], answer: { index: 0 }, explanation: r`Les décomposeurs ont besoin d'air.` },
    { type: 'MCQ', prompt: r`L'agroforesterie associe :`, choices: ['arbres et cultures', 'plastiques et cultures'], answer: { index: 0 }, explanation: r`Cacao sous ombrage.` },
    { type: 'MCQ', prompt: r`Un pare-feu sert à :`, choices: ['arrêter la progression d’un feu de brousse', 'attirer la pluie'], answer: { index: 0 }, explanation: r`Bande sans végétation.` },
    { type: 'NUMERIC', prompt: r`Durée minimale approximative (en mois) pour obtenir du compost ?`, answer: { value: 2 }, explanation: r`Deux à trois mois.` },
    { type: 'MCQ', prompt: r`On ne doit pas mettre dans le compost :`, choices: ['des sachets plastiques', 'des épluchures'], answer: { index: 0 }, explanation: r`Non biodégradables.` },
    { type: 'MCQ', prompt: r`Les terrasses sont utiles :`, choices: ['sur les terrains en pente', 'sur les terrains plats seulement'], answer: { index: 0 }, explanation: r`Contre le ruissellement.` },
    { type: 'OPEN', prompt: r`Propose trois actions pour protéger les sols de ton village.`, answer: { model: 'Reboiser, lutter contre les feux de brousse, faire du compost, cultiver en courbes de niveau.', keywords: ['reboiser', 'feux', 'compost', 'courbes de niveau'] }, explanation: r`Actions concrètes.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Protection et amélioration des sols',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Pour chaque technique, **justifie** son effet (freiner l'eau, apporter de l'humus, de l'azote…).
2. Adapte tes propositions au problème posé (pente, sol acide, sol pauvre).`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. La chaux est utilisée pour corriger :`, type: 'MCQ', choices: ['les sols acides', 'les sols trop sableux'], answer: { index: 0 }, points: 2, correction: r`Amendement.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Les légumineuses apportent au sol :`, type: 'MCQ', choices: ['de l’azote', 'du mercure'], answer: { index: 0 }, points: 2, correction: r`Fixation de l'azote.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Le compost est obtenu grâce :`, type: 'MCQ', choices: ['aux décomposeurs', 'au soleil seul'], answer: { index: 0 }, points: 2, correction: r`Transformation biologique.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`M. Kouadio cultive du manioc sur un terrain en pente. Chaque saison des pluies, des ravines apparaissent et ses récoltes baissent. Il cultive le même champ depuis 10 ans sans repos.`, prompt: r`1. Identifie les deux problèmes de son champ.`, type: 'OPEN', answer: { model: 'Érosion hydrique ; appauvrissement du sol' }, points: 4, correction: r`Érosion hydrique (ravines) *(2 pts)* ; appauvrissement du sol (monoculture sans jachère) *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Propose deux techniques contre l'érosion et explique leur effet.`, type: 'OPEN', answer: { model: 'Courbes de niveau / terrasses ; haies, paillage' }, points: 5, correction: r`Deux techniques pertinentes (courbes de niveau, terrasses, haies, paillage, plantes de couverture) *(1 pt chacune)* avec explication de leur effet *(1,5 pt chacune)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Propose deux techniques pour restaurer la fertilité et explique-les.`, type: 'OPEN', answer: { model: 'Jachère ; rotation avec légumineuses ; compost' }, points: 5, correction: r`Deux techniques pertinentes (jachère, rotation avec légumineuses, compost, fumier, engrais à bonne dose) avec explication *(2,5 pts chacune)*.` },
    ],
  },
};
