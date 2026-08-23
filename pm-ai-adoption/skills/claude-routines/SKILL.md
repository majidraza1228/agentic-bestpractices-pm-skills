---
name: claude-routines
description: "Design and configure Claude Routines and Cowork Scheduled Tasks for PM automation — competitor monitoring, meeting briefs, user sentiment, OKR tracking. Use when planning to automate a recurring PM task, choosing between Routines and Cowork Scheduled Tasks, or writing a Routine prompt."
---

# Claude Routines

## Purpose

Routines and Cowork Scheduled Tasks let you run PM monitoring work on a schedule — without you. Competitor pricing checks, morning meeting briefs, weekly user sentiment digests, OKR health checks. The work happens whether or not you're at your desk.

This skill covers when to use each surface, how to write prompts that actually work, and how to avoid the failure modes that waste your daily run limit.

---

## Three Surfaces — Pick One

| Surface | Where it runs | Laptop required? | Local files? | Best for |
|---|---|---|---|---|
| **Claude Routines** | Anthropic cloud | No | No | Monitoring, alerts, Slack/Notion outputs on a schedule |
| **Cowork Scheduled Tasks** | Your desktop | Yes — must be awake | Yes | Digesting local transcripts, writing to ~/Documents |
| **Managed Agents** | Anthropic platform | No | No | Team-wide, engineer-wired, MCP-connected workflows |

**Decision rule:**
- Need local files (transcripts, ~/Documents)? → Cowork Scheduled Tasks
- Needs to fire overnight or while travelling? → Claude Routine
- Serves more than just you, needs company data via MCP? → Managed Agent (see `managed-agents-design` skill)

---

## Plan Limits

| Plan | Runs/day | Min interval |
|---|---|---|
| Pro | 5 | 1 hour |
| Max | 15 | 1 hour |
| Team | 25 | 1 hour |
| Enterprise | 25 | 1 hour |

At 5 runs/day on Pro, pick your three highest-value Routines and run the rest manually.

---

## The Five Rules (Skip at Your Peril)

**1. End every prompt with "Execute these steps immediately."**
Without it, the Routine narrates what it would do instead of doing it. Non-negotiable.

**2. Remove unused connectors.**
Every connected tool (Gmail, Calendar, Drive, Notion, Slack) is available to every Routine by default. Remove what the Routine doesn't need. A competitor pricing monitor doesn't need Gmail access.

**3. Use Sonnet 4.6, not Opus.**
Opus is slower and overkill for monitoring tasks. Sonnet 4.6 is the right model.

**4. Define the output format explicitly.**
Specify structure (header, table, bullet), where it posts (Slack channel ID, Notion page URL), and what "nothing to report" looks like. Without this, format drifts run to run.

**5. Always click Run Now before scheduling.**
Silent failures burn your daily limit. Confirm end-to-end first — data read, output written, Slack posted.

---

## The Stateless Problem

Each Routine run starts fresh. No memory of yesterday.

**Consequence:** without state, a competitor pricing monitor will "detect changes" every day because it has nothing to compare against. A sentiment Routine will re-surface the same feedback every week.

**Fix:** write today's findings to Notion at the end of each run. Read that Notion page at the start of the next. Every well-built Routine does this:

```
Step 1: Read the Notion page at [URL] — this is yesterday's state.
...do the work...
Last step: Overwrite the Notion page with today's findings + a "Last updated: [date]" timestamp.
```

Build this read→work→write pattern into every Routine that needs comparison or memory.

---

## Prompt Structure Formula

A working Routine prompt has four parts:

```
[TRIGGER CONTEXT — optional]
Every [cadence], do the following in order:

1. [DATA READ — what to read and where]
2. [COMPARISON OR ANALYSIS — what to look for, vs. what baseline]
3. [OUTPUT — what to write, to which Slack channel ID or Notion URL, in what format]
4. [STATE WRITE — overwrite Notion with today's state]

If [failure condition], post: "[specific failure message with enough detail to debug]"

Do not write anything back to me. Execute these steps immediately.
```

### Example: Competitor Pricing Monitor

```
Every morning, browse the pricing pages of [Competitor A], [Competitor B], and [Competitor C].

Extract all plan names, prices, features, and promotions visible on each page.

Compare against yesterday's findings stored in a Notion page at [NOTION URL].

If nothing changed, post one line to Slack channel [CHANNEL ID]:
"Competitor check complete. No changes. [Date]"

If something changed, post exactly what changed — under 150 words:
[Competitor name]: [What changed]

Overwrite the Notion page with today's full findings as a table: Plan Name | Price | Key Features.
Add "Last checked: [Date]" at the top.

If a pricing page fails to load, name the failing URL in the Slack message.

Do not write anything back to me. Execute these steps immediately.
```

---

## Common PM Use Cases

| Use Case | Connectors | Cadence | Run Now check |
|---|---|---|---|
| Competitor pricing monitor | Web, Notion, Slack | Daily | Did it post to Slack? |
| Morning meeting brief | Gmail, Calendar, Slack | Weekdays 7:30 AM | Is the brief in your Slack DM? |
| Weekly user sentiment | Web (Reddit, G2), Notion, Slack | Weekly | Did it surface ≥3 real mentions? |
| OKR pulse | Notion/Linear (via Managed Agent), Slack | Weekly | Does each KR show a status? |
| Meeting transcript digest | Local files (Cowork only) | Weekly | Did it write to ~/Documents? |

---

## Failure Modes and Fixes

| Symptom | Likely cause | Fix |
|---|---|---|
| Empty brief / no output | Gmail/Calendar OAuth scoped too narrowly | Reconnect with full read access |
| Routine narrates instead of running | Missing "Execute these steps immediately." | Add it back at the end |
| "Changes detected" every single day | No Notion memory — no yesterday baseline | Add the read→write state pattern |
| Pricing page failures | JS-heavy site, login wall, CAPTCHA | Swap URL for G2 page, changelog, or pricing blog |
| Slack output disappears | Channel archived or ID changed | Update the channel ID in the Routine |
| Irrelevant noise in week 1 | Threshold too low (1 mention = alert) | Tune: raise to 3+ mentions before flagging |
| Routine "burns" a daily run silently | Partial failure (one URL timed out) | Read the run log first — don't rewrite the prompt |

---

## Setting Up a Routine (Checklist)

- [ ] Connect required connectors: [claude.ai](https://claude.ai) → Customize → Connectors → `+`
- [ ] Remove unused connectors from the Routine when creating it
- [ ] Get the Slack channel ID (click channel name → ID starts with `C`)
- [ ] Create a Notion log page and copy its URL
- [ ] Choose model: Sonnet 4.6
- [ ] Write prompt using the formula above
- [ ] End prompt with "Execute these steps immediately."
- [ ] Click **Run Now** — confirm output before scheduling
- [ ] Schedule only after end-to-end verification
