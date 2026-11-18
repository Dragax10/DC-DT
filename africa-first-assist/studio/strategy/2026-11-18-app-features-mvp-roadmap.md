# AFA mobile app: features, AI layer, MVP and roadmap (pitch input)

Date: 2026-11-18
Author: strategy
Status: **DRAFT for the studio lead. Not the brief.** `studio/brief.md` is untouched. Gate 1 (problem framing) still applies before any UI work.
Purpose: give the pitch package a sourced feature catalogue, an AI layer, a prioritised MVP and a V2/V3 roadmap (decisions.md, 2026-11-18: scope = mobile app; pitch before brief; AI in workflows; target 1M+ clients).
Decisions reflected (decisions.md, 2026-11-18): distribution **model C** (AFA app + same assistance engine embedded in partner apps); AI lead = **agent copilot (AI9) + FR/AR cover assistant (AI1)**; **WhatsApp = optional complementary channel**, outside core scope; pitch format = slide deck.
**Canonical MVP list: section 4.3.** Flows (`design/flows/*`), journey maps and the deck align to it. If they disagree, 4.3 wins until the studio lead changes it.

## Sources and how to read this
| Key | File | Nature |
|---|---|---|
| [REC] | `studio/research/2026-11-18-recognition-afa.md` | Desk research on AFA. Mostly search snippets. Not user evidence. |
| [BM] | `studio/research/2026-11-18-benchmark-apps.md` | Desk benchmark of 41 apps/services. Company claims. App IDs N1–N10 (Morocco), A1–A13 (Africa), I1–I18 (international). Not user evidence. |
| [DR] | `studio/research/2026-11-17-desk-review-current-site.md` | Desk review of AFA's website. |
| [DEC] | `studio/decisions.md` | Studio lead decisions. |

Rules used here:
- **No user research exists yet.** Every statement about what users need is an **assumption (A)**. Every statement about AFA's business that is not on a public page is an **open question (Q)**.
- No client numbers are invented. Where a target needs a number, it says "set with client after baseline".
- Complexity S/M/L is a relative estimate for a mobile team plus integrations. It is not a quote.

---

## 1. Problem framing draft (assumptions, not the brief)

### 1.1 Working problem statement (hypothesis)
People covered by AFA, directly or through a partner's contract, struggle to get fast, visible help at the moment something goes wrong, because the only reliable channel today is a phone call, and they cannot see their cover, the status of their case or who is coming. This matters because AFA's value is delivered in that moment, often under another brand, and the market is moving: insurers already run apps with assistance features, and Wafa IMA Assistance is going digital (Sérélia, Feb 2026) [REC A10; BM N3].

> INTERNAL, not for the deck: public premium tables suggest AFA's rank in Moroccan assistance has changed since 2016, but the tables conflict and come from search snippets [REC A4, A8, O3]. Do not state a market rank or a decline to the client. Ask the client for its own view [REC D4 Q8].

Status: **hypothesis.** Built from desk evidence: no app [REC A11], phone-first help [DR A7], generic claim form with no tracking [DR O-U9], confusing emergency numbers [DR O-U7]. Not tested with any user.

### 1.2 Who the app could serve
| Segment | Relation to AFA | What we know | Main app job (assumed) | Validate how |
|---|---|---|---|---|
| **S1. Direct Isaaf travel clients** (visa applicants, families, students, residents abroad) | AFA's own customers | Isaaf range, MAD prices, Morocco residents [DR A3, A5]. Schengen visas granted to Moroccans in 2024: figures found range from about 437 000 (Turespaña/EC data) to about 606 000 (Ministry of Foreign Affairs, via press) [REC A8, S80]; a third figure, 480 354, is for another year or source [REC S82]. To confirm; use the official EC figure on any slide. Channel split unknown [DR C]. | Buy cover, get visa certificate, get help abroad | Client sales data; interviews with recent buyers (online and agency) |
| **S2. Partner beneficiaries** (e.g. Sanlam Maroc motor policyholders [REC S20, S21], La Marocaine Vie "Sehha" health clients [REC S22]; banks, carmakers, microfinance on the logo wall, status unclear [REC A7]) | End users of a partner's contract | Probably most of the "8 M beneficiaries" [REC O1]. May not know the AFA brand [REC O2]. AFA's right to contact them: unknown [REC C1]. | Call for help, share location, track the provider, see case status | Partner contracts review; partner interviews; beneficiary interviews |
| **S3. Corporate staff** (work-accident, staff medical assistance) | Employer's contract | Offer exists [DR A2]. Size unknown. | Report an incident, get medical help | Client data; 1–2 HR interviews |
| **S4. Foreign residents in Morocco** (Isaaf Résidents Étrangers) | Direct medical product | Product exists [DR A2]. Size unknown. | Medical help in FR/EN | Client data |
| Secondary: **AFA call-centre agents** | Internal | +300 staff in total, all roles [REC A4]. Number of call-centre agents unknown (Q) | Faster case intake, fewer status calls | Agent shadowing (half day) |
| Secondary: **partners (B2B clients)** | Pay AFA | Have their own apps (My Wafa, MyRMA, Sanlam Maroc) [BM N1, N4, N6] | Visibility, embed AFA services in their app | 2–3 partner interviews [REC C2] |
| Out of app scope (assumed): **providers** (tow trucks, doctors) | Suppliers | A provider portal exists in some form [REC S9c, O6] | Receive missions, share GPS | Ask client what exists |

### 1.3 Moments that matter (all assumptions)
| Moment | Lines | What the person likely needs in that moment (A) | Today (desk evidence) |
|---|---|---|---|
| **M1. Incident / emergency** (breakdown, accident, illness abroad, home emergency, death) | All | One action to get help; share location without explaining; know who is coming and when; speak own language | Phone line; numbers contradict each other on the site [DR O-U7, O-C1] |
| **M2. Travel / visa purchase** | Travel | Right product for the visa; clear price; certificate accepted by the consulate, now | "From" prices only; separate subdomain; dead buttons [DR O-U1–O-U3] |
| **M3. Claim / reimbursement after the event** | Travel, Medical, Home | Send documents once; see status; get paid | Free-text form, no upload, no tracking [DR A7, O-U9] |
| **M4. Health need** (non-emergency) | Medical, Travel | Talk to a doctor quickly; know where to go | Not offered digitally |
| **M5. "Am I covered?"** (before and during) | All | See cover, limits and numbers offline | PDFs and accordions; mixed currencies [DR O-U5, O-U6] |
| **M6. Bereavement** | Funeral | A human, calm guidance, paperwork handled | Phone [DR A2] |

Key framing risk: **M1 and M3 are the core promise, but most M1 users are partner beneficiaries (S2), whom AFA may not be allowed to contact.** This decides the distribution model (section 5). First question for the client [REC D1, D4 Q2].

---

## 2. Feature catalogue

Complexity: S = weeks, M = 1–3 months, L = 3+ months or heavy integration (relative, assumed).
Benchmark column cites [BM] app IDs and names. "None found" means no source, not absence.

