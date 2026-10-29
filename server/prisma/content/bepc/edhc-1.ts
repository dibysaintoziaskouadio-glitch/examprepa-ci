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

export const devoirsParents: SeedChapter = {
  subject: 'EDHC',
  order: 1,
  title: 'Les devoirs des parents',
  minutes: 60,
  isFree: true,
  officialRef: `${REF}, compétence 1, leçon 1`,
  objectives: [
    'Identifier les devoirs des parents envers leurs enfants',
    'Connaître les textes qui protègent l’enfant',
    'Adopter une attitude responsable dans la famille',
  ],
  courseMd: r`
> **Situation.** Kouassi, 13 ans, n'a jamais été déclaré à l'état civil. Il ne peut pas obtenir d'extrait de naissance pour s'inscrire au BEPC. Ses parents ont-ils manqué à un devoir ?

## 1. Qui sont les parents ?
Les **parents** sont le père et la mère de l'enfant (ou les personnes qui exercent l'**autorité parentale** : tuteur légal…). Ils sont **responsables** de l'enfant jusqu'à sa majorité (**18 ans**).

## 2. Les devoirs des parents
- **Déclarer la naissance** de l'enfant à l'état civil (mairie ou sous-préfecture) **dans les trois mois** : l'enfant obtient ainsi une **identité** (nom, nationalité) et l'extrait de naissance indispensable pour l'école, les examens et la vie de citoyen.
- **Nourrir**, **loger**, **habiller** l'enfant.
- **Soigner** : vaccinations, consultations, traitement en cas de maladie.
- **Scolariser** : en Côte d'Ivoire, l'école est **obligatoire de 6 à 16 ans** depuis 2015 ; les parents doivent inscrire leurs enfants, filles comme garçons, et suivre leur travail.
- **Éduquer** : transmettre des valeurs (respect, travail, honnêteté), dialoguer, conseiller (notamment sur la santé sexuelle et la prévention).
- **Protéger** contre les violences, l'exploitation (travail des enfants dans les plantations, les mines…), la traite, le mariage précoce.
- **Aimer** et accompagner l'enfant, respecter sa dignité.

## 3. Les textes qui fondent ces devoirs
- La **Constitution** de la Côte d'Ivoire (droits de l'enfant, protection de la famille).
- Le **Code civil** (autorité parentale, état civil) et le **Code pénal** (punit l'abandon, les violences, l'exploitation des enfants).
- La **Convention relative aux droits de l'enfant** de l'ONU (1989) et la **Charte africaine des droits et du bien-être de l'enfant** (1990).

## 4. Conséquences du non-respect
Enfant sans papiers (exclu des examens), déscolarisation, malnutrition, enfants dans la rue, délinquance, grossesses précoces, sanctions pénales pour les parents.

## 5. Et l'enfant ?
L'enfant a aussi des **devoirs** : respecter ses parents, travailler à l'école, participer aux tâches adaptées à son âge, prendre soin de sa santé.

Réponse à la situation : oui, les parents de Kouassi n'ont pas déclaré sa naissance ; il faut demander un **jugement supplétif** d'acte de naissance au tribunal.
`,
  summaryMd: r`
Devoirs des parents :
- **déclarer la naissance** (dans les 3 mois) ;
- nourrir, loger, habiller, **soigner** ;
- **scolariser** (obligatoire de 6 à 16 ans) ;
- **éduquer**, conseiller ;
- **protéger** contre violences, exploitation, mariage précoce.

Textes : Constitution, Code civil, Code pénal, Convention relative aux droits de l'enfant (1989), Charte africaine (1990).
Sans déclaration : demander un **jugement supplétif**.
`,
  questions: [
    { type: 'MCQ', prompt: r`La naissance d'un enfant doit être déclarée :`, choices: ['dans les trois mois', 'à ses 18 ans', 'jamais'], answer: { index: 0 }, explanation: r`À l'état civil.` },
    { type: 'NUMERIC', prompt: r`Jusqu'à quel âge l'école est-elle obligatoire en Côte d'Ivoire ?`, answer: { value: 16 }, explanation: r`De 6 à 16 ans.` },
    { type: 'NUMERIC', prompt: r`À partir de quel âge est-on majeur ?`, answer: { value: 18 }, explanation: r`Fin de l'autorité parentale.` },
    { type: 'MCQ', prompt: r`La déclaration de naissance donne à l'enfant :`, choices: ['une identité', 'un salaire'], answer: { index: 0 }, explanation: r`Nom, nationalité, extrait de naissance.` },
    { type: 'MCQ', prompt: r`Faire travailler un enfant dans une mine d'or est :`, choices: ['une exploitation interdite', 'un devoir des parents'], answer: { index: 0 }, explanation: r`Pire forme de travail des enfants.` },
    { type: 'MCQ', prompt: r`La Convention relative aux droits de l'enfant date de :`, choices: ['1989', '1945'], answer: { index: 0 }, explanation: r`Adoptée par l'ONU.` },
    { type: 'MCQ', prompt: r`Sans extrait de naissance, un enfant peut-il passer le BEPC ?`, choices: ['Non', 'Oui'], answer: { index: 0 }, explanation: r`Il faut un état civil.` },
    { type: 'MCQ', prompt: r`Un enfant non déclaré peut régulariser sa situation par :`, choices: ['un jugement supplétif', 'une simple lettre'], answer: { index: 0 }, explanation: r`Au tribunal.` },
    { type: 'MCQ', prompt: r`Vacciner son enfant fait partie du devoir de :`, choices: ['soigner', 'loger'], answer: { index: 0 }, explanation: r`Santé.` },
    { type: 'MCQ', prompt: r`Le mariage précoce d'une fille de 14 ans est :`, choices: ['une violation de ses droits', 'un devoir des parents'], answer: { index: 0 }, explanation: r`Il compromet sa santé et sa scolarité.` },
    { type: 'MCQ', prompt: r`Les parents doivent scolariser :`, choices: ['filles et garçons', 'seulement les garçons'], answer: { index: 0 }, explanation: r`Égalité.` },
    { type: 'MCQ', prompt: r`L'autorité parentale est exercée :`, choices: ['par le père et la mère', 'par les voisins'], answer: { index: 0 }, explanation: r`Ou par le tuteur légal.` },
    { type: 'MCQ', prompt: r`Un devoir de l'enfant envers ses parents :`, choices: ['les respecter', 'les ignorer'], answer: { index: 0 }, explanation: r`Réciprocité.` },
    { type: 'MCQ', prompt: r`La Charte africaine des droits et du bien-être de l'enfant date de :`, choices: ['1990', '2010'], answer: { index: 0 }, explanation: r`Adoptée par l'OUA.` },
    { type: 'OPEN', prompt: r`Cite trois devoirs des parents envers leurs enfants.`, answer: { model: 'Déclarer la naissance, soigner, scolariser, éduquer, protéger.', keywords: ['déclarer', 'scolariser', 'protéger'] }, explanation: r`Devoirs essentiels.` },
  ],
  assessment: devoirEDHC(
    'Les devoirs des parents',
    [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. L'école est obligatoire en Côte d'Ivoire :`, type: 'MCQ', choices: ['de 6 à 16 ans', 'de 3 à 10 ans'], answer: { index: 0 }, points: 2, correction: r`Depuis 2015.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Le texte de l'ONU qui protège l'enfant est :`, type: 'MCQ', choices: ['la Convention relative aux droits de l’enfant', 'la Charte de l’UA'], answer: { index: 0 }, points: 2, correction: r`1989.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Déclarer la naissance d'un enfant permet de lui donner :`, type: 'MCQ', choices: ['une identité', 'une maison'], answer: { index: 0 }, points: 2, correction: r`État civil.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`**Situation.** Awa, 12 ans, ne va plus à l'école : son père l'envoie vendre des beignets au marché toute la journée et envisage de la marier l'an prochain. Sa mère n'est pas d'accord.`, prompt: r`1. Identifie les droits d'Awa qui ne sont pas respectés.`, type: 'OPEN', answer: { model: 'Droit à l’éducation ; protection contre l’exploitation et le mariage précoce' }, points: 4, correction: r`Droit à l'éducation *(2 pts)* ; droit à la protection contre l'exploitation et le mariage précoce *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Quels devoirs le père ne respecte-t-il pas ?`, type: 'OPEN', answer: { model: 'Scolariser ; protéger' }, points: 4, correction: r`Scolariser Awa *(2 pts)* ; la protéger contre le travail et le mariage précoce *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Quelles peuvent être les conséquences pour Awa ?`, type: 'OPEN', answer: { model: 'Déscolarisation, grossesse précoce, pauvreté' }, points: 3, correction: r`Trois conséquences pertinentes (avenir compromis, grossesse précoce, santé, pauvreté) : 1 pt chacune.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Que peut faire la mère pour protéger Awa ?`, type: 'OPEN', answer: { model: 'Dialoguer, saisir le chef, les services sociaux, le juge des enfants, la ligne 116' }, points: 3, correction: r`Dialoguer avec le père, alerter la famille, le chef de quartier, les services sociaux ou le juge des enfants *(3 pts)*.` },
    ],
    r`### 🎯 Conseils méthodologiques
1. Distingue **droits de l'enfant** et **devoirs des parents** (ce sont les deux faces d'une même réalité).
2. Propose des **solutions réalistes** (dialogue, structures d'aide).`,
  ),
};

