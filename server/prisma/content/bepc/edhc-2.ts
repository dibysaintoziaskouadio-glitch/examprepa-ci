import { SeedChapter } from '../types';

const r = String.raw;
const REF = 'Programme d’EDHC 3e (DPFC) — progression 2026-2027';

const devoirEDHC = (title: string, items: SeedChapter['assessment']['items'], advice: string) => ({
  title: `Devoir BEPC — ${title}`,
  durationMin: 60,
  blocksNext: false,
  instructions: r`**Durée : 1 heure · Note sur 20.** Lis attentivement la situation, puis réponds par des phrases complètes.`,
  advice,
  items,
});

export const biensPublics: SeedChapter = {
  subject: 'EDHC',
  order: 8,
  title: 'La gestion des biens publics',
  minutes: 120,
  officialRef: `${REF}, compétence 3, leçon 8`,
  objectives: [
    'Identifier les biens publics',
    'Connaître les règles et les structures de bonne gestion',
    'Protéger les biens publics et dénoncer leur mauvaise gestion',
  ],
  courseMd: r`
> **Situation.** Au collège, des tables-bancs sont cassés, les robinets volés et les murs couverts de graffitis. Le principal rappelle que ces biens appartiennent à tous. Que sont les biens publics et comment les protéger ?

## 1. Définition
Les **biens publics** sont les biens qui appartiennent à l'**État**, aux **collectivités territoriales** (communes, régions) ou aux établissements publics, et qui sont mis au service de **tous** les citoyens.
**Exemples :** écoles et tables-bancs, hôpitaux, routes, ponts, lampadaires, bornes-fontaines, bâtiments administratifs, véhicules de l'administration, forêts classées, parcs, monuments, argent public (budget).

## 2. Pourquoi les protéger ?
Ils sont financés par les **impôts** de tous ; leur destruction ou leur détournement prive la population de services et oblige à dépenser à nouveau.

## 3. Les mauvaises pratiques
- **Vandalisme** : dégradation volontaire (casse, graffitis, vol de câbles, de couvercles d'égouts).
- **Détournement** de deniers publics, **corruption**, surfacturation, népotisme.
- Utilisation de biens publics à des fins **privées** (véhicule administratif pour des courses personnelles).
- Gaspillage (électricité, eau, fournitures).
Ces actes sont **punis par la loi** (amendes, réparation, prison).

## 4. La bonne gestion : règles et structures
**Principes :** transparence, redevabilité (rendre compte), intégrité, efficacité.
**Structures de contrôle :**
- la **Cour des comptes** (contrôle des finances publiques) ;
- l'**Inspection générale d'État** et les inspections des ministères ;
- la **Haute Autorité pour la Bonne Gouvernance (HABG)**, chargée de la lutte contre la corruption (déclaration de patrimoine des responsables) ;
- le **Parlement**, qui vote et contrôle le budget ;
- la justice, la presse, la société civile.

## 5. Le rôle du citoyen et de l'élève
Utiliser les biens publics avec **soin**, ne pas les dégrader, **économiser** l'eau et l'électricité, **signaler** les dégradations et la corruption, participer à l'entretien (journées de salubrité), sensibiliser ses camarades.
`,
  summaryMd: r`
- Biens publics : appartiennent à l'État et aux collectivités, servent à tous (écoles, hôpitaux, routes, argent public…).
- Menaces : vandalisme, détournement, corruption, usage privé, gaspillage → sanctions.
- Bonne gestion : transparence, redevabilité ; contrôles : **Cour des comptes**, Inspection générale d'État, **HABG**, Parlement.
- Citoyen : protéger, économiser, signaler.
`,
  questions: [
    { type: 'MCQ', prompt: r`Un bien public appartient :`, choices: ['à l’État ou aux collectivités', 'à une seule personne'], answer: { index: 0 }, explanation: r`Au service de tous.` },
    { type: 'MCQ', prompt: r`Un exemple de bien public :`, choices: ['une table-banc de l’école publique', 'le téléphone d’un élève'], answer: { index: 0 }, explanation: r`Propriété publique.` },
    { type: 'MCQ', prompt: r`Le vandalisme est :`, choices: ['la dégradation volontaire des biens', 'l’entretien des biens'], answer: { index: 0 }, explanation: r`Infraction.` },
    { type: 'MCQ', prompt: r`Utiliser un véhicule administratif pour ses courses personnelles est :`, choices: ['une mauvaise gestion', 'normal'], answer: { index: 0 }, explanation: r`Usage privé.` },
    { type: 'MCQ', prompt: r`La structure chargée de lutter contre la corruption est :`, choices: ['la HABG', 'la CEI'], answer: { index: 0 }, explanation: r`Haute Autorité pour la Bonne Gouvernance.` },
    { type: 'MCQ', prompt: r`La Cour des comptes contrôle :`, choices: ['les finances publiques', 'les notes des élèves'], answer: { index: 0 }, explanation: r`Juridiction financière.` },
    { type: 'MCQ', prompt: r`Les biens publics sont financés par :`, choices: ['les impôts', 'les pourboires'], answer: { index: 0 }, explanation: r`Argent de tous.` },
    { type: 'MCQ', prompt: r`Le détournement de deniers publics consiste à :`, choices: ['s’approprier l’argent public', 'économiser l’argent public'], answer: { index: 0 }, explanation: r`Crime économique.` },
    { type: 'MCQ', prompt: r`La redevabilité signifie :`, choices: ['rendre compte de sa gestion', 'refuser tout contrôle'], answer: { index: 0 }, explanation: r`Principe de bonne gouvernance.` },
    { type: 'MCQ', prompt: r`Laisser les robinets de l'école ouverts est :`, choices: ['du gaspillage', 'une bonne pratique'], answer: { index: 0 }, explanation: r`Coût pour la collectivité.` },
    { type: 'MCQ', prompt: r`Le Parlement contrôle les biens publics en :`, choices: ['votant et contrôlant le budget', 'organisant les examens'], answer: { index: 0 }, explanation: r`Rôle budgétaire.` },
    { type: 'MCQ', prompt: r`Voler les câbles électriques de l'éclairage public est :`, choices: ['puni par la loi', 'sans conséquence'], answer: { index: 0 }, explanation: r`Vandalisme et vol.` },
    { type: 'MCQ', prompt: r`Un élève qui voit un camarade casser une table doit :`, choices: ['le signaler et le dissuader', 'l’encourager'], answer: { index: 0 }, explanation: r`Responsabilité.` },
    { type: 'MCQ', prompt: r`La transparence, c'est :`, choices: ['rendre l’information accessible', 'cacher les dépenses'], answer: { index: 0 }, explanation: r`Bonne gouvernance.` },
    { type: 'OPEN', prompt: r`Propose trois actions pour protéger les biens de ton établissement.`, answer: { model: 'Ne pas dégrader, signaler, journées de salubrité, sensibiliser, économiser eau et électricité.', keywords: ['signaler', 'sensibiliser', 'économiser'] }, explanation: r`Actions concrètes.` },
  ],
  assessment: devoirEDHC(
    'La gestion des biens publics',
    [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Un pont est :`, type: 'MCQ', choices: ['un bien public', 'un bien privé'], answer: { index: 0 }, points: 2, correction: r`Infrastructure publique.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. La HABG lutte contre :`, type: 'MCQ', choices: ['la corruption', 'le paludisme'], answer: { index: 0 }, points: 2, correction: r`Bonne gouvernance.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Casser volontairement un lampadaire est :`, type: 'MCQ', choices: ['du vandalisme', 'du civisme'], answer: { index: 0 }, points: 2, correction: r`Dégradation.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`**Situation.** Après un match de football perdu, des élèves en colère cassent les tables-bancs et les vitres de leur salle de classe. Le lendemain, plusieurs classes doivent suivre les cours debout.`, prompt: r`1. Qualifie l'acte de ces élèves.`, type: 'OPEN', answer: { model: 'Vandalisme sur des biens publics' }, points: 3, correction: r`Vandalisme (destruction volontaire de biens publics).` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Quelles en sont les conséquences ?`, type: 'OPEN', answer: { model: 'Mauvaises conditions d’étude, dépenses de réparation, sanctions' }, points: 4, correction: r`Conditions d'étude dégradées *(1,5 pt)* ; dépenses publiques pour réparer *(1,5 pt)* ; sanctions pour les auteurs *(1 pt)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Pourquoi ces biens appartiennent-ils aussi à ces élèves ?`, type: 'OPEN', answer: { model: 'Ils sont financés par les impôts de tous, dont leurs parents, et servent à tous.' }, points: 3, correction: r`Ils sont financés par les impôts de tous (dont leurs parents) et sont à leur service.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Propose deux mesures pour éviter que cela se reproduise.`, type: 'OPEN', answer: { model: 'Sensibilisation, club civisme, sanctions, gestion de la colère par le dialogue' }, points: 4, correction: r`Deux mesures pertinentes (2 pts chacune).` },
    ],
    r`### 🎯 Conseils méthodologiques
1. Définis le **bien public** et montre qu'il est **financé par tous**.
2. Propose des solutions à la fois **éducatives** et **de contrôle**.`,
  ),
};

