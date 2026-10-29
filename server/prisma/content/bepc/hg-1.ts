import { SeedChapter } from '../types';

const r = String.raw;
const REF = 'Programme d’Histoire-Géographie 3e (DPFC) — progression 2026-2027, Histoire';

export const imperialisme: SeedChapter = {
  subject: 'HG',
  order: 1,
  title: 'Le mouvement impérialiste et la colonisation',
  minutes: 240,
  isFree: true,
  officialRef: `${REF}, thème 1, leçon 1`,
  objectives: [
    'Expliquer les causes de l’impérialisme européen au XIXe siècle',
    'Décrire le partage de l’Afrique et la conquête coloniale',
    'Présenter la colonisation de la Côte d’Ivoire et le système colonial',
  ],
  courseMd: r`
> **Situation.** À Grand-Bassam, ville historique inscrite au patrimoine mondial de l'UNESCO, le Palais du gouverneur rappelle que la Côte d'Ivoire a été une colonie française. Comment et pourquoi les Européens ont-ils colonisé l'Afrique ?

## 1. Les causes de l'impérialisme
L'**impérialisme** est la volonté d'une puissance d'étendre sa domination sur d'autres territoires. À la fin du XIXᵉ siècle, les pays européens industrialisés (Grande-Bretagne, France, Allemagne, Belgique, Portugal…) se lancent à la conquête de l'Afrique.
- **Causes économiques** : rechercher des **matières premières** (caoutchouc, huile de palme, bois, minerais), des **débouchés** pour les produits industriels, des lieux d'investissement pour les capitaux.
- **Causes politiques** : la **rivalité** et le **prestige** entre puissances européennes, la recherche de points stratégiques.
- **Causes démographiques** : trouver des terres pour une population européenne en forte croissance.
- **Causes idéologiques et religieuses** : la prétendue « **mission civilisatrice** », fondée sur des idées racistes, et l'action des missionnaires chrétiens.
- **Moyens** : les progrès techniques (bateau à vapeur, armes modernes, médicaments comme la quinine) et les explorations (René Caillié, Louis-Gustave Binger…).

## 2. Le partage de l'Afrique
La **conférence de Berlin** (novembre 1884 – février 1885) fixe les règles du partage : pour revendiquer un territoire, une puissance doit l'**occuper effectivement** et **notifier** son occupation aux autres. Les frontières sont tracées par les Européens, souvent sans tenir compte des peuples africains.

La conquête se fait :
- par des **traités** de protectorat signés (souvent sous la contrainte ou par ruse) avec des chefs africains ;
- par la **force militaire**.

Des Africains **résistent** : Samory Touré (capturé en 1898), Béhanzin au Dahomey, Lat Dior au Sénégal ; en Côte d'Ivoire, les résistances baoulé, gouro, abbey (1910), bété, et d'autres peuples retardent la conquête jusque vers 1915.

## 3. La colonisation de la Côte d'Ivoire
- Le **10 mars 1893**, la Côte d'Ivoire devient une **colonie française** ; **Louis-Gustave Binger** en est le premier gouverneur.
- Capitales successives : **Grand-Bassam** (1893), **Bingerville** (1900, après une épidémie de fièvre jaune), puis **Abidjan** (1934).
- La colonie fait partie de l'**Afrique-Occidentale française (AOF)**, créée en 1895, dirigée par un gouverneur général installé à Dakar.

## 4. Le système colonial
- **Administration directe** : gouverneur, commandants de cercle, chefs de canton nommés.
- **Code de l'indigénat** : sanctions sans jugement contre les « indigènes ».
- **Impôt de capitation** (par personne) et **travail forcé** (routes, chemin de fer Abidjan-Niger, plantations).
- **Économie de traite** : les colonies produisent des matières premières pour la métropole (café, cacao, bois) et achètent ses produits manufacturés.
- Quelques écoles, dispensaires et infrastructures (port, wharfs, routes) au service surtout de l'exploitation.

## 5. Conséquences
Pertes humaines et souffrances, bouleversement des sociétés, frontières artificielles, économie tournée vers l'exportation ; mais aussi naissance d'une élite instruite qui mènera la lutte pour l'indépendance.
`,
  summaryMd: r`
| Repère | Date |
|---|---|
| Conférence de Berlin | 1884-1885 |
| Création de l'AOF | 1895 |
| Côte d'Ivoire colonie française (Binger gouverneur) | 10 mars 1893 |
| Capitale Bingerville | 1900 |
| Capitale Abidjan | 1934 |
| Capture de Samory Touré | 1898 |

- Causes : **économiques** (matières premières, débouchés), **politiques** (rivalités), **démographiques**, **idéologiques** (« mission civilisatrice »).
- Conquête : traités + force ; résistances africaines.
- Système colonial : indigénat, impôt de capitation, **travail forcé**, économie de traite.
`,
  questions: [
    { type: 'MCQ', prompt: r`La conférence de Berlin s'est tenue en :`, choices: ['1884-1885', '1914-1918', '1960'], answer: { index: 0 }, explanation: r`Règles du partage de l'Afrique.` },
    { type: 'MCQ', prompt: r`La Côte d'Ivoire devient colonie française le :`, choices: ['10 mars 1893', '7 août 1960', '4 décembre 1958'], answer: { index: 0 }, explanation: r`Binger premier gouverneur.` },
    { type: 'MCQ', prompt: r`Le premier gouverneur de la Côte d'Ivoire est :`, choices: ['Louis-Gustave Binger', 'Félix Houphouët-Boigny', 'Samory Touré'], answer: { index: 0 }, explanation: r`Explorateur devenu gouverneur.` },
    { type: 'MCQ', prompt: r`La première capitale de la colonie est :`, choices: ['Grand-Bassam', 'Abidjan', 'Yamoussoukro'], answer: { index: 0 }, explanation: r`Puis Bingerville (1900), Abidjan (1934).` },
    { type: 'NUMERIC', prompt: r`En quelle année Abidjan devient-elle la capitale de la colonie ?`, answer: { value: 1934 }, explanation: r`Après Bingerville.` },
    { type: 'MCQ', prompt: r`Une cause économique de l'impérialisme est :`, choices: ['la recherche de matières premières', 'la mission civilisatrice', 'le prestige'], answer: { index: 0 }, explanation: r`Et de débouchés.` },
    { type: 'MCQ', prompt: r`La « mission civilisatrice » est une justification :`, choices: ['idéologique', 'économique', 'démographique'], answer: { index: 0 }, explanation: r`Fondée sur des idées racistes.` },
    { type: 'MCQ', prompt: r`Pour revendiquer un territoire après Berlin, il faut :`, choices: ['l’occuper effectivement', 'l’acheter', 'y envoyer un explorateur seulement'], answer: { index: 0 }, explanation: r`Occupation effective et notification.` },
    { type: 'MCQ', prompt: r`L'AOF était dirigée depuis :`, choices: ['Dakar', 'Abidjan', 'Bamako'], answer: { index: 0 }, explanation: r`Gouverneur général.` },
    { type: 'MCQ', prompt: r`Samory Touré a été capturé en :`, choices: ['1898', '1945', '1960'], answer: { index: 0 }, explanation: r`Grande figure de la résistance.` },
    { type: 'MCQ', prompt: r`L'impôt de capitation était un impôt :`, choices: ['par personne', 'sur les bénéfices', 'sur les voitures'], answer: { index: 0 }, explanation: r`Payé par chaque adulte.` },
    { type: 'MCQ', prompt: r`L'économie de traite consiste à :`, choices: ['produire des matières premières pour la métropole', 'industrialiser les colonies'], answer: { index: 0 }, explanation: r`Exportation de produits bruts.` },
    { type: 'MCQ', prompt: r`Le code de l'indigénat permettait :`, choices: ['de punir sans jugement', 'de voter librement'], answer: { index: 0 }, explanation: r`Régime d'exception.` },
    { type: 'MCQ', prompt: r`La capitale fut transférée à Bingerville à cause :`, choices: ['d’une épidémie de fièvre jaune à Grand-Bassam', 'd’un tremblement de terre'], answer: { index: 0 }, explanation: r`Épidémie de 1899.` },
    { type: 'OPEN', prompt: r`Cite deux formes de l'exploitation coloniale en Côte d'Ivoire.`, answer: { model: 'Travail forcé, impôt de capitation, cultures d’exportation imposées.', keywords: ['travail forcé', 'impôt', 'cultures'] }, explanation: r`Système colonial.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Le mouvement impérialiste et la colonisation',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.** Réponds avec précision ; pour la rédaction, organise tes idées (introduction, développement, conclusion).`,
    advice: r`### 🎯 Conseils méthodologiques
1. Apprends les **dates repères** : elles rapportent des points faciles.
2. Pour un document : présente-le (nature, auteur, date), puis réponds en citant le texte.
3. Pour la rédaction : une idée par paragraphe, avec des exemples précis.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. La conférence de Berlin date de :`, type: 'MCQ', choices: ['1884-1885', '1893', '1946'], answer: { index: 0 }, points: 2, correction: r`Partage de l'Afrique.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. La Côte d'Ivoire devient colonie française en :`, type: 'MCQ', choices: ['1893', '1900', '1934'], answer: { index: 0 }, points: 2, correction: r`10 mars 1893.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. La capitale passe de Grand-Bassam à Bingerville en :`, type: 'MCQ', choices: ['1900', '1934', '1960'], answer: { index: 0 }, points: 2, correction: r`Après l'épidémie de fièvre jaune.` },
      { section: 'Exercice 2 (8 pts)', sectionIntro: r`**Document.** « Les colonies sont, pour les pays riches, un placement de capitaux des plus avantageux. […] Il faut chercher des débouchés à nos industries. […] Les races supérieures ont un droit vis-à-vis des races inférieures : le devoir de les civiliser. »
— D'après Jules Ferry, discours à la Chambre des députés, 28 juillet 1885.`, prompt: r`1. Relève dans le texte deux causes économiques de la colonisation.`, type: 'OPEN', answer: { model: 'Placement de capitaux ; débouchés pour l’industrie' }, points: 4, correction: r`« placement de capitaux » *(2 pts)* ; « débouchés à nos industries » *(2 pts)*.` },
      { section: 'Exercice 2 (8 pts)', prompt: r`2. Quelle justification idéologique l'auteur avance-t-il ? Qu'en penses-tu ?`, type: 'OPEN', answer: { model: 'La mission civilisatrice, fondée sur une hiérarchie raciste des peuples.' }, points: 4, correction: r`La prétendue « mission civilisatrice » *(2 pts)* ; elle repose sur une idée raciste de supériorité, inacceptable *(2 pts)*.` },
      { section: 'Exercice 3 (6 pts)', prompt: r`Rédige un court texte (10 à 15 lignes) présentant le système colonial en Côte d'Ivoire.`, type: 'OPEN', answer: { model: 'Administration, indigénat, impôt, travail forcé, économie de traite' }, points: 6, correction: r`Introduction (colonie en 1893, AOF) *(1 pt)* ; administration et indigénat *(1,5 pt)* ; impôt de capitation et travail forcé *(1,5 pt)* ; économie de traite *(1 pt)* ; conclusion *(1 pt)*.` },
    ],
  },
};

