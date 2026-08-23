---
description: Write a Jira ticket update, comment, acceptance criteria, or blocker note — describe what happened, Claude formats the Jira-ready text
argument-hint: "<ticket ID and what happened, or 'ac' for acceptance criteria>"
---

# /jira-update — Write a Jira Ticket Update

Turn a verbal description of progress, a blocker, or a feature requirement into properly formatted Jira content — ready to paste.

## Invocation

```
/jira-update AUTH-23 — design review done, waiting on API spec from platform team, ETA Thursday
/jira-update DASH-7 blocked — data pipeline team hasn't delivered the schema, escalated to eng manager
/jira-update ac ONBOARD-12 — user should be able to reset password from login screen without needing support
/jira-update PROJ-45 done — shipped to staging, QA sign-off pending
/jira-update epic summary GROWTH-1 — Q3 acquisition initiative
```

## Workflow

### Step 1: Identify the Update Type

Determine from the user's input which format to generate:

| Trigger | Update type |
|---|---|
| Progress description with next step | **Status comment** |
| "blocked", "waiting on", "dependency" | **Blocker note** |
| "ac", "acceptance criteria", "done means" | **Acceptance criteria** |
| "done", "shipped", "released" | **Completion comment** |
| "epic", "summary", "rollup" | **Epic status rollup** |

If the type is ambiguous, ask: "Is this a progress update, a blocker note, or acceptance criteria?"

### Step 2: Gather Missing Context

For a **status comment**, ask if not provided:
- Ticket ID and title
- Current status (In Progress / In Review / Blocked / Done)
- What happened since the last update (1-3 sentences)
- Any blockers (who/what, how long blocked)
- Next step and ETA
- Audience: internal team or stakeholder-visible

For **acceptance criteria**, ask if not provided:
- What the ticket is trying to do (paste or describe the current description)
- What "done" looks like from a user or QA perspective
- Edge cases that must pass
- Anything explicitly out of scope
- Format preference: gherkin (Given/When/Then) or bullet list

For a **blocker note**, ask if not provided:
- What is blocking progress
- Who needs to act to unblock
- How long this has been blocked
- Impact if not resolved by [date]

For an **epic status rollup**, ask if not provided:
- Epic name and goal
- List of child tickets with current statuses (paste or describe)
- Overall RAG status (On Track / At Risk / Off Track)
- Any risks or decisions needed from stakeholders

### Step 3: Generate the Output

Apply the **jira-workflow** skill format for the relevant update type.

#### Status comment output:

```
**Update — [Date]**

[What happened — 2-3 sentences. Past tense. Specific.]

**Next step:** [concrete action and ETA]

[If blocked:]
**Blocker:** [what, who needs to act, impact if not resolved by X]

**Status:** [In Progress / In Review / Blocked]
```

#### Acceptance criteria output (bullet):

```
**Acceptance Criteria — [Ticket ID]**

- [ ] [Criterion 1 — specific, testable, observable]
- [ ] [Criterion 2]
- [ ] [Edge case: if X, then Y]

**Out of scope (this ticket):**
- [Exclusion 1]

**Definition of Done:**
- QA sign-off on all criteria above
- [Any additional DoD items]
```

#### Acceptance criteria output (gherkin):

```
**Acceptance Criteria — [Ticket ID]**

**Scenario 1: [Happy path name]**
Given [initial state]
When [user action]
Then [expected result]
And [secondary result if applicable]

**Scenario 2: [Edge case name]**
Given [alternative state]
When [edge case action]
Then [expected result]

**Out of scope:** [list]
```

#### Blocker note output:

```
**Blocker — [Date]**

**Blocked by:** [dependency or team name]
**Blocked since:** [date or duration]
**What's needed to unblock:** [specific deliverable or decision]
**Owner to unblock:** [name or team]
**Impact if not resolved by [date]:** [consequence — sprint miss, customer impact, downstream delay]

**Next action:** [what the PM is doing to escalate or resolve]
```

#### Epic status rollup output:

```
**[Epic Name] — Status Update [Date]**

**Status:** 🟢 On Track / 🟡 At Risk / 🔴 Off Track

**Progress**
| Child Ticket | Title | Status | Notes |
|---|---|---|---|

**What's done:** [summary]
**What's in flight:** [summary]
**Risks:** [if any]
**Decisions needed:** [if any]
**Next milestone:** [next deliverable and date]
```

### Step 4: Format for Audience

If the user says the update is stakeholder-visible or customer-visible:
- Remove ticket IDs from the prose
- Replace technical terms with user-facing language
- Lead with business impact, not technical detail
- Remove internal team names where not relevant to the audience

### Step 5: Offer Next Steps

After generating the update:

- "Want me to **turn this into a standup update** for your meeting today? Use `/status-for-meeting`."
- "Should I **write the acceptance criteria** for this ticket too?"
- "Want me to **draft a Slack message** to the blocking team to escalate this?"
- "Should I **build a Routine** to post weekly Jira digests automatically? Use `/build-routine`."

## Notes

- Paste the update directly into the Jira ticket comment box — no reformatting needed
- For stakeholder-visible comments: Jira comments on shared boards are often readable by clients — confirm before posting anything sensitive
- Acceptance criteria written by Claude are a starting point — always review with the engineer or QA who will test them
- If you're writing the same type of update weekly, consider `/build-routine` to automate it