export const projetEntreprise: SeedChapter = {
  subject: 'EDHC',
  order: 9,
  title: 'Le projet d’entreprise',
  minutes: 120,
  officialRef: `${REF}, compétence 3, leçon 9`,
  objectives: [
    'Définir un projet d’entreprise et ses étapes',
    'Identifier les sources de financement et les structures d’accompagnement',
    'Élaborer un petit projet (activité génératrice de revenus)',
  ],
  courseMd: r`
> **Situation.** Le club entrepreneuriat d'un collège de Yamoussoukro veut produire et vendre du **jus de bissap** pendant la kermesse pour financer une sortie éducative. Comment monter ce projet ?

## 1. Définitions
- Une **entreprise** est une organisation qui produit des **biens** ou des **services** pour les vendre et réaliser un **bénéfice**.
- Un **projet d'entreprise** est l'ensemble des actions planifiées pour créer et faire fonctionner une entreprise.
- Une **activité génératrice de revenus (AGR)** est une petite activité qui rapporte de l'argent (couture, élevage de poulets, vente de jus…).
- L'**esprit d'entreprise** : avoir des idées, prendre des initiatives, oser, persévérer.

## 2. Les étapes du projet
1. **L'idée** : partir d'un **besoin** à satisfaire (les élèves ont soif à la kermesse).
2. **L'étude de marché** : qui sont les clients ? combien sont-ils prêts à payer ? qui sont les concurrents ?
3. **L'étude technique** : matières premières (fleurs de bissap, sucre, eau potable, gingembre), matériel, local, main-d'œuvre, **hygiène**.
4. **L'étude financière** :
   - **coût de production** (dépenses) ;
   - **prix de vente** ;
   - **chiffre d'affaires** = prix de vente × quantité vendue ;
   - **bénéfice** = chiffre d'affaires − coût total.
5. **Le plan d'affaires** (business plan) : document qui résume tout le projet, utile pour convaincre un financeur.
6. **La création officielle** (pour une vraie entreprise) : choix d'un statut (entreprise individuelle, SARL…), formalités au guichet unique (**CEPICI**), immatriculation.
7. **La mise en œuvre** et la **gestion** : tenir un cahier des recettes et dépenses, suivre les ventes, s'adapter.

**Exemple :** 100 bouteilles de bissap coûtent 15 000 FCFA à produire et sont vendues 250 FCFA chacune. Chiffre d'affaires : $100 \times 250 = 25\,000$ FCFA ; bénéfice : $25\,000 - 15\,000 = 10\,000$ FCFA.

## 3. Le financement
**Épargne personnelle**, aide de la famille, **tontine**, **microfinance**, banque (prêt), subventions et programmes publics d'appui à l'emploi des jeunes (par exemple l'**Agence Emploi Jeunes**), concours de projets.

## 4. Les qualités de l'entrepreneur
Créativité, sens de l'organisation, persévérance, honnêteté, respect des clients, goût du risque mesuré, travail en équipe.

## 5. Les difficultés
Manque de financement, concurrence, mauvaise gestion, mélange de l'argent de l'entreprise avec l'argent personnel. D'où l'importance de la formation et de l'accompagnement.
`,
  summaryMd: r`
- Projet d'entreprise : idée → étude de marché → étude technique → étude financière → plan d'affaires → création (CEPICI) → gestion.
- Chiffre d'affaires = prix × quantité ; **bénéfice = chiffre d'affaires − coûts**.
- Financement : épargne, famille, tontine, microfinance, banque, programmes d'appui (Agence Emploi Jeunes).
- Qualités : créativité, organisation, persévérance, honnêteté.
`,
  questions: [
    { type: 'MCQ', prompt: r`Une AGR est :`, choices: ['une activité génératrice de revenus', 'une association de gestion religieuse'], answer: { index: 0 }, explanation: r`Petite activité rentable.` },
    { type: 'MCQ', prompt: r`La première étape d'un projet d'entreprise est :`, choices: ['l’idée', 'la vente'], answer: { index: 0 }, explanation: r`Partir d'un besoin.` },
    { type: 'MCQ', prompt: r`L'étude de marché sert à connaître :`, choices: ['les clients et les concurrents', 'la météo'], answer: { index: 0 }, explanation: r`Demande et offre.` },
    { type: 'NUMERIC', prompt: r`100 bouteilles vendues 250 FCFA : chiffre d'affaires (FCFA) ?`, answer: { value: 25000 }, explanation: r`$100 \times 250$.` },
    { type: 'NUMERIC', prompt: r`Chiffre d'affaires 25 000 FCFA, coûts 15 000 FCFA : bénéfice (FCFA) ?`, answer: { value: 10000 }, explanation: r`Différence.` },
    { type: 'MCQ', prompt: r`Le bénéfice est :`, choices: ['chiffre d’affaires − coûts', 'coûts + chiffre d’affaires'], answer: { index: 0 }, explanation: r`Définition.` },
    { type: 'MCQ', prompt: r`Le plan d'affaires sert à :`, choices: ['présenter le projet pour convaincre un financeur', 'remplacer les clients'], answer: { index: 0 }, explanation: r`Business plan.` },
    { type: 'MCQ', prompt: r`La tontine est :`, choices: ['une forme d’épargne collective', 'un impôt'], answer: { index: 0 }, explanation: r`Financement traditionnel.` },
    { type: 'MCQ', prompt: r`Le CEPICI est :`, choices: ['le guichet unique de création d’entreprise', 'un hôpital'], answer: { index: 0 }, explanation: r`Formalités de création.` },
    { type: 'MCQ', prompt: r`Une qualité de l'entrepreneur :`, choices: ['la persévérance', 'la paresse'], answer: { index: 0 }, explanation: r`Ne pas abandonner.` },
    { type: 'MCQ', prompt: r`Mélanger l'argent de l'entreprise et l'argent personnel est :`, choices: ['une mauvaise gestion', 'une bonne pratique'], answer: { index: 0 }, explanation: r`Cause d'échec.` },
    { type: 'NUMERIC', prompt: r`Coût total 18 000 FCFA pour 120 sachets. Coût d'un sachet (FCFA) ?`, answer: { value: 150 }, explanation: r`$\frac{18\,000}{120}$.` },
    { type: 'MCQ', prompt: r`Pour un produit alimentaire, il faut absolument respecter :`, choices: ['l’hygiène', 'les couleurs à la mode'], answer: { index: 0 }, explanation: r`Santé des clients.` },
    { type: 'MCQ', prompt: r`La microfinance permet :`, choices: ['d’obtenir de petits crédits', 'de voter'], answer: { index: 0 }, explanation: r`Financement de proximité.` },
    { type: 'OPEN', prompt: r`Propose une idée d'AGR réalisable par des élèves et explique-la.`, answer: { model: 'Vente de jus locaux, recyclage de bouteilles, élevage de poulets, saisie de documents…', keywords: ['besoin', 'clients'] }, explanation: r`Partir d'un besoin réel.` },
  ],
  assessment: devoirEDHC(
    'Le projet d’entreprise',
    [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Le chiffre d'affaires est égal à :`, type: 'MCQ', choices: ['prix de vente × quantité vendue', 'coûts − ventes'], answer: { index: 0 }, points: 2, correction: r`Définition.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. L'étude de marché permet de connaître :`, type: 'MCQ', choices: ['les besoins des clients', 'le prix du carburant uniquement'], answer: { index: 0 }, points: 2, correction: r`Demande.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Une source de financement :`, type: 'MCQ', choices: ['la microfinance', 'le vandalisme'], answer: { index: 0 }, points: 2, correction: r`Crédit.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`**Situation.** Le club entrepreneuriat veut vendre du jus de bissap à la kermesse. Dépenses prévues : fleurs de bissap 4 000 F, sucre 6 000 F, gingembre et arômes 2 000 F, sachets et bouteilles 3 000 F. Ils prévoient de vendre 100 bouteilles à 250 F.`, prompt: r`1. Calcule le coût total de production (en FCFA).`, type: 'NUMERIC', answer: { value: 15000 }, points: 3, resultPoints: 1.5, correction: r`$4\,000 + 6\,000 + 2\,000 + 3\,000 = 15\,000$ FCFA.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Calcule le chiffre d'affaires prévu (en FCFA).`, type: 'NUMERIC', answer: { value: 25000 }, points: 3, resultPoints: 1.5, correction: r`$100 \times 250 = 25\,000$ FCFA.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Calcule le bénéfice prévu (en FCFA).`, type: 'NUMERIC', answer: { value: 10000 }, points: 3, resultPoints: 1.5, correction: r`$25\,000 - 15\,000 = 10\,000$ FCFA.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Donne deux précautions pour que le projet réussisse.`, type: 'OPEN', answer: { model: 'Hygiène, étude de marché, tenue des comptes, publicité' }, points: 5, correction: r`Deux précautions pertinentes et expliquées (2,5 pts chacune).` },
    ],
    r`### 🎯 Conseils méthodologiques
1. Pour les calculs : **coût total**, puis **chiffre d'affaires**, puis **bénéfice**.
2. Pense à l'**hygiène** et à la **gestion** (cahier des recettes et dépenses).`,
  ),
};