export const organisationsHumanitaires: SeedChapter = {
  subject: 'EDHC',
  order: 2,
  title: 'Les organisations humanitaires',
  minutes: 120,
  officialRef: `${REF}, compétence 1, leçon 2`,
  objectives: [
    'Identifier les organisations humanitaires et leurs missions',
    'Connaître les principes de l’action humanitaire et les emblèmes protecteurs',
    'Adopter une attitude de respect et de solidarité',
  ],
  courseMd: r`
> **Situation.** Pendant les inondations à Abidjan ou lors des conflits, on voit arriver des véhicules marqués d'une **croix rouge**, du logo de **MSF** ou de l'**UNICEF**. Qui sont ces organisations ?

## 1. Définition
Une **organisation humanitaire** apporte **secours** et **assistance** aux victimes de catastrophes (inondations, épidémies, sécheresses) et de conflits armés, sans distinction.

## 2. Les principales organisations
| Type | Exemples | Missions |
|---|---|---|
| Mouvement international de la Croix-Rouge et du Croissant-Rouge | **CICR** (fondé en **1863** à Genève à l'initiative d'**Henri Dunant**), **Croix-Rouge de Côte d'Ivoire** | soigner les blessés, visiter les prisonniers, rétablir les liens familiaux, secourisme, diffuser le **droit international humanitaire** |
| Organisations du système de l'ONU | **HCR** (réfugiés), **UNICEF** (enfants), **PAM** (aide alimentaire), **OMS** (santé) | protection et assistance |
| ONG internationales | **Médecins sans frontières (MSF)**, Caritas, Save the Children, Action contre la faim… | soins, nutrition, eau, éducation |
| ONG et associations nationales | associations locales d'aide, ONG de santé | actions de proximité |

## 3. Les principes de l'action humanitaire
- **Humanité** : soulager la souffrance de tous.
- **Impartialité** : aider selon les besoins, sans discrimination.
- **Neutralité** : ne pas prendre parti dans un conflit.
- **Indépendance** vis-à-vis des pouvoirs politiques.
- Ainsi que le **volontariat**, l'**unité** et l'**universalité** (pour la Croix-Rouge).

## 4. Le droit international humanitaire (DIH)
Ce sont les règles qui limitent les effets des conflits armés : les **Conventions de Genève de 1949** protègent les blessés, les prisonniers et les **civils**. Les **emblèmes** de la **croix rouge**, du **croissant rouge** et du **cristal rouge** signalent les personnes et les biens protégés : il est **interdit de les attaquer** ou d'utiliser ces emblèmes abusivement.

## 5. Notre attitude
Respecter les agents humanitaires et leurs emblèmes, faciliter leur travail, **s'engager** (secouriste volontaire, club Croix-Rouge à l'école), être solidaire des victimes.
`,
  summaryMd: r`
- Organisation humanitaire : secours aux victimes de catastrophes et de conflits.
- Exemples : **CICR** (1863, Henri Dunant), Croix-Rouge de Côte d'Ivoire, HCR, UNICEF, PAM, OMS, MSF.
- Principes : **humanité, impartialité, neutralité, indépendance**.
- DIH : Conventions de Genève (1949) ; emblèmes protecteurs : croix rouge, croissant rouge, cristal rouge.
- Attitude : respecter, faciliter, s'engager.
`,
  questions: [
    { type: 'MCQ', prompt: r`Le CICR a été fondé à l'initiative de :`, choices: ['Henri Dunant', 'Kofi Annan'], answer: { index: 0 }, explanation: r`En 1863.` },
    { type: 'NUMERIC', prompt: r`En quelle année le CICR a-t-il été fondé ?`, answer: { value: 1863 }, explanation: r`À Genève.` },
    { type: 'MCQ', prompt: r`Le HCR s'occupe :`, choices: ['des réfugiés', 'des examens'], answer: { index: 0 }, explanation: r`Haut-Commissariat des Nations unies pour les réfugiés.` },
    { type: 'MCQ', prompt: r`Le principe de neutralité signifie :`, choices: ['ne pas prendre parti dans un conflit', 'aider seulement ses amis'], answer: { index: 0 }, explanation: r`Condition de l'accès aux victimes.` },
    { type: 'MCQ', prompt: r`Le principe d'impartialité signifie :`, choices: ['aider selon les besoins, sans discrimination', 'aider selon la religion'], answer: { index: 0 }, explanation: r`Principe fondamental.` },
    { type: 'MCQ', prompt: r`Les Conventions de Genève datent de :`, choices: ['1949', '1989'], answer: { index: 0 }, explanation: r`Base du DIH.` },
    { type: 'MCQ', prompt: r`Un emblème protecteur est :`, choices: ['le croissant rouge', 'le drapeau d’un parti'], answer: { index: 0 }, explanation: r`Avec la croix rouge et le cristal rouge.` },
    { type: 'MCQ', prompt: r`Attaquer une ambulance portant la croix rouge est :`, choices: ['interdit par le DIH', 'autorisé en guerre'], answer: { index: 0 }, explanation: r`Violation grave.` },
    { type: 'MCQ', prompt: r`MSF signifie :`, choices: ['Médecins sans frontières', 'Ministère sans frontières'], answer: { index: 0 }, explanation: r`ONG médicale.` },
    { type: 'MCQ', prompt: r`Le PAM apporte :`, choices: ['de l’aide alimentaire', 'des armes'], answer: { index: 0 }, explanation: r`Programme alimentaire mondial.` },
    { type: 'MCQ', prompt: r`Le DIH protège en priorité :`, choices: ['les civils, les blessés et les prisonniers', 'les combattants armés en action'], answer: { index: 0 }, explanation: r`Personnes hors de combat.` },
    { type: 'MCQ', prompt: r`L'UNICEF s'occupe :`, choices: ['des enfants', 'des banques'], answer: { index: 0 }, explanation: r`Fonds des Nations unies pour l'enfance.` },
    { type: 'MCQ', prompt: r`Une action de la Croix-Rouge est :`, choices: ['former des secouristes', 'organiser les élections'], answer: { index: 0 }, explanation: r`Secourisme.` },
    { type: 'MCQ', prompt: r`Le principe d'indépendance signifie :`, choices: ['ne pas dépendre des pouvoirs politiques', 'ne pas recevoir d’aide'], answer: { index: 0 }, explanation: r`Autonomie d'action.` },
    { type: 'OPEN', prompt: r`Comment un élève peut-il participer à l'action humanitaire ?`, answer: { model: 'Adhérer au club Croix-Rouge, se former au secourisme, collecter des dons, respecter les emblèmes.', keywords: ['secourisme', 'club', 'dons'] }, explanation: r`Engagement citoyen.` },
  ],
  assessment: devoirEDHC(
    'Les organisations humanitaires',
    [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. L'organisation chargée des réfugiés est :`, type: 'MCQ', choices: ['le HCR', 'la FAO'], answer: { index: 0 }, points: 2, correction: r`HCR.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Les emblèmes protecteurs sont :`, type: 'MCQ', choices: ['croix rouge, croissant rouge, cristal rouge', 'drapeaux nationaux'], answer: { index: 0 }, points: 2, correction: r`DIH.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Le fondateur de la Croix-Rouge est :`, type: 'MCQ', choices: ['Henri Dunant', 'Jules Ferry'], answer: { index: 0 }, points: 2, correction: r`1863.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`**Situation.** Lors d'affrontements dans une localité, des jeunes empêchent une équipe de la Croix-Rouge d'évacuer des blessés, en l'accusant de soutenir le camp adverse.`, prompt: r`1. Quels principes de l'action humanitaire ces jeunes ignorent-ils ?`, type: 'OPEN', answer: { model: 'Neutralité, impartialité, humanité' }, points: 4, correction: r`Neutralité *(2 pts)* et impartialité/humanité *(2 pts)* : la Croix-Rouge aide toutes les victimes sans prendre parti.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Quelles règles du DIH sont violées ?`, type: 'OPEN', answer: { model: 'Protection des blessés et respect de l’emblème' }, points: 4, correction: r`Les blessés doivent être secourus *(2 pts)* ; les agents portant l'emblème doivent être respectés et protégés *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Quelles conséquences ce comportement peut-il avoir ?`, type: 'OPEN', answer: { model: 'Morts évitables, retrait des humanitaires, sanctions' }, points: 3, correction: r`Aggravation de l'état des blessés, décès évitables, suspension de l'aide, poursuites judiciaires (1 pt par conséquence).` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Quelle attitude recommandes-tu à ces jeunes ?`, type: 'OPEN', answer: { model: 'Laisser passer, respecter et aider les secouristes' }, points: 3, correction: r`Laisser passer et respecter les secouristes, faciliter leur travail, signaler les blessés *(3 pts)*.` },
    ],
    r`### 🎯 Conseils méthodologiques
1. Cite les **principes** (humanité, impartialité, neutralité, indépendance) avec précision.
2. Relie la situation aux règles du **DIH**.`,
  ),
};

