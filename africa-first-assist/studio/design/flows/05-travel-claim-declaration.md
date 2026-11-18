# 05 — Travel claim declaration with documents, and tracking (MVP)

Status: DRAFT pitch input. Assumptions (A). Open questions (Q).
Roadmap features: **T7** travel claims, **X4** case declare and track, **X7** notifications, **X11** resumable uploads, **X13** consent [RM 4.3 item 5]. Model C: self-contained module on the engine API (API1); partner embed pilot = V2. Today: free-text web form, no upload, no tracking [DR A7, O-U9].

## Goal
A traveller sends a complete claim with all documents once, and sees where it stands until payment, without calling.

## Entry points
- Help tab: "Declare a claim".
- Wallet: travel cover, "Make a claim".
- Case screen after an SOS or medical case abroad: "Claim my expenses" (A).
- Push reminder when a handler asks for a missing document.

## Preconditions
- Logged in. Travel cover linked (flow 01 or 04).
- Claim types and document lists per product from AFA (Q). Example: baggage cover in Monde Premium [DR A3].
- Case system accepts claims and documents by API; storage compliant with law 09-08 (to confirm by legal counsel) (Q [RM X4]).

## Flow

```mermaid
flowchart TD
    F0(["Help: Declare a claim"]) --> F1["CLM-01 Pick cover"]
    F1 --> F2["CLM-02 Claim type: medical costs, baggage, cancellation, documents lost, death of a traveller, other"]
    F2 --> D1{"Emergency still going on?"}
    D1 -->|"Yes"| SOS[["Flow 02 SOS, call first"]]
    D1 -->|"Death of a traveller"| BER(["Call 24/7: funeral team, human only. No rating, surveys or marketing"])
    D1 -->|"No"| D9{"Medical claim, or medical documents in the checklist?"}
    D9 -->|"Yes"| C1["CLM-02a Health data consent, explicit and separate, before any upload"]
    D9 -->|"No"| D2
    C1 -->|"Accepts"| D2{"Type in this cover and dates OK?"}
    C1 -->|"Declines"| C2["No medical files in the app. Options: talk to a person, or continue without medical documents, handler will contact you"]
    C2 -->|"Continue"| D2
    C2 -->|"Talk to a person"| HUM(["Call or callback, consent explained by a person"])
    D2 -->|"Not in cover or outside dates E-COV"| E1["Explain with the clause. Submit anyway for review, or ask a person"]
    D2 -->|"Yes"| F3["CLM-03 What happened: date, place, short text"]
    E1 -->|"Submit anyway"| F3
    F3 --> F4["CLM-04 Document checklist for this type"]
    F4 --> F5["CLM-05 Add documents: camera, photos, files. Medical items only if consent given"]
    F5 --> D3{"Upload OK?"}
    D3 -->|"Too big or wrong type"| E2["Compress or pick another file"]
    E2 --> F5
    D3 -->|"No network E-NET"| E3["Queued on device. Resumes when online. Draft kept"]
    E3 --> F5
    D3 -->|"Yes"| D4{"All required documents?"}
    D4 -->|"No"| E4["Send now and add later, or keep draft"]
    E4 --> F6
    D4 -->|"Yes"| F6["CLM-06 Payout details: account holder, bank account"]
    F6 --> F7["CLM-07 Review. Declaration of truth"]
    F7 --> L1["Submitting: E-LOAD, timeout then draft kept and retry"]
    L1 --> F8["Submitted. Reference + SMS"]
    F8 --> G1["CASE-02 Submitted"]
    G1 --> G2["Documents check by handler"]
    G2 -->|"Missing document"| G3["Push + SMS: what is missing and why"]
    G3 --> F5
    G2 --> G4["Under assessment"]
    G4 --> G5{"Decision by a handler"}
    G5 -->|"Accepted or partial"| G6["Amount and breakdown"]
    G5 -->|"Refused"| G7["Reason with clause. How to contest"]
    G6 --> G8["Payment sent"]
    G8 --> G9(["Closed. Optional one-line feedback, skippable"])
    G7 --> G10(["Closed. Contest route kept. No rating"])
    F8 -.->|"After hours E-HRS"| H1["Received. Review starts next working day. Urgent? Call 24/7"]
```

