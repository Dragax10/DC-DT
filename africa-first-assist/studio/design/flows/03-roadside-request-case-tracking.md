# 03 — Roadside assistance request and case tracking (MVP)

Status: DRAFT pitch input. Assumptions (A). Open questions (Q).
Roadmap features: **R1** roadside request with location, **R6** vehicle profile (MVP Should; without it the vehicle comes from the policy or is typed), **X4** case tracking (status steps, not a live map), **X7** push + SMS [RM 2.4]. Live map **R2** is V2. Model C: this flow is a self-contained module on the engine API (API1, MVP Must); partner embed pilot = V2.
Scope assumption: Isaaf Auto clients and one pilot partner [RM 4.3], subject to agreement.

## Goal
A driver with a covered vehicle gets to **request sent in under a minute (target, to test)** [RM 4.3 item 4], in **4 short screens, prefilled** (safety, problem, location, summary), and then sees each step of the case without calling. The pitch uses this wording, not "3 taps".

## Entry points
- Help tab: "Roadside help".
- Home quick action (shown when an auto cover is linked).
- Wallet: auto cover card, "Request help".
- SOS (flow 02) when the agent tags the case "roadside": the case lands here for tracking.

## Preconditions
- Logged in, auto cover linked (flow 01). Without it: SOS or call 24/7 is always offered; the request can still be sent for an agent to check.
- Vehicle known: from the policy, or from My vehicles (R6), or typed.
- Case system exposes case creation and status events by API (Q [RM 7.2 Q4]).

## Flow

```mermaid
flowchart TD
    B0(["Help tab: Roadside help"]) --> B1["RSA-01 Safety check: anyone hurt or in a dangerous place?"]
    B1 -->|"Yes"| SOS[["Flow 02 SOS, call first"]]
    B1 -->|"No"| B3["RSA-02 Problem: breakdown, accident no injury, tyre, battery, keys, fuel, other"]
    B3 --> B4["RSA-03 Location: pin from GPS, confirm or move, add landmark"]
    B4 --> D1{"GPS available within 10 s?"}
    D1 -->|"Yes"| B7
    D1 -->|"No E-GPS"| B6["Type address, road and km marker, or city. Or let the agent ask"]
    B6 --> B7["RSA-04 Summary: vehicle prefilled, change link. Optional: drivable, passengers, photo"]
    B7 --> D0{"Vehicle on an active cover?"}
    D0 -->|"Yes"| B8["Send"]
    D0 -->|"Not found E-POL"| E1["Not found on your covers. Options: add a policy, send anyway for an agent to check, call 24/7"]
    E1 -->|"Send anyway"| B8
    E1 -->|"Add a policy"| ONB[["Flow 01 Add a cover, then back to summary"]]
    ONB --> B7
    E1 -->|"Call 24/7"| CALL(["Call 24/7 line"])
    B8 --> L1["Sending: E-LOAD, timeout 15 s"]
    L1 --> D2{"Sent?"}
    D2 -->|"No network or timeout E-NET"| E2["Saved. Call 24/7 now with the summary on screen, or send by SMS"]
    E2 --> CALL
    D2 -->|"Yes"| D3{"Rule pre-check: covered?"}
    D3 -->|"Looks covered"| B9["Case created. Reference + SMS"]
    D3 -->|"Maybe not: territory, limit, exclusion E-COV"| E3["Sent to an agent to decide. Agent calls you"]
    E3 --> B9
    B9 --> T1["CASE-01 Received"]
    T1 --> T2["Cover confirmed by agent"]
    T2 --> T3["Provider assigned: name, plate if known, ETA estimate"]
    T3 --> T4["Provider on the way"]
    T4 --> D4{"ETA passed?"}
    D4 -->|"Yes"| E4["Push: delay. Call agent button. Agent alerted"]
    E4 --> T4
    D4 -->|"No"| T5["Provider on site"]
    T5 --> T6["Repaired on site or towed to garage"]
    T6 --> T7["Closed. Optional: How did it go? Skippable, never pushed twice"]
    T2 -->|"Not covered after review"| E5["Agent explains options: paid help, local services. Case closed with reason. No rating"]
    T1 -->|"User cancels"| E6["Cancel with reason. Agent informed. Case closed. No rating"]
    E5 --> C1(["Case timeline kept in My cases"])
    E6 --> C1
    T7 --> C1
```

