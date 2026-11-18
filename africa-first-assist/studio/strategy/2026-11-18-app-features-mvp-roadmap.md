# AFA mobile app: features, AI layer, MVP and roadmap (pitch input)

Date: 2026-11-18
Author: strategy
Status: **DRAFT for the studio lead. Not the brief.** `studio/brief.md` is untouched. Gate 1 (problem framing) still applies before any UI work.
Purpose: give the pitch package a sourced feature catalogue, an AI layer, a prioritised MVP and a V2/V3 roadmap (decisions.md, 2026-11-18: scope = mobile app; pitch before brief; AI in workflows; target 1M+ clients).

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
People covered by AFA, directly or through a partner's contract, struggle to get fast, visible help at the moment something goes wrong, because the only reliable channel today is a phone call, and they cannot see their cover, the status of their case or who is coming. This matters because AFA's value is delivered in that moment, often under another brand, and AFA has lost market position [REC A8, O3].

Status: **hypothesis.** Built from desk evidence: no app [REC A11], phone-first help [DR A7], generic claim form with no tracking [DR O-U9], confusing emergency numbers [DR O-U7]. Not tested with any user.

### 1.2 Who the app could serve
| Segment | Relation to AFA | What we know | Main app job (assumed) | Validate how |
|---|---|---|---|---|
| **S1. Direct Isaaf travel clients** (visa applicants, families, students, residents abroad) | AFA's own customers | Isaaf range, MAD prices, Morocco residents [DR A3, A5]. About 606 000 Schengen visas to Moroccans in 2024 [REC A8, S80]. Channel split unknown [DR C]. | Buy cover, get visa certificate, get help abroad | Client sales data; interviews with recent buyers (online and agency) |
| **S2. Partner beneficiaries** (e.g. Sanlam Maroc motor policyholders [REC S20, S21], La Marocaine Vie "Sehha" health clients [REC S22]; banks, carmakers, microfinance on the logo wall, status unclear [REC A7]) | End users of a partner's contract | Probably most of the "8 M beneficiaries" [REC O1]. May not know the AFA brand [REC O2]. AFA's right to contact them: unknown [REC C1]. | Call for help, share location, track the provider, see case status | Partner contracts review; partner interviews; beneficiary interviews |
| **S3. Corporate staff** (work-accident, staff medical assistance) | Employer's contract | Offer exists [DR A2]. Size unknown. | Report an incident, get medical help | Client data; 1–2 HR interviews |
| **S4. Foreign residents in Morocco** (Isaaf Résidents Étrangers) | Direct medical product | Product exists [DR A2]. Size unknown. | Medical help in FR/EN | Client data |
| Secondary: **AFA call-centre agents** | Internal | +300 staff [REC A4] | Faster case intake, fewer status calls | Agent shadowing (half day) |
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
| X1 | Account and onboarding | Phone number + OTP; activate cover by policy, certificate, card or partner code; biometric login; guest SOS without account | Sanlam Maroc fingerprint login (N6); Moja Generali AI identity scan (I17); My Wafa open to non-clients (N1) | Fast access in a stressful moment | Identifies beneficiary; owns the digital relationship where allowed | M | **Partner beneficiary data and rights to contact [REC C1]**; KYC rules for purchase (Q); 09-08 consent |
| X2 | Policy wallet | All covers in one place: digital card, limits in plain words, attestations, PDF; Apple/Google Wallet pass; available offline | My Wafa, MyRMA, Sanlam Maroc (N1, N4, N6); Hollard e-card (A5); AXA Schengen digital card (I5); Europ Assistance Wallet card (I7) | Answers "am I covered?" (M5) | Fewer info calls | M | Policy data feeds from AFA systems and partners; product wording in plain language |
| X3 | SOS one-tap | One button: calls 24/7 line and sends GPS, policy ID and language at the same time; creates a case; works without login | Discovery panic button (A2), Netcare 911 (A11), Namola (A12), TravelSmart one-tap (I1), Travel EYE location share (I4), International SOS (I8). **None in Moroccan apps** [BM 1.2] | Core of M1. No need to explain where you are | Shorter calls; differentiator vs insurer apps [REC O5] | M | Integration with AFA case/dispatch platform ("missionnement automatique", geolocation [REC S9c]); telephony |
| X4 | Case and claim: declare and track | Structured request per line; upload photos/documents; reference number; status timeline; messages from the handler | My Wafa, MyRMA, AtlantaSanad (N1, N4, N7); M'LAM step notifications (A13); Europ Assistance (I7); MAPFRE GO (I16); Generali (I17) | Visibility (M3); one place for documents | Fewer "where is my case" calls; digital claim share | L | Case system API (unknown, Q); document storage under 09-08; partner rules on who handles claims |
| X5 | Chat with assistance | Async chat with an agent, attach photo, switch to call; later AI first line (AI1) | International SOS chat (I8), SafetyWing 24/7 chat (I15), Oscar care guides (I14), AtlantaSanad chatbot (N7) | Help without a call (abroad, roaming, noise) | Agents handle several chats at once | M | Contact-centre tooling; staffing in FR/AR/Darija |
| X6 | Payments | Card payment for travel purchase; later mobile wallet; pay-at-agency code | My Wafa, MyRMA online payment (N1, N4); AXA Mansard via PalmPay/Airtel (A7); BIMA operator billing (A8) | Buy without going to an agency | Direct revenue; online share | M | Payment provider unknown [DR Q3]; low m-wallet adoption ~10% [REC A8, S73]; cash dominant [REC S74] |
| X7 | Notifications | Push for case steps, renewal, alerts; SMS fallback for critical messages | M'LAM (A13); TravelSmart (I1); Chubb SMS red alerts (I9) | Know what is happening without calling | Deflects status calls | S | SMS gateway; consent |
| X8 | Family and dependants | Add spouse, children, parents covered by family products; act on their behalf (e.g. call SOS for a parent) | NamolaPlus family (A12). Rare in sample [BM 4b] | Isaaf Monde is a family cover [DR A3]; parents abroad | More users per policy | M | Consent for minors and adults; data model for beneficiaries |
| X9 | Multilingual FR / AR / Darija / EN + RTL | UI in French and Arabic (RTL mirrored); English; Darija in voice and chat support; Amazigh to explore | Only MaCNSS shows Arabic UI (N10). **No Darija support found anywhere** [BM 4c] | Darija daily for 91.9%; French read by 57.7% of literate people; English 20.5% [REC A8, S90] | Reach beyond French readers; differentiator | M (UI) / L (Darija AI) | Translation and RTL QA; Darija speech/text models (see AI1) |
| X10 | Accessibility WCAG 2.2 AA | Built in, not a feature: text scaling, screen readers (VoiceOver/TalkBack), contrast, target size, accessible auth (no CAPTCHA puzzles), RTL correctness | Current site has heading, label and alt gaps [DR B2] | Older users, stress, low vision | Studio standard; reduces legal and reputation risk | M (ongoing) | Design system tokens; QA with assistive tech |
| X11 | Low bandwidth and offline essentials | Cached card, cover summary and emergency numbers offline; light screens; resumable uploads; SMS fallback for SOS confirmation | Chubb SMS fallback (I9); USSD in A3, A7, A8, A10. **Offline mode inside an app: none found** [BM 3c note] | Works abroad without roaming and in weak coverage | Fewer failed requests | M | Architecture choice from day 1 |
| X12 | Provider and agency finder | Map of AFA offices, agencies, brokers; later garages, clinics, pharmacies | My Wafa (N1), MyAXA garages (N5), JubiCare (A6), TravelSmart "Assistance Around Me" (I1) | Find help or buy nearby | Supports the agency channel | M | Network data quality (1 340 vs 1 460 providers conflict [REC A4]) |
| X13 | Consent and privacy centre | Clear consents (location, health data, marketing); see and delete data; share with partner on/off | Not benchmarked | Trust | Law 09-08 compliance; CNDP | S | CNDP declarations/authorisations (Q) |

