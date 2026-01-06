# Advanced Data Fetching in Next.js (App Router)

## Rendering Strategies Used

### Static Rendering (SSG)
- Page: /about
- Technique: `export const revalidate = false`
- Reason: Content rarely changes, fastest load time

### Dynamic Rendering (SSR)
- Page: /dashboard
- Technique: `dynamic = 'force-dynamic'` and `cache: 'no-store'`
- Reason: Requires real-time, user-specific data

### Hybrid Rendering (ISR)
- Page: /news
- Technique: `export const revalidate = 60`
- Reason: Balances freshness with performance

---

## Impact on Performance, Scalability, and Freshness

- **SSG** offers best performance and scalability but outdated data
- **SSR** ensures fresh data but increases server cost
- **ISR** provides a balance by refreshing data periodically

---

## Case Study: DailyEdge News Portal

Using **SSR everywhere** caused high server cost and slower loads.
A better solution:
- Homepage → Static (SSG)
- Breaking News → ISR (revalidate every 30–60 seconds)
- User Dashboard → SSR

This balances speed, freshness, and cost.

---

## Reflection

If the app had 10x more users:
- SSR would be limited to user-specific pages
- Static and ISR would handle most traffic
- This reduces cost and improves scalability
