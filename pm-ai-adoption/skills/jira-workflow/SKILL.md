---
name: jira-workflow
description: "Use Claude to update Jira tickets, track task status, and generate meeting-ready reports from Jira data. Use when writing ticket comments or status updates, setting up a Jira tracking Routine, or preparing a sprint status presentation. Three modes: manual update, automated tracking, and meeting reporting."
---

# Jira Workflow

## Purpose

Claude integrates with Jira in three distinct ways depending on what you need:

1. **Manual update** — you describe what happened, Claude writes the Jira comment or status update, you paste it in
2. **Automated tracking** — a Claude Routine or Managed Agent reads your Jira board weekly and posts a digest to Slack
3. **Meeting reporting** — you paste your Jira board state, Claude formats a meeting-ready status report

---

## Mode 1: Manual Jira Updates

Use this when you need to write a ticket comment, update a description, or generate acceptance criteria — without setting up any automation.

### What Claude can write for you

| Update type | When to use | What to provide |
|---|---|---|
| **Status comment** | Ticket update after a sync, review, or customer call | What happened, any blockers, next step |
| **Acceptance criteria** | Ticket is vague or failing QA due to unclear requirements | Current description + what "done" means to you |
| **Blocker note** | Ticket is stuck and you need to document why | What's blocking, who needs to act, ETA |
| **Epic status rollup** | Weekly update to stakeholders on a major initiative | List of child tickets and their statuses |
| **Sprint status comment** | Mid-sprint progress update on a story | Story points remaining, what's done, what's next |

### Prompt pattern — status comment

Give Claude this context:

```
Ticket: [PROJ-123 — feature name]
Current status: [In Progress / Under Review / Blocked]
What happened: [2-3 sentences describing progress since last update]
Blockers (if any): [who/what is blocking, how long]
Next step: [what happens next and by when]
Audience: [internal team / stakeholder / customer-visible]
```

Claude will write a Jira comment in the right format for the audience — technical and concise for internal, business-context-first for stakeholders.

### Prompt pattern — acceptance criteria

```
Ticket: [PROJ-456 — feature name]
Current description: [paste the existing description]
What "done" means: [describe what you'd accept in QA/demo]
Edge cases to handle: [if any]
Out of scope: [what is explicitly excluded]
```

Claude will produce gherkin-style or bullet-point acceptance criteria, whichever fits your team's convention.

### Prompt pattern — acceptance criteria (gherkin)

```
Given [initial state or context]
When [the user does X]
Then [the system does Y]
And [the system also does Z]

Given [alternative state]
When [edge case action]
Then [expected edge case result]
```

---

## Mode 2: Automated Jira Tracking

Use this when you want a weekly or daily digest of your Jira board without manually checking it.

### Option A: Claude Routine (no engineer, uses Jira web)

Works if your Jira board has a public or browser-accessible URL. The Routine reads the board page, extracts ticket status, and posts a digest to Slack.

**What it produces:**

> **Sprint 24 Status — Monday 8 AM**
> 
> On Track (8): AUTH-12, AUTH-15, DASH-3 ...
> At Risk (2): ONBOARD-7 (not started, due Thursday), DASH-9 (blocked on design)
> Blocked (1): AUTH-18 — waiting for API keys from Platform team
> Done this week (3): AUTH-11, DASH-1, DASH-2
> 
> Action needed: ONBOARD-7 and AUTH-18 need owner attention today.

**Routine prompt template:**

```
Every [Monday / daily] at [8 AM], open the Jira sprint board at [BOARD URL].

Extract all tickets in the current sprint. For each ticket, read:
- Ticket ID and title
- Status (To Do, In Progress, In Review, Blocked, Done)
- Assignee (if visible)
- Due date or sprint end date

Classify each ticket:
- On Track: In Progress or In Review with time remaining
- At Risk: To Do with less than 2 days before sprint end, or In Progress with no recent update
- Blocked: status is Blocked or description mentions a dependency
- Done: status is Done or Released

Post to Slack channel [CHANNEL ID] in this format:

**Sprint [N] Status — [Date]**
On Track ([count]): [ticket IDs]
At Risk ([count]): [ticket ID] — [one-line reason for each]
Blocked ([count]): [ticket ID] — [blocker reason]
Done this week ([count]): [ticket IDs]

If at-risk or blocked count > 0, end with: "Action needed: [ticket IDs] need owner attention today."
If all tickets are On Track: "All [N] tickets on track. No action needed."

Do not write anything back to me. Execute these steps immediately.
```

