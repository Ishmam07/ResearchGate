# Research Gate

## Product Architecture & Workflow Design

**Status:** Proposed architecture --- version 1.0\
**Scope:** University-wide research collaboration platform\
**Initial target:** Daffodil International University (DIU), subject to
institutional approval\
**Reference inspiration:** ProfReach / Find My Professor-style professor
discovery, profile intake, research matching and outreach assistance\
**Important note:** This document combines the product ideas discussed
with a proposed implementation architecture. The linked ProfReach site's
full interactive behavior and internal implementation have not been
independently verified. This document does not claim to reproduce its
source code or hidden architecture.

------------------------------------------------------------------------

## 1. Executive summary

Research Gate is a university-focused platform designed to help
students and faculty discover suitable research collaborators, form
interdisciplinary teams, publish research opportunities, coordinate
projects, document contributions and exchange fair feedback after
collaboration.

The product should cover the **full research collaboration lifecycle**:

1.  Create and verify a researcher identity.
2.  Build a structured research profile.
3.  Discover people, projects and opportunities.
4.  Find collaborators through keyword search and explainable matching.
5.  Invite people and form a project team.
6.  Agree on responsibilities, expected deliverables and working norms.
7.  Coordinate the project and record contributions.
8.  Complete the project and confirm participation.
9.  Exchange structured feedback and, where appropriate, public
    reputation signals.
10. Build a verifiable research portfolio and discover future
    opportunities.

The main differentiator is not simply an AI professor finder. It is a
**trusted collaboration network for a university**, supporting
student-to-faculty, student-to-student, faculty-to-student and
faculty-to-faculty collaboration.

### Product principles

-   Research fit is not the same as name/title similarity.
-   Complementary skills can be as valuable as overlapping interests.
-   Real collaboration evidence matters more than self-reported stars.
-   Ratings must be tied to verified collaboration, not open public
    voting.
-   Faculty and students should both have agency, safeguards and
    reporting/appeal options.
-   AI recommendations must explain their reasons and must not make
    high-impact decisions automatically.
-   User data, CVs, unpublished ideas and project files must be private
    by default.
-   Start with a focused MVP; add sophisticated AI and analytics after
    validating actual use.

------------------------------------------------------------------------

## 2. Goals and non-goals

### Goals

-   Help researchers find collaborators across departments.
-   Let faculty and students post opportunities and recruit team
    members.
-   Support both one-to-one matching and team formation.
-   Make skills, research interests, availability and expectations
    discoverable.
-   Build trustworthy evidence of completed collaboration and
    contributions.
-   Provide fair, context-aware feedback after a project.
-   Reduce the friction of contacting potential collaborators.
-   Create a foundation for future AI-assisted research discovery.

### Non-goals for the first release

-   Replacing the university's official student information system.
-   Guaranteeing that a research idea is novel, publishable or
    scientifically correct.
-   Automatically deciding authorship, grades, hiring, scholarships or
    academic standing.
-   Automatically sending unsolicited emails to faculty.
-   Publicly ranking every student or faculty member using one global
    score.
-   Hosting sensitive research datasets or regulated personal data
    before security and governance requirements are defined.
-   Claiming that a profile, publication or skill is verified unless the
    verification method is recorded.

------------------------------------------------------------------------

## 3. User roles and permissions

### 3.1 Student researcher

Can: - Create a profile and list interests, skills, goals and
availability. - Search for students, faculty, research groups and
opportunities. - Create a student-led opportunity or project. - Invite
other students and, where allowed, contact faculty. - Apply to
faculty-created opportunities. - Accept, reject or withdraw
collaboration requests. - Participate in project planning and record
deliverables. - Give and receive eligible post-collaboration feedback. -
Report abuse, inaccurate profile information or unfair feedback. -
Control profile visibility and public contact details.

### 3.2 Faculty researcher

Can: - Maintain a faculty profile, research areas, publications and
mentoring interests. - Create research opportunities and define desired
skills and commitment. - Review applications and invite collaborators. -
Form or lead a project team. - Confirm student participation and
deliverables. - Provide structured feedback to collaborators. - Receive
feedback on mentoring and collaboration experience. - Report
inappropriate conduct or disputed records.

Faculty affiliation should be verified through an institution-approved
process; a university email alone may not prove current faculty status.

### 3.3 Research team/project lead

