---
title: "Indopaket Affiliator"
description: "Frontend and UX implementation for a low-barrier affiliate program, focused on commission visibility and trust-driven referral experiences."
pubDate: "Jun 2025"
heroImage: "/src/assets/fran.jpg"
icon: "2"
tags: ["Frontend Developer", "UX Engineering", "React", "Mobile UI"]
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

Indopaket Affiliator is a **low-barrier affiliate program** that allows users to earn commission by sharing referral codes for Indopaket’s shipping services.

Unlike existing membership-based referral programs, this flow is designed to work **without requiring prior seller or membership context**. Incentives are applied automatically when referral conditions are met, benefiting both the affiliator and the end user.

I worked on the **frontend and UX implementation** for this program, delivering interfaces for both **web and mobile experiences**. The main challenge was designing a system that feels trustworthy, understandable, and motivating, while staying intentionally simple.

This project is **ongoing** and planned for release around **Q2**.

---

## Context & Product Intent

Indopaket already operates internal referral and membership-based programs.
The Affiliator Program was introduced as an **alternative growth channel** with a simplified entry experience.
The intent was clear:
- no role complexity
- no requirement to become a seller or member
- minimal setup before sharing
From a UX standpoint, this meant removing assumptions about prior knowledge and designing flows that work even for first-time users with no existing relationship to the platform.

---

## UX Challenges & Key Decisions

**Designing for First-time Users**  
Because affiliators may have no prior context with the platform, onboarding needed to be:
- short
- self-explanatory
- confidence-building
The UI avoids internal terminology and focuses on what matters immediately:
**share code → usage → reward visibility**.


**Learning and Applying Gamification Thoughtfully**  
This project pushed me to study gamification patterns more deeply, including reading references and benchmarking similar affiliate systems.

Rather than adding surface-level rewards, the focus stayed on:
- clear progress and earnings visibility
- simple mental models for “how I earn”
- incentives that support repeated sharing, not distraction
Gamification here is subtle and functional, not decorative.
Specific mechanics are intentionally kept high-level in this description.

**Commission Visibility Over Everything Else**  
Early design iterations experimented with broader analytics. These were later reduced to keep the primary focus on:
- commission earned
- pending vs. confirmed rewards
- clear transaction context
Anything that did not support these goals was deprioritized.

---

## Frontend & Mobile UI Implementation

**Web & Mobile Interfaces**  
I implemented the UI across web and mobile contexts using a React-based architecture, ensuring consistent behavior while adapting layouts for smaller screens. Revenue and discount information remains immediately visible across device sizes.

**Onboarding & Sharing Flow**  
Designed a straightforward onboarding and sharing flow:
**Register → Get Code → Share → Earn**, supported by inline validation and clear feedback states.

**Dashboard & Transaction UI**  
Built interfaces for:
- referral codes with one-tap copy and share
- commission summaries (earned vs. pending)
- transaction lists that clearly explain why a reward was granted
Consistency between summary and detail views was essential to maintain trust.

**Fraud-aware UX Constraints**  
Frontend UI reflects system constraints such as:
- self-use prevention
- usage limits
- abnormal activity handling
Messaging explains blocked actions clearly, without exposing internal system logic.

---

## Key Takeaways

- **Designing UX for users with no prior system context**
- **Implementing commission-based flows with trust as a priority**
- **Applying gamification in a restrained, purpose-driven way**
- **Balancing growth goals with clarity and simplicity**
- **End-to-end UI implementation using React / Next.js**
This project sharpened my understanding that sometimes the hardest UX work is making things feel obvious, especially when users have no reason to learn your system deeply.

Implementation details are presented at a conceptual level to respect platform security and business boundaries. Specific eligibility rules and incentive calculations are intentionally abstracted in this overview.

