# Agent Guide – Backend API

The backend is an Express application organised under `src/` with modular controllers, Sequelize models, and middleware. Use Sequelize for all database access and keep model definitions in `src/models`.

## Coding Conventions
- Follow the existing CommonJS module style (use `require`/`module.exports`).
- Export Express routers from `src/routes` and register them in `src/routes/index.js`.
- Prefer async/await and centralised error handling via the provided middleware.

## Environment
- Database configuration is sourced from `DB_*` variables provided by Docker Compose or `.env` files.
- Authentication relies on JWT secrets defined by `JWT_SECRET` and `JWT_REFRESH_SECRET`; ensure these values exist when adding new auth flows.
