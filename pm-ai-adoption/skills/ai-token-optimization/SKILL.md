---
name: ai-token-optimization
description: "Reduce AI token usage and control costs without losing output quality. Covers prompt efficiency, context management, model selection, and team-level budgeting. Use when AI costs are growing, users are hitting limits, teams need best practices for economical AI use, or you are setting token budgets for a rollout."
---

# AI Token Optimization

## Purpose

Tokens are the unit of cost for every AI interaction. Left unmanaged, token usage grows fast — long system prompts, pasted documents, conversation history, and habit all inflate costs silently. This skill gives you the practices to cut waste without cutting quality, and the governance model to keep costs predictable as adoption scales.

## What Is a Token?

- Roughly 1 token ≈ 4 characters of English text (about ¾ of a word)
- Every interaction costs: input tokens (your prompt + context) + output tokens (the response)
- A one-page document pasted into a prompt is ~750–1,000 tokens
- A long back-and-forth conversation thread can easily hit 10,000–50,000 tokens

## The 5 Biggest Sources of Token Waste

| Waste Source | Why It Happens | Fix |
|---|---|---|
| Pasting entire documents | Users paste full PDFs/docs when only a section is needed | Paste only the relevant section, or use file upload with a focused question |
| Long conversation threads | Users continue a single chat indefinitely | Start a new conversation for a new topic |
| Vague prompts | Vague prompts cause long clarifying back-and-forth | Be specific upfront: include role, task, format, constraints in one message |
| Repeating context | Users re-explain background in every message | Use a project/system prompt once; don't re-paste the same context |
| Over-generating output | Asking for "comprehensive" when you need "concise" | Specify output length: "in 3 bullet points", "in under 200 words" |

---

## Best Practices for End Users

### Write Efficient Prompts

**Bad (high token cost):**
> "I was looking at our Q3 results and I've been thinking about how we might be able to improve things. I have a document here that I've pasted below with all the details. Can you help me understand what's going on and maybe suggest some ideas?"
> [pastes 5-page report]

**Good (low token cost):**
> "You are a PM analyst. Below is the key metrics table from our Q3 report. Identify the top 3 risks and suggest one action per risk. Keep it under 150 words."
> [pastes only the metrics table — ~300 tokens vs. ~3,000]

**Prompt efficiency checklist:**
- [ ] State the role, task, and output format in the first line
- [ ] Paste only what's needed — a section, not a document
- [ ] Specify output length ("3 bullets", "1 paragraph", "under 100 words")
- [ ] Ask one thing per message; don't chain five requests into one
- [ ] Use follow-up messages for refinement rather than regenerating from scratch

---

### Manage Conversation Context

- Each message in a conversation carries all prior context — long threads multiply costs exponentially
- **Rule of thumb:** start a new conversation when the topic changes
- For recurring tasks (daily standup summary, weekly report), use a saved prompt template rather than rebuilding context each time
- In Claude: use Projects to set persistent context once, not per message

---

### Choose the Right Model for the Task

Not every task needs the most powerful (most expensive) model:

| Task | Recommended Model | Why |
|---|---|---|
| Summarizing a meeting | Haiku / lighter model | Simple extraction; no deep reasoning needed |
| Drafting an email | Sonnet | Good balance of quality and cost |
| Writing a PRD | Sonnet | Complex enough to warrant a strong model |
| Auditing architecture for security gaps | Opus | Requires deep reasoning; worth the cost |
| Classifying support tickets at scale | Haiku (via API) | High volume + simple task = use the cheapest model |

**Rule:** match model capability to task complexity. Using Opus for a grammar check wastes 10–20× the tokens.

---

### Use Caching and Batching (for Teams Using the API)

- **Prompt caching** (Claude API): if you have a long system prompt or document that many users reference, cache it — cache hits cost ~10% of regular token price
- **Batch API**: for non-time-sensitive tasks (generating 100 product descriptions, classifying 500 tickets), use the Batch API — ~50% cheaper than synchronous calls
- **Token counting**: use the `countTokens` API endpoint before sending large requests to estimate cost before you commit

---

## Team-Level Token Budgeting

### Set Spending Limits Before Rollout

| Tool | Where to Set Limits |
|---|---|
| Claude (Anthropic Console) | Workspace → Settings → Usage limits per workspace or API key |
| GitHub Copilot | GitHub org settings → Copilot → seat-level policies |
| Azure OpenAI / M365 Copilot | Azure portal → quota management per deployment |

### Recommended Budget Tiers

| User Type | Suggested Monthly Budget | Rationale |
|---|---|---|
| Occasional user | $10–20/month | Light drafting, occasional questions |
| Power user (PM, analyst, writer) | $30–60/month | Daily use across multiple workflows |
| Developer with Copilot | $19/month (Copilot for Business flat rate) | Code completion + chat |
| API-integrated workflow | Set per-workflow limit | Depends entirely on task volume |

### Monthly Cost Review Checklist

- [ ] Who are the top 10% of token consumers? Is the usage justified?
- [ ] Are any teams consistently hitting limits (under-budgeted)?
- [ ] Are there large spikes — a sign of a misconfigured automation or runaway loop?
- [ ] What is cost per output (per PRD written, per ticket classified, per email drafted)? Is it trending in the right direction?

---

## Quick Reference: Token-Saving Rules for Teams

Print this and share with your team:

1. **Paste less.** Only the section you need, not the full document.
2. **Be specific.** Vague prompts cause long answers. Tell the AI exactly what format and length you want.
3. **Start fresh.** Long conversations cost more. New topic = new chat.
4. **Pick the right model.** Simple task = lighter model. Save the heavy models for hard problems.
5. **Set a budget.** Know what you're spending before costs surprise you.
6. **Reuse prompts.** If you do the same task daily, save your prompt — don't rebuild context from scratch.