This is a project-level responsibility, not necessarily a separate
global account role. A student can lead a student-created project. A
faculty member can lead a faculty-created project. The lead can manage
membership, tasks, milestones and project records within the project's
permissions.

### 3.4 Platform administrator

Can: - Review reports and appeals. - Manage role/affiliation
verification. - Moderate opportunities and profiles under a documented
policy. - Investigate suspicious ratings and abuse. - Suspend or
restrict accounts with an auditable reason. - Manage taxonomy, system
configuration and institutional settings.

Admin access should be least-privilege, logged and limited.
Administrators should not casually read private project content or
confidential feedback.

------------------------------------------------------------------------

## 4. Core product modules

### Module A --- Identity and verification

-   Sign-up and sign-in.
-   University email verification.
-   Role and affiliation verification.
-   Account recovery and session management.
-   Optional admin/faculty approval for sensitive roles.
-   Profile visibility and consent controls.

### Module B --- Researcher profiles

Suggested fields: - Name and verified affiliation. - Department, program
and current academic level, where appropriate. - Research interests and
topic tags. - Skills and self-assessed proficiency. - Research goals:
learn, find a mentor, join a project, recruit a teammate, or collaborate
as a faculty member. - Methods and tools. - Publications, preprints,
projects and portfolio links. - Availability and preferred commitment. -
Collaboration preferences: remote/in-person, team size, mentoring
preference. - Languages and accessibility preferences, where voluntarily
supplied. - Profile completeness and verification indicators.

Do not require a publication record: new researchers must be able to
participate.

### Module C --- Research opportunity marketplace

Opportunity fields: - Title, abstract and research area. - Problem
statement and current project stage. - Required and optional skills. -
Expected tasks and deliverables. - Time commitment and duration. -
Available roles and number of openings. - Lead and affiliation. -
Application questions and deadline. - Data/confidentiality
restrictions. - Authorship or credit expectations, described as
provisional and subject to applicable research policy. - Status: draft,
open, paused, filled, completed, cancelled or archived.

A student should be able to create an opportunity and invite another
student without needing a faculty member to initiate the project.
Faculty should be able to create opportunities for student recruitment.

### Module D --- Search and discovery

-   Keyword search.
-   Filters for department, role, skills, research topic, availability
    and opportunity status.
-   Saved searches and bookmarked profiles/opportunities.
-   Similar researcher suggestions.
-   Cross-department discovery.
-   Accessible explanations for why a result is relevant.

### Module E --- Matching and recommendations

Use multiple signals: 1. Research-topic relevance. 2. Required skill
coverage. 3. Complementary skills. 4. Project goals and desired role. 5.
Availability and commitment. 6. Preferred collaboration style. 7.
Relevant experience and evidence, where available. 8. Explicit user
preferences and exclusions.

Every recommendation should include reasons, such as: - "Both list
medical image analysis." - "You have Python/ML experience; the project
needs model development." - "Your stated availability overlaps with the
opportunity's expected schedule."

Do not use a single opaque score as the only explanation. Let users
dismiss recommendations and correct their profile.

### Module F --- Collaboration requests and messaging

-   Request to collaborate with a short purpose and relevant context.
-   Apply to an opportunity.
-   Invite another student to a student-led project.
-   Accept, reject, withdraw or ask for more information.
-   Basic in-app messaging after a permitted connection or application.
-   Block/report functionality and rate limits.
-   Notification preferences.
-   Optional outreach draft assistance.

AI-generated messages must be drafts for user review. Do not auto-send
unsolicited outreach in the MVP.

### Module G --- Project workspace

-   Project overview and member list.
-   Roles and responsibilities.
-   Tasks, milestones and deadlines.
-   Meeting notes or links to external collaboration tools.
-   Deliverable links and completion confirmations.
-   Contribution log with evidence references.
-   Project status and completion workflow.
-   Access controls for unpublished research and project files.

Do not build a full GitHub/Google Drive replacement in the first
release. Link to existing tools where suitable and protect private URLs.

### Module H --- Contribution and reputation

-   Project participation confirmation.
-   Contribution claims and collaborator confirmation.
-   Structured feedback after a verified collaboration.
-   Separate criteria for different relationship types.
-   Public profile summary only where policy and consent permit.
-   Private feedback separated from public reputation.
-   Report, moderation, appeal and correction workflow.
-   Anti-retaliation and anti-brigading controls.

