# Brief · Application AFA pour les bénéficiaires (V1)

Statut : BROUILLON, à valider par le responsable du studio (validation 1). Date : 27 novembre 2026.
Sources : réunion de cadrage du 26/11 (meetings/2026-11-26-kickoff-afa.md), consignes du responsable du studio du 27/11.

## Contexte
AFA gère l'assistance voyage, santé et automobile. Aujourd'hui, un sinistre se déclare et se suit par téléphone : le client appelle le plateau, raconte qui il est, où il est, ce qui se passe, puis attend sans visibilité. Le métier veut digitaliser ce parcours.

## Pour qui
Les personnes qui bénéficient d'une assistance voyage, santé ou automobile (particuliers, clients directs ou clients des partenaires). Beaucoup n'ont ni téléphone ni email dans les fichiers d'AFA (voir research/2026-11-26-particuliers-classification.md).

## Le problème
Déclarer un sinistre demande un appel et un long récit d'informations que l'AFA a déjà. Ensuite, le client ne sait pas où en est son dossier ni quand l'aide arrive.

## Ce que fait la V1
1. **Bouton SOS** (insistance forte du métier) : un geste lance la demande. L'application envoie directement au plateau l'identité, le contrat et la position. Le client n'a pas à tout raconter.
2. **Timeline de la prestation** : après le SOS (ou après un lien envoyé par la plateforme sinistres), le client suit chaque étape : demande reçue, prise en charge, prestataire envoyé, arrivée, clôture.
3. **Déclarer un sinistre** de façon guidée, et **suivre** ses sinistres en cours.
4. **Historique des sinistres.**
5. **Mes contrats** : voir le détail complet de chaque contrat.
6. **Notifications** : personnelles (anniversaire), guidance et mises à jour, renouvellement, étapes du sinistre, partage de position, arrivée du prestataire.

## Découpage des sinistres (ajouté le 27/11)
On classe par **événement**, pas par contrat : un contrat voyage peut couvrir un véhicule, la santé, les bagages, le rapatriement.
- Événements : véhicule, santé, voyage (hors véhicule et santé), décès.
- Lieu : au Maroc ou à l'étranger (détecté par la position) ; l'étranger ajoute hébergement, rapatriement, numéros locaux.
- La personne choisit l'événement, jamais le contrat. Seuls les événements couverts par ses contrats sont proposés.
- Question pour AFA : quand plusieurs contrats couvrent le même événement, lequel s'applique et qui décide ?

## Choix du 27/11 (responsable du studio)
- **Déclaration en chat** (style Lemonade). Défi : rendre la conversation fiable et rassurante ; modifier une réponse et recommencer doivent toujours être accessibles.
- **Périmètre minimum V1 = tout ce que couvre le chatbot Al Amana** : nouvelle demande et suivi de dossier ; pour moi-même ou un proche (ayants droit) ; événements maladie, accident ou blessure, hospitalisation, décès ; contrôle des doublons ; récapitulatif avec référence.
- L'activation de l'espace est mise de côté pour l'instant.

## Exigences du métier
- Une expérience guidée et claire.
- Des patterns UX clairs et déjà testés, en particulier pour les notifications et les informations complémentaires.

## Hors périmètre V1 (à confirmer)
Espace B2B (contrats d'entreprise, flottes, avenants), vente en ligne, téléconsultation, chat.

## Mesures de réussite (à fixer avec AFA)
- Part des sinistres déclarés dans l'application.
- Temps entre le SOS et la prise en charge.
- Baisse des appels « où en est mon dossier ? ».
- Réussite des tâches en test utilisateur (SOS, déclaration, suivi).

## Contraintes
- WCAG 2.2 AA ; français et arabe (droite à gauche).
- Couleurs AFA : bleu #006FB1, marine #1F4E80 ; rouge #981222 réservé au SOS.
- Envoi automatique des données au plateau : faisabilité technique à étudier avec l'informatique d'AFA.
- Clients sans téléphone ni email connus : parcours d'activation à prévoir.

## Questions ouvertes pour AFA
- Comment la plateforme sinistres et le plateau reçoivent-ils les données aujourd'hui ? (informatique)
- Quelles étapes de prestation existent vraiment, et qui les met à jour ? (opérations)
- Les prestataires partagent-ils leur position ? (opérations, partenaires)
- Quelles notifications sont autorisées, et avec quel consentement ? (juridique)

## Plan de travail
1. Standards de travail (studio/standards.md)
2. Analyse du chatbot WhatsApp AFA existant
3. User flows et journeys (recherche documentaire, heuristiques, bonnes pratiques)
4. Wireframes des flows pour une première réunion avec AFA
5. Stylescapes (validation 2 : choix de la direction)
6. Écrans UI, tests, puis handoff développeurs (validation 3)
