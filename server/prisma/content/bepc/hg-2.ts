import { SeedChapter } from '../types';

const r = String.raw;
const REF = 'Programme d’Histoire-Géographie 3e (DPFC) — progression 2026-2027, Géographie';

export const atoutsCI: SeedChapter = {
  subject: 'HG',
  order: 8,
  title: 'Les atouts du développement économique de la Côte d’Ivoire',
  minutes: 180,
  officialRef: `${REF}, thème 1, leçon 1`,
  objectives: [
    'Identifier les atouts naturels du développement de la Côte d’Ivoire',
    'Identifier les atouts humains, infrastructurels et politiques',
    'Construire et lire un diagramme ombrothermique',
  ],
  courseMd: r`
> **Situation.** La Côte d'Ivoire est souvent présentée comme la « locomotive » de l'Afrique de l'Ouest francophone. Sur quels atouts repose son développement ?

## 1. Les atouts naturels
- **Une position favorable** : pays de **322 462 km²** situé dans le golfe de Guinée, avec une **façade maritime** d'environ 520 km, ouvert sur l'océan Atlantique et voisin de pays enclavés (Mali, Burkina Faso) qui utilisent ses ports.
- **Des climats favorables à l'agriculture** :
  - au **Sud**, climat **équatorial** (ou subéquatorial) : chaud, humide, deux saisons des pluies et deux saisons sèches ; forêt dense ;
  - au **Nord**, climat **tropical** (soudanien) : une saison des pluies et une saison sèche marquée par l'harmattan ; savane.
- **Des sols** ferrallitiques souvent fertiles, propices aux cultures (cacao, café, hévéa, palmier à huile, coton, anacarde).
- **Un réseau hydrographique** important : fleuves **Cavally**, **Sassandra**, **Bandama** et **Comoé** ; lagunes (Ébrié, Aby, Grand-Lahou). Ils permettent la pêche, l'irrigation et la production d'**hydroélectricité** (barrages de Kossou, Taabo, Buyo, Soubré).
- **Des ressources minières et énergétiques** : or, manganèse, nickel, **pétrole** et **gaz naturel** (en mer), bauxite…
- **Des paysages** favorables au tourisme (plages, parcs nationaux).

## 2. Les atouts humains
- Une population nombreuse et **jeune** : environ **29,4 millions d'habitants** au recensement de 2021 (RGPH), dont une grande majorité de moins de 35 ans : main-d'œuvre abondante et vaste **marché intérieur**.
- Des populations venues des pays voisins qui contribuent au travail agricole.
- Un système d'enseignement et de formation (universités, grandes écoles comme l'INP-HB de Yamoussoukro).

## 3. Les infrastructures
- **Ports** d'**Abidjan** (l'un des plus importants d'Afrique de l'Ouest) et de **San-Pédro** (premier port d'exportation de cacao).
- **Routes et autoroutes** (Abidjan-Yamoussoukro, Abidjan-Grand-Bassam…), **ponts** (dont le pont Henri Konan Bédié à Abidjan).
- **Chemin de fer** Abidjan-Ouagadougou ; **aéroport international** Félix Houphouët-Boigny.
- Réseau électrique et de télécommunications développé.

## 4. Les atouts politiques et institutionnels
Politique de **libéralisme économique** depuis l'indépendance, plans nationaux de développement (**PND**), code des investissements attractif, zones industrielles, appartenance à l'**UEMOA** (monnaie commune, le franc CFA) et à la **CEDEAO**, marché régional de plus de 400 millions de personnes.

## 5. Savoir-faire : le diagramme ombrothermique
Il représente, pour une station, les **précipitations** mensuelles (en barres, en mm) et les **températures** mensuelles (en courbe, en °C), avec l'échelle $P = 2T$. Un mois est **sec** quand $P < 2T$ (la barre est sous la courbe).
`,
  summaryMd: r`
- **Naturels** : position littorale (≈ 520 km de côtes), climats équatorial (Sud) et tropical (Nord), sols fertiles, fleuves (Cavally, Sassandra, Bandama, Comoé), barrages, mines (or, manganèse, pétrole, gaz).
- **Humains** : ≈ 29,4 millions d'habitants (RGPH 2021), population jeune.
- **Infrastructures** : ports d'Abidjan et de San-Pédro, autoroutes, chemin de fer Abidjan-Ouagadougou, aéroport FHB.
- **Politiques** : libéralisme, PND, UEMOA, CEDEAO.
- Diagramme ombrothermique : mois sec si $P < 2T$.
`,
  questions: [
    { type: 'NUMERIC', prompt: r`Superficie de la Côte d'Ivoire (en km²) ?`, answer: { value: 322462 }, explanation: r`322 462 km².` },
    { type: 'MCQ', prompt: r`Le Sud de la Côte d'Ivoire a un climat :`, choices: ['équatorial', 'désertique', 'méditerranéen'], answer: { index: 0 }, explanation: r`Deux saisons des pluies.` },
    { type: 'MCQ', prompt: r`Le Nord de la Côte d'Ivoire a un climat :`, choices: ['tropical (soudanien)', 'équatorial'], answer: { index: 0 }, explanation: r`Une saison des pluies.` },
    { type: 'MCQ', prompt: r`Lequel n'est pas un fleuve ivoirien ?`, choices: ['le Niger', 'le Bandama', 'la Comoé'], answer: { index: 0 }, explanation: r`Le Niger ne traverse pas la Côte d'Ivoire.` },
    { type: 'MCQ', prompt: r`Le barrage de Kossou se trouve sur :`, choices: ['le Bandama', 'le Cavally'], answer: { index: 0 }, explanation: r`Lac de Kossou.` },
    { type: 'MCQ', prompt: r`Le premier port d'exportation de cacao est :`, choices: ['San-Pédro', 'Abidjan', 'Sassandra'], answer: { index: 0 }, explanation: r`Port du Sud-Ouest.` },
    { type: 'MCQ', prompt: r`La population ivoirienne au RGPH 2021 est d'environ :`, choices: ['29,4 millions', '10 millions', '60 millions'], answer: { index: 0 }, explanation: r`Recensement général de 2021.` },
    { type: 'MCQ', prompt: r`Une ressource extraite en mer au large de la Côte d'Ivoire :`, choices: ['le pétrole', 'le charbon'], answer: { index: 0 }, explanation: r`Et le gaz naturel.` },
    { type: 'MCQ', prompt: r`La voie ferrée relie Abidjan à :`, choices: ['Ouagadougou', 'Accra', 'Dakar'], answer: { index: 0 }, explanation: r`Burkina Faso.` },
    { type: 'MCQ', prompt: r`L'UEMOA partage une monnaie commune :`, choices: ['le franc CFA', 'le naira', 'le cedi'], answer: { index: 0 }, explanation: r`Union économique et monétaire ouest-africaine.` },
    { type: 'MCQ', prompt: r`Un mois est sec sur un diagramme ombrothermique si :`, choices: [r`$P < 2T$`, r`$P > 2T$`], answer: { index: 0 }, explanation: r`Barre sous la courbe.` },
    { type: 'MCQ', prompt: r`Une population jeune est un atout car elle fournit :`, choices: ['une main-d’œuvre abondante', 'moins de consommateurs'], answer: { index: 0 }, explanation: r`Et un grand marché intérieur.` },
    { type: 'MCQ', prompt: r`L'harmattan est :`, choices: ['un vent sec du Nord-Est', 'une pluie de mousson'], answer: { index: 0 }, explanation: r`Saison sèche au Nord.` },
    { type: 'MCQ', prompt: r`Les pays enclavés voisins utilisent :`, choices: ['les ports ivoiriens', 'aucun port'], answer: { index: 0 }, explanation: r`Atout de position.` },
    { type: 'OPEN', prompt: r`Cite deux atouts naturels et deux atouts humains ou infrastructurels de la Côte d'Ivoire.`, answer: { model: 'Climat, sols fertiles ; population jeune, port d’Abidjan.', keywords: ['climat', 'sols', 'population', 'port'] }, explanation: r`Atouts variés.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Les atouts du développement de la Côte d’Ivoire',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Classe les atouts : **naturels**, **humains**, **infrastructurels**, **politiques**.
2. Pour un tableau climatique : compare $P$ et $2T$ pour chaque mois.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. La façade maritime ivoirienne mesure environ :`, type: 'MCQ', choices: ['520 km', '52 km', '5 200 km'], answer: { index: 0 }, points: 2, correction: r`Golfe de Guinée.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Le port d'Abidjan est un atout :`, type: 'MCQ', choices: ['infrastructurel', 'climatique'], answer: { index: 0 }, points: 2, correction: r`Infrastructure.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Le barrage de Soubré produit :`, type: 'MCQ', choices: ['de l’électricité', 'du pétrole'], answer: { index: 0 }, points: 2, correction: r`Hydroélectricité sur le Sassandra.` },
      { section: 'Exercice 2 (8 pts)', sectionIntro: r`Températures (T, °C) et précipitations (P, mm) à une station du Nord ivoirien (extrait) :

| Mois | Janv. | Avril | Juil. | Août | Déc. |
|---|---|---|---|---|---|
| T | 26 | 30 | 26 | 25 | 25 |
| P | 5 | 70 | 200 | 280 | 8 |`, prompt: r`1. Quels mois du tableau sont secs ? Justifie avec la règle P < 2T.`, type: 'OPEN', answer: { model: 'Janvier et décembre (P < 2T) ; avril : 70 > 60 non sec' }, points: 4, correction: r`Janvier (5 < 52) et décembre (8 < 50) sont secs *(3 pts)* ; avril (70 > 60), juillet et août sont humides *(1 pt)*.` },
      { section: 'Exercice 2 (8 pts)', prompt: r`2. Quel type de climat ces données traduisent-elles ? Justifie.`, type: 'OPEN', answer: { model: 'Climat tropical : une saison des pluies (juillet-août) et une saison sèche' }, points: 4, correction: r`Climat tropical *(2 pts)* : une seule saison des pluies (maximum en août) et une saison sèche marquée *(2 pts)*.` },
      { section: 'Exercice 3 (6 pts)', prompt: r`Rédige un court texte présentant trois atouts du développement économique de la Côte d'Ivoire.`, type: 'OPEN', answer: { model: 'Atouts naturels, humains, infrastructurels, avec exemples' }, points: 6, correction: r`Trois atouts de catégories différentes, chacun illustré d'un exemple (2 pts chacun).` },
    ],
  },
};