### Module I --- Research portfolio

-   Completed projects.
-   Role and responsibilities.
-   Confirmed deliverables and links.
-   Publications/preprints where applicable.
-   Skills demonstrated through evidence.
-   Collaboration history and mentoring experience.
-   Distinguish self-reported, collaborator-confirmed and externally
    verified claims.

### Module J --- AI assistance

Potential later features: - CV/profile extraction with user review. -
Natural-language research search. - Semantic topic matching. - Skill and
task extraction from opportunity descriptions. - Research
idea-to-skill/team requirement breakdown. - Drafting collaboration
invitations. - Explaining match recommendations. - Profile improvement
suggestions.

AI must not invent publications, credentials, citations or project
outcomes. Extracted profile data must be confirmed by the user.
Unpublished research content should not be sent to third-party AI
providers without explicit, informed consent and an appropriate data
policy.

### Module K --- Administration and governance

-   Role/affiliation verification queue.
-   Reports and appeals.
-   Opportunity moderation.
-   Rating dispute handling.
-   Account restriction history.
-   Audit logs.
-   Data export/deletion request handling.
-   Taxonomy management.
-   Aggregated platform analytics with privacy safeguards.

------------------------------------------------------------------------

## 5. End-to-end workflows

### Workflow 1 --- Student onboarding

1.  Student creates an account.
2.  Verifies university email.
3.  Completes basic identity and department information.
4.  Adds research interests, skills, goals and availability.
5.  Optionally adds CV, publications and portfolio links.
6.  Reviews extracted data if AI parsing is used.
7.  Chooses profile visibility and contact preferences.
8.  System marks each claim with its verification status.
9.  Student reaches a personalized discovery page.

**Success condition:** The student can search and be discovered without
needing publications or a long CV.

### Workflow 2 --- Faculty onboarding

1.  Faculty account is created.
2.  Institution-approved process confirms faculty affiliation.
3.  Faculty adds research topics, publications, methods and mentoring
    interests.
4.  Faculty specifies whether they are open to supervision,
    collaboration or recruiting project members.
5.  Faculty can publish an opportunity or remain discoverable only.
6.  Faculty controls visibility of contact details and project
    information.

### Workflow 3 --- Find a collaborator

1.  User searches by topic or describes their goal in natural language.
2.  System retrieves relevant profiles and opportunities.
3.  Filters narrow results.
4.  Matching engine ranks candidates using relevance, skills,
    availability and goals.
5.  Each result shows understandable reasons and any limitations.
6.  User views profile and public evidence.
7.  User sends a collaboration request or applies to an opportunity.
8.  Recipient accepts, rejects or asks a question.
9.  On acceptance, the platform opens the permitted
    project/collaboration space.

### Workflow 4 --- Student creates a project and recruits another student

1.  Student selects "Create opportunity/project."
2.  Adds problem statement, desired skills, tasks, timeline and expected
    commitment.
3.  Defines who can see the opportunity and what information is public.
4.  Platform checks required fields and moderation rules.
5.  Student publishes the opportunity.
6.  Matching system recommends potential collaborators, including
    students in other departments.
7.  Student sends invitations or reviews applications.
8.  Invited students accept or decline.
9.  Project lead and members agree on roles, deliverables, communication
    and credit expectations.
10. Work begins after membership and access permissions are established.

Faculty involvement may be desirable for some research projects, but
should not be assumed to be mandatory for every student-to-student
collaboration. University policy and research ethics requirements still
apply.

### Workflow 5 --- Faculty creates a research opportunity

1.  Faculty creates an opportunity with project context and required
    roles.
2.  Faculty defines required skills, expected time commitment and
    selection criteria.
3.  System recommends potentially suitable students.
4.  Students apply or receive invitations.
5.  Faculty reviews applications and communicates decisions.
6.  Selected members accept project terms and access rules.
7.  Project workspace opens.

### Workflow 6 --- Project management and contribution evidence

1.  Team records roles and responsibilities.
2.  Tasks and milestones are assigned.
3.  Members add deliverable links or completion evidence.
4.  Collaborators can comment or request corrections.
5.  Lead confirms project milestones without having unilateral power to
    rewrite another member's contribution history.
6.  At completion, members confirm participation and record any
    unresolved disagreement.
