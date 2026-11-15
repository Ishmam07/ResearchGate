# Research Gate — React UI Prototype

A responsive React prototype for a university research-collaboration platform. It brings the proposed Research Gate architecture into a navigable front-end demo: public discovery, a student/faculty research workspace, project collaboration, verified feedback, portfolios, and administrator operations.

> **Prototype only:** all data is mocked in `src/data.js` and actions update local React state. There is no backend/API, database, actual authentication, email, institutional identity verification, file storage, or AI provider connected. Do not enter real credentials or sensitive research information.

## Preview without installing packages

The included `preview-standalone.html` and screenshots are reference snapshots from earlier UI passes. To see the current Research Gate brand, redesigned login/signup screens, full typography system and live guided-tour interactions, run the React app with Vite; the React implementation is the authoritative current UI.

## Run the React app locally

Requirements: Node.js 20.19+ (or a supported newer Node.js release) and npm.

From the project folder (the folder that contains `package.json`):

```bash
npm ci
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173/`.

### If the page is blank

1. Stop any old Vite server with `Ctrl+C`.
2. Confirm your terminal is in `Research Gate/researchconnect-ui` and that `package.json` and `src/App.jsx` are present.
3. Run `npm install` to reconcile dependencies with the included lockfile.
4. Run `npm run dev` again and read the terminal output. A compile error means the page will not render; fix the reported source error before refreshing.

The merge issue fixed in this release was a duplicate `OpportunityCard` component declaration in `src/App.jsx`. Vite reported `Identifier 'OpportunityCard' has already been declared`. That duplicate has been removed and the production build now passes.

For an optimized build:

```bash
npm run build
npm run preview
```

## Demo flows

- The public page lets visitors browse researcher profiles and open research opportunities.
- Use **Get started** to test the sign-up flow, or **Sign in** to open a role-selectable demo login.
- Login accepts any email containing `@` and a password with at least 8 characters. This is intentionally a front-end demo and does not authenticate an account.
- The role preview at the bottom of the sidebar switches between public, student, faculty and admin perspectives. Use the separate **Sign out** action beneath it to end the demo session and return to the public landing page.
- Try research search and filters, bookmarking, collaboration requests, opportunity applications, student-led project/opportunity creation, mock messaging, feedback submission, preferences, and admin review actions.
- Use the language control to switch between English and Bangla and the sun/moon control to switch between light and dark themes. The theme and language are saved in browser local storage.

## Architecture coverage

- **Public:** landing page, researcher discovery, opportunity marketplace and detail dialogs.
- **Researcher workspace:** dashboard, profiles, search/filter, explainable match recommendations, opportunities, collaboration requests, in-app message mock, projects, contribution-aware portfolio, post-collaboration feedback, saved items, notifications and settings/privacy.
- **Admin:** affiliation verification queue, reports/appeals, user restrictions, opportunity status moderation, research taxonomy management and audit log.
- **Governance cues:** affiliation status badges, private-by-default messaging notes, explainable match caveats, verified-collaboration feedback framing, input feedback and a clear prototype data notice.

The proposed architecture and workflow specification is bundled at `docs/ARCHITECTURE_WORKFLOW.md` and remains the source for later backend/domain work. This UI is not a security-reviewed production system.

## UI / UX decisions

- Flat color surfaces; **no gradients**. A cool-blue institutional palette distinguishes primary actions while keeping workspace surfaces calm.
- Responsive public layout, desktop workspace sidebar, mobile navigation drawer, tablet/mobile content grids.
- Clear status and action feedback, labelled controls, empty states, visible data provenance, context close actions, and inline/helpful validation.
- English/Bangla language toggle, light/dark palette, smooth transitions and a `prefers-reduced-motion` fallback.
- Mock actions are labelled as local-only; sensitive/unpublished work is not routed to an external AI system.

## UX references consulted

- Nielsen Norman Group, *10 Usability Heuristics for User Interface Design*: https://www.nngroup.com/articles/ten-usability-heuristics/
- GOV.UK Design System, *Error message*: https://design-system.service.gov.uk/components/error-message/
- Home Office User-Centred Design Manual, *Error messages*: https://design.homeoffice.gov.uk/accessibility/interactivity/error-messages
- React documentation, *Quick Start*: https://react.dev/learn

## Main source files

- `src/App.jsx` — main React UI, pages, state and local mock workflows.
- `src/data.js` — sample DIU-style researchers, opportunities, project and admin records. Names/details are illustrative mock data.
- `src/matching.js` — deterministic, transparent mock matching logic for the student and faculty demo profiles.
- `src/styles.css` — design tokens, light/dark themes, responsive layout, and transitions.
- `src/main.jsx` — React entry point.

## Suggested production next steps

1. Confirm the institution, affiliation-verification process, data access and moderation policy.
2. Connect the documented Spring Boot REST API and PostgreSQL/Flyway domain model.
3. Replace demo role switching with real authentication and server-side role/resource authorization.
4. Add secure uploads and a consent-governed profile/CV processing pipeline only after privacy rules are settled.
5. Validate the UI with students and faculty, including keyboard-only and screen-reader checks, before expanding the pilot.

## Explainable Best Fit (mock matching)

Every researcher and opportunity recommendation now has a **Why this fit?** disclosure. The prototype computes a deterministic mock score from four signals:

- Research-topic relevance: 35%
- Skills and complementarity: 30%
- Availability fit: 20%
- Goal alignment: 15%

Each disclosure shows the signal-level scores, a plain-language reason, and a caveat about what should be confirmed. Student and faculty demo profiles use different matching context. English and Bangla copy are supported.