export const alliancesInterethniques: SeedChapter = {
  subject: 'EDHC',
  order: 10,
  title: 'Les alliances interethniques : les Mandé et les Gour',
  minutes: 120,
  officialRef: `${REF}, compétence 3, leçon 10`,
  objectives: [
    'Situer les grands groupes Mandé et Gour de Côte d’Ivoire',
    'Expliquer le principe et les règles des alliances interethniques (alliances à plaisanterie)',
    'Montrer leur rôle dans la cohésion sociale et la paix',
  ],
  courseMd: r`
> **Situation.** Au marché, deux commerçants issus de peuples différents se taquinent bruyamment : « Tu es mon esclave ! — Non, c'est toi ! » Puis ils éclatent de rire et s'entraident. Ils pratiquent une **alliance à plaisanterie**.

## 1. Les grands groupes ethniques de Côte d'Ivoire
La Côte d'Ivoire compte une soixantaine de peuples, regroupés en quatre grands ensembles : **Akan**, **Krou**, **Mandé** et **Gour** (ou Voltaïques).
- Les **Mandé** :
  - **Mandé du Nord** : Malinké, Dioula, Bambara… (Nord-Ouest : Odienné, Touba, Séguéla…) ;
  - **Mandé du Sud** : Dan (Yacouba), Toura, Gouro, Gagou, Mona, Ouan… (Ouest et Centre-Ouest).
- Les **Gour** (Voltaïques) : **Sénoufo** (et leurs sous-groupes comme les Tagbana, les Djimini…), Lobi, Koulango, Birifor… (Nord et Nord-Est : Korhogo, Ferkessédougou, Bouna…).

Ces peuples vivent depuis des siècles en contact (commerce, migrations, mariages).

## 2. Qu'est-ce qu'une alliance interethnique ?
C'est un **pacte** ancien, transmis par la tradition, qui lie deux peuples (ou deux clans, deux patronymes). Il est souvent né d'un événement historique : une aide reçue lors d'une guerre, une famine, un serment.
En pays mandé, on parle de **sanankouya** ; ailleurs, d'« alliance à plaisanterie » ou de « parenté à plaisanterie ».

## 3. Les règles de l'alliance
- **Droit à la plaisanterie** : les alliés peuvent se moquer gentiment l'un de l'autre sans que cela soit pris comme une offense.
- **Interdiction de verser le sang** de l'allié et de lui faire du mal.
- **Devoir d'entraide** et d'hospitalité.
- **Obligation de réconciliation** : un allié peut intervenir pour apaiser un conflit, et sa parole doit être écoutée.
- Dans certains cas, des interdits particuliers (par exemple sur le mariage entre alliés, selon les traditions).

## 4. Le rôle des alliances
- **Désamorcer les tensions** par l'humour.
- **Prévenir et régler les conflits** (rôle de médiateur).
- Renforcer la **cohésion sociale**, la **tolérance** et l'**unité nationale**.
- Valoriser le **patrimoine culturel** commun.

## 5. Limites et bon usage
La plaisanterie ne doit jamais devenir une **insulte**, une humiliation ou un prétexte au **tribalisme**. Elle se pratique entre personnes qui connaissent ces règles, dans le respect mutuel. Les alliances ne remplacent pas la loi, mais elles aident à vivre ensemble.

**Activité :** recense, avec tes parents ou les anciens de ton quartier, les alliances que pratique ta communauté.
`,
  summaryMd: r`
- Grands groupes : Akan, Krou, **Mandé** (Nord : Malinké, Dioula… ; Sud : Dan, Gouro, Gagou…), **Gour** (Sénoufo, Lobi, Koulango…).
- Alliance interethnique (sanankouya, alliance à plaisanterie) : pacte ancien entre peuples.
- Règles : plaisanterie sans offense, **interdiction de verser le sang** de l'allié, **entraide**, **réconciliation**.
- Rôles : prévenir les conflits, cohésion sociale, unité nationale.
- Limites : ne pas transformer la plaisanterie en insulte ou en tribalisme.
`,
  questions: [
    { type: 'MCQ', prompt: r`Les Sénoufo appartiennent au groupe :`, choices: ['Gour', 'Akan', 'Krou'], answer: { index: 0 }, explanation: r`Voltaïques.` },
    { type: 'MCQ', prompt: r`Les Malinké appartiennent au groupe :`, choices: ['Mandé du Nord', 'Gour'], answer: { index: 0 }, explanation: r`Nord-Ouest.` },
    { type: 'MCQ', prompt: r`Les Dan (Yacouba) appartiennent au groupe :`, choices: ['Mandé du Sud', 'Akan'], answer: { index: 0 }, explanation: r`Région de Man.` },
    { type: 'MCQ', prompt: r`Les Lobi appartiennent au groupe :`, choices: ['Gour', 'Mandé'], answer: { index: 0 }, explanation: r`Nord-Est.` },
    { type: 'NUMERIC', prompt: r`Combien de grands groupes ethniques compte-t-on en Côte d'Ivoire ?`, answer: { value: 4 }, explanation: r`Akan, Krou, Mandé, Gour.` },
    { type: 'MCQ', prompt: r`En pays mandé, l'alliance à plaisanterie s'appelle :`, choices: ['sanankouya', 'tontine'], answer: { index: 0 }, explanation: r`Terme mandingue.` },
    { type: 'MCQ', prompt: r`Une règle de l'alliance est :`, choices: ['l’interdiction de verser le sang de l’allié', 'l’obligation de se battre'], answer: { index: 0 }, explanation: r`Pacte de paix.` },
    { type: 'MCQ', prompt: r`Les plaisanteries entre alliés :`, choices: ['ne doivent pas être prises comme des offenses', 'sont des déclarations de guerre'], answer: { index: 0 }, explanation: r`Droit à la plaisanterie.` },
    { type: 'MCQ', prompt: r`Les alliances favorisent :`, choices: ['la cohésion sociale', 'le tribalisme'], answer: { index: 0 }, explanation: r`Rôle social.` },
    { type: 'MCQ', prompt: r`Un allié peut intervenir dans un conflit comme :`, choices: ['médiateur', 'combattant'], answer: { index: 0 }, explanation: r`Obligation de réconciliation.` },
    { type: 'MCQ', prompt: r`Les alliances sont transmises par :`, choices: ['la tradition orale', 'le Journal officiel'], answer: { index: 0 }, explanation: r`Patrimoine culturel.` },
    { type: 'MCQ', prompt: r`Korhogo est surtout peuplée de :`, choices: ['Sénoufo', 'Gouro'], answer: { index: 0 }, explanation: r`Pays sénoufo.` },
    { type: 'MCQ', prompt: r`La plaisanterie devient condamnable quand elle :`, choices: ['humilie ou insulte', 'fait rire les deux alliés'], answer: { index: 0 }, explanation: r`Limite.` },
    { type: 'MCQ', prompt: r`Les alliances interethniques remplacent-elles la loi ?`, choices: ['Non', 'Oui'], answer: { index: 0 }, explanation: r`Elles la complètent pour vivre ensemble.` },
    { type: 'OPEN', prompt: r`Explique comment les alliances interethniques contribuent à la paix.`, answer: { model: 'Elles interdisent la violence entre alliés, désamorcent les tensions par l’humour et permettent la médiation.', keywords: ['violence', 'humour', 'médiation'] }, explanation: r`Mécanisme traditionnel de paix.` },
  ],
  assessment: devoirEDHC(
    'Les alliances interethniques',
    [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Les Gouro appartiennent au groupe :`, type: 'MCQ', choices: ['Mandé du Sud', 'Gour'], answer: { index: 0 }, points: 2, correction: r`Centre-Ouest.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Une alliance interethnique impose :`, type: 'MCQ', choices: ['l’entraide', 'la vengeance'], answer: { index: 0 }, points: 2, correction: r`Devoir d'entraide.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Les Koulango appartiennent au groupe :`, type: 'MCQ', choices: ['Gour', 'Krou'], answer: { index: 0 }, points: 2, correction: r`Nord-Est.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`**Situation.** Lors d'un match inter-quartiers, une bagarre éclate entre des jeunes de deux communautés. Un vieux sage, allié traditionnel de l'une des deux communautés, s'avance en plaisantant ; les jeunes se calment et acceptent de discuter.`, prompt: r`1. Quel mécanisme traditionnel le vieux sage utilise-t-il ?`, type: 'OPEN', answer: { model: 'L’alliance interethnique (alliance à plaisanterie)' }, points: 3, correction: r`L'alliance interethnique / alliance à plaisanterie.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Pourquoi les jeunes l'écoutent-ils ?`, type: 'OPEN', answer: { model: 'L’allié a le droit de plaisanter et le devoir de réconcilier ; sa parole est respectée.' }, points: 4, correction: r`Selon l'alliance, l'allié peut plaisanter sans offenser *(2 pts)* et a un rôle reconnu de médiateur *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Cite deux règles des alliances interethniques.`, type: 'OPEN', answer: { model: 'Interdiction de verser le sang, entraide, plaisanterie sans offense, réconciliation' }, points: 4, correction: r`Deux règles exactes (2 pts chacune).` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Montre l'importance de ces alliances pour la Côte d'Ivoire.`, type: 'OPEN', answer: { model: 'Cohésion sociale, paix, unité nationale' }, points: 3, correction: r`Elles renforcent la cohésion sociale, préviennent les conflits et favorisent l'unité nationale *(3 pts)*.` },
    ],
    r`### 🎯 Conseils méthodologiques
1. Situe correctement les peuples dans leur **groupe**.
2. Explique les **règles** et le **rôle** des alliances avec des exemples.`,
  ),
};