7.  Project becomes eligible for feedback after required confirmations.

### Workflow 7 --- Ratings and feedback

1.  Project reaches a defined completion state.
2.  Platform identifies eligible participants based on verified
    membership and minimum participation rules.
3.  Each eligible participant receives a private feedback invitation.
4.  Feedback uses criteria appropriate to the relationship.
5.  Where practical, use a simultaneous submission window so one
    person's review does not pressure the other.
6.  Feedback is screened for abuse, personal attacks and private
    information.
7.  Public summary, if enabled, is generated according to the
    transparency policy; detailed written feedback may remain private.
8.  Users can report a review and appeal factual inaccuracies.
9.  Admin reviews disputed cases with an audit trail.
10. Confirmed collaboration and appropriate contribution evidence may
    appear on the researcher portfolio.

A project should not automatically publish a low score simply because
one collaborator submitted it. Ratings should never be a substitute for
due process.

------------------------------------------------------------------------

## 6. Rating and reputation policy

### Recommended model

Use a **verified collaboration reputation**, not an unrestricted
five-star social rating system.

Potential dimensions: - Work quality relative to agreed
responsibilities. - Reliability and commitment. - Communication. -
Teamwork. - Technical/research contribution. - Mentoring and guidance,
where evaluating a mentor. - Clarity of expectations and fair credit,
where relevant.

The form should adapt to the relationship: - Faculty → student:
contribution, reliability, teamwork and agreed deliverables. - Student →
faculty: guidance, communication, availability and credit practices. -
Student → student: agreed contribution, reliability, communication and
teamwork. - Faculty → faculty: collaboration, communication and delivery
against agreed responsibilities.

### Rules and safeguards

-   Only verified project participants can submit feedback.
-   Require a minimum participation threshold; define the threshold
    after piloting.
-   One feedback submission per eligible reviewer per project and review
    type.
-   Do not allow open reviews from people who never collaborated.
-   Do not expose private feedback without a clear policy and consent.
-   Avoid a single global "best researcher" ranking.
-   Show rating count and context; avoid over-interpreting tiny samples.
-   Consider minimum sample thresholds before showing aggregate scores.
-   Provide report, moderation, appeal and correction routes.
-   Prohibit retaliation, coercion, discriminatory comments and review
    trading.
-   Keep an audit trail for moderation decisions.
-   Ensure students can report concerns about faculty without
    unreasonable fear of retaliation.
-   Make clear that feedback is peer experience, not a formal academic
    evaluation.
-   Never use platform ratings alone for grades, hiring, scholarships or
    academic discipline.

### Better public reputation signals

Prefer a combination of: - Number of verified completed
collaborations. - Project roles and confirmed deliverables. - Skills
demonstrated with evidence. - Mentoring/collaboration history. -
Aggregate structured feedback only where enough data exists.

Do not equate quantity of projects with quality or use publication count
as the only measure of research ability.

------------------------------------------------------------------------

## 7. Proposed technical architecture

### 7.1 Architecture style

Start with a **modular monolith** rather than microservices. This
reduces operational complexity and helps a small team deliver a
complete, secure MVP. Split services only when there is measured need.

``` text
Web Client
   |
   | HTTPS / REST
   v
Spring Boot Application
   |
   +-- Authentication & Authorization
   +-- Researcher Profiles
   +-- Search & Discovery
   +-- Matching & Recommendations
   +-- Opportunities & Applications
   +-- Collaboration Requests & Messaging
   +-- Projects, Tasks & Milestones
   +-- Contributions & Feedback
   +-- Notifications
   +-- Administration & Audit
   |
   +-----------------------+
   |                       |
   v                       v
PostgreSQL             File/Object Storage
   |                   CVs and permitted files
   |
   +-- pgvector (optional, when semantic search is introduced)

Optional later:
Background worker / queue --> embeddings, email, notifications, document processing
External AI provider or self-hosted model --> only approved, consented data
```

### 7.2 Suggested stack

-   Frontend: React with TypeScript, or another framework the team can
    maintain.
-   Backend: Java + Spring Boot REST API.
-   Security: Spring Security; secure session or token approach selected
    deliberately.
-   Database: PostgreSQL.
-   Schema migration: Flyway.
-   Search: PostgreSQL full-text search initially; `pgvector` for
    embeddings if justified.