This is deliberately a transparent, rule-based demonstration—not an AI result, not a validated recommendation model, and not a rating of a person's research ability. Replace `src/matching.js` with a backend-provided match/explanation response when the real matching service is implemented.


### Backend / AI integration contract

The UI currently consumes an explanation object with this shape: `score`, `summary` (`en`/`bn`), `factors` (key, score and localized detail), `caveat` (`en`/`bn`) and `seeker`. A future Spring Boot matching endpoint can return the same structure. The server can replace the mock scoring logic with rule-based/embedding/LLM-assisted matching without redesigning the explanation panel. Keep the factor definitions, version and provenance explicit so users can see whether a recommendation came from deterministic rules, embeddings or an AI explanation.


## Visual refresh (2026-11-15)

- Centered floating capsule navigation, inspired by the supplied reference screenshot.
- A compact quick-access navigation rail in the signed-in workspace for Discover, Opportunities, Projects and Requests; admin users get Overview, Verification and Reports.
- Revised cool-blue institutional palette for light and dark modes; no CSS gradients.
- More visible hover/focus/active states, larger click targets, responsive mobile navigation and reduced-motion support.
- The product workflow, mock modules and route destinations are preserved; changes in this pass are design and navigation presentation only.

For a no-install visual preview, open `preview-standalone.html` in a browser. The main React/Vite app is started with `npm install` then `npm run dev`.


## Navbar refinement (2026-11-15, follow-up)

- Reworked the public navbar to more closely match the supplied compact centered capsule reference: 1152px maximum width, 66px height, 18px radius, low-contrast border, and restrained shadow.
- Brand is now a compact circular mark plus a single-line wordmark; navigation labels are plain text with simple blue active/hover states.
- Kept the language switch, light/dark toggle, DIU network identity pill, sign-in and primary join action.
- Added a useful fourth anchor to the existing trust/value section; no product modules were removed.
- Tuned tablet/mobile wrapping and compact actions. Flat colors only; no gradients.

## Smart Matches page — organized UX update

The Smart Matches workspace has been reorganized into clear, task-oriented sections without removing the existing matching functionality:

- Overview cards for potential collaborators, relevant opportunities and the four matching signals.
- Quick-jump navigation to the idea planner, matching methodology, people and opportunities.
- Idea-to-team planner with clickable example prompts, 2–5 person team size selection, and structured role cards.
- A visual explanation of the mock matching weights: research-topic relevance (35%), skills and complementarity (30%), availability (20%), and goal alignment (15%).
- Researcher cards retain their individual “Why this fit?” explanations.
- Local people search, Student/Faculty filters and sort controls.
- Opportunity search and Best fit/deadline/title sorting.
- All new page labels are available in English and Bangla.

All recommendations remain deterministic mock data. The match percentages are compatibility suggestions for the current demo profile and are not AI outputs or evaluations of a person's research ability.


## Research Gate Guide Assistant

The prototype includes a role-aware guided tour for student, faculty and administrator workspaces. The first time a role enters the workspace in a browser, a welcome panel opens automatically. The user chooses Start, then the assistant points to the next navigation item and waits for the user to click it. After the page opens, it highlights the primary work area and explains what the user can do there. Dismissal/completion is remembered per role in local browser storage. The animated assistant stays at the bottom-right corner and can restart the relevant tour at any time. The guide is scripted mock UI guidance; it is not connected to an AI service.


## First-time guided onboarding

- New student, faculty or admin demo sessions automatically open a role-specific guided tour the first time that role is entered in this browser.
- The student/faculty tour covers the dashboard, discovery, Smart Matches, opportunities, projects, requests, messages, feedback, portfolio, saved items, notifications and settings.
- The administrator tour covers the overview, affiliation verification, reports/appeals, user management, opportunity moderation, research taxonomy, audit log and settings.
- The public visitor guide can be opened manually from the same floating assistant.
- The animated assistant stays at the bottom-right corner. Select it at any time to restart the relevant guide.
- Completion/dismissal is remembered per role using local browser storage. Clear `research-gate-guide-v2-<role>-completed` in local storage to test the automatic first-run tour again.
- The assistant is scripted, role-aware UI guidance only. It is not an AI chatbot and does not send data to an external service.

## Brand and typography

The visible product name is **Research Gate**. The interface uses a shared DM Sans / Manrope / Noto Sans Bengali type system with an enlarged form scale, consistent labels, clearer field hierarchy and responsive login/signup layouts.

## Interactive role-aware guide assistant

- First-time Student, Faculty and Admin demo sign-ins open a welcome guide for that role.
- The guide does not change pages automatically. It points to the relevant navigation item with an animated hand and waits for the user to click it.
- After the user opens the page, the guide highlights that page's primary work area and explains what the user can do there.
- Users can move to the next guided page, go back, skip the tour, or restart it from the persistent bottom-right assistant.
- Public visitors can start a shorter discovery tour from the same assistant.
- English and Bangla guide copy is available.

This is a scripted front-end guide using mock content; it is not an AI chatbot.

## Typography refinement (v1.1)

- Increased base body text and common UI labels for easier reading.
- Strengthened visual hierarchy for page titles, section headings, researcher/opportunity titles, match scores and primary actions.
- Increased Smart Matches planner, methodology and recommendation explanation readability.
- Improved login/signup form labels, inputs, helper text and role-card typography.
- Increased guided assistant copy size while retaining the existing role-aware click-through tour.
- Added mobile-specific typography sizes to keep dense screens readable without causing overflow.
- No product features, routes, mock data, matching logic or guided-tour behavior were removed or changed.
