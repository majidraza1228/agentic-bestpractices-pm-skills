# PM Skills Marketplace — Copilot Instructions

This repository is a marketplace of 10 PM Skills plugins (77 skills, 48 commands) that bring structured product-management frameworks to AI assistants. It is built for PMs leading AI adoption inside their organizations.

## How to use this with Copilot

### Skills — load when the topic matches
When the user's request maps to a skill below, **read the full SKILL.md file first**, then apply its framework to answer. The SKILL.md contains the structured methodology — do not rely on general knowledge when a skill exists.

Example:
> User: "Help me build a Lean Canvas for my SaaS idea"
> Action: Read `pm-product-strategy/skills/lean-canvas/SKILL.md`, then apply the framework.

### Commands — read the .md and follow the steps
Commands are end-to-end workflows. When the user asks to run one, **read the command's .md file** and follow its steps in order, pausing between steps if the workflow requires confirmation.

Example:
> User: "Run product discovery on my AI writing tool idea"
> Action: Read `pm-product-discovery/commands/discover.md`, then execute each step.

### Finding the right skill or command
If the user's intent isn't an exact match, use the indexes below to find the closest skill or command. Read the file before proceeding — the content always contains more detail than the one-line description here.

---

## Skills index

### pm-ai-adoption
| Skill | Path |
|-------|------|
| AI rollout strategy — phased pilot design, stakeholder alignment, change management, tool-specific guidance for Copilot/M365/Claude | `pm-ai-adoption/skills/ai-adoption-strategy/SKILL.md` |
| AI safety & governance — acceptable use policies, data classification, DLP, incident response, compliance | `pm-ai-adoption/skills/ai-safety-governance/SKILL.md` |
| AI success metrics — KPIs, breadth/quality/productivity measurement, ROI calculation, OKR templates | `pm-ai-adoption/skills/ai-success-metrics/SKILL.md` |
| AI token optimization — prompt efficiency, context management, model selection, team-level cost budgeting | `pm-ai-adoption/skills/ai-token-optimization/SKILL.md` |
| Claude Routines — surface selection (Routines vs Cowork vs Managed Agents), prompt formula, stateless memory pattern, failure modes | `pm-ai-adoption/skills/claude-routines/SKILL.md` |
| Managed Agents design — agent spec, MCP connections, engineer handoff checklist, guardrails for team-scale automation | `pm-ai-adoption/skills/managed-agents-design/SKILL.md` |
| Jira workflow — write ticket updates/AC/blocker notes, set up automated Jira tracking, generate meeting-ready reports from Jira data | `pm-ai-adoption/skills/jira-workflow/SKILL.md` |
| PM + Project Manager dual role — split work between hats, protect strategic time, automate delivery tasks with Claude | `pm-ai-adoption/skills/pm-project-dual-role/SKILL.md` |

### pm-ai-shipping
| Skill | Path |
|-------|------|
| HTML prototype — build a static page for stakeholder feedback; four-phase migration to CSV/API/DB; GitHub Pages hosting | `pm-ai-shipping/skills/html-prototype/SKILL.md` |
| Shipping artifacts — documentation set (architecture, flows, permissions, variables, tests) that makes AI-built code reviewable | `pm-ai-shipping/skills/shipping-artifacts/SKILL.md` |
| Intended vs implemented — method for finding gaps between documented intent and what the code actually does | `pm-ai-shipping/skills/intended-vs-implemented/SKILL.md` |

### pm-product-discovery
| Skill | Path |
|-------|------|
| Brainstorm ideas — existing product | `pm-product-discovery/skills/brainstorm-ideas-existing/SKILL.md` |
| Brainstorm ideas — new product | `pm-product-discovery/skills/brainstorm-ideas-new/SKILL.md` |
| Brainstorm experiments — existing product | `pm-product-discovery/skills/brainstorm-experiments-existing/SKILL.md` |
| Brainstorm experiments — new product (pretotypes, Alberto Savoia) | `pm-product-discovery/skills/brainstorm-experiments-new/SKILL.md` |
| Identify assumptions — existing product (Value/Usability/Viability/Feasibility) | `pm-product-discovery/skills/identify-assumptions-existing/SKILL.md` |
| Identify assumptions — new product (8 risk categories incl. Go-to-Market, Team) | `pm-product-discovery/skills/identify-assumptions-new/SKILL.md` |
| Prioritize assumptions — Impact × Risk matrix with experiment suggestions | `pm-product-discovery/skills/prioritize-assumptions/SKILL.md` |
| Prioritize features — impact, effort, risk, strategic alignment | `pm-product-discovery/skills/prioritize-features/SKILL.md` |
| Analyze feature requests — categorize by theme and strategic fit | `pm-product-discovery/skills/analyze-feature-requests/SKILL.md` |
| Opportunity Solution Tree — Teresa Torres framework | `pm-product-discovery/skills/opportunity-solution-tree/SKILL.md` |
| Interview script — JTBD probing questions | `pm-product-discovery/skills/interview-script/SKILL.md` |
| Summarize interview — JTBD, satisfaction signals, action items | `pm-product-discovery/skills/summarize-interview/SKILL.md` |
| Metrics dashboard — North Star, input metrics, alert thresholds | `pm-product-discovery/skills/metrics-dashboard/SKILL.md` |