### 2.1 Cross-cutting
| ID | Feature | Description | Benchmark evidence [BM] | User value | Business value | Cx | Dependencies |
|---|---|---|---|---|---|---|---|
| X1 | Account and onboarding | Phone number + OTP; activate cover by policy, certificate, card or partner code; biometric login; guest SOS without account | Sanlam Maroc fingerprint login (N6); Moja Generali AI identity scan (I17); My Wafa open to non-clients (N1) | Fast access in a stressful moment | Identifies beneficiary; owns the digital relationship where allowed | M | **Partner beneficiary data and rights to contact [REC C1]**; KYC rules for purchase (Q); consent under law 09-08 (to confirm by legal counsel) |
| X2 | Policy wallet | All covers in one place: digital card, limits in plain words, attestations, PDF; Apple/Google Wallet pass; available offline | My Wafa, MyRMA, Sanlam Maroc (N1, N4, N6); Hollard e-card (A5); AXA Schengen digital card (I5); Europ Assistance Wallet card (I7) | Answers "am I covered?" (M5) | Fewer info calls | M | Policy data feeds from AFA systems and partners; product wording in plain language |
| X3 | SOS one-tap | One button: the call to the 24/7 line starts first; GPS, policy ID and language are sent in the background and a case is created; works without login | Discovery panic button (A2), Netcare 911 (A11), Namola (A12), TravelSmart one-tap (I1), Travel EYE location share (I4), International SOS (I8). **No Moroccan app found with one-tap SOS that opens an assistance case**; insurer apps offer an assistance contact or geolocated breakdown help (MyAXA; My Wafa and legacy RMA Watanya app, snippet-level) [BM 1b] | Core of M1. No need to explain where you are | Shorter calls; part of the differentiator vs insurer apps [BM 1b; REC O5] | M | Integration with AFA case/dispatch platform ("missionnement automatique", geolocation [REC S9c]); telephony |
| X4 | Case and claim: declare and track | Structured request per line; upload photos/documents; reference number; status timeline; messages from the handler | My Wafa, MyRMA, AtlantaSanad (N1, N4, N7); M'LAM step notifications (A13); Europ Assistance (I7); MAPFRE GO (I16); Generali (I17) | Visibility (M3); one place for documents | Fewer "where is my case" calls; digital claim share | L | Case system API (unknown, Q); document storage under 09-08; partner rules on who handles claims |
| X5 | Chat with assistance | Async chat with an agent, attach photo, switch to call; later AI first line (AI1) | International SOS chat (I8), SafetyWing 24/7 chat (I15), Oscar care guides (I14), AtlantaSanad chatbot (N7) | Help without a call (abroad, roaming, noise) | Agents handle several chats at once | M | Contact-centre tooling; staffing in FR/AR/Darija |
| X6 | Payments | Card payment for travel purchase; later mobile wallet; pay-at-agency code | My Wafa, MyRMA online payment (N1, N4); AXA Mansard via PalmPay/Airtel (A7); BIMA operator billing (A8) | Buy without going to an agency | Direct revenue; online share | M | Payment provider unknown [DR Q3]; low m-wallet adoption ~10% [REC A8, S73]; cash dominant [REC S74] |
| X7 | Notifications | Push for case steps, renewal, alerts; SMS fallback for critical messages | M'LAM (A13); TravelSmart (I1); Chubb SMS red alerts (I9) | Know what is happening without calling | Deflects status calls | S | SMS gateway; consent |
| X8 | Family and dependants | Add spouse, children, parents covered by family products; act on their behalf (e.g. call SOS for a parent) | NamolaPlus family (A12). Rare in sample [BM 4b] | Isaaf Monde is a family cover [DR A3]; parents abroad | More users per policy | M | Consent for minors and adults; data model for beneficiaries |
| X9 | Multilingual FR / AR / Darija / EN + RTL | UI in French and Arabic (RTL mirrored); English; Darija in voice and chat support; Amazigh to explore | Only MaCNSS shows Arabic UI (N10). **No Darija support found in any of the 41 apps** [BM 4c] | Darija daily for 91.9%; French read by 57.7% of literate people; English 20.5% [REC A8, S90] | Reach beyond French readers; differentiator | M (UI) / L (Darija AI) | Translation and RTL QA; Darija speech/text models (see AI1) |
| X10 | Accessibility WCAG 2.2 AA | Built in, not a feature: text scaling, screen readers (VoiceOver/TalkBack), contrast, target size, accessible auth (no CAPTCHA puzzles), RTL correctness | Current site has heading, label and alt gaps [DR B2] | Older users, stress, low vision | Studio standard; reduces legal and reputation risk | M (ongoing) | Design system tokens; QA with assistive tech |
| X11 | Low bandwidth and offline essentials | Cached card, cover summary and emergency numbers offline; light screens; resumable uploads; SMS fallback for SOS confirmation | Chubb SMS fallback (I9); USSD in A3, A7, A8, A10. **Offline mode inside an app: none found** [BM 3c note] | Works abroad without roaming and in weak coverage | Fewer failed requests | M | Architecture choice from day 1 |
| X12 | Provider and agency finder | Map of AFA offices, agencies, brokers; later garages, clinics, pharmacies | My Wafa (N1), MyAXA garages (N5), JubiCare (A6), TravelSmart "Assistance Around Me" (I1) | Find help or buy nearby | Supports the agency channel | M | Network data quality (1 340 vs 1 460 providers conflict [REC A4]) |
| X13 | Consent and privacy centre | Clear consents (location, health data, marketing); see and delete data; share with partner on/off | Not benchmarked | Trust | Compliance with law 09-08 and CNDP requirements (to confirm by legal counsel) | S | CNDP declarations/authorisations (Q) |

### 2.2 Travel / Visa (Isaaf)
| ID | Feature | Description | Benchmark evidence [BM] | User value | Business value | Cx | Dependencies |
|---|---|---|---|---|---|---|---|
| T1 | Quote and buy travel cover | Pick destination, dates, travellers; see full price (not "from"); compare the 5 products; pay | SafetyWing buy/cancel in app (I15); My Wafa buy and pay (N1). **No Moroccan app found selling travel cover in-app** (matrix 3a); Wafa IMA sells travel assistance online on its web platform [BM N3] | Fixes M2 pain [DR O-U1, O-U6] | Direct revenue; AFA's clearest B2C case [REC O7] | L | Subscription engine behind voyage.africafirstassist.com (not seen [DR A6]); pricing rules (Q); ACAPS may need to be informed before online sales go live [REC S66, S67] (**to confirm by legal counsel**) |
| T2 | Instant visa certificate | Certificate PDF in the languages consulates need; QR/verification code; share to email/WhatsApp; stored in wallet | AXA Schengen digital card (I5); Europ Assistance certificate via customer centre (I7) | Visa file done in minutes | Core product promise [DR A4] | M | Certificate format and verification method (Q, DR Q7); compliance check of "zéro risque de refus" [DR O-U12] |
| T3 | Travel companion (basic) | Cover summary, AFA abroad number, local emergency numbers per country, what to do steps; all offline | TravelSmart 200+ countries numbers (I1); Travel EYE (I4); Chubb (I9) | Ready before trouble | Fewer panic calls; brand presence during the trip | S | Content upkeep per country |
| T4 | Travel and safety alerts | Location-based safety, health and transport alerts | TravelSmart Alert Center (I1), Allyz (I2), International SOS (I8), Chubb Crisis24 (I9), Healix (I10) | Early warning | Engagement during trip | M | Third-party feed (buy); location consent |
| T5 | Medical help abroad | Find a vetted facility in AFA's network; see if a guarantee of payment is issued | TravelSmart "Assistance Around Me" (I1); Ping An network (I12) | Avoid paying upfront abroad | Cost control via network | M | Network data (460 000 providers claimed [REC A4]); case API |
| T6 | Renewal and student reminders | Reminders before expiry; re-buy in two taps; student 90-day rule explained | Not benchmarked | No gap in cover | Retention | S | T1 |
| T7 | Travel claims (baggage, cancellation, documents) | Guided claim with receipts upload (Monde Premium cover [DR A3]) | TravelSmart claims with photos and payout choice (I1); Allyz quick claims (I2) | Fewer forms, faster refund | Lower handling cost | M | X4; payout method |

