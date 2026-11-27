# Status — Africa First Assist — Mobile app for AFA clients (pitch stage)
Last updated: 2026-11-18 (ops — rewritten for the new scope)

Scope: changed on 2026-11-18 from "assistance website + travel insurance flow" to a **mobile app for AFA's clients** (decisions.md). Pitch package comes before the formal brief. AI built into workflows; target 1M+ clients; distribution model C (AFA app + partner embed/SDK).

PHASE: Strategy — pitch package in final assembly. Stakeholder slide deck being built by the studio lead's assistant; **not yet approved**.
NEXT GATE: Gate 1 — Problem framing — not started (brief.md still the old website template). Before that: **human approval of the deck** (client-delivery rule).

## Path
Strategy (pitch package → client pitch meeting → discovery → brief) → [GATE 1 problem framing] → Research → Flows → UI → [GATE 2 chosen direction] → Critic → [GATE 3 final handoff] → Handoff

## Done (pitch package inputs, all DRAFT, not client-approved)
| Date | Owner | Output |
|------|-------|--------|
| 2026-11-17 | research | Desk review of current website — studio/research/2026-11-17-desk-review-current-site.md (+ 2026-11-17-current-site-notes.md) |
| 2026-11-18 | studio lead | Scope change + pitch decisions logged — studio/decisions.md |
| 2026-11-18 | research | Recognition (company reconnaissance) of AFA — studio/research/2026-11-18-recognition-afa.md |
| 2026-11-18 | research | National + international benchmark of insurance/assistance apps — studio/research/2026-11-18-benchmark-apps.md |
| 2026-11-18 | strategy | Features, AI layer, canonical MVP (§4.3), path to 1M+ (§6), delivery plan (§7), KPIs (§8), open questions (§9) — studio/strategy/2026-11-18-app-features-mvp-roadmap.md |
| 2026-11-18 | research | Proto-personas, journey maps, SOS service blueprint, research plan (§8) — studio/research/2026-11-18-journey-maps.md |
| 2026-11-18 | strategy | App map + 9 MVP/V2 task flows + RTL conventions — studio/design/flows/00-app-map.md … 09-v2-guided-declaration-voice-photo.md, rtl-conventions.md |
| 2026-11-18 | critic | Pitch package review (verdict: Not ready; 3 critical, 8 major, 3 minor, 1 polish) — studio/reviews/2026-11-18-pitch-package.md |

## Critic findings — fix status (studio/reviews/2026-11-18-pitch-package.md)
| File set | Findings | Status |
|----------|----------|--------|
| Strategy roadmap | #1, #3, #4, #6, #7, #10, #11 | FIXED (changelog in roadmap file) |
| Research: recognition, benchmark | #1, #6, #15 (BM wording) | FIXED (changelogs in each file) |
| Flows 00–09 + rtl-conventions.md | #2, #4, #8, #9, #11, #12, #13, #14 | FIXED (changelogs in each file) |
| Journey maps | #4, #5 (wrong flow links), #9, #10, #11a | IN PROGRESS — research fixing now |
| status.md | #15 | FIXED (this rewrite) |
Re-check: critic to confirm fixes once journey maps are done (task 2).

