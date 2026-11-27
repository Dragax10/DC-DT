# User journeys J1 à J5 · Application AFA

27 novembre 2026. Miro, section « 04 · User journeys ».
Personas **hypothétiques**, construits à partir du brief, de l'analyse du chatbot Al Amana, du benchmark (26/11) et des données du contrat IRIS. Les ressentis et les points de friction sont des hypothèses, à vérifier en test utilisateur.
Ressenti : 1 très mal, 2 mal, 3 moyen, 4 bien, 5 très bien.

Note : le widget « journey » de Miro n'est pas inclus dans l'offre du tableau. Les journeys sont dessinées avec des formes simples (phases en colonnes, 6 lignes, une ligne de ressenti).

## J1 · Youssef, panne sur l'autoroute la nuit (véhicule, Maroc)

| Étape | Ressenti | Ce qui coince | Opportunité |
|---|---|---|---|
| La voiture s'arrête sur l'A3, de nuit | 1 | Numéro introuvable dans le noir | Widget SOS sur l'écran verrouillé, sécurité d'abord · F01 |
| Appuie sur SOS : Véhicule, Panne | 2 | GPS imprécis, réseau faible | Repères routiers (sens, kilomètre), envoi par SMS sans data |
| L'agent rappelle | 3 | Attente du rappel sans délai connu | Délai de rappel estimé, selon l'urgence · F04 |
| Suit le dépanneur (étapes et temps restant) | 3 | Temps restant imprécis ou pas mis à jour | Nom et véhicule du dépanneur, temps restant honnête et mis à jour · F03, F07 |
| Remorquage vers un garage | 3 | Ignore que retour et hébergement sont couverts | Proposer les garanties liées du contrat · F06 |
| Le dossier est clos | 4 | Documents pour le garage dispersés | Résumé et documents gardés dans l'historique · F05 |

## J2 · Fatima, hospitalisation de son père (ayant droit, santé, Maroc)

| Étape | Ressenti | Ce qui coince | Opportunité |
|---|---|---|---|
| Son père fait un malaise | 1 | Ne sait pas si son père est couvert | Voir les proches couverts dans Mon contrat · F06 |
| Déclare en chat « pour un proche » | 2 | Documents médicaux pas encore disponibles | Envoyer maintenant, compléter plus tard · F02 |
| Récapitulatif et référence | 3 | Peur d'avoir fait un doublon | Contrôle des doublons, comme le chatbot |
| Prise en charge validée | 3 | Ne comprend pas ce qui est pris en charge | Montants et plafonds en langage simple · F03, F07 |
| Document manquant demandé | 2 | Demande floue | Dire quel document, pourquoi, avec un exemple |
| Sortie et clôture | 4 | Retour à domicile non organisé | Proposer le transport retour s'il est couvert · F05 |

## J3 · Karim, frais médicaux à l'étranger (santé, ISAAF Mondial, remboursement)

| Étape | Ressenti | Ce qui coince | Opportunité |
|---|---|---|---|
| Forte fièvre à Paris | 2 | Ne connaît pas le système de santé local | Lieu détecté : mode étranger, numéros locaux · F01 |
| Appelle l'assistance depuis l'app | 3 | Coût d'un appel international | Appel par data ou rappel par l'agent · F04 |
| Consulte et paie la pharmacie | 2 | Reçus papier, en langue étrangère | Photographier les reçus tout de suite dans le dossier |
| Déclare en chat à son retour | 3 | Montants en euros, RIB demandé | Conversion affichée, RIB enregistré une fois · F02 |
| Suit le remboursement | 3 | Délai inconnu | Délai indicatif par étape (à confirmer par AFA) · F03 |
| Remboursement reçu | 4 | Reste à charge non expliqué | Détail ligne par ligne, avec la raison · F05 |

## J4 · Nadia, décès de son frère à l'étranger (décès, rapatriement)

| Étape | Ressenti | Ce qui coince | Opportunité |
|---|---|---|---|
| Apprend le décès de son frère en Espagne | 1 | Aucune idée des démarches | Parcours décès à part, ton calme |
| Ouvre l'app : « Un décès » | 1 | Un chat ou un formulaire serait déplacé | Appel direct en premier, pas de minuteur · F04 |
| L'agent prend tout en charge | 2 | Répéter des informations douloureuses | L'agent voit déjà contrat et bénéficiaires |
| Suit les démarches de rapatriement | 2 | Étapes longues et opaques | Timeline sobre, une personne référente nommée · F03 |
| Arrivée du corps au Maroc | 2 | Notification au ton inadapté | Textes relus, sobres, sans émoji · F07 |
| Dossier clos | 3 | Recevoir ensuite une pub ou un anniversaire | Bloquer les notifications non essentielles (standards 3.4) |

## J5 · Hassan, sans l'app, suivi par lien SMS (véhicule, Maroc)

| Étape | Ressenti | Ce qui coince | Opportunité |
|---|---|---|---|
| Petit accident à Marrakech | 2 | Aucun email ni téléphone chez AFA | Le numéro reste le premier canal |
| Appelle le plateau | 3 | Identification longue, tout réexpliquer | L'agent enregistre son numéro pour la suite |
| Reçoit un lien par SMS | 3 | Peur de l'arnaque par SMS | Expéditeur AFA reconnaissable, référence dans le SMS · F03 |
| Suit le dépanneur sur le lien | 4 | Lien expiré après la prestation | Proposer l'app à la fin, pas avant |
| Installe l'app (s'il le veut) | 3 | Activation du compte (hors périmètre) | Activation par le numéro de dossier · question AFA |
| Clôture | 4 | Historique perdu sans l'app | Résumé envoyé par SMS · F05 |

## Ce que les journeys montrent
- Les pires moments sont le début (panique, ne pas savoir qui appeler) et l'attente sans délai. Le SOS et la timeline visent exactement ces deux creux.
- Trois personas sur cinq ne savent pas ce que leur contrat couvre au moment où ça compte. « Mon contrat » doit répondre en contexte, pas seulement dans un onglet.
- Le décès demande un parcours à part : une personne d'abord, pas de chat.
- Sans l'app, le lien SMS de suivi suffit pour la prestation ; l'app se propose après.

## Questions pour AFA (nouvelles)
- Délais indicatifs de rappel et de remboursement : peut-on les afficher ? (opérations)
- Une personne référente nommée pour les dossiers décès ? (opérations)
- Expéditeur SMS officiel AFA et format du lien de suivi ? (informatique, juridique)