### 2.3 Medical
| ID | Feature | Description | Benchmark evidence [BM] | User value | Business value | Cx | Dependencies |
|---|---|---|---|---|---|---|---|
| M1 | Medical assistance request | Request medical help (doctor visit, ambulance, hospitalisation, repatriation) with location; tracked as a case | Netcare 911 (A11); Discovery emergency assist (A1); International SOS (I8) | Core M1 for medical | Case data quality | M | X3, X4; medical team triage process |
| M2 | Teleconsultation | Phone/video with a doctor; FR/AR/Darija; callback 24/7 | Discovery (A1), AXA Mansard (A7), AXA My Trip Companion (I3), Europ Assistance portal (I7), MyRMA Allô Santé (N4, secondary), MyAXA e-health (N5) | Care without travel or waiting | New service; partner upsell (e.g. Sehha [REC S22]) | L | Licensed telemedicine partner; Moroccan telemedicine rules (Q); CNDP rules for health data, incl. limits on transfer abroad [REC S100–S102] (**to confirm by legal counsel**) |
| M3 | E-prescription and pharmacy | Prescription after teleconsultation; pharmacy pickup or delivery | Discovery (A1), AXA Mansard (A7), AXA (I3) | Closes the care loop | Stickiness | L | Pharmacy partners; regulation (Q) |
| M4 | Pharmacy on duty and care finder | Nearest on-duty pharmacy, clinics in network | My Wafa (N1), JubiCare (A6) | Useful weekly, not only in crisis | Reasons to open the app | M | Data source for "pharmacies de garde" (Q) |
| M5 | Health partner cases | View assistance part of partner health products (e.g. Sehha) | Wafa Santé (N2), JubiCare pre-authorisation (A6) | One place | Partner value | M | Partner agreement and data (Q) |

### 2.4 Roadside / Auto
| ID | Feature | Description | Benchmark evidence [BM] | User value | Business value | Cx | Dependencies |
|---|---|---|---|---|---|---|---|
| R1 | Roadside request with location | Choose problem (breakdown, accident, tyre, battery, keys, fuel); GPS + vehicle prefilled; short prefilled steps. Target: **request sent in under a minute (target, to test)** | Europ Assistance (I7), MAPFRE GO one click (I16), MyAXA roadside contact (N5); geolocated breakdown help reported for My Wafa (snippet) [REC A10] | Core M1 for drivers | Faster dispatch; a request **with live case status** was not found in Moroccan apps [BM 1b] | M | Dispatch API [REC S9c]; partner motor contracts (Sanlam [REC S21]) |
| R2 | Live provider tracking | Tow truck on a map, ETA, driver name and plate, call driver | Europ Assistance real-time tow-truck tracking (I7); MAiassist SMS every 15 min (I16 legacy) | Removes the worst uncertainty | Fewer "where is he" calls; visible service quality. Not found in any Moroccan app [BM 1b] | L | **Provider GPS**: provider app/portal must share location (maturity unknown [REC O6]); provider adoption |
| R3 | Accident report support | Guide through constat; photos; send to insurer | AtlantaSanad e-constat via chatbot (N7); Ping An (I13); Zurich (I18) | Less stress at the roadside | Mostly the **insurer's** process, not AFA's | M | Partner insurer process and consent |
| R4 | Mobility continuation | Replacement car, hotel, travel continuation booked inside the case | Europ Assistance (I7) | Get moving again | Cost control | S (inside case) | Product rules per contract |
| R5 | EV / hybrid assistance | EV-specific options (charge, adapted tow) | Sanlam Assur'Auto Green+ uses AFA [REC S20] | Correct help for EVs | Partner value | S | Partner product |
| R6 | Vehicle profile | Plate, model, registration; scan to fill | My Wafa "Scan To Go" (N1) | Faster requests | Better data | S | OCR (see AI5) |

### 2.5 Home
| ID | Feature | Description | Benchmark evidence [BM] | User value | Business value | Cx | Dependencies |
|---|---|---|---|---|---|---|---|
| H1 | Home emergency request | Plumber, locksmith, electrician, glazier; photo; time slot | Europ Assistance home (I7), MAPFRE GO plumber/locksmith (I16) | Fast trusted help | Network utilisation | M | Home provider network; product rules |
| H2 | Intervention tracking | Who comes, when; rate the provider | I7 (follow files) | Certainty | Provider quality data | M | Reuse R2 |
| H3 | Home care / seniors (explore) | Carer finder, teleassistance | Sanlam Maroc Inaya (N6); Wafa IMA Sérélia watch (N3), a direct competitor move | Ageing parents | New line | L | New partnerships |

### 2.6 Funeral / Décès
| ID | Feature | Description | Benchmark evidence [BM] | User value | Business value | Cx | Dependencies |
|---|---|---|---|---|---|---|---|
| F1 | Death declaration and funeral assistance | Short, calm flow that leads to a human immediately; checklist of documents; status of repatriation/transport | Old Mutual funeral claims in app, WhatsApp, USSD (A3); Sanlam SA online funeral claims, paid "within 4 business hours" (A4) | Less paperwork in grief | Fewer repeated calls | M | Human-led process; repatriation of body is in travel cover [DR A3]; cultural and religious timing (A) |
| F2 | Document upload and status | Upload death certificate etc.; see progress | A3, A4 | One place | Handling time | S | X4 |

**Rule for F1: no AI front-line.** A person answers. AI may only help the agent (AI9).

### 2.7 Corporate
| ID | Feature | Description | Benchmark evidence | User value | Business value | Cx | Dependencies |
|---|---|---|---|---|---|---|---|
| B1 | Employee access | Activate staff cover with employer code; report work accident | Not found in sample | Help at work | Supports B2B sales (custom offers in under 2 weeks [DR A2]) | M | Employer data feeds |
| B2 | Client/partner reporting | Case volumes, SLA, satisfaction for partners and employers | Not found in sample | — | B2B retention | M (web, not app) | Case data warehouse |

---

## 3. AI layer

### 3.1 Principles
- AI sits **inside a workflow**, never as a separate "AI feature" screen.
- Every AI step has a **named human checkpoint**. The benchmark shows this is the norm: Ping An human doctor supervision, Discovery "no medical advice", Lemonade hands over to a human [BM 1.8, 4c].
- **Health data (to confirm by legal counsel):** law 09-08 appears to require CNDP authorisation for patient follow-up processing and to limit transfer abroad without CNDP approval; CNDP is reported to have said that AI processing of personal data falls under 09-08 [REC D3, S100–S102]. Most large language model (LLM) APIs run abroad. If confirmed, this is the main AI constraint.
- **ACAPS (to confirm by legal counsel):** reported to require being informed before online sales go live, and to monitor misleading online offers [REC S66, S67]. Any AI that recommends or sells cover would touch this.
- All legal points above come from search snippets, not from the texts. **Legal counsel and AFA compliance must confirm each one.** In the deck they appear only as "Regulatory points to confirm with AFA compliance". A **legal and compliance review** workstream with a named owner on AFA's side is part of the delivery plan (section 7).
- **Safety rules do not depend on AI.** Medical red-flag routing (injury, unconscious, chest pain, etc.) is a rule in the case system and an agent protocol. It works when every AI component is off. AI may only add alerts on top.

