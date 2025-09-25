# copilot-instructions.md

## Project Overview
Luxury Event Booking Platform built with **Vibe Coding**.  
This monorepo will contain:  
- **Consumer Website (Next.js)**  
- **Admin Panel (Next.js)**  
- **Backend (Node.js, REST APIs, Sequelize, PostgreSQL)**  
- **Shared utilities** (auth, logging, config)  
- **Deployment with Docker**  

---

## Tech Stack
- **Frontend**: Next.js (TypeScript, Tailwind CSS, Framer Motion)  
- **Backend**: Node.js (Express), REST APIs  
- **Database**: PostgreSQL + Sequelize ORM  
- **Authentication**: Mobile Number + OTP, JWT-based sessions  
- **Payments**: Razorpay integration  
- **Testing**: Playwright (E2E + UI tests)  
- **Logging/Monitoring**: Winston + Sentry  
- **Deployment**: Docker + Docker Compose (monorepo orchestration)  
- **Language**: English only  

---

## Monorepo Structure
```
/luxury-booking/
  /apps/
    /consumer/   # Next.js luxury consumer site
    /admin/    # Next.js admin panel
    /backend/        # Node.js REST API backend
  /packages/
    /ui/             # Shared components (luxury theme, buttons, layouts)
    /utils/          # Shared helpers (auth, api clients, configs)
  docker-compose.yml
  README.md
```

---

## Consumer Website (Next.js)
### Global Layout & Styling
- **Grid**: 12-column, ≥120px margins, fluid for mobile/tablet  
- **Typography**:  
  - Headlines → *Playfair Display / Cormorant Garamond*  
  - Body → *Neue Haas Grotesk / Inter*  
- **Buttons**: Rounded-2xl, gold gradient fills  
- **Icons**: Minimal, line-based, gold-accented  
- **Navigation**: Sticky, transparent → dark on scroll, gold CTA  

### Pages
1. **Home**  
   - Hero: Full-bleed video background, gold CTA  
   - Luxury Features band (3-column)  
   - Parties preview carousel (7 themes)  
   - Luxury brand trust badges  
   - CTA footer  

2. **Parties**  
   - Grid of 7 themes (2-column, swipe on mobile)  
   - Hover reveal mini-description & “View Details”  
   - Theme detail page: Cinematic hero, description, sticky booking CTA, upsell add-ons  

3. **About**  
   - Black + gold serif hero  
   - Story timeline (horizontal scroll)  
   - Team portraits with golden hover frames  

4. **Testimonials**  
   - Cinematic blurred background  
   - Slider of testimonials  
   - Quote marquee strip  

5. **Gallery**  
   - Masonry grid with photos + video thumbnails  
   - Lightbox with swipe navigation  

6. **Booking Flow** (CTA modal/page)  
   - Step 1: Party type  
   - Step 2: Date & venue preferences  
   - Step 3: Luxury add-ons  
   - Step 4: Contact & payment (Razorpay)  
   - Progress bar: thin gold line animation  

7. **Mobile UX**  
   - Floating sticky gold CTA  
   - Swipe-first grids & galleries  
   - Full-screen overlay nav  

---

## Admin Panel (Next.js)
### Features
- Dashboard (daily, monthly stats)  
- Event management (CRUD, image uploads, pricing tiers)  
- Booking management (approve, confirm, reject)  
- Customer management (profiles, history)  
- Authentication logs  
- Payments & reports (CSV export, revenue tracking)  
- Content management (About, Gallery, Testimonials)  
- Survey creation (custom feedback forms)  
- Standard admin utilities (roles, notifications)  

---

## Backend (Node.js, Express)
### API Layer
- **REST APIs only**  
- **Auth**: JWT tokens, mobile OTP verification flow  
- **Modules**:  
  - Auth (mobile OTP)  
  - Events (CRUD, theme details, add-ons)  
  - Bookings (create, manage, status updates)  
  - Customers (profiles, history)  
  - Payments (Razorpay integration, webhook handling)  
  - Reports (daily, monthly summaries)  
  - Content (gallery, testimonials, about)  
  - Surveys  

### ORM/Database
- Sequelize ORM models for: Users, Events, Bookings, Payments, Surveys, Content  
- PostgreSQL database migrations + seed scripts  

---

## Deployment (Dockerized)
- Each service (consumer-web, admin-panel, backend, db) runs in **separate containers**  
- Use **Docker Compose** for local orchestration  
- PostgreSQL container with persistent volume  
- Production-ready Dockerfiles for each service  

---

## Testing (Playwright)
- E2E booking flow tests (consumer site)  
- Admin dashboard interaction tests  
- API contract tests with mocked data  

---

## Logging & Monitoring
- **Winston** for structured logs  
- **Sentry** for error tracking (optional alerts)  

---

## Development Workflow
1. Run all services via `docker-compose up`  
2. Use Vibe Coding to scaffold features inside the monorepo structure  
3. Write Playwright tests for new flows  
4. Keep design consistent with luxury theme package in `/packages/ui`  

---
 
