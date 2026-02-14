---
title: "Gamified Reward Module"
description: "Internal CMS module for running live, lottery-based reward campaigns, used by marketing teams during real-time events."
icon: "2"
pubDate: "Jun 01 2024"
heroImage: "/src/assets/euro.jpg"
tags: ["Frontend", "Laravel", "JavaScript", "CMS", "Gamification"]
pageSkills:
  - category: "System & Data Understanding"
    icon: "1"
    skills:
      [
        "ERD Review",
        "Data Flow Understanding",
        "Business Rule Translation",
        "Backend Collaboration",
        "Feature Scoping",
      ]
  - category: "Frontend & UI Implementation"
    icon: "2"
    skills:
      [
        "CMS UI Design",
        "Laravel Blade",
        "JavaScript / jQuery",
        "UI Slicing",
        "Interactive Animations",
        "State Persistence",
      ]
  - category: "Data Handling & Performance Awareness"
    icon: "3"
    skills:
      [
        "Large Dataset Handling",
        "Excel-based Input",
        "Query Impact Awareness",
        "State Recovery",
        "Operational Stability",
      ]
  - category: "Gamification Logic"
    icon: "4"
    skills:
      [
        "Lottery Flow",
        "Multi-tier Reward Logic",
        "Winner Allocation Rules",
        "Admin Controls",
        "Event Finalization Flow",
      ]
---


# Gamified Reward Module – End-to-End Feature Implementation
**Internal CMS for Live Campaign Execution**
This project involved building a **gamified reward module inside an internal CMS**, used by the **marketing team** to run reward campaigns during **live events**, where results are revealed in real time.

The module was created to support **Member+ campaigns**, initially branded as Seller Idaman, where rewards are distributed through a controlled draw mechanism. My role focused on the **frontend and UI implementation**, while working closely with backend engineers to align system rules, data constraints, and live operational needs.

## Project Context
Unlike public-facing features, this module was designed for **internal operators**, not end users.

Marketing users needed a tool that:
- could handle large participant lists
- allowed controlled, fair reward distribution
- stayed stable during live usage
- was easy to operate under real-time pressure
Because the module was used **live**, reliability and clarity were far more important than visual polish.

## CMS & Operational Flow

Participants were prepared in advance and imported in bulk, usually from Excel files. During live sessions, marketing operators would trigger the roulette draw, announce winners in real time, and finalize results immediately after the event.

From a frontend perspective, this meant designing UI that:
- clearly reflects system state at all times
- prevents accidental duplicate actions
- supports recovery if the page is refreshed or interrupted

## Design-to-Code Implementation

**CMS UI & Interaction Design**
I translated functional requirements into clear, operational CMS interfaces, including:
- participant management views
- reward configuration screens
- live roulette display
- event control and finalization panels
The UI was intentionally straightforward, optimized for speed and confidence rather than decoration.

**Interactive Roulette & Animations**
The roulette experience was implemented using **Laravel Blade** with **JavaScript / jQuery**, including:
- slot-style animations for live draws
- reward reveal states
- controlled transitions between draw phases
Animations were designed to feel engaging on stream, while remaining predictable for operators.

**State Persistence for Live Usage**
To avoid issues during live events, I implemented **client-side state persistence** to ensure continuity during live usage. This ensured that:
- the current draw state is preserved on refresh
- accidental reloads do not break the flow
- operators can resume safely without data loss
This was critical for maintaining trust during live campaigns.

## Feature Highlights

**Participant Import & Validation**
- Excel-based participant upload
- Validation feedback and status indicators
- UI aligned with backend processing constraints

**Lottery & Reward Distribution**
- Multi-tier reward logic visualization
- Clear indication of selected winners
- Transparent flow from draw → confirmation → finalization

**Admin Controls**
- Event state management
- Manual control over draw progression
- Final result review and locking
All controls were designed to reduce operator error during high-pressure live usage.

## Collaboration & Technical Awareness

Although my role was frontend-focused, this project required close coordination with backend engineers to:
- review ERD and data relationships
- understand performance implications of large datasets
- adapt UI behavior to backend processing limits
This helped ensure the frontend stayed responsive and predictable, even when handling heavy data operations.

## What Makes This Project Special

- **Real-time, live-use CMS**, not a static admin panel
- **Used during Instagram Live events**, where failure is visible
- **Gamification under strict operational constraints**
- **Strong focus on stability, clarity, and operator confidence**
- **Frontend decisions tightly coupled with backend realities**
- **Practical problem-solving in a high-pressure environment**
This project sharpened my understanding that good frontend work is not always about visuals, but about **making complex systems behave calmly when it matters most**.

Specific implementation details are intentionally kept at a high level to respect internal system boundaries.