### 3.2 AI features
| ID | AI feature | Workflow | What it does | Human-in-the-loop | Data needed | Regulatory risk | Build / buy | Hype vs value at 1M+ |
|---|---|---|---|---|---|---|---|---|
| AI1 | **FR/AR cover assistant** (text in MVP; Darija voice = V2 pilot) | X2 wallet, T1 purchase, X5 chat later, later voice on SOS | Two modes. **(a) General product questions, before purchase:** no login, no personal contract; answers only from published product wording and FAQ (e.g. "what does Isaaf Visa Europe cover?"). **(b) My cover:** after login, answers "am I covered?" from the user's own contract. Routes to the right line and hands to a human | Any emergency, medical, funeral or low-confidence answer goes straight to a human; agent sees the transcript. **Available 24/7.** If the user is on an active trip or outside Morocco, hand-off goes to the **24/7 assistance line**, never to a next-day callback. Callback next working day only for non-urgent questions from users in Morocco with no active trip | Product wordings, general conditions, FAQ, anonymised past chats/calls for Darija | Medium. Health info if triage is medical (09-08, CNDP). Wrong cover answers = consumer-protection and ACAPS exposure | Buy the model; **build** the grounding on AFA content (retrieval) and the guardrails. Darija quality must be tested; no Darija source found in benchmark [BM 4c] | **Value** for FAQ and cover questions in FR/AR. **Darija voice is unproven**: real differentiator if it works, high risk if it fails. Pilot, measure, then scale |
| AI2 | AI-guided incident declaration (voice / photo → structured case) | X3 SOS, X4 claims, R1, H1, T7 | User speaks or types in their language, adds photos; AI fills the structured case (what, where, who, policy) and summarises it | Agent confirms the case before dispatch or payment; user confirms summary | Case taxonomy, past cases, speech-to-text for Darija/FR/AR | Medium. Voice and photos are personal data; health details in medical cases | Buy speech and vision; build the case schema mapping | **High value at scale**: cuts call time on every case. Needs a clean case API first |
| AI3 | Photo damage pre-assessment | R3, H1 | Estimates damage type and severity from photos | Expert or insurer validates any estimate | Labelled damage photos, parts and repair costs | Medium. Plus: **motor damage pricing is the insurer's job, not AFA's** | Buy (Hollard uses Bdeo [BM A5]; Ping An, Genertel, Zurich in-house [BM I13, I17, I18]) | **Mostly hype for AFA as an assisteur.** Useful only for triage ("drivable or tow?") or if partner insurers buy it. Later/explore |
| AI4 | Symptom checker before teleconsultation | M2, M1 | Structured symptom intake; suggests urgency level; passes summary to the doctor | Doctor decides. Red flags trigger emergency route, no AI advice | Validated medical knowledge base; health data | **High.** Health data under 09-08 and CNDP; possible medical-device status (Q); transfer abroad if vendor-hosted | **Buy** a certified engine (Allyz uses Infermedica [BM I2]; Discovery [BM A1]) and host or contract to meet CNDP | Value **only** as intake for M2, not standalone. V2 at the earliest |
| AI5 | **Smart document check (OCR + rules). Not AI: do not sell it as AI.** Kept in this table only for traceability | T1, T2, R6 | Scans passport/ID to prefill names and dates; checks travel dates and cover against the Schengen rule (30 000 € minimum, whole stay [DR A4]); flags mismatches before issuing the certificate | User confirms data; edge cases to an agent | Passport/ID OCR; Schengen rules | Low–medium. ID data under 09-08; prefer on-device OCR | Buy OCR (on-device where possible); build rules | **Real value, no AI claim.** Prevents certificate errors that can hurt a visa file. OCR + rules. Label it "smart document check" everywhere (deck, flows) |
| AI6 | Proactive travel alerts | T4, X7 | Pushes relevant alerts by destination and trip dates | Content team sets rules and thresholds | Trip dates, location (consent), alert feed | Low–medium (location data) | Buy the feed; rules first, ML later | Useful, but mostly **rules + a feed**, not AI. Do not sell it as AI |
| AI7 | Fraud scoring | X4 claims, T7 | Scores claims and requests for anomalies (duplicates, patterns) | Every flag reviewed by a person; no automatic refusal | Historic claims with fraud labels | Medium. Automated decisions on people; 09-08 | Build on AFA data or buy (Turaco, Lemonade, Zurich use AI fraud [BM A9, I11, I18]) | Real value **once digital claim volume exists**. Needs labelled data AFA may not have (Q). V3 |
| AI8 | Personalised recommendations | Wallet, T1, notifications | Suggests cover (e.g. Monde instead of Visa Europe for frequent travellers) | Compliance-approved rules; no hidden upsell | Purchase history, trips | **ACAPS duty of advice / misleading offers** [REC S66]; marketing consent | Rules first | **Mostly hype at launch.** Little data, compliance risk, small catalogue (5 travel products). Later/explore |
| AI9 | Agent copilot for the call centre | All cases, all channels (phone, app, optional WhatsApp) | Live transcript, case summary, suggested next step and applicable cover, draft messages in the user's language, after-call notes | Agent decides everything; copilot only suggests. Medical red-flag routing is a case-system rule, not a copilot feature; the copilot only adds an alert. Proposed pilot scope: roadside non-injury team; transcription pauses when injury is mentioned (studio lead to confirm) | Call audio, case history, product rules | Medium. Call recording consent; health data; hosting | Buy speech + LLM; build integration with case system | **Highest value per effort at 1M+**: helps every case whatever the channel, including partner beneficiaries who never install the app. Internal, so lower consumer risk |