### 2.2 Travel / Visa (Isaaf)
| ID | Feature | Description | Benchmark evidence [BM] | User value | Business value | Cx | Dependencies |
|---|---|---|---|---|---|---|---|
| T1 | Quote and buy travel cover | Pick destination, dates, travellers; see full price (not "from"); compare the 5 products; pay | SafetyWing buy/cancel in app (I15); My Wafa buy and pay (N1). **No Moroccan app sells travel cover** (matrix 3a) | Fixes M2 pain [DR O-U1, O-U6] | Direct revenue; AFA's clearest B2C case [REC O7] | L | Subscription engine behind voyage.africafirstassist.com (not seen [DR A6]); pricing rules (Q); **ACAPS informed before online sales go live** [REC S66, S67] |
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
| M2 | Teleconsultation | Phone/video with a doctor; FR/AR/Darija; callback 24/7 | Discovery (A1), AXA Mansard (A7), AXA My Trip Companion (I3), Europ Assistance portal (I7), MyRMA Allô Santé (N4, secondary), MyAXA e-health (N5) | Care without travel or waiting | New service; partner upsell (e.g. Sehha [REC S22]) | L | Licensed telemedicine partner; Moroccan telemedicine rules (Q); **CNDP for health data, no transfer abroad without approval** [REC S100–S102] |
| M3 | E-prescription and pharmacy | Prescription after teleconsultation; pharmacy pickup or delivery | Discovery (A1), AXA Mansard (A7), AXA (I3) | Closes the care loop | Stickiness | L | Pharmacy partners; regulation (Q) |
| M4 | Pharmacy on duty and care finder | Nearest on-duty pharmacy, clinics in network | My Wafa (N1), JubiCare (A6) | Useful weekly, not only in crisis | Reasons to open the app | M | Data source for "pharmacies de garde" (Q) |
| M5 | Health partner cases | View assistance part of partner health products (e.g. Sehha) | Wafa Santé (N2), JubiCare pre-authorisation (A6) | One place | Partner value | M | Partner agreement and data (Q) |

