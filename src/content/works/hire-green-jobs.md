---
title: "HiRE – Green Jobs Platform"
description: "Public-facing green jobs platform for the Society of Renewable Energy (SRE) — scalable UI, content-driven pages, and production deployment."
icon: "heroicons:briefcase"
pubDate: "Dec 2023"
tags: ["Frontend Developer", "Next.js", "React", "TypeScript", "Tailwind CSS"]
role: "Frontend implementation · Production deployment"
pageSkills:
  - category: "Frontend Development"
    icon: "1"
    skills:
      [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Component-based Architecture",
      ]
  - category: "UI Implementation"
    icon: "2"
    skills:
      [
        "Figma-to-code",
        "Responsive Layouts",
        "Design System Consistency",
        "Accessibility Awareness",
      ]
  - category: "Routing & Content Handling"
    icon: "3"
    skills:
      [
        "Dynamic Routing",
        "SEO-friendly Pages",
        "Conditional Rendering",
        "Content-driven UI",
      ]
  - category: "Deployment & Production"
    icon: "4"
    skills:
      [
        "Production Deployment",
        "Environment Configuration",
        "Preview & Release Workflow",
        "Post-launch Stability",
      ]
---

# HiRE – Green Jobs Platform

HiRE is a **public-facing green jobs platform** developed under the **Society of Renewable Energy (SRE)**, aimed at connecting job seekers with opportunities in sustainability-focused careers.

I worked on this project as a **frontend developer**, responsible for implementing production-ready UI, structuring content-driven pages, and supporting deployment to a live environment. This project became my **first real production experience using Next.js**.

---

## Context & Product Scope

HiRE was built to support multiple career initiatives, including job listings, learning resources, webinars, and virtual career events.

From a frontend perspective, the platform needed to:
- scale across content-heavy pages  
- remain accessible and readable on all devices  
- support SEO-friendly public pages  
- feel stable and trustworthy for first-time visitors  

The emphasis was not on experimental UI, but on **clarity, performance, and production readiness**.

---

## UX Analysis

**Recognition Over Recall** *(Nielsen's Heuristic #6)*
Job seekers visiting a public platform for the first time should not need to learn the system. Listings, categories, and navigation patterns follow familiar conventions — users recognize what to do rather than having to figure it out. Clean URL structures and scannable page layouts reduce the mental work of finding relevant opportunities.

**Aesthetic and Minimalist Design** *(Nielsen's Heuristic #8)*
Content-heavy pages (job listings, learning resources, event pages) stay readable by prioritizing hierarchy and whitespace over decoration. The platform's goal is to connect people with opportunities — every UI element either supports that goal or gets removed.

**Trust Signals for First-time Visitors**
A public platform's biggest UX challenge is earning trust from people who have no prior relationship with it. Consistency across pages, predictable navigation, and stable layout choices all contribute to an impression of reliability. Users should feel the platform is legitimate without being told it is.

**Match Between System and Real World** *(Nielsen's Heuristic #2)*
Language and structure follow how job seekers already think — job titles, locations, categories — rather than internal platform terminology. SEO-friendly URL structures match how people search, not how the backend organizes data.

**Accessibility Awareness**
A public-facing platform serves a wide, unknown audience. Responsive layouts, readable typography, and semantic structure were treated as baseline requirements, not optional polish.

---

## Frontend & UI Implementation

**Design-to-Code Execution**  
I worked closely with a UI/UX designer to translate high-fidelity designs into responsive and maintainable interfaces using **Next.js**, **TypeScript**, and **Tailwind CSS**.

The focus was on:
- layout consistency across pages  
- predictable component behavior  
- clean separation between layout, content, and interaction  

**Key Areas Implemented**
- Landing and campaign pages for public outreach  
- Job and career-related listing and detail pages  
- Learning-related pages with structured navigation  
- Dashboard-style layouts for logged-in users  

Details around internal logic and data handling are intentionally kept at a high level.

---

## Routing, State & Content Handling

**Dynamic Routing & SEO Awareness**  
Implemented dynamic routes for content-driven pages while maintaining clean, SEO-friendly URLs suitable for public indexing.

**UI State & Conditional Rendering**  
Handled various UI states to ensure smooth transitions, clear feedback, and predictable behavior across different user flows, including logged-in and public contexts.

---

## Deployment & Workflow

**Production Deployment**  
Supported deployment to a live production environment, including environment configuration and preview-based release workflows.

**Collaboration with Backend**  
Worked alongside backend engineers handling authentication and data services. My responsibility stayed on frontend integration and presentation, ensuring backend complexity was not exposed to users.

<div class="not-prose flex flex-wrap items-center gap-2 my-4">
  <span class="text-sm font-semibold">Team:</span>
  <a href="https://www.linkedin.com/in/maria-amanda-0205/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-3 py-1.5 bg-pgreen rounded-full border-1 border-black text-xs font-semibold shadow-card1 hover:shadow-card transition no-underline text-black">Maria Amanda <span class="text-black/50 font-normal">· UI/UX</span></a>
  <a href="https://www.linkedin.com/in/michael-mgp-s/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-3 py-1.5 bg-pblue rounded-full border-1 border-black text-xs font-semibold shadow-card1 hover:shadow-card transition no-underline text-black">Michael <span class="text-black/50 font-normal">· Backend</span></a>
  <a href="https://www.linkedin.com/in/bernadetanaftalina/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-3 py-1.5 bg-pblue rounded-full border-1 border-black text-xs font-semibold shadow-card1 hover:shadow-card transition no-underline text-black">Bernadeta Naftalina <span class="text-black/50 font-normal">· Backend</span></a>
  <span class="inline-flex items-center gap-1 px-3 py-1.5 bg-ppink rounded-full border-1 border-black text-xs font-semibold shadow-card1">Deta <span class="text-black/50 font-normal">· PM/PO</span></span>
</div>

---

## Key Takeaways

- **First production-scale project using Next.js**
- **Strong design-to-code frontend execution**
- **Experience building SEO-friendly, content-heavy pages**
- **Exposure to real production deployment workflows**
- **Collaboration with designers and backend engineers**
- **Building a public platform with real users and visibility**

Specific implementation details are intentionally described at a conceptual level to respect organizational and platform boundaries.
