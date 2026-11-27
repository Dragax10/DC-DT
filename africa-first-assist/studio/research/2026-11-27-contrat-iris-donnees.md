# Données du contrat dans IRIS → écrans de l'application

Date : 27 novembre 2026. Source : fiche relevée dans la recette IRIS par le responsable du studio (contrat ISAAF Mondial, voyage, individuel). Les données personnelles de la fiche ne sont pas recopiées ici.

## Ce qu'IRIS contient

| Bloc IRIS | Champs |
|---|---|
| En-tête | Produit (ISAAF Mondial), statut (Actif), branche et type (Voyage · Individuel), n° de police, période (début → fin), prime totale (MAD), durée (Ferme), souscripteur, alerte « dossier incomplet » (contrat signé non déposé) |
| Détails | Type de contrat, durée (3 ans), renouvellement (Ferme), date de souscription, motif du voyage (Business) |
| Souscripteur (= assuré principal) | Nom, personne physique, genre, date de naissance, situation maritale, nationalité, pièce d'identité (CIN), téléphone, e-mail (souvent vide), adresse |
| Bénéficiaires | Liste (ici : seulement l'assuré principal) |
| Véhicules | Liste (ici : aucun) |
| Garanties (30) | Par famille, avec plafonds et conditions Maroc / étranger : assistance médicale (11), panne ou accident (10), décès (5), vol du véhicule (2), juridique à l'étranger (2) |
| Activité | Demandes et avenants (ici : aucun) |

## Ce qu'on montre au client

| Dans l'app | Vient de | Comment on l'écrit |
|---|---|---|
| Nom du contrat | Produit | « ISAAF Mondial », avec le type en clair : « Assistance voyage » |
| Statut | Statut | Pastille « Actif », « Expiré », etc. Jamais la couleur seule |
| N° de contrat | N° de police | Copiable, pour le donner à un agent |
| Validité | Période | « Valable jusqu'au 27 novembre 2029 », jours restants, rappel avant la fin |
| Ce qui est couvert | Garanties | Regroupé par situation : santé, véhicule, décès, vol du véhicule, aide juridique à l'étranger. Plafonds en phrases simples : « Remorquage jusqu'au garage le plus proche, jusqu'à 1 400 MAD au Maroc et 3 000 MAD à l'étranger » |
| Personnes couvertes | Souscripteur + bénéficiaires | Nom et lien. Alimente « Pour qui ? » dans le SOS et le chat |
| Véhicules couverts | Véhicules | Seulement s'il y en a |
| Documents | Contrat, attestation, documents manquants | Télécharger ; « À fournir » si un document manque et que le client peut le fournir |
| Mes demandes | Activité | Liste des dossiers liés à ce contrat |
| Détails | Date de souscription, durée, prime, renouvellement, motif | Dans une section repliée, en mots simples (« Ferme » à reformuler) |

## Ce qui reste côté agent, ou à confirmer
- Genre, situation maritale, nationalité : utiles au plateau, pas à l'écran du contrat. Le profil peut les afficher si AFA le souhaite.
- Pièce d'identité : jamais en entier, au plus les derniers caractères.
- Avenants : sens à expliquer avant de les montrer au client.
- Alerte « dossier incomplet » : à montrer seulement si le client doit agir.

## Ce que ça change dans les flows
- **Les familles de garanties = les événements proposés dans le SOS et le chat.** Médicale → Santé ; panne ou accident, vol → Véhicule ; décès → Décès ; juridique → Voyage. On ne propose que les familles présentes dans les contrats de la personne.
- **Les bénéficiaires alimentent « Pour qui ? ».**
- **Les plafonds Maroc / étranger** permettent d'afficher ce qui est couvert selon le lieu du sinistre.
- **Le téléphone existe dans IRIS pour ce contrat** (souscription récente) ; l'e-mail est vide.

## Questions pour AFA
1. Un contrat voyage avec 12 garanties véhicule mais aucun véhicule rattaché : comment le véhicule est-il identifié lors d'un sinistre ?
2. Que veut dire « Ferme » pour la durée et le renouvellement, et comment l'expliquer au client ?
3. Le client doit-il voir la prime totale ?
4. L'alerte « dossier incomplet » (contrat signé non déposé) bloque-t-elle la prise en charge ? Le client peut-il déposer le document dans l'app ?
5. Les bénéficiaires d'un contrat familial apparaissent-ils dans IRIS avec leur lien de parenté ?