## Step table
| # | Screen | User action | System response | AI involvement / human-in-the-loop | Notes (accessibility, FR/AR RTL) |
|---|---|---|---|---|---|
| 1 | CLM-01 Cover | Picks the cover | Loads claim types for this product | None | Only covers with claim rights shown; others explained |
| 2 | CLM-02 Type | Picks type; answers "still an emergency?" | Emergency → SOS (call first). Death of a traveller → call 24/7, funeral team, human only | None | Plain labels, one question per screen |
| 2a | CLM-02a Health data consent | Accepts or declines | Shown when the type is medical or the checklist has medical documents (e.g. cancellation for illness). Recorded with time and version **before any upload** or queueing of medical files. Declining: no medical files in the app; person or continue without them | None | Explicit and separate from other consents (law 09-08, to confirm by legal counsel) [RM 3.1]. Plain words, "learn more" link. Declining has no penalty on the claim |
| 3 | Eligibility pre-check | Reads result | Rules: type in cover, event within dates, declaration delay | **Rules only.** If it fails, user may still submit; a handler decides. The app never refuses a claim | Clause quoted in plain words + link to full text |
| 4 | CLM-03 Event | Enters date, place, text | Saves draft at each step | None in MVP. AI2 (structured intake from voice/photo) is V2, flow 09 | Text field accepts AR and FR. No character count trap |
| 5 | CLM-04 Checklist | Reads list | Required vs optional documents per type (from AFA) | None | Checklist is a real list with states "added / missing" |
| 6 | CLM-05 Upload | Adds files | Compresses images, resumable upload, per-file status. Medical document slots disabled with a reason if consent was declined | None | Each upload progress announced. Camera has file alternative. Files named in user's language |
| 7 | CLM-06 Payout | Enters bank details | Format check (RIB / IBAN) | None | Account number LTR in AR. Masked after entry. Payout methods **Q** |
| 8 | CLM-07 Review | Reads summary, accepts declaration of truth | Records acceptance with version. Shows health consent status (given at CLM-02a), with a link to withdraw it in the consent centre | None | Consent is not asked here any more: it was asked before upload |
| 9 | Submit | — | E-LOAD "Sending your claim", then reference, SMS, push. Timeout: draft kept, retry | Handler (human) owns the claim | Confirmation announced |
| 11 | Close | Optionally answers one question | Feedback only on paid claims; none on refused or bereavement cases (00 shared rule 8) | None | Skippable, never a pop-up |
| 10 | CASE-02 Timeline | Reads status; adds missing docs; calls | Status events from case system | **Handler decides** acceptance, amount, refusal. AI9 copilot may summarise the file for the handler (flow 08) once claims join the copilot; MVP pilot proposed on roadside non-injury only. Fraud scoring AI7 is V3; never an automatic refusal | Each step has a date. Refusal shows reason and contest route |

## Edge states covered
Health consent declined (person or continue without medical files), death of a traveller (human route), E-LOAD (submit), E-COV (not in cover, outside dates: submit for review), E-NET (queued uploads, drafts), upload errors, missing documents loop, E-HRS (review time set), ongoing emergency (to SOS). E-POL: cover must be linked first (flow 01).

## Success criteria
- Digital claim share: claims with documents in app ÷ all claims [RM 6].
- Share of claims complete at first submission (no missing-document request).
- Time from submission to decision, and to payment. Target after baseline.
- "Where is my claim?" calls per claim [RM 5.5].
- CSAT after claim closed (optional answers, paid claims only).
- Zero medical files received before health consent is recorded (audit).

## Open questions
- Q1. Who handles travel claims: AFA, the risk carrier, or a partner? [RM X4]
- Q2. Document list per claim type and product; declaration deadlines.
- Q3. Payout methods: bank transfer only? Abroad accounts?
- Q4. Can a handler message the user in-app in MVP, or only via status + SMS?
- Q5. Retention period for claim documents and health data.

## Changelog 2026-11-18 (critic fixes)
- Finding 8: health-data consent moved to CLM-02a, right after a medical type is chosen and before any upload or queueing of medical files. Decline path added. Audit metric added.
- Finding 9: "death of a traveller" routes to a person (funeral team); no rating on refused or bereavement cases; feedback optional elsewhere.
- Finding 12: E-LOAD on submit; after-hours note points to the 24/7 line for urgent needs.
- Finding 7: law 09-08 statements marked "to confirm by legal counsel".
