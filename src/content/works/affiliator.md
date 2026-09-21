---
title: "Indopaket Affiliator — Web"
description: "Designing and building the web experience for Indopaket affiliates, from setting up an account to sharing a code and checking commission payouts."
pubDate: "Sept 2026"
icon: "heroicons:user-group"
tags: ["UI Design", "Frontend Development", "React", "Web UI"]
identity: "UX Engineer · Frontend"
role: "UI design · Slicing / Frontend implementation"
delivery: "React · Web · Launch: late Sept 2026"
pageSkills:
  - category: "Interface Design"
    icon: "2"
    skills: ["Onboarding", "Dashboard UI", "Responsive Layouts", "Interaction States"]
  - category: "Frontend Implementation"
    icon: "3"
    skills: ["React", "Vite", "JavaScript", "Tailwind CSS", "API Integration"]
---

## From signing up to receiving a commission

Indopaket Affiliator lets people earn commission by sharing a referral code for Indopaket's shipping services. The web app is where they set up their account, manage that code, and keep track of their earnings.

I worked on the **UI design and slicing/frontend implementation**. That included turning the screens into responsive React components and handling the states people encounter between steps: incomplete profiles, OTP errors, empty histories, and payouts that haven't gone through yet.

**Web and Mobile are planned to go live in late September 2026.** This case study covers the web app. The [mobile UI is a separate piece of work](/works/affiliator-mobile/).

## Getting the account ready

There is more to joining than creating a password. Affiliates also need to complete their profile, provide identity and bank details, and create an affiliate code.

Registration starts with a name and email, followed by OTP verification and a password. Profile setup then separates identity, bank information, promotion details, and the affiliate code into steps, so people can work through one part at a time.

If someone reaches the dashboard before finishing, they see what is still missing: **complete the profile, upload an ID, and create a code**. The dashboard gives them a way back into setup instead of showing an empty account with no explanation.

## Making the code easy to find

Once the account is ready, the affiliate code has a dedicated place on the dashboard. Earnings and recent transactions sit alongside it, keeping the everyday tasks close together.

There is also a separate page for managing the code. Editing has rules and a waiting period, so the interface needs to explain when a change is available. A disabled action alone wouldn't tell someone why they have to wait.

## Explaining where the money is

The payout history was one of the more detailed parts of the interface. A commission earned this month isn't necessarily the amount transferred this month: unpaid balances can carry over from earlier periods.

The UI distinguishes **earnings for a period, the accumulated balance, and transfer status**. When the balance is below the payout minimum, it shows how much more is needed. The dashboard also includes the next payout information, so people don't have to look through their history just to find it.

Several periods with no new activity can be grouped into one summary. This keeps a quiet account from filling up with repeated rows that all say the same thing.

History can be filtered by period and status, or sorted by date and amount. On desktop, a table makes it easier to compare periods. On smaller screens, the same information becomes cards, with filters and sorting in sheets.

## Taking the design into code

I implemented the web UI with **React, Vite, and Tailwind CSS**. Shared form controls, status messages, and layout components keep the screens consistent as people move between registration, their dashboard, and account settings.

The work also includes the less visible parts of a screen: loading feedback while data is fetched, validation when a field needs attention, and empty or error states when there is nothing to show. These matter just as much as the populated dashboard.

Responsive layouts are part of this web implementation. They are separate from the dedicated Affiliator Mobile UI.

## Where the project stands

The web implementation covers registration and account recovery, profile setup, the dashboard, affiliate-code management, commission and payout history, and account settings. FAQ, contact, and policy pages are available without signing in.

Launch is planned for **late September 2026**, alongside Mobile, so there are no post-launch results to share yet.

After launch, I'd want to check two things with users: whether they know what to do when account setup is incomplete, and whether the payout history clearly explains the difference between money earned and money transferred.