-   File storage: private object storage or controlled file storage, not
    public arbitrary file paths.
-   Background jobs: begin with simple asynchronous processing where
    appropriate; add a durable queue when needed.
-   Email: verified sender and controlled notification service.
-   AI: embedding model for semantic retrieval; optional LLM for parsing
    and explanation.
-   Deployment: managed hosting/container deployment with secrets stored
    outside source control.
-   Observability: structured logs, health checks, metrics and error
    reporting.

Redis, Kafka and microservices are not mandatory for the first version.
Introduce them only for demonstrated caching, rate-limiting, durable
event processing or throughput requirements.

### 7.3 Backend module boundaries

Suggested Java package structure:

``` text
com.researchconnect
├── auth
├── identity
├── profile
├── taxonomy
├── discovery
├── matching
├── opportunity
├── application
├── collaboration
├── messaging
├── project
├── contribution
├── feedback
├── portfolio
├── notification
├── moderation
├── admin
├── audit
└── common
```

Each module should own its business rules. Controllers should remain
thin; validation and authorization must be enforced server-side, not
only in the UI.

------------------------------------------------------------------------

## 8. Initial domain model / database design

The following is a logical model, not final migration SQL.

### Identity and profiles

-   `users`: id, email, password hash or external identity reference,
    account status, created_at.
-   `user_roles`: user_id, role.
-   `affiliations`: user_id, institution, department/program,
    affiliation type, verification status, verified_at.
-   `researcher_profiles`: user_id, biography, goals, visibility
    settings, availability, collaboration preferences.
-   `research_topics`: id, canonical name, parent topic.
-   `profile_topics`: profile_id, topic_id, proficiency/interest level,
    source.
-   `skills`: id, canonical name, category.
-   `profile_skills`: profile_id, skill_id, self-assessed level,
    evidence status.
-   `publications`: id, owner_id, title, DOI/URL, publication status,
    verification source.
-   `portfolio_items`: id, owner_id, item type, description, URL,
    visibility, verification status.

### Opportunities and discovery

-   `opportunities`: id, creator_id, title, description, project stage,
    status, deadline, commitment, visibility.
-   `opportunity_roles`: id, opportunity_id, role name, openings,
    responsibilities.
-   `opportunity_required_skills`: opportunity_role_id, skill_id,
    requirement level.
-   `opportunity_topics`: opportunity_id, topic_id.
-   `applications`: id, opportunity_id, applicant_id, message, status,
    created_at.
-   `bookmarks`: user_id, target_type, target_id, created_at.
-   `saved_searches`: user_id, query/filter configuration, notification
    preference.

### Collaboration and project workspace

-   `collaboration_requests`: id, requester_id, recipient_id or
    opportunity_id, message, status, timestamps.
-   `projects`: id, opportunity_id (optional), lead_id, title,
    description, status, visibility.
-   `project_members`: project_id, user_id, project_role,
    membership_status, joined_at, left_at.
-   `project_agreements`: project_id, version, responsibilities,
    timeline, credit/authorship discussion, accepted_at.
-   `tasks`: id, project_id, assignee_id, title, status, due_at.
-   `milestones`: id, project_id, title, due_at, status.
-   `deliverables`: id, project_id, creator_id, description, secure
    URL/reference, visibility, confirmation status.
-   `contribution_records`: id, project_id, contributor_id, claim,
    evidence reference, confirmation status, dispute status.
-   `messages`: id, conversation_id, sender_id, body/reference,
    created_at; add retention controls.
-   `notifications`: id, recipient_id, type, payload reference, read_at,
    created_at.

### Feedback, trust and governance

-   `feedback_requests`: id, project_id, reviewer_id, reviewee_id,
    review type, status, deadline.
-   `feedback_submissions`: id, feedback_request_id, criteria scores,
    private comments, visibility state, submitted_at.
-   `public_reputation_summaries`: derived aggregates only; do not treat
    as the source of truth.
-   `reports`: id, reporter_id, target type/id, reason, status,
    created_at.
-   `appeals`: id, report/review reference, appellant_id, reason,
    status.
-   `moderation_actions`: id, moderator_id, target reference, action,
    reason, timestamp.
-   `verification_records`: id, user_id, claim type, method,
    reviewer/system, status, timestamps.
-   `audit_events`: actor, action, target, timestamp, request/context
    reference; avoid logging secrets or sensitive content.

