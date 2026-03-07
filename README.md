# Agency Dashboard — GitHub Pages Deployment

> **Part of:** INFRA-003 (Monitoring & BI Dashboard)
> **Source of truth:** `smith-ai-agency/infrastructure/infra-003-monitoring/dashboard/`

This repo is the **GitHub Pages deployment target** for the agency monitoring dashboard. It contains only the built output files (index.html + data.js).

## How it works

1. Dashboard source code lives in the smith-ai-agency repo under `infrastructure/infra-003-monitoring/dashboard/`
2. Changes are made in the source repo, committed, and pushed
3. The built files are copied to this repo and pushed to trigger GitHub Pages deployment
4. GitHub Pages serves the dashboard at the public URL

## Files

| File | Purpose |
|------|---------|
| `index.html` | Dashboard UI — tabs for Agents, Organisation, Clients, Strategic OS |
| `data.js` | Auto-generated data from Google Sheets sync (Trello, metrics, project status) |

## Do NOT edit files here directly

All changes must be made in the source location (`smith-ai-agency/infrastructure/infra-003-monitoring/dashboard/`) and then deployed here. Direct edits will be overwritten on next deployment.
