# PianoECom 🎹🎸
A full-stack e-commerce marketplace for music lovers to **buy, rent, or sell** instruments and gear.

> Portfolio project focused on **backend + full-stack** fundamentals (clean architecture, REST APIs, security, database modeling, testing, and production-minded practices).

## Why this project
Music communities often rely on scattered groups and informal listings. **PianoECom** centralizes discovery and transactions so people can:
- list instruments and accessories,
- rent gear for short-term needs (events, practice, studio),
- buy used/new equipment from trusted sellers.

---

## Core features (MVP)
### Marketplace
- Browse listings with **search / filters / sorting**
- Listing details (photos, condition, specs, price)
- Create/edit listings (seller flow)
- **Buy** flow (cart + checkout stub / mock payment)
- **Rent** flow (availability window + rental period pricing)

### Accounts
- Sign up / sign in
- Profile page (basic info, addresses)
- Seller dashboard (my listings, orders/rentals)

### Operations & quality
- Server-side validation + consistent error responses
- Pagination for large lists
- Audit-friendly timestamps (created/updated)
- API documentation (OpenAPI/Swagger)

---

## Tech stack
### Backend
- Java + Spring Boot
- PostgreSQL
- Spring Web (REST), Spring Data JPA (persistence)
- Validation (Bean Validation)
- Migrations (Flyway or Liquibase)
- Auth (JWT recommended)
- Testing (JUnit 5, Mockito; Testcontainers recommended)

### Frontend
- React + Vite
- TailwindCSS
- API client (fetch/axios)
- React Router (recommended)

### DevOps (portfolio-ready)
- Docker + docker-compose (recommended)
- CI pipeline (recommended): build + tests + lint

