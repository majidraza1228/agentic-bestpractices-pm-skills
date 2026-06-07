# HTML Prototype Template

A product dashboard prototype with static placeholder data, ready to share on GitHub Pages. When stakeholder feedback is in, swap the data source — no page rewrite required.

## Quick start (5 steps)

1. **Copy this folder** into a new GitHub repository.
2. **Edit the data** — open `index.html` and find the `<script id="page-data">` block near the bottom. Change the title, metrics, and table rows to match your product.
3. **Push to GitHub.**
4. **Enable GitHub Pages** — go to your repo's **Settings → Pages → Source → GitHub Actions**.
5. **Share the link** — `https://<your-username>.github.io/<your-repo-name>`

Every push to `main` redeploys automatically.

---

## Files

```
index.html                    Main page — edit the <script id="page-data"> block
data.json                     Same data as the inline block — source of truth for annotations
js/data-loader.js             Data loader — change one line to switch data source
.github/workflows/pages.yml  GitHub Pages deploy workflow
```

---

## Updating the placeholder data

Everything the page displays lives in the `<script id="page-data" type="application/json">` block at the bottom of `index.html`. Edit it directly — no build step needed.

**Metrics** — change `label`, `value`, and `trend`:
```json
{ "label": "Weekly Active Users", "value": "3,241", "trend": "+12%", "trend_dir": "up" }
```

**Table** — change `title`, `columns`, and `rows`:
```json
{
  "title": "Open Support Tickets",
  "columns": ["Issue", "Customer", "Priority", "Status"],
  "rows": [
    ["Login fails on Safari", "Acme Corp", "High", "In Progress"]
  ]
}
```

---

## Switching to live data

Open `js/data-loader.js` and change the `DATA_SOURCE` block at the top.

### Phase 2 — CSV (Excel export)

Export your spreadsheet as `.csv`, add it to the repo as `data/report.csv`, then:

```js
const DATA_SOURCE = {
  type: 'csv',
  url:  'data/report.csv',
  columnMap: {
    'metrics.0.value': 'MAU',          // CSV column header → data field
    'metrics.1.value': 'Conversion',
  },
};
```

### Phase 3 — REST API

```js
const DATA_SOURCE = {
  type: 'api',
  url:  'https://api.example.com/v1/metrics',
};
```

The API must return JSON in the same shape as the `<script id="page-data">` block. If the shapes differ, add a `transform` function:

```js
const DATA_SOURCE = {
  type: 'api',
  url:  'https://api.example.com/v1/metrics',
  transform: (raw) => ({
    meta:    { title: raw.name, subtitle: raw.period, updated: raw.as_of },
    metrics: raw.kpis,
    table:   { title: 'Requests', columns: raw.cols, rows: raw.items },
  }),
};
```

### Phase 4 — Database

Add a backend route that queries your DB and returns the Phase 3 JSON shape. The loader config stays the same.

---

## Notes

- **Public repo = public page.** GitHub Pages on a public repo is publicly accessible. If your placeholder data is sensitive, use a private repo with [Netlify](https://netlify.com) or [Vercel](https://vercel.com) (both offer free private static hosting).
- **No build step.** The page runs directly — no npm, no bundler. Open `index.html` in a browser or serve with `python3 -m http.server 8080` for local preview.
- **Remove the banner** when switching to live data. The yellow "PROTOTYPE" bar is in `index.html`, one `<div class="prototype-banner">` line.
