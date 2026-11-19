# Africa First Assist · Mobile app · UX project note

Folder: **AFA App** · Status: pitch package, concept stage · Updated: 19 Nov 2026
Scope: UX designer perimeter only. Business, IT, legal and compliance, operations, partners and medical topics are AFA's decisions; we raise them as questions.

---

## 1. Links
- UX flows and journey maps (FigJam): https://www.figma.com/board/MaaGiM0gtCrGJ7VgiB053Z
- Wireframes + visual concept (Figma): https://www.figma.com/design/arZuWBwjaycRMOBn4QkRNa
  - Pages: Cover & guide · Wireframes (28 screens) · Wireframe kit · Visual concept (v1 + v2 iOS 26 Liquid Glass)
- Pitch deck (private): https://claude.ai/artifact/H5bXRosvdapYZBNTW96K2V
- Studio files (repo): `africa-first-assist/studio/` (research, design/ux-flows, design/wireframes, decisions.md)

## 2. The brief in one line
AFA wants a mobile app for its clients and has no feature list yet. We propose an experience built around the moment people need help.

## 3. What we learned (desk research, to validate)
- Help today means a phone call: people explain where they are, then wait without knowing who is coming.
- No Moroccan assistance company offers a consumer app. Insurer apps (My Wafa, MyRMA, MyAXA Maroc, Sanlam Maroc) are self-service for policies.
- We found no Moroccan app that combines one-tap SOS that opens a case, case status across lines, and travel cover with an instant visa certificate. No Darija support in any of 41 apps reviewed.
- Most people AFA helps are partners' clients who may not know the AFA name: the experience must also work by phone and SMS, without the app.
- Current website: only "from" prices, purchase on a separate subdomain, emergency and office numbers easy to confuse, free-text claim form with no upload or tracking.

## 4. Experience promise
**Help in one tap. Cover in your pocket. Visa cover in minutes.**

## 5. Experience principles (every screen follows them)
1. The call comes first: nothing delays reaching a person in an emergency.
2. A person is one tap away, on every screen, including the AI assistant.
3. Show the status, so nobody has to call to ask where help is.
4. Plain words, French and Arabic; right-to-left done properly; no insurance jargon.
5. Works on weak connections; cover card and emergency numbers work offline.
6. Accessible to everyone (WCAG 2.2 AA): large targets, screen readers, text size.
7. Respect hard moments: no marketing or ratings after a death or a refusal.

## 6. Proto-personas (hypotheses to validate)
- **P1 Visa applicant**: needs a certificate the consulate accepts, today, without spelling mistakes.
- **P2 Family abroad**: needs help in a foreign city, without roaming data; MRE variant to confirm with AFA.
- **P3 Partner driver**: broken down at night, may not know AFA; probably no app → phone + SMS status link.
- **P4 Health-plan member**: medical help at night for a child or parent; core needs are V2.
- **P5 Relative handling a death abroad**: a person answers first; one named contact; no marketing or ratings.

## 7. UX flows (FigJam, user's point of view)
- U00 App map: what people can reach with and without an account
- U01 Getting started and adding my cover
- U02 I need help now: SOS (call first, "for someone else", "a relative has died")
- U03 My car broke down: roadside help in 4 short screens + status timeline
- U04 I need travel cover for my visa (full prices, passport scan, "check before you pay", instant certificate)
- U05 Getting my money back: travel claim (health-data consent before upload, resumable uploads)
- U06 Am I covered? Wallet and offline travel companion
- U07 Asking a question: AI assistant with a person always reachable
- U08 V2 concept: tell us what happened by voice or photo (Darija pilot)

## 8. First version: what people can do
- **Help in one tap**: SOS that calls first, roadside request, follow the request step by step, travel claim with photos.
- **Cover in your pocket**: sign in with a phone code, cover card and documents offline, country pages offline, ask a question.
- **Visa cover in minutes**: compare covers at full price, passport scan, pay, instant certificate.
- **For everyone**: French + Arabic RTL, WCAG 2.2 AA, weak connections, clear privacy choices.
- Later (V2): live map of help, video consultation, home help, funeral requests, family members, chat, voice/photo declaration.

