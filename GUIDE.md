# How to Use PM Skills Marketplace

Step-by-step instructions for GitHub Copilot, Claude Code, Claude Cowork, and Microsoft tech stack alternatives.

---

## Table of Contents

1. [GitHub Copilot](#1-github-copilot)
2. [Claude Code (CLI)](#2-claude-code-cli)
3. [Claude Cowork](#3-claude-cowork)
4. [Microsoft Tech Stack Alternatives](#4-microsoft-tech-stack-alternatives)
5. [Common Workflows — Side by Side](#5-common-workflows--side-by-side)

---

## 1. GitHub Copilot

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

## 2. Claude Code (CLI)

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

## 3. Claude Cowork

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

## 4. Microsoft Tech Stack Alternatives

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

## 5. Common Workflows — Side by Side

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
