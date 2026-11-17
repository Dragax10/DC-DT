# Status — Africa First Assist — Assistance website & travel insurance flow
Last updated: 2026-11-17 (research — desk review of current site done)

PHASE: Strategy (project kickoff; desk review of current site done)
NEXT GATE: Gate 1 — Problem framing — not started (brief.md is an empty template)

## Path
Strategy → [GATE 1 problem framing] → Research → Flows → UI → [GATE 2 chosen direction, after UI directions] → Critic → [GATE 3 final handoff] → Handoff

## Open tasks (near term)
| # | Owner | Task | Input → Output | Done when |
|---|-------|------|----------------|-----------|
| 1 | human | ~~Unblock access to the client site~~ **DONE 2026-11-17** — www.africafirstassist.com readable with curl. Follow-up still open: voyage.africafirstassist.com (online subscription site) is still refused by the proxy (403); allow it or get screenshots/test account from the client | — → network access | DONE for www; voyage. subdomain still blocked |
| 2 | human | Hold the kickoff with the client (studio lead). Bring the open-questions list below | open questions (this file) → studio/meetings/2026-11-xx-kickoff.md (scribe) | each open question is answered, or has an owner and a due date |
| 3 | scribe | Write up the kickoff notes and log the decisions | kickoff conversation → studio/meetings/<date>-kickoff.md, new rows in decisions.md | notes cover attendees, answers, decisions and actions; every decision has a source |
| 4a | research | **DONE 2026-11-17** — Desk review of the current site | site access → studio/research/2026-11-17-desk-review-current-site.md | done: offer, prices, buy paths, channels, languages, markets, legal, nav, UX/a11y flags, sourced. Gap: online subscription flow not seen (subdomain blocked) |
| 4b | research | Competitor/benchmark scan of 3–5 travel insurance purchase flows (desk only, labelled as such); plus walkthrough of voyage.africafirstassist.com once reachable | desk review → studio/research/2026-11-xx-benchmark.md | 3–5 benchmark flows with links; current online flow mapped step by step; facts kept separate from assumptions |
| 5 | strategy | Draft the brief: problem statement, users, goals, metrics, scope, assumptions and open questions | kickoff notes, desk review → studio/brief.md | every section filled in; every fact sourced; assumptions listed separately; in/out of scope explicit (e.g. is it an online purchase end to end or lead generation?) |
| 6 | human | GATE 1 sign-off on problem framing | studio/brief.md | BLOCKED — needs human sign-off. Approve the problem statement, target users and markets, scope (purchase vs lead gen, which products), success metrics, constraints. Logged in decisions.md |

## Later phases (high level, all after Gate 1)
- research: user research plan, then interviews/survey with travellers and existing customers, then synthesis → studio/research/; personas.md built from evidence only
- strategy + ui-designer: information architecture and the travel insurance flow (quote → options → traveller details → payment → policy/certificate → claims/assistance) → studio/design/flows/
- ui-designer: 2–3 UI directions on key screens (home, quote, checkout, policy, emergency/assistance) → studio/design/
- human: GATE 2 sign-off on the chosen direction (BLOCKED — needs human sign-off)
- critic: usability, accessibility (WCAG 2.1 AA, RTL if Arabic), consistency against the brief → studio/reviews/
- ui-designer: fix the issues the critic raised, then write the handoff spec → studio/design/handoff/
- human: GATE 3 final handoff sign-off (BLOCKED — needs human sign-off)

## Blockers
- Online subscription site voyage.africafirstassist.com unreachable from this session (proxy 403). Current online purchase steps and payment methods unknown. (www. site is now readable; desk review done.)
- No kickoff held; brief.md is empty. Research cannot be planned in detail until Gate 1.
- No deadline, budget or client contacts recorded.

## Open questions for the client (for the kickoff)
Refreshed 2026-11-17 after the desk review (studio/research/2026-11-17-desk-review-current-site.md, Part D). "Site shows" = what the current site says; it does not answer what the NEW site should do.

1. PARTLY. Online end to end, or lead capture + agent? Site shows both today: online subscription site (claims instant certificate, "Paiement sécurisé") plus agencies/brokers and phone. Which model for the new site?
2. PARTLY. Insurer / regulation. Site shows AFA SA as an insurance company under law 17-99, SanlamAllianz subsidiary, data law 09-08, insurance mediator. Still need: licence/ACAPS reference, any separate risk carrier, mandatory disclosures, KYC.
3. OPEN. Payment methods (card, mobile money, transfer) and payment provider. Site only says "Paiement sécurisé".
4. PARTLY. Markets and currencies. Current retail offer is for Morocco residents, priced in MAD. Group is in 20 African countries (not listed). Which markets for the new site?
5. PARTLY. Languages. Current site is French only (Arabic only in a financial footer block, no English). Which languages at launch; is Arabic RTL needed?
6. PARTLY. Products. Current travel range: Isaaf Visa Europe (from 450 dhs), Monde (700), Monde Premium (990), Monde Santé (1390), Étudiants Expatriés (490). Still need: single trip vs annual, durations, what the from-price covers, which products are in scope.
7. PARTLY. Visa certificate. Site claims an immediate, consulate-compliant certificate, printable PDF, several languages. Still need: exact format, languages, how consulates verify it.
8. PARTLY. Users. Site serves individuals, companies/administrations, and sells via AFA offices, insurance agencies and brokers. Who is the new site for?
9. PARTLY. Assistance scope. Site covers travel, medical, vehicle, home, death assistance; 24/7 line; claim and complaint forms. Scope of the new site? Online claims tracking wanted?
10. OPEN. Analytics, conversion, drop-off, support/claims logs.
11. PARTLY. Brand and stack. Current site is WordPress + Elementor (Roboto, colour tokens known); subscription site is a separate app. Brand guidelines? Future stack and who builds?
12. OPEN. Deadline, budget, decision makers, gate sign-off contacts.
13. OPEN. Can we recruit real customers/travellers for research?

New questions from the desk review:
14. Can we get access to voyage.africafirstassist.com (allowlist or test account/screenshots)? Which products can be bought online today?
15. What does the "À partir de" price cover (days, persons, zone)? How is price calculated?
16. Channel split: online vs agencies vs brokers vs phone. Do agencies use the same subscription tool?
17. Which is the real 24/7 emergency number and its hours? The contact page contradicts itself.
18. Correct medical limit for world products: 50 000 € (category page) vs 350 000 dhs (Isaaf Monde page)?
19. Are "zéro risque de refus" and "Acceptée par les centres de traitements des dossiers visa" approved by compliance?
20. Does the new site replace www, the subscription subdomain, or both?