### Relationships and constraints

-   A user may have multiple skills and research topics.
-   An opportunity has one creator and can receive many applications.
-   A project has multiple members and a project-level role for each.
-   A student can create a project and invite another student.
-   A project can exist without a faculty member, subject to university
    rules.
-   Feedback must reference a verified eligible collaboration.
-   Unique constraints should prevent duplicate applications/feedback
    where appropriate.
-   Soft deletion or archival should preserve necessary project history
    while respecting data deletion policies.
-   Use foreign keys, indexes and transactions for state-changing
    operations.
-   Enforce visibility and membership checks for every private object.

------------------------------------------------------------------------

## 9. Matching algorithm design

### Version 1 --- Transparent rules-based matching

Use filters first: - Eligible role and affiliation. - Topic overlap or
required topic. - Required skill constraints. - Availability and project
status. - User visibility and blocking preferences.

Then compute a configurable score from normalized signals. An
illustrative formula:

``` text
match_score =
    topic_relevance       * 0.30
  + required_skill_fit    * 0.25
  + complementary_skills  * 0.15
  + goal_alignment        * 0.10
  + availability_fit      * 0.10
  + experience_evidence   * 0.10
```

These weights are starting hypotheses, not validated truth. Tune them
with user feedback and evaluation. Some criteria, such as required
eligibility or a user block, should be hard constraints rather than
score components.

### Version 2 --- Semantic search

-   Generate embeddings for consented profile summaries, topic
    descriptions and opportunities.
-   Retrieve semantically relevant candidates.
-   Combine semantic similarity with structured constraints and rules.
-   Show the main reasons for each match.
-   Allow users to correct extracted interests and dismiss unsuitable
    results.

### Version 3 --- Team formation

For a project, calculate coverage of required skills and roles across
the proposed team. Reward complementary skills and sufficient coverage;
penalize missing mandatory skills, unavailable members and conflicts in
stated goals. Avoid optimizing solely for profile similarity.

### Evaluation

-   Ask users to judge whether recommendations are relevant.
-   Measure request acceptance and completed collaboration, not just
    clicks.
-   Check whether recommendations unfairly favor seniority, popularity
    or publication volume.
-   Compare against keyword search and simple baselines.
-   Track cold-start performance for students without publications.
-   Provide a way to report poor matches and update profile data.

------------------------------------------------------------------------

## 10. API design sketch

Use versioned REST endpoints; the list below is illustrative.

### Authentication and identity

-   `POST /api/v1/auth/register`
-   `POST /api/v1/auth/verify-email`
-   `POST /api/v1/auth/login`
-   `POST /api/v1/auth/logout`
-   `GET /api/v1/me`
-   `GET /api/v1/profiles/{profileId}`
-   `PATCH /api/v1/me/profile`

### Discovery and matching

-   `GET /api/v1/researchers`
-   `GET /api/v1/researchers/{profileId}/matches`
-   `GET /api/v1/opportunities`
-   `GET /api/v1/opportunities/{opportunityId}`
-   `GET /api/v1/recommendations`

### Opportunities and applications

-   `POST /api/v1/opportunities`
-   `PATCH /api/v1/opportunities/{opportunityId}`
-   `POST /api/v1/opportunities/{opportunityId}/applications`
-   `GET /api/v1/me/applications`
-   `POST /api/v1/applications/{applicationId}/decision`

### Collaboration and projects

-   `POST /api/v1/collaboration-requests`
-   `POST /api/v1/collaboration-requests/{requestId}/decision`
-   `POST /api/v1/projects`
-   `GET /api/v1/projects/{projectId}`
-   `POST /api/v1/projects/{projectId}/members`
-   `POST /api/v1/projects/{projectId}/tasks`
-   `POST /api/v1/projects/{projectId}/deliverables`
-   `POST /api/v1/projects/{projectId}/contributions`

### Feedback and trust

-   `POST /api/v1/projects/{projectId}/complete`
-   `GET /api/v1/me/feedback-requests`
-   `POST /api/v1/feedback-requests/{requestId}/submit`
-   `POST /api/v1/reports`
-   `POST /api/v1/feedback/{feedbackId}/appeals`

### Administration

-   `GET /api/v1/admin/reports`
-   `POST /api/v1/admin/verifications/{verificationId}/decision`
-   `POST /api/v1/admin/moderation-actions`

