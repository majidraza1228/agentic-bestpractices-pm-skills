---
description: Generate a meeting-ready status report from your Jira board or task list — standup, sprint review, or stakeholder update
argument-hint: "<meeting type: standup | sprint-review | stakeholder> and Jira board state or ticket list"
---

# /status-for-meeting — Meeting Status Report

Turn your current Jira board or ticket list into a presentation-ready status report for the right meeting format.

## Invocation

```
/status-for-meeting standup [paste your tickets or describe what you worked on]
/status-for-meeting sprint-review [paste sprint board — all tickets with status]
/status-for-meeting stakeholder [paste initiative or epic status]
/status-for-meeting          # asks which meeting type and then asks for data
```

## Workflow

### Step 1: Identify Meeting Type

If not specified, ask:

> "Which meeting are you preparing for?"
> - **Standup** — daily 15-min sync, your personal ticket status only
> - **Sprint review** — end-of-sprint team demo and retrospective preview
> - **Stakeholder update** — exec or cross-functional status on an initiative

Each format is different. Don't mix them.

### Step 2: Collect the Jira Data

Accept input in any form:
- Pasted list of tickets with status ("AUTH-12 In Progress, AUTH-15 Done, AUTH-18 Blocked")
- A description in plain language ("I finished the login redesign, still working on the password reset flow, blocked on the API spec")
- A screenshot description ("sprint board shows 6 done, 3 in progress, 2 to do, 1 blocked")
- A CSV or table export from Jira

If the user has no structured data, ask:
1. "What did you complete since last time?"
2. "What are you working on now?"
3. "Any blockers?"

That's enough for a standup. For sprint review and stakeholder, also ask:
- What was committed at the start vs. what shipped?
- Any tickets pulled in or pushed out mid-sprint?
- What are the key risks or decisions needed?

### Step 3: Generate the Report

Apply the **jira-workflow** skill.

---

#### Standup Format

Keep it under 60 seconds when spoken aloud.

```
**[Name] — Standup [Date]**

**Yesterday**
- [Ticket / task] — [what you did, one line]
- [Ticket / task] — [what you did, one line]

**Today**
- [Ticket / task] — [what you're doing, one line]
- [Ticket / task] — [what you're doing, one line]

**Blockers**
- [Blocker — what's stuck, who needs to act] — or "None"
```

Notes:
- No need for ticket IDs in a spoken standup — use plain names
- "Yesterday" means last working day, not literally yesterday
- Blockers should name what's needed, not just that you're stuck

---

#### Sprint Review Format

Present this on a screen. Aim for 15-20 min total.

```
**Sprint [N] Review — [Date]**

**Sprint Goal**: [one sentence — what were we trying to achieve?]
**Velocity**: [X] points / [Y] stories completed out of [Z] committed ([%])

---

**What Shipped** ✅
| Ticket | Feature / Fix | Notes |
|--------|--------------|-------|
| [ID] | [title] | [demo link, key callout, or user impact] |

**What Didn't Ship** ⚠️
| Ticket | Reason | Going to next sprint? |
|--------|--------|--------------------|
| [ID] | [reason — be specific, not vague] | Yes / No |

**Mid-Sprint Changes**
- Pulled in: [tickets added after planning] — [reason]
- Pulled out: [tickets descoped] — [reason]

---

**What Slowed Us Down**
- [Root cause 1 — systems/process, not people]
- [Root cause 2]

**One thing to change next sprint**
- [Concrete change — not a vague "communicate better"]

---

**Next Sprint Preview**
- Goal: [one sentence]
- Biggest bets: [top 2-3 tickets]
- Risks: [anything that could derail it]
```

Notes:
- "What didn't ship" is not a blame list — focus on blockers and dependencies, not individuals
- Demo what shipped before reviewing metrics — show, then tell
- "Mid-sprint changes" often reveal planning problems worth discussing

---

#### Stakeholder Update Format

Present in 5 min or share async. Leads with RAG status, not ticket lists.

```
**[Initiative / Epic Name] — Update [Date]**

**Status**: 🟢 On Track | 🟡 At Risk | 🔴 Off Track
**Owner**: [PM name]
**Next milestone**: [what ships next and when]

---

**Summary**
[3 sentences: what's done, what's in flight, what's the main risk if any. Written for someone who doesn't know Jira.]

**Progress by milestone**
| Milestone | Target date | Status | Notes |
|-----------|------------|--------|-------|
| [Milestone 1] | [date] | 🟢/🟡/🔴 | [1-line note] |
| [Milestone 2] | [date] | | |

**Open risks**
| Risk | Likelihood | Impact | Owner | Mitigation |
|------|-----------|--------|-------|-----------|
| [Risk] | High/Med/Low | High/Med/Low | [name] | [action] |

**Decisions needed from this group**
1. [Decision — what, why it's needed, deadline for the decision]

**Not in scope (confirming alignment)**
- [List anything stakeholders might expect but isn't in this initiative]
```

Notes:
- RAG status is your judgment call — own it, don't hedge
- Decisions needed is the most important slide — come with a recommendation, not just the question
- "Not in scope" prevents scope creep from starting in the Q&A

---

### Step 4: Tailor for the Room

After generating the base report, ask:

- "Who is in this meeting?" — if engineers are present, keep ticket IDs; if executives only, remove them
- "Is this async or live?" — async needs more context in each row; live can be sparser (you'll speak to it)
- "Is there anything politically sensitive?" — flag tickets or misses that need careful framing

### Step 5: Offer Next Steps

After generating:

- "Want me to **write the Jira comments** for any at-risk or blocked tickets? Use `/jira-update`."
- "Should I **set up a Routine** to post this digest automatically every Monday? Use `/build-routine`."
- "Want me to **draft the email version** of this stakeholder update for async distribution?"
- "Should I **capture meeting notes** after the session? Use `/meeting-notes` with the transcript."

## Notes

- Standup ≠ status report — standup is a coordination tool, not a performance review; keep it short
- Sprint review ≠ retro — sprint review shows what shipped; retro is the team conversation about how; `/sprint retro` handles the retro
- Never show a raw Jira board to executives — filter to milestones and RAG status only
- If status is "at risk" or "off track," always come with a mitigation plan, not just the flag
- Metrics (velocity, %) are context, not the story — lead with the narrative, support with numbers
