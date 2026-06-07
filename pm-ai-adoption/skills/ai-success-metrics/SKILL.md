---
name: ai-success-metrics
description: "Define and measure success for enterprise AI tool adoption (GitHub Copilot, Microsoft 365 Copilot, Claude). Covers adoption KPIs, productivity measurement, ROI calculation, and leading vs. lagging indicators. Use when defining success criteria for an AI rollout, building an AI adoption dashboard, reporting on AI program ROI, or setting OKRs for an AI initiative."
---

# AI Adoption Success Metrics

## Purpose

"We deployed Copilot to 500 people" is not a success metric — it is a deployment count. This skill defines the metrics that tell you whether AI tools are actually changing how people work, at what cost, and with what return.

## The Measurement Hierarchy

Don't measure everything. Measure in layers:

```
Business outcomes  (Did it move the needle that matters?)
    ↑
Productivity impact  (Are people working faster or better?)
    ↑
Adoption quality  (Are the right people using it the right way?)
    ↑
Adoption breadth  (Are enough people using it at all?)
```

Start at the bottom; optimize upward.

---

## Layer 1: Adoption Breadth

These are your leading indicators. They tell you whether the rollout is working, not whether the tool is valuable.

| Metric | Definition | Target |
|--------|-----------|--------|
| Activation rate | % of provisioned users who have used the tool at least once | ≥ 80% within 30 days of access |
| Weekly Active Users (WAU) | % of provisioned users active in the past 7 days | ≥ 50% by month 2 |
| Monthly Active Users (MAU) | % active in the past 30 days | ≥ 70% by month 3 |
| Stickiness (WAU/MAU) | How consistently active users return | ≥ 60% (benchmark for a "habit") |

**Red flags:**
- High activation, low WAU: users tried it once and stopped — investigate why
- Low activation: access/training problem, not a value problem

---

## Layer 2: Adoption Quality

Volume of use tells you nothing about value. Quality metrics tell you whether use is deliberate and substantive.

| Metric | Definition | Why It Matters |
|--------|-----------|----------------|
| Sessions per active user per week | Average interactions per active user | Low sessions = shallow engagement |
| Acceptance rate (Copilot code) | % of code suggestions accepted by developers | Industry benchmark: ~25–30% acceptance is healthy |
| Task completion rate | % of AI-assisted tasks that reach a useful output | Measures whether the tool actually helps |
| Use-case diversity | How many distinct use cases per team | Narrow use cases = fragile adoption |
| Champion ratio | % of teams with an active AI champion | Champions drive organic expansion |

**Qualitative signal to collect monthly:**
- "What's the most useful thing you did with AI this week?"
- "What did you try that didn't work?"

---

## Layer 3: Productivity Impact

This is harder to measure but is the only thing leadership cares about. Be honest about attribution — AI tools rarely produce a clean before/after.

### Developer productivity (GitHub Copilot)

| Metric | How to Measure |
|--------|---------------|
| PR cycle time | Time from first commit to merge — compare pre/post Copilot cohorts |
| Code review rework rate | % of PRs with major rework requested — lower is better |
| Lines of code per sprint | Directional only; combine with quality metrics |
| Self-reported time saved | Survey: "How many hours per week does Copilot save you?" |

GitHub's own research benchmark: developers with Copilot complete tasks ~55% faster (new code tasks). Realistic org benchmark: 15–30% time savings on coding tasks after 3 months.

### Knowledge worker productivity (M365 Copilot, Claude)

| Metric | How to Measure |
|--------|---------------|
| Meeting summary time | Self-report: minutes spent writing meeting notes before vs. after |
| First draft to final ratio | How many revision cycles before a document is approved |
| Email response time | Average response time for teams using Copilot in Outlook |
| Time to insight | How long it takes an analyst to produce a report |

**Survey cadence:** quarterly pulse (5 questions, 2 minutes) to the full user base.

---

## Layer 4: Business Outcomes

Connect AI adoption to outcomes your executive team tracks:

| Business Outcome | AI Contribution Signal |
|-----------------|----------------------|
| Engineering velocity | Sprint velocity trend for Copilot-enabled teams vs. control |
| Time-to-market | Release frequency or lead time for change (DORA metrics) |
| Customer support efficiency | Tickets resolved per agent (if using AI-assisted support) |
| Content output volume | Number of assets produced per marketer or PM per quarter |
| Employee satisfaction | eNPS or engagement scores for AI-enabled vs. non-enabled teams |

**Don't overclaim.** AI is one of many factors. Present it as a contributing factor with directional evidence, not a single-cause attribution.

---

## ROI Calculation Framework

```
Annual ROI = (Time Saved × Hourly Cost) - (License Cost + Training Cost + Governance Cost)
```

**Example:**
- 100 developers, avg. $75/hr fully loaded
- Copilot saves 1 hour/developer/day (conservative)
- 240 working days/year
- Time saved value: 100 × $75 × 240 = $1,800,000/year
- License cost: 100 × $19/month × 12 = $22,800/year
- Training + governance: $30,000 (one-time)
- **Year 1 ROI: ($1,800,000 - $52,800) / $52,800 = ~33× return**

Even at 20% of claimed savings (a skeptic's assumption), ROI is strongly positive. The calculation's purpose is to show leadership the order of magnitude and to establish the baseline for measuring actual savings.

---

## Reporting Cadence

| Report | Audience | Frequency | Contents |
|--------|---------|-----------|----------|
| Adoption pulse | AI PM, team leads | Weekly | WAU, activation rate, new use cases this week |
| Program review | Department heads | Monthly | MAU, adoption quality metrics, top wins, blockers |
| Executive summary | C-suite | Quarterly | Business outcome metrics, ROI progress, cost vs. budget |

---

## OKR Template for AI Adoption

**Objective:** Make AI tools a standard part of how our teams work

**Key Results:**
- KR1: Achieve ≥ 70% MAU across all provisioned users by [date]
- KR2: ≥ 3 documented productivity wins per department per quarter
- KR3: AI tool satisfaction score ≥ 4.0/5.0 in quarterly pulse survey
- KR4: Token/license cost per active user < $[budget] per month

## Notes

- Don't wait for perfect data. A directional measurement that ships is more valuable than a precise measurement that never does.
- Stickiness (WAU/MAU) is the single best leading indicator of long-term value — if people keep coming back, the tool is working.
- Separate adoption metrics from value metrics in reporting — conflating them causes leadership to confuse "everyone has access" with "the tool is delivering ROI."
