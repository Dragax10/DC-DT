# Nos standards de travail · Application AFA

Version 1 · 27 novembre 2026. S'applique à tout ce que le studio produit sur ce projet.

## 1. Méthode et validations

Six étapes, trois validations par le responsable du studio :

| Étape | Livrable | Outil | Validation |
|---|---|---|---|
| 0. Brief | studio/brief.md | Repo + Notion | **Validation 1** avant toute recherche ou conception |
| 1. Standards | Ce document | Repo + Notion | |
| 2. Analyse de l'existant | Analyse du chatbot WhatsApp | Notion | |
| 3. Flows et journeys | User flows, user journeys | Miro | |
| 4. Wireframes | Flows en wireframes (gris) | Figma | Revue critique avant la réunion AFA |
| 5. Stylescapes | 2 ou 3 directions visuelles | Claude Design | **Validation 2** : choix d'une direction |
| 6. UI et handoff | Écrans testés, fichier de handoff | Figma | **Validation 3** avant tout envoi aux développeurs |

Rien ne part chez AFA ou chez les développeurs sans l'accord explicite du responsable du studio. Le studio prépare, le responsable envoie.

## 2. Preuves

- Chaque recommandation cite sa source : recherche utilisateur, benchmark, heuristique nommée, ou guideline (Apple, Google, NN/g, Baymard, GOV.UK).
- Une hypothèse est écrite comme une hypothèse, avec la façon de la vérifier.
- Chaque chiffre a une source et une date. Pas d'estimation présentée comme un fait.
- Les sujets métier, informatique, juridique et opérations sont posés en questions aux équipes AFA. Nous ne les tranchons pas.

## 3. Standards UX

### 3.1 Patterns testés d'abord
On part de patterns déjà validés avant d'inventer :
- **Apple Human Interface Guidelines** et **Material Design 3** : navigation, boutons, notifications, permissions.
- **GOV.UK Design System** : formulaires guidés (une question par écran), pages de confirmation, listes d'étapes.
- **Baymard Institute** : formulaires et saisie.
- **Nielsen Norman Group** : les 10 heuristiques d'utilisabilité, timelines de statut, notifications.
- **Benchmark assistance** (26/11) : ADAC, Green Flag, Allyz, International SOS, Assist America, AXA.
- **Lemonade** (assurance), ajouté par le responsable du studio : parcours conversationnel une question à la fois, déclaration de sinistre guidée avec photos ou courte vidéo, statut clair, contrat en langage simple. Limites pour AFA : une personne décide d'une prise en charge, et le conversationnel ne ralentit jamais un SOS. Fonctionnalités à vérifier dans le benchmark avant de les citer.

Un pattern nouveau doit être signalé comme tel et testé en priorité.

### 3.2 Parcours guidés
- Une seule chose à faire par écran.
- On montre où on en est : étape 2 sur 4.
- Chaque action a une confirmation claire : ce qui s'est passé, et ce qui va se passer ensuite.
- On ne demande jamais une information qu'AFA possède déjà (identité, contrat, véhicule).
- Toujours une porte de sortie : parler à une personne.

### 3.3 SOS et timeline de la prestation
- Le SOS est accessible partout, en un geste, même sans compte.
- Le SOS envoie automatiquement au plateau : identité, contrat, position. Le client n'a pas à tout raconter.
- Après le SOS, une **timeline de la prestation** montre chaque étape : demande reçue, prise en charge, prestataire en route, arrivée, clôture. Chaque étape a une heure.
- Le rouge #981222 est réservé au SOS.
- Aucun délai, réseau faible ou GPS absent ne bloque la demande d'aide.

### 3.4 Notifications
| Type | Exemple | Priorité | Règle |
|---|---|---|---|
| Urgence et prestation | Prestataire en route, arrivé | Critique | Toujours envoyée, son et vibration ; SMS de secours si pas de réseau data |
| Sinistre | Dossier reçu, document manquant, remboursement | Haute | Envoyée ; mène directement au bon écran |
| Partage de position | « Partagez votre position avec l'agent » | Haute | Seulement pendant une prestation ; explique pourquoi |
| Renouvellement | Contrat qui expire dans 30 jours | Moyenne | Une relance, pas plus de deux |
| Guidance et mises à jour | Conseils avant un voyage, nouveautés | Basse | Avec accord ; regroupées |
| Personnelle | Joyeux anniversaire | Basse | Avec accord ; jamais pendant un sinistre en cours |

Règles communes :
- Chaque notification dit quoi, pourquoi, et quoi faire. Elle ouvre l'écran concerné.
- Pas de notification commerciale ni personnelle après un décès ou un refus de prise en charge.
- Heures calmes la nuit, sauf urgence.
- Le client règle ses préférences par type, sauf pour les notifications critiques.

### 3.5 Langue et contenu
- Français et arabe simples. Phrases courtes. Pas de jargon d'assurance : on dit « votre dossier », pas « votre sinistre n° 12345-B ».
- L'arabe est conçu en droite à gauche dès le départ, pas traduit à la fin.
- Les messages d'erreur disent ce qui s'est passé et comment s'en sortir.

### 3.6 Accessibilité (WCAG 2.2 AA minimum)
- Contraste 4,5:1 pour le texte, 3:1 pour les éléments d'interface.
- Zones tactiles d'au moins 44 × 44 pt (iOS) et 48 × 48 dp (Android).
- Taille du texte réglable, lecteur d'écran testé (VoiceOver, TalkBack).
- Pas de compte à rebours avec un lecteur d'écran. Un canal sans voix pour les personnes sourdes ou malentendantes.
- La couleur n'est jamais le seul indicateur d'un statut.

### 3.7 Données et confiance
- On demande la position au moment où elle sert, en expliquant pourquoi.
- On montre ce qui est envoyé au plateau.
- Le minimum de données. Les règles exactes sont fixées par le juridique d'AFA (loi 09-08).

### 3.8 Réseau et appareils
- Les informations clés (contrat, numéros d'urgence) marchent hors ligne.
- L'application fonctionne sur des téléphones d'entrée de gamme et en réseau faible.

## 4. Livrables et conventions

- **Nommage des flows** : F01, F02… avec un nom en clair (« F01 · SOS »). Le même identifiant dans Miro, Figma et Notion.
- **Wireframes** : en gris, sans couleur de marque, avec les vrais textes. Pas de lorem ipsum.
- **Écrans UI** : uniquement avec le design system AFA (tokens, composants). Tout nouveau composant est signalé.
- **Handoff** : chaque écran avec ses états (vide, chargement, erreur, succès), les règles de comportement, les notes d'accessibilité, les textes en français et en arabe, et les tokens utilisés.

## 5. Revue

- Chaque flow ou écran passe par une revue critique (heuristiques, accessibilité, cohérence) avant d'être montré à AFA.
- Les tests utilisateurs se font en français et en arabe, avec au moins une personne qui utilise un lecteur d'écran.

## 6. Rangement

| Quoi | Où |
|---|---|
| Mémoire du projet (brief, décisions, statut, recherche) | Repo, dossier studio/ |
| Documents partagés avec l'équipe | Notion, page projet |
| Flows et journeys | Miro |
| Wireframes, UI, handoff | Figma |
| Directions visuelles | Claude Design |

## 7. Définition de « terminé »

Un livrable est terminé quand :
- il répond à une question du brief ;
- ses sources sont citées ;
- il a passé la revue critique ;
- le responsable du studio l'a validé ;
- il est rangé au bon endroit, et status.md est à jour.
