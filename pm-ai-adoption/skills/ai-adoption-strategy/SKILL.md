---
name: ai-adoption-strategy
description: "Plan and execute enterprise AI tool rollouts (GitHub Copilot, Microsoft 365 Copilot, Claude) using a phased adoption framework. Use when planning an AI tool rollout, designing a pilot program, managing change for AI adoption, or building stakeholder buy-in for enterprise AI."
---

# AI Adoption Strategy

## Purpose

Rolling out AI tools like GitHub Copilot, Microsoft 365 Copilot, or Claude across an organization is a change management problem as much as a technology problem. This skill gives you a structured framework to go from pilot to full deployment — with stakeholder alignment, training plans, and governance in place before you scale.

## Context

Enterprise AI adoption fails most often for three reasons: no clear owner, no success definition upfront, and deploying to everyone before learning from a focused pilot. This framework addresses all three.

## Framework: 4-Phase AI Adoption Playbook

### Phase 1: Foundation (Weeks 1–2)

**Define scope and ownership**
- Which tool are you rolling out? (Copilot for GitHub, Copilot for M365, Claude via API or Cowork)
- Who is the PM / DRI accountable for adoption?
- Which department or team is in scope for Phase 1?

**Identify stakeholders**
| Stakeholder | Role | What they care about |
|-------------|------|----------------------|
| CISO / Security | Approve or block | Data privacy, DLP, compliance |
| IT / Infra | Enable access | Licensing, SSO, endpoint controls |
| Legal / Compliance | Policy sign-off | Data residency, liability |
| Finance | Budget approval | Cost per seat, ROI |
| Team Leads | Drive usage | Productivity, team disruption |
| End Users | Adopt | Learning curve, trust, relevance |

**Define what success looks like before launch** (see `ai-success-metrics` skill)

---

### Phase 2: Pilot (Weeks 3–6)

**Select a pilot cohort**
- 10–30 users from one team, ideally volunteers who are curious and influential
- Avoid: mandatory participation, too broad a scope, mixed use-cases in one pilot

**Set up the right conditions**
- Configure data-loss prevention (DLP) policies before anyone touches the tool
- Decide what data can and cannot be entered (see `ai-safety-governance` skill)
- Set token/cost budgets per user if applicable (see `ai-token-optimization` skill)
- Provide a one-page "how to use this safely and well" guide on day one

**Run the pilot**
- Weekly check-ins with the cohort (15 min, async-friendly)
- Track: active users, sessions per user, tasks attempted, qualitative blockers
- Collect: what's working, what's confusing, what's missing

**Pilot exit criteria** — before expanding, confirm:
- [ ] ≥ 60% of pilot users active weekly
- [ ] At least 3 concrete time-saving use cases documented
- [ ] Security and compliance issues identified and resolved
- [ ] Training materials updated based on pilot feedback

---

### Phase 3: Scaled Rollout (Weeks 7–12)

**Expand by department, not all at once**
- Sequence by: highest expected value → fewest compliance risks → most influential teams
- Give each wave a two-week ramp with a dedicated onboarding session

**Enablement package per wave**
1. **Quick-start guide** — tool access, login, first three things to try
2. **Use-case playbook** — specific prompts and workflows for their role (engineers, writers, analysts, PMs)
3. **What not to do** — data classification rules in plain language
4. **Where to get help** — Slack channel, office hours, FAQ doc

**Identify and support champions**
- One champion per team: the person who gets it early and helps peers
- Champions get early access, a private channel with you, and a voice in the roadmap

---

### Phase 4: Sustain and Optimize (Ongoing)

- Monthly usage reviews: who is using it, who isn't, why
- Token/cost review: are teams staying within budget? (see `ai-token-optimization`)
- Quarterly policy review: are DLP rules still appropriate?
- Capture and share wins: regular "AI win of the week" in team channels
- Feed learnings back into the use-case playbook

## Tool-Specific Rollout Notes

### GitHub Copilot
- Assign licenses via GitHub org settings; enforce SSO
- Code completions work with no prompting — the main training need is chat and `/explain`
- Key concern: developers pasting internal IP, secrets, or proprietary algorithms into prompts
- Recommended DLP rule: no internal API keys, credentials, or PII in Copilot Chat

### Microsoft 365 Copilot
- Requires M365 E3/E5 + Copilot add-on; IT must provision per user
- Deeply context-aware — it reads your emails, calendar, Teams chats
- Key concern: users don't realize Copilot can surface data they have access to but shouldn't share
- Recommended: run a Microsoft Purview sensitivity label audit before rollout

### Claude (API or Claude.ai / Cowork)
- API: set per-user or per-team spending limits in the Anthropic console
- Cowork: manage access via SSO; Claude doesn't train on your data (confirm in your plan tier)
- Key concern: teams pasting customer data, financial data, or confidential strategy into prompts
- Recommended: publish a one-page data classification guide before launch

## Notes

- Adoption velocity matters less than adoption quality — five people using it well beats fifty using it poorly
- The biggest blocker is usually not technology; it's unclear policy and missing use-case examples
- Never roll out without a data classification policy in place, even a simple one
