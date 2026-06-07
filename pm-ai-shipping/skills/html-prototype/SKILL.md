---
name: html-prototype
description: "Build a static HTML page for stakeholder feedback, then migrate it to live data from Excel/CSV, API, or database — without rewriting the page. Covers data-model design, placeholder strategy, GitHub Pages hosting, and the four-phase static-to-dynamic migration path. Use when a PM needs a clickable prototype before committing to a full build, wants to validate a data layout with stakeholders, or needs a lightweight dashboard with no backend."
---

# HTML Prototype: Static First, Dynamic When Ready

## Purpose

Ship something stakeholders can open in a browser today. A static HTML page with realistic placeholder data is faster to build, cheaper to change, and good enough for early feedback. When feedback is in, you swap the data source — without touching the page layout.

## The three-layer model

Keep these layers separate and migration becomes a one-line change.

| Layer | File | What changes between phases |
|-------|------|-----------------------------|
| Structure | `index.html` | Never — layout and CSS stay fixed |
| Data | JSON block / `data.json` / API | Only this changes per phase |
| Loader | `js/data-loader.js` | One config line changes the source |

## Building the static page

### Step 1: Define the data model first

Before writing any HTML, list every piece of data the page needs:
- **Metrics / KPIs** — label, value, trend direction, trend magnitude
- **Tables** — column names, approximate row count, status fields
- **Lists** — items, badges, timestamps
- **Charts** — type, axis labels, data series count

This list becomes `data.json`. The page reads from it — values are never hardcoded in the HTML.

### Step 2: Write `data.json` with realistic placeholders

Use numbers in the real range. Stakeholders react to realistic data; placeholder zeros produce feedback about the data, not the layout.

Annotate every field with `_source` — where the real value will come from:

```json
{
  "metrics": [
    {
      "label": "Monthly Active Users",
      "value": "12,847",
      "trend": "+8%",
      "trend_dir": "up",
      "_source": "analytics DB — events.monthly_active_users"
    }
  ]
}
```

`_source` annotations are ignored by the loader; they are notes for the engineer who wires up the live data.

### Step 3: Embed the data in `index.html` for the static phase

The cleanest static approach — works on `file://`, GitHub Pages, and any static host without a build step:

```html
<!-- STATIC DATA — edit this block to update placeholders -->
<!-- Switch to live data: set DATA_SOURCE.type = 'api' in data-loader.js and remove this block -->
<script id="page-data" type="application/json">
{ ...your data.json content here... }
</script>
```

The loader reads from this block in `inline` mode. When going live, delete the block and change one line in the loader config.

### Step 4: Bind HTML elements to data fields

Use `data-field` attributes to mark every value that comes from the data model:

```html
<span data-field="metrics.0.value">—</span>
<span data-field="metrics.0.trend">—</span>
```

The `—` is the no-data fallback shown before the loader runs — never leave elements empty.

### Step 5: Add the prototype banner

A visible banner prevents stakeholders from treating placeholder numbers as real:

```html
<div class="prototype-banner">
  PROTOTYPE — placeholder data · not for external sharing
</div>
```

Remove the banner in the live-data phase.

## Migration path: static → live data

### Phase 1 — Inline static (GitHub Pages, no backend)

```js
// data-loader.js
const DATA_SOURCE = { type: 'inline' };
```

Data lives in the `<script id="page-data">` block in `index.html`. Update it by editing the file and pushing. Zero infrastructure.

### Phase 2 — CSV / Excel export

```js
const DATA_SOURCE = { type: 'csv', url: 'data/report.csv' };
```

Export from Excel or Google Sheets as `.csv`. The loader parses it client-side — no server needed. Useful when the data owner is not a developer and updates the sheet weekly.

Column headers in the CSV must match the field names in `data.json`. If they don't, add a mapping object in the loader config.

### Phase 3 — REST API

```js
const DATA_SOURCE = { type: 'api', url: 'https://api.example.com/v1/metrics' };
```

The API must return the same JSON shape as `data.json`. If the shape differs, add a `transform` function to the loader config — the page does not change.

### Phase 4 — Database (via thin API)

Add a backend route (Supabase Edge Function, Firebase Function, Express endpoint) that queries the DB and returns the Phase 3 shape. The loader config does not change from Phase 3.

**Critical constraint:** never change the JSON shape between phases. If `metrics[0].value` is a formatted string (`"12,847"`) in static mode, the API must return it the same way. Format on the server, not the page.

## GitHub Pages setup

1. Push the prototype folder to a GitHub repository.
2. Go to **Settings → Pages → Source → GitHub Actions**.
3. Add `.github/workflows/pages.yml` (in the template — triggers on push to `main`).
4. Every push to `main` deploys automatically. Share `https://username.github.io/repo-name`.

**Private repos:** GitHub Pages requires a paid plan for private repos. For free private hosting use Netlify or Vercel (both support GitHub deploys with zero config).

**Access control:** GitHub Pages is public. If the prototype contains sensitive placeholder data or is for internal stakeholders only, use Netlify with password protection or a Cloudflare Access rule.

## What to send stakeholders

One paragraph, not a demo call:

> I've built a prototype of [page name] — here's the link: [URL]. The data is placeholder/static. I'd like your reaction specifically to: [one focused question about layout or what information is surfaced]. Takes 5 minutes to review. Comments welcome in [Slack/email/Notion].

One focused question gets better feedback than "what do you think?"

## Template

A ready-to-use starter lives in `templates/html-prototype/` in this repository:
- `index.html` — product metrics dashboard (KPI cards + data table)
- `data.json` — placeholder data with `_source` annotations
- `js/data-loader.js` — loader supporting inline / CSV / API modes
- `.github/workflows/pages.yml` — GitHub Pages deploy workflow

Copy the folder, edit the `<script id="page-data">` block in `index.html`, push to GitHub, enable Pages. Done in under 30 minutes.
