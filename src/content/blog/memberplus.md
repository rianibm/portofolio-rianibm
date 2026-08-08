---
title: "Dashboard Member Plus"
description: "Seller-facing web dashboard built with Next.js 15, covering tiering progression, referral visibility, transaction history, and SSO authentication from a Laravel backend."
pubDate: "2025"
heroImage: "/src/assets/adriana.jpg"
icon: "1"
tags: ["Frontend Developer", "UX Engineering", "Next.js"]
role: "Frontend architecture · Auth integration"
pageSkills:
  - category: "Seller & Platform Context"
    icon: "1"
    skills: ["Seller Operations", "Operational Dashboard", "Tiering System", "Referral Program", "Membership"]
  - category: "Frontend Development"
    icon: "2"
    skills: ["Next.js 15", "React 19", "JavaScript", "Tailwind CSS", "Shadcn/ui"]
  - category: "Authentication & Integration"
    icon: "3"
    skills: ["SSO (Laravel)", "Stateless JWT", "Cookie-based Auth", "Next.js API Routes", "CORS Handling"]
  - category: "UI Structure & Patterns"
    icon: "4"
    skills: ["Data-heavy UI", "Component-based Architecture", "React Context", "Client Components"]
---


# Dashboard Member Plus – Frontend & UX Engineering for Seller Operations
Dashboard Member Plus is a **seller-facing management dashboard** built to support everyday operational needs for Indopaket's seller ecosystem.

The platform covers multiple modules: a **stats dashboard**, **tiering progression** with status and history, **referral program** with info and earnings history, **transaction history**, and **profile management**. It also integrates with a **membership** section.

This is not a conceptual project. It is used in real workflows, with sellers interacting with the system repeatedly throughout their day. Because of that, the interface needed to be calm, predictable, and easy to scan, even when the data grows.

My role focused on the **frontend layer**, translating operational rules and backend data into interfaces that sellers could understand and rely on without much explanation.

---

## Application Modules

The dashboard is structured around distinct modules, each with its own routes and data:

- **Dashboard** — stats overview with `StatsCards`, `TieringWidget`, and `ReferralWidget` surfacing the most important seller metrics at a glance
- **Tiering** — current tier status and full progression history, helping sellers understand where they stand and how they got there
- **Referral** — referral info and earnings history, structured to make commission visibility clear
- **Transactions** — transaction list for tracking seller activity
- **Profile** — account info management, including bank list integration for payout-related data
- **Membership** — membership status and related information

---

## UX Analysis

**Visibility of System Status** *(Nielsen's Heuristic #1)*
Sellers check their tier, referral earnings, and transaction counts regularly — sometimes under time pressure. The dashboard surfaces these at a glance through `StatsCards`, `TieringWidget`, and `ReferralWidget`, so the system's current state is always answerable in under a second.

**Recognition Over Recall** *(Nielsen's Heuristic #6)*
Sellers should not need to dig through menus or remember where their incentive data lives. Key metrics are always visible on the main dashboard — referral status, tier progress, and earnings — positioned so the user recognizes their standing rather than having to recall it from a previous session.

**Consistency and Standards** *(Nielsen's Heuristic #4)*
Shadcn/ui components enforce visual and behavioral consistency across modules. A tier card behaves the same way whether you encounter it in the dashboard widget or the full tiering page. This reduces cognitive load for repeated daily use.

**Aesthetic and Minimalist Design** *(Nielsen's Heuristic #8)*
The interface is calm and scannable, not stimulating. Data-heavy screens — transaction lists, tier history — prioritize readable layout over decorative elements. Every module shows what sellers need and nothing they don't.

**Match Between System and Real World** *(Nielsen's Heuristic #2)*
The language used — "tier", "referral earnings", "transaction history" — matches how sellers already think about their business. The SSO flow is invisible when working correctly; sellers recognize their logged-in state without needing to understand JWT mechanics.

---

## Product & Usage Context
**Working in Daily Operations**
The dashboard sits close to seller routines. Things like checking progress, tracking incentives, or reviewing referral earnings happen often and sometimes under time pressure.

From a UI perspective, this meant:
- prioritizing clarity over decoration
- designing layouts that support quick scanning
- making sure important states are visible without digging

---

## Authentication & SSO Architecture
**Stateless JWT with Laravel SSO**

This platform uses a **stateless JWT approach**, where the frontend does not manage sessions in a database or Redis. Instead, it reads JWT cookies set by the Laravel backend.

Two auth paths are supported:
- **SSO login** — Laravel sets the `idp_jwt` cookie and redirects to `/auth/sso-login`, where the Next.js frontend verifies and initializes the session
- **Local login** — direct email/password login through the Next.js interface, storing a `local_token` cookie

The `middleware.js` acts as the first gate, checking for a valid cookie before allowing access to protected routes. `AuthContext.js` manages global auth state and deliberately holds UI rendering until SSO is fully verified — preventing race conditions and infinite redirect loops that are common in SSO integrations.

**Next.js API Routes as Proxy Layer**
Rather than a traditional server proxy, the platform uses **Next.js API Routes** (`app/api/...`) as a serverless proxy layer. Each route reads the HTTP-only cookie server-side and injects it as a `Bearer` token when calling the Laravel API. This eliminates CORS issues from the browser client and avoids adding proxy load to the Laravel server.

---

## Design-to-Code Journey
**UI Built for Data, Not Demos**
The interface covers dashboards, tier views, referral summaries, and transaction histories. Many of these screens deal with repeated patterns and data that can grow over time.

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
All UI was implemented using a component-based approach with Next.js 15 App Router and React 19, focusing on:
- maintainable structure with Shadcn/ui components
- consistent behavior across features
- flexibility as business rules evolved

---

## What Makes This Project Special
- It's a real production system, not a showcase UI
- The complexity comes from workflows and auth architecture, not visuals
- SSO integration required careful handling of race conditions and redirect loops
- Most decisions were about clarity, not cleverness
- It reflects how I usually work: steady, detail-focused, and user-aware

This project sits very close to my core strength:
**building frontend interfaces that make complex operational systems feel understandable and usable in everyday work.**
