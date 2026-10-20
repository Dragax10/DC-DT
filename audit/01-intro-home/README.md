# Audit 01 — Intro & Home (current IRIS front office)

Source: screen recording `IRIS-intro-2.mov` (59 s, 20 Oct 2026). Frames below are taken from it.

| # | Frame | Time | What it shows |
|---|-------|------|---------------|
| 01 | `01_Welcome_tour.png` | 0:00 | Welcome tour, step 1 of 23 |
| 02 | `02_Home_EN.png` | 0:02 | Home in English: search bar, "Start a new subscription", KPI cards |
| 03 | `03_Advanced_search.png` | 0:06 | Advanced search panel (client type, ID number, first / last name, RIB) |
| 04 | `04_Home_hover_card.png` | 0:11 | Hover state on a product card |
| 05 | `05_Sidebar_Proposals.png` | 0:18 | Icon-only sidebar, "Proposals" tooltip |
| 06 | `06_Language_menu.png` | 0:24 | Language menu (French / English) |
| 07 | `07_Language_confirm.png` | 0:26 | "Are you sure you want to change the language?" dialog |
| 08 | `08_Home_FR.png` | 0:29 | Home in French |
| 09 | `09_Product_catalogue.png` | 0:35 | Product catalogue drawer |
| 10 | `10_Catalogue_Voyage.png` | 0:38 | Catalogue filtered by category |
| 11 | `11_Notifications.png` | 0:43 | Notifications panel |
| 12 | `12_Notifications_empty.png` | 0:48 | Notifications empty state ("Lu" tab) |

## Strengths
- Products are the entry point: four large cards (Voyage, Auto, Santé, Convention) right on the home screen.
- The KPI cards work as a to-do list: proposals to complete, expected signed contracts, policies approaching expiry.
- The product catalogue has search, category chips with counts, and "à partir de … MAD / an" pricing.
- Notifications have All / Unread / Read tabs, a status icon, the contract ID and a timestamp.
- FR / EN, dark mode and an onboarding tour already exist.

## Issues (Nielsen heuristic · severity 1–4)
1. **Search starts with a type and an ID number** (client / contract / vehicle, then ID). Name and RIB sit in an advanced panel, and there is no phone field, while an agent on a call usually knows the name or the phone. *H7 flexibility, H6 recognition · 3*
2. **Advanced search panel is translucent**: the hero text shows through and hurts legibility. *H8 · 2*
3. **Icon-only sidebar** (7 icons): labels only appear on hover, and several icons are ambiguous (briefcase, tray, wallet). *H6 · 3*
4. **The hero takes about half the screen**, and the photo's blurred edge bleeds over the Convention card, lowering contrast. *H8 · 2*
5. **KPI colors don't match their meaning**: "00 policies approaching expiry" is red even when nothing needs attention. *H2 · 2*
6. **Language switch asks for confirmation**, and the button hierarchy is reversed: "Cancel" is the primary blue button and "Confirm" is yellow. *H3, H4 · 2*
7. **The 23-step welcome tour comes back** after the language switch (0:54), and 23 steps is long. *H3 · 2*
8. **Catalogue counts don't add up**: "Tous 36", but Voyage 14 + Auto 19 + Santé 3 + Conventions 21 = 57. *H1, H4 · 2*
9. **No "Souscrire" action in the catalogue**: cards only offer "Fiche produit" and "Conditions générales", so the agent can't start a subscription from the product they found. *H7 · 3*
10. **Catalogue noise**: every card repeats two strong buttons, and "Isaaf Loueurs — 0 MAD / an" looks like a data error. *H8 · 1*
11. **Notifications are verbose**: the contract number appears twice per item, and capitalization is inconsistent ("approuvée" vs "Rejetée"). *H4, H8 · 1*
12. **"Agreement" is a misleading English label** for "Convention". *H2 · 1*

## Opportunities
- **One omnibox**: type a name, phone, CIN, contract number or plate, and get results grouped by type (IRIS + HERMES).
- **Home as an agent cockpit**: "Continue where you left off" (drafts), today's tasks, recent clients.
- **Labeled, collapsible sidebar** with clear sections.
- **Catalogue → "Souscrire"**, prefilled with the product; compare two products side by side.
- **Instant language switch** that remembers the choice; a 5-step tour plus contextual tips.
- **Status colors by meaning**: neutral when the count is 0.

## Open questions
- Is Arabic planned? The design tokens include Almarai, but the language menu only offers French and English.
- What are the briefcase, tray and wallet icons in the sidebar? Only Home, Proposals, Scheduler and Production Status were labeled in the recording.
