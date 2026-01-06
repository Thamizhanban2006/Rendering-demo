# Advanced Data Fetching in Next.js (App Router)

## Rendering Strategies Implemented

### Static Rendering (SSG)
- **Page:** `/about`
- **Implementation:** `export const revalidate = false`
- **Why Chosen:**  
  The content on this page is informational and does not change frequently. Static rendering provides the fastest load times and scales efficiently with zero server cost per request.

---

### Dynamic Rendering (SSR)
- **Page:** `/dashboard`
- **Implementation:**  
  `export const dynamic = 'force-dynamic'`  
  `fetch(..., { cache: 'no-store' })`
- **Why Chosen:**  
  This page displays real-time, user-specific data that must always be up to date. Server-side rendering ensures data freshness on every request, even though it increases server usage.

---

### Hybrid Rendering (ISR)
- **Page:** `/news`
- **Implementation:** `export const revalidate = 60`
- **Why Chosen:**  
  News content needs to stay relatively fresh but does not require real-time updates. Incremental Static Regeneration allows the page to remain fast while updating periodically in the background.

---

## Impact on Performance, Scalability, and Data Freshness

- **Static Rendering (SSG):**  
  Delivers the best performance and scalability but may serve outdated data if content changes frequently.
- **Dynamic Rendering (SSR):**  
  Guarantees the freshest data but increases server load and operational cost.
- **Hybrid Rendering (ISR):**  
  Provides a balance by combining fast static delivery with scheduled data updates.

Choosing the right strategy ensures optimal user experience while controlling infrastructure cost.

---

## Case Study: DailyEdge News Portal

DailyEdge initially used static rendering for all pages, resulting in outdated “Breaking News” content. Switching everything to server-side rendering fixed freshness issues but caused slower page loads and higher hosting costs.

### Optimized Approach:
- **Homepage:** Static Rendering (SSG) for fast load times
- **Breaking News Sec**


# Multi-Environment Deployment & Secret Management

## Environment-Aware Builds

We configured separate environment files:
- `.env.development`
- `.env.staging`
- `.env.production`

Each environment points to different API endpoints and configurations, ensuring safe testing before production deployment.



---

## Secure Secret Management

Sensitive values such as API URLs and database credentials are stored securely using **GitHub Secrets**. These secrets are injected during the CI/CD build process and are never hardcoded or committed to the repository.

---

## Why Environment Segregation Matters

Separating development, staging, and production environments:
- Prevents accidental production data loss
- Enables safe testing and validation
- Improves deployment reliability and confidence

Secure secret management ensures sensitive credentials are protected from leaks and misuse.

---

## Case Study: ShopLite Incident

The issue occurred because staging credentials were used in production. This could have been prevented by:
- Strict environment-specific configuration files
- Using GitHub Secrets per environment
- Environment-aware CI/CD pipelines

This approach ensures production data remains isolated and protected.
