---
title: "Indopaket Affiliator"
description: "Frontend and UX implementation for a low-barrier affiliate program, focused on commission visibility and trust-driven referral experiences."
pubDate: "Sept 2026"
icon: "heroicons:user-group"
tags: ["Frontend Developer", "UX Engineering", "React", "Mobile UI"]
identity: "UX Engineer · Frontend"
role: "UX design exploration · Frontend implementation"
delivery: "React · Production · Web & Mobile"
pageSkills:
  - category: "Affiliate & Growth Domain"
    icon: "1"
    skills: ["Open Affiliate Flow", "Commission-based Incentives", "Referral Mechanics", "Growth-oriented UX"]
  - category: "UX Thinking & Exploration"
    icon: "2"
    skills: ["User Journey Mapping", "Gamification Study", "Incentive Framing", "Dashboard UX"]
  - category: "Frontend & Mobile UI"
    icon: "3"
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Responsive UI"]
  - category: "UX Constraints & Validation"
    icon: "4"
    skills: ["Low-friction Onboarding", "Error States", "Form Validation", "Trust-focused UI"]
---

# Affiliate Program UI for a Shipping Platform

## My Contribution

**I owned:** UX exploration, interaction design for commission visibility and trust flows, dashboard UX, frontend implementation across web and mobile

**Collaborated with:** Product · Backend engineers · Business stakeholders

---

## 01 — Context

Indopaket Affiliator is a **low-barrier affiliate program** that allows users to earn commission by sharing referral codes for Indopaket's shipping services.

Unlike existing membership-based referral programs, this flow is designed to work **without requiring prior seller or membership context**. Incentives are applied automatically when referral conditions are met, benefiting both the affiliator and the end user.

This project is **ongoing** and planned for release around **late August 2025**.

---

## 02 — Problem

Indopaket already operates internal referral and membership-based programs — but all required users to already be sellers or members before participating. There was no growth channel for users with no prior platform relationship.

The business need was clear: a simplified entry experience with no role complexity, no prerequisite membership, and minimal setup before sharing.

The UX challenge: **designing for users who have no reason to learn your system** — and who will abandon the moment something feels confusing or untrustworthy.

---

## 03 — Evidence

No direct user research was conducted on this project (it was net-new). Design decisions were driven by:

- **Benchmarking** similar affiliate and referral systems for mental model patterns
- **Studying gamification literature** to distinguish functional incentive design from decorative mechanics
- **Product alignment** with business constraints — fraud prevention rules, self-use prevention, usage limits
- **Direct observation** of how commission ambiguity erodes trust in comparable platforms

---

## 04 — Key Insights

**Mental model clarity is the entire job.** "How I earn" must be self-evident without reading instructions. The user's mental model is: share a code → someone uses it → you get paid. Any friction that disrupted that story was deprioritized or removed.

**Commission ambiguity erodes trust fast.** Pending vs. confirmed states, with transaction context explaining why a reward was or wasn't granted, had to be explicit and immediate — one glance answers "did I earn anything?"

**First-time users have no tolerance for internal terminology.** The flow was designed to work for someone with zero prior relationship to the platform — short, self-explanatory, confidence-building.

**Gamification here is functional, not decorative.** Rather than surface-level rewards, focus stayed on clear progress visibility, simple mental models, and incentives that support repeated sharing.

---

## 05 — Design Decisions

**Progressive disclosure over full upfront complexity** — The flow is broken into stages: Register → Get Code → Share → Earn. New users are never confronted with analytics or commission breakdowns before they've completed their first referral.

**Commission states are always explicit** — Pending vs. confirmed, with transaction context. Ambiguity in earnings was treated as a trust failure, not just a UX gap.

**Fraud-aware constraints surfaced as plain language** — Self-use prevention, usage limits, and abnormal activity handling are explained in clear user-facing messages, not opaque error codes. Users understand what's blocked and why, without exposing internal system logic.

**Analytics reduced to what matters** — Early iterations experimented with broader dashboards. These were stripped back to focus on: commission earned, pending vs. confirmed rewards, and clear transaction context. Anything that didn't support the core mental model was cut.

---

## 06 — Design → Engineering

**UX problem** — Users with no prior platform context needed to understand and trust a commission-based system — and complete referrals — without reading instructions or encountering confusing error states.

**Design decision** — Structured the entire flow around one mental model (share code → someone uses it → you get paid) with progressive disclosure, always-explicit commission states, and fraud constraints surfaced as plain language.

**Engineering constraint** — React-based frontend across both web and mobile contexts, consistent with Indopaket's existing product patterns. Fraud-prevention and eligibility logic lives in the backend; the frontend only reflects constraints, never exposes internal rules.

**Implementation** — Built commission dashboard (earned/pending split), referral code UI with one-tap copy and share, transaction history with reward context, and fraud-state messaging as reusable React components. Inline validation and clear feedback states cover the Register → Get Code → Share → Earn flow.

**Production** — Shipped across web and mobile as part of the Indopaket platform.

---

## 07 — Outcome

**Before:** No dedicated affiliate channel for users outside the seller/member ecosystem. New users had no low-friction path to participate in Indopaket's referral economy.

**After:** A production affiliate program with a clear Register → Get Code → Share → Earn flow, explicit commission visibility (pending vs. confirmed), and fraud-aware UX constraints that explain rather than block — implemented as reusable React components across web and mobile.

No post-launch metrics available yet (project recently shipped). Qualitative signal: the design team and product stakeholders validated that the flow felt understandable and trustworthy in internal review.

---

## 08 — Reflection

This project sharpened one specific instinct: **the hardest UX work is making things feel obvious to users who have no reason to learn your system deeply.**

What I'd refine next: earlier usability testing with real first-time users to validate the mental model before shipping — particularly around the commission confirmation states, where the distinction between pending and confirmed could still be clearer without a transaction detail view.
