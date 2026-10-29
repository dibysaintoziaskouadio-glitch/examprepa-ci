import { SeedChapter } from '../types';
import { thales } from '../thales';
import { calculLitteral, racinesCarrees, triangleRectangle } from './math-1';
import { anglesInscrits, calculNumerique, equationsR, vecteurs } from './math-2';
import { coordonneesVecteurs, equationsDroites, pyramidesCones, statistique } from './math-3';
import { applicationsAffines, equationsR2 } from './math-4';
import { energieMecanique, equilibre, forces, massePoids, travailPuissance } from './pc-1';
import { alcanes, defautsOeil, electrolyseEau, lentilles } from './pc-2';
import { conducteurOhmique, oxydation, puissanceElectrique, reductionOxydes, solutionsPH } from './pc-3';
import { aliments, circulation, digestion, sang, transfusion } from './svt-1';
import { caracteristiquesSol, degradationSols, grossessesPrecoces, protectionSols, solsPlantes, vih } from './svt-2';
import { crisesAfrique, deuxiemeGuerre, imperialisme, independanceCI, onu, rwanda, unionAfricaine } from './hg-1';
import { afriqueMondialisation, atoutsCI, economieAfrique, problemesCI, secteursCI } from './hg-2';
import { civismeFiscal, devoirsParents, institutionsJuridictionnelles, organisationsHumanitaires, partisPolitiques, scrutinElectoral, violencesVulnerables } from './edhc-1';
import { alliancesInterethniques, biensPublics, depistageVIH, gestionEau, maladiesEndemiques, parcsReserves, projetEntreprise } from './edhc-2';
import { causeConsequenceBut, conditionOpposition, coordination, infinitifParticipe, orthographeLexicale, pronominalisation, tempsComparaison } from './fr-1';
import { adverbe, articleJournal, communication, orthographeGrammaticale, resume, texteArgumentatif } from './fr-2';
import { fashion, lifeAtSchool, travelling, womenAtWork } from './ang-1';
import { cityOrVillage, humanRights, hygieneHealth, icts } from './ang-2';
import { civilidades, gustos, intercambioInformacion, mundoHispanico, opinion, orden, sentimientos } from './esp';
import { aufDemMarkt, begruessen, ersterKontakt, ichLadeDichEin, juliana, lieblingsfach, reiseNachMan, tageslauf } from './all';

/** Tous les chapitres du BEPC, dans l'ordre de la progression officielle 2026-2027. */
export const BEPC_CHAPTERS: SeedChapter[] = [
  // Mathématiques (14 leçons)
  calculLitteral,
  thales,
  racinesCarrees,
  triangleRectangle,
  calculNumerique,
  anglesInscrits,
  vecteurs,
  equationsR,
  pyramidesCones,
  statistique,
  coordonneesVecteurs,
  equationsDroites,
  applicationsAffines,
  equationsR2,
  // Physique-Chimie (14 leçons)
  massePoids,
  forces,
  equilibre,
  travailPuissance,
  energieMecanique,
  electrolyseEau,
  alcanes,
  lentilles,
  defautsOeil,
  oxydation,
  reductionOxydes,
  solutionsPH,
  puissanceElectrique,
  conducteurOhmique,
  // SVT (11 leçons)
  aliments,
  digestion,
  sang,
  transfusion,
  circulation,
  grossessesPrecoces,
  vih,
  caracteristiquesSol,
  solsPlantes,
  degradationSols,
  protectionSols,
  // Histoire-Géographie (7 + 5 leçons)
  imperialisme,
  independanceCI,
  crisesAfrique,
  rwanda,
  deuxiemeGuerre,
  onu,
  unionAfricaine,
  atoutsCI,
  secteursCI,
  problemesCI,
  economieAfrique,
  afriqueMondialisation,
  // EDHC (14 leçons)
  devoirsParents,
  organisationsHumanitaires,
  violencesVulnerables,
  partisPolitiques,
  institutionsJuridictionnelles,
  scrutinElectoral,
  civismeFiscal,
  biensPublics,
  projetEntreprise,
  alliancesInterethniques,
  maladiesEndemiques,
  depistageVIH,
  parcsReserves,
  gestionEau,
  // Français (13 leçons)
  causeConsequenceBut,
  tempsComparaison,
  conditionOpposition,
  orthographeLexicale,
  coordination,
  pronominalisation,
  infinitifParticipe,
  adverbe,
  orthographeGrammaticale,
  communication,
  texteArgumentatif,
  resume,
  articleJournal,
  // Anglais (8 thèmes)
  lifeAtSchool,
  womenAtWork,
  travelling,
  fashion,
  cityOrVillage,
  humanRights,
  hygieneHealth,
  icts,
  // Espagnol (7 leçons)
  mundoHispanico,
  civilidades,
  intercambioInformacion,
  opinion,
  gustos,
  sentimientos,
  orden,
  // Allemand (8 leçons)
  ersterKontakt,
  begruessen,
  aufDemMarkt,
  reiseNachMan,
  lieblingsfach,
  juliana,
  ichLadeDichEin,
  tageslauf,
];
