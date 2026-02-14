---
title: "Sky Explorer – Flight Booking App"
description: "Frontend implementation of a flight booking application, focusing on complex booking flows, state management, and responsive UI under tight time constraints."
icon: "3"
pubDate: "2024"
heroImage: "/src/assets/euro.jpg"
tags: ["Frontend Developer", "React", "TypeScript", "Recoil"]
pageSkills:
  - category: "Frontend Development"
    icon: "1"
    skills:
      [
        "React",
        "TypeScript",
        "Vite",
        "Component Architecture",
        "Custom Hooks",
      ]

  - category: "State Management & Performance"
    icon: "2"
    skills:
      [
        "Recoil",
        "State Modeling",
        "Code Splitting",
        "Lazy Loading",
      ]

  - category: "UI & Interaction"
    icon: "3"
    skills:
      [
        "Ant Design",
        "Tailwind CSS",
        "Multi-step Forms",
        "Responsive UI",
        "Error States",
      ]

  - category: "Motion & Data Integration"
    icon: "4"
    skills:
      [
        "Framer Motion",
        "REST API Integration",
        "Async Data Handling",
        "Loading & Empty States",
      ]

  - category: "Team & Delivery Context"
    icon: "5"
    skills:
      [
        "Small Team Collaboration",
        "Time-boxed Delivery",
        "Frontend Ownership",
      ]
---


# Sky Explorer – Flight Booking Application

I worked on the **frontend implementation** of **Sky Explorer**, a flight booking application that allows users to search, compare, and book flights through a multi-step booking flow.

This project was developed as a **bootcamp final project**, handled by a **two-person frontend team**, with development carried out under a **tight timeline** and limited resources.

> **Project status**: The original version was built using React with a separate backend. A new iteration using Next.js is planned but currently paused due to work commitments.

---

## Context & Scope

Sky Explorer was designed to simulate a real-world flight booking experience, requiring the frontend to handle **complex forms**, **dynamic data**, and **state-heavy user flows** commonly found in travel platforms.

From a frontend perspective, the main challenges were:
- managing complex booking states  
- keeping multi-step flows understandable  
- maintaining performance with data-heavy UI  

---

## Frontend Responsibilities

**Booking Flow Implementation**  
Implemented a multi-step booking process covering flight search, passenger details, cabin selection, and confirmation states. Each step required careful handling of validation, error states, and user feedback.

**Complex Form Handling**  
Built and managed form-heavy interfaces such as passenger management, date selection, and flight filtering, ensuring inputs remained predictable and usable across devices.

**Responsive UI**  
Implemented responsive layouts to support both desktop and mobile usage, adapting dense booking interfaces for smaller screens.

---

## State Management & Architecture

**Global State with Recoil**  
Used **Recoil** to manage shared state across booking flows, search results, and user sessions, enabling predictable state transitions between steps.

**Component Architecture**  
Structured the frontend using reusable components and custom hooks, improving maintainability and reducing duplication across the codebase.

---

## Performance & UX Considerations

**Code Splitting & Lazy Loading**  
Applied code splitting and lazy loading to reduce initial load time and improve performance when navigating between booking steps.

**UI Feedback & Error Handling**  
Ensured loading states, validation feedback, and error messaging were consistently implemented to guide users through complex flows without confusion.

---

## Team & Delivery Context

**Small Team Collaboration**  
Worked in a two-person frontend team, requiring clear task ownership and efficient collaboration to cover all required features.

**Time-boxed Delivery**  
Development was completed within a limited timeframe due to external constraints, requiring focused execution and prioritization of core booking features.

---

## Key Takeaways

- **Experience building complex, state-heavy frontend applications**
- **Implementing multi-step booking flows**
- **Managing global state with Recoil**
- **Balancing feature completeness with delivery constraints**
- **Collaborating effectively in a small frontend team**