### pm-product-strategy
| Skill | Path |
|-------|------|
| Product strategy — 9-section Strategy Canvas (vision → defensibility) | `pm-product-strategy/skills/product-strategy/SKILL.md` |
| Startup canvas — Product Strategy + Business Model combined | `pm-product-strategy/skills/startup-canvas/SKILL.md` |
| Product vision — inspiring, achievable, emotional | `pm-product-strategy/skills/product-vision/SKILL.md` |
| Value proposition — 6-part JTBD (Who/Why/What before/How/What after/Alternatives) | `pm-product-strategy/skills/value-proposition/SKILL.md` |
| Lean Canvas | `pm-product-strategy/skills/lean-canvas/SKILL.md` |
| Business Model Canvas | `pm-product-strategy/skills/business-model/SKILL.md` |
| Monetization strategy — 3–5 strategies with validation experiments | `pm-product-strategy/skills/monetization-strategy/SKILL.md` |
| Pricing strategy — models, competitive analysis, willingness-to-pay | `pm-product-strategy/skills/pricing-strategy/SKILL.md` |
| SWOT analysis | `pm-product-strategy/skills/swot-analysis/SKILL.md` |
| PESTLE analysis | `pm-product-strategy/skills/pestle-analysis/SKILL.md` |
| Porter's Five Forces | `pm-product-strategy/skills/porters-five-forces/SKILL.md` |
| Ansoff Matrix — growth strategy across markets and products | `pm-product-strategy/skills/ansoff-matrix/SKILL.md` |

### pm-execution
| Skill | Path |
|-------|------|
| PRD (Product Requirements Document) — 8-section template | `pm-execution/skills/create-prd/SKILL.md` |
| OKRs — team-level, aligned to company objectives | `pm-execution/skills/brainstorm-okrs/SKILL.md` |
| Outcome roadmap — convert feature list to outcome-focused roadmap | `pm-execution/skills/outcome-roadmap/SKILL.md` |
| Sprint plan — capacity, story selection, risk | `pm-execution/skills/sprint-plan/SKILL.md` |
| Retrospective — structured facilitation | `pm-execution/skills/retro/SKILL.md` |
| Release notes — user-facing, from tickets/PRD/changelog | `pm-execution/skills/release-notes/SKILL.md` |
| Pre-mortem — Tigers/Paper Tigers/Elephants risk classification | `pm-execution/skills/pre-mortem/SKILL.md` |
| Stakeholder map — Power × Interest grid with communication plan | `pm-execution/skills/stakeholder-map/SKILL.md` |
| Summarize meeting — decisions + action items from transcript | `pm-execution/skills/summarize-meeting/SKILL.md` |
| User stories — 3 C's and INVEST criteria | `pm-execution/skills/user-stories/SKILL.md` |
| Job stories — When/I want to/So I can format | `pm-execution/skills/job-stories/SKILL.md` |
| WWA stories — Why-What-Acceptance format | `pm-execution/skills/wwas/SKILL.md` |
| Test scenarios — happy paths, edge cases, error handling | `pm-execution/skills/test-scenarios/SKILL.md` |
| Dummy dataset — realistic CSV/JSON/SQL/Python test data | `pm-execution/skills/dummy-dataset/SKILL.md` |
| Prioritization frameworks — reference guide: Opportunity Score, ICE, RICE, MoSCoW, Kano | `pm-execution/skills/prioritization-frameworks/SKILL.md` |
| Strategy red-team — adversarial stress-test, rank assumptions by cheapest test | `pm-execution/skills/strategy-red-team/SKILL.md` |

### pm-market-research
| Skill | Path |
|-------|------|
| User personas — from research data | `pm-market-research/skills/user-personas/SKILL.md` |
| Market segments — 3–5 segments with JTBD and product fit | `pm-market-research/skills/market-segments/SKILL.md` |
| User segmentation — from feedback data | `pm-market-research/skills/user-segmentation/SKILL.md` |
| Customer journey map — stages, touchpoints, emotions, pain points | `pm-market-research/skills/customer-journey-map/SKILL.md` |
| Market sizing — TAM/SAM/SOM top-down and bottom-up | `pm-market-research/skills/market-sizing/SKILL.md` |
| Competitor analysis — strengths, weaknesses, differentiation | `pm-market-research/skills/competitor-analysis/SKILL.md` |
| Sentiment analysis — themes from user feedback | `pm-market-research/skills/sentiment-analysis/SKILL.md` |