export const independanceCI: SeedChapter = {
  subject: 'HG',
  order: 2,
  title: 'L’accession de la Côte d’Ivoire à l’indépendance',
  minutes: 240,
  officialRef: `${REF}, thème 1, leçon 2`,
  objectives: [
    'Expliquer le contexte favorable à l’émancipation après 1945',
    'Décrire les étapes de la lutte politique (SAA, PDCI-RDA, loi-cadre, référendum)',
    'Situer la proclamation de l’indépendance et ses premiers pas',
  ],
  courseMd: r`
> **Situation.** Chaque **7 août**, la Côte d'Ivoire fête son indépendance. Comment le pays est-il passé du statut de colonie à celui d'État souverain ?

## 1. Un contexte favorable après la Seconde Guerre mondiale
- Les soldats africains (tirailleurs) ont combattu pour la France ; les colonies ont fourni un lourd **effort de guerre**.
- La **conférence de Brazzaville** (1944) promet des réformes.
- La **Charte de l'ONU** (1945) proclame le droit des peuples à disposer d'eux-mêmes ; les États-Unis et l'URSS sont hostiles à la colonisation.
- Les élites africaines instruites s'organisent.

## 2. Les étapes de la lutte
- **1944** : création du **Syndicat agricole africain (SAA)** par **Félix Houphouët-Boigny**, pour défendre les planteurs africains face aux colons.
- **1945** : Houphouët-Boigny est élu **député** à l'Assemblée constituante française.
- **11 avril 1946** : vote de la **loi Houphouët-Boigny** qui **abolit le travail forcé** dans les colonies françaises.
- **7 mai 1946** : la **loi Lamine Guèye** accorde la citoyenneté aux habitants des colonies.
- **9 avril 1946** : création du **PDCI** (Parti démocratique de Côte d'Ivoire) ; en **octobre 1946**, à Bamako, naissance du **RDA** (Rassemblement démocratique africain) dont le PDCI devient la section ivoirienne.
- **1949-1950** : forte **répression** du RDA par l'administration coloniale (arrestations, incidents meurtriers comme à Dimbokro, Bouaflé, Séguéla) ; en décembre 1949, des femmes marchent sur la prison de Grand-Bassam pour réclamer la libération des militants emprisonnés.
- **1950** : le RDA rompt son alliance avec le Parti communiste français et choisit la coopération avec la France.

## 3. Vers l'autonomie puis l'indépendance
- **1956** : la **loi-cadre Defferre** instaure le **suffrage universel** et des conseils de gouvernement élus dans chaque territoire : c'est l'**autonomie interne**.
- **28 septembre 1958** : **référendum** sur la Communauté française proposée par le général de Gaulle ; la Côte d'Ivoire vote **oui**.
- **4 décembre 1958** : proclamation de la **République de Côte d'Ivoire**, État membre de la Communauté.
- **7 août 1960** : proclamation de l'**indépendance** par Félix Houphouët-Boigny.
- **20 septembre 1960** : la Côte d'Ivoire entre à l'**ONU**.
- **3 novembre 1960** : adoption de la **Constitution** ; le **27 novembre 1960**, Houphouët-Boigny est élu **premier président** de la République.

## 4. Caractères de l'indépendance ivoirienne
L'indépendance a été obtenue de manière **pacifique**, par la **négociation** et les élections, après une période de lutte et de répression. Le pays a maintenu des liens étroits de **coopération** avec la France.
`,
  summaryMd: r`
| Événement | Date |
|---|---|
| Création du SAA | 1944 |
| Création du PDCI | 9 avril 1946 |
| Loi Houphouët-Boigny (abolition du travail forcé) | 11 avril 1946 |
| Naissance du RDA (Bamako) | octobre 1946 |
| Loi-cadre Defferre | 1956 |
| Référendum | 28 septembre 1958 |
| Proclamation de la République | 4 décembre 1958 |
| **Indépendance** | **7 août 1960** |
| Admission à l'ONU | 20 septembre 1960 |
| Constitution | 3 novembre 1960 |

Indépendance **pacifique**, négociée, après la répression de 1949-1950.
`,
  questions: [
    { type: 'MCQ', prompt: r`La Côte d'Ivoire est devenue indépendante le :`, choices: ['7 août 1960', '4 décembre 1958', '10 mars 1893'], answer: { index: 0 }, explanation: r`Fête nationale.` },
    { type: 'MCQ', prompt: r`Le SAA a été créé en 1944 par :`, choices: ['Félix Houphouët-Boigny', 'Binger', 'de Gaulle'], answer: { index: 0 }, explanation: r`Syndicat agricole africain.` },
    { type: 'MCQ', prompt: r`La loi Houphouët-Boigny du 11 avril 1946 :`, choices: ['abolit le travail forcé', 'crée l’AOF', 'proclame l’indépendance'], answer: { index: 0 }, explanation: r`Grande victoire politique.` },
    { type: 'MCQ', prompt: r`Le RDA a été créé en 1946 à :`, choices: ['Bamako', 'Abidjan', 'Paris'], answer: { index: 0 }, explanation: r`Congrès d'octobre 1946.` },
    { type: 'MCQ', prompt: r`La loi-cadre Defferre (1956) instaure :`, choices: ['le suffrage universel et l’autonomie interne', 'le travail forcé', 'l’indigénat'], answer: { index: 0 }, explanation: r`Étape vers l'indépendance.` },
    { type: 'MCQ', prompt: r`Au référendum du 28 septembre 1958, la Côte d'Ivoire vote :`, choices: ['oui', 'non'], answer: { index: 0 }, explanation: r`Entrée dans la Communauté.` },
    { type: 'MCQ', prompt: r`La République de Côte d'Ivoire est proclamée le :`, choices: ['4 décembre 1958', '7 août 1960'], answer: { index: 0 }, explanation: r`État membre de la Communauté.` },
    { type: 'MCQ', prompt: r`Le PDCI a été créé le :`, choices: ['9 avril 1946', '7 août 1960'], answer: { index: 0 }, explanation: r`Parti démocratique de Côte d'Ivoire.` },
    { type: 'MCQ', prompt: r`La conférence de Brazzaville a eu lieu en :`, choices: ['1944', '1958', '1885'], answer: { index: 0 }, explanation: r`Promesses de réformes.` },
    { type: 'MCQ', prompt: r`En décembre 1949, des femmes ont marché sur la prison de :`, choices: ['Grand-Bassam', 'Korhogo', 'Man'], answer: { index: 0 }, explanation: r`Pour libérer les militants.` },
    { type: 'NUMERIC', prompt: r`En quelle année la Côte d'Ivoire est-elle entrée à l'ONU ?`, answer: { value: 1960 }, explanation: r`20 septembre 1960.` },
    { type: 'MCQ', prompt: r`L'indépendance ivoirienne a été obtenue :`, choices: ['de manière pacifique et négociée', 'après une longue guerre'], answer: { index: 0 }, explanation: r`Caractère de l'indépendance.` },
    { type: 'MCQ', prompt: r`Le premier président de la République de Côte d'Ivoire est :`, choices: ['Félix Houphouët-Boigny', 'Henri Konan Bédié', 'Robert Guéi'], answer: { index: 0 }, explanation: r`Élu le 27 novembre 1960.` },
    { type: 'MCQ', prompt: r`La loi Lamine Guèye (1946) :`, choices: ['accorde la citoyenneté aux habitants des colonies', 'abolit l’AOF'], answer: { index: 0 }, explanation: r`7 mai 1946.` },
    { type: 'OPEN', prompt: r`Cite deux facteurs qui ont favorisé l'émancipation après 1945.`, answer: { model: 'Participation des Africains à la guerre, Charte de l’ONU, conférence de Brazzaville, action des élites.', keywords: ['guerre', 'ONU', 'Brazzaville'] }, explanation: r`Contexte international et local.` },
  ],
  assessment: {
    title: 'Devoir BEPC — L’accession de la Côte d’Ivoire à l’indépendance',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Construis une **frise chronologique** de 1944 à 1960 : elle t'aide à ordonner les étapes.
2. Dans la rédaction, montre le passage **colonie → autonomie → indépendance**.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. L'abolition du travail forcé date du :`, type: 'MCQ', choices: ['11 avril 1946', '7 août 1960', '28 septembre 1958'], answer: { index: 0 }, points: 2, correction: r`Loi Houphouët-Boigny.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. L'autonomie interne résulte de :`, type: 'MCQ', choices: ['la loi-cadre Defferre (1956)', 'la conférence de Berlin'], answer: { index: 0 }, points: 2, correction: r`Conseils de gouvernement élus.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Range dans l'ordre chronologique : indépendance (A), création du PDCI (B), référendum (C).`, type: 'MCQ', choices: ['B, C, A', 'A, B, C', 'C, B, A'], answer: { index: 0 }, points: 2, correction: r`1946, 1958, 1960.` },
      { section: 'Exercice 2 (8 pts)', sectionIntro: r`**Document.** « Le travail forcé est interdit de façon absolue dans les territoires d'outre-mer. Tous moyens ou procédés de contrainte directe ou indirecte aux fins d'embaucher ou de maintenir sur les lieux de travail un individu non consentant sont interdits. »
— Article 1 et 2 de la loi du 11 avril 1946.`, prompt: r`1. Présente ce document (nature, date) et dis pourquoi il porte le nom de Houphouët-Boigny.`, type: 'OPEN', answer: { model: 'Texte de loi du 11 avril 1946 ; proposée par le député Houphouët-Boigny' }, points: 4, correction: r`Texte de loi (11 avril 1946) *(2 pts)* ; il a été proposé et défendu par le député Félix Houphouët-Boigny *(2 pts)*.` },
      { section: 'Exercice 2 (8 pts)', prompt: r`2. Quelle est l'importance de cette loi pour les populations ivoiriennes ?`, type: 'OPEN', answer: { model: 'Fin d’une exploitation brutale ; popularité du PDCI-RDA ; étape vers l’émancipation' }, points: 4, correction: r`Fin d'une pratique brutale et humiliante *(2 pts)* ; renforce la popularité du PDCI-RDA et ouvre la voie à l'émancipation *(2 pts)*.` },
      { section: 'Exercice 3 (6 pts)', prompt: r`Rédige un court texte présentant les grandes étapes de l'accession de la Côte d'Ivoire à l'indépendance (1944-1960).`, type: 'OPEN', answer: { model: 'SAA, PDCI-RDA, loi 1946, répression, loi-cadre, référendum, 7 août 1960' }, points: 6, correction: r`Contexte *(1 pt)* ; SAA, PDCI-RDA, abolition du travail forcé *(2 pts)* ; répression et loi-cadre *(1,5 pt)* ; référendum, République, indépendance *(1,5 pt)*.` },
    ],
  },
};