**Connectors needed:** Slack, Web (built-in)
**State storage needed:** Notion page (to compare against last week and detect new blockers)

### Option B: Managed Agent (engineer-wired, uses Jira MCP)

For teams who need reliable data (not screen-scraping) and team-wide distribution.

The Managed Agent spec:

```
An agent that reads the current sprint in [JIRA PROJECT KEY] via the Jira MCP.

Every Monday at 7 AM it reads all tickets in the active sprint and classifies each as:
- On Track: In Progress or In Review, sprint end more than 2 days away
- At Risk: To Do with sprint end < 2 days, or In Progress with last update > 3 days ago
- Blocked: status = Blocked, or description contains "waiting on" or "blocked by"
- Done: status = Done or Released

It posts a digest to Slack channel [CHANNEL ID] in the format below.
It also writes a full ticket-level breakdown to Notion page [URL] for archive.

If the Jira MCP returns no tickets, post: "Jira sprint tracker failed — no tickets readable from [PROJECT KEY]. Check MCP permissions. [Date]"

Output format:
**Sprint Status — Week of [Date]**
On Track ([N]): [ticket IDs]
At Risk ([N]): [ticket ID] — [reason]
Blocked ([N]): [ticket ID] — [blocker]
Done ([N]): [ticket IDs]
[If any at-risk or blocked]: Action needed: [owners] to unblock [tickets] before [date].
```

MCP access needed: Jira (read-only), Slack (write to one channel), Notion (write to one page)

---

## Mode 3: Meeting Status Reports

Use this when you have a Jira board snapshot and need to present status in a meeting. Three formats depending on the meeting type.

### Format A: Daily Standup (30 seconds per person)

Provide: list of your tickets and their status.

Claude produces:

```
**[Your name] — Standup [Date]**

Yesterday: [completed or progressed tickets — 1 line each]
Today: [what you're working on — 1 line each]
Blockers: [what's stuck and who needs to act, or "None"]
```

### Format B: Sprint Review (team, 15-30 min)

Provide: full sprint board state — which tickets are Done, In Progress, not started, any that were pulled out.

Claude produces:

```
**Sprint [N] Review — [Date]**

**Goal**: [sprint goal, if set]
**Velocity**: [X] points completed of [Y] committed ([Z]%)

**Shipped**
| Ticket | Title | Points | Notes |
|--------|-------|--------|-------|

**Not Shipped (carried to next sprint)**
| Ticket | Title | Reason |
|--------|-------|--------|

**Carry-in from last sprint**
| Ticket | Title | Resolved? |
|--------|-------|-----------|

**Blockers that slowed us**
[2-3 bullets on what caused misses, not who]

**What to do differently next sprint**
[2-3 actionable changes — reserve for retro if team is present]
```

### Format C: Stakeholder Update (executive or cross-functional, 5 min)

Provide: initiative or epic name, key tickets and their status, any risks.

Claude produces:

```
**[Initiative Name] — Status Update [Date]**

**Overall status**: 🟢 On Track / 🟡 At Risk / 🔴 Off Track

**Summary**
[2-3 sentences: what's done, what's in flight, what's the risk if any]

**Progress by milestone**
| Milestone | Target | Status | Notes |
|-----------|--------|--------|-------|

**Open risks**
| Risk | Impact | Mitigation | Owner |
|------|--------|-----------|-------|

**Decisions needed from this group**
1. [Decision — context — deadline]

**Next milestone**: [what ships next and when]
```

---

## Choosing the Right Mode

| Situation | Use |
|---|---|
| Writing one ticket update after a call or review | Mode 1 — Manual |
| Weekly board digest posted to Slack automatically | Mode 2 — Routine |
| Jira data is behind a login wall or needs MCP reliability | Mode 2 — Managed Agent |
| Preparing for standup (your personal tickets) | Mode 3 — Standup format |
| Sprint review presentation (whole team) | Mode 3 — Sprint Review format |
| Exec/cross-team status update | Mode 3 — Stakeholder format |

---

## Common Mistakes and Fixes

| Mistake | Fix |
|---|---|
| Ticket updates too vague ("in progress") | Give Claude: what happened, what's next, any blocker — then paste its output |
| Routine reads Jira but data is stale | Many Jira boards are JS-rendered; add "click Load More if results are paginated" or switch to Managed Agent |
| Stakeholder update reads like a ticket list | Use the Stakeholder format — it leads with RAG status and decisions, not ticket IDs |
| Sprint review looks like a blame session | Frame "not shipped" reasons around blockers and dependencies, not people |
| Jira MCP token has too-broad permissions | Scope to read-only on the target project only |
