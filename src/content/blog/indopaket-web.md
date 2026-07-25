---
title: "Indopaket — Web"
description: "Revamped the Indopaket web platform used by sellers and internal operations, redesigning navigation and information hierarchy for a more intuitive experience."
pubDate: "Apr 2026"
heroImage: "/src/assets/euro.jpg"
icon: "1"
tags: ["Design Engineer", "UX Engineer", "React", "Logistics"]
featured: true
highlights:
  [
    "6 documented flows: Homepage, Store Locator, Shipping, Tracking, Registration, OTP",
    "Full before/after evidence with heuristic analysis",
    "Restructured navigation & information hierarchy",
  ]
pageSkills:
  - category: "UX Analysis"
    icon: "1"
    skills:
      [
        "Heuristic Evaluation",
        "Cognitive Load Analysis",
        "Information Architecture",
        "Navigation Design",
      ]

  - category: "Frontend Implementation"
    icon: "2"
    skills:
      [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Responsive Design",
      ]

  - category: "Product & Collaboration"
    icon: "3"
    skills:
      [
        "Stakeholder Collaboration",
        "Cross-functional Product Work",
        "Design-to-Code Translation",
      ]
---

# Indopaket — Web
### Redesigning the Shipping Experience for Sellers and Operations

Indopaket is Indomaret Group's shipping platform, used daily by sellers to manage shipments and track referral/tier status, and by internal teams for operational visibility. As part of the Product Team Lead role, this revamp focused on making a website that had grown feature-by-feature over time feel coherent again — restructuring navigation and information hierarchy rather than just refreshing visuals.

This case study covers the **web platform**. The mobile app is covered separately.