export const crisesAfrique: SeedChapter = {
  subject: 'HG',
  order: 3,
  title: 'Causes et caractères des crises sociopolitiques de l’Afrique indépendante',
  minutes: 240,
  officialRef: `${REF}, thème 1, leçon 3`,
  objectives: [
    'Identifier les causes des crises sociopolitiques en Afrique depuis les indépendances',
    'Décrire leurs caractères (coups d’État, guerres civiles, crises postélectorales)',
    'Présenter leurs conséquences et les solutions envisagées',
  ],
  courseMd: r`
> **Situation.** Depuis 1960, de nombreux pays africains, dont la Côte d'Ivoire, ont connu des coups d'État, des rébellions ou des violences après des élections. Pourquoi ces crises et quelles leçons en tirer ?

## 1. Les causes
**Causes héritées de la colonisation :**
- **frontières artificielles** qui regroupent ou séparent des peuples ;
- économies tournées vers l'exportation de matières premières.

**Causes politiques :**
- **partis uniques** et régimes autoritaires après les indépendances ;
- difficultés de la **démocratie** : élections contestées, refus de l'alternance, manipulation des constitutions ;
- **mauvaise gouvernance** : corruption, détournements, injustice.

**Causes économiques et sociales :**
- **pauvreté**, chômage des jeunes, inégalités régionales ;
- lutte pour le contrôle des **ressources** (pétrole, diamants, or, terres).

**Causes identitaires :** instrumentalisation de l'**ethnie**, de la **religion** ou de l'origine régionale par des responsables politiques.

**Causes extérieures :** ingérences étrangères (notamment pendant la **guerre froide**), trafics d'armes.

## 2. Les caractères (formes)
- **Coups d'État militaires** : très nombreux depuis 1960 (Togo 1963, Ghana 1966, Nigeria 1966…) ; en Côte d'Ivoire, coup d'État du **24 décembre 1999**.
- **Guerres civiles et rébellions** : guerre du Biafra au Nigeria (1967-1970), guerres du Liberia (1989-2003) et de Sierra Leone (1991-2002) ; en Côte d'Ivoire, rébellion armée à partir du **19 septembre 2002**, qui coupe le pays en deux.
- **Crises postélectorales** : en Côte d'Ivoire, la crise de **2010-2011** a fait **plus de 3 000 morts** selon les chiffres officiels.
- **Génocide** : au Rwanda en 1994 (voir leçon suivante).
- Manifestations violentes, grèves, conflits fonciers.

## 3. Les conséquences
- Pertes en **vies humaines**, blessés, violences sexuelles, enfants soldats.
- **Réfugiés** et **déplacés internes**.
- Destruction d'infrastructures, **recul économique**, pauvreté.
- Méfiance entre communautés, fragilisation de l'unité nationale.

## 4. Les solutions
- **Dialogue** et **médiations** : Union africaine, **CEDEAO**, ONU (en Côte d'Ivoire : accords de **Linas-Marcoussis** en 2003, **accord politique de Ouagadougou** en 2007 ; mission de l'**ONUCI** de 2004 à 2017).
- **Démocratie** : élections transparentes, respect des résultats et de l'alternance.
- **Bonne gouvernance**, lutte contre la corruption et les inégalités.
- **Justice et réconciliation** : en Côte d'Ivoire, Commission Dialogue, Vérité et Réconciliation (CDVR) créée en 2011.
- **Éducation à la paix** et à la citoyenneté.
`,
  summaryMd: r`
- **Causes** : frontières coloniales, partis uniques et élections contestées, mauvaise gouvernance, pauvreté, contrôle des ressources, instrumentalisation ethnique/religieuse, ingérences étrangères.
- **Caractères** : coups d'État, guerres civiles, rébellions, crises postélectorales, génocide.
- **Côte d'Ivoire** : coup d'État (24 décembre 1999), rébellion (19 septembre 2002), crise postélectorale (2010-2011).
- **Conséquences** : morts, réfugiés, destructions, recul économique.
- **Solutions** : dialogue, médiations (UA, CEDEAO, ONU), démocratie, bonne gouvernance, réconciliation.
`,
  questions: [
    { type: 'MCQ', prompt: r`Une cause héritée de la colonisation est :`, choices: ['les frontières artificielles', 'le multipartisme', 'la ZLECAf'], answer: { index: 0 }, explanation: r`Tracées sans tenir compte des peuples.` },
    { type: 'MCQ', prompt: r`Le coup d'État militaire en Côte d'Ivoire a eu lieu le :`, choices: ['24 décembre 1999', '7 août 1960', '19 septembre 2002'], answer: { index: 0 }, explanation: r`Premier coup d'État du pays.` },
    { type: 'MCQ', prompt: r`La rébellion armée en Côte d'Ivoire commence le :`, choices: ['19 septembre 2002', '24 décembre 1999', '11 avril 2011'], answer: { index: 0 }, explanation: r`Le pays est coupé en deux.` },
    { type: 'MCQ', prompt: r`La crise postélectorale ivoirienne a eu lieu en :`, choices: ['2010-2011', '1990', '1960'], answer: { index: 0 }, explanation: r`Plus de 3 000 morts.` },
    { type: 'MCQ', prompt: r`La guerre du Biafra a eu lieu :`, choices: ['au Nigeria', 'au Ghana', 'au Sénégal'], answer: { index: 0 }, explanation: r`1967-1970.` },
    { type: 'MCQ', prompt: r`La CEDEAO est :`, choices: ['une organisation régionale ouest-africaine', 'un parti politique', 'une ONG française'], answer: { index: 0 }, explanation: r`Elle intervient comme médiatrice.` },
    { type: 'MCQ', prompt: r`Un déplacé interne est une personne qui :`, choices: ['fuit les violences sans quitter son pays', 'quitte son pays'], answer: { index: 0 }, explanation: r`Le réfugié, lui, franchit une frontière.` },
    { type: 'MCQ', prompt: r`L'ONUCI était :`, choices: ['une mission de l’ONU en Côte d’Ivoire', 'un parti politique'], answer: { index: 0 }, explanation: r`2004-2017.` },
    { type: 'MCQ', prompt: r`Les accords de Linas-Marcoussis datent de :`, choices: ['2003', '1993', '2013'], answer: { index: 0 }, explanation: r`Janvier 2003.` },
    { type: 'MCQ', prompt: r`L'accord politique de Ouagadougou date de :`, choices: ['2007', '1999', '2015'], answer: { index: 0 }, explanation: r`Mars 2007.` },
    { type: 'MCQ', prompt: r`Une solution durable aux crises est :`, choices: ['la bonne gouvernance', 'le parti unique', 'la corruption'], answer: { index: 0 }, explanation: r`Avec démocratie et dialogue.` },
    { type: 'MCQ', prompt: r`Instrumentaliser l'ethnie signifie :`, choices: ['l’utiliser pour diviser et mobiliser à des fins politiques', 'l’étudier à l’école'], answer: { index: 0 }, explanation: r`Cause identitaire des crises.` },
    { type: 'MCQ', prompt: r`La CDVR (Côte d'Ivoire) a été créée pour :`, choices: ['favoriser la réconciliation', 'organiser les examens'], answer: { index: 0 }, explanation: r`Dialogue, Vérité et Réconciliation.` },
    { type: 'MCQ', prompt: r`Pendant la guerre froide, les crises africaines ont été aggravées par :`, choices: ['les ingérences des grandes puissances', 'la création de l’UA'], answer: { index: 0 }, explanation: r`Cause extérieure.` },
    { type: 'OPEN', prompt: r`Cite trois conséquences des crises sociopolitiques en Afrique.`, answer: { model: 'Morts, réfugiés et déplacés, destructions, recul économique.', keywords: ['morts', 'réfugiés', 'économique'] }, explanation: r`Humaines, économiques, sociales.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Les crises sociopolitiques de l’Afrique indépendante',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Classe les causes en **catégories** (héritées, politiques, économiques, identitaires, extérieures).
2. Donne des **exemples datés** pour chaque forme de crise.
3. Termine par des **solutions** concrètes.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Un coup d'État est :`, type: 'MCQ', choices: ['une prise du pouvoir par la force', 'une élection régulière'], answer: { index: 0 }, points: 2, correction: r`Définition.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. La crise postélectorale ivoirienne date de :`, type: 'MCQ', choices: ['2010-2011', '2002'], answer: { index: 0 }, points: 2, correction: r`Après l'élection présidentielle de 2010.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Une organisation régionale médiatrice en Afrique de l'Ouest :`, type: 'MCQ', choices: ['la CEDEAO', 'l’OTAN'], answer: { index: 0 }, points: 2, correction: r`Communauté économique des États de l'Afrique de l'Ouest.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`Sujet : « Les crises sociopolitiques en Afrique depuis les indépendances : causes, caractères et solutions. » Rédige un développement structuré.`, type: 'OPEN', answer: { model: 'Introduction ; causes ; caractères avec exemples ; conséquences/solutions ; conclusion' }, points: 14, correction: r`Introduction *(2 pts)* ; causes classées et expliquées *(4 pts)* ; caractères illustrés d'exemples datés *(4 pts)* ; solutions *(2 pts)* ; conclusion et expression *(2 pts)*.` },
    ],
  },
};