export const maladiesEndemiques: SeedChapter = {
  subject: 'EDHC',
  order: 11,
  title: 'Les maladies endémiques, l’automédication et les centres de santé',
  minutes: 120,
  officialRef: `${REF}, compétence 4, leçon 11`,
  objectives: [
    'Identifier les principales maladies endémiques et leurs moyens de prévention',
    'Connaître les dangers de l’automédication',
    'Connaître les structures de santé et la couverture maladie',
  ],
  courseMd: r`
> **Situation.** Koné a de la fièvre. Au lieu d'aller au centre de santé, sa tante lui achète des comprimés au bord de la route. Deux jours plus tard, son état s'aggrave. Qu'aurait-il fallu faire ?

## 1. Les maladies endémiques
Une **maladie endémique** est une maladie présente **en permanence** dans une région. En Côte d'Ivoire :
| Maladie | Agent / transmission | Prévention |
|---|---|---|
| **Paludisme** (première cause de consultation) | parasite *Plasmodium* transmis par la piqûre du moustique **anophèle femelle** | **moustiquaire imprégnée**, assainissement (eaux stagnantes), traitement rapide |
| **Tuberculose** | bacille, transmis par la toux | vaccin BCG, dépistage, traitement complet |
| **VIH/sida** | virus ; voies sexuelle, sanguine, mère-enfant | prévention, dépistage |
| **Hépatite B** | virus ; sang, voie sexuelle, mère-enfant | **vaccination** |
| **Ulcère de Buruli** | bactérie, lié aux milieux humides | consultation précoce |
| **Bilharziose** | ver ; eaux douces stagnantes | éviter de se baigner dans les eaux suspectes |
| **Maladie du sommeil** (trypanosomiase) | mouche **tsé-tsé** | lutte contre les mouches, dépistage |
| **Onchocercose** (« cécité des rivières ») | ver transmis par la **simulie** | traitement de masse |

## 2. L'automédication et ses dangers
L'**automédication**, c'est prendre des médicaments **sans avis médical**. Elle est dangereuse :
- erreur de **diagnostic** (une fièvre peut avoir plusieurs causes) ;
- **mauvaise dose**, intoxications, effets secondaires ;
- **résistance** des microbes aux médicaments ;
- médicaments de la rue (« pharmacie par terre ») souvent **périmés** ou **contrefaits**, mal conservés au soleil.

## 3. Les structures de santé
- **Établissements sanitaires de premier contact** : centres de santé ruraux et urbains, dispensaires, maternités.
- **Hôpitaux généraux** et **centres hospitaliers régionaux (CHR)**.
- **Centres hospitaliers universitaires (CHU)** pour les cas graves (Treichville, Cocody, Yopougon, Bouaké, Angré).
- **Pharmacies** agréées ; agents de santé communautaires.
- **Couverture maladie universelle (CMU)** : système d'assurance maladie pour réduire le coût des soins.
- Programmes de **vaccination** gratuite des enfants.

## 4. Le bon réflexe
Consulter rapidement un agent de santé, faire les **examens** (test de diagnostic rapide du paludisme), suivre le traitement **prescrit jusqu'au bout**, acheter les médicaments en **pharmacie**, se faire vacciner.

Réponse à la situation : Koné devait aller au **centre de santé** pour un diagnostic et un traitement adapté.
`,
  summaryMd: r`
- Maladie endémique : présente en permanence dans une région.
- Paludisme (anophèle femelle → moustiquaire imprégnée), tuberculose, VIH, hépatite B (vaccin), ulcère de Buruli, bilharziose, maladie du sommeil (tsé-tsé), onchocercose (simulie).
- Automédication : erreur de diagnostic, mauvaises doses, résistances, faux médicaments.
- Structures : centres de santé, hôpitaux généraux, CHR, **CHU** ; pharmacies ; **CMU** ; vaccination.
- Réflexe : consulter, faire les examens, suivre le traitement jusqu'au bout.
`,
  questions: [
    { type: 'MCQ', prompt: r`Le paludisme est transmis par :`, choices: ['l’anophèle femelle', 'la mouche domestique'], answer: { index: 0 }, explanation: r`Moustique vecteur.` },
    { type: 'MCQ', prompt: r`Le meilleur moyen de se protéger du paludisme la nuit :`, choices: ['dormir sous une moustiquaire imprégnée', 'boire de l’eau froide'], answer: { index: 0 }, explanation: r`Prévention.` },
    { type: 'MCQ', prompt: r`Une maladie endémique est :`, choices: ['présente en permanence dans une région', 'une maladie rare'], answer: { index: 0 }, explanation: r`Définition.` },
    { type: 'MCQ', prompt: r`La maladie du sommeil est transmise par :`, choices: ['la mouche tsé-tsé', 'le moustique'], answer: { index: 0 }, explanation: r`Trypanosomiase.` },
    { type: 'MCQ', prompt: r`L'automédication est :`, choices: ['la prise de médicaments sans avis médical', 'une vaccination'], answer: { index: 0 }, explanation: r`Pratique dangereuse.` },
    { type: 'MCQ', prompt: r`Un danger des médicaments de la rue :`, choices: ['ils peuvent être contrefaits ou périmés', 'ils sont toujours meilleurs'], answer: { index: 0 }, explanation: r`Mauvaise qualité.` },
    { type: 'MCQ', prompt: r`L'hépatite B peut être prévenue par :`, choices: ['la vaccination', 'les antibiotiques'], answer: { index: 0 }, explanation: r`Vaccin efficace.` },
    { type: 'MCQ', prompt: r`La bilharziose s'attrape surtout :`, choices: ['en se baignant dans des eaux douces stagnantes', 'en mangeant du riz'], answer: { index: 0 }, explanation: r`Ver parasite.` },
    { type: 'MCQ', prompt: r`La CMU est :`, choices: ['la couverture maladie universelle', 'une maladie'], answer: { index: 0 }, explanation: r`Assurance maladie.` },
    { type: 'MCQ', prompt: r`Les cas graves sont pris en charge dans :`, choices: ['les CHU', 'les marchés'], answer: { index: 0 }, explanation: r`Centres hospitaliers universitaires.` },
    { type: 'MCQ', prompt: r`Arrêter un traitement avant la fin peut provoquer :`, choices: ['une résistance des microbes', 'une guérison plus rapide'], answer: { index: 0 }, explanation: r`Suivre la prescription.` },
    { type: 'MCQ', prompt: r`La tuberculose se transmet surtout par :`, choices: ['la toux', 'la poignée de main'], answer: { index: 0 }, explanation: r`Voie aérienne.` },
    { type: 'MCQ', prompt: r`L'onchocercose peut provoquer :`, choices: ['la cécité', 'la surdité'], answer: { index: 0 }, explanation: r`« Cécité des rivières ».` },
    { type: 'MCQ', prompt: r`Pour diagnostiquer le paludisme, on fait :`, choices: ['un test de diagnostic rapide', 'une radiographie du pied'], answer: { index: 0 }, explanation: r`TDR.` },
    { type: 'OPEN', prompt: r`Cite trois dangers de l'automédication.`, answer: { model: 'Erreur de diagnostic, mauvaise dose, intoxication, résistance, faux médicaments.', keywords: ['diagnostic', 'dose', 'résistance'] }, explanation: r`Risques pour la santé.` },
  ],
  assessment: devoirEDHC(
    'Maladies endémiques, automédication et centres de santé',
    [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. La première cause de consultation en Côte d'Ivoire est :`, type: 'MCQ', choices: ['le paludisme', 'la grippe'], answer: { index: 0 }, points: 2, correction: r`Maladie endémique.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. L'automédication est :`, type: 'MCQ', choices: ['dangereuse', 'recommandée'], answer: { index: 0 }, points: 2, correction: r`Sans avis médical.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. On achète les médicaments :`, type: 'MCQ', choices: ['en pharmacie', 'au bord de la route'], answer: { index: 0 }, points: 2, correction: r`Médicaments contrôlés.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`**Situation.** Koné, 15 ans, a de la fièvre et des maux de tête. Sa tante lui achète des comprimés au bord de la route. Deux jours plus tard, il vomit et son état s'aggrave.`, prompt: r`1. Comment appelle-t-on la pratique de la tante ?`, type: 'OPEN', answer: { model: 'Automédication' }, points: 3, correction: r`L'automédication.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Quels dangers cette pratique présente-t-elle ?`, type: 'OPEN', answer: { model: 'Erreur de diagnostic, médicament inadapté ou contrefait, aggravation' }, points: 4, correction: r`Erreur de diagnostic *(1,5 pt)*, médicament inadapté, périmé ou contrefait *(1,5 pt)*, aggravation de la maladie *(1 pt)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. De quelle maladie endémique Koné pourrait-il souffrir ? Comment la confirmer ?`, type: 'OPEN', answer: { model: 'Paludisme ; test de diagnostic rapide au centre de santé' }, points: 4, correction: r`Paludisme possible *(2 pts)* ; confirmation par un test (TDR) au centre de santé *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Donne deux conseils pour éviter cette maladie.`, type: 'OPEN', answer: { model: 'Moustiquaire imprégnée, supprimer les eaux stagnantes' }, points: 3, correction: r`Moustiquaire imprégnée, assainissement (eaux stagnantes, herbes) (1,5 pt chacun).` },
    ],
    r`### 🎯 Conseils méthodologiques
1. Associe chaque maladie à son **mode de transmission** et à sa **prévention**.
2. Recommande toujours la **consultation** dans une structure de santé.`,
  ),
};

