---
name: pm-project-dual-role
description: "Guidance for PMs who carry both product manager and project manager responsibilities — how to split time, which Claude workflows handle which hat, and how to avoid the dual-role trap. Use when a PM is also managing delivery timelines, engineering coordination, stakeholder updates, and Jira hygiene simultaneously."
---

# PM + Project Manager — Dual Role Guidance

## The Dual-Role Reality

Many PMs — especially at startups, in understaffed teams, or on specific initiatives — carry both hats:

- **Product Manager hat**: strategy, discovery, prioritization, roadmap, user research, PRDs, stakeholder alignment on *what* to build and *why*
- **Project Manager hat**: delivery tracking, sprint coordination, Jira hygiene, risk management, status reporting, blocker removal, *who* is doing *what* by *when*

Both are real jobs. Carrying both simultaneously is the default for many teams. The risk is that reactive project work crowds out strategic product work — you spend all week in Jira and never have time to talk to users.

Claude handles the project work faster, so you can protect time for the product work.

---

## How to Split the Work

### Product Manager responsibilities — Claude as thought partner

These need your judgment. Claude accelerates the output but can't replace the thinking.

| Task | Claude helps with | Relevant command |
|---|---|---|
| Discovery and ideation | Structuring interviews, mapping assumptions | `/discover` |
| Strategy and positioning | Canvas frameworks, SWOT, competitor analysis | `/strategy` |
| PRD writing | Drafting, red-teaming, acceptance criteria | `/write-prd`, `/red-team-prd` |
| OKR planning | KR definition, initiative mapping | `/plan-okrs` |
| Stakeholder alignment | Stakeholder maps, pre-mortems | `/stakeholder-map`, `/pre-mortem` |
| Roadmap communication | Outcome-based roadmap formatting | `/transform-roadmap` |

### Project Manager responsibilities — Claude as executor

These are largely mechanical. Claude can own most of the output; you review and paste.

| Task | Claude handles | Relevant command |
|---|---|---|
| Jira ticket updates | Writing status comments, acceptance criteria, blocker notes | `/jira-update` |
| Sprint status reporting | Board → meeting-ready digest | `/status-for-meeting` |
| Sprint planning | Capacity, story selection, risk flags | `/sprint plan` |
| Sprint retrospective | Feedback → structured retro | `/sprint retro` |
| Release notes | Tickets → user-facing notes | `/sprint release-notes` |
| Meeting notes | Transcript → decisions and action items | `/meeting-notes` |
| Automated task tracking | Weekly Jira digest via Routine | `/build-routine` |
| Weekly stakeholder updates | Initiative status in email/async format | `/status-for-meeting stakeholder` |

---

## Weekly Time Allocation — What to Protect

When carrying both hats, the project work will always expand to fill available time unless you protect PM time explicitly.

**Suggested allocation for a dual-role PM:**

| Block | Time | What it covers |
|---|---|---|
| Strategic PM work | 40% | Discovery, strategy, roadmap, PRDs, user conversations |
| Delivery and coordination | 30% | Jira, sprint ceremonies, blocker removal, engineer syncs |
| Stakeholder communication | 20% | Status updates, alignment meetings, async updates |
| Slack / ad-hoc | 10% | Reactive — keep this capped |

**The signal that balance is off:** if you haven't talked to a user or written a strategic document in two weeks, delivery has taken over. Use Claude to compress the delivery work and reclaim the time.

---

## Workflow: Start of Week (Monday)

Use Claude to get project work done in under 30 minutes so the rest of the week is available for product work.

**Step 1 — Sprint health check (10 min)**
Run `/status-for-meeting standup` with your current board state. Identify blockers before standup.

**Step 2 — Stakeholder update (10 min)**
If you send a weekly initiative update, paste the current board state and run `/status-for-meeting stakeholder`. Review, adjust tone if needed, send.

**Step 3 — Jira hygiene (10 min)**
Any tickets that need comments after last week's events: run `/jira-update` for each. Paste the outputs into Jira.

Total: 30 minutes. The rest of Monday is available for PM work.

---

## Workflow: Automating the Monitoring Layer

