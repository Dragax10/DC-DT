# Status — Africa First Assist — Assistance website & travel insurance flow
Last updated: 2026-11-17 (ops)

PHASE: Strategy (project kickoff; no work products yet)
NEXT GATE: Gate 1 — Problem framing — not started (brief.md is an empty template)

## Path
Strategy → [GATE 1 problem framing] → Research → Flows → UI → [GATE 2 chosen direction, after UI directions] → Critic → [GATE 3 final handoff] → Handoff

## Open tasks (near term)
| # | Owner | Task | Input → Output | Done when |
|---|-------|------|----------------|-----------|
| 1 | human | Unblock access to the client site: allow www.africafirstassist.com in the session network settings, or save pages/screenshots into studio/research/ | — → network access or studio/research/site-capture/ | ops/research can read the home page, the travel insurance page and the contact page |
| 2 | human | Hold the kickoff with the client (studio lead). Bring the open-questions list below | open questions (this file) → studio/meetings/2026-11-xx-kickoff.md (scribe) | each open question is answered, or has an owner and a due date |
| 3 | scribe | Write up the kickoff notes and log the decisions | kickoff conversation → studio/meetings/<date>-kickoff.md, new rows in decisions.md | notes cover attendees, answers, decisions and actions; every decision has a source |
| 4 | research | Desk review of the current site plus competitor/benchmark scan of travel insurance purchase flows (desk only, labelled as such) | site access, 2026-11-17-current-site-notes.md → studio/research/2026-11-xx-desk-review.md | covers current offer, buy path, languages and markets with links/screenshots for every claim; 3–5 benchmark flows; facts kept separate from assumptions |
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
- Client site unreachable from this session (egress proxy 403). No facts about the current offer yet.
- No kickoff held; brief.md is empty. Research cannot be planned in detail until Gate 1.
- No deadline, budget or client contacts recorded.

## Open questions for the client (for the kickoff)
1. Is travel insurance to be sold online end to end (quote + payment + policy issued instantly), or is it quote / lead capture followed by an agent?
2. Who is the insurer / risk carrier, and what regulatory constraints apply per country (licensing, mandatory disclosures, terms acceptance, KYC)?
3. Which payment methods are needed (card, mobile money, bank transfer), and is there an existing payment provider?
4. Which countries and markets are targeted, and which currencies?
5. Languages: FR / EN / AR? Is Arabic (RTL) required at launch?
6. Which products: single trip, annual multi-trip, Schengen visa insurance, students, families, groups/corporate?
7. Is a visa-compliant certificate needed (e.g. for Schengen applications), and in what format?
8. Who are the users: individual travellers, travel agencies, corporates, B2B2C partners?
9. What does "assistance website" cover beyond travel: other assistance products, 24/7 emergency line, claims online?
10. Existing analytics: traffic, mobile share, conversion, top drop-off points? Any customer feedback or support logs we can use?
11. Are there existing brand guidelines or a design system? Which CMS or tech stack will build this, and who builds it?
12. Deadline, budget, decision makers and sign-off contacts for the three gates.
13. Can we recruit real customers or travellers for research?