### 3.3 Honest read
- **Most value:** AI9 (copilot), AI2 (structured intake), AI1 in FR/AR for cover questions. AI5 (document check) has real value but is **OCR + rules, not AI**.
- **Value if proven:** AI1 in Darija voice. It is the clearest differentiator in the sample (no Darija support found anywhere [BM 4c]) and the biggest delivery risk.
- **Hype for AFA now:** AI3 photo damage (insurer's job), AI8 recommendations (thin data, compliance), AI6 sold as "AI" (it is rules).
- **Needs data first:** AI7 fraud.
- **Main blocker for all:** where data is processed. See section 5.4.

---

## 4. Prioritisation

### 4.1 Method
**RICE, with relative scores**, then a MoSCoW cut for the MVP. Absolute RICE needs reach numbers we do not have, so every input is an **assumption** to replace with client data.

- **Reach (1–5):** share of future app users who would use it in a year. 5 = almost all; 1 = a niche.
- **Impact (0.5 / 1 / 2 / 3):** effect on the core promise (help fast, see cover, buy travel) and on AFA's business.
- **Confidence (30% / 50% / 80%):** 80% = strong benchmark pattern + clear AFA fit; 50% = pattern but unknown AFA fit or dependency; 30% = speculative.
- **Effort (1 / 2 / 4):** S / M / L from section 2.
- **Score = R × I × C / E.**
- **Enablers** (X1, X6, X9, X10, X13) are not scored. Without them nothing ships. They are Must by definition.

### 4.2 Scores (assumptions)
The last column is the **release and priority from the canonical scope (4.3)**. It is not a separate list.

| ID | Feature | R | I | C | E | Score | Release / priority (canonical, 4.3) |
|---|---|---|---|---|---|---|---|
| T2 | Instant visa certificate | 3 | 3 | 80% | 1 | **7.2** | MVP Must |
| X3 | SOS one-tap | 5 | 3 | 80% | 2 | **6.0** | MVP Must |
| X7 | Notifications + SMS fallback | 5 | 1 | 80% | 1 | **4.0** | MVP Must |
| R1 | Roadside request with location | 3 | 3 | 80% | 2 | **3.6** | MVP Must |
| X11 | Offline essentials | 4 | 2 | 80% | 2 | **3.2** | MVP Must |
| W1 | WhatsApp companion channel (section 5.6) | 5 | 2 | 50% | 2 | 2.5 | **Optional add-on** (decided [DEC]); outside core scope, priced separately |
| T3 | Travel companion basic | 3 | 1 | 80% | 1 | 2.4 | MVP Must |
| AI5 | Smart document check (OCR + rules, not AI) | 3 | 1 | 80% | 1 | 2.4 | MVP Should |
| X2 | Policy wallet | 5 | 1 | 80% | 2 | 2.0 | MVP Must (Apple/Google Wallet pass: MVP Should) |
| T1 | Quote and buy travel | 3 | 3 | 80% | 4 | 1.8 | MVP Must (condition: engine reuse, see 4.3) |
| X4 | Case declare and track | 4 | 2 | 80% | 4 | 1.6 | MVP Must (case tracking + T7 travel claims) |
| X5 | Human chat | 4 | 1 | 80% | 2 | 1.6 | V2 |
| AI9 | Agent copilot | 5 | 2 | 50% | 4 | 1.25 | **MVP Must (pilot)**: AI lead [DEC] |
| X12 | Agency / provider finder | 3 | 1 | 80% | 2 | 1.2 | V2 |
| R6 | Vehicle profile | 3 | 0.5 | 80% | 1 | 1.2 | MVP Should |
| AI1 | FR/AR cover assistant (text) | 4 | 1 | 50% | 2 | 1.0 | **MVP Must (pilot)**: AI lead [DEC] |
| AI2 | Guided declaration | 4 | 2 | 50% | 4 | 1.0 | V2 |
| H1 | Home emergency request | 2 | 2 | 50% | 2 | 1.0 | V2 |
| R2 | Live provider tracking | 3 | 2 | 50% | 4 | 0.75 | V2 |
| M2 | Teleconsultation | 3 | 2 | 50% | 4 | 0.75 | V2 |
| M4 | Pharmacy / care finder | 3 | 1 | 50% | 2 | 0.75 | V2 |
| F1 | Funeral declaration | 1 | 3 | 50% | 2 | 0.75 | V2 (MVP: phone + guest SOS) |
| X8 | Family | 3 | 1 | 50% | 2 | 0.75 | V2 |
| AI1-voice | Darija voice assistant | 4 | 2 | 30% | 4 | 0.6 | V2 pilot |
| T4 / AI6 | Travel alerts | 2 | 1 | 50% | 2 | 0.5 | V2 |
| T5 | Medical help abroad finder | 1 | 2 | 50% | 2 | 0.5 | V2 |
| B1 | Employee access | 2 | 1 | 50% | 2 | 0.5 | V2 |
| R3 | Accident report support | 2 | 1 | 50% | 2 | 0.5 | V3 (with insurer) |
| AI4 | Symptom checker | 2 | 1 | 30% | 2 | 0.3 | V2 with M2, or V3 |
| M3 | E-prescription | 2 | 1 | 50% | 4 | 0.25 | V3 |
| AI8 | Recommendations | 3 | 0.5 | 30% | 2 | 0.23 | Later |
| AI3 | Photo damage pre-assessment | 2 | 1 | 30% | 4 | 0.15 | Later / partner-funded |
| AI7 | Fraud scoring | 2 | 1 | 30% | 4 | 0.15 | V3 (score low now; rises with claim volume) |

Notes:
- AI9 and AI1 score below several features but are **Must (pilot)** because the studio lead chose them as the AI lead for the pitch [DEC]. Their scope is kept small (one team; text only; FR/AR) to keep effort low.
- API1 (assistance engine API) and the enablers (X1, X6, X9, X10, X13) are not scored. They are Must by definition.
- Read with care: one changed assumption moves a feature. Most sensitive: **R1 depends on a partner pilot** and **T1 depends on reusing the existing subscription engine**. If either is not available, the MVP changes (see 4.3).

### 4.3 Canonical scope: MVP (V1) "Help in one tap, cover in your pocket, visa cover in minutes"
**This is the one MVP list.** The scores table (4.2), the roadmap (4.4), the flows, the journey maps and the deck use it. Release names: MVP (V1), V2, V3, Later.

Launch assumption: about 6 months from Gate 1 (assumption; no client deadline is known [status.md]). Scope assumption: Morocco only; direct Isaaf clients + **one pilot partner** (e.g. Sanlam Maroc motor: AFA is its historic assistance partner, described as "historic and exclusive" in a **2021** Sanlam Maroc report [REC S16]; current status after the 2026 Allianz Maroc merger **to confirm**); subject to partner agreement.

**MVP: Must**
| # | ID | MVP item | Why it is in |
|---|---|---|---|
| 1 | API1 | **Assistance engine with an API from day one** (case creation, SOS intake, status events, cover lookup). The AFA app is its first client; the same API serves the partner embed pilot in V2 and the SDK in V3 | Model C [DEC] needs one engine for both surfaces. Building API-first now avoids a rebuild before partners can embed it |
| 2 | X1 | Onboarding and activation (OTP; activate by policy/certificate number or pilot-partner code; **SOS works without login**) | Nothing works without identifying the beneficiary. Guest SOS keeps the emergency path open |
| 3 | X3 | SOS one-tap: **the call starts first**; GPS, policy ID and case creation run in the background | Core promise (M1). Highest scored user feature. Part of the differentiator [BM 1b] |
| 4 | R1 | Roadside request with location, for Isaaf Auto clients and the pilot partner. Target: request sent in under a minute (target, to test) | Highest-volume incident line for an assisteur (assumption; AFA described as auto assistance leader [REC S18]). Tests the partner model early |
| 5 | X4 + T7 | Case tracking (status timeline from the case system) + travel claim declaration with uploads | Visibility is the gap today [DR O-U9]. Status steps, not a live map, to limit integration risk |
| 6 | X2 + T3 | Policy wallet + basic travel companion, available offline | Answers "am I covered?" and gives numbers abroad without data |
| 7 | T1 + X6 | Quote and buy travel cover (5 Isaaf products, comparison, full price) + card payment | AFA's only clear direct revenue case [REC O7]. **Condition:** reuse the voyage. subscription engine via API. If not possible, MVP links out and T1 moves to V2 |
| 8 | T2 | Instant visa certificate with verification code | AFA's flagship promise [DR A4]. Low effort once T1 exists |
| 9 | X7 | Push + SMS fallback | Case updates are the main call-deflection lever. SMS also carries the app/status link after phone cases (section 6) |
| 10 | X9 | French + Arabic (RTL) UI; Darija through human agents | Arabic RTL needed for reach [REC A8, S90]; Darija AI not proven yet |
| 11 | X10, X11, X13 | WCAG 2.2 AA; low-bandwidth and offline design; consent and privacy centre | Non-negotiable foundations; costly to retrofit |
| 12 | AI9 | Agent copilot **pilot** (summaries + after-call notes, one team; proposed: roadside non-injury) | **AI lead [DEC].** AI in the workflow from day 1 with the lowest consumer risk; serves partner beneficiaries who never install the app |
| 13 | AI1 | FR/AR **cover assistant pilot** (text). Mode (a) general product questions before purchase, no login; mode (b) "my cover" after login. 24/7; abroad or active-trip users are handed to the 24/7 line | **AI lead [DEC].** Grounded only in product wording and the user's own contract. Off for medical, funeral, emergency |

**MVP: Should** (first to cut if time is short)
| # | ID | MVP item | Why |
|---|---|---|---|
| 14 | AI5 | Smart document check (OCR + rules): passport scan prefill + Schengen rule check. **Not AI** | Cuts certificate errors. On-device OCR possible |
| 15 | R6 | Vehicle profile (plate, model), used to prefill R1 | Faster roadside requests |
| 16 | X2 pass | Apple / Google Wallet pass for the cover card | Card at hand without opening the app |
| 17 | X9 EN | English UI | Foreign residents (S4) and travellers; depends on translation budget |

**Optional add-on (outside core scope, priced separately):** W1 WhatsApp channel for SOS intake, documents and status, on the same engine API [DEC]. Can start with the MVP if AFA buys it.

**Not in MVP, on purpose** (release in brackets): X12 agency/provider finder (V2); X5 human chat (V2); R2 live tracking map (V2, needs provider GPS); R4 mobility continuation (V2); T6 renewal and student reminders (V2); M1 medical request, M2 teleconsultation, M4 care finder (V2, partner + CNDP); H1/H2 home (V2); F1/F2 funeral flow (V2; MVP = phone + guest SOS); X8 family (V2); AI2 guided declaration and Darija voice (V2); M5 health partner cases (V3, with partner); fraud and recommendations (V3 / Later).

### 4.4 Roadmap after MVP
| Version | Theme | Features | AI additions | Prerequisites |
|---|---|---|---|---|
| **V2** (assumption: +6 months after MVP launch) | **Real-time help, health, first partner embed** | **Partner embed pilot: one partner, either co-branded inside the AFA app or the SOS + request + status module embedded in the partner's app (SDK/API)**; R2 live provider tracking; R4 mobility continuation; H1/H2 home requests; F1/F2 funeral flow (human-led); M1 medical request; M2 teleconsultation via partner; M4 pharmacy/care finder; X5 human chat; X8 family; X12 agency/provider finder; T6 renewal and student reminders; B1 employee access; T4 travel alerts; T5 medical facility abroad; X6 mobile wallet; English UI if not in MVP | AI2 guided declaration (voice/photo → case); AI1 Darija voice **pilot**; AI4 symptom intake inside M2 (bought engine); AI6 alert rules (not AI); AI9 copilot to all teams | Engine API stable (API1); embed partner signed; provider app shares GPS; telemedicine partner + CNDP authorisation (to confirm by legal counsel); MVP baselines measured; Darija pilot results |
| **V3** (assumption: +12 months after MVP launch) | **Scale and ecosystem** | SDK/API offered to more partners (from the V2 embed pilot); multi-country rollout (country list unknown [REC A4]); M3 e-prescription; M5 health partner cases; R3 accident support with insurer; B2 partner reporting (web); H3 seniors (explore) | AI7 fraud scoring on real digital claim data; AI1 extended to more languages; AI3 only if a partner funds it | Country regulators and currencies; group platform decisions (SanlamAllianz apps MySAllia, M'LAM [BM A13]); data hosting per country |
| **Later / explore** | Bets to test | USSD access for sub-Saharan markets; Amazigh; wellness or driving rewards (Discovery [BM A1, A2]); parametric flight-delay payouts (Allianz [BM I1]); connected-device teleassistance (Wafa IMA Sérélia [BM N3]) | AI8 recommendations; AI3 photo damage; voice/avatar assistants (Ping An [BM I12]) | Evidence from V1–V2 use; partner demand |

### 4.5 The differentiator, restated (for the deck)
Full evidence: [BM 1b].

**Deck wording:** "No Moroccan assistance specialist has a consumer app. Insurer apps offer an assistance contact, geolocated breakdown help or teleconsultation access, but we found no Moroccan app that combines one-tap SOS that opens an assistance case, live case status across assistance lines, and travel cover with an instant visa certificate. We found no Darija support in any of the 41 apps reviewed." Source line: "Desk search, Nov 2026; not verified in app stores."

What we must **not** say: "no Moroccan app offers geolocated assistance" (reported for My Wafa and the legacy RMA Watanya app [REC A10]) or "no teleconsultation" (MyAXA E-Health ✓, MyRMA Allô Santé (✓) [BM 3a]).

Before the meeting: check My Wafa, MyRMA, MyAXA Maroc and Sanlam Maroc store listings by hand.

---

## 5. Scale considerations for 1M+ users

Decided for the pitch [DEC]: **model C** (5.2) and **WhatsApp as an optional channel** (5.6). The other points (data ownership, hosting) remain options to settle with the client.

### 5.1 The core risk: who owns the end customer
- 1M+ users cannot come from direct retail alone [REC C1]. They must come mostly from partner beneficiaries (S2).
- AFA's right to contact them and the data ownership in each contract are **unknown** [REC D4 Q2].
- Partners already run apps with assistance features: My Wafa (~1M installs per a third-party tracker, unverified [REC A10]), MyRMA, MyAXA Maroc, Sanlam Maroc [BM N1, N4, N5, N6]. An AFA app could **compete with its own clients** [REC O4]. AXA France withdrew an app in 2018 citing intermediaries limiting direct client contact [BM I6].

### 5.2 Distribution options
| Option | What it is | For | Against | 1M+ reachable? |
|---|---|---|---|---|
| **A. AFA-branded app only** | One app, AFA brand, all segments | Full control; brand rebuild [REC O2] | Needs partner permission for each beneficiary base; channel conflict; low brand awareness | Only with partner consent at scale |
| **B. White-label / SDK only** | AFA's assistance module (SOS, request, tracking) embedded in partner apps, partner brand | No conflict; rides existing installs | AFA invisible; depends on partner roadmaps; no direct retail | Yes, via partner installs, if partners adopt |
| **C. Hybrid (AFA app + assistance API/SDK)** ✅ chosen for the pitch | AFA app for direct clients (travel, Isaaf) and for partners who opt in (co-branded); same assistance engine exposed as API/SDK to partners who prefer their own app | Serves both; one engine; partner choice | Two surfaces to maintain; needs API-first architecture from V1 | Most likely path (assumption) |

**Decided for the pitch: model C** (studio lead, 2026-11-18 [DEC]). Consequence in scope: the assistance engine is API-first in the MVP (API1), and a **partner embed pilot** (one partner) is in V2, not V3. Still to test with 2–3 partner interviews [REC C2].

### 5.3 Data ownership
Options to put to the client: AFA as data controller for its own clients, processor for partner beneficiaries; or joint controllers per contract. Needs legal review of each partner contract (Q).

### 5.4 Hosting and data residency
- Health and personal data: law 09-08 and CNDP authorisation; reported limits on transfer abroad without approval [REC S100–S102]. **To confirm by legal counsel.**
- Options: (a) host in Morocco, including AI models where feasible; (b) foreign cloud/LLM with CNDP-approved transfer; (c) split: personal and health data in Morocco, only redacted/pseudonymised text sent to foreign AI services.
- Group constraint: SanlamAllianz may have standards or shared platforms [REC O9]. Ask.
- Multi-country (V3): each country may have its own rules and regulators. Country list unknown [REC A4].

### 5.5 Call-centre deflection
- The app's main cost case is fewer and shorter calls: status updates (X7, X4), cover questions (X2, AI1), structured intake (X3, AI2), copilot (AI9).
- Emergencies must **never** be deflected away from a human. Deflection targets are for status and information contacts only.
- Baseline needed: calls by reason (Q). Without it, no target can be set.

### 5.6 Complementary channels
| Channel | Evidence | Option |
|---|---|---|
| WhatsApp | Moroccan insurers already use it (AtlantaSanad, MCMA M3ak [BM N7, N8]); African claims on WhatsApp (Old Mutual, Hollard, Turaco [BM A3, A5, A9]); AFA offers no WhatsApp today [DR A6] | **Decided [DEC]: offered as an optional complementary channel (W1), outside core scope, priced separately.** SOS intake, documents and status on the same engine API. Uptake still to test in research |
| SMS | Chubb red alerts by SMS (I9) | In MVP as fallback (X7, X11) |
| USSD | BIMA, AXA Mansard, Old Mutual, Pula (A3, A7, A8, A10) | Relevant for sub-Saharan markets, less for Morocco (93.6% urban / 78.4% rural household smartphone ownership [REC A8, S70]). Later/explore |

### 5.7 Offline and low bandwidth
Design for weak data and roaming from V1 (X11): offline card and numbers, small payloads, resumable uploads, SMS confirmation of SOS. Retrofitting later is costly.

### 5.8 Scale engineering notes (for the tech partner)
- Peak load is seasonal: visa season and summer (4.06 M MRE arrivals in summer 2025 [REC A8, S83]). Plan capacity for peaks, not averages.
- SOS path must work when other services are down (separate, minimal path; phone fallback always visible).

---

## 6. Path to 1M+ users

**Every number below is an assumption (A) or a blank [__] for client data.** No figure here is a forecast. The point of the exhibit is to show which levers exist, when they start, and which client data decides whether 1M+ is reachable.

### 6.1 Define "user" first (open question)
"1M+ clients" [DEC] needs one definition before any target. Options: (a) registered app accounts; (b) people active in the AFA app or a partner embed in the last 12 months; (c) people served through the assistance engine on any channel (app, embed, WhatsApp, phone with SMS status link). Strategy lean: **(b) for the headline**, (c) reported alongside. **Client and studio lead to choose.**

### 6.2 Adoption funnel by segment
Stages: **eligible base** (people with an active AFA cover) → **reachable** (AFA may contact them, or a partner surface reaches them) → **installs / activations** (AFA app, or embed module used once) → **active** (used in the last 12 months).

| Segment | Surface | Eligible base | Reachable | Installs / activations | Active (12 mo) | Lever starts (A) |
|---|---|---|---|---|---|---|
| S1 Direct Isaaf travel buyers | AFA app | [__] policies a year (client data) | High (A): AFA's own customers, contacted at purchase | [__]% (A, to test): certificate delivered in the app | [__]% (A): travel is seasonal | MVP launch |
| S1b Other direct Isaaf (auto, home, foreign residents) | AFA app | [__] | High (A) | [__]% | [__]% | MVP launch |
| S2a Pilot partner beneficiaries (e.g. Sanlam Maroc motor, to confirm) | AFA app, co-branded | [__] beneficiaries | [__]%: depends on contact rights in the contract [REC C1] | [__]% | [__]% | MVP launch |
| S2b Embed pilot partner | Partner's own app + AFA module | [__] beneficiaries | [__] = partner app's active users | [__]% use the module once | [__]% | V2 (≈ launch + 6 months, A) |
| S2c More partners via SDK/API | Partner apps | [__] | [__] | [__]% | [__]% | V3 (≈ launch + 12 months, A) |
| S3 Corporate staff | AFA app (employer code) | [__] | [__]%: employer agreement | [__]% | [__]% | V2 (B1) |
| Any segment, phone cases | SMS status link → web status page → app | [__] cases a year (client data) | High (A) if consent covers it | [__]% install after the link | [__]% | MVP launch |

Illustrative arithmetic only (not a forecast): AFA claims "more than 8 million beneficiaries" (company claim, undated, unverified [REC A4]). If that base were right, 1M active users would be 12.5% of it. Most of that base is partner beneficiaries (S2), so **1M+ depends mainly on partner reach (S2a–S2c), not on direct retail** [REC C1]. Direct retail (S1) is where the app starts and earns revenue, not where the volume comes from.

### 6.3 Activation levers
| Lever | How it works | Segment | Release | Dependency |
|---|---|---|---|---|
| **Certificate purchase** | The visa certificate and cover card are delivered in the app (also by email/PDF); buying in the app is the fastest path | S1 | MVP | T1/T2; engine reuse |
| **SMS link after each phone case** | After a phone case opens, an SMS gives a status link; the web status page works without install and offers the app | All, incl. partner beneficiaries who never install | MVP | X7; consent and partner contact rights (to confirm by legal counsel) |
| **Partner app deep link** | A "Get help" button in the partner's app opens the AFA app (co-branded) on the right screen, or the embed module in V2 | S2a, S2b | MVP (pilot partner) / V2 (embed) | Partner agreement; API1 |
| Point of sale (A) | QR code on printed certificates, assistance cards and agency/broker desks | S1, S2 | MVP | Print and agency process |
| Employer code (A) | Employer shares an activation code with staff | S3 | V2 | B1; employer data feed |

Not a lever: pushing app installs during an SOS call. Emergencies are never used for marketing.

### 6.4 What decides whether 1M+ is reachable (ask first)
1. Size of each eligible base (S1, S2 per partner, S3) [REC D4 Q1].
2. Contact rights per partner contract [REC D4 Q2].
3. Which partner pilots in the MVP, and which embeds in V2 [REC D4 Q3].
4. Phone cases per year and whether consent allows the SMS status link.

---

## 7. Indicative delivery plan

**Durations are assumptions to check with the tech partner and AFA. No client deadline is known.** Each phase ends at a studio gate or a client decision.

### 7.1 Phases
| Phase | Duration (A) | Main outputs | Ends with |
|---|---|---|---|
| 0. Discovery and brief | 4–6 weeks | Client data (segments, case volumes, call reasons); 2–3 partner interviews; first user interviews; audit of case system, dispatch and voyage. engine; legal and compliance review starts | **Gate 1**: brief signed off |
| 1. Design and engine foundations | 6–8 weeks | Flows to UI; chosen design direction; engine API (API1) spec; integration plan for case system and telephony; consent model | **Gate 2**: design direction chosen |
| 2. MVP build | 12–16 weeks (overlaps phase 1) | MVP Must items (4.3); copilot and cover-assistant pilots; accessibility and RTL QA | Release candidate |
| 3. Closed pilot and launch | 4–6 weeks | Pilot with direct clients + pilot partner; 90-day baseline starts; fixes | **Gate 3**: launch OK; MVP live ≈ 6 months after Gate 1 (A) |
| 4. V2 incl. partner embed pilot | ≈ 6 months after launch (A) | See 4.4 | V2 release |
| 5. V3 scale | ≈ 6–12 months after V2 (A) | See 4.4 | V3 release |

### 7.2 Team shape (roles, not headcount or salaries)
- **AFA side:** product owner; call-centre operations lead (copilot pilot, SOS protocol); partner manager (pilot and embed partners); **legal and compliance owner** (09-08, CNDP, ACAPS review: a named workstream); IT/case-system owner.
- **Studio side:** delivery lead; service/UX designer; UI designer; UX researcher (part-time); content designer FR/AR.
- **Tech partner side (to confirm):** mobile engineers (iOS/Android or cross-platform); backend/API engineers for the engine; integration engineer (case system, dispatch, telephony, payment); data/AI engineer (copilot, cover assistant, retrieval and guardrails); QA incl. accessibility and RTL; DevOps and security.

### 7.3 Cost
**[to estimate with tech partner]** for each phase. Main cost drivers to size: integration with the case system and the voyage. engine; hosting choice (5.4); AI vendor and hosting; translation and RTL QA; optional WhatsApp channel (W1, priced separately).

---

## 8. Proposed success metrics
Baselines are unknown for all. **Targets to be set with the client after a 90-day baseline.** No numbers are proposed here.

**Headline KPIs for the deck (5):**
1. Active users (definition from 6.1), by segment and partner. Target: to set after a 90-day baseline.
2. Digital case share (cases opened in app, embed or WhatsApp ÷ all cases). Target: to set after a 90-day baseline.
3. Time to assistance (request → provider dispatched), app vs phone. Target: to set after a 90-day baseline.
4. Status calls per 1 000 active covers. Target: to set after a 90-day baseline.
5. Online travel share (travel policies sold in app/web ÷ all channels). Target: to set after a 90-day baseline.

If no baseline data exists, **"baseline data" is the first ask** to the client.

Full list:

| Metric | Definition | How measured | Baseline source |
|---|---|---|---|
| Adoption | Registered accounts ÷ eligible beneficiaries (by segment and partner) | App analytics + eligible counts from AFA and partners | Client data (Q) |
| Activation | % of new accounts that link a cover within 7 days | App analytics | New |
| Digital case share | Cases opened in app (or WhatsApp) ÷ all cases, by line | Case system channel field | Case system (Q: is channel recorded?) |
| Digital claim share | Claims submitted with documents in app ÷ all claims | Case system | Current: free-text web form only [DR A7] |
| Time to assistance | Request → provider dispatched, and → provider on site; app vs phone | Case system timestamps; provider GPS (V2) | Case system (Q) |
| Time to certificate | Start of purchase → certificate issued | App analytics | voyage. site analytics (Q) |
| Online travel share | Travel policies sold in app/web ÷ all channels | Sales data | Channel split unknown [DR C] |
| CSAT after case | 1–5 rating after case closure, by line and channel | In-app survey + SMS for phone cases | "96.3% satisfaction" claimed, method unknown [REC A4] |
| NPS | Quarterly, app users vs non-users | Survey | New |
| Call deflection | Status and info calls per 1 000 active covers; % of cases with zero status call | Telephony reason codes + case system | Call reasons (Q) |
| AI and automation quality | AI1: answered without hand-off and rated correct; AI9: handle-time change, agent acceptance rate; AI5 (OCR + rules, not AI): certificate correction rate | Logs + human review sample | New |
| Accessibility | WCAG 2.2 AA defects open at release | Audit | New |

---

## 9. Risks, open questions, research to validate

### 9.1 Risks
| Risk | Effect | Likelihood (desk view) | Mitigation |
|---|---|---|---|
| No right to contact partner beneficiaries | 1M+ target out of reach | High until answered | Ask first; model C (5.2); partner pilot in MVP; embed pilot in V2 (section 6) |
| Channel conflict with partner apps | Partners refuse or churn | Medium | Co-branding, SDK option, partner interviews |
| Health data / AI hosting abroad | Delay or blocked features | Medium–High | Residency option 5.4; CNDP early; MVP AI avoids health data |
| Subscription engine not reusable | T1 slips | Unknown | Get access to voyage. site and its API [DR A6] |
| Provider GPS not available | No live tracking | Unknown | MVP uses status steps; V2 depends on provider app |
| Darija AI quality | Wrong answers, trust loss | Medium | Text FR/AR first; Darija voice pilot with human review |
| Low brand awareness | Low installs | Medium [REC O2] | Activation levers (6.3): certificate purchase, SMS link after phone cases, partner deep link |
| Payment habits (cash, low m-wallet) | Purchase drop-off | Medium [REC S73, S74] | Card + pay-at-agency code; wallet in V2 |
| Compliance on claims and online sales | ACAPS action | Medium | Legal and compliance workstream (7.2); confirm with counsel whether ACAPS must be informed before launch; review "zéro risque de refus" [DR O-U12] |
| Unreliable public figures | Pitch credibility | High [REC O8] | Use client-confirmed numbers only |

### 9.2 Open questions for the client (priority order)
1. Segment split and case volumes per line and channel (cases per year, calls by reason) [REC D4 Q1].
2. In each partner contract, may AFA contact beneficiaries and offer an app? Who owns the data? [REC D4 Q2]
3. Which partners want an app, and AFA-branded, co-branded or SDK? Which partner would pilot? [REC D4 Q3]
4. Is there a case/dispatch system with an API? Does the provider portal or app share GPS? [REC S9c, O6]
5. Can the voyage. subscription engine be reused (API, pricing rules, certificate generation)? [DR A6]
6. Payment provider and accepted methods [DR Q3].
7. CNDP authorisations on file; current hosting; group (SanlamAllianz) rules on cloud and AI vendors [REC D4 Q6, Q7].
8. Launch countries and languages; is English needed at launch? [REC D4 Q4]
9. WhatsApp is offered as an optional channel [DEC]: does AFA want it, and do partners accept it?
10. Teleconsultation: existing medical partners and licences? Telemedicine rules AFA follows?
11. Deadline, budget, decision makers, who signs off [status.md Q12]. How does AFA define "1M+ clients" (6.1)?
12. Do call recordings and claim histories exist for AI training and evaluation, with consent?

### 9.3 What user research must validate (after Gate 1)
| Assumption | Test | Who |
|---|---|---|
| In an incident, people want one-tap help with location more than a phone call (A, M1) | Interviews with recent roadside/medical/travel assistance users; concept test of SOS flow | S1, S2 (FR and Darija/AR recruitment) |
| Seeing status and ETA reduces stress and repeat calls (A) | Interviews + call-reason analysis | S2, agents |
| App vs WhatsApp vs phone preference by segment and age | Survey + interviews | All segments |
| Partner beneficiaries recognise AFA, or only the partner brand [REC O2] | Brand recognition questions in interviews | S2 |
| Arabic RTL and Darija support change who can use the service | Comprehension tests in FR/AR; Darija assistant Wizard-of-Oz test | S1, S2 |
| Visa buyers will buy in-app rather than via agency | Interviews with recent visa applicants; voyage. analytics | S1 |
| Users accept AI answers on cover if a human is one tap away | Concept test of AI1 | S1, S2 |
| Partners prefer co-brand / SDK to sending users to AFA [REC C2] | 2–3 partner interviews | Partners |
| Agents gain time with a copilot | Agent shadowing + pilot | Call centre |

---

## 10. INTERNAL: studio lead decisions (not for the client deck)
Internal working list. Do not put it in the deck or send it to the client.

**Decided 2026-11-18 [DEC]** (reflected above):
- Distribution model: **C** (5.2). Engine API in MVP; partner embed pilot in V2.
- AI lead: **agent copilot (AI9) + FR/AR cover assistant (AI1)**, both MVP Must (pilot). Darija voice stays V2.
- WhatsApp: **optional complementary channel** (W1), outside core scope.
- Pitch format: slide deck.

**Still open for the studio lead:**
1. Keep a roadside partner pilot in the MVP (strategy lean: yes, it is the first step of the 1M+ path), or start with direct Isaaf clients only.
2. Languages at launch: FR + AR (RTL) Must; English is MVP Should. Confirm.
3. AI9 pilot team: proposed roadside non-injury team, with transcription paused when injury is mentioned.
4. Definition of "1M+ users" to propose to the client (6.1).
5. How much of this document goes into the deck. Numbers marked as assumptions must stay marked.

This is a draft for pitch preparation. It does not replace `studio/brief.md`, which stays DRAFT until the human approves it at Gate 1.

---

## Changelog 2026-11-18 (critic fixes)
Source: `studio/reviews/2026-11-18-pitch-package.md`.
- **#1** Differentiator restated precisely (new 4.5; X3, R1, R2, T1 rows). Geolocated help (My Wafa, legacy RMA Watanya) and teleconsultation (MyAXA E-Health, MyRMA Allô Santé) acknowledged. Full evidence in [BM 1b].
- **#3** New section 6 "Path to 1M+ users" (definition, funnel by segment with [__] placeholders, activation levers, what decides it). API1 assistance engine API added to MVP Must. Partner embed pilot moved from V3 to V2. New section 7 delivery plan (phases with assumed durations, team roles, cost "[to estimate with tech partner]"). Headline KPIs added (section 8).
- **#4** Decisions reflected: model C chosen; AI9 and AI1 are MVP Must (pilot); WhatsApp is an optional add-on (W1). "Decision needed" removed. Studio-lead list marked INTERNAL (section 10).
- **#6** "Lost market position" removed from the problem statement; moved to an INTERNAL note with conflicting-source caveat. Sanlam "exclusive" dated (2021) and marked to confirm. "+300" stated as total staff. Schengen visa range with sources. My Wafa installs "~1M per third-party tracker, unverified".
- **#7** Every legal point (09-08, CNDP, ACAPS) labelled "to confirm by legal counsel"; legal and compliance workstream added.
- **#10** One canonical MVP list (4.3); 4.2 column now mirrors it. X7 confidence fixed to 80% (score 4.0, rank unchanged). R6 = MVP Should; X12 = V2; Wallet pass = MVP Should; T6, R4 = V2; M5 = V3. Roadside "3 taps" replaced by "request in under a minute (target, to test)".
- **#11** AI5 relabelled "smart document check (OCR + rules)", not AI. AI1 gets a pre-purchase "general product questions" mode and 24/7 hand-off to the 24/7 line for abroad / active-trip users. Medical red-flag routing stated as a case-system rule, independent of the copilot.
- Sections renumbered: old 6–8 are now 8–10.
