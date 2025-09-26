# Agent Guide – Consumer Site

The consumer app is a luxury-themed Next.js experience for end users booking events. Maintain the cinematic visual style described in `copilot-instructions.md` and organise pages within the Next.js routing conventions.

## Coding Conventions
- Write components in TypeScript and leverage shared UI primitives from `packages/ui` for consistency.
- Use Tailwind CSS utilities alongside motion/animation libraries specified in the project brief.
- Keep data fetching isolated to hooks or dedicated API utilities to simplify testing.

## Environment
- Expect `BACKEND_URL` and any `NEXT_PUBLIC_*` variables to be supplied by Docker Compose or local `.env` files for API access.
- Polling-related file watcher flags are set through `docker-compose.env` for reliable hot reload inside containers.
