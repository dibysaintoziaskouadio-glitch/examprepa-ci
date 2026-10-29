# ExamPrepa CI — MVP

Plateforme de préparation au **BEPC** et au **BAC** (Côte d'Ivoire) : cours, fiches de révision, questions de cours corrigées immédiatement, devoirs notés /20 au format examen, correction par l'enseignant et suivi de progression. Le client est une PWA, mobile d'abord, qui fonctionne hors ligne.

```
examprepa-ci/
├── docker-compose.yml   PostgreSQL 16 (port 5433)
├── server/              API NestJS + Prisma + PostgreSQL
│   ├── prisma/          schéma, migrations, initialisation (seed)
│   │   └── content/bepc/  les 101 chapitres du BEPC (un fichier par matière)
│   ├── src/             modules : auth, curriculum, assessments, progress, content, admin, uploads
│   └── scripts/smoke.mjs  test de bout en bout de l'API
└── web/                 PWA React + Vite + Tailwind (Dexie/IndexedDB pour le hors-ligne)
```

## Démarrage

Prérequis : Node 18+, Docker.

```bash
# 1. Base de données
docker compose up -d

# 2. API (http://localhost:4300/api)
cd server
cp .env.example .env            # puis remplace JWT_SECRET par une chaîne aléatoire de 32+ caractères
npm install
npx prisma migrate deploy
npm run db:seed
npm run dev

# 3. Application web (http://localhost:5174)
cd ../web
npm install
npm run dev
```

## Contenu pédagogique : tout le BEPC

**101 chapitres**, conformes à la liste officielle des leçons de 3ᵉ (progressions annuelles **DPFC 2026-2027**, programmes éducatifs DPFC) :

| Matière | Chapitres | | Matière | Chapitres |
|---|---|---|---|---|
| Mathématiques | 14 | | Français | 13 |
| Physique-Chimie | 14 | | Anglais | 8 thèmes |
| SVT | 11 | | Espagnol | 7 |
| Histoire-Géographie | 12 | | Allemand | 8 |
| EDHC | 14 | | EPS | épreuve pratique (pas de cours écrit) |

Chaque chapitre comprend : un **cours** (situation d'apprentissage ivoirienne, formules, exemples), une **fiche de révision**, **15 questions de cours** corrigées et un **devoir noté /20** au format BEPC avec barème détaillé et conseils de méthode. Total : 1 515 questions de cours et 748 questions de devoirs.

- **Contrôle automatique** : `npm run content:check` vérifie que chaque devoir totalise 20 points, que chaque QCM désigne une réponse existante et que chaque formule s'affiche.
- **Relecture obligatoire** : tous les chapitres sont livrés **« à relire »**. Tant qu'un enseignant ne les a pas validés (bouton « J'ai relu ce chapitre » dans l'éditeur), l'élève voit un avertissement. Le contenu a été rédigé avec soin, mais il doit être relu par des enseignants avant une utilisation réelle.
- **Verrouillage** : désactivé par défaut. L'enseignant peut, devoir par devoir, bloquer le chapitre suivant tant que l'élève n'atteint pas la note minimale.
- **LV2** : l'Espagnol et l'Allemand sont deux matières distinctes ; seules les notes obtenues comptent dans la moyenne.
- **BAC** : les séries et leurs matières existent, mais les chapitres de Terminale restent à rédiger.

### Comptes de démonstration

| Rôle | Téléphone | Mot de passe |
|---|---|---|
| Élève (Aya Kouassi, BEPC) | 07 00 00 00 03 | `Eleve2026!` |
| Enseignante (Mariam Traoré) | 07 00 00 00 02 | `Prof2026!` |
| Administrateur | 07 00 00 00 01 | `Admin2026!` |
| Enseignant en attente de validation | 05 00 00 00 04 | `Prof2026!` |

En développement (`OTP_DEV_RETURN=true`), le code SMS d'inscription est affiché à l'écran et dans les logs de l'API.

Pour remettre la base dans son état de démonstration : `cd server && npm run db:reset`.

## Tests

```bash
cd server
npm test                    # moteur de correction (13 tests unitaires)
node scripts/smoke.mjs      # parcours complet sur l'API lancée : inscription OTP → verrou → quiz → devoir →
                            # correction → déblocage → relecture → tableau de bord → admin → mot de passe oublié
npm run content:check       # contrôle qualité des 101 chapitres
```

## Ce que fait le MVP

**Élève**
- Inscription par téléphone avec code OTP, connexion, mot de passe oublié.
- Choix BEPC / BAC et de la série ; matières de la série avec progression en %.
- Chapitre en 4 étapes : **Cours → Fiche → Quiz → Devoir**, avec formules (KaTeX), figures SVG et lecture audio par la synthèse vocale du téléphone.
- Quiz corrigé immédiatement avec explications, bouton « refaire mes erreurs » et confettis à partir de 80 %.
- Devoir chronométré : alertes à 15, 5 et 1 min, remise automatique, brouillon sauvegardé à chaque frappe, photo de copie (compressée avant envoi).
- Correction automatique (QCM, résultats numériques avec tolérance, « 7,5 cm » ou « 3 750 000 FCFA » acceptés) ; note provisoire puis note définitive après passage de l'enseignant.
- Chapitre suivant **verrouillé** tant que le devoir bloquant n'atteint pas 10/20.
- Tableau de bord : moyenne générale pondérée, moyennes par matière, courbe des notes, points forts et faibles, recommandations, badges Bronze / Argent / Or / Diamant, objectif de moyenne.
- **Hors ligne** : bouton « Télécharger » par chapitre (cours, fiche, quiz et sujet du devoir dans IndexedDB). Les réponses aux quiz et les copies sont mises en file d'attente puis envoyées au retour du réseau, sans risque de doublon (UUID générés sur le téléphone). Un badge signale quand un chapitre téléchargé a été mis à jour.
- Thème clair / sombre / automatique, 4 tailles de texte, export et suppression des données personnelles (loi 2013-450).

**Enseignant**
- File des copies à corriger ; grille de barème item par item, pré-remplie par la correction automatique ; commentaires ; re-correction possible (tracée dans le journal d'audit).
- Statistiques : moyenne et taux de réussite par devoir, réussite par question, élèves en difficulté.
- Éditeur de chapitres (Markdown + formules avec aperçu, statut brouillon / relecture / publié) et des questions de cours.

**Administrateur**
- Indicateurs globaux, validation des comptes enseignants, gestion des rôles et des statuts.

## Choix techniques à connaître

- **Le corrigé des devoirs ne quitte jamais le serveur avant la remise.** Celui des quiz est livré au téléphone, pour la correction immédiate hors ligne.
- **Seule la première copie d'un devoir compte dans les moyennes** : l'élève voit le corrigé après la remise, les copies suivantes sont donc de l'entraînement. Le déblocage du chapitre suivant tient compte de la meilleure note.
- Les photos de copies ne sont **pas** servies publiquement : seuls leur auteur et le personnel enseignant y accèdent, avec leur jeton.
- Jeton de session de 30 jours, pour que l'élève puisse réviser longtemps sans réseau.
- Les espaces enseignant et admin sont chargés à la demande : un élève ne télécharge jamais ce code.
- `serialize-javascript` est épinglé en 6.0.2 dans `web/package.json` pour que le build fonctionne sous Node 18.

## À valider avant une mise en production

- **Coefficients** : tous à 1 dans `server/prisma/seed.ts`, à remplacer par les coefficients officiels de la DECO.
- **Séries et matières du BAC** : à valider auprès du MENA / de la DECO (la série F a été ajoutée).
- **Contenus** : faire relire et valider les 101 chapitres par des enseignants de chaque discipline (mention « à relire » visible des élèves tant que ce n'est pas fait).
- **SMS** : brancher un agrégateur couvrant Orange, MTN et Moov dans `server/src/common/sms.service.ts` et passer `OTP_DEV_RETURN=false`.
- Déclaration du traitement de données auprès de l'ARTCI ; vrai parcours de consentement parental pour les mineurs (le MVP ne fait que recueillir le numéro d'un parent).

## Pas encore dans le MVP (prévu en v1)

Paiements Mobile Money (via CinetPay ou PayDunya) et abonnements · connexion Google · éditeur de devoirs et banque d'exercices · classes et rattachement élève ↔ enseignant (pour l'instant, tout enseignant voit toutes les copies) · messagerie et annonces · annales et examens blancs · mode Combat et classements · recommandations par IA et aide à la correction des copies photographiées · langues locales · notifications push.