export const violencesVulnerables: SeedChapter = {
  subject: 'EDHC',
  order: 3,
  title: 'Les instruments et mécanismes de protection contre les violences faites aux personnes vulnérables',
  minutes: 120,
  officialRef: `${REF}, compétence 1, leçon 3`,
  objectives: [
    'Identifier les personnes vulnérables et les formes de violence',
    'Connaître les instruments juridiques de protection',
    'Connaître les mécanismes (structures) de recours et savoir alerter',
  ],
  courseMd: r`
> **Situation.** Une élève confie à son amie qu'un adulte de son entourage la harcèle et la menace. Elle a peur et ne sait pas à qui parler. Que faire ?

## 1. Les personnes vulnérables
Ce sont des personnes plus exposées aux violences parce qu'elles ont du mal à se défendre : **enfants**, **femmes** (surtout les filles), **personnes âgées**, **personnes en situation de handicap**, malades, réfugiés et déplacés, personnes pauvres.

## 2. Les formes de violence
- **Physiques** : coups, blessures, mutilations génitales féminines (excision).
- **Sexuelles** : harcèlement, attouchements, viol, exploitation sexuelle.
- **Psychologiques** : insultes, menaces, humiliations, isolement.
- **Économiques** : privation de ressources, exploitation par le travail, traite des enfants.
- **Sociales et culturelles** : mariage forcé ou précoce, privation d'école, rejet des personnes handicapées.
Les violences peuvent se produire à la maison, à l'école, dans la rue ou en ligne (cyberharcèlement).

## 3. Les instruments juridiques (les textes)
- **Internationaux** : Déclaration universelle des droits de l'homme (1948), **Convention relative aux droits de l'enfant** (1989), Convention sur l'élimination de toutes les formes de discrimination à l'égard des femmes (**CEDEF/CEDAW**, 1979), Convention relative aux droits des personnes handicapées (2006).
- **Africains** : Charte africaine des droits de l'homme et des peuples (1981), Charte africaine des droits et du bien-être de l'enfant (1990), **Protocole de Maputo** sur les droits des femmes (2003).
- **Nationaux** : la **Constitution**, le **Code pénal** (qui réprime le viol, le harcèlement, les mutilations génitales, le mariage forcé, la traite et les pires formes de travail des enfants), les lois sur la protection de l'enfant.

## 4. Les mécanismes (structures) de protection
- **Police** et **gendarmerie** (plainte), **justice** (procureur, **juge des enfants**).
- **Centres sociaux** et services de protection de l'enfance, plateformes de lutte contre les **violences basées sur le genre (VBG)**.
- **Ligne verte d'urgence pour les enfants en détresse (116)**.
- Structures de santé (prise en charge médicale et psychologique, certificat médical).
- Organisations non gouvernementales, associations de défense des droits.
- À l'école : éducateurs, conseillers d'orientation, infirmerie, administration.

## 5. Que faire face à une violence ?
**Ne pas garder le silence** : en parler à un adulte de confiance, alerter les structures compétentes, se rendre rapidement dans un centre de santé en cas de violence sexuelle, porter plainte. Témoin, on doit **signaler** et soutenir la victime sans la juger.
`,
  summaryMd: r`
- Personnes vulnérables : enfants, femmes, personnes âgées, handicapées, réfugiés…
- Violences : physiques, sexuelles, psychologiques, économiques, socioculturelles (mariage forcé, excision).
- Instruments : DUDH, **CDE (1989)**, **CEDEF (1979)**, Charte africaine de l'enfant (1990), **Protocole de Maputo (2003)**, Constitution, Code pénal.
- Mécanismes : police/gendarmerie, juge des enfants, centres sociaux, plateformes VBG, ligne **116**, centres de santé, ONG.
- Réflexe : **parler**, **signaler**, se faire soigner, porter plainte.
`,
  questions: [
    { type: 'MCQ', prompt: r`Une personne vulnérable est :`, choices: ['une personne plus exposée aux violences', 'une personne riche'], answer: { index: 0 }, explanation: r`Enfants, femmes, personnes âgées, handicapées…` },
    { type: 'MCQ', prompt: r`L'excision est une violence :`, choices: ['physique', 'économique'], answer: { index: 0 }, explanation: r`Mutilation génitale, interdite par la loi.` },
    { type: 'MCQ', prompt: r`Les insultes répétées sont une violence :`, choices: ['psychologique', 'physique'], answer: { index: 0 }, explanation: r`Atteinte morale.` },
    { type: 'MCQ', prompt: r`Le Protocole de Maputo protège les droits :`, choices: ['des femmes', 'des entreprises'], answer: { index: 0 }, explanation: r`2003.` },
    { type: 'MCQ', prompt: r`La CEDEF (CEDAW) concerne :`, choices: ['la discrimination à l’égard des femmes', 'le commerce'], answer: { index: 0 }, explanation: r`1979.` },
    { type: 'NUMERIC', prompt: r`Numéro de la ligne d'urgence pour les enfants en détresse ?`, answer: { value: 116 }, explanation: r`Appel gratuit.` },
    { type: 'MCQ', prompt: r`Le juge des enfants intervient pour :`, choices: ['protéger les mineurs en danger', 'organiser les élections'], answer: { index: 0 }, explanation: r`Mécanisme judiciaire.` },
    { type: 'MCQ', prompt: r`Le mariage forcé d'une mineure est :`, choices: ['puni par la loi', 'autorisé'], answer: { index: 0 }, explanation: r`Code pénal.` },
    { type: 'MCQ', prompt: r`Envoyer des messages humiliants sur les réseaux sociaux est :`, choices: ['du cyberharcèlement', 'une plaisanterie sans conséquence'], answer: { index: 0 }, explanation: r`Violence en ligne.` },
    { type: 'MCQ', prompt: r`Après une violence sexuelle, il faut :`, choices: ['se rendre rapidement dans un centre de santé', 'attendre plusieurs mois'], answer: { index: 0 }, explanation: r`Soins et certificat médical.` },
    { type: 'MCQ', prompt: r`Un témoin de violence doit :`, choices: ['signaler et soutenir la victime', 'se taire'], answer: { index: 0 }, explanation: r`Responsabilité citoyenne.` },
    { type: 'MCQ', prompt: r`La traite des enfants est une violence :`, choices: ['économique', 'culturelle seulement'], answer: { index: 0 }, explanation: r`Exploitation.` },
    { type: 'MCQ', prompt: r`Un instrument national de protection est :`, choices: ['le Code pénal', 'la Charte de l’ONU'], answer: { index: 0 }, explanation: r`Texte ivoirien.` },
    { type: 'MCQ', prompt: r`VBG signifie :`, choices: ['violences basées sur le genre', 'vote des bureaux généraux'], answer: { index: 0 }, explanation: r`Violences liées au sexe.` },
    { type: 'OPEN', prompt: r`Cite deux structures auxquelles une victime de violence peut s'adresser.`, answer: { model: 'Police/gendarmerie, centre social, juge des enfants, ligne 116, centre de santé, ONG.', keywords: ['police', 'centre social', '116'] }, explanation: r`Mécanismes de protection.` },
  ],
  assessment: devoirEDHC(
    'Protection contre les violences faites aux personnes vulnérables',
    [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. La Convention relative aux droits de l'enfant date de :`, type: 'MCQ', choices: ['1989', '1963'], answer: { index: 0 }, points: 2, correction: r`ONU.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Le harcèlement sexuel est :`, type: 'MCQ', choices: ['une violence punie par la loi', 'un comportement normal'], answer: { index: 0 }, points: 2, correction: r`Code pénal.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Un mécanisme de protection est :`, type: 'MCQ', choices: ['la ligne verte 116', 'le silence'], answer: { index: 0 }, points: 2, correction: r`Alerte.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`**Situation.** Fatou, 14 ans, est régulièrement frappée et insultée par sa tutrice, qui l'oblige à travailler du matin au soir et l'empêche d'aller à l'école. Une voisine a tout vu.`, prompt: r`1. Identifie les formes de violence subies par Fatou.`, type: 'OPEN', answer: { model: 'Physique, psychologique, économique, privation d’école' }, points: 4, correction: r`Physique (coups), psychologique (insultes), économique (travail forcé), privation de scolarité (1 pt chacune).` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Cite deux textes qui protègent Fatou.`, type: 'OPEN', answer: { model: 'CDE, Charte africaine de l’enfant, Code pénal, Constitution' }, points: 4, correction: r`Deux textes exacts (2 pts chacun).` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Que doit faire la voisine ?`, type: 'OPEN', answer: { model: 'Signaler (116, centre social, police), soutenir Fatou' }, points: 3, correction: r`Signaler aux structures compétentes (116, centre social, police) *(2 pts)* et soutenir Fatou *(1 pt)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Quelles structures peuvent prendre Fatou en charge ?`, type: 'OPEN', answer: { model: 'Centre social, juge des enfants, structures de santé, ONG' }, points: 3, correction: r`Trois structures pertinentes (1 pt chacune).` },
    ],
    r`### 🎯 Conseils méthodologiques
1. Nomme précisément la **forme** de chaque violence.
2. Distingue les **instruments** (textes) et les **mécanismes** (structures).`,
  ),
};