export const depistageVIH: SeedChapter = {
  subject: 'EDHC',
  order: 12,
  title: 'Le test de dépistage du VIH',
  minutes: 120,
  officialRef: `${REF}, compétence 4, leçon 12`,
  objectives: [
    'Expliquer l’importance du dépistage du VIH',
    'Décrire le déroulement et les principes du test',
    'Adopter une attitude responsable face au résultat',
  ],
  courseMd: r`
> **Situation.** Après une causerie du club santé, Adama se demande s'il doit faire le test du VIH. Il a peur du résultat et du regard des autres.

## 1. Pourquoi se faire dépister ?
- Une personne peut vivre avec le VIH pendant des années **sans aucun signe** : seul le **test** permet de connaître son **statut sérologique**.
- Connaître son statut permet de :
  - commencer **tôt** un traitement **antirétroviral (ARV)** si le résultat est positif, et vivre longtemps en bonne santé ;
  - **protéger** son ou sa partenaire et, pour une femme enceinte, son **bébé** (PTME) ;
  - si le résultat est négatif, **rester négatif** en adoptant des comportements sûrs.

## 2. Les principes du dépistage
- **Volontaire** : on ne peut pas forcer une personne à se faire dépister (sauf cas prévus par la loi, comme le don de sang, où le sang est testé).
- **Confidentiel** : le résultat est **secret** ; il n'est communiqué qu'à la personne concernée.
- **Gratuit** dans de nombreuses structures publiques.
- Accompagné de **conseils** avant et après le test.

## 3. Où et comment ?
- **Lieux** : centres de dépistage volontaire, centres de santé, hôpitaux, centres de santé scolaire et universitaire, ONG, campagnes mobiles.
- **Déroulement** :
  1. **conseil pré-test** : informations sur le VIH, le test, ses implications ;
  2. **prélèvement** (quelques gouttes de sang au bout du doigt) ;
  3. **résultat** en quelques minutes (test rapide), confirmé si nécessaire ;
  4. **conseil post-test** et orientation.
- **Fenêtre sérologique** : après une exposition au risque, le test peut rester négatif pendant quelques semaines ; il faut alors **refaire le test** selon les conseils du personnel de santé.

## 4. Le résultat
- **Séronégatif** : pas d'infection détectée → continuer à se protéger.
- **Séropositif** : la personne vit avec le VIH → elle est orientée vers une prise en charge ; en Côte d'Ivoire, les **ARV** sont délivrés **gratuitement** ; avec un traitement bien suivi, la charge virale devient indétectable.

## 5. Attitude responsable
Faire le test, encourager ses proches, respecter la **confidentialité**, **soutenir** les personnes vivant avec le VIH et refuser toute **stigmatisation** ou discrimination (à l'école, au travail).
`,
  summaryMd: r`
- Le test est le **seul moyen** de connaître son statut sérologique.
- Principes : **volontaire**, **confidentiel**, souvent **gratuit**, avec conseil pré-test et post-test.
- Lieux : centres de dépistage, centres de santé, hôpitaux, santé scolaire, ONG.
- Fenêtre sérologique : refaire le test si l'exposition est récente.
- Séropositif → ARV gratuits, vie normale ; séronégatif → rester prudent.
- Non à la stigmatisation.
`,
  questions: [
    { type: 'MCQ', prompt: r`Le seul moyen de savoir si on vit avec le VIH est :`, choices: ['le test de dépistage', 'l’apparence physique'], answer: { index: 0 }, explanation: r`Pas de signes visibles pendant des années.` },
    { type: 'MCQ', prompt: r`Le dépistage du VIH est :`, choices: ['volontaire et confidentiel', 'obligatoire et public'], answer: { index: 0 }, explanation: r`Principes.` },
    { type: 'MCQ', prompt: r`Le conseil pré-test a lieu :`, choices: ['avant le prélèvement', 'un an après'], answer: { index: 0 }, explanation: r`Information.` },
    { type: 'MCQ', prompt: r`Un résultat séronégatif signifie :`, choices: ['pas d’infection détectée', 'la personne est malade du sida'], answer: { index: 0 }, explanation: r`Statut négatif.` },
    { type: 'MCQ', prompt: r`Un résultat séropositif signifie :`, choices: ['la personne vit avec le VIH', 'la personne est guérie'], answer: { index: 0 }, explanation: r`Infection présente.` },
    { type: 'MCQ', prompt: r`En Côte d'Ivoire, les ARV sont :`, choices: ['délivrés gratuitement', 'interdits'], answer: { index: 0 }, explanation: r`Prise en charge publique.` },
    { type: 'MCQ', prompt: r`La fenêtre sérologique est :`, choices: ['la période où le test peut rester négatif après une contamination', 'le guichet du laboratoire'], answer: { index: 0 }, explanation: r`D'où l'intérêt de refaire le test.` },
    { type: 'MCQ', prompt: r`Le résultat du test peut être communiqué :`, choices: ['uniquement à la personne testée', 'à toute la classe'], answer: { index: 0 }, explanation: r`Confidentialité.` },
    { type: 'MCQ', prompt: r`Une femme enceinte dépistée positive peut :`, choices: ['protéger son bébé grâce à la PTME', 'rien faire'], answer: { index: 0 }, explanation: r`Prévention de la transmission mère-enfant.` },
    { type: 'MCQ', prompt: r`Le test rapide donne un résultat en :`, choices: ['quelques minutes', 'plusieurs années'], answer: { index: 0 }, explanation: r`Test rapide.` },
    { type: 'MCQ', prompt: r`Exclure un camarade séropositif de la classe est :`, choices: ['une discrimination', 'une protection'], answer: { index: 0 }, explanation: r`Stigmatisation.` },
    { type: 'MCQ', prompt: r`Le conseil post-test sert à :`, choices: ['expliquer le résultat et orienter', 'vendre des médicaments'], answer: { index: 0 }, explanation: r`Accompagnement.` },
    { type: 'MCQ', prompt: r`Avec un traitement bien suivi, la charge virale peut devenir :`, choices: ['indétectable', 'infinie'], answer: { index: 0 }, explanation: r`Efficacité des ARV.` },
    { type: 'MCQ', prompt: r`Un lieu de dépistage :`, choices: ['un centre de santé', 'un stade de football uniquement'], answer: { index: 0 }, explanation: r`Et centres de dépistage volontaire.` },
    { type: 'OPEN', prompt: r`Donne deux raisons de se faire dépister.`, answer: { model: 'Connaître son statut, se soigner tôt, protéger son partenaire, protéger son bébé.', keywords: ['statut', 'traitement', 'protéger'] }, explanation: r`Intérêt du dépistage.` },
  ],
  assessment: devoirEDHC(
    'Le test de dépistage du VIH',
    [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Le test de dépistage est :`, type: 'MCQ', choices: ['confidentiel', 'public'], answer: { index: 0 }, points: 2, correction: r`Résultat secret.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Une personne qui paraît en bonne santé peut-elle vivre avec le VIH ?`, type: 'MCQ', choices: ['Oui', 'Non'], answer: { index: 0 }, points: 2, correction: r`Phase sans symptômes.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Les ARV permettent :`, type: 'MCQ', choices: ['de contrôler le virus', 'de guérir définitivement'], answer: { index: 0 }, points: 2, correction: r`Traitement.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`**Situation.** Adama veut faire le test du VIH mais il a peur : « Si je suis positif, tout le monde le saura et on va me rejeter. »`, prompt: r`1. Rassure Adama sur la confidentialité du test.`, type: 'OPEN', answer: { model: 'Le résultat est secret, communiqué seulement à lui.' }, points: 3, correction: r`Le test est confidentiel : seul Adama connaîtra son résultat *(3 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Explique-lui les étapes du dépistage.`, type: 'OPEN', answer: { model: 'Conseil pré-test, prélèvement, résultat, conseil post-test' }, points: 4, correction: r`Conseil pré-test, prélèvement, résultat, conseil post-test (1 pt chacune).` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Quels avantages a-t-il à connaître son statut ?`, type: 'OPEN', answer: { model: 'Se soigner tôt (ARV gratuits), protéger les autres, rester négatif' }, points: 4, correction: r`Traitement précoce et gratuit *(2 pts)* ; protection des autres / prévention *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Quelle attitude ses camarades doivent-ils avoir envers les personnes vivant avec le VIH ?`, type: 'OPEN', answer: { model: 'Soutien, respect, refus de la stigmatisation' }, points: 3, correction: r`Respect, soutien, refus de toute stigmatisation *(3 pts)*.` },
    ],
    r`### 🎯 Conseils méthodologiques
1. Retiens les **principes** : volontaire, confidentiel, gratuit, avec conseil.
2. Montre les **avantages** du dépistage pour soi et pour les autres.`,
  ),
};

export const parcsReserves: SeedChapter = {
  subject: 'EDHC',
  order: 13,
  title: 'Les parcs nationaux et les réserves forestières',
  minutes: 120,
  officialRef: `${REF}, compétence 5, leçon 13`,
  objectives: [
    'Identifier les parcs nationaux et réserves de Côte d’Ivoire',
    'Expliquer leur importance et les menaces qui pèsent sur eux',
    'Connaître les structures de gestion et adopter des gestes de protection',
  ],
  courseMd: r`
> **Situation.** Le parc national de Taï abrite des chimpanzés et des hippopotames pygmées. Pourtant, des plantations illégales et des orpailleurs y pénètrent. Pourquoi faut-il protéger ces espaces ?

## 1. Définitions
- Un **parc national** est un vaste espace naturel protégé par l'État pour conserver la faune, la flore et les paysages ; on peut y pratiquer, de façon encadrée, l'écotourisme et la recherche.
- Une **réserve** est un espace protégé où certaines activités sont interdites ou limitées (réserve naturelle, réserve intégrale, réserve scientifique).
- Une **forêt classée** est une forêt appartenant au domaine de l'État, soumise à des règles d'exploitation.

## 2. Quelques aires protégées de Côte d'Ivoire
| Aire protégée | Localisation | Particularités |
|---|---|---|
| **Parc national de Taï** | Sud-Ouest | forêt dense primaire, chimpanzés, hippopotame pygmée ; **patrimoine mondial de l'UNESCO** (1982) |
| **Parc national de la Comoé** | Nord-Est | plus grand parc du pays, savanes et forêts-galeries ; **patrimoine mondial** (1983) |
| **Réserve naturelle intégrale du mont Nimba** | Ouest (frontière guinéenne) | montagnes, espèces rares ; **patrimoine mondial** |
| **Parc national du Banco** | Abidjan | forêt au cœur de la ville |
| **Parc national d'Azagny** | littoral, Grand-Lahou | mangroves, éléphants, oiseaux |
| Parcs de la **Marahoué**, du **mont Péko**, du **mont Sangbé**, des **îles Ehotilé** | Centre-Ouest, Ouest, lagune Aby | biodiversité, sites culturels |

## 3. Leur importance
- **Biodiversité** : conservation d'espèces animales et végétales, dont certaines menacées.
- **Climat** : les forêts régulent les pluies, absorbent le dioxyde de carbone.
- **Eau et sols** : protection des sources et des cours d'eau, lutte contre l'érosion.
- **Économie** : écotourisme, recherche scientifique, plantes médicinales.
- **Culture** : sites sacrés et patrimoine.

## 4. Les menaces
**Braconnage**, **infiltrations agricoles** (cacao, hévéa), **orpaillage clandestin**, **exploitation illégale du bois**, **feux de brousse**, urbanisation.

## 5. La gestion et la protection
- L'**Office ivoirien des parcs et réserves (OIPR)**, créé en **2002**, gère les parcs nationaux et réserves.
- La **SODEFOR** gère les forêts classées.
- Lois sur la faune et la forêt (code forestier) ; agents de surveillance.
- **Gestes citoyens** : ne pas acheter de viande de brousse issue d'espèces protégées, ne pas allumer de feux, participer au **reboisement**, signaler les infractions, sensibiliser.
`,
  summaryMd: r`
- Parc national, réserve, forêt classée : espaces protégés.
- Taï (UNESCO 1982), **Comoé** (UNESCO 1983, plus grand parc), **mont Nimba** (patrimoine mondial), Banco (Abidjan), Azagny, Marahoué, mont Péko, mont Sangbé, îles Ehotilé.
- Importance : biodiversité, climat, eau, économie (écotourisme), culture.
- Menaces : braconnage, infiltrations agricoles, orpaillage, bois illégal, feux.
- Gestion : **OIPR** (2002), **SODEFOR** (forêts classées) ; reboisement et vigilance citoyenne.
`,
  questions: [
    { type: 'MCQ', prompt: r`Le parc national de Taï se trouve :`, choices: ['dans le Sud-Ouest', 'dans le Nord-Est'], answer: { index: 0 }, explanation: r`Forêt dense.` },
    { type: 'MCQ', prompt: r`Le plus grand parc national de Côte d'Ivoire est :`, choices: ['la Comoé', 'le Banco'], answer: { index: 0 }, explanation: r`Nord-Est.` },
    { type: 'MCQ', prompt: r`Le parc du Banco est situé :`, choices: ['à Abidjan', 'à Korhogo'], answer: { index: 0 }, explanation: r`Forêt urbaine.` },
    { type: 'MCQ', prompt: r`L'OIPR gère :`, choices: ['les parcs nationaux et réserves', 'les impôts'], answer: { index: 0 }, explanation: r`Office ivoirien des parcs et réserves.` },
    { type: 'NUMERIC', prompt: r`En quelle année l'OIPR a-t-il été créé ?`, answer: { value: 2002 }, explanation: r`Loi de 2002.` },
    { type: 'MCQ', prompt: r`Les forêts classées sont gérées par :`, choices: ['la SODEFOR', 'la CEI'], answer: { index: 0 }, explanation: r`Société de développement des forêts.` },
    { type: 'MCQ', prompt: r`Le parc de Taï est inscrit au patrimoine mondial de :`, choices: ['l’UNESCO', 'la FIFA'], answer: { index: 0 }, explanation: r`Depuis 1982.` },
    { type: 'MCQ', prompt: r`Le braconnage est :`, choices: ['la chasse illégale', 'la culture du cacao'], answer: { index: 0 }, explanation: r`Menace pour la faune.` },
    { type: 'MCQ', prompt: r`L'hippopotame pygmée vit notamment :`, choices: ['dans le parc de Taï', 'dans le désert'], answer: { index: 0 }, explanation: r`Espèce rare.` },
    { type: 'MCQ', prompt: r`Les forêts aident à lutter contre le changement climatique car elles :`, choices: ['absorbent le dioxyde de carbone', 'produisent du pétrole'], answer: { index: 0 }, explanation: r`Puits de carbone.` },
    { type: 'MCQ', prompt: r`L'écotourisme est :`, choices: ['un tourisme respectueux de la nature', 'la chasse sportive'], answer: { index: 0 }, explanation: r`Source de revenus.` },
    { type: 'MCQ', prompt: r`Le mont Nimba se trouve :`, choices: ['à l’Ouest, à la frontière guinéenne', 'sur le littoral'], answer: { index: 0 }, explanation: r`Réserve intégrale.` },
    { type: 'MCQ', prompt: r`Une infiltration agricole dans un parc consiste à :`, choices: ['y créer illégalement des plantations', 'y planter des arbres autorisés'], answer: { index: 0 }, explanation: r`Menace majeure.` },
    { type: 'MCQ', prompt: r`Les îles Ehotilé se trouvent dans :`, choices: ['la lagune Aby', 'le lac de Kossou'], answer: { index: 0 }, explanation: r`Sud-Est.` },
    { type: 'OPEN', prompt: r`Propose deux gestes citoyens pour protéger les parcs et réserves.`, answer: { model: 'Ne pas acheter de viande de brousse protégée, ne pas allumer de feux, reboiser, signaler les infractions.', keywords: ['feux', 'reboiser', 'signaler'] }, explanation: r`Engagement citoyen.` },
  ],
  assessment: devoirEDHC(
    'Les parcs nationaux et les réserves forestières',
    [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Le parc de la Comoé est situé :`, type: 'MCQ', choices: ['au Nord-Est', 'au Sud-Ouest'], answer: { index: 0 }, points: 2, correction: r`Plus grand parc du pays.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. L'organisme qui gère les parcs nationaux :`, type: 'MCQ', choices: ['l’OIPR', 'la SODECI'], answer: { index: 0 }, points: 2, correction: r`Créé en 2002.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Une menace pour les parcs :`, type: 'MCQ', choices: ['l’orpaillage clandestin', 'l’écotourisme encadré'], answer: { index: 0 }, points: 2, correction: r`Destruction et pollution.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`**Situation.** Des agents de l'OIPR découvrent, dans un parc national, des plantations de cacao illégales, des pièges à animaux et des trous creusés par des orpailleurs.`, prompt: r`1. Identifie les menaces qui pèsent sur ce parc.`, type: 'OPEN', answer: { model: 'Infiltration agricole, braconnage, orpaillage clandestin' }, points: 3, correction: r`Infiltration agricole, braconnage, orpaillage clandestin (1 pt chacune).` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Quelles conséquences ces activités ont-elles ?`, type: 'OPEN', answer: { model: 'Perte de biodiversité, déforestation, pollution des eaux' }, points: 4, correction: r`Disparition d'espèces, déforestation, pollution des eaux et des sols (≈ 1,5 pt par idée).` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Pourquoi est-il important de protéger les parcs nationaux ?`, type: 'OPEN', answer: { model: 'Biodiversité, climat, eau, écotourisme, patrimoine' }, points: 4, correction: r`Quatre raisons parmi : biodiversité, climat, eau, économie, patrimoine (1 pt chacune).` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Que peuvent faire les populations riveraines ?`, type: 'OPEN', answer: { model: 'Respecter les limites, signaler, participer à la surveillance et au reboisement' }, points: 3, correction: r`Respecter les limites du parc, signaler les infractions, participer au reboisement et à la sensibilisation *(3 pts)*.` },
    ],
    r`### 🎯 Conseils méthodologiques
1. Cite des **exemples précis** d'aires protégées ivoiriennes.
2. Relie **menaces → conséquences → solutions**.`,
  ),
};