### 2.4 Roadside / Auto
| ID | Feature | Description | Benchmark evidence [BM] | User value | Business value | Cx | Dependencies |
|---|---|---|---|---|---|---|---|
| R1 | Roadside request with location | Choose problem (breakdown, accident, tyre, battery, keys, fuel); GPS + vehicle prefilled; confirm in 3 taps | Europ Assistance (I7), MAPFRE GO one click (I16), MyAXA roadside contact (N5) | Core M1 for drivers | Faster dispatch; differentiator in Morocco [BM 1.6] | M | Dispatch API [REC S9c]; partner motor contracts (Sanlam [REC S21]) |
| R2 | Live provider tracking | Tow truck on a map, ETA, driver name and plate, call driver | Europ Assistance real-time tow-truck tracking (I7); MAiassist SMS every 15 min (I16 legacy). **None in Morocco** | Removes the worst uncertainty | Fewer "where is he" calls; visible service quality | L | **Provider GPS**: provider app/portal must share location (maturity unknown [REC O6]); provider adoption |
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
- **Health data:** law 09-08; CNDP authorisation for patient follow-up processing; **no transfer abroad without CNDP approval**; CNDP says AI processing of personal data falls under 09-08 [REC D3, S100–S102]. Most large language model (LLM) APIs run abroad. This is the main AI constraint.
- **ACAPS:** must be informed before online sales go live; it monitors misleading online offers [REC S66, S67]. Any AI that recommends or sells cover touches this.
- These are snippet-level legal facts. **Legal counsel and AFA compliance must confirm.**

