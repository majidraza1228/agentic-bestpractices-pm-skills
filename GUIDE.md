# How to Use PM Skills Marketplace

Step-by-step instructions for GitHub Copilot, Claude Code, Claude Cowork, and Microsoft tech stack alternatives.

---

## Table of Contents

1. [PM Daily Workflow](#1-pm-daily-workflow)
2. [GitHub Copilot](#2-github-copilot)
3. [Claude Code (CLI)](#3-claude-code-cli)
4. [Claude Cowork](#4-claude-cowork)
5. [Microsoft Tech Stack Alternatives](#5-microsoft-tech-stack-alternatives)
6. [Common Workflows — Side by Side](#6-common-workflows--side-by-side)

---

## 1. PM Daily Workflow

This section shows how a PM uses the marketplace in practice — day by day, meeting by meeting, across both product and project work. No installation prerequisite — pick any tool from sections 2–6.

**Which tool do you have?**

| Situation | What to use |
|---|---|
| Claude Code or Claude Cowork | Use `/command` syntax throughout this section |
| GitHub Copilot only (no Claude, no Codex) | See [Copilot-only workflow](#copilot-only-workflow) below |
| Microsoft 365 Copilot (Teams, Word, Outlook) | See [Copilot-only workflow](#copilot-only-workflow) below |
| Copilot Studio (custom assistant) | Natural language — same as Copilot-only |
| Mix of tools | Use Claude for commands, Copilot for chat-style questions |

The workflow below uses Claude Code / Cowork `/command` syntax. The [Copilot-only workflow](#copilot-only-workflow) section at the end of this page has the natural language equivalents for every step.

---

### Monday — Sprint kickoff and weekly setup (30 min total with Claude)

**8:00 AM — Check automated digests (0 min if Routines are set up)**

If you've configured a Claude Routine (see `/build-routine`), your Slack DM already has:
- Sprint board digest: On Track / At Risk / Blocked tickets
- Competitor pricing check (if configured)
- Meeting brief for today's calendar

Nothing to do — just read it before standup.

If Routines aren't set up yet, do this manually in 5 minutes:
> Paste your Jira board state and run `/status-for-meeting standup`

**8:30 AM — Standup (prepared)**

You already know what's blocked. In standup, lead with blockers — don't just report status.

**9:00 AM — Weekly stakeholder update (10 min)**

> `/status-for-meeting stakeholder` + paste initiative or epic state

Review, add any decisions needed from leadership, send async. Do this before your first stakeholder call, not after.

**9:30 AM — Jira hygiene from last week (10 min)**

For any tickets that changed status or need a comment after last week's conversations:
> `/jira-update [TICKET-ID] — [what happened, what's next]`

Paste each output into Jira. Do all of them now so the sprint board is clean before planning.

**10:00 AM — Sprint planning prep (10 min, if planning is today)**

Before the planning meeting:
> `/sprint plan [duration, team size, sprint goal, backlog items]`

Bring the structured output to the meeting. Planning becomes a review-and-adjust session, not a from-scratch exercise.

---

### Tuesday / Wednesday — Execution days (strategic PM work)

These are your protected product work days. Delivery coordination should be minimal — blocked issues surfaced Monday, Jira is clean, stakeholder update is sent.

**Writing a PRD or feature spec**
> `/write-prd [feature name + problem statement + who it's for]`

After the first draft:
> `/red-team-prd [paste the PRD]` — stress-test assumptions before sharing

**Running discovery on a new problem or idea**
> `/discover [idea or problem space]`

This chains four steps automatically: brainstorm → assumptions → prioritize → experiments. Takes 20–30 min. Do it in one session while context is fresh.

**Defining metrics for a new feature**
> `/setup-metrics [product area or feature]`

**Updating the roadmap after a strategy shift**
> `/transform-roadmap [paste current roadmap]`

**Researching a new market or competitor**
> `/market-scan [market or category]`
> `/competitive-analysis [your product vs. market]`

---

### Thursday — Stakeholder and alignment day

**Before any exec or cross-functional meeting**

5 minutes before:
> `/status-for-meeting stakeholder [initiative name + paste ticket status]`

If something is off-track, add your mitigation plan and the decision you need. Send this before the meeting — don't reveal bad news for the first time in a room.

**After any stakeholder meeting**

15 minutes after:
> `/meeting-notes [paste transcript or rough notes]`

This captures decisions and action items. Forward the output to attendees. Any action items that become Jira tickets:
> `/jira-update [TICKET-ID] — [acceptance criteria or task description]`

**Preparing a stakeholder presentation**

If you're presenting initiative status to leadership:
1. Run `/status-for-meeting stakeholder` — this gives you the structure
2. Use the RAG status + Decisions Needed section as your opening slide
3. One slide per initiative — don't combine multiple initiatives

---

### Friday — Close the week and set up next week

**Sprint review prep (if review is today or Monday)**
> `/status-for-meeting sprint-review [paste full sprint board — all tickets with status]`

Add demo links and qualitative notes. The output is your review agenda.

**Sprint retro (if running one)**

Collect team feedback async (Slack or a shared doc), then:
> `/sprint retro [paste team feedback]`

Use the structured output as a facilitation guide — don't read it aloud, use it to drive the conversation.

**Release notes (if anything shipped)**
> `/sprint release-notes [paste the tickets that shipped]`

Translate technical work into user-facing language. Send to customers, post in Slack, or publish in-product.

**Weekly async update (if you send one)**
> `/status-for-meeting stakeholder [all active initiatives]`

Send Friday afternoon so leadership has context before Monday.

---

### As-needed — React to what comes in

**Feature request lands in Slack or email**
> `/triage-requests [paste the request + current backlog context]`

Get a prioritization recommendation before committing to anything.

**Customer interview just finished**
> `/interview summarize [paste transcript]`

Capture insights, map to assumptions, identify the follow-up.

**Someone asks "can we just add X?"**
> `/red-team-prd` or `/pre-mortem [describe the change]`

Surface the risks before agreeing.

**New Jira ticket needs acceptance criteria**
> `/jira-update ac [TICKET-ID] — [describe what done looks like]`

**Anything is blocked more than 48 hours**
> `/jira-update [TICKET-ID] blocked — [what's blocking, who needs to act, impact]`

Write the blocker note and escalate the same day. Don't let blockers age.

---

### Weekly time budget — what Claude compresses

| Task | Without Claude | With Claude |
|---|---|---|
| Jira updates (5 tickets) | 20 min | 5 min |
| Stakeholder update | 30 min | 10 min |
| Sprint review prep | 45 min | 10 min |
| Meeting notes | 20 min | 5 min |
| PRD first draft | 3–4 hours | 1–1.5 hours |
| Sprint planning prep | 60 min | 15 min |

**Time reclaimed per week: ~3–4 hours.** Use it for user conversations, strategic thinking, and the work only you can do.

---

### If you carry both PM and Project Manager responsibilities

See the `pm-project-dual-role` skill for the full guidance. Short version:

- **Use Claude as executor for all project work** (Jira, status reports, sprint prep, meeting notes)
- **Use Claude as thought partner for product work** (discovery, strategy, PRDs — your judgment drives the output)
- **Protect Tuesday and Wednesday for strategic PM work** — delivery will always fill available time unless you block it explicitly
- **Set up at least one Claude Routine** (see `/build-routine`) to automate the Monday board digest — this alone saves 20 min/week and makes every standup better

---

### Command quick reference — by situation

| Situation | Command |
|---|---|
| Preparing for standup | `/status-for-meeting standup` |
| Sprint review presentation | `/status-for-meeting sprint-review` |
| Stakeholder / exec update | `/status-for-meeting stakeholder` |
| Writing a Jira ticket comment | `/jira-update` |
| Writing acceptance criteria | `/jira-update ac [TICKET-ID]` |
| Documenting a blocker | `/jira-update [TICKET-ID] blocked` |
| Automate weekly Jira digest | `/build-routine` |
| New product idea | `/discover` |
| Writing a PRD | `/write-prd` |
| Stress-testing a PRD | `/red-team-prd` |
| OKR planning | `/plan-okrs` |
| Sprint planning | `/sprint plan` |
| Sprint retro | `/sprint retro` |
| Release notes | `/sprint release-notes` |
| After a meeting | `/meeting-notes` |
| Mapping stakeholders | `/stakeholder-map` |
| Risk analysis | `/pre-mortem` |
| Prioritizing a backlog | `/triage-requests` |
| After a user interview | `/interview summarize` |
| Competitive landscape | `/competitive-analysis` |
| AI tool rollout plan | `/plan-ai-rollout` |
| Audit AI tool adoption | `/audit-ai-usage` |

---

### Copilot-only workflow

**For GitHub Copilot, Microsoft 365 Copilot, or Copilot Studio — no Claude or Codex required.**

Everything in this marketplace works with Copilot. There are no slash commands — you describe the workflow in plain language instead. The skill files are loaded either automatically (if you're in this repo with Copilot Chat) or by pasting the relevant `SKILL.md` content into your chat.

#### How to run any workflow in Copilot

**Option A — You're in this repo with GitHub Copilot Chat (VS Code / JetBrains)**

Just describe what you want. Copilot reads the skill files automatically via `.github/copilot-instructions.md`.

> "Run full product discovery on an AI writing tool for non-native English speakers — brainstorm ideas, identify the riskiest assumptions, prioritize them, design experiments. Pause between each step."

> "Write a Jira status comment for ticket AUTH-23 — design review is done, waiting on API spec from the platform team, estimated Thursday."

**Option B — Microsoft Copilot web, M365 Copilot, or Copilot Studio**

Find the skill file on GitHub, open it (click Raw), copy the content, paste it into your chat, then add your request at the end.

```
[paste full SKILL.md content here]

---

Using the framework above: [your request]
```

The skill files to paste for each daily task are listed in the table below.

---

#### Monday — Copilot natural language equivalents

| Task | What to say in Copilot | Skill file to paste (non-Copilot-Chat) |
|---|---|---|
| Check sprint board status | "Review my sprint board and classify tickets as On Track, At Risk, or Blocked. Here's the board: [paste]" | `pm-ai-adoption/skills/jira-workflow/SKILL.md` |
| Prepare standup | "Write my standup update. Completed: [list]. Working on: [list]. Blockers: [list]." | `pm-ai-adoption/skills/jira-workflow/SKILL.md` |
| Weekly stakeholder update | "Write a stakeholder status update for [initiative]. Status: [On Track/At Risk]. Tickets: [paste]. Include a decisions-needed section." | `pm-ai-adoption/skills/jira-workflow/SKILL.md` |
| Jira ticket comment | "Write a Jira status comment for [TICKET-ID]. What happened: [describe]. Next step: [describe]. Blocker: [if any]." | `pm-ai-adoption/skills/jira-workflow/SKILL.md` |
| Acceptance criteria | "Write acceptance criteria for this ticket: [paste description]. Done means: [describe]. Edge cases: [list]. Format as bullet list." | `pm-ai-adoption/skills/jira-workflow/SKILL.md` |
| Sprint planning prep | "Plan a [2-week] sprint for a team of [N] engineers. Sprint goal: [goal]. Backlog candidates: [paste]. Estimate capacity, select stories, flag risks." | `pm-execution/skills/sprint-plan/SKILL.md` |

#### Tuesday / Wednesday — Copilot natural language equivalents

| Task | What to say in Copilot | Skill file to paste |
|---|---|---|
| Write a PRD | "Write a comprehensive PRD for [feature + problem statement + audience]. Use an 8-section structure: problem, goals, user stories, requirements, out of scope, metrics, risks, open questions." | `pm-execution/skills/create-prd/SKILL.md` |
| Stress-test a PRD | "Adversarially stress-test this PRD. Find the weakest assumptions, biggest risks, and cheapest tests to validate each. [paste PRD]" | `pm-execution/skills/strategy-red-team/SKILL.md` |
| Run discovery | "Run full product discovery on [idea]. Step 1: brainstorm ideas. Step 2: identify the riskiest assumptions. Step 3: prioritize by impact and ease of testing. Step 4: design experiments. Pause between steps." | `pm-product-discovery/commands/discover.md` |
| Define metrics | "Design a product metrics dashboard for [product area]. Include North Star metric, input metrics, alert thresholds, and measurement approach." | `pm-product-discovery/skills/metrics-dashboard/SKILL.md` |
| Update roadmap | "Convert this feature roadmap to an outcome-focused roadmap. Map each feature to a user or business outcome. [paste roadmap]" | `pm-execution/skills/outcome-roadmap/SKILL.md` |
| Competitive landscape | "Run a competitive analysis on [market]. Include strengths and weaknesses per competitor, differentiation gaps, and positioning opportunities." | `pm-market-research/skills/competitor-analysis/SKILL.md` |

#### Thursday — Copilot natural language equivalents

| Task | What to say in Copilot | Skill file to paste |
|---|---|---|
| Pre-meeting status | "Write a stakeholder status report for [initiative]. Overall status: [RAG]. Here are the tickets: [paste]. Include open risks and one decision needed from leadership." | `pm-ai-adoption/skills/jira-workflow/SKILL.md` |
| Meeting notes | "Summarize this meeting transcript into structured notes: decisions made, action items with owners, open questions, and a 3-sentence summary. [paste transcript]" | `pm-execution/skills/summarize-meeting/SKILL.md` |
| Stakeholder map | "Map the stakeholders for [project]. Use a Power × Interest grid. For each stakeholder, describe their interest, communication preference, and what I need from them." | `pm-execution/skills/stakeholder-map/SKILL.md` |

#### Friday — Copilot natural language equivalents

| Task | What to say in Copilot | Skill file to paste |
|---|---|---|
| Sprint review report | "Write a sprint review report. Committed: [N] points. Completed: [list tickets + status]. Not shipped: [list + reasons]. Include velocity, what slowed us, and one thing to change next sprint." | `pm-ai-adoption/skills/jira-workflow/SKILL.md` |
| Sprint retro | "Facilitate a Start/Stop/Continue retrospective from this team feedback: [paste]. Identify themes, root causes, and 2–3 action items with owners." | `pm-execution/skills/retro/SKILL.md` |
| Release notes | "Write user-facing release notes from these tickets: [paste]. Categorize as New Features, Improvements, Bug Fixes. Lead with user benefits, not technical descriptions." | `pm-execution/skills/release-notes/SKILL.md` |
| Weekly async update | "Write a stakeholder update covering all active initiatives. Here's the status for each: [paste per-initiative summaries]. RAG status per initiative, key risks, decisions needed." | `pm-ai-adoption/skills/jira-workflow/SKILL.md` |

#### As-needed — Copilot natural language equivalents

| Situation | What to say in Copilot | Skill file to paste |
|---|---|---|
| Feature request arrives | "Prioritize this feature request against my current backlog. Request: [describe]. Current top priorities: [list]. Evaluate by impact, effort, strategic fit, and risk." | `pm-product-discovery/skills/analyze-feature-requests/SKILL.md` |
| After a user interview | "Summarize this interview using JTBD framework. Identify satisfaction signals, pain points, jobs-to-be-done, and 2–3 follow-up questions. [paste transcript]" | `pm-product-discovery/skills/summarize-interview/SKILL.md` |
| Something is blocked | "Write a Jira blocker note for [TICKET-ID]. Blocked by: [what]. Since: [date]. What's needed to unblock: [describe]. Impact if not resolved by [date]: [describe]." | `pm-ai-adoption/skills/jira-workflow/SKILL.md` |
| "Can we just add X?" | "Run a pre-mortem on this proposed change: [describe change]. Identify Tigers (high-probability risks), Paper Tigers (perceived but unlikely risks), and Elephants (risks no one wants to name)." | `pm-execution/skills/pre-mortem/SKILL.md` |
| Need OKRs for next quarter | "Write team-level OKRs for [team name] aligned to [company objective]. Generate 3 objectives with 2–3 key results each. KRs should be measurable outcomes, not tasks." | `pm-execution/skills/brainstorm-okrs/SKILL.md` |

#### Limitations vs Claude Code / Cowork

| Feature | Copilot (GitHub / M365) | Claude Code / Cowork |
|---|---|---|
| Slash commands (`/write-prd`) | No — use natural language | Yes |
| Skills auto-load | Partial (Copilot Chat in this repo) / Manual paste (M365) | Full auto-load |
| Chained multi-step workflows | Manual — prompt each step separately | Automatic |
| Claude Routines (scheduled automation) | No — Routines require a Claude plan | Yes (Pro/Max/Team/Enterprise) |
| Managed Agents | No | Yes (Enterprise / platform) |
| Jira automation | No | Yes (via Managed Agent with Jira MCP) |

**Bottom line for Copilot-only orgs:** every analytical skill and workflow in this marketplace is available — strategy, discovery, PRDs, retros, stakeholder maps, meeting notes, Jira updates. The automation layer (Routines, Managed Agents, scheduled digests) requires a Claude plan. For orgs that want to start and stay on Copilot, the manual workflow above covers the full PM week.

---

## 2. GitHub Copilot

**What you get:** skills only (no slash commands). Copilot reads the skill frameworks automatically and applies them when you describe what you need in plain language.

### Prerequisites

- GitHub Copilot subscription (Individual, Business, or Enterprise)
- GitHub Copilot Chat enabled in your editor (VS Code, JetBrains, or GitHub.com)

### Setup

No installation required. This repository already includes `.github/copilot-instructions.md`, which GitHub Copilot Chat loads automatically as context whenever you open a chat session in this repo.

**To verify it's working:**

1. Open this repository in VS Code or JetBrains with the GitHub Copilot extension installed.
2. Open Copilot Chat (`Ctrl+Alt+I` on Windows/Linux, `Cmd+Option+I` on Mac).
3. Type: `What PM skills are available in this repo?`
4. Copilot should list the available plugins and skills from the index.

### How to use skills

Skills load automatically when your question matches a PM topic. You do not need to name the skill — just describe what you want.

**Format:**
> [What you want to do] + [your product or context]

**Examples:**

| What you type | Skill Copilot loads |
|---------------|-------------------|
| `Help me build a Lean Canvas for my B2B SaaS` | `pm-product-strategy/skills/lean-canvas` |
| `What are the riskiest assumptions for my new app idea?` | `pm-product-discovery/skills/identify-assumptions-new` |
| `Write a PRD for a smart notification system` | `pm-execution/skills/create-prd` |
| `Build an HTML prototype of our Q2 metrics dashboard` | `pm-ai-shipping/skills/html-prototype` |
| `Plan a GitHub Copilot rollout for our 200-person eng team` | `pm-ai-adoption/skills/ai-adoption-strategy` |
| `Design a value proposition for our HR tool` | `pm-product-strategy/skills/value-proposition` |
| `Map stakeholders for our platform migration` | `pm-execution/skills/stakeholder-map` |

### How to run a workflow (command equivalent)

Copilot does not support slash commands. Describe the workflow steps in plain language instead.

**Examples:**

| Claude Code command | Copilot equivalent |
|--------------------|--------------------|
| `/discover AI writing tool for non-native speakers` | `Run full product discovery on an AI writing tool for non-native speakers: brainstorm ideas, identify the riskiest assumptions, prioritize them, then design experiments. Pause between each step.` |
| `/write-prd Smart notification system` | `Write a complete PRD for a smart notification system that reduces alert fatigue. Use a structured 8-section format.` |
| `/plan-ai-rollout Claude Enterprise for a 500-person firm` | `Build a phased rollout plan for Claude Enterprise at a 500-person financial services firm: pilot design, governance, training, and success metrics.` |
| `/prototype-page Q2 metrics dashboard` | `Generate a complete HTML prototype for a Q2 metrics dashboard. Include static placeholder data, a data.json file, a data loader that supports CSV and API modes, and a GitHub Pages deploy workflow.` |

### Tips for getting better results

- **Be specific about context.** "Write a PRD" gives generic output. "Write a PRD for a bulk export feature in a B2B analytics SaaS with 500 enterprise customers" applies the framework to your actual situation.
- **Ask Copilot to read the skill file directly** if you want the full framework: `Read pm-execution/skills/create-prd/SKILL.md and write a PRD for [your feature].`
- **Chain workflows manually.** After one step completes, ask for the next: `Now identify the riskiest assumptions in that PRD.`
- **Reference the command file for multi-step workflows:** `Read pm-product-discovery/commands/discover.md and run it for [your idea].`

### Limitations vs Claude Code

| Feature | GitHub Copilot | Claude Code |
|---------|---------------|-------------|
| Slash commands (`/write-prd`) | No — use natural language | Yes |
| Auto-loading skills | Partial — via instructions file | Full auto-load |
| Chained multi-step workflows | Manual — prompt each step | Automatic |
| Installation required | No | Yes |

---

## 3. Claude Code (CLI)

**What you get:** full experience — skills auto-load, slash commands work, workflows chain automatically.

### Prerequisites

- Claude Code installed: `npm install -g @anthropic-ai/claude-code`
- A Claude account (Pro or Team plan recommended)

### Step 1: Add the marketplace

```bash
claude plugin marketplace add majidraza1228/agentic-bestpractices-pm-skills
```

### Step 2: Install plugins

Install all 10 plugins at once:

```bash
claude plugin install pm-ai-adoption@agentic-bestpractices-pm-skills
claude plugin install pm-ai-shipping@agentic-bestpractices-pm-skills
claude plugin install pm-product-discovery@agentic-bestpractices-pm-skills
claude plugin install pm-product-strategy@agentic-bestpractices-pm-skills
claude plugin install pm-execution@agentic-bestpractices-pm-skills
claude plugin install pm-market-research@agentic-bestpractices-pm-skills
claude plugin install pm-data-analytics@agentic-bestpractices-pm-skills
claude plugin install pm-go-to-market@agentic-bestpractices-pm-skills
claude plugin install pm-marketing-growth@agentic-bestpractices-pm-skills
claude plugin install pm-toolkit@agentic-bestpractices-pm-skills
```

Or install only the plugins you need — each one is independent.

### Step 3: Verify installation

```bash
claude plugin list
```

You should see all installed plugins listed. If a plugin is missing, re-run its install command.

### How skills work

Skills load automatically when you ask about a relevant PM topic. You do not need to invoke them — Claude detects the topic and loads the right skill.

**Example:**
```
You: What prioritization framework should I use for a 50-item backlog?
```
Claude automatically loads `pm-execution/skills/prioritization-frameworks` and walks you through the options.

**Force-loading a skill** (if Claude doesn't pick it up automatically):
```
/pm-execution:prioritization-frameworks
```
Or just the skill name:
```
/prioritization-frameworks
```

### How to run commands

Type the command name followed by your context:

```
/discover AI-powered meeting summarizer for remote teams
```

```
/write-prd Smart notification system that reduces alert fatigue
```

```
/plan-ai-rollout Claude Enterprise rollout for a 500-person financial services firm
```

```
/prototype-page product metrics dashboard for Q2 exec review — show MAU, conversion rate, NPS, and top feature requests
```

Claude runs each step of the workflow in sequence and pauses for your input where needed. After completing a command, it suggests relevant next commands to continue the workflow.

### All available commands

**AI Adoption**
- `/plan-ai-rollout <tool and team>` — phased rollout plan with pilot, governance, training, success metrics
- `/audit-ai-usage <tool and period>` — audit for adoption gaps, cost waste, safety issues
- `/build-routine <what to automate>` — design a Claude Routine or Cowork Scheduled Task with ready-to-paste prompt
- `/jira-update <ticket ID and what happened>` — write a Jira status comment, acceptance criteria, or blocker note
- `/status-for-meeting <standup|sprint-review|stakeholder>` — meeting-ready status report from Jira data

**AI Shipping**
- `/prototype-page <what to show>` — HTML prototype with static data + GitHub Pages deploy + migration plan
- `/ship-check <repo or area>` — full shipping packet: document → audit → test map → compile
- `/document-app <repo or area>` — reverse-engineer codebase into system docs
- `/derive-tests <repo or area>` — test-coverage map from documented intent
- `/security-audit-static <path>` — static security audit
- `/performance-audit-static <path>` — static performance audit

**Product Discovery**
- `/discover <idea>` — full cycle: ideation → assumptions → prioritization → experiments
- `/brainstorm [ideas|experiments] [existing|new] <product>` — multi-perspective ideation
- `/triage-requests <requests>` — analyze and prioritize feature requests
- `/interview [prep|summarize] <topic or transcript>` — interview script or transcript summary
- `/setup-metrics <product area>` — metrics dashboard design

**Product Strategy**
- `/strategy <product>` — 9-section Strategy Canvas
- `/business-model [lean|full|startup|value-prop] <product>` — business model exploration
- `/value-proposition <product>` — 6-part JTBD value proposition
- `/market-scan <market>` — SWOT + PESTLE + Porter's + Ansoff
- `/pricing <product>` — pricing strategy with competitive analysis

**Execution**
- `/write-prd <feature or problem>` — comprehensive PRD
- `/plan-okrs <team or objective>` — team-level OKRs
- `/transform-roadmap <roadmap>` — convert feature roadmap to outcome-focused
- `/sprint [plan|retro|release-notes] <context>` — sprint lifecycle
- `/pre-mortem <plan or PRD>` — pre-mortem risk analysis
- `/red-team-prd <PRD or strategy>` — adversarial stress-test
- `/meeting-notes <transcript>` — structured meeting summary
- `/stakeholder-map <project>` — Power × Interest grid + communication plan
- `/write-stories [user|job|wwa] <feature>` — backlog items with acceptance criteria
- `/test-scenarios <user stories>` — happy paths, edge cases, error handling
- `/generate-data <description>` — realistic dummy datasets

**Market Research**
- `/research-users <data or product>` — personas, segmentation, customer journey
- `/competitive-analysis <market>` — competitive landscape
- `/analyze-feedback <feedback data>` — sentiment analysis and segment insights

**Data Analytics**
- `/write-query <plain English question>` — SQL generation
- `/analyze-cohorts <data>` — cohort analysis
- `/analyze-test <results>` — A/B test analysis

**Go-to-Market**
- `/plan-launch <product>` — full GTM strategy
- `/growth-strategy <product>` — growth loops and GTM motions
- `/battlecard <your product> vs <competitor>` — competitive battlecard

**Marketing & Growth**
- `/market-product <product>` — marketing ideas, positioning, value props, naming
- `/north-star <product>` — North Star Metric + input metrics

**Toolkit**
- `/review-resume <resume>` — PM resume review
- `/tailor-resume <resume + job description>` — resume tailoring
- `/draft-nda <parties and context>` — NDA draft
- `/privacy-policy <product context>` — privacy policy draft
- `/proofread <text>` — grammar, logic, and flow

### Tips for getting better results

- **Give context, not just a topic.** `/write-prd notification system` is OK. `/write-prd notification system — B2B SaaS, 500 enterprise customers, the problem is alert fatigue in Slack-heavy orgs` is much better.
- **Follow the suggested next commands.** After `/discover`, Claude suggests `/write-prd` or `/brainstorm`. Following the chain builds on prior context.
- **Attach files inline.** For commands like `/analyze-feedback` or `/triage-requests`, paste your data directly after the command or attach a file.
- **Use `[existing|new]` flags.** `/brainstorm ideas existing` and `/brainstorm ideas new` use different frameworks — pick the right one for your situation.

---

## 4. Claude Cowork

**What you get:** full experience — skills auto-load, slash commands work, visual plugin browser. Recommended for non-developers.

### Prerequisites

- Claude account (Pro or Team plan)
- Access to Claude Cowork (cowork.claude.ai)

### Step 1: Open the plugin browser

1. Open Claude Cowork.
2. Click **Customize** in the bottom-left corner.
3. Go to **Browse plugins** → **Personal** → click **+**.

### Step 2: Add the marketplace

1. Select **Add marketplace from GitHub**.
2. Enter: `majidraza1228/agentic-bestpractices-pm-skills`
3. Click **Add**.

All 10 plugins appear in your plugin list automatically.

### Step 3: Enable plugins

Toggle on the plugins you want to use. You can enable all 10 or just the ones relevant to your work.

### How skills work

Same as Claude Code — skills load automatically when relevant. No invocation needed.

**Example:**
```
What's the best beachhead segment for a developer productivity tool?
```
Claude loads `pm-go-to-market/skills/beachhead-segment` and applies the framework.

### How to run commands

Type the slash command in the chat input:

```
/discover AI-powered meeting summarizer for remote teams
```

Claude Cowork shows available commands as you type `/` — you can browse and select from the list.

### Tips for getting better results

- **Browse commands by typing `/`** — a dropdown shows all available commands across installed plugins.
- **Use natural language for skills, slash commands for workflows.** Skills trigger on topic; commands give you the full structured workflow.
- **Install all 10 plugins** for the best experience — many workflows reference skills from multiple plugins.

---

## 5. Microsoft Tech Stack Alternatives

If your organization runs on Microsoft 365 and GitHub Copilot, you have four options — ordered from easiest to most powerful.

---

### Option 1: GitHub Copilot Chat (easiest, no setup)

**Best for:** developers and PMs already using VS Code or JetBrains with Copilot.

This is the same as [Section 1](#1-github-copilot). No additional setup — `.github/copilot-instructions.md` is already in this repo and Copilot Chat loads it automatically.

**Open Copilot Chat and describe what you need in plain language:**

```
Write a PRD for a smart notification system that reduces alert fatigue in Slack-heavy teams.
```

```
Build a phased rollout plan for GitHub Copilot across our 200-person engineering org.
```

Copilot reads the relevant skill from this repo and applies the framework.

**Limitation:** only works inside this repository. If you want to use PM skills in any chat session (not tied to this repo), use Option 2 or 3.

---

### Option 2: Microsoft Copilot (web) — copilot.microsoft.com

**Best for:** PMs who want to use PM skills in a standalone chat, without a code editor.

Microsoft Copilot at [copilot.microsoft.com](https://copilot.microsoft.com) is a general-purpose AI chat. It does not load this repo's skills automatically, but you can paste any skill directly into your prompt.

#### Step-by-step

**1. Find the skill you want.**
Each skill lives in `pm-{plugin}/skills/{skill-name}/SKILL.md`. Open the file in GitHub.

For example, for the PRD skill:
```
pm-execution/skills/create-prd/SKILL.md
```

**2. Copy the skill content.**
Open the file on GitHub, click **Raw**, select all, and copy.

**3. Paste it as context in your Microsoft Copilot chat.**
Start your message with the skill content, then add your request:

```
[paste the full SKILL.md content here]

---

Using the framework above, write a PRD for a smart notification system that reduces alert fatigue.
```

**4. For repeat use, save your prompt as a reusable snippet.**
Microsoft Copilot does not have a plugin system, so the easiest way to reuse skills is to save your most-used prompts in a text file or Notion/OneNote page for quick copy-paste.

**Skills that work well via copy-paste:**

| Task | Skill file to paste |
|------|--------------------|
| Write a PRD | `pm-execution/skills/create-prd/SKILL.md` |
| Plan an AI rollout | `pm-ai-adoption/skills/ai-adoption-strategy/SKILL.md` |
| Lean Canvas | `pm-product-strategy/skills/lean-canvas/SKILL.md` |
| Stakeholder map | `pm-execution/skills/stakeholder-map/SKILL.md` |
| HTML prototype | `pm-ai-shipping/skills/html-prototype/SKILL.md` |

**Limitation:** no auto-loading, no slash commands, no chaining. Manual copy-paste each time.

---

### Option 3: Microsoft 365 Copilot (Teams, Word, Outlook)

**Best for:** PMs who live in Teams and Word and want PM frameworks available in their daily Microsoft tools.

Microsoft 365 Copilot can reference files stored in SharePoint or OneDrive. You can upload skill files to SharePoint and reference them in Copilot.

#### Step-by-step

**1. Upload skill files to SharePoint.**

Create a folder in your team's SharePoint site, e.g. `PM Skills`:

```
SharePoint > [Your Team Site] > Documents > PM Skills
```

Upload the `SKILL.md` files you use most — or the entire repo folder. You can clone the repo and upload, or download individual files from GitHub.

**2. Reference a skill in Teams Copilot.**

In Microsoft Teams with Copilot enabled, use `/` to reference the file:

```
/[PM Skills/create-prd.md] Write a PRD for a smart notification system that reduces alert fatigue.
```

Or reference it by asking Copilot to find it:

```
Using the PRD framework in the PM Skills SharePoint folder, write a PRD for a smart notification system.
```

**3. Use in Word Copilot.**

Open Word, click **Copilot** in the ribbon, then:

```
Using the stakeholder mapping framework from [link to SKILL.md in SharePoint], map the stakeholders for our platform migration project.
```

**4. Use in Outlook Copilot.**

When drafting an email or summarizing a meeting, you can reference skills:

```
Using the meeting notes framework from PM Skills, summarize this transcript into decisions and action items.
```

**Limitation:** requires SharePoint access and manual file management. Skill updates in this repo need to be re-uploaded to SharePoint to stay current.

---

### Option 4: Microsoft Copilot Studio (closest to Claude Cowork)

**Best for:** organizations that want a proper internal PM skills assistant, available to the whole team without manual file management.

Copilot Studio lets you build a custom AI assistant ("copilot") that automatically loads the PM skills as a knowledge base. This is the closest Microsoft equivalent to Claude Cowork — your team gets a dedicated PM assistant with the skills pre-loaded.

#### Step-by-step

**1. Open Copilot Studio.**

Go to [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com) and sign in with your Microsoft 365 account.

**2. Create a new copilot.**

Click **Create** → **New copilot**.

Give it a name, e.g. `PM Skills Assistant`.

**3. Add PM Skills as a knowledge source.**

In the **Knowledge** tab:
- Click **Add knowledge** → **Public website or file**.
- Option A — GitHub (public): add `https://github.com/majidraza1228/agentic-bestpractices-pm-skills` as a website source. Copilot Studio crawls the repo and indexes the skill content.
- Option B — SharePoint: upload the skill files to SharePoint first (see Option 3), then add the SharePoint folder as a knowledge source. This gives you more control over what's indexed.

**4. Set the system prompt.**

In the **Instructions** tab, add:

```
You are a PM Skills Assistant. When a user asks about a PM topic, find the most relevant skill in your knowledge base and apply its framework to their question. For multi-step workflows (discovery, PRD writing, launch planning), walk through each step in order and pause for user input between steps.
```

**5. Publish and share.**

Click **Publish**. You can deploy the copilot to:
- Microsoft Teams (most common — your team accesses it from the Teams sidebar)
- A standalone web page
- SharePoint

**6. Use it in Teams.**

Your team opens the PM Skills Assistant in Teams and types naturally:

```
Help me write a PRD for a smart notification feature.
```

```
Plan a GitHub Copilot rollout for our engineering team.
```

```
What's the best prioritization framework for a 50-item backlog?
```

The assistant finds the relevant skill from the knowledge base and walks the user through the framework.

**Limitation:** requires a Microsoft 365 Copilot license and Copilot Studio access. Initial setup takes 30–60 minutes. Skill updates in this repo require re-indexing the knowledge source.

---

### Which option should you choose?

| Option | Setup time | Best for | Skills auto-load? | Commands? |
|--------|-----------|---------|-------------------|-----------|
| GitHub Copilot Chat | None | Developers in VS Code | Partial | No — natural language |
| Microsoft Copilot (web) | None | Quick one-off tasks | No — paste manually | No |
| M365 Copilot (Teams/Word) | 30 min | PMs in the Microsoft 365 daily flow | Partial — via SharePoint | No |
| Copilot Studio | 30–60 min | Teams that want a shared PM assistant | Yes — knowledge base | No |
| **Claude Cowork** | 5 min | Any PM, best overall experience | Yes — full auto-load | Yes — 45 commands |

---

## 6. Common Workflows — Side by Side

### Build a product prototype for stakeholder feedback

| Tool | What to type |
|------|-------------|
| **Claude Code** | `/prototype-page product metrics dashboard for Q2 exec review — MAU, conversion rate, NPS, top feature requests` |
| **Cowork** | `/prototype-page product metrics dashboard for Q2 exec review` |
| **GitHub Copilot Chat** | `Build a complete HTML prototype for a Q2 metrics dashboard. Include KPI cards (MAU, conversion, NPS), a feature request table, a data.json file, a loader that supports CSV and API modes, and a GitHub Pages deploy workflow.` |
| **Microsoft Copilot / M365** | Paste `pm-ai-shipping/skills/html-prototype/SKILL.md` then: `Build an HTML prototype for a Q2 metrics dashboard with MAU, conversion rate, NPS, and a feature request table.` |
| **Copilot Studio** | `Build an HTML prototype for a Q2 metrics dashboard with MAU, conversion rate, NPS, and a feature request table.` |

---

### Plan an AI tool rollout

| Tool | What to type |
|------|-------------|
| **Claude Code** | `/plan-ai-rollout GitHub Copilot for a 200-person engineering org` |
| **Cowork** | `/plan-ai-rollout GitHub Copilot for a 200-person engineering org` |
| **GitHub Copilot Chat** | `Build a phased rollout plan for GitHub Copilot across our 200-person engineering org. Cover pilot design, stakeholder alignment, governance, training, and success metrics.` |
| **Microsoft Copilot / M365** | Paste `pm-ai-adoption/skills/ai-adoption-strategy/SKILL.md` then: `Plan a GitHub Copilot rollout for a 200-person engineering org.` |
| **Copilot Studio** | `Plan a GitHub Copilot rollout for a 200-person engineering org.` |

---

### Run product discovery on a new idea

| Tool | What to type |
|------|-------------|
| **Claude Code** | `/discover AI writing tool for non-native English speakers` |
| **Cowork** | `/discover AI writing tool for non-native English speakers` |
| **GitHub Copilot Chat** | `Run full product discovery on an AI writing tool for non-native English speakers. Step 1: brainstorm ideas. Step 2: identify riskiest assumptions. Step 3: prioritize them. Step 4: design experiments. Pause between each step.` |
| **Microsoft Copilot / M365** | Paste `pm-product-discovery/commands/discover.md` then: `Run this discovery workflow for an AI writing tool for non-native English speakers.` |
| **Copilot Studio** | `Run product discovery on an AI writing tool for non-native English speakers — brainstorm, identify assumptions, prioritize, design experiments.` |

---

### Write a PRD

| Tool | What to type |
|------|-------------|
| **Claude Code** | `/write-prd smart notification system that reduces alert fatigue in Slack-heavy teams` |
| **Cowork** | `/write-prd smart notification system that reduces alert fatigue` |
| **GitHub Copilot Chat** | `Write a comprehensive PRD for a smart notification system that reduces alert fatigue in Slack-heavy teams. Use an 8-section structure: problem statement, goals, user stories, requirements, out of scope, success metrics, risks, and open questions.` |
| **Microsoft Copilot / M365** | Paste `pm-execution/skills/create-prd/SKILL.md` then: `Write a PRD for a smart notification system that reduces alert fatigue.` |
| **Copilot Studio** | `Write a PRD for a smart notification system that reduces alert fatigue in Slack-heavy teams.` |

---

### Audit AI tool adoption

| Tool | What to type |
|------|-------------|
| **Claude Code** | `/audit-ai-usage We've had Copilot for 6 months but adoption is below 30%` |
| **Cowork** | `/audit-ai-usage Copilot — 6 months in, below 30% adoption` |
| **GitHub Copilot Chat** | `Audit our GitHub Copilot adoption. We've had it for 6 months and adoption is below 30%. Identify cost waste, safety gaps, low-adoption causes, and the top 3 quick wins.` |
| **Microsoft Copilot / M365** | Paste `pm-ai-adoption/commands/audit-ai-usage.md` then: `Audit our Copilot adoption — 6 months in, below 30%.` |
| **Copilot Studio** | `Audit our GitHub Copilot adoption — 6 months in, below 30%. Find cost waste, safety gaps, and quick wins.` |