## Open tasks (near term)
| # | Owner | Task | Input → Output | Done when |
|---|-------|------|----------------|-----------|
| 1 | research | Finish critic fixes on journey maps | review #4, #5, #9, #10, #11a → research/2026-11-18-journey-maps.md | All flow links point to real files (01–08), 08-agent-copilot.md linked in §7, V2 flows marked "not drawn", scope labels match roadmap §4.3; changelog added |
| 2 | critic | Verify all critic fixes across the package, and review the deck | reviews/2026-11-18-pitch-package.md, roadmap, research, flows, deck → reviews/2026-11-18-pitch-package-recheck.md | Each finding marked closed or open; deck checked against "Deck vs appendix" list; no unsourced number or legal claim on a slide |
| 3 | studio lead's assistant | Finish the stakeholder slide deck (12–15 slides + appendix) | roadmap §4.3, §4.5, §6, §7, §8; review "Deck vs appendix"; flows 02, 03 → deck file (path to add here when saved) | Every number has a source and "(to confirm)"; INTERNAL items (roadmap §10, JM §10 flags, market rank) excluded |
| 4 | human | Decide the open studio-lead items before the deck is final | roadmap §10 "Still open" → decisions.md rows | Pilot partner in MVP (yes/no); FR+AR Must, EN Should confirmed; AI9 pilot team; proposed "1M+ user" definition; deck depth |
| 5 | human | Manual app-store check of **My Wafa, MyRMA, MyAXA Maroc, Sanlam Maroc** listings (blocked from this session) | Store listings → note added to research/2026-11-18-benchmark-apps.md (by research, from human's notes) | Features (SOS, geolocation, case status, tow tracking, teleconsultation), installs, rating, last update recorded with date; differentiator slide still holds or is reworded. **Before the pitch meeting** |
| 6 | human | **APPROVE THE DECK** before anything goes to AFA | deck + critic recheck (task 2) | **BLOCKED — needs human sign-off.** Explicit OK from the studio lead logged in decisions.md. Nothing is sent to AFA without it; studio drafts, lead sends |
| 7 | human | Hold the client pitch meeting with AFA leadership | approved deck + client questions below → meeting | Date set; questions 1–8 asked at minimum |
| 8 | scribe | Write up the pitch meeting; log decisions | transcript/notes → meetings/<date>-afa-pitch.md, new rows in decisions.md | Attendees, answers per question, decisions with source, actions with owner and date |
| 9 | human (+ strategy prep) | Kickoff / discovery with AFA: get answers and data for the questions below | question list → meetings/<date>-kickoff.md (scribe) | Each question answered, or has a client owner and due date; data request sent by the lead |
| 10 | research (+ human for access) | 2–3 partner interviews (e.g. Sanlam Maroc and other insurer partners) on model C, co-brand vs SDK, contact rights | roadmap §5.2, §9.3; JM §8 → research/<date>-partner-interviews-guide.md, then synthesis | Guide approved by lead; partner contacts given by AFA; synthesis says whether model C holds. Note: partner contact goes through AFA/lead, never by agents |
| 11 | strategy | Write the brief for the mobile app | kickoff + pitch notes, roadmap, research → studio/brief.md (replace old website template) | Every section filled; facts sourced; assumptions separate; in/out scope explicit; MVP from roadmap §4.3 |
| 12 | human | **GATE 1 sign-off on problem framing** | studio/brief.md | **BLOCKED — needs human sign-off.** Approve problem statement, segments, markets/languages, MVP scope, distribution model, 1M+ definition, success metrics, constraints. Logged in decisions.md |
| 13 | research | User research plan (after Gate 1 only) | brief, JM §8, roadmap §9.3 → research/<date>-research-plan.md | Questions, methods, recruitment (FR + Darija/AR), ethics for bereavement cases, timeline. Not started before Gate 1 |

## Later phases (after Gate 1)
- research: interviews, concept tests, call-reason analysis → synthesis; personas.md rebuilt from evidence (currently still website header, no content)
- strategy + ui-designer: flows updated from research → design/flows/
- ui-designer: 2–3 UI directions on key screens (SOS, roadside, buy cover/certificate, wallet, assistant)
- human: **GATE 2 chosen direction** — BLOCKED — needs human sign-off
- critic: usability, WCAG 2.2 AA, RTL, consistency → reviews/
- ui-designer: fixes + handoff spec → design/handoff/
- human: **GATE 3 final handoff** — BLOCKED — needs human sign-off

## Blockers
- **voyage.africafirstassist.com blocked** (proxy 403). Subscription engine, steps, payment provider and certificate format unknown. MVP item T1 depends on reusing it (roadmap §4.3 item 7).
- **App stores blocked** from this session. Competitor claims (My Wafa, MyRMA, MyAXA, Sanlam Maroc) are desk snippets only → task 5.
- **No client data**: segment sizes, case volumes, channel split, call reasons, contact rights. 1M+ funnel is all placeholders [__]; KPI targets wait for a 90-day baseline.
- No pitch meeting date, deadline, budget, decision makers or client contacts recorded.
- brief.md and personas.md are still the old website templates.

## Risks
- Deck credibility: public figures conflict (visas, rank, installs). Keep "(to confirm)" labels; market rank stays internal.
- Legal claims (09-08, CNDP, ACAPS) come from snippets; must stay "to confirm by legal counsel".
- 1M+ depends on partner contact rights, not on direct retail. If AFA cannot contact beneficiaries, the target fails.
- Scope creep: deck shows V2/V3 and WhatsApp; MVP must stay the §4.3 list, WhatsApp priced separately.
- Deck could go to AFA before approval and before the critic recheck → task 6 gate.

## Open questions for the client (one prioritised list)
Merged from roadmap §9.2 and the 2026-11-17 list (desk review Part D). Website-only questions dropped unless still relevant to the app.

**Ask first (decide 1M+, MVP and the engine)**
1. Segment split and volumes: direct Isaaf policies per year, partner beneficiaries per partner, corporate staff; cases per year per line and channel; calls by reason; online vs agency vs broker vs phone split. Is analytics/conversion data available? (roadmap Q1; old Q8, Q10, Q16)
2. Partner contracts: may AFA contact beneficiaries and offer an app? Who owns the data? (Q2)
3. Which partners want an app, and AFA-branded, co-branded or SDK? Which partner pilots in MVP? Is Sanlam Maroc still a partner after the 2026 Allianz Maroc merger? (Q3)
4. How does AFA define "1M+ clients"? Deadline, budget, decision makers, gate sign-off contacts. (Q11; old Q12)
5. Case/dispatch system: is there an API? Does the provider portal/app share GPS? (Q4)
6. Can the voyage. subscription engine be reused (API, pricing, certificate generation)? Can we get access or a test account? Which products sell online today? (Q5; old Q14, Q1)
7. CNDP authorisations on file, current hosting, SanlamAllianz rules on cloud and AI vendors; licence/ACAPS reference, mandatory disclosures, KYC. Who is the legal/compliance owner? (Q7; old Q2)
8. Which is the real 24/7 emergency number and its hours? (SOS calls it; contact page contradicts itself.) (old Q17)

**Needed for the brief**
9. Launch countries and languages: FR + AR (RTL) at launch? English needed? (Q8; old Q4, Q5)
10. Payment provider and accepted methods (card, wallet, pay-at-agency). (Q6; old Q3)
11. Products in the app: single trip vs annual, durations, what the "À partir de" price covers, how price is calculated. (old Q6, Q15)
12. Correct medical limit for world products: 50 000 € or 350 000 dhs? (needed for wallet and cover assistant) (old Q18)
13. Visa certificate: exact format, languages, how consulates verify it. (old Q7)
14. Do call recordings and claim histories exist for AI training/evaluation, with consent? (Q12)
15. Can we recruit real customers, partner beneficiaries and agents for research? (old Q13)
16. Brand guidelines; who builds the app (in-house or tech partner); existing stack. (old Q11)

**Later / optional**
17. WhatsApp offered as optional add-on: does AFA want it; do partners accept it? (Q9)
18. Teleconsultation: existing medical partners and licences; telemedicine rules AFA follows? (Q10)
19. Are "zéro risque de refus" and "acceptée par les centres visa" approved by compliance (if reused in the app)? (old Q19)
20. Does the website stay as is, or will the app's web status page / purchase flow replace parts of it? (old Q20, reframed)

## 2026-11-19 · internal app design exploration
- AFA App design system (private): https://claude.ai/artifact/SdY4nFjsGw55iB9p9AW8KQ (provisional: no AFA brand guidelines yet; IBM Plex Sans / Plex Sans Arabic stand in).
- Design canvas, 5 core screens (private): https://claude.ai/artifact/JrCxgSuvjEhd1tZ3wiAhmQ (Accueil, SOS, Assistance en route, Mes contrats, Assurance voyage).
- Internal only; not past gate 1 or 2. Next: studio lead reviews; then RTL Arabic versions, clickable flow, critic review.
- 2026-11-20: SOS flow wireframed on the canvas, page "Parcours SOS · wireframes": 13 greyscale screens (S01–S13) from flow U02, linked for click-through, with UX notes per row. Open questions: callback delay (operations), local emergency numbers per country (AFA).
- 2026-11-20: SOS flow in high fidelity (AFA App design system) on the canvas, page "Parcours SOS · haute fidélité": HD 01–13, linked, mirrors the wireframes.
- 2026-11-25: All 31 canvas screens copied to the Figma design file (page "Claude Design · écrans (exploration interne)"): 5 core screens, SOS wireframes S01–S13, SOS high fidelity HD 01–13, as editable layers.

## 2026-11-25 · Questions for the stakeholder kickoff meeting
- Notion: new project page "Projet · Application mobile AFA" under "UX_Africa first assist", with a sub-page "Questions · réunion de cadrage avec AFA" (57 questions in French, 10 sections, 90-minute plan, 10 priority questions, documents to request).
- Assumes only the starting information: client vision, goals and constraints are unknown.
- Tech, legal and budget questions are asked of the AFA teams concerned; we don't decide them.
- Internal only. Next: meeting 2026-11-26 → notes in meetings/ → brief → gate 1.

## 2026-11-26 · Deck made director-ready for the kickoff meeting
- English deck (Slides artifact H5bXRosvdapYZBNTW96K2V, version 30) reframed: groundwork and questions, not a proposal. 13 main slides + 10 backup.
- New slides: "Where our numbers come from" (figure, source, how sure), "What we have done so far", "10 questions", backup divider.
- Fixed: "about 200 agency points" was wrong; the agency finder lists 200 cities. 92% Darija → 91.9% (RGPH 2024 census, via Telquel).
- KPI slide now shows the starting point for each measure; no targets before AFA's baseline.
- Notion question page: the 10 questions on top (French); the 57 questions kept as backup.
- Still open: app store check of My Wafa, MyRMA, MyAXA, Sanlam (stores unreachable from here); studio name on the cover.

## 2026-11-26 · Deck in French, direction C
- Slides artifact H5bXRosvdapYZBNTW96K2V, version 32: all 23 slides in simple French, Mosaïque style (Inter font, star pattern band, white cards).
- English copy saved in pitch/deck-source-en-2026-11-26/.

## 2026-11-26 · Deck rebuilt on Stylescape C (fix)
- Version 34. The first pass lost the pattern in the slide viewer (CSS background images are not supported there). Rebuilt with the Mosaïque tiles taken from Stylescape C as uploaded images: bottom band on every slide, pattern panel on the cover and the "Réserve" divider, pattern band on benchmark and journey cards, frosted medallion with the restored cover illustration, persona card on "Le moment qui compte", app-screen mockup on "Ce que nous avons déjà fait".
- All 23 slides checked in the real slide viewer; illustrations recoloured to the Mosaïque palette.

## 2026-11-26 · After kickoff: benchmark of 6 assistance apps
- Kickoff notes: meetings/2026-11-26-kickoff-afa.md. B2B app first, then B2B2C; priority SOS flow.
- Benchmark page (FR, internal): https://claude.ai/artifact/B5ZoduJqAM7siX3AVcoPJp. Screens and metadata in research/2026-11-26-benchmark-assistance-apps/.
- Network: App Store, Google Play and 4 assistance company sites added to the environment's allowed hosts.
- Next: benchmark of B2B portals; rewrite brief from kickoff notes and get sign-off (gate 1).

## 2026-11-27 · New V1 scope, standards and brief
- Brief rewritten for the beneficiaries app: brief.md (gate 1, awaiting sign-off). Notion: "Brief V1 · application bénéficiaires (à valider)".
- Work standards: standards.md. Notion: "Nos standards de travail".
- Next: WhatsApp chatbot analysis (needs the HTML file from the lead's Mac), then flows in Miro.

## 2026-11-27 · Flows, app map and user journeys on Miro
- Gate 1 passed (brief approved). Flows F01–F07 drawn on Miro (section 03), horizontal; app map done. Files in flows/.
- User journeys J1–J5 drawn on Miro (section 04): panne autoroute, hospitalisation d'un proche, frais médicaux à l'étranger, décès à l'étranger, sans l'app par lien SMS. Copy: flows/2026-11-27-user-journeys.md.
- Miro's "journey" widget is not on the board's plan: journeys drawn with plain shapes (phases, 6 lanes, feelings row).
- Personas are hypothetical; feelings and pain points to check in user tests.
- Next: critic review of flows and journeys, then wireframes for the first AFA meeting (step 4).
- Storyboards J1–J5 (6 frames each, black-and-white AI illustrations from Figma) on Miro under the journeys. Style approved by the lead. Tracking aligned: steps + time left, map optional (decisions.md). Notes: research/storyboards/README.md.