export const rwanda: SeedChapter = {
  subject: 'HG',
  order: 4,
  title: 'La crise rwandaise : de la guerre au génocide des Tutsi (1990-1994)',
  minutes: 180,
  officialRef: `${REF}, thème 1, leçon 4`,
  objectives: [
    'Expliquer les origines de la crise rwandaise',
    'Décrire le déroulement de la guerre (1990-1993) et du génocide (avril-juillet 1994)',
    'Présenter les conséquences et la reconstruction',
  ],
  courseMd: r`
> **Situation.** Chaque année, le **7 avril**, le monde commémore le génocide perpétré contre les Tutsi au Rwanda. Comment une telle tragédie a-t-elle été possible ?

## 1. Les origines
- **Pendant la colonisation** (allemande puis **belge**), les colonisateurs ont figé et opposé les catégories sociales **Hutu**, **Tutsi** et **Twa**, qui partageaient pourtant la même langue (kinyarwanda), la même culture et le même territoire. À partir de **1933**, la Belgique impose des **cartes d'identité** portant la mention ethnique.
- **1959** : violences contre les Tutsi ; des dizaines de milliers d'entre eux s'exilent dans les pays voisins (Ouganda, Burundi…).
- **1962** : indépendance. Les régimes successifs pratiquent la **discrimination** des Tutsi (quotas, exclusion) ; les réfugiés ne peuvent pas rentrer.

## 2. La guerre (1990-1993)
- Le **1ᵉʳ octobre 1990**, le **Front patriotique rwandais (FPR)**, formé surtout d'exilés tutsi, attaque le nord du Rwanda depuis l'Ouganda.
- Le régime du président **Juvénal Habyarimana** développe une **propagande** de haine anti-tutsi (journal *Kangura*, puis la radio **RTLM**), arme des **milices** (les **Interahamwe**) et dresse des listes de personnes à tuer.
- **Août 1993** : les **accords d'Arusha** prévoient le partage du pouvoir ; une force de l'ONU, la **MINUAR**, est envoyée.

## 3. Le génocide (avril-juillet 1994)
- Le **6 avril 1994**, l'avion du président Habyarimana est abattu au-dessus de Kigali.
- Dès le **7 avril**, des extrémistes hutu lancent l'extermination **planifiée** des Tutsi et l'assassinat des Hutu opposés à ce projet (Hutu dits « modérés »).
- En **une centaine de jours**, entre **800 000 et un million** de personnes, en très grande majorité tutsi, sont tuées, souvent à la machette, par des militaires, des miliciens et des civils encadrés.
- La communauté internationale **n'intervient pas** efficacement ; la MINUAR voit ses effectifs réduits.
- En **juillet 1994**, le FPR prend le contrôle du pays et met fin au génocide.

Un **génocide** est un crime commis dans l'intention de **détruire**, en tout ou en partie, un groupe national, ethnique, racial ou religieux.

## 4. Les conséquences
- Pays dévasté, orphelins et veuves, traumatismes profonds.
- **Exode** de près de deux millions de Rwandais vers les pays voisins (notamment le Zaïre, actuelle RDC), ce qui déstabilise toute la région des Grands Lacs.
- **Justice** : création par l'ONU du **Tribunal pénal international pour le Rwanda (TPIR)**, à Arusha (novembre 1994) ; au Rwanda, les tribunaux communautaires **gacaca** jugent des centaines de milliers d'accusés.
- **Reconstruction** et **réconciliation** : suppression de la mention ethnique sur les papiers d'identité, devoir de **mémoire**.

**Leçon pour nous :** la haine diffusée par la propagande et l'indifférence peuvent conduire au pire ; il faut refuser toute discrimination.
`,
  summaryMd: r`
| Repère | Date |
|---|---|
| Cartes d'identité ethniques | 1933 |
| Violences et exil des Tutsi | 1959 |
| Attaque du FPR | 1ᵉʳ octobre 1990 |
| Accords d'Arusha | août 1993 |
| Attentat contre l'avion d'Habyarimana | 6 avril 1994 |
| Début du génocide | 7 avril 1994 |
| Fin du génocide (victoire du FPR) | juillet 1994 |
| Création du TPIR | novembre 1994 |

- 800 000 à 1 million de victimes en 100 jours.
- Acteurs : armée, milices **Interahamwe**, propagande **RTLM**.
- Conséquences : réfugiés, instabilité régionale, TPIR, gacaca, réconciliation.
`,
  questions: [
    { type: 'MCQ', prompt: r`Le génocide des Tutsi au Rwanda a commencé le :`, choices: ['7 avril 1994', '1ᵉʳ octobre 1990', '6 août 1945'], answer: { index: 0 }, explanation: r`Au lendemain de l'attentat.` },
    { type: 'MCQ', prompt: r`L'avion du président Habyarimana a été abattu le :`, choices: ['6 avril 1994', '7 août 1960'], answer: { index: 0 }, explanation: r`Au-dessus de Kigali.` },
    { type: 'MCQ', prompt: r`Le FPR attaque le Rwanda depuis l'Ouganda le :`, choices: ['1ᵉʳ octobre 1990', '6 avril 1994'], answer: { index: 0 }, explanation: r`Début de la guerre.` },
    { type: 'MCQ', prompt: r`Le nombre de victimes du génocide est estimé à :`, choices: ['entre 800 000 et 1 million', 'environ 10 000', 'environ 100'], answer: { index: 0 }, explanation: r`En une centaine de jours.` },
    { type: 'MCQ', prompt: r`Les Interahamwe étaient :`, choices: ['des milices', 'des casques bleus', 'des juges'], answer: { index: 0 }, explanation: r`Milices extrémistes.` },
    { type: 'MCQ', prompt: r`La RTLM était :`, choices: ['une radio de propagande de haine', 'une ONG humanitaire'], answer: { index: 0 }, explanation: r`Radio des Mille Collines.` },
    { type: 'MCQ', prompt: r`La puissance coloniale au Rwanda après la Première Guerre mondiale était :`, choices: ['la Belgique', 'la France', 'le Royaume-Uni'], answer: { index: 0 }, explanation: r`Après l'Allemagne.` },
    { type: 'MCQ', prompt: r`Les cartes d'identité ethniques ont été imposées en :`, choices: ['1933', '1990'], answer: { index: 0 }, explanation: r`Sous l'administration belge.` },
    { type: 'MCQ', prompt: r`Les accords d'Arusha (1993) prévoyaient :`, choices: ['un partage du pouvoir', 'le génocide', 'la colonisation'], answer: { index: 0 }, explanation: r`Accords de paix.` },
    { type: 'MCQ', prompt: r`La MINUAR était :`, choices: ['une mission de l’ONU', 'une milice'], answer: { index: 0 }, explanation: r`Mission des Nations unies pour l'assistance au Rwanda.` },
    { type: 'MCQ', prompt: r`Le TPIR siégeait à :`, choices: ['Arusha', 'Kigali', 'La Haye'], answer: { index: 0 }, explanation: r`Tanzanie.` },
    { type: 'MCQ', prompt: r`Les gacaca étaient :`, choices: ['des tribunaux communautaires rwandais', 'des milices'], answer: { index: 0 }, explanation: r`Justice de proximité.` },
    { type: 'MCQ', prompt: r`Le génocide prend fin quand :`, choices: ['le FPR prend le contrôle du pays en juillet 1994', 'l’ONU envoie 100 000 soldats'], answer: { index: 0 }, explanation: r`Victoire militaire du FPR.` },
    { type: 'MCQ', prompt: r`Un génocide est :`, choices: ['la destruction intentionnelle d’un groupe', 'une simple bataille'], answer: { index: 0 }, explanation: r`Définition juridique.` },
    { type: 'OPEN', prompt: r`Montre le rôle de la propagande dans le génocide.`, answer: { model: 'La radio RTLM et le journal Kangura ont diffusé la haine et désigné les Tutsi comme ennemis à éliminer.', keywords: ['RTLM', 'haine'] }, explanation: r`Préparation des esprits.` },
  ],
  assessment: {
    title: 'Devoir BEPC — La crise rwandaise',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Distingue la **guerre** (1990-1993) et le **génocide** (avril-juillet 1994).
2. Utilise les mots exacts : génocide, propagande, milices, TPIR.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Le génocide des Tutsi a duré environ :`, type: 'MCQ', choices: ['100 jours', '10 ans'], answer: { index: 0 }, points: 2, correction: r`D'avril à juillet 1994.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Le TPIR a été créé par :`, type: 'MCQ', choices: ['l’ONU', 'l’Union africaine'], answer: { index: 0 }, points: 2, correction: r`Novembre 1994.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Le Rwanda commémore le génocide chaque :`, type: 'MCQ', choices: ['7 avril', '7 août'], answer: { index: 0 }, points: 2, correction: r`Début du génocide.` },
      { section: 'Exercice 2 (8 pts)', sectionIntro: r`**Document.** « Les cartes d'identité portaient la mention Hutu, Tutsi ou Twa. Aux barrages, il suffisait de lire cette mention pour décider qui devait mourir. »
— D'après un rescapé du génocide.`, prompt: r`1. Depuis quand et par qui cette mention a-t-elle été imposée ?`, type: 'OPEN', answer: { model: 'Depuis 1933, par l’administration coloniale belge' }, points: 3, correction: r`Depuis 1933 *(1,5 pt)*, par l'administration coloniale belge *(1,5 pt)*.` },
      { section: 'Exercice 2 (8 pts)', prompt: r`2. Explique comment cette mention a facilité le génocide.`, type: 'OPEN', answer: { model: 'Elle permettait d’identifier et de tuer systématiquement les Tutsi aux barrages.' }, points: 5, correction: r`Elle permettait d'**identifier** les Tutsi aux barrages *(2,5 pts)* et donc de les tuer systématiquement, ce qui montre le caractère **planifié** du génocide *(2,5 pts)*.` },
      { section: 'Exercice 3 (6 pts)', prompt: r`Présente en quelques lignes les conséquences du génocide pour le Rwanda et la région des Grands Lacs.`, type: 'OPEN', answer: { model: 'Morts, orphelins, réfugiés, instabilité en RDC, TPIR, gacaca, réconciliation' }, points: 6, correction: r`Conséquences humaines *(2 pts)* ; réfugiés et instabilité régionale *(2 pts)* ; justice et réconciliation *(2 pts)*.` },
    ],
  },
};

