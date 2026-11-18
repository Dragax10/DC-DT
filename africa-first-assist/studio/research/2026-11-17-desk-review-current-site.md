# DESK REVIEW — current Africa First Assist website

Date: 2026-11-17
Author: research
Type: **DESK REVIEW. Not user research.** Everything here comes from reading the public website. It says what the site shows, not what users need or do. Do not cite it as evidence of user behaviour.
Scope: www.africafirstassist.com, travel ("Assistance Voyage") pages first. Competitor/benchmark scan is a separate, still-open task.

## How this was done
- Pages fetched with curl on 2026-11-17, following links from the site's own navigation. Raw HTML kept outside the repo (session scratchpad, not durable).
- Page language is French. Quotes below are copied from the pages, in French.
- **Gap:** the online subscription site `https://voyage.africafirstassist.com` (all "Souscrire en ligne" links) was **refused by this session's network proxy (403)**. Only `www.` is allowed. So the online quote/purchase steps were **not seen**. Everything about that flow below is limited to the link targets.
- No screenshots, no rendering, no JavaScript run. Visual and contrast findings are limited to what HTML/CSS shows.

## Sources
| ID | Page | URL |
|---|---|---|
| S1 | Home | https://www.africafirstassist.com/ |
| S2 | Assistance Voyage (category) | https://www.africafirstassist.com/produits/assistance-voyage/ |
| S3 | Isaaf Visa Europe | https://www.africafirstassist.com/produit/assistance-voyage/isaaf-visa-europe-3/ |
| S4 | Isaaf Monde | https://www.africafirstassist.com/produit/assistance-voyage/isaaf-monde-3/ |
| S5 | Isaaf Monde Premium | https://www.africafirstassist.com/produit/assistance-voyage/isaaf-monde-premium/ |
| S6 | Isaaf Monde Santé | https://www.africafirstassist.com/produit/assistance-voyage/isaaf-monde-sante/ |
| S7 | Isaaf Étudiants Expatriés | https://www.africafirstassist.com/produit/assistance-voyage/isaaf-etudiant-expatrie/ |
| S8 | Contact | https://www.africafirstassist.com/contact/ |
| S9 | Qui sommes-nous ? (about) | https://www.africafirstassist.com/qui-sommes-nous/ |
| S10 | Points de vente (agency finder) | https://www.africafirstassist.com/points-de-vente/ |
| S11 | Entreprises & administrations | https://www.africafirstassist.com/entreprises-administrations/ |
| S12 | Mentions légales | https://www.africafirstassist.com/mentions-legales/ |
| S13 | Subscription site (NOT reachable from this session) | https://voyage.africafirstassist.com/ |
| S14 | Elementor global CSS (colour tokens) | https://www.africafirstassist.com/wp-content/uploads/elementor/css/post-34.css |

Not fetched (out of the ~12 page budget): Assistance Médicale, Véhicules, Domicile, Décès product pages; Notre organisation; Notre réseau de prestataires; Devenir partenaire / collaborateur; product PDFs ("fiche produit"). The Visa Europe PDFs exist (HTTP 200, application/pdf) but were not read.

---

## PART A — FACTS (what the site states)

### A1. Company and positioning
- Name: Africa First Assist. Tagline on home: "L'expertise d'une assistance engagée à vos côtés, au Maroc et dans le monde." [S1]
- "Filiale du Groupe SANLAMALLIANZ" [S9]. History: created 1981 as ISAAF Mondial Assistance; became SAHAM Assistance in 2014; bought by SANLAM 2018; "SAHAM Assistance devient Africa First Assist" [S9] — rename in 2021 per AFA timeline and press (2019 was an innovation award; corrected 2026-11-18, see 2026-11-18-recognition-afa.md). The LinkedIn link still points to `linkedin.com/company/saham-assistance/` [S1].
- Claims: 8 million clients/beneficiaries in 20 African countries [S9]; "Présence dans plus de 20 pays en Afrique" [S1]; 460 000 providers worldwide [S1, S2, S9]; 24/7 assistance [S1, S9]; ISO 9001 v2015 and SERVICERT certified [S9]; "96,3% de taux de satisfaction client", "97% des appels pris en moins de 5 secondes" [S9] (no source or date given for these figures).