If you're carrying both roles, you can't manually check Jira every day. Set up a Routine that watches for you.

**Recommended Routine — Weekly Sprint Digest:**

Use `/build-routine` with:
> "Weekly sprint status digest — read my Jira board, classify tickets as On Track / At Risk / Blocked, post to my Slack DM every Monday at 8 AM before standup."

Once running: you walk into standup already knowing what's blocked. The Routine does the scan; you do the unblocking.

See the `claude-routines` skill for setup instructions.

---

## Workflow: Sprint Ceremonies with Claude

### Sprint Planning (60-90 min → 30 min with Claude)

Before the planning meeting:
1. Paste the backlog candidates into Claude and describe the sprint goal
2. Run `/sprint plan` — get capacity estimate, story selection, and risk flags
3. Review the output, adjust priorities, bring the pre-structured plan to the meeting

The meeting becomes a review and alignment session, not a from-scratch exercise.

### Sprint Review (45 min prep → 10 min with Claude)

Before the review:
1. Pull the current board state from Jira (or paste the sprint report)
2. Run `/status-for-meeting sprint-review`
3. Add demo links and any qualitative context
4. Present the output — it's already in the right format

### Sprint Retro (can skip if not facilitating)

If you are facilitating:
1. Collect feedback async (Slack, a doc, a survey)
2. Paste into Claude, run `/sprint retro`
3. Use the structured output to guide the discussion — don't read it aloud, use it as a facilitation guide

---

## Workflow: Stakeholder Communication

The most time-consuming part of the project manager hat. Claude compresses it to copy-paste speed.

### Weekly async update (3 min)

1. Describe or paste current initiative status
2. Run `/status-for-meeting stakeholder`
3. Add the decisions-needed section yourself (Claude needs your judgment on what to escalate)
4. Send as email or Slack message

### Meeting status report (5 min)

Same as above, but format for a live meeting. Add:
- Demo link if anything shipped
- One slide or message per initiative (don't combine multiple initiatives in one update)

### Escalation note (when something is off-track)

Run `/jira-update epic summary [EPIC-ID]` and add a "Status: Off Track" with:
- What happened
- Impact (timeline, budget, scope)
- Decision needed from leadership
- Your recommended path

Send this before the meeting, not as a surprise in the meeting.

---

## The Dual-Role Trap — What to Watch For

**Trap 1: All execution, no strategy**
Signs: you're updating Jira but not talking to users; your roadmap hasn't changed in a month.
Fix: Block 2-hour "no meetings, no Jira" windows for product work. Use Claude to compress delivery tasks to make this possible.

**Trap 2: Reporting instead of deciding**
Signs: your weekly updates describe what happened, but nothing changes.
Fix: Every stakeholder update must include at least one "Decision needed from this group." Otherwise, it's FYI, not alignment.

**Trap 3: Jira as the PM's job**
Signs: engineers come to you for Jira hygiene, not for product direction.
Fix: Define Jira ownership explicitly. Engineers own their tickets; PM sets acceptance criteria and priority. Use `/jira-update` to write comments fast, but train engineers to update ticket status themselves.

**Trap 4: No time to think**
Signs: every decision is made in a meeting because there's no thinking time outside of meetings.
Fix: Two protected hours per week minimum for strategic product work. No Slack, no Jira, no standup. Use Claude to front-load delivery prep so these hours stay protected.

---

## Reference: Which Claude Command for Which Situation

| Situation | Command |
|---|---|
| Need to write a Jira ticket update | `/jira-update` |
| Need to prepare for standup | `/status-for-meeting standup` |
| Need to run sprint review | `/status-for-meeting sprint-review` |
| Need to send a stakeholder update | `/status-for-meeting stakeholder` |
| Need to automate weekly Jira digest | `/build-routine` |
| Need to plan next sprint | `/sprint plan` |
| Need to run a retro | `/sprint retro` |
| Need to capture meeting decisions | `/meeting-notes` |
| Need to write or improve a PRD | `/write-prd` |
| Need to map stakeholders for an initiative | `/stakeholder-map` |
| Need to plan a quarterly OKR | `/plan-okrs` |
