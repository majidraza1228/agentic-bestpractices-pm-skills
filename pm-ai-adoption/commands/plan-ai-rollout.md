---
description: Plan a phased AI tool rollout (GitHub Copilot, M365 Copilot, or Claude) with pilot design, governance, training plan, and success metrics
argument-hint: "<tool name and target team or department>"
---

# /plan-ai-rollout — AI Tool Adoption Plan

Build a complete rollout plan for an enterprise AI tool: pilot design, stakeholder map, governance setup, training materials, and success metrics.

## Invocation

```
/plan-ai-rollout GitHub Copilot for the engineering team (80 developers)
/plan-ai-rollout Microsoft 365 Copilot for the marketing and operations departments
/plan-ai-rollout Claude for product managers and analysts across the business unit
```

## Workflow

### Step 1: Gather Context

Ask the user for:
1. **Which tool?** GitHub Copilot / M365 Copilot / Claude / other
2. **Who is in scope?** Team, department, headcount, roles
3. **Timeline?** When does leadership want this rolled out?
4. **What's the main goal?** (Speed up coding / reduce meeting overhead / improve content quality / other)
5. **Any blockers already known?** Security concerns, budget limits, change resistance

If the user provides a brief or existing plan, extract what's available and only ask about gaps.

### Step 2: Apply the Adoption Framework

Use the **ai-adoption-strategy** skill to generate:

1. **Stakeholder map** — who needs to approve, enable, and adopt
2. **Pilot design** — cohort selection, timeline, exit criteria
3. **Governance foundation** — data classification rules, acceptable use (from **ai-safety-governance** skill)
4. **Token/cost budget** — per-user limits and team budget (from **ai-token-optimization** skill)
5. **Training plan** — quick-start guide, use-case playbook, champion program
6. **Success metrics** — KPIs by layer with targets and measurement approach (from **ai-success-metrics** skill)

### Step 3: Produce the Rollout Plan

Output as a structured markdown document:

```
# AI Rollout Plan: [Tool] for [Team/Department]

**Owner**: [PM/DRI name]
**Target go-live**: [date]
**In scope**: [N users, X roles, Y teams]

## 1. Objectives
[What success looks like in 90 days]

## 2. Stakeholders
[Table: stakeholder, role, what they care about, action needed]

## 3. Pilot Design (Weeks 1–6)
[Cohort, timeline, exit criteria]

## 4. Governance Setup (Before Pilot Launch)
[Data classification, AUP highlights, DLP controls, approval needed]

## 5. Scaled Rollout (Weeks 7–12)
[Wave sequence, enablement package per wave, champion plan]

## 6. Token / Cost Management
[Per-user budget, where limits are set, monthly review process]

## 7. Training Plan
[Quick-start guide, use-case playbook, office hours cadence]

## 8. Success Metrics
[KPI table: metric, target, measurement method, owner]

## 9. Risks and Mitigations
[Top 3 risks with mitigation plan]

## 10. Open Questions
[What needs a decision before launch]
```

### Step 4: Offer Next Steps

After generating the plan, offer:
- "Want me to **draft the one-page AI Data Guide** for users (what they can and can't share)?"
- "Should I **build the success metrics dashboard spec** with targets and data sources?"
- "Want me to **write the quick-start guide** for the pilot cohort?"

Save the plan as a markdown file.

## Notes

- Timeline is a range, not a date — dependencies on IT, security, and legal review make exact dates unreliable until approvals are in hand
- The pilot exit criteria are the most important section — without them, pilots extend indefinitely
- Always include a "what not to do" section in training; it is more memorable than a list of permitted uses