### 3.2 AI features
| ID | AI feature | Workflow | What it does | Human-in-the-loop | Data needed | Regulatory risk | Build / buy | Hype vs value at 1M+ |
|---|---|---|---|---|---|---|---|---|
| AI1 | Multilingual assistant (Darija / FR / AR) for FAQ and triage | X5 chat, X2 wallet, later voice on SOS | Answers "am I covered?" from the user's own contract; routes the request to the right line and urgency; hands to an agent | Any emergency, medical, funeral or low-confidence answer goes straight to a human; agent sees the transcript | Product wordings, general conditions, FAQ, anonymised past chats/calls for Darija | Medium. Health info if triage is medical (09-08, CNDP). Wrong cover answers = consumer-protection and ACAPS exposure | Buy the model; **build** the grounding on AFA content (retrieval) and the guardrails. Darija quality must be tested; no Darija source found in benchmark [BM 4c] | **Value** for FAQ and cover questions in FR/AR. **Darija voice is unproven**: real differentiator if it works, high risk if it fails. Pilot, measure, then scale |
| AI2 | AI-guided incident declaration (voice / photo → structured case) | X3 SOS, X4 claims, R1, H1, T7 | User speaks or types in their language, adds photos; AI fills the structured case (what, where, who, policy) and summarises it | Agent confirms the case before dispatch or payment; user confirms summary | Case taxonomy, past cases, speech-to-text for Darija/FR/AR | Medium. Voice and photos are personal data; health details in medical cases | Buy speech and vision; build the case schema mapping | **High value at scale**: cuts call time on every case. Needs a clean case API first |
| AI3 | Photo damage pre-assessment | R3, H1 | Estimates damage type and severity from photos | Expert or insurer validates any estimate | Labelled damage photos, parts and repair costs | Medium. Plus: **motor damage pricing is the insurer's job, not AFA's** | Buy (Hollard uses Bdeo [BM A5]; Ping An, Genertel, Zurich in-house [BM I13, I17, I18]) | **Mostly hype for AFA as an assisteur.** Useful only for triage ("drivable or tow?") or if partner insurers buy it. Later/explore |
| AI4 | Symptom checker before teleconsultation | M2, M1 | Structured symptom intake; suggests urgency level; passes summary to the doctor | Doctor decides. Red flags trigger emergency route, no AI advice | Validated medical knowledge base; health data | **High.** Health data under 09-08 and CNDP; possible medical-device status (Q); transfer abroad if vendor-hosted | **Buy** a certified engine (Allyz uses Infermedica [BM I2]; Discovery [BM A1]) and host or contract to meet CNDP | Value **only** as intake for M2, not standalone. V2 at the earliest |
| AI5 | Smart document check for visa purchase | T1, T2, R6 | Scans passport/ID to prefill names and dates; checks travel dates and cover against the Schengen rule (30 000 € minimum, whole stay [DR A4]); flags mismatches before issuing the certificate | User confirms data; edge cases to an agent | Passport/ID OCR; Schengen rules | Low–medium. ID data under 09-08; prefer on-device OCR | Buy OCR (on-device where possible); build rules | **Real value, low hype.** Prevents certificate errors that can hurt a visa file. Mostly OCR + rules |
| AI6 | Proactive travel alerts | T4, X7 | Pushes relevant alerts by destination and trip dates | Content team sets rules and thresholds | Trip dates, location (consent), alert feed | Low–medium (location data) | Buy the feed; rules first, ML later | Useful, but mostly **rules + a feed**, not AI. Do not sell it as AI |
| AI7 | Fraud scoring | X4 claims, T7 | Scores claims and requests for anomalies (duplicates, patterns) | Every flag reviewed by a person; no automatic refusal | Historic claims with fraud labels | Medium. Automated decisions on people; 09-08 | Build on AFA data or buy (Turaco, Lemonade, Zurich use AI fraud [BM A9, I11, I18]) | Real value **once digital claim volume exists**. Needs labelled data AFA may not have (Q). V3 |
| AI8 | Personalised recommendations | Wallet, T1, notifications | Suggests cover (e.g. Monde instead of Visa Europe for frequent travellers) | Compliance-approved rules; no hidden upsell | Purchase history, trips | **ACAPS duty of advice / misleading offers** [REC S66]; marketing consent | Rules first | **Mostly hype at launch.** Little data, compliance risk, small catalogue (5 travel products). Later/explore |
| AI9 | Agent copilot for the call centre | All cases, all channels (phone, app, WhatsApp) | Live transcript, case summary, suggested next step and applicable cover, draft messages in the user's language, after-call notes | Agent decides everything; copilot only suggests | Call audio, case history, product rules | Medium. Call recording consent; health data; hosting | Buy speech + LLM; build integration with case system | **Highest value per effort at 1M+**: helps every case whatever the channel, including partner beneficiaries who never install the app. Internal, so lower consumer risk |

