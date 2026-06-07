---
description: Audit current AI tool usage across a team or org — identify cost waste, safety gaps, low adoption, and quick wins
argument-hint: "<tool name and team or time period to audit>"
---

# /audit-ai-usage — AI Usage Audit

Review how a team or organization is using AI tools: where value is being created, where money is being wasted, where safety controls have gaps, and what to fix first.

## Invocation

```
/audit-ai-usage GitHub Copilot usage for Q2 — 80 developers, $22k spend
/audit-ai-usage Claude API usage for the product and analytics teams last month
/audit-ai-usage M365 Copilot across the marketing department — low adoption reported
```

## Workflow

### Step 1: Gather Usage Data

Ask the user to share or describe:
1. **Usage data**: active users, sessions, tokens consumed, cost (from Anthropic Console, GitHub Copilot dashboard, or M365 admin center)
2. **Adoption data**: who has access vs. who is active; which teams/roles have highest and lowest usage
3. **Spend data**: total cost, cost per active user, trend over time
4. **Qualitative signal**: any known complaints, champions, or adoption blockers

If the user pastes raw data (CSV, table, dashboard screenshot description), analyze it directly.

### Step 2: Run the Audit

Apply the **ai-token-optimization** and **ai-success-metrics** skills to assess across four dimensions:

**A. Adoption health**
- Activation rate vs. WAU vs. MAU — is stickiness growing or declining?
- Which teams/roles are underperforming? What's the likely cause?
- Are there ghost licenses — seats provisioned but never used?

**B. Cost efficiency**
- Cost per active user — is it within budget?
- Cost per active user trend — growing faster than user count? (signals waste)
- Are any users or teams consuming disproportionate tokens? Why?
- Are conversations unusually long (signs of context bloat or misuse)?

**C. Safety and governance**
- Are DLP policies configured and active?
- Any flagged incidents or near-misses from the review period?
- Do active users have a data classification guide and AUP?
- Is there an incident reporting channel?

**D. Value realization**
- Are there documented wins (time saved, tasks completed faster)?
- Is usage correlated with the high-value use cases in the rollout plan?
- What use cases are missing or underutilized?

### Step 3: Produce the Audit Report

```
# AI Usage Audit: [Tool] — [Team / Period]

**Audited by**: [user]
**Period**: [date range]
**Scope**: [N users, X teams]

## Executive Summary
[3 bullets: what's working, biggest risk, top recommendation]

## Adoption Health
[Metrics table + interpretation]

## Cost Efficiency
[Cost breakdown + waste identified]

## Safety and Governance
[Controls in place / gaps found]

## Value Realization
[Evidence of ROI / gaps]

## Recommendations (Prioritized)
| Priority | Finding | Recommended Action | Owner | Effort |
|----------|---------|-------------------|-------|--------|

## Quick Wins (This Week)
[2–3 actions that require no approval and can be done immediately]
```

### Step 4: Offer Next Steps

- "Want me to **write a team communication** explaining the cost findings and asking for behavior changes?"
- "Should I **build an updated token budget** based on this audit?"
- "Want me to **identify ghost licenses** and calculate savings from removing them?"

Save the audit as a markdown file.

## Notes

- Ghost licenses (provisioned, never activated) are the fastest cost win — find them first
- An audit is only useful if recommendations are prioritized; a list of 15 equal findings gets ignored
- Frame cost findings as efficiency opportunities, not blame — "we can save $X by doing Y" lands better than "teams are wasting tokens"
- If safety gaps are found, those are P0 regardless of adoption metrics