export const secteursCI: SeedChapter = {
  subject: 'HG',
  order: 9,
  title: 'Les secteurs d’activités économiques de la Côte d’Ivoire',
  minutes: 300,
  officialRef: `${REF}, thème 1, leçon 2`,
  objectives: [
    'Décrire le secteur primaire (agriculture, élevage, pêche, forêt, mines)',
    'Décrire les secteurs secondaire et tertiaire',
    'Construire et lire un diagramme circulaire',
  ],
  courseMd: r`
> **Situation.** Le cacao récolté à Soubré, transformé dans une usine de San-Pédro, puis vendu par une banque d'Abidjan sur le marché mondial : ce parcours traverse les trois secteurs de l'économie ivoirienne.

## 1. Le secteur primaire
Il regroupe les activités qui **exploitent directement la nature**.
- **Agriculture d'exportation** :
  - **cacao** : la Côte d'Ivoire est le **premier producteur mondial** (environ 40 % de la production mondiale) ; zones forestières du Sud, du Centre-Ouest et de l'Ouest ;
  - **anacarde** (noix de cajou) : premier producteur mondial de noix brute ; zones du Nord et du Centre ;
  - café, **hévéa** (caoutchouc naturel, premier producteur africain), palmier à huile, coton (Nord), banane dessert, ananas, cola.
- **Agriculture vivrière** (pour la consommation locale) : igname, manioc, banane plantain, riz, maïs, mil, légumes.
- **Élevage** (bovins, ovins, volailles), surtout au Nord ; la production ne couvre pas tous les besoins en viande.
- **Pêche** maritime, lagunaire et fluviale ; **aquaculture**.
- **Exploitation forestière** (bois d'œuvre), aujourd'hui limitée à cause de la déforestation.
- **Mines** : or (Ity, Yaouré, Tongon…), manganèse, nickel ; **hydrocarbures** en mer.

## 2. Le secteur secondaire
Il regroupe les activités qui **transforment les matières premières**.
- **Agro-industries** : broyage du cacao (la Côte d'Ivoire est aussi un des premiers pays broyeurs), huileries, sucreries (Ferké, Borotou), conserveries de thon, transformation du cajou, du café, de l'hévéa.
- **Industries énergétiques** : raffinerie de pétrole (SIR à Abidjan), centrales thermiques au gaz et barrages hydroélectriques.
- **BTP** (bâtiment et travaux publics), cimenteries, industries chimiques, textiles, assemblage.
- L'essentiel des industries est concentré à **Abidjan** (zones industrielles de Yopougon, Vridi, Koumassi, PK 24).

## 3. Le secteur tertiaire
Il regroupe les **services**.
- **Commerce** (marchés, grande distribution, commerce extérieur : exportations de cacao, pétrole, or, caoutchouc…).
- **Transports** (ports, routes, aéroport, chemin de fer).
- **Banques**, assurances, **Bourse régionale des valeurs mobilières (BRVM)** dont le siège est à Abidjan.
- **Télécommunications** (téléphonie mobile, Mobile Money), administration, santé, éducation, **tourisme**.
Le secteur tertiaire est le **premier contributeur** à la richesse nationale (PIB), mais une grande partie relève du **secteur informel**.

## 4. Savoir-faire : le diagramme circulaire
Pour représenter la part de chaque secteur : angle $= \text{pourcentage} \times 3{,}6°$. Exemple : 20 % → 72°.
`,
  summaryMd: r`
- **Primaire** : cacao (1ᵉʳ producteur mondial, ≈ 40 %), anacarde (1ᵉʳ mondial), hévéa, café, palmier, coton ; vivriers (igname, manioc, riz) ; élevage, pêche, mines (or), hydrocarbures.
- **Secondaire** : agro-industries (broyage du cacao), raffinerie SIR, BTP ; concentration à Abidjan.
- **Tertiaire** : commerce, transports, banques (BRVM à Abidjan), télécoms ; premier secteur du PIB ; informel important.
- Diagramme circulaire : angle = % × 3,6°.
`,
  questions: [
    { type: 'MCQ', prompt: r`La Côte d'Ivoire est le premier producteur mondial de :`, choices: ['cacao', 'café', 'pétrole'], answer: { index: 0 }, explanation: r`Environ 40 % de la production mondiale.` },
    { type: 'MCQ', prompt: r`La culture de l'anacarde est surtout pratiquée :`, choices: ['dans le Nord et le Centre', 'sur le littoral seulement'], answer: { index: 0 }, explanation: r`Zones de savane.` },
    { type: 'MCQ', prompt: r`Le secteur primaire regroupe :`, choices: ['les activités qui exploitent la nature', 'les services', 'les usines'], answer: { index: 0 }, explanation: r`Agriculture, pêche, mines.` },
    { type: 'MCQ', prompt: r`Le broyage du cacao appartient au secteur :`, choices: ['secondaire', 'primaire', 'tertiaire'], answer: { index: 0 }, explanation: r`Transformation.` },
    { type: 'MCQ', prompt: r`Les banques appartiennent au secteur :`, choices: ['tertiaire', 'secondaire'], answer: { index: 0 }, explanation: r`Services.` },
    { type: 'MCQ', prompt: r`L'igname est une culture :`, choices: ['vivrière', 'd’exportation'], answer: { index: 0 }, explanation: r`Consommation locale.` },
    { type: 'MCQ', prompt: r`La raffinerie de pétrole SIR se trouve à :`, choices: ['Abidjan', 'Bouaké'], answer: { index: 0 }, explanation: r`Vridi.` },
    { type: 'MCQ', prompt: r`La BRVM a son siège à :`, choices: ['Abidjan', 'Dakar', 'Lomé'], answer: { index: 0 }, explanation: r`Bourse régionale des valeurs mobilières.` },
    { type: 'MCQ', prompt: r`Le secteur qui contribue le plus au PIB ivoirien est :`, choices: ['le tertiaire', 'le primaire'], answer: { index: 0 }, explanation: r`Services.` },
    { type: 'NUMERIC', prompt: r`Angle (en degrés) correspondant à 20 % dans un diagramme circulaire ?`, answer: { value: 72 }, explanation: r`$20 \times 3{,}6$.` },
    { type: 'MCQ', prompt: r`Le coton est surtout cultivé :`, choices: ['dans le Nord', 'dans le Sud forestier'], answer: { index: 0 }, explanation: r`Zone de savane.` },
    { type: 'MCQ', prompt: r`Les sucreries de Ferkessédougou appartiennent au secteur :`, choices: ['secondaire', 'tertiaire'], answer: { index: 0 }, explanation: r`Agro-industrie.` },
    { type: 'MCQ', prompt: r`L'or est extrait notamment à :`, choices: ['Ity, Yaouré, Tongon', 'Grand-Bassam'], answer: { index: 0 }, explanation: r`Mines d'or.` },
    { type: 'MCQ', prompt: r`Le secteur informel désigne :`, choices: ['les activités non déclarées à l’État', 'les grandes entreprises'], answer: { index: 0 }, explanation: r`Petits commerces, artisans…` },
    { type: 'OPEN', prompt: r`Donne un exemple d'activité de chaque secteur en Côte d'Ivoire.`, answer: { model: 'Primaire : culture du cacao ; secondaire : broyage du cacao ; tertiaire : transport au port.', keywords: ['primaire', 'secondaire', 'tertiaire'] }, explanation: r`Trois secteurs.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Les secteurs d’activités économiques',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Pour un diagramme circulaire : calcule chaque angle (% × 3,6), vérifie que la somme fait 360°.
2. Classe correctement chaque activité dans son secteur.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. La pêche lagunaire appartient au secteur :`, type: 'MCQ', choices: ['primaire', 'secondaire', 'tertiaire'], answer: { index: 0 }, points: 2, correction: r`Exploitation de la nature.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Le transport du cacao par camion appartient au secteur :`, type: 'MCQ', choices: ['tertiaire', 'primaire'], answer: { index: 0 }, points: 2, correction: r`Service.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. La Côte d'Ivoire produit environ quelle part du cacao mondial ?`, type: 'MCQ', choices: ['40 %', '4 %', '90 %'], answer: { index: 0 }, points: 2, correction: r`Premier producteur mondial.` },
      { section: 'Exercice 2 (8 pts)', sectionIntro: r`Répartition (fictive, pour l'exercice) de la population active d'une région : primaire 50 %, secondaire 15 %, tertiaire 35 %.`, prompt: r`1. Calcule l'angle (en degrés) correspondant au secteur primaire.`, type: 'NUMERIC', answer: { value: 180 }, points: 3, resultPoints: 1.5, correction: r`$50 \times 3{,}6 = 180°$.` },
      { section: 'Exercice 2 (8 pts)', prompt: r`2. Calcule l'angle (en degrés) correspondant au secteur tertiaire.`, type: 'NUMERIC', answer: { value: 126 }, points: 2, resultPoints: 1, correction: r`$35 \times 3{,}6 = 126°$ (et 54° pour le secondaire).` },
      { section: 'Exercice 2 (8 pts)', prompt: r`3. Que révèle la part du secteur primaire ?`, type: 'OPEN', answer: { model: 'Une région encore essentiellement agricole' }, points: 3, correction: r`La moitié des actifs travaille dans le primaire : la région est surtout **agricole**, peu industrialisée.` },
      { section: 'Exercice 3 (6 pts)', prompt: r`Présente en quelques lignes la place du cacao dans l'économie ivoirienne (production, transformation, exportation).`, type: 'OPEN', answer: { model: '1er producteur ; broyage ; exportation par Abidjan et San-Pédro' }, points: 6, correction: r`Production (1ᵉʳ producteur mondial, zones) *(2 pts)* ; transformation (broyage) *(2 pts)* ; exportation par les ports *(2 pts)*.` },
    ],
  },
};