### 3.3 Honest read
- **Most value:** AI9 (copilot), AI2 (structured intake), AI5 (document check), AI1 in FR/AR for cover questions.
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
| ID | Feature | R | I | C | E | Score | MoSCoW (MVP) |
|---|---|---|---|---|---|---|---|
| T2 | Instant visa certificate | 3 | 3 | 80% | 1 | **7.2** | Must |
| X3 | SOS one-tap | 5 | 3 | 80% | 2 | **6.0** | Must |
| X7 | Notifications + SMS fallback | 5 | 1 | 100% | 1 | **5.0** | Must |
| R1 | Roadside request with location | 3 | 3 | 80% | 2 | **3.6** | Must |
| X11 | Offline essentials | 4 | 2 | 80% | 2 | **3.2** | Must |
| — | WhatsApp companion channel (section 5.6) | 5 | 2 | 50% | 2 | 2.5 | Decision needed |
| T3 | Travel companion basic | 3 | 1 | 80% | 1 | 2.4 | Must |
| AI5 | Smart document check | 3 | 1 | 80% | 1 | 2.4 | Should |
| X2 | Policy wallet | 5 | 1 | 80% | 2 | 2.0 | Must |
| T1 | Quote and buy travel | 3 | 3 | 80% | 4 | 1.8 | Must |
| X4 | Case declare and track | 4 | 2 | 80% | 4 | 1.6 | Must (tracking + travel claims) |
| X5 | Human chat | 4 | 1 | 80% | 2 | 1.6 | Could (V2) |
| AI9 | Agent copilot | 5 | 2 | 50% | 4 | 1.25 | Should (pilot) |
| X12 | Agency / provider finder | 3 | 1 | 80% | 2 | 1.2 | Could |
| R6 | Vehicle profile | 3 | 0.5 | 80% | 1 | 1.2 | Should |
| AI1 | FAQ assistant FR/AR (text) | 4 | 1 | 50% | 2 | 1.0 | Should (pilot, cover questions only) |
| AI2 | Guided declaration | 4 | 2 | 50% | 4 | 1.0 | V2 |
| H1 | Home emergency request | 2 | 2 | 50% | 2 | 1.0 | V2 |
| R2 | Live provider tracking | 3 | 2 | 50% | 4 | 0.75 | V2 |
| M2 | Teleconsultation | 3 | 2 | 50% | 4 | 0.75 | V2 |
| M4 | Pharmacy / care finder | 3 | 1 | 50% | 2 | 0.75 | V2 |
| F1 | Funeral declaration | 1 | 3 | 50% | 2 | 0.75 | V2 (phone + SOS in MVP) |
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

Read with care: one changed assumption moves a feature. Most sensitive: **R1 depends on a partner pilot** and **T1 depends on reusing the existing subscription engine**. If either is not available, the MVP changes (see 4.3 notes).

