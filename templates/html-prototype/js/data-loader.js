// ── DATA SOURCE CONFIG ────────────────────────────────────────────────────────
// Change `type` to switch data sources. Only this block changes between phases.
//
//  'inline' — reads the <script id="page-data"> block in index.html (default)
//             Works on file://, GitHub Pages, and any static host. No server needed.
//
//  'csv'    — fetches a CSV file and maps columns to the data model.
//             Export your Excel/Google Sheet as CSV and drop it in /data/.
//             Update `columnMap` to match your column headers.
//
//  'api'    — fetches JSON from a URL. The response must match the data.json shape,
//             or add a `transform` function below to reshape it.
//
const DATA_SOURCE = {
  type: 'inline',       // 'inline' | 'csv' | 'api'
  url:  '',             // required for 'csv' and 'api', e.g. 'data/report.csv' or 'https://api.example.com/v1/metrics'

  // CSV mode: map CSV column headers to data model fields.
  // Keys are data model paths, values are CSV column names.
  columnMap: {
    'metrics.0.value': 'MAU',
    'metrics.1.value': 'Conversion Rate',
    'metrics.2.value': 'Avg Session',
    'metrics.3.value': 'NPS',
  },

  // API mode: optionally transform the raw API response to match data.json shape.
  // Return null to use the raw response as-is.
  transform: null,
  // transform: (raw) => ({ metrics: raw.kpis, table: raw.requests }),
};
// ─────────────────────────────────────────────────────────────────────────────

(function () {
  'use strict';

  // Resolve a dot-path like "metrics.0.value" against an object.
  function resolve(obj, path) {
    return path.split('.').reduce(function (cur, key) {
      return cur != null ? cur[key] : undefined;
    }, obj);
  }

  // Populate all [data-field] elements from a data object.
  function populate(data) {
    document.querySelectorAll('[data-field]').forEach(function (el) {
      var val = resolve(data, el.dataset.field);
      if (val != null) el.textContent = val;
    });
    buildMetrics(data);
    buildTable(data);
    applyTrendColors(data);
  }

  // Build the metrics grid dynamically from data.metrics.
  function buildMetrics(data) {
    var grid = document.getElementById('metrics-grid');
    if (!grid || !data.metrics) return;
    grid.innerHTML = '';
    data.metrics.forEach(function (m) {
      var dir   = m.trend_dir === 'up' ? 'trend-up' : m.trend_dir === 'down' ? 'trend-down' : '';
      var arrow = m.trend_dir === 'up' ? '▲' : m.trend_dir === 'down' ? '▼' : '';
      grid.insertAdjacentHTML('beforeend',
        '<div class="metric-card">' +
          '<div class="metric-label">' + esc(m.label) + '</div>' +
          '<div class="metric-value">' + esc(m.value) + '</div>' +
          (m.trend ? '<div class="metric-trend ' + dir + '">' + arrow + ' ' + esc(m.trend) + '</div>' : '') +
        '</div>'
      );
    });
  }

  // Build the data table from data.table.
  function buildTable(data) {
    var head = document.getElementById('table-head');
    var body = document.getElementById('table-body');
    if (!head || !body || !data.table) return;

    head.innerHTML = '<tr>' + data.table.columns.map(function (c) {
      return '<th>' + esc(c) + '</th>';
    }).join('') + '</tr>';

    body.innerHTML = data.table.rows.map(function (row) {
      return '<tr>' + row.map(function (cell, i) {
        if (i === 2) return '<td><span class="badge badge-priority badge-' + slug(cell) + '">' + esc(cell) + '</span></td>';
        if (i === 3) return '<td><span class="badge badge-status badge-' + slug(cell) + '">' + esc(cell) + '</span></td>';
        return '<td>' + esc(cell) + '</td>';
      }).join('') + '</tr>';
    }).join('');
  }

  function applyTrendColors(data) {
    // trend colors already applied via CSS classes in buildMetrics
  }

  // Escape HTML entities.
  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // Convert "In Progress" → "in-progress" for CSS class names.
  function slug(str) {
    return String(str).toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  }

  // ── LOADERS ───────────────────────────────────────────────────────────────

  function loadInline() {
    var el = document.getElementById('page-data');
    if (!el) { console.error('[data-loader] No <script id="page-data"> found.'); return; }
    try {
      populate(JSON.parse(el.textContent));
    } catch (e) {
      console.error('[data-loader] Failed to parse inline data:', e);
    }
  }

  function loadApi(url, transform) {
    fetch(url)
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (data) {
        populate(transform ? transform(data) : data);
      })
      .catch(function (e) {
        console.error('[data-loader] API fetch failed:', e);
        loadInline(); // fall back to inline data on error
      });
  }

  function loadCsv(url, columnMap) {
    fetch(url)
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.text();
      })
      .then(function (text) {
        var lines   = text.trim().split(/\r?\n/);
        var headers = lines[0].split(',').map(function (h) { return h.trim().replace(/^"|"$/g, ''); });
        var rows    = lines.slice(1).map(function (l) {
          return l.split(',').map(function (c) { return c.trim().replace(/^"|"$/g, ''); });
        });

        // Build a flat lookup from columnMap.
        var lookup = {};
        headers.forEach(function (h, i) {
          Object.keys(columnMap).forEach(function (field) {
            if (columnMap[field] === h) lookup[field] = rows[0] ? rows[0][i] : '';
          });
        });

        // Merge into inline data.
        var base = JSON.parse(document.getElementById('page-data').textContent);
        Object.keys(lookup).forEach(function (path) {
          var parts = path.split('.');
          var obj   = base;
          for (var i = 0; i < parts.length - 1; i++) obj = obj[parts[i]];
          obj[parts[parts.length - 1]] = lookup[path];
        });

        // Also put all CSV rows into table if table exists in base.
        if (base.table) {
          base.table.rows = rows;
          if (base.table.columns.length === 0) base.table.columns = headers;
        }

        populate(base);
      })
      .catch(function (e) {
        console.error('[data-loader] CSV fetch failed:', e);
        loadInline();
      });
  }

  // ── INIT ─────────────────────────────────────────────────────────────────

  document.addEventListener('DOMContentLoaded', function () {
    switch (DATA_SOURCE.type) {
      case 'api': loadApi(DATA_SOURCE.url, DATA_SOURCE.transform); break;
      case 'csv': loadCsv(DATA_SOURCE.url, DATA_SOURCE.columnMap); break;
      default:    loadInline();
    }
  });

}());
