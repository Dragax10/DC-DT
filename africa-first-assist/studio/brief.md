# Brief · Application AFA pour les bénéficiaires

Statut : VALIDÉ par le responsable du studio le 27 novembre 2026 (validation 1).
Sources : réunion de cadrage du 26/11 (meetings/2026-11-26-kickoff-afa.md), consignes et choix du responsable du studio du 27/11, analyse du chatbot WhatsApp Al Amana.

## Contexte
AFA gère l'assistance voyage, santé et automobile. Aujourd'hui, un sinistre se déclare et se suit par téléphone : le client appelle le plateau, raconte qui il est, où il est, ce qui se passe, puis attend sans visibilité. Le métier veut digitaliser ce parcours.

## Pour qui
Les personnes qui bénéficient d'une assistance voyage, santé ou automobile : particuliers, clients directs ou clients des partenaires. Beaucoup n'ont ni téléphone ni email dans les fichiers d'AFA (voir research/2026-11-26-particuliers-classification.md).

## Le problème
Déclarer un sinistre demande un appel et un long récit d'informations que l'AFA a déjà. Ensuite, le client ne sait pas où en est son dossier ni quand l'aide arrive.

## Périmètre
Le studio conçoit **l'application complète**. AFA choisira ensuite son MVP dans ce périmètre. Le minimum attendu : tout ce que couvre le chatbot Al Amana (nouvelle demande et suivi, pour soi ou un proche, maladie, accident ou blessure, hospitalisation, décès, contrôle des doublons, récapitulatif avec référence).

## Ce que fait l'application
1. **Bouton SOS** (insistance forte du métier) : un geste lance la demande. L'application envoie directement au plateau l'identité, le contrat et la position. Le client n'a pas à tout raconter.
2. **Déclarer un sinistre en chat** (style Lemonade), ouvert à la demande. Modifier une réponse et recommencer sont toujours possibles ; rien n'est envoyé avant confirmation. La conversation doit être fiable et rassurante.
3. **Timeline de la prestation, comme une livraison** : après le SOS, la déclaration ou un lien envoyé par la plateforme sinistres, le client suit chaque étape avec son heure et le temps restant. La carte du prestataire est une option, seulement si AFA reçoit sa position (décision du 27/11).
4. **Appeler l'assistance, toujours** : sur chaque écran, avec la possibilité d'être rappelé.
5. **Historique des sinistres.**
6. **Mes contrats** : le détail complet de chaque contrat.
7. **Notifications** : étapes du sinistre, partage de position, arrivée du prestataire, renouvellement, guidance et mises à jour, anniversaire.

## Découpage des sinistres
On classe par **événement**, pas par contrat : un contrat voyage peut couvrir un véhicule, la santé, les bagages, le rapatriement.
- Événements : véhicule (panne, accident, remorquage), santé (maladie, accident corporel, hospitalisation), voyage (bagages, papiers, retour anticipé), décès.
- Lieu : au Maroc ou à l'étranger, détecté par la position. L'étranger ajoute hébergement, rapatriement, numéros locaux.
- La personne choisit l'événement, jamais le contrat. Seuls les événements couverts par ses contrats sont proposés.
- Le décès a un parcours à part : ton calme, pas de minuteur, une personne dès le début.

## Exigences du métier
- Une expérience guidée et claire.
- Des patterns UX clairs et déjà testés, en particulier pour les notifications et les informations complémentaires.

## Hors périmètre (pour l'instant)
- Activation de l'espace client (mise de côté le 27/11, à reprendre).
- Espace B2B (contrats d'entreprise, flottes, avenants).
- Vente en ligne, téléconsultation.

## Mesures de réussite (à fixer avec AFA)
- Part des sinistres déclarés dans l'application.
- Temps entre le SOS et la prise en charge.
- Baisse des appels « où en est mon dossier ? ».
- Réussite des tâches en test utilisateur (SOS, déclaration, suivi).

## Contraintes
- WCAG 2.2 AA ; français et arabe (droite à gauche).
- Couleurs AFA : bleu #006FB1, marine #1F4E80 ; rouge #981222 réservé au SOS.
- Envoi automatique des données au plateau : faisabilité technique à étudier avec l'informatique d'AFA.

## Questions ouvertes pour AFA
- Comment la plateforme sinistres et le plateau reçoivent-ils les données aujourd'hui ? (informatique)
- Quand la personne appelle depuis l'app, l'agent peut-il voir son dossier ? Rappel, reconnaissance du numéro, ou appel dans l'app ? (informatique)
- Quelles étapes de prestation existent vraiment, et qui les met à jour ? (opérations)
- Les prestataires partagent-ils leur position ? (opérations, partenaires)
- Quand plusieurs contrats couvrent le même événement, lequel s'applique et qui décide ? (métier)
- Qui répond dans le chat : un bot, une personne, ou un bot puis une personne ? (métier, opérations)
- Quelles notifications sont autorisées, et avec quel consentement ? (juridique)

## Plan de travail
1. Standards de travail (studio/standards.md)
2. Analyse du chatbot WhatsApp Al Amana
3. User flows et journeys (recherche documentaire, heuristiques, bonnes pratiques)
4. Wireframes des flows pour une première réunion avec AFA
5. Stylescapes (validation 2 : choix de la direction)
6. Écrans UI, tests, puis handoff développeurs (validation 3)