export const deuxiemeGuerre: SeedChapter = {
  subject: 'HG',
  order: 5,
  title: 'Les causes, les caractères et les conséquences de la Seconde Guerre mondiale',
  minutes: 240,
  officialRef: `${REF}, thème 2, leçon 1`,
  objectives: [
    'Expliquer les causes de la Seconde Guerre mondiale',
    'Décrire ses grandes phases et ses caractères (guerre totale, génocide)',
    'Montrer la participation de l’Afrique et les conséquences du conflit',
  ],
  courseMd: r`
> **Situation.** Au cimetière de Thiaroye (Sénégal) et dans de nombreuses familles africaines, on se souvient des « tirailleurs » qui ont combattu de 1939 à 1945. Pourquoi l'Afrique a-t-elle été entraînée dans cette guerre ?

## 1. Les causes
- **Les frustrations nées de 1918** : le traité de **Versailles** (1919) humilie l'Allemagne (perte de territoires, réparations).
- **La crise économique de 1929** : chômage et misère favorisent les extrémismes.
- **Les régimes totalitaires** : le **fascisme** de Mussolini en Italie (1922), le **nazisme** d'Hitler en Allemagne (1933), le militarisme au Japon. Ils sont **expansionnistes** et racistes.
- **Les agressions** : le Japon envahit la Mandchourie (1931) ; l'Italie conquiert l'Éthiopie (1935-1936) ; l'Allemagne annexe l'Autriche (1938), puis les Sudètes (accords de Munich, 1938) et la Tchécoslovaquie (1939).
- **Le déclenchement** : l'Allemagne envahit la **Pologne** le **1ᵉʳ septembre 1939** ; la France et le Royaume-Uni lui déclarent la guerre le 3 septembre.

## 2. Les grandes phases
1. **1939-1942 : victoires de l'Axe** (Allemagne, Italie, Japon). Défaite de la France (juin 1940), attaque de l'URSS (juin 1941), attaque japonaise de **Pearl Harbor** (7 décembre 1941) qui fait entrer les États-Unis en guerre.
2. **1942-1943 : le tournant** : Midway (1942), El-Alamein (1942), **Stalingrad** (1942-1943).
3. **1943-1945 : victoires des Alliés** : débarquement en **Normandie** le **6 juin 1944** ; capitulation de l'Allemagne le **8 mai 1945** ; bombes atomiques sur **Hiroshima** (6 août) et **Nagasaki** (9 août) ; capitulation du Japon le **2 septembre 1945**.

## 3. Les caractères
- **Guerre mondiale** : tous les continents et océans sont concernés.
- **Guerre totale** : toutes les ressources humaines, économiques et scientifiques sont mobilisées ; les **civils** sont visés (bombardements).
- **Guerre d'anéantissement** : les nazis organisent le **génocide des Juifs** (la **Shoah**, environ **6 millions** de victimes) et des Tsiganes, dans des camps d'extermination.

## 4. La participation de l'Afrique
- Des centaines de milliers d'Africains sont mobilisés comme **tirailleurs**.
- **Effort de guerre** : production forcée de caoutchouc, d'huile de palme, de café, de cacao ; réquisitions.
- **Brazzaville** devient la capitale de la France libre en Afrique ; la **conférence de Brazzaville** (1944) promet des réformes.
- En décembre 1944, à **Thiaroye**, des tirailleurs qui réclamaient leur solde sont tués par l'armée française.

## 5. Les conséquences
- **Humaines** : entre 50 et 60 millions de morts, dont une majorité de civils.
- **Matérielles** : villes et économies européennes détruites ; aide américaine (plan Marshall, 1947).
- **Politiques** : création de l'**ONU** (1945) ; le monde se divise en deux blocs (**guerre froide** entre les États-Unis et l'URSS) ; les puissances coloniales sont affaiblies, ce qui favorise la **décolonisation**.
- **Morales** : jugement des criminels nazis (procès de **Nuremberg**, 1945-1946) ; naissance de la notion de **crime contre l'humanité**.
`,
  summaryMd: r`
| Repère | Date |
|---|---|
| Hitler au pouvoir | 1933 |
| Invasion de la Pologne | 1ᵉʳ septembre 1939 |
| Pearl Harbor | 7 décembre 1941 |
| Stalingrad | 1942-1943 |
| Conférence de Brazzaville | 1944 |
| Débarquement en Normandie | 6 juin 1944 |
| Capitulation allemande | 8 mai 1945 |
| Hiroshima / Nagasaki | 6 et 9 août 1945 |
| Capitulation japonaise | 2 septembre 1945 |

- Causes : traité de Versailles, crise de 1929, totalitarismes expansionnistes.
- Caractères : guerre **mondiale**, **totale**, d'**anéantissement** (Shoah).
- Afrique : tirailleurs, effort de guerre, Brazzaville.
- Conséquences : 50-60 millions de morts, ONU, guerre froide, décolonisation.
`,
  questions: [
    { type: 'MCQ', prompt: r`La Seconde Guerre mondiale commence avec l'invasion de :`, choices: ['la Pologne', 'la France', 'l’Éthiopie'], answer: { index: 0 }, explanation: r`1ᵉʳ septembre 1939.` },
    { type: 'NUMERIC', prompt: r`En quelle année Hitler arrive-t-il au pouvoir ?`, answer: { value: 1933 }, explanation: r`Chancelier en janvier 1933.` },
    { type: 'MCQ', prompt: r`L'attaque de Pearl Harbor fait entrer en guerre :`, choices: ['les États-Unis', 'l’URSS', 'l’Italie'], answer: { index: 0 }, explanation: r`7 décembre 1941.` },
    { type: 'MCQ', prompt: r`Le tournant de la guerre en URSS est la bataille de :`, choices: ['Stalingrad', 'Verdun', 'Waterloo'], answer: { index: 0 }, explanation: r`1942-1943.` },
    { type: 'MCQ', prompt: r`Le débarquement en Normandie a lieu le :`, choices: ['6 juin 1944', '8 mai 1945', '1ᵉʳ septembre 1939'], answer: { index: 0 }, explanation: r`Jour J.` },
    { type: 'MCQ', prompt: r`L'Allemagne capitule le :`, choices: ['8 mai 1945', '2 septembre 1945'], answer: { index: 0 }, explanation: r`Fin de la guerre en Europe.` },
    { type: 'MCQ', prompt: r`La Shoah désigne :`, choices: ['le génocide des Juifs par les nazis', 'une bataille navale'], answer: { index: 0 }, explanation: r`Environ 6 millions de victimes.` },
    { type: 'MCQ', prompt: r`Une guerre totale mobilise :`, choices: ['toutes les ressources d’un pays', 'uniquement l’armée'], answer: { index: 0 }, explanation: r`Économie, sciences, civils.` },
    { type: 'MCQ', prompt: r`Les soldats africains de l'armée française étaient appelés :`, choices: ['tirailleurs', 'casques bleus'], answer: { index: 0 }, explanation: r`Tirailleurs « sénégalais ».` },
    { type: 'MCQ', prompt: r`La conférence de Brazzaville a lieu en :`, choices: ['1944', '1960'], answer: { index: 0 }, explanation: r`Promesses de réformes.` },
    { type: 'MCQ', prompt: r`Les bombes atomiques ont frappé :`, choices: ['Hiroshima et Nagasaki', 'Berlin et Rome'], answer: { index: 0 }, explanation: r`Août 1945.` },
    { type: 'MCQ', prompt: r`Le nombre de morts de la guerre est estimé à :`, choices: ['50 à 60 millions', '1 million'], answer: { index: 0 }, explanation: r`Majorité de civils.` },
    { type: 'MCQ', prompt: r`Une conséquence politique de la guerre est :`, choices: ['la création de l’ONU', 'la création de l’AOF'], answer: { index: 0 }, explanation: r`1945.` },
    { type: 'MCQ', prompt: r`Le procès de Nuremberg a jugé :`, choices: ['les dirigeants nazis', 'les tirailleurs'], answer: { index: 0 }, explanation: r`1945-1946.` },
    { type: 'OPEN', prompt: r`Montre que la guerre a favorisé la décolonisation.`, answer: { model: 'Les puissances coloniales sont affaiblies, l’ONU défend le droit des peuples, les Africains ont participé à la guerre et réclament des droits.', keywords: ['affaiblies', 'ONU', 'droits'] }, explanation: r`Lien avec la leçon sur l'indépendance.` },
  ],
  assessment: {
    title: 'Devoir BEPC — La Seconde Guerre mondiale',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Organise ta réponse en **causes / caractères / conséquences**.
2. Cite des **dates** et des **lieux** précis.
3. N'oublie pas la **participation africaine**.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. La guerre éclate en :`, type: 'MCQ', choices: ['1939', '1914', '1945'], answer: { index: 0 }, points: 2, correction: r`Septembre 1939.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. La capitulation du Japon a lieu le :`, type: 'MCQ', choices: ['2 septembre 1945', '8 mai 1945'], answer: { index: 0 }, points: 2, correction: r`Après Hiroshima et Nagasaki.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Le régime nazi est un régime :`, type: 'MCQ', choices: ['totalitaire', 'démocratique'], answer: { index: 0 }, points: 2, correction: r`Parti unique, culte du chef, terreur.` },
      { section: 'Exercice 2 (8 pts)', sectionIntro: r`**Document.** « Pendant la guerre, on nous obligeait à récolter le caoutchouc et à livrer notre riz. Nos frères partaient comme tirailleurs ; beaucoup ne sont pas revenus. »
— Témoignage d'un ancien de la région de Daloa.`, prompt: r`1. Relève deux formes de participation de l'Afrique à la guerre.`, type: 'OPEN', answer: { model: 'Production forcée (caoutchouc, riz) ; recrutement de tirailleurs' }, points: 4, correction: r`Effort de guerre (caoutchouc, riz) *(2 pts)* ; recrutement de tirailleurs *(2 pts)*.` },
      { section: 'Exercice 2 (8 pts)', prompt: r`2. Quelles ont été les conséquences de cette participation pour l'Afrique ?`, type: 'OPEN', answer: { model: 'Pertes humaines, souffrances ; mais prise de conscience et revendications d’émancipation' }, points: 4, correction: r`Pertes humaines et souffrances *(2 pts)* ; prise de conscience et revendications qui accélèrent l'émancipation *(2 pts)*.` },
      { section: 'Exercice 3 (6 pts)', prompt: r`Présente en quelques lignes les conséquences de la Seconde Guerre mondiale.`, type: 'OPEN', answer: { model: 'Humaines, matérielles, politiques (ONU, guerre froide, décolonisation)' }, points: 6, correction: r`Conséquences humaines *(2 pts)*, matérielles *(1 pt)*, politiques (ONU, guerre froide, décolonisation) *(3 pts)*.` },
    ],
  },
};

