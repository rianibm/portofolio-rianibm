---
title: "Web 3PL"
description: "Internal web platform for 3PL (Third-Party Logistics) operations, supporting land and air shipment workflows with role-based access and data-heavy processes."
pubDate: "Sept 2025"
heroImage: "/src/assets/adriana.jpg"
icon: "1"
tags: ["Frontend Developer", "React", "Logistics"]
pageSkills:
  - category: "3PL & Logistics Domain"
    icon: "1"
    skills:
      [
        "3PL Operations",
        "Multi-modal Transportation (Land & Air)",
        "Shipment Lifecycle",
        "POD Workflow",
      ]

  - category: "Frontend Architecture"
    icon: "2"
    skills:
      [
        "React 19",
        "TypeScript",
        "Vite",
        "Component-driven Architecture",
      ]

  - category: "UI & Interaction"
    icon: "3"
    skills:
      [
        "Tailwind CSS",
        "Radix UI",
        "shadcn/ui",
        "Form-heavy UI",
        "Operational Interfaces",
      ]

  - category: "State, Forms & Data Handling"
    icon: "4"
    skills:
      [
        "Zustand",
        "React Hook Form",
        "Zod Validation",
        "Async Data Handling",
        "Error & Empty States",
      ]

  - category: "System Integration & Reliability"
    icon: "5"
    skills:
      [
        "Role-based Access Control (RBAC)",
        "JWT Handling",
        "Custom API Client (fetch)",
        "Retry & Timeout Strategy",
        "Config-driven Business Rules",
      ]

  - category: "Testing & Code Quality"
    icon: "5"
    skills:
      [
        "Vitest",
        "Testing Library",
        "jsdom",
        "ESLint",
        "Prettier",
      ]
---

# Web 3PL
### Frontend Ownership for Multi-Modal Logistics Operations
Web 3PL is an **internal logistics platform** used to manage **Third-Party Logistics (3PL)** operations for Indopaket, covering shipment workflows across **land (darat)** and **air (udara)** transportation.

This project became my first deep exposure to the **3PL domain**, where frontend work is tightly coupled with operational accuracy, data consistency, and system reliability. My role focused on frontend and UI ownership, translating complex logistics processes into interfaces that can be used safely in daily operations.

## Understanding the Domain
### Entering the 3PL Context
Working in 3PL required understanding that **land and air shipments behave very differently**.

Land shipments follow a more linear flow, while air shipments involve **multi-step state transitions** and incomplete data at early stages. These differences heavily influenced how the UI needed to present status, actions, and validation.

Rather than relying on generic dashboard patterns, the UI was shaped around **real operational sequences** and constraints.

## Core Application Flow
The application supports role-based access and multi-modal shipment workflows:
- Users authenticate and receive role-based access (Darat, Udara, Admin)
- Menu structure adapts dynamically based on assigned roles
- Each shipment type exposes only the actions valid for its current state

For air shipments, the UI supports a three-step POD workflow:
1. Create (Arrived) with placeholder data when flight details are not yet available
2. Update Flight (Departed) once flight information is confirmed
3. Upload POD (Delivered) as the final confirmation
The frontend enforces these transitions to prevent invalid actions and reduce operational error.
Detailed operational paths vary by role and are intentionally abstracted in this overview.

## Multi-Actor Usage Context

The platform is used by **multiple operational actors**, including internal teams and external logistics partners.

Access is strictly controlled through role-based permissions, ensuring each user only interacts with workflows relevant to their responsibility. This constraint influenced how navigation, actions, and validation were designed, prioritizing clarity while preventing unauthorized operations.


## Frontend Architecture & Reliability
**Custom API Client & Error Handling**

Instead of relying directly on Axios, the frontend uses a **custom API client built on native** fetch, allowing finer control over request behavior.

This includes:

- automatic JWT expiry checks before requests
- global handling for 401 responses with forced logout
- retry logic with exponential backoff for 502 / 503 / 504
- request timeouts using AbortController

These decisions were driven by the need for **predictable behavior in unstable network conditions**, common in operational environments.

**Handling Backend Inconsistencies**
The frontend also needed to handle **inconsistent field naming** between API endpoints (e.g. origin vs originHub). Mapping logic was centralized to keep UI components clean and prevent leakage of backend quirks into presentation logic.

## UI Design-to-Code
**Operational-first Interfaces**
All interfaces were designed for **operational users and logistics partners**, not public end customers. The priority was:
- clarity over aesthetics
- safe defaults over flexibility
- explicit states over hidden behavior
This resulted in data-heavy tables, form-driven workflows, and clear action boundaries based on shipment state.

**Forms, Validation & Config-driven Rules**
Forms were implemented using **React Hook Form** with **Zod validation**, enforcing business rules consistently across the UI.

Many constraints (date ranges, time limits, forward days) are **config-driven via environment variables**, allowing adjustments without touching UI logic.

## Testing & Maintainability
To support long-term stability, the project includes:
- unit and component tests using **Vitest** and **Testing Library**
- jsdom-based environment simulation
- linting and formatting enforced via ESLint, Prettier, and lint-staged
This helped keep the codebase predictable as features evolved.


## What Makes This Project Meaningful
- First hands-on experience with real 3PL logistics workflows
- Clear separation between land and air operational logic
- Frontend ownership in a data-heavy, role-sensitive system
- Emphasis on reliability over visual polish
- Practical problem-solving under real operational constraints
This project reinforced that good frontend work, especially in logistics, is less about visuals and more about **making complex systems behave safely and predictably every day**.

## Financial Reconciliation Awareness (Recon)

Beyond shipment workflows, the platform also considers **downstream financial reconciliation needs** tied to logistics operations.

While not all reconciliation features are exposed directly in the UI, frontend behavior is designed to support downstream finance processes, such as:
- ensuring shipment status transitions are deterministic and auditable  
- preventing invalid or duplicate POD submissions  
- aligning operational states with billing and settlement logic  

This awareness influenced how status locking, validation rules, and user permissions were implemented, reducing the risk of mismatched operational and financial data.

## Planned Enhancements – Photo-based POD & Documentation

This project is evolving. One of the planned improvements is enhancing **POD and documentation handling** from link-based inputs to **direct photo upload and capture**, especially for mobile usage.

The planned scope includes:
- direct photo capture or gallery selection on mobile devices  
- automatic image compression (≤ 2MB)  
- watermarking with AWB number and capture datetime  
- EXIF-based timestamp extraction for audit accuracy  

These enhancements aim to:
- reduce manual errors  
- improve auditability for both operations and finance  
- better support field usage in real delivery scenarios  

The implementation details are still being finalized and may change based on operational readiness and backend alignment.

Technical details are intentionally abstracted to respect system boundaries and operational confidentiality. Specific implementation approaches may evolve based on regulatory, operational, and partner readiness considerations.
