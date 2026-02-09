---
title: "Indopaket Affiliator"
description: "Frontend and UX implementation for Indopaket’s Affiliator Program, covering both web and mobile app interfaces for commission-based promotion flows."
pubDate: "Dec 2025"
heroImage: "/src/assets/fran.jpg"
icon: "2"
tags: ["Frontend Developer", "UI/UX", "React", "Mobile UI"]
pageSkills:
  - category: "Affiliate & Business Domain"
    icon: "1"
    skills: ["Affiliate Program Flow", "Commission-based UX", "Referral Journey", "Business Rule Awareness"]
  - category: "UX Research & Design"
    icon: "2"
    skills: ["User Journey Mapping", "Competitor Benchmarking", "Flow Design", "Dashboard UX"]
  - category: "Frontend & Mobile UI"
    icon: "3"
    skills: ["React", "JavaScript", "Tailwind CSS", "Responsive UI", "Mobile App UI"]
  - category: "UX Constraints & Validation"
    icon: "4"
    skills: ["Role-aware UI", "Error States", "Form Validation", "Trust-focused UI"]
---

# Indopaket Affiliator – Affiliate Program for a Shipping Platform

I worked on the **frontend and UX implementation** of the **Indopaket Affiliator Program**, delivering interfaces for both **web and mobile app experiences**. The program enables **KOLs and content creators** to earn commission by promoting Indopaket’s shipping services through referral codes.

My role focused on translating **business rules and commission mechanics** into clear, consistent user flows across platforms, ensuring affiliators could understand their performance and earnings without confusion.

---

## Context & Business Goals

Before the Affiliator Program, Indopaket already had a **Referral Program** and **Member+** flow. The Affiliator Program was introduced as an additional growth channel targeting users who actively create promotional content.

From a frontend and UX perspective, this required designing a flow that:
- clearly communicates commission and discount mechanics  
- avoids confusion with existing referral programs  
- minimizes friction for users whose primary goal is shipping, not promotion  

---

## UX Challenges & Decisions

**Separate Registration Flow**  
Rather than merging affiliator registration into the main app signup, the affiliator journey was designed as a **separate entry point**. This reduced cognitive load for regular users while providing a focused onboarding experience for serious affiliators.

**Affiliator-first Dashboard Hierarchy**  
Early dashboard designs leaned too heavily toward analytics. UX evaluation shifted the hierarchy to prioritize what affiliators care about most:  
**commission visibility first**, followed by transaction context and campaign tools.

**Data Visualization on Limited Screen Space**  
Commission and transaction metrics differed significantly in scale. Displaying both in a single chart made commission appear visually insignificant. This was resolved through toggle-based views, allowing users to switch context without misleading visual emphasis — especially important on mobile screens.

---

## Frontend & Mobile UI Implementation

**Web & Mobile Interfaces**  
I implemented UI for both the **web dashboard** and **mobile app views**, ensuring feature consistency where required while adapting layouts and interactions for mobile usage patterns.

This included:
- prioritizing revenue and payout information on smaller screens  
- simplifying data-dense views for mobile readability  
- maintaining consistent behavior between web and mobile experiences  

**Landing Page & Registration UI**  
Designed a guided onboarding flow with step visualization (Registration → Get Referral → Campaign → Revenue), inline validation, and pre-filled user data when applicable.

**Dashboard UI**  
Built interfaces for referral links and codes with one-tap copy/share, commission summaries (confirmed vs. pending), transaction overviews, and campaign assets such as banners and messaging templates.

**Transaction History UI**  
Implemented per-transaction breakdowns that remain consistent with summary totals, helping maintain user trust in commission calculations.

**Fraud-aware UX Constraints**  
Frontend UI reflects backend validation rules such as self-referral prevention, usage limits, and device-related restrictions, with clear messaging to explain blocked actions without exposing sensitive system logic.

**Account Awareness**  
Designed UI flows that acknowledge existing Indopaket accounts, allowing affiliator features to coexist with other user roles without creating conflicting experiences.

---

## Key Takeaways

- **End-to-end UI implementation for both web and mobile app**
- **Strong UX decision-making under real business constraints**
- **Designing trust-sensitive, commission-focused interfaces**
- **Balancing data density with mobile usability**
- **Ensuring consistency across multiple growth programs within one ecosystem**