### A2. What they offer
Main product families (nav "Nos Produits") [S1]:
- **Assistance Voyage**: Isaaf Visa Europe, Isaaf Monde Premium, Isaaf Monde santé, Isaaf Monde, Isaaf Étudiants Expatriés
- **Assistance Médicale**: Isaaf Résidents Étrangers au Maroc
- **Assistance aux véhicules**: Isaaf Auto Plus, Isaaf Auto Premium, Isaaf Poids Lourd, Isaaf Moto Plus
- **Assistance Domicile**
- **Assistance Décès**
- B2B: "Entreprises & administrations" — work-accident assistance ("Assistance Accident du Travail"), medical assistance for staff, custom offers; "déployer une prestation d'assistance sur mesure en moins de deux semaines" [S11].

### A3. Travel products (detail)
All prices are "À partir de" (from). **What the price covers (duration, number of people, trip length) is not stated** on any page.

| Product | From price | Who is covered | Medical expenses abroad | Where valid | Notable extras | Source |
|---|---|---|---|---|---|---|
| Isaaf Visa Europe | 450 dhs | "L'assuré domicilié au Maroc"; vehicle optional with surcharge | up to 350 000 dhs; dental 1 000 dhs | Schengen area incl. French overseas territories; "Ce contrat n'est pas valable au Maroc" | repatriation, body transport to Morocco, optional vehicle assistance abroad | S3 |
| Isaaf Monde | 700 dhs | "couverture familiale": insured, spouse(s), children <21 (≤25 if students), ascendants optional; main vehicle registered in Morocco | up to 350 000 dhs; dental 1 000 dhs | Morocco and worldwide; vehicle list of countries; excl. Saudi Arabia during pilgrimage | vehicle assistance in Morocco and abroad | S4 |
| Isaaf Monde Premium | 990 dhs | as Monde + people living under the same roof (optional) | up to 500 000 dhs; dental 5 000 dhs | Morocco and worldwide excl. Saudi Arabia during pilgrimage | trip cancellation up to 5 000 dhs; baggage delay/loss; lost documents/payment means; legal assistance abroad | S5 |
| Isaaf Monde Santé | 1390 dhs | as Monde | up to 350 000 dhs; + up to 15 000 dhs hospitalisation for chronic / pre-existing conditions | Morocco and worldwide excl. Saudi Arabia during pilgrimage | pre-existing conditions | S6 |
| Isaaf Étudiants Expatriés | 490 dhs | "Tout étudiant ... poursuivant ses études à l'étranger, dont les parents résident au Maroc" | up to 350 000 dhs "(garantie acquise pour une durée de 90 jours après la prise d'effet du contrat)"; advance up to 30 000 dhs | Morocco and worldwide | family visit ticket, legal assistance, cash advance 5 000 dhs | S7 |

Category page summary: "Une couverture des frais médicaux allant jusqu'à 30 000 € pour le Visa Schengen et jusqu'à 50 000 € pour le Visa Monde" [S2]. (See observation O-C3 on the mismatch with product pages.)

Single trip vs annual / multi-trip: **not stated.** Trip durations: **not stated.** Group cover: **not stated** for travel (B2B custom offers exist [S11]).

### A4. Schengen / visa certificate
- "Délivrance immédiate d'une attestation d'assurance voyage conforme aux directives consulaires." [S2]; same claim on every travel product page ("Produit conforme aux exigences consulaires pour l'obtention de VISAS") [S3–S7].
- Home FAQ: Schengen consulates require minimum 30 000 € cover, valid across Schengen, medical and repatriation, whole stay. With ISAAF Visa Europe: "Vous souscrivez en ligne en quelques minutes", "Vous recevez immédiatement votre attestation conforme aux directives consulaires". Certificates are "Acceptée par les centres de traitements des dossiers visa" and "Disponible en plusieurs langues et version imprimable et PDF." "zéro risque de refus pour non-conformité d'assurance." [S1]
- Home banner: "Obtenez votre attestation d'assurance voyage pour le visa en ligne en quelques clics !" + "SOUSCRIRE EN LIGNE" + "Paiement sécurisé" [S1].
- Students: "Une attestation immédiate pour répondre aux exigences Consulaires et aussi des universités étrangères." [S1]
- Which languages the certificate comes in: **not stated.**

