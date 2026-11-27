# Decision log — Africa First Assist — Assistance website & travel insurance flow

| Date | Decision | Decided by | Why | Source |
|------|----------|------------|-----|--------|
| 2026-11-18 | Scope changes from "assistance website + travel insurance flow" to a **mobile app for AFA's clients**. Client has no feature list yet. | Studio lead | Client request relayed by studio lead | Chat instruction, 2026-11-18 |
| 2026-11-18 | Studio produces a **pitch package** before a formal brief: recognition research on AFA, national + international benchmark of insurance/assistance apps, MVP vs next versions, user flows & journeys, stakeholder pitch document. Gate 1 (brief sign-off) still applies before any UI work. | Studio lead | Client needs feature ideas to decide; pitch comes before brief | Chat instruction, 2026-11-18 |
| 2026-11-18 | AI to be built into the app's workflows; target scale **1M+ clients**. | Studio lead | Market trend; product must be worth developing at that scale | Chat instruction, 2026-11-18 |
| 2026-11-18 | Pitch recommends distribution model C: **AFA-branded app + same assistance engine embedded in partner apps** (white-label/SDK). | Studio lead | Only path to 1M+ users; avoids competing with partner apps (My Wafa, MyAXA, RMA, Sanlam Maroc). To test in 2–3 partner interviews. | strategy/2026-11-18-app-features-mvp-roadmap.md |
| 2026-11-18 | Pitch leads AI with **call-centre agent copilot + FR/AR cover assistant** (lower risk). Darija voice stays V2. | Studio lead | Value from day one, helps every case, lower regulatory and delivery risk | strategy/2026-11-18-app-features-mvp-roadmap.md |
| 2026-11-18 | Pitch offers **WhatsApp as an optional complementary channel**, not part of the core scope. | Studio lead | Proven locally (AtlantaSanad) and across Africa | research/2026-11-18-benchmark-apps.md |
| 2026-11-18 | Stakeholder pitch format: **slide deck**. | Studio lead | For the meeting with AFA leadership | Chat, 2026-11-18 |
| 2026-11-19 | **Studio works strictly in the UX designer perimeter.** Pitch materials cover users, journeys, UX flows, screens and states, content, accessibility, Arabic RTL and UX research. Business model, pricing, distribution, tech architecture, AI/model rules, legal and compliance, and call-centre operations are owned by AFA teams: we raise them as questions, never decide or assert them. Technical diagrams kept only as hand-over notes. | Studio lead | Corporate client: respect each team's perimeter | Chat, 2026-11-19 |
| 2026-11-19 | **Concept wireframes allowed before Gate 1**, for the pitch only: greyscale, labelled "concept for discussion", built from the UX flows U00–U08. No high-fidelity UI until AFA signs the brief and the studio lead picks a direction (Gate 2). | Studio lead | Pitch needs to show the experience, not only diagrams | Chat, 2026-11-19 |
| 2026-11-19 | **Two high-fidelity "visual teaser" screens allowed for the pitch** (Home, Help on the way) plus one hero shot, in AFA brand colours, built with the stageshow craft and framing rules. Labelled "one possible direction, for discussion"; this is not Gate 2 (AFA still chooses a direction after research). | Studio lead | Pitch needs a "wow" moment | Chat, 2026-11-19 |
| 2026-11-19 | **AFA's primary brand colour is blue** (#006FB1, with navy #1F4E80 / #305D90). Red (#981222) was wrongly used as primary; corrected in the hi-fi screens and the pitch deck. Red kept only for the SOS button (emergency convention, colour from AFA's palette). | Studio lead | Brand correction from the studio lead | Chat, 2026-11-19 |
| 2026-11-19 | **Visual direction paused; focus on UX deliverables and the pitch.** Pitch to be redesigned in French on a template/skill the studio lead will provide. UX deliverables to be packaged, stored in Resurf (via Claude Code on the studio lead's Mac) and sent by email by the studio lead before the stakeholder meeting (studio drafts, never sends). | Studio lead | Visual ideas need refining first; stakeholders meeting comes first | Chat, 2026-11-19 |

## 2026-11-19 · App design in Claude (Design canvas), internal exploration
- **Decision:** start designing the app screens on a Claude Design canvas (Artifact "Design" type), from this session's brief, personas, flows and wireframes.
- **Who:** studio lead.
- **Why:** keep all project context in one place; standalone Claude Design closes on 14 Dec 2026.
- **Scope:** internal exploration only. Not shared with AFA. Does not pass gate 1 (brief signed) or gate 2 (direction chosen); anything shown to AFA later needs the studio lead's OK.

## 2026-11-26 · Graphic direction C ("Mosaïque") for the kickoff deck, in French
- Decided by: studio lead.
- What: apply Stylescape C "Mosaïque" (zellige-inspired star pattern, light blues, white cards, bold sans titles, uppercase labels) to the meeting slides, and translate the deck into simple French.
- How: AFA blue #006FB1 replaces Stylescape C's blue (#0075BC), which is almost the same; Stylescape C's ink #1E3551 is used for text. The light blues (Ciel, Azur, Lagon) are used only in the pattern, never for text (contrast).
- Why: the meeting is with AFA directors; French for the audience, and a local, recognisable visual identity.
- The English version is kept in pitch/deck-source-en-2026-11-26/.

## 2026-11-26 · Kickoff meeting: listen only, no presentation
- Decided by: studio lead.
- What: the only goal of the meeting is to listen to AFA's business teams and understand them. We don't present the deck; it stays as backup for moments when the discussion stalls.
- Notion intro updated to match.

## 2026-11-26 · Scope after kickoff (AFA)
- Decided by: AFA stakeholders, relayed by the studio lead.
- B2B app first: services, contracts, beneficiaries, fleet, amendments, parent/child contracts. Then a B2B2C app, similar to B2C.
- Priority: a clear SOS flow. Next step: benchmark of 6 assistance apps (Europe, USA), screens and flows.
- Source: meetings/2026-11-26-kickoff-afa.md.

## 2026-11-26 · Focus on individual clients (particuliers)
- Decided by: studio lead.
- What: work first on individual clients, most of whom have no phone or email on file. B2B fleets and large accounts are set aside for now.
- To confirm with AFA: at kickoff they said B2B first.
- Working doc: research/2026-11-26-particuliers-classification.md.

## 2026-11-27 · V1 scope: beneficiaries app (claims, contracts, notifications, SOS timeline)
- Decided by: studio lead, relaying AFA business teams.
- V1 for people covered by travel, health or car assistance: declare and track claims, claims history, contract details, notifications (birthday, guidance, renewal, claim steps, location sharing, provider arrival).
- SOS button is a must. SOS launches a "timeline de la prestation"; the app sends identity, contract and location to the assistance desk automatically (feasibility to discuss with AFA).
- Requirement: guided, clear experience; clear, tested UX patterns.
- Plan: standards, WhatsApp chatbot analysis, flows and journeys, wireframes, stylescapes, UI and handoff.
- Brief rewritten (brief.md), awaiting sign-off (gate 1). Standards: standards.md.

## 2026-11-27 · Claims declared in chat; V1 covers at least the Al Amana chatbot scope
- Decided by: studio lead.
- Claims are classified by event (vehicle, health, travel, death) and place (Morocco or abroad), not by contract.
- Declaration happens in a chat (Lemonade style). Editing an answer and restarting must always be available; the chat must feel reliable and reassuring.
- V1 covers at least what the Al Amana WhatsApp chatbot covers: new request and follow-up, for oneself or a dependant, events illness, accident or injury, hospitalisation, death, duplicate check, summary with reference.
- Account activation is parked for now.
- The studio designs the complete app (all events, Morocco and abroad); AFA picks its MVP from it afterwards.