export const onu: SeedChapter = {
  subject: 'HG',
  order: 6,
  title: 'L’Organisation des Nations unies (ONU)',
  minutes: 180,
  officialRef: `${REF}, thème 2, leçon 2`,
  objectives: [
    'Présenter la création et les objectifs de l’ONU',
    'Décrire ses principaux organes et institutions spécialisées',
    'Évaluer ses actions et ses limites',
  ],
  courseMd: r`
> **Situation.** De 2004 à 2017, des casques bleus de l'**ONUCI** étaient présents en Côte d'Ivoire. Qu'est-ce que l'ONU et à quoi sert-elle ?

## 1. La création
- Après l'échec de la **Société des Nations** (SDN), qui n'a pas empêché la Seconde Guerre mondiale, les Alliés veulent une organisation plus efficace.
- La **Charte des Nations unies** est signée à **San Francisco** le **26 juin 1945** ; l'ONU naît officiellement le **24 octobre 1945** (Journée des Nations unies).
- **Siège** : **New York** (États-Unis). 51 États fondateurs ; aujourd'hui **193 États membres**. La Côte d'Ivoire y est admise le **20 septembre 1960**.

## 2. Les objectifs
- **Maintenir la paix et la sécurité** internationales.
- Développer des **relations amicales** entre les nations, fondées sur l'égalité des droits et le **droit des peuples à disposer d'eux-mêmes**.
- Favoriser la **coopération** économique, sociale, culturelle et humanitaire.
- Promouvoir les **droits de l'homme** : **Déclaration universelle des droits de l'homme** adoptée le **10 décembre 1948**.

## 3. Les principaux organes
| Organe | Composition et rôle |
|---|---|
| **Assemblée générale** | tous les États membres (une voix chacun) ; débat et vote des résolutions, du budget |
| **Conseil de sécurité** | **15 membres**, dont **5 permanents** disposant du **droit de veto** (Chine, États-Unis, France, Royaume-Uni, Russie) ; responsable de la paix, peut décider de sanctions et d'opérations de paix |
| **Secrétariat** | dirigé par le **Secrétaire général** (ex. le Ghanéen **Kofi Annan**, 1997-2006, prix Nobel de la paix) ; administration de l'organisation |
| **Cour internationale de justice** | à **La Haye** (Pays-Bas) ; règle les différends entre États |
| **Conseil économique et social (ECOSOC)** | coordonne l'action économique et sociale |

## 4. Les institutions spécialisées et programmes
**UNESCO** (éducation, science, culture), **OMS** (santé), **FAO** (alimentation et agriculture), **UNICEF** (enfance), **HCR** (réfugiés), **PAM** (aide alimentaire), **OIT** (travail), **PNUD** (développement), **FMI** et **Banque mondiale** (finances).

## 5. Actions et limites
**Actions :** opérations de **maintien de la paix** (casques bleus ; en Côte d'Ivoire l'ONUCI), aide humanitaire, lutte contre les épidémies, éducation, décolonisation, **Objectifs de développement durable** (ODD, horizon 2030).

**Limites :** le **droit de veto** bloque parfois les décisions ; dépendance financière vis-à-vis des États ; échecs face à certains conflits (génocide au Rwanda en 1994) ; l'Afrique ne dispose d'aucun siège permanent au Conseil de sécurité, d'où des demandes de **réforme**.
`,
  summaryMd: r`
- Charte signée à San Francisco le **26 juin 1945** ; ONU créée le **24 octobre 1945** ; siège à **New York** ; 193 membres.
- Objectifs : paix, coopération, droits de l'homme (DUDH, **10 décembre 1948**).
- Organes : Assemblée générale, **Conseil de sécurité** (15 membres, 5 permanents avec veto), Secrétariat, CIJ (La Haye), ECOSOC.
- Institutions : UNESCO, OMS, FAO, UNICEF, HCR, PAM…
- Limites : veto, finances, échecs (Rwanda), réforme demandée.
`,
  questions: [
    { type: 'MCQ', prompt: r`L'ONU a été créée le :`, choices: ['24 octobre 1945', '7 août 1960', '25 mai 1963'], answer: { index: 0 }, explanation: r`Journée des Nations unies.` },
    { type: 'MCQ', prompt: r`Le siège de l'ONU est à :`, choices: ['New York', 'Genève', 'Addis-Abeba'], answer: { index: 0 }, explanation: r`États-Unis.` },
    { type: 'NUMERIC', prompt: r`Combien de membres compte le Conseil de sécurité ?`, answer: { value: 15 }, explanation: r`Dont 5 permanents.` },
    { type: 'NUMERIC', prompt: r`Combien de membres permanents ont le droit de veto ?`, answer: { value: 5 }, explanation: r`Chine, États-Unis, France, Royaume-Uni, Russie.` },
    { type: 'MCQ', prompt: r`La DUDH a été adoptée le :`, choices: ['10 décembre 1948', '24 octobre 1945'], answer: { index: 0 }, explanation: r`Déclaration universelle des droits de l'homme.` },
    { type: 'MCQ', prompt: r`L'institution de l'ONU chargée de la santé est :`, choices: ['l’OMS', 'la FAO', 'l’UNESCO'], answer: { index: 0 }, explanation: r`Organisation mondiale de la santé.` },
    { type: 'MCQ', prompt: r`L'UNICEF s'occupe :`, choices: ['de l’enfance', 'des finances'], answer: { index: 0 }, explanation: r`Fonds des Nations unies pour l'enfance.` },
    { type: 'MCQ', prompt: r`La Cour internationale de justice siège à :`, choices: ['La Haye', 'New York'], answer: { index: 0 }, explanation: r`Pays-Bas.` },
    { type: 'MCQ', prompt: r`L'organisation qui a précédé l'ONU est :`, choices: ['la SDN', 'l’OUA'], answer: { index: 0 }, explanation: r`Société des Nations.` },
    { type: 'MCQ', prompt: r`La Côte d'Ivoire a été admise à l'ONU en :`, choices: ['1960', '1945'], answer: { index: 0 }, explanation: r`20 septembre 1960.` },
    { type: 'MCQ', prompt: r`Kofi Annan, Secrétaire général de l'ONU, était :`, choices: ['ghanéen', 'ivoirien', 'sénégalais'], answer: { index: 0 }, explanation: r`1997-2006.` },
    { type: 'MCQ', prompt: r`Le HCR s'occupe :`, choices: ['des réfugiés', 'de l’agriculture'], answer: { index: 0 }, explanation: r`Haut-Commissariat pour les réfugiés.` },
    { type: 'MCQ', prompt: r`Une limite de l'ONU est :`, choices: ['le droit de veto qui bloque des décisions', 'l’absence de membres'], answer: { index: 0 }, explanation: r`Paralysie du Conseil.` },
    { type: 'MCQ', prompt: r`La mission de l'ONU en Côte d'Ivoire s'appelait :`, choices: ['ONUCI', 'MINUAR'], answer: { index: 0 }, explanation: r`2004-2017.` },
    { type: 'OPEN', prompt: r`Cite deux objectifs de l'ONU.`, answer: { model: 'Maintenir la paix et la sécurité ; promouvoir les droits de l’homme ; favoriser la coopération.', keywords: ['paix', 'droits', 'coopération'] }, explanation: r`Charte des Nations unies.` },
  ],
  assessment: {
    title: 'Devoir BEPC — L’ONU',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Pour chaque organe, donne sa **composition** et son **rôle**.
2. Équilibre ton jugement : **réussites** et **limites**.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. La Charte de l'ONU a été signée à :`, type: 'MCQ', choices: ['San Francisco', 'Paris'], answer: { index: 0 }, points: 2, correction: r`26 juin 1945.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. L'organe qui dispose du droit de veto est :`, type: 'MCQ', choices: ['le Conseil de sécurité', 'l’Assemblée générale'], answer: { index: 0 }, points: 2, correction: r`Par ses 5 membres permanents.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. L'UNESCO s'occupe :`, type: 'MCQ', choices: ['de l’éducation, la science et la culture', 'de la guerre'], answer: { index: 0 }, points: 2, correction: r`Définition.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`Sujet : « L'ONU : organisation, actions et limites. » Rédige un développement structuré en t'appuyant sur des exemples (dont la Côte d'Ivoire).`, type: 'OPEN', answer: { model: 'Création ; organes ; actions (ONUCI, institutions) ; limites (veto, Rwanda) ; conclusion' }, points: 14, correction: r`Introduction (création, objectifs) *(2 pts)* ; organes *(4 pts)* ; actions avec exemples dont l'ONUCI *(4 pts)* ; limites *(2 pts)* ; conclusion et expression *(2 pts)*.` },
    ],
  },
};