### A5. Markets, languages, currencies
- Market for retail products: Morocco. Visa Europe requires the insured to be "domicilié au Maroc" [S3]; vehicles must be "immatriculé au Maroc" [S3–S6]; students' parents must reside in Morocco [S7]; repatriation is "vers le Maroc" [S1]. One medical product targets foreign residents in Morocco (Isaaf Résidents Étrangers au Maroc) [S1 nav].
- Group footprint: 20 African countries [S1, S9]. Which countries: **not stated** on pages reviewed. No country selector.
- Site language: French only. `<html lang="fr-FR">`, `og:locale fr_FR` on every page reviewed. No language switcher found. Only Arabic content: a financial-communications footer block ("من اجلك، نحن نلتزم", PDF download links) [S1 and all pages]. No English found.
- Assistance platform languages: "19 Langues parlées sur notre plateforme d'assistance" [S1]; "parlant plus de 60 langues et dialectes" [S9] (inconsistent, see O-C3).
- Currency: prices and limits in dirhams ("dhs") [S3–S7]; some marketing copy in euros (30 000 €, 50 000 €, 3 000–5 000 €) [S1, S2].

### A6. How a customer gets a quote / buys today (as far as visible)
Three visible paths:

**Path 1 — Online ("Souscrire en ligne")**, on a separate subdomain:
1. Entry points: header button "Souscrire en ligne" → `https://voyage.africafirstassist.com` [S1, all pages]; home banner "SOUSCRIRE EN LIGNE" [S1]; product-level link on Visa Europe → `/Quote/QuoteInformations/2` [S3]; on Monde → `/Quote/QuoteInformations/1` [S4]; on Monde Santé → subdomain root [S6].
2. No product-specific online link found on Monde Premium [S5] (only the generic header button) or Étudiants [S7] (its "Obtenir un devis" button points to `#`, i.e. nowhere).
3. Steps inside the subscription site: **not seen** (S13 blocked). The site claims online purchase "en quelques minutes" with immediate certificate and "Paiement sécurisé" [S1]. Payment methods: **not stated.**

**Path 2 — Agency / broker network**: every product page says "Où souscrire ? Trouvez l'agence la plus proche en appelant l'un de nos conseillers sur le 0522 95 75 20/22 ou cliquez sur le lien ci-après" [S3–S7]. Agency finder [S10]: "Me localiser" or pick a city (200 Moroccan cities) and a category: "Bureaux Directs AFA", "Agences d'assurance", "Courtiers d'assurance".

**Path 3 — Phone**: customer service 05 22 95 75 20/22, Monday–Friday 8:30–17:30 [S1, S2, S8].

B2B: callback form (civilité, prénom, nom, email, téléphone, organisme, accept legal notice) [S11]; process timeline: contact, needs, offer, contract (5 days / 3 days steps shown) [S11].

WhatsApp: **not offered** as a channel (the only "WhatsApp" string in the HTML is a share-button setting). Chat: not seen.

