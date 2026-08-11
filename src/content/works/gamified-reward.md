---
title: "Gamified Reward Module"
description: "Internal CMS roulette draw system for Member+ live campaigns — designed for dual audiences: the operator running the event and Instagram Live viewers watching the winner reveal in real time."
icon: "heroicons:gift"
pubDate: "Jul 2025"
updatedDate: "Apr 2026"
scope: "Feature Module"
heroImage: "/src/assets/euro.jpg"
tags: ["UX Engineer", "Frontend", "Laravel", "JavaScript", "jQuery", "CMS", "Gamification"]
identity: "UX Engineer · Frontend"
role: "UX design for live, dual-audience contexts · Frontend implementation"
pageSkills:
  - category: "UX Design for Live Contexts"
    icon: "1"
    skills:
      [
        "Dual-audience Design",
        "Visibility of System Status",
        "Emotional Pacing",
        "Legibility at Stream Quality",
        "Motion & Animation Design",
        "Error Prevention",
      ]
  - category: "Frontend & UI Implementation"
    icon: "2"
    skills:
      [
        "Laravel Blade",
        "JavaScript / jQuery",
        "AJAX",
        "Bootstrap",
        "Slot-style Animations",
        "Interactive CMS UI",
      ]
  - category: "State & Resilience"
    icon: "3"
    skills:
      [
        "Client-side State Persistence",
        "Retry & Fallback Handling",
        "Offline Detection",
        "Modal Stack Management",
        "Operational Stability",
      ]
  - category: "Operational UX"
    icon: "4"
    skills:
      [
        "Drag & Drop Upload",
        "Dynamic Form Rows",
        "Progress Tracking UI",
        "Event Resume / Continue Draw",
        "Event Finalization Flow",
      ]
---

# Gamified Reward Module – Designing for Two Audiences at Once

An internal CMS roulette draw system for **Member+ live reward campaigns (Undian Member Plus)** — where marketing teams run lottery draws on **Instagram Live**, and winners are revealed in real time to a public audience.

My role was **UX Engineering**: thinking through who was watching, what they needed to feel, and then building that experience in code.

---

## The Core UX Problem

Most CMS tools are designed for one person: the operator. This one had two:

**The operator** — running the event backstage. They needed clarity, control, and zero room for error. A wrong tap during a live stream has no undo.

**The IG Live viewers** — watching on their phones through a streamed screen. They needed to *feel* the excitement of the draw, read the winner name clearly, and immediately understand what just happened — without anyone explaining it to them.

Designing for both at once, in a single interface, is the real challenge this project solved.

---

## UX Analysis

**Visibility of System Status** *(Nielsen's Heuristic #1)*
The roulette state had to be unambiguous at every moment — spinning, stopping, winner revealed. Viewers watching a compressed IG Live stream can't hover or zoom in. If the state isn't obvious in the first second, it's lost.

**Legibility at Stream Quality**
IG Live compresses video, reduces contrast, and renders on small screens. Typography choices, element sizing, and color contrast were all considered through the lens of "will this read clearly on a phone screen watching a livestream?" — not just on the designer's monitor.

**Emotional Pacing**
The spin animation had to build anticipation without dragging. Too short and it feels cheap; too long and viewers lose attention. The timing and easing of the slot-style animation was tuned to create a natural tension-and-release moment at the winner reveal.

**Error Prevention** *(Nielsen's Heuristic #5)*
Operators cannot accidentally retrigger a draw or skip a step during a live broadcast. The UI prevents double-actions, requires confirmation before critical steps, and auto-merges duplicate gift configurations before the draw begins.

**Recovery Without Disruption**
If the operator's browser refreshes mid-event — which happens — the draw state is preserved client-side so the session can resume exactly where it left off. Viewers never see the disruption.

---

## CMS Module Structure

**Roulette Gifts** — gift catalog management. Operators add, edit, and delete available rewards with name and image. Used to populate the draw configuration.

**Roulette Events** — the core draw page. Operators create an event, upload participants (Excel, drag & drop), configure gift types and quotas via dynamic rows, and launch the draw from here.

---

## Operational Flow

**Before the event:** participants are uploaded in bulk, gifts are configured per event with individual quotas, duplicate gift rows are automatically merged.

**During the event:** the roulette runs per gift type with slot-style animation. The operator controls pacing. Winners are revealed one by one.

**After the event:** the event is finalized and locked. If a session was interrupted, operators can resume via Continue Draw — the system shows current draw state before proceeding.

---

## Resilience for Live Contexts

Because this ran live, several resilience measures were built in:

- **Client-side state persistence** — survives accidental page refresh mid-draw
- **AJAX retry with exponential delay** — gift data reloads automatically up to 3 times before falling back gracefully
- **Offline detection banner** — visible warning if connection drops during a live session
- **Modal stack management** — prevents z-index and backdrop conflicts when multiple modals are involved in the flow

---

## Timeline & Ongoing Ownership

This wasn't a one-off build — it's a system I've owned and iterated on across multiple live campaign cycles, from the initial build through the most recent release:

- **Jul 2025** — Initial build: gift catalog management, event configuration, and the core roulette draw flow
- **Aug 2025 – Feb 2026** — Live iterations across several campaign cycles — fixes and refinements driven by real usage on active broadcasts, not staging
- **Apr 2026** — Most recent live release

Each cycle ran during an active IG Live event, so changes had to hold up under real operational conditions the first time.

---

## What This Project Taught Me

Designing for a live broadcast context forced me to think beyond the screen in front of me. The user is not just the person clicking — it's also the audience watching what they click. That shift in perspective — from *interface* to *experience for all people in the room* — is something I carried into every project after this.

Specific implementation details are intentionally kept at a high level to respect internal system boundaries.