For every endpoint, define request/response DTOs, validation, error
codes, authorization rules, pagination, rate limits and audit
requirements before implementation. Never trust a user ID, role, project
membership or owner ID supplied by the client without checking it
against the authenticated principal and database state.

------------------------------------------------------------------------

## 11. Security, privacy and research integrity

Security must be part of each feature, not a final patch.

### Authentication and authorization

-   Use secure password hashing if managing passwords.
-   Verify email and affiliation claims separately.
-   Use least-privilege role and resource authorization.
-   Enforce object-level access checks to prevent IDOR/BOLA.
-   Protect sessions/tokens, logout and account recovery.
-   Add rate limits to login, messaging, invitations, uploads and
    feedback submission.
-   Require stronger safeguards for administrative actions.

### Input and file safety

-   Validate and normalize all input on the server.
-   Use parameterized database access.
-   Escape untrusted output and apply appropriate XSS protections.
-   Protect state-changing requests against CSRF when cookie-based
    sessions are used.
-   Restrict upload types, size and storage location; scan files where
    available.
-   Never execute uploaded files.
-   Prevent unsafe URL fetching/SSRF if external profile or publication
    URLs are processed.
-   Keep API keys and database secrets out of source control.

### Privacy

-   Private-by-default settings for unpublished projects, messages and
    detailed feedback.
-   Separate public profile data from internal verification data.
-   Explicit consent before sending CV/profile content to third-party AI
    services.
-   Define data retention, export and deletion processes.
-   Avoid storing unnecessary sensitive personal data.
-   Do not expose private contact details through search APIs.
-   Do not include secrets, CV contents or private message bodies in
    routine logs.

### Abuse and fairness

-   Block, report and appeal controls.
-   Anti-spam and invitation limits.
-   Verified-collaboration requirement for feedback.
-   Review dispute handling and moderator audit logs.
-   Explain recommendation factors and allow profile corrections.
-   Do not let AI autonomously reject people from academic
    opportunities.
-   Publish community standards and review/appeal policies.

### Research governance

-   Clearly distinguish idea sharing from confidential research.
-   Provide project-level access control.
-   Encourage teams to agree on responsibilities, data access and credit
    expectations before work starts.
-   Require appropriate institutional ethics approval where research
    activities need it.
-   Do not claim the platform's records settle authorship, misconduct or
    intellectual-property disputes.

------------------------------------------------------------------------

## 12. Notifications and background processing

Initial notifications: - Email verification and account security
alerts. - Collaboration request received. - Application status
changed. - Project invitation and membership updates. - Task/milestone
reminders. - Feedback window opened/closing. - Relevant saved-search
opportunity alert.

Start with a simple, reliable implementation. If processing volume
increases: - Move email and AI jobs to a durable queue. - Make handlers
idempotent so retries do not duplicate messages or actions. - Record job
state and failures. - Use an outbox pattern if database state changes
must reliably trigger events. - Add Redis or Kafka only when justified
by measured requirements.

------------------------------------------------------------------------

## 13. MVP delivery roadmap

### Phase 0 --- Validation and governance

-   Interview students and faculty.
-   Validate the main collaboration pain points.
-   Confirm university policy, data access and affiliation verification.
-   Decide profile visibility, feedback policy and moderation process.
-   Recruit a small pilot group.

**Exit condition:** Clear problem statement, approved pilot scope and
agreed privacy/feedback rules.

### Phase 1 --- Secure foundation

-   Repository and environments.
-   Spring Boot, PostgreSQL and Flyway.
-   Authentication, email verification and role/affiliation model.
-   Base security and audit logging.
-   CI and basic automated tests.

**Exit condition:** Secure registration and role-appropriate access work
reliably.

### Phase 2 --- Profiles and discovery

-   Student/faculty profiles.
-   Topics, skills and availability.
-   Researcher directory.
-   Search and filters.
-   Profile visibility settings.

**Exit condition:** Users can discover suitable people using structured
search.

### Phase 3 --- Opportunities and requests

-   Create and manage opportunities.
-   Applications and invitations.
-   Student-created projects and student-to-student invites.
-   Request accept/reject workflow.
-   Notifications.

**Exit condition:** Users can form a collaboration without administrator
intervention in ordinary cases.

### Phase 4 --- Project workspace