## Step table
| # | Screen | User action | System response | AI / human-in-the-loop | Notes (accessibility, FR/AR RTL) |
|---|---|---|---|---|---|
| 1 | RSA-01 Safety | Answers yes / no | Yes → SOS (flow 02, call first). No → continue | None | Two big buttons. Plain text: "Is anyone hurt, or are you in a dangerous place?" |
| 2 | RSA-02 Problem | Picks one tile | Sets case type | None (AI2 guided declaration is V2, flow 09) | Icons always with text labels. Tiles reflow at 200% text |
| 3 | RSA-03 Location | Confirms pin, moves it, adds landmark | GPS fix, timeout 10 s (A); reverse-geocodes address. Loading text "Finding your location" | None | Map is not the only way: address field, "use my location" button, "let the agent ask". Map gestures have button alternatives (2.5.7) |
| 4 | RSA-04 Summary | Checks prefilled vehicle (change if needed); optional details; taps Send | Checks vehicle against active covers | None | Plate shown as on the physical plate, LTR block (`rtl-conventions.md` R4). Optional fields clearly marked optional. Send button says "Send request" |
| 5 | Vehicle not found | Adds a policy, sends anyway, or calls | Never a dead end: "send anyway" creates a case flagged for agent check | Agent checks cover | — |
| 6 | Sending | Waits | E-LOAD: "Sending your request", announced (4.1.3). Timeout → saved + call or SMS | None | — |
| 7 | Pre-check | — | Rule pre-check on cover (territory, limits). Creates case | **Rules only, no AI.** If "maybe not covered", a human agent decides. The app never refuses | — |
| 8 | Confirmation | — | Reference number. SMS + push | Agent sees the case in console; AI9 copilot may suggest provider and clause; agent confirms (flow 08) | Reference LTR |
| 9 | CASE-01 Timeline | Reads status; may call agent | Status events from the case system. Push on each step. Skeleton while loading, "last updated" time if stale | Agent assigns provider (human) | Timeline is a list, not only a graphic. Each change announced. Local time stamps |
| 10 | Delay | Calls agent or waits | Push when ETA passed; agent alerted | Human follow-up | "Call agent" always visible on CASE-01 |
| 11 | Close | Optionally answers one question | CSAT stored by case. Not shown on refused or cancelled cases | None | Labelled buttons, not stars only. Skippable. Shared rule 8 in 00 |

## Edge states covered
E-POL (vehicle not found: add, send anyway, call), E-GPS (manual address or agent asks), E-LOAD (location, sending, timeline), E-NET (saved, call or SMS), E-COV (pre-check flags, human decides; refused case ends in the timeline, no rating), delay past ETA, user cancel. E-HRS: dispatch assumed 24/7 (Q); status updates may be slower at night (A).

## Success criteria
- Request sent in under a minute (target, to test): time from opening the flow to "request sent", measured in usability sessions, then in pilot data.
- Time to assistance: request → provider dispatched, and → on site [RM 6]. Target after baseline.
- Share of roadside cases opened in app (digital case share) for the pilot partner.
- "Where is my provider?" calls per case (call deflection) [RM 5.5].
- CSAT after case (optional answers only).

## Open questions
- Q1. Does the case system expose status events, and which steps exist? The 7 steps above are assumed.
- Q2. Can the app show provider name and plate? Privacy and provider agreement.
- Q3. Is there an ETA from dispatch today? If not, show steps without ETA.
- Q4. Which roadside services and territory per contract (Morocco only, or Europe for MRE drivers)?
- Q5. Pilot partner: AFA brand, partner brand, or co-brand on these screens? [RM 5.2]

## Changelog 2026-11-18 (critic fixes)
- Finding 10: steps cut from 6 to 4 screens (vehicle and details merged into the summary, prefilled). Goal reworded to match RM 4.3: "request sent in under a minute (target, to test)", not "3 taps".
- Finding 12: dead end "vehicle not on a cover" now has exits (add policy, send anyway, call 24/7). E-LOAD states for location, sending and timeline. Refused and cancelled cases end in the timeline.
- Finding 9: rating made optional and skippable; not shown on refused or cancelled cases.
- Finding 14: plate display follows `rtl-conventions.md` R4 (open question closed provisionally).
- Model C: marked as a module for the V2 partner embed pilot.