export const problemesCI: SeedChapter = {
  subject: 'HG',
  order: 10,
  title: 'Les problèmes du développement économique de la Côte d’Ivoire',
  minutes: 240,
  officialRef: `${REF}, thème 1, leçon 3`,
  objectives: [
    'Identifier les problèmes économiques, sociaux et environnementaux du développement',
    'Expliquer leurs causes',
    'Proposer des solutions',
  ],
  courseMd: r`
> **Situation.** Malgré une forte croissance économique depuis 2012, beaucoup de jeunes diplômés cherchent un emploi et des villages manquent encore d'eau potable et de routes bitumées. Quels sont les problèmes du développement ivoirien ?

## 1. Les problèmes économiques
- **Dépendance aux matières premières** : les exportations reposent sur des produits bruts (cacao, anacarde, pétrole, or, caoutchouc) dont les **prix varient** fortement sur le marché mondial ; les revenus des paysans et de l'État en dépendent.
- **Faible transformation** locale : une grande partie des produits est exportée sans être transformée, donc avec peu de valeur ajoutée et peu d'emplois industriels.
- **Importance du secteur informel**, difficile à encadrer et à fiscaliser.
- **Endettement** de l'État.
- Insuffisance d'**énergie** et d'**infrastructures** dans certaines régions (routes rurales, électrification).

## 2. Les problèmes sociaux et humains
- **Chômage** et sous-emploi des **jeunes**.
- **Pauvreté** et **inégalités** entre villes et campagnes, entre régions (Nord/Sud, Abidjan/intérieur).
- Forte **croissance démographique** et **urbanisation** rapide (quartiers précaires, embouteillages à Abidjan, problèmes d'assainissement).
- Accès insuffisant à l'éducation, à la santé et à l'eau potable dans certaines zones.
- Séquelles des **crises sociopolitiques** (2002-2011).
- **Corruption** et mauvaise gouvernance.

## 3. Les problèmes environnementaux
- **Déforestation** massive : la forêt dense, qui couvrait une très grande partie du Sud à l'indépendance, a perdu l'essentiel de sa superficie (agriculture extensive, exploitation du bois, feux de brousse).
- **Orpaillage clandestin** : destruction des terres agricoles, pollution des cours d'eau au mercure.
- Érosion côtière, pollution des lagunes, gestion des déchets.
- Effets du **changement climatique** (pluies irrégulières).

## 4. Les solutions
- **Diversifier** l'économie et **transformer** localement les matières premières (agro-industries, zones industrielles).
- Former les jeunes (formation professionnelle, emploi des jeunes, entrepreneuriat).
- Développer les infrastructures en milieu rural (routes, électrification, eau potable).
- **Bonne gouvernance** et lutte contre la corruption.
- **Reboisement**, agroforesterie, lutte contre l'orpaillage illégal, gestion des déchets.
- Réduire les inégalités régionales, renforcer la cohésion sociale.
`,
  summaryMd: r`
- **Économiques** : dépendance aux matières premières (prix instables), faible transformation, informel, dette, infrastructures insuffisantes.
- **Sociaux** : chômage des jeunes, pauvreté, inégalités régionales, urbanisation rapide, corruption, séquelles des crises.
- **Environnementaux** : déforestation, orpaillage clandestin, pollution, changement climatique.
- **Solutions** : diversification, transformation locale, formation, infrastructures rurales, bonne gouvernance, reboisement.
`,
  questions: [
    { type: 'MCQ', prompt: r`La dépendance aux matières premières rend l'économie :`, choices: ['vulnérable aux variations des prix mondiaux', 'totalement stable'], answer: { index: 0 }, explanation: r`Prix instables.` },
    { type: 'MCQ', prompt: r`Transformer localement le cacao permet :`, choices: ['de créer de la valeur ajoutée et des emplois', 'de produire moins'], answer: { index: 0 }, explanation: r`Solution clé.` },
    { type: 'MCQ', prompt: r`Une cause majeure de la déforestation est :`, choices: ['l’agriculture extensive', 'le reboisement'], answer: { index: 0 }, explanation: r`Défrichement pour les plantations.` },
    { type: 'MCQ', prompt: r`L'orpaillage clandestin pollue les cours d'eau avec :`, choices: ['le mercure', 'le sel'], answer: { index: 0 }, explanation: r`Métal toxique.` },
    { type: 'MCQ', prompt: r`Un problème social important est :`, choices: ['le chômage des jeunes', 'le manque de population'], answer: { index: 0 }, explanation: r`Sous-emploi.` },
    { type: 'MCQ', prompt: r`L'urbanisation rapide d'Abidjan entraîne :`, choices: ['des quartiers précaires et des embouteillages', 'la disparition de la ville'], answer: { index: 0 }, explanation: r`Croissance mal maîtrisée.` },
    { type: 'MCQ', prompt: r`Diversifier l'économie, c'est :`, choices: ['développer d’autres activités que les matières premières', 'produire seulement du cacao'], answer: { index: 0 }, explanation: r`Réduire la dépendance.` },
    { type: 'MCQ', prompt: r`Les inégalités régionales opposent souvent :`, choices: ['Abidjan et le reste du pays', 'deux quartiers identiques'], answer: { index: 0 }, explanation: r`Concentration des activités.` },
    { type: 'MCQ', prompt: r`Le secteur informel pose problème car :`, choices: ['il est difficile à fiscaliser et à protéger', 'il n’existe pas'], answer: { index: 0 }, explanation: r`Peu de protection sociale.` },
    { type: 'MCQ', prompt: r`Une solution environnementale est :`, choices: ['le reboisement', 'les feux de brousse'], answer: { index: 0 }, explanation: r`Et l'agroforesterie.` },
    { type: 'MCQ', prompt: r`La corruption freine le développement car elle :`, choices: ['détourne les ressources publiques', 'augmente les recettes de l’État'], answer: { index: 0 }, explanation: r`Mauvaise gouvernance.` },
    { type: 'MCQ', prompt: r`La baisse du prix mondial du cacao entraîne :`, choices: ['une baisse des revenus des planteurs', 'une hausse automatique des revenus'], answer: { index: 0 }, explanation: r`Dépendance.` },
    { type: 'MCQ', prompt: r`Les crises sociopolitiques ont :`, choices: ['ralenti l’économie', 'accéléré les investissements'], answer: { index: 0 }, explanation: r`Destructions, départ d'investisseurs.` },
    { type: 'MCQ', prompt: r`Former les jeunes aux métiers techniques aide à :`, choices: ['réduire le chômage', 'augmenter la déforestation'], answer: { index: 0 }, explanation: r`Emploi.` },
    { type: 'OPEN', prompt: r`Propose deux solutions au chômage des jeunes.`, answer: { model: 'Formation professionnelle, transformation locale créatrice d’emplois, aide à l’entrepreneuriat.', keywords: ['formation', 'emplois', 'entrepreneuriat'] }, explanation: r`Solutions concrètes.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Les problèmes du développement de la Côte d’Ivoire',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Classe les problèmes : **économiques**, **sociaux**, **environnementaux**.
2. Pour chaque problème, propose une **solution** adaptée.`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. La déforestation est un problème :`, type: 'MCQ', choices: ['environnemental', 'monétaire'], answer: { index: 0 }, points: 2, correction: r`Environnement.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Exporter du cacao non transformé :`, type: 'MCQ', choices: ['crée peu de valeur ajoutée', 'crée beaucoup d’emplois industriels'], answer: { index: 0 }, points: 2, correction: r`Faible transformation.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. Une solution aux inégalités régionales :`, type: 'MCQ', choices: ['développer les infrastructures dans les régions', 'concentrer tout à Abidjan'], answer: { index: 0 }, points: 2, correction: r`Équilibre du territoire.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`Sujet : « Les problèmes du développement économique de la Côte d'Ivoire et les solutions envisagées. » Rédige un développement structuré.`, type: 'OPEN', answer: { model: 'Problèmes économiques, sociaux, environnementaux ; solutions' }, points: 14, correction: r`Introduction *(2 pts)* ; problèmes économiques *(3 pts)*, sociaux *(3 pts)*, environnementaux *(2 pts)* ; solutions *(2 pts)* ; conclusion et expression *(2 pts)*.` },
    ],
  },
};