## 9. AI in the experience (UX rules)
- Says clearly it is AI and what it can and cannot do.
- Every answer shows where it comes from ("From your contract · section").
- Never: medical advice, claim decisions, handling an emergency or a death.
- "Talk to a person" on every screen; abroad or after hours → the 24/7 line, never a next-day callback only.
- Which AI tools, data location and permissions: AFA IT, legal and compliance decide.

## 10. Wireframes (Figma)
28 greyscale screens, 390 × 844, built from a local kit (variables, text styles, 23 icons, 13 components), each with numbered UX notes. Rows: U01 (A1–A4), U02 SOS (B1–B5), U03 Roadside (C1–C5), U04 Travel (D1–D5), U05/U06 Wallet + claim (E1–E4), U07 AI (F1–F3), Arabic RTL Home (G1) + comparison (G0).

## 11. Visual concept (one possible direction, for discussion)
- AFA blue is primary (#006FB1, navy #1F4E80); red (#981222) only on SOS.
- v2 iOS 26 Liquid Glass: Home (glass cover card in Wallet style, Settings-style list, floating glass tab bar + separate SOS button), Help on the way (giant ETA, Maps-style sheet), Lock screen Live Activity + Dynamic Island.
- Inter stands in for SF Pro. Add the "iOS and iPadOS 26" library to the file to use Apple's official components.

## 12. Arabic and right-to-left conventions
- Whole layout mirrors (icons, chevrons, tab order); SOS stays in the same place.
- Western digits 0–9; Moroccan month names (e.g. غشت); 24-hour time.
- Product names and passport names stay in Latin letters.
- Arabic copy to be reviewed by a native writer.

## 13. UX best practices to keep
- SOS on every screen, even signed out or locked; one confirm; no countdown with a screen reader.
- Every failure has a next step: retry, callback, offline numbers, SMS.
- Status steps with names and times; same status page by SMS link.
- Activate cover with what people have (policy number, partner code, QR).
- Ask permissions at the moment they are needed.
- Checklist before uploads; uploads resume; every document gets a receipt.
- Test on low-end Android, 3G, roaming; 200% text size; VoiceOver and TalkBack.
- Gaps to add: location accuracy shown to the agent, a "test SOS" mode, AI disclosure on every answer.

## 14. Experience measures
Task success · time to reach help · purchase completion · "where is my request?" contacts · ease and trust after each request (never after a death or refusal) · accessibility issues. Business targets are set by AFA.

## 15. Questions for AFA teams
- **Business and product**: who are the clients by group? Which markets and languages first?
- **Partners**: can AFA invite partners' clients to the app? How should brands appear?
- **IT**: what cover and request information can the app show? What exists online today?
- **Legal and compliance**: consents and wording for sales, claims and AI?
- **Operations**: how are requests handled today? Can we spend time with agents?
- **Medical team**: what medical help could the app offer later?

## 16. How we work with AFA
1. Discover (4–6 weeks): interviews with clients, partners' clients and agents → AFA signs the brief.
2. Define: validated journeys and flows, wireframes, 2–3 directions → AFA picks one.
3. Prototype and test: clickable prototype, usability tests in French and Arabic incl. accessibility.
4. Design and hand-off: final screens, design system, specs → AFA approves.

## 17. Benchmark references to collect (visual)
SOS / emergency screens · live tracking of help · insurance cover card / wallet · buying travel insurance · uploading claim documents · AI assistant handing off to a person.
Reference apps: Allianz TravelSmart, Europ Assistance, International SOS, AXA, MAPFRE, Lemonade, Ping An, Apple Wallet, Apple Maps, Uber/Careem tracking, My Wafa, AtlantaSanad.

## 18. Decisions so far (studio lead)
- Scope: mobile app for AFA's clients; pitch package before a formal brief.
- UX perimeter only; other topics raised as questions to AFA teams.
- Concept wireframes and two visual teaser screens allowed for the pitch; no high fidelity until AFA signs the brief and picks a direction.
- AFA blue is the primary colour; red only on SOS.

## 19. Next steps
- Studio lead reviews the FigJam board, wireframes and visual concept.
- Visual UX benchmark (Mobbin needs a paid plan; or Resurf / uploaded screenshots).
- Pitch meeting with AFA, then discovery and research with real clients.
