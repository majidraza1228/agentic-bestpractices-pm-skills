---
name: ai-safety-governance
description: "Define and implement safe AI use policies for enterprise tools including GitHub Copilot, Microsoft 365 Copilot, and Claude. Covers data classification, acceptable use, DLP controls, incident response, and compliance. Use when creating an AI acceptable use policy, setting guardrails for a rollout, handling a data exposure incident, or reviewing AI governance with legal and security."
---

# AI Safety and Governance

## Purpose

AI tools are powerful precisely because they consume context — your emails, your code, your documents. That same quality makes them a data governance risk if teams don't know what they can and cannot share. This skill gives you the policy foundations, controls, and response procedures to deploy AI tools safely without blocking adoption.

## Core Principle

**The AI tool is not the risk. Unclear policy is the risk.** Most AI data incidents happen because users didn't know a rule existed, not because they intended to do something wrong. Invest in clarity first, controls second.

---

## Step 1: Data Classification for AI Use

Before any AI tool launches, define what data can and cannot be entered. Keep it simple — three tiers is enough:

| Tier | Label | Definition | AI Use Allowed? |
|------|-------|-----------|----------------|
| 1 | Public | Already published or shareable outside the org | Yes — no restrictions |
| 2 | Internal | Internal processes, plans, non-sensitive communication | Yes — with approved tools only |
| 3 | Confidential | Customer PII, financials, legal matters, credentials, M&A, IP | No — never enter into AI prompts |

**What always goes in Tier 3 (never into AI):**
- Customer names, emails, phone numbers, addresses
- Payment card data, bank account numbers
- Passwords, API keys, secrets, tokens
- Healthcare or HR records
- Legal documents under active litigation
- Unreleased financial results or M&A targets
- Trade secrets or proprietary algorithms

**Publish this as a one-page "AI Data Guide"** — not a 20-page policy. Users need to decide in seconds.

---

## Step 2: Acceptable Use Policy (AUP)

A minimal AI AUP covers five things:

### 1. Approved Tools
- List which AI tools are approved (e.g., GitHub Copilot for developers, M365 Copilot for productivity users, Claude via [specific access point])
- Make clear that unapproved AI tools (personal ChatGPT accounts, random browser extensions) are not permitted for work data

### 2. What You Can Use AI For
- Drafting, summarizing, explaining, brainstorming, coding assistance
- Be specific to your org's context — "generating first drafts of internal communications, not external legal documents"

### 3. What You Cannot Do
- Enter Tier 3 (Confidential) data into any AI prompt
- Present AI output as verified fact without human review
- Use AI to make automated decisions about individuals (hiring, performance, credit) without a human in the loop
- Attempt to extract training data, reverse-engineer model behavior, or bypass safety filters

### 4. You Are Responsible for the Output
- AI can hallucinate. The human who sends the output is accountable for its accuracy.
- Disclose AI-assisted work where required by your role (legal filings, financial reporting, client deliverables)

### 5. How to Report an Issue
- Suspected data exposure: report to [security team / channel] within 24 hours
- Unexpected or harmful AI output: report to [AI governance team]

---

## Step 3: Technical Controls

Configure these before rollout, not after an incident:

### GitHub Copilot
- **Disable public code matching**: Settings → Copilot → Block suggestions matching public code (reduces IP risk)
- **Audit log**: GitHub Enterprise audit log captures Copilot usage events
- **Restrict to approved repos**: Limit Copilot to repos where it makes sense; disable for repos with sensitive data or regulated code

### Microsoft 365 Copilot
- **Microsoft Purview sensitivity labels**: Label documents before rollout — Copilot respects sensitivity labels and won't summarize or reference documents the user doesn't have access to
- **Data Loss Prevention (DLP) policies**: Configure DLP to prevent Copilot from processing or surfacing labeled Confidential content in generated outputs
- **Copilot audit logs**: Available in the Microsoft Purview compliance portal — monitor for unusual data access patterns

### Claude (Anthropic Console / API)
- **Workspace isolation**: Create separate workspaces per team or use case; don't share API keys across unrelated teams
- **System prompt guardrails**: Include a standing instruction in system prompts: "Do not ask the user for or accept personally identifiable information, credentials, or confidential business data."
- **Usage logs**: Anthropic Console → Usage — review for anomalous volume or unexpected prompts in API key logs
- **Data retention**: Claude.ai does not train on your data (for Team/Enterprise plans); confirm this in your agreement

---

## Step 4: Incident Response

If a user accidentally enters confidential data into an AI tool:

1. **Contain**: User stops the session and does not continue the conversation
2. **Document**: What data was entered, which tool, approximate timestamp
3. **Report**: Notify the security/privacy team within 24 hours (most data privacy regulations require timely internal reporting)
4. **Assess**: Is the data subject to regulatory notification requirements? (GDPR, HIPAA, etc.)
5. **Review**: Was this a policy gap (user didn't know the rule) or a control gap (tool allowed something it shouldn't)? Fix the root cause.

**Common scenarios and responses:**

| Incident | Immediate Action |
|----------|-----------------|
| Developer pastes internal API key into Copilot Chat | Rotate the key immediately; assess if the key was exposed externally |
| User summarizes a confidential financial document in M365 Copilot | Assess whether the output was shared; review DLP logs |
| Customer PII entered into a Claude conversation | Log the session ID; check if data left the org via copy/paste; notify privacy team |

---

## Step 5: Governance Structure

For organizations with significant AI tool usage, assign clear ownership:

| Role | Responsibility |
|------|---------------|
| AI PM / Program Manager | Adoption strategy, training, policy communication |
| CISO / Security | Technical controls, incident response, risk assessment |
| Legal / Privacy | AUP review, regulatory compliance, contract terms |
| IT | Provisioning, SSO, DLP configuration, audit logs |
| Compliance | Policy documentation, audit evidence, training records |

**Governance cadence:**
- Monthly: usage review, incident log review
- Quarterly: AUP review, DLP policy effectiveness check
- Annually: full governance audit, policy update

---

## Notes

- A lightweight policy enforced consistently beats a comprehensive policy that no one reads
- Train on scenarios, not rules — "what would you do if..." sticks better than a list of prohibitions
- The AUP should be a living document; update it when tools or threat landscape changes
- Requiring attestation (user clicks "I've read the AI use policy") creates an audit trail and signals seriousness without blocking adoption
