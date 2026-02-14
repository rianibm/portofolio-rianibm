---
title: "Dashboard Member Plus"
description: "Seller-facing web dashboard designed to support daily operational workflows, tiering progression, referral visibility, and seller profile management."
pubDate: "2025"
heroImage: "/src/assets/adriana.jpg"
icon: "1"
tags: ["Frontend Developer", "UX Engineering", "Next.js"]
pageSkills:
  - category: "Seller & Marketplace Context"
    icon: "1"
    skills: ["Seller Operations", "Operational Dashboard", "Marketplace Flow"]
  - category: "Tiering & Incentive Logic"
    icon: "2"
    skills: ["Tier Progression", "AWB-based Activity", "Incentive Visibility"]
  - category: "Frontend Development"
    icon: "3"
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  - category: "UI Structure & Patterns"
    icon: "4"
    skills: ["Data-heavy UI", "Component-based Architecture", "State-driven Views"]
---


# Dashboard Member Plus – Frontend & UX Engineering for Seller Operations
Dashboard Member Plus is a **seller/organization-facing management dashboard** built to support everyday operational needs.
The platform covers package monitoring, tier progression, referral visibility, and basic seller profile management.

This is not a conceptual project. It is used in real workflows, with sellers interacting with the system repeatedly throughout their day. Because of that, the interface needed to be calm, predictable, and easy to scan, even when the data grows.

My role focused on the **frontend and UX layer**, translating operational rules and backend data into interfaces that sellers could understand and rely on without much explanation.

---

## Product & Usage Context
**Working in Daily Operations**
The dashboard sits close to seller routines. Things like submitting AWB, checking progress, or tracking incentives happen often and sometimes under time pressure.

From a UI perspective, this meant:
- prioritizing clarity over decoration
- designing layouts that support quick scanning
- making sure important states are visible without digging
---

## Tiering & Referral Flow
**Making Progress Understandable**
One of the core features is the **tiering system**, where seller activity such as AWB submission contributes to progression and incentives. There is also a referral component tied to earnings.

From the frontend side, my focus was on:
- presenting progression and status clearly
- structuring multi-step flows so they feel manageable
- avoiding confusion around rewards and current position

There is a light gamified aspect, but it’s kept subtle. The goal was never to distract sellers, only to help them understand where they stand.

---

## Authentication & State Handling (Frontend Side)
This platform consumes authentication and verification data from backend APIs.

My responsibility stayed on the frontend handling, such as:
- managing authenticated states
- handling protected routes
- reflecting verification results correctly in the UI

All authentication logic itself lives entirely on the backend. On the frontend, the challenge was making sure transitions, loading states, and error conditions felt stable and predictable for users.
---

## Design-to-Code Journey
**UI Built for Data, Not Demos**
The interface covers dashboards, tier views, referral summaries, and transaction histories. Many of these screens deal with large datasets and repeated patterns.

Key considerations included:
- clear information hierarchy
- reusable and consistent components
- layouts that remain usable even when data scales

**Iteration Through Use, Not Assumptions**
UI decisions were refined gradually through:
- discussions with stakeholders
- observing how features were actually used
- small adjustments to reduce friction over time
Nothing dramatic. Mostly quiet improvements that add up.

**Frontend Implementation**
All UI was implemented using a component-based approach with Next.js and React, focusing on:
- maintainable structure
- consistent behavior across features
- flexibility as business rules evolved

---

## What Makes This Project Special
- It’s a real production system, not a showcase UI
- The complexity comes from workflows, not visuals
- Most decisions were about clarity, not cleverness
- It reflects how I usually work: steady, detail-focused, and user-aware
This project sits very close to my core strength:
**building frontend interfaces that make complex operational systems feel understandable and usable in everyday work.**