export const gestionEau: SeedChapter = {
  subject: 'EDHC',
  order: 14,
  title: 'La gestion de l’eau',
  minutes: 120,
  officialRef: `${REF}, compétence 5, leçon 14`,
  objectives: [
    'Identifier les ressources en eau et leurs usages',
    'Connaître les acteurs de la gestion de l’eau et les règles d’hygiène',
    'Adopter des gestes d’économie et de protection de l’eau',
  ],
  courseMd: r`
> **Situation.** Dans un village, la pompe hydraulique est en panne depuis des mois ; les femmes vont puiser l'eau du marigot, et les cas de diarrhée se multiplient. En ville, des robinets coulent pour rien. Comment mieux gérer l'eau ?

## 1. Les ressources en eau
- **Eaux de surface** : fleuves (Cavally, Sassandra, Bandama, Comoé), rivières, **lagunes**, lacs de barrage, marigots.
- **Eaux souterraines** : **nappes phréatiques**, captées par des puits, des forages et des pompes.
- **Eaux de pluie**.
L'eau est une ressource **vitale** mais **limitée** et **fragile**.

## 2. Les usages
Boisson, cuisine, hygiène, agriculture (irrigation), élevage, industrie, production d'électricité (barrages), pêche, transport, loisirs.

## 3. Les acteurs de la gestion
- L'**État** fixe les règles (**Code de l'eau** de **1998**) et planifie.
- L'**Office national de l'eau potable (ONEP)** gère le patrimoine de l'eau potable.
- La **SODECI** produit et distribue l'eau potable dans les villes.
- Les **comités de gestion des points d'eau** dans les villages (entretien des pompes, cotisations).
- Les **communes**, les ménages, les entreprises.

## 4. Les problèmes
- **Pollution** : ordures, eaux usées, produits chimiques, mercure de l'orpaillage, défécation à l'air libre.
- **Gaspillage** : robinets ouverts, fuites, branchements illégaux.
- Accès insuffisant à l'**eau potable** dans certaines zones rurales et quartiers précaires.
- **Maladies hydriques** : diarrhées, **choléra**, **fièvre typhoïde**, bilharziose.
- Sécheresse, baisse des nappes.

## 5. Bien gérer et protéger l'eau
- **Économiser** : fermer les robinets, réparer les fuites, récupérer l'eau de pluie pour l'arrosage.
- **Protéger** les sources : ne pas jeter d'ordures dans les cours d'eau, utiliser des latrines, éloigner les latrines des puits.
- **Entretenir** les points d'eau (pompes, puits couverts) et cotiser au comité de gestion.
- **Rendre l'eau potable** : la faire bouillir, la **chlorer** (eau de javel selon les doses recommandées), la filtrer ; conserver l'eau dans des récipients **propres et couverts**.
- **Payer** sa facture d'eau et refuser les branchements frauduleux.

Réponse à la situation : réparer la pompe grâce au **comité de gestion** et traiter l'eau avant de la boire ; en ville, lutter contre le **gaspillage**.
`,
  summaryMd: r`
- Ressources : eaux de surface (fleuves, lagunes), souterraines (nappes), pluie.
- Acteurs : État (**Code de l'eau, 1998**), **ONEP**, **SODECI**, comités de gestion des points d'eau, communes.
- Problèmes : pollution, gaspillage, accès insuffisant, maladies hydriques (choléra, typhoïde, diarrhées).
- Gestes : économiser, protéger les sources, entretenir les points d'eau, bouillir/chlorer/filtrer, payer sa facture.
`,
  questions: [
    { type: 'MCQ', prompt: r`Une eau souterraine provient :`, choices: ['des nappes phréatiques', 'des lagunes'], answer: { index: 0 }, explanation: r`Captée par des puits et forages.` },
    { type: 'MCQ', prompt: r`La SODECI :`, choices: ['distribue l’eau potable dans les villes', 'organise les élections'], answer: { index: 0 }, explanation: r`Société de distribution d'eau.` },
    { type: 'NUMERIC', prompt: r`En quelle année le Code de l'eau a-t-il été adopté en Côte d'Ivoire ?`, answer: { value: 1998 }, explanation: r`Cadre juridique.` },
    { type: 'MCQ', prompt: r`Une maladie hydrique est :`, choices: ['le choléra', 'le paludisme'], answer: { index: 0 }, explanation: r`Liée à l'eau souillée.` },
    { type: 'MCQ', prompt: r`Pour rendre l'eau potable, on peut :`, choices: ['la faire bouillir', 'y ajouter du sucre'], answer: { index: 0 }, explanation: r`Ou la chlorer, la filtrer.` },
    { type: 'MCQ', prompt: r`Laisser un robinet ouvert est :`, choices: ['du gaspillage', 'une économie'], answer: { index: 0 }, explanation: r`Mauvaise gestion.` },
    { type: 'MCQ', prompt: r`Le comité de gestion d'un point d'eau :`, choices: ['entretient la pompe du village', 'vend des médicaments'], answer: { index: 0 }, explanation: r`Gestion communautaire.` },
    { type: 'MCQ', prompt: r`Les latrines doivent être construites :`, choices: ['loin des puits', 'à côté des puits'], answer: { index: 0 }, explanation: r`Éviter la contamination.` },
    { type: 'MCQ', prompt: r`L'ONEP gère :`, choices: ['le patrimoine de l’eau potable', 'les parcs nationaux'], answer: { index: 0 }, explanation: r`Office national de l'eau potable.` },
    { type: 'MCQ', prompt: r`Un branchement d'eau frauduleux est :`, choices: ['interdit', 'autorisé'], answer: { index: 0 }, explanation: r`Vol d'eau.` },
    { type: 'MCQ', prompt: r`On conserve l'eau de boisson dans des récipients :`, choices: ['propres et couverts', 'ouverts au soleil'], answer: { index: 0 }, explanation: r`Hygiène.` },
    { type: 'MCQ', prompt: r`Le mercure de l'orpaillage :`, choices: ['pollue les cours d’eau', 'purifie l’eau'], answer: { index: 0 }, explanation: r`Toxique.` },
    { type: 'MCQ', prompt: r`Récupérer l'eau de pluie pour arroser est :`, choices: ['un geste d’économie', 'inutile'], answer: { index: 0 }, explanation: r`Préserver l'eau potable.` },
    { type: 'MCQ', prompt: r`La fièvre typhoïde est liée :`, choices: ['à l’eau et aux aliments souillés', 'aux piqûres d’abeilles'], answer: { index: 0 }, explanation: r`Maladie hydrique.` },
    { type: 'OPEN', prompt: r`Propose trois gestes pour économiser l'eau à la maison ou à l'école.`, answer: { model: 'Fermer les robinets, réparer les fuites, récupérer l’eau de pluie, se laver avec un seau.', keywords: ['robinets', 'fuites', 'pluie'] }, explanation: r`Économie d'eau.` },
  ],
  assessment: devoirEDHC(
    'La gestion de l’eau',
    [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Le choléra est une maladie :`, type: 'MCQ', choices: ['hydrique', 'héréditaire'], answer: { index: 0 }, points: 2, correction: r`Liée à l'eau.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. La distribution de l'eau potable en ville est assurée par :`, type: 'MCQ', choices: ['la SODECI', 'la CIE'], answer: { index: 0 }, points: 2, correction: r`Société de distribution d'eau.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Faire bouillir l'eau permet de :`, type: 'MCQ', choices: ['tuer les microbes', 'la colorer'], answer: { index: 0 }, points: 2, correction: r`Désinfection.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`**Situation.** Dans un village, la pompe est en panne depuis six mois faute d'entretien. Les femmes puisent l'eau du marigot où l'on fait aussi la lessive et où boivent les animaux. Les cas de diarrhée se multiplient chez les enfants.`, prompt: r`1. Explique la cause des diarrhées.`, type: 'OPEN', answer: { model: 'Eau du marigot souillée (lessive, animaux) consommée sans traitement' }, points: 4, correction: r`L'eau du marigot est polluée par la lessive et les animaux *(2 pts)* et elle est bue sans traitement *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Quelle structure du village aurait dû entretenir la pompe ?`, type: 'OPEN', answer: { model: 'Le comité de gestion du point d’eau' }, points: 3, correction: r`Le comité de gestion du point d'eau (avec les cotisations des habitants).` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. En attendant la réparation, comment rendre l'eau du marigot moins dangereuse ?`, type: 'OPEN', answer: { model: 'La faire bouillir, la chlorer, la filtrer, la conserver couverte' }, points: 4, correction: r`Bouillir, chlorer selon les doses, filtrer, conserver dans des récipients propres et couverts (1 pt par mesure).` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Propose deux mesures durables pour ce village.`, type: 'OPEN', answer: { model: 'Réparer et entretenir la pompe, cotiser, protéger le marigot, construire des latrines' }, points: 3, correction: r`Deux mesures durables pertinentes (1,5 pt chacune).` },
    ],
    r`### 🎯 Conseils méthodologiques
1. Relie **eau polluée → maladie hydrique**.
2. Propose des solutions **immédiates** (traitement de l'eau) et **durables** (entretien, gestion communautaire).`,
  ),
};