-   Members and roles.
-   Tasks, milestones and deliverables.
-   Contribution records and confirmation.
-   Project completion flow.

**Exit condition:** A project can move from formation to documented
completion.

### Phase 5 --- Feedback and portfolio

-   Eligible feedback requests.
-   Relationship-appropriate criteria.
-   Privacy controls, moderation, reports and appeals.
-   Verified collaboration history and portfolio signals.

**Exit condition:** Feedback is tied to real collaboration and disputes
have a defined path.

### Phase 6 --- Matching and AI

-   Baseline matching.
-   Explainable recommendations.
-   Semantic search/embeddings.
-   Optional CV parsing and draft assistance.
-   Quality evaluation and bias checks.

**Exit condition:** Recommendations improve on a baseline and users
understand why they were suggested.

### Phase 7 --- Pilot, measure and improve

-   Run a pilot with one department or a few research groups.
-   Interview participants.
-   Fix onboarding and matching friction.
-   Evaluate successful collaboration, not just sign-ups.
-   Expand only after the workflow proves useful.

------------------------------------------------------------------------

## 14. Suggested success metrics

Avoid optimizing only for total accounts or time spent.

Useful pilot metrics: - Percentage of verified users who complete a
useful profile. - Time from registration to first relevant
researcher/opportunity found. - Collaboration request acceptance rate. -
Percentage of accepted requests that form a real project. - Percentage
of projects reaching a confirmed milestone or completion. - Repeat
collaboration rate. - User-rated relevance of recommendations. -
Participation by students without prior publications. - Cross-department
collaboration rate. - Feedback completion and dispute rate. - Reports of
spam, harassment, retaliation or privacy incidents. - User trust and
perceived fairness.

Set numeric targets only after establishing a baseline with the pilot.

------------------------------------------------------------------------

## 15. Risks and mitigations

  -----------------------------------------------------------------------
  Risk                                Mitigation
  ----------------------------------- -----------------------------------
  Few active faculty or students      Start with a focused pilot and
                                      recruit committed research groups

  Cold-start matching                 Support keyword search and profiles
                                      without publications

  Fake or inflated profiles           Affiliation verification and
                                      claim-level evidence

  Unfair ratings                      Verified collaboration,
                                      context-specific criteria, privacy,
                                      appeals

  Retaliatory feedback                Simultaneous review window where
                                      feasible; confidential reporting

  Popularity bias                     Avoid global leaderboards; show
                                      evidence and context

  AI hallucination                    User confirmation, source-linked
                                      claims, no invented credentials

  Sensitive unpublished ideas leaked  Private-by-default projects and
                                      explicit AI data consent

  Scope creep                         Modular monolith and phased roadmap

  Excessive infrastructure cost       PostgreSQL-first, add
                                      queues/cache/services only when
                                      needed

  Authorship/credit conflict          Early agreement, contribution
                                      records and clear disclaimer

  Low trust in verification           Show verification method and status
                                      transparently
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 16. Important product decisions still to finalize

Before implementation, decide: 1. Whether the pilot is DIU-wide or
limited to one department/research group. 2. Whether faculty affiliation
requires admin approval in addition to institutional email. 3. Whether
public feedback is enabled in the first release or private-only
initially. 4. Which profile fields are public, campus-only or private.
5. Whether messaging is in-app or begins with controlled contact
requests. 6. Whether file uploads are necessary in the MVP. 7. Whether
AI data processing can use an external provider or must remain
self-hosted. 8. Which institution policies govern research ethics,
authorship, data and moderation. 9. Who will moderate reports and
appeals. 10. What minimum participation is required before a
collaboration can be marked verified.

------------------------------------------------------------------------

## 17. Final recommendation

Build Research Gate as a **trusted research collaboration platform**,
not just a professor-search clone.

The strongest initial experience is:

**Verified profile → discover a relevant person/opportunity → invite or
apply → form a team → agree on roles → document work → confirm
completion → exchange fair feedback → build a verified portfolio →
discover the next collaboration.**

Prioritize profiles, search, opportunities and collaboration requests
first. Add project tracking and fair feedback next. Introduce AI
matching once you have enough structured profile data and real user
feedback to evaluate whether it actually helps.

This design is intended as a practical starting blueprint. It should be
refined with student/faculty interviews, institutional policy review, a
threat model and a small pilot before treating it as a final production
specification.