export const economieAfrique: SeedChapter = {
  subject: 'HG',
  order: 11,
  title: 'Étude économique de l’Afrique',
  minutes: 240,
  officialRef: `${REF}, thème 2, leçon 1`,
  objectives: [
    'Identifier les atouts économiques du continent africain',
    'Décrire les grandes activités économiques et les contrastes de développement',
    'Présenter les obstacles et les efforts d’intégration régionale',
  ],
  courseMd: r`
> **Situation.** L'Afrique possède une grande partie des ressources minérales de la planète et la population la plus jeune du monde. Pourtant, beaucoup de ses pays restent pauvres. Pourquoi ?

## 1. Les atouts du continent
- **Immensité** : environ **30 millions de km²**, 54 États.
- **Ressources naturelles** abondantes :
  - **minières** : or (Ghana, Afrique du Sud, Mali), diamants (Botswana, RDC), **cobalt** (RDC, premier producteur mondial), bauxite (Guinée), uranium (Niger), phosphates (Maroc) ;
  - **énergétiques** : pétrole et gaz (Nigeria, Angola, Algérie, Libye), fort potentiel hydroélectrique et **solaire** ;
  - **agricoles** : vastes terres cultivables, forêts (bassin du Congo), produits tropicaux.
- **Population** : plus de **1,4 milliard** d'habitants, très **jeune** : main-d'œuvre et marché en croissance.

## 2. Les activités économiques
- **Agriculture** : occupe une grande partie des actifs ; cultures vivrières et d'exportation (cacao en Côte d'Ivoire et au Ghana, café en Éthiopie, thé au Kenya, coton au Burkina Faso et au Mali).
- **Mines et hydrocarbures** : principales sources de devises de nombreux pays.
- **Industrie** : encore faible, sauf en Afrique du Sud, en Égypte, au Maroc, au Nigeria.
- **Services** : en progression (télécommunications, **Mobile Money** très développé, tourisme au Maroc, au Kenya, en Égypte…).

## 3. Des contrastes de développement
- Des **puissances régionales** : Nigeria, Afrique du Sud, Égypte, Algérie, Maroc, Kenya.
- Des pays en forte croissance (Côte d'Ivoire, Éthiopie, Rwanda, Sénégal…).
- Des **pays moins avancés** (PMA), souvent enclavés ou touchés par des conflits.

## 4. Les obstacles
- **Économies extraverties** : exportation de produits bruts, importation de produits manufacturés.
- Faible **industrialisation**, infrastructures insuffisantes (routes, électricité).
- **Endettement**, corruption, instabilité politique et **conflits**.
- Problèmes **sociaux** : pauvreté, chômage des jeunes, maladies (paludisme, VIH).
- Contraintes **naturelles** : sécheresses, désertification, changement climatique.

## 5. L'intégration régionale
Pour peser davantage, les pays s'unissent :
- **CEDEAO** (Communauté économique des États de l'Afrique de l'Ouest, créée en **1975**) ;
- **UEMOA** (Union économique et monétaire ouest-africaine, **1994**, franc CFA) ;
- **CEMAC** (Afrique centrale), **SADC** (Afrique australe), **EAC** (Afrique de l'Est) ;
- à l'échelle du continent, la **ZLECAf** (zone de libre-échange continentale africaine).
`,
  summaryMd: r`
- Atouts : ≈ 30 millions de km², ressources minières (or, diamants, cobalt, bauxite, uranium), énergétiques (pétrole, gaz, solaire), agricoles ; population jeune (> 1,4 milliard).
- Activités : agriculture, mines, industrie faible (sauf Afrique du Sud, Égypte, Maroc, Nigeria), services en essor (Mobile Money).
- Obstacles : économies extraverties, faible industrialisation, dette, conflits, pauvreté, climat.
- Intégration : CEDEAO (1975), UEMOA (1994), CEMAC, SADC, EAC, ZLECAf.
`,
  questions: [
    { type: 'MCQ', prompt: r`Le premier producteur mondial de cobalt est :`, choices: ['la RDC', 'le Nigeria', 'le Maroc'], answer: { index: 0 }, explanation: r`République démocratique du Congo.` },
    { type: 'MCQ', prompt: r`Un grand producteur africain de pétrole est :`, choices: ['le Nigeria', 'le Burkina Faso'], answer: { index: 0 }, explanation: r`Avec l'Angola, l'Algérie, la Libye.` },
    { type: 'MCQ', prompt: r`La CEDEAO a été créée en :`, choices: ['1975', '1994', '2002'], answer: { index: 0 }, explanation: r`Traité de Lagos.` },
    { type: 'MCQ', prompt: r`L'UEMOA a été créée en :`, choices: ['1994', '1963'], answer: { index: 0 }, explanation: r`Union économique et monétaire ouest-africaine.` },
    { type: 'MCQ', prompt: r`Une économie extravertie :`, choices: ['dépend de l’extérieur (exportations de produits bruts)', 'produit tout ce qu’elle consomme'], answer: { index: 0 }, explanation: r`Obstacle majeur.` },
    { type: 'MCQ', prompt: r`Le pays le plus industrialisé d'Afrique est souvent considéré :`, choices: ['l’Afrique du Sud', 'le Niger'], answer: { index: 0 }, explanation: r`Puissance industrielle.` },
    { type: 'MCQ', prompt: r`La superficie de l'Afrique est d'environ :`, choices: ['30 millions de km²', '3 millions de km²'], answer: { index: 0 }, explanation: r`Deuxième continent.` },
    { type: 'MCQ', prompt: r`La population africaine dépasse :`, choices: ['1,4 milliard', '100 millions'], answer: { index: 0 }, explanation: r`Très jeune.` },
    { type: 'MCQ', prompt: r`L'uranium est exploité notamment :`, choices: ['au Niger', 'en Côte d’Ivoire'], answer: { index: 0 }, explanation: r`Mines du Nord du Niger.` },
    { type: 'MCQ', prompt: r`La Guinée est riche en :`, choices: ['bauxite', 'pétrole'], answer: { index: 0 }, explanation: r`Minerai d'aluminium.` },
    { type: 'MCQ', prompt: r`Le Mobile Money est un exemple :`, choices: ['d’innovation africaine dans les services', 'd’activité minière'], answer: { index: 0 }, explanation: r`Secteur tertiaire.` },
    { type: 'MCQ', prompt: r`Un PMA est :`, choices: ['un pays moins avancé', 'un pays membre de l’Afrique du Nord'], answer: { index: 0 }, explanation: r`Classement de l'ONU.` },
    { type: 'MCQ', prompt: r`La SADC regroupe des pays :`, choices: ['d’Afrique australe', 'd’Afrique de l’Ouest'], answer: { index: 0 }, explanation: r`Southern African Development Community.` },
    { type: 'MCQ', prompt: r`Le bassin du Congo est connu pour :`, choices: ['ses vastes forêts', 'ses déserts'], answer: { index: 0 }, explanation: r`Deuxième massif forestier tropical du monde.` },
    { type: 'OPEN', prompt: r`Cite deux obstacles au développement de l'Afrique.`, answer: { model: 'Faible industrialisation, conflits, dette, pauvreté.', keywords: ['industrialisation', 'conflits', 'dette'] }, explanation: r`Obstacles variés.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Étude économique de l’Afrique',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Oppose **atouts** et **obstacles** avec des exemples de pays.
2. Termine par les **solutions** (intégration régionale, industrialisation).`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. Le cacao est une culture importante en :`, type: 'MCQ', choices: ['Côte d’Ivoire et au Ghana', 'Égypte'], answer: { index: 0 }, points: 2, correction: r`Premiers producteurs mondiaux.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Le franc CFA est la monnaie de :`, type: 'MCQ', choices: ['l’UEMOA', 'la SADC'], answer: { index: 0 }, points: 2, correction: r`Et de la CEMAC (franc CFA d'Afrique centrale).` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. La ZLECAf vise à :`, type: 'MCQ', choices: ['développer le commerce entre pays africains', 'supprimer les États'], answer: { index: 0 }, points: 2, correction: r`Libre-échange continental.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`Sujet : « L'Afrique, un continent riche mais encore en retard de développement. » Explique ce paradoxe dans un développement structuré.`, type: 'OPEN', answer: { model: 'Atouts (ressources, population) ; obstacles (extraversion, industrie, conflits) ; solutions (intégration)' }, points: 14, correction: r`Introduction *(2 pts)* ; atouts avec exemples *(4 pts)* ; obstacles avec exemples *(4 pts)* ; solutions *(2 pts)* ; conclusion et expression *(2 pts)*.` },
    ],
  },
};

export const afriqueMondialisation: SeedChapter = {
  subject: 'HG',
  order: 12,
  title: 'La place de l’Afrique dans la mondialisation',
  minutes: 240,
  officialRef: `${REF}, thème 2, leçon 2`,
  objectives: [
    'Définir la mondialisation et ses acteurs',
    'Montrer la faible mais croissante intégration de l’Afrique dans les échanges mondiaux',
    'Identifier les atouts et les stratégies pour une meilleure insertion',
  ],
  courseMd: r`
> **Situation.** Le téléphone d'un élève de Bouaké a été assemblé en Asie avec du cobalt de la RDC ; son tee-shirt vient de Chine ; le cacao de son village est mangé en Europe sous forme de chocolat. C'est la **mondialisation**.

## 1. Qu'est-ce que la mondialisation ?
La **mondialisation** est la mise en relation des différentes parties du monde par des **flux** de plus en plus nombreux et rapides : marchandises, capitaux, personnes, informations, cultures.
**Acteurs** : États, entreprises multinationales (FMN), organisations internationales (OMC, FMI, Banque mondiale), diasporas, ONG.
**Moyens** : transports maritimes (conteneurs), aériens, Internet et télécommunications.

## 2. Une Afrique encore marginale
- L'Afrique représente seulement **2 à 3 %** du commerce mondial alors qu'elle compte près d'un habitant sur cinq de la planète.
- **Structure des échanges** : elle exporte surtout des **produits bruts** (pétrole, minerais, cacao, café, coton) et importe des **produits manufacturés** (machines, véhicules, médicaments) et des produits alimentaires (riz, blé).
- **Termes de l'échange** souvent défavorables : les prix des matières premières sont instables, ceux des produits manufacturés augmentent.
- **Faibles échanges entre pays africains**.
- Fracture numérique et infrastructures insuffisantes.

## 3. Une insertion croissante
- **Investissements directs étrangers** (IDE) en hausse : Chine, Union européenne, États-Unis, Turquie, pays du Golfe, Inde ; construction de routes, ports, chemins de fer.
- Accords commerciaux : accords de partenariat avec l'Union européenne, loi **AGOA** avec les États-Unis.
- Ports devenus des **hubs** régionaux : Tanger Med (Maroc), Abidjan, Lomé, Durban.
- **Diasporas** : leurs transferts d'argent sont une ressource importante pour de nombreuses familles.
- **Innovations** : l'Afrique est pionnière du **paiement par téléphone mobile** (Mobile Money).
- Culture : musiques africaines (coupé-décalé, afrobeats), cinéma (Nollywood), sport, à l'échelle mondiale.

## 4. Les stratégies pour mieux s'insérer
- **Transformer** sur place les matières premières (ex. : broyage du cacao en Côte d'Ivoire).
- Développer les **échanges intra-africains** grâce à la **ZLECAf** et aux organisations régionales.
- Améliorer les infrastructures, l'énergie, le numérique et la formation.
- Bonne gouvernance et stabilité pour attirer les investisseurs.
`,
  summaryMd: r`
- Mondialisation : flux de marchandises, capitaux, personnes, informations ; acteurs : États, FMN, OMC, FMI, diasporas.
- Afrique : **2 à 3 %** du commerce mondial ; exporte des produits bruts, importe des produits manufacturés ; faibles échanges intra-africains.
- Insertion croissante : IDE (Chine, UE, États-Unis…), ports-hubs (Tanger Med, Abidjan, Lomé, Durban), diasporas, Mobile Money, culture.
- Stratégies : transformation locale, ZLECAf, infrastructures, formation, bonne gouvernance.
`,
  questions: [
    { type: 'MCQ', prompt: r`La mondialisation est :`, choices: ['la mise en relation des différentes parties du monde par des flux', 'la fermeture des frontières'], answer: { index: 0 }, explanation: r`Définition.` },
    { type: 'MCQ', prompt: r`La part de l'Afrique dans le commerce mondial est d'environ :`, choices: ['2 à 3 %', '30 %', '50 %'], answer: { index: 0 }, explanation: r`Marginale.` },
    { type: 'MCQ', prompt: r`L'Afrique exporte surtout :`, choices: ['des produits bruts', 'des avions'], answer: { index: 0 }, explanation: r`Matières premières.` },
    { type: 'MCQ', prompt: r`L'Afrique importe surtout :`, choices: ['des produits manufacturés', 'du cacao'], answer: { index: 0 }, explanation: r`Machines, véhicules, médicaments.` },
    { type: 'MCQ', prompt: r`Une FMN est :`, choices: ['une firme multinationale', 'un fonds monétaire national'], answer: { index: 0 }, explanation: r`Entreprise présente dans plusieurs pays.` },
    { type: 'MCQ', prompt: r`Un port africain devenu hub mondial est :`, choices: ['Tanger Med', 'Bouaké'], answer: { index: 0 }, explanation: r`Maroc.` },
    { type: 'MCQ', prompt: r`Les IDE sont :`, choices: ['des investissements directs étrangers', 'des impôts directs'], answer: { index: 0 }, explanation: r`Capitaux étrangers.` },
    { type: 'MCQ', prompt: r`L'AGOA est un accord commercial avec :`, choices: ['les États-Unis', 'la Chine'], answer: { index: 0 }, explanation: r`African Growth and Opportunity Act.` },
    { type: 'MCQ', prompt: r`Une innovation où l'Afrique est pionnière :`, choices: ['le paiement par téléphone mobile', 'l’automobile'], answer: { index: 0 }, explanation: r`Mobile Money.` },
    { type: 'MCQ', prompt: r`Les termes de l'échange défavorables signifient que :`, choices: ['les exportations rapportent relativement moins que ce que coûtent les importations', 'l’Afrique exporte trop cher'], answer: { index: 0 }, explanation: r`Prix instables des matières premières.` },
    { type: 'MCQ', prompt: r`La ZLECAf vise à augmenter :`, choices: ['les échanges entre pays africains', 'les droits de douane'], answer: { index: 0 }, explanation: r`Commerce intra-africain.` },
    { type: 'MCQ', prompt: r`Les transferts d'argent des diasporas sont :`, choices: ['une ressource importante', 'interdits'], answer: { index: 0 }, explanation: r`Soutien aux familles.` },
    { type: 'MCQ', prompt: r`L'OMC est :`, choices: ['l’Organisation mondiale du commerce', 'l’Organisation mondiale de la culture'], answer: { index: 0 }, explanation: r`Acteur de la mondialisation.` },
    { type: 'MCQ', prompt: r`Transformer le cacao sur place permet :`, choices: ['de mieux profiter de la mondialisation', 'de perdre des emplois'], answer: { index: 0 }, explanation: r`Valeur ajoutée.` },
    { type: 'OPEN', prompt: r`Explique pourquoi l'Afrique reste marginale dans la mondialisation.`, answer: { model: 'Elle exporte des produits bruts peu valorisés, importe des produits manufacturés, commerce intra-africain faible, infrastructures insuffisantes.', keywords: ['produits bruts', 'manufacturés', 'infrastructures'] }, explanation: r`Structure des échanges.` },
  ],
  assessment: {
    title: 'Devoir BEPC — L’Afrique dans la mondialisation',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Durée : 1 heure · Note sur 20.**`,
    advice: r`### 🎯 Conseils méthodologiques
1. Nuance : l'Afrique est **marginale** mais son **insertion progresse**.
2. Appuie-toi sur des exemples (Côte d'Ivoire, Maroc, Nigeria…).`,
    items: [
      { section: 'Exercice 1 (6 pts)', prompt: r`1. L'Afrique représente environ quelle part du commerce mondial ?`, type: 'MCQ', choices: ['2 à 3 %', '25 %'], answer: { index: 0 }, points: 2, correction: r`Marginale.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`2. Un acteur de la mondialisation :`, type: 'MCQ', choices: ['les firmes multinationales', 'les villages isolés'], answer: { index: 0 }, points: 2, correction: r`FMN.` },
      { section: 'Exercice 1 (6 pts)', prompt: r`3. La ZLECAf favorise :`, type: 'MCQ', choices: ['les échanges intra-africains', 'les guerres commerciales'], answer: { index: 0 }, points: 2, correction: r`Libre-échange.` },
      { section: 'Exercice 2 (14 pts)', prompt: r`Sujet : « L'Afrique dans la mondialisation : une place encore marginale mais en progression. » Rédige un développement structuré.`, type: 'OPEN', answer: { model: 'Définition ; marginalité (chiffres, structure des échanges) ; progrès (IDE, hubs, Mobile Money) ; stratégies' }, points: 14, correction: r`Introduction et définition *(2 pts)* ; marginalité *(4 pts)* ; insertion croissante *(4 pts)* ; stratégies *(2 pts)* ; conclusion et expression *(2 pts)*.` },
    ],
  },
};