export const partisPolitiques: SeedChapter = {
  subject: 'EDHC',
  order: 4,
  title: 'Les partis politiques',
  minutes: 120,
  officialRef: `${REF}, compétence 2, leçon 4`,
  objectives: [
    'Définir un parti politique et ses rôles',
    'Connaître les conditions de création et de fonctionnement d’un parti en Côte d’Ivoire',
    'Adopter une attitude citoyenne et tolérante face au pluralisme politique',
  ],
  courseMd: r`
> **Situation.** À l'approche des élections, des militants de deux partis s'affrontent violemment dans un quartier. Est-ce le rôle d'un parti politique ?

## 1. Définition
Un **parti politique** est une **association** de citoyens qui partagent les mêmes idées (une **idéologie**, un **programme**) et qui cherchent à **conquérir** et à **exercer le pouvoir** par des moyens **démocratiques** (les élections).

## 2. Le pluralisme politique en Côte d'Ivoire
- De 1960 à 1990, le pays a connu un régime de **parti unique** (le PDCI-RDA).
- Le **multipartisme** est rétabli en **1990**. La **Constitution** garantit la liberté de créer des partis et le **pluralisme**.
- Pour exister légalement, un parti doit déposer ses **statuts** et son règlement intérieur auprès du **ministère de l'Intérieur** et respecter la loi : pas de parti fondé sur l'**ethnie**, la **région** ou la **religion**, pas d'appel à la violence ni de milice.

## 3. Les rôles des partis politiques
- **Animer la vie politique** : débats, propositions, meetings.
- **Former et informer** les citoyens (éducation civique).
- **Proposer des candidats** et des programmes aux élections.
- **Exercer le pouvoir** (majorité) ou le **contrôler** et proposer des alternatives (**opposition**).
- Contribuer à l'**expression du suffrage**.

## 4. L'organisation d'un parti
Un parti a un **président** (ou secrétaire général), des organes de direction (bureau politique, secrétariat exécutif), des structures de base (sections, fédérations), une organisation de **jeunesse** et une organisation de **femmes**. Il est financé par les cotisations des militants, les dons et, selon la loi, un financement public.

## 5. L'attitude du citoyen
- Chaque citoyen est **libre** d'adhérer ou non à un parti.
- Respecter les opinions des autres (**tolérance**), refuser la violence, l'injure et la manipulation.
- Juger les partis sur leurs **programmes**, pas sur l'ethnie ou la religion de leurs dirigeants.
- Les élèves ne doivent pas être instrumentalisés à des fins politiques.

Réponse à la situation : **non**, la violence est contraire au rôle démocratique des partis.
`,
  summaryMd: r`
- Parti politique : association de citoyens avec un programme, qui veut conquérir et exercer le pouvoir **démocratiquement**.
- Côte d'Ivoire : parti unique (1960-1990), **multipartisme** depuis **1990** ; statuts déposés au ministère de l'Intérieur ; interdits : partis ethniques, régionaux, religieux, milices.
- Rôles : animer la vie politique, former, proposer des candidats, gouverner ou s'opposer.
- Attitude : liberté d'adhésion, **tolérance**, non-violence.
`,
  questions: [
    { type: 'MCQ', prompt: r`Un parti politique cherche à conquérir le pouvoir :`, choices: ['par des moyens démocratiques', 'par la violence'], answer: { index: 0 }, explanation: r`Les élections.` },
    { type: 'NUMERIC', prompt: r`En quelle année le multipartisme est-il rétabli en Côte d'Ivoire ?`, answer: { value: 1990 }, explanation: r`Fin du parti unique.` },
    { type: 'MCQ', prompt: r`Les statuts d'un parti sont déposés auprès :`, choices: ['du ministère de l’Intérieur', 'du ministère de la Santé'], answer: { index: 0 }, explanation: r`Condition de reconnaissance.` },
    { type: 'MCQ', prompt: r`Un parti fondé uniquement sur une ethnie est :`, choices: ['interdit', 'autorisé'], answer: { index: 0 }, explanation: r`Il divise la nation.` },
    { type: 'MCQ', prompt: r`Le rôle de l'opposition est :`, choices: ['contrôler le pouvoir et proposer des alternatives', 'empêcher les élections'], answer: { index: 0 }, explanation: r`Rôle démocratique.` },
    { type: 'MCQ', prompt: r`Le pluralisme politique, c'est :`, choices: ['l’existence de plusieurs partis', 'un seul parti'], answer: { index: 0 }, explanation: r`Multipartisme.` },
    { type: 'MCQ', prompt: r`Adhérer à un parti politique est :`, choices: ['un choix libre', 'une obligation'], answer: { index: 0 }, explanation: r`Liberté d'association.` },
    { type: 'MCQ', prompt: r`Un programme politique est :`, choices: ['l’ensemble des propositions d’un parti', 'la liste des militants'], answer: { index: 0 }, explanation: r`Projet de société.` },
    { type: 'MCQ', prompt: r`Les partis peuvent-ils créer des milices armées ?`, choices: ['Non', 'Oui'], answer: { index: 0 }, explanation: r`Interdit par la loi.` },
    { type: 'MCQ', prompt: r`Un rôle des partis est de :`, choices: ['former et informer les citoyens', 'rendre la justice'], answer: { index: 0 }, explanation: r`Éducation politique.` },
    { type: 'MCQ', prompt: r`De 1960 à 1990, la Côte d'Ivoire avait :`, choices: ['un parti unique', 'dix partis'], answer: { index: 0 }, explanation: r`Le PDCI-RDA.` },
    { type: 'MCQ', prompt: r`Un parti se finance notamment par :`, choices: ['les cotisations des militants', 'les amendes des élèves'], answer: { index: 0 }, explanation: r`Et des dons, un financement public.` },
    { type: 'MCQ', prompt: r`La tolérance politique consiste à :`, choices: ['respecter les opinions des autres', 'insulter les adversaires'], answer: { index: 0 }, explanation: r`Valeur démocratique.` },
    { type: 'MCQ', prompt: r`On doit choisir un parti selon :`, choices: ['son programme', 'l’ethnie de son dirigeant'], answer: { index: 0 }, explanation: r`Choix éclairé.` },
    { type: 'OPEN', prompt: r`Cite trois rôles d'un parti politique.`, answer: { model: 'Animer la vie politique, former les citoyens, présenter des candidats, gouverner ou s’opposer.', keywords: ['animer', 'former', 'candidats'] }, explanation: r`Rôles démocratiques.` },
  ],
  assessment: devoirEDHC(
    'Les partis politiques',
    [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Le multipartisme est rétabli en Côte d'Ivoire en :`, type: 'MCQ', choices: ['1990', '1960'], answer: { index: 0 }, points: 2, correction: r`Fin du parti unique.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Un parti politique conquiert le pouvoir par :`, type: 'MCQ', choices: ['les élections', 'les coups d’État'], answer: { index: 0 }, points: 2, correction: r`Voie démocratique.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Un parti fondé sur une religion est :`, type: 'MCQ', choices: ['interdit', 'encouragé'], answer: { index: 0 }, points: 2, correction: r`Loi sur les partis.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`**Situation.** Pendant une campagne électorale, des militants d'un parti distribuent de l'argent à des élèves pour qu'ils aillent perturber le meeting d'un parti adverse.`, prompt: r`1. Ce comportement est-il conforme au rôle d'un parti politique ? Justifie.`, type: 'OPEN', answer: { model: 'Non : les partis doivent agir démocratiquement, sans violence ni manipulation.' }, points: 4, correction: r`Non *(1 pt)* : un parti doit convaincre par son programme, de façon pacifique et démocratique *(3 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Quels risques ce comportement fait-il courir aux élèves et à la société ?`, type: 'OPEN', answer: { model: 'Violences, blessures, poursuites, divisions, instabilité' }, points: 4, correction: r`Risques pour les élèves (violence, blessures, poursuites, échec scolaire) *(2 pts)* ; pour la société (divisions, troubles) *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Quelle attitude un élève doit-il adopter ?`, type: 'OPEN', answer: { model: 'Refuser, rester neutre à l’école, respecter les opinions, signaler' }, points: 3, correction: r`Refuser l'argent et la violence, respecter les opinions des autres, signaler *(3 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Cite deux rôles positifs que doivent jouer les partis politiques.`, type: 'OPEN', answer: { model: 'Former les citoyens, proposer des programmes et des candidats' }, points: 3, correction: r`Deux rôles exacts (1,5 pt chacun).` },
    ],
    r`### 🎯 Conseils méthodologiques
1. Rappelle la **définition** et les **rôles** d'un parti avant de juger la situation.
2. Mets en avant les valeurs de **tolérance** et de **non-violence**.`,
  ),
};

export const institutionsJuridictionnelles: SeedChapter = {
  subject: 'EDHC',
  order: 5,
  title: 'Les institutions juridictionnelles',
  minutes: 120,
  officialRef: `${REF}, compétence 2, leçon 5`,
  objectives: [
    'Identifier les juridictions de Côte d’Ivoire et leurs rôles',
    'Connaître les principes de la justice et les auxiliaires de justice',
    'Savoir à quelle juridiction s’adresser',
  ],
  courseMd: r`
> **Situation.** M. Yao et son voisin se disputent la limite de leur terrain ; un commerçant conteste une amende de la mairie ; un jeune est arrêté pour vol. Qui va trancher ces litiges ?

## 1. La justice et son rôle
La **justice** applique la loi pour **trancher les conflits** entre personnes, **sanctionner** les infractions et **protéger les droits** de chacun. Elle est rendue **au nom du peuple ivoirien** par des **juges**. Selon la Constitution, le **pouvoir judiciaire** est **indépendant** des pouvoirs exécutif et législatif.

## 2. Les juridictions (Constitution de 2016)
**Le Conseil constitutionnel** : contrôle la conformité des lois à la Constitution ; juge le contentieux de l'élection présidentielle et des élections législatives ; proclame les résultats définitifs de l'élection présidentielle.

**Les juridictions suprêmes :**
- la **Cour de cassation** : sommet de l'ordre **judiciaire** (affaires civiles, commerciales, pénales) ; elle vérifie l'application correcte du droit ;
- le **Conseil d'État** : sommet de l'ordre **administratif** (litiges entre les citoyens et l'administration) ;
- la **Cour des comptes** : contrôle la gestion des **finances publiques**.

**Les juridictions de premier degré et d'appel :**
- les **tribunaux de première instance** (et leurs sections) : jugent la plupart des affaires civiles et pénales ;
- les **tribunaux de commerce** : litiges entre commerçants ou entreprises ;
- le **juge des enfants** / tribunal pour enfants : mineurs en danger ou en conflit avec la loi ;
- les **cours d'appel** : rejugent une affaire quand une partie conteste le premier jugement (**double degré de juridiction**).

**La Haute Cour de justice** : juge le président de la République pour haute trahison et les membres du gouvernement pour les crimes et délits commis dans l'exercice de leurs fonctions.

## 3. Les principes de la justice
- **Égalité** de tous devant la loi.
- **Présomption d'innocence** : toute personne est innocente tant que sa culpabilité n'a pas été établie par un jugement.
- **Droit à la défense** (assistance d'un **avocat**).
- **Double degré de juridiction** (droit de faire appel).
- **Publicité** des audiences (sauf exceptions, comme pour les mineurs).

## 4. Les auxiliaires de justice
**Avocats** (défendent), **huissiers de justice** (signifient et font exécuter les décisions), **notaires** (actes authentiques : vente de terrain, succession), **greffiers** (tiennent les dossiers), **officiers de police judiciaire** (enquêtes).

## 5. Se rendre justice soi-même est interdit
Le lynchage, la « justice populaire » et la vengeance sont des **infractions**. Il faut porter plainte et s'adresser aux juridictions.

Réponse à la situation : le litige foncier relève du **tribunal de première instance** ; l'amende de la mairie, de la **juridiction administrative** ; le vol, du **tribunal** (et du **juge des enfants** si le jeune est mineur).
`,
  summaryMd: r`
- **Conseil constitutionnel** : constitutionnalité des lois, contentieux électoral, résultats définitifs de la présidentielle.
- Juridictions suprêmes : **Cour de cassation** (judiciaire), **Conseil d'État** (administratif), **Cour des comptes** (finances publiques).
- Tribunaux de première instance, tribunaux de commerce, **juge des enfants**, **cours d'appel**.
- Haute Cour de justice.
- Principes : égalité, **présomption d'innocence**, droit à la défense, double degré, publicité.
- Auxiliaires : avocats, huissiers, notaires, greffiers.
- Interdit : se faire justice soi-même.
`,
  questions: [
    { type: 'MCQ', prompt: r`Le sommet de l'ordre judiciaire est :`, choices: ['la Cour de cassation', 'le Conseil d’État'], answer: { index: 0 }, explanation: r`Juridiction suprême.` },
    { type: 'MCQ', prompt: r`Les litiges entre un citoyen et l'administration relèvent :`, choices: ['de l’ordre administratif (Conseil d’État)', 'du tribunal de commerce'], answer: { index: 0 }, explanation: r`Ordre administratif.` },
    { type: 'MCQ', prompt: r`La Cour des comptes contrôle :`, choices: ['les finances publiques', 'les examens'], answer: { index: 0 }, explanation: r`Bonne gestion de l'argent public.` },
    { type: 'MCQ', prompt: r`Le Conseil constitutionnel :`, choices: ['contrôle la conformité des lois à la Constitution', 'juge les vols'], answer: { index: 0 }, explanation: r`Et le contentieux électoral.` },
    { type: 'MCQ', prompt: r`Un mineur en conflit avec la loi relève :`, choices: ['du juge des enfants', 'de la Cour des comptes'], answer: { index: 0 }, explanation: r`Juridiction spécialisée.` },
    { type: 'MCQ', prompt: r`Faire appel d'un jugement, c'est :`, choices: ['demander qu’il soit rejugé par une cour d’appel', 'l’accepter'], answer: { index: 0 }, explanation: r`Double degré de juridiction.` },
    { type: 'MCQ', prompt: r`La présomption d'innocence signifie :`, choices: ['qu’on est innocent tant que la culpabilité n’est pas prouvée par un jugement', 'qu’un suspect est coupable'], answer: { index: 0 }, explanation: r`Principe fondamental.` },
    { type: 'MCQ', prompt: r`L'auxiliaire de justice qui défend un accusé est :`, choices: ['l’avocat', 'le notaire'], answer: { index: 0 }, explanation: r`Droit à la défense.` },
    { type: 'MCQ', prompt: r`Le notaire établit notamment :`, choices: ['des actes de vente de terrain', 'des certificats médicaux'], answer: { index: 0 }, explanation: r`Actes authentiques.` },
    { type: 'MCQ', prompt: r`Le lynchage d'un voleur présumé est :`, choices: ['une infraction', 'une forme de justice légale'], answer: { index: 0 }, explanation: r`On ne se fait pas justice soi-même.` },
    { type: 'MCQ', prompt: r`Les litiges entre commerçants relèvent :`, choices: ['du tribunal de commerce', 'du Conseil constitutionnel'], answer: { index: 0 }, explanation: r`Juridiction spécialisée.` },
    { type: 'MCQ', prompt: r`La Haute Cour de justice peut juger :`, choices: ['le président de la République pour haute trahison', 'les élèves'], answer: { index: 0 }, explanation: r`Juridiction politique.` },
    { type: 'MCQ', prompt: r`L'indépendance de la justice signifie :`, choices: ['que les juges ne reçoivent pas d’ordres du gouvernement pour juger', 'que les juges ne respectent pas la loi'], answer: { index: 0 }, explanation: r`Séparation des pouvoirs.` },
    { type: 'MCQ', prompt: r`L'huissier de justice :`, choices: ['fait exécuter les décisions de justice', 'rédige les lois'], answer: { index: 0 }, explanation: r`Auxiliaire de justice.` },
    { type: 'OPEN', prompt: r`Cite deux principes de la justice.`, answer: { model: 'Égalité devant la loi, présomption d’innocence, droit à la défense, double degré de juridiction.', keywords: ['égalité', 'présomption', 'défense'] }, explanation: r`Garanties du justiciable.` },
  ],
  assessment: devoirEDHC(
    'Les institutions juridictionnelles',
    [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Le Conseil d'État est le sommet de l'ordre :`, type: 'MCQ', choices: ['administratif', 'judiciaire'], answer: { index: 0 }, points: 2, correction: r`Litiges avec l'administration.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Les résultats définitifs de l'élection présidentielle sont proclamés par :`, type: 'MCQ', choices: ['le Conseil constitutionnel', 'la Cour des comptes'], answer: { index: 0 }, points: 2, correction: r`Contentieux électoral.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Le droit de faire rejuger une affaire s'appelle :`, type: 'MCQ', choices: ['le double degré de juridiction', 'la présomption d’innocence'], answer: { index: 0 }, points: 2, correction: r`Appel.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`**Situation.** Dans un quartier, un jeune de 16 ans est accusé d'avoir volé un téléphone. Des habitants veulent le frapper « pour donner l'exemple ». Un passant s'interpose et appelle la police.`, prompt: r`1. Les habitants ont-ils le droit de punir eux-mêmes ce jeune ? Justifie.`, type: 'OPEN', answer: { model: 'Non : se faire justice soi-même est interdit ; présomption d’innocence.' }, points: 4, correction: r`Non *(1 pt)* : la justice populaire est une infraction ; le jeune est présumé innocent et seul un juge peut le sanctionner *(3 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Quelle juridiction est compétente pour juger ce jeune ? Pourquoi ?`, type: 'OPEN', answer: { model: 'Le juge des enfants, car il est mineur' }, points: 4, correction: r`Le juge des enfants / tribunal pour enfants *(2 pts)*, car il a moins de 18 ans *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Quels droits ce jeune conserve-t-il pendant la procédure ?`, type: 'OPEN', answer: { model: 'Présomption d’innocence, droit à un avocat, protection en tant que mineur, droit de faire appel' }, points: 3, correction: r`Trois droits exacts (1 pt chacun).` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Que penses-tu de l'attitude du passant ?`, type: 'OPEN', answer: { model: 'Attitude citoyenne : il protège la vie et respecte la loi.' }, points: 3, correction: r`Attitude citoyenne et responsable : il protège une vie et fait appel aux autorités *(3 pts)*.` },
    ],
    r`### 🎯 Conseils méthodologiques
1. Identifie le **type de litige** (pénal, civil, administratif, commercial, mineur) pour trouver la bonne juridiction.
2. Cite les **principes** de la justice dans tes justifications.`,
  ),
};

export const scrutinElectoral: SeedChapter = {
  subject: 'EDHC',
  order: 6,
  title: 'Le scrutin électoral',
  minutes: 120,
  officialRef: `${REF}, compétence 2, leçon 6`,
  objectives: [
    'Connaître les types d’élections et les conditions pour voter',
    'Décrire le déroulement d’un scrutin',
    'Adopter un comportement citoyen avant, pendant et après le vote',
  ],
  courseMd: r`
> **Situation.** Ama vient d'avoir 18 ans. Elle se demande si elle peut voter à la prochaine élection et comment se passe le vote.

## 1. Définitions
- Une **élection** permet aux citoyens de **choisir leurs représentants**.
- Le **scrutin** est l'ensemble des opérations de vote.
- Le **suffrage** est le vote. Il est **universel** (tous les citoyens remplissant les conditions), **égal** (une personne, une voix), **secret**, **personnel** ; il est **direct** (les électeurs choisissent eux-mêmes) ou **indirect** (par l'intermédiaire de grands électeurs).

## 2. Les élections en Côte d'Ivoire
| Élection | Élus | Durée du mandat |
|---|---|---|
| Présidentielle | Président de la République (suffrage universel direct, scrutin majoritaire à deux tours) | 5 ans, rééligible une fois |
| Législatives | Députés de l'Assemblée nationale | 5 ans |
| Sénatoriales | Sénateurs (deux tiers élus au suffrage indirect, un tiers nommés par le président) | 5 ans |
| Municipales | Conseillers municipaux et maire | 5 ans |
| Régionales | Conseillers régionaux et président du conseil régional | 5 ans |

L'organisation est confiée à la **Commission électorale indépendante (CEI)**.

## 3. Conditions pour voter
- Être de **nationalité ivoirienne**.
- Avoir **18 ans** révolus.
- Jouir de ses droits civils et politiques.
- Être **inscrit sur la liste électorale** et posséder sa **carte d'électeur** et une pièce d'identité.

## 4. Le déroulement du scrutin
1. **Inscription** sur la liste électorale et retrait de la carte d'électeur.
2. **Campagne électorale** : les candidats présentent leurs programmes ; elle s'arrête la veille du vote.
3. **Jour du vote** : au **bureau de vote**, l'électeur présente ses papiers, prend son bulletin, passe dans l'**isoloir** (vote secret), glisse son bulletin dans l'**urne** transparente, signe la liste d'émargement ; son doigt est marqué à l'**encre indélébile**.
4. **Dépouillement** public à la fermeture du bureau, en présence des représentants des candidats ; un **procès-verbal** est signé.
5. **Proclamation** des résultats provisoires par la CEI ; pour la présidentielle, les résultats **définitifs** sont proclamés par le **Conseil constitutionnel**, qui juge aussi les recours.

## 5. Le comportement du citoyen
Avant : s'inscrire, s'informer sur les programmes. Pendant : voter librement, dans le calme, refuser l'achat de conscience. Après : accepter les résultats, utiliser les **recours légaux** en cas de contestation, refuser la violence.
`,
  summaryMd: r`
- Suffrage : universel, égal, secret, personnel ; direct ou indirect.
- Présidentielle : suffrage universel direct, 2 tours, **5 ans**, rééligible une fois.
- Organisation : **CEI** ; résultats définitifs de la présidentielle : **Conseil constitutionnel**.
- Pour voter : ivoirien, **18 ans**, droits civiques, **inscrit**, carte d'électeur.
- Étapes : inscription → campagne → vote (isoloir, urne, encre) → dépouillement public → proclamation.
- Citoyen : voter librement, refuser l'achat de vote, accepter les résultats, recours légaux.
`,
  questions: [
    { type: 'NUMERIC', prompt: r`Âge minimum pour voter en Côte d'Ivoire ?`, answer: { value: 18 }, explanation: r`18 ans révolus.` },
    { type: 'MCQ', prompt: r`Les élections sont organisées par :`, choices: ['la CEI', 'la SODECI'], answer: { index: 0 }, explanation: r`Commission électorale indépendante.` },
    { type: 'NUMERIC', prompt: r`Durée (en années) du mandat présidentiel ?`, answer: { value: 5 }, explanation: r`Rééligible une fois.` },
    { type: 'MCQ', prompt: r`Le président de la République est élu au suffrage :`, choices: ['universel direct', 'indirect'], answer: { index: 0 }, explanation: r`Par tous les électeurs.` },
    { type: 'MCQ', prompt: r`L'isoloir garantit :`, choices: ['le secret du vote', 'la rapidité du vote'], answer: { index: 0 }, explanation: r`Vote libre.` },
    { type: 'MCQ', prompt: r`Le dépouillement est :`, choices: ['public', 'secret'], answer: { index: 0 }, explanation: r`Transparence.` },
    { type: 'MCQ', prompt: r`Les résultats définitifs de la présidentielle sont proclamés par :`, choices: ['le Conseil constitutionnel', 'la CEI'], answer: { index: 0 }, explanation: r`La CEI donne les résultats provisoires.` },
    { type: 'MCQ', prompt: r`L'encre indélébile sert à :`, choices: ['empêcher de voter deux fois', 'décorer le doigt'], answer: { index: 0 }, explanation: r`Contre la fraude.` },
    { type: 'MCQ', prompt: r`Pour voter, il faut être :`, choices: ['inscrit sur la liste électorale', 'membre d’un parti'], answer: { index: 0 }, explanation: r`Condition obligatoire.` },
    { type: 'MCQ', prompt: r`« Une personne, une voix » correspond au suffrage :`, choices: ['égal', 'indirect'], answer: { index: 0 }, explanation: r`Égalité des électeurs.` },
    { type: 'MCQ', prompt: r`La campagne électorale s'arrête :`, choices: ['la veille du scrutin', 'après les résultats'], answer: { index: 0 }, explanation: r`Jour de réflexion.` },
    { type: 'MCQ', prompt: r`Vendre son vote contre de l'argent est :`, choices: ['interdit et incivique', 'un droit'], answer: { index: 0 }, explanation: r`Achat de conscience.` },
    { type: 'MCQ', prompt: r`En cas de contestation des résultats, il faut :`, choices: ['utiliser les recours légaux', 'casser les bureaux de vote'], answer: { index: 0 }, explanation: r`Voie pacifique.` },
    { type: 'MCQ', prompt: r`Les députés siègent à :`, choices: ['l’Assemblée nationale', 'la Cour des comptes'], answer: { index: 0 }, explanation: r`Pouvoir législatif.` },
    { type: 'OPEN', prompt: r`Décris ce que fait un électeur dans le bureau de vote.`, answer: { model: 'Présente ses papiers, prend son bulletin, passe dans l’isoloir, met son bulletin dans l’urne, signe, son doigt est marqué à l’encre.', keywords: ['isoloir', 'urne', 'encre'] }, explanation: r`Étapes du vote.` },
  ],
  assessment: devoirEDHC(
    'Le scrutin électoral',
    [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Le vote est secret grâce à :`, type: 'MCQ', choices: ['l’isoloir', 'l’urne transparente'], answer: { index: 0 }, points: 2, correction: r`Isoloir.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Le mandat présidentiel dure :`, type: 'MCQ', choices: ['5 ans', '7 ans'], answer: { index: 0 }, points: 2, correction: r`Constitution de 2016.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. L'organe chargé d'organiser les élections est :`, type: 'MCQ', choices: ['la CEI', 'le Sénat'], answer: { index: 0 }, points: 2, correction: r`Commission électorale indépendante.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`**Situation.** Ama, 18 ans, n'est pas inscrite sur la liste électorale. Le jour du vote, un militant lui propose 5 000 FCFA pour voter à la place de sa grande sœur absente, avec la carte de celle-ci.`, prompt: r`1. Ama peut-elle voter ? Justifie.`, type: 'OPEN', answer: { model: 'Non : elle n’est pas inscrite sur la liste électorale.' }, points: 3, correction: r`Non *(1 pt)* : il faut être inscrit sur la liste électorale *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Quelles fautes la proposition du militant comporte-t-elle ?`, type: 'OPEN', answer: { model: 'Achat de vote ; fraude (voter à la place d’une autre personne)' }, points: 4, correction: r`Achat de conscience *(2 pts)* ; fraude électorale (vote personnel violé, usurpation) *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Quelles en seraient les conséquences pour la démocratie ?`, type: 'OPEN', answer: { model: 'Résultats faussés, contestations, violences' }, points: 3, correction: r`Résultats faussés, perte de confiance, contestations et risques de violences (1 pt par idée).` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Donne deux conseils à Ama pour les prochaines élections.`, type: 'OPEN', answer: { model: 'S’inscrire sur la liste électorale ; refuser l’argent ; s’informer sur les programmes' }, points: 4, correction: r`Deux conseils pertinents (2 pts chacun).` },
    ],
    r`### 🎯 Conseils méthodologiques
1. Rappelle les **conditions** pour voter et les **caractères** du suffrage.
2. Identifie clairement les **fraudes** et leurs conséquences.`,
  ),
};

export const civismeFiscal: SeedChapter = {
  subject: 'EDHC',
  order: 7,
  title: 'Le civisme fiscal',
  minutes: 120,
  officialRef: `${REF}, compétence 2, leçon 7`,
  objectives: [
    'Définir l’impôt, la taxe et le civisme fiscal',
    'Identifier les principaux impôts et l’utilisation des recettes fiscales',
    'Dénoncer l’incivisme fiscal et adopter une attitude responsable',
  ],
  courseMd: r`
> **Situation.** Un commerçant d'Adjamé refuse de payer ses impôts : « L'État ne fait rien pour moi ! » Pourtant, il utilise chaque jour la route bitumée, et ses enfants vont à l'école publique. A-t-il raison ?

## 1. Définitions
- Un **impôt** est un prélèvement **obligatoire** effectué par l'État sur les revenus, les biens ou la consommation des citoyens et des entreprises, **sans contrepartie directe**.
- Une **taxe** est un prélèvement lié à un service rendu (taxe de marché, taxe d'enlèvement des ordures…).
- Le **civisme fiscal** est l'attitude du citoyen qui **déclare** et **paie** régulièrement et honnêtement ses impôts et taxes.

## 2. Les principaux impôts et taxes
- **Impôts directs** (payés directement par le contribuable) : impôt sur les **salaires** (ITS), impôt sur les **bénéfices** des entreprises, **impôt foncier** (sur les terrains et immeubles), contribution des patentes.
- **Impôts indirects** (inclus dans les prix) : **TVA** (taxe sur la valeur ajoutée, au taux normal de **18 %**), droits de **douane**, taxes sur certains produits (carburant, tabac, boissons).
- **Taxes locales** perçues par les communes (marchés, stationnement, publicité).

Les services chargés de collecter : la **Direction générale des Impôts (DGI)**, la **Direction générale des Douanes**, le **Trésor public** et les **mairies**. Chaque contribuable a un **numéro de compte contribuable** ; de nombreuses démarches se font en ligne.

## 3. À quoi servent les impôts ?
Ils financent le **budget de l'État** et des collectivités : écoles, hôpitaux, routes, ponts, électricité, eau potable, salaires des enseignants, des médecins, des militaires, sécurité, justice, aides sociales.

## 4. L'incivisme fiscal
- **Fraude fiscale** : fausse déclaration, dissimulation de revenus, fausses factures.
- **Évasion fiscale**, **contrebande**, refus de payer.
- **Corruption** des agents.
Conséquences : moins de ressources pour l'État, services publics de mauvaise qualité, injustice (les honnêtes paient pour les autres), sanctions (amendes, fermeture, prison).

## 5. Le citoyen responsable
Déclarer ses revenus et activités, payer à temps, exiger une **facture** ou un **reçu**, refuser la corruption, signaler la fraude, veiller à la bonne utilisation de l'argent public.

Réponse à la situation : **non**, les routes et écoles qu'il utilise sont financées par les impôts.
`,
  summaryMd: r`
- Impôt : prélèvement obligatoire, sans contrepartie directe ; taxe : liée à un service.
- Directs : ITS, impôt sur les bénéfices, impôt foncier, patentes ; indirects : **TVA (18 %)**, douane.
- Collecte : DGI, Douanes, Trésor, mairies.
- Utilisation : écoles, hôpitaux, routes, salaires des agents publics, sécurité.
- Incivisme : fraude, évasion, contrebande, corruption → sanctions.
- Civisme fiscal : déclarer, payer, exiger une facture, refuser la corruption.
`,
  questions: [
    { type: 'MCQ', prompt: r`Un impôt est :`, choices: ['un prélèvement obligatoire', 'un don volontaire'], answer: { index: 0 }, explanation: r`Sans contrepartie directe.` },
    { type: 'NUMERIC', prompt: r`Taux normal de la TVA en Côte d'Ivoire (en %) ?`, answer: { value: 18 }, explanation: r`Taxe sur la valeur ajoutée.` },
    { type: 'MCQ', prompt: r`La TVA est un impôt :`, choices: ['indirect', 'direct'], answer: { index: 0 }, explanation: r`Incluse dans le prix.` },
    { type: 'MCQ', prompt: r`L'impôt foncier porte sur :`, choices: ['les terrains et immeubles', 'les salaires'], answer: { index: 0 }, explanation: r`Propriété immobilière.` },
    { type: 'MCQ', prompt: r`La DGI est :`, choices: ['la Direction générale des Impôts', 'une banque'], answer: { index: 0 }, explanation: r`Collecte des impôts.` },
    { type: 'MCQ', prompt: r`Les impôts servent notamment à :`, choices: ['construire des écoles et des routes', 'enrichir les fraudeurs'], answer: { index: 0 }, explanation: r`Services publics.` },
    { type: 'MCQ', prompt: r`Dissimuler ses revenus aux impôts est :`, choices: ['de la fraude fiscale', 'du civisme fiscal'], answer: { index: 0 }, explanation: r`Infraction.` },
    { type: 'MCQ', prompt: r`La contrebande consiste à :`, choices: ['faire entrer des marchandises sans payer les droits de douane', 'payer ses impôts en avance'], answer: { index: 0 }, explanation: r`Incivisme.` },
    { type: 'MCQ', prompt: r`Exiger une facture permet :`, choices: ['de lutter contre la fraude', 'de payer plus cher'], answer: { index: 0 }, explanation: r`Traçabilité.` },
    { type: 'MCQ', prompt: r`La taxe de marché est perçue par :`, choices: ['la mairie', 'l’ONU'], answer: { index: 0 }, explanation: r`Taxe locale.` },
    { type: 'MCQ', prompt: r`Les droits de douane sont perçus sur :`, choices: ['les marchandises importées ou exportées', 'les notes des élèves'], answer: { index: 0 }, explanation: r`Commerce extérieur.` },
    { type: 'MCQ', prompt: r`Une conséquence de la fraude fiscale :`, choices: ['moins d’argent pour les services publics', 'plus d’hôpitaux'], answer: { index: 0 }, explanation: r`Manque à gagner.` },
    { type: 'MCQ', prompt: r`L'ITS est un impôt sur :`, choices: ['les traitements et salaires', 'les voitures'], answer: { index: 0 }, explanation: r`Retenu sur le salaire.` },
    { type: 'NUMERIC', prompt: r`TVA à 18 % sur un article vendu 10 000 FCFA hors taxe : montant de la TVA (FCFA) ?`, answer: { value: 1800 }, explanation: r`$10\,000 \times 0{,}18$.` },
    { type: 'OPEN', prompt: r`Explique pourquoi payer ses impôts est un acte de citoyenneté.`, answer: { model: 'Les impôts financent les services publics utilisés par tous ; c’est une contribution à l’effort commun.', keywords: ['services publics', 'tous'] }, explanation: r`Solidarité nationale.` },
  ],
  assessment: devoirEDHC(
    'Le civisme fiscal',
    [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. La TVA est :`, type: 'MCQ', choices: ['un impôt indirect', 'un impôt sur le revenu'], answer: { index: 0 }, points: 2, correction: r`Payée lors de l'achat.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. La fraude fiscale est :`, type: 'MCQ', choices: ['punie par la loi', 'autorisée'], answer: { index: 0 }, points: 2, correction: r`Sanctions.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Les recettes fiscales financent :`, type: 'MCQ', choices: ['les services publics', 'les partis politiques uniquement'], answer: { index: 0 }, points: 2, correction: r`Budget de l'État.` },
      { section: 'Exercice 2 (14 pts)', sectionIntro: r`**Situation.** Un commerçant d'Adjamé refuse de payer ses impôts et ne délivre jamais de facture. Il dit : « L'État ne fait rien pour moi. » Pourtant, il utilise la route bitumée et ses enfants fréquentent l'école publique.`, prompt: r`1. Comment appelle-t-on le comportement de ce commerçant ?`, type: 'OPEN', answer: { model: 'Incivisme fiscal / fraude fiscale' }, points: 3, correction: r`Incivisme fiscal (fraude fiscale).` },
      { section: 'Exercice 2 (14 pts)', prompt: r`2. Montre que son argument est faux.`, type: 'OPEN', answer: { model: 'Il bénéficie de la route et de l’école financées par les impôts.' }, points: 4, correction: r`Il profite de services publics (route, école) *(2 pts)* financés par les impôts payés par d'autres *(2 pts)*.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`3. Quelles conséquences ce comportement a-t-il pour la société ?`, type: 'OPEN', answer: { model: 'Moins de ressources, services publics dégradés, injustice' }, points: 4, correction: r`Moins de recettes, services publics de moindre qualité, injustice envers les contribuables honnêtes (≈ 1,5 pt par idée).` },
      { section: 'Exercice 2 (14 pts)', prompt: r`4. Quelle attitude doit-il adopter ?`, type: 'OPEN', answer: { model: 'Déclarer, payer ses impôts, délivrer des factures' }, points: 3, correction: r`Déclarer son activité, payer ses impôts à temps, délivrer des factures (1 pt chacun).` },
    ],
    r`### 🎯 Conseils méthodologiques
1. Utilise le vocabulaire exact : impôt, taxe, fraude, civisme fiscal.
2. Montre le lien **impôts → services publics**.`,
  ),
};