### 4.3 MVP (V1): "Help in one tap, cover in your pocket, visa cover in minutes"
Launch assumption: about 6 months from Gate 1 (assumption; no client deadline is known [status.md blockers]). Scope assumption: Morocco only; direct Isaaf clients + **one pilot partner** (e.g. Sanlam Maroc motor, AFA's "exclusive" assistance client [REC S16]); subject to partner agreement.

| # | MVP item | Why it is in |
|---|---|---|
| 1 | X1 Onboarding (OTP, activate by policy/certificate number or pilot-partner code; SOS works without login) | Nothing works without identifying the beneficiary. Guest SOS keeps the emergency path open |
| 2 | X3 SOS one-tap (call + GPS + case created) | Core promise (M1). Highest scored user feature. Not offered by any Moroccan insurer app [BM 1.2] |
| 3 | R1 Roadside request with location, for Isaaf Auto clients and the pilot partner | Highest-volume incident line for an assisteur (assumption; AFA described as auto assistance leader [REC S18]). Tests the partner model early |
| 4 | X4 Case tracking (status timeline from the case system) + travel claim declaration with uploads (T7) | Visibility is the gap today [DR O-U9]. Status steps, not live map, to limit integration risk |
| 5 | X2 Policy wallet + T3 travel companion basic, offline | Answers "am I covered?" and gives numbers abroad without data |
| 6 | T1 Quote and buy travel cover (5 Isaaf products, comparison, full price) + X6 card payment | AFA's only clear direct revenue case [REC O7]. **Condition:** reuse the voyage. subscription engine via API. If not possible, MVP links out and T1 moves to V2 |
| 7 | T2 Instant visa certificate with verification code | AFA's flagship promise [DR A4]. Low effort once T1 exists |
| 8 | AI5 Passport scan prefill + Schengen rule check | Cuts certificate errors. Low risk, on-device OCR possible |
| 9 | X7 Push + SMS fallback | Case updates are the main call-deflection lever |
| 10 | X9 French + Arabic (RTL) UI; English UI if translation budget allows (Should); Darija through human agents | Arabic RTL needed for reach [REC A8, S90]; Darija AI not proven yet |
| 11 | X10 WCAG 2.2 AA, X11 low-bandwidth design, X13 consent centre | Non-negotiable foundations; costly to retrofit |
| 12 | AI9 Agent copilot **pilot** (summaries + after-call notes, one team) | AI in the workflow from day 1 [DEC] with the lowest consumer risk, and it serves partner beneficiaries who do not have the app |
| 13 | AI1 **text** assistant, FR/AR, cover questions only, hand-off to human | Visible AI for the pitch, limited to answers grounded in the user's own contract. Off for medical, funeral, emergency |

Not in MVP, on purpose: live tracking map (provider GPS unknown), teleconsultation (partner + CNDP), home, funeral flow (phone + SOS cover it), family, chat with humans, WhatsApp channel (decision needed), Darija voice, fraud, recommendations.

### 4.4 Roadmap after MVP
| Version | Theme | Features | AI additions | Prerequisites |
|---|---|---|---|---|
| **V2** (assumption: +6 months) | **Real-time help and health** | R2 live provider tracking; H1/H2 home requests; F1/F2 funeral flow (human-led); M1 medical request; M2 teleconsultation via partner; M4 pharmacy/care finder; X5 human chat; X8 family; B1 employee access; T4 travel alerts; T5 medical facility abroad; X6 mobile wallet; English UI if not in MVP; more partners onboarded | AI2 guided declaration (voice/photo → case); AI1 Darija voice **pilot**; AI4 symptom intake inside M2 (bought engine); AI6 alert rules; AI9 copilot to all teams | Provider app shares GPS; telemedicine partner + CNDP authorisation; second partner agreement; MVP baselines measured; Darija pilot results |
| **V3** (assumption: +12 months) | **Scale and ecosystem** | White-label / SDK for partner apps (section 5.2); multi-country rollout (country list unknown [REC A4]); M3 e-prescription; R3 accident support with insurer; B2 partner reporting (web); H3 seniors (explore) | AI7 fraud scoring on real digital claim data; AI1 extended to more languages; AI3 only if a partner funds it | Country regulators and currencies; group platform decisions (SanlamAllianz apps MySAllia, M'LAM [BM A13]); data hosting per country |
| **Later / explore** | Bets to test | USSD access for sub-Saharan markets; Amazigh; wellness or driving rewards (Discovery [BM A1, A2]); parametric flight-delay payouts (Allianz [BM I1]); connected-device teleassistance (Wafa IMA Sérélia [BM N3]) | AI8 recommendations; AI3 photo damage; voice/avatar assistants (Ping An [BM I12]) | Evidence from V1–V2 use; partner demand |

---

## 5. Scale considerations for 1M+ users (OPTIONS for the studio lead)

**Nothing in this section is a decision.** It sets out options for the studio lead and the client.

### 5.1 The core risk: who owns the end customer
- 1M+ users cannot come from direct retail alone [REC C1]. They must come mostly from partner beneficiaries (S2).
- AFA's right to contact them and the data ownership in each contract are **unknown** [REC D4 Q2].
- Partners already run apps with assistance features: My Wafa (~1M installs per a third-party tracker [REC A10]), MyRMA, MyAXA Maroc, Sanlam Maroc [BM N1, N4, N5, N6]. An AFA app could **compete with its own clients** [REC O4]. AXA France withdrew an app in 2018 citing intermediaries limiting direct client contact [BM I6].

### 5.2 Distribution options
| Option | What it is | For | Against | 1M+ reachable? |
|---|---|---|---|---|
| **A. AFA-branded app only** | One app, AFA brand, all segments | Full control; brand rebuild [REC O2] | Needs partner permission for each beneficiary base; channel conflict; low brand awareness | Only with partner consent at scale |
| **B. White-label / SDK only** | AFA's assistance module (SOS, request, tracking) embedded in partner apps, partner brand | No conflict; rides existing installs | AFA invisible; depends on partner roadmaps; no direct retail | Yes, via partner installs, if partners adopt |
| **C. Hybrid (AFA app + assistance API/SDK)** | AFA app for direct clients (travel, Isaaf) and for partners who opt in (co-branded); same assistance engine exposed as API/SDK to partners who prefer their own app | Serves both; one engine; partner choice | Two surfaces to maintain; needs API-first architecture from V1 | Most likely path (assumption) |

Strategy lean (for discussion only): **C, with an API-first core in V1** so the SDK in V3 is not a rebuild. Test with 2–3 partner interviews [REC C2] before committing.

### 5.3 Data ownership
Options to put to the client: AFA as data controller for its own clients, processor for partner beneficiaries; or joint controllers per contract. Needs legal review of each partner contract (Q).

### 5.4 Hosting and data residency
- Health and personal data: 09-08, CNDP authorisation, no transfer abroad without approval [REC S100–S102].
- Options: (a) host in Morocco, including AI models where feasible; (b) foreign cloud/LLM with CNDP-approved transfer; (c) split: personal and health data in Morocco, only redacted/pseudonymised text sent to foreign AI services.
- Group constraint: SanlamAllianz may have standards or shared platforms [REC O9]. Ask.
- Multi-country (V3): each country may have its own rules and regulators. Country list unknown [REC A4].

### 5.5 Call-centre deflection
- The app's main cost case is fewer and shorter calls: status updates (X7, X4), cover questions (X2, AI1), structured intake (X3, AI2), copilot (AI9).
- Emergencies must **never** be deflected away from a human. Deflection targets are for status and information contacts only.
- Baseline needed: calls by reason (Q). Without it, no target can be set.

### 5.6 Complementary channels (option, needs research)
| Channel | Evidence | Option |
|---|---|---|
| WhatsApp | Moroccan insurers already use it (AtlantaSanad, MCMA M3ak [BM N7, N8]); African claims on WhatsApp (Old Mutual, Hollard, Turaco [BM A3, A5, A9]); AFA offers no WhatsApp today [DR A6] | WhatsApp companion for SOS intake, documents and status, linked to the same case engine. Scored 2.5 (above many app features). **Scope decision for studio lead and client** [BM 1.10] |
| SMS | Chubb red alerts by SMS (I9) | In MVP as fallback (X7, X11) |
| USSD | BIMA, AXA Mansard, Old Mutual, Pula (A3, A7, A8, A10) | Relevant for sub-Saharan markets, less for Morocco (93.6% urban / 78.4% rural household smartphone ownership [REC A8, S70]). Later/explore |

### 5.7 Offline and low bandwidth
Design for weak data and roaming from V1 (X11): offline card and numbers, small payloads, resumable uploads, SMS confirmation of SOS. Retrofitting later is costly.

### 5.8 Scale engineering notes (for the tech partner)
- Peak load is seasonal: visa season and summer (4.06 M MRE arrivals in summer 2025 [REC A8, S83]). Plan capacity for peaks, not averages.
- SOS path must work when other services are down (separate, minimal path; phone fallback always visible).

---

## 6. Proposed success metrics
Baselines are unknown for all. **Targets to be set with the client after baselines are measured.** No numbers are proposed here.

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
| AI quality | AI1: answered without hand-off and rated correct; AI9: handle-time change, agent acceptance rate; AI5: certificate correction rate | Logs + human review sample | New |
| Accessibility | WCAG 2.2 AA defects open at release | Audit | New |

---

## 7. Risks, open questions, research to validate

### 7.1 Risks
| Risk | Effect | Likelihood (desk view) | Mitigation |
|---|---|---|---|
| No right to contact partner beneficiaries | 1M+ target out of reach | High until answered | Ask first; hybrid model (5.2); partner pilot in MVP |
| Channel conflict with partner apps | Partners refuse or churn | Medium | Co-branding, SDK option, partner interviews |
| Health data / AI hosting abroad | Delay or blocked features | Medium–High | Residency option 5.4; CNDP early; MVP AI avoids health data |
| Subscription engine not reusable | T1 slips | Unknown | Get access to voyage. site and its API [DR A6] |
| Provider GPS not available | No live tracking | Unknown | MVP uses status steps; V2 depends on provider app |
| Darija AI quality | Wrong answers, trust loss | Medium | Text FR/AR first; Darija voice pilot with human review |
| Low brand awareness | Low installs | Medium [REC O2] | Activate through partners and at point of purchase (certificate, SMS link) |
| Payment habits (cash, low m-wallet) | Purchase drop-off | Medium [REC S73, S74] | Card + pay-at-agency code; wallet in V2 |
| Compliance on claims and online sales | ACAPS action | Medium | Inform ACAPS before launch; review "zéro risque de refus" [DR O-U12] |
| Unreliable public figures | Pitch credibility | High [REC O8] | Use client-confirmed numbers only |

### 7.2 Open questions for the client (priority order)
1. Segment split and case volumes per line and channel (cases per year, calls by reason) [REC D4 Q1].
2. In each partner contract, may AFA contact beneficiaries and offer an app? Who owns the data? [REC D4 Q2]
3. Which partners want an app, and AFA-branded, co-branded or SDK? Which partner would pilot? [REC D4 Q3]
4. Is there a case/dispatch system with an API? Does the provider portal or app share GPS? [REC S9c, O6]
5. Can the voyage. subscription engine be reused (API, pricing rules, certificate generation)? [DR A6]
6. Payment provider and accepted methods [DR Q3].
7. CNDP authorisations on file; current hosting; group (SanlamAllianz) rules on cloud and AI vendors [REC D4 Q6, Q7].
8. Launch countries and languages; is English needed at launch? [REC D4 Q4]
9. Is WhatsApp acceptable as a channel for AFA and its partners?
10. Teleconsultation: existing medical partners and licences? Telemedicine rules AFA follows?
11. Deadline, budget, decision makers, who signs off [status.md Q12].
12. Do call recordings and claim histories exist for AI training and evaluation, with consent?

### 7.3 What user research must validate (after Gate 1)
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

## 8. Decisions needed from the studio lead
1. **Distribution model** to put to the client: A, B or C (5.2). Strategy lean: C, test first.
2. **WhatsApp companion**: include as a scope option in the pitch, or keep app-only (5.6).
3. **MVP scope bet**: include a partner pilot for roadside (R1), or start with direct Isaaf travel clients only (smaller, faster, but far from 1M+).
4. **AI stance for the pitch**: lead with copilot + grounded FAQ (lower risk), or lead with Darija voice (bigger story, higher risk).
5. **Languages at launch**: FR + AR (RTL) only, or FR + AR + EN.
6. Whether this document goes into the pitch as-is or is condensed (it is internal; numbers marked as assumptions must stay marked).

This is a draft for pitch preparation. It does not replace `studio/brief.md`, which stays DRAFT until the human approves it at Gate 1.
