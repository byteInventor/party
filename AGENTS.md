# Agent Guide – Monorepo Overview

This repository hosts the Luxury Event Booking platform. It is organised as a Turborepo with three primary applications under `apps/` (consumer, admin, backend) and shared packages under `packages/`.

## Environment & Tooling
- Local orchestration relies on Docker Compose. Shared configuration lives in `docker-compose.env`; update this file instead of hard-coding secrets in `docker-compose.yml`.
- Node package management uses npm with workspaces. Run app-specific commands via `npm --prefix <path> <script>`.
- Linting and formatting should follow the scripts provided in each app’s `package.json`.

## Development Notes
- Keep environment variable names consistent across services (e.g. `DB_*`, `BACKEND_URL`).
- Prefer TypeScript/ES modules where the project already uses them; otherwise stay consistent with existing style.
- Document major architectural decisions directly within the relevant `AGENTS.md` to keep future contributors aligned.