### A7. Assistance, emergency, claims, complaints
- 24/7 assistance line: 05 22 97 47 47 (+212 522 97 47 47); email assistance@africafirstassist.com [S1, S8 meta description and body].
- Customer service: 05 22 95 75 20/22, Mon–Fri 8:30–17:30; responsable.service.clientele@africafirstassist.com [S8].
- Switchboard: (+212) 522 95 93 00; contact@africafirstassist.com [S8, S12].
- Contact page has 3 tabs: "Déclarer un Sinistre", "S'informer sur nos prestations d'assistance", "Effectuer une réclamation" [S8]. The claim ("sinistre") form asks: name, phone, email, assistance product, policy number, message (all required). No file upload field seen. No claim tracking seen.
- Complaints: reclamation@africafirstassist.com; reply "dans un délai de 10 jours ouvrés" [S8]. Escalation to "médiateur des assurances" (mediateur@mediateurassurance.ma, 154 Bd d'Anfa, Casablanca, 0522 649 020) [S8].
- Postal: Lotissement LA CIVIM, lot 131, Route de l'aéroport, Q.I. Sidi Maârouf, Casablanca [S8, S12].
- Home FAQ, vehicle assistance: "Contactez notre centrale d'assistance disponible 24h/24 / Communiquez votre localisation / Nos équipes organisent ..." [S1].

### A8. Insurer, partners, legal and regulatory
- Africa First Assist presents itself as the insurer: "Entreprise d'assurance régie par la loi 17-99 portant code des assurances" [S12]. Africa First Assist SA, capital 50 000 000 Dh, RC Casablanca 40225 [S12]. A separate risk carrier for travel products: **not stated.** Regulator licence number (e.g. ACAPS approval): **not stated** on pages reviewed.
- Parent: SanlamAllianz group [S9]. News link names "Sanlam Pan Africa General Insurance" [S1, link title].
- Data protection: Moroccan law 09-08 cited; data may be shared with "partenaires, courtiers et assureurs, sous-traitants" [S12]. Consent via a checkbox when submitting forms [S12]. Cookie policy text present; no cookie consent banner seen in HTML (not verified in a browser).
- References/clients: logo wall incl. Allianz, BMCI, CIH Bank, Crédit Agricole, CNSS, Avis, Budget, Dacia, Ford, Al Akhawayn University, foundations, etc. [S9] (logo pages only; nature of relationship not stated).
- Provider network: "1460 Prestataires directs au Maroc et en Afrique subsaharienne", 460 000 worldwide [S1].
- Tech (from HTML): WordPress + Elementor 4.4.1, Contact Form 7, reCAPTCHA [S1, S8]. Subscription site is a separate application [S13]; its stack is not known.

### A9. Site structure
Top bar (exact labels) [S1]: "Particuliers" · "Entreprises & administrations" · "Points de vente" · social icons
Main nav (exact) [S1]:
- "Pour vous, partout" (home)
- "Nous connaître" → "Qui sommes-nous ?", "Notre organisation", "Notre réseau de prestataires", "Notre Actualité"
- "Nos Produits" → (product list in A2)
- "Nous contacter"
- Utility: "Service Client 05 22 95 75 20/22", "Assistance 05 22 97 47 47", "Trouver une agence", "Souscrire en ligne"
Footer columns (exact): "Nous connaître", "Nos Produits", "Rejoignez-nous" (Devenir Collaborateur / Devenir Partenaire), "Nos activités"; links "Mentions légales", "Sitemap", "Corporate", "Produits", "Nous contacter"; financial PDFs (2020, 2021) [S1].
Product page template [S3–S7]: hero → "Pourquoi souscrire ?" + icons + "À partir de X dhs" → accordions ("Quelles sont les personnes assurées ?", "Quels sont ses avantages?", "Territorialité", "Où souscrire ?") → "Télécharger la fiche produit" (PDF).

---

## PART B — OBSERVATIONS (desk reviewer's judgement, with heuristic)
These are expert observations, not user evidence. Severity is a guess (H/M/L) to be tested.

### B1. Usability (Nielsen heuristics)
| ID | Observation | Heuristic | Sev | Source |
|---|---|---|---|---|
| O-U1 | Prices are "À partir de" only, with no basis (days, persons, zone). A traveller cannot estimate cost before leaving the site. | #1 Visibility of system status; #2 Match with real world | H | S3–S7 |
| O-U2 | Buying jumps to a separate subdomain, and the product pages push agencies/phone first ("Où souscrire ? Trouvez l'agence ..."). Online and offline paths compete; Monde Premium and Étudiants have no product-level online path. | #4 Consistency; #7 Flexibility/efficiency | H | S3–S7 |
| O-U3 | Étudiants "Obtenir un devis" button goes to `#` (dead). "Découvrez également ISAAF MONDE SANTÉ" on Monde/Premium goes to `/isaaf-monde-sante/`, which redirects to the home page. One Visa Europe "Télécharger la fiche produit" link is `#`. | #9 Help users recover from errors; #1 | H | S7, S4, S5, S3 |
| O-U4 | Placeholder text is live on the home page: "(Veuillez nous fournir des réponses de vos commerciaux.)" | #8 Aesthetic and minimalist design; credibility | H | S1 |
| O-U5 | Coverage limits mix currencies: euros in marketing (30 000 € / 50 000 €), dirhams on product pages (350 000 / 500 000 dhs). Hard to check the Schengen 30 000 € rule against a dhs figure. | #2 Match with real world; #4 Consistency | M | S1, S2, S3 |
| O-U6 | Product names differ by page ("Visa Monde" vs "Isaaf Monde"; "Isaaf Monde santé" vs "ISAAF MONDE SANTE"; URL slugs "-3"). No comparison table across the 5 travel products. Users must open each page and compare accordions. | #6 Recognition rather than recall; #4 | M | S2–S7 |
| O-U7 | Emergency vs customer-service numbers are easy to confuse. On Contact, the 24/7 number 522 97 47 47 also appears under "Du Lundi au Vendredi de 8h30 à 17h30". The footer "Appelez-nous sur le 0522 95 75 20/22 ... nos techniciens chargés d'assistance sont là pour vous aider" gives the office-hours number with assistance wording. | #2; #4; error prevention (#5) — in an emergency this matters | H | S8, all pages footer |
| O-U8 | Contact page link labels do not match targets: text "assistance@africafirstassist.com" links to `mailto:reclamation@...`; text "reclamation@africafirstassist.com" links to a `tel:` number. Stray "n" after a phone number ("20/22n"). | #4; #5 Error prevention | M | S8 |
| O-U9 | Claim form is generic free text; no document upload, no claim reference, no status tracking visible. | #1 Visibility of system status | M | S8 |
| O-U10 | Inconsistent numbers: 19 vs "plus de 60" languages; 1460 vs 1340 providers in Morocco; "45 années" vs a news slug "Depuis 40 ans". Typo "PRINCIPAL TOUT". Legal notice "Identification" starts with a blank company name (", Entreprise d'assurance ..."). | #8; credibility | L | S1, S9, S12 |
| O-U11 | Many links open in a new tab (`target="_blank"`), including "Souscrire en ligne", without warning. | #3 User control and freedom | L | S1 |
| O-U12 | Home FAQ makes a strong guarantee: "zéro risque de refus pour non-conformité d'assurance". Needs legal/compliance check. | — (compliance risk, not a heuristic) | M | S1 |

### B2. Accessibility flags (WCAG 2.2) — from HTML/CSS only, not a full audit
| ID | Flag | WCAG SC | Source |
|---|---|---|---|
| A-1 | Viewport meta is `width=device-width, initial-scale=1`, no zoom block. Pass on this check. | 1.4.4, 1.4.10 | S1 |
| A-2 | `lang="fr-FR"` set. But the Arabic footer block has no `lang="ar"` or `dir="rtl"`. | 3.1.2 Language of parts | all pages |
| A-3 | Heading structure is broken. Product, contact and about pages have no page-level h1; the only h1 is the footer sentence "Appelez-nous sur le 0522 95 75 20/22 ...". Home has 4 h1 (hero twice, "Découvrez nos offres", footer). Several empty h2/h3. Prices sit in headings or decorative text. | 1.3.1 Info and relationships; 2.4.6 Headings and labels | S1, S3–S9 |
| A-4 | Images: nearly all have `alt=""` (decorative), e.g. 186 of 187 on About (largely the logo wall, where client names are lost to screen readers). 5 arrow icons on home have no alt attribute. | 1.1.1 Non-text content | S1, S9 |
| A-5 | Contact forms use placeholder text as the visible label (labels exist but are `elementor-screen-only`). Placeholder disappears on typing; required state shown only by "*". | 3.3.2 Labels or instructions; 1.3.1 | S8 |
| A-6 | Contrast: Elementor default tokens include #7A7A7A text (4.29:1 on white, fails 4.5:1) and #6EC1E4 / #61CE70 (about 2:1). Not confirmed that these are used for body text; the page CSS mainly uses #305D90 and #0076BB on white, which pass. Needs a rendered audit. | 1.4.3 Contrast (minimum) | S14 |
| A-7 | Positive: skip link "Aller au contenu" present; menu toggle has `aria-expanded`/`aria-controls`; social icons have `aria-label`. | 2.4.1; 4.1.2 | S1 |
| A-8 | Not checked (needs a browser): focus visible, target size (2.5.8), keyboard access to accordions and tabs, reCAPTCHA accessibility (3.3.8 Accessible authentication), reflow at 320 px. | — | — |

### B3. Contradictions and inconsistencies on the site (need client confirmation)
- O-C1: Emergency line hours: "24h/24 et 7j/7" [S8 top] vs "Du Lundi au Vendredi de 8h30 à 17h30 (+212) 522 97 47 47" [S8 lower block].
- O-C2: Medical limit for the world product: "jusqu'à 50 000 € pour le Visa Monde" [S2] vs "350 000 dhs" on Isaaf Monde [S4] and 500 000 dhs on Monde Premium [S5]. (Assumption: at recent rates of roughly 10–11 MAD per euro, 350 000 dhs is far below 50 000 €. Exchange rate not stated on the site.)
- O-C3: Languages spoken 19 [S1] vs 60+ [S9]; providers in Morocco 1460 (incl. sub-Saharan Africa) [S1] vs 1340 [S9].

---

## PART C — ASSUMPTIONS (unverified, to test)
- The subscription site (S13) is probably an end-to-end quote + payment + certificate flow, given "Paiement sécurisé" and "recevez immédiatement votre attestation" [S1]. Not verified. **Next step: get access to voyage.africafirstassist.com (network allowlist) or ask the client for screenshots / a test account.**
- `QuoteInformations/1` = Monde and `/2` = Visa Europe suggests the online flow covers only some products (maybe 2–3 of 5). Not verified.
- The agency/broker channel is probably a large share of sales (200 cities, 3 distribution types). No data on the site. Ask for channel split.
- The current audience is probably Moroccan residents (incl. families and students) applying for visas. The site gives no user data. This must be tested with research, not assumed in the brief.

---

## PART D — The 13 open client questions: what the site answers

| # | Question (short) | Site answer | Status |
|---|---|---|---|
| 1 | Online end to end vs lead capture + agent | Today both exist: an online subscription site (claimed instant certificate, "Paiement sécurisé") plus agencies/brokers and phone [S1, S3–S7, S10]. Steps of the online flow not seen. The **target** model for the new site is still a client decision. | Partly |
| 2 | Insurer / risk carrier; regulation | AFA SA presents itself as an insurance company under law 17-99; subsidiary of SanlamAllianz; data law 09-08; insurance mediator named [S9, S12]. Licence number, separate carrier, per-country rules: not stated. | Partly |
| 3 | Payment methods / provider | Only "Paiement sécurisé" [S1]. Methods and provider not stated. | Open |
| 4 | Countries, markets, currencies | Current retail offer is for Morocco residents, priced in MAD (dhs) [S3–S7]. Group present in 20 African countries [S9], not listed. Target markets for the new site: open. | Partly |
| 5 | Languages, Arabic RTL | Current site French only; Arabic only in a financial footer block; no English [all pages]. Certificate "en plusieurs langues" [S1]. Launch languages: open. | Partly |
| 6 | Products | Current travel range known: Visa Europe, Monde, Monde Premium, Monde Santé, Étudiants Expatriés, with from-prices and limits [S3–S7]. Single trip vs annual and durations: not stated. Group/corporate: custom B2B only [S11]. Which products are in scope: open. | Partly |
| 7 | Visa certificate and format | Yes: certificate "conforme aux directives consulaires", immediate, printable PDF, several languages [S1, S2]. Exact format, languages, verification method: not stated. | Partly |
| 8 | Users (B2C, agencies, corporates, B2B2C) | Site serves "Particuliers", "Entreprises & administrations", distribution via "Bureaux Directs AFA", "Agences d'assurance", "Courtiers d'assurance", and recruits partners [S1, S10, S11]. Who the new site is for: open. | Partly |
| 9 | Scope of "assistance website" | Current scope: travel, medical, vehicle, home, death assistance; 24/7 line; claim declaration and complaint forms on Contact [S1, S8]. Online claims tracking: not offered. Scope of the new site: open. | Partly |
| 10 | Analytics, feedback | Not on site (only unsourced 96,3% satisfaction, 97% calls < 5 s [S9]). | Open |
| 11 | Brand guidelines, design system, CMS/stack | Current site: WordPress + Elementor, Roboto / Roboto Slab, colour tokens incl. #981222, #006FB1, #191824 [S1, S14]. Subscription site is a separate app, stack unknown. Formal guidelines and future stack: open. | Partly |
| 12 | Deadline, budget, contacts | Not on site. | Open |
| 13 | Recruiting real customers | Not on site. | Open |

Fully answered: none. Partly: 1, 2, 4, 5, 6, 7, 8, 9, 11. Open: 3, 10, 12, 13.

### New questions raised by this review (for the kickoff)
- N1. Can we get access to voyage.africafirstassist.com (and a test account) to map the current online flow? Which products can be bought online today?
- N2. What does the "À partir de" price cover (days, persons, zone)? Is pricing by duration, age, destination?
- N3. Channel split: online vs agencies vs brokers vs phone. Do agencies use the same subscription tool?
- N4. Which number is the real 24/7 emergency line, and what are its hours? (Site contradicts itself.)
- N5. Correct medical limits for the world products (50 000 € vs 350 000 dhs).
- N6. Are the claims "zéro risque de refus" and "Acceptée par les centres de traitements des dossiers visa" approved by compliance?
- N7. Is the new site meant to replace www, the subscription subdomain, or both?

## Recommended next research (to close gaps)
1. Access to the subscription site (N1), then a step-by-step walkthrough with screenshots (desk).
2. Analytics export and support/claims logs (Q10) to see real drop-off and contact reasons.
3. Competitor/benchmark scan of 3–5 travel insurance purchase flows (task 4, still open).
4. After Gate 1: interviews with recent buyers (online and via agency) and visa applicants. Nothing in this review tells us what users need.