export const unionAfricaine: SeedChapter = {
  subject: 'HG',
  order: 7,
  title: 'L’Union africaine (UA)',
  minutes: 180,
  officialRef: `${REF}, thème 2, leçon 3`,
  objectives: [
    'Présenter l’OUA et son évolution vers l’UA',
    'Décrire les objectifs et les organes de l’UA',
    'Évaluer ses actions et ses difficultés',
  ],
  courseMd: r`
> **Situation.** Le **25 mai**, l'Afrique célèbre la **Journée de l'Afrique**. Que rappelle cette date et quel est le rôle de l'Union africaine ?

## 1. De l'OUA à l'UA
- L'**Organisation de l'unité africaine (OUA)** est créée le **25 mai 1963** à **Addis-Abeba** (Éthiopie) par **32 États** indépendants. Félix Houphouët-Boigny fait partie des signataires de la charte.
- **Objectifs de l'OUA** : renforcer l'**unité** et la solidarité africaines, **libérer** les territoires encore colonisés, lutter contre l'**apartheid** en Afrique du Sud, défendre la souveraineté des États.
- **Principes** : non-ingérence dans les affaires intérieures, **intangibilité des frontières** héritées de la colonisation.
- **Bilan** : réussite dans la lutte contre la colonisation et l'apartheid, mais impuissance face aux coups d'État et aux guerres civiles, à cause du principe de non-ingérence.

- L'**acte constitutif de l'Union africaine** est adopté à **Lomé** (Togo) en **juillet 2000** ; l'**UA** est lancée officiellement à **Durban** (Afrique du Sud) le **9 juillet 2002**. Siège : **Addis-Abeba**. Elle compte **55 États membres**.

## 2. Les objectifs de l'UA
- Réaliser une plus grande **unité** et **intégration** politique et économique.
- Promouvoir la **paix**, la **sécurité** et la stabilité.
- Promouvoir la **démocratie**, la bonne gouvernance et les **droits de l'homme**.
- Favoriser le **développement durable** (programme **Agenda 2063** « l'Afrique que nous voulons »).
- Nouveau principe : le **droit d'intervenir** dans un État membre en cas de crimes graves (génocide, crimes de guerre) ; condamnation des changements anticonstitutionnels de gouvernement (suspension des États après un coup d'État).

## 3. Les organes
| Organe | Rôle |
|---|---|
| **Conférence de l'Union** (chefs d'État et de gouvernement) | organe suprême, définit les politiques |
| **Commission de l'UA** | secrétariat, exécute les décisions (siège à Addis-Abeba) |
| **Conseil de paix et de sécurité** | prévention et gestion des conflits |
| **Parlement panafricain** | organe consultatif, à **Midrand** (Afrique du Sud) |
| **Cour africaine des droits de l'homme et des peuples** | à **Arusha** (Tanzanie) |
| Conseil exécutif (ministres), ECOSOCC… | |

## 4. Actions et difficultés
**Actions :** médiations et missions de paix (Somalie, Soudan…), sanctions contre les auteurs de coups d'État, lancement de la **Zone de libre-échange continentale africaine (ZLECAf)**, dont les échanges ont commencé en **2021**, appui aux élections, lutte contre les épidémies (Ebola, Covid-19).

**Difficultés :** **financement** dépendant de partenaires extérieurs, persistance des conflits et des coups d'État, divergences entre États, lenteur dans l'application des décisions.
`,
  summaryMd: r`
| Repère | Date / lieu |
|---|---|
| Création de l'OUA | **25 mai 1963**, Addis-Abeba (32 États) |
| Acte constitutif de l'UA | juillet 2000, Lomé |
| Lancement de l'UA | **9 juillet 2002**, Durban |
| Siège | Addis-Abeba |
| Membres | 55 États |

- OUA : unité, décolonisation, lutte contre l'apartheid ; non-ingérence, intangibilité des frontières.
- UA : intégration, paix, démocratie, développement (Agenda 2063, **ZLECAf**) ; droit d'intervention.
- Organes : Conférence, Commission, Conseil de paix et de sécurité, Parlement panafricain (Midrand), Cour africaine (Arusha).
- Difficultés : financement, conflits, coups d'État.
`,
  questions: [
    { type: 'MCQ', prompt: r`L'OUA a été créée le :`, choices: ['25 mai 1963', '9 juillet 2002', '24 octobre 1945'], answer: { index: 0 }, explanation: r`Journée de l'Afrique.` },
    { type: 'MCQ', prompt: r`Le siège de l'UA est à :`, choices: ['Addis-Abeba', 'Abidjan', 'Durban'], answer: { index: 0 }, explanation: r`Éthiopie.` },
    { type: 'MCQ', prompt: r`L'UA a été lancée en 2002 à :`, choices: ['Durban', 'Lomé', 'Dakar'], answer: { index: 0 }, explanation: r`9 juillet 2002.` },
    { type: 'NUMERIC', prompt: r`Combien d'États ont fondé l'OUA en 1963 ?`, answer: { value: 32 }, explanation: r`32 États.` },
    { type: 'NUMERIC', prompt: r`Combien d'États membres compte l'UA ?`, answer: { value: 55 }, explanation: r`Tout le continent.` },
    { type: 'MCQ', prompt: r`Un objectif majeur de l'OUA était :`, choices: ['la lutte contre la colonisation et l’apartheid', 'la création de l’euro'], answer: { index: 0 }, explanation: r`Libération du continent.` },
    { type: 'MCQ', prompt: r`Le principe d'intangibilité des frontières signifie :`, choices: ['qu’on ne modifie pas les frontières héritées de la colonisation', 'qu’on supprime les frontières'], answer: { index: 0 }, explanation: r`Pour éviter les conflits.` },
    { type: 'MCQ', prompt: r`Le Parlement panafricain siège à :`, choices: ['Midrand', 'Arusha', 'Addis-Abeba'], answer: { index: 0 }, explanation: r`Afrique du Sud.` },
    { type: 'MCQ', prompt: r`La Cour africaine des droits de l'homme et des peuples siège à :`, choices: ['Arusha', 'La Haye'], answer: { index: 0 }, explanation: r`Tanzanie.` },
    { type: 'MCQ', prompt: r`La ZLECAf est :`, choices: ['une zone de libre-échange continentale', 'une armée africaine'], answer: { index: 0 }, explanation: r`Échanges lancés en 2021.` },
    { type: 'MCQ', prompt: r`L'organe chargé de la gestion des conflits est :`, choices: ['le Conseil de paix et de sécurité', 'le Parlement panafricain'], answer: { index: 0 }, explanation: r`Prévention et gestion des crises.` },
    { type: 'MCQ', prompt: r`Après un coup d'État, l'UA peut :`, choices: ['suspendre l’État concerné', 'le féliciter'], answer: { index: 0 }, explanation: r`Changement anticonstitutionnel.` },
    { type: 'MCQ', prompt: r`L'« Agenda 2063 » est :`, choices: ['le programme de développement de l’UA', 'une constitution nationale'], answer: { index: 0 }, explanation: r`« L'Afrique que nous voulons ».` },
    { type: 'MCQ', prompt: r`Une difficulté de l'UA est :`, choices: ['son financement', 'l’absence de membres'], answer: { index: 0 }, explanation: r`Dépendance extérieure.` },
    { type: 'OPEN', prompt: r`Explique une différence importante entre l'OUA et l'UA.`, answer: { model: 'L’OUA appliquait la non-ingérence ; l’UA peut intervenir en cas de crimes graves et sanctionne les coups d’État.', keywords: ['non-ingérence', 'intervenir'] }, explanation: r`Évolution des principes.` },
  ],
  assessment: {
    title: 'Devoir BEPC — L’Union africaine',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Compare **OUA** et **UA** (dates, objectifs, principes).
2. Illustre les actions par des **exemples** concrets.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. La Journée de l'Afrique est célébrée le :`, type: 'MCQ', choices: ['25 mai', '7 août'], answer: { index: 0 }, points: 2, correction: r`Création de l'OUA en 1963.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. L'acte constitutif de l'UA a été adopté à :`, type: 'MCQ', choices: ['Lomé', 'Abuja'], answer: { index: 0 }, points: 2, correction: r`Juillet 2000.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. L'UA a remplacé l'OUA en :`, type: 'MCQ', choices: ['2002', '1963'], answer: { index: 0 }, points: 2, correction: r`Lancement à Durban.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`Sujet : « De l'OUA à l'UA : objectifs, réalisations et difficultés de l'organisation continentale. » Rédige un développement structuré.`, type: 'OPEN', answer: { model: 'OUA (1963) ; passage à l’UA (2000-2002) ; organes ; actions (paix, ZLECAf) ; difficultés' }, points: 14, correction: r`Introduction *(2 pts)* ; OUA : création, objectifs, bilan *(3 pts)* ; UA : objectifs et organes *(4 pts)* ; actions et difficultés *(3 pts)* ; conclusion et expression *(2 pts)*.` },
    ],
  },
};
