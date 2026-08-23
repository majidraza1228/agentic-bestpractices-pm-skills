---
description: Design a Claude Routine or Cowork Scheduled Task — choose the right surface, generate a ready-to-paste prompt, and get the setup checklist
argument-hint: "<what you want to monitor or automate>"
---

# /build-routine — Build a Claude Routine

Turn a recurring PM monitoring task into a ready-to-paste Routine prompt with the right connectors, output format, and failure handling.

## Invocation

```
/build-routine monitor competitor pricing daily and alert me in Slack
/build-routine weekly digest of user sentiment from G2 and Reddit
/build-routine morning brief from my calendar and email before standup
/build-routine OKR health check every Monday from Linear
/build-routine digest my meeting transcripts from ~/Documents weekly
```

## Workflow

### Step 1: Understand the Task

Ask the user (only for what they haven't provided):

1. **What to monitor or automate?** What data source, what question to answer?
2. **Cadence?** Daily, weekly, every weekday — and at what time?
3. **Where should output go?** Slack DM, team channel, Notion page, local file?
4. **What does "nothing to report" look like?** (A good Routine always has a quiet-day message.)

### Step 2: Pick the Surface

Use the **claude-routines** skill decision rule:

- Needs **local files** (~/Documents, local transcripts)? → **Cowork Scheduled Task**
- Needs to run **while laptop is off or closed**? → **Claude Routine**
- Needs company data (Jira, Zendesk, Linear) or serves **more than one PM**? → **Managed Agent** — use the **managed-agents-design** skill instead, and tell the user this task needs an engineer

State the surface and why before generating the prompt.

### Step 3: Identify Connectors

List only what the Routine needs. Unused connectors give Claude unnecessary access and should be removed.

| Need | Connector |
|---|---|
| Email threads or sender context | Gmail |
| Today's meeting schedule | Google Calendar |
| Post output to a channel or DM | Slack (+ channel ID) |
| Store state between runs | Notion (+ page URL) |
| Read from public web (pricing pages, Reddit, G2) | Web (built-in — no setup) |
| Read local files | Cowork Scheduled Task only |

**Connector IDs to collect before setup:**
- Slack channel ID: click channel name → scroll to bottom of popup → starts with `C`
- Notion page URL: open the page → Share → Copy link

### Step 4: Generate the Prompt

Apply the **claude-routines** skill prompt structure formula:

```
[Data read — what to read and from where]

[Analysis — what to look for, what threshold triggers an alert vs. quiet-day message]

[State read — if comparison is needed: "Read yesterday's state from Notion page at [URL]"]

[Output — post to Slack channel [ID] in this format:]
[Paste the exact output structure, including quiet-day message]

[State write — if comparison is needed: "Overwrite the Notion page with today's findings + 'Last checked: [Date]'"]

If [any data source] fails to load, post to [channel]: "[Routine name] failed — [data source] unreachable. [Date]"

Do not write anything back to me. Execute these steps immediately.
```

Produce the complete prompt with all brackets filled in based on what the user provided.

### Step 5: Produce the Setup Checklist

Output as a checklist the user can follow immediately:

```
## Setup Checklist: [Routine Name]

**Surface:** Claude Routine / Cowork Scheduled Task

**Before you create the Routine:**
- [ ] Connect [Connector 1] at claude.ai → Customize → Connectors → +
- [ ] Connect [Connector 2] (if needed)
- [ ] Get Slack channel ID: click channel name → ID starts with C → copy it
- [ ] Create a Notion log page (if needed) → copy its URL

**Creating the Routine:**
- [ ] Go to claude.ai/code/routines → New Routine
- [ ] Name: [Routine Name]
- [ ] Trigger: [Schedule — daily at X AM / weekdays at X AM / weekly on Monday at X AM]
- [ ] Connectors: keep [list] — remove everything else
- [ ] Model: Sonnet 4.6 (not Opus)
- [ ] Paste the prompt above

**Before scheduling:**
- [ ] Click Run Now — watch the run log
- [ ] Confirm [expected output] appears in [destination]
- [ ] Only then: set the schedule

**Week 1 expectations:**
[Customize based on the use case — e.g., "Day 1 will flag 'changes detected' because there's no Notion baseline yet. Expected."]
```

### Step 6: Offer Next Steps

After delivering the prompt and checklist:

- "Want me to **write the quiet-day message and failure message** in more detail?"
- "Should I help you **design a Managed Agent** version of this if you want to share it with your whole PM team?"
- "Want me to **build a second Routine** to cover a different blind spot?"

## Notes

- The stateless problem is the #1 hidden failure: without a Notion read→write pattern, monitoring Routines re-flag the same things every run. Always build this in for comparison-based tasks.
- Never skip "Execute these steps immediately." — it's the difference between a Routine that acts and one that narrates.
- For Cowork Scheduled Tasks, scope the file system permission to one folder, not all of ~/Documents.
- If the user's use case clearly needs company data (Zendesk, Jira, Linear) or team-wide distribution, redirect them to `/plan-ai-rollout` after building the spec — deploying a Managed Agent is a rollout, not a personal setup.