### pm-data-analytics
| Skill | Path |
|-------|------|
| SQL queries — generate from natural language (BigQuery/PostgreSQL/MySQL) | `pm-data-analytics/skills/sql-queries/SKILL.md` |
| Cohort analysis — retention curves, feature adoption, engagement trends | `pm-data-analytics/skills/cohort-analysis/SKILL.md` |
| A/B test analysis — statistical significance, sample size, ship/extend/stop | `pm-data-analytics/skills/ab-test-analysis/SKILL.md` |

### pm-go-to-market
| Skill | Path |
|-------|------|
| GTM strategy — channels, messaging, success metrics, launch plan | `pm-go-to-market/skills/gtm-strategy/SKILL.md` |
| Beachhead segment — identify first market segment | `pm-go-to-market/skills/beachhead-segment/SKILL.md` |
| Ideal Customer Profile — demographics, behaviors, JTBD, needs | `pm-go-to-market/skills/ideal-customer-profile/SKILL.md` |
| Growth loops — sustainable flywheel design | `pm-go-to-market/skills/growth-loops/SKILL.md` |
| GTM motions — product-led vs sales-led evaluation | `pm-go-to-market/skills/gtm-motions/SKILL.md` |
| Competitive battlecard — objection handling, win strategies | `pm-go-to-market/skills/competitive-battlecard/SKILL.md` |

### pm-marketing-growth
| Skill | Path |
|-------|------|
| Marketing ideas — creative, cost-effective, with channels | `pm-marketing-growth/skills/marketing-ideas/SKILL.md` |
| Positioning ideas — differentiated from competitors | `pm-marketing-growth/skills/positioning-ideas/SKILL.md` |
| Value prop statements — for marketing, sales, onboarding | `pm-marketing-growth/skills/value-prop-statements/SKILL.md` |
| Product naming — aligned to brand values and audience | `pm-marketing-growth/skills/product-name/SKILL.md` |
| North Star metric — with input metrics and business game classification | `pm-marketing-growth/skills/north-star-metric/SKILL.md` |

### pm-toolkit
| Skill | Path |
|-------|------|
| Resume review — PM resume against 10 best practices (XYZ+S formula) | `pm-toolkit/skills/review-resume/SKILL.md` |
| Draft NDA — jurisdiction-appropriate clauses | `pm-toolkit/skills/draft-nda/SKILL.md` |
| Privacy policy — GDPR/CCPA compliance | `pm-toolkit/skills/privacy-policy/SKILL.md` |
| Grammar check — grammar, logic, flow with targeted fixes | `pm-toolkit/skills/grammar-check/SKILL.md` |

---

## Commands index

Commands are multi-step workflows. Always read the command file before running.

