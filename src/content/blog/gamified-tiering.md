---
title: "Gamified Tiering Loyalty System"
description: "Frontend implementation of a gamified tiering and incentive system for courier partners — from early Laravel prototype to a full Next.js rebuild with real-time progression, multi-tier tracking, and incentive history."
icon: "2"
pubDate: "Jul 4 2026"
scope: "Feature Module"
heroImage: "/src/assets/adriana.jpg"
tags: ["Frontend Developer", "UI/UX", "Next.js", "React", "Gamification", "Laravel"]
pageSkills:
  - category: "UI/UX Design & Implementation"
    icon: "1"
    skills: ["Design-to-code", "UI Slicing", "Pixel-accurate UI", "Responsive Layouts", "Multi-state UI"]
  - category: "Frontend Development"
    icon: "2"
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"]
  - category: "Gamified UI Patterns"
    icon: "3"
    skills: ["Tier Progression UI", "Progress Indicators", "Interactive Tier Navigation", "Lock/Unlock States", "Incentive Display"]
  - category: "API & Data Integration"
    icon: "4"
    skills: ["REST API Integration", "Real-time Data Fetching", "Data Formatting", "Error Handling"]
  - category: "Implementation Quality"
    icon: "5"
    skills: ["Mobile-first UI", "State-based Rendering", "Visual Consistency", "Performance-aware UI"]
---

# Gamified Tiering Loyalty System

A tiering and incentive system built for courier partners — helping them understand their current standing, track progress toward the next tier, and view their incentive history. This work spanned two phases: an **early Laravel prototype** and a **full Next.js rebuild** as the platform matured.

---

## UX Analysis

**Visibility of System Status** *(Nielsen's Heuristic #1)*
A partner's current tier, live AWB count, and progress toward the next tier are always present on the main page — no navigation required. The system's current state is answerable at a glance, which matters when partners are actively trying to hit shipment targets before a period ends.

**Goal Gradient Effect**
The closer someone is to a goal, the more motivated they are to complete it. The progress indicator and tier timeline were designed to make "how far am I from the next tier" immediately readable — not buried in numbers. Showing both current count and target together, rather than just a percentage, keeps the goal concrete.

**Recognition Over Recall** *(Nielsen's Heuristic #6)*
Tier icons, colors, and lock/unlock states are visually distinct so partners recognize their standing without having to remember tier names or thresholds. Bronze → Silver → Gold → Platinum → Diamond is a progression you *see*, not something you mentally decode.

**Positive Reinforcement at Achievement**
Tiers that have been reached are displayed differently from tiers in progress and locked tiers. The completed state in the progression timeline gives partners visible acknowledgment of what they've earned — not just what they haven't reached yet.

**Aesthetic and Minimalist Design** *(Nielsen's Heuristic #8)*
Incentive data involves a lot of numbers — AWB counts, rates, periods, history. The design keeps this scannable by surfacing only the most relevant data at the top level, with full history and detailed terms accessible via expand or a separate page. Information is layered, not dumped.

---

## Context & Background

The system was designed to motivate courier partners through a clear tier progression model. Partners earn tiers based on shipment volume (AWB count), and each tier unlocks a different incentive rate. The UI needed to make this progression feel tangible, readable, and worth engaging with — without overwhelming users with numbers.

This project gave me early exposure to gamification design thinking, which pushed me to study progression systems beyond day-to-day UI work to understand what actually drives engagement vs. what creates noise.

---

## Phase 1 – Laravel Prototype

The first implementation was built using **Laravel Blade templates**, translating Figma designs into a working interface before the platform architecture was finalized.

- Implemented tier badges, progress bars, and interactive sliders for tier exploration
- Handled multiple visual states per tier (locked, in-progress, achieved)
- Mobile-first layout with attention to spacing, typography, and touch targets
- This phase was critical in identifying what worked and what needed adjustment before the Next.js rebuild

---

## Phase 2 – Next.js Rebuild

The system was rebuilt from the ground up in **Next.js** as part of the consolidated Member+ platform. The rebuild carried forward the learnings from Phase 1 while handling real API data and more complex state management.

**Tier Status Page**

The main page displays the partner’s current tier, live progress, and the full tier progression timeline.

- **Tier carousel** — interactive navigation through all tier levels (Bronze → Silver → Gold → Platinum → Diamond), each with its own icon, incentive value, and lock state
- **Live progress counter** — shows current AWB count vs. target, with a progress indicator updating per API response
- **Progression timeline** — visual list of all tiers with completed, current, and upcoming states; mobile view shows a condensed view with an expand option
- **Tier period expiry** — displays when the current tier period ends
- **Redirect to Indopaket** — CTA linking partners to indopaket.co.id to make shipments, with a confirmation modal before redirect
- **Bonus info modal** — expandable terms & conditions for the incentive system

**Tier History Page**

A separate page showing the partner’s monthly incentive history.

- Lists past periods with AWB count, incentive earned, and formatted dates
- Includes a summary of total incentive across all recorded periods
- Displays an information banner about incentive disbursement timing

**Service & Data Layer**

- Built a tiering service layer to centralize API calls, data formatting, and business logic (progress calculation, tier color mapping, next tier lookup)
- Handled loading, error, and empty states across all views

---

## Key Takeaways

- **Full lifecycle ownership** — from early prototype to production rebuild
- **Gamification in practice** — designing progression that communicates clearly without over-explaining
- **API-driven UI** — real data with real edge cases (missing tiers, max tier reached, empty history)
- **Mobile-first execution** — both pages optimized for mobile-first usage patterns

Implementation details are kept at a functional level to respect platform and partner data boundaries.