Jump to: [Overview](#overview) · [Redesign Scope](#redesign-scope) · [Store & Shipping Discovery](#store-and-shipping-discovery) · [Account & Authentication](#account-and-authentication) · [Outcome](#outcome)

---

## Overview

Findings below are based on Hotjar heatmap data (1–30 Sept 2023). This write-up groups the before/after evidence by the **user journey** it belongs to, rather than as a flat list of screens.

## Redesign Scope

This revamp covered the full customer-facing web experience — navigation, homepage, tracking, shipping, store locator, and account management. The sections below only include the areas with documented before/after evidence so far; screenshots for the rest are still being organized.

| Area | Status |
|---|---|
| Navigation | Redesigned |
| Homepage | Redesigned — [see below](#store-and-shipping-discovery) |
| Tracking | Redesigned — [see below](#store-and-shipping-discovery) |
| Cek Tarif (Check Rate) | Redesigned |
| Kirim Sekarang (Ship Package) | Redesigned — [see below](#store-and-shipping-discovery) |
| Cari Toko (Store Locator) | Redesigned — [see below](#store-and-shipping-discovery) |
| Riwayat (History) | Redesigned — [see below](#store-and-shipping-discovery) |
| Login / Register | Redesigned — [see below](#account-and-authentication) |
| OTP Verification | Redesigned — [see below](#account-and-authentication) |
| Profile Management | Redesigned |

### Cognitive Load

**Intrinsic** — the underlying shipping/referral domain is inherently multi-step and rule-heavy; that complexity can't be fully removed.

**Extraneous** — this is where the revamp focused: reducing duplicated information, unclear labeling, and fragmented navigation that added effort without adding understanding.

**Germane** — restructuring the information hierarchy so users build a clearer mental model of "where am I, what's next," instead of re-learning the layout each visit.

---

## Store and Shipping Discovery

How sellers find a drop-off store and track a shipment.

### Beranda (Homepage)

*(Nielsen's Heuristic #6 — Recognition Rather Than Recall)* The homepage's promo slider had no visible pagination, and the "Lacak Paket" / "Cek Ongkir" widgets buried their primary actions in plain, unlabeled fields.

| Before | After |
|---|---|
| ![Old Beranda upper section: promo slider with no pagination dots, plain Lacak Paket and Cek Ongkir widgets](../../assets/images/works/indopaket-web/before/beranda-upper.png) | ![New Beranda upper section: slider with visible pagination dots, restyled Lacak Paket and Cek Ongkir widgets with icons and clearer labels](../../assets/images/works/indopaket-web/after/beranda-upper.png) |

**What changed**

- **Slider** — added visible pagination dots and breathing room from the content below, instead of one static banner butting straight into the page
- **Lacak Paket** — added a "Pindai Resi" (scan) shortcut, a dedicated "Lacak Paket" button, and a note on what happens after submitting (captcha verification)
- **Cek Ongkir** — split the combined "Asal/Tujuan" field into two clearly labeled fields with a swap shortcut, and marked Dimensi as explicitly optional

### Cari Toko (Store Locator)

*(Nielsen's Heuristic #1 — Visibility of System Status)* Selecting a pin used to open a popup that covered the map, with no persistent list to browse results against — users lost their place every time they closed it.

**Before**
![Old Cari Toko: selecting a pin opens a popup that covers the map, with no results list visible](../../assets/images/works/indopaket-web/before/cari-toko-selected.png)

**After**
![New Cari Toko: selected store highlighted in a persistent results list alongside the map, with a "Terdekat" (nearest) badge](../../assets/images/works/indopaket-web/after/cari-toko-selected.png)

**What changed**

1. **Results list** — stays visible next to the map at all times, instead of being locked inside a popup you click into one at a time
2. **Selected store card** — a clear detail panel plus a "Terdekat" (nearest) badge, instead of a popup that just blocks the map
3. **No-results feedback** — a plain "0 Toko ditemukan" became an inline, actionable "Lokasi tidak ditemukan. Coba kata kunci lain."

### Kirim Sekarang (Ship Package)

*(Nielsen's Heuristic #1 — Visibility of System Status)* For "Jemput & Antar ke Alamat" deliveries, handing off to the mobile app used to be a bare card — one paragraph and a single button, with no fallback for users who didn't have the app installed yet.

| Before | After |
|---|---|
| ![Old Kirim Sekarang handoff screen: plain card with only a "Buka Aplikasi Indopaket" button](../../assets/images/works/indopaket-web/before/kirim-via-app.png) | ![New Kirim Sekarang handoff screen: illustrated handoff with app store badges and a "Butuh bantuan?" help card](../../assets/images/works/indopaket-web/after/kirim-via-app.png) |

**What changed**

- Added Google Play / App Store / AppGallery badges for users who don't have the app yet, instead of dead-ending on a single "open the app" button
- Added a "Butuh bantuan? Hubungi CS" fallback card for users who get stuck mid-handoff
- Replaced the bare text card with an illustration consistent with the rest of the site's redesigned states

### Riwayat & Tracking

*(Nielsen's Heuristic #9 — Help Users Recognize, Diagnose, and Recover from Errors)* The old "not found" state on Riwayat (History) was a bare "Tidak ditemukan" message with a broken image, giving users no way to self-diagnose why their search came up empty. The old multi-resi tracking input also drew scattered, uncertain heatmap clicks — users weren't sure how single-resi tracking differed from tracking multiple resi at once.

| Before | After |
|---|---|
| ![Old Riwayat page: bare "Tidak ditemukan" state with a broken image and no guidance](../../assets/images/works/indopaket-web/before/riwayat-tidak-ditemukan.png) | ![New Riwayat page: "Riwayat tidak ditemukan" with an illustration, search tips, and a "Lihat Semua Riwayat" action](../../assets/images/works/indopaket-web/after/riwayat-tidak-ditemukan.png) |
| ![Old multi-resi tracking input, unclear how it differs from single tracking](../../assets/images/works/indopaket-web/before/multitracking.png) | ![Restyled tracking input — same textarea pattern, refined visually](../../assets/images/works/indopaket-web/after/multitracking.png) |

**What changed**

- Riwayat's broken-image dead end became an illustration + headline + self-diagnosis checklist — the same pattern now backs the Tracking page's resi-not-found result too, so error states feel consistent instead of one-off
- Tracking input got a visual refresh, though the underlying single vs. multi-resi ambiguity is still an open item for a follow-up iteration, not solved here

---

## Account and Authentication

How a new user registers and verifies their account.

| Daftar (Register) — Before | Daftar (Register) — After |
|---|---|
| ![Old Daftar page with the registration form and "Sudah Terdaftar? Login" panel competing on the same screen](../../assets/images/works/indopaket-web/before/daftar.jpeg) | ![New Daftar page as a standalone, focused registration flow](../../assets/images/works/indopaket-web/after/daftar.jpeg) |

*(Nielsen's Heuristic #8 — Aesthetic and Minimalist Design)* The registration form and the "Sudah Terdaftar? Login" panel used to compete on one screen — heatmap data showed clicks scattered across both, splitting users' attention. Login and Register are now distinct, focused pages instead of one competing screen.

| Kode Verifikasi (OTP) — Before | Kode Verifikasi (OTP) — After |
|---|---|
| ![Old Kode Verifikasi screen: countdown and OTP boxes only, no destination number shown](../../assets/images/works/indopaket-web/before/verifikasi-otp.png) | ![New Kode Verifikasi screen: masked destination number, code validity duration, resend guidance, and a security reminder](../../assets/images/works/indopaket-web/after/verifikasi-otp.png) |

*(Nielsen's Heuristic #6 — Recognition Rather Than Recall)* The old screen only showed a countdown and a bare set of input boxes — no confirmation of which number the code went to, no reassurance about what to do if it didn't arrive. The redesign shows the masked destination number ("nomor HP 0812\*\*\*\*\*\*010"), how long the code is valid, what to do if it hasn't arrived, and a reminder not to share the code with anyone, including Indopaket staff.

---

## Design Decisions

- Clarified the single vs. multi-resi tracking entry points instead of one ambiguous field
- Separated Login and Register into distinct, focused flows instead of one competing screen
- Redesigned empty/error states to guide users toward a next action instead of leaving them stuck
- Standardized recurring UI patterns (status indicators, cards, tables) across sections that had previously diverged

## Implementation

Built with **React** and **Next.js**, styled with **Tailwind CSS**, focused on shipping a redesign that was maintainable by the rest of the team going forward — not just a one-off visual pass.

## Outcome

Clearer navigation, a more consistent information hierarchy, and empty/error states that guide users instead of dead-ending them — for sellers and internal teams using the platform daily. Login and Register no longer compete for attention on one screen, store selection no longer loses a user's place behind a popup, and the app-handoff and OTP flows now leave people with a clear next step instead of a dead end. Some open items — like the single vs. multi-resi tracking ambiguity — were identified but intentionally left for a follow-up iteration rather than rushed into this pass.