| Command | What it does | Path |
|---------|-------------|------|
| `/plan-ai-rollout` | Phased AI tool rollout plan — pilot, governance, training, success metrics | `pm-ai-adoption/commands/plan-ai-rollout.md` |
| `/audit-ai-usage` | Audit AI tool usage for adoption gaps, cost waste, safety issues | `pm-ai-adoption/commands/audit-ai-usage.md` |
| `/build-routine` | Design a Claude Routine or Cowork Scheduled Task with ready-to-paste prompt and setup checklist | `pm-ai-adoption/commands/build-routine.md` |
| `/jira-update` | Write a Jira ticket status comment, acceptance criteria, or blocker note from a verbal description | `pm-ai-adoption/commands/jira-update.md` |
| `/status-for-meeting` | Generate a meeting-ready status report from Jira data — standup, sprint review, or stakeholder update | `pm-ai-adoption/commands/status-for-meeting.md` |
| `/prototype-page` | Generate HTML prototype with static data + GitHub Pages deploy + migration plan | `pm-ai-shipping/commands/prototype-page.md` |
| `/ship-check` | Full shipping sequence: document → audit → test map → shipping packet | `pm-ai-shipping/commands/ship-check.md` |
| `/document-app` | Reverse-engineer codebase into reviewer-ready system docs | `pm-ai-shipping/commands/document-app.md` |
| `/derive-tests` | Turn documented intent into a test-coverage map | `pm-ai-shipping/commands/derive-tests.md` |
| `/security-audit-static` | Static security audit with intent cross-reference | `pm-ai-shipping/commands/security-audit-static.md` |
| `/performance-audit-static` | Static performance audit — over-fetching, indexes, caching | `pm-ai-shipping/commands/performance-audit-static.md` |
| `/discover` | Full discovery cycle: ideation → assumptions → prioritization → experiments | `pm-product-discovery/commands/discover.md` |
| `/brainstorm` | Multi-perspective ideation (ideas or experiments, existing or new) | `pm-product-discovery/commands/brainstorm.md` |
| `/triage-requests` | Analyze and prioritize a batch of feature requests | `pm-product-discovery/commands/triage-requests.md` |
| `/interview` | Prepare interview script or summarize transcript | `pm-product-discovery/commands/interview.md` |
| `/setup-metrics` | Design a product metrics dashboard | `pm-product-discovery/commands/setup-metrics.md` |
| `/strategy` | 9-section Product Strategy Canvas | `pm-product-strategy/commands/strategy.md` |
| `/business-model` | Lean/full/startup canvas or value proposition | `pm-product-strategy/commands/business-model.md` |
| `/value-proposition` | 6-part JTBD value proposition | `pm-product-strategy/commands/value-proposition.md` |
| `/market-scan` | SWOT + PESTLE + Porter's + Ansoff in one scan | `pm-product-strategy/commands/market-scan.md` |
| `/pricing` | Pricing strategy with competitive analysis and experiments | `pm-product-strategy/commands/pricing.md` |
| `/write-prd` | Comprehensive PRD from feature idea or problem statement | `pm-execution/commands/write-prd.md` |
| `/plan-okrs` | Team-level OKRs aligned with company objectives | `pm-execution/commands/plan-okrs.md` |
| `/transform-roadmap` | Convert feature roadmap to outcome-focused | `pm-execution/commands/transform-roadmap.md` |
| `/sprint` | Sprint lifecycle: plan, retro, or release notes | `pm-execution/commands/sprint.md` |
| `/pre-mortem` | Pre-mortem risk analysis | `pm-execution/commands/pre-mortem.md` |
| `/red-team-prd` | Adversarial stress-test of PRD, roadmap, or strategy | `pm-execution/commands/red-team-prd.md` |
| `/meeting-notes` | Summarize transcript into structured notes | `pm-execution/commands/meeting-notes.md` |
| `/stakeholder-map` | Stakeholder Power × Interest grid + communication plan | `pm-execution/commands/stakeholder-map.md` |
| `/write-stories` | Break feature into user/job/WWA backlog items | `pm-execution/commands/write-stories.md` |
| `/test-scenarios` | Test scenarios from user stories | `pm-execution/commands/test-scenarios.md` |
| `/generate-data` | Realistic dummy datasets as CSV/JSON/SQL/Python | `pm-execution/commands/generate-data.md` |
| `/research-users` | Personas, segmentation, customer journey from research data | `pm-market-research/commands/research-users.md` |
| `/competitive-analysis` | Competitive landscape analysis | `pm-market-research/commands/competitive-analysis.md` |
| `/analyze-feedback` | Sentiment analysis and segment insights from user feedback | `pm-market-research/commands/analyze-feedback.md` |
| `/write-query` | SQL from natural language | `pm-data-analytics/commands/write-query.md` |
| `/analyze-cohorts` | Cohort analysis on user data | `pm-data-analytics/commands/analyze-cohorts.md` |
| `/analyze-test` | A/B test results analysis | `pm-data-analytics/commands/analyze-test.md` |
| `/plan-launch` | Full GTM strategy: beachhead → ICP → messaging → launch plan | `pm-go-to-market/commands/plan-launch.md` |
| `/growth-strategy` | Growth loops and GTM motions | `pm-go-to-market/commands/growth-strategy.md` |
| `/battlecard` | Competitive battlecard | `pm-go-to-market/commands/battlecard.md` |
| `/market-product` | Marketing ideas, positioning, value props, product names | `pm-marketing-growth/commands/market-product.md` |
| `/north-star` | North Star Metric + input metrics | `pm-marketing-growth/commands/north-star.md` |
| `/review-resume` | Comprehensive PM resume review | `pm-toolkit/commands/review-resume.md` |
| `/tailor-resume` | Tailor resume to a job description | `pm-toolkit/commands/tailor-resume.md` |
| `/draft-nda` | Draft an NDA | `pm-toolkit/commands/draft-nda.md` |
| `/privacy-policy` | Draft a privacy policy | `pm-toolkit/commands/privacy-policy.md` |
| `/proofread` | Grammar, logic, and flow check | `pm-toolkit/commands/proofread.md` |

---

## Template

A ready-to-use HTML prototype starter is at `templates/html-prototype/`. Copy it, edit the `<script id="page-data">` block in `index.html`, push to GitHub, enable Pages.
