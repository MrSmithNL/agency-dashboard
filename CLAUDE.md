# Project Instructions — Agency Dashboard (Deployment Repo)

This is NOT a standalone project. It is the GitHub Pages deployment target for INFRA-003.

## What This Repo Is

A deployment-only repo containing the built dashboard files. The source of truth is:
`~/Claude Code/Projects/smith-ai-agency/infrastructure/infra-003-monitoring/dashboard/`

## Rules

1. **Never edit files here directly** — all changes go in the source repo
2. **Deployment only** — copy built files from source, commit, push
3. **No docs/ folder needed** — documentation lives in INFRA-003's docs/
4. **No Core 7 files needed** — this is a deployment target, not a project

## Code Quality

- **ESLint** — flat config (`eslint.config.mjs`), lints `data.js` for syntax/logic errors
- **Prettier** — formats config files only (`data.js` and `index.html` are excluded as auto-generated)
- **Husky + lint-staged** — pre-commit hook runs ESLint + Prettier on staged files
- **CI workflow** — `.github/workflows/ci.yml` runs lint + format check on push/PR to main
- **CodeQL SAST** — `.github/workflows/codeql.yml` scans JavaScript weekly and on push/PR
- **Scripts:** `npm run lint`, `npm run format`, `npm run format:check`
