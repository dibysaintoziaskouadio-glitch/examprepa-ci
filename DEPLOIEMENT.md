# Mise en production

Un serveur Linux (2 vCPU, 4 Go de RAM suffisent pour démarrer) avec Docker, et un nom de domaine qui pointe vers son IP.

## 1. Configuration

```bash
cp .env.prod.example .env.prod
```

Remplis `.env.prod` :

| Variable | Rôle | Si vide |
|---|---|---|
| `DOMAIN` | nom de domaine (le certificat HTTPS est obtenu automatiquement) | obligatoire |
| `POSTGRES_PASSWORD`, `JWT_SECRET` | secrets (32 caractères aléatoires minimum pour le JWT) | obligatoire |
| `SEED_DEMO=false`, `ADMIN_PHONE`, `ADMIN_PASSWORD` | premier administrateur, sans comptes de démonstration | — |
| `OTP_DEV_RETURN=false` | ne plus renvoyer le code SMS dans la réponse | **à mettre à false** |
| `PAYMENT_PROVIDER=cinetpay`, `CINETPAY_API_KEY`, `CINETPAY_SITE_ID` | encaissement Mobile Money et carte | paiements simulés |
| `PAYWALL_ENABLED` | `false` rend tout gratuit | abonnement exigé |
| `VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY`, `VAPID_SUBJECT` | notifications push (`npx web-push generate-vapid-keys`) | pas de notifications |
| `GOOGLE_CLIENT_ID` | bouton « Continuer avec Google » | bouton masqué |
| `ANTHROPIC_API_KEY`, `AI_MODEL` | plan de révision par IA, aide à la correction des copies | plan calculé par règles, aide à la correction masquée |

## 2. Démarrage

```bash
docker compose -f docker-compose.prod.yml --env-file .env.prod up -d --build
# Premier démarrage uniquement : programmes, chapitres, offres et administrateur
docker compose -f docker-compose.prod.yml --env-file .env.prod exec api npm run db:seed
```

Les migrations de base de données s'appliquent automatiquement à chaque démarrage de l'API.

## 3. Brancher les services externes

- **SMS** : implémenter l'envoi dans `server/src/common/sms.service.ts` avec un agrégateur qui couvre Orange, MTN et Moov.
- **CinetPay** : dans le back-office, déclarer l'URL de notification `https://<DOMAIN>/api/payments/webhook/cinetpay`. Le serveur ne fait jamais confiance au contenu de la notification : il revérifie chaque paiement auprès de CinetPay. Les prix doivent être des multiples de 5 FCFA.
- **Google** : console Google Cloud → identifiants → « ID client OAuth » de type Application Web, origine autorisée `https://<DOMAIN>`.
- **IA** : clé API Anthropic. Un plan IA est limité à un toutes les 12 h par élève ; l'aide à la correction n'est proposée qu'aux enseignants, et l'enseignant garde toujours la décision.

## 4. Sauvegardes

```bash
# Base de données (à planifier chaque nuit)
docker compose -f docker-compose.prod.yml exec -T db pg_dump -U examprepa examprepa | gzip > sauvegarde-$(date +%F).sql.gz
# Photos de copies
docker run --rm -v examprepa-ci_uploads:/u -v "$PWD":/b alpine tar czf /b/uploads-$(date +%F).tgz -C /u .
```

## 5. Avant d'ouvrir au public

- Saisir les **coefficients officiels** (Admin → Coefficients).
- Faire **relire les chapitres** par des enseignants (bouton « J'ai relu ce chapitre »).
- Déclaration du traitement auprès de l'**ARTCI** ; parcours de consentement parental pour les mineurs.
- Vérifier les **prix des offres** (Admin → Paiements).
- N'importer des **annales** que si leur diffusion est autorisée.

## Intégration continue

`.github/workflows/ci.yml` vérifie à chaque envoi : typage, tests unitaires, contrôle du contenu, seed, test de bout en bout de l'API et build de l'application web.
