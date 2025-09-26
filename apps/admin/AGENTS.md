# Agent Guide – Admin Panel

The admin app is a Next.js project targeting administrative workflows (events, bookings, content, surveys). Keep pages and API routes under the conventional Next.js directories.

## Coding Conventions
- Use TypeScript for components and utilities (`.tsx`/`.ts`).
- Style with Tailwind CSS and shared UI components from `packages/ui` where possible.
- Expose environment-dependent URLs via `process.env.NEXT_PUBLIC_*` to ensure they are available client-side.

## Environment
- The app expects `BACKEND_URL` (and matching `NEXT_PUBLIC` variables) to point at the Express API, typically `http://backend:4000` in Docker.
- File watching inside Docker relies on polling flags provided through `docker-compose.env`.
