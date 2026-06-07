---
description: Generate a stakeholder-ready HTML prototype with static placeholder data, a data-migration plan, and GitHub Pages deploy — from description to shareable link in one session
argument-hint: "<what the page should show — e.g. 'product metrics dashboard for Q2 exec review' or 'feature request backlog for the design team'>"
---

# /prototype-page — From Description to Shareable Page

Build a complete, self-contained HTML prototype for **$ARGUMENTS** that stakeholders can open in a browser today, with a clear path to replace the static data with live sources when feedback is in.

## What this command produces

1. **`index.html`** — full page with realistic static placeholder data, ready for GitHub Pages
2. **`data.json`** — all page content in one editable file, every field annotated with its future live source
3. **`js/data-loader.js`** — data loader pre-wired for inline / CSV / API modes (one config line switches the source)
4. **`.github/workflows/pages.yml`** — GitHub Pages deploy workflow (push to `main` → live URL)
5. **Migration plan** — a table mapping each data field to its Phase 1–4 source and the owner responsible

## Steps

### Step 1: Define the data model

Before generating any code, confirm what the page needs to show. Ask if not clear from $ARGUMENTS:

- **Metrics / KPIs** — which numbers matter to this audience? (label, value, trend?)
- **Tables** — what rows and columns? Status or priority fields?
- **Charts** — needed or not? (avoid for the first prototype unless the data relationship is the point)
- **Audience** — who reviews this and what decision does it support?

Do not generate code until the data model is confirmed. A wrong model means a rewrite.

### Step 2: Generate `data.json`

Write the full data file with realistic placeholder values. For every field, include a `_source` annotation — the DB table, API endpoint, or spreadsheet column the real value will come from, and the data type:

```json
{
  "metrics": [
    {
      "label": "Monthly Active Users",
      "value": "12,847",
      "trend": "+8%",
      "trend_dir": "up",
      "_source": "analytics DB — events.monthly_active | integer formatted as localeString"
    }
  ]
}
```

### Step 3: Generate `index.html`

Apply the **html-prototype** skill.

Requirements:
- Every value rendered from the data model via `[data-field]` binding — no hardcoded numbers in the HTML
- Visible `PROTOTYPE — placeholder data` banner at the top
- Layout matched to the audience: executive review → KPI cards; team operations → table-heavy; mixed → cards above, table below
- Clean, professional CSS with no external dependencies (works offline and on GitHub Pages without a build step)
- Responsive (readable on a laptop browser; mobile is a bonus)
- A `<script id="page-data" type="application/json">` block containing the `data.json` content — this is the inline data source for Phase 1

### Step 4: Generate `js/data-loader.js`

Three modes, configured in one constant at the top of the file:

```js
const DATA_SOURCE = {
  type: 'inline',  // 'inline' | 'csv' | 'api'
  url: '',         // fill in when switching to csv or api
};
```

- `inline` — reads the `<script id="page-data">` block in `index.html`. Default. Works on file:// and GitHub Pages.
- `csv` — fetches a CSV file and maps columns to the data model. For Excel hand-offs.
- `api` — fetches JSON from a URL. For the live-data phase.

The loader populates every `[data-field]` element after the data resolves. Elements show `—` until data loads.

### Step 5: Generate `.github/workflows/pages.yml`

Standard GitHub Pages deploy: triggers on push to `main` and on `workflow_dispatch`. Deploys the folder as a static site. Include the URL format in a comment: `https://[username].github.io/[repo-name]`.

### Step 6: Deliver the migration plan

A table with one row per data field:

| Field | Placeholder value | Phase 2 — CSV column | Phase 3 — API field | Phase 4 — DB query | Owner |
|-------|-------------------|----------------------|---------------------|-------------------|-------|

Include the one-line loader config change needed to activate each phase, and note any data-shape differences that need a transform.

### Step 7: Draft the stakeholder brief

One paragraph the PM can paste into Slack or email:
- What the page shows
- That data is placeholder (not real)
- The one specific feedback question
- The link format once deployed: `https://[username].github.io/[repo-name]`

## Notes

- The page structure and CSS never change between phases. Only the data source changes.
- If the data shape is unknown for Phase 3+, use a reasonable shape now and add a `// TODO: verify shape` comment in the loader.
- Remind the PM: GitHub Pages on a public repo is publicly accessible. If the prototype contains sensitive data, use a private repo with Netlify/Vercel or add Cloudflare Access.
- After feedback is collected, the natural next step is `/document-app` to capture the intended behavior before wiring up live data.
